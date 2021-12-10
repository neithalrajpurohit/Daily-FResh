export const dataReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_INVENTORY":
      return {
        ...state,
        vegetables: !state.vegetables,
      };

    case "TOGGLE_DELIVERY":
      return {
        ...state,
        fruits: !state.fruits,
      };

    default:
      console.log("you are breaking something");
      break;
  }
};
