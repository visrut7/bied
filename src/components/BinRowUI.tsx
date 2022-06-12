import React from "react";
import { IBinRow } from "../types";
import { getDecimal, shiftLeft, shiftRight } from "../utils";

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

  const leftShift = (rowId: number) => {
    rows[rowId].bytes = shiftLeft(rows[rowId].bytes);
    setRows([...rows]);
  };

  const rightShift = (rowId: number) => {
    rows[rowId].bytes = shiftRight(rows[rowId].bytes);
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
      <div className="operations">
        <button className="left-shift" onClick={() => leftShift(id)}>
          <i className="fa-solid fa-chevron-left"></i>
          <i className="fa-solid fa-chevron-left"></i>
        </button>

        <button className="right-shift" onClick={() => rightShift(id)}>
          <i className="fa-solid fa-chevron-right"></i>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default BinRowUI;
