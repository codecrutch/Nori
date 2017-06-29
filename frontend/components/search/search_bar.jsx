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
    this.props.fetchAllBusinesses(query);
    this.props.history.push('/businesses');
  }

  searchEnterPressed(event){
    if (event.keyCode == 13) {
      this.searchBusinesses();
    }
  }

  render(){
    return(
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex' }}>
          <span style={{ fontWeight: 'bolder', fontSize: '20px', position: 'relative', left: '60px', top: '13px', zIndex: '2'}}>Find</span>
          <input autoComplete="off" spellCheck="false" onKeyUp={this.searchEnterPressed} id="splash-search-bar" type="text" className="form-control" placeholder="sushi, cheap dinner, ramen" style={{ borderRight: '0.5px dashed #BBB'}} />
          <input autoComplete="off" spellCheck="false" onKeyUp={this.searchEnterPressed} id="splash-near-search" type="text" className="form-control" placeholder="address, city, zip" />
          <span style={{ fontWeight: 'bolder', fontSize: '20px', position: 'relative', right: '375px', top: '13px', zIndex: '2'}}>Near</span>
          <span id="search-bar-button"  onClick={this.searchBusinesses} style={{ position: 'relative', left: '-55px', background: '#c22020', borderRadius: '5px', padding: '6px 10px'}}><span style={{ color: 'white', position: 'relative', top: '8px' }} className="glyphicon glyphicon-search"></span></span>
        </div>
      </div>
    )
  }
}

export default withRouter(SearchBar);
