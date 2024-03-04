/* eslint no-underscore-dangle: "off" */
/* eslint react/no-danger: "off" */

import React from 'react';
import I18n from './I18n';
import BaseComponent from './Base';

export default class Localize extends BaseComponent {

  static propTypes = {

  };

  render = () => {
    const localization = I18n._localize(
      this.props.value,
      this.props.dateFormat
        ? { dateFormat: this.props.dateFormat }
        : this.props.options
    );
    if (this.props.dangerousHTML) {
      return <span style={this.props.style} dangerouslySetInnerHTML={{ __html: localization }} />;
    }
    return <span style={this.props.style}>{localization}</span>;
  }
}
