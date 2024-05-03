### Power Badge Frame 
Frame to give u an idea of power badge progress/status. Demystifies 



1. Load data from warpcast api 
```
curl https://api.warpcast.com/v2/power-badge-users | jq  | wc -l
```

2. Frame view 1: 
Check if your fid has power badge or not 

3. If yes:
Suggest random follows of 3 out of the top 25 non-power-badge users thru OpenRank API

3. If no:  
Show your percentile and rank from OpenRank API request 
If no 2: 
There are 4000 users with power badge. According to OpenRank you are the 