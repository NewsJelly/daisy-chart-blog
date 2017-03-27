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
        {"x": 9, "y": 49, "z": 49, "c":"blue"}, {"x": 9, "y": 15, "z": 15, "c":"orange"}
      ];

var grouped = d3.daisy.layout.line()
  .container('#content')
  .data(dataset)
  .dimensions(['z', 'c'])
  .measures({field:'y', op:'mean'})
  .stacked(false)
  .axis('x').axis('y')
  .legend(true)
  .grid(true)
  .label(true);
grouped.render();
console.log(grouped.cScale().domain());

var mono = d3.daisy.layout.line()
  .container('#content2')
  .data(dataset)
  .dimensions(['z'])
  .measures({field:'y', op:'sum'})
  .axis('x').axis('y')
  .legend(true)
  .size(10).point(true);
mono.render();


var mixed = d3.daisy.layout.line()
  .container('#content3')
  .data(dataset)
  .dimensions(['x'])
  .measures([{field:'y', op:'mean'}, {field:'z', op:'mean'}])
  .axis('x').axis('y')
  .legend(true)
  .point(true)
  .label(true)
  .customDomain([0,200]);
mixed.render();

var groupedArea = d3.daisy.layout.line()
  .shape('area')
  .container('#content4')
  .data(dataset)
  .dimensions(['z', 'c'])
  .measures({field:'y', op:'mean'})
  .stacked(false)
  .axis('x').axis('y')
  .legend(true);
groupedArea.render();

var stackedArea = d3.daisy.layout.line()
  .shape('area')
  .container('#content5')
  .data(dataset)
  .dimensions(['x', 'c'])
  .measures({field:'y', op:'mean'})
  .stacked(true)
  .axis('x').axis('y')
  .legend(true);
stackedArea.render();

var stackedAreaNormalized = d3.daisy.layout.line()
  .shape('area')
  .container('#content5')
  .data(dataset)
  .dimensions(['x', 'c'])
  .measures({field:'y', op:'mean'})
  .stacked(true)
  .normalized(true)
  .axis('x').axis('y')
  .legend(true)
  .label(true);
stackedAreaNormalized.render();

var mixedStacked = d3.daisy.layout.line()
  .shape('area')
  .container('#content6')
  .data(dataset)
  .dimensions(['x'])
  .measures([{field:'y', op:'mean'}, {field:'z', op:'mean'}])
  .stacked(true)
  .axis('x').axis('y')
  .legend(true);
mixedStacked.render();

var stepped = d3.daisy.layout.line()
  .container('#content7')
  .data(dataset)
  .shape('area')
  .stacked(true)
  .dimensions(['x', 'c'])
  .measures({field:'y', op:'mean'})
  .curve('stepped')
  .axis('x').axis('y')
  .legend(true);
stepped.render();


var hist = d3.daisy.layout.line() //measure가 없는 경우
  .container('#content8')
  .data(dataset)
  .dimensions(['x', 'c'])
  .stacked(true)
  .axis('x').axis('y')
  .legend(true);
hist.render();

var curved = d3.daisy.layout.line()
  .container('#content9')
  .data(dataset)
  .shape('area')
  .stacked(true)
  .dimensions(['x', 'c'])
  .measures({field:'y', op:'mean'})
  .curve('curved') // 일단 catmul-rom curve를 사용
  .axis('x').axis('y')
  .legend(true)
  .point(true);
curved.render();
