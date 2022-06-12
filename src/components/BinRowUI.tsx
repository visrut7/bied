import React from "react";
import { useState } from "react";
import { IBinRow } from "../types";

import {
  getDecimal,
  shiftLeft,
  shiftRight,
  rotateRight,
  rotateLeft,
} from "../utils";

import "./BinRowUI.scss";

interface BinRowUIProps {
  id: number;
  rows: IBinRow[];
  setRows: React.Dispatch<React.SetStateAction<IBinRow[]>>;
}

const BinRowUI: React.FC<BinRowUIProps> = ({ rows, id, setRows }) => {
  const [isLock, setIsLock] = useState<boolean>(false);

  const toggleBit = (rowId: number, bitNo: number) => {
    if (isLock === false) {
      if (rows[rowId].bytes[bitNo] === "1") {
        rows[rowId].bytes[bitNo] = "0";
      } else {
        rows[rowId].bytes[bitNo] = "1";
      }
      setRows([...rows]);
    }
  };

  const leftShift = (rowId: number) => {
    rows[rowId].bytes = shiftLeft(rows[rowId].bytes);
    setRows([...rows]);
  };

  const rightShift = (rowId: number) => {
    rows[rowId].bytes = shiftRight(rows[rowId].bytes);
    setRows([...rows]);
  };

  const leftRotate = (rowId: number) => {
    rows[rowId].bytes = rotateLeft(rows[rowId].bytes);
    setRows([...rows]);
  };

  const rightRotate = (rowId: number) => {
    rows[rowId].bytes = rotateRight(rows[rowId].bytes);
    setRows([...rows]);
  };

  const removeRow = (rowId: number) => {
    rows.splice(rowId, 1);
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

      {!isLock && (
        <div className="operations">
          <button className="left-shift" onClick={() => leftShift(id)}>
            <i className="fa-solid fa-chevron-left"></i>
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          <button className="right-shift" onClick={() => rightShift(id)}>
            <i className="fa-solid fa-chevron-right"></i>
            <i className="fa-solid fa-chevron-right"></i>
          </button>

          <button className="right-rotate" onClick={() => rightRotate(id)}>
            <i className="fa-regular fa-arrow-rotate-right"></i>
          </button>

          <button className="left-rotate" onClick={() => leftRotate(id)}>
            <i className="fa-regular fa-arrow-rotate-left"></i>
          </button>
        </div>
      )}

      <div className="top-controls">
        <button className="toggle-lock" onClick={() => setIsLock(!isLock)}>
          {isLock && <i className="fa-solid fa-lock"></i>}
          {!isLock && <i className="fa-solid fa-lock-open"></i>}
        </button>
        <button className="delete-btn" onClick={() => removeRow(id)}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  );
};

export default BinRowUI;
