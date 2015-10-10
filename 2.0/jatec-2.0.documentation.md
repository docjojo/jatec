# jATEC v2.0 - ATEC-Systems Javascript Framework
## Documentation


|Variable   |Description                                                                        |Default
|---        |---                                                                                |---
|ti         |Timer Array, for multiple timers                                                   |ti.fade=null
|debug      |Debugging enabled/disabled. Use with con() function to write the console.log         |debug=false

**Remarks**
* If a function expects an id as parameter, this id refers to a document.getElementById(id) object.
* Functions described as "return/set" expect a parameter.
If no parameter is given, they return the value that would otherwise be set.


|Function                               |Description  	                                                                     |Example
|---                    	            |---	                                                                             |---   
|InitDebug();                           |initialize debug features, such as con();                                           |
|con(text);                             |=console.log(text), which is enabled, when InitDebug(); is called.                  |
|Delay(millis)                          |delay in milliseconds.                                                              |Delay(1000);
|$(id)                                  |return document.getElementById(id)                                                  |$('test');
|$$(id).html(text)                      |return/set innerHTML                                                                |$('test').html('<p>test</p>');
|$$(id).left(px)                        |return/set left Position                                                            |$('test').left(100);
|$$(id).display(display)                |set display attribute; "none" if ’display’ is undefined                             |$('test').display('block');
|$$(id).visibility(visible)             |set visibility attribute; "hidden" if ’visible’ is undefined                        |$('test').visibility('visible');
|$$(id).opacity(o)                      |set opacity in percent                                                              |$('test').opacity(80);
|$$(id).height(px)                      |return/set height in pixel                                                          |$('test').height(10);
|$$(id).width(o)                        |return/set width in pixel                                                           |$('test').width(20);
|$$(id).bg(o)                           |set background color                                                                |$('test').width('#ddd');
|$$(id).position(left,top)              |set left, top position in pixel                                                     |$('test').position(10,20);
|$$(id).size(width,height)              |set width, height pixel                                                             |$('test').size(10,20);
|$$(id).remove()                        |remove object from dom                                                              |$('test').remove();
|Frm(id)                                |return form element                                                                 |Frm('test');
|Tbl(id)                                |return table element                                                                |Tbl('test');
|AddNewStyleRule(name,attrib)           |add new css style rule                                                              |AddNewStyleRule('div','color:black');
|DisplayArray(a,visible)                |run $$().display() on array ’a’                                                     |DisplayArray(['t1','t2'],'block');
|ShowArray(a,visible)                   |run $$().visibility() on array ’a’                                                  |ShowArray(['t1','t2'],'hidden');

|img.cache(dir,arr)                     |cache array of images ’arr' from directory 'dir'                                    |img.cache('images/',['ref.png','algo.png']);
|img.cycle(id,dir,arr,delay)            |slide show of images array ’arr' from directory 'dir' with delay                    |img.cycle('bw','',['1.jpg','2.jpg','3.jpg'],2000);


|inArray(arr,a)                         |find element 'a' in array 'arr'                                                     |con(inArray(['t1','t2'],'t3'));
|AppendScript(jsname,id)                |append a javascript file                                                            |AppendScript('scripts/flow.php','flow');
|AppendCSS(src)                         |append a css file                                                                   |AppendCSS('mobile.css');

|QueryString(key)                       |return window.location.search substring ’key’                                       |QueryString('page');

|base64.encode(s)                       |base64 encode 's'                                                                   |base64.encode("test");
|base64.decode(s)                       |base64 decode 's'                                                                   |base64.decode("dGVzdA==");

|Pad(t,i)                               |add '0' to string ’t’ until length=’i’                                              |Pad(t.getHours(),2);
|Time()                                 |return current time stamp                                                           |con(Time());
|Bench(start)                           |start timing, if ’start’=true, otherwise return time elapsed                        |Bench(true); con(Bench());

|css.init()                             |initialize css features                                                             |css.init();
|css.find(classname)                    |return css rule with "classname"                                                    |css.find('div');
|css.set(rule,attr,value)               |set attribute of css rule                                                           |css.set(css.find('div'),'float','left');

|hash.set(str)                          |set window.location.hash                                                            |hash.set('calendar');
|hash.get()                             |get window.location.hash                                                            |alert(hash.get());

|cookie.set(c_name,value,expiredays)    |set cookie                                                                          |cookie.set('email',f.email.value,90);
|cookie.get(c_name)                     |return cookie, '' if empty                                                          |cookie.get('email');

