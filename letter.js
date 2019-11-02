function Letter(value){
    this.letter= value,
    this.guessed= false;
    this.toString= function(){
        if(this.guessed===" "){
            this.guessed=true;
            return " ";
        }else{
            if(this.guessed=== false){
                return "_";
            }else{
                return this.letter; 
            }
        }
    };

    this.userGuess= function(guess){
        if(guess=== this.letter){
            this.guessed=true;
        }
    }
};

module.exports={Letter};