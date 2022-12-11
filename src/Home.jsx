import React, { useState } from "react";
import InputBox from "./components/InputBox";
import ToDoItemList from "./components/ToDoItemList";
import "./Home.css";

const Home = () => {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="homepage-container">
      <h1>My Todo-list</h1>
      {/* ToDo Item을 추가할 수 있는 input 박스 */}
      <InputBox todoList={todoList} setTodoList={setTodoList} />

      {/* 할 일 Item 리스트 */}
      <ToDoItemList
        title={"Do It!"}
        todoList={todoList}
        setTodoList={setTodoList}
        checkedList={false} // (체크되지 않은) 할 일 목록
      />

      {/* 완료한 Item 리스트 */}
      <ToDoItemList
        title={"Done"}
        todoList={todoList}
        setTodoList={setTodoList}
        checkedList={true} // (체크되어 있는)완료한 목록
      />
    </div>
  );
};

export default Home;
