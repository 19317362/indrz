var startCenterX = -168527.958404064;
var startCenterY = 5983885.94934575;
var baseUrlWms =  'http://176.28.23.163:8080/geoserver/indrz/wms';
var zoom_level="{{ zoom_level }}";
var building_id="{{ building_id }}";
var active_floor_num="{{floor_num}}";
var space_id="{{ space_id }}";
var floor_layers = [];
var timer_waitfor_floor = null;
var building_info = null;
var map_name="{{map_name}}";
var route_from = "{{route_from}}";
var route_to = "{{route_to}}";
var centerx = "{{centerx}}";
var centery = "{{centery}}";