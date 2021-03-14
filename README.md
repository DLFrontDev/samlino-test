# samlino-test

For the HTML structure I attempted to emulate the standard html flow:
* element-container
    * element-title
    * element-body
    * element-footer

SCSS files are separated by their function, in a more developed solution they would also be contained within relevant folders.
As a rule, scss selectors should not have more than 3 levels.

For the user cards, aka profile page, I reused my previous submission for samlino, changing the use of flex to the use of grids and adding the required filtering of results according to the user role. I also tried to improve upon the feedback I was given before.

The first hurdle I faced was the use of a jwt token. Despite being provided a static token, the reference "While in this example the token is static, assume it will change with each login", I created a dummy jwt generator based on the user and role, with default properties required by the jwt format. After creating a base64 encoder for the jwt token structure, and a reader for subsequent use, I stored the token on the sessionStorage object so that it is easily accessible on the login page and is removed when the session ends.

The proposed test required a routing functionality for authenticated users. The only way I know of doing so with pure frontend js code would be using the window.location object to redirect the pages after checking for conditions.
The same approach was used with the form submit handling.
I used window.location.replace in order to prevent the pages from creating history.

All functions pertaining to element creation are separated into modules dedicated to their specific functions.
The abstraction for document.createElement was created to save lines and ease of development.

###### Regarding the requested automated tests:
I have had no experience with automated js testing, professional or otherwise.
I attempted to configure jest testing but ran into issues regarding the use of ES6 modules
Nevertheless, I tried to produce some tests according to the documentation, even though in some cases, the tests are clearly not going to work due to the structure not accounting for it
