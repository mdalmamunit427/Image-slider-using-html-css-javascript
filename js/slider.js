// get elements from DOM
const slider =document.querySelector('.image-slider');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const heading = document.querySelector('.caption h1');
const description = document.querySelector('.caption p');

// images for slide
const images = [
    'image-1.png', 'image-2.png', 'image-3.png', 'image-4.png'
];


// headlines for slide
const headings = ["Quality, you can trust.", "Industrial design meets fashion.", "Obsessive Attention. Intelligent Effort.", "Gorgeous aesthetics, an overall luxurious feel."];

const descriptions = [
    "Tell your brand's story through images. They can capture your",
    "Atypical leather goods",
    "Functional handbags made of luxurious materials to improve people's lives",
    "super happy with my Prestige theme!"
];

// slider function
let id = 0;
const slide = (id) =>{
    slider.style.backgroundImage = `url(/images/${images[id]})`;
    slider.classList.add('image-fade');
    setTimeout(() => {
        slider.classList.remove('image-fade');
    }, 5000);
    heading.innerText = headings[id];
    description.innerText = descriptions[id];
}

arrowLeft.addEventListener('click', () =>{
    id--;
    if(id < 0){
        id = images.length - 1;
    }
    slide(id)
})
arrowRight.addEventListener('click', () =>{
    id++;
    if(id > (images.length - 1)){
        id = 0;
    }
    slide(id);
});

slide(id);