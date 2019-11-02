var inquirer= require("inquirer");
var Letter = require("./letter.js");

var letterArr= "abcdefghijklmnopqrstuvwxyz";

var countries= [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
   
    
];

var randomCont= Math.floor(Math.random()*countries.length);
var ranWord = countries[randomCont]; 

var compWord= new Word(ranWord);

var reqWord = false;
var wrongLetters= [];
var correctLetters= [];

var guessCount = 10;

function gameLogic(){
    if(reqWord){
        var randomCont= Math.floor(Math.random()*countries.length);
        var ranWord = countries[randomCont];
        var compWord= new Word(ranWord);

        var reqWord = false;
    }
    var completeWord=[];
    if(completeWord.includes(false)){
        inquirer.prompt(
            [{
                type:"input",
                name:"userInput",
                message:"Guess the Country",
            
        
            }]
            ).then(function(input){
        
            if(letterArr.includes(input.userInput || input.userInput.length > 1)){
                    console.log("you lose.");
                    gameLogic();
            }else{

                
        } else{
        console.log("you win!");

}
        

}

