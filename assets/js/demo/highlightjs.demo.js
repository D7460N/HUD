/*
Template Name: HUD - Responsive Bootstrap 5 Admin Template
Version: 3.0.0
Author: Sean Ngu
Website: http://www.seantheme.com/hud/
*/

var handleInitHighlightJs = function() {
	$('.hljs-container pre code').each(function(i, block) {
		var dataUrl = $(this).attr('data-url');
		if (dataUrl) {
			$.ajax({
				url: dataUrl,
				dataType: 'html',
				success: function(data) {
					if (data) {
						$(block).html(data);
					}
					hljs.highlightElement(block);
				},
				error: function(data) {
					hljs.highlightElement(block);
				}
			});
		} else {
			hljs.highlightElement(block);
		}
	});
};


/* Controller
------------------------------------------------ */
$(document).ready(function() {
	handleInitHighlightJs();
});