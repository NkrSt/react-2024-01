import { createPortal } from 'react-dom';
import styles from './styles.module.css'
import { useEffect, useRef } from 'react';
import { Button } from '../button/component';

export const Modal = ({children, onClose}) => {
    const modalContainer = useRef(document.getElementById("modal-container"));

  console.log(modalContainer);
  return createPortal(
        <div className={styles.root}>
            <Button onClick={onClose}>Close</Button>
            {children}
            </div>,
        modalContainer.current
      );
};
