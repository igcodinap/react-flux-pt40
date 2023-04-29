import React, { useState } from "react";

export const CountNoContext = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header count={count} />
      <Main setCount={setCount} count={count} />
    </div>
  );
};

const Header = ({ count }) => {
  return (
    <header>
      <h1>My App</h1>
      <p>Count: {count}</p>
    </header>
  );
};

const Main = ({ count, setCount }) => {
  return (
    <main>
      <Section setCount={setCount} count={count} />
    </main>
  );
};

const Section = ({ count, setCount }) => {
  return (
    <section>
      <SubSection count={count} setCount={setCount} />
    </section>
  );
};

const SubSection = ({ count, setCount }) => {
  return (
    <div>
      <p>SubSection</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};