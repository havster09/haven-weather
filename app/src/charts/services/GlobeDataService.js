"use strict";

function GlobeDataService($q) {
  const cities = [
    {
      id: "0",
      name: "Sydney",
      lat: -33.86,
      lon: 151.21,
      elevation:39,
      conditions: "Rain",
      temperature: 12.5,
      pressure:1010.3,
      humidity:97,
      random: Math.floor(Math.random() * 100),
      icon: 'Rain', icon_url: 'assets/svg/35.svg'
    },
    {
      id: "1",
      name: "Melbourne",
      lat: -37.83,
      lon: 144,
      elevation:7,
      conditions: "Snow",
      temperature: -5.3,
      pressure:998.4,
      humidity:55,
      random: Math.floor(Math.random() * 100),
      icon: 'Snow', icon_url: 'assets/svg/23.svg'
    },
    {
      id: "2",
      name: "Adelaide",
      lat: -34.92,
      lon: 138.62,
      elevation:48,
      conditions: "Sunny",
      temperature: 39.4,
      pressure:1114.1,
      humidity:12,
      random: Math.floor(Math.random() * 100),
      icon: 'Sunny', icon_url: 'assets/svg/2.svg'
    }
  ];

  return {
    loadAllCities: function() {
      return $q.when(cities);
    }
  };
}

export default ['$q', GlobeDataService];

