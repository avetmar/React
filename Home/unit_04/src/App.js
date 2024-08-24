import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  let count4 = 0;
  let selectVal = React.createRef();
  let div7 = React.createRef();
  let div8 = React.createRef();
  let inp10 = React.createRef();
  const [output, setOutput] = useState();
  const [bg7, setBG7] = useState();
  const [out8, setOut8] = useState();

  function task1() {
    console.log("task2");
  }
  function task2() {
    document.querySelector(".task-2").classList.add("active");
  }
  function task3(event) {
    console.log(event.target.value);
  }
  function task4() {
    count4 += 1;
    console.log(count4);
  }
  function task5() {
    const out = document.querySelector(".out-5");
    let check = document.querySelector("input[type='checkbox']");
    if (check.checked) {
      // out.textContent = check.value; - по заданию
      out.textContent = check.getAttribute("currentvalue"); // полагаю
    } else {
      out.textContent = 0;
    }
  }
  function task6() {
    setOutput(selectVal.current.value);
  }
  function task7() {
    const randomInt = (a, b) => {
      return Math.floor(Math.random() * (b - a + 1)) + a;
    };

    // console.log(div7.current);
    setBG7(`rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`);

    div7.current.style.backgroundColor = bg7;
  }
  let str = "";
  function task8() {
    let arr8 = div8.current.value.split("");
    let val = arr8[arr8.length - 1];
    if (val % 2 == 1 || val % 2 === 0) {
      str += 1;
    } else {
      str += 0;
    }
    // setOut8(str);
    console.log(str);
  }
  function task9(event) {
    document.querySelector(".out-9").textContent = event.target.value;
  }
  let ar10 = [5, 6, 7];
  function task10() {
    ar10.push(inp10.current.value);
    console.log(ar10);
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <button className="task-1" onClick={task1}>
          Push
        </button>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3} />
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>
          Count
        </button>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" currentvalue="55" onChange={task5} />
        <div className="out-5"></div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6} ref={selectVal}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div className="out-6">{output}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={div7}></div>
        <button className="task-7" onClick={task7}>
          Color
        </button>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyUp={task8} ref={div8}></input>
        <div className="out-8">{out8}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9}></input>
        <div className="out-9"></div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={inp10}></input>
        <button className="task-10" onClick={task10}>
          Push
        </button>
      </section>
    </>
  );
}

export default App;
