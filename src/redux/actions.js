export const PROFIL_USERA = "PROFIL_USERA";
export const PROMIJENI_INPUT = "PROMIJENI_INPUT";

export function promijeniInput(objekt) {
  return { type: PROMIJENI_INPUT, payload: objekt.payload };
}

export const dohvatiProfil = (input) => async (dispatch) => {
  let dohvaceniProfil = await fetch(`https://api.github.com/users/${input}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  dispatch({ type: PROFIL_USERA, payload: dohvaceniProfil });
};
