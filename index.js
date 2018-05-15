const button = document.querySelector('button.greeting')
const h1 = document.querySelector('h1')

function changeText() {
    
    const p = document.querySelector('p.greeting');
    const txt = document.querySelector("input#txt")
    h1.textContent = p.textContent;
}

button.addEventListener('click', changeText)


const handleSubmit = function(ev)
{
    ev.preventDefault()
    const users = document.querySelector('#users'
    const f = ev.target
    const userName += ' ' userName
}
FormData.addEventListener('submit', handleSubmit)