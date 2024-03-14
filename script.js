const container=document.querySelector("#container");
function createGrid(){
    const grid=document.createElement("div");
    grid.classList.add("grid");
    return grid;
}
function AddCollor(){
    let numbers="0123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++){
        color+=numbers[Math.floor(Math.random()*16)];
    }
    return color;
}
function Grid(numberdivs){
    let number_of_divs=numberdivs;
    let create_divs=number_of_divs**2;
    let containerWidth=container.clientWidth;
    let divWidth= containerWidth/number_of_divs;

    container.innerHTML="";
    for(let i=0;i<create_divs;i++){
            const grid=createGrid();
            grid.style.width=divWidth+"px";
            container.appendChild(grid);
    }
    const Items=document.querySelectorAll("#container div");
    Items.forEach(function(i){
        i.addEventListener("mouseover",function(){
            i.style.backgroundColor=AddCollor();
        })
    })


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
 
const select=document.querySelector("#select");
select.addEventListener("click",callRowsCols);

const resetButtons = document.querySelectorAll(".reset");
resetButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        Grid(16);
    });
});
