import { useEffect, useState } from "react";
import "./App.css";
import { Insertion } from "./components/insertion";
import { List } from "./components/list";
// {
//   title: "title 1",
//   description: "description 1",
//   completed: true,
// },
// {
//   title: "title 2 ",
//   description: "description 2",
//   completed: false,
// },
// {
//   title: "title3",
//   description: "desc3",
//   completed: false,
// },
function App() {
  const [todo, Settodo] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/todos").then(async function (res) {
      const json = await res.json();
      Settodo(json.content);
    });
  }, []);

  return (
    <div>
      <h1 className="page-title">MY TODO LIST</h1>
      <Insertion></Insertion>
      <List todos={todo}></List>
    </div>
  );
}

export default App;
