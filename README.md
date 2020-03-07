# BLT
Budgeting life tool

Tool for some friends to better organise their

The Tech

React
Redux
Express
Knex
Sqlite3


User Stories
As a user I should be able to...

Set my pay frequency (pay period)
See my essential spending for the pay period
See my total saving for the pay period 
Divide up savings into different groupings 
    - Holidays
    - Wearables 
    - Self spending 
    - Long term saving 
See the total over the course of a year for each spending category 
See the total over the course of a year for each saving category 

Local state (Client Side) 



Reducers (Client Side)
name	purpose

skillLevel (this is local state, not reducer)	Changes the CSS of the meetups posting


Actions (Client Side)
type	data	purpose
GET_ACTIVITY	activity	For accessing the chosen activity (inside activity data includes difficulty, locations and meetup posts)


API (Client - Server)
Method	Endpoint	Protected	Usage	Response
Get	/api/v1/activities	No	Get activities	Array of activity objects
Get	/api/v1/activities/:id	No	Get chosen activities corresponding locations	object
Get	/api/v1/posts/:id	No	get posts for a certain location using location id	object
POST	/api/v1/posts	Yes (if we do it)	post a post to the database	null
POST	/api/v1/posts/rsvp	Yes (if we do it)	set rsvp for a post	null
...etc for extra stretch

DB (Server Side) -
There should be three tables for MVP. You may want/need to add additional columns or tables.

Activities
Column Name	Data Type	Purpose
id	Integer	Unique identifier for each activity
name	String	Name of the activity
Symbol	String	The image Source for the symbol representing the activity
colors	string	A way to define color in an activity i.e buttons
photo	string	backround image if it looks not shit
Locations
Column Name	Data Type	Purpose
id	Integer	Unique identifier for each location
name	String	Name of each location
activity_id	integer	foreign key of activities
Posts
Column Name	Data Type	Purpose
id	Integer	Unique identifier for each post
user_name	string	Used for login
notes	string	content of the post
date	integer	displayed for date of post
time	string	displayed for time of post (will be called on expiry)
tracks	string	post tracks
skill	string	post skill level of post
location_id	integer	Foreign key for locations
Stretch
Profiles
Column Name	Data Type	Purpose
id	Integer	Unique identifier for each post
user_name	string	Used for login
name	string	first name
image_url	string	users profile picture
about	string	about user section
favourite_activity	string	Users fav activity
user_id	integer	user_id to link to posts
email	string	email address for send-grid
Setup
Run the following commands in your terminal:

npm install
npx knex migrate:latest
npx knex seed:run
mv .env.example .env
To run in development:

npm run dev
To run in production:

npm start
Git - Managing Branches
Pull down dev branch - git pull origin dev

Checkout to feature branch - git checkout feature_branch

git add

git commit -m "commmit message"

git checkout dev

.git pull origin dev

..git checkout feature_branch

...git pull origin dev

fix all conflicts - check localhost still works*

git add

git commit

git push origin feature_branch

create pull request in Github

notify git master

Heroku!!!
Creating your app
Create your app with heroku create [name]

You can check that this was successful by running heroku apps to view a list of your apps

Adding postgres
Add postgresql (hobby dev) to your app at https://dashboard.heroku.com/apps/[APP NAME HERE]/resources

Check that pg has been added by running heroku addons to ensure the postgresql db is on your app

Deploying!
I have created several npm scripts that will be useful for deploying your app to heroku easily.

To push your local master branch to your heroku app:

npm run h:deploy
Run heroku migrations:

npm run h:migrate
Run heroku seeds:

npm run h:seed
If ever you need to rollback, you can also:

npm run h:rollback
Ta-Da!
Your app should be deployed!
