import React from "react";
import "./table.css";

const Table = () => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>IMAGE!!!</th>
            <th>Construction & Related Workers - General</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> </td>
            <td>cd barnes</td>
          </tr>
          <tr>
            <td> </td>
            <td> amount $$$</td>
          </tr>
          <tr>
            <td> </td>
            <td>date 4 sep 9 dec</td>
          </tr>
          <b>If you take this job you are Agreeing to work ALL DAYS.</b>
          <tr>date</tr>
          <hr />
          <tr>Location</tr>
          <tr>123 elmo st</tr>
          <br />
          <hr />
          <tr>Branch</tr>
          <tr>03389 20398</tr>
          <hr />
          <tr>
            <td>
              <button>No Thanks</button>
            </td>
            <td>
              <button>I'll Take it</button>
            </td>
          </tr>
        </tbody>
      </table>
      <label className="table-title">Jobs Available</label>
    </div>
  );
};

export default Table;
