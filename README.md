# Project structure
* /dentalfront 

react app with production ready docker file setup

application served by nginx

``docker-compose.yml`` 

# Development

## Available Scripts

In the project directory /dentalfront, you can run:

### `yarn`
Install dependencies 

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn story`

Runs the story book for components development
Open [http://localhost:9001](http://localhost:9001) 

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

# Production
### Front end
`cd dentalfront`

`docker build . -t react-docker`

`docker push *** ToDo`

## Deployment
ToDo with Docker

## Docker tips
Build image from folder

`docker build . -t react-docker   `

List all running containers 

`docker ps`

List all images

`docker images -a`

Test production build on a local machine 

`docker run -p 8000:80 react-docker`

Delete all local images

`docker system prune -a`