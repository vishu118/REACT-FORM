import { useState } from "react";
export default function States() {
  const [data, setdata] = useState("");
  const [val, setval] = useState(false);
  const handleChange = (e) => {
    setdata(e.target.value);
    setval(false);
  };

  return (
    <>
      {val ? <h1>{data}</h1> : null}
      <input type="text" onChange={handleChange} />
      <button onClick={() => setval(true)}>ClickMe</button>
    </>
  );
}
