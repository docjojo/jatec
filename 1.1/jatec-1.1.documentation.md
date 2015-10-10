# jATEC v1.1 - Documentation
## ATEC-Systems Javascript Framework

|Variable			|Description
|---        		|---
| pw,ph         	|pageWidth and pageHeight if DefineScreen() is called
|preload_pics		|Array for PreLoadImg()
|xmlHttp			|Ajax object
|fadein_timer		|timer for Fade() functions.


|Function                             	|Description  																		|Example
|---        	  						|---																				|---
|AjaxObject()           	            |Create and return an ajax object; Returns "false", if object can not be created.  	|xmlHttp=AjaxObject();
|AjaxReady()    	                    |Returns true if (xmlHttp.readyState==4 && xmlHttp.status == 200). 	                |if (AjaxReady()) Loading(0);
|AjaxAbort()                          	|Stops current ajax request.  	                                                    |
|AjaxInteractive()                   	|Current ajax request is busy.  	                                                |
|AjaxCall(what,fct)                 	|Make an ajax call and run a function, when call is complete. This function calls the Loading() function. See above for explanation. Parameters: "what" is the location/URL to call; "fct" is the function to run, after the call.              |AjaxCall("debug.php",function () {AjaxReturn('content');});
|AjaxReturn(id)                  	    |This function can be used in AjaxCall(). It will assign the content, returned form the ajax call, to the innerHTML of the object given in "id".	                                                                                                |Example: See above. 
|SetOpacity(id,opa)                 	|Set object opacity. Parameters: "id" of DOM object, "opa" as opacity in percent.   |SetOpacity('debug',50);
|Delay(millis)                          |Delay in milliseconds.                                                     |Delay(1000)
|FadeIn(id,opacity)                     |Slowly fading an object; This functions calls itself until opacity is 100%.|FadeIn('debug',0);
|FadeOut(id,opacity)                    |See above, but fading out.                                                 |FadeOut('debug',100);
|PageWidth(), PageHeight()              |Returns browser window width/height in pixel.                              |var width=PageWidth();
|ResizeObject(id,width_px,height_px)    |Change object width and height.                                            |ResizeObject('debug',100,100);
|SetObjectWidth(id,width_px)            |Change object width.                                                       |SetObjectWidth('debug',100);
|SetObjectHeight(id,px)                 |Change object height.                                                      |SetObjectHeight('debug',100);
|GetObjectWidth(id)                     |Returns object width in pixel.                                             |var width=GetObjectWidth();
|GetObjectHeight(id)                    |Returns object height in pixel.                                            |var height=GetObjectHeight();
|Resize(x,y)                            |Resize the browser window.                                                 |Resize(640,480);	
|Maximize()                             |Maximize the browser window.                                               |Maximize();
|DefineScreen()                         |Get the page width/height in pixel and store the values in "pw" and "ph".  |DefineScreen();
|GetObjectPositionLeft(id)              |Returns left position of an object.                                        |x=GetObjectPositionLeft('debug');
|GetObjectPositionTop(id)               		|Returns top position of an object.                                 |y=GetObjectPositionTop('debug');
|SetObjectPosition(id,left_px,top_px)   |Set position of an object.                                                 |SetObjectPosition('debug',100,100);
|Dom(id)                                |Short form to get to an object by id.                                      |Dom('debug').innerHTML='Debug window.';
|iHTML(id,text)                         |Replace the content of an object (= innerHTML).                            |iHTML('news','No news today.');
|KillElement(id)                        |Delete an object from the DOM.                                             |KillElement('debug'); 
|AddNewStyleRule (name,attrib)          |Add a new style definition.                                                |AddNewStyleRule("INPUT","color:black");
|ShowHide(id,visible)                   |Change object visibility; Parameters: "id" of DOM object, "visible" as boolean.|ShowHide('debug',true); 
|ShowHideArray(a,visible)               |Same as ShowHide(), but expects an array of objects.           			    |ShowHideArray(array['debug','log'],false);
|DisplayHide(id,display)                |Change object display attribute; Parameters: "id" of DOM object, "display" as value ("none", "block", "inline" etc.).    
																										|DisplayHide('debug','none'); 
|DisplayHideArray(a,display)            |Same as DisplayHide(), but expects an array of objects.        |DisplayHideArray(array['debug','log'],'inline');
|PreLoadImg(dir,name)                   |PreLoads images into array;                                    |PreLoadImg('directory','filename.extension');
	