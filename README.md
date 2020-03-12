# BLT
Budgeting life tool

Tool for some friends to better organise their


## The Tech

We are going to need the following:

* [React]
* [Redux]
* [Express]
* [Knex ]
* [Sqlite3]



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



## Reducers (Client Side)

  | name | purpose |
  | --- | --- |
  | auth(*stretch) | Store information regarding user logins, auth status and auth errors | 
  | skillLevel (this is local state, not reducer)| Changes the CSS of the meetups posting |
  | activities| List of all the activities for the home page |
  | currentActivity | Hold current activity information |
  | Locations | Hold the list of all locations for the specific activity |
  | currentLocation | Hold current location information |
  | posts | posts and changes posts |
  | currentUser | Holds the current users info including active posts |
  | RSVP | Holds current number of attendees |
  
## Actions (Client Side)

  | type | data | purpose |
  | --- | --- | --- |
  | GET_ACTIVITY | activity | For accessing the chosen activity (inside activity data includes difficulty, locations and meetup posts)| 
  | GET_ACTIVITIES | activity | For accessing all activities to display on the homepage |
  | GET_LOCATION |  | For displaying the currentlocation |
  | SET_SKILL_LEVEL | posts | For accessing and displaying posts based on skill level   |
  | GET_POSTS | posts | For accessing the posts that having the same location id |
  | ADD_POST | posts | To Make a post and add it to posts |
  | SET_RSVP | posts | Changes the display of post referring to the number of people going |

## API (Client - Server)

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| Get | /api/v1/activities | No | Get activities | Array of activity objects |
| Get | /api/v1/activities/:id | No | Get chosen activities corresponding locations | object |
| Get | /api/v1/posts/:id | No | get posts for a certain location using location id | object |
| POST | /api/v1/posts | Yes (if we do it) | post a post to the database| null |
| POST | /api/v1/posts/rsvp | Yes (if we do it) | set rsvp for a post | null |

...etc for extra stretch


### DB (Server Side) -
  There should be three tables for MVP. You may want/need to add additional columns or tables.

### Activities
  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | id | Integer | Unique identifier for each activity |
  | name | String | Name of the activity |
  | Symbol | String | The image Source for the symbol representing the activity |
  | colors | string | A way to define color in an activity i.e buttons|
  | photo | string | backround image if it looks not shit |



### Locations
  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | id | Integer | Unique identifier for each location |
  | name | String | Name of each location |
  | activity_id | integer | foreign key of activities |















