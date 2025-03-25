import React from "react";

const Approver = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Approve Doctors</h1>
      <ul>
        <li>Doctor 1 - <button className="bg-green-500 text-white p-1 rounded">Approve</button></li>
        <li>Doctor 2 - <button className="bg-green-500 text-white p-1 rounded">Approve</button></li>
      </ul>
    </div>
  );
};

export default Approver;