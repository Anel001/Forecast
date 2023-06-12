import React from "react";
import "../styles/Hours.css";
import Button from 'react-bootstrap/Button';


function Hours(props){
    const [show, setShow] = React.useState(false);

    const cityList = props.cityList;

    const onShowClicked = () =>{
        setShow(!show);
    }

    return(
        
        <>
            <Button variant="light" className="title" onClick={onShowClicked}>View more about day</Button>
            {show && <div id="hours">
                {cityList.filter(el => el.dt_txt.includes(props.curDate)).map(filteredEl => (
                    <div className="hour" key={filteredEl.dt}>
                      <div className="line1">{filteredEl.dt_txt.slice(11, 16)}</div>
                      <div className="line2">{Math.round(filteredEl.main.temp)} °C  <br/>
                      {filteredEl.weather[0].main}</div>
                    </div>
                  ))}

            </div>}
        </>
    );
}

export default Hours;