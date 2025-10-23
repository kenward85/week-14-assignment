import React from 'react';

function Button({ type = 'button', onClick, disabled, children, ariaLabel }) {
  return (
    <button type={type} onClick={onClick} disabled={disabled} aria-label={ariaLabel}>
      {children}
    </button>
  );
}

export default Button;
