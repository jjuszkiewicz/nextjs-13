"use client";

import { useState } from "react";
import style from "./counter.module.css"

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <section className={style.counter}>
      <h2>Client component</h2>
      <div>
        <span>Ilość: {count}</span>
        <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
      </div>
    </section>
  );
};

export default Counter;
