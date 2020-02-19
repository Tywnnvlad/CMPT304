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
            cell.onclick = function(){
                click(this);
            };
            //Set the coordinates of each tile
            cell.setAttribute("id","cell"+x+""+y,0);
            var mine = document.createAttribute("mineValue");
            mine.value = false;
            cell.setAttributeNode(mine);
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

function click(cell){
    if(cell.getAttribute("minveValue")=="true"){
        alert("BOOM");
    }
}

//dunno if I need this
function tableCell(row,col){
    this.x=row;
    this.y=col;
}

makeTable();