# Storefront VHS - React
Sample storefront management website for selling VHS tapes. Created using React (JavaScript) and Firebase. Users can login using Firebase Authentication and create, read, update and delete products using Realtime Database. Uses React Router for routing, styled-components, and react-toastify. Deployed using Netlify.

Current build has login authorization with protected routes & 404 page. Users can add new products and see a live preview of the product card, with upload feedback on submission. Update and Delete functionality will be added soon.

## [Link to live website](https://vhs-store-react.netlify.app/)
User: user@vhs.com
Password: 123456

![Screenshot of user login](/src/assets/images/login-screenshot.png)

![Screenshot of dashboard](/src/assets/images/dashboard-screenshot.png)

![Screenshot of add product](/src/assets/images/add-screenshot.png)

## Running the app
If you want to run this on your local machine and play with your own create, update and delete functionality, you will need your own Firebase Realtime Database, which you can set up for free [here.](https://firebase.google.com/)

Create a new Realtime Database, go to your firebase project settings, and copy your firebaseConfig keys into a new .env file at the root of the project. Run 'npm install' in your project to install dependencies, and the app should launch properly on 'npm start'. You can now add your own products!

## Additional Resources
* [Styled Components](https://styled-components.com/)
* [React Router](https://reactrouter.com/)
* [React Toastify](https://www.npmjs.com/package/react-toastify)
* [Firebase Get Started](https://cloud.google.com/firestore/docs/client/get-firebase)
* [Netlify](https://www.netlify.com/)