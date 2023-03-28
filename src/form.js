import React, { useState } from "react";

function Form() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [records, setRecords] = useState([]);
  const handleInput = (e) => {
    const Name = e.target.name;
    const value = e.target.value;
    setUserInfo({ ...userInfo, [Name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUserInfo = { ...userInfo, id: new Date().getTime().toString() };
    // console.log(records)
    setRecords([...records, newUserInfo]);
    setUserInfo({ name: "", email: "", phone: "", password: "" });
    console.log(userInfo)
  };
  return (
    <div className="container">
      <div className="innerContainer">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit} className="form">
          <div>
            <label htmlFor="name">Full name </label>
            <input
              type="text"
              placeholder="Enter your name"
              autoComplete="off"
              value={userInfo.name}
              onChange={handleInput}
              name="name"
              id="username"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email </label>
            <input
              type="email"
              placeholder="Enter your email"
              autoComplete="off"
              value={userInfo.email}
              onChange={handleInput}
              name="email"
              id="email"
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Phone </label>
            <input
              type="text"
              placeholder="Phone number"
              autoComplete="off"
              value={userInfo.phone}
              onChange={handleInput}
              name="phone"
              id="phone"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password </label>
            <input
              type="password"
              placeholder="Password"
              autoComplete="off"
              value={userInfo.password}
              onChange={handleInput}
              name="password"
              id="password"
              required
            />
          </div>
          <button type="submit" className="btn">
            submit
          </button>
        </form>
      </div> 

     {
      
      userInfo.map((ele)=>{

      })
     }

    </div>


  );
}

export default Form;