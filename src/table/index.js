import React from "react";
import "./table.css";
import dateFormat from "dateformat";

const Table = ({ jobData }) => {
  let jobCard;
  jobCard = jobData.map(job => {
    const { jobId, title, shifts, branch, branchPhoneNumber } = job;
    const { logo, name, address } = job.company;

    let nameCaps = name.toUpperCase();
    let wage = `${job.wagePerHourInCents}`;
    let wagePerHour = `$${wage / 100}0/hour`;
    const convertDate = (dateFormat.masks.convertDate =
      'ddd, mmm dd HH:MM"AM PST" ');
    const firstLastDay = (dateFormat.masks.firstLastDay = "ddd, mmm dd");

    console.log(dateFormat(shifts[0].startDate, convertDate));
    let firstDay = dateFormat(shifts[0].startDate, firstLastDay);
    let lastDay = dateFormat(shifts[shifts.length - 1].endDate, firstLastDay);

    let day1 = dateFormat(shifts[0].startDate, convertDate);
    let day2 = dateFormat(shifts[1].startDate, convertDate);
    let day3 = dateFormat(shifts[2].startDate, convertDate);
    let day4 = dateFormat(shifts[3].startDate, convertDate);
    let day5 = dateFormat(shifts[4].startDate, convertDate);

    return (
      <div key={jobId} className="job-card">
        <div className="job-logo-info">
          <img alt="something" src={logo} className="job-logo" />
          <div className="job-info">
            <label className="job-title"> {title} </label>
            <label className="job-name">{nameCaps}</label>
            <label className="job-wage">{wagePerHour}</label>
            <br />
            <label className="job-days">
              {firstDay} - {lastDay}
            </label>
          </div>
        </div>
        <div className="job-timetable">
          <b>If you take this job you are agreeing to work ALL DAYS.</b>
          <div className="job-hours">
            <label>{day1}</label>
            <label>{day2}</label>
            <label>{day3}</label>
            <label>{day4}</label>
            <label>{day5}</label>
          </div>
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

        <hr className="final-line" />
        <div className="job-selection">
          <a href="/">NO THANKS</a> <a href="/">I'LL TAKE IT</a>
        </div>
      </div>
    );
  });

  return <div className="table-container">{jobCard}</div>;
};

export default Table;
