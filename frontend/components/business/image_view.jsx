import React from 'react';

class ImageView extends React.Component {
  constructor(props){
    super(props);
  }

  displayImages(){
    let business = this.props.business;

    if (business.images) {
      return (
        <div>
          <img src={images[0]}/>
        </div>
      );
    } else {
      return (
        <h1>No Images</h1>
      );
    };
  }

  render(){
    return (
      <div>
        {this.displayImages()}
      </div>
    );
  };
}

export default ImageView;
