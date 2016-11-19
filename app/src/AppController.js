"use strict";

function AppController($mdSidenav) {
    var self = this;

    self.selected = null;

    self.charts = [
        {
            "name": "D3 Bar Chart",
        }
    ];

    self.selected = self.charts[0];

    self.selectChart = selectChart;

    function selectChart(chart) {
        self.selected = angular.isNumber(chart) ? $scope.charts[chart] : chart;
    }
}

export default [AppController];
