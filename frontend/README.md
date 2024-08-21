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
- [ ] Add keyboard controls for the drop down hero select button and menu item to be accessible
- [ ] Fix the image so it matches the rounding of its container and doesn’t change width/height when it changes

Please complete at least 2 of these additional challenges:

- [ ] Implement a "clear hero" feature after a hero selection is made, to return to the default `null` state.
- [ ] Fix the style so the Selection button doesn’t break line and takes up empty space from the Bonus Button. The fix should not allow the text to overflow into sibling elements
- [ ] Make the box centered on the page using just TailwindCSS and a css flex-based solution.
