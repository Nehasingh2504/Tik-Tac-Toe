let cnt=0

// on the click of button X or O will display
function mark(symbol) {
    let score1 = document.getElementById('score1')
    let score2 = document.getElementById('score2')
    let turn = document.getElementById('turn')
    cnt=cnt+1
    if(symbol.value == ''){
        // for even count X will display
        if(cnt%2==0){
            symbol.value='X'
            symbol.className +=' xstyle'
            score1.classList.remove('score_box_turn')
            score2.className += ' score_box_turn'
            turn.innerHTML=''
            turn.innerHTML='O Turn'
            score2.classList.remove('xstyle')
        }

        // for odd count O will display
        else{
            symbol.value='O'
            symbol.className +=' ostyle'
            score2.classList.remove('score_box_turn')
            score1.className += ' score_box_turn'
            turn.innerHTML=''
            turn.innerHTML='X Turn'
            score1.classList.remove('ostyle')
        }
        check()
    }
}

// check if the box matches the sequence to win
function check(){
    win_position = [[1,2,3,[0,-100,0]],[4,5,6,[0,0,0]],[7,8,9,[0,100,0]],[1,4,7,[0,100,90]],[2,5,8,[0,0,90]],[3,6,9,[0,-110,90]],[1,5,9,[0,0,45]],[3,5,7,[0,0,-45]]]
    for(i=0;i<win_position.length;i++){
        if(document.getElementById(win_position[i][0]).value == 'X' && document.getElementById(win_position[i][1]).value == 'X' && document.getElementById(win_position[i][2]).value == 'X'){
            draw_line(win_position[i][3],'X')
            return
        }
        else if(document.getElementById(win_position[i][0]).value == 'O' && document.getElementById(win_position[i][1]).value == 'O' && document.getElementById(win_position[i][2]).value == 'O'){
            draw_line(win_position[i][3],'O')
            return
        }
    }

    // if all block is filled and no box matches the sequence to win then draw will display
    for(i=1;i<=9;i++){
        if(document.getElementById(i).value==''){
            return
        }
    }
    if(i==10){
        display_win.style.visibility='visible'
        winner_name.innerHTML = `TIE`
        image= document.getElementById('img')
        image.src='https://media.tenor.com/lr8PEdtjTEQAAAAm/mimibubu.webp'
    }
}

x=0
o=0
// draw a line on the box which matches the sequence to win and display winner
function draw_line(win_position,symbol) {
    display_win = document.getElementById('display_win')
    line = document.getElementById('line');
    winner_name = document.getElementById('winner_name')

    // draw a line on the box
    line.style.width = `360px`;
    line.style.transform = `rotate(${win_position[2]}deg) translate(${win_position[0]}px, ${win_position[1]}px)`;
    
    // display scores on score box
    if(symbol == 'X'){
        x=x+1
        document.getElementById('scoreX').innerHTML = x
    }
    else{
        o=o+1
        document.getElementById('scoreO').innerHTML = o
    }

    // display the winner
    display_win.style.visibility='visible'
    winner_name.innerHTML = `${symbol} WINS`
}

// reset the game from the beginning
function reset() {
    let score1 = document.getElementById('score1')
    let score2 = document.getElementById('score2')
    let line = document.getElementById('line')
    let turn = document.getElementById('turn')

    for(i=1;i<=9;i++){
        document.getElementById(i).value=''
        document.getElementById(i).classList.remove('xstyle')
        document.getElementById(i).classList.remove('ostyle')
        cnt=0
    }   

    turn.innerHTML='Start Game'
    
    score1.classList.remove('score_box_turn')
    score2.classList.remove('score_box_turn')
    score2.className += ' score_box_turn'
    line.style.width='0px'
}

// on the click of button the diplay winner will hide
function click_ok() {
    document.getElementById('display_win').style.visibility='hidden'
    image= document.getElementById('img')
    image.src='https://media.tenor.com/v9w5MP3vJBsAAAAm/%E9%96%8B%E5%BF%83%E8%B7%B3%E8%88%9E-%E8%B7%B3%E8%88%9E.webp'
}
