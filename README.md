# Frontend Mentor - Interactive rating component

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Solution URL: [https://github.com/Holgermueller/interactive-rating-compnent](https://github.com/Holgermueller/interactive-rating-compnent)
- Live Site URL: [https://holgermueller.github.io/interactive-rating-compnent/](https://holgermueller.github.io/interactive-rating-compnent/)

## My process

### Built with

- Semantic HTML
- CSS
- Vanilla JS

### What I learned

I learned how to use the :has() pseudo-class to not only select the previous sibling element, but to also use it to select the sibling element's child element. It took a minute to figure out how to write it, but in the end it looked like this:

```css
.rating-container:has(+ .rating-container:hover),
.rating-container:hover + .rating-container label {
}
```

### Useful resources

- [How to select the previous sibling](https://www.stefanjudis.com/snippets/how-to-select-the-previous-sibling/) - This article gave pretty thorough and detailed explanations and examples of how to use the :how() pseudo-class.

## Author

- Portfolio - [Holger Mueller](https://holgermueller.github.io/portfolio/)
- Frontend Mentor -[@Holgermueller](https://www.frontendmentor.io/profile/Holgermueller)
