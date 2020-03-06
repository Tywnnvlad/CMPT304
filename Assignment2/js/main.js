/**
 Gregory Edward Cal 
 Assignment #2
 This program will 
 */
var sizeOfBoard = 0;
var board = document.getElementById('boardDiv');
var table = document.getElementById('boardTable');

function  makeTable(){
    clearBoard();    
    sizeOfBoard = getBoardSize();
    for(y = 0; y < sizeOfBoard; y++){
        var row = table.insertRow(y);
        for(var x = 0; x < sizeOfBoard; x++){
            var cell = row.insertCell(x);
            //Set the coordinates of each tile
            cell.setAttribute("id","cell"+x+""+y,0);
            var mine = document.createAttribute("mineValue");
            mine.value = false;
            cell.setAttributeNode(mine);
            cell.addEventListener("click",(e)=>{
                click(e.target);
            });
            //cell.setAttribute("class","cell"+x+""+y,0);                   
           // cell.innerHTML = x+""+y; 
        }
    }addMine(sizeOfBoard);
}
//Clear the board
function clearBoard(){
    document.getElementById('boardTable').innerHTML="";
}
//Get the board Size
function getBoardSize(){
    var getSize = document.getElementById('boardText').value;
    return getSize;
}
//Add mines
function addMine(sizeOfBoard){
    var theMines = Math.pow(sizeOfBoard,2)*0.2;
    for (var i = 0; i<theMines; i++){
        var row = Math.floor(Math.random()*sizeOfBoard);
        var col = Math.floor(Math.random()*sizeOfBoard);
        var cell = table.rows[row].cells[col];
        cell.setAttribute("mineValue","true");
        //cell.innerHTML="X";
    }

}
//Click function that will check if the cell that was clicked has mines
function click(cell){
    if(cell.getAttribute("mineValue")=="true"){
        cell.classList.add("mine");
        revealMine();
        alert("GAMEOVER");
    }
    else{
    cell.classList.add("clicked");
    checkAround(cell);
    checkVictory();
    }
}
//A function to reveal the rest of mines if a mine is clicked. 
function revealMine(){
    for(y = 0; y < sizeOfBoard; y++){
        for (x = 0; x < sizeOfBoard; x++){
           var coords = document.getElementById("cell"+x+""+y);
           if (coords.getAttribute("mineValue")=="true"){
               coords.classList.add("mine");
           }
        }
    }
}
//check the cell around and replace mine count
function checkAround(cell){
    var mineCount = 0;
    var cellRow = cell.parentNode.rowIndex;
    var cellCol = cell.cellIndex;
    for (var i=Math.max(cellRow-1,0); i<=Math.min(cellRow+1,sizeOfBoard-1); i++) {
        for(var j=Math.max(cellCol-1,0); j<=Math.min(cellCol+1,sizeOfBoard-1); j++) {
          if (table.rows[i].cells[j].getAttribute("mineValue")=="true") mineCount++;
        }
      }
      cell.innerHTML=mineCount;
      //If there is zero mine arround, recursively click() around until a mine is found
      if (mineCount==0) { 
        for (var i=Math.max(cellRow-1,0); i<=Math.min(cellRow+1,sizeOfBoard-1); i++) {
          for(var j=Math.max(cellCol-1,0); j<=Math.min(cellCol+1,sizeOfBoard-1); j++) {
            if (table.rows[i].cells[j].innerHTML=="") click(table.rows[i].cells[j]);
          }
        }
      }
}
function checkVictory(){
    var victory = true;
    for (var i = 0; i < sizeOfBoard-1; i++){
        for( var j = 0; j < sizeOfBoard-1; j++){
            if((table.rows[i].cells[j].getAttribute("mineValue")=="false")
            && (table.rows[i].cells[j].getAttribute("class")=="clicked"))
            victory = false;
        }
        if (victory){
            alert("VICTORY");
            revealMine();
        }
    }
}


makeTable();