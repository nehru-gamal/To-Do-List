let theInput = document.querySelector(".add-task input");
let theAddButtom = document.querySelector('.add-task .plus');
let tasksContainer = document.querySelector('.tasks-contant');
let TasksCount = document.querySelector('.task-count span');
let TasksCompleted = document.querySelector('.task-combleted span');

// Focus Input Field
window.onload = function(){
    theInput.focus();
};


// Adding The Task
theAddButtom.onclick = function(){

    if(theInput.value === ''){

        console.log('No Value')

    } else{

        let noTasksgMsg = document.querySelector(".no-tasks-masseage");

        if(document.body.contains(document.querySelector(".no-tasks-masseage"))) {

        // Remove No Tasks Maasage
        noTasksgMsg.remove();

        }

        // Create Span Element
        let mainSpan = document.createElement("span");
        
        // Create Span Element
        let deleteElement = document.createElement("span");

        //Create To Span 
        let text = document.createTextNode(theInput.value);

        //Create To Delete Buttom 
        let deleteText = document.createTextNode("Delete");

        //Add Text To Soan
        mainSpan.appendChild(text);

        //Add Class To Soan
        mainSpan.className = "task-box";

        //Add Text To Delete Buttom
        deleteElement.appendChild(deleteText);

        //Add Class To Delete Buttom
        deleteElement.className  = "delete";

        mainSpan.appendChild(deleteElement);

        tasksContainer.appendChild(mainSpan);

        theInput.value = '';
        theInput.focus();

        calculateTasks();

    }

};

document.addEventListener('click', function(e){

    if(e.target.className == 'delete'){

        e.target.parentNode.remove();

        if(tasksContainer.childElementCount == 0){

            createNoTasks();

        }

    }
    if(e.target.classList.contains('task-box')) {

        e.target.classList.toggle("finished");

    }
    calculateTasks();

});

// Function No Tasks Massage
function createNoTasks(){   

    let msgSpan = document.createElement("span");

    let msgText = document.createTextNode("No Tasks Massage");

    msgSpan.appendChild(msgText);

    msgSpan.className = 'no-tasks-masseage';

    tasksContainer.appendChild(msgSpan);

}

function calculateTasks(){

    TasksCount.innerHTML = document.querySelectorAll('.tasks-contant .task-box').length;

    TasksCompleted.innerHTML = document.querySelectorAll('.tasks-contant .finished').length;

}
