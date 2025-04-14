# Split Payment 

Split Payment is a widget to provide e-commerce shops (merchants) with a flexible payment method so their customers (shoppers) can purchase goods by paying in instalments. It connects with an external API to display the current payment options and details, and to register user interaction.

## Instructions

This is a Preact widget build using Vite for development and Rollup for production.

To run this widget as a local application execute the following command on a terminal in the project's root:

```bash
npm run dev
```

You can open [http://localhost:3000](http://localhost:3000) with a browser to see the result.

(Some data is requested from an external API. The data will not load if the API is not up.)

Tests can be run by executing the following commands on a terminal in the project's root:

```bash
npm run test // runs tests and keeps watching changes
npm run test:coverage // runs tests, keeps watching and displays coverage
```

There are also these commands available:

```bash
npm run lint // lints the code
npm run build // builds the widget
npm run build:prod // builds the widget in production mode
```

After a successfull build, to integrate with the widget to an external site it is required to follow this steps: 

1. Add the `split-playment.js` file to the project's root.

2. Add the following script to the entry point html file:

```javascript
<script src="split-payment.js"></script>
```

3. Add a container div where the widget is required to be rendered.

The container must include: 
- A **split-payment** id.
- A **data-price** attribute with the price amount to be splited as a value.
The amount should contain 2 decimals without decimal separator.
Example: 399,99 should be included as 39999.
         450,00 should be included as 45000.

It may optionally include:
- A **data-theme** attribute with the theme name (default: 'base').
The current available themes are: 
  - `base`: containing styles in light colours.
  - `dark`: containing styles in dark colours.

- A **data-lang** attribute with the language (default: 'en').
The current available languages are: 
  - `en`: containing texts in English language.
  - `ca`: containing texts in Catalan language.

```javascript
<div
  id="split-payment"
  data-price="39999"
  data-theme="dark" // Optional. Default: 'base'.
  data-lang="ca" // Optional. Default: 'en'.
></div>
```


The widget is automatically intialised after these steps.

4. (Optional) Update the widget.

The widget exposes a `SplitPayment` object globally containing update methods.
The initial data sent to the widget can be updated with the following methods:

- `SplitPayment.updatePrice`: Allows to update the base price for the widget to calculate the instalments. The price should be a number containing 2 decimals without the decimal separator. Example:

```javascript
SplitPayment.updatePrice(45000); // 450,00
```

- `SplitPayment.updateTheme`: Allows to update the theme for the widget to display in different styles. The theme should be one of the available: 'base' and 'dark'.
Example:

```javascript
SplitPayment.updateTheme('dark');
```

- `SplitPayment.updateLanguage`: Allows to update the widget's text language. The available languages are English (en) and Catalan (ca).
Example:

```javascript
SplitPayment.updateLanguage('ca'); // Catalan
```

These methods ara available to be used from the external site's Javascript code after the widget initialization.

## Approach considerations

The approach followed to generate this widget is explained here with the decisions and assumptions made, so it is easy to understand the thought process behind it.
The Split Payment is an interactive widget that can be added to an external site to allow to split payments. It is not an application, so there are initial aspects that need to be considered at the outset:

- **Bundle size**: 
    The widget should be as lightweight as possible. It must be ensured that the final bundle does not include files that are unnecessary for its productive operation.

- **Compatibility**:
    The widget should be compatible with any external site, regardless of the technology used by the site. The widget must require some basics (Javascript enabled, minimum browser version, etc.), but that’s all. There must be no conflict between the widget's development and that of the external website. This includes CSS classes, JS events, etc.

- **Ease of installation**:
    The widget should be easy to add to the external site. The easier it is to add the widget to the external page, the more viable it will be, and the more people will use it. It may also be important that it can be installed in different ways, to accommodate different development experiences.

Although some or all of those concerns can apply to an application too, they are taking on more importance for a widget, which is a piece of code that will be working together with, or at the same place as other unknown tech. It needs to be reliable.

The widget can be themed thanks to the theme selection offered. This allows the developer user to make it more appealing to the site’s design the widget will be in. Another approach may be to allow the developer user to style the widget partially or entirely from the external site, but that is not what this widget is meant for, as it has its own proprietary design system and branding which is intended not to be modified.   

Finally, just an aside note about server side rendering (SSR) which has been taken into consideration. SSR is a technique that allows an application to render HTML before the client code is executed. Although it offers big gains in performance and user experience, being this a widget which will load after the external page is rendered, the technique is not worth it in this case because it will not be possible to take advantage of the gains.

## Tech Stack

To develop the user interfaces, it has been decided to use [Preact](https://preactjs.com/) a very lightweight, fast and reliable Javascript library constantly improved that allows us to work on the client side with good performance and a nice developer experience. It is important to notice that this library is limited on its capabilities, but enough for this project requirements. [ReactJS library](https://react.dev/) is a library also capable of functionalities such as SSR within server components or thanks to Next.js integration, also routing and some more features that will not be necessary for the widget. Although React will allow us to develop the project, Preact is considered over it to reduce the bundle size.

The stack is completed by:
- [TypeScript](https://www.typescriptlang.org/): for basic code scripting.
- [Tanstack (React) Query](https://tanstack.com/query): to manage asyncronous (API connection) state.
- [Styled Components](https://styled-components.com/): to handle CSS in JS.
- [React i18next](https://react.i18next.com/): to manage text translations.
- [Vite](https://vite.dev/) + [Rollup](https://rollupjs.org/): to build the widget for development and production mode.
- [Vitest](https://vitest.dev/): for testing (with [testing-library](https://testing-library.com/)).

It has been decided to use TypeScript over vanilla Javascript to get advantage of types which allows for a faster and stricter developer experience, and it is the recommended Preact preference.

It has been decided to use React Query to manage API connections due to its ability to avoid unnecessary requests to the API within the state management under the hood, and the ease of use thanks to React hooks compatibility. [Redux Toolkit Query](https://redux-toolkit.js.org/rtk-query/overview) may have been a valid alternative, among others.

It has been decided to use React i18next to manage text translations because it is a very complete and reliable tool. It requires almost no configuration and is ready to work in a Preact project. Not only that, but it can handle a lot of text without spoiling the performance, and it can externalize texts to an online service, so the project can be translated asynchronously from an external resource. This last feature has not been used in this project because of its reduced scope.

It has been decided to use Styled Components over [Tailwind CSS](https://tailwindcss.com/) or similar, or just plain CSS because it works flawlessly within Preact and helps to avoid CSS class conflicts with the external application thanks to its automatic unique class names generation.

It has been decided to use Vite to build the widget in development mode and take advantage of hot reloading for a selfish reason, as other options such as [Webpack](https://webpack.js.org/) will also allow us to build the application perfectly. Rollup is used for building in production mode because it allows us to only build the strictly necessary files in a comfortable configuration. This build configuration works well with just a little setup, is fast and it gives a nice developer experience.

[Eslint](https://eslint.org/) is included to allow developers to lint the code in development mode.

Finally, it has been decided to use Vitest with Testing library for testing instead of Jest because it needs less configuration, it is faster and, specifically within testing-library, allows us to test Preact components in a practical way.


## Project Organization

This project has two purposes at once. To include the widget's main code and to allow proper widget local development. The project organization is as follows:

- `src (except 'widget' folder)`: It contains basic code to allow launching the widget locally so it can be developed pleasantly. It includes two files:
   - main.tsx: Preact main entry point where the application is initialized. 
   - App.tsx: Main (and only) application component that renders the widget root component and adds basic wrapping and the widget's properties set-up.

- `src/widget`: It contains the widget's main code, which is detailed below. The following folders are included in this path.

- `components`: It contains the application components. Components are separated into 'shared' components and widget ones:

    - Shared components: The shared components are project-agnostic, isolated basic components ready to fit in different situations. They can be extracted into a separate repository and work as a component's library to be used by different projects.

    - Widget components: The components outside the 'shared' folder are specific to the widget and are not ready to work in other projects. The Provider component includes Styles and React Query providers. The Root component is the principal widget's component, which renders the SplitPayment main component into the Providers. The SplitPayment components contain the main widget's logic, and they make use of the shared components.

  The components are created using Preact (index.tsx file) and styled using Styled-Components (styles.ts). Shared components include testing (component.test.tsx) files using testing-library and Vitest.


- `core`: It contains shared helpers, hooks, constants, assets and fundamental files to handle API, state, i18n, tests and theming configuration.


- `domain`: It contains a folder for each (backend) domain.
    Each folder is named the same as the backend domain and includes a domain specific file configuring the API requests, an optional helpers file and a TypeScript types file.

The main widget entry point is the index.tsx file in the `src/widget` folder's root. It mounts the widget in the external site's specified container and is responsible for collecting the information and carrying out the necessary validation checks.
Files outside `src` folder are Vite, Vitest, Typescript, EsLint and Rollup configuration files, as well as the local development main HTML index file, the package.json file and the project's Readme file, yep, this exact file you are reading :) .


## Development process

To develop the widget, the work has been separated in different tasks.

1. Setup the project and build system.
  - Setup project structure
  - Setup development build system (with Vite)
  - Setup production build system (with Rollup)
  - Setup external site widget's communication and validation

2. Setup API connection
  - Setup API base connection (with React Query)
  - Add the credentialAgreement domain API connection
  - Add the event domain API connection

3. Add styles system and theming
  - Setup styles system (with Styled Components)
  - Add theming, including base theme and a dark variation.

4. Add translations
  - Setup translation system (with React i18next)
  - Add translation texts in multiple languages.

5. Add shared components
  - Add BoxFlex component
  - Add FieldSelect component
  - Add Modal component

6. Add widget components
  - Add SplitPayment Select component
  - Add SplitPayment Modal component
  - Add SplitPayment component

7. Review
  - A final step to review the widget is working properly and do necessary refactor. 

Testing is added for each component and validation helpers.
Documentation is added from the first task and continuously updated until the project's end.
This project has been developed using an IDE with IA, Cursor. No conversations had taken place. Predictive results (tab) did help to speed up the development, and it has been a more enriching and pleasant development experience than using a regular IDE.

## Final thoughts

As it has been explained before in the approach considerations section, this particular project has the handicap to require to work on a different project which technology may be unknown. There are multiple ways to get a 'piece of code' to be working on another site. Micro-frontends can be a reasonable solution that allows us to work in parallel. An installable npm package may allow a project within a build system to add new functionality, among others, but applying these solutions may not have a small impact on the final bundle size, they may not allow the best compatibility, or they may be difficult to apply. So the solution offered has been reduced to the most compatible, an already bundled script easy to add to any type of site, from a static one to a project of large complexity. It ensures it is contained in a reduced bundled size. It is very compatible, the only requirements are JavaScript enabled on the site and Preact and CSS3 browser-related requirements. And it is easy to install, following 3 simple steps that any developer can carry out in a short time.

An authorization layer may be included to restrict the widget use only to external applications with the required credentials. The credentials can be validated in the widget code with a client key given by the external application.

The separation between shared components and widget components is done expressly to emulate working with a design system. The shared components may be hosted in a separate project or repository following a design system, and they are ready to be used by different projects. The widget components use the shared components to build components exclusive to this project and are in charge of handling the business logic.
Theming is also added to reinforce the design system methodology.

React Query automatically saves requests using the React's Context API under the hood. This is a great performance optimization, as multiple requests to the same API endpoint will return the 'cached' response, saved in the React Query's Context, instead of requesting the data to the backend again. We can easily take advantage of this in the widget when changing the product's price from the external site to an already selected one. It gives a more pleasant user experience.

The API URL used for this project should be sent as an environmental variable instead of being hardcoded into the code. This allows to be able to adapt to API URL modifications without requiring amending the project's internal code. 

To communicate between the external site and the widget, it is required to expose methods globally. In this project, this is done by attaching the widget's update methods to the global window variable. This may be unsecure because those methods can be accessed by everybody, and it is a gateway to exploit possible security holes, so a proper validation is a must.     
Another way to communicate between projects may be within an API. The external site can send requests to an external API, and the widget can listen to it. While this solution could also work, it is more complex and less compatible.

Testing is essential for a project to ensure code robustness. This project includes unit testing with Vitest and testing-library. This should be scaled up as the project grows with end-to-end or integration testing to the entire project with technologies such as Cypress or similar, which can be handled by a QA expert or a skilled enough developer.
