'use strict';
import $ from 'jquery';

function titlePage() {
  let text = ` <section class="main-text">
  <p class="body-text">Hello my name is Ren, I am a Software Engineer and student. </p>
</section>
</div>`;
  $('.body-text').html(text);
}
function aboutMe() {
  let text = `<section class="main-text">
  <p class="body-text">   I am a full-time student in the Software Engineering program at Thinkful. <br><br>
My passion to create and build is something that drew me to coding. Through my journey I have discovered an equal passion for dissecting code and understanding what's broken and why.  <br><br>
   With around 10 years in various customer service jobs I am comfortable communicating with clients about their needs. Many of those years were spent at a coffee shop, so I am well equipped to fuel the engines with the liquid of the Gods.   
</section>
</div>`;
  $('.body-text').html(text);
}
function projects() {
  let text = `<section class="main-text"><img src="imgs/quizApp.png" class="proj-img" alt="Quiz App Title Page"><i class="fab fa-html5"></i><i class="fab fa-css3-alt"></i><i class="fab fa-js-square"></i><p class="proj-des">Quiz App<br>A short quiz to test your knowledge of a Galaxy Far Far Away. <br><a href="https://github.com/thinkful-ei-narwhal/quizz-app-ren-jacob">Live Repo</a><br><a href="https://thinkful-ei-narwhal.github.io/quizz-app-ren-jacob">Live Page</a></p></section>
  </div>`;
  $('.body-text').html(text);
}

export default {
  titlePage,
  aboutMe,
  projects,
};
