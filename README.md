# Mo Skool

Mo Skool is a frontend learning platform, offering fun and straightforward path to mastering frontend React development.

Although this project is still under *heavy development*, my vision for the end product is crystal clear. I see this as an excellent opportunity to add value to our community and help others enjoyably grow into frontend development.

## What Can I learn?

### Front-End
- HTML
- JavaScript
- CSS in JS
- React
- JSX

# Current Tech
The app has a React frontend and paired with a Firebase cloud backend


## Can I contribute to this project? 🤩
I am excited to collaborate with other frontend engineers to get this up and going. I am also enthusiastic about the opportunity to share React knowledge with new contributors.

## Colors

https://coolors.co/424b54-157a6e-41d3bd-f5d547-fffff2


## File Structure

```
build/
    ... Static files ready to be deployed
public/
    ... Public asset
src/
   App/
        index.js/
        ... lazy loading and routing between pages happens here and theme provider to pass theme props to all pages
        theme.js
        ... Theme object lives here
    components/
        CodeEditor/
            ... This is the MVP main feature of this thing, it shows the code editor with the live preview of your code, it's used in question page and this is a wrapper component 
                LiveProviderCore/
                    ... wrapped component contains the dependency I am using to display the code editor with live preview
        EmailSignInForm/
            ... Contains the email Sign in form            
        EmailSignUpForm/
            ... Contains the email Sign up form   
        Firebase/
            Context
                ... Creating context for all firebase stuff 
            firebase
                ... Class contains everything about firebase from auth to databases. There are plenty of examples on there and more to do and refactor. We use Firebase collection and realtime-db (no-sql db), authentication, storage and so on
            index
                ... Exporting class firebase to pass as props to pages that need the methods in it
        Footer
            ... Coming soon footer for all pages
        Messages
            ... Crazy container for testing purposes and it's not 100%. This is the feature request page, it handles everything about messages and storing displaying them
        Navigation/
            ... main nav for the whole app, Children components can be abstracted into shared components for the whole app, main navigation will be redesigned later
            MoAvatar
                ... User Avatar on the far right of the nav bar, it's used to display the avatar from social sign in and show a menu for pages in the app
            MoDrawer
                ... Should be ued on Mobile for the menu, but It's not currently in use
            MeMenu
                ... Simple drop down menu, used to display levels of the questions
            NavigationAuth
                ... Displays a menu list of all pages with authentication
            NavigationNonAuth
                ... Displays a menu list of all pages that are available for all users
        NotFound
            ... Page that is displayed when you hit an unknown route
        PasswordChange
            ... Change password form
        PasswordForgot
            ... Password reset form
        Session/
            context
                ... Create auth context
            withAuthentication
                ... HOC that provides props for authUser, and deals with authentication, used by wrapping it around containers                 
            withAuthorization
                ... HOC that protects pages based on a condition, if the user is authenticated then the user is authorized, used by wrapping it around container
            withEmailVerification
                ... HOC used for email verification, used by wrapping it around container
            shared/
                ... All shared components live here, they are mostly presentational
            SignOut/
                ... Sign out button and logic
            SignUpLink
                ... Link to sign up
            SocialSignIn
                ... Sign in with social media
            Users/
                ... Stuff about users
    constants/
        roles
        routes
    containers/
        Account
            ... User Account page
        Admin/
            AdminNav
                ... Sub nav for admin page
            Questions
                ... Questions container, wraps QuestionsTable 
                QuestionsTable
                    ... An interactive table to add delete edit and manage questions that show up to the user
            Home
                ... Crazy page that loads Messages component (Feature request)
            Landing
                ... Landing page you see when first visiting moskool.com
            Playground
                ... This only loads CodeEditor component and lets the user play with the code editor and view live code
            Question
                ... A question is like a post, an object that has a question, an answer, label, desc. This component is  
                Currently being used to display the code editor, Confetti effect and snackbar. It has logic to handle winning and gaining points.
            Questions
                ... A collection of questions, or a list of questions container.
                You see this before accessing each question.
                It first load the configs for the type of questions you access ( EX: easy, medium or pro questions) then based on that it will load the list of questions from configs

                Route name -> configs -> questions

                configs basically help manage these questions or a middle ware kinda
            SignIn
                ...
            SignUp
                ... 
        stories
            ... stories about all components coming soon
        utils
            ... shared utils, currently it has a theme for the liveEditor
        index.js
            ... Wrap App.js with firebase
```