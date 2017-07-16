import React from 'react';
import uniqueId from '../../util/unique_id';
import Carousel from 'react-3d-carousel';

class ImageView extends React.Component {
  constructor(props){
    super(props);
  }

  displayImages(){
    let business = this.props.business;

    if (business.uploaded_images) {
      return (
        <div style={{ postion: 'relative' }}>
          <Carousel className="small-carousel" width={450} images={business.uploaded_images} ease={'sineInOut'} duration={400} layout={'classic'}/>
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
      <div style={{ position: 'relative', left: '-20px', width: '500px' }}>
       {this.displayImages()}
      </div>
    );
  };
}

export default ImageView;
