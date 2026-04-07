var TW="172",B9={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},P9={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},SW=0,O$=1,_W=2;var E$=1,jW=2,t8=3,z6=0,T8=1,l8=2,A9=0,o6=1,R$=2,D$=3,k$=4,fW=5,C6=100,xW=101,yW=102,hW=103,vW=104,bW=200,gW=201,pW=202,uW=203,mW=204,lW=205,dW=206,cW=207,nW=208,sW=209,iW=210,oW=211,aW=212,rW=213,tW=214,d7=0,c7=1,n7=2,a6=3,s7=4,i7=5,o7=6,a7=7,eW=0,JQ=1,$Q=2,F9=0,ZQ=1,WQ=2,QQ=3,r7=4,HQ=5,YQ=6,XQ=7;var I6=301,m9=302,t7=303,e7=304,r6=306,KQ=1000,UQ=1001,GQ=1002,V6=1003,FQ=1004;var t6=1005;var l9=1006,JJ=1007;var w6=1008;var T9=1009,NQ=1010,qQ=1011,e6=1012,M$=1013,B6=1014,S9=1015,J7=1016,L$=1017,z$=1018,P6=1020,OQ=35902,EQ=1021,RQ=1022,e8=1023,DQ=1024,kQ=1025,$J=1026,$7=1027,MQ=1028,C$=1029,LQ=1030,I$=1031;var V$=1033,ZJ=33776,WJ=33777,QJ=33778,HJ=33779,w$=35840,B$=35841,P$=35842,A$=35843,T$=36196,S$=37492,_$=37496,j$=37808,f$=37809,x$=37810,y$=37811,h$=37812,v$=37813,b$=37814,g$=37815,p$=37816,u$=37817,m$=37818,l$=37819,d$=37820,c$=37821,YJ=36492,n$=36494,s$=36495,zQ=36283,i$=36284,o$=36285,a$=36286;var CQ=3201;var IQ=0,VQ=1,d9="",A6="srgb",Z7="srgb-linear",r$="linear",Q8="srgb";var wQ=512,BQ=513,PQ=514,t$=515,AQ=516,TQ=517,SQ=518,_Q=519;var e$="300 es",jQ=2000;class N9{addEventListener(J,$){if(this._listeners===void 0)this._listeners={};let Z=this._listeners;if(Z[J]===void 0)Z[J]=[];if(Z[J].indexOf($)===-1)Z[J].push($)}hasEventListener(J,$){if(this._listeners===void 0)return!1;let Z=this._listeners;return Z[J]!==void 0&&Z[J].indexOf($)!==-1}removeEventListener(J,$){if(this._listeners===void 0)return;let W=this._listeners[J];if(W!==void 0){let Q=W.indexOf($);if(Q!==-1)W.splice(Q,1)}}dispatchEvent(J){if(this._listeners===void 0)return;let Z=this._listeners[J.type];if(Z!==void 0){J.target=this;let W=Z.slice(0);for(let Q=0,H=W.length;Q<H;Q++)W[Q].call(this,J);J.target=null}}}var L8=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],WW=1234567,s6=Math.PI/180,M6=180/Math.PI;function T6(){let J=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Z=Math.random()*4294967295|0,W=Math.random()*4294967295|0;return(L8[J&255]+L8[J>>8&255]+L8[J>>16&255]+L8[J>>24&255]+"-"+L8[$&255]+L8[$>>8&255]+"-"+L8[$>>16&15|64]+L8[$>>24&255]+"-"+L8[Z&63|128]+L8[Z>>8&255]+"-"+L8[Z>>16&255]+L8[Z>>24&255]+L8[W&255]+L8[W>>8&255]+L8[W>>16&255]+L8[W>>24&255]).toLowerCase()}function d0(J,$,Z){return Math.max($,Math.min(Z,J))}function JZ(J,$){return(J%$+$)%$}function eH(J,$,Z,W,Q){return W+(J-$)*(Q-W)/(Z-$)}function JY(J,$,Z){if(J!==$)return(Z-J)/($-J);else return 0}function i6(J,$,Z){return(1-Z)*J+Z*$}function $Y(J,$,Z,W){return i6(J,$,1-Math.exp(-Z*W))}function ZY(J,$=1){return $-Math.abs(JZ(J,$*2)-$)}function WY(J,$,Z){if(J<=$)return 0;if(J>=Z)return 1;return J=(J-$)/(Z-$),J*J*(3-2*J)}function QY(J,$,Z){if(J<=$)return 0;if(J>=Z)return 1;return J=(J-$)/(Z-$),J*J*J*(J*(J*6-15)+10)}function HY(J,$){return J+Math.floor(Math.random()*($-J+1))}function YY(J,$){return J+Math.random()*($-J)}function XY(J){return J*(0.5-Math.random())}function KY(J){if(J!==void 0)WW=J;let $=WW+=1831565813;return $=Math.imul($^$>>>15,$|1),$^=$+Math.imul($^$>>>7,$|61),(($^$>>>14)>>>0)/4294967296}function UY(J){return J*s6}function GY(J){return J*M6}function FY(J){return(J&J-1)===0&&J!==0}function NY(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function qY(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function OY(J,$,Z,W,Q){let{cos:H,sin:Y}=Math,X=H(Z/2),K=Y(Z/2),U=H(($+W)/2),G=Y(($+W)/2),F=H(($-W)/2),N=Y(($-W)/2),E=H((W-$)/2),R=Y((W-$)/2);switch(Q){case"XYX":J.set(X*G,K*F,K*N,X*U);break;case"YZY":J.set(K*N,X*G,K*F,X*U);break;case"ZXZ":J.set(K*F,K*N,X*G,X*U);break;case"XZX":J.set(X*G,K*R,K*E,X*U);break;case"YXY":J.set(K*E,X*G,K*R,X*U);break;case"ZYZ":J.set(K*R,K*E,X*G,X*U);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+Q)}}function D6(J,$){switch($.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("Invalid component type.")}}function A8(J,$){switch($.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("Invalid component type.")}}var $Z={DEG2RAD:s6,RAD2DEG:M6,generateUUID:T6,clamp:d0,euclideanModulo:JZ,mapLinear:eH,inverseLerp:JY,lerp:i6,damp:$Y,pingpong:ZY,smoothstep:WY,smootherstep:QY,randInt:HY,randFloat:YY,randFloatSpread:XY,seededRandom:KY,degToRad:UY,radToDeg:GY,isPowerOfTwo:FY,ceilPowerOfTwo:NY,floorPowerOfTwo:qY,setQuaternionFromProperEuler:OY,normalize:A8,denormalize:D6};class A0{constructor(J=0,$=0){A0.prototype.isVector2=!0,this.x=J,this.y=$}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,$){return this.x=J,this.y=$,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,$){switch(J){case 0:this.x=$;break;case 1:this.y=$;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,$){return this.x=J.x+$.x,this.y=J.y+$.y,this}addScaledVector(J,$){return this.x+=J.x*$,this.y+=J.y*$,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,$){return this.x=J.x-$.x,this.y=J.y-$.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let $=this.x,Z=this.y,W=J.elements;return this.x=W[0]*$+W[3]*Z+W[6],this.y=W[1]*$+W[4]*Z+W[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,$){return this.x=d0(this.x,J.x,$.x),this.y=d0(this.y,J.y,$.y),this}clampScalar(J,$){return this.x=d0(this.x,J,$),this.y=d0(this.y,J,$),this}clampLength(J,$){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(d0(Z,J,$))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let $=Math.sqrt(this.lengthSq()*J.lengthSq());if($===0)return Math.PI/2;let Z=this.dot(J)/$;return Math.acos(d0(Z,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let $=this.x-J.x,Z=this.y-J.y;return $*$+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,$){return this.x+=(J.x-this.x)*$,this.y+=(J.y-this.y)*$,this}lerpVectors(J,$,Z){return this.x=J.x+($.x-J.x)*Z,this.y=J.y+($.y-J.y)*Z,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,$=0){return this.x=J[$],this.y=J[$+1],this}toArray(J=[],$=0){return J[$]=this.x,J[$+1]=this.y,J}fromBufferAttribute(J,$){return this.x=J.getX($),this.y=J.getY($),this}rotateAround(J,$){let Z=Math.cos($),W=Math.sin($),Q=this.x-J.x,H=this.y-J.y;return this.x=Q*Z-H*W+J.x,this.y=Q*W+H*Z+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class h0{constructor(J,$,Z,W,Q,H,Y,X,K){if(h0.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,$,Z,W,Q,H,Y,X,K)}set(J,$,Z,W,Q,H,Y,X,K){let U=this.elements;return U[0]=J,U[1]=W,U[2]=Y,U[3]=$,U[4]=Q,U[5]=X,U[6]=Z,U[7]=H,U[8]=K,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let $=this.elements,Z=J.elements;return $[0]=Z[0],$[1]=Z[1],$[2]=Z[2],$[3]=Z[3],$[4]=Z[4],$[5]=Z[5],$[6]=Z[6],$[7]=Z[7],$[8]=Z[8],this}extractBasis(J,$,Z){return J.setFromMatrix3Column(this,0),$.setFromMatrix3Column(this,1),Z.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let $=J.elements;return this.set($[0],$[4],$[8],$[1],$[5],$[9],$[2],$[6],$[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,$){let Z=J.elements,W=$.elements,Q=this.elements,H=Z[0],Y=Z[3],X=Z[6],K=Z[1],U=Z[4],G=Z[7],F=Z[2],N=Z[5],E=Z[8],R=W[0],D=W[3],q=W[6],O=W[1],V=W[4],L=W[7],A=W[2],T=W[5],I=W[8];return Q[0]=H*R+Y*O+X*A,Q[3]=H*D+Y*V+X*T,Q[6]=H*q+Y*L+X*I,Q[1]=K*R+U*O+G*A,Q[4]=K*D+U*V+G*T,Q[7]=K*q+U*L+G*I,Q[2]=F*R+N*O+E*A,Q[5]=F*D+N*V+E*T,Q[8]=F*q+N*L+E*I,this}multiplyScalar(J){let $=this.elements;return $[0]*=J,$[3]*=J,$[6]*=J,$[1]*=J,$[4]*=J,$[7]*=J,$[2]*=J,$[5]*=J,$[8]*=J,this}determinant(){let J=this.elements,$=J[0],Z=J[1],W=J[2],Q=J[3],H=J[4],Y=J[5],X=J[6],K=J[7],U=J[8];return $*H*U-$*Y*K-Z*Q*U+Z*Y*X+W*Q*K-W*H*X}invert(){let J=this.elements,$=J[0],Z=J[1],W=J[2],Q=J[3],H=J[4],Y=J[5],X=J[6],K=J[7],U=J[8],G=U*H-Y*K,F=Y*X-U*Q,N=K*Q-H*X,E=$*G+Z*F+W*N;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);let R=1/E;return J[0]=G*R,J[1]=(W*K-U*Z)*R,J[2]=(Y*Z-W*H)*R,J[3]=F*R,J[4]=(U*$-W*X)*R,J[5]=(W*Q-Y*$)*R,J[6]=N*R,J[7]=(Z*X-K*$)*R,J[8]=(H*$-Z*Q)*R,this}transpose(){let J,$=this.elements;return J=$[1],$[1]=$[3],$[3]=J,J=$[2],$[2]=$[6],$[6]=J,J=$[5],$[5]=$[7],$[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let $=this.elements;return J[0]=$[0],J[1]=$[3],J[2]=$[6],J[3]=$[1],J[4]=$[4],J[5]=$[7],J[6]=$[2],J[7]=$[5],J[8]=$[8],this}setUvTransform(J,$,Z,W,Q,H,Y){let X=Math.cos(Q),K=Math.sin(Q);return this.set(Z*X,Z*K,-Z*(X*H+K*Y)+H+J,-W*K,W*X,-W*(-K*H+X*Y)+Y+$,0,0,1),this}scale(J,$){return this.premultiply(lJ.makeScale(J,$)),this}rotate(J){return this.premultiply(lJ.makeRotation(-J)),this}translate(J,$){return this.premultiply(lJ.makeTranslation(J,$)),this}makeTranslation(J,$){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,$,0,0,1);return this}makeRotation(J){let $=Math.cos(J),Z=Math.sin(J);return this.set($,-Z,0,Z,$,0,0,0,1),this}makeScale(J,$){return this.set(J,0,0,0,$,0,0,0,1),this}equals(J){let $=this.elements,Z=J.elements;for(let W=0;W<9;W++)if($[W]!==Z[W])return!1;return!0}fromArray(J,$=0){for(let Z=0;Z<9;Z++)this.elements[Z]=J[Z+$];return this}toArray(J=[],$=0){let Z=this.elements;return J[$]=Z[0],J[$+1]=Z[1],J[$+2]=Z[2],J[$+3]=Z[3],J[$+4]=Z[4],J[$+5]=Z[5],J[$+6]=Z[6],J[$+7]=Z[7],J[$+8]=Z[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var lJ=new h0;function ZZ(J){for(let $=J.length-1;$>=0;--$)if(J[$]>=65535)return!0;return!1}function L6(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function fQ(){let J=L6("canvas");return J.style.display="block",J}var QW={};function c9(J){if(J in QW)return;QW[J]=!0,console.warn(J)}function xQ(J,$,Z){return new Promise(function(W,Q){function H(){switch(J.clientWaitSync($,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:Q();break;case J.TIMEOUT_EXPIRED:setTimeout(H,Z);break;default:W()}}setTimeout(H,Z)})}function yQ(J){let $=J.elements;$[2]=0.5*$[2]+0.5*$[3],$[6]=0.5*$[6]+0.5*$[7],$[10]=0.5*$[10]+0.5*$[11],$[14]=0.5*$[14]+0.5*$[15]}function hQ(J){let $=J.elements;if($[11]===-1)$[10]=-$[10]-1,$[14]=-$[14];else $[10]=-$[10],$[14]=-$[14]+1}var HW=new h0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),YW=new h0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function EY(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(Q,H,Y){if(this.enabled===!1||H===Y||!H||!Y)return Q;if(this.spaces[H].transfer==="srgb")Q.r=G9(Q.r),Q.g=G9(Q.g),Q.b=G9(Q.b);if(this.spaces[H].primaries!==this.spaces[Y].primaries)Q.applyMatrix3(this.spaces[H].toXYZ),Q.applyMatrix3(this.spaces[Y].fromXYZ);if(this.spaces[Y].transfer==="srgb")Q.r=k6(Q.r),Q.g=k6(Q.g),Q.b=k6(Q.b);return Q},fromWorkingColorSpace:function(Q,H){return this.convert(Q,this.workingColorSpace,H)},toWorkingColorSpace:function(Q,H){return this.convert(Q,H,this.workingColorSpace)},getPrimaries:function(Q){return this.spaces[Q].primaries},getTransfer:function(Q){if(Q==="")return"linear";return this.spaces[Q].transfer},getLuminanceCoefficients:function(Q,H=this.workingColorSpace){return Q.fromArray(this.spaces[H].luminanceCoefficients)},define:function(Q){Object.assign(this.spaces,Q)},_getMatrix:function(Q,H,Y){return Q.copy(this.spaces[H].toXYZ).multiply(this.spaces[Y].fromXYZ)},_getDrawingBufferColorSpace:function(Q){return this.spaces[Q].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(Q=this.workingColorSpace){return this.spaces[Q].workingColorSpaceConfig.unpackColorSpace}},$=[0.64,0.33,0.3,0.6,0.15,0.06],Z=[0.2126,0.7152,0.0722],W=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:$,whitePoint:W,transfer:"linear",toXYZ:HW,fromXYZ:YW,luminanceCoefficients:Z,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:$,whitePoint:W,transfer:"srgb",toXYZ:HW,fromXYZ:YW,luminanceCoefficients:Z,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var i0=EY();function G9(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function k6(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var H6;class WZ{static getDataURL(J){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(H6===void 0)H6=L6("canvas");H6.width=J.width,H6.height=J.height;let Z=H6.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);$=H6}if($.width>2048||$.height>2048)return console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",J),$.toDataURL("image/jpeg",0.6);else return $.toDataURL("image/png")}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let $=L6("canvas");$.width=J.width,$.height=J.height;let Z=$.getContext("2d");Z.drawImage(J,0,0,J.width,J.height);let W=Z.getImageData(0,0,J.width,J.height),Q=W.data;for(let H=0;H<Q.length;H++)Q[H]=G9(Q[H]/255)*255;return Z.putImageData(W,0,0),$}else if(J.data){let $=J.data.slice(0);for(let Z=0;Z<$.length;Z++)if($ instanceof Uint8Array||$ instanceof Uint8ClampedArray)$[Z]=Math.floor(G9($[Z]/255)*255);else $[Z]=G9($[Z]);return{data:$,width:J.width,height:J.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var RY=0;class XJ{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:RY++}),this.uuid=T6(),this.data=J,this.dataReady=!0,this.version=0}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let $=J===void 0||typeof J==="string";if(!$&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let Z={uuid:this.uuid,url:""},W=this.data;if(W!==null){let Q;if(Array.isArray(W)){Q=[];for(let H=0,Y=W.length;H<Y;H++)if(W[H].isDataTexture)Q.push(dJ(W[H].image));else Q.push(dJ(W[H]))}else Q=dJ(W);Z.url=Q}if(!$)J.images[this.uuid]=Z;return Z}}function dJ(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return WZ.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}var DY=0;class I8 extends N9{constructor(J=I8.DEFAULT_IMAGE,$=I8.DEFAULT_MAPPING,Z=1001,W=1001,Q=1006,H=1008,Y=1023,X=1009,K=I8.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:DY++}),this.uuid=T6(),this.name="",this.source=new XJ(J),this.mipmaps=[],this.mapping=$,this.channel=0,this.wrapS=Z,this.wrapT=W,this.magFilter=Q,this.minFilter=H,this.anisotropy=K,this.format=Y,this.internalFormat=null,this.type=X,this.offset=new A0(0,0),this.repeat=new A0(1,1),this.center=new A0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new h0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(J=null){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}toJSON(J){let $=J===void 0||typeof J==="string";if(!$&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let Z={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(!$)J.textures[this.uuid]=Z;return Z}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}I8.DEFAULT_IMAGE=null;I8.DEFAULT_MAPPING=300;I8.DEFAULT_ANISOTROPY=1;class $8{constructor(J=0,$=0,Z=0,W=1){$8.prototype.isVector4=!0,this.x=J,this.y=$,this.z=Z,this.w=W}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,$,Z,W){return this.x=J,this.y=$,this.z=Z,this.w=W,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,$){switch(J){case 0:this.x=$;break;case 1:this.y=$;break;case 2:this.z=$;break;case 3:this.w=$;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,$){return this.x=J.x+$.x,this.y=J.y+$.y,this.z=J.z+$.z,this.w=J.w+$.w,this}addScaledVector(J,$){return this.x+=J.x*$,this.y+=J.y*$,this.z+=J.z*$,this.w+=J.w*$,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,$){return this.x=J.x-$.x,this.y=J.y-$.y,this.z=J.z-$.z,this.w=J.w-$.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let $=this.x,Z=this.y,W=this.z,Q=this.w,H=J.elements;return this.x=H[0]*$+H[4]*Z+H[8]*W+H[12]*Q,this.y=H[1]*$+H[5]*Z+H[9]*W+H[13]*Q,this.z=H[2]*$+H[6]*Z+H[10]*W+H[14]*Q,this.w=H[3]*$+H[7]*Z+H[11]*W+H[15]*Q,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let $=Math.sqrt(1-J.w*J.w);if($<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/$,this.y=J.y/$,this.z=J.z/$;return this}setAxisAngleFromRotationMatrix(J){let $,Z,W,Q,H=0.01,Y=0.1,X=J.elements,K=X[0],U=X[4],G=X[8],F=X[1],N=X[5],E=X[9],R=X[2],D=X[6],q=X[10];if(Math.abs(U-F)<0.01&&Math.abs(G-R)<0.01&&Math.abs(E-D)<0.01){if(Math.abs(U+F)<0.1&&Math.abs(G+R)<0.1&&Math.abs(E+D)<0.1&&Math.abs(K+N+q-3)<0.1)return this.set(1,0,0,0),this;$=Math.PI;let V=(K+1)/2,L=(N+1)/2,A=(q+1)/2,T=(U+F)/4,I=(G+R)/4,B=(E+D)/4;if(V>L&&V>A)if(V<0.01)Z=0,W=0.707106781,Q=0.707106781;else Z=Math.sqrt(V),W=T/Z,Q=I/Z;else if(L>A)if(L<0.01)Z=0.707106781,W=0,Q=0.707106781;else W=Math.sqrt(L),Z=T/W,Q=B/W;else if(A<0.01)Z=0.707106781,W=0.707106781,Q=0;else Q=Math.sqrt(A),Z=I/Q,W=B/Q;return this.set(Z,W,Q,$),this}let O=Math.sqrt((D-E)*(D-E)+(G-R)*(G-R)+(F-U)*(F-U));if(Math.abs(O)<0.001)O=1;return this.x=(D-E)/O,this.y=(G-R)/O,this.z=(F-U)/O,this.w=Math.acos((K+N+q-1)/2),this}setFromMatrixPosition(J){let $=J.elements;return this.x=$[12],this.y=$[13],this.z=$[14],this.w=$[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,$){return this.x=d0(this.x,J.x,$.x),this.y=d0(this.y,J.y,$.y),this.z=d0(this.z,J.z,$.z),this.w=d0(this.w,J.w,$.w),this}clampScalar(J,$){return this.x=d0(this.x,J,$),this.y=d0(this.y,J,$),this.z=d0(this.z,J,$),this.w=d0(this.w,J,$),this}clampLength(J,$){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(d0(Z,J,$))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,$){return this.x+=(J.x-this.x)*$,this.y+=(J.y-this.y)*$,this.z+=(J.z-this.z)*$,this.w+=(J.w-this.w)*$,this}lerpVectors(J,$,Z){return this.x=J.x+($.x-J.x)*Z,this.y=J.y+($.y-J.y)*Z,this.z=J.z+($.z-J.z)*Z,this.w=J.w+($.w-J.w)*Z,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,$=0){return this.x=J[$],this.y=J[$+1],this.z=J[$+2],this.w=J[$+3],this}toArray(J=[],$=0){return J[$]=this.x,J[$+1]=this.y,J[$+2]=this.z,J[$+3]=this.w,J}fromBufferAttribute(J,$){return this.x=J.getX($),this.y=J.getY($),this.z=J.getZ($),this.w=J.getW($),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class QZ extends N9{constructor(J=1,$=1,Z={}){super();this.isRenderTarget=!0,this.width=J,this.height=$,this.depth=1,this.scissor=new $8(0,0,J,$),this.scissorTest=!1,this.viewport=new $8(0,0,J,$);let W={width:J,height:$,depth:1};Z=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},Z);let Q=new I8(W,Z.mapping,Z.wrapS,Z.wrapT,Z.magFilter,Z.minFilter,Z.format,Z.type,Z.anisotropy,Z.colorSpace);Q.flipY=!1,Q.generateMipmaps=Z.generateMipmaps,Q.internalFormat=Z.internalFormat,this.textures=[];let H=Z.count;for(let Y=0;Y<H;Y++)this.textures[Y]=Q.clone(),this.textures[Y].isRenderTargetTexture=!0,this.textures[Y].renderTarget=this;this.depthBuffer=Z.depthBuffer,this.stencilBuffer=Z.stencilBuffer,this.resolveDepthBuffer=Z.resolveDepthBuffer,this.resolveStencilBuffer=Z.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=Z.depthTexture,this.samples=Z.samples}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(J!==null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,$,Z=1){if(this.width!==J||this.height!==$||this.depth!==Z){this.width=J,this.height=$,this.depth=Z;for(let W=0,Q=this.textures.length;W<Q;W++)this.textures[W].image.width=J,this.textures[W].image.height=$,this.textures[W].image.depth=Z;this.dispose()}this.viewport.set(0,0,J,$),this.scissor.set(0,0,J,$)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Z=0,W=J.textures.length;Z<W;Z++)this.textures[Z]=J.textures[Z].clone(),this.textures[Z].isRenderTargetTexture=!0,this.textures[Z].renderTarget=this;let $=Object.assign({},J.texture.image);if(this.texture.source=new XJ($),this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class q9 extends QZ{constructor(J=1,$=1,Z={}){super(J,$,Z);this.isWebGLRenderTarget=!0}}class KJ extends I8{constructor(J=null,$=1,Z=1,W=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:$,height:Z,depth:W},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class HZ extends I8{constructor(J=null,$=1,Z=1,W=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:$,height:Z,depth:W},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class h8{constructor(J=0,$=0,Z=0,W=1){this.isQuaternion=!0,this._x=J,this._y=$,this._z=Z,this._w=W}static slerpFlat(J,$,Z,W,Q,H,Y){let X=Z[W+0],K=Z[W+1],U=Z[W+2],G=Z[W+3],F=Q[H+0],N=Q[H+1],E=Q[H+2],R=Q[H+3];if(Y===0){J[$+0]=X,J[$+1]=K,J[$+2]=U,J[$+3]=G;return}if(Y===1){J[$+0]=F,J[$+1]=N,J[$+2]=E,J[$+3]=R;return}if(G!==R||X!==F||K!==N||U!==E){let D=1-Y,q=X*F+K*N+U*E+G*R,O=q>=0?1:-1,V=1-q*q;if(V>Number.EPSILON){let A=Math.sqrt(V),T=Math.atan2(A,q*O);D=Math.sin(D*T)/A,Y=Math.sin(Y*T)/A}let L=Y*O;if(X=X*D+F*L,K=K*D+N*L,U=U*D+E*L,G=G*D+R*L,D===1-Y){let A=1/Math.sqrt(X*X+K*K+U*U+G*G);X*=A,K*=A,U*=A,G*=A}}J[$]=X,J[$+1]=K,J[$+2]=U,J[$+3]=G}static multiplyQuaternionsFlat(J,$,Z,W,Q,H){let Y=Z[W],X=Z[W+1],K=Z[W+2],U=Z[W+3],G=Q[H],F=Q[H+1],N=Q[H+2],E=Q[H+3];return J[$]=Y*E+U*G+X*N-K*F,J[$+1]=X*E+U*F+K*G-Y*N,J[$+2]=K*E+U*N+Y*F-X*G,J[$+3]=U*E-Y*G-X*F-K*N,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,$,Z,W){return this._x=J,this._y=$,this._z=Z,this._w=W,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,$=!0){let{_x:Z,_y:W,_z:Q,_order:H}=J,Y=Math.cos,X=Math.sin,K=Y(Z/2),U=Y(W/2),G=Y(Q/2),F=X(Z/2),N=X(W/2),E=X(Q/2);switch(H){case"XYZ":this._x=F*U*G+K*N*E,this._y=K*N*G-F*U*E,this._z=K*U*E+F*N*G,this._w=K*U*G-F*N*E;break;case"YXZ":this._x=F*U*G+K*N*E,this._y=K*N*G-F*U*E,this._z=K*U*E-F*N*G,this._w=K*U*G+F*N*E;break;case"ZXY":this._x=F*U*G-K*N*E,this._y=K*N*G+F*U*E,this._z=K*U*E+F*N*G,this._w=K*U*G-F*N*E;break;case"ZYX":this._x=F*U*G-K*N*E,this._y=K*N*G+F*U*E,this._z=K*U*E-F*N*G,this._w=K*U*G+F*N*E;break;case"YZX":this._x=F*U*G+K*N*E,this._y=K*N*G+F*U*E,this._z=K*U*E-F*N*G,this._w=K*U*G-F*N*E;break;case"XZY":this._x=F*U*G-K*N*E,this._y=K*N*G-F*U*E,this._z=K*U*E+F*N*G,this._w=K*U*G+F*N*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+H)}if($===!0)this._onChangeCallback();return this}setFromAxisAngle(J,$){let Z=$/2,W=Math.sin(Z);return this._x=J.x*W,this._y=J.y*W,this._z=J.z*W,this._w=Math.cos(Z),this._onChangeCallback(),this}setFromRotationMatrix(J){let $=J.elements,Z=$[0],W=$[4],Q=$[8],H=$[1],Y=$[5],X=$[9],K=$[2],U=$[6],G=$[10],F=Z+Y+G;if(F>0){let N=0.5/Math.sqrt(F+1);this._w=0.25/N,this._x=(U-X)*N,this._y=(Q-K)*N,this._z=(H-W)*N}else if(Z>Y&&Z>G){let N=2*Math.sqrt(1+Z-Y-G);this._w=(U-X)/N,this._x=0.25*N,this._y=(W+H)/N,this._z=(Q+K)/N}else if(Y>G){let N=2*Math.sqrt(1+Y-Z-G);this._w=(Q-K)/N,this._x=(W+H)/N,this._y=0.25*N,this._z=(X+U)/N}else{let N=2*Math.sqrt(1+G-Z-Y);this._w=(H-W)/N,this._x=(Q+K)/N,this._y=(X+U)/N,this._z=0.25*N}return this._onChangeCallback(),this}setFromUnitVectors(J,$){let Z=J.dot($)+1;if(Z<Number.EPSILON)if(Z=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=Z;else this._x=0,this._y=-J.z,this._z=J.y,this._w=Z;else this._x=J.y*$.z-J.z*$.y,this._y=J.z*$.x-J.x*$.z,this._z=J.x*$.y-J.y*$.x,this._w=Z;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(d0(this.dot(J),-1,1)))}rotateTowards(J,$){let Z=this.angleTo(J);if(Z===0)return this;let W=Math.min(1,$/Z);return this.slerp(J,W),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,$){let{_x:Z,_y:W,_z:Q,_w:H}=J,Y=$._x,X=$._y,K=$._z,U=$._w;return this._x=Z*U+H*Y+W*K-Q*X,this._y=W*U+H*X+Q*Y-Z*K,this._z=Q*U+H*K+Z*X-W*Y,this._w=H*U-Z*Y-W*X-Q*K,this._onChangeCallback(),this}slerp(J,$){if($===0)return this;if($===1)return this.copy(J);let Z=this._x,W=this._y,Q=this._z,H=this._w,Y=H*J._w+Z*J._x+W*J._y+Q*J._z;if(Y<0)this._w=-J._w,this._x=-J._x,this._y=-J._y,this._z=-J._z,Y=-Y;else this.copy(J);if(Y>=1)return this._w=H,this._x=Z,this._y=W,this._z=Q,this;let X=1-Y*Y;if(X<=Number.EPSILON){let N=1-$;return this._w=N*H+$*this._w,this._x=N*Z+$*this._x,this._y=N*W+$*this._y,this._z=N*Q+$*this._z,this.normalize(),this}let K=Math.sqrt(X),U=Math.atan2(K,Y),G=Math.sin((1-$)*U)/K,F=Math.sin($*U)/K;return this._w=H*G+this._w*F,this._x=Z*G+this._x*F,this._y=W*G+this._y*F,this._z=Q*G+this._z*F,this._onChangeCallback(),this}slerpQuaternions(J,$,Z){return this.copy(J).slerp($,Z)}random(){let J=2*Math.PI*Math.random(),$=2*Math.PI*Math.random(),Z=Math.random(),W=Math.sqrt(1-Z),Q=Math.sqrt(Z);return this.set(W*Math.sin(J),W*Math.cos(J),Q*Math.sin($),Q*Math.cos($))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,$=0){return this._x=J[$],this._y=J[$+1],this._z=J[$+2],this._w=J[$+3],this._onChangeCallback(),this}toArray(J=[],$=0){return J[$]=this._x,J[$+1]=this._y,J[$+2]=this._z,J[$+3]=this._w,J}fromBufferAttribute(J,$){return this._x=J.getX($),this._y=J.getY($),this._z=J.getZ($),this._w=J.getW($),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class _{constructor(J=0,$=0,Z=0){_.prototype.isVector3=!0,this.x=J,this.y=$,this.z=Z}set(J,$,Z){if(Z===void 0)Z=this.z;return this.x=J,this.y=$,this.z=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,$){switch(J){case 0:this.x=$;break;case 1:this.y=$;break;case 2:this.z=$;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,$){return this.x=J.x+$.x,this.y=J.y+$.y,this.z=J.z+$.z,this}addScaledVector(J,$){return this.x+=J.x*$,this.y+=J.y*$,this.z+=J.z*$,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,$){return this.x=J.x-$.x,this.y=J.y-$.y,this.z=J.z-$.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,$){return this.x=J.x*$.x,this.y=J.y*$.y,this.z=J.z*$.z,this}applyEuler(J){return this.applyQuaternion(XW.setFromEuler(J))}applyAxisAngle(J,$){return this.applyQuaternion(XW.setFromAxisAngle(J,$))}applyMatrix3(J){let $=this.x,Z=this.y,W=this.z,Q=J.elements;return this.x=Q[0]*$+Q[3]*Z+Q[6]*W,this.y=Q[1]*$+Q[4]*Z+Q[7]*W,this.z=Q[2]*$+Q[5]*Z+Q[8]*W,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let $=this.x,Z=this.y,W=this.z,Q=J.elements,H=1/(Q[3]*$+Q[7]*Z+Q[11]*W+Q[15]);return this.x=(Q[0]*$+Q[4]*Z+Q[8]*W+Q[12])*H,this.y=(Q[1]*$+Q[5]*Z+Q[9]*W+Q[13])*H,this.z=(Q[2]*$+Q[6]*Z+Q[10]*W+Q[14])*H,this}applyQuaternion(J){let $=this.x,Z=this.y,W=this.z,Q=J.x,H=J.y,Y=J.z,X=J.w,K=2*(H*W-Y*Z),U=2*(Y*$-Q*W),G=2*(Q*Z-H*$);return this.x=$+X*K+H*G-Y*U,this.y=Z+X*U+Y*K-Q*G,this.z=W+X*G+Q*U-H*K,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let $=this.x,Z=this.y,W=this.z,Q=J.elements;return this.x=Q[0]*$+Q[4]*Z+Q[8]*W,this.y=Q[1]*$+Q[5]*Z+Q[9]*W,this.z=Q[2]*$+Q[6]*Z+Q[10]*W,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,$){return this.x=d0(this.x,J.x,$.x),this.y=d0(this.y,J.y,$.y),this.z=d0(this.z,J.z,$.z),this}clampScalar(J,$){return this.x=d0(this.x,J,$),this.y=d0(this.y,J,$),this.z=d0(this.z,J,$),this}clampLength(J,$){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(d0(Z,J,$))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,$){return this.x+=(J.x-this.x)*$,this.y+=(J.y-this.y)*$,this.z+=(J.z-this.z)*$,this}lerpVectors(J,$,Z){return this.x=J.x+($.x-J.x)*Z,this.y=J.y+($.y-J.y)*Z,this.z=J.z+($.z-J.z)*Z,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,$){let{x:Z,y:W,z:Q}=J,H=$.x,Y=$.y,X=$.z;return this.x=W*X-Q*Y,this.y=Q*H-Z*X,this.z=Z*Y-W*H,this}projectOnVector(J){let $=J.lengthSq();if($===0)return this.set(0,0,0);let Z=J.dot(this)/$;return this.copy(J).multiplyScalar(Z)}projectOnPlane(J){return cJ.copy(this).projectOnVector(J),this.sub(cJ)}reflect(J){return this.sub(cJ.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let $=Math.sqrt(this.lengthSq()*J.lengthSq());if($===0)return Math.PI/2;let Z=this.dot(J)/$;return Math.acos(d0(Z,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let $=this.x-J.x,Z=this.y-J.y,W=this.z-J.z;return $*$+Z*Z+W*W}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,$,Z){let W=Math.sin($)*J;return this.x=W*Math.sin(Z),this.y=Math.cos($)*J,this.z=W*Math.cos(Z),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,$,Z){return this.x=J*Math.sin($),this.y=Z,this.z=J*Math.cos($),this}setFromMatrixPosition(J){let $=J.elements;return this.x=$[12],this.y=$[13],this.z=$[14],this}setFromMatrixScale(J){let $=this.setFromMatrixColumn(J,0).length(),Z=this.setFromMatrixColumn(J,1).length(),W=this.setFromMatrixColumn(J,2).length();return this.x=$,this.y=Z,this.z=W,this}setFromMatrixColumn(J,$){return this.fromArray(J.elements,$*4)}setFromMatrix3Column(J,$){return this.fromArray(J.elements,$*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,$=0){return this.x=J[$],this.y=J[$+1],this.z=J[$+2],this}toArray(J=[],$=0){return J[$]=this.x,J[$+1]=this.y,J[$+2]=this.z,J}fromBufferAttribute(J,$){return this.x=J.getX($),this.y=J.getY($),this.z=J.getZ($),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,$=Math.random()*2-1,Z=Math.sqrt(1-$*$);return this.x=Z*Math.cos(J),this.y=$,this.z=Z*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var cJ=new _,XW=new h8;class O9{constructor(J=new _(1/0,1/0,1/0),$=new _(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=$}set(J,$){return this.min.copy(J),this.max.copy($),this}setFromArray(J){this.makeEmpty();for(let $=0,Z=J.length;$<Z;$+=3)this.expandByPoint(c8.fromArray(J,$));return this}setFromBufferAttribute(J){this.makeEmpty();for(let $=0,Z=J.count;$<Z;$++)this.expandByPoint(c8.fromBufferAttribute(J,$));return this}setFromPoints(J){this.makeEmpty();for(let $=0,Z=J.length;$<Z;$++)this.expandByPoint(J[$]);return this}setFromCenterAndSize(J,$){let Z=c8.copy($).multiplyScalar(0.5);return this.min.copy(J).sub(Z),this.max.copy(J).add(Z),this}setFromObject(J,$=!1){return this.makeEmpty(),this.expandByObject(J,$)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,$=!1){J.updateWorldMatrix(!1,!1);let Z=J.geometry;if(Z!==void 0){let Q=Z.getAttribute("position");if($===!0&&Q!==void 0&&J.isInstancedMesh!==!0)for(let H=0,Y=Q.count;H<Y;H++){if(J.isMesh===!0)J.getVertexPosition(H,c8);else c8.fromBufferAttribute(Q,H);c8.applyMatrix4(J.matrixWorld),this.expandByPoint(c8)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();L7.copy(J.boundingBox)}else{if(Z.boundingBox===null)Z.computeBoundingBox();L7.copy(Z.boundingBox)}L7.applyMatrix4(J.matrixWorld),this.union(L7)}}let W=J.children;for(let Q=0,H=W.length;Q<H;Q++)this.expandByObject(W[Q],$);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,$){return $.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,c8),c8.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let $,Z;if(J.normal.x>0)$=J.normal.x*this.min.x,Z=J.normal.x*this.max.x;else $=J.normal.x*this.max.x,Z=J.normal.x*this.min.x;if(J.normal.y>0)$+=J.normal.y*this.min.y,Z+=J.normal.y*this.max.y;else $+=J.normal.y*this.max.y,Z+=J.normal.y*this.min.y;if(J.normal.z>0)$+=J.normal.z*this.min.z,Z+=J.normal.z*this.max.z;else $+=J.normal.z*this.max.z,Z+=J.normal.z*this.min.z;return $<=-J.constant&&Z>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(u6),z7.subVectors(this.max,u6),Y6.subVectors(J.a,u6),X6.subVectors(J.b,u6),K6.subVectors(J.c,u6),L9.subVectors(X6,Y6),z9.subVectors(K6,X6),b9.subVectors(Y6,K6);let $=[0,-L9.z,L9.y,0,-z9.z,z9.y,0,-b9.z,b9.y,L9.z,0,-L9.x,z9.z,0,-z9.x,b9.z,0,-b9.x,-L9.y,L9.x,0,-z9.y,z9.x,0,-b9.y,b9.x,0];if(!nJ($,Y6,X6,K6,z7))return!1;if($=[1,0,0,0,1,0,0,0,1],!nJ($,Y6,X6,K6,z7))return!1;return C7.crossVectors(L9,z9),$=[C7.x,C7.y,C7.z],nJ($,Y6,X6,K6,z7)}clampPoint(J,$){return $.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,c8).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(c8).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return H9[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),H9[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),H9[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),H9[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),H9[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),H9[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),H9[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),H9[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(H9),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}}var H9=[new _,new _,new _,new _,new _,new _,new _,new _],c8=new _,L7=new O9,Y6=new _,X6=new _,K6=new _,L9=new _,z9=new _,b9=new _,u6=new _,z7=new _,C7=new _,g9=new _;function nJ(J,$,Z,W,Q){for(let H=0,Y=J.length-3;H<=Y;H+=3){g9.fromArray(J,H);let X=Q.x*Math.abs(g9.x)+Q.y*Math.abs(g9.y)+Q.z*Math.abs(g9.z),K=$.dot(g9),U=Z.dot(g9),G=W.dot(g9);if(Math.max(-Math.max(K,U,G),Math.min(K,U,G))>X)return!1}return!0}var kY=new O9,m6=new _,sJ=new _;class n9{constructor(J=new _,$=-1){this.isSphere=!0,this.center=J,this.radius=$}set(J,$){return this.center.copy(J),this.radius=$,this}setFromPoints(J,$){let Z=this.center;if($!==void 0)Z.copy($);else kY.setFromPoints(J).getCenter(Z);let W=0;for(let Q=0,H=J.length;Q<H;Q++)W=Math.max(W,Z.distanceToSquared(J[Q]));return this.radius=Math.sqrt(W),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let $=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=$*$}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,$){let Z=this.center.distanceToSquared(J);if($.copy(J),Z>this.radius*this.radius)$.sub(this.center).normalize(),$.multiplyScalar(this.radius).add(this.center);return $}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;m6.subVectors(J,this.center);let $=m6.lengthSq();if($>this.radius*this.radius){let Z=Math.sqrt($),W=(Z-this.radius)*0.5;this.center.addScaledVector(m6,W/Z),this.radius+=W}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else sJ.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(m6.copy(J.center).add(sJ)),this.expandByPoint(m6.copy(J.center).sub(sJ));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}}var Y9=new _,iJ=new _,I7=new _,C9=new _,oJ=new _,V7=new _,aJ=new _;class s9{constructor(J=new _,$=new _(0,0,-1)){this.origin=J,this.direction=$}set(J,$){return this.origin.copy(J),this.direction.copy($),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,$){return $.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,Y9)),this}closestPointToPoint(J,$){$.subVectors(J,this.origin);let Z=$.dot(this.direction);if(Z<0)return $.copy(this.origin);return $.copy(this.origin).addScaledVector(this.direction,Z)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let $=Y9.subVectors(J,this.origin).dot(this.direction);if($<0)return this.origin.distanceToSquared(J);return Y9.copy(this.origin).addScaledVector(this.direction,$),Y9.distanceToSquared(J)}distanceSqToSegment(J,$,Z,W){iJ.copy(J).add($).multiplyScalar(0.5),I7.copy($).sub(J).normalize(),C9.copy(this.origin).sub(iJ);let Q=J.distanceTo($)*0.5,H=-this.direction.dot(I7),Y=C9.dot(this.direction),X=-C9.dot(I7),K=C9.lengthSq(),U=Math.abs(1-H*H),G,F,N,E;if(U>0)if(G=H*X-Y,F=H*Y-X,E=Q*U,G>=0)if(F>=-E)if(F<=E){let R=1/U;G*=R,F*=R,N=G*(G+H*F+2*Y)+F*(H*G+F+2*X)+K}else F=Q,G=Math.max(0,-(H*F+Y)),N=-G*G+F*(F+2*X)+K;else F=-Q,G=Math.max(0,-(H*F+Y)),N=-G*G+F*(F+2*X)+K;else if(F<=-E)G=Math.max(0,-(-H*Q+Y)),F=G>0?-Q:Math.min(Math.max(-Q,-X),Q),N=-G*G+F*(F+2*X)+K;else if(F<=E)G=0,F=Math.min(Math.max(-Q,-X),Q),N=F*(F+2*X)+K;else G=Math.max(0,-(H*Q+Y)),F=G>0?Q:Math.min(Math.max(-Q,-X),Q),N=-G*G+F*(F+2*X)+K;else F=H>0?-Q:Q,G=Math.max(0,-(H*F+Y)),N=-G*G+F*(F+2*X)+K;if(Z)Z.copy(this.origin).addScaledVector(this.direction,G);if(W)W.copy(iJ).addScaledVector(I7,F);return N}intersectSphere(J,$){Y9.subVectors(J.center,this.origin);let Z=Y9.dot(this.direction),W=Y9.dot(Y9)-Z*Z,Q=J.radius*J.radius;if(W>Q)return null;let H=Math.sqrt(Q-W),Y=Z-H,X=Z+H;if(X<0)return null;if(Y<0)return this.at(X,$);return this.at(Y,$)}intersectsSphere(J){return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let $=J.normal.dot(this.direction);if($===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let Z=-(this.origin.dot(J.normal)+J.constant)/$;return Z>=0?Z:null}intersectPlane(J,$){let Z=this.distanceToPlane(J);if(Z===null)return null;return this.at(Z,$)}intersectsPlane(J){let $=J.distanceToPoint(this.origin);if($===0)return!0;if(J.normal.dot(this.direction)*$<0)return!0;return!1}intersectBox(J,$){let Z,W,Q,H,Y,X,K=1/this.direction.x,U=1/this.direction.y,G=1/this.direction.z,F=this.origin;if(K>=0)Z=(J.min.x-F.x)*K,W=(J.max.x-F.x)*K;else Z=(J.max.x-F.x)*K,W=(J.min.x-F.x)*K;if(U>=0)Q=(J.min.y-F.y)*U,H=(J.max.y-F.y)*U;else Q=(J.max.y-F.y)*U,H=(J.min.y-F.y)*U;if(Z>H||Q>W)return null;if(Q>Z||isNaN(Z))Z=Q;if(H<W||isNaN(W))W=H;if(G>=0)Y=(J.min.z-F.z)*G,X=(J.max.z-F.z)*G;else Y=(J.max.z-F.z)*G,X=(J.min.z-F.z)*G;if(Z>X||Y>W)return null;if(Y>Z||Z!==Z)Z=Y;if(X<W||W!==W)W=X;if(W<0)return null;return this.at(Z>=0?Z:W,$)}intersectsBox(J){return this.intersectBox(J,Y9)!==null}intersectTriangle(J,$,Z,W,Q){oJ.subVectors($,J),V7.subVectors(Z,J),aJ.crossVectors(oJ,V7);let H=this.direction.dot(aJ),Y;if(H>0){if(W)return null;Y=1}else if(H<0)Y=-1,H=-H;else return null;C9.subVectors(this.origin,J);let X=Y*this.direction.dot(V7.crossVectors(C9,V7));if(X<0)return null;let K=Y*this.direction.dot(oJ.cross(C9));if(K<0)return null;if(X+K>H)return null;let U=-Y*C9.dot(aJ);if(U<0)return null;return this.at(U/H,Q)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class W8{constructor(J,$,Z,W,Q,H,Y,X,K,U,G,F,N,E,R,D){if(W8.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,$,Z,W,Q,H,Y,X,K,U,G,F,N,E,R,D)}set(J,$,Z,W,Q,H,Y,X,K,U,G,F,N,E,R,D){let q=this.elements;return q[0]=J,q[4]=$,q[8]=Z,q[12]=W,q[1]=Q,q[5]=H,q[9]=Y,q[13]=X,q[2]=K,q[6]=U,q[10]=G,q[14]=F,q[3]=N,q[7]=E,q[11]=R,q[15]=D,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new W8().fromArray(this.elements)}copy(J){let $=this.elements,Z=J.elements;return $[0]=Z[0],$[1]=Z[1],$[2]=Z[2],$[3]=Z[3],$[4]=Z[4],$[5]=Z[5],$[6]=Z[6],$[7]=Z[7],$[8]=Z[8],$[9]=Z[9],$[10]=Z[10],$[11]=Z[11],$[12]=Z[12],$[13]=Z[13],$[14]=Z[14],$[15]=Z[15],this}copyPosition(J){let $=this.elements,Z=J.elements;return $[12]=Z[12],$[13]=Z[13],$[14]=Z[14],this}setFromMatrix3(J){let $=J.elements;return this.set($[0],$[3],$[6],0,$[1],$[4],$[7],0,$[2],$[5],$[8],0,0,0,0,1),this}extractBasis(J,$,Z){return J.setFromMatrixColumn(this,0),$.setFromMatrixColumn(this,1),Z.setFromMatrixColumn(this,2),this}makeBasis(J,$,Z){return this.set(J.x,$.x,Z.x,0,J.y,$.y,Z.y,0,J.z,$.z,Z.z,0,0,0,0,1),this}extractRotation(J){let $=this.elements,Z=J.elements,W=1/U6.setFromMatrixColumn(J,0).length(),Q=1/U6.setFromMatrixColumn(J,1).length(),H=1/U6.setFromMatrixColumn(J,2).length();return $[0]=Z[0]*W,$[1]=Z[1]*W,$[2]=Z[2]*W,$[3]=0,$[4]=Z[4]*Q,$[5]=Z[5]*Q,$[6]=Z[6]*Q,$[7]=0,$[8]=Z[8]*H,$[9]=Z[9]*H,$[10]=Z[10]*H,$[11]=0,$[12]=0,$[13]=0,$[14]=0,$[15]=1,this}makeRotationFromEuler(J){let $=this.elements,Z=J.x,W=J.y,Q=J.z,H=Math.cos(Z),Y=Math.sin(Z),X=Math.cos(W),K=Math.sin(W),U=Math.cos(Q),G=Math.sin(Q);if(J.order==="XYZ"){let F=H*U,N=H*G,E=Y*U,R=Y*G;$[0]=X*U,$[4]=-X*G,$[8]=K,$[1]=N+E*K,$[5]=F-R*K,$[9]=-Y*X,$[2]=R-F*K,$[6]=E+N*K,$[10]=H*X}else if(J.order==="YXZ"){let F=X*U,N=X*G,E=K*U,R=K*G;$[0]=F+R*Y,$[4]=E*Y-N,$[8]=H*K,$[1]=H*G,$[5]=H*U,$[9]=-Y,$[2]=N*Y-E,$[6]=R+F*Y,$[10]=H*X}else if(J.order==="ZXY"){let F=X*U,N=X*G,E=K*U,R=K*G;$[0]=F-R*Y,$[4]=-H*G,$[8]=E+N*Y,$[1]=N+E*Y,$[5]=H*U,$[9]=R-F*Y,$[2]=-H*K,$[6]=Y,$[10]=H*X}else if(J.order==="ZYX"){let F=H*U,N=H*G,E=Y*U,R=Y*G;$[0]=X*U,$[4]=E*K-N,$[8]=F*K+R,$[1]=X*G,$[5]=R*K+F,$[9]=N*K-E,$[2]=-K,$[6]=Y*X,$[10]=H*X}else if(J.order==="YZX"){let F=H*X,N=H*K,E=Y*X,R=Y*K;$[0]=X*U,$[4]=R-F*G,$[8]=E*G+N,$[1]=G,$[5]=H*U,$[9]=-Y*U,$[2]=-K*U,$[6]=N*G+E,$[10]=F-R*G}else if(J.order==="XZY"){let F=H*X,N=H*K,E=Y*X,R=Y*K;$[0]=X*U,$[4]=-G,$[8]=K*U,$[1]=F*G+R,$[5]=H*U,$[9]=N*G-E,$[2]=E*G-N,$[6]=Y*U,$[10]=R*G+F}return $[3]=0,$[7]=0,$[11]=0,$[12]=0,$[13]=0,$[14]=0,$[15]=1,this}makeRotationFromQuaternion(J){return this.compose(MY,J,LY)}lookAt(J,$,Z){let W=this.elements;if(x8.subVectors(J,$),x8.lengthSq()===0)x8.z=1;if(x8.normalize(),I9.crossVectors(Z,x8),I9.lengthSq()===0){if(Math.abs(Z.z)===1)x8.x+=0.0001;else x8.z+=0.0001;x8.normalize(),I9.crossVectors(Z,x8)}return I9.normalize(),w7.crossVectors(x8,I9),W[0]=I9.x,W[4]=w7.x,W[8]=x8.x,W[1]=I9.y,W[5]=w7.y,W[9]=x8.y,W[2]=I9.z,W[6]=w7.z,W[10]=x8.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,$){let Z=J.elements,W=$.elements,Q=this.elements,H=Z[0],Y=Z[4],X=Z[8],K=Z[12],U=Z[1],G=Z[5],F=Z[9],N=Z[13],E=Z[2],R=Z[6],D=Z[10],q=Z[14],O=Z[3],V=Z[7],L=Z[11],A=Z[15],T=W[0],I=W[4],B=W[8],b=W[12],z=W[1],C=W[5],S=W[9],h=W[13],u=W[2],l=W[6],o=W[10],d=W[14],t=W[3],m=W[7],X0=W[11],J0=W[15];return Q[0]=H*T+Y*z+X*u+K*t,Q[4]=H*I+Y*C+X*l+K*m,Q[8]=H*B+Y*S+X*o+K*X0,Q[12]=H*b+Y*h+X*d+K*J0,Q[1]=U*T+G*z+F*u+N*t,Q[5]=U*I+G*C+F*l+N*m,Q[9]=U*B+G*S+F*o+N*X0,Q[13]=U*b+G*h+F*d+N*J0,Q[2]=E*T+R*z+D*u+q*t,Q[6]=E*I+R*C+D*l+q*m,Q[10]=E*B+R*S+D*o+q*X0,Q[14]=E*b+R*h+D*d+q*J0,Q[3]=O*T+V*z+L*u+A*t,Q[7]=O*I+V*C+L*l+A*m,Q[11]=O*B+V*S+L*o+A*X0,Q[15]=O*b+V*h+L*d+A*J0,this}multiplyScalar(J){let $=this.elements;return $[0]*=J,$[4]*=J,$[8]*=J,$[12]*=J,$[1]*=J,$[5]*=J,$[9]*=J,$[13]*=J,$[2]*=J,$[6]*=J,$[10]*=J,$[14]*=J,$[3]*=J,$[7]*=J,$[11]*=J,$[15]*=J,this}determinant(){let J=this.elements,$=J[0],Z=J[4],W=J[8],Q=J[12],H=J[1],Y=J[5],X=J[9],K=J[13],U=J[2],G=J[6],F=J[10],N=J[14],E=J[3],R=J[7],D=J[11],q=J[15];return E*(+Q*X*G-W*K*G-Q*Y*F+Z*K*F+W*Y*N-Z*X*N)+R*(+$*X*N-$*K*F+Q*H*F-W*H*N+W*K*U-Q*X*U)+D*(+$*K*G-$*Y*N-Q*H*G+Z*H*N+Q*Y*U-Z*K*U)+q*(-W*Y*U-$*X*G+$*Y*F+W*H*G-Z*H*F+Z*X*U)}transpose(){let J=this.elements,$;return $=J[1],J[1]=J[4],J[4]=$,$=J[2],J[2]=J[8],J[8]=$,$=J[6],J[6]=J[9],J[9]=$,$=J[3],J[3]=J[12],J[12]=$,$=J[7],J[7]=J[13],J[13]=$,$=J[11],J[11]=J[14],J[14]=$,this}setPosition(J,$,Z){let W=this.elements;if(J.isVector3)W[12]=J.x,W[13]=J.y,W[14]=J.z;else W[12]=J,W[13]=$,W[14]=Z;return this}invert(){let J=this.elements,$=J[0],Z=J[1],W=J[2],Q=J[3],H=J[4],Y=J[5],X=J[6],K=J[7],U=J[8],G=J[9],F=J[10],N=J[11],E=J[12],R=J[13],D=J[14],q=J[15],O=G*D*K-R*F*K+R*X*N-Y*D*N-G*X*q+Y*F*q,V=E*F*K-U*D*K-E*X*N+H*D*N+U*X*q-H*F*q,L=U*R*K-E*G*K+E*Y*N-H*R*N-U*Y*q+H*G*q,A=E*G*X-U*R*X-E*Y*F+H*R*F+U*Y*D-H*G*D,T=$*O+Z*V+W*L+Q*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/T;return J[0]=O*I,J[1]=(R*F*Q-G*D*Q-R*W*N+Z*D*N+G*W*q-Z*F*q)*I,J[2]=(Y*D*Q-R*X*Q+R*W*K-Z*D*K-Y*W*q+Z*X*q)*I,J[3]=(G*X*Q-Y*F*Q-G*W*K+Z*F*K+Y*W*N-Z*X*N)*I,J[4]=V*I,J[5]=(U*D*Q-E*F*Q+E*W*N-$*D*N-U*W*q+$*F*q)*I,J[6]=(E*X*Q-H*D*Q-E*W*K+$*D*K+H*W*q-$*X*q)*I,J[7]=(H*F*Q-U*X*Q+U*W*K-$*F*K-H*W*N+$*X*N)*I,J[8]=L*I,J[9]=(E*G*Q-U*R*Q-E*Z*N+$*R*N+U*Z*q-$*G*q)*I,J[10]=(H*R*Q-E*Y*Q+E*Z*K-$*R*K-H*Z*q+$*Y*q)*I,J[11]=(U*Y*Q-H*G*Q-U*Z*K+$*G*K+H*Z*N-$*Y*N)*I,J[12]=A*I,J[13]=(U*R*W-E*G*W+E*Z*F-$*R*F-U*Z*D+$*G*D)*I,J[14]=(E*Y*W-H*R*W-E*Z*X+$*R*X+H*Z*D-$*Y*D)*I,J[15]=(H*G*W-U*Y*W+U*Z*X-$*G*X-H*Z*F+$*Y*F)*I,this}scale(J){let $=this.elements,Z=J.x,W=J.y,Q=J.z;return $[0]*=Z,$[4]*=W,$[8]*=Q,$[1]*=Z,$[5]*=W,$[9]*=Q,$[2]*=Z,$[6]*=W,$[10]*=Q,$[3]*=Z,$[7]*=W,$[11]*=Q,this}getMaxScaleOnAxis(){let J=this.elements,$=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],Z=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],W=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max($,Z,W))}makeTranslation(J,$,Z){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,$,0,0,1,Z,0,0,0,1);return this}makeRotationX(J){let $=Math.cos(J),Z=Math.sin(J);return this.set(1,0,0,0,0,$,-Z,0,0,Z,$,0,0,0,0,1),this}makeRotationY(J){let $=Math.cos(J),Z=Math.sin(J);return this.set($,0,Z,0,0,1,0,0,-Z,0,$,0,0,0,0,1),this}makeRotationZ(J){let $=Math.cos(J),Z=Math.sin(J);return this.set($,-Z,0,0,Z,$,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,$){let Z=Math.cos($),W=Math.sin($),Q=1-Z,H=J.x,Y=J.y,X=J.z,K=Q*H,U=Q*Y;return this.set(K*H+Z,K*Y-W*X,K*X+W*Y,0,K*Y+W*X,U*Y+Z,U*X-W*H,0,K*X-W*Y,U*X+W*H,Q*X*X+Z,0,0,0,0,1),this}makeScale(J,$,Z){return this.set(J,0,0,0,0,$,0,0,0,0,Z,0,0,0,0,1),this}makeShear(J,$,Z,W,Q,H){return this.set(1,Z,Q,0,J,1,H,0,$,W,1,0,0,0,0,1),this}compose(J,$,Z){let W=this.elements,Q=$._x,H=$._y,Y=$._z,X=$._w,K=Q+Q,U=H+H,G=Y+Y,F=Q*K,N=Q*U,E=Q*G,R=H*U,D=H*G,q=Y*G,O=X*K,V=X*U,L=X*G,A=Z.x,T=Z.y,I=Z.z;return W[0]=(1-(R+q))*A,W[1]=(N+L)*A,W[2]=(E-V)*A,W[3]=0,W[4]=(N-L)*T,W[5]=(1-(F+q))*T,W[6]=(D+O)*T,W[7]=0,W[8]=(E+V)*I,W[9]=(D-O)*I,W[10]=(1-(F+R))*I,W[11]=0,W[12]=J.x,W[13]=J.y,W[14]=J.z,W[15]=1,this}decompose(J,$,Z){let W=this.elements,Q=U6.set(W[0],W[1],W[2]).length(),H=U6.set(W[4],W[5],W[6]).length(),Y=U6.set(W[8],W[9],W[10]).length();if(this.determinant()<0)Q=-Q;J.x=W[12],J.y=W[13],J.z=W[14],n8.copy(this);let K=1/Q,U=1/H,G=1/Y;return n8.elements[0]*=K,n8.elements[1]*=K,n8.elements[2]*=K,n8.elements[4]*=U,n8.elements[5]*=U,n8.elements[6]*=U,n8.elements[8]*=G,n8.elements[9]*=G,n8.elements[10]*=G,$.setFromRotationMatrix(n8),Z.x=Q,Z.y=H,Z.z=Y,this}makePerspective(J,$,Z,W,Q,H,Y=2000){let X=this.elements,K=2*Q/($-J),U=2*Q/(Z-W),G=($+J)/($-J),F=(Z+W)/(Z-W),N,E;if(Y===2000)N=-(H+Q)/(H-Q),E=-2*H*Q/(H-Q);else if(Y===2001)N=-H/(H-Q),E=-H*Q/(H-Q);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+Y);return X[0]=K,X[4]=0,X[8]=G,X[12]=0,X[1]=0,X[5]=U,X[9]=F,X[13]=0,X[2]=0,X[6]=0,X[10]=N,X[14]=E,X[3]=0,X[7]=0,X[11]=-1,X[15]=0,this}makeOrthographic(J,$,Z,W,Q,H,Y=2000){let X=this.elements,K=1/($-J),U=1/(Z-W),G=1/(H-Q),F=($+J)*K,N=(Z+W)*U,E,R;if(Y===2000)E=(H+Q)*G,R=-2*G;else if(Y===2001)E=Q*G,R=-1*G;else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+Y);return X[0]=2*K,X[4]=0,X[8]=0,X[12]=-F,X[1]=0,X[5]=2*U,X[9]=0,X[13]=-N,X[2]=0,X[6]=0,X[10]=R,X[14]=-E,X[3]=0,X[7]=0,X[11]=0,X[15]=1,this}equals(J){let $=this.elements,Z=J.elements;for(let W=0;W<16;W++)if($[W]!==Z[W])return!1;return!0}fromArray(J,$=0){for(let Z=0;Z<16;Z++)this.elements[Z]=J[Z+$];return this}toArray(J=[],$=0){let Z=this.elements;return J[$]=Z[0],J[$+1]=Z[1],J[$+2]=Z[2],J[$+3]=Z[3],J[$+4]=Z[4],J[$+5]=Z[5],J[$+6]=Z[6],J[$+7]=Z[7],J[$+8]=Z[8],J[$+9]=Z[9],J[$+10]=Z[10],J[$+11]=Z[11],J[$+12]=Z[12],J[$+13]=Z[13],J[$+14]=Z[14],J[$+15]=Z[15],J}}var U6=new _,n8=new W8,MY=new _(0,0,0),LY=new _(1,1,1),I9=new _,w7=new _,x8=new _,KW=new W8,UW=new h8;class m8{constructor(J=0,$=0,Z=0,W=m8.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=$,this._z=Z,this._order=W}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,$,Z,W=this._order){return this._x=J,this._y=$,this._z=Z,this._order=W,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,$=this._order,Z=!0){let W=J.elements,Q=W[0],H=W[4],Y=W[8],X=W[1],K=W[5],U=W[9],G=W[2],F=W[6],N=W[10];switch($){case"XYZ":if(this._y=Math.asin(d0(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,N),this._z=Math.atan2(-H,Q);else this._x=Math.atan2(F,K),this._z=0;break;case"YXZ":if(this._x=Math.asin(-d0(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(Y,N),this._z=Math.atan2(X,K);else this._y=Math.atan2(-G,Q),this._z=0;break;case"ZXY":if(this._x=Math.asin(d0(F,-1,1)),Math.abs(F)<0.9999999)this._y=Math.atan2(-G,N),this._z=Math.atan2(-H,K);else this._y=0,this._z=Math.atan2(X,Q);break;case"ZYX":if(this._y=Math.asin(-d0(G,-1,1)),Math.abs(G)<0.9999999)this._x=Math.atan2(F,N),this._z=Math.atan2(X,Q);else this._x=0,this._z=Math.atan2(-H,K);break;case"YZX":if(this._z=Math.asin(d0(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-U,K),this._y=Math.atan2(-G,Q);else this._x=0,this._y=Math.atan2(Y,N);break;case"XZY":if(this._z=Math.asin(-d0(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(F,K),this._y=Math.atan2(Y,Q);else this._x=Math.atan2(-U,N),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+$)}if(this._order=$,Z===!0)this._onChangeCallback();return this}setFromQuaternion(J,$,Z){return KW.makeRotationFromQuaternion(J),this.setFromRotationMatrix(KW,$,Z)}setFromVector3(J,$=this._order){return this.set(J.x,J.y,J.z,$)}reorder(J){return UW.setFromEuler(this),this.setFromQuaternion(UW,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],$=0){return J[$]=this._x,J[$+1]=this._y,J[$+2]=this._z,J[$+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}m8.DEFAULT_ORDER="XYZ";class UJ{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var zY=0,GW=new _,G6=new h8,X9=new W8,B7=new _,l6=new _,CY=new _,IY=new h8,FW=new _(1,0,0),NW=new _(0,1,0),qW=new _(0,0,1),OW={type:"added"},VY={type:"removed"},F6={type:"childadded",child:null},rJ={type:"childremoved",child:null};class q8 extends N9{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:zY++}),this.uuid=T6(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=q8.DEFAULT_UP.clone();let J=new _,$=new m8,Z=new h8,W=new _(1,1,1);function Q(){Z.setFromEuler($,!1)}function H(){$.setFromQuaternion(Z,void 0,!1)}$._onChange(Q),Z._onChange(H),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:$},quaternion:{configurable:!0,enumerable:!0,value:Z},scale:{configurable:!0,enumerable:!0,value:W},modelViewMatrix:{value:new W8},normalMatrix:{value:new h0}}),this.matrix=new W8,this.matrixWorld=new W8,this.matrixAutoUpdate=q8.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=q8.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new UJ,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,$){this.quaternion.setFromAxisAngle(J,$)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,$){return G6.setFromAxisAngle(J,$),this.quaternion.multiply(G6),this}rotateOnWorldAxis(J,$){return G6.setFromAxisAngle(J,$),this.quaternion.premultiply(G6),this}rotateX(J){return this.rotateOnAxis(FW,J)}rotateY(J){return this.rotateOnAxis(NW,J)}rotateZ(J){return this.rotateOnAxis(qW,J)}translateOnAxis(J,$){return GW.copy(J).applyQuaternion(this.quaternion),this.position.add(GW.multiplyScalar($)),this}translateX(J){return this.translateOnAxis(FW,J)}translateY(J){return this.translateOnAxis(NW,J)}translateZ(J){return this.translateOnAxis(qW,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(X9.copy(this.matrixWorld).invert())}lookAt(J,$,Z){if(J.isVector3)B7.copy(J);else B7.set(J,$,Z);let W=this.parent;if(this.updateWorldMatrix(!0,!1),l6.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)X9.lookAt(l6,B7,this.up);else X9.lookAt(B7,l6,this.up);if(this.quaternion.setFromRotationMatrix(X9),W)X9.extractRotation(W.matrixWorld),G6.setFromRotationMatrix(X9),this.quaternion.premultiply(G6.invert())}add(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.add(arguments[$]);return this}if(J===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(OW),F6.child=J,this.dispatchEvent(F6),F6.child=null;else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let Z=0;Z<arguments.length;Z++)this.remove(arguments[Z]);return this}let $=this.children.indexOf(J);if($!==-1)J.parent=null,this.children.splice($,1),J.dispatchEvent(VY),rJ.child=J,this.dispatchEvent(rJ),rJ.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),X9.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),X9.multiply(J.parent.matrixWorld);return J.applyMatrix4(X9),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(OW),F6.child=J,this.dispatchEvent(F6),F6.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,$){if(this[J]===$)return this;for(let Z=0,W=this.children.length;Z<W;Z++){let H=this.children[Z].getObjectByProperty(J,$);if(H!==void 0)return H}return}getObjectsByProperty(J,$,Z=[]){if(this[J]===$)Z.push(this);let W=this.children;for(let Q=0,H=W.length;Q<H;Q++)W[Q].getObjectsByProperty(J,$,Z);return Z}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(l6,J,CY),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(l6,IY,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let $=this.matrixWorld.elements;return J.set($[8],$[9],$[10]).normalize()}raycast(){}traverse(J){J(this);let $=this.children;for(let Z=0,W=$.length;Z<W;Z++)$[Z].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let $=this.children;for(let Z=0,W=$.length;Z<W;Z++)$[Z].traverseVisible(J)}traverseAncestors(J){let $=this.parent;if($!==null)J($),$.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let $=this.children;for(let Z=0,W=$.length;Z<W;Z++)$[Z].updateMatrixWorld(J)}updateWorldMatrix(J,$){let Z=this.parent;if(J===!0&&Z!==null)Z.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if($===!0){let W=this.children;for(let Q=0,H=W.length;Q<H;Q++)W[Q].updateWorldMatrix(!1,!0)}}toJSON(J){let $=J===void 0||typeof J==="string",Z={};if($)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},Z.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"};let W={};if(W.uuid=this.uuid,W.type=this.type,this.name!=="")W.name=this.name;if(this.castShadow===!0)W.castShadow=!0;if(this.receiveShadow===!0)W.receiveShadow=!0;if(this.visible===!1)W.visible=!1;if(this.frustumCulled===!1)W.frustumCulled=!1;if(this.renderOrder!==0)W.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)W.userData=this.userData;if(W.layers=this.layers.mask,W.matrix=this.matrix.toArray(),W.up=this.up.toArray(),this.matrixAutoUpdate===!1)W.matrixAutoUpdate=!1;if(this.isInstancedMesh){if(W.type="InstancedMesh",W.count=this.count,W.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)W.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(W.type="BatchedMesh",W.perObjectFrustumCulled=this.perObjectFrustumCulled,W.sortObjects=this.sortObjects,W.drawRanges=this._drawRanges,W.reservedRanges=this._reservedRanges,W.visibility=this._visibility,W.active=this._active,W.bounds=this._bounds.map((Y)=>({boxInitialized:Y.boxInitialized,boxMin:Y.box.min.toArray(),boxMax:Y.box.max.toArray(),sphereInitialized:Y.sphereInitialized,sphereRadius:Y.sphere.radius,sphereCenter:Y.sphere.center.toArray()})),W.maxInstanceCount=this._maxInstanceCount,W.maxVertexCount=this._maxVertexCount,W.maxIndexCount=this._maxIndexCount,W.geometryInitialized=this._geometryInitialized,W.geometryCount=this._geometryCount,W.matricesTexture=this._matricesTexture.toJSON(J),this._colorsTexture!==null)W.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)W.boundingSphere={center:W.boundingSphere.center.toArray(),radius:W.boundingSphere.radius};if(this.boundingBox!==null)W.boundingBox={min:W.boundingBox.min.toArray(),max:W.boundingBox.max.toArray()}}function Q(Y,X){if(Y[X.uuid]===void 0)Y[X.uuid]=X.toJSON(J);return X.uuid}if(this.isScene){if(this.background){if(this.background.isColor)W.background=this.background.toJSON();else if(this.background.isTexture)W.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)W.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){W.geometry=Q(J.geometries,this.geometry);let Y=this.geometry.parameters;if(Y!==void 0&&Y.shapes!==void 0){let X=Y.shapes;if(Array.isArray(X))for(let K=0,U=X.length;K<U;K++){let G=X[K];Q(J.shapes,G)}else Q(J.shapes,X)}}if(this.isSkinnedMesh){if(W.bindMode=this.bindMode,W.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)Q(J.skeletons,this.skeleton),W.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let Y=[];for(let X=0,K=this.material.length;X<K;X++)Y.push(Q(J.materials,this.material[X]));W.material=Y}else W.material=Q(J.materials,this.material);if(this.children.length>0){W.children=[];for(let Y=0;Y<this.children.length;Y++)W.children.push(this.children[Y].toJSON(J).object)}if(this.animations.length>0){W.animations=[];for(let Y=0;Y<this.animations.length;Y++){let X=this.animations[Y];W.animations.push(Q(J.animations,X))}}if($){let Y=H(J.geometries),X=H(J.materials),K=H(J.textures),U=H(J.images),G=H(J.shapes),F=H(J.skeletons),N=H(J.animations),E=H(J.nodes);if(Y.length>0)Z.geometries=Y;if(X.length>0)Z.materials=X;if(K.length>0)Z.textures=K;if(U.length>0)Z.images=U;if(G.length>0)Z.shapes=G;if(F.length>0)Z.skeletons=F;if(N.length>0)Z.animations=N;if(E.length>0)Z.nodes=E}return Z.object=W,Z;function H(Y){let X=[];for(let K in Y){let U=Y[K];delete U.metadata,X.push(U)}return X}}clone(J){return new this.constructor().copy(this,J)}copy(J,$=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),$===!0)for(let Z=0;Z<J.children.length;Z++){let W=J.children[Z];this.add(W.clone())}return this}}q8.DEFAULT_UP=new _(0,1,0);q8.DEFAULT_MATRIX_AUTO_UPDATE=!0;q8.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var s8=new _,K9=new _,tJ=new _,U9=new _,N6=new _,q6=new _,EW=new _,eJ=new _,J$=new _,$$=new _,Z$=new $8,W$=new $8,Q$=new $8;class p8{constructor(J=new _,$=new _,Z=new _){this.a=J,this.b=$,this.c=Z}static getNormal(J,$,Z,W){W.subVectors(Z,$),s8.subVectors(J,$),W.cross(s8);let Q=W.lengthSq();if(Q>0)return W.multiplyScalar(1/Math.sqrt(Q));return W.set(0,0,0)}static getBarycoord(J,$,Z,W,Q){s8.subVectors(W,$),K9.subVectors(Z,$),tJ.subVectors(J,$);let H=s8.dot(s8),Y=s8.dot(K9),X=s8.dot(tJ),K=K9.dot(K9),U=K9.dot(tJ),G=H*K-Y*Y;if(G===0)return Q.set(0,0,0),null;let F=1/G,N=(K*X-Y*U)*F,E=(H*U-Y*X)*F;return Q.set(1-N-E,E,N)}static containsPoint(J,$,Z,W){if(this.getBarycoord(J,$,Z,W,U9)===null)return!1;return U9.x>=0&&U9.y>=0&&U9.x+U9.y<=1}static getInterpolation(J,$,Z,W,Q,H,Y,X){if(this.getBarycoord(J,$,Z,W,U9)===null){if(X.x=0,X.y=0,"z"in X)X.z=0;if("w"in X)X.w=0;return null}return X.setScalar(0),X.addScaledVector(Q,U9.x),X.addScaledVector(H,U9.y),X.addScaledVector(Y,U9.z),X}static getInterpolatedAttribute(J,$,Z,W,Q,H){return Z$.setScalar(0),W$.setScalar(0),Q$.setScalar(0),Z$.fromBufferAttribute(J,$),W$.fromBufferAttribute(J,Z),Q$.fromBufferAttribute(J,W),H.setScalar(0),H.addScaledVector(Z$,Q.x),H.addScaledVector(W$,Q.y),H.addScaledVector(Q$,Q.z),H}static isFrontFacing(J,$,Z,W){return s8.subVectors(Z,$),K9.subVectors(J,$),s8.cross(K9).dot(W)<0?!0:!1}set(J,$,Z){return this.a.copy(J),this.b.copy($),this.c.copy(Z),this}setFromPointsAndIndices(J,$,Z,W){return this.a.copy(J[$]),this.b.copy(J[Z]),this.c.copy(J[W]),this}setFromAttributeAndIndices(J,$,Z,W){return this.a.fromBufferAttribute(J,$),this.b.fromBufferAttribute(J,Z),this.c.fromBufferAttribute(J,W),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return s8.subVectors(this.c,this.b),K9.subVectors(this.a,this.b),s8.cross(K9).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return p8.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,$){return p8.getBarycoord(J,this.a,this.b,this.c,$)}getInterpolation(J,$,Z,W,Q){return p8.getInterpolation(J,this.a,this.b,this.c,$,Z,W,Q)}containsPoint(J){return p8.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return p8.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,$){let Z=this.a,W=this.b,Q=this.c,H,Y;N6.subVectors(W,Z),q6.subVectors(Q,Z),eJ.subVectors(J,Z);let X=N6.dot(eJ),K=q6.dot(eJ);if(X<=0&&K<=0)return $.copy(Z);J$.subVectors(J,W);let U=N6.dot(J$),G=q6.dot(J$);if(U>=0&&G<=U)return $.copy(W);let F=X*G-U*K;if(F<=0&&X>=0&&U<=0)return H=X/(X-U),$.copy(Z).addScaledVector(N6,H);$$.subVectors(J,Q);let N=N6.dot($$),E=q6.dot($$);if(E>=0&&N<=E)return $.copy(Q);let R=N*K-X*E;if(R<=0&&K>=0&&E<=0)return Y=K/(K-E),$.copy(Z).addScaledVector(q6,Y);let D=U*E-N*G;if(D<=0&&G-U>=0&&N-E>=0)return EW.subVectors(Q,W),Y=(G-U)/(G-U+(N-E)),$.copy(W).addScaledVector(EW,Y);let q=1/(D+R+F);return H=R*q,Y=F*q,$.copy(Z).addScaledVector(N6,H).addScaledVector(q6,Y)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}var vQ={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},V9={h:0,s:0,l:0},P7={h:0,s:0,l:0};function H$(J,$,Z){if(Z<0)Z+=1;if(Z>1)Z-=1;if(Z<0.16666666666666666)return J+($-J)*6*Z;if(Z<0.5)return $;if(Z<0.6666666666666666)return J+($-J)*6*(0.6666666666666666-Z);return J}class _0{constructor(J,$,Z){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,$,Z)}set(J,$,Z){if($===void 0&&Z===void 0){let W=J;if(W&&W.isColor)this.copy(W);else if(typeof W==="number")this.setHex(W);else if(typeof W==="string")this.setStyle(W)}else this.setRGB(J,$,Z);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,$="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,i0.toWorkingColorSpace(this,$),this}setRGB(J,$,Z,W=i0.workingColorSpace){return this.r=J,this.g=$,this.b=Z,i0.toWorkingColorSpace(this,W),this}setHSL(J,$,Z,W=i0.workingColorSpace){if(J=JZ(J,1),$=d0($,0,1),Z=d0(Z,0,1),$===0)this.r=this.g=this.b=Z;else{let Q=Z<=0.5?Z*(1+$):Z+$-Z*$,H=2*Z-Q;this.r=H$(H,Q,J+0.3333333333333333),this.g=H$(H,Q,J),this.b=H$(H,Q,J-0.3333333333333333)}return i0.toWorkingColorSpace(this,W),this}setStyle(J,$="srgb"){function Z(Q){if(Q===void 0)return;if(parseFloat(Q)<1)console.warn("THREE.Color: Alpha component of "+J+" will be ignored.")}let W;if(W=/^(\w+)\(([^\)]*)\)/.exec(J)){let Q,H=W[1],Y=W[2];switch(H){case"rgb":case"rgba":if(Q=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return Z(Q[4]),this.setRGB(Math.min(255,parseInt(Q[1],10))/255,Math.min(255,parseInt(Q[2],10))/255,Math.min(255,parseInt(Q[3],10))/255,$);if(Q=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return Z(Q[4]),this.setRGB(Math.min(100,parseInt(Q[1],10))/100,Math.min(100,parseInt(Q[2],10))/100,Math.min(100,parseInt(Q[3],10))/100,$);break;case"hsl":case"hsla":if(Q=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return Z(Q[4]),this.setHSL(parseFloat(Q[1])/360,parseFloat(Q[2])/100,parseFloat(Q[3])/100,$);break;default:console.warn("THREE.Color: Unknown color model "+J)}}else if(W=/^\#([A-Fa-f\d]+)$/.exec(J)){let Q=W[1],H=Q.length;if(H===3)return this.setRGB(parseInt(Q.charAt(0),16)/15,parseInt(Q.charAt(1),16)/15,parseInt(Q.charAt(2),16)/15,$);else if(H===6)return this.setHex(parseInt(Q,16),$);else console.warn("THREE.Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,$);return this}setColorName(J,$="srgb"){let Z=vQ[J.toLowerCase()];if(Z!==void 0)this.setHex(Z,$);else console.warn("THREE.Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=G9(J.r),this.g=G9(J.g),this.b=G9(J.b),this}copyLinearToSRGB(J){return this.r=k6(J.r),this.g=k6(J.g),this.b=k6(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return i0.fromWorkingColorSpace(z8.copy(this),J),Math.round(d0(z8.r*255,0,255))*65536+Math.round(d0(z8.g*255,0,255))*256+Math.round(d0(z8.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,$=i0.workingColorSpace){i0.fromWorkingColorSpace(z8.copy(this),$);let{r:Z,g:W,b:Q}=z8,H=Math.max(Z,W,Q),Y=Math.min(Z,W,Q),X,K,U=(Y+H)/2;if(Y===H)X=0,K=0;else{let G=H-Y;switch(K=U<=0.5?G/(H+Y):G/(2-H-Y),H){case Z:X=(W-Q)/G+(W<Q?6:0);break;case W:X=(Q-Z)/G+2;break;case Q:X=(Z-W)/G+4;break}X/=6}return J.h=X,J.s=K,J.l=U,J}getRGB(J,$=i0.workingColorSpace){return i0.fromWorkingColorSpace(z8.copy(this),$),J.r=z8.r,J.g=z8.g,J.b=z8.b,J}getStyle(J="srgb"){i0.fromWorkingColorSpace(z8.copy(this),J);let{r:$,g:Z,b:W}=z8;if(J!=="srgb")return`color(${J} ${$.toFixed(3)} ${Z.toFixed(3)} ${W.toFixed(3)})`;return`rgb(${Math.round($*255)},${Math.round(Z*255)},${Math.round(W*255)})`}offsetHSL(J,$,Z){return this.getHSL(V9),this.setHSL(V9.h+J,V9.s+$,V9.l+Z)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,$){return this.r=J.r+$.r,this.g=J.g+$.g,this.b=J.b+$.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,$){return this.r+=(J.r-this.r)*$,this.g+=(J.g-this.g)*$,this.b+=(J.b-this.b)*$,this}lerpColors(J,$,Z){return this.r=J.r+($.r-J.r)*Z,this.g=J.g+($.g-J.g)*Z,this.b=J.b+($.b-J.b)*Z,this}lerpHSL(J,$){this.getHSL(V9),J.getHSL(P7);let Z=i6(V9.h,P7.h,$),W=i6(V9.s,P7.s,$),Q=i6(V9.l,P7.l,$);return this.setHSL(Z,W,Q),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let $=this.r,Z=this.g,W=this.b,Q=J.elements;return this.r=Q[0]*$+Q[3]*Z+Q[6]*W,this.g=Q[1]*$+Q[4]*Z+Q[7]*W,this.b=Q[2]*$+Q[5]*Z+Q[8]*W,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,$=0){return this.r=J[$],this.g=J[$+1],this.b=J[$+2],this}toArray(J=[],$=0){return J[$]=this.r,J[$+1]=this.g,J[$+2]=this.b,J}fromBufferAttribute(J,$){return this.r=J.getX($),this.g=J.getY($),this.b=J.getZ($),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var z8=new _0;_0.NAMES=vQ;var wY=0;class J9 extends N9{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:wY++}),this.uuid=T6(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let $ in J){let Z=J[$];if(Z===void 0){console.warn(`THREE.Material: parameter '${$}' has value of undefined.`);continue}let W=this[$];if(W===void 0){console.warn(`THREE.Material: '${$}' is not a property of THREE.${this.type}.`);continue}if(W&&W.isColor)W.set(Z);else if(W&&W.isVector3&&(Z&&Z.isVector3))W.copy(Z);else this[$]=Z}}toJSON(J){let $=J===void 0||typeof J==="string";if($)J={textures:{},images:{}};let Z={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};if(Z.uuid=this.uuid,Z.type=this.type,this.name!=="")Z.name=this.name;if(this.color&&this.color.isColor)Z.color=this.color.getHex();if(this.roughness!==void 0)Z.roughness=this.roughness;if(this.metalness!==void 0)Z.metalness=this.metalness;if(this.sheen!==void 0)Z.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)Z.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)Z.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)Z.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)Z.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)Z.specular=this.specular.getHex();if(this.specularIntensity!==void 0)Z.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)Z.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)Z.shininess=this.shininess;if(this.clearcoat!==void 0)Z.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)Z.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)Z.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)Z.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)Z.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,Z.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.dispersion!==void 0)Z.dispersion=this.dispersion;if(this.iridescence!==void 0)Z.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)Z.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)Z.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)Z.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)Z.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)Z.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)Z.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)Z.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)Z.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)Z.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)Z.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)Z.lightMap=this.lightMap.toJSON(J).uuid,Z.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)Z.aoMap=this.aoMap.toJSON(J).uuid,Z.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)Z.bumpMap=this.bumpMap.toJSON(J).uuid,Z.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)Z.normalMap=this.normalMap.toJSON(J).uuid,Z.normalMapType=this.normalMapType,Z.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)Z.displacementMap=this.displacementMap.toJSON(J).uuid,Z.displacementScale=this.displacementScale,Z.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)Z.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)Z.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)Z.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)Z.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)Z.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)Z.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if(Z.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)Z.combine=this.combine}if(this.envMapRotation!==void 0)Z.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)Z.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)Z.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)Z.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)Z.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)Z.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)Z.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)Z.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)Z.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)Z.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)Z.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)Z.size=this.size;if(this.shadowSide!==null)Z.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)Z.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)Z.blending=this.blending;if(this.side!==0)Z.side=this.side;if(this.vertexColors===!0)Z.vertexColors=!0;if(this.opacity<1)Z.opacity=this.opacity;if(this.transparent===!0)Z.transparent=!0;if(this.blendSrc!==204)Z.blendSrc=this.blendSrc;if(this.blendDst!==205)Z.blendDst=this.blendDst;if(this.blendEquation!==100)Z.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)Z.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)Z.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)Z.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)Z.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)Z.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)Z.depthFunc=this.depthFunc;if(this.depthTest===!1)Z.depthTest=this.depthTest;if(this.depthWrite===!1)Z.depthWrite=this.depthWrite;if(this.colorWrite===!1)Z.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)Z.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)Z.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)Z.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)Z.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)Z.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)Z.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)Z.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)Z.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)Z.rotation=this.rotation;if(this.polygonOffset===!0)Z.polygonOffset=!0;if(this.polygonOffsetFactor!==0)Z.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)Z.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)Z.linewidth=this.linewidth;if(this.dashSize!==void 0)Z.dashSize=this.dashSize;if(this.gapSize!==void 0)Z.gapSize=this.gapSize;if(this.scale!==void 0)Z.scale=this.scale;if(this.dithering===!0)Z.dithering=!0;if(this.alphaTest>0)Z.alphaTest=this.alphaTest;if(this.alphaHash===!0)Z.alphaHash=!0;if(this.alphaToCoverage===!0)Z.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)Z.premultipliedAlpha=!0;if(this.forceSinglePass===!0)Z.forceSinglePass=!0;if(this.wireframe===!0)Z.wireframe=!0;if(this.wireframeLinewidth>1)Z.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")Z.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")Z.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)Z.flatShading=!0;if(this.visible===!1)Z.visible=!1;if(this.toneMapped===!1)Z.toneMapped=!1;if(this.fog===!1)Z.fog=!1;if(Object.keys(this.userData).length>0)Z.userData=this.userData;function W(Q){let H=[];for(let Y in Q){let X=Q[Y];delete X.metadata,H.push(X)}return H}if($){let Q=W(J.textures),H=W(J.images);if(Q.length>0)Z.textures=Q;if(H.length>0)Z.images=H}return Z}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let $=J.clippingPlanes,Z=null;if($!==null){let W=$.length;Z=Array(W);for(let Q=0;Q!==W;++Q)Z[Q]=$[Q].clone()}return this.clippingPlanes=Z,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class _9 extends J9{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new m8,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var N8=new _,A7=new A0;class u8{constructor(J,$,Z=!1){if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=J,this.itemSize=$,this.count=J!==void 0?J.length/$:0,this.normalized=Z,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,$){this.updateRanges.push({start:J,count:$})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,$,Z){J*=this.itemSize,Z*=$.itemSize;for(let W=0,Q=this.itemSize;W<Q;W++)this.array[J+W]=$.array[Z+W];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let $=0,Z=this.count;$<Z;$++)A7.fromBufferAttribute(this,$),A7.applyMatrix3(J),this.setXY($,A7.x,A7.y);else if(this.itemSize===3)for(let $=0,Z=this.count;$<Z;$++)N8.fromBufferAttribute(this,$),N8.applyMatrix3(J),this.setXYZ($,N8.x,N8.y,N8.z);return this}applyMatrix4(J){for(let $=0,Z=this.count;$<Z;$++)N8.fromBufferAttribute(this,$),N8.applyMatrix4(J),this.setXYZ($,N8.x,N8.y,N8.z);return this}applyNormalMatrix(J){for(let $=0,Z=this.count;$<Z;$++)N8.fromBufferAttribute(this,$),N8.applyNormalMatrix(J),this.setXYZ($,N8.x,N8.y,N8.z);return this}transformDirection(J){for(let $=0,Z=this.count;$<Z;$++)N8.fromBufferAttribute(this,$),N8.transformDirection(J),this.setXYZ($,N8.x,N8.y,N8.z);return this}set(J,$=0){return this.array.set(J,$),this}getComponent(J,$){let Z=this.array[J*this.itemSize+$];if(this.normalized)Z=D6(Z,this.array);return Z}setComponent(J,$,Z){if(this.normalized)Z=A8(Z,this.array);return this.array[J*this.itemSize+$]=Z,this}getX(J){let $=this.array[J*this.itemSize];if(this.normalized)$=D6($,this.array);return $}setX(J,$){if(this.normalized)$=A8($,this.array);return this.array[J*this.itemSize]=$,this}getY(J){let $=this.array[J*this.itemSize+1];if(this.normalized)$=D6($,this.array);return $}setY(J,$){if(this.normalized)$=A8($,this.array);return this.array[J*this.itemSize+1]=$,this}getZ(J){let $=this.array[J*this.itemSize+2];if(this.normalized)$=D6($,this.array);return $}setZ(J,$){if(this.normalized)$=A8($,this.array);return this.array[J*this.itemSize+2]=$,this}getW(J){let $=this.array[J*this.itemSize+3];if(this.normalized)$=D6($,this.array);return $}setW(J,$){if(this.normalized)$=A8($,this.array);return this.array[J*this.itemSize+3]=$,this}setXY(J,$,Z){if(J*=this.itemSize,this.normalized)$=A8($,this.array),Z=A8(Z,this.array);return this.array[J+0]=$,this.array[J+1]=Z,this}setXYZ(J,$,Z,W){if(J*=this.itemSize,this.normalized)$=A8($,this.array),Z=A8(Z,this.array),W=A8(W,this.array);return this.array[J+0]=$,this.array[J+1]=Z,this.array[J+2]=W,this}setXYZW(J,$,Z,W,Q){if(J*=this.itemSize,this.normalized)$=A8($,this.array),Z=A8(Z,this.array),W=A8(W,this.array),Q=A8(Q,this.array);return this.array[J+0]=$,this.array[J+1]=Z,this.array[J+2]=W,this.array[J+3]=Q,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}}class GJ extends u8{constructor(J,$,Z){super(new Uint16Array(J),$,Z)}}class FJ extends u8{constructor(J,$,Z){super(new Uint32Array(J),$,Z)}}class G8 extends u8{constructor(J,$,Z){super(new Float32Array(J),$,Z)}}var BY=0,g8=new W8,Y$=new q8,O6=new _,y8=new O9,d6=new O9,D8=new _;class V8 extends N9{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:BY++}),this.uuid=T6(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((ZZ(J))?FJ:GJ)(J,1);else this.index=J;return this}setIndirect(J){return this.indirect=J,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,$){return this.attributes[J]=$,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,$,Z=0){this.groups.push({start:J,count:$,materialIndex:Z})}clearGroups(){this.groups=[]}setDrawRange(J,$){this.drawRange.start=J,this.drawRange.count=$}applyMatrix4(J){let $=this.attributes.position;if($!==void 0)$.applyMatrix4(J),$.needsUpdate=!0;let Z=this.attributes.normal;if(Z!==void 0){let Q=new h0().getNormalMatrix(J);Z.applyNormalMatrix(Q),Z.needsUpdate=!0}let W=this.attributes.tangent;if(W!==void 0)W.transformDirection(J),W.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(J){return g8.makeRotationFromQuaternion(J),this.applyMatrix4(g8),this}rotateX(J){return g8.makeRotationX(J),this.applyMatrix4(g8),this}rotateY(J){return g8.makeRotationY(J),this.applyMatrix4(g8),this}rotateZ(J){return g8.makeRotationZ(J),this.applyMatrix4(g8),this}translate(J,$,Z){return g8.makeTranslation(J,$,Z),this.applyMatrix4(g8),this}scale(J,$,Z){return g8.makeScale(J,$,Z),this.applyMatrix4(g8),this}lookAt(J){return Y$.lookAt(J),Y$.updateMatrix(),this.applyMatrix4(Y$.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(O6).negate(),this.translate(O6.x,O6.y,O6.z),this}setFromPoints(J){let $=this.getAttribute("position");if($===void 0){let Z=[];for(let W=0,Q=J.length;W<Q;W++){let H=J[W];Z.push(H.x,H.y,H.z||0)}this.setAttribute("position",new G8(Z,3))}else{let Z=Math.min(J.length,$.count);for(let W=0;W<Z;W++){let Q=J[W];$.setXYZ(W,Q.x,Q.y,Q.z||0)}if(J.length>$.count)console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");$.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new O9;let J=this.attributes.position,$=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new _(-1/0,-1/0,-1/0),new _(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),$)for(let Z=0,W=$.length;Z<W;Z++){let Q=$[Z];if(y8.setFromBufferAttribute(Q),this.morphTargetsRelative)D8.addVectors(this.boundingBox.min,y8.min),this.boundingBox.expandByPoint(D8),D8.addVectors(this.boundingBox.max,y8.max),this.boundingBox.expandByPoint(D8);else this.boundingBox.expandByPoint(y8.min),this.boundingBox.expandByPoint(y8.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new n9;let J=this.attributes.position,$=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new _,1/0);return}if(J){let Z=this.boundingSphere.center;if(y8.setFromBufferAttribute(J),$)for(let Q=0,H=$.length;Q<H;Q++){let Y=$[Q];if(d6.setFromBufferAttribute(Y),this.morphTargetsRelative)D8.addVectors(y8.min,d6.min),y8.expandByPoint(D8),D8.addVectors(y8.max,d6.max),y8.expandByPoint(D8);else y8.expandByPoint(d6.min),y8.expandByPoint(d6.max)}y8.getCenter(Z);let W=0;for(let Q=0,H=J.count;Q<H;Q++)D8.fromBufferAttribute(J,Q),W=Math.max(W,Z.distanceToSquared(D8));if($)for(let Q=0,H=$.length;Q<H;Q++){let Y=$[Q],X=this.morphTargetsRelative;for(let K=0,U=Y.count;K<U;K++){if(D8.fromBufferAttribute(Y,K),X)O6.fromBufferAttribute(J,K),D8.add(O6);W=Math.max(W,Z.distanceToSquared(D8))}}if(this.boundingSphere.radius=Math.sqrt(W),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,$=this.attributes;if(J===null||$.position===void 0||$.normal===void 0||$.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:Z,normal:W,uv:Q}=$;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new u8(new Float32Array(4*Z.count),4));let H=this.getAttribute("tangent"),Y=[],X=[];for(let B=0;B<Z.count;B++)Y[B]=new _,X[B]=new _;let K=new _,U=new _,G=new _,F=new A0,N=new A0,E=new A0,R=new _,D=new _;function q(B,b,z){K.fromBufferAttribute(Z,B),U.fromBufferAttribute(Z,b),G.fromBufferAttribute(Z,z),F.fromBufferAttribute(Q,B),N.fromBufferAttribute(Q,b),E.fromBufferAttribute(Q,z),U.sub(K),G.sub(K),N.sub(F),E.sub(F);let C=1/(N.x*E.y-E.x*N.y);if(!isFinite(C))return;R.copy(U).multiplyScalar(E.y).addScaledVector(G,-N.y).multiplyScalar(C),D.copy(G).multiplyScalar(N.x).addScaledVector(U,-E.x).multiplyScalar(C),Y[B].add(R),Y[b].add(R),Y[z].add(R),X[B].add(D),X[b].add(D),X[z].add(D)}let O=this.groups;if(O.length===0)O=[{start:0,count:J.count}];for(let B=0,b=O.length;B<b;++B){let z=O[B],C=z.start,S=z.count;for(let h=C,u=C+S;h<u;h+=3)q(J.getX(h+0),J.getX(h+1),J.getX(h+2))}let V=new _,L=new _,A=new _,T=new _;function I(B){A.fromBufferAttribute(W,B),T.copy(A);let b=Y[B];V.copy(b),V.sub(A.multiplyScalar(A.dot(b))).normalize(),L.crossVectors(T,b);let C=L.dot(X[B])<0?-1:1;H.setXYZW(B,V.x,V.y,V.z,C)}for(let B=0,b=O.length;B<b;++B){let z=O[B],C=z.start,S=z.count;for(let h=C,u=C+S;h<u;h+=3)I(J.getX(h+0)),I(J.getX(h+1)),I(J.getX(h+2))}}computeVertexNormals(){let J=this.index,$=this.getAttribute("position");if($!==void 0){let Z=this.getAttribute("normal");if(Z===void 0)Z=new u8(new Float32Array($.count*3),3),this.setAttribute("normal",Z);else for(let F=0,N=Z.count;F<N;F++)Z.setXYZ(F,0,0,0);let W=new _,Q=new _,H=new _,Y=new _,X=new _,K=new _,U=new _,G=new _;if(J)for(let F=0,N=J.count;F<N;F+=3){let E=J.getX(F+0),R=J.getX(F+1),D=J.getX(F+2);W.fromBufferAttribute($,E),Q.fromBufferAttribute($,R),H.fromBufferAttribute($,D),U.subVectors(H,Q),G.subVectors(W,Q),U.cross(G),Y.fromBufferAttribute(Z,E),X.fromBufferAttribute(Z,R),K.fromBufferAttribute(Z,D),Y.add(U),X.add(U),K.add(U),Z.setXYZ(E,Y.x,Y.y,Y.z),Z.setXYZ(R,X.x,X.y,X.z),Z.setXYZ(D,K.x,K.y,K.z)}else for(let F=0,N=$.count;F<N;F+=3)W.fromBufferAttribute($,F+0),Q.fromBufferAttribute($,F+1),H.fromBufferAttribute($,F+2),U.subVectors(H,Q),G.subVectors(W,Q),U.cross(G),Z.setXYZ(F+0,U.x,U.y,U.z),Z.setXYZ(F+1,U.x,U.y,U.z),Z.setXYZ(F+2,U.x,U.y,U.z);this.normalizeNormals(),Z.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let $=0,Z=J.count;$<Z;$++)D8.fromBufferAttribute(J,$),D8.normalize(),J.setXYZ($,D8.x,D8.y,D8.z)}toNonIndexed(){function J(Y,X){let{array:K,itemSize:U,normalized:G}=Y,F=new K.constructor(X.length*U),N=0,E=0;for(let R=0,D=X.length;R<D;R++){if(Y.isInterleavedBufferAttribute)N=X[R]*Y.data.stride+Y.offset;else N=X[R]*U;for(let q=0;q<U;q++)F[E++]=K[N++]}return new u8(F,U,G)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let $=new V8,Z=this.index.array,W=this.attributes;for(let Y in W){let X=W[Y],K=J(X,Z);$.setAttribute(Y,K)}let Q=this.morphAttributes;for(let Y in Q){let X=[],K=Q[Y];for(let U=0,G=K.length;U<G;U++){let F=K[U],N=J(F,Z);X.push(N)}$.morphAttributes[Y]=X}$.morphTargetsRelative=this.morphTargetsRelative;let H=this.groups;for(let Y=0,X=H.length;Y<X;Y++){let K=H[Y];$.addGroup(K.start,K.count,K.materialIndex)}return $}toJSON(){let J={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0){let X=this.parameters;for(let K in X)if(X[K]!==void 0)J[K]=X[K];return J}J.data={attributes:{}};let $=this.index;if($!==null)J.data.index={type:$.array.constructor.name,array:Array.prototype.slice.call($.array)};let Z=this.attributes;for(let X in Z){let K=Z[X];J.data.attributes[X]=K.toJSON(J.data)}let W={},Q=!1;for(let X in this.morphAttributes){let K=this.morphAttributes[X],U=[];for(let G=0,F=K.length;G<F;G++){let N=K[G];U.push(N.toJSON(J.data))}if(U.length>0)W[X]=U,Q=!0}if(Q)J.data.morphAttributes=W,J.data.morphTargetsRelative=this.morphTargetsRelative;let H=this.groups;if(H.length>0)J.data.groups=JSON.parse(JSON.stringify(H));let Y=this.boundingSphere;if(Y!==null)J.data.boundingSphere={center:Y.center.toArray(),radius:Y.radius};return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let $={};this.name=J.name;let Z=J.index;if(Z!==null)this.setIndex(Z.clone($));let W=J.attributes;for(let K in W){let U=W[K];this.setAttribute(K,U.clone($))}let Q=J.morphAttributes;for(let K in Q){let U=[],G=Q[K];for(let F=0,N=G.length;F<N;F++)U.push(G[F].clone($));this.morphAttributes[K]=U}this.morphTargetsRelative=J.morphTargetsRelative;let H=J.groups;for(let K=0,U=H.length;K<U;K++){let G=H[K];this.addGroup(G.start,G.count,G.materialIndex)}let Y=J.boundingBox;if(Y!==null)this.boundingBox=Y.clone();let X=J.boundingSphere;if(X!==null)this.boundingSphere=X.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var RW=new W8,p9=new s9,T7=new n9,DW=new _,S7=new _,_7=new _,j7=new _,X$=new _,f7=new _,kW=new _,x7=new _;class H8 extends q8{constructor(J=new V8,$=new _9){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=$,this.updateMorphTargets()}copy(J,$){if(super.copy(J,$),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let $=this.geometry.morphAttributes,Z=Object.keys($);if(Z.length>0){let W=$[Z[0]];if(W!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Q=0,H=W.length;Q<H;Q++){let Y=W[Q].name||String(Q);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=Q}}}}getVertexPosition(J,$){let Z=this.geometry,W=Z.attributes.position,Q=Z.morphAttributes.position,H=Z.morphTargetsRelative;$.fromBufferAttribute(W,J);let Y=this.morphTargetInfluences;if(Q&&Y){f7.set(0,0,0);for(let X=0,K=Q.length;X<K;X++){let U=Y[X],G=Q[X];if(U===0)continue;if(X$.fromBufferAttribute(G,J),H)f7.addScaledVector(X$,U);else f7.addScaledVector(X$.sub($),U)}$.add(f7)}return $}raycast(J,$){let Z=this.geometry,W=this.material,Q=this.matrixWorld;if(W===void 0)return;if(Z.boundingSphere===null)Z.computeBoundingSphere();if(T7.copy(Z.boundingSphere),T7.applyMatrix4(Q),p9.copy(J.ray).recast(J.near),T7.containsPoint(p9.origin)===!1){if(p9.intersectSphere(T7,DW)===null)return;if(p9.origin.distanceToSquared(DW)>(J.far-J.near)**2)return}if(RW.copy(Q).invert(),p9.copy(J.ray).applyMatrix4(RW),Z.boundingBox!==null){if(p9.intersectsBox(Z.boundingBox)===!1)return}this._computeIntersections(J,$,p9)}_computeIntersections(J,$,Z){let W,Q=this.geometry,H=this.material,Y=Q.index,X=Q.attributes.position,K=Q.attributes.uv,U=Q.attributes.uv1,G=Q.attributes.normal,F=Q.groups,N=Q.drawRange;if(Y!==null)if(Array.isArray(H))for(let E=0,R=F.length;E<R;E++){let D=F[E],q=H[D.materialIndex],O=Math.max(D.start,N.start),V=Math.min(Y.count,Math.min(D.start+D.count,N.start+N.count));for(let L=O,A=V;L<A;L+=3){let T=Y.getX(L),I=Y.getX(L+1),B=Y.getX(L+2);if(W=y7(this,q,J,Z,K,U,G,T,I,B),W)W.faceIndex=Math.floor(L/3),W.face.materialIndex=D.materialIndex,$.push(W)}}else{let E=Math.max(0,N.start),R=Math.min(Y.count,N.start+N.count);for(let D=E,q=R;D<q;D+=3){let O=Y.getX(D),V=Y.getX(D+1),L=Y.getX(D+2);if(W=y7(this,H,J,Z,K,U,G,O,V,L),W)W.faceIndex=Math.floor(D/3),$.push(W)}}else if(X!==void 0)if(Array.isArray(H))for(let E=0,R=F.length;E<R;E++){let D=F[E],q=H[D.materialIndex],O=Math.max(D.start,N.start),V=Math.min(X.count,Math.min(D.start+D.count,N.start+N.count));for(let L=O,A=V;L<A;L+=3){let T=L,I=L+1,B=L+2;if(W=y7(this,q,J,Z,K,U,G,T,I,B),W)W.faceIndex=Math.floor(L/3),W.face.materialIndex=D.materialIndex,$.push(W)}}else{let E=Math.max(0,N.start),R=Math.min(X.count,N.start+N.count);for(let D=E,q=R;D<q;D+=3){let O=D,V=D+1,L=D+2;if(W=y7(this,H,J,Z,K,U,G,O,V,L),W)W.faceIndex=Math.floor(D/3),$.push(W)}}}}function PY(J,$,Z,W,Q,H,Y,X){let K;if($.side===1)K=W.intersectTriangle(Y,H,Q,!0,X);else K=W.intersectTriangle(Q,H,Y,$.side===0,X);if(K===null)return null;x7.copy(X),x7.applyMatrix4(J.matrixWorld);let U=Z.ray.origin.distanceTo(x7);if(U<Z.near||U>Z.far)return null;return{distance:U,point:x7.clone(),object:J}}function y7(J,$,Z,W,Q,H,Y,X,K,U){J.getVertexPosition(X,S7),J.getVertexPosition(K,_7),J.getVertexPosition(U,j7);let G=PY(J,$,Z,W,S7,_7,j7,kW);if(G){let F=new _;if(p8.getBarycoord(kW,S7,_7,j7,F),Q)G.uv=p8.getInterpolatedAttribute(Q,X,K,U,F,new A0);if(H)G.uv1=p8.getInterpolatedAttribute(H,X,K,U,F,new A0);if(Y){if(G.normal=p8.getInterpolatedAttribute(Y,X,K,U,F,new _),G.normal.dot(W.direction)>0)G.normal.multiplyScalar(-1)}let N={a:X,b:K,c:U,normal:new _,materialIndex:0};p8.getNormal(S7,_7,j7,N.normal),G.face=N,G.barycoord=F}return G}class j9 extends V8{constructor(J=1,$=1,Z=1,W=1,Q=1,H=1){super();this.type="BoxGeometry",this.parameters={width:J,height:$,depth:Z,widthSegments:W,heightSegments:Q,depthSegments:H};let Y=this;W=Math.floor(W),Q=Math.floor(Q),H=Math.floor(H);let X=[],K=[],U=[],G=[],F=0,N=0;E("z","y","x",-1,-1,Z,$,J,H,Q,0),E("z","y","x",1,-1,Z,$,-J,H,Q,1),E("x","z","y",1,1,J,Z,$,W,H,2),E("x","z","y",1,-1,J,Z,-$,W,H,3),E("x","y","z",1,-1,J,$,Z,W,Q,4),E("x","y","z",-1,-1,J,$,-Z,W,Q,5),this.setIndex(X),this.setAttribute("position",new G8(K,3)),this.setAttribute("normal",new G8(U,3)),this.setAttribute("uv",new G8(G,2));function E(R,D,q,O,V,L,A,T,I,B,b){let z=L/I,C=A/B,S=L/2,h=A/2,u=T/2,l=I+1,o=B+1,d=0,t=0,m=new _;for(let X0=0;X0<o;X0++){let J0=X0*C-h;for(let w0=0;w0<l;w0++){let g0=w0*z-S;m[R]=g0*O,m[D]=J0*V,m[q]=u,K.push(m.x,m.y,m.z),m[R]=0,m[D]=0,m[q]=T>0?1:-1,U.push(m.x,m.y,m.z),G.push(w0/I),G.push(1-X0/B),d+=1}}for(let X0=0;X0<B;X0++)for(let J0=0;J0<I;J0++){let w0=F+J0+l*X0,g0=F+J0+l*(X0+1),n=F+(J0+1)+l*(X0+1),Z0=F+(J0+1)+l*X0;X.push(w0,g0,Z0),X.push(g0,n,Z0),t+=6}Y.addGroup(N,t,b),N+=t,F+=d}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new j9(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}function i9(J){let $={};for(let Z in J){$[Z]={};for(let W in J[Z]){let Q=J[Z][W];if(Q&&(Q.isColor||Q.isMatrix3||Q.isMatrix4||Q.isVector2||Q.isVector3||Q.isVector4||Q.isTexture||Q.isQuaternion))if(Q.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),$[Z][W]=null;else $[Z][W]=Q.clone();else if(Array.isArray(Q))$[Z][W]=Q.slice();else $[Z][W]=Q}}return $}function w8(J){let $={};for(let Z=0;Z<J.length;Z++){let W=i9(J[Z]);for(let Q in W)$[Q]=W[Q]}return $}function AY(J){let $=[];for(let Z=0;Z<J.length;Z++)$.push(J[Z].clone());return $}function YZ(J){let $=J.getRenderTarget();if($===null)return J.outputColorSpace;if($.isXRRenderTarget===!0)return $.texture.colorSpace;return i0.workingColorSpace}var bQ={clone:i9,merge:w8},TY=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,SY=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $9 extends J9{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=TY,this.fragmentShader=SY,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=i9(J.uniforms),this.uniformsGroups=AY(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this}toJSON(J){let $=super.toJSON(J);$.glslVersion=this.glslVersion,$.uniforms={};for(let W in this.uniforms){let H=this.uniforms[W].value;if(H&&H.isTexture)$.uniforms[W]={type:"t",value:H.toJSON(J).uuid};else if(H&&H.isColor)$.uniforms[W]={type:"c",value:H.getHex()};else if(H&&H.isVector2)$.uniforms[W]={type:"v2",value:H.toArray()};else if(H&&H.isVector3)$.uniforms[W]={type:"v3",value:H.toArray()};else if(H&&H.isVector4)$.uniforms[W]={type:"v4",value:H.toArray()};else if(H&&H.isMatrix3)$.uniforms[W]={type:"m3",value:H.toArray()};else if(H&&H.isMatrix4)$.uniforms[W]={type:"m4",value:H.toArray()};else $.uniforms[W]={value:H}}if(Object.keys(this.defines).length>0)$.defines=this.defines;$.vertexShader=this.vertexShader,$.fragmentShader=this.fragmentShader,$.lights=this.lights,$.clipping=this.clipping;let Z={};for(let W in this.extensions)if(this.extensions[W]===!0)Z[W]=!0;if(Object.keys(Z).length>0)$.extensions=Z;return $}}class NJ extends q8{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new W8,this.projectionMatrix=new W8,this.projectionMatrixInverse=new W8,this.coordinateSystem=2000}copy(J,$){return super.copy(J,$),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){super.updateMatrixWorld(J),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(J,$){super.updateWorldMatrix(J,$),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var w9=new _,MW=new A0,LW=new A0;class C8 extends NJ{constructor(J=50,$=1,Z=0.1,W=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=Z,this.far=W,this.focus=10,this.aspect=$,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,$){return super.copy(J,$),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let $=0.5*this.getFilmHeight()/J;this.fov=M6*2*Math.atan($),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(s6*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return M6*2*Math.atan(Math.tan(s6*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,$,Z){w9.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(w9.x,w9.y).multiplyScalar(-J/w9.z),w9.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),Z.set(w9.x,w9.y).multiplyScalar(-J/w9.z)}getViewSize(J,$){return this.getViewBounds(J,MW,LW),$.subVectors(LW,MW)}setViewOffset(J,$,Z,W,Q,H){if(this.aspect=J/$,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=$,this.view.offsetX=Z,this.view.offsetY=W,this.view.width=Q,this.view.height=H,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,$=J*Math.tan(s6*0.5*this.fov)/this.zoom,Z=2*$,W=this.aspect*Z,Q=-0.5*W,H=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:X,fullHeight:K}=H;Q+=H.offsetX*W/X,$-=H.offsetY*Z/K,W*=H.width/X,Z*=H.height/K}let Y=this.filmOffset;if(Y!==0)Q+=J*Y/this.getFilmWidth();this.projectionMatrix.makePerspective(Q,Q+W,$,$-Z,J,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let $=super.toJSON(J);if($.object.fov=this.fov,$.object.zoom=this.zoom,$.object.near=this.near,$.object.far=this.far,$.object.focus=this.focus,$.object.aspect=this.aspect,this.view!==null)$.object.view=Object.assign({},this.view);return $.object.filmGauge=this.filmGauge,$.object.filmOffset=this.filmOffset,$}}var E6=-90,R6=1;class XZ extends q8{constructor(J,$,Z){super();this.type="CubeCamera",this.renderTarget=Z,this.coordinateSystem=null,this.activeMipmapLevel=0;let W=new C8(E6,R6,J,$);W.layers=this.layers,this.add(W);let Q=new C8(E6,R6,J,$);Q.layers=this.layers,this.add(Q);let H=new C8(E6,R6,J,$);H.layers=this.layers,this.add(H);let Y=new C8(E6,R6,J,$);Y.layers=this.layers,this.add(Y);let X=new C8(E6,R6,J,$);X.layers=this.layers,this.add(X);let K=new C8(E6,R6,J,$);K.layers=this.layers,this.add(K)}updateCoordinateSystem(){let J=this.coordinateSystem,$=this.children.concat(),[Z,W,Q,H,Y,X]=$;for(let K of $)this.remove(K);if(J===2000)Z.up.set(0,1,0),Z.lookAt(1,0,0),W.up.set(0,1,0),W.lookAt(-1,0,0),Q.up.set(0,0,-1),Q.lookAt(0,1,0),H.up.set(0,0,1),H.lookAt(0,-1,0),Y.up.set(0,1,0),Y.lookAt(0,0,1),X.up.set(0,1,0),X.lookAt(0,0,-1);else if(J===2001)Z.up.set(0,-1,0),Z.lookAt(-1,0,0),W.up.set(0,-1,0),W.lookAt(1,0,0),Q.up.set(0,0,1),Q.lookAt(0,1,0),H.up.set(0,0,-1),H.lookAt(0,-1,0),Y.up.set(0,-1,0),Y.lookAt(0,0,1),X.up.set(0,-1,0),X.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let K of $)this.add(K),K.updateMatrixWorld()}update(J,$){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:Z,activeMipmapLevel:W}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[Q,H,Y,X,K,U]=this.children,G=J.getRenderTarget(),F=J.getActiveCubeFace(),N=J.getActiveMipmapLevel(),E=J.xr.enabled;J.xr.enabled=!1;let R=Z.texture.generateMipmaps;Z.texture.generateMipmaps=!1,J.setRenderTarget(Z,0,W),J.render($,Q),J.setRenderTarget(Z,1,W),J.render($,H),J.setRenderTarget(Z,2,W),J.render($,Y),J.setRenderTarget(Z,3,W),J.render($,X),J.setRenderTarget(Z,4,W),J.render($,K),Z.texture.generateMipmaps=R,J.setRenderTarget(Z,5,W),J.render($,U),J.setRenderTarget(G,F,N),J.xr.enabled=E,Z.texture.needsPMREMUpdate=!0}}class qJ extends I8{constructor(J,$,Z,W,Q,H,Y,X,K,U){J=J!==void 0?J:[],$=$!==void 0?$:301;super(J,$,Z,W,Q,H,Y,X,K,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class KZ extends q9{constructor(J=1,$={}){super(J,J,$);this.isWebGLCubeRenderTarget=!0;let Z={width:J,height:J,depth:1},W=[Z,Z,Z,Z,Z,Z];this.texture=new qJ(W,$.mapping,$.wrapS,$.wrapT,$.magFilter,$.minFilter,$.format,$.type,$.anisotropy,$.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=$.generateMipmaps!==void 0?$.generateMipmaps:!1,this.texture.minFilter=$.minFilter!==void 0?$.minFilter:1006}fromEquirectangularTexture(J,$){this.texture.type=$.type,this.texture.colorSpace=$.colorSpace,this.texture.generateMipmaps=$.generateMipmaps,this.texture.minFilter=$.minFilter,this.texture.magFilter=$.magFilter;let Z={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},W=new j9(5,5,5),Q=new $9({name:"CubemapFromEquirect",uniforms:i9(Z.uniforms),vertexShader:Z.vertexShader,fragmentShader:Z.fragmentShader,side:1,blending:0});Q.uniforms.tEquirect.value=$;let H=new H8(W,Q),Y=$.minFilter;if($.minFilter===1008)$.minFilter=1006;return new XZ(1,10,this).update(J,H),$.minFilter=Y,H.geometry.dispose(),H.material.dispose(),this}clear(J,$,Z,W){let Q=J.getRenderTarget();for(let H=0;H<6;H++)J.setRenderTarget(this,H),J.clear($,Z,W);J.setRenderTarget(Q)}}class OJ extends q8{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new m8,this.environmentIntensity=1,this.environmentRotation=new m8,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,$){if(super.copy(J,$),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let $=super.toJSON(J);if(this.fog!==null)$.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)$.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)$.object.backgroundIntensity=this.backgroundIntensity;if($.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)$.object.environmentIntensity=this.environmentIntensity;return $.object.environmentRotation=this.environmentRotation.toArray(),$}}var K$=new _,_Y=new _,jY=new h0;class i8{constructor(J=new _(1,0,0),$=0){this.isPlane=!0,this.normal=J,this.constant=$}set(J,$){return this.normal.copy(J),this.constant=$,this}setComponents(J,$,Z,W){return this.normal.set(J,$,Z),this.constant=W,this}setFromNormalAndCoplanarPoint(J,$){return this.normal.copy(J),this.constant=-$.dot(this.normal),this}setFromCoplanarPoints(J,$,Z){let W=K$.subVectors(Z,$).cross(_Y.subVectors(J,$)).normalize();return this.setFromNormalAndCoplanarPoint(W,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,$){return $.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,$){let Z=J.delta(K$),W=this.normal.dot(Z);if(W===0){if(this.distanceToPoint(J.start)===0)return $.copy(J.start);return null}let Q=-(J.start.dot(this.normal)+this.constant)/W;if(Q<0||Q>1)return null;return $.copy(J.start).addScaledVector(Z,Q)}intersectsLine(J){let $=this.distanceToPoint(J.start),Z=this.distanceToPoint(J.end);return $<0&&Z>0||Z<0&&$>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,$){let Z=$||jY.getNormalMatrix(J),W=this.coplanarPoint(K$).applyMatrix4(J),Q=this.normal.applyMatrix3(Z).normalize();return this.constant=-W.dot(Q),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var u9=new n9,h7=new _;class W7{constructor(J=new i8,$=new i8,Z=new i8,W=new i8,Q=new i8,H=new i8){this.planes=[J,$,Z,W,Q,H]}set(J,$,Z,W,Q,H){let Y=this.planes;return Y[0].copy(J),Y[1].copy($),Y[2].copy(Z),Y[3].copy(W),Y[4].copy(Q),Y[5].copy(H),this}copy(J){let $=this.planes;for(let Z=0;Z<6;Z++)$[Z].copy(J.planes[Z]);return this}setFromProjectionMatrix(J,$=2000){let Z=this.planes,W=J.elements,Q=W[0],H=W[1],Y=W[2],X=W[3],K=W[4],U=W[5],G=W[6],F=W[7],N=W[8],E=W[9],R=W[10],D=W[11],q=W[12],O=W[13],V=W[14],L=W[15];if(Z[0].setComponents(X-Q,F-K,D-N,L-q).normalize(),Z[1].setComponents(X+Q,F+K,D+N,L+q).normalize(),Z[2].setComponents(X+H,F+U,D+E,L+O).normalize(),Z[3].setComponents(X-H,F-U,D-E,L-O).normalize(),Z[4].setComponents(X-Y,F-G,D-R,L-V).normalize(),$===2000)Z[5].setComponents(X+Y,F+G,D+R,L+V).normalize();else if($===2001)Z[5].setComponents(Y,G,R,V).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+$);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();u9.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let $=J.geometry;if($.boundingSphere===null)$.computeBoundingSphere();u9.copy($.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(u9)}intersectsSprite(J){return u9.center.set(0,0,0),u9.radius=0.7071067811865476,u9.applyMatrix4(J.matrixWorld),this.intersectsSphere(u9)}intersectsSphere(J){let $=this.planes,Z=J.center,W=-J.radius;for(let Q=0;Q<6;Q++)if($[Q].distanceToPoint(Z)<W)return!1;return!0}intersectsBox(J){let $=this.planes;for(let Z=0;Z<6;Z++){let W=$[Z];if(h7.x=W.normal.x>0?J.max.x:J.min.x,h7.y=W.normal.y>0?J.max.y:J.min.y,h7.z=W.normal.z>0?J.max.z:J.min.z,W.distanceToPoint(h7)<0)return!1}return!0}containsPoint(J){let $=this.planes;for(let Z=0;Z<6;Z++)if($[Z].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Q7 extends J9{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var m7=new _,l7=new _,zW=new W8,c6=new s9,v7=new n9,U$=new _,CW=new _;class EJ extends q8{constructor(J=new V8,$=new Q7){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=$,this.updateMorphTargets()}copy(J,$){return super.copy(J,$),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let $=J.attributes.position,Z=[0];for(let W=1,Q=$.count;W<Q;W++)m7.fromBufferAttribute($,W-1),l7.fromBufferAttribute($,W),Z[W]=Z[W-1],Z[W]+=m7.distanceTo(l7);J.setAttribute("lineDistance",new G8(Z,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(J,$){let Z=this.geometry,W=this.matrixWorld,Q=J.params.Line.threshold,H=Z.drawRange;if(Z.boundingSphere===null)Z.computeBoundingSphere();if(v7.copy(Z.boundingSphere),v7.applyMatrix4(W),v7.radius+=Q,J.ray.intersectsSphere(v7)===!1)return;zW.copy(W).invert(),c6.copy(J.ray).applyMatrix4(zW);let Y=Q/((this.scale.x+this.scale.y+this.scale.z)/3),X=Y*Y,K=this.isLineSegments?2:1,U=Z.index,F=Z.attributes.position;if(U!==null){let N=Math.max(0,H.start),E=Math.min(U.count,H.start+H.count);for(let R=N,D=E-1;R<D;R+=K){let q=U.getX(R),O=U.getX(R+1),V=b7(this,J,c6,X,q,O);if(V)$.push(V)}if(this.isLineLoop){let R=U.getX(E-1),D=U.getX(N),q=b7(this,J,c6,X,R,D);if(q)$.push(q)}}else{let N=Math.max(0,H.start),E=Math.min(F.count,H.start+H.count);for(let R=N,D=E-1;R<D;R+=K){let q=b7(this,J,c6,X,R,R+1);if(q)$.push(q)}if(this.isLineLoop){let R=b7(this,J,c6,X,E-1,N);if(R)$.push(R)}}}updateMorphTargets(){let $=this.geometry.morphAttributes,Z=Object.keys($);if(Z.length>0){let W=$[Z[0]];if(W!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Q=0,H=W.length;Q<H;Q++){let Y=W[Q].name||String(Q);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=Q}}}}}function b7(J,$,Z,W,Q,H){let Y=J.geometry.attributes.position;if(m7.fromBufferAttribute(Y,Q),l7.fromBufferAttribute(Y,H),Z.distanceSqToSegment(m7,l7,U$,CW)>W)return;U$.applyMatrix4(J.matrixWorld);let K=$.ray.origin.distanceTo(U$);if(K<$.near||K>$.far)return;return{distance:K,point:CW.clone().applyMatrix4(J.matrixWorld),index:Q,face:null,faceIndex:null,barycoord:null,object:J}}class H7 extends J9{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var IW=new W8,N$=new s9,g7=new n9,p7=new _;class RJ extends q8{constructor(J=new V8,$=new H7){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=$,this.updateMorphTargets()}copy(J,$){return super.copy(J,$),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}raycast(J,$){let Z=this.geometry,W=this.matrixWorld,Q=J.params.Points.threshold,H=Z.drawRange;if(Z.boundingSphere===null)Z.computeBoundingSphere();if(g7.copy(Z.boundingSphere),g7.applyMatrix4(W),g7.radius+=Q,J.ray.intersectsSphere(g7)===!1)return;IW.copy(W).invert(),N$.copy(J.ray).applyMatrix4(IW);let Y=Q/((this.scale.x+this.scale.y+this.scale.z)/3),X=Y*Y,K=Z.index,G=Z.attributes.position;if(K!==null){let F=Math.max(0,H.start),N=Math.min(K.count,H.start+H.count);for(let E=F,R=N;E<R;E++){let D=K.getX(E);p7.fromBufferAttribute(G,D),VW(p7,D,X,W,J,$,this)}}else{let F=Math.max(0,H.start),N=Math.min(G.count,H.start+H.count);for(let E=F,R=N;E<R;E++)p7.fromBufferAttribute(G,E),VW(p7,E,X,W,J,$,this)}}updateMorphTargets(){let $=this.geometry.morphAttributes,Z=Object.keys($);if(Z.length>0){let W=$[Z[0]];if(W!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Q=0,H=W.length;Q<H;Q++){let Y=W[Q].name||String(Q);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=Q}}}}}function VW(J,$,Z,W,Q,H,Y){let X=N$.distanceSqToPoint(J);if(X<Z){let K=new _;N$.closestPointToPoint(J,K),K.applyMatrix4(W);let U=Q.ray.origin.distanceTo(K);if(U<Q.near||U>Q.far)return;H.push({distance:U,distanceToRay:Math.sqrt(X),point:K,index:$,face:null,faceIndex:null,barycoord:null,object:Y})}}class Z9 extends q8{constructor(){super();this.isGroup=!0,this.type="Group"}}class DJ extends I8{constructor(J,$,Z,W,Q,H,Y,X,K,U=1026){if(U!==1026&&U!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");if(Z===void 0&&U===1026)Z=1014;if(Z===void 0&&U===1027)Z=1020;super(null,W,Q,H,Y,X,U,Z,K);this.isDepthTexture=!0,this.image={width:J,height:$},this.magFilter=Y!==void 0?Y:1003,this.minFilter=X!==void 0?X:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.compareFunction=J.compareFunction,this}toJSON(J){let $=super.toJSON(J);if(this.compareFunction!==null)$.compareFunction=this.compareFunction;return $}}class E9 extends V8{constructor(J=1,$=1,Z=1,W=32,Q=1,H=!1,Y=0,X=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:$,height:Z,radialSegments:W,heightSegments:Q,openEnded:H,thetaStart:Y,thetaLength:X};let K=this;W=Math.floor(W),Q=Math.floor(Q);let U=[],G=[],F=[],N=[],E=0,R=[],D=Z/2,q=0;if(O(),H===!1){if(J>0)V(!0);if($>0)V(!1)}this.setIndex(U),this.setAttribute("position",new G8(G,3)),this.setAttribute("normal",new G8(F,3)),this.setAttribute("uv",new G8(N,2));function O(){let L=new _,A=new _,T=0,I=($-J)/Z;for(let B=0;B<=Q;B++){let b=[],z=B/Q,C=z*($-J)+J;for(let S=0;S<=W;S++){let h=S/W,u=h*X+Y,l=Math.sin(u),o=Math.cos(u);A.x=C*l,A.y=-z*Z+D,A.z=C*o,G.push(A.x,A.y,A.z),L.set(l,I,o).normalize(),F.push(L.x,L.y,L.z),N.push(h,1-z),b.push(E++)}R.push(b)}for(let B=0;B<W;B++)for(let b=0;b<Q;b++){let z=R[b][B],C=R[b+1][B],S=R[b+1][B+1],h=R[b][B+1];if(J>0||b!==0)U.push(z,C,h),T+=3;if($>0||b!==Q-1)U.push(C,S,h),T+=3}K.addGroup(q,T,0),q+=T}function V(L){let A=E,T=new A0,I=new _,B=0,b=L===!0?J:$,z=L===!0?1:-1;for(let S=1;S<=W;S++)G.push(0,D*z,0),F.push(0,z,0),N.push(0.5,0.5),E++;let C=E;for(let S=0;S<=W;S++){let u=S/W*X+Y,l=Math.cos(u),o=Math.sin(u);I.x=b*o,I.y=D*z,I.z=b*l,G.push(I.x,I.y,I.z),F.push(0,z,0),T.x=l*0.5+0.5,T.y=o*0.5*z+0.5,N.push(T.x,T.y),E++}for(let S=0;S<W;S++){let h=A+S,u=C+S;if(L===!0)U.push(u,u+1,h);else U.push(u+1,u,h);B+=3}K.addGroup(q,B,L===!0?1:2),q+=B}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new E9(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class Y7 extends V8{constructor(J=1,$=1,Z=1,W=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:$,widthSegments:Z,heightSegments:W};let Q=J/2,H=$/2,Y=Math.floor(Z),X=Math.floor(W),K=Y+1,U=X+1,G=J/Y,F=$/X,N=[],E=[],R=[],D=[];for(let q=0;q<U;q++){let O=q*F-H;for(let V=0;V<K;V++){let L=V*G-Q;E.push(L,-O,0),R.push(0,0,1),D.push(V/Y),D.push(1-q/X)}}for(let q=0;q<X;q++)for(let O=0;O<Y;O++){let V=O+K*q,L=O+K*(q+1),A=O+1+K*(q+1),T=O+1+K*q;N.push(V,L,T),N.push(L,A,T)}this.setIndex(N),this.setAttribute("position",new G8(E,3)),this.setAttribute("normal",new G8(R,3)),this.setAttribute("uv",new G8(D,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new Y7(J.width,J.height,J.widthSegments,J.heightSegments)}}class o8 extends V8{constructor(J=1,$=32,Z=16,W=0,Q=Math.PI*2,H=0,Y=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:J,widthSegments:$,heightSegments:Z,phiStart:W,phiLength:Q,thetaStart:H,thetaLength:Y},$=Math.max(3,Math.floor($)),Z=Math.max(2,Math.floor(Z));let X=Math.min(H+Y,Math.PI),K=0,U=[],G=new _,F=new _,N=[],E=[],R=[],D=[];for(let q=0;q<=Z;q++){let O=[],V=q/Z,L=0;if(q===0&&H===0)L=0.5/$;else if(q===Z&&X===Math.PI)L=-0.5/$;for(let A=0;A<=$;A++){let T=A/$;G.x=-J*Math.cos(W+T*Q)*Math.sin(H+V*Y),G.y=J*Math.cos(H+V*Y),G.z=J*Math.sin(W+T*Q)*Math.sin(H+V*Y),E.push(G.x,G.y,G.z),F.copy(G).normalize(),R.push(F.x,F.y,F.z),D.push(T+L,1-V),O.push(K++)}U.push(O)}for(let q=0;q<Z;q++)for(let O=0;O<$;O++){let V=U[q][O+1],L=U[q][O],A=U[q+1][O],T=U[q+1][O+1];if(q!==0||H>0)N.push(V,L,T);if(q!==Z-1||X<Math.PI)N.push(L,A,T)}this.setIndex(N),this.setAttribute("position",new G8(E,3)),this.setAttribute("normal",new G8(R,3)),this.setAttribute("uv",new G8(D,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new o8(J.radius,J.widthSegments,J.heightSegments,J.phiStart,J.phiLength,J.thetaStart,J.thetaLength)}}class R9 extends J9{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new A0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new m8,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class o9 extends J9{constructor(J){super();this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new _0(16777215),this.specular=new _0(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new A0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new m8,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.specular.copy(J.specular),this.shininess=J.shininess,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class UZ extends J9{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class GZ extends J9{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function u7(J,$,Z){if(!J||!Z&&J.constructor===$)return J;if(typeof $.BYTES_PER_ELEMENT==="number")return new $(J);return Array.prototype.slice.call(J)}function fY(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}class S6{constructor(J,$,Z,W){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=W!==void 0?W:new $.constructor(Z),this.sampleValues=$,this.valueSize=Z,this.settings=null,this.DefaultSettings_={}}evaluate(J){let $=this.parameterPositions,Z=this._cachedIndex,W=$[Z],Q=$[Z-1];Z:{J:{let H;$:{W:if(!(J<W)){for(let Y=Z+2;;){if(W===void 0){if(J<Q)break W;return Z=$.length,this._cachedIndex=Z,this.copySampleValue_(Z-1)}if(Z===Y)break;if(Q=W,W=$[++Z],J<W)break J}H=$.length;break $}if(!(J>=Q)){let Y=$[1];if(J<Y)Z=2,Q=Y;for(let X=Z-2;;){if(Q===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===X)break;if(W=Q,Q=$[--Z-1],J>=Q)break J}H=Z,Z=0;break $}break Z}while(Z<H){let Y=Z+H>>>1;if(J<$[Y])H=Y;else Z=Y+1}if(W=$[Z],Q=$[Z-1],Q===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(W===void 0)return Z=$.length,this._cachedIndex=Z,this.copySampleValue_(Z-1)}this._cachedIndex=Z,this.intervalChanged_(Z,Q,W)}return this.interpolate_(Z,Q,J,W)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let $=this.resultBuffer,Z=this.sampleValues,W=this.valueSize,Q=J*W;for(let H=0;H!==W;++H)$[H]=Z[Q+H];return $}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class FZ extends S6{constructor(J,$,Z,W){super(J,$,Z,W);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,$,Z){let W=this.parameterPositions,Q=J-2,H=J+1,Y=W[Q],X=W[H];if(Y===void 0)switch(this.getSettings_().endingStart){case 2401:Q=J,Y=2*$-Z;break;case 2402:Q=W.length-2,Y=$+W[Q]-W[Q+1];break;default:Q=J,Y=Z}if(X===void 0)switch(this.getSettings_().endingEnd){case 2401:H=J,X=2*Z-$;break;case 2402:H=1,X=Z+W[1]-W[0];break;default:H=J-1,X=$}let K=(Z-$)*0.5,U=this.valueSize;this._weightPrev=K/($-Y),this._weightNext=K/(X-Z),this._offsetPrev=Q*U,this._offsetNext=H*U}interpolate_(J,$,Z,W){let Q=this.resultBuffer,H=this.sampleValues,Y=this.valueSize,X=J*Y,K=X-Y,U=this._offsetPrev,G=this._offsetNext,F=this._weightPrev,N=this._weightNext,E=(Z-$)/(W-$),R=E*E,D=R*E,q=-F*D+2*F*R-F*E,O=(1+F)*D+(-1.5-2*F)*R+(-0.5+F)*E+1,V=(-1-N)*D+(1.5+N)*R+0.5*E,L=N*D-N*R;for(let A=0;A!==Y;++A)Q[A]=q*H[U+A]+O*H[K+A]+V*H[X+A]+L*H[G+A];return Q}}class NZ extends S6{constructor(J,$,Z,W){super(J,$,Z,W)}interpolate_(J,$,Z,W){let Q=this.resultBuffer,H=this.sampleValues,Y=this.valueSize,X=J*Y,K=X-Y,U=(Z-$)/(W-$),G=1-U;for(let F=0;F!==Y;++F)Q[F]=H[K+F]*G+H[X+F]*U;return Q}}class qZ extends S6{constructor(J,$,Z,W){super(J,$,Z,W)}interpolate_(J){return this.copySampleValue_(J-1)}}class a8{constructor(J,$,Z,W){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if($===void 0||$.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=u7($,this.TimeBufferType),this.values=u7(Z,this.ValueBufferType),this.setInterpolation(W||this.DefaultInterpolation)}static toJSON(J){let $=J.constructor,Z;if($.toJSON!==this.toJSON)Z=$.toJSON(J);else{Z={name:J.name,times:u7(J.times,Array),values:u7(J.values,Array)};let W=J.getInterpolation();if(W!==J.DefaultInterpolation)Z.interpolation=W}return Z.type=J.ValueTypeName,Z}InterpolantFactoryMethodDiscrete(J){return new qZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new NZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new FZ(this.times,this.values,this.getValueSize(),J)}setInterpolation(J){let $;switch(J){case 2300:$=this.InterpolantFactoryMethodDiscrete;break;case 2301:$=this.InterpolantFactoryMethodLinear;break;case 2302:$=this.InterpolantFactoryMethodSmooth;break}if($===void 0){let Z="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(Z);return console.warn("THREE.KeyframeTrack:",Z),this}return this.createInterpolant=$,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let $=this.times;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]+=J}return this}scale(J){if(J!==1){let $=this.times;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]*=J}return this}trim(J,$){let Z=this.times,W=Z.length,Q=0,H=W-1;while(Q!==W&&Z[Q]<J)++Q;while(H!==-1&&Z[H]>$)--H;if(++H,Q!==0||H!==W){if(Q>=H)H=Math.max(H,1),Q=H-1;let Y=this.getValueSize();this.times=Z.slice(Q,H),this.values=this.values.slice(Q*Y,H*Y)}return this}validate(){let J=!0,$=this.getValueSize();if($-Math.floor($)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),J=!1;let Z=this.times,W=this.values,Q=Z.length;if(Q===0)console.error("THREE.KeyframeTrack: Track is empty.",this),J=!1;let H=null;for(let Y=0;Y!==Q;Y++){let X=Z[Y];if(typeof X==="number"&&isNaN(X)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,Y,X),J=!1;break}if(H!==null&&H>X){console.error("THREE.KeyframeTrack: Out of order keys.",this,Y,X,H),J=!1;break}H=X}if(W!==void 0){if(fY(W))for(let Y=0,X=W.length;Y!==X;++Y){let K=W[Y];if(isNaN(K)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,Y,K),J=!1;break}}}return J}optimize(){let J=this.times.slice(),$=this.values.slice(),Z=this.getValueSize(),W=this.getInterpolation()===2302,Q=J.length-1,H=1;for(let Y=1;Y<Q;++Y){let X=!1,K=J[Y],U=J[Y+1];if(K!==U&&(Y!==1||K!==J[0]))if(!W){let G=Y*Z,F=G-Z,N=G+Z;for(let E=0;E!==Z;++E){let R=$[G+E];if(R!==$[F+E]||R!==$[N+E]){X=!0;break}}}else X=!0;if(X){if(Y!==H){J[H]=J[Y];let G=Y*Z,F=H*Z;for(let N=0;N!==Z;++N)$[F+N]=$[G+N]}++H}}if(Q>0){J[H]=J[Q];for(let Y=Q*Z,X=H*Z,K=0;K!==Z;++K)$[X+K]=$[Y+K];++H}if(H!==J.length)this.times=J.slice(0,H),this.values=$.slice(0,H*Z);else this.times=J,this.values=$;return this}clone(){let J=this.times.slice(),$=this.values.slice(),W=new this.constructor(this.name,J,$);return W.createInterpolant=this.createInterpolant,W}}a8.prototype.TimeBufferType=Float32Array;a8.prototype.ValueBufferType=Float32Array;a8.prototype.DefaultInterpolation=2301;class a9 extends a8{constructor(J,$,Z){super(J,$,Z)}}a9.prototype.ValueTypeName="bool";a9.prototype.ValueBufferType=Array;a9.prototype.DefaultInterpolation=2300;a9.prototype.InterpolantFactoryMethodLinear=void 0;a9.prototype.InterpolantFactoryMethodSmooth=void 0;class OZ extends a8{}OZ.prototype.ValueTypeName="color";class EZ extends a8{}EZ.prototype.ValueTypeName="number";class RZ extends S6{constructor(J,$,Z,W){super(J,$,Z,W)}interpolate_(J,$,Z,W){let Q=this.resultBuffer,H=this.sampleValues,Y=this.valueSize,X=(Z-$)/(W-$),K=J*Y;for(let U=K+Y;K!==U;K+=4)h8.slerpFlat(Q,0,H,K-Y,H,K,X);return Q}}class kJ extends a8{InterpolantFactoryMethodLinear(J){return new RZ(this.times,this.values,this.getValueSize(),J)}}kJ.prototype.ValueTypeName="quaternion";kJ.prototype.InterpolantFactoryMethodSmooth=void 0;class r9 extends a8{constructor(J,$,Z){super(J,$,Z)}}r9.prototype.ValueTypeName="string";r9.prototype.ValueBufferType=Array;r9.prototype.DefaultInterpolation=2300;r9.prototype.InterpolantFactoryMethodLinear=void 0;r9.prototype.InterpolantFactoryMethodSmooth=void 0;class DZ extends a8{}DZ.prototype.ValueTypeName="vector";var q$={enabled:!1,files:{},add:function(J,$){if(this.enabled===!1)return;this.files[J]=$},get:function(J){if(this.enabled===!1)return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};class kZ{constructor(J,$,Z){let W=this,Q=!1,H=0,Y=0,X=void 0,K=[];this.onStart=void 0,this.onLoad=J,this.onProgress=$,this.onError=Z,this.itemStart=function(U){if(Y++,Q===!1){if(W.onStart!==void 0)W.onStart(U,H,Y)}Q=!0},this.itemEnd=function(U){if(H++,W.onProgress!==void 0)W.onProgress(U,H,Y);if(H===Y){if(Q=!1,W.onLoad!==void 0)W.onLoad()}},this.itemError=function(U){if(W.onError!==void 0)W.onError(U)},this.resolveURL=function(U){if(X)return X(U);return U},this.setURLModifier=function(U){return X=U,this},this.addHandler=function(U,G){return K.push(U,G),this},this.removeHandler=function(U){let G=K.indexOf(U);if(G!==-1)K.splice(G,2);return this},this.getHandler=function(U){for(let G=0,F=K.length;G<F;G+=2){let N=K[G],E=K[G+1];if(N.global)N.lastIndex=0;if(N.test(U))return E}return null}}}var gQ=new kZ;class X7{constructor(J){this.manager=J!==void 0?J:gQ,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(J,$){let Z=this;return new Promise(function(W,Q){Z.load(J,W,$,Q)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}}X7.DEFAULT_MATERIAL_NAME="__DEFAULT";class MZ extends X7{constructor(J){super(J)}load(J,$,Z,W){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let Q=this,H=q$.get(J);if(H!==void 0)return Q.manager.itemStart(J),setTimeout(function(){if($)$(H);Q.manager.itemEnd(J)},0),H;let Y=L6("img");function X(){if(U(),q$.add(J,this),$)$(this);Q.manager.itemEnd(J)}function K(G){if(U(),W)W(G);Q.manager.itemError(J),Q.manager.itemEnd(J)}function U(){Y.removeEventListener("load",X,!1),Y.removeEventListener("error",K,!1)}if(Y.addEventListener("load",X,!1),Y.addEventListener("error",K,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)Y.crossOrigin=this.crossOrigin}return Q.manager.itemStart(J),Y.src=J,Y}}class MJ extends X7{constructor(J){super(J)}load(J,$,Z,W){let Q=new I8,H=new MZ(this.manager);return H.setCrossOrigin(this.crossOrigin),H.setPath(this.path),H.load(J,function(Y){if(Q.image=Y,Q.needsUpdate=!0,$!==void 0)$(Q)},Z,W),Q}}class K7 extends q8{constructor(J,$=1){super();this.isLight=!0,this.type="Light",this.color=new _0(J),this.intensity=$}dispose(){}copy(J,$){return super.copy(J,$),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let $=super.toJSON(J);if($.object.color=this.color.getHex(),$.object.intensity=this.intensity,this.groundColor!==void 0)$.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)$.object.distance=this.distance;if(this.angle!==void 0)$.object.angle=this.angle;if(this.decay!==void 0)$.object.decay=this.decay;if(this.penumbra!==void 0)$.object.penumbra=this.penumbra;if(this.shadow!==void 0)$.object.shadow=this.shadow.toJSON();if(this.target!==void 0)$.object.target=this.target.uuid;return $}}var G$=new W8,wW=new _,BW=new _;class LZ{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new A0(512,512),this.map=null,this.mapPass=null,this.matrix=new W8,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new W7,this._frameExtents=new A0(1,1),this._viewportCount=1,this._viewports=[new $8(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let $=this.camera,Z=this.matrix;wW.setFromMatrixPosition(J.matrixWorld),$.position.copy(wW),BW.setFromMatrixPosition(J.target.matrixWorld),$.lookAt(BW),$.updateMatrixWorld(),G$.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),this._frustum.setFromProjectionMatrix(G$),Z.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),Z.multiply(G$)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.mapSize.copy(J.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.intensity!==1)J.intensity=this.intensity;if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var PW=new W8,n6=new _,F$=new _;class pQ extends LZ{constructor(){super(new C8(90,1,0.5,500));this.isPointLightShadow=!0,this._frameExtents=new A0(4,2),this._viewportCount=6,this._viewports=[new $8(2,1,1,1),new $8(0,1,1,1),new $8(3,1,1,1),new $8(1,1,1,1),new $8(3,0,1,1),new $8(1,0,1,1)],this._cubeDirections=[new _(1,0,0),new _(-1,0,0),new _(0,0,1),new _(0,0,-1),new _(0,1,0),new _(0,-1,0)],this._cubeUps=[new _(0,1,0),new _(0,1,0),new _(0,1,0),new _(0,1,0),new _(0,0,1),new _(0,0,-1)]}updateMatrices(J,$=0){let Z=this.camera,W=this.matrix,Q=J.distance||Z.far;if(Q!==Z.far)Z.far=Q,Z.updateProjectionMatrix();n6.setFromMatrixPosition(J.matrixWorld),Z.position.copy(n6),F$.copy(Z.position),F$.add(this._cubeDirections[$]),Z.up.copy(this._cubeUps[$]),Z.lookAt(F$),Z.updateMatrixWorld(),W.makeTranslation(-n6.x,-n6.y,-n6.z),PW.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),this._frustum.setFromProjectionMatrix(PW)}}class U7 extends K7{constructor(J,$,Z=0,W=2){super(J,$);this.isPointLight=!0,this.type="PointLight",this.distance=Z,this.decay=W,this.shadow=new pQ}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(J,$){return super.copy(J,$),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}}class LJ extends NJ{constructor(J=-1,$=1,Z=1,W=-1,Q=0.1,H=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=$,this.top=Z,this.bottom=W,this.near=Q,this.far=H,this.updateProjectionMatrix()}copy(J,$){return super.copy(J,$),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,$,Z,W,Q,H){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=$,this.view.offsetX=Z,this.view.offsetY=W,this.view.width=Q,this.view.height=H,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),$=(this.top-this.bottom)/(2*this.zoom),Z=(this.right+this.left)/2,W=(this.top+this.bottom)/2,Q=Z-J,H=Z+J,Y=W+$,X=W-$;if(this.view!==null&&this.view.enabled){let K=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;Q+=K*this.view.offsetX,H=Q+K*this.view.width,Y-=U*this.view.offsetY,X=Y-U*this.view.height}this.projectionMatrix.makeOrthographic(Q,H,Y,X,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let $=super.toJSON(J);if($.object.zoom=this.zoom,$.object.left=this.left,$.object.right=this.right,$.object.top=this.top,$.object.bottom=this.bottom,$.object.near=this.near,$.object.far=this.far,this.view!==null)$.object.view=Object.assign({},this.view);return $}}class uQ extends LZ{constructor(){super(new LJ(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class zJ extends K7{constructor(J,$){super(J,$);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(q8.DEFAULT_UP),this.updateMatrix(),this.target=new q8,this.shadow=new uQ}dispose(){this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}}class CJ extends K7{constructor(J,$){super(J,$);this.isAmbientLight=!0,this.type="AmbientLight"}}class zZ extends C8{constructor(J=[]){super();this.isArrayCamera=!0,this.cameras=J}}class IJ{constructor(J=!0){this.autoStart=J,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=AW(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let J=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let $=AW();J=($-this.oldTime)/1000,this.oldTime=$,this.elapsedTime+=J}return J}}function AW(){return performance.now()}var CZ="\\[\\]\\.:\\/",xY=new RegExp("["+CZ+"]","g"),IZ="[^"+CZ+"]",yY="[^"+CZ.replace("\\.","")+"]",hY=/((?:WC+[\/:])*)/.source.replace("WC",IZ),vY=/(WCOD+)?/.source.replace("WCOD",yY),bY=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",IZ),gY=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",IZ),pY=new RegExp("^"+hY+vY+bY+gY+"$"),uY=["material","materials","bones","map"];class mQ{constructor(J,$,Z){let W=Z||J8.parseTrackName($);this._targetGroup=J,this._bindings=J.subscribe_($,W)}getValue(J,$){this.bind();let Z=this._targetGroup.nCachedObjects_,W=this._bindings[Z];if(W!==void 0)W.getValue(J,$)}setValue(J,$){let Z=this._bindings;for(let W=this._targetGroup.nCachedObjects_,Q=Z.length;W!==Q;++W)Z[W].setValue(J,$)}bind(){let J=this._bindings;for(let $=this._targetGroup.nCachedObjects_,Z=J.length;$!==Z;++$)J[$].bind()}unbind(){let J=this._bindings;for(let $=this._targetGroup.nCachedObjects_,Z=J.length;$!==Z;++$)J[$].unbind()}}class J8{constructor(J,$,Z){this.path=$,this.parsedPath=Z||J8.parseTrackName($),this.node=J8.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,$,Z){if(!(J&&J.isAnimationObjectGroup))return new J8(J,$,Z);else return new J8.Composite(J,$,Z)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(xY,"")}static parseTrackName(J){let $=pY.exec(J);if($===null)throw Error("PropertyBinding: Cannot parse trackName: "+J);let Z={nodeName:$[2],objectName:$[3],objectIndex:$[4],propertyName:$[5],propertyIndex:$[6]},W=Z.nodeName&&Z.nodeName.lastIndexOf(".");if(W!==void 0&&W!==-1){let Q=Z.nodeName.substring(W+1);if(uY.indexOf(Q)!==-1)Z.nodeName=Z.nodeName.substring(0,W),Z.objectName=Q}if(Z.propertyName===null||Z.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+J);return Z}static findNode(J,$){if($===void 0||$===""||$==="."||$===-1||$===J.name||$===J.uuid)return J;if(J.skeleton){let Z=J.skeleton.getBoneByName($);if(Z!==void 0)return Z}if(J.children){let Z=function(Q){for(let H=0;H<Q.length;H++){let Y=Q[H];if(Y.name===$||Y.uuid===$)return Y;let X=Z(Y.children);if(X)return X}return null},W=Z(J.children);if(W)return W}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,$){J[$]=this.targetObject[this.propertyName]}_getValue_array(J,$){let Z=this.resolvedProperty;for(let W=0,Q=Z.length;W!==Q;++W)J[$++]=Z[W]}_getValue_arrayElement(J,$){J[$]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,$){this.resolvedProperty.toArray(J,$)}_setValue_direct(J,$){this.targetObject[this.propertyName]=J[$]}_setValue_direct_setNeedsUpdate(J,$){this.targetObject[this.propertyName]=J[$],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,$){this.targetObject[this.propertyName]=J[$],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,$){let Z=this.resolvedProperty;for(let W=0,Q=Z.length;W!==Q;++W)Z[W]=J[$++]}_setValue_array_setNeedsUpdate(J,$){let Z=this.resolvedProperty;for(let W=0,Q=Z.length;W!==Q;++W)Z[W]=J[$++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,$){let Z=this.resolvedProperty;for(let W=0,Q=Z.length;W!==Q;++W)Z[W]=J[$++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,$){this.resolvedProperty[this.propertyIndex]=J[$]}_setValue_arrayElement_setNeedsUpdate(J,$){this.resolvedProperty[this.propertyIndex]=J[$],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,$){this.resolvedProperty[this.propertyIndex]=J[$],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,$){this.resolvedProperty.fromArray(J,$)}_setValue_fromArray_setNeedsUpdate(J,$){this.resolvedProperty.fromArray(J,$),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,$){this.resolvedProperty.fromArray(J,$),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,$){this.bind(),this.getValue(J,$)}_setValue_unbound(J,$){this.bind(),this.setValue(J,$)}bind(){let J=this.node,$=this.parsedPath,Z=$.objectName,W=$.propertyName,Q=$.propertyIndex;if(!J)J=J8.findNode(this.rootNode,$.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(Z){let K=$.objectIndex;switch(Z){case"materials":if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===K){K=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[Z]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[Z]}if(K!==void 0){if(J[K]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[K]}}let H=J[W];if(H===void 0){let K=$.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+K+"."+W+" but it wasn't found.",J);return}let Y=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)Y=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)Y=this.Versioning.MatrixWorldNeedsUpdate;let X=this.BindingType.Direct;if(Q!==void 0){if(W==="morphTargetInfluences"){if(!J.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[Q]!==void 0)Q=J.morphTargetDictionary[Q]}X=this.BindingType.ArrayElement,this.resolvedProperty=H,this.propertyIndex=Q}else if(H.fromArray!==void 0&&H.toArray!==void 0)X=this.BindingType.HasFromToArray,this.resolvedProperty=H;else if(Array.isArray(H))X=this.BindingType.EntireArray,this.resolvedProperty=H;else this.propertyName=W;this.getValue=this.GetterByBindingType[X],this.setValue=this.SetterByBindingTypeAndVersioning[X][Y]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}J8.Composite=mQ;J8.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};J8.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};J8.prototype.GetterByBindingType=[J8.prototype._getValue_direct,J8.prototype._getValue_array,J8.prototype._getValue_arrayElement,J8.prototype._getValue_toArray];J8.prototype.SetterByBindingTypeAndVersioning=[[J8.prototype._setValue_direct,J8.prototype._setValue_direct_setNeedsUpdate,J8.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[J8.prototype._setValue_array,J8.prototype._setValue_array_setNeedsUpdate,J8.prototype._setValue_array_setMatrixWorldNeedsUpdate],[J8.prototype._setValue_arrayElement,J8.prototype._setValue_arrayElement_setNeedsUpdate,J8.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[J8.prototype._setValue_fromArray,J8.prototype._setValue_fromArray_setNeedsUpdate,J8.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var E5=new Float32Array(1);class G7{constructor(J=1,$=0,Z=0){return this.radius=J,this.phi=$,this.theta=Z,this}set(J,$,Z){return this.radius=J,this.phi=$,this.theta=Z,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=d0(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,$,Z){if(this.radius=Math.sqrt(J*J+$*$+Z*Z),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,Z),this.phi=Math.acos(d0($/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class VJ extends N9{constructor(J,$=null){super();this.object=J,this.domElement=$,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function VZ(J,$,Z,W){let Q=mY(W);switch(Z){case 1021:return J*$;case 1024:return J*$;case 1025:return J*$*2;case 1028:return J*$/Q.components*Q.byteLength;case 1029:return J*$/Q.components*Q.byteLength;case 1030:return J*$*2/Q.components*Q.byteLength;case 1031:return J*$*2/Q.components*Q.byteLength;case 1022:return J*$*3/Q.components*Q.byteLength;case 1023:return J*$*4/Q.components*Q.byteLength;case 1033:return J*$*4/Q.components*Q.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max($,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max($,8)/2;case 36196:case 37492:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*8;case 37496:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor(($+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor(($+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor(($+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor(($+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor(($+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor(($+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor(($+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor(($+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor(($+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor(($+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor(($+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor(($+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor(($+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil($/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil($/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil($/4)*16}throw Error(`Unable to determine texture byte length for ${Z} format.`)}function mY(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"172"}}));if(typeof window<"u")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="172";function NH(){let J=null,$=!1,Z=null,W=null;function Q(H,Y){Z(H,Y),W=J.requestAnimationFrame(Q)}return{start:function(){if($===!0)return;if(Z===null)return;W=J.requestAnimationFrame(Q),$=!0},stop:function(){J.cancelAnimationFrame(W),$=!1},setAnimationLoop:function(H){Z=H},setContext:function(H){J=H}}}function lY(J){let $=new WeakMap;function Z(X,K){let{array:U,usage:G}=X,F=U.byteLength,N=J.createBuffer();J.bindBuffer(K,N),J.bufferData(K,U,G),X.onUploadCallback();let E;if(U instanceof Float32Array)E=J.FLOAT;else if(U instanceof Uint16Array)if(X.isFloat16BufferAttribute)E=J.HALF_FLOAT;else E=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)E=J.SHORT;else if(U instanceof Uint32Array)E=J.UNSIGNED_INT;else if(U instanceof Int32Array)E=J.INT;else if(U instanceof Int8Array)E=J.BYTE;else if(U instanceof Uint8Array)E=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)E=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:N,type:E,bytesPerElement:U.BYTES_PER_ELEMENT,version:X.version,size:F}}function W(X,K,U){let{array:G,updateRanges:F}=K;if(J.bindBuffer(U,X),F.length===0)J.bufferSubData(U,0,G);else{F.sort((E,R)=>E.start-R.start);let N=0;for(let E=1;E<F.length;E++){let R=F[N],D=F[E];if(D.start<=R.start+R.count+1)R.count=Math.max(R.count,D.start+D.count-R.start);else++N,F[N]=D}F.length=N+1;for(let E=0,R=F.length;E<R;E++){let D=F[E];J.bufferSubData(U,D.start*G.BYTES_PER_ELEMENT,G,D.start,D.count)}K.clearUpdateRanges()}K.onUploadCallback()}function Q(X){if(X.isInterleavedBufferAttribute)X=X.data;return $.get(X)}function H(X){if(X.isInterleavedBufferAttribute)X=X.data;let K=$.get(X);if(K)J.deleteBuffer(K.buffer),$.delete(X)}function Y(X,K){if(X.isInterleavedBufferAttribute)X=X.data;if(X.isGLBufferAttribute){let G=$.get(X);if(!G||G.version<X.version)$.set(X,{buffer:X.buffer,type:X.type,bytesPerElement:X.elementSize,version:X.version});return}let U=$.get(X);if(U===void 0)$.set(X,Z(X,K));else if(U.version<X.version){if(U.size!==X.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");W(U.buffer,X,K),U.version=X.version}}return{get:Q,remove:H,update:Y}}var dY=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cY=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nY=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sY=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iY=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,oY=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aY=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rY=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tY=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,eY=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,JX=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$X=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ZX=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,WX=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,QX=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,HX=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,YX=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XX=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,KX=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,UX=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,GX=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,FX=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,NX=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,qX=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,OX=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,EX=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,RX=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,DX=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kX=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,MX=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,LX="gl_FragColor = linearToOutputTexel( gl_FragColor );",zX=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,CX=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,IX=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,VX=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wX=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,BX=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,PX=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AX=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TX=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,SX=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_X=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jX=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fX=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xX=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yX=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hX=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vX=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bX=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gX=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pX=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uX=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mX=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lX=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dX=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cX=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nX=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sX=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iX=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oX=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,aX=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rX=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tX=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,eX=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JK=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$K=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ZK=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,WK=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QK=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HK=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,YK=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XK=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,KK=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,UK=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GK=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FK=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,NK=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qK=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OK=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,EK=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,RK=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DK=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kK=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,MK=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,LK=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zK=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,CK=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,IK=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,VK=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wK=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,BK=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,PK=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,AK=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,TK=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,SK=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_K=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jK=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fK=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xK=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yK=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hK=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vK=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bK=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gK=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pK=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uK=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mK=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,lK=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dK=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cK=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nK=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sK=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iK=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oK=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,aK=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,rK=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tK=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,eK=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JU=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$U=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ZU=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,WU=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,QU=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HU=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YU=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XU=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,KU=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UU=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,GU=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,FU=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NU=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qU=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,OU=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EU=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RU=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DU=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kU=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MU=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LU=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zU=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,CU=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,u0={alphahash_fragment:dY,alphahash_pars_fragment:cY,alphamap_fragment:nY,alphamap_pars_fragment:sY,alphatest_fragment:iY,alphatest_pars_fragment:oY,aomap_fragment:aY,aomap_pars_fragment:rY,batching_pars_vertex:tY,batching_vertex:eY,begin_vertex:JX,beginnormal_vertex:$X,bsdfs:ZX,iridescence_fragment:WX,bumpmap_pars_fragment:QX,clipping_planes_fragment:HX,clipping_planes_pars_fragment:YX,clipping_planes_pars_vertex:XX,clipping_planes_vertex:KX,color_fragment:UX,color_pars_fragment:GX,color_pars_vertex:FX,color_vertex:NX,common:qX,cube_uv_reflection_fragment:OX,defaultnormal_vertex:EX,displacementmap_pars_vertex:RX,displacementmap_vertex:DX,emissivemap_fragment:kX,emissivemap_pars_fragment:MX,colorspace_fragment:LX,colorspace_pars_fragment:zX,envmap_fragment:CX,envmap_common_pars_fragment:IX,envmap_pars_fragment:VX,envmap_pars_vertex:wX,envmap_physical_pars_fragment:hX,envmap_vertex:BX,fog_vertex:PX,fog_pars_vertex:AX,fog_fragment:TX,fog_pars_fragment:SX,gradientmap_pars_fragment:_X,lightmap_pars_fragment:jX,lights_lambert_fragment:fX,lights_lambert_pars_fragment:xX,lights_pars_begin:yX,lights_toon_fragment:vX,lights_toon_pars_fragment:bX,lights_phong_fragment:gX,lights_phong_pars_fragment:pX,lights_physical_fragment:uX,lights_physical_pars_fragment:mX,lights_fragment_begin:lX,lights_fragment_maps:dX,lights_fragment_end:cX,logdepthbuf_fragment:nX,logdepthbuf_pars_fragment:sX,logdepthbuf_pars_vertex:iX,logdepthbuf_vertex:oX,map_fragment:aX,map_pars_fragment:rX,map_particle_fragment:tX,map_particle_pars_fragment:eX,metalnessmap_fragment:JK,metalnessmap_pars_fragment:$K,morphinstance_vertex:ZK,morphcolor_vertex:WK,morphnormal_vertex:QK,morphtarget_pars_vertex:HK,morphtarget_vertex:YK,normal_fragment_begin:XK,normal_fragment_maps:KK,normal_pars_fragment:UK,normal_pars_vertex:GK,normal_vertex:FK,normalmap_pars_fragment:NK,clearcoat_normal_fragment_begin:qK,clearcoat_normal_fragment_maps:OK,clearcoat_pars_fragment:EK,iridescence_pars_fragment:RK,opaque_fragment:DK,packing:kK,premultiplied_alpha_fragment:MK,project_vertex:LK,dithering_fragment:zK,dithering_pars_fragment:CK,roughnessmap_fragment:IK,roughnessmap_pars_fragment:VK,shadowmap_pars_fragment:wK,shadowmap_pars_vertex:BK,shadowmap_vertex:PK,shadowmask_pars_fragment:AK,skinbase_vertex:TK,skinning_pars_vertex:SK,skinning_vertex:_K,skinnormal_vertex:jK,specularmap_fragment:fK,specularmap_pars_fragment:xK,tonemapping_fragment:yK,tonemapping_pars_fragment:hK,transmission_fragment:vK,transmission_pars_fragment:bK,uv_pars_fragment:gK,uv_pars_vertex:pK,uv_vertex:uK,worldpos_vertex:mK,background_vert:lK,background_frag:dK,backgroundCube_vert:cK,backgroundCube_frag:nK,cube_vert:sK,cube_frag:iK,depth_vert:oK,depth_frag:aK,distanceRGBA_vert:rK,distanceRGBA_frag:tK,equirect_vert:eK,equirect_frag:JU,linedashed_vert:$U,linedashed_frag:ZU,meshbasic_vert:WU,meshbasic_frag:QU,meshlambert_vert:HU,meshlambert_frag:YU,meshmatcap_vert:XU,meshmatcap_frag:KU,meshnormal_vert:UU,meshnormal_frag:GU,meshphong_vert:FU,meshphong_frag:NU,meshphysical_vert:qU,meshphysical_frag:OU,meshtoon_vert:EU,meshtoon_frag:RU,points_vert:DU,points_frag:kU,shadow_vert:MU,shadow_frag:LU,sprite_vert:zU,sprite_frag:CU},H0={common:{diffuse:{value:new _0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new h0},alphaMap:{value:null},alphaMapTransform:{value:new h0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new h0}},envmap:{envMap:{value:null},envMapRotation:{value:new h0},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new h0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new h0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new h0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new h0},normalScale:{value:new A0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new h0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new h0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new h0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new h0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new _0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new h0},alphaTest:{value:0},uvTransform:{value:new h0}},sprite:{diffuse:{value:new _0(16777215)},opacity:{value:1},center:{value:new A0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new h0},alphaMap:{value:null},alphaMapTransform:{value:new h0},alphaTest:{value:0}}},W9={basic:{uniforms:w8([H0.common,H0.specularmap,H0.envmap,H0.aomap,H0.lightmap,H0.fog]),vertexShader:u0.meshbasic_vert,fragmentShader:u0.meshbasic_frag},lambert:{uniforms:w8([H0.common,H0.specularmap,H0.envmap,H0.aomap,H0.lightmap,H0.emissivemap,H0.bumpmap,H0.normalmap,H0.displacementmap,H0.fog,H0.lights,{emissive:{value:new _0(0)}}]),vertexShader:u0.meshlambert_vert,fragmentShader:u0.meshlambert_frag},phong:{uniforms:w8([H0.common,H0.specularmap,H0.envmap,H0.aomap,H0.lightmap,H0.emissivemap,H0.bumpmap,H0.normalmap,H0.displacementmap,H0.fog,H0.lights,{emissive:{value:new _0(0)},specular:{value:new _0(1118481)},shininess:{value:30}}]),vertexShader:u0.meshphong_vert,fragmentShader:u0.meshphong_frag},standard:{uniforms:w8([H0.common,H0.envmap,H0.aomap,H0.lightmap,H0.emissivemap,H0.bumpmap,H0.normalmap,H0.displacementmap,H0.roughnessmap,H0.metalnessmap,H0.fog,H0.lights,{emissive:{value:new _0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:u0.meshphysical_vert,fragmentShader:u0.meshphysical_frag},toon:{uniforms:w8([H0.common,H0.aomap,H0.lightmap,H0.emissivemap,H0.bumpmap,H0.normalmap,H0.displacementmap,H0.gradientmap,H0.fog,H0.lights,{emissive:{value:new _0(0)}}]),vertexShader:u0.meshtoon_vert,fragmentShader:u0.meshtoon_frag},matcap:{uniforms:w8([H0.common,H0.bumpmap,H0.normalmap,H0.displacementmap,H0.fog,{matcap:{value:null}}]),vertexShader:u0.meshmatcap_vert,fragmentShader:u0.meshmatcap_frag},points:{uniforms:w8([H0.points,H0.fog]),vertexShader:u0.points_vert,fragmentShader:u0.points_frag},dashed:{uniforms:w8([H0.common,H0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:u0.linedashed_vert,fragmentShader:u0.linedashed_frag},depth:{uniforms:w8([H0.common,H0.displacementmap]),vertexShader:u0.depth_vert,fragmentShader:u0.depth_frag},normal:{uniforms:w8([H0.common,H0.bumpmap,H0.normalmap,H0.displacementmap,{opacity:{value:1}}]),vertexShader:u0.meshnormal_vert,fragmentShader:u0.meshnormal_frag},sprite:{uniforms:w8([H0.sprite,H0.fog]),vertexShader:u0.sprite_vert,fragmentShader:u0.sprite_frag},background:{uniforms:{uvTransform:{value:new h0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:u0.background_vert,fragmentShader:u0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new h0}},vertexShader:u0.backgroundCube_vert,fragmentShader:u0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:u0.cube_vert,fragmentShader:u0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:u0.equirect_vert,fragmentShader:u0.equirect_frag},distanceRGBA:{uniforms:w8([H0.common,H0.displacementmap,{referencePosition:{value:new _},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:u0.distanceRGBA_vert,fragmentShader:u0.distanceRGBA_frag},shadow:{uniforms:w8([H0.lights,H0.fog,{color:{value:new _0(0)},opacity:{value:1}}]),vertexShader:u0.shadow_vert,fragmentShader:u0.shadow_frag}};W9.physical={uniforms:w8([W9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new h0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new h0},clearcoatNormalScale:{value:new A0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new h0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new h0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new h0},sheen:{value:0},sheenColor:{value:new _0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new h0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new h0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new h0},transmissionSamplerSize:{value:new A0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new h0},attenuationDistance:{value:0},attenuationColor:{value:new _0(0)},specularColor:{value:new _0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new h0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new h0},anisotropyVector:{value:new A0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new h0}}]),vertexShader:u0.meshphysical_vert,fragmentShader:u0.meshphysical_frag};var wJ={r:0,b:0,g:0},t9=new m8,IU=new W8;function VU(J,$,Z,W,Q,H,Y){let X=new _0(0),K=H===!0?0:1,U,G,F=null,N=0,E=null;function R(L){let A=L.isScene===!0?L.background:null;if(A&&A.isTexture)A=(L.backgroundBlurriness>0?Z:$).get(A);return A}function D(L){let A=!1,T=R(L);if(T===null)O(X,K);else if(T&&T.isColor)O(T,1),A=!0;let I=J.xr.getEnvironmentBlendMode();if(I==="additive")W.buffers.color.setClear(0,0,0,1,Y);else if(I==="alpha-blend")W.buffers.color.setClear(0,0,0,0,Y);if(J.autoClear||A)W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function q(L,A){let T=R(A);if(T&&(T.isCubeTexture||T.mapping===r6)){if(G===void 0)G=new H8(new j9(1,1,1),new $9({name:"BackgroundCubeMaterial",uniforms:i9(W9.backgroundCube.uniforms),vertexShader:W9.backgroundCube.vertexShader,fragmentShader:W9.backgroundCube.fragmentShader,side:T8,depthTest:!1,depthWrite:!1,fog:!1})),G.geometry.deleteAttribute("normal"),G.geometry.deleteAttribute("uv"),G.onBeforeRender=function(I,B,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(G.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),Q.update(G);if(t9.copy(A.backgroundRotation),t9.x*=-1,t9.y*=-1,t9.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1)t9.y*=-1,t9.z*=-1;if(G.material.uniforms.envMap.value=T,G.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,G.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,G.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,G.material.uniforms.backgroundRotation.value.setFromMatrix4(IU.makeRotationFromEuler(t9)),G.material.toneMapped=i0.getTransfer(T.colorSpace)!==Q8,F!==T||N!==T.version||E!==J.toneMapping)G.material.needsUpdate=!0,F=T,N=T.version,E=J.toneMapping;G.layers.enableAll(),L.unshift(G,G.geometry,G.material,0,0,null)}else if(T&&T.isTexture){if(U===void 0)U=new H8(new Y7(2,2),new $9({name:"BackgroundMaterial",uniforms:i9(W9.background.uniforms),vertexShader:W9.background.vertexShader,fragmentShader:W9.background.fragmentShader,side:z6,depthTest:!1,depthWrite:!1,fog:!1})),U.geometry.deleteAttribute("normal"),Object.defineProperty(U.material,"map",{get:function(){return this.uniforms.t2D.value}}),Q.update(U);if(U.material.uniforms.t2D.value=T,U.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,U.material.toneMapped=i0.getTransfer(T.colorSpace)!==Q8,T.matrixAutoUpdate===!0)T.updateMatrix();if(U.material.uniforms.uvTransform.value.copy(T.matrix),F!==T||N!==T.version||E!==J.toneMapping)U.material.needsUpdate=!0,F=T,N=T.version,E=J.toneMapping;U.layers.enableAll(),L.unshift(U,U.geometry,U.material,0,0,null)}}function O(L,A){L.getRGB(wJ,YZ(J)),W.buffers.color.setClear(wJ.r,wJ.g,wJ.b,A,Y)}function V(){if(G!==void 0)G.geometry.dispose(),G.material.dispose();if(U!==void 0)U.geometry.dispose(),U.material.dispose()}return{getClearColor:function(){return X},setClearColor:function(L,A=1){X.set(L),K=A,O(X,K)},getClearAlpha:function(){return K},setClearAlpha:function(L){K=L,O(X,K)},render:D,addToRenderList:q,dispose:V}}function wU(J,$){let Z=J.getParameter(J.MAX_VERTEX_ATTRIBS),W={},Q=N(null),H=Q,Y=!1;function X(C,S,h,u,l){let o=!1,d=F(u,h,S);if(H!==d)H=d,U(H.object);if(o=E(C,u,h,l),o)R(C,u,h,l);if(l!==null)$.update(l,J.ELEMENT_ARRAY_BUFFER);if(o||Y){if(Y=!1,A(C,S,h,u),l!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,$.get(l).buffer)}}function K(){return J.createVertexArray()}function U(C){return J.bindVertexArray(C)}function G(C){return J.deleteVertexArray(C)}function F(C,S,h){let u=h.wireframe===!0,l=W[C.id];if(l===void 0)l={},W[C.id]=l;let o=l[S.id];if(o===void 0)o={},l[S.id]=o;let d=o[u];if(d===void 0)d=N(K()),o[u]=d;return d}function N(C){let S=[],h=[],u=[];for(let l=0;l<Z;l++)S[l]=0,h[l]=0,u[l]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:h,attributeDivisors:u,object:C,attributes:{},index:null}}function E(C,S,h,u){let l=H.attributes,o=S.attributes,d=0,t=h.getAttributes();for(let m in t)if(t[m].location>=0){let J0=l[m],w0=o[m];if(w0===void 0){if(m==="instanceMatrix"&&C.instanceMatrix)w0=C.instanceMatrix;if(m==="instanceColor"&&C.instanceColor)w0=C.instanceColor}if(J0===void 0)return!0;if(J0.attribute!==w0)return!0;if(w0&&J0.data!==w0.data)return!0;d++}if(H.attributesNum!==d)return!0;if(H.index!==u)return!0;return!1}function R(C,S,h,u){let l={},o=S.attributes,d=0,t=h.getAttributes();for(let m in t)if(t[m].location>=0){let J0=o[m];if(J0===void 0){if(m==="instanceMatrix"&&C.instanceMatrix)J0=C.instanceMatrix;if(m==="instanceColor"&&C.instanceColor)J0=C.instanceColor}let w0={};if(w0.attribute=J0,J0&&J0.data)w0.data=J0.data;l[m]=w0,d++}H.attributes=l,H.attributesNum=d,H.index=u}function D(){let C=H.newAttributes;for(let S=0,h=C.length;S<h;S++)C[S]=0}function q(C){O(C,0)}function O(C,S){let{newAttributes:h,enabledAttributes:u,attributeDivisors:l}=H;if(h[C]=1,u[C]===0)J.enableVertexAttribArray(C),u[C]=1;if(l[C]!==S)J.vertexAttribDivisor(C,S),l[C]=S}function V(){let{newAttributes:C,enabledAttributes:S}=H;for(let h=0,u=S.length;h<u;h++)if(S[h]!==C[h])J.disableVertexAttribArray(h),S[h]=0}function L(C,S,h,u,l,o,d){if(d===!0)J.vertexAttribIPointer(C,S,h,l,o);else J.vertexAttribPointer(C,S,h,u,l,o)}function A(C,S,h,u){D();let l=u.attributes,o=h.getAttributes(),d=S.defaultAttributeValues;for(let t in o){let m=o[t];if(m.location>=0){let X0=l[t];if(X0===void 0){if(t==="instanceMatrix"&&C.instanceMatrix)X0=C.instanceMatrix;if(t==="instanceColor"&&C.instanceColor)X0=C.instanceColor}if(X0!==void 0){let{normalized:J0,itemSize:w0}=X0,g0=$.get(X0);if(g0===void 0)continue;let{buffer:n,type:Z0,bytesPerElement:D0}=g0,M0=Z0===J.INT||Z0===J.UNSIGNED_INT||X0.gpuType===M$;if(X0.isInterleavedBufferAttribute){let Q0=X0.data,z0=Q0.stride,p=X0.offset;if(Q0.isInstancedInterleavedBuffer){for(let T0=0;T0<m.locationSize;T0++)O(m.location+T0,Q0.meshPerAttribute);if(C.isInstancedMesh!==!0&&u._maxInstanceCount===void 0)u._maxInstanceCount=Q0.meshPerAttribute*Q0.count}else for(let T0=0;T0<m.locationSize;T0++)q(m.location+T0);J.bindBuffer(J.ARRAY_BUFFER,n);for(let T0=0;T0<m.locationSize;T0++)L(m.location+T0,w0/m.locationSize,Z0,J0,z0*D0,(p+w0/m.locationSize*T0)*D0,M0)}else{if(X0.isInstancedBufferAttribute){for(let Q0=0;Q0<m.locationSize;Q0++)O(m.location+Q0,X0.meshPerAttribute);if(C.isInstancedMesh!==!0&&u._maxInstanceCount===void 0)u._maxInstanceCount=X0.meshPerAttribute*X0.count}else for(let Q0=0;Q0<m.locationSize;Q0++)q(m.location+Q0);J.bindBuffer(J.ARRAY_BUFFER,n);for(let Q0=0;Q0<m.locationSize;Q0++)L(m.location+Q0,w0/m.locationSize,Z0,J0,w0*D0,w0/m.locationSize*Q0*D0,M0)}}else if(d!==void 0){let J0=d[t];if(J0!==void 0)switch(J0.length){case 2:J.vertexAttrib2fv(m.location,J0);break;case 3:J.vertexAttrib3fv(m.location,J0);break;case 4:J.vertexAttrib4fv(m.location,J0);break;default:J.vertexAttrib1fv(m.location,J0)}}}}V()}function T(){b();for(let C in W){let S=W[C];for(let h in S){let u=S[h];for(let l in u)G(u[l].object),delete u[l];delete S[h]}delete W[C]}}function I(C){if(W[C.id]===void 0)return;let S=W[C.id];for(let h in S){let u=S[h];for(let l in u)G(u[l].object),delete u[l];delete S[h]}delete W[C.id]}function B(C){for(let S in W){let h=W[S];if(h[C.id]===void 0)continue;let u=h[C.id];for(let l in u)G(u[l].object),delete u[l];delete h[C.id]}}function b(){if(z(),Y=!0,H===Q)return;H=Q,U(H.object)}function z(){Q.geometry=null,Q.program=null,Q.wireframe=!1}return{setup:X,reset:b,resetDefaultState:z,dispose:T,releaseStatesOfGeometry:I,releaseStatesOfProgram:B,initAttributes:D,enableAttribute:q,disableUnusedAttributes:V}}function BU(J,$,Z){let W;function Q(U){W=U}function H(U,G){J.drawArrays(W,U,G),Z.update(G,W,1)}function Y(U,G,F){if(F===0)return;J.drawArraysInstanced(W,U,G,F),Z.update(G,W,F)}function X(U,G,F){if(F===0)return;$.get("WEBGL_multi_draw").multiDrawArraysWEBGL(W,U,0,G,0,F);let E=0;for(let R=0;R<F;R++)E+=G[R];Z.update(E,W,1)}function K(U,G,F,N){if(F===0)return;let E=$.get("WEBGL_multi_draw");if(E===null)for(let R=0;R<U.length;R++)Y(U[R],G[R],N[R]);else{E.multiDrawArraysInstancedWEBGL(W,U,0,G,0,N,0,F);let R=0;for(let D=0;D<F;D++)R+=G[D]*N[D];Z.update(R,W,1)}}this.setMode=Q,this.render=H,this.renderInstances=Y,this.renderMultiDraw=X,this.renderMultiDrawInstances=K}function PU(J,$,Z,W){let Q;function H(){if(Q!==void 0)return Q;if($.has("EXT_texture_filter_anisotropic")===!0){let B=$.get("EXT_texture_filter_anisotropic");Q=J.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else Q=0;return Q}function Y(B){if(B!==e8&&W.convert(B)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function X(B){let b=B===J7&&($.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float"));if(B!==T9&&W.convert(B)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==S9&&!b)return!1;return!0}function K(B){if(B==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";B="mediump"}if(B==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=Z.precision!==void 0?Z.precision:"highp",G=K(U);if(G!==U)console.warn("THREE.WebGLRenderer:",U,"not supported, using",G,"instead."),U=G;let F=Z.logarithmicDepthBuffer===!0,N=Z.reverseDepthBuffer===!0&&$.has("EXT_clip_control"),E=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),R=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=J.getParameter(J.MAX_TEXTURE_SIZE),q=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),O=J.getParameter(J.MAX_VERTEX_ATTRIBS),V=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),L=J.getParameter(J.MAX_VARYING_VECTORS),A=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),T=R>0,I=J.getParameter(J.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:H,getMaxPrecision:K,textureFormatReadable:Y,textureTypeReadable:X,precision:U,logarithmicDepthBuffer:F,reverseDepthBuffer:N,maxTextures:E,maxVertexTextures:R,maxTextureSize:D,maxCubemapSize:q,maxAttributes:O,maxVertexUniforms:V,maxVaryings:L,maxFragmentUniforms:A,vertexTextures:T,maxSamples:I}}function AU(J){let $=this,Z=null,W=0,Q=!1,H=!1,Y=new i8,X=new h0,K={value:null,needsUpdate:!1};this.uniform=K,this.numPlanes=0,this.numIntersection=0,this.init=function(F,N){let E=F.length!==0||N||W!==0||Q;return Q=N,W=F.length,E},this.beginShadows=function(){H=!0,G(null)},this.endShadows=function(){H=!1},this.setGlobalState=function(F,N){Z=G(F,N,0)},this.setState=function(F,N,E){let{clippingPlanes:R,clipIntersection:D,clipShadows:q}=F,O=J.get(F);if(!Q||R===null||R.length===0||H&&!q)if(H)G(null);else U();else{let V=H?0:W,L=V*4,A=O.clippingState||null;K.value=A,A=G(R,N,L,E);for(let T=0;T!==L;++T)A[T]=Z[T];O.clippingState=A,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=V}};function U(){if(K.value!==Z)K.value=Z,K.needsUpdate=W>0;$.numPlanes=W,$.numIntersection=0}function G(F,N,E,R){let D=F!==null?F.length:0,q=null;if(D!==0){if(q=K.value,R!==!0||q===null){let O=E+D*4,V=N.matrixWorldInverse;if(X.getNormalMatrix(V),q===null||q.length<O)q=new Float32Array(O);for(let L=0,A=E;L!==D;++L,A+=4)Y.copy(F[L]).applyMatrix4(V,X),Y.normal.toArray(q,A),q[A+3]=Y.constant}K.value=q,K.needsUpdate=!0}return $.numPlanes=D,$.numIntersection=0,q}}function TU(J){let $=new WeakMap;function Z(Y,X){if(X===t7)Y.mapping=I6;else if(X===e7)Y.mapping=m9;return Y}function W(Y){if(Y&&Y.isTexture){let X=Y.mapping;if(X===t7||X===e7)if($.has(Y)){let K=$.get(Y).texture;return Z(K,Y.mapping)}else{let K=Y.image;if(K&&K.height>0){let U=new KZ(K.height);return U.fromEquirectangularTexture(J,Y),$.set(Y,U),Y.addEventListener("dispose",Q),Z(U.texture,Y.mapping)}else return null}}return Y}function Q(Y){let X=Y.target;X.removeEventListener("dispose",Q);let K=$.get(X);if(K!==void 0)$.delete(X),K.dispose()}function H(){$=new WeakMap}return{get:W,dispose:H}}var j6=4,lQ=[0.125,0.215,0.35,0.446,0.526,0.582],$6=20,wZ=new LJ,dQ=new _0,BZ=null,PZ=0,AZ=0,TZ=!1,J6=(1+Math.sqrt(5))/2,_6=1/J6,cQ=[new _(-J6,_6,0),new _(J6,_6,0),new _(-_6,0,J6),new _(_6,0,J6),new _(0,J6,-_6),new _(0,J6,_6),new _(-1,1,-1),new _(1,1,-1),new _(-1,1,1),new _(1,1,1)];class _Z{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(J,$=0,Z=0.1,W=100){BZ=this._renderer.getRenderTarget(),PZ=this._renderer.getActiveCubeFace(),AZ=this._renderer.getActiveMipmapLevel(),TZ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let Q=this._allocateTargets();if(Q.depthBuffer=!0,this._sceneToCubeUV(J,Z,W,Q),$>0)this._blur(Q,0,0,$);return this._applyPMREM(Q),this._cleanup(Q),Q}fromEquirectangular(J,$=null){return this._fromTexture(J,$)}fromCubemap(J,$=null){return this._fromTexture(J,$)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=iQ(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=sQ(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodPlanes.length;J++)this._lodPlanes[J].dispose()}_cleanup(J){this._renderer.setRenderTarget(BZ,PZ,AZ),this._renderer.xr.enabled=TZ,J.scissorTest=!1,BJ(J,0,0,J.width,J.height)}_fromTexture(J,$){if(J.mapping===I6||J.mapping===m9)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);BZ=this._renderer.getRenderTarget(),PZ=this._renderer.getActiveCubeFace(),AZ=this._renderer.getActiveMipmapLevel(),TZ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let Z=$||this._allocateTargets();return this._textureToCubeUV(J,Z),this._applyPMREM(Z),this._cleanup(Z),Z}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),$=4*this._cubeSize,Z={magFilter:l9,minFilter:l9,generateMipmaps:!1,type:J7,format:e8,colorSpace:Z7,depthBuffer:!1},W=nQ(J,$,Z);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==$){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=nQ(J,$,Z);let{_lodMax:Q}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=SU(Q)),this._blurMaterial=_U(Q,J,$)}return W}_compileMaterial(J){let $=new H8(this._lodPlanes[0],J);this._renderer.compile($,wZ)}_sceneToCubeUV(J,$,Z,W){let Y=new C8(90,1,$,Z),X=[1,-1,1,1,1,1],K=[1,1,1,-1,-1,-1],U=this._renderer,G=U.autoClear,F=U.toneMapping;U.getClearColor(dQ),U.toneMapping=F9,U.autoClear=!1;let N=new _9({name:"PMREM.Background",side:T8,depthWrite:!1,depthTest:!1}),E=new H8(new j9,N),R=!1,D=J.background;if(D){if(D.isColor)N.color.copy(D),J.background=null,R=!0}else N.color.copy(dQ),R=!0;for(let q=0;q<6;q++){let O=q%3;if(O===0)Y.up.set(0,X[q],0),Y.lookAt(K[q],0,0);else if(O===1)Y.up.set(0,0,X[q]),Y.lookAt(0,K[q],0);else Y.up.set(0,X[q],0),Y.lookAt(0,0,K[q]);let V=this._cubeSize;if(BJ(W,O*V,q>2?V:0,V,V),U.setRenderTarget(W),R)U.render(E,Y);U.render(J,Y)}E.geometry.dispose(),E.material.dispose(),U.toneMapping=F,U.autoClear=G,J.background=D}_textureToCubeUV(J,$){let Z=this._renderer,W=J.mapping===I6||J.mapping===m9;if(W){if(this._cubemapMaterial===null)this._cubemapMaterial=iQ();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=sQ();let Q=W?this._cubemapMaterial:this._equirectMaterial,H=new H8(this._lodPlanes[0],Q),Y=Q.uniforms;Y.envMap.value=J;let X=this._cubeSize;BJ($,0,0,3*X,2*X),Z.setRenderTarget($),Z.render(H,wZ)}_applyPMREM(J){let $=this._renderer,Z=$.autoClear;$.autoClear=!1;let W=this._lodPlanes.length;for(let Q=1;Q<W;Q++){let H=Math.sqrt(this._sigmas[Q]*this._sigmas[Q]-this._sigmas[Q-1]*this._sigmas[Q-1]),Y=cQ[(W-Q-1)%cQ.length];this._blur(J,Q-1,Q,H,Y)}$.autoClear=Z}_blur(J,$,Z,W,Q){let H=this._pingPongRenderTarget;this._halfBlur(J,H,$,Z,W,"latitudinal",Q),this._halfBlur(H,J,Z,Z,W,"longitudinal",Q)}_halfBlur(J,$,Z,W,Q,H,Y){let X=this._renderer,K=this._blurMaterial;if(H!=="latitudinal"&&H!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let U=3,G=new H8(this._lodPlanes[W],K),F=K.uniforms,N=this._sizeLods[Z]-1,E=isFinite(Q)?Math.PI/(2*N):2*Math.PI/(2*$6-1),R=Q/E,D=isFinite(Q)?1+Math.floor(U*R):$6;if(D>$6)console.warn(`sigmaRadians, ${Q}, is too large and will clip, as it requested ${D} samples when the maximum is set to ${$6}`);let q=[],O=0;for(let I=0;I<$6;++I){let B=I/R,b=Math.exp(-B*B/2);if(q.push(b),I===0)O+=b;else if(I<D)O+=2*b}for(let I=0;I<q.length;I++)q[I]=q[I]/O;if(F.envMap.value=J.texture,F.samples.value=D,F.weights.value=q,F.latitudinal.value=H==="latitudinal",Y)F.poleAxis.value=Y;let{_lodMax:V}=this;F.dTheta.value=E,F.mipInt.value=V-Z;let L=this._sizeLods[W],A=3*L*(W>V-j6?W-V+j6:0),T=4*(this._cubeSize-L);BJ($,A,T,3*L,2*L),X.setRenderTarget($),X.render(G,wZ)}}function SU(J){let $=[],Z=[],W=[],Q=J,H=J-j6+1+lQ.length;for(let Y=0;Y<H;Y++){let X=Math.pow(2,Q);Z.push(X);let K=1/X;if(Y>J-j6)K=lQ[Y-J+j6-1];else if(Y===0)K=0;W.push(K);let U=1/(X-2),G=-U,F=1+U,N=[G,G,F,G,F,F,G,G,F,F,G,F],E=6,R=6,D=3,q=2,O=1,V=new Float32Array(D*R*E),L=new Float32Array(q*R*E),A=new Float32Array(O*R*E);for(let I=0;I<E;I++){let B=I%3*2/3-1,b=I>2?0:-1,z=[B,b,0,B+0.6666666666666666,b,0,B+0.6666666666666666,b+1,0,B,b,0,B+0.6666666666666666,b+1,0,B,b+1,0];V.set(z,D*R*I),L.set(N,q*R*I);let C=[I,I,I,I,I,I];A.set(C,O*R*I)}let T=new V8;if(T.setAttribute("position",new u8(V,D)),T.setAttribute("uv",new u8(L,q)),T.setAttribute("faceIndex",new u8(A,O)),$.push(T),Q>j6)Q--}return{lodPlanes:$,sizeLods:Z,sigmas:W}}function nQ(J,$,Z){let W=new q9(J,$,Z);return W.texture.mapping=r6,W.texture.name="PMREM.cubeUv",W.scissorTest=!0,W}function BJ(J,$,Z,W,Q){J.viewport.set($,Z,W,Q),J.scissor.set($,Z,W,Q)}function _U(J,$,Z){let W=new Float32Array($6),Q=new _(0,1,0);return new $9({name:"SphericalGaussianBlur",defines:{n:$6,CUBEUV_TEXEL_WIDTH:1/$,CUBEUV_TEXEL_HEIGHT:1/Z,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:W},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:Q}},vertexShader:fZ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:A9,depthTest:!1,depthWrite:!1})}function sQ(){return new $9({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fZ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:A9,depthTest:!1,depthWrite:!1})}function iQ(){return new $9({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fZ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:A9,depthTest:!1,depthWrite:!1})}function fZ(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jU(J){let $=new WeakMap,Z=null;function W(X){if(X&&X.isTexture){let K=X.mapping,U=K===t7||K===e7,G=K===I6||K===m9;if(U||G){let F=$.get(X),N=F!==void 0?F.texture.pmremVersion:0;if(X.isRenderTargetTexture&&X.pmremVersion!==N){if(Z===null)Z=new _Z(J);return F=U?Z.fromEquirectangular(X,F):Z.fromCubemap(X,F),F.texture.pmremVersion=X.pmremVersion,$.set(X,F),F.texture}else if(F!==void 0)return F.texture;else{let E=X.image;if(U&&E&&E.height>0||G&&E&&Q(E)){if(Z===null)Z=new _Z(J);return F=U?Z.fromEquirectangular(X):Z.fromCubemap(X),F.texture.pmremVersion=X.pmremVersion,$.set(X,F),X.addEventListener("dispose",H),F.texture}else return null}}}return X}function Q(X){let K=0,U=6;for(let G=0;G<U;G++)if(X[G]!==void 0)K++;return K===U}function H(X){let K=X.target;K.removeEventListener("dispose",H);let U=$.get(K);if(U!==void 0)$.delete(K),U.dispose()}function Y(){if($=new WeakMap,Z!==null)Z.dispose(),Z=null}return{get:W,dispose:Y}}function fU(J){let $={};function Z(W){if($[W]!==void 0)return $[W];let Q;switch(W){case"WEBGL_depth_texture":Q=J.getExtension("WEBGL_depth_texture")||J.getExtension("MOZ_WEBGL_depth_texture")||J.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":Q=J.getExtension("EXT_texture_filter_anisotropic")||J.getExtension("MOZ_EXT_texture_filter_anisotropic")||J.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":Q=J.getExtension("WEBGL_compressed_texture_s3tc")||J.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":Q=J.getExtension("WEBGL_compressed_texture_pvrtc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:Q=J.getExtension(W)}return $[W]=Q,Q}return{has:function(W){return Z(W)!==null},init:function(){Z("EXT_color_buffer_float"),Z("WEBGL_clip_cull_distance"),Z("OES_texture_float_linear"),Z("EXT_color_buffer_half_float"),Z("WEBGL_multisampled_render_to_texture"),Z("WEBGL_render_shared_exponent")},get:function(W){let Q=Z(W);if(Q===null)c9("THREE.WebGLRenderer: "+W+" extension not supported.");return Q}}}function xU(J,$,Z,W){let Q={},H=new WeakMap;function Y(F){let N=F.target;if(N.index!==null)$.remove(N.index);for(let R in N.attributes)$.remove(N.attributes[R]);N.removeEventListener("dispose",Y),delete Q[N.id];let E=H.get(N);if(E)$.remove(E),H.delete(N);if(W.releaseStatesOfGeometry(N),N.isInstancedBufferGeometry===!0)delete N._maxInstanceCount;Z.memory.geometries--}function X(F,N){if(Q[N.id]===!0)return N;return N.addEventListener("dispose",Y),Q[N.id]=!0,Z.memory.geometries++,N}function K(F){let N=F.attributes;for(let E in N)$.update(N[E],J.ARRAY_BUFFER)}function U(F){let N=[],E=F.index,R=F.attributes.position,D=0;if(E!==null){let V=E.array;D=E.version;for(let L=0,A=V.length;L<A;L+=3){let T=V[L+0],I=V[L+1],B=V[L+2];N.push(T,I,I,B,B,T)}}else if(R!==void 0){let V=R.array;D=R.version;for(let L=0,A=V.length/3-1;L<A;L+=3){let T=L+0,I=L+1,B=L+2;N.push(T,I,I,B,B,T)}}else return;let q=new((ZZ(N))?FJ:GJ)(N,1);q.version=D;let O=H.get(F);if(O)$.remove(O);H.set(F,q)}function G(F){let N=H.get(F);if(N){let E=F.index;if(E!==null){if(N.version<E.version)U(F)}}else U(F);return H.get(F)}return{get:X,update:K,getWireframeAttribute:G}}function yU(J,$,Z){let W;function Q(N){W=N}let H,Y;function X(N){H=N.type,Y=N.bytesPerElement}function K(N,E){J.drawElements(W,E,H,N*Y),Z.update(E,W,1)}function U(N,E,R){if(R===0)return;J.drawElementsInstanced(W,E,H,N*Y,R),Z.update(E,W,R)}function G(N,E,R){if(R===0)return;$.get("WEBGL_multi_draw").multiDrawElementsWEBGL(W,E,0,H,N,0,R);let q=0;for(let O=0;O<R;O++)q+=E[O];Z.update(q,W,1)}function F(N,E,R,D){if(R===0)return;let q=$.get("WEBGL_multi_draw");if(q===null)for(let O=0;O<N.length;O++)U(N[O]/Y,E[O],D[O]);else{q.multiDrawElementsInstancedWEBGL(W,E,0,H,N,0,D,0,R);let O=0;for(let V=0;V<R;V++)O+=E[V]*D[V];Z.update(O,W,1)}}this.setMode=Q,this.setIndex=X,this.render=K,this.renderInstances=U,this.renderMultiDraw=G,this.renderMultiDrawInstances=F}function hU(J){let $={geometries:0,textures:0},Z={frame:0,calls:0,triangles:0,points:0,lines:0};function W(H,Y,X){switch(Z.calls++,Y){case J.TRIANGLES:Z.triangles+=X*(H/3);break;case J.LINES:Z.lines+=X*(H/2);break;case J.LINE_STRIP:Z.lines+=X*(H-1);break;case J.LINE_LOOP:Z.lines+=X*H;break;case J.POINTS:Z.points+=X*H;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",Y);break}}function Q(){Z.calls=0,Z.triangles=0,Z.points=0,Z.lines=0}return{memory:$,render:Z,programs:null,autoReset:!0,reset:Q,update:W}}function vU(J,$,Z){let W=new WeakMap,Q=new $8;function H(Y,X,K){let U=Y.morphTargetInfluences,G=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,F=G!==void 0?G.length:0,N=W.get(X);if(N===void 0||N.count!==F){let z=function(){B.dispose(),W.delete(X),X.removeEventListener("dispose",z)};if(N!==void 0)N.texture.dispose();let E=X.morphAttributes.position!==void 0,R=X.morphAttributes.normal!==void 0,D=X.morphAttributes.color!==void 0,q=X.morphAttributes.position||[],O=X.morphAttributes.normal||[],V=X.morphAttributes.color||[],L=0;if(E===!0)L=1;if(R===!0)L=2;if(D===!0)L=3;let A=X.attributes.position.count*L,T=1;if(A>$.maxTextureSize)T=Math.ceil(A/$.maxTextureSize),A=$.maxTextureSize;let I=new Float32Array(A*T*4*F),B=new KJ(I,A,T,F);B.type=S9,B.needsUpdate=!0;let b=L*4;for(let C=0;C<F;C++){let S=q[C],h=O[C],u=V[C],l=A*T*4*C;for(let o=0;o<S.count;o++){let d=o*b;if(E===!0)Q.fromBufferAttribute(S,o),I[l+d+0]=Q.x,I[l+d+1]=Q.y,I[l+d+2]=Q.z,I[l+d+3]=0;if(R===!0)Q.fromBufferAttribute(h,o),I[l+d+4]=Q.x,I[l+d+5]=Q.y,I[l+d+6]=Q.z,I[l+d+7]=0;if(D===!0)Q.fromBufferAttribute(u,o),I[l+d+8]=Q.x,I[l+d+9]=Q.y,I[l+d+10]=Q.z,I[l+d+11]=u.itemSize===4?Q.w:1}}N={count:F,texture:B,size:new A0(A,T)},W.set(X,N),X.addEventListener("dispose",z)}if(Y.isInstancedMesh===!0&&Y.morphTexture!==null)K.getUniforms().setValue(J,"morphTexture",Y.morphTexture,Z);else{let E=0;for(let D=0;D<U.length;D++)E+=U[D];let R=X.morphTargetsRelative?1:1-E;K.getUniforms().setValue(J,"morphTargetBaseInfluence",R),K.getUniforms().setValue(J,"morphTargetInfluences",U)}K.getUniforms().setValue(J,"morphTargetsTexture",N.texture,Z),K.getUniforms().setValue(J,"morphTargetsTextureSize",N.size)}return{update:H}}function bU(J,$,Z,W){let Q=new WeakMap;function H(K){let U=W.render.frame,G=K.geometry,F=$.get(K,G);if(Q.get(F)!==U)$.update(F),Q.set(F,U);if(K.isInstancedMesh){if(K.hasEventListener("dispose",X)===!1)K.addEventListener("dispose",X);if(Q.get(K)!==U){if(Z.update(K.instanceMatrix,J.ARRAY_BUFFER),K.instanceColor!==null)Z.update(K.instanceColor,J.ARRAY_BUFFER);Q.set(K,U)}}if(K.isSkinnedMesh){let N=K.skeleton;if(Q.get(N)!==U)N.update(),Q.set(N,U)}return F}function Y(){Q=new WeakMap}function X(K){let U=K.target;if(U.removeEventListener("dispose",X),Z.remove(U.instanceMatrix),U.instanceColor!==null)Z.remove(U.instanceColor)}return{update:H,dispose:Y}}var qH=new I8,oQ=new DJ(1,1),OH=new KJ,EH=new HZ,RH=new qJ,aQ=[],rQ=[],tQ=new Float32Array(16),eQ=new Float32Array(9),JH=new Float32Array(4);function f6(J,$,Z){let W=J[0];if(W<=0||W>0)return J;let Q=$*Z,H=aQ[Q];if(H===void 0)H=new Float32Array(Q),aQ[Q]=H;if($!==0){W.toArray(H,0);for(let Y=1,X=0;Y!==$;++Y)X+=Z,J[Y].toArray(H,X)}return H}function O8(J,$){if(J.length!==$.length)return!1;for(let Z=0,W=J.length;Z<W;Z++)if(J[Z]!==$[Z])return!1;return!0}function E8(J,$){for(let Z=0,W=$.length;Z<W;Z++)J[Z]=$[Z]}function TJ(J,$){let Z=rQ[$];if(Z===void 0)Z=new Int32Array($),rQ[$]=Z;for(let W=0;W!==$;++W)Z[W]=J.allocateTextureUnit();return Z}function gU(J,$){let Z=this.cache;if(Z[0]===$)return;J.uniform1f(this.addr,$),Z[0]=$}function pU(J,$){let Z=this.cache;if($.x!==void 0){if(Z[0]!==$.x||Z[1]!==$.y)J.uniform2f(this.addr,$.x,$.y),Z[0]=$.x,Z[1]=$.y}else{if(O8(Z,$))return;J.uniform2fv(this.addr,$),E8(Z,$)}}function uU(J,$){let Z=this.cache;if($.x!==void 0){if(Z[0]!==$.x||Z[1]!==$.y||Z[2]!==$.z)J.uniform3f(this.addr,$.x,$.y,$.z),Z[0]=$.x,Z[1]=$.y,Z[2]=$.z}else if($.r!==void 0){if(Z[0]!==$.r||Z[1]!==$.g||Z[2]!==$.b)J.uniform3f(this.addr,$.r,$.g,$.b),Z[0]=$.r,Z[1]=$.g,Z[2]=$.b}else{if(O8(Z,$))return;J.uniform3fv(this.addr,$),E8(Z,$)}}function mU(J,$){let Z=this.cache;if($.x!==void 0){if(Z[0]!==$.x||Z[1]!==$.y||Z[2]!==$.z||Z[3]!==$.w)J.uniform4f(this.addr,$.x,$.y,$.z,$.w),Z[0]=$.x,Z[1]=$.y,Z[2]=$.z,Z[3]=$.w}else{if(O8(Z,$))return;J.uniform4fv(this.addr,$),E8(Z,$)}}function lU(J,$){let Z=this.cache,W=$.elements;if(W===void 0){if(O8(Z,$))return;J.uniformMatrix2fv(this.addr,!1,$),E8(Z,$)}else{if(O8(Z,W))return;JH.set(W),J.uniformMatrix2fv(this.addr,!1,JH),E8(Z,W)}}function dU(J,$){let Z=this.cache,W=$.elements;if(W===void 0){if(O8(Z,$))return;J.uniformMatrix3fv(this.addr,!1,$),E8(Z,$)}else{if(O8(Z,W))return;eQ.set(W),J.uniformMatrix3fv(this.addr,!1,eQ),E8(Z,W)}}function cU(J,$){let Z=this.cache,W=$.elements;if(W===void 0){if(O8(Z,$))return;J.uniformMatrix4fv(this.addr,!1,$),E8(Z,$)}else{if(O8(Z,W))return;tQ.set(W),J.uniformMatrix4fv(this.addr,!1,tQ),E8(Z,W)}}function nU(J,$){let Z=this.cache;if(Z[0]===$)return;J.uniform1i(this.addr,$),Z[0]=$}function sU(J,$){let Z=this.cache;if($.x!==void 0){if(Z[0]!==$.x||Z[1]!==$.y)J.uniform2i(this.addr,$.x,$.y),Z[0]=$.x,Z[1]=$.y}else{if(O8(Z,$))return;J.uniform2iv(this.addr,$),E8(Z,$)}}function iU(J,$){let Z=this.cache;if($.x!==void 0){if(Z[0]!==$.x||Z[1]!==$.y||Z[2]!==$.z)J.uniform3i(this.addr,$.x,$.y,$.z),Z[0]=$.x,Z[1]=$.y,Z[2]=$.z}else{if(O8(Z,$))return;J.uniform3iv(this.addr,$),E8(Z,$)}}function oU(J,$){let Z=this.cache;if($.x!==void 0){if(Z[0]!==$.x||Z[1]!==$.y||Z[2]!==$.z||Z[3]!==$.w)J.uniform4i(this.addr,$.x,$.y,$.z,$.w),Z[0]=$.x,Z[1]=$.y,Z[2]=$.z,Z[3]=$.w}else{if(O8(Z,$))return;J.uniform4iv(this.addr,$),E8(Z,$)}}function aU(J,$){let Z=this.cache;if(Z[0]===$)return;J.uniform1ui(this.addr,$),Z[0]=$}function rU(J,$){let Z=this.cache;if($.x!==void 0){if(Z[0]!==$.x||Z[1]!==$.y)J.uniform2ui(this.addr,$.x,$.y),Z[0]=$.x,Z[1]=$.y}else{if(O8(Z,$))return;J.uniform2uiv(this.addr,$),E8(Z,$)}}function tU(J,$){let Z=this.cache;if($.x!==void 0){if(Z[0]!==$.x||Z[1]!==$.y||Z[2]!==$.z)J.uniform3ui(this.addr,$.x,$.y,$.z),Z[0]=$.x,Z[1]=$.y,Z[2]=$.z}else{if(O8(Z,$))return;J.uniform3uiv(this.addr,$),E8(Z,$)}}function eU(J,$){let Z=this.cache;if($.x!==void 0){if(Z[0]!==$.x||Z[1]!==$.y||Z[2]!==$.z||Z[3]!==$.w)J.uniform4ui(this.addr,$.x,$.y,$.z,$.w),Z[0]=$.x,Z[1]=$.y,Z[2]=$.z,Z[3]=$.w}else{if(O8(Z,$))return;J.uniform4uiv(this.addr,$),E8(Z,$)}}function J1(J,$,Z){let W=this.cache,Q=Z.allocateTextureUnit();if(W[0]!==Q)J.uniform1i(this.addr,Q),W[0]=Q;let H;if(this.type===J.SAMPLER_2D_SHADOW)oQ.compareFunction=t$,H=oQ;else H=qH;Z.setTexture2D($||H,Q)}function $1(J,$,Z){let W=this.cache,Q=Z.allocateTextureUnit();if(W[0]!==Q)J.uniform1i(this.addr,Q),W[0]=Q;Z.setTexture3D($||EH,Q)}function Z1(J,$,Z){let W=this.cache,Q=Z.allocateTextureUnit();if(W[0]!==Q)J.uniform1i(this.addr,Q),W[0]=Q;Z.setTextureCube($||RH,Q)}function W1(J,$,Z){let W=this.cache,Q=Z.allocateTextureUnit();if(W[0]!==Q)J.uniform1i(this.addr,Q),W[0]=Q;Z.setTexture2DArray($||OH,Q)}function Q1(J){switch(J){case 5126:return gU;case 35664:return pU;case 35665:return uU;case 35666:return mU;case 35674:return lU;case 35675:return dU;case 35676:return cU;case 5124:case 35670:return nU;case 35667:case 35671:return sU;case 35668:case 35672:return iU;case 35669:case 35673:return oU;case 5125:return aU;case 36294:return rU;case 36295:return tU;case 36296:return eU;case 35678:case 36198:case 36298:case 36306:case 35682:return J1;case 35679:case 36299:case 36307:return $1;case 35680:case 36300:case 36308:case 36293:return Z1;case 36289:case 36303:case 36311:case 36292:return W1}}function H1(J,$){J.uniform1fv(this.addr,$)}function Y1(J,$){let Z=f6($,this.size,2);J.uniform2fv(this.addr,Z)}function X1(J,$){let Z=f6($,this.size,3);J.uniform3fv(this.addr,Z)}function K1(J,$){let Z=f6($,this.size,4);J.uniform4fv(this.addr,Z)}function U1(J,$){let Z=f6($,this.size,4);J.uniformMatrix2fv(this.addr,!1,Z)}function G1(J,$){let Z=f6($,this.size,9);J.uniformMatrix3fv(this.addr,!1,Z)}function F1(J,$){let Z=f6($,this.size,16);J.uniformMatrix4fv(this.addr,!1,Z)}function N1(J,$){J.uniform1iv(this.addr,$)}function q1(J,$){J.uniform2iv(this.addr,$)}function O1(J,$){J.uniform3iv(this.addr,$)}function E1(J,$){J.uniform4iv(this.addr,$)}function R1(J,$){J.uniform1uiv(this.addr,$)}function D1(J,$){J.uniform2uiv(this.addr,$)}function k1(J,$){J.uniform3uiv(this.addr,$)}function M1(J,$){J.uniform4uiv(this.addr,$)}function L1(J,$,Z){let W=this.cache,Q=$.length,H=TJ(Z,Q);if(!O8(W,H))J.uniform1iv(this.addr,H),E8(W,H);for(let Y=0;Y!==Q;++Y)Z.setTexture2D($[Y]||qH,H[Y])}function z1(J,$,Z){let W=this.cache,Q=$.length,H=TJ(Z,Q);if(!O8(W,H))J.uniform1iv(this.addr,H),E8(W,H);for(let Y=0;Y!==Q;++Y)Z.setTexture3D($[Y]||EH,H[Y])}function C1(J,$,Z){let W=this.cache,Q=$.length,H=TJ(Z,Q);if(!O8(W,H))J.uniform1iv(this.addr,H),E8(W,H);for(let Y=0;Y!==Q;++Y)Z.setTextureCube($[Y]||RH,H[Y])}function I1(J,$,Z){let W=this.cache,Q=$.length,H=TJ(Z,Q);if(!O8(W,H))J.uniform1iv(this.addr,H),E8(W,H);for(let Y=0;Y!==Q;++Y)Z.setTexture2DArray($[Y]||OH,H[Y])}function V1(J){switch(J){case 5126:return H1;case 35664:return Y1;case 35665:return X1;case 35666:return K1;case 35674:return U1;case 35675:return G1;case 35676:return F1;case 5124:case 35670:return N1;case 35667:case 35671:return q1;case 35668:case 35672:return O1;case 35669:case 35673:return E1;case 5125:return R1;case 36294:return D1;case 36295:return k1;case 36296:return M1;case 35678:case 36198:case 36298:case 36306:case 35682:return L1;case 35679:case 36299:case 36307:return z1;case 35680:case 36300:case 36308:case 36293:return C1;case 36289:case 36303:case 36311:case 36292:return I1}}class DH{constructor(J,$,Z){this.id=J,this.addr=Z,this.cache=[],this.type=$.type,this.setValue=Q1($.type)}}class kH{constructor(J,$,Z){this.id=J,this.addr=Z,this.cache=[],this.type=$.type,this.size=$.size,this.setValue=V1($.type)}}class MH{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,$,Z){let W=this.seq;for(let Q=0,H=W.length;Q!==H;++Q){let Y=W[Q];Y.setValue(J,$[Y.id],Z)}}}var SZ=/(\w+)(\])?(\[|\.)?/g;function $H(J,$){J.seq.push($),J.map[$.id]=$}function w1(J,$,Z){let W=J.name,Q=W.length;SZ.lastIndex=0;while(!0){let H=SZ.exec(W),Y=SZ.lastIndex,X=H[1],K=H[2]==="]",U=H[3];if(K)X=X|0;if(U===void 0||U==="["&&Y+2===Q){$H(Z,U===void 0?new DH(X,J,$):new kH(X,J,$));break}else{let F=Z.map[X];if(F===void 0)F=new MH(X),$H(Z,F);Z=F}}}class N7{constructor(J,$){this.seq=[],this.map={};let Z=J.getProgramParameter($,J.ACTIVE_UNIFORMS);for(let W=0;W<Z;++W){let Q=J.getActiveUniform($,W),H=J.getUniformLocation($,Q.name);w1(Q,H,this)}}setValue(J,$,Z,W){let Q=this.map[$];if(Q!==void 0)Q.setValue(J,Z,W)}setOptional(J,$,Z){let W=$[Z];if(W!==void 0)this.setValue(J,Z,W)}static upload(J,$,Z,W){for(let Q=0,H=$.length;Q!==H;++Q){let Y=$[Q],X=Z[Y.id];if(X.needsUpdate!==!1)Y.setValue(J,X.value,W)}}static seqWithValue(J,$){let Z=[];for(let W=0,Q=J.length;W!==Q;++W){let H=J[W];if(H.id in $)Z.push(H)}return Z}}function ZH(J,$,Z){let W=J.createShader($);return J.shaderSource(W,Z),J.compileShader(W),W}var B1=37297,P1=0;function A1(J,$){let Z=J.split(`
`),W=[],Q=Math.max($-6,0),H=Math.min($+6,Z.length);for(let Y=Q;Y<H;Y++){let X=Y+1;W.push(`${X===$?">":" "} ${X}: ${Z[Y]}`)}return W.join(`
`)}var WH=new h0;function T1(J){i0._getMatrix(WH,i0.workingColorSpace,J);let $=`mat3( ${WH.elements.map((Z)=>Z.toFixed(4))} )`;switch(i0.getTransfer(J)){case r$:return[$,"LinearTransferOETF"];case Q8:return[$,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",J),[$,"LinearTransferOETF"]}}function QH(J,$,Z){let W=J.getShaderParameter($,J.COMPILE_STATUS),Q=J.getShaderInfoLog($).trim();if(W&&Q==="")return"";let H=/ERROR: 0:(\d+)/.exec(Q);if(H){let Y=parseInt(H[1]);return Z.toUpperCase()+`

`+Q+`

`+A1(J.getShaderSource($),Y)}else return Q}function S1(J,$){let Z=T1($);return[`vec4 ${J}( vec4 value ) {`,`	return ${Z[1]}( vec4( value.rgb * ${Z[0]}, value.a ) );`,"}"].join(`
`)}function _1(J,$){let Z;switch($){case ZQ:Z="Linear";break;case WQ:Z="Reinhard";break;case QQ:Z="Cineon";break;case r7:Z="ACESFilmic";break;case YQ:Z="AgX";break;case XQ:Z="Neutral";break;case HQ:Z="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",$),Z="Linear"}return"vec3 "+J+"( vec3 color ) { return "+Z+"ToneMapping( color ); }"}var PJ=new _;function j1(){i0.getLuminanceCoefficients(PJ);let J=PJ.x.toFixed(4),$=PJ.y.toFixed(4),Z=PJ.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${$}, ${Z} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function f1(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(F7).join(`
`)}function x1(J){let $=[];for(let Z in J){let W=J[Z];if(W===!1)continue;$.push("#define "+Z+" "+W)}return $.join(`
`)}function y1(J,$){let Z={},W=J.getProgramParameter($,J.ACTIVE_ATTRIBUTES);for(let Q=0;Q<W;Q++){let H=J.getActiveAttrib($,Q),Y=H.name,X=1;if(H.type===J.FLOAT_MAT2)X=2;if(H.type===J.FLOAT_MAT3)X=3;if(H.type===J.FLOAT_MAT4)X=4;Z[Y]={type:H.type,location:J.getAttribLocation($,Y),locationSize:X}}return Z}function F7(J){return J!==""}function HH(J,$){let Z=$.numSpotLightShadows+$.numSpotLightMaps-$.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,$.numDirLights).replace(/NUM_SPOT_LIGHTS/g,$.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,$.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,Z).replace(/NUM_RECT_AREA_LIGHTS/g,$.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,$.numPointLights).replace(/NUM_HEMI_LIGHTS/g,$.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,$.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,$.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,$.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,$.numPointLightShadows)}function YH(J,$){return J.replace(/NUM_CLIPPING_PLANES/g,$.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,$.numClippingPlanes-$.numClipIntersection)}var h1=/^[ \t]*#include +<([\w\d./]+)>/gm;function jZ(J){return J.replace(h1,b1)}var v1=new Map;function b1(J,$){let Z=u0[$];if(Z===void 0){let W=v1.get($);if(W!==void 0)Z=u0[W],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',$,W);else throw Error("Can not resolve #include <"+$+">")}return jZ(Z)}var g1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function XH(J){return J.replace(g1,p1)}function p1(J,$,Z,W){let Q="";for(let H=parseInt($);H<parseInt(Z);H++)Q+=W.replace(/\[\s*i\s*\]/g,"[ "+H+" ]").replace(/UNROLLED_LOOP_INDEX/g,H);return Q}function KH(J){let $=`precision ${J.precision} float;
	precision ${J.precision} int;
	precision ${J.precision} sampler2D;
	precision ${J.precision} samplerCube;
	precision ${J.precision} sampler3D;
	precision ${J.precision} sampler2DArray;
	precision ${J.precision} sampler2DShadow;
	precision ${J.precision} samplerCubeShadow;
	precision ${J.precision} sampler2DArrayShadow;
	precision ${J.precision} isampler2D;
	precision ${J.precision} isampler3D;
	precision ${J.precision} isamplerCube;
	precision ${J.precision} isampler2DArray;
	precision ${J.precision} usampler2D;
	precision ${J.precision} usampler3D;
	precision ${J.precision} usamplerCube;
	precision ${J.precision} usampler2DArray;
	`;if(J.precision==="highp")$+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")$+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")$+=`
#define LOW_PRECISION`;return $}function u1(J){let $="SHADOWMAP_TYPE_BASIC";if(J.shadowMapType===E$)$="SHADOWMAP_TYPE_PCF";else if(J.shadowMapType===jW)$="SHADOWMAP_TYPE_PCF_SOFT";else if(J.shadowMapType===t8)$="SHADOWMAP_TYPE_VSM";return $}function m1(J){let $="ENVMAP_TYPE_CUBE";if(J.envMap)switch(J.envMapMode){case I6:case m9:$="ENVMAP_TYPE_CUBE";break;case r6:$="ENVMAP_TYPE_CUBE_UV";break}return $}function l1(J){let $="ENVMAP_MODE_REFLECTION";if(J.envMap)switch(J.envMapMode){case m9:$="ENVMAP_MODE_REFRACTION";break}return $}function d1(J){let $="ENVMAP_BLENDING_NONE";if(J.envMap)switch(J.combine){case eW:$="ENVMAP_BLENDING_MULTIPLY";break;case JQ:$="ENVMAP_BLENDING_MIX";break;case $Q:$="ENVMAP_BLENDING_ADD";break}return $}function c1(J){let $=J.envMapCubeUVHeight;if($===null)return null;let Z=Math.log2($)-2,W=1/$;return{texelWidth:1/(3*Math.max(Math.pow(2,Z),112)),texelHeight:W,maxMip:Z}}function n1(J,$,Z,W){let Q=J.getContext(),H=Z.defines,Y=Z.vertexShader,X=Z.fragmentShader,K=u1(Z),U=m1(Z),G=l1(Z),F=d1(Z),N=c1(Z),E=f1(Z),R=x1(H),D=Q.createProgram(),q,O,V=Z.glslVersion?"#version "+Z.glslVersion+`
`:"";if(Z.isRawShaderMaterial){if(q=["#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,R].filter(F7).join(`
`),q.length>0)q+=`
`;if(O=["#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,R].filter(F7).join(`
`),O.length>0)O+=`
`}else q=[KH(Z),"#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,R,Z.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",Z.batching?"#define USE_BATCHING":"",Z.batchingColor?"#define USE_BATCHING_COLOR":"",Z.instancing?"#define USE_INSTANCING":"",Z.instancingColor?"#define USE_INSTANCING_COLOR":"",Z.instancingMorph?"#define USE_INSTANCING_MORPH":"",Z.useFog&&Z.fog?"#define USE_FOG":"",Z.useFog&&Z.fogExp2?"#define FOG_EXP2":"",Z.map?"#define USE_MAP":"",Z.envMap?"#define USE_ENVMAP":"",Z.envMap?"#define "+G:"",Z.lightMap?"#define USE_LIGHTMAP":"",Z.aoMap?"#define USE_AOMAP":"",Z.bumpMap?"#define USE_BUMPMAP":"",Z.normalMap?"#define USE_NORMALMAP":"",Z.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Z.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Z.displacementMap?"#define USE_DISPLACEMENTMAP":"",Z.emissiveMap?"#define USE_EMISSIVEMAP":"",Z.anisotropy?"#define USE_ANISOTROPY":"",Z.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Z.clearcoatMap?"#define USE_CLEARCOATMAP":"",Z.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Z.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Z.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Z.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Z.specularMap?"#define USE_SPECULARMAP":"",Z.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Z.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Z.roughnessMap?"#define USE_ROUGHNESSMAP":"",Z.metalnessMap?"#define USE_METALNESSMAP":"",Z.alphaMap?"#define USE_ALPHAMAP":"",Z.alphaHash?"#define USE_ALPHAHASH":"",Z.transmission?"#define USE_TRANSMISSION":"",Z.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Z.thicknessMap?"#define USE_THICKNESSMAP":"",Z.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Z.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Z.mapUv?"#define MAP_UV "+Z.mapUv:"",Z.alphaMapUv?"#define ALPHAMAP_UV "+Z.alphaMapUv:"",Z.lightMapUv?"#define LIGHTMAP_UV "+Z.lightMapUv:"",Z.aoMapUv?"#define AOMAP_UV "+Z.aoMapUv:"",Z.emissiveMapUv?"#define EMISSIVEMAP_UV "+Z.emissiveMapUv:"",Z.bumpMapUv?"#define BUMPMAP_UV "+Z.bumpMapUv:"",Z.normalMapUv?"#define NORMALMAP_UV "+Z.normalMapUv:"",Z.displacementMapUv?"#define DISPLACEMENTMAP_UV "+Z.displacementMapUv:"",Z.metalnessMapUv?"#define METALNESSMAP_UV "+Z.metalnessMapUv:"",Z.roughnessMapUv?"#define ROUGHNESSMAP_UV "+Z.roughnessMapUv:"",Z.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+Z.anisotropyMapUv:"",Z.clearcoatMapUv?"#define CLEARCOATMAP_UV "+Z.clearcoatMapUv:"",Z.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+Z.clearcoatNormalMapUv:"",Z.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+Z.clearcoatRoughnessMapUv:"",Z.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+Z.iridescenceMapUv:"",Z.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+Z.iridescenceThicknessMapUv:"",Z.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+Z.sheenColorMapUv:"",Z.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+Z.sheenRoughnessMapUv:"",Z.specularMapUv?"#define SPECULARMAP_UV "+Z.specularMapUv:"",Z.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+Z.specularColorMapUv:"",Z.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+Z.specularIntensityMapUv:"",Z.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+Z.transmissionMapUv:"",Z.thicknessMapUv?"#define THICKNESSMAP_UV "+Z.thicknessMapUv:"",Z.vertexTangents&&Z.flatShading===!1?"#define USE_TANGENT":"",Z.vertexColors?"#define USE_COLOR":"",Z.vertexAlphas?"#define USE_COLOR_ALPHA":"",Z.vertexUv1s?"#define USE_UV1":"",Z.vertexUv2s?"#define USE_UV2":"",Z.vertexUv3s?"#define USE_UV3":"",Z.pointsUvs?"#define USE_POINTS_UV":"",Z.flatShading?"#define FLAT_SHADED":"",Z.skinning?"#define USE_SKINNING":"",Z.morphTargets?"#define USE_MORPHTARGETS":"",Z.morphNormals&&Z.flatShading===!1?"#define USE_MORPHNORMALS":"",Z.morphColors?"#define USE_MORPHCOLORS":"",Z.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+Z.morphTextureStride:"",Z.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+Z.morphTargetsCount:"",Z.doubleSided?"#define DOUBLE_SIDED":"",Z.flipSided?"#define FLIP_SIDED":"",Z.shadowMapEnabled?"#define USE_SHADOWMAP":"",Z.shadowMapEnabled?"#define "+K:"",Z.sizeAttenuation?"#define USE_SIZEATTENUATION":"",Z.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Z.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",Z.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(F7).join(`
`),O=[KH(Z),"#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,R,Z.useFog&&Z.fog?"#define USE_FOG":"",Z.useFog&&Z.fogExp2?"#define FOG_EXP2":"",Z.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",Z.map?"#define USE_MAP":"",Z.matcap?"#define USE_MATCAP":"",Z.envMap?"#define USE_ENVMAP":"",Z.envMap?"#define "+U:"",Z.envMap?"#define "+G:"",Z.envMap?"#define "+F:"",N?"#define CUBEUV_TEXEL_WIDTH "+N.texelWidth:"",N?"#define CUBEUV_TEXEL_HEIGHT "+N.texelHeight:"",N?"#define CUBEUV_MAX_MIP "+N.maxMip+".0":"",Z.lightMap?"#define USE_LIGHTMAP":"",Z.aoMap?"#define USE_AOMAP":"",Z.bumpMap?"#define USE_BUMPMAP":"",Z.normalMap?"#define USE_NORMALMAP":"",Z.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Z.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Z.emissiveMap?"#define USE_EMISSIVEMAP":"",Z.anisotropy?"#define USE_ANISOTROPY":"",Z.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Z.clearcoat?"#define USE_CLEARCOAT":"",Z.clearcoatMap?"#define USE_CLEARCOATMAP":"",Z.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Z.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Z.dispersion?"#define USE_DISPERSION":"",Z.iridescence?"#define USE_IRIDESCENCE":"",Z.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Z.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Z.specularMap?"#define USE_SPECULARMAP":"",Z.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Z.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Z.roughnessMap?"#define USE_ROUGHNESSMAP":"",Z.metalnessMap?"#define USE_METALNESSMAP":"",Z.alphaMap?"#define USE_ALPHAMAP":"",Z.alphaTest?"#define USE_ALPHATEST":"",Z.alphaHash?"#define USE_ALPHAHASH":"",Z.sheen?"#define USE_SHEEN":"",Z.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Z.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Z.transmission?"#define USE_TRANSMISSION":"",Z.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Z.thicknessMap?"#define USE_THICKNESSMAP":"",Z.vertexTangents&&Z.flatShading===!1?"#define USE_TANGENT":"",Z.vertexColors||Z.instancingColor||Z.batchingColor?"#define USE_COLOR":"",Z.vertexAlphas?"#define USE_COLOR_ALPHA":"",Z.vertexUv1s?"#define USE_UV1":"",Z.vertexUv2s?"#define USE_UV2":"",Z.vertexUv3s?"#define USE_UV3":"",Z.pointsUvs?"#define USE_POINTS_UV":"",Z.gradientMap?"#define USE_GRADIENTMAP":"",Z.flatShading?"#define FLAT_SHADED":"",Z.doubleSided?"#define DOUBLE_SIDED":"",Z.flipSided?"#define FLIP_SIDED":"",Z.shadowMapEnabled?"#define USE_SHADOWMAP":"",Z.shadowMapEnabled?"#define "+K:"",Z.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",Z.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Z.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",Z.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",Z.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",Z.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",Z.toneMapping!==F9?"#define TONE_MAPPING":"",Z.toneMapping!==F9?u0.tonemapping_pars_fragment:"",Z.toneMapping!==F9?_1("toneMapping",Z.toneMapping):"",Z.dithering?"#define DITHERING":"",Z.opaque?"#define OPAQUE":"",u0.colorspace_pars_fragment,S1("linearToOutputTexel",Z.outputColorSpace),j1(),Z.useDepthPacking?"#define DEPTH_PACKING "+Z.depthPacking:"",`
`].filter(F7).join(`
`);if(Y=jZ(Y),Y=HH(Y,Z),Y=YH(Y,Z),X=jZ(X),X=HH(X,Z),X=YH(X,Z),Y=XH(Y),X=XH(X),Z.isRawShaderMaterial!==!0)V=`#version 300 es
`,q=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+q,O=["#define varying in",Z.glslVersion===e$?"":"layout(location = 0) out highp vec4 pc_fragColor;",Z.glslVersion===e$?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+O;let L=V+q+Y,A=V+O+X,T=ZH(Q,Q.VERTEX_SHADER,L),I=ZH(Q,Q.FRAGMENT_SHADER,A);if(Q.attachShader(D,T),Q.attachShader(D,I),Z.index0AttributeName!==void 0)Q.bindAttribLocation(D,0,Z.index0AttributeName);else if(Z.morphTargets===!0)Q.bindAttribLocation(D,0,"position");Q.linkProgram(D);function B(S){if(J.debug.checkShaderErrors){let h=Q.getProgramInfoLog(D).trim(),u=Q.getShaderInfoLog(T).trim(),l=Q.getShaderInfoLog(I).trim(),o=!0,d=!0;if(Q.getProgramParameter(D,Q.LINK_STATUS)===!1)if(o=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(Q,D,T,I);else{let t=QH(Q,T,"vertex"),m=QH(Q,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+Q.getError()+" - VALIDATE_STATUS "+Q.getProgramParameter(D,Q.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+h+`
`+t+`
`+m)}else if(h!=="")console.warn("THREE.WebGLProgram: Program Info Log:",h);else if(u===""||l==="")d=!1;if(d)S.diagnostics={runnable:o,programLog:h,vertexShader:{log:u,prefix:q},fragmentShader:{log:l,prefix:O}}}Q.deleteShader(T),Q.deleteShader(I),b=new N7(Q,D),z=y1(Q,D)}let b;this.getUniforms=function(){if(b===void 0)B(this);return b};let z;this.getAttributes=function(){if(z===void 0)B(this);return z};let C=Z.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(C===!1)C=Q.getProgramParameter(D,B1);return C},this.destroy=function(){W.releaseStatesOfProgram(this),Q.deleteProgram(D),this.program=void 0},this.type=Z.shaderType,this.name=Z.shaderName,this.id=P1++,this.cacheKey=$,this.usedTimes=1,this.program=D,this.vertexShader=T,this.fragmentShader=I,this}var s1=0;class LH{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J){let{vertexShader:$,fragmentShader:Z}=J,W=this._getShaderStage($),Q=this._getShaderStage(Z),H=this._getShaderCacheForMaterial(J);if(H.has(W)===!1)H.add(W),W.usedTimes++;if(H.has(Q)===!1)H.add(Q),Q.usedTimes++;return this}remove(J){let $=this.materialCache.get(J);for(let Z of $)if(Z.usedTimes--,Z.usedTimes===0)this.shaderCache.delete(Z.code);return this.materialCache.delete(J),this}getVertexShaderID(J){return this._getShaderStage(J.vertexShader).id}getFragmentShaderID(J){return this._getShaderStage(J.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let $=this.materialCache,Z=$.get(J);if(Z===void 0)Z=new Set,$.set(J,Z);return Z}_getShaderStage(J){let $=this.shaderCache,Z=$.get(J);if(Z===void 0)Z=new zH(J),$.set(J,Z);return Z}}class zH{constructor(J){this.id=s1++,this.code=J,this.usedTimes=0}}function i1(J,$,Z,W,Q,H,Y){let X=new UJ,K=new LH,U=new Set,G=[],F=Q.logarithmicDepthBuffer,N=Q.vertexTextures,E=Q.precision,R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function D(z){if(U.add(z),z===0)return"uv";return`uv${z}`}function q(z,C,S,h,u){let l=h.fog,o=u.geometry,d=z.isMeshStandardMaterial?h.environment:null,t=(z.isMeshStandardMaterial?Z:$).get(z.envMap||d),m=!!t&&t.mapping===r6?t.image.height:null,X0=R[z.type];if(z.precision!==null){if(E=Q.getMaxPrecision(z.precision),E!==z.precision)console.warn("THREE.WebGLProgram.getParameters:",z.precision,"not supported, using",E,"instead.")}let J0=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,w0=J0!==void 0?J0.length:0,g0=0;if(o.morphAttributes.position!==void 0)g0=1;if(o.morphAttributes.normal!==void 0)g0=2;if(o.morphAttributes.color!==void 0)g0=3;let n,Z0,D0,M0;if(X0){let r0=W9[X0];n=r0.vertexShader,Z0=r0.fragmentShader}else n=z.vertexShader,Z0=z.fragmentShader,K.update(z),D0=K.getVertexShaderID(z),M0=K.getFragmentShaderID(z);let Q0=J.getRenderTarget(),z0=J.state.buffers.depth.getReversed(),p=u.isInstancedMesh===!0,T0=u.isBatchedMesh===!0,n0=!!z.map,I0=!!z.matcap,P=!!t,m0=!!z.aoMap,P0=!!z.lightMap,S0=!!z.bumpMap,Y0=!!z.normalMap,o0=!!z.displacementMap,k0=!!z.emissiveMap,B0=!!z.metalnessMap,w=!!z.roughnessMap,k=z.anisotropy>0,y=z.clearcoat>0,a=z.dispersion>0,r=z.iridescence>0,c=z.sheen>0,V0=z.transmission>0,K0=k&&!!z.anisotropyMap,O0=y&&!!z.clearcoatMap,v0=y&&!!z.clearcoatNormalMap,W0=y&&!!z.clearcoatRoughnessMap,N0=r&&!!z.iridescenceMap,c0=r&&!!z.iridescenceThicknessMap,j0=c&&!!z.sheenColorMap,E0=c&&!!z.sheenRoughnessMap,b0=!!z.specularMap,l0=!!z.specularColorMap,X8=!!z.specularIntensityMap,j=V0&&!!z.transmissionMap,$0=V0&&!!z.thicknessMap,s=!!z.gradientMap,i=!!z.alphaMap,F0=z.alphaTest>0,G0=!!z.alphaHash,p0=!!z.extensions,K8=F9;if(z.toneMapped){if(Q0===null||Q0.isXRRenderTarget===!0)K8=J.toneMapping}let k8={shaderID:X0,shaderType:z.type,shaderName:z.name,vertexShader:n,fragmentShader:Z0,defines:z.defines,customVertexShaderID:D0,customFragmentShaderID:M0,isRawShaderMaterial:z.isRawShaderMaterial===!0,glslVersion:z.glslVersion,precision:E,batching:T0,batchingColor:T0&&u._colorsTexture!==null,instancing:p,instancingColor:p&&u.instanceColor!==null,instancingMorph:p&&u.morphTexture!==null,supportsVertexTextures:N,outputColorSpace:Q0===null?J.outputColorSpace:Q0.isXRRenderTarget===!0?Q0.texture.colorSpace:Z7,alphaToCoverage:!!z.alphaToCoverage,map:n0,matcap:I0,envMap:P,envMapMode:P&&t.mapping,envMapCubeUVHeight:m,aoMap:m0,lightMap:P0,bumpMap:S0,normalMap:Y0,displacementMap:N&&o0,emissiveMap:k0,normalMapObjectSpace:Y0&&z.normalMapType===VQ,normalMapTangentSpace:Y0&&z.normalMapType===IQ,metalnessMap:B0,roughnessMap:w,anisotropy:k,anisotropyMap:K0,clearcoat:y,clearcoatMap:O0,clearcoatNormalMap:v0,clearcoatRoughnessMap:W0,dispersion:a,iridescence:r,iridescenceMap:N0,iridescenceThicknessMap:c0,sheen:c,sheenColorMap:j0,sheenRoughnessMap:E0,specularMap:b0,specularColorMap:l0,specularIntensityMap:X8,transmission:V0,transmissionMap:j,thicknessMap:$0,gradientMap:s,opaque:z.transparent===!1&&z.blending===o6&&z.alphaToCoverage===!1,alphaMap:i,alphaTest:F0,alphaHash:G0,combine:z.combine,mapUv:n0&&D(z.map.channel),aoMapUv:m0&&D(z.aoMap.channel),lightMapUv:P0&&D(z.lightMap.channel),bumpMapUv:S0&&D(z.bumpMap.channel),normalMapUv:Y0&&D(z.normalMap.channel),displacementMapUv:o0&&D(z.displacementMap.channel),emissiveMapUv:k0&&D(z.emissiveMap.channel),metalnessMapUv:B0&&D(z.metalnessMap.channel),roughnessMapUv:w&&D(z.roughnessMap.channel),anisotropyMapUv:K0&&D(z.anisotropyMap.channel),clearcoatMapUv:O0&&D(z.clearcoatMap.channel),clearcoatNormalMapUv:v0&&D(z.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W0&&D(z.clearcoatRoughnessMap.channel),iridescenceMapUv:N0&&D(z.iridescenceMap.channel),iridescenceThicknessMapUv:c0&&D(z.iridescenceThicknessMap.channel),sheenColorMapUv:j0&&D(z.sheenColorMap.channel),sheenRoughnessMapUv:E0&&D(z.sheenRoughnessMap.channel),specularMapUv:b0&&D(z.specularMap.channel),specularColorMapUv:l0&&D(z.specularColorMap.channel),specularIntensityMapUv:X8&&D(z.specularIntensityMap.channel),transmissionMapUv:j&&D(z.transmissionMap.channel),thicknessMapUv:$0&&D(z.thicknessMap.channel),alphaMapUv:i&&D(z.alphaMap.channel),vertexTangents:!!o.attributes.tangent&&(Y0||k),vertexColors:z.vertexColors,vertexAlphas:z.vertexColors===!0&&!!o.attributes.color&&o.attributes.color.itemSize===4,pointsUvs:u.isPoints===!0&&!!o.attributes.uv&&(n0||i),fog:!!l,useFog:z.fog===!0,fogExp2:!!l&&l.isFogExp2,flatShading:z.flatShading===!0,sizeAttenuation:z.sizeAttenuation===!0,logarithmicDepthBuffer:F,reverseDepthBuffer:z0,skinning:u.isSkinnedMesh===!0,morphTargets:o.morphAttributes.position!==void 0,morphNormals:o.morphAttributes.normal!==void 0,morphColors:o.morphAttributes.color!==void 0,morphTargetsCount:w0,morphTextureStride:g0,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:Y.numPlanes,numClipIntersection:Y.numIntersection,dithering:z.dithering,shadowMapEnabled:J.shadowMap.enabled&&S.length>0,shadowMapType:J.shadowMap.type,toneMapping:K8,decodeVideoTexture:n0&&z.map.isVideoTexture===!0&&i0.getTransfer(z.map.colorSpace)===Q8,decodeVideoTextureEmissive:k0&&z.emissiveMap.isVideoTexture===!0&&i0.getTransfer(z.emissiveMap.colorSpace)===Q8,premultipliedAlpha:z.premultipliedAlpha,doubleSided:z.side===l8,flipSided:z.side===T8,useDepthPacking:z.depthPacking>=0,depthPacking:z.depthPacking||0,index0AttributeName:z.index0AttributeName,extensionClipCullDistance:p0&&z.extensions.clipCullDistance===!0&&W.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(p0&&z.extensions.multiDraw===!0||T0)&&W.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:W.has("KHR_parallel_shader_compile"),customProgramCacheKey:z.customProgramCacheKey()};return k8.vertexUv1s=U.has(1),k8.vertexUv2s=U.has(2),k8.vertexUv3s=U.has(3),U.clear(),k8}function O(z){let C=[];if(z.shaderID)C.push(z.shaderID);else C.push(z.customVertexShaderID),C.push(z.customFragmentShaderID);if(z.defines!==void 0)for(let S in z.defines)C.push(S),C.push(z.defines[S]);if(z.isRawShaderMaterial===!1)V(C,z),L(C,z),C.push(J.outputColorSpace);return C.push(z.customProgramCacheKey),C.join()}function V(z,C){z.push(C.precision),z.push(C.outputColorSpace),z.push(C.envMapMode),z.push(C.envMapCubeUVHeight),z.push(C.mapUv),z.push(C.alphaMapUv),z.push(C.lightMapUv),z.push(C.aoMapUv),z.push(C.bumpMapUv),z.push(C.normalMapUv),z.push(C.displacementMapUv),z.push(C.emissiveMapUv),z.push(C.metalnessMapUv),z.push(C.roughnessMapUv),z.push(C.anisotropyMapUv),z.push(C.clearcoatMapUv),z.push(C.clearcoatNormalMapUv),z.push(C.clearcoatRoughnessMapUv),z.push(C.iridescenceMapUv),z.push(C.iridescenceThicknessMapUv),z.push(C.sheenColorMapUv),z.push(C.sheenRoughnessMapUv),z.push(C.specularMapUv),z.push(C.specularColorMapUv),z.push(C.specularIntensityMapUv),z.push(C.transmissionMapUv),z.push(C.thicknessMapUv),z.push(C.combine),z.push(C.fogExp2),z.push(C.sizeAttenuation),z.push(C.morphTargetsCount),z.push(C.morphAttributeCount),z.push(C.numDirLights),z.push(C.numPointLights),z.push(C.numSpotLights),z.push(C.numSpotLightMaps),z.push(C.numHemiLights),z.push(C.numRectAreaLights),z.push(C.numDirLightShadows),z.push(C.numPointLightShadows),z.push(C.numSpotLightShadows),z.push(C.numSpotLightShadowsWithMaps),z.push(C.numLightProbes),z.push(C.shadowMapType),z.push(C.toneMapping),z.push(C.numClippingPlanes),z.push(C.numClipIntersection),z.push(C.depthPacking)}function L(z,C){if(X.disableAll(),C.supportsVertexTextures)X.enable(0);if(C.instancing)X.enable(1);if(C.instancingColor)X.enable(2);if(C.instancingMorph)X.enable(3);if(C.matcap)X.enable(4);if(C.envMap)X.enable(5);if(C.normalMapObjectSpace)X.enable(6);if(C.normalMapTangentSpace)X.enable(7);if(C.clearcoat)X.enable(8);if(C.iridescence)X.enable(9);if(C.alphaTest)X.enable(10);if(C.vertexColors)X.enable(11);if(C.vertexAlphas)X.enable(12);if(C.vertexUv1s)X.enable(13);if(C.vertexUv2s)X.enable(14);if(C.vertexUv3s)X.enable(15);if(C.vertexTangents)X.enable(16);if(C.anisotropy)X.enable(17);if(C.alphaHash)X.enable(18);if(C.batching)X.enable(19);if(C.dispersion)X.enable(20);if(C.batchingColor)X.enable(21);if(z.push(X.mask),X.disableAll(),C.fog)X.enable(0);if(C.useFog)X.enable(1);if(C.flatShading)X.enable(2);if(C.logarithmicDepthBuffer)X.enable(3);if(C.reverseDepthBuffer)X.enable(4);if(C.skinning)X.enable(5);if(C.morphTargets)X.enable(6);if(C.morphNormals)X.enable(7);if(C.morphColors)X.enable(8);if(C.premultipliedAlpha)X.enable(9);if(C.shadowMapEnabled)X.enable(10);if(C.doubleSided)X.enable(11);if(C.flipSided)X.enable(12);if(C.useDepthPacking)X.enable(13);if(C.dithering)X.enable(14);if(C.transmission)X.enable(15);if(C.sheen)X.enable(16);if(C.opaque)X.enable(17);if(C.pointsUvs)X.enable(18);if(C.decodeVideoTexture)X.enable(19);if(C.decodeVideoTextureEmissive)X.enable(20);if(C.alphaToCoverage)X.enable(21);z.push(X.mask)}function A(z){let C=R[z.type],S;if(C){let h=W9[C];S=bQ.clone(h.uniforms)}else S=z.uniforms;return S}function T(z,C){let S;for(let h=0,u=G.length;h<u;h++){let l=G[h];if(l.cacheKey===C){S=l,++S.usedTimes;break}}if(S===void 0)S=new n1(J,C,z,H),G.push(S);return S}function I(z){if(--z.usedTimes===0){let C=G.indexOf(z);G[C]=G[G.length-1],G.pop(),z.destroy()}}function B(z){K.remove(z)}function b(){K.dispose()}return{getParameters:q,getProgramCacheKey:O,getUniforms:A,acquireProgram:T,releaseProgram:I,releaseShaderCache:B,programs:G,dispose:b}}function o1(){let J=new WeakMap;function $(Y){return J.has(Y)}function Z(Y){let X=J.get(Y);if(X===void 0)X={},J.set(Y,X);return X}function W(Y){J.delete(Y)}function Q(Y,X,K){J.get(Y)[X]=K}function H(){J=new WeakMap}return{has:$,get:Z,remove:W,update:Q,dispose:H}}function a1(J,$){if(J.groupOrder!==$.groupOrder)return J.groupOrder-$.groupOrder;else if(J.renderOrder!==$.renderOrder)return J.renderOrder-$.renderOrder;else if(J.material.id!==$.material.id)return J.material.id-$.material.id;else if(J.z!==$.z)return J.z-$.z;else return J.id-$.id}function UH(J,$){if(J.groupOrder!==$.groupOrder)return J.groupOrder-$.groupOrder;else if(J.renderOrder!==$.renderOrder)return J.renderOrder-$.renderOrder;else if(J.z!==$.z)return $.z-J.z;else return J.id-$.id}function GH(){let J=[],$=0,Z=[],W=[],Q=[];function H(){$=0,Z.length=0,W.length=0,Q.length=0}function Y(F,N,E,R,D,q){let O=J[$];if(O===void 0)O={id:F.id,object:F,geometry:N,material:E,groupOrder:R,renderOrder:F.renderOrder,z:D,group:q},J[$]=O;else O.id=F.id,O.object=F,O.geometry=N,O.material=E,O.groupOrder=R,O.renderOrder=F.renderOrder,O.z=D,O.group=q;return $++,O}function X(F,N,E,R,D,q){let O=Y(F,N,E,R,D,q);if(E.transmission>0)W.push(O);else if(E.transparent===!0)Q.push(O);else Z.push(O)}function K(F,N,E,R,D,q){let O=Y(F,N,E,R,D,q);if(E.transmission>0)W.unshift(O);else if(E.transparent===!0)Q.unshift(O);else Z.unshift(O)}function U(F,N){if(Z.length>1)Z.sort(F||a1);if(W.length>1)W.sort(N||UH);if(Q.length>1)Q.sort(N||UH)}function G(){for(let F=$,N=J.length;F<N;F++){let E=J[F];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:Z,transmissive:W,transparent:Q,init:H,push:X,unshift:K,finish:G,sort:U}}function r1(){let J=new WeakMap;function $(W,Q){let H=J.get(W),Y;if(H===void 0)Y=new GH,J.set(W,[Y]);else if(Q>=H.length)Y=new GH,H.push(Y);else Y=H[Q];return Y}function Z(){J=new WeakMap}return{get:$,dispose:Z}}function t1(){let J={};return{get:function($){if(J[$.id]!==void 0)return J[$.id];let Z;switch($.type){case"DirectionalLight":Z={direction:new _,color:new _0};break;case"SpotLight":Z={position:new _,direction:new _,color:new _0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":Z={position:new _,color:new _0,distance:0,decay:0};break;case"HemisphereLight":Z={direction:new _,skyColor:new _0,groundColor:new _0};break;case"RectAreaLight":Z={color:new _0,position:new _,halfWidth:new _,halfHeight:new _};break}return J[$.id]=Z,Z}}}function e1(){let J={};return{get:function($){if(J[$.id]!==void 0)return J[$.id];let Z;switch($.type){case"DirectionalLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new A0};break;case"SpotLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new A0};break;case"PointLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new A0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[$.id]=Z,Z}}}var JG=0;function $G(J,$){return($.castShadow?2:0)-(J.castShadow?2:0)+($.map?1:0)-(J.map?1:0)}function ZG(J){let $=new t1,Z=e1(),W={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)W.probe.push(new _);let Q=new _,H=new W8,Y=new W8;function X(U){let G=0,F=0,N=0;for(let z=0;z<9;z++)W.probe[z].set(0,0,0);let E=0,R=0,D=0,q=0,O=0,V=0,L=0,A=0,T=0,I=0,B=0;U.sort($G);for(let z=0,C=U.length;z<C;z++){let S=U[z],h=S.color,u=S.intensity,l=S.distance,o=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)G+=h.r*u,F+=h.g*u,N+=h.b*u;else if(S.isLightProbe){for(let d=0;d<9;d++)W.probe[d].addScaledVector(S.sh.coefficients[d],u);B++}else if(S.isDirectionalLight){let d=$.get(S);if(d.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let t=S.shadow,m=Z.get(S);m.shadowIntensity=t.intensity,m.shadowBias=t.bias,m.shadowNormalBias=t.normalBias,m.shadowRadius=t.radius,m.shadowMapSize=t.mapSize,W.directionalShadow[E]=m,W.directionalShadowMap[E]=o,W.directionalShadowMatrix[E]=S.shadow.matrix,V++}W.directional[E]=d,E++}else if(S.isSpotLight){let d=$.get(S);d.position.setFromMatrixPosition(S.matrixWorld),d.color.copy(h).multiplyScalar(u),d.distance=l,d.coneCos=Math.cos(S.angle),d.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),d.decay=S.decay,W.spot[D]=d;let t=S.shadow;if(S.map){if(W.spotLightMap[T]=S.map,T++,t.updateMatrices(S),S.castShadow)I++}if(W.spotLightMatrix[D]=t.matrix,S.castShadow){let m=Z.get(S);m.shadowIntensity=t.intensity,m.shadowBias=t.bias,m.shadowNormalBias=t.normalBias,m.shadowRadius=t.radius,m.shadowMapSize=t.mapSize,W.spotShadow[D]=m,W.spotShadowMap[D]=o,A++}D++}else if(S.isRectAreaLight){let d=$.get(S);d.color.copy(h).multiplyScalar(u),d.halfWidth.set(S.width*0.5,0,0),d.halfHeight.set(0,S.height*0.5,0),W.rectArea[q]=d,q++}else if(S.isPointLight){let d=$.get(S);if(d.color.copy(S.color).multiplyScalar(S.intensity),d.distance=S.distance,d.decay=S.decay,S.castShadow){let t=S.shadow,m=Z.get(S);m.shadowIntensity=t.intensity,m.shadowBias=t.bias,m.shadowNormalBias=t.normalBias,m.shadowRadius=t.radius,m.shadowMapSize=t.mapSize,m.shadowCameraNear=t.camera.near,m.shadowCameraFar=t.camera.far,W.pointShadow[R]=m,W.pointShadowMap[R]=o,W.pointShadowMatrix[R]=S.shadow.matrix,L++}W.point[R]=d,R++}else if(S.isHemisphereLight){let d=$.get(S);d.skyColor.copy(S.color).multiplyScalar(u),d.groundColor.copy(S.groundColor).multiplyScalar(u),W.hemi[O]=d,O++}}if(q>0)if(J.has("OES_texture_float_linear")===!0)W.rectAreaLTC1=H0.LTC_FLOAT_1,W.rectAreaLTC2=H0.LTC_FLOAT_2;else W.rectAreaLTC1=H0.LTC_HALF_1,W.rectAreaLTC2=H0.LTC_HALF_2;W.ambient[0]=G,W.ambient[1]=F,W.ambient[2]=N;let b=W.hash;if(b.directionalLength!==E||b.pointLength!==R||b.spotLength!==D||b.rectAreaLength!==q||b.hemiLength!==O||b.numDirectionalShadows!==V||b.numPointShadows!==L||b.numSpotShadows!==A||b.numSpotMaps!==T||b.numLightProbes!==B)W.directional.length=E,W.spot.length=D,W.rectArea.length=q,W.point.length=R,W.hemi.length=O,W.directionalShadow.length=V,W.directionalShadowMap.length=V,W.pointShadow.length=L,W.pointShadowMap.length=L,W.spotShadow.length=A,W.spotShadowMap.length=A,W.directionalShadowMatrix.length=V,W.pointShadowMatrix.length=L,W.spotLightMatrix.length=A+T-I,W.spotLightMap.length=T,W.numSpotLightShadowsWithMaps=I,W.numLightProbes=B,b.directionalLength=E,b.pointLength=R,b.spotLength=D,b.rectAreaLength=q,b.hemiLength=O,b.numDirectionalShadows=V,b.numPointShadows=L,b.numSpotShadows=A,b.numSpotMaps=T,b.numLightProbes=B,W.version=JG++}function K(U,G){let F=0,N=0,E=0,R=0,D=0,q=G.matrixWorldInverse;for(let O=0,V=U.length;O<V;O++){let L=U[O];if(L.isDirectionalLight){let A=W.directional[F];A.direction.setFromMatrixPosition(L.matrixWorld),Q.setFromMatrixPosition(L.target.matrixWorld),A.direction.sub(Q),A.direction.transformDirection(q),F++}else if(L.isSpotLight){let A=W.spot[E];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(q),A.direction.setFromMatrixPosition(L.matrixWorld),Q.setFromMatrixPosition(L.target.matrixWorld),A.direction.sub(Q),A.direction.transformDirection(q),E++}else if(L.isRectAreaLight){let A=W.rectArea[R];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(q),Y.identity(),H.copy(L.matrixWorld),H.premultiply(q),Y.extractRotation(H),A.halfWidth.set(L.width*0.5,0,0),A.halfHeight.set(0,L.height*0.5,0),A.halfWidth.applyMatrix4(Y),A.halfHeight.applyMatrix4(Y),R++}else if(L.isPointLight){let A=W.point[N];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(q),N++}else if(L.isHemisphereLight){let A=W.hemi[D];A.direction.setFromMatrixPosition(L.matrixWorld),A.direction.transformDirection(q),D++}}}return{setup:X,setupView:K,state:W}}function FH(J){let $=new ZG(J),Z=[],W=[];function Q(G){U.camera=G,Z.length=0,W.length=0}function H(G){Z.push(G)}function Y(G){W.push(G)}function X(){$.setup(Z)}function K(G){$.setupView(Z,G)}let U={lightsArray:Z,shadowsArray:W,camera:null,lights:$,transmissionRenderTarget:{}};return{init:Q,state:U,setupLights:X,setupLightsView:K,pushLight:H,pushShadow:Y}}function WG(J){let $=new WeakMap;function Z(Q,H=0){let Y=$.get(Q),X;if(Y===void 0)X=new FH(J),$.set(Q,[X]);else if(H>=Y.length)X=new FH(J),Y.push(X);else X=Y[H];return X}function W(){$=new WeakMap}return{get:Z,dispose:W}}var QG=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HG=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function YG(J,$,Z){let W=new W7,Q=new A0,H=new A0,Y=new $8,X=new UZ({depthPacking:CQ}),K=new GZ,U={},G=Z.maxTextureSize,F={[z6]:T8,[T8]:z6,[l8]:l8},N=new $9({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new A0},radius:{value:4}},vertexShader:QG,fragmentShader:HG}),E=N.clone();E.defines.HORIZONTAL_PASS=1;let R=new V8;R.setAttribute("position",new u8(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let D=new H8(R,N),q=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=E$;let O=this.type;this.render=function(I,B,b){if(q.enabled===!1)return;if(q.autoUpdate===!1&&q.needsUpdate===!1)return;if(I.length===0)return;let z=J.getRenderTarget(),C=J.getActiveCubeFace(),S=J.getActiveMipmapLevel(),h=J.state;h.setBlending(A9),h.buffers.color.setClear(1,1,1,1),h.buffers.depth.setTest(!0),h.setScissorTest(!1);let u=O!==t8&&this.type===t8,l=O===t8&&this.type!==t8;for(let o=0,d=I.length;o<d;o++){let t=I[o],m=t.shadow;if(m===void 0){console.warn("THREE.WebGLShadowMap:",t,"has no shadow.");continue}if(m.autoUpdate===!1&&m.needsUpdate===!1)continue;Q.copy(m.mapSize);let X0=m.getFrameExtents();if(Q.multiply(X0),H.copy(m.mapSize),Q.x>G||Q.y>G){if(Q.x>G)H.x=Math.floor(G/X0.x),Q.x=H.x*X0.x,m.mapSize.x=H.x;if(Q.y>G)H.y=Math.floor(G/X0.y),Q.y=H.y*X0.y,m.mapSize.y=H.y}if(m.map===null||u===!0||l===!0){let w0=this.type!==t8?{minFilter:V6,magFilter:V6}:{};if(m.map!==null)m.map.dispose();m.map=new q9(Q.x,Q.y,w0),m.map.texture.name=t.name+".shadowMap",m.camera.updateProjectionMatrix()}J.setRenderTarget(m.map),J.clear();let J0=m.getViewportCount();for(let w0=0;w0<J0;w0++){let g0=m.getViewport(w0);Y.set(H.x*g0.x,H.y*g0.y,H.x*g0.z,H.y*g0.w),h.viewport(Y),m.updateMatrices(t,w0),W=m.getFrustum(),A(B,b,m.camera,t,this.type)}if(m.isPointLightShadow!==!0&&this.type===t8)V(m,b);m.needsUpdate=!1}O=this.type,q.needsUpdate=!1,J.setRenderTarget(z,C,S)};function V(I,B){let b=$.update(D);if(N.defines.VSM_SAMPLES!==I.blurSamples)N.defines.VSM_SAMPLES=I.blurSamples,E.defines.VSM_SAMPLES=I.blurSamples,N.needsUpdate=!0,E.needsUpdate=!0;if(I.mapPass===null)I.mapPass=new q9(Q.x,Q.y);N.uniforms.shadow_pass.value=I.map.texture,N.uniforms.resolution.value=I.mapSize,N.uniforms.radius.value=I.radius,J.setRenderTarget(I.mapPass),J.clear(),J.renderBufferDirect(B,null,b,N,D,null),E.uniforms.shadow_pass.value=I.mapPass.texture,E.uniforms.resolution.value=I.mapSize,E.uniforms.radius.value=I.radius,J.setRenderTarget(I.map),J.clear(),J.renderBufferDirect(B,null,b,E,D,null)}function L(I,B,b,z){let C=null,S=b.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(S!==void 0)C=S;else if(C=b.isPointLight===!0?K:X,J.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){let h=C.uuid,u=B.uuid,l=U[h];if(l===void 0)l={},U[h]=l;let o=l[u];if(o===void 0)o=C.clone(),l[u]=o,B.addEventListener("dispose",T);C=o}if(C.visible=B.visible,C.wireframe=B.wireframe,z===t8)C.side=B.shadowSide!==null?B.shadowSide:B.side;else C.side=B.shadowSide!==null?B.shadowSide:F[B.side];if(C.alphaMap=B.alphaMap,C.alphaTest=B.alphaTest,C.map=B.map,C.clipShadows=B.clipShadows,C.clippingPlanes=B.clippingPlanes,C.clipIntersection=B.clipIntersection,C.displacementMap=B.displacementMap,C.displacementScale=B.displacementScale,C.displacementBias=B.displacementBias,C.wireframeLinewidth=B.wireframeLinewidth,C.linewidth=B.linewidth,b.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let h=J.properties.get(C);h.light=b}return C}function A(I,B,b,z,C){if(I.visible===!1)return;if(I.layers.test(B.layers)&&(I.isMesh||I.isLine||I.isPoints)){if((I.castShadow||I.receiveShadow&&C===t8)&&(!I.frustumCulled||W.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,I.matrixWorld);let u=$.update(I),l=I.material;if(Array.isArray(l)){let o=u.groups;for(let d=0,t=o.length;d<t;d++){let m=o[d],X0=l[m.materialIndex];if(X0&&X0.visible){let J0=L(I,X0,z,C);I.onBeforeShadow(J,I,B,b,u,J0,m),J.renderBufferDirect(b,null,u,J0,I,m),I.onAfterShadow(J,I,B,b,u,J0,m)}}}else if(l.visible){let o=L(I,l,z,C);I.onBeforeShadow(J,I,B,b,u,o,null),J.renderBufferDirect(b,null,u,o,I,null),I.onAfterShadow(J,I,B,b,u,o,null)}}}let h=I.children;for(let u=0,l=h.length;u<l;u++)A(h[u],B,b,z,C)}function T(I){I.target.removeEventListener("dispose",T);for(let b in U){let z=U[b],C=I.target.uuid;if(C in z)z[C].dispose(),delete z[C]}}}var XG={[d7]:c7,[n7]:o7,[s7]:a7,[a6]:i7,[c7]:d7,[o7]:n7,[a7]:s7,[i7]:a6};function KG(J,$){function Z(){let j=!1,$0=new $8,s=null,i=new $8(0,0,0,0);return{setMask:function(F0){if(s!==F0&&!j)J.colorMask(F0,F0,F0,F0),s=F0},setLocked:function(F0){j=F0},setClear:function(F0,G0,p0,K8,k8){if(k8===!0)F0*=K8,G0*=K8,p0*=K8;if($0.set(F0,G0,p0,K8),i.equals($0)===!1)J.clearColor(F0,G0,p0,K8),i.copy($0)},reset:function(){j=!1,s=null,i.set(-1,0,0,0)}}}function W(){let j=!1,$0=!1,s=null,i=null,F0=null;return{setReversed:function(G0){if($0!==G0){let p0=$.get("EXT_clip_control");if($0)p0.clipControlEXT(p0.LOWER_LEFT_EXT,p0.ZERO_TO_ONE_EXT);else p0.clipControlEXT(p0.LOWER_LEFT_EXT,p0.NEGATIVE_ONE_TO_ONE_EXT);let K8=F0;F0=null,this.setClear(K8)}$0=G0},getReversed:function(){return $0},setTest:function(G0){if(G0)Q0(J.DEPTH_TEST);else z0(J.DEPTH_TEST)},setMask:function(G0){if(s!==G0&&!j)J.depthMask(G0),s=G0},setFunc:function(G0){if($0)G0=XG[G0];if(i!==G0){switch(G0){case d7:J.depthFunc(J.NEVER);break;case c7:J.depthFunc(J.ALWAYS);break;case n7:J.depthFunc(J.LESS);break;case a6:J.depthFunc(J.LEQUAL);break;case s7:J.depthFunc(J.EQUAL);break;case i7:J.depthFunc(J.GEQUAL);break;case o7:J.depthFunc(J.GREATER);break;case a7:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}i=G0}},setLocked:function(G0){j=G0},setClear:function(G0){if(F0!==G0){if($0)G0=1-G0;J.clearDepth(G0),F0=G0}},reset:function(){j=!1,s=null,i=null,F0=null,$0=!1}}}function Q(){let j=!1,$0=null,s=null,i=null,F0=null,G0=null,p0=null,K8=null,k8=null;return{setTest:function(r0){if(!j)if(r0)Q0(J.STENCIL_TEST);else z0(J.STENCIL_TEST)},setMask:function(r0){if($0!==r0&&!j)J.stencilMask(r0),$0=r0},setFunc:function(r0,Q9,r8){if(s!==r0||i!==Q9||F0!==r8)J.stencilFunc(r0,Q9,r8),s=r0,i=Q9,F0=r8},setOp:function(r0,Q9,r8){if(G0!==r0||p0!==Q9||K8!==r8)J.stencilOp(r0,Q9,r8),G0=r0,p0=Q9,K8=r8},setLocked:function(r0){j=r0},setClear:function(r0){if(k8!==r0)J.clearStencil(r0),k8=r0},reset:function(){j=!1,$0=null,s=null,i=null,F0=null,G0=null,p0=null,K8=null,k8=null}}}let H=new Z,Y=new W,X=new Q,K=new WeakMap,U=new WeakMap,G={},F={},N=new WeakMap,E=[],R=null,D=!1,q=null,O=null,V=null,L=null,A=null,T=null,I=null,B=new _0(0,0,0),b=0,z=!1,C=null,S=null,h=null,u=null,l=null,o=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),d=!1,t=0,m=J.getParameter(J.VERSION);if(m.indexOf("WebGL")!==-1)t=parseFloat(/^WebGL (\d)/.exec(m)[1]),d=t>=1;else if(m.indexOf("OpenGL ES")!==-1)t=parseFloat(/^OpenGL ES (\d)/.exec(m)[1]),d=t>=2;let X0=null,J0={},w0=J.getParameter(J.SCISSOR_BOX),g0=J.getParameter(J.VIEWPORT),n=new $8().fromArray(w0),Z0=new $8().fromArray(g0);function D0(j,$0,s,i){let F0=new Uint8Array(4),G0=J.createTexture();J.bindTexture(j,G0),J.texParameteri(j,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(j,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let p0=0;p0<s;p0++)if(j===J.TEXTURE_3D||j===J.TEXTURE_2D_ARRAY)J.texImage3D($0,0,J.RGBA,1,1,i,0,J.RGBA,J.UNSIGNED_BYTE,F0);else J.texImage2D($0+p0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,F0);return G0}let M0={};M0[J.TEXTURE_2D]=D0(J.TEXTURE_2D,J.TEXTURE_2D,1),M0[J.TEXTURE_CUBE_MAP]=D0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),M0[J.TEXTURE_2D_ARRAY]=D0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),M0[J.TEXTURE_3D]=D0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),H.setClear(0,0,0,1),Y.setClear(1),X.setClear(0),Q0(J.DEPTH_TEST),Y.setFunc(a6),S0(!1),Y0(O$),Q0(J.CULL_FACE),m0(A9);function Q0(j){if(G[j]!==!0)J.enable(j),G[j]=!0}function z0(j){if(G[j]!==!1)J.disable(j),G[j]=!1}function p(j,$0){if(F[j]!==$0){if(J.bindFramebuffer(j,$0),F[j]=$0,j===J.DRAW_FRAMEBUFFER)F[J.FRAMEBUFFER]=$0;if(j===J.FRAMEBUFFER)F[J.DRAW_FRAMEBUFFER]=$0;return!0}return!1}function T0(j,$0){let s=E,i=!1;if(j){if(s=N.get($0),s===void 0)s=[],N.set($0,s);let F0=j.textures;if(s.length!==F0.length||s[0]!==J.COLOR_ATTACHMENT0){for(let G0=0,p0=F0.length;G0<p0;G0++)s[G0]=J.COLOR_ATTACHMENT0+G0;s.length=F0.length,i=!0}}else if(s[0]!==J.BACK)s[0]=J.BACK,i=!0;if(i)J.drawBuffers(s)}function n0(j){if(R!==j)return J.useProgram(j),R=j,!0;return!1}let I0={[C6]:J.FUNC_ADD,[xW]:J.FUNC_SUBTRACT,[yW]:J.FUNC_REVERSE_SUBTRACT};I0[hW]=J.MIN,I0[vW]=J.MAX;let P={[bW]:J.ZERO,[gW]:J.ONE,[pW]:J.SRC_COLOR,[mW]:J.SRC_ALPHA,[iW]:J.SRC_ALPHA_SATURATE,[nW]:J.DST_COLOR,[dW]:J.DST_ALPHA,[uW]:J.ONE_MINUS_SRC_COLOR,[lW]:J.ONE_MINUS_SRC_ALPHA,[sW]:J.ONE_MINUS_DST_COLOR,[cW]:J.ONE_MINUS_DST_ALPHA,[oW]:J.CONSTANT_COLOR,[aW]:J.ONE_MINUS_CONSTANT_COLOR,[rW]:J.CONSTANT_ALPHA,[tW]:J.ONE_MINUS_CONSTANT_ALPHA};function m0(j,$0,s,i,F0,G0,p0,K8,k8,r0){if(j===A9){if(D===!0)z0(J.BLEND),D=!1;return}if(D===!1)Q0(J.BLEND),D=!0;if(j!==fW){if(j!==q||r0!==z){if(O!==C6||A!==C6)J.blendEquation(J.FUNC_ADD),O=C6,A=C6;if(r0)switch(j){case o6:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case R$:J.blendFunc(J.ONE,J.ONE);break;case D$:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case k$:J.blendFuncSeparate(J.ZERO,J.SRC_COLOR,J.ZERO,J.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case o6:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case R$:J.blendFunc(J.SRC_ALPHA,J.ONE);break;case D$:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case k$:J.blendFunc(J.ZERO,J.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}V=null,L=null,T=null,I=null,B.set(0,0,0),b=0,q=j,z=r0}return}if(F0=F0||$0,G0=G0||s,p0=p0||i,$0!==O||F0!==A)J.blendEquationSeparate(I0[$0],I0[F0]),O=$0,A=F0;if(s!==V||i!==L||G0!==T||p0!==I)J.blendFuncSeparate(P[s],P[i],P[G0],P[p0]),V=s,L=i,T=G0,I=p0;if(K8.equals(B)===!1||k8!==b)J.blendColor(K8.r,K8.g,K8.b,k8),B.copy(K8),b=k8;q=j,z=!1}function P0(j,$0){j.side===l8?z0(J.CULL_FACE):Q0(J.CULL_FACE);let s=j.side===T8;if($0)s=!s;S0(s),j.blending===o6&&j.transparent===!1?m0(A9):m0(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),Y.setFunc(j.depthFunc),Y.setTest(j.depthTest),Y.setMask(j.depthWrite),H.setMask(j.colorWrite);let i=j.stencilWrite;if(X.setTest(i),i)X.setMask(j.stencilWriteMask),X.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),X.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass);k0(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?Q0(J.SAMPLE_ALPHA_TO_COVERAGE):z0(J.SAMPLE_ALPHA_TO_COVERAGE)}function S0(j){if(C!==j){if(j)J.frontFace(J.CW);else J.frontFace(J.CCW);C=j}}function Y0(j){if(j!==SW){if(Q0(J.CULL_FACE),j!==S)if(j===O$)J.cullFace(J.BACK);else if(j===_W)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else z0(J.CULL_FACE);S=j}function o0(j){if(j!==h){if(d)J.lineWidth(j);h=j}}function k0(j,$0,s){if(j){if(Q0(J.POLYGON_OFFSET_FILL),u!==$0||l!==s)J.polygonOffset($0,s),u=$0,l=s}else z0(J.POLYGON_OFFSET_FILL)}function B0(j){if(j)Q0(J.SCISSOR_TEST);else z0(J.SCISSOR_TEST)}function w(j){if(j===void 0)j=J.TEXTURE0+o-1;if(X0!==j)J.activeTexture(j),X0=j}function k(j,$0,s){if(s===void 0)if(X0===null)s=J.TEXTURE0+o-1;else s=X0;let i=J0[s];if(i===void 0)i={type:void 0,texture:void 0},J0[s]=i;if(i.type!==j||i.texture!==$0){if(X0!==s)J.activeTexture(s),X0=s;J.bindTexture(j,$0||M0[j]),i.type=j,i.texture=$0}}function y(){let j=J0[X0];if(j!==void 0&&j.type!==void 0)J.bindTexture(j.type,null),j.type=void 0,j.texture=void 0}function a(){try{J.compressedTexImage2D.apply(J,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function r(){try{J.compressedTexImage3D.apply(J,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function c(){try{J.texSubImage2D.apply(J,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function V0(){try{J.texSubImage3D.apply(J,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function K0(){try{J.compressedTexSubImage2D.apply(J,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function O0(){try{J.compressedTexSubImage3D.apply(J,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function v0(){try{J.texStorage2D.apply(J,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function W0(){try{J.texStorage3D.apply(J,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function N0(){try{J.texImage2D.apply(J,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function c0(){try{J.texImage3D.apply(J,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function j0(j){if(n.equals(j)===!1)J.scissor(j.x,j.y,j.z,j.w),n.copy(j)}function E0(j){if(Z0.equals(j)===!1)J.viewport(j.x,j.y,j.z,j.w),Z0.copy(j)}function b0(j,$0){let s=U.get($0);if(s===void 0)s=new WeakMap,U.set($0,s);let i=s.get(j);if(i===void 0)i=J.getUniformBlockIndex($0,j.name),s.set(j,i)}function l0(j,$0){let i=U.get($0).get(j);if(K.get($0)!==i)J.uniformBlockBinding($0,i,j.__bindingPointIndex),K.set($0,i)}function X8(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),Y.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),G={},X0=null,J0={},F={},N=new WeakMap,E=[],R=null,D=!1,q=null,O=null,V=null,L=null,A=null,T=null,I=null,B=new _0(0,0,0),b=0,z=!1,C=null,S=null,h=null,u=null,l=null,n.set(0,0,J.canvas.width,J.canvas.height),Z0.set(0,0,J.canvas.width,J.canvas.height),H.reset(),Y.reset(),X.reset()}return{buffers:{color:H,depth:Y,stencil:X},enable:Q0,disable:z0,bindFramebuffer:p,drawBuffers:T0,useProgram:n0,setBlending:m0,setMaterial:P0,setFlipSided:S0,setCullFace:Y0,setLineWidth:o0,setPolygonOffset:k0,setScissorTest:B0,activeTexture:w,bindTexture:k,unbindTexture:y,compressedTexImage2D:a,compressedTexImage3D:r,texImage2D:N0,texImage3D:c0,updateUBOMapping:b0,uniformBlockBinding:l0,texStorage2D:v0,texStorage3D:W0,texSubImage2D:c,texSubImage3D:V0,compressedTexSubImage2D:K0,compressedTexSubImage3D:O0,scissor:j0,viewport:E0,reset:X8}}function UG(J,$,Z,W,Q,H,Y){let X=$.has("WEBGL_multisampled_render_to_texture")?$.get("WEBGL_multisampled_render_to_texture"):null,K=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new A0,G=new WeakMap,F,N=new WeakMap,E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(w){}function R(w,k){return E?new OffscreenCanvas(w,k):L6("canvas")}function D(w,k,y){let a=1,r=B0(w);if(r.width>y||r.height>y)a=y/Math.max(r.width,r.height);if(a<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let c=Math.floor(a*r.width),V0=Math.floor(a*r.height);if(F===void 0)F=R(c,V0);let K0=k?R(c,V0):F;return K0.width=c,K0.height=V0,K0.getContext("2d").drawImage(w,0,0,c,V0),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+r.width+"x"+r.height+") to ("+c+"x"+V0+")."),K0}else{if("data"in w)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+r.width+"x"+r.height+").");return w}return w}function q(w){return w.generateMipmaps}function O(w){J.generateMipmap(w)}function V(w){if(w.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(w.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function L(w,k,y,a,r=!1){if(w!==null){if(J[w]!==void 0)return J[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let c=k;if(k===J.RED){if(y===J.FLOAT)c=J.R32F;if(y===J.HALF_FLOAT)c=J.R16F;if(y===J.UNSIGNED_BYTE)c=J.R8}if(k===J.RED_INTEGER){if(y===J.UNSIGNED_BYTE)c=J.R8UI;if(y===J.UNSIGNED_SHORT)c=J.R16UI;if(y===J.UNSIGNED_INT)c=J.R32UI;if(y===J.BYTE)c=J.R8I;if(y===J.SHORT)c=J.R16I;if(y===J.INT)c=J.R32I}if(k===J.RG){if(y===J.FLOAT)c=J.RG32F;if(y===J.HALF_FLOAT)c=J.RG16F;if(y===J.UNSIGNED_BYTE)c=J.RG8}if(k===J.RG_INTEGER){if(y===J.UNSIGNED_BYTE)c=J.RG8UI;if(y===J.UNSIGNED_SHORT)c=J.RG16UI;if(y===J.UNSIGNED_INT)c=J.RG32UI;if(y===J.BYTE)c=J.RG8I;if(y===J.SHORT)c=J.RG16I;if(y===J.INT)c=J.RG32I}if(k===J.RGB_INTEGER){if(y===J.UNSIGNED_BYTE)c=J.RGB8UI;if(y===J.UNSIGNED_SHORT)c=J.RGB16UI;if(y===J.UNSIGNED_INT)c=J.RGB32UI;if(y===J.BYTE)c=J.RGB8I;if(y===J.SHORT)c=J.RGB16I;if(y===J.INT)c=J.RGB32I}if(k===J.RGBA_INTEGER){if(y===J.UNSIGNED_BYTE)c=J.RGBA8UI;if(y===J.UNSIGNED_SHORT)c=J.RGBA16UI;if(y===J.UNSIGNED_INT)c=J.RGBA32UI;if(y===J.BYTE)c=J.RGBA8I;if(y===J.SHORT)c=J.RGBA16I;if(y===J.INT)c=J.RGBA32I}if(k===J.RGB){if(y===J.UNSIGNED_INT_5_9_9_9_REV)c=J.RGB9_E5}if(k===J.RGBA){let V0=r?r$:i0.getTransfer(a);if(y===J.FLOAT)c=J.RGBA32F;if(y===J.HALF_FLOAT)c=J.RGBA16F;if(y===J.UNSIGNED_BYTE)c=V0===Q8?J.SRGB8_ALPHA8:J.RGBA8;if(y===J.UNSIGNED_SHORT_4_4_4_4)c=J.RGBA4;if(y===J.UNSIGNED_SHORT_5_5_5_1)c=J.RGB5_A1}if(c===J.R16F||c===J.R32F||c===J.RG16F||c===J.RG32F||c===J.RGBA16F||c===J.RGBA32F)$.get("EXT_color_buffer_float");return c}function A(w,k){let y;if(w){if(k===null||k===B6||k===P6)y=J.DEPTH24_STENCIL8;else if(k===S9)y=J.DEPTH32F_STENCIL8;else if(k===e6)y=J.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(k===null||k===B6||k===P6)y=J.DEPTH_COMPONENT24;else if(k===S9)y=J.DEPTH_COMPONENT32F;else if(k===e6)y=J.DEPTH_COMPONENT16;return y}function T(w,k){if(q(w)===!0||w.isFramebufferTexture&&w.minFilter!==V6&&w.minFilter!==l9)return Math.log2(Math.max(k.width,k.height))+1;else if(w.mipmaps!==void 0&&w.mipmaps.length>0)return w.mipmaps.length;else if(w.isCompressedTexture&&Array.isArray(w.image))return k.mipmaps.length;else return 1}function I(w){let k=w.target;if(k.removeEventListener("dispose",I),b(k),k.isVideoTexture)G.delete(k)}function B(w){let k=w.target;k.removeEventListener("dispose",B),C(k)}function b(w){let k=W.get(w);if(k.__webglInit===void 0)return;let y=w.source,a=N.get(y);if(a){let r=a[k.__cacheKey];if(r.usedTimes--,r.usedTimes===0)z(w);if(Object.keys(a).length===0)N.delete(y)}W.remove(w)}function z(w){let k=W.get(w);J.deleteTexture(k.__webglTexture);let y=w.source,a=N.get(y);delete a[k.__cacheKey],Y.memory.textures--}function C(w){let k=W.get(w);if(w.depthTexture)w.depthTexture.dispose(),W.remove(w.depthTexture);if(w.isWebGLCubeRenderTarget)for(let a=0;a<6;a++){if(Array.isArray(k.__webglFramebuffer[a]))for(let r=0;r<k.__webglFramebuffer[a].length;r++)J.deleteFramebuffer(k.__webglFramebuffer[a][r]);else J.deleteFramebuffer(k.__webglFramebuffer[a]);if(k.__webglDepthbuffer)J.deleteRenderbuffer(k.__webglDepthbuffer[a])}else{if(Array.isArray(k.__webglFramebuffer))for(let a=0;a<k.__webglFramebuffer.length;a++)J.deleteFramebuffer(k.__webglFramebuffer[a]);else J.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer)J.deleteRenderbuffer(k.__webglDepthbuffer);if(k.__webglMultisampledFramebuffer)J.deleteFramebuffer(k.__webglMultisampledFramebuffer);if(k.__webglColorRenderbuffer){for(let a=0;a<k.__webglColorRenderbuffer.length;a++)if(k.__webglColorRenderbuffer[a])J.deleteRenderbuffer(k.__webglColorRenderbuffer[a])}if(k.__webglDepthRenderbuffer)J.deleteRenderbuffer(k.__webglDepthRenderbuffer)}let y=w.textures;for(let a=0,r=y.length;a<r;a++){let c=W.get(y[a]);if(c.__webglTexture)J.deleteTexture(c.__webglTexture),Y.memory.textures--;W.remove(y[a])}W.remove(w)}let S=0;function h(){S=0}function u(){let w=S;if(w>=Q.maxTextures)console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+Q.maxTextures);return S+=1,w}function l(w){let k=[];return k.push(w.wrapS),k.push(w.wrapT),k.push(w.wrapR||0),k.push(w.magFilter),k.push(w.minFilter),k.push(w.anisotropy),k.push(w.internalFormat),k.push(w.format),k.push(w.type),k.push(w.generateMipmaps),k.push(w.premultiplyAlpha),k.push(w.flipY),k.push(w.unpackAlignment),k.push(w.colorSpace),k.join()}function o(w,k){let y=W.get(w);if(w.isVideoTexture)o0(w);if(w.isRenderTargetTexture===!1&&w.version>0&&y.__version!==w.version){let a=w.image;if(a===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(a.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z0(y,w,k);return}}Z.bindTexture(J.TEXTURE_2D,y.__webglTexture,J.TEXTURE0+k)}function d(w,k){let y=W.get(w);if(w.version>0&&y.__version!==w.version){Z0(y,w,k);return}Z.bindTexture(J.TEXTURE_2D_ARRAY,y.__webglTexture,J.TEXTURE0+k)}function t(w,k){let y=W.get(w);if(w.version>0&&y.__version!==w.version){Z0(y,w,k);return}Z.bindTexture(J.TEXTURE_3D,y.__webglTexture,J.TEXTURE0+k)}function m(w,k){let y=W.get(w);if(w.version>0&&y.__version!==w.version){D0(y,w,k);return}Z.bindTexture(J.TEXTURE_CUBE_MAP,y.__webglTexture,J.TEXTURE0+k)}let X0={[KQ]:J.REPEAT,[UQ]:J.CLAMP_TO_EDGE,[GQ]:J.MIRRORED_REPEAT},J0={[V6]:J.NEAREST,[FQ]:J.NEAREST_MIPMAP_NEAREST,[t6]:J.NEAREST_MIPMAP_LINEAR,[l9]:J.LINEAR,[JJ]:J.LINEAR_MIPMAP_NEAREST,[w6]:J.LINEAR_MIPMAP_LINEAR},w0={[wQ]:J.NEVER,[_Q]:J.ALWAYS,[BQ]:J.LESS,[t$]:J.LEQUAL,[PQ]:J.EQUAL,[SQ]:J.GEQUAL,[AQ]:J.GREATER,[TQ]:J.NOTEQUAL};function g0(w,k){if(k.type===S9&&$.has("OES_texture_float_linear")===!1&&(k.magFilter===l9||k.magFilter===JJ||k.magFilter===t6||k.magFilter===w6||k.minFilter===l9||k.minFilter===JJ||k.minFilter===t6||k.minFilter===w6))console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(w,J.TEXTURE_WRAP_S,X0[k.wrapS]),J.texParameteri(w,J.TEXTURE_WRAP_T,X0[k.wrapT]),w===J.TEXTURE_3D||w===J.TEXTURE_2D_ARRAY)J.texParameteri(w,J.TEXTURE_WRAP_R,X0[k.wrapR]);if(J.texParameteri(w,J.TEXTURE_MAG_FILTER,J0[k.magFilter]),J.texParameteri(w,J.TEXTURE_MIN_FILTER,J0[k.minFilter]),k.compareFunction)J.texParameteri(w,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(w,J.TEXTURE_COMPARE_FUNC,w0[k.compareFunction]);if($.has("EXT_texture_filter_anisotropic")===!0){if(k.magFilter===V6)return;if(k.minFilter!==t6&&k.minFilter!==w6)return;if(k.type===S9&&$.has("OES_texture_float_linear")===!1)return;if(k.anisotropy>1||W.get(k).__currentAnisotropy){let y=$.get("EXT_texture_filter_anisotropic");J.texParameterf(w,y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(k.anisotropy,Q.getMaxAnisotropy())),W.get(k).__currentAnisotropy=k.anisotropy}}}function n(w,k){let y=!1;if(w.__webglInit===void 0)w.__webglInit=!0,k.addEventListener("dispose",I);let a=k.source,r=N.get(a);if(r===void 0)r={},N.set(a,r);let c=l(k);if(c!==w.__cacheKey){if(r[c]===void 0)r[c]={texture:J.createTexture(),usedTimes:0},Y.memory.textures++,y=!0;r[c].usedTimes++;let V0=r[w.__cacheKey];if(V0!==void 0){if(r[w.__cacheKey].usedTimes--,V0.usedTimes===0)z(k)}w.__cacheKey=c,w.__webglTexture=r[c].texture}return y}function Z0(w,k,y){let a=J.TEXTURE_2D;if(k.isDataArrayTexture||k.isCompressedArrayTexture)a=J.TEXTURE_2D_ARRAY;if(k.isData3DTexture)a=J.TEXTURE_3D;let r=n(w,k),c=k.source;Z.bindTexture(a,w.__webglTexture,J.TEXTURE0+y);let V0=W.get(c);if(c.version!==V0.__version||r===!0){Z.activeTexture(J.TEXTURE0+y);let K0=i0.getPrimaries(i0.workingColorSpace),O0=k.colorSpace===d9?null:i0.getPrimaries(k.colorSpace),v0=k.colorSpace===d9||K0===O0?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,k.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,k.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,v0);let W0=D(k.image,!1,Q.maxTextureSize);W0=k0(k,W0);let N0=H.convert(k.format,k.colorSpace),c0=H.convert(k.type),j0=L(k.internalFormat,N0,c0,k.colorSpace,k.isVideoTexture);g0(a,k);let E0,b0=k.mipmaps,l0=k.isVideoTexture!==!0,X8=V0.__version===void 0||r===!0,j=c.dataReady,$0=T(k,W0);if(k.isDepthTexture){if(j0=A(k.format===$7,k.type),X8)if(l0)Z.texStorage2D(J.TEXTURE_2D,1,j0,W0.width,W0.height);else Z.texImage2D(J.TEXTURE_2D,0,j0,W0.width,W0.height,0,N0,c0,null)}else if(k.isDataTexture)if(b0.length>0){if(l0&&X8)Z.texStorage2D(J.TEXTURE_2D,$0,j0,b0[0].width,b0[0].height);for(let s=0,i=b0.length;s<i;s++)if(E0=b0[s],l0){if(j)Z.texSubImage2D(J.TEXTURE_2D,s,0,0,E0.width,E0.height,N0,c0,E0.data)}else Z.texImage2D(J.TEXTURE_2D,s,j0,E0.width,E0.height,0,N0,c0,E0.data);k.generateMipmaps=!1}else if(l0){if(X8)Z.texStorage2D(J.TEXTURE_2D,$0,j0,W0.width,W0.height);if(j)Z.texSubImage2D(J.TEXTURE_2D,0,0,0,W0.width,W0.height,N0,c0,W0.data)}else Z.texImage2D(J.TEXTURE_2D,0,j0,W0.width,W0.height,0,N0,c0,W0.data);else if(k.isCompressedTexture)if(k.isCompressedArrayTexture){if(l0&&X8)Z.texStorage3D(J.TEXTURE_2D_ARRAY,$0,j0,b0[0].width,b0[0].height,W0.depth);for(let s=0,i=b0.length;s<i;s++)if(E0=b0[s],k.format!==e8)if(N0!==null)if(l0){if(j)if(k.layerUpdates.size>0){let F0=VZ(E0.width,E0.height,k.format,k.type);for(let G0 of k.layerUpdates){let p0=E0.data.subarray(G0*F0/E0.data.BYTES_PER_ELEMENT,(G0+1)*F0/E0.data.BYTES_PER_ELEMENT);Z.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,s,0,0,G0,E0.width,E0.height,1,N0,p0)}k.clearLayerUpdates()}else Z.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,s,0,0,0,E0.width,E0.height,W0.depth,N0,E0.data)}else Z.compressedTexImage3D(J.TEXTURE_2D_ARRAY,s,j0,E0.width,E0.height,W0.depth,0,E0.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(l0){if(j)Z.texSubImage3D(J.TEXTURE_2D_ARRAY,s,0,0,0,E0.width,E0.height,W0.depth,N0,c0,E0.data)}else Z.texImage3D(J.TEXTURE_2D_ARRAY,s,j0,E0.width,E0.height,W0.depth,0,N0,c0,E0.data)}else{if(l0&&X8)Z.texStorage2D(J.TEXTURE_2D,$0,j0,b0[0].width,b0[0].height);for(let s=0,i=b0.length;s<i;s++)if(E0=b0[s],k.format!==e8)if(N0!==null)if(l0){if(j)Z.compressedTexSubImage2D(J.TEXTURE_2D,s,0,0,E0.width,E0.height,N0,E0.data)}else Z.compressedTexImage2D(J.TEXTURE_2D,s,j0,E0.width,E0.height,0,E0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(l0){if(j)Z.texSubImage2D(J.TEXTURE_2D,s,0,0,E0.width,E0.height,N0,c0,E0.data)}else Z.texImage2D(J.TEXTURE_2D,s,j0,E0.width,E0.height,0,N0,c0,E0.data)}else if(k.isDataArrayTexture)if(l0){if(X8)Z.texStorage3D(J.TEXTURE_2D_ARRAY,$0,j0,W0.width,W0.height,W0.depth);if(j)if(k.layerUpdates.size>0){let s=VZ(W0.width,W0.height,k.format,k.type);for(let i of k.layerUpdates){let F0=W0.data.subarray(i*s/W0.data.BYTES_PER_ELEMENT,(i+1)*s/W0.data.BYTES_PER_ELEMENT);Z.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,i,W0.width,W0.height,1,N0,c0,F0)}k.clearLayerUpdates()}else Z.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,W0.width,W0.height,W0.depth,N0,c0,W0.data)}else Z.texImage3D(J.TEXTURE_2D_ARRAY,0,j0,W0.width,W0.height,W0.depth,0,N0,c0,W0.data);else if(k.isData3DTexture)if(l0){if(X8)Z.texStorage3D(J.TEXTURE_3D,$0,j0,W0.width,W0.height,W0.depth);if(j)Z.texSubImage3D(J.TEXTURE_3D,0,0,0,0,W0.width,W0.height,W0.depth,N0,c0,W0.data)}else Z.texImage3D(J.TEXTURE_3D,0,j0,W0.width,W0.height,W0.depth,0,N0,c0,W0.data);else if(k.isFramebufferTexture){if(X8)if(l0)Z.texStorage2D(J.TEXTURE_2D,$0,j0,W0.width,W0.height);else{let{width:s,height:i}=W0;for(let F0=0;F0<$0;F0++)Z.texImage2D(J.TEXTURE_2D,F0,j0,s,i,0,N0,c0,null),s>>=1,i>>=1}}else if(b0.length>0){if(l0&&X8){let s=B0(b0[0]);Z.texStorage2D(J.TEXTURE_2D,$0,j0,s.width,s.height)}for(let s=0,i=b0.length;s<i;s++)if(E0=b0[s],l0){if(j)Z.texSubImage2D(J.TEXTURE_2D,s,0,0,N0,c0,E0)}else Z.texImage2D(J.TEXTURE_2D,s,j0,N0,c0,E0);k.generateMipmaps=!1}else if(l0){if(X8){let s=B0(W0);Z.texStorage2D(J.TEXTURE_2D,$0,j0,s.width,s.height)}if(j)Z.texSubImage2D(J.TEXTURE_2D,0,0,0,N0,c0,W0)}else Z.texImage2D(J.TEXTURE_2D,0,j0,N0,c0,W0);if(q(k))O(a);if(V0.__version=c.version,k.onUpdate)k.onUpdate(k)}w.__version=k.version}function D0(w,k,y){if(k.image.length!==6)return;let a=n(w,k),r=k.source;Z.bindTexture(J.TEXTURE_CUBE_MAP,w.__webglTexture,J.TEXTURE0+y);let c=W.get(r);if(r.version!==c.__version||a===!0){Z.activeTexture(J.TEXTURE0+y);let V0=i0.getPrimaries(i0.workingColorSpace),K0=k.colorSpace===d9?null:i0.getPrimaries(k.colorSpace),O0=k.colorSpace===d9||V0===K0?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,k.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,k.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,O0);let v0=k.isCompressedTexture||k.image[0].isCompressedTexture,W0=k.image[0]&&k.image[0].isDataTexture,N0=[];for(let i=0;i<6;i++){if(!v0&&!W0)N0[i]=D(k.image[i],!0,Q.maxCubemapSize);else N0[i]=W0?k.image[i].image:k.image[i];N0[i]=k0(k,N0[i])}let c0=N0[0],j0=H.convert(k.format,k.colorSpace),E0=H.convert(k.type),b0=L(k.internalFormat,j0,E0,k.colorSpace),l0=k.isVideoTexture!==!0,X8=c.__version===void 0||a===!0,j=r.dataReady,$0=T(k,c0);g0(J.TEXTURE_CUBE_MAP,k);let s;if(v0){if(l0&&X8)Z.texStorage2D(J.TEXTURE_CUBE_MAP,$0,b0,c0.width,c0.height);for(let i=0;i<6;i++){s=N0[i].mipmaps;for(let F0=0;F0<s.length;F0++){let G0=s[F0];if(k.format!==e8)if(j0!==null)if(l0){if(j)Z.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,F0,0,0,G0.width,G0.height,j0,G0.data)}else Z.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,F0,b0,G0.width,G0.height,0,G0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(l0){if(j)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,F0,0,0,G0.width,G0.height,j0,E0,G0.data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,F0,b0,G0.width,G0.height,0,j0,E0,G0.data)}}}else{if(s=k.mipmaps,l0&&X8){if(s.length>0)$0++;let i=B0(N0[0]);Z.texStorage2D(J.TEXTURE_CUBE_MAP,$0,b0,i.width,i.height)}for(let i=0;i<6;i++)if(W0){if(l0){if(j)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,0,0,N0[i].width,N0[i].height,j0,E0,N0[i].data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,b0,N0[i].width,N0[i].height,0,j0,E0,N0[i].data);for(let F0=0;F0<s.length;F0++){let p0=s[F0].image[i].image;if(l0){if(j)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,F0+1,0,0,p0.width,p0.height,j0,E0,p0.data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,F0+1,b0,p0.width,p0.height,0,j0,E0,p0.data)}}else{if(l0){if(j)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,0,0,j0,E0,N0[i])}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,b0,j0,E0,N0[i]);for(let F0=0;F0<s.length;F0++){let G0=s[F0];if(l0){if(j)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,F0+1,0,0,j0,E0,G0.image[i])}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,F0+1,b0,j0,E0,G0.image[i])}}}if(q(k))O(J.TEXTURE_CUBE_MAP);if(c.__version=r.version,k.onUpdate)k.onUpdate(k)}w.__version=k.version}function M0(w,k,y,a,r,c){let V0=H.convert(y.format,y.colorSpace),K0=H.convert(y.type),O0=L(y.internalFormat,V0,K0,y.colorSpace),v0=W.get(k),W0=W.get(y);if(W0.__renderTarget=k,!v0.__hasExternalTextures){let N0=Math.max(1,k.width>>c),c0=Math.max(1,k.height>>c);if(r===J.TEXTURE_3D||r===J.TEXTURE_2D_ARRAY)Z.texImage3D(r,c,O0,N0,c0,k.depth,0,V0,K0,null);else Z.texImage2D(r,c,O0,N0,c0,0,V0,K0,null)}if(Z.bindFramebuffer(J.FRAMEBUFFER,w),Y0(k))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,a,r,W0.__webglTexture,0,S0(k));else if(r===J.TEXTURE_2D||r>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&r<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,a,r,W0.__webglTexture,c);Z.bindFramebuffer(J.FRAMEBUFFER,null)}function Q0(w,k,y){if(J.bindRenderbuffer(J.RENDERBUFFER,w),k.depthBuffer){let a=k.depthTexture,r=a&&a.isDepthTexture?a.type:null,c=A(k.stencilBuffer,r),V0=k.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,K0=S0(k);if(Y0(k))X.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,K0,c,k.width,k.height);else if(y)J.renderbufferStorageMultisample(J.RENDERBUFFER,K0,c,k.width,k.height);else J.renderbufferStorage(J.RENDERBUFFER,c,k.width,k.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,V0,J.RENDERBUFFER,w)}else{let a=k.textures;for(let r=0;r<a.length;r++){let c=a[r],V0=H.convert(c.format,c.colorSpace),K0=H.convert(c.type),O0=L(c.internalFormat,V0,K0,c.colorSpace),v0=S0(k);if(y&&Y0(k)===!1)J.renderbufferStorageMultisample(J.RENDERBUFFER,v0,O0,k.width,k.height);else if(Y0(k))X.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,v0,O0,k.width,k.height);else J.renderbufferStorage(J.RENDERBUFFER,O0,k.width,k.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function z0(w,k){if(k&&k.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if(Z.bindFramebuffer(J.FRAMEBUFFER,w),!(k.depthTexture&&k.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let a=W.get(k.depthTexture);if(a.__renderTarget=k,!a.__webglTexture||k.depthTexture.image.width!==k.width||k.depthTexture.image.height!==k.height)k.depthTexture.image.width=k.width,k.depthTexture.image.height=k.height,k.depthTexture.needsUpdate=!0;o(k.depthTexture,0);let r=a.__webglTexture,c=S0(k);if(k.depthTexture.format===$J)if(Y0(k))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,r,0,c);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,r,0);else if(k.depthTexture.format===$7)if(Y0(k))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,r,0,c);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,r,0);else throw Error("Unknown depthTexture format")}function p(w){let k=W.get(w),y=w.isWebGLCubeRenderTarget===!0;if(k.__boundDepthTexture!==w.depthTexture){let a=w.depthTexture;if(k.__depthDisposeCallback)k.__depthDisposeCallback();if(a){let r=()=>{delete k.__boundDepthTexture,delete k.__depthDisposeCallback,a.removeEventListener("dispose",r)};a.addEventListener("dispose",r),k.__depthDisposeCallback=r}k.__boundDepthTexture=a}if(w.depthTexture&&!k.__autoAllocateDepthBuffer){if(y)throw Error("target.depthTexture not supported in Cube render targets");z0(k.__webglFramebuffer,w)}else if(y){k.__webglDepthbuffer=[];for(let a=0;a<6;a++)if(Z.bindFramebuffer(J.FRAMEBUFFER,k.__webglFramebuffer[a]),k.__webglDepthbuffer[a]===void 0)k.__webglDepthbuffer[a]=J.createRenderbuffer(),Q0(k.__webglDepthbuffer[a],w,!1);else{let r=w.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,c=k.__webglDepthbuffer[a];J.bindRenderbuffer(J.RENDERBUFFER,c),J.framebufferRenderbuffer(J.FRAMEBUFFER,r,J.RENDERBUFFER,c)}}else if(Z.bindFramebuffer(J.FRAMEBUFFER,k.__webglFramebuffer),k.__webglDepthbuffer===void 0)k.__webglDepthbuffer=J.createRenderbuffer(),Q0(k.__webglDepthbuffer,w,!1);else{let a=w.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,r=k.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,r),J.framebufferRenderbuffer(J.FRAMEBUFFER,a,J.RENDERBUFFER,r)}Z.bindFramebuffer(J.FRAMEBUFFER,null)}function T0(w,k,y){let a=W.get(w);if(k!==void 0)M0(a.__webglFramebuffer,w,w.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(y!==void 0)p(w)}function n0(w){let k=w.texture,y=W.get(w),a=W.get(k);w.addEventListener("dispose",B);let r=w.textures,c=w.isWebGLCubeRenderTarget===!0,V0=r.length>1;if(!V0){if(a.__webglTexture===void 0)a.__webglTexture=J.createTexture();a.__version=k.version,Y.memory.textures++}if(c){y.__webglFramebuffer=[];for(let K0=0;K0<6;K0++)if(k.mipmaps&&k.mipmaps.length>0){y.__webglFramebuffer[K0]=[];for(let O0=0;O0<k.mipmaps.length;O0++)y.__webglFramebuffer[K0][O0]=J.createFramebuffer()}else y.__webglFramebuffer[K0]=J.createFramebuffer()}else{if(k.mipmaps&&k.mipmaps.length>0){y.__webglFramebuffer=[];for(let K0=0;K0<k.mipmaps.length;K0++)y.__webglFramebuffer[K0]=J.createFramebuffer()}else y.__webglFramebuffer=J.createFramebuffer();if(V0)for(let K0=0,O0=r.length;K0<O0;K0++){let v0=W.get(r[K0]);if(v0.__webglTexture===void 0)v0.__webglTexture=J.createTexture(),Y.memory.textures++}if(w.samples>0&&Y0(w)===!1){y.__webglMultisampledFramebuffer=J.createFramebuffer(),y.__webglColorRenderbuffer=[],Z.bindFramebuffer(J.FRAMEBUFFER,y.__webglMultisampledFramebuffer);for(let K0=0;K0<r.length;K0++){let O0=r[K0];y.__webglColorRenderbuffer[K0]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,y.__webglColorRenderbuffer[K0]);let v0=H.convert(O0.format,O0.colorSpace),W0=H.convert(O0.type),N0=L(O0.internalFormat,v0,W0,O0.colorSpace,w.isXRRenderTarget===!0),c0=S0(w);J.renderbufferStorageMultisample(J.RENDERBUFFER,c0,N0,w.width,w.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+K0,J.RENDERBUFFER,y.__webglColorRenderbuffer[K0])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),w.depthBuffer)y.__webglDepthRenderbuffer=J.createRenderbuffer(),Q0(y.__webglDepthRenderbuffer,w,!0);Z.bindFramebuffer(J.FRAMEBUFFER,null)}}if(c){Z.bindTexture(J.TEXTURE_CUBE_MAP,a.__webglTexture),g0(J.TEXTURE_CUBE_MAP,k);for(let K0=0;K0<6;K0++)if(k.mipmaps&&k.mipmaps.length>0)for(let O0=0;O0<k.mipmaps.length;O0++)M0(y.__webglFramebuffer[K0][O0],w,k,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+K0,O0);else M0(y.__webglFramebuffer[K0],w,k,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+K0,0);if(q(k))O(J.TEXTURE_CUBE_MAP);Z.unbindTexture()}else if(V0){for(let K0=0,O0=r.length;K0<O0;K0++){let v0=r[K0],W0=W.get(v0);if(Z.bindTexture(J.TEXTURE_2D,W0.__webglTexture),g0(J.TEXTURE_2D,v0),M0(y.__webglFramebuffer,w,v0,J.COLOR_ATTACHMENT0+K0,J.TEXTURE_2D,0),q(v0))O(J.TEXTURE_2D)}Z.unbindTexture()}else{let K0=J.TEXTURE_2D;if(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)K0=w.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Z.bindTexture(K0,a.__webglTexture),g0(K0,k),k.mipmaps&&k.mipmaps.length>0)for(let O0=0;O0<k.mipmaps.length;O0++)M0(y.__webglFramebuffer[O0],w,k,J.COLOR_ATTACHMENT0,K0,O0);else M0(y.__webglFramebuffer,w,k,J.COLOR_ATTACHMENT0,K0,0);if(q(k))O(K0);Z.unbindTexture()}if(w.depthBuffer)p(w)}function I0(w){let k=w.textures;for(let y=0,a=k.length;y<a;y++){let r=k[y];if(q(r)){let c=V(w),V0=W.get(r).__webglTexture;Z.bindTexture(c,V0),O(c),Z.unbindTexture()}}}let P=[],m0=[];function P0(w){if(w.samples>0){if(Y0(w)===!1){let{textures:k,width:y,height:a}=w,r=J.COLOR_BUFFER_BIT,c=w.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,V0=W.get(w),K0=k.length>1;if(K0)for(let O0=0;O0<k.length;O0++)Z.bindFramebuffer(J.FRAMEBUFFER,V0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+O0,J.RENDERBUFFER,null),Z.bindFramebuffer(J.FRAMEBUFFER,V0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+O0,J.TEXTURE_2D,null,0);Z.bindFramebuffer(J.READ_FRAMEBUFFER,V0.__webglMultisampledFramebuffer),Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,V0.__webglFramebuffer);for(let O0=0;O0<k.length;O0++){if(w.resolveDepthBuffer){if(w.depthBuffer)r|=J.DEPTH_BUFFER_BIT;if(w.stencilBuffer&&w.resolveStencilBuffer)r|=J.STENCIL_BUFFER_BIT}if(K0){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,V0.__webglColorRenderbuffer[O0]);let v0=W.get(k[O0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,v0,0)}if(J.blitFramebuffer(0,0,y,a,0,0,y,a,r,J.NEAREST),K===!0){if(P.length=0,m0.length=0,P.push(J.COLOR_ATTACHMENT0+O0),w.depthBuffer&&w.resolveDepthBuffer===!1)P.push(c),m0.push(c),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,m0);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,P)}}if(Z.bindFramebuffer(J.READ_FRAMEBUFFER,null),Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),K0)for(let O0=0;O0<k.length;O0++){Z.bindFramebuffer(J.FRAMEBUFFER,V0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+O0,J.RENDERBUFFER,V0.__webglColorRenderbuffer[O0]);let v0=W.get(k[O0]).__webglTexture;Z.bindFramebuffer(J.FRAMEBUFFER,V0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+O0,J.TEXTURE_2D,v0,0)}Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,V0.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&K){let k=w.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[k])}}}function S0(w){return Math.min(Q.maxSamples,w.samples)}function Y0(w){let k=W.get(w);return w.samples>0&&$.has("WEBGL_multisampled_render_to_texture")===!0&&k.__useRenderToTexture!==!1}function o0(w){let k=Y.render.frame;if(G.get(w)!==k)G.set(w,k),w.update()}function k0(w,k){let{colorSpace:y,format:a,type:r}=w;if(w.isCompressedTexture===!0||w.isVideoTexture===!0)return k;if(y!==Z7&&y!==d9)if(i0.getTransfer(y)===Q8){if(a!==e8||r!==T9)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",y);return k}function B0(w){if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement)U.width=w.naturalWidth||w.width,U.height=w.naturalHeight||w.height;else if(typeof VideoFrame<"u"&&w instanceof VideoFrame)U.width=w.displayWidth,U.height=w.displayHeight;else U.width=w.width,U.height=w.height;return U}this.allocateTextureUnit=u,this.resetTextureUnits=h,this.setTexture2D=o,this.setTexture2DArray=d,this.setTexture3D=t,this.setTextureCube=m,this.rebindTextures=T0,this.setupRenderTarget=n0,this.updateRenderTargetMipmap=I0,this.updateMultisampleRenderTarget=P0,this.setupDepthRenderbuffer=p,this.setupFrameBufferTexture=M0,this.useMultisampledRTT=Y0}function GG(J,$){function Z(W,Q=d9){let H,Y=i0.getTransfer(Q);if(W===T9)return J.UNSIGNED_BYTE;if(W===L$)return J.UNSIGNED_SHORT_4_4_4_4;if(W===z$)return J.UNSIGNED_SHORT_5_5_5_1;if(W===OQ)return J.UNSIGNED_INT_5_9_9_9_REV;if(W===NQ)return J.BYTE;if(W===qQ)return J.SHORT;if(W===e6)return J.UNSIGNED_SHORT;if(W===M$)return J.INT;if(W===B6)return J.UNSIGNED_INT;if(W===S9)return J.FLOAT;if(W===J7)return J.HALF_FLOAT;if(W===EQ)return J.ALPHA;if(W===RQ)return J.RGB;if(W===e8)return J.RGBA;if(W===DQ)return J.LUMINANCE;if(W===kQ)return J.LUMINANCE_ALPHA;if(W===$J)return J.DEPTH_COMPONENT;if(W===$7)return J.DEPTH_STENCIL;if(W===MQ)return J.RED;if(W===C$)return J.RED_INTEGER;if(W===LQ)return J.RG;if(W===I$)return J.RG_INTEGER;if(W===V$)return J.RGBA_INTEGER;if(W===ZJ||W===WJ||W===QJ||W===HJ)if(Y===Q8)if(H=$.get("WEBGL_compressed_texture_s3tc_srgb"),H!==null){if(W===ZJ)return H.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(W===WJ)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(W===QJ)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(W===HJ)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(H=$.get("WEBGL_compressed_texture_s3tc"),H!==null){if(W===ZJ)return H.COMPRESSED_RGB_S3TC_DXT1_EXT;if(W===WJ)return H.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(W===QJ)return H.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(W===HJ)return H.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(W===w$||W===B$||W===P$||W===A$)if(H=$.get("WEBGL_compressed_texture_pvrtc"),H!==null){if(W===w$)return H.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(W===B$)return H.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(W===P$)return H.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(W===A$)return H.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(W===T$||W===S$||W===_$)if(H=$.get("WEBGL_compressed_texture_etc"),H!==null){if(W===T$||W===S$)return Y===Q8?H.COMPRESSED_SRGB8_ETC2:H.COMPRESSED_RGB8_ETC2;if(W===_$)return Y===Q8?H.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:H.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(W===j$||W===f$||W===x$||W===y$||W===h$||W===v$||W===b$||W===g$||W===p$||W===u$||W===m$||W===l$||W===d$||W===c$)if(H=$.get("WEBGL_compressed_texture_astc"),H!==null){if(W===j$)return Y===Q8?H.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:H.COMPRESSED_RGBA_ASTC_4x4_KHR;if(W===f$)return Y===Q8?H.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:H.COMPRESSED_RGBA_ASTC_5x4_KHR;if(W===x$)return Y===Q8?H.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:H.COMPRESSED_RGBA_ASTC_5x5_KHR;if(W===y$)return Y===Q8?H.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:H.COMPRESSED_RGBA_ASTC_6x5_KHR;if(W===h$)return Y===Q8?H.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:H.COMPRESSED_RGBA_ASTC_6x6_KHR;if(W===v$)return Y===Q8?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:H.COMPRESSED_RGBA_ASTC_8x5_KHR;if(W===b$)return Y===Q8?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:H.COMPRESSED_RGBA_ASTC_8x6_KHR;if(W===g$)return Y===Q8?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:H.COMPRESSED_RGBA_ASTC_8x8_KHR;if(W===p$)return Y===Q8?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:H.COMPRESSED_RGBA_ASTC_10x5_KHR;if(W===u$)return Y===Q8?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:H.COMPRESSED_RGBA_ASTC_10x6_KHR;if(W===m$)return Y===Q8?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:H.COMPRESSED_RGBA_ASTC_10x8_KHR;if(W===l$)return Y===Q8?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:H.COMPRESSED_RGBA_ASTC_10x10_KHR;if(W===d$)return Y===Q8?H.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:H.COMPRESSED_RGBA_ASTC_12x10_KHR;if(W===c$)return Y===Q8?H.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:H.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(W===YJ||W===n$||W===s$)if(H=$.get("EXT_texture_compression_bptc"),H!==null){if(W===YJ)return Y===Q8?H.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:H.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(W===n$)return H.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(W===s$)return H.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(W===zQ||W===i$||W===o$||W===a$)if(H=$.get("EXT_texture_compression_rgtc"),H!==null){if(W===YJ)return H.COMPRESSED_RED_RGTC1_EXT;if(W===i$)return H.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(W===o$)return H.COMPRESSED_RED_GREEN_RGTC2_EXT;if(W===a$)return H.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(W===P6)return J.UNSIGNED_INT_24_8;return J[W]!==void 0?J[W]:null}return{convert:Z}}var FG={type:"move"};class AJ{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new Z9,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new Z9,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new _,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new _;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new Z9,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new _,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new _;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let $=this._hand;if($)for(let Z of J.hand.values())this._getHandJoint($,Z)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,$,Z){let W=null,Q=null,H=null,Y=this._targetRay,X=this._grip,K=this._hand;if(J&&$.session.visibilityState!=="visible-blurred"){if(K&&J.hand){H=!0;for(let R of J.hand.values()){let D=$.getJointPose(R,Z),q=this._getHandJoint(K,R);if(D!==null)q.matrix.fromArray(D.transform.matrix),q.matrix.decompose(q.position,q.rotation,q.scale),q.matrixWorldNeedsUpdate=!0,q.jointRadius=D.radius;q.visible=D!==null}let U=K.joints["index-finger-tip"],G=K.joints["thumb-tip"],F=U.position.distanceTo(G.position),N=0.02,E=0.005;if(K.inputState.pinching&&F>N+E)K.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!K.inputState.pinching&&F<=N-E)K.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(X!==null&&J.gripSpace){if(Q=$.getPose(J.gripSpace,Z),Q!==null){if(X.matrix.fromArray(Q.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,Q.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(Q.linearVelocity);else X.hasLinearVelocity=!1;if(Q.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(Q.angularVelocity);else X.hasAngularVelocity=!1}}if(Y!==null){if(W=$.getPose(J.targetRaySpace,Z),W===null&&Q!==null)W=Q;if(W!==null){if(Y.matrix.fromArray(W.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,W.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(W.linearVelocity);else Y.hasLinearVelocity=!1;if(W.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(W.angularVelocity);else Y.hasAngularVelocity=!1;this.dispatchEvent(FG)}}}if(Y!==null)Y.visible=W!==null;if(X!==null)X.visible=Q!==null;if(K!==null)K.visible=H!==null;return this}_getHandJoint(J,$){if(J.joints[$.jointName]===void 0){let Z=new Z9;Z.matrixAutoUpdate=!1,Z.visible=!1,J.joints[$.jointName]=Z,J.add(Z)}return J.joints[$.jointName]}}var NG=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qG=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class CH{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,$,Z){if(this.texture===null){let W=new I8,Q=J.properties.get(W);if(Q.__webglTexture=$.texture,$.depthNear!==Z.depthNear||$.depthFar!==Z.depthFar)this.depthNear=$.depthNear,this.depthFar=$.depthFar;this.texture=W}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let $=J.cameras[0].viewport,Z=new $9({vertexShader:NG,fragmentShader:qG,uniforms:{depthColor:{value:this.texture},depthWidth:{value:$.z},depthHeight:{value:$.w}}});this.mesh=new H8(new Y7(20,20),Z)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class IH extends N9{constructor(J,$){super();let Z=this,W=null,Q=1,H=null,Y="local-floor",X=1,K=null,U=null,G=null,F=null,N=null,E=null,R=new CH,D=$.getContextAttributes(),q=null,O=null,V=[],L=[],A=new A0,T=null,I=new C8;I.viewport=new $8;let B=new C8;B.viewport=new $8;let b=[I,B],z=new zZ,C=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(n){let Z0=V[n];if(Z0===void 0)Z0=new AJ,V[n]=Z0;return Z0.getTargetRaySpace()},this.getControllerGrip=function(n){let Z0=V[n];if(Z0===void 0)Z0=new AJ,V[n]=Z0;return Z0.getGripSpace()},this.getHand=function(n){let Z0=V[n];if(Z0===void 0)Z0=new AJ,V[n]=Z0;return Z0.getHandSpace()};function h(n){let Z0=L.indexOf(n.inputSource);if(Z0===-1)return;let D0=V[Z0];if(D0!==void 0)D0.update(n.inputSource,n.frame,K||H),D0.dispatchEvent({type:n.type,data:n.inputSource})}function u(){W.removeEventListener("select",h),W.removeEventListener("selectstart",h),W.removeEventListener("selectend",h),W.removeEventListener("squeeze",h),W.removeEventListener("squeezestart",h),W.removeEventListener("squeezeend",h),W.removeEventListener("end",u),W.removeEventListener("inputsourceschange",l);for(let n=0;n<V.length;n++){let Z0=L[n];if(Z0===null)continue;L[n]=null,V[n].disconnect(Z0)}C=null,S=null,R.reset(),J.setRenderTarget(q),N=null,F=null,G=null,W=null,O=null,g0.stop(),Z.isPresenting=!1,J.setPixelRatio(T),J.setSize(A.width,A.height,!1),Z.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(n){if(Q=n,Z.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(n){if(Y=n,Z.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return K||H},this.setReferenceSpace=function(n){K=n},this.getBaseLayer=function(){return F!==null?F:N},this.getBinding=function(){return G},this.getFrame=function(){return E},this.getSession=function(){return W},this.setSession=async function(n){if(W=n,W!==null){if(q=J.getRenderTarget(),W.addEventListener("select",h),W.addEventListener("selectstart",h),W.addEventListener("selectend",h),W.addEventListener("squeeze",h),W.addEventListener("squeezestart",h),W.addEventListener("squeezeend",h),W.addEventListener("end",u),W.addEventListener("inputsourceschange",l),D.xrCompatible!==!0)await $.makeXRCompatible();if(T=J.getPixelRatio(),J.getSize(A),!(W.enabledFeatures!==void 0&&W.enabledFeatures.includes("layers"))){let D0={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:Q};N=new XRWebGLLayer(W,$,D0),W.updateRenderState({baseLayer:N}),J.setPixelRatio(1),J.setSize(N.framebufferWidth,N.framebufferHeight,!1),O=new q9(N.framebufferWidth,N.framebufferHeight,{format:e8,type:T9,colorSpace:J.outputColorSpace,stencilBuffer:D.stencil})}else{let D0=null,M0=null,Q0=null;if(D.depth)Q0=D.stencil?$.DEPTH24_STENCIL8:$.DEPTH_COMPONENT24,D0=D.stencil?$7:$J,M0=D.stencil?P6:B6;let z0={colorFormat:$.RGBA8,depthFormat:Q0,scaleFactor:Q};G=new XRWebGLBinding(W,$),F=G.createProjectionLayer(z0),W.updateRenderState({layers:[F]}),J.setPixelRatio(1),J.setSize(F.textureWidth,F.textureHeight,!1),O=new q9(F.textureWidth,F.textureHeight,{format:e8,type:T9,depthTexture:new DJ(F.textureWidth,F.textureHeight,M0,void 0,void 0,void 0,void 0,void 0,void 0,D0),stencilBuffer:D.stencil,colorSpace:J.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:F.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(X),K=null,H=await W.requestReferenceSpace(Y),g0.setContext(W),g0.start(),Z.isPresenting=!0,Z.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(W!==null)return W.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function l(n){for(let Z0=0;Z0<n.removed.length;Z0++){let D0=n.removed[Z0],M0=L.indexOf(D0);if(M0>=0)L[M0]=null,V[M0].disconnect(D0)}for(let Z0=0;Z0<n.added.length;Z0++){let D0=n.added[Z0],M0=L.indexOf(D0);if(M0===-1){for(let z0=0;z0<V.length;z0++)if(z0>=L.length){L.push(D0),M0=z0;break}else if(L[z0]===null){L[z0]=D0,M0=z0;break}if(M0===-1)break}let Q0=V[M0];if(Q0)Q0.connect(D0)}}let o=new _,d=new _;function t(n,Z0,D0){o.setFromMatrixPosition(Z0.matrixWorld),d.setFromMatrixPosition(D0.matrixWorld);let M0=o.distanceTo(d),Q0=Z0.projectionMatrix.elements,z0=D0.projectionMatrix.elements,p=Q0[14]/(Q0[10]-1),T0=Q0[14]/(Q0[10]+1),n0=(Q0[9]+1)/Q0[5],I0=(Q0[9]-1)/Q0[5],P=(Q0[8]-1)/Q0[0],m0=(z0[8]+1)/z0[0],P0=p*P,S0=p*m0,Y0=M0/(-P+m0),o0=Y0*-P;if(Z0.matrixWorld.decompose(n.position,n.quaternion,n.scale),n.translateX(o0),n.translateZ(Y0),n.matrixWorld.compose(n.position,n.quaternion,n.scale),n.matrixWorldInverse.copy(n.matrixWorld).invert(),Q0[10]===-1)n.projectionMatrix.copy(Z0.projectionMatrix),n.projectionMatrixInverse.copy(Z0.projectionMatrixInverse);else{let k0=p+Y0,B0=T0+Y0,w=P0-o0,k=S0+(M0-o0),y=n0*T0/B0*k0,a=I0*T0/B0*k0;n.projectionMatrix.makePerspective(w,k,y,a,k0,B0),n.projectionMatrixInverse.copy(n.projectionMatrix).invert()}}function m(n,Z0){if(Z0===null)n.matrixWorld.copy(n.matrix);else n.matrixWorld.multiplyMatrices(Z0.matrixWorld,n.matrix);n.matrixWorldInverse.copy(n.matrixWorld).invert()}this.updateCamera=function(n){if(W===null)return;let{near:Z0,far:D0}=n;if(R.texture!==null){if(R.depthNear>0)Z0=R.depthNear;if(R.depthFar>0)D0=R.depthFar}if(z.near=B.near=I.near=Z0,z.far=B.far=I.far=D0,C!==z.near||S!==z.far)W.updateRenderState({depthNear:z.near,depthFar:z.far}),C=z.near,S=z.far;I.layers.mask=n.layers.mask|2,B.layers.mask=n.layers.mask|4,z.layers.mask=I.layers.mask|B.layers.mask;let M0=n.parent,Q0=z.cameras;m(z,M0);for(let z0=0;z0<Q0.length;z0++)m(Q0[z0],M0);if(Q0.length===2)t(z,I,B);else z.projectionMatrix.copy(I.projectionMatrix);X0(n,z,M0)};function X0(n,Z0,D0){if(D0===null)n.matrix.copy(Z0.matrixWorld);else n.matrix.copy(D0.matrixWorld),n.matrix.invert(),n.matrix.multiply(Z0.matrixWorld);if(n.matrix.decompose(n.position,n.quaternion,n.scale),n.updateMatrixWorld(!0),n.projectionMatrix.copy(Z0.projectionMatrix),n.projectionMatrixInverse.copy(Z0.projectionMatrixInverse),n.isPerspectiveCamera)n.fov=M6*2*Math.atan(1/n.projectionMatrix.elements[5]),n.zoom=1}this.getCamera=function(){return z},this.getFoveation=function(){if(F===null&&N===null)return;return X},this.setFoveation=function(n){if(X=n,F!==null)F.fixedFoveation=n;if(N!==null&&N.fixedFoveation!==void 0)N.fixedFoveation=n},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(z)};let J0=null;function w0(n,Z0){if(U=Z0.getViewerPose(K||H),E=Z0,U!==null){let D0=U.views;if(N!==null)J.setRenderTargetFramebuffer(O,N.framebuffer),J.setRenderTarget(O);let M0=!1;if(D0.length!==z.cameras.length)z.cameras.length=0,M0=!0;for(let z0=0;z0<D0.length;z0++){let p=D0[z0],T0=null;if(N!==null)T0=N.getViewport(p);else{let I0=G.getViewSubImage(F,p);if(T0=I0.viewport,z0===0)J.setRenderTargetTextures(O,I0.colorTexture,F.ignoreDepthValues?void 0:I0.depthStencilTexture),J.setRenderTarget(O)}let n0=b[z0];if(n0===void 0)n0=new C8,n0.layers.enable(z0),n0.viewport=new $8,b[z0]=n0;if(n0.matrix.fromArray(p.transform.matrix),n0.matrix.decompose(n0.position,n0.quaternion,n0.scale),n0.projectionMatrix.fromArray(p.projectionMatrix),n0.projectionMatrixInverse.copy(n0.projectionMatrix).invert(),n0.viewport.set(T0.x,T0.y,T0.width,T0.height),z0===0)z.matrix.copy(n0.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale);if(M0===!0)z.cameras.push(n0)}let Q0=W.enabledFeatures;if(Q0&&Q0.includes("depth-sensing")){let z0=G.getDepthInformation(D0[0]);if(z0&&z0.isValid&&z0.texture)R.init(J,z0,W.renderState)}}for(let D0=0;D0<V.length;D0++){let M0=L[D0],Q0=V[D0];if(M0!==null&&Q0!==void 0)Q0.update(M0,Z0,K||H)}if(J0)J0(n,Z0);if(Z0.detectedPlanes)Z.dispatchEvent({type:"planesdetected",data:Z0});E=null}let g0=new NH;g0.setAnimationLoop(w0),this.setAnimationLoop=function(n){J0=n},this.dispose=function(){}}}var e9=new m8,OG=new W8;function EG(J,$){function Z(q,O){if(q.matrixAutoUpdate===!0)q.updateMatrix();O.value.copy(q.matrix)}function W(q,O){if(O.color.getRGB(q.fogColor.value,YZ(J)),O.isFog)q.fogNear.value=O.near,q.fogFar.value=O.far;else if(O.isFogExp2)q.fogDensity.value=O.density}function Q(q,O,V,L,A){if(O.isMeshBasicMaterial)H(q,O);else if(O.isMeshLambertMaterial)H(q,O);else if(O.isMeshToonMaterial)H(q,O),F(q,O);else if(O.isMeshPhongMaterial)H(q,O),G(q,O);else if(O.isMeshStandardMaterial){if(H(q,O),N(q,O),O.isMeshPhysicalMaterial)E(q,O,A)}else if(O.isMeshMatcapMaterial)H(q,O),R(q,O);else if(O.isMeshDepthMaterial)H(q,O);else if(O.isMeshDistanceMaterial)H(q,O),D(q,O);else if(O.isMeshNormalMaterial)H(q,O);else if(O.isLineBasicMaterial){if(Y(q,O),O.isLineDashedMaterial)X(q,O)}else if(O.isPointsMaterial)K(q,O,V,L);else if(O.isSpriteMaterial)U(q,O);else if(O.isShadowMaterial)q.color.value.copy(O.color),q.opacity.value=O.opacity;else if(O.isShaderMaterial)O.uniformsNeedUpdate=!1}function H(q,O){if(q.opacity.value=O.opacity,O.color)q.diffuse.value.copy(O.color);if(O.emissive)q.emissive.value.copy(O.emissive).multiplyScalar(O.emissiveIntensity);if(O.map)q.map.value=O.map,Z(O.map,q.mapTransform);if(O.alphaMap)q.alphaMap.value=O.alphaMap,Z(O.alphaMap,q.alphaMapTransform);if(O.bumpMap){if(q.bumpMap.value=O.bumpMap,Z(O.bumpMap,q.bumpMapTransform),q.bumpScale.value=O.bumpScale,O.side===T8)q.bumpScale.value*=-1}if(O.normalMap){if(q.normalMap.value=O.normalMap,Z(O.normalMap,q.normalMapTransform),q.normalScale.value.copy(O.normalScale),O.side===T8)q.normalScale.value.negate()}if(O.displacementMap)q.displacementMap.value=O.displacementMap,Z(O.displacementMap,q.displacementMapTransform),q.displacementScale.value=O.displacementScale,q.displacementBias.value=O.displacementBias;if(O.emissiveMap)q.emissiveMap.value=O.emissiveMap,Z(O.emissiveMap,q.emissiveMapTransform);if(O.specularMap)q.specularMap.value=O.specularMap,Z(O.specularMap,q.specularMapTransform);if(O.alphaTest>0)q.alphaTest.value=O.alphaTest;let V=$.get(O),L=V.envMap,A=V.envMapRotation;if(L){if(q.envMap.value=L,e9.copy(A),e9.x*=-1,e9.y*=-1,e9.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1)e9.y*=-1,e9.z*=-1;q.envMapRotation.value.setFromMatrix4(OG.makeRotationFromEuler(e9)),q.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,q.reflectivity.value=O.reflectivity,q.ior.value=O.ior,q.refractionRatio.value=O.refractionRatio}if(O.lightMap)q.lightMap.value=O.lightMap,q.lightMapIntensity.value=O.lightMapIntensity,Z(O.lightMap,q.lightMapTransform);if(O.aoMap)q.aoMap.value=O.aoMap,q.aoMapIntensity.value=O.aoMapIntensity,Z(O.aoMap,q.aoMapTransform)}function Y(q,O){if(q.diffuse.value.copy(O.color),q.opacity.value=O.opacity,O.map)q.map.value=O.map,Z(O.map,q.mapTransform)}function X(q,O){q.dashSize.value=O.dashSize,q.totalSize.value=O.dashSize+O.gapSize,q.scale.value=O.scale}function K(q,O,V,L){if(q.diffuse.value.copy(O.color),q.opacity.value=O.opacity,q.size.value=O.size*V,q.scale.value=L*0.5,O.map)q.map.value=O.map,Z(O.map,q.uvTransform);if(O.alphaMap)q.alphaMap.value=O.alphaMap,Z(O.alphaMap,q.alphaMapTransform);if(O.alphaTest>0)q.alphaTest.value=O.alphaTest}function U(q,O){if(q.diffuse.value.copy(O.color),q.opacity.value=O.opacity,q.rotation.value=O.rotation,O.map)q.map.value=O.map,Z(O.map,q.mapTransform);if(O.alphaMap)q.alphaMap.value=O.alphaMap,Z(O.alphaMap,q.alphaMapTransform);if(O.alphaTest>0)q.alphaTest.value=O.alphaTest}function G(q,O){q.specular.value.copy(O.specular),q.shininess.value=Math.max(O.shininess,0.0001)}function F(q,O){if(O.gradientMap)q.gradientMap.value=O.gradientMap}function N(q,O){if(q.metalness.value=O.metalness,O.metalnessMap)q.metalnessMap.value=O.metalnessMap,Z(O.metalnessMap,q.metalnessMapTransform);if(q.roughness.value=O.roughness,O.roughnessMap)q.roughnessMap.value=O.roughnessMap,Z(O.roughnessMap,q.roughnessMapTransform);if(O.envMap)q.envMapIntensity.value=O.envMapIntensity}function E(q,O,V){if(q.ior.value=O.ior,O.sheen>0){if(q.sheenColor.value.copy(O.sheenColor).multiplyScalar(O.sheen),q.sheenRoughness.value=O.sheenRoughness,O.sheenColorMap)q.sheenColorMap.value=O.sheenColorMap,Z(O.sheenColorMap,q.sheenColorMapTransform);if(O.sheenRoughnessMap)q.sheenRoughnessMap.value=O.sheenRoughnessMap,Z(O.sheenRoughnessMap,q.sheenRoughnessMapTransform)}if(O.clearcoat>0){if(q.clearcoat.value=O.clearcoat,q.clearcoatRoughness.value=O.clearcoatRoughness,O.clearcoatMap)q.clearcoatMap.value=O.clearcoatMap,Z(O.clearcoatMap,q.clearcoatMapTransform);if(O.clearcoatRoughnessMap)q.clearcoatRoughnessMap.value=O.clearcoatRoughnessMap,Z(O.clearcoatRoughnessMap,q.clearcoatRoughnessMapTransform);if(O.clearcoatNormalMap){if(q.clearcoatNormalMap.value=O.clearcoatNormalMap,Z(O.clearcoatNormalMap,q.clearcoatNormalMapTransform),q.clearcoatNormalScale.value.copy(O.clearcoatNormalScale),O.side===T8)q.clearcoatNormalScale.value.negate()}}if(O.dispersion>0)q.dispersion.value=O.dispersion;if(O.iridescence>0){if(q.iridescence.value=O.iridescence,q.iridescenceIOR.value=O.iridescenceIOR,q.iridescenceThicknessMinimum.value=O.iridescenceThicknessRange[0],q.iridescenceThicknessMaximum.value=O.iridescenceThicknessRange[1],O.iridescenceMap)q.iridescenceMap.value=O.iridescenceMap,Z(O.iridescenceMap,q.iridescenceMapTransform);if(O.iridescenceThicknessMap)q.iridescenceThicknessMap.value=O.iridescenceThicknessMap,Z(O.iridescenceThicknessMap,q.iridescenceThicknessMapTransform)}if(O.transmission>0){if(q.transmission.value=O.transmission,q.transmissionSamplerMap.value=V.texture,q.transmissionSamplerSize.value.set(V.width,V.height),O.transmissionMap)q.transmissionMap.value=O.transmissionMap,Z(O.transmissionMap,q.transmissionMapTransform);if(q.thickness.value=O.thickness,O.thicknessMap)q.thicknessMap.value=O.thicknessMap,Z(O.thicknessMap,q.thicknessMapTransform);q.attenuationDistance.value=O.attenuationDistance,q.attenuationColor.value.copy(O.attenuationColor)}if(O.anisotropy>0){if(q.anisotropyVector.value.set(O.anisotropy*Math.cos(O.anisotropyRotation),O.anisotropy*Math.sin(O.anisotropyRotation)),O.anisotropyMap)q.anisotropyMap.value=O.anisotropyMap,Z(O.anisotropyMap,q.anisotropyMapTransform)}if(q.specularIntensity.value=O.specularIntensity,q.specularColor.value.copy(O.specularColor),O.specularColorMap)q.specularColorMap.value=O.specularColorMap,Z(O.specularColorMap,q.specularColorMapTransform);if(O.specularIntensityMap)q.specularIntensityMap.value=O.specularIntensityMap,Z(O.specularIntensityMap,q.specularIntensityMapTransform)}function R(q,O){if(O.matcap)q.matcap.value=O.matcap}function D(q,O){let V=$.get(O).light;q.referencePosition.value.setFromMatrixPosition(V.matrixWorld),q.nearDistance.value=V.shadow.camera.near,q.farDistance.value=V.shadow.camera.far}return{refreshFogUniforms:W,refreshMaterialUniforms:Q}}function RG(J,$,Z,W){let Q={},H={},Y=[],X=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function K(V,L){let A=L.program;W.uniformBlockBinding(V,A)}function U(V,L){let A=Q[V.id];if(A===void 0)R(V),A=G(V),Q[V.id]=A,V.addEventListener("dispose",q);let T=L.program;W.updateUBOMapping(V,T);let I=$.render.frame;if(H[V.id]!==I)N(V),H[V.id]=I}function G(V){let L=F();V.__bindingPointIndex=L;let A=J.createBuffer(),T=V.__size,I=V.usage;return J.bindBuffer(J.UNIFORM_BUFFER,A),J.bufferData(J.UNIFORM_BUFFER,T,I),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,L,A),A}function F(){for(let V=0;V<X;V++)if(Y.indexOf(V)===-1)return Y.push(V),V;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function N(V){let L=Q[V.id],A=V.uniforms,T=V.__cache;J.bindBuffer(J.UNIFORM_BUFFER,L);for(let I=0,B=A.length;I<B;I++){let b=Array.isArray(A[I])?A[I]:[A[I]];for(let z=0,C=b.length;z<C;z++){let S=b[z];if(E(S,I,z,T)===!0){let h=S.__offset,u=Array.isArray(S.value)?S.value:[S.value],l=0;for(let o=0;o<u.length;o++){let d=u[o],t=D(d);if(typeof d==="number"||typeof d==="boolean")S.__data[0]=d,J.bufferSubData(J.UNIFORM_BUFFER,h+l,S.__data);else if(d.isMatrix3)S.__data[0]=d.elements[0],S.__data[1]=d.elements[1],S.__data[2]=d.elements[2],S.__data[3]=0,S.__data[4]=d.elements[3],S.__data[5]=d.elements[4],S.__data[6]=d.elements[5],S.__data[7]=0,S.__data[8]=d.elements[6],S.__data[9]=d.elements[7],S.__data[10]=d.elements[8],S.__data[11]=0;else d.toArray(S.__data,l),l+=t.storage/Float32Array.BYTES_PER_ELEMENT}J.bufferSubData(J.UNIFORM_BUFFER,h,S.__data)}}}J.bindBuffer(J.UNIFORM_BUFFER,null)}function E(V,L,A,T){let I=V.value,B=L+"_"+A;if(T[B]===void 0){if(typeof I==="number"||typeof I==="boolean")T[B]=I;else T[B]=I.clone();return!0}else{let b=T[B];if(typeof I==="number"||typeof I==="boolean"){if(b!==I)return T[B]=I,!0}else if(b.equals(I)===!1)return b.copy(I),!0}return!1}function R(V){let L=V.uniforms,A=0,T=16;for(let B=0,b=L.length;B<b;B++){let z=Array.isArray(L[B])?L[B]:[L[B]];for(let C=0,S=z.length;C<S;C++){let h=z[C],u=Array.isArray(h.value)?h.value:[h.value];for(let l=0,o=u.length;l<o;l++){let d=u[l],t=D(d),m=A%T,X0=m%t.boundary,J0=m+X0;if(A+=X0,J0!==0&&T-J0<t.storage)A+=T-J0;h.__data=new Float32Array(t.storage/Float32Array.BYTES_PER_ELEMENT),h.__offset=A,A+=t.storage}}}let I=A%T;if(I>0)A+=T-I;return V.__size=A,V.__cache={},this}function D(V){let L={boundary:0,storage:0};if(typeof V==="number"||typeof V==="boolean")L.boundary=4,L.storage=4;else if(V.isVector2)L.boundary=8,L.storage=8;else if(V.isVector3||V.isColor)L.boundary=16,L.storage=12;else if(V.isVector4)L.boundary=16,L.storage=16;else if(V.isMatrix3)L.boundary=48,L.storage=48;else if(V.isMatrix4)L.boundary=64,L.storage=64;else if(V.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",V);return L}function q(V){let L=V.target;L.removeEventListener("dispose",q);let A=Y.indexOf(L.__bindingPointIndex);Y.splice(A,1),J.deleteBuffer(Q[L.id]),delete Q[L.id],delete H[L.id]}function O(){for(let V in Q)J.deleteBuffer(Q[V]);Y=[],Q={},H={}}return{bind:K,update:U,dispose:O}}class xZ{constructor(J={}){let{canvas:$=fQ(),context:Z=null,depth:W=!0,stencil:Q=!1,alpha:H=!1,antialias:Y=!1,premultipliedAlpha:X=!0,preserveDrawingBuffer:K=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:G=!1,reverseDepthBuffer:F=!1}=J;this.isWebGLRenderer=!0;let N;if(Z!==null){if(typeof WebGLRenderingContext<"u"&&Z instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");N=Z.getContextAttributes().alpha}else N=H;let E=new Uint32Array(4),R=new Int32Array(4),D=null,q=null,O=[],V=[];this.domElement=$,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=A6,this.toneMapping=F9,this.toneMappingExposure=1;let L=this,A=!1,T=0,I=0,B=null,b=-1,z=null,C=new $8,S=new $8,h=null,u=new _0(0),l=0,o=$.width,d=$.height,t=1,m=null,X0=null,J0=new $8(0,0,o,d),w0=new $8(0,0,o,d),g0=!1,n=new W7,Z0=!1,D0=!1;this.transmissionResolutionScale=1;let M0=new W8,Q0=new W8,z0=new _,p=new $8,T0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},n0=!1;function I0(){return B===null?t:1}let P=Z;function m0(M,f){return $.getContext(M,f)}try{let M={alpha:!0,depth:W,stencil:Q,antialias:Y,premultipliedAlpha:X,preserveDrawingBuffer:K,powerPreference:U,failIfMajorPerformanceCaveat:G};if("setAttribute"in $)$.setAttribute("data-engine",`three.js r${TW}`);if($.addEventListener("webglcontextlost",s,!1),$.addEventListener("webglcontextrestored",i,!1),$.addEventListener("webglcontextcreationerror",F0,!1),P===null){if(P=m0("webgl2",M),P===null)if(m0("webgl2"))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let P0,S0,Y0,o0,k0,B0,w,k,y,a,r,c,V0,K0,O0,v0,W0,N0,c0,j0,E0,b0,l0,X8;function j(){if(P0=new fU(P),P0.init(),b0=new GG(P,P0),S0=new PU(P,P0,J,b0),Y0=new KG(P,P0),S0.reverseDepthBuffer&&F)Y0.buffers.depth.setReversed(!0);o0=new hU(P),k0=new o1,B0=new UG(P,P0,Y0,k0,S0,b0,o0),w=new TU(L),k=new jU(L),y=new lY(P),l0=new wU(P,y),a=new xU(P,y,o0,l0),r=new bU(P,a,y,o0),c0=new vU(P,S0,B0),v0=new AU(k0),c=new i1(L,w,k,P0,S0,l0,v0),V0=new EG(L,k0),K0=new r1,O0=new WG(P0),N0=new VU(L,w,k,Y0,r,N,X),W0=new YG(L,r,S0),X8=new RG(P,o0,S0,Y0),j0=new BU(P,P0,o0),E0=new yU(P,P0,o0),o0.programs=c.programs,L.capabilities=S0,L.extensions=P0,L.properties=k0,L.renderLists=K0,L.shadowMap=W0,L.state=Y0,L.info=o0}j();let $0=new IH(L,P);this.xr=$0,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let M=P0.get("WEBGL_lose_context");if(M)M.loseContext()},this.forceContextRestore=function(){let M=P0.get("WEBGL_lose_context");if(M)M.restoreContext()},this.getPixelRatio=function(){return t},this.setPixelRatio=function(M){if(M===void 0)return;t=M,this.setSize(o,d,!1)},this.getSize=function(M){return M.set(o,d)},this.setSize=function(M,f,v=!0){if($0.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(o=M,d=f,$.width=Math.floor(M*t),$.height=Math.floor(f*t),v===!0)$.style.width=M+"px",$.style.height=f+"px";this.setViewport(0,0,M,f)},this.getDrawingBufferSize=function(M){return M.set(o*t,d*t).floor()},this.setDrawingBufferSize=function(M,f,v){o=M,d=f,t=v,$.width=Math.floor(M*v),$.height=Math.floor(f*v),this.setViewport(0,0,M,f)},this.getCurrentViewport=function(M){return M.copy(C)},this.getViewport=function(M){return M.copy(J0)},this.setViewport=function(M,f,v,g){if(M.isVector4)J0.set(M.x,M.y,M.z,M.w);else J0.set(M,f,v,g);Y0.viewport(C.copy(J0).multiplyScalar(t).round())},this.getScissor=function(M){return M.copy(w0)},this.setScissor=function(M,f,v,g){if(M.isVector4)w0.set(M.x,M.y,M.z,M.w);else w0.set(M,f,v,g);Y0.scissor(S.copy(w0).multiplyScalar(t).round())},this.getScissorTest=function(){return g0},this.setScissorTest=function(M){Y0.setScissorTest(g0=M)},this.setOpaqueSort=function(M){m=M},this.setTransparentSort=function(M){X0=M},this.getClearColor=function(M){return M.copy(N0.getClearColor())},this.setClearColor=function(){N0.setClearColor.apply(N0,arguments)},this.getClearAlpha=function(){return N0.getClearAlpha()},this.setClearAlpha=function(){N0.setClearAlpha.apply(N0,arguments)},this.clear=function(M=!0,f=!0,v=!0){let g=0;if(M){let x=!1;if(B!==null){let e=B.texture.format;x=e===V$||e===I$||e===C$}if(x){let e=B.texture.type,U0=e===T9||e===B6||e===e6||e===P6||e===L$||e===z$,q0=N0.getClearColor(),R0=N0.getClearAlpha(),f0=q0.r,x0=q0.g,L0=q0.b;if(U0)E[0]=f0,E[1]=x0,E[2]=L0,E[3]=R0,P.clearBufferuiv(P.COLOR,0,E);else R[0]=f0,R[1]=x0,R[2]=L0,R[3]=R0,P.clearBufferiv(P.COLOR,0,R)}else g|=P.COLOR_BUFFER_BIT}if(f)g|=P.DEPTH_BUFFER_BIT;if(v)g|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);P.clear(g)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){$.removeEventListener("webglcontextlost",s,!1),$.removeEventListener("webglcontextrestored",i,!1),$.removeEventListener("webglcontextcreationerror",F0,!1),N0.dispose(),K0.dispose(),O0.dispose(),k0.dispose(),w.dispose(),k.dispose(),r.dispose(),l0.dispose(),X8.dispose(),c.dispose(),$0.dispose(),$0.removeEventListener("sessionstart",r8),$0.removeEventListener("sessionend",rZ),h9.stop()};function s(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function i(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let M=o0.autoReset,f=W0.enabled,v=W0.autoUpdate,g=W0.needsUpdate,x=W0.type;j(),o0.autoReset=M,W0.enabled=f,W0.autoUpdate=v,W0.needsUpdate=g,W0.type=x}function F0(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function G0(M){let f=M.target;f.removeEventListener("dispose",G0),p0(f)}function p0(M){K8(M),k0.remove(M)}function K8(M){let f=k0.get(M).programs;if(f!==void 0){if(f.forEach(function(v){c.releaseProgram(v)}),M.isShaderMaterial)c.releaseShaderCache(M)}}this.renderBufferDirect=function(M,f,v,g,x,e){if(f===null)f=T0;let U0=x.isMesh&&x.matrixWorld.determinant()<0,q0=sH(M,f,v,g,x);Y0.setMaterial(g,U0);let R0=v.index,f0=1;if(g.wireframe===!0){if(R0=a.getWireframeAttribute(v),R0===void 0)return;f0=2}let x0=v.drawRange,L0=v.attributes.position,s0=x0.start*f0,t0=(x0.start+x0.count)*f0;if(e!==null)s0=Math.max(s0,e.start*f0),t0=Math.min(t0,(e.start+e.count)*f0);if(R0!==null)s0=Math.max(s0,0),t0=Math.min(t0,R0.count);else if(L0!==void 0&&L0!==null)s0=Math.max(s0,0),t0=Math.min(t0,L0.count);let F8=t0-s0;if(F8<0||F8===1/0)return;l0.setup(x,g,q0,v,R0);let U8,a0=j0;if(R0!==null)U8=y.get(R0),a0=E0,a0.setIndex(U8);if(x.isMesh)if(g.wireframe===!0)Y0.setLineWidth(g.wireframeLinewidth*I0()),a0.setMode(P.LINES);else a0.setMode(P.TRIANGLES);else if(x.isLine){let C0=g.linewidth;if(C0===void 0)C0=1;if(Y0.setLineWidth(C0*I0()),x.isLineSegments)a0.setMode(P.LINES);else if(x.isLineLoop)a0.setMode(P.LINE_LOOP);else a0.setMode(P.LINE_STRIP)}else if(x.isPoints)a0.setMode(P.POINTS);else if(x.isSprite)a0.setMode(P.TRIANGLES);if(x.isBatchedMesh)if(x._multiDrawInstances!==null)a0.renderMultiDrawInstances(x._multiDrawStarts,x._multiDrawCounts,x._multiDrawCount,x._multiDrawInstances);else if(!P0.get("WEBGL_multi_draw")){let{_multiDrawStarts:C0,_multiDrawCounts:M8,_multiDrawCount:e0}=x,d8=R0?y.get(R0).bytesPerElement:1,Q6=k0.get(g).currentProgram.getUniforms();for(let f8=0;f8<e0;f8++)Q6.setValue(P,"_gl_DrawID",f8),a0.render(C0[f8]/d8,M8[f8])}else a0.renderMultiDraw(x._multiDrawStarts,x._multiDrawCounts,x._multiDrawCount);else if(x.isInstancedMesh)a0.renderInstances(s0,F8,x.count);else if(v.isInstancedBufferGeometry){let C0=v._maxInstanceCount!==void 0?v._maxInstanceCount:1/0,M8=Math.min(v.instanceCount,C0);a0.renderInstances(s0,F8,M8)}else a0.render(s0,F8)};function k8(M,f,v){if(M.transparent===!0&&M.side===l8&&M.forceSinglePass===!1)M.side=T8,M.needsUpdate=!0,M7(M,f,v),M.side=z6,M.needsUpdate=!0,M7(M,f,v),M.side=l8;else M7(M,f,v)}this.compile=function(M,f,v=null){if(v===null)v=M;if(q=O0.get(v),q.init(f),V.push(q),v.traverseVisible(function(x){if(x.isLight&&x.layers.test(f.layers)){if(q.pushLight(x),x.castShadow)q.pushShadow(x)}}),M!==v)M.traverseVisible(function(x){if(x.isLight&&x.layers.test(f.layers)){if(q.pushLight(x),x.castShadow)q.pushShadow(x)}});q.setupLights();let g=new Set;return M.traverse(function(x){if(!(x.isMesh||x.isPoints||x.isLine||x.isSprite))return;let e=x.material;if(e)if(Array.isArray(e))for(let U0=0;U0<e.length;U0++){let q0=e[U0];k8(q0,v,x),g.add(q0)}else k8(e,v,x),g.add(e)}),V.pop(),q=null,g},this.compileAsync=function(M,f,v=null){let g=this.compile(M,f,v);return new Promise((x)=>{function e(){if(g.forEach(function(U0){if(k0.get(U0).currentProgram.isReady())g.delete(U0)}),g.size===0){x(M);return}setTimeout(e,10)}if(P0.get("KHR_parallel_shader_compile")!==null)e();else setTimeout(e,10)})};let r0=null;function Q9(M){if(r0)r0(M)}function r8(){h9.stop()}function rZ(){h9.start()}let h9=new NH;if(h9.setAnimationLoop(Q9),typeof self<"u")h9.setContext(self);this.setAnimationLoop=function(M){r0=M,$0.setAnimationLoop(M),M===null?h9.stop():h9.start()},$0.addEventListener("sessionstart",r8),$0.addEventListener("sessionend",rZ),this.render=function(M,f){if(f!==void 0&&f.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(M.matrixWorldAutoUpdate===!0)M.updateMatrixWorld();if(f.parent===null&&f.matrixWorldAutoUpdate===!0)f.updateMatrixWorld();if($0.enabled===!0&&$0.isPresenting===!0){if($0.cameraAutoUpdate===!0)$0.updateCamera(f);f=$0.getCamera()}if(M.isScene===!0)M.onBeforeRender(L,M,f,B);if(q=O0.get(M,V.length),q.init(f),V.push(q),Q0.multiplyMatrices(f.projectionMatrix,f.matrixWorldInverse),n.setFromProjectionMatrix(Q0),D0=this.localClippingEnabled,Z0=v0.init(this.clippingPlanes,D0),D=K0.get(M,O.length),D.init(),O.push(D),$0.enabled===!0&&$0.isPresenting===!0){let e=L.xr.getDepthSensingMesh();if(e!==null)uJ(e,f,-1/0,L.sortObjects)}if(uJ(M,f,0,L.sortObjects),D.finish(),L.sortObjects===!0)D.sort(m,X0);if(n0=$0.enabled===!1||$0.isPresenting===!1||$0.hasDepthSensing()===!1,n0)N0.addToRenderList(D,M);if(this.info.render.frame++,Z0===!0)v0.beginShadows();let v=q.state.shadowsArray;if(W0.render(v,M,f),Z0===!0)v0.endShadows();if(this.info.autoReset===!0)this.info.reset();let{opaque:g,transmissive:x}=D;if(q.setupLights(),f.isArrayCamera){let e=f.cameras;if(x.length>0)for(let U0=0,q0=e.length;U0<q0;U0++){let R0=e[U0];eZ(g,x,M,R0)}if(n0)N0.render(M);for(let U0=0,q0=e.length;U0<q0;U0++){let R0=e[U0];tZ(D,M,R0,R0.viewport)}}else{if(x.length>0)eZ(g,x,M,f);if(n0)N0.render(M);tZ(D,M,f)}if(B!==null&&I===0)B0.updateMultisampleRenderTarget(B),B0.updateRenderTargetMipmap(B);if(M.isScene===!0)M.onAfterRender(L,M,f);if(l0.resetDefaultState(),b=-1,z=null,V.pop(),V.length>0){if(q=V[V.length-1],Z0===!0)v0.setGlobalState(L.clippingPlanes,q.state.camera)}else q=null;if(O.pop(),O.length>0)D=O[O.length-1];else D=null};function uJ(M,f,v,g){if(M.visible===!1)return;if(M.layers.test(f.layers)){if(M.isGroup)v=M.renderOrder;else if(M.isLOD){if(M.autoUpdate===!0)M.update(f)}else if(M.isLight){if(q.pushLight(M),M.castShadow)q.pushShadow(M)}else if(M.isSprite){if(!M.frustumCulled||n.intersectsSprite(M)){if(g)p.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Q0);let U0=r.update(M),q0=M.material;if(q0.visible)D.push(M,U0,q0,v,p.z,null)}}else if(M.isMesh||M.isLine||M.isPoints){if(!M.frustumCulled||n.intersectsObject(M)){let U0=r.update(M),q0=M.material;if(g){if(M.boundingSphere!==void 0){if(M.boundingSphere===null)M.computeBoundingSphere();p.copy(M.boundingSphere.center)}else{if(U0.boundingSphere===null)U0.computeBoundingSphere();p.copy(U0.boundingSphere.center)}p.applyMatrix4(M.matrixWorld).applyMatrix4(Q0)}if(Array.isArray(q0)){let R0=U0.groups;for(let f0=0,x0=R0.length;f0<x0;f0++){let L0=R0[f0],s0=q0[L0.materialIndex];if(s0&&s0.visible)D.push(M,U0,s0,v,p.z,L0)}}else if(q0.visible)D.push(M,U0,q0,v,p.z,null)}}}let e=M.children;for(let U0=0,q0=e.length;U0<q0;U0++)uJ(e[U0],f,v,g)}function tZ(M,f,v,g){let{opaque:x,transmissive:e,transparent:U0}=M;if(q.setupLightsView(v),Z0===!0)v0.setGlobalState(L.clippingPlanes,v);if(g)Y0.viewport(C.copy(g));if(x.length>0)k7(x,f,v);if(e.length>0)k7(e,f,v);if(U0.length>0)k7(U0,f,v);Y0.buffers.depth.setTest(!0),Y0.buffers.depth.setMask(!0),Y0.buffers.color.setMask(!0),Y0.setPolygonOffset(!1)}function eZ(M,f,v,g){if((v.isScene===!0?v.overrideMaterial:null)!==null)return;if(q.state.transmissionRenderTarget[g.id]===void 0)q.state.transmissionRenderTarget[g.id]=new q9(1,1,{generateMipmaps:!0,type:P0.has("EXT_color_buffer_half_float")||P0.has("EXT_color_buffer_float")?J7:T9,minFilter:w6,samples:4,stencilBuffer:Q,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:i0.workingColorSpace});let e=q.state.transmissionRenderTarget[g.id],U0=g.viewport||C;e.setSize(U0.z*L.transmissionResolutionScale,U0.w*L.transmissionResolutionScale);let q0=L.getRenderTarget();if(L.setRenderTarget(e),L.getClearColor(u),l=L.getClearAlpha(),l<1)L.setClearColor(16777215,0.5);if(L.clear(),n0)N0.render(v);let R0=L.toneMapping;L.toneMapping=F9;let f0=g.viewport;if(g.viewport!==void 0)g.viewport=void 0;if(q.setupLightsView(g),Z0===!0)v0.setGlobalState(L.clippingPlanes,g);if(k7(M,v,g),B0.updateMultisampleRenderTarget(e),B0.updateRenderTargetMipmap(e),P0.has("WEBGL_multisampled_render_to_texture")===!1){let x0=!1;for(let L0=0,s0=f.length;L0<s0;L0++){let t0=f[L0],F8=t0.object,U8=t0.geometry,a0=t0.material,C0=t0.group;if(a0.side===l8&&F8.layers.test(g.layers)){let M8=a0.side;a0.side=T8,a0.needsUpdate=!0,JW(F8,v,g,U8,a0,C0),a0.side=M8,a0.needsUpdate=!0,x0=!0}}if(x0===!0)B0.updateMultisampleRenderTarget(e),B0.updateRenderTargetMipmap(e)}if(L.setRenderTarget(q0),L.setClearColor(u,l),f0!==void 0)g.viewport=f0;L.toneMapping=R0}function k7(M,f,v){let g=f.isScene===!0?f.overrideMaterial:null;for(let x=0,e=M.length;x<e;x++){let U0=M[x],q0=U0.object,R0=U0.geometry,f0=g===null?U0.material:g,x0=U0.group;if(q0.layers.test(v.layers))JW(q0,f,v,R0,f0,x0)}}function JW(M,f,v,g,x,e){if(M.onBeforeRender(L,f,v,g,x,e),M.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),x.onBeforeRender(L,f,v,g,M,e),x.transparent===!0&&x.side===l8&&x.forceSinglePass===!1)x.side=T8,x.needsUpdate=!0,L.renderBufferDirect(v,f,g,x,M,e),x.side=z6,x.needsUpdate=!0,L.renderBufferDirect(v,f,g,x,M,e),x.side=l8;else L.renderBufferDirect(v,f,g,x,M,e);M.onAfterRender(L,f,v,g,x,e)}function M7(M,f,v){if(f.isScene!==!0)f=T0;let g=k0.get(M),x=q.state.lights,e=q.state.shadowsArray,U0=x.state.version,q0=c.getParameters(M,x.state,e,f,v),R0=c.getProgramCacheKey(q0),f0=g.programs;if(g.environment=M.isMeshStandardMaterial?f.environment:null,g.fog=f.fog,g.envMap=(M.isMeshStandardMaterial?k:w).get(M.envMap||g.environment),g.envMapRotation=g.environment!==null&&M.envMap===null?f.environmentRotation:M.envMapRotation,f0===void 0)M.addEventListener("dispose",G0),f0=new Map,g.programs=f0;let x0=f0.get(R0);if(x0!==void 0){if(g.currentProgram===x0&&g.lightsStateVersion===U0)return ZW(M,q0),x0}else q0.uniforms=c.getUniforms(M),M.onBeforeCompile(q0,L),x0=c.acquireProgram(q0,R0),f0.set(R0,x0),g.uniforms=q0.uniforms;let L0=g.uniforms;if(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)L0.clippingPlanes=v0.uniform;if(ZW(M,q0),g.needsLights=oH(M),g.lightsStateVersion=U0,g.needsLights)L0.ambientLightColor.value=x.state.ambient,L0.lightProbe.value=x.state.probe,L0.directionalLights.value=x.state.directional,L0.directionalLightShadows.value=x.state.directionalShadow,L0.spotLights.value=x.state.spot,L0.spotLightShadows.value=x.state.spotShadow,L0.rectAreaLights.value=x.state.rectArea,L0.ltc_1.value=x.state.rectAreaLTC1,L0.ltc_2.value=x.state.rectAreaLTC2,L0.pointLights.value=x.state.point,L0.pointLightShadows.value=x.state.pointShadow,L0.hemisphereLights.value=x.state.hemi,L0.directionalShadowMap.value=x.state.directionalShadowMap,L0.directionalShadowMatrix.value=x.state.directionalShadowMatrix,L0.spotShadowMap.value=x.state.spotShadowMap,L0.spotLightMatrix.value=x.state.spotLightMatrix,L0.spotLightMap.value=x.state.spotLightMap,L0.pointShadowMap.value=x.state.pointShadowMap,L0.pointShadowMatrix.value=x.state.pointShadowMatrix;return g.currentProgram=x0,g.uniformsList=null,x0}function $W(M){if(M.uniformsList===null){let f=M.currentProgram.getUniforms();M.uniformsList=N7.seqWithValue(f.seq,M.uniforms)}return M.uniformsList}function ZW(M,f){let v=k0.get(M);v.outputColorSpace=f.outputColorSpace,v.batching=f.batching,v.batchingColor=f.batchingColor,v.instancing=f.instancing,v.instancingColor=f.instancingColor,v.instancingMorph=f.instancingMorph,v.skinning=f.skinning,v.morphTargets=f.morphTargets,v.morphNormals=f.morphNormals,v.morphColors=f.morphColors,v.morphTargetsCount=f.morphTargetsCount,v.numClippingPlanes=f.numClippingPlanes,v.numIntersection=f.numClipIntersection,v.vertexAlphas=f.vertexAlphas,v.vertexTangents=f.vertexTangents,v.toneMapping=f.toneMapping}function sH(M,f,v,g,x){if(f.isScene!==!0)f=T0;B0.resetTextureUnits();let e=f.fog,U0=g.isMeshStandardMaterial?f.environment:null,q0=B===null?L.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Z7,R0=(g.isMeshStandardMaterial?k:w).get(g.envMap||U0),f0=g.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,x0=!!v.attributes.tangent&&(!!g.normalMap||g.anisotropy>0),L0=!!v.morphAttributes.position,s0=!!v.morphAttributes.normal,t0=!!v.morphAttributes.color,F8=F9;if(g.toneMapped){if(B===null||B.isXRRenderTarget===!0)F8=L.toneMapping}let U8=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,a0=U8!==void 0?U8.length:0,C0=k0.get(g),M8=q.state.lights;if(Z0===!0){if(D0===!0||M!==z){let P8=M===z&&g.id===b;v0.setState(g,M,P8)}}let e0=!1;if(g.version===C0.__version){if(C0.needsLights&&C0.lightsStateVersion!==M8.state.version)e0=!0;else if(C0.outputColorSpace!==q0)e0=!0;else if(x.isBatchedMesh&&C0.batching===!1)e0=!0;else if(!x.isBatchedMesh&&C0.batching===!0)e0=!0;else if(x.isBatchedMesh&&C0.batchingColor===!0&&x.colorTexture===null)e0=!0;else if(x.isBatchedMesh&&C0.batchingColor===!1&&x.colorTexture!==null)e0=!0;else if(x.isInstancedMesh&&C0.instancing===!1)e0=!0;else if(!x.isInstancedMesh&&C0.instancing===!0)e0=!0;else if(x.isSkinnedMesh&&C0.skinning===!1)e0=!0;else if(!x.isSkinnedMesh&&C0.skinning===!0)e0=!0;else if(x.isInstancedMesh&&C0.instancingColor===!0&&x.instanceColor===null)e0=!0;else if(x.isInstancedMesh&&C0.instancingColor===!1&&x.instanceColor!==null)e0=!0;else if(x.isInstancedMesh&&C0.instancingMorph===!0&&x.morphTexture===null)e0=!0;else if(x.isInstancedMesh&&C0.instancingMorph===!1&&x.morphTexture!==null)e0=!0;else if(C0.envMap!==R0)e0=!0;else if(g.fog===!0&&C0.fog!==e)e0=!0;else if(C0.numClippingPlanes!==void 0&&(C0.numClippingPlanes!==v0.numPlanes||C0.numIntersection!==v0.numIntersection))e0=!0;else if(C0.vertexAlphas!==f0)e0=!0;else if(C0.vertexTangents!==x0)e0=!0;else if(C0.morphTargets!==L0)e0=!0;else if(C0.morphNormals!==s0)e0=!0;else if(C0.morphColors!==t0)e0=!0;else if(C0.toneMapping!==F8)e0=!0;else if(C0.morphTargetsCount!==a0)e0=!0}else e0=!0,C0.__version=g.version;let d8=C0.currentProgram;if(e0===!0)d8=M7(g,f,x);let Q6=!1,f8=!1,p6=!1,Y8=d8.getUniforms(),v8=C0.uniforms;if(Y0.useProgram(d8.program))Q6=!0,f8=!0,p6=!0;if(g.id!==b)b=g.id,f8=!0;if(Q6||z!==M){if(Y0.buffers.depth.getReversed())M0.copy(M.projectionMatrix),yQ(M0),hQ(M0),Y8.setValue(P,"projectionMatrix",M0);else Y8.setValue(P,"projectionMatrix",M.projectionMatrix);Y8.setValue(P,"viewMatrix",M.matrixWorldInverse);let _8=Y8.map.cameraPosition;if(_8!==void 0)_8.setValue(P,z0.setFromMatrixPosition(M.matrixWorld));if(S0.logarithmicDepthBuffer)Y8.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2));if(g.isMeshPhongMaterial||g.isMeshToonMaterial||g.isMeshLambertMaterial||g.isMeshBasicMaterial||g.isMeshStandardMaterial||g.isShaderMaterial)Y8.setValue(P,"isOrthographic",M.isOrthographicCamera===!0);if(z!==M)z=M,f8=!0,p6=!0}if(x.isSkinnedMesh){Y8.setOptional(P,x,"bindMatrix"),Y8.setOptional(P,x,"bindMatrixInverse");let P8=x.skeleton;if(P8){if(P8.boneTexture===null)P8.computeBoneTexture();Y8.setValue(P,"boneTexture",P8.boneTexture,B0)}}if(x.isBatchedMesh){if(Y8.setOptional(P,x,"batchingTexture"),Y8.setValue(P,"batchingTexture",x._matricesTexture,B0),Y8.setOptional(P,x,"batchingIdTexture"),Y8.setValue(P,"batchingIdTexture",x._indirectTexture,B0),Y8.setOptional(P,x,"batchingColorTexture"),x._colorsTexture!==null)Y8.setValue(P,"batchingColorTexture",x._colorsTexture,B0)}let b8=v.morphAttributes;if(b8.position!==void 0||b8.normal!==void 0||b8.color!==void 0)c0.update(x,v,d8);if(f8||C0.receiveShadow!==x.receiveShadow)C0.receiveShadow=x.receiveShadow,Y8.setValue(P,"receiveShadow",x.receiveShadow);if(g.isMeshGouraudMaterial&&g.envMap!==null)v8.envMap.value=R0,v8.flipEnvMap.value=R0.isCubeTexture&&R0.isRenderTargetTexture===!1?-1:1;if(g.isMeshStandardMaterial&&g.envMap===null&&f.environment!==null)v8.envMapIntensity.value=f.environmentIntensity;if(f8){if(Y8.setValue(P,"toneMappingExposure",L.toneMappingExposure),C0.needsLights)iH(v8,p6);if(e&&g.fog===!0)V0.refreshFogUniforms(v8,e);V0.refreshMaterialUniforms(v8,g,t,d,q.state.transmissionRenderTarget[M.id]),N7.upload(P,$W(C0),v8,B0)}if(g.isShaderMaterial&&g.uniformsNeedUpdate===!0)N7.upload(P,$W(C0),v8,B0),g.uniformsNeedUpdate=!1;if(g.isSpriteMaterial)Y8.setValue(P,"center",x.center);if(Y8.setValue(P,"modelViewMatrix",x.modelViewMatrix),Y8.setValue(P,"normalMatrix",x.normalMatrix),Y8.setValue(P,"modelMatrix",x.matrixWorld),g.isShaderMaterial||g.isRawShaderMaterial){let P8=g.uniformsGroups;for(let _8=0,mJ=P8.length;_8<mJ;_8++){let v9=P8[_8];X8.update(v9,d8),X8.bind(v9,d8)}}return d8}function iH(M,f){M.ambientLightColor.needsUpdate=f,M.lightProbe.needsUpdate=f,M.directionalLights.needsUpdate=f,M.directionalLightShadows.needsUpdate=f,M.pointLights.needsUpdate=f,M.pointLightShadows.needsUpdate=f,M.spotLights.needsUpdate=f,M.spotLightShadows.needsUpdate=f,M.rectAreaLights.needsUpdate=f,M.hemisphereLights.needsUpdate=f}function oH(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(M,f,v){k0.get(M.texture).__webglTexture=f,k0.get(M.depthTexture).__webglTexture=v;let g=k0.get(M);if(g.__hasExternalTextures=!0,g.__autoAllocateDepthBuffer=v===void 0,!g.__autoAllocateDepthBuffer){if(P0.has("WEBGL_multisampled_render_to_texture")===!0)console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),g.__useRenderToTexture=!1}},this.setRenderTargetFramebuffer=function(M,f){let v=k0.get(M);v.__webglFramebuffer=f,v.__useDefaultFramebuffer=f===void 0};let aH=P.createFramebuffer();this.setRenderTarget=function(M,f=0,v=0){B=M,T=f,I=v;let g=!0,x=null,e=!1,U0=!1;if(M){let R0=k0.get(M);if(R0.__useDefaultFramebuffer!==void 0)Y0.bindFramebuffer(P.FRAMEBUFFER,null),g=!1;else if(R0.__webglFramebuffer===void 0)B0.setupRenderTarget(M);else if(R0.__hasExternalTextures)B0.rebindTextures(M,k0.get(M.texture).__webglTexture,k0.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let L0=M.depthTexture;if(R0.__boundDepthTexture!==L0){if(L0!==null&&k0.has(L0)&&(M.width!==L0.image.width||M.height!==L0.image.height))throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B0.setupDepthRenderbuffer(M)}}let f0=M.texture;if(f0.isData3DTexture||f0.isDataArrayTexture||f0.isCompressedArrayTexture)U0=!0;let x0=k0.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget){if(Array.isArray(x0[f]))x=x0[f][v];else x=x0[f];e=!0}else if(M.samples>0&&B0.useMultisampledRTT(M)===!1)x=k0.get(M).__webglMultisampledFramebuffer;else if(Array.isArray(x0))x=x0[v];else x=x0;C.copy(M.viewport),S.copy(M.scissor),h=M.scissorTest}else C.copy(J0).multiplyScalar(t).floor(),S.copy(w0).multiplyScalar(t).floor(),h=g0;if(v!==0)x=aH;if(Y0.bindFramebuffer(P.FRAMEBUFFER,x)&&g)Y0.drawBuffers(M,x);if(Y0.viewport(C),Y0.scissor(S),Y0.setScissorTest(h),e){let R0=k0.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+f,R0.__webglTexture,v)}else if(U0){let R0=k0.get(M.texture),f0=f;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,R0.__webglTexture,v,f0)}else if(M!==null&&v!==0){let R0=k0.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,R0.__webglTexture,v)}b=-1},this.readRenderTargetPixels=function(M,f,v,g,x,e,U0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let q0=k0.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&U0!==void 0)q0=q0[U0];if(q0){Y0.bindFramebuffer(P.FRAMEBUFFER,q0);try{let R0=M.texture,f0=R0.format,x0=R0.type;if(!S0.textureFormatReadable(f0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!S0.textureTypeReadable(x0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(f>=0&&f<=M.width-g&&(v>=0&&v<=M.height-x))P.readPixels(f,v,g,x,b0.convert(f0),b0.convert(x0),e)}finally{let R0=B!==null?k0.get(B).__webglFramebuffer:null;Y0.bindFramebuffer(P.FRAMEBUFFER,R0)}}},this.readRenderTargetPixelsAsync=async function(M,f,v,g,x,e,U0){if(!(M&&M.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let q0=k0.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&U0!==void 0)q0=q0[U0];if(q0){let R0=M.texture,f0=R0.format,x0=R0.type;if(!S0.textureFormatReadable(f0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!S0.textureTypeReadable(x0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(f>=0&&f<=M.width-g&&(v>=0&&v<=M.height-x)){Y0.bindFramebuffer(P.FRAMEBUFFER,q0);let L0=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,L0),P.bufferData(P.PIXEL_PACK_BUFFER,e.byteLength,P.STREAM_READ),P.readPixels(f,v,g,x,b0.convert(f0),b0.convert(x0),0);let s0=B!==null?k0.get(B).__webglFramebuffer:null;Y0.bindFramebuffer(P.FRAMEBUFFER,s0);let t0=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await xQ(P,t0,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,L0),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,e),P.deleteBuffer(L0),P.deleteSync(t0),e}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,f=null,v=0){if(M.isTexture!==!0)c9("WebGLRenderer: copyFramebufferToTexture function signature has changed."),f=arguments[0]||null,M=arguments[1];let g=Math.pow(2,-v),x=Math.floor(M.image.width*g),e=Math.floor(M.image.height*g),U0=f!==null?f.x:0,q0=f!==null?f.y:0;B0.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,v,0,0,U0,q0,x,e),Y0.unbindTexture()};let rH=P.createFramebuffer(),tH=P.createFramebuffer();if(this.copyTextureToTexture=function(M,f,v=null,g=null,x=0,e=null){if(M.isTexture!==!0)c9("WebGLRenderer: copyTextureToTexture function signature has changed."),g=arguments[0]||null,M=arguments[1],f=arguments[2],e=arguments[3]||0,v=null;if(e===null)if(x!==0)c9("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),e=x,x=0;else e=0;let U0,q0,R0,f0,x0,L0,s0,t0,F8,U8=M.isCompressedTexture?M.mipmaps[e]:M.image;if(v!==null)U0=v.max.x-v.min.x,q0=v.max.y-v.min.y,R0=v.isBox3?v.max.z-v.min.z:1,f0=v.min.x,x0=v.min.y,L0=v.isBox3?v.min.z:0;else{let b8=Math.pow(2,-x);if(U0=Math.floor(U8.width*b8),q0=Math.floor(U8.height*b8),M.isDataArrayTexture)R0=U8.depth;else if(M.isData3DTexture)R0=Math.floor(U8.depth*b8);else R0=1;f0=0,x0=0,L0=0}if(g!==null)s0=g.x,t0=g.y,F8=g.z;else s0=0,t0=0,F8=0;let a0=b0.convert(f.format),C0=b0.convert(f.type),M8;if(f.isData3DTexture)B0.setTexture3D(f,0),M8=P.TEXTURE_3D;else if(f.isDataArrayTexture||f.isCompressedArrayTexture)B0.setTexture2DArray(f,0),M8=P.TEXTURE_2D_ARRAY;else B0.setTexture2D(f,0),M8=P.TEXTURE_2D;P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,f.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,f.unpackAlignment);let e0=P.getParameter(P.UNPACK_ROW_LENGTH),d8=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Q6=P.getParameter(P.UNPACK_SKIP_PIXELS),f8=P.getParameter(P.UNPACK_SKIP_ROWS),p6=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,U8.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,U8.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,f0),P.pixelStorei(P.UNPACK_SKIP_ROWS,x0),P.pixelStorei(P.UNPACK_SKIP_IMAGES,L0);let Y8=M.isDataArrayTexture||M.isData3DTexture,v8=f.isDataArrayTexture||f.isData3DTexture;if(M.isDepthTexture){let b8=k0.get(M),P8=k0.get(f),_8=k0.get(b8.__renderTarget),mJ=k0.get(P8.__renderTarget);Y0.bindFramebuffer(P.READ_FRAMEBUFFER,_8.__webglFramebuffer),Y0.bindFramebuffer(P.DRAW_FRAMEBUFFER,mJ.__webglFramebuffer);for(let v9=0;v9<R0;v9++){if(Y8)P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,k0.get(M).__webglTexture,x,L0+v9),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,k0.get(f).__webglTexture,e,F8+v9);P.blitFramebuffer(f0,x0,U0,q0,s0,t0,U0,q0,P.DEPTH_BUFFER_BIT,P.NEAREST)}Y0.bindFramebuffer(P.READ_FRAMEBUFFER,null),Y0.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(x!==0||M.isRenderTargetTexture||k0.has(M)){let b8=k0.get(M),P8=k0.get(f);Y0.bindFramebuffer(P.READ_FRAMEBUFFER,rH),Y0.bindFramebuffer(P.DRAW_FRAMEBUFFER,tH);for(let _8=0;_8<R0;_8++){if(Y8)P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,b8.__webglTexture,x,L0+_8);else P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,b8.__webglTexture,x);if(v8)P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P8.__webglTexture,e,F8+_8);else P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,P8.__webglTexture,e);if(x!==0)P.blitFramebuffer(f0,x0,U0,q0,s0,t0,U0,q0,P.COLOR_BUFFER_BIT,P.NEAREST);else if(v8)P.copyTexSubImage3D(M8,e,s0,t0,F8+_8,f0,x0,U0,q0);else P.copyTexSubImage2D(M8,e,s0,t0,f0,x0,U0,q0)}Y0.bindFramebuffer(P.READ_FRAMEBUFFER,null),Y0.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(v8)if(M.isDataTexture||M.isData3DTexture)P.texSubImage3D(M8,e,s0,t0,F8,U0,q0,R0,a0,C0,U8.data);else if(f.isCompressedArrayTexture)P.compressedTexSubImage3D(M8,e,s0,t0,F8,U0,q0,R0,a0,U8.data);else P.texSubImage3D(M8,e,s0,t0,F8,U0,q0,R0,a0,C0,U8);else if(M.isDataTexture)P.texSubImage2D(P.TEXTURE_2D,e,s0,t0,U0,q0,a0,C0,U8.data);else if(M.isCompressedTexture)P.compressedTexSubImage2D(P.TEXTURE_2D,e,s0,t0,U8.width,U8.height,a0,U8.data);else P.texSubImage2D(P.TEXTURE_2D,e,s0,t0,U0,q0,a0,C0,U8);if(P.pixelStorei(P.UNPACK_ROW_LENGTH,e0),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,d8),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Q6),P.pixelStorei(P.UNPACK_SKIP_ROWS,f8),P.pixelStorei(P.UNPACK_SKIP_IMAGES,p6),e===0&&f.generateMipmaps)P.generateMipmap(M8);Y0.unbindTexture()},this.copyTextureToTexture3D=function(M,f,v=null,g=null,x=0){if(M.isTexture!==!0)c9("WebGLRenderer: copyTextureToTexture3D function signature has changed."),v=arguments[0]||null,g=arguments[1]||null,M=arguments[2],f=arguments[3],x=arguments[4]||0;return c9('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,f,v,g,x)},this.initRenderTarget=function(M){if(k0.get(M).__webglFramebuffer===void 0)B0.setupRenderTarget(M)},this.initTexture=function(M){if(M.isCubeTexture)B0.setTextureCube(M,0);else if(M.isData3DTexture)B0.setTexture3D(M,0);else if(M.isDataArrayTexture||M.isCompressedArrayTexture)B0.setTexture2DArray(M,0);else B0.setTexture2D(M,0);Y0.unbindTexture()},this.resetState=function(){T=0,I=0,B=null,Y0.reset(),l0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jQ}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let $=this.getContext();$.drawingBufferColorspace=i0._getDrawingBufferColorSpace(J),$.unpackColorSpace=i0._getUnpackColorSpace()}}var VH={type:"change"},hZ={type:"start"},BH={type:"end"},_J=new s9,wH=new i8,DG=Math.cos(70*$Z.DEG2RAD),R8=new _,j8=2*Math.PI,Z8={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},yZ=0.000001;class vZ extends VJ{constructor(J,$=null){super(J,$);if(this.state=Z8.NONE,this.enabled=!0,this.target=new _,this.cursor=new _,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:B9.ROTATE,MIDDLE:B9.DOLLY,RIGHT:B9.PAN},this.touches={ONE:P9.ROTATE,TWO:P9.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new _,this._lastQuaternion=new h8,this._lastTargetPosition=new _,this._quat=new h8().setFromUnitVectors(J.up,new _(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new G7,this._sphericalDelta=new G7,this._scale=1,this._panOffset=new _,this._rotateStart=new A0,this._rotateEnd=new A0,this._rotateDelta=new A0,this._panStart=new A0,this._panEnd=new A0,this._panDelta=new A0,this._dollyStart=new A0,this._dollyEnd=new A0,this._dollyDelta=new A0,this._dollyDirection=new _,this._mouse=new A0,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=MG.bind(this),this._onPointerDown=kG.bind(this),this._onPointerUp=LG.bind(this),this._onContextMenu=PG.bind(this),this._onMouseWheel=IG.bind(this),this._onKeyDown=VG.bind(this),this._onTouchStart=wG.bind(this),this._onTouchMove=BG.bind(this),this._onMouseDown=zG.bind(this),this._onMouseMove=CG.bind(this),this._interceptControlDown=AG.bind(this),this._interceptControlUp=TG.bind(this),this.domElement!==null)this.connect();this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(J){J.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=J}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(VH),this.update(),this.state=Z8.NONE}update(J=null){let $=this.object.position;if(R8.copy($).sub(this.target),R8.applyQuaternion(this._quat),this._spherical.setFromVector3(R8),this.autoRotate&&this.state===Z8.NONE)this._rotateLeft(this._getAutoRotationAngle(J));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let Z=this.minAzimuthAngle,W=this.maxAzimuthAngle;if(isFinite(Z)&&isFinite(W)){if(Z<-Math.PI)Z+=j8;else if(Z>Math.PI)Z-=j8;if(W<-Math.PI)W+=j8;else if(W>Math.PI)W-=j8;if(Z<=W)this._spherical.theta=Math.max(Z,Math.min(W,this._spherical.theta));else this._spherical.theta=this._spherical.theta>(Z+W)/2?Math.max(Z,this._spherical.theta):Math.min(W,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let Q=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let H=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),Q=H!=this._spherical.radius}if(R8.setFromSpherical(this._spherical),R8.applyQuaternion(this._quatInverse),$.copy(this.target).add(R8),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let H=null;if(this.object.isPerspectiveCamera){let Y=R8.length();H=this._clampDistance(Y*this._scale);let X=Y-H;this.object.position.addScaledVector(this._dollyDirection,X),this.object.updateMatrixWorld(),Q=!!X}else if(this.object.isOrthographicCamera){let Y=new _(this._mouse.x,this._mouse.y,0);Y.unproject(this.object);let X=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),Q=X!==this.object.zoom;let K=new _(this._mouse.x,this._mouse.y,0);K.unproject(this.object),this.object.position.sub(K).add(Y),this.object.updateMatrixWorld(),H=R8.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(H!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(H).add(this.object.position);else if(_J.origin.copy(this.object.position),_J.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_J.direction))<DG)this.object.lookAt(this.target);else wH.setFromNormalAndCoplanarPoint(this.object.up,this.target),_J.intersectPlane(wH,this.target)}else if(this.object.isOrthographicCamera){let H=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),H!==this.object.zoom)this.object.updateProjectionMatrix(),Q=!0}if(this._scale=1,this._performCursorZoom=!1,Q||this._lastPosition.distanceToSquared(this.object.position)>yZ||8*(1-this._lastQuaternion.dot(this.object.quaternion))>yZ||this._lastTargetPosition.distanceToSquared(this.target)>yZ)return this.dispatchEvent(VH),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(J){if(J!==null)return j8/60*this.autoRotateSpeed*J;else return j8/60/60*this.autoRotateSpeed}_getZoomScale(J){let $=Math.abs(J*0.01);return Math.pow(0.95,this.zoomSpeed*$)}_rotateLeft(J){this._sphericalDelta.theta-=J}_rotateUp(J){this._sphericalDelta.phi-=J}_panLeft(J,$){R8.setFromMatrixColumn($,0),R8.multiplyScalar(-J),this._panOffset.add(R8)}_panUp(J,$){if(this.screenSpacePanning===!0)R8.setFromMatrixColumn($,1);else R8.setFromMatrixColumn($,0),R8.crossVectors(this.object.up,R8);R8.multiplyScalar(J),this._panOffset.add(R8)}_pan(J,$){let Z=this.domElement;if(this.object.isPerspectiveCamera){let W=this.object.position;R8.copy(W).sub(this.target);let Q=R8.length();Q*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*J*Q/Z.clientHeight,this.object.matrix),this._panUp(2*$*Q/Z.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(J*(this.object.right-this.object.left)/this.object.zoom/Z.clientWidth,this.object.matrix),this._panUp($*(this.object.top-this.object.bottom)/this.object.zoom/Z.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(J,$){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let Z=this.domElement.getBoundingClientRect(),W=J-Z.left,Q=$-Z.top,H=Z.width,Y=Z.height;this._mouse.x=W/H*2-1,this._mouse.y=-(Q/Y)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(J){return Math.max(this.minDistance,Math.min(this.maxDistance,J))}_handleMouseDownRotate(J){this._rotateStart.set(J.clientX,J.clientY)}_handleMouseDownDolly(J){this._updateZoomParameters(J.clientX,J.clientX),this._dollyStart.set(J.clientX,J.clientY)}_handleMouseDownPan(J){this._panStart.set(J.clientX,J.clientY)}_handleMouseMoveRotate(J){this._rotateEnd.set(J.clientX,J.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let $=this.domElement;this._rotateLeft(j8*this._rotateDelta.x/$.clientHeight),this._rotateUp(j8*this._rotateDelta.y/$.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(J){if(this._dollyEnd.set(J.clientX,J.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(J){this._panEnd.set(J.clientX,J.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(J){if(this._updateZoomParameters(J.clientX,J.clientY),J.deltaY<0)this._dollyIn(this._getZoomScale(J.deltaY));else if(J.deltaY>0)this._dollyOut(this._getZoomScale(J.deltaY));this.update()}_handleKeyDown(J){let $=!1;switch(J.code){case this.keys.UP:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(j8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);$=!0;break;case this.keys.BOTTOM:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(-j8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);$=!0;break;case this.keys.LEFT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(j8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);$=!0;break;case this.keys.RIGHT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(-j8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);$=!0;break}if($)J.preventDefault(),this.update()}_handleTouchStartRotate(J){if(this._pointers.length===1)this._rotateStart.set(J.pageX,J.pageY);else{let $=this._getSecondPointerPosition(J),Z=0.5*(J.pageX+$.x),W=0.5*(J.pageY+$.y);this._rotateStart.set(Z,W)}}_handleTouchStartPan(J){if(this._pointers.length===1)this._panStart.set(J.pageX,J.pageY);else{let $=this._getSecondPointerPosition(J),Z=0.5*(J.pageX+$.x),W=0.5*(J.pageY+$.y);this._panStart.set(Z,W)}}_handleTouchStartDolly(J){let $=this._getSecondPointerPosition(J),Z=J.pageX-$.x,W=J.pageY-$.y,Q=Math.sqrt(Z*Z+W*W);this._dollyStart.set(0,Q)}_handleTouchStartDollyPan(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enablePan)this._handleTouchStartPan(J)}_handleTouchStartDollyRotate(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enableRotate)this._handleTouchStartRotate(J)}_handleTouchMoveRotate(J){if(this._pointers.length==1)this._rotateEnd.set(J.pageX,J.pageY);else{let Z=this._getSecondPointerPosition(J),W=0.5*(J.pageX+Z.x),Q=0.5*(J.pageY+Z.y);this._rotateEnd.set(W,Q)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let $=this.domElement;this._rotateLeft(j8*this._rotateDelta.x/$.clientHeight),this._rotateUp(j8*this._rotateDelta.y/$.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(J){if(this._pointers.length===1)this._panEnd.set(J.pageX,J.pageY);else{let $=this._getSecondPointerPosition(J),Z=0.5*(J.pageX+$.x),W=0.5*(J.pageY+$.y);this._panEnd.set(Z,W)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(J){let $=this._getSecondPointerPosition(J),Z=J.pageX-$.x,W=J.pageY-$.y,Q=Math.sqrt(Z*Z+W*W);this._dollyEnd.set(0,Q),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let H=(J.pageX+$.x)*0.5,Y=(J.pageY+$.y)*0.5;this._updateZoomParameters(H,Y)}_handleTouchMoveDollyPan(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enablePan)this._handleTouchMovePan(J)}_handleTouchMoveDollyRotate(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enableRotate)this._handleTouchMoveRotate(J)}_addPointer(J){this._pointers.push(J.pointerId)}_removePointer(J){delete this._pointerPositions[J.pointerId];for(let $=0;$<this._pointers.length;$++)if(this._pointers[$]==J.pointerId){this._pointers.splice($,1);return}}_isTrackingPointer(J){for(let $=0;$<this._pointers.length;$++)if(this._pointers[$]==J.pointerId)return!0;return!1}_trackPointer(J){let $=this._pointerPositions[J.pointerId];if($===void 0)$=new A0,this._pointerPositions[J.pointerId]=$;$.set(J.pageX,J.pageY)}_getSecondPointerPosition(J){let $=J.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[$]}_customWheelEvent(J){let $=J.deltaMode,Z={clientX:J.clientX,clientY:J.clientY,deltaY:J.deltaY};switch($){case 1:Z.deltaY*=16;break;case 2:Z.deltaY*=100;break}if(J.ctrlKey&&!this._controlActive)Z.deltaY*=10;return Z}}function kG(J){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(J.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(J))return;if(this._addPointer(J),J.pointerType==="touch")this._onTouchStart(J);else this._onMouseDown(J)}function MG(J){if(this.enabled===!1)return;if(J.pointerType==="touch")this._onTouchMove(J);else this._onMouseMove(J)}function LG(J){switch(this._removePointer(J),this._pointers.length){case 0:this.domElement.releasePointerCapture(J.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(BH),this.state=Z8.NONE;break;case 1:let $=this._pointers[0],Z=this._pointerPositions[$];this._onTouchStart({pointerId:$,pageX:Z.x,pageY:Z.y});break}}function zG(J){let $;switch(J.button){case 0:$=this.mouseButtons.LEFT;break;case 1:$=this.mouseButtons.MIDDLE;break;case 2:$=this.mouseButtons.RIGHT;break;default:$=-1}switch($){case B9.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(J),this.state=Z8.DOLLY;break;case B9.ROTATE:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=Z8.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=Z8.ROTATE}break;case B9.PAN:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=Z8.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=Z8.PAN}break;default:this.state=Z8.NONE}if(this.state!==Z8.NONE)this.dispatchEvent(hZ)}function CG(J){switch(this.state){case Z8.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(J);break;case Z8.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(J);break;case Z8.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(J);break}}function IG(J){if(this.enabled===!1||this.enableZoom===!1||this.state!==Z8.NONE)return;J.preventDefault(),this.dispatchEvent(hZ),this._handleMouseWheel(this._customWheelEvent(J)),this.dispatchEvent(BH)}function VG(J){if(this.enabled===!1)return;this._handleKeyDown(J)}function wG(J){switch(this._trackPointer(J),this._pointers.length){case 1:switch(this.touches.ONE){case P9.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(J),this.state=Z8.TOUCH_ROTATE;break;case P9.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(J),this.state=Z8.TOUCH_PAN;break;default:this.state=Z8.NONE}break;case 2:switch(this.touches.TWO){case P9.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(J),this.state=Z8.TOUCH_DOLLY_PAN;break;case P9.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(J),this.state=Z8.TOUCH_DOLLY_ROTATE;break;default:this.state=Z8.NONE}break;default:this.state=Z8.NONE}if(this.state!==Z8.NONE)this.dispatchEvent(hZ)}function BG(J){switch(this._trackPointer(J),this.state){case Z8.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(J),this.update();break;case Z8.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(J),this.update();break;case Z8.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(J),this.update();break;case Z8.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(J),this.update();break;default:this.state=Z8.NONE}}function PG(J){if(this.enabled===!1)return;J.preventDefault()}function AG(J){if(J.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function TG(J){if(J.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function PH(J){let $=new OJ;$.background=new _0(5);let Z=new C8(45,J.clientWidth/J.clientHeight,50,4000000);Z.position.set(0,300000,600000);let W=new xZ({canvas:J,antialias:!0,logarithmicDepthBuffer:!0});W.setSize(J.clientWidth,J.clientHeight),W.setPixelRatio(Math.min(window.devicePixelRatio,2)),W.toneMapping=r7,W.toneMappingExposure=1.2;let Q=new vZ(Z,J);Q.enableDamping=!0,Q.dampingFactor=0.08,Q.minDistance=8000,Q.maxDistance=1200000,Q.target.set(0,0,0);let H=new zJ(16777215,3);H.position.set(-500000,1e5,300000),$.add(H);let Y=new CJ(1118498,0.5);return $.add(Y),SG($),window.addEventListener("resize",()=>{let{clientWidth:X,clientHeight:K}=J;Z.aspect=X/K,Z.updateProjectionMatrix(),W.setSize(X,K)}),{scene:$,camera:Z,renderer:W,controls:Q,sunLight:H}}function SG(J){let Z=new Float32Array(24000),W=new Float32Array(24000);for(let Y=0;Y<8000;Y++){let X=Math.random()*Math.PI*2,K=Math.acos(2*Math.random()-1),U=1500000+Math.random()*400000;Z[Y*3]=U*Math.sin(K)*Math.cos(X),Z[Y*3+1]=U*Math.sin(K)*Math.sin(X),Z[Y*3+2]=U*Math.cos(K);let G=0.04+Math.random()*0.12,F=Math.random();W[Y*3]=G*(F>0.8?1:0.9),W[Y*3+1]=G*0.95,W[Y*3+2]=G*(F<0.2?1:0.9)}let Q=new V8;Q.setAttribute("position",new G8(Z,3)),Q.setAttribute("color",new G8(W,3));let H=new H7({size:1.5,vertexColors:!0,sizeAttenuation:!1});J.add(new RJ(Q,H))}var AH=new Date("2000-01-01T12:00:00Z"),D9=2*Math.PI,f9=3600*(180/Math.PI);var _G=648000/Math.PI,uq=-0.17-5*Math.log10(_G);function yH(J){if(J!==!0&&J!==!1)throw console.trace(),`Value is not boolean: ${J}`;return J}function bZ(J){if(!Number.isFinite(J))throw console.trace(),`Value is not a finite number: ${J}`;return J}function x6(J){return J-Math.floor(J)}var y0;(function(J){J.Sun="Sun",J.Moon="Moon",J.Mercury="Mercury",J.Venus="Venus",J.Earth="Earth",J.Mars="Mars",J.Jupiter="Jupiter",J.Saturn="Saturn",J.Uranus="Uranus",J.Neptune="Neptune",J.Pluto="Pluto",J.SSB="SSB",J.EMB="EMB",J.Star1="Star1",J.Star2="Star2",J.Star3="Star3",J.Star4="Star4",J.Star5="Star5",J.Star6="Star6",J.Star7="Star7",J.Star8="Star8"})(y0||(y0={}));var jG=[y0.Star1,y0.Star2,y0.Star3,y0.Star4,y0.Star5,y0.Star6,y0.Star7,y0.Star8],fG=[{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0}];function xG(J){let $=jG.indexOf(J);return $>=0?fG[$]:null}function iZ(J){let $=xG(J);return $&&$.dist>0?$:null}var E7;(function(J){J[J.From2000=0]="From2000",J[J.Into2000=1]="Into2000"})(E7||(E7={}));var x9={Mercury:[[[[4.40250710144,0,0],[0.40989414977,1.48302034195,26087.9031415742],[0.050462942,4.47785489551,52175.8062831484],[0.00855346844,1.16520322459,78263.70942472259],[0.00165590362,4.11969163423,104351.61256629678],[0.00034561897,0.77930768443,130439.51570787099],[0.00007583476,3.71348404924,156527.41884944518]],[[26087.90313685529,0,0],[0.01131199811,6.21874197797,26087.9031415742],[0.00292242298,3.04449355541,52175.8062831484],[0.00075775081,6.08568821653,78263.70942472259],[0.00019676525,2.80965111777,104351.61256629678]]],[[[0.11737528961,1.98357498767,26087.9031415742],[0.02388076996,5.03738959686,52175.8062831484],[0.01222839532,3.14159265359,0],[0.0054325181,1.79644363964,78263.70942472259],[0.0012977877,4.83232503958,104351.61256629678],[0.00031866927,1.58088495658,130439.51570787099],[0.00007963301,4.60972126127,156527.41884944518]],[[0.00274646065,3.95008450011,26087.9031415742],[0.00099737713,3.14159265359,0]]],[[[0.39528271651,0,0],[0.07834131818,6.19233722598,26087.9031415742],[0.00795525558,2.95989690104,52175.8062831484],[0.00121281764,6.01064153797,78263.70942472259],[0.00021921969,2.77820093972,104351.61256629678],[0.00004354065,5.82894543774,130439.51570787099]],[[0.0021734774,4.65617158665,26087.9031415742],[0.00044141826,1.42385544001,52175.8062831484]]]],Venus:[[[[3.17614666774,0,0],[0.01353968419,5.59313319619,10213.285546211],[0.00089891645,5.30650047764,20426.571092422],[0.00005477194,4.41630661466,7860.4193924392],[0.00003455741,2.6996444782,11790.6290886588],[0.00002372061,2.99377542079,3930.2096962196],[0.00001317168,5.18668228402,26.2983197998],[0.00001664146,4.25018630147,1577.3435424478],[0.00001438387,4.15745084182,9683.5945811164],[0.00001200521,6.15357116043,30639.856638633]],[[10213.28554621638,0,0],[0.00095617813,2.4640651111,10213.285546211],[0.00007787201,0.6247848222,20426.571092422]]],[[[0.05923638472,0.26702775812,10213.285546211],[0.00040107978,1.14737178112,20426.571092422],[0.00032814918,3.14159265359,0]],[[0.00287821243,1.88964962838,10213.285546211]]],[[[0.72334820891,0,0],[0.00489824182,4.02151831717,10213.285546211],[0.00001658058,4.90206728031,20426.571092422],[0.00001378043,1.12846591367,11790.6290886588],[0.00001632096,2.84548795207,7860.4193924392],[0.00000498395,2.58682193892,9683.5945811164],[0.00000221985,2.01346696541,19367.1891622328],[0.00000237454,2.55136053886,15720.8387848784]],[[0.00034551041,0.89198706276,10213.285546211]]]],Earth:[[[[1.75347045673,0,0],[0.03341656453,4.66925680415,6283.0758499914],[0.00034894275,4.62610242189,12566.1516999828],[0.00003417572,2.82886579754,3.523118349],[0.00003497056,2.74411783405,5753.3848848968],[0.00003135899,3.62767041756,77713.7714681205],[0.00002676218,4.41808345438,7860.4193924392],[0.00002342691,6.13516214446,3930.2096962196],[0.00001273165,2.03709657878,529.6909650946],[0.00001324294,0.74246341673,11506.7697697936],[0.00000901854,2.04505446477,26.2983197998],[0.00001199167,1.10962946234,1577.3435424478],[0.00000857223,3.50849152283,398.1490034082],[0.00000779786,1.17882681962,5223.6939198022],[0.0000099025,5.23268072088,5884.9268465832],[0.00000753141,2.53339052847,5507.5532386674],[0.00000505267,4.58292599973,18849.2275499742],[0.00000492392,4.20505711826,775.522611324],[0.00000356672,2.91954114478,0.0673103028],[0.00000284125,1.89869240932,796.2980068164],[0.00000242879,0.34481445893,5486.777843175],[0.00000317087,5.84901948512,11790.6290886588],[0.00000271112,0.31486255375,10977.078804699],[0.00000206217,4.80646631478,2544.3144198834],[0.00000205478,1.86953770281,5573.1428014331],[0.00000202318,2.45767790232,6069.7767545534],[0.00000126225,1.08295459501,20.7753954924],[0.00000155516,0.83306084617,213.299095438]],[[6283.0758499914,0,0],[0.00206058863,2.67823455808,6283.0758499914],[0.00004303419,2.63512233481,12566.1516999828]],[[0.00008721859,1.07253635559,6283.0758499914]]],[[],[[0.00227777722,3.4137662053,6283.0758499914],[0.00003805678,3.37063423795,12566.1516999828]]],[[[1.00013988784,0,0],[0.01670699632,3.09846350258,6283.0758499914],[0.00013956024,3.05524609456,12566.1516999828],[0.0000308372,5.19846674381,77713.7714681205],[0.00001628463,1.17387558054,5753.3848848968],[0.00001575572,2.84685214877,7860.4193924392],[0.00000924799,5.45292236722,11506.7697697936],[0.00000542439,4.56409151453,3930.2096962196],[0.0000047211,3.66100022149,5884.9268465832],[0.00000085831,1.27079125277,161000.6857376741],[0.00000057056,2.01374292245,83996.84731811189],[0.00000055736,5.2415979917,71430.69561812909],[0.00000174844,3.01193636733,18849.2275499742],[0.00000243181,4.2734953079,11790.6290886588]],[[0.00103018607,1.10748968172,6283.0758499914],[0.00001721238,1.06442300386,12566.1516999828]],[[0.00004359385,5.78455133808,6283.0758499914]]]],Mars:[[[[6.20347711581,0,0],[0.18656368093,5.0503710027,3340.6124266998],[0.01108216816,5.40099836344,6681.2248533996],[0.00091798406,5.75478744667,10021.8372800994],[0.00027744987,5.97049513147,3.523118349],[0.00010610235,2.93958560338,2281.2304965106],[0.00012315897,0.84956094002,2810.9214616052],[0.00008926784,4.15697846427,0.0172536522],[0.00008715691,6.11005153139,13362.4497067992],[0.00006797556,0.36462229657,398.1490034082],[0.00007774872,3.33968761376,5621.8429232104],[0.00003575078,1.6618650571,2544.3144198834],[0.00004161108,0.22814971327,2942.4634232916],[0.00003075252,0.85696614132,191.4482661116],[0.00002628117,0.64806124465,3337.0893083508],[0.00002937546,6.07893711402,0.0673103028],[0.00002389414,5.03896442664,796.2980068164],[0.00002579844,0.02996736156,3344.1355450488],[0.00001528141,1.14979301996,6151.533888305],[0.00001798806,0.65634057445,529.6909650946],[0.00001264357,3.62275122593,5092.1519581158],[0.00001286228,3.06796065034,2146.1654164752],[0.00001546404,2.91579701718,1751.539531416],[0.00001024902,3.69334099279,8962.4553499102],[0.00000891566,0.18293837498,16703.062133499],[0.00000858759,2.4009381194,2914.0142358238],[0.00000832715,2.46418619474,3340.5951730476],[0.0000083272,4.49495782139,3340.629680352],[0.00000712902,3.66335473479,1059.3819301892],[0.00000748723,3.82248614017,155.4203994342],[0.00000723861,0.67497311481,3738.761430108],[0.00000635548,2.92182225127,8432.7643848156],[0.00000655162,0.48864064125,3127.3133312618],[0.00000550474,3.81001042328,0.9803210682],[0.0000055275,4.47479317037,1748.016413067],[0.00000425966,0.55364317304,6283.0758499914],[0.00000415131,0.49662285038,213.299095438],[0.00000472167,3.62547124025,1194.4470102246],[0.00000306551,0.38052848348,6684.7479717486],[0.00000312141,0.99853944405,6677.7017350506],[0.00000293198,4.22131299634,20.7753954924],[0.00000302375,4.48618007156,3532.0606928114],[0.00000274027,0.54222167059,3340.545116397],[0.00000281079,5.88163521788,1349.8674096588],[0.00000231183,1.28242156993,3870.3033917944],[0.00000283602,5.7688543494,3149.1641605882],[0.00000236117,5.75503217933,3333.498879699],[0.00000274033,0.13372524985,3340.6797370026],[0.00000299395,2.78323740866,6254.6266625236]],[[3340.61242700512,0,0],[0.01457554523,3.60433733236,3340.6124266998],[0.00168414711,3.92318567804,6681.2248533996],[0.00020622975,4.26108844583,10021.8372800994],[0.00003452392,4.7321039319,3.523118349],[0.00002586332,4.60670058555,13362.4497067992],[0.00000841535,4.45864030426,2281.2304965106]],[[0.00058152577,2.04961712429,3340.6124266998],[0.00013459579,2.45738706163,6681.2248533996]]],[[[0.03197134986,3.76832042431,3340.6124266998],[0.00298033234,4.10616996305,6681.2248533996],[0.00289104742,0,0],[0.00031365539,4.4465105309,10021.8372800994],[0.000034841,4.7881254926,13362.4497067992]],[[0.00217310991,6.04472194776,3340.6124266998],[0.00020976948,3.14159265359,0],[0.00012834709,1.60810667915,6681.2248533996]]],[[[1.53033488271,0,0],[0.1418495316,3.47971283528,3340.6124266998],[0.00660776362,3.81783443019,6681.2248533996],[0.00046179117,4.15595316782,10021.8372800994],[0.00008109733,5.55958416318,2810.9214616052],[0.00007485318,1.77239078402,5621.8429232104],[0.00005523191,1.3643630377,2281.2304965106],[0.0000382516,4.49407183687,13362.4497067992],[0.00002306537,0.09081579001,2544.3144198834],[0.00001999396,5.36059617709,3337.0893083508],[0.00002484394,4.9254563992,2942.4634232916],[0.00001960195,4.74249437639,3344.1355450488],[0.00001167119,2.11260868341,5092.1519581158],[0.00001102816,5.00908403998,398.1490034082],[0.00000899066,4.40791133207,529.6909650946],[0.00000992252,5.83861961952,6151.533888305],[0.00000807354,2.10217065501,1059.3819301892],[0.00000797915,3.44839203899,796.2980068164],[0.00000740975,1.49906336885,2146.1654164752]],[[0.01107433345,2.03250524857,3340.6124266998],[0.00103175887,2.37071847807,6681.2248533996],[0.000128772,0,0],[0.0001081588,2.70888095665,10021.8372800994]],[[0.00044242249,0.47930604954,3340.6124266998],[0.00008138042,0.86998389204,6681.2248533996]]]],Jupiter:[[[[0.59954691494,0,0],[0.09695898719,5.06191793158,529.6909650946],[0.00573610142,1.44406205629,7.1135470008],[0.00306389205,5.41734730184,1059.3819301892],[0.00097178296,4.14264726552,632.7837393132],[0.00072903078,3.64042916389,522.5774180938],[0.00064263975,3.41145165351,103.0927742186],[0.00039806064,2.29376740788,419.4846438752],[0.00038857767,1.27231755835,316.3918696566],[0.00027964629,1.7845459182,536.8045120954],[0.0001358973,5.7748104079,1589.0728952838],[0.00008246349,3.5822792584,206.1855484372],[0.00008768704,3.63000308199,949.1756089698],[0.00007368042,5.0810119427,735.8765135318],[0.0000626315,0.02497628807,213.299095438],[0.00006114062,4.51319998626,1162.4747044078],[0.00004905396,1.32084470588,110.2063212194],[0.00005305285,1.30671216791,14.2270940016],[0.00005305441,4.18625634012,1052.2683831884],[0.00004647248,4.69958103684,3.9321532631],[0.00003045023,4.31676431084,426.598190876],[0.00002609999,1.56667394063,846.0828347512],[0.00002028191,1.06376530715,3.1813937377],[0.00001764763,2.14148655117,1066.49547719],[0.00001722972,3.88036268267,1265.5674786264],[0.00001920945,0.97168196472,639.897286314],[0.00001633223,3.58201833555,515.463871093],[0.00001431999,4.29685556046,625.6701923124],[0.00000973272,4.09764549134,95.9792272178]],[[529.69096508814,0,0],[0.00489503243,4.2208293947,529.6909650946],[0.00228917222,6.02646855621,7.1135470008],[0.00030099479,4.54540782858,1059.3819301892],[0.0002072092,5.45943156902,522.5774180938],[0.00012103653,0.16994816098,536.8045120954],[0.00006067987,4.42422292017,103.0927742186],[0.00005433968,3.98480737746,419.4846438752],[0.00004237744,5.89008707199,14.2270940016]],[[0.00047233601,4.32148536482,7.1135470008],[0.00030649436,2.929777887,529.6909650946],[0.00014837605,3.14159265359,0]]],[[[0.02268615702,3.55852606721,529.6909650946],[0.00109971634,3.90809347197,1059.3819301892],[0.00110090358,0,0],[0.00008101428,3.60509572885,522.5774180938],[0.00006043996,4.25883108339,1589.0728952838],[0.00006437782,0.30627119215,536.8045120954]],[[0.00078203446,1.52377859742,529.6909650946]]],[[[5.20887429326,0,0],[0.25209327119,3.49108639871,529.6909650946],[0.00610599976,3.84115365948,1059.3819301892],[0.00282029458,2.57419881293,632.7837393132],[0.00187647346,2.07590383214,522.5774180938],[0.00086792905,0.71001145545,419.4846438752],[0.00072062974,0.21465724607,536.8045120954],[0.00065517248,5.9799588479,316.3918696566],[0.00029134542,1.67759379655,103.0927742186],[0.00030135335,2.16132003734,949.1756089698],[0.00023453271,3.54023522184,735.8765135318],[0.00022283743,4.19362594399,1589.0728952838],[0.00023947298,0.2745803748,7.1135470008],[0.00013032614,2.96042965363,1162.4747044078],[0.0000970336,1.90669633585,206.1855484372],[0.00012749023,2.71550286592,1052.2683831884],[0.00007057931,2.18184839926,1265.5674786264],[0.00006137703,6.26418240033,846.0828347512],[0.00002616976,2.00994012876,1581.959348283]],[[0.0127180152,2.64937512894,529.6909650946],[0.00061661816,3.00076460387,1059.3819301892],[0.00053443713,3.89717383175,522.5774180938],[0.00031185171,4.88276958012,536.8045120954],[0.00041390269,0,0]]]],Saturn:[[[[0.87401354025,0,0],[0.11107659762,3.96205090159,213.299095438],[0.01414150957,4.58581516874,7.1135470008],[0.00398379389,0.52112032699,206.1855484372],[0.00350769243,3.30329907896,426.598190876],[0.00206816305,0.24658372002,103.0927742186],[0.000792713,3.84007056878,220.4126424388],[0.00023990355,4.66976924553,110.2063212194],[0.00016573588,0.43719228296,419.4846438752],[0.00014906995,5.76903183869,316.3918696566],[0.0001582029,0.93809155235,632.7837393132],[0.00014609559,1.56518472,3.9321532631],[0.00013160301,4.44891291899,14.2270940016],[0.00015053543,2.71669915667,639.897286314],[0.00013005299,5.98119023644,11.0457002639],[0.00010725067,3.12939523827,202.2533951741],[0.00005863206,0.23656938524,529.6909650946],[0.00005227757,4.20783365759,3.1813937377],[0.00006126317,1.76328667907,277.0349937414],[0.00005019687,3.17787728405,433.7117378768],[0.0000459255,0.61977744975,199.0720014364],[0.00004005867,2.24479718502,63.7358983034],[0.00002953796,0.98280366998,95.9792272178],[0.0000387367,3.22283226966,138.5174968707],[0.00002461186,2.03163875071,735.8765135318],[0.00003269484,0.77492638211,949.1756089698],[0.00001758145,3.2658010994,522.5774180938],[0.00001640172,5.5050445305,846.0828347512],[0.00001391327,4.02333150505,323.5054166574],[0.00001580648,4.37265307169,309.2783226558],[0.00001123498,2.83726798446,415.5524906121],[0.00001017275,3.71700135395,227.5261894396],[0.00000848642,3.1915017083,209.3669421749]],[[213.2990952169,0,0],[0.01297370862,1.82834923978,213.299095438],[0.00564345393,2.88499717272,7.1135470008],[0.00093734369,1.06311793502,426.598190876],[0.00107674962,2.27769131009,206.1855484372],[0.00040244455,2.04108104671,220.4126424388],[0.00019941774,1.2795439047,103.0927742186],[0.00010511678,2.7488034213,14.2270940016],[0.00006416106,0.38238295041,639.897286314],[0.00004848994,2.43037610229,419.4846438752],[0.00004056892,2.92133209468,110.2063212194],[0.00003768635,3.6496533078,3.9321532631]],[[0.0011644133,1.17988132879,7.1135470008],[0.00091841837,0.0732519584,213.299095438],[0.00036661728,0,0],[0.00015274496,4.06493179167,206.1855484372]]],[[[0.04330678039,3.60284428399,213.299095438],[0.00240348302,2.85238489373,426.598190876],[0.00084745939,0,0],[0.00030863357,3.48441504555,220.4126424388],[0.00034116062,0.57297307557,206.1855484372],[0.0001473407,2.11846596715,639.897286314],[0.00009916667,5.79003188904,419.4846438752],[0.00006993564,4.7360468972,7.1135470008],[0.00004807588,5.43305312061,316.3918696566]],[[0.00198927992,4.93901017903,213.299095438],[0.00036947916,3.14159265359,0],[0.00017966989,0.5197943111,426.598190876]]],[[[9.55758135486,0,0],[0.52921382865,2.39226219573,213.299095438],[0.01873679867,5.2354960466,206.1855484372],[0.01464663929,1.64763042902,426.598190876],[0.00821891141,5.93520042303,316.3918696566],[0.00547506923,5.0153261898,103.0927742186],[0.0037168465,2.27114821115,220.4126424388],[0.00361778765,3.13904301847,7.1135470008],[0.00140617506,5.70406606781,632.7837393132],[0.00108974848,3.29313390175,110.2063212194],[0.00069006962,5.94099540992,419.4846438752],[0.00061053367,0.94037691801,639.897286314],[0.00048913294,1.55733638681,202.2533951741],[0.00034143772,0.19519102597,277.0349937414],[0.00032401773,5.47084567016,949.1756089698],[0.00020936596,0.46349251129,735.8765135318],[0.00009796004,5.20477537945,1265.5674786264],[0.00011993338,5.98050967385,846.0828347512],[0.000208393,1.52102476129,433.7117378768],[0.00015298404,3.0594381494,529.6909650946],[0.00006465823,0.17732249942,1052.2683831884],[0.00011380257,1.7310542704,522.5774180938],[0.00003419618,4.94550542171,1581.959348283]],[[0.0618298134,0.2584351148,213.299095438],[0.00506577242,0.71114625261,206.1855484372],[0.00341394029,5.79635741658,426.598190876],[0.00188491195,0.47215589652,220.4126424388],[0.00186261486,3.14159265359,0],[0.00143891146,1.40744822888,7.1135470008]],[[0.00436902572,4.78671677509,213.299095438]]]],Uranus:[[[[5.48129294297,0,0],[0.09260408234,0.89106421507,74.7815985673],[0.01504247898,3.6271926092,1.4844727083],[0.00365981674,1.89962179044,73.297125859],[0.00272328168,3.35823706307,149.5631971346],[0.00070328461,5.39254450063,63.7358983034],[0.00068892678,6.09292483287,76.2660712756],[0.00061998615,2.26952066061,2.9689454166],[0.00061950719,2.85098872691,11.0457002639],[0.0002646877,3.14152083966,71.8126531507],[0.00025710476,6.11379840493,454.9093665273],[0.0002107885,4.36059339067,148.0787244263],[0.00017818647,1.74436930289,36.6485629295],[0.00014613507,4.73732166022,3.9321532631],[0.00011162509,5.8268179635,224.3447957019],[0.0001099791,0.48865004018,138.5174968707],[0.00009527478,2.95516862826,35.1640902212],[0.00007545601,5.236265824,109.9456887885],[0.00004220241,3.23328220918,70.8494453042],[0.000040519,2.277550173,151.0476698429],[0.00003354596,1.0654900738,4.4534181249],[0.00002926718,4.62903718891,9.5612275556],[0.0000349034,5.48306144511,146.594251718],[0.00003144069,4.75199570434,77.7505439839],[0.00002922333,5.35235361027,85.8272988312],[0.00002272788,4.36600400036,70.3281804424],[0.00002051219,1.51773566586,0.1118745846],[0.00002148602,0.60745949945,38.1330356378],[0.00001991643,4.92437588682,277.0349937414],[0.00001376226,2.04283539351,65.2203710117],[0.00001666902,3.62744066769,380.12776796],[0.00001284107,3.11347961505,202.2533951741],[0.00001150429,0.93343589092,3.1813937377],[0.00001533221,2.58594681212,52.6901980395],[0.00001281604,0.54271272721,222.8603229936],[0.00001372139,4.19641530878,111.4301614968],[0.00001221029,0.1990065003,108.4612160802],[0.00000946181,1.19253165736,127.4717966068],[0.00001150989,4.17898916639,33.6796175129]],[[74.7815986091,0,0],[0.00154332863,5.24158770553,74.7815985673],[0.00024456474,1.71260334156,1.4844727083],[0.00009258442,0.4282973235,11.0457002639],[0.00008265977,1.50218091379,63.7358983034],[0.0000915016,1.41213765216,149.5631971346]]],[[[0.01346277648,2.61877810547,74.7815985673],[0.000623414,5.08111189648,149.5631971346],[0.00061601196,3.14159265359,0],[0.00009963722,1.61603805646,76.2660712756],[0.0000992616,0.57630380333,73.297125859]],[[0.00034101978,0.01321929936,74.7815985673]]],[[[19.21264847206,0,0],[0.88784984413,5.60377527014,74.7815985673],[0.03440836062,0.32836099706,73.297125859],[0.0205565386,1.7829515933,149.5631971346],[0.0064932241,4.52247285911,76.2660712756],[0.00602247865,3.86003823674,63.7358983034],[0.00496404167,1.40139935333,454.9093665273],[0.00338525369,1.58002770318,138.5174968707],[0.00243509114,1.57086606044,71.8126531507],[0.00190522303,1.99809394714,1.4844727083],[0.00161858838,2.79137786799,148.0787244263],[0.00143706183,1.38368544947,11.0457002639],[0.00093192405,0.17437220467,36.6485629295],[0.00071424548,4.24509236074,224.3447957019],[0.00089806014,3.66105364565,109.9456887885],[0.00039009723,1.66971401684,70.8494453042],[0.00046677296,1.39976401694,35.1640902212],[0.00039025624,3.36234773834,277.0349937414],[0.00036755274,3.88649278513,146.594251718],[0.00030348723,0.70100838798,151.0476698429],[0.00029156413,3.180563367,77.7505439839],[0.00022637073,0.72518687029,529.6909650946],[0.00011959076,1.7504339214,984.6003316219],[0.00025620756,5.25656086672,380.12776796]],[[0.01479896629,3.67205697578,74.7815985673]]]],Neptune:[[[[5.31188633046,0,0],[0.0179847553,2.9010127389,38.1330356378],[0.01019727652,0.48580922867,1.4844727083],[0.00124531845,4.83008090676,36.6485629295],[0.00042064466,5.41054993053,2.9689454166],[0.00037714584,6.09221808686,35.1640902212],[0.00033784738,1.24488874087,76.2660712756],[0.00016482741,0.00007727998,491.5579294568],[0.00009198584,4.93747051954,39.6175083461],[0.0000899425,0.27462171806,175.1660598002]],[[38.13303563957,0,0],[0.00016604172,4.86323329249,1.4844727083],[0.00015744045,2.27887427527,38.1330356378]]],[[[0.03088622933,1.44104372644,38.1330356378],[0.00027780087,5.91271884599,76.2660712756],[0.00027623609,0,0],[0.00015355489,2.52123799551,36.6485629295],[0.00015448133,3.50877079215,39.6175083461]]],[[[30.07013205828,0,0],[0.27062259632,1.32999459377,38.1330356378],[0.01691764014,3.25186135653,36.6485629295],[0.00807830553,5.18592878704,1.4844727083],[0.0053776051,4.52113935896,35.1640902212],[0.00495725141,1.5710564165,491.5579294568],[0.00274571975,1.84552258866,175.1660598002],[0.0001201232,1.92059384991,1021.2488945514],[0.00121801746,5.79754470298,76.2660712756],[0.00100896068,0.3770272493,73.297125859],[0.00135134092,3.37220609835,39.6175083461],[0.00007571796,1.07149207335,388.4651552382]]]]};function yG(J){var $,Z,W,Q,H,Y,X;let K=2000+(J-14)/365.24217;if(K<-500)return $=(K-1820)/100,-20+32*$*$;if(K<500)return $=K/100,Z=$*$,W=$*Z,Q=Z*Z,H=Z*W,Y=W*W,10583.6-1014.41*$+33.78311*Z-5.952053*W-0.1798452*Q+0.022174192*H+0.0090316521*Y;if(K<1600)return $=(K-1000)/100,Z=$*$,W=$*Z,Q=Z*Z,H=Z*W,Y=W*W,1574.2-556.01*$+71.23472*Z+0.319781*W-0.8503463*Q-0.005050998*H+0.0083572073*Y;if(K<1700)return $=K-1600,Z=$*$,W=$*Z,120-0.9808*$-0.01532*Z+W/7129;if(K<1800)return $=K-1700,Z=$*$,W=$*Z,Q=Z*Z,8.83+0.1603*$-0.0059285*Z+0.00013336*W-Q/1174000;if(K<1860)return $=K-1800,Z=$*$,W=$*Z,Q=Z*Z,H=Z*W,Y=W*W,X=W*Q,13.72-0.332447*$+0.0068612*Z+0.0041116*W-0.00037436*Q+0.0000121272*H-0.0000001699*Y+0.000000000875*X;if(K<1900)return $=K-1860,Z=$*$,W=$*Z,Q=Z*Z,H=Z*W,7.62+0.5737*$-0.251754*Z+0.01680668*W-0.0004473624*Q+H/233174;if(K<1920)return $=K-1900,Z=$*$,W=$*Z,Q=Z*Z,-2.79+1.494119*$-0.0598939*Z+0.0061966*W-0.000197*Q;if(K<1941)return $=K-1920,Z=$*$,W=$*Z,21.2+0.84493*$-0.0761*Z+0.0020936*W;if(K<1961)return $=K-1950,Z=$*$,W=$*Z,29.07+0.407*$-Z/233+W/2547;if(K<1986)return $=K-1975,Z=$*$,W=$*Z,45.45+1.067*$-Z/260-W/718;if(K<2005)return $=K-2000,Z=$*$,W=$*Z,Q=Z*Z,H=Z*W,63.86+0.3345*$-0.060374*Z+0.0017275*W+0.000651814*Q+0.00002373599*H;if(K<2050)return $=K-2000,62.92+0.32217*$+0.005589*$*$;if(K<2150)return $=(K-1820)/100,-20+32*$*$-0.5628*(2150-K);return $=(K-1820)/100,-20+32*$*$}var hG=yG;function TH(J){return J+hG(J)/86400}class h6{constructor(J){if(J instanceof h6){this.date=J.date,this.ut=J.ut,this.tt=J.tt;return}let $=86400000;if(J instanceof Date&&Number.isFinite(J.getTime())){this.date=J,this.ut=(J.getTime()-AH.getTime())/$,this.tt=TH(this.ut);return}if(Number.isFinite(J)){this.date=new Date(AH.getTime()+J*$),this.ut=J,this.tt=TH(this.ut);return}throw"Argument must be a Date object, an AstroTime object, or a numeric UTC Julian date."}static FromTerrestrialTime(J){let $=new h6(J);for(;;){let Z=J-$.tt;if(Math.abs(Z)<0.000000000001)return $;$=$.AddDays(Z)}}toString(){return this.date.toISOString()}AddDays(J){return new h6(this.ut+J)}}function y9(J){if(J instanceof h6)return J;return new h6(J)}function vG(J){var $=J.tt/36525,Z=((((-0.0000000434*$-0.000000576)*$+0.0020034)*$-0.0001831)*$-46.836769)*$+84381.406;return Z/3600}function bG(J,$){let Z=J*0.017453292519943295,W=Math.cos(Z),Q=Math.sin(Z);return[$[0],$[1]*W-$[2]*Q,$[1]*Q+$[2]*W]}function gG(J,$){return bG(vG(J),$)}var pG=0;function uG(J){++pG;let $=J.tt/36525;function Z(I0,P){let m0=[],P0;for(P0=0;P0<=P-I0;++P0)m0.push(0);return{min:I0,array:m0}}function W(I0,P,m0,P0){let S0=[];for(let Y0=0;Y0<=P-I0;++Y0)S0.push(Z(m0,P0));return{min:I0,array:S0}}function Q(I0,P,m0){let P0=I0.array[P-I0.min];return P0.array[m0-P0.min]}function H(I0,P,m0,P0){let S0=I0.array[P-I0.min];S0.array[m0-S0.min]=P0}let Y,X,K,U,G,F,N,E,R,D,q,O,V,L,A,T,I,B,b,z,C,S,h,u=W(-6,6,1,4),l=W(-6,6,1,4);function o(I0,P){return Q(u,I0,P)}function d(I0,P){return Q(l,I0,P)}function t(I0,P,m0){return H(u,I0,P,m0)}function m(I0,P,m0){return H(l,I0,P,m0)}function X0(I0,P,m0,P0,S0){S0(I0*m0-P*P0,P*m0+I0*P0)}function J0(I0){return Math.sin(D9*I0)}N=$*$,R=0,h=0,q=0,O=3422.7;var w0=J0(0.19833+0.05611*$),g0=J0(0.27869+0.04508*$),n=J0(0.16827-0.36903*$),Z0=J0(0.34734-5.37261*$),D0=J0(0.10498-5.37899*$),M0=J0(0.42681-0.41855*$),Q0=J0(0.14943-5.37511*$);B=0.84*w0+0.31*g0+14.27*n+7.26*Z0+0.28*D0+0.24*M0,b=2.94*w0+0.31*g0+14.27*n+9.34*Z0+1.12*D0+0.83*M0,z=-6.4*w0-1.89*M0,C=0.21*w0+0.31*g0+14.27*n-88.7*Z0-15.3*D0+0.24*M0-1.86*Q0,S=B-z,E=-0.000003332*J0(0.59734-5.37261*$)-0.000000539*J0(0.35498-5.37899*$)-0.000000064*J0(0.39943-5.37511*$),V=D9*x6(0.60643382+1336.85522467*$-0.00000313*N)+B/f9,L=D9*x6(0.37489701+1325.55240982*$+0.00002565*N)+b/f9,A=D9*x6(0.99312619+99.99735956*$-0.00000044*N)+z/f9,T=D9*x6(0.25909118+1342.2278298*$-0.00000892*N)+C/f9,I=D9*x6(0.82736186+1236.85308708*$-0.00000397*N)+S/f9;for(G=1;G<=4;++G){switch(G){case 1:K=L,X=4,U=1.000002208;break;case 2:K=A,X=3,U=0.997504612-0.002495388*$;break;case 3:K=T,X=4,U=1.000002708+139.978*E;break;case 4:K=I,X=6,U=1;break;default:throw`Internal error: I = ${G}`}t(0,G,1),t(1,G,Math.cos(K)*U),m(0,G,0),m(1,G,Math.sin(K)*U);for(F=2;F<=X;++F)X0(o(F-1,G),d(F-1,G),o(1,G),d(1,G),(I0,P)=>(t(F,G,I0),m(F,G,P)));for(F=1;F<=X;++F)t(-F,G,o(F,G)),m(-F,G,-d(F,G))}function z0(I0,P,m0,P0){var S0={x:1,y:0},Y0=[0,I0,P,m0,P0];for(var o0=1;o0<=4;++o0)if(Y0[o0]!==0)X0(S0.x,S0.y,o(Y0[o0],o0),d(Y0[o0],o0),(k0,B0)=>(S0.x=k0,S0.y=B0));return S0}function p(I0,P,m0,P0,S0,Y0,o0,k0){var B0=z0(S0,Y0,o0,k0);R+=I0*B0.y,h+=P*B0.y,q+=m0*B0.x,O+=P0*B0.x}p(13.902,14.06,-0.001,0.2607,0,0,0,4),p(0.403,-4.01,0.394,0.0023,0,0,0,3),p(2369.912,2373.36,0.601,28.2333,0,0,0,2),p(-125.154,-112.79,-0.725,-0.9781,0,0,0,1),p(1.979,6.98,-0.445,0.0433,1,0,0,4),p(191.953,192.72,0.029,3.0861,1,0,0,2),p(-8.466,-13.51,0.455,-0.1093,1,0,0,1),p(22639.5,22609.07,0.079,186.5398,1,0,0,0),p(18.609,3.59,-0.094,0.0118,1,0,0,-1),p(-4586.465,-4578.13,-0.077,34.3117,1,0,0,-2),p(3.215,5.44,0.192,-0.0386,1,0,0,-3),p(-38.428,-38.64,0.001,0.6008,1,0,0,-4),p(-0.393,-1.43,-0.092,0.0086,1,0,0,-6),p(-0.289,-1.59,0.123,-0.0053,0,1,0,4),p(-24.42,-25.1,0.04,-0.3,0,1,0,2),p(18.023,17.93,0.007,0.1494,0,1,0,1),p(-668.146,-126.98,-1.302,-0.3997,0,1,0,0),p(0.56,0.32,-0.001,-0.0037,0,1,0,-1),p(-165.145,-165.06,0.054,1.9178,0,1,0,-2),p(-1.877,-6.46,-0.416,0.0339,0,1,0,-4),p(0.213,1.02,-0.074,0.0054,2,0,0,4),p(14.387,14.78,-0.017,0.2833,2,0,0,2),p(-0.586,-1.2,0.054,-0.01,2,0,0,1),p(769.016,767.96,0.107,10.1657,2,0,0,0),p(1.75,2.01,-0.018,0.0155,2,0,0,-1),p(-211.656,-152.53,5.679,-0.3039,2,0,0,-2),p(1.225,0.91,-0.03,-0.0088,2,0,0,-3),p(-30.773,-34.07,-0.308,0.3722,2,0,0,-4),p(-0.57,-1.4,-0.074,0.0109,2,0,0,-6),p(-2.921,-11.75,0.787,-0.0484,1,1,0,2),p(1.267,1.52,-0.022,0.0164,1,1,0,1),p(-109.673,-115.18,0.461,-0.949,1,1,0,0),p(-205.962,-182.36,2.056,1.4437,1,1,0,-2),p(0.233,0.36,0.012,-0.0025,1,1,0,-3),p(-4.391,-9.66,-0.471,0.0673,1,1,0,-4),p(0.283,1.53,-0.111,0.006,1,-1,0,4),p(14.577,31.7,-1.54,0.2302,1,-1,0,2),p(147.687,138.76,0.679,1.1528,1,-1,0,0),p(-1.089,0.55,0.021,0,1,-1,0,-1),p(28.475,23.59,-0.443,-0.2257,1,-1,0,-2),p(-0.276,-0.38,-0.006,-0.0036,1,-1,0,-3),p(0.636,2.27,0.146,-0.0102,1,-1,0,-4),p(-0.189,-1.68,0.131,-0.0028,0,2,0,2),p(-7.486,-0.66,-0.037,-0.0086,0,2,0,0),p(-8.096,-16.35,-0.74,0.0918,0,2,0,-2),p(-5.741,-0.04,0,-0.0009,0,0,2,2),p(0.255,0,0,0,0,0,2,1),p(-411.608,-0.2,0,-0.0124,0,0,2,0),p(0.584,0.84,0,0.0071,0,0,2,-1),p(-55.173,-52.14,0,-0.1052,0,0,2,-2),p(0.254,0.25,0,-0.0017,0,0,2,-3),p(0.025,-1.67,0,0.0031,0,0,2,-4),p(1.06,2.96,-0.166,0.0243,3,0,0,2),p(36.124,50.64,-1.3,0.6215,3,0,0,0),p(-13.193,-16.4,0.258,-0.1187,3,0,0,-2),p(-1.187,-0.74,0.042,0.0074,3,0,0,-4),p(-0.293,-0.31,-0.002,0.0046,3,0,0,-6),p(-0.29,-1.45,0.116,-0.0051,2,1,0,2),p(-7.649,-10.56,0.259,-0.1038,2,1,0,0),p(-8.627,-7.59,0.078,-0.0192,2,1,0,-2),p(-2.74,-2.54,0.022,0.0324,2,1,0,-4),p(1.181,3.32,-0.212,0.0213,2,-1,0,2),p(9.703,11.67,-0.151,0.1268,2,-1,0,0),p(-0.352,-0.37,0.001,-0.0028,2,-1,0,-1),p(-2.494,-1.17,-0.003,-0.0017,2,-1,0,-2),p(0.36,0.2,-0.012,-0.0043,2,-1,0,-4),p(-1.167,-1.25,0.008,-0.0106,1,2,0,0),p(-7.412,-6.12,0.117,0.0484,1,2,0,-2),p(-0.311,-0.65,-0.032,0.0044,1,2,0,-4),p(0.757,1.82,-0.105,0.0112,1,-2,0,2),p(2.58,2.32,0.027,0.0196,1,-2,0,0),p(2.533,2.4,-0.014,-0.0212,1,-2,0,-2),p(-0.344,-0.57,-0.025,0.0036,0,3,0,-2),p(-0.992,-0.02,0,0,1,0,2,2),p(-45.099,-0.02,0,-0.001,1,0,2,0),p(-0.179,-9.52,0,-0.0833,1,0,2,-2),p(-0.301,-0.33,0,0.0014,1,0,2,-4),p(-6.382,-3.37,0,-0.0481,1,0,-2,2),p(39.528,85.13,0,-0.7136,1,0,-2,0),p(9.366,0.71,0,-0.0112,1,0,-2,-2),p(0.202,0.02,0,0,1,0,-2,-4),p(0.415,0.1,0,0.0013,0,1,2,0),p(-2.152,-2.26,0,-0.0066,0,1,2,-2),p(-1.44,-1.3,0,0.0014,0,1,-2,2),p(0.384,-0.04,0,0,0,1,-2,-2),p(1.938,3.6,-0.145,0.0401,4,0,0,0),p(-0.952,-1.58,0.052,-0.013,4,0,0,-2),p(-0.551,-0.94,0.032,-0.0097,3,1,0,0),p(-0.482,-0.57,0.005,-0.0045,3,1,0,-2),p(0.681,0.96,-0.026,0.0115,3,-1,0,0),p(-0.297,-0.27,0.002,-0.0009,2,2,0,-2),p(0.254,0.21,-0.003,0,2,-2,0,-2),p(-0.25,-0.22,0.004,0.0014,1,3,0,-2),p(-3.996,0,0,0.0004,2,0,2,0),p(0.557,-0.75,0,-0.009,2,0,2,-2),p(-0.459,-0.38,0,-0.0053,2,0,-2,2),p(-1.298,0.74,0,0.0004,2,0,-2,0),p(0.538,1.14,0,-0.0141,2,0,-2,-2),p(0.263,0.02,0,0,1,1,2,0),p(0.426,0.07,0,-0.0006,1,1,-2,-2),p(-0.304,0.03,0,0.0003,1,-1,2,0),p(-0.372,-0.19,0,-0.0027,1,-1,-2,2),p(0.418,0,0,0,0,0,4,0),p(-0.33,-0.04,0,0,3,0,2,0);function T0(I0,P,m0,P0,S0){return I0*z0(P,m0,P0,S0).y}D=0,D+=T0(-526.069,0,0,1,-2),D+=T0(-3.352,0,0,1,-4),D+=T0(44.297,1,0,1,-2),D+=T0(-6,1,0,1,-4),D+=T0(20.599,-1,0,1,0),D+=T0(-30.598,-1,0,1,-2),D+=T0(-24.649,-2,0,1,0),D+=T0(-2,-2,0,1,-2),D+=T0(-22.571,0,1,1,-2),D+=T0(10.985,0,-1,1,-2),R+=0.82*J0(0.7736-62.5512*$)+0.31*J0(0.0466-125.1025*$)+0.35*J0(0.5785-25.1042*$)+0.66*J0(0.4591+1335.8075*$)+0.64*J0(0.313-91.568*$)+1.14*J0(0.148+1331.2898*$)+0.21*J0(0.5918+1056.5859*$)+0.44*J0(0.5784+1322.8595*$)+0.24*J0(0.2275-5.7374*$)+0.28*J0(0.2965+2.6929*$)+0.33*J0(0.3132+6.3368*$),Y=T+h/f9;let n0=(1.000002708+139.978*E)*(18519.699999999997+q)*Math.sin(Y)-6.24*Math.sin(3*Y)+D;return{geo_eclip_lon:D9*x6((V+R/f9)/D9),geo_eclip_lat:Math.PI/648000*n0,distance_au:f9*0.00004263520978299708/(0.999953253*O)}}function mG(J,$){return[J.rot[0][0]*$[0]+J.rot[1][0]*$[1]+J.rot[2][0]*$[2],J.rot[0][1]*$[0]+J.rot[1][1]*$[1]+J.rot[2][1]*$[2],J.rot[0][2]*$[0]+J.rot[1][2]*$[1]+J.rot[2][2]*$[2]]}function lG(J,$,Z){let W=dG($,Z);return mG(W,J)}function dG(J,$){let Z=J.tt/36525,W=84381.406,Q=((((-0.0000000951*Z+0.000132851)*Z-0.00114045)*Z-1.0790069)*Z+5038.481507)*Z,H=((((0.0000003337*Z-0.000000467)*Z-0.00772503)*Z+0.0512623)*Z-0.025754)*Z+W,Y=((((-0.000000056*Z+0.000170663)*Z-0.00121197)*Z-2.3814292)*Z+10.556403)*Z;W*=0.00000484813681109536,Q*=0.00000484813681109536,H*=0.00000484813681109536,Y*=0.00000484813681109536;let X=Math.sin(W),K=Math.cos(W),U=Math.sin(-Q),G=Math.cos(-Q),F=Math.sin(-H),N=Math.cos(-H),E=Math.sin(Y),R=Math.cos(Y),D=R*G-U*E*N,q=R*U*K+E*N*G*K-X*E*F,O=R*U*X+E*N*G*X+K*E*F,V=-E*G-U*R*N,L=-E*U*K+R*N*G*K-X*R*F,A=-E*U*X+R*N*G*X+K*R*F,T=U*F,I=-F*G*K-X*N,B=-F*G*X+N*K;if($===E7.Into2000)return new yJ([[D,q,O],[V,L,A],[T,I,B]]);if($===E7.From2000)return new yJ([[D,V,T],[q,L,I],[O,A,B]]);throw"Invalid precess direction"}class S8{constructor(J,$,Z,W){this.x=J,this.y=$,this.z=Z,this.t=W}Length(){return Math.hypot(this.x,this.y,this.z)}}class M9{constructor(J,$,Z,W,Q,H,Y){this.x=J,this.y=$,this.z=Z,this.vx=W,this.vy=Q,this.vz=H,this.t=Y}}class hH{constructor(J,$,Z){this.lat=bZ(J),this.lon=bZ($),this.dist=bZ(Z)}}class yJ{constructor(J){this.rot=J}}function R7(J){let $=y9(J),Z=uG($),W=Z.distance_au*Math.cos(Z.geo_eclip_lat),Q=[W*Math.cos(Z.geo_eclip_lon),W*Math.sin(Z.geo_eclip_lon),Z.distance_au*Math.sin(Z.geo_eclip_lat)],H=gG($,Q),Y=lG(H,$,E7.Into2000);return new S8(Y[0],Y[1],Y[2],$)}function vH(J){let $=y9(J),Z=0.00001,W=$.AddDays(-0.00001),Q=$.AddDays(0.00001),H=R7(W),Y=R7(Q);return new M9((H.x+Y.x)/2,(H.y+Y.y)/2,(H.z+Y.z)/2,(Y.x-H.x)/0.00002,(Y.y-H.y)/0.00002,(Y.z-H.z)/0.00002,$)}function cG(J){let $=y9(J),Z=vH($),W=82.30056;return new M9(Z.x/82.30056,Z.y/82.30056,Z.z/82.30056,Z.vx/82.30056,Z.vy/82.30056,Z.vz/82.30056,$)}function v6(J,$,Z){let W=1,Q=0;for(let H of J){let Y=0;for(let[K,U,G]of H)Y+=K*Math.cos(U+$*G);let X=W*Y;if(Z)X%=D9;Q+=X,W*=$}return Q}function gZ(J,$){let Z=1,W=0,Q=0,H=0;for(let Y of J){let X=0,K=0;for(let[U,G,F]of Y){let N=G+$*F;if(X+=U*F*Math.sin(N),H>0)K+=U*Math.cos(N)}Q+=H*W*K-Z*X,W=Z,Z*=$,++H}return Q}var O7=365250,pZ=0,uZ=1,mZ=2;function lZ(J){return new B8(J[0]+0.00000044036*J[1]-0.000000190919*J[2],-0.000000479966*J[0]+0.917482137087*J[1]-0.397776982902*J[2],0.397776982902*J[1]+0.917482137087*J[2])}function bH(J,$,Z){let W=Z*Math.cos($),Q=Math.cos(J),H=Math.sin(J);return[W*Q,W*H,Z*Math.sin($)]}function xJ(J,$){let Z=$.tt/O7,W=v6(J[pZ],Z,!0),Q=v6(J[uZ],Z,!1),H=v6(J[mZ],Z,!1),Y=bH(W,Q,H);return lZ(Y).ToAstroVector($)}function dZ(J,$){let Z=$/O7,W=v6(J[pZ],Z,!0),Q=v6(J[uZ],Z,!1),H=v6(J[mZ],Z,!1),Y=gZ(J[pZ],Z),X=gZ(J[uZ],Z),K=gZ(J[mZ],Z),U=Math.cos(W),G=Math.sin(W),F=Math.cos(Q),N=Math.sin(Q),E=+(K*F*U)-H*N*U*X-H*F*G*Y,R=+(K*F*G)-H*N*G*X+H*F*U*Y,D=+(K*N)+H*F*X,q=bH(W,Q,H),O=[E/O7,R/O7,D/O7],V=lZ(q),L=lZ(O);return new W6($,V,L)}function jJ(J,$,Z,W){let Q=W/(W+0.0002959122082855911),H=xJ(x9[Z],$);J.x+=Q*H.x,J.y+=Q*H.y,J.z+=Q*H.z}function nG(J){let $=new S8(0,0,0,J);return jJ($,J,y0.Jupiter,0.0000002825345909524226),jJ($,J,y0.Saturn,0.00000008459715185680659),jJ($,J,y0.Uranus,0.00000001292024916781969),jJ($,J,y0.Neptune,0.00000001524358900784276),$}var cZ=51,sG=29200,y6=146,k9=201,Z6=[[-730000,[-26.118207232108,-14.376168177825,3.384402515299],[0.0016339372163656,-0.0027861699588508,-0.0013585880229445]],[-700800,[41.974905202127,-0.448502952929,-12.770351505989],[0.00073458569351457,0.0022785014891658,0.00048619778602049]],[-671600,[14.706930780744,44.269110540027,9.353698474772],[-0.00210001479998,0.00022295915939915,0.00070143443551414]],[-642400,[-29.441003929957,-6.43016153057,6.858481011305],[0.00084495803960544,-0.0030783914758711,-0.0012106305981192]],[-613200,[39.444396946234,-6.557989760571,-13.913760296463],[0.0011480029005873,0.0022400006880665,0.00035168075922288]],[-584000,[20.2303809507,43.266966657189,7.382966091923],[-0.0019754081700585,0.00053457141292226,0.00075929169129793]],[-554800,[-30.65832536462,2.093818874552,9.880531138071],[0.000061010603013347,-0.0031326500935382,-0.00099346125151067]],[-525600,[35.737703251673,-12.587706024764,-14.677847247563],[0.0015802939375649,0.0021347678412429,0.00019074436384343]],[-496400,[25.466295188546,41.367478338417,5.216476873382],[-0.0018054401046468,0.0008328308359951,0.00080260156912107]],[-467200,[-29.847174904071,10.636426313081,12.297904180106],[-0.00063257063052907,-0.0029969577578221,-0.00074476074151596]],[-438000,[30.774692107687,-18.236637015304,-14.945535879896],[0.0020113162005465,0.0019353827024189,-0.0000020937793168297]],[-408800,[30.243153324028,38.656267888503,2.938501750218],[-0.0016052508674468,0.0011183495337525,0.00083333973416824]],[-379600,[-27.288984772533,18.643162147874,14.023633623329],[-0.0011856388898191,-0.0027170609282181,-0.00049015526126399]],[-350400,[24.519605196774,-23.245756064727,-14.626862367368],[0.0024322321483154,0.0016062008146048,-0.00023369181613312]],[-321200,[34.505274805875,35.125338586954,0.557361475637],[-0.0013824391637782,0.0013833397561817,0.00084823598806262]],[-292000,[-23.275363915119,25.818514298769,15.055381588598],[-0.0016062295460975,-0.0023395961498533,-0.00024377362639479]],[-262800,[17.050384798092,-27.180376290126,-13.608963321694],[0.0028175521080578,0.0011358749093955,-0.00049548725258825]],[-233600,[38.093671910285,30.880588383337,-1.843688067413],[-0.0011317697153459,0.0016128814698472,0.00084177586176055]],[-204400,[-18.197852930878,31.932869934309,15.438294826279],[-0.0019117272501813,-0.0019146495909842,-0.000019657304369835]],[-175200,[8.528924039997,-29.618422200048,-11.805400994258],[0.0031034370787005,0.0005139363329243,-0.00077293066202546]],[-146000,[40.94685725864,25.904973592021,-4.256336240499],[-0.00083652705194051,0.0018129497136404,0.0008156422827306]],[-116800,[-12.326958895325,36.881883446292,15.217158258711],[-0.0021166103705038,-0.001481442003599,0.00017401209844705]],[-87600,[-0.633258375909,-30.018759794709,-9.17193287495],[0.0032016994581737,-0.00025279858672148,-0.0010411088271861]],[-58400,[42.936048423883,20.344685584452,-6.588027007912],[-0.00050525450073192,0.0019910074335507,0.00077440196540269]],[-29200,[-5.975910552974,40.61180995846,14.470131723673],[-0.0022184202156107,-0.0010562361130164,0.00033652250216211]],[0,[-9.875369580774,-27.978926224737,-5.753711824704],[0.0030287533248818,-0.0011276087003636,-0.0012651326732361]],[29200,[43.958831986165,14.214147973292,-8.808306227163],[-0.00014717608981871,0.0021404187242141,0.00071486567806614]],[58400,[0.67813676352,43.094461639362,13.243238780721],[-0.0022358226110718,-0.00063233636090933,0.00047664798895648]],[87600,[-18.282602096834,-23.30503958666,-1.766620508028],[0.0025567245263557,-0.0019902940754171,-0.0013943491701082]],[116800,[43.873338744526,7.700705617215,-10.814273666425],[0.00023174803055677,0.0022402163127924,0.00062988756452032]],[146000,[7.392949027906,44.382678951534,11.629500214854],[-0.002193281545383,-0.00021751799585364,0.00059556516201114]],[175200,[-24.981690229261,-16.204012851426,2.466457544298],[0.001819398914958,-0.0026765419531201,-0.0013848283502247]],[204400,[42.530187039511,0.845935508021,-12.554907527683],[0.00065059779150669,0.0022725657282262,0.00051133743202822]],[233600,[13.999526486822,44.462363044894,9.669418486465],[-0.0021079296569252,0.00017533423831993,0.00069128485798076]],[262800,[-29.184024803031,-7.371243995762,6.493275957928],[0.00093581363109681,-0.0030610357109184,-0.0012364201089345]],[292000,[39.831980671753,-6.078405766765,-13.909815358656],[0.0011117769689167,0.0022362097830152,0.00036230548231153]],[321200,[20.294955108476,43.417190420251,7.450091985932],[-0.0019742157451535,0.00053102050468554,0.00075938408813008]],[350400,[-30.66999230216,2.318743558955,9.973480913858],[0.000045605107450676,-0.0031308219926928,-0.00099066533301924]],[379600,[35.626122155983,-12.897647509224,-14.777586508444],[0.0016015684949743,0.0021171931182284,0.00018002516202204]],[408800,[26.133186148561,41.232139187599,5.00640132622],[-0.0017857704419579,0.00086046232702817,0.00080614690298954]],[438000,[-29.57674022923,11.863535943587,12.631323039872],[-0.00072292830060955,-0.0029587820140709,-0.000708242964503]],[467200,[29.910805787391,-19.159019294,-15.013363865194],[0.0020871080437997,0.0018848372554514,-0.000038528655083926]],[496400,[31.375957451819,38.050372720763,2.433138343754],[-0.0015546055556611,0.0011699815465629,0.00083565439266001]],[525600,[-26.360071336928,20.662505904952,14.414696258958],[-0.0013142373118349,-0.0026236647854842,-0.00042542017598193]],[554800,[22.599441488648,-24.508879898306,-14.484045731468],[0.0025454108304806,0.0014917058755191,-0.00030243665086079]],[584000,[35.877864013014,33.894226366071,-0.224524636277],[-0.0012941245730845,0.0014560427668319,0.00084762160640137]],[613200,[-21.538149762417,28.204068269761,15.321973799534],[-0.001731211740901,-0.0021939631314577,-0.0001631691327518]],[642400,[13.971521374415,-28.339941764789,-13.083792871886],[0.0029334630526035,0.00091860931752944,-0.00059939422488627]],[671600,[39.526942044143,28.93989736011,-2.872799527539],[-0.0010068481658095,0.001702113288809,0.00083578230511981]],[700800,[-15.576200701394,34.399412961275,15.466033737854],[-0.0020098814612884,-0.0017191109825989,0.000070414782780416]],[730000,[4.24325283709,-30.118201690825,-10.707441231349],[0.0031725847067411,0.0001609846120227,-0.00090672150593868]]];class B8{constructor(J,$,Z){this.x=J,this.y=$,this.z=Z}clone(){return new B8(this.x,this.y,this.z)}ToAstroVector(J){return new S8(this.x,this.y,this.z,J)}static zero(){return new B8(0,0,0)}quadrature(){return this.x*this.x+this.y*this.y+this.z*this.z}add(J){return new B8(this.x+J.x,this.y+J.y,this.z+J.z)}sub(J){return new B8(this.x-J.x,this.y-J.y,this.z-J.z)}incr(J){this.x+=J.x,this.y+=J.y,this.z+=J.z}decr(J){this.x-=J.x,this.y-=J.y,this.z-=J.z}mul(J){return new B8(J*this.x,J*this.y,J*this.z)}div(J){return new B8(this.x/J,this.y/J,this.z/J)}mean(J){return new B8((this.x+J.x)/2,(this.y+J.y)/2,(this.z+J.z)/2)}neg(){return new B8(-this.x,-this.y,-this.z)}}class W6{constructor(J,$,Z){this.tt=J,this.r=$,this.v=Z}clone(){return new W6(this.tt,this.r,this.v)}sub(J){return new W6(this.tt,this.r.sub(J.r),this.v.sub(J.v))}}function iG(J){let[$,[Z,W,Q],[H,Y,X]]=J;return new W6($,new B8(Z,W,Q),new B8(H,Y,X))}function fJ(J,$,Z,W){let Q=W/(W+0.0002959122082855911),H=dZ(x9[Z],$);return J.r.incr(H.r.mul(Q)),J.v.incr(H.v.mul(Q)),H}function q7(J,$,Z){let W=Z.sub(J),Q=W.quadrature();return W.mul($/(Q*Math.sqrt(Q)))}class D7{constructor(J){let $=new W6(J,new B8(0,0,0),new B8(0,0,0));this.Jupiter=fJ($,J,y0.Jupiter,0.0000002825345909524226),this.Saturn=fJ($,J,y0.Saturn,0.00000008459715185680659),this.Uranus=fJ($,J,y0.Uranus,0.00000001292024916781969),this.Neptune=fJ($,J,y0.Neptune,0.00000001524358900784276),this.Jupiter.r.decr($.r),this.Jupiter.v.decr($.v),this.Saturn.r.decr($.r),this.Saturn.v.decr($.v),this.Uranus.r.decr($.r),this.Uranus.v.decr($.v),this.Neptune.r.decr($.r),this.Neptune.v.decr($.v),this.Sun=new W6(J,$.r.mul(-1),$.v.mul(-1))}Acceleration(J){let $=q7(J,0.0002959122082855911,this.Sun.r);return $.incr(q7(J,0.0000002825345909524226,this.Jupiter.r)),$.incr(q7(J,0.00000008459715185680659,this.Saturn.r)),$.incr(q7(J,0.00000001292024916781969,this.Uranus.r)),$.incr(q7(J,0.00000001524358900784276,this.Neptune.r)),$}}class vJ{constructor(J,$,Z,W){this.tt=J,this.r=$,this.v=Z,this.a=W}clone(){return new vJ(this.tt,this.r.clone(),this.v.clone(),this.a.clone())}}class oZ{constructor(J,$){this.bary=J,this.grav=$}}function hJ(J,$,Z,W){return new B8($.x+J*(Z.x+J*W.x/2),$.y+J*(Z.y+J*W.y/2),$.z+J*(Z.z+J*W.z/2))}function SH(J,$,Z){return new B8($.x+J*Z.x,$.y+J*Z.y,$.z+J*Z.z)}function nZ(J,$){let Z=J-$.tt,W=new D7(J),Q=hJ(Z,$.r,$.v,$.a),H=W.Acceleration(Q).mean($.a),Y=hJ(Z,$.r,$.v,H),X=$.v.add(H.mul(Z)),K=W.Acceleration(Y),U=new vJ(J,Y,X,K);return new oZ(W,U)}var oG=[];function gH(J,$){let Z=Math.floor(J);if(Z<0)return 0;if(Z>=$)return $-1;return Z}function sZ(J){let $=iG(J),Z=new D7($.tt),W=$.r.add(Z.Sun.r),Q=$.v.add(Z.Sun.v),H=Z.Acceleration(W),Y=new vJ($.tt,W,Q,H);return new oZ(Z,Y)}function aG(J,$){let Z=Z6[0][0];if($<Z||$>Z6[cZ-1][0])return null;let W=gH(($-Z)/sG,cZ-1);if(!J[W]){let H=J[W]=[];H[0]=sZ(Z6[W]).grav,H[k9-1]=sZ(Z6[W+1]).grav;let Y,X=H[0].tt;for(Y=1;Y<k9-1;++Y)H[Y]=nZ(X+=y6,H[Y-1]).grav;X=H[k9-1].tt;var Q=[];Q[k9-1]=H[k9-1];for(Y=k9-2;Y>0;--Y)Q[Y]=nZ(X-=y6,Q[Y+1]).grav;for(Y=k9-2;Y>0;--Y){let K=Y/(k9-1);H[Y].r=H[Y].r.mul(1-K).add(Q[Y].r.mul(K)),H[Y].v=H[Y].v.mul(1-K).add(Q[Y].v.mul(K)),H[Y].a=H[Y].a.mul(1-K).add(Q[Y].a.mul(K))}}return J[W]}function _H(J,$,Z){let W=sZ(J),Q=Math.ceil(($-W.grav.tt)/Z);for(let H=0;H<Q;++H)W=nZ(H+1===Q?$:W.grav.tt+Z,W.grav);return W}function pH(J,$){let Z,W,Q,H=aG(oG,J.tt);if(!H){let Y;if(J.tt<Z6[0][0])Y=_H(Z6[0],J.tt,-y6);else Y=_H(Z6[cZ-1],J.tt,+y6);Z=Y.grav.r,W=Y.grav.v,Q=Y.bary}else{let Y=gH((J.tt-H[0].tt)/y6,k9-1),X=H[Y],K=H[Y+1],U=X.a.mean(K.a),G=hJ(J.tt-X.tt,X.r,X.v,U),F=SH(J.tt-X.tt,X.v,U),N=hJ(J.tt-K.tt,K.r,K.v,U),E=SH(J.tt-K.tt,K.v,U),R=(J.tt-X.tt)/y6;Z=G.mul(1-R).add(N.mul(R)),W=F.mul(1-R).add(E.mul(R))}if($){if(!Q)Q=new D7(J.tt);Z=Z.sub(Q.Sun.r),W=W.sub(Q.Sun.v)}return new M9(Z.x,Z.y,Z.z,W.x,W.y,W.z,J)}var mq=new yJ([[0.999432765338654,-0.0336771074697641,0],[0.0303959428906285,0.902057912352809,0.430543388542295],[-0.0144994559663353,-0.430299169409101,0.902569881273754]]);function b6(J,$){var Z=y9($);if(J in x9)return xJ(x9[J],Z);if(J===y0.Pluto){let Y=pH(Z,!0);return new S8(Y.x,Y.y,Y.z,Z)}if(J===y0.Sun)return new S8(0,0,0,Z);if(J===y0.Moon){var W=xJ(x9.Earth,Z),Q=R7(Z);return new S8(W.x+Q.x,W.y+Q.y,W.z+Q.z,Z)}if(J===y0.EMB){let Y=xJ(x9.Earth,Z),X=R7(Z),K=82.30056;return new S8(Y.x+X.x/82.30056,Y.y+X.y/82.30056,Y.z+X.z/82.30056,Z)}if(J===y0.SSB)return nG(Z);let H=iZ(J);if(H){let Y=new hH(H.dec,15*H.ra,H.dist);return $5(Y,Z)}throw`HelioVector: Unknown body "${J}"`}function rG(J,$){let Z=$,W=0;for(let Q=0;Q<10;++Q){let H=J(Z),Y=H.Length()/173.1446326846693;if(Y>1)throw"Object is too distant for light-travel solver.";let X=$.AddDays(-Y);if(W=Math.abs(X.tt-Z.tt),W<0.000000001)return H;Z=X}throw`Light-travel time solver did not converge: dt = ${W}`}class uH{constructor(J,$,Z,W){this.observerBody=J,this.targetBody=$,this.aberration=Z,this.observerPos=W}Position(J){if(this.aberration)this.observerPos=b6(this.observerBody,J);let $=b6(this.targetBody,J);return new S8($.x-this.observerPos.x,$.y-this.observerPos.y,$.z-this.observerPos.z,J)}}function tG(J,$,Z,W){yH(W);let Q=y9(J);if(iZ(Z)){let X=b6(Z,Q);if(W){let U=J5($,Q),G=new S8(X.x-U.x,X.y-U.y,X.z-U.z,Q),F=173.1446326846693/G.Length();return new S8(G.x+U.vx/F,G.y+U.vy/F,G.z+U.vz/F,Q)}let K=b6($,Q);return new S8(X.x-K.x,X.y-K.y,X.z-K.z,Q)}let H;if(W)H=new S8(0,0,0,Q);else H=b6($,Q);let Y=new uH($,Z,W,H);return rG((X)=>Y.Position(X),Q)}function aZ(J,$,Z){yH(Z);let W=y9($);switch(J){case y0.Earth:return new S8(0,0,0,W);case y0.Moon:return R7(W);default:let Q=tG(W,y0.Earth,J,Z);return Q.t=W,Q}}function eG(J,$){return new M9(J.r.x,J.r.y,J.r.z,J.v.x,J.v.y,J.v.z,$)}function J5(J,$){let Z=y9($);switch(J){case y0.Sun:return new M9(0,0,0,0,0,0,Z);case y0.SSB:let W=new D7(Z.tt);return new M9(-W.Sun.r.x,-W.Sun.r.y,-W.Sun.r.z,-W.Sun.v.x,-W.Sun.v.y,-W.Sun.v.z,Z);case y0.Mercury:case y0.Venus:case y0.Earth:case y0.Mars:case y0.Jupiter:case y0.Saturn:case y0.Uranus:case y0.Neptune:let Q=dZ(x9[J],Z.tt);return eG(Q,Z);case y0.Pluto:return pH(Z,!0);case y0.Moon:case y0.EMB:let H=dZ(x9.Earth,Z.tt),Y=J==y0.Moon?vH(Z):cG(Z);return new M9(Y.x+H.r.x,Y.y+H.r.y,Y.z+H.r.z,Y.vx+H.v.x,Y.vy+H.v.y,Y.vz+H.v.z,Z);default:if(iZ(J)){let X=b6(J,Z);return new M9(X.x,X.y,X.z,0,0,0,Z)}throw`HelioState: Unsupported body "${J}"`}}var jH;(function(J){J[J.Pericenter=0]="Pericenter",J[J.Apocenter=1]="Apocenter"})(jH||(jH={}));function $5(J,$){$=y9($);let Z=J.lat*0.017453292519943295,W=J.lon*0.017453292519943295,Q=J.dist*Math.cos(Z);return new S8(Q*Math.cos(W),Q*Math.sin(W),J.dist*Math.sin(Z),$)}var fH;(function(J){J.Penumbral="penumbral",J.Partial="partial",J.Annular="annular",J.Total="total"})(fH||(fH={}));var xH;(function(J){J[J.Invalid=0]="Invalid",J[J.Ascending=1]="Ascending",J[J.Descending=-1]="Descending"})(xH||(xH={}));var g6=6371,bJ=1737.4,gJ=149597870.7,mH=[{name:"Launch & LEO",startTime:Date.UTC(2026,3,1,22,35),endTime:Date.UTC(2026,3,1,23,30),color:"#ff4444"},{name:"HEO Checkout",startTime:Date.UTC(2026,3,1,23,30),endTime:Date.UTC(2026,3,3,16,0),color:"#ffaa00"},{name:"Trans-Lunar Coast",startTime:Date.UTC(2026,3,3,16,0),endTime:Date.UTC(2026,3,6,21,0),color:"#00aaff"},{name:"Lunar Flyby",startTime:Date.UTC(2026,3,6,21,0),endTime:Date.UTC(2026,3,7,1,0),color:"#ff00ff"},{name:"Return Coast",startTime:Date.UTC(2026,3,7,1,0),endTime:Date.UTC(2026,3,10,23,0),color:"#00ffaa"},{name:"Reentry & Splashdown",startTime:Date.UTC(2026,3,10,23,0),endTime:Date.UTC(2026,3,11,0,7),color:"#ff4444"}];function lH(J){let $=new MJ,Z=new Z9,W=new o8(g6,96,48),Q=$.load("/textures/earth_atmos_2048.jpg");Q.colorSpace=A6;let H=new o9({map:Q,normalMap:$.load("/textures/earth_normal_2048.jpg"),normalScale:new A0(0.85,-0.85),specularMap:$.load("/textures/earth_specular_2048.jpg"),specular:new _0(3355443),shininess:15}),Y=new H8(W,H);Y.rotation.z=0.4101,Z.add(Y);let X=new o8(g6*1.003,64,32),K=$.load("/textures/earth_clouds_1024.png");K.colorSpace=A6;let U=new o9({map:K,transparent:!0,opacity:0.35,depthWrite:!1}),G=new H8(X,U);Z.add(G);let F=new o8(g6*1.015,64,32),N=new o9({color:4491519,transparent:!0,opacity:0.08,side:T8,depthWrite:!1});Z.add(new H8(F,N));let E=new U7(4491519,0.4,80000);E.position.set(0,0,0),Z.add(E),J.add(Z);let R=new o8(bJ,48,24),D=$.load("/textures/moon_1024.jpg");D.colorSpace=A6;let q=new o9({map:D,shininess:2}),O=new H8(R,q);J.add(O);let V=W5();J.add(V);let L=Z5();J.add(L);function A(I){let B=aZ(y0.Moon,I,!0);O.position.set(B.x*gJ,B.z*gJ,-B.y*gJ);let b=aZ(y0.Sun,I,!0),z=new _(b.x,b.z,-b.y).normalize();L.position.copy(z.multiplyScalar(1200000))}function T(){return V.position.clone()}return{earthGroup:Z,moonMesh:O,sunGroup:L,spacecraft:V,updatePositions:A,getSpacecraftWorldPos:T}}function Z5(){let J=new Z9,$=new o8(6000,32,32),Z=new _9({color:16777198});J.add(new H8($,Z));let W=new o8(12000,24,24),Q=new _9({color:16768358,transparent:!0,opacity:0.3,depthWrite:!1});J.add(new H8(W,Q));let H=new o8(20000,16,16),Y=new _9({color:16763972,transparent:!0,opacity:0.1,depthWrite:!1});return J.add(new H8(H,Y)),J}function W5(){let J=new Z9,$=new E9(150,450,550,32),Z=new R9({color:14737632,metalness:0.3,roughness:0.65}),W=new H8($,Z);W.position.y=575,J.add(W);let Q=new E9(460,460,30,32),H=new R9({color:1710618,metalness:0.05,roughness:0.95}),Y=new H8(Q,H);Y.position.y=285,J.add(Y);let X=new E9(440,400,50,32),K=new R9({color:5592405,metalness:0.5,roughness:0.5}),U=new H8(X,K);U.position.y=245,J.add(U);let G=new E9(400,400,550,32),F=new R9({color:13215820,metalness:0.55,roughness:0.35}),N=new H8(G,F);N.position.y=-55,J.add(N);let E=new E9(100,180,200,16),R=new R9({color:3815994,metalness:0.7,roughness:0.3}),D=new H8(E,R);D.position.y=-430,J.add(D);let q=new j9(1800,20,350),O=new R9({color:1450048,metalness:0.5,roughness:0.4,side:l8});for(let L=0;L<4;L++){let A=new H8(q,O),T=L*Math.PI/2+Math.PI/4;A.position.set(Math.cos(T)*1100,-55,Math.sin(T)*1100),A.rotation.y=T,J.add(A)}let V=new U7(8961023,0.6,20000);return J.add(V),J}var Q5=new _0(0,0.85,1),H5=new _0(0.15,0.2,0.35),Y5=new _0(1,1,1);function dH(J,$){let Z=new Float32Array($.length*3),W=new Float32Array($.length*3);for(let N=0;N<$.length;N++){let E=$[N];Z[N*3]=E.x,Z[N*3+1]=E.z,Z[N*3+2]=-E.y}let Q=new V8;Q.setAttribute("position",new G8(Z,3)),Q.setAttribute("color",new G8(W,3));let H=new Q7({vertexColors:!0,linewidth:1,transparent:!0,opacity:0.9}),Y=new EJ(Q,H);J.add(Y);let X=0;function K(N){X=Math.max(0,Math.min(N,$.length-1));let E=Q.attributes.color,R=E.array;for(let D=0;D<$.length;D++){let q;if(D<X-1)q=Q5;else if(D>=X-1&&D<=X+1)q=Y5;else q=H5;R[D*3]=q.r,R[D*3+1]=q.g,R[D*3+2]=q.b}E.needsUpdate=!0}function U(N){let E=Math.max(0,Math.min(N,$.length-1)),R=$[E];return new _(R.x,R.z,-R.y)}function G(N){let E=Math.max(0,Math.min(N,$.length-1)),R=Math.floor(E),D=Math.min(R+1,$.length-1),q=E-R,O=$[R],V=$[D];return new _(O.x+(V.x-O.x)*q,O.z+(V.z-O.z)*q,-(O.y+(V.y-O.y)*q))}function F(N){let E=Math.max(0,Math.min(N,$.length-1)),R=$[E];return{speed:Math.sqrt(R.vx*R.vx+R.vy*R.vy+R.vz*R.vz),vx:R.vx,vy:R.vy,vz:R.vz}}return K(0),{pathLine:Y,setCurrentTimeIndex:K,getPositionAtIndex:U,getInterpolatedPosition:G,getVelocityAtIndex:F,pointCount:$.length}}function nH(J,$){let Z=J[0].timestamp,W=J[J.length-1].timestamp,Q=W-Z,H=O(Date.now()),Y=!1,X=500,K=$.querySelector("#scrubber"),U=$.querySelector("#play-btn"),G=$.querySelector("#speed-select"),F=$.querySelector("#time-display"),N=$.querySelector("#phase-display"),E=$.querySelector("#dist-earth"),R=$.querySelector("#dist-moon"),D=$.querySelector("#velocity"),q=$.querySelector("#met-display");K.min="0",K.max=String(J.length-1),K.step="0.1";function O(T){return Math.max(Z,Math.min(T,W))}function V(T){let I=O(T);for(let B=0;B<J.length-1;B++)if(I>=J[B].timestamp&&I<=J[B+1].timestamp){let b=(I-J[B].timestamp)/(J[B+1].timestamp-J[B].timestamp);return B+b}return I<=Z?0:J.length-1}function L(){let T=V(H);K.value=String(T),A()}function A(){let T=new Date(H);F.textContent=X5(T),q.textContent=K5(H-Z);let I=U5(H);if(I)N.textContent=I.name,N.style.color=I.color;else N.textContent="—",N.style.color="#888";let B=(H-Z)/Q*100;K.style.setProperty("--progress",`${B}%`)}return K.addEventListener("input",()=>{let T=parseFloat(K.value),I=Math.floor(T),B=Math.min(I+1,J.length-1),b=T-I;H=J[I].timestamp+(J[B].timestamp-J[I].timestamp)*b,A()}),U.addEventListener("click",()=>{Y=!Y,U.textContent=Y?"⏸":"▶",U.title=Y?"Pause":"Play"}),G.addEventListener("change",()=>{X=parseInt(G.value,10)}),L(),{getCurrentIndex(){return Math.round(V(H))},getCurrentFractionalIndex(){return V(H)},getCurrentTimestamp(){return H},update(T){if(!Y)return;if(H+=T*X,H>=W)H=W,Y=!1,U.textContent="▶";if(H<=Z)H=Z;L()},updateInfoPanel(T){let I=Math.max(0,T.distanceFromEarth-g6);E.textContent=cH(I);let B=Math.max(0,T.distanceFromMoon-bJ);R.textContent=cH(B),D.textContent=`${T.velocity.toFixed(2)} km/s (${(T.velocity*3600).toFixed(0)} km/h)`},isPlaying(){return Y}}}function X5(J){return J.toISOString().replace("T"," ").replace(/\.\d+Z$/," UTC")}function K5(J){let $=Math.floor(J/1000),Z=Math.floor($/86400),W=Math.floor($%86400/3600),Q=Math.floor($%3600/60),H=$%60;return`T+${Z}d ${String(W).padStart(2,"0")}:${String(Q).padStart(2,"0")}:${String(H).padStart(2,"0")}`}function cH(J){if(J>=1000)return`${J.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g,",")} km`;return`${J.toFixed(1)} km`}function U5(J){return mH.find(($)=>J>=$.startTime&&J<=$.endTime)??null}function pJ(J,$){let Z=document.createElement("div");return Z.className=`label-3d ${$}`,Z.textContent=J,document.body.appendChild(Z),Z}function G5(J,$,Z){let W=Z.clientWidth/2,Q=Z.clientHeight/2;for(let H of J){let Y=H.getWorldPosition();if(Y.project($),Y.z>1){H.element.style.display="none";continue}H.element.style.display="block",H.element.style.left=`${Y.x*W+W}px`,H.element.style.top=`${-Y.y*Q+Q}px`}}function F5(J,$,Z){let W=new O9;for(let U of $)W.expandByPoint(new _(U.x,U.z,-U.y));W.expandByPoint(Z),W.expandByPoint(new _(0,0,0));let Q=new _;W.getCenter(Q);let H=new _;W.getSize(H);let Y=Math.max(H.x,H.y,H.z),X=J.fov*Math.PI/180,K=Y/2/Math.tan(X/2)*1.6;return{position:new _(Q.x+K*0.1,Q.y+K*0.4,Q.z+K*0.75),target:Q}}function N5(J){return J<0.5?4*J*J*J:1-Math.pow(-2*J+2,3)/2}async function q5(){let J=await fetch("/data/trajectory.json");if(!J.ok)J=await fetch("/api/trajectory");if(!J.ok)throw Error(`Failed to fetch trajectory: ${J.status}`);return(await J.json()).map((Z)=>({timestamp:Z.t,x:Z.x,y:Z.y,z:Z.z,vx:Z.vx,vy:Z.vy,vz:Z.vz}))}async function O5(){let J=document.getElementById("scene-canvas"),$=document.getElementById("controls"),Z=document.getElementById("loading"),W=document.getElementById("header"),Q=PH(J),H=lH(Q.scene),Y;try{Y=await q5()}catch(L){Z.textContent=`Failed to load trajectory data. ${L}`,Z.style.color="#ff4444";return}if(Y.length===0){Z.textContent="No trajectory data available from JPL Horizons.",Z.style.color="#ff4444";return}let X=dH(Q.scene,Y),K=nH(Y,$),U=K.getCurrentFractionalIndex(),G=K.getCurrentIndex(),F=X.getInterpolatedPosition(U);H.spacecraft.position.copy(F),X.setCurrentTimeIndex(G),H.updatePositions(new Date(K.getCurrentTimestamp()));let N=X.getVelocityAtIndex(G);if(N.speed>0.01){let L=new _(N.vx,N.vz,-N.vy).normalize();H.spacecraft.quaternion.setFromUnitVectors(new _(0,1,0),L)}let E=F5(Q.camera,Y,H.moonMesh.position),R=new _(3000,1500,4000);Q.camera.position.copy(F).add(R),Q.controls.target.copy(F),Q.controls.enabled=!1,Q.controls.update(),Z.style.display="none",W.style.opacity="0",W.style.transition="opacity 1.2s ease";let D={active:!0,startTime:-1,duration:5000,startPos:Q.camera.position.clone(),startTarget:F.clone(),endPos:E.position,endTarget:E.target,uiRevealed:!1},q=[{element:pJ("Earth","label-earth"),getWorldPosition:()=>new _(0,0,0)},{element:pJ("Moon","label-moon"),getWorldPosition:()=>H.moonMesh.position.clone()},{element:pJ("Orion","label-spacecraft"),getWorldPosition:()=>H.spacecraft.position.clone()},{element:pJ("Sun","label-sun"),getWorldPosition:()=>H.sunGroup.position.clone()}];for(let L of q)L.element.style.opacity="0",L.element.style.transition="opacity 0.8s ease";let O=new IJ;function V(){let L=O.getDelta()*1000;if(D.active){if(D.startTime<0)D.startTime=performance.now();let S=performance.now()-D.startTime,h=Math.min(S/D.duration,1),u=N5(h);if(Q.camera.position.lerpVectors(D.startPos,D.endPos,u),Q.controls.target.lerpVectors(D.startTarget,D.endTarget,u),h>0.3&&!D.uiRevealed){D.uiRevealed=!0,W.style.opacity="1";for(let l of q)l.element.style.opacity="1"}if(h>=1)D.active=!1,Q.controls.enabled=!0,$.style.display="flex",$.style.opacity="0",requestAnimationFrame(()=>{$.style.transition="opacity 0.8s ease",$.style.opacity="1"})}K.update(L);let A=K.getCurrentFractionalIndex(),T=K.getCurrentIndex(),I=X.getInterpolatedPosition(A);H.spacecraft.position.copy(I);let B=X.getVelocityAtIndex(T);if(B.speed>0.01){let S=new _(B.vx,B.vz,-B.vy).normalize(),h=new h8().setFromUnitVectors(new _(0,1,0),S);H.spacecraft.quaternion.slerp(h,0.1)}X.setCurrentTimeIndex(T);let b=new Date(K.getCurrentTimestamp());H.updatePositions(b);let z=I.length(),C=I.distanceTo(H.moonMesh.position);K.updateInfoPanel({distanceFromEarth:z,distanceFromMoon:C,velocity:B.speed}),H.earthGroup.rotation.y+=L*0.000005,G5(q,Q.camera,J),Q.controls.update(),Q.renderer.render(Q.scene,Q.camera)}Q.renderer.setAnimationLoop(V)}O5().catch((J)=>{console.error("Initialization failed:",J);let $=document.getElementById("loading");if($)$.textContent=`Error: ${J.message}`,$.style.color="#ff4444"});

//# debugId=781F457A654A2D0164756E2164756E21
//# sourceMappingURL=app.js.map
