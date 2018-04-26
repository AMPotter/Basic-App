import React, { Fragment } from 'react';

export const FormInput = ({ inputName, label, inputType, value, placeholder, changeFn }) => (
    <Fragment>
        {
            label && <label htmlFor={inputName}>{label}</label>
        }
        <input 
            type={inputType} 
            name={inputName} 
            value={value} 
            placeholder={placeholder}
            onChange={changeFn} />
    </Fragment>
);