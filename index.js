const form = document.querySelector('#userForm')

const handleSubmit = function(ev)
{
    ev.preventDefault()
    const users = document.querySelector('#users')
    const f = ev.target
    const userName = f.userName.value
    const age = f.age.value
    const favoriteColor = f.favoriteColor.value
    
    const colorItem = document.createElement('li')
    colorItem.textContent = 'Favorite Color: '

    colorItem.appendChild(renderColor(favoriteColor))

    const list = document.createElement('ul')
    list.appendChild(renderListItem("Name", userName))
    list.appendChild(renderListItem("Age", age))
    list.appendChild(colorItem)
    
    users.appendChild(list)

    f.reset()
    f.userName.focus()

}

function renderColor(favoriteColor)
{
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = favoriteColor
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'

    return colorDiv
}

function renderListItem(label, value) 
{
    const item = document.createElement('li')
    item.textContent = `${label}: ${value}`
    return item

}
form.addEventListener('submit', handleSubmit)
