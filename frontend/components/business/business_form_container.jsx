import React from 'react';
import { connect } from 'react-redux';
import BusinessForm from './business_form';
import { createBusiness } from '../../actions/business_actions';
import { geocodeAddress } from '../../util/map_api_util.js';
import Notifications from 'react-notification-system-redux';

const mapStateToProps = (state) => {
  return({
    formTitle: "Create Business",
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    processForm: (business) => dispatch(createBusiness(business)),
    getLatitudeAndLongitude: (address) => geocodeAddress(address),
    displayError: (title, message) => dispatch(Notifications.error({
      title: title,
      message: message,
      position: 'tc',
      autoDismiss: 5,
    }))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessForm);
