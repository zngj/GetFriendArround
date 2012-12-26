var map ;
var localSearch ;
var currentMarker;
var infoWindow1 = new BMap.InfoWindow("请把此标记拖到你所指定的位置！才能查找你附近的人!");
$(document).ready(function(){
	map = new BMap.Map("map");
	map.enableScrollWheelZoom();
	map.addControl(new BMap.OverviewMapControl());
	map.addControl(new BMap.ScaleControl({anchor: BMAP_ANCHOR_BOTTOM_LEFT}));
	map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
	localSearch = new BMap.LocalSearch(map, {
	  renderOptions:{map: map}
	});
	localSearch.enableAutoViewport();
	localSearch.setSearchCompleteCallback(onSearchComplete);
});


function search(){
    localSearch.search(document.getElementById("keyword").value);
}
function onSearchComplete(results){
	// 判断状态是否正确
    if (localSearch.getStatus() == BMAP_STATUS_SUCCESS){
      var s = [];
      for (var i = 0; i < results.getCurrentNumPois(); i ++){
        s.push(results.getPoi(i).title + ", " + results.getPoi(i).address);
      }
      document.getElementById("r-result").innerHTML = s.join("<br/>");
    }
    //currentMarker = new BMap.Marker(map.getCenter());
	//currentMarker.enableDragging();
	//map.addOverlay(currentMarker);  
	//currentMarker.openInfoWindow(infoWindow1);	
}