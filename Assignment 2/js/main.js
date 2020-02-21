var sizeOfBoard = 5;
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
            cell.innerHTML = x+""+y; 
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
        cell.innerHTML="X";
    }

}
//Click function
function click(cell){
    if(cell.getAttribute("mineValue")=="true"){
        cell.classList.add("mine");
        revealMine();
    }
    else{
    cell.classList.add("clicked");
    checkAround(cell);
    }
}
//A function to reveal all the mines if clicked
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
//
function checkAround(cell){
    var mineCount = 0;
    var cellRow = cell.parentNode.rowIndex;
    var cellCol = cell.cellIndex;
    for (var i=Math.max(cellRow-1,0); i<=Math.min(cellRow+1,9); i++) {
        for(var j=Math.max(cellCol-1,0); j<=Math.min(cellCol+1,9); j++) {
          if (table.rows[i].cells[j].getAttribute("mineValue")=="true") mineCount++;
        }
      }
      cell.innerHTML=mineCount;

      if (mineCount==0) { 
        for (var i=Math.max(cellRow-1,0); i<=Math.min(cellRow+1,9); i++) {
          for(var j=Math.max(cellCol-1,0); j<=Math.min(cellCol+1,9); j++) {
            if (grid.rows[i].cells[j].innerHTML=="") clickCell(grid.rows[i].cells[j]);
          }
        }
      }
}

makeTable();