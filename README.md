### Power Badge Frame 
Frame to give u an idea of power badge progress/status. Demystifies Farcaster status for new users. Existing power users are exposed to 

Disclaimer: OpenRank's algorithm might diverge from Warpcast's internal algorithm


Frame flow: 
1. Load all power badge users from warpcast api 
```
curl https://api.warpcast.com/v2/power-badge-users 
```

2. View: 
Check if frame user's fid is in power badge list

If yes:
* View: Suggest random casts from 3 out of the top 25 non-power-badge users thru OpenRank API.. "We think you would like t"

If no:  

* Find casts from users to interact with




* OR: View: Show your percentile and rank from OpenRank API request 
Request:
```
https://graph.cast.k3l.io/scores/global/following/handles

[
  "gudjo.eth"
]
```
Example: There are 4456 users with power badge. According to OpenRank's algorithm you have rank 2817. You might receive the power badge soon, but keep casting"

Example 2: There are 4456 users with power badge. According to OpenRank's algorithm you have rank 6500. Keep casting receive the power badge soon!"

