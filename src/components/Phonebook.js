import { useState } from "react";
// import './Table/Table.css'
// import '../index.css'

export default function Phonebook() {
  const [tableData, setTableData] = useState([]);
  const [FormInputData, SetFormInputData] = useState({
    Name: "",
    Email: "",
    Phone: "",
  });

  function handleChange(e) {
    e.preventDefault();

    const newInput = (data) => ({
      ...data,
      [e.target.name]: e.target.value,
     
    });
    console.log(data)
    SetFormInputData(newInput);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = (data) => [...data, FormInputData];
    setTableData(newData);
  };

  return (
    <>
      <div className="container">
        <form className="innerContainer">
          <label name="Name">Name</label>
          <input
            type="text"
            name="Name"
            onChange={handleChange}
            value={FormInputData.Name}
          />
          <br />

          <label name="Email">Email</label>
          <input
            type="text"
            name="Email"
            onChange={handleChange}
            value={FormInputData.Email}
          />
          <br />
          <label name="Phone">Number</label>
          <input
            type="text"
            name="Phone"
            onChange={handleChange}
            value={FormInputData.Phone}
          />
          <br />
          <button onClick={handleSubmit}>Click Me</button>
        </form>

        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data.Name}</td>
                  <td>{data.Email}</td>
                  <td>{data.Phone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
