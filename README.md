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
    <a href="https://securenetwork.herokuapp.com/">Visit Website</a>
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
        <li><a href="#backend">Backend</a></li>
        <li><a href="#fronted-components">Frontend Components</a></li>
        <li><a href="#plugins">Plugins</a></li>
        <li><a href="#chat-bot-part2">Chat Bot Part2</a></li>
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
-   [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
-   [Nuxt](https://nuxtjs.org/)
-   [PostgreSQL](https://www.postgresql.org/)

<!-- SERVER SIDE -->

### Backend

To support the frontend, an express rest api has been deveped. It has the objective of implementing several http endpoints which allow the interaction with the database. There are two main files:

-   `api.js` implements enponts
-   `db_conn.js` defines the structure of the database and initialize it by reading initialization information from another file.

<!-- CLIENT SIDE -->

### Fronted Components

The frontend has been developed as VueJS app, using the NuxtJS framework.

#### Cards

-   `PersonCard.vue` is used to show syntetized information about a person. It contains the profile picture, the name and the surname of the subject. Props: 
    - **object:** the person object whose name and surname must be displayed. 
-   `ResourceCard.vue` is used to show syntetized information about a given resource. Props: 
    - **object:** the person object whose name and surname must be displayed. 
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
-   `TimelineComponent.vue` is used to highlight how many resources, grouped by type, are available for a given year. Props: 
    - **year:** year modeled by the component.
    - **types:** array of objects, each of which contains a type and the number of elements of that type, considering the given year.
    - **path:** path passed to the embedded ButtonComponent.
-   `TitleComponent.vue` is used to add a simple title and optionally a paragraph to a more complex element. Props: 
    - **title:** title of shown by the component.
    - **text:** optional text shown by the component.

#### Menus

-   `AppMenu.vue` is used to model landmarks which are embedded both in the header and in the footer of the page. Props:
    - **lightTheme:** boolean flag to determined whether or not using the light theme.
    - **alignRight:** boolean flag to determined whether or align to right.
    - **showOnMobile:** boolean flag to determined whether or the element must be shown on mobile devices.
-   `SocialMenu.vue` is used to model social logos which are embedded in the footer of the page.

#### Sections

-   `AltSection.vue` is a section which contains a title, an optional set of paragraphs and an optional button. It is used in almost all pages to give a description of the context. Props:     
    - **title:** title of the section.
    - **paragraphs:** array of text paragraphs shown within the component. It is used this approach for graphical purposes.
    - **wrapper:** identify the name of the page that wraps the component, used to generate unique names for :key directive.
    - **containsLink:** boolen flag used to enable or disable the v-html directive, to reduce the exposure windows of the directive.
    - **button:** optional button object to be used for the instantiation of a ButtonComponent.
    - **centered:** boolen flag used to determine whether or not the text must be centered.
-   `FilterSection.vue` is a section which allow the user to filter resources by type. It contains one button component to see all the resources and one button component for each type of resource present. Props: 
     - **title:** title of the section.
     - **wrapper:** identify the name of the page that wraps the component, used to generate unique names for :key directive.
     - **buttons:** array of button objects to be used for the instantiation of at most 3 ButtonComponents.
-   `FormSection.vue` is a section which allow the user to contact the responsible of the enterprise. Props: 
    - **title:** title of the section.
    - **wrapper:** identify the name of the page that wraps the component, used to generate unique names for :key directive.
-   `GridSection.vue` is a section which allow to visualize cards of different types. It has a wide usage within the website in order to show all previews of a given collection of elements. Props: 
    - **wrapper:** identify the name of the page that wraps the component, used to generate unique names for :key directive.
    - **small:** used to set the css class of the component.
    - **title:** title of the section.
    - **child:** string used to set the :is property of the <component> element. This allow to use the same section for each type of inner component.
    - **elements:** array of element object whose preview will be displayed.
    - **type:** used to append a different label to the displayed button. Introduced to increase SEO.
    - **button:** optional button object to be used for the instantiation of a ButtonComponent. 
-   `ImageComponentsSection.vue` is a section which lists a group of ImageComponents. It can be used either to display Areas or People which have a significant role within the given context. Props: 
    - **title:** title of the component.
    - **type:** used to append a different label to the displayed button. Introduced to increase SEO.
    - **wrapper:** identify the name of the page that wraps the component, used to generate unique names for :key directive.
    - **components:** array of objects, each of which allow the initialization of a different ImageComponent.
    - **rounded:** used to denote whether or not the image should be rounded.
-   `MainSection.vue` is the first section you see in almost each page. It contains a title, optionally both a subtitles and a group of buttons, and an image. It also shows bread crumbs where needed, supporting the implementation of the index pattern. Props: 
    - **title:** title of the component.
    - **subtitle:** subtitle of the component.
    - **type:** used to append a different label to the displayed button. Introduced to increase SEO.
    - **buttons:** array of button objects to be used for the instantiation of at most 2 ButtonComponents.
    - **img:** url of the displayed image.
    - **wrapper:** identify the name of the page that wraps the component, used to generate unique names for :key directive.
    - **rounded:** used to denote whether or not the image should be rounded.
    - **showBreadcrumb:** boolean flag to determined whether or not breadcrumbs must be shown on the given page.
-   `TimelineSection.vue` is the section which shows a list of TimelineComponents. Props: 
    - **wrapper:** identify the name of the page that wraps the component, used to generate unique names for :key directive.
    - **year:** year modeled by the component.

#### Singletons

-   `TheChat.vue` is implemented in the default layout and allow the user to interact with a multimodal chat bot.
-   `TheFooter.vue` is the footer of the website. It is implemented in the default layout and wrapps the AppMenu and the SocialMenu.
-   `TheHeader.vue` is the header of the website. It is implemented in the default layout and wraps the AppMenu.

<!-- ADDITIONAL PLUGINS -->

### Plugins

#### Dotenv

Used to retrieve database credentials from the environment also in development mode. It is a best practice to retrieve such these information from the environment, rather than hardcoding them.

#### Redirect SSL

Used in order to force the usage of HTTPS protocol, rather than sending data over plain HTTP.

#### Multi Modal Chatbot Creator

Experimental framework developed by PHD students of the Hypermedia Application course to support a multi modal chatbot.

#### Store

Used both to support chatbot features and static content used in several sections in order to avoid code replication.

#### Router

VueJS plugin which allow to manage easily inter and intra page routing. In addition, we developed a customized middleware plugin to support smooth scrolling behaviour for the router.

#### Robots

Nuxt plugin that manages the creation of the robots.txt file.

### Chat Bot Implementation
To complete the Part 2 of the chat bot optional project, we followed the documentation available at [Multi Modal Chatbot Creator](https://gitlab.com/i3lab/mmcc/frontend/mmcc-vue/-/blob/master/README.md).

At the beginning, the user is asked whether he wants explore the website or he wants to contact the company.
If the user wants to explore the website, the chatbot first introduce itself, then it shows the home and the about page of the website.

If the user wants to contact the company, the chatbot asks whether the user want to fulfill a form or go to the contact page. In either case, it redirects the user to the correct page.
The configuration file used for the integration of the chatbot can be found at `./chatbot/config/chat-bot.json` and reflect the model provided by the assignment specification.

**N.B.** at the current state of the art of the provided backend of the `Multi Modal Chatbot Creator`, there is no native way of performing a loop upon reaching the end activity, even if the `next_id` field of the `end` task is set to a previous activity. Moreover, upon reaching the terminal state, the user will receive the same terminal answer for each additional message sent. We have already informed developers which will provide in the next versione a `reset` callbat to support such this behaviour. To follow the exact model provided by specification, we didn't apply any custom patch.
<!-- TEAM -->

## Team

The team that developed this project is called `FratusOrlandoSpagnuolo` and is composed by:

### [Lorenzo Fratus](https://github.com/lorenzofratus) aka **The Eyes**
> _I used my previous experience in this field to design and implement website graphics. I also helped my teammates better understand and use HTML and CSS._

Person Code: 10619073 - Email: [lorenzo1.fratus](mailto:lorenzo1.fratus@mail.polimi.it)

### [Simone Orlando](https://github.com/simoneorlando97) aka **The Hacker**
> _I worked on the creation of some components of the site expanding my knowledge of HTML and CSS and I shared my computer security skills to develop a more secure site._

Person Code: 10530758 - Email: [simone.orlando](mailto:simone.orlando@mail.polimi.it)

### [Cristian Carmine Spagnuolo](https://github.com/cris96spa) aka **The Brain**
> _I worked on the backend implementation, dealing with the database interface and the implementation of api methods. Then I used these endpoints to retrieve and display stored information._

Person Code: 10745353 - Email: [cristiancarmine.spagnuolo](mailto:cristiancarmine.spagnuolo@mail.polimi.it)

<!-- LICENSE -->

## License

Distributed under the [GNU GPLv3 License](LICENSE).
