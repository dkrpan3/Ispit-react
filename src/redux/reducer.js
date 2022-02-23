import { PROFIL_USERA, PROMIJENI_INPUT } from "./actions";

const initialState = {
  inputLogina: "",
  profil: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PROMIJENI_INPUT: {
      return { ...state, inputLogina: action.payload };
    }
    case PROFIL_USERA:
      return { ...state, profil: action.payload };

    default:
      return state;
  }
}
