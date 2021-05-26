<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h1 align="center">Secure Network Rebrand</h1>

  <p align="center">
    Project developed for the final exam of the course named <em>Hypermedia Applications</em> held by Professor Franca Garzotto at <em>Politecnico di Milano</em>.
    <br />
    <a href="https://github.com/lorenzofratus/SecureNetworkRebrand"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <!-- <a href="">View Demo</a>
    · -->
    <a href="https://github.com/lorenzofratus/SecureNetworkRebrand/issues">Report Bug</a>
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
    <li><a href="#team">Team</a></li>
    <!-- <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li> -->
    <!-- <li><a href="#usage">Usage</a></li> -->
    <li><a href="#license">License</a></li>
    <!-- <li><a href="#contact">Contact</a></li> -->
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<!-- ![Home Page Screenshot](../assets/screen-1.png?raw=true) -->

This project has been developed as final assignment for the _Hypermedia Applications_ course held by Professor Franca Garzotto at _Politecnico di Milano_.

### Built With

-   [Node.js](https://nodejs.org/)
-   [Vue.js](https://vuejs.org)
-   [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
-   [Nuxt](https://nuxtjs.org/)
-   [PostgreSQL](https://www.postgresql.org/)

<!-- SERVER SIDE -->
###Backend
To support the frontend, an express rest api has been deveped. It has the objective of implementing several http endpoints which allow the interaction with the database. There are two main files:
* **Api.js** implements enponts
* **Db_conn.js** defines the structure of the database and initialize it by reading initialization information from another file.

<!-- CLIENT SIDE -->
###Fronted Components
The frontend has been developed as VueJS app, using the NuxtJS framework.

####Cards
* **PersonCard.vue** is used to show syntetized information about a person. It contains the profile picture, the name and the surname of the subject.
* **ResourceCard.vue** is used to show syntetized information about a given resource.
* **ServiceCard.vue** is used to show syntetized information about a given service.
* **ThreatCard** is used to show information about a possible Threat.

####Items
* **ButtonComponent.vue** is a button which can perform three different types of operations.
* **ImageComponent.vue** is made up of an image, a text description and a ButtonComponent.
* **InputComponent.vue** is used to model form sub-sections.
* **TimelineComponent.vue** is used to highlight how many resources, grouped by type, are available for a given year.
* **TitleComponent.vue** is used to add a simple title to a more complex element.

####Menus
* **AppMenu.vue** is used to model landmarks which are embedded both in the header and in the footer of the page.
* **SocialMenu.vue** is used to model social logos which are embedded in the footer of the page.

####Sections
* ****
* **AltSection.vue** is a section which contains a title, an optional set of paragraphs and an optional button. It is used in almost all pages to give a description of the context.

* **FilterSection.vue**  A FilterSection is a section which allow the user to filter resources by type. It simply contains at most three button components, some of them can be avoided if there are no resources of a given type.

* **FormSection.vue** is a section which allow the user to contact the responsible of the enterprise.

* **GridSection.vue** is a section which allow to visualize cards of different types. It has a wide usage within the website in order to show all previews of a given collection of elements.

* **ImageComponentsSection.vue** is a section which lists a group of ImageComponents. It can be used either to display Areas or People which have a significant role within the given context.

* **MainSection.vue** is the first section you see in almost each page. It contains a title, optionally both a subtitles and a group of buttons, and an image. It also shows bread crumbs where needed, supporting the implementation of the index pattern.

* **TimelineSection.vue** is the section which shows a list of TimelineComponents.

####Singletons
* **TheChat.vue** is implemented in the default layout and allow the user to interact with a multimodal chat bot.
* **TheFooter.vue** is the footer of the website. It is implemented in the default layout and wrapps the AppMenu and the SocialMenu
* **TheHeader.vue** is the header of the website. It is implemented in the default layout and wraps the AppMenu.

<!-- TEAM -->

## Team

<!-- TODO: remove stuff before going public -->

The team that developed this project is called `FratusOrlandoSpagnuolo` and is composed by:

-   [Lorenzo Fratus](https://github.com/lorenzofratus) - 10619073 - lorenzo1.fratus@mail.polimi.it
-   [Simone Orlando](https://github.com/simoneorlando97) - 10530758 - simone.orlando@mail.polimi.it
-   [Cristian Carmine Spagnuolo](https://github.com/cris96spa) - 10745353 - cristiancarmine.spagnuolo@mail.polimi.it

<!-- GETTING STARTED -->
<!-- ## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/lorenzofratus/SecureNetworkRebrand.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ``` -->

<!-- USAGE EXAMPLES -->
<!-- ## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_ -->

<!-- LICENSE -->

## License

Distributed under the [GNU GPLv3 License](LICENSE).

<!-- CONTACT -->
<!-- ## Contact

<div align="center">

  [![Website](https://img.shields.io/badge/-Website-black.svg?style=for-the-badge&logo=html5&colorB=555)](https://www.lorenzofratus.it/)
  [![Email](https://img.shields.io/badge/-Email-black.svg?style=for-the-badge&logo=gmail&colorB=555)](mailto:info@lorenzofratus.it)
  [![LinkedIn](https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555)](https://www.linkedin.com/in/lorenzo-fratus/)

  Project Link: [https://github.com/lorenzofratus/SecureNetworkRebrand](https://github.com/lorenzofratus/SecureNetworkRebrand)
</div> -->
