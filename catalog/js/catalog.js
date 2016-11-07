window.onload = function() {
	tab("tab_t", "li", "tab_c", "div", "onmouseover")

	function tab(tab_t, tab_t_tag, tab_c, tag_c_tag, evt) {
		var tab_t = document.getElementById(tab_t);
		var tab_t_li = tab_t.getElementsByTagName(tab_t_tag);
		var tab_c = document.getElementById(tab_c);
		var tab_c_li = tab_c.getElementsByTagName(tag_c_tag);
		var len = tab_t_li.length;
		var i = 0;
		for (i = 0; i < len; i++) {
			tab_t_li[i].index = i;
			tab_t_li[i][evt] = function() {
				for (i = 0; i < len; i++) {
					tab_t_li[i].className = '';
					tab_c_li[i].className = 'hide';
				}
				tab_t_li[this.index].className = 'act';
				tab_c_li[this.index].className = '';
			}
		}
	}
}
$(document).ready(function() {
	$("#tab_t").hover(function() {
		//		$("#tab_c").css({
		//			"visibility": "visible"
		//		});
		//		tab appears
		$("#tab_c").show(100);
	});
	$(".catalog").mouseleave(function() {
		//		$("#tab_c").css({
		//			"visibility": "hidden"
		//		});
		//		tab disappears
		$("#tab_c").hide(100);
		//		li colorback
		$(".act li").css({
			"background-color": "#888"
		});
	});
});