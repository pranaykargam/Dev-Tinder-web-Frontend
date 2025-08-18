

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
- 01. chmod 400 DevTinder.pem
- 02. ssh -i "DevTinder.pem" ubuntu@ec2-51-21-224-101.eu-north-1.compute.amazonaws.com

- Download Node.js in the terminal by adding the following commands: 
- 01. curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
- 02. nvm install 22 (this 22 verison in the node.js but we change the version acccording to the project, in my project it was 24.1.0 )
-  we can see the version  by adding node -v in the vsCode terminal.

-  Next git Clone by adding the following commands in the terminal ; 
-  01. git clone ---(paste the github backend code link here)
-  02. git clone --- (paste the github frontend code link here)

- ls
- For Frontend
- cd (/Dev-Tinder-web-Frontend) the name which you have given in the git clone command
- npm i
- npm run build
- sudo apt update
- sudo apt install nginx
- sudo systemctl start nginx
- sudo systemctl enable nginx
- copy code from dist (build files) to  /var/www/html 
- sudo scp -r dist/* /var/www/html

- Enable port :80 of your instance in the AWS security group

- Backend

- allowed ec2 instance public IP on MongoDB Atlas.
- npm i pm2 -g
- pm2 start npm --name "DevTinder-Backend" -- start
- pm2 logs
- pm2 list, pm2 flush <name> f
- pm2 stop <name> ,  pm2 delete <name>



- Frontend - http://51.20.105.234/
- Backend -  http://51.20.105.234:3000/

Domain Name  = devtinder.com => 51.20.105.234

Frontend - devtinder.com
Backend - devtinder.com:3000 => devtinder.com/api

- sudo nano /etc/nginx/sites-available/default
-  server_name 51.20.105.234;
-  location /api/ {
        proxy_pass http://127.0.0.1:3000/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

- after this again restart the nginx server
- sudo systemctl restart nginx
- Modify BASE_URL in the frontend projects to /api
