import React, { createContext, useState, useContext } from "react";

// Create a new context object
export const CountContext = createContext();
// el contexto se crea, y se crea con createContext()
// para que los componentes puedan acceder a la informacion tienen que estar envueltos en el contexto

export const Count = () => {
  const [count, setCount] = useState(0);

  // Wrap the entire application with the CountContext.Provider component
  return (
    <CountContext.Provider value={{ count, setCount }}>
      <div>
        <Header />
        <Main />
      </div>
    </CountContext.Provider>
  );
};

const Header = () => {
  // Use the useContext hook to access the count state variable from the context object
  const { count } = useContext(CountContext);

  return (
    <header>
      <h1>My App</h1>
      <p>Count: {count}</p>
    </header>
  );
};

const Main = () => {
  return (
    <main>
      <Section />
    </main>
  );
};

const Section = () => {
  // Use the useContext hook to access the count state variable and setCount function from the context object
  const { setCount, count } = useContext(CountContext);

  return (
    <section>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <SubSection />
    </section>
  );
};

const SubSection = () => {
  const { count } = useContext(CountContext);

  return (
    <div>
      <p>SubSection</p>
      <p>Count: {count}</p>
    </div>
  );
};
