import React from 'react';

class Footer extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    var style = {
      backgroundColor: "#f7d565",
      borderTop: "1px solid #ead05b",
      textAlign: "center",
      padding: "20px",
      position: "fixed",
      left: "0",
      bottom: "0",
      height: "60px",
      width: "100%",
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
