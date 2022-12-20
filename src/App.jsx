import { useState } from "react";
import "./App.css";
import SongSongBox from "./SongSongBox";
import TuanTuBox from "./TuanTuBox";
// import Parallel from "paralleljs";
function App() {
  const [textInput, setTextInput] = useState("40,41,42");
  const [textTuanTu, setTextTuanTu] = useState("");
  const [textSongSong, setRextSongSong] = useState("");

  const [statusTT,SetStatusTT] = useState("Dãy số fibonacii");
  const [statusSS,SetStatusSS] = useState("Dãy số fibonacii");
  function fib(n) {
    return n < 2 ? 1 : fib(n - 1) + fib(n - 2);
  }
  async function onCaculate() {
    SetStatusTT("Đang tính toán...")
    console.clear()
    let data = textInput.split(",");
    let t0 = performance.now();
    TuanTu(data);
    let t1 = performance.now();
    let TimeTT = Math.round(((t1 - t0)/1000) * 100) / 100

    console.log("Call to TuanTu took " + TimeTT + " seconds.");
    SetStatusTT("Tính toán xong Tuần tự ("+TimeTT+" giây)")



    SetStatusSS("Đang tính toán...")
    t0 = performance.now();
    await SongSong(data)
    t1 = performance.now();
    let TimeSS = Math.round(((t1 - t0)/1000) * 100) / 100
    console.log("Call to SongSong took " + TimeSS + " seconds.");
    SetStatusSS("Tính toán xong Song song ("+TimeSS+" giây)")
  }

  async function SongSong(dataStr) {
    const data = dataStr.map((str) => Number(str));
    let p = new Parallel(data);
    setRextSongSong("");
    let result = await p.map(fib);
    for (const fibResult of result) {
      setRextSongSong((prevText) => {
        if (prevText == "") {
          return fibResult.toString();
        } else {
          return prevText + "," + fibResult.toString();
        }
      });
    }
  }

  function TuanTu(data) {
    setTextTuanTu("");
    for (const number of data) {
      let fibNum = fib(parseInt(number))
      setTextTuanTu((prevText) => {
        if (prevText == "") {
          return fibNum.toString();
        } else {
          return prevText + "," + fibNum.toString();
        }
      });
    }
  }
  return (
    <div className="App">
      <div className="w-full grid place-content-center">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Nhập dãy số thứ tự:</span>
          </label>
          <input
            type="text"
            placeholder="Vd: 40,35,23,.."
            className="input input-bordered input-info w-96 max-w-xs"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />
          <label className="label">
            <span className="label-text-alt">
              Chỉ nhập số ngăn cách bởi dấu phẩy.
            </span>
          </label>
        </div>
      </div>
      <button className="btn btn-info" onClick={() => onCaculate()}>
        Tính toán dãy fibonacii
      </button>

      <div className="flex mt-10 w-full content-center justify-center">
        <TuanTuBox textTuanTu={textTuanTu} statusTT={statusTT} />
        <SongSongBox textSongSong={textSongSong} statusSS={statusSS}/>
      </div>
    </div>
  );
}

export default App;
