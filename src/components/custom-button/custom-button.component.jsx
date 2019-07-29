import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, ...otherProps }) => (
  // <input type='submit' value='Submit Form' />
  <button className='custom-button' {...otherProps}>
    {children}
  </button>
)

export default CustomButton;