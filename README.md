<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** AaronElam, crashpad, twitter, elam.j.aaron@gmail.com, Crashpad, Crashpad is an online system for listing and booking short-term rentals.
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://thecrashpad.netlify.app/">
    <img src="/frontend/src/images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Crashpad</h3>

  <p align="center">
    Crashpad is an online system for listing and booking short-term rentals.
    <br />
  Available on <a href="https://crashpad.dev" target=_blank>crashpad.dev</a>
  <br/>
  If you're visiting around <b>09/22</b>, use the IP <a href="http://165.227.192.85/" target=_blank>165.227.192.85</a> since the DNS probably hasn't updated.
    <br />
    <br />
    <a href="https://github.com/AaronElam/crashpad/tree/master/docs"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://crashpad.dev">View Demo</a>
    ·
    <a href="https://github.com/AaronElam/crashpad/issues">Report Bug</a>
    ·
    <a href="https://github.com/AaronElam/crashpad/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#running">Running</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![product-screenshot](https://i.imgur.com/pxzk7JD.png)

This project started as a project in my software engineering class. Unfortunately for us, the course was over the summer of 2020 and no actual software was written, only documents. In that course, I learned how to discuss the technical requirements of a project with a group and present those ideas to a shareholder (our professor). <br /> <b>This web application is the result of me wanting to turn that project into a reality.</b>

### Built With

- [Mongodb](https://www.mongodb.com/)
- [Express](https://expressjs.com/)
- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/en/)
- [TailwindCSS](https://tailwindcss.com/)
- [JSON Web Tokens](https://jwt.io/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

These are the things you need to get Crashpad fully up and running on your machine.

- npm
  ```sh
  npm install npm@latest -g
  ```
- Check versions
  ```sh
  node -v
  npm -v
  ```
 - Install mongodb
  ```sh
  sudo apt-get install mongodb
  ```
- Create file for mongodb
  ```sh
  sudo mkdir /data && touch /data/db
  ```

### Installation
1. Clone the repo
   ```sh
   git clone https://github.com/AaronElam/crashpad.git
   ```
   
2. npm install in both /frontend and /backend
  ```sh
  npm i
  ```
  
3. For frontend, you must install two additional dependencies, babel and typescript. I'll fix this later.
  ```sh
  npm i @babel/core@^7.13.0
  npm i typescript@>=2.8.0
  ```
  
4. Done

## Running

Open up 3 terminal tabs.

1. Frontend
  ```sh
  cd crashpad/frontend/ && npm start
  ```
2. Backend
  ```sh
  cd crashpad/backend/ && node server.js
  ```
3. Database
  ```sh
  mongod
  ```

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Aaron Elam - elam.j.aaron@gmail.com

Project Link: [https://github.com/AaronElam/crashpad](https://github.com/AaronElam/crashpad)

<!-- ACKNOWLEDGEMENTS -->
