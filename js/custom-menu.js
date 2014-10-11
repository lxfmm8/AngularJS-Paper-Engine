/* 
 * a couple of functions created for business catalyst
 */
function initAll(){
	initFixBreadCrumbs();
}
/* 
 * function removes last link from breadcrumbs
 * and last tag <br />
 */
function initFixBreadCrumbs(){
	var _breadcrumbs = document.getElementsByTagName("div")
	for(var i = 0; i < _breadcrumbs.length; i++){
		if(_breadcrumbs[i].className.indexOf("breadcrumbs") != -1){
			var _breadItem = _breadcrumbs[i].getElementsByTagName("a");
			var _last = _breadItem.length - 1;
			_breadcrumbs[i].innerHTML = _breadcrumbs[i].innerHTML + _breadItem[_last].innerHTML;
			_breadItem[_last].parentNode.removeChild(_breadItem[_last]);
			var _br = _breadcrumbs[i].getElementsByTagName("br");
			for(var j = 0; j < _br.length; j++) _br[j].parentNode.removeChild(_br[j]);
		}
	}
}

if (window.addEventListener)
	window.addEventListener("load", initAll, false);
else if (window.attachEvent && !window.opera)
	window.attachEvent("onload", initAll);
