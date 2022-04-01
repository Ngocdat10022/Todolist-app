import Button from "@atlaskit/button";
import Textfield from "@atlaskit/textfield";
import { useCallback, useEffect, useState } from "react";
import { v4 } from "uuid";
import Todolist from "./Component/Todolist";
const TODO_APP_STORAGE_KEY = "TODO-APP";
function App() {
  const [todolist, setTodolist] = useState([]);
  const [textInput, setTextInput] = useState([]);
  useEffect(() => {
    if (localStorage.getItem(TODO_APP_STORAGE_KEY))
      setTodolist(JSON.parse(localStorage.getItem(TODO_APP_STORAGE_KEY)));
  }, []);

  //  lưu todolist vào localStorage
  useEffect(() => {
    localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(todolist));
  }, [todolist]);

  const handlTodoList = useCallback(() => {
    setTodolist((prev) => [
      {
        id: v4(),
        name: textInput,
        iscompleted: false,
      },
      ...prev,
    ]);
    setTextInput("");
  }, [textInput, todolist]);

  const checkBtnInput = useCallback((id) => {
    setTodolist((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, iscompleted: true } : todo
      )
    );
  }, []);
  return (
    <div className="app dark light">
      <div className="todo-app">
        <h3>Day la todo app</h3>
        <Textfield
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          name="Todo-app"
          placeholder="thêm việc cần làm"
          elemAfterInput={
            <>
              <Button
                appearance={"primary"}
                isDisabled={!textInput}
                onClick={handlTodoList}
              >
                Add
              </Button>
            </>
          }
        />
        <Todolist todolist={todolist} checkBtnInput={checkBtnInput}></Todolist>
        <Button
          appearance={"primary"}
          isDisabled={false}
          onClick={() => setTodolist([])}
        >
          Remove
        </Button>
      </div>
    </div>
  );
}
export default App;
