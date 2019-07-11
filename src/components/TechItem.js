import React from 'react';
import PropTypes from 'prop-types';

function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button type="text" onClick={() => onDelete(tech)}>
        Remover
      </button>
    </li>
  );
}

TechItem.defaultProps = {
  tech: 'Não aprendeu nada',
};

TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};

export default TechItem;
