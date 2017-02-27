import $ from 'jquery'
import _ from 'lodash'
import showdown from 'showdown'
import 'normalize-css'
import './css/sa.sass'

$(function() {
  $(".section").each((i, o) => {
		console.log($(o));
		var range = 50;
		$(o).css("margin-left", _.random(-range, range) + "px");
		$(o).css("margin-right", _.random(-range, range) + "px");
		$(o).css("margin-top", _.random(-range, range) + "px");
		$(o).css("margin-bottom", _.random(-range, range) + "px");
	});
});

$("#test").html("test worked!");
