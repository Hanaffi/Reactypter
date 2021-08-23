[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://user-images.githubusercontent.com/35642947/113368881-1ac20b00-9360-11eb-9b7c-7dbb3a73a928.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Reactypter</h3>

  <p align="center">
  a web-based interactive development environment for javascript notebooks
   <br />
    <!-- <a href=""><strong>Explore the docs »</strong></a> -->
    <br />
    <br />
    <a href="https://www.npmjs.com/package/reactypter">npm package</a>
    ·
    <a href="https://github.com/hanaffi/reactypter/issues">Report Bug</a>
    ·
    <a href="https://github.com/hanaffi/reactypter/issues">Request Feature</a>

  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
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
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![React](https://user-images.githubusercontent.com/35642947/113368605-83f54e80-935f-11eb-9b42-aca73faf4e2f.png)

Reactypter is a web-based interactive development environment for javascript notebooks, code, and MD. Reactypter is flexible: configure and arrange the user interface to support a wide range of workflows in web development. Reactypter is extensible and modular: write plugins that add new components and integrate with existing ones.

### Built With

-   [React](https://react.com)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

To build the site for development:

### Installation

## Usage

1. Open terminal
2. Run `npm i -g reactypter` to install the package
3. After installing, Run `npx reactypter serve` to start the notebook
4. Go to localhost:4005 (By default, It starts at port 4005)
5. you can change the port to 1000 for example by doing so `npx reactypter serve -p 1000` or `npx reactypter serve --port 1000` or `npx reactypter serve --port=1000`
6. After finishing writing your notebook, you will find `notebook.js` file in the directory you started at

-   You can change the saved-file name simply by stating the desired name in npx command. For example if you want it to be `proj.js` you will run `npx reactypter serve proj.js`
-   You can import any npm library inside your cells
-   As an alternative to `console.log` , You can show the value of any variable in the preview screen by using `show` function. For exmaple if you have `const x=5;` and you want to show it, you'd write `show(x)`

## Screenshots

<a href="https://user-images.githubusercontent.com/35642947/113489086-570d7c80-94c2-11eb-8c81-cd6256925b73.png" ><img src="https://user-images.githubusercontent.com/35642947/113489086-570d7c80-94c2-11eb-8c81-cd6256925b73.png" width="400px" height="200px"/> </a>

<a href="https://user-images.githubusercontent.com/35642947/113461486-11e33f00-941d-11eb-8d6b-79d95998b9b5.png" ><img src="https://user-images.githubusercontent.com/35642947/113461486-11e33f00-941d-11eb-8d6b-79d95998b9b5.png" width="400px" height="200px"/> </a>

## Roadmap

See the [open issues](https://github.com/hanaffi/reactypter/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Install Node.js and npm
2.  Fork & Clone the Project
3.  Run `npm install` in the root folder
4.  Run `npm start` - it should now parallel start different packages
5.  Now go to `packages/cli/dist` and run `node index.js serve` to launch the editor
6.  It will start on port 4005 by default
7.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
8.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
9.  Push to the Branch (`git push origin feature/AmazingFeature`)
10. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact


Project Link: [https://github.com/hanaffi/reactypter](https://github.com/hanaffi/reactypter)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

-   [Typescript](https://www.typescriptlang.org/)
-   [Redux](https://redux.js.org/)
-   [Immer](https://github.com/immerjs/immer)
-   [HTTP Proxy Middleware](https://www.npmjs.com/package/http-proxy-middleware)
-   [Commander](https://www.npmjs.com/package/commander)
-   [Express](https://expressjs.com/)
-   [Lerna](https://lerna.js.org/)
-   [Monaco Editor](https://microsoft.github.io/monaco-editor/)
-   [ESBuild](http://https://esbuild.github.io)
-   [Bulma](https://bulma.io)
-   [Prettier](https://prettier.io/)
-   [Axios](https://github.com/axios/axios)
-   [localforage](https://github.com/localForage/localForage)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/Hanaffi/reactypter.svg?style=for-the-badge
[contributors-url]: https://github.com/hanaffi/reactypter/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/hanaffi/reactypter.svg?style=for-the-badge
[forks-url]: https://github.com/hanaffi/reactypter/network/members
[stars-shield]: https://img.shields.io/github/stars/hanaffi/reactypter.svg?style=for-the-badge
[stars-url]: https://github.com/hanaffi/reactypter/stargazers
[issues-shield]: https://img.shields.io/github/issues/hanaffi/reactypter.svg?style=for-the-badge
[issues-url]: https://github.com/hanaffi/reactypter/issues
[license-shield]: https://img.shields.io/github/license/hanaffi/reactypter.svg?style=for-the-badge
[license-url]: https://github.com/hanaffi/reactypter/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/hanaffi
[product-screenshot]: images/screenshot.png
