(function(){var p=this,aa=function(a){var c=typeof a;if("object"==c)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return c;var b=Object.prototype.toString.call(a);if("[object Window]"==b)return"object";if("[object Array]"==b||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==b||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==c&&"undefined"==typeof a.call)return"object";return c},ba=function(a){var c=aa(a);return"array"==c||"object"==c&&"number"==typeof a.length},s=function(a){return"string"==typeof a},ca=function(a){var c=typeof a;return"object"==c&&null!=a||"function"==c},da=function(a,c,b){return a.call.apply(a.bind,arguments)},ea=function(a,c,b){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);
Array.prototype.unshift.apply(b,d);return a.apply(c,b)}}return function(){return a.apply(c,arguments)}},t=function(a,c,b){t=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?da:ea;return t.apply(null,arguments)},fa=function(a,c){var b=Array.prototype.slice.call(arguments,1);return function(){var c=Array.prototype.slice.call(arguments);c.unshift.apply(c,b);return a.apply(this,c)}};var ga=parseFloat("0.01"),ha=isNaN(ga)||1<ga||0>ga?0:ga;var na=function(a){if(!ia.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ja,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(ka,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(la,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(ma,"&quot;"));return a},ja=/&/g,ka=/</g,la=/>/g,ma=/\"/g,ia=/[&<>\"]/;var u=document,v=window;var w=function(a,c){this.width=a;this.height=c};w.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};w.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function y(a){return"function"==typeof encodeURIComponent?encodeURIComponent(a):escape(a)}
var z=function(a,c,b){a.addEventListener?a.addEventListener(c,b,!1):a.attachEvent&&a.attachEvent("on"+c,b)},oa=function(a,c,b){a.removeEventListener?a.removeEventListener(c,b,!1):a.detachEvent&&a.detachEvent("on"+c,b)},pa=function(a,c){a.google_image_requests||(a.google_image_requests=[]);var b=a.document.createElement("img");b.src=c;a.google_image_requests.push(b)},qa={},A=function(a){try{return!!a.location.href||""===a.location.href}catch(c){return!1}};var ra=function(a){for(var c=0,b=a,d=0;a!=a.parent;)a=a.parent,d++,A(a)&&(b=a,c=d);return{O:b,P:c}};var sa=!!window.google_async_iframe_id,B=sa&&window.parent||window,C=function(){if(sa&&!A(B)){for(var a="."+u.domain;2<a.split(".").length&&!A(B);)u.domain=a=a.substr(a.indexOf(".")+1),B=window.parent;A(B)||(B=window)}return B};var E=Array.prototype,ta=E.indexOf?function(a,c,b){return E.indexOf.call(a,c,b)}:function(a,c,b){b=null==b?0:0>b?Math.max(0,a.length+b):b;if(s(a))return s(c)&&1==c.length?a.indexOf(c,b):-1;for(;b<a.length;b++)if(b in a&&a[b]===c)return b;return-1},ua=E.forEach?function(a,c,b){E.forEach.call(a,c,b)}:function(a,c,b){for(var d=a.length,f=s(a)?a.split(""):a,e=0;e<d;e++)e in f&&c.call(b,f[e],e,a)},va=function(a){var c=a.length;if(0<c){for(var b=Array(c),d=0;d<c;d++)b[d]=a[d];return b}return[]},wa=function(a,
c,b){return 2>=arguments.length?E.slice.call(a,c):E.slice.call(a,c,b)};var F=function(a,c){this.x=void 0!==a?a:0;this.y=void 0!==c?c:0};F.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};F.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};var xa=function(a,c){for(var b in a)c.call(void 0,a[b],b,a)},ya="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),za=function(a,c){for(var b,d,f=1;f<arguments.length;f++){d=arguments[f];for(b in d)a[b]=d[b];for(var e=0;e<ya.length;e++)b=ya[e],Object.prototype.hasOwnProperty.call(d,b)&&(a[b]=d[b])}};var G,Aa,Ca,Da,Ea=function(){return p.navigator?p.navigator.userAgent:null};Da=Ca=Aa=G=!1;var Fa;if(Fa=Ea()){var Ga=p.navigator;G=0==Fa.indexOf("Opera");Aa=!G&&-1!=Fa.indexOf("MSIE");Ca=!G&&-1!=Fa.indexOf("WebKit");Da=!G&&!Ca&&"Gecko"==Ga.product}var Ha=G,H=Aa,I=Da,J=Ca,Ia=function(){var a=p.document;return a?a.documentMode:void 0},Ja;
r:{var Ka="",K;if(Ha&&p.opera)var La=p.opera.version,Ka="function"==typeof La?La():La;else if(I?K=/rv\:([^\);]+)(\)|;)/:H?K=/MSIE\s+([^\);]+)(\)|;)/:J&&(K=/WebKit\/(\S+)/),K)var Ma=K.exec(Ea()),Ka=Ma?Ma[1]:"";if(H){var Na=Ia();if(Na>parseFloat(Ka)){Ja=String(Na);break r}}Ja=Ka}
var Oa=Ja,Pa={},Qa=function(a){var c;if(!(c=Pa[a])){c=0;for(var b=String(Oa).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=Math.max(b.length,d.length),e=0;0==c&&e<f;e++){var g=b[e]||"",h=d[e]||"",l=RegExp("(\\d*)(\\D*)","g"),k=RegExp("(\\d*)(\\D*)","g");do{var m=l.exec(g)||["","",""],n=k.exec(h)||["","",""];if(0==m[0].length&&0==n[0].length)break;c=((0==m[1].length?0:parseInt(m[1],10))<(0==n[1].length?0:parseInt(n[1],10))?-1:(0==m[1].length?
0:parseInt(m[1],10))>(0==n[1].length?0:parseInt(n[1],10))?1:0)||((0==m[2].length)<(0==n[2].length)?-1:(0==m[2].length)>(0==n[2].length)?1:0)||(m[2]<n[2]?-1:m[2]>n[2]?1:0)}while(0==c)}c=Pa[a]=0<=c}return c},Ra=p.document,Sa=Ra&&H?Ia()||("CSS1Compat"==Ra.compatMode?parseInt(Oa,10):5):void 0;var Ta,Ua=!H||H&&9<=Sa;!I&&!H||H&&H&&9<=Sa||I&&Qa("1.9.1");H&&Qa("9");var Va=function(a,c){var b;b=a.className;b=s(b)&&b.match(/\S+/g)||[];for(var d=wa(arguments,1),f=b.length+d.length,e=b,g=0;g<d.length;g++)0<=ta(e,d[g])||e.push(d[g]);a.className=b.join(" ");return b.length==f};var Wa=function(a){return a?new L(M(a)):Ta||(Ta=new L)},Ya=function(a,c){xa(c,function(b,c){"style"==c?a.style.cssText=b:"class"==c?a.className=b:"for"==c?a.htmlFor=b:c in Xa?a.setAttribute(Xa[c],b):0==c.lastIndexOf("aria-",0)||0==c.lastIndexOf("data-",0)?a.setAttribute(c,b):a[c]=b})},Xa={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"},
$a=function(a,c,b){var d=arguments,f=document,e=d[0],g=d[1];if(!Ua&&g&&(g.name||g.type)){e=["<",e];g.name&&e.push(' name="',na(g.name),'"');if(g.type){e.push(' type="',na(g.type),'"');var h={};za(h,g);delete h.type;g=h}e.push(">");e=e.join("")}e=f.createElement(e);g&&(s(g)?e.className=g:"array"==aa(g)?Va.apply(null,[e].concat(g)):Ya(e,g));2<d.length&&Za(f,e,d);return e},Za=function(a,c,b){function d(b){b&&c.appendChild(s(b)?a.createTextNode(b):b)}for(var f=2;f<b.length;f++){var e=b[f];if(!ba(e)||
ca(e)&&0<e.nodeType)d(e);else{var g;r:{if(e&&"number"==typeof e.length){if(ca(e)){g="function"==typeof e.item||"string"==typeof e.item;break r}if("function"==aa(e)){g="function"==typeof e.item;break r}}g=!1}ua(g?va(e):e,d)}}},M=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document},L=function(a){this.B=a||p.document||document};L.prototype.createElement=function(a){return this.B.createElement(a)};L.prototype.createTextNode=function(a){return this.B.createTextNode(String(a))};
var ab=function(a){var c=a.B;a=J||"CSS1Compat"!=c.compatMode?c.body:c.documentElement;c=c.parentWindow||c.defaultView;return H&&Qa("10")&&c.pageYOffset!=a.scrollTop?new F(a.scrollLeft,a.scrollTop):new F(c.pageXOffset||a.scrollLeft,c.pageYOffset||a.scrollTop)};L.prototype.appendChild=function(a,c){a.appendChild(c)};var N=function(a,c,b,d){this.top=a;this.right=c;this.bottom=b;this.left=d};N.prototype.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};N.prototype.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};var bb=/[&\?](?:client|correlator|url|ifk|oid|eid)=[^&]+/g,cb=/[&\?](?:slotname|dt|ifi|adx|ady|format)=[^&]+/g;var db=function(a){var c=v;a&&c.top!=c&&(c=c.top);try{var b;if(c.document&&!c.document.body)b=new w(-1,-1);else{var d=(c||window).document,f="CSS1Compat"==d.compatMode?d.documentElement:d.body;b=new w(f.clientWidth,f.clientHeight)}return b}catch(e){return new w(-12245933,-12245933)}},eb=function(a,c){("msie"in qa?qa.msie:qa.msie=-1!=navigator.userAgent.toLowerCase().indexOf("msie"))&&!window.opera?z(a,"readystatechange",function(){"complete"==a.readyState&&c()}):z(a,"load",c)},fb=function(a,c){try{c.postMessage(a,
"*")}catch(b){}},ib=function(a,c){if(c){a(c);var b=c.frames;if(b){var d=b.length,f;for(f=0;f<d;++f)ib(a,b[f])}}};var O=function(a,c,b,d,f,e,g,h,l){this.a=jb;this.q=0;this.C=this.D=this.k=-1;this.t=[0,0,0,0,0];this.f=[0,0,0,0,0];this.d=[0,0,0,0,0];this.zoom=[0,0,0,0,0];this.l="";this.G=!1;this.M=!0;this.g=d;this.A=this.p=-1;this.j=c;this.b=0;this.c=f;this.m=g||"";this.n=h||"";this.F=function(){};this.element=b;this.u=0;this.v=-1;this.s=l||jb;this.K=c?-1!=c.indexOf("dcopt=anid"):!1;this.L="";this.e=b?String(b._avi_||""):"";this.r=0;this.I=!1;this.o=this.H="";kb(this,a,e)},jb=new N(0,0,0,0);
O.prototype.update=function(a,c,b,d,f){if(0>this.g)return null;b||kb(this,d,f);return lb(this,this.a,c,a,b,!1)};
var lb=function(a,c,b,d,f,e){var g=d-a.g||1;a.g=d;var h=new N(Math.max(c.top,b.top),Math.min(c.right,b.right),Math.min(c.bottom,b.bottom),Math.max(c.left,b.left)),l=c=-1,k=0;0<a.q&&(h.top<h.bottom&&h.left<h.right)&&(k=(h.bottom-h.top)*(h.right-h.left)/a.q,c=1<=k?0:0.75<=k?1:0.5<=k?2:0.25<=k?3:4,0>a.k&&(a.k=d),a.C=d,0.5<=k&&(l=100*a.q/((b.bottom-b.top)*(b.right-b.left)),l=20<=l?0:10<=l?1:5<=l?2:2.5<=l?3:4));e=e&&-1!=a.p&&2>=a.p;h=-1==a.p||-1==c?-1:Math.max(a.p,c);e=e?h:a.p;-1!=e&&(a.t[e]+=g,-1!=e&&
2>=e&&-1!=a.A&&(a.zoom[a.A]+=g));for(;0<=e&&4>=e;e++)a.d[e]+=g,a.d[e]>a.f[e]&&(a.f[e]=a.d[e]);for(e=0;e<a.d.length;++e)if(e<c||f||-1==c)a.d[e]=0;a.p=f?-1:c;a.A=l;a.F(a,b);-1===a.D&&1E3<=Math.max(a.d[2],a.f[2])&&(a.D=d);return k},nb=function(a,c,b,d){if(a.element&&a.element.contentWindow){var f=1E3<=Math.max(a.d[2],a.f[2])?!0:!1;if(0!=a.r&&(1!=a.r||f&&!a.I)){var e=mb(a);e.unshift("adk="+a.b);d&&e.push("r="+d);c=e.concat(c).join("&");d={};d[0]=b;d[3]=c;d[4]=a.b;d[5]=f;try{var g=window.JSON.stringify(d),
h=a.element.contentWindow;if(g){var l=fa(fb,g);ib(l,h)}}catch(k){}a.I=f}}};O.prototype.N=function(a){this.v=a()};O.prototype.J=function(a){a=a();this.u+=a-this.v;this.v=-1};
var kb=function(a,c,b){var d,f;c=b?c:c.top;try{if(a.element){f=a.element.getBoundingClientRect();var e=a.element,g=new F(0,0),h=M(e)?M(e).parentWindow||M(e).defaultView:window;do{var l;if(h==c)l=ob(e);else{b=e;var k=void 0;if(b.getBoundingClientRect)var m=pb(b),k=new F(m.left,m.top);else var n=ab(Wa(b)),q=ob(b),k=new F(q.x-n.x,q.y-n.y);var r=void 0;if(I&&!Qa(12)){var D=void 0;var x=void 0;H?x="-ms-transform":J?x="-webkit-transform":Ha?x="-o-transform":I&&(x="-moz-transform");var U=void 0;x&&(U=P(b,
x));U||(U=P(b,"transform"));if(U)var Ba=U.match(qb),D=Ba?new F(parseFloat(Ba[1]),parseFloat(Ba[2])):new F(0,0);else D=new F(0,0);r=new F(k.x+D.x,k.y+D.y)}else r=k;l=r}b=l;g.x+=b.x;g.y+=b.y}while(h&&h!=c&&(e=h.frameElement)&&(h=h.parent));d=g}else f=jb,d=new F(0,0);var gb=d.x+a.s.left,hb=d.y+a.s.top,Yb=a.s.right||f.right-f.left,Zb=a.s.bottom||f.bottom-f.top;a.a=new N(Math.round(hb),Math.round(gb+Yb),Math.round(hb+Zb),Math.round(gb))}catch(nc){a.a=a.s}a.q=(a.a.bottom-a.a.top)*(a.a.right-a.a.left)},
mb=function(a){var c=a.a,c=["p="+c.top+","+c.left+","+c.bottom+","+c.right];c.push("tos="+a.t.join(","));c.push("mtos="+a.f.join(","));c.push("rs="+a.c);var b=5==a.c||6==a.c;b||c.push("ht="+a.u);0<=a.k&&(c.push("tfs="+a.k),c.push("tls="+a.C));a.e&&c.push("ai="+a.e);a.H&&c.push("fp="+y(a.H));7==a.c&&c.push("qid="+a.L);a.l&&c.push("afp="+y(a.l));b&&(a.n&&c.push("ord="+y(a.n)),a.m&&c.push("amd="+y(a.m+";")),a.K&&c.push("anid=1"),a.o&&c.push("xbid="+y(a.o)));return c};var P=function(a,c){var b;r:{b=M(a);if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,null))){b=b[c]||b.getPropertyValue(c)||"";break r}b=""}return b||(a.currentStyle?a.currentStyle[c]:null)||a.style&&a.style[c]},pb=function(a){var c;try{c=a.getBoundingClientRect()}catch(b){return{left:0,top:0,right:0,bottom:0}}H&&(a=a.ownerDocument,c.left-=a.documentElement.clientLeft+a.body.clientLeft,c.top-=a.documentElement.clientTop+a.body.clientTop);return c},rb=function(a){if(H&&
!(H&&8<=Sa))return a.offsetParent;var c=M(a),b=P(a,"position"),d="fixed"==b||"absolute"==b;for(a=a.parentNode;a&&a!=c;a=a.parentNode)if(b=P(a,"position"),d=d&&"static"==b&&a!=c.documentElement&&a!=c.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==b||"absolute"==b||"relative"==b))return a;return null},ob=function(a){var c,b=M(a),d=P(a,"position"),f=I&&b.getBoxObjectFor&&!a.getBoundingClientRect&&"absolute"==d&&(c=b.getBoxObjectFor(a))&&(0>c.screenX||0>c.screenY),e=new F(0,
0),g;c=b?M(b):document;(g=!H)||(g=H&&9<=Sa)||(g="CSS1Compat"==Wa(c).B.compatMode);g=g?c.documentElement:c.body;if(a==g)return e;if(a.getBoundingClientRect)c=pb(a),a=ab(Wa(b)),e.x=c.left+a.x,e.y=c.top+a.y;else if(b.getBoxObjectFor&&!f)c=b.getBoxObjectFor(a),a=b.getBoxObjectFor(g),e.x=c.screenX-a.screenX,e.y=c.screenY-a.screenY;else{f=a;do{e.x+=f.offsetLeft;e.y+=f.offsetTop;f!=a&&(e.x+=f.clientLeft||0,e.y+=f.clientTop||0);if(J&&"fixed"==P(f,"position")){e.x+=b.body.scrollLeft;e.y+=b.body.scrollTop;
break}f=f.offsetParent}while(f&&f!=a);if(Ha||J&&"absolute"==d)e.y-=b.body.offsetTop;for(f=a;(f=rb(f))&&f!=b.body&&f!=g;)e.x-=f.scrollLeft,Ha&&"TR"==f.tagName||(e.y-=f.scrollTop)}return e},qb=/matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;var sb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),ub=function(a){if(tb){tb=!1;var c=p.location;if(c){var b=c.href;if(b&&(b=(b=ub(b)[3]||null)&&decodeURIComponent(b))&&b!=c.hostname)throw tb=!0,Error();}}return a.match(sb)},tb=J,vb=function(a,c,b){if("array"==aa(c))for(var d=0;d<c.length;d++)vb(a,String(c[d]),b);else null!=c&&b.push("&",a,""===c?"":"=",encodeURIComponent(String(c)))};var yb=function(a,c){z(a,"scroll",wb);z(a,"resize",xb);if(c)for(var b,d=0;d<Q.length;++d)if(b=Q[d],b.element){var f=t(b.N,b,R);z(b.element,"mouseover",f);f=t(b.J,b,R);z(b.element,"mouseout",f)}},xb=function(){S(!1);wb()},wb=function(){zb(Q,!1)},zb=function(a,c){if(!T&&0!=a.length){var b=V,d=Ab,f=Bb,e=Cb,g=null;if(e)S(!1),b=V=new w(d.width,d.height-f);else{if(null==b||-1==b.width||-1==b.height||-12245933==b.width||-12245933==b.height)return;try{g=ab(Wa(v.top.document))}catch(h){return}}W=null;window.clearTimeout(X);
X=null;var l=R();if(e)for(b=0;b<a.length;b++){var e=a[b],g=l,k=d,m=f,n=c,q=v;if(!(0>e.g)){var r=q.innerWidth,D=q.innerHeight,x=new N(Math.round(q.mozInnerScreenY),Math.round(q.mozInnerScreenX+r),Math.round(q.mozInnerScreenY+D),Math.round(q.mozInnerScreenX)),k=new N(q.screenY+m,q.screenX+k.width,q.screenY+k.height,q.screenX);n||(m=new N(x.top-k.top,x.right-k.left,x.bottom-k.top,x.left-k.left),m.top>e.a.top?e.a=m:(e.a.right=e.a.left+r,e.a.bottom=e.a.top+D),e.q=r*D);lb(e,x,k,g,n,!0)}}else for(d=new N(g.y,
g.x+b.width,g.y+b.height,g.x),b=0;b<a.length;b++)a[b].update(l,d,c,v,Db);Eb+=R()-l;++Fb;if("osd"==Gb)for(b=0;b<a.length;b++)l=Hb(v),nb(a[b],l,"goog_update_data","u");c||Ib()}},Kb=function(){var a=Jb,c;u.mozVisibilityState?c="mozvisibilitychange":u.webkitVisibilityState?c="webkitvisibilitychange":u.visibilityState&&(c="visibilitychange");c&&z(u,c,a)},Jb=function(){var a;a=v.document;a={visible:1,hidden:2,prerender:3,preview:4}[a.webkitVisibilityState||a.mozVisibilityState||a.visibilityState||""]||
0;(a=1==a||0==a)&&S(!0);zb(Q,!a)},Lb=function(){var a=0<=Y?R()-Y:-1;return 2E3>a?250:4E3>a?500:1E3},Ib=function(){X=window.setTimeout(function(){zb(Q,!1)},Lb())},Q=[],T=!1,Mb=(new Date).getTime(),Y=-1,V=null,Ab=null,Nb=null,X=null,Db=!A(v.top),Gb="",W=null,Bb=0,Cb=!1,R=function(){return(new Date).getTime()-Mb},Ob=0,Z=0,Eb=0,Fb=0,Pb=-1,S=function(a){V=db(!0);if(!a){Ab=v.outerWidth?new w(v.outerWidth,v.outerHeight):new w(-12245933,-12245933);a=v;a.top!=a&&(a=a.top);var c=0,b=0,d=V;try{var f=a.document,
e=f.body,g=f.documentElement;if("CSS1Compat"==f.compatMode&&g.scrollHeight)c=g.scrollHeight!=d.height?g.scrollHeight:g.offsetHeight,b=g.scrollWidth!=d.width?g.scrollWidth:g.offsetWidth;else{var h=g.scrollHeight,l=g.scrollWidth,k=g.offsetHeight,m=g.offsetWidth;g.clientHeight!=k&&(h=e.scrollHeight,l=e.scrollWidth,k=e.offsetHeight,m=e.offsetWidth);h>d.height?h>k?(c=h,b=l):(c=k,b=m):h<k?(c=h,b=l):(c=k,b=m)}Nb=new w(b,c)}catch(n){Nb=new w(-12245933,-12245933)}}},Hb=function(a,c){if(W&&!c)return va(W);
var b=a.document,d=0<=Y?R()-Y:-1;-1==Pb&&(d=R());var f=[],e=Q;try{if(0<e.length?((b=V)&&f.push("bs="+b.width+","+b.height),(b=Ab)&&f.push("bos="+b.width+","+b.height),(b=Nb)&&f.push("ps="+b.width+","+b.height),a.screen&&f.push("ss="+a.screen.width+","+a.screen.height)):(f.push("url="+y(a.location.href.substring(0,1024))),b.referrer&&f.push("referrer="+y(b.referrer.substring(0,512)))),f.push("tt="+d),f.push("pt="+Y),f.push("deb="+y([1,Ob,Z,Eb,Fb,Pb].join("-"))),a.top!=a){0<e.length&&f.push("iframe_loc="+
y(a.location.href.substring(0,512)));var g=db(!1);f.push("is="+g.width+","+g.height)}}catch(h){f.push("error")}W=f;return va(W)},Qb=function(a){var c=a.indexOf("Firefox/"),b=-1;if(0<=c){var b=Math.floor(a.substr(c+8))||-1,d=a.indexOf("Mac OS X 10."),c=-1;0<=d&&(c=Number(a.substr(d+12,1))||-1);var f=0<c?-1:a.indexOf("Windows NT "),d=-1;0<=f&&(d={"6.0":0,"6.1":1,"6.2":2}[a.substr(f+11,3)]||-1);a=148;5<=c?a=4<=b?108:3<=b?127:108:0<=d&&(16==b||17==b||18==b)&&(a=[[146,146,146],[148,147,148],[131,130,136]][d][b-
16]);Bb=a;Cb=!0}},Rb=function(a,c){var b=c.match(a);return b?b.join(""):""},Tb=function(a,c){var b=Sb,d=Q[0],f=(d.j||"").match(/activeViewUseDARTIframe=0/);if(f&&0<f.length)return c("o"),"";if((f=a.document.referrer)&&0<=f.indexOf("DARTIframe.html"))return c("i"),"";f="pub_side_iframe_"+Math.floor(1E13*Math.random());b=b!=a.top?b.document.referrer:b.location.href;if(!b)return c("i"),"";var e=ub(b),b=e[1],g=e[2],h=e[3],e=e[4],l="";b&&(l+=b+":");h&&(l+="//",g&&(l+=g+"@"),l+=h,e&&(l+=":"+e));b=l;g="/doubleclick/DARTIframe.html";
d.j&&(h=d.j.match(/mtfIFPath=([^;?]+)/))&&1<h.length&&(g=g.replace("/doubleclick/",h[1]));var k,h={gtVersion:"lidar",mediaserver:"http://s0.2mdn.net/879366"};h.x=d.a.left;h.y=d.a.top;h.w=d.a.right-d.a.left;h.h=d.a.bottom-d.a.top;e=a.location.href;l=e.length;if(0==l)e=0;else{for(var m=305419896,n=0;n<l;n++)m^=(m<<5)+(m>>2)+e.charCodeAt(n)&4294967295;e=0<m?m:4294967296+m}h.i=e;h.rs=d.c;d.m&&(h.md=d.m);d.n&&(h.od=d.n);d.j&&(h.au=d.j);d.o&&(h.xi=d.o);d.b&&(h.ak=d.b);d.e&&(h.ai=d.e);h.pn=f;h.it="osd";
d=[b+g];for(k in h)vb(k,h[k],d);d[1]&&(k=d[0],b=k.indexOf("#"),0<=b&&(d.push(k.substr(b)),d[0]=k=k.substr(0,b)),b=k.indexOf("?"),0>b?d[1]="?":b==k.length-1&&(d[1]=void 0));k=d.join("");d=$a("iframe",{id:f+"_"+Math.floor(1E13*Math.random()),name:f});d.style.display="none";d.style.width="0px";d.style.height="0px";a.document.body.appendChild(d);d.src=k;return f};var $,Ub=null,Vb="",Sb=null,Wb=function(){if(2==$.getOseId())return!0;for(var a=Q,c=0;c<a.length;c++)if(!a[c].G||2==a[c].r||1==a[c].r&&!a[c].I)return!0;return!1},ac=function(){if(!(0<Y)){try{if(!Xb()||"function"!=typeof $.getNewBlocks)return;S(!1);$b(!1)}catch(a){}Ub=window.setTimeout(ac,250)}},$b=function(a){var c=0,b=R();$.getNewBlocks(function(e,d,f,k,m){c++;var n=-1,q=!1;a||k?n=b:q=!0;var r=new O(window,d,e,n,f,Db);r.F=bc;r.l=Rb(cb,d);r.b=cc(d);dc(r);m&&(r.e=m,ec=!0);Q.push(r);q&&eb(e,function(){r.g=
R();Jb()})},a);if(a)for(var d=Q.length,f=0;f<d;++f){var e=Q[f];0>=e.g&&(e.g=b)}},hc=function(){try{var a=C(),c=R();Y=c;Sb=ra(a).O;window.clearTimeout(Ub);Ub=null;S(!1);if(Xb()){Ob=$.numBlocks();if("function"!=typeof $.getNewBlocks){var b=[];Z=0;$.getBlocks(function(a,d,f){Z++;a=new O(window,d,a,c,f,Db);a.F=bc;a.l=Rb(cb,d);a.b=cc(d);dc(a);b.push(a)});Q=b}else $b(!0),Z=Q.length;if(0==Z)fc("n");else{if(Db)if(I&&("number"==typeof a.screenX&&"number"==typeof a.mozInnerScreenX&&"number"==typeof a.outerWidth)&&
0.1>Math.random())Qb(a.navigator.userAgent);else if(2==$.getOseId()&&Math.random()<ha){var d=Tb(a,function(){});if(d){window.setTimeout(function(){var b;r:{var c=0;try{if(c=a.frames[d].frames.length,0<c&&void 0!=a.frames[d].frames.ps_iframe_loaded){b=T=!0;break r}}catch(f){if(0<c){b=T=!0;break r}}b=!1}b||gc()},2E3);return}}gc()}}else fc("c")}catch(f){Q=[],fc("x")}},gc=function(){var a=C();Kb();Jb();ic();var c=2==$.getOseId();yb(a,c);window.setTimeout(function(){fc("t")},36E5);Pb=R()-Y},fc=function(a){window.clearTimeout(X);
X=null;var c=C();$||($=Goog_AdSense_getAdAdapterInstance());if(!T){var b=$.getOseId();if(2==b||ec){-1==Pb&&(Q=[]);var d=["//pagead2.googlesyndication.com/pagead/gen_204?id=osd"],f=0;try{var e=Q;if(0<e.length){zb(e,!0);for(var g=0;g<e.length;g++)if(0<e[g].b){0<e[g].v&&e[g].J(R);var h=e[g],l=h.a,k=["p:",l.top,l.left,l.bottom,l.right];k.push("tos:",h.t.join(","));k.push("mtos:",h.f.join(","));k.push("rs:",h.c);var m=5==h.c||6==h.c;m||(k.push("zoom:",h.zoom.join(",")),k.push("ht:",h.u));0<=h.k&&k.push("tfs:",
h.k,"tls:",h.C);k.push("vt:",h.D);h.l&&k.push("fp:",h.l);7==h.c&&k.push("qid:",h.L);h.e&&k.push("ai:",h.e);m&&(h.n&&k.push("ord:",h.n),h.m&&k.push("amd:",h.m,";"),h.K&&k.push("anid:","1"),h.o&&k.push("xbid:",h.o));d.splice(1,0,"adk"+e[g].b+"="+y(k.join(",")));f++}}d.push("r="+a);var n=Hb(c,!1);d.push(n.join("&"));Cb&&d.push("xde=1");0==e.length&&(d.push("correlator="+$.getCorrelator()),d.push("eid="+$.getOseExpId()),d.push("oid="+b))}catch(q){d.push("error")}if(2==b){g=d.join("&");Vb&&(g+="&fp="+
y(Vb));try{pa(c,g)}catch(r){}}d.splice(0,1,"//pagead2.googlesyndication.com/activeview?id=osd2");d.splice(1,f);for(g=f=0;g<e.length;g++)if(a=e[g],a.e&&a.b){b=mb(a);d.splice(1,f,"adk="+a.b+"&"+b.join("&")+"&js=1");f=d.join("&").substring(0,2E3);try{pa(c,f)}catch(D){}f=1}d.splice(0,f+1);for(g=0;g<e.length;g++)a=e[g],nb(a,d,"goog_image_request")}T=!0}},ec=!1,Xb=function(){var a=C().document;if(!a.body||!a.body.getBoundingClientRect||"function"!=typeof Goog_AdSense_getAdAdapterInstance)return!1;$=Goog_AdSense_getAdAdapterInstance();
return!0},bc=function(a,c){if(a&&!a.G){var b=1E3<=Math.max(a.d[2],a.f[2]);if(b||a.M){var d=b?"1":"0";a.M=!1;var f=$.getCorrelator(),e=a.a,g=Nb,d=["{vi:",d,",cl:",f,",adk:",a.b,",rs:",a.c,",pl:",e.left,",pr:",e.right,",pt:",e.top,",pb:",e.bottom,",vl:",c.left,",vr:",c.right,",vt:",c.top,",vb:",c.bottom,",dw:",g&&g.width||0,",dh:",g&&g.height||0,"}"].join(""),e=a.element;try{var f=[],h=e.contentWindow||(e.contentDocument||e.contentWindow.document).parentWindow||(e.contentDocument||e.contentWindow.document).defaultView;
if(h)f=[h];else{var l;var k,m=document,m=e||m;l=m.querySelectorAll&&m.querySelector?m.querySelectorAll("IFRAME"):k=m.getElementsByTagName("IFRAME");for(m=0;m<l.length;++m)(h=l[m].contentWindow||(l[m].contentDocument||l[m].contentWindow.document).parentWindow||(l[m].contentDocument||l[m].contentWindow.document).defaultView)&&f.push(h)}var n=f.length;if(0<n)for(var q=fa(fb,d),m=0;m<n;++m)ib(q,f[m])}catch(r){}if(b&&(a.G=!0,!Wb()&&(b=2==$.getOseId(),h=C(),oa(h,"scroll",wb),oa(h,"resize",xb),b)))for(h=
0;h<Q.length;++h)b=Q[h],b.element&&(l=t(b.N,b,R),oa(b.element,"mouseover",l),l=t(b.J,b,R),oa(b.element,"mouseout",l))}}},cc=function(a){return(a=a.match(/[&\?](?:adk)=([0-9]+)/))&&2==a.length?parseInt(a[1],10):0},jc=function(a){if(a.data){var c;r:{a=a.data;var b=window;if("object"==typeof a)c=a;else{if("string"==typeof a)try{var d=b.JSON.parse(a);d[2]=!0;c=d;break r}catch(f){}c=null}}if(c&&"goog_provide_mode"==c[0]&&(d=c[4])){c=c[6];r:{if(d)for(a=Q,b=0;b<a.length;++b)if(a[b].b==d){d=a[b];break r}d=
null}d&&(d.r=c);c&&0<c&&(ec=!0)}}},ic=function(){z(v,"message",jc);for(var a=Q,c=0;c<a.length;++c){var b=a[c];if(b.element&&b.element.contentWindow&&b.b){var d={0:"goog_get_mode"};d[4]=b.b;try{var f=window.JSON.stringify(d),e=b.element.contentWindow;if(f){var g=fa(fb,f);ib(g,e)}}catch(h){}}}},dc=function(a){if(!Vb){if(!a.j)return;var c=Rb(bb,a.j);!c||"&"!=c.charAt(0)&&"?"!=c.charAt(0)||(c=c.slice(1));Vb=c}a.H=Vb};var Gb="osd",kc=C();z(kc,"unload",function(){fc("u")});var lc=C();if("complete"==lc.document.readyState||lc.google_onload_fired)hc();else{ac();var mc=C();z(mc,"load",function(){window.setTimeout(hc,100)})};})();