// You are going to write a React component named `
// Hi`, pass two properties into this component `firstName`
// and `lastName`. When you run your program your HTML
//  should say `"Hi yourFirstName yourLastName"`
import React from "react";
import "./styles.css";
import Dice from "./components/Dice.js"; //in dice.js making the component but wont be used until imported and initialized
import { useState } from 'react'; // use for 2 diff variables that in charge of hcih files images pointing to/ 
//method1: 
export default function App() { //component
  const player1 = "Player 1 ";
  const player2 = "Player 2 ";
  const image = "../images/dice1.png";
  const [dieRoll1,setDieRoll1] = useState(()=> { //trying to set inital state to face1
    let randomDiceImgSrc = "../images/dice1.png";
    return randomDiceImgSrc
  }); //holds current image based on whatevere they rolled
  const [dieRoll2,setDieRoll2] =useState(()=> { //trying to set inital state to face1
    let randomDiceImgSrc = "../images/dice1.png";
    return randomDiceImgSrc ;
   }); //inital die roll, starting values 
  //setImage1 to change the state or the value of image1
  //instead image1 = you do setImage1(the value)
  //useState tells it this will be a stateVariable and value passed is default

  const changeImage = () => { //when button clicked this func will be triggered
    // console.log(("hello"))
    let randomNumber1 = Math.floor(Math.random()*6 +1);
    let randomDiceImgSrc = "../images/dice" + randomNumber1 + ".png";
    console.log(randomDiceImgSrc)

    // // let image1= document.getElementById("img1");
    // // image1.setAttribute("src", randomDiceImgSrc);
    setDieRoll1(randomDiceImgSrc) //img1 will get set to this random img
    
    //doing the same for image 2
    let randomNumber2 = Math.floor(Math.random()*6 +1);
    let randomDiceImgSrc2 = "../images/dice" +randomNumber2 + ".png"; 
    setDieRoll2(randomDiceImgSrc2) 
    // let image2 = document.querySelectorAll("img")[1]
    // let image2 = document.getElementById("img2");
    // image2.setAttribute("src", randomDiceImgSrc2); 
  }

  return ( //children
    <>
    <div className="App">
        <center>
            <h1>TITLE</h1>
        </center>
      <Dice player={player1} face={dieRoll1} />  {/* initializing- putting the component on the page*/}
      <Dice player={player2} face={dieRoll2} /> 
      {/* using state variables now ^ anytime image */}
      <button className="diceRollButton" onClick ={changeImage}> Roll the dice </button>
{/* onClick ={changeImage} */}
    </div>
    
    </>
    
  );
}


//canput both imgs in dice component- may be confusing want to keep components simple
//could seperate so the button is just in app.js so controlled thru there & have new component thats just these images 
//dice component that just shows img- tell what img to show and shows it 
// app will have button + func to roll 
// we imported the component
// we are doing this step so its imported into your diff files so it can
// hi.js is where we are making reusable code
//app.js is where you are calling that code to be used


//method 2: 
//code out all of the code for dice 1 and dice 2, wont be instances of each the dice component 

// export default function App(){ 
//     const player = "Player 1"; 
//     const  image= "../images/dice1.png"; 
//     return(
//         <div className = "dice">
//             <center> 
//                 <h1>DICE ROLL GAME</h1>
//                 <div className="container">
                
//                 </div>

//         </center>

//         </div>
//          ); 
//     } 