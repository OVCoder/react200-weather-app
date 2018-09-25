import React from 'react';

export default class CityInformation extends React.Component {
  constructor (props){
    super (props);
  }

  render(){
    return(
      <div className="col-md-6 d-inline-block align-top table-light zero-padding bg-light">
        <div className="form-group text-dark little-heading-background">
          <label> 
            City Information
          </label>
        </div>
        <div>
          Tokio
        </div>
        <hr className="table-light" />

        {/*Portion with the table begins*/}
        <div className="form-group">
          <div className="row">
            <p className="col md-auto bg-secondary border border-secondary mr-1 ml-3 mb-1 text-justify">
              Temperature (F)
                <br/>
                <output> 65.62F</output>
            </p>
            <p className="col bg-secondary border border-secondary mr-1 mb-1">
              Pressure
              <br/>
              <output>997</output>
            </p>
            <p className="col bg-secondary border border-secondary mr-1 mb-1">
              Humidity
              <br/>
              <output>39%</output>
            </p>
          </div>
          <div className="row">
            <p className="col bg-secondary border border-secondary mr-1 ml-3">
              Lowest Temp (F)
              <br/>
              <output>62.01F</output>
            </p>
            <p className="col bg-secondary border border-secondary mr-1">
              Highest Temp (F)
              <br/>
              <output>71.01F</output>
            </p>
            <p className="col bg-secondary border border-secondary mr-1">
              Wind Speed
              <br/>
              <output>24.16mph</output>
            </p>
          </div>
        </div> 
      {/*Portion with the table ends*/}
      </div>

    )
  }
}