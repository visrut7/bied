import React from "react";
import { IBinRow } from "../types";
import { getDecimal } from "../utils";

import "./BinRowUI.scss";

interface BinRowUIProps {
  id: number;
  rows: IBinRow[];
  setRows: React.Dispatch<React.SetStateAction<IBinRow[]>>;
}

const BinRowUI: React.FC<BinRowUIProps> = ({ rows, id, setRows }) => {
  const toggleBit = (rowId: number, bitNo: number) => {
    if (rows[rowId].bytes[bitNo] === "1") {
      rows[rowId].bytes[bitNo] = "0";
    } else {
      rows[rowId].bytes[bitNo] = "1";
    }
    setRows([...rows]);
  };

  return (
    <div className="bin-row">
      <div className="decimal-val">{getDecimal(rows[id].bytes)}</div>
      <div className="byte-row">
        {rows[id].bytes.map((byte, i) => {
          return (
            <span key={i}>
              <button className="bit-input" onClick={() => toggleBit(id, i)}>
                {byte}
              </button>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default BinRowUI;
