import { useState } from "react";
import AddRowForm from "./components/AddRowForm";
import BinRowUI from "./components/BinRowUI";
import { IBinRow } from "./types";

import "./App.css";

const App: React.FC = () => {
  const [rows, setRows] = useState<IBinRow[]>([]);

  return (
    <div className="App">
      <AddRowForm rows={rows} setRows={setRows}></AddRowForm>
      {rows.map((row, i) => {
        return <BinRowUI key={i} id={i} rows={rows} setRows={setRows} />;
      })}
    </div>
  );
};

export default App;
