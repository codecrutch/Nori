import React from 'react';
import { connect } from 'react-redux';
import { editBusiness, fetchBusiness, deleteBusiness } from '../../actions/business_actions';
import BusinessEditForm from './business_edit_form';
import { geocodeAddress } from '../../util/map_api_util.js';
import Notifications from 'react-notification-system-redux';
import uniqueId from '../../util/unique_id';

const mapStateToProps = (state, ownProps) => {
  return({
    business: state.businesses.currentBusiness
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    deleteBusiness: (id) => dispatch(deleteBusiness(id)),
    getBusiness: (id) => dispatch(fetchBusiness(id)),
    processForm: (business) => dispatch(editBusiness(business)),
    getLatitudeAndLongitude: (address) => geocodeAddress(address),
    addressError: (title) => dispatch(Notifications.error({
      title: title,
      message: "ex. 160 Spear St, San Francisco, CA 94105",
      position: 'tc',
      autoDismiss: 5,
    }))
  });
};

class BusinessEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getBusiness(this.props.match.params.businessId)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.businessId !== nextProps.match.params.businessId) {
      this.props.getBusiness(nextProps.match.params.businessId)
    }
  }

  render() {
    let business = this.props.business;
    let processForm = this.props.processForm;
    let getLatitudeAndLongitude = this.props.getLatitudeAndLongitude;
    let addressError = this.props.addressError;
    let deleteBusiness = this.props.deleteBusiness;

    if (business) {
      return (
        <BusinessEditForm
          key={business.id}
          business={business}
          processForm={processForm}
          getLatitudeAndLongitude={geocodeAddress}
          deleteBusiness={deleteBusiness}
          addressError={addressError}
         />
      );
    } else {
      return (
        <h1>Loading ...</h1>
      );
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessEdit);
