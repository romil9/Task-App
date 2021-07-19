let task = document.getElementById("submit");
console.log('Hello');
task.addEventListener("click", function (e) {
    let title = document.getElementById("title");
    let description = document.getElementById("description");
    // console.log(title);
    // console.log(description);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        console.log('notes');
        taskobj = [];
        console.log("if ni andar");

    }
    else {
        taskobj = JSON.parse(notes);
        console.log("hiii");
        // console.log(obj);
        // console.log('else');

    }
    let info = {
        titles: title.value,
        descriptions: description.value
    };
    console.log(info);
    taskobj.push(info);
    localStorage.setItem("notes", JSON.stringify(taskobj));
    console.log(info.titles);
    console.log(info.descriptions);
    console.log('thai ja ne garib');

    title.value = "";
    description.value = "";
    // console.log(info);
    console.log(taskobj);
    // console.log(info.titles);
    // console.log(info.descriptions);
    display();
    completedisplay();
    // completedisplay();
});
display();
completedisplay();
// completedisplay();
function display() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        console.log('notes');
        taskobj = [];
    }
    else {
        taskobj = JSON.parse(notes);
        console.log(taskobj);
    }
    let html = "";
//     taskobj.forEach(functiom(element, index) {
//         html += `
//         <div div class= "toast-body w-25" ><div>
//         <h4>Task ${index + 1} </h4>
//          </div>
//          <hr>
//          <h5 class="card-title">${element.titles}</h5>
//          <hr>
//          <p class="card-text"> ${element.descriptions}</p>
//          <div class="mt-2 pt-2 border-top">
//          <button type="button" class="btn btn-primary btn-sm">Mark As Done</button>
//          <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="toast">Delete</button>
//          </div>
//          </div>`;
// });
        taskobj.forEach(myfunction);

        function myfunction(element, index){
            html += `
                    <div div class= "toast-body w-25" ><div>
                    <h4>Task ${index + 1} </h4>
                     </div>
                     <hr>
                     <h5 class="card-title">${element.titles}</h5>
                     <hr>
                     <p class="card-text"> ${element.descriptions}</p>
                     <div class="mt-2 pt-2 border-top">
                     <button id="${index}"onclick="completedtask(this.id)" class="btn btn-primary btn-sm">Completed Task</button>
                     <button id="${index}"onclick="delet(this.id)" class="btn btn-secondary btn-sm" data-bs-dismiss="toast">Delete</button>
                     </div>
                     </div>`;  
        }
        let taskelm = document.getElementById("task");
        // taskelm.innerHTML = `Add Your Task Using Add Task`;
if (taskobj.length != 0) {
    taskelm.innerHTML = html;
}
else {
    taskelm.innerHTML = `Add Your Task Using "Add Task"`;
}
}
function delet(index) {
  //   console.log("I am deleting", index);

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    taskobj = JSON.parse(notes);
  }

  taskobj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(taskobj));
  display();
}
// search functinality
let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

  let inputVal = search.value.toLowerCase();
  // console.log('Input event fired!', inputVal);
  let taskCards = document.getElementsByClassName('toast-body');
  Array.from(taskCards).forEach(function (element) {
    let cardTxtT = element.getElementsByTagName("h5")[0].innerText;
    let cardTxtC = element.getElementsByTagName("p")[0].innerText;
    if (cardTxtT.includes(inputVal)) {
      element.style.display = "block";
    }
    else if (cardTxtC.includes(inputVal)) {
      element.style.display = "block";
    }
    else {
      element.style.display = "none";
    }
    // console.log(cardTxt);
  })
})
function completedtask(index){
  let notes = localStorage.getItem("notes");
  let completenotes = localStorage.getItem("completenotes");

  if (completenotes == null) {
    tempinfoobj = [];
  } 
  else {
    tempinfoobj = JSON.parse(completenotes);
  }
  console.log(tempinfoobj);
  temp = taskobj.splice(index, 1);
  let tempinfo = {
    tit:temp[0].titles,
    des:temp[0].descriptions
  }
  // taskcompobj = JSON.parse(temp);
  // tempinfoobj = [];
  // console.log(temp);
  // console.log(temp[0].titles);
  // console.log(temp[0].descriptions);
  // let tempinfo = {
  //   titl: temp.titles,
  //   descriptio: temp.descriptions
  // };
  // temp1=JSON.stringify(temp)
  tempinfoobj.push(tempinfo);

  console.log(tempinfo);
  localStorage.setItem("completenotes", JSON.stringify(tempinfoobj));
  localStorage.setItem("notes", JSON.stringify(taskobj));
  console.log(tempinfoobj);
  console.log(taskobj);
  display();
  completedisplay();
}
function completedisplay(){
  let completenotes = localStorage.getItem("completenotes");
  if (completenotes == null) {
    completetaskobj = [];
    } else {
      completetaskobj = JSON.parse(completenotes);
      console.log(completetaskobj);
    }
    // console.log(completetaskobj[5][0].titles);
  let complete ="";
  
  completetaskobj.forEach(completefunction);    
        function completefunction(element,index){
          complete += `
          <div class= "toast-body w-25" >
          <h4>Task ${index + 1} </h4>
           <hr>
           <h5 class="card-title"> ${element.tit}</h5>
           <hr>
           <p class="card-text"> ${element.des}</p>
           </div>`;  
        }
        let completelm = document.getElementById("completetask");
  if (completenotes!= null) {
    console.log(" null vadu gano mane")
    completelm.innerHTML = complete;
  } else
   {
     completelm.innerHTML = `"Your all tasks are pending! Please complete it first"`;
     console.log("gano mane")
    // completelm.innerHTML = complete;
   }
    // completelm.innerHTML = complete; 
}   