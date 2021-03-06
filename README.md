# TestAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
#   p a g i n g - n g 8 - e x a m p l e 
 
 

Improvements: 
  - Server side pagination.
  - Better component design to promote reusability and composition
    (Use of custom directives).
  - Give the user the capacity to modify the results per page, not done in the
    current implementation.
  - Augment the properties where the search is applied, can be easily remapped.
  - Make the app mobile friendly.
  - Layout can be improved if some clarity around the data is provided,
    like type of information to show when no data is available or max amount 
    of chars per line.
  - Add unit testing for the logic and snapshots for the layout.
  - Remove some of the boiler plate create by angular cli.
  - Fix search wont redirect to first page.

Trade offs: 
  - Fast prototyping using 3rd party lib like ng-pagination, hard to restyle or 
    modify base functionality.
  - UX design can be improved if a designer is involved.
  - Opt out of using a lib like material ui since the req were small,
    renouncing a good way of making the feel of the app more uniform.
  - Did not use any css preprocessing, styling and UX can be improve when
    using something like less or sass.
  - Generic way of structuring the app's folders can be reorganized to meet diff
    patterns current functionality is very small to make a large architecture choice.
  - use of a full framework (angular) might delay delivery when task is 
    very complex in term of user interactions or data displaying (not the case here, just saying).