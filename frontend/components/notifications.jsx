import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import Notifications from 'react-notification-system-redux';

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

Notify.contextTypes = {
  store: PropTypes.object
};

Notify.propTypes = {
  notifications: PropTypes.array
};

export default connect(
  state => ({ notifications: state.notifications })
)(Notify);

