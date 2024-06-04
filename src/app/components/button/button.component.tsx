import React from 'react';
import ButtonProps from './button.props';
import googleIcon from '../../../../public/images/googleIcon.png';
import appleIcon from '../../../../public/images/appleIcon.png';

export const Button: React.FC<ButtonProps> = ({
  children,
  color = 'primary',
  size = 'large',
  disabled = false,
  type = 'button',
  block = false,
  icon,
  className,
  outlined,
  iconType,
  ...delegated
}) => {
  let buttonClasses = 'inline-flex items-center justify-center shadow-sm font-medium rounded-sm transition duration-150 ease-in-out disabled:opacity-50 h-full text-center';
  if(iconType)
    buttonClasses += 'bg-transparent '
  else{
    switch (color) {
      case 'secondary':
        buttonClasses += ' text-gray-700 bg-gray-200 hover:bg-gray-300 focus:ring-gray-500';
        break;
      case 'default':
        buttonClasses += ' text-gray-700 bg-white hover:bg-gray-50 focus:ring-gray-500';
        break;
      case 'danger':
        buttonClasses += ' text-white bg-red-600 hover:bg-red-700 focus:ring-red-500';
        break;
      case 'transparent':
        buttonClasses += ' text-gray-700 bg-transparent hover:bg-gray-100 focus:ring-gray-500';
        break;
      default: // Primary
        buttonClasses += ' text-white bg-primary hover:bg-primary-700 text-center';
    }
  }

  if (block) {
    buttonClasses += ' w-full';
  }

  if (size === 'small') {
    buttonClasses += ' px-2.5 py-1.5 text-xs';
  } else if (size === 'large') {
    buttonClasses += ' px-4 py-2 text-base';
  }

  if (outlined) {
    buttonClasses += ' border';
  }

  const dataTestId = `${color}${outlined ? '-outlined' : ''}`;

  const renderIcon = () => {
    const iconClassApple = "-ml-1 mr-2 h-10 w-10 rounded-full object-cover";
    const iconClassGoogle = "-ml-1.5 mr-2 h-12 w-12 rounded-full object-cover";
    switch (iconType) {
      case 'google':
        return <img src={googleIcon.src} alt="Google Icon" className={iconClassGoogle}/>;
      case 'apple':
        return <img src={appleIcon.src} alt="Apple Icon" className={iconClassApple}/>;
      default:
        return null; // No icon
    }
  };

  return (
    <button
      className={className ? `${buttonClasses} ${className}` : buttonClasses}
      disabled={disabled}
      type={type}
      data-testid={dataTestId}
      {...delegated}
    >
      {renderIcon()}
      {children}
    </button>
  );
};

export default Button;
