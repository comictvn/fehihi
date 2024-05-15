import React from 'react'

interface ImageProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
}

const Image: React.FC<ImageProps> = ({ src, alt, width, height, style }) => {
  const customStyles = { width, height, ...style };

  return <img src={src} alt={alt} style={customStyles} />;
};

export default Image;