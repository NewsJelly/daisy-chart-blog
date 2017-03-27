var dataset = [
        {"x": 0, "y": 50, "z": 50, "sc": "A", "c":"파랑파랑파랑"}, {"x": 0, "y": 55, "z": 44, "sc": "A", "c":"orange"},
        {"x": 1, "y": 43, "z": 23, "sc": "A", "c":"파랑파랑파랑"}, {"x": 1, "y": 20, "z": 20, "sc": "A", "c":"orange"},
        {"x": 2, "y": 81, "z": 81, "sc": "A", "c":"파랑파랑파랑"}, {"x": 2, "y": 53, "z": 29, "sc": "A", "c":"orange"},
        {"x": 3, "y": 19, "z": 19, "sc": "A", "c":"파랑파랑파랑"}, {"x": 3, "y": 87, "z": 87, "sc": "A", "c":"orange"},
        {"x": 4, "y": 52, "z": 52, "sc": "A", "c":"파랑파랑파랑"}, {"x": 4, "y": 48, "z": 43, "sc": "A", "c":"orange"},
        {"x": 5, "y": 24, "z": 34, "sc": "A", "c":"파랑파랑파랑"}, {"x": 5, "y": 49, "z": 79, "sc": "A", "c":"orange"},
        {"x": 6, "y": 87, "z": 87, "sc": "A", "c":"파랑파랑파랑"}, {"x": 6, "y": 66, "z": 66, "sc": "A", "c":"orange"},
        {"x": 7, "y": 17, "z": 17, "sc": "A", "c":"파랑파랑파랑"}, {"x": 7, "y": 27, "z": 27, "sc": "A", "c":"orange"},
        {"x": 8, "y": 68, "z": 98, "sc": "A", "c":"파랑파랑파랑"}, {"x": 8, "y": 16, "z": 56, "sc": "A", "c":"orange"},
        {"x": 9, "y": 49, "z": 49, "sc": "A", "c":"파랑파랑파랑"}, {"x": 9, "y": 15, "z": 15, "sc": "A", "c":"orange"},
        {"x": 0, "y": 30, "z": 10, "sc": "A", "c":"파랑파랑파랑"}, {"x": 0, "y": 20, "z": 20, "sc": "A", "c":"orange"},
        {"x": 1, "y": 43, "z": 53, "sc": "A", "c":"파랑파랑파랑"}, {"x": 1, "y": 91, "z": 91, "sc": "A", "c":"orange"},
        {"x": 2, "y": 81, "z": 81, "sc": "A", "c":"파랑파랑파랑"}, {"x": 2, "y": 53, "z": 53, "sc": "A", "c":"orange"},
        {"x": 3, "y": 19, "z": 19, "sc": "A", "c":"파랑파랑파랑"}, {"x": 3, "y": 87, "z": 47, "sc": "A", "c":"orange"},
        {"x": 4, "y": 52, "z": 12, "sc": "A", "c":"파랑파랑파랑"}, {"x": 4, "y": 48, "z": 48, "sc": "A", "c":"orange"},
        {"x": 5, "y": 24, "z": 24, "sc": "A", "c":"파랑파랑파랑"}, {"x": 5, "y": 49, "z": 39, "sc": "A", "c":"orange"},
        {"x": 6, "y": 87, "z": 17, "sc": "A", "c":"파랑파랑파랑"}, {"x": 6, "y": 66, "z": 66, "sc": "A", "c":"orange"},
        {"x": 7, "y": 17, "z": 17, "sc": "A", "c":"파랑파랑파랑"}, {"x": 7, "y": 27, "z": 17, "sc": "A", "c":"orange"},
        {"x": 8, "y": 68, "z": 68, "sc": "A", "c":"파랑파랑파랑"}, {"x": 8, "y": 16, "z": 26, "sc": "A", "c":"orange"},
        {"x": 9, "y": 49, "z": 49, "sc": "A", "c":"파랑파랑파랑"}, {"x": 9, "y": 15, "z": 15, "sc": "A", "c":"orange"},
        {"x": 9, "y": 49, "z": 49, "sc": "A", "c":"파랑파랑파랑"}, {"x": 9, "y": 15, "z": 15, "sc": "A", "c":"orange"},

        {"x": 10, "y": 50, "z": 50, "sc": "A", "c":"파랑파랑파랑"}, {"x": 10, "y": 55, "z": 44, "sc": "A", "c":"orange"},
        {"x": 11, "y": 43, "z": 23, "sc": "A", "c":"파랑파랑파랑"}, {"x": 11, "y": 20, "z": 20, "sc": "A", "c":"orange"},
        {"x": 12, "y": 81, "z": 81, "sc": "A", "c":"파랑파랑파랑"}, {"x": 12, "y": 53, "z": 29, "sc": "A", "c":"orange"},
        {"x": 13, "y": 19, "z": 19, "sc": "A", "c":"파랑파랑파랑"}, {"x": 13, "y": 87, "z": 87, "sc": "A", "c":"orange"},
        {"x": 14, "y": 52, "z": 52, "sc": "A", "c":"파랑파랑파랑"}, {"x": 14, "y": 48, "z": 43, "sc": "A", "c":"orange"},
        {"x": 15, "y": 24, "z": 34, "sc": "A", "c":"파랑파랑파랑"}, {"x": 15, "y": 49, "z": 79, "sc": "A", "c":"orange"},
        {"x": 16, "y": 87, "z": 87, "sc": "A", "c":"파랑파랑파랑"}, {"x": 16, "y": 66, "z": 66, "sc": "A", "c":"orange"},
        {"x": 17, "y": 17, "z": 17, "sc": "A", "c":"파랑파랑파랑"}, {"x": 17, "y": 27, "z": 27, "sc": "A", "c":"orange"},
        {"x": 18, "y": 68, "z": 98, "sc": "A", "c":"파랑파랑파랑"}, {"x": 18, "y": 16, "z": 56, "sc": "A", "c":"orange"},
        {"x": 19, "y": 49, "z": 49, "sc": "A", "c":"파랑파랑파랑"}, {"x": 19, "y": 15, "z": 15, "sc": "A", "c":"orange"},
        {"x": 10, "y": 30, "z": 10, "sc": "A", "c":"파랑파랑파랑"}, {"x": 10, "y": 20, "z": 20, "sc": "A", "c":"orange"},
        {"x": 11, "y": 43, "z": 53, "sc": "A", "c":"파랑파랑파랑"}, {"x": 11, "y": 91, "z": 91, "sc": "A", "c":"orange"},
        {"x": 12, "y": 81, "z": 81, "sc": "A", "c":"파랑파랑파랑"}, {"x": 12, "y": 53, "z": 53, "sc": "A", "c":"orange"},
        {"x": 13, "y": 19, "z": 19, "sc": "A", "c":"파랑파랑파랑"}, {"x": 13, "y": 87, "z": 47, "sc": "A", "c":"orange"},
        {"x": 14, "y": 52, "z": 12, "sc": "A", "c":"파랑파랑파랑"}, {"x": 14, "y": 48, "z": 48, "sc": "A", "c":"orange"},
        {"x": 15, "y": 24, "z": 24, "sc": "A", "c":"파랑파랑파랑"}, {"x": 15, "y": 49, "z": 39, "sc": "A", "c":"orange"},
        {"x": 16, "y": 87, "z": 17, "sc": "A", "c":"파랑파랑파랑"}, {"x": 16, "y": 66, "z": 66, "sc": "A", "c":"orange"},
        {"x": 17, "y": 17, "z": 17, "sc": "A", "c":"파랑파랑파랑"}, {"x": 17, "y": 27, "z": 17, "sc": "A", "c":"orange"},
        {"x": 18, "y": 68, "z": 68, "sc": "A", "c":"파랑파랑파랑"}, {"x": 18, "y": 16, "z": 26, "sc": "A", "c":"orange"},
        {"x": 19, "y": 49, "z": 49, "sc": "A", "c":"파랑파랑파랑"}, {"x": 19, "y": 15, "z": 15, "sc": "A", "c":"orange"},
        {"x": 19, "y": 49, "z": 49, "sc": "A", "c":"파랑파랑파랑"}, {"x": 19, "y": 15, "z": 15, "sc": "A", "c":"orange"},

        {"x": 0, "y": 22, "z": 50, "sc":"B", "c":"orange"}, {"x": 0, "y": 55, "z": 24, "sc":"B", "c":"green"},
        {"x": 1, "y": 34, "z": 23, "sc":"B", "c":"orange"}, {"x": 1, "y": 20, "z": 34, "sc":"B", "c":"green"},
        {"x": 2, "y": 81, "z": 81, "sc":"B", "c":"orange"}, {"x": 2, "y": 53, "z": 29, "sc":"B", "c":"green"},
        {"x": 3, "y": 19, "z": 19, "sc":"B", "c":"orange"}, {"x": 3, "y": 87, "z": 87, "sc":"B", "c":"green"},
        {"x": 4, "y": 52, "z": 52, "sc":"B", "c":"orange"}, {"x": 4, "y": 48, "z": 43, "sc":"B", "c":"green"},
        {"x": 5, "y": 24, "z": 34, "sc":"B", "c":"orange"}, {"x": 5, "y": 49, "z": 79, "sc":"B", "c":"green"},
        {"x": 6, "y": 87, "z": 87, "sc":"B", "c":"orange"}, {"x": 6, "y": 66, "z": 66, "sc":"B", "c":"green"},
        {"x": 7, "y": 17, "z": 17, "sc":"B", "c":"orange"}, {"x": 7, "y": 27, "z": 27, "sc":"B", "c":"green"},
        {"x": 8, "y": 68, "z": 98, "sc":"B", "c":"orange"}, {"x": 8, "y": 16, "z": 56, "sc":"B", "c":"green"},
        {"x": 9, "y": 49, "z": 49, "sc":"B", "c":"orange"}, {"x": 9, "y": 15, "z": 15, "sc":"B", "c":"green"},
        {"x": 0, "y": 30, "z": 10, "sc":"B", "c":"orange"}, {"x": 0, "y": 20, "z": 20, "sc":"B", "c":"green"},
        {"x": 1, "y": 43, "z": 53, "sc":"B", "c":"orange"}, {"x": 1, "y": 91, "z": 91, "sc":"B", "c":"green"},
        {"x": 2, "y": 81, "z": 81, "sc":"B", "c":"orange"}, {"x": 2, "y": 53, "z": 53, "sc":"B", "c":"green"},
        {"x": 3, "y": 19, "z": 19, "sc":"B", "c":"orange"}, {"x": 3, "y": 87, "z": 47, "sc":"B", "c":"green"},
        {"x": 4, "y": 52, "z": 12, "sc":"B", "c":"orange"}, {"x": 4, "y": 48, "z": 48, "sc":"B", "c":"green"},
        {"x": 5, "y": 24, "z": 24, "sc":"B", "c":"orange"}, {"x": 5, "y": 49, "z": 39, "sc":"B", "c":"green"},
        {"x": 6, "y": 87, "z": 17, "sc":"B", "c":"orange"}, {"x": 6, "y": 66, "z": 66, "sc":"B", "c":"green"},
        {"x": 7, "y": 17, "z": 17, "sc":"B", "c":"orange"}, {"x": 7, "y": 27, "z": 17, "sc":"B", "c":"green"},
        {"x": 8, "y": 68, "z": 68, "sc":"B", "c":"orange"}, {"x": 8, "y": 16, "z": 26, "sc":"B", "c":"green"},
        {"x": 9, "y": 49, "z": 49, "sc":"B", "c":"orange"}, {"x": 9, "y": 15, "z": 15, "sc":"B", "c":"green"},
        {"x": 9, "y": 49, "z": 49, "sc":"B", "c":"orange"}, {"x": 9, "y": 15, "z": 15, "sc":"B", "c":"green"}
      ];

