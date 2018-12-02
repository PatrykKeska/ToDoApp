class ToDoApp {
    constructor() {
        this.inputAdd = document.querySelector('#idAdd');
        this.inputSearch = document.querySelector('#idSearch');
        this.buttonAdd = document.querySelector('.buttonAdd');
        this.h1 = document.querySelector('h1 span');
        this.taskList = document.querySelector('ul');
        this.liElements = document.querySelectorAll('li');
        this.taskArray = [];

    }
}

class Calls extends ToDoApp {
    constructor() {
        super()
    }

    addTask(e) {
        e.preventDefault();
        if (!this.inputAdd.value) return alert('dodaj zadanie');
        else {
            const txt = this.inputAdd.value.toLowerCase();
            const newTask = document.createElement('li');
            newTask.textContent = txt;
            this.taskList.appendChild(newTask);
            this.taskArray.push(newTask);
            console.log(this.taskArray);
            newTask.innerHTML = `${txt} <button class='delete'>Delete</button>`;
            this.inputAdd.value = "";
            newTask.querySelector('.delete').addEventListener('click', this.removeTask.bind(this))
            this.renderList();
            this.h1.textContent = this.taskArray.length;
        }

        // document.querySelectorAll('.delete').forEach(btn => {
        //     btn.addEventListener('click', this.removeTask.bind(this))
        // })

    }

    removeTask(e) {
        console.log('usun')
        // e.target.parentNode.remove();
        this, this.taskArray.forEach((task, index) => {
            if (index == e.target.parentNode.dataset.key) {
                this.taskArray.splice(index, 1);
                this.h1.textContent = this.taskArray.length;
            }
        })
        this.renderList();
        console.log(this.taskArray);
    }

    renderList() {
        this.taskList.textContent = '';
        this.taskArray.forEach((task, key) => {
            task.dataset.key = key;
            this.taskList.appendChild(task);

        })
    }

    searchTask() {
        const filtred = this.taskArray.filter(li => li.textContent.toLowerCase().includes(this.inputSearch.value.toLowerCase()));
        this.taskList.textContent = '';
        filtred.forEach(li => this.taskList.appendChild(li));
    }
}


class RunApp extends Calls {
    constructor() {
        super();
        this.buttonAdd.addEventListener('click', this.addTask.bind(this));

        this.inputSearch.addEventListener('input', this.searchTask.bind(this));
    }
}

const add1 = new ToDoApp();
const add2 = new Calls();
const add3 = new RunApp();