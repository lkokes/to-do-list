var input = document.querySelector("#myInput");
var button = document.querySelector('#push');

input.addEventListener("keyup", (event) => {
    event.preventDefault();
    if (event.keyCode === 13) {
        addTask();
   }
});

button.addEventListener("click", () => {
        addTask();
});

function addTask(){
    if (document.querySelector('#newtask input').value.length === 0)
    {
        alert("Please enter a task")
    } else {
        document.querySelector('#tasks').innerHTML 
        += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                <i class="far fa-trash-alt"></i>
                </button>
        `;

        var current_tasks = document.querySelectorAll('.delete');
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll('.task');
        for (var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed')
            }
        }

        document.querySelector('#newtask input').value = '';
    }
}

