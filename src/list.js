//Action Logic,Business Logic

//day48 
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
export const tasks=["study","Drink 2l water","yoga"];

export const updateTotal=() => { //ထပ်ခါထပ်ခါသုံးနေမဲ့ရည်ရွယ်ချက်နဲ့functionခွဲလိုက်တာ
    const lists=document.querySelectorAll(".list");
    taskTotal.innerText=lists.length; //lengthရသွားရင် UIမှာပြမယ်
};

export const updateDoneTaskTotal=() => { //ထပ်ခါထပ်ခါသုံးနေမဲ့ရည်ရွယ်ချက်နဲ့functionခွဲလိုက်တာ
    const lists=document.querySelectorAll(".list input:checked");
    doneTaskTotal.innerText=lists.length; //lengthရသွားရင် UIမှာပြမယ်
};

//create New List ထပ်ခါထပ်ခါထည့်မှာမလို့create newlistကိုfunctionထဲထည့်မယ် (procedualဘဲလုပ်ထုံးလုပ်နည်းတွေကိုfunထဲစုထားတာ)
export const createNewList=(currentTask) => { //function invokeလုပ်တဲ့ခါ parameter listenထားလို့ အပေါ်မှာလဲ argument ပြန်ထည့်ပေး
    const list=listTemplate.content.cloneNode(true); //templateကိုထပ်ခါထပ်ခါသုံးမယ်ဆိုcloneကိုသုံး
    console.log(list);
    list.querySelector(".list").id="list"+uuidv4();
    list.querySelector(".list-task").innerText=currentTask;

return list;
};

export const deleteList=(listid) => {
  const currentList=document.querySelector(`#${listid}`);
  // if(window.confirm("Are You Sure?")){
  //   currentList.remove();//elementကိုဖျက်မှာမလို့removeသုံး
  // updateDoneTaskTotal(); //listဖျက်ပြီးတာနဲ့numberတွေupdateလုပ်ဖို့
  // updateTotal();
  // }
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if(result.isConfirmed){
      currentList.classList.add("animate__animated","animate__hinge");
      currentList.addEventListener("animationend",() => {
        currentList.remove();//elementကိုဖျက်မှာမလို့removeသုံး
        
      });

      // updateDoneTaskTotal(); //listဖျက်ပြီးတာနဲ့numberတွေupdateလုပ်ဖို့
      // updateTotal();
    }
  })
};

export const editList=(listid) => {
    const currentList=document.querySelector(`#${listid}`);
    const listDoneCheck=currentList.querySelector(".list-done-check");
    //documentနဲ့ဖမ်းလို့မရအပေါ်ကlistinnerHtmlထဲကဟာကိုဘဲဖမ်းမှာမလို့
      const listTask=currentList.querySelector(".list-task");
    const listEditBtn=currentList.querySelector(".list-edit-btn");
    
    listEditBtn.setAttribute("disabled",true);
      listDoneCheck.setAttribute("disabled",true); //editနေစဥ◌်အတွင်း checkလို့မရအောင်
      const currentTask=listTask.innerText; //ကိုယ်ပြင်မဲ့current task ကိုဖမ်းလိုက်တာ
      const newTaskInput=document.createElement("input"); //input boxဖန်တီးလိုက်တာ
      newTaskInput.className="border border-stone-950 font-mono px-2 py-1 w-[180px] focus-visible:outline-none"; //input boxမြင်ရအောင် borderခတ်လိုက်တာ
      newTaskInput.value=currentTask;//ကိုယ်ပြင်မဲ့current task ကို input boxထဲပြပေးတာ
      listTask.after(newTaskInput);//listtaskနောက်မှာ edit ရင်ပေါ်မဲ့input boxအသစ်လေးထာားမယ်
      newTaskInput.focus();//editနှိပ်လိုက်တာနဲ့ cursorတစ်ခါတည်းချပေးချင်တာ
      listTask.classList.add("hidden"); //input boxအသစ်လေးတစ်ခုပေါ်လာရင်current textမမြင်ရအောင် hiddenလိုက်တာ
    
      newTaskInput.addEventListener("blur",() => { //blur cursor အပြင်ဘက်ထွက်သွားရင်
        listEditBtn.removeAttribute("disabled"); //နောက်ထပ်editအချက်တွေနှိပ်လိုရအောင်
        listDoneCheck.removeAttribute("disabled");
        //  console.log("edit finish");
        listTask.innerText=newTaskInput.value; // မူရင်းစာသားနေရာမှာeditလိုက်တဲ့စာသားပြပေးတာ
        listTask.classList.remove("hidden");//အရင်က မူရင်းစာသားကို hiddenထားတာကြောင့်ခု editပြီးသွားတော့အဲ့ hiddenကိုပြန်ဖြုတ်တာ
        newTaskInput.remove();//အပေါ်ကအဆင့်တွေအကုန်ပြီးသွားရင်editမဲ့ inputboxဆက်ပေါ်မနေအောင် 
    
      });
      
      newTaskInput.addEventListener("keyup",(event) => { //enterနှိပ်ယ့ုနဲ့အက်ဒိတ်ပီးသားဖြစ်အောင်
        if(event.key==="Enter"){
          listEditBtn.removeAttribute("disabled"); //နောက်ထပ်editအချက်တွေနှိပ်လိုရအောင်
        listDoneCheck.removeAttribute("disabled");
        //  console.log("edit finish");
        listTask.innerText=newTaskInput.value; // မူရင်းစာသားနေရာမှာeditလိုက်တဲ့စာသားပြပေးတာ
        listTask.classList.remove("hidden");//အရင်က မူရင်းစာသားကို hiddenထားတာကြောင့်ခု editပြီးသွားတော့အဲ့ hiddenကိုပြန်ဖြုတ်တာ
        newTaskInput.remove();//အပေါ်ကအဆင့်တွေအကုန်ပြီးသွားရင်editမဲ့ inputboxဆက်ပေါ်မနေအောင် 
        }
    
      });
  
  };
  
export const doneList=(listid) => {
    const currentList=document.querySelector(`#${listid}`);
    const listDoneCheck=currentList.querySelector(".list-done-check");
    //documentနဲ့ဖမ်းလို့မရအပေါ်ကlistinnerHtmlထဲကဟာကိုဘဲဖမ်းမှာမလို့
      const listTask=currentList.querySelector(".list-task");
    const listEditBtn=currentList.querySelector(".list-edit-btn");
    
    listTask.classList.toggle("line-through");
    currentList.classList.add("duration-200");
    currentList.classList.toggle("opacity-20");
    currentList.classList.toggle("scale-90");
    if(listDoneCheck.checked){
      listEditBtn.setAttribute("disabled",true);
    }else{
      listEditBtn.removeAttribute("disabled");
    }
    updateDoneTaskTotal();
    
  };

  //ခလုပ်နှိပ်ရင်ဒီprocessလုပ်(listတစ်ခုထည့်ချင်တာ)
  export const addList=(text) => {
    //  console.log(taskInput.value); //inputထဲကစာသားလှမ်းယူမယ်
     //step 2 mount list to listGroup(အသစ်ဝင်လာမဲ့listကို listGroupထဲထည့်တာ)
     listGroup.append(createNewList(text)); 
     taskInput.value=null;
    updateTotal();//(ဒီfunctionကိုaddlistထဲထည့်တာက listတစ်ခုထည့်တယ်ဆိုတဲ့လုပ်ငန်းဆောင်တာထဲမှာဘဲပါလို့)
  
  };