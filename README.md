# Font Toggler

A web component to toggle the font of elements inside it.

## Usage

### Create font stylesheet

Create a stylesheet for the fonts, with the format the same as [`fonts.css`](./fonts/fonts.css)

```css
/* ... */
@font-face {
  font-family: "Windsong";
  src: url("./1 - Handwriting/Windsong/Windsong.woff") format(woff);
}
.font--windsong {
  font-family: "Windsong" !important;
}
/* ... */
```

### Use web component

Specify the name of the stylesheet, and the time between font switches, in seconds.

```html
<script src="./font-toggler.js"></script>
<!-- ... -->
<font-toggler stylesheet="fonts.css" every_s="10">
    <p>I want this text to change!</p>
</font-toggler>
```
