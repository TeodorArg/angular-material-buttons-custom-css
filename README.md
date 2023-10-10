# AngularMaterialButtonsCustomCss

Full customization css for mat-button / Personalización completa css para mat-button

## What is this demo for?

Sometimes we need to use custom mat-buttons or/and we need to use custom styles for buttons, or we need to add another types for theme(not like primary, accent, warn)
In the latest releases of Angular Material, theming API has been reworked.
In this demo, you can see who to custom theme for mat-button, modifying typography and used mat-button as module in @ui/ (for example).

## Project structure:

src/styles.scss - main scss, used only for typography for all components, but you can put typography in src/app/ui/button/button.component.scss;
src/app/ui/button/button.component.scss - scss for buttons, here you can put you custom classes for buttons;
src/app/ui/button/\_button-theme.scss - scss for redefine angular material @mixins (only for mat-buttons);
src/app/ui/button/button.component.ts - here i put some custom propertie for <app-button></app-button> component;

## Further help

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.3.
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
