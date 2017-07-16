import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props){
    super(props);

    this.searchBusinesses = this.searchBusinesses.bind(this);
    this.searchEnterPressed = this.searchEnterPressed.bind(this);
  }

  searchBusinesses(){
    let query = document.getElementById('splash-search-bar').value;
    let location = document.getElementById('splash-near-search').value;
    let bounds;

    if (query && location){
      return this.props.history.push(`/businesses?q=${query} ${location}`);
    } else if (query) {
      return this.props.history.push(`/businesses?q=${query}`);
    } else if (location) {
      return this.props.history.push(`/businesses?q=${location}`);
    }

      // use places api to get place id near location
      // if place id is found/chosen, get bounds by that lat/lng

      //set bounds = to lat/lng if can
  }

  searchEnterPressed(event){
    if (event.keyCode == 13) {
      this.searchBusinesses();
    }
  }

  render(){
    let fontSize, height, top, glyphTop, glyphRight;

    if (this.props.searchSize === "small") {
      fontSize = "15px";
      height = "30px";
      top = "6px";
      glyphTop = "-3px";
      glyphRight = "-5px";
    } else {
      fontSize = "20px";
      height = "50px";
      top = "13px";
      glyphTop = "8px";
    }

    return(
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <div style={{ display: 'flex', marginTop: '7px' }}>
          <span style={{ fontWeight: 'bolder', fontSize: fontSize, position: 'relative', left: '60px', top: top, zIndex: '2'}}>Find</span>
          <input autoComplete="off" spellCheck="false" onKeyUp={this.searchEnterPressed} id="splash-search-bar" type="text" className="form-control" placeholder="sushi, ramen, lunch" style={{ borderRight: '0.5px dashed #BBB', height: height, fontSize: fontSize}} />
          <input autoComplete="off" spellCheck="false" onKeyUp={this.searchEnterPressed} id="splash-near-search" type="text" className="form-control" placeholder="address, city, zip" style={{ height: height, fontSize: fontSize }} />
          <span style={{ fontWeight: 'bolder', fontSize: fontSize, position: 'relative', right: '375px', top: top, zIndex: '2'}}>Near</span>
          <span id="search-bar-button"  onClick={this.searchBusinesses} style={{ position: 'relative', left: '-55px', background: '#c22020', borderRadius: '5px', padding: '6px 10px', height: height}}>
            <span style={{ color: 'white', position: 'relative', right: glyphRight, top: glyphTop }} className="glyphicon glyphicon-search"></span>
          </span>
        </div>
      </div>
    )
  }
}

export default withRouter(SearchBar);
