// import showJoke from '../components/cards.js/jokeCard';
import showJokeSetup from '../components/cards.js/jokeSetupCard';
import domBuilder from './domBuilder';

const startApp = () => {
  domBuilder();
  // showJoke();
  showJokeSetup();
};

export default startApp;
