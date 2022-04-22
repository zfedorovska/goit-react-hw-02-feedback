import React from 'react';
import s from './Statistics.module.css';

const Section = ({ title, children }) => (
    <div className={s.section}>
        <p className={s.title}>{title}</p>
        {children}
    </div>   
)

export default Section;