import showJoke from '../components/jokeCard';
import domBuilder from './domBuilder';

const startApp = () => {
  domBuilder();
  showJoke();
};

export default startApp;
