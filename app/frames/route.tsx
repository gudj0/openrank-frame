/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "./frames";
import { appURL } from "../utils";

const frameHandler = frames(async (ctx) => {

  console.log(`Search Params: ${JSON.stringify(ctx.searchParams)}`);
  if (ctx.pressedButton && (ctx.searchParams.action === 'start' || ctx.searchParams.action === 'refresh')) {
    // start process to get users, will store
    const fetchUrl = `https://frame-backend-production.up.railway.app/start/${ctx.message?.requesterFid}?action=${encodeURIComponent(ctx.searchParams.action)}&timestamp=${encodeURIComponent((new Date()).getUTCMilliseconds())}`
    console.log(`FETCH URL: ${fetchUrl}`);
    const startResponse = await fetch(fetchUrl);
    const data = await startResponse.json();
    console.log(`data: ${data}`);
    console.log(`START RESPONSE: ${JSON.stringify(data)}`);
    //https://frame-backend-production.up.railway.app/start/309
    // check if user data is loaded //https://frame-backend-production.up.railway.app/start/309start/309
    //const response = await fetch(`https://frame-backend-production.up.railway.app/start/309user-relevant-cast/${ctx.message?.requesterFid}`);
    // console.log(`RESPONSE FROM BACKEND: ${JSON.stringify(response)}`);
    if (data?.status === 'processing' || !data?.user) {
      return {
        image: '../Loading.gif',
        state: ctx.state,
        buttons: [
          <Button action="post" target={{ pathname: "/", query: { action: 'refresh' } }}>
            Refresh
          </Button>,
        ],
      }
    }
    // get users openrank
    
    console.log(`data: ${JSON.stringify(data)}`)
    // display loading screen with openrank
    return {
      image: (
        <div tw='flex' style={{ flexDirection: 'column' }}>
          <p>Your OpenRank: #{data?.user?.openRank?.rank}</p>
          <p>You {data?.user?.powerBadge ? 'have' : 'do not have'} a Power Badge</p>
        </div>
      ),
      state: {...ctx.state, targetFid: data?.fid, targetName: data?.fname},
      buttons: [
        <Button action="post" target={{ pathname: "/", query: { action: 'friend' } }}>
          Find a Friend
        </Button>,
      ],
    }
  }

  if (ctx.pressedButton && ctx.searchParams.action === 'friend') {
    console.log(`State: ${JSON.stringify(ctx.state)}`)
    return {
      image: (
        <div tw='flex' style={{ flexDirection: 'column' }}>
          <p>You Might Like to Meet:</p>
          <p>@{ctx.state.targetName}</p>
        </div>
      ),
      buttons: [
        <Button action="link" target={`https://warpcast.com/${ctx.state.targetName}`}>
          View
        </Button>,
      ]
    }
  }

  return {
    image: 'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/d52a9d88-2a00-418e-e2fb-ef7b99072f00/original',
    buttons: [
      <Button action="post" target={{ pathname: "/", query: { action: 'start' } }}>
        Start
      </Button>,
    ],
  };
});

export const GET = frameHandler;
export const POST = frameHandler;
