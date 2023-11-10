<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h1 align="center">Secure Network Rebrand</h1>

  <p align="center">
    Project developed for the final exam of the course named <em>Hypermedia Applications</em> held by Professor Franca Garzotto at <em>Politecnico di Milano</em>.
    <br />
    <a href="https://github.com/lorenzofratus/SecureNetworkRebrand"><strong>Explore the docs »</strong></a>
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
        <li><a href="#backend">Backend</a></li>
        <li><a href="#fronted-components">Frontend Components</a></li>
        <li><a href="#plugins">Plugins</a></li>
      </ul>
    </li>
    <li><a href="#team">Team</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<!-- ![Home Page Screenshot](../assets/screen-1.png?raw=true) -->

This project has been developed as final assignment for the _Hypermedia Applications_ course held by Professor Franca Garzotto at _Politecnico di Milano_.

### Built With

-   [Node.js](https://nodejs.org/)
-   [Vue.js](https://vuejs.org)
-   [Nuxt.js](https://nuxtjs.org/)
-   [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
-   [PostgreSQL](https://www.postgresql.org/)

<!-- SERVER SIDE -->

### Backend

To support the frontend, an Express.js server with REST APIs has been developed. It has the objective of implementing several http endpoints which allow the interaction with the database. There are two main files:

-   `api.js` implements enpoints
-   `db_conn.js` defines the structure of the database and initializes it by reading configurations from another file.

<!-- CLIENT SIDE -->

### Fronted Components

The frontend has been developed as VueJS app, using the NuxtJS framework.

#### Cards

-   `PersonCard.vue` is used to show syntetized information about a person. It contains the profile picture, the name and the surname of the subject. Props: 
    - **object:** the person object whose name and surname must be displayed. 
-   `ArticleCard.vue` is used to show syntetized information about a given article. Props: 
    - **object:** the article object whose title and icon must be displayed. 
-   `ServiceCard.vue` is used to show syntetized information about a given service. Props: 
    - **object:** the service object whose preview must be displayed.
    - **type:** used to append a different label to the displayed button. Introduced to increase SEO.
-   `ThreatCard.vue` is used to show information about a possible Threat. Props: 
    -  **object:** the static threat object whose preview must be displayed.

#### Items

-   `ButtonComponent.vue` is a button which can be used both for navigation and as a click event generator. Props: 
    - **object:** the person object whose name and surname must be displayed.
    -  **btnPath:** path used by the embedded nuxt link.
    - **btnClass:** used to pass the class of the button.
    - **btnText:** used to display the text of the button.
-   `ImageComponent.vue` is made up of an image, a text description and a ButtonComponent; it is used to show syntetized information about a person or an area. Props: 
    - **title:** title of the component.
    - **tag:** used to highlight specific properties of the given element.
    - **type:** used to append a different label to the displayed button. Introduced to increase SEO.
    - **text:** text displayed within the component.
    - **btnPath:** path passed to the embedded ButtonComponent.
    - **img:** url of the displayed image.
    - **wrapper:** identify the name of the page that wraps the component, used to generate unique names for :key directive.
    - **rounded:** used to denote whether or not the image should be rounded.
-   `InputComponent.vue` is used to model an input or a textarea for a form. Props: 
    - **label:** label of the form field.
    - **placeholder:** placeholder of the form field.
    - **name:** identify the name of form field.
    - **type:** used set the type of the nested input element.
-   `TimelineComponent.vue` is used to highlight how many articles, grouped by type, are available for a given year. Props: 
    - **year:** year modeled by the component.
    - **types:** array of objects, each of which contains a type and the number of elements of that type, considering the given year.
    - **path:** path passed to the embedded ButtonComponent.
-   `TitleComponent.vue` is used to add a simple title and optionally a paragraph to a more complex element. Props: 
    - **title:** title of shown by the component.
    - **text:** optional text shown by the component.

#### Menus

-   `AppMenu.vue` is used to model landmarks which are embedded both in the header and in the footer of the page. Props:
    - **lightTheme:** boolean flag to determined whether or not using the light theme.
    - **alignRight:** boolean flag to determined whether or not align to right.
    - **showOnMobile:** boolean flag to determined whether or not the element must be shown on mobile devices.
-   `SocialMenu.vue` is used to model social logos which are embedded in the footer of the page.

#### Sections

-   `AltSection.vue` is a section which contains a title, an optional set of paragraphs and an optional button. It is used in almost all pages to give a description of the context. Props:     
    - **title:** title of the section.
    - **paragraphs:** array of text paragraphs shown within the component. It is used this approach for graphical purposes.
    - **wrapper:** identify the name of the page that wraps the component, used to generate unique names for :key directive.
    - **containsLink:** boolen flag used to enable or disable the v-html directive, to reduce the exposure windows of the directive.
    - **button:** optional button object to be used for the instantiation of a ButtonComponent.
    - **centered:** boolen flag used to determine whether or not the text must be centered.
-   `FilterSection.vue` is a section which allow the user to filter articles by type. It contains one button component to see all the articles and one button component for each type of article present. Props: 
     - **title:** title of the section.
     - **wrapper:** identify the name of the page that wraps the component, used to generate unique names for :key directive.
     - **buttons:** array of button objects to be used for the instantiation of at most 3 ButtonComponents.
-   `FormSection.vue` is a section which allow the user to contact the responsible of the enterprise. Props: 
    - **title:** title of the section.
    - **wrapper:** identify the name of the page that wraps the component, used to generate unique names for :key directive.
-   `GridSection.vue` is a section which allow to visualize cards of different types. It has a wide usage within the website in order to show all previews of a given collection of elements. Props: 
    - **wrapper:** identify the name of the page that wraps the component, used to generate unique names for :key directive.
    - **small:** used to modify the minimum width of the columns of the grid.
    - **wide:** used to modify the maximum width of the grid.
    - **title:** title of the section.
    - **child:** string used to set the :is property of the <component> element. This allow to use the same section for each type of inner component.
    - **elements:** array of element object whose preview will be displayed.
    - **type:** used to append a different label to the displayed button. Introduced to increase SEO.
    - **button:** optional button object to be used for the instantiation of a ButtonComponent. 
    - **alt:** used to define if the section must have the default or the alternative style.
-   `ImageComponentsSection.vue` is a section which lists a group of ImageComponents. It can be used either to display Areas or People which have a significant role within the given context. Props: 
    - **title:** title of the component.
    - **type:** used to append a different label to the displayed button. Introduced to increase SEO.
    - **wrapper:** identify the name of the page that wraps the component, used to generate unique names for :key directive.
    - **components:** array of objects, each of which allow the initialization of a different ImageComponent.
    - **rounded:** used to denote whether or not the image should be rounded.
    - **alt:** used to define if the section must have the default or the alternative style.
-   `MainSection.vue` is the first section you see in almost each page. It contains a title, optionally both a subtitles and a group of buttons, and an image. It also shows bread crumbs where needed, supporting the implementation of the index pattern. Props: 
    - **title:** title of the component.
    - **subtitle:** subtitle of the component.
    - **type:** used to append a different label to the displayed button. Introduced to increase SEO.
    - **buttons:** array of button objects to be used for the instantiation of at most 2 ButtonComponents.
    - **img:** url of the displayed image.
    - **wrapper:** identify the name of the page that wraps the component, used to generate unique names for :key directive.
    - **rounded:** used to denote whether or not the image should be rounded.
-   `TimelineSection.vue` is the section which shows a list of TimelineComponents. Props: 
    - **wrapper:** identify the name of the page that wraps the component, used to generate unique names for :key directive.
    - **year:** year modeled by the component.

#### Singletons

-   `TheChat.vue` is implemented in the default layout and allow the user to interact with a multimodal chat bot.
-   `TheFooter.vue` is the footer of the website. It is implemented in the default layout and wraps the AppMenu and the SocialMenu.
-   `TheHeader.vue` is the header of the website. It is implemented in the default layout and wraps the AppMenu.

#### Pages
  
-   `index.vue` is the home page of the website. Components: 
     - *MainSection*
     - *AltSection*
     - *GridSection*
-   `contacts.vue` is contact page. Components: 
     - *MainSection*
     - *FormSection*
     - *TitleComponent*
-   `about.vue` is the about page. Components: 
     - *MainSection*
     - *AltSection*
     - *GridSection*
-   `team/index.vue` is the page of the whole Team. Components: 
     - *MainSection*
     - *AltSection*
     - *GridSection*
     - *ImageComponentsSection*
-   `team/_id.vue` is the page for a single Person. Components: 
     - *MainSection*
     - *AltSection*
     - *GridSection*
     - *ImageComponentsSection*
-   `areas/index.vue` is the introductory page of all Areas. Components:
     - *MainSection*
     - *AltSection*
     - *ImageComponentsSection*
-   `areas/_id.vue` is the page for a single Area. Components: 
     - *MainSection*
     - *AltSection*
     - *GridSection*
     - *ImageComponentsSection*
-   `articles/index.vue` is the introductory page all Articles grouped and counted by year and type. Components: 
     - *MainSection*
     - *TimelineSection*
-   `articles/_year/index.vue` is the introductory page all Articles by year the given year. Components: 
     - *MainSection*
     - *FilterSection*
     - *GridSection*
-   `articles/_year/_id.vue` is the introductory page of the given article. Components: 
     - *MainSection*
     - *AltSection*
-   `services/index.vue` is the introductory page all Services. Components: 
     - *MainSection*
     - *AltSection*
     - *GridSection*
-   `services/categories/index.vue` is the introductory page all Service Categories. Components: 
     - *MainSection*
     - *AltSection*
     - *GridSection*
-   `services/categories/_catid/index.vue` is the page of the given Category, which contains all Services that belong to it. Components: 
     - *MainSection*
     - *AltSection*
     - *GridSection*
-   `services/categories/_catid/_id.vue` is the page of the given Service. Components: 
     - *MainSection*
     - *AltSection*
     - *GridSection*
     - *ImageComponentsSection*
<!-- ADDITIONAL PLUGINS -->

### Plugins

- `Dotenv:` used to retrieve database credentials from the environment also in development mode. It is a best practice to retrieve such these information from the environment, rather than hardcoding them.

- `Redirect SSL:` used in order to force the usage of HTTPS protocol, rather than sending data over plain HTTP.

- `Multi Modal Chatbot Creator:` experimental framework developed by PHD students of the Hypermedia Application course to support a multi modal chatbot.

- `Store:` used both to support chatbot features and static content used in several sections in order to avoid replication of data.

- `Router:` VueJS plugin which allow to manage easily inter and intra page routing. In addition, we developed a customized middleware plugin to support smooth scrolling behaviour for the router.

- `Robots:` Nuxt plugin that manages the creation of the robots.txt file.

<!-- BEST PRACTICES -->

## Best Practices

In this section we will briefly outline how our usage of the framework was compliant to the best practices for our specific domain.

Besides following the teachings of our tutors, we used `ESLint` to help us comply with specific rules while writing the code.
Some examples of best practises that were imposed by this linter are:
- The usage of shorthands (`:` instead of `v-bind`, `@` instead of `v-on`, ...).
- The usage of proper casing (_kebab-case_ in the template and _CamelCase_ in the JavaScript).
- The correct usage of `v-` directives (unique `:key` with `v-for`, no `v-if` with `v-for`, ...).

Moreover, we preferred to implement many small components rather than few bulky ones.  
This allowed us to obtain code that is much easier to read (therefore to maintain) and to reuse in multiple parts of the website, usually only changing the props values.

As for the usage of `NuxtJS`, in different occasions we exploited the lifecycle hooks that it offers to perform actions on the data or the UI.  
We also built different stores to keep static data that needs to be easily modifiable (`menu.js` contains the lists of landmarks and of social links) or that is used in multiple pages (`threats.js`).  
Again, we took advantage of the routing mechanism of `NuxtJS` to implement a middleware that intercepts hash links (e.g., `/contacts#email`) and smoothly scrolls to the pointed section without displaying the hash in the URL bar.

Regarding SEO and accesibility, we made sure that every page has a unique title, that the whole website is navigable using the _Tab_ key and that every input has a label to allow screen readers to correctly detect it.  
We also used _WAVE_ and _Google Lighthouse_ to analyze the website.  
This lead to some adjustments, the most relevant of which is a slight change in the main color (from ![#00a6fb](https://via.placeholder.com/15/00a6fb/000000?text=+) `#00a6fb` to ![#007cbd](https://via.placeholder.com/15/007cbd/000000?text=+) `#007cbd`) in order to satisfy contrast requirements.

Finally, we introduced an external plugin to force the communication using _HTTPS_ rather than plain _HTTP_ as prescribed by the latest security guidelines.

<!-- TEAM -->

## Team

The team that developed this project is composed by:

### [Lorenzo Fratus](https://github.com/lorenzofratus) aka **The Eyes**
> _I used my previous experience in this field to design and implement website graphics. I also helped my teammates better understand and use HTML and CSS._

Email: [lorenzo1.fratus](mailto:lorenzo1.fratus@mail.polimi.it)

### [Simone Orlando](https://github.com/simoneorlando97) aka **The Hacker**
> _I worked on the creation of some components of the site expanding my knowledge of HTML and CSS and I shared my computer security skills to develop a more secure site._

Email: [simone.orlando](mailto:simone.orlando@mail.polimi.it)

### [Cristian C. Spagnuolo](https://github.com/cris96spa) aka **The Brains**
> _I worked on the backend implementation, dealing with the database interface and the implementation of API methods. Then I used these endpoints to retrieve and display stored information._

Email: [cristiancarmine.spagnuolo](mailto:cristiancarmine.spagnuolo@mail.polimi.it)

<!-- LICENSE -->

## License

Distributed under the [GNU GPLv3 License](LICENSE).
