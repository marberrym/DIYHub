# <a href="http://diyhub.fun"><strong><div align="center">DIYHub</div></a>
## <div align="center">Creations & Inspirations.</strong></div>
<div align="center">
    <img src="./markdownimgs/DIYHUBSS2.png" height="300px">
</div>

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


# <div align="center">Overview</div>
DIYHub is a react application developed by Matthew Marberry and Ian Gornall.  DIYHub was developed as a place to provide the user with creations and inspirations.  DIYHub is an environment where users can go to share new DIY projects they are working on, or draw inspiration from previously posted projects.  DIYHub is a community that focuses on collaboration between its user base - allowing users to provide feedback to one another, log their favorite projects and even collaborate with other users to build on the progress of posted projects.

# <div align="center">Technologies Used</div>
* React for front end development.
* Redux for state management.
* Node.js for back end development.
* Express for router patterns.
* PostgreSQL for database management.
* Amazon Web Services for deployment.

# <div align="center">Design Inspiration</div>
When developing DIYHub we wanted to go with a sleek and clean design with a custom built logo for our React App.  DIYHub went through many design iterations, eventually we settled on a muted yellow, grey white and blue design theme.

<div align="center"><img src="./public/images/DIYHubLogo.png" height="150px"></div>

# <div align="center">Core Features</div>
When developing DIYHub a very specific list of core features was kept in mind.  These features include but are not limited to:

## Searching Projects
Browsing and searching through posts was the most critical core feature of our project.  Without a way for the user to navigate through posts, not much else would have mattered.  From the initial home-page our user could click on one of the feature projects to be directly linked to that project, or they could click the 'Browse Posts' button.

<div align="center">
    <img src="./markdownimgs/DIYHUBSS2.png" height="150px">
    <img src="./markdownimgs/diy-browse.png" height="150px">
</div>

Once at the browse screen the user has the option to scroll through the submitted posts. Each of the cards will display the DIY project's title and expected cost in terms of time and money.  Users can then click on the desired post to learn more about the project.

<div align="center">
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

<div align="center">
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

<div align="center">
    <img src="./markdownimgs/diy-saveproject.png" height="150px">
    <img src="./markdownimgs/diy-myprojects.png" height="150px">
</div>

From the My Projects screen the user can access their saved favorite projects by category and quickly access them whenever they want.

## Project Feedback

Prior to the user being signed in - they do not have the ability to comment or vote on projects.  After they are logged in they have the ability to do both.

<div align="center">
    <img src="./markdownimgs/diy-vote.png" height="150px">
    <img src="./markdownimgs/diy-comment.png" height="150px">
</div>

Once logged in, when the user views a project they can upvote that project (or take their upvote away, no downvotes).  The user can also scroll to the bottom of the page and leave comments/feedback on the project.

## Project Submission

Once a user has logged in they also gain the ability to submit their own project.  The user can start a project by clicking 'post project' on the navbar.

DIYHub will then ask for some basic information to get started on your project, then will send you to your project management page.

<div align="center">
    <img src="./markdownimgs/diy-startproject.png" height="150px">
    <img src="./markdownimgs/diy-projectoverview.png" height="150px">
</div>

Once on the project management page the user can begin to edit their project.  All projects start with a status of unpublished and will remain private until the user decides to publish their project.  The user may now begin adding steps to their project under the steps tab.

<div align="center">
    <img src="./markdownimgs/diy-submitsteps.png" height="150px">
    <img src="./markdownimgs/diy-buttons.png" height="150px">
</div>

Any of the steps can be submitted with a user image, title and description.  At any point in time the user can choose to save their project.

Next let's take a look at finding materials for the project.  On the materials tab, a user can search Amazon for the required materials.

<div align="center">
    <img src="./markdownimgs/diy-materials.png" height="150px">
    <img src="./markdownimgs/diy-materiallist.png" height="150px">
</div>

After inputting a material name and clicking 'find material' a modal will pop up with the Amazon results best matching that description.  After choosing an item, the user then can define a quantity of that item needed.  Users can add and remove as many materials as necessary.  

The user also has a tab for collaboration which will be covered later in the README.

Once the user chooses to publish their project - it will be available for other users to see.

<div align="center">
    <img src="./markdownimgs/diy-published.png" height="150px">
    <img src="./markdownimgs/diy-amazon.png" height="150px">
</div>

The post will also be populated with a 'What You Will Need' section which will link to an automatically generated Amazon cart with the required materials.

Users are able to edit, publish and unpublish projects at will.  They can see their profile statistics under their personal profile page.

## Profile Statistics

