import React from "react";
import "./table.css";

const Table = ({ jobData }) => {
  //   console.log(jobData);
  let jobCard;
  jobCard = jobData.map(job => {
    const { logo, name, address } = job.company;
    const { jobId, title, shifts, branch, branchPhoneNumber } = job;
    var wage = `${job.wagePerHourInCents}`;
    const wagePerHour = `$${wage / 100}0/hour`;
    let firstDay = shifts[0].startDate;
    let lastDay = shifts[shifts.length - 1].endDate;
    return (
      <div key={jobId} className="job-card">
        <img src={logo} />
        <h3> {title} </h3>
        <h5>{name}</h5>
        <h6>{wagePerHour}</h6>
        <h6>
          {firstDay} - {lastDay}
        </h6>
        <b>If you take this job you are agreeing to work ALL DAYS.</b>
        <h6>random times</h6>
        <hr />
        <h6>Location</h6>
        <a href="/">
          <u>{address}</u>
        </a>
        <hr />
        <h6>Branch:</h6>
        <h6>{branch}</h6>
        <a href="/">
          <u>({branchPhoneNumber}) 922-4240</u>
        </a>
        <hr />
        <a href="/">NO THANKS</a> <a href="/">I'LL TAKE IT</a>
      </div>
    );
  });
  return <div className="table-container">{jobCard}</div>;
};

export default Table;
