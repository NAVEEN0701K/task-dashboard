import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
  children,
  variant = 'primary',
  type = 'button',
  onClick,
  disabled = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'flex justify-center flex-row items-center gap-2 px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-4 disabled:opacity-70 disabled:cursor-not-allowed shadow-sm';

  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 hover:shadow-soft focus:ring-primary-100',
    secondary: 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 focus:ring-primary-100',
    danger: 'bg-red-600 text-white hover:bg-red-700 hover:shadow-soft focus:ring-red-100',
    success: 'bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-soft focus:ring-emerald-100',
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  return (
    <motion.button
      whileHover={disabled ? {} : { scale: 1.01 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
