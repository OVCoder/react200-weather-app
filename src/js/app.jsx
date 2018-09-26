import React from 'react';
import SearchField from './components/SearchField';
import CityInformation from './components/CityInformation';
import SearchHistory from './components/SearchHistory';

export default class App extends React.Component {
  
  render() {
    return (
      <div className='container'>
        {/*Heading of the App*/}
        <div className='jumbotron' >
          <h1 className='display-3 text-center'>Weather Application</h1>
          <h3 className='display-9 text-center'> Always know if you'll need an umbrella </h3>
        </div>
        <SearchField/>
        {/***SearchField component begins***/}
        {/* <div> */}
          {/*** Buttons with city names ***/}
          {/* <button className="btn btn-primary" type="button" > San Diego
          </button>
          <button className="btn btn-primary" type="button" > New York
          </button>
          <button className="btn btn-primary" type="button" > Washington DC
          </button>
          <button className="btn btn-primary" type="button" > London
          </button>
          <button className="btn btn-primary" type="button" > Tokyo
          </button> */}


          {/***Search bar with button***/}
          {/* <div className="input-group mb-4 bg-light mw-90">
            <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
            <button className="btn my-sm-0" type="submit">Go!</button>
          </div>
        </div> */}
        {/***SearchField component ends***/}

        <CityInformation/> 
        {/*** Start of Block with City information***/}
        {/* <div className="col-md-6 d-inline-block align-top table-light zero-padding bg-light">
          <div className="form-group text-dark little-heading-background">
            <label> 
              City Information
            </label>
          </div>
          <div>
            Tokio
          </div>
          <hr className="table-light" /> */}

          {/***Portion with the table begins***/}
          {/* <div className="form-group">
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
          </div>  */}
          {/***Portion with the table ends***/}
        {/* </div> */}
        {/*** End of Block with City Information***/}

        <SearchHistory/>
        {/***Block with Search History***/}
        {/* <div className="col-md-6 d-inline-block align-top table-light selector-for-some-widget zero-padding bg-light">
          <div className="form-group text-dark little-heading-background zero-padding">
            <label> 
              Search History
            </label>
          </div>
          <div> */}
        {/***start of bootstrap table test***/}
        {/* <div className="container-fluid">
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>San Diego</td>
                <td>
                  <div>04/28/2016</div>
                  <div>19:04:46</div>
                </td>
              </tr>
              <tr>
                <td>New York</td>
                <td>
                  <div>04/28/2016 </div>
                  <div>19:04:48 </div>
                </td>
              </tr>
              <tr>
                <td>Washington D.C.</td>
                <td>
                  <div>04/28/2016 </div>
                  <div>19:04:49 </div>
                </td>
              </tr>
              <tr>
                <td>London</td>
                <td>
                  <div>04/28/2016 </div>
                  <div>19:04:50 </div>
                </td>
              </tr>
              <tr>
                <td>Tokyo</td>
                <td>
                  <div>04/28/2016 </div>
                  <div>19:04:51 </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div> */}
        {/***end of bootstrap table test***/}
          {/* </div>
        </div> */}


      </div>
    );
  }
}
