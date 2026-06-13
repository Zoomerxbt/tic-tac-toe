# Frontend Mentor - Tic Tac Toe solution

This is a solution to the [Tic Tac Toe challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tic-tac-toe-game-Re7ZF_E2v). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size.
- See hover states for all interactive elements on the page.
- Play the game multiplayer against another person locally.

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add your GitHub repository link here]
- Live Site URL: [Add your live deployment link here]

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first responsive design workflow
- CSS Flexbox & CSS Grid
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- Vanilla JavaScript (ES6 Modules)

### What I learned

This project was an incredible milestone in learning how to transition from console-based scripting to full-scale front-end application design. My primary goals were mastering layout fluidness with Tailwind and understanding object-oriented patterns in vanilla JavaScript.

Key learning outcomes included:

1. **Decomposing a Complex Idea:** Breaking down a physical game space into computational steps—handling invalid moves first, checking for win state parameters, and rotating player structures.
2. **Separation of Concerns:** Splitting data variables from method triggers. My data-layer logic engine (`gameBoard.js` and `gameController.js`) remains completely agnostic of browser elements, enabling me to run the whole game smoothly in a console environment before a single line of layout script was even written.
3. **Decoupled Architecture with Factory Functions:** Using state encapsulation to ensure that private game states cannot be leaked or corrupted globally.



