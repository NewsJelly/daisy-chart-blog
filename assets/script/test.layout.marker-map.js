var latLngPoints = d3.range(0,20).map(function(d,i) {
    return {lat: 36.5 + (Math.random()-0.5) * 0.5, lng: 128 + (Math.random()-0.5) * 0.5, key : (i+1), value : Math.random()*100};
  });
  var addrPoints = [
    {"name":'개포1동주민센터', 'addr':'서울특별시 강남구 개포로 310', 'size':90},
    {"name":'개포2동주민센터', 'addr':'서울특별시 강남구 개포로 511', 'size':90},
    {"name":'개포4동주민센터', 'addr':'서울특별시 강남구 개포로38길 12', 'size':10},
    {"name":'논현1동주민센터', 'addr':'서울특별시 강남구 학동로20길 25', 'size':10},
    {"name":'논현2동주민센터', 'addr':'서울특별시 강남구 학동로43길 17', 'size':20},
    {"name":'대치1동주민센터', 'addr':'서울특별시 강남구 남부순환로391길 19', 'size':45},
    {"name":'대치2동주민센터', 'addr':'서울특별시 강남구 영동대로65길 24', 'size':85},
    {"name":'대치4동주민센터', 'addr':'서울특별시 강남구 도곡로77길 23', 'size':35},
    {"name":'도곡1동주민센터', 'addr':'서울특별시 강남구 도곡로18길 7', 'size':68},
    {"name":'도곡2동주민센터', 'addr':'서울특별시 강남구 남부순환로378길 34-9', 'size':72},
    {"name":'삼성1동주민센터', 'addr':'서울특별시 강남구 봉은사로 616', 'size':53},
    {"name":'삼성2동주민센터', 'addr':'서울특별시 강남구 봉은사로  419', 'size':68},
    {"name":'세곡동주민센터', 'addr':'서울특별시 강남구 밤고개로 286', 'size':35},
    {"name":'수서동주민세터', 'addr':'서울특별시 강남구 광평로 301-4', 'size':24},
    {"name":'신사동주민센터', 'addr':'서울특별시 강남구 압구정로 128', 'size':89},
    {"name":'압구정동주민센터', 'addr':'서울특별시 강남구 압구정로33길 48', 'size':48},
    {"name":'역삼1동주민센터', 'addr':'서울특별시 강남구 역삼로7길 16', 'size':38},
    {"name":'역삼2동주민센터', 'addr':'서울특별시 강남구 도곡로43길 25', 'size':20},
    {"name":'일원1동주민센터', 'addr':'서울특별시 강남구 양재대로55길 14', 'size':10},
    {"name":'일원2동주민센터', 'addr':'서울특별시 강남구 개포로  607', 'size':10}
  ];
//현재 위도-경도를 measure로 설정하는 경우에만 표현 가능
var normal= d3.daisy.layout.markerMap()
  .container('#content')
  .data(latLngPoints)
  .addr(false)
  .dimensions(['key']) // 주소의 키 (툴팁에만 사용. 없어도 무방) //
  .measures(['lat', 'lng', 'value']) // 첫번째는 위도, 다음은 경도, 다음은 크기(별도의 집산 적용 없음)
  .label(true);
normal.render();


var point= d3.daisy.layout.markerMap()
  .container('#content2')
  .data(latLngPoints)
  .addr(false)
  .dimensions(['key']) // 주소의 키 (없어도 됨) //
  .measures(['lat', 'lng']) // 첫번째는 위도, 다음은 경도
  .color('darkgreen')
  .label(true);
point.render();

var noKey= d3.daisy.layout.markerMap()
  .container('#content3')
  .data(latLngPoints)
  .addr(false)
  .measures(['lat', 'lng', 'value']) // 첫번째는 위도, 다음은 경도
  .overlayMapType('OVERLAY');
noKey.render();

var addr= d3.daisy.layout.markerMap()
  .container('#content4')
  .data(addrPoints)
  .addr(true)
  .dimensions(['name']) // 주소의 키 (없어도 됨) //
  .measures(['addr', 'size']) // 첫번째는 주소, 다음은 크기
  .mapBaseType('SKYVIEW');
addr.render();


var addrPoint= d3.daisy.layout.markerMap()
  .container('#content5')
  .data(addrPoints)
  .addr(true)
  .dimensions(['name']) // 주소의 키 (없어도 됨) //
  .measures(['addr']); // 첫번째는 주소, 다음은 크기

addrPoint.render();

var noKeyAddr= d3.daisy.layout.markerMap()
  .container('#content6')
  .data(addrPoints)
  .addr(true)
  .measures(['addr', 'size'])// 첫번째는 주소, 다음은 크기
  .label(true);
noKeyAddr.render();
