import React from 'react';
import uniqueId from '../../util/unique_id';

class ImageView extends React.Component {
  constructor(props){
    super(props);
  }

  displayImages(){
    let business = this.props.business;

    if (business.uploaded_images) {
      let images = business.uploaded_images.map(src => <img id="upload-image" className="img-thumbnail" style={{  margin: '5px', width: '90px', height: '90px' }} src={src} key={uniqueId()}/>);

      return (
        <div style={{ postion: 'relative', left: '100px', display: 'flex', justifyContent: 'space-around' }}>
          {images}
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
