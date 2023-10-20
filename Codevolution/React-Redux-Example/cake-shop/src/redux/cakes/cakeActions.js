import { BUY_CAKE } from "./cakeTypes";

// BUY_CAKE

export const buyCake = (number) => {
  return {
    type: BUY_CAKE,
    payload: number
  };
};
