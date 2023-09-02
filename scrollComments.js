const leftArrow = document.querySelector('.arrows__left');
const rightArrow = document.querySelector('.arrows__right');

const comments = document.querySelectorAll('.feedback__block');


leftArrow.addEventListener('click', () => {
    for(let comment of comments) {
        if(comment.hidden === false) {
            comment.hidden = true;

            if(comment.previousElementSibling) {
                comment.previousElementSibling.hidden = false;
            } else {
                comment.parentElement.lastElementChild.hidden = false;
            }
            break;
        }
    }
});

rightArrow.addEventListener('click', () => {
    for(let comment of comments) {
        if(comment.hidden === false) {
            comment.hidden = true;

            if(comment.nextElementSibling) {
                comment.nextElementSibling.hidden = false;
            } else {
                comment.parentElement.firstElementChild.hidden = false;
            }
            break;
        }
    }
})