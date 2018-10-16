# <a href="http://diyhub.fun"><strong><div style="text-align: center;">DIYHub</div></a>
## <div style="text-align: center;">Creations & Inspirations.</strong></div>
<div style="text-align: center;"><img src="./markdownimgs/DIYHUBSS2.png" height="200px"></div>

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


They can also start projects and save their progress before publishing their project.

All projects start in an unpublished state - they will remain unpublished until the user chooses to publish their project.  Once start








 



