import  { useState, useRef} from 'react';
import "./App.css";
import Header from "./component/Header";
import List from "./component/List";
import Editor from './component/Editor';

const mockTodo = [
{
  id: 0,
  isDone: false,
  content: "줄넘기 하기",
  createdDate: new Date().toLocaleDateString (),
},
{
  id: 1,
  isDone: false,
  content: "독서 하기",
  createdDate: new Date().toLocaleDateString (),
},
{
  id: 2,
  isDone: false,
  content: "운동 하기",
  createdDate: new Date().toLocaleDateString (),
}, 
];

function App(){
  const [todo, setTodo] = useState(mockTodo);
  const idRef = useRef(3);
  const onCreate = (content) => {
    const newItem = {
      id:idRef.current,
      isDone: false,
      content,
      createdDate: new Date().toLocaleDateString (),
    }
    setTodo([newItem, ...todo])
    idRef.current+=1;
  }

return (
  <div className="App">
   <Header/>
   <Editor onCreate={onCreate}/>
   <List todo={todo}/> 
  </div>
);
}

export default App;