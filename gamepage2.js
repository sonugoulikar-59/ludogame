variables3 = localStorage.getItem("keypair1");
variables4 = localStorage.getItem("keypair2");

marker=1000;
sketch=500;

document.getElementById("name1").innerHTML = variables3 + " : " ;
document.getElementById("name2").innerHTML = variables4 + " : " ;

document.getElementById("score1").innerHTML = marker;
document.getElementById("score2").innerHTML = sketch;

document.getElementById("play1").innerHTML = "winner 1 : " + variables3;
document.getElementById("play2").innerHTML = "winner2 : " + variables4;

function display(){
    message1 = document.getElementById("reels").value;
    message2 = document.getElementById("tiktok").value;
    final_answer= "message1" + "message2";
    console.log(final_answer);
    
    
    variables5 = "<h7>" + message1 + " + " + message2 + "</h7>";
    input_box1 = "<br> Champion : <input type='text' id='sonu'>";
    check_button = "<br><button class='btn-btn-info' onclick= 'report()'>Result is </butoon>";
    row = variables5 + input_box1 + check_button;
    document.getElementById("finalop").innerHTML = row;
    document.getElementById("reels").value = "";
    document.getElementById("tiktok").value = "";   
}
Questioning = "game1";
Answering = "game2";
function report(){
    get_answer = document.getElementById("sonu").value;
    if(get_answer==final_answer)
        {
            if(Answering= "game1")
                {
                    marker = marker+500;
                    document.getElementById("score1").innerHTML = marker;
                }
            else 
                {
                    sketch = sketch+500;
                    document.getElementById("score2").innerHTML = sketch;
                }
        }
    if(Questioning== "game1")
        {
            Questioning = "game2"
            document.getElementById("play1").innerHTML = "winner 1 is :" + variables4;
        }
    else{
        Questioning= "game1"
        document.getElementById("play1").innerHTML = "winner 1 is :" + variables3;
    }
    if(Answering=="game1")
        {
            Answering = "game2"
            document.getElementById("play2").innerHTML = "winner 2 is :" + variables4;
    
        }
    else{
        Answering="game1"
        document.getElementById("play2").innerHTML = "winner 2 is :" + variables3;
    }
    document.getElementById("justop").innerHTML="";
}



function rolldice(){
    if(true){
        let Winner = "3 Games";
        document.getElementById("alpa").textContent=Winner;
    }
    rolldice();
    
}
function rolldice1(){
    if(true){
        let Winner = "2 Games";
        document.getElementById("alpa1").textContent=Winner;
    }
    rolldice();
    
}