Upon clicking on the profile link at the top of the page the user will be sent to their 'My Profile' section where they can view their profile statistics.

<div align="center">
    <img src="./markdownimgs/diy-profile.png" height="150px">
    <img src="./markdownimgs/diy-profilestats.png" height="150px">
</div>

On the My Profile page users can view their current avatar and change it with a locally uploaded image file.  Under their avatar update section they can see their profile statistics which show a log of their current creations and inspirations.

This is also where users can view new collaboration requests.

## Collaboration

Collaboration was one of the most important aspects behind the formation of DIYHub.  DIYHub wants to be a place where people can come together and work with each other to make some truly unique DIY projects.  Users who are logged in have the option of requesting to collaborate with a different user on a given project.  They can push the button to request collaboration, and upon approval they can edit the projects.

<div align="center">
    <img src="./markdownimgs/diy-collabbtn.png" height="150px">
    <img src="./markdownimgs/diy-collabrequest.png" height="150px">
</div>

After a user has requested to collaborate it is up to the owner to approve or deny the collaboration request.

<div align="center">
    <img src="./markdownimgs/diy-notification.png" height="150px">
    <img src="./markdownimgs/diy-newcollabs.png" height="150px">
    <img src="./markdownimgs/diy-approved.png" height="150px">
    <img src="./markdownimgs/diy-newcollab.png" height="150px">
</div>

After a collaborator is added to the project, they have the power to publish, unpublish and edit the project.  Only the owner has the ability to approve or remove collaborators.  Only the owner has the ability to delete the project.

# Challenges

In this project we had two main challenges:

## 1. Handling image uploads:

Working with multiple images was difficult in the steps upload.  I used Multer to handle image uploads.  Multer requires multi-part form data, so to post the project data, I had to use FormData.

When adding multiple items to FormData, I made the mistake of setting a new variable to an array, which caused a weird error where the array length was 27.  To create an array with formData, you had to loop over the variable, like so:

```javascript
this.state.materials.forEach(material => {
                formData.append('material_title', material.title);
                formData.append('material_quantity', material.quantity);
                formData.append('amazon_asin', material.amazon_asin);
            })
```
And then you have the issue of whether it was a single item appended, which results in that item stored as is, or multiple, which results in an array.

This was handled on the backend.  If the variable was a string (a single item), I changed it to an array of that one string:

```javascript
if (typeof req.body.material_title === 'string') {
      req.body.material_title = [req.body.material_title];
      req.body.material_quantity = [req.body.material_quantity];
      req.body.amazon_asin = [req.body.amazon_asin];
    }
```

Second, when dealing with step images for a project, I had two types of images.  I had images that have already been uploaded, which are strings, and images that were added or changed, which are blobs.  When I put both in the same array, Multer separated the array and I ended up with an array of files and an array of strings that did not match the step indices.  Images were overwritten on the wrong steps.

To handle this, I created an array of step_image_name's that held a placeholder 'new' for new images and a separate array, step_images, to hold the image files.

```javascript
this.state.steps.forEach(step => {
                if (typeof step.step_image_file === 'string') {
                    formData.append('step_image_name', step.step_image_file);
                } else {
                    formData.append('step_image_name', 'new');
                    formData.append('step_images', step.step_image_file);
                }
            });
```

Using this code, on the backend I was able to handle each changed or new file by looping over the step_image_name array and then appending the new filename from the step_images array if the value was 'new.'

```javascript
if (req.body.step_image_name[i] === 'new') {
        step.step_image_file = req.files.step_images[imageIndex].filename;
        imageIndex++;
      } else {
        step.step_image_file = req.body.step_image_name[i];
      }
```

When we tested the project on mobile, we found another issue with the images.  Images uploaded over phone (taken by the camera) were too large for our server's default nginx configuration.  We changed the client_max_body_size variable in the nginx config file, but then saw the need to tackle the problem of resizing these large images so they would not fill the server.

To do this, I used a node module called sharp, and wrote a middleware to resize the images received from Multer and overwrite them before serving them up to the user.  Later, I found that some images taken by phone were rotated and would not display correctly because they used EXIF to set orientation.  These could be automatically rotated to the correct position with the EXIF removed by sharp with the rotate() method.  So, in the end, the middleware looks like this:
```javascript
const sharp = require('sharp');
const fs = require('fs');

let resize = (x, y, fit) => {
  return (req, res, next) => {
    let resizeFile = (path) => {
      return sharp(path)
      .rotate()
      .resize(x, y, {fit: fit || 'outside'})
      .toBuffer()
      .then((data) => {
        fs.writeFile(path, data, err => {
          if (err) throw err;
        });
      })
    }
    if (req.file || req.files) {
      let promises = [];
      if (req.file) {
        let promise = resizeFile(req.file.path)
        promises.push(promise);
      }
      if (req.files) {
        Object.keys(req.files).forEach(key => {
          req.files[key].forEach(file => {
            let promise = resizeFile(file.path);
            promises.push(promise);
          })
        })
      }
      Promise.all(promises)
      .then(() => {
        next();
      });
    } else {
      next();
    }
  }
}
module.exports = resize;
```

