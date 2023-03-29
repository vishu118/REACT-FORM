import React from "react";
import { useState } from "react";
import FormInput from "./FormInput";
import Table from "./Table";
function Main() {
  const [tableData, setTableData] = useState([]);
  const [formInputData, setformInputData] = useState({
    fullName: "",
    emailAddress: "",
    salary: "",
  });

  const handleChange = (evnt) => {
    const newInput = (data) => ({
      ...data,
      [evnt.target.name]: evnt.target.value,
    });
    setformInputData(newInput);
  };
  
  

  const handleSubmit = (evnt) => {
    evnt.preventDefault();

    const newData = (data) => [...data, formInputData];
    setTableData(newData);
    //   const emptyInput= {fullName:'', emailAddress:'', salary:''}
    //   setformInputData(emptyInput)
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <FormInput
              handleChange={handleChange}
              formInputData= {formInputData}
              handleSubmit={handleSubmit} 
            />
            <Table tableData={tableData} />
          </div>
          <div className="col-sm-4"></div>
        </div>
      </div>
    </>
  );
}
export default Main;


