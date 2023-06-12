import React from "react";
import "../styles/Week.css";


function Week(props){
    const cityList = props.cityList;
    const cityName = props.cityName;

    return(
        <div className="main">
            <div className="weekTitle">{props.name} in 5 days:</div>
            <div className="days">
                {cityList.filter(el => el.dt_txt.includes("12:00:00")).map(filteredEl => (
                    <div className="day" key={filteredEl.dt}>
                        <div className="elem elem1">{filteredEl.dt_txt.slice(5, 10)}</div>
                        <div className="elem">{Math.round(filteredEl.main.temp)} °C &nbsp; 
                        {filteredEl.weather[0].main}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Week;