const container=document.querySelector("#container");
function createGrid(){
    const grid=document.createElement("div");
    grid.classList.add("grid");
    grid.setAttribute("style","width:64px; height:64px; border: 0.2px solid black;")
    return grid;
}
function Grid(rows,cols){
    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            const grid=createGrid();
            container.appendChild(grid);
        }
    }
}
Grid(16,16);
function callRowsCols(){
    const rows=parseInt(prompt("INGRESE FILAS"));
    const cols=parseInt(prompt("INGRESE COLUMNAS"));
    Grid(rows,cols);    
}
const select=document.querySelector("#select")
select.addEventListener("click",callRowsCols)
