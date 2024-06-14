import Todo from "./src/todo";
import "./style.css";
import { v4 as uuidv4 } from 'uuid';
console.log(uuidv4());

const app= new Todo();
app.init();
