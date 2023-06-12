import React from "react";
import "../styles/Weather.css";
import Hours from "./Hours";
import Week from "./Week";
import axios from "axios";

class Weather extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            date: [{id: 2643743}, 
                {date: "loading..."}
              ],
            showLondon: false,
            showYork: false,
            showMoscow: false,
            showTokyo: false,
            showAlmaty: false,
            london: [{id: 2643743},
                        {}, 
                        {temp: 0},
                        {main: 0}
                      ],
            york : [{id: 5128638},
                        {}, 
                        {temp: 0},
                        {main: 0}
                     ],
            moscow : [{id: 524894},
                        {}, 
                        {temp: 0},
                        {main: 0}
                     ],
            tokyo : [{id: 1850147},
                        {}, 
                        {temp: 0},
                        {main: 0}
                     ],
            almaty : [{id: 1526384},
                        {}, 
                        {temp: 0},
                        {main: 0}
                     ]           
        }

    }

    
    componentDidMount(){
        for(let key in this.state){
            if(key.includes("show")){
            }else{
            let id = this.state[key][0].id;

            axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=${id}&units=metric&appid=ce9f10f3a8c49e5e8259468b90f46d49`).then((res) => {
                const city = res.data;
                if(key == "date"){
                    const date = {date: city.list[0].dt_txt.slice(0, 10)};
                    let new_state = [this.state[key][0], date];
                    this.setState({[key]: new_state});
                }else{ 
                    const main = {main: city.list[0].weather[0].main}
                    const temp = {temp: city.list[0].main.temp};
                    let new_state = [this.state[key][0], city , temp, main];
                    this.setState({[key]: new_state});
                    console.log(new_state);

                }
            })}
        }
        
    }

    render(){
        

    return(
    <>  
        <header><h1>Current Forecast:</h1>  {this.state.date[1].date}</header>
        <h3>Click on the name of city to see weekly forecast</h3>

        <div className="baseInfo">
            <div className="dayInfo">
                <div className="mainInfo">
                    <h2 onClick={()=>this.setState({ showLondon: !this.state.showLondon})}>London:</h2>
                    <div>
                        {Math.round(this.state.london[2].temp)} °C &nbsp;
                        {this.state.london[3].main}
                    </div> 
                </div>
                <div className="hoursInfo">
                    <Hours curDate={this.state.date[1].date} cityList={this.state.london[1].list} cityName="London"/>
                </div>
            </div>
            <div className="weekInfo">
                {this.state.showLondon && <Week name={this.state.london[1].city.name} cityList={this.state.london[1].list}/>}
            </div>
        </div>

        <div className="baseInfo">
            <div className="dayInfo">
                <div className="mainInfo">
                    <h2 onClick={()=>this.setState({ showYork: !this.state.showYork})}>New York: </h2>
                    <div>
                        {Math.round(this.state.york[2].temp)} °C &nbsp;
                        {this.state.york[3].main}
                    </div> 
                </div>
                <div className="hoursInfo">
                    <Hours curDate={this.state.date[1].date} cityList={this.state.york[1].list} cityName="New York"/>
                </div>
            </div>
            <div className="weekInfo">
                {this.state.showYork && <Week name={this.state.york[1].city.name} cityList={this.state.york[1].list}/>}
            </div>
        </div>

        <div className="baseInfo">
            <div className="dayInfo">
                <div className="mainInfo">
                    <h2 onClick={()=>this.setState({ showMoscow: !this.state.showMoscow})}>Moscow:</h2>
                    <div>
                        {Math.round(this.state.moscow[2].temp)} °C &nbsp;
                        {this.state.moscow[3].main}
                    </div>
                </div>
                <div className="hoursInfo">
                    <Hours curDate={this.state.date[1].date} cityList={this.state.moscow[1].list}/>
                </div>
            </div>
            <div className="weekInfo">
                {this.state.showMoscow && <Week name={this.state.moscow[1].city.name} cityList={this.state.moscow[1].list} />}
            </div>
        </div>

        <div className="baseInfo">
            <div className="dayInfo">
                <div className="mainInfo">
                    <h2 onClick={()=>this.setState({ showTokyo: !this.state.showTokyo})}>Tokyo:</h2>
                    <div>
                        {Math.round(this.state.tokyo[2].temp)} °C &nbsp;
                        {this.state.tokyo[3].main}
                    </div>
                </div>
                <div className="hoursInfo">
                    <Hours curDate={this.state.date[1].date} cityList={this.state.tokyo[1].list}/>
                </div>
            </div>
            <div className="weekInfo">
                {this.state.showTokyo && <Week name={this.state.tokyo[1].city.name} cityList={this.state.tokyo[1].list} />}
            </div>
        </div>

        <div className="baseInfo">
            <div className="dayInfo">
                <div className="mainInfo">
                    <h2 onClick={()=>this.setState({ showAlmaty: !this.state.showAlmaty})}>Almaty:</h2>
                    <div>
                        {Math.round(this.state.almaty[2].temp)} °C &nbsp;
                        {this.state.almaty[3].main}
                    </div>
                </div>
                <div className="hoursInfo">
                    <Hours curDate={this.state.date[1].date} cityList={this.state.almaty[1].list}/>
                </div>
            </div>
            <div className="weekInfo">
                {this.state.showAlmaty && <Week name={this.state.almaty[1].city.name} cityList={this.state.almaty[1].list} />}
            </div>
        </div>
    </>
    );
}

}

export default Weather;