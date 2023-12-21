import React from "react";

function Result({secretNum,term}){
    let Result;
   if(term){
    if(term>secretNum){
        Result = "higher";
    }else if(term<secretNum){
        Result = "lower";
    }else if(term==secretNum){
        Result = "Yipeee! correct";
    }else{
        Result ="Enter valid input"
    }
   }
    return <h3>You Guessed: {Result}</h3>
}
export default Result;