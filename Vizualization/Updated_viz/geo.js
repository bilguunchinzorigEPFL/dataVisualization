
const DIMENSIONS = getWindowDimensions();
const WIDTH = DIMENSIONS.width - 50;    // 20 => padding.
const HEIGHT = DIMENSIONS.height - 100;  // 50 => legend, title and padding.

// Insets.
//const INSETS = {'left': 20, 'right': 10, 'top': 50, 'bottom':20};

// Padding.
const PADDING = {'left': 20, 'right': 20, 'top': 100, 'bottom': 0};




window.onload = function() {

         var canvas = d3.select("#chart").append("svg")
                   .attr("width",WIDTH)
                   .attr("height",HEIGHT)
                   .append("g")
                   .attr("transform","translate(+"+PADDING.left + ","+ PADDING.top + ")");

    // Load data.
      d3.json("states_quantized_topo.json",function (data){

       


        //console.log(data)

        var countries =  topojson.feature(data,data.objects.tracts).features

        //console.log(countries)

        
      

        var path = d3.geoPath().projection(null)

        var group = canvas.selectAll("g")
                          .data(countries)
                          .enter()
                          .append("g")
                          .attr("fill","steelblue");






        var areas = group.append("path")
                       .attr("d",path)
                        //.attr("fill","white");

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

    var width =150;
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
