import React from 'react'
import { useState } from 'react'
import "./Table.css"
import Mock from "./Dummy.json"

const Data = () => {
    const [Contact,setContact] = useState(Mock)
  return (
    <div className='app-container'>
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
            {
                Contact.map((ele)=>{
                    return(
                        <tr>
                    <td>{ele.fullName}</td>
                    <td>{ele.address}</td>
                    <td>{ele.phoneNumber}</td>
                    <td>{ele.email}</td>

                    </tr>
                    )
                })
            }
                
            </tbody>
        </table>
    </div>
  ) 
}

export default Data