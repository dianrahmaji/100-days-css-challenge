# Template

## What I Learn

#### Box Shadow
```css
/* Keyword values */
box-shadow: none;

/* offset-x | offset-y | color */
box-shadow: 60px -16px teal;

/* offset-x | offset-y | blur-radius | color */
box-shadow: 10px 5px 5px black;

/* offset-x | offset-y | blur-radius | spread-radius | color */
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

/* inset | offset-x | offset-y | color */
box-shadow: inset 5em 1em gold;

/* Any number of shadows, separated by commas */
box-shadow: 3px 3px red, -1em 0 0.4em olive;
```
CSS box shadow has following properties:
1. offset-x, specifies the horizontal distance from the element. Positive values place the shadow to the right of the elements.
2. offset-y, specifies the vertical distance from the element. Positive values places the shadow to the bottom of the elements.
3. blur-radius, specifies lightness, blurness and spread area of the shadow. The bigger the value, the bigger and lighter the shadow. Negative value not allowed.
4. spread-radius, specifies the size of the shadow. Positive values will make the shadow bigger (but not blurred), vice versa. If not specified (default value is 0) the shadow will have the same size as the element.
5. color, specifies the color of the shaodow.
6. inset, the presence of this value will move the shadow inside the element, behind the content.
## References

#### Box Shadow
1. [CSS box-shadow property](https://www.w3schools.com/cssref/css3_pr_box-shadow.asp) from W3Schools
2. [box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) from MDN

#### Position
1. [position](https://developer.mozilla.org/en-US/docs/Web/CSS/position) from MDN

#### Transform
1. [transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform) from MDN
