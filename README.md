# Wedding Photography Website

## 
- Run live-server in 'Public' to view site
- Change language by changing 'en' to 'fi' or 'sv' in: body class="home" onload="translate('en','lng-tag')"
- (Was set to change by clicking the language in the menu, but changed to different pages for SEO)

### Suggestions
- Add your suggestions

### Large page component templates (*In templates.html*)
- Image with side text left
- Image with side text right
- Full width parallax banner
- Full width image
- Full width image with title
- Porftolio gallery (gallery + lightbox in *gallery-template.html*)
- Colorful banner with text
- Colorful banner huge text
- CTA-button banner
- Contact form (not made yet)
- Three photo banner
- information banner
- Information banner with connected values
- Pricing Cards
- Pricing Cards with connected values
- Photo Gallery with Lightbox
- Pricing cards with connected values (portrait page)

### Gallery lightbox (photoswipe)
- Import css + js
- Set gallery name(s) in head
- Resolutions for thumbnail and photos
- If thumbnails have different resolution than photo, disable zoom animations


## Photos
- Template: Portofolio gallery (Bröllop juli: 4, 8, 16, 27;
                                Wedding turkey 1: 17, 26, 39, 49;
                                Wedding turkey 2: 129e, 130, 130d, 135, 140, 142, 151)

### Homepage

- Home Banner: turkey-1 (51, 39, *17)
- Wedding: turkey-2 (142, 140, *131, )
- Portrait: winter (29, 27, 23, 19, 7, *8)
- Couple:
- Event: 

### Wedding Page

 - Full width image
 - Portfolio gallery

## Styling

### Fonts
- Header (header {font-family: 'Roboto';}
- Title
- Subtitle
- Lower Title
- Menu items
- Language switcher
- Footer text
- Footer menu
- Text (body {font-family: Arial;})
- link
    - link
    - link visited
    - link hover
    - link active

### Colors
- Text
- Background
- Header Background
- Footer Background
- link
- link header
- Link hover
- Link hover header

## To-do
- [ ] a lot
- [x] ~~change logo file name~~
- [x] ~~implement page translation script~~
- [x] ~~save the language selection for reloading the page~~ (maybe not needed)
- [x] ~~rename and clean-up css classes~~
- [x] ~~set lng-tags for home page~~
- [x] ~~add contact button link on homepage~~
- [x] ~~responsive menu -> becomes hamburger + drop down menu in smaller screensize~~
- [x] ~~select photos for the home page~~
- [x] ~~footer contents~~
- [x] ~~social links to footer~~
- [x] ~~add visible titles for photos on homepage~~
- [x] ~~add social media buttons~~
- [ ] write "about page" text
- [x] write texts for Wedding Page
- [ ] define pricing categories
- [x] create a logo
- [ ] create a color theme
- [ ] ~~replace header title with logo (can be logo+title)~~
- [ ] ~~move header title to header hero (maybe)~~
- [x] ~~create a set of templates for the wedding page~~
- [x] ~~create contact form and emailing function (not emailing but posting)~~
- [ ] global javascript function for contact button
- [ ] move contact form alerts to red warning text below the submit
- [ ] Hide header when scrolling in mobile view

### When index.html is ready:
- [x] ~~create sub pages for product categories~~
- [x] ~~create contact page~~
- [x] ~~create pricing module/page~~
- [x] ~~create portfolio modules/page~~
- [x] ~~create about page~~
- [x] ~~portfolio page: expanding gallery photos (open in a viewer when clicked)~~


### Before publishing
- [ ] add alt text for images
- [ ] edit photos in detail and color grade
- [ ] clear out unused files
- [ ] clean CSS
- [ ] clear duplicate JS
- [ ] test different browsers
- [ ] check different devices and screen sizes
- [ ] create fi and sv variants of the page

## Problems
- ~~home page photo not resizing / not responsive~~ (background-size: auto)
- jumpy menu when navigating
- ~~menu drops out of the header when resizing~~
- pontential SEO problem for translated pages (change to website.com/lang)
- ~~things bounce around in the header when changing language (maybe not a problem)~~
- ~~menu switches back and forth between icon and text when resizing (not a big issue)~~
- ~~menu pushes title & menu icon moves when clicked~~
- expanded menu empty space
- ~~mobile version: title is pushed from header (remove sticky header for mobile version)~~(minimum resolution 320px)

## 1. Purpose
- A website to advertise photography services.
- Focused on wedding photography
- Also including Portrait and Event Photography

## 2. Contents
### 2.1 Pages
- Home
- Portfolio
- Pricing
- About
- Contact

### 2.2 Menu Items
- Home (logo & title)
- wedding, couples, portraits, events)
- About
- Contact

### 2.3 Wedding Page
- Large photos
- Gallery with small images
- Some descriptions
- Pricing
- Contact & CTA

## 3. Specifications
### 3.1 Main Specifications
- Static (for now)
- Responsive
- Multilingual (en-us, se-sv, fi-fi)
- Language is detected from user settings and saved in the session
- Default language ?

### 3.2 Page Specifications
- Galleries build automatically according to amount of images (maybe later)
- Contact form requires a backend for storing messages & and automatic email forwarding
    
### 3.3 Graphics & styling
- Main brand logo (*.svg)
- Fonts and titles
- Color theme (three main colors?)


# Resources 
- [JS language switching](https://nestcode.co/en/blog/using-javascript-to-translate-your-static-website)
- [Styling Examples](https://getbootstrap.com/docs/5.3/examples/cheatsheet/)
- [CSS screen size](https://www.tutorialspoint.com/changing-layouts-based-on-screen-size-using-css)
- [::before ::after](https://css-tricks.com/almanac/selectors/a/after-and-before/)
- [Photoswipe gallery + lightbox](https://photoswipe.com/getting-started/)
- [Pricing Examples](https://getbootstrap.com/docs/5.3/examples/pricing/)
- [Bootstrap Cheatsheet](https://getbootstrap.com/docs/5.3/examples/cheatsheet/)
- [Bootstrap examples](https://getbootstrap.com/docs/5.3/examples/heroes/)
- [Markdown Cheatsheet](https://www.markdownguide.org/cheat-sheet/)
- [Firebase Database connection](https://github.com/kpDemos/simpleDatabase)

# Wedding photography site examples
- (https://www.emmasurell.se/brollopsfotograf-stockholm/)
- (https://www.ellenkivisto.com/svenska/)
- (https://fotografjennifernilsson.se/brollopsfotografering/)
- [Simple contact form example](https://lottapolviander.com/yhteystiedot)
- [Pricinf form example](https://www.hannuhakalaimage.com/valokuvaus)
- [title]()
