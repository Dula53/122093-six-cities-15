enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  NotFound = '/*'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

const RatingsStar = [
  ['perfect', '5'],
  ['good', '4'],
  ['not bad', '3'],
  ['badly', '2'],
  ['terribly', '1']
];

const CITIES = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  }
];

const DEFAULT_CITY = CITIES[0];

const SORTING_TYPES = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

const DEFAULT_SORTING = SORTING_TYPES[0];

export { AppRoute, AuthorizationStatus, RatingsStar, CITIES, DEFAULT_CITY, SORTING_TYPES, DEFAULT_SORTING };
