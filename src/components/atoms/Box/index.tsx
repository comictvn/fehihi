import React from 'react'

interface BoxProps {
  variant: 'question' | 'answer' | 'default';
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ variant, style, children }) => {
  let backgroundColor = '#FFFFFF';
  if (variant === 'question') {
    backgroundColor = '#F0F8FF';
  } else if (variant === 'answer') {
    backgroundColor = '#FFE3E3';
  }

  const customStyles = {
    backgroundColor,
    borderRadius: '8px',
    padding: '16px',
    ...style,
  };

  return <div style={customStyles}>{children}</div>;
};

export default Box;