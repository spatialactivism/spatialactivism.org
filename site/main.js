import $ from 'jquery'
import _ from 'lodash'
import showdown from 'showdown'
import 'normalize-css'
import './css/sa.sass'

$(function() {
  $(".section").each((i, o) => {
		console.log($(o));
		var range = 20;
		$(o).css("margin-left", _.random(-range, range) + "px");
		$(o).css("margin-right", _.random(-range, range) + "px");
		$(o).css("margin-top", _.random(-range, range) + "px");
		$(o).css("margin-bottom", _.random(-range, range) + "px");
    //I'm just playing, feel free to get rid of this
//    $(o).css("background-color", i%2 == 0 ? 'rgba(255,200,200,0.5)' : 'rgba(200,200,255,0.5)');
	});
});

$("#test").html("test worked!");
