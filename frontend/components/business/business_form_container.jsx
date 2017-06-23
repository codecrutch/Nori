import React from 'react';
import { connect } from 'react-redux';
import BusinessForm from './business_form';
import { login, signup } from '../../actions/business_actions';
import { geocodeAddress } from '../../util/map_api_util.js';
import Notifications from 'react-notification-system-redux';

const mapStateToProps = (state, ownProps) => {
  return({
    formType: ownProps.location.pathname.slice(1).split('/')[1] + " business"
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    processForm: (business) => { processForm(dispatch, ownProps)(business)},
    getLatitudeAndLongitude: (address) => geocodeAddress(address),
    addressError: () => dispatch(Notifications.error({
      title: "Address Missing",
      message: "ex. 159 W. 25th St, Manhattan NY",
      position: 'tc',
      autoDismiss: 5,
    }))
  });
};

const processForm = (dispatch, ownProps) => {
  if (ownProps.location.pathname === '/business/new') {
    return (business) => dispatch(createBusiness(business));
  } else {
    return (business) => dispatch(updateBusiness(business));
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessForm);
