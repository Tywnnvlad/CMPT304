
//GLOBAL VARIABLES
var tableSize = 10;
var table = document.getElementById('tableGrid');
var control = document.getElementById('colorTable');
var curColor = document.getElementById('currentColor');
var color = ["crimson", "green","blue","yellow","brown","white","black"];



//This function will generate the drawing area
function generateTable(){
    for(i = 0; i < tableSize; i++){
        var row = table.insertRow(i);
        for(j = 0; j < tableSize; j++){
            var cell = row.insertCell(j);
            cell.addEventListener("click",function(event){
                var colorID = document.getElementById("cell").getAttribute("colorID");
                event.target.style.background=color[colorID];
            });         
        }       
    }
}

function generateControlTable(){
    for(i = 0; i < 1;i++){
        var row = control.insertRow(i);
        for(j = 0; j < 7; j++){
        var cell = row.insertCell(j);
        cell.setAttribute("colorID",j,0);      
        cell.style.background=color[j];  
        cell.addEventListener("click", function(event) {    
            click(event.target.getAttribute("colorID"));
            // colorID = document.getElementById("cell").getAttribute("colorID");
        });
        
        }
    } 
}

function currentColorTable(){
    cell = curColor.insertRow(0).insertCell(0);
    cell.setAttribute("colorID","0");
    cell.setAttribute("id","cell");

    cell.style.background = color[0];
    
}

function click(i){
    document.getElementById("cell").style.background = color[i];
    document.getElementById("cell").setAttribute("colorID",i);
}

currentColorTable();
generateControlTable();
generateTable();