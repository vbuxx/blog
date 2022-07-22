import React from 'react';

export default function ModalButton({ htmlFor, className = '', children }) {
    return (
        <button
            type='button'
            htmlFor={htmlFor}
            className={
                `btn modal-button'
                } ` + className
            }
        >
            {children}
        </button>
    );
}