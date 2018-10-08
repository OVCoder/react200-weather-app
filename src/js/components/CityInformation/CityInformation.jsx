import React from 'react';

//Import of action creators
import {
  displayCurrentCity
}  
  from './CityInfoActions';


export default class CityInformation extends React.Component {
  constructor (props){
    super (props);
  }

  render(){
    //Values below were provided by connect()
    const {currentCity, temp, pressure, humidity, lowTemp, highTemp, windSpeed} = this.props;
    console.log(currentCity," THIS IS CURRENT SEARCH CITY");
    return(
      <div className="col-md-6 d-inline-block align-top table-light zero-padding bg-light">
        <div className="form-group text-dark little-heading-background">
          <label> 
            City Information
          </label>
        </div>
        <div>{currentCity}
        </div>
        <hr className="table-light" />

        {/*Portion with the table begins*/}
        <div className="form-group">
          <div className="row">
            <p className="col md-auto bg-secondary border border-secondary mr-1 ml-3 mb-1 text-justify">
              Temperature (F)
                <br/>
                <output> {temp}</output>
            </p>
            <p className="col bg-secondary border border-secondary mr-1 mb-1">
              Pressure (hPa)
              <br/>
              <output>{pressure}</output>
            </p>
            <p className="col bg-secondary border border-secondary mr-1 mb-1">
              Humidity (%) 
              <br/>
              <output>{humidity}</output>
            </p>
          </div>
          <div className="row">
            <p className="col bg-secondary border border-secondary mr-1 ml-3">
              Lowest Temp (F)
              <br/>
              <output>{lowTemp}</output>
            </p>
            <p className="col bg-secondary border border-secondary mr-1">
              Highest Temp (F)
              <br/>
              <output>{highTemp}</output>
            </p>
            <p className="col bg-secondary border border-secondary mr-1">
              Wind Speed (miles/hour)
              <br/>
              <output>{windSpeed}</output>
            </p>
          </div>
        </div> 
      {/*Portion with the table ends*/}
      </div>

    )
  }
}