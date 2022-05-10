import img1 from '../img/recipe.png';
import img2 from '../img/note.png';
import img4 from '../img/kv.png';
import img5 from '../img/texas.png';

function Projects() {
  return (
    <div>

      <div class="header">
        <h1>Here are some of the projects that I've build</h1>
      </div>

      <div class="card-group">

        <div class="card">
          <img src={img1} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Nom-Nom - The recipe app</h5>
            <p class="card-text">Nom-Nom is a content driven web app that allows users to create, update and delete recipies. While providing a search for recipes based on key word and videos for inporation.</p>
            <a href="https://nom-nom.netlify.app/" class="btn-1 btn-primary btn-lg" role="button" aria-disabled="true" target="_blank">View App</a>
            <a href="https://github.com/youngking509/nom-nom-frontend" class="btn-2 btn-secondary btn-lg" role="button" aria-disabled="true" target="_blank">Git Repo</a>
          </div>
        </div>
        <div class="card">
          <img src={img4} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">E-Commerce Site</h5>
            <p class="card-text">This is an e-commerse site for a clothing brand. I use react and commerce.js to create the site. You're able to view products and add products to cart. </p>
            <a href="https://kwalitty-vibe.netlify.app/" class="btn-1 btn-primary btn-lg" role="button" aria-disabled="true" target="_blank">View App</a>
            <a href="https://github.com/youngking509/E-commerce" class="btn-2 btn-secondary btn-lg" role="button" aria-disabled="true" target="_blank">Git Repo</a>
          </div>
        </div>
        <div class="card">
          <img src={img5} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">The Weather App</h5>
            <p class="card-text">THe weather app allows user to search any city/state/countries in the world and see the current weather information for that place.</p>
            <a href="https://kv-weather.netlify.app/" class="btn-1 btn-primary btn-lg" role="button" aria-disabled="true" target="_blank">View App</a>
            <a href="https://github.com/youngking509/weather-app-react" class="btn-2 btn-secondary btn-lg" role="button" aria-disabled="true" target="_blank">Git Repo</a>
          </div>
        </div>

        <div class="card">
          <img src={img2} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Notes-App</h5>
            <p class="card-text">The Notes-App was created for people who wants a note keeper to make their lives easy and be more productive.</p>
            <a href="https://notes-app-king.herokuapp.com/" class="btn-1 btn-primary btn-lg" role="button" aria-disabled="true" target="_blank">View App</a>
            <a href="https://github.com/youngking509/Notes-App" class="btn-2 btn-secondary btn-lg" role="button" aria-disabled="true" target="_blank">Git Repo</a>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Projects;