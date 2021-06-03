var ans
var turn = 1
var score = 0
var id = localStorage.getItem("player1")
console.log(id)
document.getElementById("P1_name").innerHTML = id + " : " + score
function aq(){
    turn = 0
var n1=Math.floor(Math.random()*21)
var n2=Math.floor(Math.random()*11)
ans = n1 * n2
var q = "<h3>" + n1 + " X " + n2+ "</h3>"
var a ="<br><input id='in' placeholder='Enter the Answer' class='form-control' style='width:30%;margin-left:235px'><br><br><h3 id='cow'></h3><br><br><button class='btn btn-primary' id='answer' onclick='check()'>Check</button>"
document.getElementById("output").innerHTML=q + a
}
function check(){
    var ui = document.getElementById("in").value
    if(turn == 0){
    if(ui == ans){
       document.getElementById("cow").innerHTML = "Correct Answer"
        document.getElementById("cow").style.color = "green"
        score+=2
        document.getElementById("P1_name").innerHTML = id + " : " + score
       }else {
           document.getElementById("cow").innerHTML = "No the Answer is " + ans
        document.getElementById("cow").style.color = "red"
           score-=3
           document.getElementById("P1_name").innerHTML = id + " : " + score
       }
    document.getElementById("in").value = ""
    turn = 1
    }
}