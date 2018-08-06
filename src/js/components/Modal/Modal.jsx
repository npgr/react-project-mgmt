import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal as ModalStrap, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Modal = ({
  className,
  isOpen,
  header,
  footer = true,
  closeButtonText = 'Close',
  children,
  toggle,
  // style
  // modalProps
  ...props
}) => (
  <ModalStrap {...props} className={className} isOpen={isOpen} toggle={toggle}>
    {header &&
      <ModalHeader toggle={toggle}>
        {header}
      </ModalHeader>
    }
    {children &&
      <ModalBody>
        {children}
      </ModalBody>
    }
    {footer &&
      <ModalFooter>
        <Button color="primary" onClick={toggle}>{closeButtonText}</Button>
        {footer}
      </ModalFooter>
    }
  </ModalStrap>
);

Modal.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  header: PropTypes.oneOfType([ PropTypes.string, PropTypes.element ]),
  footer: PropTypes.oneOfType([ PropTypes.string, PropTypes.element ]),
  closeButtonText: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired,
  toggle: PropTypes.func.isRequired
};

export default Modal;
