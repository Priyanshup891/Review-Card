const review = [
    {
        img: "./img/persone1.jpg",
        auother: "susy deo",
        work: "Designer"
    },
    {
        img: "./img/persone2.jpg",
        auother: "harry potter",
        work: "Developer"
    },
    {
        img: "./img/persone3.jpg",
        auother: "maxin klon",
        work: "Manager"
    },
    {
        img: "./img/persone4.jpg",
        auother: "john deo",
        work: "Developer"
    },
    {
        img: "./img/persone5.jpg",
        auother: "marco nile",
        work: "Content-Creater"
    },
];

console.log("hello");

const auotherImg = document.getElementById('auother');
const auotherName = document.getElementById('name');
const position = document.getElementById('work');

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded',() => {
    const item = review[currentItem];
    auotherImg.src = item.img;
    auotherName.textContent = item.auother;
    position.textContent = item.work;
})

function showPersone(persone){
    const item = review[persone];
    auotherImg.src = item.img;
    auotherName.textContent = item.auother;
    position.textContent = item.work;
};

nextBtn.addEventListener('click',() => {
    currentItem++;
    if(currentItem > review.length - 1){
        currentItem = 0;
    }
    showPersone(currentItem);
})

prevBtn.addEventListener('click',() => {
    currentItem--;
    if (currentItem < 0){
        currentItem = review.length - 1;
    }
    showPersone(currentItem);
})