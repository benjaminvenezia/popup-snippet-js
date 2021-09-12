const wrapper = document.querySelector('.popup-wrapper');
const btn = document.querySelector('button');
const cross = document.querySelector('.popup-close');

btn.addEventListener('click', () => {
    wrapper.style.display = "block";
})

cross.addEventListener('click', () => {
    wrapper.style.display = "none";
})

wrapper.addEventListener('click', () => {
    wrapper.style.display = "none";
})

