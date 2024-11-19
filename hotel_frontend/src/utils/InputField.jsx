import React, { useState } from 'react';

const InputField = ({ label, type = 'text', helperText, validator, ...props }) => {

    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const handleBlur = () => {
        if (validator && value.trim() !== '') {
            const validationError = validator(value);
            setError(validationError);
        }
    };

    const handleChange = (e) => {
        setValue(e.target.value);
        setError('');
    };

    return (
        <div className="mb-0">
            {/* Input field */}
            <div className='relative'>
                <input
                    {...props}
                    type={type}
                    value={value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`peer block w-full px-3 py-2 text-base bg-white border-[2px] rounded outline-none transition-all duration-300 ${error ? 'border-red-500' : 'border-gray-300'
                        } focus:border-gray-700 `}
                    placeholder=" "
                />

                {/* Label */}
                <label
                    className={`absolute pointer-events-none px-1.5 left-3 text-base transition-all scale-100 duration-100 top-[48%] -translate-y-1/2 peer-focus:top-0 peer-focus:bg-white peer-focus:left-1.5 peer-focus:scale-90 peer-focus:tracking-wide peer-focus:font-medium`}
                >
                    {label}
                </label>
            </div>

            {/* Helper or error text */}
            {(error || helperText) &&
                <p className={`text-sm mt-1 ${error ? 'text-red-500' : 'text-gray-500'}`}>
                    {error || helperText}
                </p>}
        </div>
    );
};

export default InputField