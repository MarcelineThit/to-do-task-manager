import initialRander from "./initialRander.js";
import listener from "./listeners.js";
import observer from "./observer.js";

//todoကိုiniializedလုပ်ပြီးမှlistenerကိုလှမ်းခေါ်မှာ
class Todo{
   init(){
    console.log("to do app start");
    observer(); //initial randerလုပ်တဲ့ချိန် observerမရှိသေးလို့အပေါ်တင်ထားတာ
    initialRander();
    listener();
    //observer();ဘာတွေအချိန်းပြောင်းဖြစ်နေလဲစောင့်ကြည့်တာ
   } 
}
export default Todo;