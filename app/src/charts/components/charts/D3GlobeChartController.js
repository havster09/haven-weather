"use strict";

import * as d3 from "d3";
import * as topojson from "../../../../js/topojson.min";

class D3GlobeChartController {
    constructor(GlobeDataService) {
        let model = this;
        model.selectedCountry = 'Australia';
        model.animateFill = {};
        model.animateStroke = {};

        model.weatherTooltip = d3.select(".globe").append("div")
            .attr("class", "tooltip-weather")
            .style("width", 600);

        GlobeDataService.loadAllCities().then((cities) => {
            model.cities = cities;
        });

        const time = Date.now();
        const rotate = [0, 0];
        const velocity = [0.015, -0];

        const color = d3.scale.linear()
            .domain([0, 10])
            .range(colorbrewer.Greys[9]);

        var width = 700, height = 700,
            projection, path,
            svg, features, graticule,
            mapJson = 'assets/topojson/countries-and-states.json',
            states, stateSet, countries, countrySet, set, weatherBubbles;

        projection = d3.geo.orthographic()
            .translate([width / 2, height / 2])
            .scale(300)
            .clipAngle(90)
            .precision(0.1)
            .rotate([-134.3156069410817, 25.763175224302056]);


        path = d3.geo.path()
            .projection(projection);

        svg = d3.select('.globe-wrapper .globe')
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .attr('viewBox', '0, 0, ' + width + ', ' + height);

        features = svg.append('g');

        features.append('path')
            .datum({type: 'Sphere'})
            .attr('class', 'background')
            .attr('d', path);

        graticule = d3.geo.graticule();

        features.append('path')
            .datum(graticule)
            .attr('class', 'graticule')
            .attr('d', path);

        d3.json(mapJson, function (error, world) {
            states = topojson.feature(world, world.objects.states).features;
            countries = topojson.feature(world, world.objects.countries).features;
            stateSet = drawFeatureSet('state', states);
            countrySet = drawFeatureSet('country', countries);

            weatherBubbles = svg.append("g")
                .attr("class", "bubble")
                .selectAll("circle")
                .data(model.cities)
                .enter().append("circle")
                .attr('cx', (d) => {
                    return projection([d.lon, d.lat])[0];
                })
                .attr('cy', (d) => {
                    return projection([d.lon, d.lat])[1] - 1.5;
                })
                .attr("r", (d) => {
                    return 0;
                })
                .attr("class", (d,i) => {
                    return `weather-bubble-${d.name}`;
                })
                .on("mouseover", function (d) {
                    const circleId = d.id;
                    model.weatherTooltip.transition()
                        .duration(500)
                        .style("opacity", 1);
                    const tip = `<h3>${d.name} Weather</h3>
                            <p class="icon"><img width="50" src="${d.icon_url}" alt="${d.conditions}"></p>
                            <ul>
                                <li><strong>Conditions:</strong>${d.conditions}</li>
                                <li><strong>Temperature:</strong>${d.temperature}</li>
                                <li><strong>Elevation:</strong>${d.elevation}</li>
                                <li><strong>Pressure:</strong>${d.pressure}</li>
                                <li><strong>Humidity:</strong>${d.humidity}</li>
                            </ul>`;

                    model.weatherTooltip.html(tip)
                        .style("left", (Math.floor(d3.mouse(this)[0])) + "px")
                        .style("top", (Math.floor(d3.mouse(this)[1])) + "px");

                })
                .on("mouseout", (d) => {
                    model.weatherTooltip.transition()
                        .duration(500)
                        .style("opacity", 0);
                })
                .transition()
                .duration(2000)
                .ease('elastic')
                .attr("r", (d) => {
                    return 8;
                });
        });

        function drawFeatureSet(className, featureSet) {
            set = features.selectAll('.' + className)
                .data(featureSet)
                .enter()
                .append('g')
                .attr('class', className)
                .attr('data-name', (d) => {
                    return d.properties.name;
                })
                .attr('data-id', (d) => {
                    return d.id;
                });

            set.append('path')
                .attr('class', 'land')
                .attr('d', path)
                .attr("fill", (d, i) => {
                    return color(i * 100);
                });

            set.append('path')
                .attr('class', 'overlay')
                .attr('d', path)
                .attr('style', (d) => {
                    return 'fill-opacity: ' + 0.5;
                })
                .on("mouseover", function () {
                    d3.select(this)
                        .style({
                            "fill": "#000"
                        });
                })
                .on("mouseout", function (d) {
                    if(d.properties.name !== model.selectedCountry) {
                        d3.select(this)
                            .style({
                                "fill": "#FFC107"
                            });
                    }
                })
                .on('click', function (d) {
                    model.selectedCountry = d.properties.name;

                    if(d.properties.name !== model.selectedCountry) {
                        d3.select(this)
                            .style({
                                "fill": "#FFC107"
                            });
                    }

                    d3.select('.globe-wrapper .info').html(`<h4>${d.properties.name}</h4>`);

                    if (d.properties.name !== "Australia") {
                        svg.selectAll("circle")
                            .transition()
                            .duration(200)
                            .ease("linear")
                            .attr({
                                "r": (d) => {
                                    return 0;
                                }
                            });
                    }
                    rotateToFocusOn(d);

                    const clickedCountry = d.properties.name;

                    d3.selectAll('.overlay')
                        .style({
                            "fill": (d) => {
                                return (d.properties.name !== clickedCountry)?"#FFC107":"#000";
                            }
                        });
                })
                .call(animateFill, 5000)
                .call(animateStroke, 5000);

            return set;
        }

        function rotateToFocusOn(x) {
            const coords = d3.geo.centroid(x);
            coords[0] = -coords[0];
            coords[1] = -coords[1];

            d3.transition()
                .duration(1000)
                .tween('rotate', () => {
                    const r = d3.interpolate(projection.rotate(), coords);
                    return (t) => {
                        projection.rotate(r(t));
                        svg.selectAll('path').attr('d', path);
                    };
                })
                .each("end", () => {
                    if (x.properties.name === "Australia") {
                        renderWeatherCircles();
                    }
                })
                .transition();
        }

        function renderWeatherCircles() {
            svg.selectAll("circle")
                .transition()
                .duration(2000)
                .ease("elastic")
                .attr({
                    "r": (d) => {
                        return 8;
                    }
                });
        }

        function animateFill(path, duration) {
            d3.select(model.animateFill).transition()
                .duration(duration)
                .tween("style:fill-opacity", function() {
                    const i = d3.interpolateString(".5", "1");
                    return function(t) { path.style("fill-opacity", i(t)); };
                })
                .transition()
                .tween("style:fill-opacity", function() {
                    const i = d3.interpolateString("1", ".5");
                    return function(t) { path.style("fill-opacity", i(t)); };
                });

            setTimeout(function() { animateFill(path, duration); }, (Math.random() + 2) * duration);
        }

        function animateStroke(path, duration) {
            d3.select(model.animateStroke).transition()
                .duration(duration)
                .tween("style:stroke-width", function() {
                    const i = d3.interpolateString("1px", "1.5px");
                    return function(t) { path.style("stroke-width", i(t)); };
                })
                .transition()
                .tween("style:stroke-width", function() {
                    const i = d3.interpolateString("1.5px", "1px");
                    return function(t) { path.style("stroke-width", i(t)); };
                });

            setTimeout(function() { animateStroke(path, duration); }, (Math.random() + 2) * duration);
        }
    }
}

export default D3GlobeChartController;

