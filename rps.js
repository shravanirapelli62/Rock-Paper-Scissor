 let win=0;
let lose=0;
let tie=0;

const winplay = document.getElementById("win")
const loseplay = document.getElementById("lose")
const tieplay = document.getElementById("tie")
const button = document.getElementById("autoplay")
const user = document.getElementById("u")
const system = document.getElementById("s")
let res = document.getElementById("res")

function userinput(value){
    user.innerHTML= `User input: ${value}`;
    console.log('input accpeted given',value);
    const sys= systemInput();
    system.innerHTML=`system input: ${sys}`;
    console.log('system input given:',sys);
    a(value,sys);


    win=win.toString().padStart(2,0);
    lose=lose.toString().padStart(2,0);
    tie=tie.toString().padStart(2,0);

    winplay.innerHTML=`win:${win}`;
    loseplay.innerHTML=`lose:${lose}`;
    tieplay.innerHTML=`tie:${tie}`;

    console.log('win:',win,'lose:',lose,'tie:',tie);
} 
function systemInput(){
    let b=Math.round(Math.random()*2);
    if(b==0){
        return 'rock';
     }else if(b==1){
        return 'paper';
     }else if(b==2){
        return 'scissor';
     }
}


function a(userin,sys){
    if(userin=='rock'){
        if(sys=='rock'){
            tie++;
            res.innerHTML=`Result:${'tie'}`;
            console.log('tie')
        }else if(sys=='paper'){
            lose++;
            res.innerHTML=`Result:${'lose'}`;
            console.log('lose');

        }else if(sys=='scissor'){
             win++;
             res.innerHTML=`Result:${'win'}`;
             console.log('win')
        }
    }else if(userin=='paper'){
        if(sys=='rock'){
            win++;
            res.innerHTML=`Result:${'win'}`;
            console.log('win')
        }else if(sys=='paper'){
               tie++;
               res.innerHTML=`Result:${'tie'}`;
               console.log('tie');
        }else if(sys=='scissor'){
               lose++;
               res.innerHTML=`Result:${'lose'}`;
               console.log('lose');
        }
    }else if(userin=='scissor'){
        if(sys='rock'){

            lose++;
            res.innerHTML=`Result:${'lose'}`;
            console.log('lose')
        }else if(sys=='paper'){
            win++;
            res.innerHTML=`Result:${'win'}`;
            console.log('win');
        }else if(sys=='scissor'){
            tie++;
            res.innerHTML=`Result:${'tie'}`;
            console.log('tie');

        }
    }
}

function reset(){
    win=0;
    lose=0;
    tie=0;
    value=0;
  sysInput=0;
   res.innerHTML=`Result:${'0'}`
    user.innerHTML=`User input: ${ value}`;
  system.innerHTML=`System input: ${ sysInput}`;
    win = win.toString().padStart(3,0)
  lose = lose.toString().padStart(3,0)
  tie = tie.toString().padStart(3,0)
    winplay.innerHTML=`win: ${win}`;
    loseplay.innerHTML=`lose: ${lose}`;
    tieplay.innerHTML=`tie: ${tie}`;
    console.log('win:',win,'lose:',lose,'tie:',tie)

}

let isAutoPlay = 0;
let id;
function autoplay(){
    if(!isAutoPlay){
        isAutoPlay=1;
       
        button.innerHTML="Autoplay:on"
        id = setInterval(()=>{
            const userIn = systemInput();
            console.log("autoplay userin",userIn)
            userinput(userIn)
        },1000)
    }else{
       
        clearInterval(id);
        isAutoPlay=0;
       

        button.innerHTML="Autoplay:off"
        
    }
}