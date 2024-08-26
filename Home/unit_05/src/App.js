import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  const [st1, setSt1] = useState();
  const [st2, setSt2] = useState(0);
  const [st3, setSt3] = useState();
  const [st4, setSt4] = useState(0);
  const [st5, setSt5] = useState(0);
  const [st6, setSt6] = useState();
  const [st7, setSt7] = useState();
  const [st8, setSt8] = useState([]);
  const [st9, setSt9] = useState();
  const [st10, setSt10] = useState();

  const randomInt = (a, b) => {
    return Math.floor(Math.random() * (b - a + 1)) + a;
  };

  const inp1Ref = React.createRef();
  const div7 = React.createRef();
  const inp10 = React.createRef();

  function task1() {
    let val = inp1Ref.current.value;
    setSt1(val);
  }

  function task2() {
    let count = st2;
    count++;
    setSt2(count);
  }
  function task3(event) {
    let value = event.target.value;
    setSt3(value);
  }
  function task4() {
    let count = st4;
    count++;
    setSt4(count);
  }
  function task5(event) {
    let val = event.target;
    if (val.checked) {
      setSt5(val.getAttribute("currentvalue"));
    } else {
      setSt5(0);
    }
  }
  function task6(event) {
    setSt6(event.target.value);
  }
  function task7() {
    setSt7(`rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`);

    div7.current.style.backgroundColor = st7;
  }
  function task8(event) {
    let arr8 = event.target.value.split("");
    let val = arr8[arr8.length - 1];
    if (val % 2 === 0 || val % 2 === 1) {
      setSt8([...st8, 1]);
    } else {
      setSt8([...st8, 0]);
    }
  }
  function task9(event) {
    let val = event.target.value;
    setSt9(val);
  }
  function task10() {
    let inp = +inp10.current.value;
    setSt10(inp);
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <input type="text" ref={inp1Ref} />
        <button className="task-1" onClick={task1}>
          Push
        </button>
        <div>{st1}</div>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
        <div>{st2}</div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3} />
        <div>{st3}</div>
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>
          Count
        </button>
        <div>{st4}</div>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" currentvalue="55" onChange={task5} />
        <div>{st5}</div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div>{st6}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={div7}></div>
        <button className="task-7" onClick={task7}>
          Color
        </button>
        <div>{st7}</div>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyUp={task8}></input>
        <div>{st8}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9}></input>
        <div>{st9}</div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={inp10}></input>
        <button className="task-10" onClick={task10}>
          Push
        </button>
        <div>{st10}</div>
      </section>
    </>
  );
}

export default App;
