import React, { useContext } from 'react';
import Context from '../../context/NotificationContext';

import './notification.scss';

const Notification = () => {
    const { notification, setNotification } = useContext(Context);
    if (notification.message === '') {
        return null;
    }
    return (
        <div className="notification" style={{color: notification.severity === 'error' ? 'red' : 'green' }} onClick={() => setNotification('succes', '')}>
            <h1>{notification.message}</h1>
        </div>
    );
};

export default Notification;
