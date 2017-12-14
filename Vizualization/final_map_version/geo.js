
const DIMENSIONS = getWindowDimensions();
const WIDTH = DIMENSIONS.width - 20;    // 20 => padding.
const HEIGHT = DIMENSIONS.height - 50;  // 50 => legend, title and padding.

// Insets.
//const INSETS = {'left': 20, 'right': 10, 'top': 50, 'bottom':20};

// Padding.
const PADDING = {'left': 0, 'right': 10, 'top': 8, 'bottom': 0};




window.onload = function() {

         var canvas = d3.select("#chart").append("svg")
                   .attr("width",WIDTH)
                   .attr("height",HEIGHT)
                   .attr("class","canvas")
                   .append("g")
                   .attr("transform","translate(+" + ","+ PADDING.top + PADDING.bottom+")");

    // Load data.
      d3.json("countries_quantized.json",function (data){

        console.log(data)
        var countries =  topojson.feature(data,data.objects.tracts).features

        console.log(countries)
        var projection = d3.geoPatterson()
                           .scale(220)
                           //.scale(0.001)
                           .translate([WIDTH/2,HEIGHT/2])

        //var projection = d3.geoGringorten().scale(100)
        var color = d3.scaleOrdinal(d3.schemeCategory10);

        var path = d3.geoPath().projection(projection)

        var group = canvas.selectAll("g")
                          .data(countries)
                          .enter()
                          .append("g")
                          .attr("class","country")
                          //.attr("fill","steelblue");






        var areas = group.append("path")
                       .attr("d",path)
                       .attr("fill",   function(d,i){return color(i)}  );
                       //.attr("fill","steelblue");
    
       // group.append("text")
             //.data(data.features)
             //.enter()
             //.append("text")
         //    .attr("x",function (d) {return path.centroid(d.geometry.coordinates.id)[0];})
           //  .attr("y",function (d) {return path.centroid(d.geometry.coordinates)[1];})
            // .text(function (d) {return d.properties.admin;})
            // .attr("text-anchor","middle")
            // .attr("font-size", "6.5px")
            // .attr("fill", "black");

     });
};






function getWindowDimensions() {

    var width =850;
    var height = 500;
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
