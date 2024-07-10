# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

This section is to recap over some of my major learnings while working through this project. Writing these out and providing code samples of areas I want to highlight is a great way to reinforce my own knowledge.

```html
<picture class="image">
    <source media="(max-width:375px)" srcset="./images/image-product-mobile.jpg" alt = "mobile ">
    <img src="./images/image-product-desktop.jpg" alt="desktop">
</picture>
```
```css
:root {
    --Dark_cyan: hsl(158, 36%, 37%);
    --Cream: hsl(30, 38%, 92%);
    --Very_dark_blue: hsl(212, 21%, 14%);
    --Dark_grayish_blue: hsl(228, 12%, 48%);
    --White: hsl(0, 0%, 100%);
}
```
## Author

- Frontend Mentor - [@nishakp3005](https://www.frontendmentor.io/profile/nishakp3005)
- Github - [@nishakp3005](https://github.com/nishakp3005)
