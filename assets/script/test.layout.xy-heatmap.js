var dataset = [
        {"x": 0, "y": 50, "z": 50, "c":"blue"}, {"x": 0, "y": 55, "z": 44, "c":"orange"},
        {"x": 1, "y": 43, "z": 23, "c":"blue"}, {"x": 1, "y": 20, "z": 20, "c":"orange"},
        {"x": 2, "y": 81, "z": 81, "c":"blue"}, {"x": 2, "y": 53, "z": 29, "c":"orange"},
        {"x": 3, "y": 19, "z": 19, "c":"blue"}, {"x": 3, "y": 87, "z": 87, "c":"orange"},
        {"x": 4, "y": 52, "z": 52, "c":"blue"}, {"x": 4, "y": 48, "z": 43, "c":"orange"},
        {"x": 5, "y": 24, "z": 34, "c":"blue"}, {"x": 5, "y": 49, "z": 79, "c":"orange"},
        {"x": 6, "y": 87, "z": 87, "c":"blue"}, {"x": 6, "y": 66, "z": 66, "c":"orange"},
        {"x": 7, "y": 17, "z": 17, "c":"blue"}, {"x": 7, "y": 27, "z": 27, "c":"orange"},
        {"x": 8, "y": 68, "z": 98, "c":"blue"}, {"x": 8, "y": 16, "z": 56, "c":"orange"},
        {"x": 9, "y": 49, "z": 49, "c":"blue"}, {"x": 9, "y": 15, "z": 15, "c":"orange"},
        {"x": 0, "y": 30, "z": 10, "c":"blue"}, {"x": 0, "y": 20, "z": 20, "c":"orange"},
        {"x": 1, "y": 43, "z": 53, "c":"blue"}, {"x": 1, "y": 91, "z": 91, "c":"orange"},
        {"x": 2, "y": 81, "z": 81, "c":"blue"}, {"x": 2, "y": 53, "z": 53, "c":"orange"},
        {"x": 3, "y": 19, "z": 19, "c":"blue"}, {"x": 3, "y": 87, "z": 47, "c":"orange"},
        {"x": 4, "y": 52, "z": 12, "c":"blue"}, {"x": 4, "y": 48, "z": 48, "c":"orange"},
        {"x": 5, "y": 24, "z": 24, "c":"blue"}, {"x": 5, "y": 49, "z": 39, "c":"orange"},
        {"x": 6, "y": 87, "z": 17, "c":"blue"}, {"x": 6, "y": 66, "z": 66, "c":"orange"},
        {"x": 7, "y": 17, "z": 17, "c":"blue"}, {"x": 7, "y": 27, "z": 17, "c":"orange"},
        {"x": 8, "y": 68, "z": 68, "c":"blue"}, {"x": 8, "y": 16, "z": 26, "c":"orange"},
        {"x": 9, "y": 49, "z": 49, "c":"blue"}, {"x": 9, "y": 15, "z": 15, "c":"orange"},
        {"x": 10, "y": 49, "z": 49, "c":"blue"}, {"x": 10, "y": 15, "z": 15, "c":"orange"},
        {"x": 0, "y": 50, "z": 50, "c":"red"}, {"x": 0, "y": 55, "z": 44, "c":"green"},
        {"x": 1, "y": 43, "z": 23, "c":"red"}, {"x": 1, "y": 20, "z": 20, "c":"green"},
        {"x": 2, "y": 81, "z": 81, "c":"red"}, {"x": 2, "y": 53, "z": 29, "c":"green"},
        {"x": 3, "y": 19, "z": 19, "c":"red"}, {"x": 3, "y": 87, "z": 87, "c":"green"},
        {"x": 4, "y": 52, "z": 52, "c":"red"}, {"x": 4, "y": 48, "z": 43, "c":"green"},
        {"x": 5, "y": 24, "z": 34, "c":"red"}, {"x": 5, "y": 49, "z": 79, "c":"green"},
        {"x": 6, "y": 87, "z": 87, "c":"red"}, {"x": 6, "y": 66, "z": 66, "c":"green"},
        {"x": 7, "y": 17, "z": 17, "c":"red"}, {"x": 7, "y": 27, "z": 27, "c":"green"},
        {"x": 8, "y": 68, "z": 98, "c":"red"}, {"x": 8, "y": 16, "z": 56, "c":"green"},
        {"x": 9, "y": 49, "z": 49, "c":"red"}, {"x": 9, "y": 15, "z": 15, "c":"green"},
        {"x": 0, "y": 30, "z": 10, "c":"red"}, {"x": 0, "y": 20, "z": 20, "c":"green"},
        {"x": 1, "y": 43, "z": 53, "c":"red"}, {"x": 1, "y": 91, "z": 91, "c":"green"},
        {"x": 2, "y": 81, "z": 81, "c":"red"}, {"x": 2, "y": 53, "z": 53, "c":"green"},
        {"x": 3, "y": 19, "z": 19, "c":"red"}, {"x": 3, "y": 87, "z": 47, "c":"green"},
        {"x": 4, "y": 52, "z": 12, "c":"red"}, {"x": 4, "y": 48, "z": 48, "c":"green"},
        {"x": 5, "y": 24, "z": 24, "c":"red"}, {"x": 5, "y": 49, "z": 39, "c":"green"},
        {"x": 6, "y": 87, "z": 17, "c":"red"}, {"x": 6, "y": 66, "z": 66, "c":"green"},
        {"x": 7, "y": 17, "z": 17, "c":"red"}, {"x": 7, "y": 27, "z": 17, "c":"green"},
        {"x": 8, "y": 68, "z": 68, "c":"red"}, {"x": 8, "y": 16, "z": 26, "c":"green"},
        {"x": 9, "y": 49, "z": 49, "c":"red"}, {"x": 9, "y": 15, "z": 15, "c":"green"},
        {"x": 10, "y": 49, "z": 49, "c":"red"}, {"x": 10, "y": 15, "z": 15, "c":"green"}
      ];

var normal = d3.daisy.layout.xyHeatmap()
  .container('#content')
  .data(dataset)
  .dimensions(['x', 'c'])
  .measures([{field:'y', op:'mean'}])
  .axis('x').axis('y')
  .label(true);
normal.render();

var histogram = d3.daisy.layout.xyHeatmap()
  .container('#content2')
  .data(dataset)
  .dimensions(['x', 'c'])
  .axis('x').axis('y')
  .axisTitle('x', '타이틀타이틀')
  .update();

histogram.reverse(true).update();
histogram.reverse(false).update();
histogram.reverse(true).update();
histogram.render();
