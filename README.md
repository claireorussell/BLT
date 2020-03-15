# BLT
Budgeting life tool

Tool for some friends to better organise their money, or lack of.


## The Tech

* React
* Redux
* Express

## Questions
- are you a home owner
- what's your weekly wage 
- what's your saving goal for the year 
- what are your two personal spending areas


## User Stories
As a user I should be able to...

Set my weekly pay $
See my essential spending for the pay period
    - rent/mortgage 
    - rates/water 
    - 
See my total saving for the pay period
    - Long term saving (set)
    - Home maintenance $
Divide my remaining money into the unnecessary spending options i've indicated
    - Holidays $10 wk
    - Wearables $5 wk 
    
See the total over the course of a year for each spending category 
See the total over the course of a year for each saving category 

Local state (Client Side) 


## Reducers (Client Side)

  | name | purpose |
  | --- | --- |
  | user | homeOwner: True or false && weekly wage in hand && total yearly saving goal && two areas of treatSpending |
  | expenses | user total for each area of spending (necessary, savings, unnecessary) |
  | totalRemaining | money remaining to be allocated |

  
## Actions (Client Side)

  | type | data | purpose |
  | --- | --- | --- |
  | SET_USER | user | to hold initail info of user, wage, saving goal, homeowner and treatSpending |
  | SET_EXPENSES | expenses | user total for each area of spending (necessary, savings, unnecessary) |
  | UPDATE_REMAINING | totalRemaining | money remaining to be allocated |
  | GET_HINTS | hints | gets the relevant hint based on input |
