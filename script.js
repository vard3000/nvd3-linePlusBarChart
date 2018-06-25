angular.module('myApp', ['nvd3'])
  .controller('myCtrl', function($scope) {


        $scope.options = {
            chart: {
                type: 'linePlusBarChart',
                height: 500,
                margin: {
                    top: 30,
                    right: 75,
                    bottom: 50,
                    left: 75
                },
                bars: {
                    forceY: [0]
                },
                bars2: {
                    forceY: [0]
                },

                useInteractiveGuideline: true,
                tooltips: true,
                focusEnable: false,
                interpolate: 'basis',
                color: ['darkGreen', 'white', 'red', 'red', 'yellow', 'yellow'],
                x: function (d, i) {
                    return d.x
                },


                xAxis: {
                    axisLabel: 'X Axis',
                    tickFormat: function (d) {
                        return d
                    }
                },
                x2Axis: { // this is the focus chart
                    tickFormat: function (d) {
                    },
                    showMaxMin: false
                },
                y1Axis: {
                    axisLabel: 'Y1 Axis',
                    tickFormat: function (d) {
                        return d3.format(',f')(d);
                    },
                    axisLabelDistance: 12
                },
                y2Axis: {
                    axisLabel: 'Y2 Axis',
                    tickFormat: function (d) {
                        return d3.format(',.2f')(d)
                    }
                }
            }
        };

        $scope.data = [
            {
                "key": "Quantity",
                "bar": true,
            //"values": [[-1.01, null], [0, 4], [0.015, 3], [0.045, 4], [0.065, 1], [0.075, 10], [1.01, null]] // X axis labels show up
            "values": [[-0.1, null], [0, 4], [0.015, 3], [0.045, 4], [0.065, 1], [0.075, 10], [0.1, null]] //  X axis labels DO NOT show up


            },
            {
                "key": "Bell Curve",
            //"values": [[-1.01, null], [0, 4], [0.015, 3], [0.045, 4], [0.065, 1], [0.075, 10], [1.01, null]] // X axis labels show up
            "values": [[-0.1, null], [0, 4], [0.015, 3], [0.045, 4], [0.065, 1], [0.075, 10], [0.1, null]] //  X axis labels DO NOT show up

            }
        ].map(function (series) {
            series.values = series.values.map(function (d) { return { x: d[0], y: d[1]} });
            return series;
        });


  });
