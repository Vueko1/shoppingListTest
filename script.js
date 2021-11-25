const list = document.querySelector('.list');
const bttn = document.querySelector('#button');
const form = document.querySelector('.pickingItems');
const clearBttn = document.querySelector('#clear');

// adding list items
bttn.addEventListener('click', () => {
    const warningDiv = document.querySelector('#warning');

    if (form.product.value == '' || form.amount.value <= 0) {
        warningDiv.innerText = "product value can not be empty and amount value can't be less than one";
    } else {
        warningDiv.innerText = ''

        if (form.amount.value == '') {
            list.innerHTML += `<li> ${form.product.value} <span class="sp">[remove]<span> </li>`;
        } else {
            list.innerHTML += `<li> ${form.amount.value} x ${form.product.value} <span class="sp">[remove]<span> </li>`
        }

        form.product.value = '';
        form.amount.value = '';
    }
})

// clearing list from all items
clearBttn.addEventListener('click', () => {
    let listItems = Array.from(list.children);
    console.log(listItems);

    listItems.forEach( e => {
        e.remove();
    })
})

// removing particular item
list.addEventListener('click', e => {
    if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
})