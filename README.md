# <a href="http://diyhub.fun"><strong><div style="text-align: center;">DIYHub</div></a>
## <div style="text-align: center;">Creations & Inspirations.</strong></div>
<div style="text-align: center;"><img src="./markdownimgs/DIYHUBSS2.png" height="300px"></div>

### Contributors:
* Matthew Marberry 
    * [Github](https://www.github.com/marberrym) 
    * [marberrym@gmail.com](mailto:marberrym@gmail.com)
* Ian Gornall
    * [Github](#https://www.github.com/iangornall)
    * [ian.gornall@gmail.com](mailto:ian.gornall@gmail.com)
* Nathan Reese

### Table of Contents:
* [Overview](#overview)
* [Technologies Used](#technologies-used)
* [Design Inspiration](#design-inspiration)
* [Core Features:](#core-features)
    * [Searching Projects](##searching-projects)
    * [Registration](##registration)
    * [Saving Favorites](##saving-favorites)
    * [Project Feedback](##project-feedback)
    * [Project Submission](##project-submission)
    * [Profile Statistics](##profile-statistics)
    * [Collaboration](##collaboration)
* [Challenges](#challenges)
* [Dependencies](#dependencies)
* [Bootstrapping](#bootstrapping)


# <div style="text-align: center">Overview</div>
DIYHub is a react application developed by Matthew Marberry and Ian Gornall.  DIYHub was developed as a place to provide the user with creations and inspirations.  DIYHub is an environment where users can go to share new DIY projects they are working on, or draw inspiration from previously posted projects.  DIYHub is a community that focuses on collaboration between its userbase - allowing users to provide feedback to one another, log their favorite projects and even collaborate with other users to build on the progress of posted projects.

# <div style="text-align: center">Technologies Used</div>
* React for front end development.
* Redux for state management.
* Node.js for back end development.
* Express for router patterns.
* PostgreSQL for database managment.
* Amazon Web Services for deployment.

# <div style="text-align: center">Design Inspiration</div>

# <div style="text-align: center">Core Features</div>
When developing DIYHub a very specific list of core features was kept in mind.  These features include but are not limited to:

## Searching Projects
Browsing and searching through posts was the most critical core feature of our project.  Without a way for the user to navigate through posts, not much else would have mattered.  From the initial home-page our user could click on one of the feature projects to be directly linked to that project, or they could click the 'Browse Posts' button.

<div style="text-align:center">
    <img src="./markdownimgs/DIYHUBSS2.png" height="150px">
    <img src="./markdownimgs/diy-browse.png" height="150px">
</div>

Once at the browse screen the user has the option to scroll through the submited posts. Each of the cards will display the DIY project's title and expected cost in terms of time and money.  Users can then click on the desired post to learn more about the project.

<div style="text-align: center">
    <img src="./markdownimgs/diy-project.png" height="150px">
    <img src="./markdownimgs/diy-steps.png" height="150px">
</div>

From the main project screen the user can learn more about the project on several different levels:
* The materials required to complete the project.
    * Each project's Amazon link will send the user to a pre-built Amazon cart.
* The steps necessary to complete the project. 
* View project upvotes.
* View project comments.
* Share the project with their social network.

## Registration

Without registration a user has limited functionality on DIYHub.  Once a user registers and signs in they have access to all of the features that make DIYHub fun.

Once the user clicks 'sign up' they will be forwarded to a signup form where they can input their information and upload an avatar if they would like to.  They are also able to see a preview of what their avatar will look like.

<div style="text-align: center">
    <img src="./markdownimgs/diy-register.png" height="150px">
    <img src="./markdownimgs/diy-loggedin.png" height="150px">
</div>

When the user registers and logs in they have the ability to vote on projects, save projects, submit comments, submit projects and collaborate with other DIYHub users.

## Saving Favorites

An important part of DIYHub is allowing the users to draw inspiration from the submissions of other users.  DIYHub wanted to provide a way for users to save or 'bookmark' projects that they liked and wanted to track their progress on.

From the main page of any specific post, if the user is logged in they will see a cloud icon on the bottom of the screen.  Once they hover over the cloud they will have the option to save the project into one of three categories:
<strong>
1. To do
2. In Progress
3. Completed
</strong>

<div style="text-align: center">
    <img src="./markdownimgs/diy-saveproject.png" height="150px">
    <img src="./markdownimgs/diy-myprojects.png" height="150px">
</div>

From the My Projects screen the user can access their saved favorite projects by category and quickly access them whenever they want.

## Project Feedback

Prior to the user being signed in - they do not have the ability to comment or vote on projects.  After they are logged in they have the ability to do both.

<div style="text-align: center">
    <img src="./markdownimgs/diy-vote.png" height="150px">
    <img src="./markdownimgs/diy-comment.png" height="150px">
</div>

Once logged in, when the user views a project they can upvote that project (or take their upvote away, no downvotes).  The user can also scroll to the bottom of the page and leave comments/feedback on the project.

## Project Submission

Once a user has logged in they also gain the ability to submit their own project.  The user can start a project by clicking 'post project' on the navbar.

DIYHub will then ask for some basic information to get started on your project, then will send you to your project management page.

<div style="text-align: center">
    <img src="./markdownimgs/diy-startproject.png" height="150px">
    <img src="./markdownimgs/diy-projectoverview.png" height="150px">
</div>

Once on the project managment page the user can begin to edit their project.  All projects start with a status of unpublished and will remain private until the user decides to publish their project.  The user may now begin adding steps to their project under the steps tab.

<div style="text-align: center">
    <img src="./markdownimgs/diy-submitsteps.png" height="150px">
    <img src="./markdownimgs/diy-buttons.png" height="150px">
</div>

Any of the steps can be submitted with a user image, title and description.  At any point in time the user can choose to save their project.

Next let's take a look at finding materials for the project.  On the materials tab, a user can search Amazon for the required materials.

<div style="text-align: center">
    <img src="./markdownimgs/diy-materials.png" height="150px">
    <img src="./markdownimgs/diy-materiallist.png" height="150px">
</div>

After inputing a material name and clicking 'find material' a modal will pop up with the Amazon results best matching that description.  After choosing an item, the user then can define a quantity of that item needed.  Users can add and remove as many materials as neccessary.  

The user also has a tab for collaboration which will be covered later in the README.

Once the user chooses to publish their project - it will be available for other users to see.

<div style="text-align: center">
    <img src="./markdownimgs/diy-published.png" height="150px">
    <img src="./markdownimgs/diy-amazon.png" height="150px">
</div>

The post will also be populated with a 'What You Will Need' section which will link to an automatically generated Amazon cart with the required materials.

Users are able to edit, publish and unpublish projects at will.  They can see their profile statistics under their personal profile page.

## Profile Statistics

Upon clicking on the profile link at the top of the page the user will be sent to their 'My Profile' section where they can view their profile statistics.

<div style="text-align: center">
    <img src="./markdownimgs/diy-profile.png" height="150px">
    <img src="./markdownimgs/diy-profilestats.png" height="150px">
</div>

On the My Profile page users can view their current avatar and change it with a locally uploaded image file.  Under their avatar update section they can see their profile statistics which show a log of their current creations and inspirations.

This is also where users can view new collaboration requests.

## Collaboration

Collaboration was one of the most important aspects behind the formation of DIYHub.  DIYHub wants to be a place where people can come together and work with each other to make some truly unique DIY projects.  Users who are logged in have the option of requesting to collaborate with a different user on a given project.  They can push the button to request collaboration, and upon approval they can edit the projects.

<div style="text-align: center">
    <img src="./markdownimgs/diy-collabbtn.png" height="150px">
    <img src="./markdownimgs/diy-collabrequest.png" height="150px">
</div>

After a user has requested to collaborate it is up to the owner to approve or deny the collaboration request.

<div style="text-align: center">
    <img src="./markdownimgs/diy-notification.png" height="150px">
    <img src="./markdownimgs/diy-newcollabs.png" height="150px">
    <img src="./markdownimgs/diy-approved.png" height="150px">
    <img src="./markdownimgs/diy-newcollab.png" height="150px">
</div>

After a collaborator is added to the project, they have the power to publish, unpublish and edit the project.  Only the owner has the ability to approve or remove collaborators.  Only the owner has the ability to delete the project.

# Challenges


# Bootstrapping

Would you like to experiment or try this project yourself?  Awesome, we can tell you how.  FYI for this project to run on your machine properly, you will need an Amazon API key.

First run a git clone on this repository.
```bash
git clone https://github.com/marberrym/DIYHub.git
```
Inside your cloned repo run 
```bash
npm install
``` 
Create a local PostgreSQL Database, if you are on MacOS I reccomend using Homebrew to install postgreSQL:

* First start by installing postgresql
```bash
    brew install postgresql
```

* Next create a database called diyhub 
```bash
    psql createdb diyhub
```

* Run schema.sql & seeddata.sql from the src folder
```bash
    psql -d diyhub -f schema.sql
    psql -d diyhub -f seeddata.sql
```

Create a <nr>```env.sh```<nr> file which will live in the main folder.
```sh 
    export JWTSECRET="Your personal encryption key"
    export DB_USER="Your computer username"
    export url="http://localhost:5000/"
    export AWS_ACCESS_KEY_ID="Your Amazon Access Key"
    export AWS_SECRET="Your AWS Secret"
```
In your SRC folder create a filed called globalVars.js, inside paste:
```javascript
    const url = "http://localhost:5000"
    export default url;
```

In your main repo you can now run this code in order to start your server:
```bash
    node server.js
```

In a seprate terminal window you can now run to run the development build of the React App.
```bash
    npm start
```
    













 



