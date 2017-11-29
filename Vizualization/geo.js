
const DIMENSIONS = getWindowDimensions();
const WIDTH = DIMENSIONS.width - 20;    // 20 => padding.
const HEIGHT = DIMENSIONS.height - 150;  // 50 => legend, title and padding.

// Insets.
//const INSETS = {'left': 20, 'right': 10, 'top': 50, 'bottom':20};

// Padding.
const PADDING = {'left': 20, 'right': 20, 'top': 100, 'bottom': 0};




window.onload = function() {

    // Load data.
      d3.json("convert.json",function (data){

        var canvas = d3.select("#chart").append("svg")
                   .attr("width",WIDTH)
                   .attr("height",HEIGHT)
                   .attr("class","canvas")


        var group = canvas.selectAll("g")
                          .data(data.features)
                          .enter()
                          .append("g")


        var projection = d3.geoMercator()
                           .scale(450)
                           //.scale(0.001)
                           .translate([350,280])


        var path = d3.geoPath().projection(projection)
        var areas = group.append("path")
                         .attr("d",path)
                         .attr("clas","geoarea")
                         .attr("fill","steelblue");

        group.append("text")
             //.data(data.features)
             //.enter()
             //.append("text")
             .attr("x",function (d) {return path.centroid(d)[0];})
             .attr("y",function (d) {return path.centroid(d)[1];})
             .text(function (d) {return d.properties.COUNTRY;})
             .attr("text-anchor","middle")
             .attr("font-size", "6.5px")
             .attr("fill", "black");

     });
};






function getWindowDimensions() {

    var width =30;
    var height = 600;
    if (document.body && document.body.offsetWidth) {

        width = document.body.offsetWidth;
        height = document.body.offsetHeight;
    }

    if (document.compatMode == 'CSS1Compat' && document.documentElement && document.documentElement.offsetWidth) {

        width = document.documentElement.offsetWidth;
        height = document.documentElement.offsetHeight;
    }

    if (window.innerWidth && window.innerHeight) {

        width = window.innerWidth;
        height = window.innerHeight;
    }

    return {'width': width, 'height': height};
}
