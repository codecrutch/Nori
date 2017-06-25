import React from 'react';

class Footer extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    var style = {
      backgroundColor: "#f7d565",
      paddingTop: "20px",
      position: "fixed",
      marginTop: "-150px",
      height: "150px",
    };

    var phantom = {
      display: 'block',
      padding: '20px',
      height: '60px',
      width: '100%',
    }

    return (
      <div>
        <div style={phantom}></div>
        <footer style={style}></footer>
      </div>
    );
  }
}


export default Footer;
