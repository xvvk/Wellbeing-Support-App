 //alert("hello world!");

// service workers for notifs
// should only be used for all UI related stuff or asking a user, the permissions for showing notifications
const check = () => {
    if (!('serviceWorker' in navigator)) {
        throw new Error('No Service Worker support!');
    }
    if (!('PushManager' in window)) {
        throw new Error('No Push API Support!');
    }
}
// register Service Worker
const regSW = async () => {
    const swReg = await navigator.serviceWorker.register('service.js');
    return swReg;
}
// request notification permission
const reqNP = async () => {
    const permission = await window.Notification.requestPermission();
    // value of permission can be 'granted', 'default', 'denied'
    if(permission !== 'granted'){
         throw new Error('Permission not granted for Notification');
    }
}

const showLocalNotification = (title, body, swRegistration) => {
    const options = {
        body,
        // here you can add more properties like icon, image, vibrate, etc.
    };
    swRegistration.showNotification(title, options);
}

const main = async () => { // change main to async function to use await for redSW
    check();
    const swReg = await regSW();
    const permission =  await reqNP();
    //document.getElementById("button").addEventListener("click", (e) => {
        showLocalNotification('This is title', 'this is the message', swReg);
    //});
    console.log(Notification.permission); // testing
}

// everything else
this.taskList = []; // init
this.finishedTaskList = [];
this.timeList = [];

function getTaskList() {
    return this.taskList;
}

function addTaskList(input) {
    this.taskList.push(input);
}

function setTaskList(list) {
    this.taskList = list;
}

function getFinishList() {
    return this.finishedTaskList;
}

function addFinishList(input) {
    this.finishedTaskList.push(input);
}

function setFinishList(list) {
    this.finishedTaskList = list;
}

function removeTask(task) {
    // i = index
    // remove item from tasks
}

function getTime() {
    console.log(timeList.length);
    console.log(timeList);
    return this.timeList;
}

function addTime(t, n) {
    console.log(timeList.length);
    console.log(timeList);
    this.timeList.push([t, n]); // n = number in list time belongs to task n
}

function setTime() {

}

window.addEventListener('load', () => {
    const form = document.querySelector("#reminders-form"); // entirety of list
    const input = document.querySelector("#input-task"); // input of task
    const list_el = document.querySelector("#tasks"); // el = event listener
    const list2_el = document.querySelector('#finished-tasks');
    const input_time = document.querySelector("#time-task"); // input of time
    //
    //localStorage.clear(); // for testing purposes, clears local storage of tasks
    retrieveTasks(list_el, list2_el);

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // stops page refresh when submitting form
        const task = input.value; // get input of task
        const time_value = input_time.value; // input of time
        if(!task) { // if input empty
            alert("fill out task"); // alert user to fill out task
            return;
        }

        // add task
        const task_el = document.createElement("div");
        const task_content_el = document.createElement("div");
        const task_input_el = document.createElement("input");

        addTask(task, task_el, task_content_el, task_input_el);

        // buttons
        const task_actions_el = document.createElement("div");
        // time
        const time_btn_el = document.createElement("button");
        // edit button
        const task_edit_el = document.createElement("button");
        // delete button
        const task_del_el = document.createElement("button");
        // check button
        const task_check_el = document.createElement("button")

        // set up functions
        setupBtns(task_actions_el, task_del_el, task_edit_el, task_check_el, task_el, time_btn_el);
        setup2(list_el, task_el);

        input.value="";

        // same for time
        timeBtn(time_btn_el, task_actions_el, time_value);
        // edit task, listen for edit button being pressed
        editTask(task, task_edit_el, task_input_el);
        // delete task, listen for delete button being pressed
        delTask(task, task_el, list_el, task_del_el);
        // same for check button
        checkTask(list_el, list2_el, task_el, task, task_check_el);

    })
})

function addTask(task, task_el, task_content_el, task_input_el) {
    task_el.classList.add("task");
    task_content_el.classList.add("content");
    task_el.appendChild(task_content_el);

    addTaskList(task);
    let tasks = getTaskList();
    storeTasks(tasks);

    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "readonly");

    task_content_el.appendChild(task_input_el);
}

function retrieveTasks(list_el, list2_el) {
    let tasks = JSON.parse(localStorage.getItem('tasks')); // return array of tasks
    let times = JSON.parse(localStorage.getItem('times'));
    let finishTasks = JSON.parse(localStorage.getItem('finishedTasks'));
    if(!Array.isArray(tasks) || !tasks.length) { // if array is empty
        // do NOT process
        }
    else {
        for (let i = 0; i < tasks.length; i++) {
            const task_el1 = document.createElement("div");
            const task_content_el1 = document.createElement("div");
            const task_input_el1 = document.createElement("input");

            let task = tasks[i];
            addTaskList(task);
            addTaskOnLoad(task, task_el1, task_content_el1, task_input_el1, list_el, list2_el);
            //timeBtn();
        }
    }
    /*if(!Array.isArray(finishTasks) || !finishTasks.length) { // if array is empty
        // do NOT process
    }
    else {
        for (let i = 0; i < finishTasks.length; i++) {
            const task_el2 = document.createElement("div");
            const task_content_el2 = document.createElement("div");
            const task_input_el2 = document.createElement("input");

            let task = tasks[i];
            addFinishList(task);
            addTaskOnLoad(task, task_el2, task_content_el2, task_input_el2, list2_el, list_el);
        }
    }*/
}

