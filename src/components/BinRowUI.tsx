import React from "react";
import { IBinRow } from "../types";

import {
  getDecimal,
  shiftLeft,
  shiftRight,
  rotateRight,
  rotateLeft,
  complementBytes,
} from "../utils";

import "./BinRowUI.scss";

interface BinRowUIProps {
  id: number;
  rows: IBinRow[];
  setRows: React.Dispatch<React.SetStateAction<IBinRow[]>>;
}

const BinRowUI: React.FC<BinRowUIProps> = ({ rows, id, setRows }) => {
  const toggleBit = (rowId: number, bitNo: number) => {
    if (rows[rowId].isLock === false) {
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

  const complementBinRow = (rowId: number) => {
    rows[rowId].bytes = complementBytes(rows[rowId].bytes);
    setRows([...rows]);
  };

  const toggleLock = (rowId: number) => {
    rows[rowId].isLock = !rows[rowId].isLock;
    setRows([...rows]);
  };

  return (
    <div className="bin-row">
      <div className="decimal-val">{getDecimal(rows[id].bytes)}</div>
      <div className="byte-row">
        {rows[id].bytes.map((byte, i) => {
          return (
            <button
              key={i}
              onClick={() => toggleBit(id, i)}
              className={`bit-input ${i % 8 === 0 ? "gbit" : ""}`}
            >
              {byte}
            </button>
          );
        })}
      </div>

      {!rows[id].isLock && (
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

          <button className="complement" onClick={() => complementBinRow(id)}>
            <i className="fas fa-exclamation"></i>
          </button>
        </div>
      )}

      <div className="top-controls">
        <button className="toggle-lock" onClick={() => toggleLock(id)}>
          {rows[id].isLock && <i className="fa-solid fa-lock"></i>}
          {!rows[id].isLock && <i className="fa-solid fa-lock-open"></i>}
        </button>
        <button className="delete-btn" onClick={() => removeRow(id)}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  );
};

export default BinRowUI;
