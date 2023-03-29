import React from "react";
import { useState } from "react";
import "./Table.css";
import Mock from "./Dummy.json";

const Data = () => {
  const [Contact, setContact] = useState(Mock);
  const [AddFormData, setAddFormData] = useState({
    fullName: "",
    address :"",
    phoneNumber: "",
    email : ""



  });

  const handleAddContact = (e)=>{
    e.preventDefault();

    const fieldName = e.target.getAttribute('name')
    const fieldValue = e.target.value

    const newFormData = {...AddFormData}
    newFormData[fieldName] = fieldValue;


    setAddFormData(newFormData)
  }

  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
        
          </tr>
        </thead>
        <tbody>
          {Contact.map((ele) => {
            return (
              <tr>
                <td>{ele.fullName}</td>
                <td>{ele.address}</td>
                <td>{ele.phoneNumber}</td>
                <td>{ele.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h2>Add a Contacts. </h2>

      <form action="">
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter Your Name..."
          onChange={handleAddContact}
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter Your Address..."
          onChange={handleAddContact}
        />
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter Your Number..."
          onChange={handleAddContact}
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter Your ID..."
          onChange={handleAddContact}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Data;
