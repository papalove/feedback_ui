# App Logic

Components from big to small:
App.js -> FeedbackList -> FeedbackItem -> Card

1. App.js imports FeedbackData sets it to feedback var w/ useState.
2. App.js imports FeedbackList comp creating feedback prop in it set to feedback var.
3. ./FeedbackList catches feedback prop (in app.js) as its comp param.
4. ./FeedbackList adds .map to feedback param to map through each feedback object to return each unique data object as "item"
5. ./FeedbackList passes item as prop into Feedback Item element to be imported by FeedbackItem component
6. ./FeedbackItem catches item as param to return item.rating and item.text divs within Card element
7. ./Card component catches ({children}) param to return styled div with {children)
8. ./Card component usese Reverse param to create card varient Reverse
9. ./FeedbackStats components catches ({feedback}) param from parent App.JS that passed feedback prop set to feedback data into FeedbackStats component
10. ./FeedbackForm comp creates a component level "text" state for input element with an imported custom Button comp. Both are nested in Card comp.
11. ./FeedbackForm sets a validation check for text input to activate submit button and control message if requirement is not met.
12. ./FeedbackForm uses RatingSelector comp to: 1) manage rating state
13. ./RatingSelector sets up rating inputs and styles with event handler function
14. ./App.js imported uuid to auto generate unique id's to addFeeedback function (using useState in same function) to add "newFeedback" item to "Feedback" data array list
15. created pages folder for components that render whole pages.
16. in pages/AboutPage import Link from react-router-dom for instant (no refresh) loading
17. added FA icon in app.js w/ Link imoprt to link to AboutPage
18. added NavLink to app.js to style link w/ global css
19. BUG: Post component create for adding useParams to route to unique posts but it's not working
20. BUG: import Navigate in Post to redirect
21. in Post component using useNavagite to redirect within function
    Note: currently we've done propdrilling by creating a deleteFeedback function in App.js where data is imported, set to var, and passed into FeedbackList along w/ handleDelete prop. Both are passed as params into FeedbackItem that uses FeedbackItem to loop and render data, as well as call onClick function handleDelete.
22. context/Feedback.Context.js- created context and provider to pass data through compenent tree w/out having to pass props manually from app.js at every level
23. in app.js using useContext to pass data via importing FeedbackContext.jsx and wrapping all components (including FeedbackList and FeedbackStats) in FeedbackProvider
24. moved functions from app.js into FeedbackContext comp. using useContext, namely addFeedback, deleteFeedback, and editFeedback
25. editFeedback is triggered by onClick in button using FAEdit icon in feedbackItem comp
26. when onClick (in feedbackItem.jsx) fires {() => editFeedback(item.id)} passed through FeedbakcContext modifies setFeedbackEdit (using useState)
27. in FeedbackContext comp created feedbackEditContainer to hold state updates. It works with editFeedback func. in same folder to setFeedbackEditContainer
28. imported feedbackEditContainer into FeedbackForm to update values w/ useEffect
29. imported feedbackEditContainer into FeedbackSelector to update setSelected (selector UI) w/ useEffect
30. created updateFeedback function in FeedbackContext and imported it into FeedbackForm as a func in a conditional statement, if feedback id matches feedback item id submitted we update array via setFeedback
31. add db.json file for backend NOTE: json-server eliminates need for uuid "npm run server"
32. added npm concurrently to run front end "npm start" and backend "npm run server" simultaneously using
33. added isLoading useState in FeedbackContext and imported isLoading into FeedbackList
34. created Spinner component and brought it into FeedbackList
35. added Proxy to localhost:5000 for json.db

packages:
npm i react-icons //FontAwesome
https://www.npmjs.com/package/uuid
npm i json-server //json server
npm i concurrently
//https://www.npmjs.com/package/concurrently/

<!-- in package.json add script: "server": "json-server --watch db.json --port 5000" /as it defaults to 3000 and react is running on 3000 -->

# CLI

npm run conc -- runs npm start dev and npm run server

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

To serve it you can use an npm serve package:
npm i -g serve // then run:
serve -s build

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
