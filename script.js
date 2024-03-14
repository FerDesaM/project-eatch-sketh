const container=document.querySelector("#container");
function createGrid(){
    const grid=document.createElement("div");
    grid.classList.add("grid");
    return grid;
}
function Grid(numberdivs){
    let number_of_divs=numberdivs;
    let create_divs=number_of_divs**2;
    for(let i=0;i<create_divs;i++){
            const grid=createGrid();
            container.appendChild(grid);
    }
    const divs=document.querySelectorAll("#container div");
    divs.forEach(
        function(div) {
            div.style.width="calc(100% / " + number_of_divs + ")";
        }
    )
}

Grid(16);


function callRowsCols(){
    const divs = parseInt(prompt("Number of divs"));
    if (divs > 100) {
        alert("You have exceeded the limit");
    } else if (divs <= 0 || isNaN(divs)) {
        alert("Invalid input. Please enter a valid number.");
    } else {
        Grid(divs);
    }
}
 

const select=document.querySelector("#select")
select.addEventListener("click",callRowsCols)

function AddCollor(){
    
}