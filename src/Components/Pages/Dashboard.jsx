import React, { useState } from 'react'
import SidePop from '../Shared/SidePop';

const Dashboard = () => {
 const [sideTopOpen, setSideTopOpen] = useState(false)
    const data = [
        { id: 1, name: 'John Doe', mobile: '1234567890', email: 'john@example.com', address: '123 Main St' },
        { id: 2, name: 'Jane Smith', mobile: '9876543210', email: 'jane@example.com', address: '456 Elm St' },
        { id: 3, name: 'Michael Johnson', mobile: '4561237890', email: 'michael@example.com', address: '789 Pine St' },
        { id: 4, name: 'John Doe', mobile: '1234567890', email: 'john@example.com', address: '123 Main St' },
        { id: 5, name: 'Jane Smith', mobile: '9876543210', email: 'jane@example.com', address: '456 Elm St' },
        { id: 6, name: 'Michael Johnson', mobile: '4561237890', email: 'michael@example.com', address: '789 Pine St' },
      ];

      const toggleSidePop = () => {
        setSideTopOpen((prevState)=> !prevState);
      };
  return (
    <>
    {sideTopOpen && (
        <div className=''>
        <SidePop toggleSidePop={toggleSidePop}/>
        </div>
    )}

    <div className='dashboard'>
        <div className='table-container'>
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Action  </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index)=> (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.mobile}</td>
                            <td>{item.email}</td>
                            <td>{item.address}</td>
                            <td>
                                <button onClick={toggleSidePop}>Action</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    </>
  )
}

export default Dashboard