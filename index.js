const button = document.querySelector('button.greeting')
//const changetxt

function changeText() {
    // get the element you want to change the text of.
    //button
    // get the text you want to change the element to.
    const p = document.querySelector('p.greeting');
    // FINAL STEP: change the text.
    button.textContent = p.textContent;
}


button.addEventListener('click', changeText)


