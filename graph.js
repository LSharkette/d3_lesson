svg = d3.select("svg");
g = svg.append("g");
g.attr("transform", "translate(100,50)");

x = d3.scale.linear()
    .domain([2000, 2012])
    .range([0, 800]);
y = d3.scale.linear()
    .domain([0, 100])
    .range([400, 0]);

x_axis = d3.svg.axis().scale(x).orient("bottom").ticks(5).tickFormat(d3.format("d"));
y_axis = d3.svg.axis().scale(y).orient("left").ticks(4);

g.call(y_axis);

gx = g.append("g")
gx.call(x_axis);
gx.attr("transform", "translate(0,400)");

circle = g.append("circle");
circle.attr("cx", x(2000)).attr("cy", y(92)).attr("r", 6);

circle = g.append("circle");
circle.attr("cx", x(2001)).attr("cy", y(90)).attr("r", 6);

circle = g.append("circle");
circle.attr("cx", x(2002)).attr("cy", y(87)).attr("r", 6);

circle = g.append("circle");
circle.attr("cx", x(2003)).attr("cy", y(86)).attr("r", 6);

circle = g.append("circle");
circle.attr("cx", x(2004)).attr("cy", y(90)).attr("r", 6);

circle = g.append("circle");
circle.attr("cx", x(2005)).attr("cy", y(82)).attr("r", 6);

circle = g.append("circle");
circle.attr("cx", x(2006)).attr("cy", y(80)).attr("r", 6);

circle = g.append("circle");
circle.attr("cx", x(2007)).attr("cy", y(92)).attr("r", 6);

circle = g.append("circle");
circle.attr("cx", x(2008)).attr("cy", y(82)).attr("r", 6);

circle = g.append("circle");
circle.attr("cx", x(2009)).attr("cy", y(78)).attr("r", 6);

circle = g.append("circle");
circle.attr("cx", x(2010)).attr("cy", y(77)).attr("r", 6);

circle = g.append("circle");
circle.attr("cx", x(2011)).attr("cy", y(78)).attr("r", 6);

circle = g.append("circle");
circle.attr("cx", x(2012)).attr("cy", y(77)).attr("r", 6);
