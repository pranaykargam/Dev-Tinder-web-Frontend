

# DevTinder

- Create a vite + react application
- Remove unnecessary code and create a simple Hello World app
- install tailwindcss
- install daisy UI

- Add Navbar component app.jsx
- now,create a separete component for the Navbar

- Install react-router-dom (npm install react-router-dom)
- Create BrowserRouter > Routes > Route =/Body > RouteChildren
- Create a Outlet in your Body component

- Create a Footer component
- craete a login page 

- install axios
- CORS - install cors in your backend => add middleware cors in your backend app.js: origin ,credentials.
- when you are making API call, you need to set the withCredentials: true in your axios request.

- install redux-toolkit and insatll react-redux
- create a store.js file in your src folder
- <provider/>in app.js becoz "that makes the Redux store available to your entire React app".
- createSlice file in your src folder
- add reducer to the appStore

- add redux devtools in chrome 
- Login and see if ur data is being stored in the redux store
- Navbar should should be updated as soon as user login in 
- Refacter of our code to add constants file + create a component folder.

- you should not be access to the other routers without login 
-  if the token is not present so it redirects to the login page.

- Build the /logout feature

- get the feed and add in the store
- build the userCard component

- Edit profile Feature
- Show Toast Message on save of the profile

- create a page to "see all my connections"
- create a page to "see all my connections requests"

- feature - accept/reject connection request //// pending 

- send/ignore the user card from Feed
-  signup new User


## Deployment 

- Sign up AWS
- Launch Instance 
- // this steps are followed in terminal  after {cd Download } in terminal.
ssh -i "DevTinder.pem" ubuntu@ec2-51-21-224-101.eu-north-1.compute.amazonaws.com

- Download Node.js in the terminal by adding the following commands: 
- 01. curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
- 02. nvm install 22 (this 22 verison in the node.js but we change the version acccording to the project, in my project it was 24.1.0 )
-  we can see the version  by adding node -v in the vsCode terminal.

-  Next git Clone by adding the following commands in the terminal ; 
-  01. git clone ---(paste the github backend code link here)
-  02. git clone --- (paste the github frontend code link here)
