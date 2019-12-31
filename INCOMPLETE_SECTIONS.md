## comments 
- perfect circles for initials
- parents/child comments
- accurate timestamps

## video show 
- initials circle for video poster
- view counter 
- accurate timestamps

## dropdown
- on blurr functionality

## video-index
- initials circle for video poster
- view counter 
- accurate timestamps

## search

## like

## user profiles






## Documentation
- 12/26 8:09pm -> finished creating poly morphic associations for likes on backend. Need to create transition into frontend 
    next steps: ajax requests, actions, reducers

    12/28 12:38am -> got likes passing information to front end, need to pass current user like information to front end
12/28 9:40 -> got informtion passed to user, but accidentally sent to video_poster. need to change some jbuilder/ reducers on how info on the current user is passed up. Involves some auth changing and bootstrapping

12/28 -> 19:52 -> maybe have each comment and each video keep track of user ids who liked them, then see if the current user is somebody who liked it

12/29 17:00 -> got comment likes working well. Next steps are to add video likes and style
