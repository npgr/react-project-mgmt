import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';
import { deleteNotification } from '../actions/notifications';

class AppNotifications extends Component {
  render() {
    const {
      notifications,
      deleteNotification
    } = this.props;
    return (
      <div className="app-notifications"
        xstyle={{position: 'absolute', backgroundColor: 'white', margin: '0 15px', zIndex: '100', width: '90vw'}}>
        {
          notifications.map((notification, i) =>
            <Alert
              key={i}
              style={{margin: '2px 0'}}
              color={notification.type !== 'error' ? notification.type : 'danger'}
              toggle={() => deleteNotification(i)}
            >
              {notification.message}
            </Alert>
          )
        }
      </div>
    );
  }
}

AppNotifications.propTypes = {
  notifications: PropTypes.array,
  deleteNotification: PropTypes.func
};

const mapStateToProps = ({
  notifications,
  deleteNotification
}) => ({
  notifications,
  deleteNotification
});

const mapDispatchToProps = {
  deleteNotification
};

export default connect(mapStateToProps, mapDispatchToProps)(AppNotifications);
