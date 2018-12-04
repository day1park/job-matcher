import React from "react";
import "./table.css";

const Table = ({ jobData }) => {
  //   console.log(jobData);
  let jobCard;
  jobCard = jobData.map(job => {
    const { logo, name, address } = job.company;
    const nameCaps = name.toUpperCase();
    const { jobId, title, shifts, branch, branchPhoneNumber } = job;
    var wage = `${job.wagePerHourInCents}`;
    const wagePerHour = `$${wage / 100}0/hour`;
    let firstDay = shifts[0].startDate;
    let lastDay = shifts[shifts.length - 1].endDate;
    return (
      <div key={jobId} className="job-card">
        <div className="job-logo-info">
          <img alt="something" src={logo} className="job-logo" />
          <div className="job-info">
            <label className="job-title"> {title} </label>
            <label className="job-name">{nameCaps}</label>
            <label className="job-wage">{wagePerHour}</label>

            <label className="job-days">
              {firstDay} - {lastDay}
            </label>
          </div>
        </div>
        <div className="job-timetable">
          <b>If you take this job you are agreeing to work ALL DAYS.</b>
          <ul>
            <li>random times</li>
            <li>random times</li>
            <li>random times</li>
            <li>random times</li>
          </ul>
        </div>
        <hr />
        <div className="job-location">
          <h6>Location</h6>
          <a href="/">
            <u>{address}</u>
          </a>
        </div>
        <hr />
        <div className="job-branch">
          <h6>Branch:</h6>
          <h6>{branch}</h6>
          <a href="/">
            <u>({branchPhoneNumber}) 922-4240</u>
          </a>
        </div>
        <hr />
        <div className="job-selection">
          <a href="/">NO THANKS</a> <a href="/">I'LL TAKE IT</a>
        </div>
      </div>
    );
  });
  return <div className="table-container">{jobCard}</div>;
};

export default Table;
