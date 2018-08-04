import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';

const ProjectCard = ({
  literals,
  id,
  name,
  customer,
  status,
  showProjectDetail
}) => {
  const {
    id: customerId,
    name: customerName
  } = customer;
  return (
    <Card
      id={id}
      className="project-card"
      header={
        <div className="project-card-title" onClick={showProjectDetail}>
          {name}
        </div>
      }
      subtitle={<div className="text-right">{status}</div>}
    >
      {`${literals.customer}: (${customerId}) ${customerName}`}
    </Card>
  );
};

ProjectCard.propTypes = {
  literals: PropTypes.shape({
    customer: PropTypes.string.isRequired,
    status: PropTypes.string
  }).isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  customer: PropTypes.object.isRequired,
  showProjectDetail: PropTypes.func.isRequired
};

export default ProjectCard;
