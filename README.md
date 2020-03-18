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

## Necessary expenses
- Mortgage/rates (if yes homeOwner)
- Power/Electricity average Tip: overestimate
- Food and home essentials 
- 


## User Stories
As a user I should be able to...

Set my weekly pay $
Set my essential spending for the pay period
- rent/mortgage + rates 
- Utilities: Power/water/electricity/phone/internet   
- Food and home essentials
- Transport
- Donations (link to one percent here)
 
See my total saving for the pay period
- Long term saving (set)
- Back up savings 
- Home maintenance $ (if homeOwner)
- Divide my remaining money into the unnecessary spending options i've indicated ie (Holidays $10wk)(Wearables $5wk) 
- Holidays 

Non essential spending
- Materialistic stuff
- subsriptions
- Entertainment 
- Other 
    
- See the total over the course of a year for each spending category 
- See the total over the course of a year for each saving category 


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
