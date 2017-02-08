![App screenshot](https://cloud.githubusercontent.com/assets/7386478/22713902/40a76c46-ed58-11e6-8658-340ca18d9788.png)

### Description

Subwaze is a mobile first responsive application to give mass transit commuters the ability to have more accurate information before and during their daily commute.

### Problem Statement

How does one avoid timely and costly delays while using mass transit?

### Solution

Develop an App to monitor in real time MTA train alert status as well as current rider comments. The current rider comments act as verification of MTA provided information with the potential to amplify the informational 'truthiness' of the MTA.

### Installation

None, to use it click [here](https://subwaze.herokuapp.com/)

### Project Workflow

Using an Agile development process, Team RUN D.E.V. worked collaboratively as well as individually to accomplish a rapid prototype solution in five days. We planned as a team, distributed tasks, and self organized to effectively achieve distictly seperate tasks. Branched git development was paramount to limiting technical conflicts and arriving at a finished product that would be many times faster than solo project time frame. Each morning, we met and discussed our team and individual goals, problems we may run in to, and solutions to previous difficulties.

Zenhub was big improvement form Trello. Not only did it intregrate seemlessly with our workflow, but it also eliminated the manual task of migrating cards to the done column based on commits.

Mobile first design was critical to the app's success. As a team we spent considerable time iterating over the design and refining along the way. Each step, was influenced by what we learned collaborating with UX/UI students. We broke down all the components that are essential to how a user travels through our app, how the consider the interface, and what value th app provides to the user on eaach page.

As we closed in on the final product, our design and functional choices were proven to be well planned and executed. The team dynamic was relaxed and low stress throughout the entire development cycle.


### WireFrames

Below are the original drafts of what we envisioned. The final result is extremely close to our  concept. In addition, the flow of the wireframes helped facilitate the development process by visually seeing what we have to create and guide us through what how it should generally look.

![wireframe one](https://cloud.githubusercontent.com/assets/7386478/22714017/b13ce756-ed58-11e6-956d-ef975f957864.png)

![wireframe two](https://cloud.githubusercontent.com/assets/7386478/22714056/ddbafe6c-ed58-11e6-8fd5-cf4c864031aa.png)

![wireframe three](https://cloud.githubusercontent.com/assets/7386478/22714113/13bd3606-ed59-11e6-906e-d7fb28b5507a.png)


### Database

Our database consisted of four tables, Users, Trains, Comments, and Favorites. The joins were between Users and Trains to combine on Favorites and we had to join Users, Trains, and Comments. The database has all the CRUD functionality per project 3 spec.

![data-structure view](https://cloud.githubusercontent.com/assets/7386478/22714647/808836f8-ed5b-11e6-83a6-07a0b3ebf3f7.png)

The entity relationship diagram describes the different relationship types our tables had to each other.

![ERD](https://cloud.githubusercontent.com/assets/7386478/22714162/4df9e198-ed59-11e6-981d-9d510458d819.png)



#### To view the ZenHub board [click](https://github.com/StevenGallo/subwaze/issues/46#boards?repos=80777130)

### Technologies Used
    Authentication Schemes
    Agile Development
    SCRUM
    Javascript/Es6
    Materialize
    Sequelize
    PostgreSQl
    Express
    EJS
    jQuery
    Responsive Design
    SCSS
    git locally
    GitHub remotely

![data-structure view](https://cloud.githubusercontent.com/assets/7386478/22714647/808836f8-ed5b-11e6-83a6-07a0b3ebf3f7.png)

### Challenges

This was a big win in understanding how to structure an application from a data access perspective. Conditional rendering was one of the biggest challenges. We wanted our app to be 'usable' for both logged in users and non-logged in users. We ended up creating different routes to the same page, passing in different information. We also wanted certain elements to be rendered, or not rendered, based on status of the user having favorites and/or only being able to edit or delete their own comments. Navigating EJS was another challenge. We we're brand new to using EJS as a view engine. Got off to a rocky start but ended up finding it very helpful with our conditional rendering. And GIT, ohhh git, how I both love, and hate you're marvelous face! Merging our branches was definitely one of our biggest challenges. We often found ourselves editing the same files, and ended up running into a lot of merge conflicts.


This app will be re-developed from the ground up to have a better user experience, utilize a third party api, and add much more functionality and styling.

