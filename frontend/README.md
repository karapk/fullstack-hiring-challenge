# Nodecraft Fullstack Frontend Hiring Challenge

## Introduction
This repository is a basic Vue 3 & Tailwind frontend project. It's built using Vite to build and run the project.

Run `npm ci` to install dependencies.

## Development

Run `npm run dev` to start the development server. This uses `vite --host` to buid and run a dev server.

## Challenges

There are some issues with this project that need to be investigated and fixed. Each issue has many possible solutions, and we're interested in seeing how you approach them.

Must complete all of these challenges:

- [x] Fix any functional issues with the component that don’t match Vue 3 Component standards and best  pracices outline on the Vue 3 Docs.
    + fixed the mutation of props as per Vue3, props are meant to be pased down from parent component and should not be changed directly by parent. Changed line 83 to 85 whereby an event called selected is emitted with the chosen option. 
    + Added type = "button" to explicitly tell browser that the button is not intended for form submission and improved accesability. 

- [x] Fix the dropdown menu from remaining open always after a hero selection is made.
    + Dropdown menu now closes when a hero selection is made.  

- [ ] Ensure all hero stats equal a sum of `20` plus the current amount of bonus. This total should never be above `25` with the bonus included.

- [x] Add keyboard controls for the drop down hero select button and menu item to be accessible
    + Added keyboard controls of space to open the drop down, escape to close it, arrow keys up and down to navigate and enter to select a hero.

- [x] Fix the image so it matches the rounding of its container and doesn’t change width/height when it changes
    + Added rounded as a class on img to match container rounding
    + Added object-fit: cover to ensure it maintains aspect ratio

Please complete at least 2 of these additional challenges:

- [x] Implement a "clear hero" feature after a hero selection is made, to return to the default `null` state.
    + implemented new button to clear hero on pressing. styled using tailwind.

- [x] Fix the style so the Selection button doesn’t break line and takes up empty space from the Bonus Button. The fix should not allow the text to overflow into sibling elements
- [x] Make the box centered on the page using just TailwindCSS and a css flex-based solution.
 -used h-screen to ensure the body took up the whole screen then centered the body with flex items-center and justify-center
