import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button.jsx';

class PageButton extends Button {
  handleClick = () => {
    location = this.props.pageUrl;
  }
}

export default PageButton;
