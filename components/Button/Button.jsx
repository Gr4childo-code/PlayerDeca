import React from 'react';

const Button = ({ text, type, style, link, ...props }) => {
  const renderSwitchButton = (style, link) => {
    if (link) {
      return (
        <a href={link}>
          <button className={'button button__' + style} type={type} {...props}>
            <p>{text}</p>
          </button>
        </a>
      );
    } else {
      return (
        <button className={'button button__' + style} type={type} {...props}>
          <p>{text}</p>
        </button>
      );
    }
  };

  return <div>{renderSwitchButton(style, link)}</div>;
};

export default Button;
