import React, { useState } from 'react';
import { FontIcon } from '@fluentui/react/lib/Icon';
import { mergeStyles } from '@fluentui/react/lib/Styling';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import {
  mergeStyleSets,
  Modal,
  IIconProps,
  IconButton,
  IButtonStyles,
} from '@fluentui/react';
import ContactForm from './contact-form';
import logo from './logo.svg';

const mailIconClass = mergeStyles({
  fontSize: 50,
  height: 50,
  width: 50,
  margin: '0.2em',
  cursor: 'pointer',
});
const contentStyles = mergeStyleSets({
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'stretch',
    background: 'none'
  },
});
const iconButtonStyles: Partial<IButtonStyles> = {
  root: {
    marginLeft: 'auto',
    marginTop: '4px',
    marginRight: '2px',
  },
  rootHovered: {
  },
};
const sendMailStyles: Partial<IButtonStyles> = {
  root: {
    marginLeft: 'auto',
    marginTop: '4px',
    marginRight: '2px',
  },
  icon: {
    fontSize: '3em',
  },
  rootHovered: {
  },
};
initializeIcons();
function App() {
  const [b, setB] = useState(false)
  const cancelIcon: IIconProps = { iconName: 'Cancel' };
  const sendIcon: IIconProps = { iconName: 'send' };

  return (
    <>
      <Modal
        titleAriaId={'titleId'}
        isOpen={b}
        onDismiss={() => setB(false)}
        isBlocking={false}
        containerClassName={contentStyles.container}
      >
        <div className='form-container'>
          <div className='modal-head'>
            <h3>Contact Goatstone</h3>
            <IconButton
              styles={iconButtonStyles}
              iconProps={cancelIcon}
              ariaLabel="Close popup modal"
              onClick={() => setB(false)}
            />
          </div>
          <ContactForm />
        </div>
      </Modal>
      <header>
        <h1>
          Goatstone <i>Web Development</i>
        </h1>
        <div>
          <FontIcon onClick={() => setB(true)} aria-label="mail" iconName="mail" className={mailIconClass} />
          <img src={logo} className="logo" alt="logo" />
        </div>
      </header>
      <article>
        <h3>Goatstone, Web Development</h3>
        <p>
          Goatstone is, Jose Collas. Here you will find a collection of some of my work.
          I have been primarily using the technologies: JavaScipt, CSS, and HTML to implement the listed work.
        </p>
        <h4>
          Github
        </h4>
        <ul>
          <li>
            <a href="https://github.com/joseherminiocollas" target="new">
              github.com/joseherminiocollas
            </a>
          </li>
          <li>
            <a href="https://github.com/goatstone" target="new">github.com/goatstone</a>
          </li>
        </ul>
      </article>
      <article>
        <h3>2DPhysics Data</h3>
        <p>
          2DPhysics Data is an exploration of visualizing data with a 2D physics layout.
          The data displayed is 100 of the Heaviest Meteorites from NASA's Open Data Portal.
        </p>
        <a href="https://joseherminiocollas.github.io/react-matter/" target="new">
          https://joseherminiocollas.github.io/react-matter/
        </a>
        <p>
        </p>
        Git Hub :
        <a href="" target="new">
          https://github.com/JoseHerminioCollas/react-matters
        </a>
        <img src="img/2d-data-screen-shot.png" width="400" />
      </article>
      <article>
        <h3>
          View GIBS&nbsp;
          <a href="https://viewgibs.world/" target="new">https://viewgibs.world/</a>
        </h3>
        <p>
          View GIBS is a tool for viewing satellite images provided by NASA's Global Imagery Browse Services (GIBS) system.
          GIBS : <a href="https://nasa-gibs.github.io/gibs-api-docs">
            https://nasa-gibs.github.io/gibs-api-docs
          </a>
        </p>
        <img src="img/view-gibs-app-sml.png" />
      </article>
      <footer>
        Goatstone &copy; 2023
      </footer>
    </>
  );
}

export default App;
