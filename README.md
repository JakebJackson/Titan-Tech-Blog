# Titan Tech Blog

A web based blog that utilises sequelize to dynamically generate posts from other users onto each users web page.

## Description

This web application is designed to allow users to create and delete posts, these posts are then stored in the servers database and are dynamically generated to the webpages of all users.

## Table of Contents
    
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Testing](#testing)
- [Usage](#usage)
- [Screenshots/Video](<#screenshots--video-of-completed-challenge>)
- [License](#license)
- [Credits](#credits)
- [Questions / How to Contribute](#questions--how-to-contribute)

## User Story

```

AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions

```

## Acceptance Criteria

```
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts
```

## Testing

No self tests exist for this application

## Usage
    
Navigate to the [deployed application](https://titan-tech-blog-31e5e4d9a022.herokuapp.com/), you will be prompted to sign up. Ensure that you supply a valid email and a password of atleast 4 digits.

Once signed up and logged in you will see the dashboard, you can create a new post from here and see all posts from other users.

To delete your posts, navigate to the profile tab and you will be able to see your own posts and delete them.

## GitHub repository
The GitHub repository can be found [here.](https://github.com/JakebJackson/Titan-Tech-Blog)

## Deployment
The deployed web application can be found [here.](https://titan-tech-blog-31e5e4d9a022.herokuapp.com/)

## Screenshots / Video of Completed Challenge
![completed application](/client/src/images/DeployedTitanTech.png)

## License
This project is licensed under the MIT.
    
## Questions / How to Contribute
    
If you have any questions about the repository, feel free to open an issue and I will do my best to answer. You can veiw my other work on GitHub [Jakeb Jackson.](https://github.com/JakebJackson)

## Credits

Monash University Full Stack Coding bootcamp