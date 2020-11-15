# Hidden Message App ![GitHub version doc](https://img.shields.io/badge/Version-1.0.0-red) ![GitHub last commit](https://img.shields.io/github/last-commit/dcc5235/Hidden_Message?style=flat-square) 

### Checkout the Live Version of the [Project](http://hidden-message-seven.vercel.app/)!

**HTML5, Materialize CSS, JavaScript**

A responsive, application which utilizes JS to allow users to send an encoded message in the form of a URL to other users. Users can then open the URL and reveal the decoded message, then send their own encoded message.

![](img1.gif)

---

## Installation & Technologies
- Download the full package, select the Code button, choose the "Download ZIP" option.
- Stylsheet CDN link [here](https://cdnjs.com/libraries/materialize). 
  - Follow [Materialize CSS documentation](https://materializecss.com/about.html) for further information on classes.
- To deploy application, sign up for free cloud platform at [Vercel](https://vercel.com/docs). If you do not deploy the app, you can only use it on your local machine.
  - Requires Node.js to run command line to deploy onto Vercel: install [Node.js](https://nodejs.org/en/), current version.
  - Once Node.js is installed, run command <code>npx now</code> and follow instructions in command line to link project to Vercel.

---

## Form Submission and Encoding
- Remove browser default submission to non-existent backend server.
  ![](https://bit.ly/38L6j5u)
- Base64 encoding - ASCII character codes converted to base64 character codes.
  - Keep in mind that the ASCII character codes represent characters with a decimal value 0 to 127 while Base64 character codes represent up decimal value from 0 to 63.
  - Learn more about ASCII characters [here](http://www.asciitable.com/).
  - Learn more about Base64 characters [here](https://www.pixelstech.net/article/images/ff848710.Base64_Mapping(en-us,MSDN_.10)_.png).
- Generate URL after user types a message utilizing <code>window.location</code>.

    <code>`${window.location}#${encrypted}`</code>
- Decode message and display message from hash property.

    <code>const { hash } = window.location;</code>

---

## Contributors

Dany Chheang dany.chheang@gmail.com
