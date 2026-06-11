
let todolist = [
    {items : 'Buy groceries',
     date: '2023-06-01'
    },
];
displaylist();

function addtodo(){
    let inputElement = document.querySelector('#input-list');
    let dateElement = document.querySelector('#date');

    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todolist.push({items: todoItem, date: todoDate});
    inputElement.value = '';
    dateElement.value = '';
    displaylist();
}
function displaylist(){
    let displayItem = document.querySelector('.todo-container');
    let newhtml = '';
    for (let i=0; i < todolist.length; i++){
        let {items, date} = todolist[i];
        newhtml += `
            <span>${items}</span>
            <span>${date}</span>
            <button id='delete-btn' onclick="todolist.splice(${i},1); displaylist();">Delete</button>
        `;
    }
    displayItem.innerHTML = newhtml;
}