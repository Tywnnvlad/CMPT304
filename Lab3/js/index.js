
var table = document.getElementById('tableGrid');
var control = document.getElementById('colorTable');
var curColor = document.getElementById('currentColor');
var cellColor = document.getElementById('cellColor');
var color = ["crimson", "green","blue","yellow","brown","white","black"];
var cellNum;

//Size of the table
var tableSize = 10;

function generateTable(){
    for(i = 0; i < tableSize; i++){
        var row = table.insertRow(i);
        for(j = 0; j < tableSize; j++){
            var cell = row.insertCell(j);
            var color = document.createAttribute("colorValue");
            color.value = "black"
            cell.setAttributeNode(color);            
        }       
    }
}

function generateControlTable(){
    for(i = 0; i < 1;i++){
        var row = control.insertRow(i);
        for(j = 0; j < 7; j++){
        var cell = row.insertCell(j);
        cell.setAttribute("class","color"+j,0);
        // cell.addEventListener("click",(e)=>{
        //     click(e.target);});
        // cell.addEventListener("click",function(){
        //     console.log(j + "");
        //     changeColor(j);
        // });

        // cell.addEventListener("click",function(){
        //     click(j);
        // });
        
        }
    }
}

function currentColorTable(){
    cell = curColor.insertRow(0).insertCell(0);
    cell.setAttribute("name","cellColor");
    cell.setAttribute("id","cell");
    cell.addEventListener("click",(e)=>{
    click(e.target);});
    var color = document.createAttribute("colorValue");
    color.value = "black"
    cell.setAttributeNode(color); 
}

 function changeColor(i){
    cellNum = i;
 }
function click(i){
    // if(curColor.getAttribute("colorValue")=="red"){
    document.getElementById("cell").style.background =color[i];
    // }
}

currentColorTable();
generateControlTable();
generateTable();