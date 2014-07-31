relation db design (outline):

user table:
  facebookId
  facebook token?
  location?

activities table
  one time or recurring or expiring- string (weekly, biweekly,annually)
  date and time start:
  date and time end:
  need to start on time?:
  time range:
  location?: 
  weekday:
  fb event page link?:
  meetup link?:
  cost?:

type table:
  id
  type

activityTypes table:
  typeId
  activityID

activitiesCompleted
  userID
  activityID
  time started
  time completed
  duration
  rating

activitiesInPRogress
  userID
  activityID
  time started

//how close one user preferences relate to anotother
userProximity:
  userID1
  userID2
  proximity: (lower is better)