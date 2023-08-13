import getGoogleMapsApiClient from "libs/googleApiClient";

async function getSuggestions(inputValue, sessionTokenRef) {
  try {
    const google = await getGoogleMapsApiClient();

    if (!sessionTokenRef.current)
      sessionTokenRef.current =
        await new google.maps.places.AutocompleteSessionToken();

    const { predictions } =
      (await new google.maps.places.AutocompleteService().getPlacePredictions({
        input: inputValue,
        sessionToken: sessionTokenRef.current,
      })) || { predictions: [] };

    return predictions;
  } catch (error) {
    return Promise.reject(error);
  }
}

// eslint-disable-next-line
export default {
  getSuggestions,
};
