import React from "react";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const SeeMoreModal = ({open, close, data}) => {
  return (
    <div>
      <Modal open={open} onClose={close} center>
        <p>
            {data.description}
        </p>
      </Modal>
    </div>
  );
};

export default SeeMoreModal;
