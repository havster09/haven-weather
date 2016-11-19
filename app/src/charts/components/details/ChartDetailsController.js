"use strict";

class ChartDetailsController {

    /**
     * Constructor
     *
     * @param $mdBottomSheet
     * @param $log
     */
    constructor($mdBottomSheet, $log) {
        this.$mdBottomSheet = $mdBottomSheet;
        this.$log = $log;
    }

    /**
     * Show the bottom sheet
     */
    share() {
        var chart = this.selected;
        var $mdBottomSheet = this.$mdBottomSheet;

        $mdBottomSheet.show({
            parent: angular.element(document.getElementById('content')),
            templateUrl: 'src/charts/components/details/ContactSheet.html',
            controller: ['$mdBottomSheet', ChartSheetController],
            controllerAs: "$ctrl",
            bindToController: true
        }).then((clickedItem) => {
            this.$log.debug(clickedItem.name + ' clicked!');
        });

        /**
         * Bottom Sheet controller for the Avatar Actions
         */
        function ChartSheetController($mdBottomSheet) {
            this.chart = chart;
            this.items = [
                {name: 'Phone', icon: 'phone', icon_url: 'assets/svg/phone.svg', value: "+61452598251"}
            ];
            this.performAction = (action) => {
                $mdBottomSheet.hide(action);
            };
        }
    }

}
export default ChartDetailsController;