The middleware can be used to resize pictures to any dimension with different fit options that I defaulted to cover.

Finally, the image preview would not display correctly with the EXIF data, so I installed and used a node module called react-exif-orientation-img, which allowed me to simply replace the image tags with the component tags provided by the module.

So that was just a portion of what challenged us with images.

## 2. Collaboration

Collaboration was a tricky aspect of DIYHub for us to deal with.  One aspect that was particularly difficult was querying our backend server/database for projects where it would include a count of the requests for collaboration so we could use these numbers as notifications.
```javascript
    else if (projectStatus === 4 || projectStatus === 5) {
        db.query(`SELECT diy_projects.id, project_title, feature_image_file, publish_status, 
        time_range, cost_range, COUNT(diy_collaborators.id) as requests
        FROM diy_projects LEFT JOIN diy_collaborators ON diy_collaborators.project_id = diy_projects.id
        WHERE diy_projects.user_id=${req.user.id} AND (diy_collaborators.collab_status=1 OR diy_collaborators.collab_status IS NULL) AND diy_projects.publish_status=${projectStatus}
        GROUP BY diy_projects.id`) 
        .then(data => {
        responseData.status = 'success'
        responseData.projectList = data;
        res.send(responseData)
        }
        ).catch(error => {
        res.send({status: 'error'})
        })
    }
```
On the front end we had to be able to discern the collaborators that got passed down from our back end.  Our backend would pass us back a list of collaborators for any given project.  The collaborators could have a collab_status of either one or two depending on whether or not they were approved by the creator of the project.  The number of collabrequests was used in various components in order to display notifications and it got to be very tricky to get the correct information from the database.
```js
let activecollabs;
let collabrequests;
    if (props.collaborators) {
        activecollabs = props.collaborators.filter(collab => collab.collab_status === 2);
        collabrequests = props.collaborators.filter(collab => collab.collab_status === 1);
    } else {
        null;
    }

return <div className="postProjectFormH">
    <div className="formVert">
        <div>
            {props.collaborators ?
                activecollabs.length > 0 ?
                    <div>This project has {activecollabs.length}
                        {activecollabs.length === 1 ?
                            <span> collaborator.</span>
                        :
                            <span> collaborators.</span>}
                    </div>
                :
                    <div>This project doesn't have any collaborators.</div>
            :
                <div>
                    This project doesn't have any collaborators.
                </div>
            } 
        </div>
        <div>
            {props.user === props.owner ?
                collabrequests.length > 0 ?
                    <div>There is {collabrequests.length}
                        {collabrequests.length === 0 ?
                            <span>
                                <span> request for collaboration.</span>
                                <CollabRequest collab={collabrequests[0]}/>
                            </span>
                        :
                            <span> 
                                <span> requests for collaboration.</span>
                                {collabrequests.map(collab => <CollabRequest collab={collab}/>)}
                            </span>}
                    </div>
                :
                    <div>There are no requests for collaboration.</div>
            :
                null
            }
        </div>
    </div>
```
Collaborators were given access to edit any projects that they were approved to edit, however we did not want a collaborator to be able to approve other collaborators or delete the project.  These were decisions that were reserved for the project creator/original owner.  This required us to test whether or not the person who was editing the project was the original owner of the project or not.  This logic was then used in multiple places throughout the project in order to discern collaborator and owner.
```javascript
    {props.owner === props.user.id ?
        <div className="deleteButtonContainer">
            <button className="submitBtn remove" onClick={event => props.deleteProject()}>Delete Project</button>
        </div>
    :
        null
    }
    <MaterialModal {...props} />

    let EditProjectSmart = connect(state => ({user: state.user}))(EditProject)
    export default EditProjectSmart;
```
In the end tackling the challenge of collaboration was difficult, yet rewarding.  It was an amazing learning experience for the team and we worked very hard to provide an amazing feature that give DIYHub the collaborative capabilities we wanted it to have.  We worked hard for the sake of the UX.


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
Create a local PostgreSQL Database, if you are on MacOS I recommend using Homebrew to install postgreSQL:

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

In a separate terminal window you can now run to run the development build of the React App.
```bash
    npm start
```
    
# Happy Coding!