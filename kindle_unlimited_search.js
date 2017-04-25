/**
 * Kindle Unlimitedの検索
 *
 * javascript:(function(){var%20s=document.createElement("script");s.src="https://github.com/kenhime/js/blob/master/kindle_unlimited_search.js?"+new%20Date().getTime();document.body.appendChild(s)})();
 *
 */

var amz = {};

(function(t) {

	var word = document.getElementById("twotabsearchtextbox");
	location.href = "https://www.amazon.co.jp/s/?url=node%3D4486610051&sort=date-desc-rank&field-keywords=" + encodeURIComponent(word.value);

})(amz);
