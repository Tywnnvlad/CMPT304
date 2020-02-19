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
            cell.setAttribute("id","tableCell",0);
            var isMine = document.createElement("mineValue");
            isMine.value = false;
            //cell.setAttribute("class","cell"+x+""+y,0);                   
            cell.innerHTML = x+""+y; 
        }
    }
}
function clearBoard(){
    document.getElementById('boardTable').innerHTML="";
}
function getBoardSize(){
    var getSize = document.getElementById('boardText').value;
    return getSize;
}
//dunno if I need this
function tableCell(row,col){
    this.x=row;
    this.y=col;
}

makeTable();