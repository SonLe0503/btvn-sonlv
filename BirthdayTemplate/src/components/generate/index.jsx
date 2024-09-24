import { useState } from "react";
import { Link } from "react-router-dom";

function Generate() {
  const [name, setName] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");
  const [isShow, setIsShow] = useState(false);
  function generateLink() {
    if (name && day && month) {
      const link = `/birthday/${name}/${day}/${month}`;
      setGeneratedLink(link);
      setIsShow(true);
    }
  }
  return (
    <>
      <div className="page">
        <h1>Generate</h1>
        <div className="form">
          <input
            type="text"
            placeholder="Enter Name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          ></input>
          <input
            type="number"
            placeholder="Enter Day"
            max="31"
            min="1"
            defaultValue="1"
            onChange={(event) => {
              const value = Math.max(1, Math.min(31, event.target.value)); 
              setDay(value);
            }}
          />
          <select
          defaultValue="1"
            onChange={(event) => {
              setMonth(event.target.value);
            }}
          >
            <option value>Select Month</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <button className="btn" onClick={generateLink}>
            Generate Link
          </button>
          <p className="gen-link">
            {generatedLink ? `localhost:3000${generatedLink}` : ""}
          </p>
          {isShow && generatedLink && (
            <Link to={generatedLink}>
              <button className="btn">Visit Link</button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
export default Generate;
