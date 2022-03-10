import img1 from '../img/numnum.png';
import img2 from '../img/notes.png';
import img3 from '../img/finch.png';

function Projects() {
    return (
        <div class="card-group">
  <div class="card">
    <img src={img2} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Notes-App</h5>
      <p class="card-text">The Notes-App was created for people who wants a note keeper to make their lives easy and be more productive.</p>
      <a href="https://notes-app-king.herokuapp.com/" class="btn btn-primary btn-lg" role="button" aria-disabled="true" target="_blank">View App</a>
      <a href="https://github.com/youngking509/Notes-App" class="btn btn-secondary btn-lg" role="button" aria-disabled="true" target="_blank">Git Repo</a>
    </div>
  </div>
  <div class="card">
    <img src={img1} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Nom-Nom - The recipe app</h5>
      <p class="card-text">Nom-Nom is a content driven web app that allows users to create, update and delete recipies. While providing a search for recipes based on key word and videos for inporation.</p>
      <a href="https://nom-nom.netlify.app/" class="btn btn-primary btn-lg" role="button" aria-disabled="true" target="_blank">View App</a>
      <a href="https://github.com/youngking509/nom-nom-frontend" class="btn btn-secondary btn-lg" role="button" aria-disabled="true" target="_blank">Git Repo</a>
    </div>
  </div>
  <div class="card">
    <img src={img3} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">The Finch Collector</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <a href="https://finch-collector-123.herokuapp.com/" class="btn btn-primary btn-lg" role="button" aria-disabled="true" target="_blank">View App</a>
      <a href="https://github.com/youngking509/Finch-Collector" class="btn btn-secondary btn-lg" role="button" aria-disabled="true" target="_blank">Git Repo</a>
    </div>
  </div>
</div>
        
    );
}

export default Projects;