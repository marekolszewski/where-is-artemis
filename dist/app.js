var fZ="172",P6={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},T6={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hZ=0,D$=1,xZ=2;var M$=1,yZ=2,H6=3,z7=0,A8=1,d8=2,A6=0,r7=1,k$=2,L$=3,C$=4,vZ=5,w7=100,bZ=101,gZ=102,pZ=103,uZ=104,lZ=200,mZ=201,dZ=202,cZ=203,nZ=204,sZ=205,iZ=206,oZ=207,aZ=208,rZ=209,tZ=210,eZ=211,HW=212,$W=213,JW=214,sH=0,iH=1,oH=2,t7=3,aH=4,rH=5,tH=6,eH=7,ZW=0,WW=1,QW=2,N6=0,YW=1,XW=2,KW=3,H9=4,UW=5,GW=6,EW=7;var I7=301,l6=302,$9=303,J9=304,e7=306,HH=1000,RW=1001,FW=1002,V7=1003,NW=1004;var $H=1005;var m6=1006,Z9=1007;var B7=1008;var S6=1009,qW=1010,OW=1011,JH=1012,z$=1013,P7=1014,_6=1015,ZH=1016,w$=1017,I$=1018,T7=1020,DW=35902,MW=1021,kW=1022,$6=1023,LW=1024,CW=1025,W9=1026,WH=1027,zW=1028,V$=1029,wW=1030,B$=1031;var P$=1033,Q9=33776,Y9=33777,X9=33778,K9=33779,T$=35840,A$=35841,S$=35842,_$=35843,j$=36196,f$=37492,h$=37496,x$=37808,y$=37809,v$=37810,b$=37811,g$=37812,p$=37813,u$=37814,l$=37815,m$=37816,d$=37817,c$=37818,n$=37819,s$=37820,i$=37821,U9=36492,o$=36494,a$=36495,IW=36283,r$=36284,t$=36285,e$=36286;var VW=3201;var BW=0,PW=1,d6="",c6="srgb",QH="srgb-linear",HJ="linear",Q8="srgb";var TW=512,AW=513,SW=514,$J=515,_W=516,jW=517,fW=518,hW=519;var JJ="300 es",xW=2000;class q6{addEventListener(H,$){if(this._listeners===void 0)this._listeners={};let J=this._listeners;if(J[H]===void 0)J[H]=[];if(J[H].indexOf($)===-1)J[H].push($)}hasEventListener(H,$){if(this._listeners===void 0)return!1;let J=this._listeners;return J[H]!==void 0&&J[H].indexOf($)!==-1}removeEventListener(H,$){if(this._listeners===void 0)return;let Z=this._listeners[H];if(Z!==void 0){let W=Z.indexOf($);if(W!==-1)Z.splice(W,1)}}dispatchEvent(H){if(this._listeners===void 0)return;let J=this._listeners[H.type];if(J!==void 0){H.target=this;let Z=J.slice(0);for(let W=0,Q=Z.length;W<Q;W++)Z[W].call(this,H);H.target=null}}}var z8=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],XZ=1234567,o7=Math.PI/180,L7=180/Math.PI;function A7(){let H=Math.random()*4294967295|0,$=Math.random()*4294967295|0,J=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(z8[H&255]+z8[H>>8&255]+z8[H>>16&255]+z8[H>>24&255]+"-"+z8[$&255]+z8[$>>8&255]+"-"+z8[$>>16&15|64]+z8[$>>24&255]+"-"+z8[J&63|128]+z8[J>>8&255]+"-"+z8[J>>16&255]+z8[J>>24&255]+z8[Z&255]+z8[Z>>8&255]+z8[Z>>16&255]+z8[Z>>24&255]).toLowerCase()}function d0(H,$,J){return Math.max($,Math.min(J,H))}function ZJ(H,$){return(H%$+$)%$}function JY(H,$,J,Z,W){return Z+(H-$)*(W-Z)/(J-$)}function ZY(H,$,J){if(H!==$)return(J-H)/($-H);else return 0}function a7(H,$,J){return(1-J)*H+J*$}function WY(H,$,J,Z){return a7(H,$,1-Math.exp(-J*Z))}function QY(H,$=1){return $-Math.abs(ZJ(H,$*2)-$)}function YY(H,$,J){if(H<=$)return 0;if(H>=J)return 1;return H=(H-$)/(J-$),H*H*(3-2*H)}function XY(H,$,J){if(H<=$)return 0;if(H>=J)return 1;return H=(H-$)/(J-$),H*H*H*(H*(H*6-15)+10)}function KY(H,$){return H+Math.floor(Math.random()*($-H+1))}function UY(H,$){return H+Math.random()*($-H)}function GY(H){return H*(0.5-Math.random())}function EY(H){if(H!==void 0)XZ=H;let $=XZ+=1831565813;return $=Math.imul($^$>>>15,$|1),$^=$+Math.imul($^$>>>7,$|61),(($^$>>>14)>>>0)/4294967296}function RY(H){return H*o7}function FY(H){return H*L7}function NY(H){return(H&H-1)===0&&H!==0}function qY(H){return Math.pow(2,Math.ceil(Math.log(H)/Math.LN2))}function OY(H){return Math.pow(2,Math.floor(Math.log(H)/Math.LN2))}function DY(H,$,J,Z,W){let{cos:Q,sin:Y}=Math,X=Q(J/2),K=Y(J/2),U=Q(($+Z)/2),G=Y(($+Z)/2),E=Q(($-Z)/2),R=Y(($-Z)/2),q=Q((Z-$)/2),O=Y((Z-$)/2);switch(W){case"XYX":H.set(X*G,K*E,K*R,X*U);break;case"YZY":H.set(K*R,X*G,K*E,X*U);break;case"ZXZ":H.set(K*E,K*R,X*G,X*U);break;case"XZX":H.set(X*G,K*O,K*q,X*U);break;case"YXY":H.set(K*q,X*G,K*O,X*U);break;case"ZYZ":H.set(K*O,K*q,X*G,X*U);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+W)}}function M7(H,$){switch($.constructor){case Float32Array:return H;case Uint32Array:return H/4294967295;case Uint16Array:return H/65535;case Uint8Array:return H/255;case Int32Array:return Math.max(H/2147483647,-1);case Int16Array:return Math.max(H/32767,-1);case Int8Array:return Math.max(H/127,-1);default:throw Error("Invalid component type.")}}function T8(H,$){switch($.constructor){case Float32Array:return H;case Uint32Array:return Math.round(H*4294967295);case Uint16Array:return Math.round(H*65535);case Uint8Array:return Math.round(H*255);case Int32Array:return Math.round(H*2147483647);case Int16Array:return Math.round(H*32767);case Int8Array:return Math.round(H*127);default:throw Error("Invalid component type.")}}var WJ={DEG2RAD:o7,RAD2DEG:L7,generateUUID:A7,clamp:d0,euclideanModulo:ZJ,mapLinear:JY,inverseLerp:ZY,lerp:a7,damp:WY,pingpong:QY,smoothstep:YY,smootherstep:XY,randInt:KY,randFloat:UY,randFloatSpread:GY,seededRandom:EY,degToRad:RY,radToDeg:FY,isPowerOfTwo:NY,ceilPowerOfTwo:qY,floorPowerOfTwo:OY,setQuaternionFromProperEuler:DY,normalize:T8,denormalize:M7};class T0{constructor(H=0,$=0){T0.prototype.isVector2=!0,this.x=H,this.y=$}get width(){return this.x}set width(H){this.x=H}get height(){return this.y}set height(H){this.y=H}set(H,$){return this.x=H,this.y=$,this}setScalar(H){return this.x=H,this.y=H,this}setX(H){return this.x=H,this}setY(H){return this.y=H,this}setComponent(H,$){switch(H){case 0:this.x=$;break;case 1:this.y=$;break;default:throw Error("index is out of range: "+H)}return this}getComponent(H){switch(H){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+H)}}clone(){return new this.constructor(this.x,this.y)}copy(H){return this.x=H.x,this.y=H.y,this}add(H){return this.x+=H.x,this.y+=H.y,this}addScalar(H){return this.x+=H,this.y+=H,this}addVectors(H,$){return this.x=H.x+$.x,this.y=H.y+$.y,this}addScaledVector(H,$){return this.x+=H.x*$,this.y+=H.y*$,this}sub(H){return this.x-=H.x,this.y-=H.y,this}subScalar(H){return this.x-=H,this.y-=H,this}subVectors(H,$){return this.x=H.x-$.x,this.y=H.y-$.y,this}multiply(H){return this.x*=H.x,this.y*=H.y,this}multiplyScalar(H){return this.x*=H,this.y*=H,this}divide(H){return this.x/=H.x,this.y/=H.y,this}divideScalar(H){return this.multiplyScalar(1/H)}applyMatrix3(H){let $=this.x,J=this.y,Z=H.elements;return this.x=Z[0]*$+Z[3]*J+Z[6],this.y=Z[1]*$+Z[4]*J+Z[7],this}min(H){return this.x=Math.min(this.x,H.x),this.y=Math.min(this.y,H.y),this}max(H){return this.x=Math.max(this.x,H.x),this.y=Math.max(this.y,H.y),this}clamp(H,$){return this.x=d0(this.x,H.x,$.x),this.y=d0(this.y,H.y,$.y),this}clampScalar(H,$){return this.x=d0(this.x,H,$),this.y=d0(this.y,H,$),this}clampLength(H,$){let J=this.length();return this.divideScalar(J||1).multiplyScalar(d0(J,H,$))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(H){return this.x*H.x+this.y*H.y}cross(H){return this.x*H.y-this.y*H.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(H){let $=Math.sqrt(this.lengthSq()*H.lengthSq());if($===0)return Math.PI/2;let J=this.dot(H)/$;return Math.acos(d0(J,-1,1))}distanceTo(H){return Math.sqrt(this.distanceToSquared(H))}distanceToSquared(H){let $=this.x-H.x,J=this.y-H.y;return $*$+J*J}manhattanDistanceTo(H){return Math.abs(this.x-H.x)+Math.abs(this.y-H.y)}setLength(H){return this.normalize().multiplyScalar(H)}lerp(H,$){return this.x+=(H.x-this.x)*$,this.y+=(H.y-this.y)*$,this}lerpVectors(H,$,J){return this.x=H.x+($.x-H.x)*J,this.y=H.y+($.y-H.y)*J,this}equals(H){return H.x===this.x&&H.y===this.y}fromArray(H,$=0){return this.x=H[$],this.y=H[$+1],this}toArray(H=[],$=0){return H[$]=this.x,H[$+1]=this.y,H}fromBufferAttribute(H,$){return this.x=H.getX($),this.y=H.getY($),this}rotateAround(H,$){let J=Math.cos($),Z=Math.sin($),W=this.x-H.x,Q=this.y-H.y;return this.x=W*J-Q*Z+H.x,this.y=W*Z+Q*J+H.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class y0{constructor(H,$,J,Z,W,Q,Y,X,K){if(y0.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],H!==void 0)this.set(H,$,J,Z,W,Q,Y,X,K)}set(H,$,J,Z,W,Q,Y,X,K){let U=this.elements;return U[0]=H,U[1]=Z,U[2]=Y,U[3]=$,U[4]=W,U[5]=X,U[6]=J,U[7]=Q,U[8]=K,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(H){let $=this.elements,J=H.elements;return $[0]=J[0],$[1]=J[1],$[2]=J[2],$[3]=J[3],$[4]=J[4],$[5]=J[5],$[6]=J[6],$[7]=J[7],$[8]=J[8],this}extractBasis(H,$,J){return H.setFromMatrix3Column(this,0),$.setFromMatrix3Column(this,1),J.setFromMatrix3Column(this,2),this}setFromMatrix4(H){let $=H.elements;return this.set($[0],$[4],$[8],$[1],$[5],$[9],$[2],$[6],$[10]),this}multiply(H){return this.multiplyMatrices(this,H)}premultiply(H){return this.multiplyMatrices(H,this)}multiplyMatrices(H,$){let J=H.elements,Z=$.elements,W=this.elements,Q=J[0],Y=J[3],X=J[6],K=J[1],U=J[4],G=J[7],E=J[2],R=J[5],q=J[8],O=Z[0],D=Z[3],F=Z[6],N=Z[1],I=Z[4],L=Z[7],T=Z[2],_=Z[5],w=Z[8];return W[0]=Q*O+Y*N+X*T,W[3]=Q*D+Y*I+X*_,W[6]=Q*F+Y*L+X*w,W[1]=K*O+U*N+G*T,W[4]=K*D+U*I+G*_,W[7]=K*F+U*L+G*w,W[2]=E*O+R*N+q*T,W[5]=E*D+R*I+q*_,W[8]=E*F+R*L+q*w,this}multiplyScalar(H){let $=this.elements;return $[0]*=H,$[3]*=H,$[6]*=H,$[1]*=H,$[4]*=H,$[7]*=H,$[2]*=H,$[5]*=H,$[8]*=H,this}determinant(){let H=this.elements,$=H[0],J=H[1],Z=H[2],W=H[3],Q=H[4],Y=H[5],X=H[6],K=H[7],U=H[8];return $*Q*U-$*Y*K-J*W*U+J*Y*X+Z*W*K-Z*Q*X}invert(){let H=this.elements,$=H[0],J=H[1],Z=H[2],W=H[3],Q=H[4],Y=H[5],X=H[6],K=H[7],U=H[8],G=U*Q-Y*K,E=Y*X-U*W,R=K*W-Q*X,q=$*G+J*E+Z*R;if(q===0)return this.set(0,0,0,0,0,0,0,0,0);let O=1/q;return H[0]=G*O,H[1]=(Z*K-U*J)*O,H[2]=(Y*J-Z*Q)*O,H[3]=E*O,H[4]=(U*$-Z*X)*O,H[5]=(Z*W-Y*$)*O,H[6]=R*O,H[7]=(J*X-K*$)*O,H[8]=(Q*$-J*W)*O,this}transpose(){let H,$=this.elements;return H=$[1],$[1]=$[3],$[3]=H,H=$[2],$[2]=$[6],$[6]=H,H=$[5],$[5]=$[7],$[7]=H,this}getNormalMatrix(H){return this.setFromMatrix4(H).invert().transpose()}transposeIntoArray(H){let $=this.elements;return H[0]=$[0],H[1]=$[3],H[2]=$[6],H[3]=$[1],H[4]=$[4],H[5]=$[7],H[6]=$[2],H[7]=$[5],H[8]=$[8],this}setUvTransform(H,$,J,Z,W,Q,Y){let X=Math.cos(W),K=Math.sin(W);return this.set(J*X,J*K,-J*(X*Q+K*Y)+Q+H,-Z*K,Z*X,-Z*(-K*Q+X*Y)+Y+$,0,0,1),this}scale(H,$){return this.premultiply(n9.makeScale(H,$)),this}rotate(H){return this.premultiply(n9.makeRotation(-H)),this}translate(H,$){return this.premultiply(n9.makeTranslation(H,$)),this}makeTranslation(H,$){if(H.isVector2)this.set(1,0,H.x,0,1,H.y,0,0,1);else this.set(1,0,H,0,1,$,0,0,1);return this}makeRotation(H){let $=Math.cos(H),J=Math.sin(H);return this.set($,-J,0,J,$,0,0,0,1),this}makeScale(H,$){return this.set(H,0,0,0,$,0,0,0,1),this}equals(H){let $=this.elements,J=H.elements;for(let Z=0;Z<9;Z++)if($[Z]!==J[Z])return!1;return!0}fromArray(H,$=0){for(let J=0;J<9;J++)this.elements[J]=H[J+$];return this}toArray(H=[],$=0){let J=this.elements;return H[$]=J[0],H[$+1]=J[1],H[$+2]=J[2],H[$+3]=J[3],H[$+4]=J[4],H[$+5]=J[5],H[$+6]=J[6],H[$+7]=J[7],H[$+8]=J[8],H}clone(){return new this.constructor().fromArray(this.elements)}}var n9=new y0;function QJ(H){for(let $=H.length-1;$>=0;--$)if(H[$]>=65535)return!0;return!1}function C7(H){return document.createElementNS("http://www.w3.org/1999/xhtml",H)}function yW(){let H=C7("canvas");return H.style.display="block",H}var KZ={};function n6(H){if(H in KZ)return;KZ[H]=!0,console.warn(H)}function vW(H,$,J){return new Promise(function(Z,W){function Q(){switch(H.clientWaitSync($,H.SYNC_FLUSH_COMMANDS_BIT,0)){case H.WAIT_FAILED:W();break;case H.TIMEOUT_EXPIRED:setTimeout(Q,J);break;default:Z()}}setTimeout(Q,J)})}function bW(H){let $=H.elements;$[2]=0.5*$[2]+0.5*$[3],$[6]=0.5*$[6]+0.5*$[7],$[10]=0.5*$[10]+0.5*$[11],$[14]=0.5*$[14]+0.5*$[15]}function gW(H){let $=H.elements;if($[11]===-1)$[10]=-$[10]-1,$[14]=-$[14];else $[10]=-$[10],$[14]=-$[14]+1}var UZ=new y0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),GZ=new y0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function MY(){let H={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(W,Q,Y){if(this.enabled===!1||Q===Y||!Q||!Y)return W;if(this.spaces[Q].transfer==="srgb")W.r=F6(W.r),W.g=F6(W.g),W.b=F6(W.b);if(this.spaces[Q].primaries!==this.spaces[Y].primaries)W.applyMatrix3(this.spaces[Q].toXYZ),W.applyMatrix3(this.spaces[Y].fromXYZ);if(this.spaces[Y].transfer==="srgb")W.r=k7(W.r),W.g=k7(W.g),W.b=k7(W.b);return W},fromWorkingColorSpace:function(W,Q){return this.convert(W,this.workingColorSpace,Q)},toWorkingColorSpace:function(W,Q){return this.convert(W,Q,this.workingColorSpace)},getPrimaries:function(W){return this.spaces[W].primaries},getTransfer:function(W){if(W==="")return"linear";return this.spaces[W].transfer},getLuminanceCoefficients:function(W,Q=this.workingColorSpace){return W.fromArray(this.spaces[Q].luminanceCoefficients)},define:function(W){Object.assign(this.spaces,W)},_getMatrix:function(W,Q,Y){return W.copy(this.spaces[Q].toXYZ).multiply(this.spaces[Y].fromXYZ)},_getDrawingBufferColorSpace:function(W){return this.spaces[W].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(W=this.workingColorSpace){return this.spaces[W].workingColorSpaceConfig.unpackColorSpace}},$=[0.64,0.33,0.3,0.6,0.15,0.06],J=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return H.define({["srgb-linear"]:{primaries:$,whitePoint:Z,transfer:"linear",toXYZ:UZ,fromXYZ:GZ,luminanceCoefficients:J,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:$,whitePoint:Z,transfer:"srgb",toXYZ:UZ,fromXYZ:GZ,luminanceCoefficients:J,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),H}var i0=MY();function F6(H){return H<0.04045?H*0.0773993808:Math.pow(H*0.9478672986+0.0521327014,2.4)}function k7(H){return H<0.0031308?H*12.92:1.055*Math.pow(H,0.41666)-0.055}var Y7;class YJ{static getDataURL(H){if(/^data:/i.test(H.src))return H.src;if(typeof HTMLCanvasElement>"u")return H.src;let $;if(H instanceof HTMLCanvasElement)$=H;else{if(Y7===void 0)Y7=C7("canvas");Y7.width=H.width,Y7.height=H.height;let J=Y7.getContext("2d");if(H instanceof ImageData)J.putImageData(H,0,0);else J.drawImage(H,0,0,H.width,H.height);$=Y7}if($.width>2048||$.height>2048)return console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",H),$.toDataURL("image/jpeg",0.6);else return $.toDataURL("image/png")}static sRGBToLinear(H){if(typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&H instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&H instanceof ImageBitmap){let $=C7("canvas");$.width=H.width,$.height=H.height;let J=$.getContext("2d");J.drawImage(H,0,0,H.width,H.height);let Z=J.getImageData(0,0,H.width,H.height),W=Z.data;for(let Q=0;Q<W.length;Q++)W[Q]=F6(W[Q]/255)*255;return J.putImageData(Z,0,0),$}else if(H.data){let $=H.data.slice(0);for(let J=0;J<$.length;J++)if($ instanceof Uint8Array||$ instanceof Uint8ClampedArray)$[J]=Math.floor(F6($[J]/255)*255);else $[J]=F6($[J]);return{data:$,width:H.width,height:H.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),H}}var kY=0;class G9{constructor(H=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kY++}),this.uuid=A7(),this.data=H,this.dataReady=!0,this.version=0}set needsUpdate(H){if(H===!0)this.version++}toJSON(H){let $=H===void 0||typeof H==="string";if(!$&&H.images[this.uuid]!==void 0)return H.images[this.uuid];let J={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let W;if(Array.isArray(Z)){W=[];for(let Q=0,Y=Z.length;Q<Y;Q++)if(Z[Q].isDataTexture)W.push(s9(Z[Q].image));else W.push(s9(Z[Q]))}else W=s9(Z);J.url=W}if(!$)H.images[this.uuid]=J;return J}}function s9(H){if(typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&H instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&H instanceof ImageBitmap)return YJ.getDataURL(H);else if(H.data)return{data:Array.from(H.data),width:H.width,height:H.height,type:H.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}var LY=0;class L8 extends q6{constructor(H=L8.DEFAULT_IMAGE,$=L8.DEFAULT_MAPPING,J=1001,Z=1001,W=1006,Q=1008,Y=1023,X=1009,K=L8.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:LY++}),this.uuid=A7(),this.name="",this.source=new G9(H),this.mipmaps=[],this.mapping=$,this.channel=0,this.wrapS=J,this.wrapT=Z,this.magFilter=W,this.minFilter=Q,this.anisotropy=K,this.format=Y,this.internalFormat=null,this.type=X,this.offset=new T0(0,0),this.repeat=new T0(1,1),this.center=new T0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new y0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(H=null){this.source.data=H}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(H){return this.name=H.name,this.source=H.source,this.mipmaps=H.mipmaps.slice(0),this.mapping=H.mapping,this.channel=H.channel,this.wrapS=H.wrapS,this.wrapT=H.wrapT,this.magFilter=H.magFilter,this.minFilter=H.minFilter,this.anisotropy=H.anisotropy,this.format=H.format,this.internalFormat=H.internalFormat,this.type=H.type,this.offset.copy(H.offset),this.repeat.copy(H.repeat),this.center.copy(H.center),this.rotation=H.rotation,this.matrixAutoUpdate=H.matrixAutoUpdate,this.matrix.copy(H.matrix),this.generateMipmaps=H.generateMipmaps,this.premultiplyAlpha=H.premultiplyAlpha,this.flipY=H.flipY,this.unpackAlignment=H.unpackAlignment,this.colorSpace=H.colorSpace,this.renderTarget=H.renderTarget,this.isRenderTargetTexture=H.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(H.userData)),this.needsUpdate=!0,this}toJSON(H){let $=H===void 0||typeof H==="string";if(!$&&H.textures[this.uuid]!==void 0)return H.textures[this.uuid];let J={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(H).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)J.userData=this.userData;if(!$)H.textures[this.uuid]=J;return J}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(H){if(this.mapping!==300)return H;if(H.applyMatrix3(this.matrix),H.x<0||H.x>1)switch(this.wrapS){case 1000:H.x=H.x-Math.floor(H.x);break;case 1001:H.x=H.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(H.x)%2)===1)H.x=Math.ceil(H.x)-H.x;else H.x=H.x-Math.floor(H.x);break}if(H.y<0||H.y>1)switch(this.wrapT){case 1000:H.y=H.y-Math.floor(H.y);break;case 1001:H.y=H.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(H.y)%2)===1)H.y=Math.ceil(H.y)-H.y;else H.y=H.y-Math.floor(H.y);break}if(this.flipY)H.y=1-H.y;return H}set needsUpdate(H){if(H===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(H){if(H===!0)this.pmremVersion++}}L8.DEFAULT_IMAGE=null;L8.DEFAULT_MAPPING=300;L8.DEFAULT_ANISOTROPY=1;class J8{constructor(H=0,$=0,J=0,Z=1){J8.prototype.isVector4=!0,this.x=H,this.y=$,this.z=J,this.w=Z}get width(){return this.z}set width(H){this.z=H}get height(){return this.w}set height(H){this.w=H}set(H,$,J,Z){return this.x=H,this.y=$,this.z=J,this.w=Z,this}setScalar(H){return this.x=H,this.y=H,this.z=H,this.w=H,this}setX(H){return this.x=H,this}setY(H){return this.y=H,this}setZ(H){return this.z=H,this}setW(H){return this.w=H,this}setComponent(H,$){switch(H){case 0:this.x=$;break;case 1:this.y=$;break;case 2:this.z=$;break;case 3:this.w=$;break;default:throw Error("index is out of range: "+H)}return this}getComponent(H){switch(H){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+H)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(H){return this.x=H.x,this.y=H.y,this.z=H.z,this.w=H.w!==void 0?H.w:1,this}add(H){return this.x+=H.x,this.y+=H.y,this.z+=H.z,this.w+=H.w,this}addScalar(H){return this.x+=H,this.y+=H,this.z+=H,this.w+=H,this}addVectors(H,$){return this.x=H.x+$.x,this.y=H.y+$.y,this.z=H.z+$.z,this.w=H.w+$.w,this}addScaledVector(H,$){return this.x+=H.x*$,this.y+=H.y*$,this.z+=H.z*$,this.w+=H.w*$,this}sub(H){return this.x-=H.x,this.y-=H.y,this.z-=H.z,this.w-=H.w,this}subScalar(H){return this.x-=H,this.y-=H,this.z-=H,this.w-=H,this}subVectors(H,$){return this.x=H.x-$.x,this.y=H.y-$.y,this.z=H.z-$.z,this.w=H.w-$.w,this}multiply(H){return this.x*=H.x,this.y*=H.y,this.z*=H.z,this.w*=H.w,this}multiplyScalar(H){return this.x*=H,this.y*=H,this.z*=H,this.w*=H,this}applyMatrix4(H){let $=this.x,J=this.y,Z=this.z,W=this.w,Q=H.elements;return this.x=Q[0]*$+Q[4]*J+Q[8]*Z+Q[12]*W,this.y=Q[1]*$+Q[5]*J+Q[9]*Z+Q[13]*W,this.z=Q[2]*$+Q[6]*J+Q[10]*Z+Q[14]*W,this.w=Q[3]*$+Q[7]*J+Q[11]*Z+Q[15]*W,this}divide(H){return this.x/=H.x,this.y/=H.y,this.z/=H.z,this.w/=H.w,this}divideScalar(H){return this.multiplyScalar(1/H)}setAxisAngleFromQuaternion(H){this.w=2*Math.acos(H.w);let $=Math.sqrt(1-H.w*H.w);if($<0.0001)this.x=1,this.y=0,this.z=0;else this.x=H.x/$,this.y=H.y/$,this.z=H.z/$;return this}setAxisAngleFromRotationMatrix(H){let $,J,Z,W,Q=0.01,Y=0.1,X=H.elements,K=X[0],U=X[4],G=X[8],E=X[1],R=X[5],q=X[9],O=X[2],D=X[6],F=X[10];if(Math.abs(U-E)<0.01&&Math.abs(G-O)<0.01&&Math.abs(q-D)<0.01){if(Math.abs(U+E)<0.1&&Math.abs(G+O)<0.1&&Math.abs(q+D)<0.1&&Math.abs(K+R+F-3)<0.1)return this.set(1,0,0,0),this;$=Math.PI;let I=(K+1)/2,L=(R+1)/2,T=(F+1)/2,_=(U+E)/4,w=(G+O)/4,B=(q+D)/4;if(I>L&&I>T)if(I<0.01)J=0,Z=0.707106781,W=0.707106781;else J=Math.sqrt(I),Z=_/J,W=w/J;else if(L>T)if(L<0.01)J=0.707106781,Z=0,W=0.707106781;else Z=Math.sqrt(L),J=_/Z,W=B/Z;else if(T<0.01)J=0.707106781,Z=0.707106781,W=0;else W=Math.sqrt(T),J=w/W,Z=B/W;return this.set(J,Z,W,$),this}let N=Math.sqrt((D-q)*(D-q)+(G-O)*(G-O)+(E-U)*(E-U));if(Math.abs(N)<0.001)N=1;return this.x=(D-q)/N,this.y=(G-O)/N,this.z=(E-U)/N,this.w=Math.acos((K+R+F-1)/2),this}setFromMatrixPosition(H){let $=H.elements;return this.x=$[12],this.y=$[13],this.z=$[14],this.w=$[15],this}min(H){return this.x=Math.min(this.x,H.x),this.y=Math.min(this.y,H.y),this.z=Math.min(this.z,H.z),this.w=Math.min(this.w,H.w),this}max(H){return this.x=Math.max(this.x,H.x),this.y=Math.max(this.y,H.y),this.z=Math.max(this.z,H.z),this.w=Math.max(this.w,H.w),this}clamp(H,$){return this.x=d0(this.x,H.x,$.x),this.y=d0(this.y,H.y,$.y),this.z=d0(this.z,H.z,$.z),this.w=d0(this.w,H.w,$.w),this}clampScalar(H,$){return this.x=d0(this.x,H,$),this.y=d0(this.y,H,$),this.z=d0(this.z,H,$),this.w=d0(this.w,H,$),this}clampLength(H,$){let J=this.length();return this.divideScalar(J||1).multiplyScalar(d0(J,H,$))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(H){return this.x*H.x+this.y*H.y+this.z*H.z+this.w*H.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(H){return this.normalize().multiplyScalar(H)}lerp(H,$){return this.x+=(H.x-this.x)*$,this.y+=(H.y-this.y)*$,this.z+=(H.z-this.z)*$,this.w+=(H.w-this.w)*$,this}lerpVectors(H,$,J){return this.x=H.x+($.x-H.x)*J,this.y=H.y+($.y-H.y)*J,this.z=H.z+($.z-H.z)*J,this.w=H.w+($.w-H.w)*J,this}equals(H){return H.x===this.x&&H.y===this.y&&H.z===this.z&&H.w===this.w}fromArray(H,$=0){return this.x=H[$],this.y=H[$+1],this.z=H[$+2],this.w=H[$+3],this}toArray(H=[],$=0){return H[$]=this.x,H[$+1]=this.y,H[$+2]=this.z,H[$+3]=this.w,H}fromBufferAttribute(H,$){return this.x=H.getX($),this.y=H.getY($),this.z=H.getZ($),this.w=H.getW($),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class XJ extends q6{constructor(H=1,$=1,J={}){super();this.isRenderTarget=!0,this.width=H,this.height=$,this.depth=1,this.scissor=new J8(0,0,H,$),this.scissorTest=!1,this.viewport=new J8(0,0,H,$);let Z={width:H,height:$,depth:1};J=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},J);let W=new L8(Z,J.mapping,J.wrapS,J.wrapT,J.magFilter,J.minFilter,J.format,J.type,J.anisotropy,J.colorSpace);W.flipY=!1,W.generateMipmaps=J.generateMipmaps,W.internalFormat=J.internalFormat,this.textures=[];let Q=J.count;for(let Y=0;Y<Q;Y++)this.textures[Y]=W.clone(),this.textures[Y].isRenderTargetTexture=!0,this.textures[Y].renderTarget=this;this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=J.depthTexture,this.samples=J.samples}get texture(){return this.textures[0]}set texture(H){this.textures[0]=H}set depthTexture(H){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(H!==null)H.renderTarget=this;this._depthTexture=H}get depthTexture(){return this._depthTexture}setSize(H,$,J=1){if(this.width!==H||this.height!==$||this.depth!==J){this.width=H,this.height=$,this.depth=J;for(let Z=0,W=this.textures.length;Z<W;Z++)this.textures[Z].image.width=H,this.textures[Z].image.height=$,this.textures[Z].image.depth=J;this.dispose()}this.viewport.set(0,0,H,$),this.scissor.set(0,0,H,$)}clone(){return new this.constructor().copy(this)}copy(H){this.width=H.width,this.height=H.height,this.depth=H.depth,this.scissor.copy(H.scissor),this.scissorTest=H.scissorTest,this.viewport.copy(H.viewport),this.textures.length=0;for(let J=0,Z=H.textures.length;J<Z;J++)this.textures[J]=H.textures[J].clone(),this.textures[J].isRenderTargetTexture=!0,this.textures[J].renderTarget=this;let $=Object.assign({},H.texture.image);if(this.texture.source=new G9($),this.depthBuffer=H.depthBuffer,this.stencilBuffer=H.stencilBuffer,this.resolveDepthBuffer=H.resolveDepthBuffer,this.resolveStencilBuffer=H.resolveStencilBuffer,H.depthTexture!==null)this.depthTexture=H.depthTexture.clone();return this.samples=H.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class O6 extends XJ{constructor(H=1,$=1,J={}){super(H,$,J);this.isWebGLRenderTarget=!0}}class E9 extends L8{constructor(H=null,$=1,J=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:H,width:$,height:J,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(H){this.layerUpdates.add(H)}clearLayerUpdates(){this.layerUpdates.clear()}}class KJ extends L8{constructor(H=null,$=1,J=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:H,width:$,height:J,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class v8{constructor(H=0,$=0,J=0,Z=1){this.isQuaternion=!0,this._x=H,this._y=$,this._z=J,this._w=Z}static slerpFlat(H,$,J,Z,W,Q,Y){let X=J[Z+0],K=J[Z+1],U=J[Z+2],G=J[Z+3],E=W[Q+0],R=W[Q+1],q=W[Q+2],O=W[Q+3];if(Y===0){H[$+0]=X,H[$+1]=K,H[$+2]=U,H[$+3]=G;return}if(Y===1){H[$+0]=E,H[$+1]=R,H[$+2]=q,H[$+3]=O;return}if(G!==O||X!==E||K!==R||U!==q){let D=1-Y,F=X*E+K*R+U*q+G*O,N=F>=0?1:-1,I=1-F*F;if(I>Number.EPSILON){let T=Math.sqrt(I),_=Math.atan2(T,F*N);D=Math.sin(D*_)/T,Y=Math.sin(Y*_)/T}let L=Y*N;if(X=X*D+E*L,K=K*D+R*L,U=U*D+q*L,G=G*D+O*L,D===1-Y){let T=1/Math.sqrt(X*X+K*K+U*U+G*G);X*=T,K*=T,U*=T,G*=T}}H[$]=X,H[$+1]=K,H[$+2]=U,H[$+3]=G}static multiplyQuaternionsFlat(H,$,J,Z,W,Q){let Y=J[Z],X=J[Z+1],K=J[Z+2],U=J[Z+3],G=W[Q],E=W[Q+1],R=W[Q+2],q=W[Q+3];return H[$]=Y*q+U*G+X*R-K*E,H[$+1]=X*q+U*E+K*G-Y*R,H[$+2]=K*q+U*R+Y*E-X*G,H[$+3]=U*q-Y*G-X*E-K*R,H}get x(){return this._x}set x(H){this._x=H,this._onChangeCallback()}get y(){return this._y}set y(H){this._y=H,this._onChangeCallback()}get z(){return this._z}set z(H){this._z=H,this._onChangeCallback()}get w(){return this._w}set w(H){this._w=H,this._onChangeCallback()}set(H,$,J,Z){return this._x=H,this._y=$,this._z=J,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(H){return this._x=H.x,this._y=H.y,this._z=H.z,this._w=H.w,this._onChangeCallback(),this}setFromEuler(H,$=!0){let{_x:J,_y:Z,_z:W,_order:Q}=H,Y=Math.cos,X=Math.sin,K=Y(J/2),U=Y(Z/2),G=Y(W/2),E=X(J/2),R=X(Z/2),q=X(W/2);switch(Q){case"XYZ":this._x=E*U*G+K*R*q,this._y=K*R*G-E*U*q,this._z=K*U*q+E*R*G,this._w=K*U*G-E*R*q;break;case"YXZ":this._x=E*U*G+K*R*q,this._y=K*R*G-E*U*q,this._z=K*U*q-E*R*G,this._w=K*U*G+E*R*q;break;case"ZXY":this._x=E*U*G-K*R*q,this._y=K*R*G+E*U*q,this._z=K*U*q+E*R*G,this._w=K*U*G-E*R*q;break;case"ZYX":this._x=E*U*G-K*R*q,this._y=K*R*G+E*U*q,this._z=K*U*q-E*R*G,this._w=K*U*G+E*R*q;break;case"YZX":this._x=E*U*G+K*R*q,this._y=K*R*G+E*U*q,this._z=K*U*q-E*R*G,this._w=K*U*G-E*R*q;break;case"XZY":this._x=E*U*G-K*R*q,this._y=K*R*G-E*U*q,this._z=K*U*q+E*R*G,this._w=K*U*G+E*R*q;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+Q)}if($===!0)this._onChangeCallback();return this}setFromAxisAngle(H,$){let J=$/2,Z=Math.sin(J);return this._x=H.x*Z,this._y=H.y*Z,this._z=H.z*Z,this._w=Math.cos(J),this._onChangeCallback(),this}setFromRotationMatrix(H){let $=H.elements,J=$[0],Z=$[4],W=$[8],Q=$[1],Y=$[5],X=$[9],K=$[2],U=$[6],G=$[10],E=J+Y+G;if(E>0){let R=0.5/Math.sqrt(E+1);this._w=0.25/R,this._x=(U-X)*R,this._y=(W-K)*R,this._z=(Q-Z)*R}else if(J>Y&&J>G){let R=2*Math.sqrt(1+J-Y-G);this._w=(U-X)/R,this._x=0.25*R,this._y=(Z+Q)/R,this._z=(W+K)/R}else if(Y>G){let R=2*Math.sqrt(1+Y-J-G);this._w=(W-K)/R,this._x=(Z+Q)/R,this._y=0.25*R,this._z=(X+U)/R}else{let R=2*Math.sqrt(1+G-J-Y);this._w=(Q-Z)/R,this._x=(W+K)/R,this._y=(X+U)/R,this._z=0.25*R}return this._onChangeCallback(),this}setFromUnitVectors(H,$){let J=H.dot($)+1;if(J<Number.EPSILON)if(J=0,Math.abs(H.x)>Math.abs(H.z))this._x=-H.y,this._y=H.x,this._z=0,this._w=J;else this._x=0,this._y=-H.z,this._z=H.y,this._w=J;else this._x=H.y*$.z-H.z*$.y,this._y=H.z*$.x-H.x*$.z,this._z=H.x*$.y-H.y*$.x,this._w=J;return this.normalize()}angleTo(H){return 2*Math.acos(Math.abs(d0(this.dot(H),-1,1)))}rotateTowards(H,$){let J=this.angleTo(H);if(J===0)return this;let Z=Math.min(1,$/J);return this.slerp(H,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(H){return this._x*H._x+this._y*H._y+this._z*H._z+this._w*H._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let H=this.length();if(H===0)this._x=0,this._y=0,this._z=0,this._w=1;else H=1/H,this._x=this._x*H,this._y=this._y*H,this._z=this._z*H,this._w=this._w*H;return this._onChangeCallback(),this}multiply(H){return this.multiplyQuaternions(this,H)}premultiply(H){return this.multiplyQuaternions(H,this)}multiplyQuaternions(H,$){let{_x:J,_y:Z,_z:W,_w:Q}=H,Y=$._x,X=$._y,K=$._z,U=$._w;return this._x=J*U+Q*Y+Z*K-W*X,this._y=Z*U+Q*X+W*Y-J*K,this._z=W*U+Q*K+J*X-Z*Y,this._w=Q*U-J*Y-Z*X-W*K,this._onChangeCallback(),this}slerp(H,$){if($===0)return this;if($===1)return this.copy(H);let J=this._x,Z=this._y,W=this._z,Q=this._w,Y=Q*H._w+J*H._x+Z*H._y+W*H._z;if(Y<0)this._w=-H._w,this._x=-H._x,this._y=-H._y,this._z=-H._z,Y=-Y;else this.copy(H);if(Y>=1)return this._w=Q,this._x=J,this._y=Z,this._z=W,this;let X=1-Y*Y;if(X<=Number.EPSILON){let R=1-$;return this._w=R*Q+$*this._w,this._x=R*J+$*this._x,this._y=R*Z+$*this._y,this._z=R*W+$*this._z,this.normalize(),this}let K=Math.sqrt(X),U=Math.atan2(K,Y),G=Math.sin((1-$)*U)/K,E=Math.sin($*U)/K;return this._w=Q*G+this._w*E,this._x=J*G+this._x*E,this._y=Z*G+this._y*E,this._z=W*G+this._z*E,this._onChangeCallback(),this}slerpQuaternions(H,$,J){return this.copy(H).slerp($,J)}random(){let H=2*Math.PI*Math.random(),$=2*Math.PI*Math.random(),J=Math.random(),Z=Math.sqrt(1-J),W=Math.sqrt(J);return this.set(Z*Math.sin(H),Z*Math.cos(H),W*Math.sin($),W*Math.cos($))}equals(H){return H._x===this._x&&H._y===this._y&&H._z===this._z&&H._w===this._w}fromArray(H,$=0){return this._x=H[$],this._y=H[$+1],this._z=H[$+2],this._w=H[$+3],this._onChangeCallback(),this}toArray(H=[],$=0){return H[$]=this._x,H[$+1]=this._y,H[$+2]=this._z,H[$+3]=this._w,H}fromBufferAttribute(H,$){return this._x=H.getX($),this._y=H.getY($),this._z=H.getZ($),this._w=H.getW($),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(H){return this._onChangeCallback=H,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class S{constructor(H=0,$=0,J=0){S.prototype.isVector3=!0,this.x=H,this.y=$,this.z=J}set(H,$,J){if(J===void 0)J=this.z;return this.x=H,this.y=$,this.z=J,this}setScalar(H){return this.x=H,this.y=H,this.z=H,this}setX(H){return this.x=H,this}setY(H){return this.y=H,this}setZ(H){return this.z=H,this}setComponent(H,$){switch(H){case 0:this.x=$;break;case 1:this.y=$;break;case 2:this.z=$;break;default:throw Error("index is out of range: "+H)}return this}getComponent(H){switch(H){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+H)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(H){return this.x=H.x,this.y=H.y,this.z=H.z,this}add(H){return this.x+=H.x,this.y+=H.y,this.z+=H.z,this}addScalar(H){return this.x+=H,this.y+=H,this.z+=H,this}addVectors(H,$){return this.x=H.x+$.x,this.y=H.y+$.y,this.z=H.z+$.z,this}addScaledVector(H,$){return this.x+=H.x*$,this.y+=H.y*$,this.z+=H.z*$,this}sub(H){return this.x-=H.x,this.y-=H.y,this.z-=H.z,this}subScalar(H){return this.x-=H,this.y-=H,this.z-=H,this}subVectors(H,$){return this.x=H.x-$.x,this.y=H.y-$.y,this.z=H.z-$.z,this}multiply(H){return this.x*=H.x,this.y*=H.y,this.z*=H.z,this}multiplyScalar(H){return this.x*=H,this.y*=H,this.z*=H,this}multiplyVectors(H,$){return this.x=H.x*$.x,this.y=H.y*$.y,this.z=H.z*$.z,this}applyEuler(H){return this.applyQuaternion(EZ.setFromEuler(H))}applyAxisAngle(H,$){return this.applyQuaternion(EZ.setFromAxisAngle(H,$))}applyMatrix3(H){let $=this.x,J=this.y,Z=this.z,W=H.elements;return this.x=W[0]*$+W[3]*J+W[6]*Z,this.y=W[1]*$+W[4]*J+W[7]*Z,this.z=W[2]*$+W[5]*J+W[8]*Z,this}applyNormalMatrix(H){return this.applyMatrix3(H).normalize()}applyMatrix4(H){let $=this.x,J=this.y,Z=this.z,W=H.elements,Q=1/(W[3]*$+W[7]*J+W[11]*Z+W[15]);return this.x=(W[0]*$+W[4]*J+W[8]*Z+W[12])*Q,this.y=(W[1]*$+W[5]*J+W[9]*Z+W[13])*Q,this.z=(W[2]*$+W[6]*J+W[10]*Z+W[14])*Q,this}applyQuaternion(H){let $=this.x,J=this.y,Z=this.z,W=H.x,Q=H.y,Y=H.z,X=H.w,K=2*(Q*Z-Y*J),U=2*(Y*$-W*Z),G=2*(W*J-Q*$);return this.x=$+X*K+Q*G-Y*U,this.y=J+X*U+Y*K-W*G,this.z=Z+X*G+W*U-Q*K,this}project(H){return this.applyMatrix4(H.matrixWorldInverse).applyMatrix4(H.projectionMatrix)}unproject(H){return this.applyMatrix4(H.projectionMatrixInverse).applyMatrix4(H.matrixWorld)}transformDirection(H){let $=this.x,J=this.y,Z=this.z,W=H.elements;return this.x=W[0]*$+W[4]*J+W[8]*Z,this.y=W[1]*$+W[5]*J+W[9]*Z,this.z=W[2]*$+W[6]*J+W[10]*Z,this.normalize()}divide(H){return this.x/=H.x,this.y/=H.y,this.z/=H.z,this}divideScalar(H){return this.multiplyScalar(1/H)}min(H){return this.x=Math.min(this.x,H.x),this.y=Math.min(this.y,H.y),this.z=Math.min(this.z,H.z),this}max(H){return this.x=Math.max(this.x,H.x),this.y=Math.max(this.y,H.y),this.z=Math.max(this.z,H.z),this}clamp(H,$){return this.x=d0(this.x,H.x,$.x),this.y=d0(this.y,H.y,$.y),this.z=d0(this.z,H.z,$.z),this}clampScalar(H,$){return this.x=d0(this.x,H,$),this.y=d0(this.y,H,$),this.z=d0(this.z,H,$),this}clampLength(H,$){let J=this.length();return this.divideScalar(J||1).multiplyScalar(d0(J,H,$))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(H){return this.x*H.x+this.y*H.y+this.z*H.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(H){return this.normalize().multiplyScalar(H)}lerp(H,$){return this.x+=(H.x-this.x)*$,this.y+=(H.y-this.y)*$,this.z+=(H.z-this.z)*$,this}lerpVectors(H,$,J){return this.x=H.x+($.x-H.x)*J,this.y=H.y+($.y-H.y)*J,this.z=H.z+($.z-H.z)*J,this}cross(H){return this.crossVectors(this,H)}crossVectors(H,$){let{x:J,y:Z,z:W}=H,Q=$.x,Y=$.y,X=$.z;return this.x=Z*X-W*Y,this.y=W*Q-J*X,this.z=J*Y-Z*Q,this}projectOnVector(H){let $=H.lengthSq();if($===0)return this.set(0,0,0);let J=H.dot(this)/$;return this.copy(H).multiplyScalar(J)}projectOnPlane(H){return i9.copy(this).projectOnVector(H),this.sub(i9)}reflect(H){return this.sub(i9.copy(H).multiplyScalar(2*this.dot(H)))}angleTo(H){let $=Math.sqrt(this.lengthSq()*H.lengthSq());if($===0)return Math.PI/2;let J=this.dot(H)/$;return Math.acos(d0(J,-1,1))}distanceTo(H){return Math.sqrt(this.distanceToSquared(H))}distanceToSquared(H){let $=this.x-H.x,J=this.y-H.y,Z=this.z-H.z;return $*$+J*J+Z*Z}manhattanDistanceTo(H){return Math.abs(this.x-H.x)+Math.abs(this.y-H.y)+Math.abs(this.z-H.z)}setFromSpherical(H){return this.setFromSphericalCoords(H.radius,H.phi,H.theta)}setFromSphericalCoords(H,$,J){let Z=Math.sin($)*H;return this.x=Z*Math.sin(J),this.y=Math.cos($)*H,this.z=Z*Math.cos(J),this}setFromCylindrical(H){return this.setFromCylindricalCoords(H.radius,H.theta,H.y)}setFromCylindricalCoords(H,$,J){return this.x=H*Math.sin($),this.y=J,this.z=H*Math.cos($),this}setFromMatrixPosition(H){let $=H.elements;return this.x=$[12],this.y=$[13],this.z=$[14],this}setFromMatrixScale(H){let $=this.setFromMatrixColumn(H,0).length(),J=this.setFromMatrixColumn(H,1).length(),Z=this.setFromMatrixColumn(H,2).length();return this.x=$,this.y=J,this.z=Z,this}setFromMatrixColumn(H,$){return this.fromArray(H.elements,$*4)}setFromMatrix3Column(H,$){return this.fromArray(H.elements,$*3)}setFromEuler(H){return this.x=H._x,this.y=H._y,this.z=H._z,this}setFromColor(H){return this.x=H.r,this.y=H.g,this.z=H.b,this}equals(H){return H.x===this.x&&H.y===this.y&&H.z===this.z}fromArray(H,$=0){return this.x=H[$],this.y=H[$+1],this.z=H[$+2],this}toArray(H=[],$=0){return H[$]=this.x,H[$+1]=this.y,H[$+2]=this.z,H}fromBufferAttribute(H,$){return this.x=H.getX($),this.y=H.getY($),this.z=H.getZ($),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let H=Math.random()*Math.PI*2,$=Math.random()*2-1,J=Math.sqrt(1-$*$);return this.x=J*Math.cos(H),this.y=$,this.z=J*Math.sin(H),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var i9=new S,EZ=new v8;class D6{constructor(H=new S(1/0,1/0,1/0),$=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=H,this.max=$}set(H,$){return this.min.copy(H),this.max.copy($),this}setFromArray(H){this.makeEmpty();for(let $=0,J=H.length;$<J;$+=3)this.expandByPoint(n8.fromArray(H,$));return this}setFromBufferAttribute(H){this.makeEmpty();for(let $=0,J=H.count;$<J;$++)this.expandByPoint(n8.fromBufferAttribute(H,$));return this}setFromPoints(H){this.makeEmpty();for(let $=0,J=H.length;$<J;$++)this.expandByPoint(H[$]);return this}setFromCenterAndSize(H,$){let J=n8.copy($).multiplyScalar(0.5);return this.min.copy(H).sub(J),this.max.copy(H).add(J),this}setFromObject(H,$=!1){return this.makeEmpty(),this.expandByObject(H,$)}clone(){return new this.constructor().copy(this)}copy(H){return this.min.copy(H.min),this.max.copy(H.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(H){return this.isEmpty()?H.set(0,0,0):H.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(H){return this.isEmpty()?H.set(0,0,0):H.subVectors(this.max,this.min)}expandByPoint(H){return this.min.min(H),this.max.max(H),this}expandByVector(H){return this.min.sub(H),this.max.add(H),this}expandByScalar(H){return this.min.addScalar(-H),this.max.addScalar(H),this}expandByObject(H,$=!1){H.updateWorldMatrix(!1,!1);let J=H.geometry;if(J!==void 0){let W=J.getAttribute("position");if($===!0&&W!==void 0&&H.isInstancedMesh!==!0)for(let Q=0,Y=W.count;Q<Y;Q++){if(H.isMesh===!0)H.getVertexPosition(Q,n8);else n8.fromBufferAttribute(W,Q);n8.applyMatrix4(H.matrixWorld),this.expandByPoint(n8)}else{if(H.boundingBox!==void 0){if(H.boundingBox===null)H.computeBoundingBox();wH.copy(H.boundingBox)}else{if(J.boundingBox===null)J.computeBoundingBox();wH.copy(J.boundingBox)}wH.applyMatrix4(H.matrixWorld),this.union(wH)}}let Z=H.children;for(let W=0,Q=Z.length;W<Q;W++)this.expandByObject(Z[W],$);return this}containsPoint(H){return H.x>=this.min.x&&H.x<=this.max.x&&H.y>=this.min.y&&H.y<=this.max.y&&H.z>=this.min.z&&H.z<=this.max.z}containsBox(H){return this.min.x<=H.min.x&&H.max.x<=this.max.x&&this.min.y<=H.min.y&&H.max.y<=this.max.y&&this.min.z<=H.min.z&&H.max.z<=this.max.z}getParameter(H,$){return $.set((H.x-this.min.x)/(this.max.x-this.min.x),(H.y-this.min.y)/(this.max.y-this.min.y),(H.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(H){return H.max.x>=this.min.x&&H.min.x<=this.max.x&&H.max.y>=this.min.y&&H.min.y<=this.max.y&&H.max.z>=this.min.z&&H.min.z<=this.max.z}intersectsSphere(H){return this.clampPoint(H.center,n8),n8.distanceToSquared(H.center)<=H.radius*H.radius}intersectsPlane(H){let $,J;if(H.normal.x>0)$=H.normal.x*this.min.x,J=H.normal.x*this.max.x;else $=H.normal.x*this.max.x,J=H.normal.x*this.min.x;if(H.normal.y>0)$+=H.normal.y*this.min.y,J+=H.normal.y*this.max.y;else $+=H.normal.y*this.max.y,J+=H.normal.y*this.min.y;if(H.normal.z>0)$+=H.normal.z*this.min.z,J+=H.normal.z*this.max.z;else $+=H.normal.z*this.max.z,J+=H.normal.z*this.min.z;return $<=-H.constant&&J>=-H.constant}intersectsTriangle(H){if(this.isEmpty())return!1;this.getCenter(m7),IH.subVectors(this.max,m7),X7.subVectors(H.a,m7),K7.subVectors(H.b,m7),U7.subVectors(H.c,m7),C6.subVectors(K7,X7),z6.subVectors(U7,K7),b6.subVectors(X7,U7);let $=[0,-C6.z,C6.y,0,-z6.z,z6.y,0,-b6.z,b6.y,C6.z,0,-C6.x,z6.z,0,-z6.x,b6.z,0,-b6.x,-C6.y,C6.x,0,-z6.y,z6.x,0,-b6.y,b6.x,0];if(!o9($,X7,K7,U7,IH))return!1;if($=[1,0,0,0,1,0,0,0,1],!o9($,X7,K7,U7,IH))return!1;return VH.crossVectors(C6,z6),$=[VH.x,VH.y,VH.z],o9($,X7,K7,U7,IH)}clampPoint(H,$){return $.copy(H).clamp(this.min,this.max)}distanceToPoint(H){return this.clampPoint(H,n8).distanceTo(H)}getBoundingSphere(H){if(this.isEmpty())H.makeEmpty();else this.getCenter(H.center),H.radius=this.getSize(n8).length()*0.5;return H}intersect(H){if(this.min.max(H.min),this.max.min(H.max),this.isEmpty())this.makeEmpty();return this}union(H){return this.min.min(H.min),this.max.max(H.max),this}applyMatrix4(H){if(this.isEmpty())return this;return K6[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(H),K6[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(H),K6[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(H),K6[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(H),K6[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(H),K6[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(H),K6[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(H),K6[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(H),this.setFromPoints(K6),this}translate(H){return this.min.add(H),this.max.add(H),this}equals(H){return H.min.equals(this.min)&&H.max.equals(this.max)}}var K6=[new S,new S,new S,new S,new S,new S,new S,new S],n8=new S,wH=new D6,X7=new S,K7=new S,U7=new S,C6=new S,z6=new S,b6=new S,m7=new S,IH=new S,VH=new S,g6=new S;function o9(H,$,J,Z,W){for(let Q=0,Y=H.length-3;Q<=Y;Q+=3){g6.fromArray(H,Q);let X=W.x*Math.abs(g6.x)+W.y*Math.abs(g6.y)+W.z*Math.abs(g6.z),K=$.dot(g6),U=J.dot(g6),G=Z.dot(g6);if(Math.max(-Math.max(K,U,G),Math.min(K,U,G))>X)return!1}return!0}var CY=new D6,d7=new S,a9=new S;class s6{constructor(H=new S,$=-1){this.isSphere=!0,this.center=H,this.radius=$}set(H,$){return this.center.copy(H),this.radius=$,this}setFromPoints(H,$){let J=this.center;if($!==void 0)J.copy($);else CY.setFromPoints(H).getCenter(J);let Z=0;for(let W=0,Q=H.length;W<Q;W++)Z=Math.max(Z,J.distanceToSquared(H[W]));return this.radius=Math.sqrt(Z),this}copy(H){return this.center.copy(H.center),this.radius=H.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(H){return H.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(H){return H.distanceTo(this.center)-this.radius}intersectsSphere(H){let $=this.radius+H.radius;return H.center.distanceToSquared(this.center)<=$*$}intersectsBox(H){return H.intersectsSphere(this)}intersectsPlane(H){return Math.abs(H.distanceToPoint(this.center))<=this.radius}clampPoint(H,$){let J=this.center.distanceToSquared(H);if($.copy(H),J>this.radius*this.radius)$.sub(this.center).normalize(),$.multiplyScalar(this.radius).add(this.center);return $}getBoundingBox(H){if(this.isEmpty())return H.makeEmpty(),H;return H.set(this.center,this.center),H.expandByScalar(this.radius),H}applyMatrix4(H){return this.center.applyMatrix4(H),this.radius=this.radius*H.getMaxScaleOnAxis(),this}translate(H){return this.center.add(H),this}expandByPoint(H){if(this.isEmpty())return this.center.copy(H),this.radius=0,this;d7.subVectors(H,this.center);let $=d7.lengthSq();if($>this.radius*this.radius){let J=Math.sqrt($),Z=(J-this.radius)*0.5;this.center.addScaledVector(d7,Z/J),this.radius+=Z}return this}union(H){if(H.isEmpty())return this;if(this.isEmpty())return this.copy(H),this;if(this.center.equals(H.center)===!0)this.radius=Math.max(this.radius,H.radius);else a9.subVectors(H.center,this.center).setLength(H.radius),this.expandByPoint(d7.copy(H.center).add(a9)),this.expandByPoint(d7.copy(H.center).sub(a9));return this}equals(H){return H.center.equals(this.center)&&H.radius===this.radius}clone(){return new this.constructor().copy(this)}}var U6=new S,r9=new S,BH=new S,w6=new S,t9=new S,PH=new S,e9=new S;class i6{constructor(H=new S,$=new S(0,0,-1)){this.origin=H,this.direction=$}set(H,$){return this.origin.copy(H),this.direction.copy($),this}copy(H){return this.origin.copy(H.origin),this.direction.copy(H.direction),this}at(H,$){return $.copy(this.origin).addScaledVector(this.direction,H)}lookAt(H){return this.direction.copy(H).sub(this.origin).normalize(),this}recast(H){return this.origin.copy(this.at(H,U6)),this}closestPointToPoint(H,$){$.subVectors(H,this.origin);let J=$.dot(this.direction);if(J<0)return $.copy(this.origin);return $.copy(this.origin).addScaledVector(this.direction,J)}distanceToPoint(H){return Math.sqrt(this.distanceSqToPoint(H))}distanceSqToPoint(H){let $=U6.subVectors(H,this.origin).dot(this.direction);if($<0)return this.origin.distanceToSquared(H);return U6.copy(this.origin).addScaledVector(this.direction,$),U6.distanceToSquared(H)}distanceSqToSegment(H,$,J,Z){r9.copy(H).add($).multiplyScalar(0.5),BH.copy($).sub(H).normalize(),w6.copy(this.origin).sub(r9);let W=H.distanceTo($)*0.5,Q=-this.direction.dot(BH),Y=w6.dot(this.direction),X=-w6.dot(BH),K=w6.lengthSq(),U=Math.abs(1-Q*Q),G,E,R,q;if(U>0)if(G=Q*X-Y,E=Q*Y-X,q=W*U,G>=0)if(E>=-q)if(E<=q){let O=1/U;G*=O,E*=O,R=G*(G+Q*E+2*Y)+E*(Q*G+E+2*X)+K}else E=W,G=Math.max(0,-(Q*E+Y)),R=-G*G+E*(E+2*X)+K;else E=-W,G=Math.max(0,-(Q*E+Y)),R=-G*G+E*(E+2*X)+K;else if(E<=-q)G=Math.max(0,-(-Q*W+Y)),E=G>0?-W:Math.min(Math.max(-W,-X),W),R=-G*G+E*(E+2*X)+K;else if(E<=q)G=0,E=Math.min(Math.max(-W,-X),W),R=E*(E+2*X)+K;else G=Math.max(0,-(Q*W+Y)),E=G>0?W:Math.min(Math.max(-W,-X),W),R=-G*G+E*(E+2*X)+K;else E=Q>0?-W:W,G=Math.max(0,-(Q*E+Y)),R=-G*G+E*(E+2*X)+K;if(J)J.copy(this.origin).addScaledVector(this.direction,G);if(Z)Z.copy(r9).addScaledVector(BH,E);return R}intersectSphere(H,$){U6.subVectors(H.center,this.origin);let J=U6.dot(this.direction),Z=U6.dot(U6)-J*J,W=H.radius*H.radius;if(Z>W)return null;let Q=Math.sqrt(W-Z),Y=J-Q,X=J+Q;if(X<0)return null;if(Y<0)return this.at(X,$);return this.at(Y,$)}intersectsSphere(H){return this.distanceSqToPoint(H.center)<=H.radius*H.radius}distanceToPlane(H){let $=H.normal.dot(this.direction);if($===0){if(H.distanceToPoint(this.origin)===0)return 0;return null}let J=-(this.origin.dot(H.normal)+H.constant)/$;return J>=0?J:null}intersectPlane(H,$){let J=this.distanceToPlane(H);if(J===null)return null;return this.at(J,$)}intersectsPlane(H){let $=H.distanceToPoint(this.origin);if($===0)return!0;if(H.normal.dot(this.direction)*$<0)return!0;return!1}intersectBox(H,$){let J,Z,W,Q,Y,X,K=1/this.direction.x,U=1/this.direction.y,G=1/this.direction.z,E=this.origin;if(K>=0)J=(H.min.x-E.x)*K,Z=(H.max.x-E.x)*K;else J=(H.max.x-E.x)*K,Z=(H.min.x-E.x)*K;if(U>=0)W=(H.min.y-E.y)*U,Q=(H.max.y-E.y)*U;else W=(H.max.y-E.y)*U,Q=(H.min.y-E.y)*U;if(J>Q||W>Z)return null;if(W>J||isNaN(J))J=W;if(Q<Z||isNaN(Z))Z=Q;if(G>=0)Y=(H.min.z-E.z)*G,X=(H.max.z-E.z)*G;else Y=(H.max.z-E.z)*G,X=(H.min.z-E.z)*G;if(J>X||Y>Z)return null;if(Y>J||J!==J)J=Y;if(X<Z||Z!==Z)Z=X;if(Z<0)return null;return this.at(J>=0?J:Z,$)}intersectsBox(H){return this.intersectBox(H,U6)!==null}intersectTriangle(H,$,J,Z,W){t9.subVectors($,H),PH.subVectors(J,H),e9.crossVectors(t9,PH);let Q=this.direction.dot(e9),Y;if(Q>0){if(Z)return null;Y=1}else if(Q<0)Y=-1,Q=-Q;else return null;w6.subVectors(this.origin,H);let X=Y*this.direction.dot(PH.crossVectors(w6,PH));if(X<0)return null;let K=Y*this.direction.dot(t9.cross(w6));if(K<0)return null;if(X+K>Q)return null;let U=-Y*w6.dot(e9);if(U<0)return null;return this.at(U/Q,W)}applyMatrix4(H){return this.origin.applyMatrix4(H),this.direction.transformDirection(H),this}equals(H){return H.origin.equals(this.origin)&&H.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class W8{constructor(H,$,J,Z,W,Q,Y,X,K,U,G,E,R,q,O,D){if(W8.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],H!==void 0)this.set(H,$,J,Z,W,Q,Y,X,K,U,G,E,R,q,O,D)}set(H,$,J,Z,W,Q,Y,X,K,U,G,E,R,q,O,D){let F=this.elements;return F[0]=H,F[4]=$,F[8]=J,F[12]=Z,F[1]=W,F[5]=Q,F[9]=Y,F[13]=X,F[2]=K,F[6]=U,F[10]=G,F[14]=E,F[3]=R,F[7]=q,F[11]=O,F[15]=D,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new W8().fromArray(this.elements)}copy(H){let $=this.elements,J=H.elements;return $[0]=J[0],$[1]=J[1],$[2]=J[2],$[3]=J[3],$[4]=J[4],$[5]=J[5],$[6]=J[6],$[7]=J[7],$[8]=J[8],$[9]=J[9],$[10]=J[10],$[11]=J[11],$[12]=J[12],$[13]=J[13],$[14]=J[14],$[15]=J[15],this}copyPosition(H){let $=this.elements,J=H.elements;return $[12]=J[12],$[13]=J[13],$[14]=J[14],this}setFromMatrix3(H){let $=H.elements;return this.set($[0],$[3],$[6],0,$[1],$[4],$[7],0,$[2],$[5],$[8],0,0,0,0,1),this}extractBasis(H,$,J){return H.setFromMatrixColumn(this,0),$.setFromMatrixColumn(this,1),J.setFromMatrixColumn(this,2),this}makeBasis(H,$,J){return this.set(H.x,$.x,J.x,0,H.y,$.y,J.y,0,H.z,$.z,J.z,0,0,0,0,1),this}extractRotation(H){let $=this.elements,J=H.elements,Z=1/G7.setFromMatrixColumn(H,0).length(),W=1/G7.setFromMatrixColumn(H,1).length(),Q=1/G7.setFromMatrixColumn(H,2).length();return $[0]=J[0]*Z,$[1]=J[1]*Z,$[2]=J[2]*Z,$[3]=0,$[4]=J[4]*W,$[5]=J[5]*W,$[6]=J[6]*W,$[7]=0,$[8]=J[8]*Q,$[9]=J[9]*Q,$[10]=J[10]*Q,$[11]=0,$[12]=0,$[13]=0,$[14]=0,$[15]=1,this}makeRotationFromEuler(H){let $=this.elements,J=H.x,Z=H.y,W=H.z,Q=Math.cos(J),Y=Math.sin(J),X=Math.cos(Z),K=Math.sin(Z),U=Math.cos(W),G=Math.sin(W);if(H.order==="XYZ"){let E=Q*U,R=Q*G,q=Y*U,O=Y*G;$[0]=X*U,$[4]=-X*G,$[8]=K,$[1]=R+q*K,$[5]=E-O*K,$[9]=-Y*X,$[2]=O-E*K,$[6]=q+R*K,$[10]=Q*X}else if(H.order==="YXZ"){let E=X*U,R=X*G,q=K*U,O=K*G;$[0]=E+O*Y,$[4]=q*Y-R,$[8]=Q*K,$[1]=Q*G,$[5]=Q*U,$[9]=-Y,$[2]=R*Y-q,$[6]=O+E*Y,$[10]=Q*X}else if(H.order==="ZXY"){let E=X*U,R=X*G,q=K*U,O=K*G;$[0]=E-O*Y,$[4]=-Q*G,$[8]=q+R*Y,$[1]=R+q*Y,$[5]=Q*U,$[9]=O-E*Y,$[2]=-Q*K,$[6]=Y,$[10]=Q*X}else if(H.order==="ZYX"){let E=Q*U,R=Q*G,q=Y*U,O=Y*G;$[0]=X*U,$[4]=q*K-R,$[8]=E*K+O,$[1]=X*G,$[5]=O*K+E,$[9]=R*K-q,$[2]=-K,$[6]=Y*X,$[10]=Q*X}else if(H.order==="YZX"){let E=Q*X,R=Q*K,q=Y*X,O=Y*K;$[0]=X*U,$[4]=O-E*G,$[8]=q*G+R,$[1]=G,$[5]=Q*U,$[9]=-Y*U,$[2]=-K*U,$[6]=R*G+q,$[10]=E-O*G}else if(H.order==="XZY"){let E=Q*X,R=Q*K,q=Y*X,O=Y*K;$[0]=X*U,$[4]=-G,$[8]=K*U,$[1]=E*G+O,$[5]=Q*U,$[9]=R*G-q,$[2]=q*G-R,$[6]=Y*U,$[10]=O*G+E}return $[3]=0,$[7]=0,$[11]=0,$[12]=0,$[13]=0,$[14]=0,$[15]=1,this}makeRotationFromQuaternion(H){return this.compose(zY,H,wY)}lookAt(H,$,J){let Z=this.elements;if(x8.subVectors(H,$),x8.lengthSq()===0)x8.z=1;if(x8.normalize(),I6.crossVectors(J,x8),I6.lengthSq()===0){if(Math.abs(J.z)===1)x8.x+=0.0001;else x8.z+=0.0001;x8.normalize(),I6.crossVectors(J,x8)}return I6.normalize(),TH.crossVectors(x8,I6),Z[0]=I6.x,Z[4]=TH.x,Z[8]=x8.x,Z[1]=I6.y,Z[5]=TH.y,Z[9]=x8.y,Z[2]=I6.z,Z[6]=TH.z,Z[10]=x8.z,this}multiply(H){return this.multiplyMatrices(this,H)}premultiply(H){return this.multiplyMatrices(H,this)}multiplyMatrices(H,$){let J=H.elements,Z=$.elements,W=this.elements,Q=J[0],Y=J[4],X=J[8],K=J[12],U=J[1],G=J[5],E=J[9],R=J[13],q=J[2],O=J[6],D=J[10],F=J[14],N=J[3],I=J[7],L=J[11],T=J[15],_=Z[0],w=Z[4],B=Z[8],b=Z[12],C=Z[1],z=Z[5],A=Z[9],x=Z[13],p=Z[2],l=Z[6],o=Z[10],d=Z[14],t=Z[3],m=Z[7],X0=Z[11],H0=Z[15];return W[0]=Q*_+Y*C+X*p+K*t,W[4]=Q*w+Y*z+X*l+K*m,W[8]=Q*B+Y*A+X*o+K*X0,W[12]=Q*b+Y*x+X*d+K*H0,W[1]=U*_+G*C+E*p+R*t,W[5]=U*w+G*z+E*l+R*m,W[9]=U*B+G*A+E*o+R*X0,W[13]=U*b+G*x+E*d+R*H0,W[2]=q*_+O*C+D*p+F*t,W[6]=q*w+O*z+D*l+F*m,W[10]=q*B+O*A+D*o+F*X0,W[14]=q*b+O*x+D*d+F*H0,W[3]=N*_+I*C+L*p+T*t,W[7]=N*w+I*z+L*l+T*m,W[11]=N*B+I*A+L*o+T*X0,W[15]=N*b+I*x+L*d+T*H0,this}multiplyScalar(H){let $=this.elements;return $[0]*=H,$[4]*=H,$[8]*=H,$[12]*=H,$[1]*=H,$[5]*=H,$[9]*=H,$[13]*=H,$[2]*=H,$[6]*=H,$[10]*=H,$[14]*=H,$[3]*=H,$[7]*=H,$[11]*=H,$[15]*=H,this}determinant(){let H=this.elements,$=H[0],J=H[4],Z=H[8],W=H[12],Q=H[1],Y=H[5],X=H[9],K=H[13],U=H[2],G=H[6],E=H[10],R=H[14],q=H[3],O=H[7],D=H[11],F=H[15];return q*(+W*X*G-Z*K*G-W*Y*E+J*K*E+Z*Y*R-J*X*R)+O*(+$*X*R-$*K*E+W*Q*E-Z*Q*R+Z*K*U-W*X*U)+D*(+$*K*G-$*Y*R-W*Q*G+J*Q*R+W*Y*U-J*K*U)+F*(-Z*Y*U-$*X*G+$*Y*E+Z*Q*G-J*Q*E+J*X*U)}transpose(){let H=this.elements,$;return $=H[1],H[1]=H[4],H[4]=$,$=H[2],H[2]=H[8],H[8]=$,$=H[6],H[6]=H[9],H[9]=$,$=H[3],H[3]=H[12],H[12]=$,$=H[7],H[7]=H[13],H[13]=$,$=H[11],H[11]=H[14],H[14]=$,this}setPosition(H,$,J){let Z=this.elements;if(H.isVector3)Z[12]=H.x,Z[13]=H.y,Z[14]=H.z;else Z[12]=H,Z[13]=$,Z[14]=J;return this}invert(){let H=this.elements,$=H[0],J=H[1],Z=H[2],W=H[3],Q=H[4],Y=H[5],X=H[6],K=H[7],U=H[8],G=H[9],E=H[10],R=H[11],q=H[12],O=H[13],D=H[14],F=H[15],N=G*D*K-O*E*K+O*X*R-Y*D*R-G*X*F+Y*E*F,I=q*E*K-U*D*K-q*X*R+Q*D*R+U*X*F-Q*E*F,L=U*O*K-q*G*K+q*Y*R-Q*O*R-U*Y*F+Q*G*F,T=q*G*X-U*O*X-q*Y*E+Q*O*E+U*Y*D-Q*G*D,_=$*N+J*I+Z*L+W*T;if(_===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/_;return H[0]=N*w,H[1]=(O*E*W-G*D*W-O*Z*R+J*D*R+G*Z*F-J*E*F)*w,H[2]=(Y*D*W-O*X*W+O*Z*K-J*D*K-Y*Z*F+J*X*F)*w,H[3]=(G*X*W-Y*E*W-G*Z*K+J*E*K+Y*Z*R-J*X*R)*w,H[4]=I*w,H[5]=(U*D*W-q*E*W+q*Z*R-$*D*R-U*Z*F+$*E*F)*w,H[6]=(q*X*W-Q*D*W-q*Z*K+$*D*K+Q*Z*F-$*X*F)*w,H[7]=(Q*E*W-U*X*W+U*Z*K-$*E*K-Q*Z*R+$*X*R)*w,H[8]=L*w,H[9]=(q*G*W-U*O*W-q*J*R+$*O*R+U*J*F-$*G*F)*w,H[10]=(Q*O*W-q*Y*W+q*J*K-$*O*K-Q*J*F+$*Y*F)*w,H[11]=(U*Y*W-Q*G*W-U*J*K+$*G*K+Q*J*R-$*Y*R)*w,H[12]=T*w,H[13]=(U*O*Z-q*G*Z+q*J*E-$*O*E-U*J*D+$*G*D)*w,H[14]=(q*Y*Z-Q*O*Z-q*J*X+$*O*X+Q*J*D-$*Y*D)*w,H[15]=(Q*G*Z-U*Y*Z+U*J*X-$*G*X-Q*J*E+$*Y*E)*w,this}scale(H){let $=this.elements,J=H.x,Z=H.y,W=H.z;return $[0]*=J,$[4]*=Z,$[8]*=W,$[1]*=J,$[5]*=Z,$[9]*=W,$[2]*=J,$[6]*=Z,$[10]*=W,$[3]*=J,$[7]*=Z,$[11]*=W,this}getMaxScaleOnAxis(){let H=this.elements,$=H[0]*H[0]+H[1]*H[1]+H[2]*H[2],J=H[4]*H[4]+H[5]*H[5]+H[6]*H[6],Z=H[8]*H[8]+H[9]*H[9]+H[10]*H[10];return Math.sqrt(Math.max($,J,Z))}makeTranslation(H,$,J){if(H.isVector3)this.set(1,0,0,H.x,0,1,0,H.y,0,0,1,H.z,0,0,0,1);else this.set(1,0,0,H,0,1,0,$,0,0,1,J,0,0,0,1);return this}makeRotationX(H){let $=Math.cos(H),J=Math.sin(H);return this.set(1,0,0,0,0,$,-J,0,0,J,$,0,0,0,0,1),this}makeRotationY(H){let $=Math.cos(H),J=Math.sin(H);return this.set($,0,J,0,0,1,0,0,-J,0,$,0,0,0,0,1),this}makeRotationZ(H){let $=Math.cos(H),J=Math.sin(H);return this.set($,-J,0,0,J,$,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(H,$){let J=Math.cos($),Z=Math.sin($),W=1-J,Q=H.x,Y=H.y,X=H.z,K=W*Q,U=W*Y;return this.set(K*Q+J,K*Y-Z*X,K*X+Z*Y,0,K*Y+Z*X,U*Y+J,U*X-Z*Q,0,K*X-Z*Y,U*X+Z*Q,W*X*X+J,0,0,0,0,1),this}makeScale(H,$,J){return this.set(H,0,0,0,0,$,0,0,0,0,J,0,0,0,0,1),this}makeShear(H,$,J,Z,W,Q){return this.set(1,J,W,0,H,1,Q,0,$,Z,1,0,0,0,0,1),this}compose(H,$,J){let Z=this.elements,W=$._x,Q=$._y,Y=$._z,X=$._w,K=W+W,U=Q+Q,G=Y+Y,E=W*K,R=W*U,q=W*G,O=Q*U,D=Q*G,F=Y*G,N=X*K,I=X*U,L=X*G,T=J.x,_=J.y,w=J.z;return Z[0]=(1-(O+F))*T,Z[1]=(R+L)*T,Z[2]=(q-I)*T,Z[3]=0,Z[4]=(R-L)*_,Z[5]=(1-(E+F))*_,Z[6]=(D+N)*_,Z[7]=0,Z[8]=(q+I)*w,Z[9]=(D-N)*w,Z[10]=(1-(E+O))*w,Z[11]=0,Z[12]=H.x,Z[13]=H.y,Z[14]=H.z,Z[15]=1,this}decompose(H,$,J){let Z=this.elements,W=G7.set(Z[0],Z[1],Z[2]).length(),Q=G7.set(Z[4],Z[5],Z[6]).length(),Y=G7.set(Z[8],Z[9],Z[10]).length();if(this.determinant()<0)W=-W;H.x=Z[12],H.y=Z[13],H.z=Z[14],s8.copy(this);let K=1/W,U=1/Q,G=1/Y;return s8.elements[0]*=K,s8.elements[1]*=K,s8.elements[2]*=K,s8.elements[4]*=U,s8.elements[5]*=U,s8.elements[6]*=U,s8.elements[8]*=G,s8.elements[9]*=G,s8.elements[10]*=G,$.setFromRotationMatrix(s8),J.x=W,J.y=Q,J.z=Y,this}makePerspective(H,$,J,Z,W,Q,Y=2000){let X=this.elements,K=2*W/($-H),U=2*W/(J-Z),G=($+H)/($-H),E=(J+Z)/(J-Z),R,q;if(Y===2000)R=-(Q+W)/(Q-W),q=-2*Q*W/(Q-W);else if(Y===2001)R=-Q/(Q-W),q=-Q*W/(Q-W);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+Y);return X[0]=K,X[4]=0,X[8]=G,X[12]=0,X[1]=0,X[5]=U,X[9]=E,X[13]=0,X[2]=0,X[6]=0,X[10]=R,X[14]=q,X[3]=0,X[7]=0,X[11]=-1,X[15]=0,this}makeOrthographic(H,$,J,Z,W,Q,Y=2000){let X=this.elements,K=1/($-H),U=1/(J-Z),G=1/(Q-W),E=($+H)*K,R=(J+Z)*U,q,O;if(Y===2000)q=(Q+W)*G,O=-2*G;else if(Y===2001)q=W*G,O=-1*G;else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+Y);return X[0]=2*K,X[4]=0,X[8]=0,X[12]=-E,X[1]=0,X[5]=2*U,X[9]=0,X[13]=-R,X[2]=0,X[6]=0,X[10]=O,X[14]=-q,X[3]=0,X[7]=0,X[11]=0,X[15]=1,this}equals(H){let $=this.elements,J=H.elements;for(let Z=0;Z<16;Z++)if($[Z]!==J[Z])return!1;return!0}fromArray(H,$=0){for(let J=0;J<16;J++)this.elements[J]=H[J+$];return this}toArray(H=[],$=0){let J=this.elements;return H[$]=J[0],H[$+1]=J[1],H[$+2]=J[2],H[$+3]=J[3],H[$+4]=J[4],H[$+5]=J[5],H[$+6]=J[6],H[$+7]=J[7],H[$+8]=J[8],H[$+9]=J[9],H[$+10]=J[10],H[$+11]=J[11],H[$+12]=J[12],H[$+13]=J[13],H[$+14]=J[14],H[$+15]=J[15],H}}var G7=new S,s8=new W8,zY=new S(0,0,0),wY=new S(1,1,1),I6=new S,TH=new S,x8=new S,RZ=new W8,FZ=new v8;class m8{constructor(H=0,$=0,J=0,Z=m8.DEFAULT_ORDER){this.isEuler=!0,this._x=H,this._y=$,this._z=J,this._order=Z}get x(){return this._x}set x(H){this._x=H,this._onChangeCallback()}get y(){return this._y}set y(H){this._y=H,this._onChangeCallback()}get z(){return this._z}set z(H){this._z=H,this._onChangeCallback()}get order(){return this._order}set order(H){this._order=H,this._onChangeCallback()}set(H,$,J,Z=this._order){return this._x=H,this._y=$,this._z=J,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(H){return this._x=H._x,this._y=H._y,this._z=H._z,this._order=H._order,this._onChangeCallback(),this}setFromRotationMatrix(H,$=this._order,J=!0){let Z=H.elements,W=Z[0],Q=Z[4],Y=Z[8],X=Z[1],K=Z[5],U=Z[9],G=Z[2],E=Z[6],R=Z[10];switch($){case"XYZ":if(this._y=Math.asin(d0(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,R),this._z=Math.atan2(-Q,W);else this._x=Math.atan2(E,K),this._z=0;break;case"YXZ":if(this._x=Math.asin(-d0(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(Y,R),this._z=Math.atan2(X,K);else this._y=Math.atan2(-G,W),this._z=0;break;case"ZXY":if(this._x=Math.asin(d0(E,-1,1)),Math.abs(E)<0.9999999)this._y=Math.atan2(-G,R),this._z=Math.atan2(-Q,K);else this._y=0,this._z=Math.atan2(X,W);break;case"ZYX":if(this._y=Math.asin(-d0(G,-1,1)),Math.abs(G)<0.9999999)this._x=Math.atan2(E,R),this._z=Math.atan2(X,W);else this._x=0,this._z=Math.atan2(-Q,K);break;case"YZX":if(this._z=Math.asin(d0(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-U,K),this._y=Math.atan2(-G,W);else this._x=0,this._y=Math.atan2(Y,R);break;case"XZY":if(this._z=Math.asin(-d0(Q,-1,1)),Math.abs(Q)<0.9999999)this._x=Math.atan2(E,K),this._y=Math.atan2(Y,W);else this._x=Math.atan2(-U,R),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+$)}if(this._order=$,J===!0)this._onChangeCallback();return this}setFromQuaternion(H,$,J){return RZ.makeRotationFromQuaternion(H),this.setFromRotationMatrix(RZ,$,J)}setFromVector3(H,$=this._order){return this.set(H.x,H.y,H.z,$)}reorder(H){return FZ.setFromEuler(this),this.setFromQuaternion(FZ,H)}equals(H){return H._x===this._x&&H._y===this._y&&H._z===this._z&&H._order===this._order}fromArray(H){if(this._x=H[0],this._y=H[1],this._z=H[2],H[3]!==void 0)this._order=H[3];return this._onChangeCallback(),this}toArray(H=[],$=0){return H[$]=this._x,H[$+1]=this._y,H[$+2]=this._z,H[$+3]=this._order,H}_onChange(H){return this._onChangeCallback=H,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}m8.DEFAULT_ORDER="XYZ";class R9{constructor(){this.mask=1}set(H){this.mask=(1<<H|0)>>>0}enable(H){this.mask|=1<<H|0}enableAll(){this.mask=-1}toggle(H){this.mask^=1<<H|0}disable(H){this.mask&=~(1<<H|0)}disableAll(){this.mask=0}test(H){return(this.mask&H.mask)!==0}isEnabled(H){return(this.mask&(1<<H|0))!==0}}var IY=0,NZ=new S,E7=new v8,G6=new W8,AH=new S,c7=new S,VY=new S,BY=new v8,qZ=new S(1,0,0),OZ=new S(0,1,0),DZ=new S(0,0,1),MZ={type:"added"},PY={type:"removed"},R7={type:"childadded",child:null},H$={type:"childremoved",child:null};class F8 extends q6{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:IY++}),this.uuid=A7(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=F8.DEFAULT_UP.clone();let H=new S,$=new m8,J=new v8,Z=new S(1,1,1);function W(){J.setFromEuler($,!1)}function Q(){$.setFromQuaternion(J,void 0,!1)}$._onChange(W),J._onChange(Q),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:H},rotation:{configurable:!0,enumerable:!0,value:$},quaternion:{configurable:!0,enumerable:!0,value:J},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new W8},normalMatrix:{value:new y0}}),this.matrix=new W8,this.matrixWorld=new W8,this.matrixAutoUpdate=F8.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=F8.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new R9,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(H){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(H),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(H){return this.quaternion.premultiply(H),this}setRotationFromAxisAngle(H,$){this.quaternion.setFromAxisAngle(H,$)}setRotationFromEuler(H){this.quaternion.setFromEuler(H,!0)}setRotationFromMatrix(H){this.quaternion.setFromRotationMatrix(H)}setRotationFromQuaternion(H){this.quaternion.copy(H)}rotateOnAxis(H,$){return E7.setFromAxisAngle(H,$),this.quaternion.multiply(E7),this}rotateOnWorldAxis(H,$){return E7.setFromAxisAngle(H,$),this.quaternion.premultiply(E7),this}rotateX(H){return this.rotateOnAxis(qZ,H)}rotateY(H){return this.rotateOnAxis(OZ,H)}rotateZ(H){return this.rotateOnAxis(DZ,H)}translateOnAxis(H,$){return NZ.copy(H).applyQuaternion(this.quaternion),this.position.add(NZ.multiplyScalar($)),this}translateX(H){return this.translateOnAxis(qZ,H)}translateY(H){return this.translateOnAxis(OZ,H)}translateZ(H){return this.translateOnAxis(DZ,H)}localToWorld(H){return this.updateWorldMatrix(!0,!1),H.applyMatrix4(this.matrixWorld)}worldToLocal(H){return this.updateWorldMatrix(!0,!1),H.applyMatrix4(G6.copy(this.matrixWorld).invert())}lookAt(H,$,J){if(H.isVector3)AH.copy(H);else AH.set(H,$,J);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),c7.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)G6.lookAt(c7,AH,this.up);else G6.lookAt(AH,c7,this.up);if(this.quaternion.setFromRotationMatrix(G6),Z)G6.extractRotation(Z.matrixWorld),E7.setFromRotationMatrix(G6),this.quaternion.premultiply(E7.invert())}add(H){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.add(arguments[$]);return this}if(H===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",H),this;if(H&&H.isObject3D)H.removeFromParent(),H.parent=this,this.children.push(H),H.dispatchEvent(MZ),R7.child=H,this.dispatchEvent(R7),R7.child=null;else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",H);return this}remove(H){if(arguments.length>1){for(let J=0;J<arguments.length;J++)this.remove(arguments[J]);return this}let $=this.children.indexOf(H);if($!==-1)H.parent=null,this.children.splice($,1),H.dispatchEvent(PY),H$.child=H,this.dispatchEvent(H$),H$.child=null;return this}removeFromParent(){let H=this.parent;if(H!==null)H.remove(this);return this}clear(){return this.remove(...this.children)}attach(H){if(this.updateWorldMatrix(!0,!1),G6.copy(this.matrixWorld).invert(),H.parent!==null)H.parent.updateWorldMatrix(!0,!1),G6.multiply(H.parent.matrixWorld);return H.applyMatrix4(G6),H.removeFromParent(),H.parent=this,this.children.push(H),H.updateWorldMatrix(!1,!0),H.dispatchEvent(MZ),R7.child=H,this.dispatchEvent(R7),R7.child=null,this}getObjectById(H){return this.getObjectByProperty("id",H)}getObjectByName(H){return this.getObjectByProperty("name",H)}getObjectByProperty(H,$){if(this[H]===$)return this;for(let J=0,Z=this.children.length;J<Z;J++){let Q=this.children[J].getObjectByProperty(H,$);if(Q!==void 0)return Q}return}getObjectsByProperty(H,$,J=[]){if(this[H]===$)J.push(this);let Z=this.children;for(let W=0,Q=Z.length;W<Q;W++)Z[W].getObjectsByProperty(H,$,J);return J}getWorldPosition(H){return this.updateWorldMatrix(!0,!1),H.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(H){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(c7,H,VY),H}getWorldScale(H){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(c7,BY,H),H}getWorldDirection(H){this.updateWorldMatrix(!0,!1);let $=this.matrixWorld.elements;return H.set($[8],$[9],$[10]).normalize()}raycast(){}traverse(H){H(this);let $=this.children;for(let J=0,Z=$.length;J<Z;J++)$[J].traverse(H)}traverseVisible(H){if(this.visible===!1)return;H(this);let $=this.children;for(let J=0,Z=$.length;J<Z;J++)$[J].traverseVisible(H)}traverseAncestors(H){let $=this.parent;if($!==null)H($),$.traverseAncestors(H)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(H){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||H){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,H=!0}let $=this.children;for(let J=0,Z=$.length;J<Z;J++)$[J].updateMatrixWorld(H)}updateWorldMatrix(H,$){let J=this.parent;if(H===!0&&J!==null)J.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if($===!0){let Z=this.children;for(let W=0,Q=Z.length;W<Q;W++)Z[W].updateWorldMatrix(!1,!0)}}toJSON(H){let $=H===void 0||typeof H==="string",J={};if($)H={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},J.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,this.name!=="")Z.name=this.name;if(this.castShadow===!0)Z.castShadow=!0;if(this.receiveShadow===!0)Z.receiveShadow=!0;if(this.visible===!1)Z.visible=!1;if(this.frustumCulled===!1)Z.frustumCulled=!1;if(this.renderOrder!==0)Z.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.matrixAutoUpdate===!1)Z.matrixAutoUpdate=!1;if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.visibility=this._visibility,Z.active=this._active,Z.bounds=this._bounds.map((Y)=>({boxInitialized:Y.boxInitialized,boxMin:Y.box.min.toArray(),boxMax:Y.box.max.toArray(),sphereInitialized:Y.sphereInitialized,sphereRadius:Y.sphere.radius,sphereCenter:Y.sphere.center.toArray()})),Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.geometryCount=this._geometryCount,Z.matricesTexture=this._matricesTexture.toJSON(H),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(H);if(this.boundingSphere!==null)Z.boundingSphere={center:Z.boundingSphere.center.toArray(),radius:Z.boundingSphere.radius};if(this.boundingBox!==null)Z.boundingBox={min:Z.boundingBox.min.toArray(),max:Z.boundingBox.max.toArray()}}function W(Y,X){if(Y[X.uuid]===void 0)Y[X.uuid]=X.toJSON(H);return X.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(H).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(H).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=W(H.geometries,this.geometry);let Y=this.geometry.parameters;if(Y!==void 0&&Y.shapes!==void 0){let X=Y.shapes;if(Array.isArray(X))for(let K=0,U=X.length;K<U;K++){let G=X[K];W(H.shapes,G)}else W(H.shapes,X)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)W(H.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let Y=[];for(let X=0,K=this.material.length;X<K;X++)Y.push(W(H.materials,this.material[X]));Z.material=Y}else Z.material=W(H.materials,this.material);if(this.children.length>0){Z.children=[];for(let Y=0;Y<this.children.length;Y++)Z.children.push(this.children[Y].toJSON(H).object)}if(this.animations.length>0){Z.animations=[];for(let Y=0;Y<this.animations.length;Y++){let X=this.animations[Y];Z.animations.push(W(H.animations,X))}}if($){let Y=Q(H.geometries),X=Q(H.materials),K=Q(H.textures),U=Q(H.images),G=Q(H.shapes),E=Q(H.skeletons),R=Q(H.animations),q=Q(H.nodes);if(Y.length>0)J.geometries=Y;if(X.length>0)J.materials=X;if(K.length>0)J.textures=K;if(U.length>0)J.images=U;if(G.length>0)J.shapes=G;if(E.length>0)J.skeletons=E;if(R.length>0)J.animations=R;if(q.length>0)J.nodes=q}return J.object=Z,J;function Q(Y){let X=[];for(let K in Y){let U=Y[K];delete U.metadata,X.push(U)}return X}}clone(H){return new this.constructor().copy(this,H)}copy(H,$=!0){if(this.name=H.name,this.up.copy(H.up),this.position.copy(H.position),this.rotation.order=H.rotation.order,this.quaternion.copy(H.quaternion),this.scale.copy(H.scale),this.matrix.copy(H.matrix),this.matrixWorld.copy(H.matrixWorld),this.matrixAutoUpdate=H.matrixAutoUpdate,this.matrixWorldAutoUpdate=H.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=H.matrixWorldNeedsUpdate,this.layers.mask=H.layers.mask,this.visible=H.visible,this.castShadow=H.castShadow,this.receiveShadow=H.receiveShadow,this.frustumCulled=H.frustumCulled,this.renderOrder=H.renderOrder,this.animations=H.animations.slice(),this.userData=JSON.parse(JSON.stringify(H.userData)),$===!0)for(let J=0;J<H.children.length;J++){let Z=H.children[J];this.add(Z.clone())}return this}}F8.DEFAULT_UP=new S(0,1,0);F8.DEFAULT_MATRIX_AUTO_UPDATE=!0;F8.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var i8=new S,E6=new S,$$=new S,R6=new S,F7=new S,N7=new S,kZ=new S,J$=new S,Z$=new S,W$=new S,Q$=new J8,Y$=new J8,X$=new J8;class u8{constructor(H=new S,$=new S,J=new S){this.a=H,this.b=$,this.c=J}static getNormal(H,$,J,Z){Z.subVectors(J,$),i8.subVectors(H,$),Z.cross(i8);let W=Z.lengthSq();if(W>0)return Z.multiplyScalar(1/Math.sqrt(W));return Z.set(0,0,0)}static getBarycoord(H,$,J,Z,W){i8.subVectors(Z,$),E6.subVectors(J,$),$$.subVectors(H,$);let Q=i8.dot(i8),Y=i8.dot(E6),X=i8.dot($$),K=E6.dot(E6),U=E6.dot($$),G=Q*K-Y*Y;if(G===0)return W.set(0,0,0),null;let E=1/G,R=(K*X-Y*U)*E,q=(Q*U-Y*X)*E;return W.set(1-R-q,q,R)}static containsPoint(H,$,J,Z){if(this.getBarycoord(H,$,J,Z,R6)===null)return!1;return R6.x>=0&&R6.y>=0&&R6.x+R6.y<=1}static getInterpolation(H,$,J,Z,W,Q,Y,X){if(this.getBarycoord(H,$,J,Z,R6)===null){if(X.x=0,X.y=0,"z"in X)X.z=0;if("w"in X)X.w=0;return null}return X.setScalar(0),X.addScaledVector(W,R6.x),X.addScaledVector(Q,R6.y),X.addScaledVector(Y,R6.z),X}static getInterpolatedAttribute(H,$,J,Z,W,Q){return Q$.setScalar(0),Y$.setScalar(0),X$.setScalar(0),Q$.fromBufferAttribute(H,$),Y$.fromBufferAttribute(H,J),X$.fromBufferAttribute(H,Z),Q.setScalar(0),Q.addScaledVector(Q$,W.x),Q.addScaledVector(Y$,W.y),Q.addScaledVector(X$,W.z),Q}static isFrontFacing(H,$,J,Z){return i8.subVectors(J,$),E6.subVectors(H,$),i8.cross(E6).dot(Z)<0?!0:!1}set(H,$,J){return this.a.copy(H),this.b.copy($),this.c.copy(J),this}setFromPointsAndIndices(H,$,J,Z){return this.a.copy(H[$]),this.b.copy(H[J]),this.c.copy(H[Z]),this}setFromAttributeAndIndices(H,$,J,Z){return this.a.fromBufferAttribute(H,$),this.b.fromBufferAttribute(H,J),this.c.fromBufferAttribute(H,Z),this}clone(){return new this.constructor().copy(this)}copy(H){return this.a.copy(H.a),this.b.copy(H.b),this.c.copy(H.c),this}getArea(){return i8.subVectors(this.c,this.b),E6.subVectors(this.a,this.b),i8.cross(E6).length()*0.5}getMidpoint(H){return H.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(H){return u8.getNormal(this.a,this.b,this.c,H)}getPlane(H){return H.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(H,$){return u8.getBarycoord(H,this.a,this.b,this.c,$)}getInterpolation(H,$,J,Z,W){return u8.getInterpolation(H,this.a,this.b,this.c,$,J,Z,W)}containsPoint(H){return u8.containsPoint(H,this.a,this.b,this.c)}isFrontFacing(H){return u8.isFrontFacing(this.a,this.b,this.c,H)}intersectsBox(H){return H.intersectsTriangle(this)}closestPointToPoint(H,$){let J=this.a,Z=this.b,W=this.c,Q,Y;F7.subVectors(Z,J),N7.subVectors(W,J),J$.subVectors(H,J);let X=F7.dot(J$),K=N7.dot(J$);if(X<=0&&K<=0)return $.copy(J);Z$.subVectors(H,Z);let U=F7.dot(Z$),G=N7.dot(Z$);if(U>=0&&G<=U)return $.copy(Z);let E=X*G-U*K;if(E<=0&&X>=0&&U<=0)return Q=X/(X-U),$.copy(J).addScaledVector(F7,Q);W$.subVectors(H,W);let R=F7.dot(W$),q=N7.dot(W$);if(q>=0&&R<=q)return $.copy(W);let O=R*K-X*q;if(O<=0&&K>=0&&q<=0)return Y=K/(K-q),$.copy(J).addScaledVector(N7,Y);let D=U*q-R*G;if(D<=0&&G-U>=0&&R-q>=0)return kZ.subVectors(W,Z),Y=(G-U)/(G-U+(R-q)),$.copy(Z).addScaledVector(kZ,Y);let F=1/(D+O+E);return Q=O*F,Y=E*F,$.copy(J).addScaledVector(F7,Q).addScaledVector(N7,Y)}equals(H){return H.a.equals(this.a)&&H.b.equals(this.b)&&H.c.equals(this.c)}}var pW={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},V6={h:0,s:0,l:0},SH={h:0,s:0,l:0};function K$(H,$,J){if(J<0)J+=1;if(J>1)J-=1;if(J<0.16666666666666666)return H+($-H)*6*J;if(J<0.5)return $;if(J<0.6666666666666666)return H+($-H)*6*(0.6666666666666666-J);return H}class A0{constructor(H,$,J){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(H,$,J)}set(H,$,J){if($===void 0&&J===void 0){let Z=H;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(H,$,J);return this}setScalar(H){return this.r=H,this.g=H,this.b=H,this}setHex(H,$="srgb"){return H=Math.floor(H),this.r=(H>>16&255)/255,this.g=(H>>8&255)/255,this.b=(H&255)/255,i0.toWorkingColorSpace(this,$),this}setRGB(H,$,J,Z=i0.workingColorSpace){return this.r=H,this.g=$,this.b=J,i0.toWorkingColorSpace(this,Z),this}setHSL(H,$,J,Z=i0.workingColorSpace){if(H=ZJ(H,1),$=d0($,0,1),J=d0(J,0,1),$===0)this.r=this.g=this.b=J;else{let W=J<=0.5?J*(1+$):J+$-J*$,Q=2*J-W;this.r=K$(Q,W,H+0.3333333333333333),this.g=K$(Q,W,H),this.b=K$(Q,W,H-0.3333333333333333)}return i0.toWorkingColorSpace(this,Z),this}setStyle(H,$="srgb"){function J(W){if(W===void 0)return;if(parseFloat(W)<1)console.warn("THREE.Color: Alpha component of "+H+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(H)){let W,Q=Z[1],Y=Z[2];switch(Q){case"rgb":case"rgba":if(W=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return J(W[4]),this.setRGB(Math.min(255,parseInt(W[1],10))/255,Math.min(255,parseInt(W[2],10))/255,Math.min(255,parseInt(W[3],10))/255,$);if(W=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return J(W[4]),this.setRGB(Math.min(100,parseInt(W[1],10))/100,Math.min(100,parseInt(W[2],10))/100,Math.min(100,parseInt(W[3],10))/100,$);break;case"hsl":case"hsla":if(W=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return J(W[4]),this.setHSL(parseFloat(W[1])/360,parseFloat(W[2])/100,parseFloat(W[3])/100,$);break;default:console.warn("THREE.Color: Unknown color model "+H)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(H)){let W=Z[1],Q=W.length;if(Q===3)return this.setRGB(parseInt(W.charAt(0),16)/15,parseInt(W.charAt(1),16)/15,parseInt(W.charAt(2),16)/15,$);else if(Q===6)return this.setHex(parseInt(W,16),$);else console.warn("THREE.Color: Invalid hex color "+H)}else if(H&&H.length>0)return this.setColorName(H,$);return this}setColorName(H,$="srgb"){let J=pW[H.toLowerCase()];if(J!==void 0)this.setHex(J,$);else console.warn("THREE.Color: Unknown color "+H);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(H){return this.r=H.r,this.g=H.g,this.b=H.b,this}copySRGBToLinear(H){return this.r=F6(H.r),this.g=F6(H.g),this.b=F6(H.b),this}copyLinearToSRGB(H){return this.r=k7(H.r),this.g=k7(H.g),this.b=k7(H.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(H="srgb"){return i0.fromWorkingColorSpace(w8.copy(this),H),Math.round(d0(w8.r*255,0,255))*65536+Math.round(d0(w8.g*255,0,255))*256+Math.round(d0(w8.b*255,0,255))}getHexString(H="srgb"){return("000000"+this.getHex(H).toString(16)).slice(-6)}getHSL(H,$=i0.workingColorSpace){i0.fromWorkingColorSpace(w8.copy(this),$);let{r:J,g:Z,b:W}=w8,Q=Math.max(J,Z,W),Y=Math.min(J,Z,W),X,K,U=(Y+Q)/2;if(Y===Q)X=0,K=0;else{let G=Q-Y;switch(K=U<=0.5?G/(Q+Y):G/(2-Q-Y),Q){case J:X=(Z-W)/G+(Z<W?6:0);break;case Z:X=(W-J)/G+2;break;case W:X=(J-Z)/G+4;break}X/=6}return H.h=X,H.s=K,H.l=U,H}getRGB(H,$=i0.workingColorSpace){return i0.fromWorkingColorSpace(w8.copy(this),$),H.r=w8.r,H.g=w8.g,H.b=w8.b,H}getStyle(H="srgb"){i0.fromWorkingColorSpace(w8.copy(this),H);let{r:$,g:J,b:Z}=w8;if(H!=="srgb")return`color(${H} ${$.toFixed(3)} ${J.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round($*255)},${Math.round(J*255)},${Math.round(Z*255)})`}offsetHSL(H,$,J){return this.getHSL(V6),this.setHSL(V6.h+H,V6.s+$,V6.l+J)}add(H){return this.r+=H.r,this.g+=H.g,this.b+=H.b,this}addColors(H,$){return this.r=H.r+$.r,this.g=H.g+$.g,this.b=H.b+$.b,this}addScalar(H){return this.r+=H,this.g+=H,this.b+=H,this}sub(H){return this.r=Math.max(0,this.r-H.r),this.g=Math.max(0,this.g-H.g),this.b=Math.max(0,this.b-H.b),this}multiply(H){return this.r*=H.r,this.g*=H.g,this.b*=H.b,this}multiplyScalar(H){return this.r*=H,this.g*=H,this.b*=H,this}lerp(H,$){return this.r+=(H.r-this.r)*$,this.g+=(H.g-this.g)*$,this.b+=(H.b-this.b)*$,this}lerpColors(H,$,J){return this.r=H.r+($.r-H.r)*J,this.g=H.g+($.g-H.g)*J,this.b=H.b+($.b-H.b)*J,this}lerpHSL(H,$){this.getHSL(V6),H.getHSL(SH);let J=a7(V6.h,SH.h,$),Z=a7(V6.s,SH.s,$),W=a7(V6.l,SH.l,$);return this.setHSL(J,Z,W),this}setFromVector3(H){return this.r=H.x,this.g=H.y,this.b=H.z,this}applyMatrix3(H){let $=this.r,J=this.g,Z=this.b,W=H.elements;return this.r=W[0]*$+W[3]*J+W[6]*Z,this.g=W[1]*$+W[4]*J+W[7]*Z,this.b=W[2]*$+W[5]*J+W[8]*Z,this}equals(H){return H.r===this.r&&H.g===this.g&&H.b===this.b}fromArray(H,$=0){return this.r=H[$],this.g=H[$+1],this.b=H[$+2],this}toArray(H=[],$=0){return H[$]=this.r,H[$+1]=this.g,H[$+2]=this.b,H}fromBufferAttribute(H,$){return this.r=H.getX($),this.g=H.getY($),this.b=H.getZ($),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var w8=new A0;A0.NAMES=pW;var TY=0;class J6 extends q6{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:TY++}),this.uuid=A7(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new A0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(H){if(this._alphaTest>0!==H>0)this.version++;this._alphaTest=H}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(H){if(H===void 0)return;for(let $ in H){let J=H[$];if(J===void 0){console.warn(`THREE.Material: parameter '${$}' has value of undefined.`);continue}let Z=this[$];if(Z===void 0){console.warn(`THREE.Material: '${$}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set(J);else if(Z&&Z.isVector3&&(J&&J.isVector3))Z.copy(J);else this[$]=J}}toJSON(H){let $=H===void 0||typeof H==="string";if($)H={textures:{},images:{}};let J={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};if(J.uuid=this.uuid,J.type=this.type,this.name!=="")J.name=this.name;if(this.color&&this.color.isColor)J.color=this.color.getHex();if(this.roughness!==void 0)J.roughness=this.roughness;if(this.metalness!==void 0)J.metalness=this.metalness;if(this.sheen!==void 0)J.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)J.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)J.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)J.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)J.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)J.specular=this.specular.getHex();if(this.specularIntensity!==void 0)J.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)J.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)J.shininess=this.shininess;if(this.clearcoat!==void 0)J.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)J.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)J.clearcoatMap=this.clearcoatMap.toJSON(H).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)J.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(H).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)J.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(H).uuid,J.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.dispersion!==void 0)J.dispersion=this.dispersion;if(this.iridescence!==void 0)J.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)J.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)J.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)J.iridescenceMap=this.iridescenceMap.toJSON(H).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)J.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(H).uuid;if(this.anisotropy!==void 0)J.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)J.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)J.anisotropyMap=this.anisotropyMap.toJSON(H).uuid;if(this.map&&this.map.isTexture)J.map=this.map.toJSON(H).uuid;if(this.matcap&&this.matcap.isTexture)J.matcap=this.matcap.toJSON(H).uuid;if(this.alphaMap&&this.alphaMap.isTexture)J.alphaMap=this.alphaMap.toJSON(H).uuid;if(this.lightMap&&this.lightMap.isTexture)J.lightMap=this.lightMap.toJSON(H).uuid,J.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)J.aoMap=this.aoMap.toJSON(H).uuid,J.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)J.bumpMap=this.bumpMap.toJSON(H).uuid,J.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)J.normalMap=this.normalMap.toJSON(H).uuid,J.normalMapType=this.normalMapType,J.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)J.displacementMap=this.displacementMap.toJSON(H).uuid,J.displacementScale=this.displacementScale,J.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)J.roughnessMap=this.roughnessMap.toJSON(H).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)J.metalnessMap=this.metalnessMap.toJSON(H).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)J.emissiveMap=this.emissiveMap.toJSON(H).uuid;if(this.specularMap&&this.specularMap.isTexture)J.specularMap=this.specularMap.toJSON(H).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)J.specularIntensityMap=this.specularIntensityMap.toJSON(H).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)J.specularColorMap=this.specularColorMap.toJSON(H).uuid;if(this.envMap&&this.envMap.isTexture){if(J.envMap=this.envMap.toJSON(H).uuid,this.combine!==void 0)J.combine=this.combine}if(this.envMapRotation!==void 0)J.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)J.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)J.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)J.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)J.gradientMap=this.gradientMap.toJSON(H).uuid;if(this.transmission!==void 0)J.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)J.transmissionMap=this.transmissionMap.toJSON(H).uuid;if(this.thickness!==void 0)J.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)J.thicknessMap=this.thicknessMap.toJSON(H).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)J.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)J.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)J.size=this.size;if(this.shadowSide!==null)J.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)J.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)J.blending=this.blending;if(this.side!==0)J.side=this.side;if(this.vertexColors===!0)J.vertexColors=!0;if(this.opacity<1)J.opacity=this.opacity;if(this.transparent===!0)J.transparent=!0;if(this.blendSrc!==204)J.blendSrc=this.blendSrc;if(this.blendDst!==205)J.blendDst=this.blendDst;if(this.blendEquation!==100)J.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)J.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)J.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)J.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)J.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)J.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)J.depthFunc=this.depthFunc;if(this.depthTest===!1)J.depthTest=this.depthTest;if(this.depthWrite===!1)J.depthWrite=this.depthWrite;if(this.colorWrite===!1)J.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)J.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)J.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)J.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)J.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)J.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)J.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)J.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)J.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)J.rotation=this.rotation;if(this.polygonOffset===!0)J.polygonOffset=!0;if(this.polygonOffsetFactor!==0)J.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)J.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)J.linewidth=this.linewidth;if(this.dashSize!==void 0)J.dashSize=this.dashSize;if(this.gapSize!==void 0)J.gapSize=this.gapSize;if(this.scale!==void 0)J.scale=this.scale;if(this.dithering===!0)J.dithering=!0;if(this.alphaTest>0)J.alphaTest=this.alphaTest;if(this.alphaHash===!0)J.alphaHash=!0;if(this.alphaToCoverage===!0)J.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)J.premultipliedAlpha=!0;if(this.forceSinglePass===!0)J.forceSinglePass=!0;if(this.wireframe===!0)J.wireframe=!0;if(this.wireframeLinewidth>1)J.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")J.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")J.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)J.flatShading=!0;if(this.visible===!1)J.visible=!1;if(this.toneMapped===!1)J.toneMapped=!1;if(this.fog===!1)J.fog=!1;if(Object.keys(this.userData).length>0)J.userData=this.userData;function Z(W){let Q=[];for(let Y in W){let X=W[Y];delete X.metadata,Q.push(X)}return Q}if($){let W=Z(H.textures),Q=Z(H.images);if(W.length>0)J.textures=W;if(Q.length>0)J.images=Q}return J}clone(){return new this.constructor().copy(this)}copy(H){this.name=H.name,this.blending=H.blending,this.side=H.side,this.vertexColors=H.vertexColors,this.opacity=H.opacity,this.transparent=H.transparent,this.blendSrc=H.blendSrc,this.blendDst=H.blendDst,this.blendEquation=H.blendEquation,this.blendSrcAlpha=H.blendSrcAlpha,this.blendDstAlpha=H.blendDstAlpha,this.blendEquationAlpha=H.blendEquationAlpha,this.blendColor.copy(H.blendColor),this.blendAlpha=H.blendAlpha,this.depthFunc=H.depthFunc,this.depthTest=H.depthTest,this.depthWrite=H.depthWrite,this.stencilWriteMask=H.stencilWriteMask,this.stencilFunc=H.stencilFunc,this.stencilRef=H.stencilRef,this.stencilFuncMask=H.stencilFuncMask,this.stencilFail=H.stencilFail,this.stencilZFail=H.stencilZFail,this.stencilZPass=H.stencilZPass,this.stencilWrite=H.stencilWrite;let $=H.clippingPlanes,J=null;if($!==null){let Z=$.length;J=Array(Z);for(let W=0;W!==Z;++W)J[W]=$[W].clone()}return this.clippingPlanes=J,this.clipIntersection=H.clipIntersection,this.clipShadows=H.clipShadows,this.shadowSide=H.shadowSide,this.colorWrite=H.colorWrite,this.precision=H.precision,this.polygonOffset=H.polygonOffset,this.polygonOffsetFactor=H.polygonOffsetFactor,this.polygonOffsetUnits=H.polygonOffsetUnits,this.dithering=H.dithering,this.alphaTest=H.alphaTest,this.alphaHash=H.alphaHash,this.alphaToCoverage=H.alphaToCoverage,this.premultipliedAlpha=H.premultipliedAlpha,this.forceSinglePass=H.forceSinglePass,this.visible=H.visible,this.toneMapped=H.toneMapped,this.userData=JSON.parse(JSON.stringify(H.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(H){if(H===!0)this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class j6 extends J6{constructor(H){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new A0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new m8,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(H)}copy(H){return super.copy(H),this.color.copy(H.color),this.map=H.map,this.lightMap=H.lightMap,this.lightMapIntensity=H.lightMapIntensity,this.aoMap=H.aoMap,this.aoMapIntensity=H.aoMapIntensity,this.specularMap=H.specularMap,this.alphaMap=H.alphaMap,this.envMap=H.envMap,this.envMapRotation.copy(H.envMapRotation),this.combine=H.combine,this.reflectivity=H.reflectivity,this.refractionRatio=H.refractionRatio,this.wireframe=H.wireframe,this.wireframeLinewidth=H.wireframeLinewidth,this.wireframeLinecap=H.wireframeLinecap,this.wireframeLinejoin=H.wireframeLinejoin,this.fog=H.fog,this}}var R8=new S,_H=new T0;class l8{constructor(H,$,J=!1){if(Array.isArray(H))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=H,this.itemSize=$,this.count=H!==void 0?H.length/$:0,this.normalized=J,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(H){if(H===!0)this.version++}setUsage(H){return this.usage=H,this}addUpdateRange(H,$){this.updateRanges.push({start:H,count:$})}clearUpdateRanges(){this.updateRanges.length=0}copy(H){return this.name=H.name,this.array=new H.array.constructor(H.array),this.itemSize=H.itemSize,this.count=H.count,this.normalized=H.normalized,this.usage=H.usage,this.gpuType=H.gpuType,this}copyAt(H,$,J){H*=this.itemSize,J*=$.itemSize;for(let Z=0,W=this.itemSize;Z<W;Z++)this.array[H+Z]=$.array[J+Z];return this}copyArray(H){return this.array.set(H),this}applyMatrix3(H){if(this.itemSize===2)for(let $=0,J=this.count;$<J;$++)_H.fromBufferAttribute(this,$),_H.applyMatrix3(H),this.setXY($,_H.x,_H.y);else if(this.itemSize===3)for(let $=0,J=this.count;$<J;$++)R8.fromBufferAttribute(this,$),R8.applyMatrix3(H),this.setXYZ($,R8.x,R8.y,R8.z);return this}applyMatrix4(H){for(let $=0,J=this.count;$<J;$++)R8.fromBufferAttribute(this,$),R8.applyMatrix4(H),this.setXYZ($,R8.x,R8.y,R8.z);return this}applyNormalMatrix(H){for(let $=0,J=this.count;$<J;$++)R8.fromBufferAttribute(this,$),R8.applyNormalMatrix(H),this.setXYZ($,R8.x,R8.y,R8.z);return this}transformDirection(H){for(let $=0,J=this.count;$<J;$++)R8.fromBufferAttribute(this,$),R8.transformDirection(H),this.setXYZ($,R8.x,R8.y,R8.z);return this}set(H,$=0){return this.array.set(H,$),this}getComponent(H,$){let J=this.array[H*this.itemSize+$];if(this.normalized)J=M7(J,this.array);return J}setComponent(H,$,J){if(this.normalized)J=T8(J,this.array);return this.array[H*this.itemSize+$]=J,this}getX(H){let $=this.array[H*this.itemSize];if(this.normalized)$=M7($,this.array);return $}setX(H,$){if(this.normalized)$=T8($,this.array);return this.array[H*this.itemSize]=$,this}getY(H){let $=this.array[H*this.itemSize+1];if(this.normalized)$=M7($,this.array);return $}setY(H,$){if(this.normalized)$=T8($,this.array);return this.array[H*this.itemSize+1]=$,this}getZ(H){let $=this.array[H*this.itemSize+2];if(this.normalized)$=M7($,this.array);return $}setZ(H,$){if(this.normalized)$=T8($,this.array);return this.array[H*this.itemSize+2]=$,this}getW(H){let $=this.array[H*this.itemSize+3];if(this.normalized)$=M7($,this.array);return $}setW(H,$){if(this.normalized)$=T8($,this.array);return this.array[H*this.itemSize+3]=$,this}setXY(H,$,J){if(H*=this.itemSize,this.normalized)$=T8($,this.array),J=T8(J,this.array);return this.array[H+0]=$,this.array[H+1]=J,this}setXYZ(H,$,J,Z){if(H*=this.itemSize,this.normalized)$=T8($,this.array),J=T8(J,this.array),Z=T8(Z,this.array);return this.array[H+0]=$,this.array[H+1]=J,this.array[H+2]=Z,this}setXYZW(H,$,J,Z,W){if(H*=this.itemSize,this.normalized)$=T8($,this.array),J=T8(J,this.array),Z=T8(Z,this.array),W=T8(W,this.array);return this.array[H+0]=$,this.array[H+1]=J,this.array[H+2]=Z,this.array[H+3]=W,this}onUpload(H){return this.onUploadCallback=H,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let H={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")H.name=this.name;if(this.usage!==35044)H.usage=this.usage;return H}}class F9 extends l8{constructor(H,$,J){super(new Uint16Array(H),$,J)}}class N9 extends l8{constructor(H,$,J){super(new Uint32Array(H),$,J)}}class Y8 extends l8{constructor(H,$,J){super(new Float32Array(H),$,J)}}var AY=0,p8=new W8,U$=new F8,q7=new S,y8=new D6,n7=new D6,D8=new S;class C8 extends q6{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:AY++}),this.uuid=A7(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(H){if(Array.isArray(H))this.index=new((QJ(H))?N9:F9)(H,1);else this.index=H;return this}setIndirect(H){return this.indirect=H,this}getIndirect(){return this.indirect}getAttribute(H){return this.attributes[H]}setAttribute(H,$){return this.attributes[H]=$,this}deleteAttribute(H){return delete this.attributes[H],this}hasAttribute(H){return this.attributes[H]!==void 0}addGroup(H,$,J=0){this.groups.push({start:H,count:$,materialIndex:J})}clearGroups(){this.groups=[]}setDrawRange(H,$){this.drawRange.start=H,this.drawRange.count=$}applyMatrix4(H){let $=this.attributes.position;if($!==void 0)$.applyMatrix4(H),$.needsUpdate=!0;let J=this.attributes.normal;if(J!==void 0){let W=new y0().getNormalMatrix(H);J.applyNormalMatrix(W),J.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(H),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(H){return p8.makeRotationFromQuaternion(H),this.applyMatrix4(p8),this}rotateX(H){return p8.makeRotationX(H),this.applyMatrix4(p8),this}rotateY(H){return p8.makeRotationY(H),this.applyMatrix4(p8),this}rotateZ(H){return p8.makeRotationZ(H),this.applyMatrix4(p8),this}translate(H,$,J){return p8.makeTranslation(H,$,J),this.applyMatrix4(p8),this}scale(H,$,J){return p8.makeScale(H,$,J),this.applyMatrix4(p8),this}lookAt(H){return U$.lookAt(H),U$.updateMatrix(),this.applyMatrix4(U$.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(q7).negate(),this.translate(q7.x,q7.y,q7.z),this}setFromPoints(H){let $=this.getAttribute("position");if($===void 0){let J=[];for(let Z=0,W=H.length;Z<W;Z++){let Q=H[Z];J.push(Q.x,Q.y,Q.z||0)}this.setAttribute("position",new Y8(J,3))}else{let J=Math.min(H.length,$.count);for(let Z=0;Z<J;Z++){let W=H[Z];$.setXYZ(Z,W.x,W.y,W.z||0)}if(H.length>$.count)console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");$.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new D6;let H=this.attributes.position,$=this.morphAttributes.position;if(H&&H.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(H!==void 0){if(this.boundingBox.setFromBufferAttribute(H),$)for(let J=0,Z=$.length;J<Z;J++){let W=$[J];if(y8.setFromBufferAttribute(W),this.morphTargetsRelative)D8.addVectors(this.boundingBox.min,y8.min),this.boundingBox.expandByPoint(D8),D8.addVectors(this.boundingBox.max,y8.max),this.boundingBox.expandByPoint(D8);else this.boundingBox.expandByPoint(y8.min),this.boundingBox.expandByPoint(y8.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new s6;let H=this.attributes.position,$=this.morphAttributes.position;if(H&&H.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new S,1/0);return}if(H){let J=this.boundingSphere.center;if(y8.setFromBufferAttribute(H),$)for(let W=0,Q=$.length;W<Q;W++){let Y=$[W];if(n7.setFromBufferAttribute(Y),this.morphTargetsRelative)D8.addVectors(y8.min,n7.min),y8.expandByPoint(D8),D8.addVectors(y8.max,n7.max),y8.expandByPoint(D8);else y8.expandByPoint(n7.min),y8.expandByPoint(n7.max)}y8.getCenter(J);let Z=0;for(let W=0,Q=H.count;W<Q;W++)D8.fromBufferAttribute(H,W),Z=Math.max(Z,J.distanceToSquared(D8));if($)for(let W=0,Q=$.length;W<Q;W++){let Y=$[W],X=this.morphTargetsRelative;for(let K=0,U=Y.count;K<U;K++){if(D8.fromBufferAttribute(Y,K),X)q7.fromBufferAttribute(H,K),D8.add(q7);Z=Math.max(Z,J.distanceToSquared(D8))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let H=this.index,$=this.attributes;if(H===null||$.position===void 0||$.normal===void 0||$.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:J,normal:Z,uv:W}=$;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new l8(new Float32Array(4*J.count),4));let Q=this.getAttribute("tangent"),Y=[],X=[];for(let B=0;B<J.count;B++)Y[B]=new S,X[B]=new S;let K=new S,U=new S,G=new S,E=new T0,R=new T0,q=new T0,O=new S,D=new S;function F(B,b,C){K.fromBufferAttribute(J,B),U.fromBufferAttribute(J,b),G.fromBufferAttribute(J,C),E.fromBufferAttribute(W,B),R.fromBufferAttribute(W,b),q.fromBufferAttribute(W,C),U.sub(K),G.sub(K),R.sub(E),q.sub(E);let z=1/(R.x*q.y-q.x*R.y);if(!isFinite(z))return;O.copy(U).multiplyScalar(q.y).addScaledVector(G,-R.y).multiplyScalar(z),D.copy(G).multiplyScalar(R.x).addScaledVector(U,-q.x).multiplyScalar(z),Y[B].add(O),Y[b].add(O),Y[C].add(O),X[B].add(D),X[b].add(D),X[C].add(D)}let N=this.groups;if(N.length===0)N=[{start:0,count:H.count}];for(let B=0,b=N.length;B<b;++B){let C=N[B],z=C.start,A=C.count;for(let x=z,p=z+A;x<p;x+=3)F(H.getX(x+0),H.getX(x+1),H.getX(x+2))}let I=new S,L=new S,T=new S,_=new S;function w(B){T.fromBufferAttribute(Z,B),_.copy(T);let b=Y[B];I.copy(b),I.sub(T.multiplyScalar(T.dot(b))).normalize(),L.crossVectors(_,b);let z=L.dot(X[B])<0?-1:1;Q.setXYZW(B,I.x,I.y,I.z,z)}for(let B=0,b=N.length;B<b;++B){let C=N[B],z=C.start,A=C.count;for(let x=z,p=z+A;x<p;x+=3)w(H.getX(x+0)),w(H.getX(x+1)),w(H.getX(x+2))}}computeVertexNormals(){let H=this.index,$=this.getAttribute("position");if($!==void 0){let J=this.getAttribute("normal");if(J===void 0)J=new l8(new Float32Array($.count*3),3),this.setAttribute("normal",J);else for(let E=0,R=J.count;E<R;E++)J.setXYZ(E,0,0,0);let Z=new S,W=new S,Q=new S,Y=new S,X=new S,K=new S,U=new S,G=new S;if(H)for(let E=0,R=H.count;E<R;E+=3){let q=H.getX(E+0),O=H.getX(E+1),D=H.getX(E+2);Z.fromBufferAttribute($,q),W.fromBufferAttribute($,O),Q.fromBufferAttribute($,D),U.subVectors(Q,W),G.subVectors(Z,W),U.cross(G),Y.fromBufferAttribute(J,q),X.fromBufferAttribute(J,O),K.fromBufferAttribute(J,D),Y.add(U),X.add(U),K.add(U),J.setXYZ(q,Y.x,Y.y,Y.z),J.setXYZ(O,X.x,X.y,X.z),J.setXYZ(D,K.x,K.y,K.z)}else for(let E=0,R=$.count;E<R;E+=3)Z.fromBufferAttribute($,E+0),W.fromBufferAttribute($,E+1),Q.fromBufferAttribute($,E+2),U.subVectors(Q,W),G.subVectors(Z,W),U.cross(G),J.setXYZ(E+0,U.x,U.y,U.z),J.setXYZ(E+1,U.x,U.y,U.z),J.setXYZ(E+2,U.x,U.y,U.z);this.normalizeNormals(),J.needsUpdate=!0}}normalizeNormals(){let H=this.attributes.normal;for(let $=0,J=H.count;$<J;$++)D8.fromBufferAttribute(H,$),D8.normalize(),H.setXYZ($,D8.x,D8.y,D8.z)}toNonIndexed(){function H(Y,X){let{array:K,itemSize:U,normalized:G}=Y,E=new K.constructor(X.length*U),R=0,q=0;for(let O=0,D=X.length;O<D;O++){if(Y.isInterleavedBufferAttribute)R=X[O]*Y.data.stride+Y.offset;else R=X[O]*U;for(let F=0;F<U;F++)E[q++]=K[R++]}return new l8(E,U,G)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let $=new C8,J=this.index.array,Z=this.attributes;for(let Y in Z){let X=Z[Y],K=H(X,J);$.setAttribute(Y,K)}let W=this.morphAttributes;for(let Y in W){let X=[],K=W[Y];for(let U=0,G=K.length;U<G;U++){let E=K[U],R=H(E,J);X.push(R)}$.morphAttributes[Y]=X}$.morphTargetsRelative=this.morphTargetsRelative;let Q=this.groups;for(let Y=0,X=Q.length;Y<X;Y++){let K=Q[Y];$.addGroup(K.start,K.count,K.materialIndex)}return $}toJSON(){let H={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(H.uuid=this.uuid,H.type=this.type,this.name!=="")H.name=this.name;if(Object.keys(this.userData).length>0)H.userData=this.userData;if(this.parameters!==void 0){let X=this.parameters;for(let K in X)if(X[K]!==void 0)H[K]=X[K];return H}H.data={attributes:{}};let $=this.index;if($!==null)H.data.index={type:$.array.constructor.name,array:Array.prototype.slice.call($.array)};let J=this.attributes;for(let X in J){let K=J[X];H.data.attributes[X]=K.toJSON(H.data)}let Z={},W=!1;for(let X in this.morphAttributes){let K=this.morphAttributes[X],U=[];for(let G=0,E=K.length;G<E;G++){let R=K[G];U.push(R.toJSON(H.data))}if(U.length>0)Z[X]=U,W=!0}if(W)H.data.morphAttributes=Z,H.data.morphTargetsRelative=this.morphTargetsRelative;let Q=this.groups;if(Q.length>0)H.data.groups=JSON.parse(JSON.stringify(Q));let Y=this.boundingSphere;if(Y!==null)H.data.boundingSphere={center:Y.center.toArray(),radius:Y.radius};return H}clone(){return new this.constructor().copy(this)}copy(H){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let $={};this.name=H.name;let J=H.index;if(J!==null)this.setIndex(J.clone($));let Z=H.attributes;for(let K in Z){let U=Z[K];this.setAttribute(K,U.clone($))}let W=H.morphAttributes;for(let K in W){let U=[],G=W[K];for(let E=0,R=G.length;E<R;E++)U.push(G[E].clone($));this.morphAttributes[K]=U}this.morphTargetsRelative=H.morphTargetsRelative;let Q=H.groups;for(let K=0,U=Q.length;K<U;K++){let G=Q[K];this.addGroup(G.start,G.count,G.materialIndex)}let Y=H.boundingBox;if(Y!==null)this.boundingBox=Y.clone();let X=H.boundingSphere;if(X!==null)this.boundingSphere=X.clone();return this.drawRange.start=H.drawRange.start,this.drawRange.count=H.drawRange.count,this.userData=H.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var LZ=new W8,p6=new i6,jH=new s6,CZ=new S,fH=new S,hH=new S,xH=new S,G$=new S,yH=new S,zZ=new S,vH=new S;class r0 extends F8{constructor(H=new C8,$=new j6){super();this.isMesh=!0,this.type="Mesh",this.geometry=H,this.material=$,this.updateMorphTargets()}copy(H,$){if(super.copy(H,$),H.morphTargetInfluences!==void 0)this.morphTargetInfluences=H.morphTargetInfluences.slice();if(H.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},H.morphTargetDictionary);return this.material=Array.isArray(H.material)?H.material.slice():H.material,this.geometry=H.geometry,this}updateMorphTargets(){let $=this.geometry.morphAttributes,J=Object.keys($);if(J.length>0){let Z=$[J[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,Q=Z.length;W<Q;W++){let Y=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=W}}}}getVertexPosition(H,$){let J=this.geometry,Z=J.attributes.position,W=J.morphAttributes.position,Q=J.morphTargetsRelative;$.fromBufferAttribute(Z,H);let Y=this.morphTargetInfluences;if(W&&Y){yH.set(0,0,0);for(let X=0,K=W.length;X<K;X++){let U=Y[X],G=W[X];if(U===0)continue;if(G$.fromBufferAttribute(G,H),Q)yH.addScaledVector(G$,U);else yH.addScaledVector(G$.sub($),U)}$.add(yH)}return $}raycast(H,$){let J=this.geometry,Z=this.material,W=this.matrixWorld;if(Z===void 0)return;if(J.boundingSphere===null)J.computeBoundingSphere();if(jH.copy(J.boundingSphere),jH.applyMatrix4(W),p6.copy(H.ray).recast(H.near),jH.containsPoint(p6.origin)===!1){if(p6.intersectSphere(jH,CZ)===null)return;if(p6.origin.distanceToSquared(CZ)>(H.far-H.near)**2)return}if(LZ.copy(W).invert(),p6.copy(H.ray).applyMatrix4(LZ),J.boundingBox!==null){if(p6.intersectsBox(J.boundingBox)===!1)return}this._computeIntersections(H,$,p6)}_computeIntersections(H,$,J){let Z,W=this.geometry,Q=this.material,Y=W.index,X=W.attributes.position,K=W.attributes.uv,U=W.attributes.uv1,G=W.attributes.normal,E=W.groups,R=W.drawRange;if(Y!==null)if(Array.isArray(Q))for(let q=0,O=E.length;q<O;q++){let D=E[q],F=Q[D.materialIndex],N=Math.max(D.start,R.start),I=Math.min(Y.count,Math.min(D.start+D.count,R.start+R.count));for(let L=N,T=I;L<T;L+=3){let _=Y.getX(L),w=Y.getX(L+1),B=Y.getX(L+2);if(Z=bH(this,F,H,J,K,U,G,_,w,B),Z)Z.faceIndex=Math.floor(L/3),Z.face.materialIndex=D.materialIndex,$.push(Z)}}else{let q=Math.max(0,R.start),O=Math.min(Y.count,R.start+R.count);for(let D=q,F=O;D<F;D+=3){let N=Y.getX(D),I=Y.getX(D+1),L=Y.getX(D+2);if(Z=bH(this,Q,H,J,K,U,G,N,I,L),Z)Z.faceIndex=Math.floor(D/3),$.push(Z)}}else if(X!==void 0)if(Array.isArray(Q))for(let q=0,O=E.length;q<O;q++){let D=E[q],F=Q[D.materialIndex],N=Math.max(D.start,R.start),I=Math.min(X.count,Math.min(D.start+D.count,R.start+R.count));for(let L=N,T=I;L<T;L+=3){let _=L,w=L+1,B=L+2;if(Z=bH(this,F,H,J,K,U,G,_,w,B),Z)Z.faceIndex=Math.floor(L/3),Z.face.materialIndex=D.materialIndex,$.push(Z)}}else{let q=Math.max(0,R.start),O=Math.min(X.count,R.start+R.count);for(let D=q,F=O;D<F;D+=3){let N=D,I=D+1,L=D+2;if(Z=bH(this,Q,H,J,K,U,G,N,I,L),Z)Z.faceIndex=Math.floor(D/3),$.push(Z)}}}}function SY(H,$,J,Z,W,Q,Y,X){let K;if($.side===1)K=Z.intersectTriangle(Y,Q,W,!0,X);else K=Z.intersectTriangle(W,Q,Y,$.side===0,X);if(K===null)return null;vH.copy(X),vH.applyMatrix4(H.matrixWorld);let U=J.ray.origin.distanceTo(vH);if(U<J.near||U>J.far)return null;return{distance:U,point:vH.clone(),object:H}}function bH(H,$,J,Z,W,Q,Y,X,K,U){H.getVertexPosition(X,fH),H.getVertexPosition(K,hH),H.getVertexPosition(U,xH);let G=SY(H,$,J,Z,fH,hH,xH,zZ);if(G){let E=new S;if(u8.getBarycoord(zZ,fH,hH,xH,E),W)G.uv=u8.getInterpolatedAttribute(W,X,K,U,E,new T0);if(Q)G.uv1=u8.getInterpolatedAttribute(Q,X,K,U,E,new T0);if(Y){if(G.normal=u8.getInterpolatedAttribute(Y,X,K,U,E,new S),G.normal.dot(Z.direction)>0)G.normal.multiplyScalar(-1)}let R={a:X,b:K,c:U,normal:new S,materialIndex:0};u8.getNormal(fH,hH,xH,R.normal),G.face=R,G.barycoord=E}return G}class Z6 extends C8{constructor(H=1,$=1,J=1,Z=1,W=1,Q=1){super();this.type="BoxGeometry",this.parameters={width:H,height:$,depth:J,widthSegments:Z,heightSegments:W,depthSegments:Q};let Y=this;Z=Math.floor(Z),W=Math.floor(W),Q=Math.floor(Q);let X=[],K=[],U=[],G=[],E=0,R=0;q("z","y","x",-1,-1,J,$,H,Q,W,0),q("z","y","x",1,-1,J,$,-H,Q,W,1),q("x","z","y",1,1,H,J,$,Z,Q,2),q("x","z","y",1,-1,H,J,-$,Z,Q,3),q("x","y","z",1,-1,H,$,J,Z,W,4),q("x","y","z",-1,-1,H,$,-J,Z,W,5),this.setIndex(X),this.setAttribute("position",new Y8(K,3)),this.setAttribute("normal",new Y8(U,3)),this.setAttribute("uv",new Y8(G,2));function q(O,D,F,N,I,L,T,_,w,B,b){let C=L/w,z=T/B,A=L/2,x=T/2,p=_/2,l=w+1,o=B+1,d=0,t=0,m=new S;for(let X0=0;X0<o;X0++){let H0=X0*z-x;for(let V0=0;V0<l;V0++){let g0=V0*C-A;m[O]=g0*N,m[D]=H0*I,m[F]=p,K.push(m.x,m.y,m.z),m[O]=0,m[D]=0,m[F]=_>0?1:-1,U.push(m.x,m.y,m.z),G.push(V0/w),G.push(1-X0/B),d+=1}}for(let X0=0;X0<B;X0++)for(let H0=0;H0<w;H0++){let V0=E+H0+l*X0,g0=E+H0+l*(X0+1),n=E+(H0+1)+l*(X0+1),J0=E+(H0+1)+l*X0;X.push(V0,g0,J0),X.push(g0,n,J0),t+=6}Y.addGroup(R,t,b),R+=t,E+=d}}copy(H){return super.copy(H),this.parameters=Object.assign({},H.parameters),this}static fromJSON(H){return new Z6(H.width,H.height,H.depth,H.widthSegments,H.heightSegments,H.depthSegments)}}function o6(H){let $={};for(let J in H){$[J]={};for(let Z in H[J]){let W=H[J][Z];if(W&&(W.isColor||W.isMatrix3||W.isMatrix4||W.isVector2||W.isVector3||W.isVector4||W.isTexture||W.isQuaternion))if(W.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),$[J][Z]=null;else $[J][Z]=W.clone();else if(Array.isArray(W))$[J][Z]=W.slice();else $[J][Z]=W}}return $}function V8(H){let $={};for(let J=0;J<H.length;J++){let Z=o6(H[J]);for(let W in Z)$[W]=Z[W]}return $}function _Y(H){let $=[];for(let J=0;J<H.length;J++)$.push(H[J].clone());return $}function UJ(H){let $=H.getRenderTarget();if($===null)return H.outputColorSpace;if($.isXRRenderTarget===!0)return $.texture.colorSpace;return i0.workingColorSpace}var uW={clone:o6,merge:V8},jY=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fY=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class W6 extends J6{constructor(H){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jY,this.fragmentShader=fY,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,H!==void 0)this.setValues(H)}copy(H){return super.copy(H),this.fragmentShader=H.fragmentShader,this.vertexShader=H.vertexShader,this.uniforms=o6(H.uniforms),this.uniformsGroups=_Y(H.uniformsGroups),this.defines=Object.assign({},H.defines),this.wireframe=H.wireframe,this.wireframeLinewidth=H.wireframeLinewidth,this.fog=H.fog,this.lights=H.lights,this.clipping=H.clipping,this.extensions=Object.assign({},H.extensions),this.glslVersion=H.glslVersion,this}toJSON(H){let $=super.toJSON(H);$.glslVersion=this.glslVersion,$.uniforms={};for(let Z in this.uniforms){let Q=this.uniforms[Z].value;if(Q&&Q.isTexture)$.uniforms[Z]={type:"t",value:Q.toJSON(H).uuid};else if(Q&&Q.isColor)$.uniforms[Z]={type:"c",value:Q.getHex()};else if(Q&&Q.isVector2)$.uniforms[Z]={type:"v2",value:Q.toArray()};else if(Q&&Q.isVector3)$.uniforms[Z]={type:"v3",value:Q.toArray()};else if(Q&&Q.isVector4)$.uniforms[Z]={type:"v4",value:Q.toArray()};else if(Q&&Q.isMatrix3)$.uniforms[Z]={type:"m3",value:Q.toArray()};else if(Q&&Q.isMatrix4)$.uniforms[Z]={type:"m4",value:Q.toArray()};else $.uniforms[Z]={value:Q}}if(Object.keys(this.defines).length>0)$.defines=this.defines;$.vertexShader=this.vertexShader,$.fragmentShader=this.fragmentShader,$.lights=this.lights,$.clipping=this.clipping;let J={};for(let Z in this.extensions)if(this.extensions[Z]===!0)J[Z]=!0;if(Object.keys(J).length>0)$.extensions=J;return $}}class q9 extends F8{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new W8,this.projectionMatrix=new W8,this.projectionMatrixInverse=new W8,this.coordinateSystem=2000}copy(H,$){return super.copy(H,$),this.matrixWorldInverse.copy(H.matrixWorldInverse),this.projectionMatrix.copy(H.projectionMatrix),this.projectionMatrixInverse.copy(H.projectionMatrixInverse),this.coordinateSystem=H.coordinateSystem,this}getWorldDirection(H){return super.getWorldDirection(H).negate()}updateMatrixWorld(H){super.updateMatrixWorld(H),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(H,$){super.updateWorldMatrix(H,$),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var B6=new S,wZ=new T0,IZ=new T0;class I8 extends q9{constructor(H=50,$=1,J=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=H,this.zoom=1,this.near=J,this.far=Z,this.focus=10,this.aspect=$,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(H,$){return super.copy(H,$),this.fov=H.fov,this.zoom=H.zoom,this.near=H.near,this.far=H.far,this.focus=H.focus,this.aspect=H.aspect,this.view=H.view===null?null:Object.assign({},H.view),this.filmGauge=H.filmGauge,this.filmOffset=H.filmOffset,this}setFocalLength(H){let $=0.5*this.getFilmHeight()/H;this.fov=L7*2*Math.atan($),this.updateProjectionMatrix()}getFocalLength(){let H=Math.tan(o7*0.5*this.fov);return 0.5*this.getFilmHeight()/H}getEffectiveFOV(){return L7*2*Math.atan(Math.tan(o7*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(H,$,J){B6.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(B6.x,B6.y).multiplyScalar(-H/B6.z),B6.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),J.set(B6.x,B6.y).multiplyScalar(-H/B6.z)}getViewSize(H,$){return this.getViewBounds(H,wZ,IZ),$.subVectors(IZ,wZ)}setViewOffset(H,$,J,Z,W,Q){if(this.aspect=H/$,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=H,this.view.fullHeight=$,this.view.offsetX=J,this.view.offsetY=Z,this.view.width=W,this.view.height=Q,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let H=this.near,$=H*Math.tan(o7*0.5*this.fov)/this.zoom,J=2*$,Z=this.aspect*J,W=-0.5*Z,Q=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:X,fullHeight:K}=Q;W+=Q.offsetX*Z/X,$-=Q.offsetY*J/K,Z*=Q.width/X,J*=Q.height/K}let Y=this.filmOffset;if(Y!==0)W+=H*Y/this.getFilmWidth();this.projectionMatrix.makePerspective(W,W+Z,$,$-J,H,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(H){let $=super.toJSON(H);if($.object.fov=this.fov,$.object.zoom=this.zoom,$.object.near=this.near,$.object.far=this.far,$.object.focus=this.focus,$.object.aspect=this.aspect,this.view!==null)$.object.view=Object.assign({},this.view);return $.object.filmGauge=this.filmGauge,$.object.filmOffset=this.filmOffset,$}}var O7=-90,D7=1;class GJ extends F8{constructor(H,$,J){super();this.type="CubeCamera",this.renderTarget=J,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new I8(O7,D7,H,$);Z.layers=this.layers,this.add(Z);let W=new I8(O7,D7,H,$);W.layers=this.layers,this.add(W);let Q=new I8(O7,D7,H,$);Q.layers=this.layers,this.add(Q);let Y=new I8(O7,D7,H,$);Y.layers=this.layers,this.add(Y);let X=new I8(O7,D7,H,$);X.layers=this.layers,this.add(X);let K=new I8(O7,D7,H,$);K.layers=this.layers,this.add(K)}updateCoordinateSystem(){let H=this.coordinateSystem,$=this.children.concat(),[J,Z,W,Q,Y,X]=$;for(let K of $)this.remove(K);if(H===2000)J.up.set(0,1,0),J.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),W.up.set(0,0,-1),W.lookAt(0,1,0),Q.up.set(0,0,1),Q.lookAt(0,-1,0),Y.up.set(0,1,0),Y.lookAt(0,0,1),X.up.set(0,1,0),X.lookAt(0,0,-1);else if(H===2001)J.up.set(0,-1,0),J.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),W.up.set(0,0,1),W.lookAt(0,1,0),Q.up.set(0,0,-1),Q.lookAt(0,-1,0),Y.up.set(0,-1,0),Y.lookAt(0,0,1),X.up.set(0,-1,0),X.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+H);for(let K of $)this.add(K),K.updateMatrixWorld()}update(H,$){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:J,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==H.coordinateSystem)this.coordinateSystem=H.coordinateSystem,this.updateCoordinateSystem();let[W,Q,Y,X,K,U]=this.children,G=H.getRenderTarget(),E=H.getActiveCubeFace(),R=H.getActiveMipmapLevel(),q=H.xr.enabled;H.xr.enabled=!1;let O=J.texture.generateMipmaps;J.texture.generateMipmaps=!1,H.setRenderTarget(J,0,Z),H.render($,W),H.setRenderTarget(J,1,Z),H.render($,Q),H.setRenderTarget(J,2,Z),H.render($,Y),H.setRenderTarget(J,3,Z),H.render($,X),H.setRenderTarget(J,4,Z),H.render($,K),J.texture.generateMipmaps=O,H.setRenderTarget(J,5,Z),H.render($,U),H.setRenderTarget(G,E,R),H.xr.enabled=q,J.texture.needsPMREMUpdate=!0}}class O9 extends L8{constructor(H,$,J,Z,W,Q,Y,X,K,U){H=H!==void 0?H:[],$=$!==void 0?$:301;super(H,$,J,Z,W,Q,Y,X,K,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(H){this.image=H}}class EJ extends O6{constructor(H=1,$={}){super(H,H,$);this.isWebGLCubeRenderTarget=!0;let J={width:H,height:H,depth:1},Z=[J,J,J,J,J,J];this.texture=new O9(Z,$.mapping,$.wrapS,$.wrapT,$.magFilter,$.minFilter,$.format,$.type,$.anisotropy,$.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=$.generateMipmaps!==void 0?$.generateMipmaps:!1,this.texture.minFilter=$.minFilter!==void 0?$.minFilter:1006}fromEquirectangularTexture(H,$){this.texture.type=$.type,this.texture.colorSpace=$.colorSpace,this.texture.generateMipmaps=$.generateMipmaps,this.texture.minFilter=$.minFilter,this.texture.magFilter=$.magFilter;let J={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},Z=new Z6(5,5,5),W=new W6({name:"CubemapFromEquirect",uniforms:o6(J.uniforms),vertexShader:J.vertexShader,fragmentShader:J.fragmentShader,side:1,blending:0});W.uniforms.tEquirect.value=$;let Q=new r0(Z,W),Y=$.minFilter;if($.minFilter===1008)$.minFilter=1006;return new GJ(1,10,this).update(H,Q),$.minFilter=Y,Q.geometry.dispose(),Q.material.dispose(),this}clear(H,$,J,Z){let W=H.getRenderTarget();for(let Q=0;Q<6;Q++)H.setRenderTarget(this,Q),H.clear($,J,Z);H.setRenderTarget(W)}}class D9 extends F8{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new m8,this.environmentIntensity=1,this.environmentRotation=new m8,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(H,$){if(super.copy(H,$),H.background!==null)this.background=H.background.clone();if(H.environment!==null)this.environment=H.environment.clone();if(H.fog!==null)this.fog=H.fog.clone();if(this.backgroundBlurriness=H.backgroundBlurriness,this.backgroundIntensity=H.backgroundIntensity,this.backgroundRotation.copy(H.backgroundRotation),this.environmentIntensity=H.environmentIntensity,this.environmentRotation.copy(H.environmentRotation),H.overrideMaterial!==null)this.overrideMaterial=H.overrideMaterial.clone();return this.matrixAutoUpdate=H.matrixAutoUpdate,this}toJSON(H){let $=super.toJSON(H);if(this.fog!==null)$.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)$.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)$.object.backgroundIntensity=this.backgroundIntensity;if($.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)$.object.environmentIntensity=this.environmentIntensity;return $.object.environmentRotation=this.environmentRotation.toArray(),$}}var E$=new S,hY=new S,xY=new y0;class o8{constructor(H=new S(1,0,0),$=0){this.isPlane=!0,this.normal=H,this.constant=$}set(H,$){return this.normal.copy(H),this.constant=$,this}setComponents(H,$,J,Z){return this.normal.set(H,$,J),this.constant=Z,this}setFromNormalAndCoplanarPoint(H,$){return this.normal.copy(H),this.constant=-$.dot(this.normal),this}setFromCoplanarPoints(H,$,J){let Z=E$.subVectors(J,$).cross(hY.subVectors(H,$)).normalize();return this.setFromNormalAndCoplanarPoint(Z,H),this}copy(H){return this.normal.copy(H.normal),this.constant=H.constant,this}normalize(){let H=1/this.normal.length();return this.normal.multiplyScalar(H),this.constant*=H,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(H){return this.normal.dot(H)+this.constant}distanceToSphere(H){return this.distanceToPoint(H.center)-H.radius}projectPoint(H,$){return $.copy(H).addScaledVector(this.normal,-this.distanceToPoint(H))}intersectLine(H,$){let J=H.delta(E$),Z=this.normal.dot(J);if(Z===0){if(this.distanceToPoint(H.start)===0)return $.copy(H.start);return null}let W=-(H.start.dot(this.normal)+this.constant)/Z;if(W<0||W>1)return null;return $.copy(H.start).addScaledVector(J,W)}intersectsLine(H){let $=this.distanceToPoint(H.start),J=this.distanceToPoint(H.end);return $<0&&J>0||J<0&&$>0}intersectsBox(H){return H.intersectsPlane(this)}intersectsSphere(H){return H.intersectsPlane(this)}coplanarPoint(H){return H.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(H,$){let J=$||xY.getNormalMatrix(H),Z=this.coplanarPoint(E$).applyMatrix4(H),W=this.normal.applyMatrix3(J).normalize();return this.constant=-Z.dot(W),this}translate(H){return this.constant-=H.dot(this.normal),this}equals(H){return H.normal.equals(this.normal)&&H.constant===this.constant}clone(){return new this.constructor().copy(this)}}var u6=new s6,gH=new S;class YH{constructor(H=new o8,$=new o8,J=new o8,Z=new o8,W=new o8,Q=new o8){this.planes=[H,$,J,Z,W,Q]}set(H,$,J,Z,W,Q){let Y=this.planes;return Y[0].copy(H),Y[1].copy($),Y[2].copy(J),Y[3].copy(Z),Y[4].copy(W),Y[5].copy(Q),this}copy(H){let $=this.planes;for(let J=0;J<6;J++)$[J].copy(H.planes[J]);return this}setFromProjectionMatrix(H,$=2000){let J=this.planes,Z=H.elements,W=Z[0],Q=Z[1],Y=Z[2],X=Z[3],K=Z[4],U=Z[5],G=Z[6],E=Z[7],R=Z[8],q=Z[9],O=Z[10],D=Z[11],F=Z[12],N=Z[13],I=Z[14],L=Z[15];if(J[0].setComponents(X-W,E-K,D-R,L-F).normalize(),J[1].setComponents(X+W,E+K,D+R,L+F).normalize(),J[2].setComponents(X+Q,E+U,D+q,L+N).normalize(),J[3].setComponents(X-Q,E-U,D-q,L-N).normalize(),J[4].setComponents(X-Y,E-G,D-O,L-I).normalize(),$===2000)J[5].setComponents(X+Y,E+G,D+O,L+I).normalize();else if($===2001)J[5].setComponents(Y,G,O,I).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+$);return this}intersectsObject(H){if(H.boundingSphere!==void 0){if(H.boundingSphere===null)H.computeBoundingSphere();u6.copy(H.boundingSphere).applyMatrix4(H.matrixWorld)}else{let $=H.geometry;if($.boundingSphere===null)$.computeBoundingSphere();u6.copy($.boundingSphere).applyMatrix4(H.matrixWorld)}return this.intersectsSphere(u6)}intersectsSprite(H){return u6.center.set(0,0,0),u6.radius=0.7071067811865476,u6.applyMatrix4(H.matrixWorld),this.intersectsSphere(u6)}intersectsSphere(H){let $=this.planes,J=H.center,Z=-H.radius;for(let W=0;W<6;W++)if($[W].distanceToPoint(J)<Z)return!1;return!0}intersectsBox(H){let $=this.planes;for(let J=0;J<6;J++){let Z=$[J];if(gH.x=Z.normal.x>0?H.max.x:H.min.x,gH.y=Z.normal.y>0?H.max.y:H.min.y,gH.z=Z.normal.z>0?H.max.z:H.min.z,Z.distanceToPoint(gH)<0)return!1}return!0}containsPoint(H){let $=this.planes;for(let J=0;J<6;J++)if($[J].distanceToPoint(H)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class XH extends J6{constructor(H){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new A0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(H)}copy(H){return super.copy(H),this.color.copy(H.color),this.map=H.map,this.linewidth=H.linewidth,this.linecap=H.linecap,this.linejoin=H.linejoin,this.fog=H.fog,this}}var cH=new S,nH=new S,VZ=new W8,s7=new i6,pH=new s6,R$=new S,BZ=new S;class M9 extends F8{constructor(H=new C8,$=new XH){super();this.isLine=!0,this.type="Line",this.geometry=H,this.material=$,this.updateMorphTargets()}copy(H,$){return super.copy(H,$),this.material=Array.isArray(H.material)?H.material.slice():H.material,this.geometry=H.geometry,this}computeLineDistances(){let H=this.geometry;if(H.index===null){let $=H.attributes.position,J=[0];for(let Z=1,W=$.count;Z<W;Z++)cH.fromBufferAttribute($,Z-1),nH.fromBufferAttribute($,Z),J[Z]=J[Z-1],J[Z]+=cH.distanceTo(nH);H.setAttribute("lineDistance",new Y8(J,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(H,$){let J=this.geometry,Z=this.matrixWorld,W=H.params.Line.threshold,Q=J.drawRange;if(J.boundingSphere===null)J.computeBoundingSphere();if(pH.copy(J.boundingSphere),pH.applyMatrix4(Z),pH.radius+=W,H.ray.intersectsSphere(pH)===!1)return;VZ.copy(Z).invert(),s7.copy(H.ray).applyMatrix4(VZ);let Y=W/((this.scale.x+this.scale.y+this.scale.z)/3),X=Y*Y,K=this.isLineSegments?2:1,U=J.index,E=J.attributes.position;if(U!==null){let R=Math.max(0,Q.start),q=Math.min(U.count,Q.start+Q.count);for(let O=R,D=q-1;O<D;O+=K){let F=U.getX(O),N=U.getX(O+1),I=uH(this,H,s7,X,F,N);if(I)$.push(I)}if(this.isLineLoop){let O=U.getX(q-1),D=U.getX(R),F=uH(this,H,s7,X,O,D);if(F)$.push(F)}}else{let R=Math.max(0,Q.start),q=Math.min(E.count,Q.start+Q.count);for(let O=R,D=q-1;O<D;O+=K){let F=uH(this,H,s7,X,O,O+1);if(F)$.push(F)}if(this.isLineLoop){let O=uH(this,H,s7,X,q-1,R);if(O)$.push(O)}}}updateMorphTargets(){let $=this.geometry.morphAttributes,J=Object.keys($);if(J.length>0){let Z=$[J[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,Q=Z.length;W<Q;W++){let Y=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=W}}}}}function uH(H,$,J,Z,W,Q){let Y=H.geometry.attributes.position;if(cH.fromBufferAttribute(Y,W),nH.fromBufferAttribute(Y,Q),J.distanceSqToSegment(cH,nH,R$,BZ)>Z)return;R$.applyMatrix4(H.matrixWorld);let K=$.ray.origin.distanceTo(R$);if(K<$.near||K>$.far)return;return{distance:K,point:BZ.clone().applyMatrix4(H.matrixWorld),index:W,face:null,faceIndex:null,barycoord:null,object:H}}class KH extends J6{constructor(H){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new A0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(H)}copy(H){return super.copy(H),this.color.copy(H.color),this.map=H.map,this.alphaMap=H.alphaMap,this.size=H.size,this.sizeAttenuation=H.sizeAttenuation,this.fog=H.fog,this}}var PZ=new W8,q$=new i6,lH=new s6,mH=new S;class k9 extends F8{constructor(H=new C8,$=new KH){super();this.isPoints=!0,this.type="Points",this.geometry=H,this.material=$,this.updateMorphTargets()}copy(H,$){return super.copy(H,$),this.material=Array.isArray(H.material)?H.material.slice():H.material,this.geometry=H.geometry,this}raycast(H,$){let J=this.geometry,Z=this.matrixWorld,W=H.params.Points.threshold,Q=J.drawRange;if(J.boundingSphere===null)J.computeBoundingSphere();if(lH.copy(J.boundingSphere),lH.applyMatrix4(Z),lH.radius+=W,H.ray.intersectsSphere(lH)===!1)return;PZ.copy(Z).invert(),q$.copy(H.ray).applyMatrix4(PZ);let Y=W/((this.scale.x+this.scale.y+this.scale.z)/3),X=Y*Y,K=J.index,G=J.attributes.position;if(K!==null){let E=Math.max(0,Q.start),R=Math.min(K.count,Q.start+Q.count);for(let q=E,O=R;q<O;q++){let D=K.getX(q);mH.fromBufferAttribute(G,D),TZ(mH,D,X,Z,H,$,this)}}else{let E=Math.max(0,Q.start),R=Math.min(G.count,Q.start+Q.count);for(let q=E,O=R;q<O;q++)mH.fromBufferAttribute(G,q),TZ(mH,q,X,Z,H,$,this)}}updateMorphTargets(){let $=this.geometry.morphAttributes,J=Object.keys($);if(J.length>0){let Z=$[J[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,Q=Z.length;W<Q;W++){let Y=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=W}}}}}function TZ(H,$,J,Z,W,Q,Y){let X=q$.distanceSqToPoint(H);if(X<J){let K=new S;q$.closestPointToPoint(H,K),K.applyMatrix4(Z);let U=W.ray.origin.distanceTo(K);if(U<W.near||U>W.far)return;Q.push({distance:U,distanceToRay:Math.sqrt(X),point:K,index:$,face:null,faceIndex:null,barycoord:null,object:Y})}}class Q6 extends F8{constructor(){super();this.isGroup=!0,this.type="Group"}}class S7 extends L8{constructor(H,$,J,Z,W,Q,Y,X,K){super(H,$,J,Z,W,Q,Y,X,K);this.isCanvasTexture=!0,this.needsUpdate=!0}}class L9 extends L8{constructor(H,$,J,Z,W,Q,Y,X,K,U=1026){if(U!==1026&&U!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");if(J===void 0&&U===1026)J=1014;if(J===void 0&&U===1027)J=1020;super(null,Z,W,Q,Y,X,U,J,K);this.isDepthTexture=!0,this.image={width:H,height:$},this.magFilter=Y!==void 0?Y:1003,this.minFilter=X!==void 0?X:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(H){return super.copy(H),this.compareFunction=H.compareFunction,this}toJSON(H){let $=super.toJSON(H);if(this.compareFunction!==null)$.compareFunction=this.compareFunction;return $}}class a8 extends C8{constructor(H=1,$=1,J=1,Z=32,W=1,Q=!1,Y=0,X=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:H,radiusBottom:$,height:J,radialSegments:Z,heightSegments:W,openEnded:Q,thetaStart:Y,thetaLength:X};let K=this;Z=Math.floor(Z),W=Math.floor(W);let U=[],G=[],E=[],R=[],q=0,O=[],D=J/2,F=0;if(N(),Q===!1){if(H>0)I(!0);if($>0)I(!1)}this.setIndex(U),this.setAttribute("position",new Y8(G,3)),this.setAttribute("normal",new Y8(E,3)),this.setAttribute("uv",new Y8(R,2));function N(){let L=new S,T=new S,_=0,w=($-H)/J;for(let B=0;B<=W;B++){let b=[],C=B/W,z=C*($-H)+H;for(let A=0;A<=Z;A++){let x=A/Z,p=x*X+Y,l=Math.sin(p),o=Math.cos(p);T.x=z*l,T.y=-C*J+D,T.z=z*o,G.push(T.x,T.y,T.z),L.set(l,w,o).normalize(),E.push(L.x,L.y,L.z),R.push(x,1-C),b.push(q++)}O.push(b)}for(let B=0;B<Z;B++)for(let b=0;b<W;b++){let C=O[b][B],z=O[b+1][B],A=O[b+1][B+1],x=O[b][B+1];if(H>0||b!==0)U.push(C,z,x),_+=3;if($>0||b!==W-1)U.push(z,A,x),_+=3}K.addGroup(F,_,0),F+=_}function I(L){let T=q,_=new T0,w=new S,B=0,b=L===!0?H:$,C=L===!0?1:-1;for(let A=1;A<=Z;A++)G.push(0,D*C,0),E.push(0,C,0),R.push(0.5,0.5),q++;let z=q;for(let A=0;A<=Z;A++){let p=A/Z*X+Y,l=Math.cos(p),o=Math.sin(p);w.x=b*o,w.y=D*C,w.z=b*l,G.push(w.x,w.y,w.z),E.push(0,C,0),_.x=l*0.5+0.5,_.y=o*0.5*C+0.5,R.push(_.x,_.y),q++}for(let A=0;A<Z;A++){let x=T+A,p=z+A;if(L===!0)U.push(p,p+1,x);else U.push(p+1,p,x);B+=3}K.addGroup(F,B,L===!0?1:2),F+=B}}copy(H){return super.copy(H),this.parameters=Object.assign({},H.parameters),this}static fromJSON(H){return new a8(H.radiusTop,H.radiusBottom,H.height,H.radialSegments,H.heightSegments,H.openEnded,H.thetaStart,H.thetaLength)}}class UH extends C8{constructor(H=1,$=1,J=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:H,height:$,widthSegments:J,heightSegments:Z};let W=H/2,Q=$/2,Y=Math.floor(J),X=Math.floor(Z),K=Y+1,U=X+1,G=H/Y,E=$/X,R=[],q=[],O=[],D=[];for(let F=0;F<U;F++){let N=F*E-Q;for(let I=0;I<K;I++){let L=I*G-W;q.push(L,-N,0),O.push(0,0,1),D.push(I/Y),D.push(1-F/X)}}for(let F=0;F<X;F++)for(let N=0;N<Y;N++){let I=N+K*F,L=N+K*(F+1),T=N+1+K*(F+1),_=N+1+K*F;R.push(I,L,_),R.push(L,T,_)}this.setIndex(R),this.setAttribute("position",new Y8(q,3)),this.setAttribute("normal",new Y8(O,3)),this.setAttribute("uv",new Y8(D,2))}copy(H){return super.copy(H),this.parameters=Object.assign({},H.parameters),this}static fromJSON(H){return new UH(H.width,H.height,H.widthSegments,H.heightSegments)}}class r8 extends C8{constructor(H=1,$=32,J=16,Z=0,W=Math.PI*2,Q=0,Y=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:H,widthSegments:$,heightSegments:J,phiStart:Z,phiLength:W,thetaStart:Q,thetaLength:Y},$=Math.max(3,Math.floor($)),J=Math.max(2,Math.floor(J));let X=Math.min(Q+Y,Math.PI),K=0,U=[],G=new S,E=new S,R=[],q=[],O=[],D=[];for(let F=0;F<=J;F++){let N=[],I=F/J,L=0;if(F===0&&Q===0)L=0.5/$;else if(F===J&&X===Math.PI)L=-0.5/$;for(let T=0;T<=$;T++){let _=T/$;G.x=-H*Math.cos(Z+_*W)*Math.sin(Q+I*Y),G.y=H*Math.cos(Q+I*Y),G.z=H*Math.sin(Z+_*W)*Math.sin(Q+I*Y),q.push(G.x,G.y,G.z),E.copy(G).normalize(),O.push(E.x,E.y,E.z),D.push(_+L,1-I),N.push(K++)}U.push(N)}for(let F=0;F<J;F++)for(let N=0;N<$;N++){let I=U[F][N+1],L=U[F][N],T=U[F+1][N],_=U[F+1][N+1];if(F!==0||Q>0)R.push(I,L,_);if(F!==J-1||X<Math.PI)R.push(L,T,_)}this.setIndex(R),this.setAttribute("position",new Y8(q,3)),this.setAttribute("normal",new Y8(O,3)),this.setAttribute("uv",new Y8(D,2))}copy(H){return super.copy(H),this.parameters=Object.assign({},H.parameters),this}static fromJSON(H){return new r8(H.radius,H.widthSegments,H.heightSegments,H.phiStart,H.phiLength,H.thetaStart,H.thetaLength)}}class _7 extends C8{constructor(H=1,$=0.4,J=12,Z=48,W=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:H,tube:$,radialSegments:J,tubularSegments:Z,arc:W},J=Math.floor(J),Z=Math.floor(Z);let Q=[],Y=[],X=[],K=[],U=new S,G=new S,E=new S;for(let R=0;R<=J;R++)for(let q=0;q<=Z;q++){let O=q/Z*W,D=R/J*Math.PI*2;G.x=(H+$*Math.cos(D))*Math.cos(O),G.y=(H+$*Math.cos(D))*Math.sin(O),G.z=$*Math.sin(D),Y.push(G.x,G.y,G.z),U.x=H*Math.cos(O),U.y=H*Math.sin(O),E.subVectors(G,U).normalize(),X.push(E.x,E.y,E.z),K.push(q/Z),K.push(R/J)}for(let R=1;R<=J;R++)for(let q=1;q<=Z;q++){let O=(Z+1)*R+q-1,D=(Z+1)*(R-1)+q-1,F=(Z+1)*(R-1)+q,N=(Z+1)*R+q;Q.push(O,D,N),Q.push(D,F,N)}this.setIndex(Q),this.setAttribute("position",new Y8(Y,3)),this.setAttribute("normal",new Y8(X,3)),this.setAttribute("uv",new Y8(K,2))}copy(H){return super.copy(H),this.parameters=Object.assign({},H.parameters),this}static fromJSON(H){return new _7(H.radius,H.tube,H.radialSegments,H.tubularSegments,H.arc)}}class S8 extends J6{constructor(H){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new A0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new A0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new T0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new m8,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(H)}copy(H){return super.copy(H),this.defines={STANDARD:""},this.color.copy(H.color),this.roughness=H.roughness,this.metalness=H.metalness,this.map=H.map,this.lightMap=H.lightMap,this.lightMapIntensity=H.lightMapIntensity,this.aoMap=H.aoMap,this.aoMapIntensity=H.aoMapIntensity,this.emissive.copy(H.emissive),this.emissiveMap=H.emissiveMap,this.emissiveIntensity=H.emissiveIntensity,this.bumpMap=H.bumpMap,this.bumpScale=H.bumpScale,this.normalMap=H.normalMap,this.normalMapType=H.normalMapType,this.normalScale.copy(H.normalScale),this.displacementMap=H.displacementMap,this.displacementScale=H.displacementScale,this.displacementBias=H.displacementBias,this.roughnessMap=H.roughnessMap,this.metalnessMap=H.metalnessMap,this.alphaMap=H.alphaMap,this.envMap=H.envMap,this.envMapRotation.copy(H.envMapRotation),this.envMapIntensity=H.envMapIntensity,this.wireframe=H.wireframe,this.wireframeLinewidth=H.wireframeLinewidth,this.wireframeLinecap=H.wireframeLinecap,this.wireframeLinejoin=H.wireframeLinejoin,this.flatShading=H.flatShading,this.fog=H.fog,this}}class a6 extends J6{constructor(H){super();this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new A0(16777215),this.specular=new A0(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new A0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new T0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new m8,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(H)}copy(H){return super.copy(H),this.color.copy(H.color),this.specular.copy(H.specular),this.shininess=H.shininess,this.map=H.map,this.lightMap=H.lightMap,this.lightMapIntensity=H.lightMapIntensity,this.aoMap=H.aoMap,this.aoMapIntensity=H.aoMapIntensity,this.emissive.copy(H.emissive),this.emissiveMap=H.emissiveMap,this.emissiveIntensity=H.emissiveIntensity,this.bumpMap=H.bumpMap,this.bumpScale=H.bumpScale,this.normalMap=H.normalMap,this.normalMapType=H.normalMapType,this.normalScale.copy(H.normalScale),this.displacementMap=H.displacementMap,this.displacementScale=H.displacementScale,this.displacementBias=H.displacementBias,this.specularMap=H.specularMap,this.alphaMap=H.alphaMap,this.envMap=H.envMap,this.envMapRotation.copy(H.envMapRotation),this.combine=H.combine,this.reflectivity=H.reflectivity,this.refractionRatio=H.refractionRatio,this.wireframe=H.wireframe,this.wireframeLinewidth=H.wireframeLinewidth,this.wireframeLinecap=H.wireframeLinecap,this.wireframeLinejoin=H.wireframeLinejoin,this.flatShading=H.flatShading,this.fog=H.fog,this}}class RJ extends J6{constructor(H){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(H)}copy(H){return super.copy(H),this.depthPacking=H.depthPacking,this.map=H.map,this.alphaMap=H.alphaMap,this.displacementMap=H.displacementMap,this.displacementScale=H.displacementScale,this.displacementBias=H.displacementBias,this.wireframe=H.wireframe,this.wireframeLinewidth=H.wireframeLinewidth,this}}class FJ extends J6{constructor(H){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(H)}copy(H){return super.copy(H),this.map=H.map,this.alphaMap=H.alphaMap,this.displacementMap=H.displacementMap,this.displacementScale=H.displacementScale,this.displacementBias=H.displacementBias,this}}function dH(H,$,J){if(!H||!J&&H.constructor===$)return H;if(typeof $.BYTES_PER_ELEMENT==="number")return new $(H);return Array.prototype.slice.call(H)}function yY(H){return ArrayBuffer.isView(H)&&!(H instanceof DataView)}class j7{constructor(H,$,J,Z){this.parameterPositions=H,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new $.constructor(J),this.sampleValues=$,this.valueSize=J,this.settings=null,this.DefaultSettings_={}}evaluate(H){let $=this.parameterPositions,J=this._cachedIndex,Z=$[J],W=$[J-1];J:{H:{let Q;$:{Z:if(!(H<Z)){for(let Y=J+2;;){if(Z===void 0){if(H<W)break Z;return J=$.length,this._cachedIndex=J,this.copySampleValue_(J-1)}if(J===Y)break;if(W=Z,Z=$[++J],H<Z)break H}Q=$.length;break $}if(!(H>=W)){let Y=$[1];if(H<Y)J=2,W=Y;for(let X=J-2;;){if(W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(J===X)break;if(Z=W,W=$[--J-1],H>=W)break H}Q=J,J=0;break $}break J}while(J<Q){let Y=J+Q>>>1;if(H<$[Y])Q=Y;else J=Y+1}if(Z=$[J],W=$[J-1],W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return J=$.length,this._cachedIndex=J,this.copySampleValue_(J-1)}this._cachedIndex=J,this.intervalChanged_(J,W,Z)}return this.interpolate_(J,W,H,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(H){let $=this.resultBuffer,J=this.sampleValues,Z=this.valueSize,W=H*Z;for(let Q=0;Q!==Z;++Q)$[Q]=J[W+Q];return $}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class NJ extends j7{constructor(H,$,J,Z){super(H,$,J,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(H,$,J){let Z=this.parameterPositions,W=H-2,Q=H+1,Y=Z[W],X=Z[Q];if(Y===void 0)switch(this.getSettings_().endingStart){case 2401:W=H,Y=2*$-J;break;case 2402:W=Z.length-2,Y=$+Z[W]-Z[W+1];break;default:W=H,Y=J}if(X===void 0)switch(this.getSettings_().endingEnd){case 2401:Q=H,X=2*J-$;break;case 2402:Q=1,X=J+Z[1]-Z[0];break;default:Q=H-1,X=$}let K=(J-$)*0.5,U=this.valueSize;this._weightPrev=K/($-Y),this._weightNext=K/(X-J),this._offsetPrev=W*U,this._offsetNext=Q*U}interpolate_(H,$,J,Z){let W=this.resultBuffer,Q=this.sampleValues,Y=this.valueSize,X=H*Y,K=X-Y,U=this._offsetPrev,G=this._offsetNext,E=this._weightPrev,R=this._weightNext,q=(J-$)/(Z-$),O=q*q,D=O*q,F=-E*D+2*E*O-E*q,N=(1+E)*D+(-1.5-2*E)*O+(-0.5+E)*q+1,I=(-1-R)*D+(1.5+R)*O+0.5*q,L=R*D-R*O;for(let T=0;T!==Y;++T)W[T]=F*Q[U+T]+N*Q[K+T]+I*Q[X+T]+L*Q[G+T];return W}}class qJ extends j7{constructor(H,$,J,Z){super(H,$,J,Z)}interpolate_(H,$,J,Z){let W=this.resultBuffer,Q=this.sampleValues,Y=this.valueSize,X=H*Y,K=X-Y,U=(J-$)/(Z-$),G=1-U;for(let E=0;E!==Y;++E)W[E]=Q[K+E]*G+Q[X+E]*U;return W}}class OJ extends j7{constructor(H,$,J,Z){super(H,$,J,Z)}interpolate_(H){return this.copySampleValue_(H-1)}}class t8{constructor(H,$,J,Z){if(H===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if($===void 0||$.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+H);this.name=H,this.times=dH($,this.TimeBufferType),this.values=dH(J,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(H){let $=H.constructor,J;if($.toJSON!==this.toJSON)J=$.toJSON(H);else{J={name:H.name,times:dH(H.times,Array),values:dH(H.values,Array)};let Z=H.getInterpolation();if(Z!==H.DefaultInterpolation)J.interpolation=Z}return J.type=H.ValueTypeName,J}InterpolantFactoryMethodDiscrete(H){return new OJ(this.times,this.values,this.getValueSize(),H)}InterpolantFactoryMethodLinear(H){return new qJ(this.times,this.values,this.getValueSize(),H)}InterpolantFactoryMethodSmooth(H){return new NJ(this.times,this.values,this.getValueSize(),H)}setInterpolation(H){let $;switch(H){case 2300:$=this.InterpolantFactoryMethodDiscrete;break;case 2301:$=this.InterpolantFactoryMethodLinear;break;case 2302:$=this.InterpolantFactoryMethodSmooth;break}if($===void 0){let J="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(H!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(J);return console.warn("THREE.KeyframeTrack:",J),this}return this.createInterpolant=$,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(H){if(H!==0){let $=this.times;for(let J=0,Z=$.length;J!==Z;++J)$[J]+=H}return this}scale(H){if(H!==1){let $=this.times;for(let J=0,Z=$.length;J!==Z;++J)$[J]*=H}return this}trim(H,$){let J=this.times,Z=J.length,W=0,Q=Z-1;while(W!==Z&&J[W]<H)++W;while(Q!==-1&&J[Q]>$)--Q;if(++Q,W!==0||Q!==Z){if(W>=Q)Q=Math.max(Q,1),W=Q-1;let Y=this.getValueSize();this.times=J.slice(W,Q),this.values=this.values.slice(W*Y,Q*Y)}return this}validate(){let H=!0,$=this.getValueSize();if($-Math.floor($)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),H=!1;let J=this.times,Z=this.values,W=J.length;if(W===0)console.error("THREE.KeyframeTrack: Track is empty.",this),H=!1;let Q=null;for(let Y=0;Y!==W;Y++){let X=J[Y];if(typeof X==="number"&&isNaN(X)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,Y,X),H=!1;break}if(Q!==null&&Q>X){console.error("THREE.KeyframeTrack: Out of order keys.",this,Y,X,Q),H=!1;break}Q=X}if(Z!==void 0){if(yY(Z))for(let Y=0,X=Z.length;Y!==X;++Y){let K=Z[Y];if(isNaN(K)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,Y,K),H=!1;break}}}return H}optimize(){let H=this.times.slice(),$=this.values.slice(),J=this.getValueSize(),Z=this.getInterpolation()===2302,W=H.length-1,Q=1;for(let Y=1;Y<W;++Y){let X=!1,K=H[Y],U=H[Y+1];if(K!==U&&(Y!==1||K!==H[0]))if(!Z){let G=Y*J,E=G-J,R=G+J;for(let q=0;q!==J;++q){let O=$[G+q];if(O!==$[E+q]||O!==$[R+q]){X=!0;break}}}else X=!0;if(X){if(Y!==Q){H[Q]=H[Y];let G=Y*J,E=Q*J;for(let R=0;R!==J;++R)$[E+R]=$[G+R]}++Q}}if(W>0){H[Q]=H[W];for(let Y=W*J,X=Q*J,K=0;K!==J;++K)$[X+K]=$[Y+K];++Q}if(Q!==H.length)this.times=H.slice(0,Q),this.values=$.slice(0,Q*J);else this.times=H,this.values=$;return this}clone(){let H=this.times.slice(),$=this.values.slice(),Z=new this.constructor(this.name,H,$);return Z.createInterpolant=this.createInterpolant,Z}}t8.prototype.TimeBufferType=Float32Array;t8.prototype.ValueBufferType=Float32Array;t8.prototype.DefaultInterpolation=2301;class r6 extends t8{constructor(H,$,J){super(H,$,J)}}r6.prototype.ValueTypeName="bool";r6.prototype.ValueBufferType=Array;r6.prototype.DefaultInterpolation=2300;r6.prototype.InterpolantFactoryMethodLinear=void 0;r6.prototype.InterpolantFactoryMethodSmooth=void 0;class DJ extends t8{}DJ.prototype.ValueTypeName="color";class MJ extends t8{}MJ.prototype.ValueTypeName="number";class kJ extends j7{constructor(H,$,J,Z){super(H,$,J,Z)}interpolate_(H,$,J,Z){let W=this.resultBuffer,Q=this.sampleValues,Y=this.valueSize,X=(J-$)/(Z-$),K=H*Y;for(let U=K+Y;K!==U;K+=4)v8.slerpFlat(W,0,Q,K-Y,Q,K,X);return W}}class C9 extends t8{InterpolantFactoryMethodLinear(H){return new kJ(this.times,this.values,this.getValueSize(),H)}}C9.prototype.ValueTypeName="quaternion";C9.prototype.InterpolantFactoryMethodSmooth=void 0;class t6 extends t8{constructor(H,$,J){super(H,$,J)}}t6.prototype.ValueTypeName="string";t6.prototype.ValueBufferType=Array;t6.prototype.DefaultInterpolation=2300;t6.prototype.InterpolantFactoryMethodLinear=void 0;t6.prototype.InterpolantFactoryMethodSmooth=void 0;class LJ extends t8{}LJ.prototype.ValueTypeName="vector";var O$={enabled:!1,files:{},add:function(H,$){if(this.enabled===!1)return;this.files[H]=$},get:function(H){if(this.enabled===!1)return;return this.files[H]},remove:function(H){delete this.files[H]},clear:function(){this.files={}}};class CJ{constructor(H,$,J){let Z=this,W=!1,Q=0,Y=0,X=void 0,K=[];this.onStart=void 0,this.onLoad=H,this.onProgress=$,this.onError=J,this.itemStart=function(U){if(Y++,W===!1){if(Z.onStart!==void 0)Z.onStart(U,Q,Y)}W=!0},this.itemEnd=function(U){if(Q++,Z.onProgress!==void 0)Z.onProgress(U,Q,Y);if(Q===Y){if(W=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(U){if(Z.onError!==void 0)Z.onError(U)},this.resolveURL=function(U){if(X)return X(U);return U},this.setURLModifier=function(U){return X=U,this},this.addHandler=function(U,G){return K.push(U,G),this},this.removeHandler=function(U){let G=K.indexOf(U);if(G!==-1)K.splice(G,2);return this},this.getHandler=function(U){for(let G=0,E=K.length;G<E;G+=2){let R=K[G],q=K[G+1];if(R.global)R.lastIndex=0;if(R.test(U))return q}return null}}}var lW=new CJ;class GH{constructor(H){this.manager=H!==void 0?H:lW,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(H,$){let J=this;return new Promise(function(Z,W){J.load(H,Z,$,W)})}parse(){}setCrossOrigin(H){return this.crossOrigin=H,this}setWithCredentials(H){return this.withCredentials=H,this}setPath(H){return this.path=H,this}setResourcePath(H){return this.resourcePath=H,this}setRequestHeader(H){return this.requestHeader=H,this}}GH.DEFAULT_MATERIAL_NAME="__DEFAULT";class zJ extends GH{constructor(H){super(H)}load(H,$,J,Z){if(this.path!==void 0)H=this.path+H;H=this.manager.resolveURL(H);let W=this,Q=O$.get(H);if(Q!==void 0)return W.manager.itemStart(H),setTimeout(function(){if($)$(Q);W.manager.itemEnd(H)},0),Q;let Y=C7("img");function X(){if(U(),O$.add(H,this),$)$(this);W.manager.itemEnd(H)}function K(G){if(U(),Z)Z(G);W.manager.itemError(H),W.manager.itemEnd(H)}function U(){Y.removeEventListener("load",X,!1),Y.removeEventListener("error",K,!1)}if(Y.addEventListener("load",X,!1),Y.addEventListener("error",K,!1),H.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)Y.crossOrigin=this.crossOrigin}return W.manager.itemStart(H),Y.src=H,Y}}class z9 extends GH{constructor(H){super(H)}load(H,$,J,Z){let W=new L8,Q=new zJ(this.manager);return Q.setCrossOrigin(this.crossOrigin),Q.setPath(this.path),Q.load(H,function(Y){if(W.image=Y,W.needsUpdate=!0,$!==void 0)$(W)},J,Z),W}}class EH extends F8{constructor(H,$=1){super();this.isLight=!0,this.type="Light",this.color=new A0(H),this.intensity=$}dispose(){}copy(H,$){return super.copy(H,$),this.color.copy(H.color),this.intensity=H.intensity,this}toJSON(H){let $=super.toJSON(H);if($.object.color=this.color.getHex(),$.object.intensity=this.intensity,this.groundColor!==void 0)$.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)$.object.distance=this.distance;if(this.angle!==void 0)$.object.angle=this.angle;if(this.decay!==void 0)$.object.decay=this.decay;if(this.penumbra!==void 0)$.object.penumbra=this.penumbra;if(this.shadow!==void 0)$.object.shadow=this.shadow.toJSON();if(this.target!==void 0)$.object.target=this.target.uuid;return $}}var F$=new W8,AZ=new S,SZ=new S;class wJ{constructor(H){this.camera=H,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new T0(512,512),this.map=null,this.mapPass=null,this.matrix=new W8,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new YH,this._frameExtents=new T0(1,1),this._viewportCount=1,this._viewports=[new J8(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(H){let $=this.camera,J=this.matrix;AZ.setFromMatrixPosition(H.matrixWorld),$.position.copy(AZ),SZ.setFromMatrixPosition(H.target.matrixWorld),$.lookAt(SZ),$.updateMatrixWorld(),F$.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),this._frustum.setFromProjectionMatrix(F$),J.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),J.multiply(F$)}getViewport(H){return this._viewports[H]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(H){return this.camera=H.camera.clone(),this.intensity=H.intensity,this.bias=H.bias,this.radius=H.radius,this.mapSize.copy(H.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let H={};if(this.intensity!==1)H.intensity=this.intensity;if(this.bias!==0)H.bias=this.bias;if(this.normalBias!==0)H.normalBias=this.normalBias;if(this.radius!==1)H.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)H.mapSize=this.mapSize.toArray();return H.camera=this.camera.toJSON(!1).object,delete H.camera.matrix,H}}var _Z=new W8,i7=new S,N$=new S;class mW extends wJ{constructor(){super(new I8(90,1,0.5,500));this.isPointLightShadow=!0,this._frameExtents=new T0(4,2),this._viewportCount=6,this._viewports=[new J8(2,1,1,1),new J8(0,1,1,1),new J8(3,1,1,1),new J8(1,1,1,1),new J8(3,0,1,1),new J8(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(H,$=0){let J=this.camera,Z=this.matrix,W=H.distance||J.far;if(W!==J.far)J.far=W,J.updateProjectionMatrix();i7.setFromMatrixPosition(H.matrixWorld),J.position.copy(i7),N$.copy(J.position),N$.add(this._cubeDirections[$]),J.up.copy(this._cubeUps[$]),J.lookAt(N$),J.updateMatrixWorld(),Z.makeTranslation(-i7.x,-i7.y,-i7.z),_Z.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_Z)}}class RH extends EH{constructor(H,$,J=0,Z=2){super(H,$);this.isPointLight=!0,this.type="PointLight",this.distance=J,this.decay=Z,this.shadow=new mW}get power(){return this.intensity*4*Math.PI}set power(H){this.intensity=H/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(H,$){return super.copy(H,$),this.distance=H.distance,this.decay=H.decay,this.shadow=H.shadow.clone(),this}}class w9 extends q9{constructor(H=-1,$=1,J=1,Z=-1,W=0.1,Q=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=H,this.right=$,this.top=J,this.bottom=Z,this.near=W,this.far=Q,this.updateProjectionMatrix()}copy(H,$){return super.copy(H,$),this.left=H.left,this.right=H.right,this.top=H.top,this.bottom=H.bottom,this.near=H.near,this.far=H.far,this.zoom=H.zoom,this.view=H.view===null?null:Object.assign({},H.view),this}setViewOffset(H,$,J,Z,W,Q){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=H,this.view.fullHeight=$,this.view.offsetX=J,this.view.offsetY=Z,this.view.width=W,this.view.height=Q,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let H=(this.right-this.left)/(2*this.zoom),$=(this.top-this.bottom)/(2*this.zoom),J=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,W=J-H,Q=J+H,Y=Z+$,X=Z-$;if(this.view!==null&&this.view.enabled){let K=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;W+=K*this.view.offsetX,Q=W+K*this.view.width,Y-=U*this.view.offsetY,X=Y-U*this.view.height}this.projectionMatrix.makeOrthographic(W,Q,Y,X,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(H){let $=super.toJSON(H);if($.object.zoom=this.zoom,$.object.left=this.left,$.object.right=this.right,$.object.top=this.top,$.object.bottom=this.bottom,$.object.near=this.near,$.object.far=this.far,this.view!==null)$.object.view=Object.assign({},this.view);return $}}class dW extends wJ{constructor(){super(new w9(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class I9 extends EH{constructor(H,$){super(H,$);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(F8.DEFAULT_UP),this.updateMatrix(),this.target=new F8,this.shadow=new dW}dispose(){this.shadow.dispose()}copy(H){return super.copy(H),this.target=H.target.clone(),this.shadow=H.shadow.clone(),this}}class V9 extends EH{constructor(H,$){super(H,$);this.isAmbientLight=!0,this.type="AmbientLight"}}class IJ extends I8{constructor(H=[]){super();this.isArrayCamera=!0,this.cameras=H}}class B9{constructor(H=!0){this.autoStart=H,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=jZ(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let H=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let $=jZ();H=($-this.oldTime)/1000,this.oldTime=$,this.elapsedTime+=H}return H}}function jZ(){return performance.now()}var VJ="\\[\\]\\.:\\/",vY=new RegExp("["+VJ+"]","g"),BJ="[^"+VJ+"]",bY="[^"+VJ.replace("\\.","")+"]",gY=/((?:WC+[\/:])*)/.source.replace("WC",BJ),pY=/(WCOD+)?/.source.replace("WCOD",bY),uY=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",BJ),lY=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",BJ),mY=new RegExp("^"+gY+pY+uY+lY+"$"),dY=["material","materials","bones","map"];class cW{constructor(H,$,J){let Z=J||$8.parseTrackName($);this._targetGroup=H,this._bindings=H.subscribe_($,Z)}getValue(H,$){this.bind();let J=this._targetGroup.nCachedObjects_,Z=this._bindings[J];if(Z!==void 0)Z.getValue(H,$)}setValue(H,$){let J=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,W=J.length;Z!==W;++Z)J[Z].setValue(H,$)}bind(){let H=this._bindings;for(let $=this._targetGroup.nCachedObjects_,J=H.length;$!==J;++$)H[$].bind()}unbind(){let H=this._bindings;for(let $=this._targetGroup.nCachedObjects_,J=H.length;$!==J;++$)H[$].unbind()}}class $8{constructor(H,$,J){this.path=$,this.parsedPath=J||$8.parseTrackName($),this.node=$8.findNode(H,this.parsedPath.nodeName),this.rootNode=H,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(H,$,J){if(!(H&&H.isAnimationObjectGroup))return new $8(H,$,J);else return new $8.Composite(H,$,J)}static sanitizeNodeName(H){return H.replace(/\s/g,"_").replace(vY,"")}static parseTrackName(H){let $=mY.exec(H);if($===null)throw Error("PropertyBinding: Cannot parse trackName: "+H);let J={nodeName:$[2],objectName:$[3],objectIndex:$[4],propertyName:$[5],propertyIndex:$[6]},Z=J.nodeName&&J.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let W=J.nodeName.substring(Z+1);if(dY.indexOf(W)!==-1)J.nodeName=J.nodeName.substring(0,Z),J.objectName=W}if(J.propertyName===null||J.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+H);return J}static findNode(H,$){if($===void 0||$===""||$==="."||$===-1||$===H.name||$===H.uuid)return H;if(H.skeleton){let J=H.skeleton.getBoneByName($);if(J!==void 0)return J}if(H.children){let J=function(W){for(let Q=0;Q<W.length;Q++){let Y=W[Q];if(Y.name===$||Y.uuid===$)return Y;let X=J(Y.children);if(X)return X}return null},Z=J(H.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(H,$){H[$]=this.targetObject[this.propertyName]}_getValue_array(H,$){let J=this.resolvedProperty;for(let Z=0,W=J.length;Z!==W;++Z)H[$++]=J[Z]}_getValue_arrayElement(H,$){H[$]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(H,$){this.resolvedProperty.toArray(H,$)}_setValue_direct(H,$){this.targetObject[this.propertyName]=H[$]}_setValue_direct_setNeedsUpdate(H,$){this.targetObject[this.propertyName]=H[$],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(H,$){this.targetObject[this.propertyName]=H[$],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(H,$){let J=this.resolvedProperty;for(let Z=0,W=J.length;Z!==W;++Z)J[Z]=H[$++]}_setValue_array_setNeedsUpdate(H,$){let J=this.resolvedProperty;for(let Z=0,W=J.length;Z!==W;++Z)J[Z]=H[$++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(H,$){let J=this.resolvedProperty;for(let Z=0,W=J.length;Z!==W;++Z)J[Z]=H[$++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(H,$){this.resolvedProperty[this.propertyIndex]=H[$]}_setValue_arrayElement_setNeedsUpdate(H,$){this.resolvedProperty[this.propertyIndex]=H[$],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(H,$){this.resolvedProperty[this.propertyIndex]=H[$],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(H,$){this.resolvedProperty.fromArray(H,$)}_setValue_fromArray_setNeedsUpdate(H,$){this.resolvedProperty.fromArray(H,$),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(H,$){this.resolvedProperty.fromArray(H,$),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(H,$){this.bind(),this.getValue(H,$)}_setValue_unbound(H,$){this.bind(),this.setValue(H,$)}bind(){let H=this.node,$=this.parsedPath,J=$.objectName,Z=$.propertyName,W=$.propertyIndex;if(!H)H=$8.findNode(this.rootNode,$.nodeName),this.node=H;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!H){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(J){let K=$.objectIndex;switch(J){case"materials":if(!H.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!H.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}H=H.material.materials;break;case"bones":if(!H.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}H=H.skeleton.bones;for(let U=0;U<H.length;U++)if(H[U].name===K){K=U;break}break;case"map":if("map"in H){H=H.map;break}if(!H.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!H.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}H=H.material.map;break;default:if(H[J]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}H=H[J]}if(K!==void 0){if(H[K]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,H);return}H=H[K]}}let Q=H[Z];if(Q===void 0){let K=$.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+K+"."+Z+" but it wasn't found.",H);return}let Y=this.Versioning.None;if(this.targetObject=H,H.isMaterial===!0)Y=this.Versioning.NeedsUpdate;else if(H.isObject3D===!0)Y=this.Versioning.MatrixWorldNeedsUpdate;let X=this.BindingType.Direct;if(W!==void 0){if(Z==="morphTargetInfluences"){if(!H.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!H.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(H.morphTargetDictionary[W]!==void 0)W=H.morphTargetDictionary[W]}X=this.BindingType.ArrayElement,this.resolvedProperty=Q,this.propertyIndex=W}else if(Q.fromArray!==void 0&&Q.toArray!==void 0)X=this.BindingType.HasFromToArray,this.resolvedProperty=Q;else if(Array.isArray(Q))X=this.BindingType.EntireArray,this.resolvedProperty=Q;else this.propertyName=Z;this.getValue=this.GetterByBindingType[X],this.setValue=this.SetterByBindingTypeAndVersioning[X][Y]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}$8.Composite=cW;$8.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$8.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$8.prototype.GetterByBindingType=[$8.prototype._getValue_direct,$8.prototype._getValue_array,$8.prototype._getValue_arrayElement,$8.prototype._getValue_toArray];$8.prototype.SetterByBindingTypeAndVersioning=[[$8.prototype._setValue_direct,$8.prototype._setValue_direct_setNeedsUpdate,$8.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$8.prototype._setValue_array,$8.prototype._setValue_array_setNeedsUpdate,$8.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$8.prototype._setValue_arrayElement,$8.prototype._setValue_arrayElement_setNeedsUpdate,$8.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$8.prototype._setValue_fromArray,$8.prototype._setValue_fromArray_setNeedsUpdate,$8.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var C5=new Float32Array(1);class FH{constructor(H=1,$=0,J=0){return this.radius=H,this.phi=$,this.theta=J,this}set(H,$,J){return this.radius=H,this.phi=$,this.theta=J,this}copy(H){return this.radius=H.radius,this.phi=H.phi,this.theta=H.theta,this}makeSafe(){return this.phi=d0(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(H){return this.setFromCartesianCoords(H.x,H.y,H.z)}setFromCartesianCoords(H,$,J){if(this.radius=Math.sqrt(H*H+$*$+J*J),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(H,J),this.phi=Math.acos(d0($/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class P9 extends q6{constructor(H,$=null){super();this.object=H,this.domElement=$,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function PJ(H,$,J,Z){let W=cY(Z);switch(J){case 1021:return H*$;case 1024:return H*$;case 1025:return H*$*2;case 1028:return H*$/W.components*W.byteLength;case 1029:return H*$/W.components*W.byteLength;case 1030:return H*$*2/W.components*W.byteLength;case 1031:return H*$*2/W.components*W.byteLength;case 1022:return H*$*3/W.components*W.byteLength;case 1023:return H*$*4/W.components*W.byteLength;case 1033:return H*$*4/W.components*W.byteLength;case 33776:case 33777:return Math.floor((H+3)/4)*Math.floor(($+3)/4)*8;case 33778:case 33779:return Math.floor((H+3)/4)*Math.floor(($+3)/4)*16;case 35841:case 35843:return Math.max(H,16)*Math.max($,8)/4;case 35840:case 35842:return Math.max(H,8)*Math.max($,8)/2;case 36196:case 37492:return Math.floor((H+3)/4)*Math.floor(($+3)/4)*8;case 37496:return Math.floor((H+3)/4)*Math.floor(($+3)/4)*16;case 37808:return Math.floor((H+3)/4)*Math.floor(($+3)/4)*16;case 37809:return Math.floor((H+4)/5)*Math.floor(($+3)/4)*16;case 37810:return Math.floor((H+4)/5)*Math.floor(($+4)/5)*16;case 37811:return Math.floor((H+5)/6)*Math.floor(($+4)/5)*16;case 37812:return Math.floor((H+5)/6)*Math.floor(($+5)/6)*16;case 37813:return Math.floor((H+7)/8)*Math.floor(($+4)/5)*16;case 37814:return Math.floor((H+7)/8)*Math.floor(($+5)/6)*16;case 37815:return Math.floor((H+7)/8)*Math.floor(($+7)/8)*16;case 37816:return Math.floor((H+9)/10)*Math.floor(($+4)/5)*16;case 37817:return Math.floor((H+9)/10)*Math.floor(($+5)/6)*16;case 37818:return Math.floor((H+9)/10)*Math.floor(($+7)/8)*16;case 37819:return Math.floor((H+9)/10)*Math.floor(($+9)/10)*16;case 37820:return Math.floor((H+11)/12)*Math.floor(($+9)/10)*16;case 37821:return Math.floor((H+11)/12)*Math.floor(($+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(H/4)*Math.ceil($/4)*16;case 36283:case 36284:return Math.ceil(H/4)*Math.ceil($/4)*8;case 36285:case 36286:return Math.ceil(H/4)*Math.ceil($/4)*16}throw Error(`Unable to determine texture byte length for ${J} format.`)}function cY(H){switch(H){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${H}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"172"}}));if(typeof window<"u")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="172";function qQ(){let H=null,$=!1,J=null,Z=null;function W(Q,Y){J(Q,Y),Z=H.requestAnimationFrame(W)}return{start:function(){if($===!0)return;if(J===null)return;Z=H.requestAnimationFrame(W),$=!0},stop:function(){H.cancelAnimationFrame(Z),$=!1},setAnimationLoop:function(Q){J=Q},setContext:function(Q){H=Q}}}function nY(H){let $=new WeakMap;function J(X,K){let{array:U,usage:G}=X,E=U.byteLength,R=H.createBuffer();H.bindBuffer(K,R),H.bufferData(K,U,G),X.onUploadCallback();let q;if(U instanceof Float32Array)q=H.FLOAT;else if(U instanceof Uint16Array)if(X.isFloat16BufferAttribute)q=H.HALF_FLOAT;else q=H.UNSIGNED_SHORT;else if(U instanceof Int16Array)q=H.SHORT;else if(U instanceof Uint32Array)q=H.UNSIGNED_INT;else if(U instanceof Int32Array)q=H.INT;else if(U instanceof Int8Array)q=H.BYTE;else if(U instanceof Uint8Array)q=H.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)q=H.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:R,type:q,bytesPerElement:U.BYTES_PER_ELEMENT,version:X.version,size:E}}function Z(X,K,U){let{array:G,updateRanges:E}=K;if(H.bindBuffer(U,X),E.length===0)H.bufferSubData(U,0,G);else{E.sort((q,O)=>q.start-O.start);let R=0;for(let q=1;q<E.length;q++){let O=E[R],D=E[q];if(D.start<=O.start+O.count+1)O.count=Math.max(O.count,D.start+D.count-O.start);else++R,E[R]=D}E.length=R+1;for(let q=0,O=E.length;q<O;q++){let D=E[q];H.bufferSubData(U,D.start*G.BYTES_PER_ELEMENT,G,D.start,D.count)}K.clearUpdateRanges()}K.onUploadCallback()}function W(X){if(X.isInterleavedBufferAttribute)X=X.data;return $.get(X)}function Q(X){if(X.isInterleavedBufferAttribute)X=X.data;let K=$.get(X);if(K)H.deleteBuffer(K.buffer),$.delete(X)}function Y(X,K){if(X.isInterleavedBufferAttribute)X=X.data;if(X.isGLBufferAttribute){let G=$.get(X);if(!G||G.version<X.version)$.set(X,{buffer:X.buffer,type:X.type,bytesPerElement:X.elementSize,version:X.version});return}let U=$.get(X);if(U===void 0)$.set(X,J(X,K));else if(U.version<X.version){if(U.size!==X.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(U.buffer,X,K),U.version=X.version}}return{get:W,remove:Q,update:Y}}var sY=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iY=`#ifdef USE_ALPHAHASH
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
#endif`,oY=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,aY=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rY=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tY=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eY=`#ifdef USE_AOMAP
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
#endif`,HX=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$X=`#ifdef USE_BATCHING
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
#endif`,JX=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ZX=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,WX=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QX=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,YX=`#ifdef USE_IRIDESCENCE
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
#endif`,XX=`#ifdef USE_BUMPMAP
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
#endif`,KX=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,UX=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,GX=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,EX=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RX=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,FX=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,NX=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qX=`#if defined( USE_COLOR_ALPHA )
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
#endif`,OX=`#define PI 3.141592653589793
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
} // validated`,DX=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,MX=`vec3 transformedNormal = objectNormal;
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
#endif`,kX=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,LX=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CX=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zX=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wX="gl_FragColor = linearToOutputTexel( gl_FragColor );",IX=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,VX=`#ifdef USE_ENVMAP
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
#endif`,BX=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,PX=`#ifdef USE_ENVMAP
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
#endif`,TX=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AX=`#ifdef USE_ENVMAP
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
#endif`,SX=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_X=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jX=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fX=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hX=`#ifdef USE_GRADIENTMAP
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
}`,xX=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yX=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vX=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bX=`uniform bool receiveShadow;
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
#endif`,gX=`#ifdef USE_ENVMAP
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
#endif`,pX=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uX=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lX=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mX=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dX=`PhysicalMaterial material;
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
#endif`,cX=`struct PhysicalMaterial {
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
}`,nX=`
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
#endif`,sX=`#if defined( RE_IndirectDiffuse )
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
#endif`,iX=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oX=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aX=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rX=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tX=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eX=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HK=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$K=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,JK=`#if defined( USE_POINTS_UV )
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
#endif`,ZK=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,WK=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QK=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,YK=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,XK=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KK=`#ifdef USE_MORPHTARGETS
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
#endif`,UK=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GK=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,EK=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,RK=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FK=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NK=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qK=`#ifdef USE_NORMALMAP
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
#endif`,OK=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,DK=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,MK=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kK=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,LK=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CK=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zK=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wK=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,IK=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VK=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BK=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,PK=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,TK=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,AK=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,SK=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_K=`float getShadowMask() {
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
}`,jK=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fK=`#ifdef USE_SKINNING
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
#endif`,hK=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xK=`#ifdef USE_SKINNING
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
#endif`,yK=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vK=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bK=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gK=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pK=`#ifdef USE_TRANSMISSION
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
#endif`,uK=`#ifdef USE_TRANSMISSION
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
#endif`,lK=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mK=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dK=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cK=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,nK=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sK=`uniform sampler2D t2D;
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
}`,iK=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oK=`#ifdef ENVMAP_TYPE_CUBE
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
}`,aK=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rK=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tK=`#include <common>
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
}`,eK=`#if DEPTH_PACKING == 3200
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
}`,HU=`#define DISTANCE
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
}`,$U=`#define DISTANCE
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
}`,JU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZU=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WU=`uniform float scale;
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
}`,QU=`uniform vec3 diffuse;
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
}`,YU=`#include <common>
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
}`,XU=`uniform vec3 diffuse;
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
}`,KU=`#define LAMBERT
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
}`,UU=`#define LAMBERT
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
}`,GU=`#define MATCAP
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
}`,EU=`#define MATCAP
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
}`,RU=`#define NORMAL
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
}`,FU=`#define NORMAL
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
}`,NU=`#define PHONG
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
}`,qU=`#define PHONG
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
}`,OU=`#define STANDARD
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
}`,DU=`#define STANDARD
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
}`,MU=`#define TOON
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
}`,kU=`#define TOON
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
}`,LU=`uniform float size;
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
}`,CU=`uniform vec3 diffuse;
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
}`,zU=`#include <common>
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
}`,wU=`uniform vec3 color;
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
}`,IU=`uniform float rotation;
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
}`,VU=`uniform vec3 diffuse;
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
}`,u0={alphahash_fragment:sY,alphahash_pars_fragment:iY,alphamap_fragment:oY,alphamap_pars_fragment:aY,alphatest_fragment:rY,alphatest_pars_fragment:tY,aomap_fragment:eY,aomap_pars_fragment:HX,batching_pars_vertex:$X,batching_vertex:JX,begin_vertex:ZX,beginnormal_vertex:WX,bsdfs:QX,iridescence_fragment:YX,bumpmap_pars_fragment:XX,clipping_planes_fragment:KX,clipping_planes_pars_fragment:UX,clipping_planes_pars_vertex:GX,clipping_planes_vertex:EX,color_fragment:RX,color_pars_fragment:FX,color_pars_vertex:NX,color_vertex:qX,common:OX,cube_uv_reflection_fragment:DX,defaultnormal_vertex:MX,displacementmap_pars_vertex:kX,displacementmap_vertex:LX,emissivemap_fragment:CX,emissivemap_pars_fragment:zX,colorspace_fragment:wX,colorspace_pars_fragment:IX,envmap_fragment:VX,envmap_common_pars_fragment:BX,envmap_pars_fragment:PX,envmap_pars_vertex:TX,envmap_physical_pars_fragment:gX,envmap_vertex:AX,fog_vertex:SX,fog_pars_vertex:_X,fog_fragment:jX,fog_pars_fragment:fX,gradientmap_pars_fragment:hX,lightmap_pars_fragment:xX,lights_lambert_fragment:yX,lights_lambert_pars_fragment:vX,lights_pars_begin:bX,lights_toon_fragment:pX,lights_toon_pars_fragment:uX,lights_phong_fragment:lX,lights_phong_pars_fragment:mX,lights_physical_fragment:dX,lights_physical_pars_fragment:cX,lights_fragment_begin:nX,lights_fragment_maps:sX,lights_fragment_end:iX,logdepthbuf_fragment:oX,logdepthbuf_pars_fragment:aX,logdepthbuf_pars_vertex:rX,logdepthbuf_vertex:tX,map_fragment:eX,map_pars_fragment:HK,map_particle_fragment:$K,map_particle_pars_fragment:JK,metalnessmap_fragment:ZK,metalnessmap_pars_fragment:WK,morphinstance_vertex:QK,morphcolor_vertex:YK,morphnormal_vertex:XK,morphtarget_pars_vertex:KK,morphtarget_vertex:UK,normal_fragment_begin:GK,normal_fragment_maps:EK,normal_pars_fragment:RK,normal_pars_vertex:FK,normal_vertex:NK,normalmap_pars_fragment:qK,clearcoat_normal_fragment_begin:OK,clearcoat_normal_fragment_maps:DK,clearcoat_pars_fragment:MK,iridescence_pars_fragment:kK,opaque_fragment:LK,packing:CK,premultiplied_alpha_fragment:zK,project_vertex:wK,dithering_fragment:IK,dithering_pars_fragment:VK,roughnessmap_fragment:BK,roughnessmap_pars_fragment:PK,shadowmap_pars_fragment:TK,shadowmap_pars_vertex:AK,shadowmap_vertex:SK,shadowmask_pars_fragment:_K,skinbase_vertex:jK,skinning_pars_vertex:fK,skinning_vertex:hK,skinnormal_vertex:xK,specularmap_fragment:yK,specularmap_pars_fragment:vK,tonemapping_fragment:bK,tonemapping_pars_fragment:gK,transmission_fragment:pK,transmission_pars_fragment:uK,uv_pars_fragment:lK,uv_pars_vertex:mK,uv_vertex:dK,worldpos_vertex:cK,background_vert:nK,background_frag:sK,backgroundCube_vert:iK,backgroundCube_frag:oK,cube_vert:aK,cube_frag:rK,depth_vert:tK,depth_frag:eK,distanceRGBA_vert:HU,distanceRGBA_frag:$U,equirect_vert:JU,equirect_frag:ZU,linedashed_vert:WU,linedashed_frag:QU,meshbasic_vert:YU,meshbasic_frag:XU,meshlambert_vert:KU,meshlambert_frag:UU,meshmatcap_vert:GU,meshmatcap_frag:EU,meshnormal_vert:RU,meshnormal_frag:FU,meshphong_vert:NU,meshphong_frag:qU,meshphysical_vert:OU,meshphysical_frag:DU,meshtoon_vert:MU,meshtoon_frag:kU,points_vert:LU,points_frag:CU,shadow_vert:zU,shadow_frag:wU,sprite_vert:IU,sprite_frag:VU},Q0={common:{diffuse:{value:new A0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new y0},alphaMap:{value:null},alphaMapTransform:{value:new y0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new y0}},envmap:{envMap:{value:null},envMapRotation:{value:new y0},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new y0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new y0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new y0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new y0},normalScale:{value:new T0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new y0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new y0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new y0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new y0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new A0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new A0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new y0},alphaTest:{value:0},uvTransform:{value:new y0}},sprite:{diffuse:{value:new A0(16777215)},opacity:{value:1},center:{value:new T0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new y0},alphaMap:{value:null},alphaMapTransform:{value:new y0},alphaTest:{value:0}}},Y6={basic:{uniforms:V8([Q0.common,Q0.specularmap,Q0.envmap,Q0.aomap,Q0.lightmap,Q0.fog]),vertexShader:u0.meshbasic_vert,fragmentShader:u0.meshbasic_frag},lambert:{uniforms:V8([Q0.common,Q0.specularmap,Q0.envmap,Q0.aomap,Q0.lightmap,Q0.emissivemap,Q0.bumpmap,Q0.normalmap,Q0.displacementmap,Q0.fog,Q0.lights,{emissive:{value:new A0(0)}}]),vertexShader:u0.meshlambert_vert,fragmentShader:u0.meshlambert_frag},phong:{uniforms:V8([Q0.common,Q0.specularmap,Q0.envmap,Q0.aomap,Q0.lightmap,Q0.emissivemap,Q0.bumpmap,Q0.normalmap,Q0.displacementmap,Q0.fog,Q0.lights,{emissive:{value:new A0(0)},specular:{value:new A0(1118481)},shininess:{value:30}}]),vertexShader:u0.meshphong_vert,fragmentShader:u0.meshphong_frag},standard:{uniforms:V8([Q0.common,Q0.envmap,Q0.aomap,Q0.lightmap,Q0.emissivemap,Q0.bumpmap,Q0.normalmap,Q0.displacementmap,Q0.roughnessmap,Q0.metalnessmap,Q0.fog,Q0.lights,{emissive:{value:new A0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:u0.meshphysical_vert,fragmentShader:u0.meshphysical_frag},toon:{uniforms:V8([Q0.common,Q0.aomap,Q0.lightmap,Q0.emissivemap,Q0.bumpmap,Q0.normalmap,Q0.displacementmap,Q0.gradientmap,Q0.fog,Q0.lights,{emissive:{value:new A0(0)}}]),vertexShader:u0.meshtoon_vert,fragmentShader:u0.meshtoon_frag},matcap:{uniforms:V8([Q0.common,Q0.bumpmap,Q0.normalmap,Q0.displacementmap,Q0.fog,{matcap:{value:null}}]),vertexShader:u0.meshmatcap_vert,fragmentShader:u0.meshmatcap_frag},points:{uniforms:V8([Q0.points,Q0.fog]),vertexShader:u0.points_vert,fragmentShader:u0.points_frag},dashed:{uniforms:V8([Q0.common,Q0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:u0.linedashed_vert,fragmentShader:u0.linedashed_frag},depth:{uniforms:V8([Q0.common,Q0.displacementmap]),vertexShader:u0.depth_vert,fragmentShader:u0.depth_frag},normal:{uniforms:V8([Q0.common,Q0.bumpmap,Q0.normalmap,Q0.displacementmap,{opacity:{value:1}}]),vertexShader:u0.meshnormal_vert,fragmentShader:u0.meshnormal_frag},sprite:{uniforms:V8([Q0.sprite,Q0.fog]),vertexShader:u0.sprite_vert,fragmentShader:u0.sprite_frag},background:{uniforms:{uvTransform:{value:new y0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:u0.background_vert,fragmentShader:u0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new y0}},vertexShader:u0.backgroundCube_vert,fragmentShader:u0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:u0.cube_vert,fragmentShader:u0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:u0.equirect_vert,fragmentShader:u0.equirect_frag},distanceRGBA:{uniforms:V8([Q0.common,Q0.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:u0.distanceRGBA_vert,fragmentShader:u0.distanceRGBA_frag},shadow:{uniforms:V8([Q0.lights,Q0.fog,{color:{value:new A0(0)},opacity:{value:1}}]),vertexShader:u0.shadow_vert,fragmentShader:u0.shadow_frag}};Y6.physical={uniforms:V8([Y6.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new y0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new y0},clearcoatNormalScale:{value:new T0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new y0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new y0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new y0},sheen:{value:0},sheenColor:{value:new A0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new y0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new y0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new y0},transmissionSamplerSize:{value:new T0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new y0},attenuationDistance:{value:0},attenuationColor:{value:new A0(0)},specularColor:{value:new A0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new y0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new y0},anisotropyVector:{value:new T0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new y0}}]),vertexShader:u0.meshphysical_vert,fragmentShader:u0.meshphysical_frag};var T9={r:0,b:0,g:0},e6=new m8,BU=new W8;function PU(H,$,J,Z,W,Q,Y){let X=new A0(0),K=Q===!0?0:1,U,G,E=null,R=0,q=null;function O(L){let T=L.isScene===!0?L.background:null;if(T&&T.isTexture)T=(L.backgroundBlurriness>0?J:$).get(T);return T}function D(L){let T=!1,_=O(L);if(_===null)N(X,K);else if(_&&_.isColor)N(_,1),T=!0;let w=H.xr.getEnvironmentBlendMode();if(w==="additive")Z.buffers.color.setClear(0,0,0,1,Y);else if(w==="alpha-blend")Z.buffers.color.setClear(0,0,0,0,Y);if(H.autoClear||T)Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),H.clear(H.autoClearColor,H.autoClearDepth,H.autoClearStencil)}function F(L,T){let _=O(T);if(_&&(_.isCubeTexture||_.mapping===e7)){if(G===void 0)G=new r0(new Z6(1,1,1),new W6({name:"BackgroundCubeMaterial",uniforms:o6(Y6.backgroundCube.uniforms),vertexShader:Y6.backgroundCube.vertexShader,fragmentShader:Y6.backgroundCube.fragmentShader,side:A8,depthTest:!1,depthWrite:!1,fog:!1})),G.geometry.deleteAttribute("normal"),G.geometry.deleteAttribute("uv"),G.onBeforeRender=function(w,B,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(G.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),W.update(G);if(e6.copy(T.backgroundRotation),e6.x*=-1,e6.y*=-1,e6.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1)e6.y*=-1,e6.z*=-1;if(G.material.uniforms.envMap.value=_,G.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,G.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,G.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,G.material.uniforms.backgroundRotation.value.setFromMatrix4(BU.makeRotationFromEuler(e6)),G.material.toneMapped=i0.getTransfer(_.colorSpace)!==Q8,E!==_||R!==_.version||q!==H.toneMapping)G.material.needsUpdate=!0,E=_,R=_.version,q=H.toneMapping;G.layers.enableAll(),L.unshift(G,G.geometry,G.material,0,0,null)}else if(_&&_.isTexture){if(U===void 0)U=new r0(new UH(2,2),new W6({name:"BackgroundMaterial",uniforms:o6(Y6.background.uniforms),vertexShader:Y6.background.vertexShader,fragmentShader:Y6.background.fragmentShader,side:z7,depthTest:!1,depthWrite:!1,fog:!1})),U.geometry.deleteAttribute("normal"),Object.defineProperty(U.material,"map",{get:function(){return this.uniforms.t2D.value}}),W.update(U);if(U.material.uniforms.t2D.value=_,U.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,U.material.toneMapped=i0.getTransfer(_.colorSpace)!==Q8,_.matrixAutoUpdate===!0)_.updateMatrix();if(U.material.uniforms.uvTransform.value.copy(_.matrix),E!==_||R!==_.version||q!==H.toneMapping)U.material.needsUpdate=!0,E=_,R=_.version,q=H.toneMapping;U.layers.enableAll(),L.unshift(U,U.geometry,U.material,0,0,null)}}function N(L,T){L.getRGB(T9,UJ(H)),Z.buffers.color.setClear(T9.r,T9.g,T9.b,T,Y)}function I(){if(G!==void 0)G.geometry.dispose(),G.material.dispose();if(U!==void 0)U.geometry.dispose(),U.material.dispose()}return{getClearColor:function(){return X},setClearColor:function(L,T=1){X.set(L),K=T,N(X,K)},getClearAlpha:function(){return K},setClearAlpha:function(L){K=L,N(X,K)},render:D,addToRenderList:F,dispose:I}}function TU(H,$){let J=H.getParameter(H.MAX_VERTEX_ATTRIBS),Z={},W=R(null),Q=W,Y=!1;function X(z,A,x,p,l){let o=!1,d=E(p,x,A);if(Q!==d)Q=d,U(Q.object);if(o=q(z,p,x,l),o)O(z,p,x,l);if(l!==null)$.update(l,H.ELEMENT_ARRAY_BUFFER);if(o||Y){if(Y=!1,T(z,A,x,p),l!==null)H.bindBuffer(H.ELEMENT_ARRAY_BUFFER,$.get(l).buffer)}}function K(){return H.createVertexArray()}function U(z){return H.bindVertexArray(z)}function G(z){return H.deleteVertexArray(z)}function E(z,A,x){let p=x.wireframe===!0,l=Z[z.id];if(l===void 0)l={},Z[z.id]=l;let o=l[A.id];if(o===void 0)o={},l[A.id]=o;let d=o[p];if(d===void 0)d=R(K()),o[p]=d;return d}function R(z){let A=[],x=[],p=[];for(let l=0;l<J;l++)A[l]=0,x[l]=0,p[l]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:x,attributeDivisors:p,object:z,attributes:{},index:null}}function q(z,A,x,p){let l=Q.attributes,o=A.attributes,d=0,t=x.getAttributes();for(let m in t)if(t[m].location>=0){let H0=l[m],V0=o[m];if(V0===void 0){if(m==="instanceMatrix"&&z.instanceMatrix)V0=z.instanceMatrix;if(m==="instanceColor"&&z.instanceColor)V0=z.instanceColor}if(H0===void 0)return!0;if(H0.attribute!==V0)return!0;if(V0&&H0.data!==V0.data)return!0;d++}if(Q.attributesNum!==d)return!0;if(Q.index!==p)return!0;return!1}function O(z,A,x,p){let l={},o=A.attributes,d=0,t=x.getAttributes();for(let m in t)if(t[m].location>=0){let H0=o[m];if(H0===void 0){if(m==="instanceMatrix"&&z.instanceMatrix)H0=z.instanceMatrix;if(m==="instanceColor"&&z.instanceColor)H0=z.instanceColor}let V0={};if(V0.attribute=H0,H0&&H0.data)V0.data=H0.data;l[m]=V0,d++}Q.attributes=l,Q.attributesNum=d,Q.index=p}function D(){let z=Q.newAttributes;for(let A=0,x=z.length;A<x;A++)z[A]=0}function F(z){N(z,0)}function N(z,A){let{newAttributes:x,enabledAttributes:p,attributeDivisors:l}=Q;if(x[z]=1,p[z]===0)H.enableVertexAttribArray(z),p[z]=1;if(l[z]!==A)H.vertexAttribDivisor(z,A),l[z]=A}function I(){let{newAttributes:z,enabledAttributes:A}=Q;for(let x=0,p=A.length;x<p;x++)if(A[x]!==z[x])H.disableVertexAttribArray(x),A[x]=0}function L(z,A,x,p,l,o,d){if(d===!0)H.vertexAttribIPointer(z,A,x,l,o);else H.vertexAttribPointer(z,A,x,p,l,o)}function T(z,A,x,p){D();let l=p.attributes,o=x.getAttributes(),d=A.defaultAttributeValues;for(let t in o){let m=o[t];if(m.location>=0){let X0=l[t];if(X0===void 0){if(t==="instanceMatrix"&&z.instanceMatrix)X0=z.instanceMatrix;if(t==="instanceColor"&&z.instanceColor)X0=z.instanceColor}if(X0!==void 0){let{normalized:H0,itemSize:V0}=X0,g0=$.get(X0);if(g0===void 0)continue;let{buffer:n,type:J0,bytesPerElement:D0}=g0,k0=J0===H.INT||J0===H.UNSIGNED_INT||X0.gpuType===z$;if(X0.isInterleavedBufferAttribute){let W0=X0.data,C0=W0.stride,u=X0.offset;if(W0.isInstancedInterleavedBuffer){for(let S0=0;S0<m.locationSize;S0++)N(m.location+S0,W0.meshPerAttribute);if(z.isInstancedMesh!==!0&&p._maxInstanceCount===void 0)p._maxInstanceCount=W0.meshPerAttribute*W0.count}else for(let S0=0;S0<m.locationSize;S0++)F(m.location+S0);H.bindBuffer(H.ARRAY_BUFFER,n);for(let S0=0;S0<m.locationSize;S0++)L(m.location+S0,V0/m.locationSize,J0,H0,C0*D0,(u+V0/m.locationSize*S0)*D0,k0)}else{if(X0.isInstancedBufferAttribute){for(let W0=0;W0<m.locationSize;W0++)N(m.location+W0,X0.meshPerAttribute);if(z.isInstancedMesh!==!0&&p._maxInstanceCount===void 0)p._maxInstanceCount=X0.meshPerAttribute*X0.count}else for(let W0=0;W0<m.locationSize;W0++)F(m.location+W0);H.bindBuffer(H.ARRAY_BUFFER,n);for(let W0=0;W0<m.locationSize;W0++)L(m.location+W0,V0/m.locationSize,J0,H0,V0*D0,V0/m.locationSize*W0*D0,k0)}}else if(d!==void 0){let H0=d[t];if(H0!==void 0)switch(H0.length){case 2:H.vertexAttrib2fv(m.location,H0);break;case 3:H.vertexAttrib3fv(m.location,H0);break;case 4:H.vertexAttrib4fv(m.location,H0);break;default:H.vertexAttrib1fv(m.location,H0)}}}}I()}function _(){b();for(let z in Z){let A=Z[z];for(let x in A){let p=A[x];for(let l in p)G(p[l].object),delete p[l];delete A[x]}delete Z[z]}}function w(z){if(Z[z.id]===void 0)return;let A=Z[z.id];for(let x in A){let p=A[x];for(let l in p)G(p[l].object),delete p[l];delete A[x]}delete Z[z.id]}function B(z){for(let A in Z){let x=Z[A];if(x[z.id]===void 0)continue;let p=x[z.id];for(let l in p)G(p[l].object),delete p[l];delete x[z.id]}}function b(){if(C(),Y=!0,Q===W)return;Q=W,U(Q.object)}function C(){W.geometry=null,W.program=null,W.wireframe=!1}return{setup:X,reset:b,resetDefaultState:C,dispose:_,releaseStatesOfGeometry:w,releaseStatesOfProgram:B,initAttributes:D,enableAttribute:F,disableUnusedAttributes:I}}function AU(H,$,J){let Z;function W(U){Z=U}function Q(U,G){H.drawArrays(Z,U,G),J.update(G,Z,1)}function Y(U,G,E){if(E===0)return;H.drawArraysInstanced(Z,U,G,E),J.update(G,Z,E)}function X(U,G,E){if(E===0)return;$.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,U,0,G,0,E);let q=0;for(let O=0;O<E;O++)q+=G[O];J.update(q,Z,1)}function K(U,G,E,R){if(E===0)return;let q=$.get("WEBGL_multi_draw");if(q===null)for(let O=0;O<U.length;O++)Y(U[O],G[O],R[O]);else{q.multiDrawArraysInstancedWEBGL(Z,U,0,G,0,R,0,E);let O=0;for(let D=0;D<E;D++)O+=G[D]*R[D];J.update(O,Z,1)}}this.setMode=W,this.render=Q,this.renderInstances=Y,this.renderMultiDraw=X,this.renderMultiDrawInstances=K}function SU(H,$,J,Z){let W;function Q(){if(W!==void 0)return W;if($.has("EXT_texture_filter_anisotropic")===!0){let B=$.get("EXT_texture_filter_anisotropic");W=H.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else W=0;return W}function Y(B){if(B!==$6&&Z.convert(B)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function X(B){let b=B===ZH&&($.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float"));if(B!==S6&&Z.convert(B)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==_6&&!b)return!1;return!0}function K(B){if(B==="highp"){if(H.getShaderPrecisionFormat(H.VERTEX_SHADER,H.HIGH_FLOAT).precision>0&&H.getShaderPrecisionFormat(H.FRAGMENT_SHADER,H.HIGH_FLOAT).precision>0)return"highp";B="mediump"}if(B==="mediump"){if(H.getShaderPrecisionFormat(H.VERTEX_SHADER,H.MEDIUM_FLOAT).precision>0&&H.getShaderPrecisionFormat(H.FRAGMENT_SHADER,H.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=J.precision!==void 0?J.precision:"highp",G=K(U);if(G!==U)console.warn("THREE.WebGLRenderer:",U,"not supported, using",G,"instead."),U=G;let E=J.logarithmicDepthBuffer===!0,R=J.reverseDepthBuffer===!0&&$.has("EXT_clip_control"),q=H.getParameter(H.MAX_TEXTURE_IMAGE_UNITS),O=H.getParameter(H.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=H.getParameter(H.MAX_TEXTURE_SIZE),F=H.getParameter(H.MAX_CUBE_MAP_TEXTURE_SIZE),N=H.getParameter(H.MAX_VERTEX_ATTRIBS),I=H.getParameter(H.MAX_VERTEX_UNIFORM_VECTORS),L=H.getParameter(H.MAX_VARYING_VECTORS),T=H.getParameter(H.MAX_FRAGMENT_UNIFORM_VECTORS),_=O>0,w=H.getParameter(H.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:Q,getMaxPrecision:K,textureFormatReadable:Y,textureTypeReadable:X,precision:U,logarithmicDepthBuffer:E,reverseDepthBuffer:R,maxTextures:q,maxVertexTextures:O,maxTextureSize:D,maxCubemapSize:F,maxAttributes:N,maxVertexUniforms:I,maxVaryings:L,maxFragmentUniforms:T,vertexTextures:_,maxSamples:w}}function _U(H){let $=this,J=null,Z=0,W=!1,Q=!1,Y=new o8,X=new y0,K={value:null,needsUpdate:!1};this.uniform=K,this.numPlanes=0,this.numIntersection=0,this.init=function(E,R){let q=E.length!==0||R||Z!==0||W;return W=R,Z=E.length,q},this.beginShadows=function(){Q=!0,G(null)},this.endShadows=function(){Q=!1},this.setGlobalState=function(E,R){J=G(E,R,0)},this.setState=function(E,R,q){let{clippingPlanes:O,clipIntersection:D,clipShadows:F}=E,N=H.get(E);if(!W||O===null||O.length===0||Q&&!F)if(Q)G(null);else U();else{let I=Q?0:Z,L=I*4,T=N.clippingState||null;K.value=T,T=G(O,R,L,q);for(let _=0;_!==L;++_)T[_]=J[_];N.clippingState=T,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=I}};function U(){if(K.value!==J)K.value=J,K.needsUpdate=Z>0;$.numPlanes=Z,$.numIntersection=0}function G(E,R,q,O){let D=E!==null?E.length:0,F=null;if(D!==0){if(F=K.value,O!==!0||F===null){let N=q+D*4,I=R.matrixWorldInverse;if(X.getNormalMatrix(I),F===null||F.length<N)F=new Float32Array(N);for(let L=0,T=q;L!==D;++L,T+=4)Y.copy(E[L]).applyMatrix4(I,X),Y.normal.toArray(F,T),F[T+3]=Y.constant}K.value=F,K.needsUpdate=!0}return $.numPlanes=D,$.numIntersection=0,F}}function jU(H){let $=new WeakMap;function J(Y,X){if(X===$9)Y.mapping=I7;else if(X===J9)Y.mapping=l6;return Y}function Z(Y){if(Y&&Y.isTexture){let X=Y.mapping;if(X===$9||X===J9)if($.has(Y)){let K=$.get(Y).texture;return J(K,Y.mapping)}else{let K=Y.image;if(K&&K.height>0){let U=new EJ(K.height);return U.fromEquirectangularTexture(H,Y),$.set(Y,U),Y.addEventListener("dispose",W),J(U.texture,Y.mapping)}else return null}}return Y}function W(Y){let X=Y.target;X.removeEventListener("dispose",W);let K=$.get(X);if(K!==void 0)$.delete(X),K.dispose()}function Q(){$=new WeakMap}return{get:Z,dispose:Q}}var h7=4,nW=[0.125,0.215,0.35,0.446,0.526,0.582],J7=20,TJ=new w9,sW=new A0,AJ=null,SJ=0,_J=0,jJ=!1,$7=(1+Math.sqrt(5))/2,f7=1/$7,iW=[new S(-$7,f7,0),new S($7,f7,0),new S(-f7,0,$7),new S(f7,0,$7),new S(0,$7,-f7),new S(0,$7,f7),new S(-1,1,-1),new S(1,1,-1),new S(-1,1,1),new S(1,1,1)];class hJ{constructor(H){this._renderer=H,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(H,$=0,J=0.1,Z=100){AJ=this._renderer.getRenderTarget(),SJ=this._renderer.getActiveCubeFace(),_J=this._renderer.getActiveMipmapLevel(),jJ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let W=this._allocateTargets();if(W.depthBuffer=!0,this._sceneToCubeUV(H,J,Z,W),$>0)this._blur(W,0,0,$);return this._applyPMREM(W),this._cleanup(W),W}fromEquirectangular(H,$=null){return this._fromTexture(H,$)}fromCubemap(H,$=null){return this._fromTexture(H,$)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=rW(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=aW(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize(H){this._lodMax=Math.floor(Math.log2(H)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let H=0;H<this._lodPlanes.length;H++)this._lodPlanes[H].dispose()}_cleanup(H){this._renderer.setRenderTarget(AJ,SJ,_J),this._renderer.xr.enabled=jJ,H.scissorTest=!1,A9(H,0,0,H.width,H.height)}_fromTexture(H,$){if(H.mapping===I7||H.mapping===l6)this._setSize(H.image.length===0?16:H.image[0].width||H.image[0].image.width);else this._setSize(H.image.width/4);AJ=this._renderer.getRenderTarget(),SJ=this._renderer.getActiveCubeFace(),_J=this._renderer.getActiveMipmapLevel(),jJ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let J=$||this._allocateTargets();return this._textureToCubeUV(H,J),this._applyPMREM(J),this._cleanup(J),J}_allocateTargets(){let H=3*Math.max(this._cubeSize,112),$=4*this._cubeSize,J={magFilter:m6,minFilter:m6,generateMipmaps:!1,type:ZH,format:$6,colorSpace:QH,depthBuffer:!1},Z=oW(H,$,J);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==H||this._pingPongRenderTarget.height!==$){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=oW(H,$,J);let{_lodMax:W}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fU(W)),this._blurMaterial=hU(W,H,$)}return Z}_compileMaterial(H){let $=new r0(this._lodPlanes[0],H);this._renderer.compile($,TJ)}_sceneToCubeUV(H,$,J,Z){let Y=new I8(90,1,$,J),X=[1,-1,1,1,1,1],K=[1,1,1,-1,-1,-1],U=this._renderer,G=U.autoClear,E=U.toneMapping;U.getClearColor(sW),U.toneMapping=N6,U.autoClear=!1;let R=new j6({name:"PMREM.Background",side:A8,depthWrite:!1,depthTest:!1}),q=new r0(new Z6,R),O=!1,D=H.background;if(D){if(D.isColor)R.color.copy(D),H.background=null,O=!0}else R.color.copy(sW),O=!0;for(let F=0;F<6;F++){let N=F%3;if(N===0)Y.up.set(0,X[F],0),Y.lookAt(K[F],0,0);else if(N===1)Y.up.set(0,0,X[F]),Y.lookAt(0,K[F],0);else Y.up.set(0,X[F],0),Y.lookAt(0,0,K[F]);let I=this._cubeSize;if(A9(Z,N*I,F>2?I:0,I,I),U.setRenderTarget(Z),O)U.render(q,Y);U.render(H,Y)}q.geometry.dispose(),q.material.dispose(),U.toneMapping=E,U.autoClear=G,H.background=D}_textureToCubeUV(H,$){let J=this._renderer,Z=H.mapping===I7||H.mapping===l6;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=rW();this._cubemapMaterial.uniforms.flipEnvMap.value=H.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=aW();let W=Z?this._cubemapMaterial:this._equirectMaterial,Q=new r0(this._lodPlanes[0],W),Y=W.uniforms;Y.envMap.value=H;let X=this._cubeSize;A9($,0,0,3*X,2*X),J.setRenderTarget($),J.render(Q,TJ)}_applyPMREM(H){let $=this._renderer,J=$.autoClear;$.autoClear=!1;let Z=this._lodPlanes.length;for(let W=1;W<Z;W++){let Q=Math.sqrt(this._sigmas[W]*this._sigmas[W]-this._sigmas[W-1]*this._sigmas[W-1]),Y=iW[(Z-W-1)%iW.length];this._blur(H,W-1,W,Q,Y)}$.autoClear=J}_blur(H,$,J,Z,W){let Q=this._pingPongRenderTarget;this._halfBlur(H,Q,$,J,Z,"latitudinal",W),this._halfBlur(Q,H,J,J,Z,"longitudinal",W)}_halfBlur(H,$,J,Z,W,Q,Y){let X=this._renderer,K=this._blurMaterial;if(Q!=="latitudinal"&&Q!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let U=3,G=new r0(this._lodPlanes[Z],K),E=K.uniforms,R=this._sizeLods[J]-1,q=isFinite(W)?Math.PI/(2*R):2*Math.PI/(2*J7-1),O=W/q,D=isFinite(W)?1+Math.floor(U*O):J7;if(D>J7)console.warn(`sigmaRadians, ${W}, is too large and will clip, as it requested ${D} samples when the maximum is set to ${J7}`);let F=[],N=0;for(let w=0;w<J7;++w){let B=w/O,b=Math.exp(-B*B/2);if(F.push(b),w===0)N+=b;else if(w<D)N+=2*b}for(let w=0;w<F.length;w++)F[w]=F[w]/N;if(E.envMap.value=H.texture,E.samples.value=D,E.weights.value=F,E.latitudinal.value=Q==="latitudinal",Y)E.poleAxis.value=Y;let{_lodMax:I}=this;E.dTheta.value=q,E.mipInt.value=I-J;let L=this._sizeLods[Z],T=3*L*(Z>I-h7?Z-I+h7:0),_=4*(this._cubeSize-L);A9($,T,_,3*L,2*L),X.setRenderTarget($),X.render(G,TJ)}}function fU(H){let $=[],J=[],Z=[],W=H,Q=H-h7+1+nW.length;for(let Y=0;Y<Q;Y++){let X=Math.pow(2,W);J.push(X);let K=1/X;if(Y>H-h7)K=nW[Y-H+h7-1];else if(Y===0)K=0;Z.push(K);let U=1/(X-2),G=-U,E=1+U,R=[G,G,E,G,E,E,G,G,E,E,G,E],q=6,O=6,D=3,F=2,N=1,I=new Float32Array(D*O*q),L=new Float32Array(F*O*q),T=new Float32Array(N*O*q);for(let w=0;w<q;w++){let B=w%3*2/3-1,b=w>2?0:-1,C=[B,b,0,B+0.6666666666666666,b,0,B+0.6666666666666666,b+1,0,B,b,0,B+0.6666666666666666,b+1,0,B,b+1,0];I.set(C,D*O*w),L.set(R,F*O*w);let z=[w,w,w,w,w,w];T.set(z,N*O*w)}let _=new C8;if(_.setAttribute("position",new l8(I,D)),_.setAttribute("uv",new l8(L,F)),_.setAttribute("faceIndex",new l8(T,N)),$.push(_),W>h7)W--}return{lodPlanes:$,sizeLods:J,sigmas:Z}}function oW(H,$,J){let Z=new O6(H,$,J);return Z.texture.mapping=e7,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function A9(H,$,J,Z,W){H.viewport.set($,J,Z,W),H.scissor.set($,J,Z,W)}function hU(H,$,J){let Z=new Float32Array(J7),W=new S(0,1,0);return new W6({name:"SphericalGaussianBlur",defines:{n:J7,CUBEUV_TEXEL_WIDTH:1/$,CUBEUV_TEXEL_HEIGHT:1/J,CUBEUV_MAX_MIP:`${H}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:Z},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:W}},vertexShader:yJ(),fragmentShader:`

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
		`,blending:A6,depthTest:!1,depthWrite:!1})}function aW(){return new W6({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yJ(),fragmentShader:`

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
		`,blending:A6,depthTest:!1,depthWrite:!1})}function rW(){return new W6({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yJ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:A6,depthTest:!1,depthWrite:!1})}function yJ(){return`

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
	`}function xU(H){let $=new WeakMap,J=null;function Z(X){if(X&&X.isTexture){let K=X.mapping,U=K===$9||K===J9,G=K===I7||K===l6;if(U||G){let E=$.get(X),R=E!==void 0?E.texture.pmremVersion:0;if(X.isRenderTargetTexture&&X.pmremVersion!==R){if(J===null)J=new hJ(H);return E=U?J.fromEquirectangular(X,E):J.fromCubemap(X,E),E.texture.pmremVersion=X.pmremVersion,$.set(X,E),E.texture}else if(E!==void 0)return E.texture;else{let q=X.image;if(U&&q&&q.height>0||G&&q&&W(q)){if(J===null)J=new hJ(H);return E=U?J.fromEquirectangular(X):J.fromCubemap(X),E.texture.pmremVersion=X.pmremVersion,$.set(X,E),X.addEventListener("dispose",Q),E.texture}else return null}}}return X}function W(X){let K=0,U=6;for(let G=0;G<U;G++)if(X[G]!==void 0)K++;return K===U}function Q(X){let K=X.target;K.removeEventListener("dispose",Q);let U=$.get(K);if(U!==void 0)$.delete(K),U.dispose()}function Y(){if($=new WeakMap,J!==null)J.dispose(),J=null}return{get:Z,dispose:Y}}function yU(H){let $={};function J(Z){if($[Z]!==void 0)return $[Z];let W;switch(Z){case"WEBGL_depth_texture":W=H.getExtension("WEBGL_depth_texture")||H.getExtension("MOZ_WEBGL_depth_texture")||H.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":W=H.getExtension("EXT_texture_filter_anisotropic")||H.getExtension("MOZ_EXT_texture_filter_anisotropic")||H.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":W=H.getExtension("WEBGL_compressed_texture_s3tc")||H.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||H.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":W=H.getExtension("WEBGL_compressed_texture_pvrtc")||H.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:W=H.getExtension(Z)}return $[Z]=W,W}return{has:function(Z){return J(Z)!==null},init:function(){J("EXT_color_buffer_float"),J("WEBGL_clip_cull_distance"),J("OES_texture_float_linear"),J("EXT_color_buffer_half_float"),J("WEBGL_multisampled_render_to_texture"),J("WEBGL_render_shared_exponent")},get:function(Z){let W=J(Z);if(W===null)n6("THREE.WebGLRenderer: "+Z+" extension not supported.");return W}}}function vU(H,$,J,Z){let W={},Q=new WeakMap;function Y(E){let R=E.target;if(R.index!==null)$.remove(R.index);for(let O in R.attributes)$.remove(R.attributes[O]);R.removeEventListener("dispose",Y),delete W[R.id];let q=Q.get(R);if(q)$.remove(q),Q.delete(R);if(Z.releaseStatesOfGeometry(R),R.isInstancedBufferGeometry===!0)delete R._maxInstanceCount;J.memory.geometries--}function X(E,R){if(W[R.id]===!0)return R;return R.addEventListener("dispose",Y),W[R.id]=!0,J.memory.geometries++,R}function K(E){let R=E.attributes;for(let q in R)$.update(R[q],H.ARRAY_BUFFER)}function U(E){let R=[],q=E.index,O=E.attributes.position,D=0;if(q!==null){let I=q.array;D=q.version;for(let L=0,T=I.length;L<T;L+=3){let _=I[L+0],w=I[L+1],B=I[L+2];R.push(_,w,w,B,B,_)}}else if(O!==void 0){let I=O.array;D=O.version;for(let L=0,T=I.length/3-1;L<T;L+=3){let _=L+0,w=L+1,B=L+2;R.push(_,w,w,B,B,_)}}else return;let F=new((QJ(R))?N9:F9)(R,1);F.version=D;let N=Q.get(E);if(N)$.remove(N);Q.set(E,F)}function G(E){let R=Q.get(E);if(R){let q=E.index;if(q!==null){if(R.version<q.version)U(E)}}else U(E);return Q.get(E)}return{get:X,update:K,getWireframeAttribute:G}}function bU(H,$,J){let Z;function W(R){Z=R}let Q,Y;function X(R){Q=R.type,Y=R.bytesPerElement}function K(R,q){H.drawElements(Z,q,Q,R*Y),J.update(q,Z,1)}function U(R,q,O){if(O===0)return;H.drawElementsInstanced(Z,q,Q,R*Y,O),J.update(q,Z,O)}function G(R,q,O){if(O===0)return;$.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,q,0,Q,R,0,O);let F=0;for(let N=0;N<O;N++)F+=q[N];J.update(F,Z,1)}function E(R,q,O,D){if(O===0)return;let F=$.get("WEBGL_multi_draw");if(F===null)for(let N=0;N<R.length;N++)U(R[N]/Y,q[N],D[N]);else{F.multiDrawElementsInstancedWEBGL(Z,q,0,Q,R,0,D,0,O);let N=0;for(let I=0;I<O;I++)N+=q[I]*D[I];J.update(N,Z,1)}}this.setMode=W,this.setIndex=X,this.render=K,this.renderInstances=U,this.renderMultiDraw=G,this.renderMultiDrawInstances=E}function gU(H){let $={geometries:0,textures:0},J={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(Q,Y,X){switch(J.calls++,Y){case H.TRIANGLES:J.triangles+=X*(Q/3);break;case H.LINES:J.lines+=X*(Q/2);break;case H.LINE_STRIP:J.lines+=X*(Q-1);break;case H.LINE_LOOP:J.lines+=X*Q;break;case H.POINTS:J.points+=X*Q;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",Y);break}}function W(){J.calls=0,J.triangles=0,J.points=0,J.lines=0}return{memory:$,render:J,programs:null,autoReset:!0,reset:W,update:Z}}function pU(H,$,J){let Z=new WeakMap,W=new J8;function Q(Y,X,K){let U=Y.morphTargetInfluences,G=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,E=G!==void 0?G.length:0,R=Z.get(X);if(R===void 0||R.count!==E){let C=function(){B.dispose(),Z.delete(X),X.removeEventListener("dispose",C)};if(R!==void 0)R.texture.dispose();let q=X.morphAttributes.position!==void 0,O=X.morphAttributes.normal!==void 0,D=X.morphAttributes.color!==void 0,F=X.morphAttributes.position||[],N=X.morphAttributes.normal||[],I=X.morphAttributes.color||[],L=0;if(q===!0)L=1;if(O===!0)L=2;if(D===!0)L=3;let T=X.attributes.position.count*L,_=1;if(T>$.maxTextureSize)_=Math.ceil(T/$.maxTextureSize),T=$.maxTextureSize;let w=new Float32Array(T*_*4*E),B=new E9(w,T,_,E);B.type=_6,B.needsUpdate=!0;let b=L*4;for(let z=0;z<E;z++){let A=F[z],x=N[z],p=I[z],l=T*_*4*z;for(let o=0;o<A.count;o++){let d=o*b;if(q===!0)W.fromBufferAttribute(A,o),w[l+d+0]=W.x,w[l+d+1]=W.y,w[l+d+2]=W.z,w[l+d+3]=0;if(O===!0)W.fromBufferAttribute(x,o),w[l+d+4]=W.x,w[l+d+5]=W.y,w[l+d+6]=W.z,w[l+d+7]=0;if(D===!0)W.fromBufferAttribute(p,o),w[l+d+8]=W.x,w[l+d+9]=W.y,w[l+d+10]=W.z,w[l+d+11]=p.itemSize===4?W.w:1}}R={count:E,texture:B,size:new T0(T,_)},Z.set(X,R),X.addEventListener("dispose",C)}if(Y.isInstancedMesh===!0&&Y.morphTexture!==null)K.getUniforms().setValue(H,"morphTexture",Y.morphTexture,J);else{let q=0;for(let D=0;D<U.length;D++)q+=U[D];let O=X.morphTargetsRelative?1:1-q;K.getUniforms().setValue(H,"morphTargetBaseInfluence",O),K.getUniforms().setValue(H,"morphTargetInfluences",U)}K.getUniforms().setValue(H,"morphTargetsTexture",R.texture,J),K.getUniforms().setValue(H,"morphTargetsTextureSize",R.size)}return{update:Q}}function uU(H,$,J,Z){let W=new WeakMap;function Q(K){let U=Z.render.frame,G=K.geometry,E=$.get(K,G);if(W.get(E)!==U)$.update(E),W.set(E,U);if(K.isInstancedMesh){if(K.hasEventListener("dispose",X)===!1)K.addEventListener("dispose",X);if(W.get(K)!==U){if(J.update(K.instanceMatrix,H.ARRAY_BUFFER),K.instanceColor!==null)J.update(K.instanceColor,H.ARRAY_BUFFER);W.set(K,U)}}if(K.isSkinnedMesh){let R=K.skeleton;if(W.get(R)!==U)R.update(),W.set(R,U)}return E}function Y(){W=new WeakMap}function X(K){let U=K.target;if(U.removeEventListener("dispose",X),J.remove(U.instanceMatrix),U.instanceColor!==null)J.remove(U.instanceColor)}return{update:Q,dispose:Y}}var OQ=new L8,tW=new L9(1,1),DQ=new E9,MQ=new KJ,kQ=new O9,eW=[],HQ=[],$Q=new Float32Array(16),JQ=new Float32Array(9),ZQ=new Float32Array(4);function x7(H,$,J){let Z=H[0];if(Z<=0||Z>0)return H;let W=$*J,Q=eW[W];if(Q===void 0)Q=new Float32Array(W),eW[W]=Q;if($!==0){Z.toArray(Q,0);for(let Y=1,X=0;Y!==$;++Y)X+=J,H[Y].toArray(Q,X)}return Q}function N8(H,$){if(H.length!==$.length)return!1;for(let J=0,Z=H.length;J<Z;J++)if(H[J]!==$[J])return!1;return!0}function q8(H,$){for(let J=0,Z=$.length;J<Z;J++)H[J]=$[J]}function j9(H,$){let J=HQ[$];if(J===void 0)J=new Int32Array($),HQ[$]=J;for(let Z=0;Z!==$;++Z)J[Z]=H.allocateTextureUnit();return J}function lU(H,$){let J=this.cache;if(J[0]===$)return;H.uniform1f(this.addr,$),J[0]=$}function mU(H,$){let J=this.cache;if($.x!==void 0){if(J[0]!==$.x||J[1]!==$.y)H.uniform2f(this.addr,$.x,$.y),J[0]=$.x,J[1]=$.y}else{if(N8(J,$))return;H.uniform2fv(this.addr,$),q8(J,$)}}function dU(H,$){let J=this.cache;if($.x!==void 0){if(J[0]!==$.x||J[1]!==$.y||J[2]!==$.z)H.uniform3f(this.addr,$.x,$.y,$.z),J[0]=$.x,J[1]=$.y,J[2]=$.z}else if($.r!==void 0){if(J[0]!==$.r||J[1]!==$.g||J[2]!==$.b)H.uniform3f(this.addr,$.r,$.g,$.b),J[0]=$.r,J[1]=$.g,J[2]=$.b}else{if(N8(J,$))return;H.uniform3fv(this.addr,$),q8(J,$)}}function cU(H,$){let J=this.cache;if($.x!==void 0){if(J[0]!==$.x||J[1]!==$.y||J[2]!==$.z||J[3]!==$.w)H.uniform4f(this.addr,$.x,$.y,$.z,$.w),J[0]=$.x,J[1]=$.y,J[2]=$.z,J[3]=$.w}else{if(N8(J,$))return;H.uniform4fv(this.addr,$),q8(J,$)}}function nU(H,$){let J=this.cache,Z=$.elements;if(Z===void 0){if(N8(J,$))return;H.uniformMatrix2fv(this.addr,!1,$),q8(J,$)}else{if(N8(J,Z))return;ZQ.set(Z),H.uniformMatrix2fv(this.addr,!1,ZQ),q8(J,Z)}}function sU(H,$){let J=this.cache,Z=$.elements;if(Z===void 0){if(N8(J,$))return;H.uniformMatrix3fv(this.addr,!1,$),q8(J,$)}else{if(N8(J,Z))return;JQ.set(Z),H.uniformMatrix3fv(this.addr,!1,JQ),q8(J,Z)}}function iU(H,$){let J=this.cache,Z=$.elements;if(Z===void 0){if(N8(J,$))return;H.uniformMatrix4fv(this.addr,!1,$),q8(J,$)}else{if(N8(J,Z))return;$Q.set(Z),H.uniformMatrix4fv(this.addr,!1,$Q),q8(J,Z)}}function oU(H,$){let J=this.cache;if(J[0]===$)return;H.uniform1i(this.addr,$),J[0]=$}function aU(H,$){let J=this.cache;if($.x!==void 0){if(J[0]!==$.x||J[1]!==$.y)H.uniform2i(this.addr,$.x,$.y),J[0]=$.x,J[1]=$.y}else{if(N8(J,$))return;H.uniform2iv(this.addr,$),q8(J,$)}}function rU(H,$){let J=this.cache;if($.x!==void 0){if(J[0]!==$.x||J[1]!==$.y||J[2]!==$.z)H.uniform3i(this.addr,$.x,$.y,$.z),J[0]=$.x,J[1]=$.y,J[2]=$.z}else{if(N8(J,$))return;H.uniform3iv(this.addr,$),q8(J,$)}}function tU(H,$){let J=this.cache;if($.x!==void 0){if(J[0]!==$.x||J[1]!==$.y||J[2]!==$.z||J[3]!==$.w)H.uniform4i(this.addr,$.x,$.y,$.z,$.w),J[0]=$.x,J[1]=$.y,J[2]=$.z,J[3]=$.w}else{if(N8(J,$))return;H.uniform4iv(this.addr,$),q8(J,$)}}function eU(H,$){let J=this.cache;if(J[0]===$)return;H.uniform1ui(this.addr,$),J[0]=$}function H1(H,$){let J=this.cache;if($.x!==void 0){if(J[0]!==$.x||J[1]!==$.y)H.uniform2ui(this.addr,$.x,$.y),J[0]=$.x,J[1]=$.y}else{if(N8(J,$))return;H.uniform2uiv(this.addr,$),q8(J,$)}}function $1(H,$){let J=this.cache;if($.x!==void 0){if(J[0]!==$.x||J[1]!==$.y||J[2]!==$.z)H.uniform3ui(this.addr,$.x,$.y,$.z),J[0]=$.x,J[1]=$.y,J[2]=$.z}else{if(N8(J,$))return;H.uniform3uiv(this.addr,$),q8(J,$)}}function J1(H,$){let J=this.cache;if($.x!==void 0){if(J[0]!==$.x||J[1]!==$.y||J[2]!==$.z||J[3]!==$.w)H.uniform4ui(this.addr,$.x,$.y,$.z,$.w),J[0]=$.x,J[1]=$.y,J[2]=$.z,J[3]=$.w}else{if(N8(J,$))return;H.uniform4uiv(this.addr,$),q8(J,$)}}function Z1(H,$,J){let Z=this.cache,W=J.allocateTextureUnit();if(Z[0]!==W)H.uniform1i(this.addr,W),Z[0]=W;let Q;if(this.type===H.SAMPLER_2D_SHADOW)tW.compareFunction=$J,Q=tW;else Q=OQ;J.setTexture2D($||Q,W)}function W1(H,$,J){let Z=this.cache,W=J.allocateTextureUnit();if(Z[0]!==W)H.uniform1i(this.addr,W),Z[0]=W;J.setTexture3D($||MQ,W)}function Q1(H,$,J){let Z=this.cache,W=J.allocateTextureUnit();if(Z[0]!==W)H.uniform1i(this.addr,W),Z[0]=W;J.setTextureCube($||kQ,W)}function Y1(H,$,J){let Z=this.cache,W=J.allocateTextureUnit();if(Z[0]!==W)H.uniform1i(this.addr,W),Z[0]=W;J.setTexture2DArray($||DQ,W)}function X1(H){switch(H){case 5126:return lU;case 35664:return mU;case 35665:return dU;case 35666:return cU;case 35674:return nU;case 35675:return sU;case 35676:return iU;case 5124:case 35670:return oU;case 35667:case 35671:return aU;case 35668:case 35672:return rU;case 35669:case 35673:return tU;case 5125:return eU;case 36294:return H1;case 36295:return $1;case 36296:return J1;case 35678:case 36198:case 36298:case 36306:case 35682:return Z1;case 35679:case 36299:case 36307:return W1;case 35680:case 36300:case 36308:case 36293:return Q1;case 36289:case 36303:case 36311:case 36292:return Y1}}function K1(H,$){H.uniform1fv(this.addr,$)}function U1(H,$){let J=x7($,this.size,2);H.uniform2fv(this.addr,J)}function G1(H,$){let J=x7($,this.size,3);H.uniform3fv(this.addr,J)}function E1(H,$){let J=x7($,this.size,4);H.uniform4fv(this.addr,J)}function R1(H,$){let J=x7($,this.size,4);H.uniformMatrix2fv(this.addr,!1,J)}function F1(H,$){let J=x7($,this.size,9);H.uniformMatrix3fv(this.addr,!1,J)}function N1(H,$){let J=x7($,this.size,16);H.uniformMatrix4fv(this.addr,!1,J)}function q1(H,$){H.uniform1iv(this.addr,$)}function O1(H,$){H.uniform2iv(this.addr,$)}function D1(H,$){H.uniform3iv(this.addr,$)}function M1(H,$){H.uniform4iv(this.addr,$)}function k1(H,$){H.uniform1uiv(this.addr,$)}function L1(H,$){H.uniform2uiv(this.addr,$)}function C1(H,$){H.uniform3uiv(this.addr,$)}function z1(H,$){H.uniform4uiv(this.addr,$)}function w1(H,$,J){let Z=this.cache,W=$.length,Q=j9(J,W);if(!N8(Z,Q))H.uniform1iv(this.addr,Q),q8(Z,Q);for(let Y=0;Y!==W;++Y)J.setTexture2D($[Y]||OQ,Q[Y])}function I1(H,$,J){let Z=this.cache,W=$.length,Q=j9(J,W);if(!N8(Z,Q))H.uniform1iv(this.addr,Q),q8(Z,Q);for(let Y=0;Y!==W;++Y)J.setTexture3D($[Y]||MQ,Q[Y])}function V1(H,$,J){let Z=this.cache,W=$.length,Q=j9(J,W);if(!N8(Z,Q))H.uniform1iv(this.addr,Q),q8(Z,Q);for(let Y=0;Y!==W;++Y)J.setTextureCube($[Y]||kQ,Q[Y])}function B1(H,$,J){let Z=this.cache,W=$.length,Q=j9(J,W);if(!N8(Z,Q))H.uniform1iv(this.addr,Q),q8(Z,Q);for(let Y=0;Y!==W;++Y)J.setTexture2DArray($[Y]||DQ,Q[Y])}function P1(H){switch(H){case 5126:return K1;case 35664:return U1;case 35665:return G1;case 35666:return E1;case 35674:return R1;case 35675:return F1;case 35676:return N1;case 5124:case 35670:return q1;case 35667:case 35671:return O1;case 35668:case 35672:return D1;case 35669:case 35673:return M1;case 5125:return k1;case 36294:return L1;case 36295:return C1;case 36296:return z1;case 35678:case 36198:case 36298:case 36306:case 35682:return w1;case 35679:case 36299:case 36307:return I1;case 35680:case 36300:case 36308:case 36293:return V1;case 36289:case 36303:case 36311:case 36292:return B1}}class LQ{constructor(H,$,J){this.id=H,this.addr=J,this.cache=[],this.type=$.type,this.setValue=X1($.type)}}class CQ{constructor(H,$,J){this.id=H,this.addr=J,this.cache=[],this.type=$.type,this.size=$.size,this.setValue=P1($.type)}}class zQ{constructor(H){this.id=H,this.seq=[],this.map={}}setValue(H,$,J){let Z=this.seq;for(let W=0,Q=Z.length;W!==Q;++W){let Y=Z[W];Y.setValue(H,$[Y.id],J)}}}var fJ=/(\w+)(\])?(\[|\.)?/g;function WQ(H,$){H.seq.push($),H.map[$.id]=$}function T1(H,$,J){let Z=H.name,W=Z.length;fJ.lastIndex=0;while(!0){let Q=fJ.exec(Z),Y=fJ.lastIndex,X=Q[1],K=Q[2]==="]",U=Q[3];if(K)X=X|0;if(U===void 0||U==="["&&Y+2===W){WQ(J,U===void 0?new LQ(X,H,$):new CQ(X,H,$));break}else{let E=J.map[X];if(E===void 0)E=new zQ(X),WQ(J,E);J=E}}}class qH{constructor(H,$){this.seq=[],this.map={};let J=H.getProgramParameter($,H.ACTIVE_UNIFORMS);for(let Z=0;Z<J;++Z){let W=H.getActiveUniform($,Z),Q=H.getUniformLocation($,W.name);T1(W,Q,this)}}setValue(H,$,J,Z){let W=this.map[$];if(W!==void 0)W.setValue(H,J,Z)}setOptional(H,$,J){let Z=$[J];if(Z!==void 0)this.setValue(H,J,Z)}static upload(H,$,J,Z){for(let W=0,Q=$.length;W!==Q;++W){let Y=$[W],X=J[Y.id];if(X.needsUpdate!==!1)Y.setValue(H,X.value,Z)}}static seqWithValue(H,$){let J=[];for(let Z=0,W=H.length;Z!==W;++Z){let Q=H[Z];if(Q.id in $)J.push(Q)}return J}}function QQ(H,$,J){let Z=H.createShader($);return H.shaderSource(Z,J),H.compileShader(Z),Z}var A1=37297,S1=0;function _1(H,$){let J=H.split(`
`),Z=[],W=Math.max($-6,0),Q=Math.min($+6,J.length);for(let Y=W;Y<Q;Y++){let X=Y+1;Z.push(`${X===$?">":" "} ${X}: ${J[Y]}`)}return Z.join(`
`)}var YQ=new y0;function j1(H){i0._getMatrix(YQ,i0.workingColorSpace,H);let $=`mat3( ${YQ.elements.map((J)=>J.toFixed(4))} )`;switch(i0.getTransfer(H)){case HJ:return[$,"LinearTransferOETF"];case Q8:return[$,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",H),[$,"LinearTransferOETF"]}}function XQ(H,$,J){let Z=H.getShaderParameter($,H.COMPILE_STATUS),W=H.getShaderInfoLog($).trim();if(Z&&W==="")return"";let Q=/ERROR: 0:(\d+)/.exec(W);if(Q){let Y=parseInt(Q[1]);return J.toUpperCase()+`

`+W+`

`+_1(H.getShaderSource($),Y)}else return W}function f1(H,$){let J=j1($);return[`vec4 ${H}( vec4 value ) {`,`	return ${J[1]}( vec4( value.rgb * ${J[0]}, value.a ) );`,"}"].join(`
`)}function h1(H,$){let J;switch($){case YW:J="Linear";break;case XW:J="Reinhard";break;case KW:J="Cineon";break;case H9:J="ACESFilmic";break;case GW:J="AgX";break;case EW:J="Neutral";break;case UW:J="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",$),J="Linear"}return"vec3 "+H+"( vec3 color ) { return "+J+"ToneMapping( color ); }"}var S9=new S;function x1(){i0.getLuminanceCoefficients(S9);let H=S9.x.toFixed(4),$=S9.y.toFixed(4),J=S9.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${H}, ${$}, ${J} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function y1(H){return[H.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",H.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(NH).join(`
`)}function v1(H){let $=[];for(let J in H){let Z=H[J];if(Z===!1)continue;$.push("#define "+J+" "+Z)}return $.join(`
`)}function b1(H,$){let J={},Z=H.getProgramParameter($,H.ACTIVE_ATTRIBUTES);for(let W=0;W<Z;W++){let Q=H.getActiveAttrib($,W),Y=Q.name,X=1;if(Q.type===H.FLOAT_MAT2)X=2;if(Q.type===H.FLOAT_MAT3)X=3;if(Q.type===H.FLOAT_MAT4)X=4;J[Y]={type:Q.type,location:H.getAttribLocation($,Y),locationSize:X}}return J}function NH(H){return H!==""}function KQ(H,$){let J=$.numSpotLightShadows+$.numSpotLightMaps-$.numSpotLightShadowsWithMaps;return H.replace(/NUM_DIR_LIGHTS/g,$.numDirLights).replace(/NUM_SPOT_LIGHTS/g,$.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,$.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,J).replace(/NUM_RECT_AREA_LIGHTS/g,$.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,$.numPointLights).replace(/NUM_HEMI_LIGHTS/g,$.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,$.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,$.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,$.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,$.numPointLightShadows)}function UQ(H,$){return H.replace(/NUM_CLIPPING_PLANES/g,$.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,$.numClippingPlanes-$.numClipIntersection)}var g1=/^[ \t]*#include +<([\w\d./]+)>/gm;function xJ(H){return H.replace(g1,u1)}var p1=new Map;function u1(H,$){let J=u0[$];if(J===void 0){let Z=p1.get($);if(Z!==void 0)J=u0[Z],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',$,Z);else throw Error("Can not resolve #include <"+$+">")}return xJ(J)}var l1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function GQ(H){return H.replace(l1,m1)}function m1(H,$,J,Z){let W="";for(let Q=parseInt($);Q<parseInt(J);Q++)W+=Z.replace(/\[\s*i\s*\]/g,"[ "+Q+" ]").replace(/UNROLLED_LOOP_INDEX/g,Q);return W}function EQ(H){let $=`precision ${H.precision} float;
	precision ${H.precision} int;
	precision ${H.precision} sampler2D;
	precision ${H.precision} samplerCube;
	precision ${H.precision} sampler3D;
	precision ${H.precision} sampler2DArray;
	precision ${H.precision} sampler2DShadow;
	precision ${H.precision} samplerCubeShadow;
	precision ${H.precision} sampler2DArrayShadow;
	precision ${H.precision} isampler2D;
	precision ${H.precision} isampler3D;
	precision ${H.precision} isamplerCube;
	precision ${H.precision} isampler2DArray;
	precision ${H.precision} usampler2D;
	precision ${H.precision} usampler3D;
	precision ${H.precision} usamplerCube;
	precision ${H.precision} usampler2DArray;
	`;if(H.precision==="highp")$+=`
#define HIGH_PRECISION`;else if(H.precision==="mediump")$+=`
#define MEDIUM_PRECISION`;else if(H.precision==="lowp")$+=`
#define LOW_PRECISION`;return $}function d1(H){let $="SHADOWMAP_TYPE_BASIC";if(H.shadowMapType===M$)$="SHADOWMAP_TYPE_PCF";else if(H.shadowMapType===yZ)$="SHADOWMAP_TYPE_PCF_SOFT";else if(H.shadowMapType===H6)$="SHADOWMAP_TYPE_VSM";return $}function c1(H){let $="ENVMAP_TYPE_CUBE";if(H.envMap)switch(H.envMapMode){case I7:case l6:$="ENVMAP_TYPE_CUBE";break;case e7:$="ENVMAP_TYPE_CUBE_UV";break}return $}function n1(H){let $="ENVMAP_MODE_REFLECTION";if(H.envMap)switch(H.envMapMode){case l6:$="ENVMAP_MODE_REFRACTION";break}return $}function s1(H){let $="ENVMAP_BLENDING_NONE";if(H.envMap)switch(H.combine){case ZW:$="ENVMAP_BLENDING_MULTIPLY";break;case WW:$="ENVMAP_BLENDING_MIX";break;case QW:$="ENVMAP_BLENDING_ADD";break}return $}function i1(H){let $=H.envMapCubeUVHeight;if($===null)return null;let J=Math.log2($)-2,Z=1/$;return{texelWidth:1/(3*Math.max(Math.pow(2,J),112)),texelHeight:Z,maxMip:J}}function o1(H,$,J,Z){let W=H.getContext(),Q=J.defines,Y=J.vertexShader,X=J.fragmentShader,K=d1(J),U=c1(J),G=n1(J),E=s1(J),R=i1(J),q=y1(J),O=v1(Q),D=W.createProgram(),F,N,I=J.glslVersion?"#version "+J.glslVersion+`
`:"";if(J.isRawShaderMaterial){if(F=["#define SHADER_TYPE "+J.shaderType,"#define SHADER_NAME "+J.shaderName,O].filter(NH).join(`
`),F.length>0)F+=`
`;if(N=["#define SHADER_TYPE "+J.shaderType,"#define SHADER_NAME "+J.shaderName,O].filter(NH).join(`
`),N.length>0)N+=`
`}else F=[EQ(J),"#define SHADER_TYPE "+J.shaderType,"#define SHADER_NAME "+J.shaderName,O,J.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",J.batching?"#define USE_BATCHING":"",J.batchingColor?"#define USE_BATCHING_COLOR":"",J.instancing?"#define USE_INSTANCING":"",J.instancingColor?"#define USE_INSTANCING_COLOR":"",J.instancingMorph?"#define USE_INSTANCING_MORPH":"",J.useFog&&J.fog?"#define USE_FOG":"",J.useFog&&J.fogExp2?"#define FOG_EXP2":"",J.map?"#define USE_MAP":"",J.envMap?"#define USE_ENVMAP":"",J.envMap?"#define "+G:"",J.lightMap?"#define USE_LIGHTMAP":"",J.aoMap?"#define USE_AOMAP":"",J.bumpMap?"#define USE_BUMPMAP":"",J.normalMap?"#define USE_NORMALMAP":"",J.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",J.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",J.displacementMap?"#define USE_DISPLACEMENTMAP":"",J.emissiveMap?"#define USE_EMISSIVEMAP":"",J.anisotropy?"#define USE_ANISOTROPY":"",J.anisotropyMap?"#define USE_ANISOTROPYMAP":"",J.clearcoatMap?"#define USE_CLEARCOATMAP":"",J.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",J.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",J.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",J.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",J.specularMap?"#define USE_SPECULARMAP":"",J.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",J.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",J.roughnessMap?"#define USE_ROUGHNESSMAP":"",J.metalnessMap?"#define USE_METALNESSMAP":"",J.alphaMap?"#define USE_ALPHAMAP":"",J.alphaHash?"#define USE_ALPHAHASH":"",J.transmission?"#define USE_TRANSMISSION":"",J.transmissionMap?"#define USE_TRANSMISSIONMAP":"",J.thicknessMap?"#define USE_THICKNESSMAP":"",J.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",J.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",J.mapUv?"#define MAP_UV "+J.mapUv:"",J.alphaMapUv?"#define ALPHAMAP_UV "+J.alphaMapUv:"",J.lightMapUv?"#define LIGHTMAP_UV "+J.lightMapUv:"",J.aoMapUv?"#define AOMAP_UV "+J.aoMapUv:"",J.emissiveMapUv?"#define EMISSIVEMAP_UV "+J.emissiveMapUv:"",J.bumpMapUv?"#define BUMPMAP_UV "+J.bumpMapUv:"",J.normalMapUv?"#define NORMALMAP_UV "+J.normalMapUv:"",J.displacementMapUv?"#define DISPLACEMENTMAP_UV "+J.displacementMapUv:"",J.metalnessMapUv?"#define METALNESSMAP_UV "+J.metalnessMapUv:"",J.roughnessMapUv?"#define ROUGHNESSMAP_UV "+J.roughnessMapUv:"",J.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+J.anisotropyMapUv:"",J.clearcoatMapUv?"#define CLEARCOATMAP_UV "+J.clearcoatMapUv:"",J.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+J.clearcoatNormalMapUv:"",J.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+J.clearcoatRoughnessMapUv:"",J.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+J.iridescenceMapUv:"",J.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+J.iridescenceThicknessMapUv:"",J.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+J.sheenColorMapUv:"",J.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+J.sheenRoughnessMapUv:"",J.specularMapUv?"#define SPECULARMAP_UV "+J.specularMapUv:"",J.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+J.specularColorMapUv:"",J.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+J.specularIntensityMapUv:"",J.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+J.transmissionMapUv:"",J.thicknessMapUv?"#define THICKNESSMAP_UV "+J.thicknessMapUv:"",J.vertexTangents&&J.flatShading===!1?"#define USE_TANGENT":"",J.vertexColors?"#define USE_COLOR":"",J.vertexAlphas?"#define USE_COLOR_ALPHA":"",J.vertexUv1s?"#define USE_UV1":"",J.vertexUv2s?"#define USE_UV2":"",J.vertexUv3s?"#define USE_UV3":"",J.pointsUvs?"#define USE_POINTS_UV":"",J.flatShading?"#define FLAT_SHADED":"",J.skinning?"#define USE_SKINNING":"",J.morphTargets?"#define USE_MORPHTARGETS":"",J.morphNormals&&J.flatShading===!1?"#define USE_MORPHNORMALS":"",J.morphColors?"#define USE_MORPHCOLORS":"",J.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+J.morphTextureStride:"",J.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+J.morphTargetsCount:"",J.doubleSided?"#define DOUBLE_SIDED":"",J.flipSided?"#define FLIP_SIDED":"",J.shadowMapEnabled?"#define USE_SHADOWMAP":"",J.shadowMapEnabled?"#define "+K:"",J.sizeAttenuation?"#define USE_SIZEATTENUATION":"",J.numLightProbes>0?"#define USE_LIGHT_PROBES":"",J.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",J.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(NH).join(`
`),N=[EQ(J),"#define SHADER_TYPE "+J.shaderType,"#define SHADER_NAME "+J.shaderName,O,J.useFog&&J.fog?"#define USE_FOG":"",J.useFog&&J.fogExp2?"#define FOG_EXP2":"",J.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",J.map?"#define USE_MAP":"",J.matcap?"#define USE_MATCAP":"",J.envMap?"#define USE_ENVMAP":"",J.envMap?"#define "+U:"",J.envMap?"#define "+G:"",J.envMap?"#define "+E:"",R?"#define CUBEUV_TEXEL_WIDTH "+R.texelWidth:"",R?"#define CUBEUV_TEXEL_HEIGHT "+R.texelHeight:"",R?"#define CUBEUV_MAX_MIP "+R.maxMip+".0":"",J.lightMap?"#define USE_LIGHTMAP":"",J.aoMap?"#define USE_AOMAP":"",J.bumpMap?"#define USE_BUMPMAP":"",J.normalMap?"#define USE_NORMALMAP":"",J.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",J.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",J.emissiveMap?"#define USE_EMISSIVEMAP":"",J.anisotropy?"#define USE_ANISOTROPY":"",J.anisotropyMap?"#define USE_ANISOTROPYMAP":"",J.clearcoat?"#define USE_CLEARCOAT":"",J.clearcoatMap?"#define USE_CLEARCOATMAP":"",J.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",J.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",J.dispersion?"#define USE_DISPERSION":"",J.iridescence?"#define USE_IRIDESCENCE":"",J.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",J.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",J.specularMap?"#define USE_SPECULARMAP":"",J.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",J.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",J.roughnessMap?"#define USE_ROUGHNESSMAP":"",J.metalnessMap?"#define USE_METALNESSMAP":"",J.alphaMap?"#define USE_ALPHAMAP":"",J.alphaTest?"#define USE_ALPHATEST":"",J.alphaHash?"#define USE_ALPHAHASH":"",J.sheen?"#define USE_SHEEN":"",J.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",J.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",J.transmission?"#define USE_TRANSMISSION":"",J.transmissionMap?"#define USE_TRANSMISSIONMAP":"",J.thicknessMap?"#define USE_THICKNESSMAP":"",J.vertexTangents&&J.flatShading===!1?"#define USE_TANGENT":"",J.vertexColors||J.instancingColor||J.batchingColor?"#define USE_COLOR":"",J.vertexAlphas?"#define USE_COLOR_ALPHA":"",J.vertexUv1s?"#define USE_UV1":"",J.vertexUv2s?"#define USE_UV2":"",J.vertexUv3s?"#define USE_UV3":"",J.pointsUvs?"#define USE_POINTS_UV":"",J.gradientMap?"#define USE_GRADIENTMAP":"",J.flatShading?"#define FLAT_SHADED":"",J.doubleSided?"#define DOUBLE_SIDED":"",J.flipSided?"#define FLIP_SIDED":"",J.shadowMapEnabled?"#define USE_SHADOWMAP":"",J.shadowMapEnabled?"#define "+K:"",J.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",J.numLightProbes>0?"#define USE_LIGHT_PROBES":"",J.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",J.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",J.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",J.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",J.toneMapping!==N6?"#define TONE_MAPPING":"",J.toneMapping!==N6?u0.tonemapping_pars_fragment:"",J.toneMapping!==N6?h1("toneMapping",J.toneMapping):"",J.dithering?"#define DITHERING":"",J.opaque?"#define OPAQUE":"",u0.colorspace_pars_fragment,f1("linearToOutputTexel",J.outputColorSpace),x1(),J.useDepthPacking?"#define DEPTH_PACKING "+J.depthPacking:"",`
`].filter(NH).join(`
`);if(Y=xJ(Y),Y=KQ(Y,J),Y=UQ(Y,J),X=xJ(X),X=KQ(X,J),X=UQ(X,J),Y=GQ(Y),X=GQ(X),J.isRawShaderMaterial!==!0)I=`#version 300 es
`,F=[q,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+F,N=["#define varying in",J.glslVersion===JJ?"":"layout(location = 0) out highp vec4 pc_fragColor;",J.glslVersion===JJ?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+N;let L=I+F+Y,T=I+N+X,_=QQ(W,W.VERTEX_SHADER,L),w=QQ(W,W.FRAGMENT_SHADER,T);if(W.attachShader(D,_),W.attachShader(D,w),J.index0AttributeName!==void 0)W.bindAttribLocation(D,0,J.index0AttributeName);else if(J.morphTargets===!0)W.bindAttribLocation(D,0,"position");W.linkProgram(D);function B(A){if(H.debug.checkShaderErrors){let x=W.getProgramInfoLog(D).trim(),p=W.getShaderInfoLog(_).trim(),l=W.getShaderInfoLog(w).trim(),o=!0,d=!0;if(W.getProgramParameter(D,W.LINK_STATUS)===!1)if(o=!1,typeof H.debug.onShaderError==="function")H.debug.onShaderError(W,D,_,w);else{let t=XQ(W,_,"vertex"),m=XQ(W,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+W.getError()+" - VALIDATE_STATUS "+W.getProgramParameter(D,W.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+x+`
`+t+`
`+m)}else if(x!=="")console.warn("THREE.WebGLProgram: Program Info Log:",x);else if(p===""||l==="")d=!1;if(d)A.diagnostics={runnable:o,programLog:x,vertexShader:{log:p,prefix:F},fragmentShader:{log:l,prefix:N}}}W.deleteShader(_),W.deleteShader(w),b=new qH(W,D),C=b1(W,D)}let b;this.getUniforms=function(){if(b===void 0)B(this);return b};let C;this.getAttributes=function(){if(C===void 0)B(this);return C};let z=J.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(z===!1)z=W.getProgramParameter(D,A1);return z},this.destroy=function(){Z.releaseStatesOfProgram(this),W.deleteProgram(D),this.program=void 0},this.type=J.shaderType,this.name=J.shaderName,this.id=S1++,this.cacheKey=$,this.usedTimes=1,this.program=D,this.vertexShader=_,this.fragmentShader=w,this}var a1=0;class wQ{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(H){let{vertexShader:$,fragmentShader:J}=H,Z=this._getShaderStage($),W=this._getShaderStage(J),Q=this._getShaderCacheForMaterial(H);if(Q.has(Z)===!1)Q.add(Z),Z.usedTimes++;if(Q.has(W)===!1)Q.add(W),W.usedTimes++;return this}remove(H){let $=this.materialCache.get(H);for(let J of $)if(J.usedTimes--,J.usedTimes===0)this.shaderCache.delete(J.code);return this.materialCache.delete(H),this}getVertexShaderID(H){return this._getShaderStage(H.vertexShader).id}getFragmentShaderID(H){return this._getShaderStage(H.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(H){let $=this.materialCache,J=$.get(H);if(J===void 0)J=new Set,$.set(H,J);return J}_getShaderStage(H){let $=this.shaderCache,J=$.get(H);if(J===void 0)J=new IQ(H),$.set(H,J);return J}}class IQ{constructor(H){this.id=a1++,this.code=H,this.usedTimes=0}}function r1(H,$,J,Z,W,Q,Y){let X=new R9,K=new wQ,U=new Set,G=[],E=W.logarithmicDepthBuffer,R=W.vertexTextures,q=W.precision,O={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function D(C){if(U.add(C),C===0)return"uv";return`uv${C}`}function F(C,z,A,x,p){let l=x.fog,o=p.geometry,d=C.isMeshStandardMaterial?x.environment:null,t=(C.isMeshStandardMaterial?J:$).get(C.envMap||d),m=!!t&&t.mapping===e7?t.image.height:null,X0=O[C.type];if(C.precision!==null){if(q=W.getMaxPrecision(C.precision),q!==C.precision)console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",q,"instead.")}let H0=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,V0=H0!==void 0?H0.length:0,g0=0;if(o.morphAttributes.position!==void 0)g0=1;if(o.morphAttributes.normal!==void 0)g0=2;if(o.morphAttributes.color!==void 0)g0=3;let n,J0,D0,k0;if(X0){let t0=Y6[X0];n=t0.vertexShader,J0=t0.fragmentShader}else n=C.vertexShader,J0=C.fragmentShader,K.update(C),D0=K.getVertexShaderID(C),k0=K.getFragmentShaderID(C);let W0=H.getRenderTarget(),C0=H.state.buffers.depth.getReversed(),u=p.isInstancedMesh===!0,S0=p.isBatchedMesh===!0,n0=!!C.map,w0=!!C.matcap,P=!!t,l0=!!C.aoMap,P0=!!C.lightMap,_0=!!C.bumpMap,Y0=!!C.normalMap,o0=!!C.displacementMap,M0=!!C.emissiveMap,B0=!!C.metalnessMap,V=!!C.roughnessMap,M=C.anisotropy>0,y=C.clearcoat>0,a=C.dispersion>0,r=C.iridescence>0,c=C.sheen>0,I0=C.transmission>0,K0=M&&!!C.anisotropyMap,N0=y&&!!C.clearcoatMap,v0=y&&!!C.clearcoatNormalMap,Z0=y&&!!C.clearcoatRoughnessMap,R0=r&&!!C.iridescenceMap,c0=r&&!!C.iridescenceThicknessMap,j0=c&&!!C.sheenColorMap,q0=c&&!!C.sheenRoughnessMap,b0=!!C.specularMap,m0=!!C.specularColorMap,K8=!!C.specularIntensityMap,j=I0&&!!C.transmissionMap,$0=I0&&!!C.thicknessMap,s=!!C.gradientMap,i=!!C.alphaMap,E0=C.alphaTest>0,G0=!!C.alphaHash,p0=!!C.extensions,U8=N6;if(C.toneMapped){if(W0===null||W0.isXRRenderTarget===!0)U8=H.toneMapping}let M8={shaderID:X0,shaderType:C.type,shaderName:C.name,vertexShader:n,fragmentShader:J0,defines:C.defines,customVertexShaderID:D0,customFragmentShaderID:k0,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:q,batching:S0,batchingColor:S0&&p._colorsTexture!==null,instancing:u,instancingColor:u&&p.instanceColor!==null,instancingMorph:u&&p.morphTexture!==null,supportsVertexTextures:R,outputColorSpace:W0===null?H.outputColorSpace:W0.isXRRenderTarget===!0?W0.texture.colorSpace:QH,alphaToCoverage:!!C.alphaToCoverage,map:n0,matcap:w0,envMap:P,envMapMode:P&&t.mapping,envMapCubeUVHeight:m,aoMap:l0,lightMap:P0,bumpMap:_0,normalMap:Y0,displacementMap:R&&o0,emissiveMap:M0,normalMapObjectSpace:Y0&&C.normalMapType===PW,normalMapTangentSpace:Y0&&C.normalMapType===BW,metalnessMap:B0,roughnessMap:V,anisotropy:M,anisotropyMap:K0,clearcoat:y,clearcoatMap:N0,clearcoatNormalMap:v0,clearcoatRoughnessMap:Z0,dispersion:a,iridescence:r,iridescenceMap:R0,iridescenceThicknessMap:c0,sheen:c,sheenColorMap:j0,sheenRoughnessMap:q0,specularMap:b0,specularColorMap:m0,specularIntensityMap:K8,transmission:I0,transmissionMap:j,thicknessMap:$0,gradientMap:s,opaque:C.transparent===!1&&C.blending===r7&&C.alphaToCoverage===!1,alphaMap:i,alphaTest:E0,alphaHash:G0,combine:C.combine,mapUv:n0&&D(C.map.channel),aoMapUv:l0&&D(C.aoMap.channel),lightMapUv:P0&&D(C.lightMap.channel),bumpMapUv:_0&&D(C.bumpMap.channel),normalMapUv:Y0&&D(C.normalMap.channel),displacementMapUv:o0&&D(C.displacementMap.channel),emissiveMapUv:M0&&D(C.emissiveMap.channel),metalnessMapUv:B0&&D(C.metalnessMap.channel),roughnessMapUv:V&&D(C.roughnessMap.channel),anisotropyMapUv:K0&&D(C.anisotropyMap.channel),clearcoatMapUv:N0&&D(C.clearcoatMap.channel),clearcoatNormalMapUv:v0&&D(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z0&&D(C.clearcoatRoughnessMap.channel),iridescenceMapUv:R0&&D(C.iridescenceMap.channel),iridescenceThicknessMapUv:c0&&D(C.iridescenceThicknessMap.channel),sheenColorMapUv:j0&&D(C.sheenColorMap.channel),sheenRoughnessMapUv:q0&&D(C.sheenRoughnessMap.channel),specularMapUv:b0&&D(C.specularMap.channel),specularColorMapUv:m0&&D(C.specularColorMap.channel),specularIntensityMapUv:K8&&D(C.specularIntensityMap.channel),transmissionMapUv:j&&D(C.transmissionMap.channel),thicknessMapUv:$0&&D(C.thicknessMap.channel),alphaMapUv:i&&D(C.alphaMap.channel),vertexTangents:!!o.attributes.tangent&&(Y0||M),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!o.attributes.color&&o.attributes.color.itemSize===4,pointsUvs:p.isPoints===!0&&!!o.attributes.uv&&(n0||i),fog:!!l,useFog:C.fog===!0,fogExp2:!!l&&l.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:E,reverseDepthBuffer:C0,skinning:p.isSkinnedMesh===!0,morphTargets:o.morphAttributes.position!==void 0,morphNormals:o.morphAttributes.normal!==void 0,morphColors:o.morphAttributes.color!==void 0,morphTargetsCount:V0,morphTextureStride:g0,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numLightProbes:z.numLightProbes,numClippingPlanes:Y.numPlanes,numClipIntersection:Y.numIntersection,dithering:C.dithering,shadowMapEnabled:H.shadowMap.enabled&&A.length>0,shadowMapType:H.shadowMap.type,toneMapping:U8,decodeVideoTexture:n0&&C.map.isVideoTexture===!0&&i0.getTransfer(C.map.colorSpace)===Q8,decodeVideoTextureEmissive:M0&&C.emissiveMap.isVideoTexture===!0&&i0.getTransfer(C.emissiveMap.colorSpace)===Q8,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===d8,flipSided:C.side===A8,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:p0&&C.extensions.clipCullDistance===!0&&Z.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(p0&&C.extensions.multiDraw===!0||S0)&&Z.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:Z.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return M8.vertexUv1s=U.has(1),M8.vertexUv2s=U.has(2),M8.vertexUv3s=U.has(3),U.clear(),M8}function N(C){let z=[];if(C.shaderID)z.push(C.shaderID);else z.push(C.customVertexShaderID),z.push(C.customFragmentShaderID);if(C.defines!==void 0)for(let A in C.defines)z.push(A),z.push(C.defines[A]);if(C.isRawShaderMaterial===!1)I(z,C),L(z,C),z.push(H.outputColorSpace);return z.push(C.customProgramCacheKey),z.join()}function I(C,z){C.push(z.precision),C.push(z.outputColorSpace),C.push(z.envMapMode),C.push(z.envMapCubeUVHeight),C.push(z.mapUv),C.push(z.alphaMapUv),C.push(z.lightMapUv),C.push(z.aoMapUv),C.push(z.bumpMapUv),C.push(z.normalMapUv),C.push(z.displacementMapUv),C.push(z.emissiveMapUv),C.push(z.metalnessMapUv),C.push(z.roughnessMapUv),C.push(z.anisotropyMapUv),C.push(z.clearcoatMapUv),C.push(z.clearcoatNormalMapUv),C.push(z.clearcoatRoughnessMapUv),C.push(z.iridescenceMapUv),C.push(z.iridescenceThicknessMapUv),C.push(z.sheenColorMapUv),C.push(z.sheenRoughnessMapUv),C.push(z.specularMapUv),C.push(z.specularColorMapUv),C.push(z.specularIntensityMapUv),C.push(z.transmissionMapUv),C.push(z.thicknessMapUv),C.push(z.combine),C.push(z.fogExp2),C.push(z.sizeAttenuation),C.push(z.morphTargetsCount),C.push(z.morphAttributeCount),C.push(z.numDirLights),C.push(z.numPointLights),C.push(z.numSpotLights),C.push(z.numSpotLightMaps),C.push(z.numHemiLights),C.push(z.numRectAreaLights),C.push(z.numDirLightShadows),C.push(z.numPointLightShadows),C.push(z.numSpotLightShadows),C.push(z.numSpotLightShadowsWithMaps),C.push(z.numLightProbes),C.push(z.shadowMapType),C.push(z.toneMapping),C.push(z.numClippingPlanes),C.push(z.numClipIntersection),C.push(z.depthPacking)}function L(C,z){if(X.disableAll(),z.supportsVertexTextures)X.enable(0);if(z.instancing)X.enable(1);if(z.instancingColor)X.enable(2);if(z.instancingMorph)X.enable(3);if(z.matcap)X.enable(4);if(z.envMap)X.enable(5);if(z.normalMapObjectSpace)X.enable(6);if(z.normalMapTangentSpace)X.enable(7);if(z.clearcoat)X.enable(8);if(z.iridescence)X.enable(9);if(z.alphaTest)X.enable(10);if(z.vertexColors)X.enable(11);if(z.vertexAlphas)X.enable(12);if(z.vertexUv1s)X.enable(13);if(z.vertexUv2s)X.enable(14);if(z.vertexUv3s)X.enable(15);if(z.vertexTangents)X.enable(16);if(z.anisotropy)X.enable(17);if(z.alphaHash)X.enable(18);if(z.batching)X.enable(19);if(z.dispersion)X.enable(20);if(z.batchingColor)X.enable(21);if(C.push(X.mask),X.disableAll(),z.fog)X.enable(0);if(z.useFog)X.enable(1);if(z.flatShading)X.enable(2);if(z.logarithmicDepthBuffer)X.enable(3);if(z.reverseDepthBuffer)X.enable(4);if(z.skinning)X.enable(5);if(z.morphTargets)X.enable(6);if(z.morphNormals)X.enable(7);if(z.morphColors)X.enable(8);if(z.premultipliedAlpha)X.enable(9);if(z.shadowMapEnabled)X.enable(10);if(z.doubleSided)X.enable(11);if(z.flipSided)X.enable(12);if(z.useDepthPacking)X.enable(13);if(z.dithering)X.enable(14);if(z.transmission)X.enable(15);if(z.sheen)X.enable(16);if(z.opaque)X.enable(17);if(z.pointsUvs)X.enable(18);if(z.decodeVideoTexture)X.enable(19);if(z.decodeVideoTextureEmissive)X.enable(20);if(z.alphaToCoverage)X.enable(21);C.push(X.mask)}function T(C){let z=O[C.type],A;if(z){let x=Y6[z];A=uW.clone(x.uniforms)}else A=C.uniforms;return A}function _(C,z){let A;for(let x=0,p=G.length;x<p;x++){let l=G[x];if(l.cacheKey===z){A=l,++A.usedTimes;break}}if(A===void 0)A=new o1(H,z,C,Q),G.push(A);return A}function w(C){if(--C.usedTimes===0){let z=G.indexOf(C);G[z]=G[G.length-1],G.pop(),C.destroy()}}function B(C){K.remove(C)}function b(){K.dispose()}return{getParameters:F,getProgramCacheKey:N,getUniforms:T,acquireProgram:_,releaseProgram:w,releaseShaderCache:B,programs:G,dispose:b}}function t1(){let H=new WeakMap;function $(Y){return H.has(Y)}function J(Y){let X=H.get(Y);if(X===void 0)X={},H.set(Y,X);return X}function Z(Y){H.delete(Y)}function W(Y,X,K){H.get(Y)[X]=K}function Q(){H=new WeakMap}return{has:$,get:J,remove:Z,update:W,dispose:Q}}function e1(H,$){if(H.groupOrder!==$.groupOrder)return H.groupOrder-$.groupOrder;else if(H.renderOrder!==$.renderOrder)return H.renderOrder-$.renderOrder;else if(H.material.id!==$.material.id)return H.material.id-$.material.id;else if(H.z!==$.z)return H.z-$.z;else return H.id-$.id}function RQ(H,$){if(H.groupOrder!==$.groupOrder)return H.groupOrder-$.groupOrder;else if(H.renderOrder!==$.renderOrder)return H.renderOrder-$.renderOrder;else if(H.z!==$.z)return $.z-H.z;else return H.id-$.id}function FQ(){let H=[],$=0,J=[],Z=[],W=[];function Q(){$=0,J.length=0,Z.length=0,W.length=0}function Y(E,R,q,O,D,F){let N=H[$];if(N===void 0)N={id:E.id,object:E,geometry:R,material:q,groupOrder:O,renderOrder:E.renderOrder,z:D,group:F},H[$]=N;else N.id=E.id,N.object=E,N.geometry=R,N.material=q,N.groupOrder=O,N.renderOrder=E.renderOrder,N.z=D,N.group=F;return $++,N}function X(E,R,q,O,D,F){let N=Y(E,R,q,O,D,F);if(q.transmission>0)Z.push(N);else if(q.transparent===!0)W.push(N);else J.push(N)}function K(E,R,q,O,D,F){let N=Y(E,R,q,O,D,F);if(q.transmission>0)Z.unshift(N);else if(q.transparent===!0)W.unshift(N);else J.unshift(N)}function U(E,R){if(J.length>1)J.sort(E||e1);if(Z.length>1)Z.sort(R||RQ);if(W.length>1)W.sort(R||RQ)}function G(){for(let E=$,R=H.length;E<R;E++){let q=H[E];if(q.id===null)break;q.id=null,q.object=null,q.geometry=null,q.material=null,q.group=null}}return{opaque:J,transmissive:Z,transparent:W,init:Q,push:X,unshift:K,finish:G,sort:U}}function HG(){let H=new WeakMap;function $(Z,W){let Q=H.get(Z),Y;if(Q===void 0)Y=new FQ,H.set(Z,[Y]);else if(W>=Q.length)Y=new FQ,Q.push(Y);else Y=Q[W];return Y}function J(){H=new WeakMap}return{get:$,dispose:J}}function $G(){let H={};return{get:function($){if(H[$.id]!==void 0)return H[$.id];let J;switch($.type){case"DirectionalLight":J={direction:new S,color:new A0};break;case"SpotLight":J={position:new S,direction:new S,color:new A0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":J={position:new S,color:new A0,distance:0,decay:0};break;case"HemisphereLight":J={direction:new S,skyColor:new A0,groundColor:new A0};break;case"RectAreaLight":J={color:new A0,position:new S,halfWidth:new S,halfHeight:new S};break}return H[$.id]=J,J}}}function JG(){let H={};return{get:function($){if(H[$.id]!==void 0)return H[$.id];let J;switch($.type){case"DirectionalLight":J={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new T0};break;case"SpotLight":J={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new T0};break;case"PointLight":J={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new T0,shadowCameraNear:1,shadowCameraFar:1000};break}return H[$.id]=J,J}}}var ZG=0;function WG(H,$){return($.castShadow?2:0)-(H.castShadow?2:0)+($.map?1:0)-(H.map?1:0)}function QG(H){let $=new $G,J=JG(),Z={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)Z.probe.push(new S);let W=new S,Q=new W8,Y=new W8;function X(U){let G=0,E=0,R=0;for(let C=0;C<9;C++)Z.probe[C].set(0,0,0);let q=0,O=0,D=0,F=0,N=0,I=0,L=0,T=0,_=0,w=0,B=0;U.sort(WG);for(let C=0,z=U.length;C<z;C++){let A=U[C],x=A.color,p=A.intensity,l=A.distance,o=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)G+=x.r*p,E+=x.g*p,R+=x.b*p;else if(A.isLightProbe){for(let d=0;d<9;d++)Z.probe[d].addScaledVector(A.sh.coefficients[d],p);B++}else if(A.isDirectionalLight){let d=$.get(A);if(d.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let t=A.shadow,m=J.get(A);m.shadowIntensity=t.intensity,m.shadowBias=t.bias,m.shadowNormalBias=t.normalBias,m.shadowRadius=t.radius,m.shadowMapSize=t.mapSize,Z.directionalShadow[q]=m,Z.directionalShadowMap[q]=o,Z.directionalShadowMatrix[q]=A.shadow.matrix,I++}Z.directional[q]=d,q++}else if(A.isSpotLight){let d=$.get(A);d.position.setFromMatrixPosition(A.matrixWorld),d.color.copy(x).multiplyScalar(p),d.distance=l,d.coneCos=Math.cos(A.angle),d.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),d.decay=A.decay,Z.spot[D]=d;let t=A.shadow;if(A.map){if(Z.spotLightMap[_]=A.map,_++,t.updateMatrices(A),A.castShadow)w++}if(Z.spotLightMatrix[D]=t.matrix,A.castShadow){let m=J.get(A);m.shadowIntensity=t.intensity,m.shadowBias=t.bias,m.shadowNormalBias=t.normalBias,m.shadowRadius=t.radius,m.shadowMapSize=t.mapSize,Z.spotShadow[D]=m,Z.spotShadowMap[D]=o,T++}D++}else if(A.isRectAreaLight){let d=$.get(A);d.color.copy(x).multiplyScalar(p),d.halfWidth.set(A.width*0.5,0,0),d.halfHeight.set(0,A.height*0.5,0),Z.rectArea[F]=d,F++}else if(A.isPointLight){let d=$.get(A);if(d.color.copy(A.color).multiplyScalar(A.intensity),d.distance=A.distance,d.decay=A.decay,A.castShadow){let t=A.shadow,m=J.get(A);m.shadowIntensity=t.intensity,m.shadowBias=t.bias,m.shadowNormalBias=t.normalBias,m.shadowRadius=t.radius,m.shadowMapSize=t.mapSize,m.shadowCameraNear=t.camera.near,m.shadowCameraFar=t.camera.far,Z.pointShadow[O]=m,Z.pointShadowMap[O]=o,Z.pointShadowMatrix[O]=A.shadow.matrix,L++}Z.point[O]=d,O++}else if(A.isHemisphereLight){let d=$.get(A);d.skyColor.copy(A.color).multiplyScalar(p),d.groundColor.copy(A.groundColor).multiplyScalar(p),Z.hemi[N]=d,N++}}if(F>0)if(H.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=Q0.LTC_FLOAT_1,Z.rectAreaLTC2=Q0.LTC_FLOAT_2;else Z.rectAreaLTC1=Q0.LTC_HALF_1,Z.rectAreaLTC2=Q0.LTC_HALF_2;Z.ambient[0]=G,Z.ambient[1]=E,Z.ambient[2]=R;let b=Z.hash;if(b.directionalLength!==q||b.pointLength!==O||b.spotLength!==D||b.rectAreaLength!==F||b.hemiLength!==N||b.numDirectionalShadows!==I||b.numPointShadows!==L||b.numSpotShadows!==T||b.numSpotMaps!==_||b.numLightProbes!==B)Z.directional.length=q,Z.spot.length=D,Z.rectArea.length=F,Z.point.length=O,Z.hemi.length=N,Z.directionalShadow.length=I,Z.directionalShadowMap.length=I,Z.pointShadow.length=L,Z.pointShadowMap.length=L,Z.spotShadow.length=T,Z.spotShadowMap.length=T,Z.directionalShadowMatrix.length=I,Z.pointShadowMatrix.length=L,Z.spotLightMatrix.length=T+_-w,Z.spotLightMap.length=_,Z.numSpotLightShadowsWithMaps=w,Z.numLightProbes=B,b.directionalLength=q,b.pointLength=O,b.spotLength=D,b.rectAreaLength=F,b.hemiLength=N,b.numDirectionalShadows=I,b.numPointShadows=L,b.numSpotShadows=T,b.numSpotMaps=_,b.numLightProbes=B,Z.version=ZG++}function K(U,G){let E=0,R=0,q=0,O=0,D=0,F=G.matrixWorldInverse;for(let N=0,I=U.length;N<I;N++){let L=U[N];if(L.isDirectionalLight){let T=Z.directional[E];T.direction.setFromMatrixPosition(L.matrixWorld),W.setFromMatrixPosition(L.target.matrixWorld),T.direction.sub(W),T.direction.transformDirection(F),E++}else if(L.isSpotLight){let T=Z.spot[q];T.position.setFromMatrixPosition(L.matrixWorld),T.position.applyMatrix4(F),T.direction.setFromMatrixPosition(L.matrixWorld),W.setFromMatrixPosition(L.target.matrixWorld),T.direction.sub(W),T.direction.transformDirection(F),q++}else if(L.isRectAreaLight){let T=Z.rectArea[O];T.position.setFromMatrixPosition(L.matrixWorld),T.position.applyMatrix4(F),Y.identity(),Q.copy(L.matrixWorld),Q.premultiply(F),Y.extractRotation(Q),T.halfWidth.set(L.width*0.5,0,0),T.halfHeight.set(0,L.height*0.5,0),T.halfWidth.applyMatrix4(Y),T.halfHeight.applyMatrix4(Y),O++}else if(L.isPointLight){let T=Z.point[R];T.position.setFromMatrixPosition(L.matrixWorld),T.position.applyMatrix4(F),R++}else if(L.isHemisphereLight){let T=Z.hemi[D];T.direction.setFromMatrixPosition(L.matrixWorld),T.direction.transformDirection(F),D++}}}return{setup:X,setupView:K,state:Z}}function NQ(H){let $=new QG(H),J=[],Z=[];function W(G){U.camera=G,J.length=0,Z.length=0}function Q(G){J.push(G)}function Y(G){Z.push(G)}function X(){$.setup(J)}function K(G){$.setupView(J,G)}let U={lightsArray:J,shadowsArray:Z,camera:null,lights:$,transmissionRenderTarget:{}};return{init:W,state:U,setupLights:X,setupLightsView:K,pushLight:Q,pushShadow:Y}}function YG(H){let $=new WeakMap;function J(W,Q=0){let Y=$.get(W),X;if(Y===void 0)X=new NQ(H),$.set(W,[X]);else if(Q>=Y.length)X=new NQ(H),Y.push(X);else X=Y[Q];return X}function Z(){$=new WeakMap}return{get:J,dispose:Z}}var XG=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KG=`uniform sampler2D shadow_pass;
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
}`;function UG(H,$,J){let Z=new YH,W=new T0,Q=new T0,Y=new J8,X=new RJ({depthPacking:VW}),K=new FJ,U={},G=J.maxTextureSize,E={[z7]:A8,[A8]:z7,[d8]:d8},R=new W6({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new T0},radius:{value:4}},vertexShader:XG,fragmentShader:KG}),q=R.clone();q.defines.HORIZONTAL_PASS=1;let O=new C8;O.setAttribute("position",new l8(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let D=new r0(O,R),F=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=M$;let N=this.type;this.render=function(w,B,b){if(F.enabled===!1)return;if(F.autoUpdate===!1&&F.needsUpdate===!1)return;if(w.length===0)return;let C=H.getRenderTarget(),z=H.getActiveCubeFace(),A=H.getActiveMipmapLevel(),x=H.state;x.setBlending(A6),x.buffers.color.setClear(1,1,1,1),x.buffers.depth.setTest(!0),x.setScissorTest(!1);let p=N!==H6&&this.type===H6,l=N===H6&&this.type!==H6;for(let o=0,d=w.length;o<d;o++){let t=w[o],m=t.shadow;if(m===void 0){console.warn("THREE.WebGLShadowMap:",t,"has no shadow.");continue}if(m.autoUpdate===!1&&m.needsUpdate===!1)continue;W.copy(m.mapSize);let X0=m.getFrameExtents();if(W.multiply(X0),Q.copy(m.mapSize),W.x>G||W.y>G){if(W.x>G)Q.x=Math.floor(G/X0.x),W.x=Q.x*X0.x,m.mapSize.x=Q.x;if(W.y>G)Q.y=Math.floor(G/X0.y),W.y=Q.y*X0.y,m.mapSize.y=Q.y}if(m.map===null||p===!0||l===!0){let V0=this.type!==H6?{minFilter:V7,magFilter:V7}:{};if(m.map!==null)m.map.dispose();m.map=new O6(W.x,W.y,V0),m.map.texture.name=t.name+".shadowMap",m.camera.updateProjectionMatrix()}H.setRenderTarget(m.map),H.clear();let H0=m.getViewportCount();for(let V0=0;V0<H0;V0++){let g0=m.getViewport(V0);Y.set(Q.x*g0.x,Q.y*g0.y,Q.x*g0.z,Q.y*g0.w),x.viewport(Y),m.updateMatrices(t,V0),Z=m.getFrustum(),T(B,b,m.camera,t,this.type)}if(m.isPointLightShadow!==!0&&this.type===H6)I(m,b);m.needsUpdate=!1}N=this.type,F.needsUpdate=!1,H.setRenderTarget(C,z,A)};function I(w,B){let b=$.update(D);if(R.defines.VSM_SAMPLES!==w.blurSamples)R.defines.VSM_SAMPLES=w.blurSamples,q.defines.VSM_SAMPLES=w.blurSamples,R.needsUpdate=!0,q.needsUpdate=!0;if(w.mapPass===null)w.mapPass=new O6(W.x,W.y);R.uniforms.shadow_pass.value=w.map.texture,R.uniforms.resolution.value=w.mapSize,R.uniforms.radius.value=w.radius,H.setRenderTarget(w.mapPass),H.clear(),H.renderBufferDirect(B,null,b,R,D,null),q.uniforms.shadow_pass.value=w.mapPass.texture,q.uniforms.resolution.value=w.mapSize,q.uniforms.radius.value=w.radius,H.setRenderTarget(w.map),H.clear(),H.renderBufferDirect(B,null,b,q,D,null)}function L(w,B,b,C){let z=null,A=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)z=A;else if(z=b.isPointLight===!0?K:X,H.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){let x=z.uuid,p=B.uuid,l=U[x];if(l===void 0)l={},U[x]=l;let o=l[p];if(o===void 0)o=z.clone(),l[p]=o,B.addEventListener("dispose",_);z=o}if(z.visible=B.visible,z.wireframe=B.wireframe,C===H6)z.side=B.shadowSide!==null?B.shadowSide:B.side;else z.side=B.shadowSide!==null?B.shadowSide:E[B.side];if(z.alphaMap=B.alphaMap,z.alphaTest=B.alphaTest,z.map=B.map,z.clipShadows=B.clipShadows,z.clippingPlanes=B.clippingPlanes,z.clipIntersection=B.clipIntersection,z.displacementMap=B.displacementMap,z.displacementScale=B.displacementScale,z.displacementBias=B.displacementBias,z.wireframeLinewidth=B.wireframeLinewidth,z.linewidth=B.linewidth,b.isPointLight===!0&&z.isMeshDistanceMaterial===!0){let x=H.properties.get(z);x.light=b}return z}function T(w,B,b,C,z){if(w.visible===!1)return;if(w.layers.test(B.layers)&&(w.isMesh||w.isLine||w.isPoints)){if((w.castShadow||w.receiveShadow&&z===H6)&&(!w.frustumCulled||Z.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);let p=$.update(w),l=w.material;if(Array.isArray(l)){let o=p.groups;for(let d=0,t=o.length;d<t;d++){let m=o[d],X0=l[m.materialIndex];if(X0&&X0.visible){let H0=L(w,X0,C,z);w.onBeforeShadow(H,w,B,b,p,H0,m),H.renderBufferDirect(b,null,p,H0,w,m),w.onAfterShadow(H,w,B,b,p,H0,m)}}}else if(l.visible){let o=L(w,l,C,z);w.onBeforeShadow(H,w,B,b,p,o,null),H.renderBufferDirect(b,null,p,o,w,null),w.onAfterShadow(H,w,B,b,p,o,null)}}}let x=w.children;for(let p=0,l=x.length;p<l;p++)T(x[p],B,b,C,z)}function _(w){w.target.removeEventListener("dispose",_);for(let b in U){let C=U[b],z=w.target.uuid;if(z in C)C[z].dispose(),delete C[z]}}}var GG={[sH]:iH,[oH]:tH,[aH]:eH,[t7]:rH,[iH]:sH,[tH]:oH,[eH]:aH,[rH]:t7};function EG(H,$){function J(){let j=!1,$0=new J8,s=null,i=new J8(0,0,0,0);return{setMask:function(E0){if(s!==E0&&!j)H.colorMask(E0,E0,E0,E0),s=E0},setLocked:function(E0){j=E0},setClear:function(E0,G0,p0,U8,M8){if(M8===!0)E0*=U8,G0*=U8,p0*=U8;if($0.set(E0,G0,p0,U8),i.equals($0)===!1)H.clearColor(E0,G0,p0,U8),i.copy($0)},reset:function(){j=!1,s=null,i.set(-1,0,0,0)}}}function Z(){let j=!1,$0=!1,s=null,i=null,E0=null;return{setReversed:function(G0){if($0!==G0){let p0=$.get("EXT_clip_control");if($0)p0.clipControlEXT(p0.LOWER_LEFT_EXT,p0.ZERO_TO_ONE_EXT);else p0.clipControlEXT(p0.LOWER_LEFT_EXT,p0.NEGATIVE_ONE_TO_ONE_EXT);let U8=E0;E0=null,this.setClear(U8)}$0=G0},getReversed:function(){return $0},setTest:function(G0){if(G0)W0(H.DEPTH_TEST);else C0(H.DEPTH_TEST)},setMask:function(G0){if(s!==G0&&!j)H.depthMask(G0),s=G0},setFunc:function(G0){if($0)G0=GG[G0];if(i!==G0){switch(G0){case sH:H.depthFunc(H.NEVER);break;case iH:H.depthFunc(H.ALWAYS);break;case oH:H.depthFunc(H.LESS);break;case t7:H.depthFunc(H.LEQUAL);break;case aH:H.depthFunc(H.EQUAL);break;case rH:H.depthFunc(H.GEQUAL);break;case tH:H.depthFunc(H.GREATER);break;case eH:H.depthFunc(H.NOTEQUAL);break;default:H.depthFunc(H.LEQUAL)}i=G0}},setLocked:function(G0){j=G0},setClear:function(G0){if(E0!==G0){if($0)G0=1-G0;H.clearDepth(G0),E0=G0}},reset:function(){j=!1,s=null,i=null,E0=null,$0=!1}}}function W(){let j=!1,$0=null,s=null,i=null,E0=null,G0=null,p0=null,U8=null,M8=null;return{setTest:function(t0){if(!j)if(t0)W0(H.STENCIL_TEST);else C0(H.STENCIL_TEST)},setMask:function(t0){if($0!==t0&&!j)H.stencilMask(t0),$0=t0},setFunc:function(t0,X6,e8){if(s!==t0||i!==X6||E0!==e8)H.stencilFunc(t0,X6,e8),s=t0,i=X6,E0=e8},setOp:function(t0,X6,e8){if(G0!==t0||p0!==X6||U8!==e8)H.stencilOp(t0,X6,e8),G0=t0,p0=X6,U8=e8},setLocked:function(t0){j=t0},setClear:function(t0){if(M8!==t0)H.clearStencil(t0),M8=t0},reset:function(){j=!1,$0=null,s=null,i=null,E0=null,G0=null,p0=null,U8=null,M8=null}}}let Q=new J,Y=new Z,X=new W,K=new WeakMap,U=new WeakMap,G={},E={},R=new WeakMap,q=[],O=null,D=!1,F=null,N=null,I=null,L=null,T=null,_=null,w=null,B=new A0(0,0,0),b=0,C=!1,z=null,A=null,x=null,p=null,l=null,o=H.getParameter(H.MAX_COMBINED_TEXTURE_IMAGE_UNITS),d=!1,t=0,m=H.getParameter(H.VERSION);if(m.indexOf("WebGL")!==-1)t=parseFloat(/^WebGL (\d)/.exec(m)[1]),d=t>=1;else if(m.indexOf("OpenGL ES")!==-1)t=parseFloat(/^OpenGL ES (\d)/.exec(m)[1]),d=t>=2;let X0=null,H0={},V0=H.getParameter(H.SCISSOR_BOX),g0=H.getParameter(H.VIEWPORT),n=new J8().fromArray(V0),J0=new J8().fromArray(g0);function D0(j,$0,s,i){let E0=new Uint8Array(4),G0=H.createTexture();H.bindTexture(j,G0),H.texParameteri(j,H.TEXTURE_MIN_FILTER,H.NEAREST),H.texParameteri(j,H.TEXTURE_MAG_FILTER,H.NEAREST);for(let p0=0;p0<s;p0++)if(j===H.TEXTURE_3D||j===H.TEXTURE_2D_ARRAY)H.texImage3D($0,0,H.RGBA,1,1,i,0,H.RGBA,H.UNSIGNED_BYTE,E0);else H.texImage2D($0+p0,0,H.RGBA,1,1,0,H.RGBA,H.UNSIGNED_BYTE,E0);return G0}let k0={};k0[H.TEXTURE_2D]=D0(H.TEXTURE_2D,H.TEXTURE_2D,1),k0[H.TEXTURE_CUBE_MAP]=D0(H.TEXTURE_CUBE_MAP,H.TEXTURE_CUBE_MAP_POSITIVE_X,6),k0[H.TEXTURE_2D_ARRAY]=D0(H.TEXTURE_2D_ARRAY,H.TEXTURE_2D_ARRAY,1,1),k0[H.TEXTURE_3D]=D0(H.TEXTURE_3D,H.TEXTURE_3D,1,1),Q.setClear(0,0,0,1),Y.setClear(1),X.setClear(0),W0(H.DEPTH_TEST),Y.setFunc(t7),_0(!1),Y0(D$),W0(H.CULL_FACE),l0(A6);function W0(j){if(G[j]!==!0)H.enable(j),G[j]=!0}function C0(j){if(G[j]!==!1)H.disable(j),G[j]=!1}function u(j,$0){if(E[j]!==$0){if(H.bindFramebuffer(j,$0),E[j]=$0,j===H.DRAW_FRAMEBUFFER)E[H.FRAMEBUFFER]=$0;if(j===H.FRAMEBUFFER)E[H.DRAW_FRAMEBUFFER]=$0;return!0}return!1}function S0(j,$0){let s=q,i=!1;if(j){if(s=R.get($0),s===void 0)s=[],R.set($0,s);let E0=j.textures;if(s.length!==E0.length||s[0]!==H.COLOR_ATTACHMENT0){for(let G0=0,p0=E0.length;G0<p0;G0++)s[G0]=H.COLOR_ATTACHMENT0+G0;s.length=E0.length,i=!0}}else if(s[0]!==H.BACK)s[0]=H.BACK,i=!0;if(i)H.drawBuffers(s)}function n0(j){if(O!==j)return H.useProgram(j),O=j,!0;return!1}let w0={[w7]:H.FUNC_ADD,[bZ]:H.FUNC_SUBTRACT,[gZ]:H.FUNC_REVERSE_SUBTRACT};w0[pZ]=H.MIN,w0[uZ]=H.MAX;let P={[lZ]:H.ZERO,[mZ]:H.ONE,[dZ]:H.SRC_COLOR,[nZ]:H.SRC_ALPHA,[tZ]:H.SRC_ALPHA_SATURATE,[aZ]:H.DST_COLOR,[iZ]:H.DST_ALPHA,[cZ]:H.ONE_MINUS_SRC_COLOR,[sZ]:H.ONE_MINUS_SRC_ALPHA,[rZ]:H.ONE_MINUS_DST_COLOR,[oZ]:H.ONE_MINUS_DST_ALPHA,[eZ]:H.CONSTANT_COLOR,[HW]:H.ONE_MINUS_CONSTANT_COLOR,[$W]:H.CONSTANT_ALPHA,[JW]:H.ONE_MINUS_CONSTANT_ALPHA};function l0(j,$0,s,i,E0,G0,p0,U8,M8,t0){if(j===A6){if(D===!0)C0(H.BLEND),D=!1;return}if(D===!1)W0(H.BLEND),D=!0;if(j!==vZ){if(j!==F||t0!==C){if(N!==w7||T!==w7)H.blendEquation(H.FUNC_ADD),N=w7,T=w7;if(t0)switch(j){case r7:H.blendFuncSeparate(H.ONE,H.ONE_MINUS_SRC_ALPHA,H.ONE,H.ONE_MINUS_SRC_ALPHA);break;case k$:H.blendFunc(H.ONE,H.ONE);break;case L$:H.blendFuncSeparate(H.ZERO,H.ONE_MINUS_SRC_COLOR,H.ZERO,H.ONE);break;case C$:H.blendFuncSeparate(H.ZERO,H.SRC_COLOR,H.ZERO,H.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case r7:H.blendFuncSeparate(H.SRC_ALPHA,H.ONE_MINUS_SRC_ALPHA,H.ONE,H.ONE_MINUS_SRC_ALPHA);break;case k$:H.blendFunc(H.SRC_ALPHA,H.ONE);break;case L$:H.blendFuncSeparate(H.ZERO,H.ONE_MINUS_SRC_COLOR,H.ZERO,H.ONE);break;case C$:H.blendFunc(H.ZERO,H.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}I=null,L=null,_=null,w=null,B.set(0,0,0),b=0,F=j,C=t0}return}if(E0=E0||$0,G0=G0||s,p0=p0||i,$0!==N||E0!==T)H.blendEquationSeparate(w0[$0],w0[E0]),N=$0,T=E0;if(s!==I||i!==L||G0!==_||p0!==w)H.blendFuncSeparate(P[s],P[i],P[G0],P[p0]),I=s,L=i,_=G0,w=p0;if(U8.equals(B)===!1||M8!==b)H.blendColor(U8.r,U8.g,U8.b,M8),B.copy(U8),b=M8;F=j,C=!1}function P0(j,$0){j.side===d8?C0(H.CULL_FACE):W0(H.CULL_FACE);let s=j.side===A8;if($0)s=!s;_0(s),j.blending===r7&&j.transparent===!1?l0(A6):l0(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),Y.setFunc(j.depthFunc),Y.setTest(j.depthTest),Y.setMask(j.depthWrite),Q.setMask(j.colorWrite);let i=j.stencilWrite;if(X.setTest(i),i)X.setMask(j.stencilWriteMask),X.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),X.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass);M0(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?W0(H.SAMPLE_ALPHA_TO_COVERAGE):C0(H.SAMPLE_ALPHA_TO_COVERAGE)}function _0(j){if(z!==j){if(j)H.frontFace(H.CW);else H.frontFace(H.CCW);z=j}}function Y0(j){if(j!==hZ){if(W0(H.CULL_FACE),j!==A)if(j===D$)H.cullFace(H.BACK);else if(j===xZ)H.cullFace(H.FRONT);else H.cullFace(H.FRONT_AND_BACK)}else C0(H.CULL_FACE);A=j}function o0(j){if(j!==x){if(d)H.lineWidth(j);x=j}}function M0(j,$0,s){if(j){if(W0(H.POLYGON_OFFSET_FILL),p!==$0||l!==s)H.polygonOffset($0,s),p=$0,l=s}else C0(H.POLYGON_OFFSET_FILL)}function B0(j){if(j)W0(H.SCISSOR_TEST);else C0(H.SCISSOR_TEST)}function V(j){if(j===void 0)j=H.TEXTURE0+o-1;if(X0!==j)H.activeTexture(j),X0=j}function M(j,$0,s){if(s===void 0)if(X0===null)s=H.TEXTURE0+o-1;else s=X0;let i=H0[s];if(i===void 0)i={type:void 0,texture:void 0},H0[s]=i;if(i.type!==j||i.texture!==$0){if(X0!==s)H.activeTexture(s),X0=s;H.bindTexture(j,$0||k0[j]),i.type=j,i.texture=$0}}function y(){let j=H0[X0];if(j!==void 0&&j.type!==void 0)H.bindTexture(j.type,null),j.type=void 0,j.texture=void 0}function a(){try{H.compressedTexImage2D.apply(H,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function r(){try{H.compressedTexImage3D.apply(H,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function c(){try{H.texSubImage2D.apply(H,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function I0(){try{H.texSubImage3D.apply(H,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function K0(){try{H.compressedTexSubImage2D.apply(H,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function N0(){try{H.compressedTexSubImage3D.apply(H,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function v0(){try{H.texStorage2D.apply(H,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Z0(){try{H.texStorage3D.apply(H,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function R0(){try{H.texImage2D.apply(H,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function c0(){try{H.texImage3D.apply(H,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function j0(j){if(n.equals(j)===!1)H.scissor(j.x,j.y,j.z,j.w),n.copy(j)}function q0(j){if(J0.equals(j)===!1)H.viewport(j.x,j.y,j.z,j.w),J0.copy(j)}function b0(j,$0){let s=U.get($0);if(s===void 0)s=new WeakMap,U.set($0,s);let i=s.get(j);if(i===void 0)i=H.getUniformBlockIndex($0,j.name),s.set(j,i)}function m0(j,$0){let i=U.get($0).get(j);if(K.get($0)!==i)H.uniformBlockBinding($0,i,j.__bindingPointIndex),K.set($0,i)}function K8(){H.disable(H.BLEND),H.disable(H.CULL_FACE),H.disable(H.DEPTH_TEST),H.disable(H.POLYGON_OFFSET_FILL),H.disable(H.SCISSOR_TEST),H.disable(H.STENCIL_TEST),H.disable(H.SAMPLE_ALPHA_TO_COVERAGE),H.blendEquation(H.FUNC_ADD),H.blendFunc(H.ONE,H.ZERO),H.blendFuncSeparate(H.ONE,H.ZERO,H.ONE,H.ZERO),H.blendColor(0,0,0,0),H.colorMask(!0,!0,!0,!0),H.clearColor(0,0,0,0),H.depthMask(!0),H.depthFunc(H.LESS),Y.setReversed(!1),H.clearDepth(1),H.stencilMask(4294967295),H.stencilFunc(H.ALWAYS,0,4294967295),H.stencilOp(H.KEEP,H.KEEP,H.KEEP),H.clearStencil(0),H.cullFace(H.BACK),H.frontFace(H.CCW),H.polygonOffset(0,0),H.activeTexture(H.TEXTURE0),H.bindFramebuffer(H.FRAMEBUFFER,null),H.bindFramebuffer(H.DRAW_FRAMEBUFFER,null),H.bindFramebuffer(H.READ_FRAMEBUFFER,null),H.useProgram(null),H.lineWidth(1),H.scissor(0,0,H.canvas.width,H.canvas.height),H.viewport(0,0,H.canvas.width,H.canvas.height),G={},X0=null,H0={},E={},R=new WeakMap,q=[],O=null,D=!1,F=null,N=null,I=null,L=null,T=null,_=null,w=null,B=new A0(0,0,0),b=0,C=!1,z=null,A=null,x=null,p=null,l=null,n.set(0,0,H.canvas.width,H.canvas.height),J0.set(0,0,H.canvas.width,H.canvas.height),Q.reset(),Y.reset(),X.reset()}return{buffers:{color:Q,depth:Y,stencil:X},enable:W0,disable:C0,bindFramebuffer:u,drawBuffers:S0,useProgram:n0,setBlending:l0,setMaterial:P0,setFlipSided:_0,setCullFace:Y0,setLineWidth:o0,setPolygonOffset:M0,setScissorTest:B0,activeTexture:V,bindTexture:M,unbindTexture:y,compressedTexImage2D:a,compressedTexImage3D:r,texImage2D:R0,texImage3D:c0,updateUBOMapping:b0,uniformBlockBinding:m0,texStorage2D:v0,texStorage3D:Z0,texSubImage2D:c,texSubImage3D:I0,compressedTexSubImage2D:K0,compressedTexSubImage3D:N0,scissor:j0,viewport:q0,reset:K8}}function RG(H,$,J,Z,W,Q,Y){let X=$.has("WEBGL_multisampled_render_to_texture")?$.get("WEBGL_multisampled_render_to_texture"):null,K=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new T0,G=new WeakMap,E,R=new WeakMap,q=!1;try{q=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(V){}function O(V,M){return q?new OffscreenCanvas(V,M):C7("canvas")}function D(V,M,y){let a=1,r=B0(V);if(r.width>y||r.height>y)a=y/Math.max(r.width,r.height);if(a<1)if(typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&V instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&V instanceof ImageBitmap||typeof VideoFrame<"u"&&V instanceof VideoFrame){let c=Math.floor(a*r.width),I0=Math.floor(a*r.height);if(E===void 0)E=O(c,I0);let K0=M?O(c,I0):E;return K0.width=c,K0.height=I0,K0.getContext("2d").drawImage(V,0,0,c,I0),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+r.width+"x"+r.height+") to ("+c+"x"+I0+")."),K0}else{if("data"in V)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+r.width+"x"+r.height+").");return V}return V}function F(V){return V.generateMipmaps}function N(V){H.generateMipmap(V)}function I(V){if(V.isWebGLCubeRenderTarget)return H.TEXTURE_CUBE_MAP;if(V.isWebGL3DRenderTarget)return H.TEXTURE_3D;if(V.isWebGLArrayRenderTarget||V.isCompressedArrayTexture)return H.TEXTURE_2D_ARRAY;return H.TEXTURE_2D}function L(V,M,y,a,r=!1){if(V!==null){if(H[V]!==void 0)return H[V];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+V+"'")}let c=M;if(M===H.RED){if(y===H.FLOAT)c=H.R32F;if(y===H.HALF_FLOAT)c=H.R16F;if(y===H.UNSIGNED_BYTE)c=H.R8}if(M===H.RED_INTEGER){if(y===H.UNSIGNED_BYTE)c=H.R8UI;if(y===H.UNSIGNED_SHORT)c=H.R16UI;if(y===H.UNSIGNED_INT)c=H.R32UI;if(y===H.BYTE)c=H.R8I;if(y===H.SHORT)c=H.R16I;if(y===H.INT)c=H.R32I}if(M===H.RG){if(y===H.FLOAT)c=H.RG32F;if(y===H.HALF_FLOAT)c=H.RG16F;if(y===H.UNSIGNED_BYTE)c=H.RG8}if(M===H.RG_INTEGER){if(y===H.UNSIGNED_BYTE)c=H.RG8UI;if(y===H.UNSIGNED_SHORT)c=H.RG16UI;if(y===H.UNSIGNED_INT)c=H.RG32UI;if(y===H.BYTE)c=H.RG8I;if(y===H.SHORT)c=H.RG16I;if(y===H.INT)c=H.RG32I}if(M===H.RGB_INTEGER){if(y===H.UNSIGNED_BYTE)c=H.RGB8UI;if(y===H.UNSIGNED_SHORT)c=H.RGB16UI;if(y===H.UNSIGNED_INT)c=H.RGB32UI;if(y===H.BYTE)c=H.RGB8I;if(y===H.SHORT)c=H.RGB16I;if(y===H.INT)c=H.RGB32I}if(M===H.RGBA_INTEGER){if(y===H.UNSIGNED_BYTE)c=H.RGBA8UI;if(y===H.UNSIGNED_SHORT)c=H.RGBA16UI;if(y===H.UNSIGNED_INT)c=H.RGBA32UI;if(y===H.BYTE)c=H.RGBA8I;if(y===H.SHORT)c=H.RGBA16I;if(y===H.INT)c=H.RGBA32I}if(M===H.RGB){if(y===H.UNSIGNED_INT_5_9_9_9_REV)c=H.RGB9_E5}if(M===H.RGBA){let I0=r?HJ:i0.getTransfer(a);if(y===H.FLOAT)c=H.RGBA32F;if(y===H.HALF_FLOAT)c=H.RGBA16F;if(y===H.UNSIGNED_BYTE)c=I0===Q8?H.SRGB8_ALPHA8:H.RGBA8;if(y===H.UNSIGNED_SHORT_4_4_4_4)c=H.RGBA4;if(y===H.UNSIGNED_SHORT_5_5_5_1)c=H.RGB5_A1}if(c===H.R16F||c===H.R32F||c===H.RG16F||c===H.RG32F||c===H.RGBA16F||c===H.RGBA32F)$.get("EXT_color_buffer_float");return c}function T(V,M){let y;if(V){if(M===null||M===P7||M===T7)y=H.DEPTH24_STENCIL8;else if(M===_6)y=H.DEPTH32F_STENCIL8;else if(M===JH)y=H.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(M===null||M===P7||M===T7)y=H.DEPTH_COMPONENT24;else if(M===_6)y=H.DEPTH_COMPONENT32F;else if(M===JH)y=H.DEPTH_COMPONENT16;return y}function _(V,M){if(F(V)===!0||V.isFramebufferTexture&&V.minFilter!==V7&&V.minFilter!==m6)return Math.log2(Math.max(M.width,M.height))+1;else if(V.mipmaps!==void 0&&V.mipmaps.length>0)return V.mipmaps.length;else if(V.isCompressedTexture&&Array.isArray(V.image))return M.mipmaps.length;else return 1}function w(V){let M=V.target;if(M.removeEventListener("dispose",w),b(M),M.isVideoTexture)G.delete(M)}function B(V){let M=V.target;M.removeEventListener("dispose",B),z(M)}function b(V){let M=Z.get(V);if(M.__webglInit===void 0)return;let y=V.source,a=R.get(y);if(a){let r=a[M.__cacheKey];if(r.usedTimes--,r.usedTimes===0)C(V);if(Object.keys(a).length===0)R.delete(y)}Z.remove(V)}function C(V){let M=Z.get(V);H.deleteTexture(M.__webglTexture);let y=V.source,a=R.get(y);delete a[M.__cacheKey],Y.memory.textures--}function z(V){let M=Z.get(V);if(V.depthTexture)V.depthTexture.dispose(),Z.remove(V.depthTexture);if(V.isWebGLCubeRenderTarget)for(let a=0;a<6;a++){if(Array.isArray(M.__webglFramebuffer[a]))for(let r=0;r<M.__webglFramebuffer[a].length;r++)H.deleteFramebuffer(M.__webglFramebuffer[a][r]);else H.deleteFramebuffer(M.__webglFramebuffer[a]);if(M.__webglDepthbuffer)H.deleteRenderbuffer(M.__webglDepthbuffer[a])}else{if(Array.isArray(M.__webglFramebuffer))for(let a=0;a<M.__webglFramebuffer.length;a++)H.deleteFramebuffer(M.__webglFramebuffer[a]);else H.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer)H.deleteRenderbuffer(M.__webglDepthbuffer);if(M.__webglMultisampledFramebuffer)H.deleteFramebuffer(M.__webglMultisampledFramebuffer);if(M.__webglColorRenderbuffer){for(let a=0;a<M.__webglColorRenderbuffer.length;a++)if(M.__webglColorRenderbuffer[a])H.deleteRenderbuffer(M.__webglColorRenderbuffer[a])}if(M.__webglDepthRenderbuffer)H.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let y=V.textures;for(let a=0,r=y.length;a<r;a++){let c=Z.get(y[a]);if(c.__webglTexture)H.deleteTexture(c.__webglTexture),Y.memory.textures--;Z.remove(y[a])}Z.remove(V)}let A=0;function x(){A=0}function p(){let V=A;if(V>=W.maxTextures)console.warn("THREE.WebGLTextures: Trying to use "+V+" texture units while this GPU supports only "+W.maxTextures);return A+=1,V}function l(V){let M=[];return M.push(V.wrapS),M.push(V.wrapT),M.push(V.wrapR||0),M.push(V.magFilter),M.push(V.minFilter),M.push(V.anisotropy),M.push(V.internalFormat),M.push(V.format),M.push(V.type),M.push(V.generateMipmaps),M.push(V.premultiplyAlpha),M.push(V.flipY),M.push(V.unpackAlignment),M.push(V.colorSpace),M.join()}function o(V,M){let y=Z.get(V);if(V.isVideoTexture)o0(V);if(V.isRenderTargetTexture===!1&&V.version>0&&y.__version!==V.version){let a=V.image;if(a===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(a.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J0(y,V,M);return}}J.bindTexture(H.TEXTURE_2D,y.__webglTexture,H.TEXTURE0+M)}function d(V,M){let y=Z.get(V);if(V.version>0&&y.__version!==V.version){J0(y,V,M);return}J.bindTexture(H.TEXTURE_2D_ARRAY,y.__webglTexture,H.TEXTURE0+M)}function t(V,M){let y=Z.get(V);if(V.version>0&&y.__version!==V.version){J0(y,V,M);return}J.bindTexture(H.TEXTURE_3D,y.__webglTexture,H.TEXTURE0+M)}function m(V,M){let y=Z.get(V);if(V.version>0&&y.__version!==V.version){D0(y,V,M);return}J.bindTexture(H.TEXTURE_CUBE_MAP,y.__webglTexture,H.TEXTURE0+M)}let X0={[HH]:H.REPEAT,[RW]:H.CLAMP_TO_EDGE,[FW]:H.MIRRORED_REPEAT},H0={[V7]:H.NEAREST,[NW]:H.NEAREST_MIPMAP_NEAREST,[$H]:H.NEAREST_MIPMAP_LINEAR,[m6]:H.LINEAR,[Z9]:H.LINEAR_MIPMAP_NEAREST,[B7]:H.LINEAR_MIPMAP_LINEAR},V0={[TW]:H.NEVER,[hW]:H.ALWAYS,[AW]:H.LESS,[$J]:H.LEQUAL,[SW]:H.EQUAL,[fW]:H.GEQUAL,[_W]:H.GREATER,[jW]:H.NOTEQUAL};function g0(V,M){if(M.type===_6&&$.has("OES_texture_float_linear")===!1&&(M.magFilter===m6||M.magFilter===Z9||M.magFilter===$H||M.magFilter===B7||M.minFilter===m6||M.minFilter===Z9||M.minFilter===$H||M.minFilter===B7))console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(H.texParameteri(V,H.TEXTURE_WRAP_S,X0[M.wrapS]),H.texParameteri(V,H.TEXTURE_WRAP_T,X0[M.wrapT]),V===H.TEXTURE_3D||V===H.TEXTURE_2D_ARRAY)H.texParameteri(V,H.TEXTURE_WRAP_R,X0[M.wrapR]);if(H.texParameteri(V,H.TEXTURE_MAG_FILTER,H0[M.magFilter]),H.texParameteri(V,H.TEXTURE_MIN_FILTER,H0[M.minFilter]),M.compareFunction)H.texParameteri(V,H.TEXTURE_COMPARE_MODE,H.COMPARE_REF_TO_TEXTURE),H.texParameteri(V,H.TEXTURE_COMPARE_FUNC,V0[M.compareFunction]);if($.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===V7)return;if(M.minFilter!==$H&&M.minFilter!==B7)return;if(M.type===_6&&$.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||Z.get(M).__currentAnisotropy){let y=$.get("EXT_texture_filter_anisotropic");H.texParameterf(V,y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,W.getMaxAnisotropy())),Z.get(M).__currentAnisotropy=M.anisotropy}}}function n(V,M){let y=!1;if(V.__webglInit===void 0)V.__webglInit=!0,M.addEventListener("dispose",w);let a=M.source,r=R.get(a);if(r===void 0)r={},R.set(a,r);let c=l(M);if(c!==V.__cacheKey){if(r[c]===void 0)r[c]={texture:H.createTexture(),usedTimes:0},Y.memory.textures++,y=!0;r[c].usedTimes++;let I0=r[V.__cacheKey];if(I0!==void 0){if(r[V.__cacheKey].usedTimes--,I0.usedTimes===0)C(M)}V.__cacheKey=c,V.__webglTexture=r[c].texture}return y}function J0(V,M,y){let a=H.TEXTURE_2D;if(M.isDataArrayTexture||M.isCompressedArrayTexture)a=H.TEXTURE_2D_ARRAY;if(M.isData3DTexture)a=H.TEXTURE_3D;let r=n(V,M),c=M.source;J.bindTexture(a,V.__webglTexture,H.TEXTURE0+y);let I0=Z.get(c);if(c.version!==I0.__version||r===!0){J.activeTexture(H.TEXTURE0+y);let K0=i0.getPrimaries(i0.workingColorSpace),N0=M.colorSpace===d6?null:i0.getPrimaries(M.colorSpace),v0=M.colorSpace===d6||K0===N0?H.NONE:H.BROWSER_DEFAULT_WEBGL;H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,M.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,M.unpackAlignment),H.pixelStorei(H.UNPACK_COLORSPACE_CONVERSION_WEBGL,v0);let Z0=D(M.image,!1,W.maxTextureSize);Z0=M0(M,Z0);let R0=Q.convert(M.format,M.colorSpace),c0=Q.convert(M.type),j0=L(M.internalFormat,R0,c0,M.colorSpace,M.isVideoTexture);g0(a,M);let q0,b0=M.mipmaps,m0=M.isVideoTexture!==!0,K8=I0.__version===void 0||r===!0,j=c.dataReady,$0=_(M,Z0);if(M.isDepthTexture){if(j0=T(M.format===WH,M.type),K8)if(m0)J.texStorage2D(H.TEXTURE_2D,1,j0,Z0.width,Z0.height);else J.texImage2D(H.TEXTURE_2D,0,j0,Z0.width,Z0.height,0,R0,c0,null)}else if(M.isDataTexture)if(b0.length>0){if(m0&&K8)J.texStorage2D(H.TEXTURE_2D,$0,j0,b0[0].width,b0[0].height);for(let s=0,i=b0.length;s<i;s++)if(q0=b0[s],m0){if(j)J.texSubImage2D(H.TEXTURE_2D,s,0,0,q0.width,q0.height,R0,c0,q0.data)}else J.texImage2D(H.TEXTURE_2D,s,j0,q0.width,q0.height,0,R0,c0,q0.data);M.generateMipmaps=!1}else if(m0){if(K8)J.texStorage2D(H.TEXTURE_2D,$0,j0,Z0.width,Z0.height);if(j)J.texSubImage2D(H.TEXTURE_2D,0,0,0,Z0.width,Z0.height,R0,c0,Z0.data)}else J.texImage2D(H.TEXTURE_2D,0,j0,Z0.width,Z0.height,0,R0,c0,Z0.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){if(m0&&K8)J.texStorage3D(H.TEXTURE_2D_ARRAY,$0,j0,b0[0].width,b0[0].height,Z0.depth);for(let s=0,i=b0.length;s<i;s++)if(q0=b0[s],M.format!==$6)if(R0!==null)if(m0){if(j)if(M.layerUpdates.size>0){let E0=PJ(q0.width,q0.height,M.format,M.type);for(let G0 of M.layerUpdates){let p0=q0.data.subarray(G0*E0/q0.data.BYTES_PER_ELEMENT,(G0+1)*E0/q0.data.BYTES_PER_ELEMENT);J.compressedTexSubImage3D(H.TEXTURE_2D_ARRAY,s,0,0,G0,q0.width,q0.height,1,R0,p0)}M.clearLayerUpdates()}else J.compressedTexSubImage3D(H.TEXTURE_2D_ARRAY,s,0,0,0,q0.width,q0.height,Z0.depth,R0,q0.data)}else J.compressedTexImage3D(H.TEXTURE_2D_ARRAY,s,j0,q0.width,q0.height,Z0.depth,0,q0.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(m0){if(j)J.texSubImage3D(H.TEXTURE_2D_ARRAY,s,0,0,0,q0.width,q0.height,Z0.depth,R0,c0,q0.data)}else J.texImage3D(H.TEXTURE_2D_ARRAY,s,j0,q0.width,q0.height,Z0.depth,0,R0,c0,q0.data)}else{if(m0&&K8)J.texStorage2D(H.TEXTURE_2D,$0,j0,b0[0].width,b0[0].height);for(let s=0,i=b0.length;s<i;s++)if(q0=b0[s],M.format!==$6)if(R0!==null)if(m0){if(j)J.compressedTexSubImage2D(H.TEXTURE_2D,s,0,0,q0.width,q0.height,R0,q0.data)}else J.compressedTexImage2D(H.TEXTURE_2D,s,j0,q0.width,q0.height,0,q0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(m0){if(j)J.texSubImage2D(H.TEXTURE_2D,s,0,0,q0.width,q0.height,R0,c0,q0.data)}else J.texImage2D(H.TEXTURE_2D,s,j0,q0.width,q0.height,0,R0,c0,q0.data)}else if(M.isDataArrayTexture)if(m0){if(K8)J.texStorage3D(H.TEXTURE_2D_ARRAY,$0,j0,Z0.width,Z0.height,Z0.depth);if(j)if(M.layerUpdates.size>0){let s=PJ(Z0.width,Z0.height,M.format,M.type);for(let i of M.layerUpdates){let E0=Z0.data.subarray(i*s/Z0.data.BYTES_PER_ELEMENT,(i+1)*s/Z0.data.BYTES_PER_ELEMENT);J.texSubImage3D(H.TEXTURE_2D_ARRAY,0,0,0,i,Z0.width,Z0.height,1,R0,c0,E0)}M.clearLayerUpdates()}else J.texSubImage3D(H.TEXTURE_2D_ARRAY,0,0,0,0,Z0.width,Z0.height,Z0.depth,R0,c0,Z0.data)}else J.texImage3D(H.TEXTURE_2D_ARRAY,0,j0,Z0.width,Z0.height,Z0.depth,0,R0,c0,Z0.data);else if(M.isData3DTexture)if(m0){if(K8)J.texStorage3D(H.TEXTURE_3D,$0,j0,Z0.width,Z0.height,Z0.depth);if(j)J.texSubImage3D(H.TEXTURE_3D,0,0,0,0,Z0.width,Z0.height,Z0.depth,R0,c0,Z0.data)}else J.texImage3D(H.TEXTURE_3D,0,j0,Z0.width,Z0.height,Z0.depth,0,R0,c0,Z0.data);else if(M.isFramebufferTexture){if(K8)if(m0)J.texStorage2D(H.TEXTURE_2D,$0,j0,Z0.width,Z0.height);else{let{width:s,height:i}=Z0;for(let E0=0;E0<$0;E0++)J.texImage2D(H.TEXTURE_2D,E0,j0,s,i,0,R0,c0,null),s>>=1,i>>=1}}else if(b0.length>0){if(m0&&K8){let s=B0(b0[0]);J.texStorage2D(H.TEXTURE_2D,$0,j0,s.width,s.height)}for(let s=0,i=b0.length;s<i;s++)if(q0=b0[s],m0){if(j)J.texSubImage2D(H.TEXTURE_2D,s,0,0,R0,c0,q0)}else J.texImage2D(H.TEXTURE_2D,s,j0,R0,c0,q0);M.generateMipmaps=!1}else if(m0){if(K8){let s=B0(Z0);J.texStorage2D(H.TEXTURE_2D,$0,j0,s.width,s.height)}if(j)J.texSubImage2D(H.TEXTURE_2D,0,0,0,R0,c0,Z0)}else J.texImage2D(H.TEXTURE_2D,0,j0,R0,c0,Z0);if(F(M))N(a);if(I0.__version=c.version,M.onUpdate)M.onUpdate(M)}V.__version=M.version}function D0(V,M,y){if(M.image.length!==6)return;let a=n(V,M),r=M.source;J.bindTexture(H.TEXTURE_CUBE_MAP,V.__webglTexture,H.TEXTURE0+y);let c=Z.get(r);if(r.version!==c.__version||a===!0){J.activeTexture(H.TEXTURE0+y);let I0=i0.getPrimaries(i0.workingColorSpace),K0=M.colorSpace===d6?null:i0.getPrimaries(M.colorSpace),N0=M.colorSpace===d6||I0===K0?H.NONE:H.BROWSER_DEFAULT_WEBGL;H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,M.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,M.unpackAlignment),H.pixelStorei(H.UNPACK_COLORSPACE_CONVERSION_WEBGL,N0);let v0=M.isCompressedTexture||M.image[0].isCompressedTexture,Z0=M.image[0]&&M.image[0].isDataTexture,R0=[];for(let i=0;i<6;i++){if(!v0&&!Z0)R0[i]=D(M.image[i],!0,W.maxCubemapSize);else R0[i]=Z0?M.image[i].image:M.image[i];R0[i]=M0(M,R0[i])}let c0=R0[0],j0=Q.convert(M.format,M.colorSpace),q0=Q.convert(M.type),b0=L(M.internalFormat,j0,q0,M.colorSpace),m0=M.isVideoTexture!==!0,K8=c.__version===void 0||a===!0,j=r.dataReady,$0=_(M,c0);g0(H.TEXTURE_CUBE_MAP,M);let s;if(v0){if(m0&&K8)J.texStorage2D(H.TEXTURE_CUBE_MAP,$0,b0,c0.width,c0.height);for(let i=0;i<6;i++){s=R0[i].mipmaps;for(let E0=0;E0<s.length;E0++){let G0=s[E0];if(M.format!==$6)if(j0!==null)if(m0){if(j)J.compressedTexSubImage2D(H.TEXTURE_CUBE_MAP_POSITIVE_X+i,E0,0,0,G0.width,G0.height,j0,G0.data)}else J.compressedTexImage2D(H.TEXTURE_CUBE_MAP_POSITIVE_X+i,E0,b0,G0.width,G0.height,0,G0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(m0){if(j)J.texSubImage2D(H.TEXTURE_CUBE_MAP_POSITIVE_X+i,E0,0,0,G0.width,G0.height,j0,q0,G0.data)}else J.texImage2D(H.TEXTURE_CUBE_MAP_POSITIVE_X+i,E0,b0,G0.width,G0.height,0,j0,q0,G0.data)}}}else{if(s=M.mipmaps,m0&&K8){if(s.length>0)$0++;let i=B0(R0[0]);J.texStorage2D(H.TEXTURE_CUBE_MAP,$0,b0,i.width,i.height)}for(let i=0;i<6;i++)if(Z0){if(m0){if(j)J.texSubImage2D(H.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,0,0,R0[i].width,R0[i].height,j0,q0,R0[i].data)}else J.texImage2D(H.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,b0,R0[i].width,R0[i].height,0,j0,q0,R0[i].data);for(let E0=0;E0<s.length;E0++){let p0=s[E0].image[i].image;if(m0){if(j)J.texSubImage2D(H.TEXTURE_CUBE_MAP_POSITIVE_X+i,E0+1,0,0,p0.width,p0.height,j0,q0,p0.data)}else J.texImage2D(H.TEXTURE_CUBE_MAP_POSITIVE_X+i,E0+1,b0,p0.width,p0.height,0,j0,q0,p0.data)}}else{if(m0){if(j)J.texSubImage2D(H.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,0,0,j0,q0,R0[i])}else J.texImage2D(H.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,b0,j0,q0,R0[i]);for(let E0=0;E0<s.length;E0++){let G0=s[E0];if(m0){if(j)J.texSubImage2D(H.TEXTURE_CUBE_MAP_POSITIVE_X+i,E0+1,0,0,j0,q0,G0.image[i])}else J.texImage2D(H.TEXTURE_CUBE_MAP_POSITIVE_X+i,E0+1,b0,j0,q0,G0.image[i])}}}if(F(M))N(H.TEXTURE_CUBE_MAP);if(c.__version=r.version,M.onUpdate)M.onUpdate(M)}V.__version=M.version}function k0(V,M,y,a,r,c){let I0=Q.convert(y.format,y.colorSpace),K0=Q.convert(y.type),N0=L(y.internalFormat,I0,K0,y.colorSpace),v0=Z.get(M),Z0=Z.get(y);if(Z0.__renderTarget=M,!v0.__hasExternalTextures){let R0=Math.max(1,M.width>>c),c0=Math.max(1,M.height>>c);if(r===H.TEXTURE_3D||r===H.TEXTURE_2D_ARRAY)J.texImage3D(r,c,N0,R0,c0,M.depth,0,I0,K0,null);else J.texImage2D(r,c,N0,R0,c0,0,I0,K0,null)}if(J.bindFramebuffer(H.FRAMEBUFFER,V),Y0(M))X.framebufferTexture2DMultisampleEXT(H.FRAMEBUFFER,a,r,Z0.__webglTexture,0,_0(M));else if(r===H.TEXTURE_2D||r>=H.TEXTURE_CUBE_MAP_POSITIVE_X&&r<=H.TEXTURE_CUBE_MAP_NEGATIVE_Z)H.framebufferTexture2D(H.FRAMEBUFFER,a,r,Z0.__webglTexture,c);J.bindFramebuffer(H.FRAMEBUFFER,null)}function W0(V,M,y){if(H.bindRenderbuffer(H.RENDERBUFFER,V),M.depthBuffer){let a=M.depthTexture,r=a&&a.isDepthTexture?a.type:null,c=T(M.stencilBuffer,r),I0=M.stencilBuffer?H.DEPTH_STENCIL_ATTACHMENT:H.DEPTH_ATTACHMENT,K0=_0(M);if(Y0(M))X.renderbufferStorageMultisampleEXT(H.RENDERBUFFER,K0,c,M.width,M.height);else if(y)H.renderbufferStorageMultisample(H.RENDERBUFFER,K0,c,M.width,M.height);else H.renderbufferStorage(H.RENDERBUFFER,c,M.width,M.height);H.framebufferRenderbuffer(H.FRAMEBUFFER,I0,H.RENDERBUFFER,V)}else{let a=M.textures;for(let r=0;r<a.length;r++){let c=a[r],I0=Q.convert(c.format,c.colorSpace),K0=Q.convert(c.type),N0=L(c.internalFormat,I0,K0,c.colorSpace),v0=_0(M);if(y&&Y0(M)===!1)H.renderbufferStorageMultisample(H.RENDERBUFFER,v0,N0,M.width,M.height);else if(Y0(M))X.renderbufferStorageMultisampleEXT(H.RENDERBUFFER,v0,N0,M.width,M.height);else H.renderbufferStorage(H.RENDERBUFFER,N0,M.width,M.height)}}H.bindRenderbuffer(H.RENDERBUFFER,null)}function C0(V,M){if(M&&M.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if(J.bindFramebuffer(H.FRAMEBUFFER,V),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let a=Z.get(M.depthTexture);if(a.__renderTarget=M,!a.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0;o(M.depthTexture,0);let r=a.__webglTexture,c=_0(M);if(M.depthTexture.format===W9)if(Y0(M))X.framebufferTexture2DMultisampleEXT(H.FRAMEBUFFER,H.DEPTH_ATTACHMENT,H.TEXTURE_2D,r,0,c);else H.framebufferTexture2D(H.FRAMEBUFFER,H.DEPTH_ATTACHMENT,H.TEXTURE_2D,r,0);else if(M.depthTexture.format===WH)if(Y0(M))X.framebufferTexture2DMultisampleEXT(H.FRAMEBUFFER,H.DEPTH_STENCIL_ATTACHMENT,H.TEXTURE_2D,r,0,c);else H.framebufferTexture2D(H.FRAMEBUFFER,H.DEPTH_STENCIL_ATTACHMENT,H.TEXTURE_2D,r,0);else throw Error("Unknown depthTexture format")}function u(V){let M=Z.get(V),y=V.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==V.depthTexture){let a=V.depthTexture;if(M.__depthDisposeCallback)M.__depthDisposeCallback();if(a){let r=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,a.removeEventListener("dispose",r)};a.addEventListener("dispose",r),M.__depthDisposeCallback=r}M.__boundDepthTexture=a}if(V.depthTexture&&!M.__autoAllocateDepthBuffer){if(y)throw Error("target.depthTexture not supported in Cube render targets");C0(M.__webglFramebuffer,V)}else if(y){M.__webglDepthbuffer=[];for(let a=0;a<6;a++)if(J.bindFramebuffer(H.FRAMEBUFFER,M.__webglFramebuffer[a]),M.__webglDepthbuffer[a]===void 0)M.__webglDepthbuffer[a]=H.createRenderbuffer(),W0(M.__webglDepthbuffer[a],V,!1);else{let r=V.stencilBuffer?H.DEPTH_STENCIL_ATTACHMENT:H.DEPTH_ATTACHMENT,c=M.__webglDepthbuffer[a];H.bindRenderbuffer(H.RENDERBUFFER,c),H.framebufferRenderbuffer(H.FRAMEBUFFER,r,H.RENDERBUFFER,c)}}else if(J.bindFramebuffer(H.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=H.createRenderbuffer(),W0(M.__webglDepthbuffer,V,!1);else{let a=V.stencilBuffer?H.DEPTH_STENCIL_ATTACHMENT:H.DEPTH_ATTACHMENT,r=M.__webglDepthbuffer;H.bindRenderbuffer(H.RENDERBUFFER,r),H.framebufferRenderbuffer(H.FRAMEBUFFER,a,H.RENDERBUFFER,r)}J.bindFramebuffer(H.FRAMEBUFFER,null)}function S0(V,M,y){let a=Z.get(V);if(M!==void 0)k0(a.__webglFramebuffer,V,V.texture,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,0);if(y!==void 0)u(V)}function n0(V){let M=V.texture,y=Z.get(V),a=Z.get(M);V.addEventListener("dispose",B);let r=V.textures,c=V.isWebGLCubeRenderTarget===!0,I0=r.length>1;if(!I0){if(a.__webglTexture===void 0)a.__webglTexture=H.createTexture();a.__version=M.version,Y.memory.textures++}if(c){y.__webglFramebuffer=[];for(let K0=0;K0<6;K0++)if(M.mipmaps&&M.mipmaps.length>0){y.__webglFramebuffer[K0]=[];for(let N0=0;N0<M.mipmaps.length;N0++)y.__webglFramebuffer[K0][N0]=H.createFramebuffer()}else y.__webglFramebuffer[K0]=H.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){y.__webglFramebuffer=[];for(let K0=0;K0<M.mipmaps.length;K0++)y.__webglFramebuffer[K0]=H.createFramebuffer()}else y.__webglFramebuffer=H.createFramebuffer();if(I0)for(let K0=0,N0=r.length;K0<N0;K0++){let v0=Z.get(r[K0]);if(v0.__webglTexture===void 0)v0.__webglTexture=H.createTexture(),Y.memory.textures++}if(V.samples>0&&Y0(V)===!1){y.__webglMultisampledFramebuffer=H.createFramebuffer(),y.__webglColorRenderbuffer=[],J.bindFramebuffer(H.FRAMEBUFFER,y.__webglMultisampledFramebuffer);for(let K0=0;K0<r.length;K0++){let N0=r[K0];y.__webglColorRenderbuffer[K0]=H.createRenderbuffer(),H.bindRenderbuffer(H.RENDERBUFFER,y.__webglColorRenderbuffer[K0]);let v0=Q.convert(N0.format,N0.colorSpace),Z0=Q.convert(N0.type),R0=L(N0.internalFormat,v0,Z0,N0.colorSpace,V.isXRRenderTarget===!0),c0=_0(V);H.renderbufferStorageMultisample(H.RENDERBUFFER,c0,R0,V.width,V.height),H.framebufferRenderbuffer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+K0,H.RENDERBUFFER,y.__webglColorRenderbuffer[K0])}if(H.bindRenderbuffer(H.RENDERBUFFER,null),V.depthBuffer)y.__webglDepthRenderbuffer=H.createRenderbuffer(),W0(y.__webglDepthRenderbuffer,V,!0);J.bindFramebuffer(H.FRAMEBUFFER,null)}}if(c){J.bindTexture(H.TEXTURE_CUBE_MAP,a.__webglTexture),g0(H.TEXTURE_CUBE_MAP,M);for(let K0=0;K0<6;K0++)if(M.mipmaps&&M.mipmaps.length>0)for(let N0=0;N0<M.mipmaps.length;N0++)k0(y.__webglFramebuffer[K0][N0],V,M,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+K0,N0);else k0(y.__webglFramebuffer[K0],V,M,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+K0,0);if(F(M))N(H.TEXTURE_CUBE_MAP);J.unbindTexture()}else if(I0){for(let K0=0,N0=r.length;K0<N0;K0++){let v0=r[K0],Z0=Z.get(v0);if(J.bindTexture(H.TEXTURE_2D,Z0.__webglTexture),g0(H.TEXTURE_2D,v0),k0(y.__webglFramebuffer,V,v0,H.COLOR_ATTACHMENT0+K0,H.TEXTURE_2D,0),F(v0))N(H.TEXTURE_2D)}J.unbindTexture()}else{let K0=H.TEXTURE_2D;if(V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)K0=V.isWebGL3DRenderTarget?H.TEXTURE_3D:H.TEXTURE_2D_ARRAY;if(J.bindTexture(K0,a.__webglTexture),g0(K0,M),M.mipmaps&&M.mipmaps.length>0)for(let N0=0;N0<M.mipmaps.length;N0++)k0(y.__webglFramebuffer[N0],V,M,H.COLOR_ATTACHMENT0,K0,N0);else k0(y.__webglFramebuffer,V,M,H.COLOR_ATTACHMENT0,K0,0);if(F(M))N(K0);J.unbindTexture()}if(V.depthBuffer)u(V)}function w0(V){let M=V.textures;for(let y=0,a=M.length;y<a;y++){let r=M[y];if(F(r)){let c=I(V),I0=Z.get(r).__webglTexture;J.bindTexture(c,I0),N(c),J.unbindTexture()}}}let P=[],l0=[];function P0(V){if(V.samples>0){if(Y0(V)===!1){let{textures:M,width:y,height:a}=V,r=H.COLOR_BUFFER_BIT,c=V.stencilBuffer?H.DEPTH_STENCIL_ATTACHMENT:H.DEPTH_ATTACHMENT,I0=Z.get(V),K0=M.length>1;if(K0)for(let N0=0;N0<M.length;N0++)J.bindFramebuffer(H.FRAMEBUFFER,I0.__webglMultisampledFramebuffer),H.framebufferRenderbuffer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+N0,H.RENDERBUFFER,null),J.bindFramebuffer(H.FRAMEBUFFER,I0.__webglFramebuffer),H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0+N0,H.TEXTURE_2D,null,0);J.bindFramebuffer(H.READ_FRAMEBUFFER,I0.__webglMultisampledFramebuffer),J.bindFramebuffer(H.DRAW_FRAMEBUFFER,I0.__webglFramebuffer);for(let N0=0;N0<M.length;N0++){if(V.resolveDepthBuffer){if(V.depthBuffer)r|=H.DEPTH_BUFFER_BIT;if(V.stencilBuffer&&V.resolveStencilBuffer)r|=H.STENCIL_BUFFER_BIT}if(K0){H.framebufferRenderbuffer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.RENDERBUFFER,I0.__webglColorRenderbuffer[N0]);let v0=Z.get(M[N0]).__webglTexture;H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,v0,0)}if(H.blitFramebuffer(0,0,y,a,0,0,y,a,r,H.NEAREST),K===!0){if(P.length=0,l0.length=0,P.push(H.COLOR_ATTACHMENT0+N0),V.depthBuffer&&V.resolveDepthBuffer===!1)P.push(c),l0.push(c),H.invalidateFramebuffer(H.DRAW_FRAMEBUFFER,l0);H.invalidateFramebuffer(H.READ_FRAMEBUFFER,P)}}if(J.bindFramebuffer(H.READ_FRAMEBUFFER,null),J.bindFramebuffer(H.DRAW_FRAMEBUFFER,null),K0)for(let N0=0;N0<M.length;N0++){J.bindFramebuffer(H.FRAMEBUFFER,I0.__webglMultisampledFramebuffer),H.framebufferRenderbuffer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+N0,H.RENDERBUFFER,I0.__webglColorRenderbuffer[N0]);let v0=Z.get(M[N0]).__webglTexture;J.bindFramebuffer(H.FRAMEBUFFER,I0.__webglFramebuffer),H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0+N0,H.TEXTURE_2D,v0,0)}J.bindFramebuffer(H.DRAW_FRAMEBUFFER,I0.__webglMultisampledFramebuffer)}else if(V.depthBuffer&&V.resolveDepthBuffer===!1&&K){let M=V.stencilBuffer?H.DEPTH_STENCIL_ATTACHMENT:H.DEPTH_ATTACHMENT;H.invalidateFramebuffer(H.DRAW_FRAMEBUFFER,[M])}}}function _0(V){return Math.min(W.maxSamples,V.samples)}function Y0(V){let M=Z.get(V);return V.samples>0&&$.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function o0(V){let M=Y.render.frame;if(G.get(V)!==M)G.set(V,M),V.update()}function M0(V,M){let{colorSpace:y,format:a,type:r}=V;if(V.isCompressedTexture===!0||V.isVideoTexture===!0)return M;if(y!==QH&&y!==d6)if(i0.getTransfer(y)===Q8){if(a!==$6||r!==S6)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",y);return M}function B0(V){if(typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement)U.width=V.naturalWidth||V.width,U.height=V.naturalHeight||V.height;else if(typeof VideoFrame<"u"&&V instanceof VideoFrame)U.width=V.displayWidth,U.height=V.displayHeight;else U.width=V.width,U.height=V.height;return U}this.allocateTextureUnit=p,this.resetTextureUnits=x,this.setTexture2D=o,this.setTexture2DArray=d,this.setTexture3D=t,this.setTextureCube=m,this.rebindTextures=S0,this.setupRenderTarget=n0,this.updateRenderTargetMipmap=w0,this.updateMultisampleRenderTarget=P0,this.setupDepthRenderbuffer=u,this.setupFrameBufferTexture=k0,this.useMultisampledRTT=Y0}function FG(H,$){function J(Z,W=d6){let Q,Y=i0.getTransfer(W);if(Z===S6)return H.UNSIGNED_BYTE;if(Z===w$)return H.UNSIGNED_SHORT_4_4_4_4;if(Z===I$)return H.UNSIGNED_SHORT_5_5_5_1;if(Z===DW)return H.UNSIGNED_INT_5_9_9_9_REV;if(Z===qW)return H.BYTE;if(Z===OW)return H.SHORT;if(Z===JH)return H.UNSIGNED_SHORT;if(Z===z$)return H.INT;if(Z===P7)return H.UNSIGNED_INT;if(Z===_6)return H.FLOAT;if(Z===ZH)return H.HALF_FLOAT;if(Z===MW)return H.ALPHA;if(Z===kW)return H.RGB;if(Z===$6)return H.RGBA;if(Z===LW)return H.LUMINANCE;if(Z===CW)return H.LUMINANCE_ALPHA;if(Z===W9)return H.DEPTH_COMPONENT;if(Z===WH)return H.DEPTH_STENCIL;if(Z===zW)return H.RED;if(Z===V$)return H.RED_INTEGER;if(Z===wW)return H.RG;if(Z===B$)return H.RG_INTEGER;if(Z===P$)return H.RGBA_INTEGER;if(Z===Q9||Z===Y9||Z===X9||Z===K9)if(Y===Q8)if(Q=$.get("WEBGL_compressed_texture_s3tc_srgb"),Q!==null){if(Z===Q9)return Q.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===Y9)return Q.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===X9)return Q.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===K9)return Q.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(Q=$.get("WEBGL_compressed_texture_s3tc"),Q!==null){if(Z===Q9)return Q.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===Y9)return Q.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===X9)return Q.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===K9)return Q.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===T$||Z===A$||Z===S$||Z===_$)if(Q=$.get("WEBGL_compressed_texture_pvrtc"),Q!==null){if(Z===T$)return Q.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===A$)return Q.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===S$)return Q.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===_$)return Q.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===j$||Z===f$||Z===h$)if(Q=$.get("WEBGL_compressed_texture_etc"),Q!==null){if(Z===j$||Z===f$)return Y===Q8?Q.COMPRESSED_SRGB8_ETC2:Q.COMPRESSED_RGB8_ETC2;if(Z===h$)return Y===Q8?Q.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:Q.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(Z===x$||Z===y$||Z===v$||Z===b$||Z===g$||Z===p$||Z===u$||Z===l$||Z===m$||Z===d$||Z===c$||Z===n$||Z===s$||Z===i$)if(Q=$.get("WEBGL_compressed_texture_astc"),Q!==null){if(Z===x$)return Y===Q8?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:Q.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===y$)return Y===Q8?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:Q.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===v$)return Y===Q8?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:Q.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===b$)return Y===Q8?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:Q.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===g$)return Y===Q8?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:Q.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===p$)return Y===Q8?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:Q.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===u$)return Y===Q8?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:Q.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===l$)return Y===Q8?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:Q.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===m$)return Y===Q8?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:Q.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===d$)return Y===Q8?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:Q.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===c$)return Y===Q8?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:Q.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===n$)return Y===Q8?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:Q.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===s$)return Y===Q8?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:Q.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===i$)return Y===Q8?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:Q.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===U9||Z===o$||Z===a$)if(Q=$.get("EXT_texture_compression_bptc"),Q!==null){if(Z===U9)return Y===Q8?Q.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:Q.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===o$)return Q.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===a$)return Q.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===IW||Z===r$||Z===t$||Z===e$)if(Q=$.get("EXT_texture_compression_rgtc"),Q!==null){if(Z===U9)return Q.COMPRESSED_RED_RGTC1_EXT;if(Z===r$)return Q.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===t$)return Q.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===e$)return Q.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===T7)return H.UNSIGNED_INT_24_8;return H[Z]!==void 0?H[Z]:null}return{convert:J}}var NG={type:"move"};class _9{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new Q6,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new Q6,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new Q6,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S;return this._grip}dispatchEvent(H){if(this._targetRay!==null)this._targetRay.dispatchEvent(H);if(this._grip!==null)this._grip.dispatchEvent(H);if(this._hand!==null)this._hand.dispatchEvent(H);return this}connect(H){if(H&&H.hand){let $=this._hand;if($)for(let J of H.hand.values())this._getHandJoint($,J)}return this.dispatchEvent({type:"connected",data:H}),this}disconnect(H){if(this.dispatchEvent({type:"disconnected",data:H}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(H,$,J){let Z=null,W=null,Q=null,Y=this._targetRay,X=this._grip,K=this._hand;if(H&&$.session.visibilityState!=="visible-blurred"){if(K&&H.hand){Q=!0;for(let O of H.hand.values()){let D=$.getJointPose(O,J),F=this._getHandJoint(K,O);if(D!==null)F.matrix.fromArray(D.transform.matrix),F.matrix.decompose(F.position,F.rotation,F.scale),F.matrixWorldNeedsUpdate=!0,F.jointRadius=D.radius;F.visible=D!==null}let U=K.joints["index-finger-tip"],G=K.joints["thumb-tip"],E=U.position.distanceTo(G.position),R=0.02,q=0.005;if(K.inputState.pinching&&E>R+q)K.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:H.handedness,target:this});else if(!K.inputState.pinching&&E<=R-q)K.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:H.handedness,target:this})}else if(X!==null&&H.gripSpace){if(W=$.getPose(H.gripSpace,J),W!==null){if(X.matrix.fromArray(W.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,W.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(W.linearVelocity);else X.hasLinearVelocity=!1;if(W.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(W.angularVelocity);else X.hasAngularVelocity=!1}}if(Y!==null){if(Z=$.getPose(H.targetRaySpace,J),Z===null&&W!==null)Z=W;if(Z!==null){if(Y.matrix.fromArray(Z.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,Z.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(Z.linearVelocity);else Y.hasLinearVelocity=!1;if(Z.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(Z.angularVelocity);else Y.hasAngularVelocity=!1;this.dispatchEvent(NG)}}}if(Y!==null)Y.visible=Z!==null;if(X!==null)X.visible=W!==null;if(K!==null)K.visible=Q!==null;return this}_getHandJoint(H,$){if(H.joints[$.jointName]===void 0){let J=new Q6;J.matrixAutoUpdate=!1,J.visible=!1,H.joints[$.jointName]=J,H.add(J)}return H.joints[$.jointName]}}var qG=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OG=`
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

}`;class VQ{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(H,$,J){if(this.texture===null){let Z=new L8,W=H.properties.get(Z);if(W.__webglTexture=$.texture,$.depthNear!==J.depthNear||$.depthFar!==J.depthFar)this.depthNear=$.depthNear,this.depthFar=$.depthFar;this.texture=Z}}getMesh(H){if(this.texture!==null){if(this.mesh===null){let $=H.cameras[0].viewport,J=new W6({vertexShader:qG,fragmentShader:OG,uniforms:{depthColor:{value:this.texture},depthWidth:{value:$.z},depthHeight:{value:$.w}}});this.mesh=new r0(new UH(20,20),J)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class BQ extends q6{constructor(H,$){super();let J=this,Z=null,W=1,Q=null,Y="local-floor",X=1,K=null,U=null,G=null,E=null,R=null,q=null,O=new VQ,D=$.getContextAttributes(),F=null,N=null,I=[],L=[],T=new T0,_=null,w=new I8;w.viewport=new J8;let B=new I8;B.viewport=new J8;let b=[w,B],C=new IJ,z=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(n){let J0=I[n];if(J0===void 0)J0=new _9,I[n]=J0;return J0.getTargetRaySpace()},this.getControllerGrip=function(n){let J0=I[n];if(J0===void 0)J0=new _9,I[n]=J0;return J0.getGripSpace()},this.getHand=function(n){let J0=I[n];if(J0===void 0)J0=new _9,I[n]=J0;return J0.getHandSpace()};function x(n){let J0=L.indexOf(n.inputSource);if(J0===-1)return;let D0=I[J0];if(D0!==void 0)D0.update(n.inputSource,n.frame,K||Q),D0.dispatchEvent({type:n.type,data:n.inputSource})}function p(){Z.removeEventListener("select",x),Z.removeEventListener("selectstart",x),Z.removeEventListener("selectend",x),Z.removeEventListener("squeeze",x),Z.removeEventListener("squeezestart",x),Z.removeEventListener("squeezeend",x),Z.removeEventListener("end",p),Z.removeEventListener("inputsourceschange",l);for(let n=0;n<I.length;n++){let J0=L[n];if(J0===null)continue;L[n]=null,I[n].disconnect(J0)}z=null,A=null,O.reset(),H.setRenderTarget(F),R=null,E=null,G=null,Z=null,N=null,g0.stop(),J.isPresenting=!1,H.setPixelRatio(_),H.setSize(T.width,T.height,!1),J.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(n){if(W=n,J.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(n){if(Y=n,J.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return K||Q},this.setReferenceSpace=function(n){K=n},this.getBaseLayer=function(){return E!==null?E:R},this.getBinding=function(){return G},this.getFrame=function(){return q},this.getSession=function(){return Z},this.setSession=async function(n){if(Z=n,Z!==null){if(F=H.getRenderTarget(),Z.addEventListener("select",x),Z.addEventListener("selectstart",x),Z.addEventListener("selectend",x),Z.addEventListener("squeeze",x),Z.addEventListener("squeezestart",x),Z.addEventListener("squeezeend",x),Z.addEventListener("end",p),Z.addEventListener("inputsourceschange",l),D.xrCompatible!==!0)await $.makeXRCompatible();if(_=H.getPixelRatio(),H.getSize(T),!(Z.enabledFeatures!==void 0&&Z.enabledFeatures.includes("layers"))){let D0={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:W};R=new XRWebGLLayer(Z,$,D0),Z.updateRenderState({baseLayer:R}),H.setPixelRatio(1),H.setSize(R.framebufferWidth,R.framebufferHeight,!1),N=new O6(R.framebufferWidth,R.framebufferHeight,{format:$6,type:S6,colorSpace:H.outputColorSpace,stencilBuffer:D.stencil})}else{let D0=null,k0=null,W0=null;if(D.depth)W0=D.stencil?$.DEPTH24_STENCIL8:$.DEPTH_COMPONENT24,D0=D.stencil?WH:W9,k0=D.stencil?T7:P7;let C0={colorFormat:$.RGBA8,depthFormat:W0,scaleFactor:W};G=new XRWebGLBinding(Z,$),E=G.createProjectionLayer(C0),Z.updateRenderState({layers:[E]}),H.setPixelRatio(1),H.setSize(E.textureWidth,E.textureHeight,!1),N=new O6(E.textureWidth,E.textureHeight,{format:$6,type:S6,depthTexture:new L9(E.textureWidth,E.textureHeight,k0,void 0,void 0,void 0,void 0,void 0,void 0,D0),stencilBuffer:D.stencil,colorSpace:H.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(X),K=null,Q=await Z.requestReferenceSpace(Y),g0.setContext(Z),g0.start(),J.isPresenting=!0,J.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return O.getDepthTexture()};function l(n){for(let J0=0;J0<n.removed.length;J0++){let D0=n.removed[J0],k0=L.indexOf(D0);if(k0>=0)L[k0]=null,I[k0].disconnect(D0)}for(let J0=0;J0<n.added.length;J0++){let D0=n.added[J0],k0=L.indexOf(D0);if(k0===-1){for(let C0=0;C0<I.length;C0++)if(C0>=L.length){L.push(D0),k0=C0;break}else if(L[C0]===null){L[C0]=D0,k0=C0;break}if(k0===-1)break}let W0=I[k0];if(W0)W0.connect(D0)}}let o=new S,d=new S;function t(n,J0,D0){o.setFromMatrixPosition(J0.matrixWorld),d.setFromMatrixPosition(D0.matrixWorld);let k0=o.distanceTo(d),W0=J0.projectionMatrix.elements,C0=D0.projectionMatrix.elements,u=W0[14]/(W0[10]-1),S0=W0[14]/(W0[10]+1),n0=(W0[9]+1)/W0[5],w0=(W0[9]-1)/W0[5],P=(W0[8]-1)/W0[0],l0=(C0[8]+1)/C0[0],P0=u*P,_0=u*l0,Y0=k0/(-P+l0),o0=Y0*-P;if(J0.matrixWorld.decompose(n.position,n.quaternion,n.scale),n.translateX(o0),n.translateZ(Y0),n.matrixWorld.compose(n.position,n.quaternion,n.scale),n.matrixWorldInverse.copy(n.matrixWorld).invert(),W0[10]===-1)n.projectionMatrix.copy(J0.projectionMatrix),n.projectionMatrixInverse.copy(J0.projectionMatrixInverse);else{let M0=u+Y0,B0=S0+Y0,V=P0-o0,M=_0+(k0-o0),y=n0*S0/B0*M0,a=w0*S0/B0*M0;n.projectionMatrix.makePerspective(V,M,y,a,M0,B0),n.projectionMatrixInverse.copy(n.projectionMatrix).invert()}}function m(n,J0){if(J0===null)n.matrixWorld.copy(n.matrix);else n.matrixWorld.multiplyMatrices(J0.matrixWorld,n.matrix);n.matrixWorldInverse.copy(n.matrixWorld).invert()}this.updateCamera=function(n){if(Z===null)return;let{near:J0,far:D0}=n;if(O.texture!==null){if(O.depthNear>0)J0=O.depthNear;if(O.depthFar>0)D0=O.depthFar}if(C.near=B.near=w.near=J0,C.far=B.far=w.far=D0,z!==C.near||A!==C.far)Z.updateRenderState({depthNear:C.near,depthFar:C.far}),z=C.near,A=C.far;w.layers.mask=n.layers.mask|2,B.layers.mask=n.layers.mask|4,C.layers.mask=w.layers.mask|B.layers.mask;let k0=n.parent,W0=C.cameras;m(C,k0);for(let C0=0;C0<W0.length;C0++)m(W0[C0],k0);if(W0.length===2)t(C,w,B);else C.projectionMatrix.copy(w.projectionMatrix);X0(n,C,k0)};function X0(n,J0,D0){if(D0===null)n.matrix.copy(J0.matrixWorld);else n.matrix.copy(D0.matrixWorld),n.matrix.invert(),n.matrix.multiply(J0.matrixWorld);if(n.matrix.decompose(n.position,n.quaternion,n.scale),n.updateMatrixWorld(!0),n.projectionMatrix.copy(J0.projectionMatrix),n.projectionMatrixInverse.copy(J0.projectionMatrixInverse),n.isPerspectiveCamera)n.fov=L7*2*Math.atan(1/n.projectionMatrix.elements[5]),n.zoom=1}this.getCamera=function(){return C},this.getFoveation=function(){if(E===null&&R===null)return;return X},this.setFoveation=function(n){if(X=n,E!==null)E.fixedFoveation=n;if(R!==null&&R.fixedFoveation!==void 0)R.fixedFoveation=n},this.hasDepthSensing=function(){return O.texture!==null},this.getDepthSensingMesh=function(){return O.getMesh(C)};let H0=null;function V0(n,J0){if(U=J0.getViewerPose(K||Q),q=J0,U!==null){let D0=U.views;if(R!==null)H.setRenderTargetFramebuffer(N,R.framebuffer),H.setRenderTarget(N);let k0=!1;if(D0.length!==C.cameras.length)C.cameras.length=0,k0=!0;for(let C0=0;C0<D0.length;C0++){let u=D0[C0],S0=null;if(R!==null)S0=R.getViewport(u);else{let w0=G.getViewSubImage(E,u);if(S0=w0.viewport,C0===0)H.setRenderTargetTextures(N,w0.colorTexture,E.ignoreDepthValues?void 0:w0.depthStencilTexture),H.setRenderTarget(N)}let n0=b[C0];if(n0===void 0)n0=new I8,n0.layers.enable(C0),n0.viewport=new J8,b[C0]=n0;if(n0.matrix.fromArray(u.transform.matrix),n0.matrix.decompose(n0.position,n0.quaternion,n0.scale),n0.projectionMatrix.fromArray(u.projectionMatrix),n0.projectionMatrixInverse.copy(n0.projectionMatrix).invert(),n0.viewport.set(S0.x,S0.y,S0.width,S0.height),C0===0)C.matrix.copy(n0.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale);if(k0===!0)C.cameras.push(n0)}let W0=Z.enabledFeatures;if(W0&&W0.includes("depth-sensing")){let C0=G.getDepthInformation(D0[0]);if(C0&&C0.isValid&&C0.texture)O.init(H,C0,Z.renderState)}}for(let D0=0;D0<I.length;D0++){let k0=L[D0],W0=I[D0];if(k0!==null&&W0!==void 0)W0.update(k0,J0,K||Q)}if(H0)H0(n,J0);if(J0.detectedPlanes)J.dispatchEvent({type:"planesdetected",data:J0});q=null}let g0=new qQ;g0.setAnimationLoop(V0),this.setAnimationLoop=function(n){H0=n},this.dispose=function(){}}}var H7=new m8,DG=new W8;function MG(H,$){function J(F,N){if(F.matrixAutoUpdate===!0)F.updateMatrix();N.value.copy(F.matrix)}function Z(F,N){if(N.color.getRGB(F.fogColor.value,UJ(H)),N.isFog)F.fogNear.value=N.near,F.fogFar.value=N.far;else if(N.isFogExp2)F.fogDensity.value=N.density}function W(F,N,I,L,T){if(N.isMeshBasicMaterial)Q(F,N);else if(N.isMeshLambertMaterial)Q(F,N);else if(N.isMeshToonMaterial)Q(F,N),E(F,N);else if(N.isMeshPhongMaterial)Q(F,N),G(F,N);else if(N.isMeshStandardMaterial){if(Q(F,N),R(F,N),N.isMeshPhysicalMaterial)q(F,N,T)}else if(N.isMeshMatcapMaterial)Q(F,N),O(F,N);else if(N.isMeshDepthMaterial)Q(F,N);else if(N.isMeshDistanceMaterial)Q(F,N),D(F,N);else if(N.isMeshNormalMaterial)Q(F,N);else if(N.isLineBasicMaterial){if(Y(F,N),N.isLineDashedMaterial)X(F,N)}else if(N.isPointsMaterial)K(F,N,I,L);else if(N.isSpriteMaterial)U(F,N);else if(N.isShadowMaterial)F.color.value.copy(N.color),F.opacity.value=N.opacity;else if(N.isShaderMaterial)N.uniformsNeedUpdate=!1}function Q(F,N){if(F.opacity.value=N.opacity,N.color)F.diffuse.value.copy(N.color);if(N.emissive)F.emissive.value.copy(N.emissive).multiplyScalar(N.emissiveIntensity);if(N.map)F.map.value=N.map,J(N.map,F.mapTransform);if(N.alphaMap)F.alphaMap.value=N.alphaMap,J(N.alphaMap,F.alphaMapTransform);if(N.bumpMap){if(F.bumpMap.value=N.bumpMap,J(N.bumpMap,F.bumpMapTransform),F.bumpScale.value=N.bumpScale,N.side===A8)F.bumpScale.value*=-1}if(N.normalMap){if(F.normalMap.value=N.normalMap,J(N.normalMap,F.normalMapTransform),F.normalScale.value.copy(N.normalScale),N.side===A8)F.normalScale.value.negate()}if(N.displacementMap)F.displacementMap.value=N.displacementMap,J(N.displacementMap,F.displacementMapTransform),F.displacementScale.value=N.displacementScale,F.displacementBias.value=N.displacementBias;if(N.emissiveMap)F.emissiveMap.value=N.emissiveMap,J(N.emissiveMap,F.emissiveMapTransform);if(N.specularMap)F.specularMap.value=N.specularMap,J(N.specularMap,F.specularMapTransform);if(N.alphaTest>0)F.alphaTest.value=N.alphaTest;let I=$.get(N),L=I.envMap,T=I.envMapRotation;if(L){if(F.envMap.value=L,H7.copy(T),H7.x*=-1,H7.y*=-1,H7.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1)H7.y*=-1,H7.z*=-1;F.envMapRotation.value.setFromMatrix4(DG.makeRotationFromEuler(H7)),F.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,F.reflectivity.value=N.reflectivity,F.ior.value=N.ior,F.refractionRatio.value=N.refractionRatio}if(N.lightMap)F.lightMap.value=N.lightMap,F.lightMapIntensity.value=N.lightMapIntensity,J(N.lightMap,F.lightMapTransform);if(N.aoMap)F.aoMap.value=N.aoMap,F.aoMapIntensity.value=N.aoMapIntensity,J(N.aoMap,F.aoMapTransform)}function Y(F,N){if(F.diffuse.value.copy(N.color),F.opacity.value=N.opacity,N.map)F.map.value=N.map,J(N.map,F.mapTransform)}function X(F,N){F.dashSize.value=N.dashSize,F.totalSize.value=N.dashSize+N.gapSize,F.scale.value=N.scale}function K(F,N,I,L){if(F.diffuse.value.copy(N.color),F.opacity.value=N.opacity,F.size.value=N.size*I,F.scale.value=L*0.5,N.map)F.map.value=N.map,J(N.map,F.uvTransform);if(N.alphaMap)F.alphaMap.value=N.alphaMap,J(N.alphaMap,F.alphaMapTransform);if(N.alphaTest>0)F.alphaTest.value=N.alphaTest}function U(F,N){if(F.diffuse.value.copy(N.color),F.opacity.value=N.opacity,F.rotation.value=N.rotation,N.map)F.map.value=N.map,J(N.map,F.mapTransform);if(N.alphaMap)F.alphaMap.value=N.alphaMap,J(N.alphaMap,F.alphaMapTransform);if(N.alphaTest>0)F.alphaTest.value=N.alphaTest}function G(F,N){F.specular.value.copy(N.specular),F.shininess.value=Math.max(N.shininess,0.0001)}function E(F,N){if(N.gradientMap)F.gradientMap.value=N.gradientMap}function R(F,N){if(F.metalness.value=N.metalness,N.metalnessMap)F.metalnessMap.value=N.metalnessMap,J(N.metalnessMap,F.metalnessMapTransform);if(F.roughness.value=N.roughness,N.roughnessMap)F.roughnessMap.value=N.roughnessMap,J(N.roughnessMap,F.roughnessMapTransform);if(N.envMap)F.envMapIntensity.value=N.envMapIntensity}function q(F,N,I){if(F.ior.value=N.ior,N.sheen>0){if(F.sheenColor.value.copy(N.sheenColor).multiplyScalar(N.sheen),F.sheenRoughness.value=N.sheenRoughness,N.sheenColorMap)F.sheenColorMap.value=N.sheenColorMap,J(N.sheenColorMap,F.sheenColorMapTransform);if(N.sheenRoughnessMap)F.sheenRoughnessMap.value=N.sheenRoughnessMap,J(N.sheenRoughnessMap,F.sheenRoughnessMapTransform)}if(N.clearcoat>0){if(F.clearcoat.value=N.clearcoat,F.clearcoatRoughness.value=N.clearcoatRoughness,N.clearcoatMap)F.clearcoatMap.value=N.clearcoatMap,J(N.clearcoatMap,F.clearcoatMapTransform);if(N.clearcoatRoughnessMap)F.clearcoatRoughnessMap.value=N.clearcoatRoughnessMap,J(N.clearcoatRoughnessMap,F.clearcoatRoughnessMapTransform);if(N.clearcoatNormalMap){if(F.clearcoatNormalMap.value=N.clearcoatNormalMap,J(N.clearcoatNormalMap,F.clearcoatNormalMapTransform),F.clearcoatNormalScale.value.copy(N.clearcoatNormalScale),N.side===A8)F.clearcoatNormalScale.value.negate()}}if(N.dispersion>0)F.dispersion.value=N.dispersion;if(N.iridescence>0){if(F.iridescence.value=N.iridescence,F.iridescenceIOR.value=N.iridescenceIOR,F.iridescenceThicknessMinimum.value=N.iridescenceThicknessRange[0],F.iridescenceThicknessMaximum.value=N.iridescenceThicknessRange[1],N.iridescenceMap)F.iridescenceMap.value=N.iridescenceMap,J(N.iridescenceMap,F.iridescenceMapTransform);if(N.iridescenceThicknessMap)F.iridescenceThicknessMap.value=N.iridescenceThicknessMap,J(N.iridescenceThicknessMap,F.iridescenceThicknessMapTransform)}if(N.transmission>0){if(F.transmission.value=N.transmission,F.transmissionSamplerMap.value=I.texture,F.transmissionSamplerSize.value.set(I.width,I.height),N.transmissionMap)F.transmissionMap.value=N.transmissionMap,J(N.transmissionMap,F.transmissionMapTransform);if(F.thickness.value=N.thickness,N.thicknessMap)F.thicknessMap.value=N.thicknessMap,J(N.thicknessMap,F.thicknessMapTransform);F.attenuationDistance.value=N.attenuationDistance,F.attenuationColor.value.copy(N.attenuationColor)}if(N.anisotropy>0){if(F.anisotropyVector.value.set(N.anisotropy*Math.cos(N.anisotropyRotation),N.anisotropy*Math.sin(N.anisotropyRotation)),N.anisotropyMap)F.anisotropyMap.value=N.anisotropyMap,J(N.anisotropyMap,F.anisotropyMapTransform)}if(F.specularIntensity.value=N.specularIntensity,F.specularColor.value.copy(N.specularColor),N.specularColorMap)F.specularColorMap.value=N.specularColorMap,J(N.specularColorMap,F.specularColorMapTransform);if(N.specularIntensityMap)F.specularIntensityMap.value=N.specularIntensityMap,J(N.specularIntensityMap,F.specularIntensityMapTransform)}function O(F,N){if(N.matcap)F.matcap.value=N.matcap}function D(F,N){let I=$.get(N).light;F.referencePosition.value.setFromMatrixPosition(I.matrixWorld),F.nearDistance.value=I.shadow.camera.near,F.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:W}}function kG(H,$,J,Z){let W={},Q={},Y=[],X=H.getParameter(H.MAX_UNIFORM_BUFFER_BINDINGS);function K(I,L){let T=L.program;Z.uniformBlockBinding(I,T)}function U(I,L){let T=W[I.id];if(T===void 0)O(I),T=G(I),W[I.id]=T,I.addEventListener("dispose",F);let _=L.program;Z.updateUBOMapping(I,_);let w=$.render.frame;if(Q[I.id]!==w)R(I),Q[I.id]=w}function G(I){let L=E();I.__bindingPointIndex=L;let T=H.createBuffer(),_=I.__size,w=I.usage;return H.bindBuffer(H.UNIFORM_BUFFER,T),H.bufferData(H.UNIFORM_BUFFER,_,w),H.bindBuffer(H.UNIFORM_BUFFER,null),H.bindBufferBase(H.UNIFORM_BUFFER,L,T),T}function E(){for(let I=0;I<X;I++)if(Y.indexOf(I)===-1)return Y.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function R(I){let L=W[I.id],T=I.uniforms,_=I.__cache;H.bindBuffer(H.UNIFORM_BUFFER,L);for(let w=0,B=T.length;w<B;w++){let b=Array.isArray(T[w])?T[w]:[T[w]];for(let C=0,z=b.length;C<z;C++){let A=b[C];if(q(A,w,C,_)===!0){let x=A.__offset,p=Array.isArray(A.value)?A.value:[A.value],l=0;for(let o=0;o<p.length;o++){let d=p[o],t=D(d);if(typeof d==="number"||typeof d==="boolean")A.__data[0]=d,H.bufferSubData(H.UNIFORM_BUFFER,x+l,A.__data);else if(d.isMatrix3)A.__data[0]=d.elements[0],A.__data[1]=d.elements[1],A.__data[2]=d.elements[2],A.__data[3]=0,A.__data[4]=d.elements[3],A.__data[5]=d.elements[4],A.__data[6]=d.elements[5],A.__data[7]=0,A.__data[8]=d.elements[6],A.__data[9]=d.elements[7],A.__data[10]=d.elements[8],A.__data[11]=0;else d.toArray(A.__data,l),l+=t.storage/Float32Array.BYTES_PER_ELEMENT}H.bufferSubData(H.UNIFORM_BUFFER,x,A.__data)}}}H.bindBuffer(H.UNIFORM_BUFFER,null)}function q(I,L,T,_){let w=I.value,B=L+"_"+T;if(_[B]===void 0){if(typeof w==="number"||typeof w==="boolean")_[B]=w;else _[B]=w.clone();return!0}else{let b=_[B];if(typeof w==="number"||typeof w==="boolean"){if(b!==w)return _[B]=w,!0}else if(b.equals(w)===!1)return b.copy(w),!0}return!1}function O(I){let L=I.uniforms,T=0,_=16;for(let B=0,b=L.length;B<b;B++){let C=Array.isArray(L[B])?L[B]:[L[B]];for(let z=0,A=C.length;z<A;z++){let x=C[z],p=Array.isArray(x.value)?x.value:[x.value];for(let l=0,o=p.length;l<o;l++){let d=p[l],t=D(d),m=T%_,X0=m%t.boundary,H0=m+X0;if(T+=X0,H0!==0&&_-H0<t.storage)T+=_-H0;x.__data=new Float32Array(t.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=T,T+=t.storage}}}let w=T%_;if(w>0)T+=_-w;return I.__size=T,I.__cache={},this}function D(I){let L={boundary:0,storage:0};if(typeof I==="number"||typeof I==="boolean")L.boundary=4,L.storage=4;else if(I.isVector2)L.boundary=8,L.storage=8;else if(I.isVector3||I.isColor)L.boundary=16,L.storage=12;else if(I.isVector4)L.boundary=16,L.storage=16;else if(I.isMatrix3)L.boundary=48,L.storage=48;else if(I.isMatrix4)L.boundary=64,L.storage=64;else if(I.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I);return L}function F(I){let L=I.target;L.removeEventListener("dispose",F);let T=Y.indexOf(L.__bindingPointIndex);Y.splice(T,1),H.deleteBuffer(W[L.id]),delete W[L.id],delete Q[L.id]}function N(){for(let I in W)H.deleteBuffer(W[I]);Y=[],W={},Q={}}return{bind:K,update:U,dispose:N}}class vJ{constructor(H={}){let{canvas:$=yW(),context:J=null,depth:Z=!0,stencil:W=!1,alpha:Q=!1,antialias:Y=!1,premultipliedAlpha:X=!0,preserveDrawingBuffer:K=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:G=!1,reverseDepthBuffer:E=!1}=H;this.isWebGLRenderer=!0;let R;if(J!==null){if(typeof WebGLRenderingContext<"u"&&J instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=J.getContextAttributes().alpha}else R=Q;let q=new Uint32Array(4),O=new Int32Array(4),D=null,F=null,N=[],I=[];this.domElement=$,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=c6,this.toneMapping=N6,this.toneMappingExposure=1;let L=this,T=!1,_=0,w=0,B=null,b=-1,C=null,z=new J8,A=new J8,x=null,p=new A0(0),l=0,o=$.width,d=$.height,t=1,m=null,X0=null,H0=new J8(0,0,o,d),V0=new J8(0,0,o,d),g0=!1,n=new YH,J0=!1,D0=!1;this.transmissionResolutionScale=1;let k0=new W8,W0=new W8,C0=new S,u=new J8,S0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},n0=!1;function w0(){return B===null?t:1}let P=J;function l0(k,f){return $.getContext(k,f)}try{let k={alpha:!0,depth:Z,stencil:W,antialias:Y,premultipliedAlpha:X,preserveDrawingBuffer:K,powerPreference:U,failIfMajorPerformanceCaveat:G};if("setAttribute"in $)$.setAttribute("data-engine",`three.js r${fZ}`);if($.addEventListener("webglcontextlost",s,!1),$.addEventListener("webglcontextrestored",i,!1),$.addEventListener("webglcontextcreationerror",E0,!1),P===null){if(P=l0("webgl2",k),P===null)if(l0("webgl2"))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}}catch(k){throw console.error("THREE.WebGLRenderer: "+k.message),k}let P0,_0,Y0,o0,M0,B0,V,M,y,a,r,c,I0,K0,N0,v0,Z0,R0,c0,j0,q0,b0,m0,K8;function j(){if(P0=new yU(P),P0.init(),b0=new FG(P,P0),_0=new SU(P,P0,H,b0),Y0=new EG(P,P0),_0.reverseDepthBuffer&&E)Y0.buffers.depth.setReversed(!0);o0=new gU(P),M0=new t1,B0=new RG(P,P0,Y0,M0,_0,b0,o0),V=new jU(L),M=new xU(L),y=new nY(P),m0=new TU(P,y),a=new vU(P,y,o0,m0),r=new uU(P,a,y,o0),c0=new pU(P,_0,B0),v0=new _U(M0),c=new r1(L,V,M,P0,_0,m0,v0),I0=new MG(L,M0),K0=new HG,N0=new YG(P0),R0=new PU(L,V,M,Y0,r,R,X),Z0=new UG(L,r,_0),K8=new kG(P,o0,_0,Y0),j0=new AU(P,P0,o0),q0=new bU(P,P0,o0),o0.programs=c.programs,L.capabilities=_0,L.extensions=P0,L.properties=M0,L.renderLists=K0,L.shadowMap=Z0,L.state=Y0,L.info=o0}j();let $0=new BQ(L,P);this.xr=$0,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let k=P0.get("WEBGL_lose_context");if(k)k.loseContext()},this.forceContextRestore=function(){let k=P0.get("WEBGL_lose_context");if(k)k.restoreContext()},this.getPixelRatio=function(){return t},this.setPixelRatio=function(k){if(k===void 0)return;t=k,this.setSize(o,d,!1)},this.getSize=function(k){return k.set(o,d)},this.setSize=function(k,f,v=!0){if($0.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(o=k,d=f,$.width=Math.floor(k*t),$.height=Math.floor(f*t),v===!0)$.style.width=k+"px",$.style.height=f+"px";this.setViewport(0,0,k,f)},this.getDrawingBufferSize=function(k){return k.set(o*t,d*t).floor()},this.setDrawingBufferSize=function(k,f,v){o=k,d=f,t=v,$.width=Math.floor(k*v),$.height=Math.floor(f*v),this.setViewport(0,0,k,f)},this.getCurrentViewport=function(k){return k.copy(z)},this.getViewport=function(k){return k.copy(H0)},this.setViewport=function(k,f,v,g){if(k.isVector4)H0.set(k.x,k.y,k.z,k.w);else H0.set(k,f,v,g);Y0.viewport(z.copy(H0).multiplyScalar(t).round())},this.getScissor=function(k){return k.copy(V0)},this.setScissor=function(k,f,v,g){if(k.isVector4)V0.set(k.x,k.y,k.z,k.w);else V0.set(k,f,v,g);Y0.scissor(A.copy(V0).multiplyScalar(t).round())},this.getScissorTest=function(){return g0},this.setScissorTest=function(k){Y0.setScissorTest(g0=k)},this.setOpaqueSort=function(k){m=k},this.setTransparentSort=function(k){X0=k},this.getClearColor=function(k){return k.copy(R0.getClearColor())},this.setClearColor=function(){R0.setClearColor.apply(R0,arguments)},this.getClearAlpha=function(){return R0.getClearAlpha()},this.setClearAlpha=function(){R0.setClearAlpha.apply(R0,arguments)},this.clear=function(k=!0,f=!0,v=!0){let g=0;if(k){let h=!1;if(B!==null){let e=B.texture.format;h=e===P$||e===B$||e===V$}if(h){let e=B.texture.type,U0=e===S6||e===P7||e===JH||e===T7||e===w$||e===I$,F0=R0.getClearColor(),O0=R0.getClearAlpha(),f0=F0.r,h0=F0.g,L0=F0.b;if(U0)q[0]=f0,q[1]=h0,q[2]=L0,q[3]=O0,P.clearBufferuiv(P.COLOR,0,q);else O[0]=f0,O[1]=h0,O[2]=L0,O[3]=O0,P.clearBufferiv(P.COLOR,0,O)}else g|=P.COLOR_BUFFER_BIT}if(f)g|=P.DEPTH_BUFFER_BIT;if(v)g|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);P.clear(g)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){$.removeEventListener("webglcontextlost",s,!1),$.removeEventListener("webglcontextrestored",i,!1),$.removeEventListener("webglcontextcreationerror",E0,!1),R0.dispose(),K0.dispose(),N0.dispose(),M0.dispose(),V.dispose(),M.dispose(),r.dispose(),m0.dispose(),K8.dispose(),c.dispose(),$0.dispose(),$0.removeEventListener("sessionstart",e8),$0.removeEventListener("sessionend",$Z),y6.stop()};function s(k){k.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function i(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let k=o0.autoReset,f=Z0.enabled,v=Z0.autoUpdate,g=Z0.needsUpdate,h=Z0.type;j(),o0.autoReset=k,Z0.enabled=f,Z0.autoUpdate=v,Z0.needsUpdate=g,Z0.type=h}function E0(k){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",k.statusMessage)}function G0(k){let f=k.target;f.removeEventListener("dispose",G0),p0(f)}function p0(k){U8(k),M0.remove(k)}function U8(k){let f=M0.get(k).programs;if(f!==void 0){if(f.forEach(function(v){c.releaseProgram(v)}),k.isShaderMaterial)c.releaseShaderCache(k)}}this.renderBufferDirect=function(k,f,v,g,h,e){if(f===null)f=S0;let U0=h.isMesh&&h.matrixWorld.determinant()<0,F0=aQ(k,f,v,g,h);Y0.setMaterial(g,U0);let O0=v.index,f0=1;if(g.wireframe===!0){if(O0=a.getWireframeAttribute(v),O0===void 0)return;f0=2}let h0=v.drawRange,L0=v.attributes.position,s0=h0.start*f0,e0=(h0.start+h0.count)*f0;if(e!==null)s0=Math.max(s0,e.start*f0),e0=Math.min(e0,(e.start+e.count)*f0);if(O0!==null)s0=Math.max(s0,0),e0=Math.min(e0,O0.count);else if(L0!==void 0&&L0!==null)s0=Math.max(s0,0),e0=Math.min(e0,L0.count);let E8=e0-s0;if(E8<0||E8===1/0)return;m0.setup(h,g,F0,v,O0);let G8,a0=j0;if(O0!==null)G8=y.get(O0),a0=q0,a0.setIndex(G8);if(h.isMesh)if(g.wireframe===!0)Y0.setLineWidth(g.wireframeLinewidth*w0()),a0.setMode(P.LINES);else a0.setMode(P.TRIANGLES);else if(h.isLine){let z0=g.linewidth;if(z0===void 0)z0=1;if(Y0.setLineWidth(z0*w0()),h.isLineSegments)a0.setMode(P.LINES);else if(h.isLineLoop)a0.setMode(P.LINE_LOOP);else a0.setMode(P.LINE_STRIP)}else if(h.isPoints)a0.setMode(P.POINTS);else if(h.isSprite)a0.setMode(P.TRIANGLES);if(h.isBatchedMesh)if(h._multiDrawInstances!==null)a0.renderMultiDrawInstances(h._multiDrawStarts,h._multiDrawCounts,h._multiDrawCount,h._multiDrawInstances);else if(!P0.get("WEBGL_multi_draw")){let{_multiDrawStarts:z0,_multiDrawCounts:k8,_multiDrawCount:H8}=h,c8=O0?y.get(O0).bytesPerElement:1,Q7=M0.get(g).currentProgram.getUniforms();for(let h8=0;h8<H8;h8++)Q7.setValue(P,"_gl_DrawID",h8),a0.render(z0[h8]/c8,k8[h8])}else a0.renderMultiDraw(h._multiDrawStarts,h._multiDrawCounts,h._multiDrawCount);else if(h.isInstancedMesh)a0.renderInstances(s0,E8,h.count);else if(v.isInstancedBufferGeometry){let z0=v._maxInstanceCount!==void 0?v._maxInstanceCount:1/0,k8=Math.min(v.instanceCount,z0);a0.renderInstances(s0,E8,k8)}else a0.render(s0,E8)};function M8(k,f,v){if(k.transparent===!0&&k.side===d8&&k.forceSinglePass===!1)k.side=A8,k.needsUpdate=!0,zH(k,f,v),k.side=z7,k.needsUpdate=!0,zH(k,f,v),k.side=d8;else zH(k,f,v)}this.compile=function(k,f,v=null){if(v===null)v=k;if(F=N0.get(v),F.init(f),I.push(F),v.traverseVisible(function(h){if(h.isLight&&h.layers.test(f.layers)){if(F.pushLight(h),h.castShadow)F.pushShadow(h)}}),k!==v)k.traverseVisible(function(h){if(h.isLight&&h.layers.test(f.layers)){if(F.pushLight(h),h.castShadow)F.pushShadow(h)}});F.setupLights();let g=new Set;return k.traverse(function(h){if(!(h.isMesh||h.isPoints||h.isLine||h.isSprite))return;let e=h.material;if(e)if(Array.isArray(e))for(let U0=0;U0<e.length;U0++){let F0=e[U0];M8(F0,v,h),g.add(F0)}else M8(e,v,h),g.add(e)}),I.pop(),F=null,g},this.compileAsync=function(k,f,v=null){let g=this.compile(k,f,v);return new Promise((h)=>{function e(){if(g.forEach(function(U0){if(M0.get(U0).currentProgram.isReady())g.delete(U0)}),g.size===0){h(k);return}setTimeout(e,10)}if(P0.get("KHR_parallel_shader_compile")!==null)e();else setTimeout(e,10)})};let t0=null;function X6(k){if(t0)t0(k)}function e8(){y6.stop()}function $Z(){y6.start()}let y6=new qQ;if(y6.setAnimationLoop(X6),typeof self<"u")y6.setContext(self);this.setAnimationLoop=function(k){t0=k,$0.setAnimationLoop(k),k===null?y6.stop():y6.start()},$0.addEventListener("sessionstart",e8),$0.addEventListener("sessionend",$Z),this.render=function(k,f){if(f!==void 0&&f.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(k.matrixWorldAutoUpdate===!0)k.updateMatrixWorld();if(f.parent===null&&f.matrixWorldAutoUpdate===!0)f.updateMatrixWorld();if($0.enabled===!0&&$0.isPresenting===!0){if($0.cameraAutoUpdate===!0)$0.updateCamera(f);f=$0.getCamera()}if(k.isScene===!0)k.onBeforeRender(L,k,f,B);if(F=N0.get(k,I.length),F.init(f),I.push(F),W0.multiplyMatrices(f.projectionMatrix,f.matrixWorldInverse),n.setFromProjectionMatrix(W0),D0=this.localClippingEnabled,J0=v0.init(this.clippingPlanes,D0),D=K0.get(k,N.length),D.init(),N.push(D),$0.enabled===!0&&$0.isPresenting===!0){let e=L.xr.getDepthSensingMesh();if(e!==null)d9(e,f,-1/0,L.sortObjects)}if(d9(k,f,0,L.sortObjects),D.finish(),L.sortObjects===!0)D.sort(m,X0);if(n0=$0.enabled===!1||$0.isPresenting===!1||$0.hasDepthSensing()===!1,n0)R0.addToRenderList(D,k);if(this.info.render.frame++,J0===!0)v0.beginShadows();let v=F.state.shadowsArray;if(Z0.render(v,k,f),J0===!0)v0.endShadows();if(this.info.autoReset===!0)this.info.reset();let{opaque:g,transmissive:h}=D;if(F.setupLights(),f.isArrayCamera){let e=f.cameras;if(h.length>0)for(let U0=0,F0=e.length;U0<F0;U0++){let O0=e[U0];ZZ(g,h,k,O0)}if(n0)R0.render(k);for(let U0=0,F0=e.length;U0<F0;U0++){let O0=e[U0];JZ(D,k,O0,O0.viewport)}}else{if(h.length>0)ZZ(g,h,k,f);if(n0)R0.render(k);JZ(D,k,f)}if(B!==null&&w===0)B0.updateMultisampleRenderTarget(B),B0.updateRenderTargetMipmap(B);if(k.isScene===!0)k.onAfterRender(L,k,f);if(m0.resetDefaultState(),b=-1,C=null,I.pop(),I.length>0){if(F=I[I.length-1],J0===!0)v0.setGlobalState(L.clippingPlanes,F.state.camera)}else F=null;if(N.pop(),N.length>0)D=N[N.length-1];else D=null};function d9(k,f,v,g){if(k.visible===!1)return;if(k.layers.test(f.layers)){if(k.isGroup)v=k.renderOrder;else if(k.isLOD){if(k.autoUpdate===!0)k.update(f)}else if(k.isLight){if(F.pushLight(k),k.castShadow)F.pushShadow(k)}else if(k.isSprite){if(!k.frustumCulled||n.intersectsSprite(k)){if(g)u.setFromMatrixPosition(k.matrixWorld).applyMatrix4(W0);let U0=r.update(k),F0=k.material;if(F0.visible)D.push(k,U0,F0,v,u.z,null)}}else if(k.isMesh||k.isLine||k.isPoints){if(!k.frustumCulled||n.intersectsObject(k)){let U0=r.update(k),F0=k.material;if(g){if(k.boundingSphere!==void 0){if(k.boundingSphere===null)k.computeBoundingSphere();u.copy(k.boundingSphere.center)}else{if(U0.boundingSphere===null)U0.computeBoundingSphere();u.copy(U0.boundingSphere.center)}u.applyMatrix4(k.matrixWorld).applyMatrix4(W0)}if(Array.isArray(F0)){let O0=U0.groups;for(let f0=0,h0=O0.length;f0<h0;f0++){let L0=O0[f0],s0=F0[L0.materialIndex];if(s0&&s0.visible)D.push(k,U0,s0,v,u.z,L0)}}else if(F0.visible)D.push(k,U0,F0,v,u.z,null)}}}let e=k.children;for(let U0=0,F0=e.length;U0<F0;U0++)d9(e[U0],f,v,g)}function JZ(k,f,v,g){let{opaque:h,transmissive:e,transparent:U0}=k;if(F.setupLightsView(v),J0===!0)v0.setGlobalState(L.clippingPlanes,v);if(g)Y0.viewport(z.copy(g));if(h.length>0)CH(h,f,v);if(e.length>0)CH(e,f,v);if(U0.length>0)CH(U0,f,v);Y0.buffers.depth.setTest(!0),Y0.buffers.depth.setMask(!0),Y0.buffers.color.setMask(!0),Y0.setPolygonOffset(!1)}function ZZ(k,f,v,g){if((v.isScene===!0?v.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[g.id]===void 0)F.state.transmissionRenderTarget[g.id]=new O6(1,1,{generateMipmaps:!0,type:P0.has("EXT_color_buffer_half_float")||P0.has("EXT_color_buffer_float")?ZH:S6,minFilter:B7,samples:4,stencilBuffer:W,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:i0.workingColorSpace});let e=F.state.transmissionRenderTarget[g.id],U0=g.viewport||z;e.setSize(U0.z*L.transmissionResolutionScale,U0.w*L.transmissionResolutionScale);let F0=L.getRenderTarget();if(L.setRenderTarget(e),L.getClearColor(p),l=L.getClearAlpha(),l<1)L.setClearColor(16777215,0.5);if(L.clear(),n0)R0.render(v);let O0=L.toneMapping;L.toneMapping=N6;let f0=g.viewport;if(g.viewport!==void 0)g.viewport=void 0;if(F.setupLightsView(g),J0===!0)v0.setGlobalState(L.clippingPlanes,g);if(CH(k,v,g),B0.updateMultisampleRenderTarget(e),B0.updateRenderTargetMipmap(e),P0.has("WEBGL_multisampled_render_to_texture")===!1){let h0=!1;for(let L0=0,s0=f.length;L0<s0;L0++){let e0=f[L0],E8=e0.object,G8=e0.geometry,a0=e0.material,z0=e0.group;if(a0.side===d8&&E8.layers.test(g.layers)){let k8=a0.side;a0.side=A8,a0.needsUpdate=!0,WZ(E8,v,g,G8,a0,z0),a0.side=k8,a0.needsUpdate=!0,h0=!0}}if(h0===!0)B0.updateMultisampleRenderTarget(e),B0.updateRenderTargetMipmap(e)}if(L.setRenderTarget(F0),L.setClearColor(p,l),f0!==void 0)g.viewport=f0;L.toneMapping=O0}function CH(k,f,v){let g=f.isScene===!0?f.overrideMaterial:null;for(let h=0,e=k.length;h<e;h++){let U0=k[h],F0=U0.object,O0=U0.geometry,f0=g===null?U0.material:g,h0=U0.group;if(F0.layers.test(v.layers))WZ(F0,f,v,O0,f0,h0)}}function WZ(k,f,v,g,h,e){if(k.onBeforeRender(L,f,v,g,h,e),k.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,k.matrixWorld),k.normalMatrix.getNormalMatrix(k.modelViewMatrix),h.onBeforeRender(L,f,v,g,k,e),h.transparent===!0&&h.side===d8&&h.forceSinglePass===!1)h.side=A8,h.needsUpdate=!0,L.renderBufferDirect(v,f,g,h,k,e),h.side=z7,h.needsUpdate=!0,L.renderBufferDirect(v,f,g,h,k,e),h.side=d8;else L.renderBufferDirect(v,f,g,h,k,e);k.onAfterRender(L,f,v,g,h,e)}function zH(k,f,v){if(f.isScene!==!0)f=S0;let g=M0.get(k),h=F.state.lights,e=F.state.shadowsArray,U0=h.state.version,F0=c.getParameters(k,h.state,e,f,v),O0=c.getProgramCacheKey(F0),f0=g.programs;if(g.environment=k.isMeshStandardMaterial?f.environment:null,g.fog=f.fog,g.envMap=(k.isMeshStandardMaterial?M:V).get(k.envMap||g.environment),g.envMapRotation=g.environment!==null&&k.envMap===null?f.environmentRotation:k.envMapRotation,f0===void 0)k.addEventListener("dispose",G0),f0=new Map,g.programs=f0;let h0=f0.get(O0);if(h0!==void 0){if(g.currentProgram===h0&&g.lightsStateVersion===U0)return YZ(k,F0),h0}else F0.uniforms=c.getUniforms(k),k.onBeforeCompile(F0,L),h0=c.acquireProgram(F0,O0),f0.set(O0,h0),g.uniforms=F0.uniforms;let L0=g.uniforms;if(!k.isShaderMaterial&&!k.isRawShaderMaterial||k.clipping===!0)L0.clippingPlanes=v0.uniform;if(YZ(k,F0),g.needsLights=tQ(k),g.lightsStateVersion=U0,g.needsLights)L0.ambientLightColor.value=h.state.ambient,L0.lightProbe.value=h.state.probe,L0.directionalLights.value=h.state.directional,L0.directionalLightShadows.value=h.state.directionalShadow,L0.spotLights.value=h.state.spot,L0.spotLightShadows.value=h.state.spotShadow,L0.rectAreaLights.value=h.state.rectArea,L0.ltc_1.value=h.state.rectAreaLTC1,L0.ltc_2.value=h.state.rectAreaLTC2,L0.pointLights.value=h.state.point,L0.pointLightShadows.value=h.state.pointShadow,L0.hemisphereLights.value=h.state.hemi,L0.directionalShadowMap.value=h.state.directionalShadowMap,L0.directionalShadowMatrix.value=h.state.directionalShadowMatrix,L0.spotShadowMap.value=h.state.spotShadowMap,L0.spotLightMatrix.value=h.state.spotLightMatrix,L0.spotLightMap.value=h.state.spotLightMap,L0.pointShadowMap.value=h.state.pointShadowMap,L0.pointShadowMatrix.value=h.state.pointShadowMatrix;return g.currentProgram=h0,g.uniformsList=null,h0}function QZ(k){if(k.uniformsList===null){let f=k.currentProgram.getUniforms();k.uniformsList=qH.seqWithValue(f.seq,k.uniforms)}return k.uniformsList}function YZ(k,f){let v=M0.get(k);v.outputColorSpace=f.outputColorSpace,v.batching=f.batching,v.batchingColor=f.batchingColor,v.instancing=f.instancing,v.instancingColor=f.instancingColor,v.instancingMorph=f.instancingMorph,v.skinning=f.skinning,v.morphTargets=f.morphTargets,v.morphNormals=f.morphNormals,v.morphColors=f.morphColors,v.morphTargetsCount=f.morphTargetsCount,v.numClippingPlanes=f.numClippingPlanes,v.numIntersection=f.numClipIntersection,v.vertexAlphas=f.vertexAlphas,v.vertexTangents=f.vertexTangents,v.toneMapping=f.toneMapping}function aQ(k,f,v,g,h){if(f.isScene!==!0)f=S0;B0.resetTextureUnits();let e=f.fog,U0=g.isMeshStandardMaterial?f.environment:null,F0=B===null?L.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:QH,O0=(g.isMeshStandardMaterial?M:V).get(g.envMap||U0),f0=g.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,h0=!!v.attributes.tangent&&(!!g.normalMap||g.anisotropy>0),L0=!!v.morphAttributes.position,s0=!!v.morphAttributes.normal,e0=!!v.morphAttributes.color,E8=N6;if(g.toneMapped){if(B===null||B.isXRRenderTarget===!0)E8=L.toneMapping}let G8=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,a0=G8!==void 0?G8.length:0,z0=M0.get(g),k8=F.state.lights;if(J0===!0){if(D0===!0||k!==C){let P8=k===C&&g.id===b;v0.setState(g,k,P8)}}let H8=!1;if(g.version===z0.__version){if(z0.needsLights&&z0.lightsStateVersion!==k8.state.version)H8=!0;else if(z0.outputColorSpace!==F0)H8=!0;else if(h.isBatchedMesh&&z0.batching===!1)H8=!0;else if(!h.isBatchedMesh&&z0.batching===!0)H8=!0;else if(h.isBatchedMesh&&z0.batchingColor===!0&&h.colorTexture===null)H8=!0;else if(h.isBatchedMesh&&z0.batchingColor===!1&&h.colorTexture!==null)H8=!0;else if(h.isInstancedMesh&&z0.instancing===!1)H8=!0;else if(!h.isInstancedMesh&&z0.instancing===!0)H8=!0;else if(h.isSkinnedMesh&&z0.skinning===!1)H8=!0;else if(!h.isSkinnedMesh&&z0.skinning===!0)H8=!0;else if(h.isInstancedMesh&&z0.instancingColor===!0&&h.instanceColor===null)H8=!0;else if(h.isInstancedMesh&&z0.instancingColor===!1&&h.instanceColor!==null)H8=!0;else if(h.isInstancedMesh&&z0.instancingMorph===!0&&h.morphTexture===null)H8=!0;else if(h.isInstancedMesh&&z0.instancingMorph===!1&&h.morphTexture!==null)H8=!0;else if(z0.envMap!==O0)H8=!0;else if(g.fog===!0&&z0.fog!==e)H8=!0;else if(z0.numClippingPlanes!==void 0&&(z0.numClippingPlanes!==v0.numPlanes||z0.numIntersection!==v0.numIntersection))H8=!0;else if(z0.vertexAlphas!==f0)H8=!0;else if(z0.vertexTangents!==h0)H8=!0;else if(z0.morphTargets!==L0)H8=!0;else if(z0.morphNormals!==s0)H8=!0;else if(z0.morphColors!==e0)H8=!0;else if(z0.toneMapping!==E8)H8=!0;else if(z0.morphTargetsCount!==a0)H8=!0}else H8=!0,z0.__version=g.version;let c8=z0.currentProgram;if(H8===!0)c8=zH(g,f,h);let Q7=!1,h8=!1,l7=!1,X8=c8.getUniforms(),b8=z0.uniforms;if(Y0.useProgram(c8.program))Q7=!0,h8=!0,l7=!0;if(g.id!==b)b=g.id,h8=!0;if(Q7||C!==k){if(Y0.buffers.depth.getReversed())k0.copy(k.projectionMatrix),bW(k0),gW(k0),X8.setValue(P,"projectionMatrix",k0);else X8.setValue(P,"projectionMatrix",k.projectionMatrix);X8.setValue(P,"viewMatrix",k.matrixWorldInverse);let j8=X8.map.cameraPosition;if(j8!==void 0)j8.setValue(P,C0.setFromMatrixPosition(k.matrixWorld));if(_0.logarithmicDepthBuffer)X8.setValue(P,"logDepthBufFC",2/(Math.log(k.far+1)/Math.LN2));if(g.isMeshPhongMaterial||g.isMeshToonMaterial||g.isMeshLambertMaterial||g.isMeshBasicMaterial||g.isMeshStandardMaterial||g.isShaderMaterial)X8.setValue(P,"isOrthographic",k.isOrthographicCamera===!0);if(C!==k)C=k,h8=!0,l7=!0}if(h.isSkinnedMesh){X8.setOptional(P,h,"bindMatrix"),X8.setOptional(P,h,"bindMatrixInverse");let P8=h.skeleton;if(P8){if(P8.boneTexture===null)P8.computeBoneTexture();X8.setValue(P,"boneTexture",P8.boneTexture,B0)}}if(h.isBatchedMesh){if(X8.setOptional(P,h,"batchingTexture"),X8.setValue(P,"batchingTexture",h._matricesTexture,B0),X8.setOptional(P,h,"batchingIdTexture"),X8.setValue(P,"batchingIdTexture",h._indirectTexture,B0),X8.setOptional(P,h,"batchingColorTexture"),h._colorsTexture!==null)X8.setValue(P,"batchingColorTexture",h._colorsTexture,B0)}let g8=v.morphAttributes;if(g8.position!==void 0||g8.normal!==void 0||g8.color!==void 0)c0.update(h,v,c8);if(h8||z0.receiveShadow!==h.receiveShadow)z0.receiveShadow=h.receiveShadow,X8.setValue(P,"receiveShadow",h.receiveShadow);if(g.isMeshGouraudMaterial&&g.envMap!==null)b8.envMap.value=O0,b8.flipEnvMap.value=O0.isCubeTexture&&O0.isRenderTargetTexture===!1?-1:1;if(g.isMeshStandardMaterial&&g.envMap===null&&f.environment!==null)b8.envMapIntensity.value=f.environmentIntensity;if(h8){if(X8.setValue(P,"toneMappingExposure",L.toneMappingExposure),z0.needsLights)rQ(b8,l7);if(e&&g.fog===!0)I0.refreshFogUniforms(b8,e);I0.refreshMaterialUniforms(b8,g,t,d,F.state.transmissionRenderTarget[k.id]),qH.upload(P,QZ(z0),b8,B0)}if(g.isShaderMaterial&&g.uniformsNeedUpdate===!0)qH.upload(P,QZ(z0),b8,B0),g.uniformsNeedUpdate=!1;if(g.isSpriteMaterial)X8.setValue(P,"center",h.center);if(X8.setValue(P,"modelViewMatrix",h.modelViewMatrix),X8.setValue(P,"normalMatrix",h.normalMatrix),X8.setValue(P,"modelMatrix",h.matrixWorld),g.isShaderMaterial||g.isRawShaderMaterial){let P8=g.uniformsGroups;for(let j8=0,c9=P8.length;j8<c9;j8++){let v6=P8[j8];K8.update(v6,c8),K8.bind(v6,c8)}}return c8}function rQ(k,f){k.ambientLightColor.needsUpdate=f,k.lightProbe.needsUpdate=f,k.directionalLights.needsUpdate=f,k.directionalLightShadows.needsUpdate=f,k.pointLights.needsUpdate=f,k.pointLightShadows.needsUpdate=f,k.spotLights.needsUpdate=f,k.spotLightShadows.needsUpdate=f,k.rectAreaLights.needsUpdate=f,k.hemisphereLights.needsUpdate=f}function tQ(k){return k.isMeshLambertMaterial||k.isMeshToonMaterial||k.isMeshPhongMaterial||k.isMeshStandardMaterial||k.isShadowMaterial||k.isShaderMaterial&&k.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(k,f,v){M0.get(k.texture).__webglTexture=f,M0.get(k.depthTexture).__webglTexture=v;let g=M0.get(k);if(g.__hasExternalTextures=!0,g.__autoAllocateDepthBuffer=v===void 0,!g.__autoAllocateDepthBuffer){if(P0.has("WEBGL_multisampled_render_to_texture")===!0)console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),g.__useRenderToTexture=!1}},this.setRenderTargetFramebuffer=function(k,f){let v=M0.get(k);v.__webglFramebuffer=f,v.__useDefaultFramebuffer=f===void 0};let eQ=P.createFramebuffer();this.setRenderTarget=function(k,f=0,v=0){B=k,_=f,w=v;let g=!0,h=null,e=!1,U0=!1;if(k){let O0=M0.get(k);if(O0.__useDefaultFramebuffer!==void 0)Y0.bindFramebuffer(P.FRAMEBUFFER,null),g=!1;else if(O0.__webglFramebuffer===void 0)B0.setupRenderTarget(k);else if(O0.__hasExternalTextures)B0.rebindTextures(k,M0.get(k.texture).__webglTexture,M0.get(k.depthTexture).__webglTexture);else if(k.depthBuffer){let L0=k.depthTexture;if(O0.__boundDepthTexture!==L0){if(L0!==null&&M0.has(L0)&&(k.width!==L0.image.width||k.height!==L0.image.height))throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B0.setupDepthRenderbuffer(k)}}let f0=k.texture;if(f0.isData3DTexture||f0.isDataArrayTexture||f0.isCompressedArrayTexture)U0=!0;let h0=M0.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget){if(Array.isArray(h0[f]))h=h0[f][v];else h=h0[f];e=!0}else if(k.samples>0&&B0.useMultisampledRTT(k)===!1)h=M0.get(k).__webglMultisampledFramebuffer;else if(Array.isArray(h0))h=h0[v];else h=h0;z.copy(k.viewport),A.copy(k.scissor),x=k.scissorTest}else z.copy(H0).multiplyScalar(t).floor(),A.copy(V0).multiplyScalar(t).floor(),x=g0;if(v!==0)h=eQ;if(Y0.bindFramebuffer(P.FRAMEBUFFER,h)&&g)Y0.drawBuffers(k,h);if(Y0.viewport(z),Y0.scissor(A),Y0.setScissorTest(x),e){let O0=M0.get(k.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+f,O0.__webglTexture,v)}else if(U0){let O0=M0.get(k.texture),f0=f;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,O0.__webglTexture,v,f0)}else if(k!==null&&v!==0){let O0=M0.get(k.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,O0.__webglTexture,v)}b=-1},this.readRenderTargetPixels=function(k,f,v,g,h,e,U0){if(!(k&&k.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let F0=M0.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&U0!==void 0)F0=F0[U0];if(F0){Y0.bindFramebuffer(P.FRAMEBUFFER,F0);try{let O0=k.texture,f0=O0.format,h0=O0.type;if(!_0.textureFormatReadable(f0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_0.textureTypeReadable(h0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(f>=0&&f<=k.width-g&&(v>=0&&v<=k.height-h))P.readPixels(f,v,g,h,b0.convert(f0),b0.convert(h0),e)}finally{let O0=B!==null?M0.get(B).__webglFramebuffer:null;Y0.bindFramebuffer(P.FRAMEBUFFER,O0)}}},this.readRenderTargetPixelsAsync=async function(k,f,v,g,h,e,U0){if(!(k&&k.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let F0=M0.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&U0!==void 0)F0=F0[U0];if(F0){let O0=k.texture,f0=O0.format,h0=O0.type;if(!_0.textureFormatReadable(f0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_0.textureTypeReadable(h0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(f>=0&&f<=k.width-g&&(v>=0&&v<=k.height-h)){Y0.bindFramebuffer(P.FRAMEBUFFER,F0);let L0=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,L0),P.bufferData(P.PIXEL_PACK_BUFFER,e.byteLength,P.STREAM_READ),P.readPixels(f,v,g,h,b0.convert(f0),b0.convert(h0),0);let s0=B!==null?M0.get(B).__webglFramebuffer:null;Y0.bindFramebuffer(P.FRAMEBUFFER,s0);let e0=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await vW(P,e0,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,L0),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,e),P.deleteBuffer(L0),P.deleteSync(e0),e}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(k,f=null,v=0){if(k.isTexture!==!0)n6("WebGLRenderer: copyFramebufferToTexture function signature has changed."),f=arguments[0]||null,k=arguments[1];let g=Math.pow(2,-v),h=Math.floor(k.image.width*g),e=Math.floor(k.image.height*g),U0=f!==null?f.x:0,F0=f!==null?f.y:0;B0.setTexture2D(k,0),P.copyTexSubImage2D(P.TEXTURE_2D,v,0,0,U0,F0,h,e),Y0.unbindTexture()};let HY=P.createFramebuffer(),$Y=P.createFramebuffer();if(this.copyTextureToTexture=function(k,f,v=null,g=null,h=0,e=null){if(k.isTexture!==!0)n6("WebGLRenderer: copyTextureToTexture function signature has changed."),g=arguments[0]||null,k=arguments[1],f=arguments[2],e=arguments[3]||0,v=null;if(e===null)if(h!==0)n6("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),e=h,h=0;else e=0;let U0,F0,O0,f0,h0,L0,s0,e0,E8,G8=k.isCompressedTexture?k.mipmaps[e]:k.image;if(v!==null)U0=v.max.x-v.min.x,F0=v.max.y-v.min.y,O0=v.isBox3?v.max.z-v.min.z:1,f0=v.min.x,h0=v.min.y,L0=v.isBox3?v.min.z:0;else{let g8=Math.pow(2,-h);if(U0=Math.floor(G8.width*g8),F0=Math.floor(G8.height*g8),k.isDataArrayTexture)O0=G8.depth;else if(k.isData3DTexture)O0=Math.floor(G8.depth*g8);else O0=1;f0=0,h0=0,L0=0}if(g!==null)s0=g.x,e0=g.y,E8=g.z;else s0=0,e0=0,E8=0;let a0=b0.convert(f.format),z0=b0.convert(f.type),k8;if(f.isData3DTexture)B0.setTexture3D(f,0),k8=P.TEXTURE_3D;else if(f.isDataArrayTexture||f.isCompressedArrayTexture)B0.setTexture2DArray(f,0),k8=P.TEXTURE_2D_ARRAY;else B0.setTexture2D(f,0),k8=P.TEXTURE_2D;P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,f.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,f.unpackAlignment);let H8=P.getParameter(P.UNPACK_ROW_LENGTH),c8=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Q7=P.getParameter(P.UNPACK_SKIP_PIXELS),h8=P.getParameter(P.UNPACK_SKIP_ROWS),l7=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,G8.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,G8.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,f0),P.pixelStorei(P.UNPACK_SKIP_ROWS,h0),P.pixelStorei(P.UNPACK_SKIP_IMAGES,L0);let X8=k.isDataArrayTexture||k.isData3DTexture,b8=f.isDataArrayTexture||f.isData3DTexture;if(k.isDepthTexture){let g8=M0.get(k),P8=M0.get(f),j8=M0.get(g8.__renderTarget),c9=M0.get(P8.__renderTarget);Y0.bindFramebuffer(P.READ_FRAMEBUFFER,j8.__webglFramebuffer),Y0.bindFramebuffer(P.DRAW_FRAMEBUFFER,c9.__webglFramebuffer);for(let v6=0;v6<O0;v6++){if(X8)P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,M0.get(k).__webglTexture,h,L0+v6),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,M0.get(f).__webglTexture,e,E8+v6);P.blitFramebuffer(f0,h0,U0,F0,s0,e0,U0,F0,P.DEPTH_BUFFER_BIT,P.NEAREST)}Y0.bindFramebuffer(P.READ_FRAMEBUFFER,null),Y0.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(h!==0||k.isRenderTargetTexture||M0.has(k)){let g8=M0.get(k),P8=M0.get(f);Y0.bindFramebuffer(P.READ_FRAMEBUFFER,HY),Y0.bindFramebuffer(P.DRAW_FRAMEBUFFER,$Y);for(let j8=0;j8<O0;j8++){if(X8)P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,g8.__webglTexture,h,L0+j8);else P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,g8.__webglTexture,h);if(b8)P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P8.__webglTexture,e,E8+j8);else P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,P8.__webglTexture,e);if(h!==0)P.blitFramebuffer(f0,h0,U0,F0,s0,e0,U0,F0,P.COLOR_BUFFER_BIT,P.NEAREST);else if(b8)P.copyTexSubImage3D(k8,e,s0,e0,E8+j8,f0,h0,U0,F0);else P.copyTexSubImage2D(k8,e,s0,e0,f0,h0,U0,F0)}Y0.bindFramebuffer(P.READ_FRAMEBUFFER,null),Y0.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(b8)if(k.isDataTexture||k.isData3DTexture)P.texSubImage3D(k8,e,s0,e0,E8,U0,F0,O0,a0,z0,G8.data);else if(f.isCompressedArrayTexture)P.compressedTexSubImage3D(k8,e,s0,e0,E8,U0,F0,O0,a0,G8.data);else P.texSubImage3D(k8,e,s0,e0,E8,U0,F0,O0,a0,z0,G8);else if(k.isDataTexture)P.texSubImage2D(P.TEXTURE_2D,e,s0,e0,U0,F0,a0,z0,G8.data);else if(k.isCompressedTexture)P.compressedTexSubImage2D(P.TEXTURE_2D,e,s0,e0,G8.width,G8.height,a0,G8.data);else P.texSubImage2D(P.TEXTURE_2D,e,s0,e0,U0,F0,a0,z0,G8);if(P.pixelStorei(P.UNPACK_ROW_LENGTH,H8),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,c8),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Q7),P.pixelStorei(P.UNPACK_SKIP_ROWS,h8),P.pixelStorei(P.UNPACK_SKIP_IMAGES,l7),e===0&&f.generateMipmaps)P.generateMipmap(k8);Y0.unbindTexture()},this.copyTextureToTexture3D=function(k,f,v=null,g=null,h=0){if(k.isTexture!==!0)n6("WebGLRenderer: copyTextureToTexture3D function signature has changed."),v=arguments[0]||null,g=arguments[1]||null,k=arguments[2],f=arguments[3],h=arguments[4]||0;return n6('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(k,f,v,g,h)},this.initRenderTarget=function(k){if(M0.get(k).__webglFramebuffer===void 0)B0.setupRenderTarget(k)},this.initTexture=function(k){if(k.isCubeTexture)B0.setTextureCube(k,0);else if(k.isData3DTexture)B0.setTexture3D(k,0);else if(k.isDataArrayTexture||k.isCompressedArrayTexture)B0.setTexture2DArray(k,0);else B0.setTexture2D(k,0);Y0.unbindTexture()},this.resetState=function(){_=0,w=0,B=null,Y0.reset(),m0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xW}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(H){this._outputColorSpace=H;let $=this.getContext();$.drawingBufferColorspace=i0._getDrawingBufferColorSpace(H),$.unpackColorSpace=i0._getUnpackColorSpace()}}var PQ={type:"change"},gJ={type:"start"},AQ={type:"end"},h9=new i6,TQ=new o8,LG=Math.cos(70*WJ.DEG2RAD),O8=new S,f8=2*Math.PI,Z8={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},bJ=0.000001;class pJ extends P9{constructor(H,$=null){super(H,$);if(this.state=Z8.NONE,this.enabled=!0,this.target=new S,this.cursor=new S,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:P6.ROTATE,MIDDLE:P6.DOLLY,RIGHT:P6.PAN},this.touches={ONE:T6.ROTATE,TWO:T6.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new S,this._lastQuaternion=new v8,this._lastTargetPosition=new S,this._quat=new v8().setFromUnitVectors(H.up,new S(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new FH,this._sphericalDelta=new FH,this._scale=1,this._panOffset=new S,this._rotateStart=new T0,this._rotateEnd=new T0,this._rotateDelta=new T0,this._panStart=new T0,this._panEnd=new T0,this._panDelta=new T0,this._dollyStart=new T0,this._dollyEnd=new T0,this._dollyDelta=new T0,this._dollyDirection=new S,this._mouse=new T0,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=zG.bind(this),this._onPointerDown=CG.bind(this),this._onPointerUp=wG.bind(this),this._onContextMenu=SG.bind(this),this._onMouseWheel=BG.bind(this),this._onKeyDown=PG.bind(this),this._onTouchStart=TG.bind(this),this._onTouchMove=AG.bind(this),this._onMouseDown=IG.bind(this),this._onMouseMove=VG.bind(this),this._interceptControlDown=_G.bind(this),this._interceptControlUp=jG.bind(this),this.domElement!==null)this.connect();this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(H){H.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=H}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(PQ),this.update(),this.state=Z8.NONE}update(H=null){let $=this.object.position;if(O8.copy($).sub(this.target),O8.applyQuaternion(this._quat),this._spherical.setFromVector3(O8),this.autoRotate&&this.state===Z8.NONE)this._rotateLeft(this._getAutoRotationAngle(H));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let J=this.minAzimuthAngle,Z=this.maxAzimuthAngle;if(isFinite(J)&&isFinite(Z)){if(J<-Math.PI)J+=f8;else if(J>Math.PI)J-=f8;if(Z<-Math.PI)Z+=f8;else if(Z>Math.PI)Z-=f8;if(J<=Z)this._spherical.theta=Math.max(J,Math.min(Z,this._spherical.theta));else this._spherical.theta=this._spherical.theta>(J+Z)/2?Math.max(J,this._spherical.theta):Math.min(Z,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let W=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let Q=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),W=Q!=this._spherical.radius}if(O8.setFromSpherical(this._spherical),O8.applyQuaternion(this._quatInverse),$.copy(this.target).add(O8),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let Q=null;if(this.object.isPerspectiveCamera){let Y=O8.length();Q=this._clampDistance(Y*this._scale);let X=Y-Q;this.object.position.addScaledVector(this._dollyDirection,X),this.object.updateMatrixWorld(),W=!!X}else if(this.object.isOrthographicCamera){let Y=new S(this._mouse.x,this._mouse.y,0);Y.unproject(this.object);let X=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),W=X!==this.object.zoom;let K=new S(this._mouse.x,this._mouse.y,0);K.unproject(this.object),this.object.position.sub(K).add(Y),this.object.updateMatrixWorld(),Q=O8.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(Q!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(Q).add(this.object.position);else if(h9.origin.copy(this.object.position),h9.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(h9.direction))<LG)this.object.lookAt(this.target);else TQ.setFromNormalAndCoplanarPoint(this.object.up,this.target),h9.intersectPlane(TQ,this.target)}else if(this.object.isOrthographicCamera){let Q=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),Q!==this.object.zoom)this.object.updateProjectionMatrix(),W=!0}if(this._scale=1,this._performCursorZoom=!1,W||this._lastPosition.distanceToSquared(this.object.position)>bJ||8*(1-this._lastQuaternion.dot(this.object.quaternion))>bJ||this._lastTargetPosition.distanceToSquared(this.target)>bJ)return this.dispatchEvent(PQ),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(H){if(H!==null)return f8/60*this.autoRotateSpeed*H;else return f8/60/60*this.autoRotateSpeed}_getZoomScale(H){let $=Math.abs(H*0.01);return Math.pow(0.95,this.zoomSpeed*$)}_rotateLeft(H){this._sphericalDelta.theta-=H}_rotateUp(H){this._sphericalDelta.phi-=H}_panLeft(H,$){O8.setFromMatrixColumn($,0),O8.multiplyScalar(-H),this._panOffset.add(O8)}_panUp(H,$){if(this.screenSpacePanning===!0)O8.setFromMatrixColumn($,1);else O8.setFromMatrixColumn($,0),O8.crossVectors(this.object.up,O8);O8.multiplyScalar(H),this._panOffset.add(O8)}_pan(H,$){let J=this.domElement;if(this.object.isPerspectiveCamera){let Z=this.object.position;O8.copy(Z).sub(this.target);let W=O8.length();W*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*H*W/J.clientHeight,this.object.matrix),this._panUp(2*$*W/J.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(H*(this.object.right-this.object.left)/this.object.zoom/J.clientWidth,this.object.matrix),this._panUp($*(this.object.top-this.object.bottom)/this.object.zoom/J.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(H){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=H;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(H){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=H;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(H,$){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let J=this.domElement.getBoundingClientRect(),Z=H-J.left,W=$-J.top,Q=J.width,Y=J.height;this._mouse.x=Z/Q*2-1,this._mouse.y=-(W/Y)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(H){return Math.max(this.minDistance,Math.min(this.maxDistance,H))}_handleMouseDownRotate(H){this._rotateStart.set(H.clientX,H.clientY)}_handleMouseDownDolly(H){this._updateZoomParameters(H.clientX,H.clientX),this._dollyStart.set(H.clientX,H.clientY)}_handleMouseDownPan(H){this._panStart.set(H.clientX,H.clientY)}_handleMouseMoveRotate(H){this._rotateEnd.set(H.clientX,H.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let $=this.domElement;this._rotateLeft(f8*this._rotateDelta.x/$.clientHeight),this._rotateUp(f8*this._rotateDelta.y/$.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(H){if(this._dollyEnd.set(H.clientX,H.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(H){this._panEnd.set(H.clientX,H.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(H){if(this._updateZoomParameters(H.clientX,H.clientY),H.deltaY<0)this._dollyIn(this._getZoomScale(H.deltaY));else if(H.deltaY>0)this._dollyOut(this._getZoomScale(H.deltaY));this.update()}_handleKeyDown(H){let $=!1;switch(H.code){case this.keys.UP:if(H.ctrlKey||H.metaKey||H.shiftKey){if(this.enableRotate)this._rotateUp(f8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);$=!0;break;case this.keys.BOTTOM:if(H.ctrlKey||H.metaKey||H.shiftKey){if(this.enableRotate)this._rotateUp(-f8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);$=!0;break;case this.keys.LEFT:if(H.ctrlKey||H.metaKey||H.shiftKey){if(this.enableRotate)this._rotateLeft(f8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);$=!0;break;case this.keys.RIGHT:if(H.ctrlKey||H.metaKey||H.shiftKey){if(this.enableRotate)this._rotateLeft(-f8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);$=!0;break}if($)H.preventDefault(),this.update()}_handleTouchStartRotate(H){if(this._pointers.length===1)this._rotateStart.set(H.pageX,H.pageY);else{let $=this._getSecondPointerPosition(H),J=0.5*(H.pageX+$.x),Z=0.5*(H.pageY+$.y);this._rotateStart.set(J,Z)}}_handleTouchStartPan(H){if(this._pointers.length===1)this._panStart.set(H.pageX,H.pageY);else{let $=this._getSecondPointerPosition(H),J=0.5*(H.pageX+$.x),Z=0.5*(H.pageY+$.y);this._panStart.set(J,Z)}}_handleTouchStartDolly(H){let $=this._getSecondPointerPosition(H),J=H.pageX-$.x,Z=H.pageY-$.y,W=Math.sqrt(J*J+Z*Z);this._dollyStart.set(0,W)}_handleTouchStartDollyPan(H){if(this.enableZoom)this._handleTouchStartDolly(H);if(this.enablePan)this._handleTouchStartPan(H)}_handleTouchStartDollyRotate(H){if(this.enableZoom)this._handleTouchStartDolly(H);if(this.enableRotate)this._handleTouchStartRotate(H)}_handleTouchMoveRotate(H){if(this._pointers.length==1)this._rotateEnd.set(H.pageX,H.pageY);else{let J=this._getSecondPointerPosition(H),Z=0.5*(H.pageX+J.x),W=0.5*(H.pageY+J.y);this._rotateEnd.set(Z,W)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let $=this.domElement;this._rotateLeft(f8*this._rotateDelta.x/$.clientHeight),this._rotateUp(f8*this._rotateDelta.y/$.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(H){if(this._pointers.length===1)this._panEnd.set(H.pageX,H.pageY);else{let $=this._getSecondPointerPosition(H),J=0.5*(H.pageX+$.x),Z=0.5*(H.pageY+$.y);this._panEnd.set(J,Z)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(H){let $=this._getSecondPointerPosition(H),J=H.pageX-$.x,Z=H.pageY-$.y,W=Math.sqrt(J*J+Z*Z);this._dollyEnd.set(0,W),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let Q=(H.pageX+$.x)*0.5,Y=(H.pageY+$.y)*0.5;this._updateZoomParameters(Q,Y)}_handleTouchMoveDollyPan(H){if(this.enableZoom)this._handleTouchMoveDolly(H);if(this.enablePan)this._handleTouchMovePan(H)}_handleTouchMoveDollyRotate(H){if(this.enableZoom)this._handleTouchMoveDolly(H);if(this.enableRotate)this._handleTouchMoveRotate(H)}_addPointer(H){this._pointers.push(H.pointerId)}_removePointer(H){delete this._pointerPositions[H.pointerId];for(let $=0;$<this._pointers.length;$++)if(this._pointers[$]==H.pointerId){this._pointers.splice($,1);return}}_isTrackingPointer(H){for(let $=0;$<this._pointers.length;$++)if(this._pointers[$]==H.pointerId)return!0;return!1}_trackPointer(H){let $=this._pointerPositions[H.pointerId];if($===void 0)$=new T0,this._pointerPositions[H.pointerId]=$;$.set(H.pageX,H.pageY)}_getSecondPointerPosition(H){let $=H.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[$]}_customWheelEvent(H){let $=H.deltaMode,J={clientX:H.clientX,clientY:H.clientY,deltaY:H.deltaY};switch($){case 1:J.deltaY*=16;break;case 2:J.deltaY*=100;break}if(H.ctrlKey&&!this._controlActive)J.deltaY*=10;return J}}function CG(H){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(H.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(H))return;if(this._addPointer(H),H.pointerType==="touch")this._onTouchStart(H);else this._onMouseDown(H)}function zG(H){if(this.enabled===!1)return;if(H.pointerType==="touch")this._onTouchMove(H);else this._onMouseMove(H)}function wG(H){switch(this._removePointer(H),this._pointers.length){case 0:this.domElement.releasePointerCapture(H.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(AQ),this.state=Z8.NONE;break;case 1:let $=this._pointers[0],J=this._pointerPositions[$];this._onTouchStart({pointerId:$,pageX:J.x,pageY:J.y});break}}function IG(H){let $;switch(H.button){case 0:$=this.mouseButtons.LEFT;break;case 1:$=this.mouseButtons.MIDDLE;break;case 2:$=this.mouseButtons.RIGHT;break;default:$=-1}switch($){case P6.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(H),this.state=Z8.DOLLY;break;case P6.ROTATE:if(H.ctrlKey||H.metaKey||H.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(H),this.state=Z8.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(H),this.state=Z8.ROTATE}break;case P6.PAN:if(H.ctrlKey||H.metaKey||H.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(H),this.state=Z8.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(H),this.state=Z8.PAN}break;default:this.state=Z8.NONE}if(this.state!==Z8.NONE)this.dispatchEvent(gJ)}function VG(H){switch(this.state){case Z8.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(H);break;case Z8.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(H);break;case Z8.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(H);break}}function BG(H){if(this.enabled===!1||this.enableZoom===!1||this.state!==Z8.NONE)return;H.preventDefault(),this.dispatchEvent(gJ),this._handleMouseWheel(this._customWheelEvent(H)),this.dispatchEvent(AQ)}function PG(H){if(this.enabled===!1)return;this._handleKeyDown(H)}function TG(H){switch(this._trackPointer(H),this._pointers.length){case 1:switch(this.touches.ONE){case T6.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(H),this.state=Z8.TOUCH_ROTATE;break;case T6.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(H),this.state=Z8.TOUCH_PAN;break;default:this.state=Z8.NONE}break;case 2:switch(this.touches.TWO){case T6.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(H),this.state=Z8.TOUCH_DOLLY_PAN;break;case T6.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(H),this.state=Z8.TOUCH_DOLLY_ROTATE;break;default:this.state=Z8.NONE}break;default:this.state=Z8.NONE}if(this.state!==Z8.NONE)this.dispatchEvent(gJ)}function AG(H){switch(this._trackPointer(H),this.state){case Z8.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(H),this.update();break;case Z8.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(H),this.update();break;case Z8.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(H),this.update();break;case Z8.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(H),this.update();break;default:this.state=Z8.NONE}}function SG(H){if(this.enabled===!1)return;H.preventDefault()}function _G(H){if(H.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function jG(H){if(H.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function SQ(H){let $=new D9;$.background=new A0(5);let J=new I8(45,H.clientWidth/H.clientHeight,50,4000000);J.position.set(0,300000,600000);let Z=new vJ({canvas:H,antialias:!0,logarithmicDepthBuffer:!0});Z.setSize(H.clientWidth,H.clientHeight),Z.setPixelRatio(Math.min(window.devicePixelRatio,2)),Z.toneMapping=H9,Z.toneMappingExposure=1.2;let W=new pJ(J,H);W.enableDamping=!0,W.dampingFactor=0.08,W.minDistance=8000,W.maxDistance=1200000,W.target.set(0,0,0);let Q=new I9(16777215,3);$.add(Q);let Y=new V9(1118498,0.5);return $.add(Y),fG($),window.addEventListener("resize",()=>{let{clientWidth:X,clientHeight:K}=H;J.aspect=X/K,J.updateProjectionMatrix(),Z.setSize(X,K)}),{scene:$,camera:J,renderer:Z,controls:W,sunLight:Q}}function fG(H){let J=new Float32Array(24000),Z=new Float32Array(24000);for(let Y=0;Y<8000;Y++){let X=Math.random()*Math.PI*2,K=Math.acos(2*Math.random()-1),U=1500000+Math.random()*400000;J[Y*3]=U*Math.sin(K)*Math.cos(X),J[Y*3+1]=U*Math.sin(K)*Math.sin(X),J[Y*3+2]=U*Math.cos(K);let G=0.04+Math.random()*0.12,E=Math.random();Z[Y*3]=G*(E>0.8?1:0.9),Z[Y*3+1]=G*0.95,Z[Y*3+2]=G*(E<0.2?1:0.9)}let W=new C8;W.setAttribute("position",new Y8(J,3)),W.setAttribute("color",new Y8(Z,3));let Q=new KH({size:1.5,vertexColors:!0,sizeAttenuation:!1});H.add(new k9(W,Q))}var _Q=new Date("2000-01-01T12:00:00Z"),M6=2*Math.PI,f6=3600*(180/Math.PI);var hG=648000/Math.PI,cF=-0.17-5*Math.log10(hG);function bQ(H){if(H!==!0&&H!==!1)throw console.trace(),`Value is not boolean: ${H}`;return H}function uJ(H){if(!Number.isFinite(H))throw console.trace(),`Value is not a finite number: ${H}`;return H}function y7(H){return H-Math.floor(H)}var x0;(function(H){H.Sun="Sun",H.Moon="Moon",H.Mercury="Mercury",H.Venus="Venus",H.Earth="Earth",H.Mars="Mars",H.Jupiter="Jupiter",H.Saturn="Saturn",H.Uranus="Uranus",H.Neptune="Neptune",H.Pluto="Pluto",H.SSB="SSB",H.EMB="EMB",H.Star1="Star1",H.Star2="Star2",H.Star3="Star3",H.Star4="Star4",H.Star5="Star5",H.Star6="Star6",H.Star7="Star7",H.Star8="Star8"})(x0||(x0={}));var xG=[x0.Star1,x0.Star2,x0.Star3,x0.Star4,x0.Star5,x0.Star6,x0.Star7,x0.Star8],yG=[{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0}];function vG(H){let $=xG.indexOf(H);return $>=0?yG[$]:null}function rJ(H){let $=vG(H);return $&&$.dist>0?$:null}var MH;(function(H){H[H.From2000=0]="From2000",H[H.Into2000=1]="Into2000"})(MH||(MH={}));var h6={Mercury:[[[[4.40250710144,0,0],[0.40989414977,1.48302034195,26087.9031415742],[0.050462942,4.47785489551,52175.8062831484],[0.00855346844,1.16520322459,78263.70942472259],[0.00165590362,4.11969163423,104351.61256629678],[0.00034561897,0.77930768443,130439.51570787099],[0.00007583476,3.71348404924,156527.41884944518]],[[26087.90313685529,0,0],[0.01131199811,6.21874197797,26087.9031415742],[0.00292242298,3.04449355541,52175.8062831484],[0.00075775081,6.08568821653,78263.70942472259],[0.00019676525,2.80965111777,104351.61256629678]]],[[[0.11737528961,1.98357498767,26087.9031415742],[0.02388076996,5.03738959686,52175.8062831484],[0.01222839532,3.14159265359,0],[0.0054325181,1.79644363964,78263.70942472259],[0.0012977877,4.83232503958,104351.61256629678],[0.00031866927,1.58088495658,130439.51570787099],[0.00007963301,4.60972126127,156527.41884944518]],[[0.00274646065,3.95008450011,26087.9031415742],[0.00099737713,3.14159265359,0]]],[[[0.39528271651,0,0],[0.07834131818,6.19233722598,26087.9031415742],[0.00795525558,2.95989690104,52175.8062831484],[0.00121281764,6.01064153797,78263.70942472259],[0.00021921969,2.77820093972,104351.61256629678],[0.00004354065,5.82894543774,130439.51570787099]],[[0.0021734774,4.65617158665,26087.9031415742],[0.00044141826,1.42385544001,52175.8062831484]]]],Venus:[[[[3.17614666774,0,0],[0.01353968419,5.59313319619,10213.285546211],[0.00089891645,5.30650047764,20426.571092422],[0.00005477194,4.41630661466,7860.4193924392],[0.00003455741,2.6996444782,11790.6290886588],[0.00002372061,2.99377542079,3930.2096962196],[0.00001317168,5.18668228402,26.2983197998],[0.00001664146,4.25018630147,1577.3435424478],[0.00001438387,4.15745084182,9683.5945811164],[0.00001200521,6.15357116043,30639.856638633]],[[10213.28554621638,0,0],[0.00095617813,2.4640651111,10213.285546211],[0.00007787201,0.6247848222,20426.571092422]]],[[[0.05923638472,0.26702775812,10213.285546211],[0.00040107978,1.14737178112,20426.571092422],[0.00032814918,3.14159265359,0]],[[0.00287821243,1.88964962838,10213.285546211]]],[[[0.72334820891,0,0],[0.00489824182,4.02151831717,10213.285546211],[0.00001658058,4.90206728031,20426.571092422],[0.00001378043,1.12846591367,11790.6290886588],[0.00001632096,2.84548795207,7860.4193924392],[0.00000498395,2.58682193892,9683.5945811164],[0.00000221985,2.01346696541,19367.1891622328],[0.00000237454,2.55136053886,15720.8387848784]],[[0.00034551041,0.89198706276,10213.285546211]]]],Earth:[[[[1.75347045673,0,0],[0.03341656453,4.66925680415,6283.0758499914],[0.00034894275,4.62610242189,12566.1516999828],[0.00003417572,2.82886579754,3.523118349],[0.00003497056,2.74411783405,5753.3848848968],[0.00003135899,3.62767041756,77713.7714681205],[0.00002676218,4.41808345438,7860.4193924392],[0.00002342691,6.13516214446,3930.2096962196],[0.00001273165,2.03709657878,529.6909650946],[0.00001324294,0.74246341673,11506.7697697936],[0.00000901854,2.04505446477,26.2983197998],[0.00001199167,1.10962946234,1577.3435424478],[0.00000857223,3.50849152283,398.1490034082],[0.00000779786,1.17882681962,5223.6939198022],[0.0000099025,5.23268072088,5884.9268465832],[0.00000753141,2.53339052847,5507.5532386674],[0.00000505267,4.58292599973,18849.2275499742],[0.00000492392,4.20505711826,775.522611324],[0.00000356672,2.91954114478,0.0673103028],[0.00000284125,1.89869240932,796.2980068164],[0.00000242879,0.34481445893,5486.777843175],[0.00000317087,5.84901948512,11790.6290886588],[0.00000271112,0.31486255375,10977.078804699],[0.00000206217,4.80646631478,2544.3144198834],[0.00000205478,1.86953770281,5573.1428014331],[0.00000202318,2.45767790232,6069.7767545534],[0.00000126225,1.08295459501,20.7753954924],[0.00000155516,0.83306084617,213.299095438]],[[6283.0758499914,0,0],[0.00206058863,2.67823455808,6283.0758499914],[0.00004303419,2.63512233481,12566.1516999828]],[[0.00008721859,1.07253635559,6283.0758499914]]],[[],[[0.00227777722,3.4137662053,6283.0758499914],[0.00003805678,3.37063423795,12566.1516999828]]],[[[1.00013988784,0,0],[0.01670699632,3.09846350258,6283.0758499914],[0.00013956024,3.05524609456,12566.1516999828],[0.0000308372,5.19846674381,77713.7714681205],[0.00001628463,1.17387558054,5753.3848848968],[0.00001575572,2.84685214877,7860.4193924392],[0.00000924799,5.45292236722,11506.7697697936],[0.00000542439,4.56409151453,3930.2096962196],[0.0000047211,3.66100022149,5884.9268465832],[0.00000085831,1.27079125277,161000.6857376741],[0.00000057056,2.01374292245,83996.84731811189],[0.00000055736,5.2415979917,71430.69561812909],[0.00000174844,3.01193636733,18849.2275499742],[0.00000243181,4.2734953079,11790.6290886588]],[[0.00103018607,1.10748968172,6283.0758499914],[0.00001721238,1.06442300386,12566.1516999828]],[[0.00004359385,5.78455133808,6283.0758499914]]]],Mars:[[[[6.20347711581,0,0],[0.18656368093,5.0503710027,3340.6124266998],[0.01108216816,5.40099836344,6681.2248533996],[0.00091798406,5.75478744667,10021.8372800994],[0.00027744987,5.97049513147,3.523118349],[0.00010610235,2.93958560338,2281.2304965106],[0.00012315897,0.84956094002,2810.9214616052],[0.00008926784,4.15697846427,0.0172536522],[0.00008715691,6.11005153139,13362.4497067992],[0.00006797556,0.36462229657,398.1490034082],[0.00007774872,3.33968761376,5621.8429232104],[0.00003575078,1.6618650571,2544.3144198834],[0.00004161108,0.22814971327,2942.4634232916],[0.00003075252,0.85696614132,191.4482661116],[0.00002628117,0.64806124465,3337.0893083508],[0.00002937546,6.07893711402,0.0673103028],[0.00002389414,5.03896442664,796.2980068164],[0.00002579844,0.02996736156,3344.1355450488],[0.00001528141,1.14979301996,6151.533888305],[0.00001798806,0.65634057445,529.6909650946],[0.00001264357,3.62275122593,5092.1519581158],[0.00001286228,3.06796065034,2146.1654164752],[0.00001546404,2.91579701718,1751.539531416],[0.00001024902,3.69334099279,8962.4553499102],[0.00000891566,0.18293837498,16703.062133499],[0.00000858759,2.4009381194,2914.0142358238],[0.00000832715,2.46418619474,3340.5951730476],[0.0000083272,4.49495782139,3340.629680352],[0.00000712902,3.66335473479,1059.3819301892],[0.00000748723,3.82248614017,155.4203994342],[0.00000723861,0.67497311481,3738.761430108],[0.00000635548,2.92182225127,8432.7643848156],[0.00000655162,0.48864064125,3127.3133312618],[0.00000550474,3.81001042328,0.9803210682],[0.0000055275,4.47479317037,1748.016413067],[0.00000425966,0.55364317304,6283.0758499914],[0.00000415131,0.49662285038,213.299095438],[0.00000472167,3.62547124025,1194.4470102246],[0.00000306551,0.38052848348,6684.7479717486],[0.00000312141,0.99853944405,6677.7017350506],[0.00000293198,4.22131299634,20.7753954924],[0.00000302375,4.48618007156,3532.0606928114],[0.00000274027,0.54222167059,3340.545116397],[0.00000281079,5.88163521788,1349.8674096588],[0.00000231183,1.28242156993,3870.3033917944],[0.00000283602,5.7688543494,3149.1641605882],[0.00000236117,5.75503217933,3333.498879699],[0.00000274033,0.13372524985,3340.6797370026],[0.00000299395,2.78323740866,6254.6266625236]],[[3340.61242700512,0,0],[0.01457554523,3.60433733236,3340.6124266998],[0.00168414711,3.92318567804,6681.2248533996],[0.00020622975,4.26108844583,10021.8372800994],[0.00003452392,4.7321039319,3.523118349],[0.00002586332,4.60670058555,13362.4497067992],[0.00000841535,4.45864030426,2281.2304965106]],[[0.00058152577,2.04961712429,3340.6124266998],[0.00013459579,2.45738706163,6681.2248533996]]],[[[0.03197134986,3.76832042431,3340.6124266998],[0.00298033234,4.10616996305,6681.2248533996],[0.00289104742,0,0],[0.00031365539,4.4465105309,10021.8372800994],[0.000034841,4.7881254926,13362.4497067992]],[[0.00217310991,6.04472194776,3340.6124266998],[0.00020976948,3.14159265359,0],[0.00012834709,1.60810667915,6681.2248533996]]],[[[1.53033488271,0,0],[0.1418495316,3.47971283528,3340.6124266998],[0.00660776362,3.81783443019,6681.2248533996],[0.00046179117,4.15595316782,10021.8372800994],[0.00008109733,5.55958416318,2810.9214616052],[0.00007485318,1.77239078402,5621.8429232104],[0.00005523191,1.3643630377,2281.2304965106],[0.0000382516,4.49407183687,13362.4497067992],[0.00002306537,0.09081579001,2544.3144198834],[0.00001999396,5.36059617709,3337.0893083508],[0.00002484394,4.9254563992,2942.4634232916],[0.00001960195,4.74249437639,3344.1355450488],[0.00001167119,2.11260868341,5092.1519581158],[0.00001102816,5.00908403998,398.1490034082],[0.00000899066,4.40791133207,529.6909650946],[0.00000992252,5.83861961952,6151.533888305],[0.00000807354,2.10217065501,1059.3819301892],[0.00000797915,3.44839203899,796.2980068164],[0.00000740975,1.49906336885,2146.1654164752]],[[0.01107433345,2.03250524857,3340.6124266998],[0.00103175887,2.37071847807,6681.2248533996],[0.000128772,0,0],[0.0001081588,2.70888095665,10021.8372800994]],[[0.00044242249,0.47930604954,3340.6124266998],[0.00008138042,0.86998389204,6681.2248533996]]]],Jupiter:[[[[0.59954691494,0,0],[0.09695898719,5.06191793158,529.6909650946],[0.00573610142,1.44406205629,7.1135470008],[0.00306389205,5.41734730184,1059.3819301892],[0.00097178296,4.14264726552,632.7837393132],[0.00072903078,3.64042916389,522.5774180938],[0.00064263975,3.41145165351,103.0927742186],[0.00039806064,2.29376740788,419.4846438752],[0.00038857767,1.27231755835,316.3918696566],[0.00027964629,1.7845459182,536.8045120954],[0.0001358973,5.7748104079,1589.0728952838],[0.00008246349,3.5822792584,206.1855484372],[0.00008768704,3.63000308199,949.1756089698],[0.00007368042,5.0810119427,735.8765135318],[0.0000626315,0.02497628807,213.299095438],[0.00006114062,4.51319998626,1162.4747044078],[0.00004905396,1.32084470588,110.2063212194],[0.00005305285,1.30671216791,14.2270940016],[0.00005305441,4.18625634012,1052.2683831884],[0.00004647248,4.69958103684,3.9321532631],[0.00003045023,4.31676431084,426.598190876],[0.00002609999,1.56667394063,846.0828347512],[0.00002028191,1.06376530715,3.1813937377],[0.00001764763,2.14148655117,1066.49547719],[0.00001722972,3.88036268267,1265.5674786264],[0.00001920945,0.97168196472,639.897286314],[0.00001633223,3.58201833555,515.463871093],[0.00001431999,4.29685556046,625.6701923124],[0.00000973272,4.09764549134,95.9792272178]],[[529.69096508814,0,0],[0.00489503243,4.2208293947,529.6909650946],[0.00228917222,6.02646855621,7.1135470008],[0.00030099479,4.54540782858,1059.3819301892],[0.0002072092,5.45943156902,522.5774180938],[0.00012103653,0.16994816098,536.8045120954],[0.00006067987,4.42422292017,103.0927742186],[0.00005433968,3.98480737746,419.4846438752],[0.00004237744,5.89008707199,14.2270940016]],[[0.00047233601,4.32148536482,7.1135470008],[0.00030649436,2.929777887,529.6909650946],[0.00014837605,3.14159265359,0]]],[[[0.02268615702,3.55852606721,529.6909650946],[0.00109971634,3.90809347197,1059.3819301892],[0.00110090358,0,0],[0.00008101428,3.60509572885,522.5774180938],[0.00006043996,4.25883108339,1589.0728952838],[0.00006437782,0.30627119215,536.8045120954]],[[0.00078203446,1.52377859742,529.6909650946]]],[[[5.20887429326,0,0],[0.25209327119,3.49108639871,529.6909650946],[0.00610599976,3.84115365948,1059.3819301892],[0.00282029458,2.57419881293,632.7837393132],[0.00187647346,2.07590383214,522.5774180938],[0.00086792905,0.71001145545,419.4846438752],[0.00072062974,0.21465724607,536.8045120954],[0.00065517248,5.9799588479,316.3918696566],[0.00029134542,1.67759379655,103.0927742186],[0.00030135335,2.16132003734,949.1756089698],[0.00023453271,3.54023522184,735.8765135318],[0.00022283743,4.19362594399,1589.0728952838],[0.00023947298,0.2745803748,7.1135470008],[0.00013032614,2.96042965363,1162.4747044078],[0.0000970336,1.90669633585,206.1855484372],[0.00012749023,2.71550286592,1052.2683831884],[0.00007057931,2.18184839926,1265.5674786264],[0.00006137703,6.26418240033,846.0828347512],[0.00002616976,2.00994012876,1581.959348283]],[[0.0127180152,2.64937512894,529.6909650946],[0.00061661816,3.00076460387,1059.3819301892],[0.00053443713,3.89717383175,522.5774180938],[0.00031185171,4.88276958012,536.8045120954],[0.00041390269,0,0]]]],Saturn:[[[[0.87401354025,0,0],[0.11107659762,3.96205090159,213.299095438],[0.01414150957,4.58581516874,7.1135470008],[0.00398379389,0.52112032699,206.1855484372],[0.00350769243,3.30329907896,426.598190876],[0.00206816305,0.24658372002,103.0927742186],[0.000792713,3.84007056878,220.4126424388],[0.00023990355,4.66976924553,110.2063212194],[0.00016573588,0.43719228296,419.4846438752],[0.00014906995,5.76903183869,316.3918696566],[0.0001582029,0.93809155235,632.7837393132],[0.00014609559,1.56518472,3.9321532631],[0.00013160301,4.44891291899,14.2270940016],[0.00015053543,2.71669915667,639.897286314],[0.00013005299,5.98119023644,11.0457002639],[0.00010725067,3.12939523827,202.2533951741],[0.00005863206,0.23656938524,529.6909650946],[0.00005227757,4.20783365759,3.1813937377],[0.00006126317,1.76328667907,277.0349937414],[0.00005019687,3.17787728405,433.7117378768],[0.0000459255,0.61977744975,199.0720014364],[0.00004005867,2.24479718502,63.7358983034],[0.00002953796,0.98280366998,95.9792272178],[0.0000387367,3.22283226966,138.5174968707],[0.00002461186,2.03163875071,735.8765135318],[0.00003269484,0.77492638211,949.1756089698],[0.00001758145,3.2658010994,522.5774180938],[0.00001640172,5.5050445305,846.0828347512],[0.00001391327,4.02333150505,323.5054166574],[0.00001580648,4.37265307169,309.2783226558],[0.00001123498,2.83726798446,415.5524906121],[0.00001017275,3.71700135395,227.5261894396],[0.00000848642,3.1915017083,209.3669421749]],[[213.2990952169,0,0],[0.01297370862,1.82834923978,213.299095438],[0.00564345393,2.88499717272,7.1135470008],[0.00093734369,1.06311793502,426.598190876],[0.00107674962,2.27769131009,206.1855484372],[0.00040244455,2.04108104671,220.4126424388],[0.00019941774,1.2795439047,103.0927742186],[0.00010511678,2.7488034213,14.2270940016],[0.00006416106,0.38238295041,639.897286314],[0.00004848994,2.43037610229,419.4846438752],[0.00004056892,2.92133209468,110.2063212194],[0.00003768635,3.6496533078,3.9321532631]],[[0.0011644133,1.17988132879,7.1135470008],[0.00091841837,0.0732519584,213.299095438],[0.00036661728,0,0],[0.00015274496,4.06493179167,206.1855484372]]],[[[0.04330678039,3.60284428399,213.299095438],[0.00240348302,2.85238489373,426.598190876],[0.00084745939,0,0],[0.00030863357,3.48441504555,220.4126424388],[0.00034116062,0.57297307557,206.1855484372],[0.0001473407,2.11846596715,639.897286314],[0.00009916667,5.79003188904,419.4846438752],[0.00006993564,4.7360468972,7.1135470008],[0.00004807588,5.43305312061,316.3918696566]],[[0.00198927992,4.93901017903,213.299095438],[0.00036947916,3.14159265359,0],[0.00017966989,0.5197943111,426.598190876]]],[[[9.55758135486,0,0],[0.52921382865,2.39226219573,213.299095438],[0.01873679867,5.2354960466,206.1855484372],[0.01464663929,1.64763042902,426.598190876],[0.00821891141,5.93520042303,316.3918696566],[0.00547506923,5.0153261898,103.0927742186],[0.0037168465,2.27114821115,220.4126424388],[0.00361778765,3.13904301847,7.1135470008],[0.00140617506,5.70406606781,632.7837393132],[0.00108974848,3.29313390175,110.2063212194],[0.00069006962,5.94099540992,419.4846438752],[0.00061053367,0.94037691801,639.897286314],[0.00048913294,1.55733638681,202.2533951741],[0.00034143772,0.19519102597,277.0349937414],[0.00032401773,5.47084567016,949.1756089698],[0.00020936596,0.46349251129,735.8765135318],[0.00009796004,5.20477537945,1265.5674786264],[0.00011993338,5.98050967385,846.0828347512],[0.000208393,1.52102476129,433.7117378768],[0.00015298404,3.0594381494,529.6909650946],[0.00006465823,0.17732249942,1052.2683831884],[0.00011380257,1.7310542704,522.5774180938],[0.00003419618,4.94550542171,1581.959348283]],[[0.0618298134,0.2584351148,213.299095438],[0.00506577242,0.71114625261,206.1855484372],[0.00341394029,5.79635741658,426.598190876],[0.00188491195,0.47215589652,220.4126424388],[0.00186261486,3.14159265359,0],[0.00143891146,1.40744822888,7.1135470008]],[[0.00436902572,4.78671677509,213.299095438]]]],Uranus:[[[[5.48129294297,0,0],[0.09260408234,0.89106421507,74.7815985673],[0.01504247898,3.6271926092,1.4844727083],[0.00365981674,1.89962179044,73.297125859],[0.00272328168,3.35823706307,149.5631971346],[0.00070328461,5.39254450063,63.7358983034],[0.00068892678,6.09292483287,76.2660712756],[0.00061998615,2.26952066061,2.9689454166],[0.00061950719,2.85098872691,11.0457002639],[0.0002646877,3.14152083966,71.8126531507],[0.00025710476,6.11379840493,454.9093665273],[0.0002107885,4.36059339067,148.0787244263],[0.00017818647,1.74436930289,36.6485629295],[0.00014613507,4.73732166022,3.9321532631],[0.00011162509,5.8268179635,224.3447957019],[0.0001099791,0.48865004018,138.5174968707],[0.00009527478,2.95516862826,35.1640902212],[0.00007545601,5.236265824,109.9456887885],[0.00004220241,3.23328220918,70.8494453042],[0.000040519,2.277550173,151.0476698429],[0.00003354596,1.0654900738,4.4534181249],[0.00002926718,4.62903718891,9.5612275556],[0.0000349034,5.48306144511,146.594251718],[0.00003144069,4.75199570434,77.7505439839],[0.00002922333,5.35235361027,85.8272988312],[0.00002272788,4.36600400036,70.3281804424],[0.00002051219,1.51773566586,0.1118745846],[0.00002148602,0.60745949945,38.1330356378],[0.00001991643,4.92437588682,277.0349937414],[0.00001376226,2.04283539351,65.2203710117],[0.00001666902,3.62744066769,380.12776796],[0.00001284107,3.11347961505,202.2533951741],[0.00001150429,0.93343589092,3.1813937377],[0.00001533221,2.58594681212,52.6901980395],[0.00001281604,0.54271272721,222.8603229936],[0.00001372139,4.19641530878,111.4301614968],[0.00001221029,0.1990065003,108.4612160802],[0.00000946181,1.19253165736,127.4717966068],[0.00001150989,4.17898916639,33.6796175129]],[[74.7815986091,0,0],[0.00154332863,5.24158770553,74.7815985673],[0.00024456474,1.71260334156,1.4844727083],[0.00009258442,0.4282973235,11.0457002639],[0.00008265977,1.50218091379,63.7358983034],[0.0000915016,1.41213765216,149.5631971346]]],[[[0.01346277648,2.61877810547,74.7815985673],[0.000623414,5.08111189648,149.5631971346],[0.00061601196,3.14159265359,0],[0.00009963722,1.61603805646,76.2660712756],[0.0000992616,0.57630380333,73.297125859]],[[0.00034101978,0.01321929936,74.7815985673]]],[[[19.21264847206,0,0],[0.88784984413,5.60377527014,74.7815985673],[0.03440836062,0.32836099706,73.297125859],[0.0205565386,1.7829515933,149.5631971346],[0.0064932241,4.52247285911,76.2660712756],[0.00602247865,3.86003823674,63.7358983034],[0.00496404167,1.40139935333,454.9093665273],[0.00338525369,1.58002770318,138.5174968707],[0.00243509114,1.57086606044,71.8126531507],[0.00190522303,1.99809394714,1.4844727083],[0.00161858838,2.79137786799,148.0787244263],[0.00143706183,1.38368544947,11.0457002639],[0.00093192405,0.17437220467,36.6485629295],[0.00071424548,4.24509236074,224.3447957019],[0.00089806014,3.66105364565,109.9456887885],[0.00039009723,1.66971401684,70.8494453042],[0.00046677296,1.39976401694,35.1640902212],[0.00039025624,3.36234773834,277.0349937414],[0.00036755274,3.88649278513,146.594251718],[0.00030348723,0.70100838798,151.0476698429],[0.00029156413,3.180563367,77.7505439839],[0.00022637073,0.72518687029,529.6909650946],[0.00011959076,1.7504339214,984.6003316219],[0.00025620756,5.25656086672,380.12776796]],[[0.01479896629,3.67205697578,74.7815985673]]]],Neptune:[[[[5.31188633046,0,0],[0.0179847553,2.9010127389,38.1330356378],[0.01019727652,0.48580922867,1.4844727083],[0.00124531845,4.83008090676,36.6485629295],[0.00042064466,5.41054993053,2.9689454166],[0.00037714584,6.09221808686,35.1640902212],[0.00033784738,1.24488874087,76.2660712756],[0.00016482741,0.00007727998,491.5579294568],[0.00009198584,4.93747051954,39.6175083461],[0.0000899425,0.27462171806,175.1660598002]],[[38.13303563957,0,0],[0.00016604172,4.86323329249,1.4844727083],[0.00015744045,2.27887427527,38.1330356378]]],[[[0.03088622933,1.44104372644,38.1330356378],[0.00027780087,5.91271884599,76.2660712756],[0.00027623609,0,0],[0.00015355489,2.52123799551,36.6485629295],[0.00015448133,3.50877079215,39.6175083461]]],[[[30.07013205828,0,0],[0.27062259632,1.32999459377,38.1330356378],[0.01691764014,3.25186135653,36.6485629295],[0.00807830553,5.18592878704,1.4844727083],[0.0053776051,4.52113935896,35.1640902212],[0.00495725141,1.5710564165,491.5579294568],[0.00274571975,1.84552258866,175.1660598002],[0.0001201232,1.92059384991,1021.2488945514],[0.00121801746,5.79754470298,76.2660712756],[0.00100896068,0.3770272493,73.297125859],[0.00135134092,3.37220609835,39.6175083461],[0.00007571796,1.07149207335,388.4651552382]]]]};function bG(H){var $,J,Z,W,Q,Y,X;let K=2000+(H-14)/365.24217;if(K<-500)return $=(K-1820)/100,-20+32*$*$;if(K<500)return $=K/100,J=$*$,Z=$*J,W=J*J,Q=J*Z,Y=Z*Z,10583.6-1014.41*$+33.78311*J-5.952053*Z-0.1798452*W+0.022174192*Q+0.0090316521*Y;if(K<1600)return $=(K-1000)/100,J=$*$,Z=$*J,W=J*J,Q=J*Z,Y=Z*Z,1574.2-556.01*$+71.23472*J+0.319781*Z-0.8503463*W-0.005050998*Q+0.0083572073*Y;if(K<1700)return $=K-1600,J=$*$,Z=$*J,120-0.9808*$-0.01532*J+Z/7129;if(K<1800)return $=K-1700,J=$*$,Z=$*J,W=J*J,8.83+0.1603*$-0.0059285*J+0.00013336*Z-W/1174000;if(K<1860)return $=K-1800,J=$*$,Z=$*J,W=J*J,Q=J*Z,Y=Z*Z,X=Z*W,13.72-0.332447*$+0.0068612*J+0.0041116*Z-0.00037436*W+0.0000121272*Q-0.0000001699*Y+0.000000000875*X;if(K<1900)return $=K-1860,J=$*$,Z=$*J,W=J*J,Q=J*Z,7.62+0.5737*$-0.251754*J+0.01680668*Z-0.0004473624*W+Q/233174;if(K<1920)return $=K-1900,J=$*$,Z=$*J,W=J*J,-2.79+1.494119*$-0.0598939*J+0.0061966*Z-0.000197*W;if(K<1941)return $=K-1920,J=$*$,Z=$*J,21.2+0.84493*$-0.0761*J+0.0020936*Z;if(K<1961)return $=K-1950,J=$*$,Z=$*J,29.07+0.407*$-J/233+Z/2547;if(K<1986)return $=K-1975,J=$*$,Z=$*J,45.45+1.067*$-J/260-Z/718;if(K<2005)return $=K-2000,J=$*$,Z=$*J,W=J*J,Q=J*Z,63.86+0.3345*$-0.060374*J+0.0017275*Z+0.000651814*W+0.00002373599*Q;if(K<2050)return $=K-2000,62.92+0.32217*$+0.005589*$*$;if(K<2150)return $=(K-1820)/100,-20+32*$*$-0.5628*(2150-K);return $=(K-1820)/100,-20+32*$*$}var gG=bG;function jQ(H){return H+gG(H)/86400}class b7{constructor(H){if(H instanceof b7){this.date=H.date,this.ut=H.ut,this.tt=H.tt;return}let $=86400000;if(H instanceof Date&&Number.isFinite(H.getTime())){this.date=H,this.ut=(H.getTime()-_Q.getTime())/$,this.tt=jQ(this.ut);return}if(Number.isFinite(H)){this.date=new Date(_Q.getTime()+H*$),this.ut=H,this.tt=jQ(this.ut);return}throw"Argument must be a Date object, an AstroTime object, or a numeric UTC Julian date."}static FromTerrestrialTime(H){let $=new b7(H);for(;;){let J=H-$.tt;if(Math.abs(J)<0.000000000001)return $;$=$.AddDays(J)}}toString(){return this.date.toISOString()}AddDays(H){return new b7(this.ut+H)}}function x6(H){if(H instanceof b7)return H;return new b7(H)}function pG(H){var $=H.tt/36525,J=((((-0.0000000434*$-0.000000576)*$+0.0020034)*$-0.0001831)*$-46.836769)*$+84381.406;return J/3600}function uG(H,$){let J=H*0.017453292519943295,Z=Math.cos(J),W=Math.sin(J);return[$[0],$[1]*Z-$[2]*W,$[1]*W+$[2]*Z]}function lG(H,$){return uG(pG(H),$)}var mG=0;function dG(H){++mG;let $=H.tt/36525;function J(w0,P){let l0=[],P0;for(P0=0;P0<=P-w0;++P0)l0.push(0);return{min:w0,array:l0}}function Z(w0,P,l0,P0){let _0=[];for(let Y0=0;Y0<=P-w0;++Y0)_0.push(J(l0,P0));return{min:w0,array:_0}}function W(w0,P,l0){let P0=w0.array[P-w0.min];return P0.array[l0-P0.min]}function Q(w0,P,l0,P0){let _0=w0.array[P-w0.min];_0.array[l0-_0.min]=P0}let Y,X,K,U,G,E,R,q,O,D,F,N,I,L,T,_,w,B,b,C,z,A,x,p=Z(-6,6,1,4),l=Z(-6,6,1,4);function o(w0,P){return W(p,w0,P)}function d(w0,P){return W(l,w0,P)}function t(w0,P,l0){return Q(p,w0,P,l0)}function m(w0,P,l0){return Q(l,w0,P,l0)}function X0(w0,P,l0,P0,_0){_0(w0*l0-P*P0,P*l0+w0*P0)}function H0(w0){return Math.sin(M6*w0)}R=$*$,O=0,x=0,F=0,N=3422.7;var V0=H0(0.19833+0.05611*$),g0=H0(0.27869+0.04508*$),n=H0(0.16827-0.36903*$),J0=H0(0.34734-5.37261*$),D0=H0(0.10498-5.37899*$),k0=H0(0.42681-0.41855*$),W0=H0(0.14943-5.37511*$);B=0.84*V0+0.31*g0+14.27*n+7.26*J0+0.28*D0+0.24*k0,b=2.94*V0+0.31*g0+14.27*n+9.34*J0+1.12*D0+0.83*k0,C=-6.4*V0-1.89*k0,z=0.21*V0+0.31*g0+14.27*n-88.7*J0-15.3*D0+0.24*k0-1.86*W0,A=B-C,q=-0.000003332*H0(0.59734-5.37261*$)-0.000000539*H0(0.35498-5.37899*$)-0.000000064*H0(0.39943-5.37511*$),I=M6*y7(0.60643382+1336.85522467*$-0.00000313*R)+B/f6,L=M6*y7(0.37489701+1325.55240982*$+0.00002565*R)+b/f6,T=M6*y7(0.99312619+99.99735956*$-0.00000044*R)+C/f6,_=M6*y7(0.25909118+1342.2278298*$-0.00000892*R)+z/f6,w=M6*y7(0.82736186+1236.85308708*$-0.00000397*R)+A/f6;for(G=1;G<=4;++G){switch(G){case 1:K=L,X=4,U=1.000002208;break;case 2:K=T,X=3,U=0.997504612-0.002495388*$;break;case 3:K=_,X=4,U=1.000002708+139.978*q;break;case 4:K=w,X=6,U=1;break;default:throw`Internal error: I = ${G}`}t(0,G,1),t(1,G,Math.cos(K)*U),m(0,G,0),m(1,G,Math.sin(K)*U);for(E=2;E<=X;++E)X0(o(E-1,G),d(E-1,G),o(1,G),d(1,G),(w0,P)=>(t(E,G,w0),m(E,G,P)));for(E=1;E<=X;++E)t(-E,G,o(E,G)),m(-E,G,-d(E,G))}function C0(w0,P,l0,P0){var _0={x:1,y:0},Y0=[0,w0,P,l0,P0];for(var o0=1;o0<=4;++o0)if(Y0[o0]!==0)X0(_0.x,_0.y,o(Y0[o0],o0),d(Y0[o0],o0),(M0,B0)=>(_0.x=M0,_0.y=B0));return _0}function u(w0,P,l0,P0,_0,Y0,o0,M0){var B0=C0(_0,Y0,o0,M0);O+=w0*B0.y,x+=P*B0.y,F+=l0*B0.x,N+=P0*B0.x}u(13.902,14.06,-0.001,0.2607,0,0,0,4),u(0.403,-4.01,0.394,0.0023,0,0,0,3),u(2369.912,2373.36,0.601,28.2333,0,0,0,2),u(-125.154,-112.79,-0.725,-0.9781,0,0,0,1),u(1.979,6.98,-0.445,0.0433,1,0,0,4),u(191.953,192.72,0.029,3.0861,1,0,0,2),u(-8.466,-13.51,0.455,-0.1093,1,0,0,1),u(22639.5,22609.07,0.079,186.5398,1,0,0,0),u(18.609,3.59,-0.094,0.0118,1,0,0,-1),u(-4586.465,-4578.13,-0.077,34.3117,1,0,0,-2),u(3.215,5.44,0.192,-0.0386,1,0,0,-3),u(-38.428,-38.64,0.001,0.6008,1,0,0,-4),u(-0.393,-1.43,-0.092,0.0086,1,0,0,-6),u(-0.289,-1.59,0.123,-0.0053,0,1,0,4),u(-24.42,-25.1,0.04,-0.3,0,1,0,2),u(18.023,17.93,0.007,0.1494,0,1,0,1),u(-668.146,-126.98,-1.302,-0.3997,0,1,0,0),u(0.56,0.32,-0.001,-0.0037,0,1,0,-1),u(-165.145,-165.06,0.054,1.9178,0,1,0,-2),u(-1.877,-6.46,-0.416,0.0339,0,1,0,-4),u(0.213,1.02,-0.074,0.0054,2,0,0,4),u(14.387,14.78,-0.017,0.2833,2,0,0,2),u(-0.586,-1.2,0.054,-0.01,2,0,0,1),u(769.016,767.96,0.107,10.1657,2,0,0,0),u(1.75,2.01,-0.018,0.0155,2,0,0,-1),u(-211.656,-152.53,5.679,-0.3039,2,0,0,-2),u(1.225,0.91,-0.03,-0.0088,2,0,0,-3),u(-30.773,-34.07,-0.308,0.3722,2,0,0,-4),u(-0.57,-1.4,-0.074,0.0109,2,0,0,-6),u(-2.921,-11.75,0.787,-0.0484,1,1,0,2),u(1.267,1.52,-0.022,0.0164,1,1,0,1),u(-109.673,-115.18,0.461,-0.949,1,1,0,0),u(-205.962,-182.36,2.056,1.4437,1,1,0,-2),u(0.233,0.36,0.012,-0.0025,1,1,0,-3),u(-4.391,-9.66,-0.471,0.0673,1,1,0,-4),u(0.283,1.53,-0.111,0.006,1,-1,0,4),u(14.577,31.7,-1.54,0.2302,1,-1,0,2),u(147.687,138.76,0.679,1.1528,1,-1,0,0),u(-1.089,0.55,0.021,0,1,-1,0,-1),u(28.475,23.59,-0.443,-0.2257,1,-1,0,-2),u(-0.276,-0.38,-0.006,-0.0036,1,-1,0,-3),u(0.636,2.27,0.146,-0.0102,1,-1,0,-4),u(-0.189,-1.68,0.131,-0.0028,0,2,0,2),u(-7.486,-0.66,-0.037,-0.0086,0,2,0,0),u(-8.096,-16.35,-0.74,0.0918,0,2,0,-2),u(-5.741,-0.04,0,-0.0009,0,0,2,2),u(0.255,0,0,0,0,0,2,1),u(-411.608,-0.2,0,-0.0124,0,0,2,0),u(0.584,0.84,0,0.0071,0,0,2,-1),u(-55.173,-52.14,0,-0.1052,0,0,2,-2),u(0.254,0.25,0,-0.0017,0,0,2,-3),u(0.025,-1.67,0,0.0031,0,0,2,-4),u(1.06,2.96,-0.166,0.0243,3,0,0,2),u(36.124,50.64,-1.3,0.6215,3,0,0,0),u(-13.193,-16.4,0.258,-0.1187,3,0,0,-2),u(-1.187,-0.74,0.042,0.0074,3,0,0,-4),u(-0.293,-0.31,-0.002,0.0046,3,0,0,-6),u(-0.29,-1.45,0.116,-0.0051,2,1,0,2),u(-7.649,-10.56,0.259,-0.1038,2,1,0,0),u(-8.627,-7.59,0.078,-0.0192,2,1,0,-2),u(-2.74,-2.54,0.022,0.0324,2,1,0,-4),u(1.181,3.32,-0.212,0.0213,2,-1,0,2),u(9.703,11.67,-0.151,0.1268,2,-1,0,0),u(-0.352,-0.37,0.001,-0.0028,2,-1,0,-1),u(-2.494,-1.17,-0.003,-0.0017,2,-1,0,-2),u(0.36,0.2,-0.012,-0.0043,2,-1,0,-4),u(-1.167,-1.25,0.008,-0.0106,1,2,0,0),u(-7.412,-6.12,0.117,0.0484,1,2,0,-2),u(-0.311,-0.65,-0.032,0.0044,1,2,0,-4),u(0.757,1.82,-0.105,0.0112,1,-2,0,2),u(2.58,2.32,0.027,0.0196,1,-2,0,0),u(2.533,2.4,-0.014,-0.0212,1,-2,0,-2),u(-0.344,-0.57,-0.025,0.0036,0,3,0,-2),u(-0.992,-0.02,0,0,1,0,2,2),u(-45.099,-0.02,0,-0.001,1,0,2,0),u(-0.179,-9.52,0,-0.0833,1,0,2,-2),u(-0.301,-0.33,0,0.0014,1,0,2,-4),u(-6.382,-3.37,0,-0.0481,1,0,-2,2),u(39.528,85.13,0,-0.7136,1,0,-2,0),u(9.366,0.71,0,-0.0112,1,0,-2,-2),u(0.202,0.02,0,0,1,0,-2,-4),u(0.415,0.1,0,0.0013,0,1,2,0),u(-2.152,-2.26,0,-0.0066,0,1,2,-2),u(-1.44,-1.3,0,0.0014,0,1,-2,2),u(0.384,-0.04,0,0,0,1,-2,-2),u(1.938,3.6,-0.145,0.0401,4,0,0,0),u(-0.952,-1.58,0.052,-0.013,4,0,0,-2),u(-0.551,-0.94,0.032,-0.0097,3,1,0,0),u(-0.482,-0.57,0.005,-0.0045,3,1,0,-2),u(0.681,0.96,-0.026,0.0115,3,-1,0,0),u(-0.297,-0.27,0.002,-0.0009,2,2,0,-2),u(0.254,0.21,-0.003,0,2,-2,0,-2),u(-0.25,-0.22,0.004,0.0014,1,3,0,-2),u(-3.996,0,0,0.0004,2,0,2,0),u(0.557,-0.75,0,-0.009,2,0,2,-2),u(-0.459,-0.38,0,-0.0053,2,0,-2,2),u(-1.298,0.74,0,0.0004,2,0,-2,0),u(0.538,1.14,0,-0.0141,2,0,-2,-2),u(0.263,0.02,0,0,1,1,2,0),u(0.426,0.07,0,-0.0006,1,1,-2,-2),u(-0.304,0.03,0,0.0003,1,-1,2,0),u(-0.372,-0.19,0,-0.0027,1,-1,-2,2),u(0.418,0,0,0,0,0,4,0),u(-0.33,-0.04,0,0,3,0,2,0);function S0(w0,P,l0,P0,_0){return w0*C0(P,l0,P0,_0).y}D=0,D+=S0(-526.069,0,0,1,-2),D+=S0(-3.352,0,0,1,-4),D+=S0(44.297,1,0,1,-2),D+=S0(-6,1,0,1,-4),D+=S0(20.599,-1,0,1,0),D+=S0(-30.598,-1,0,1,-2),D+=S0(-24.649,-2,0,1,0),D+=S0(-2,-2,0,1,-2),D+=S0(-22.571,0,1,1,-2),D+=S0(10.985,0,-1,1,-2),O+=0.82*H0(0.7736-62.5512*$)+0.31*H0(0.0466-125.1025*$)+0.35*H0(0.5785-25.1042*$)+0.66*H0(0.4591+1335.8075*$)+0.64*H0(0.313-91.568*$)+1.14*H0(0.148+1331.2898*$)+0.21*H0(0.5918+1056.5859*$)+0.44*H0(0.5784+1322.8595*$)+0.24*H0(0.2275-5.7374*$)+0.28*H0(0.2965+2.6929*$)+0.33*H0(0.3132+6.3368*$),Y=_+x/f6;let n0=(1.000002708+139.978*q)*(18519.699999999997+F)*Math.sin(Y)-6.24*Math.sin(3*Y)+D;return{geo_eclip_lon:M6*y7((I+O/f6)/M6),geo_eclip_lat:Math.PI/648000*n0,distance_au:f6*0.00004263520978299708/(0.999953253*N)}}function cG(H,$){return[H.rot[0][0]*$[0]+H.rot[1][0]*$[1]+H.rot[2][0]*$[2],H.rot[0][1]*$[0]+H.rot[1][1]*$[1]+H.rot[2][1]*$[2],H.rot[0][2]*$[0]+H.rot[1][2]*$[1]+H.rot[2][2]*$[2]]}function nG(H,$,J){let Z=sG($,J);return cG(Z,H)}function sG(H,$){let J=H.tt/36525,Z=84381.406,W=((((-0.0000000951*J+0.000132851)*J-0.00114045)*J-1.0790069)*J+5038.481507)*J,Q=((((0.0000003337*J-0.000000467)*J-0.00772503)*J+0.0512623)*J-0.025754)*J+Z,Y=((((-0.000000056*J+0.000170663)*J-0.00121197)*J-2.3814292)*J+10.556403)*J;Z*=0.00000484813681109536,W*=0.00000484813681109536,Q*=0.00000484813681109536,Y*=0.00000484813681109536;let X=Math.sin(Z),K=Math.cos(Z),U=Math.sin(-W),G=Math.cos(-W),E=Math.sin(-Q),R=Math.cos(-Q),q=Math.sin(Y),O=Math.cos(Y),D=O*G-U*q*R,F=O*U*K+q*R*G*K-X*q*E,N=O*U*X+q*R*G*X+K*q*E,I=-q*G-U*O*R,L=-q*U*K+O*R*G*K-X*O*E,T=-q*U*X+O*R*G*X+K*O*E,_=U*E,w=-E*G*K-X*R,B=-E*G*X+R*K;if($===MH.Into2000)return new b9([[D,F,N],[I,L,T],[_,w,B]]);if($===MH.From2000)return new b9([[D,I,_],[F,L,w],[N,T,B]]);throw"Invalid precess direction"}class _8{constructor(H,$,J,Z){this.x=H,this.y=$,this.z=J,this.t=Z}Length(){return Math.hypot(this.x,this.y,this.z)}}class L6{constructor(H,$,J,Z,W,Q,Y){this.x=H,this.y=$,this.z=J,this.vx=Z,this.vy=W,this.vz=Q,this.t=Y}}class gQ{constructor(H,$,J){this.lat=uJ(H),this.lon=uJ($),this.dist=uJ(J)}}class b9{constructor(H){this.rot=H}}function kH(H){let $=x6(H),J=dG($),Z=J.distance_au*Math.cos(J.geo_eclip_lat),W=[Z*Math.cos(J.geo_eclip_lon),Z*Math.sin(J.geo_eclip_lon),J.distance_au*Math.sin(J.geo_eclip_lat)],Q=lG($,W),Y=nG(Q,$,MH.Into2000);return new _8(Y[0],Y[1],Y[2],$)}function pQ(H){let $=x6(H),J=0.00001,Z=$.AddDays(-0.00001),W=$.AddDays(0.00001),Q=kH(Z),Y=kH(W);return new L6((Q.x+Y.x)/2,(Q.y+Y.y)/2,(Q.z+Y.z)/2,(Y.x-Q.x)/0.00002,(Y.y-Q.y)/0.00002,(Y.z-Q.z)/0.00002,$)}function iG(H){let $=x6(H),J=pQ($),Z=82.30056;return new L6(J.x/82.30056,J.y/82.30056,J.z/82.30056,J.vx/82.30056,J.vy/82.30056,J.vz/82.30056,$)}function g7(H,$,J){let Z=1,W=0;for(let Q of H){let Y=0;for(let[K,U,G]of Q)Y+=K*Math.cos(U+$*G);let X=Z*Y;if(J)X%=M6;W+=X,Z*=$}return W}function lJ(H,$){let J=1,Z=0,W=0,Q=0;for(let Y of H){let X=0,K=0;for(let[U,G,E]of Y){let R=G+$*E;if(X+=U*E*Math.sin(R),Q>0)K+=U*Math.cos(R)}W+=Q*Z*K-J*X,Z=J,J*=$,++Q}return W}var DH=365250,mJ=0,dJ=1,cJ=2;function nJ(H){return new B8(H[0]+0.00000044036*H[1]-0.000000190919*H[2],-0.000000479966*H[0]+0.917482137087*H[1]-0.397776982902*H[2],0.397776982902*H[1]+0.917482137087*H[2])}function uQ(H,$,J){let Z=J*Math.cos($),W=Math.cos(H),Q=Math.sin(H);return[Z*W,Z*Q,J*Math.sin($)]}function v9(H,$){let J=$.tt/DH,Z=g7(H[mJ],J,!0),W=g7(H[dJ],J,!1),Q=g7(H[cJ],J,!1),Y=uQ(Z,W,Q);return nJ(Y).ToAstroVector($)}function sJ(H,$){let J=$/DH,Z=g7(H[mJ],J,!0),W=g7(H[dJ],J,!1),Q=g7(H[cJ],J,!1),Y=lJ(H[mJ],J),X=lJ(H[dJ],J),K=lJ(H[cJ],J),U=Math.cos(Z),G=Math.sin(Z),E=Math.cos(W),R=Math.sin(W),q=+(K*E*U)-Q*R*U*X-Q*E*G*Y,O=+(K*E*G)-Q*R*G*X+Q*E*U*Y,D=+(K*R)+Q*E*X,F=uQ(Z,W,Q),N=[q/DH,O/DH,D/DH],I=nJ(F),L=nJ(N);return new W7($,I,L)}function x9(H,$,J,Z){let W=Z/(Z+0.0002959122082855911),Q=v9(h6[J],$);H.x+=W*Q.x,H.y+=W*Q.y,H.z+=W*Q.z}function oG(H){let $=new _8(0,0,0,H);return x9($,H,x0.Jupiter,0.0000002825345909524226),x9($,H,x0.Saturn,0.00000008459715185680659),x9($,H,x0.Uranus,0.00000001292024916781969),x9($,H,x0.Neptune,0.00000001524358900784276),$}var iJ=51,aG=29200,v7=146,k6=201,Z7=[[-730000,[-26.118207232108,-14.376168177825,3.384402515299],[0.0016339372163656,-0.0027861699588508,-0.0013585880229445]],[-700800,[41.974905202127,-0.448502952929,-12.770351505989],[0.00073458569351457,0.0022785014891658,0.00048619778602049]],[-671600,[14.706930780744,44.269110540027,9.353698474772],[-0.00210001479998,0.00022295915939915,0.00070143443551414]],[-642400,[-29.441003929957,-6.43016153057,6.858481011305],[0.00084495803960544,-0.0030783914758711,-0.0012106305981192]],[-613200,[39.444396946234,-6.557989760571,-13.913760296463],[0.0011480029005873,0.0022400006880665,0.00035168075922288]],[-584000,[20.2303809507,43.266966657189,7.382966091923],[-0.0019754081700585,0.00053457141292226,0.00075929169129793]],[-554800,[-30.65832536462,2.093818874552,9.880531138071],[0.000061010603013347,-0.0031326500935382,-0.00099346125151067]],[-525600,[35.737703251673,-12.587706024764,-14.677847247563],[0.0015802939375649,0.0021347678412429,0.00019074436384343]],[-496400,[25.466295188546,41.367478338417,5.216476873382],[-0.0018054401046468,0.0008328308359951,0.00080260156912107]],[-467200,[-29.847174904071,10.636426313081,12.297904180106],[-0.00063257063052907,-0.0029969577578221,-0.00074476074151596]],[-438000,[30.774692107687,-18.236637015304,-14.945535879896],[0.0020113162005465,0.0019353827024189,-0.0000020937793168297]],[-408800,[30.243153324028,38.656267888503,2.938501750218],[-0.0016052508674468,0.0011183495337525,0.00083333973416824]],[-379600,[-27.288984772533,18.643162147874,14.023633623329],[-0.0011856388898191,-0.0027170609282181,-0.00049015526126399]],[-350400,[24.519605196774,-23.245756064727,-14.626862367368],[0.0024322321483154,0.0016062008146048,-0.00023369181613312]],[-321200,[34.505274805875,35.125338586954,0.557361475637],[-0.0013824391637782,0.0013833397561817,0.00084823598806262]],[-292000,[-23.275363915119,25.818514298769,15.055381588598],[-0.0016062295460975,-0.0023395961498533,-0.00024377362639479]],[-262800,[17.050384798092,-27.180376290126,-13.608963321694],[0.0028175521080578,0.0011358749093955,-0.00049548725258825]],[-233600,[38.093671910285,30.880588383337,-1.843688067413],[-0.0011317697153459,0.0016128814698472,0.00084177586176055]],[-204400,[-18.197852930878,31.932869934309,15.438294826279],[-0.0019117272501813,-0.0019146495909842,-0.000019657304369835]],[-175200,[8.528924039997,-29.618422200048,-11.805400994258],[0.0031034370787005,0.0005139363329243,-0.00077293066202546]],[-146000,[40.94685725864,25.904973592021,-4.256336240499],[-0.00083652705194051,0.0018129497136404,0.0008156422827306]],[-116800,[-12.326958895325,36.881883446292,15.217158258711],[-0.0021166103705038,-0.001481442003599,0.00017401209844705]],[-87600,[-0.633258375909,-30.018759794709,-9.17193287495],[0.0032016994581737,-0.00025279858672148,-0.0010411088271861]],[-58400,[42.936048423883,20.344685584452,-6.588027007912],[-0.00050525450073192,0.0019910074335507,0.00077440196540269]],[-29200,[-5.975910552974,40.61180995846,14.470131723673],[-0.0022184202156107,-0.0010562361130164,0.00033652250216211]],[0,[-9.875369580774,-27.978926224737,-5.753711824704],[0.0030287533248818,-0.0011276087003636,-0.0012651326732361]],[29200,[43.958831986165,14.214147973292,-8.808306227163],[-0.00014717608981871,0.0021404187242141,0.00071486567806614]],[58400,[0.67813676352,43.094461639362,13.243238780721],[-0.0022358226110718,-0.00063233636090933,0.00047664798895648]],[87600,[-18.282602096834,-23.30503958666,-1.766620508028],[0.0025567245263557,-0.0019902940754171,-0.0013943491701082]],[116800,[43.873338744526,7.700705617215,-10.814273666425],[0.00023174803055677,0.0022402163127924,0.00062988756452032]],[146000,[7.392949027906,44.382678951534,11.629500214854],[-0.002193281545383,-0.00021751799585364,0.00059556516201114]],[175200,[-24.981690229261,-16.204012851426,2.466457544298],[0.001819398914958,-0.0026765419531201,-0.0013848283502247]],[204400,[42.530187039511,0.845935508021,-12.554907527683],[0.00065059779150669,0.0022725657282262,0.00051133743202822]],[233600,[13.999526486822,44.462363044894,9.669418486465],[-0.0021079296569252,0.00017533423831993,0.00069128485798076]],[262800,[-29.184024803031,-7.371243995762,6.493275957928],[0.00093581363109681,-0.0030610357109184,-0.0012364201089345]],[292000,[39.831980671753,-6.078405766765,-13.909815358656],[0.0011117769689167,0.0022362097830152,0.00036230548231153]],[321200,[20.294955108476,43.417190420251,7.450091985932],[-0.0019742157451535,0.00053102050468554,0.00075938408813008]],[350400,[-30.66999230216,2.318743558955,9.973480913858],[0.000045605107450676,-0.0031308219926928,-0.00099066533301924]],[379600,[35.626122155983,-12.897647509224,-14.777586508444],[0.0016015684949743,0.0021171931182284,0.00018002516202204]],[408800,[26.133186148561,41.232139187599,5.00640132622],[-0.0017857704419579,0.00086046232702817,0.00080614690298954]],[438000,[-29.57674022923,11.863535943587,12.631323039872],[-0.00072292830060955,-0.0029587820140709,-0.000708242964503]],[467200,[29.910805787391,-19.159019294,-15.013363865194],[0.0020871080437997,0.0018848372554514,-0.000038528655083926]],[496400,[31.375957451819,38.050372720763,2.433138343754],[-0.0015546055556611,0.0011699815465629,0.00083565439266001]],[525600,[-26.360071336928,20.662505904952,14.414696258958],[-0.0013142373118349,-0.0026236647854842,-0.00042542017598193]],[554800,[22.599441488648,-24.508879898306,-14.484045731468],[0.0025454108304806,0.0014917058755191,-0.00030243665086079]],[584000,[35.877864013014,33.894226366071,-0.224524636277],[-0.0012941245730845,0.0014560427668319,0.00084762160640137]],[613200,[-21.538149762417,28.204068269761,15.321973799534],[-0.001731211740901,-0.0021939631314577,-0.0001631691327518]],[642400,[13.971521374415,-28.339941764789,-13.083792871886],[0.0029334630526035,0.00091860931752944,-0.00059939422488627]],[671600,[39.526942044143,28.93989736011,-2.872799527539],[-0.0010068481658095,0.001702113288809,0.00083578230511981]],[700800,[-15.576200701394,34.399412961275,15.466033737854],[-0.0020098814612884,-0.0017191109825989,0.000070414782780416]],[730000,[4.24325283709,-30.118201690825,-10.707441231349],[0.0031725847067411,0.0001609846120227,-0.00090672150593868]]];class B8{constructor(H,$,J){this.x=H,this.y=$,this.z=J}clone(){return new B8(this.x,this.y,this.z)}ToAstroVector(H){return new _8(this.x,this.y,this.z,H)}static zero(){return new B8(0,0,0)}quadrature(){return this.x*this.x+this.y*this.y+this.z*this.z}add(H){return new B8(this.x+H.x,this.y+H.y,this.z+H.z)}sub(H){return new B8(this.x-H.x,this.y-H.y,this.z-H.z)}incr(H){this.x+=H.x,this.y+=H.y,this.z+=H.z}decr(H){this.x-=H.x,this.y-=H.y,this.z-=H.z}mul(H){return new B8(H*this.x,H*this.y,H*this.z)}div(H){return new B8(this.x/H,this.y/H,this.z/H)}mean(H){return new B8((this.x+H.x)/2,(this.y+H.y)/2,(this.z+H.z)/2)}neg(){return new B8(-this.x,-this.y,-this.z)}}class W7{constructor(H,$,J){this.tt=H,this.r=$,this.v=J}clone(){return new W7(this.tt,this.r,this.v)}sub(H){return new W7(this.tt,this.r.sub(H.r),this.v.sub(H.v))}}function rG(H){let[$,[J,Z,W],[Q,Y,X]]=H;return new W7($,new B8(J,Z,W),new B8(Q,Y,X))}function y9(H,$,J,Z){let W=Z/(Z+0.0002959122082855911),Q=sJ(h6[J],$);return H.r.incr(Q.r.mul(W)),H.v.incr(Q.v.mul(W)),Q}function OH(H,$,J){let Z=J.sub(H),W=Z.quadrature();return Z.mul($/(W*Math.sqrt(W)))}class LH{constructor(H){let $=new W7(H,new B8(0,0,0),new B8(0,0,0));this.Jupiter=y9($,H,x0.Jupiter,0.0000002825345909524226),this.Saturn=y9($,H,x0.Saturn,0.00000008459715185680659),this.Uranus=y9($,H,x0.Uranus,0.00000001292024916781969),this.Neptune=y9($,H,x0.Neptune,0.00000001524358900784276),this.Jupiter.r.decr($.r),this.Jupiter.v.decr($.v),this.Saturn.r.decr($.r),this.Saturn.v.decr($.v),this.Uranus.r.decr($.r),this.Uranus.v.decr($.v),this.Neptune.r.decr($.r),this.Neptune.v.decr($.v),this.Sun=new W7(H,$.r.mul(-1),$.v.mul(-1))}Acceleration(H){let $=OH(H,0.0002959122082855911,this.Sun.r);return $.incr(OH(H,0.0000002825345909524226,this.Jupiter.r)),$.incr(OH(H,0.00000008459715185680659,this.Saturn.r)),$.incr(OH(H,0.00000001292024916781969,this.Uranus.r)),$.incr(OH(H,0.00000001524358900784276,this.Neptune.r)),$}}class p9{constructor(H,$,J,Z){this.tt=H,this.r=$,this.v=J,this.a=Z}clone(){return new p9(this.tt,this.r.clone(),this.v.clone(),this.a.clone())}}class tJ{constructor(H,$){this.bary=H,this.grav=$}}function g9(H,$,J,Z){return new B8($.x+H*(J.x+H*Z.x/2),$.y+H*(J.y+H*Z.y/2),$.z+H*(J.z+H*Z.z/2))}function fQ(H,$,J){return new B8($.x+H*J.x,$.y+H*J.y,$.z+H*J.z)}function oJ(H,$){let J=H-$.tt,Z=new LH(H),W=g9(J,$.r,$.v,$.a),Q=Z.Acceleration(W).mean($.a),Y=g9(J,$.r,$.v,Q),X=$.v.add(Q.mul(J)),K=Z.Acceleration(Y),U=new p9(H,Y,X,K);return new tJ(Z,U)}var tG=[];function lQ(H,$){let J=Math.floor(H);if(J<0)return 0;if(J>=$)return $-1;return J}function aJ(H){let $=rG(H),J=new LH($.tt),Z=$.r.add(J.Sun.r),W=$.v.add(J.Sun.v),Q=J.Acceleration(Z),Y=new p9($.tt,Z,W,Q);return new tJ(J,Y)}function eG(H,$){let J=Z7[0][0];if($<J||$>Z7[iJ-1][0])return null;let Z=lQ(($-J)/aG,iJ-1);if(!H[Z]){let Q=H[Z]=[];Q[0]=aJ(Z7[Z]).grav,Q[k6-1]=aJ(Z7[Z+1]).grav;let Y,X=Q[0].tt;for(Y=1;Y<k6-1;++Y)Q[Y]=oJ(X+=v7,Q[Y-1]).grav;X=Q[k6-1].tt;var W=[];W[k6-1]=Q[k6-1];for(Y=k6-2;Y>0;--Y)W[Y]=oJ(X-=v7,W[Y+1]).grav;for(Y=k6-2;Y>0;--Y){let K=Y/(k6-1);Q[Y].r=Q[Y].r.mul(1-K).add(W[Y].r.mul(K)),Q[Y].v=Q[Y].v.mul(1-K).add(W[Y].v.mul(K)),Q[Y].a=Q[Y].a.mul(1-K).add(W[Y].a.mul(K))}}return H[Z]}function hQ(H,$,J){let Z=aJ(H),W=Math.ceil(($-Z.grav.tt)/J);for(let Q=0;Q<W;++Q)Z=oJ(Q+1===W?$:Z.grav.tt+J,Z.grav);return Z}function mQ(H,$){let J,Z,W,Q=eG(tG,H.tt);if(!Q){let Y;if(H.tt<Z7[0][0])Y=hQ(Z7[0],H.tt,-v7);else Y=hQ(Z7[iJ-1],H.tt,+v7);J=Y.grav.r,Z=Y.grav.v,W=Y.bary}else{let Y=lQ((H.tt-Q[0].tt)/v7,k6-1),X=Q[Y],K=Q[Y+1],U=X.a.mean(K.a),G=g9(H.tt-X.tt,X.r,X.v,U),E=fQ(H.tt-X.tt,X.v,U),R=g9(H.tt-K.tt,K.r,K.v,U),q=fQ(H.tt-K.tt,K.v,U),O=(H.tt-X.tt)/v7;J=G.mul(1-O).add(R.mul(O)),Z=E.mul(1-O).add(q.mul(O))}if($){if(!W)W=new LH(H.tt);J=J.sub(W.Sun.r),Z=Z.sub(W.Sun.v)}return new L6(J.x,J.y,J.z,Z.x,Z.y,Z.z,H)}var nF=new b9([[0.999432765338654,-0.0336771074697641,0],[0.0303959428906285,0.902057912352809,0.430543388542295],[-0.0144994559663353,-0.430299169409101,0.902569881273754]]);function p7(H,$){var J=x6($);if(H in h6)return v9(h6[H],J);if(H===x0.Pluto){let Y=mQ(J,!0);return new _8(Y.x,Y.y,Y.z,J)}if(H===x0.Sun)return new _8(0,0,0,J);if(H===x0.Moon){var Z=v9(h6.Earth,J),W=kH(J);return new _8(Z.x+W.x,Z.y+W.y,Z.z+W.z,J)}if(H===x0.EMB){let Y=v9(h6.Earth,J),X=kH(J),K=82.30056;return new _8(Y.x+X.x/82.30056,Y.y+X.y/82.30056,Y.z+X.z/82.30056,J)}if(H===x0.SSB)return oG(J);let Q=rJ(H);if(Q){let Y=new gQ(Q.dec,15*Q.ra,Q.dist);return W5(Y,J)}throw`HelioVector: Unknown body "${H}"`}function H5(H,$){let J=$,Z=0;for(let W=0;W<10;++W){let Q=H(J),Y=Q.Length()/173.1446326846693;if(Y>1)throw"Object is too distant for light-travel solver.";let X=$.AddDays(-Y);if(Z=Math.abs(X.tt-J.tt),Z<0.000000001)return Q;J=X}throw`Light-travel time solver did not converge: dt = ${Z}`}class dQ{constructor(H,$,J,Z){this.observerBody=H,this.targetBody=$,this.aberration=J,this.observerPos=Z}Position(H){if(this.aberration)this.observerPos=p7(this.observerBody,H);let $=p7(this.targetBody,H);return new _8($.x-this.observerPos.x,$.y-this.observerPos.y,$.z-this.observerPos.z,H)}}function $5(H,$,J,Z){bQ(Z);let W=x6(H);if(rJ(J)){let X=p7(J,W);if(Z){let U=Z5($,W),G=new _8(X.x-U.x,X.y-U.y,X.z-U.z,W),E=173.1446326846693/G.Length();return new _8(G.x+U.vx/E,G.y+U.vy/E,G.z+U.vz/E,W)}let K=p7($,W);return new _8(X.x-K.x,X.y-K.y,X.z-K.z,W)}let Q;if(Z)Q=new _8(0,0,0,W);else Q=p7($,W);let Y=new dQ($,J,Z,Q);return H5((X)=>Y.Position(X),W)}function eJ(H,$,J){bQ(J);let Z=x6($);switch(H){case x0.Earth:return new _8(0,0,0,Z);case x0.Moon:return kH(Z);default:let W=$5(Z,x0.Earth,H,J);return W.t=Z,W}}function J5(H,$){return new L6(H.r.x,H.r.y,H.r.z,H.v.x,H.v.y,H.v.z,$)}function Z5(H,$){let J=x6($);switch(H){case x0.Sun:return new L6(0,0,0,0,0,0,J);case x0.SSB:let Z=new LH(J.tt);return new L6(-Z.Sun.r.x,-Z.Sun.r.y,-Z.Sun.r.z,-Z.Sun.v.x,-Z.Sun.v.y,-Z.Sun.v.z,J);case x0.Mercury:case x0.Venus:case x0.Earth:case x0.Mars:case x0.Jupiter:case x0.Saturn:case x0.Uranus:case x0.Neptune:let W=sJ(h6[H],J.tt);return J5(W,J);case x0.Pluto:return mQ(J,!0);case x0.Moon:case x0.EMB:let Q=sJ(h6.Earth,J.tt),Y=H==x0.Moon?pQ(J):iG(J);return new L6(Y.x+Q.r.x,Y.y+Q.r.y,Y.z+Q.r.z,Y.vx+Q.v.x,Y.vy+Q.v.y,Y.vz+Q.v.z,J);default:if(rJ(H)){let X=p7(H,J);return new L6(X.x,X.y,X.z,0,0,0,J)}throw`HelioState: Unsupported body "${H}"`}}var xQ;(function(H){H[H.Pericenter=0]="Pericenter",H[H.Apocenter=1]="Apocenter"})(xQ||(xQ={}));function W5(H,$){$=x6($);let J=H.lat*0.017453292519943295,Z=H.lon*0.017453292519943295,W=H.dist*Math.cos(J);return new _8(W*Math.cos(Z),W*Math.sin(Z),H.dist*Math.sin(J),$)}var yQ;(function(H){H.Penumbral="penumbral",H.Partial="partial",H.Annular="annular",H.Total="total"})(yQ||(yQ={}));var vQ;(function(H){H[H.Invalid=0]="Invalid",H[H.Ascending=1]="Ascending",H[H.Descending=-1]="Descending"})(vQ||(vQ={}));var u7=6371,u9=1737.4,l9=149597870.7,cQ=[{name:"Launch & LEO",startTime:Date.UTC(2026,3,1,22,35),endTime:Date.UTC(2026,3,1,23,30),color:"#ff4444"},{name:"HEO Checkout",startTime:Date.UTC(2026,3,1,23,30),endTime:Date.UTC(2026,3,3,16,0),color:"#ffaa00"},{name:"Trans-Lunar Coast",startTime:Date.UTC(2026,3,3,16,0),endTime:Date.UTC(2026,3,6,21,0),color:"#00aaff"},{name:"Lunar Flyby",startTime:Date.UTC(2026,3,6,21,0),endTime:Date.UTC(2026,3,7,1,0),color:"#ff00ff"},{name:"Return Coast",startTime:Date.UTC(2026,3,7,1,0),endTime:Date.UTC(2026,3,10,23,0),color:"#00ffaa"},{name:"Reentry & Splashdown",startTime:Date.UTC(2026,3,10,23,0),endTime:Date.UTC(2026,3,11,0,7),color:"#ff4444"}];function nQ(H){let $=new z9,J=new Q6,Z=new r8(u7,96,48),W=$.load("/textures/earth_atmos_2048.jpg");W.colorSpace=c6;let Q=new a6({map:W,normalMap:$.load("/textures/earth_normal_2048.jpg"),normalScale:new T0(0.85,-0.85),specularMap:$.load("/textures/earth_specular_2048.jpg"),specular:new A0(3355443),shininess:15}),Y=new r0(Z,Q);Y.rotation.z=0.4101,J.add(Y);let X=new r8(u7*1.003,64,32),K=$.load("/textures/earth_clouds_1024.png");K.colorSpace=c6;let U=new a6({map:K,transparent:!0,opacity:0.35,depthWrite:!1}),G=new r0(X,U);J.add(G);let E=new r8(u7*1.015,64,32),R=new a6({color:4491519,transparent:!0,opacity:0.08,side:A8,depthWrite:!1});J.add(new r0(E,R));let q=new RH(4491519,0.4,80000);q.position.set(0,0,0),J.add(q),H.add(J);let O=new r8(u9,48,24),D=$.load("/textures/moon_1024.jpg");D.colorSpace=c6;let F=new a6({map:D,shininess:2}),N=new r0(O,F);H.add(N);let I=Y5();H.add(I);let L=Q5();H.add(L);function T(w,B){let b=eJ(x0.Moon,w,!0);N.position.set(b.x*l9,b.z*l9,-b.y*l9);let C=eJ(x0.Sun,w,!0),z=new S(C.x,C.z,-C.y).normalize();L.position.copy(z.clone().multiplyScalar(1200000)),B.position.copy(z.clone().multiplyScalar(500000))}function _(){return I.position.clone()}return{earthGroup:J,moonMesh:N,sunGroup:L,spacecraft:I,updatePositions:T,getSpacecraftWorldPos:_}}function Q5(){let H=new Q6,$=new r8(6000,32,32),J=new j6({color:16777198});H.add(new r0($,J));let Z=new r8(12000,24,24),W=new j6({color:16768358,transparent:!0,opacity:0.3,depthWrite:!1});H.add(new r0(Z,W));let Q=new r8(20000,16,16),Y=new j6({color:16763972,transparent:!0,opacity:0.1,depthWrite:!1});return H.add(new r0(Q,Y)),H}function Y5(){let H=new Q6,$=X5(),J=K5(),Z=U5(),W=new a8(150,450,550,32),Q=new S8({map:$,color:15856372,metalness:0.22,roughness:0.72}),Y=new r0(W,Q);Y.position.y=575,H.add(Y);let X=new r0(new _7(115,18,12,36),new S8({color:10331309,metalness:0.65,roughness:0.38}));X.rotation.x=Math.PI/2,X.position.y=838,H.add(X);let K=new r0(new a8(92,108,30,24),new S8({color:2830648,metalness:0.35,roughness:0.58}));K.position.y=852,H.add(K);let U=new r0(new _7(230,26,12,36),new S8({color:2107442,metalness:0.22,roughness:0.72}));U.rotation.x=Math.PI/2,U.position.y=640,H.add(U);let G=new a8(460,460,30,32),E=new S8({color:1513239,metalness:0.06,roughness:0.94}),R=new r0(G,E);R.position.y=285,H.add(R);let q=new a8(440,400,50,32),O=new S8({color:6251369,metalness:0.55,roughness:0.48}),D=new r0(q,O);D.position.y=245,H.add(D);let F=new a8(400,400,550,32),N=new S8({map:J,color:10528430,metalness:0.62,roughness:0.42}),I=new r0(F,N);I.position.y=-55,H.add(I);let L=new Z6(92,220,134),T=new S8({color:7239296,metalness:0.58,roughness:0.46});for(let A=0;A<4;A++){let x=A*Math.PI/2+Math.PI/4,p=new r0(L,T);p.position.set(Math.cos(x)*470,-40,Math.sin(x)*470),p.rotation.y=x,H.add(p);let l=new r0(new a8(18,30,54,12),new S8({color:3159355,metalness:0.7,roughness:0.34}));l.rotation.z=Math.PI/2,l.rotation.y=x,l.position.set(Math.cos(x)*542,18,Math.sin(x)*542),H.add(l)}let _=new a8(100,180,200,16),w=new S8({color:3816770,metalness:0.72,roughness:0.3}),B=new r0(_,w);B.position.y=-430,H.add(B);let b=new Z6(1800,20,350),C=new S8({map:Z,emissiveMap:Z,emissive:new A0(2373728),color:9410723,metalness:0.52,roughness:0.45,side:d8});for(let A=0;A<4;A++){let x=new r0(b,C),p=A*Math.PI/2+Math.PI/4;x.position.set(Math.cos(p)*1100,-55,Math.sin(p)*1100),x.rotation.y=p,H.add(x);let l=new r0(new Z6(620,34,38),new S8({color:10528688,metalness:0.6,roughness:0.38}));l.position.set(Math.cos(p)*620,-55,Math.sin(p)*620),l.rotation.y=p,H.add(l)}let z=new RH(8961023,0.6,20000);return H.add(z),H}function X5(){let H=document.createElement("canvas");H.width=1024,H.height=512;let $=H.getContext("2d");$.fillStyle="#d9dde2",$.fillRect(0,0,H.width,H.height);let J=$.createLinearGradient(0,0,0,H.height);J.addColorStop(0,"rgba(255,255,255,0.34)"),J.addColorStop(0.38,"rgba(255,255,255,0.1)"),J.addColorStop(1,"rgba(70,76,86,0.3)"),$.fillStyle=J,$.fillRect(0,0,H.width,H.height),$.fillStyle="#848b95",$.fillRect(0,330,H.width,122),$.fillStyle="rgba(255,255,255,0.18)",$.fillRect(0,326,H.width,10),$.fillStyle="rgba(44,52,64,0.9)",$.fillRect(398,108,292,108),$.strokeStyle="rgba(90,96,104,0.86)",$.lineWidth=5,$.strokeRect(212,112,206,150),$.strokeRect(442,120,202,84);let Z=[448,512,576,640];for(let W of Z)$.fillStyle="#0e141d",$.beginPath(),$.moveTo(W-22,142),$.lineTo(W+22,142),$.lineTo(W+14,196),$.lineTo(W-14,196),$.closePath(),$.fill(),$.strokeStyle="rgba(212,218,228,0.95)",$.lineWidth=3,$.stroke();$.strokeStyle="rgba(112,118,126,0.78)",$.lineWidth=3;for(let W of[72,104,224,286,326])$.beginPath(),$.moveTo(0,W),$.lineTo(H.width,W),$.stroke();$.strokeStyle="rgba(138,145,154,0.5)",$.lineWidth=2;for(let W=0;W<=H.width;W+=64)$.beginPath(),$.moveTo(W,70),$.lineTo(W,454),$.stroke();for(let W=0;W<160;W++){let Q=W*173%H.width,Y=W*97%H.height,X=0.024+W%5*0.01;$.fillStyle=`rgba(255,255,255,${X})`,$.fillRect(Q,Y,10,10)}return HZ(new S7(H))}function K5(){let H=document.createElement("canvas");H.width=1024,H.height=256;let $=H.getContext("2d");$.fillStyle="#8e959f",$.fillRect(0,0,H.width,H.height);let J=$.createLinearGradient(0,0,0,H.height);J.addColorStop(0,"rgba(255,255,255,0.24)"),J.addColorStop(0.5,"rgba(255,255,255,0.05)"),J.addColorStop(1,"rgba(20,24,30,0.34)"),$.fillStyle=J,$.fillRect(0,0,H.width,H.height),$.fillStyle="rgba(64,70,78,0.86)",$.fillRect(0,18,H.width,28),$.fillRect(0,108,H.width,26),$.fillRect(0,204,H.width,24),$.fillStyle="rgba(194,200,208,0.38)",$.fillRect(0,48,H.width,5),$.fillRect(0,136,H.width,4),$.fillRect(0,198,H.width,4),$.strokeStyle="rgba(225,232,240,0.36)",$.lineWidth=2;for(let Z=0;Z<=H.width;Z+=64)$.beginPath(),$.moveTo(Z,0),$.lineTo(Z,H.height),$.stroke();for(let Z=0;Z<8;Z++){let W=30+Z*120;$.fillStyle=Z%2===0?"rgba(196,202,210,0.62)":"rgba(72,78,88,0.62)",$.fillRect(W,60,78,128),$.strokeStyle="rgba(235,240,245,0.26)",$.strokeRect(W,60,78,128),$.fillStyle="rgba(28,34,42,0.5)",$.fillRect(W+10,76,58,18),$.fillRect(W+10,154,58,20)}for(let Z=0;Z<220;Z++){let W=Z*71%H.width,Q=Z*53%H.height,Y=120+Z%40;$.fillStyle=`rgba(${Y},${Y+4},${Y+8},0.08)`,$.fillRect(W,Q,7,7)}return HZ(new S7(H))}function U5(){let H=document.createElement("canvas");H.width=1024,H.height=256;let $=H.getContext("2d");$.fillStyle="#09111e",$.fillRect(0,0,H.width,H.height);let J=$.createLinearGradient(0,0,H.width,H.height);J.addColorStop(0,"rgba(74,126,210,0.34)"),J.addColorStop(0.5,"rgba(12,24,48,0.1)"),J.addColorStop(1,"rgba(116,170,255,0.24)"),$.fillStyle=J,$.fillRect(0,0,H.width,H.height),$.strokeStyle="rgba(166,202,250,0.34)",$.lineWidth=1;for(let W=0;W<=H.width;W+=24)$.beginPath(),$.moveTo(W,0),$.lineTo(W,H.height),$.stroke();for(let W=0;W<=H.height;W+=24)$.beginPath(),$.moveTo(0,W),$.lineTo(H.width,W),$.stroke();$.fillStyle="rgba(214,224,240,0.52)",$.fillRect(0,0,H.width,14),$.fillRect(0,H.height-14,H.width,14),$.fillRect(0,0,16,H.height),$.fillRect(H.width-16,0,16,H.height),$.fillStyle="rgba(72,108,186,0.22)";for(let W=12;W<H.width-20;W+=48)$.fillRect(W,20,22,H.height-40);for(let W=0;W<260;W++){let Q=W*43%H.width,Y=W*61%H.height;$.fillStyle=`rgba(120,170,255,${0.025+W%6*0.012})`,$.fillRect(Q,Y,12,12)}let Z=HZ(new S7(H));return Z.wrapS=HH,Z.wrapT=HH,Z.repeat.set(2.2,1),Z}function HZ(H){return H.colorSpace=c6,H.anisotropy=4,H.needsUpdate=!0,H}var G5=new A0(0,0.85,1),E5=new A0(0.15,0.2,0.35),R5=new A0(1,1,1);function sQ(H,$){let J=new Float32Array($.length*3),Z=new Float32Array($.length*3);for(let R=0;R<$.length;R++){let q=$[R];J[R*3]=q.x,J[R*3+1]=q.z,J[R*3+2]=-q.y}let W=new C8;W.setAttribute("position",new Y8(J,3)),W.setAttribute("color",new Y8(Z,3));let Q=new XH({vertexColors:!0,linewidth:1,transparent:!0,opacity:0.9}),Y=new M9(W,Q);H.add(Y);let X=0;function K(R){X=Math.max(0,Math.min(R,$.length-1));let q=W.attributes.color,O=q.array;for(let D=0;D<$.length;D++){let F;if(D<X-1)F=G5;else if(D>=X-1&&D<=X+1)F=R5;else F=E5;O[D*3]=F.r,O[D*3+1]=F.g,O[D*3+2]=F.b}q.needsUpdate=!0}function U(R){let q=Math.max(0,Math.min(R,$.length-1)),O=$[q];return new S(O.x,O.z,-O.y)}function G(R){let q=Math.max(0,Math.min(R,$.length-1)),O=Math.floor(q),D=Math.min(O+1,$.length-1),F=q-O,N=$[O],I=$[D];return new S(N.x+(I.x-N.x)*F,N.z+(I.z-N.z)*F,-(N.y+(I.y-N.y)*F))}function E(R){let q=Math.max(0,Math.min(R,$.length-1)),O=$[q];return{speed:Math.sqrt(O.vx*O.vx+O.vy*O.vy+O.vz*O.vz),vx:O.vx,vy:O.vy,vz:O.vz}}return K(0),{pathLine:Y,setCurrentTimeIndex:K,getPositionAtIndex:U,getInterpolatedPosition:G,getVelocityAtIndex:E,pointCount:$.length}}function oQ(H,$){let J=H[0].timestamp,Z=H[H.length-1].timestamp,W=Z-J,Q=N(Date.now()),Y=!1,X=500,K=$.querySelector("#scrubber"),U=$.querySelector("#play-btn"),G=$.querySelector("#speed-select"),E=$.querySelector("#time-display"),R=$.querySelector("#phase-display"),q=$.querySelector("#dist-earth"),O=$.querySelector("#dist-moon"),D=$.querySelector("#velocity"),F=$.querySelector("#met-display");K.min="0",K.max=String(H.length-1),K.step="0.1";function N(_){return Math.max(J,Math.min(_,Z))}function I(_){let w=N(_);for(let B=0;B<H.length-1;B++)if(w>=H[B].timestamp&&w<=H[B+1].timestamp){let b=(w-H[B].timestamp)/(H[B+1].timestamp-H[B].timestamp);return B+b}return w<=J?0:H.length-1}function L(){let _=I(Q);K.value=String(_),T()}function T(){let _=new Date(Q);E.textContent=F5(_),F.textContent=N5(Q-J);let w=q5(Q);if(w)R.textContent=w.name,R.style.color=w.color;else R.textContent="—",R.style.color="#888";let B=(Q-J)/W*100;K.style.setProperty("--progress",`${B}%`)}return K.addEventListener("input",()=>{let _=parseFloat(K.value),w=Math.floor(_),B=Math.min(w+1,H.length-1),b=_-w;Q=H[w].timestamp+(H[B].timestamp-H[w].timestamp)*b,T()}),U.addEventListener("click",()=>{Y=!Y,U.textContent=Y?"⏸":"▶",U.title=Y?"Pause":"Play"}),G.addEventListener("change",()=>{X=parseInt(G.value,10)}),L(),{getCurrentIndex(){return Math.round(I(Q))},getCurrentFractionalIndex(){return I(Q)},getCurrentTimestamp(){return Q},update(_){if(!Y)return;if(Q+=_*X,Q>=Z)Q=Z,Y=!1,U.textContent="▶";if(Q<=J)Q=J;L()},updateInfoPanel(_){let w=Math.max(0,_.distanceFromEarth-u7);q.textContent=iQ(w);let B=Math.max(0,_.distanceFromMoon-u9);O.textContent=iQ(B),D.textContent=`${_.velocity.toFixed(2)} km/s (${(_.velocity*3600).toFixed(0)} km/h)`},isPlaying(){return Y}}}function F5(H){return H.toISOString().replace("T"," ").replace(/\.\d+Z$/," UTC")}function N5(H){let $=Math.floor(H/1000),J=Math.floor($/86400),Z=Math.floor($%86400/3600),W=Math.floor($%3600/60),Q=$%60;return`T+${J}d ${String(Z).padStart(2,"0")}:${String(W).padStart(2,"0")}:${String(Q).padStart(2,"0")}`}function iQ(H){if(H>=1000)return`${H.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g,",")} km`;return`${H.toFixed(1)} km`}function q5(H){return cQ.find(($)=>H>=$.startTime&&H<=$.endTime)??null}function m9(H,$){let J=document.createElement("div");return J.className=`label-3d ${$}`,J.textContent=H,document.body.appendChild(J),J}function O5(H,$,J){let Z=J.clientWidth/2,W=J.clientHeight/2;for(let Q of H){let Y=Q.getWorldPosition();if(Y.project($),Y.z>1){Q.element.style.display="none";continue}Q.element.style.display="block",Q.element.style.left=`${Y.x*Z+Z}px`,Q.element.style.top=`${-Y.y*W+W}px`}}function D5(H,$,J){let Z=new D6;for(let U of $)Z.expandByPoint(new S(U.x,U.z,-U.y));Z.expandByPoint(J),Z.expandByPoint(new S(0,0,0));let W=new S;Z.getCenter(W);let Q=new S;Z.getSize(Q);let Y=Math.max(Q.x,Q.y,Q.z),X=H.fov*Math.PI/180,K=Y/2/Math.tan(X/2)*1.6;return{position:new S(W.x+K*0.1,W.y+K*0.4,W.z+K*0.75),target:W}}function M5(H){return H<0.5?4*H*H*H:1-Math.pow(-2*H+2,3)/2}async function k5(){let H=await fetch("/data/trajectory.json");if(!H.ok)H=await fetch("/api/trajectory");if(!H.ok)throw Error(`Failed to fetch trajectory: ${H.status}`);return(await H.json()).map((J)=>({timestamp:J.t,x:J.x,y:J.y,z:J.z,vx:J.vx,vy:J.vy,vz:J.vz}))}async function L5(){let H=document.getElementById("scene-canvas"),$=document.getElementById("controls"),J=document.getElementById("loading"),Z=document.getElementById("header"),W=SQ(H),Q=nQ(W.scene),Y;try{Y=await k5()}catch(L){J.textContent=`Failed to load trajectory data. ${L}`,J.style.color="#ff4444";return}if(Y.length===0){J.textContent="No trajectory data available from JPL Horizons.",J.style.color="#ff4444";return}let X=sQ(W.scene,Y),K=oQ(Y,$),U=K.getCurrentFractionalIndex(),G=K.getCurrentIndex(),E=X.getInterpolatedPosition(U);Q.spacecraft.position.copy(E),X.setCurrentTimeIndex(G),Q.updatePositions(new Date(K.getCurrentTimestamp()),W.sunLight);let R=X.getVelocityAtIndex(G);if(R.speed>0.01){let L=new S(R.vx,R.vz,-R.vy).normalize();Q.spacecraft.quaternion.setFromUnitVectors(new S(0,1,0),L)}let q=D5(W.camera,Y,Q.moonMesh.position),O=new S(3000,1500,4000);W.camera.position.copy(E).add(O),W.controls.target.copy(E),W.controls.enabled=!1,W.controls.update(),J.style.display="none",Z.style.opacity="0",Z.style.transition="opacity 1.2s ease";let D={active:!0,startTime:-1,duration:5000,startPos:W.camera.position.clone(),startTarget:E.clone(),endPos:q.position,endTarget:q.target,uiRevealed:!1},F=[{element:m9("Earth","label-earth"),getWorldPosition:()=>new S(0,0,0)},{element:m9("Moon","label-moon"),getWorldPosition:()=>Q.moonMesh.position.clone()},{element:m9("Orion","label-spacecraft"),getWorldPosition:()=>Q.spacecraft.position.clone()},{element:m9("Sun","label-sun"),getWorldPosition:()=>Q.sunGroup.position.clone()}];for(let L of F)L.element.style.opacity="0",L.element.style.transition="opacity 0.8s ease";let N=new B9;function I(){let L=N.getDelta()*1000;if(D.active){if(D.startTime<0)D.startTime=performance.now();let A=performance.now()-D.startTime,x=Math.min(A/D.duration,1),p=M5(x);if(W.camera.position.lerpVectors(D.startPos,D.endPos,p),W.controls.target.lerpVectors(D.startTarget,D.endTarget,p),x>0.3&&!D.uiRevealed){D.uiRevealed=!0,Z.style.opacity="1";for(let l of F)l.element.style.opacity="1"}if(x>=1)D.active=!1,W.controls.enabled=!0,$.style.display="flex",$.style.opacity="0",requestAnimationFrame(()=>{$.style.transition="opacity 0.8s ease",$.style.opacity="1"})}K.update(L);let T=K.getCurrentFractionalIndex(),_=K.getCurrentIndex(),w=X.getInterpolatedPosition(T);Q.spacecraft.position.copy(w);let B=X.getVelocityAtIndex(_);if(B.speed>0.01){let A=new S(B.vx,B.vz,-B.vy).normalize(),x=new v8().setFromUnitVectors(new S(0,1,0),A);Q.spacecraft.quaternion.slerp(x,0.1)}X.setCurrentTimeIndex(_);let b=new Date(K.getCurrentTimestamp());Q.updatePositions(b,W.sunLight);let C=w.length(),z=w.distanceTo(Q.moonMesh.position);K.updateInfoPanel({distanceFromEarth:C,distanceFromMoon:z,velocity:B.speed}),Q.earthGroup.rotation.y+=L*0.000005,O5(F,W.camera,H),W.controls.update(),W.renderer.render(W.scene,W.camera)}W.renderer.setAnimationLoop(I)}L5().catch((H)=>{console.error("Initialization failed:",H);let $=document.getElementById("loading");if($)$.textContent=`Error: ${H.message}`,$.style.color="#ff4444"});

//# debugId=766473E44F970C4D64756E2164756E21
//# sourceMappingURL=app.js.map
