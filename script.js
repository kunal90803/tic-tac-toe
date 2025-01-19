let boxes=document.querySelectorAll(".box");
const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let grid=[[0,0,0],[0,0,0],[0,0,0]]
let playerTurn=true; // player 1 turn
let gameActive=false; // game active or not
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(box.innerHTML=="" && playerTurn){
        box.innerHTML="X"; 
        playerTurn=!playerTurn;
        }
        if(box.innerHTML=="" && !playerTurn){
        box.innerHTML="O"; 
        playerTurn=!playerTurn;
        }
        // Winning Series
        setTimeout(()=>checkWinner(),100);
        
        



    })
})

function checkWinner(){
    for (let i = 0; i < winPattern.length; i++) {
        if (
            boxes[winPattern[i][0]].innerHTML !== "" && // Ensure box is not empty
            boxes[winPattern[i][0]].innerHTML === boxes[winPattern[i][1]].innerHTML &&
            boxes[winPattern[i][1]].innerHTML === boxes[winPattern[i][2]].innerHTML
        ) {
            if (boxes[winPattern[i][0]].innerHTML === "O") {
                alert("Player 2 wins");
                clear();
                
            } else if (boxes[winPattern[i][0]].innerHTML === "X") {
                alert("Player 1 wins");
                clear();
            }
        }
    }
}

let reset=document.querySelector(".reset");
reset.addEventListener("click",clear);

function clear(){
    boxes.forEach((box)=>{
        box.innerHTML="";
        playerTurn=true;
    })
}

