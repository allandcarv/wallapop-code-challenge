import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';

import { IModalComponent } from './Modal.interface';
import { ModalContainer, Overlay } from './Modal.styles';

const Modal: React.FC<IModalComponent> = ({ closeModal, title, children }) => {
  return createPortal(
    <Fragment>
      <Overlay onClick={closeModal}></Overlay>
      <ModalContainer className="modal-container">
        <header>
          <h2>{title}</h2>
          <AiOutlineClose
            title="Close Modal"
            size="1.2rem"
            onClick={closeModal}
          />
        </header>
        <main>{children}</main>
      </ModalContainer>
    </Fragment>,
    document.getElementById('__modal-portal') as HTMLElement,
  );
};

export default Modal;
