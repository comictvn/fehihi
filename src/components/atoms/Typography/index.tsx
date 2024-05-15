import React from 'react'

interface TypographyProps {
  variant: 'header' | 'title' | 'subtitle' | 'body' | 'caption';
  color?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({ variant, color, style, children }) => {
  const customStyles = { color, ...style };

  switch (variant) {
    case 'header':
      return <div style={{ fontSize: '16px', fontWeight: 'bold', ...customStyles }}>{children}</div>;
    case 'title':
      return <div style={{ fontSize: '24px', fontWeight: 'bold', ...customStyles }}>{children}</div>;
    case 'subtitle':
      return <div style={{ fontSize: '14px', color: '#1F8EFA', ...customStyles }}>{children}</div>;
    case 'body':
      return <div style={{ fontSize: '14px', ...customStyles }}>{children}</div>;
    case 'caption':
      return <div style={{ fontSize: '14px', color: '#666', ...customStyles }}>{children}</div>;
    default:
      return <div style={customStyles}>{children}</div>;
  }
};

export default Typography;