function addTaskOnLoad(task, task_el, task_content_el, task_input_el, list_el, list2_el) {
    task_el.classList.add("task");
    task_content_el.classList.add("content");
    task_el.appendChild(task_content_el);

    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "readonly");

    task_content_el.appendChild(task_input_el);

    // buttons
    const task_actions_el = document.createElement("div");
    // time
    const time_btn_el = document.createElement("button");
    // edit button
    const task_edit_el = document.createElement("button");
    // delete button
    const task_del_el = document.createElement("button");
    // check button
    const task_check_el = document.createElement("button")

    // set up functions
    setupBtns(task_actions_el, task_del_el, task_edit_el, task_check_el, task_el, time_btn_el);
    setup2(list_el, task_el);

    /*let tempList = getTime();
    let tempList2 = getTaskList();
    console.log(tempList.length);
    for(let i = 0; i < tempList.length; i++) {
        console.log("jkggnjwkrnkerjgjksdfn");
        for(let j = 0; j < tempList2.length; j++) {
            let time_value = tempList[i[0]];
            console.log(time_value);
            if(j === tempList[i[1]]) { // todo check this works
                console.log(tempList2[j]);
                console.log(tempList);
                //timeBtn(time_btn_el, task_actions_el, time_value);
                break;
            }
        }
    }*/

    // same for time
    //timeBtn(time_btn_el, task_actions_el, time_value);
    // edit task, listen for edit button being pressed
    editTask(task, task_edit_el, task_input_el);
    // delete task, listen for delete button being pressed
    delTask(task, task_el, list_el, task_del_el);
    // same for check button
    checkTask(list_el, list2_el, task_el, task, task_check_el);
}

function setupBtns(task_actions_el, task_del_el, task_edit_el, task_check_el, task_el, time_btn_el) {
    task_actions_el.classList.add("actions");
    time_btn_el.classList.add("time"); // time
    task_edit_el.classList.add("edit");
    task_edit_el.innerHTML = "Edit";
    task_del_el.classList.add("del");
    task_del_el.innerHTML = "✖";
    task_check_el.classList.add("check");
    task_check_el.innerHTML = "✔";

    task_actions_el.appendChild(time_btn_el);
    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_del_el);
    task_actions_el.appendChild(task_check_el);

    task_el.appendChild(task_actions_el);
}

function timeBtn(time_btn_el, task_actions_el, time) {
    if(time !== null && time !== undefined && time !== '') {
        console.log("time stored" + time);
        storeTime(time);
        time_btn_el.innerHTML = time; // todo idk
        addTime(time, 0);
    } else {
        time_btn_el.innerHTML = ""; // default
    }
}

function editTask(task, task_edit_el, task_input_el) {
    task_edit_el.addEventListener('click', () => {
        if (task_edit_el.innerText.toLowerCase() === "edit") {
            task_input_el.removeAttribute("readonly");
            task_input_el.focus(); // lets you edit task
            task_edit_el.innerText = "save";
        } else {
            task_input_el.setAttribute("readonly", "readonly");
            task_edit_el.innerText = "Edit";
        }
        let newTask = task_input_el.value;
        let tempList = getTaskList();
        for(let i = 0; i < tempList.length; i++) {
            if(tempList[i] === task) { // todo same as below
                tempList[i] = newTask; // set value of this task with new input
                break;
            }
        }
        setTaskList(tempList);
        storeTasks(tempList);
    });
}

function delTask(task, task_el, list_el, task_del_el) {
    task_del_el.addEventListener('click', () => {
        remove(task);
        list_el.removeChild(task_el);
    });
}

function remove(task) {
    let tempList = getTaskList();
    for(let i = 0; i < tempList.length; i++) {
        if(tempList[i] === task) { // todo check this still works w ===
            tempList.splice(i, 1); // remove from array at index i
            break;
        }
    }
    setTaskList(tempList);
    storeTasks(tempList);
}

function remove2(task) {
    let tempList = getFinishList();
    for(let i = 0; i < tempList.length; i++) {
        if(tempList[i] === task) { // todo check this still works w ===
            tempList.splice(i, 1); // remove from array at index i
            break;
        }
    }
    setFinishList(tempList);
    storeFinishTasks(tempList);
}

function checkTask(list_el, list2_el, task_el, task, task_check_el) {
    task_check_el.addEventListener('click', () => {
        addFinishList(task);
        storeFinishTasks(getFinishList());
        //
        console.log(getFinishList());
        console.log(localStorage.getItem('finishedTasks'));
        remove(task);
        setup2(list2_el, task_el);
        task_check_el.innerHTML = " O ";
    });
}

function storeTasks(input) {
    localStorage.setItem('tasks', JSON.stringify(input));
}

function storeFinishTasks(input) {
    localStorage.setItem('finishedTasks', JSON.stringify(input));
}

function editTime(time_btn_el) {
    time_btn_el.add('click', () => {
        if (time_btn_el.innerText.toLowerCase() == "") {
            // do nothing
        } else {
            // ahhhhhhhh
        }
    })
}

function storeTime(t) {
    let time = t.slice(0,2); // remove : (colon)
    let time1 = t.slice(3,5);
    time = time.concat(time1);
    console.log(time);
    //localStorage.setItem('times', JSON.stringify(time));
    //console.log(localStorage.getItem('times'));
    addTime(time, 0); // todo check if this should be time or t

}

function setup2(list_el, task_el) {
    list_el.appendChild(task_el);
}

