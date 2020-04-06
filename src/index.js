'use strict';

import './index.css';
import $ from 'jquery';
import render from './renders';

function handleAboutMe() {
  $('.nav-about').on('click', (event) => {
    event.preventDefault();
    console.log('working');
    render.aboutMe();
  });
}
function handleProjects() {
  $('.nav-proj').on('click', (event) => {
    event.preventDefault();
    render.projects();
  });
}
function handleHome() {
  $('.nav-home').on('click', (event) => {
    event.preventDefault();
    render.titlePage();
  });
}

function pageLoad() {
  render.titlePage();
  handleHome();
  handleProjects();
  handleAboutMe();
}

pageLoad();
