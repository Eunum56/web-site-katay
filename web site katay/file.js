const pagination = document.querySelector('.pagination');
const firButton = document.querySelector('.page1');
const secButton = document.querySelector('.page2');
const nextButton = document.querySelector('.next');
const container1 = document.querySelector('.latest-content-container1');
const container2 = document.querySelector('.latest-content-container2');
const container3 = document.querySelector('.latest-content-container3');

let pageCount = 2;


const thirButton = document.createElement('button');
firButton.addEventListener('click', () => {
    firButton.classList.add("bg-active");
    secButton.classList.remove("bg-active");
    thirButton.classList.remove("bg-active");
    container1.classList.remove("hide");
    container2.classList.add("hide");
    container3.classList.add("hide");
})

secButton.addEventListener('click', () => {
    secButton.classList.add("bg-active");
    firButton.classList.remove("bg-active");
    thirButton.classList.remove("bg-active");
    container1.classList.add("hide");
    container2.classList.remove("hide");
    container3.classList.add("hide");
})

nextButton.addEventListener('click', () => {
    pageCount++;
    thirButton.setAttribute("class", "page3");
    thirButton.innerText = pageCount;
    pagination.insertBefore(thirButton, nextButton);

    thirButton.addEventListener('click', () => {
        thirButton.classList.add("bg-active");
        firButton.classList.remove("bg-active");
        secButton.classList.remove("bg-active");
        container1.classList.add("hide");
        container2.classList.add("hide");
        container3.classList.remove("hide");
    })
    nextButton.disabled = true;
})

// const thirdButton = document.querySelector(".page3");
