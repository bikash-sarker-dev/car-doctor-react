import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-600">
        Hello world!
      </h1>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
    </>
  );
}

export default App;