var normal = d3.daisy.layout.treemap()
  .container('#content')
  .data(dataset)
  .dimensions(['c'])
  .measures({field:'y', op:'mean'})
  .label(true);

normal.render();


var hist = d3.daisy.layout.treemap()
  .container('#content2')
  .data(dataset)
  .dimensions(['c']);

hist.render();

var nested = d3.daisy.layout.treemap()
  .container('#content3')
  .data(dataset)
  .dimensions(['sc', 'c', 'x'])
  .measures({field:'y', op:'mean'})
  .label(true)
  .size([400, 400]);
nested.render();

var nestedHist = d3.daisy.layout.treemap()
  .container('#content4')
  .data(dataset)
  .dimensions(['sc', 'c', 'x']);

nestedHist.render();


var pack = d3.daisy.layout.treemap()
  .container('#content5')
  .data(dataset)
  .shape('pack')
  .dimensions(['sc', 'c', 'x'])
  .measures({field:'y', op:'mean'});

pack.render();

var color = d3.daisy.layout.treemap()
  .container('#content6')
  .data(dataset)
  .color(['#ffffe0','#f47461','#8b0000'])
  .dimensions(['sc', 'c', 'x'])
  .measures({field:'y', op:'mean'});

color.render();


var ascending = d3.daisy.layout.treemap()
  .container('#content7')
  .data(dataset)
  .color(['#ffffe0','#f47461','#8b0000'])
  .dimensions(['sc', 'c', 'x'])
  .measures({field:'y', op:'mean'})
  .sortByValue('ascending');

