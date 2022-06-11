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
        <h3>DataLook</h3>
        <a href="https://goatstone.com/dl/" target="new">
          https://goatstone.com/dl/
        </a>
        <p>
          The display of data in a reactive layout.
          The application uses TypeScript and RxJS patterns for combining data with style definitions.
          The code can be found in the Github repository.
        </p>
        Git Hub :
        <a href="https://github.com/JoseHerminioCollas/data-view" target="new">
          https://github.com/JoseHerminioCollas/data-view
        </a>
        <img src="img/data-look-screen.png" width="400" />
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
      <article>
        <h3>
          Ameb, a game
          &nbsp;
          <a href="http://ameb.goatstone.com/" target="new">http://ameb.goatstone.com/</a>
        </h3>
        <p>
          <img src="img/ameb.png" alt="" />
          Ameb was an entry into the JS13kGames JavaScript competition. Ameb must eat food in order to accumulate
          health points and stay alive.
          The player of Ameb navigates the character, Ameb, to catch food.
        </p>
      </article>
      <article>
        <h3>
          MapLab
          &nbsp;
          <a href="https://map-lab-goatstone.appspot.com" target="new">https://map-lab-goatstone.appspot.com</a>
        </h3>
        <p>
          Experiments with mapping libraries:
          &nbsp;
          <a href="https://cloud.google.com/maps-platform/">
            Google
          </a>,
          &nbsp;
          <a href="https://leafletjs.com/">
            Leaflet
          </a> and
          &nbsp;
          <a href="https://www.bingmapsportal.com/">
            Bing
          </a>
          .
        </p>
        <img src="img/map-lab.png" />
      </article>
      <article>
        <h3>
          D3 Framework
          &nbsp;<a href="https://d3-frame.goatstone.com" target="new">https://d3-frame.goatstone.com</a>
        </h3>
        <p>
          <img src="img/d3-frame-1.png" className="right" width="250" height="160" alt="" />
          <img src="img/d3-frame-3.png" className="right" width="250" height="160" alt="" /> D3 and React
          Methodologies for using the D3 visualization library with React. I have been working with React
          ( reactjs.org ) and D3 ( d3js.org ) together, and I am documenting methodologies in a GitHub repository.
          <a href="https://github.com/goatstone/d3-frame" target="new">https://github.com/goatstone/d3-frame</a>
        </p>
      </article>
      <footer>
        Goatstone &copy; 2022
      </footer>
    </>
  );
}

export default App;
