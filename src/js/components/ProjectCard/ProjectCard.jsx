import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap';

const ProjectCard = ({
  literals,
  id,
  name,
  customer,
  status
}) => {
  const {
    id: customerId,
    name: customerName
  } = customer;
  return (
    <div  >
      <Card key={id} className="project-card">
        <CardBody>
          <CardTitle className="project-card-title">{`${id} - ${name}`}</CardTitle>
          <CardSubtitle className="text-center">{`${literals.status}: ${status}`}</CardSubtitle>
          <CardText>{`${literals.customer}: (${customerId}) ${customerName}`}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

ProjectCard.propTypes = {
  literals: PropTypes.object,
  id: PropTypes.number,
  name: PropTypes.string,
  status: PropTypes.string,
  customer: PropTypes.object
};

export default ProjectCard;