ascending.render();


var descending = d3.daisy.layout.treemap()
  .container('#content8')
  .data(dataset)
  .color(['#ffffe0','#f47461','#8b0000'])
  .dimensions(['sc', 'c', 'x'])
  .measures({field:'y', op:'mean'})
  .sortByValue('descending');

descending.render();


var wordDataset = [{name:  '할지니,', value: 10},
{name: '귀는', value: 10},
{name: '사람은', value: 10},
{name: '인생에', value: 10},
{name: '돋고,', value: 10},
{name: '평화스러운', value: 10},
{name: '우리', value: 10},
{name: '그들은', value: 10},
{name: '끓는다.', value: 10},
{name: '하여도', value: 10},
{name: '석가는', value: 10},
{name: '이것을', value: 10},
{name: '천지는', value: 10},
{name: '든', value: 10},
{name: '보이는', value: 10},
{name: '이것이다.', value: 10},
{name: '가슴이', value: 10},
{name: '얼음', value: 10},
{name: '우리의', value: 10},
{name: '사막이다.', value: 10}];

wordDataset.forEach(function(d) {
  d.value = Math.round(Math.random()*90 + 10);
});


var word = d3.daisy.layout.treemap()
  .container('#content9')
  .data(wordDataset)
  .color(['#ffffe0','#f47461','#8b0000'])
  .dimensions(['name'])
  .measures({field:'value', op:'mean'})
  .shape('word');

word.render();
