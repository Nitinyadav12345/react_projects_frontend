import { useState } from "react";
import Box from "./components/Box";
import Input from "./components/Input";


function App() {
  const[todos , setToDo] = useState([]);

  const removeTodo = (id)=>{
         const newtodos = todos.filter((d,index)=>{
          if(index !== id){
            return true;
          }
          else{
            return false;
          }
         })

         setToDo(newtodos);
  }

  const addToDoHandler = (item)=>{
        //console.log(item);
        setToDo(
          [
            {
              item,
              time: new Date().toLocaleTimeString()
            },
            ...todos
          ]
        );
        //console.log(todos);
  }
  return (
    <div className="bg-black h-full p-3">
      <div className="bg-white max-w-[750px] min-h-[550px] shadow-2xl mx-auto rounded-xl">
        <Input handler = {addToDoHandler} />
        <Box todo = {todos} removeHandler={removeTodo}/>
      </div>
    </div>
  );
}

export default App;
