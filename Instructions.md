# Instructions

## Intro

The goal of this is to test your capabilities with the React framework as well as to evaluate some key development practices. You will be making two pages with some simple features. You will use MaterialUI for all the base components you will need. If you have not used it, it is ok, we will provide some hints and you can use their documentation found here: https://mui.com/material-ui/getting-started/overview/ You will also be implementing one unit test.

We are excited to see what you make! Please let us know if you have any questions.
The main portion of the project should be doable in ~2 hours. If it takes more time than that, no worries.

## Steps

1. Clone the repo
2. Read all of the instructions before starting. It will be helpful.
3. Implement the following two pages
4. Implement one test
5. Zip the project directory and email it back to us

## Pages

### Page 1 /products

The purpose of this page is to search for a product, look at it's details and then edit them. Use the `constants/products.ts` file to initialize your list of products. The page should show the products like so:

#### Desktop

![products-desktop](./designs/products-desktop.png)

The search will search on all properties of the products and filter the list down.

When you click on the edit button on the product tile, it will route you to the next page `/products/edit/<upc>`

### Page 2 /products/edit/<upc>

The purpose of this page is to edit the product details. Please make this page look like this:

#### Desktop

![edit-desktop](./designs/edit-desktop.png)

After you make changes to the product, you can click save and update the product details. Clicking save will automatically route you back to the `/products` page and you should be able to view the same product you edited and see the changes. You can also click on the cancel button which will not save anything, but will route back to the `/products` page.

### Unit test

Please create a unit test to test something you think would be valuable to test.

### Bonus

If you have some extra time or want to show off some more skills, you can do some of these additional tasks.

1. Implement responsive designs

material-ui makes it fairly easy to create responsive designs with `Grid` and `breakpoints`.

#### Products Page Mobile

![products-mobile](./designs/products-mobile.png)

#### Edit Product Page Mobile (Bonus)

![editmobile](./designs/edit-mobile.png)

2. Implement image upload on edit product page

- (You can just use local filepaths. Don't worry about uploading the images somewhere)

### Notes

- There are a few directories in this project. Please organize your code how you see fit.
- We've included a `prettier` config, so making sure `format-on-save` is set up in your editor of choice would be a good idea.
- To look at the designs in figma go [here](https://www.figma.com/file/P9GmyoEWk2O7kGM6AuKB0o/Product-Page-Concept?node-id=0%3A1&t=ILoZZFrw14ajd3TF-1)
- You do not need to implement any functionality for the "Upload new product photo" button
- For navigation, use [react-router-dom](https://reactrouter.com/en/main)

### MaterialUI hints

- for the product tile use [Card](https://mui.com/material-ui/react-card/#outlined-card)
- for icons see [here](https://mui.com/material-ui/material-icons/)
- for text inputs see [TextField](https://mui.com/material-ui/material-icons/)
- for select input see [Select](https://mui.com/material-ui/react-select/)
- for headers and text use [Typography](https://mui.com/material-ui/react-typography/)
  - Typography uses theme `variants` for its font styling. (h1, h2, body1, etc.) You can find the correct values in Figma by selecting some text, opening the `Inspect` panel on the right sidebar, and looking under the `Typography` section. (e.g. `Ag Typography/H6`) is the `h6` variant.
- for responsive layout see [Grid](https://mui.com/material-ui/react-grid/#responsive-values)
- for categories use [Chip](https://mui.com/material-ui/react-chip/)
  - The color prop on `Chip` expects a variant type like `primary`, `success`, `error`, `warning` etc. that maps to a color on the MUI theme.
    You can find the variant names in Figma under the `Inspect` panel under the `Colors` section if you select the chip elements.
    The blue and purple chips don't map to an existing variant, so you have a few options:
    1. Just use a different variant
    2. Figure out colors with the `sx` prop (Bonus\*\*)
    3. Add extra variants to the theme that match those colors. (This will require some Typescript overrides and implementing a ThemeProvider) (Super Bonus\*\*)
