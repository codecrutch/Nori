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
    return (
      <div style={{ display: 'flex', justifyContent: 'center', width: '900px' }}>
        <h2>Upload a Photo</h2>
        <div style={{ height: '100px'}}/>
        <input type="file" onChange={(e) => this.updateFile(e)} placeholder="Upload an Image"/>
        <img src={this.state.uploaded_image_url} style={{ width: '300px'}} />
        <input onClick={(e) => this.handleSubmit(e)} placeholder="Upload"/>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UploadForm));
