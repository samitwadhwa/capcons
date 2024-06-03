import React from 'react';

/* eslint-disable semi */
type Color =
  | 'primary'
  | 'secondary'
  | 'default'
  | 'danger'
  | 'transparent'
  | '';
type Size =
  | 'small'
  | 'medium'
  | 'large'
  


export interface IconProps {
  hasChildren: boolean;
}

export default interface ButtonProps {
  children?: React.ReactNode;
  /** Handle onClick event */
  onClick?(event?: any): void;
  /** 'primary' | 'secondary' | 'default' | 'danger' */
  color?: Color;
  /** Combined with theme, invert background */
  outlined?: boolean;
  /** 'small' | 'medium' | 'large' */
  size?: Size;
  /** Set button as disabled. */
  disabled?: boolean;
  /** Set icon button type. */
  iconType?: 'google' | 'apple';
  // set the button type
  type?: 'submit' | 'button'; 
  /** Set if the button should fill entire space */
  block?: boolean;
  /** Icon on the button */
  icon?: React.ReactElement;
  style?: React.CSSProperties;
  className?: string;
}