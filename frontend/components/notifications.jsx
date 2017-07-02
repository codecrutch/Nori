import React from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import Notifications from 'react-notification-system-redux';
import PropTypes from 'prop-types';

class Notify extends React.Component {

  render() {
    const {notifications} = this.props;

    return (
      <Notifications
        notifications={notifications}
      />
    );
  }
}

export default connect(
  state => ({ notifications: state.notifications })
)(Notify);
