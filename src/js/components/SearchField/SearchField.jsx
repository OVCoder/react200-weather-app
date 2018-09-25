import React from 'react';

export default class SearchField extends React.Component {
  constructor (props) {
    super(props);
  }

  render(){
    return(
      <div>
        {/* Buttons with city names */}
        <button className="btn btn-primary" type="button" > San Diego
        </button>
        <button className="btn btn-primary" type="button" > New York
        </button>
        <button className="btn btn-primary" type="button" > Washington DC
        </button>
        <button className="btn btn-primary" type="button" > London
        </button>
        <button className="btn btn-primary" type="button" > Tokyo
        </button>


        {/*Search bar with button*/}
        <div className="input-group mb-4 bg-light mw-90">
          <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
          <button className="btn my-sm-0" type="submit">Go!</button>
        </div>
      </div>
    )
  }
}