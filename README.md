

# ScreenCloud ATM

Live: https://screencloud-atm.herokuapp.com/

  (Allow Heroku 5-10 seconds to spin up)


## Getting started

This is a project ready for deployment to Heroku. After cloning the project, run **npm install** in the **root folder** as well as the **client folder**.

Start your frontend (localhost:3000) in **client folder**:

    npm run start


Open [http://localhost:3000](http://localhost:3000/) in your browser to access the app.


</br>


## Testing

Use Cypress for E2E testing - to start, in root dictionary, run:

    npm test

  When Cypress client opens, click atm.spec.js to run test.

## Tech stack

Node.js, Express, Heroku, React, Material-UI

</br>

## Comments

- User & ATM bills are stored in local storage (I assume no one would have access to it for an ATM) - for web services I would use sessions or tokens.

- I left console logs for ATM bill balance and user state for testing purposes.

- Interface is designed for an ATM with touchscreen and external keypad

- Even though the app is responsive to a degree, I haven’t optimised for different types of smartphones yet