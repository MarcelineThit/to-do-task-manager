import { addList, deleteList, doneList, editList } from "./list.js";
import { listGroup } from "./selectors.js";

export const listGroupHandler=(event) => { //parent levelကနေလှမ်းထိမ်းမှာမလို့eventမဖြစ်မနေသိဖို့လို
    const list=event.target.closest(".list");
    // console.log(list);
  if(event.target.classList.contains("list-del-btn")){
    deleteList(event.target.closest(".list").id);
  }
  if(event.target.classList.contains("list-edit-btn")){
    editList(event.target.closest(".list").id);
  }
  
  if(event.target.classList.contains("list-done-check")){
    doneList(event.target.closest(".list").id);
  }
  
  };

  
  //ချက်ချင်း invokeမလုပ်ဖို့addList အတွက်handlerထပ်ဆောက်
  export const addTaskBtnHandler=() => {
    // console.log(taskInput.value.trim()? true : false);
    if(taskInput.value.trim()){ //list အလွတ်spaceအလွတ်တွေမဝင်အောင်
      addList(taskInput.value); 
    }else{
      alert("Please Enter the text");
    }
  };
  
  export const taskInputHandler=(event) => {
    if(event.key==="Enter"){
   if(taskInput.value.trim()){
      addList(taskInput.value);
    }else{
      alert("Please Enter the text");
    }
   };
  };
  
 export const deleteAllHandler=() => {
    if(confirm("Are you sure to delete all lists?")){
      const allList=listGroup.querySelectorAll(".list");
    // console.log(allList);
    allList.forEach((list)=>list.remove()); 
    };
  };
  
 export const doneAllHandler=() => {
    if(confirm("Are you sure to check all lists?")){
      const allList=listGroup.querySelectorAll(".list");
    // console.log(allList);
    allList.forEach((list) => {
      list.querySelector(".list-done-check").checked=true;
      doneList(list.id)}); 
    };
  }