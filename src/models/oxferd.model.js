
const fs = require('fs');

const words = require('./oxferd.mongo');


async function getAllWords(){
    const allWords= await words.find({});
    return allWords;
}

async function saveWord(data){
    try {
        await words.updateOne({ id:data.id }, {id:data.id,metadata:data.metadata,results:data.results,word:data.word}, {new: true,upsert:true});
    } catch (error) {
        console.error('Could not Save Planet', error)
    }
}

async function getWord(word_id){
    try{
        return await words.findOne({id:word_id})
    }catch(error){
        console.log(error)    
    }
}

module.exports = {
    getAllWords,
    saveWord,
    getWord
}