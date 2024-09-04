let todoarray=[];
displayTodo();
function input(){
    let itemElement=document.querySelector('#input-todo');
    let dateElement=document.querySelector('#todo-date');
    let todoItem=itemElement.value;
    let todoDate=dateElement.value;
    if(todoItem===null||todoDate===null){
        alert('both fields are compulasry');
        return;
    }
    todoarray.push({doItem: todoItem,doDate: todoDate });
    itemElement.value='';
    dateElement.value='';
    displayTodo();
}
function displayTodo(){
    let display=document.querySelector('#todo-list');
    let html='';
    for(let i=0;i<todoarray.length; i++){
        let{doItem,doDate}=todoarray[i];
        html=html+`
        <span>${doItem}</span>
        <span>${doDate}</span>
        <button id="delete" onclick="todoarray.splice(${i},1); displayTodo();">delete</button>`;
    }
    display.innerHTML=html;
}