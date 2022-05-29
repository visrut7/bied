import React, { useState } from "react";
import { IBinRow } from "../types";
import { isNumber, getRawBytes } from "../utils";

const BINARY_NUMBER_WIDTH = 32;
const PADDING_VALUE = "0";

type AddRowFormProps = {
  rows: IBinRow[];
  setRows: React.Dispatch<React.SetStateAction<IBinRow[]>>;
};

const AddRowForm: React.FC<AddRowFormProps> = ({ rows, setRows }) => {
  const [inputNumber, setInputNumber] = useState<string | "">("");

  const addNewRow = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputNumber !== "") {
      const new_row: IBinRow = {
        bytes: getRawBytes(
          parseInt(inputNumber),
          BINARY_NUMBER_WIDTH,
          PADDING_VALUE
        ),
        id: rows.length,
      };
      setRows([new_row, ...rows]);
    }
    setInputNumber("");
  };

  const takeNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (isNumber(val) === false) {
      e.target.value = val.slice(0, -1);
    }
    setInputNumber(e.target.value);
  };

  return (
    <form onSubmit={addNewRow}>
      <input type="text" onChange={takeNumberInput} value={inputNumber} />
      <button type="submit">+</button>
    </form>
  );
};

export default AddRowForm;
