// jATEC - ATEC-Systems Javascript Framework
// Copyright 2010/13 by Chris Ahrweiler
// v1.10	2013-11-22
// No warranty no guarantee. Use at your own risk.
//
// http://www.atec-systems.com/jatec/jatec.js (plain text)
// http://www.atec-systems.com/jatec/jatec.min.js (compressed)
// http://www.atec-systems.com/jatec/jatec.html (manual)
// http://www.atec-systems.com/jatec/jatec.version.txt (version history)
// http://www.atec-systems.com/jatec/jatec.php (gzip/cacheable)

var pw, ph, preload_pics=[], xmlHttp=AjaxObject(), fadein_timer;

//AJAX
function AjaxObject()
{
	var ajax;
	try {ajax=new XMLHttpRequest();} catch (e) {try{ajax=new ActiveXObject("Msxml2.XMLHTTP");} catch (e) {try{ajax=new ActiveXObject("Microsoft.XMLHTTP");} catch (e) {alert("Ajax is not available!");};};};
	return ajax;
};
function AjaxLoading() {};
function AjaxReady() { return (xmlHttp.readyState===4 && xmlHttp.status === 200); }
function AjaxInteractive() { return (xmlHttp.readyState>0 && xmlHttp.readyState<4); }
function AjaxAbort() { xmlHttp.onreadystatechange = function () {}; xmlHttp.abort(); };
function AjaxCall(url,fct)
{
	if (AjaxInteractive()) { AjaxBusy(url); return; };
	AjaxLoading(1);
	xmlHttp.open("get", url);
 	xmlHttp.onreadystatechange = function() { if (AjaxReady()) { fct.call(); AjaxLoading(0); } };
	xmlHttp.send(null);
	return false;
};

function AjaxReturn(id) { $(id).innerHTML=xmlHttp.responseText; };

// Animation
function SetOpacity(id,o)
{
	var obj=$(id); obj.style.MozOpacity = ((o/100)+0.001); obj.style.opacity = (o/100)+0.001; obj.style.filter = "alpha(opacity="+o+")";
	if (o==100 && obj.style.filter && obj.style.removeAttribute) obj.style.removeAttribute('filter');
};
function Delay(millis) {var date = new Date(), curDate = null; do {curDate = new Date();} while(curDate-date < millis);};
function FadeIn(id,o) {if (o <= 100) { SetOpacity(id,o); o += 5; fadein_timer=window.setTimeout("FadeIn('"+id+"',"+o+")", 20);};};
function FadeOut(id) { SetOpacity(id,0); window.clearTimeout(fadein_timer); };

// Object size and position
function DefineScreen() { pw=PageWidth(), ph=PageHeight(); }
function Resize(x,y) { window.resizeTo(x,y); };
function Maximize() { window.resizeTo(screen.width,screen.height); };
function PageWidth() { var pw=document.documentElement.clientWidth; if (pw!=0) return pw; pw=document.body.clientWidth; if (pw!=0) return pw; return window.innerWidth; };
function PageHeight() { var ph=document.documentElement.clientHeight; if (ph!=0) return ph; ph=document.body.clientHeight; if (ph!=0) return ph; return window.innerHeight; };

function GetObjectWidth(id) { return $(id).clientWidth; };
function GetObjectHeight(id) { return $(id).clientHeight; };
function SetObjectWidth(id,px) { $(id).style.width=px+"px"; };
function SetObjectHeight(id,px) { $(id).style.height=px+"px"; };
function ResizeObject(id,width,height) {var obj=$(id).style; obj.width=width+"px"; obj.height=height+"px";};

// Object position
function GetObjectPositionLeft(id) { return obj.offsetLeft; };
function GetObjectPositionTop(id) { return obj.offsetTop; }
function SetObjectPositionLeft(id,px) { var obj=$(id); obj.style.left=px+"px"; obj.style.posLeft=px; };
function SetObjectPositionTop(id,px) { var obj=$(id); obj.style.top=px+"px"; obj.style.posTop=px; };
function SetObjectPosition(id,left,top) { SetObjectPositionLeft(id,left); SetObjectPositionTop(id,top); };

// DOM
function $(id) { return document.getElementById(id); }
function Dom(id) { return $(id); }; //v1 compatibility
function iHTML(id,text) { if (obj=$(id)) obj.innerHTML=text; }
function KillElement(id) { node=$(id); if (node!=undefined && node.parentNode!=undefined) node.parentNode.removeChild(node); };

function AddNewStyleRule (name,attrib)
{
	var sheet = document.styleSheets[0];
	if (sheet.addRule) sheet.addRule(name, attrib); else if (sheet.insertRule) sheet.insertRule(name+" {"+attrib+"}",sheet.cssRules.length);
}
function ShowHideArray(a,visible) { for (var i=0;i<=a.length-1;i++) if ($(a[i])) ShowHide(a[i],visible);};
function ShowHide(id,visible) { $(id).style.visibility=(visible==undefined || visible==false)?'hidden':'visible'; };
function DisplayHideArray(a,display) { for (var i=0;i<=a.length-1;i++) if ($(a[i])) DisplayHide(a[i],display);};
function DisplayHide(id,display) { $(id).style.display=(display==undefined)?'none':display; };

// Images
function PreLoadImg(dir,name) {preload_pics[name] = new Image(); preload_pics[name].src=dir+name;};
function PreLoadImages(dir,arr) { for (var i=0;i<=arr.length-1;i++) PreLoadImg(dir,arr[i]);};
