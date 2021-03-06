import React from 'react';

export default class SearchHistory extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const {searchCity, date, time, searchList } = this.props;
    return (
      <div className="col-md-6 d-inline-block align-top table-light selector-for-some-widget zero-padding bg-light">
        <div className="form-group text-dark little-heading-background zero-padding">
          <label> 
            Search History
          </label>
        </div>
        <div>

          {/*start of bootstrap table test*/}
           <div className="container-fluid">
            <table className="table table-striped">
              <tbody>
                {searchList.map((searchResult, index) => (
                <tr key={index}>
                  <td>{searchResult.searchCity}</td>
                  <td>
                    <div>{searchResult.date}</div>
                    <div>{searchResult.time}</div>
                  </td>
                </tr>
                ))
                }
          {/*   <tr>
                  <td>{searchList[0].searchCity}</td>
                  <td>
                    <div>{searchList[0].date}</div>
                    <div>{searchList[0].time}</div>
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
                </tr>*/}
              </tbody>
            </table>
          </div> 
          {/*end of bootstrap table test*/}
        </div>
      </div>      
    )
  }
}