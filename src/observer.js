import { updateDoneTaskTotal, updateTotal } from "./list.js";
import { listGroup } from "./selectors.js";

const observer= () => {
     //listgroup ကိုစောင့်ကြည့်မှာ observer 3 ခုရှိတဲ့ထဲmutation observerကိုသုံးမှာ
     const jobs=() => { //observerထဲထည့်ဖို့call back functionအပြင်မှာထုတ်ရေးထားတာ
        updateDoneTaskTotal();
        updateTotal();
     }
     const observerOptions={ //mdn websiteမှာobserver optionရှိလို့ကူးလာတာ
        childList:true,//childတွေ
        subtree:true, //treeကမှထပ်ခွဲသွားတဲ့treeတွေ
        attributes:true,//attribute changesဖြစ်တာပါသိအောင်
     };

    const listGroupObserver= new MutationObserver(jobs);
     listGroupObserver.observe(listGroup,observerOptions);//စောင့်ကြည့်တဲ့ခါtargetနဲ့optionတွေလိုတယ်
}

export default observer;