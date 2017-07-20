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
      let randomImages = this.imageSampler(business.uploaded_images);
      return (
        <div style={{ postion: 'relative' }}>
          <Carousel className="small-carousel" width={450} images={randomImages} ease={'sineInOut'} duration={400} layout={'classic'}/>
        </div>
      );
    } else {
      return (
        <h1>No Images</h1>
      );
    };
  }
  
  getRandomSubarray(arr, size) {
    var shuffled = arr.slice(0), i = arr.length, temp, index;
    while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
  }

  imageSampler(images) {
    return this.getRandomSubarray(images, 3);  
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
