const todoInp = document.querySelector('#todoInp')
const addBtn = document.querySelector('#addBtn')
const todoItemsContainer = document.querySelector('#todoItemsContainer')

let todoItems = JSON.parse(localStorage.getItem('items')) || []


window.addEventListener('load', ()=>{

    if(todoItems.length>0){
        updateList()
    }
})

addBtn.addEventListener('click', ()=>{
    const todoItem = todoInp.value.trim()
    if(!todoItem){
        alert('You must fill in the input field')
        return
    }

    todoItems.push(todoItem)

    updateList()

    localStorage.setItem('items', JSON.stringify(todoItems))

    todoInp.value = ''
    todoInp.focus()
})

function removeItem(e){
    const removedItemText = e.target.parentNode.innerText
    todoItems = todoItems.filter(item => item != removedItemText)
    updateList()
    localStorage.setItem('items', JSON.stringify(todoItems))
}

function updateList(){
    todoItemsContainer.innerHTML = todoItems.map(item =>`
    <li class="list-group-item d-flex justify-content-between">${item}<button onclick="removeItem(event)" type="button" class="btn-close btn-close_modifier bg-danger" aria-label="Close"></button></li>
`).join('')
}