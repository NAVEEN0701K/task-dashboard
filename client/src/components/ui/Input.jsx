import React from 'react';

const Input = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  onBlur,
  error,
  placeholder = '',
  required = false,
  className = '',
  icon: Icon,
  ...props
}) => {
  const baseClasses = 'w-full px-4 py-3 bg-white border text-gray-900 rounded-xl focus:outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-500 transition-all duration-300 shadow-sm placeholder-gray-400';
  const errorClasses = error ? 'border-red-500 focus:ring-red-100 focus:border-red-500' : 'border-gray-200 hover:border-gray-300';
  const paddingWithIcon = Icon ? 'pl-11' : '';
  const classes = `${baseClasses} ${errorClasses} ${paddingWithIcon} ${className}`;

  return (
    <div className="mb-5">
      {label && (
        <label htmlFor={name} className="block text-sm font-semibold text-gray-700 mb-1.5">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
            <Icon size={18} />
          </div>
        )}
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          required={required}
          className={classes}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1.5 text-sm font-medium text-red-500 flex items-center">
          <svg className="w-4 h-4 mr-1 flex-shrink-0 inline" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
