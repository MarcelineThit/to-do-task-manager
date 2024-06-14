import { addList, tasks } from "./list.js";

const initialRander=() => {//initial randerကappစတာနဲ့အလုပ်လုပ်/ခိုင်းချင်တာခိုင်းလို့ရ
   tasks.forEach((task) => {addList(task)}); //loopပတ်တာက၁မီလီစဣန့်အတွင်းဖြစ်သွားတာမလို့listတွေကို မီလီစဣန့်နဲ့အိုင်ဒီပေးထားတာအလုပ်မဖြစ်နိုုင်
}

export default initialRander;