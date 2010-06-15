/*
Plugin:			Initial Letter v1.0

	Created:	April, 29 2010
	 Author:	Benjamin Gandhi-Shepard
	License:	Dual licensed under the MIT and GPL licenses:
 				* http://www.opensource.org/licenses/mit-license.php
 				* http://www.gnu.org/licenses/gpl.html
	
Description:	http://812studio.com/initial-letter-a-jquery-plugin-for-making-drop-caps-and-more/
*/

(function ($) {

	$.fn.initialLetter = function (options) {

		var $options = $.extend({}, $.fn.initialLetter.defaults, options);

		return this.each(function () {

			var $initialLetter = $options.initialLetter,
				$content = $(this).html();

			$(this).html($content.replace(/^([A-Za-z0-9])/g, '<span class=' + $initialLetter + '>$1</span>'));
			
			$.fn.initialLetter.defaults = {initialLetter : 'dropped'};

		});

	};

}(jQuery));