"use strict";
// Load the custom app ES6 modules
import 'ngcomponentrouter';
import ChartsList from 'src/charts/components/list/ChartsList';
import ChartDetails from 'src/charts/components/details/ChartDetails';
import D3GlobeChart from 'src/charts/components/charts/D3GlobeChart';

// Define the Angular 'charts' module

export default angular
  .module("charts", ['ngMaterial', 'ngComponentRouter'])

  .component(ChartsList.name, ChartsList.config)
  .component(ChartDetails.name, ChartDetails.config)
  .component(D3GlobeChart.name, D3GlobeChart.config);
