import React from 'react';
import PropTypes from 'prop-types';
import {
  Card as CardStrap,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap';

const Card = ({
  id,
  className,
  header,
  subtitle,
  children
}) => {
  return (
    <CardStrap key={id} className={className}>
      <CardBody>
        {header &&
          <CardTitle>{header}</CardTitle>
        }
        {subtitle &&
          <CardSubtitle>{subtitle}</CardSubtitle>
        }
        {children &&
          <CardText>{children}</CardText>
        }
      </CardBody>
    </CardStrap>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  className: PropTypes.string,
  header: PropTypes.oneOfType([ PropTypes.string, PropTypes.element ]),
  subtitle: PropTypes.oneOfType([ PropTypes.string, PropTypes.element ]),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired
};

export default Card;
