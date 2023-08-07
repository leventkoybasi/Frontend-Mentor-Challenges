import { useState } from "react";
import { data } from "./data/data.js";

function Header() {}

function App() {
  // const [product] = useState(date);
  return (
    <>
      <div>{data.length} items</div>
    </>
  );
}

export default App;
