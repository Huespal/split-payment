# Split Payment 

Split Payment is a widget to provide e-commerce shops (merchants) with a flexible payment method so their customers (shoppers) can purchase goods by paying in instalments. It connects with external APIs to display the current payment options and details, and to register user interaction.

## Instructions

This is a React widget build using Vite for development and Rollup for production.

To run this widget as a local application execute the following command on a terminal in the project's root:

```bash
npm run dev
```

You can open [http://localhost:3000](http://localhost:3000) with a browser to see the result.

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

To integrate with the widget to an external site it is required to follow this steps: 

1. Add the `split-playment.js` file to the project's root.

2. Add the following script to the entry point html file:

```javascript
<script src="split-payment.js"></script>
```

3. Add a container div where the widget is required to be rendered.
The container must include: 
- A 'split-payment' id.
- A 'data-price' attribute with the price amount to be splited as a value.
The amount should contain 2 decimals without decimal separator.
Example: 399,99 should be included as 39999.
         500 should be included as 50000.

```javascript
<div id="split-payment" data-price="39999"></script>
```

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

An authorization layer should be included to restrict the widget use only to external applications with the required credentials. This can be done in the widget code with a client key given by the external application.

The widget can be themed thanks to the theme selection offered by the widget. This allows the developer user to make it more appealing to the site’s design the widget will be in. Another approach may be to allow the developer user to style the widget partially or entirely from the external site, but that is not what this widget is meant for, as it has its own proprietary design system and branding which is intended not to be modified.   

Finally, just an aside note about server side rendering (SSR) which has been taken into consideration. SSR is a technique that allows an application to render HTML before the client code is executed. Although it offers big gains in performance and user experience, being this a widget which will load after the external page is rendered, the technique is not worth it in this case because it will not be possible to take advantage of the gains.     

## Tech Stack

To develop the user interfaces, it has been decided to use [ReactJS library](https://react.dev/) a fast and reliable Javascript library constantly improved that allows us to work on the client side with good performance and a nice developer experience. It is important to notice that this library is also capable of functionalities such as SSR within server components or thanks to Next.js integration, also routing and more features that will not be necessary for the widget, so lighter libraries such as [Preact](https://preactjs.com/) have been considered. It will be used React to demonstrate that the widget can be developed with this technology and still not to overly impact the bundle size or the performance.

The stack is completed by:
- [TypeScript](https://www.typescriptlang.org/): for basic code scripting.
- [Styled Components](https://styled-components.com/): to handle CSS in JS.
- [Vite](https://vite.dev/) + [Rollup](https://rollupjs.org/): to build the widget for development and production mode.
- [Vitest](https://vitest.dev/): for testing (with [testing-library](https://testing-library.com/)).

It has been decided to use TypeScript over vanilla Javascript to get advantage of types which allows for a faster and stricter developer experience, and it is the recommended React preference.

It has been decided to use Vite to build the widget in development mode and take advantage of hot reloading for a selfish reason, as other options such as [Webpack](https://webpack.js.org/) will also allow us to build the application perfectly. Rollup is used for building in production mode because it allows us to only build the strictly necessary files in a comfortable configuration. This build configuration works well with just a little setup, is fast and it gives a nice developer experience.

It has been decided to use Styled Components over [Tailwind CSS](https://tailwindcss.com/) or similar, or just plain CSS because it works flawlessly within React and helps to avoid CSS class conflicts with the external application thanks to its automatic unique class names generation.

[Eslint](https://eslint.org/) is included to allow developers to lint the code in development mode.

Finally, it has been decided to use Vitest with Testing library for testing instead of Jest because it needs less configuration, it is faster and, specifically within testing-library, allows us to test React components in a practical way.


## Project Organization

TODO


## Development process

TODO


## Final thoughts

As it has been explained before in the approach considerations section, this particular project has the handicap to require to work on a different project which technology may be unknown. There are multiple ways to get a 'piece of code' to be working on another site. Micro-frontends can be a reasonable solution that allows us to work in parallel. An installable npm package may allow a project within a build system to add new functionality, among others, but applying these solutions may not have a small impact on the final bundle size, they may not allow the best compatibility, or they may be difficult to apply. So the solution offered has been reduced to the most compatible, an already bundled script easy to add to any type of site, from a static one to a project of large complexity. It ensures it is contained in a reduced bundled size, at least as small as possible using React. It is very compatible, the only requirements are JavaScript enabled on the site and React and CSS3 browser-related requirements. And it is easy to install, following 3 simple steps that any developer can carry out in a short time.
