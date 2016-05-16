/* ../projects/rtw_plus_20130905//randomDirectory/ipad/js/lib/Class.js */
/* Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
// Inspired by base2 and Prototype
(function(){
  var initializing = false, fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;

  // The base Class implementation (does nothing)
  this.Class = function(){};

  // Create a new Class that inherits from this class
  Class.extend = function(prop) {
    var _super = this.prototype;

    // Instantiate a base class (but only create the instance,
    // don't run the init constructor)
    initializing = true;
    var prototype = new this();
    initializing = false;

    // Copy the properties over onto the new prototype
    for (var name in prop) {
      // Check if we're overwriting an existing function
      prototype[name] = typeof prop[name] == "function" &&
        typeof _super[name] == "function" && fnTest.test(prop[name]) ?
        (function(name, fn){
          return function() {
            var tmp = this._super;

            // Add a new ._super() method that is the same method
            // but on the super-class
            this._super = _super[name];

            // The method only need to be bound temporarily, so we
            // remove it when we're done executing
            var ret = fn.apply(this, arguments);
            this._super = tmp;

            return ret;
          };
        })(name, prop[name]) :
        prop[name];
    }

    // The dummy class constructor
    function Class() {
      // All construction is actually done in the init method
      if ( !initializing && this.init )
        this.init.apply(this, arguments);
    }

    // Populate our constructed prototype object
    Class.prototype = prototype;

    // Enforce the constructor to be what we expect
    Class.constructor = Class;

    // And make this class extendable
    Class.extend = arguments.callee;

    return Class;
  };
})();


/* ../projects/rtw_plus//randomDirectory/ipad/js/lib/TAFFY.js */
var TAFFY,exports,T;(function(){var f,q,p,t,d,b,n,m,r,e,c,u,w,v,h,g,j,o,i,l,a,s,k;if(!TAFFY){d="2.7";b=1;n="000000";m=1000;r={};e=function(x){if(TAFFY.isArray(x)||TAFFY.isObject(x)){return x}else{return JSON.parse(x)}};i=function(y,x){return l(y,function(z){return x.indexOf(z)>=0})};l=function(A,z,y){var x=[];if(A==null){return x}if(Array.prototype.filter&&A.filter===Array.prototype.filter){return A.filter(z,y)}c(A,function(D,B,C){if(z.call(y,D,B,C)){x[x.length]=D}});return x};k=function(x){return Object.prototype.toString.call(x)==="[object RegExp]"};s=function(z){var x=T.isArray(z)?[]:T.isObject(z)?{}:null;if(z===null){return z}for(var y in z){x[y]=k(z[y])?z[y].toString():T.isArray(z[y])||T.isObject(z[y])?s(z[y]):z[y]}return x};a=function(y){var x=JSON.stringify(y);if(x.match(/regex/)===null){return x}return JSON.stringify(s(y))};c=function(B,A,C){var E,D,z,F;if(B&&((T.isArray(B)&&B.length===1)||(!T.isArray(B)))){A((T.isArray(B))?B[0]:B,0)}else{for(E,D,z=0,B=(T.isArray(B))?B:[B],F=B.length;z<F;z++){D=B[z];if(!T.isUndefined(D)||(C||false)){E=A(D,z);if(E===T.EXIT){break}}}}};u=function(C,z){var y=0,B,A;for(A in C){if(C.hasOwnProperty(A)){B=z(C[A],A,y++);if(B===T.EXIT){break}}}};r.extend=function(x,y){r[x]=function(){return y.apply(this,arguments)}};w=function(y){var x;if(T.isString(y)&&/[t][0-9]*[r][0-9]*/i.test(y)){return true}if(T.isObject(y)&&y.___id&&y.___s){return true}if(T.isArray(y)){x=true;c(y,function(z){if(!w(z)){x=false;return TAFFY.EXIT}});return x}return false};h=function(z,y){var x=true;c(y,function(A){switch(T.typeOf(A)){case"function":if(!A.apply(z)){x=false;return TAFFY.EXIT}break;case"array":x=(A.length===1)?(h(z,A[0])):(A.length===2)?(h(z,A[0])||h(z,A[1])):(A.length===3)?(h(z,A[0])||h(z,A[1])||h(z,A[2])):(A.length===4)?(h(z,A[0])||h(z,A[1])||h(z,A[2])||h(z,A[3])):false;if(A.length>4){c(A,function(B){if(h(z,B)){x=true}})}break}});return x};v=function(y){var x=[];if(T.isString(y)&&/[t][0-9]*[r][0-9]*/i.test(y)){y={___id:y}}if(T.isArray(y)){c(y,function(z){x.push(v(z))});y=function(){var A=this,z=false;c(x,function(B){if(h(A,B)){z=true}});return z};return y}if(T.isObject(y)){if(T.isObject(y)&&y.___id&&y.___s){y={___id:y.___id}}u(y,function(z,A){if(!T.isObject(z)){z={is:z}}u(z,function(B,C){var E=[],D;D=(C==="hasAll")?function(F,G){G(F)}:c;D(B,function(G){var F=true,H=false,I;I=function(){var N=this[A],M="==",O="!=",Q="===",R="<",L=">",S="<=",P=">=",K="!==",J;if(typeof N==="undefined"){return false}if((C.indexOf("!")===0)&&C!==O&&C!==K){F=false;C=C.substring(1,C.length)}J=((C==="regex")?(G.test(N)):(C==="lt"||C===R)?(N<G):(C==="gt"||C===L)?(N>G):(C==="lte"||C===S)?(N<=G):(C==="gte"||C===P)?(N>=G):(C==="left")?(N.indexOf(G)===0):(C==="leftnocase")?(N.toLowerCase().indexOf(G.toLowerCase())===0):(C==="right")?(N.substring((N.length-G.length))===G):(C==="rightnocase")?(N.toLowerCase().substring((N.length-G.length))===G.toLowerCase()):(C==="like")?(N.indexOf(G)>=0):(C==="likenocase")?(N.toLowerCase().indexOf(G.toLowerCase())>=0):(C===Q||C==="is")?(N===G):(C===M)?(N==G):(C===K)?(N!==G):(C===O)?(N!=G):(C==="isnocase")?(N.toLowerCase?N.toLowerCase()===G.toLowerCase():N===G):(C==="has")?(T.has(N,G)):(C==="hasall")?(T.hasAll(N,G)):(C==="contains")?(TAFFY.isArray(N)&&N.indexOf(G)>-1):(C.indexOf("is")===-1&&!TAFFY.isNull(N)&&!TAFFY.isUndefined(N)&&!TAFFY.isObject(G)&&!TAFFY.isArray(G))?(G===N[C]):(T[C]&&T.isFunction(T[C])&&C.indexOf("is")===0)?T[C](N)===G:(T[C]&&T.isFunction(T[C]))?T[C](N,G):(false));J=(J&&!F)?false:(!J&&!F)?true:J;return J};E.push(I)});if(E.length===1){x.push(E[0])}else{x.push(function(){var G=this,F=false;c(E,function(H){if(H.apply(G)){F=true}});return F})}})});y=function(){var A=this,z=true;z=(x.length===1&&!x[0].apply(A))?false:(x.length===2&&(!x[0].apply(A)||!x[1].apply(A)))?false:(x.length===3&&(!x[0].apply(A)||!x[1].apply(A)||!x[2].apply(A)))?false:(x.length===4&&(!x[0].apply(A)||!x[1].apply(A)||!x[2].apply(A)||!x[3].apply(A)))?false:true;if(x.length>4){c(x,function(B){if(!h(A,B)){z=false}})}return z};return y}if(T.isFunction(y)){return y}};j=function(x,y){var z=function(B,A){var C=0;T.each(y,function(F){var H,E,D,I,G;H=F.split(" ");E=H[0];D=(H.length===1)?"logical":H[1];if(D==="logical"){I=g(B[E]);G=g(A[E]);T.each((I.length<=G.length)?I:G,function(J,K){if(I[K]<G[K]){C=-1;return TAFFY.EXIT}else{if(I[K]>G[K]){C=1;return TAFFY.EXIT}}})}else{if(D==="logicaldesc"){I=g(B[E]);G=g(A[E]);T.each((I.length<=G.length)?I:G,function(J,K){if(I[K]>G[K]){C=-1;return TAFFY.EXIT}else{if(I[K]<G[K]){C=1;return TAFFY.EXIT}}})}else{if(D==="asec"&&B[E]<A[E]){C=-1;return T.EXIT}else{if(D==="asec"&&B[E]>A[E]){C=1;return T.EXIT}else{if(D==="desc"&&B[E]>A[E]){C=-1;return T.EXIT}else{if(D==="desc"&&B[E]<A[E]){C=1;return T.EXIT}}}}}}if(C===0&&D==="logical"&&I.length<G.length){C=-1}else{if(C===0&&D==="logical"&&I.length>G.length){C=1}else{if(C===0&&D==="logicaldesc"&&I.length>G.length){C=-1}else{if(C===0&&D==="logicaldesc"&&I.length<G.length){C=1}}}}if(C!==0){return T.EXIT}});return C};return(x&&x.push)?x.sort(z):x};(function(){var x={},y=0;g=function(z){if(y>m){x={};y=0}return x["_"+z]||(function(){var D=String(z),C=[],G="_",B="",A,E,F;for(A=0,E=D.length;A<E;A++){F=D.charCodeAt(A);if((F>=48&&F<=57)||F===46){if(B!=="n"){B="n";C.push(G.toLowerCase());G=""}G=G+D.charAt(A)}else{if(B!=="s"){B="s";C.push(parseFloat(G));G=""}G=G+D.charAt(A)}}C.push((B==="n")?parseFloat(G):G.toLowerCase());C.shift();x["_"+z]=C;y++;return C}())}}());o=function(){this.context({results:this.getDBI().query(this.context())})};r.extend("filter",function(){var y=TAFFY.mergeObj(this.context(),{run:null}),x=[];c(y.q,function(z){x.push(z)});y.q=x;c(arguments,function(z){y.q.push(v(z));y.filterRaw.push(z)});return this.getroot(y)});r.extend("order",function(z){z=z.split(",");var y=[],A;c(z,function(x){y.push(x.replace(/^\s*/,"").replace(/\s*$/,""))});A=TAFFY.mergeObj(this.context(),{sort:null});A.order=y;return this.getroot(A)});r.extend("limit",function(z){var y=TAFFY.mergeObj(this.context(),{}),x;y.limit=z;if(y.run&&y.sort){x=[];c(y.results,function(B,A){if((A+1)>z){return TAFFY.EXIT}x.push(B)});y.results=x}return this.getroot(y)});r.extend("start",function(z){var y=TAFFY.mergeObj(this.context(),{}),x;y.start=z;if(y.run&&y.sort&&!y.limit){x=[];c(y.results,function(B,A){if((A+1)>z){x.push(B)}});y.results=x}else{y=TAFFY.mergeObj(this.context(),{run:null,start:z})}return this.getroot(y)});r.extend("update",function(A,z,x){var B=true,D={},y=arguments,C;if(TAFFY.isString(A)&&(arguments.length===2||arguments.length===3)){D[A]=z;if(arguments.length===3){B=x}}else{D=A;if(y.length===2){B=z}}C=this;o.call(this);c(this.context().results,function(E){var F=D;if(TAFFY.isFunction(F)){F=F.apply(TAFFY.mergeObj(E,{}))}else{if(T.isFunction(F)){F=F(TAFFY.mergeObj(E,{}))}}if(TAFFY.isObject(F)){C.getDBI().update(E.___id,F,B)}});if(this.context().results.length){this.context({run:null})}return this});r.extend("remove",function(x){var y=this,z=0;o.call(this);c(this.context().results,function(A){y.getDBI().remove(A.___id);z++});if(this.context().results.length){this.context({run:null});y.getDBI().removeCommit(x)}return z});r.extend("count",function(){o.call(this);return this.context().results.length});r.extend("callback",function(z,x){if(z){var y=this;setTimeout(function(){o.call(y);z.call(y.getroot(y.context()))},x||0)}return null});r.extend("get",function(){o.call(this);return this.context().results});r.extend("stringify",function(){return JSON.stringify(this.get())});r.extend("first",function(){o.call(this);return this.context().results[0]||false});r.extend("last",function(){o.call(this);return this.context().results[this.context().results.length-1]||false});r.extend("sum",function(){var y=0,x=this;o.call(x);c(arguments,function(z){c(x.context().results,function(A){y=y+(A[z]||0)})});return y});r.extend("min",function(y){var x=null;o.call(this);c(this.context().results,function(z){if(x===null||z[y]<x){x=z[y]}});return x});(function(){var x=(function(){var A,y,z;A=function(E,G,D){var C,F,H,B;if(D.length===2){C=E[D[0]];H="===";F=G[D[1]]}else{C=E[D[0]];H=D[1];F=G[D[2]]}switch(H){case"===":return C===F;case"!==":return C!==F;case"<":return C<F;case">":return C>F;case"<=":return C<=F;case">=":return C>=F;case"==":return C==F;case"!=":return C!=F;default:throw String(H)+" is not supported"}};y=function(C,F){var B={},D,E;for(D in C){if(C.hasOwnProperty(D)){B[D]=C[D]}}for(D in F){if(F.hasOwnProperty(D)&&D!=="___id"&&D!=="___s"){E=!TAFFY.isUndefined(B[D])?"right_":"";B[E+String(D)]=F[D]}}return B};z=function(F){var B,D,C=arguments,E=C.length,G=[];if(typeof F.filter!=="function"){if(F.TAFFY){B=F()}else{throw"TAFFY DB or result not supplied"}}else{B=F}this.context({results:this.getDBI().query(this.context())});TAFFY.each(this.context().results,function(H){B.each(function(K){var I,J=true;CONDITION:for(D=1;D<E;D++){I=C[D];if(typeof I==="function"){J=I(H,K)}else{if(typeof I==="object"&&I.length){J=A(H,K,I)}else{J=false}}if(!J){break CONDITION}}if(J){G.push(y(H,K))}})});return TAFFY(G)()};return z}());r.extend("join",x)}());r.extend("max",function(y){var x=null;o.call(this);c(this.context().results,function(z){if(x===null||z[y]>x){x=z[y]}});return x});r.extend("select",function(){var y=[],x=arguments;o.call(this);if(arguments.length===1){c(this.context().results,function(z){y.push(z[x[0]])})}else{c(this.context().results,function(z){var A=[];c(x,function(B){A.push(z[B])});y.push(A)})}return y});r.extend("distinct",function(){var y=[],x=arguments;o.call(this);if(arguments.length===1){c(this.context().results,function(A){var z=A[x[0]],B=false;c(y,function(C){if(z===C){B=true;return TAFFY.EXIT}});if(!B){y.push(z)}})}else{c(this.context().results,function(z){var B=[],A=false;c(x,function(C){B.push(z[C])});c(y,function(D){var C=true;c(x,function(F,E){if(B[E]!==D[E]){C=false;return TAFFY.EXIT}});if(C){A=true;return TAFFY.EXIT}});if(!A){y.push(B)}})}return y});r.extend("supplant",function(y,x){var z=[];o.call(this);c(this.context().results,function(A){z.push(y.replace(/\{([^\{\}]*)\}/g,function(C,B){var D=A[B];return typeof D==="string"||typeof D==="number"?D:C}))});return(!x)?z.join(""):z});r.extend("each",function(x){o.call(this);c(this.context().results,x);return this});r.extend("map",function(x){var y=[];o.call(this);c(this.context().results,function(z){y.push(x(z))});return y});T=function(F){var C=[],G={},D=1,z={template:false,onInsert:false,onUpdate:false,onRemove:false,onDBChange:false,storageName:false,forcePropertyCase:null,cacheSize:100,name:""},B=new Date(),A=0,y=0,I={},E,x,H;x=function(L){var K=[],J=false;if(L.length===0){return C}c(L,function(M){if(T.isString(M)&&/[t][0-9]*[r][0-9]*/i.test(M)&&C[G[M]]){K.push(C[G[M]]);J=true}if(T.isObject(M)&&M.___id&&M.___s&&C[G[M.___id]]){K.push(C[G[M.___id]]);J=true}if(T.isArray(M)){c(M,function(N){c(x(N),function(O){K.push(O)})})}});if(J&&K.length>1){K=[]}return K};E={dm:function(J){if(J){B=J;I={};A=0;y=0}if(z.onDBChange){setTimeout(function(){z.onDBChange.call(C)},0)}if(z.storageName){setTimeout(function(){localStorage.setItem("taffy_"+z.storageName,JSON.stringify(C))})}return B},insert:function(M,N){var L=[],K=[],J=e(M);c(J,function(P,Q){var O,R;if(T.isArray(P)&&Q===0){c(P,function(S){L.push((z.forcePropertyCase==="lower")?S.toLowerCase():(z.forcePropertyCase==="upper")?S.toUpperCase():S)});return true}else{if(T.isArray(P)){O={};c(P,function(U,S){O[L[S]]=U});P=O}else{if(T.isObject(P)&&z.forcePropertyCase){R={};u(P,function(U,S){R[(z.forcePropertyCase==="lower")?S.toLowerCase():(z.forcePropertyCase==="upper")?S.toUpperCase():S]=P[S]});P=R}}}D++;P.___id="T"+String(n+b).slice(-6)+"R"+String(n+D).slice(-6);P.___s=true;K.push(P.___id);if(z.template){P=T.mergeObj(z.template,P)}C.push(P);G[P.___id]=C.length-1;if(z.onInsert&&(N||TAFFY.isUndefined(N))){z.onInsert.call(P)}E.dm(new Date())});return H(K)},sort:function(J){C=j(C,J.split(","));G={};c(C,function(L,K){G[L.___id]=K});E.dm(new Date());return true},update:function(Q,M,L){var P={},O,N,J,K;if(z.forcePropertyCase){u(M,function(R,S){P[(z.forcePropertyCase==="lower")?S.toLowerCase():(z.forcePropertyCase==="upper")?S.toUpperCase():S]=R});M=P}O=C[G[Q]];N=T.mergeObj(O,M);J={};K=false;u(N,function(R,S){if(TAFFY.isUndefined(O[S])||O[S]!==R){J[S]=R;K=true}});if(K){if(z.onUpdate&&(L||TAFFY.isUndefined(L))){z.onUpdate.call(N,C[G[Q]],J)}C[G[Q]]=N;E.dm(new Date())}},remove:function(J){C[G[J]].___s=false},removeCommit:function(K){var J;for(J=C.length-1;J>-1;J--){if(!C[J].___s){if(z.onRemove&&(K||TAFFY.isUndefined(K))){z.onRemove.call(C[J])}G[C[J].___id]=undefined;C.splice(J,1)}}G={};c(C,function(M,L){G[M.___id]=L});E.dm(new Date())},query:function(L){var O,P,K,N,M,J;if(z.cacheSize){P="";c(L.filterRaw,function(Q){if(T.isFunction(Q)){P="nocache";return TAFFY.EXIT}});if(P===""){P=a(T.mergeObj(L,{q:false,run:false,sort:false}))}}if(!L.results||!L.run||(L.run&&E.dm()>L.run)){K=[];if(z.cacheSize&&I[P]){I[P].i=A++;return I[P].results}else{if(L.q.length===0&&L.index.length===0){c(C,function(Q){K.push(Q)});O=K}else{N=x(L.index);c(N,function(Q){if(L.q.length===0||h(Q,L.q)){K.push(Q)}});O=K}}}else{O=L.results}if(L.order.length>0&&(!L.run||!L.sort)){O=j(O,L.order)}if(O.length&&((L.limit&&L.limit<O.length)||L.start)){M=[];c(O,function(R,Q){if(!L.start||(L.start&&(Q+1)>=L.start)){if(L.limit){J=(L.start)?(Q+1)-L.start:Q;if(J<L.limit){M.push(R)}else{if(J>L.limit){return TAFFY.EXIT}}}else{M.push(R)}}});O=M}if(z.cacheSize&&P!=="nocache"){y++;setTimeout(function(){var Q,R;if(y>=z.cacheSize*2){y=0;Q=A-z.cacheSize;R={};u(function(U,S){if(U.i>=Q){R[S]=U}});I=R}},0);I[P]={i:A++,results:O}}return O}};H=function(){var K,J;K=TAFFY.mergeObj(TAFFY.mergeObj(r,{insert:undefined}),{getDBI:function(){return E},getroot:function(L){return H.call(L)},context:function(L){if(L){J=TAFFY.mergeObj(J,L.hasOwnProperty("results")?TAFFY.mergeObj(L,{run:new Date(),sort:new Date()}):L)}return J},extend:undefined});J=(this&&this.q)?this:{limit:false,start:false,q:[],filterRaw:[],index:[],order:[],results:false,run:null,sort:null,settings:z};c(arguments,function(L){if(w(L)){J.index.push(L)}else{J.q.push(v(L))}J.filterRaw.push(L)});return K};b++;if(F){E.insert(F)}H.insert=E.insert;H.merge=function(M,L,N){var K={},J=[],O={};N=N||false;L=L||"id";c(M,function(Q){var P;K[L]=Q[L];J.push(Q[L]);P=H(K).first();if(P){E.update(P.___id,Q,N)}else{E.insert(Q,N)}});O[L]=J;return H(O)};H.TAFFY=true;H.sort=E.sort;H.settings=function(J){if(J){z=TAFFY.mergeObj(z,J);if(J.template){H().update(J.template)}}return z};H.store=function(L){var K=false,J;if(localStorage){if(L){J=localStorage.getItem("taffy_"+L);if(J&&J.length>0){H.insert(J);K=true}if(C.length>0){setTimeout(function(){localStorage.setItem("taffy_"+z.storageName,JSON.stringify(C))})}}H.settings({storageName:L})}return H};return H};TAFFY=T;T.each=c;T.eachin=u;T.extend=r.extend;TAFFY.EXIT="TAFFYEXIT";TAFFY.mergeObj=function(z,x){var y={};u(z,function(A,B){y[B]=z[B]});u(x,function(A,B){y[B]=x[B]});return y};TAFFY.has=function(z,y){var x=false,A;if((z.TAFFY)){x=z(y);if(x.length>0){return true}else{return false}}else{switch(T.typeOf(z)){case"object":if(T.isObject(y)){u(y,function(B,C){if(x===true&&!T.isUndefined(z[C])&&z.hasOwnProperty(C)){x=T.has(z[C],y[C])}else{x=false;return TAFFY.EXIT}})}else{if(T.isArray(y)){c(y,function(B,C){x=T.has(z,y[C]);if(x){return TAFFY.EXIT}})}else{if(T.isString(y)){if(!TAFFY.isUndefined(z[y])){return true}else{return false}}}}return x;case"array":if(T.isObject(y)){c(z,function(B,C){x=T.has(z[C],y);if(x===true){return TAFFY.EXIT}})}else{if(T.isArray(y)){c(y,function(C,B){c(z,function(E,D){x=T.has(z[D],y[B]);if(x===true){return TAFFY.EXIT}});if(x===true){return TAFFY.EXIT}})}else{if(T.isString(y)||T.isNumber(y)){x=false;for(A=0;A<z.length;A++){x=T.has(z[A],y);if(x){return true}}}}}return x;case"string":if(T.isString(y)&&y===z){return true}break;default:if(T.typeOf(z)===T.typeOf(y)&&z===y){return true}break}}return false};TAFFY.hasAll=function(A,z){var y=TAFFY,x;if(y.isArray(z)){x=true;c(z,function(B){x=y.has(A,B);if(x===false){return TAFFY.EXIT}});return x}else{return y.has(A,z)}};TAFFY.typeOf=function(x){var y=typeof x;if(y==="object"){if(x){if(typeof x.length==="number"&&!(x.propertyIsEnumerable("length"))){y="array"}}else{y="null"}}return y};TAFFY.getObjectKeys=function(x){var y=[];u(x,function(A,z){y.push(z)});y.sort();return y};TAFFY.isSameArray=function(y,x){return(TAFFY.isArray(y)&&TAFFY.isArray(x)&&y.join(",")===x.join(","))?true:false};TAFFY.isSameObject=function(A,y){var x=TAFFY,z=true;if(x.isObject(A)&&x.isObject(y)){if(x.isSameArray(x.getObjectKeys(A),x.getObjectKeys(y))){u(A,function(B,C){if(!((x.isObject(A[C])&&x.isObject(y[C])&&x.isSameObject(A[C],y[C]))||(x.isArray(A[C])&&x.isArray(y[C])&&x.isSameArray(A[C],y[C]))||(A[C]===y[C]))){z=false;return TAFFY.EXIT}})}else{z=false}}else{z=false}return z};f=["String","Number","Object","Array","Boolean","Null","Function","Undefined"];q=function(x){return function(y){return TAFFY.typeOf(y)===x.toLowerCase()?true:false}};for(p=0;p<f.length;p++){t=f[p];TAFFY["is"+t]=q(t)}}}());if(typeof(exports)==="object"){exports.taffy=TAFFY};


/* ../projects/rtw_plus//randomDirectory/ipad/js/lib/jQuery.templates.js */
/*!
 * jQuery Templates Plugin 1.0.0pre
 * http://github.com/jquery/jquery-tmpl
 * Requires jQuery 1.4.2
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
(function( jQuery, undefined ){
	var oldManip = jQuery.fn.domManip, tmplItmAtt = "_tmplitem", htmlExpr = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,
		newTmplItems = {}, wrappedItems = {}, appendToTmplItems, topTmplItem = { key: 0, data: {} }, itemKey = 0, cloneIndex = 0, stack = [];

	function newTmplItem( options, parentItem, fn, data ) {
		// Returns a template item data structure for a new rendered instance of a template (a 'template item').
		// The content field is a hierarchical array of strings and nested items (to be
		// removed and replaced by nodes field of dom elements, once inserted in DOM).
		var newItem = {
			data: data || (parentItem ? parentItem.data : {}),
			_wrap: parentItem ? parentItem._wrap : null,
			tmpl: null,
			parent: parentItem || null,
			nodes: [],
			calls: tiCalls,
			nest: tiNest,
			wrap: tiWrap,
			html: tiHtml,
			update: tiUpdate
		};
		if ( options ) {
			jQuery.extend( newItem, options, { nodes: [], parent: parentItem });
		}
		if ( fn ) {
			// Build the hierarchical content to be used during insertion into DOM
			newItem.tmpl = fn;
			newItem._ctnt = newItem._ctnt || newItem.tmpl( jQuery, newItem );
			newItem.key = ++itemKey;
			// Keep track of new template item, until it is stored as jQuery Data on DOM element
			(stack.length ? wrappedItems : newTmplItems)[itemKey] = newItem;
		}
		return newItem;
	}

	// Override appendTo etc., in order to provide support for targeting multiple elements. (This code would disappear if integrated in jquery core).
	jQuery.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var ret = [], insert = jQuery( selector ), elems, i, l, tmplItems,
				parent = this.length === 1 && this[0].parentNode;

			appendToTmplItems = newTmplItems || {};
			if ( parent && parent.nodeType === 11 && parent.childNodes.length === 1 && insert.length === 1 ) {
				insert[ original ]( this[0] );
				ret = this;
			} else {
				for ( i = 0, l = insert.length; i < l; i++ ) {
					cloneIndex = i;
					elems = (i > 0 ? this.clone(true) : this).get();
					jQuery( insert[i] )[ original ]( elems );
					ret = ret.concat( elems );
				}
				cloneIndex = 0;
				ret = this.pushStack( ret, name, insert.selector );
			}
			tmplItems = appendToTmplItems;
			appendToTmplItems = null;
			jQuery.tmpl.complete( tmplItems );
			return ret;
		};
	});

	jQuery.fn.extend({
		// Use first wrapped element as template markup.
		// Return wrapped set of template items, obtained by rendering template against data.
		tmpl: function( data, options, parentItem ) {
			return jQuery.tmpl( this[0], data, options, parentItem );
		},

		// Find which rendered template item the first wrapped DOM element belongs to
		tmplItem: function() {
			return jQuery.tmplItem( this[0] );
		},

		// Consider the first wrapped element as a template declaration, and get the compiled template or store it as a named template.
		template: function( name ) {
			return jQuery.template( name, this[0] );
		},

		domManip: function( args, table, callback, options ) {
			if ( args[0] && jQuery.isArray( args[0] )) {
				var dmArgs = jQuery.makeArray( arguments ), elems = args[0], elemsLength = elems.length, i = 0, tmplItem;
				while ( i < elemsLength && !(tmplItem = jQuery.data( elems[i++], "tmplItem" ))) {}
				if ( tmplItem && cloneIndex ) {
					dmArgs[2] = function( fragClone ) {
						// Handler called by oldManip when rendered template has been inserted into DOM.
						jQuery.tmpl.afterManip( this, fragClone, callback );
					};
				}
				oldManip.apply( this, dmArgs );
			} else {
				oldManip.apply( this, arguments );
			}
			cloneIndex = 0;
			if ( !appendToTmplItems ) {
				jQuery.tmpl.complete( newTmplItems );
			}
			return this;
		}
	});

	jQuery.extend({
		// Return wrapped set of template items, obtained by rendering template against data.
		tmpl: function( tmpl, data, options, parentItem ) {
			var ret, topLevel = !parentItem;
			if ( topLevel ) {
				// This is a top-level tmpl call (not from a nested template using {{tmpl}})
				parentItem = topTmplItem;
				tmpl = jQuery.template[tmpl] || jQuery.template( null, tmpl );
				wrappedItems = {}; // Any wrapped items will be rebuilt, since this is top level
			} else if ( !tmpl ) {
				// The template item is already associated with DOM - this is a refresh.
				// Re-evaluate rendered template for the parentItem
				tmpl = parentItem.tmpl;
				newTmplItems[parentItem.key] = parentItem;
				parentItem.nodes = [];
				if ( parentItem.wrapped ) {
					updateWrapped( parentItem, parentItem.wrapped );
				}
				// Rebuild, without creating a new template item
				return jQuery( build( parentItem, null, parentItem.tmpl( jQuery, parentItem ) ));
			}
			if ( !tmpl ) {
				return []; // Could throw...
			}
			if ( typeof data === "function" ) {
				data = data.call( parentItem || {} );
			}
			if ( options && options.wrapped ) {
				updateWrapped( options, options.wrapped );
			}
			ret = jQuery.isArray( data ) ?
				jQuery.map( data, function( dataItem ) {
					return dataItem ? newTmplItem( options, parentItem, tmpl, dataItem ) : null;
				}) :
				[ newTmplItem( options, parentItem, tmpl, data ) ];
			return topLevel ? jQuery( build( parentItem, null, ret ) ) : ret;
		},

		// Return rendered template item for an element.
		tmplItem: function( elem ) {
			var tmplItem;
			if ( elem instanceof jQuery ) {
				elem = elem[0];
			}
			while ( elem && elem.nodeType === 1 && !(tmplItem = jQuery.data( elem, "tmplItem" )) && (elem = elem.parentNode) ) {}
			return tmplItem || topTmplItem;
		},

		// Set:
		// Use $.template( name, tmpl ) to cache a named template,
		// where tmpl is a template string, a script element or a jQuery instance wrapping a script element, etc.
		// Use $( "selector" ).template( name ) to provide access by name to a script block template declaration.

		// Get:
		// Use $.template( name ) to access a cached template.
		// Also $( selectorToScriptBlock ).template(), or $.template( null, templateString )
		// will return the compiled template, without adding a name reference.
		// If templateString includes at least one HTML tag, $.template( templateString ) is equivalent
		// to $.template( null, templateString )
		template: function( name, tmpl ) {
			if (tmpl) {
				// Compile template and associate with name
				if ( typeof tmpl === "string" ) {
					// This is an HTML string being passed directly in.
					tmpl = buildTmplFn( tmpl )
				} else if ( tmpl instanceof jQuery ) {
					tmpl = tmpl[0] || {};
				}
				if ( tmpl.nodeType ) {
					// If this is a template block, use cached copy, or generate tmpl function and cache.
					tmpl = jQuery.data( tmpl, "tmpl" ) || jQuery.data( tmpl, "tmpl", buildTmplFn( tmpl.innerHTML ));
					// Issue: In IE, if the container element is not a script block, the innerHTML will remove quotes from attribute values whenever the value does not include white space.
					// This means that foo="${x}" will not work if the value of x includes white space: foo="${x}" -> foo=value of x.
					// To correct this, include space in tag: foo="${ x }" -> foo="value of x"
				}
				return typeof name === "string" ? (jQuery.template[name] = tmpl) : tmpl;
			}
			// Return named compiled template
			return name ? (typeof name !== "string" ? jQuery.template( null, name ):
				(jQuery.template[name] ||
					// If not in map, treat as a selector. (If integrated with core, use quickExpr.exec)
					jQuery.template( null, htmlExpr.test( name ) ? name : jQuery( name )))) : null;
		},

		encode: function( text ) {
			// Do HTML encoding replacing < > & and ' and " by corresponding entities.
			return ("" + text).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;");
		}
	});

	jQuery.extend( jQuery.tmpl, {
		tag: {
			"tmpl": {
				_default: { $2: "null" },
				open: "if($notnull_1){_=_.concat($item.nest($1,$2));}"
				// tmpl target parameter can be of type function, so use $1, not $1a (so not auto detection of functions)
				// This means that {{tmpl foo}} treats foo as a template (which IS a function).
				// Explicit parens can be used if foo is a function that returns a template: {{tmpl foo()}}.
			},
			"wrap": {
				_default: { $2: "null" },
				open: "$item.calls(_,$1,$2);_=[];",
				close: "call=$item.calls();_=call._.concat($item.wrap(call,_));"
			},
			"each": {
				_default: { $2: "$index, $value" },
				open: "if($notnull_1){$.each($1a,function($2){with(this){",
				close: "}});}"
			},
			"if": {
				open: "if(($notnull_1) && $1a){",
				close: "}"
			},
			"else": {
				_default: { $1: "true" },
				open: "}else if(($notnull_1) && $1a){"
			},
			"html": {
				// Unecoded expression evaluation.
				open: "if($notnull_1){_.push($1a);}"
			},
			"=": {
				// Encoded expression evaluation. Abbreviated form is ${}.
				_default: { $1: "$data" },
				open: "if($notnull_1){_.push($.encode($1a));}"
			},
			"!": {
				// Comment tag. Skipped by parser
				open: ""
			}
		},

		// This stub can be overridden, e.g. in jquery.tmplPlus for providing rendered events
		complete: function( items ) {
			newTmplItems = {};
		},

		// Call this from code which overrides domManip, or equivalent
		// Manage cloning/storing template items etc.
		afterManip: function afterManip( elem, fragClone, callback ) {
			// Provides cloned fragment ready for fixup prior to and after insertion into DOM
			var content = fragClone.nodeType === 11 ?
				jQuery.makeArray(fragClone.childNodes) :
				fragClone.nodeType === 1 ? [fragClone] : [];

			// Return fragment to original caller (e.g. append) for DOM insertion
			callback.call( elem, fragClone );

			// Fragment has been inserted:- Add inserted nodes to tmplItem data structure. Replace inserted element annotations by jQuery.data.
			storeTmplItems( content );
			cloneIndex++;
		}
	});

	//========================== Private helper functions, used by code above ==========================

	function build( tmplItem, nested, content ) {
		// Convert hierarchical content into flat string array
		// and finally return array of fragments ready for DOM insertion
		var frag, ret = content ? jQuery.map( content, function( item ) {
			return (typeof item === "string") ?
				// Insert template item annotations, to be converted to jQuery.data( "tmplItem" ) when elems are inserted into DOM.
				(tmplItem.key ? item.replace( /(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g, "$1 " + tmplItmAtt + "=\"" + tmplItem.key + "\" $2" ) : item) :
				// This is a child template item. Build nested template.
				build( item, tmplItem, item._ctnt );
		}) :
		// If content is not defined, insert tmplItem directly. Not a template item. May be a string, or a string array, e.g. from {{html $item.html()}}.
		tmplItem;
		if ( nested ) {
			return ret;
		}

		// top-level template
		ret = ret.join("");

		// Support templates which have initial or final text nodes, or consist only of text
		// Also support HTML entities within the HTML markup.
		ret.replace( /^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/, function( all, before, middle, after) {
			frag = jQuery( middle ).get();

			storeTmplItems( frag );
			if ( before ) {
				frag = unencode( before ).concat(frag);
			}
			if ( after ) {
				frag = frag.concat(unencode( after ));
			}
		});
		return frag ? frag : unencode( ret );
	}

	function unencode( text ) {
		// Use createElement, since createTextNode will not render HTML entities correctly
		var el = document.createElement( "div" );
		el.innerHTML = text;
		return jQuery.makeArray(el.childNodes);
	}

	// Generate a reusable function that will serve to render a template against data
	function buildTmplFn( markup ) {
		return new Function("jQuery","$item",
			"var $=jQuery,call,_=[],$data=$item.data;" +

			// Introduce the data as local variables using with(){}
			"with($data){_.push('" +

			// Convert the template into pure JavaScript
			jQuery.trim(markup)
				.replace( /([\\'])/g, "\\$1" )
				.replace( /[\r\t\n]/g, " " )
				.replace( /\$\{([^\}]*)\}/g, "{{= $1}}" )
				.replace( /\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,
				function( all, slash, type, fnargs, target, parens, args ) {
					var tag = jQuery.tmpl.tag[ type ], def, expr, exprAutoFnDetect;
					if ( !tag ) {
						throw "Template command not found: " + type;
					}
					def = tag._default || [];
					if ( parens && !/\w$/.test(target)) {
						target += parens;
						parens = "";
					}
					if ( target ) {
						target = unescape( target );
						args = args ? ("," + unescape( args ) + ")") : (parens ? ")" : "");
						// Support for target being things like a.toLowerCase();
						// In that case don't call with template item as 'this' pointer. Just evaluate...
						expr = parens ? (target.indexOf(".") > -1 ? target + unescape( parens ) : ("(" + target + ").call($item" + args)) : target;
						exprAutoFnDetect = parens ? expr : "(typeof(" + target + ")==='function'?(" + target + ").call($item):(" + target + "))";
					} else {
						exprAutoFnDetect = expr = def.$1 || "null";
					}
					fnargs = unescape( fnargs );
					return "');" +
						tag[ slash ? "close" : "open" ]
							.split( "$notnull_1" ).join( target ? "typeof(" + target + ")!=='undefined' && (" + target + ")!=null" : "true" )
							.split( "$1a" ).join( exprAutoFnDetect )
							.split( "$1" ).join( expr )
							.split( "$2" ).join( fnargs || def.$2 || "" ) +
						"_.push('";
				}) +
			"');}return _;"
		);
	}
	function updateWrapped( options, wrapped ) {
		// Build the wrapped content.
		options._wrap = build( options, true,
			// Suport imperative scenario in which options.wrapped can be set to a selector or an HTML string.
			jQuery.isArray( wrapped ) ? wrapped : [htmlExpr.test( wrapped ) ? wrapped : jQuery( wrapped ).html()]
		).join("");
	}

	function unescape( args ) {
		return args ? args.replace( /\\'/g, "'").replace(/\\\\/g, "\\" ) : null;
	}
	function outerHtml( elem ) {
		var div = document.createElement("div");
		div.appendChild( elem.cloneNode(true) );
		return div.innerHTML;
	}

	// Store template items in jQuery.data(), ensuring a unique tmplItem data data structure for each rendered template instance.
	function storeTmplItems( content ) {
		var keySuffix = "_" + cloneIndex, elem, elems, newClonedItems = {}, i, l, m;
		for ( i = 0, l = content.length; i < l; i++ ) {
			if ( (elem = content[i]).nodeType !== 1 ) {
				continue;
			}
			elems = elem.getElementsByTagName("*");
			for ( m = elems.length - 1; m >= 0; m-- ) {
				processItemKey( elems[m] );
			}
			processItemKey( elem );
		}
		function processItemKey( el ) {
			var pntKey, pntNode = el, pntItem, tmplItem, key;
			// Ensure that each rendered template inserted into the DOM has its own template item,
			if ( (key = el.getAttribute( tmplItmAtt ))) {
				while ( pntNode.parentNode && (pntNode = pntNode.parentNode).nodeType === 1 && !(pntKey = pntNode.getAttribute( tmplItmAtt ))) { }
				if ( pntKey !== key ) {
					// The next ancestor with a _tmplitem expando is on a different key than this one.
					// So this is a top-level element within this template item
					// Set pntNode to the key of the parentNode, or to 0 if pntNode.parentNode is null, or pntNode is a fragment.
					pntNode = pntNode.parentNode ? (pntNode.nodeType === 11 ? 0 : (pntNode.getAttribute( tmplItmAtt ) || 0)) : 0;
					if ( !(tmplItem = newTmplItems[key]) ) {
						// The item is for wrapped content, and was copied from the temporary parent wrappedItem.
						tmplItem = wrappedItems[key];
						tmplItem = newTmplItem( tmplItem, newTmplItems[pntNode]||wrappedItems[pntNode] );
						tmplItem.key = ++itemKey;
						newTmplItems[itemKey] = tmplItem;
					}
					if ( cloneIndex ) {
						cloneTmplItem( key );
					}
				}
				el.removeAttribute( tmplItmAtt );
			} else if ( cloneIndex && (tmplItem = jQuery.data( el, "tmplItem" )) ) {
				// This was a rendered element, cloned during append or appendTo etc.
				// TmplItem stored in jQuery data has already been cloned in cloneCopyEvent. We must replace it with a fresh cloned tmplItem.
				cloneTmplItem( tmplItem.key );
				newTmplItems[tmplItem.key] = tmplItem;
				pntNode = jQuery.data( el.parentNode, "tmplItem" );
				pntNode = pntNode ? pntNode.key : 0;
			}
			if ( tmplItem ) {
				pntItem = tmplItem;
				// Find the template item of the parent element.
				// (Using !=, not !==, since pntItem.key is number, and pntNode may be a string)
				while ( pntItem && pntItem.key != pntNode ) {
					// Add this element as a top-level node for this rendered template item, as well as for any
					// ancestor items between this item and the item of its parent element
					pntItem.nodes.push( el );
					pntItem = pntItem.parent;
				}
				// Delete content built during rendering - reduce API surface area and memory use, and avoid exposing of stale data after rendering...
				delete tmplItem._ctnt;
				delete tmplItem._wrap;
				// Store template item as jQuery data on the element
				jQuery.data( el, "tmplItem", tmplItem );
			}
			function cloneTmplItem( key ) {
				key = key + keySuffix;
				tmplItem = newClonedItems[key] =
					(newClonedItems[key] || newTmplItem( tmplItem, newTmplItems[tmplItem.parent.key + keySuffix] || tmplItem.parent ));
			}
		}
	}

	//---- Helper functions for template item ----

	function tiCalls( content, tmpl, data, options ) {
		if ( !content ) {
			return stack.pop();
		}
		stack.push({ _: content, tmpl: tmpl, item:this, data: data, options: options });
	}

	function tiNest( tmpl, data, options ) {
		// nested template, using {{tmpl}} tag
		return jQuery.tmpl( jQuery.template( tmpl ), data, options, this );
	}

	function tiWrap( call, wrapped ) {
		// nested template, using {{wrap}} tag
		var options = call.options || {};
		options.wrapped = wrapped;
		// Apply the template, which may incorporate wrapped content,
		return jQuery.tmpl( jQuery.template( call.tmpl ), call.data, options, call.item );
	}

	function tiHtml( filter, textOnly ) {
		var wrapped = this._wrap;
		return jQuery.map(
			jQuery( jQuery.isArray( wrapped ) ? wrapped.join("") : wrapped ).filter( filter || "*" ),
			function(e) {
				return textOnly ?
					e.innerText || e.textContent :
					e.outerHTML || outerHtml(e);
			});
	}

	function tiUpdate() {
		var coll = this.nodes;
		jQuery.tmpl( null, null, null, this).insertBefore( coll[0] );
		jQuery( coll ).remove();
	}
})( jQuery );


/* ../projects/rtw_plus//randomDirectory/ipad/js/lib/jquery.cookie.js */
/**
 * jQuery Cookie plugin
 *
 * Copyright (c) 2010 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
jQuery.cookie = function (key, value, options) {

    // key and at least value given, set cookie...
    if (arguments.length > 1 && String(value) !== "[object Object]") {
        options = jQuery.extend({}, options);

        if (value === null || value === undefined) {
            options.expires = -1;
        }

        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }

        value = String(value);

        return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? value : encodeURIComponent(value),
            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''
        ].join(''));
    }

    // key and possibly options given, get cookie...
    options = value || {};
    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};


/* ../projects/rtw_plus//randomDirectory/ipad/js/lib/jquery.easing.js */

jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	linear: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

jQuery.extend( jQuery.easing,
{
	easeIn: function (x, t, b, c, d) {
		return jQuery.easing.easeInQuad(x, t, b, c, d);
	},
	"ease-in": function (x, t, b, c, d) {
		return jQuery.easing.easeInQuad(x, t, b, c, d);
	},
	easeOut: function (x, t, b, c, d) {
		return jQuery.easing.easeOutQuad(x, t, b, c, d);
	},
	"ease-out": function (x, t, b, c, d) {
		return jQuery.easing.easeOutQuad(x, t, b, c, d);
	},
	easeInOut: function (x, t, b, c, d) {
		return jQuery.easing.easeInOutQuad(x, t, b, c, d);
	},
	"ease-in-out": function (x, t, b, c, d) {
		return jQuery.easing.easeInOutQuad(x, t, b, c, d);
	},
	expoin: function(x, t, b, c, d) {
		return jQuery.easing.easeInExpo(x, t, b, c, d);
	},
	expoout: function(x, t, b, c, d) {
		return jQuery.easing.easeOutExpo(x, t, b, c, d);
	},
	expoinout: function(x, t, b, c, d) {
		return jQuery.easing.easeInOutExpo(x, t, b, c, d);
	},
	bouncein: function(x, t, b, c, d) {
		return jQuery.easing.easeInBounce(x, t, b, c, d);
	},
	bounceout: function(x, t, b, c, d) {
		return jQuery.easing.easeOutBounce(x, t, b, c, d);
	},
	bounceinout: function(x, t, b, c, d) {
		return jQuery.easing.easeInOutBounce(x, t, b, c, d);
	},
	elasin: function(x, t, b, c, d) {
		return jQuery.easing.easeInElastic(x, t, b, c, d);
	},
	elasout: function(x, t, b, c, d) {
		return jQuery.easing.easeOutElastic(x, t, b, c, d);
	},
	elasinout: function(x, t, b, c, d) {
		return jQuery.easing.easeInOutElastic(x, t, b, c, d);
	},
	backin: function(x, t, b, c, d) {
		return jQuery.easing.easeInBack(x, t, b, c, d);
	},
	backout: function(x, t, b, c, d) {
		return jQuery.easing.easeOutBack(x, t, b, c, d);
	},
	backinout: function(x, t, b, c, d) {
		return jQuery.easing.easeInOutBack(x, t, b, c, d);
	}
});

/* ../projects/rtw_plus//randomDirectory/ipad/js/lib/jquery.history.min.js */
/*!
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

// Script: jQuery hashchange event
//
// *Version: 1.3, Last updated: 7/21/2010*
//
// Project Home - http://benalman.com/projects/jquery-hashchange-plugin/
// GitHub       - http://github.com/cowboy/jquery-hashchange/
// Source       - http://github.com/cowboy/jquery-hashchange/raw/master/jquery.ba-hashchange.js
// (Minified)   - http://github.com/cowboy/jquery-hashchange/raw/master/jquery.ba-hashchange.min.js (0.8kb gzipped)
//
// About: License
//
// Copyright (c) 2010 "Cowboy" Ben Alman,
// Dual licensed under the MIT and GPL licenses.
// http://benalman.com/about/license/
//
// About: Examples
//
// These working examples, complete with fully commented code, illustrate a few
// ways in which this plugin can be used.
//
// hashchange event - http://benalman.com/code/projects/jquery-hashchange/examples/hashchange/
// document.domain - http://benalman.com/code/projects/jquery-hashchange/examples/document_domain/
//
// About: Support and Testing
//
// Information about what version or versions of jQuery this plugin has been
// tested with, what browsers it has been tested in, and where the unit tests
// reside (so you can test it yourself).
//
// jQuery Versions - 1.2.6, 1.3.2, 1.4.1, 1.4.2
// Browsers Tested - Internet Explorer 6-8, Firefox 2-4, Chrome 5-6, Safari 3.2-5,
//                   Opera 9.6-10.60, iPhone 3.1, Android 1.6-2.2, BlackBerry 4.6-5.
// Unit Tests      - http://benalman.com/code/projects/jquery-hashchange/unit/
//
// About: Known issues
//
// While this jQuery hashchange event implementation is quite stable and
// robust, there are a few unfortunate browser bugs surrounding expected
// hashchange event-based behaviors, independent of any JavaScript
// window.onhashchange abstraction. See the following examples for more
// information:
//
// Chrome: Back Button - http://benalman.com/code/projects/jquery-hashchange/examples/bug-chrome-back-button/
// Firefox: Remote XMLHttpRequest - http://benalman.com/code/projects/jquery-hashchange/examples/bug-firefox-remote-xhr/
// WebKit: Back Button in an Iframe - http://benalman.com/code/projects/jquery-hashchange/examples/bug-webkit-hash-iframe/
// Safari: Back Button from a different domain - http://benalman.com/code/projects/jquery-hashchange/examples/bug-safari-back-from-diff-domain/
//
// Also note that should a browser natively support the window.onhashchange
// event, but not report that it does, the fallback polling loop will be used.
//
// About: Release History
//
// 1.3   - (7/21/2010) Reorganized IE6/7 Iframe code to make it more
//         "removable" for mobile-only development. Added IE6/7 document.title
//         support. Attempted to make Iframe as hidden as possible by using
//         techniques from http://www.paciellogroup.com/blog/?p=604. Added
//         support for the "shortcut" format $(window).hashchange( fn ) and
//         $(window).hashchange() like jQuery provides for built-in events.
//         Renamed jQuery.hashchangeDelay to <jQuery.fn.hashchange.delay> and
//         lowered its default value to 50. Added <jQuery.fn.hashchange.domain>
//         and <jQuery.fn.hashchange.src> properties plus document-domain.html
//         file to address access denied issues when setting document.domain in
//         IE6/7.
// 1.2   - (2/11/2010) Fixed a bug where coming back to a page using this plugin
//         from a page on another domain would cause an error in Safari 4. Also,
//         IE6/7 Iframe is now inserted after the body (this actually works),
//         which prevents the page from scrolling when the event is first bound.
//         Event can also now be bound before DOM ready, but it won't be usable
//         before then in IE6/7.
// 1.1   - (1/21/2010) Incorporated document.documentMode test to fix IE8 bug
//         where browser version is incorrectly reported as 8.0, despite
//         inclusion of the X-UA-Compatible IE=EmulateIE7 meta tag.
// 1.0   - (1/9/2010) Initial Release. Broke out the jQuery BBQ event.special
//         window.onhashchange functionality into a separate plugin for users
//         who want just the basic event & back button support, without all the
//         extra awesomeness that BBQ provides. This plugin will be included as
//         part of jQuery BBQ, but also be available separately.

(function($,window,undefined){
  '$:nomunge'; // Used by YUI compressor.

  // Reused string.
  var str_hashchange = 'hashchange',

    // Method / object references.
    doc = document,
    fake_onhashchange,
    special = $.event.special,

    // Does the browser support window.onhashchange? Note that IE8 running in
    // IE7 compatibility mode reports true for 'onhashchange' in window, even
    // though the event isn't supported, so also test document.documentMode.
    doc_mode = doc.documentMode,
    supports_onhashchange = 'on' + str_hashchange in window && ( doc_mode === undefined || doc_mode > 7 );

  // Get location.hash (or what you'd expect location.hash to be) sans any
  // leading #. Thanks for making this necessary, Firefox!
  function get_fragment( url ) {
    url = url || location.href;
    return '#' + url.replace( /^[^#]*#?(.*)$/, '$1' );
  };

  // Method: jQuery.fn.hashchange
  //
  // Bind a handler to the window.onhashchange event or trigger all bound
  // window.onhashchange event handlers. This behavior is consistent with
  // jQuery's built-in event handlers.
  //
  // Usage:
  //
  // > jQuery(window).hashchange( [ handler ] );
  //
  // Arguments:
  //
  //  handler - (Function) Optional handler to be bound to the hashchange
  //    event. This is a "shortcut" for the more verbose form:
  //    jQuery(window).bind( 'hashchange', handler ). If handler is omitted,
  //    all bound window.onhashchange event handlers will be triggered. This
  //    is a shortcut for the more verbose
  //    jQuery(window).trigger( 'hashchange' ). These forms are described in
  //    the <hashchange event> section.
  //
  // Returns:
  //
  //  (jQuery) The initial jQuery collection of elements.

  // Allow the "shortcut" format $(elem).hashchange( fn ) for binding and
  // $(elem).hashchange() for triggering, like jQuery does for built-in events.
  $.fn[ str_hashchange ] = function( fn ) {
    return fn ? this.bind( str_hashchange, fn ) : this.trigger( str_hashchange );
  };

  // Property: jQuery.fn.hashchange.delay
  //
  // The numeric interval (in milliseconds) at which the <hashchange event>
  // polling loop executes. Defaults to 50.

  // Property: jQuery.fn.hashchange.domain
  //
  // If you're setting document.domain in your JavaScript, and you want hash
  // history to work in IE6/7, not only must this property be set, but you must
  // also set document.domain BEFORE jQuery is loaded into the page. This
  // property is only applicable if you are supporting IE6/7 (or IE8 operating
  // in "IE7 compatibility" mode).
  //
  // In addition, the <jQuery.fn.hashchange.src> property must be set to the
  // path of the included "document-domain.html" file, which can be renamed or
  // modified if necessary (note that the document.domain specified must be the
  // same in both your main JavaScript as well as in this file).
  //
  // Usage:
  //
  // jQuery.fn.hashchange.domain = document.domain;

  // Property: jQuery.fn.hashchange.src
  //
  // If, for some reason, you need to specify an Iframe src file (for example,
  // when setting document.domain as in <jQuery.fn.hashchange.domain>), you can
  // do so using this property. Note that when using this property, history
  // won't be recorded in IE6/7 until the Iframe src file loads. This property
  // is only applicable if you are supporting IE6/7 (or IE8 operating in "IE7
  // compatibility" mode).
  //
  // Usage:
  //
  // jQuery.fn.hashchange.src = 'path/to/file.html';

  $.fn[ str_hashchange ].delay = 50;
  /*
  $.fn[ str_hashchange ].domain = null;
  $.fn[ str_hashchange ].src = null;
  */

  // Event: hashchange event
  //
  // Fired when location.hash changes. In browsers that support it, the native
  // HTML5 window.onhashchange event is used, otherwise a polling loop is
  // initialized, running every <jQuery.fn.hashchange.delay> milliseconds to
  // see if the hash has changed. In IE6/7 (and IE8 operating in "IE7
  // compatibility" mode), a hidden Iframe is created to allow the back button
  // and hash-based history to work.
  //
  // Usage as described in <jQuery.fn.hashchange>:
  //
  // > // Bind an event handler.
  // > jQuery(window).hashchange( function(e) {
  // >   var hash = location.hash;
  // >   ...
  // > });
  // >
  // > // Manually trigger the event handler.
  // > jQuery(window).hashchange();
  //
  // A more verbose usage that allows for event namespacing:
  //
  // > // Bind an event handler.
  // > jQuery(window).bind( 'hashchange', function(e) {
  // >   var hash = location.hash;
  // >   ...
  // > });
  // >
  // > // Manually trigger the event handler.
  // > jQuery(window).trigger( 'hashchange' );
  //
  // Additional Notes:
  //
  // * The polling loop and Iframe are not created until at least one handler
  //   is actually bound to the 'hashchange' event.
  // * If you need the bound handler(s) to execute immediately, in cases where
  //   a location.hash exists on page load, via bookmark or page refresh for
  //   example, use jQuery(window).hashchange() or the more verbose
  //   jQuery(window).trigger( 'hashchange' ).
  // * The event can be bound before DOM ready, but since it won't be usable
  //   before then in IE6/7 (due to the necessary Iframe), recommended usage is
  //   to bind it inside a DOM ready handler.

  // Override existing $.event.special.hashchange methods (allowing this plugin
  // to be defined after jQuery BBQ in BBQ's source code).
  special[ str_hashchange ] = $.extend( special[ str_hashchange ], {

    // Called only when the first 'hashchange' event is bound to window.
    setup: function() {
      // If window.onhashchange is supported natively, there's nothing to do..
      if ( supports_onhashchange ) { return false; }

      // Otherwise, we need to create our own. And we don't want to call this
      // until the user binds to the event, just in case they never do, since it
      // will create a polling loop and possibly even a hidden Iframe.
      $( fake_onhashchange.start );
    },

    // Called only when the last 'hashchange' event is unbound from window.
    teardown: function() {
      // If window.onhashchange is supported natively, there's nothing to do..
      if ( supports_onhashchange ) { return false; }

      // Otherwise, we need to stop ours (if possible).
      $( fake_onhashchange.stop );
    }

  });

  // fake_onhashchange does all the work of triggering the window.onhashchange
  // event for browsers that don't natively support it, including creating a
  // polling loop to watch for hash changes and in IE 6/7 creating a hidden
  // Iframe to enable back and forward.
  fake_onhashchange = (function(){
    var self = {},
      timeout_id,

      // Remember the initial hash so it doesn't get triggered immediately.
      last_hash = get_fragment(),

      fn_retval = function(val){ return val; },
      history_set = fn_retval,
      history_get = fn_retval;

    // Start the polling loop.
    self.start = function() {
      timeout_id || poll();
    };

    // Stop the polling loop.
    self.stop = function() {
      timeout_id && clearTimeout( timeout_id );
      timeout_id = undefined;
    };

    // This polling loop checks every $.fn.hashchange.delay milliseconds to see
    // if location.hash has changed, and triggers the 'hashchange' event on
    // window when necessary.
    function poll() {
      var hash = get_fragment(),
        history_hash = history_get( last_hash );

      if ( hash !== last_hash ) {
        history_set( last_hash = hash, history_hash );

        $(window).trigger( str_hashchange );

      } else if ( history_hash !== last_hash ) {
        location.href = location.href.replace( /#.*/, '' ) + history_hash;
      }

      timeout_id = setTimeout( poll, $.fn[ str_hashchange ].delay );
    };
    /*
    // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
    // vvvvvvvvvvvvvvvvvvv REMOVE IF NOT SUPPORTING IE6/7/8 vvvvvvvvvvvvvvvvvvv
    // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
    $.browser.msie && !supports_onhashchange && (function(){
      // Not only do IE6/7 need the "magical" Iframe treatment, but so does IE8
      // when running in "IE7 compatibility" mode.

      var iframe,
        iframe_src;

      // When the event is bound and polling starts in IE 6/7, create a hidden
      // Iframe for history handling.
      self.start = function(){
        if ( !iframe ) {
          iframe_src = $.fn[ str_hashchange ].src;
          iframe_src = iframe_src && iframe_src + get_fragment();

          // Create hidden Iframe. Attempt to make Iframe as hidden as possible
          // by using techniques from http://www.paciellogroup.com/blog/?p=604.
          iframe = $('<iframe tabindex="-1" title="empty"/>').hide()

            // When Iframe has completely loaded, initialize the history and
            // start polling.
            .one( 'load', function(){
              iframe_src || history_set( get_fragment() );
              poll();
            })

            // Load Iframe src if specified, otherwise nothing.
            .attr( 'src', iframe_src || 'javascript:0' )

            // Append Iframe after the end of the body to prevent unnecessary
            // initial page scrolling (yes, this works).
            .insertAfter( 'body' )[0].contentWindow;

          // Whenever `document.title` changes, update the Iframe's title to
          // prettify the back/next history menu entries. Since IE sometimes
          // errors with "Unspecified error" the very first time this is set
          // (yes, very useful) wrap this with a try/catch block.
          doc.onpropertychange = function(){
            try {
              if ( event.propertyName === 'title' ) {
                iframe.document.title = doc.title;
              }
            } catch(e) {}
          };

        }
      };

      // Override the "stop" method since an IE6/7 Iframe was created. Even
      // if there are no longer any bound event handlers, the polling loop
      // is still necessary for back/next to work at all!
      self.stop = fn_retval;

      // Get history by looking at the hidden Iframe's location.hash.
      history_get = function() {
        return get_fragment( iframe.location.href );
      };

      // Set a new history item by opening and then closing the Iframe
      // document, *then* setting its location.hash. If document.domain has
      // been set, update that as well.
      history_set = function( hash, history_hash ) {
        var iframe_doc = iframe.document;
          domain = $.fn[ str_hashchange ].domain;

        if ( hash !== history_hash ) {
          // Update Iframe with any initial `document.title` that might be set.
          iframe_doc.title = doc.title;

          // Opening the Iframe's document after it has been closed is what
          // actually adds a history entry.
          iframe_doc.open();

          // Set document.domain for the Iframe document as well, if necessary.
          domain && iframe_doc.write( '<script>document.domain="' + domain + '"</script>' );

          iframe_doc.close();

          // Update the Iframe's hash, for great justice.
          iframe.location.hash = hash;
        }
      };

    })();
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    // ^^^^^^^^^^^^^^^^^^^ REMOVE IF NOT SUPPORTING IE6/7/8 ^^^^^^^^^^^^^^^^^^^
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    */
    return self;
  })();

})(jQuery,this);

/* ../projects/rtw_plus//randomDirectory/ipad/js/lib/jquery.mousewheel.min.js */
/* Copyright (c) 2010 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.4
 *
 * Requires: 1.2.2+
 */
(function(c){var a=["DOMMouseScroll","mousewheel"];c.event.special.mousewheel={setup:function(){if(this.addEventListener){for(var d=a.length;d;){this.addEventListener(a[--d],b,false)}}else{this.onmousewheel=b}},teardown:function(){if(this.removeEventListener){for(var d=a.length;d;){this.removeEventListener(a[--d],b,false)}}else{this.onmousewheel=null}}};c.fn.extend({mousewheel:function(d){return d?this.bind("mousewheel",d):this.trigger("mousewheel")},unmousewheel:function(d){return this.unbind("mousewheel",d)}});function b(i){var g=i||window.event,f=[].slice.call(arguments,1),j=0,h=true,e=0,d=0;i=c.event.fix(g);i.type="mousewheel";if(i.wheelDelta){j=i.wheelDelta/120}if(i.detail){j=-i.detail/3}d=j;if(g.axis!==undefined&&g.axis===g.HORIZONTAL_AXIS){d=0;e=-1*j}if(g.wheelDeltaY!==undefined){d=g.wheelDeltaY/120}if(g.wheelDeltaX!==undefined){e=-1*g.wheelDeltaX/120}f.unshift(i,j,e,d);return c.event.handle.apply(this,f)}})(jQuery);

/* ../projects/rtw_plus//randomDirectory/ipad/js/lib/jquery.tools.min.js */
/*
 * jQuery Tools 1.2.5 - The missing UI library for the Web
 *
 * [tooltip, tooltip.slide]
 *
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 *
 * http://flowplayer.org/tools/
 *
 * File generated: Mon Feb 07 12:42:06 GMT 2011
 */
(function(f){function p(a,b,c){var h=c.relative?a.position().top:a.offset().top,d=c.relative?a.position().left:a.offset().left,i=c.position[0];h-=b.outerHeight()-c.offset[0];d+=a.outerWidth()+c.offset[1];if(/iPad/i.test(navigator.userAgent))h-=f(window).scrollTop();var j=b.outerHeight()+a.outerHeight();if(i=="center")h+=j/2;if(i=="bottom")h+=j;i=c.position[1];a=b.outerWidth()+a.outerWidth();if(i=="center")d-=a/2;if(i=="left")d-=a;return{top:h,left:d}}function u(a,b){var c=this,h=a.add(c),d,i=0,j=
0,m=a.attr("title"),q=a.attr("data-tooltip"),r=o[b.effect],l,s=a.is(":input"),v=s&&a.is(":checkbox, :radio, select, :button, :submit"),t=a.attr("type"),k=b.events[t]||b.events[s?v?"widget":"input":"def"];if(!r)throw'Nonexistent effect "'+b.effect+'"';k=k.split(/,\s*/);if(k.length!=2)throw"Tooltip: bad events configuration for "+t;a.bind(k[0],function(e){clearTimeout(i);if(b.predelay)j=setTimeout(function(){c.show(e)},b.predelay);else c.show(e)}).bind(k[1],function(e){clearTimeout(j);if(b.delay)i=
setTimeout(function(){c.hide(e)},b.delay);else c.hide(e)});if(m&&b.cancelDefault){a.removeAttr("title");a.data("title",m)}f.extend(c,{show:function(e){if(!d){if(q)d=f(q);else if(b.tip)d=f(b.tip).eq(0);else if(m)d=f(b.layout).addClass(b.tipClass).appendTo(document.body).hide().append(m);else{d=a.next();d.length||(d=a.parent().next())}if(!d.length)throw"Cannot find tooltip for "+a;}if(c.isShown())return c;d.stop(true,true);var g=p(a,d,b);b.tip&&d.html(a.data("title"));e=e||f.Event();e.type="onBeforeShow";
h.trigger(e,[g]);if(e.isDefaultPrevented())return c;g=p(a,d,b);d.css({position:"absolute",top:g.top,left:g.left});l=true;r[0].call(c,function(){e.type="onShow";l="full";h.trigger(e)});g=b.events.tooltip.split(/,\s*/);if(!d.data("__set")){d.bind(g[0],function(){clearTimeout(i);clearTimeout(j)});g[1]&&!a.is("input:not(:checkbox, :radio), textarea")&&d.bind(g[1],function(n){n.relatedTarget!=a[0]&&a.trigger(k[1].split(" ")[0])});d.data("__set",true)}return c},hide:function(e){if(!d||!c.isShown())return c;
e=e||f.Event();e.type="onBeforeHide";h.trigger(e);if(!e.isDefaultPrevented()){l=false;o[b.effect][1].call(c,function(){e.type="onHide";h.trigger(e)});return c}},isShown:function(e){return e?l=="full":l},getConf:function(){return b},getTip:function(){return d},getTrigger:function(){return a}});f.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","),function(e,g){f.isFunction(b[g])&&f(c).bind(g,b[g]);c[g]=function(n){n&&f(c).bind(g,n);return c}})}f.tools=f.tools||{version:"1.2.5"};f.tools.tooltip=
{conf:{effect:"toggle",fadeOutSpeed:"fast",predelay:0,delay:30,opacity:1,tip:0,position:["top","center"],offset:[0,0],relative:false,cancelDefault:true,events:{def:"mouseenter,mouseleave",input:"focus,blur",widget:"focus mouseenter,blur mouseleave",tooltip:"mouseenter,mouseleave"},layout:"<div/>",tipClass:"tooltip"},addEffect:function(a,b,c){o[a]=[b,c]}};var o={toggle:[function(a){var b=this.getConf(),c=this.getTip();b=b.opacity;b<1&&c.css({opacity:b});c.show();a.call()},function(a){this.getTip().hide();
a.call()}],fade:[function(a){var b=this.getConf();this.getTip().fadeTo(b.fadeInSpeed,b.opacity,a)},function(a){this.getTip().fadeOut(this.getConf().fadeOutSpeed,a)}]};f.fn.tooltip=function(a){var b=this.data("tooltip");if(b)return b;a=f.extend(true,{},f.tools.tooltip.conf,a);if(typeof a.position=="string")a.position=a.position.split(/,?\s/);this.each(function(){b=new u(f(this),a);f(this).data("tooltip",b)});return a.api?b:this}})(jQuery);
(function(d){var i=d.tools.tooltip;d.extend(i.conf,{direction:"up",bounce:false,slideOffset:10,slideInSpeed:200,slideOutSpeed:200,slideFade:!d.browser.msie});var e={up:["-","top"],down:["+","top"],left:["-","left"],right:["+","left"]};i.addEffect("slide",function(g){var a=this.getConf(),f=this.getTip(),b=a.slideFade?{opacity:a.opacity}:{},c=e[a.direction]||e.up;b[c[1]]=c[0]+"="+a.slideOffset;a.slideFade&&f.css({opacity:0});f.show().animate(b,a.slideInSpeed,g)},function(g){var a=this.getConf(),f=a.slideOffset,
b=a.slideFade?{opacity:0}:{},c=e[a.direction]||e.up,h=""+c[0];if(a.bounce)h=h=="+"?"-":"+";b[c[1]]=h+"="+f;this.getTip().animate(b,a.slideOutSpeed,function(){d(this).hide();g.call()})})})(jQuery);


/* ../projects/rtw_plus//randomDirectory/ipad/js/lib/jquery.touchswipe.js */
/*
 * touchSwipe - jQuery Plugin
 * http://plugins.jquery.com/project/touchSwipe
 * http://labs.skinkers.com/touchSwipe/
 *
 * Copyright (c) 2010 Matt Bryson (www.skinkers.com)
 * Licensed under the GNU GPL license
 *
 * $version: 1.2.2
 *
 * Changelog
 * $Date: 2010-12-12 (Wed, 12 Dec 2010) $
 * $version: 1.0.0
 * $version: 1.0.1 - removed multibyte comments
 *
 * $Date: 2011-21-02 (Mon, 21 Feb 2011) $
 * $version: 1.1.0 	- added allowPageScroll property to allow swiping and scrolling of page
 *					- changed handler signatures so one handler can be used for multiple events
 * $Date: 2011-23-02 (Wed, 23 Feb 2011) $
 * $version: 1.2.0 	- added click handler. This is fired if the user simply clicks and does not swipe. The event object and click target are passed to handler.
 *					- If you use the http://code.google.com/p/jquery-ui-for-ipad-and-iphone/ plugin, you can also assign jQuery mouse events to children of a touchSwipe object.
 * $version: 1.2.1 	- removed console log!
 *
 * $version: 1.2.2 	- Fixed bug where scope was not preserved in callback methods.
 *
 * A jQuery plugin to capture left, right, up and down swipes on touch devices.
 * You can capture 2 finger or 1 finger swipes, set the threshold and define either a catch all handler, or individual direction handlers.
 * Options:
 * 		swipe 		Function 	A catch all handler that is triggered for all swipe directions. Handler is passed 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" and the distance of the swipe.
 * 		swipeLeft	Function 	A handler that is triggered for "left" swipes. Handler is passed 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" and the distance of the swipe.
 * 		swipeRight	Function 	A handler that is triggered for "right" swipes. Handler is passed 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" and the distance of the swipe.
 * 		swipeUp		Function 	A handler that is triggered for "up" swipes. Handler is passed 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" and the distance of the swipe.
 * 		swipeDown	Function 	A handler that is triggered for "down" swipes. Handler is passed 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" and the distance of the swipe.
 *		swipeStatus Function 	A handler triggered for every phase of the swipe. Handler is passed 4 arguments: event : The original event object, phase:The current swipe face, either "start�, "move�, "end� or "cancel�. direction : The swipe direction, either "up�, "down�, "left " or "right�.distance : The distance of the swipe.
 *		click		Function	A handler triggered when a user just clicks on the item, rather than swipes it. If they do not move, click is triggered, if they do move, it is not.
 *
 * 		fingers 	int 		Default 1. 	The number of fingers to trigger the swipe, 1 or 2.
 * 		threshold 	int  		Default 75.	The number of pixels that the user must move their finger by before it is considered a swipe.
 *		triggerOnTouchEnd Boolean Default true If true, the swipe events are triggered when the touch end event is received (user releases finger).  If false, it will be triggered on reaching the threshold, and then cancel the touch event automatically.
 *		allowPageScroll String Default "auto". How the browser handles page scrolls when the user is swiping on a touchSwipe object.
 *										"auto" : all undefined swipes will cause the page to scroll in that direction.
 *										"none" : the page will not scroll when user swipes.
 *										"horizontal" : will force page to scroll on horizontal swipes.
 *										"vertical" : will force page to scroll on vertical swipes.
 *
 * This jQuery plugin will only run on devices running Mobile Webkit based browsers (iOS 2.0+, android 2.2+)
 */
(function($)
{
	$.fn.swipe = function(options)
	{
		if (!this) return false;

		// Default thresholds & swipe functions
		var defaults = {

			fingers 		: 1,								// int - The number of fingers to trigger the swipe, 1 or 2. Default is 1.
			threshold 		: 75,								// int - The number of pixels that the user must move their finger by before it is considered a swipe. Default is 75.

			swipe 			: null,		// Function - A catch all handler that is triggered for all swipe directions. Accepts 2 arguments, the original event object and the direction of the swipe : "left", "right", "up", "down".
			swipeLeft		: null,		// Function - A handler that is triggered for "left" swipes. Accepts 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" and the distance of the swipe.
			swipeRight		: null,		// Function - A handler that is triggered for "right" swipes. Accepts 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" and the distance of the swipe.
			swipeUp			: null,		// Function - A handler that is triggered for "up" swipes. Accepts 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" and the distance of the swipe.
			swipeDown		: null,		// Function - A handler that is triggered for "down" swipes. Accepts 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" and the distance of the swipe.
			swipeStatus		: null,		// Function - A handler triggered for every phase of the swipe. Handler is passed 4 arguments: event : The original event object, phase:The current swipe face, either "start�, "move�, "end� or "cancel�. direction : The swipe direction, either "up�, "down�, "left " or "right�.distance : The distance of the swipe.
			click			: null,		// Function	- A handler triggered when a user just clicks on the item, rather than swipes it. If they do not move, click is triggered, if they do move, it is not.

			triggerOnTouchEnd : true,	// Boolean, if true, the swipe events are triggered when the touch end event is received (user releases finger).  If false, it will be triggered on reaching the threshold, and then cancel the touch event automatically.
			allowPageScroll : "auto" 	/* How the browser handles page scrolls when the user is swiping on a touchSwipe object.
											"auto" : all undefined swipes will cause the page to scroll in that direction.
 											"none" : the page will not scroll when user swipes.
 											"horizontal" : will force page to scroll on horizontal swipes.
 											"vertical" : will force page to scroll on vertical swipes.
										*/
		};


		//Constants
		var LEFT = "left";
		var RIGHT = "right";
		var UP = "up";
		var DOWN = "down";
		var NONE = "none";
		var HORIZONTAL = "horizontal";
		var VERTICAL = "vertical";
		var AUTO = "auto";

		var PHASE_START="start";
		var PHASE_MOVE="move";
		var PHASE_END="end";
		var PHASE_CANCEL="cancel";



		var phase="start";

		if (options.allowPageScroll==undefined && (options.swipe!=undefined || options.swipeStatus!=undefined))
			options.allowPageScroll=NONE;

		if (options)
			$.extend(defaults, options);


		/**
		 * Setup each object to detect swipe gestures
		 */
		return this.each(function()
		{
			var $this = $(this);

			var triggerElementID = null; 	// this variable is used to identity the triggering element
			var fingerCount = 0;			// the current number of fingers being used.

			//track mouse points / delta
			var start={x:0, y:0};
			var end={x:0, y:0};
			var delta={x:0, y:0};


			/**
			* Event handler for a touch start event.
			* Stops the default click event from triggering and stores where we touched
			*/
			function touchStart(event)
			{
				phase = PHASE_START;

				// get the total number of fingers touching the screen
				fingerCount = event.touches.length;

				//clear vars..
				distance=0;
				direction=null;

				// check the number of fingers is what we are looking for
				if ( fingerCount == defaults.fingers )
				{
					// get the coordinates of the touch
					start.x = end.x = event.touches[0].pageX;
					start.y = end.y = event.touches[0].pageY;

					if (defaults.swipeStatus)
						triggerHandler(event, phase);
				}
				else
				{
					//touch with more/less than the fingers we are looking for
					touchCancel(event);
				}
			}

			/**
			* Event handler for a touch move event.
			* If we change fingers during move, then cancel the event
			*/
			function touchMove(event)
			{
				if (phase == PHASE_END || phase == PHASE_CANCEL)
					return;

				end.x = event.touches[0].pageX;
				end.y = event.touches[0].pageY;

				direction = caluculateDirection();
				fingerCount = event.touches.length;

				phase = PHASE_MOVE

				//Check if we need to prevent default evnet (page scroll) or not
				validateDefaultEvent(event, direction);

				if ( fingerCount == defaults.fingers )
				{
					distance = caluculateDistance();

					if (defaults.swipeStatus)
						triggerHandler(event, phase, direction, distance);

					//If we trigger whilst dragging, not on touch end, then calculate now...
					if (!defaults.triggerOnTouchEnd)
					{
						// if the user swiped more than the minimum length, perform the appropriate action
						if ( distance >= defaults.threshold )
						{
							phase = PHASE_END;
							triggerHandler(event, phase);
							touchCancel(event); // reset the variables
						}
					}
				}
				else
				{
					phase = PHASE_CANCEL;
					triggerHandler(event, phase);
					touchCancel(event);
				}
			}

			/**
			* Event handler for a touch end event.
			* Calculate the direction and trigger events
			*/
			function touchEnd(event)
			{
				event.preventDefault();

				distance = caluculateDistance();
				direction = caluculateDirection();

				if (defaults.triggerOnTouchEnd)
				{
					phase = PHASE_END;
					// check to see if more than one finger was used and that there is an ending coordinate
					if ( fingerCount == defaults.fingers && end.x != 0 )
					{
						// if the user swiped more than the minimum length, perform the appropriate action
						if ( distance >= defaults.threshold )
						{
							triggerHandler(event, phase);
							touchCancel(event); // reset the variables
						}
						else
						{
							phase = PHASE_CANCEL;
							triggerHandler(event, phase);
							touchCancel(event);
						}
					}
					else
					{
						phase = PHASE_CANCEL;
						triggerHandler(event, phase);
						touchCancel(event);
					}
				}
				else if (phase == PHASE_MOVE)
				{
					phase = PHASE_CANCEL;
					triggerHandler(event, phase);
					touchCancel(event);
				}
			}

			/**
			* Event handler for a touch cancel event.
			* Clears current vars
			*/
			function touchCancel(event)
			{
				// reset the variables back to default values
				fingerCount = 0;

				start.x = 0;
				start.y = 0;
				end.x = 0;
				end.y = 0;
				delta.x = 0;
				delta.y = 0;
			}


			/**
			* Trigger the relevant event handler
			* The handlers are passed the original event, the element that was swiped, and in the case of the catch all handler, the direction that was swiped, "left", "right", "up", or "down"
			*/
			function triggerHandler(event, phase)
			{
				//update status
				if (defaults.swipeStatus)
					defaults.swipeStatus.call($this,event, phase, direction || null, distance || 0);


				if (phase == PHASE_CANCEL)
				{
					if (defaults.click && fingerCount==1 && (isNaN(distance) || distance==0))
						defaults.click.call($this,event, event.target);
				}

				if (phase == PHASE_END)
				{
					//trigger catch all event handler
					if (defaults.swipe)
				{

						defaults.swipe.call($this,event, direction, distance);

				}
					//trigger direction specific event handlers
					switch(direction)
					{
						case LEFT :
							if (defaults.swipeLeft)
								defaults.swipeLeft.call($this,event, direction, distance);
							break;

						case RIGHT :
							if (defaults.swipeRight)
								defaults.swipeRight.call($this,event, direction, distance);
							break;

						case UP :
							if (defaults.swipeUp)
								defaults.swipeUp.call($this,event, direction, distance);
							break;

						case DOWN :
							if (defaults.swipeDown)
								defaults.swipeDown.call($this,event, direction, distance);
							break;
					}
				}
			}


			/**
			 * Checks direction of the swipe and the value allowPageScroll to see if we should allow or prevent the default behaviour from occurring.
			 * This will essentially allow page scrolling or not when the user is swiping on a touchSwipe object.
			 */
			function validateDefaultEvent(event, direction)
			{
				if( defaults.allowPageScroll==NONE )
				{
					event.preventDefault();
				}
				else
				{
					var auto=defaults.allowPageScroll==AUTO;

					switch(direction)
					{
						case LEFT :
							if ( (defaults.swipeLeft && auto) || (!auto && defaults.allowPageScroll!=HORIZONTAL))
								event.preventDefault();
							break;

						case RIGHT :
							if ( (defaults.swipeRight && auto) || (!auto && defaults.allowPageScroll!=HORIZONTAL))
								event.preventDefault();
							break;

						case UP :
							if ( (defaults.swipeUp && auto) || (!auto && defaults.allowPageScroll!=VERTICAL))
								event.preventDefault();
							break;

						case DOWN :
							if ( (defaults.swipeDown && auto) || (!auto && defaults.allowPageScroll!=VERTICAL))
								event.preventDefault();
							break;
					}
				}

			}



			/**
			* Calcualte the length / distance of the swipe
			*/
			function caluculateDistance()
			{
				return Math.round(Math.sqrt(Math.pow(end.x - start.x,2) + Math.pow(end.y - start.y,2)));
			}

			/**
			* Calcualte the angle of the swipe
			*/
			function caluculateAngle()
			{
				var X = start.x-end.x;
				var Y = end.y-start.y;
				var r = Math.atan2(Y,X); //radians
				var angle = Math.round(r*180/Math.PI); //degrees

				//ensure value is positive
				if (angle < 0)
					angle = 360 - Math.abs(angle);

				return angle;
			}

			/**
			* Calcualte the direction of the swipe
			* This will also call caluculateAngle to get the latest angle of swipe
			*/
			function caluculateDirection()
			{
				var angle = caluculateAngle();

				if ( (angle <= 45) && (angle >= 0) )
					return LEFT;

				else if ( (angle <= 360) && (angle >= 315) )
					return LEFT;

				else if ( (angle >= 135) && (angle <= 225) )
					return RIGHT;

				else if ( (angle > 45) && (angle < 135) )
					return DOWN;

				else
					return UP;
			}







			// Add gestures to all swipable areas
			this.addEventListener("touchstart", touchStart, false);
			this.addEventListener("touchmove", touchMove, false);
			this.addEventListener("touchend", touchEnd, false);
			this.addEventListener("touchcancel", touchCancel, false);


		});
	};




})(jQuery);

/* ../projects/rtw_plus//randomDirectory/ipad/js/lib/jscrollpane.js */
/*!
 * jScrollPane - v2.0.0beta11 - 2011-07-04
 * http://jscrollpane.kelvinluck.com/
 *
 * Copyright (c) 2010 Kelvin Luck
 * Dual licensed under the MIT and GPL licenses.
 */

// Script: jScrollPane - cross browser customisable scrollbars
//
// *Version: 2.0.0beta11, Last updated: 2011-07-04*
//
// Project Home - http://jscrollpane.kelvinluck.com/
// GitHub       - http://github.com/vitch/jScrollPane
// Source       - http://github.com/vitch/jScrollPane/raw/master/script/jquery.jscrollpane.js
// (Minified)   - http://github.com/vitch/jScrollPane/raw/master/script/jquery.jscrollpane.min.js
//
// About: License
//
// Copyright (c) 2011 Kelvin Luck
// Dual licensed under the MIT or GPL Version 2 licenses.
// http://jscrollpane.kelvinluck.com/MIT-LICENSE.txt
// http://jscrollpane.kelvinluck.com/GPL-LICENSE.txt
//
// About: Examples
//
// All examples and demos are available through the jScrollPane example site at:
// http://jscrollpane.kelvinluck.com/
//
// About: Support and Testing
//
// This plugin is tested on the browsers below and has been found to work reliably on them. If you run
// into a problem on one of the supported browsers then please visit the support section on the jScrollPane
// website (http://jscrollpane.kelvinluck.com/) for more information on getting support. You are also
// welcome to fork the project on GitHub if you can contribute a fix for a given issue.
//
// jQuery Versions - tested in 1.4.2+ - reported to work in 1.3.x
// Browsers Tested - Firefox 3.6.8, Safari 5, Opera 10.6, Chrome 5.0, IE 6, 7, 8
//
// About: Release History
//
// 2.0.0beta11 - (in progress)
// 2.0.0beta10 - (2011-04-17) cleaner required size calculation, improved keyboard support, stickToBottom/Left, other small fixes
// 2.0.0beta9 - (2011-01-31) new API methods, bug fixes and correct keyboard support for FF/OSX
// 2.0.0beta8 - (2011-01-29) touchscreen support, improved keyboard support
// 2.0.0beta7 - (2011-01-23) scroll speed consistent (thanks Aivo Paas)
// 2.0.0beta6 - (2010-12-07) scrollToElement horizontal support
// 2.0.0beta5 - (2010-10-18) jQuery 1.4.3 support, various bug fixes
// 2.0.0beta4 - (2010-09-17) clickOnTrack support, bug fixes
// 2.0.0beta3 - (2010-08-27) Horizontal mousewheel, mwheelIntent, keyboard support, bug fixes
// 2.0.0beta2 - (2010-08-21) Bug fixes
// 2.0.0beta1 - (2010-08-17) Rewrite to follow modern best practices and enable horizontal scrolling, initially hidden
//							 elements and dynamically sized elements.
// 1.x - (2006-12-31 - 2010-07-31) Initial version, hosted at googlecode, deprecated

(function($,window,undefined){

	$.fn.jScrollPane = function(settings)
	{
		// JScrollPane "class" - public methods are available through $('selector').data('jsp')
		function JScrollPane(elem, s)
		{
			var settings, jsp = this, pane, paneWidth, paneHeight, container, contentWidth, contentHeight,
				percentInViewH, percentInViewV, isScrollableV, isScrollableH, verticalDrag, dragMaxY,
				verticalDragPosition, horizontalDrag, dragMaxX, horizontalDragPosition,
				verticalBar, verticalTrack, scrollbarWidth, verticalTrackHeight, verticalDragHeight, arrowUp, arrowDown,
				horizontalBar, horizontalTrack, horizontalTrackWidth, horizontalDragWidth, arrowLeft, arrowRight,
				reinitialiseInterval, originalPadding, originalPaddingTotalWidth, previousContentWidth,
				wasAtTop = true, wasAtLeft = true, wasAtBottom = false, wasAtRight = false,
				originalElement = elem.clone(false, false).empty(),
				mwEvent = $.fn.mwheelIntent ? 'mwheelIntent.jsp' : 'mousewheel.jsp';

			originalPadding = elem.css('paddingTop') + ' ' +
								elem.css('paddingRight') + ' ' +
								elem.css('paddingBottom') + ' ' +
								elem.css('paddingLeft');
			originalPaddingTotalWidth = (parseInt(elem.css('paddingLeft'), 10) || 0) +
										(parseInt(elem.css('paddingRight'), 10) || 0);

			function initialise(s)
			{

				var /*firstChild, lastChild, */isMaintainingPositon, lastContentX, lastContentY,
						hasContainingSpaceChanged, originalScrollTop, originalScrollLeft,
						maintainAtBottom = false, maintainAtRight = false;

				settings = s;

				if (pane === undefined) {
					originalScrollTop = elem.scrollTop();
					originalScrollLeft = elem.scrollLeft();

					elem.css(
						{
							overflow: 'hidden',
							padding: 0
						}
					);
					// TODO: Deal with where width/ height is 0 as it probably means the element is hidden and we should
					// come back to it later and check once it is unhidden...
					paneWidth = elem.innerWidth() + originalPaddingTotalWidth;
					paneHeight = elem.innerHeight();

					elem.width(paneWidth);

					pane = $('<div class="jspPane" />').css('padding', originalPadding).append(elem.children());
					container = $('<div class="jspContainer" />')
						.css({
							'width': paneWidth + 'px',
							'height': paneHeight + 'px'
						}
					).append(pane).appendTo(elem);

					/*
					// Move any margins from the first and last children up to the container so they can still
					// collapse with neighbouring elements as they would before jScrollPane
					firstChild = pane.find(':first-child');
					lastChild = pane.find(':last-child');
					elem.css(
						{
							'margin-top': firstChild.css('margin-top'),
							'margin-bottom': lastChild.css('margin-bottom')
						}
					);
					firstChild.css('margin-top', 0);
					lastChild.css('margin-bottom', 0);
					*/
				} else {
					elem.css('width', '');

					maintainAtBottom = settings.stickToBottom && isCloseToBottom();
					maintainAtRight  = settings.stickToRight  && isCloseToRight();

					hasContainingSpaceChanged = elem.innerWidth() + originalPaddingTotalWidth != paneWidth || elem.outerHeight() != paneHeight;

					if (hasContainingSpaceChanged) {
						paneWidth = elem.innerWidth() + originalPaddingTotalWidth;
						paneHeight = elem.innerHeight();
						container.css({
							width: paneWidth + 'px',
							height: paneHeight + 'px'
						});
					}

					// If nothing changed since last check...
					if (!hasContainingSpaceChanged && previousContentWidth == contentWidth && pane.outerHeight() == contentHeight) {
						elem.width(paneWidth);
						return;
					}
					previousContentWidth = contentWidth;

					pane.css('width', '');
					elem.width(paneWidth);

					container.find('>.jspVerticalBar,>.jspHorizontalBar').remove().end();
				}

				pane.css('overflow', 'auto');
				if (s.contentWidth) {
					contentWidth = s.contentWidth;
				} else {
					contentWidth = pane[0].scrollWidth;
				}
				contentHeight = pane[0].scrollHeight;
				pane.css('overflow', '');

				percentInViewH = contentWidth / paneWidth;
				percentInViewV = contentHeight / paneHeight;
				isScrollableV = percentInViewV > 1;

				isScrollableH = percentInViewH > 1;

				//console.log(paneWidth, paneHeight, contentWidth, contentHeight, percentInViewH, percentInViewV, isScrollableH, isScrollableV);

				if (!(isScrollableH || isScrollableV)) {
					elem.removeClass('jspScrollable');
					pane.css({
						top: 0,
						width: container.width() - originalPaddingTotalWidth
					});
					removeMousewheel();
					removeFocusHandler();
					removeKeyboardNav();
					removeClickOnTrack();
					unhijackInternalLinks();
				} else {
					elem.addClass('jspScrollable');

					isMaintainingPositon = settings.maintainPosition && (verticalDragPosition || horizontalDragPosition);
					if (isMaintainingPositon) {
						lastContentX = contentPositionX();
						lastContentY = contentPositionY();
					}

					initialiseVerticalScroll();
					initialiseHorizontalScroll();
					resizeScrollbars();

					if (isMaintainingPositon) {
						scrollToX(maintainAtRight  ? (contentWidth  - paneWidth ) : lastContentX, false);
						scrollToY(maintainAtBottom ? (contentHeight - paneHeight) : lastContentY, false);
					}

					initFocusHandler();
					initMousewheel();
					initTouch();

					if (settings.enableKeyboardNavigation) {
						initKeyboardNav();
					}
					if (settings.clickOnTrack) {
						initClickOnTrack();
					}

					observeHash();
					if (settings.hijackInternalLinks) {
						hijackInternalLinks();
					}
				}

				if (settings.autoReinitialise && !reinitialiseInterval) {
					reinitialiseInterval = setInterval(
						function()
						{
							initialise(settings);
						},
						settings.autoReinitialiseDelay
					);
				} else if (!settings.autoReinitialise && reinitialiseInterval) {
					clearInterval(reinitialiseInterval);
				}

				originalScrollTop && elem.scrollTop(0) && scrollToY(originalScrollTop, false);
				originalScrollLeft && elem.scrollLeft(0) && scrollToX(originalScrollLeft, false);

				elem.trigger('jsp-initialised', [isScrollableH || isScrollableV]);
			}

			function initialiseVerticalScroll()
			{
				if (isScrollableV) {

					container.append(
						$('<div class="jspVerticalBar" />').append(
							$('<div class="jspCap jspCapTop" />'),
							$('<div class="jspTrack" />').append(
								$('<div class="jspDrag" />').append(
									$('<div class="jspDragTop" />'),
									$('<div class="jspDragBottom" />')
								)
							),
							$('<div class="jspCap jspCapBottom" />')
						)
					);

					verticalBar = container.find('>.jspVerticalBar');
					verticalTrack = verticalBar.find('>.jspTrack');
					verticalDrag = verticalTrack.find('>.jspDrag');

					if (settings.showArrows) {
						arrowUp = $('<a class="jspArrow jspArrowUp" />').bind(
							'mousedown.jsp', getArrowScroll(0, -1)
						).bind('click.jsp', nil);
						arrowDown = $('<a class="jspArrow jspArrowDown" />').bind(
							'mousedown.jsp', getArrowScroll(0, 1)
						).bind('click.jsp', nil);
						if (settings.arrowScrollOnHover) {
							arrowUp.bind('mouseover.jsp', getArrowScroll(0, -1, arrowUp));
							arrowDown.bind('mouseover.jsp', getArrowScroll(0, 1, arrowDown));
						}

						appendArrows(verticalTrack, settings.verticalArrowPositions, arrowUp, arrowDown);
					}

					verticalTrackHeight = paneHeight;
					container.find('>.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow').each(
						function()
						{
							verticalTrackHeight -= $(this).outerHeight();
						}
					);


					verticalDrag.hover(
						function()
						{
							verticalDrag.addClass('jspHover');
						},
						function()
						{
							verticalDrag.removeClass('jspHover');
						}
					).bind(
						'mousedown.jsp',
						function(e)
						{
							// Stop IE from allowing text selection
							$('html').bind('dragstart.jsp selectstart.jsp', nil);

							verticalDrag.addClass('jspActive');

							var startY = e.pageY - verticalDrag.position().top;

							$('html').bind(
								'mousemove.jsp',
								function(e)
								{
									positionDragY(e.pageY - startY, false);
								}
							).bind('mouseup.jsp mouseleave.jsp', cancelDrag);
							return false;
						}
					);
					sizeVerticalScrollbar();
				}
			}

			function sizeVerticalScrollbar()
			{
				verticalTrack.height(verticalTrackHeight + 'px');
				verticalDragPosition = 0;
				scrollbarWidth = settings.verticalGutter + verticalTrack.outerWidth();

				// Make the pane thinner to allow for the vertical scrollbar
				pane.width(paneWidth - scrollbarWidth - originalPaddingTotalWidth);

				// Add margin to the left of the pane if scrollbars are on that side (to position
				// the scrollbar on the left or right set it's left or right property in CSS)
				try {
					if (verticalBar.position().left === 0) {
						pane.css('margin-left', scrollbarWidth + 'px');
					}
				} catch (err) {
				}
			}

			function initialiseHorizontalScroll()
			{
				if (isScrollableH) {

					container.append(
						$('<div class="jspHorizontalBar" />').append(
							$('<div class="jspCap jspCapLeft" />'),
							$('<div class="jspTrack" />').append(
								$('<div class="jspDrag" />').append(
									$('<div class="jspDragLeft" />'),
									$('<div class="jspDragRight" />')
								)
							),
							$('<div class="jspCap jspCapRight" />')
						)
					);

					horizontalBar = container.find('>.jspHorizontalBar');
					horizontalTrack = horizontalBar.find('>.jspTrack');
					horizontalDrag = horizontalTrack.find('>.jspDrag');

					if (settings.showArrows) {
						arrowLeft = $('<a class="jspArrow jspArrowLeft" />').bind(
							'mousedown.jsp', getArrowScroll(-1, 0)
						).bind('click.jsp', nil);
						arrowRight = $('<a class="jspArrow jspArrowRight" />').bind(
							'mousedown.jsp', getArrowScroll(1, 0)
						).bind('click.jsp', nil);
						if (settings.arrowScrollOnHover) {
							arrowLeft.bind('mouseover.jsp', getArrowScroll(-1, 0, arrowLeft));
							arrowRight.bind('mouseover.jsp', getArrowScroll(1, 0, arrowRight));
						}
						appendArrows(horizontalTrack, settings.horizontalArrowPositions, arrowLeft, arrowRight);
					}

					horizontalDrag.hover(
						function()
						{
							horizontalDrag.addClass('jspHover');
						},
						function()
						{
							horizontalDrag.removeClass('jspHover');
						}
					).bind(
						'mousedown.jsp',
						function(e)
						{
							// Stop IE from allowing text selection
							$('html').bind('dragstart.jsp selectstart.jsp', nil);

							horizontalDrag.addClass('jspActive');

							var startX = e.pageX - horizontalDrag.position().left;

							$('html').bind(
								'mousemove.jsp',
								function(e)
								{
									positionDragX(e.pageX - startX, false);
								}
							).bind('mouseup.jsp mouseleave.jsp', cancelDrag);
							return false;
						}
					);
					horizontalTrackWidth = container.innerWidth();
					sizeHorizontalScrollbar();
				}
			}

			function sizeHorizontalScrollbar()
			{
				container.find('>.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow').each(
					function()
					{
						horizontalTrackWidth -= $(this).outerWidth();
					}
				);

				horizontalTrack.width(horizontalTrackWidth + 'px');
				horizontalDragPosition = 0;
			}

			function resizeScrollbars()
			{
				if (isScrollableH && isScrollableV) {
					var horizontalTrackHeight = horizontalTrack.outerHeight(),
						verticalTrackWidth = verticalTrack.outerWidth();
					verticalTrackHeight -= horizontalTrackHeight;
					$(horizontalBar).find('>.jspCap:visible,>.jspArrow').each(
						function()
						{
							horizontalTrackWidth += $(this).outerWidth();
						}
					);
					horizontalTrackWidth -= verticalTrackWidth;
					paneHeight -= verticalTrackWidth;
					paneWidth -= horizontalTrackHeight;
					horizontalTrack.parent().append(
						$('<div class="jspCorner" />').css('width', horizontalTrackHeight + 'px')
					);
					sizeVerticalScrollbar();
					sizeHorizontalScrollbar();
				}
				// reflow content
				if (isScrollableH) {
					pane.width((container.outerWidth() - originalPaddingTotalWidth) + 'px');
				}
				contentHeight = pane.outerHeight();
				percentInViewV = contentHeight / paneHeight;

				if (isScrollableH) {
					horizontalDragWidth = Math.ceil(1 / percentInViewH * horizontalTrackWidth);
					if (horizontalDragWidth > settings.horizontalDragMaxWidth) {
						horizontalDragWidth = settings.horizontalDragMaxWidth;
					} else if (horizontalDragWidth < settings.horizontalDragMinWidth) {
						horizontalDragWidth = settings.horizontalDragMinWidth;
					}
					horizontalDrag.width(horizontalDragWidth + 'px');
					dragMaxX = horizontalTrackWidth - horizontalDragWidth;
					_positionDragX(horizontalDragPosition); // To update the state for the arrow buttons
				}
				if (isScrollableV) {
					verticalDragHeight = Math.ceil(1 / percentInViewV * verticalTrackHeight);
					if (verticalDragHeight > settings.verticalDragMaxHeight) {
						verticalDragHeight = settings.verticalDragMaxHeight;
					} else if (verticalDragHeight < settings.verticalDragMinHeight) {
						verticalDragHeight = settings.verticalDragMinHeight;
					}
					verticalDragHeight = 44;
					verticalDrag.height(verticalDragHeight + 'px');
					dragMaxY = verticalTrackHeight - verticalDragHeight;
					_positionDragY(verticalDragPosition); // To update the state for the arrow buttons
				}
			}

			function appendArrows(ele, p, a1, a2)
			{
				var p1 = "before", p2 = "after", aTemp;

				// Sniff for mac... Is there a better way to determine whether the arrows would naturally appear
				// at the top or the bottom of the bar?
				if (p == "os") {
					p = /Mac/.test(navigator.platform) ? "after" : "split";
				}
				if (p == p1) {
					p2 = p;
				} else if (p == p2) {
					p1 = p;
					aTemp = a1;
					a1 = a2;
					a2 = aTemp;
				}

				ele[p1](a1)[p2](a2);
			}

			function getArrowScroll(dirX, dirY, ele)
			{
				return function()
				{
					arrowScroll(dirX, dirY, this, ele);
					this.blur();
					return false;
				};
			}

			function arrowScroll(dirX, dirY, arrow, ele)
			{
				arrow = $(arrow).addClass('jspActive');

				var eve,
					scrollTimeout,
					isFirst = true,
					doScroll = function()
					{
						if (dirX !== 0) {
							jsp.scrollByX(dirX * settings.arrowButtonSpeed);
						}
						if (dirY !== 0) {
							jsp.scrollByY(dirY * settings.arrowButtonSpeed);
						}
						scrollTimeout = setTimeout(doScroll, isFirst ? settings.initialDelay : settings.arrowRepeatFreq);
						isFirst = false;
					};

				doScroll();

				eve = ele ? 'mouseout.jsp' : 'mouseup.jsp';
				ele = ele || $('html');
				ele.bind(
					eve,
					function()
					{
						arrow.removeClass('jspActive');
						scrollTimeout && clearTimeout(scrollTimeout);
						scrollTimeout = null;
						ele.unbind(eve);
					}
				);
			}

			function initClickOnTrack()
			{
				removeClickOnTrack();
				if (isScrollableV) {
					verticalTrack.bind(
						'mousedown.jsp',
						function(e)
						{
							if (e.originalTarget === undefined || e.originalTarget == e.currentTarget) {
								var clickedTrack = $(this),
									offset = clickedTrack.offset(),
									direction = e.pageY - offset.top - verticalDragPosition,
									scrollTimeout,
									isFirst = true,
									doScroll = function()
									{
										var offset = clickedTrack.offset(),
											pos = e.pageY - offset.top - verticalDragHeight / 2,
											contentDragY = paneHeight * settings.scrollPagePercent,
											dragY = dragMaxY * contentDragY / (contentHeight - paneHeight);
										if (direction < 0) {
											if (verticalDragPosition - dragY > pos) {
												jsp.scrollByY(-contentDragY);
											} else {
												positionDragY(pos);
											}
										} else if (direction > 0) {
											if (verticalDragPosition + dragY < pos) {
												jsp.scrollByY(contentDragY);
											} else {
												positionDragY(pos);
											}
										} else {
											cancelClick();
											return;
										}
										scrollTimeout = setTimeout(doScroll, isFirst ? settings.initialDelay : settings.trackClickRepeatFreq);
										isFirst = false;
									},
									cancelClick = function()
									{
										scrollTimeout && clearTimeout(scrollTimeout);
										scrollTimeout = null;
										$(document).unbind('mouseup.jsp', cancelClick);
									};
								doScroll();
								$(document).bind('mouseup.jsp', cancelClick);
								return false;
							}
						}
					);
				}

				if (isScrollableH) {
					horizontalTrack.bind(
						'mousedown.jsp',
						function(e)
						{
							if (e.originalTarget === undefined || e.originalTarget == e.currentTarget) {
								var clickedTrack = $(this),
									offset = clickedTrack.offset(),
									direction = e.pageX - offset.left - horizontalDragPosition,
									scrollTimeout,
									isFirst = true,
									doScroll = function()
									{
										var offset = clickedTrack.offset(),
											pos = e.pageX - offset.left - horizontalDragWidth / 2,
											contentDragX = paneWidth * settings.scrollPagePercent,
											dragX = dragMaxX * contentDragX / (contentWidth - paneWidth);
										if (direction < 0) {
											if (horizontalDragPosition - dragX > pos) {
												jsp.scrollByX(-contentDragX);
											} else {
												positionDragX(pos);
											}
										} else if (direction > 0) {
											if (horizontalDragPosition + dragX < pos) {
												jsp.scrollByX(contentDragX);
											} else {
												positionDragX(pos);
											}
										} else {
											cancelClick();
											return;
										}
										scrollTimeout = setTimeout(doScroll, isFirst ? settings.initialDelay : settings.trackClickRepeatFreq);
										isFirst = false;
									},
									cancelClick = function()
									{
										scrollTimeout && clearTimeout(scrollTimeout);
										scrollTimeout = null;
										$(document).unbind('mouseup.jsp', cancelClick);
									};
								doScroll();
								$(document).bind('mouseup.jsp', cancelClick);
								return false;
							}
						}
					);
				}
			}

			function removeClickOnTrack()
			{
				if (horizontalTrack) {
					horizontalTrack.unbind('mousedown.jsp');
				}
				if (verticalTrack) {
					verticalTrack.unbind('mousedown.jsp');
				}
			}

			function cancelDrag()
			{
				$('html').unbind('dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp');

				if (verticalDrag) {
					verticalDrag.removeClass('jspActive');
				}
				if (horizontalDrag) {
					horizontalDrag.removeClass('jspActive');
				}
			}

			function positionDragY(destY, animate)
			{
				if (!isScrollableV) {
					return;
				}
				if (destY < 0) {
					destY = 0;
				} else if (destY > dragMaxY) {
					destY = dragMaxY;
				}

				// can't just check if(animate) because false is a valid value that could be passed in...
				if (animate === undefined) {
					animate = settings.animateScroll;
				}
				if (animate) {
					jsp.animate(verticalDrag, 'top', destY,	_positionDragY);
				} else {
					verticalDrag.css('top', destY);
					_positionDragY(destY);
				}

			}

			function _positionDragY(destY)
			{
				if (destY === undefined) {
					destY = verticalDrag.position().top;
				}

				container.scrollTop(0);
				verticalDragPosition = destY;

				var isAtTop = verticalDragPosition === 0,
					isAtBottom = verticalDragPosition == dragMaxY,
					percentScrolled = destY/ dragMaxY,
					destTop = -percentScrolled * (contentHeight - paneHeight);

				if (wasAtTop != isAtTop || wasAtBottom != isAtBottom) {
					wasAtTop = isAtTop;
					wasAtBottom = isAtBottom;
					elem.trigger('jsp-arrow-change', [wasAtTop, wasAtBottom, wasAtLeft, wasAtRight]);
				}

				updateVerticalArrows(isAtTop, isAtBottom);
				pane.css('top', destTop);
				elem.trigger('jsp-scroll-y', [-destTop, isAtTop, isAtBottom]).trigger('scroll');
			}

			function positionDragX(destX, animate)
			{
				if (!isScrollableH) {
					return;
				}
				if (destX < 0) {
					destX = 0;
				} else if (destX > dragMaxX) {
					destX = dragMaxX;
				}

				if (animate === undefined) {
					animate = settings.animateScroll;
				}
				if (animate) {
					jsp.animate(horizontalDrag, 'left', destX,	_positionDragX);
				} else {
					horizontalDrag.css('left', destX);
					_positionDragX(destX);
				}
			}

			function _positionDragX(destX)
			{
				if (destX === undefined) {
					destX = horizontalDrag.position().left;
				}

				container.scrollTop(0);
				horizontalDragPosition = destX;

				var isAtLeft = horizontalDragPosition === 0,
					isAtRight = horizontalDragPosition == dragMaxX,
					percentScrolled = destX / dragMaxX,
					destLeft = -percentScrolled * (contentWidth - paneWidth);

				if (wasAtLeft != isAtLeft || wasAtRight != isAtRight) {
					wasAtLeft = isAtLeft;
					wasAtRight = isAtRight;
					elem.trigger('jsp-arrow-change', [wasAtTop, wasAtBottom, wasAtLeft, wasAtRight]);
				}

				updateHorizontalArrows(isAtLeft, isAtRight);
				pane.css('left', destLeft);
				elem.trigger('jsp-scroll-x', [-destLeft, isAtLeft, isAtRight]).trigger('scroll');
			}

			function updateVerticalArrows(isAtTop, isAtBottom)
			{
				if (settings.showArrows) {
					arrowUp[isAtTop ? 'addClass' : 'removeClass']('jspDisabled');
					arrowDown[isAtBottom ? 'addClass' : 'removeClass']('jspDisabled');
				}
			}

			function updateHorizontalArrows(isAtLeft, isAtRight)
			{
				if (settings.showArrows) {
					arrowLeft[isAtLeft ? 'addClass' : 'removeClass']('jspDisabled');
					arrowRight[isAtRight ? 'addClass' : 'removeClass']('jspDisabled');
				}
			}

			function scrollToY(destY, animate)
			{
				var percentScrolled = destY / (contentHeight - paneHeight);
				positionDragY(percentScrolled * dragMaxY, animate);
			}

			function scrollToX(destX, animate)
			{
				var percentScrolled = destX / (contentWidth - paneWidth);
				positionDragX(percentScrolled * dragMaxX, animate);
			}

			function scrollToElement(ele, stickToTop, animate)
			{
				var e, eleHeight, eleWidth, eleTop = 0, eleLeft = 0, viewportTop, viewportLeft, maxVisibleEleTop, maxVisibleEleLeft, destY, destX;

				// Legal hash values aren't necessarily legal jQuery selectors so we need to catch any
				// errors from the lookup...
				try {
					e = $(ele);
				} catch (err) {
					return;
				}
				eleHeight = e.outerHeight();
				eleWidth= e.outerWidth();

				container.scrollTop(0);
				container.scrollLeft(0);

				// loop through parents adding the offset top of any elements that are relatively positioned between
				// the focused element and the jspPane so we can get the true distance from the top
				// of the focused element to the top of the scrollpane...
				while (!e.is('.jspPane')) {
					eleTop += e.position().top;
					eleLeft += e.position().left;
					e = e.offsetParent();
					if (/^body|html$/i.test(e[0].nodeName)) {
						// we ended up too high in the document structure. Quit!
						return;
					}
				}

				viewportTop = contentPositionY();
				maxVisibleEleTop = viewportTop + paneHeight;
				if (eleTop < viewportTop || stickToTop) { // element is above viewport
					destY = eleTop - settings.verticalGutter;
				} else if (eleTop + eleHeight > maxVisibleEleTop) { // element is below viewport
					destY = eleTop - paneHeight + eleHeight + settings.verticalGutter;
				}
				if (destY) {
					scrollToY(destY, animate);
				}

				viewportLeft = contentPositionX();
	            maxVisibleEleLeft = viewportLeft + paneWidth;
	            if (eleLeft < viewportLeft || stickToTop) { // element is to the left of viewport
	                destX = eleLeft - settings.horizontalGutter;
	            } else if (eleLeft + eleWidth > maxVisibleEleLeft) { // element is to the right viewport
	                destX = eleLeft - paneWidth + eleWidth + settings.horizontalGutter;
	            }
	            if (destX) {
	                scrollToX(destX, animate);
	            }

			}

			function contentPositionX()
			{
				return -pane.position().left;
			}

			function contentPositionY()
			{
				return -pane.position().top;
			}

			function isCloseToBottom()
			{
				var scrollableHeight = contentHeight - paneHeight;
				return (scrollableHeight > 20) && (scrollableHeight - contentPositionY() < 10);
			}

			function isCloseToRight()
			{
				var scrollableWidth = contentWidth - paneWidth;
				return (scrollableWidth > 20) && (scrollableWidth - contentPositionX() < 10);
			}

			function initMousewheel()
			{
				container.unbind(mwEvent).bind(
					mwEvent,
					function (event, delta, deltaX, deltaY) {
						var dX = horizontalDragPosition, dY = verticalDragPosition;
						jsp.scrollBy(deltaX * settings.mouseWheelSpeed, -deltaY * settings.mouseWheelSpeed, false);
						// return true if there was no movement so rest of screen can scroll
						return dX == horizontalDragPosition && dY == verticalDragPosition;
					}
				);
			}

			function removeMousewheel()
			{
				container.unbind(mwEvent);
			}

			function nil()
			{
				return false;
			}

			function initFocusHandler()
			{
				pane.find(':input,a').unbind('focus.jsp').bind(
					'focus.jsp',
					function(e)
					{
						scrollToElement(e.target, false);
					}
				);
			}

			function removeFocusHandler()
			{
				pane.find(':input,a').unbind('focus.jsp');
			}

			function initKeyboardNav()
			{
				var keyDown, elementHasScrolled, validParents = [];
				isScrollableH && validParents.push(horizontalBar[0]);
				isScrollableV && validParents.push(verticalBar[0]);

				// IE also focuses elements that don't have tabindex set.
				pane.focus(
					function()
					{
						elem.focus();
					}
				);

				elem.attr('tabindex', 0)
					.unbind('keydown.jsp keypress.jsp')
					.bind(
						'keydown.jsp',
						function(e)
						{
							if (e.target !== this && !(validParents.length && $(e.target).closest(validParents).length)){
								return;
							}
							var dX = horizontalDragPosition, dY = verticalDragPosition;
							switch(e.keyCode) {
								case 40: // down
								case 38: // up
								case 34: // page down
								case 32: // space
								case 33: // page up
								case 39: // right
								case 37: // left
									keyDown = e.keyCode;
									keyDownHandler();
									break;
								case 35: // end
									scrollToY(contentHeight - paneHeight);
									keyDown = null;
									break;
								case 36: // home
									scrollToY(0);
									keyDown = null;
									break;
							}

							elementHasScrolled = e.keyCode == keyDown && dX != horizontalDragPosition || dY != verticalDragPosition;
							return !elementHasScrolled;
						}
					).bind(
						'keypress.jsp', // For FF/ OSX so that we can cancel the repeat key presses if the JSP scrolls...
						function(e)
						{
							if (e.keyCode == keyDown) {
								keyDownHandler();
							}
							return !elementHasScrolled;
						}
					);

				if (settings.hideFocus) {
					elem.css('outline', 'none');
					if ('hideFocus' in container[0]){
						elem.attr('hideFocus', true);
					}
				} else {
					elem.css('outline', '');
					if ('hideFocus' in container[0]){
						elem.attr('hideFocus', false);
					}
				}

				function keyDownHandler()
				{
					var dX = horizontalDragPosition, dY = verticalDragPosition;
					switch(keyDown) {
						case 40: // down
							jsp.scrollByY(settings.keyboardSpeed, false);
							break;
						case 38: // up
							jsp.scrollByY(-settings.keyboardSpeed, false);
							break;
						case 34: // page down
						case 32: // space
							jsp.scrollByY(paneHeight * settings.scrollPagePercent, false);
							break;
						case 33: // page up
							jsp.scrollByY(-paneHeight * settings.scrollPagePercent, false);
							break;
						case 39: // right
							jsp.scrollByX(settings.keyboardSpeed, false);
							break;
						case 37: // left
							jsp.scrollByX(-settings.keyboardSpeed, false);
							break;
					}

					elementHasScrolled = dX != horizontalDragPosition || dY != verticalDragPosition;
					return elementHasScrolled;
				}
			}

			function removeKeyboardNav()
			{
				elem.attr('tabindex', '-1')
					.removeAttr('tabindex')
					.unbind('keydown.jsp keypress.jsp');
			}

			function observeHash()
			{
				if (location.hash && location.hash.length > 1) {
					var e,
						retryInt,
						hash = escape(location.hash) // hash must be escaped to prevent XSS
						;
					try {
						e = $(hash);
					} catch (err) {
						return;
					}

					if (e.length && pane.find(hash)) {
						// nasty workaround but it appears to take a little while before the hash has done its thing
						// to the rendered page so we just wait until the container's scrollTop has been messed up.
						if (container.scrollTop() === 0) {
							retryInt = setInterval(
								function()
								{
									if (container.scrollTop() > 0) {
										scrollToElement(hash, true);
										$(document).scrollTop(container.position().top);
										clearInterval(retryInt);
									}
								},
								50
							);
						} else {
							scrollToElement(hash, true);
							$(document).scrollTop(container.position().top);
						}
					}
				}
			}

			function unhijackInternalLinks()
			{
				$('a.jspHijack').unbind('click.jsp-hijack').removeClass('jspHijack');
			}

			function hijackInternalLinks()
			{
				unhijackInternalLinks();
				$('a[href^=#]').addClass('jspHijack').bind(
					'click.jsp-hijack',
					function()
					{
						var uriParts = this.href.split('#'), hash;
						if (uriParts.length > 1) {
							hash = uriParts[1];
							if (hash.length > 0 && pane.find('#' + hash).length > 0) {
								scrollToElement('#' + hash, true);
								// Need to return false otherwise things mess up... Would be nice to maybe also scroll
								// the window to the top of the scrollpane?
								return false;
							}
						}
					}
				);
			}

			// Init touch on iPad, iPhone, iPod, Android
			function initTouch()
			{
				var startX,
					startY,
					touchStartX,
					touchStartY,
					moved,
					moving = false;

				container.unbind('touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick').bind(
					'touchstart.jsp',
					function(e)
					{
						var touch = e.originalEvent.touches[0];
						startX = contentPositionX();
						startY = contentPositionY();
						touchStartX = touch.pageX;
						touchStartY = touch.pageY;
						moved = false;
						moving = true;
					}
				).bind(
					'touchmove.jsp',
					function(ev)
					{
						if(!moving) {
							return;
						}

						var touchPos = ev.originalEvent.touches[0],
							dX = horizontalDragPosition, dY = verticalDragPosition;

						jsp.scrollTo(startX + touchStartX - touchPos.pageX, startY + touchStartY - touchPos.pageY);

						moved = moved || Math.abs(touchStartX - touchPos.pageX) > 5 || Math.abs(touchStartY - touchPos.pageY) > 5;

						// return true if there was no movement so rest of screen can scroll
						return dX == horizontalDragPosition && dY == verticalDragPosition;
					}
				).bind(
					'touchend.jsp',
					function(e)
					{
						moving = false;
						/*if(moved) {
							return false;
						}*/
					}
				).bind(
					'click.jsp-touchclick',
					function(e)
					{
						if(moved) {
							moved = false;
							return false;
						}
					}
				);
			}

			function destroy(){
				var currentY = contentPositionY(),
					currentX = contentPositionX();
				elem.removeClass('jspScrollable').unbind('.jsp');
				elem.replaceWith(originalElement.append(pane.children()));
				originalElement.scrollTop(currentY);
				originalElement.scrollLeft(currentX);
			}

			// Public API
			$.extend(
				jsp,
				{
					// Reinitialises the scroll pane (if it's internal dimensions have changed since the last time it
					// was initialised). The settings object which is passed in will override any settings from the
					// previous time it was initialised - if you don't pass any settings then the ones from the previous
					// initialisation will be used.
					reinitialise: function(s)
					{
						s = $.extend({}, settings, s);
						initialise(s);
					},
					// Scrolls the specified element (a jQuery object, DOM node or jQuery selector string) into view so
					// that it can be seen within the viewport. If stickToTop is true then the element will appear at
					// the top of the viewport, if it is false then the viewport will scroll as little as possible to
					// show the element. You can also specify if you want animation to occur. If you don't provide this
					// argument then the animateScroll value from the settings object is used instead.
					scrollToElement: function(ele, stickToTop, animate)
					{
						scrollToElement(ele, stickToTop, animate);
					},
					// Scrolls the pane so that the specified co-ordinates within the content are at the top left
					// of the viewport. animate is optional and if not passed then the value of animateScroll from
					// the settings object this jScrollPane was initialised with is used.
					scrollTo: function(destX, destY, animate)
					{
						scrollToX(destX, animate);
						scrollToY(destY, animate);
					},
					// Scrolls the pane so that the specified co-ordinate within the content is at the left of the
					// viewport. animate is optional and if not passed then the value of animateScroll from the settings
					// object this jScrollPane was initialised with is used.
					scrollToX: function(destX, animate)
					{
						scrollToX(destX, animate);
					},
					// Scrolls the pane so that the specified co-ordinate within the content is at the top of the
					// viewport. animate is optional and if not passed then the value of animateScroll from the settings
					// object this jScrollPane was initialised with is used.
					scrollToY: function(destY, animate)
					{
						scrollToY(destY, animate);
					},
					// Scrolls the pane to the specified percentage of its maximum horizontal scroll position. animate
					// is optional and if not passed then the value of animateScroll from the settings object this
					// jScrollPane was initialised with is used.
					scrollToPercentX: function(destPercentX, animate)
					{
						scrollToX(destPercentX * (contentWidth - paneWidth), animate);
					},
					// Scrolls the pane to the specified percentage of its maximum vertical scroll position. animate
					// is optional and if not passed then the value of animateScroll from the settings object this
					// jScrollPane was initialised with is used.
					scrollToPercentY: function(destPercentY, animate)
					{
						scrollToY(destPercentY * (contentHeight - paneHeight), animate);
					},
					// Scrolls the pane by the specified amount of pixels. animate is optional and if not passed then
					// the value of animateScroll from the settings object this jScrollPane was initialised with is used.
					scrollBy: function(deltaX, deltaY, animate)
					{
						jsp.scrollByX(deltaX, animate);
						jsp.scrollByY(deltaY, animate);
					},
					// Scrolls the pane by the specified amount of pixels. animate is optional and if not passed then
					// the value of animateScroll from the settings object this jScrollPane was initialised with is used.
					scrollByX: function(deltaX, animate)
					{
						var destX = contentPositionX() + Math[deltaX<0 ? 'floor' : 'ceil'](deltaX),
							percentScrolled = destX / (contentWidth - paneWidth);
						positionDragX(percentScrolled * dragMaxX, animate);
					},
					// Scrolls the pane by the specified amount of pixels. animate is optional and if not passed then
					// the value of animateScroll from the settings object this jScrollPane was initialised with is used.
					scrollByY: function(deltaY, animate)
					{
						var destY = contentPositionY() + Math[deltaY<0 ? 'floor' : 'ceil'](deltaY),
							percentScrolled = destY / (contentHeight - paneHeight);
						positionDragY(percentScrolled * dragMaxY, animate);
					},
					// Positions the horizontal drag at the specified x position (and updates the viewport to reflect
					// this). animate is optional and if not passed then the value of animateScroll from the settings
					// object this jScrollPane was initialised with is used.
					positionDragX: function(x, animate)
					{
						positionDragX(x, animate);
					},
					// Positions the vertical drag at the specified y position (and updates the viewport to reflect
					// this). animate is optional and if not passed then the value of animateScroll from the settings
					// object this jScrollPane was initialised with is used.
					positionDragY: function(y, animate)
					{
						positionDragY(y, animate);
					},
					// This method is called when jScrollPane is trying to animate to a new position. You can override
					// it if you want to provide advanced animation functionality. It is passed the following arguments:
					//  * ele          - the element whose position is being animated
					//  * prop         - the property that is being animated
					//  * value        - the value it's being animated to
					//  * stepCallback - a function that you must execute each time you update the value of the property
					// You can use the default implementation (below) as a starting point for your own implementation.
					animate: function(ele, prop, value, stepCallback)
					{
						var params = {};
						params[prop] = value;
						ele.animate(
							params,
							{
								'duration'	: settings.animateDuration,
								'easing'	: settings.animateEase,
								'queue'		: false,
								'step'		: stepCallback
							}
						);
					},
					// Returns the current x position of the viewport with regards to the content pane.
					getContentPositionX: function()
					{
						return contentPositionX();
					},
					// Returns the current y position of the viewport with regards to the content pane.
					getContentPositionY: function()
					{
						return contentPositionY();
					},
					// Returns the width of the content within the scroll pane.
					getContentWidth: function()
					{
						return contentWidth;
					},
					// Returns the height of the content within the scroll pane.
					getContentHeight: function()
					{
						return contentHeight;
					},
					// Returns the horizontal position of the viewport within the pane content.
					getPercentScrolledX: function()
					{
						return contentPositionX() / (contentWidth - paneWidth);
					},
					// Returns the vertical position of the viewport within the pane content.
					getPercentScrolledY: function()
					{
						return contentPositionY() / (contentHeight - paneHeight);
					},
					// Returns whether or not this scrollpane has a horizontal scrollbar.
					getIsScrollableH: function()
					{
						return isScrollableH;
					},
					// Returns whether or not this scrollpane has a vertical scrollbar.
					getIsScrollableV: function()
					{
						return isScrollableV;
					},
					// Gets a reference to the content pane. It is important that you use this method if you want to
					// edit the content of your jScrollPane as if you access the element directly then you may have some
					// problems (as your original element has had additional elements for the scrollbars etc added into
					// it).
					getContentPane: function()
					{
						return pane;
					},
					// Scrolls this jScrollPane down as far as it can currently scroll. If animate isn't passed then the
					// animateScroll value from settings is used instead.
					scrollToBottom: function(animate)
					{
						positionDragY(dragMaxY, animate);
					},
					// Hijacks the links on the page which link to content inside the scrollpane. If you have changed
					// the content of your page (e.g. via AJAX) and want to make sure any new anchor links to the
					// contents of your scroll pane will work then call this function.
					hijackInternalLinks: function()
					{
						hijackInternalLinks();
					},
					// Removes the jScrollPane and returns the page to the state it was in before jScrollPane was
					// initialised.
					destroy: function()
					{
							destroy();
					}
				}
			);

			initialise(s);
		}

		// Pluginifying code...
		settings = $.extend({}, $.fn.jScrollPane.defaults, settings);

		// Apply default speed
		$.each(['mouseWheelSpeed', 'arrowButtonSpeed', 'trackClickSpeed', 'keyboardSpeed'], function() {
			settings[this] = settings[this] || settings.speed;
		});

		return this.each(
			function()
			{
				var elem = $(this), jspApi = elem.data('jsp');
				if (jspApi) {
					jspApi.reinitialise(settings);
				} else {
					jspApi = new JScrollPane(elem, settings);
					elem.data('jsp', jspApi);
				}
			}
		);
	};

	$.fn.jScrollPane.defaults = {
		showArrows					: false,
		maintainPosition			: true,
		stickToBottom				: false,
		stickToRight				: false,
		clickOnTrack				: true,
		autoReinitialise			: false,
		autoReinitialiseDelay		: 500,
		verticalDragMinHeight		: 0,
		verticalDragMaxHeight		: 99999,
		horizontalDragMinWidth		: 0,
		horizontalDragMaxWidth		: 99999,
		contentWidth				: undefined,
		animateScroll				: false,
		animateDuration				: 300,
		animateEase					: 'linear',
		hijackInternalLinks			: false,
		verticalGutter				: 4,
		horizontalGutter			: 4,
		mouseWheelSpeed				: 0,
		arrowButtonSpeed			: 0,
		arrowRepeatFreq				: 50,
		arrowScrollOnHover			: false,
		trackClickSpeed				: 0,
		trackClickRepeatFreq		: 70,
		verticalArrowPositions		: 'split',
		horizontalArrowPositions	: 'split',
		enableKeyboardNavigation	: true,
		hideFocus					: false,
		keyboardSpeed				: 0,
		initialDelay                : 300,        // Delay before starting repeating
		speed						: 30,		// Default speed when others falsey
		scrollPagePercent			: .8		// Percent of visible area scrolled when pageUp/Down or track area pressed
	};

})(jQuery,this);


/* ../projects/rtw_plus//randomDirectory/ipad/js/lib/modrenizer.js */
// Modernizr v1.7  www.modernizr.com
window.Modernizr=function(a,b,c){function G(){e.input=function(a){for(var b=0,c=a.length;b<c;b++)t[a[b]]=!!(a[b]in l);return t}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)l.setAttribute("type",f=a[d]),e=l.type!=="text",e&&(l.value=m,l.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&l.style.WebkitAppearance!==c?(g.appendChild(l),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(l,null).WebkitAppearance!=="textfield"&&l.offsetHeight!==0,g.removeChild(l)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=l.checkValidity&&l.checkValidity()===!1:/^color$/.test(f)?(g.appendChild(l),g.offsetWidth,e=l.value!=m,g.removeChild(l)):e=l.value!=m)),s[a[d]]=!!e;return s}("search tel url email datetime date month week time datetime-local number range color".split(" "))}function F(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+p.join(c+" ")+c).split(" ");return!!E(d,b)}function E(a,b){for(var d in a)if(k[a[d]]!==c&&(!b||b(a[d],j)))return!0}function D(a,b){return(""+a).indexOf(b)!==-1}function C(a,b){return typeof a===b}function B(a,b){return A(o.join(a+";")+(b||""))}function A(a){k.cssText=a}var d="1.7",e={},f=!0,g=b.documentElement,h=b.head||b.getElementsByTagName("head")[0],i="modernizr",j=b.createElement(i),k=j.style,l=b.createElement("input"),m=":)",n=Object.prototype.toString,o=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),p="Webkit Moz O ms Khtml".split(" "),q={svg:"http://www.w3.org/2000/svg"},r={},s={},t={},u=[],v,w=function(a){var c=b.createElement("style"),d=b.createElement("div"),e;c.textContent=a+"{#modernizr{height:3px}}",h.appendChild(c),d.id="modernizr",g.appendChild(d),e=d.offsetHeight===3,c.parentNode.removeChild(c),d.parentNode.removeChild(d);return!!e},x=function(){function d(d,e){e=e||b.createElement(a[d]||"div");var f=(d="on"+d)in e;f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=C(e[d],"function"),C(e[d],c)||(e[d]=c),e.removeAttribute(d))),e=null;return f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),y=({}).hasOwnProperty,z;C(y,c)||C(y.call,c)?z=function(a,b){return b in a&&C(a.constructor.prototype[b],c)}:z=function(a,b){return y.call(a,b)},r.flexbox=function(){function c(a,b,c,d){a.style.cssText=o.join(b+":"+c+";")+(d||"")}function a(a,b,c,d){b+=":",a.style.cssText=(b+o.join(c+";"+b)).slice(0,-b.length)+(d||"")}var d=b.createElement("div"),e=b.createElement("div");a(d,"display","box","width:42px;padding:0;"),c(e,"box-flex","1","width:10px;"),d.appendChild(e),g.appendChild(d);var f=e.offsetWidth===42;d.removeChild(e),g.removeChild(d);return f},r.canvas=function(){var a=b.createElement("canvas");return a.getContext&&a.getContext("2d")},r.canvastext=function(){return e.canvas&&C(b.createElement("canvas").getContext("2d").fillText,"function")},r.webgl=function(){return!!a.WebGLRenderingContext},r.touch=function(){return"ontouchstart"in a||w("@media ("+o.join("touch-enabled),(")+"modernizr)")},r.geolocation=function(){return!!navigator.geolocation},r.postmessage=function(){return!!a.postMessage},r.websqldatabase=function(){var b=!!a.openDatabase;return b},r.indexedDB=function(){for(var b=-1,c=p.length;++b<c;){var d=p[b].toLowerCase();if(a[d+"_indexedDB"]||a[d+"IndexedDB"])return!0}return!1},r.hashchange=function(){return x("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},r.history=function(){return !!(a.history&&history.pushState)},r.draganddrop=function(){return x("dragstart")&&x("drop")},r.websockets=function(){return"WebSocket"in a},r.rgba=function(){A("background-color:rgba(150,255,150,.5)");return D(k.backgroundColor,"rgba")},r.hsla=function(){A("background-color:hsla(120,40%,100%,.5)");return D(k.backgroundColor,"rgba")||D(k.backgroundColor,"hsla")},r.multiplebgs=function(){A("background:url(//:),url(//:),red url(//:)");return(new RegExp("(url\\s*\\(.*?){3}")).test(k.background)},r.backgroundsize=function(){return F("backgroundSize")},r.borderimage=function(){return F("borderImage")},r.borderradius=function(){return F("borderRadius","",function(a){return D(a,"orderRadius")})},r.boxshadow=function(){return F("boxShadow")},r.textshadow=function(){return b.createElement("div").style.textShadow===""},r.opacity=function(){B("opacity:.55");return/^0.55$/.test(k.opacity)},r.cssanimations=function(){return F("animationName")},r.csscolumns=function(){return F("columnCount")},r.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";A((a+o.join(b+a)+o.join(c+a)).slice(0,-a.length));return D(k.backgroundImage,"gradient")},r.cssreflections=function(){return F("boxReflect")},r.csstransforms=function(){return!!E(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])},r.csstransforms3d=function(){var a=!!E(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);a&&"webkitPerspective"in g.style&&(a=w("@media ("+o.join("transform-3d),(")+"modernizr)"));return a},r.csstransitions=function(){return F("transitionProperty")},r.fontface=function(){var a,c,d=h||g,e=b.createElement("style"),f=b.implementation||{hasFeature:function(){return!1}};e.type="text/css",d.insertBefore(e,d.firstChild),a=e.sheet||e.styleSheet;var i=f.hasFeature("CSS2","")?function(b){if(!a||!b)return!1;var c=!1;try{a.insertRule(b,0),c=/src/i.test(a.cssRules[0].cssText),a.deleteRule(a.cssRules.length-1)}catch(d){}return c}:function(b){if(!a||!b)return!1;a.cssText=b;return a.cssText.length!==0&&/src/i.test(a.cssText)&&a.cssText.replace(/\r+|\n+/g,"").indexOf(b.split(" ")[0])===0};c=i('@font-face { font-family: "font"; src: url(data:,); }'),d.removeChild(e);return c},r.video=function(){var a=b.createElement("video"),c=!!a.canPlayType;if(c){c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"');var d='video/mp4; codecs="avc1.42E01E';c.h264=a.canPlayType(d+'"')||a.canPlayType(d+', mp4a.40.2"'),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"')}return c},r.audio=function(){var a=b.createElement("audio"),c=!!a.canPlayType;c&&(c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"'),c.mp3=a.canPlayType("audio/mpeg;"),c.wav=a.canPlayType('audio/wav; codecs="1"'),c.m4a=a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;"));return c},r.localstorage=function(){try{return!!localStorage.getItem}catch(a){return!1}},r.sessionstorage=function(){try{return!!sessionStorage.getItem}catch(a){return!1}},r.webWorkers=function(){return!!a.Worker},r.applicationcache=function(){return!!a.applicationCache},r.svg=function(){return!!b.createElementNS&&!!b.createElementNS(q.svg,"svg").createSVGRect},r.inlinesvg=function(){var a=b.createElement("div");a.innerHTML="<svg/>";return(a.firstChild&&a.firstChild.namespaceURI)==q.svg},r.smil=function(){return!!b.createElementNS&&/SVG/.test(n.call(b.createElementNS(q.svg,"animate")))},r.svgclippaths=function(){return!!b.createElementNS&&/SVG/.test(n.call(b.createElementNS(q.svg,"clipPath")))};for(var H in r)z(r,H)&&(v=H.toLowerCase(),e[v]=r[H](),u.push((e[v]?"":"no-")+v));e.input||G(),e.crosswindowmessaging=e.postmessage,e.historymanagement=e.history,e.addTest=function(a,b){a=a.toLowerCase();if(!e[a]){b=!!b(),g.className+=" "+(b?"":"no-")+a,e[a]=b;return e}},A(""),j=l=null,f&&a.attachEvent&&function(){var a=b.createElement("div");a.innerHTML="<elem></elem>";return a.childNodes.length!==1}()&&function(a,b){function p(a,b){var c=-1,d=a.length,e,f=[];while(++c<d)e=a[c],(b=e.media||b)!="screen"&&f.push(p(e.imports,b),e.cssText);return f.join("")}function o(a){var b=-1;while(++b<e)a.createElement(d[b])}var c="abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",d=c.split("|"),e=d.length,f=new RegExp("(^|\\s)("+c+")","gi"),g=new RegExp("<(/*)("+c+")","gi"),h=new RegExp("(^|[^\\n]*?\\s)("+c+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),i=b.createDocumentFragment(),j=b.documentElement,k=j.firstChild,l=b.createElement("body"),m=b.createElement("style"),n;o(b),o(i),k.insertBefore(m,k.firstChild),m.media="print",a.attachEvent("onbeforeprint",function(){var a=-1,c=p(b.styleSheets,"all"),k=[],o;n=n||b.body;while((o=h.exec(c))!=null)k.push((o[1]+o[2]+o[3]).replace(f,"$1.iepp_$2")+o[4]);m.styleSheet.cssText=k.join("\n");while(++a<e){var q=b.getElementsByTagName(d[a]),r=q.length,s=-1;while(++s<r)q[s].className.indexOf("iepp_")<0&&(q[s].className+=" iepp_"+d[a])}i.appendChild(n),j.appendChild(l),l.className=n.className,l.innerHTML=n.innerHTML.replace(g,"<$1font")}),a.attachEvent("onafterprint",function(){l.innerHTML="",j.removeChild(l),j.appendChild(n),m.styleSheet.cssText=""})}(a,b),e._enableHTML5=f,e._version=d,g.className=g.className.replace(/\bno-js\b/,"")+" js "+u.join(" ");return e}(this,this.document)

/* ../projects/rtw_plus//randomDirectory/ipad/js/lib/touchscroll.min.js */
/**
	@license

	Copyright (c) 2010 uxebu Consulting Ltd. & Co. KG
	Copyright (c) 2010 David Aurelio
	All rights reserved.

	Redistribution and use in source and binary forms, with or without
	modification, are permitted provided that the following conditions are met:

	1. Redistributions of source code must retain the above copyright
	   notice, this list of conditions and the following disclaimer.
	2. Redistributions in binary form must reproduce the above copyright
	   notice, this list of conditions and the following disclaimer in the
	   documentation and/or other materials provided with the distribution.

	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
	ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
	LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
	CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
	SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
	INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
	CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
	ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
	POSSIBILITY OF SUCH DAMAGE.
*/
var TouchScroll = (function(){

	//
	//	SCROLLER CONFIGURATION
	//
	var config = {
		// the minimum move distance to trigger scrolling (in pixels)
		threshold: 5,

		// minimum scroll handle size
		scrollHandleMinSize: 25,

		// flicking detection and configuration
		flicking: {
			// longest duration between last touchmove and the touchend event to trigger flicking
			triggerThreshold: 150,

			// the friction factor (per milisecond).
			// This factor is used to precalculate the flick length. Lower numbers
			// make flicks decelerate earlier.
			friction: 0.998,

			// minimum speed needed before the animation stop (px/ms)
			// This value is used to precalculate the flick length. Larger numbers
			// lead to shorter flicking lengths and durations
			minSpeed: 0.15,

			// the timing function for flicking animinations (control points for a cubic bezier curve)
			timingFunc: [0, 0.3, 0.6, 1]
		},

		// bouncing configuration
		elasticity: {
			// factor for the bounce length while dragging
			factorDrag: 0.5,

			// factor for the bounce length while flicking
			factorFlick: 0.2,

			// maximum bounce (in px) when flicking
			max: 100
		},

		// snap back configuration
		snapBack: {
			// the timing function for snap back animations (control points for a cubic bezier curve)
			// when bouncing out before, the first control point is overwritten to achieve a smooth
			// transition between bounce and snapback.
			timingFunc: [0.4, 0, 1, 1],

			// default snap back time
			defaultTime: 400,

			// whether the snap back effect always uses the default time or
			// uses the bounce out time.
			alwaysDefaultTime: true
		}
	};

	//
	//	FEATURE DETECTION
	//
	/* Determine touch events support */
	var hasTouchSupport = (function(){
		if("createTouch" in document){ // True on the iPhone
			return true;
		}
		try{
			var event = document.createEvent("TouchEvent"); // Should throw an error if not supported
			return !!event.initTouchEvent; // Check for existance of initialization method
		}catch(error){
			return false;
		}
	}());

	/*
		In some older versions of Android, WebKitCSSMatrix is broken and does
		not parse a "matrix" directive properly.
	*/
	var parsesMatrixCorrectly = (function(){
		try {
			var m = new WebKitCSSMatrix("matrix(1, 0, 0, 1, -20, -30)");
			return m.e == -20 && m.f == -30;
		} catch(e) {
			return false;
		}
	}());

	//
	// FEATURE BASED CODE BRANCHING
	//

	/* Define event names */
	var events;
	if(hasTouchSupport){
		events = {
			start: "touchstart",
			move: "touchmove",
			end: "touchend",
			cancel: "touchcancel"
		};
	}else{
		events = {
			start: "mousedown",
			move: "mousemove",
			end: "mouseup",
			cancel: "touchcancel" // unnecessary here
		};
	}

	var getMatrixFromNode;
	parsesMatrixCorrectly = false;
	if(parsesMatrixCorrectly){
		getMatrixFromNode = function(/*HTMLElement*/node){ /*WebKitCSSMatrix*/
			var doc = node.ownerDocument,
				transform = window.getComputedStyle(node).webkitTransform;

			return new WebKitCSSMatrix(transform);
		}
	}else{
		var reMatrix = /matrix\(\s*-?\d+(?:\.\d+)?\s*,\s*-?\d+(?:\.\d+)?\s*,\s*-?\d+(?:\.\d+)?\s*,\s*-?\d+(?:\.\d+)?\s*\,\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*\)/;
		getMatrixFromNode = function(/*HTMLElement*/node){ /*WebKitCSSMatrix*/
			var doc = node.ownerDocument,
				transform = window.getComputedStyle(node).webkitTransform,
				matrix = new WebKitCSSMatrix(),
				match = reMatrix.exec(transform);

			if(match){
				matrix.e = match[1];
				matrix.f = match[2];
			}

			return matrix;
		}
	}

	//
	// UTILITY FUNCTIONS
	//
	function setTransitionProperty(/*HTMLElement*/node){
		node.style.webkitTransformStyle = "preserve-3d";
		node.style.webkitTransitionProperty = "-webkit-transform";
	};

	function applyMatrixToNode(/*HTMLElement*/node,
	                           /*WebKitCSSMatrix*/matrix,
	                           /*String?*/duration,
	                           /*String?*/timingFunc){
		var s = node.style;
		if(duration != null){
			s.webkitTransitionDuration = duration + "";
		}
		if(timingFunc != null){
			s.webkitTransitionTimingFunction = timingFunc + "";
		}

		// This is twice as fast as than directly assigning the matrix
		// to the style property (maybe because no function call is involved?).
		node.style.webkitTransform = "translate(" + matrix.e + "px, " + matrix.f + "px)";
	}

	function getMatrixFromEvent(event){ /*WebKitCSSMatrix*/
		if(event.touches && event.touches.length){
			event = event.touches[0];
		}

		var matrix = new WebKitCSSMatrix;
		matrix.e = event.pageX;
		matrix.f = event.pageY;

		return matrix;
	};

	function roundMatrix(/*WebKitCSSMatrix*/matrix){ /*WebKitCSSMatrix*/
		matrix.e = Math.round(matrix.e);
		matrix.f = Math.round(matrix.f);
		return matrix;
	}

	// A DOM node to clone for scrollbars
	var scrollbarsTemplate = document.createElement("div");
	scrollbarsTemplate.innerHTML = [
		'<div class="touchScrollTrack touchScrollTrackX">',
			'<div class="touchScrollHandle"></div>',
		'</div>',
		'<div class="touchScrollTrack touchScrollTrackY">',
			'<div class="touchScrollHandle"></div>',
		'</div>'
	].join("");

/*
	=== TOUCH CONTROLLER ======================================================
	Does the actual work.

	The event handling is divided into two parts:
	The scroller constructor tracks "move", "end", and "cancel" events and
	delegates them to the currently active scroller, if any.

	Every single scroller only listens for the "start" event on its outer node,
	and sets itself as the currently active scroller.
*/

/*
	Every object with a "handleEvent" method can be registered as DOM Level 2
	event listener. On event, the method is called on the registered object.
*/
TouchScroll.handleEvent = function handleEvent(event){
	var currentScroller = TouchScroll.prototype.currentScroller;
	if(currentScroller){
		currentScroller.handleEvent(event);
	}else if(event.type === events.move){ // always cancel move events at this point
		//event.preventDefault();
	}
};

/*
	Listening to end, move, and cancel event.
	Event listening takesplace during bubbling, so other scripts can cancel
	scrolling by simply stopping event propagation.
*/
try {
	document.addEventListener(events.move, TouchScroll.handleEvent, false);
	document.addEventListener(events.end, TouchScroll.handleEvent, false);
	document.addEventListener(events.cancel, TouchScroll.handleEvent, false);
} catch (e) {
	// adding events not supported...
}

/**
	Constructor for scrollers.

	@constructor
	@param {HTMLElement} scrollElement The node to make scrollable
	@param {Object} [options] Options for the scroller- Known options are
		elastic {Boolean} whether the scroller bounces
*/
function TouchScroll(/*HTMLElement*/scrollElement, /*Object*/options){
	options = options || {};
	this.elastic = !!options.elastic,
	this.snapToGrid = !!options.snapToGrid;

	this.containerSize = null;
	this.maxSegments = {e: 1, f: 1};
	this.currentSegment = {e: 0, f: 0};

	// references to scroll div elements
	this.scrollers = {
		container: scrollElement,
		outer: /*HTMLElement*/null,
		inner: /*HTMLElement*/null,
		e: /*HTMLElement*/null,
		f: /*HTMLElement*/null
	};

	// Whether the scroller scrolls
	this._scrolls = {e: false, f: false};

	// The minimal scroll values (fully scrolled to the bottom/right)
	// Object with attributes "e" and "f"
	this._scrollMin = {e: false, f: false};

	// References DOM nodes for scrollbar tracks and handles.
	// Gets set up by "_initDom"
	//	{
	//		container: HTMLElement,
	//		handles:{e: HTMLElement, f: HTMLElement},
	//		maxOffsets: {e: Number, f: Number}, -> maximum offsets for the handles
	//		offsetRatios: {e: Number, f: Number}, -> Ratio of scroller offset to handle offset
	//		sizes: {e: Number, f: Number}, -> handle sizes
	//		tracks: {e: HTMLElement, f: HTMLElement},
	//	}
	this._scrollbars = null,


	/* ---- SCROLLER STATE ---- */

	this._isScrolling = false;

	this._startEvent = null;

	// the current scroller offset
	this._currentOffset = new WebKitCSSMatrix();

	// Events tracked during a move action
	// [ {timeStamp: Number, matrix: WebKitCSSMatrix} ]
	// The last two events get tracked.
	this._trackedEvents = /*Array*/null;

	// Keeps track whether flicking is active
	this._flicking = {e: false, f: false};

	// Queued bounces
	this._bounces = {e: null, f: null};

	// Animation timeouts
	// This implementation uses timeouts for combined animations,
	// because the webkitTransitionEnd event fires late on iPhone 3G
	this._animationTimeouts = {e: [], f: []};

	this._initDom();
	this.setupScroller();
}

TouchScroll.prototype = {
	// references the currently active scroller
	// static property!
	currentScroller: null,

	// Maps event types to method names.
	handlerNames: {
		resize: "setupScroller",
		orientationchange: "setupScroller",
		webkitTransitionEnd: "onTransitionEnd",
		DOMSubtreeModified: "setupScroller",

		touchstart: "onTouchStart",
		mousedown: "onTouchStart",
		touchmove: "onTouchMove",
		mousemove: "onTouchMove",
		touchend: "onTouchEnd",
		mouseup: "onTouchEnd",
		touchcancel: "onTouchEnd"
	},

	// Does DOM initialization needed for the scroller
	_initDom: function initDom(){
		// wrap the scroller contents with two additional <div> elements
		var innerScroller = document.createElement("div"),
			outerScroller = innerScroller.cloneNode(false),
			parentNode = this.scrollers.container;

		var topFade = document.createElement("div");
		var bottomFade = document.createElement("div");
		topFade.className = "touchScrollTopFade";
		bottomFade.className = "touchScrollBottomFade";
		topFade.style.display = "none";
		bottomFade.style.display = "none";
		this.topFade = topFade;
		this.bottomFade = bottomFade;

		innerScroller.className = "touchScrollInner";
		parentNode.className += " touchScroll";

		for(var i = 0, iMax = parentNode.childNodes.length; i < iMax; i++){
			innerScroller.appendChild(parentNode.firstChild);
		}

		outerScroller.appendChild(innerScroller);
		parentNode.appendChild(outerScroller);
		parentNode.appendChild(topFade);
		parentNode.appendChild(bottomFade);

		this.scrollers.outer = this.scrollers.f = outerScroller;
		this.scrollers.inner = this.scrollers.e = innerScroller;

		// init scroll layers for transitions
		setTransitionProperty(outerScroller);
		setTransitionProperty(innerScroller);

		innerScroller.style.display = "inline-block";
		innerScroller.style.minWidth = "100%";
		innerScroller.style.webkitBoxSizing = "border-box";

		// add scrollbars
		var scrollbarsNode = scrollbarsTemplate.cloneNode(true),
			trackE = scrollbarsNode.querySelector(".touchScrollTrackX"),
			trackF = scrollbarsNode.querySelector(".touchScrollTrackY"),
			handleE = trackE.firstElementChild,
			handleF = trackF.firstElementChild;


		var style = scrollbarsNode.style;
		style.pointerEvents = "none"; // make clicks/touches on scrollbars "fall through"
		style.webkitTransitionProperty = "opacity";
		style.webkitTransitionDuration = "250ms";
		style.opacity = "0";

		var scrollbars = this._scrollbars = {
			container: scrollbarsNode,
			tracks: {
				e: trackE,
				f: trackF
			},
			handles: {
				e: handleE,
				f: handleF
			},
			sizes : {e: 0, f: 0}
		}

		setTransitionProperty(handleE);
		setTransitionProperty(handleF);

		parentNode.insertBefore(scrollbarsNode, outerScroller);

		/*
			Apply relative positioning to the scrolling container.
			This is needed to enable scrollbar positioning.
		*/
		if(window.getComputedStyle(parentNode).position == "static"){
			parentNode.style.position = "relative";
		}

		this.setupScroller();

		// initialize event listeners
		parentNode.addEventListener(events.start, this, false);
		outerScroller.addEventListener("webkitTransitionEnd", this, false);
		outerScroller.addEventListener("DOMSubtreeModified", this, true);
		window.addEventListener("orientationchange", this, false);
		window.addEventListener("resize", this, false);
	},

	setupScroller: function setupScroller(debug){

		console.log(debug);

		var scrollContainer = this.scrollers.outer.parentNode,
			containerSize = {
				e: scrollContainer.offsetWidth,
				f: scrollContainer.offsetHeight
			},
			innerScroller = this.scrollers.inner,
			scrollerSize = {
				e: innerScroller.offsetWidth,
				f: innerScroller.offsetHeight
			},
			scrollbars = this._scrollbars,
			scrollMin = {
				e: Math.min(containerSize.e - scrollerSize.e, 0),
				f: Math.min(containerSize.f - scrollerSize.f, 0)
			};

		this.containerSize = containerSize;
		this.maxSegments = {
			e: Math.ceil(-scrollMin.e / containerSize.e),
			f: Math.ceil(-scrollMin.f / containerSize.f)
		};

		scrollbars.container.style.height = containerSize.f + "px";

		// Minimum scroll offsets
		this._scrollMin = scrollMin;
		var scrolls = this._scrolls = {
			e: scrollMin.e < 0,
			f: scrollMin.f < 0
		};

		this._doScroll = scrolls.e || scrolls.f;

		// scrollbar container class name changes if both scrollbars are visible
		scrollbars.container.className = "touchScrollBars";
		if(scrolls.e && scrolls.f){
			scrollbars.container.className += " touchScrollBarsBoth";
		}

		// hide/show scrollbars
		scrollbars.tracks.e.style.display = scrolls.e ? "" : "none";
		scrollbars.tracks.f.style.display = scrolls.f ? "" : "none";

		var scrollbarTrackSizes = {
				e: scrollbars.tracks.e.offsetWidth,
				f: scrollbars.tracks.f.offsetHeight
			};

		// calculate and apply scroll bar handle sizes
		scrollbars.sizes = {
			e: Math.round(Math.max(
				scrollbarTrackSizes.e * containerSize.e / scrollerSize.e,
				config.scrollHandleMinSize
			)),
			f: Math.round(Math.max(
				scrollbarTrackSizes.f * containerSize.f / scrollerSize.f,
				config.scrollHandleMinSize
			))
		};
		scrollbars.handles.e.style.width = scrollbars.sizes.e + "px";
		scrollbars.handles.f.style.height = scrollbars.sizes.f + "px";

		// maximum scrollbar offsets
		scrollbars.maxOffsets = {
			e: scrollbarTrackSizes.e - scrollbars.handles.e.offsetWidth,
			f: scrollbarTrackSizes.f - scrollbars.handles.f.offsetHeight
		};

		// calculate offset ratios
		// (scroller.offset * offsetratio = scrollhandle.offset)
		scrollbars.offsetRatios = {
			e: scrolls.e ? (scrollbarTrackSizes.e - scrollbars.handles.e.offsetWidth) / scrollMin.e : 0,
			f: scrolls.f ? (scrollbarTrackSizes.f - scrollbars.handles.f.offsetHeight) / scrollMin.f : 0
		};

		this.hideScrollbars();
		this.checkFades();
	},

	// Standard DOM Level 2 event handler
	handleEvent: function handleEvent(event){
		var handlerName = this.handlerNames[event.type];
		if(handlerName){
			this[handlerName](event);
		}
	},

	// Handles touch start events on the scroller
	onTouchStart: function onTouchStart(event){
		if(!this._doScroll){
			return;
		}
		this.__proto__.currentScroller = this;
		this._isScrolling = false;
		this._trackedEvents = [];
		this._determineOffset();
		this._trackEvent(event);
		this._startEventTarget = event.target; // We track this to work around a bug in android, see below
		var wasAnimating = this._stopAnimations();
		this._snapBack(null, 0);
		this._startEvent = event;

		event.stopPropagation();

		/*
			If the scroller was animating, prevent the default action of the event.
			This prevents clickable elements to be activated accidentally.

			Also, we need to cancel the touchstart event to prevent android from
			queuing up move events and fire them only when the touch ends.
		*/
		//if(wasAnimating){
			event.preventDefault();
		//}

	},

	// Handles touch move events on the scroller
	onTouchMove: function onTouchMove(event){
		if(!this._doScroll){
			return;
		}

		// must be present, because touchstart fired before
		var lastEventOffset = this._trackedEvents[1].matrix,
			scrollOffset = getMatrixFromEvent(event).translate(
				-lastEventOffset.e,
				-lastEventOffset.f,
				0
			),
			isScrolling = this._isScrolling,
			doScroll = isScrolling;

		event.stopPropagation();
		event.preventDefault();

		if(!doScroll){
			var threshold = config.threshold,
			doScroll = scrollOffset.e <= -threshold || scrollOffset.e >= threshold ||
			           scrollOffset.f <= -threshold || scrollOffset.f >= threshold;
		}

		if(doScroll){
			if(!isScrolling){
				this._isScrolling = true;
				this.showScrollbars();
			}

			this._scrollBy(scrollOffset);
			this._trackEvent(event);
		}

		this.checkFades();
	},

	onTouchEnd: function onTouchEnd(event){
		var startTarget = this._startEventTarget;

		if(!this._isScrolling && startTarget == event.target){
		/*
			If no scroll has been made, the touchend event should trigger
			a focus and a click (if occurring on the same node as the
			touchstart event).
			Unfortunately, we've canceled the touchstart event to work around
			a bug in android -- so we need to dispatch our own focus and
			click events.
		*/


			var node = event.target;
			while(node.nodeType != 1){
				node = node.parentNode;
			}
			var focusEvent = document.createEvent("HTMLEvents");
			focusEvent.initEvent("focus", false, false);
			node.dispatchEvent(focusEvent);
			//node.focus();

			var clickEvent = document.createEvent("MouseEvent");
			clickEvent.initMouseEvent(
				"click", //type
				true, //canBubble
				true, //cancelable
				event.view,
				1, //detail (number of clicks for mouse events)
				event.screenX,
				event.screenY,
				event.clientX,
				event.clientY,
				event.ctrlKey,
				event.altKey,
				event.shiftKey,
				event.metaKey,
				event.button,
				null// relatedTarget
			);
			node.dispatchEvent(clickEvent);
			this.hideScrollbars();
		}else if(this._isScrolling){
			var moveSpec = this._getLastMove();
			if(moveSpec.duration <= config.flicking.triggerThreshold && moveSpec.length){
			/*
				If the time between the touchend event and the last tracked
				event is below threshold, we are triggering a flick.
			*/
				var flickDuration = this._getFlickingDuration(moveSpec.speed),
					flickLength = this._getFlickingLength(moveSpec.speed, flickDuration),
					flickVector = moveSpec.matrix,
					factor = flickLength / moveSpec.length;

				flickVector.e *= factor;
				flickVector.f *= factor;

				this.startFlick(flickVector, flickDuration);
			}
		}

		if(!(this.isAnimating())){
			if(this.snapToGrid){
				this._snapBackToGrid();
			}else{
				var snappingBack = this._snapBack();
				if(!snappingBack){
					this.hideScrollbars();
				}
			}
		}
		delete this._startEventTarget;
		this._isScrolling = false;
		this.__proto__.currentScroller = null;
	},

	onTransitionEnd: function onTransitionEnd(event){
		["e", "f"].forEach(function(axis){
			if(event.target === this.scrollers[axis]){
				this._flicking[axis] = false;
			}
		}, this);

		if(!this.isAnimating()){
			this.hideScrollbars();
		}
	},

	isAnimating: function isAnimating(){
		var timeouts = this._animationTimeouts;
		var hasTimeouts = timeouts.e.length > 0 || timeouts.f.length > 0;
		var isFlicking = this._flicking.e || this._flicking.f;
		return hasTimeouts || isFlicking;
	},

	scrollBy: function scrollBy(/*Number*/x, /*Number*/y){
		this._stopAnimations();

		var matrix = new WebKitCSSMatrix();
		matrix.e = -x;
		matrix.f = -y;
		return this._scrollBy(matrix);
	},

	scrollTo: function scrollTo(x, y){
		this._stopAnimations();

		var scrollMin = this._scrollMin;
		var m = new WebKitCSSMatrix();
		m.e = Math.min(0, Math.max(scrollMin.e, -x));
		m.f = Math.min(0, Math.max(scrollMin.f, -y));

		var currentOffset = this._currentOffset;
		m.e -= currentOffset.e;
		m.f -= currentOffset.f;

		var ret = this._scrollBy(m);
		this.checkFades();
		return ret;
	},

	center: function center(){
		var x = -Math.round(this._scrollMin.e/2);
		var y = -Math.round(this._scrollMin.f/2);
		return this.scrollTo(x, y);
	},

	// Scrolls the layer by applying a transform matrix to it.
	//
	// As this method is called for every touchmove event, the code is rolled
	// out for both axes (leading to redundancies) to get maximum performance.
	_scrollBy: function _scrollBy(/*WebKitCSSMatrix*/matrix){
		var scrolls = this._scrolls;
		if(!scrolls.e){
			matrix.e = 0;
		}
		if(!scrolls.f){
			matrix.f = 0;
		}

		var scrollMin = this._scrollMin,
			currentOffset = this._currentOffset,
			newOffset = currentOffset.multiply(matrix),
			isOutOfBounds = {e: false, f: false}, // whether the new position is out of the scroller bounds
			scrollbarSizeSubstract = {e: 0, f: 0};

		if(this.elastic){
			var factor = config.elasticity.factorDrag,
				wasOutOfBounds = { // whether the scroller was already beyond scroll bounds
					e: currentOffset.e < scrollMin.e || currentOffset.e > 0,
					f: currentOffset.f < scrollMin.f || currentOffset.f > 0
				};

			if(wasOutOfBounds.e){
				// if out of scroll bounds, apply the elasticity factor
				newOffset.e -= matrix.e * (1 - factor);
			}
			if(wasOutOfBounds.f){
				newOffset.f -= matrix.f * (1 - factor);
			}

			if(newOffset.e < scrollMin.e || newOffset.e > 0){
				isOutOfBounds.e = true;
				scrollbarSizeSubstract.e = newOffset.e >= 0 ?
				                           newOffset.e : scrollMin.e - newOffset.e;
			}
			if(newOffset.f < scrollMin.f || newOffset.f > 0){
				isOutOfBounds.f = true;
				scrollbarSizeSubstract.f = newOffset.f >= 0 ?
				                           newOffset.f : scrollMin.f - newOffset.f;
			}

			var crossingBounds = { // whether the drag/scroll action went across scroller bounds
					e: (!wasOutOfBounds.e || !isOutOfBounds.e) && (isOutOfBounds.e || isOutOfBounds.e),
					f: (!wasOutOfBounds.f || !isOutOfBounds.f) && (isOutOfBounds.f || isOutOfBounds.f)
				};


			if(crossingBounds.e){
				/*
					If the drag went across scroll bounds, we need to apply a
					"mixed strategy": The part of the drag outside the bounds
					is mutliplicated by the elasticity factor.
				*/
				if(currentOffset.e > 0){
					newOffset.e /= factor;
				}else if(newOffset.e > 0){
					newOffset.e *= factor;
				}else if(currentOffset.e < scrollMin.e){
					newOffset.e += (scrollMin.e - currentOffset.e) / factor;
				}else if(newOffset.e < scrollMin.e){
					newOffset.e -= (scrollMin.e - newOffset.e) * factor;
				}
			}

			if(crossingBounds.f){
				if(currentOffset.f > 0){
					newOffset.f /= factor;
				}else if(newOffset.f > 0){
					newOffset.f *= factor;
				}else if(currentOffset.f < scrollMin.f){
					newOffset.f += (scrollMin.f - currentOffset.f) / factor;
				}else if(newOffset.f < scrollMin.f){
					newOffset.f -= (scrollMin.f - newOffset.f) * factor;
				}
			}
		}else{
			// Constrain scrolling to scroller bounds
			if(newOffset.e < scrollMin.e){
				newOffset.e = scrollMin.e;
			}else if(newOffset.e > 0){
				newOffset.e = 0;
			}

			if(newOffset.f < scrollMin.f){
				newOffset.f = scrollMin.f;
			}else if(newOffset.f > 0){
				newOffset.f = 0;
			}
		}

		this._currentOffset = newOffset;
		this._pageOffset = newOffset;


		var offsetX = newOffset.translate(0, 0, 0),
			offsetY = newOffset.translate(0, 0, 0);

		offsetX.f = offsetY.e = 0;

		applyMatrixToNode(this.scrollers.e, offsetX);
		applyMatrixToNode(this.scrollers.f, offsetY);

		// scrollbar position
		var ratios = this._scrollbars.offsetRatios;
		offsetX.e *= ratios.e;
		offsetY.f *= ratios.f;

		if(isOutOfBounds.e){
			this._squeezeScrollbar("e", scrollbarSizeSubstract.e, newOffset.e < 0);
		}else{
			applyMatrixToNode(this._scrollbars.handles.e, offsetX);
		}
		if(isOutOfBounds.f){
			this._squeezeScrollbar("f", scrollbarSizeSubstract.f, newOffset.f < 0);
		}else{
			applyMatrixToNode(this._scrollbars.handles.f, offsetY);
		}

	},

	// Tracks all properties needed for scrolling
	// We're tracking only the last two events for the moment
	_trackEvent: function _trackEvent(event){
		var trackedEvents = this._trackedEvents;
		trackedEvents[0] = trackedEvents[1];
		trackedEvents[1] = {
			matrix: getMatrixFromEvent(event),
			timeStamp: event.timeStamp
		};
	},

	showScrollbars: function showScrollbars(){
		if(this.snapToGrid){
			return;
		}
		var style = this._scrollbars.container.style;
		style.webkitTransitionDuration = "";
		style.opacity = "1";
	},

	hideScrollbars: function hideScrollbars(){
		var style = this._scrollbars.container.style;
		style.webkitTransitionDuration = "250ms";
		style.opacity = ".15";

		this.checkFades();
	},

	checkFades: function() {
		var myoffset = getMatrixFromNode(this.scrollers.f);
		if (myoffset.f <= this._scrollMin.f) {
			//at bottom..
			this.bottomFade.style.display = 'none';
		} else {
			this.bottomFade.style.display = '';
		}
		if (myoffset.f >= 0) {
			//at top..
			this.topFade.style.display = 'none';
		} else {
			this.topFade.style.display = '';
		}
	},

	_squeezeScrollbar: function _squeezeScrollbar(axis, substract, squeezeAtEnd, duration, timingFunc){
		var scrollbars = this._scrollbars;
		var handleStyle = scrollbars.handles[axis].style;

		var defaultSize = scrollbars.sizes[axis];
		var size = Math.max(defaultSize - substract, 1);

		var matrix = new WebKitCSSMatrix();
		matrix[axis] = squeezeAtEnd ? scrollbars.maxOffsets[axis] : 0;
		matrix[axis == "f" ? "d" : "a"] = size / defaultSize;

		handleStyle.webkitTransformOrigin = squeezeAtEnd ? "100% 100%" : "0 0";
		handleStyle.webkitTransitionProperty = "-webkit-transform";
		handleStyle.webkitTransform = matrix;

		if(duration){
			handleStyle.webkitTransitionDuration = duration + "ms";
			handleStyle.webkitTransitionTimingFunction = timingFunc;
			this._animationTimeouts[axis].push(setTimeout(function(){
				handleStyle.webkitTransitionDuration = "";
			}, duration));
		}else{
			handleStyle.webkitTransitionDuration = "";
		}
	},

	_determineOffset: function _determineOffset(round){
		var offsetX = getMatrixFromNode(this.scrollers.e),
			offsetY = getMatrixFromNode(this.scrollers.f),
			currentOffset = offsetX.multiply(offsetY);

		if(round){
			roundMatrix(currentOffset);
		}

		this._currentOffset = currentOffset;
	},

	_stopAnimations: function _stopAnimations(){ /*Boolean*/
		var isAnimating = false;
		var scrollbars = this._scrollbars;
		["e", "f"].forEach(function(axis){
			this.scrollers[axis].style.webkitTransitionDuration = "";
			var handle = scrollbars.handles[axis];
			handle.style.webkitTransitionDuration = "";
			setTransitionProperty(handle);
			scrollbars.tracks[axis].style.webkitBoxPack = "";


			var timeouts = this._animationTimeouts[axis];
			isAnimating = isAnimating || timeouts.length;
			timeouts.forEach(function(timeoutId){
				clearTimeout(timeoutId);
			});
			timeouts.length = 0;
		}, this);

		// if animating, we stop animations by determining the current
		// offset (rounding its values) and then setting those values
		// to the scroller by calling "scrollBy"
		this._determineOffset(true);
		this._scrollBy(new WebKitCSSMatrix());

		// deleting queued bounces
		this._bounces.e = this._bounces.f = null;

		// resetting state
		var isFlicking = this._flicking;
		isFlicking.e = isFlicking.f = false;

		return isAnimating;
	},

	_getLastMove: function _getLastMove(){
		var trackedEvents = this._trackedEvents,
			event0 = trackedEvents[0],
			event1 = trackedEvents[1];

		if(!event0){
			return {duration: 0, matrix: new WebKitCSSMatrix(), length: 0, speed: 0};
		}

		var duration = event1.timeStamp - event0.timeStamp,
			matrix = event1.matrix.multiply(event0.matrix.inverse());

		var scrolls = this._scrolls;
		if (!scrolls.e) {
			matrix.e = 0;
		}
		if (!scrolls.f) {
			matrix.f = 0;
		}
		var length = Math.sqrt(matrix.e * matrix.e + matrix.f * matrix.f);

		return {
			duration: duration, // move duration in miliseconds
			matrix: matrix, // matrix of the move
			length: length, // length of the move in pixels
			speed: length / duration // speed of the move in miliseconds
		}
	},

	// returns flicking duration in miliseconds for a given speed
	_getFlickingDuration: function _getFlickingDuration(pixelsPerMilisecond){
		/*
			The duration is computed as follows:

			variables:
				m = minimum speed before stopping = config.flicking.minSpeed
				d = duration
				s = speed = pixelsPerMilisecond
				f = friction per milisecond = config.flicking.friction

			The minimum speed is computed as follows:
					m = s * f ^ d

				// as the minimum speed is given and we need the duration we
				// can solve the equation for d:
			<=> 	d = log(m/s) / log(f)
		*/
		var duration =	Math.log(
							config.flicking.minSpeed /
							pixelsPerMilisecond
						) /
						Math.log(config.flicking.friction);

		return duration > 0 ? Math.round(duration) : 0;
	},

	_getFlickingLength: function _getFlickingLength(initialSpeed, flickDuration){
		/*
			The amount of pixels to flick is the sum of the distance covered every
			milisecond of the flicking duration.

			Because the distance is decelerated by the friction factor, the speed
			at a given time t is:

				pixelsPerMilisecond * friction^t

			and the distance covered is:

				d = distance
				s = initial speed = pixelsPerMilisecond
				t = time = duration
				f = friction per milisecond = config.flicking.friction

				d = sum of s * f^n for n between 0 and t
			<=>	d = s * (sum of f^n for n between 0 and t)

			which is a geometric series and thus can be simplified to:
				d = s *  (1 - f^(d+1)) / (1 - f)
		*/
		var factor = (1 - Math.pow(config.flicking.friction, flickDuration + 1)) / (1 - config.flicking.friction);
		return initialSpeed * factor;
	},

	startFlick: function startFlick(matrix, duration){
		if(!(duration || this.snapToGrid)){
			this._snapBack();
			return;
		}
		duration = duration || config.snapBack.defaultTime;

		var epsilon = 1 / duration, // precision for bezier computations
			points = config.flicking.timingFunc, // control points for the animation function
			timingFunc = new CubicBezier(points[0], points[1], points[2], points[3]),
			min = this._scrollMin,
			currentOffset = this._currentOffset,
			scrollbars = this._scrollbars;

		roundMatrix(matrix);
		var scrollTarget = this._currentOffset.multiply(matrix);
		var scrolls = this._scrolls;

		if(this.snapToGrid){
			var maxSegments = this.maxSegments;
			var currentSegments = this.currentSegment;
		}

		var animating = {e: true, f: true};
		["e", "f"].forEach(function(axis){
			if(!scrolls[axis]){
				animating[axis] = false;
				return;
			}
			var distance = matrix[axis],
				target = scrollTarget[axis],
				segmentFraction = 1; // the fraction of the flick distance until crossing scroller bounds

			// compute distance fraction where flicking crosses scroller bounds
			var minOffset = min[axis];
			var maxOffset = 0;
			if(this.snapToGrid){
				var containerLength = this.containerSize[axis];
				var increment = distance > 0 ? -1 : 1;
				var maxSegment = maxSegments[axis];
				var currentSegment = currentSegments[axis];
				var flickToSegment = currentSegment + increment;
				if(flickToSegment < 0){
					flickToSegment = 0;
				}else if(maxSegment < flickToSegment){
					flickToSegment = maxSegment;
				}
				this.currentSegment[axis] = flickToSegment;

				if(flickToSegment == currentSegment || !distance){
					return this._snapBack(axis, null, -currentSegment * containerLength);
				}

				maxOffset = minOffset = -flickToSegment * containerLength;
			}

			var segmentFraction, flick, bounce;
			if(this.snapToGrid){
				flick = (distance < 0 ? minOffset : maxOffset) - currentOffset[axis];
				bounce = 0;
				segmentFraction = flick / distance;
			}else{
				if(target < minOffset){
					segmentFraction = 1 - Math.max(Math.min((target - minOffset) / matrix[axis], 1), 0);
				}else if(target > maxOffset){
					segmentFraction = 1 - Math.max(Math.min((target - maxOffset) / matrix[axis], 1), 0);
				}

				flick = segmentFraction * distance;
				bounce = distance - flick;
			}

			if(!(flick || bounce)){
				animating[axis] = this._snapBack(axis);
				return;
			}

			var t = timingFunc.getTforY(segmentFraction, epsilon);
			if (t > 1) { t = 1; } else if (t < 0) { t = 0 }

			var timeFraction = timingFunc.getPointForT(t).x,
				bezierCurves = timingFunc.divideAtT(t);

			var flickTransform =  new WebKitCSSMatrix();
			flickTransform[axis] = currentOffset[axis];

			var flickDuration = timeFraction * duration;

			if(flick && timeFraction){
				this._flicking[axis] = true;

				// animate scroller
				flickTransform[axis] += flick;
				applyMatrixToNode(this.scrollers[axis], flickTransform,
				                  flickDuration + "ms", bezierCurves[0]);

				// animate scrollbars
				var scrollbarTransform = flickTransform.translate(0, 0, 0);
				scrollbarTransform[axis] *= scrollbars.offsetRatios[axis];
				applyMatrixToNode(scrollbars.handles[axis], scrollbarTransform,
				                  flickDuration + "ms", bezierCurves[0]);

			}

			if(this.elastic && bounce){
				var bounceTransform = flickTransform.translate(0, 0, 0),
					bounceTiming = bezierCurves[1];

				// Creating a smooth transition from bounce out to snap back
				bounceTiming._p2 = {
					x: 1 - config.snapBack.timingFunc[0],
					y: 1 - config.snapBack.timingFunc[1]
				};

				// limit the bounce to the configured maximum
				var bounceFactor = Math.min(
					config.elasticity.factorFlick,
					config.elasticity.max / Math.abs(bounce)
				);

				bounceTransform[axis] += bounce * bounceFactor;
				var bounceDuration = (1 - timeFraction) * duration * bounceFactor;
				this._bounces[axis] = {
					timingFunc: bounceTiming,
					duration: bounceDuration + "ms",
					matrix: bounceTransform,
					bounceLength: Math.abs(bounce * bounceFactor)
				};

				// play queued animations with timeouts, because
				// the webkitTransitionEnd event fires late on iPhone 3G
				var that = this;
				var timeouts = this._animationTimeouts[axis];
				var handle = this._sc

				timeouts.push(setTimeout(function(){
					that._playQueuedBounce(axis);
				}, flickDuration));

				timeouts.push(setTimeout(function(){
					var duration = config.snapBack.alwaysDefaultTime ? null : bounceDuration;
					that._snapBack(axis, duration);
					timeouts.length = 0; // clear timeouts
				}, flickDuration + bounceDuration));
			}
		}, this);

		if(!(animating.e || animating.f)){
			this.hideScrollbars();
		}
	},

	_playQueuedBounce: function _playQueuedBounce(axis){
		var bounce = this._bounces[axis];

		if(bounce){
			var scroller = this.scrollers[axis],
				that = this,
				matrix = bounce.matrix,
				duration = bounce.duration,
				timingFunc = bounce.timingFunc;

			applyMatrixToNode(scroller, matrix, duration, timingFunc);

			// bounce scrollbar handle
			this._squeezeScrollbar(axis, bounce.bounceLength, matrix[axis] < 0, duration, timingFunc);

			this._bounces[axis] = null;
			return true;
		}

		return false;
	},

	_snapBack: function _snapBack(/*String?*/axis, /*Number?*/duration, /*Number?*/target){ /*Boolean*/
		duration = duration != null ? duration : config.snapBack.defaultTime;
		if(axis == null){
			var snapBackE = this._snapBack("e", duration);
			var snapBackF = this._snapBack("f", duration);
			var snappingBack = snapBackE || snapBackF;
			if(!snappingBack){
				this.hideScrollbars();
			}else{
				var scroller = this;
				this._animationTimeouts.f.push(setTimeout(function(){
					scroller.hideScrollbars();
				}, duration));
			}
			return snappingBack;
		}

		var scroller = this.scrollers[axis],
			offset = getMatrixFromNode(scroller),
			cp = config.snapBack.timingFunc, // control points
			timingFunc = new CubicBezier(cp[0], cp[1], cp[2], cp[3]);

		if(target != null || offset[axis] < this._scrollMin[axis] || offset[axis] > 0){
			offset[axis] = target != null ? target : Math.max(Math.min(offset[axis], 0), this._scrollMin[axis]);
			this._squeezeScrollbar(axis, 0, offset[axis] < 0, duration, timingFunc);
			applyMatrixToNode(scroller, offset, duration + "ms", timingFunc);

			return Boolean(duration);
		}

		return false;
	},

	_snapBackToGrid: function snapBackToGrid(){
		var currentOffset = this._currentOffset;
		var containerSize = this.containerSize;
		["e", "f"].forEach(function(axis){
			var axisOffset = currentOffset[axis];
			var containerLength = containerSize[axis];
			var currentSegment = -Math.floor((axisOffset + 0.5 * containerLength )/containerLength);
			var maxSegment = this.maxSegments[axis];
			if(currentSegment < 0){
				currentSegment = 0;
			}else if(maxSegment < currentSegment){
				currentSegment = maxSegment;
			}
			this.currentSegment[axis] = currentSegment;
			return this._snapBack(axis, null, -currentSegment * containerLength);
		}, this);
	}
};

return TouchScroll;
}());

/**
 * @license
 *
 * Copyright (C) 2008 Apple Inc. All Rights Reserved.
 * Copyright (C) 2010 David Aurelio. All Rights Reserved.
 * Copyright (C) 2010 uxebu Consulting Ltd. & Co. KG. All Rights Reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE INC., DAVID AURELIO, AND UXEBU
 * CONSULTING LTD. & CO. KG ``AS IS'' AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 * IN NO EVENT SHALL APPLE INC. OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
 * STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING
 * IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Represents a two-dimensional cubic bezier curve with the starting
 * point (0, 0) and the end point (1, 1). The two control points p1 and p2
 * have x and y coordinates between 0 and 1.
 *
 * This type of bezier curves can be used as CSS transform timing functions.
 */
function CubicBezier(p1x, p1y, p2x, p2y){
    if (!(p1x >= 0 && p1x <= 1)) {
        throw new RangeError("'p1x' must be a number between 0 and 1. "
                               + "Got " + p1x + "instead.");
    }
    if (!(p1y >= 0 && p1y <= 1)) {
        throw new RangeError("'p1y' must be a number between 0 and 1. "
                               + "Got " + p1y + "instead.");
    }
    if (!(p2x >= 0 && p2x <= 1)) {
        throw new RangeError("'p2x' must be a number between 0 and 1. "
                               + "Got " + p2x + "instead.");
    }
    if (!(p2y >= 0 && p2y <= 1)) {
        throw new RangeError("'p2y' must be a number between 0 and 1. "
                               + "Got " + p2y + "instead.");
    }

    // Control points
    this._p1 = { x: p1x, y: p1y };
    this._p2 = { x: p2x, y: p2y };
}

CubicBezier.prototype._getCoordinateForT = function(t, p1, p2){
    var c = 3 * p1,
        b = 3 * (p2 - p1) - c,
        a = 1 - c - b;

    return ((a * t + b) * t + c) * t;
};

CubicBezier.prototype._getCoordinateDerivateForT = function(t, p1, p2){
    var c = 3 * p1,
        b = 3 * (p2 - p1) - c,
        a = 1 - c - b;

    return (3 * a * t + 2 * b) * t + c;
};

CubicBezier.prototype._getTForCoordinate = function(c, p1, p2, epsilon){
    if (!isFinite(epsilon) || epsilon <= 0) {
        throw new RangeError("'epsilon' must be a number greater than 0.");
    }

    // First try a few iterations of Newton's method -- normally very fast.
    for (var t2 = c, i = 0, c2, d2; i < 8; i++) {
        c2 = this._getCoordinateForT(t2, p1, p2) - c;
        if (Math.abs(c2) < epsilon){
            return t2;
        }
        d2 = this._getCoordinateDerivateForT(t2, p1, p2);
        if (Math.abs(d2) < 1e-6){
            break;
        }
        t2 = t2 - c2 / d2;
    }

    // Fall back to the bisection method for reliability.
    t2 = c;
    var t0 = 0,
        t1 = 1,
        c2;

    if (t2 < t0){
        return t0;
    }
    if (t2 > t1){
        return t1;
    }

    while (t0 < t1) {
        c2 = this._getCoordinateForT(t2, p1, p2);
        if (Math.abs(c2 - c) < epsilon){
            return t2;
        }
        if (c > c2){
            t0 = t2;
        }
        else{
            t1 = t2;
        }
        t2 = (t1 - t0) * .5 + t0;
    }

    // Failure.
    return t2;
};

/**
 * Computes the point for a given t value.
 *
 * @param {number} t
 * @returns {Object} Returns an object with x and y properties
 */
CubicBezier.prototype.getPointForT = function(t) {
    // Special cases: starting and ending points
    if (t == 0 || t == 1) {
        return { x: t, y: t };
    }
    // check for correct t value (must be between 0 and 1)
    else if (!(t > 0) || !(t < 1)) {
        throw new RangeError("'t' must be a number between 0 and 1"
                             + "Got " + t + " instead.");
    }

    return {
        x: this._getCoordinateForT(t, this._p1.x, this._p2.x),
        y: this._getCoordinateForT(t, this._p1.y, this._p2.y)
    }
};

CubicBezier.prototype.getTforX = function(x, epsilon){
    return this._getTForCoordinate(x, this._p1.x, this._p2.x, epsilon);
};

CubicBezier.prototype.getTforY = function(y, epsilon){
    return this._getTForCoordinate(y, this._p1.y, this._p2.y, epsilon);
};

/**
 * Computes auxiliary points using De Casteljau's algorithm.
 *
 * @param {number} t must be greater than 0 and lower than 1.
 * @returns {Object} with members i0, i1, i2 (first iteration),
 *     j1, j2 (second iteration) and k (the exact point for t)
 */
CubicBezier.prototype._getAuxPoints = function(t){
    if (!(t > 0) || !(t < 1)) {
        throw new RangeError("'t' must be greater than 0 and lower than 1");
    }

    // First series of auxiliary points
    var i0 = { // first control point of the left curve
            x: t * this._p1.x,
            y: t * this._p1.y
        },
        i1 = {
            x: this._p1.x + t*(this._p2.x - this._p1.x),
            y: this._p1.y + t*(this._p2.y - this._p1.y)
        },
        i2  = { // second control point of the right curve
            x: this._p2.x + t*(1 - this._p2.x),
            y: this._p2.y + t*(1 - this._p2.y)
        };

    // Second series of auxiliary points
    var j0 = { // second control point of the left curve
            x: i0.x + t*(i1.x - i0.x),
            y: i0.y + t*(i1.y - i0.y)
        },
        j1 = { // first control point of the right curve
            x: i1.x + t*(i2.x - i1.x),
            y: i1.y + t*(i2.y - i1.y)
        };

    // The division point (ending point of left curve, starting point of right curve)
    var k = {
            x: j0.x + t*(j1.x - j0.x),
            y: j0.y + t*(j1.y - j0.y)
        };

    return {
        i0: i0,
        i1: i1,
        i2: i2,
        j0: j0,
        j1: j1,
        k: k
    }
};

/**
 * Divides the bezier curve into two bezier functions.
 *
 * De Casteljau's algorithm is used to compute the new starting, ending, and
 * control points.
 *
 * @param {number} t must be greater than 0 and lower than 1.
 *     t == 1 or t == 0 are the starting/ending points of the curve, so no
 *     division is needed.
 *
 * @returns {CubicBezier[]} Returns an array containing two bezier curves
 *     to the left and the right of t.
 */
CubicBezier.prototype.divideAtT = function(t){
    if (t < 0 || t > 1) {
        throw new RangeError("'t' must be a number between 0 and 1. "
                             + "Got " + t + " instead.");
    }

    // Special cases t = 0, t = 1: Curve can be cloned for one side, the other
    // side is a linear curve (with duration 0)
    if (t === 0 || t === 1){
        var curves = [];
        curves[t] = CubicBezier.linear();
        curves[1-t] = this.clone();
        return curves;
    }

    var left = {},
        right = {},
        points = this._getAuxPoints(t);

    var i0 = points.i0,
        i1 = points.i1,
        i2 = points.i2,
        j0 = points.j0,
        j1 = points.j1,
        k = points.k;

    // Normalize derived points, so that the new curves starting/ending point
    // coordinates are (0, 0) respectively (1, 1)
    var factorX = k.x,
        factorY = k.y;

    left.p1 = {
        x: i0.x / factorX,
        y: i0.y / factorY
    };
    left.p2 = {
        x: j0.x / factorX,
        y: j0.y / factorY
    };

    right.p1 = {
        x: (j1.x - factorX) / (1 - factorX),
        y: (j1.y - factorY) / (1 - factorY)
    };

    right.p2 = {
        x: (i2.x - factorX) / (1 - factorX),
        y: (i2.y - factorY) / (1 - factorY)
    };

    return [
        new CubicBezier(left.p1.x, left.p1.y, left.p2.x, left.p2.y),
        new CubicBezier(right.p1.x, right.p1.y, right.p2.x, right.p2.y)
    ];
};

CubicBezier.prototype.divideAtX = function(x, epsilon) {
    if (x < 0 || x > 1) {
        throw new RangeError("'x' must be a number between 0 and 1. "
                             + "Got " + x + " instead.");
    }

    var t = this.getTforX(x, epsilon);
    return this.divideAtT(t);
};

CubicBezier.prototype.divideAtY = function(y, epsilon) {
    if (y < 0 || y > 1) {
        throw new RangeError("'y' must be a number between 0 and 1. "
                             + "Got " + y + " instead.");
    }

    var t = this.getTforY(y, epsilon);
    return this.divideAtT(t);
};

CubicBezier.prototype.clone = function() {
    return new CubicBezier(this._p1.x, this._p1.y, this._p2.x, this._p2.y);
};

CubicBezier.prototype.toString = function(){
    return "cubic-bezier(" + [
        this._p1.x,
        this._p1.y,
        this._p2.x,
        this._p2.y
    ].join(", ") + ")";
};

CubicBezier.linear = function(){
    return new CubicBezier
};

CubicBezier.ease = function(){
    return new CubicBezier(0.25, 0.1, 0.25, 1.0);
};
CubicBezier.linear = function(){
    return new CubicBezier(0.0, 0.0, 1.0, 1.0);
};
CubicBezier.easeIn = function(){
    return new CubicBezier(0.42, 0, 1.0, 1.0);
};
CubicBezier.easeOut = function(){
    return new CubicBezier(0, 0, 0.58, 1.0);
};
CubicBezier.easeInOut = function(){
    return new CubicBezier(0.42, 0, 0.58, 1.0);
};

/* ../projects/rtw_plus//randomDirectory/ipad/js/base/AnimationQueue.js */
// JavaScript Document

var AnimationQueue = Class.extend({
  init: function() {

		this.queuedItems = [];
		this.dequeue = jQuery.proxy(this.realDequeue, this);
	}
});

AnimationQueue.prototype.queue = function(fn) {
	this.queuedItems.push(fn);
}

AnimationQueue.prototype.realDequeue = function() {
	var fn = this.queuedItems.shift();

	if (!fn)
		return;

	fn.call();

}


/* ../projects/rtw_plus//randomDirectory/ipad/js/base/FinderPage.js */
// JavaScript Document
/*
	Finder Page
	*/

var FinderPage = Class.extend({
  init: function(params) {

		this.doTransition = true;
		this.params = {};

		this.title = params.title;
		this.url = params.url;
		this.navId = params.navId;

		if (params.transitionIn)
			this.transitionIn = params.transitionIn;

		if (params.transitionOut)
			this.transitionOut = params.transitionOut;

		this.pageLoaded = false;
		this.imagesLoaded = false;

		this.preLoad = params.preLoad;

		if (!params.navHighlight)
			this.navHighlight = params.navId;
		else
			this.navHighlight = params.navHighlight;

		if (!this.preLoad)
			this.preLoad = [];

		this.preloadHandler = new PreloadHandler(jQuery.proxy(this.allImagesLoaded, this), this.preLoad);

		this.transitionOutDelay = 500;

	},
	load: function(vars){

		this.params = this.parseQueryString(vars);
		if (this.params.argc) {
			this.params.argc = this.params.argc.split("/");
		}

		if (!this.pageLoaded) {
			// get the contents...
			finder.loadingDisplay.start("page load");
			this.processPageLoad(finder.getTemplate(this.navId));

		}
		else {
			this.allImagesLoaded();
		}

	},

	doTransitions: function(bool) {
		this.doTransition = bool;
	},

	processParams: function() {
		// override me..
	},

	bringToFront: function(){
		console.log(".finderPage#" + this.navId);
		console.log(jQuery(".finderPage#" + this.navId, "#pageContainer").show().css({'visibility': 'visible', 'z-index': 150}));

		jQuery("#finderContainer").trigger("pageLoaded");
		jQuery("#finderContainer").trigger("dataChanged");

	},

	sendToBack: function() {

		jQuery(".finderPage#" + this.navId, "#pageContainer").css({'visibility': 'hidden', 'z-index': 1}).hide();

	},

	transitionIn: function() {
		this.bringToFront();
	},

	transitionOut: function() {
		var self = this;
		setTimeout(function() {
			self.prepareForNextLoad();
			self.sendToBack();
			}, self.transitionOutDelay);
	},

	prepareForNextLoad: function() {

	},

	setup: function() {

	},

	unload: function(){
		var self = this;
		this.transitionOut();

		setTimeout(jQuery.proxy(this.removePage, this), self.transitionOutDelay);

	}
});



FinderPage.prototype.setParent = function (parent)
{
	this.parent = parent;
}

FinderPage.prototype.allImagesLoaded = function() {

	this.processParams();

	if (this.doTransition) {
		this.transitionIn();
	} else {
		this.bringToFront();
	}
}

FinderPage.prototype.processPageLoad = function(data, status, xhr) {
	data = data.replace(/randomDirectory\//g, finder.getConfig().assetsDirectory);
	this.pageLoaded = true;
	jQuery("#pageContainer").append(data);
	this.setup();
	this.preloadHandler.start();
	finder.loadingDisplay.end("page load");
}


FinderPage.prototype.removePage = function() {

	this.pageLoaded = false;
	jQuery("#" + this.navId + ".finderPage", "#pageContainer").remove();

}

FinderPage.prototype.parseQueryString = function (q) {

	var urlParams = {};

    var e,
        a = /\+/g,  // Regex for replacing addition symbol with a space
        r = /([^&=]+)=?([^&]*)/g,
        d = function (s) { return decodeURIComponent(s.replace(a, " ")); }

    while (e = r.exec(q))
       urlParams[d(e[1])] = d(e[2]);

	return urlParams;
}







/* ../projects/rtw_plus//randomDirectory/ipad/js/base/LoadingDisplay.js */
var LoadingDisplay = Class.extend({
  init: function() {

		this.div = jQuery("#bodyContainer>DIV.loading");
		this.counter = 0;

	}
});

LoadingDisplay.prototype.getDiv = function() {
	return jQuery("#bodyContainer>DIV.loading");
}

LoadingDisplay.prototype.start = function(desc) {
	this.counter++;
	this.div.stop().show();
	console.log("start: " + desc);
}

LoadingDisplay.prototype.end = function (desc) {
	this.counter--;

	if (this.counter <= 0)
	{

		this.counter = 0;
		this.div.fadeOut();
	}
	console.log("end: " + desc);
}


LoadingDisplay.prototype.reset = function() {
	this.counter = 0;
}

/* ../projects/rtw_plus//randomDirectory/ipad/js/base/MacysFinder.js */

var MacysFinder = Class.extend({
  init: function() {
		this.pages = {};
		this.currentPage = false;

		this.loadingDisplay = new LoadingDisplay();
		this.poolCache = new PoolCache();

		this.setupURLHandling();

		jQuery.ajaxSetup( {
			cache: false
		});

		this.templates = {};

		this.skava = new SkavaInterop();
	},

	setTemplates: function(templates) {
		this.templates = templates;
	},

	getTemplate: function(id) {
		return this.templates[id];
	},

	isTablet: function() {
		return Modernizr.touch || navigator.userAgent.match(/iPad/i) != null;
	},

	shouldResizeAndScroll: function() {
		return !($.browser.msie && parseFloat($.browser.version)<8);
		// change change the document.domain if we are using an iframe for history management.


	    // Does the browser support window.onhashchange? Note that IE8 running in
	    // IE7 compatibility mode reports true for 'onhashchange' in window, even
	    // though the event isn't supported, so also test document.documentMode.
	    var doc_mode = document.documentMode,
	    supports_onhashchange = 'on' + str_hashchange in window && ( doc_mode === undefined || doc_mode > 7 );

		console.log("Native History Support", supports_onhashchange);

		return supports_onhashchange;
	},

	resizePage: function() {

		if (!this.shouldResizeAndScroll())
			return;

		var height = jQuery("#finderContainer").height();

		try {
			//var currentDomain = document.domain;

			if (window.location.host.indexOf("atfingertips.com") > -1)
				document.domain = "atfingertips.com";
			else
				document.domain = "macys.com";

			$(parent.document.getElementById("social")).css({'height': height + "px"});
			console.log("resized to", height);
			//document.domain = currentDomain;
		} catch (e) {
			console.error("Could not resize page", e);
		}
	},

	scrollPage: function(whereTo) {

		if (!this.shouldResizeAndScroll())
			return;

		var top = 131; //macys header..

		switch (whereTo) {
			case "top":
				top += 0;
				break;

			case "pool":
				var adder = jQuery("#finderContainer #pool_wrap").offset().top;
				top += adder;
				break;
		}

		try {
			if (window.location.host.indexOf("atfingertips.com") > -1)
				document.domain = "atfingertips.com";
			else
				document.domain = "macys.com";

			//parent.window.scroll(0, top);
			jQuery("HTML,BODY", jQuery(parent.window.document)).animate({scrollTop: top});
			console.log("page scrolled to", top, whereTo, parent, parent.window);
		} catch(e) {
			console.log("Could not scroll page");
		}

	},

	loadPage: function(pageId, query) {

		// see if this is the current page...
		if (this.currentPage && pageId == this.currentPage.navId)
		{

			this.currentPage.load(query);
			finder.pageChanged(this.currentPage);
			return;
		}

		var self = this;


		if (this.currentPage)
			this.currentPage.unload();



		this.loadingDisplay.reset();

		if (!query)
			query = "";



		if (!this.currentPage) {
			this.currentPage = {}
		}



		if (!this.currentPage.transitionOutDelay) {
			this.currentPage.transitionOutDelay = 500;
		}


		jQuery("A.selected").removeClass("selected");

		// is this an alias?
		if (finder.getConfig().aliases[pageId]) {
			var alias = pageId = finder.getConfig().aliases[pageId];
			pageId = alias.page;
			query = "argc=" + alias.query;
		}

		page = this.pages[pageId];
		setTimeout(function(){
            page.load(query);
            finder.pageChanged(page);
        }, this.currentPage.transitionOutDelay + 100);

		//jQuery("A[finderPage=" + page.navHighlight+"]").addClass("selected");


		this.currentPage = page;

	}
});

MacysFinder.prototype.getPoolCache = function() {
	return this.poolCache;
}

MacysFinder.prototype.setupURLHandling = function(){

	var self = this;
	$(window).hashchange( function() {
		self.manageState(location.hash.substring(1));
	})
}

MacysFinder.prototype.manageState = function(state) {
	// parse state...

	console.log(state);

	//console.log(state);

	try {
		closeSharePopup(null, 0);
	} catch(e) { }

	try {
		closePopup();
	} catch(e) { }




	if (state == "")
		state = "/" + this.defaultPage;

	var saveState = state;

	if (state.substring(0,1) == "/")
		state = state.substring(1);

	if (state.indexOf("?") > 0)
	{
		state = state.split("?");
		this.loadPage(state[0], state[1]);
	} else {

		if (state.lastIndexOf("/") > 0)
		{
			state = state.split("/");
			var page = state.shift();;
			var params = "argc=" + state.join("/");
			this.loadPage(page, params);
			return;
		}

		this.loadPage(state);
	}
}


MacysFinder.prototype.startFinder = function()
{
	// parse the url..


	if (window.location.hash == "")
	{
		finder.loadPage(this.defaultPage);
	} else {
		finder.manageState(location.hash.substring(1));
	}

}

MacysFinder.prototype.pageChanged = function() {

}

MacysFinder.prototype.getCurrentPage = function() {
	return this.currentPage;
}

MacysFinder.prototype.addPage = function (page) {
	page.setParent(this);
	this.pages[page.navId] = (page);
}



// JavaScript Document
// PreloadHandler

var PreloadImage = Class.extend({
  init: function(parent, imgsrc) {

		this.handler = parent;
		this.loaded = false;
		this.imgsrc = imgsrc;

		if (this.imgsrc.substring(0,7) != "http://")
			this.imgsrc = finder.getConfig().assetsDirectory + this.imgsrc;

		var pImage = this;

		this.img = new Image();


		jQuery(this.img).bind('load', function(){
			pImage.itemLoaded();
		});

		console.log("preloadimage: " + this.imgsrc);

		this.img.src = this.imgsrc;
	}
});


PreloadImage.prototype.itemLoaded = function() {
	this.loaded = true;
	this.handler.itemLoaded();
}

var PreloadHandler = Class.extend({
  init: function(callback, images) {

		this.callback = callback;
		this.images = images;
		this.preloadItems = [];
		this.isDone = false;
	}
});

PreloadHandler.prototype.start = function()
{
	if (!this.images || this.images.length == 0)
	{
		this.callback();
		return;
	}
	finder.loadingDisplay.start("image preload");
	var myself = this;
	for (var i = 0; i < this.images.length; i++)
	{
		this.preloadItems.push(new PreloadImage(this, this.images[i]));
	}

	this.images = null;
}

PreloadHandler.prototype.itemLoaded = function() {
	if (!this.isDone && this.checkForFullLoad())
	{
		//try {
			finder.loadingDisplay.end("image preload");
			this.isDone = true;
			this.callback();
		//} catch(e) { alert("itemLoaded: " + e.message);}
	} else {

	}

}


PreloadHandler.prototype.checkForFullLoad = function() {
	for (var i = 0; i < this.preloadItems.length; i++)
	{
		if (!this.preloadItems[i].loaded)
			return false;
	}
	return true;
}


var LoadingDisplay = Class.extend({
  init: function() {

		this.div = jQuery("#bodyContainer>DIV.loading");
		this.counter = 0;

	}
});

LoadingDisplay.prototype.getDiv = function() {
	return jQuery("#bodyContainer>DIV.loading");
}

LoadingDisplay.prototype.start = function(desc) {
	this.counter++;
	this.div = jQuery("#bodyContainer>DIV.loading");
	this.div.stop().show();
	console.log("start: " + desc);
}

LoadingDisplay.prototype.end = function (desc) {
	this.counter--;

	if (this.counter <= 0)
	{

		this.counter = 0;
		this.div.fadeOut();
	}
	console.log("end: " + desc);
}


LoadingDisplay.prototype.reset = function() {
	this.counter = 0;
}



/* ../projects/rtw_plus//randomDirectory/ipad/js/base/PinchZoomable.js */
function PinchZoomable(n1){
    var n = jQuery(n1);

    n.each(function(){

		var n3 = jQuery(this);

        if (!n3.attr("rotation") || n3.attr("rotation") == "")
            n3.attr("rotation", "0");

        if (!n3.attr("scale") || n3.attr("scale") == "")
            n3.attr("scale", "1");

        if (!n3.attr("translate") || n3.attr("translate") == "")
            n3.attr("translate", " ");

        if (!n3.attr("deltaX") || n3.attr("deltaX") == "")
            n3.attr("deltaX", 0);

        if (!n3.attr("deltaY") || n3.attr("deltaY") == "")
            n3.attr("deltaY", 0);

        n3.addClass("pinchZoomable");
    })



    n.bind("touchstart", function(e){
        e.preventDefault();

        if (e.originalEvent.touches.length != 1)
            return;

        var node = jQuery(this);

        var nodePosition = node.offset();

        var touch = e.originalEvent.touches[0];

        var xChange = touch.pageX - 1 * node.attr("deltaX");
        var yChange = touch.pageY - 1 * node.attr("deltaY");

        node.attr("offX", xChange);
        node.attr("offY", yChange);

		node.css({
			"-webkit-transform-origin": "50% 50%"
		});

        node.trigger("interactionStart");
    });


    n.bind("touchend", function(e){
        var node = jQuery(this);
        node.trigger("interactionEnd");
    });

    n.bind("touchmove", function(e){

        if (e.originalEvent.touches.length != 1)
            return;

        e.preventDefault();

        var node = jQuery(this);

        var touch = e.originalEvent.touches[0];

        var newX = touch.pageX - node.attr("offX");
        var newY = touch.pageY - node.attr("offY");



        node.attr("deltaX", newX).attr("deltaY", newY);

        newX += "px";
        newY += "px";

        var rotation = parseInt(node.attr("rotation"));
        var scale = node.attr("scale");
        var translate = "translate3d(" + newX + ", " + newY + ", 0px)";
        node.attr("translate", translate);

        //console.log(translate + " rotation(" + rotation + "deg) scale(" + scale + ")");
        node.css({
            "-webkit-transform": translate + " rotate(" + rotation + "deg) scale(" + scale + ")"
        })
    });

    n.bind("gesturestart", function(){

        var node = jQuery(this);

        if (!node.attr("rotation") || node.attr("rotation") == "")
            node.attr("rotation", "0");

        if (!node.attr("scale") || node.attr("scale") == "")
            node.attr("scale", "1");


        node.trigger("interactionStart");
    });

    n.bind("gestureend", function(){

        var node = jQuery(this);
        node.trigger("interactionEnd");
        node.removeClass("interaction");
        node.attr("rotation", node.attr("xrotation"));
        node.attr("scale", node.attr("xscale"));
        console.log("end");


    });

    n.bind("gesturechange", function(f){
        f.preventDefault();
        e = f.originalEvent;
        try {
            var node = jQuery(this);

            var currentRotation = parseInt(node.attr("rotation"));
            var currentScale = 1 * node.attr("scale");


            var newRotation = (currentRotation + e.rotation) % 360;
            var newScale = currentScale * e.scale;
            newScale = newScale.toFixed(2);

            var translate = node.attr("translate");

            // scale and rotation are relative values,
            // so we wait to change our variables until the gesture ends
            //node.style.width = (width * e.scale) + "px";
            //node.style.height = (height * e.scale) + "px";
            node.css("-webkit-transform", translate + " rotate(" + ((newRotation) % 360) + "deg) scale(" + newScale + ")");

            node.attr("xrotation", newRotation);
            node.attr("xscale", newScale);
        }
        catch (e) {

        }
    });

    n.bind("interactionStart", function(e){
        jQuery(this).addClass("interaction");

        var maxZindex = 1;
        var children = jQuery(this).parent().children('.pinchZoomable');
        children.each(function(){
            maxZindex = Math.max(maxZindex, 1 * jQuery(this).css("z-index"));
        });

        jQuery(this).css("z-index", ++maxZindex);
    });

    n.bind("interactionEnd", function(e){
        jQuery(this).removeClass("interaction");
    });
}


/* ../projects/rtw_plus//randomDirectory/ipad/js/base/PoolBoy.js */

/// JavaScript Document

var PoolBoy = Class.extend({
  init: function(parent) {

		if (!parent)
			parent = false;


		this.proxy = false;
		this.parent = parent;
		this.lastPool = "";
		this.loaded = false;
		this.lastDocument = "";

		this.limit = 1000;
		this.offset = 0;
		this.numItems = 0;
		this.skavaFilter = false;
	}
});

PoolBoy.prototype.loadPool = function(pool, callback, type) {

	if (!type)
		type = "simple";

	this.callback = callback;



	/*
	if (this.lastPool == pool && this.loaded)
	{
		if (this.parent) {
			this.parent.poolContainer.trigger("poolDataLoaded");
		}
		this.callback();
		return;
	}
	*/

	// see if its in the cache..
	var cachePool = finder.getPoolCache().getPool(pool);

	if (cachePool) {
		if (cachePool != "") {
			// in load from cache..

			this.processPoolResults(jQuery.parseXML(cachePool));
			return;
		}
	}

	this.lastPool = pool;
	this.loaded = false;



	var url = pool.replace(/limit=(.*?)&/, "limit=" + this.limit + "&");
	url = url.replace(/offset=(.*?)&/, "offset=" + this.offset + "&");

	if (this.skavaFilter) {
		url = url + "&filter=" + escape(JSON.stringify(this.skavaFilter));
	}

	//url = "pool.xml";

	this.proxy = false;
	if (this.proxy)
		url = "proxy.php?url=" + escape(url);

	try {
		var poolBoyObj = this;
		skavaPoolLoadCallback = function(entries)
		{
			poolBoyObj.processPoolResultsJSON(entries);
		}
		url = url + "&callback=skavaPoolLoadCallback";
		getDataFromServer('id_blackfriday_pool', url) ;

	}
	catch (e) {
		console.log("getDataFromServer Error", "using jQuery ajax instead")

		jQuery.ajax({
			type: "GET",
			url: url,
			dataType: "jsonp",
			//jsonpCallback: "skavaPoolLoadCallback",
			success: jQuery.proxy(this.processPoolResultsJSON, this)
		});

	}


}

PoolBoy.prototype.processPoolResults = function(document, status, xhr) {
	this.loaded = true;
	this.lastDocument = document;
	this.db = new TAFFY([]);
	this.parseDocument(document);

	// save this pool into the cache..
	try {
		xhr.responseText;
		finder.getPoolCache().updateCache(this.lastPool, xhr.responseText);
	} catch (e) { }

	try {
		this.callback();
	} catch(e) {  };
}

PoolBoy.prototype.processPoolResultsJSON = function(document, status, xhr) {
	this.loaded = true;
	this.lastDocument = document;
	this.db = new TAFFY([]);

	this.parseDocumentJSON(document);

	// save this pool into the cache..
	try {
		xhr.responseText;
		finder.getPoolCache().updateCache(this.lastPool, xhr.responseText);
	} catch (e) { }

	try {
		if (this.parent) {
			this.parent.poolContainer.trigger("poolDataLoaded");
		}
	} catch (e) {

	}

	try {
		this.callback();
	} catch(e) {  };
}

PoolBoy.prototype.parseDocumentJSON = function (document) {
	var db = this.db;
	var counter = 0;

	console.log("document from skava", document);
	this.numItems = document.totalEntries[0];


	if (!document.entries) {
		document.entries = [];
		document.entryStat = [];
	}

	var helper = new PoolHelper();

	for (var i =0; i < document.entries.length; i++) {

		me = document.entries[i];

		var entry=me.properties;

		entry.entryid = me.entryId;
		entry.label = me.title;
		entry.description = me.comment;
		entry.image_fullImage = me.fileUrl;
		entry.itemUrl = me.itemUrlyeah;
		//entry.voteCount = me.find("votecount").text();
		//entry.ranking = me.find("rankingd").text();

		// get the votes..
		try {
			entry.votes = 0;
			entry.votes = document.entryStats[i].numLikes;
		} catch (e) {
			// do nothing...
		}

		entry.pfeed_priceforfilters = 1 * entry.pfeed_priceforfilters;


		entry.swatches = [];
		try {
			var colors = jQuery.parseJSON(entry.pfeed_colorimage);
			for (j in colors) {
				if (colors[j][0] != "") {
					var swatch = {};
					swatch.title = j;
					swatch.swatchImage = colors[j][0];
					if (colors[j][1])
						swatch.productImage = colors[j][1].replace(/wid=(.*?)&/gi, "wid=%width%&").replace(/hei=(.*?)&/gi, "&");
					else
						swatch.productImage = "";
					entry.swatches.push(swatch);
				}
			}

		} catch(e) {

		}

		entry.promotions = [];
		try {
			entry.promotions = jQuery.parseJSON(entry.pfeed_promotions);
			entry.promotionsText = entry.promotions.join(", ");
			entry.hasPromotions = entry.promotions.length > 0;
		} catch(e) {

		}

		if (entry.pfeed_shopcategory && !(entry.pfeed_shopcategory instanceof Array))
			entry.pfeed_shopcategory = entry.pfeed_shopcategory.split(",");

		if (entry.pfeed_productgroup && !(entry.pfeed_productgroup instanceof Array))
			entry.pfeed_productgroup = entry.pfeed_productgroup.split(",");

		helper.parseEntry(entry);



		entry.pool_insert_id = counter;
		db.insert(entry);

		counter++;

	}
}

PoolBoy.prototype.setLimit = function(limit) {
	this.limit = limit
}

PoolBoy.prototype.setOffset = function(offset) {
	this.offset = offset
}

PoolBoy.prototype.setSkavaFilter = function(filter) {
	this.skavaFilter = filter
}


PoolBoy.prototype.parseDocument = function (document) {
	var db = this.db;
	var counter = 0;
	jQuery(document).find("entry").each(function() {
		var entry = {};
		me = jQuery(this);

		entry.entryid = me.find("entryid").text();
		entry.label = me.find("label").text();
		entry.description = me.find("description").text();
		entry.image_fullImage = me.find("imageurl").text();
		entry.itemUrl = me.find("itemUrl").text();
		entry.voteCount = me.find("votecount").text();
		entry.ranking = me.find("rankingd").text();

		me.find("prop").each (function() {
			var name = jQuery(this).attr("name");
			var value = jQuery(this).text();
			switch (name) {
				case "pfeed_availability":
				case "pfeed_brand":
				case "pfeed_bvavgrating":
				case "pfeed_bvnumreviews":
				case "pfeed_bvtoprated":
				case "pfeed_id":
				case "pfeed_imageurl":
				case "pfeed_longdescription":
				case "pfeed_specialsize":
				case "pfeed_shopcategory":
				case "pfeed_name":
				case "pfeed_price1":
				case "pfeed_price2":
				case "pfeed_price3":
				case "pfeed_priceforfilters":
				case "pfeed_saleprice":
				case "pfeed_retailprice":
				case "pfeed_shortdescription":
				case "pfeed_bvavgrating":
				case "pfeed_newarrival":
				case "promogroup":
				case "pfeed_look":
				case "pfeed_customtitle":
				case "pfeed_customdescription1":
				case "pfeed_display":
					entry[name] = value;
					break;

				case "pfeed_bvcomments":
				case "pfeed_bvcommentstitle":
					entry[name] = value.split("%,%").reverse();
					try {
						if (entry[name][0].trim == "")
							array_shift(entry[name]);
					} catch(e) { }
					break;

				default:
					entry[name] = value.split(",");
					break;
			}
		})

		entry.pfeed_priceforfilters = 1 * entry.pfeed_priceforfilters;

		entry.pool_insert_id = counter;
		db.insert(entry);

		counter++;

	});
}

PoolBoy.prototype.showFilteredResults = function (divToUpdate, templateName, filter)
{
	var items = false;


		for (i = 0; i < filter.length; i++) {

			if (!items) {
				if (filter[i].length == 0)
					items = this.db();
				else
					items = this.db(filter[i]);

			}
			else {
				if (filter[i].length > 0)
					items = items.filter(filter[i]);
			}
		}

		if (filter.length > 0)
			items = items.get();
		else
			items = this.db().get();


	try {
		jQuery(templateName).tmpl(items).appendTo(divToUpdate);
		jQuery(divToUpdate).append("<div style='clear: both;'></div>");


		jQuery("#finderContainer").trigger("poolLoaded");
		jQuery(finder.getCurrentPage().parentDiv).trigger("poolLoaded");
		jQuery("#finderContainer").trigger("dataChanged");
	}
	catch (e) {

	}
	return items;
}

PoolBoy.prototype.getFilteredResults = function (filter)
{
	var items = false;


		for (i = 0; i < filter.length; i++) {

			if (!items) {
				if (filter[i].length == 0)
					items = this.db();
				else
					items = this.db(filter[i]);

			}
			else {
				if (filter[i].length > 0)
					items = items.filter(filter[i]);
			}
		}

		if (filter.length > 0)
			items = items;
		else
			items = this.db();


	return items;
}

PoolBoy.prototype.sort = function (filter) {

	this.db.sort(filter);
}



var PoolCache = Class.extend({
  init: function() {

		this.available = true;
		if (!shouldCache || !window['localStorage']) {
			this.available = false;
			return;
		}

		this.storage = window['localStorage'];

		this.cacheLength = 10; //minutes;

	},

	updateCache: function(name, pool) {
		if (!this.available)
			return false;


		this.storage.setItem("TIMESTAMP_" + name, new Date().getTime());


		this.storage.setItem("POOL_" + name, pool);
	},

	getPool: function(name) {


		if (!this.available)
			return false;

		var timestamp = this.storage.getItem("TIMESTAMP_" + name);



		if (!timestamp)
			return false;



		timestamp = timestamp * 1;



		if (timestamp < (new Date().getTime()) - this.cacheLength * 60 * 60 * 1000) {
			// too old..
			// try to remove this pool from the cache..
			this.storage.removeItem("POOL_" + pool);
			this.storage.removeItem("TIMESTAMP_" + pool);
			return false;
		}



		var pool = this.storage.getItem("POOL_" + name);
		if (pool != null) {
			console.log("pool found");
			return pool;
		} else {
			console.log("pool was null");
			return false;
		}
	}
});




/* ../projects/rtw_plus//randomDirectory/ipad/js/base/SkavaInterop.js */

function sharePopupCloseCallback() {
	jQuery("#finderContainer").trigger("popupsClosed");
}

var SkavaInterop = Class.extend({



    init: function(){

		var self = this;

		this.votedItems = [];
    	this.wishList = new SkavaInteropWishList();
		this.internationalPricing = new SkavaInteropInternationalPricing();

		this.initializeWidgets("BODY");

		// setup event listeners...
		jQuery('[role="skavaInteropShare"]').live({
			click: function(event) {
				event.preventDefault();
				if(jQuery(this).attr("config")=="currentPage"){
					self.share($.extend({},finder.getConfig().sharing['site'],{url:webRoot+'/'+finder.getCurrentPage().navId}));
				}else{
					var thistrend = jQuery(this).attr("trend");
					var trendshare = {};
					trendshare.facebook = {};
					trendshare.mailerIds = {};
						trendshare.mailerIds.staging = 647;
						trendshare.mailerIds.production = 593;
						trendshare.facebook.title = jQuery(this).siblings("h4").text();
						trendshare.facebook.description = jQuery(this).siblings("p").text();
						trendshare.twitter = jQuery(this).siblings("h4").text()+' '+jQuery(this).siblings("p").text();
						trendshare.url = finder.getConfig().sharing.site.url+'/'+thistrend;
						trendshare.icon = jQuery(this).siblings("a.minusSharePin").attr("pinicon");
					try{
						self.share(trendshare);
					}catch(e){
						console.log('did not share', e);
					}
				}
			}
		});


		jQuery('[role="skavaInteropSharePinterest"]').live({
			click: function(event) {
				event.preventDefault();
				if(jQuery(this).attr("config")=="currentPage"){
					try{
						sharePinterest(null, finder.getConfig().sharing.site.twitter, finder.getConfig().sharing.site.icon, finder.getConfig().sharing.site.url,  "width=700, height=500", true);
					}catch(e){
						console.log('did not share', e);
					}
					finder.skava.handleTracking(finder.getCurrentPage(), finder.getConfig().clicktracking['pinterest']);
				}else if(jQuery(this).attr("config")=="accessories"){
					var thistrend = jQuery(this).attr("trend");
					var trendshare = {};
					trendshare.facebook = {};
						trendshare.facebook.title = finder.getConfig().pageData.accessories.share[thistrend].title;
						trendshare.facebook.description = finder.getConfig().pageData.accessories.share[thistrend].desc;
						trendshare.twitter = finder.getConfig().pageData.accessories.share[thistrend].title+' '+finder.getConfig().pageData.accessories.share[thistrend].desc;
						trendshare.url = finder.getConfig().sharing.site.url+'/'+thistrend;
						trendshare.icon = assetsDirectory+'images/pinicons/'+thistrend+'.jpg';
					try{
						sharePinterest(null, trendshare.twitter, trendshare.icon, trendshare.url,  "width=700, height=500", true);
					}catch(e){
						console.log('did not share', e);
					}
					finder.skava.handleTracking(finder.getCurrentPage(), finder.getConfig().clicktracking['pinterest']);
				}else if(jQuery(this).attr("config")=="section"){
					var thistrend = jQuery(this).attr("trend");
					var trendshare = {};
					trendshare.facebook = {};
						trendshare.facebook.title = finder.getConfig().pageData[thistrend].share.title;
						trendshare.facebook.description = finder.getConfig().pageData[thistrend].share.desc;
						trendshare.twitter = finder.getConfig().pageData[thistrend].share.title+' '+finder.getConfig().pageData[thistrend].share.desc;
						trendshare.url = finder.getConfig().sharing.site.url+'/'+thistrend;
						trendshare.icon = finder.getConfig().pageData[thistrend].share.icon;
					try{
						sharePinterest(null, trendshare.twitter, trendshare.icon, trendshare.url,  "width=700, height=500", true);
					}catch(e){
						console.log('did not share', e);
					}
					finder.skava.handleTracking(finder.getCurrentPage(), finder.getConfig().clicktracking['pinterest']);
				}else if(jQuery(this).attr("config")=="trend"){
					var thistrend = jQuery(this).attr("trend");
					var trendshare = {};
					trendshare.facebook = {};
						trendshare.facebook.title = finder.getConfig().pageData[thistrend].share.title;
						trendshare.facebook.description = finder.getConfig().pageData[thistrend].share.desc;
						trendshare.twitter = jQuery(this).siblings("h4").text()+' '+jQuery(this).siblings("p").text();
						trendshare.url = finder.getConfig().sharing.site.url+'/'+thistrend;
						trendshare.icon = jQuery(this).attr("pinicon");
					try{
						sharePinterest(null, trendshare.twitter, trendshare.icon, trendshare.url,  "width=700, height=500", true);
					}catch(e){
						console.log('did not share', e);
					}
					finder.skava.handleTracking(finder.getCurrentPage(), finder.getConfig().clicktracking['pinterest']);
				}
			}
		});


		jQuery('[role="skavaInteropShareTwitter"]').live({
			click: function(event) {
				event.preventDefault();
				if(jQuery(this).attr("config")=="currentPage"){
					try{
						shareTwitterV2(null, finder.getConfig().sharing.site.twitter, finder.getConfig().sharing.site.twitter, finder.getConfig().sharing.site.icon, finder.getConfig().sharing.site.url);
					}catch(e){
						console.log('did not share', e);
						console.log(finder.getConfig().sharing.site)
					}
					finder.skava.handleTracking(finder.getCurrentPage(), finder.getConfig().clicktracking['twitter']);
				}else if(jQuery(this).attr("config")=="trend"){
					var thistrend = jQuery(this).attr("trend");
					var trendshare = {};
					trendshare.facebook = {};
						trendshare.facebook.title = finder.getConfig().pageData[thistrend].share.title;
						trendshare.facebook.description = finder.getConfig().pageData[thistrend].share.desc;
						trendshare.twitter = finder.getConfig().pageData[thistrend].share.title+' '+finder.getConfig().pageData[thistrend].share.desc;
						trendshare.url = finder.getConfig().sharing.site.url+'/'+thistrend;
						trendshare.icon = finder.getConfig().pageData[thistrend].share.icon;
					try{
						shareTwitterV2(null, trendshare.twitter, trendshare.twitter, trendshare.icon, trendshare.url);
					}catch(e){
						console.log('did not share', e);
					}
					finder.skava.handleTracking(finder.getCurrentPage(), finder.getConfig().clicktracking['twitter']);
				}else if(jQuery(this).attr("config")=="accessories"){
					var thistrend = jQuery(this).attr("trend");
					var trendshare = {};
					trendshare.facebook = {};
						trendshare.facebook.title = finder.getConfig().pageData.accessories.share[thistrend].title;
						trendshare.facebook.description = finder.getConfig().pageData.accessories.share[thistrend].desc;
						trendshare.twitter = finder.getConfig().pageData.accessories.share[thistrend].title+' '+finder.getConfig().pageData.accessories.share[thistrend].desc;
						trendshare.url = finder.getConfig().sharing.site.url+'/'+thistrend;
						trendshare.icon = assetsDirectory+'images/pinicons/'+thistrend+'.jpg';
					try{
						shareTwitterV2(null, trendshare.twitter, trendshare.twitter, trendshare.icon, trendshare.url);
					}catch(e){
						console.log('did not share', e);
					}
					finder.skava.handleTracking(finder.getCurrentPage(), finder.getConfig().clicktracking['twitter']);
				}
			}
		});


		jQuery('[role="skavaInteropShareFacebook"]').live({
			click: function(event) {
				event.preventDefault();
				if(jQuery(this).attr("config")=="currentPage"){
					try{
						shareFb(null, finder.getConfig().sharing.site.facebook.title, finder.getConfig().sharing.site.facebook.description, finder.getConfig().sharing.site.icon, finder.getConfig().sharing.site.url, true, true);
					}catch(e){
						console.log('did not share', e);
						console.log(finder.getConfig().sharing.site)
					}
					finder.skava.handleTracking(finder.getCurrentPage(), finder.getConfig().clicktracking['facebook']);
				}else if (jQuery(this).attr("config")=="trend"){
						var thistrend = jQuery(this).attr("trend");
						var trendshare = {};
						trendshare.facebook = {};
							trendshare.facebook.title = finder.getConfig().pageData[thistrend].share.title;
							trendshare.facebook.description = finder.getConfig().pageData[thistrend].share.desc;
							trendshare.twitter = finder.getConfig().pageData[thistrend].share.title+' '+finder.getConfig().pageData[thistrend].share.desc;
							trendshare.url = finder.getConfig().sharing.site.url+'/'+thistrend;
							trendshare.icon = finder.getConfig().pageData[thistrend].share.icon;
						try{
							shareFb(null, trendshare.facebook.title, trendshare.facebook.description, trendshare.icon, trendshare.url, true, true);
						}catch(e){
							console.log('did not share', e);
						}
					finder.skava.handleTracking(finder.getCurrentPage(), finder.getConfig().clicktracking['facebook']);
				}else if (jQuery(this).attr("config")=="accessories"){
					var thistrend = jQuery(this).attr("trend");
					var trendshare = {};
					trendshare.facebook = {};
						trendshare.facebook.title = finder.getConfig().pageData.accessories.share[thistrend].title;
						trendshare.facebook.description = finder.getConfig().pageData.accessories.share[thistrend].desc;
						trendshare.twitter = finder.getConfig().pageData.accessories.share[thistrend].title+' '+finder.getConfig().pageData.accessories.share[thistrend].desc;
						trendshare.url = finder.getConfig().sharing.site.url+'/'+thistrend;
						trendshare.icon = assetsDirectory+'images/pinicons/'+thistrend+'.jpg';
					try{
						shareFb(null, trendshare.facebook.title, trendshare.facebook.description, trendshare.icon, trendshare.url, true, true);
					}catch(e){
						console.log('did not share', e);
					}
					finder.skava.handleTracking(finder.getCurrentPage(), finder.getConfig().clicktracking['facebook']);
				}
			}
		});

		jQuery('[role="skavaInteropComment"]').live({
			click: function(event) {
				event.preventDefault();
				self.comment({});
			}
		});

		jQuery('[role="skavaInteropQuickView"]').live({
			click: function(event) {
				event.preventDefault();
				self.quickView({
					productId: jQuery(this).attr("productId")
				});

			}
		});

		jQuery('[role="skavaInteropPageTracking"]').live({
			click: function(event) {
				var tracking = jQuery(this).attr("tracking");
				tracking = tracking.split(",");
				var obj = {
					pageid: tracking[0],
					catid: tracking[1]
				}

				self.handleTracking(finder.getCurrentPage(), obj);
			}
		})

		jQuery('[role="skavaInteropVote"]').live({
			click: function(event) {
				event.preventDefault();
				event.stopPropagation();
				console.log('finder.votedOnProducts', finder.votedOnProducts)
				var item = jQuery(this).parents("[entryId]");
				if( $.inArray(parseInt(item.attr('entryId')), finder.votedOnProducts ) == -1 ){
					if (item.hasClass("voted") || finder.skava.beenVotedOn(item.attr("entryId")))
						return;
					else
						item.addClass("voted");
						var params = {
							entryId: item.attr("entryId"),
							onSuccess: function(retval1, retval2, code, message){
								console.log("voting success", retval1, retval2, code, message)
								var newMessage;
								var numVotes = 1 * retval1;
								if (numVotes == 1) {
									newMessage = "1 LOVES THIS";
								} else {
									newMessage = numVotes + " LOVE THIS";
								}
								try {
									var db = finder.getCurrentPage().productPool.poolWorker.db({entryid: 1 * item.attr("entryId")});
									console.log("vote update", db, retval1, item.attr("entryId"));
									db.update({
										'votes': 1 * retval1,
										'voteCount': 1 * retval1
									});
									console.log("vote updated", db, retval1,  1 * item.attr("entryId"));
								} catch(e) {
									console.log("Couldn't update vote count in DB");
								}
								jQuery(".voteCount", item).html(newMessage);
								item.addClass("voted");
								finder.getCurrentPage().parentDiv.trigger({type: "skavaVote", votes: numVotes, entryId: item.attr("entryId"), productId: item.attr("productId")});
							},
							onCancel: function(){
							},
							onFailure: function(){
							}
						}
						self.vote(params);
				}else{
					console.log('Already voted on this.')
				}
			}
		})
    },

	beenVotedOn: function(entryId) {
		return jQuery.inArray(entryId, this.votedItems) > -1;
	},
		/*
		jQuery('[role="skavaInteropVote"]').live({
			click: function(event) {
				event.preventDefault();
				event.stopPropagation();
				var item = jQuery(this).parents(".productListing");

				if (item.hasClass("voted"))
					return;
				else
					item.addClass("voted");

                var params = {

                    entryId: item.attr("entryId"),
                    onSuccess: function(retval1, retval2, code, message){
                        console.log("voting success", retval1, retval2, code, message)

						var newMessage;

						var numVotes = 1 * retval1;

						if (numVotes == 1) {
							newMessage = "1 LOVES THIS &middot;";
						} else {
							newMessage = numVotes + " LOVE THIS &middot;";
						}

						finder.skava.votedItems.push(item.attr("productId"));

						try {
							var db = finder.getCurrentPage().productPool.poolWorker.db;
							console.log("vote update", db, retval1, item.attr("entryId"));
							db.update({
								'votes': 1 * retval1,
								'voteCount': 1 * retval1
							}, {
								'entryid': 1 * item.attr("entryId")
								});
							console.log("vote updated", db, retval1,  1 * item.attr("entryId"));
						} catch(e) {
							console.log("Couldn't update vote count in DB");
						}

						jQuery(".voteCount", item).html(newMessage);
						item.addClass("voted");

                    },
                    onCancel: function(){
                    },
					onFailure: function(){
                    }

                }

				self.vote(params);

			}
		})


    },
		*/

	beenVotedOn: function(productId) {
		return jQuery.inArray(productId, this.votedItems) > -1;
	},

	initializeWidgets: function(container) {

		var self = this;
		jQuery('[role="skavaInteropLike"]', container).each(function() {
			self.showFBLikeFrame( {
				containerId: jQuery(this).attr("id"),
				url: finder.getConfig().webRoot + jQuery(this).attr("url")
			});
		});

		jQuery('[role="skavaInteropWallWidget"]', container).each(function() {

			self.showFBWallWidget( {
				containerId: jQuery(this).attr("id"),
				url: jQuery(this).attr("url")
			});
		});

		jQuery('[role="skavaInteropWallFeed"]', container).each(function() {
			showWallFeed('wallfeed', 0, 0, 0, 0, 10, jQuery(this)[0])
		});

		jQuery('[role="skavaInteropFBTopRatedHorizontal"]', container).each(function() {
			try {
				showFbTopList(jQuery(this).attr("id"));
			} catch(e) {

			}
		});

		jQuery('[role="skavaInteropFBTopRatedVertical"]', container).each(function() {
			try {
				showFbTopList(jQuery(this).attr("id"), true);
			} catch(e) {

			}
		});
	},

	handleTracking: function(page, vars) {

		try {
			(function() {

				var pageid = vars.pageid;
				var catid = vars.catid;

				 if (finder.isTablet()) {
					pageid = vars.pageid.replace("ca-so", "ca-so-ipad")
					catid = vars.catid.replace("ca-so", "ca-so-ipad")
				}
				/**/

				console.warn("Tracking: ", pageid, catid);
				registerPageViewEx(pageid, catid);

			})();
		} catch(e) {
			console.log(e.message);
		}

	},

	handleTrackingElement: function(page, vars) {

		try {
			(function() {
				console.warn("Element Tracking: ", vars.elementid);
				registerPageViewEx(vars.pageid, vars.catid);

			})();
		} catch(e) {
			console.log(e.message);
		}

	},


    share: function(params){

        var defaultParams = {
            mailerIds: {
                staging: 123,
                production: 123
            },
            url: "http://www.macys.com",
            icon: "http://www.macys.com/logo.jpg",
            facebook: {
                title: "This is the facebook Title",
                description: "This is the facebook description"
            },
            twitter: "this is the tweet",
			position: finder.getConfig().sharing.popupPosition
        };

        jQuery.extend(true, defaultParams, params);

        console.log(defaultParams);
        var mailerId = defaultParams.mailerIds.staging;
        if (isProduction)
            mailerId = defaultParams.mailerIds.production;

        try {
            showSharePopup(null, defaultParams.facebook.title, defaultParams.facebook.description, defaultParams.icon, defaultParams.url, mailerId, null, null, 180, null, defaultParams.twitter, defaultParams.position)
			jQuery("#finderContainer").trigger("popupsOpened");
        }
        catch (e) {
            console.log("Site share not available", defaultParams);

        }

		try {
			if(defaultParams.hasOwnProperty("tracking")){
				this.handleTracking(finder.getCurrentPage(),defaultParams.tracking);
			}
		} catch(err) {
		}

		jQuery("#finderContainer").trigger("popupsOpened");


    },

    comment: function(params){

        var defaultParams = {
            num: 5,
			commentId: 0
        }

        jQuery.extend(true, defaultParams, params);

        try {
            //showFBComment(true, defaultParams.num, finder.getConfig().comment.position[0], finder.getConfig().comment.position[1])
			fgs.showFBCommentFrameEx('fbcomments', 0, defaultParams.num, finder.getConfig().comment.position[0], finder.getConfig().comment.position[1], 800, null, 800);
			jQuery("#finderContainer").trigger("popupsOpened");
        }
        catch (e) {
            console.log("Couldn't show the comment box", e);
        }

		jQuery("#finderContainer").trigger("popupsOpened");

    },

    quickView: function(params){

        var defaultParams = {
            productId: ""
        }

        jQuery.extend(true, defaultParams, params);

		console.log("quickview called", defaultParams);

        showAddToBag(null, 6, null, 0, defaultParams.productId, finder.getConfig().quickView.bgColor, finder.getConfig().quickView.catId, false, finder.getConfig().quickView.position, null, null, null);

		    finder.scrollPage('top');

		jQuery("#finderContainer").trigger("popupsOpened");
    },

    showFBLikeFrame: function(params){

        var defaultParams = {
            containerId: "",
            url: "http://www.macys.com"
        }

        jQuery.extend(true, defaultParams, params);

        try {
            fgs.showFBLikeFrame("blankFrmeId", false, defaultParams.url, 0, 0, "top", "left", null, defaultParams.containerId, {
                position: "relative"
            });
        }
        catch (e) {
            console.log("Could not show FB Like Frame", e);
        }
    },

    showFBWallWidget: function(params){

        var defaultParams = {
            containerId: "",
            url: "http://www.macys.com"
        }

        jQuery.extend(true, defaultParams, params);

        try {
        	console.log(defaultParams.url);
        	fgs.showFBLikeBox("blankFrmeId", false, defaultParams.url, 255, 566, 255, 566, true, true, false, 7, 11, 'left', 'top', 400, defaultParams.containerId)

            /*fgs.showFBLikeFrame("blankFrmeId", true, defaultParams.url, 0, 0, "top", "left", null, defaultParams.containerId, {
                position: "relative"
            });
            */
        }
        catch (e) {
            console.log("Could not show FB Like Frame", e);
        }
    },

    //fgs.showFBLikeBox(idFrame, useXFBMLLike, urlToLike, lbcWidth, lbcHeight, lbWidth, lbHeight, show_faces, stream, header, xoffset, yoffset, xanchor, yanchor, zPos, containerEl)

	closePopups: function() {
		try {
			closePopup();
			jQuery("#finderContainer").trigger("popupsClosed");
		} catch (e) {
			console.log("Could not call closePopup");
		}
	},

	vote: function(params) {

		var defaultParams = {

			entryId: "",
			onSuccess: function(retval1, retval2, code, message) {console.warn("callback not specified from voting")},
			onCancel: function() {}

		}

		jQuery.extend(true, defaultParams, params);

		var voteCallback = function(respcode, respmsg, opcode, retval1, retval2) {
			console.log("in callback", respcode, respmsg, opcode, retval1, retval2);
			if (respmsg == "Success") {
				defaultParams.onSuccess(retval1, retval2, respcode, respmsg);
			} else {
				defaultParams.onFailure(respcode, respmsg, opcode);
			}
		}

		var swfVoteFor =
		{
		    onOpCancelled: defaultParams.onCancel,
		    onOpCompleted: voteCallback,
		    PercentLoaded : function() {return 100;}
		};

		try {
			//voteForExWithFacebook(swfVoteFor, defaultParams.entryId, "Macy's");
			voteForEx(swfVoteFor, defaultParams.entryId);
		} catch(e) {
			console.log("Couldn't call the voting function", e, defaultParams, swfVoteFor);
		}

		try {
			if(finder.getConfig().hasOwnProperty("vote") && finder.getConfig().vote.hasOwnProperty("tracking")){
				this.handleTracking(finder.getCurrentPage(),finder.getConfig().vote.tracking);
			}
		} catch(e) {
		}

		finder.votedOnProducts.push(parseInt(defaultParams.entryId));
		console.log('Updated: Voted on Items', finder.votedOnProducts);
		$.cookie('VOTED_ON_ITEMS_RTW', escape( finder.votedOnProducts.join(',') ) );

	}

});



var SkavaInteropInternationalPricing = Class.extend({



	init: function() {

		var self = this;
		this.isInternational = false;

		var obj = {
			onInitializeInternational: function(available, response) {
				console.log("international pricing is available", available);
				if (available) {
					self.isInternational = true;
				} else {
					self.isInternational = false;
				}
			},
			onUpdateInternational: function(response) {
				console.log(response, "response from international");

				for (i in response.internationaldetail) {
					var item = jQuery(".productListing[productId='" + i + "']");
					if (response.internationaldetail[i].shippingavailability == "N") {
						jQuery(".price1", item).html("Not available for shipping");
						jQuery(".price2", item).html("");
						jQuery(".price3", item).html("");
					}
					else {
						jQuery(".price1", item).html(response.internationaldetail[i].pfeed_price1);
						jQuery(".price2", item).html(response.internationaldetail[i].pfeed_price2);
						jQuery(".price3", item).html(response.internationaldetail[i].pfeed_price3);
					}
				}

			}
		}


        setTimeout(function(){
            try {
                initializeInternational(obj);
            }
            catch (e) {
                console.log("Could not initialize the international pricing...", e);
            }
        }, 2000);



		jQuery("#finderContainer").bind("poolPageChanged", function() {

			// don't process this if we are not international...
			if (!self.isInternational) {
				return;
			}

			var productIds = [];

			jQuery(".productListing[productId]:visible").each(function() {
				productIds.push(jQuery(this).attr("productId"));
			});

			if (productIds.length == 0)
				return;

			try {
				getInternationalDetails(productIds.join(","));
			} catch (e) {
				console.log("Couldn't get international procing details", e);
			}

		});



	}
});


var SkavaInteropWishList = Class.extend({

	init: function() {},

	initialize: function(callback) {

		var self = this;

		self.items = [];

		var myCallback;
		if (!callback)
			myCallback = function(name, num, items, fbImage) {}
		else
			myCallback = callback;

		var callbackObj = {
			onOpCompleted: function(code, msg, opcode, retval1, retval2) {},
			onUpdateWishList: function(name, num, items, fbImage) {

				console.log("in wishlist callback", name, num, items, fbImage);
				self.items = items;
				self.name = name;
				self.fbImage = fbImage;

				jQuery("[role='skavaInteropWishListCount']").html(num);

				self.checkProducts();

				myCallback(name, num, items, fbImage);
			}
		}

		jQuery("#finderContainer").bind('poolLoaded', function() {
			self.checkProducts();
		});

		try {
			(function() { initializeWishList(callbackObj, 211, 200, null, true); })();
		} catch (e) {
			console.log("Wish list - initialization error", e);
		}
		console.log("Wish list initialized");

		// attach event handlers...

		jQuery('[role="skavaInteropWishListSignIn"]').click(function(event) {
			console.log("in login");
			self.showLogin();

			event.preventDefault();
			event.stopPropagation();
		});

		jQuery('[role="skavaInteropWishListSignOut"]').live ("click", function(event) {
			console.log("in logout");
			self.doLogout();

			event.preventDefault();
			event.stopPropagation();
		});

		jQuery('[role="skavaInteropWishListLauncher"]').live("click", function(event) {
			console.log("in open wishlist");
			self.show();

			event.preventDefault();
			event.stopPropagation();
		});

		jQuery('[role="skavaInteropWishListAdder"]').live("click", function(event) {

			console.log("in add to wishlist");

			var product = jQuery(this).parents(".productListing");
			self.add(product.attr("productId"));

			event.preventDefault();
			event.stopPropagation();
		});


	},

	checkProducts: function() {
		jQuery(".productListing").removeClass("inWishlist");
		for (i = 0; i < this.items.length; i++)
		{
			jQuery(".productListing[productId='" + this.items[i] + "']").addClass("inWishlist");
		}
	},

	add: function(productId) {
		try {
			addToWishList(productId);
		} catch (e) {
			console.log("Wish List - Could not add to wish list", productId, e);
		}
	},

	inWishlist: function(productId) {
		return jQuery.inArray(productId, this.items) > -1;
	},

	show: function() {
		try {
			showWishList(49, 27);
		} catch (e) {
			console.log("Wish List - Could not show wish list", e);
		}
	},

	getCount: function() {
		try {
			getWishListCount();
		} catch (e) {
			console.log("Wish List - Could not get wish list count", e);
		}
	},

	showLogin: function() {
		try {
			showLogin();
		} catch (e) {
			console.log("Wish List - Could not show login", e);
		}
	},

	doLogout: function() {
		try {
			doLogout();
		} catch (e) {
			console.log("Wish List - Could not show logout", e);
		}
	},

	showInfo: function() {
		try {
			showWishlistInfoOverlay(1);
		} catch(e) {
			console.log("Tried to call the wishlist info overlay");
		}
	}



});




/* ../projects/rtw_plus//randomDirectory/ipad/js/base/SkavaInteropBridal.js */

var SkavaInteropBridal = Class.extend({

	init: function() {

		this.products = false;
		this.user = false;

		var self = this;

		jQuery('[role="skavaInteropBridalSignIn"]').click(function(event) {
			console.log("in login");
			self.showLogin();

			event.preventDefault();
			event.stopPropagation();
		});

		jQuery('[role="skavaInteropBridalSignOut"]').live ("click", function(event) {
			console.log("in logout");
			self.doLogout();

			event.preventDefault();
			event.stopPropagation();
		});

		jQuery('[role="skavaInteropBridalLauncher"]').live("click", function(event) {
			console.log("in open bridal");
			self.show();

			event.preventDefault();
			event.stopPropagation();
		});

		jQuery('[role="skavaInteropBridalAdder"]').live("click", function(event) {

			console.log("in add to wishlist");

			var product = jQuery(this).parents(".productListing");
			self.add(product.attr("productId"));

			event.preventDefault();
			event.stopPropagation();
		});


		this.callbacks = {

			onOpCompleted: function(code, msg, opcode, retval1, retval2) {},
			afterProcess: function(actionName, response) {

				console.log("in brial response", actionName, response);
				finder.skava.bridal.lastResponse = response;
				response = JSON.parse(response);
				if (actionName == "signin" || actionName == "getsignedinuser") {
					finder.skava.bridal.user = response.user;
					jQuery("#finderContainer").trigger("bridalSignInStateChanged");
				}

				if (actionName == "addtomylist") {
					finder.skava.bridal.products = [];
					finder.skava.bridal.user.numitems = response.entries.size;
					jQuery("#finderContainer").trigger("bridalProductsUpdated");
				}


			}
		}

		this.isSignedIn();

	},

	isSignedIn: function() {

		try {
			WEDDINGSHOP.isSignedIn(this.callbacks)
		} catch(e) {
			console.log("Couldn't check signin");
		}

	},

	checkProducts: function() {
		jQuery(".productListing").removeClass("inWishlist");
		for (i = 0; i < this.items.length; i++)
		{
			jQuery(".productListing[productId='" + this.items[i] + "']").addClass("inWishlist");
		}
	},

	add: function(productId) {
		try {
			WEDDINGSHOP.addItemsToList(this.callbacks, productId)
		} catch (e) {
			console.log("bridal - Could not add to bridal", productId, e);
		}
	},

	inWishlist: function(productId) {
		return jQuery.inArray(productId, this.items) > -1;
	},

	show: function() {
		try {

			var obj = {
				onOpCompleted: function() {},
				onOpCanceled: function() {}
			}

			wedshopShowBridalPartyOverlay(obj, 0, 0)
		} catch (e) {
			console.log("Bridal Party - Could not show Bridal Party", e);
		}
	},

	getCount: function() {

		if (this.user) {
			return this.user.numitems;
		}

		return 0;
	},

	showLogin: function() {
		try {
			WEDDINGSHOP.showSignIn(null, null, null, this.callbacks)
		} catch (e) {
			console.log("Bridal - Could not show login", e);
		}
	},

	doLogout: function() {
		try {
			wedshopSignout();
			this.user = false;
			jQuery("#finderContainer").trigger("bridalSignInStateChanged");
		} catch (e) {
			console.log("Bridal - Could not show logout", e);
		}
	}





});


/* ../projects/rtw_plus//randomDirectory/ipad/js/base/TrendBrowser.js */

var TrendBrowser = Class.extend({



    init: function(container, config){

		this.container = container;
		this.config = config.config;
		this.videoUrl = config.videoUrl;

		this.container.addClass("TrendBrowser");

		var self = this;

		// create elements...
		this.bigImageContainer = jQuery("<div class='trendImageContainer'></div>").appendTo(this.container);
		this.thumbContainer = jQuery("<div class='trendThumbContainer'></div>").appendTo(this.container);
		this.copyContainer = jQuery("<div class='trendCopyContainer'></div>").attr("role", "skavaInteropQuickView").appendTo(this.container);

		this.videoContainer = jQuery("<div class='trendVideoContainer'></div>").appendTo(this.container);

		jQuery("<img src='" + config.videoImage + "' border='0'>").appendTo(this.videoContainer);
		jQuery("<img src='" + finder.getConfig().assetsDirectory + "images/playvideo.png' class='playVideoButton' border='0'>").appendTo(this.videoContainer);

		this.videoContainer.hover (function() {
			jQuery(this).addClass('hover');
		}, function() {
			jQuery(this).removeClass('hover');
		}).click(function() {
			finder.getCurrentPage().showVideo(self.videoUrl);
		})

		this.copyContainer.hover(function() {
			jQuery(this).addClass("hover");
		}, function() {
			jQuery(this).removeClass("hover");
		}).click(function() {
			// do tracking..
			finder.getCurrentPage().trackBuyNow();
		})


		// do the image preloading...
		// preload all the thumbs... and the first look image...
		var images = [];
		for (i in this.config)
		{
			images.push(this.config[i].thumbUrl);
		}
		for (i in this.config)
		{
			images.push(this.config[i].imageUrl);
			break;
		}

		this.preloader = new PreloadHandler(function() {
			self.fillThumbs();
		}, images);
		this.preloader.start();

    },

	fillThumbs: function() {

		for (i in this.config) {
			var look = this.config[i];
			var img = new Image();
			jQuery(img).attr("look_id", i).css("opacity", "0").appendTo(this.thumbContainer);
			img.src = look.thumbUrl;
		}

		var pageBuild = new AnimationEngine();

		var before = {
			opacity: 0,
			x: 50
		}

		var after = {
			opacity: 1,
			x: 00
		}

		pageBuild.animate(jQuery("IMG", this.thumbContainer), before, after, {easing: 'easeOutQuint', duration: 1000});

		var self = this;
		jQuery("IMG", this.thumbContainer).click(function() {
			if (jQuery(this).hasClass("selected"))
				return;
			self.showLook(jQuery(this).attr("look_id"));
		})

		setTimeout(function() {
		jQuery(jQuery("IMG", self.thumbContainer)[0]).trigger("click");
		}, 2000);

	},

	showLook: function(look) {
		jQuery("IMG", this.thumbContainer).removeClass("selected");
		jQuery("IMG[look_id='" + look + "']", this.thumbContainer).addClass("selected");

		var thisLook = look;
		var self = this;

		// start preloading the image...
		var img = new Image();
		img.onload = function() {
			self.lookImageLoaded(look, this);
		}
		img.src = this.config[look].imageUrl;
	},

	lookImageLoaded: function (look_id, img) {

		this.manageImage(look_id, img);
		this.manageCopy(look_id);

	},

	manageCopy: function(look_id) {

		var config = this.config[look_id];

		var products = []
		var productIds = [];
		for (i in config.products) {

			productIds.push(config.products[i].productId);

			if (!config.products[i].display)
				continue;

			if (!config.products[i].description)
				config.products[i].description = [];

			config.products[i].formattedPrice = "$" + config.products[i].price.toFixed(2);
			config.products[i].formattedDescription = config.products[i].description.join("<BR>");

			products.push(config.products[i]);
		}

		console.log(products, config);

		var productsHtml = jQuery("#trendBrowserTemplate").tmpl(products);

		var styleAlert = jQuery("<div class='product styleAlert'></div>");
		jQuery("<div class='alertTitle'>Style Alert:</div>").appendTo(styleAlert);
		jQuery("<div class='alert'>" + config.styleAlert + "</div>").appendTo(styleAlert);

		var button = jQuery("<div class='product buyButton'><img src='" + finder.getConfig().assetsDirectory + "images/trends/buyNowYellow.png'></div>");

		jQuery("DIV.product", productsHtml).css("opacity", "0");



		// get the existing items in this container..
		var existingHtml = jQuery("DIV.product", this.copyContainer);


		var pageBuild = new AnimationEngine();

		var scrollOutBefore = {
			opacity: 1,
			y: 0
		}

		var scrollOutAfter = {
			opacity: 0,
			y: -100
		}

		var scrollInBefore = {
			opacity: 0,
			y: 100
		}

		var scrollInAfter = {
			opacity: 1,
			y: 0
		}

		pageBuild.animate(existingHtml, scrollOutBefore, scrollOutAfter, {easing: "easeOutQuint", duration: 750});

		var self = this;
		setTimeout(function() {
			self.copyContainer.attr("productId", productIds.join(","));
			jQuery("DIV.product", self.copyContainer).remove();
			productsHtml.appendTo(self.copyContainer);

			styleAlert.appendTo(self.copyContainer);
			button.appendTo(self.copyContainer);
			pageBuild.animate(jQuery("DIV.product", self.copyContainer), scrollInBefore, scrollInAfter, {easing: "easeOutQuint", duration: 1500});
		}, 750);


	},

	manageImage: function(look_id, img) {
		var image = jQuery(img);
		image.attr("look_id", look_id);
		image.css ( {
			"-webkit-transform-origin": "0% 0%",
			"-webkit-transform": "rotate3d(0,1,0, 90deg)"
		})

		// get any existing images in this container..
		var existingImages = jQuery("IMG", this.bigImageContainer);

		this.bigImageContainer.append(image);

		var pageBuild = new AnimationEngine();

		// rotate the existing ones out...
		// and the new on in...

		var rotateOutBefore = {
			rotateY: 00
		}

		var rotateOutAfter = {
			rotateY: -90
		}

		var rotateInBefore = {
			rotateY: 90,
			opacity: 0
		}

		var rotateInAfter = {
			rotateY: 0,
			opacity: 1
		}

		existingImages.css("z-index", 100);
		image.css("z-index", 190);

		pageBuild.animate(existingImages, rotateOutBefore, rotateOutAfter, {easing: "easeOutQuint", duration: 2000});
		pageBuild.animate(image, rotateInBefore, rotateInAfter, {easing: "easeOutQuint", duration: 2000});

		var self = this;

		setTimeout(function() {
			// remove all images that are not the currently selected ones...
			// get selected image..
			var look_id = jQuery("IMG.selected", self.thumbContainer).attr("look_id");
			jQuery("IMG[look_id!='" + look_id + "']", self.bigImageContainer).remove();
		}, 2000);


	}




});


/* ../projects/rtw_plus//randomDirectory/ipad/js/base/animation.js */
var cssTimingFunctions = {

	easeInQuad: "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
	easeOutQuad: "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
	easeInOutQuad: "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
	easeInCubic: "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
	easeOutCubic: "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
	easeInOutCubic: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
	easeInQuart: "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
	easeOutQuart: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
	easeInOutQuart: "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
	easeInQuint: "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
	easeOutQuint: "cubic-bezier(0.230, 1.000, 0.320, 1.000)",
	easeInOutQuint: "cubic-bezier(0.860, 0.000, 0.070, 1.000)",
	easeInSine: "cubic-bezier(0.470, 0.000, 0.745, 0.715)",
	easeOutSine: "cubic-bezier(0.390, 0.575, 0.565, 1.000)",
	easeInOutSine: "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
	easeInExpo: "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
	easeOutExpo: "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
	easeInOutExpo: "cubic-bezier(1.000, 0.000, 0.000, 1.000)",
	easeInCirc: "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
	easeOutCirc: "cubic-bezier(0.075, 0.820, 0.165, 1.000)",
	easeInOutCirc: "cubic-bezier(0.785, 0.135, 0.150, 0.860)"

}


var AnimationEngine = Class.extend ( {


	init: function() {

	},

	removeAnimations: function(elem) {
		elem.css({
			"-webkit-transition": "none",
			"-moz-transition": "none",
			"-o-transition": "none",
			"-ms-transition": "none"
		});

		elem.css({
			"-webkit-transition-duration": "0s",
			"-webkit-transition-delay": "0s",
			"-moz-transition-duration": "0s",
			"-moz-transition-delay": "0s",
			"-o-transition-duration": "0s",
			"-o-transition-delay": "0s",
			"-ms-transition-duration": "0s",
			"-ms-transition-delay": "0s"
		});
	},

	animate: function(item, from, to, params) {

		var self = this;

		item = jQuery(item);

		var defaultParams = {
			easing: "ease-in",
			delay: 0,
			delayEach: 100,
			duration: 500,
			forceJQuery: false
		};

		params = jQuery.extend({}, defaultParams, params);

		var useJQuery = true;
		if (Modernizr.csstransitions && !params.forceJQuery)
		{
			useJQuery = false;
		}

		if (!useJQuery) {
			switch (params.easing) {
				case "ease-in":
				case "easein":
				case "ease-out":
				case "easeout":
				case "linear":
				case "ease-in-out":
				case "easeinout":
					// do nothing..
					break;

				default:
					if (params.easing.indexOf("cubic-bezier") == -1) {
						if (!cssTimingFunctions[params.easing])
							params.forceJQuery = true;
						else
							params.easing = cssTimingFunctions[params.easing];
					}
			}
		}

		// idea behind animations is to clone the object..
		// position it above the original object...
		// hide the original...
		// then animate the clone..
		// after animation.. hide the clone.. and make the orignial visible..
		// this should be the jQuery method.  For CSS transitions...
		// no cloning.. just transform the original..



		var normalizedExpressions = this.prepare(item, from, to, useJQuery);

		if (useJQuery)
		{
			// wrap all elements into a div...
			this.addWrappers(item);
			(function() {
				item.each(function(i) {
					console.log("jQuery");
					jQuery(this).stop()
								.css(normalizedExpressions.from)
								.delay(params.delay + (params.delayEach * i))
								.animate(normalizedExpressions.to, params.duration, params.easing);

				});
			})();
		} else {
			(function() {

				item.each(function(i) {
					self.cssTransform(	this,
										normalizedExpressions.from,
										normalizedExpressions.to,
										params.duration,
										params.delay + (params.delayEach * i),
										params.easing
									);
				});

			})();
		}



	},

	cssTransform: function(elem, before, after, timing, delay, easing) {

		var elem = jQuery(elem);

		if (!easing)
			easing = "ease-in-out";

		if (!timing)
			timing = ".5s"

		if (!delay)
			delay = "0s"

		// reset all animation attributes..
		elem.css({
			"-webkit-transition-duration": "0s",
			"-webkit-transition-delay": "0s",
			"-moz-transition-duration": "0s",
			"-moz-transition-delay": "0s",
			"-o-transition-duration": "0s",
			"-o-transition-delay": "0s",
			"-ms-transition-duration": "0s",
			"-ms-transition-delay": "0s"
		});

		// apply before items...
		elem.css(before);

		setTimeout(function() {
			elem.css({
				"-webkit-transition-duration": timing+"ms",
				"-webkit-transition-delay": delay+"ms",
				"-webkit-transition-timing-function": easing,


				"-moz-transition-duration": timing+"ms",
				"-moz-transition-delay": delay+"ms",
				"-moz-transition-timing-function": easing,
				"-moz-transform-style": "preserve-3d",

				"-o-transition-duration": timing+"ms",
				"-o-transition-delay": delay+"ms",
				"-o-transition-timing-function": easing,
				"-o-transform-style": "preserve-3d",

				"-ms-transition-duration": timing+"ms",
				"-ms-transition-delay": delay+"ms",
				"-ms-transition-timing-function": easing,
				"-ms-transform-style": "preserve-3d"
			});
			elem.css(after);
		}, 10);

	},

	prepareItems: function(items) {
		this.addWrappers(items)
	},

	addWrappers: function(item) {

		var data = [];

		item.each(function() {
				var thisItem = jQuery(this);

				if (thisItem.hasClass("hasWrapper"))
					return;

				var size = thisItem.size();
				var position = thisItem.position();

				data.push({'size': size, 'position': position});
			});

		item.each(function() {
			var thisItem = jQuery(this);
			if (thisItem.hasClass("hasWrapper"))
				return;

			var dataPiece = data.shift();


			thisItem.css({
				position: 'relative',
				top: '0px',
				left: '0px',
				bottom: '0px',
				right: '0px'
			})
			.wrap("<div class='animationWrapper' style='position: absolute; top:" + dataPiece.position.top + "px; left: " + dataPiece.position.left + "px;'>")
			.addClass("hasWrapper");
		})
	},

	prepare: function (item, from, to, useJQuery) {

		var defaultFrom = {
			x: 0,
			y: 0,
			z: 0,
			rotateX: 0,
			rotateY: 0,
			rotateZ: 0,
			scale: 1
		}

		from = jQuery.extend({}, defaultFrom, from);
		to = jQuery.extend({}, from, to);

		// what type of animation are we going to do...
		if (!useJQuery)
		{
			// this will be a css transition..
			var fromTranslate = "";
			var toTranslate = "";
			var fromRotate = "";
			var toRotate = "";


			// do we have 3d transforms?
			if (Modernizr.csstransforms3d)
			{
				// translates
				fromTranslate += "translate3d(" + from.x + "px, " + from.y + "px, " + from.z + "px)";
				toTranslate += "translate3d(" + to.x + "px, " + to.y + "px, " + to.z + "px)";
				fromTranslate += " rotateX(" + from.rotateX + "deg) rotateY(" + from.rotateY + "deg) rotate(" + from.rotateZ + "deg)";
				toTranslate += " rotateX(" + to.rotateX + "deg) rotateY(" + to.rotateY + "deg) rotate(" + to.rotateZ + "deg)";

			} else {
				fromTranslate += "translateX(" + from.x + "px) translateY(" + from.y + "px)";
				toTranslate += "translateX(" + to.x + "px) translateY(" + to.y + "px)";
				fromTranslate += " rotate(" + from.rotateZ + "deg)";
				toTranslate += " rotate(" + to.rotateZ + "deg)";
			}

			// add in scales...
			fromTranslate += " scale(" + from.scale + ")";
			toTranslate += " scale(" + to.scale + ")";


			from['-webkit-transform'] = fromTranslate;
			from['-moz-transform'] = fromTranslate;
			from['-o-transform'] = fromTranslate;
			from['-ms-transform'] = fromTranslate;

			to['-webkit-transform'] = toTranslate;
			to['-moz-transform'] = toTranslate;
			to['-o-transform'] = toTranslate;
			to['-ms-transform'] = toTranslate;

		} else {
			// this will be a jQuery transition...

			from['left'] = from.x + "px";
			from['top'] = from.y + "px";

			to['left'] = to.x + "px";
			to['top'] = to.y + "px";

		}

		from = this.removeUnwantedExpressions(from);
		to = this.removeUnwantedExpressions(to);

		return {"from": from, "to": to};
	},

	removeUnwantedExpressions: function (expression) {
		var returner = {};
		for (i in expression)
		{
			switch (i.toLowerCase())
			{
				case "x":
				case "y":
				case "z":
				case "rotatex":
				case "rotatey":
				case "rotatez":
				case "scale":
					// do nothing..
					break;

				default:
					returner[i] = expression[i];
					break;
			}
		}
		return returner;
	}








});

var Animation = Class.extend({
	init: function() {
		this.queue = "";

		// create a div to hold our clones...
		if (jQuery("#cloneHolder").length == 0) {
			jQuery("<div id='cloneHolder'></div>").css({width:"1px", height: "1px", display: 'none'}).appendTo(document.body);
		}
	},

	getClone: function (elem) {
		var clone = jQuery("#" + elem.attr("id"), "#cloneHolder");
		if (clone.length == 0) {
			clone = elem.clone();
		} else {
			clone.remove();
		}
		return clone;
	},

	animateIn: function (items, initialState, timing, delay, forceJQuery)
	{
		if (!timing)
			timing = 500;

		if (!delay)
			delay = 100;

		if (!forceJQuery)
			forceJQuery = false;

		var self = this;
		jQuery(items).each (function(i) {
			elem = this;
			var elem = jQuery(elem);
			elem.attr("oldVisibility", elem.css("visibility"));
			var position = elem.position();

			// clone the original object... and then hide it..
			var clone = self.getClone(elem);
			elem.css({visibility: "hidden"});
			clone.css({visibility: 'visible'});

			elem.addClass("being_animated");

			// prepare the clone for animation...
			var defaults = {}
			for (var j in initialState)
			{
				switch (j) {
					case "top":
						defaults['top'] = position.top;
						if (!initialState['left'])
							defaults['left'] = position.left;
						break;

					case "left":
						defaults['left'] = position.left;
						if (!initialState['top'])
							defaults['top'] = position.top;
						break;

					default:
						defaults[j] = elem.css(j);
						break;
				}
			}
			defaults.position = "absolute";
			defaults.opacity = elem.css("opacity");

			var callback = function(){
				elem.css({
					visibility: "inherit"
				});
				elem.removeClass("being_animated");
				jQuery(this).remove();
				if (!Modernizr.csstransitions)
					jQuery(this).appendTo("#cloneHolder");
			}

			if (Modernizr.csstransitions && !forceJQuery)
			{
				self.animateWithCss(elem, clone, initialState, defaults, timing * 1.5, (delay * (i + 1)) * 1.5, callback);
				self.addNavBlock((timing * 1.5) + ((delay * (i + 1)) * 1.5));
			} else {
				self.animateWithJQuery(elem, clone, initialState, defaults, 1000, delay, callback);
				self.addNavBlock(1000 + delay);
			}
		});

	},

	addNavBlock: function(delay) {
		finder.addNavBlock(delay)
	},

	animateOut: function(items, finalState, timing, delay, forceJQuery) {
		if (!timing)
			timing = 500;

		if (!delay)
			delay = 100;

		if (!forceJQuery)
			forceJQuery = false;

		var self = this;
		jQuery(items).each (function(i) {

			var elem = jQuery(this);
			var position = elem.position();

			// clone the original object... and then hide it..
			var clone = self.getClone(elem);
			elem.css({visibility: "hidden"});

			elem.addClass("being_animated");

			// prepare the clone for animation...
			var startState = {};
			for (var i in finalState)
			{
				switch (i) {
					case "top":
						startState['top'] = position.top;
						if (!finalState['left'])
							startState['left'] = position.left;
						break;

					case "left":
						startState['left'] = position.left;
						if (!finalState['top'])
							startState['top'] = position.top;
						break;

					default:
						startState[i] = elem.css(i);
						break;
				}
			}
			startState.position = "absolute";
			startState.opacity = elem.css("opacity");

			var callback = function() {
				jQuery(this).remove();
				elem.removeClass("being_animated");
			}

			if (Modernizr.csstransitions && !forceJQuery)
			{
				self.animateWithCss(elem, clone, startState, finalState, timing, delay * (i + 1), callback);
				self.addNavBlock(timing + (delay * (i + 1)));
			} else {
				self.animateWithJQuery(elem, clone, startState, finalState, timing, delay, callback);
				self.addNavBlock(1000 + delay);
			}
		});
	},

	cleanInitialState: function(initialState, elem, pos)
	{
		// check of += and -= type things..
		var initial = jQuery.extend({}, initialState);
		if (initial.top)
			initial.top = this.processIncrementalCssItem(initial.top, pos.top);

		if (initial.left)
			initial.left = this.processIncrementalCssItem(initial.left, pos.left);
		return initial;
	},

	processIncrementalCssItem: function(change, original)
	{
		change = "" + change;
		change.replace("px", "");

		if (change.substring(1,2) == "=")
		{

			var operator = change.substring(0, 1);
			change = change.substring(2);

			switch (operator)
			{
				case "+":
					change = (1 * change) + original;
					break;

				case "-":
					change = original - (1 * change);
					break;
			}
		}

		return change;
	},

	animateWithCss: function(elem, clone, initialState, defaults, timing, delay, callback)
	{
		var self = this;
		var position = jQuery(elem).position();
		defaults = self.cleanInitialState(defaults, elem, position);
		var initials = self.cleanInitialState(initialState, elem, position);
		initialState = jQuery.extend({}, defaults, initials);

		// use translate instead of top and left..
		if (!initialState.top && !initialState.left) {

		}
		else {


			if (isNaN(defaults.top))
				defaults.top = initialState.top;

			if (isNaN(defaults.left))
				defaults.left = initialState.left;


			var topDiff = defaults.top - initialState.top;
			var leftDiff = defaults.left - initialState.left;

			initialState.top += "px";
			initialState.left += "px";

			defaults.top = initialState.top;
			defaults.left = initialState.left;
			defaults["-webkit-transform"] = "translate3d(" + leftDiff + "px, " + topDiff + "px, 0px)";

		}
		clone.css(initialState);
		clone.css ({
			"-webkit-transition": "all " + timing + "ms ease-in-out"
		});

		clone.appendTo(elem.parent());

		clone[0].addEventListener("webkitTransitionEnd", callback, true);

		setTimeout(function() {clone.css(defaults);}, delay);


	},

	animateWithJQuery: function (elem, clone, initialState, defaults, timing, delay, callback)
	{
		var position = jQuery(elem).position();
		var initials = this.cleanInitialState(initialState, elem, position);
		initialState = jQuery.extend({}, defaults, initials);
		initialState.top += "px";
		initialState.left += "px";

		defaults.top += "px";
		defaults.left += "px";


		var uniques = this.parseUniques(initialState, defaults);

		clone.appendTo(elem.parent());
		clone.css(uniques.initialState)



		setTimeout(function(){
			clone.animate(uniques.defaults, timing, "swing", callback);
		}, delay);


	},

	parseUniques: function (initial, def) {
		var i = {};
		var d = {};
		for (j in def)
		{
			try {
				if (initial[j] != def[j] && initial[j] + "px" != def[j] && initial[j] != def[j] + "px")
				{
					i[j] = initial[j];
					d[j] = def[j];
				}
			} catch(e) { }
		}
		return {initialState: i, defaults: d};
	}

});




/* ../projects/rtw_plus//randomDirectory/ipad/js/base/carousel.js */
var Carousel = function(div, itemClass) {

	this.itemClass = "." + itemClass;
	this.content = jQuery(div);
	this.wrapper = jQuery(div.parent());
	this.wrapperWidth = this.wrapper.width();
	this.contentWidth = this.content.width();

	this.contentWrapper = jQuery("<div></div>").css({width: this.contentWidth + "px", height: this.wrapper.height() + "px", position: "absolute", top: "0px", "left": "30px"});

	this.content.css("-webkit-transition",  "all 400ms ease-in");

	this.leftArrow = jQuery("<div class='carouselLeftArrow' style='position: absolute; top: 0px; left: 0px; width: 20px; height: " + this.wrapper.height() + "px'></div>");
	this.rightArrow = jQuery("<div class='carouselRightArrow' style='position: absolute; top: 0px; right: 0px; width: 20px; height: " + this.wrapper.height() + "px'></div>");

	this.contentWrapper.appendTo(this.wrapper);
	this.leftArrow.appendTo(this.wrapper);
	this.rightArrow.appendTo(this.wrapper);

	this.content.remove();
	this.contentWrapper.html(this.content);

	this.content.css({
		position: "absolute",
		top: "0px",
		left: "0px"
	});
	this.wrapper.css({overflow: "hidden"});

	this.currentPanel = 0;
	this.numPanels = jQuery(this.itemClass, this.content).length;

	var self = this;

	this.checkIfMaxPanelReached = function() {
		return self.currentX + self.wrapperWidth - 40 >= this.contentWidth;
	}

	this.leftArrow.click(function() {
		self.currentPanel = Math.max(0, --self.currentPanel);
		self.showPanel(self.currentPanel);
	});

	this.rightArrow.click(function() {
		self.currentPanel = Math.min(self.numPanels - 1, ++self.currentPanel);
		self.showPanel(self.currentPanel);
	});

	this.showPanel = function(panel) {

		var pos = jQuery(this.content.children()[panel]).position();

		if (Modernizr.csstransitions) {
			self.content.css("-webkit-transform", "translate3d(-" + (pos.left + 1) + "px, 0px, 0px)");
		}
		else {
			self.content.animate({
				"left": "-" + (pos.left + 1) + "px"
			});
		}
	}
}


/* ../projects/rtw_plus//randomDirectory/ipad/js/base/facet.js */


var Facet = Class.extend({

	init: function(id, label, filter, display) {
		this.filter = filter;
		this.id=id;
		this.label = label;
		this.display = display;
		this.parent = null;
		this.selected = false;
	},


	getFilter: function() {
		return filter;
	},

	isOn: function() {
		return this.selected;
	},

	setParent: function(parent) {
		this.parent = parent;
	},

	toggle: function() {

		this.selected = !this.selected;

		try {
			this.checkbox[0].checked = this.selected;
		} catch(e) { }

		this.checkbox.removeClass("selected");

		if (this.selected)
			this.checkbox.addClass("selected");

		this.parent.facetChanged();

	},

	setCheckBox: function(check) {
		this.checkbox = check;
		jQuery(check).click(jQuery.proxy(this.toggle, this));
	}

});

var FacetSorter = Class.extend( {
	init: function() {
		this.options = {};
	},

	addOption: function (label, filter) {
		this.options[label] = filter;
	},

	draw: function() {

		var self = this;

		var div = jQuery("<div class='facetSorter'>Sort By </div>");

		var select = "<select name=facterSorter>";
		for(i in this.options) {
			select += "<option value='" + i + "'>" + i + "</option>";
		}
		select += "</select>";

		select = jQuery(select)

		select.change(function() {
			self.changed();
		});

		div.append(select);
		this.select = select;
		return div;
	},

	changed: function() {
		console.log("sorting changed");
		this.parent.sortChanged();
	},

	getSortFilter: function() {
		return this.options[jQuery(this.select).val()];
	},

	setParent: function(parent) {
		this.parent = parent;
	}
})


var FacetCategory = Class.extend( {

	init: function(id, label, display) {
		this.id = id;
		this.label = label;
		this.display = display;
		this.facets = []
	},


	addFacet: function(facet) {

		facet.setParent(this);
		this.facets.push(facet);
	},

	setParent: function(parent) {
		this.parent = parent;
	},

	draw: function() {

		var div = jQuery("<div class='facetContainer'></div>");
		var h2 = jQuery("<h2 class='facetTitle'>" + this.label + "</h2>");
		var ul =  jQuery("<ul class='facetCategory' id='" + this.id + "'></ul>");
		for (i = 0; i < this.facets.length; i++)
		{
			var facet = this.facets[i];
			var li = jQuery("<li class='facet'></li>");
			var input = jQuery("<input type='checkbox' class='facetCheckbox' id='facet_" + facet.id + "'>");
			var label = "<label for='facet_" + facet.id + "'>" + facet.label + "</label>";

			facet.setCheckBox(input);

			li.append(input);
			li.append(label);
			ul.append(li);
		}

		div.append(h2);
		div.append(ul);

		return div;
	},

	facetChanged: function() {
		this.parent.categoryChanged();
	}

});

var FacettedResults = Class.extend ( {
	init: function(db, containers ) {
		this.facetContainer = containers.facetContainer;
		this.resultsContainer = containers.resultsContainer;
		this.paginationContainer = containers.paginationContainer;
		this.sortingContainer = containers.sortingContainer;

		this.db = db;
		this.facetCategories=[];
		this.setupFacets();

		this.setupListeners();
	},

	categoryChanged: function() {
		this.filter();
	},

	sortChanged: function() {
		this.db.sort(this.sorter.getSortFilter());
		this.filter();
	},

	setupListeners: function() {
		self = this
		jQuery(this.paginationContainer + " .pageNumbers A[pageNum]").live("click", function() {
			self.showResultsPage(jQuery(this).attr("pageNum"));
		});
	},

	setupFacets: function() {

	},

	addFacetCategory: function(facetCategory) {
		facetCategory.parent = this;
		this.facetCategories.push(facetCategory);
	},

	mergeFilters: function ()
	{
		var filters = {};
		for (var i = 0; i < this.facetCategories.length; i++)
		{
			for (var j = 0; j < this.facetCategories[i].facets.length; j++)
			{

				if (this.facetCategories[i].facets[j].isOn())
					this.merge(filters, this.facetCategories[i].facets[j].filter);
			}
		}

		return filters;

	},

	merge: function(one, two) {
		for (var i in two)
		{
			if (!one[i])
			{
				one[i] = two[i];
			} else {
				for (var j in two[i])
				{
					if (!one[i][j])
					{
						one[i][j] = two[i][j];
					} else {
						jQuery.merge(one[i][j], two[i][j]);
					}
				}
			}
		}
	},

	filter: function() {
		var filters = this.mergeFilters();

		console.log(filters);

		jQuery(this.resultsContainer).html("");
		this.db.showFilteredResults(this.resultsContainer, "#productListing", filters);

		this.itemsFiltered();
	},

	itemsFiltered: function() {

		// build page numbers...
		// build paginated list...
		var items = jQuery(this.resultsContainer + " .productListing");

		jQuery(this.paginationContainer + " .itemsFound").html(items.length + " items found");

		var numPages = Math.ceil(items.length / this.itemsPerPage);
		jQuery(this.paginationContainer + " .pageNumbers").html("");
		if (numPages > 1) {
			for (i = 0; i < numPages; i++) {
				jQuery(this.paginationContainer + " .pageNumbers").append("<a href='javascript:void(0);' pageNum='" + i + "'>" + (i + 1) + "</a> ");
			}
		}
		this.showResultsPage(0);

	},

	showResultsPage: function(pageNum) {

		jQuery(this.paginationContainer + " .pageNumbers A").removeClass("selected");
		jQuery(this.paginationContainer + " .pageNumbers A[pageNum=" + pageNum+ "]").addClass("selected");

		jQuery(this.resultsContainer + " .productListing:visible").hide();
		jQuery(this.resultsContainer + " .productListing").slice(pageNum * this.itemsPerPage, pageNum * this.itemsPerPage + this.itemsPerPage).fadeIn();

	},

	display: function () {
		jQuery(this.facetContainer).html("");
		for (j = 0; j < this.facetCategories.length; j++)
		{
			var display = this.facetCategories[j].draw();
			jQuery(this.facetContainer).append(display);
		}

		jQuery(this.sortingContainer).html("").append(this.sorter.draw());
	},

	setSorter: function(sorter) {
		sorter.setParent(this);
		this.sorter = sorter;
	}

});

var SofaFacettedResults = FacettedResults.extend({
	setupFacets: function() {

		this._super();

		// setup sorting...
		var sorter = new FacetSorter();
		sorter.addOption("price: low to high", [{pfeed_priceforfilters: 'logicalasc'}]);
		sorter.addOption("price: high to low", [{pfeed_priceforfilters: 'logicaldesc'}]);
		this.setSorter(sorter);


		var materialCat = new FacetCategory("material", "Material", "list");

		materialCat.addFacet(new Facet("material_leather", "Leather", {pfeed_productgroup:{has:['ondemand_leather']}}));
		materialCat.addFacet(new Facet("material_fabric", "Fabric", {pfeed_productgroup:{has:['Fabric']}}));
		materialCat.addFacet(new Facet("material_microfiber", "Microfiber", {pfeed_productgroup:{has:['Microfiber']}}));

		this.addFacetCategory(materialCat);

		var featuresCat = new FacetCategory("features", "Features", "list");

		featuresCat.addFacet(new Facet("features_sleeper", "Sleepers", {pfeed_productgroup:{has:['Sleeper']}}));
		featuresCat.addFacet(new Facet("features_modular", "Modular", {pfeed_productgroup:{has:['Modular']}}));
		featuresCat.addFacet(new Facet("features_reclining", "Reclining", {pfeed_productgroup:{has:['Reclining']}}));

		this.addFacetCategory(featuresCat);


		this.itemsPerPage=24;


	}
})














/* ../projects/rtw_plus//randomDirectory/ipad/js/base/productPool.js */

var ProductPool = Class.extend({

	init: function(params) {

		this.poolScrollable = true;
		this.itemsPerPage = 20;
		this.loaded = false;
		this.showMoreOnHover = false;

		if (params) {
			this.poolScrollable = params.scrollable;

			if (params.itemsPerPage)
				this.itemsPerPage = params.itemsPerPage;

			if (params.container)
				this.setupPool(params.container);

			if (params.template)
				this.template = params.template;
			else
				this.template = "productListing";

			if (params.showMoreOnHover)
				this.showMoreOnHover = params.showMoreOnHover;
		}

		this.facets = {};
		this.poolWorker = new PoolBoy(this);
		this.setLiveEvents();

	},

	setLiveEvents: function() {
		if (this.poolContainer.is("[liveEventsSet]"))
			return;

		var self = this;

		this.poolContainer.attr("liveEventsSet", "yes");

		if (!finder.isTablet() && this.showMoreOnHover) {
			jQuery(".productListing").live({
				mouseover: function(event){
					jQuery(this).addClass("hover");
					self.productListingOver(event);
				},
				mouseout: function(event){
					jQuery(this).removeClass("hover");
					self.productListingOut(event);
				}
			})
		}

		jQuery(".productListing .quickview A").live ({
            mousedown: function(){
                jQuery(this).addClass("clicked");
            },
			mouseup: function(){
                jQuery(this).removeClass("clicked");
            }
        })

		jQuery(".touch .productListing .bonusOffers").live({
			click: function(event) {
				event.preventDefault();
				event.stopPropagation();
				jQuery(this).toggleClass("active");
			}
		})

		jQuery(".productListing .quickview").live ({

            mouseout: function(){
                jQuery(this).removeClass("hover");
            },
			mouseover: function(){
                jQuery(this).addClass("hover");
            }
        })

		var swatchEvent = "hover";
		if (finder.isTablet()) {
			swatchEvent = "click";
		}
		jQuery(".productListing .swatch").live(swatchEvent, function() {
			var item = jQuery(this);
			if (item.attr("productImage") == "")
				return;

			jQuery(".productImage", item.parents(".productListing")).attr("src", item.attr("productImage"));
		}, function() {


		});





	},

	setResultsDisplay: function() {

	},

	getResultsDisplay: function() {

	},

	addFacet: function(facet) {

		facet.setParent(this);
		this.facets[facet.name] = facet;


		var container = jQuery("<DIV></DIV>").attr("forFacet", facet.name).addClass("facet").addClass(facet.name).append(facet.display());
		this.facetsContainer.append(container);
	},

	getFacet: function(name) {
		return this.facets[name];
	},

	setupPool: function(container) {


		var self = this;
		this.poolContainer = jQuery(container);

		this.poolHeader = jQuery("<div id='poolHeader'></div>").appendTo(this.poolContainer);

		this.facetsContainer = jQuery("<div id='facetsContainer'></div>").appendTo(this.poolContainer);
	//	jQuery("<div id='poolPaginationTop' class='poolPagination'></div>").appendTo(this.poolHeader);

		this.poolResults = jQuery("<div id='poolResults'></div>").appendTo(this.poolContainer);

		this.poolFooter = jQuery("<div id='poolFooter'></div>").appendTo(this.poolContainer);
		jQuery("<div id='poolPaginationBottom' class='poolPagination'></div>").appendTo(this.poolFooter);

		this.poolPagination = jQuery(".poolPagination", this.poolContainer);

		jQuery("<div class='itemsFound'></div>").appendTo(this.poolPagination);
		jQuery("<div class='pageNumbers'></div>").appendTo(this.poolPagination);

		this.itemsFound = jQuery(".itemsFound", this.poolContainer);
		this.pageNumbers = jQuery(".pageNumbers", this.poolContainer);

		this.poolPagination.append("<div style='clear:both;'></div>");



		this.noResults = jQuery("<div id='noResults'></div>");
		this.noResults.html("We're sorry, at this time we do not have any items in our collection that match your preferences. We often add new styles to our site, so check back soon; or, make new preference selections now.");



		this.poolContainer.bind("poolDataLoaded", function() {
			self.poolDataLoaded();
		});

		this.poolContainer.bind("filterFacetChanged", function() {
			self.runFilters();
		});

		this.poolContainer.bind("sortFacetChanged", function() {
			self.sortChanged();
		});

		this.poolContainer.bind("resetFacets", function() {
			self.resetFacets();
		});

		this.pageNumbers.delegate("A[pageNum]", "click", function(event) {
			event.preventDefault();
			event.stopPropagation();
			self.showPage(jQuery(this).attr("pageNum"));
			jQuery("#finderContainer").trigger("poolPaged");
		})

		this.pageNumbers.delegate("A.prevPage", "click", function(event) {
			event.preventDefault();
			event.stopPropagation();
			var currentPage = jQuery("A[pageNum].selected", self.pageNumbers).attr("pageNum") * 1;
			self.showPage(currentPage - 1);
			jQuery("#finderContainer").trigger("poolPaged");
		})

		this.pageNumbers.delegate("A.nextPage", "click", function(event) {
			event.preventDefault();
			event.stopPropagation();
			var currentPage = jQuery("A[pageNum].selected", self.pageNumbers).attr("pageNum") * 1;
			self.showPage(currentPage + 1);
			jQuery("#finderContainer").trigger("poolPaged");
		})
	},

	reset: function() {
		this.poolContainer.html("");
		this.facets = {};
		this.scroller = false;
		this.setupPool(this.poolContainer);
	},

	poolDataLoaded: function() {
		// get all the items...
		var items = this.poolWorker.db().get();

		// let the facets reorder themselves using this data...
		for (i in this.facets) {
			this.facets[i].handlePoolData(items);
		}
	},

	setupCategoryFilter: function(filters) {
		this.staticFilter = filters;
	},

	loadPool: function(pool, filter) {

		console.log('IN LOAD POOL')

		if (filter) {
			this.staticFilter = filter;
		} else {
			this.staticFilter = {}
		}
		// load the right pool...
		finder.loadingDisplay.start("pool load");
		finder.loadingDisplay.end("pool load");
		var self = this;
		setTimeout(function() {

			console.log('IN TIMEOUT')

			self.poolWorker.loadPool(pool, jQuery.proxy(self.poolLoaded, self));
		}, 10);

	},

	poolLoaded: function() {

		this.runFilters();

		this.loaded = true;
		finder.loadingDisplay.end("pool load");
		finder.resizePage();
		//jQuery("#finderContainer").trigger("poolLoaded");
		//jQuery(finder.getCurrentPage().parentDiv).trigger("poolLoaded");
		this.poolContainer.trigger("poolLoaded");

	},

	setPoolScrollable: function(bool) {
		this.poolScrollable = bool;
	},

	setItemsPerPage: function(num) {
		this.itemsPerPage = num;
	},

	filter: function(categoryFilter) {
		this.categoryFilter = categoryFilter;
		this.runFilters();
	},

	itemsFiltered: function(myfilter) {

		if (!myfilter)
			myfilter = [];

		try {
			myfilter = jQuery.merge(myfilter, [this.staticFilter]);
		} catch(e) { }

		console.log("filter", myfilter);
		console.log("filter", this.staticFilter);

		if (myfilter.length == 0)
			myfilter = {};

		var contentPane = this.poolResults;
		if (this.poolScrollable && this.scroller && !finder.isTablet()) {
			contentPane = jQuery(this.scroller.getContentPane());
		}

		contentPane.html("");
		//var items = this.poolWorker.showFilteredResults(contentPane, "#productListing", myfilter);

		this.items = this.poolWorker.getFilteredResults(myfilter);


		var items = this.items;

		console.log("items length", items.count());

		items.length = items.count();


		// build pagination results...

		var pluralItems = (items.length == 1) ? "item" : "items";
		this.itemsFound.html(items.length + " " + pluralItems + " found");

		var numPages = Math.ceil(items.length / this.itemsPerPage);

		this.pageNumbers.attr("numPages", numPages);

		if (numPages > 1) {
			this.updatePagination(0);
			this.pageNumbers.show();
		} else {
			this.pageNumbers.hide();
		}

		if (items.count() == 0) {
			contentPane.append(this.noResults);
			return;
		}


		this.showPage(0);




	},

	updatePagination: function(current) {

		var numPages = (this.pageNumbers.attr("numPages") * 1);

		current = current * 1  + 1;

		if (isNaN(current) || current > numPages)
			current = numPages;

		var numPagesToShow = 2;

		//this.pageNumbers.html("<a href='javascript:void(0)' class='prevPage'><img src='" + assetsDirectory + "images/leftarrow.gif' border='0'> Prev</a>");
		this.pageNumbers.html("<a href='javascript:void(0)' class='prevPage'><img src='" + assetsDirectory + "images/leftarrow.gif' border='0'> </a>");

		var startPage = 1;
		var endPage = numPages;

		if (numPages <= numPagesToShow) {
			endPage = numPages;
		} else {
			startPage = current - Math.floor(numPagesToShow / 2);
			if (startPage < 1)
				startPage = 1;

			endPage = startPage + numPagesToShow;
			if (endPage > numPages) {
				endPage = numPages;
				startPage = endPage - numPagesToShow;
			}

		}

		for (i = startPage; i <= endPage; i++) {
			this.pageNumbers.append("<a href='javascript:void(0);' pageNum='" + (i - 1) + "'>" + (i) + "</a> ");
		}
		//this.pageNumbers.append("<a href='javascript:void(0)' class='nextPage'>Next <img src='" + assetsDirectory + "images/rightarrow.gif' border='0'></a>");
		this.pageNumbers.append("<a href='javascript:void(0)' class='nextPage'> <img src='" + assetsDirectory + "images/rightarrow.gif' border='0'></a>");
	},

	showPage: function(pageNum) {

		pageNum = pageNum * 1;

		var numPages = this.pageNumbers.attr("numPages") * 1;
		this.updatePagination(pageNum);

		if (pageNum <= 0)
			jQuery("A.prevPage", this.pageNumbers).css("visibility", "hidden");
		else
			jQuery("A.prevPage", this.pageNumbers).css("visibility", "visible");

		if (pageNum >= numPages - 1)
			jQuery("A.nextPage", this.pageNumbers).css("visibility", "hidden");
		else
			jQuery("A.nextPage", this.pageNumbers).css("visibility", "visible");

		this.pageNumbers.attr("currentPage", pageNum);


		jQuery("A", this.pageNumbers).removeClass("selected");
		jQuery("A[pageNum=" + pageNum+ "]", this.pageNumbers).addClass("selected");


		var contentPane = this.poolResults;
		if (this.poolScrollable && this.scroller && !finder.isTablet()) {
			contentPane = jQuery(this.scroller.getContentPane());
		}
		//jQuery(".productListing:visible", this.poolResults).hide();
		//jQuery(".productListing", this.poolResults).slice(pageNum * this.itemsPerPage, pageNum * this.itemsPerPage + this.itemsPerPage).fadeIn();

		contentPane.html("");
		jQuery("#" + this.template).tmpl(this.items.get().slice(pageNum * this.itemsPerPage, pageNum * this.itemsPerPage + this.itemsPerPage)).appendTo(contentPane);
//		jQuery(contentPane).append("<div style='clear: both; margin-bottom: 100px;'></div>");

		jQuery("#finderContainer").trigger("dataChanged");



		if (this.poolScrollable) {
			try {
				this.scroller.reinitialise();
				this.scroller.scrollTo(0,0);
			} catch(e) {
				this.scroller = new Scroller(contentPane);
			}

				this.scrollerInited = true;


		}


		jQuery("#finderContainer").trigger("dataChanged");
		jQuery("#finderContainer").trigger("poolPageChanged");
	},


	runFilters: function() {

		var filter = [];

		for (i in this.facets) {

				//filter = jQuery.merge(filter, this.facets[i].getSelectedFilter());
			if (this.facets[i].getType() == "FILTER") {
				filter.push(this.facets[i].getSelectedFilter());
			}
		}



		this.itemsFiltered(filter);
	},

	sortChanged: function() {
		var filter = [];

		for (i in this.facets) {
			if (this.facets[i].getType() == "SORT") {
				filter = this.facets[i].getSelectedFilter();
			} else {

			}
		}

		if (!filter[0]) {
			filter = "pool_insert_id asc";
		}



		this.poolWorker.sort(filter[0]);
		this.runFilters();

	},

	resetFacets: function() {

		for (i in this.facets) {
			this.facets[i].reset();
		}

		this.sortChanged();

	},


	productListingOver: function(event) {

		var item = jQuery(event.currentTarget);

		var container = item.parent();



		if (!item.hasClass("productListing") || item.hasClass("isClone") || item.attr("productId") == jQuery(".productListingHover", container).attr("productId"))
			return;



		// see if there is already a hovered item...
		// and remove it..
		jQuery(".productListingHover", container).remove();

		// create a clone and add it to the container..
		var clone = item.clone().addClass("isClone").wrap("<div class='productListingHover'></div>");
		clone = clone.parent();


		var itemPosition = item.position();

		clone.css({
			top: itemPosition.top +3  + "px",
			left: itemPosition.left + 3 + "px"
		}).mouseout(function() {
			if (jQuery(event.currentTarget).hasClass(".productListingHover"))
				jQuery(this).remove();
		})

		container.append(clone);

		jQuery(".moreInfo", clone).slideDown("fast");

	},

	productListingOut: function(event) {

	}







})

/* ../projects/rtw_plus//randomDirectory/ipad/js/base/productPoolAbstractFacets.js */
var ProductPoolFacet = Class.extend({

	init: function(name, type, filters) {
		this.name = name;
		this.type = type; // either "FILTER" or "SORT"
		this.filters = filters;
		this.parent = parent;

		this.displayHandler = this.setupDisplay();
	},

	setupDisplay: function() {
		return new SelectFieldDisplayHandler("Shop By", this);
	},

	display: function() {
		return this.displayHandler.display();
	},

	getSelectedFilter: function() {
		var values = this.displayHandler.getSelectedValues();

		var filter = [];
		for (i = 0; i < values.length; i++) {
			filter = jQuery.merge(filter, this.filters[values[i]].filter);
		}

		return filter;
	},

	getFilters: function() {
		return this.filters;
	},

	getSelected: function() {
		var values = this.displayHandler.getSelectedValues();

		var filter = [];
		for (i = 0; i < values.length; i++) {
			filter.push(this.filters[values[i]]);
		}


		return filter;
	},

	setSelected: function(val) {
		for (var i in this.filters) {
			if (i == val) {
				this.filters[i].selected = true;
			} else {
				this.filters[i].selected = false;
			}
		}
		this.displayHandler.display();
		this.facetChanged();
	},

	facetChanged: function() {
		this.parent.poolContainer.trigger({
			type: "filterFacetChanged",
			changedFacet: this
		});
		finder.resizePage();
	},

	setParent: function(parent) {
		this.parent = parent;
	},

	handlePoolData: function(items) {

	},

	getType: function() {
		return this.type;
	},

	reset: function() {
		this.displayHandler.reset();
	}
});

var ProductPoolFacetDisplayHandler = Class.extend({

	init: function(defaultText, par) {
		this.defaultText = defaultText;
		this.parent = par;

		this.setup();
	},

	setup: function() {

	},

	display: function() {

	},

	displayChanged: function() {
		this.parent.facetChanged();
	},

	getSelectedValues: function() {
		return [];
	},

	reset: function() {

	}

})



var SelectFieldDisplayHandler = ProductPoolFacetDisplayHandler.extend({

	setup: function() {
		this._super();
		this.field = jQuery("<select><option value='-1'>" + this.defaultText + "</option>");

		var self = this;
		this.field.change(function() {
			self.displayChanged();
		})
	},

	display: function() {
		this._super();
		var values = "<option value='-1'>" + this.defaultText + "</option>";


		var filters = this.parent.getFilters();
		for (i in filters) {
			values += "<option value='" + i + "'>" + filters[i].label + "</option>";
		}

		this.field.html(values);
		return this.field;
	},

	getSelectedValues: function() {
		if (this.field.val() == "-1")
			return [];

		return [this.field.val()];
	},

	reset: function() {
		this._super();
		this.field.val("-1");
	}

});
var ToggleTabsDisplayHandler = ProductPoolFacetDisplayHandler.extend({

	setup: function() {
		this._super();
		this.field = jQuery("<div><span class='facetTitle'>" + this.defaultText + "</span><ul class='facetTabsContainer'></ul></div>");

		var self = this;
		jQuery("UL", this.field).delegate("LI", "click", function() {

			var item = jQuery(this);

			if (item.hasClass("toggled")) {
				if (!self.isToggle()) {
					// see how many items are checked... if only one.. don't remove the class..
					if (item.siblings(".toggled").length > 0) {
						item.removeClass("toggled");
					}
				} else {
					item.removeClass("toggled");
				}

			} else {
				if (!self.isToggle()) {
					item.siblings("LI").removeClass("toggled").children("INPUT").removeAttr("checked");
				}
				item.addClass("toggled");
			}

			if (item.hasClass("toggled")) {
				jQuery("INPUT", item).attr("checked", "1");
			} else {
				jQuery("INPUT", item).removeAttr("checked");
			}
			self.displayChanged();
		})


	},

	isToggle: function() {
		return true;
	},

	display: function() {
		this._super();

		var values = "";
		var filters = this.parent.getFilters();
		for (i in filters) {
			var checked = filters[i].selected ? "checked" : "";
			var toggled = filters[i].selected ? "class='toggled'" : "";
			values += "<li pfeed='" + i + "' " + toggled + "><input type='checkbox' " + checked + "> " + filters[i].label + "</li>";
		}

		jQuery("UL", this.field).html(values).css({padding: "0px", margin: "0px", 'list-style': "none", "-webkit-padding-start": "0px"});

		jQuery("LI", this.field).css({'list-style': "none", "cursor": "pointer"})

		return this.field;
	},

	getSelectedValues: function() {
		var items = [];
		jQuery("LI.toggled", this.field).each(function() {
			items.push(jQuery(this).attr("pfeed"));
		})


		return items;
	},

	reset: function() {
		this._super();
		jQuery(".toggled", this.field).removeClass("toggled");
		jQuery("[checked]", this.field).removeAttr("checked");
	}

});

var TabsDisplayHandler = ToggleTabsDisplayHandler.extend({

	isToggle: function() {
		return false;
	}

});



var ToggleButtonDisplayHandler = ProductPoolFacetDisplayHandler.extend({

	setup: function() {
		this._super();
		this.field = jQuery("<input type='button' value='" + this.defaultText + "'>");

		var self = this;
		this.field.click(function() {
			self.field.toggleClass("toggled");
			self.displayChanged();
		})
	},

	display: function() {
		this._super();
		return this.field;
	},

	getSelectedValues: function() {
		if (this.field.hasClass("toggled")) {
			// return the first filter..
			var filters = this.parent.getFilters();
			for (i in filters) {
				return [i];
				break;
			}
		}
		else {
			return [];
		}
	},

	reset: function() {
		this._super();
		this.field.removeClass("toggled");
	}

});

var ButtonDisplayHandler = ProductPoolFacetDisplayHandler.extend({

	setup: function() {
		this._super();
		this.field = jQuery("<input type='button' value='" + this.defaultText + "'>");

		var self = this;
		this.field.click(function() {
			self.displayChanged();
		})
	},

	display: function() {
		this._super();
		return this.field;
	}

});


var CategoryFilterFacet = ProductPoolFacet.extend({

	handlePoolData: function(items) {

		// use these items to build my filters list...
		var category = {};
		for (var i = 0; i < items.length; i++)
		{

			if (items[i][this.category] instanceof Array) {
				for (j = 0; j < items[i][this.category].length; j++) {
					if (category[items[i][this.category][j]])
						category[items[i][this.category][j]]++;
					else
						category[items[i][this.category][j]] = 1;
				}
			} else {
				if (category[items[i][this.category]])
					category[items[i][this.category]]++;
				else
					category[items[i][this.category]] = 1;
			}




		}
		var bArray = [];
		for (var i in category)
		{
			if(i==""){
				continue;
			}
			bArray.push(i);
		}
		bArray = bArray.sort();

		this.filters = {}

		for (var i = 0; i < bArray.length; i++)
		{
			var myfilter = {
				label: bArray[i],
				filter: []
			}
			var filter2 = {}
			filter2[this.category] = {
				has: [bArray[i]]
			};
			myfilter.filter.push(filter2);
			this.filters[bArray[i]] = myfilter;

		}
		this.display();
	}

})




/* ../projects/rtw_plus//randomDirectory/ipad/js/base/productPoolDisplay.js */

var ProductPoolDisplay = Class.extend({





});


var GridPoolDisplay = ProductPoolDisplay.extend({

	display: function(items) {

	}

})



/* ../projects/rtw_plus//randomDirectory/ipad/js/base/productPoolFacets.js */
/*
 * Available Facet Abstract Types:
 * 1.	CategoryFilterFacet - specify a pfeed_xxx property.. and it builds the item automatically...
 * 2.	ProductPoolFacet - specify your filters manually....
 *
 * Available Display Handlers:
 * 1.	ButtonDisplayHandler
 * 2.	ToggleButtonDisplayHandler
 * 3.	SelectFieldDisplayHandler
 * 4.	ToggleTabsDisplayHandler
 * 5.	TabsDisplayHandler
 *
 */

var ProductTabFacet = ProductPoolFacet.extend( {
	init: function(filters) {
		this._super("productTabs", "FILTER", filters);
	},
	setupDisplay: function() {
		// The dropdown title is here.
		return new TabsDisplayHandler("Shop All", this);

	}
})

var GenericCheckboxFacet = ProductPoolFacet.extend( {
	init: function(filters, id, title) {
		this.facetId = id;
		this.facetTitle = title;
		this._super(id, "FILTER", filters);
	},
	setupDisplay: function() {
		// The dropdown title is here.
		return new TabsDisplayHandler(this.facetTitle, this);

	}
})


var ProductGroupFacet = ProductPoolFacet.extend({

	init: function(filters) {
		this._super("productGroup", "FILTER", filters);
	},

	setupDisplay: function() {
		// The dropdown title is here.
		return new SelectFieldDisplayHandler("Shop", this);

	}
})

var SpecialSizesFacet = ProductPoolFacet.extend({

	init: function(filters) {
		this._super("specialSizes", "FILTER", filters);
	},

	setupDisplay: function() {
		// The dropdown title is here.
		return new TabsDisplayHandler("Shop All", this);

	}
})


var TabFilterFacet = ProductPoolFacet.extend({

	init: function(filters){

		this._super("tabFilterFacet", "FILTER", filters);
	},

	setupDisplay: function() {
		handler = new TabsDisplayHandler("Category", this);
		return handler;
	}
})

var LinksFilterFacet = TabFilterFacet.extend({

	facetChanged: function() {
		var values = this.displayHandler.getSelectedValues();

		if (values.length > 0) {
			var myValue = values.pop();

			var url = this.getFilters()[myValue].url;
			window.location = url;
		}
	}

})


var ColorSelectFacet = CategoryFilterFacet.extend({

	init: function() {
		this.category = "pfeed_color";
		this._super("colorSelecter", "FILTER", {});
	},

	setupDisplay: function() {
		return new TabsDisplayHandler("Shop By Color", this);
	}
})



var MostGiftableFacet = ProductPoolFacet.extend({

	init: function(){
		var filters = {
			"cashmere": {
				label: "Cashemre",
				filter: [{
					pfeed_fabric: "Cashmere"
				}]
			},
			"wool": {
				label: "Wool",
				filter: [{
					pfeed_fabric: "Wool"
				}]
			}
		}


		this._super("giftableFacet", "FILTER", filters);
	},

	setupDisplay: function() {
		return new ToggleButtonDisplayHandler("Most Giftable", this);
	}
})


var BrandSelectFacet = CategoryFilterFacet.extend({

	init: function() {
		this.category = "pfeed_brand";
		this._super("brandSelect", "FILTER", {});
	},

	setupDisplay: function() {
		return new SelectFieldDisplayHandler("Shop By Brand", this);
	}
})





var SortingFacet = ProductPoolFacet.extend({

	init: function() {

		var filters = {
			"pricehightolow": {
				label: "price: high to low",
				filter: ["pfeed_priceforfilters logicaldesc"]
			},
			"pricelowtohigh": {
				label: "price: low to high",
				filter: ["pfeed_priceforfilters logical"]
			},
			"toploved": {
				label: "top loved",
				filter: ["votes logicaldesc"]
			}
		}


		this._super("sortSelect", "SORT", filters);
	},

	setupDisplay: function() {
		return new SelectFieldDisplayHandler("Sort By", this);
	},

	facetChanged: function() {
		this.parent.poolContainer.trigger("sortFacetChanged");
	}
})



var ResetFacet = ProductPoolFacet.extend({

	init: function(){
		this._super("resetFacet", "FILTER", {});
	},

	setupDisplay: function() {
		return new ButtonDisplayHandler("Reset", this);
	},

	facetChanged: function() {
		this.parent.poolContainer.trigger("resetFacets");
	}
})











/* ../projects/rtw_plus//randomDirectory/ipad/js/base/scroller.js */

	var Scroller = function(elem) {

		elem = jQuery(elem);

		if (finder.isTablet()) {
            return new TouchScroll(elem[0], {
                elastic: true
            });
        } else {

			elem.jScrollPane({autoReinitialise: true, autoReinitialiseDelay: 1000});
			return elem.data('jsp');
		}


		this.scrollbarWidth = 13;
		this.dragGive = 100;
		this.scrollbarPadding = 10;

		elem = jQuery(elem);
		elem.append("<div style='clear:both; padding-top: 20px;'></div>");

		var newWidth = elem.width() - this.scrollbarWidth - 10;

		elem.wrapInner("<div class='innerWrapper'></div>");


		elem = jQuery(".innerWrapper", elem)



		// take the content and put it inside of a container...
		this.contentContainer = elem.parent();
		this.contentContainer.css("overflow", "hidden");
		this.content = elem;

		this.content.addClass("scrollingContent");
		this.content.attr("alt", 0);


		// make the content div narrower for the scrollbar...
		this.content.css("width", this.contentContainer.width()-this.scrollbarWidth - this.scrollbarPadding + "px");

		this.content.css("-webkit-transform", "translate3d(0px, 0px, 0px)");

		// create a container to hold the scrollbar...
		this.scrollbar = jQuery("<div class='scrollerScrollbar' style='position: absolute; top: 0px; right: 0px;'></div>");
		this.scrollbarContainer = jQuery("<div class='scrollerBarContainer'></div>");
		this.scrollbarContainer.append(this.scrollbar);
		this.scrollbarContainer.css({position: "absolute", width: this.scrollbarWidth + "px", height: this.contentContainer.height()+"px", top: "0px", right: "0px"});
		this.contentContainer.append(this.scrollbarContainer);

		// create faders...
		this.topFade = jQuery("<div class='scrollerTopFade' style='width: "+this.content.width()+"px;'></div>");
		this.bottomFade = jQuery("<div class='scrollerBottomFade' style='width: "+this.content.width()+"px;'></div>");
		this.contentContainer.append(this.topFade);
		this.contentContainer.append(this.bottomFade);

		this.containerHeight = this.contentContainer.height();
		this.scrollbarHeight = this.scrollbar.height();
		this.contentHeight = this.content.height();
		var self = this;

		this.updateHeights = function() {

			this.contentHeight = this.content.height();


			if (this.contentHeight < this.containerHeight)
			{
				this.scrollbarContainer.hide();
			} else {
				this.scrollbarContainer.show();
			}
		}




		this.positionChanged = function() {
			var percent = self.scrollbar.css("top").replace("px", "") / (self.containerHeight - self.scrollbarHeight);
			var offset = Math.floor((this.contentHeight - this.containerHeight) * percent);
			//this.content.css("margin-top", "-"+offset+"px");
			self.moveContent("-" + offset);
			this.checkFade();
		}

		this.checkFade = function() {
			offset = Math.abs(this.content.attr("alt"));
			var ch = this.contentHeight - this.containerHeight;


			if (offset <= 0)
				this.topFade.hide();
			else
				this.topFade.show();

			if (offset >= ch)
				this.bottomFade.hide();
			else
				this.bottomFade.show();
		}

		this.checkDragPosition = function() {
			var offset = this.content.attr("alt");
			var scrollHeight = this.contentHeight - this.containerHeight;

			if (offset > 0)
			{
				this.content.addClass("scrollerTransition");
				//this.content.css("margin-top", "0px");
				this.moveContent(0);
			}

			if (Math.abs(offset) > scrollHeight)
			{
				this.content.addClass("scrollerTransition");
				this.moveContent("-" + scrollHeight);
				//this.content.css("margin-top", "-" + scrollHeight + "px");
			}

		},

		this.scrollTo = function(top, left) {
			this.moveContent(top);
		}

		this.moveContent = function(newtop) {
			this.content.attr("alt", newtop);
			console.log(newtop);
			if (Modernizr.csstransitions) {
				this.content.css({
						"-webkit-transform": "translate3d(0px, " + newtop + "px, 0px)",
						"-moz-transform": "translateY(" + newtop + "px)",
						"-o-transform": "translateY(" + newtop + "px)",
						"-ms-transform": "translateY(" + newtop + "px)"
						});
			} else {
				this.content.css("margin-top", newtop + "px");
			}
		}

		this.content.bind("contentChanged", function() {

			self.updateHeights();
			self.scrollbar.css("top", "0px");
			self.positionChanged();
		});

		this.normalizeNewtop = function(newtop) {
			var give = this.dragGive;

			var dragMin = (this.contentHeight - this.containerHeight) * -1 - give;

			var dragMax = give;

			if (newtop < dragMin)
				newtop = dragMin;

			if (newtop > dragMax)
				newtop = dragMax;

			return newtop;

		}

		this.contentContainer.mousewheel(function(event, delta) {

			event.preventDefault();

			self.updateHeights();

			var minMove=20;
			var totalMove = minMove*delta;
			var newtop = self.content.attr("alt") * 1 + totalMove;

			newtop = self.normalizeNewtop(newtop)

			self.content.addClass("scrollerTransition");
			self.moveContent(newtop);
			self.positionScrollbar();

			if (Modernizr.csstransitions) {
				clearTimeout(self.checkTimeout);
				self.checkTimeout = setTimeout(function(){
					self.checkDragPosition();
				}, 100);
			} else {
				self.checkDragPosition();
			}


		});

		this.checkFlick = function(pixels, time) {
			console.log(pixels + " " + time);
			return false;
		}

		this.content.bind("touchstart", function(event) {

			event.preventDefault();

			self.updateHeights();

			self.contentTouchY = event.originalEvent.touches[0].pageY;
			self.contentTouchMarginY = self.content.attr("alt");
			self.movementNoticed = false;


			if (isNaN(self.contentTouchMarginY))
			{
				self.content.attr("alt", "0");
				self.contentTouchMarginY = 0
			}


			jQuery(document).bind("touchend", function () {
				jQuery(document).unbind("touchmove");
				jQuery(document).unbind("touchend");


				/*
				console.log(event.originalEvent.touches[0].pageY + " - " + self.moveTouchY);

				var flick = self.checkFlick(event.originalEvent.touches[0].pageY - self.moveTouchY, event.timestamp - self.moveTouchTime);

				if (!flick) {
					try {
						self.checkDragPosition();
					}
					catch (e) {

					}
				}
				*/

				// see if this is a click...
				if (!self.movementNoticed) {
					// issue a click event..
					console.log("click");
					var clickEvent = document.createEvent("MouseEvent");
					clickEvent.initMouseEvent(
						"click", //type
						true, //canBubble
						true, //cancelable
						event.originalEvent.view,
						1, //detail (number of clicks for mouse events)
						event.originalEvent.screenX,
						event.originalEvent.screenY,
						event.originalEvent.clientX,
						event.originalEvent.clientY,
						event.originalEvent.ctrlKey,
						event.originalEvent.altKey,
						event.originalEvent.shiftKey,
						event.originalEvent.metaKey,
						event.originalEvent.button,
						null// relatedTarget
					);
					event.target.dispatchEvent(clickEvent);
				}

				self.checkDragPosition();
			});

			jQuery(document).bind('touchmove', function(event) {
				event.preventDefault();

				self.moveTouchY = event.originalEvent.touches[0].pageY;
				self.moveTouchTime = event.timestamp;

				// check for movement...
				if (Math.abs (self.contentTouchY - event.originalEvent.touches[0].pageY) > 5) {
					self.movementNoticed = true;
				}

				var newtop = self.contentTouchMarginY - (self.contentTouchY - event.originalEvent.touches[0].pageY);
				newtop = Math.min(0 + self.dragGive, newtop);

				newtop = Math.max(newtop, (self.contentHeight - self.containerHeight + self.dragGive) * -1);

				self.moveContent(newtop);
				//self.content.css("margin-top", newtop + "px");

				self.checkFade();


				self.positionScrollbar();



			});

		});

		this.positionScrollbar = function() {
			// position scrollbar...
			var percent = (self.content.attr("alt") * -1) / (self.contentHeight - self.containerHeight);
			var offset = Math.floor((self.containerHeight - self.scrollbarHeight) * percent);

			offset = Math.max(offset, 0);
			offset = Math.min(offset, self.containerHeight - self.scrollbarHeight);

			self.scrollbar.css("top", offset + "px");
		}


		this.scrollbar.bind("mousedown touchstart", function(event) {
			event.preventDefault();

			self.updateHeights();

			try {
				event.originalEvent.touches[0].pageY;
				event.pageY = event.originalEvent.touches[0].pageY;
			} catch(e) { };
			self.dragStartY = event.pageY;
			self.scrollbarTop = self.scrollbar.css("top").replace("px", "") * 1;

			// bind mouseup and mousemove events...
			var elem = jQuery(this);
			jQuery(document).bind("mouseup touchend", function() {
				jQuery(document).unbind("mousemove");
				jQuery(document).unbind("touchmove");
				jQuery(document).unbind("touchend");
				jQuery(document).unbind("mouseup");
			});

			jQuery(document).bind("mousemove touchmove", function(event) {
				event.preventDefault();
				try {
					event.originalEvent.touches[0].pageY;
					event.pageY = event.originalEvent.touches[0].pageY;
				} catch(e) { };
				try {
					var newtop = self.scrollbarTop + (event.pageY - self.dragStartY);
					newtop = Math.max(newtop, 0);
					newtop = Math.min(newtop, self.containerHeight - self.scrollbarHeight);
					self.scrollbar.css("top", newtop + "px");
					self.positionChanged();
				} catch(e) {  }
			});

		});

		try {
			this.content[0].addEventListener("webkitTransitionEnd", function() {
				jQuery(this).removeClass("scrollerTransition");
				self.checkFade();
			}, true);
		} catch(e) {
			// do nothing..
		}
		try {
			this.content[0].addEventListener("transitionend", function() {
				jQuery(this).removeClass("scrollerTransition");
				self.checkFade();
			}, true);
		} catch(e) {
			// do nothing..
		}
		try {
			this.content[0].addEventListener("OTransitionEnd", function() {
				jQuery(this).removeClass("scrollerTransition");
				self.checkFade();
			}, true);
		} catch(e) {
			// do nothing..
		}

		this.updateHeights();

	}

/* ../projects/rtw_plus//randomDirectory/ipad/js/base/slider.js */
var Slider = function(wrapper) {
		this.wrapper = jQuery(wrapper);
		this.wrapperWidth = this.wrapper.width();
		this.wrapperHeight = this.wrapper.height();

		var self = this;

		//setup the slides..
		this.slides = jQuery(".mcom_slide", this.wrapper).each(function(i) {
			jQuery(this).css({
					width: self.wrapperWidth+"px",
					height: self.wrapperHeight+"px",
					//'-webkit-transform': "translate3d(0px, 0px, 0px)",
					'position': 'absolute',
					top: "0px",
					left: i * self.wrapperWidth + "px"
			}).attr("slideNum", i);
		});

		this.slideContainer = jQuery(".mcom_slideContainer", this.wrapper).css ({
			position: "absolute",
			width: self.slides.length * self.wrapperWidth,
			top: "0px",
			left: "0px",
			//'-webkit-transform': "translate3d(0px, 0px, 0px)",
			'-webkit-transition-property': '-webkit-transform',
			'-webkit-transition-duration': '.5s',
			'-webkit-transition-timing-function': 'ease-in'
		});

		this.currentSlide=0;
		this.maxSlides = this.slides.length;
		this.speed=500;

		this.swipeStatus = function(event, phase, direction, distance)
			{
				//If we are moving before swipe, and we are going Lor R in X mode, or U or D in Y mode then drag.
				if( phase=="move" && (direction=="left" || direction=="right") )
				{
					var duration=0;

					if (direction == "left")
						self.scrollSlides((self.wrapperWidth * self.currentSlide) + distance, duration);

					else if (direction == "right")
						self.scrollSlides((self.wrapperWidth * self.currentSlide) - distance, duration);

				}

				else if ( phase == "cancel")
				{
					self.scrollSlides(self.wrapperWidth * self.currentSlide, self.speed);
				}

				else if ( phase =="end" )
				{
					if (direction == "right")
						self.previousSlide()
					else if (direction == "left")
						self.nextSlide();
				}
			}

		this.previousSlide = function()
		{
			this.currentSlide = Math.max(this.currentSlide-1, 0);
			self.scrollSlides( this.wrapperWidth * this.currentSlide, self.speed);
			this.wrapper.trigger('slideChanged', [this.currentSlide, this.maxSlides]);
		}

		this.nextSlide = function()
		{
			this.currentSlide = Math.min(this.currentSlide+1, this.maxSlides-1);
			self.scrollSlides( this.wrapperWidth * this.currentSlide, self.speed);
			this.wrapper.trigger('slideChanged', [this.currentSlide, this.maxSlides]);
		}

		this.showSlide = function(num) {
			if (isNaN(num))
			{
				// try to find this slide..
				var items = jQuery(num, this.slideContainer);
				if (items.length == 0)
					return;
				num = items.attr("slideNum");
			}


			var slidesApart = Math.abs(num - this.currentSlide);
			this.currentSlide = num;

			self.scrollSlides( self.wrapperWidth * this.currentSlide, this.speed + (Math.max(slidesApart-2, 0) * 300));
			this.wrapper.trigger('slideChanged', [this.currentSlide, this.maxSlides]);
		}

		/**
		* Manuallt update the position of the imgs on drag
		*/
		this.scrollSlides = function(distance, duration)
		{
			this.slideContainer.css("-webkit-transition-duration", (duration/1000).toFixed(1) + "s");

			//inverse the number we set in the css
			var value = (distance<0 ? "" : "-") + Math.abs(distance).toString();

			this.slideContainer.css("-webkit-transform", "translate3d("+value +"px,0px,0px)");
		}

		var swipeOptions = {
			triggerOnTouchEnd : true,
			swipeStatus : self.swipeStatus,
			threshold:200,
			allowPageScroll:"auto"
		}

		//if (Modernizr.touch)
			//this.slideContainer.swipe(swipeOptions);
	}

/* ../projects/rtw_plus//randomDirectory/ipad/js/base/slider2.js */
var Slider2 = function(wrapper) {
		this.wrapper = jQuery(wrapper);
		this.wrapperWidth = this.wrapper.width();
		this.wrapperHeight = this.wrapper.height();

		var self = this;

		//setup the slides..
		this.slides = jQuery(".mcom_slide", this.wrapper).each(function(i) {
			jQuery(this).css({
					width: self.wrapperWidth+"px",
					height: self.wrapperHeight+"px",
					//'-webkit-transform': "translate3d(0px, 0px, 0px)",
					'position': 'absolute',
					top: "0px",
					left: "0px",
					border: "1px solid black",
					opacity: .5
			}).attr("slideNum", i);
		});

		this.currentSlide=0;
		this.maxSlides = this.slides.length;
		this.speed=500;

		this.eachAngle = 360 / this.maxSlides;

		this.slides.each(function(i) {
			jQuery(this).css({
				"-webkit-transform": "translate3d(0px, 0px, " + 400 + "px) rotateY(" + (self.eachAngle * i) + "deg)"
			})
		});

		this.slideContainer = jQuery(".mcom_slideContainer", this.wrapper).css ({
			position: "absolute",
			width: self.slides.length * self.wrapperWidth,
			top: "0px",
			left: "0px",
			//'-webkit-transform': "translate3d(0px, 0px, 0px)",
			'-webkit-transition-property': '-webkit-transform',
			'-webkit-transition-duration': '.5s',
			'-webkit-transition-timing-function': 'ease-in',
			'-webkit-prespective': "1000px"
		});



		this.swipeStatus = function(event, phase, direction, distance)
			{
				//If we are moving before swipe, and we are going Lor R in X mode, or U or D in Y mode then drag.
				if( phase=="move" && (direction=="left" || direction=="right") )
				{
					var duration=0;

					if (direction == "left")
						self.scrollSlides((self.wrapperWidth * self.currentSlide) + distance, duration);

					else if (direction == "right")
						self.scrollSlides((self.wrapperWidth * self.currentSlide) - distance, duration);

				}

				else if ( phase == "cancel")
				{
					self.scrollSlides(self.wrapperWidth * self.currentSlide, self.speed);
				}

				else if ( phase =="end" )
				{
					if (direction == "right")
						self.previousSlide()
					else if (direction == "left")
						self.nextSlide();
				}
			}

		this.previousSlide = function()
		{
			this.currentSlide = Math.max(this.currentSlide-1, 0);
			self.scrollSlides( this.wrapperWidth * this.currentSlide, self.speed);
			this.wrapper.trigger('slideChanged', [this.currentSlide, this.maxSlides]);
		}

		this.nextSlide = function()
		{
			this.currentSlide = Math.min(this.currentSlide+1, this.maxSlides-1);
			self.scrollSlides( this.wrapperWidth * this.currentSlide, self.speed);
			this.wrapper.trigger('slideChanged', [this.currentSlide, this.maxSlides]);
		}

		this.showSlide = function(num) {
			if (isNaN(num))
			{
				// try to find this slide..
				var items = jQuery(num, this.slideContainer);
				if (items.length == 0)
					return;
				num = items.attr("slideNum");
			}


			var slidesApart = Math.abs(num - this.currentSlide);
			this.currentSlide = num;

			self.scrollSlides( self.wrapperWidth * this.currentSlide, this.speed + (Math.max(slidesApart-2, 0) * 300));
			this.wrapper.trigger('slideChanged', [this.currentSlide, this.maxSlides]);
		}

		/**
		* Manuallt update the position of the imgs on drag
		*/
		this.scrollSlides = function(distance, duration)
		{
			this.slideContainer.css("-webkit-transition-duration", (duration/1000).toFixed(1) + "s");

			//inverse the number we set in the css
			var value = (distance<0 ? "" : "-") + Math.abs(distance).toString();

			this.slideContainer.css("-webkit-transform", "rotateY(" + value + "deg)" /*"translate3d("+value +"px,0px,0px)"*/);
		}

		var swipeOptions = {
			triggerOnTouchEnd : true,
			swipeStatus : self.swipeStatus,
			threshold:200,
			allowPageScroll:"auto"
		}

		if (Modernizr.touch)
			this.slideContainer.swipe(swipeOptions);
	}

/* ../projects/rtw_plus//randomDirectory/ipad/js/base/widgets.js */

var Widgets = Class.extend({



    init: function(){



    },


	initializeWidgets: function(parent) {

		var self = this;

		// find all spotlight callouts..
		jQuery("[role='spotlightCallout']", parent).each(function() {
			var item = jQuery(this);

			self.initializeSpotlightCallout(item);
			item.attr("originalWidth", item.width());

		}).append("<div style='clear:both'></div>").hover( function() {
			var item = jQuery(this);
			item.addClass("hover");

			if (Modernizr.csstransitions)
				return;

			var background = jQuery(".background IMG", item);
			background.stop().animate({width: (1*item.attr("originalWidth") + 10) + "px"});


		}, function() {
			var item = jQuery(this);

			item.removeClass("hover");

			if (Modernizr.csstransitions)
				return;

			var background = jQuery(".background IMG", item);
			background.stop().animate({width: (1*item.attr("originalWidth")) + "px"});

		});


		// initialize the carousel...
		jQuery("[role='carousel']", parent).each(function() {

			self.initiateCarousel(jQuery(this));




		}).hover(function() {
			var item = jQuery(this);
			item.addClass("hover");
		}, function() {
			var item = jQuery(this);
			item.removeClass("hover");
		})

		jQuery("DIV[href]").click(function() {
			var link = jQuery(this).attr("href");

			if (link.toLowerCase().substring(0,4) == "http")
				platformOpenNewWindow(link, "_blank", false);
			else
				window.location = link;
		})


	},

	initializeSpotlightCallout: function(container) {

		var id = container.attr("id");

		var templateHTML = jQuery(".template#spotlightCallout").html();
		templateHTML = templateHTML.replace(/\$\{id\}/g, id);
		templateHTML = templateHTML.replace(/\$\{assetsDirectory\}\//g, finder.getConfig().assetsDirectory);
		var callout = jQuery(templateHTML).appendTo(container);

		var img = jQuery("<img src='" + finder.getConfig().assetsDirectory + "images/spotlights/" + id + "/background.jpg'>");

		img.bind("load", function() {
			var self = jQuery(this);

			self.parent().css({
				width: self.width() + "px",
				height: self.height() + "px"
			})
		})

		jQuery(img).appendTo(jQuery(".background", callout));



	},

	initiateCarousel: function(container) {

		// update the html...

		var carouselId = container.attr("id");
		var href = container.attr("link");

		container.wrapInner("<div class='rotatingAds'></div>");

		container.addClass("carouselWidget");



		var rotatingAds = jQuery(".rotatingAds", container);

		rotatingAds.wrap("<div class='rotatingWrapper'></div>");

		rotatingAds.css("height", (container.height() - 34) + "px");


		var myHeight = rotatingAds.height();
		var eachWidth = container.width();

		// there are divs inside here... grab them and work on them...
		var items = rotatingAds.children();

		rotatingAds.css("width", container.width() * (items.length + 1));

		// do some tricky.. take hte first item.. clone it.. and add it in at the end..
		jQuery(items[0]).clone().appendTo(rotatingAds);

		items = rotatingAds.children();

		items.each(function() {
			var item = jQuery(this);
			var id = item.attr("id");
			item.html("<img class='button' src='" + finder.getConfig().assetsDirectory + "images/spotlights/rotatingAds/" + id + "/buttonimage.png'>");
			item.css("background", "url('" + finder.getConfig().assetsDirectory + "images/spotlights/rotatingAds/" + id + "/background_image.jpg')");
			//item.css("height", myHeight + "px");
			item.css("width", eachWidth + "px");
		})

		jQuery("<div class='heading'></div>").insertBefore(rotatingAds.parent());
		var header = jQuery(".heading", container);

		jQuery("<img src='" + finder.getConfig().assetsDirectory + "images/spotlights/rotatingAds/" + carouselId + "_header.png'>").click(function(event) {
			event.preventDefault();
			event.stopPropagation();
			window.location = href;
		}).appendTo(header);

		jQuery("<div class='dotContainer'></div>").css("width", "50%").appendTo(header);
		var dotContainer = jQuery(".dotContainer", header);

		for (i = 0; i < items.length - 1; i++)
		{
			jQuery("<div class='dot'></div>").appendTo(dotContainer);
		}

		jQuery(dotContainer.children()[0]).addClass("on");

		rotatingAds.attr("selected", "0");
		rotatingAds.attr("paused", "");





		var intervalFunc = function() {

			// get selected..
			var selected = 1 * rotatingAds.attr("selected");
			var children = rotatingAds.children();

			selected = (selected + 1) % children.length;
			rotatingAds.attr("selected", selected);


			if (!finder.isTablet()) {
				rotatingAds.animate({
					"margin-left": (-1 * eachWidth * selected) + "px"
				}, 2000, "easeInOutQuint", function(){
					var me = jQuery(this);
					var meSelected = 1 * me.attr("selected");



					if (meSelected == 0)
						me.css("margin-left", "0px");

				});
			} else {
				rotatingAds.css("-webkit-transition", "all 2000ms ease-in-out");
				rotatingAds.css({
					"-webkit-transform": "translate3d(" + (-1 * eachWidth * selected) + "px, 0, 0)"
				});
				var meSelected = 1 * rotatingAds.attr("selected");
				if (meSelected == 0)
					rotatingAds.css("-webkit-transform", "translate3d(0px, 0px, 0px)");
			}

			if (selected == children.length - 1)
			{
				//last one..
				selected = 0;
			}

			rotatingAds.attr("selected", selected);

			setTimeout(function() {
				jQuery(".dot", dotContainer).removeClass("on")
				jQuery(".dot:nth-child(" + (selected + 1) + ")", dotContainer).addClass("on")
			}, 1000);

		}

		var interval = setInterval(intervalFunc, 5000);

		rotatingAds.hover(function() {
			clearInterval(interval);
		}, function() {
			if (rotatingAds.attr("paused") == "")
				interval = setInterval(intervalFunc, 5000);
		})

		jQuery(".dot", dotContainer).click(function() {
			var dot = jQuery(this);
			rotatingAds.attr("paused", "true");

			var dotNumber = dot.index();

			clearInterval(interval);

			rotatingAds.attr("selected", dotNumber - 1);
			intervalFunc.call();


		})


	}




});

/* ../projects/rtw_plus//randomDirectory/ipad/js/RtwFinder.js */

var RtwFinder = MacysFinder.extend({


    setup: function(){

    	this.defaultPage = this.getConfig().defaultPage;

		/* GLOBAL EVENT HANDLERS GO HERE */
        /*pass it another template*/
		this.poolContainer = $("#pool_wrap #pool_itself", this.parentDiv);
		this.productPool = new ProductPool({
			container : this.poolContainer,
			itemsPerPage : 50//!this.itemsPerPage ? 12 : 8
		});

		var self = this;

		self.votedOnProducts = [];
		self.cookie=unescape($.cookie('VOTED_ON_ITEMS_RTW'))
		self.votedOnProducts= $.map( self.cookie.split(','), function(value){
			return parseInt(value)
		});

		self.attachVotes = function(entryId){

	//		console.log('attachVotes fired!', self.votedOnProducts)

			if( $.inArray(entryId, self.votedOnProducts ) > -1 ){
				var oldVotes = $('.productListing[entryid='+entryId+'] .votingRow .lovethis .voteCount').text();
				if(oldVotes){
					if(isNaN(oldVotes) == true){
						oldVotes = parseInt(oldVotes);
					}
					if( (oldVotes+1) == 1 ){
						var string = ' LOVES THIS';
					}else{
						var string = ' LOVE THIS';
					}
				}else{
					oldVotes = 1;
					var string = ' LOVES THIS';
				}
				$('.productListing[entryid='+entryId+'] .votingRow .lovethis .voteCount').text( (oldVotes) + string);
			}
		}

		$('a[tracker]').live({
			click:function(event){
				finder.skava.handleTracking(finder.getCurrentPage(),finder.getConfig().clicktracking[ $(this).attr('tracker') ]);
			}
		});
		if ($.browser.msie && parseInt($.browser.version) <= 7) {
			$('#nav ul li a').click(function(){
				setTimeout(function(){
					$(window).trigger('hashchange');
				}, 1)
			});
			$('#home ul.sections li a').live('click', 'a', function(){
				setTimeout(function(){
					$(window).trigger('hashchange');
				}, 1)
			});
			$('.finderPage').live('click', 'a.back_arrow', function(){
				setTimeout(function(){
					$(window).trigger('hashchange');
				}, 1)
			});
			$('.finderPage').live('click', 'a.next_arrow', function(){
				setTimeout(function(){
					$(window).trigger('hashchange');
				}, 1)
			});
			$('#footerContainer #pagination .paging').live('click', 'a.previous', function(){
				setTimeout(function(){
					$(window).trigger('hashchange');
				}, 1)
			});
			$('#footerContainer #pagination .paging').live('click', 'a.next', function(){
				setTimeout(function(){
					$(window).trigger('hashchange');
				}, 1)
			});
			$('#pool_wrap #fake_facets').live('click', 'li a', function(){
				setTimeout(function(){
					$(window).trigger('hashchange');
				}, 1)
			});
		}
		$('div.acc .section .shopnow').live('click', function(){
			finder.scrollPage('pool');
		});

		$('#finderContainer').bind('poolPageChanged',function(){
		//	finder.scrollPage('pool');
		});
		//
		//
		// CENTER POPOVERS ON SCROLL/RESIZE
		//
		//
		try {
			document.domain = window.location.host.indexOf("atfingertips.com") > -1 ? "atfingertips.com" : "macys.com";
		} catch(err) {
		}

		var handleWindow = function(){
			try {
				var headerHeight = 211;
				var quickviewHeight = 603;
				var giftPopHeight = 263;
				var scrollTop = $(parent.window.document).scrollTop();
				var finderHeight = $('#finderContainer').height();
				var baseY = scrollTop-headerHeight;
				var windowHeight = $(parent.window).height();
				var centerY = baseY+(windowHeight*.5);
				if (!navigator.userAgent.match(/MSIE\s(?!9.0)/)) {
					finder.getConfig().quickView.position[1] = windowHeight<quickviewHeight ? 40 : Math.round(Math.max(0,Math.min(finderHeight-(quickviewHeight+40),centerY-(quickviewHeight*.5))));
				}
				$('#platformPopupContainer,#platformPopupMask').css('top',finder.getConfig().quickView.position[1]);
			} catch(err) {
				console.error('handleWindow fail');
			}
		}
		try {
//			$(parent.window.document).scroll(handleWindow);
		} catch(err) {
			console.error('handleWindow trigger failed');
		}
		handleWindow();
		/* END GLOBAL EVENT HANDLERS */
		this.startFinder();
    },

	loadMyPool:function(dataKey){
		$('#facetsContainer',this.parentDiv).empty();
		if(finder.getConfig().pageData[dataKey]){
			var data = finder.getConfig().pageData[dataKey];
			this.productPool.reset();
			if(data.hasOwnProperty("shopby")){
				var facet2 = new GenericCheckboxFacet(data.shopby, "all", "shop by");
				this.productPool.addFacet(facet2);
	//			facet2.displayHandler.field.bind("click",function(){self.trackFacet(facet2)});
			} else {
				console.log('NO FACETS');
			}
			// load pool
			this.productPool.loadPool(data.pool);
		}else{
			console.error("can't find "+dataKey);
		}
	},

	pageChanged: function(page){
		this.highlightSelected(page);
	},

	highlightSelected: function(page){

	},

	getConfig: function() {
		return SiteConfig;
	},

	getLook:function(args){
//		finder.skava.handleTracking(finder.getCurrentPage(),finder.getConfig().tracking["shop_"+finder.getCurrentPage().navId]);
		finder.skava.quickView({productId:args.productId});
	},

	initArrows:function()
	{
		var parentDiv = finder.getCurrentPage().parentDiv;

		if($.support.opacity){
			$('#rightArrow, #leftArrow',parentDiv).css({opacity : .4});
		}

		$('#rightArrow, #leftArrow',parentDiv).mouseover(function(){
			if($.support.opacity)
			{
				$(this).stop().animate({opacity : 1});
			} else {
				$(this).stop().show();
			}
		});

		$('#rightArrow, #leftArrow').mouseout(function(){
			if($.support.opacity)
				$(this).stop().animate({opacity : .4});
		});
	},

	initPlusDots:function()
	{
		jQuery.fx.off = !$.support.opacity;
		var parentDiv = finder.getCurrentPage().parentDiv;

		$('DIV.plusDot DIV.dotContent',parentDiv).hide();
		$('DIV.plusDot',parentDiv).fadeOut(0).delay(1000).fadeIn();

		if(!finder.isTablet())
		{
			$('DIV.plusDot',parentDiv).hover(
			function(e){
				finder.skava.handleTracking(finder.getCurrentPage(),finder.getConfig().clicktracking[ $(this).children('.dotSign').attr('tracker') ]);
				$(this).children('DIV.dotContent').show();
				$(this).addClass('opened');
			},
			function(e){
				$(this).children('DIV.dotContent').hide();
				$(this).removeClass('opened');
			});
		}else{
			$('DIV.plusDot',parentDiv).click(function(e){
				if($(this).hasClass('opened')){
					$(this).children('DIV.dotContent').hide();
					$(this).removeClass('opened');
				} else {
					$(this).children('DIV.dotContent').show();
					$(this).addClass('opened');
				}
			});
		}
	}
})


var PoolHelper = Class.extend({

	parseEntry: function(entry) {


		if (entry.pfeed_specialsizes && !(entry.pfeed_specialsizes instanceof Array))
			entry.pfeed_specialsizes = entry.pfeed_specialsizes.split(",");

		if (entry.pfeed_shopcategory && !(entry.pfeed_shopcategory instanceof Array))
			entry.pfeed_shopcategory = entry.pfeed_shopcategory.split(",");

	}

});



/* ../projects/rtw_plus//randomDirectory/ipad/js/RtwHTMLPages.js */
var RtwHTMLPages = {"accessories1":"<div id=\"accessories1\" class=\"finderPage acc\">\n\t<div id=\"additions\">\n\t\t<img src=\"randomDirectory\/images\/accessories1\/additions.png\"\/>\n\t\t<p>\n\t\t\t<a href=\"#\/accessories1\">POINTY-TOE PUMPS<\/a>\n\t\t\t<br\/>\n\t\t\t<a href=\"#\/accessories2\">MINI BAGS<\/a>\n\t\t\t<br\/>\n\t\t\t<a href=\"#\/accessories3\">TALL BOOTS<\/a>\n\t\t\t<br\/>\n\t\t\t<a href=\"#\/accessories4\">WILD JEWELRY<\/a>\n\t\t\t<br\/>\n\t\t\t<a href=\"#\/accessories5\">TIMELESS WATCHES<\/a>\n\t\t<\/p>\n\t<\/div>\n\t<div class=\"section\">\n\t\t<h3>POINTY-TOE PUMPS<\/h3>\n\t\t<p>sharpen any ensemble with <\/br> a pair of pointed heels.<\/p>\n\t\t<a class=\"shopnow\" tracker=\"pointytoepumps\">SHOP NOW &#9658;<\/a>\n\t<\/div>\n\t<a href=\"#\/lookofleather2\" class=\"back_arrow\"><img src=\"randomDirectory\/images\/nav\/back.png\"\/><\/a>\n\t<a href=\"#\/accessories2\" class=\"next_arrow\"><img src=\"randomDirectory\/images\/nav\/next.png\"\/><\/a>\n<\/div>","accessories2":"<div id=\"accessories2\" class=\"finderPage acc\">\n\t<div id=\"additions\">\n\t\t<img src=\"randomDirectory\/images\/accessories1\/additions.png\"\/>\n\t\t<p>\n\t\t\t<a href=\"#\/accessories1\">POINTY-TOE PUMPS<\/a>\n\t\t\t<br\/>\n\t\t\t<a href=\"#\/accessories2\">MINI BAGS<\/a>\n\t\t\t<br\/>\n\t\t\t<a href=\"#\/accessories3\">TALL BOOTS<\/a>\n\t\t\t<br\/>\n\t\t\t<a href=\"#\/accessories4\">WILD JEWELRY<\/a>\n\t\t\t<br\/>\n\t\t\t<a href=\"#\/accessories5\">TIMELESS WATCHES<\/a>\n\t\t<\/p>\n\t<\/div>\n\t<div class=\"section\">\n\t\t<h3>MINI BAGS<\/h3>\n\t\t<p>downsize your daily carryall with a smarter, smaller handbag.<\/p>\n\t\t<a class=\"shopnow\" tracker=\"minibags\">SHOP NOW &#9658;<\/a>\n\t<\/div>\n\t<a href=\"#\/accessories1\" class=\"back_arrow\"><img src=\"randomDirectory\/images\/nav\/back.png\"\/><\/a>\n\t<a href=\"#\/accessories3\" class=\"next_arrow\"><img src=\"randomDirectory\/images\/nav\/next.png\"\/><\/a>\n<\/div>","accessories3":"<div id=\"accessories3\" class=\"finderPage acc\">\n\t<div id=\"additions\">\n\t\t<img src=\"randomDirectory\/images\/accessories1\/additions.png\"\/>\n\t\t<p>\n\t\t\t<a href=\"#\/accessories1\">POINTY-TOE PUMPS<\/a>\n\t\t\t<br\/>\n\t\t\t<a href=\"#\/accessories2\">MINI BAGS<\/a>\n\t\t\t<br\/>\n\t\t\t<a href=\"#\/accessories3\">TALL BOOTS<\/a>\n\t\t\t<br\/>\n\t\t\t<a href=\"#\/accessories4\">WILD JEWELRY<\/a>\n\t\t\t<br\/>\n\t\t\t<a href=\"#\/accessories5\">TIMELESS WATCHES<\/a>\n\t\t<\/p>\n\t<\/div>\n\t<div class=\"section\">\n\t\t<h3>TALL BOOTS<\/h3>\n\t\t<p>lengthen your legs with these fall classics.<\/p>\n\t\t<a class=\"shopnow\" tracker=\"tallboots\">SHOP NOW &#9658;<\/a>\n\t<\/div>\n\t<a href=\"#\/accessories2\" class=\"back_arrow\"><img src=\"randomDirectory\/images\/nav\/back.png\"\/><\/a>\n\t<a href=\"#\/accessories4\" class=\"next_arrow\"><img src=\"randomDirectory\/images\/nav\/next.png\"\/><\/a>\n<\/div>","accessories4":"<div id=\"accessories4\" class=\"finderPage acc\">\n\t<div id=\"additions\">\n\t\t<img src=\"randomDirectory\/images\/accessories1\/additions.png\"\/>\n\t\t<p>\n\t\t\t<a href=\"#\/accessories1\">POINTY-TOE PUMPS<\/a>\n\t\t\t<br\/>\n\t\t\t<a href=\"#\/accessories2\">MINI BAGS<\/a>\n\t\t\t<br\/>\n\t\t\t<a href=\"#\/accessories3\">TALL BOOTS<\/a>\n\t\t\t<br\/>\n\t\t\t<a href=\"#\/accessories4\">WILD JEWELRY<\/a>\n\t\t\t<br\/>\n\t\t\t<a href=\"#\/accessories5\">TIMELESS WATCHES<\/a>\n\t\t<\/p>\n\t<\/div>\n\t<div class=\"section\">\n\t\t<h3>WILD JEWELRY<\/h3>\n\t\t<p>explore the exotic side of accessorizing with animal-inspired jewelry.<\/p>\n\t\t<a class=\"shopnow\" tracker=\"wildjewelry\">SHOP NOW &#9658;<\/a>\n\t<\/div>\n\t<a href=\"#\/accessories3\" class=\"back_arrow\"><img src=\"randomDirectory\/images\/nav\/back.png\"\/><\/a>\n\t<a href=\"#\/accessories5\" class=\"next_arrow\"><img src=\"randomDirectory\/images\/nav\/next.png\"\/><\/a>\n<\/div>","accessories5":"<div id=\"accessories5\" class=\"finderPage acc\">\n    <div id=\"additions\">\n        <img src=\"randomDirectory\/images\/accessories1\/additions.png\"\/>\n        <p>\n            <a href=\"#\/accessories1\">POINTY-TOE PUMPS<\/a>\n            <br\/>\n            <a href=\"#\/accessories2\">MINI BAGS<\/a>\n            <br\/>\n            <a href=\"#\/accessories3\">TALL BOOTS<\/a>\n            <br\/>\n            <a href=\"#\/accessories4\">WILD JEWELRY<\/a>\n            <br\/>\n            <a href=\"#\/accessories5\">TIMELESS WATCHES<\/a>\n        <\/p>\n    <\/div>\n    <div class=\"section\">\n        <h3>TIMELESS WATCHES<\/h3>\n        <p>switch out a bracelet for a statement-making timepiece.<\/p>\n        <a class=\"shopnow\" tracker=\"timelesswatches\">SHOP NOW &#9658;<\/a>\n    <\/div>\n\t<a href=\"#\/accessories4\" class=\"back_arrow\"><img src=\"randomDirectory\/images\/nav\/back.png\"\/><\/a>\n\t<a href=\"#\/home\" class=\"next_arrow\"><img src=\"randomDirectory\/images\/nav\/next.png\"\/><\/a>\n<\/div>","blackandwhite":"<div id=\"blackandwhite\" class=\"finderPage\">\n\t<img id=\"onestar\" src=\"randomDirectory\/images\/blackandwhite\/onestar.png\"\/>\n\t<img id=\"trendreport\" src=\"randomDirectory\/images\/blackandwhite\/trendreport.png\"\/>\n\t<div class=\"plusDot\" id=\"plusDot1\">\n\t\t<div class=\"dotSign\" tracker=\"majormoto\"><\/div>\n\t\t<div class=\"dotContent\">\n\t\t\t<h4>IN PRINT<\/h4>\n\t\t\t<p>soften up an all-black outfit with a boldly patterned cardigan. a stack of bangles strikes the right balance of polished and whimsical.<\/p>\n\t\t\t<a class=\"minusGetLook\" tracker=\"majormoto_shop\" href=\"javascript:void(0)\" onclick=\"finder.getLook({productId:'1040235'});\">SHOP THIS LOOK &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusShare\" tracker=\"majormoto_share\" href=\"javascript:void(0)\" role=\"skavaInteropShare\" config=\"trend\" trend=\"blackandwhite\">share this &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusSharePin\" tracker=\"majormoto_pin\" href=\"javascript:void(0)\" role=\"skavaInteropSharePinterest\" config=\"trend\" trend=\"blackandwhite\" pinicon=\"randomDirectory\/images\/pinicons\/majormoto.jpg\">pin it &#9658;<\/a>\n\t\t<\/div>\n\t<\/div>\n\t<div class=\"plusDot\" id=\"plusDot2\">\n\t\t<div class=\"dotSign\" tracker=\"highcontrast\"><\/div>\n\t\t<div class=\"dotContent flip\">\n\t\t\t<h4>BEST DRESSED<\/h4>\n\t\t\t<p>a dress slulpts your look with well placed colorblock.shine on with a cuff bracelet and a patent belt.<\/p>\n\t\t\t<a class=\"minusGetLook\" tracker=\"highcontrast_shop\" href=\"javascript:void(0)\" onclick=\"finder.getLook({productId:'1040243'});\">SHOP THIS LOOK &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusShare\" tracker=\"highcontrast_share\" href=\"javascript:void(0)\" role=\"skavaInteropShare\" config=\"trend\" trend=\"blackandwhite\">share this &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusSharePin\" tracker=\"highcontrast_pin\" href=\"javascript:void(0)\" role=\"skavaInteropSharePinterest\" config=\"trend\" trend=\"blackandwhite\" pinicon=\"randomDirectory\/images\/pinicons\/highcontrast.jpg\">pin it &#9658;<\/a>\n\t\t<\/div>\n\t<\/div>\n\t<a href=\"#\/moderndresses2\" class=\"back_arrow\"><img src=\"randomDirectory\/images\/nav\/back.png\"\/><\/a>\n\t<a href=\"#\/blackandwhite2\" class=\"next_arrow\"><img src=\"randomDirectory\/images\/nav\/next.png\"\/><\/a>\n<\/div>","blackandwhite2":"<div id=\"blackandwhite2\" class=\"finderPage\">\n\t<img id=\"trendreport\" src=\"randomDirectory\/images\/blackandwhite2\/trendreport.png\"\/>\n\t<div class=\"plusDot\" id=\"plusDot1\">\n\t\t<div class=\"dotSign\" tracker=\"worksmart\"><\/div>\n\t\t<div class=\"dotContent\">\n\t\t\t<h4>HIGH CONTRAST<\/h4>\n\t\t\t<p>the relaxed fit of a surplice-neck top balances out skinny colorblocked pants. open-toe booties give this look legs.<\/p>\n\t\t\t<a class=\"minusGetLook\" tracker=\"worksmart_shop\" href=\"javascript:void(0)\" onclick=\"finder.getLook({productId:'1040245'});\">SHOP THIS LOOK &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusShare\" tracker=\"worksmart_share\" href=\"javascript:void(0)\" role=\"skavaInteropShare\" config=\"trend\" trend=\"blackandwhite\">share this &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusSharePin\" tracker=\"worksmart_pin\" href=\"javascript:void(0)\" role=\"skavaInteropSharePinterest\" config=\"trend\" trend=\"blackandwhite\" pinicon=\"randomDirectory\/images\/pinicons\/worksmart.jpg\">pin it &#9658;<\/a>\n\t\t<\/div>\n\t<\/div>\n\t<div class=\"plusDot\" id=\"plusDot2\">\n\t\t<div class=\"dotSign\" tracker=\"beyondbasic\"><\/div>\n\t\t<div class=\"dotContent\">\n\t\t\t<h4>FULL SPECTRUM<\/h4>\n\t\t\t<p>opposites attract: stripes work well when your color palette is this simple. glam up the pumps.<\/p>\n\t\t\t<a class=\"minusGetLook\" tracker=\"beyondbasic_shop\" href=\"javascript:void(0)\" onclick=\"finder.getLook({productId:'1040258'});\">SHOP THIS LOOK &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusShare\" tracker=\"beyondbasic_share\" href=\"javascript:void(0)\" role=\"skavaInteropShare\" config=\"trend\" trend=\"blackandwhite\">share this &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusSharePin\" tracker=\"beyondbasic_pin\" href=\"javascript:void(0)\" role=\"skavaInteropSharePinterest\" config=\"trend\" trend=\"blackandwhite\" pinicon=\"randomDirectory\/images\/pinicons\/beyondbasics.jpg\">pin it &#9658;<\/a>\n\t\t<\/div>\n\t<\/div>\n\t<div class=\"plusDot\" id=\"plusDot3\">\n\t\t<div class=\"dotSign\" tracker=\"skirtedissue\"><\/div>\n\t\t<div class=\"dotContent\">\n\t\t\t<h4>WORK SMART<\/h4>\n\t\t\t<p>an eye-catching jumpsuit in black and white goes from desk to dinner with a statement necklace and waist-enhancing belt.<\/p>\n\t\t\t<a class=\"minusGetLook\" tracker=\"skirtedissue_shop\" href=\"javascript:void(0)\" onclick=\"finder.getLook({productId:'1040260'});\">SHOP THIS LOOK &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusShare\" tracker=\"skirtedissue_share\" href=\"javascript:void(0)\" role=\"skavaInteropShare\" config=\"trend\" trend=\"blackandwhite\">share this &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusSharePin\" tracker=\"skirtedissue_pin\" href=\"javascript:void(0)\" role=\"skavaInteropSharePinterest\" config=\"trend\" trend=\"blackandwhite\" pinicon=\"randomDirectory\/images\/pinicons\/skirtedissue.jpg\">pin it &#9658;<\/a>\n\t\t<\/div>\n\t<\/div>\n    <!--\n\t<div class=\"plusDot\" id=\"plusDot4\">\n\t\t<div class=\"dotSign\" tracker=\"majormoto\"><\/div>\n\t\t<div class=\"dotContent flip\">\n\t\t\t<h4>MAJOR MOTO<\/h4>\n\t\t\t<p>for a cooler take on black &amp; white, try colorblocking and stripes together. glamour-girl sunglasses prove the future's bright for this look.<\/p>\n\t\t\t<a class=\"minusGetLook\" tracker=\"majormoto_shop\" href=\"javascript:void(0)\" onclick=\"finder.getLook({productId:'1040235'});\">SHOP THIS LOOK &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusShare\" tracker=\"majormoto_share\" href=\"javascript:void(0)\" role=\"skavaInteropShare\" config=\"trend\" trend=\"blackandwhite\">share this &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusSharePin\" tracker=\"majormoto_pin\" href=\"javascript:void(0)\" role=\"skavaInteropSharePinterest\" config=\"trend\" trend=\"blackandwhite\" pinicon=\"randomDirectory\/images\/pinicons\/majormoto2.jpg\">pin it &#9658;<\/a>\n\t\t<\/div>\n\t<\/div>-->\n\t<a href=\"#\/blackandwhite\" class=\"back_arrow\"><img src=\"randomDirectory\/images\/nav\/back.png\"\/><\/a>\n\t<a href=\"#\/jacketspreferred\" class=\"next_arrow\"><img src=\"randomDirectory\/images\/nav\/next.png\"\/><\/a>\n<\/div>","home":"<div id=\"home\" class=\"finderPage\">\n\t<img id=\"onestar\" src=\"randomDirectory\/images\/home\/fall_onestar.png\"\/>\n\t<img id=\"trendreport\" src=\"randomDirectory\/images\/home\/fall_trendreport.png\"\/>\n\t<ul class=\"sections\">\n\t\t<li>\n\t\t\t<a href=\"#\/moderndresses\">\n\t\t\t\t<img src=\"randomDirectory\/images\/home\/fall_thumbs\/moderndresses.png\"\/>\n\t\t\t\t<p>Modern Dresses<\/p>\n\t\t\t<\/a>\n\t\t<\/li>\n\t\t<li>\n\t\t\t<a href=\"#\/blackandwhite\">\n\t\t\t\t<img src=\"randomDirectory\/images\/home\/fall_thumbs\/blackandwhite.png\"\/>\n\t\t\t\t<p>Black and White<\/p>\n\t\t\t<\/a>\n\t\t<\/li>\n\t\t<li>\n\t\t\t<a href=\"#\/jacketspreferred\">\n\t\t\t\t<img src=\"randomDirectory\/images\/home\/fall_thumbs\/jacketspreferred.png\"\/>\n\t\t\t\t<p>Jackets Preferred<\/p>\n\t\t\t<\/a>\n\t\t<\/li>\n\t\t<li>\n\t\t\t<a href=\"#\/lookofleather\">\n\t\t\t\t<img src=\"randomDirectory\/images\/home\/fall_thumbs\/lookofleather.png\"\/>\n\t\t\t\t<p>The Look of Leather<\/p>\n\t\t\t<\/a>\n\t\t<\/li>\n\t\t<li>\n\t\t\t<a href=\"#\/accessories1\">\n\t\t\t\t<img src=\"randomDirectory\/images\/home\/fall_thumbs\/accessories.png\"\/>\n\t\t\t\t<p>Accessories<\/p>\n\t\t\t<\/a>\n\t\t<\/li>\n\t\t<div class=\"clear\"><\/div>\n\t<\/ul>\n\t\n    <a href=\"#\/accessories5\" class=\"back_arrow\"><img src=\"randomDirectory\/images\/nav\/back.png\"\/><\/a>\n\t<a href=\"#\/moderndresses\" class=\"next_arrow\"><img src=\"randomDirectory\/images\/nav\/next.png\"\/><\/a>\n\t\n<\/div>","jacketspreferred":"<div id=\"jacketspreferred\" class=\"finderPage\">\n\t<img id=\"onestar\" src=\"randomDirectory\/images\/jacketspreferred\/onestar.png\"\/>\n\t<img id=\"trendreport\" src=\"randomDirectory\/images\/jacketspreferred\/trendreport.png\"\/>\n\t<div class=\"plusDot\" id=\"plusDot1\">\n\t\t<div class=\"dotSign\" tracker=\"neautralstate\"><\/div>\n\t\t<div class=\"dotContent\">\n\t\t\t<h4>MILITARY TIME<\/h4>\n\t\t\t<p>inspired by a right-now utility vest, a mixed-media jacket with pleather sleeves is a weekend must. mix in skinny pants and a chunky skarf for downtown-ready style.<\/p>\n\t\t\t<a class=\"minusGetLook\" tracker=\"neautralstate_shop\" href=\"javascript:void(0)\" onclick=\"finder.getLook({productId:'1040288'});\">SHOP THIS LOOK &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusShare\" tracker=\"neautralstate_share\" href=\"javascript:void(0)\" role=\"skavaInteropShare\" config=\"trend\" trend=\"jacketspreferred\">share this &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusSharePin\" tracker=\"neautralstate_pin\" href=\"javascript:void(0)\" role=\"skavaInteropSharePinterest\" config=\"trend\" trend=\"jacketspreferred\" pinicon=\"randomDirectory\/images\/pinicons\/neutralstate.jpg\">pin it &#9658;<\/a>\n\t\t<\/div>\n\t<\/div>\n\t<div class=\"plusDot\" id=\"plusDot2\">\n\t\t<div class=\"dotSign\" tracker=\"quietingcircle\"><\/div>\n\t\t<div class=\"dotContent\">\n\t\t\t<h4>MIX MASTER<\/h4>\n\t\t\t<p>faux-leather sleeves make a major impact on a jacket with goldtone hardware. take it to work with a graphic-print top, slim skirt and pumps.<\/p>\n\t\t\t<a class=\"minusGetLook\" tracker=\"quietingcircle_shop\" href=\"javascript:void(0)\" onclick=\"finder.getLook({productId:'1040292'});\">SHOP THIS LOOK &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusShare\" tracker=\"quietingcircle_share\" href=\"javascript:void(0)\" role=\"skavaInteropShare\" config=\"trend\" trend=\"jacketspreferred\">share this &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusSharePin\" tracker=\"quietingcircle_pin\" href=\"javascript:void(0)\" role=\"skavaInteropSharePinterest\" config=\"trend\" trend=\"jacketspreferred\" pinicon=\"randomDirectory\/images\/pinicons\/quiltingcircle.jpg\">pin it &#9658;<\/a>\n\t\t<\/div>\n\t<\/div>\n\n    <div class=\"plusDot\" id=\"plusDot3\">\n        <div class=\"dotSign\" tracker=\"quietingcircle\"><\/div>\n        <div class=\"dotContent flip\">\n            <h4>NEW SCHOOL<\/h4>\n            <p>an always-chic blazer in neutral plaid looks fresh paired with a pop of red. ace the prep-casual vibe with a chain-link necklace and dark-wash jeans.<\/p>\n            <a class=\"minusGetLook\" tracker=\"quietingcircle_shop\" href=\"javascript:void(0)\" onclick=\"finder.getLook({productId:'1040292'});\">SHOP THIS LOOK &#9658;<\/a>\n            <div class=\"spacer\"><\/div>\n            <a class=\"minusShare\" tracker=\"quietingcircle_share\" href=\"javascript:void(0)\" role=\"skavaInteropShare\" config=\"trend\" trend=\"jacketspreferred\">share this &#9658;<\/a>\n            <div class=\"spacer\"><\/div>\n            <a class=\"minusSharePin\" tracker=\"quietingcircle_pin\" href=\"javascript:void(0)\" role=\"skavaInteropSharePinterest\" config=\"trend\" trend=\"jacketspreferred\" pinicon=\"randomDirectory\/images\/pinicons\/quiltingcircle.jpg\">pin it &#9658;<\/a>\n        <\/div>\n    <\/div>\n\n\t<a href=\"#\/blackandwhite2\" class=\"back_arrow\"><img src=\"randomDirectory\/images\/nav\/back.png\"\/><\/a>\n\t<a href=\"#\/lookofleather\" class=\"next_arrow\"><img src=\"randomDirectory\/images\/nav\/next.png\"\/><\/a>\n<\/div>","jacketspreferred2":"<div id=\"jacketspreferred2\" class=\"finderPage\">\n\t<img id=\"trendreport\" src=\"randomDirectory\/images\/jacketspreferred2\/trendreport.png\"\/>\n\t<div class=\"plusDot\" id=\"plusDot1\">\n\t\t<div class=\"dotSign\" tracker=\"tweedit\"><\/div>\n\t\t<div class=\"dotContent\">\n\t\t\t<h4>TWEED IT<\/h4>\n\t\t\t<p>dress up distressed jeans with a textured cropped jacket and studiously cool loafers. a structured patent bag adds a glossy flash of shine.<\/p>\n\t\t\t<a class=\"minusGetLook\" tracker=\"tweedit_shop\" href=\"javascript:void(0)\" onclick=\"finder.getLook({productId:'1040293'});\">SHOP THIS LOOK &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusShare\" tracker=\"tweedit_share\" href=\"javascript:void(0)\" role=\"skavaInteropShare\" config=\"trend\" trend=\"jacketspreferred\">share this &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusSharePin\" tracker=\"tweedit_pin\" href=\"javascript:void(0)\" role=\"skavaInteropSharePinterest\" config=\"trend\" trend=\"jacketspreferred\" pinicon=\"randomDirectory\/images\/pinicons\/tweedit.jpg\">pin it &#9658;<\/a>\n\t\t<\/div>\n\t<\/div>\n\t<div class=\"plusDot\" id=\"plusDot2\">\n\t\t<div class=\"dotSign\" tracker=\"chicweave\"><\/div>\n\t\t<div class=\"dotContent flip\">\n\t\t\t<h4>CHIC WEAVE<\/h4>\n\t\t\t<p>go fashion-forward at the office in a jewel-toned nubby-knit topper with leather-look sleeves. pair it with basic black separates for standout style.<\/p>\n\t\t\t<a class=\"minusGetLook\" tracker=\"chicweave_shop\" href=\"javascript:void(0)\" onclick=\"finder.getLook({productId:'1040294'});\">SHOP THIS LOOK &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusShare\" tracker=\"chicweave_share\" href=\"javascript:void(0)\" role=\"skavaInteropShare\" config=\"trend\" trend=\"jacketspreferred\">share this &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusSharePin\" tracker=\"chicweave_pin\" href=\"javascript:void(0)\" role=\"skavaInteropSharePinterest\" config=\"trend\" trend=\"jacketspreferred\" pinicon=\"randomDirectory\/images\/pinicons\/chicweave.jpg\">pin it &#9658;<\/a>\n\t\t<\/div>\n\t<\/div>\n\t<a href=\"#\/jacketspreferred\" class=\"back_arrow\"><img src=\"randomDirectory\/images\/nav\/back.png\"\/><\/a>\n\t<a href=\"#\/lookofleather\" class=\"next_arrow\"><img src=\"randomDirectory\/images\/nav\/next.png\"\/><\/a>\n<\/div>","lookofleather":"<div id=\"lookofleather\" class=\"finderPage\">\n\t<img id=\"onestar\" src=\"randomDirectory\/images\/lookofleather\/onestar.png\"\/>\n\t<img id=\"trendreport\" src=\"randomDirectory\/images\/lookofleather\/trendreport.png\"\/>\n\t<div class=\"plusDot\" id=\"plusDot1\">\n\t\t<div class=\"dotSign\" tracker=\"pipinghot\"><\/div>\n\t\t<div class=\"dotContent\">\n\t\t\t<h4>HOT POCKETS<\/h4>\n\t\t\t<p>black pleather pockets stand out on a burgundy tunic. add more edge with shiny leggings and studded motorcycle boots.<\/p>\n\t\t\t<a class=\"minusGetLook\" tracker=\"pipinghot_shop\" href=\"javascript:void(0)\" onclick=\"finder.getLook({productId:'1040455'});\">SHOP THIS LOOK &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusShare\" tracker=\"pipinghot_share\" href=\"javascript:void(0)\" role=\"skavaInteropShare\" config=\"trend\" trend=\"lookofleather\">share this &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusSharePin\" tracker=\"pipinghot_pin\" href=\"javascript:void(0)\" role=\"skavaInteropSharePinterest\" config=\"trend\" trend=\"lookofleather\" pinicon=\"randomDirectory\/images\/pinicons\/pipinghot.jpg\">pin it &#9658;<\/a>\n\t\t<\/div>\n\t<\/div>\n\t<div class=\"plusDot\" id=\"plusDot2\">\n\t\t<div class=\"dotSign\" tracker=\"leatherlace\"><\/div>\n\t\t<div class=\"dotContent flip\">\n\t\t\t<h4>MIXED MESSAGES<\/h4>\n\t\t\t<p>rocker meets movie star in a mixed-media dress. bold gold jewelry primes this look for the spotlight.<\/p>\n\t\t\t<a class=\"minusGetLook\" tracker=\"leatherlace_shop\" href=\"javascript:void(0)\" onclick=\"finder.getLook({productId:'1040361'});\">SHOP THIS LOOK &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusShare\" tracker=\"leatherlace_share\" href=\"javascript:void(0)\" role=\"skavaInteropShare\" config=\"trend\" trend=\"lookofleather\">share this &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusSharePin\" tracker=\"leatherlace_pin\" href=\"javascript:void(0)\" role=\"skavaInteropSharePinterest\" config=\"trend\" trend=\"lookofleather\" pinicon=\"randomDirectory\/images\/pinicons\/pleatherlace.jpg\">pin it &#9658;<\/a>\n\t\t<\/div>\n\t<\/div>\n\t<a href=\"#\/jacketspreferred\" class=\"back_arrow\"><img src=\"randomDirectory\/images\/nav\/back.png\"\/><\/a>\n\t<a href=\"#\/lookofleather2\" class=\"next_arrow\"><img src=\"randomDirectory\/images\/nav\/next.png\"\/><\/a>\n<\/div>","lookofleather2":"<div id=\"lookofleather2\" class=\"finderPage\">\n\t<img id=\"trendreport\" src=\"randomDirectory\/images\/lookofleather2\/trendreport.png\"\/>\n\t<div class=\"plusDot\" id=\"plusDot1\">\n\t\t<div class=\"dotSign\" tracker=\"sleeksleeves\"><\/div>\n\t\t<div class=\"dotContent\">\n\t\t\t<h4>VESTED INTEREST<\/h4>\n\t\t\t<p>jeans and a printed shirt bring out the laid-back side of a faux-leather vest. glam sunglasses prove the future's bright for this look.<\/p>\n\t\t\t<a class=\"minusGetLook\" tracker=\"sleeksleeves_shop\" href=\"javascript:void(0)\" onclick=\"finder.getLook({productId:'1040363'});\">SHOP THIS LOOK &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusShare\" tracker=\"sleeksleeves_share\" href=\"javascript:void(0)\" role=\"skavaInteropShare\" config=\"trend\" trend=\"lookofleather\">share this &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusSharePin\" tracker=\"sleeksleeves_pin\" href=\"javascript:void(0)\" role=\"skavaInteropSharePinterest\" config=\"trend\" trend=\"lookofleather\" pinicon=\"randomDirectory\/images\/pinicons\/sleeksleeves.jpg\">pin it &#9658;<\/a>\n\t\t<\/div>\n\t<\/div>\n\n\t<div class=\"plusDot\" id=\"plusDot3\">\n\t\t<div class=\"dotSign\" tracker=\"lasersharp\"><\/div>\n\t\t<div class=\"dotContent flip\">\n\t\t\t<h4>EVENING NEWS<\/h4>\n\t\t\t<p>night is right for faux-leather accents. pair a split-sleeve blouse with tuxedo-style skinnies. then push the envelop with a white clutch.<\/p>\n\t\t\t<a class=\"minusGetLook\" tracker=\"lasersharp_shop\" href=\"javascript:void(0)\" onclick=\"finder.getLook({productId:'1040373'});\">SHOP THIS LOOK &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusShare\" tracker=\"lasersharp_share\" href=\"javascript:void(0)\" role=\"skavaInteropShare\" config=\"trend\" trend=\"lookofleather\">share this &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusSharePin\" tracker=\"lasersharp_pin\" href=\"javascript:void(0)\" role=\"skavaInteropSharePinterest\" config=\"trend\" trend=\"lookofleather\" pinicon=\"randomDirectory\/images\/pinicons\/lasersharp.jpg\">pin it &#9658;<\/a>\n\t\t<\/div>\n\t<\/div>\n\n\t<a href=\"#\/lookofleather\" class=\"back_arrow\"><img src=\"randomDirectory\/images\/nav\/back.png\"\/><\/a>\n\t<a href=\"#\/accessories1\" class=\"next_arrow\"><img src=\"randomDirectory\/images\/nav\/next.png\"\/><\/a>\n<\/div>","moderndresses":"<div id=\"moderndresses\" class=\"finderPage\">\n\t<img id=\"onestar\" src=\"randomDirectory\/images\/moderndresses\/onestar.png\"\/>\n\t<img id=\"trendreport\" src=\"randomDirectory\/images\/moderndresses\/trendreport.png\"\/>\n\t<div class=\"plusDot\" id=\"plusDot1\">\n\t\t<div class=\"dotSign\" tracker=\"wellred\"><\/div>\n\t\t<div class=\"dotContent flip\">\n\t\t\t<h4>BLACK MAGIC<\/h4>\n\t\t\t<p>an LBD becomes a statement piece thanks to studs at the shoulders. rev it up with red-hot pumps and enamel bangles.<\/p>\n\t\t\t<a class=\"minusGetLook\" tracker=\"wellred_shop\" href=\"javascript:void(0)\" onclick=\"finder.getLook({productId:'1040084'});\">SHOP THIS LOOK &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusShare\" tracker=\"wellred_share\" href=\"javascript:void(0)\" role=\"skavaInteropShare\" config=\"trend\" trend=\"moderndresses\">share this &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusSharePin\" tracker=\"wellred_pin\" href=\"javascript:void(0)\" role=\"skavaInteropSharePinterest\" config=\"trend\" trend=\"moderndresses\" pinicon=\"randomDirectory\/images\/pinicons\/wellred.jpg\">pin it &#9658;<\/a>\n\t\t<\/div>\n\t<\/div>\n\t<div class=\"plusDot\" id=\"plusDot2\">\n\t\t<div class=\"dotSign\" tracker=\"redhot\"><\/div>\n\t\t<div class=\"dotContent flip\">\n\t\t\t<h4>FINE BURGUNDY<\/h4>\n\t\t\t<p>maroon and black make a dramatic pair on this pleather-trim dress. colorblocked sandals add a hue attitude.<\/p>\n\t\t\t<a class=\"minusGetLook\" tracker=\"redhot_shop\" href=\"javascript:void(0)\" onclick=\"finder.getLook({productId:'1040088'});\">SHOP THIS LOOK &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusShare\" tracker=\"redhot_share\" href=\"javascript:void(0)\" role=\"skavaInteropShare\" config=\"trend\" trend=\"moderndresses\">share this &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusSharePin\" tracker=\"redhot_pin\" href=\"javascript:void(0)\" role=\"skavaInteropSharePinterest\" config=\"trend\" trend=\"moderndresses\" pinicon=\"randomDirectory\/images\/pinicons\/redhot.jpg\">pin it &#9658;<\/a>\n\t\t<\/div>\n\t<\/div>\n\t<a href=\"#\/home\" class=\"back_arrow\"><img src=\"randomDirectory\/images\/nav\/back.png\"\/><\/a>\n\t<a href=\"#\/moderndresses2\" class=\"next_arrow\"><img src=\"randomDirectory\/images\/nav\/next.png\"\/><\/a>\n<\/div>","moderndresses2":"<div id=\"moderndresses2\" class=\"finderPage\">\n\t<img id=\"trendreport\" src=\"randomDirectory\/images\/moderndresses2\/trendreport.png\"\/>\n\t<div class=\"plusDot\" id=\"plusDot1\">\n\t\t<div class=\"dotSign\" tracker=\"shapeshift\"><\/div>\n\t\t<div class=\"dotContent\">\n\t\t\t<h4>ELECTRIC EDGE<\/h4>\n\t\t\t<p>instant wow factor: faux-leather insets offset a curve-hugging chartreuse sheath. peep-toe booties with glided trim infuse subtle glamour.<\/p>\n\t\t\t<a class=\"minusGetLook\" tracker=\"shapeshift_shop\" href=\"javascript:void(0)\" onclick=\"finder.getLook({productId:'1040090'});\">SHOP THIS LOOK &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusShare\" tracker=\"shapeshift_share\" href=\"javascript:void(0)\" role=\"skavaInteropShare\" config=\"trend\" trend=\"moderndresses\">share this &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusSharePin\" tracker=\"shapeshift_pin\" href=\"javascript:void(0)\" role=\"skavaInteropSharePinterest\" config=\"trend\" trend=\"moderndresses\" pinicon=\"randomDirectory\/images\/pinicons\/shapeshift.jpg\">pin it &#9658;<\/a>\n\t\t<\/div>\n\t<\/div>\n\t<div class=\"plusDot\" id=\"plusDot2\">\n\t\t<div class=\"dotSign\" tracker=\"scarletstripes\"><\/div>\n\t\t<div class=\"dotContent\">\n\t\t\t<h4>FINE BURGUNDY<\/h4>\n\t\t\t<p>maroon and black make a dramatic pair on this pleather-trim dress. colorblocked sandals add a hue attitude.<\/p>\n\t\t\t<a class=\"minusGetLook\" tracker=\"scarletstripes_shop\" href=\"javascript:void(0)\" onclick=\"finder.getLook({productId:'1040092'});\">SHOP THIS LOOK &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusShare\" tracker=\"scarletstripes_share\" href=\"javascript:void(0)\" role=\"skavaInteropShare\" config=\"trend\" trend=\"moderndresses\">share this &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusSharePin\" tracker=\"scarletstripes_pin\" href=\"javascript:void(0)\" role=\"skavaInteropSharePinterest\" config=\"trend\" trend=\"moderndresses\" pinicon=\"randomDirectory\/images\/pinicons\/scarletstripes.jpg\">pin it &#9658;<\/a>\n\t\t<\/div>\n\t<\/div>\n\t<div class=\"plusDot\" id=\"plusDot3\">\n\t\t<div class=\"dotSign\" tracker=\"fineprint\"><\/div>\n\t\t<div class=\"dotContent flip\">\n\t\t\t<h4>BLUE PERIOD<\/h4>\n\t\t\t<p>a flattering A-line goes from basic to bold with colorblocking. architectural pumps in rich turquoise add an extra pop of color. <\/p>\n\t\t\t<a class=\"minusGetLook\" tracker=\"fineprint_shop\" href=\"javascript:void(0)\" onclick=\"finder.getLook({productId:'1040095'});\">SHOP THIS LOOK &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusShare\" tracker=\"fineprint_share\" href=\"javascript:void(0)\" role=\"skavaInteropShare\" config=\"trend\" trend=\"moderndresses\">share this &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusSharePin\" tracker=\"fineprint_pin\" href=\"javascript:void(0)\" role=\"skavaInteropSharePinterest\" config=\"trend\" trend=\"moderndresses\" pinicon=\"randomDirectory\/images\/pinicons\/fineprint.jpg\">pin it &#9658;<\/a>\n\t\t<\/div>\n\t<\/div>\n\t<!--<div class=\"plusDot\" id=\"plusDot4\">\n\t\t<div class=\"dotSign\" tracker=\"redhot\"><\/div>\n\t\t<div class=\"dotContent flip\">\n\t\t\t<h4>RED HOT<\/h4>\n\t\t\t<p>instant wow factor: cutouts, colorblocking and studs highlight a curve-hugging sheath. ankle strap sandals amp up the look.<\/p>\n\t\t\t<a class=\"minusGetLook\" tracker=\"redhot_shop\" href=\"javascript:void(0)\" onclick=\"finder.getLook({productId:'1040088'});\">SHOP THIS LOOK &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusShare\" tracker=\"redhot_share\" href=\"javascript:void(0)\" role=\"skavaInteropShare\" config=\"trend\" trend=\"moderndresses\">share this &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusSharePin\" tracker=\"redhot_pin\" href=\"javascript:void(0)\" role=\"skavaInteropSharePinterest\" config=\"trend\" trend=\"moderndresses\" pinicon=\"randomDirectory\/images\/pinicons\/redhot2.jpg\">pin it &#9658;<\/a>\n\t\t<\/div>\n\t<\/div>-->\n\t<a href=\"#\/moderndresses\" class=\"back_arrow\"><img src=\"randomDirectory\/images\/nav\/back.png\"\/><\/a>\n\t<a href=\"#\/blackandwhite\" class=\"next_arrow\"><img src=\"randomDirectory\/images\/nav\/next.png\"\/><\/a>\n<\/div>","pool":"<div id=\"pool\" class=\"finderPage\">\n\t\n\t<div id=\"topNav\">\n\t\t<div class=\"navBar men\">\n\t\t\t<img src=\"randomDirectory\/images\/men_lookbook\/only_at_macys.gif\">\n\t\t\t<a href=\"#\/bar3\">bar III home<\/a>\n\t\t\t<a href=\"#\/mLB\">men's lookbook<\/a>\n\t\t\t<a href=\"#\/shopMen\" class=\"selected\">shop men<\/a>\n\t\t\t<a href=\"#\/behindScenes\">go behind the scenes<\/a>\n\t\t<\/div>\n\t\t<div class=\"navBar women\">\n\t\t\t<img src=\"randomDirectory\/images\/women_lookbook\/only_at_macys.gif\">\n\t\t\t<a href=\"#\/bar3\">bar III home<\/a>\n\t\t\t<a href=\"#\/wLB\">women's lookbook<\/a>\n\t\t\t<a href=\"#\/shopWomen\" class=\"selected\">shop women<\/a>\n\t\t\t<a href=\"#\/behindScenes\">go behind the scenes<\/a>\n\t\t<\/div>\n\t<\/div>\n\t\n\t<div id=\"headerImage\">\n\t\t<img src=\"randomDirectory\/images\/pool\/men_header.gif\" border=\"0\" class=\"men\">\n\t\t<img src=\"randomDirectory\/images\/pool\/women_header.gif\" border=\"0\" class=\"women\">\n\t\t<img src=\"randomDirectory\/images\/pool\/beauty_header.gif\" border=\"0\" class=\"beauty\">\n\t<\/div>\n\n<\/div>\n","prepset":"<div id=\"prepset\" class=\"finderPage\">\n\t<img id=\"onestar\" src=\"randomDirectory\/images\/prepset\/onestar.png\"\/>\n\t<img id=\"trendreport\" src=\"randomDirectory\/images\/prepset\/trendreport.png\"\/>\n\t<div class=\"plusDot\" id=\"plusDot1\">\n\t\t<div class=\"dotSign\" tracker=\"countrychic\"><\/div>\n\t\t<div class=\"dotContent\">\n\t\t\t<h4>COUNTRY CHIC<\/h4>\n\t\t\t<p>channel sporting style in a plaid blazer with a waist-defining fit. leather riding boots and a large luxe bag keep it tailored.<\/p>\n\t\t\t<a class=\"minusGetLook\" tracker=\"countrychic_shop\" href=\"javascript:void(0)\" onclick=\"finder.getLook({productId:'1040264'});\">SHOP THIS LOOK &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusShare\" tracker=\"countrychic_share\" href=\"javascript:void(0)\" role=\"skavaInteropShare\" config=\"trend\" trend=\"prepset\">share this &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusSharePin\" tracker=\"countrychic_pin\" href=\"javascript:void(0)\" role=\"skavaInteropSharePinterest\" config=\"trend\" trend=\"prepset\" pinicon=\"randomDirectory\/images\/pinicons\/countrychic.jpg\">pin it &#9658;<\/a>\n\t\t<\/div>\n\t<\/div>\n\t<div class=\"plusDot\" id=\"plusDot2\">\n\t\t<div class=\"dotSign\" tracker=\"newschool\"><\/div>\n\t\t<div class=\"dotContent flip\">\n\t\t\t<h4>NEW SCHOOL<\/h4>\n\t\t\t<p>an always-chic blazer in a neutral color palette looks fresh paired with coated colored jeans. flat two-tone booties and round specs add an eclectic edge.<\/p>\n\t\t\t<a class=\"minusGetLook\" tracker=\"newschool_shop\" href=\"javascript:void(0)\" onclick=\"finder.getLook({productId:'1040265'});\">SHOP THIS LOOK &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusShare\" tracker=\"newschool_share\" href=\"javascript:void(0)\" role=\"skavaInteropShare\" config=\"trend\" trend=\"prepset\">share this &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusSharePin\" tracker=\"newschool_pin\" href=\"javascript:void(0)\" role=\"skavaInteropSharePinterest\" config=\"trend\" trend=\"prepset\" pinicon=\"randomDirectory\/images\/pinicons\/newschool.jpg\">pin it &#9658;<\/a>\n\t\t<\/div>\n\t<\/div>\n\t<a href=\"#\/blackandwhite2\" class=\"back_arrow\"><img src=\"randomDirectory\/images\/nav\/back.png\"\/><\/a>\n\t<a href=\"#\/prepset2\" class=\"next_arrow\"><img src=\"randomDirectory\/images\/nav\/next.png\"\/><\/a>\n<\/div>","prepset2":"<div id=\"prepset2\" class=\"finderPage\">\n\t<img id=\"trendreport\" src=\"randomDirectory\/images\/prepset2\/trendreport.png\"\/>\n\t<div class=\"plusDot\" id=\"plusDot1\">\n\t\t<div class=\"dotSign\" tracker=\"printedition\"><\/div>\n\t\t<div class=\"dotContent\">\n\t\t\t<h4>PRINT EDITION<\/h4>\n\t\t\t<p>a library-inspired print lends collegiate charm to a versatile shirtdress. wear it on chilly days with a quilted jacket and buttery-soft riding boots.<\/p>\n\t\t\t<a class=\"minusGetLook\" tracker=\"printedition_shop\" href=\"javascript:void(0)\" onclick=\"finder.getLook({productId:'1040269'});\">SHOP THIS LOOK &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusShare\" tracker=\"printedition_share\" href=\"javascript:void(0)\" role=\"skavaInteropShare\" config=\"trend\" trend=\"prepset\">share this &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusSharePin\" tracker=\"printedition_pin\" href=\"javascript:void(0)\" role=\"skavaInteropSharePinterest\" config=\"trend\" trend=\"prepset\" pinicon=\"randomDirectory\/images\/pinicons\/printedition.jpg\">pin it &#9658;<\/a>\n\t\t<\/div>\n\t<\/div>\n\t<div class=\"plusDot\" id=\"plusDot2\">\n\t\t<div class=\"dotSign\" tracker=\"boymeetsgirl\"><\/div>\n\t\t<div class=\"dotContent\">\n\t\t\t<h4>BOY MEETS GIRL<\/h4>\n\t\t\t<p>showcase a cute shrunken vest and right-now mini handbag with a crisp white shirt and skinny jeans. a fedora and matching tie bring boyish cool to the mix.<\/p>\n\t\t\t<a class=\"minusGetLook\" tracker=\"boymeetsgirl_shop\" href=\"javascript:void(0)\" onclick=\"finder.getLook({productId:'1040271'});\">SHOP THIS LOOK &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusShare\" tracker=\"boymeetsgirl_share\" href=\"javascript:void(0)\" role=\"skavaInteropShare\" config=\"trend\" trend=\"prepset\">share this &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusSharePin\" tracker=\"boymeetsgirl_pin\" href=\"javascript:void(0)\" role=\"skavaInteropSharePinterest\" config=\"trend\" trend=\"prepset\" pinicon=\"randomDirectory\/images\/pinicons\/boymeetsgirl.jpg\">pin it &#9658;<\/a>\n\t\t<\/div>\n\t<\/div>\n\t<div class=\"plusDot\" id=\"plusDot3\">\n\t\t<div class=\"dotSign\" tracker=\"plaidpair\"><\/div>\n\t\t<div class=\"dotContent\">\n\t\t\t<h4>PLAID PAIR<\/h4>\n\t\t\t<p>add interest to a solid sheath dress with a high-fashion fringe-trimmed jacket in sophisticated plaid. with sleek mary jane pumps, it's ready for a special lunch date.<\/p>\n\t\t\t<a class=\"minusGetLook\" tracker=\"plaidpair_shop\" href=\"javascript:void(0)\" onclick=\"finder.getLook({productId:'1040280'});\">SHOP THIS LOOK &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusShare\" tracker=\"plaidpair_share\" href=\"javascript:void(0)\" role=\"skavaInteropShare\" config=\"trend\" trend=\"prepset\">share this &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusSharePin\" tracker=\"plaidpair_pin\" href=\"javascript:void(0)\" role=\"skavaInteropSharePinterest\" config=\"trend\" trend=\"prepset\" pinicon=\"randomDirectory\/images\/pinicons\/plaidpair.jpg\">pin it &#9658;<\/a>\n\t\t<\/div>\n\t<\/div>\n\t<div class=\"plusDot\" id=\"plusDot4\">\n\t\t<div class=\"dotSign\" tracker=\"countrychic\"><\/div>\n\t\t<div class=\"dotContent flip\">\n\t\t\t<h4>COUNTRY CHIC<\/h4>\n\t\t\t<p>channel sporting style in a plaid blazer with a waist-defining fit. leather riding boots and a large luxe bag keep it tailored.<\/p>\n\t\t\t<a class=\"minusGetLook\" tracker=\"countrychic_shop\" href=\"javascript:void(0)\" onclick=\"finder.getLook({productId:'1040264'});\">SHOP THIS LOOK &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusShare\" tracker=\"countrychic_share\" href=\"javascript:void(0)\" role=\"skavaInteropShare\" config=\"trend\" trend=\"prepset\">share this &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusSharePin\" tracker=\"countrychic_pin\" href=\"javascript:void(0)\" role=\"skavaInteropSharePinterest\" config=\"trend\" trend=\"prepset\" pinicon=\"randomDirectory\/images\/pinicons\/countrychic2.jpg\">pin it &#9658;<\/a>\n\t\t<\/div>\n\t<\/div>\n\t<a href=\"#\/prepset\" class=\"back_arrow\"><img src=\"randomDirectory\/images\/nav\/back.png\"\/><\/a>\n\t<a href=\"#\/jacketspreferred\" class=\"next_arrow\"><img src=\"randomDirectory\/images\/nav\/next.png\"\/><\/a>\n<\/div>","structure":"<div id=\"navContainer\">\n\t<div class=\"freeshipping\">\n\t\t<a href=\"http:\/\/www.macys.com\/m\/campaign\/free-shipping\/free-shipping-everyday\" target=\"_blank\"><img src=\"randomDirectory\/images\/nav\/fall_free_shipping.png\"\/><\/a>\n\t<\/div>\n\t<div id=\"nav\">\n\t\t<ul>\n\t\t\t<li id=\"home\"><a href=\"#\/home\"><span class=\"invisible\">Fall Trend Report 2013<\/span><\/a><\/li>\n\t\t\t<li id=\"moderndresses\"><a href=\"#\/moderndresses\">Modern Dresses<\/a><\/li>\n\t\t\t<li id=\"blackandwhite\"><a href=\"#\/blackandwhite\">Black &amp; White<\/a><\/li>\n\t\t\t<li id=\"jacketspreferred\"><a href=\"#\/jacketspreferred\">Jackets Preferred<\/a><\/li>\n\t\t\t<li id=\"lookofleather\"><a href=\"#\/lookofleather\">The Look of Leather<\/a><\/li>\n\t\t\t<li id=\"accessories\"><a href=\"#\/accessories1\">Accessories<\/a><\/li>\n\t\t<\/ul>\n\t\t<div class=\"clear\"><\/div>\n\t<\/div>\n\t<div class=\"clear\"><\/div>\n<\/div>\n<div id=\"bodyContainer\">\n\t<div class=\"loading\" style=\"display: none;\">\n\t\t<div id=\"overlay\"><\/div>\n\t\t<div id=\"loadingMessage\"><img src=\"randomDirectory\/images\/loading_anim.gif\" border=\"0\"><\/div>\n\t<\/div>\n\t<div id=\"pageContainer\"><\/div>\n<\/div>\n<div class=\"clear\"><\/div>\n<div id=\"footerContainer\">\n\t<div id=\"rolloverkey\"><\/div>\n\t<div id=\"footer\">\n\t\t<a class=\"pinterest\" role=\"skavaInteropSharePinterest\" config=\"currentPage\"><\/a>\n\t\t<a class=\"twitter\" role=\"skavaInteropShareTwitter\" config=\"currentPage\"><\/a>\n\t\t<a class=\"facebook\" role=\"skavaInteropShareFacebook\" config=\"currentPage\"><\/a>\n\t<\/div>\n\t<div id=\"pagination\">\n\t\t<div class=\"pages\">\n\t\t\t<span class=\"currpage\"><\/span>\/<span class=\"totalpages\"><\/span> PAGES\n\t\t<\/div>\n\t\t<div class=\"paging\">\n\t\t\t<a href=\"#\/\" class=\"previous\">&#9668; PREVIOUS<\/a>\n\t\t\t<a href=\"#\/\" class=\"next\">NEXT &#9658;<\/a>\n\t\t<\/div>\n\t<\/div>\n<\/div>\n<p class=\"findStore\">CHECK OUT FALL FASHION EVENTS NEAR YOU! <a href=\" http:\/\/www1.macys.com\/store\/event\/index.ognc?cm_sp=navigation-_-bottom_nav-_-store_events \" target=\"_blank\">FIND A STORE<\/a><\/p>\n<div id=\"pool_wrap\">\n\t<ul id=\"fake_facets\">\n\t\t<li><a href=\"#\/accessories1\">PUMPS<\/a><\/li>\n\t\t<li><a href=\"#\/accessories2\">BAGS<\/a><\/li>\n\t\t<li><a href=\"#\/accessories3\">BOOTS<\/a><\/li>\n\t\t<li><a href=\"#\/accessories4\">JEWELRY<\/a><\/li>\n\t\t<li><a href=\"#\/accessories5\">WATCHES<\/a><\/li>\n\t<\/ul>\n\t<div id=\"pool_itself\"><\/div>\n\t<div class=\"clear\"><\/div>\n<\/div>\n\n<!-- create a test productListingCopy template \/  -->\n<!--<script id=\"productListing\" type=\"text\/html\" class=\"poolHeaderRow\">\n <h1>Test<\/h1>\n<\/script>-->\n\n\n<script id=\"productListing\" type=\"text\/html\" class=\"poolHeaderRow\">\n\t<div class=\"productListing {{if hasPromotions}}hasPromotions{{\/if}} {{if finder.skava.beenVotedOn(pfeed_id)}}voted{{\/if}}\" brand=\"${pfeed_brand}\" productId=\"${pfeed_id}\" entryId=\"${entryid}\">\n\t\t<div class=\"quickview\">\n\t\t\t<a href=\"javascript:void(0)\" entryId=\"${entryid}\" productId=\"${pfeed_id}\" role=\"skavaInteropQuickView\">Quick View<\/a>\n\t\t<\/div>\n\t\t<div class=\"image\">\n\t\t\t<a href=\"${pfeed_url}\" target=\"_blank\"><img src=\"${image_fullImage.replace('wid=250', 'wid=140')}\" class=\"productImage\" onload=\"finder.resizePage();finder.attachVotes(${entryid});\" border=\"0\"><\/a>\n\t\t<\/div>\n\t\t<div class=\"votingRow\" role=\"skavaInteropVote\">\n\t\t\t<img src=\"randomDirectory\/images\/heart.png\" border=\"0\"> <span class=\"lovethis\">\n\t\t\t\t<span class=\"button\">love it <img src=\"randomDirectory\/images\/rightarrow.gif\" border=\"0\">&nbsp;&nbsp;<\/span>\n\t\t\t\t<span class=\"voteCount\" style=\"border:none\">\n\t\t\t\t\t{{if parseInt(votes) == \"1\"}}\n\t\t\t\t\t\t1 LOVES THIS\n\t\t\t\t\t{{\/if}}\n\t\t\t\t\t{{if parseInt(votes) > 1}}\n\t\t\t\t\t\t${votes} LOVE THIS\n\t\t\t\t\t{{\/if}}\n\t\t\t\t<\/span>\n\t\t\t<\/span>\n\t\t<\/div>\n\t\t<div class=\"label\">\n\t\t\t<a href=\"${pfeed_url}\" target=\"_blank\">\n\t\t\t\t${label}\n\t\t\t<\/a>\n\t\t<\/div>\n\n\t\t<div class=\"price1\">${pfeed_price1}<\/div>\n\t\t{{if pfeed_price2 != \"\"}}\n\t\t\t<div class=\"price2\">${pfeed_price2}<\/div>\n\t\t{{\/if}}\n\t\t{{if pfeed_price3 != \"\"}}\n\t\t\t<div class=\"price3\">${pfeed_price3}<\/div>\n\t\t{{\/if}}\n\t\t\n\t\t\n\t\t<!--\n\t\t<div class=\"giftListRow\" role=\"skavaInteropWishListAdder\">\n\t\t\t<img src=\"randomDirectory\/images\/pool\/addtogiftlist.png\" border=\"0\" class='addToGiftList' entryId=\"${entryid}\" productId=\"${pfeed_id}\">\n\t\t<\/div>\n\t\t<div class=\"giftListRow2\">\n\t\t\t<img src=\"randomDirectory\/images\/pool\/checkmark.png\" border=\"0\" align=\"absmiddle\"> on my gift list\n\t\t<\/div>\n\t\t\n\t\t<img src='randomDirectory\/images\/pool\/addToBridalParty.png' border='0' class=\"addToBridalParty\" role=\"skavaInteropBridalAdder\">\n\t\t-->\n\t\t<div class=\"moreInfo\">\n\t\t\t<div class=\"colorSwatches\">\n\t\t\t\t{{each swatches}}\n\t\t\t\t\t<img src=\"${this.swatchImage.replace('wid=57', 'wid=20')}\" productImage=\"${this.productImage.replace('%width%', '137')}\" class=\"swatch\">\n\t\t\t\t{{\/each}}\n\t\t\t<\/div>\n\t\t<\/div>\n\t\t<div style=\"clear: both;\"><\/div>\n\t<\/div>    \n<\/script>","trueblues":"<div id=\"trueblues\" class=\"finderPage\">\n\t<img id=\"onestar\" src=\"randomDirectory\/images\/trueblues\/onestar.png\"\/>\n\t<img id=\"trendreport\" src=\"randomDirectory\/images\/trueblues\/trendreport.png\"\/>\n\t<div class=\"plusDot\" id=\"plusDot1\">\n\t\t<div class=\"dotSign\" tracker=\"bluestar\"><\/div>\n\t\t<div class=\"dotContent flip\">\n\t\t\t<h4>BLUE STAR<\/h4>\n\t\t\t<p>do a triple take in patchwork skinnies, a chambray shirt and a mixed-media denim jacket. elevate this weekend uniform with trendy wedge sneakers.<\/p>\n\t\t\t<a class=\"minusGetLook\" tracker=\"bluestar_shop\" href=\"javascript:void(0)\" onclick=\"finder.getLook({productId:'1040325'});\">SHOP THIS LOOK &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusShare\" tracker=\"bluestar_share\" href=\"javascript:void(0)\" role=\"skavaInteropShare\" config=\"trend\" trend=\"trueblues\">share this &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusSharePin\" tracker=\"bluestar_pin\" href=\"javascript:void(0)\" role=\"skavaInteropSharePinterest\" config=\"trend\" trend=\"trueblues\" pinicon=\"randomDirectory\/images\/pinicons\/bluestar.jpg\">pin it &#9658;<\/a>\n\t\t<\/div>\n\t<\/div>\n\t<div class=\"plusDot\" id=\"plusDot2\">\n\t\t<div class=\"dotSign\" tracker=\"balancingact\"><\/div>\n\t\t<div class=\"dotContent flip\">\n\t\t\t<h4>BALANCING ACT<\/h4>\n\t\t\t<p>team the skinniest ripped jeans with a draped pleather top. a floppy hat and studded peep-toe booties infuse it with an unfussy rock 'n' roll vibe.<\/p>\n\t\t\t<a class=\"minusGetLook\" tracker=\"balancingact_shop\" href=\"javascript:void(0)\" onclick=\"finder.getLook({productId:'1040326'});\">SHOP THIS LOOK &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusShare\" tracker=\"balancingact_share\" href=\"javascript:void(0)\" role=\"skavaInteropShare\" config=\"trend\" trend=\"trueblues\">share this &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusSharePin\" tracker=\"balancingact_pin\" href=\"javascript:void(0)\" role=\"skavaInteropSharePinterest\" config=\"trend\" trend=\"trueblues\" pinicon=\"randomDirectory\/images\/pinicons\/balancingact.jpg\">pin it &#9658;<\/a>\n\t\t<\/div>\n\t<\/div>\n\t<a href=\"#\/jacketspreferred2\" class=\"back_arrow\"><img src=\"randomDirectory\/images\/nav\/back.png\"\/><\/a>\n\t<a href=\"#\/trueblues2\" class=\"next_arrow\"><img src=\"randomDirectory\/images\/nav\/next.png\"\/><\/a>\n<\/div>","trueblues2":"<div id=\"trueblues2\" class=\"finderPage\">\n\t<img id=\"trendreport\" src=\"randomDirectory\/images\/trueblues2\/trendreport.png\"\/>\n\t<div class=\"plusDot\" id=\"plusDot1\">\n\t\t<div class=\"dotSign\" tracker=\"trueicon\"><\/div>\n\t\t<div class=\"dotContent\">\n\t\t\t<h4>TRUE ICON<\/h4>\n\t\t\t<p>cuffed blue jeans with subtle distressing and a classic black sweater make an effortlessly chic combo. animal-print extras add feline flair.<\/p>\n\t\t\t<a class=\"minusGetLook\" tracker=\"trueicon_shop\" href=\"javascript:void(0)\" onclick=\"finder.getLook({productId:'1040329'});\">SHOP THIS LOOK &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusShare\" tracker=\"trueicon_share\" href=\"javascript:void(0)\" role=\"skavaInteropShare\" config=\"trend\" trend=\"trueblues\">share this &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusSharePin\" tracker=\"trueicon_pin\" href=\"javascript:void(0)\" role=\"skavaInteropSharePinterest\" config=\"trend\" trend=\"trueblues\" pinicon=\"randomDirectory\/images\/pinicons\/trueicon.jpg\">pin it &#9658;<\/a>\n\t\t<\/div>\n\t<\/div>\n\t<div class=\"plusDot\" id=\"plusDot2\">\n\t\t<div class=\"dotSign\" tracker=\"laidback\"><\/div>\n\t\t<div class=\"dotContent\">\n\t\t\t<h4>LAID-BACK LUXE<\/h4>\n\t\t\t<p>slim indigo jeans feel fresh with the season's must-have Chelsea boots and a go-with-everything camel crewneck. a skinny belt and shiny silver-tone pendant pepper in a touch of texture.<\/p>\n\t\t\t<a class=\"minusGetLook\" tracker=\"laidback_shop\" href=\"javascript:void(0)\" onclick=\"finder.getLook({productId:'1040340'});\">SHOP THIS LOOK &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusShare\" tracker=\"laidback_share\" href=\"javascript:void(0)\" role=\"skavaInteropShare\" config=\"trend\" trend=\"trueblues\">share this &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusSharePin\" tracker=\"laidback_pin\" href=\"javascript:void(0)\" role=\"skavaInteropSharePinterest\" config=\"trend\" trend=\"trueblues\" pinicon=\"randomDirectory\/images\/pinicons\/laidbackluxe.jpg\">pin it &#9658;<\/a>\n\t\t<\/div>\n\t<\/div>\n\t<div class=\"plusDot\" id=\"plusDot3\">\n\t\t<div class=\"dotSign\" tracker=\"blueprint\"><\/div>\n\t\t<div class=\"dotContent flip\">\n\t\t\t<h4>BLUE PRINT<\/h4>\n\t\t\t<p>walk on the wild side in skinny jeans with a tonal animal-print. tame them with a billowy white blouse and pointy patent flats.<\/p>\n\t\t\t<a class=\"minusGetLook\" tracker=\"blueprint_shop\" href=\"javascript:void(0)\" onclick=\"finder.getLook({productId:'1040342'});\">SHOP THIS LOOK &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusShare\" tracker=\"blueprint_share\" href=\"javascript:void(0)\" role=\"skavaInteropShare\" config=\"trend\" trend=\"trueblues\">share this &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusSharePin\" tracker=\"blueprint_pin\" href=\"javascript:void(0)\" role=\"skavaInteropSharePinterest\" config=\"trend\" trend=\"trueblues\" pinicon=\"randomDirectory\/images\/pinicons\/blueprint.jpg\">pin it &#9658;<\/a>\n\t\t<\/div>\n\t<\/div>\n\t<div class=\"plusDot\" id=\"plusDot4\">\n\t\t<div class=\"dotSign\" tracker=\"bluestar\"><\/div>\n\t\t<div class=\"dotContent flip\">\n\t\t\t<h4>BLUE STAR<\/h4>\n\t\t\t<p>do a triple take in patchwork skinnies, a chambray shirt and a mixed-media jacket. elevate this weekend uniform with trendy wedge sneakers.<\/p>\n\t\t\t<a class=\"minusGetLook\" tracker=\"bluestar_shop\" href=\"javascript:void(0)\" onclick=\"finder.getLook({productId:'1040325'});\">SHOP THIS LOOK &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusShare\" tracker=\"bluestar_share\" href=\"javascript:void(0)\" role=\"skavaInteropShare\" config=\"trend\" trend=\"trueblues\">share this &#9658;<\/a>\n\t\t\t<div class=\"spacer\"><\/div>\n\t\t\t<a class=\"minusSharePin\" tracker=\"bluestar_pin\" href=\"javascript:void(0)\" role=\"skavaInteropSharePinterest\" config=\"trend\" trend=\"trueblues\" pinicon=\"randomDirectory\/images\/pinicons\/bluestar2.jpg\">pin it &#9658;<\/a>\n\t\t<\/div>\n\t<\/div>\n\t<a href=\"#\/trueblues\" class=\"back_arrow\"><img src=\"randomDirectory\/images\/nav\/back.png\"\/><\/a>\n\t<a href=\"#\/lookofleather\" class=\"next_arrow\"><img src=\"randomDirectory\/images\/nav\/next.png\"\/><\/a>\n<\/div>","pages":{},"misc":{}};

/* ../projects/rtw_plus//randomDirectory/ipad/js/RtwPage.js */
var RtwPage = FinderPage.extend({
	getHighlight: function() {
		return "homepage";
	},
	setup: function() {
		this._super();
		this.parentDiv = jQuery(".finderPage#" + this.navId, "#pageContainer");
		var self = this;
		if(this.title == 'accessories'){
			$('#footerContainer #rolloverkey').css('visibility', 'hidden');
			$('#footerContainer #pagination').css('visibility', 'visible');
			$('#footerContainer #footer .facebook').attr('config', 'accessories');
			$('#footerContainer #footer .facebook').attr('trend', self.navId);
			$('#footerContainer #footer .pinterest').attr('config', 'accessories');
			$('#footerContainer #footer .pinterest').attr('trend', self.navId);
			$('#footerContainer #footer .twitter').attr('config', 'accessories');
			$('#footerContainer #footer .twitter').attr('trend', self.navId);
			$('#pool_wrap').show();
			$('p.findStore').hide();

			$('#fake_facets').show();
			$('#fake_facets li').each(function(e){
				$(this).removeClass('toggled');
				var url = $(this).children('a').attr('href').replace('#/', '');
				if(url == self.navId){
					$(this).addClass('toggled');
				}
			});
			$('#additions p a').each(function(e){
				$(this).removeClass('current');
				var url = $(this).attr('href').replace('#/', '');
				if(url == self.navId){
					$(this).addClass('current');
				}
			});
			finder.loadMyPool(this.title);

		}else if(this.navId  == 'home'){
			$('#footerContainer #rolloverkey').css('visibility', 'hidden');
			$('#footerContainer #pagination').css('visibility', 'hidden');
			$('#footerContainer #footer .facebook').attr('config', 'currentPage');
			$('#footerContainer #footer .facebook').attr('trend', '');
			$('#footerContainer #footer .pinterest').attr('config', 'currentPage');
			$('#footerContainer #footer .pinterest').attr('trend', '');
			$('#footerContainer #footer .twitter').attr('config', 'currentPage');
			$('#footerContainer #footer .twitter').attr('trend', '');
			$('#pool_wrap').hide();
			$('p.findStore').show();
			$('#fake_facets').hide();

		}else{
			$('#footerContainer #rolloverkey').css('visibility', 'visible');
			$('#footerContainer #pagination').css('visibility', 'visible');
			$('#footerContainer #footer .facebook').attr('config', 'trend');
			$('#footerContainer #footer .facebook').attr('trend', this.title);
			$('#footerContainer #footer .pinterest').attr('config', 'section');
			$('#footerContainer #footer .pinterest').attr('trend', this.title);
			$('#footerContainer #footer .twitter').attr('config', 'trend');
			$('#footerContainer #footer .twitter').attr('trend', this.title);
			$('#pool_wrap').show();
			$('p.findStore').hide();

			$('#fake_facets').hide();
			finder.loadMyPool(this.title);
		}

		$('ul.facetTabsContainer li[pfeed]').on('click', function(){
			if($(this).attr('pfeed') == 'all'){
				var facet = 'shopwomen';
			}else if($(this).attr('pfeed') == 'petites'){
				var facet = 'petite';
			}
			finder.skava.handleTracking(finder.getCurrentPage(), {pageid:"ca-so-fallfashionrtw."+self.title+"."+facet, catid:"ca-so-fallfashionrtw-"+self.navId});
		});

//		console.log('this.shareCopy', this.shareCopy)
		finder.resizePage();
	},

	processParams: function() {
		this._super();
		this.handleTracking();
		if(this.navId  != 'home'){
			$('#finderContainer #pool_wrap').css('background-image', 'url("'+assetsDirectory+'images/'+this.navId+'/pool_bg.png")');
		}
		$('#navContainer #nav ul li a').removeClass('active');
		$('#navContainer #nav ul li#'+this.title+' a').addClass('active');

		// set up footerNav
		this.pages = finder.getConfig().paging;
		for(var p = 0; p < this.pages.length; p++){
			if(this.navId == this.pages[p]){
				var thisPage = p;
				if(p == 0){
					var prevPage = this.pages.length-1;
				}else{
					var prevPage = p-1;
				}
				if(p == this.pages.length-1){
					var nextPage = 0;
				}else{
					var nextPage = p+1;
				}
			}
		}
		$('#footerContainer #pagination .pages .currpage').text(thisPage+1);
		$('#footerContainer #pagination .pages .totalpages').text(this.pages.length);
		$('#footerContainer #pagination .paging a.previous').attr('href', '#/'+this.pages[prevPage]);
		$('#footerContainer #pagination .paging a.next').attr('href', '#/'+this.pages[nextPage]);
		// petite deeplink
		if((this.params.argc) && (this.params.argc[0] == 'petite')){
			$('ul.facetTabsContainer li[pfeed=all] input').each(function(){
				$(this).prop('checked', false);
				$(this).parent().removeClass('toggled');
			});
			$('ul.facetTabsContainer li[pfeed=petites] input').each(function(){
				$(this).prop('checked', true);
				$(this).parent().addClass('toggled');
			});
		}
	},

	handleTracking: function() {
		try {
			finder.skava.handleTracking(finder.getCurrentPage(), finder.getConfig().tracking[finder.getCurrentPage().navId]);
		} catch(err) {
			console.error("NO TRACKING",path);
		}
	}

});

var RtwPoolContainerPage = RtwPage.extend({
	init: function(params) {
		this._super(params);
		this.poolScrollable = true;
		this.itemsPerPage = 20;
	},

	setupPool: function(container) {
		this.poolWorker = new RtwPool();
		this.poolContainer = jQuery(container);
		this.poolPagination = jQuery("<div id='poolPagination'></div>").appendTo(this.poolContainer);
		this.poolHeader = jQuery("<div id='poolHeader'></div>").appendTo(this.poolContainer);
		this.itemsFound = jQuery("<div id='itemsFound'></div>").appendTo(this.poolPagination);
		this.pageNumbers = jQuery("<div id='pageNumbers'></div>").appendTo(this.poolPagination);
		this.poolResults = jQuery("<div id='poolResults'></div>").appendTo(this.poolContainer);
		this.sortSelect = jQuery("<select id='sortSelect'><option value='-1'>SORT BY</option><option value='logicaldesc'>price: high to low</option><option value='logicalasc'>price: low to high</option></select>").appendTo(this.poolHeader);
		this.brandSelect = jQuery("<select id='brandSelect'><option value='-1'>SHOP BY BRAND</option></select>").appendTo(this.poolHeader);
		// add event handlers..
		var self = this;
		this.sortSelect.change(function() {
			self.sortChanged();
		});
		this.brandSelect.change(function() {
			self.brandChanged();
		});
		this.pageNumbers.delegate("A[pageNum]", "click", function(event) {
			event.preventDefault();
			event.stopPropagation();
			self.showPage(jQuery(this).attr("pageNum"));
		})
		this.pageNumbers.delegate("A.prevPage", "click", function(event) {
			event.preventDefault();
			event.stopPropagation();
			var currentPage = jQuery("A[pageNum].selected", self.pageNumbers).attr("pageNum") * 1;
			self.showPage(currentPage - 1);
		})
		this.pageNumbers.delegate("A.nextPage", "click", function(event) {
			event.preventDefault();
			event.stopPropagation();
			var currentPage = jQuery("A[pageNum].selected", self.pageNumbers).attr("pageNum") * 1;
			self.showPage(currentPage + 1);
		})
	},

	loadPool: function(pool) {
		// load the right pool...
		finder.loadingDisplay.start("pool load");
		var self = this;
		setTimeout(function() {
			self.poolWorker.loadPool(pool, jQuery.proxy(self.poolLoaded, self));
		}, 10);

	},

	poolLoaded: function() {
		this.buildBrandsList();
		this.brandChanged();
		finder.resizePage();
		finder.loadingDisplay.end("pool load");
	},

	buildBrandsList: function() {
		var items = this.poolWorker.db.get({});
		var brands = {};
		for (var i = 0; i < items.length; i++){
			if (brands[items[i].pfeed_brand])
				brands[items[i].pfeed_brand]++;
			else
				brands[items[i].pfeed_brand] = 1;
		}
		var bArray = [];
		for (var i in brands){
			bArray.push(i);
		}
		bArray = bArray.sort();
		var options = "<option value='-1'>SHOP BY BRAND</option>";
		for (var i = 0; i < bArray.length; i++){
			options += "<option value=\"" + bArray[i] + "\">" + bArray[i] + "</option>";
		}
		options += "<option value='-1'>All Brands</option>";
		this.brandSelect.html(options);
	},

	setPoolScrollable: function(bool) {
		this.poolScrollable = bool;
	},

	setItemsPerPage: function(num) {
		this.itemsPerPage = num;
	},

	itemsFiltered: function(filter) {
		if (!filter)
			filter = {};

		this.poolResults.html("");
		var items = this.poolWorker.showFilteredResults("#poolResults", "#productListing", filter);

		// build pagination results...

		var pluralItems = (items.length == 1) ? "item" : "items";
		this.itemsFound.html(items.length + " " + pluralItems + " found");

		var numPages = Math.ceil(items.length / this.itemsPerPage);

		this.pageNumbers.attr("numPages", numPages);

		if (numPages > 1) {
			this.updatePagination(0);
			this.pageNumbers.show();
		} else {
			this.pageNumbers.hide();
		}

		this.showPage(0);
		if (this.poolScrollable) {
			var scrollNode = this.poolResults[0];
			this.scroller = new TouchScroll(scrollNode, {
				elastic: true
			});
			this.scrollerInited = true;
		}
	},

	updatePagination: function(current) {

		var numPages = (this.pageNumbers.attr("numPages") * 1);

		current = current * 1  + 1;

		if (isNaN(current) || current > numPages)
			current = numPages;

		var numPagesToShow = 6;

		this.pageNumbers.html("<a href='javascript:void(0)' class='prevPage'><img src='" + assetsDirectory + "images/leftarrow.gif' border='0'> Prev</a>");

		var startPage = 1;
		var endPage = numPages;

		if (numPages <= numPagesToShow) {
			endPage = numPages;
		} else {
			startPage = current - Math.floor(numPagesToShow / 2);
			if (startPage < 1)
				startPage = 1;

			endPage = startPage + numPagesToShow;
			if (endPage > numPages) {
				endPage = numPages;
				startPage = endPage - numPagesToShow;
			}

		}

		for (i = startPage; i <= endPage; i++) {
			this.pageNumbers.append("<a href='javascript:void(0);' pageNum='" + (i - 1) + "'>" + (i) + "</a> ");
		}
		this.pageNumbers.append("<a href='javascript:void(0)' class='nextPage'>Next <img src='" + assetsDirectory + "images/rightarrow.gif' border='0'></a>");
	},

	showPage: function(pageNum) {

		pageNum = pageNum * 1;

		var numPages = this.pageNumbers.attr("numPages") * 1;
		this.updatePagination(pageNum);

		if (pageNum <= 0)
			jQuery("A.prevPage", this.pageNumbers).css("visibility", "hidden");
		else
			jQuery("A.prevPage", this.pageNumbers).css("visibility", "visible");

		if (pageNum >= numPages - 1)
			jQuery("A.nextPage", this.pageNumbers).css("visibility", "hidden");
		else
			jQuery("A.nextPage", this.pageNumbers).css("visibility", "visible");

		this.pageNumbers.attr("currentPage", pageNum);


		jQuery("A", this.pageNumbers).removeClass("selected");
		jQuery("A[pageNum=" + pageNum+ "]", this.pageNumbers).addClass("selected");

		jQuery(".productListing:visible", this.poolResults).hide();
		jQuery(".productListing", this.poolResults).slice(pageNum * this.itemsPerPage, pageNum * this.itemsPerPage + this.itemsPerPage).fadeIn();

		if (this.poolScrollable && this.scrollerInited)
		{
			this.scroller.scrollTo(0,0);
			//this.scroller.setupScroller();
		}
	},

	sortChanged: function() {
		var id = this.sortSelect.val();

		var filter = [{pool_insert_id: 'asc'}];

		if (id != "-1")
			filter = [{pfeed_priceforfilters: id}];

		this.poolWorker.sort(filter);

		this.brandChanged();
	},

	brandChanged: function() {
		var filter = {};

		var id = this.brandSelect.val();
		if (id  != "-1")
		{
			filter = {pfeed_brand:id};
		}

		this.itemsFiltered(filter);
	}


})



/* ../projects/rtw_plus//randomDirectory/ipad/js/SiteConfig.js */
//var isProduction = false;
//FILES_ROOT = VERSION_DIR;
//VERSION_DIR = "http://d3pnveezgteiph.cloudfront.net/impulse/v201106081412/";
var DOC_ROOT = "";
try {
	FILES_ROOT;
	DOC_ROOT = FILES_ROOT;
} catch (e) {
	DOC_ROOT = VERSION_DIR;
}
var assetsDirectory = DOC_ROOT + 'ipad/';
var webRoot = DEEPLINK_DIR;
var popupPosition = [256, 150, 126, 80];
var quickViewPosition = [null, 10, 658, 603];
var shouldCache = false;
var shouldProxy = false;
var SiteConfig = {
	defaultPage: 'home',
	'assetsDirectory': assetsDirectory,
	webRoot: DEEPLINK_DIR,
	aliases: {
		'accessories':{page:'accessories1'}
	},
	sharing: {
		/* SHARING ITEMS - Don't touch this comment :-) */
		site: {
			mailerIds: {
				staging: 524,
				production: 478
			},
			url: webRoot,
			icon: assetsDirectory + "images/share/share_home.jpg",
			facebook: {
				title: "FALL TREND REPORT 2013",
				description: "All the news on what’s hot this season."
			},
			twitter: "FALL TREND REPORT 2013, all the news on what’s hot this season.",
			tracking:{pageid:"ca-so-fallfashionrtw.sharesite", catid:"ca-so-style-source"}
		},
		popupPosition: [268, 100, 135, 100]
	},

	vote:{
		tracking:{pageid:'ca-so-fallfashionrtw.lovethis', catid:'ca-so-style-source'}
	},

	quickView: {
		catId: "ca-so-fallfashionrtw",
		position: [null, 10, 658, 603],
		bgColor: "#000000"
	},

	comment: {
		position: [150, 70]
	},

	pageData: {
		moderndresses: {
			pool: poolRootVotes + 'skirtalert_women',
			shopby:{
				"all":{label:"SHOP WOMEN", filter:[{pfeed_specialsize:{has:"Regular"}}],tracking:{pageid:"ca-so-fallfashionrtw.moderndresses.shopwomen", catid:"ca-so-fallfashionrtw-moderndresses"}, selected:true},
				"petites":{label:"PETITE", filter:[{pfeed_specialsize:{has:"Petites"}}],tracking:{pageid:"ca-so-fallfashionrtw.moderndresses.petite", catid:"ca-so-fallfashionrtw-moderndresses"}}
			},
			share:{
				title:"Modern Dresses",
				desc:"This season's dresses take shape with graphic patterns, strong silhouettes and a daring dose of red.",
				icon: assetsDirectory + "images/share/share_dresses.jpg",
				email:""
			}
		},
		blackandwhite: {
			pool: poolRootVotes + 'black_white',
			shopby:{
				"all":{label:"SHOP WOMEN",filter:[{pfeed_specialsize:{has:"Regular"}}],tracking:{pageid:"ca-so-fallfashionrtw.blackwhite.shopwomen", catid:"ca-so-fallfashionrtw-blackwhite"}, selected:true},
				"petites": {label:"PETITE", filter:[{pfeed_specialsize:{has:"Petites"}}],tracking:{pageid:"ca-so-fallfashionrtw.blackwhite.petite", catid:"ca-so-fallfashionrtw-blackwhite"}}
			},
			share:{
				title:"Black and White",
				desc:"Dramatic in all the right ways, this duo feels fresh with eye-catching patterns and colorblocking.",
				icon: assetsDirectory + "images/share/share_bw.jpg",
				email:""
			}
		},
		prepset: {
			pool: poolRootVotes + 'prep_set',
			shopby:{
				"all":{label:"SHOP WOMEN",filter:[{pfeed_specialsize:{has:"Regular"}}],tracking:{pageid:"ca-so-fallfashionrtw.prepset.shopwomen", catid:"ca-so-fallfashionrtw-prepset"}, selected:true},
				"petites": {label:"PETITE", filter:[{pfeed_specialsize:{has:"Petites"}}],tracking:{pageid:"ca-so-fallfashionrtw.prepset.petite", catid:"ca-so-fallfashionrtw-prepset"}}
			},
			share:{
				title:"Prep Set",
				desc:"Capture autumn's essence in menswear-inspired pieces and heritage patterns.",
				icon: assetsDirectory + "images/share/share_prep.jpg",
				email:""
			}
		},
		jacketspreferred: {
			pool: poolRootVotes + 'jackets_preferred',
			shopby:{
				"all":{label:"SHOP WOMEN",filter:[{pfeed_specialsize:{has:"Regular"}}],tracking:{pageid:"ca-so-fallfashionrtw.jacketspreferred.shopwomen", catid:"ca-so-fallfashionrtw-jacketspreferred"}, selected:true},
				"petites": {label:"PETITE", filter:[{pfeed_specialsize:{has:"Petites"}}],tracking:{pageid:"ca-so-fallfashionrtw.jacketspreferred.petite", catid:"ca-so-fallfashionrtw-jacketspreferred"}}
			},
			share:{
				title:"Jackets Preferred",
				desc:"Mixed-media details and the latest shapes add cool to chilly days.",
				icon: assetsDirectory + "images/share/share_jackets.jpg",
				email:""
			}
		},
		trueblues: {
			pool: poolRootVotes + 'true_blues',
			shopby:{
				"all":{label:"SHOP WOMEN",filter:[{pfeed_specialsize:{has:"Regular"}}],tracking:{pageid:"ca-so-fallfashionrtw.trueblues.shopwomen", catid:"ca-so-fallfashionrtw-trueblues"}, selected:true},
				"petites": {label:"PETITE", filter:[{pfeed_specialsize:{has:"Petites"}}],tracking:{pageid:"ca-so-fallfashionrtw.trueblues.petite", catid:"ca-so-fallfashionrtw-trueblues"}}
			},
			share:{
				title:"True Blues",
				desc:"Rediscover indigo-hued denim in new washes, treatments and fits.",
				icon: assetsDirectory + "images/share/share_blues.jpg",
				email:""
			}
		},
		lookofleather: {
			pool: poolRootVotes + 'looks_leather',
			shopby:{
				"all":{label:"SHOP WOMEN",filter:[{pfeed_specialsize:{has:"Regular"}}],tracking:{pageid:"ca-so-fallfashionrtw.lookofleather.shopwomen", catid:"ca-so-fallfashionrtw-lookofleather"}, selected:true},
				"petites": {label:"PETITE", filter:[{pfeed_specialsize:{has:"Petites"}}],tracking:{pageid:"ca-so-fallfashionrtw.lookofleather.petite", catid:"ca-so-fallfashionrtw-lookofleather"}}
			},
			share:{
				title:"The Look of Leather",
				desc:"A powerful ensemble starts with fall's favorite fabric, a luxe take on faux leather.",
				icon: assetsDirectory + "images/share/share_leather.jpg",
				email:""
			}
		},
		accessories: {
			pool: poolRootVotes + 'accessories',
			shopby:{
				"pumps":{label:"PUMPS",filter:[{pfeed_shopcategory:{has:"shop_pumps"}}],tracking:{pageid:"ca-so-style.source.accessories.pumps", catid:"ca-so-style-source"}},
				"bags": {label:"BAGS", filter:[{pfeed_shopcategory:{has:"shop_bags"}}],tracking:{pageid:"ca-so-style.source.accessories.bags", catid:"ca-so-style-source"}},
				"boots":{label:"BOOTS",filter:[{pfeed_shopcategory:{has:"shop_boots"}}],tracking:{pageid:"ca-so-style.source.accessories.boots", catid:"ca-so-style-source"}},
				"jewelry": {label:"JEWELRY", filter:[{pfeed_shopcategory:{has:"shop_jewelry"}}],tracking:{pageid:"ca-so-style.source.accessories.jewelry", catid:"ca-so-style-source"}},
				"watches":{label:"WATCHES",filter:[{pfeed_shopcategory:{has:"shop_watches"}}],tracking:{pageid:"ca-so-style.source.accessories.watches", catid:"ca-so-style-source"}}
			},
			icon: assetsDirectory + "images/share/share_acc.jpg",
			share:{
				'accessories1':{
					title:"Pointy-Toe Pumps",
					desc:"Sharpen any ensemble with a pair of pointed heels.",
					email:""
				},
				'accessories2':{
					title:"Mini Bags",
					desc:"Downsize your daily carryall with a smarter, smaller handbag.",
					email:""
				},
				'accessories3':{
					title:"Tall Boots",
					desc:"Lengthen your legs with these fall classics.",
					email:""
				},
				'accessories4':{
					title:"Wild Jewelry",
					desc:"Explore the exotic side of accessorizing with animal-inspired jewelry.",
					email:""
				},
				'accessories5':{
					title:"Timeless Watches",
					desc:"Switch out a bracelet for a statement-making timepiece.",
					email:""
				}
			}
		}
	},

	tracking:{
		'home':{pageid:"ca-so-fallfashionrtw.lp",catid:"ca-so-fallfashionrtw"},
		'moderndresses': {pageid:"ca-so-fallfashionrtw.moderndresses",  catid:"ca-so-fallfashionrtw-moderndresses"},
		'moderndresses2':  {pageid:"ca-so-fallfashionrtw.moderndresses",catid:"ca-so-fallfashionrtw-moderndresses"},
		'blackandwhite':  {pageid:"ca-so-fallfashionrtw.blackwhite",catid:"ca-so-fallfashionrtw-blackwhite"},
		'blackandwhite2':  {pageid:"ca-so-fallfashionrtw.blackwhite",catid:"ca-so-fallfashionrtw-blackwhite"},
		'prepset':{pageid:"ca-so-fallfashionrtw.prepset", catid:"ca-so-fallfashionrtw-prepset"},
		'prepset2': {pageid:"ca-so-fallfashionrtw.prepset", catid:"ca-so-fallfashionrtw-prepset"},
		'jacketspreferred':  {pageid:"ca-so-fallfashionrtw.jacketspreferred", catid:"ca-so-fallfashionrtw-jacketspreferred"},
		'jacketspreferred2': {pageid:"ca-so-fallfashionrtw.jacketspreferred",  catid:"ca-so-fallfashionrtw-jacketspreferred"},
		'trueblues':  {pageid:"ca-so-fallfashionrtw.trueblues",catid:"ca-so-fallfashionrtw-trueblues"},
		'trueblues2':  {pageid:"ca-so-fallfashionrtw.trueblues",catid:"ca-so-fallfashionrtw-trueblues"},
		'lookofleather':  {pageid:"ca-so-fallfashionrtw.lookofleather",catid:"ca-so-fallfashionrtw-lookofleather"},
		'lookofleather2':{pageid:"ca-so-fallfashionrtw.lookofleather", catid:"ca-so-fallfashionrtw-lookofleather"},
		'accessories1': {pageid:"ca-so-fallfashionrtw.accessories.pointytoepumps", catid:"ca-so-fallfashionrtw-accessories-pointytoepumps"},
		'accessories2': {pageid:"ca-so-fallfashionrtw.accessories.minibags", catid:"ca-so-fallfashionrtw-accessories-minibags"},
		'accessories3': {pageid:"ca-so-fallfashionrtw.accessories.tallboots", catid:"ca-so-fallfashionrtw-accessories-tallboots"},
		'accessories4': {pageid:"ca-so-fallfashionrtw.accessories.wildjewelry", catid:"ca-so-fallfashionrtw-accessories-wildjewelry"},
		'accessories5': {pageid:"ca-so-fallfashionrtw.accessories.timelesswatches", catid:"ca-so-fallfashionrtw-accessories-timelesswatches"}
	},

	clicktracking:{
		'pinterest':{pageid:"ca-so-fallfashionrtw.sharepinterest", catid:"ca-so-fallfashionrtw-share"},
		'twitter':{pageid:"ca-so-fallfashionrtw.sharetwitter", catid:"ca-so-fallfashionrtw-share"},
		'facebook':{pageid:"ca-so-fallfashionrtw.sharefb", catid:"ca-so-fallfashionrtw-share"},
		'wellred':{pageid:"ca-so-fallfashionrtw.moderndresses.wellred", catid:"ca-so-fallfashionrtw-moderndresses-wellred"},
		'wellred_shop':{pageid:"ca-so-fallfashionrtw.moderndresses.wellred.shopnow", catid:"ca-so-fallfashionrtw-moderndresses-wellred"},
		'wellred_share':{pageid:"ca-so-fallfashionrtw.moderndresses.wellred.sharethis", catid:"ca-so-fallfashionrtw-moderndresses-wellred"},
		'wellred_pin':{pageid:"ca-so-fallfashionrtw.moderndresses.wellred.pinit", catid:"ca-so-fallfashionrtw-moderndresses-wellred"},
		'redhot':{pageid:"ca-so-fallfashionrtw.moderndresses.redhot", catid:"ca-so-fallfashionrtw-moderndresses-redhot"},
		'redhot_shop':{pageid:"ca-so-fallfashionrtw.moderndresses.redhot.shopnow", catid:"ca-so-fallfashionrtw-moderndresses-redhot"},
		'redhot_share':{pageid:"ca-so-fallfashionrtw.moderndresses.redhot.sharethis", catid:"ca-so-fallfashionrtw-moderndresses-redhot"},
		'redhot_pin':{pageid:"ca-so-fallfashionrtw.moderndresses.redhot.pinit", catid:"ca-so-fallfashionrtw-moderndresses-redhot"},
		'shapeshift':{pageid:"ca-so-fallfashionrtw.moderndresses.shapeshift", catid:"ca-so-fallfashionrtw-moderndresses-shapeshift"},
		'shapeshift_shop':{pageid:"ca-so-fallfashionrtw.moderndresses.shapeshift.shopnow", catid:"ca-so-fallfashionrtw-moderndresses-shapeshift"},
		'shapeshift_share':{pageid:"ca-so-fallfashionrtw.moderndresses.shapeshift.sharethis", catid:"ca-so-fallfashionrtw-moderndresses-shapeshift"},
		'shapeshift_pin':{pageid:"ca-so-fallfashionrtw.moderndresses.shapeshift.pinit", catid:"ca-so-fallfashionrtw-moderndresses-shapeshift"},
		'scarletstripes':{pageid:"ca-so-fallfashionrtw.moderndresses.scarletstripes", catid:"ca-so-fallfashionrtw-moderndresses-scarletstripes"},
		'scarletstripes_shop':{pageid:"ca-so-fallfashionrtw.moderndresses.scarletstripes.shopnow", catid:"ca-so-fallfashionrtw-moderndresses-scarletstripes"},
		'scarletstripes_share':{pageid:"ca-so-fallfashionrtw.moderndresses.scarletstripes.sharethis", catid:"ca-so-fallfashionrtw-moderndresses-scarletstripes"},
		'scarletstripes_pin':{pageid:"ca-so-fallfashionrtw.moderndresses.scarletstripes.pinit", catid:"ca-so-fallfashionrtw-moderndresses-scarletstripes"},
		'fineprint':{pageid:"ca-so-fallfashionrtw.moderndresses.fineprint", catid:"ca-so-fallfashionrtw-moderndresses-fineprint"},
		'fineprint_shop':{pageid:"ca-so-fallfashionrtw.moderndresses.fineprint.shopnow", catid:"ca-so-fallfashionrtw-moderndresses-fineprint"},
		'fineprint_share':{pageid:"ca-so-fallfashionrtw.moderndresses.fineprint.sharethis", catid:"ca-so-fallfashionrtw-moderndresses-fineprint"},
		'fineprint_pin':{pageid:"ca-so-fallfashionrtw.moderndresses.fineprint.pinit", catid:"ca-so-fallfashionrtw-moderndresses-fineprint"},
		'majormoto':{pageid:"ca-so-fallfashionrtw.blackwhite.majormoto", catid:"ca-so-fallfashionrtw-blackwhite-majormoto"},
		'majormoto_shop':{pageid:"ca-so-fallfashionrtw.blackwhite.majormoto.shopnow", catid:"ca-so-fallfashionrtw-blackwhite-majormoto"},
		'majormoto_share':{pageid:"ca-so-fallfashionrtw.blackwhite.majormoto.sharethis", catid:"ca-so-fallfashionrtw-blackwhite-majormoto"},
		'majormoto_pin':{pageid:"ca-so-fallfashionrtw.blackwhite.majormoto.pinit", catid:"ca-so-fallfashionrtw-blackwhite-majormoto"},
		'highcontrast':{pageid:"ca-so-fallfashionrtw.blackwhite.highcontrast", catid:"ca-so-fallfashionrtw-blackwhite-highcontrast"},
		'highcontrast_shop':{pageid:"ca-so-fallfashionrtw.blackwhite.highcontrast.shopnow", catid:"ca-so-fallfashionrtw-blackwhite-highcontrast"},
		'highcontrast_share':{pageid:"ca-so-fallfashionrtw.blackwhite.highcontrast.sharethis", catid:"ca-so-fallfashionrtw-blackwhite-highcontrast"},
		'highcontrast_pin':{pageid:"ca-so-fallfashionrtw.blackwhite.highcontrast.pinit", catid:"ca-so-fallfashionrtw-blackwhite-highcontrast"},
		'worksmart':{pageid:"ca-so-fallfashionrtw.blackwhite.worksmart", catid:"ca-so-fallfashionrtw-blackwhite-worksmart"},
		'worksmart_shop':{pageid:"ca-so-fallfashionrtw.blackwhite.worksmart.shopnow", catid:"ca-so-fallfashionrtw-blackwhite-worksmart"},
		'worksmart_share':{pageid:"ca-so-fallfashionrtw.blackwhite.worksmart.sharethis", catid:"ca-so-fallfashionrtw-blackwhite-worksmart"},
		'worksmart_pin':{pageid:"ca-so-fallfashionrtw.blackwhite.worksmart.pinit", catid:"ca-so-fallfashionrtw-blackwhite-worksmart"},
		'beyondbasic':{pageid:"ca-so-fallfashionrtw.blackwhite.beyondbasic", catid:"ca-so-fallfashionrtw-blackwhite-beyondbasic"},
		'beyondbasic_shop':{pageid:"ca-so-fallfashionrtw.blackwhite.beyondbasic.shopnow", catid:"ca-so-fallfashionrtw-blackwhite-beyondbasic"},
		'beyondbasic_share':{pageid:"ca-so-fallfashionrtw.blackwhite.beyondbasic.sharethis", catid:"ca-so-fallfashionrtw-blackwhite-beyondbasic"},
		'beyondbasic_pin':{pageid:"ca-so-fallfashionrtw.blackwhite.beyondbasic.pinit", catid:"ca-so-fallfashionrtw-blackwhite-beyondbasic"},
		'skirtedissue':{pageid:"ca-so-fallfashionrtw.blackwhite.skirtedissue", catid:"ca-so-fallfashionrtw-blackwhite-skirtedissue"},
		'skirtedissue_shop':{pageid:"ca-so-fallfashionrtw.blackwhite.skirtedissue.shopnow", catid:"ca-so-fallfashionrtw-blackwhite-skirtedissue"},
		'skirtedissue_share':{pageid:"ca-so-fallfashionrtw.blackwhite.skirtedissue.sharethis", catid:"ca-so-fallfashionrtw-blackwhite-skirtedissue"},
		'skirtedissue_pin':{pageid:"ca-so-fallfashionrtw.blackwhite.skirtedissue.pinit", catid:"ca-so-fallfashionrtw-blackwhite-skirtedissue"},
		'printedition':{pageid:"ca-so-fallfashionrtw.prepset.printedition", catid:"ca-so-fallfashionrtw-prepset-printedition"},
		'printedition_shop':{pageid:"ca-so-fallfashionrtw.prepset.printedition.shopnow", catid:"ca-so-fallfashionrtw-prepset-printedition"},
		'printedition_share':{pageid:"ca-so-fallfashionrtw.prepset.printedition.sharethis", catid:"ca-so-fallfashionrtw-prepset-printedition"},
		'printedition_pin':{pageid:"ca-so-fallfashionrtw.prepset.printedition.pinit", catid:"ca-so-fallfashionrtw-prepset-printedition"},
		'boymeetsgirl':{pageid:"ca-so-fallfashionrtw.prepset.boymeetsgirl", catid:"ca-so-fallfashionrtw-prepset-boymeetsgirl"},
		'boymeetsgirl_shop':{pageid:"ca-so-fallfashionrtw.prepset.boymeetsgirl.shopnow", catid:"ca-so-fallfashionrtw-prepset-boymeetsgirl"},
		'boymeetsgirl_share':{pageid:"ca-so-fallfashionrtw.prepset.boymeetsgirl.sharethis", catid:"ca-so-fallfashionrtw-prepset-boymeetsgirl"},
		'boymeetsgirl_pin':{pageid:"ca-so-fallfashionrtw.prepset.boymeetsgirl.pinit", catid:"ca-so-fallfashionrtw-prepset-boymeetsgirl"},
		'plaidpair':{pageid:"ca-so-fallfashionrtw.prepset.plaidpair", catid:"ca-so-fallfashionrtw-prepset-plaidpair"},
		'plaidpair_shop':{pageid:"ca-so-fallfashionrtw.prepset.plaidpair.shopnow", catid:"ca-so-fallfashionrtw-prepset-plaidpair"},
		'plaidpair_share':{pageid:"ca-so-fallfashionrtw.prepset.plaidpair.sharethis", catid:"ca-so-fallfashionrtw-prepset-plaidpair"},
		'plaidpair_pin':{pageid:"ca-so-fallfashionrtw.prepset.plaidpair.pinit", catid:"ca-so-fallfashionrtw-prepset-plaidpair"},
		'countrychic':{pageid:"ca-so-fallfashionrtw.prepset.countrychic", catid:"ca-so-fallfashionrtw-prepset-countrychic"},
		'countrychic_shop':{pageid:"ca-so-fallfashionrtw.prepset.countrychic.shopnow", catid:"ca-so-fallfashionrtw-prepset-countrychic"},
		'countrychic_share':{pageid:"ca-so-fallfashionrtw.prepset.countrychic.sharethis", catid:"ca-so-fallfashionrtw-prepset-countrychic"},
		'countrychic_pin':{pageid:"ca-so-fallfashionrtw.prepset.countrychic.pinit", catid:"ca-so-fallfashionrtw-prepset-countrychic"},
		'militarytime':{pageid:"ca-so-fallfashionrtw.jacketspreferred.militarytime", catid:"ca-so-fallfashionrtw-jacketspreferred-militarytime"},
		'militarytime_shop':{pageid:"ca-so-fallfashionrtw.jacketspreferred.militarytime.shopnow", catid:"ca-so-fallfashionrtw-jacketspreferred-militarytime"},
		'militarytime_share':{pageid:"ca-so-fallfashionrtw.jacketspreferred.militarytime.sharethis", catid:"ca-so-fallfashionrtw-jacketspreferred-militarytime"},
		'militarytime_pin':{pageid:"ca-so-fallfashionrtw.jacketspreferred.militarytime.pinit", catid:"ca-so-fallfashionrtw-jacketspreferred-militarytime"},
		'mixmaster':{pageid:"ca-so-fallfashionrtw.jacketspreferred.mixmaster", catid:"ca-so-fallfashionrtw-jacketspreferred-mixmaster"},
		'mixmaster_shop':{pageid:"ca-so-fallfashionrtw.jacketspreferred.mixmaster.shopnow", catid:"ca-so-fallfashionrtw-jacketspreferred-mixmaster"},
		'mixmaster_share':{pageid:"ca-so-fallfashionrtw.jacketspreferred.mixmaster.sharethis", catid:"ca-so-fallfashionrtw-jacketspreferred-mixmaster"},
		'mixmaster_pin':{pageid:"ca-so-fallfashionrtw.jacketspreferred.mixmaster.pinit", catid:"ca-so-fallfashionrtw-jacketspreferred-mixmaster"},
		'newschool':{pageid:"ca-so-fallfashionrtw.jacketspreferred.newschool", catid:"ca-so-fallfashionrtw-jacketspreferred-newschool"},
		'newschool_shop':{pageid:"ca-so-fallfashionrtw.jacketspreferred.newschool.shopnow", catid:"ca-so-fallfashionrtw-jacketspreferred-newschool"},
		'newschool_share':{pageid:"ca-so-fallfashionrtw.jacketspreferred.newschool.sharethis", catid:"ca-so-fallfashionrtw-jacketspreferred-newschool"},
		'newschool_pin':{pageid:"ca-so-fallfashionrtw.jacketspreferred.newschool.pinit", catid:"ca-so-fallfashionrtw-jacketspreferred-newschool"},
		'neautralstate':{pageid:"ca-so-fallfashionrtw.jacketspreferred.neautralstate", catid:"ca-so-fallfashionrtw-jacketspreferred-neautralstate"},
		'neautralstate_shop':{pageid:"ca-so-fallfashionrtw.jacketspreferred.neautralstate.shopnow", catid:"ca-so-fallfashionrtw-jacketspreferred-neautralstate"},
		'neautralstate_share':{pageid:"ca-so-fallfashionrtw.jacketspreferred.neautralstate.sharethis", catid:"ca-so-fallfashionrtw-jacketspreferred-neautralstate"},
		'neautralstate_pin':{pageid:"ca-so-fallfashionrtw.jacketspreferred.neautralstate.pinit", catid:"ca-so-fallfashionrtw-jacketspreferred-neautralstate"},
		'quietingcircle':{pageid:"ca-so-fallfashionrtw.jacketspreferred.quietingcircle", catid:"ca-so-fallfashionrtw-jacketspreferred-quietingcircle"},
		'quietingcircle_shop':{pageid:"ca-so-fallfashionrtw.jacketspreferred.quietingcircle.shopnow", catid:"ca-so-fallfashionrtw-jacketspreferred-quietingcircle"},
		'quietingcircle_share':{pageid:"ca-so-fallfashionrtw.jacketspreferred.quietingcircle.sharethis", catid:"ca-so-fallfashionrtw-jacketspreferred-quietingcircle"},
		'quietingcircle_pin':{pageid:"ca-so-fallfashionrtw.jacketspreferred.quietingcircle.pinit", catid:"ca-so-fallfashionrtw-jacketspreferred-quietingcircle"},
		'tweedit':{pageid:"ca-so-fallfashionrtw.jacketspreferred.tweedit", catid:"ca-so-fallfashionrtw-jacketspreferred-tweedit"},
		'tweedit_shop':{pageid:"ca-so-fallfashionrtw.jacketspreferred.tweedit.shopnow", catid:"ca-so-fallfashionrtw-jacketspreferred-tweedit"},
		'tweedit_share':{pageid:"ca-so-fallfashionrtw.jacketspreferred.tweedit.sharethis", catid:"ca-so-fallfashionrtw-jacketspreferred-tweedit"},
		'tweedit_pin':{pageid:"ca-so-fallfashionrtw.jacketspreferred.tweedit.pinit", catid:"ca-so-fallfashionrtw-jacketspreferred-tweedit"},
		'chicweave':{pageid:"ca-so-fallfashionrtw.jacketspreferred.chicweave", catid:"ca-so-fallfashionrtw-jacketspreferred-chicweave"},
		'chicweave_shop':{pageid:"ca-so-fallfashionrtw.jacketspreferred.chicweave.shopnow", catid:"ca-so-fallfashionrtw-jacketspreferred-chicweave"},
		'chicweave_share':{pageid:"ca-so-fallfashionrtw.jacketspreferred.chicweave.sharethis", catid:"ca-so-fallfashionrtw-jacketspreferred-chicweave"},
		'chicweave_pin':{pageid:"ca-so-fallfashionrtw.jacketspreferred.chicweave.pinit", catid:"ca-so-fallfashionrtw-jacketspreferred-chicweave"},
		'bluestar':{pageid:"ca-so-fallfashionrtw.trueblues.bluestar", catid:"ca-so-fallfashionrtw-trueblues-bluestar"},
		'bluestar_shop':{pageid:"ca-so-fallfashionrtw.trueblues.bluestar.shopnow", catid:"ca-so-fallfashionrtw-trueblues-bluestar"},
		'bluestar_share':{pageid:"ca-so-fallfashionrtw.trueblues.bluestar.sharethis", catid:"ca-so-fallfashionrtw-trueblues-bluestar"},
		'bluestar_pin':{pageid:"ca-so-fallfashionrtw.trueblues.bluestar.pinit", catid:"ca-so-fallfashionrtw-trueblues-bluestar"},
		'balancingact':{pageid:"ca-so-fallfashionrtw.trueblues.balancingact", catid:"ca-so-fallfashionrtw-trueblues-balancingact"},
		'balancingact_shop':{pageid:"ca-so-fallfashionrtw.trueblues.balancingact.shopnow", catid:"ca-so-fallfashionrtw-trueblues-balancingact"},
		'balancingact_share':{pageid:"ca-so-fallfashionrtw.trueblues.balancingact.sharethis", catid:"ca-so-fallfashionrtw-trueblues-balancingact"},
		'balancingact_pin':{pageid:"ca-so-fallfashionrtw.trueblues.balancingact.pinit", catid:"ca-so-fallfashionrtw-trueblues-balancingact"},
		'trueicon':{pageid:"ca-so-fallfashionrtw.trueblues.trueicon", catid:"ca-so-fallfashionrtw-trueblues-trueicon"},
		'trueicon_shop':{pageid:"ca-so-fallfashionrtw.trueblues.trueicon.shopnow", catid:"ca-so-fallfashionrtw-trueblues-trueicon"},
		'trueicon_share':{pageid:"ca-so-fallfashionrtw.trueblues.trueicon.sharethis", catid:"ca-so-fallfashionrtw-trueblues-trueicon"},
		'trueicon_pin':{pageid:"ca-so-fallfashionrtw.trueblues.trueicon.pinit", catid:"ca-so-fallfashionrtw-trueblues-trueicon"},
		'laidback':{pageid:"ca-so-fallfashionrtw.trueblues.laidback", catid:"ca-so-fallfashionrtw-trueblues-laidback"},
		'laidback_shop':{pageid:"ca-so-fallfashionrtw.trueblues.laidback.shopnow", catid:"ca-so-fallfashionrtw-trueblues-laidback"},
		'laidback_share':{pageid:"ca-so-fallfashionrtw.trueblues.laidback.sharethis", catid:"ca-so-fallfashionrtw-trueblues-laidback"},
		'laidback_pin':{pageid:"ca-so-fallfashionrtw.trueblues.laidback.pinit", catid:"ca-so-fallfashionrtw-trueblues-laidback"},
		'blueprint':{pageid:"ca-so-fallfashionrtw.trueblues.blueprint", catid:"ca-so-fallfashionrtw-trueblues-blueprint"},
		'blueprint_shop':{pageid:"ca-so-fallfashionrtw.trueblues.blueprint.shopnow", catid:"ca-so-fallfashionrtw-trueblues-blueprint"},
		'blueprint_share':{pageid:"ca-so-fallfashionrtw.trueblues.blueprint.sharethis", catid:"ca-so-fallfashionrtw-trueblues-blueprint"},
		'blueprint_pin':{pageid:"ca-so-fallfashionrtw.trueblues.blueprint.pinit", catid:"ca-so-fallfashionrtw-trueblues-blueprint"},
		'pipinghot':{pageid:"ca-so-fallfashionrtw.lookofleather.pipinghot", catid:"ca-so-fallfashionrtw-lookofleather-pipinghot"},
		'pipinghot_shop':{pageid:"ca-so-fallfashionrtw.lookofleather.pipinghot.shopnow", catid:"ca-so-fallfashionrtw-lookofleather-pipinghot"},
		'pipinghot_share':{pageid:"ca-so-fallfashionrtw.lookofleather.pipinghot.sharethis", catid:"ca-so-fallfashionrtw-lookofleather-pipinghot"},
		'pipinghot_pin':{pageid:"ca-so-fallfashionrtw.lookofleather.pipinghot.pinit", catid:"ca-so-fallfashionrtw-lookofleather-pipinghot"},
		'leatherlace':{pageid:"ca-so-fallfashionrtw.lookofleather.leatherlace", catid:"ca-so-fallfashionrtw-lookofleather-leatherlace"},
		'leatherlace_shop':{pageid:"ca-so-fallfashionrtw.lookofleather.leatherlace.shopnow", catid:"ca-so-fallfashionrtw-lookofleather-leatherlace"},
		'leatherlace_share':{pageid:"ca-so-fallfashionrtw.lookofleather.leatherlace.sharethis", catid:"ca-so-fallfashionrtw-lookofleather-leatherlace"},
		'leatherlace_pin':{pageid:"ca-so-fallfashionrtw.lookofleather.leatherlace.pinit", catid:"ca-so-fallfashionrtw-lookofleather-leatherlace"},
		'sleeksleeves':{pageid:"ca-so-fallfashionrtw.lookofleather.sleeksleeves", catid:"ca-so-fallfashionrtw-lookofleather-sleeksleeves"},
		'sleeksleeves_shop':{pageid:"ca-so-fallfashionrtw.lookofleather.sleeksleeves.shopnow", catid:"ca-so-fallfashionrtw-lookofleather-sleeksleeves"},
		'sleeksleeves_share':{pageid:"ca-so-fallfashionrtw.lookofleather.sleeksleeves.sharethis", catid:"ca-so-fallfashionrtw-lookofleather-sleeksleeves"},
		'sleeksleeves_pin':{pageid:"ca-so-fallfashionrtw.lookofleather.sleeksleeves.pinit", catid:"ca-so-fallfashionrtw-lookofleather-sleeksleeves"},
		'mixedmessages':{pageid:"ca-so-fallfashionrtw.lookofleather.mixedmessages", catid:"ca-so-fallfashionrtw-lookofleather-mixedmessages"},
		'mixedmessages_shop':{pageid:"ca-so-fallfashionrtw.lookofleather.mixedmessages.shopnow", catid:"ca-so-fallfashionrtw-lookofleather-mixedmessages"},
		'mixedmessages_share':{pageid:"ca-so-fallfashionrtw.lookofleather.mixedmessages.sharethis", catid:"ca-so-fallfashionrtw-lookofleather-mixedmessages"},
		'mixedmessages_pin':{pageid:"ca-so-fallfashionrtw.lookofleather.mixedmessages.pinit", catid:"ca-so-fallfashionrtw-lookofleather-mixedmessages"},
		'lasersharp':{pageid:"ca-so-fallfashionrtw.lookofleather.lasersharp", catid:"ca-so-fallfashionrtw-lookofleather-lasersharp"},
		'lasersharp_shop':{pageid:"ca-so-fallfashionrtw.lookofleather.lasersharp.shopnow", catid:"ca-so-fallfashionrtw-lookofleather-lasersharp"},
		'lasersharp_share':{pageid:"ca-so-fallfashionrtw.lookofleather.lasersharp.sharethis", catid:"ca-so-fallfashionrtw-lookofleather-lasersharp"},
		'lasersharp_pin':{pageid:"ca-so-fallfashionrtw.lookofleather.lasersharp.pinit", catid:"ca-so-fallfashionrtw-lookofleather-lasersharp"},
		'pointytoepumps':{pageid:"ca-so-fallfashionrtw.accessories.pointytoepumps.shopnow", catid:"ca-so-fallfashionrtw-accessories-pointytoepumps"},
		'minibags':{pageid:"ca-so-fallfashionrtw.accessories.minibags.shopnow", catid:"ca-so-fallfashionrtw-accessories-minibags"},
		'tallboots':{pageid:"ca-so-fallfashionrtw.accessories.tallboots.shopnow", catid:"ca-so-fallfashionrtw-accessories-tallboots"},
		'wildjewelry':{pageid:"ca-so-fallfashionrtw.accessories.wildjewelry.shopnow", catid:"ca-so-fallfashionrtw-accessories-wildjewelry"},
		'timelesswatches':{pageid:"ca-so-fallfashionrtw.accessories.timelesswatches.shopnow", catid:"ca-so-fallfashionrtw-accessories-timelesswatches"}
	},


	// we can probably do this better
	paging:[
		'home',
		'moderndresses',
		'moderndresses2',
		'blackandwhite',
		'blackandwhite2',
		'prepset',
		'prepset2',
		'jacketspreferred',
		'jacketspreferred2',
		'trueblues',
		'trueblues2',
		'lookofleather',
		'lookofleather2',
		'accessories1',
		'accessories2',
		'accessories3',
		'accessories4',
		'accessories5'
	]
};


/* ../projects/rtw_plus//randomDirectory/ipad/js/abstractPages/RtwBasePage.js */


var RtwBasePage = RtwPage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
				 	title: "brights",
					url: "html/brights.html",
					navId: "brights",
					preLoad:[]
				 }
		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
		this._super();

		this.poolContainer = jQuery("#swimPool_poolContainer", this.parentDiv);
		this.productPool = new ProductPool({
			container : this.poolContainer,
			scrollable : true,
			itemsPerPage : !this.itemsPerPage ? 12 : 8
		});
	},

	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();

		// DEMO ONLY !!!!
		var dataKey = this.navId;
		var self = this;

		$('#facetsContainer',this.parentDiv).empty();

		if(finder.getConfig().pageData.hasOwnProperty(dataKey))
		{
			var data = finder.getConfig().pageData[dataKey];
			this.productPool.reset();

			//console.log("HAS",data.hasOwnProperty("shopby"));

			if(data.hasOwnProperty("shopby"))
			{
				var facet2 = new GenericCheckboxFacet(data.shopby, "all", "shop by");
				this.productPool.addFacet(facet2);
				facet2.displayHandler.field.bind("click",function(){self.trackFacet(facet2)});
			} else {
				//console.log('NO FACETS');
			}
			// load pool
			this.productPool.loadPool(data.pool);

		}
		else
		{
			console.error("can't find "+dataKey);
		}

	},

	trackFacet:function(facet)
	{
		$(facet.getSelected()).each(function(i,e){
			finder.skava.handleTracking(null, e.tracking);
		});
	},

	/* Transition your page in */
	transitionIn: function() {

		console.log('this.womenList',this.womenList);
		var brightsWomenList = $(this.womenList+' ul li');
		var hotInside = $('.hotInside');
		var hotSpot = $('div.hotspot');

		brightsWomenList.css({opacity : 0});

		$('div#navContainer ul li').css({backgroundColor : '#000000'});
		$('#brights').css({backgroundColor : '#006699'});

		brightsWomenList.each(function(i){
			$(this).delay(50*i + 400).animate({opacity : 1}, 1700);
		});

		$('#rightArrow, #leftArrow').css({opacity : .4});
		$('#rightArrow, #leftArrow').mouseover(function(){
			$(this).stop().animate({opacity : 1});
		});

		$('#rightArrow, #leftArrow').mouseout(function(){
			$(this).stop().animate({opacity : .4});
		});

		hotSpot.mouseover(function(){
			var thisHeight = 0;

			$(this).children('.hotInside').children('ul').children('li').each(function(){
				thisHeight = parseInt($(this).height() + thisHeight);
			});
			$(this).children('.hotInside').stop().show().animate({width : 150, height : thisHeight + 35, marginLeft : -140}, 200, function(){

			});
		});

		hotSpot.mouseout(function(){
		var thisHeight;
			$(this).children('.hotInside').children('ul').children('li').each(function(){
				thisHeight = parseInt($(this).height() + thisHeight);
			});
			$(this).children('.hotInside').stop().animate({width : 0, height : 0, marginLeft : 0}, 200, function(){
				$(this).css({height : thisHeight});
			});
		});

		this._super();

	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/rtw_plus//randomDirectory/ipad/js/pages/Accessories1Page.js */


var Accessories1Page = RtwPage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
				 	title: "accessories",
					url: "html/accessories1.html",
					navId: "accessories1",
					preLoad: [
						'images/accessories1/bg.jpg',
						'images/accessories1/pool_bg.png'
					]
				 }

		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
		this._super();
		$('ul.facetTabsContainer li input').each(function(){
			$(this).prop('checked', false);
		});
		$('ul.facetTabsContainer li[pfeed=pumps] input').each(function(){
			$(this).prop('checked', true);
			$(this).parent().addClass('toggled');
		});
		finder.skava.handleTracking(finder.getCurrentPage(), {pageid:"ca-so-fallfashionrtw.accessories", catid:"ca-so-fallfashionrtw-accessories"});
	},

	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();



	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();

	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/rtw_plus//randomDirectory/ipad/js/pages/Accessories2Page.js */


var Accessories2Page = RtwPage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
				 	title: "accessories",
					url: "html/accessories2.html",
					navId: "accessories2",
					preLoad: [
						'images/accessories2/bg.jpg',
						'images/accessories2/pool_bg.png'
							  ]
				 }

		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
		this._super();
		$('ul.facetTabsContainer li input').each(function(){
			$(this).prop('checked', false);
		});
		$('ul.facetTabsContainer li[pfeed=bags] input').each(function(){
			$(this).prop('checked', true);
			$(this).parent().addClass('toggled');
		});

	},

	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();



	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();

	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/rtw_plus//randomDirectory/ipad/js/pages/Accessories3Page.js */


var Accessories3Page = RtwPage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
				 	title: "accessories",
					url: "html/accessories3.html",
					navId: "accessories3",
					preLoad: [
						'images/accessories3/bg.jpg',
						'images/accessories3/pool_bg.png'
							  ]
				 }

		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
		this._super();
		$('ul.facetTabsContainer li input').each(function(){
			$(this).prop('checked', false);
		});
		$('ul.facetTabsContainer li[pfeed=boots] input').each(function(){
			$(this).prop('checked', true);
			$(this).parent().addClass('toggled');
		});

	},

	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();



	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();

	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/rtw_plus//randomDirectory/ipad/js/pages/Accessories4Page.js */


var Accessories4Page = RtwPage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
				 	title: "accessories",
					url: "html/accessories4.html",
					navId: "accessories4",
					preLoad: [
					'images/accessories4/bg.jpg',
					'images/accessories4/pool_bg.png'
							  ]
				 }

		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
		this._super();
		$('ul.facetTabsContainer li input').each(function(){
			$(this).prop('checked', false);
		});
		$('ul.facetTabsContainer li[pfeed=jewelry] input').each(function(){
			$(this).prop('checked', true);
			$(this).parent().addClass('toggled');
		});

	},

	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();



	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();

	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/rtw_plus//randomDirectory/ipad/js/pages/Accessories5Page.js */


var Accessories5Page = RtwPage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
				 	title: "accessories",
					url: "html/accessories5.html",
					navId: "accessories5",
					preLoad: [
						'images/accessories5/bg.jpg',
						'images/accessories5/pool_bg.png'
							  ]
				 }

		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
		this._super();
		$('ul.facetTabsContainer li input').each(function(){
			$(this).prop('checked', false);
		});
		$('ul.facetTabsContainer li[pfeed=watches] input').each(function(){
			$(this).prop('checked', true);
			$(this).parent().addClass('toggled');
		});

	},

	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();



	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();

	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/rtw_plus//randomDirectory/ipad/js/pages/Blackandwhite2Page.js */
var Blackandwhite2Page = RtwPage.extend({
	/* Initialize any variables that will be needed */
	init: function(params) {
		var params = {
			title: "blackandwhite",
			url: "html/blackandwhite2.html",
			navId: "blackandwhite2",
			preLoad: [
			'images/blackandwhite2/bg.jpg',
			'images/blackandwhite2/pool_bg.png',
			'images/blackandwhite2/trendreport.png'
			]
		}
		this._super(params);
	},

	/* Setup your event handlers */
	setup: function() {
		this._super();
	},

	/* Handle Deeplinking */
	processParams: function(){
		this._super();

	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();
		finder.initPlusDots();
	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/rtw_plus//randomDirectory/ipad/js/pages/BlackandwhitePage.js */


var BlackandwhitePage = RtwPage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
				 	title: "blackandwhite",
					url: "html/blackandwhite.html",
					navId: "blackandwhite",
					preLoad: [
						'images/blackandwhite/bg.jpg',
						'images/blackandwhite/pool_bg.png',
						'images/blackandwhite/trendreport.png'
							  ]
				 }

		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
		this._super();

	},

	/* Handle Deeplinking */
	processParams: function(){
		this._super();
	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();
		finder.initPlusDots();
	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/rtw_plus//randomDirectory/ipad/js/pages/HomePage.js */


var HomePage = RtwPage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
				 	title: "home",
					url: "html/home.html",
					navId: "home",
					preLoad: [
						'images/home/fall_bg.jpg',
						'images/home/fall_trendreport.png'
							  ]
				 }

		this.overHero = false;
//		this.animArray = ['IMG#defaultHero1','IMG#defaultHero2','IMG#defaultHero3'];
		this.animIndex = 0;

		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
		this._super();
//		$('IMG.defaultHeroImg').fadeOut(0);


	},

	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();
	},

	fadeInNext:function()
	{
		var self = this;
		if(!self.overHero){
			if(self.animIndex<self.animArray.length-1){
				self.animIndex++;
			} else {
				self.animIndex = 0;
			}
			if($.support.opacity){
				$('IMG.defaultHeroImg').fadeOut();
				$('IMG.defaultHeroImg#defaultHero'+(self.animIndex+1)).fadeIn();
			} else {
				$('IMG.defaultHeroImg').hide();
				$('IMG.defaultHeroImg#defaultHero'+(self.animIndex+1)).show();
			}
		}
		setTimeout($.proxy(this.fadeInNext,this),2000);
	},

	/* Transition your page in */
	transitionIn: function()
	{
		jQuery.fx.off = !$.support.opacity;

//		$('div#navContainer ul li').css({backgroundColor : '#000000'});

		var self = this;
	/*
		if($.support.opacity){
			$('IMG.heroBig',this.parentDiv).css({opacity:0});
		}
		$('IMG.defaultHeroImg').fadeOut(0);

		$('A.hit',this.parentDiv).hover(
		function(e){
			self.overHero = true;
			var id = $(this).attr('id').slice(3);

			if($.support.opacity){
				$('IMG.heroBig').removeClass('selected').stop().hide();
				$('IMG.heroBig#bigHero'+id).addClass('selected').stop().show().css({opacity:0}).animate({opacity:1},400);
				$('IMG.hero').stop().animate({opacity:.2},400);
				$('IMG.hero#hero'+id).stop().animate({opacity:1},400);
			} else {
				$('IMG.heroBig').removeClass('selected').hide();
				$('IMG.heroBig#bigHero'+id).addClass('selected').show();
				$('IMG.hero#hero'+id).show();
			}
			$('DIV#defaultHero').hide();
		},
		function(e){
			self.overHero = false;

			if($.support.opacity){
				$('IMG.heroBig').hide();
				$('IMG.hero').stop().animate({opacity:1},400);
			} else {
				$('IMG.heroBig').hide();
			}
			$('DIV#defaultHero').show();


		}
		);
//		this.fadeInNext();

*/
		this._super();
	},

	/* Transition your page in
	transitionIn: function() {
		var homeMenuChild = $('.homeMenuChild');
		var homeHeroImage = $('.homeHeroImage');
		var homeTitle = $('#homeTitle ul li');
		var animatingIn = true;
		var rotatingGirlNum = 0;
		var rotatingGirl;

		$('div#navContainer ul li').css({backgroundColor : '#000000'});

		if($.support.opacity)
		{
			homeHeroImage.css({opacity : 0});
			homeMenuChild.css({opacity : 0, width : 0});
			homeTitle.css({opacity : 0});
		} else {
			homeHeroImage.hide();
			homeMenuChild.hide();
			homeTitle.hide();
		}
		console.log("opacity", $.support.opacity);
		rotatingGirl = setInterval(MoveGirl, 5000);

		homeTitle.each(function(i){
			if($.support.opacity)
			{
				$(this).delay(200*i + 400).animate({opacity : 1}, 1200);
			} else {
				$(this).delay(200*i + 400).show();
			}
		});

		homeMenuChild.each(function(i){
			var girlNum = 5;

			if($.support.opacity)
			{
				$(this).delay(50*i + 800).animate({opacity : 1, width : 93}, 700, 'easeOutSine', function(){
					if(i == girlNum)
						animatingIn = false;
				});
			} else {
				$(this).delay(50*i + 800).show();
				if(i == girlNum) animatingIn = false;
			}
		});

		if($.support.opacity)
		{
			$('#mainHero').delay(500).show().animate({opacity : 1}, 2200);
		} else {
			$('#mainHero').delay(500).show();
		}


		homeMenuChild.mouseover(function(){
			clearInterval(rotatingGirl);
			var mouseGirl = $(this)

			homeMenuChild.each(function(i){
				if($(this) == mouseGirl)
				rotatingGirlNum = i;
			});

			goAnimate(this.id);
		});

		homeMenuChild.mouseout(function(){
			if(!animatingIn){
				rotatingGirl = setInterval(MoveGirl, 5000);
				homeMenuChild.each(function(){
					if($.support.opacity)
					{
						$(this).stop().animate({opacity : 1}, 400);
					} else {
						$(this).stop().show();
					}
				});
			}
		});

		function goAnimate(girl){
		 if(!animatingIn){
				var homeRollId = girl;
				homeHeroImage.each(function(){
					if(this.id == homeRollId){
						if($.support.opacity)
						{
							$(this).stop().show().animate({opacity : 1}, 800);
						} else {
							$(this).stop().show();
						}
					}else{
						if($.support.opacity)
						{
							$(this).stop().animate({opacity : 0}, 800);
						} else {
							$(this).stop().hide();
						}
					}

					homeMenuChild.each(function(i){
						if(this.id == homeRollId)
						{
							if($.support.opacity)
							{
								$(this).stop().animate({opacity : 1}, 400);
							}
							else
							{
								$(this).stop().show();
							}
						} else {
							if($.support.opacity)
							{
								$(this).stop().animate({opacity : .6}, 400);
							} else {
							}
						}
					});
				});
			}
		}

		function MoveGirl(){
			if(rotatingGirlNum != 6)
			rotatingGirlNum = rotatingGirlNum + 1;
			else
			rotatingGirlNum = 0

			homeMenuChild.each(function(i){
				if(i == rotatingGirlNum){
					goAnimate(this.id);

					//console.log('hhh : ', this.id);
				}

			});


		}


		this._super();

	},*/

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/rtw_plus//randomDirectory/ipad/js/pages/Jacketspreferred2Page.js */


var Jacketspreferred2Page = RtwPage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
				 	title: "jacketspreferred",
					url: "html/jacketspreferred2.html",
					navId: "jacketspreferred2",
					preLoad: [
						'images/jacketspreferred2/bg.jpg',
						'images/jacketspreferred2/pool_bg.png',
						'images/jacketspreferred2/trendreport.png'
							  ]
				 }

		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
		this._super();

	},

	/* Handle Deeplinking */
	processParams: function(){
		this._super();

	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();
		finder.initPlusDots();
	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/rtw_plus//randomDirectory/ipad/js/pages/JacketspreferredPage.js */


var JacketspreferredPage = RtwPage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
				 	title: "jacketspreferred",
					url: "html/jacketspreferred.html",
					navId: "jacketspreferred",
					preLoad: [
						'images/jacketspreferred/bg.jpg',
						'images/jacketspreferred/pool_bg.png',
						'images/jacketspreferred/trendreport.png'
							  ]
				 }

		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
		this._super();

	},

	/* Handle Deeplinking */
	processParams: function(){
		this._super();

	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();
		finder.initPlusDots();
	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/rtw_plus//randomDirectory/ipad/js/pages/Lookofleather2Page.js */


var Lookofleather2Page = RtwPage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
				 	title: "lookofleather",
					url: "html/lookofleather2.html",
					navId: "lookofleather2",
					preLoad: [
						'images/lookofleather2/bg.jpg',
						'images/lookofleather2/pool_bg.png',
						'images/lookofleather2/trendreport.png'
							  ]
				 }

		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
		this._super();

	},

	/* Handle Deeplinking */
	processParams: function(){
		this._super();

	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();
		finder.initPlusDots();
	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/rtw_plus//randomDirectory/ipad/js/pages/LookofleatherPage.js */


var LookofleatherPage = RtwPage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
				 	title: "lookofleather",
					url: "html/lookofleather.html",
					navId: "lookofleather",
					preLoad: [
					'images/lookofleather/bg.jpg',
					'images/lookofleather/pool_bg.png',
					'images/lookofleather/trendreport.png'
							  ]
				 }

		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
		this._super();


	},

	/* Handle Deeplinking */
	processParams: function(){
		this._super();
	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();
		finder.initPlusDots();
	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/rtw_plus//randomDirectory/ipad/js/pages/Moderndresses2Page.js */
var Moderndresses2Page = RtwPage.extend({
	/* Initialize any variables that will be needed */
	init: function(params) {
		var params = {
			title: "moderndresses",
			url: "html/moderndresses2.html",
			navId: "moderndresses2",
			preLoad: [
			'images/moderndresses2/bg.jpg',
			'images/moderndresses2/pool_bg.png',
			'images/moderndresses2/trendreport.png'
			]
		}
		this._super(params);
	},

	/* Setup your event handlers */
	setup: function() {
		this._super();

	},

	/* Handle Deeplinking */
	processParams: function(){
		this._super();
	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();
		finder.initPlusDots();
	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {
		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events
		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}
})

/* ../projects/rtw_plus//randomDirectory/ipad/js/pages/ModerndressesPage.js */
var ModerndressesPage = RtwPage.extend({
	/* Initialize any variables that will be needed */
	init: function(params) {
		var params = {
			title: "moderndresses",
			url: "html/moderndresses.html",
			navId: "moderndresses",
			preLoad: [
				'images/moderndresses/bg.jpg',
				'images/moderndresses/pool_bg.png',
				'images/moderndresses/trendreport.png'
			]
		}
		this._super(params);
	},

	/* Setup your event handlers */
	setup: function() {
		this._super();

	},

	/* Handle Deeplinking */
	processParams: function(){
		this._super();
		var self = this;

	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();
		finder.initPlusDots();

	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {
		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events
		this._super();

	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}
})

/* ../projects/rtw_plus//randomDirectory/ipad/js/pages/Prepset2Page.js */


var Prepset2Page = RtwPage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
				 	title: "prepset",
					url: "html/prepset2.html",
					navId: "prepset2",
					preLoad: [
						'images/prepset2/bg.jpg',
						'images/prepset2/pool_bg.png',
						'images/prepset2/trendreport.png'
							  ]
				 }

		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
		this._super();

	},

	/* Handle Deeplinking */
	processParams: function(){
		this._super();
	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();
		finder.initPlusDots();
	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/rtw_plus//randomDirectory/ipad/js/pages/PrepsetPage.js */


var PrepsetPage = RtwPage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
				 	title: "prepset",
					url: "html/prepset.html",
					navId: "prepset",
					preLoad: [
						'images/prepset/bg.jpg',
						'images/prepset/pool_bg.png',
						'images/prepset/trendreport.png'
							  ]
				 }

		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
		this._super();

	},

	/* Handle Deeplinking */
	processParams: function(){
		this._super();
	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();
		finder.initPlusDots();
	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/rtw_plus//randomDirectory/ipad/js/pages/Trueblues2Page.js */


var Trueblues2Page = RtwPage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
				 	title: "trueblues",
					url: "html/trueblues2.html",
					navId: "trueblues2",
					preLoad: [
						'images/trueblues2/bg.jpg',
						'images/trueblues2/pool_bg.png',
						'images/trueblues2/trendreport.png'
							  ]
				 }

		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
		this._super();

	},

	/* Handle Deeplinking */
	processParams: function(){
		this._super();

	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();
		finder.initPlusDots();
	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/rtw_plus//randomDirectory/ipad/js/pages/TruebluesPage.js */


var TruebluesPage = RtwPage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
				 	title: "trueblues",
					url: "html/trueblues.html",
					navId: "trueblues",
					preLoad: [
						'images/trueblues/bg.jpg',
						'images/trueblues/pool_bg.png',
						'images/trueblues/trendreport.png'
							  ]
				 }

		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
		this._super();

	},

	/* Handle Deeplinking */
	processParams: function(){
		this._super();

	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();
		finder.initPlusDots();
	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/rtw_plus//randomDirectory/ipad/js/FinderStarter.js */

try {
    console.log("console exists");
}
catch (e) {
    window.console = {};
    window.console.log = function(txt){

    }
    window.console.warn = function(txt){

    }
    window.console.error = function(txt){

    }
}


var finder;
jQuery(document.body).ready(function(){

		finder = new RtwFinder();
		finder.setTemplates(RtwHTMLPages);

		var data = finder.getTemplate("structure");
        jQuery("#finderContainer").html(data.replace(/randomDirectory\//g, finder.getConfig().assetsDirectory));


		/* ADD PAGES START */
finder.addPage(new Accessories1Page());
finder.addPage(new Accessories2Page());
finder.addPage(new Accessories3Page());
finder.addPage(new Accessories4Page());
finder.addPage(new Accessories5Page());
finder.addPage(new Blackandwhite2Page());
finder.addPage(new BlackandwhitePage());
finder.addPage(new HomePage());
finder.addPage(new Jacketspreferred2Page());
finder.addPage(new JacketspreferredPage());
finder.addPage(new Lookofleather2Page());
finder.addPage(new LookofleatherPage());
finder.addPage(new Moderndresses2Page());
finder.addPage(new ModerndressesPage());
finder.addPage(new Prepset2Page());
finder.addPage(new PrepsetPage());
finder.addPage(new Trueblues2Page());
finder.addPage(new TruebluesPage());
/* ADD PAGES END */


finder.setup();



});
