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
            cell.setAttribute("id","tableCell",0);
            var isMine = document.createAttribute("mineValue");
            isMine.value = false;
            cell.setAttributeNode(isMine);
            //cell.setAttribute("class","cell"+x+""+y,0);                   
            cell.innerHTML = x+""+y; 
        }
    }addMine();
}
function clearBoard(){
    document.getElementById('boardTable').innerHTML="";
}
function getBoardSize(){
    var getSize = document.getElementById('boardText').value;
    return getSize;
}
function addMine(sizeOfBoard){
    var theMines = Math.pow(sizeOfBoard,2)*0.2;
    for (var i = 0; i<theMines; i++){
        var row = Math.floor(Math.random()*(theMines/2));
        var col = Math.floor(Math.random()*(theMines/2));
        var cell = table.rows[row].cells[col];
        cell.setAttribute("mineValue","true");
        cell.innerHTML="X";
    }

}

function click(cell){
    var cell = table.rows[row].cells[col];
    cell.innerHTML = "X";
}

//dunno if I need this
function tableCell(row,col){
    this.x=row;
    this.y=col;
}

makeTable();