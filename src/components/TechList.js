import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TechItem from './TechItem';

class TechList extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    newTech: '',
    newTechPlaceholder: 'Digite uma nova tech',
    techs: ['Node.js', 'ReactJs', 'ReactNative'],
  };

  handleInputChanged = e => {
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: '',
    });
  };

  handleDelete = tech => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem key={tech} tech={tech} onDelete={this.handleDelete} />
          ))}
        </ul>
        <input
          type="text"
          placeholder={this.state.newTechPlaceholder}
          onChange={this.handleInputChanged}
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;
