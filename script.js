
var l=1;
var count = [0];
var arr   = ["","","","","","","","",""];
var color = [0,0,0,0,0,0,0,0,0];
function ggs(g){
    if(count[0]>8){
        document.querySelector(".current").textContent = "Match Tied";
        document.querySelector(".ticbox").classList.add("done");
        document.querySelector(".newgame").classList.add("gamevisible");
    }
    else{
        if(count[0]%2 == 0){
            if(g.textContent != "X" && g.textContent != "O"){
                document.querySelector(".current").textContent = "current player - O";
                g.textContent  = "X";
                arr[g.classList[2]] = "X";
                count[0]++;
                if(check("X")){
                    document.querySelector(".current").textContent = "Player-X Wins "
                    for(let i =0; i<9;i++){
                        if (color[i] === 1) {
                            document.querySelector(".box" + i).classList.add("green");
                        }
                    }
                    document.querySelector(".ticbox").classList.add("done");
                    document.querySelector(".newgame").classList.add("gamevisible");
                }
            }
        
        }
        else{
            
            if(g.textContent != "X" && g.textContent != "O"){
                document.querySelector(".current").textContent = "current player - X";
                g.textContent  = "O";
                arr[g.classList[2]] = "O";
                count[0]++;
                if(check("O")){
                    document.querySelector(".current").textContent = "Player-O Wins ";
                    for(let i =0; i<9;i++){
                        if (color[i] === 1) {
                            document.querySelector(".box" + i).classList.add("green");
                        }
                    }
                    document.querySelector(".ticbox").classList.add("done");
                    document.querySelector(".newgame").classList.add("gamevisible");
                }
            }

        }
    }
    
}
function check(m){
    var flag = 0;
    

    if(arr[0]===m && arr[1]===m && arr[2]===m){
        color[0] = color[1] = color[2] = 1;
        flag = 1;
    }
    if(arr[3]===m && arr[4]===m && arr[5]===m){
        color[3] = color[4] = color[5] = 1;
        flag = 1;
    }
    if(arr[6]===m && arr[7]===m && arr[8]===m){
        flag = 1;
        color[6] = color[7] = color[8] = 1; 
    }
    if(arr[0]===m && arr[3]===m && arr[6]===m) {
        flag = 1;
        color[0] = color[3] = color[6] = 1; 
    }
    if(arr[1]===m && arr[4]===m && arr[7]===m) {
        flag = 1;
        color[1] = color[4] = color[7] = 1; 
    }
    if(arr[2]===m && arr[5]===m && arr[8]===m) {
        flag = 1;
        color[2] = color[5] = color[8] = 1;  
    }
    
        
    if(arr[0]===m && arr[4]===m && arr[8]===m) {
        flag = 1;
        color[0] = color[4] = color[8] = 1;  
    }
    if(arr[2]===m && arr[4]===m && arr[6]===m) {
        flag = 1;
        color[2] = color[4] = color[6] = 1;  
    }            
    return flag;
}

function newgame(){
    document.querySelector(".current").textContent = "current player - X";
    document.querySelector(".ticbox").classList.remove("done");
    document.querySelector(".newgame").classList.remove("gamevisible");
    for(let i =0; i<9;i++){
                        if (color[i] === 1) {
                            document.querySelector(".box" + i).classList.remove("green");
                        }
                        document.querySelector(".box" + i).textContent="";
                    }
    count = [0];
    arr   = ["","","","","","","","",""];
    color = [0,0,0,0,0,0,0,0,0];
    
}
