import "./App.css";
import { useState} from "react";

function App() {
  const [input, setInput] = useState(0);
  const [prevInput, setPrevInput] = useState("");
  function handleNumberClick(val) {
    if (val === "." && input.includes(".")) return;
    let newInput = "";
    if (input == "0" && val == ".") {
      newInput = "0.";
    } else if (input == "0" && val != ".") {
      newInput = val;
    } else {
      newInput = input + val;
    }
    setInput(newInput);
  }

  function handleDelete() {
    if (input.length > 0) {
      setInput(input.slice(0, -1));
    }
  }

  function handleClearAll() {
    setPrevInput(null);
    setInput(0);
  }
  function tinhtoan() {
    let replaceAll = input
      .replaceAll("x", "*")
      .replaceAll("^2", "**2")
      .replaceAll("%", "*0.01")
      .replace(/√/, "Math.sqrt");
    setPrevInput(input + " = ");
    const result = eval(replaceAll);
    setInput(result);
  }
  function handleSquare() {
    setInput(input + "^2");
  }
  function handleSquareRoot() {
    if (input == "0") {
      setInput("√(");
    } else {
      if (/\d|\)/.test(input.slice(-1))) {
        setInput(input + " x √(");
      } else {
        setInput(input + "√(");
      }
    }
  }
  function handlePercentage() {
    setInput(input + "%");
  }
  return (
    <>
      <div id="hesapmakinesi">
        <div id="hm_islem">{prevInput}</div>
        <div id="hm_sonuc">
          <div id="hm_ekran" style={{ textAlign: "right" }}>
            {input}
          </div>
        </div>
        <div id="hm_tuslar">
          <div id="hm">
            <div
              className="diger"
              id="hmt_40"
              onClick={() => handleNumberClick("(")}
            >
              <div>(</div>
            </div>
            <div
              className="diger"
              id="hmt_41"
              onClick={() => handleNumberClick(")")}
            >
              <div>)</div>
            </div>
            <div id="hmt_1008" onClick={handleDelete}>
              <div>Delete</div>
            </div>
            <div id="hmt_1046" onClick={handleClearAll}>
              <div>CA</div>
            </div>
          </div>
          <div id="hm">
            <div className="diger" id="hmt_88" onClick={handleSquare}>
              <div>
                x<sup>2</sup>
              </div>
            </div>
            <div className="diger" id="hmt_83" onClick={handleSquareRoot}>
              <div>Căn</div>
            </div>
            <div className="diger" id="hmt_37" onClick={handlePercentage}>
              <div>%</div>
            </div>
            <div id="hmt_47" onClick={() => handleNumberClick(" / ")}>
              <div>/</div>
            </div>
          </div>
          <div id="hm">
            <div
              className="rakam"
              id="hmt_55"
              onClick={() => handleNumberClick("7")}
            >
              <div>7</div>
            </div>
            <div
              className="rakam"
              id="hmt_56"
              onClick={() => handleNumberClick("8")}
            >
              <div>8</div>
            </div>
            <div
              className="rakam"
              id="hmt_57"
              onClick={() => handleNumberClick("9")}
            >
              <div>9</div>
            </div>
            <div id="hmt_42" onClick={() => handleNumberClick(" x ")}>
              <div>x</div>
            </div>
          </div>
          <div id="hm">
            <div
              className="rakam"
              id="hmt_52"
              onClick={() => handleNumberClick("4")}
            >
              <div>4</div>
            </div>
            <div
              className="rakam"
              id="hmt_53"
              onClick={() => handleNumberClick("5")}
            >
              <div>5</div>
            </div>
            <div
              className="rakam"
              id="hmt_54"
              onClick={() => handleNumberClick("6")}
            >
              <div>6</div>
            </div>
            <div id="hmt_45" onClick={() => handleNumberClick(" - ")}>
              <div>-</div>
            </div>
          </div>
          <div id="hm">
            <div
              className="rakam"
              id="hmt_49"
              onClick={() => handleNumberClick("1")}
            >
              <div>1</div>
            </div>
            <div
              className="rakam"
              id="hmt_50"
              onClick={() => handleNumberClick("2")}
            >
              <div>2</div>
            </div>
            <div
              className="rakam"
              id="hmt_51"
              onClick={() => handleNumberClick("3")}
            >
              <div>3</div>
            </div>
            <div id="hmt_43" onClick={() => handleNumberClick(" + ")}>
              <div>+</div>
            </div>
          </div>
          <div id="hm">
            <div
              className="rakam"
              id="hmt_48"
              onClick={() => handleNumberClick("0")}
            >
              <div>0</div>
            </div>
            <div id="hmt_44" onClick={() => handleNumberClick(".")}>
              <div>.</div>
            </div>
            <div id="hmt_13" onClick={() => tinhtoan()}>
              <div>=</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
