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
    addressError: (title) => dispatch(Notifications.error({
      title: title,
      message: "ex. 159 W. 25th St, Manhattan NY",
      position: 'tc',
      autoDismiss: 5,
    }))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessForm);
