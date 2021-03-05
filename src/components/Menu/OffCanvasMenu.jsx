import React, { useState } from 'react';
import styles from './OffCanvasMenu.module.scss';
import cx from 'classnames';
import { Link } from 'react-router-dom';
// import { a } from 'react-router-dom';

const OffCanvasMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuStyles = cx(styles.sidenav, {
    [styles.open]: isMenuOpen,
    [styles.closed]: !isMenuOpen,
  });

  const closeBtnStyles = cx(styles.closebtn, styles.btn);
  const openBtnStyles = cx(styles.main, styles.btn);

  return (
    <>
      <nav className={menuStyles}>
        <ul>
          <li>
            <button className={closeBtnStyles} onClick={toggleMenu}>
              &times;
            </button>
          </li>
          <li>
            <Link to='/slider'>Slider</Link>
          </li>
          <li>
            <Link to='/counter'>Counter</Link>
          </li>
          <li>
            <Link to='/404'>test3</Link>
          </li>
        </ul>
      </nav>

      <button className={openBtnStyles} onClick={toggleMenu}>
        &#9776;
      </button>
    </>
  );
};

export default OffCanvasMenu;
