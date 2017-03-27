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

var normal= d3.daisy.layout.scatter()
  .container('#content')
  .data(dataset)
  .measures(['y', 'z'])
  .axis('x').axis('y')
  .grid(true)
  .label(true)
  .customDomain([[0,200], [0,200]]); //[[xMin, xMax], [yMin, yMax]]
normal.render();

var color= d3.daisy.layout.scatter()
  .container('#content2')
  .data(dataset)
  .dimensions(['c'])
  .measures(['y','z'])
  .axis('x').axis('y')
  .size(8)
  .customDomain([[], [0,200]]); //빈배열로 전달하면 기본값 사용
color.render();

var bubble= d3.daisy.layout.scatter()
  .container('#content3')
  .data(dataset)
  .size([2,24]) //bubble 반지름 크기의 최대 최소를 결정한다. default는 3, 12
  .measures(['x', 'z', 'y'])
  .axis('x').axis('y');
bubble.render();

var mixed= d3.daisy.layout.scatter()
  .container('#content4')
  .data(dataset)
  //.size([2,24])default는 [3, 12]가 적용된다
  .dimensions(['c'])
  .measures(['x','y', 'z'])
  .axis('x').axis('y')
  .label(true);
mixed.render();
