import { IBinRow } from "../types";
import { xor, or, and } from "../utils";

import "./BinaryOperations.scss";

interface BinOperationsProps {
  rows: IBinRow[];
  setRows: React.Dispatch<React.SetStateAction<IBinRow[]>>;
}

const BinaryOperations: React.FC<BinOperationsProps> = ({ rows, setRows }) => {
  const appendRow = (bytes: string[]) => {
    rows.push({
      id: rows.length,
      selected: false,
      isLock: false,
      bytes: bytes,
    });
  };

  const reArrangeArray = () => {
    const rowsClone: IBinRow[] = [...rows];
    rows = [];
    for (let i = 0; i < rowsClone.length; i++) {
      if (rowsClone[i].selected === false) {
        appendRow([...rowsClone[i].bytes]);
      }
    }
  };

  const getOnlyByteArray = (): string[][] => {
    const operationBinaryArray: string[][] = [];
    for (let i = 0; i < rows.length; i++) {
      if (rows[i].selected === true) {
        operationBinaryArray.push([...rows[i].bytes]);
      }
    }
    return operationBinaryArray;
  };

  const performXor = () => {
    const operationBinaryArray: string[][] = getOnlyByteArray();
    if (operationBinaryArray.length > 1) {
      const xorResult = xor(operationBinaryArray);
      reArrangeArray();
      appendRow(xorResult);
      setRows([...rows]);
    }
  };

  const performOr = () => {
    const operationBinaryArray: string[][] = getOnlyByteArray();
    if (operationBinaryArray.length > 1) {
      const orResult = or(operationBinaryArray);
      reArrangeArray();
      appendRow(orResult);
      setRows([...rows]);
    }
  };

  const performAnd = () => {
    const operationBinaryArray: string[][] = getOnlyByteArray();
    if (operationBinaryArray.length > 1) {
      const andResult = and(operationBinaryArray);
      reArrangeArray();
      appendRow(andResult);
      setRows([...rows]);
    }
  };

  return (
    <div className="bin-ops">
      <button className="xor" onClick={() => performXor()}>
        <i className="fa-solid fa-angle-up"></i>
      </button>
      <button className="or" onClick={() => performOr()}>
        |
      </button>
      <button className="and" onClick={() => performAnd()}>
        &
      </button>
    </div>
  );
};

export default BinaryOperations;
