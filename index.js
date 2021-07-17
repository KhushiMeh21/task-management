 const taskContainer = document.querySelector(".task_container")
console.log(taskContainer);
const globalStore = [];
const loadInitialData =()=>{
  const getCardData= localStorage.getItem("tasky") //tasky is key
  const {cards} = JSON.parse(getCardData); //pass  from string to normal obct
cards.map((cardObect)=>{
  taskContainer.insertAdjacentHTML("beforeend",generateNew(cardObect));
globalStore.push(cardObect);
})
}
const generateNew=(taskData)=>
    `
    <div class="col-md-6 col-lg-4" id=${taskData.id}>
   <div class="card text-center">
     <div class="card-header d-flex justify-content-end gap-2">
       <button type="button" class="btn btn-outline-success"><i class="fas fa-pen"></i></button>
       <button type="button" class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i></button>
     </div>
     <img src="${taskData.imageUrl}"class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">${taskData.taskTitle}</h5>
       <p class="card-text">${taskData.taskDesp}</p>
       <a href="#" class="btn btn-primary">${taskData.taskType}</a>
     </div>
     <div class="card-footer text-muted">
       <button type="button" class="btn btn-outline-info float-end">Open Task</button>
     </div>
   </div>
 </div>
 `



const saveChanges=()=>{
    const taskData = {
        id:`${Date.now()}`,
        imageUrl:document.getElementById("imageUrl").value,
        taskTitle:document.getElementById("taskTitle").value,
        taskType:document.getElementById("taskType").value,
        taskDesp:document.getElementById("taskDesp").value

    };
    
  taskContainer.insertAdjacentHTML("beforeend",generateNew(taskData));
globalStore.push(taskData);
localStorage.setItem("tasky",JSON.stringify({cards:globalStore}));
};



