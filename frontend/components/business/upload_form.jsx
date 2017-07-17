import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { uploadImage } from '../../actions/business_actions';

const mapStateToProps = state => {
  return({
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return({
    uploadImage: (image) => dispatch(uploadImage(image))
  });
};

class UploadForm extends React.Component {
  constructor(props){
    super(props);

    this.state = { uploaded_image: null, uploaded_image_url: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let formData = new FormData();
    formData.append("uploaded_image[business_id]", this.props.match.params.businessId);
    formData.append("uploaded_image[user_id]", this.props.currentUser.id);
    formData.append("uploaded_image[photo]", this.state.uploaded_image);

    // FIX: Make back not be wonky
    this.props.uploadImage(formData).then(
      (e) => this.props.history.replace(`/business/${this.props.match.params.businessId}`)
    );
  }

  updateFile(e){
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function(){
      this.setState({ uploaded_image: file, uploaded_image_url: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render(){
    let fileInputStyle = {
      width: '150px',
      margin: '0 auto',
      fontSize: '15px',
      padding: '5px 10px'
    }

    let imageOutput; 
    if (this.state.uploaded_image_url) {
     imageOutput = <img className="img-thumbnail" src={this.state.uploaded_image_url} style={{ margin: '0 auto', width: '100%', maxWidth: '40%'}} />;
    } else {
      imageOutput = null;
    }      
    
    return (
      <section style={{margin: '0 auto', display: 'flex', justifyContent: 'center', border: '2px dashed grey', width: '600px', borderRadius: '5px' }}>
        <div style={{ display: 'flex', margin: '0 auto', justifyContent: 'center', flexDirection: 'column', width: '900px' }}>
          <h2 style={{ margin: '0 auto', paddingTop: '10px'}}>Upload a Photo</h2>
          {imageOutput}
          <input className="inputfile" id="file" name="file" type="file" onChange={(e) => this.updateFile(e)} placeholder="Upload an Image"/>
          <label htmlFor="file" style={fileInputStyle} >Browse files</label>
          <input style={{background: '#c22020', color: 'white', outline: 'none', borderRadius: '5px'}} type="submit" value="Upload Image" onClick={(e) => this.handleSubmit(e)} placeholder="Upload"/>
        </div>
      </section>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UploadForm));
