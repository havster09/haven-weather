"use strict";

function GlobeDataService($q) {
  var cities = [
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
  var data = {
    '088': 99,
    '012': 45,
    '262': 56,
    '276': 80,
    '380': 56,
    '372': 25,
    '024': 56,
    '032': 12,
    '008': 67,
    '004': 56,
    '051': 12,
    '784': 67,

    '152': 89,
    '156': 45,
    '384': 51,
    '170': 73,
    '818': 49,
    '208': 66,
    '724': 9,
    '250': 31,
    '242': 51,
    '356': 87,
    '826': 19,
    '360': 26,

    '3514': 63,
    '3515': 47,
    '3516': 47,
    '3517': 63,
    '3518': 47,
    '3519': 47,
    '3520': 67,
    '3521': 19,
    '3522': 71,
    '3523': 36,
    '3524': 56,
    '3525': 12,
    '3526': 67,
    '3527': 19,
    '3528': 71,
    '3529': 36,
    '3530': 56,
    '3531': 12,
    '3532': 71,
    '3533': 36,
    '3534': 56,
    '3535': 12,
    '3536': 67,
    '3537': 19,
    '3538': 71,
    '3539': 36,
    '3540': 56,
    '3541': 19,
    '3542': 71,
    '3543': 36,
    '3544': 56,
    '3545': 12,
    '3546': 67,
    '3547': 19,
    '3548': 71,
    '3549': 36,
    '3550': 56,
    '3551': 12,
    '3552': 71,
    '3553': 21,
    '3554': 34,
    '3555': 45,
    '3556': 5,
    '3557': 25,
    '3558': 56,
    '3559': 36,
    '3560': 56,
    '3561': 19,
    '3562': 71,
    '3563': 36
  };

  return {
    loadAllCities: function() {
      return $q.when(cities);
    },
    loadAllData: function() {
      return $q.when(data);
    }
  };
}

export default ['$q', GlobeDataService];

