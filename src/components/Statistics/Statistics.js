import React from 'react';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <div>
        <p>Good: <span className={s.value}>{good}</span></p>
        <p>Neutral: <span className={s.value}>{neutral}</span></p>
        <p>Bad: <span className={s.value}>{bad}</span></p>
        <p>Total: <span className={s.value}>{total}</span></p>
        <p>Positive feedback: <span className={s.value}>{positivePercentage}%</span></p>
    </div>            
)

export default Statistics;
