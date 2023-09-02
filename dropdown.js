const dropDownListItems = document.querySelectorAll('.dropdown__list_item');

for (let listItem of dropDownListItems) {
    listItem.addEventListener('click', dropDownToggle);
}

function dropDownToggle(event) {
    event.currentTarget.classList.toggle('dropdown_active');
}
