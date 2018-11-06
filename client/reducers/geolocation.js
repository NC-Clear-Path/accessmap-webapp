import {
  CLEAR_GEOLOCATION,
  RECEIVE_GEOLOCATION,
  NO_GEOLOCATION,
} from 'actions';

import { defaultGeolocation as defaults } from './defaults';

export default (state = defaults, action) => {
  switch (action.type) {
    case RECEIVE_GEOLOCATION:
      return {
        coordinates: action.payload.coordinates,
        accuracy: action.payload.accuracy,
        lon: action.payload.lon,
        lat: action.payload.lat,
        status: 'Ok',
      };
    case CLEAR_GEOLOCATION:
      return {
        coordinates: null,
        accuracy: null,
        status: 'none',
      };
    case NO_GEOLOCATION:
      return {
        coordinates: null,
        accuracy: null,
        status: 'unavailable',
      };
    default:
      return state;
  }
};
