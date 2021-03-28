import jokeTitle from '../../../styles/assets/jokeTitle.png';

const showJokeSetup = () => {
  document.querySelector('#main-container').innerHTML = `
    <div class="card" id="get-joke-card">
      <div class="card-wrapper">
        <div class="card-body mx-auto">
          <center><img src="${jokeTitle}"></center>
          <center><h5 class="card-title text-white mt-5">SETUP</h5></center>
          <center><h5 class="card-title text-white mt-5">PUNCHLINE</h5></center>
          <center><button type="button" class="btn btn-dark" id="get-punchline-btn" style="font-size: 2em">Get Punchline</button></center>
          <center><button type="button" class="btn btn-dark" id="get-new-joke-btn" style="font-size: 2em">Get New Joke</button></center>
        </div>
      </div>
    </div>`;
};

export default showJokeSetup;
