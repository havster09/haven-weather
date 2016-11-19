"use strict";

class ChartsListController {
    /**
     * Constructor
     *
     * @param $log
     */
    constructor($log, $location) {
        this.$log = $log;
        this.$location = $location;

        this.selected = 'D3 Globe Chart';

        this.charts = [
            {name: 'D3 Globe Chart'}
        ];
    }

    handleSelect(name) {
        this.selected = name;
    }
}
export default ChartsListController;

