import { Loader } from "@googlemaps/js-api-loader";

/**
 * This is a wrapper around the Google Maps API client.
 * see https://developers.google.com/maps/documentation/javascript
 */

let googleApiClient;

export default async function getGoogleMapsApiClient() {
  if (googleApiClient) {
    return googleApiClient;
  }

  const loader = new Loader({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_JAVASCRIPT_API_KEY,
    version: "weekly",
    libraries: ["places"],
  });

  googleApiClient = await loader.load();

  return googleApiClient;
}
