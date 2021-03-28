import jokeTitle from '../../../styles/assets/jokeTitle.png';

const showJoke = () => {
  document.querySelector('#main-container').innerHTML = `
    <div class="card" id="get-joke-card">
      <div class="card-wrapper">
        <div class="card-body">
          <center><img src="${jokeTitle}"></center>
          <center><button type="button" class="btn btn-dark" id="get-joke-btn" style="font-size: 2em">Get A Joke</button></center>
        </div>
      </div>
    </div>`;
};

export default showJoke;
