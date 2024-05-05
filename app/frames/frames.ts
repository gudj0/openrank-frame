import { createFrames } from "frames.js/next";

type State = {
  targetFid: number | null;
  targetName: string | null;
};

export const frames = createFrames<State>({
  basePath: "/frames",
  initialState: { targetFid: null, targetName: null },
});
