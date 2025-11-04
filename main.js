let input = document.getElementById('task-input');
let addBtn = document.getElementById('add-task');
let taskList = document.getElementById('task-list');

addBtn.onclick =function(){
    let taskText = input.value.trim();
    if (taskText === ""){
        alert('من فضلك اكتب مهمةأولا');
        return;
    }


let li = document.createElement('li');
li.textContent = taskText;

let deleteBtn = document.createElement('button');
deleteBtn.textContent  = 'حذف';
deleteBtn.className = 'delete-btn'

deleteBtn.onclick = function(){
    li.remove();
}

li.onclick = function(){
    li.classList.toggle('completed');
}

li.appendChild(deleteBtn);
taskList.appendChild(li);
input.value ="";}