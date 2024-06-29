import { useState } from "react";
import axios from "axios";

export function Insertion() {
  const [tits, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  return (
    <div className="input-form">
      <input
        type="text"
        style={{ width: 400 }}
        onChange={function (e) {
          const value = e.target.value;
          setTitle(value);
        }}
      ></input>

      <input
        type="text"
        style={{ height: 100, width: 400, textAlign: "center" }}
        onChange={function (e) {
          const value = e.target.value;
          setDesc(value);
        }}
      ></input>
      <button
        onClick={() => {
          // console.log({ tits, desc });
          // fetch("http://localhost:3000/todo", {
          //   method: "post",
          //   headers: {
          //     contentType: "application/JSON",
          //   },
          //   body: JSON.stringify({
          //     title: tits,
          //     description: desc,
          //   }),
          // }).then(async function (res) {
          //   console.log(res);
          //   alert("todo added");
          // });
          axios
            .post("http://localhost:3000/todo", {
              title: { tits },
              description: { desc },
              " completed": false,
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
        }}
      >
        Create a todo
      </button>
    </div>
  );
}
