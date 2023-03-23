const div1 = document.getElementById('1');
const div2 = document.getElementById('2');
const div3 = document.getElementById('3');
const div4 = document.getElementById('4');
const div5 = document.getElementById('5');
const div6 = document.getElementById('6');
const div7 = document.getElementById('7');
const div8 = document.getElementById('8');
const div9 = document.getElementById('9');
const tooltip = document.getElementById('tooltip');
const words = document.getElementById('words');
const reset = document.getElementById('reset');

checkList = [false,false,false,false,false,false,false,false,false];
const dog = [div1,div2,div3,div4,div5,div6,div7,div8,div9];
player_O = [];
player_X = [];

time_O = 0;
time_X = 0;

count = true;

win_conditions = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]

function win(player = []) {
    if(player.includes("1")&&player.includes("2")&&player.includes("3")) {
        return true;
    }else if(player.includes("4")&&player.includes("5")&&player.includes("6")) {
        return true;
    }else if(player.includes("7")&&player.includes("8")&&player.includes("9")) {
        return true;
    }else if(player.includes("1")&&player.includes("4")&&player.includes("7")) {
        return true;
    }else if(player.includes("2")&&player.includes("5")&&player.includes("8")) {
        return true;
    }else if(player.includes("3")&&player.includes("6")&&player.includes("9")) {
        return true;
    }else if(player.includes("1")&&player.includes("5")&&player.includes("9")) {
        return true;
    }else if(player.includes("3")&&player.includes("5")&&player.includes("7")) {
        return true;
    }
}

function showTooltip(show,condition) {
    if(condition) {
        tooltip.classList.remove('hidden');
        words.innerHTML = show + " wins!";
    }else {
        tooltip.classList.remove('hidden');
        words.innerHTML = show + "Tie!";
    }
}

function resetGame() {
    tooltip.classList.add('hidden');
    dog.forEach(element => element.innerHTML = " ");
    checkList = [false,false,false,false,false,false,false,false,false];
    player_O = [];
    player_X = [];
    time_O = 0;
    time_X = 0;
    count = true;
}

for(let i=0;i<dog.length;i++){
    dog[i].addEventListener('click',(e) =>{
        value = e.target.getAttribute('value');

       if(checkList[i] == false) {
         
        if(count == true){
            show = "O";
            player_O.push(value);
            time_O++;
        }else {
            show = "X";
            player_X.push(value);
            time_X++;
        }

        if(win(player_O)) {
            dog[i].innerHTML = show;
            showTooltip(show,win(player_O));
        }else if(win(player_X)) {
            dog[i].innerHTML = show;
            showTooltip(show,win(player_X));
        }else if(!win(player_O) && !win(player_X) && (time_O > 4 || time_X > 4)) {
            dog[i].innerHTML = show;
            showTooltip(" ",0);
        } else {
            dog[i].innerHTML = show;
            count = !count;
            checkList[i] = true;
        }

       }else {
        return;
       }

    })
}

reset.addEventListener('click',() => {
    resetGame();
})
