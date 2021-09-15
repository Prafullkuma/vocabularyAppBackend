const { getAllWords,saveWord,getWord} = require('../../models/oxferd.model');
const axios =require('axios')

const oxferdUrl=`https://od-api.oxforddictionaries.com/api/v2`
const source_lang="en-gb"
const app_id = "a129b7f6"; 
const app_key = "e09b73d7d40e14d517952b59658b46e6";

//get all Words

async function httpGetAllWords(req, res){
    try {
        return res.status(200).json(await getAllWords());
    } catch (error) {
        return res.status(500).send({ error })
    }
}


//add word

async function httpAddWord(req,res){
    try{

        const word_id=req.query['word_id']
        if(!word_id){
            return res.status(404).send({error:"word_id is not found"})
        }
        let getWordFromDb=await getWord(word_id)
        
        if(getWordFromDb && getWordFromDb.id===word_id){
            return res.json(getWordFromDb);
        }

        try {
            let response =await axios.get(`${oxferdUrl}/entries/${source_lang}/${word_id}`,{
                headers: {
                    'app_id': app_id,
                    'app_key': app_key
                }
            })

            saveWord(response.data)
            res.json(response.data)
        
        } catch (error) {
            return res.status(500).send({ error })
        }
    }
    catch(error){
        return res.status(500).send({ error })
    }   
}
async function httpSearchWord(req,res){
     try{
        const word_id=req.query['word_id']
        if(!word_id){
            return res.status(404).send({error:"word_id is not found"})
        }
        let getWordFromDb=await getWord(word_id)
        if(getWordFromDb && getWordFromDb.id===word_id){
            return res.json(getWordFromDb);
        }else{
            return res.status(200).send({message:"data not found"})
        }
     }
     catch(error){

     }
}

module.exports = { httpGetAllWords,httpAddWord,httpSearchWord}