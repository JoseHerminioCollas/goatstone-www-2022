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
      <div className='form-container'>
        <h3>Contact Goatstone</h3>
        <ContactForm />
      </div>
      <Modal
        titleAriaId={'titleId'}
        isOpen={b}
        onDismiss={() => setB(false)}
        isBlocking={false}
        containerClassName={contentStyles.container}
      >
        <IconButton
          styles={iconButtonStyles}
          iconProps={cancelIcon}
          ariaLabel="Close popup modal"
          onClick={() => setB(false)}
        />
        <h3>Send Mail to Goatstone</h3>
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
        <h3>Web Development</h3>
        <p>
          Goatstone is primarily but not exclusively, Jose Collas. Here you will find a collection of some of our
          work. Goatstone is involved in web development, primarily using the technologies: JavaScipt, CSS, and HTML.
          I have been working with
          &nbsp;
          <a href="https://reactjs.org/" target="new">React </a>
          &nbsp;
          and
          &nbsp;
          <a href="https://d3js.org/" target="new">D3</a>
          &nbsp;
          lately.
        </p>
        <h5>
          Github
        </h5>
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
          ( reactjs.org ) and D3 ( d3js.org ) together, and I am documenting methodologies in a GitHub repository,
        </p>
      </article>
      <article>
        <h3>
          Color Globe
          &nbsp;
          <a href="http://colorglobe.goatstone.com" target="new">http://colorglobe.goatstone.com</a>
        </h3>
        <p>
          <img src="img/globe.png" alt="" />
          Here the theming strategy using JSS and D3 interpolators are creating various themes for a map generated
          with the D3 Geo library.
        </p>
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
      <footer>
        Goatstone &copy; 2022
      </footer>
    </>
  );
}

export default App;
