Run Ionic App in Local:

1. Install latest nodejs from https://nodejs.org/en

2. Check installed node js version

   > node -v
   > v20.16.0

3. Install ionic cli - https://ionicframework.com/docs/intro/cli
   > npm install -g @ionic/cli

If got older version uninstall it using:

> npm uninstall -g ionic

4. check ionic version
   C:\Users\admin>ionic -v
   7.2.0

5. start ionic project for first time new project setup

> d:

-create folder you want the project to create
D:\>cd apps\ionic-project

> ionic start

-this will ask question for config , name of project , blank template , select no and go for standalone , then generate new project with dependecy

4. open visual studio code IDE , install if dont have free version
   install extensions

angular essentials
material icon theme

5)open visual studio in terminal and to run in local use this command

> ionic serve

6. now you should be access the app via http://localhost:8100

7. Deployment steps:

-Go to Netlify , sync with git and Configure Build Settings
Build Command: npm run build
Publish Directory: www

Now the app can be accessed via: https://ranjen-ionic-starter-app.netlify.app
