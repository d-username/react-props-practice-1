import { useState } from "react";
import "./styles.css";

import Title from "./title.js";
import Length from "./name-length.js";
import Reversed from "./name-reversed.js";

export default function App() {
  const [name, setName] = useState("Nicholas");

  return (
    <div className="app">
      <Title name={name} />
      <Length name={name} />
      <Reversed name={name} />
    </div>
  );
}
