import { useEffect, useState } from "react";
import "./styles.css";
import Title from "./Title.js";
import Entry from "./Entry.js";
import Info from "./Info.js";

export default function App() {
  const [name, setName] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    const spell = encodeURIComponent(
      name.trimEnd().replace(/\s+/g, "-").toLowerCase()
    );
    const url = `https://www.dnd5eapi.co/api/spells/${spell}/`;
    fetch(url)
      .then((r) => r.json())
      .then((r) => setData(r))
      .catch((e) => setData(`${e}`));
  }, [name]);

  return (
    <div className="App">
      <Title text="5e Spell Compendium" />
      <Entry action={setName} />
      <div id="info">
        <Info name={name} data={data} />
      </div>
    </div>
  );
}
