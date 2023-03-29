import { useState } from "react";

export default function Phonebook() {
  const [email, Setemail] = useState("");
  const [name, Setname] = useState("");
  const [number, Setnumber] = useState("");

  const handleSubmit = (e) => {
    Setemail(e.target.value)
    Setnumber(e.target.value)
    Setname(e.target.value)
  };

  function handleEmail(e){
    let len = e.target.value;
    len?Setemail(true):Setemail(false)
  }
  function handleName(e){
    let len = e.target.value;
    len?Setname(true):Setname(false)
  }
  function handleNumber(e){
    let len = e.target.value;
    len?Setnumber(true):Setnumber(false)
  }
  return (

    <>
      <form className="container">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={handleName}/>
        <br />
        
        <label htmlFor="email">Email</label>
        <input type="text" id="email" onChange={handleEmail} />
        <br />
        <label htmlFor="number">Number</label>
        <input type="text" id="number" onChange={handleNumber}/>
        <br />
        <button onClick={handleSubmit}>Click Me</button>
      </form>
    </>
  );
}
