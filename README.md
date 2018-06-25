# nvd3-linePlusBarChart
Angular-nvd3 linePlusBarChart, x axis lables disappear when values are between -1 and 1. Not sure if this is a bug.


<img src="https://i.stack.imgur.com/H4wu1.png" />

<br>

<img src="https://i.stack.imgur.com/qmIl4.png" /> 

<h2>Link to working example at plunker</h2>
<a href="http://plnkr.co/edit/nmIpD14S9eNp14mssa8u?p=preview">X axis labels disapper when x is bewtween -1 and 1 </a>
<br>
Comment / uncomment the data values in $scope.data to show hide the x lables.

            //"values": [[-1.01, null], [0, 4], [0.015, 3], [0.045, 4], [0.065, 1], [0.075, 10], [1.01, null]] // X axis labels show up
            "values": [[-0.1, null], [0, 4], [0.015, 3], [0.045, 4], [0.065, 1], [0.075, 10], [0.1, null]] //  X axis labels DO NOT show up

