export const resetStyles = `
*,
*::before,
*::after {
  box-sizing: border-box;
}

ul,
ol {
  padding: 0;
  list-style: none;
}

body,
h1,
h2,
h3,
h4,
h5, 
h6,
p,
ul,
ol,
li,
figure,
figcaption,
blockquote,
dl,
dd, 
button {
  margin: 0;
  padding: 0;
}

body {
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  width: 100%;

}

a {
  text-decoration: none;
}


img {
  max-width: 100%;
  display: block;
}


article > * + * {
  margin-top: 1em;
}


input,
button,
textarea,
select {
  font: inherit;
}


@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;
