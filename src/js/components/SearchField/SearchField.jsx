import React from 'react';
import axios from 'axios';

//Import of action creators
import {
  updateSearchField,
  makeAPIcall, 
  searchSanDiegoWeather,
  searchNewYorkWeather,
  searchWashingtonDCWeather,
  searchLondonWeather,
  searchTokyoWeather} 
  from './SearchFieldActions';


export default class SearchField extends React.Component {
  constructor (props) {
    super(props);
    
    //Here we're binding these methods to the context
    //of the components. This only has to be done,
    //because these methods are called back by
    //event emitters (which lose context).
    this.handleSearchCityInput = this.handleSearchCityInput.bind(this);
    this.handleAPIcall = this.handleAPIcall.bind(this);
    this.handleSanDiegoSearch = this.handleSanDiegoSearch.bind(this);
    this.handleNewYorkSearch = this.handleNewYorkSearch.bind(this);
    this.handleWashingtonDCSearch = this.handleWashingtonDCSearch.bind(this);
    this.handleLondonSearch = this.handleLondonSearch.bind(this);
    this.handleTokyoSearch = this.handleTokyoSearch.bind(this);
  }

  handleSearchCityInput(event){
    /*dispatch was provided by connect(). Dispatch is the function that we
    pass actions to, in order to change the store.*/
    const {dispatch} = this.props;
    const {value} = event.target;
    console.log(event.target.value, " VALUE!");
    console.log(this.props,"this is THIS.PROPS");
    dispatch(updateSearchField(value));
  }

  handleAPIcall(){
    const {dispatch} = this.props;
    dispatch(makeAPIcall());
  }

  handleSanDiegoSearch(){
    const {dispatch} = this.props;  
    dispatch(searchSanDiegoWeather());
  }
  handleNewYorkSearch(){
    const {dispatch} = this.props;
    dispatch(searchNewYorkWeather());
  }
  handleWashingtonDCSearch(){
    const {dispatch} = this.props;
    dispatch(searchWashingtonDCWeather());
  }
  handleLondonSearch(){
    const {dispatch} = this.props;
    dispatch(searchLondonWeather());
  }
  handleTokyoSearch(){
    const {dispatch} = this.props;
    dispatch(searchTokyoWeather());
  }
  
  render(){
    //Values below were provided by connect()
    const {searchCity} = this.props;
    console.log(searchCity,"SearchCity");
    return(
      <div>
        {/* Buttons with city names */}
        <button 
          className="btn btn-primary" 
          type="button" 
          onClick={this.handleSanDiegoSearch}>San Diego
        </button>
        <button 
          className="btn btn-primary" 
          type="button"
          onClick={this.handleNewYorkSearch}>New York
        </button>
        <button 
          className="btn btn-primary" 
          type="button"
          onClick={this.handleWashingtonDCSearch} > Washington DC
        </button>
        <button 
          className="btn btn-primary" 
          type="button" 
          onClick={this.handleLondonSearch}> London
        </button>
        <button 
          className="btn btn-primary" 
          type="button" 
          onClick={this.handleTokyoSearch}> Tokyo
        </button>


        {/*Search bar with button*/}
        <div className="input-group mb-4 bg-light mw-90">
          <input 
            className="form-control" 
            type="text" 
            placeholder="Search"
            value={searchCity} 
            onChange={this.handleSearchCityInput}/>
          <button 
            className="btn my-sm-0" 
            type="submit"
            onClick={this.handleAPIcall}>Go!
          </button>
        </div>
      </div>
    )
  }
}