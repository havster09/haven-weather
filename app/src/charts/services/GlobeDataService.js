"use strict";

function GlobeDataService($q) {
  const cities = [
    {
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
      name: "Adelaide",
      lat: -34.92,
      lon: 138.62,
      elevation:48,
      conditions: "Sunny",
      temperature: Math.floor(Math.random() * 10) + 30,
      pressure:1114.1,
      humidity:12,
      random: Math.floor(Math.random() * 100),
      icon: 'Sunny', icon_url: 'assets/svg/2.svg'
    },
    {
      name: "Perth",
      lat: -31.9505270,
      lon: 115.8604570,
      elevation:48,
      conditions: "Sunny",
      temperature: Math.floor(Math.random() * 10) + 30,
      pressure:1114.1,
      humidity:12,
      random: Math.floor(Math.random() * 100),
      icon: 'Sunny', icon_url: 'assets/svg/2.svg'
    },
    {
      name: "Cairns",
      lat: -16.9185510,
      lon: 145.7780550,
      elevation:48,
      conditions: "Sunny",
      temperature: Math.floor(Math.random() * 10) + 30,
      pressure:1114.1,
      humidity:12,
      random: Math.floor(Math.random() * 100),
      icon: 'Sunny', icon_url: 'assets/svg/2.svg'
    },
    {
      name: "Brisbane",
      lat: -27.4697710,
      lon: 153.0251240,
      elevation:48,
      conditions: "Sunny",
      temperature: Math.floor(Math.random() * 10) + 30,
      pressure:1114.1,
      humidity:12,
      random: Math.floor(Math.random() * 100),
      icon: 'Sunny', icon_url: 'assets/svg/2.svg'
    },
    {
      name: "Darwin",
      lat: -12.4634400,
      lon: 130.8456420,
      elevation:48,
      conditions: "Sunny",
      temperature: Math.floor(Math.random() * 10) + 30,
      pressure:1114.1,
      humidity:12,
      random: Math.floor(Math.random() * 100),
      icon: 'Sunny', icon_url: 'assets/svg/2.svg'
    },
    {
      name: "Townsville",
      lat: -19.2589630,
      lon: 146.8169480,
      elevation:48,
      conditions: "Sunny",
      temperature: Math.floor(Math.random() * 10) + 30,
      pressure:1114.1,
      humidity:12,
      random: Math.floor(Math.random() * 100),
      icon: 'Sunny', icon_url: 'assets/svg/2.svg'
    },
    {
      name: "Alice Springs",
      lat: -23.6980420,
      lon: 133.8807470,
      elevation:48,
      conditions: "Sunny",
      temperature: Math.floor(Math.random() * 10) + 30,
      pressure:1114.1,
      humidity:12,
      random: Math.floor(Math.random() * 100),
      icon: 'Sunny', icon_url: 'assets/svg/2.svg'
    },
    {
      name: "Broome",
      lat: -17.9614340,
      lon: 122.2358520,
      elevation:48,
      conditions: "Sunny",
      temperature: Math.floor(Math.random() * 10) + 30,
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

