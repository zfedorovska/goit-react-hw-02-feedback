import React from 'react';
import s from './Statistics.module.css';

const Notification = ({ message }) => (
    <div className={s.notification}>{message}</div>   
)

export default Notification;