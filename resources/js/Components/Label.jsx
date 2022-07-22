import React from 'react';

export default function Label({ forInput, value, className, children }) {
    return (
        <label htmlFor={forInput} className={`block mb-2 text-sm font-medium dark:text-gray-300 text-gray-900 ` + className}>
            {value ? value : children}
        </label>
    );
}
