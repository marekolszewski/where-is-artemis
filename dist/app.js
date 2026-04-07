var PZ="172",w6={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},B6={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},AZ=0,F$=1,TZ=2;var N$=1,SZ=2,r8=3,M9=0,A8=1,t8=2,P6=0,s9=1,O$=2,q$=3,R$=4,_Z=5,k9=100,jZ=101,fZ=102,xZ=103,hZ=104,yZ=200,vZ=201,bZ=202,gZ=203,pZ=204,uZ=205,lZ=206,mZ=207,dZ=208,cZ=209,nZ=210,sZ=211,iZ=212,oZ=213,aZ=214,l7=0,m7=1,d7=2,i9=3,c7=4,n7=5,s7=6,i7=7,rZ=0,tZ=1,eZ=2,G6=0,JW=1,$W=2,HW=3,o7=4,ZW=5,WW=6,QW=7;var L9=301,g6=302,a7=303,r7=304,o9=306,YW=1000,XW=1001,KW=1002,z9=1003,UW=1004;var a9=1005;var p6=1006,t7=1007;var C9=1008;var A6=1009,GW=1010,EW=1011,r9=1012,D$=1013,V9=1014,T6=1015,t9=1016,M$=1017,k$=1018,I9=1020,FW=35902,NW=1021,OW=1022,e8=1023,qW=1024,RW=1025,e7=1026,e9=1027,DW=1028,L$=1029,MW=1030,z$=1031;var C$=1033,JJ=33776,$J=33777,HJ=33778,ZJ=33779,V$=35840,I$=35841,w$=35842,B$=35843,P$=36196,A$=37492,T$=37496,S$=37808,_$=37809,j$=37810,f$=37811,x$=37812,h$=37813,y$=37814,v$=37815,b$=37816,g$=37817,p$=37818,u$=37819,l$=37820,m$=37821,WJ=36492,d$=36494,c$=36495,kW=36283,n$=36284,s$=36285,i$=36286;var LW=3201;var zW=0,CW=1,u6="",w9="srgb",J7="srgb-linear",o$="linear",W8="srgb";var VW=512,IW=513,wW=514,a$=515,BW=516,PW=517,AW=518,TW=519;var r$="300 es",SW=2000;class E6{addEventListener(J,$){if(this._listeners===void 0)this._listeners={};let H=this._listeners;if(H[J]===void 0)H[J]=[];if(H[J].indexOf($)===-1)H[J].push($)}hasEventListener(J,$){if(this._listeners===void 0)return!1;let H=this._listeners;return H[J]!==void 0&&H[J].indexOf($)!==-1}removeEventListener(J,$){if(this._listeners===void 0)return;let Z=this._listeners[J];if(Z!==void 0){let W=Z.indexOf($);if(W!==-1)Z.splice(W,1)}}dispatchEvent(J){if(this._listeners===void 0)return;let H=this._listeners[J.type];if(H!==void 0){J.target=this;let Z=H.slice(0);for(let W=0,Q=Z.length;W<Q;W++)Z[W].call(this,J);J.target=null}}}var L8=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$Z=1234567,c9=Math.PI/180,R9=180/Math.PI;function B9(){let J=Math.random()*4294967295|0,$=Math.random()*4294967295|0,H=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(L8[J&255]+L8[J>>8&255]+L8[J>>16&255]+L8[J>>24&255]+"-"+L8[$&255]+L8[$>>8&255]+"-"+L8[$>>16&15|64]+L8[$>>24&255]+"-"+L8[H&63|128]+L8[H>>8&255]+"-"+L8[H>>16&255]+L8[H>>24&255]+L8[Z&255]+L8[Z>>8&255]+L8[Z>>16&255]+L8[Z>>24&255]).toLowerCase()}function d0(J,$,H){return Math.max($,Math.min(H,J))}function t$(J,$){return(J%$+$)%$}function rQ(J,$,H,Z,W){return Z+(J-$)*(W-Z)/(H-$)}function tQ(J,$,H){if(J!==$)return(H-J)/($-J);else return 0}function n9(J,$,H){return(1-H)*J+H*$}function eQ(J,$,H,Z){return n9(J,$,1-Math.exp(-H*Z))}function JY(J,$=1){return $-Math.abs(t$(J,$*2)-$)}function $Y(J,$,H){if(J<=$)return 0;if(J>=H)return 1;return J=(J-$)/(H-$),J*J*(3-2*J)}function HY(J,$,H){if(J<=$)return 0;if(J>=H)return 1;return J=(J-$)/(H-$),J*J*J*(J*(J*6-15)+10)}function ZY(J,$){return J+Math.floor(Math.random()*($-J+1))}function WY(J,$){return J+Math.random()*($-J)}function QY(J){return J*(0.5-Math.random())}function YY(J){if(J!==void 0)$Z=J;let $=$Z+=1831565813;return $=Math.imul($^$>>>15,$|1),$^=$+Math.imul($^$>>>7,$|61),(($^$>>>14)>>>0)/4294967296}function XY(J){return J*c9}function KY(J){return J*R9}function UY(J){return(J&J-1)===0&&J!==0}function GY(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function EY(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function FY(J,$,H,Z,W){let{cos:Q,sin:Y}=Math,X=Q(H/2),K=Y(H/2),U=Q(($+Z)/2),E=Y(($+Z)/2),G=Q(($-Z)/2),F=Y(($-Z)/2),q=Q((Z-$)/2),R=Y((Z-$)/2);switch(W){case"XYX":J.set(X*E,K*G,K*F,X*U);break;case"YZY":J.set(K*F,X*E,K*G,X*U);break;case"ZXZ":J.set(K*G,K*F,X*E,X*U);break;case"XZX":J.set(X*E,K*R,K*q,X*U);break;case"YXY":J.set(K*q,X*E,K*R,X*U);break;case"ZYZ":J.set(K*R,K*q,X*E,X*U);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+W)}}function O9(J,$){switch($.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("Invalid component type.")}}function P8(J,$){switch($.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("Invalid component type.")}}var e$={DEG2RAD:c9,RAD2DEG:R9,generateUUID:B9,clamp:d0,euclideanModulo:t$,mapLinear:rQ,inverseLerp:tQ,lerp:n9,damp:eQ,pingpong:JY,smoothstep:$Y,smootherstep:HY,randInt:ZY,randFloat:WY,randFloatSpread:QY,seededRandom:YY,degToRad:XY,radToDeg:KY,isPowerOfTwo:UY,ceilPowerOfTwo:GY,floorPowerOfTwo:EY,setQuaternionFromProperEuler:FY,normalize:P8,denormalize:O9};class S0{constructor(J=0,$=0){S0.prototype.isVector2=!0,this.x=J,this.y=$}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,$){return this.x=J,this.y=$,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,$){switch(J){case 0:this.x=$;break;case 1:this.y=$;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,$){return this.x=J.x+$.x,this.y=J.y+$.y,this}addScaledVector(J,$){return this.x+=J.x*$,this.y+=J.y*$,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,$){return this.x=J.x-$.x,this.y=J.y-$.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let $=this.x,H=this.y,Z=J.elements;return this.x=Z[0]*$+Z[3]*H+Z[6],this.y=Z[1]*$+Z[4]*H+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,$){return this.x=d0(this.x,J.x,$.x),this.y=d0(this.y,J.y,$.y),this}clampScalar(J,$){return this.x=d0(this.x,J,$),this.y=d0(this.y,J,$),this}clampLength(J,$){let H=this.length();return this.divideScalar(H||1).multiplyScalar(d0(H,J,$))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let $=Math.sqrt(this.lengthSq()*J.lengthSq());if($===0)return Math.PI/2;let H=this.dot(J)/$;return Math.acos(d0(H,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let $=this.x-J.x,H=this.y-J.y;return $*$+H*H}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,$){return this.x+=(J.x-this.x)*$,this.y+=(J.y-this.y)*$,this}lerpVectors(J,$,H){return this.x=J.x+($.x-J.x)*H,this.y=J.y+($.y-J.y)*H,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,$=0){return this.x=J[$],this.y=J[$+1],this}toArray(J=[],$=0){return J[$]=this.x,J[$+1]=this.y,J}fromBufferAttribute(J,$){return this.x=J.getX($),this.y=J.getY($),this}rotateAround(J,$){let H=Math.cos($),Z=Math.sin($),W=this.x-J.x,Q=this.y-J.y;return this.x=W*H-Q*Z+J.x,this.y=W*Z+Q*H+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class y0{constructor(J,$,H,Z,W,Q,Y,X,K){if(y0.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,$,H,Z,W,Q,Y,X,K)}set(J,$,H,Z,W,Q,Y,X,K){let U=this.elements;return U[0]=J,U[1]=Z,U[2]=Y,U[3]=$,U[4]=W,U[5]=X,U[6]=H,U[7]=Q,U[8]=K,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let $=this.elements,H=J.elements;return $[0]=H[0],$[1]=H[1],$[2]=H[2],$[3]=H[3],$[4]=H[4],$[5]=H[5],$[6]=H[6],$[7]=H[7],$[8]=H[8],this}extractBasis(J,$,H){return J.setFromMatrix3Column(this,0),$.setFromMatrix3Column(this,1),H.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let $=J.elements;return this.set($[0],$[4],$[8],$[1],$[5],$[9],$[2],$[6],$[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,$){let H=J.elements,Z=$.elements,W=this.elements,Q=H[0],Y=H[3],X=H[6],K=H[1],U=H[4],E=H[7],G=H[2],F=H[5],q=H[8],R=Z[0],M=Z[3],N=Z[6],O=Z[1],w=Z[4],L=Z[7],A=Z[2],_=Z[5],V=Z[8];return W[0]=Q*R+Y*O+X*A,W[3]=Q*M+Y*w+X*_,W[6]=Q*N+Y*L+X*V,W[1]=K*R+U*O+E*A,W[4]=K*M+U*w+E*_,W[7]=K*N+U*L+E*V,W[2]=G*R+F*O+q*A,W[5]=G*M+F*w+q*_,W[8]=G*N+F*L+q*V,this}multiplyScalar(J){let $=this.elements;return $[0]*=J,$[3]*=J,$[6]*=J,$[1]*=J,$[4]*=J,$[7]*=J,$[2]*=J,$[5]*=J,$[8]*=J,this}determinant(){let J=this.elements,$=J[0],H=J[1],Z=J[2],W=J[3],Q=J[4],Y=J[5],X=J[6],K=J[7],U=J[8];return $*Q*U-$*Y*K-H*W*U+H*Y*X+Z*W*K-Z*Q*X}invert(){let J=this.elements,$=J[0],H=J[1],Z=J[2],W=J[3],Q=J[4],Y=J[5],X=J[6],K=J[7],U=J[8],E=U*Q-Y*K,G=Y*X-U*W,F=K*W-Q*X,q=$*E+H*G+Z*F;if(q===0)return this.set(0,0,0,0,0,0,0,0,0);let R=1/q;return J[0]=E*R,J[1]=(Z*K-U*H)*R,J[2]=(Y*H-Z*Q)*R,J[3]=G*R,J[4]=(U*$-Z*X)*R,J[5]=(Z*W-Y*$)*R,J[6]=F*R,J[7]=(H*X-K*$)*R,J[8]=(Q*$-H*W)*R,this}transpose(){let J,$=this.elements;return J=$[1],$[1]=$[3],$[3]=J,J=$[2],$[2]=$[6],$[6]=J,J=$[5],$[5]=$[7],$[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let $=this.elements;return J[0]=$[0],J[1]=$[3],J[2]=$[6],J[3]=$[1],J[4]=$[4],J[5]=$[7],J[6]=$[2],J[7]=$[5],J[8]=$[8],this}setUvTransform(J,$,H,Z,W,Q,Y){let X=Math.cos(W),K=Math.sin(W);return this.set(H*X,H*K,-H*(X*Q+K*Y)+Q+J,-Z*K,Z*X,-Z*(-K*Q+X*Y)+Y+$,0,0,1),this}scale(J,$){return this.premultiply(uJ.makeScale(J,$)),this}rotate(J){return this.premultiply(uJ.makeRotation(-J)),this}translate(J,$){return this.premultiply(uJ.makeTranslation(J,$)),this}makeTranslation(J,$){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,$,0,0,1);return this}makeRotation(J){let $=Math.cos(J),H=Math.sin(J);return this.set($,-H,0,H,$,0,0,0,1),this}makeScale(J,$){return this.set(J,0,0,0,$,0,0,0,1),this}equals(J){let $=this.elements,H=J.elements;for(let Z=0;Z<9;Z++)if($[Z]!==H[Z])return!1;return!0}fromArray(J,$=0){for(let H=0;H<9;H++)this.elements[H]=J[H+$];return this}toArray(J=[],$=0){let H=this.elements;return J[$]=H[0],J[$+1]=H[1],J[$+2]=H[2],J[$+3]=H[3],J[$+4]=H[4],J[$+5]=H[5],J[$+6]=H[6],J[$+7]=H[7],J[$+8]=H[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var uJ=new y0;function JH(J){for(let $=J.length-1;$>=0;--$)if(J[$]>=65535)return!0;return!1}function D9(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function _W(){let J=D9("canvas");return J.style.display="block",J}var HZ={};function l6(J){if(J in HZ)return;HZ[J]=!0,console.warn(J)}function jW(J,$,H){return new Promise(function(Z,W){function Q(){switch(J.clientWaitSync($,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:W();break;case J.TIMEOUT_EXPIRED:setTimeout(Q,H);break;default:Z()}}setTimeout(Q,H)})}function fW(J){let $=J.elements;$[2]=0.5*$[2]+0.5*$[3],$[6]=0.5*$[6]+0.5*$[7],$[10]=0.5*$[10]+0.5*$[11],$[14]=0.5*$[14]+0.5*$[15]}function xW(J){let $=J.elements;if($[11]===-1)$[10]=-$[10]-1,$[14]=-$[14];else $[10]=-$[10],$[14]=-$[14]+1}var ZZ=new y0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),WZ=new y0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function NY(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(W,Q,Y){if(this.enabled===!1||Q===Y||!Q||!Y)return W;if(this.spaces[Q].transfer==="srgb")W.r=U6(W.r),W.g=U6(W.g),W.b=U6(W.b);if(this.spaces[Q].primaries!==this.spaces[Y].primaries)W.applyMatrix3(this.spaces[Q].toXYZ),W.applyMatrix3(this.spaces[Y].fromXYZ);if(this.spaces[Y].transfer==="srgb")W.r=q9(W.r),W.g=q9(W.g),W.b=q9(W.b);return W},fromWorkingColorSpace:function(W,Q){return this.convert(W,this.workingColorSpace,Q)},toWorkingColorSpace:function(W,Q){return this.convert(W,Q,this.workingColorSpace)},getPrimaries:function(W){return this.spaces[W].primaries},getTransfer:function(W){if(W==="")return"linear";return this.spaces[W].transfer},getLuminanceCoefficients:function(W,Q=this.workingColorSpace){return W.fromArray(this.spaces[Q].luminanceCoefficients)},define:function(W){Object.assign(this.spaces,W)},_getMatrix:function(W,Q,Y){return W.copy(this.spaces[Q].toXYZ).multiply(this.spaces[Y].fromXYZ)},_getDrawingBufferColorSpace:function(W){return this.spaces[W].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(W=this.workingColorSpace){return this.spaces[W].workingColorSpaceConfig.unpackColorSpace}},$=[0.64,0.33,0.3,0.6,0.15,0.06],H=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:$,whitePoint:Z,transfer:"linear",toXYZ:ZZ,fromXYZ:WZ,luminanceCoefficients:H,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:$,whitePoint:Z,transfer:"srgb",toXYZ:ZZ,fromXYZ:WZ,luminanceCoefficients:H,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var i0=NY();function U6(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function q9(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var H9;class $H{static getDataURL(J){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(H9===void 0)H9=D9("canvas");H9.width=J.width,H9.height=J.height;let H=H9.getContext("2d");if(J instanceof ImageData)H.putImageData(J,0,0);else H.drawImage(J,0,0,J.width,J.height);$=H9}if($.width>2048||$.height>2048)return console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",J),$.toDataURL("image/jpeg",0.6);else return $.toDataURL("image/png")}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let $=D9("canvas");$.width=J.width,$.height=J.height;let H=$.getContext("2d");H.drawImage(J,0,0,J.width,J.height);let Z=H.getImageData(0,0,J.width,J.height),W=Z.data;for(let Q=0;Q<W.length;Q++)W[Q]=U6(W[Q]/255)*255;return H.putImageData(Z,0,0),$}else if(J.data){let $=J.data.slice(0);for(let H=0;H<$.length;H++)if($ instanceof Uint8Array||$ instanceof Uint8ClampedArray)$[H]=Math.floor(U6($[H]/255)*255);else $[H]=U6($[H]);return{data:$,width:J.width,height:J.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var OY=0;class QJ{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:OY++}),this.uuid=B9(),this.data=J,this.dataReady=!0,this.version=0}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let $=J===void 0||typeof J==="string";if(!$&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let H={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let W;if(Array.isArray(Z)){W=[];for(let Q=0,Y=Z.length;Q<Y;Q++)if(Z[Q].isDataTexture)W.push(lJ(Z[Q].image));else W.push(lJ(Z[Q]))}else W=lJ(Z);H.url=W}if(!$)J.images[this.uuid]=H;return H}}function lJ(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return $H.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}var qY=0;class V8 extends E6{constructor(J=V8.DEFAULT_IMAGE,$=V8.DEFAULT_MAPPING,H=1001,Z=1001,W=1006,Q=1008,Y=1023,X=1009,K=V8.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:qY++}),this.uuid=B9(),this.name="",this.source=new QJ(J),this.mipmaps=[],this.mapping=$,this.channel=0,this.wrapS=H,this.wrapT=Z,this.magFilter=W,this.minFilter=Q,this.anisotropy=K,this.format=Y,this.internalFormat=null,this.type=X,this.offset=new S0(0,0),this.repeat=new S0(1,1),this.center=new S0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new y0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(J=null){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}toJSON(J){let $=J===void 0||typeof J==="string";if(!$&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let H={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)H.userData=this.userData;if(!$)J.textures[this.uuid]=H;return H}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}V8.DEFAULT_IMAGE=null;V8.DEFAULT_MAPPING=300;V8.DEFAULT_ANISOTROPY=1;class $8{constructor(J=0,$=0,H=0,Z=1){$8.prototype.isVector4=!0,this.x=J,this.y=$,this.z=H,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,$,H,Z){return this.x=J,this.y=$,this.z=H,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,$){switch(J){case 0:this.x=$;break;case 1:this.y=$;break;case 2:this.z=$;break;case 3:this.w=$;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,$){return this.x=J.x+$.x,this.y=J.y+$.y,this.z=J.z+$.z,this.w=J.w+$.w,this}addScaledVector(J,$){return this.x+=J.x*$,this.y+=J.y*$,this.z+=J.z*$,this.w+=J.w*$,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,$){return this.x=J.x-$.x,this.y=J.y-$.y,this.z=J.z-$.z,this.w=J.w-$.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let $=this.x,H=this.y,Z=this.z,W=this.w,Q=J.elements;return this.x=Q[0]*$+Q[4]*H+Q[8]*Z+Q[12]*W,this.y=Q[1]*$+Q[5]*H+Q[9]*Z+Q[13]*W,this.z=Q[2]*$+Q[6]*H+Q[10]*Z+Q[14]*W,this.w=Q[3]*$+Q[7]*H+Q[11]*Z+Q[15]*W,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let $=Math.sqrt(1-J.w*J.w);if($<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/$,this.y=J.y/$,this.z=J.z/$;return this}setAxisAngleFromRotationMatrix(J){let $,H,Z,W,Q=0.01,Y=0.1,X=J.elements,K=X[0],U=X[4],E=X[8],G=X[1],F=X[5],q=X[9],R=X[2],M=X[6],N=X[10];if(Math.abs(U-G)<0.01&&Math.abs(E-R)<0.01&&Math.abs(q-M)<0.01){if(Math.abs(U+G)<0.1&&Math.abs(E+R)<0.1&&Math.abs(q+M)<0.1&&Math.abs(K+F+N-3)<0.1)return this.set(1,0,0,0),this;$=Math.PI;let w=(K+1)/2,L=(F+1)/2,A=(N+1)/2,_=(U+G)/4,V=(E+R)/4,P=(q+M)/4;if(w>L&&w>A)if(w<0.01)H=0,Z=0.707106781,W=0.707106781;else H=Math.sqrt(w),Z=_/H,W=V/H;else if(L>A)if(L<0.01)H=0.707106781,Z=0,W=0.707106781;else Z=Math.sqrt(L),H=_/Z,W=P/Z;else if(A<0.01)H=0.707106781,Z=0.707106781,W=0;else W=Math.sqrt(A),H=V/W,Z=P/W;return this.set(H,Z,W,$),this}let O=Math.sqrt((M-q)*(M-q)+(E-R)*(E-R)+(G-U)*(G-U));if(Math.abs(O)<0.001)O=1;return this.x=(M-q)/O,this.y=(E-R)/O,this.z=(G-U)/O,this.w=Math.acos((K+F+N-1)/2),this}setFromMatrixPosition(J){let $=J.elements;return this.x=$[12],this.y=$[13],this.z=$[14],this.w=$[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,$){return this.x=d0(this.x,J.x,$.x),this.y=d0(this.y,J.y,$.y),this.z=d0(this.z,J.z,$.z),this.w=d0(this.w,J.w,$.w),this}clampScalar(J,$){return this.x=d0(this.x,J,$),this.y=d0(this.y,J,$),this.z=d0(this.z,J,$),this.w=d0(this.w,J,$),this}clampLength(J,$){let H=this.length();return this.divideScalar(H||1).multiplyScalar(d0(H,J,$))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,$){return this.x+=(J.x-this.x)*$,this.y+=(J.y-this.y)*$,this.z+=(J.z-this.z)*$,this.w+=(J.w-this.w)*$,this}lerpVectors(J,$,H){return this.x=J.x+($.x-J.x)*H,this.y=J.y+($.y-J.y)*H,this.z=J.z+($.z-J.z)*H,this.w=J.w+($.w-J.w)*H,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,$=0){return this.x=J[$],this.y=J[$+1],this.z=J[$+2],this.w=J[$+3],this}toArray(J=[],$=0){return J[$]=this.x,J[$+1]=this.y,J[$+2]=this.z,J[$+3]=this.w,J}fromBufferAttribute(J,$){return this.x=J.getX($),this.y=J.getY($),this.z=J.getZ($),this.w=J.getW($),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class HH extends E6{constructor(J=1,$=1,H={}){super();this.isRenderTarget=!0,this.width=J,this.height=$,this.depth=1,this.scissor=new $8(0,0,J,$),this.scissorTest=!1,this.viewport=new $8(0,0,J,$);let Z={width:J,height:$,depth:1};H=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},H);let W=new V8(Z,H.mapping,H.wrapS,H.wrapT,H.magFilter,H.minFilter,H.format,H.type,H.anisotropy,H.colorSpace);W.flipY=!1,W.generateMipmaps=H.generateMipmaps,W.internalFormat=H.internalFormat,this.textures=[];let Q=H.count;for(let Y=0;Y<Q;Y++)this.textures[Y]=W.clone(),this.textures[Y].isRenderTargetTexture=!0,this.textures[Y].renderTarget=this;this.depthBuffer=H.depthBuffer,this.stencilBuffer=H.stencilBuffer,this.resolveDepthBuffer=H.resolveDepthBuffer,this.resolveStencilBuffer=H.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=H.depthTexture,this.samples=H.samples}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(J!==null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,$,H=1){if(this.width!==J||this.height!==$||this.depth!==H){this.width=J,this.height=$,this.depth=H;for(let Z=0,W=this.textures.length;Z<W;Z++)this.textures[Z].image.width=J,this.textures[Z].image.height=$,this.textures[Z].image.depth=H;this.dispose()}this.viewport.set(0,0,J,$),this.scissor.set(0,0,J,$)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let H=0,Z=J.textures.length;H<Z;H++)this.textures[H]=J.textures[H].clone(),this.textures[H].isRenderTargetTexture=!0,this.textures[H].renderTarget=this;let $=Object.assign({},J.texture.image);if(this.texture.source=new QJ($),this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class F6 extends HH{constructor(J=1,$=1,H={}){super(J,$,H);this.isWebGLRenderTarget=!0}}class YJ extends V8{constructor(J=null,$=1,H=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:$,height:H,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class ZH extends V8{constructor(J=null,$=1,H=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:$,height:H,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class i8{constructor(J=0,$=0,H=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=$,this._z=H,this._w=Z}static slerpFlat(J,$,H,Z,W,Q,Y){let X=H[Z+0],K=H[Z+1],U=H[Z+2],E=H[Z+3],G=W[Q+0],F=W[Q+1],q=W[Q+2],R=W[Q+3];if(Y===0){J[$+0]=X,J[$+1]=K,J[$+2]=U,J[$+3]=E;return}if(Y===1){J[$+0]=G,J[$+1]=F,J[$+2]=q,J[$+3]=R;return}if(E!==R||X!==G||K!==F||U!==q){let M=1-Y,N=X*G+K*F+U*q+E*R,O=N>=0?1:-1,w=1-N*N;if(w>Number.EPSILON){let A=Math.sqrt(w),_=Math.atan2(A,N*O);M=Math.sin(M*_)/A,Y=Math.sin(Y*_)/A}let L=Y*O;if(X=X*M+G*L,K=K*M+F*L,U=U*M+q*L,E=E*M+R*L,M===1-Y){let A=1/Math.sqrt(X*X+K*K+U*U+E*E);X*=A,K*=A,U*=A,E*=A}}J[$]=X,J[$+1]=K,J[$+2]=U,J[$+3]=E}static multiplyQuaternionsFlat(J,$,H,Z,W,Q){let Y=H[Z],X=H[Z+1],K=H[Z+2],U=H[Z+3],E=W[Q],G=W[Q+1],F=W[Q+2],q=W[Q+3];return J[$]=Y*q+U*E+X*F-K*G,J[$+1]=X*q+U*G+K*E-Y*F,J[$+2]=K*q+U*F+Y*G-X*E,J[$+3]=U*q-Y*E-X*G-K*F,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,$,H,Z){return this._x=J,this._y=$,this._z=H,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,$=!0){let{_x:H,_y:Z,_z:W,_order:Q}=J,Y=Math.cos,X=Math.sin,K=Y(H/2),U=Y(Z/2),E=Y(W/2),G=X(H/2),F=X(Z/2),q=X(W/2);switch(Q){case"XYZ":this._x=G*U*E+K*F*q,this._y=K*F*E-G*U*q,this._z=K*U*q+G*F*E,this._w=K*U*E-G*F*q;break;case"YXZ":this._x=G*U*E+K*F*q,this._y=K*F*E-G*U*q,this._z=K*U*q-G*F*E,this._w=K*U*E+G*F*q;break;case"ZXY":this._x=G*U*E-K*F*q,this._y=K*F*E+G*U*q,this._z=K*U*q+G*F*E,this._w=K*U*E-G*F*q;break;case"ZYX":this._x=G*U*E-K*F*q,this._y=K*F*E+G*U*q,this._z=K*U*q-G*F*E,this._w=K*U*E+G*F*q;break;case"YZX":this._x=G*U*E+K*F*q,this._y=K*F*E+G*U*q,this._z=K*U*q-G*F*E,this._w=K*U*E-G*F*q;break;case"XZY":this._x=G*U*E-K*F*q,this._y=K*F*E-G*U*q,this._z=K*U*q+G*F*E,this._w=K*U*E+G*F*q;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+Q)}if($===!0)this._onChangeCallback();return this}setFromAxisAngle(J,$){let H=$/2,Z=Math.sin(H);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos(H),this._onChangeCallback(),this}setFromRotationMatrix(J){let $=J.elements,H=$[0],Z=$[4],W=$[8],Q=$[1],Y=$[5],X=$[9],K=$[2],U=$[6],E=$[10],G=H+Y+E;if(G>0){let F=0.5/Math.sqrt(G+1);this._w=0.25/F,this._x=(U-X)*F,this._y=(W-K)*F,this._z=(Q-Z)*F}else if(H>Y&&H>E){let F=2*Math.sqrt(1+H-Y-E);this._w=(U-X)/F,this._x=0.25*F,this._y=(Z+Q)/F,this._z=(W+K)/F}else if(Y>E){let F=2*Math.sqrt(1+Y-H-E);this._w=(W-K)/F,this._x=(Z+Q)/F,this._y=0.25*F,this._z=(X+U)/F}else{let F=2*Math.sqrt(1+E-H-Y);this._w=(Q-Z)/F,this._x=(W+K)/F,this._y=(X+U)/F,this._z=0.25*F}return this._onChangeCallback(),this}setFromUnitVectors(J,$){let H=J.dot($)+1;if(H<Number.EPSILON)if(H=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=H;else this._x=0,this._y=-J.z,this._z=J.y,this._w=H;else this._x=J.y*$.z-J.z*$.y,this._y=J.z*$.x-J.x*$.z,this._z=J.x*$.y-J.y*$.x,this._w=H;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(d0(this.dot(J),-1,1)))}rotateTowards(J,$){let H=this.angleTo(J);if(H===0)return this;let Z=Math.min(1,$/H);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,$){let{_x:H,_y:Z,_z:W,_w:Q}=J,Y=$._x,X=$._y,K=$._z,U=$._w;return this._x=H*U+Q*Y+Z*K-W*X,this._y=Z*U+Q*X+W*Y-H*K,this._z=W*U+Q*K+H*X-Z*Y,this._w=Q*U-H*Y-Z*X-W*K,this._onChangeCallback(),this}slerp(J,$){if($===0)return this;if($===1)return this.copy(J);let H=this._x,Z=this._y,W=this._z,Q=this._w,Y=Q*J._w+H*J._x+Z*J._y+W*J._z;if(Y<0)this._w=-J._w,this._x=-J._x,this._y=-J._y,this._z=-J._z,Y=-Y;else this.copy(J);if(Y>=1)return this._w=Q,this._x=H,this._y=Z,this._z=W,this;let X=1-Y*Y;if(X<=Number.EPSILON){let F=1-$;return this._w=F*Q+$*this._w,this._x=F*H+$*this._x,this._y=F*Z+$*this._y,this._z=F*W+$*this._z,this.normalize(),this}let K=Math.sqrt(X),U=Math.atan2(K,Y),E=Math.sin((1-$)*U)/K,G=Math.sin($*U)/K;return this._w=Q*E+this._w*G,this._x=H*E+this._x*G,this._y=Z*E+this._y*G,this._z=W*E+this._z*G,this._onChangeCallback(),this}slerpQuaternions(J,$,H){return this.copy(J).slerp($,H)}random(){let J=2*Math.PI*Math.random(),$=2*Math.PI*Math.random(),H=Math.random(),Z=Math.sqrt(1-H),W=Math.sqrt(H);return this.set(Z*Math.sin(J),Z*Math.cos(J),W*Math.sin($),W*Math.cos($))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,$=0){return this._x=J[$],this._y=J[$+1],this._z=J[$+2],this._w=J[$+3],this._onChangeCallback(),this}toArray(J=[],$=0){return J[$]=this._x,J[$+1]=this._y,J[$+2]=this._z,J[$+3]=this._w,J}fromBufferAttribute(J,$){return this._x=J.getX($),this._y=J.getY($),this._z=J.getZ($),this._w=J.getW($),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(J=0,$=0,H=0){T.prototype.isVector3=!0,this.x=J,this.y=$,this.z=H}set(J,$,H){if(H===void 0)H=this.z;return this.x=J,this.y=$,this.z=H,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,$){switch(J){case 0:this.x=$;break;case 1:this.y=$;break;case 2:this.z=$;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,$){return this.x=J.x+$.x,this.y=J.y+$.y,this.z=J.z+$.z,this}addScaledVector(J,$){return this.x+=J.x*$,this.y+=J.y*$,this.z+=J.z*$,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,$){return this.x=J.x-$.x,this.y=J.y-$.y,this.z=J.z-$.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,$){return this.x=J.x*$.x,this.y=J.y*$.y,this.z=J.z*$.z,this}applyEuler(J){return this.applyQuaternion(QZ.setFromEuler(J))}applyAxisAngle(J,$){return this.applyQuaternion(QZ.setFromAxisAngle(J,$))}applyMatrix3(J){let $=this.x,H=this.y,Z=this.z,W=J.elements;return this.x=W[0]*$+W[3]*H+W[6]*Z,this.y=W[1]*$+W[4]*H+W[7]*Z,this.z=W[2]*$+W[5]*H+W[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let $=this.x,H=this.y,Z=this.z,W=J.elements,Q=1/(W[3]*$+W[7]*H+W[11]*Z+W[15]);return this.x=(W[0]*$+W[4]*H+W[8]*Z+W[12])*Q,this.y=(W[1]*$+W[5]*H+W[9]*Z+W[13])*Q,this.z=(W[2]*$+W[6]*H+W[10]*Z+W[14])*Q,this}applyQuaternion(J){let $=this.x,H=this.y,Z=this.z,W=J.x,Q=J.y,Y=J.z,X=J.w,K=2*(Q*Z-Y*H),U=2*(Y*$-W*Z),E=2*(W*H-Q*$);return this.x=$+X*K+Q*E-Y*U,this.y=H+X*U+Y*K-W*E,this.z=Z+X*E+W*U-Q*K,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let $=this.x,H=this.y,Z=this.z,W=J.elements;return this.x=W[0]*$+W[4]*H+W[8]*Z,this.y=W[1]*$+W[5]*H+W[9]*Z,this.z=W[2]*$+W[6]*H+W[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,$){return this.x=d0(this.x,J.x,$.x),this.y=d0(this.y,J.y,$.y),this.z=d0(this.z,J.z,$.z),this}clampScalar(J,$){return this.x=d0(this.x,J,$),this.y=d0(this.y,J,$),this.z=d0(this.z,J,$),this}clampLength(J,$){let H=this.length();return this.divideScalar(H||1).multiplyScalar(d0(H,J,$))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,$){return this.x+=(J.x-this.x)*$,this.y+=(J.y-this.y)*$,this.z+=(J.z-this.z)*$,this}lerpVectors(J,$,H){return this.x=J.x+($.x-J.x)*H,this.y=J.y+($.y-J.y)*H,this.z=J.z+($.z-J.z)*H,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,$){let{x:H,y:Z,z:W}=J,Q=$.x,Y=$.y,X=$.z;return this.x=Z*X-W*Y,this.y=W*Q-H*X,this.z=H*Y-Z*Q,this}projectOnVector(J){let $=J.lengthSq();if($===0)return this.set(0,0,0);let H=J.dot(this)/$;return this.copy(J).multiplyScalar(H)}projectOnPlane(J){return mJ.copy(this).projectOnVector(J),this.sub(mJ)}reflect(J){return this.sub(mJ.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let $=Math.sqrt(this.lengthSq()*J.lengthSq());if($===0)return Math.PI/2;let H=this.dot(J)/$;return Math.acos(d0(H,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let $=this.x-J.x,H=this.y-J.y,Z=this.z-J.z;return $*$+H*H+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,$,H){let Z=Math.sin($)*J;return this.x=Z*Math.sin(H),this.y=Math.cos($)*J,this.z=Z*Math.cos(H),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,$,H){return this.x=J*Math.sin($),this.y=H,this.z=J*Math.cos($),this}setFromMatrixPosition(J){let $=J.elements;return this.x=$[12],this.y=$[13],this.z=$[14],this}setFromMatrixScale(J){let $=this.setFromMatrixColumn(J,0).length(),H=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=$,this.y=H,this.z=Z,this}setFromMatrixColumn(J,$){return this.fromArray(J.elements,$*4)}setFromMatrix3Column(J,$){return this.fromArray(J.elements,$*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,$=0){return this.x=J[$],this.y=J[$+1],this.z=J[$+2],this}toArray(J=[],$=0){return J[$]=this.x,J[$+1]=this.y,J[$+2]=this.z,J}fromBufferAttribute(J,$){return this.x=J.getX($),this.y=J.getY($),this.z=J.getZ($),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,$=Math.random()*2-1,H=Math.sqrt(1-$*$);return this.x=H*Math.cos(J),this.y=$,this.z=H*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var mJ=new T,QZ=new i8;class N6{constructor(J=new T(1/0,1/0,1/0),$=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=$}set(J,$){return this.min.copy(J),this.max.copy($),this}setFromArray(J){this.makeEmpty();for(let $=0,H=J.length;$<H;$+=3)this.expandByPoint(m8.fromArray(J,$));return this}setFromBufferAttribute(J){this.makeEmpty();for(let $=0,H=J.count;$<H;$++)this.expandByPoint(m8.fromBufferAttribute(J,$));return this}setFromPoints(J){this.makeEmpty();for(let $=0,H=J.length;$<H;$++)this.expandByPoint(J[$]);return this}setFromCenterAndSize(J,$){let H=m8.copy($).multiplyScalar(0.5);return this.min.copy(J).sub(H),this.max.copy(J).add(H),this}setFromObject(J,$=!1){return this.makeEmpty(),this.expandByObject(J,$)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,$=!1){J.updateWorldMatrix(!1,!1);let H=J.geometry;if(H!==void 0){let W=H.getAttribute("position");if($===!0&&W!==void 0&&J.isInstancedMesh!==!0)for(let Q=0,Y=W.count;Q<Y;Q++){if(J.isMesh===!0)J.getVertexPosition(Q,m8);else m8.fromBufferAttribute(W,Q);m8.applyMatrix4(J.matrixWorld),this.expandByPoint(m8)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();M7.copy(J.boundingBox)}else{if(H.boundingBox===null)H.computeBoundingBox();M7.copy(H.boundingBox)}M7.applyMatrix4(J.matrixWorld),this.union(M7)}}let Z=J.children;for(let W=0,Q=Z.length;W<Q;W++)this.expandByObject(Z[W],$);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,$){return $.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,m8),m8.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let $,H;if(J.normal.x>0)$=J.normal.x*this.min.x,H=J.normal.x*this.max.x;else $=J.normal.x*this.max.x,H=J.normal.x*this.min.x;if(J.normal.y>0)$+=J.normal.y*this.min.y,H+=J.normal.y*this.max.y;else $+=J.normal.y*this.max.y,H+=J.normal.y*this.min.y;if(J.normal.z>0)$+=J.normal.z*this.min.z,H+=J.normal.z*this.max.z;else $+=J.normal.z*this.max.z,H+=J.normal.z*this.min.z;return $<=-J.constant&&H>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(g9),k7.subVectors(this.max,g9),Z9.subVectors(J.a,g9),W9.subVectors(J.b,g9),Q9.subVectors(J.c,g9),k6.subVectors(W9,Z9),L6.subVectors(Q9,W9),h6.subVectors(Z9,Q9);let $=[0,-k6.z,k6.y,0,-L6.z,L6.y,0,-h6.z,h6.y,k6.z,0,-k6.x,L6.z,0,-L6.x,h6.z,0,-h6.x,-k6.y,k6.x,0,-L6.y,L6.x,0,-h6.y,h6.x,0];if(!dJ($,Z9,W9,Q9,k7))return!1;if($=[1,0,0,0,1,0,0,0,1],!dJ($,Z9,W9,Q9,k7))return!1;return L7.crossVectors(k6,L6),$=[L7.x,L7.y,L7.z],dJ($,Z9,W9,Q9,k7)}clampPoint(J,$){return $.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,m8).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(m8).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return W6[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),W6[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),W6[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),W6[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),W6[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),W6[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),W6[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),W6[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(W6),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}}var W6=[new T,new T,new T,new T,new T,new T,new T,new T],m8=new T,M7=new N6,Z9=new T,W9=new T,Q9=new T,k6=new T,L6=new T,h6=new T,g9=new T,k7=new T,L7=new T,y6=new T;function dJ(J,$,H,Z,W){for(let Q=0,Y=J.length-3;Q<=Y;Q+=3){y6.fromArray(J,Q);let X=W.x*Math.abs(y6.x)+W.y*Math.abs(y6.y)+W.z*Math.abs(y6.z),K=$.dot(y6),U=H.dot(y6),E=Z.dot(y6);if(Math.max(-Math.max(K,U,E),Math.min(K,U,E))>X)return!1}return!0}var RY=new N6,p9=new T,cJ=new T;class m6{constructor(J=new T,$=-1){this.isSphere=!0,this.center=J,this.radius=$}set(J,$){return this.center.copy(J),this.radius=$,this}setFromPoints(J,$){let H=this.center;if($!==void 0)H.copy($);else RY.setFromPoints(J).getCenter(H);let Z=0;for(let W=0,Q=J.length;W<Q;W++)Z=Math.max(Z,H.distanceToSquared(J[W]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let $=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=$*$}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,$){let H=this.center.distanceToSquared(J);if($.copy(J),H>this.radius*this.radius)$.sub(this.center).normalize(),$.multiplyScalar(this.radius).add(this.center);return $}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;p9.subVectors(J,this.center);let $=p9.lengthSq();if($>this.radius*this.radius){let H=Math.sqrt($),Z=(H-this.radius)*0.5;this.center.addScaledVector(p9,Z/H),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else cJ.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(p9.copy(J.center).add(cJ)),this.expandByPoint(p9.copy(J.center).sub(cJ));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}}var Q6=new T,nJ=new T,z7=new T,z6=new T,sJ=new T,C7=new T,iJ=new T;class d6{constructor(J=new T,$=new T(0,0,-1)){this.origin=J,this.direction=$}set(J,$){return this.origin.copy(J),this.direction.copy($),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,$){return $.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,Q6)),this}closestPointToPoint(J,$){$.subVectors(J,this.origin);let H=$.dot(this.direction);if(H<0)return $.copy(this.origin);return $.copy(this.origin).addScaledVector(this.direction,H)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let $=Q6.subVectors(J,this.origin).dot(this.direction);if($<0)return this.origin.distanceToSquared(J);return Q6.copy(this.origin).addScaledVector(this.direction,$),Q6.distanceToSquared(J)}distanceSqToSegment(J,$,H,Z){nJ.copy(J).add($).multiplyScalar(0.5),z7.copy($).sub(J).normalize(),z6.copy(this.origin).sub(nJ);let W=J.distanceTo($)*0.5,Q=-this.direction.dot(z7),Y=z6.dot(this.direction),X=-z6.dot(z7),K=z6.lengthSq(),U=Math.abs(1-Q*Q),E,G,F,q;if(U>0)if(E=Q*X-Y,G=Q*Y-X,q=W*U,E>=0)if(G>=-q)if(G<=q){let R=1/U;E*=R,G*=R,F=E*(E+Q*G+2*Y)+G*(Q*E+G+2*X)+K}else G=W,E=Math.max(0,-(Q*G+Y)),F=-E*E+G*(G+2*X)+K;else G=-W,E=Math.max(0,-(Q*G+Y)),F=-E*E+G*(G+2*X)+K;else if(G<=-q)E=Math.max(0,-(-Q*W+Y)),G=E>0?-W:Math.min(Math.max(-W,-X),W),F=-E*E+G*(G+2*X)+K;else if(G<=q)E=0,G=Math.min(Math.max(-W,-X),W),F=G*(G+2*X)+K;else E=Math.max(0,-(Q*W+Y)),G=E>0?W:Math.min(Math.max(-W,-X),W),F=-E*E+G*(G+2*X)+K;else G=Q>0?-W:W,E=Math.max(0,-(Q*G+Y)),F=-E*E+G*(G+2*X)+K;if(H)H.copy(this.origin).addScaledVector(this.direction,E);if(Z)Z.copy(nJ).addScaledVector(z7,G);return F}intersectSphere(J,$){Q6.subVectors(J.center,this.origin);let H=Q6.dot(this.direction),Z=Q6.dot(Q6)-H*H,W=J.radius*J.radius;if(Z>W)return null;let Q=Math.sqrt(W-Z),Y=H-Q,X=H+Q;if(X<0)return null;if(Y<0)return this.at(X,$);return this.at(Y,$)}intersectsSphere(J){return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let $=J.normal.dot(this.direction);if($===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let H=-(this.origin.dot(J.normal)+J.constant)/$;return H>=0?H:null}intersectPlane(J,$){let H=this.distanceToPlane(J);if(H===null)return null;return this.at(H,$)}intersectsPlane(J){let $=J.distanceToPoint(this.origin);if($===0)return!0;if(J.normal.dot(this.direction)*$<0)return!0;return!1}intersectBox(J,$){let H,Z,W,Q,Y,X,K=1/this.direction.x,U=1/this.direction.y,E=1/this.direction.z,G=this.origin;if(K>=0)H=(J.min.x-G.x)*K,Z=(J.max.x-G.x)*K;else H=(J.max.x-G.x)*K,Z=(J.min.x-G.x)*K;if(U>=0)W=(J.min.y-G.y)*U,Q=(J.max.y-G.y)*U;else W=(J.max.y-G.y)*U,Q=(J.min.y-G.y)*U;if(H>Q||W>Z)return null;if(W>H||isNaN(H))H=W;if(Q<Z||isNaN(Z))Z=Q;if(E>=0)Y=(J.min.z-G.z)*E,X=(J.max.z-G.z)*E;else Y=(J.max.z-G.z)*E,X=(J.min.z-G.z)*E;if(H>X||Y>Z)return null;if(Y>H||H!==H)H=Y;if(X<Z||Z!==Z)Z=X;if(Z<0)return null;return this.at(H>=0?H:Z,$)}intersectsBox(J){return this.intersectBox(J,Q6)!==null}intersectTriangle(J,$,H,Z,W){sJ.subVectors($,J),C7.subVectors(H,J),iJ.crossVectors(sJ,C7);let Q=this.direction.dot(iJ),Y;if(Q>0){if(Z)return null;Y=1}else if(Q<0)Y=-1,Q=-Q;else return null;z6.subVectors(this.origin,J);let X=Y*this.direction.dot(C7.crossVectors(z6,C7));if(X<0)return null;let K=Y*this.direction.dot(sJ.cross(z6));if(K<0)return null;if(X+K>Q)return null;let U=-Y*z6.dot(iJ);if(U<0)return null;return this.at(U/Q,W)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Z8{constructor(J,$,H,Z,W,Q,Y,X,K,U,E,G,F,q,R,M){if(Z8.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,$,H,Z,W,Q,Y,X,K,U,E,G,F,q,R,M)}set(J,$,H,Z,W,Q,Y,X,K,U,E,G,F,q,R,M){let N=this.elements;return N[0]=J,N[4]=$,N[8]=H,N[12]=Z,N[1]=W,N[5]=Q,N[9]=Y,N[13]=X,N[2]=K,N[6]=U,N[10]=E,N[14]=G,N[3]=F,N[7]=q,N[11]=R,N[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Z8().fromArray(this.elements)}copy(J){let $=this.elements,H=J.elements;return $[0]=H[0],$[1]=H[1],$[2]=H[2],$[3]=H[3],$[4]=H[4],$[5]=H[5],$[6]=H[6],$[7]=H[7],$[8]=H[8],$[9]=H[9],$[10]=H[10],$[11]=H[11],$[12]=H[12],$[13]=H[13],$[14]=H[14],$[15]=H[15],this}copyPosition(J){let $=this.elements,H=J.elements;return $[12]=H[12],$[13]=H[13],$[14]=H[14],this}setFromMatrix3(J){let $=J.elements;return this.set($[0],$[3],$[6],0,$[1],$[4],$[7],0,$[2],$[5],$[8],0,0,0,0,1),this}extractBasis(J,$,H){return J.setFromMatrixColumn(this,0),$.setFromMatrixColumn(this,1),H.setFromMatrixColumn(this,2),this}makeBasis(J,$,H){return this.set(J.x,$.x,H.x,0,J.y,$.y,H.y,0,J.z,$.z,H.z,0,0,0,0,1),this}extractRotation(J){let $=this.elements,H=J.elements,Z=1/Y9.setFromMatrixColumn(J,0).length(),W=1/Y9.setFromMatrixColumn(J,1).length(),Q=1/Y9.setFromMatrixColumn(J,2).length();return $[0]=H[0]*Z,$[1]=H[1]*Z,$[2]=H[2]*Z,$[3]=0,$[4]=H[4]*W,$[5]=H[5]*W,$[6]=H[6]*W,$[7]=0,$[8]=H[8]*Q,$[9]=H[9]*Q,$[10]=H[10]*Q,$[11]=0,$[12]=0,$[13]=0,$[14]=0,$[15]=1,this}makeRotationFromEuler(J){let $=this.elements,H=J.x,Z=J.y,W=J.z,Q=Math.cos(H),Y=Math.sin(H),X=Math.cos(Z),K=Math.sin(Z),U=Math.cos(W),E=Math.sin(W);if(J.order==="XYZ"){let G=Q*U,F=Q*E,q=Y*U,R=Y*E;$[0]=X*U,$[4]=-X*E,$[8]=K,$[1]=F+q*K,$[5]=G-R*K,$[9]=-Y*X,$[2]=R-G*K,$[6]=q+F*K,$[10]=Q*X}else if(J.order==="YXZ"){let G=X*U,F=X*E,q=K*U,R=K*E;$[0]=G+R*Y,$[4]=q*Y-F,$[8]=Q*K,$[1]=Q*E,$[5]=Q*U,$[9]=-Y,$[2]=F*Y-q,$[6]=R+G*Y,$[10]=Q*X}else if(J.order==="ZXY"){let G=X*U,F=X*E,q=K*U,R=K*E;$[0]=G-R*Y,$[4]=-Q*E,$[8]=q+F*Y,$[1]=F+q*Y,$[5]=Q*U,$[9]=R-G*Y,$[2]=-Q*K,$[6]=Y,$[10]=Q*X}else if(J.order==="ZYX"){let G=Q*U,F=Q*E,q=Y*U,R=Y*E;$[0]=X*U,$[4]=q*K-F,$[8]=G*K+R,$[1]=X*E,$[5]=R*K+G,$[9]=F*K-q,$[2]=-K,$[6]=Y*X,$[10]=Q*X}else if(J.order==="YZX"){let G=Q*X,F=Q*K,q=Y*X,R=Y*K;$[0]=X*U,$[4]=R-G*E,$[8]=q*E+F,$[1]=E,$[5]=Q*U,$[9]=-Y*U,$[2]=-K*U,$[6]=F*E+q,$[10]=G-R*E}else if(J.order==="XZY"){let G=Q*X,F=Q*K,q=Y*X,R=Y*K;$[0]=X*U,$[4]=-E,$[8]=K*U,$[1]=G*E+R,$[5]=Q*U,$[9]=F*E-q,$[2]=q*E-F,$[6]=Y*U,$[10]=R*E+G}return $[3]=0,$[7]=0,$[11]=0,$[12]=0,$[13]=0,$[14]=0,$[15]=1,this}makeRotationFromQuaternion(J){return this.compose(DY,J,MY)}lookAt(J,$,H){let Z=this.elements;if(x8.subVectors(J,$),x8.lengthSq()===0)x8.z=1;if(x8.normalize(),C6.crossVectors(H,x8),C6.lengthSq()===0){if(Math.abs(H.z)===1)x8.x+=0.0001;else x8.z+=0.0001;x8.normalize(),C6.crossVectors(H,x8)}return C6.normalize(),V7.crossVectors(x8,C6),Z[0]=C6.x,Z[4]=V7.x,Z[8]=x8.x,Z[1]=C6.y,Z[5]=V7.y,Z[9]=x8.y,Z[2]=C6.z,Z[6]=V7.z,Z[10]=x8.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,$){let H=J.elements,Z=$.elements,W=this.elements,Q=H[0],Y=H[4],X=H[8],K=H[12],U=H[1],E=H[5],G=H[9],F=H[13],q=H[2],R=H[6],M=H[10],N=H[14],O=H[3],w=H[7],L=H[11],A=H[15],_=Z[0],V=Z[4],P=Z[8],u=Z[12],z=Z[1],C=Z[5],f=Z[9],g=Z[13],c=Z[2],m=Z[6],r=Z[10],l=Z[14],t=Z[3],p=Z[7],X0=Z[11],J0=Z[15];return W[0]=Q*_+Y*z+X*c+K*t,W[4]=Q*V+Y*C+X*m+K*p,W[8]=Q*P+Y*f+X*r+K*X0,W[12]=Q*u+Y*g+X*l+K*J0,W[1]=U*_+E*z+G*c+F*t,W[5]=U*V+E*C+G*m+F*p,W[9]=U*P+E*f+G*r+F*X0,W[13]=U*u+E*g+G*l+F*J0,W[2]=q*_+R*z+M*c+N*t,W[6]=q*V+R*C+M*m+N*p,W[10]=q*P+R*f+M*r+N*X0,W[14]=q*u+R*g+M*l+N*J0,W[3]=O*_+w*z+L*c+A*t,W[7]=O*V+w*C+L*m+A*p,W[11]=O*P+w*f+L*r+A*X0,W[15]=O*u+w*g+L*l+A*J0,this}multiplyScalar(J){let $=this.elements;return $[0]*=J,$[4]*=J,$[8]*=J,$[12]*=J,$[1]*=J,$[5]*=J,$[9]*=J,$[13]*=J,$[2]*=J,$[6]*=J,$[10]*=J,$[14]*=J,$[3]*=J,$[7]*=J,$[11]*=J,$[15]*=J,this}determinant(){let J=this.elements,$=J[0],H=J[4],Z=J[8],W=J[12],Q=J[1],Y=J[5],X=J[9],K=J[13],U=J[2],E=J[6],G=J[10],F=J[14],q=J[3],R=J[7],M=J[11],N=J[15];return q*(+W*X*E-Z*K*E-W*Y*G+H*K*G+Z*Y*F-H*X*F)+R*(+$*X*F-$*K*G+W*Q*G-Z*Q*F+Z*K*U-W*X*U)+M*(+$*K*E-$*Y*F-W*Q*E+H*Q*F+W*Y*U-H*K*U)+N*(-Z*Y*U-$*X*E+$*Y*G+Z*Q*E-H*Q*G+H*X*U)}transpose(){let J=this.elements,$;return $=J[1],J[1]=J[4],J[4]=$,$=J[2],J[2]=J[8],J[8]=$,$=J[6],J[6]=J[9],J[9]=$,$=J[3],J[3]=J[12],J[12]=$,$=J[7],J[7]=J[13],J[13]=$,$=J[11],J[11]=J[14],J[14]=$,this}setPosition(J,$,H){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=$,Z[14]=H;return this}invert(){let J=this.elements,$=J[0],H=J[1],Z=J[2],W=J[3],Q=J[4],Y=J[5],X=J[6],K=J[7],U=J[8],E=J[9],G=J[10],F=J[11],q=J[12],R=J[13],M=J[14],N=J[15],O=E*M*K-R*G*K+R*X*F-Y*M*F-E*X*N+Y*G*N,w=q*G*K-U*M*K-q*X*F+Q*M*F+U*X*N-Q*G*N,L=U*R*K-q*E*K+q*Y*F-Q*R*F-U*Y*N+Q*E*N,A=q*E*X-U*R*X-q*Y*G+Q*R*G+U*Y*M-Q*E*M,_=$*O+H*w+Z*L+W*A;if(_===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/_;return J[0]=O*V,J[1]=(R*G*W-E*M*W-R*Z*F+H*M*F+E*Z*N-H*G*N)*V,J[2]=(Y*M*W-R*X*W+R*Z*K-H*M*K-Y*Z*N+H*X*N)*V,J[3]=(E*X*W-Y*G*W-E*Z*K+H*G*K+Y*Z*F-H*X*F)*V,J[4]=w*V,J[5]=(U*M*W-q*G*W+q*Z*F-$*M*F-U*Z*N+$*G*N)*V,J[6]=(q*X*W-Q*M*W-q*Z*K+$*M*K+Q*Z*N-$*X*N)*V,J[7]=(Q*G*W-U*X*W+U*Z*K-$*G*K-Q*Z*F+$*X*F)*V,J[8]=L*V,J[9]=(q*E*W-U*R*W-q*H*F+$*R*F+U*H*N-$*E*N)*V,J[10]=(Q*R*W-q*Y*W+q*H*K-$*R*K-Q*H*N+$*Y*N)*V,J[11]=(U*Y*W-Q*E*W-U*H*K+$*E*K+Q*H*F-$*Y*F)*V,J[12]=A*V,J[13]=(U*R*Z-q*E*Z+q*H*G-$*R*G-U*H*M+$*E*M)*V,J[14]=(q*Y*Z-Q*R*Z-q*H*X+$*R*X+Q*H*M-$*Y*M)*V,J[15]=(Q*E*Z-U*Y*Z+U*H*X-$*E*X-Q*H*G+$*Y*G)*V,this}scale(J){let $=this.elements,H=J.x,Z=J.y,W=J.z;return $[0]*=H,$[4]*=Z,$[8]*=W,$[1]*=H,$[5]*=Z,$[9]*=W,$[2]*=H,$[6]*=Z,$[10]*=W,$[3]*=H,$[7]*=Z,$[11]*=W,this}getMaxScaleOnAxis(){let J=this.elements,$=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],H=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max($,H,Z))}makeTranslation(J,$,H){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,$,0,0,1,H,0,0,0,1);return this}makeRotationX(J){let $=Math.cos(J),H=Math.sin(J);return this.set(1,0,0,0,0,$,-H,0,0,H,$,0,0,0,0,1),this}makeRotationY(J){let $=Math.cos(J),H=Math.sin(J);return this.set($,0,H,0,0,1,0,0,-H,0,$,0,0,0,0,1),this}makeRotationZ(J){let $=Math.cos(J),H=Math.sin(J);return this.set($,-H,0,0,H,$,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,$){let H=Math.cos($),Z=Math.sin($),W=1-H,Q=J.x,Y=J.y,X=J.z,K=W*Q,U=W*Y;return this.set(K*Q+H,K*Y-Z*X,K*X+Z*Y,0,K*Y+Z*X,U*Y+H,U*X-Z*Q,0,K*X-Z*Y,U*X+Z*Q,W*X*X+H,0,0,0,0,1),this}makeScale(J,$,H){return this.set(J,0,0,0,0,$,0,0,0,0,H,0,0,0,0,1),this}makeShear(J,$,H,Z,W,Q){return this.set(1,H,W,0,J,1,Q,0,$,Z,1,0,0,0,0,1),this}compose(J,$,H){let Z=this.elements,W=$._x,Q=$._y,Y=$._z,X=$._w,K=W+W,U=Q+Q,E=Y+Y,G=W*K,F=W*U,q=W*E,R=Q*U,M=Q*E,N=Y*E,O=X*K,w=X*U,L=X*E,A=H.x,_=H.y,V=H.z;return Z[0]=(1-(R+N))*A,Z[1]=(F+L)*A,Z[2]=(q-w)*A,Z[3]=0,Z[4]=(F-L)*_,Z[5]=(1-(G+N))*_,Z[6]=(M+O)*_,Z[7]=0,Z[8]=(q+w)*V,Z[9]=(M-O)*V,Z[10]=(1-(G+R))*V,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,$,H){let Z=this.elements,W=Y9.set(Z[0],Z[1],Z[2]).length(),Q=Y9.set(Z[4],Z[5],Z[6]).length(),Y=Y9.set(Z[8],Z[9],Z[10]).length();if(this.determinant()<0)W=-W;J.x=Z[12],J.y=Z[13],J.z=Z[14],d8.copy(this);let K=1/W,U=1/Q,E=1/Y;return d8.elements[0]*=K,d8.elements[1]*=K,d8.elements[2]*=K,d8.elements[4]*=U,d8.elements[5]*=U,d8.elements[6]*=U,d8.elements[8]*=E,d8.elements[9]*=E,d8.elements[10]*=E,$.setFromRotationMatrix(d8),H.x=W,H.y=Q,H.z=Y,this}makePerspective(J,$,H,Z,W,Q,Y=2000){let X=this.elements,K=2*W/($-J),U=2*W/(H-Z),E=($+J)/($-J),G=(H+Z)/(H-Z),F,q;if(Y===2000)F=-(Q+W)/(Q-W),q=-2*Q*W/(Q-W);else if(Y===2001)F=-Q/(Q-W),q=-Q*W/(Q-W);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+Y);return X[0]=K,X[4]=0,X[8]=E,X[12]=0,X[1]=0,X[5]=U,X[9]=G,X[13]=0,X[2]=0,X[6]=0,X[10]=F,X[14]=q,X[3]=0,X[7]=0,X[11]=-1,X[15]=0,this}makeOrthographic(J,$,H,Z,W,Q,Y=2000){let X=this.elements,K=1/($-J),U=1/(H-Z),E=1/(Q-W),G=($+J)*K,F=(H+Z)*U,q,R;if(Y===2000)q=(Q+W)*E,R=-2*E;else if(Y===2001)q=W*E,R=-1*E;else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+Y);return X[0]=2*K,X[4]=0,X[8]=0,X[12]=-G,X[1]=0,X[5]=2*U,X[9]=0,X[13]=-F,X[2]=0,X[6]=0,X[10]=R,X[14]=-q,X[3]=0,X[7]=0,X[11]=0,X[15]=1,this}equals(J){let $=this.elements,H=J.elements;for(let Z=0;Z<16;Z++)if($[Z]!==H[Z])return!1;return!0}fromArray(J,$=0){for(let H=0;H<16;H++)this.elements[H]=J[H+$];return this}toArray(J=[],$=0){let H=this.elements;return J[$]=H[0],J[$+1]=H[1],J[$+2]=H[2],J[$+3]=H[3],J[$+4]=H[4],J[$+5]=H[5],J[$+6]=H[6],J[$+7]=H[7],J[$+8]=H[8],J[$+9]=H[9],J[$+10]=H[10],J[$+11]=H[11],J[$+12]=H[12],J[$+13]=H[13],J[$+14]=H[14],J[$+15]=H[15],J}}var Y9=new T,d8=new Z8,DY=new T(0,0,0),MY=new T(1,1,1),C6=new T,V7=new T,x8=new T,YZ=new Z8,XZ=new i8;class s8{constructor(J=0,$=0,H=0,Z=s8.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=$,this._z=H,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,$,H,Z=this._order){return this._x=J,this._y=$,this._z=H,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,$=this._order,H=!0){let Z=J.elements,W=Z[0],Q=Z[4],Y=Z[8],X=Z[1],K=Z[5],U=Z[9],E=Z[2],G=Z[6],F=Z[10];switch($){case"XYZ":if(this._y=Math.asin(d0(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,F),this._z=Math.atan2(-Q,W);else this._x=Math.atan2(G,K),this._z=0;break;case"YXZ":if(this._x=Math.asin(-d0(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(Y,F),this._z=Math.atan2(X,K);else this._y=Math.atan2(-E,W),this._z=0;break;case"ZXY":if(this._x=Math.asin(d0(G,-1,1)),Math.abs(G)<0.9999999)this._y=Math.atan2(-E,F),this._z=Math.atan2(-Q,K);else this._y=0,this._z=Math.atan2(X,W);break;case"ZYX":if(this._y=Math.asin(-d0(E,-1,1)),Math.abs(E)<0.9999999)this._x=Math.atan2(G,F),this._z=Math.atan2(X,W);else this._x=0,this._z=Math.atan2(-Q,K);break;case"YZX":if(this._z=Math.asin(d0(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-U,K),this._y=Math.atan2(-E,W);else this._x=0,this._y=Math.atan2(Y,F);break;case"XZY":if(this._z=Math.asin(-d0(Q,-1,1)),Math.abs(Q)<0.9999999)this._x=Math.atan2(G,K),this._y=Math.atan2(Y,W);else this._x=Math.atan2(-U,F),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+$)}if(this._order=$,H===!0)this._onChangeCallback();return this}setFromQuaternion(J,$,H){return YZ.makeRotationFromQuaternion(J),this.setFromRotationMatrix(YZ,$,H)}setFromVector3(J,$=this._order){return this.set(J.x,J.y,J.z,$)}reorder(J){return XZ.setFromEuler(this),this.setFromQuaternion(XZ,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],$=0){return J[$]=this._x,J[$+1]=this._y,J[$+2]=this._z,J[$+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}s8.DEFAULT_ORDER="XYZ";class XJ{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var kY=0,KZ=new T,X9=new i8,Y6=new Z8,I7=new T,u9=new T,LY=new T,zY=new i8,UZ=new T(1,0,0),GZ=new T(0,1,0),EZ=new T(0,0,1),FZ={type:"added"},CY={type:"removed"},K9={type:"childadded",child:null},oJ={type:"childremoved",child:null};class F8 extends E6{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:kY++}),this.uuid=B9(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=F8.DEFAULT_UP.clone();let J=new T,$=new s8,H=new i8,Z=new T(1,1,1);function W(){H.setFromEuler($,!1)}function Q(){$.setFromQuaternion(H,void 0,!1)}$._onChange(W),H._onChange(Q),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:$},quaternion:{configurable:!0,enumerable:!0,value:H},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new Z8},normalMatrix:{value:new y0}}),this.matrix=new Z8,this.matrixWorld=new Z8,this.matrixAutoUpdate=F8.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=F8.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new XJ,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,$){this.quaternion.setFromAxisAngle(J,$)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,$){return X9.setFromAxisAngle(J,$),this.quaternion.multiply(X9),this}rotateOnWorldAxis(J,$){return X9.setFromAxisAngle(J,$),this.quaternion.premultiply(X9),this}rotateX(J){return this.rotateOnAxis(UZ,J)}rotateY(J){return this.rotateOnAxis(GZ,J)}rotateZ(J){return this.rotateOnAxis(EZ,J)}translateOnAxis(J,$){return KZ.copy(J).applyQuaternion(this.quaternion),this.position.add(KZ.multiplyScalar($)),this}translateX(J){return this.translateOnAxis(UZ,J)}translateY(J){return this.translateOnAxis(GZ,J)}translateZ(J){return this.translateOnAxis(EZ,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(Y6.copy(this.matrixWorld).invert())}lookAt(J,$,H){if(J.isVector3)I7.copy(J);else I7.set(J,$,H);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),u9.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)Y6.lookAt(u9,I7,this.up);else Y6.lookAt(I7,u9,this.up);if(this.quaternion.setFromRotationMatrix(Y6),Z)Y6.extractRotation(Z.matrixWorld),X9.setFromRotationMatrix(Y6),this.quaternion.premultiply(X9.invert())}add(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.add(arguments[$]);return this}if(J===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(FZ),K9.child=J,this.dispatchEvent(K9),K9.child=null;else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let H=0;H<arguments.length;H++)this.remove(arguments[H]);return this}let $=this.children.indexOf(J);if($!==-1)J.parent=null,this.children.splice($,1),J.dispatchEvent(CY),oJ.child=J,this.dispatchEvent(oJ),oJ.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),Y6.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),Y6.multiply(J.parent.matrixWorld);return J.applyMatrix4(Y6),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(FZ),K9.child=J,this.dispatchEvent(K9),K9.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,$){if(this[J]===$)return this;for(let H=0,Z=this.children.length;H<Z;H++){let Q=this.children[H].getObjectByProperty(J,$);if(Q!==void 0)return Q}return}getObjectsByProperty(J,$,H=[]){if(this[J]===$)H.push(this);let Z=this.children;for(let W=0,Q=Z.length;W<Q;W++)Z[W].getObjectsByProperty(J,$,H);return H}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(u9,J,LY),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(u9,zY,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let $=this.matrixWorld.elements;return J.set($[8],$[9],$[10]).normalize()}raycast(){}traverse(J){J(this);let $=this.children;for(let H=0,Z=$.length;H<Z;H++)$[H].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let $=this.children;for(let H=0,Z=$.length;H<Z;H++)$[H].traverseVisible(J)}traverseAncestors(J){let $=this.parent;if($!==null)J($),$.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let $=this.children;for(let H=0,Z=$.length;H<Z;H++)$[H].updateMatrixWorld(J)}updateWorldMatrix(J,$){let H=this.parent;if(J===!0&&H!==null)H.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if($===!0){let Z=this.children;for(let W=0,Q=Z.length;W<Q;W++)Z[W].updateWorldMatrix(!1,!0)}}toJSON(J){let $=J===void 0||typeof J==="string",H={};if($)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},H.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,this.name!=="")Z.name=this.name;if(this.castShadow===!0)Z.castShadow=!0;if(this.receiveShadow===!0)Z.receiveShadow=!0;if(this.visible===!1)Z.visible=!1;if(this.frustumCulled===!1)Z.frustumCulled=!1;if(this.renderOrder!==0)Z.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.matrixAutoUpdate===!1)Z.matrixAutoUpdate=!1;if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.visibility=this._visibility,Z.active=this._active,Z.bounds=this._bounds.map((Y)=>({boxInitialized:Y.boxInitialized,boxMin:Y.box.min.toArray(),boxMax:Y.box.max.toArray(),sphereInitialized:Y.sphereInitialized,sphereRadius:Y.sphere.radius,sphereCenter:Y.sphere.center.toArray()})),Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.geometryCount=this._geometryCount,Z.matricesTexture=this._matricesTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere={center:Z.boundingSphere.center.toArray(),radius:Z.boundingSphere.radius};if(this.boundingBox!==null)Z.boundingBox={min:Z.boundingBox.min.toArray(),max:Z.boundingBox.max.toArray()}}function W(Y,X){if(Y[X.uuid]===void 0)Y[X.uuid]=X.toJSON(J);return X.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=W(J.geometries,this.geometry);let Y=this.geometry.parameters;if(Y!==void 0&&Y.shapes!==void 0){let X=Y.shapes;if(Array.isArray(X))for(let K=0,U=X.length;K<U;K++){let E=X[K];W(J.shapes,E)}else W(J.shapes,X)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)W(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let Y=[];for(let X=0,K=this.material.length;X<K;X++)Y.push(W(J.materials,this.material[X]));Z.material=Y}else Z.material=W(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let Y=0;Y<this.children.length;Y++)Z.children.push(this.children[Y].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let Y=0;Y<this.animations.length;Y++){let X=this.animations[Y];Z.animations.push(W(J.animations,X))}}if($){let Y=Q(J.geometries),X=Q(J.materials),K=Q(J.textures),U=Q(J.images),E=Q(J.shapes),G=Q(J.skeletons),F=Q(J.animations),q=Q(J.nodes);if(Y.length>0)H.geometries=Y;if(X.length>0)H.materials=X;if(K.length>0)H.textures=K;if(U.length>0)H.images=U;if(E.length>0)H.shapes=E;if(G.length>0)H.skeletons=G;if(F.length>0)H.animations=F;if(q.length>0)H.nodes=q}return H.object=Z,H;function Q(Y){let X=[];for(let K in Y){let U=Y[K];delete U.metadata,X.push(U)}return X}}clone(J){return new this.constructor().copy(this,J)}copy(J,$=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),$===!0)for(let H=0;H<J.children.length;H++){let Z=J.children[H];this.add(Z.clone())}return this}}F8.DEFAULT_UP=new T(0,1,0);F8.DEFAULT_MATRIX_AUTO_UPDATE=!0;F8.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var c8=new T,X6=new T,aJ=new T,K6=new T,U9=new T,G9=new T,NZ=new T,rJ=new T,tJ=new T,eJ=new T,J$=new $8,$$=new $8,H$=new $8;class g8{constructor(J=new T,$=new T,H=new T){this.a=J,this.b=$,this.c=H}static getNormal(J,$,H,Z){Z.subVectors(H,$),c8.subVectors(J,$),Z.cross(c8);let W=Z.lengthSq();if(W>0)return Z.multiplyScalar(1/Math.sqrt(W));return Z.set(0,0,0)}static getBarycoord(J,$,H,Z,W){c8.subVectors(Z,$),X6.subVectors(H,$),aJ.subVectors(J,$);let Q=c8.dot(c8),Y=c8.dot(X6),X=c8.dot(aJ),K=X6.dot(X6),U=X6.dot(aJ),E=Q*K-Y*Y;if(E===0)return W.set(0,0,0),null;let G=1/E,F=(K*X-Y*U)*G,q=(Q*U-Y*X)*G;return W.set(1-F-q,q,F)}static containsPoint(J,$,H,Z){if(this.getBarycoord(J,$,H,Z,K6)===null)return!1;return K6.x>=0&&K6.y>=0&&K6.x+K6.y<=1}static getInterpolation(J,$,H,Z,W,Q,Y,X){if(this.getBarycoord(J,$,H,Z,K6)===null){if(X.x=0,X.y=0,"z"in X)X.z=0;if("w"in X)X.w=0;return null}return X.setScalar(0),X.addScaledVector(W,K6.x),X.addScaledVector(Q,K6.y),X.addScaledVector(Y,K6.z),X}static getInterpolatedAttribute(J,$,H,Z,W,Q){return J$.setScalar(0),$$.setScalar(0),H$.setScalar(0),J$.fromBufferAttribute(J,$),$$.fromBufferAttribute(J,H),H$.fromBufferAttribute(J,Z),Q.setScalar(0),Q.addScaledVector(J$,W.x),Q.addScaledVector($$,W.y),Q.addScaledVector(H$,W.z),Q}static isFrontFacing(J,$,H,Z){return c8.subVectors(H,$),X6.subVectors(J,$),c8.cross(X6).dot(Z)<0?!0:!1}set(J,$,H){return this.a.copy(J),this.b.copy($),this.c.copy(H),this}setFromPointsAndIndices(J,$,H,Z){return this.a.copy(J[$]),this.b.copy(J[H]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,$,H,Z){return this.a.fromBufferAttribute(J,$),this.b.fromBufferAttribute(J,H),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return c8.subVectors(this.c,this.b),X6.subVectors(this.a,this.b),c8.cross(X6).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return g8.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,$){return g8.getBarycoord(J,this.a,this.b,this.c,$)}getInterpolation(J,$,H,Z,W){return g8.getInterpolation(J,this.a,this.b,this.c,$,H,Z,W)}containsPoint(J){return g8.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return g8.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,$){let H=this.a,Z=this.b,W=this.c,Q,Y;U9.subVectors(Z,H),G9.subVectors(W,H),rJ.subVectors(J,H);let X=U9.dot(rJ),K=G9.dot(rJ);if(X<=0&&K<=0)return $.copy(H);tJ.subVectors(J,Z);let U=U9.dot(tJ),E=G9.dot(tJ);if(U>=0&&E<=U)return $.copy(Z);let G=X*E-U*K;if(G<=0&&X>=0&&U<=0)return Q=X/(X-U),$.copy(H).addScaledVector(U9,Q);eJ.subVectors(J,W);let F=U9.dot(eJ),q=G9.dot(eJ);if(q>=0&&F<=q)return $.copy(W);let R=F*K-X*q;if(R<=0&&K>=0&&q<=0)return Y=K/(K-q),$.copy(H).addScaledVector(G9,Y);let M=U*q-F*E;if(M<=0&&E-U>=0&&F-q>=0)return NZ.subVectors(W,Z),Y=(E-U)/(E-U+(F-q)),$.copy(Z).addScaledVector(NZ,Y);let N=1/(M+R+G);return Q=R*N,Y=G*N,$.copy(H).addScaledVector(U9,Q).addScaledVector(G9,Y)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}var hW={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},V6={h:0,s:0,l:0},w7={h:0,s:0,l:0};function Z$(J,$,H){if(H<0)H+=1;if(H>1)H-=1;if(H<0.16666666666666666)return J+($-J)*6*H;if(H<0.5)return $;if(H<0.6666666666666666)return J+($-J)*6*(0.6666666666666666-H);return J}class x0{constructor(J,$,H){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,$,H)}set(J,$,H){if($===void 0&&H===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,$,H);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,$="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,i0.toWorkingColorSpace(this,$),this}setRGB(J,$,H,Z=i0.workingColorSpace){return this.r=J,this.g=$,this.b=H,i0.toWorkingColorSpace(this,Z),this}setHSL(J,$,H,Z=i0.workingColorSpace){if(J=t$(J,1),$=d0($,0,1),H=d0(H,0,1),$===0)this.r=this.g=this.b=H;else{let W=H<=0.5?H*(1+$):H+$-H*$,Q=2*H-W;this.r=Z$(Q,W,J+0.3333333333333333),this.g=Z$(Q,W,J),this.b=Z$(Q,W,J-0.3333333333333333)}return i0.toWorkingColorSpace(this,Z),this}setStyle(J,$="srgb"){function H(W){if(W===void 0)return;if(parseFloat(W)<1)console.warn("THREE.Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let W,Q=Z[1],Y=Z[2];switch(Q){case"rgb":case"rgba":if(W=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return H(W[4]),this.setRGB(Math.min(255,parseInt(W[1],10))/255,Math.min(255,parseInt(W[2],10))/255,Math.min(255,parseInt(W[3],10))/255,$);if(W=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return H(W[4]),this.setRGB(Math.min(100,parseInt(W[1],10))/100,Math.min(100,parseInt(W[2],10))/100,Math.min(100,parseInt(W[3],10))/100,$);break;case"hsl":case"hsla":if(W=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return H(W[4]),this.setHSL(parseFloat(W[1])/360,parseFloat(W[2])/100,parseFloat(W[3])/100,$);break;default:console.warn("THREE.Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let W=Z[1],Q=W.length;if(Q===3)return this.setRGB(parseInt(W.charAt(0),16)/15,parseInt(W.charAt(1),16)/15,parseInt(W.charAt(2),16)/15,$);else if(Q===6)return this.setHex(parseInt(W,16),$);else console.warn("THREE.Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,$);return this}setColorName(J,$="srgb"){let H=hW[J.toLowerCase()];if(H!==void 0)this.setHex(H,$);else console.warn("THREE.Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=U6(J.r),this.g=U6(J.g),this.b=U6(J.b),this}copyLinearToSRGB(J){return this.r=q9(J.r),this.g=q9(J.g),this.b=q9(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return i0.fromWorkingColorSpace(z8.copy(this),J),Math.round(d0(z8.r*255,0,255))*65536+Math.round(d0(z8.g*255,0,255))*256+Math.round(d0(z8.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,$=i0.workingColorSpace){i0.fromWorkingColorSpace(z8.copy(this),$);let{r:H,g:Z,b:W}=z8,Q=Math.max(H,Z,W),Y=Math.min(H,Z,W),X,K,U=(Y+Q)/2;if(Y===Q)X=0,K=0;else{let E=Q-Y;switch(K=U<=0.5?E/(Q+Y):E/(2-Q-Y),Q){case H:X=(Z-W)/E+(Z<W?6:0);break;case Z:X=(W-H)/E+2;break;case W:X=(H-Z)/E+4;break}X/=6}return J.h=X,J.s=K,J.l=U,J}getRGB(J,$=i0.workingColorSpace){return i0.fromWorkingColorSpace(z8.copy(this),$),J.r=z8.r,J.g=z8.g,J.b=z8.b,J}getStyle(J="srgb"){i0.fromWorkingColorSpace(z8.copy(this),J);let{r:$,g:H,b:Z}=z8;if(J!=="srgb")return`color(${J} ${$.toFixed(3)} ${H.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round($*255)},${Math.round(H*255)},${Math.round(Z*255)})`}offsetHSL(J,$,H){return this.getHSL(V6),this.setHSL(V6.h+J,V6.s+$,V6.l+H)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,$){return this.r=J.r+$.r,this.g=J.g+$.g,this.b=J.b+$.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,$){return this.r+=(J.r-this.r)*$,this.g+=(J.g-this.g)*$,this.b+=(J.b-this.b)*$,this}lerpColors(J,$,H){return this.r=J.r+($.r-J.r)*H,this.g=J.g+($.g-J.g)*H,this.b=J.b+($.b-J.b)*H,this}lerpHSL(J,$){this.getHSL(V6),J.getHSL(w7);let H=n9(V6.h,w7.h,$),Z=n9(V6.s,w7.s,$),W=n9(V6.l,w7.l,$);return this.setHSL(H,Z,W),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let $=this.r,H=this.g,Z=this.b,W=J.elements;return this.r=W[0]*$+W[3]*H+W[6]*Z,this.g=W[1]*$+W[4]*H+W[7]*Z,this.b=W[2]*$+W[5]*H+W[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,$=0){return this.r=J[$],this.g=J[$+1],this.b=J[$+2],this}toArray(J=[],$=0){return J[$]=this.r,J[$+1]=this.g,J[$+2]=this.b,J}fromBufferAttribute(J,$){return this.r=J.getX($),this.g=J.getY($),this.b=J.getZ($),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var z8=new x0;x0.NAMES=hW;var VY=0;class O6 extends E6{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:VY++}),this.uuid=B9(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new x0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let $ in J){let H=J[$];if(H===void 0){console.warn(`THREE.Material: parameter '${$}' has value of undefined.`);continue}let Z=this[$];if(Z===void 0){console.warn(`THREE.Material: '${$}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set(H);else if(Z&&Z.isVector3&&(H&&H.isVector3))Z.copy(H);else this[$]=H}}toJSON(J){let $=J===void 0||typeof J==="string";if($)J={textures:{},images:{}};let H={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};if(H.uuid=this.uuid,H.type=this.type,this.name!=="")H.name=this.name;if(this.color&&this.color.isColor)H.color=this.color.getHex();if(this.roughness!==void 0)H.roughness=this.roughness;if(this.metalness!==void 0)H.metalness=this.metalness;if(this.sheen!==void 0)H.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)H.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)H.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)H.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)H.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)H.specular=this.specular.getHex();if(this.specularIntensity!==void 0)H.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)H.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)H.shininess=this.shininess;if(this.clearcoat!==void 0)H.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)H.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)H.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)H.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)H.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,H.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.dispersion!==void 0)H.dispersion=this.dispersion;if(this.iridescence!==void 0)H.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)H.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)H.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)H.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)H.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)H.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)H.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)H.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)H.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)H.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)H.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)H.lightMap=this.lightMap.toJSON(J).uuid,H.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)H.aoMap=this.aoMap.toJSON(J).uuid,H.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)H.bumpMap=this.bumpMap.toJSON(J).uuid,H.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)H.normalMap=this.normalMap.toJSON(J).uuid,H.normalMapType=this.normalMapType,H.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)H.displacementMap=this.displacementMap.toJSON(J).uuid,H.displacementScale=this.displacementScale,H.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)H.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)H.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)H.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)H.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)H.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)H.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if(H.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)H.combine=this.combine}if(this.envMapRotation!==void 0)H.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)H.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)H.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)H.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)H.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)H.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)H.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)H.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)H.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)H.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)H.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)H.size=this.size;if(this.shadowSide!==null)H.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)H.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)H.blending=this.blending;if(this.side!==0)H.side=this.side;if(this.vertexColors===!0)H.vertexColors=!0;if(this.opacity<1)H.opacity=this.opacity;if(this.transparent===!0)H.transparent=!0;if(this.blendSrc!==204)H.blendSrc=this.blendSrc;if(this.blendDst!==205)H.blendDst=this.blendDst;if(this.blendEquation!==100)H.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)H.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)H.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)H.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)H.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)H.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)H.depthFunc=this.depthFunc;if(this.depthTest===!1)H.depthTest=this.depthTest;if(this.depthWrite===!1)H.depthWrite=this.depthWrite;if(this.colorWrite===!1)H.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)H.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)H.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)H.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)H.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)H.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)H.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)H.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)H.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)H.rotation=this.rotation;if(this.polygonOffset===!0)H.polygonOffset=!0;if(this.polygonOffsetFactor!==0)H.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)H.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)H.linewidth=this.linewidth;if(this.dashSize!==void 0)H.dashSize=this.dashSize;if(this.gapSize!==void 0)H.gapSize=this.gapSize;if(this.scale!==void 0)H.scale=this.scale;if(this.dithering===!0)H.dithering=!0;if(this.alphaTest>0)H.alphaTest=this.alphaTest;if(this.alphaHash===!0)H.alphaHash=!0;if(this.alphaToCoverage===!0)H.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)H.premultipliedAlpha=!0;if(this.forceSinglePass===!0)H.forceSinglePass=!0;if(this.wireframe===!0)H.wireframe=!0;if(this.wireframeLinewidth>1)H.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")H.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")H.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)H.flatShading=!0;if(this.visible===!1)H.visible=!1;if(this.toneMapped===!1)H.toneMapped=!1;if(this.fog===!1)H.fog=!1;if(Object.keys(this.userData).length>0)H.userData=this.userData;function Z(W){let Q=[];for(let Y in W){let X=W[Y];delete X.metadata,Q.push(X)}return Q}if($){let W=Z(J.textures),Q=Z(J.images);if(W.length>0)H.textures=W;if(Q.length>0)H.images=Q}return H}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let $=J.clippingPlanes,H=null;if($!==null){let Z=$.length;H=Array(Z);for(let W=0;W!==Z;++W)H[W]=$[W].clone()}return this.clippingPlanes=H,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class q6 extends O6{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new x0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new s8,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var G8=new T,B7=new S0;class p8{constructor(J,$,H=!1){if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=J,this.itemSize=$,this.count=J!==void 0?J.length/$:0,this.normalized=H,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,$){this.updateRanges.push({start:J,count:$})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,$,H){J*=this.itemSize,H*=$.itemSize;for(let Z=0,W=this.itemSize;Z<W;Z++)this.array[J+Z]=$.array[H+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let $=0,H=this.count;$<H;$++)B7.fromBufferAttribute(this,$),B7.applyMatrix3(J),this.setXY($,B7.x,B7.y);else if(this.itemSize===3)for(let $=0,H=this.count;$<H;$++)G8.fromBufferAttribute(this,$),G8.applyMatrix3(J),this.setXYZ($,G8.x,G8.y,G8.z);return this}applyMatrix4(J){for(let $=0,H=this.count;$<H;$++)G8.fromBufferAttribute(this,$),G8.applyMatrix4(J),this.setXYZ($,G8.x,G8.y,G8.z);return this}applyNormalMatrix(J){for(let $=0,H=this.count;$<H;$++)G8.fromBufferAttribute(this,$),G8.applyNormalMatrix(J),this.setXYZ($,G8.x,G8.y,G8.z);return this}transformDirection(J){for(let $=0,H=this.count;$<H;$++)G8.fromBufferAttribute(this,$),G8.transformDirection(J),this.setXYZ($,G8.x,G8.y,G8.z);return this}set(J,$=0){return this.array.set(J,$),this}getComponent(J,$){let H=this.array[J*this.itemSize+$];if(this.normalized)H=O9(H,this.array);return H}setComponent(J,$,H){if(this.normalized)H=P8(H,this.array);return this.array[J*this.itemSize+$]=H,this}getX(J){let $=this.array[J*this.itemSize];if(this.normalized)$=O9($,this.array);return $}setX(J,$){if(this.normalized)$=P8($,this.array);return this.array[J*this.itemSize]=$,this}getY(J){let $=this.array[J*this.itemSize+1];if(this.normalized)$=O9($,this.array);return $}setY(J,$){if(this.normalized)$=P8($,this.array);return this.array[J*this.itemSize+1]=$,this}getZ(J){let $=this.array[J*this.itemSize+2];if(this.normalized)$=O9($,this.array);return $}setZ(J,$){if(this.normalized)$=P8($,this.array);return this.array[J*this.itemSize+2]=$,this}getW(J){let $=this.array[J*this.itemSize+3];if(this.normalized)$=O9($,this.array);return $}setW(J,$){if(this.normalized)$=P8($,this.array);return this.array[J*this.itemSize+3]=$,this}setXY(J,$,H){if(J*=this.itemSize,this.normalized)$=P8($,this.array),H=P8(H,this.array);return this.array[J+0]=$,this.array[J+1]=H,this}setXYZ(J,$,H,Z){if(J*=this.itemSize,this.normalized)$=P8($,this.array),H=P8(H,this.array),Z=P8(Z,this.array);return this.array[J+0]=$,this.array[J+1]=H,this.array[J+2]=Z,this}setXYZW(J,$,H,Z,W){if(J*=this.itemSize,this.normalized)$=P8($,this.array),H=P8(H,this.array),Z=P8(Z,this.array),W=P8(W,this.array);return this.array[J+0]=$,this.array[J+1]=H,this.array[J+2]=Z,this.array[J+3]=W,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}}class KJ extends p8{constructor(J,$,H){super(new Uint16Array(J),$,H)}}class UJ extends p8{constructor(J,$,H){super(new Uint32Array(J),$,H)}}class N8 extends p8{constructor(J,$,H){super(new Float32Array(J),$,H)}}var IY=0,b8=new Z8,W$=new F8,E9=new T,h8=new N6,l9=new N6,D8=new T;class T8 extends E6{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IY++}),this.uuid=B9(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((JH(J))?UJ:KJ)(J,1);else this.index=J;return this}setIndirect(J){return this.indirect=J,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,$){return this.attributes[J]=$,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,$,H=0){this.groups.push({start:J,count:$,materialIndex:H})}clearGroups(){this.groups=[]}setDrawRange(J,$){this.drawRange.start=J,this.drawRange.count=$}applyMatrix4(J){let $=this.attributes.position;if($!==void 0)$.applyMatrix4(J),$.needsUpdate=!0;let H=this.attributes.normal;if(H!==void 0){let W=new y0().getNormalMatrix(J);H.applyNormalMatrix(W),H.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(J){return b8.makeRotationFromQuaternion(J),this.applyMatrix4(b8),this}rotateX(J){return b8.makeRotationX(J),this.applyMatrix4(b8),this}rotateY(J){return b8.makeRotationY(J),this.applyMatrix4(b8),this}rotateZ(J){return b8.makeRotationZ(J),this.applyMatrix4(b8),this}translate(J,$,H){return b8.makeTranslation(J,$,H),this.applyMatrix4(b8),this}scale(J,$,H){return b8.makeScale(J,$,H),this.applyMatrix4(b8),this}lookAt(J){return W$.lookAt(J),W$.updateMatrix(),this.applyMatrix4(W$.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(E9).negate(),this.translate(E9.x,E9.y,E9.z),this}setFromPoints(J){let $=this.getAttribute("position");if($===void 0){let H=[];for(let Z=0,W=J.length;Z<W;Z++){let Q=J[Z];H.push(Q.x,Q.y,Q.z||0)}this.setAttribute("position",new N8(H,3))}else{let H=Math.min(J.length,$.count);for(let Z=0;Z<H;Z++){let W=J[Z];$.setXYZ(Z,W.x,W.y,W.z||0)}if(J.length>$.count)console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");$.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new N6;let J=this.attributes.position,$=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),$)for(let H=0,Z=$.length;H<Z;H++){let W=$[H];if(h8.setFromBufferAttribute(W),this.morphTargetsRelative)D8.addVectors(this.boundingBox.min,h8.min),this.boundingBox.expandByPoint(D8),D8.addVectors(this.boundingBox.max,h8.max),this.boundingBox.expandByPoint(D8);else this.boundingBox.expandByPoint(h8.min),this.boundingBox.expandByPoint(h8.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new m6;let J=this.attributes.position,$=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(J){let H=this.boundingSphere.center;if(h8.setFromBufferAttribute(J),$)for(let W=0,Q=$.length;W<Q;W++){let Y=$[W];if(l9.setFromBufferAttribute(Y),this.morphTargetsRelative)D8.addVectors(h8.min,l9.min),h8.expandByPoint(D8),D8.addVectors(h8.max,l9.max),h8.expandByPoint(D8);else h8.expandByPoint(l9.min),h8.expandByPoint(l9.max)}h8.getCenter(H);let Z=0;for(let W=0,Q=J.count;W<Q;W++)D8.fromBufferAttribute(J,W),Z=Math.max(Z,H.distanceToSquared(D8));if($)for(let W=0,Q=$.length;W<Q;W++){let Y=$[W],X=this.morphTargetsRelative;for(let K=0,U=Y.count;K<U;K++){if(D8.fromBufferAttribute(Y,K),X)E9.fromBufferAttribute(J,K),D8.add(E9);Z=Math.max(Z,H.distanceToSquared(D8))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,$=this.attributes;if(J===null||$.position===void 0||$.normal===void 0||$.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:H,normal:Z,uv:W}=$;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new p8(new Float32Array(4*H.count),4));let Q=this.getAttribute("tangent"),Y=[],X=[];for(let P=0;P<H.count;P++)Y[P]=new T,X[P]=new T;let K=new T,U=new T,E=new T,G=new S0,F=new S0,q=new S0,R=new T,M=new T;function N(P,u,z){K.fromBufferAttribute(H,P),U.fromBufferAttribute(H,u),E.fromBufferAttribute(H,z),G.fromBufferAttribute(W,P),F.fromBufferAttribute(W,u),q.fromBufferAttribute(W,z),U.sub(K),E.sub(K),F.sub(G),q.sub(G);let C=1/(F.x*q.y-q.x*F.y);if(!isFinite(C))return;R.copy(U).multiplyScalar(q.y).addScaledVector(E,-F.y).multiplyScalar(C),M.copy(E).multiplyScalar(F.x).addScaledVector(U,-q.x).multiplyScalar(C),Y[P].add(R),Y[u].add(R),Y[z].add(R),X[P].add(M),X[u].add(M),X[z].add(M)}let O=this.groups;if(O.length===0)O=[{start:0,count:J.count}];for(let P=0,u=O.length;P<u;++P){let z=O[P],C=z.start,f=z.count;for(let g=C,c=C+f;g<c;g+=3)N(J.getX(g+0),J.getX(g+1),J.getX(g+2))}let w=new T,L=new T,A=new T,_=new T;function V(P){A.fromBufferAttribute(Z,P),_.copy(A);let u=Y[P];w.copy(u),w.sub(A.multiplyScalar(A.dot(u))).normalize(),L.crossVectors(_,u);let C=L.dot(X[P])<0?-1:1;Q.setXYZW(P,w.x,w.y,w.z,C)}for(let P=0,u=O.length;P<u;++P){let z=O[P],C=z.start,f=z.count;for(let g=C,c=C+f;g<c;g+=3)V(J.getX(g+0)),V(J.getX(g+1)),V(J.getX(g+2))}}computeVertexNormals(){let J=this.index,$=this.getAttribute("position");if($!==void 0){let H=this.getAttribute("normal");if(H===void 0)H=new p8(new Float32Array($.count*3),3),this.setAttribute("normal",H);else for(let G=0,F=H.count;G<F;G++)H.setXYZ(G,0,0,0);let Z=new T,W=new T,Q=new T,Y=new T,X=new T,K=new T,U=new T,E=new T;if(J)for(let G=0,F=J.count;G<F;G+=3){let q=J.getX(G+0),R=J.getX(G+1),M=J.getX(G+2);Z.fromBufferAttribute($,q),W.fromBufferAttribute($,R),Q.fromBufferAttribute($,M),U.subVectors(Q,W),E.subVectors(Z,W),U.cross(E),Y.fromBufferAttribute(H,q),X.fromBufferAttribute(H,R),K.fromBufferAttribute(H,M),Y.add(U),X.add(U),K.add(U),H.setXYZ(q,Y.x,Y.y,Y.z),H.setXYZ(R,X.x,X.y,X.z),H.setXYZ(M,K.x,K.y,K.z)}else for(let G=0,F=$.count;G<F;G+=3)Z.fromBufferAttribute($,G+0),W.fromBufferAttribute($,G+1),Q.fromBufferAttribute($,G+2),U.subVectors(Q,W),E.subVectors(Z,W),U.cross(E),H.setXYZ(G+0,U.x,U.y,U.z),H.setXYZ(G+1,U.x,U.y,U.z),H.setXYZ(G+2,U.x,U.y,U.z);this.normalizeNormals(),H.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let $=0,H=J.count;$<H;$++)D8.fromBufferAttribute(J,$),D8.normalize(),J.setXYZ($,D8.x,D8.y,D8.z)}toNonIndexed(){function J(Y,X){let{array:K,itemSize:U,normalized:E}=Y,G=new K.constructor(X.length*U),F=0,q=0;for(let R=0,M=X.length;R<M;R++){if(Y.isInterleavedBufferAttribute)F=X[R]*Y.data.stride+Y.offset;else F=X[R]*U;for(let N=0;N<U;N++)G[q++]=K[F++]}return new p8(G,U,E)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let $=new T8,H=this.index.array,Z=this.attributes;for(let Y in Z){let X=Z[Y],K=J(X,H);$.setAttribute(Y,K)}let W=this.morphAttributes;for(let Y in W){let X=[],K=W[Y];for(let U=0,E=K.length;U<E;U++){let G=K[U],F=J(G,H);X.push(F)}$.morphAttributes[Y]=X}$.morphTargetsRelative=this.morphTargetsRelative;let Q=this.groups;for(let Y=0,X=Q.length;Y<X;Y++){let K=Q[Y];$.addGroup(K.start,K.count,K.materialIndex)}return $}toJSON(){let J={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0){let X=this.parameters;for(let K in X)if(X[K]!==void 0)J[K]=X[K];return J}J.data={attributes:{}};let $=this.index;if($!==null)J.data.index={type:$.array.constructor.name,array:Array.prototype.slice.call($.array)};let H=this.attributes;for(let X in H){let K=H[X];J.data.attributes[X]=K.toJSON(J.data)}let Z={},W=!1;for(let X in this.morphAttributes){let K=this.morphAttributes[X],U=[];for(let E=0,G=K.length;E<G;E++){let F=K[E];U.push(F.toJSON(J.data))}if(U.length>0)Z[X]=U,W=!0}if(W)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let Q=this.groups;if(Q.length>0)J.data.groups=JSON.parse(JSON.stringify(Q));let Y=this.boundingSphere;if(Y!==null)J.data.boundingSphere={center:Y.center.toArray(),radius:Y.radius};return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let $={};this.name=J.name;let H=J.index;if(H!==null)this.setIndex(H.clone($));let Z=J.attributes;for(let K in Z){let U=Z[K];this.setAttribute(K,U.clone($))}let W=J.morphAttributes;for(let K in W){let U=[],E=W[K];for(let G=0,F=E.length;G<F;G++)U.push(E[G].clone($));this.morphAttributes[K]=U}this.morphTargetsRelative=J.morphTargetsRelative;let Q=J.groups;for(let K=0,U=Q.length;K<U;K++){let E=Q[K];this.addGroup(E.start,E.count,E.materialIndex)}let Y=J.boundingBox;if(Y!==null)this.boundingBox=Y.clone();let X=J.boundingSphere;if(X!==null)this.boundingSphere=X.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var OZ=new Z8,v6=new d6,P7=new m6,qZ=new T,A7=new T,T7=new T,S7=new T,Q$=new T,_7=new T,RZ=new T,j7=new T;class E8 extends F8{constructor(J=new T8,$=new q6){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=$,this.updateMorphTargets()}copy(J,$){if(super.copy(J,$),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let $=this.geometry.morphAttributes,H=Object.keys($);if(H.length>0){let Z=$[H[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,Q=Z.length;W<Q;W++){let Y=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=W}}}}getVertexPosition(J,$){let H=this.geometry,Z=H.attributes.position,W=H.morphAttributes.position,Q=H.morphTargetsRelative;$.fromBufferAttribute(Z,J);let Y=this.morphTargetInfluences;if(W&&Y){_7.set(0,0,0);for(let X=0,K=W.length;X<K;X++){let U=Y[X],E=W[X];if(U===0)continue;if(Q$.fromBufferAttribute(E,J),Q)_7.addScaledVector(Q$,U);else _7.addScaledVector(Q$.sub($),U)}$.add(_7)}return $}raycast(J,$){let H=this.geometry,Z=this.material,W=this.matrixWorld;if(Z===void 0)return;if(H.boundingSphere===null)H.computeBoundingSphere();if(P7.copy(H.boundingSphere),P7.applyMatrix4(W),v6.copy(J.ray).recast(J.near),P7.containsPoint(v6.origin)===!1){if(v6.intersectSphere(P7,qZ)===null)return;if(v6.origin.distanceToSquared(qZ)>(J.far-J.near)**2)return}if(OZ.copy(W).invert(),v6.copy(J.ray).applyMatrix4(OZ),H.boundingBox!==null){if(v6.intersectsBox(H.boundingBox)===!1)return}this._computeIntersections(J,$,v6)}_computeIntersections(J,$,H){let Z,W=this.geometry,Q=this.material,Y=W.index,X=W.attributes.position,K=W.attributes.uv,U=W.attributes.uv1,E=W.attributes.normal,G=W.groups,F=W.drawRange;if(Y!==null)if(Array.isArray(Q))for(let q=0,R=G.length;q<R;q++){let M=G[q],N=Q[M.materialIndex],O=Math.max(M.start,F.start),w=Math.min(Y.count,Math.min(M.start+M.count,F.start+F.count));for(let L=O,A=w;L<A;L+=3){let _=Y.getX(L),V=Y.getX(L+1),P=Y.getX(L+2);if(Z=f7(this,N,J,H,K,U,E,_,V,P),Z)Z.faceIndex=Math.floor(L/3),Z.face.materialIndex=M.materialIndex,$.push(Z)}}else{let q=Math.max(0,F.start),R=Math.min(Y.count,F.start+F.count);for(let M=q,N=R;M<N;M+=3){let O=Y.getX(M),w=Y.getX(M+1),L=Y.getX(M+2);if(Z=f7(this,Q,J,H,K,U,E,O,w,L),Z)Z.faceIndex=Math.floor(M/3),$.push(Z)}}else if(X!==void 0)if(Array.isArray(Q))for(let q=0,R=G.length;q<R;q++){let M=G[q],N=Q[M.materialIndex],O=Math.max(M.start,F.start),w=Math.min(X.count,Math.min(M.start+M.count,F.start+F.count));for(let L=O,A=w;L<A;L+=3){let _=L,V=L+1,P=L+2;if(Z=f7(this,N,J,H,K,U,E,_,V,P),Z)Z.faceIndex=Math.floor(L/3),Z.face.materialIndex=M.materialIndex,$.push(Z)}}else{let q=Math.max(0,F.start),R=Math.min(X.count,F.start+F.count);for(let M=q,N=R;M<N;M+=3){let O=M,w=M+1,L=M+2;if(Z=f7(this,Q,J,H,K,U,E,O,w,L),Z)Z.faceIndex=Math.floor(M/3),$.push(Z)}}}}function wY(J,$,H,Z,W,Q,Y,X){let K;if($.side===1)K=Z.intersectTriangle(Y,Q,W,!0,X);else K=Z.intersectTriangle(W,Q,Y,$.side===0,X);if(K===null)return null;j7.copy(X),j7.applyMatrix4(J.matrixWorld);let U=H.ray.origin.distanceTo(j7);if(U<H.near||U>H.far)return null;return{distance:U,point:j7.clone(),object:J}}function f7(J,$,H,Z,W,Q,Y,X,K,U){J.getVertexPosition(X,A7),J.getVertexPosition(K,T7),J.getVertexPosition(U,S7);let E=wY(J,$,H,Z,A7,T7,S7,RZ);if(E){let G=new T;if(g8.getBarycoord(RZ,A7,T7,S7,G),W)E.uv=g8.getInterpolatedAttribute(W,X,K,U,G,new S0);if(Q)E.uv1=g8.getInterpolatedAttribute(Q,X,K,U,G,new S0);if(Y){if(E.normal=g8.getInterpolatedAttribute(Y,X,K,U,G,new T),E.normal.dot(Z.direction)>0)E.normal.multiplyScalar(-1)}let F={a:X,b:K,c:U,normal:new T,materialIndex:0};g8.getNormal(A7,T7,S7,F.normal),E.face=F,E.barycoord=G}return E}class P9 extends T8{constructor(J=1,$=1,H=1,Z=1,W=1,Q=1){super();this.type="BoxGeometry",this.parameters={width:J,height:$,depth:H,widthSegments:Z,heightSegments:W,depthSegments:Q};let Y=this;Z=Math.floor(Z),W=Math.floor(W),Q=Math.floor(Q);let X=[],K=[],U=[],E=[],G=0,F=0;q("z","y","x",-1,-1,H,$,J,Q,W,0),q("z","y","x",1,-1,H,$,-J,Q,W,1),q("x","z","y",1,1,J,H,$,Z,Q,2),q("x","z","y",1,-1,J,H,-$,Z,Q,3),q("x","y","z",1,-1,J,$,H,Z,W,4),q("x","y","z",-1,-1,J,$,-H,Z,W,5),this.setIndex(X),this.setAttribute("position",new N8(K,3)),this.setAttribute("normal",new N8(U,3)),this.setAttribute("uv",new N8(E,2));function q(R,M,N,O,w,L,A,_,V,P,u){let z=L/V,C=A/P,f=L/2,g=A/2,c=_/2,m=V+1,r=P+1,l=0,t=0,p=new T;for(let X0=0;X0<r;X0++){let J0=X0*C-g;for(let w0=0;w0<m;w0++){let g0=w0*z-f;p[R]=g0*O,p[M]=J0*w,p[N]=c,K.push(p.x,p.y,p.z),p[R]=0,p[M]=0,p[N]=_>0?1:-1,U.push(p.x,p.y,p.z),E.push(w0/V),E.push(1-X0/P),l+=1}}for(let X0=0;X0<P;X0++)for(let J0=0;J0<V;J0++){let w0=G+J0+m*X0,g0=G+J0+m*(X0+1),n=G+(J0+1)+m*(X0+1),H0=G+(J0+1)+m*X0;X.push(w0,g0,H0),X.push(g0,n,H0),t+=6}Y.addGroup(F,t,u),F+=t,G+=l}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new P9(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}function c6(J){let $={};for(let H in J){$[H]={};for(let Z in J[H]){let W=J[H][Z];if(W&&(W.isColor||W.isMatrix3||W.isMatrix4||W.isVector2||W.isVector3||W.isVector4||W.isTexture||W.isQuaternion))if(W.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),$[H][Z]=null;else $[H][Z]=W.clone();else if(Array.isArray(W))$[H][Z]=W.slice();else $[H][Z]=W}}return $}function I8(J){let $={};for(let H=0;H<J.length;H++){let Z=c6(J[H]);for(let W in Z)$[W]=Z[W]}return $}function BY(J){let $=[];for(let H=0;H<J.length;H++)$.push(J[H].clone());return $}function WH(J){let $=J.getRenderTarget();if($===null)return J.outputColorSpace;if($.isXRRenderTarget===!0)return $.texture.colorSpace;return i0.workingColorSpace}var yW={clone:c6,merge:I8},PY=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,AY=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class J6 extends O6{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=PY,this.fragmentShader=AY,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=c6(J.uniforms),this.uniformsGroups=BY(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this}toJSON(J){let $=super.toJSON(J);$.glslVersion=this.glslVersion,$.uniforms={};for(let Z in this.uniforms){let Q=this.uniforms[Z].value;if(Q&&Q.isTexture)$.uniforms[Z]={type:"t",value:Q.toJSON(J).uuid};else if(Q&&Q.isColor)$.uniforms[Z]={type:"c",value:Q.getHex()};else if(Q&&Q.isVector2)$.uniforms[Z]={type:"v2",value:Q.toArray()};else if(Q&&Q.isVector3)$.uniforms[Z]={type:"v3",value:Q.toArray()};else if(Q&&Q.isVector4)$.uniforms[Z]={type:"v4",value:Q.toArray()};else if(Q&&Q.isMatrix3)$.uniforms[Z]={type:"m3",value:Q.toArray()};else if(Q&&Q.isMatrix4)$.uniforms[Z]={type:"m4",value:Q.toArray()};else $.uniforms[Z]={value:Q}}if(Object.keys(this.defines).length>0)$.defines=this.defines;$.vertexShader=this.vertexShader,$.fragmentShader=this.fragmentShader,$.lights=this.lights,$.clipping=this.clipping;let H={};for(let Z in this.extensions)if(this.extensions[Z]===!0)H[Z]=!0;if(Object.keys(H).length>0)$.extensions=H;return $}}class GJ extends F8{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Z8,this.projectionMatrix=new Z8,this.projectionMatrixInverse=new Z8,this.coordinateSystem=2000}copy(J,$){return super.copy(J,$),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){super.updateMatrixWorld(J),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(J,$){super.updateWorldMatrix(J,$),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var I6=new T,DZ=new S0,MZ=new S0;class C8 extends GJ{constructor(J=50,$=1,H=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=H,this.far=Z,this.focus=10,this.aspect=$,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,$){return super.copy(J,$),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let $=0.5*this.getFilmHeight()/J;this.fov=R9*2*Math.atan($),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(c9*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return R9*2*Math.atan(Math.tan(c9*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,$,H){I6.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(I6.x,I6.y).multiplyScalar(-J/I6.z),I6.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),H.set(I6.x,I6.y).multiplyScalar(-J/I6.z)}getViewSize(J,$){return this.getViewBounds(J,DZ,MZ),$.subVectors(MZ,DZ)}setViewOffset(J,$,H,Z,W,Q){if(this.aspect=J/$,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=$,this.view.offsetX=H,this.view.offsetY=Z,this.view.width=W,this.view.height=Q,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,$=J*Math.tan(c9*0.5*this.fov)/this.zoom,H=2*$,Z=this.aspect*H,W=-0.5*Z,Q=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:X,fullHeight:K}=Q;W+=Q.offsetX*Z/X,$-=Q.offsetY*H/K,Z*=Q.width/X,H*=Q.height/K}let Y=this.filmOffset;if(Y!==0)W+=J*Y/this.getFilmWidth();this.projectionMatrix.makePerspective(W,W+Z,$,$-H,J,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let $=super.toJSON(J);if($.object.fov=this.fov,$.object.zoom=this.zoom,$.object.near=this.near,$.object.far=this.far,$.object.focus=this.focus,$.object.aspect=this.aspect,this.view!==null)$.object.view=Object.assign({},this.view);return $.object.filmGauge=this.filmGauge,$.object.filmOffset=this.filmOffset,$}}var F9=-90,N9=1;class QH extends F8{constructor(J,$,H){super();this.type="CubeCamera",this.renderTarget=H,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new C8(F9,N9,J,$);Z.layers=this.layers,this.add(Z);let W=new C8(F9,N9,J,$);W.layers=this.layers,this.add(W);let Q=new C8(F9,N9,J,$);Q.layers=this.layers,this.add(Q);let Y=new C8(F9,N9,J,$);Y.layers=this.layers,this.add(Y);let X=new C8(F9,N9,J,$);X.layers=this.layers,this.add(X);let K=new C8(F9,N9,J,$);K.layers=this.layers,this.add(K)}updateCoordinateSystem(){let J=this.coordinateSystem,$=this.children.concat(),[H,Z,W,Q,Y,X]=$;for(let K of $)this.remove(K);if(J===2000)H.up.set(0,1,0),H.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),W.up.set(0,0,-1),W.lookAt(0,1,0),Q.up.set(0,0,1),Q.lookAt(0,-1,0),Y.up.set(0,1,0),Y.lookAt(0,0,1),X.up.set(0,1,0),X.lookAt(0,0,-1);else if(J===2001)H.up.set(0,-1,0),H.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),W.up.set(0,0,1),W.lookAt(0,1,0),Q.up.set(0,0,-1),Q.lookAt(0,-1,0),Y.up.set(0,-1,0),Y.lookAt(0,0,1),X.up.set(0,-1,0),X.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let K of $)this.add(K),K.updateMatrixWorld()}update(J,$){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:H,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[W,Q,Y,X,K,U]=this.children,E=J.getRenderTarget(),G=J.getActiveCubeFace(),F=J.getActiveMipmapLevel(),q=J.xr.enabled;J.xr.enabled=!1;let R=H.texture.generateMipmaps;H.texture.generateMipmaps=!1,J.setRenderTarget(H,0,Z),J.render($,W),J.setRenderTarget(H,1,Z),J.render($,Q),J.setRenderTarget(H,2,Z),J.render($,Y),J.setRenderTarget(H,3,Z),J.render($,X),J.setRenderTarget(H,4,Z),J.render($,K),H.texture.generateMipmaps=R,J.setRenderTarget(H,5,Z),J.render($,U),J.setRenderTarget(E,G,F),J.xr.enabled=q,H.texture.needsPMREMUpdate=!0}}class EJ extends V8{constructor(J,$,H,Z,W,Q,Y,X,K,U){J=J!==void 0?J:[],$=$!==void 0?$:301;super(J,$,H,Z,W,Q,Y,X,K,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class YH extends F6{constructor(J=1,$={}){super(J,J,$);this.isWebGLCubeRenderTarget=!0;let H={width:J,height:J,depth:1},Z=[H,H,H,H,H,H];this.texture=new EJ(Z,$.mapping,$.wrapS,$.wrapT,$.magFilter,$.minFilter,$.format,$.type,$.anisotropy,$.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=$.generateMipmaps!==void 0?$.generateMipmaps:!1,this.texture.minFilter=$.minFilter!==void 0?$.minFilter:1006}fromEquirectangularTexture(J,$){this.texture.type=$.type,this.texture.colorSpace=$.colorSpace,this.texture.generateMipmaps=$.generateMipmaps,this.texture.minFilter=$.minFilter,this.texture.magFilter=$.magFilter;let H={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},Z=new P9(5,5,5),W=new J6({name:"CubemapFromEquirect",uniforms:c6(H.uniforms),vertexShader:H.vertexShader,fragmentShader:H.fragmentShader,side:1,blending:0});W.uniforms.tEquirect.value=$;let Q=new E8(Z,W),Y=$.minFilter;if($.minFilter===1008)$.minFilter=1006;return new QH(1,10,this).update(J,Q),$.minFilter=Y,Q.geometry.dispose(),Q.material.dispose(),this}clear(J,$,H,Z){let W=J.getRenderTarget();for(let Q=0;Q<6;Q++)J.setRenderTarget(this,Q),J.clear($,H,Z);J.setRenderTarget(W)}}class FJ extends F8{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new s8,this.environmentIntensity=1,this.environmentRotation=new s8,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,$){if(super.copy(J,$),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let $=super.toJSON(J);if(this.fog!==null)$.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)$.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)$.object.backgroundIntensity=this.backgroundIntensity;if($.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)$.object.environmentIntensity=this.environmentIntensity;return $.object.environmentRotation=this.environmentRotation.toArray(),$}}var Y$=new T,TY=new T,SY=new y0;class n8{constructor(J=new T(1,0,0),$=0){this.isPlane=!0,this.normal=J,this.constant=$}set(J,$){return this.normal.copy(J),this.constant=$,this}setComponents(J,$,H,Z){return this.normal.set(J,$,H),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,$){return this.normal.copy(J),this.constant=-$.dot(this.normal),this}setFromCoplanarPoints(J,$,H){let Z=Y$.subVectors(H,$).cross(TY.subVectors(J,$)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,$){return $.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,$){let H=J.delta(Y$),Z=this.normal.dot(H);if(Z===0){if(this.distanceToPoint(J.start)===0)return $.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/Z;if(W<0||W>1)return null;return $.copy(J.start).addScaledVector(H,W)}intersectsLine(J){let $=this.distanceToPoint(J.start),H=this.distanceToPoint(J.end);return $<0&&H>0||H<0&&$>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,$){let H=$||SY.getNormalMatrix(J),Z=this.coplanarPoint(Y$).applyMatrix4(J),W=this.normal.applyMatrix3(H).normalize();return this.constant=-Z.dot(W),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var b6=new m6,x7=new T;class $7{constructor(J=new n8,$=new n8,H=new n8,Z=new n8,W=new n8,Q=new n8){this.planes=[J,$,H,Z,W,Q]}set(J,$,H,Z,W,Q){let Y=this.planes;return Y[0].copy(J),Y[1].copy($),Y[2].copy(H),Y[3].copy(Z),Y[4].copy(W),Y[5].copy(Q),this}copy(J){let $=this.planes;for(let H=0;H<6;H++)$[H].copy(J.planes[H]);return this}setFromProjectionMatrix(J,$=2000){let H=this.planes,Z=J.elements,W=Z[0],Q=Z[1],Y=Z[2],X=Z[3],K=Z[4],U=Z[5],E=Z[6],G=Z[7],F=Z[8],q=Z[9],R=Z[10],M=Z[11],N=Z[12],O=Z[13],w=Z[14],L=Z[15];if(H[0].setComponents(X-W,G-K,M-F,L-N).normalize(),H[1].setComponents(X+W,G+K,M+F,L+N).normalize(),H[2].setComponents(X+Q,G+U,M+q,L+O).normalize(),H[3].setComponents(X-Q,G-U,M-q,L-O).normalize(),H[4].setComponents(X-Y,G-E,M-R,L-w).normalize(),$===2000)H[5].setComponents(X+Y,G+E,M+R,L+w).normalize();else if($===2001)H[5].setComponents(Y,E,R,w).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+$);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();b6.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let $=J.geometry;if($.boundingSphere===null)$.computeBoundingSphere();b6.copy($.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(b6)}intersectsSprite(J){return b6.center.set(0,0,0),b6.radius=0.7071067811865476,b6.applyMatrix4(J.matrixWorld),this.intersectsSphere(b6)}intersectsSphere(J){let $=this.planes,H=J.center,Z=-J.radius;for(let W=0;W<6;W++)if($[W].distanceToPoint(H)<Z)return!1;return!0}intersectsBox(J){let $=this.planes;for(let H=0;H<6;H++){let Z=$[H];if(x7.x=Z.normal.x>0?J.max.x:J.min.x,x7.y=Z.normal.y>0?J.max.y:J.min.y,x7.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(x7)<0)return!1}return!0}containsPoint(J){let $=this.planes;for(let H=0;H<6;H++)if($[H].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class H7 extends O6{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new x0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var p7=new T,u7=new T,kZ=new Z8,m9=new d6,h7=new m6,X$=new T,LZ=new T;class NJ extends F8{constructor(J=new T8,$=new H7){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=$,this.updateMorphTargets()}copy(J,$){return super.copy(J,$),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let $=J.attributes.position,H=[0];for(let Z=1,W=$.count;Z<W;Z++)p7.fromBufferAttribute($,Z-1),u7.fromBufferAttribute($,Z),H[Z]=H[Z-1],H[Z]+=p7.distanceTo(u7);J.setAttribute("lineDistance",new N8(H,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(J,$){let H=this.geometry,Z=this.matrixWorld,W=J.params.Line.threshold,Q=H.drawRange;if(H.boundingSphere===null)H.computeBoundingSphere();if(h7.copy(H.boundingSphere),h7.applyMatrix4(Z),h7.radius+=W,J.ray.intersectsSphere(h7)===!1)return;kZ.copy(Z).invert(),m9.copy(J.ray).applyMatrix4(kZ);let Y=W/((this.scale.x+this.scale.y+this.scale.z)/3),X=Y*Y,K=this.isLineSegments?2:1,U=H.index,G=H.attributes.position;if(U!==null){let F=Math.max(0,Q.start),q=Math.min(U.count,Q.start+Q.count);for(let R=F,M=q-1;R<M;R+=K){let N=U.getX(R),O=U.getX(R+1),w=y7(this,J,m9,X,N,O);if(w)$.push(w)}if(this.isLineLoop){let R=U.getX(q-1),M=U.getX(F),N=y7(this,J,m9,X,R,M);if(N)$.push(N)}}else{let F=Math.max(0,Q.start),q=Math.min(G.count,Q.start+Q.count);for(let R=F,M=q-1;R<M;R+=K){let N=y7(this,J,m9,X,R,R+1);if(N)$.push(N)}if(this.isLineLoop){let R=y7(this,J,m9,X,q-1,F);if(R)$.push(R)}}}updateMorphTargets(){let $=this.geometry.morphAttributes,H=Object.keys($);if(H.length>0){let Z=$[H[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,Q=Z.length;W<Q;W++){let Y=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=W}}}}}function y7(J,$,H,Z,W,Q){let Y=J.geometry.attributes.position;if(p7.fromBufferAttribute(Y,W),u7.fromBufferAttribute(Y,Q),H.distanceSqToSegment(p7,u7,X$,LZ)>Z)return;X$.applyMatrix4(J.matrixWorld);let K=$.ray.origin.distanceTo(X$);if(K<$.near||K>$.far)return;return{distance:K,point:LZ.clone().applyMatrix4(J.matrixWorld),index:W,face:null,faceIndex:null,barycoord:null,object:J}}class Z7 extends O6{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new x0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var zZ=new Z8,G$=new d6,v7=new m6,b7=new T;class OJ extends F8{constructor(J=new T8,$=new Z7){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=$,this.updateMorphTargets()}copy(J,$){return super.copy(J,$),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}raycast(J,$){let H=this.geometry,Z=this.matrixWorld,W=J.params.Points.threshold,Q=H.drawRange;if(H.boundingSphere===null)H.computeBoundingSphere();if(v7.copy(H.boundingSphere),v7.applyMatrix4(Z),v7.radius+=W,J.ray.intersectsSphere(v7)===!1)return;zZ.copy(Z).invert(),G$.copy(J.ray).applyMatrix4(zZ);let Y=W/((this.scale.x+this.scale.y+this.scale.z)/3),X=Y*Y,K=H.index,E=H.attributes.position;if(K!==null){let G=Math.max(0,Q.start),F=Math.min(K.count,Q.start+Q.count);for(let q=G,R=F;q<R;q++){let M=K.getX(q);b7.fromBufferAttribute(E,M),CZ(b7,M,X,Z,J,$,this)}}else{let G=Math.max(0,Q.start),F=Math.min(E.count,Q.start+Q.count);for(let q=G,R=F;q<R;q++)b7.fromBufferAttribute(E,q),CZ(b7,q,X,Z,J,$,this)}}updateMorphTargets(){let $=this.geometry.morphAttributes,H=Object.keys($);if(H.length>0){let Z=$[H[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,Q=Z.length;W<Q;W++){let Y=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=W}}}}}function CZ(J,$,H,Z,W,Q,Y){let X=G$.distanceSqToPoint(J);if(X<H){let K=new T;G$.closestPointToPoint(J,K),K.applyMatrix4(Z);let U=W.ray.origin.distanceTo(K);if(U<W.near||U>W.far)return;Q.push({distance:U,distanceToRay:Math.sqrt(X),point:K,index:$,face:null,faceIndex:null,barycoord:null,object:Y})}}class $6 extends F8{constructor(){super();this.isGroup=!0,this.type="Group"}}class qJ extends V8{constructor(J,$,H,Z,W,Q,Y,X,K,U=1026){if(U!==1026&&U!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");if(H===void 0&&U===1026)H=1014;if(H===void 0&&U===1027)H=1020;super(null,Z,W,Q,Y,X,U,H,K);this.isDepthTexture=!0,this.image={width:J,height:$},this.magFilter=Y!==void 0?Y:1003,this.minFilter=X!==void 0?X:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.compareFunction=J.compareFunction,this}toJSON(J){let $=super.toJSON(J);if(this.compareFunction!==null)$.compareFunction=this.compareFunction;return $}}class W7 extends T8{constructor(J=1,$=1,H=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:$,widthSegments:H,heightSegments:Z};let W=J/2,Q=$/2,Y=Math.floor(H),X=Math.floor(Z),K=Y+1,U=X+1,E=J/Y,G=$/X,F=[],q=[],R=[],M=[];for(let N=0;N<U;N++){let O=N*G-Q;for(let w=0;w<K;w++){let L=w*E-W;q.push(L,-O,0),R.push(0,0,1),M.push(w/Y),M.push(1-N/X)}}for(let N=0;N<X;N++)for(let O=0;O<Y;O++){let w=O+K*N,L=O+K*(N+1),A=O+1+K*(N+1),_=O+1+K*N;F.push(w,L,_),F.push(L,A,_)}this.setIndex(F),this.setAttribute("position",new N8(q,3)),this.setAttribute("normal",new N8(R,3)),this.setAttribute("uv",new N8(M,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new W7(J.width,J.height,J.widthSegments,J.heightSegments)}}class u8 extends T8{constructor(J=1,$=32,H=16,Z=0,W=Math.PI*2,Q=0,Y=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:J,widthSegments:$,heightSegments:H,phiStart:Z,phiLength:W,thetaStart:Q,thetaLength:Y},$=Math.max(3,Math.floor($)),H=Math.max(2,Math.floor(H));let X=Math.min(Q+Y,Math.PI),K=0,U=[],E=new T,G=new T,F=[],q=[],R=[],M=[];for(let N=0;N<=H;N++){let O=[],w=N/H,L=0;if(N===0&&Q===0)L=0.5/$;else if(N===H&&X===Math.PI)L=-0.5/$;for(let A=0;A<=$;A++){let _=A/$;E.x=-J*Math.cos(Z+_*W)*Math.sin(Q+w*Y),E.y=J*Math.cos(Q+w*Y),E.z=J*Math.sin(Z+_*W)*Math.sin(Q+w*Y),q.push(E.x,E.y,E.z),G.copy(E).normalize(),R.push(G.x,G.y,G.z),M.push(_+L,1-w),O.push(K++)}U.push(O)}for(let N=0;N<H;N++)for(let O=0;O<$;O++){let w=U[N][O+1],L=U[N][O],A=U[N+1][O],_=U[N+1][O+1];if(N!==0||Q>0)F.push(w,L,_);if(N!==H-1||X<Math.PI)F.push(L,A,_)}this.setIndex(F),this.setAttribute("position",new N8(q,3)),this.setAttribute("normal",new N8(R,3)),this.setAttribute("uv",new N8(M,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new u8(J.radius,J.widthSegments,J.heightSegments,J.phiStart,J.phiLength,J.thetaStart,J.thetaLength)}}class n6 extends O6{constructor(J){super();this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new x0(16777215),this.specular=new x0(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new x0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new S0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new s8,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.specular.copy(J.specular),this.shininess=J.shininess,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class XH extends O6{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class KH extends O6{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function g7(J,$,H){if(!J||!H&&J.constructor===$)return J;if(typeof $.BYTES_PER_ELEMENT==="number")return new $(J);return Array.prototype.slice.call(J)}function _Y(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}class A9{constructor(J,$,H,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new $.constructor(H),this.sampleValues=$,this.valueSize=H,this.settings=null,this.DefaultSettings_={}}evaluate(J){let $=this.parameterPositions,H=this._cachedIndex,Z=$[H],W=$[H-1];H:{J:{let Q;$:{Z:if(!(J<Z)){for(let Y=H+2;;){if(Z===void 0){if(J<W)break Z;return H=$.length,this._cachedIndex=H,this.copySampleValue_(H-1)}if(H===Y)break;if(W=Z,Z=$[++H],J<Z)break J}Q=$.length;break $}if(!(J>=W)){let Y=$[1];if(J<Y)H=2,W=Y;for(let X=H-2;;){if(W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(H===X)break;if(Z=W,W=$[--H-1],J>=W)break J}Q=H,H=0;break $}break H}while(H<Q){let Y=H+Q>>>1;if(J<$[Y])Q=Y;else H=Y+1}if(Z=$[H],W=$[H-1],W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return H=$.length,this._cachedIndex=H,this.copySampleValue_(H-1)}this._cachedIndex=H,this.intervalChanged_(H,W,Z)}return this.interpolate_(H,W,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let $=this.resultBuffer,H=this.sampleValues,Z=this.valueSize,W=J*Z;for(let Q=0;Q!==Z;++Q)$[Q]=H[W+Q];return $}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class UH extends A9{constructor(J,$,H,Z){super(J,$,H,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,$,H){let Z=this.parameterPositions,W=J-2,Q=J+1,Y=Z[W],X=Z[Q];if(Y===void 0)switch(this.getSettings_().endingStart){case 2401:W=J,Y=2*$-H;break;case 2402:W=Z.length-2,Y=$+Z[W]-Z[W+1];break;default:W=J,Y=H}if(X===void 0)switch(this.getSettings_().endingEnd){case 2401:Q=J,X=2*H-$;break;case 2402:Q=1,X=H+Z[1]-Z[0];break;default:Q=J-1,X=$}let K=(H-$)*0.5,U=this.valueSize;this._weightPrev=K/($-Y),this._weightNext=K/(X-H),this._offsetPrev=W*U,this._offsetNext=Q*U}interpolate_(J,$,H,Z){let W=this.resultBuffer,Q=this.sampleValues,Y=this.valueSize,X=J*Y,K=X-Y,U=this._offsetPrev,E=this._offsetNext,G=this._weightPrev,F=this._weightNext,q=(H-$)/(Z-$),R=q*q,M=R*q,N=-G*M+2*G*R-G*q,O=(1+G)*M+(-1.5-2*G)*R+(-0.5+G)*q+1,w=(-1-F)*M+(1.5+F)*R+0.5*q,L=F*M-F*R;for(let A=0;A!==Y;++A)W[A]=N*Q[U+A]+O*Q[K+A]+w*Q[X+A]+L*Q[E+A];return W}}class GH extends A9{constructor(J,$,H,Z){super(J,$,H,Z)}interpolate_(J,$,H,Z){let W=this.resultBuffer,Q=this.sampleValues,Y=this.valueSize,X=J*Y,K=X-Y,U=(H-$)/(Z-$),E=1-U;for(let G=0;G!==Y;++G)W[G]=Q[K+G]*E+Q[X+G]*U;return W}}class EH extends A9{constructor(J,$,H,Z){super(J,$,H,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class o8{constructor(J,$,H,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if($===void 0||$.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=g7($,this.TimeBufferType),this.values=g7(H,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let $=J.constructor,H;if($.toJSON!==this.toJSON)H=$.toJSON(J);else{H={name:J.name,times:g7(J.times,Array),values:g7(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)H.interpolation=Z}return H.type=J.ValueTypeName,H}InterpolantFactoryMethodDiscrete(J){return new EH(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new GH(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new UH(this.times,this.values,this.getValueSize(),J)}setInterpolation(J){let $;switch(J){case 2300:$=this.InterpolantFactoryMethodDiscrete;break;case 2301:$=this.InterpolantFactoryMethodLinear;break;case 2302:$=this.InterpolantFactoryMethodSmooth;break}if($===void 0){let H="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(H);return console.warn("THREE.KeyframeTrack:",H),this}return this.createInterpolant=$,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let $=this.times;for(let H=0,Z=$.length;H!==Z;++H)$[H]+=J}return this}scale(J){if(J!==1){let $=this.times;for(let H=0,Z=$.length;H!==Z;++H)$[H]*=J}return this}trim(J,$){let H=this.times,Z=H.length,W=0,Q=Z-1;while(W!==Z&&H[W]<J)++W;while(Q!==-1&&H[Q]>$)--Q;if(++Q,W!==0||Q!==Z){if(W>=Q)Q=Math.max(Q,1),W=Q-1;let Y=this.getValueSize();this.times=H.slice(W,Q),this.values=this.values.slice(W*Y,Q*Y)}return this}validate(){let J=!0,$=this.getValueSize();if($-Math.floor($)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),J=!1;let H=this.times,Z=this.values,W=H.length;if(W===0)console.error("THREE.KeyframeTrack: Track is empty.",this),J=!1;let Q=null;for(let Y=0;Y!==W;Y++){let X=H[Y];if(typeof X==="number"&&isNaN(X)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,Y,X),J=!1;break}if(Q!==null&&Q>X){console.error("THREE.KeyframeTrack: Out of order keys.",this,Y,X,Q),J=!1;break}Q=X}if(Z!==void 0){if(_Y(Z))for(let Y=0,X=Z.length;Y!==X;++Y){let K=Z[Y];if(isNaN(K)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,Y,K),J=!1;break}}}return J}optimize(){let J=this.times.slice(),$=this.values.slice(),H=this.getValueSize(),Z=this.getInterpolation()===2302,W=J.length-1,Q=1;for(let Y=1;Y<W;++Y){let X=!1,K=J[Y],U=J[Y+1];if(K!==U&&(Y!==1||K!==J[0]))if(!Z){let E=Y*H,G=E-H,F=E+H;for(let q=0;q!==H;++q){let R=$[E+q];if(R!==$[G+q]||R!==$[F+q]){X=!0;break}}}else X=!0;if(X){if(Y!==Q){J[Q]=J[Y];let E=Y*H,G=Q*H;for(let F=0;F!==H;++F)$[G+F]=$[E+F]}++Q}}if(W>0){J[Q]=J[W];for(let Y=W*H,X=Q*H,K=0;K!==H;++K)$[X+K]=$[Y+K];++Q}if(Q!==J.length)this.times=J.slice(0,Q),this.values=$.slice(0,Q*H);else this.times=J,this.values=$;return this}clone(){let J=this.times.slice(),$=this.values.slice(),Z=new this.constructor(this.name,J,$);return Z.createInterpolant=this.createInterpolant,Z}}o8.prototype.TimeBufferType=Float32Array;o8.prototype.ValueBufferType=Float32Array;o8.prototype.DefaultInterpolation=2301;class s6 extends o8{constructor(J,$,H){super(J,$,H)}}s6.prototype.ValueTypeName="bool";s6.prototype.ValueBufferType=Array;s6.prototype.DefaultInterpolation=2300;s6.prototype.InterpolantFactoryMethodLinear=void 0;s6.prototype.InterpolantFactoryMethodSmooth=void 0;class FH extends o8{}FH.prototype.ValueTypeName="color";class NH extends o8{}NH.prototype.ValueTypeName="number";class OH extends A9{constructor(J,$,H,Z){super(J,$,H,Z)}interpolate_(J,$,H,Z){let W=this.resultBuffer,Q=this.sampleValues,Y=this.valueSize,X=(H-$)/(Z-$),K=J*Y;for(let U=K+Y;K!==U;K+=4)i8.slerpFlat(W,0,Q,K-Y,Q,K,X);return W}}class RJ extends o8{InterpolantFactoryMethodLinear(J){return new OH(this.times,this.values,this.getValueSize(),J)}}RJ.prototype.ValueTypeName="quaternion";RJ.prototype.InterpolantFactoryMethodSmooth=void 0;class i6 extends o8{constructor(J,$,H){super(J,$,H)}}i6.prototype.ValueTypeName="string";i6.prototype.ValueBufferType=Array;i6.prototype.DefaultInterpolation=2300;i6.prototype.InterpolantFactoryMethodLinear=void 0;i6.prototype.InterpolantFactoryMethodSmooth=void 0;class qH extends o8{}qH.prototype.ValueTypeName="vector";var E$={enabled:!1,files:{},add:function(J,$){if(this.enabled===!1)return;this.files[J]=$},get:function(J){if(this.enabled===!1)return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};class RH{constructor(J,$,H){let Z=this,W=!1,Q=0,Y=0,X=void 0,K=[];this.onStart=void 0,this.onLoad=J,this.onProgress=$,this.onError=H,this.itemStart=function(U){if(Y++,W===!1){if(Z.onStart!==void 0)Z.onStart(U,Q,Y)}W=!0},this.itemEnd=function(U){if(Q++,Z.onProgress!==void 0)Z.onProgress(U,Q,Y);if(Q===Y){if(W=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(U){if(Z.onError!==void 0)Z.onError(U)},this.resolveURL=function(U){if(X)return X(U);return U},this.setURLModifier=function(U){return X=U,this},this.addHandler=function(U,E){return K.push(U,E),this},this.removeHandler=function(U){let E=K.indexOf(U);if(E!==-1)K.splice(E,2);return this},this.getHandler=function(U){for(let E=0,G=K.length;E<G;E+=2){let F=K[E],q=K[E+1];if(F.global)F.lastIndex=0;if(F.test(U))return q}return null}}}var vW=new RH;class Q7{constructor(J){this.manager=J!==void 0?J:vW,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(J,$){let H=this;return new Promise(function(Z,W){H.load(J,Z,$,W)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}}Q7.DEFAULT_MATERIAL_NAME="__DEFAULT";class DH extends Q7{constructor(J){super(J)}load(J,$,H,Z){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=this,Q=E$.get(J);if(Q!==void 0)return W.manager.itemStart(J),setTimeout(function(){if($)$(Q);W.manager.itemEnd(J)},0),Q;let Y=D9("img");function X(){if(U(),E$.add(J,this),$)$(this);W.manager.itemEnd(J)}function K(E){if(U(),Z)Z(E);W.manager.itemError(J),W.manager.itemEnd(J)}function U(){Y.removeEventListener("load",X,!1),Y.removeEventListener("error",K,!1)}if(Y.addEventListener("load",X,!1),Y.addEventListener("error",K,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)Y.crossOrigin=this.crossOrigin}return W.manager.itemStart(J),Y.src=J,Y}}class DJ extends Q7{constructor(J){super(J)}load(J,$,H,Z){let W=new V8,Q=new DH(this.manager);return Q.setCrossOrigin(this.crossOrigin),Q.setPath(this.path),Q.load(J,function(Y){if(W.image=Y,W.needsUpdate=!0,$!==void 0)$(W)},H,Z),W}}class Y7 extends F8{constructor(J,$=1){super();this.isLight=!0,this.type="Light",this.color=new x0(J),this.intensity=$}dispose(){}copy(J,$){return super.copy(J,$),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let $=super.toJSON(J);if($.object.color=this.color.getHex(),$.object.intensity=this.intensity,this.groundColor!==void 0)$.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)$.object.distance=this.distance;if(this.angle!==void 0)$.object.angle=this.angle;if(this.decay!==void 0)$.object.decay=this.decay;if(this.penumbra!==void 0)$.object.penumbra=this.penumbra;if(this.shadow!==void 0)$.object.shadow=this.shadow.toJSON();if(this.target!==void 0)$.object.target=this.target.uuid;return $}}var K$=new Z8,VZ=new T,IZ=new T;class MH{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new S0(512,512),this.map=null,this.mapPass=null,this.matrix=new Z8,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $7,this._frameExtents=new S0(1,1),this._viewportCount=1,this._viewports=[new $8(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let $=this.camera,H=this.matrix;VZ.setFromMatrixPosition(J.matrixWorld),$.position.copy(VZ),IZ.setFromMatrixPosition(J.target.matrixWorld),$.lookAt(IZ),$.updateMatrixWorld(),K$.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),this._frustum.setFromProjectionMatrix(K$),H.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),H.multiply(K$)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.mapSize.copy(J.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.intensity!==1)J.intensity=this.intensity;if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var wZ=new Z8,d9=new T,U$=new T;class bW extends MH{constructor(){super(new C8(90,1,0.5,500));this.isPointLightShadow=!0,this._frameExtents=new S0(4,2),this._viewportCount=6,this._viewports=[new $8(2,1,1,1),new $8(0,1,1,1),new $8(3,1,1,1),new $8(1,1,1,1),new $8(3,0,1,1),new $8(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(J,$=0){let H=this.camera,Z=this.matrix,W=J.distance||H.far;if(W!==H.far)H.far=W,H.updateProjectionMatrix();d9.setFromMatrixPosition(J.matrixWorld),H.position.copy(d9),U$.copy(H.position),U$.add(this._cubeDirections[$]),H.up.copy(this._cubeUps[$]),H.lookAt(U$),H.updateMatrixWorld(),Z.makeTranslation(-d9.x,-d9.y,-d9.z),wZ.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wZ)}}class X7 extends Y7{constructor(J,$,H=0,Z=2){super(J,$);this.isPointLight=!0,this.type="PointLight",this.distance=H,this.decay=Z,this.shadow=new bW}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(J,$){return super.copy(J,$),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}}class MJ extends GJ{constructor(J=-1,$=1,H=1,Z=-1,W=0.1,Q=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=$,this.top=H,this.bottom=Z,this.near=W,this.far=Q,this.updateProjectionMatrix()}copy(J,$){return super.copy(J,$),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,$,H,Z,W,Q){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=$,this.view.offsetX=H,this.view.offsetY=Z,this.view.width=W,this.view.height=Q,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),$=(this.top-this.bottom)/(2*this.zoom),H=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,W=H-J,Q=H+J,Y=Z+$,X=Z-$;if(this.view!==null&&this.view.enabled){let K=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;W+=K*this.view.offsetX,Q=W+K*this.view.width,Y-=U*this.view.offsetY,X=Y-U*this.view.height}this.projectionMatrix.makeOrthographic(W,Q,Y,X,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let $=super.toJSON(J);if($.object.zoom=this.zoom,$.object.left=this.left,$.object.right=this.right,$.object.top=this.top,$.object.bottom=this.bottom,$.object.near=this.near,$.object.far=this.far,this.view!==null)$.object.view=Object.assign({},this.view);return $}}class gW extends MH{constructor(){super(new MJ(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class kJ extends Y7{constructor(J,$){super(J,$);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(F8.DEFAULT_UP),this.updateMatrix(),this.target=new F8,this.shadow=new gW}dispose(){this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}}class LJ extends Y7{constructor(J,$){super(J,$);this.isAmbientLight=!0,this.type="AmbientLight"}}class kH extends C8{constructor(J=[]){super();this.isArrayCamera=!0,this.cameras=J}}class zJ{constructor(J=!0){this.autoStart=J,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=BZ(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let J=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let $=BZ();J=($-this.oldTime)/1000,this.oldTime=$,this.elapsedTime+=J}return J}}function BZ(){return performance.now()}var LH="\\[\\]\\.:\\/",jY=new RegExp("["+LH+"]","g"),zH="[^"+LH+"]",fY="[^"+LH.replace("\\.","")+"]",xY=/((?:WC+[\/:])*)/.source.replace("WC",zH),hY=/(WCOD+)?/.source.replace("WCOD",fY),yY=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zH),vY=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zH),bY=new RegExp("^"+xY+hY+yY+vY+"$"),gY=["material","materials","bones","map"];class pW{constructor(J,$,H){let Z=H||J8.parseTrackName($);this._targetGroup=J,this._bindings=J.subscribe_($,Z)}getValue(J,$){this.bind();let H=this._targetGroup.nCachedObjects_,Z=this._bindings[H];if(Z!==void 0)Z.getValue(J,$)}setValue(J,$){let H=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,W=H.length;Z!==W;++Z)H[Z].setValue(J,$)}bind(){let J=this._bindings;for(let $=this._targetGroup.nCachedObjects_,H=J.length;$!==H;++$)J[$].bind()}unbind(){let J=this._bindings;for(let $=this._targetGroup.nCachedObjects_,H=J.length;$!==H;++$)J[$].unbind()}}class J8{constructor(J,$,H){this.path=$,this.parsedPath=H||J8.parseTrackName($),this.node=J8.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,$,H){if(!(J&&J.isAnimationObjectGroup))return new J8(J,$,H);else return new J8.Composite(J,$,H)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(jY,"")}static parseTrackName(J){let $=bY.exec(J);if($===null)throw Error("PropertyBinding: Cannot parse trackName: "+J);let H={nodeName:$[2],objectName:$[3],objectIndex:$[4],propertyName:$[5],propertyIndex:$[6]},Z=H.nodeName&&H.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let W=H.nodeName.substring(Z+1);if(gY.indexOf(W)!==-1)H.nodeName=H.nodeName.substring(0,Z),H.objectName=W}if(H.propertyName===null||H.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+J);return H}static findNode(J,$){if($===void 0||$===""||$==="."||$===-1||$===J.name||$===J.uuid)return J;if(J.skeleton){let H=J.skeleton.getBoneByName($);if(H!==void 0)return H}if(J.children){let H=function(W){for(let Q=0;Q<W.length;Q++){let Y=W[Q];if(Y.name===$||Y.uuid===$)return Y;let X=H(Y.children);if(X)return X}return null},Z=H(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,$){J[$]=this.targetObject[this.propertyName]}_getValue_array(J,$){let H=this.resolvedProperty;for(let Z=0,W=H.length;Z!==W;++Z)J[$++]=H[Z]}_getValue_arrayElement(J,$){J[$]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,$){this.resolvedProperty.toArray(J,$)}_setValue_direct(J,$){this.targetObject[this.propertyName]=J[$]}_setValue_direct_setNeedsUpdate(J,$){this.targetObject[this.propertyName]=J[$],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,$){this.targetObject[this.propertyName]=J[$],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,$){let H=this.resolvedProperty;for(let Z=0,W=H.length;Z!==W;++Z)H[Z]=J[$++]}_setValue_array_setNeedsUpdate(J,$){let H=this.resolvedProperty;for(let Z=0,W=H.length;Z!==W;++Z)H[Z]=J[$++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,$){let H=this.resolvedProperty;for(let Z=0,W=H.length;Z!==W;++Z)H[Z]=J[$++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,$){this.resolvedProperty[this.propertyIndex]=J[$]}_setValue_arrayElement_setNeedsUpdate(J,$){this.resolvedProperty[this.propertyIndex]=J[$],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,$){this.resolvedProperty[this.propertyIndex]=J[$],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,$){this.resolvedProperty.fromArray(J,$)}_setValue_fromArray_setNeedsUpdate(J,$){this.resolvedProperty.fromArray(J,$),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,$){this.resolvedProperty.fromArray(J,$),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,$){this.bind(),this.getValue(J,$)}_setValue_unbound(J,$){this.bind(),this.setValue(J,$)}bind(){let J=this.node,$=this.parsedPath,H=$.objectName,Z=$.propertyName,W=$.propertyIndex;if(!J)J=J8.findNode(this.rootNode,$.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(H){let K=$.objectIndex;switch(H){case"materials":if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===K){K=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[H]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[H]}if(K!==void 0){if(J[K]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[K]}}let Q=J[Z];if(Q===void 0){let K=$.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+K+"."+Z+" but it wasn't found.",J);return}let Y=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)Y=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)Y=this.Versioning.MatrixWorldNeedsUpdate;let X=this.BindingType.Direct;if(W!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[W]!==void 0)W=J.morphTargetDictionary[W]}X=this.BindingType.ArrayElement,this.resolvedProperty=Q,this.propertyIndex=W}else if(Q.fromArray!==void 0&&Q.toArray!==void 0)X=this.BindingType.HasFromToArray,this.resolvedProperty=Q;else if(Array.isArray(Q))X=this.BindingType.EntireArray,this.resolvedProperty=Q;else this.propertyName=Z;this.getValue=this.GetterByBindingType[X],this.setValue=this.SetterByBindingTypeAndVersioning[X][Y]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}J8.Composite=pW;J8.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};J8.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};J8.prototype.GetterByBindingType=[J8.prototype._getValue_direct,J8.prototype._getValue_array,J8.prototype._getValue_arrayElement,J8.prototype._getValue_toArray];J8.prototype.SetterByBindingTypeAndVersioning=[[J8.prototype._setValue_direct,J8.prototype._setValue_direct_setNeedsUpdate,J8.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[J8.prototype._setValue_array,J8.prototype._setValue_array_setNeedsUpdate,J8.prototype._setValue_array_setMatrixWorldNeedsUpdate],[J8.prototype._setValue_arrayElement,J8.prototype._setValue_arrayElement_setNeedsUpdate,J8.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[J8.prototype._setValue_fromArray,J8.prototype._setValue_fromArray_setNeedsUpdate,J8.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var F5=new Float32Array(1);class K7{constructor(J=1,$=0,H=0){return this.radius=J,this.phi=$,this.theta=H,this}set(J,$,H){return this.radius=J,this.phi=$,this.theta=H,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=d0(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,$,H){if(this.radius=Math.sqrt(J*J+$*$+H*H),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,H),this.phi=Math.acos(d0($/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class CJ extends E6{constructor(J,$=null){super();this.object=J,this.domElement=$,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function CH(J,$,H,Z){let W=pY(Z);switch(H){case 1021:return J*$;case 1024:return J*$;case 1025:return J*$*2;case 1028:return J*$/W.components*W.byteLength;case 1029:return J*$/W.components*W.byteLength;case 1030:return J*$*2/W.components*W.byteLength;case 1031:return J*$*2/W.components*W.byteLength;case 1022:return J*$*3/W.components*W.byteLength;case 1023:return J*$*4/W.components*W.byteLength;case 1033:return J*$*4/W.components*W.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max($,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max($,8)/2;case 36196:case 37492:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*8;case 37496:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor(($+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor(($+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor(($+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor(($+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor(($+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor(($+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor(($+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor(($+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor(($+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor(($+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor(($+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor(($+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor(($+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil($/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil($/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil($/4)*16}throw Error(`Unable to determine texture byte length for ${H} format.`)}function pY(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"172"}}));if(typeof window<"u")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="172";function GQ(){let J=null,$=!1,H=null,Z=null;function W(Q,Y){H(Q,Y),Z=J.requestAnimationFrame(W)}return{start:function(){if($===!0)return;if(H===null)return;Z=J.requestAnimationFrame(W),$=!0},stop:function(){J.cancelAnimationFrame(Z),$=!1},setAnimationLoop:function(Q){H=Q},setContext:function(Q){J=Q}}}function uY(J){let $=new WeakMap;function H(X,K){let{array:U,usage:E}=X,G=U.byteLength,F=J.createBuffer();J.bindBuffer(K,F),J.bufferData(K,U,E),X.onUploadCallback();let q;if(U instanceof Float32Array)q=J.FLOAT;else if(U instanceof Uint16Array)if(X.isFloat16BufferAttribute)q=J.HALF_FLOAT;else q=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)q=J.SHORT;else if(U instanceof Uint32Array)q=J.UNSIGNED_INT;else if(U instanceof Int32Array)q=J.INT;else if(U instanceof Int8Array)q=J.BYTE;else if(U instanceof Uint8Array)q=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)q=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:F,type:q,bytesPerElement:U.BYTES_PER_ELEMENT,version:X.version,size:G}}function Z(X,K,U){let{array:E,updateRanges:G}=K;if(J.bindBuffer(U,X),G.length===0)J.bufferSubData(U,0,E);else{G.sort((q,R)=>q.start-R.start);let F=0;for(let q=1;q<G.length;q++){let R=G[F],M=G[q];if(M.start<=R.start+R.count+1)R.count=Math.max(R.count,M.start+M.count-R.start);else++F,G[F]=M}G.length=F+1;for(let q=0,R=G.length;q<R;q++){let M=G[q];J.bufferSubData(U,M.start*E.BYTES_PER_ELEMENT,E,M.start,M.count)}K.clearUpdateRanges()}K.onUploadCallback()}function W(X){if(X.isInterleavedBufferAttribute)X=X.data;return $.get(X)}function Q(X){if(X.isInterleavedBufferAttribute)X=X.data;let K=$.get(X);if(K)J.deleteBuffer(K.buffer),$.delete(X)}function Y(X,K){if(X.isInterleavedBufferAttribute)X=X.data;if(X.isGLBufferAttribute){let E=$.get(X);if(!E||E.version<X.version)$.set(X,{buffer:X.buffer,type:X.type,bytesPerElement:X.elementSize,version:X.version});return}let U=$.get(X);if(U===void 0)$.set(X,H(X,K));else if(U.version<X.version){if(U.size!==X.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(U.buffer,X,K),U.version=X.version}}return{get:W,remove:Q,update:Y}}var lY=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mY=`#ifdef USE_ALPHAHASH
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
#endif`,dY=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cY=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nY=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sY=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iY=`#ifdef USE_AOMAP
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
#endif`,oY=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aY=`#ifdef USE_BATCHING
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
#endif`,rY=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tY=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eY=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,JX=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$X=`#ifdef USE_IRIDESCENCE
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
#endif`,HX=`#ifdef USE_BUMPMAP
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
#endif`,ZX=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,WX=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,QX=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,YX=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,XX=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,KX=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,UX=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,GX=`#if defined( USE_COLOR_ALPHA )
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
#endif`,EX=`#define PI 3.141592653589793
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
} // validated`,FX=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,NX=`vec3 transformedNormal = objectNormal;
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
#endif`,OX=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qX=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,RX=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,DX=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,MX="gl_FragColor = linearToOutputTexel( gl_FragColor );",kX=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,LX=`#ifdef USE_ENVMAP
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
#endif`,zX=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,CX=`#ifdef USE_ENVMAP
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
#endif`,VX=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,IX=`#ifdef USE_ENVMAP
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
#endif`,wX=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,BX=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,PX=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,AX=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TX=`#ifdef USE_GRADIENTMAP
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
}`,SX=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_X=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jX=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fX=`uniform bool receiveShadow;
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
#endif`,xX=`#ifdef USE_ENVMAP
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
#endif`,hX=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yX=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vX=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bX=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gX=`PhysicalMaterial material;
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
#endif`,pX=`struct PhysicalMaterial {
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
}`,uX=`
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
#endif`,lX=`#if defined( RE_IndirectDiffuse )
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
#endif`,mX=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dX=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cX=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nX=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sX=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iX=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oX=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aX=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rX=`#if defined( USE_POINTS_UV )
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
#endif`,tX=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eX=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JK=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$K=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,HK=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZK=`#ifdef USE_MORPHTARGETS
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
#endif`,WK=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QK=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,YK=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,XK=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KK=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UK=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,GK=`#ifdef USE_NORMALMAP
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
#endif`,EK=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FK=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NK=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,OK=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qK=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RK=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,DK=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MK=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kK=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LK=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zK=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CK=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VK=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,IK=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wK=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,BK=`float getShadowMask() {
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
}`,PK=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,AK=`#ifdef USE_SKINNING
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
#endif`,TK=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,SK=`#ifdef USE_SKINNING
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
#endif`,_K=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jK=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fK=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xK=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hK=`#ifdef USE_TRANSMISSION
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
#endif`,yK=`#ifdef USE_TRANSMISSION
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
#endif`,vK=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bK=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gK=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pK=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,uK=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lK=`uniform sampler2D t2D;
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
}`,mK=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dK=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cK=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nK=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sK=`#include <common>
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
}`,iK=`#if DEPTH_PACKING == 3200
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
}`,oK=`#define DISTANCE
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
}`,aK=`#define DISTANCE
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
}`,rK=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tK=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eK=`uniform float scale;
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
}`,JU=`uniform vec3 diffuse;
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
}`,$U=`#include <common>
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
}`,HU=`uniform vec3 diffuse;
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
}`,ZU=`#define LAMBERT
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
}`,WU=`#define LAMBERT
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
}`,QU=`#define MATCAP
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
}`,YU=`#define MATCAP
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
}`,XU=`#define NORMAL
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
}`,KU=`#define NORMAL
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
}`,UU=`#define PHONG
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
}`,GU=`#define PHONG
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
}`,EU=`#define STANDARD
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
}`,FU=`#define STANDARD
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
}`,NU=`#define TOON
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
}`,OU=`#define TOON
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
}`,qU=`uniform float size;
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
}`,RU=`uniform vec3 diffuse;
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
}`,DU=`#include <common>
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
}`,MU=`uniform vec3 color;
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
}`,kU=`uniform float rotation;
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
}`,LU=`uniform vec3 diffuse;
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
}`,u0={alphahash_fragment:lY,alphahash_pars_fragment:mY,alphamap_fragment:dY,alphamap_pars_fragment:cY,alphatest_fragment:nY,alphatest_pars_fragment:sY,aomap_fragment:iY,aomap_pars_fragment:oY,batching_pars_vertex:aY,batching_vertex:rY,begin_vertex:tY,beginnormal_vertex:eY,bsdfs:JX,iridescence_fragment:$X,bumpmap_pars_fragment:HX,clipping_planes_fragment:ZX,clipping_planes_pars_fragment:WX,clipping_planes_pars_vertex:QX,clipping_planes_vertex:YX,color_fragment:XX,color_pars_fragment:KX,color_pars_vertex:UX,color_vertex:GX,common:EX,cube_uv_reflection_fragment:FX,defaultnormal_vertex:NX,displacementmap_pars_vertex:OX,displacementmap_vertex:qX,emissivemap_fragment:RX,emissivemap_pars_fragment:DX,colorspace_fragment:MX,colorspace_pars_fragment:kX,envmap_fragment:LX,envmap_common_pars_fragment:zX,envmap_pars_fragment:CX,envmap_pars_vertex:VX,envmap_physical_pars_fragment:xX,envmap_vertex:IX,fog_vertex:wX,fog_pars_vertex:BX,fog_fragment:PX,fog_pars_fragment:AX,gradientmap_pars_fragment:TX,lightmap_pars_fragment:SX,lights_lambert_fragment:_X,lights_lambert_pars_fragment:jX,lights_pars_begin:fX,lights_toon_fragment:hX,lights_toon_pars_fragment:yX,lights_phong_fragment:vX,lights_phong_pars_fragment:bX,lights_physical_fragment:gX,lights_physical_pars_fragment:pX,lights_fragment_begin:uX,lights_fragment_maps:lX,lights_fragment_end:mX,logdepthbuf_fragment:dX,logdepthbuf_pars_fragment:cX,logdepthbuf_pars_vertex:nX,logdepthbuf_vertex:sX,map_fragment:iX,map_pars_fragment:oX,map_particle_fragment:aX,map_particle_pars_fragment:rX,metalnessmap_fragment:tX,metalnessmap_pars_fragment:eX,morphinstance_vertex:JK,morphcolor_vertex:$K,morphnormal_vertex:HK,morphtarget_pars_vertex:ZK,morphtarget_vertex:WK,normal_fragment_begin:QK,normal_fragment_maps:YK,normal_pars_fragment:XK,normal_pars_vertex:KK,normal_vertex:UK,normalmap_pars_fragment:GK,clearcoat_normal_fragment_begin:EK,clearcoat_normal_fragment_maps:FK,clearcoat_pars_fragment:NK,iridescence_pars_fragment:OK,opaque_fragment:qK,packing:RK,premultiplied_alpha_fragment:DK,project_vertex:MK,dithering_fragment:kK,dithering_pars_fragment:LK,roughnessmap_fragment:zK,roughnessmap_pars_fragment:CK,shadowmap_pars_fragment:VK,shadowmap_pars_vertex:IK,shadowmap_vertex:wK,shadowmask_pars_fragment:BK,skinbase_vertex:PK,skinning_pars_vertex:AK,skinning_vertex:TK,skinnormal_vertex:SK,specularmap_fragment:_K,specularmap_pars_fragment:jK,tonemapping_fragment:fK,tonemapping_pars_fragment:xK,transmission_fragment:hK,transmission_pars_fragment:yK,uv_pars_fragment:vK,uv_pars_vertex:bK,uv_vertex:gK,worldpos_vertex:pK,background_vert:uK,background_frag:lK,backgroundCube_vert:mK,backgroundCube_frag:dK,cube_vert:cK,cube_frag:nK,depth_vert:sK,depth_frag:iK,distanceRGBA_vert:oK,distanceRGBA_frag:aK,equirect_vert:rK,equirect_frag:tK,linedashed_vert:eK,linedashed_frag:JU,meshbasic_vert:$U,meshbasic_frag:HU,meshlambert_vert:ZU,meshlambert_frag:WU,meshmatcap_vert:QU,meshmatcap_frag:YU,meshnormal_vert:XU,meshnormal_frag:KU,meshphong_vert:UU,meshphong_frag:GU,meshphysical_vert:EU,meshphysical_frag:FU,meshtoon_vert:NU,meshtoon_frag:OU,points_vert:qU,points_frag:RU,shadow_vert:DU,shadow_frag:MU,sprite_vert:kU,sprite_frag:LU},Q0={common:{diffuse:{value:new x0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new y0},alphaMap:{value:null},alphaMapTransform:{value:new y0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new y0}},envmap:{envMap:{value:null},envMapRotation:{value:new y0},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new y0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new y0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new y0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new y0},normalScale:{value:new S0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new y0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new y0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new y0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new y0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new x0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new x0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new y0},alphaTest:{value:0},uvTransform:{value:new y0}},sprite:{diffuse:{value:new x0(16777215)},opacity:{value:1},center:{value:new S0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new y0},alphaMap:{value:null},alphaMapTransform:{value:new y0},alphaTest:{value:0}}},H6={basic:{uniforms:I8([Q0.common,Q0.specularmap,Q0.envmap,Q0.aomap,Q0.lightmap,Q0.fog]),vertexShader:u0.meshbasic_vert,fragmentShader:u0.meshbasic_frag},lambert:{uniforms:I8([Q0.common,Q0.specularmap,Q0.envmap,Q0.aomap,Q0.lightmap,Q0.emissivemap,Q0.bumpmap,Q0.normalmap,Q0.displacementmap,Q0.fog,Q0.lights,{emissive:{value:new x0(0)}}]),vertexShader:u0.meshlambert_vert,fragmentShader:u0.meshlambert_frag},phong:{uniforms:I8([Q0.common,Q0.specularmap,Q0.envmap,Q0.aomap,Q0.lightmap,Q0.emissivemap,Q0.bumpmap,Q0.normalmap,Q0.displacementmap,Q0.fog,Q0.lights,{emissive:{value:new x0(0)},specular:{value:new x0(1118481)},shininess:{value:30}}]),vertexShader:u0.meshphong_vert,fragmentShader:u0.meshphong_frag},standard:{uniforms:I8([Q0.common,Q0.envmap,Q0.aomap,Q0.lightmap,Q0.emissivemap,Q0.bumpmap,Q0.normalmap,Q0.displacementmap,Q0.roughnessmap,Q0.metalnessmap,Q0.fog,Q0.lights,{emissive:{value:new x0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:u0.meshphysical_vert,fragmentShader:u0.meshphysical_frag},toon:{uniforms:I8([Q0.common,Q0.aomap,Q0.lightmap,Q0.emissivemap,Q0.bumpmap,Q0.normalmap,Q0.displacementmap,Q0.gradientmap,Q0.fog,Q0.lights,{emissive:{value:new x0(0)}}]),vertexShader:u0.meshtoon_vert,fragmentShader:u0.meshtoon_frag},matcap:{uniforms:I8([Q0.common,Q0.bumpmap,Q0.normalmap,Q0.displacementmap,Q0.fog,{matcap:{value:null}}]),vertexShader:u0.meshmatcap_vert,fragmentShader:u0.meshmatcap_frag},points:{uniforms:I8([Q0.points,Q0.fog]),vertexShader:u0.points_vert,fragmentShader:u0.points_frag},dashed:{uniforms:I8([Q0.common,Q0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:u0.linedashed_vert,fragmentShader:u0.linedashed_frag},depth:{uniforms:I8([Q0.common,Q0.displacementmap]),vertexShader:u0.depth_vert,fragmentShader:u0.depth_frag},normal:{uniforms:I8([Q0.common,Q0.bumpmap,Q0.normalmap,Q0.displacementmap,{opacity:{value:1}}]),vertexShader:u0.meshnormal_vert,fragmentShader:u0.meshnormal_frag},sprite:{uniforms:I8([Q0.sprite,Q0.fog]),vertexShader:u0.sprite_vert,fragmentShader:u0.sprite_frag},background:{uniforms:{uvTransform:{value:new y0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:u0.background_vert,fragmentShader:u0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new y0}},vertexShader:u0.backgroundCube_vert,fragmentShader:u0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:u0.cube_vert,fragmentShader:u0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:u0.equirect_vert,fragmentShader:u0.equirect_frag},distanceRGBA:{uniforms:I8([Q0.common,Q0.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:u0.distanceRGBA_vert,fragmentShader:u0.distanceRGBA_frag},shadow:{uniforms:I8([Q0.lights,Q0.fog,{color:{value:new x0(0)},opacity:{value:1}}]),vertexShader:u0.shadow_vert,fragmentShader:u0.shadow_frag}};H6.physical={uniforms:I8([H6.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new y0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new y0},clearcoatNormalScale:{value:new S0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new y0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new y0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new y0},sheen:{value:0},sheenColor:{value:new x0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new y0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new y0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new y0},transmissionSamplerSize:{value:new S0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new y0},attenuationDistance:{value:0},attenuationColor:{value:new x0(0)},specularColor:{value:new x0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new y0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new y0},anisotropyVector:{value:new S0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new y0}}]),vertexShader:u0.meshphysical_vert,fragmentShader:u0.meshphysical_frag};var VJ={r:0,b:0,g:0},o6=new s8,zU=new Z8;function CU(J,$,H,Z,W,Q,Y){let X=new x0(0),K=Q===!0?0:1,U,E,G=null,F=0,q=null;function R(L){let A=L.isScene===!0?L.background:null;if(A&&A.isTexture)A=(L.backgroundBlurriness>0?H:$).get(A);return A}function M(L){let A=!1,_=R(L);if(_===null)O(X,K);else if(_&&_.isColor)O(_,1),A=!0;let V=J.xr.getEnvironmentBlendMode();if(V==="additive")Z.buffers.color.setClear(0,0,0,1,Y);else if(V==="alpha-blend")Z.buffers.color.setClear(0,0,0,0,Y);if(J.autoClear||A)Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function N(L,A){let _=R(A);if(_&&(_.isCubeTexture||_.mapping===o9)){if(E===void 0)E=new E8(new P9(1,1,1),new J6({name:"BackgroundCubeMaterial",uniforms:c6(H6.backgroundCube.uniforms),vertexShader:H6.backgroundCube.vertexShader,fragmentShader:H6.backgroundCube.fragmentShader,side:A8,depthTest:!1,depthWrite:!1,fog:!1})),E.geometry.deleteAttribute("normal"),E.geometry.deleteAttribute("uv"),E.onBeforeRender=function(V,P,u){this.matrixWorld.copyPosition(u.matrixWorld)},Object.defineProperty(E.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),W.update(E);if(o6.copy(A.backgroundRotation),o6.x*=-1,o6.y*=-1,o6.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1)o6.y*=-1,o6.z*=-1;if(E.material.uniforms.envMap.value=_,E.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,E.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,E.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,E.material.uniforms.backgroundRotation.value.setFromMatrix4(zU.makeRotationFromEuler(o6)),E.material.toneMapped=i0.getTransfer(_.colorSpace)!==W8,G!==_||F!==_.version||q!==J.toneMapping)E.material.needsUpdate=!0,G=_,F=_.version,q=J.toneMapping;E.layers.enableAll(),L.unshift(E,E.geometry,E.material,0,0,null)}else if(_&&_.isTexture){if(U===void 0)U=new E8(new W7(2,2),new J6({name:"BackgroundMaterial",uniforms:c6(H6.background.uniforms),vertexShader:H6.background.vertexShader,fragmentShader:H6.background.fragmentShader,side:M9,depthTest:!1,depthWrite:!1,fog:!1})),U.geometry.deleteAttribute("normal"),Object.defineProperty(U.material,"map",{get:function(){return this.uniforms.t2D.value}}),W.update(U);if(U.material.uniforms.t2D.value=_,U.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,U.material.toneMapped=i0.getTransfer(_.colorSpace)!==W8,_.matrixAutoUpdate===!0)_.updateMatrix();if(U.material.uniforms.uvTransform.value.copy(_.matrix),G!==_||F!==_.version||q!==J.toneMapping)U.material.needsUpdate=!0,G=_,F=_.version,q=J.toneMapping;U.layers.enableAll(),L.unshift(U,U.geometry,U.material,0,0,null)}}function O(L,A){L.getRGB(VJ,WH(J)),Z.buffers.color.setClear(VJ.r,VJ.g,VJ.b,A,Y)}function w(){if(E!==void 0)E.geometry.dispose(),E.material.dispose();if(U!==void 0)U.geometry.dispose(),U.material.dispose()}return{getClearColor:function(){return X},setClearColor:function(L,A=1){X.set(L),K=A,O(X,K)},getClearAlpha:function(){return K},setClearAlpha:function(L){K=L,O(X,K)},render:M,addToRenderList:N,dispose:w}}function VU(J,$){let H=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},W=F(null),Q=W,Y=!1;function X(C,f,g,c,m){let r=!1,l=G(c,g,f);if(Q!==l)Q=l,U(Q.object);if(r=q(C,c,g,m),r)R(C,c,g,m);if(m!==null)$.update(m,J.ELEMENT_ARRAY_BUFFER);if(r||Y){if(Y=!1,A(C,f,g,c),m!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,$.get(m).buffer)}}function K(){return J.createVertexArray()}function U(C){return J.bindVertexArray(C)}function E(C){return J.deleteVertexArray(C)}function G(C,f,g){let c=g.wireframe===!0,m=Z[C.id];if(m===void 0)m={},Z[C.id]=m;let r=m[f.id];if(r===void 0)r={},m[f.id]=r;let l=r[c];if(l===void 0)l=F(K()),r[c]=l;return l}function F(C){let f=[],g=[],c=[];for(let m=0;m<H;m++)f[m]=0,g[m]=0,c[m]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:f,enabledAttributes:g,attributeDivisors:c,object:C,attributes:{},index:null}}function q(C,f,g,c){let m=Q.attributes,r=f.attributes,l=0,t=g.getAttributes();for(let p in t)if(t[p].location>=0){let J0=m[p],w0=r[p];if(w0===void 0){if(p==="instanceMatrix"&&C.instanceMatrix)w0=C.instanceMatrix;if(p==="instanceColor"&&C.instanceColor)w0=C.instanceColor}if(J0===void 0)return!0;if(J0.attribute!==w0)return!0;if(w0&&J0.data!==w0.data)return!0;l++}if(Q.attributesNum!==l)return!0;if(Q.index!==c)return!0;return!1}function R(C,f,g,c){let m={},r=f.attributes,l=0,t=g.getAttributes();for(let p in t)if(t[p].location>=0){let J0=r[p];if(J0===void 0){if(p==="instanceMatrix"&&C.instanceMatrix)J0=C.instanceMatrix;if(p==="instanceColor"&&C.instanceColor)J0=C.instanceColor}let w0={};if(w0.attribute=J0,J0&&J0.data)w0.data=J0.data;m[p]=w0,l++}Q.attributes=m,Q.attributesNum=l,Q.index=c}function M(){let C=Q.newAttributes;for(let f=0,g=C.length;f<g;f++)C[f]=0}function N(C){O(C,0)}function O(C,f){let{newAttributes:g,enabledAttributes:c,attributeDivisors:m}=Q;if(g[C]=1,c[C]===0)J.enableVertexAttribArray(C),c[C]=1;if(m[C]!==f)J.vertexAttribDivisor(C,f),m[C]=f}function w(){let{newAttributes:C,enabledAttributes:f}=Q;for(let g=0,c=f.length;g<c;g++)if(f[g]!==C[g])J.disableVertexAttribArray(g),f[g]=0}function L(C,f,g,c,m,r,l){if(l===!0)J.vertexAttribIPointer(C,f,g,m,r);else J.vertexAttribPointer(C,f,g,c,m,r)}function A(C,f,g,c){M();let m=c.attributes,r=g.getAttributes(),l=f.defaultAttributeValues;for(let t in r){let p=r[t];if(p.location>=0){let X0=m[t];if(X0===void 0){if(t==="instanceMatrix"&&C.instanceMatrix)X0=C.instanceMatrix;if(t==="instanceColor"&&C.instanceColor)X0=C.instanceColor}if(X0!==void 0){let{normalized:J0,itemSize:w0}=X0,g0=$.get(X0);if(g0===void 0)continue;let{buffer:n,type:H0,bytesPerElement:D0}=g0,k0=H0===J.INT||H0===J.UNSIGNED_INT||X0.gpuType===D$;if(X0.isInterleavedBufferAttribute){let W0=X0.data,z0=W0.stride,b=X0.offset;if(W0.isInstancedInterleavedBuffer){for(let A0=0;A0<p.locationSize;A0++)O(p.location+A0,W0.meshPerAttribute);if(C.isInstancedMesh!==!0&&c._maxInstanceCount===void 0)c._maxInstanceCount=W0.meshPerAttribute*W0.count}else for(let A0=0;A0<p.locationSize;A0++)N(p.location+A0);J.bindBuffer(J.ARRAY_BUFFER,n);for(let A0=0;A0<p.locationSize;A0++)L(p.location+A0,w0/p.locationSize,H0,J0,z0*D0,(b+w0/p.locationSize*A0)*D0,k0)}else{if(X0.isInstancedBufferAttribute){for(let W0=0;W0<p.locationSize;W0++)O(p.location+W0,X0.meshPerAttribute);if(C.isInstancedMesh!==!0&&c._maxInstanceCount===void 0)c._maxInstanceCount=X0.meshPerAttribute*X0.count}else for(let W0=0;W0<p.locationSize;W0++)N(p.location+W0);J.bindBuffer(J.ARRAY_BUFFER,n);for(let W0=0;W0<p.locationSize;W0++)L(p.location+W0,w0/p.locationSize,H0,J0,w0*D0,w0/p.locationSize*W0*D0,k0)}}else if(l!==void 0){let J0=l[t];if(J0!==void 0)switch(J0.length){case 2:J.vertexAttrib2fv(p.location,J0);break;case 3:J.vertexAttrib3fv(p.location,J0);break;case 4:J.vertexAttrib4fv(p.location,J0);break;default:J.vertexAttrib1fv(p.location,J0)}}}}w()}function _(){u();for(let C in Z){let f=Z[C];for(let g in f){let c=f[g];for(let m in c)E(c[m].object),delete c[m];delete f[g]}delete Z[C]}}function V(C){if(Z[C.id]===void 0)return;let f=Z[C.id];for(let g in f){let c=f[g];for(let m in c)E(c[m].object),delete c[m];delete f[g]}delete Z[C.id]}function P(C){for(let f in Z){let g=Z[f];if(g[C.id]===void 0)continue;let c=g[C.id];for(let m in c)E(c[m].object),delete c[m];delete g[C.id]}}function u(){if(z(),Y=!0,Q===W)return;Q=W,U(Q.object)}function z(){W.geometry=null,W.program=null,W.wireframe=!1}return{setup:X,reset:u,resetDefaultState:z,dispose:_,releaseStatesOfGeometry:V,releaseStatesOfProgram:P,initAttributes:M,enableAttribute:N,disableUnusedAttributes:w}}function IU(J,$,H){let Z;function W(U){Z=U}function Q(U,E){J.drawArrays(Z,U,E),H.update(E,Z,1)}function Y(U,E,G){if(G===0)return;J.drawArraysInstanced(Z,U,E,G),H.update(E,Z,G)}function X(U,E,G){if(G===0)return;$.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,U,0,E,0,G);let q=0;for(let R=0;R<G;R++)q+=E[R];H.update(q,Z,1)}function K(U,E,G,F){if(G===0)return;let q=$.get("WEBGL_multi_draw");if(q===null)for(let R=0;R<U.length;R++)Y(U[R],E[R],F[R]);else{q.multiDrawArraysInstancedWEBGL(Z,U,0,E,0,F,0,G);let R=0;for(let M=0;M<G;M++)R+=E[M]*F[M];H.update(R,Z,1)}}this.setMode=W,this.render=Q,this.renderInstances=Y,this.renderMultiDraw=X,this.renderMultiDrawInstances=K}function wU(J,$,H,Z){let W;function Q(){if(W!==void 0)return W;if($.has("EXT_texture_filter_anisotropic")===!0){let P=$.get("EXT_texture_filter_anisotropic");W=J.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else W=0;return W}function Y(P){if(P!==e8&&Z.convert(P)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function X(P){let u=P===t9&&($.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float"));if(P!==A6&&Z.convert(P)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==T6&&!u)return!1;return!0}function K(P){if(P==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";P="mediump"}if(P==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=H.precision!==void 0?H.precision:"highp",E=K(U);if(E!==U)console.warn("THREE.WebGLRenderer:",U,"not supported, using",E,"instead."),U=E;let G=H.logarithmicDepthBuffer===!0,F=H.reverseDepthBuffer===!0&&$.has("EXT_clip_control"),q=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),R=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=J.getParameter(J.MAX_TEXTURE_SIZE),N=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),O=J.getParameter(J.MAX_VERTEX_ATTRIBS),w=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),L=J.getParameter(J.MAX_VARYING_VECTORS),A=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),_=R>0,V=J.getParameter(J.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:Q,getMaxPrecision:K,textureFormatReadable:Y,textureTypeReadable:X,precision:U,logarithmicDepthBuffer:G,reverseDepthBuffer:F,maxTextures:q,maxVertexTextures:R,maxTextureSize:M,maxCubemapSize:N,maxAttributes:O,maxVertexUniforms:w,maxVaryings:L,maxFragmentUniforms:A,vertexTextures:_,maxSamples:V}}function BU(J){let $=this,H=null,Z=0,W=!1,Q=!1,Y=new n8,X=new y0,K={value:null,needsUpdate:!1};this.uniform=K,this.numPlanes=0,this.numIntersection=0,this.init=function(G,F){let q=G.length!==0||F||Z!==0||W;return W=F,Z=G.length,q},this.beginShadows=function(){Q=!0,E(null)},this.endShadows=function(){Q=!1},this.setGlobalState=function(G,F){H=E(G,F,0)},this.setState=function(G,F,q){let{clippingPlanes:R,clipIntersection:M,clipShadows:N}=G,O=J.get(G);if(!W||R===null||R.length===0||Q&&!N)if(Q)E(null);else U();else{let w=Q?0:Z,L=w*4,A=O.clippingState||null;K.value=A,A=E(R,F,L,q);for(let _=0;_!==L;++_)A[_]=H[_];O.clippingState=A,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=w}};function U(){if(K.value!==H)K.value=H,K.needsUpdate=Z>0;$.numPlanes=Z,$.numIntersection=0}function E(G,F,q,R){let M=G!==null?G.length:0,N=null;if(M!==0){if(N=K.value,R!==!0||N===null){let O=q+M*4,w=F.matrixWorldInverse;if(X.getNormalMatrix(w),N===null||N.length<O)N=new Float32Array(O);for(let L=0,A=q;L!==M;++L,A+=4)Y.copy(G[L]).applyMatrix4(w,X),Y.normal.toArray(N,A),N[A+3]=Y.constant}K.value=N,K.needsUpdate=!0}return $.numPlanes=M,$.numIntersection=0,N}}function PU(J){let $=new WeakMap;function H(Y,X){if(X===a7)Y.mapping=L9;else if(X===r7)Y.mapping=g6;return Y}function Z(Y){if(Y&&Y.isTexture){let X=Y.mapping;if(X===a7||X===r7)if($.has(Y)){let K=$.get(Y).texture;return H(K,Y.mapping)}else{let K=Y.image;if(K&&K.height>0){let U=new YH(K.height);return U.fromEquirectangularTexture(J,Y),$.set(Y,U),Y.addEventListener("dispose",W),H(U.texture,Y.mapping)}else return null}}return Y}function W(Y){let X=Y.target;X.removeEventListener("dispose",W);let K=$.get(X);if(K!==void 0)$.delete(X),K.dispose()}function Q(){$=new WeakMap}return{get:Z,dispose:Q}}var S9=4,uW=[0.125,0.215,0.35,0.446,0.526,0.582],t6=20,VH=new MJ,lW=new x0,IH=null,wH=0,BH=0,PH=!1,r6=(1+Math.sqrt(5))/2,T9=1/r6,mW=[new T(-r6,T9,0),new T(r6,T9,0),new T(-T9,0,r6),new T(T9,0,r6),new T(0,r6,-T9),new T(0,r6,T9),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)];class TH{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(J,$=0,H=0.1,Z=100){IH=this._renderer.getRenderTarget(),wH=this._renderer.getActiveCubeFace(),BH=this._renderer.getActiveMipmapLevel(),PH=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let W=this._allocateTargets();if(W.depthBuffer=!0,this._sceneToCubeUV(J,H,Z,W),$>0)this._blur(W,0,0,$);return this._applyPMREM(W),this._cleanup(W),W}fromEquirectangular(J,$=null){return this._fromTexture(J,$)}fromCubemap(J,$=null){return this._fromTexture(J,$)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=nW(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=cW(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodPlanes.length;J++)this._lodPlanes[J].dispose()}_cleanup(J){this._renderer.setRenderTarget(IH,wH,BH),this._renderer.xr.enabled=PH,J.scissorTest=!1,IJ(J,0,0,J.width,J.height)}_fromTexture(J,$){if(J.mapping===L9||J.mapping===g6)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);IH=this._renderer.getRenderTarget(),wH=this._renderer.getActiveCubeFace(),BH=this._renderer.getActiveMipmapLevel(),PH=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let H=$||this._allocateTargets();return this._textureToCubeUV(J,H),this._applyPMREM(H),this._cleanup(H),H}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),$=4*this._cubeSize,H={magFilter:p6,minFilter:p6,generateMipmaps:!1,type:t9,format:e8,colorSpace:J7,depthBuffer:!1},Z=dW(J,$,H);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==$){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=dW(J,$,H);let{_lodMax:W}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=AU(W)),this._blurMaterial=TU(W,J,$)}return Z}_compileMaterial(J){let $=new E8(this._lodPlanes[0],J);this._renderer.compile($,VH)}_sceneToCubeUV(J,$,H,Z){let Y=new C8(90,1,$,H),X=[1,-1,1,1,1,1],K=[1,1,1,-1,-1,-1],U=this._renderer,E=U.autoClear,G=U.toneMapping;U.getClearColor(lW),U.toneMapping=G6,U.autoClear=!1;let F=new q6({name:"PMREM.Background",side:A8,depthWrite:!1,depthTest:!1}),q=new E8(new P9,F),R=!1,M=J.background;if(M){if(M.isColor)F.color.copy(M),J.background=null,R=!0}else F.color.copy(lW),R=!0;for(let N=0;N<6;N++){let O=N%3;if(O===0)Y.up.set(0,X[N],0),Y.lookAt(K[N],0,0);else if(O===1)Y.up.set(0,0,X[N]),Y.lookAt(0,K[N],0);else Y.up.set(0,X[N],0),Y.lookAt(0,0,K[N]);let w=this._cubeSize;if(IJ(Z,O*w,N>2?w:0,w,w),U.setRenderTarget(Z),R)U.render(q,Y);U.render(J,Y)}q.geometry.dispose(),q.material.dispose(),U.toneMapping=G,U.autoClear=E,J.background=M}_textureToCubeUV(J,$){let H=this._renderer,Z=J.mapping===L9||J.mapping===g6;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=nW();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=cW();let W=Z?this._cubemapMaterial:this._equirectMaterial,Q=new E8(this._lodPlanes[0],W),Y=W.uniforms;Y.envMap.value=J;let X=this._cubeSize;IJ($,0,0,3*X,2*X),H.setRenderTarget($),H.render(Q,VH)}_applyPMREM(J){let $=this._renderer,H=$.autoClear;$.autoClear=!1;let Z=this._lodPlanes.length;for(let W=1;W<Z;W++){let Q=Math.sqrt(this._sigmas[W]*this._sigmas[W]-this._sigmas[W-1]*this._sigmas[W-1]),Y=mW[(Z-W-1)%mW.length];this._blur(J,W-1,W,Q,Y)}$.autoClear=H}_blur(J,$,H,Z,W){let Q=this._pingPongRenderTarget;this._halfBlur(J,Q,$,H,Z,"latitudinal",W),this._halfBlur(Q,J,H,H,Z,"longitudinal",W)}_halfBlur(J,$,H,Z,W,Q,Y){let X=this._renderer,K=this._blurMaterial;if(Q!=="latitudinal"&&Q!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let U=3,E=new E8(this._lodPlanes[Z],K),G=K.uniforms,F=this._sizeLods[H]-1,q=isFinite(W)?Math.PI/(2*F):2*Math.PI/(2*t6-1),R=W/q,M=isFinite(W)?1+Math.floor(U*R):t6;if(M>t6)console.warn(`sigmaRadians, ${W}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${t6}`);let N=[],O=0;for(let V=0;V<t6;++V){let P=V/R,u=Math.exp(-P*P/2);if(N.push(u),V===0)O+=u;else if(V<M)O+=2*u}for(let V=0;V<N.length;V++)N[V]=N[V]/O;if(G.envMap.value=J.texture,G.samples.value=M,G.weights.value=N,G.latitudinal.value=Q==="latitudinal",Y)G.poleAxis.value=Y;let{_lodMax:w}=this;G.dTheta.value=q,G.mipInt.value=w-H;let L=this._sizeLods[Z],A=3*L*(Z>w-S9?Z-w+S9:0),_=4*(this._cubeSize-L);IJ($,A,_,3*L,2*L),X.setRenderTarget($),X.render(E,VH)}}function AU(J){let $=[],H=[],Z=[],W=J,Q=J-S9+1+uW.length;for(let Y=0;Y<Q;Y++){let X=Math.pow(2,W);H.push(X);let K=1/X;if(Y>J-S9)K=uW[Y-J+S9-1];else if(Y===0)K=0;Z.push(K);let U=1/(X-2),E=-U,G=1+U,F=[E,E,G,E,G,G,E,E,G,G,E,G],q=6,R=6,M=3,N=2,O=1,w=new Float32Array(M*R*q),L=new Float32Array(N*R*q),A=new Float32Array(O*R*q);for(let V=0;V<q;V++){let P=V%3*2/3-1,u=V>2?0:-1,z=[P,u,0,P+0.6666666666666666,u,0,P+0.6666666666666666,u+1,0,P,u,0,P+0.6666666666666666,u+1,0,P,u+1,0];w.set(z,M*R*V),L.set(F,N*R*V);let C=[V,V,V,V,V,V];A.set(C,O*R*V)}let _=new T8;if(_.setAttribute("position",new p8(w,M)),_.setAttribute("uv",new p8(L,N)),_.setAttribute("faceIndex",new p8(A,O)),$.push(_),W>S9)W--}return{lodPlanes:$,sizeLods:H,sigmas:Z}}function dW(J,$,H){let Z=new F6(J,$,H);return Z.texture.mapping=o9,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function IJ(J,$,H,Z,W){J.viewport.set($,H,Z,W),J.scissor.set($,H,Z,W)}function TU(J,$,H){let Z=new Float32Array(t6),W=new T(0,1,0);return new J6({name:"SphericalGaussianBlur",defines:{n:t6,CUBEUV_TEXEL_WIDTH:1/$,CUBEUV_TEXEL_HEIGHT:1/H,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:Z},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:W}},vertexShader:_H(),fragmentShader:`

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
		`,blending:P6,depthTest:!1,depthWrite:!1})}function cW(){return new J6({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_H(),fragmentShader:`

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
		`,blending:P6,depthTest:!1,depthWrite:!1})}function nW(){return new J6({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_H(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:P6,depthTest:!1,depthWrite:!1})}function _H(){return`

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
	`}function SU(J){let $=new WeakMap,H=null;function Z(X){if(X&&X.isTexture){let K=X.mapping,U=K===a7||K===r7,E=K===L9||K===g6;if(U||E){let G=$.get(X),F=G!==void 0?G.texture.pmremVersion:0;if(X.isRenderTargetTexture&&X.pmremVersion!==F){if(H===null)H=new TH(J);return G=U?H.fromEquirectangular(X,G):H.fromCubemap(X,G),G.texture.pmremVersion=X.pmremVersion,$.set(X,G),G.texture}else if(G!==void 0)return G.texture;else{let q=X.image;if(U&&q&&q.height>0||E&&q&&W(q)){if(H===null)H=new TH(J);return G=U?H.fromEquirectangular(X):H.fromCubemap(X),G.texture.pmremVersion=X.pmremVersion,$.set(X,G),X.addEventListener("dispose",Q),G.texture}else return null}}}return X}function W(X){let K=0,U=6;for(let E=0;E<U;E++)if(X[E]!==void 0)K++;return K===U}function Q(X){let K=X.target;K.removeEventListener("dispose",Q);let U=$.get(K);if(U!==void 0)$.delete(K),U.dispose()}function Y(){if($=new WeakMap,H!==null)H.dispose(),H=null}return{get:Z,dispose:Y}}function _U(J){let $={};function H(Z){if($[Z]!==void 0)return $[Z];let W;switch(Z){case"WEBGL_depth_texture":W=J.getExtension("WEBGL_depth_texture")||J.getExtension("MOZ_WEBGL_depth_texture")||J.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":W=J.getExtension("EXT_texture_filter_anisotropic")||J.getExtension("MOZ_EXT_texture_filter_anisotropic")||J.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":W=J.getExtension("WEBGL_compressed_texture_s3tc")||J.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":W=J.getExtension("WEBGL_compressed_texture_pvrtc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:W=J.getExtension(Z)}return $[Z]=W,W}return{has:function(Z){return H(Z)!==null},init:function(){H("EXT_color_buffer_float"),H("WEBGL_clip_cull_distance"),H("OES_texture_float_linear"),H("EXT_color_buffer_half_float"),H("WEBGL_multisampled_render_to_texture"),H("WEBGL_render_shared_exponent")},get:function(Z){let W=H(Z);if(W===null)l6("THREE.WebGLRenderer: "+Z+" extension not supported.");return W}}}function jU(J,$,H,Z){let W={},Q=new WeakMap;function Y(G){let F=G.target;if(F.index!==null)$.remove(F.index);for(let R in F.attributes)$.remove(F.attributes[R]);F.removeEventListener("dispose",Y),delete W[F.id];let q=Q.get(F);if(q)$.remove(q),Q.delete(F);if(Z.releaseStatesOfGeometry(F),F.isInstancedBufferGeometry===!0)delete F._maxInstanceCount;H.memory.geometries--}function X(G,F){if(W[F.id]===!0)return F;return F.addEventListener("dispose",Y),W[F.id]=!0,H.memory.geometries++,F}function K(G){let F=G.attributes;for(let q in F)$.update(F[q],J.ARRAY_BUFFER)}function U(G){let F=[],q=G.index,R=G.attributes.position,M=0;if(q!==null){let w=q.array;M=q.version;for(let L=0,A=w.length;L<A;L+=3){let _=w[L+0],V=w[L+1],P=w[L+2];F.push(_,V,V,P,P,_)}}else if(R!==void 0){let w=R.array;M=R.version;for(let L=0,A=w.length/3-1;L<A;L+=3){let _=L+0,V=L+1,P=L+2;F.push(_,V,V,P,P,_)}}else return;let N=new((JH(F))?UJ:KJ)(F,1);N.version=M;let O=Q.get(G);if(O)$.remove(O);Q.set(G,N)}function E(G){let F=Q.get(G);if(F){let q=G.index;if(q!==null){if(F.version<q.version)U(G)}}else U(G);return Q.get(G)}return{get:X,update:K,getWireframeAttribute:E}}function fU(J,$,H){let Z;function W(F){Z=F}let Q,Y;function X(F){Q=F.type,Y=F.bytesPerElement}function K(F,q){J.drawElements(Z,q,Q,F*Y),H.update(q,Z,1)}function U(F,q,R){if(R===0)return;J.drawElementsInstanced(Z,q,Q,F*Y,R),H.update(q,Z,R)}function E(F,q,R){if(R===0)return;$.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,q,0,Q,F,0,R);let N=0;for(let O=0;O<R;O++)N+=q[O];H.update(N,Z,1)}function G(F,q,R,M){if(R===0)return;let N=$.get("WEBGL_multi_draw");if(N===null)for(let O=0;O<F.length;O++)U(F[O]/Y,q[O],M[O]);else{N.multiDrawElementsInstancedWEBGL(Z,q,0,Q,F,0,M,0,R);let O=0;for(let w=0;w<R;w++)O+=q[w]*M[w];H.update(O,Z,1)}}this.setMode=W,this.setIndex=X,this.render=K,this.renderInstances=U,this.renderMultiDraw=E,this.renderMultiDrawInstances=G}function xU(J){let $={geometries:0,textures:0},H={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(Q,Y,X){switch(H.calls++,Y){case J.TRIANGLES:H.triangles+=X*(Q/3);break;case J.LINES:H.lines+=X*(Q/2);break;case J.LINE_STRIP:H.lines+=X*(Q-1);break;case J.LINE_LOOP:H.lines+=X*Q;break;case J.POINTS:H.points+=X*Q;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",Y);break}}function W(){H.calls=0,H.triangles=0,H.points=0,H.lines=0}return{memory:$,render:H,programs:null,autoReset:!0,reset:W,update:Z}}function hU(J,$,H){let Z=new WeakMap,W=new $8;function Q(Y,X,K){let U=Y.morphTargetInfluences,E=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,G=E!==void 0?E.length:0,F=Z.get(X);if(F===void 0||F.count!==G){let z=function(){P.dispose(),Z.delete(X),X.removeEventListener("dispose",z)};if(F!==void 0)F.texture.dispose();let q=X.morphAttributes.position!==void 0,R=X.morphAttributes.normal!==void 0,M=X.morphAttributes.color!==void 0,N=X.morphAttributes.position||[],O=X.morphAttributes.normal||[],w=X.morphAttributes.color||[],L=0;if(q===!0)L=1;if(R===!0)L=2;if(M===!0)L=3;let A=X.attributes.position.count*L,_=1;if(A>$.maxTextureSize)_=Math.ceil(A/$.maxTextureSize),A=$.maxTextureSize;let V=new Float32Array(A*_*4*G),P=new YJ(V,A,_,G);P.type=T6,P.needsUpdate=!0;let u=L*4;for(let C=0;C<G;C++){let f=N[C],g=O[C],c=w[C],m=A*_*4*C;for(let r=0;r<f.count;r++){let l=r*u;if(q===!0)W.fromBufferAttribute(f,r),V[m+l+0]=W.x,V[m+l+1]=W.y,V[m+l+2]=W.z,V[m+l+3]=0;if(R===!0)W.fromBufferAttribute(g,r),V[m+l+4]=W.x,V[m+l+5]=W.y,V[m+l+6]=W.z,V[m+l+7]=0;if(M===!0)W.fromBufferAttribute(c,r),V[m+l+8]=W.x,V[m+l+9]=W.y,V[m+l+10]=W.z,V[m+l+11]=c.itemSize===4?W.w:1}}F={count:G,texture:P,size:new S0(A,_)},Z.set(X,F),X.addEventListener("dispose",z)}if(Y.isInstancedMesh===!0&&Y.morphTexture!==null)K.getUniforms().setValue(J,"morphTexture",Y.morphTexture,H);else{let q=0;for(let M=0;M<U.length;M++)q+=U[M];let R=X.morphTargetsRelative?1:1-q;K.getUniforms().setValue(J,"morphTargetBaseInfluence",R),K.getUniforms().setValue(J,"morphTargetInfluences",U)}K.getUniforms().setValue(J,"morphTargetsTexture",F.texture,H),K.getUniforms().setValue(J,"morphTargetsTextureSize",F.size)}return{update:Q}}function yU(J,$,H,Z){let W=new WeakMap;function Q(K){let U=Z.render.frame,E=K.geometry,G=$.get(K,E);if(W.get(G)!==U)$.update(G),W.set(G,U);if(K.isInstancedMesh){if(K.hasEventListener("dispose",X)===!1)K.addEventListener("dispose",X);if(W.get(K)!==U){if(H.update(K.instanceMatrix,J.ARRAY_BUFFER),K.instanceColor!==null)H.update(K.instanceColor,J.ARRAY_BUFFER);W.set(K,U)}}if(K.isSkinnedMesh){let F=K.skeleton;if(W.get(F)!==U)F.update(),W.set(F,U)}return G}function Y(){W=new WeakMap}function X(K){let U=K.target;if(U.removeEventListener("dispose",X),H.remove(U.instanceMatrix),U.instanceColor!==null)H.remove(U.instanceColor)}return{update:Q,dispose:Y}}var EQ=new V8,sW=new qJ(1,1),FQ=new YJ,NQ=new ZH,OQ=new EJ,iW=[],oW=[],aW=new Float32Array(16),rW=new Float32Array(9),tW=new Float32Array(4);function _9(J,$,H){let Z=J[0];if(Z<=0||Z>0)return J;let W=$*H,Q=iW[W];if(Q===void 0)Q=new Float32Array(W),iW[W]=Q;if($!==0){Z.toArray(Q,0);for(let Y=1,X=0;Y!==$;++Y)X+=H,J[Y].toArray(Q,X)}return Q}function O8(J,$){if(J.length!==$.length)return!1;for(let H=0,Z=J.length;H<Z;H++)if(J[H]!==$[H])return!1;return!0}function q8(J,$){for(let H=0,Z=$.length;H<Z;H++)J[H]=$[H]}function PJ(J,$){let H=oW[$];if(H===void 0)H=new Int32Array($),oW[$]=H;for(let Z=0;Z!==$;++Z)H[Z]=J.allocateTextureUnit();return H}function vU(J,$){let H=this.cache;if(H[0]===$)return;J.uniform1f(this.addr,$),H[0]=$}function bU(J,$){let H=this.cache;if($.x!==void 0){if(H[0]!==$.x||H[1]!==$.y)J.uniform2f(this.addr,$.x,$.y),H[0]=$.x,H[1]=$.y}else{if(O8(H,$))return;J.uniform2fv(this.addr,$),q8(H,$)}}function gU(J,$){let H=this.cache;if($.x!==void 0){if(H[0]!==$.x||H[1]!==$.y||H[2]!==$.z)J.uniform3f(this.addr,$.x,$.y,$.z),H[0]=$.x,H[1]=$.y,H[2]=$.z}else if($.r!==void 0){if(H[0]!==$.r||H[1]!==$.g||H[2]!==$.b)J.uniform3f(this.addr,$.r,$.g,$.b),H[0]=$.r,H[1]=$.g,H[2]=$.b}else{if(O8(H,$))return;J.uniform3fv(this.addr,$),q8(H,$)}}function pU(J,$){let H=this.cache;if($.x!==void 0){if(H[0]!==$.x||H[1]!==$.y||H[2]!==$.z||H[3]!==$.w)J.uniform4f(this.addr,$.x,$.y,$.z,$.w),H[0]=$.x,H[1]=$.y,H[2]=$.z,H[3]=$.w}else{if(O8(H,$))return;J.uniform4fv(this.addr,$),q8(H,$)}}function uU(J,$){let H=this.cache,Z=$.elements;if(Z===void 0){if(O8(H,$))return;J.uniformMatrix2fv(this.addr,!1,$),q8(H,$)}else{if(O8(H,Z))return;tW.set(Z),J.uniformMatrix2fv(this.addr,!1,tW),q8(H,Z)}}function lU(J,$){let H=this.cache,Z=$.elements;if(Z===void 0){if(O8(H,$))return;J.uniformMatrix3fv(this.addr,!1,$),q8(H,$)}else{if(O8(H,Z))return;rW.set(Z),J.uniformMatrix3fv(this.addr,!1,rW),q8(H,Z)}}function mU(J,$){let H=this.cache,Z=$.elements;if(Z===void 0){if(O8(H,$))return;J.uniformMatrix4fv(this.addr,!1,$),q8(H,$)}else{if(O8(H,Z))return;aW.set(Z),J.uniformMatrix4fv(this.addr,!1,aW),q8(H,Z)}}function dU(J,$){let H=this.cache;if(H[0]===$)return;J.uniform1i(this.addr,$),H[0]=$}function cU(J,$){let H=this.cache;if($.x!==void 0){if(H[0]!==$.x||H[1]!==$.y)J.uniform2i(this.addr,$.x,$.y),H[0]=$.x,H[1]=$.y}else{if(O8(H,$))return;J.uniform2iv(this.addr,$),q8(H,$)}}function nU(J,$){let H=this.cache;if($.x!==void 0){if(H[0]!==$.x||H[1]!==$.y||H[2]!==$.z)J.uniform3i(this.addr,$.x,$.y,$.z),H[0]=$.x,H[1]=$.y,H[2]=$.z}else{if(O8(H,$))return;J.uniform3iv(this.addr,$),q8(H,$)}}function sU(J,$){let H=this.cache;if($.x!==void 0){if(H[0]!==$.x||H[1]!==$.y||H[2]!==$.z||H[3]!==$.w)J.uniform4i(this.addr,$.x,$.y,$.z,$.w),H[0]=$.x,H[1]=$.y,H[2]=$.z,H[3]=$.w}else{if(O8(H,$))return;J.uniform4iv(this.addr,$),q8(H,$)}}function iU(J,$){let H=this.cache;if(H[0]===$)return;J.uniform1ui(this.addr,$),H[0]=$}function oU(J,$){let H=this.cache;if($.x!==void 0){if(H[0]!==$.x||H[1]!==$.y)J.uniform2ui(this.addr,$.x,$.y),H[0]=$.x,H[1]=$.y}else{if(O8(H,$))return;J.uniform2uiv(this.addr,$),q8(H,$)}}function aU(J,$){let H=this.cache;if($.x!==void 0){if(H[0]!==$.x||H[1]!==$.y||H[2]!==$.z)J.uniform3ui(this.addr,$.x,$.y,$.z),H[0]=$.x,H[1]=$.y,H[2]=$.z}else{if(O8(H,$))return;J.uniform3uiv(this.addr,$),q8(H,$)}}function rU(J,$){let H=this.cache;if($.x!==void 0){if(H[0]!==$.x||H[1]!==$.y||H[2]!==$.z||H[3]!==$.w)J.uniform4ui(this.addr,$.x,$.y,$.z,$.w),H[0]=$.x,H[1]=$.y,H[2]=$.z,H[3]=$.w}else{if(O8(H,$))return;J.uniform4uiv(this.addr,$),q8(H,$)}}function tU(J,$,H){let Z=this.cache,W=H.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;let Q;if(this.type===J.SAMPLER_2D_SHADOW)sW.compareFunction=a$,Q=sW;else Q=EQ;H.setTexture2D($||Q,W)}function eU(J,$,H){let Z=this.cache,W=H.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;H.setTexture3D($||NQ,W)}function JG(J,$,H){let Z=this.cache,W=H.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;H.setTextureCube($||OQ,W)}function $G(J,$,H){let Z=this.cache,W=H.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;H.setTexture2DArray($||FQ,W)}function HG(J){switch(J){case 5126:return vU;case 35664:return bU;case 35665:return gU;case 35666:return pU;case 35674:return uU;case 35675:return lU;case 35676:return mU;case 5124:case 35670:return dU;case 35667:case 35671:return cU;case 35668:case 35672:return nU;case 35669:case 35673:return sU;case 5125:return iU;case 36294:return oU;case 36295:return aU;case 36296:return rU;case 35678:case 36198:case 36298:case 36306:case 35682:return tU;case 35679:case 36299:case 36307:return eU;case 35680:case 36300:case 36308:case 36293:return JG;case 36289:case 36303:case 36311:case 36292:return $G}}function ZG(J,$){J.uniform1fv(this.addr,$)}function WG(J,$){let H=_9($,this.size,2);J.uniform2fv(this.addr,H)}function QG(J,$){let H=_9($,this.size,3);J.uniform3fv(this.addr,H)}function YG(J,$){let H=_9($,this.size,4);J.uniform4fv(this.addr,H)}function XG(J,$){let H=_9($,this.size,4);J.uniformMatrix2fv(this.addr,!1,H)}function KG(J,$){let H=_9($,this.size,9);J.uniformMatrix3fv(this.addr,!1,H)}function UG(J,$){let H=_9($,this.size,16);J.uniformMatrix4fv(this.addr,!1,H)}function GG(J,$){J.uniform1iv(this.addr,$)}function EG(J,$){J.uniform2iv(this.addr,$)}function FG(J,$){J.uniform3iv(this.addr,$)}function NG(J,$){J.uniform4iv(this.addr,$)}function OG(J,$){J.uniform1uiv(this.addr,$)}function qG(J,$){J.uniform2uiv(this.addr,$)}function RG(J,$){J.uniform3uiv(this.addr,$)}function DG(J,$){J.uniform4uiv(this.addr,$)}function MG(J,$,H){let Z=this.cache,W=$.length,Q=PJ(H,W);if(!O8(Z,Q))J.uniform1iv(this.addr,Q),q8(Z,Q);for(let Y=0;Y!==W;++Y)H.setTexture2D($[Y]||EQ,Q[Y])}function kG(J,$,H){let Z=this.cache,W=$.length,Q=PJ(H,W);if(!O8(Z,Q))J.uniform1iv(this.addr,Q),q8(Z,Q);for(let Y=0;Y!==W;++Y)H.setTexture3D($[Y]||NQ,Q[Y])}function LG(J,$,H){let Z=this.cache,W=$.length,Q=PJ(H,W);if(!O8(Z,Q))J.uniform1iv(this.addr,Q),q8(Z,Q);for(let Y=0;Y!==W;++Y)H.setTextureCube($[Y]||OQ,Q[Y])}function zG(J,$,H){let Z=this.cache,W=$.length,Q=PJ(H,W);if(!O8(Z,Q))J.uniform1iv(this.addr,Q),q8(Z,Q);for(let Y=0;Y!==W;++Y)H.setTexture2DArray($[Y]||FQ,Q[Y])}function CG(J){switch(J){case 5126:return ZG;case 35664:return WG;case 35665:return QG;case 35666:return YG;case 35674:return XG;case 35675:return KG;case 35676:return UG;case 5124:case 35670:return GG;case 35667:case 35671:return EG;case 35668:case 35672:return FG;case 35669:case 35673:return NG;case 5125:return OG;case 36294:return qG;case 36295:return RG;case 36296:return DG;case 35678:case 36198:case 36298:case 36306:case 35682:return MG;case 35679:case 36299:case 36307:return kG;case 35680:case 36300:case 36308:case 36293:return LG;case 36289:case 36303:case 36311:case 36292:return zG}}class qQ{constructor(J,$,H){this.id=J,this.addr=H,this.cache=[],this.type=$.type,this.setValue=HG($.type)}}class RQ{constructor(J,$,H){this.id=J,this.addr=H,this.cache=[],this.type=$.type,this.size=$.size,this.setValue=CG($.type)}}class DQ{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,$,H){let Z=this.seq;for(let W=0,Q=Z.length;W!==Q;++W){let Y=Z[W];Y.setValue(J,$[Y.id],H)}}}var AH=/(\w+)(\])?(\[|\.)?/g;function eW(J,$){J.seq.push($),J.map[$.id]=$}function VG(J,$,H){let Z=J.name,W=Z.length;AH.lastIndex=0;while(!0){let Q=AH.exec(Z),Y=AH.lastIndex,X=Q[1],K=Q[2]==="]",U=Q[3];if(K)X=X|0;if(U===void 0||U==="["&&Y+2===W){eW(H,U===void 0?new qQ(X,J,$):new RQ(X,J,$));break}else{let G=H.map[X];if(G===void 0)G=new DQ(X),eW(H,G);H=G}}}class G7{constructor(J,$){this.seq=[],this.map={};let H=J.getProgramParameter($,J.ACTIVE_UNIFORMS);for(let Z=0;Z<H;++Z){let W=J.getActiveUniform($,Z),Q=J.getUniformLocation($,W.name);VG(W,Q,this)}}setValue(J,$,H,Z){let W=this.map[$];if(W!==void 0)W.setValue(J,H,Z)}setOptional(J,$,H){let Z=$[H];if(Z!==void 0)this.setValue(J,H,Z)}static upload(J,$,H,Z){for(let W=0,Q=$.length;W!==Q;++W){let Y=$[W],X=H[Y.id];if(X.needsUpdate!==!1)Y.setValue(J,X.value,Z)}}static seqWithValue(J,$){let H=[];for(let Z=0,W=J.length;Z!==W;++Z){let Q=J[Z];if(Q.id in $)H.push(Q)}return H}}function JQ(J,$,H){let Z=J.createShader($);return J.shaderSource(Z,H),J.compileShader(Z),Z}var IG=37297,wG=0;function BG(J,$){let H=J.split(`
`),Z=[],W=Math.max($-6,0),Q=Math.min($+6,H.length);for(let Y=W;Y<Q;Y++){let X=Y+1;Z.push(`${X===$?">":" "} ${X}: ${H[Y]}`)}return Z.join(`
`)}var $Q=new y0;function PG(J){i0._getMatrix($Q,i0.workingColorSpace,J);let $=`mat3( ${$Q.elements.map((H)=>H.toFixed(4))} )`;switch(i0.getTransfer(J)){case o$:return[$,"LinearTransferOETF"];case W8:return[$,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",J),[$,"LinearTransferOETF"]}}function HQ(J,$,H){let Z=J.getShaderParameter($,J.COMPILE_STATUS),W=J.getShaderInfoLog($).trim();if(Z&&W==="")return"";let Q=/ERROR: 0:(\d+)/.exec(W);if(Q){let Y=parseInt(Q[1]);return H.toUpperCase()+`

`+W+`

`+BG(J.getShaderSource($),Y)}else return W}function AG(J,$){let H=PG($);return[`vec4 ${J}( vec4 value ) {`,`	return ${H[1]}( vec4( value.rgb * ${H[0]}, value.a ) );`,"}"].join(`
`)}function TG(J,$){let H;switch($){case JW:H="Linear";break;case $W:H="Reinhard";break;case HW:H="Cineon";break;case o7:H="ACESFilmic";break;case WW:H="AgX";break;case QW:H="Neutral";break;case ZW:H="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",$),H="Linear"}return"vec3 "+J+"( vec3 color ) { return "+H+"ToneMapping( color ); }"}var wJ=new T;function SG(){i0.getLuminanceCoefficients(wJ);let J=wJ.x.toFixed(4),$=wJ.y.toFixed(4),H=wJ.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${$}, ${H} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function _G(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(U7).join(`
`)}function jG(J){let $=[];for(let H in J){let Z=J[H];if(Z===!1)continue;$.push("#define "+H+" "+Z)}return $.join(`
`)}function fG(J,$){let H={},Z=J.getProgramParameter($,J.ACTIVE_ATTRIBUTES);for(let W=0;W<Z;W++){let Q=J.getActiveAttrib($,W),Y=Q.name,X=1;if(Q.type===J.FLOAT_MAT2)X=2;if(Q.type===J.FLOAT_MAT3)X=3;if(Q.type===J.FLOAT_MAT4)X=4;H[Y]={type:Q.type,location:J.getAttribLocation($,Y),locationSize:X}}return H}function U7(J){return J!==""}function ZQ(J,$){let H=$.numSpotLightShadows+$.numSpotLightMaps-$.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,$.numDirLights).replace(/NUM_SPOT_LIGHTS/g,$.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,$.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,H).replace(/NUM_RECT_AREA_LIGHTS/g,$.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,$.numPointLights).replace(/NUM_HEMI_LIGHTS/g,$.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,$.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,$.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,$.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,$.numPointLightShadows)}function WQ(J,$){return J.replace(/NUM_CLIPPING_PLANES/g,$.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,$.numClippingPlanes-$.numClipIntersection)}var xG=/^[ \t]*#include +<([\w\d./]+)>/gm;function SH(J){return J.replace(xG,yG)}var hG=new Map;function yG(J,$){let H=u0[$];if(H===void 0){let Z=hG.get($);if(Z!==void 0)H=u0[Z],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',$,Z);else throw Error("Can not resolve #include <"+$+">")}return SH(H)}var vG=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function QQ(J){return J.replace(vG,bG)}function bG(J,$,H,Z){let W="";for(let Q=parseInt($);Q<parseInt(H);Q++)W+=Z.replace(/\[\s*i\s*\]/g,"[ "+Q+" ]").replace(/UNROLLED_LOOP_INDEX/g,Q);return W}function YQ(J){let $=`precision ${J.precision} float;
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
#define LOW_PRECISION`;return $}function gG(J){let $="SHADOWMAP_TYPE_BASIC";if(J.shadowMapType===N$)$="SHADOWMAP_TYPE_PCF";else if(J.shadowMapType===SZ)$="SHADOWMAP_TYPE_PCF_SOFT";else if(J.shadowMapType===r8)$="SHADOWMAP_TYPE_VSM";return $}function pG(J){let $="ENVMAP_TYPE_CUBE";if(J.envMap)switch(J.envMapMode){case L9:case g6:$="ENVMAP_TYPE_CUBE";break;case o9:$="ENVMAP_TYPE_CUBE_UV";break}return $}function uG(J){let $="ENVMAP_MODE_REFLECTION";if(J.envMap)switch(J.envMapMode){case g6:$="ENVMAP_MODE_REFRACTION";break}return $}function lG(J){let $="ENVMAP_BLENDING_NONE";if(J.envMap)switch(J.combine){case rZ:$="ENVMAP_BLENDING_MULTIPLY";break;case tZ:$="ENVMAP_BLENDING_MIX";break;case eZ:$="ENVMAP_BLENDING_ADD";break}return $}function mG(J){let $=J.envMapCubeUVHeight;if($===null)return null;let H=Math.log2($)-2,Z=1/$;return{texelWidth:1/(3*Math.max(Math.pow(2,H),112)),texelHeight:Z,maxMip:H}}function dG(J,$,H,Z){let W=J.getContext(),Q=H.defines,Y=H.vertexShader,X=H.fragmentShader,K=gG(H),U=pG(H),E=uG(H),G=lG(H),F=mG(H),q=_G(H),R=jG(Q),M=W.createProgram(),N,O,w=H.glslVersion?"#version "+H.glslVersion+`
`:"";if(H.isRawShaderMaterial){if(N=["#define SHADER_TYPE "+H.shaderType,"#define SHADER_NAME "+H.shaderName,R].filter(U7).join(`
`),N.length>0)N+=`
`;if(O=["#define SHADER_TYPE "+H.shaderType,"#define SHADER_NAME "+H.shaderName,R].filter(U7).join(`
`),O.length>0)O+=`
`}else N=[YQ(H),"#define SHADER_TYPE "+H.shaderType,"#define SHADER_NAME "+H.shaderName,R,H.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",H.batching?"#define USE_BATCHING":"",H.batchingColor?"#define USE_BATCHING_COLOR":"",H.instancing?"#define USE_INSTANCING":"",H.instancingColor?"#define USE_INSTANCING_COLOR":"",H.instancingMorph?"#define USE_INSTANCING_MORPH":"",H.useFog&&H.fog?"#define USE_FOG":"",H.useFog&&H.fogExp2?"#define FOG_EXP2":"",H.map?"#define USE_MAP":"",H.envMap?"#define USE_ENVMAP":"",H.envMap?"#define "+E:"",H.lightMap?"#define USE_LIGHTMAP":"",H.aoMap?"#define USE_AOMAP":"",H.bumpMap?"#define USE_BUMPMAP":"",H.normalMap?"#define USE_NORMALMAP":"",H.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",H.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",H.displacementMap?"#define USE_DISPLACEMENTMAP":"",H.emissiveMap?"#define USE_EMISSIVEMAP":"",H.anisotropy?"#define USE_ANISOTROPY":"",H.anisotropyMap?"#define USE_ANISOTROPYMAP":"",H.clearcoatMap?"#define USE_CLEARCOATMAP":"",H.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",H.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",H.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",H.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",H.specularMap?"#define USE_SPECULARMAP":"",H.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",H.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",H.roughnessMap?"#define USE_ROUGHNESSMAP":"",H.metalnessMap?"#define USE_METALNESSMAP":"",H.alphaMap?"#define USE_ALPHAMAP":"",H.alphaHash?"#define USE_ALPHAHASH":"",H.transmission?"#define USE_TRANSMISSION":"",H.transmissionMap?"#define USE_TRANSMISSIONMAP":"",H.thicknessMap?"#define USE_THICKNESSMAP":"",H.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",H.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",H.mapUv?"#define MAP_UV "+H.mapUv:"",H.alphaMapUv?"#define ALPHAMAP_UV "+H.alphaMapUv:"",H.lightMapUv?"#define LIGHTMAP_UV "+H.lightMapUv:"",H.aoMapUv?"#define AOMAP_UV "+H.aoMapUv:"",H.emissiveMapUv?"#define EMISSIVEMAP_UV "+H.emissiveMapUv:"",H.bumpMapUv?"#define BUMPMAP_UV "+H.bumpMapUv:"",H.normalMapUv?"#define NORMALMAP_UV "+H.normalMapUv:"",H.displacementMapUv?"#define DISPLACEMENTMAP_UV "+H.displacementMapUv:"",H.metalnessMapUv?"#define METALNESSMAP_UV "+H.metalnessMapUv:"",H.roughnessMapUv?"#define ROUGHNESSMAP_UV "+H.roughnessMapUv:"",H.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+H.anisotropyMapUv:"",H.clearcoatMapUv?"#define CLEARCOATMAP_UV "+H.clearcoatMapUv:"",H.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+H.clearcoatNormalMapUv:"",H.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+H.clearcoatRoughnessMapUv:"",H.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+H.iridescenceMapUv:"",H.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+H.iridescenceThicknessMapUv:"",H.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+H.sheenColorMapUv:"",H.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+H.sheenRoughnessMapUv:"",H.specularMapUv?"#define SPECULARMAP_UV "+H.specularMapUv:"",H.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+H.specularColorMapUv:"",H.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+H.specularIntensityMapUv:"",H.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+H.transmissionMapUv:"",H.thicknessMapUv?"#define THICKNESSMAP_UV "+H.thicknessMapUv:"",H.vertexTangents&&H.flatShading===!1?"#define USE_TANGENT":"",H.vertexColors?"#define USE_COLOR":"",H.vertexAlphas?"#define USE_COLOR_ALPHA":"",H.vertexUv1s?"#define USE_UV1":"",H.vertexUv2s?"#define USE_UV2":"",H.vertexUv3s?"#define USE_UV3":"",H.pointsUvs?"#define USE_POINTS_UV":"",H.flatShading?"#define FLAT_SHADED":"",H.skinning?"#define USE_SKINNING":"",H.morphTargets?"#define USE_MORPHTARGETS":"",H.morphNormals&&H.flatShading===!1?"#define USE_MORPHNORMALS":"",H.morphColors?"#define USE_MORPHCOLORS":"",H.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+H.morphTextureStride:"",H.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+H.morphTargetsCount:"",H.doubleSided?"#define DOUBLE_SIDED":"",H.flipSided?"#define FLIP_SIDED":"",H.shadowMapEnabled?"#define USE_SHADOWMAP":"",H.shadowMapEnabled?"#define "+K:"",H.sizeAttenuation?"#define USE_SIZEATTENUATION":"",H.numLightProbes>0?"#define USE_LIGHT_PROBES":"",H.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",H.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(U7).join(`
`),O=[YQ(H),"#define SHADER_TYPE "+H.shaderType,"#define SHADER_NAME "+H.shaderName,R,H.useFog&&H.fog?"#define USE_FOG":"",H.useFog&&H.fogExp2?"#define FOG_EXP2":"",H.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",H.map?"#define USE_MAP":"",H.matcap?"#define USE_MATCAP":"",H.envMap?"#define USE_ENVMAP":"",H.envMap?"#define "+U:"",H.envMap?"#define "+E:"",H.envMap?"#define "+G:"",F?"#define CUBEUV_TEXEL_WIDTH "+F.texelWidth:"",F?"#define CUBEUV_TEXEL_HEIGHT "+F.texelHeight:"",F?"#define CUBEUV_MAX_MIP "+F.maxMip+".0":"",H.lightMap?"#define USE_LIGHTMAP":"",H.aoMap?"#define USE_AOMAP":"",H.bumpMap?"#define USE_BUMPMAP":"",H.normalMap?"#define USE_NORMALMAP":"",H.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",H.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",H.emissiveMap?"#define USE_EMISSIVEMAP":"",H.anisotropy?"#define USE_ANISOTROPY":"",H.anisotropyMap?"#define USE_ANISOTROPYMAP":"",H.clearcoat?"#define USE_CLEARCOAT":"",H.clearcoatMap?"#define USE_CLEARCOATMAP":"",H.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",H.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",H.dispersion?"#define USE_DISPERSION":"",H.iridescence?"#define USE_IRIDESCENCE":"",H.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",H.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",H.specularMap?"#define USE_SPECULARMAP":"",H.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",H.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",H.roughnessMap?"#define USE_ROUGHNESSMAP":"",H.metalnessMap?"#define USE_METALNESSMAP":"",H.alphaMap?"#define USE_ALPHAMAP":"",H.alphaTest?"#define USE_ALPHATEST":"",H.alphaHash?"#define USE_ALPHAHASH":"",H.sheen?"#define USE_SHEEN":"",H.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",H.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",H.transmission?"#define USE_TRANSMISSION":"",H.transmissionMap?"#define USE_TRANSMISSIONMAP":"",H.thicknessMap?"#define USE_THICKNESSMAP":"",H.vertexTangents&&H.flatShading===!1?"#define USE_TANGENT":"",H.vertexColors||H.instancingColor||H.batchingColor?"#define USE_COLOR":"",H.vertexAlphas?"#define USE_COLOR_ALPHA":"",H.vertexUv1s?"#define USE_UV1":"",H.vertexUv2s?"#define USE_UV2":"",H.vertexUv3s?"#define USE_UV3":"",H.pointsUvs?"#define USE_POINTS_UV":"",H.gradientMap?"#define USE_GRADIENTMAP":"",H.flatShading?"#define FLAT_SHADED":"",H.doubleSided?"#define DOUBLE_SIDED":"",H.flipSided?"#define FLIP_SIDED":"",H.shadowMapEnabled?"#define USE_SHADOWMAP":"",H.shadowMapEnabled?"#define "+K:"",H.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",H.numLightProbes>0?"#define USE_LIGHT_PROBES":"",H.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",H.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",H.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",H.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",H.toneMapping!==G6?"#define TONE_MAPPING":"",H.toneMapping!==G6?u0.tonemapping_pars_fragment:"",H.toneMapping!==G6?TG("toneMapping",H.toneMapping):"",H.dithering?"#define DITHERING":"",H.opaque?"#define OPAQUE":"",u0.colorspace_pars_fragment,AG("linearToOutputTexel",H.outputColorSpace),SG(),H.useDepthPacking?"#define DEPTH_PACKING "+H.depthPacking:"",`
`].filter(U7).join(`
`);if(Y=SH(Y),Y=ZQ(Y,H),Y=WQ(Y,H),X=SH(X),X=ZQ(X,H),X=WQ(X,H),Y=QQ(Y),X=QQ(X),H.isRawShaderMaterial!==!0)w=`#version 300 es
`,N=[q,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+N,O=["#define varying in",H.glslVersion===r$?"":"layout(location = 0) out highp vec4 pc_fragColor;",H.glslVersion===r$?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+O;let L=w+N+Y,A=w+O+X,_=JQ(W,W.VERTEX_SHADER,L),V=JQ(W,W.FRAGMENT_SHADER,A);if(W.attachShader(M,_),W.attachShader(M,V),H.index0AttributeName!==void 0)W.bindAttribLocation(M,0,H.index0AttributeName);else if(H.morphTargets===!0)W.bindAttribLocation(M,0,"position");W.linkProgram(M);function P(f){if(J.debug.checkShaderErrors){let g=W.getProgramInfoLog(M).trim(),c=W.getShaderInfoLog(_).trim(),m=W.getShaderInfoLog(V).trim(),r=!0,l=!0;if(W.getProgramParameter(M,W.LINK_STATUS)===!1)if(r=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(W,M,_,V);else{let t=HQ(W,_,"vertex"),p=HQ(W,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+W.getError()+" - VALIDATE_STATUS "+W.getProgramParameter(M,W.VALIDATE_STATUS)+`

Material Name: `+f.name+`
Material Type: `+f.type+`

Program Info Log: `+g+`
`+t+`
`+p)}else if(g!=="")console.warn("THREE.WebGLProgram: Program Info Log:",g);else if(c===""||m==="")l=!1;if(l)f.diagnostics={runnable:r,programLog:g,vertexShader:{log:c,prefix:N},fragmentShader:{log:m,prefix:O}}}W.deleteShader(_),W.deleteShader(V),u=new G7(W,M),z=fG(W,M)}let u;this.getUniforms=function(){if(u===void 0)P(this);return u};let z;this.getAttributes=function(){if(z===void 0)P(this);return z};let C=H.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(C===!1)C=W.getProgramParameter(M,IG);return C},this.destroy=function(){Z.releaseStatesOfProgram(this),W.deleteProgram(M),this.program=void 0},this.type=H.shaderType,this.name=H.shaderName,this.id=wG++,this.cacheKey=$,this.usedTimes=1,this.program=M,this.vertexShader=_,this.fragmentShader=V,this}var cG=0;class MQ{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J){let{vertexShader:$,fragmentShader:H}=J,Z=this._getShaderStage($),W=this._getShaderStage(H),Q=this._getShaderCacheForMaterial(J);if(Q.has(Z)===!1)Q.add(Z),Z.usedTimes++;if(Q.has(W)===!1)Q.add(W),W.usedTimes++;return this}remove(J){let $=this.materialCache.get(J);for(let H of $)if(H.usedTimes--,H.usedTimes===0)this.shaderCache.delete(H.code);return this.materialCache.delete(J),this}getVertexShaderID(J){return this._getShaderStage(J.vertexShader).id}getFragmentShaderID(J){return this._getShaderStage(J.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let $=this.materialCache,H=$.get(J);if(H===void 0)H=new Set,$.set(J,H);return H}_getShaderStage(J){let $=this.shaderCache,H=$.get(J);if(H===void 0)H=new kQ(J),$.set(J,H);return H}}class kQ{constructor(J){this.id=cG++,this.code=J,this.usedTimes=0}}function nG(J,$,H,Z,W,Q,Y){let X=new XJ,K=new MQ,U=new Set,E=[],G=W.logarithmicDepthBuffer,F=W.vertexTextures,q=W.precision,R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(z){if(U.add(z),z===0)return"uv";return`uv${z}`}function N(z,C,f,g,c){let m=g.fog,r=c.geometry,l=z.isMeshStandardMaterial?g.environment:null,t=(z.isMeshStandardMaterial?H:$).get(z.envMap||l),p=!!t&&t.mapping===o9?t.image.height:null,X0=R[z.type];if(z.precision!==null){if(q=W.getMaxPrecision(z.precision),q!==z.precision)console.warn("THREE.WebGLProgram.getParameters:",z.precision,"not supported, using",q,"instead.")}let J0=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,w0=J0!==void 0?J0.length:0,g0=0;if(r.morphAttributes.position!==void 0)g0=1;if(r.morphAttributes.normal!==void 0)g0=2;if(r.morphAttributes.color!==void 0)g0=3;let n,H0,D0,k0;if(X0){let r0=H6[X0];n=r0.vertexShader,H0=r0.fragmentShader}else n=z.vertexShader,H0=z.fragmentShader,K.update(z),D0=K.getVertexShaderID(z),k0=K.getFragmentShaderID(z);let W0=J.getRenderTarget(),z0=J.state.buffers.depth.getReversed(),b=c.isInstancedMesh===!0,A0=c.isBatchedMesh===!0,n0=!!z.map,V0=!!z.matcap,B=!!t,l0=!!z.aoMap,P0=!!z.lightMap,T0=!!z.bumpMap,Y0=!!z.normalMap,o0=!!z.displacementMap,M0=!!z.emissiveMap,B0=!!z.metalnessMap,I=!!z.roughnessMap,D=z.anisotropy>0,h=z.clearcoat>0,o=z.dispersion>0,a=z.iridescence>0,d=z.sheen>0,I0=z.transmission>0,K0=D&&!!z.anisotropyMap,O0=h&&!!z.clearcoatMap,v0=h&&!!z.clearcoatNormalMap,Z0=h&&!!z.clearcoatRoughnessMap,F0=a&&!!z.iridescenceMap,c0=a&&!!z.iridescenceThicknessMap,_0=d&&!!z.sheenColorMap,q0=d&&!!z.sheenRoughnessMap,b0=!!z.specularMap,m0=!!z.specularColorMap,Y8=!!z.specularIntensityMap,S=I0&&!!z.transmissionMap,$0=I0&&!!z.thicknessMap,s=!!z.gradientMap,i=!!z.alphaMap,E0=z.alphaTest>0,G0=!!z.alphaHash,p0=!!z.extensions,X8=G6;if(z.toneMapped){if(W0===null||W0.isXRRenderTarget===!0)X8=J.toneMapping}let M8={shaderID:X0,shaderType:z.type,shaderName:z.name,vertexShader:n,fragmentShader:H0,defines:z.defines,customVertexShaderID:D0,customFragmentShaderID:k0,isRawShaderMaterial:z.isRawShaderMaterial===!0,glslVersion:z.glslVersion,precision:q,batching:A0,batchingColor:A0&&c._colorsTexture!==null,instancing:b,instancingColor:b&&c.instanceColor!==null,instancingMorph:b&&c.morphTexture!==null,supportsVertexTextures:F,outputColorSpace:W0===null?J.outputColorSpace:W0.isXRRenderTarget===!0?W0.texture.colorSpace:J7,alphaToCoverage:!!z.alphaToCoverage,map:n0,matcap:V0,envMap:B,envMapMode:B&&t.mapping,envMapCubeUVHeight:p,aoMap:l0,lightMap:P0,bumpMap:T0,normalMap:Y0,displacementMap:F&&o0,emissiveMap:M0,normalMapObjectSpace:Y0&&z.normalMapType===CW,normalMapTangentSpace:Y0&&z.normalMapType===zW,metalnessMap:B0,roughnessMap:I,anisotropy:D,anisotropyMap:K0,clearcoat:h,clearcoatMap:O0,clearcoatNormalMap:v0,clearcoatRoughnessMap:Z0,dispersion:o,iridescence:a,iridescenceMap:F0,iridescenceThicknessMap:c0,sheen:d,sheenColorMap:_0,sheenRoughnessMap:q0,specularMap:b0,specularColorMap:m0,specularIntensityMap:Y8,transmission:I0,transmissionMap:S,thicknessMap:$0,gradientMap:s,opaque:z.transparent===!1&&z.blending===s9&&z.alphaToCoverage===!1,alphaMap:i,alphaTest:E0,alphaHash:G0,combine:z.combine,mapUv:n0&&M(z.map.channel),aoMapUv:l0&&M(z.aoMap.channel),lightMapUv:P0&&M(z.lightMap.channel),bumpMapUv:T0&&M(z.bumpMap.channel),normalMapUv:Y0&&M(z.normalMap.channel),displacementMapUv:o0&&M(z.displacementMap.channel),emissiveMapUv:M0&&M(z.emissiveMap.channel),metalnessMapUv:B0&&M(z.metalnessMap.channel),roughnessMapUv:I&&M(z.roughnessMap.channel),anisotropyMapUv:K0&&M(z.anisotropyMap.channel),clearcoatMapUv:O0&&M(z.clearcoatMap.channel),clearcoatNormalMapUv:v0&&M(z.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z0&&M(z.clearcoatRoughnessMap.channel),iridescenceMapUv:F0&&M(z.iridescenceMap.channel),iridescenceThicknessMapUv:c0&&M(z.iridescenceThicknessMap.channel),sheenColorMapUv:_0&&M(z.sheenColorMap.channel),sheenRoughnessMapUv:q0&&M(z.sheenRoughnessMap.channel),specularMapUv:b0&&M(z.specularMap.channel),specularColorMapUv:m0&&M(z.specularColorMap.channel),specularIntensityMapUv:Y8&&M(z.specularIntensityMap.channel),transmissionMapUv:S&&M(z.transmissionMap.channel),thicknessMapUv:$0&&M(z.thicknessMap.channel),alphaMapUv:i&&M(z.alphaMap.channel),vertexTangents:!!r.attributes.tangent&&(Y0||D),vertexColors:z.vertexColors,vertexAlphas:z.vertexColors===!0&&!!r.attributes.color&&r.attributes.color.itemSize===4,pointsUvs:c.isPoints===!0&&!!r.attributes.uv&&(n0||i),fog:!!m,useFog:z.fog===!0,fogExp2:!!m&&m.isFogExp2,flatShading:z.flatShading===!0,sizeAttenuation:z.sizeAttenuation===!0,logarithmicDepthBuffer:G,reverseDepthBuffer:z0,skinning:c.isSkinnedMesh===!0,morphTargets:r.morphAttributes.position!==void 0,morphNormals:r.morphAttributes.normal!==void 0,morphColors:r.morphAttributes.color!==void 0,morphTargetsCount:w0,morphTextureStride:g0,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:Y.numPlanes,numClipIntersection:Y.numIntersection,dithering:z.dithering,shadowMapEnabled:J.shadowMap.enabled&&f.length>0,shadowMapType:J.shadowMap.type,toneMapping:X8,decodeVideoTexture:n0&&z.map.isVideoTexture===!0&&i0.getTransfer(z.map.colorSpace)===W8,decodeVideoTextureEmissive:M0&&z.emissiveMap.isVideoTexture===!0&&i0.getTransfer(z.emissiveMap.colorSpace)===W8,premultipliedAlpha:z.premultipliedAlpha,doubleSided:z.side===t8,flipSided:z.side===A8,useDepthPacking:z.depthPacking>=0,depthPacking:z.depthPacking||0,index0AttributeName:z.index0AttributeName,extensionClipCullDistance:p0&&z.extensions.clipCullDistance===!0&&Z.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(p0&&z.extensions.multiDraw===!0||A0)&&Z.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:Z.has("KHR_parallel_shader_compile"),customProgramCacheKey:z.customProgramCacheKey()};return M8.vertexUv1s=U.has(1),M8.vertexUv2s=U.has(2),M8.vertexUv3s=U.has(3),U.clear(),M8}function O(z){let C=[];if(z.shaderID)C.push(z.shaderID);else C.push(z.customVertexShaderID),C.push(z.customFragmentShaderID);if(z.defines!==void 0)for(let f in z.defines)C.push(f),C.push(z.defines[f]);if(z.isRawShaderMaterial===!1)w(C,z),L(C,z),C.push(J.outputColorSpace);return C.push(z.customProgramCacheKey),C.join()}function w(z,C){z.push(C.precision),z.push(C.outputColorSpace),z.push(C.envMapMode),z.push(C.envMapCubeUVHeight),z.push(C.mapUv),z.push(C.alphaMapUv),z.push(C.lightMapUv),z.push(C.aoMapUv),z.push(C.bumpMapUv),z.push(C.normalMapUv),z.push(C.displacementMapUv),z.push(C.emissiveMapUv),z.push(C.metalnessMapUv),z.push(C.roughnessMapUv),z.push(C.anisotropyMapUv),z.push(C.clearcoatMapUv),z.push(C.clearcoatNormalMapUv),z.push(C.clearcoatRoughnessMapUv),z.push(C.iridescenceMapUv),z.push(C.iridescenceThicknessMapUv),z.push(C.sheenColorMapUv),z.push(C.sheenRoughnessMapUv),z.push(C.specularMapUv),z.push(C.specularColorMapUv),z.push(C.specularIntensityMapUv),z.push(C.transmissionMapUv),z.push(C.thicknessMapUv),z.push(C.combine),z.push(C.fogExp2),z.push(C.sizeAttenuation),z.push(C.morphTargetsCount),z.push(C.morphAttributeCount),z.push(C.numDirLights),z.push(C.numPointLights),z.push(C.numSpotLights),z.push(C.numSpotLightMaps),z.push(C.numHemiLights),z.push(C.numRectAreaLights),z.push(C.numDirLightShadows),z.push(C.numPointLightShadows),z.push(C.numSpotLightShadows),z.push(C.numSpotLightShadowsWithMaps),z.push(C.numLightProbes),z.push(C.shadowMapType),z.push(C.toneMapping),z.push(C.numClippingPlanes),z.push(C.numClipIntersection),z.push(C.depthPacking)}function L(z,C){if(X.disableAll(),C.supportsVertexTextures)X.enable(0);if(C.instancing)X.enable(1);if(C.instancingColor)X.enable(2);if(C.instancingMorph)X.enable(3);if(C.matcap)X.enable(4);if(C.envMap)X.enable(5);if(C.normalMapObjectSpace)X.enable(6);if(C.normalMapTangentSpace)X.enable(7);if(C.clearcoat)X.enable(8);if(C.iridescence)X.enable(9);if(C.alphaTest)X.enable(10);if(C.vertexColors)X.enable(11);if(C.vertexAlphas)X.enable(12);if(C.vertexUv1s)X.enable(13);if(C.vertexUv2s)X.enable(14);if(C.vertexUv3s)X.enable(15);if(C.vertexTangents)X.enable(16);if(C.anisotropy)X.enable(17);if(C.alphaHash)X.enable(18);if(C.batching)X.enable(19);if(C.dispersion)X.enable(20);if(C.batchingColor)X.enable(21);if(z.push(X.mask),X.disableAll(),C.fog)X.enable(0);if(C.useFog)X.enable(1);if(C.flatShading)X.enable(2);if(C.logarithmicDepthBuffer)X.enable(3);if(C.reverseDepthBuffer)X.enable(4);if(C.skinning)X.enable(5);if(C.morphTargets)X.enable(6);if(C.morphNormals)X.enable(7);if(C.morphColors)X.enable(8);if(C.premultipliedAlpha)X.enable(9);if(C.shadowMapEnabled)X.enable(10);if(C.doubleSided)X.enable(11);if(C.flipSided)X.enable(12);if(C.useDepthPacking)X.enable(13);if(C.dithering)X.enable(14);if(C.transmission)X.enable(15);if(C.sheen)X.enable(16);if(C.opaque)X.enable(17);if(C.pointsUvs)X.enable(18);if(C.decodeVideoTexture)X.enable(19);if(C.decodeVideoTextureEmissive)X.enable(20);if(C.alphaToCoverage)X.enable(21);z.push(X.mask)}function A(z){let C=R[z.type],f;if(C){let g=H6[C];f=yW.clone(g.uniforms)}else f=z.uniforms;return f}function _(z,C){let f;for(let g=0,c=E.length;g<c;g++){let m=E[g];if(m.cacheKey===C){f=m,++f.usedTimes;break}}if(f===void 0)f=new dG(J,C,z,Q),E.push(f);return f}function V(z){if(--z.usedTimes===0){let C=E.indexOf(z);E[C]=E[E.length-1],E.pop(),z.destroy()}}function P(z){K.remove(z)}function u(){K.dispose()}return{getParameters:N,getProgramCacheKey:O,getUniforms:A,acquireProgram:_,releaseProgram:V,releaseShaderCache:P,programs:E,dispose:u}}function sG(){let J=new WeakMap;function $(Y){return J.has(Y)}function H(Y){let X=J.get(Y);if(X===void 0)X={},J.set(Y,X);return X}function Z(Y){J.delete(Y)}function W(Y,X,K){J.get(Y)[X]=K}function Q(){J=new WeakMap}return{has:$,get:H,remove:Z,update:W,dispose:Q}}function iG(J,$){if(J.groupOrder!==$.groupOrder)return J.groupOrder-$.groupOrder;else if(J.renderOrder!==$.renderOrder)return J.renderOrder-$.renderOrder;else if(J.material.id!==$.material.id)return J.material.id-$.material.id;else if(J.z!==$.z)return J.z-$.z;else return J.id-$.id}function XQ(J,$){if(J.groupOrder!==$.groupOrder)return J.groupOrder-$.groupOrder;else if(J.renderOrder!==$.renderOrder)return J.renderOrder-$.renderOrder;else if(J.z!==$.z)return $.z-J.z;else return J.id-$.id}function KQ(){let J=[],$=0,H=[],Z=[],W=[];function Q(){$=0,H.length=0,Z.length=0,W.length=0}function Y(G,F,q,R,M,N){let O=J[$];if(O===void 0)O={id:G.id,object:G,geometry:F,material:q,groupOrder:R,renderOrder:G.renderOrder,z:M,group:N},J[$]=O;else O.id=G.id,O.object=G,O.geometry=F,O.material=q,O.groupOrder=R,O.renderOrder=G.renderOrder,O.z=M,O.group=N;return $++,O}function X(G,F,q,R,M,N){let O=Y(G,F,q,R,M,N);if(q.transmission>0)Z.push(O);else if(q.transparent===!0)W.push(O);else H.push(O)}function K(G,F,q,R,M,N){let O=Y(G,F,q,R,M,N);if(q.transmission>0)Z.unshift(O);else if(q.transparent===!0)W.unshift(O);else H.unshift(O)}function U(G,F){if(H.length>1)H.sort(G||iG);if(Z.length>1)Z.sort(F||XQ);if(W.length>1)W.sort(F||XQ)}function E(){for(let G=$,F=J.length;G<F;G++){let q=J[G];if(q.id===null)break;q.id=null,q.object=null,q.geometry=null,q.material=null,q.group=null}}return{opaque:H,transmissive:Z,transparent:W,init:Q,push:X,unshift:K,finish:E,sort:U}}function oG(){let J=new WeakMap;function $(Z,W){let Q=J.get(Z),Y;if(Q===void 0)Y=new KQ,J.set(Z,[Y]);else if(W>=Q.length)Y=new KQ,Q.push(Y);else Y=Q[W];return Y}function H(){J=new WeakMap}return{get:$,dispose:H}}function aG(){let J={};return{get:function($){if(J[$.id]!==void 0)return J[$.id];let H;switch($.type){case"DirectionalLight":H={direction:new T,color:new x0};break;case"SpotLight":H={position:new T,direction:new T,color:new x0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":H={position:new T,color:new x0,distance:0,decay:0};break;case"HemisphereLight":H={direction:new T,skyColor:new x0,groundColor:new x0};break;case"RectAreaLight":H={color:new x0,position:new T,halfWidth:new T,halfHeight:new T};break}return J[$.id]=H,H}}}function rG(){let J={};return{get:function($){if(J[$.id]!==void 0)return J[$.id];let H;switch($.type){case"DirectionalLight":H={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new S0};break;case"SpotLight":H={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new S0};break;case"PointLight":H={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new S0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[$.id]=H,H}}}var tG=0;function eG(J,$){return($.castShadow?2:0)-(J.castShadow?2:0)+($.map?1:0)-(J.map?1:0)}function J1(J){let $=new aG,H=rG(),Z={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)Z.probe.push(new T);let W=new T,Q=new Z8,Y=new Z8;function X(U){let E=0,G=0,F=0;for(let z=0;z<9;z++)Z.probe[z].set(0,0,0);let q=0,R=0,M=0,N=0,O=0,w=0,L=0,A=0,_=0,V=0,P=0;U.sort(eG);for(let z=0,C=U.length;z<C;z++){let f=U[z],g=f.color,c=f.intensity,m=f.distance,r=f.shadow&&f.shadow.map?f.shadow.map.texture:null;if(f.isAmbientLight)E+=g.r*c,G+=g.g*c,F+=g.b*c;else if(f.isLightProbe){for(let l=0;l<9;l++)Z.probe[l].addScaledVector(f.sh.coefficients[l],c);P++}else if(f.isDirectionalLight){let l=$.get(f);if(l.color.copy(f.color).multiplyScalar(f.intensity),f.castShadow){let t=f.shadow,p=H.get(f);p.shadowIntensity=t.intensity,p.shadowBias=t.bias,p.shadowNormalBias=t.normalBias,p.shadowRadius=t.radius,p.shadowMapSize=t.mapSize,Z.directionalShadow[q]=p,Z.directionalShadowMap[q]=r,Z.directionalShadowMatrix[q]=f.shadow.matrix,w++}Z.directional[q]=l,q++}else if(f.isSpotLight){let l=$.get(f);l.position.setFromMatrixPosition(f.matrixWorld),l.color.copy(g).multiplyScalar(c),l.distance=m,l.coneCos=Math.cos(f.angle),l.penumbraCos=Math.cos(f.angle*(1-f.penumbra)),l.decay=f.decay,Z.spot[M]=l;let t=f.shadow;if(f.map){if(Z.spotLightMap[_]=f.map,_++,t.updateMatrices(f),f.castShadow)V++}if(Z.spotLightMatrix[M]=t.matrix,f.castShadow){let p=H.get(f);p.shadowIntensity=t.intensity,p.shadowBias=t.bias,p.shadowNormalBias=t.normalBias,p.shadowRadius=t.radius,p.shadowMapSize=t.mapSize,Z.spotShadow[M]=p,Z.spotShadowMap[M]=r,A++}M++}else if(f.isRectAreaLight){let l=$.get(f);l.color.copy(g).multiplyScalar(c),l.halfWidth.set(f.width*0.5,0,0),l.halfHeight.set(0,f.height*0.5,0),Z.rectArea[N]=l,N++}else if(f.isPointLight){let l=$.get(f);if(l.color.copy(f.color).multiplyScalar(f.intensity),l.distance=f.distance,l.decay=f.decay,f.castShadow){let t=f.shadow,p=H.get(f);p.shadowIntensity=t.intensity,p.shadowBias=t.bias,p.shadowNormalBias=t.normalBias,p.shadowRadius=t.radius,p.shadowMapSize=t.mapSize,p.shadowCameraNear=t.camera.near,p.shadowCameraFar=t.camera.far,Z.pointShadow[R]=p,Z.pointShadowMap[R]=r,Z.pointShadowMatrix[R]=f.shadow.matrix,L++}Z.point[R]=l,R++}else if(f.isHemisphereLight){let l=$.get(f);l.skyColor.copy(f.color).multiplyScalar(c),l.groundColor.copy(f.groundColor).multiplyScalar(c),Z.hemi[O]=l,O++}}if(N>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=Q0.LTC_FLOAT_1,Z.rectAreaLTC2=Q0.LTC_FLOAT_2;else Z.rectAreaLTC1=Q0.LTC_HALF_1,Z.rectAreaLTC2=Q0.LTC_HALF_2;Z.ambient[0]=E,Z.ambient[1]=G,Z.ambient[2]=F;let u=Z.hash;if(u.directionalLength!==q||u.pointLength!==R||u.spotLength!==M||u.rectAreaLength!==N||u.hemiLength!==O||u.numDirectionalShadows!==w||u.numPointShadows!==L||u.numSpotShadows!==A||u.numSpotMaps!==_||u.numLightProbes!==P)Z.directional.length=q,Z.spot.length=M,Z.rectArea.length=N,Z.point.length=R,Z.hemi.length=O,Z.directionalShadow.length=w,Z.directionalShadowMap.length=w,Z.pointShadow.length=L,Z.pointShadowMap.length=L,Z.spotShadow.length=A,Z.spotShadowMap.length=A,Z.directionalShadowMatrix.length=w,Z.pointShadowMatrix.length=L,Z.spotLightMatrix.length=A+_-V,Z.spotLightMap.length=_,Z.numSpotLightShadowsWithMaps=V,Z.numLightProbes=P,u.directionalLength=q,u.pointLength=R,u.spotLength=M,u.rectAreaLength=N,u.hemiLength=O,u.numDirectionalShadows=w,u.numPointShadows=L,u.numSpotShadows=A,u.numSpotMaps=_,u.numLightProbes=P,Z.version=tG++}function K(U,E){let G=0,F=0,q=0,R=0,M=0,N=E.matrixWorldInverse;for(let O=0,w=U.length;O<w;O++){let L=U[O];if(L.isDirectionalLight){let A=Z.directional[G];A.direction.setFromMatrixPosition(L.matrixWorld),W.setFromMatrixPosition(L.target.matrixWorld),A.direction.sub(W),A.direction.transformDirection(N),G++}else if(L.isSpotLight){let A=Z.spot[q];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(N),A.direction.setFromMatrixPosition(L.matrixWorld),W.setFromMatrixPosition(L.target.matrixWorld),A.direction.sub(W),A.direction.transformDirection(N),q++}else if(L.isRectAreaLight){let A=Z.rectArea[R];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(N),Y.identity(),Q.copy(L.matrixWorld),Q.premultiply(N),Y.extractRotation(Q),A.halfWidth.set(L.width*0.5,0,0),A.halfHeight.set(0,L.height*0.5,0),A.halfWidth.applyMatrix4(Y),A.halfHeight.applyMatrix4(Y),R++}else if(L.isPointLight){let A=Z.point[F];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(N),F++}else if(L.isHemisphereLight){let A=Z.hemi[M];A.direction.setFromMatrixPosition(L.matrixWorld),A.direction.transformDirection(N),M++}}}return{setup:X,setupView:K,state:Z}}function UQ(J){let $=new J1(J),H=[],Z=[];function W(E){U.camera=E,H.length=0,Z.length=0}function Q(E){H.push(E)}function Y(E){Z.push(E)}function X(){$.setup(H)}function K(E){$.setupView(H,E)}let U={lightsArray:H,shadowsArray:Z,camera:null,lights:$,transmissionRenderTarget:{}};return{init:W,state:U,setupLights:X,setupLightsView:K,pushLight:Q,pushShadow:Y}}function $1(J){let $=new WeakMap;function H(W,Q=0){let Y=$.get(W),X;if(Y===void 0)X=new UQ(J),$.set(W,[X]);else if(Q>=Y.length)X=new UQ(J),Y.push(X);else X=Y[Q];return X}function Z(){$=new WeakMap}return{get:H,dispose:Z}}var H1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z1=`uniform sampler2D shadow_pass;
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
}`;function W1(J,$,H){let Z=new $7,W=new S0,Q=new S0,Y=new $8,X=new XH({depthPacking:LW}),K=new KH,U={},E=H.maxTextureSize,G={[M9]:A8,[A8]:M9,[t8]:t8},F=new J6({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new S0},radius:{value:4}},vertexShader:H1,fragmentShader:Z1}),q=F.clone();q.defines.HORIZONTAL_PASS=1;let R=new T8;R.setAttribute("position",new p8(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let M=new E8(R,F),N=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=N$;let O=this.type;this.render=function(V,P,u){if(N.enabled===!1)return;if(N.autoUpdate===!1&&N.needsUpdate===!1)return;if(V.length===0)return;let z=J.getRenderTarget(),C=J.getActiveCubeFace(),f=J.getActiveMipmapLevel(),g=J.state;g.setBlending(P6),g.buffers.color.setClear(1,1,1,1),g.buffers.depth.setTest(!0),g.setScissorTest(!1);let c=O!==r8&&this.type===r8,m=O===r8&&this.type!==r8;for(let r=0,l=V.length;r<l;r++){let t=V[r],p=t.shadow;if(p===void 0){console.warn("THREE.WebGLShadowMap:",t,"has no shadow.");continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;W.copy(p.mapSize);let X0=p.getFrameExtents();if(W.multiply(X0),Q.copy(p.mapSize),W.x>E||W.y>E){if(W.x>E)Q.x=Math.floor(E/X0.x),W.x=Q.x*X0.x,p.mapSize.x=Q.x;if(W.y>E)Q.y=Math.floor(E/X0.y),W.y=Q.y*X0.y,p.mapSize.y=Q.y}if(p.map===null||c===!0||m===!0){let w0=this.type!==r8?{minFilter:z9,magFilter:z9}:{};if(p.map!==null)p.map.dispose();p.map=new F6(W.x,W.y,w0),p.map.texture.name=t.name+".shadowMap",p.camera.updateProjectionMatrix()}J.setRenderTarget(p.map),J.clear();let J0=p.getViewportCount();for(let w0=0;w0<J0;w0++){let g0=p.getViewport(w0);Y.set(Q.x*g0.x,Q.y*g0.y,Q.x*g0.z,Q.y*g0.w),g.viewport(Y),p.updateMatrices(t,w0),Z=p.getFrustum(),A(P,u,p.camera,t,this.type)}if(p.isPointLightShadow!==!0&&this.type===r8)w(p,u);p.needsUpdate=!1}O=this.type,N.needsUpdate=!1,J.setRenderTarget(z,C,f)};function w(V,P){let u=$.update(M);if(F.defines.VSM_SAMPLES!==V.blurSamples)F.defines.VSM_SAMPLES=V.blurSamples,q.defines.VSM_SAMPLES=V.blurSamples,F.needsUpdate=!0,q.needsUpdate=!0;if(V.mapPass===null)V.mapPass=new F6(W.x,W.y);F.uniforms.shadow_pass.value=V.map.texture,F.uniforms.resolution.value=V.mapSize,F.uniforms.radius.value=V.radius,J.setRenderTarget(V.mapPass),J.clear(),J.renderBufferDirect(P,null,u,F,M,null),q.uniforms.shadow_pass.value=V.mapPass.texture,q.uniforms.resolution.value=V.mapSize,q.uniforms.radius.value=V.radius,J.setRenderTarget(V.map),J.clear(),J.renderBufferDirect(P,null,u,q,M,null)}function L(V,P,u,z){let C=null,f=u.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(f!==void 0)C=f;else if(C=u.isPointLight===!0?K:X,J.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let g=C.uuid,c=P.uuid,m=U[g];if(m===void 0)m={},U[g]=m;let r=m[c];if(r===void 0)r=C.clone(),m[c]=r,P.addEventListener("dispose",_);C=r}if(C.visible=P.visible,C.wireframe=P.wireframe,z===r8)C.side=P.shadowSide!==null?P.shadowSide:P.side;else C.side=P.shadowSide!==null?P.shadowSide:G[P.side];if(C.alphaMap=P.alphaMap,C.alphaTest=P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,u.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let g=J.properties.get(C);g.light=u}return C}function A(V,P,u,z,C){if(V.visible===!1)return;if(V.layers.test(P.layers)&&(V.isMesh||V.isLine||V.isPoints)){if((V.castShadow||V.receiveShadow&&C===r8)&&(!V.frustumCulled||Z.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(u.matrixWorldInverse,V.matrixWorld);let c=$.update(V),m=V.material;if(Array.isArray(m)){let r=c.groups;for(let l=0,t=r.length;l<t;l++){let p=r[l],X0=m[p.materialIndex];if(X0&&X0.visible){let J0=L(V,X0,z,C);V.onBeforeShadow(J,V,P,u,c,J0,p),J.renderBufferDirect(u,null,c,J0,V,p),V.onAfterShadow(J,V,P,u,c,J0,p)}}}else if(m.visible){let r=L(V,m,z,C);V.onBeforeShadow(J,V,P,u,c,r,null),J.renderBufferDirect(u,null,c,r,V,null),V.onAfterShadow(J,V,P,u,c,r,null)}}}let g=V.children;for(let c=0,m=g.length;c<m;c++)A(g[c],P,u,z,C)}function _(V){V.target.removeEventListener("dispose",_);for(let u in U){let z=U[u],C=V.target.uuid;if(C in z)z[C].dispose(),delete z[C]}}}var Q1={[l7]:m7,[d7]:s7,[c7]:i7,[i9]:n7,[m7]:l7,[s7]:d7,[i7]:c7,[n7]:i9};function Y1(J,$){function H(){let S=!1,$0=new $8,s=null,i=new $8(0,0,0,0);return{setMask:function(E0){if(s!==E0&&!S)J.colorMask(E0,E0,E0,E0),s=E0},setLocked:function(E0){S=E0},setClear:function(E0,G0,p0,X8,M8){if(M8===!0)E0*=X8,G0*=X8,p0*=X8;if($0.set(E0,G0,p0,X8),i.equals($0)===!1)J.clearColor(E0,G0,p0,X8),i.copy($0)},reset:function(){S=!1,s=null,i.set(-1,0,0,0)}}}function Z(){let S=!1,$0=!1,s=null,i=null,E0=null;return{setReversed:function(G0){if($0!==G0){let p0=$.get("EXT_clip_control");if($0)p0.clipControlEXT(p0.LOWER_LEFT_EXT,p0.ZERO_TO_ONE_EXT);else p0.clipControlEXT(p0.LOWER_LEFT_EXT,p0.NEGATIVE_ONE_TO_ONE_EXT);let X8=E0;E0=null,this.setClear(X8)}$0=G0},getReversed:function(){return $0},setTest:function(G0){if(G0)W0(J.DEPTH_TEST);else z0(J.DEPTH_TEST)},setMask:function(G0){if(s!==G0&&!S)J.depthMask(G0),s=G0},setFunc:function(G0){if($0)G0=Q1[G0];if(i!==G0){switch(G0){case l7:J.depthFunc(J.NEVER);break;case m7:J.depthFunc(J.ALWAYS);break;case d7:J.depthFunc(J.LESS);break;case i9:J.depthFunc(J.LEQUAL);break;case c7:J.depthFunc(J.EQUAL);break;case n7:J.depthFunc(J.GEQUAL);break;case s7:J.depthFunc(J.GREATER);break;case i7:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}i=G0}},setLocked:function(G0){S=G0},setClear:function(G0){if(E0!==G0){if($0)G0=1-G0;J.clearDepth(G0),E0=G0}},reset:function(){S=!1,s=null,i=null,E0=null,$0=!1}}}function W(){let S=!1,$0=null,s=null,i=null,E0=null,G0=null,p0=null,X8=null,M8=null;return{setTest:function(r0){if(!S)if(r0)W0(J.STENCIL_TEST);else z0(J.STENCIL_TEST)},setMask:function(r0){if($0!==r0&&!S)J.stencilMask(r0),$0=r0},setFunc:function(r0,Z6,a8){if(s!==r0||i!==Z6||E0!==a8)J.stencilFunc(r0,Z6,a8),s=r0,i=Z6,E0=a8},setOp:function(r0,Z6,a8){if(G0!==r0||p0!==Z6||X8!==a8)J.stencilOp(r0,Z6,a8),G0=r0,p0=Z6,X8=a8},setLocked:function(r0){S=r0},setClear:function(r0){if(M8!==r0)J.clearStencil(r0),M8=r0},reset:function(){S=!1,$0=null,s=null,i=null,E0=null,G0=null,p0=null,X8=null,M8=null}}}let Q=new H,Y=new Z,X=new W,K=new WeakMap,U=new WeakMap,E={},G={},F=new WeakMap,q=[],R=null,M=!1,N=null,O=null,w=null,L=null,A=null,_=null,V=null,P=new x0(0,0,0),u=0,z=!1,C=null,f=null,g=null,c=null,m=null,r=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),l=!1,t=0,p=J.getParameter(J.VERSION);if(p.indexOf("WebGL")!==-1)t=parseFloat(/^WebGL (\d)/.exec(p)[1]),l=t>=1;else if(p.indexOf("OpenGL ES")!==-1)t=parseFloat(/^OpenGL ES (\d)/.exec(p)[1]),l=t>=2;let X0=null,J0={},w0=J.getParameter(J.SCISSOR_BOX),g0=J.getParameter(J.VIEWPORT),n=new $8().fromArray(w0),H0=new $8().fromArray(g0);function D0(S,$0,s,i){let E0=new Uint8Array(4),G0=J.createTexture();J.bindTexture(S,G0),J.texParameteri(S,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(S,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let p0=0;p0<s;p0++)if(S===J.TEXTURE_3D||S===J.TEXTURE_2D_ARRAY)J.texImage3D($0,0,J.RGBA,1,1,i,0,J.RGBA,J.UNSIGNED_BYTE,E0);else J.texImage2D($0+p0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,E0);return G0}let k0={};k0[J.TEXTURE_2D]=D0(J.TEXTURE_2D,J.TEXTURE_2D,1),k0[J.TEXTURE_CUBE_MAP]=D0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),k0[J.TEXTURE_2D_ARRAY]=D0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),k0[J.TEXTURE_3D]=D0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),Q.setClear(0,0,0,1),Y.setClear(1),X.setClear(0),W0(J.DEPTH_TEST),Y.setFunc(i9),T0(!1),Y0(F$),W0(J.CULL_FACE),l0(P6);function W0(S){if(E[S]!==!0)J.enable(S),E[S]=!0}function z0(S){if(E[S]!==!1)J.disable(S),E[S]=!1}function b(S,$0){if(G[S]!==$0){if(J.bindFramebuffer(S,$0),G[S]=$0,S===J.DRAW_FRAMEBUFFER)G[J.FRAMEBUFFER]=$0;if(S===J.FRAMEBUFFER)G[J.DRAW_FRAMEBUFFER]=$0;return!0}return!1}function A0(S,$0){let s=q,i=!1;if(S){if(s=F.get($0),s===void 0)s=[],F.set($0,s);let E0=S.textures;if(s.length!==E0.length||s[0]!==J.COLOR_ATTACHMENT0){for(let G0=0,p0=E0.length;G0<p0;G0++)s[G0]=J.COLOR_ATTACHMENT0+G0;s.length=E0.length,i=!0}}else if(s[0]!==J.BACK)s[0]=J.BACK,i=!0;if(i)J.drawBuffers(s)}function n0(S){if(R!==S)return J.useProgram(S),R=S,!0;return!1}let V0={[k9]:J.FUNC_ADD,[jZ]:J.FUNC_SUBTRACT,[fZ]:J.FUNC_REVERSE_SUBTRACT};V0[xZ]=J.MIN,V0[hZ]=J.MAX;let B={[yZ]:J.ZERO,[vZ]:J.ONE,[bZ]:J.SRC_COLOR,[pZ]:J.SRC_ALPHA,[nZ]:J.SRC_ALPHA_SATURATE,[dZ]:J.DST_COLOR,[lZ]:J.DST_ALPHA,[gZ]:J.ONE_MINUS_SRC_COLOR,[uZ]:J.ONE_MINUS_SRC_ALPHA,[cZ]:J.ONE_MINUS_DST_COLOR,[mZ]:J.ONE_MINUS_DST_ALPHA,[sZ]:J.CONSTANT_COLOR,[iZ]:J.ONE_MINUS_CONSTANT_COLOR,[oZ]:J.CONSTANT_ALPHA,[aZ]:J.ONE_MINUS_CONSTANT_ALPHA};function l0(S,$0,s,i,E0,G0,p0,X8,M8,r0){if(S===P6){if(M===!0)z0(J.BLEND),M=!1;return}if(M===!1)W0(J.BLEND),M=!0;if(S!==_Z){if(S!==N||r0!==z){if(O!==k9||A!==k9)J.blendEquation(J.FUNC_ADD),O=k9,A=k9;if(r0)switch(S){case s9:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case O$:J.blendFunc(J.ONE,J.ONE);break;case q$:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case R$:J.blendFuncSeparate(J.ZERO,J.SRC_COLOR,J.ZERO,J.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case s9:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case O$:J.blendFunc(J.SRC_ALPHA,J.ONE);break;case q$:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case R$:J.blendFunc(J.ZERO,J.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}w=null,L=null,_=null,V=null,P.set(0,0,0),u=0,N=S,z=r0}return}if(E0=E0||$0,G0=G0||s,p0=p0||i,$0!==O||E0!==A)J.blendEquationSeparate(V0[$0],V0[E0]),O=$0,A=E0;if(s!==w||i!==L||G0!==_||p0!==V)J.blendFuncSeparate(B[s],B[i],B[G0],B[p0]),w=s,L=i,_=G0,V=p0;if(X8.equals(P)===!1||M8!==u)J.blendColor(X8.r,X8.g,X8.b,M8),P.copy(X8),u=M8;N=S,z=!1}function P0(S,$0){S.side===t8?z0(J.CULL_FACE):W0(J.CULL_FACE);let s=S.side===A8;if($0)s=!s;T0(s),S.blending===s9&&S.transparent===!1?l0(P6):l0(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),Y.setFunc(S.depthFunc),Y.setTest(S.depthTest),Y.setMask(S.depthWrite),Q.setMask(S.colorWrite);let i=S.stencilWrite;if(X.setTest(i),i)X.setMask(S.stencilWriteMask),X.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),X.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass);M0(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?W0(J.SAMPLE_ALPHA_TO_COVERAGE):z0(J.SAMPLE_ALPHA_TO_COVERAGE)}function T0(S){if(C!==S){if(S)J.frontFace(J.CW);else J.frontFace(J.CCW);C=S}}function Y0(S){if(S!==AZ){if(W0(J.CULL_FACE),S!==f)if(S===F$)J.cullFace(J.BACK);else if(S===TZ)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else z0(J.CULL_FACE);f=S}function o0(S){if(S!==g){if(l)J.lineWidth(S);g=S}}function M0(S,$0,s){if(S){if(W0(J.POLYGON_OFFSET_FILL),c!==$0||m!==s)J.polygonOffset($0,s),c=$0,m=s}else z0(J.POLYGON_OFFSET_FILL)}function B0(S){if(S)W0(J.SCISSOR_TEST);else z0(J.SCISSOR_TEST)}function I(S){if(S===void 0)S=J.TEXTURE0+r-1;if(X0!==S)J.activeTexture(S),X0=S}function D(S,$0,s){if(s===void 0)if(X0===null)s=J.TEXTURE0+r-1;else s=X0;let i=J0[s];if(i===void 0)i={type:void 0,texture:void 0},J0[s]=i;if(i.type!==S||i.texture!==$0){if(X0!==s)J.activeTexture(s),X0=s;J.bindTexture(S,$0||k0[S]),i.type=S,i.texture=$0}}function h(){let S=J0[X0];if(S!==void 0&&S.type!==void 0)J.bindTexture(S.type,null),S.type=void 0,S.texture=void 0}function o(){try{J.compressedTexImage2D.apply(J,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function a(){try{J.compressedTexImage3D.apply(J,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function d(){try{J.texSubImage2D.apply(J,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function I0(){try{J.texSubImage3D.apply(J,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function K0(){try{J.compressedTexSubImage2D.apply(J,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function O0(){try{J.compressedTexSubImage3D.apply(J,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function v0(){try{J.texStorage2D.apply(J,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Z0(){try{J.texStorage3D.apply(J,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function F0(){try{J.texImage2D.apply(J,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function c0(){try{J.texImage3D.apply(J,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function _0(S){if(n.equals(S)===!1)J.scissor(S.x,S.y,S.z,S.w),n.copy(S)}function q0(S){if(H0.equals(S)===!1)J.viewport(S.x,S.y,S.z,S.w),H0.copy(S)}function b0(S,$0){let s=U.get($0);if(s===void 0)s=new WeakMap,U.set($0,s);let i=s.get(S);if(i===void 0)i=J.getUniformBlockIndex($0,S.name),s.set(S,i)}function m0(S,$0){let i=U.get($0).get(S);if(K.get($0)!==i)J.uniformBlockBinding($0,i,S.__bindingPointIndex),K.set($0,i)}function Y8(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),Y.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),E={},X0=null,J0={},G={},F=new WeakMap,q=[],R=null,M=!1,N=null,O=null,w=null,L=null,A=null,_=null,V=null,P=new x0(0,0,0),u=0,z=!1,C=null,f=null,g=null,c=null,m=null,n.set(0,0,J.canvas.width,J.canvas.height),H0.set(0,0,J.canvas.width,J.canvas.height),Q.reset(),Y.reset(),X.reset()}return{buffers:{color:Q,depth:Y,stencil:X},enable:W0,disable:z0,bindFramebuffer:b,drawBuffers:A0,useProgram:n0,setBlending:l0,setMaterial:P0,setFlipSided:T0,setCullFace:Y0,setLineWidth:o0,setPolygonOffset:M0,setScissorTest:B0,activeTexture:I,bindTexture:D,unbindTexture:h,compressedTexImage2D:o,compressedTexImage3D:a,texImage2D:F0,texImage3D:c0,updateUBOMapping:b0,uniformBlockBinding:m0,texStorage2D:v0,texStorage3D:Z0,texSubImage2D:d,texSubImage3D:I0,compressedTexSubImage2D:K0,compressedTexSubImage3D:O0,scissor:_0,viewport:q0,reset:Y8}}function X1(J,$,H,Z,W,Q,Y){let X=$.has("WEBGL_multisampled_render_to_texture")?$.get("WEBGL_multisampled_render_to_texture"):null,K=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new S0,E=new WeakMap,G,F=new WeakMap,q=!1;try{q=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(I){}function R(I,D){return q?new OffscreenCanvas(I,D):D9("canvas")}function M(I,D,h){let o=1,a=B0(I);if(a.width>h||a.height>h)o=h/Math.max(a.width,a.height);if(o<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let d=Math.floor(o*a.width),I0=Math.floor(o*a.height);if(G===void 0)G=R(d,I0);let K0=D?R(d,I0):G;return K0.width=d,K0.height=I0,K0.getContext("2d").drawImage(I,0,0,d,I0),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+a.width+"x"+a.height+") to ("+d+"x"+I0+")."),K0}else{if("data"in I)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+a.width+"x"+a.height+").");return I}return I}function N(I){return I.generateMipmaps}function O(I){J.generateMipmap(I)}function w(I){if(I.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(I.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function L(I,D,h,o,a=!1){if(I!==null){if(J[I]!==void 0)return J[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let d=D;if(D===J.RED){if(h===J.FLOAT)d=J.R32F;if(h===J.HALF_FLOAT)d=J.R16F;if(h===J.UNSIGNED_BYTE)d=J.R8}if(D===J.RED_INTEGER){if(h===J.UNSIGNED_BYTE)d=J.R8UI;if(h===J.UNSIGNED_SHORT)d=J.R16UI;if(h===J.UNSIGNED_INT)d=J.R32UI;if(h===J.BYTE)d=J.R8I;if(h===J.SHORT)d=J.R16I;if(h===J.INT)d=J.R32I}if(D===J.RG){if(h===J.FLOAT)d=J.RG32F;if(h===J.HALF_FLOAT)d=J.RG16F;if(h===J.UNSIGNED_BYTE)d=J.RG8}if(D===J.RG_INTEGER){if(h===J.UNSIGNED_BYTE)d=J.RG8UI;if(h===J.UNSIGNED_SHORT)d=J.RG16UI;if(h===J.UNSIGNED_INT)d=J.RG32UI;if(h===J.BYTE)d=J.RG8I;if(h===J.SHORT)d=J.RG16I;if(h===J.INT)d=J.RG32I}if(D===J.RGB_INTEGER){if(h===J.UNSIGNED_BYTE)d=J.RGB8UI;if(h===J.UNSIGNED_SHORT)d=J.RGB16UI;if(h===J.UNSIGNED_INT)d=J.RGB32UI;if(h===J.BYTE)d=J.RGB8I;if(h===J.SHORT)d=J.RGB16I;if(h===J.INT)d=J.RGB32I}if(D===J.RGBA_INTEGER){if(h===J.UNSIGNED_BYTE)d=J.RGBA8UI;if(h===J.UNSIGNED_SHORT)d=J.RGBA16UI;if(h===J.UNSIGNED_INT)d=J.RGBA32UI;if(h===J.BYTE)d=J.RGBA8I;if(h===J.SHORT)d=J.RGBA16I;if(h===J.INT)d=J.RGBA32I}if(D===J.RGB){if(h===J.UNSIGNED_INT_5_9_9_9_REV)d=J.RGB9_E5}if(D===J.RGBA){let I0=a?o$:i0.getTransfer(o);if(h===J.FLOAT)d=J.RGBA32F;if(h===J.HALF_FLOAT)d=J.RGBA16F;if(h===J.UNSIGNED_BYTE)d=I0===W8?J.SRGB8_ALPHA8:J.RGBA8;if(h===J.UNSIGNED_SHORT_4_4_4_4)d=J.RGBA4;if(h===J.UNSIGNED_SHORT_5_5_5_1)d=J.RGB5_A1}if(d===J.R16F||d===J.R32F||d===J.RG16F||d===J.RG32F||d===J.RGBA16F||d===J.RGBA32F)$.get("EXT_color_buffer_float");return d}function A(I,D){let h;if(I){if(D===null||D===V9||D===I9)h=J.DEPTH24_STENCIL8;else if(D===T6)h=J.DEPTH32F_STENCIL8;else if(D===r9)h=J.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(D===null||D===V9||D===I9)h=J.DEPTH_COMPONENT24;else if(D===T6)h=J.DEPTH_COMPONENT32F;else if(D===r9)h=J.DEPTH_COMPONENT16;return h}function _(I,D){if(N(I)===!0||I.isFramebufferTexture&&I.minFilter!==z9&&I.minFilter!==p6)return Math.log2(Math.max(D.width,D.height))+1;else if(I.mipmaps!==void 0&&I.mipmaps.length>0)return I.mipmaps.length;else if(I.isCompressedTexture&&Array.isArray(I.image))return D.mipmaps.length;else return 1}function V(I){let D=I.target;if(D.removeEventListener("dispose",V),u(D),D.isVideoTexture)E.delete(D)}function P(I){let D=I.target;D.removeEventListener("dispose",P),C(D)}function u(I){let D=Z.get(I);if(D.__webglInit===void 0)return;let h=I.source,o=F.get(h);if(o){let a=o[D.__cacheKey];if(a.usedTimes--,a.usedTimes===0)z(I);if(Object.keys(o).length===0)F.delete(h)}Z.remove(I)}function z(I){let D=Z.get(I);J.deleteTexture(D.__webglTexture);let h=I.source,o=F.get(h);delete o[D.__cacheKey],Y.memory.textures--}function C(I){let D=Z.get(I);if(I.depthTexture)I.depthTexture.dispose(),Z.remove(I.depthTexture);if(I.isWebGLCubeRenderTarget)for(let o=0;o<6;o++){if(Array.isArray(D.__webglFramebuffer[o]))for(let a=0;a<D.__webglFramebuffer[o].length;a++)J.deleteFramebuffer(D.__webglFramebuffer[o][a]);else J.deleteFramebuffer(D.__webglFramebuffer[o]);if(D.__webglDepthbuffer)J.deleteRenderbuffer(D.__webglDepthbuffer[o])}else{if(Array.isArray(D.__webglFramebuffer))for(let o=0;o<D.__webglFramebuffer.length;o++)J.deleteFramebuffer(D.__webglFramebuffer[o]);else J.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer)J.deleteRenderbuffer(D.__webglDepthbuffer);if(D.__webglMultisampledFramebuffer)J.deleteFramebuffer(D.__webglMultisampledFramebuffer);if(D.__webglColorRenderbuffer){for(let o=0;o<D.__webglColorRenderbuffer.length;o++)if(D.__webglColorRenderbuffer[o])J.deleteRenderbuffer(D.__webglColorRenderbuffer[o])}if(D.__webglDepthRenderbuffer)J.deleteRenderbuffer(D.__webglDepthRenderbuffer)}let h=I.textures;for(let o=0,a=h.length;o<a;o++){let d=Z.get(h[o]);if(d.__webglTexture)J.deleteTexture(d.__webglTexture),Y.memory.textures--;Z.remove(h[o])}Z.remove(I)}let f=0;function g(){f=0}function c(){let I=f;if(I>=W.maxTextures)console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+W.maxTextures);return f+=1,I}function m(I){let D=[];return D.push(I.wrapS),D.push(I.wrapT),D.push(I.wrapR||0),D.push(I.magFilter),D.push(I.minFilter),D.push(I.anisotropy),D.push(I.internalFormat),D.push(I.format),D.push(I.type),D.push(I.generateMipmaps),D.push(I.premultiplyAlpha),D.push(I.flipY),D.push(I.unpackAlignment),D.push(I.colorSpace),D.join()}function r(I,D){let h=Z.get(I);if(I.isVideoTexture)o0(I);if(I.isRenderTargetTexture===!1&&I.version>0&&h.__version!==I.version){let o=I.image;if(o===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(o.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H0(h,I,D);return}}H.bindTexture(J.TEXTURE_2D,h.__webglTexture,J.TEXTURE0+D)}function l(I,D){let h=Z.get(I);if(I.version>0&&h.__version!==I.version){H0(h,I,D);return}H.bindTexture(J.TEXTURE_2D_ARRAY,h.__webglTexture,J.TEXTURE0+D)}function t(I,D){let h=Z.get(I);if(I.version>0&&h.__version!==I.version){H0(h,I,D);return}H.bindTexture(J.TEXTURE_3D,h.__webglTexture,J.TEXTURE0+D)}function p(I,D){let h=Z.get(I);if(I.version>0&&h.__version!==I.version){D0(h,I,D);return}H.bindTexture(J.TEXTURE_CUBE_MAP,h.__webglTexture,J.TEXTURE0+D)}let X0={[YW]:J.REPEAT,[XW]:J.CLAMP_TO_EDGE,[KW]:J.MIRRORED_REPEAT},J0={[z9]:J.NEAREST,[UW]:J.NEAREST_MIPMAP_NEAREST,[a9]:J.NEAREST_MIPMAP_LINEAR,[p6]:J.LINEAR,[t7]:J.LINEAR_MIPMAP_NEAREST,[C9]:J.LINEAR_MIPMAP_LINEAR},w0={[VW]:J.NEVER,[TW]:J.ALWAYS,[IW]:J.LESS,[a$]:J.LEQUAL,[wW]:J.EQUAL,[AW]:J.GEQUAL,[BW]:J.GREATER,[PW]:J.NOTEQUAL};function g0(I,D){if(D.type===T6&&$.has("OES_texture_float_linear")===!1&&(D.magFilter===p6||D.magFilter===t7||D.magFilter===a9||D.magFilter===C9||D.minFilter===p6||D.minFilter===t7||D.minFilter===a9||D.minFilter===C9))console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(I,J.TEXTURE_WRAP_S,X0[D.wrapS]),J.texParameteri(I,J.TEXTURE_WRAP_T,X0[D.wrapT]),I===J.TEXTURE_3D||I===J.TEXTURE_2D_ARRAY)J.texParameteri(I,J.TEXTURE_WRAP_R,X0[D.wrapR]);if(J.texParameteri(I,J.TEXTURE_MAG_FILTER,J0[D.magFilter]),J.texParameteri(I,J.TEXTURE_MIN_FILTER,J0[D.minFilter]),D.compareFunction)J.texParameteri(I,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(I,J.TEXTURE_COMPARE_FUNC,w0[D.compareFunction]);if($.has("EXT_texture_filter_anisotropic")===!0){if(D.magFilter===z9)return;if(D.minFilter!==a9&&D.minFilter!==C9)return;if(D.type===T6&&$.has("OES_texture_float_linear")===!1)return;if(D.anisotropy>1||Z.get(D).__currentAnisotropy){let h=$.get("EXT_texture_filter_anisotropic");J.texParameterf(I,h.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,W.getMaxAnisotropy())),Z.get(D).__currentAnisotropy=D.anisotropy}}}function n(I,D){let h=!1;if(I.__webglInit===void 0)I.__webglInit=!0,D.addEventListener("dispose",V);let o=D.source,a=F.get(o);if(a===void 0)a={},F.set(o,a);let d=m(D);if(d!==I.__cacheKey){if(a[d]===void 0)a[d]={texture:J.createTexture(),usedTimes:0},Y.memory.textures++,h=!0;a[d].usedTimes++;let I0=a[I.__cacheKey];if(I0!==void 0){if(a[I.__cacheKey].usedTimes--,I0.usedTimes===0)z(D)}I.__cacheKey=d,I.__webglTexture=a[d].texture}return h}function H0(I,D,h){let o=J.TEXTURE_2D;if(D.isDataArrayTexture||D.isCompressedArrayTexture)o=J.TEXTURE_2D_ARRAY;if(D.isData3DTexture)o=J.TEXTURE_3D;let a=n(I,D),d=D.source;H.bindTexture(o,I.__webglTexture,J.TEXTURE0+h);let I0=Z.get(d);if(d.version!==I0.__version||a===!0){H.activeTexture(J.TEXTURE0+h);let K0=i0.getPrimaries(i0.workingColorSpace),O0=D.colorSpace===u6?null:i0.getPrimaries(D.colorSpace),v0=D.colorSpace===u6||K0===O0?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,D.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,D.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,v0);let Z0=M(D.image,!1,W.maxTextureSize);Z0=M0(D,Z0);let F0=Q.convert(D.format,D.colorSpace),c0=Q.convert(D.type),_0=L(D.internalFormat,F0,c0,D.colorSpace,D.isVideoTexture);g0(o,D);let q0,b0=D.mipmaps,m0=D.isVideoTexture!==!0,Y8=I0.__version===void 0||a===!0,S=d.dataReady,$0=_(D,Z0);if(D.isDepthTexture){if(_0=A(D.format===e9,D.type),Y8)if(m0)H.texStorage2D(J.TEXTURE_2D,1,_0,Z0.width,Z0.height);else H.texImage2D(J.TEXTURE_2D,0,_0,Z0.width,Z0.height,0,F0,c0,null)}else if(D.isDataTexture)if(b0.length>0){if(m0&&Y8)H.texStorage2D(J.TEXTURE_2D,$0,_0,b0[0].width,b0[0].height);for(let s=0,i=b0.length;s<i;s++)if(q0=b0[s],m0){if(S)H.texSubImage2D(J.TEXTURE_2D,s,0,0,q0.width,q0.height,F0,c0,q0.data)}else H.texImage2D(J.TEXTURE_2D,s,_0,q0.width,q0.height,0,F0,c0,q0.data);D.generateMipmaps=!1}else if(m0){if(Y8)H.texStorage2D(J.TEXTURE_2D,$0,_0,Z0.width,Z0.height);if(S)H.texSubImage2D(J.TEXTURE_2D,0,0,0,Z0.width,Z0.height,F0,c0,Z0.data)}else H.texImage2D(J.TEXTURE_2D,0,_0,Z0.width,Z0.height,0,F0,c0,Z0.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){if(m0&&Y8)H.texStorage3D(J.TEXTURE_2D_ARRAY,$0,_0,b0[0].width,b0[0].height,Z0.depth);for(let s=0,i=b0.length;s<i;s++)if(q0=b0[s],D.format!==e8)if(F0!==null)if(m0){if(S)if(D.layerUpdates.size>0){let E0=CH(q0.width,q0.height,D.format,D.type);for(let G0 of D.layerUpdates){let p0=q0.data.subarray(G0*E0/q0.data.BYTES_PER_ELEMENT,(G0+1)*E0/q0.data.BYTES_PER_ELEMENT);H.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,s,0,0,G0,q0.width,q0.height,1,F0,p0)}D.clearLayerUpdates()}else H.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,s,0,0,0,q0.width,q0.height,Z0.depth,F0,q0.data)}else H.compressedTexImage3D(J.TEXTURE_2D_ARRAY,s,_0,q0.width,q0.height,Z0.depth,0,q0.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(m0){if(S)H.texSubImage3D(J.TEXTURE_2D_ARRAY,s,0,0,0,q0.width,q0.height,Z0.depth,F0,c0,q0.data)}else H.texImage3D(J.TEXTURE_2D_ARRAY,s,_0,q0.width,q0.height,Z0.depth,0,F0,c0,q0.data)}else{if(m0&&Y8)H.texStorage2D(J.TEXTURE_2D,$0,_0,b0[0].width,b0[0].height);for(let s=0,i=b0.length;s<i;s++)if(q0=b0[s],D.format!==e8)if(F0!==null)if(m0){if(S)H.compressedTexSubImage2D(J.TEXTURE_2D,s,0,0,q0.width,q0.height,F0,q0.data)}else H.compressedTexImage2D(J.TEXTURE_2D,s,_0,q0.width,q0.height,0,q0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(m0){if(S)H.texSubImage2D(J.TEXTURE_2D,s,0,0,q0.width,q0.height,F0,c0,q0.data)}else H.texImage2D(J.TEXTURE_2D,s,_0,q0.width,q0.height,0,F0,c0,q0.data)}else if(D.isDataArrayTexture)if(m0){if(Y8)H.texStorage3D(J.TEXTURE_2D_ARRAY,$0,_0,Z0.width,Z0.height,Z0.depth);if(S)if(D.layerUpdates.size>0){let s=CH(Z0.width,Z0.height,D.format,D.type);for(let i of D.layerUpdates){let E0=Z0.data.subarray(i*s/Z0.data.BYTES_PER_ELEMENT,(i+1)*s/Z0.data.BYTES_PER_ELEMENT);H.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,i,Z0.width,Z0.height,1,F0,c0,E0)}D.clearLayerUpdates()}else H.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,Z0.width,Z0.height,Z0.depth,F0,c0,Z0.data)}else H.texImage3D(J.TEXTURE_2D_ARRAY,0,_0,Z0.width,Z0.height,Z0.depth,0,F0,c0,Z0.data);else if(D.isData3DTexture)if(m0){if(Y8)H.texStorage3D(J.TEXTURE_3D,$0,_0,Z0.width,Z0.height,Z0.depth);if(S)H.texSubImage3D(J.TEXTURE_3D,0,0,0,0,Z0.width,Z0.height,Z0.depth,F0,c0,Z0.data)}else H.texImage3D(J.TEXTURE_3D,0,_0,Z0.width,Z0.height,Z0.depth,0,F0,c0,Z0.data);else if(D.isFramebufferTexture){if(Y8)if(m0)H.texStorage2D(J.TEXTURE_2D,$0,_0,Z0.width,Z0.height);else{let{width:s,height:i}=Z0;for(let E0=0;E0<$0;E0++)H.texImage2D(J.TEXTURE_2D,E0,_0,s,i,0,F0,c0,null),s>>=1,i>>=1}}else if(b0.length>0){if(m0&&Y8){let s=B0(b0[0]);H.texStorage2D(J.TEXTURE_2D,$0,_0,s.width,s.height)}for(let s=0,i=b0.length;s<i;s++)if(q0=b0[s],m0){if(S)H.texSubImage2D(J.TEXTURE_2D,s,0,0,F0,c0,q0)}else H.texImage2D(J.TEXTURE_2D,s,_0,F0,c0,q0);D.generateMipmaps=!1}else if(m0){if(Y8){let s=B0(Z0);H.texStorage2D(J.TEXTURE_2D,$0,_0,s.width,s.height)}if(S)H.texSubImage2D(J.TEXTURE_2D,0,0,0,F0,c0,Z0)}else H.texImage2D(J.TEXTURE_2D,0,_0,F0,c0,Z0);if(N(D))O(o);if(I0.__version=d.version,D.onUpdate)D.onUpdate(D)}I.__version=D.version}function D0(I,D,h){if(D.image.length!==6)return;let o=n(I,D),a=D.source;H.bindTexture(J.TEXTURE_CUBE_MAP,I.__webglTexture,J.TEXTURE0+h);let d=Z.get(a);if(a.version!==d.__version||o===!0){H.activeTexture(J.TEXTURE0+h);let I0=i0.getPrimaries(i0.workingColorSpace),K0=D.colorSpace===u6?null:i0.getPrimaries(D.colorSpace),O0=D.colorSpace===u6||I0===K0?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,D.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,D.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,O0);let v0=D.isCompressedTexture||D.image[0].isCompressedTexture,Z0=D.image[0]&&D.image[0].isDataTexture,F0=[];for(let i=0;i<6;i++){if(!v0&&!Z0)F0[i]=M(D.image[i],!0,W.maxCubemapSize);else F0[i]=Z0?D.image[i].image:D.image[i];F0[i]=M0(D,F0[i])}let c0=F0[0],_0=Q.convert(D.format,D.colorSpace),q0=Q.convert(D.type),b0=L(D.internalFormat,_0,q0,D.colorSpace),m0=D.isVideoTexture!==!0,Y8=d.__version===void 0||o===!0,S=a.dataReady,$0=_(D,c0);g0(J.TEXTURE_CUBE_MAP,D);let s;if(v0){if(m0&&Y8)H.texStorage2D(J.TEXTURE_CUBE_MAP,$0,b0,c0.width,c0.height);for(let i=0;i<6;i++){s=F0[i].mipmaps;for(let E0=0;E0<s.length;E0++){let G0=s[E0];if(D.format!==e8)if(_0!==null)if(m0){if(S)H.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,E0,0,0,G0.width,G0.height,_0,G0.data)}else H.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,E0,b0,G0.width,G0.height,0,G0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(m0){if(S)H.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,E0,0,0,G0.width,G0.height,_0,q0,G0.data)}else H.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,E0,b0,G0.width,G0.height,0,_0,q0,G0.data)}}}else{if(s=D.mipmaps,m0&&Y8){if(s.length>0)$0++;let i=B0(F0[0]);H.texStorage2D(J.TEXTURE_CUBE_MAP,$0,b0,i.width,i.height)}for(let i=0;i<6;i++)if(Z0){if(m0){if(S)H.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,0,0,F0[i].width,F0[i].height,_0,q0,F0[i].data)}else H.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,b0,F0[i].width,F0[i].height,0,_0,q0,F0[i].data);for(let E0=0;E0<s.length;E0++){let p0=s[E0].image[i].image;if(m0){if(S)H.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,E0+1,0,0,p0.width,p0.height,_0,q0,p0.data)}else H.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,E0+1,b0,p0.width,p0.height,0,_0,q0,p0.data)}}else{if(m0){if(S)H.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,0,0,_0,q0,F0[i])}else H.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,b0,_0,q0,F0[i]);for(let E0=0;E0<s.length;E0++){let G0=s[E0];if(m0){if(S)H.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,E0+1,0,0,_0,q0,G0.image[i])}else H.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,E0+1,b0,_0,q0,G0.image[i])}}}if(N(D))O(J.TEXTURE_CUBE_MAP);if(d.__version=a.version,D.onUpdate)D.onUpdate(D)}I.__version=D.version}function k0(I,D,h,o,a,d){let I0=Q.convert(h.format,h.colorSpace),K0=Q.convert(h.type),O0=L(h.internalFormat,I0,K0,h.colorSpace),v0=Z.get(D),Z0=Z.get(h);if(Z0.__renderTarget=D,!v0.__hasExternalTextures){let F0=Math.max(1,D.width>>d),c0=Math.max(1,D.height>>d);if(a===J.TEXTURE_3D||a===J.TEXTURE_2D_ARRAY)H.texImage3D(a,d,O0,F0,c0,D.depth,0,I0,K0,null);else H.texImage2D(a,d,O0,F0,c0,0,I0,K0,null)}if(H.bindFramebuffer(J.FRAMEBUFFER,I),Y0(D))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,o,a,Z0.__webglTexture,0,T0(D));else if(a===J.TEXTURE_2D||a>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,o,a,Z0.__webglTexture,d);H.bindFramebuffer(J.FRAMEBUFFER,null)}function W0(I,D,h){if(J.bindRenderbuffer(J.RENDERBUFFER,I),D.depthBuffer){let o=D.depthTexture,a=o&&o.isDepthTexture?o.type:null,d=A(D.stencilBuffer,a),I0=D.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,K0=T0(D);if(Y0(D))X.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,K0,d,D.width,D.height);else if(h)J.renderbufferStorageMultisample(J.RENDERBUFFER,K0,d,D.width,D.height);else J.renderbufferStorage(J.RENDERBUFFER,d,D.width,D.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,I0,J.RENDERBUFFER,I)}else{let o=D.textures;for(let a=0;a<o.length;a++){let d=o[a],I0=Q.convert(d.format,d.colorSpace),K0=Q.convert(d.type),O0=L(d.internalFormat,I0,K0,d.colorSpace),v0=T0(D);if(h&&Y0(D)===!1)J.renderbufferStorageMultisample(J.RENDERBUFFER,v0,O0,D.width,D.height);else if(Y0(D))X.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,v0,O0,D.width,D.height);else J.renderbufferStorage(J.RENDERBUFFER,O0,D.width,D.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function z0(I,D){if(D&&D.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if(H.bindFramebuffer(J.FRAMEBUFFER,I),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let o=Z.get(D.depthTexture);if(o.__renderTarget=D,!o.__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0;r(D.depthTexture,0);let a=o.__webglTexture,d=T0(D);if(D.depthTexture.format===e7)if(Y0(D))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,a,0,d);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,a,0);else if(D.depthTexture.format===e9)if(Y0(D))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,a,0,d);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,a,0);else throw Error("Unknown depthTexture format")}function b(I){let D=Z.get(I),h=I.isWebGLCubeRenderTarget===!0;if(D.__boundDepthTexture!==I.depthTexture){let o=I.depthTexture;if(D.__depthDisposeCallback)D.__depthDisposeCallback();if(o){let a=()=>{delete D.__boundDepthTexture,delete D.__depthDisposeCallback,o.removeEventListener("dispose",a)};o.addEventListener("dispose",a),D.__depthDisposeCallback=a}D.__boundDepthTexture=o}if(I.depthTexture&&!D.__autoAllocateDepthBuffer){if(h)throw Error("target.depthTexture not supported in Cube render targets");z0(D.__webglFramebuffer,I)}else if(h){D.__webglDepthbuffer=[];for(let o=0;o<6;o++)if(H.bindFramebuffer(J.FRAMEBUFFER,D.__webglFramebuffer[o]),D.__webglDepthbuffer[o]===void 0)D.__webglDepthbuffer[o]=J.createRenderbuffer(),W0(D.__webglDepthbuffer[o],I,!1);else{let a=I.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,d=D.__webglDepthbuffer[o];J.bindRenderbuffer(J.RENDERBUFFER,d),J.framebufferRenderbuffer(J.FRAMEBUFFER,a,J.RENDERBUFFER,d)}}else if(H.bindFramebuffer(J.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer===void 0)D.__webglDepthbuffer=J.createRenderbuffer(),W0(D.__webglDepthbuffer,I,!1);else{let o=I.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,a=D.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,a),J.framebufferRenderbuffer(J.FRAMEBUFFER,o,J.RENDERBUFFER,a)}H.bindFramebuffer(J.FRAMEBUFFER,null)}function A0(I,D,h){let o=Z.get(I);if(D!==void 0)k0(o.__webglFramebuffer,I,I.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(h!==void 0)b(I)}function n0(I){let D=I.texture,h=Z.get(I),o=Z.get(D);I.addEventListener("dispose",P);let a=I.textures,d=I.isWebGLCubeRenderTarget===!0,I0=a.length>1;if(!I0){if(o.__webglTexture===void 0)o.__webglTexture=J.createTexture();o.__version=D.version,Y.memory.textures++}if(d){h.__webglFramebuffer=[];for(let K0=0;K0<6;K0++)if(D.mipmaps&&D.mipmaps.length>0){h.__webglFramebuffer[K0]=[];for(let O0=0;O0<D.mipmaps.length;O0++)h.__webglFramebuffer[K0][O0]=J.createFramebuffer()}else h.__webglFramebuffer[K0]=J.createFramebuffer()}else{if(D.mipmaps&&D.mipmaps.length>0){h.__webglFramebuffer=[];for(let K0=0;K0<D.mipmaps.length;K0++)h.__webglFramebuffer[K0]=J.createFramebuffer()}else h.__webglFramebuffer=J.createFramebuffer();if(I0)for(let K0=0,O0=a.length;K0<O0;K0++){let v0=Z.get(a[K0]);if(v0.__webglTexture===void 0)v0.__webglTexture=J.createTexture(),Y.memory.textures++}if(I.samples>0&&Y0(I)===!1){h.__webglMultisampledFramebuffer=J.createFramebuffer(),h.__webglColorRenderbuffer=[],H.bindFramebuffer(J.FRAMEBUFFER,h.__webglMultisampledFramebuffer);for(let K0=0;K0<a.length;K0++){let O0=a[K0];h.__webglColorRenderbuffer[K0]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,h.__webglColorRenderbuffer[K0]);let v0=Q.convert(O0.format,O0.colorSpace),Z0=Q.convert(O0.type),F0=L(O0.internalFormat,v0,Z0,O0.colorSpace,I.isXRRenderTarget===!0),c0=T0(I);J.renderbufferStorageMultisample(J.RENDERBUFFER,c0,F0,I.width,I.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+K0,J.RENDERBUFFER,h.__webglColorRenderbuffer[K0])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),I.depthBuffer)h.__webglDepthRenderbuffer=J.createRenderbuffer(),W0(h.__webglDepthRenderbuffer,I,!0);H.bindFramebuffer(J.FRAMEBUFFER,null)}}if(d){H.bindTexture(J.TEXTURE_CUBE_MAP,o.__webglTexture),g0(J.TEXTURE_CUBE_MAP,D);for(let K0=0;K0<6;K0++)if(D.mipmaps&&D.mipmaps.length>0)for(let O0=0;O0<D.mipmaps.length;O0++)k0(h.__webglFramebuffer[K0][O0],I,D,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+K0,O0);else k0(h.__webglFramebuffer[K0],I,D,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+K0,0);if(N(D))O(J.TEXTURE_CUBE_MAP);H.unbindTexture()}else if(I0){for(let K0=0,O0=a.length;K0<O0;K0++){let v0=a[K0],Z0=Z.get(v0);if(H.bindTexture(J.TEXTURE_2D,Z0.__webglTexture),g0(J.TEXTURE_2D,v0),k0(h.__webglFramebuffer,I,v0,J.COLOR_ATTACHMENT0+K0,J.TEXTURE_2D,0),N(v0))O(J.TEXTURE_2D)}H.unbindTexture()}else{let K0=J.TEXTURE_2D;if(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)K0=I.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(H.bindTexture(K0,o.__webglTexture),g0(K0,D),D.mipmaps&&D.mipmaps.length>0)for(let O0=0;O0<D.mipmaps.length;O0++)k0(h.__webglFramebuffer[O0],I,D,J.COLOR_ATTACHMENT0,K0,O0);else k0(h.__webglFramebuffer,I,D,J.COLOR_ATTACHMENT0,K0,0);if(N(D))O(K0);H.unbindTexture()}if(I.depthBuffer)b(I)}function V0(I){let D=I.textures;for(let h=0,o=D.length;h<o;h++){let a=D[h];if(N(a)){let d=w(I),I0=Z.get(a).__webglTexture;H.bindTexture(d,I0),O(d),H.unbindTexture()}}}let B=[],l0=[];function P0(I){if(I.samples>0){if(Y0(I)===!1){let{textures:D,width:h,height:o}=I,a=J.COLOR_BUFFER_BIT,d=I.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,I0=Z.get(I),K0=D.length>1;if(K0)for(let O0=0;O0<D.length;O0++)H.bindFramebuffer(J.FRAMEBUFFER,I0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+O0,J.RENDERBUFFER,null),H.bindFramebuffer(J.FRAMEBUFFER,I0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+O0,J.TEXTURE_2D,null,0);H.bindFramebuffer(J.READ_FRAMEBUFFER,I0.__webglMultisampledFramebuffer),H.bindFramebuffer(J.DRAW_FRAMEBUFFER,I0.__webglFramebuffer);for(let O0=0;O0<D.length;O0++){if(I.resolveDepthBuffer){if(I.depthBuffer)a|=J.DEPTH_BUFFER_BIT;if(I.stencilBuffer&&I.resolveStencilBuffer)a|=J.STENCIL_BUFFER_BIT}if(K0){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,I0.__webglColorRenderbuffer[O0]);let v0=Z.get(D[O0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,v0,0)}if(J.blitFramebuffer(0,0,h,o,0,0,h,o,a,J.NEAREST),K===!0){if(B.length=0,l0.length=0,B.push(J.COLOR_ATTACHMENT0+O0),I.depthBuffer&&I.resolveDepthBuffer===!1)B.push(d),l0.push(d),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,l0);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,B)}}if(H.bindFramebuffer(J.READ_FRAMEBUFFER,null),H.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),K0)for(let O0=0;O0<D.length;O0++){H.bindFramebuffer(J.FRAMEBUFFER,I0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+O0,J.RENDERBUFFER,I0.__webglColorRenderbuffer[O0]);let v0=Z.get(D[O0]).__webglTexture;H.bindFramebuffer(J.FRAMEBUFFER,I0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+O0,J.TEXTURE_2D,v0,0)}H.bindFramebuffer(J.DRAW_FRAMEBUFFER,I0.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&K){let D=I.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[D])}}}function T0(I){return Math.min(W.maxSamples,I.samples)}function Y0(I){let D=Z.get(I);return I.samples>0&&$.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function o0(I){let D=Y.render.frame;if(E.get(I)!==D)E.set(I,D),I.update()}function M0(I,D){let{colorSpace:h,format:o,type:a}=I;if(I.isCompressedTexture===!0||I.isVideoTexture===!0)return D;if(h!==J7&&h!==u6)if(i0.getTransfer(h)===W8){if(o!==e8||a!==A6)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",h);return D}function B0(I){if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement)U.width=I.naturalWidth||I.width,U.height=I.naturalHeight||I.height;else if(typeof VideoFrame<"u"&&I instanceof VideoFrame)U.width=I.displayWidth,U.height=I.displayHeight;else U.width=I.width,U.height=I.height;return U}this.allocateTextureUnit=c,this.resetTextureUnits=g,this.setTexture2D=r,this.setTexture2DArray=l,this.setTexture3D=t,this.setTextureCube=p,this.rebindTextures=A0,this.setupRenderTarget=n0,this.updateRenderTargetMipmap=V0,this.updateMultisampleRenderTarget=P0,this.setupDepthRenderbuffer=b,this.setupFrameBufferTexture=k0,this.useMultisampledRTT=Y0}function K1(J,$){function H(Z,W=u6){let Q,Y=i0.getTransfer(W);if(Z===A6)return J.UNSIGNED_BYTE;if(Z===M$)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===k$)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===FW)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===GW)return J.BYTE;if(Z===EW)return J.SHORT;if(Z===r9)return J.UNSIGNED_SHORT;if(Z===D$)return J.INT;if(Z===V9)return J.UNSIGNED_INT;if(Z===T6)return J.FLOAT;if(Z===t9)return J.HALF_FLOAT;if(Z===NW)return J.ALPHA;if(Z===OW)return J.RGB;if(Z===e8)return J.RGBA;if(Z===qW)return J.LUMINANCE;if(Z===RW)return J.LUMINANCE_ALPHA;if(Z===e7)return J.DEPTH_COMPONENT;if(Z===e9)return J.DEPTH_STENCIL;if(Z===DW)return J.RED;if(Z===L$)return J.RED_INTEGER;if(Z===MW)return J.RG;if(Z===z$)return J.RG_INTEGER;if(Z===C$)return J.RGBA_INTEGER;if(Z===JJ||Z===$J||Z===HJ||Z===ZJ)if(Y===W8)if(Q=$.get("WEBGL_compressed_texture_s3tc_srgb"),Q!==null){if(Z===JJ)return Q.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===$J)return Q.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===HJ)return Q.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===ZJ)return Q.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(Q=$.get("WEBGL_compressed_texture_s3tc"),Q!==null){if(Z===JJ)return Q.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===$J)return Q.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===HJ)return Q.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===ZJ)return Q.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===V$||Z===I$||Z===w$||Z===B$)if(Q=$.get("WEBGL_compressed_texture_pvrtc"),Q!==null){if(Z===V$)return Q.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===I$)return Q.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===w$)return Q.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===B$)return Q.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===P$||Z===A$||Z===T$)if(Q=$.get("WEBGL_compressed_texture_etc"),Q!==null){if(Z===P$||Z===A$)return Y===W8?Q.COMPRESSED_SRGB8_ETC2:Q.COMPRESSED_RGB8_ETC2;if(Z===T$)return Y===W8?Q.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:Q.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(Z===S$||Z===_$||Z===j$||Z===f$||Z===x$||Z===h$||Z===y$||Z===v$||Z===b$||Z===g$||Z===p$||Z===u$||Z===l$||Z===m$)if(Q=$.get("WEBGL_compressed_texture_astc"),Q!==null){if(Z===S$)return Y===W8?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:Q.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===_$)return Y===W8?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:Q.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===j$)return Y===W8?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:Q.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===f$)return Y===W8?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:Q.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===x$)return Y===W8?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:Q.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===h$)return Y===W8?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:Q.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===y$)return Y===W8?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:Q.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===v$)return Y===W8?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:Q.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===b$)return Y===W8?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:Q.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===g$)return Y===W8?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:Q.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===p$)return Y===W8?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:Q.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===u$)return Y===W8?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:Q.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===l$)return Y===W8?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:Q.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===m$)return Y===W8?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:Q.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===WJ||Z===d$||Z===c$)if(Q=$.get("EXT_texture_compression_bptc"),Q!==null){if(Z===WJ)return Y===W8?Q.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:Q.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===d$)return Q.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===c$)return Q.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===kW||Z===n$||Z===s$||Z===i$)if(Q=$.get("EXT_texture_compression_rgtc"),Q!==null){if(Z===WJ)return Q.COMPRESSED_RED_RGTC1_EXT;if(Z===n$)return Q.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===s$)return Q.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===i$)return Q.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===I9)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:H}}var U1={type:"move"};class BJ{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new $6,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new $6,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new $6,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let $=this._hand;if($)for(let H of J.hand.values())this._getHandJoint($,H)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,$,H){let Z=null,W=null,Q=null,Y=this._targetRay,X=this._grip,K=this._hand;if(J&&$.session.visibilityState!=="visible-blurred"){if(K&&J.hand){Q=!0;for(let R of J.hand.values()){let M=$.getJointPose(R,H),N=this._getHandJoint(K,R);if(M!==null)N.matrix.fromArray(M.transform.matrix),N.matrix.decompose(N.position,N.rotation,N.scale),N.matrixWorldNeedsUpdate=!0,N.jointRadius=M.radius;N.visible=M!==null}let U=K.joints["index-finger-tip"],E=K.joints["thumb-tip"],G=U.position.distanceTo(E.position),F=0.02,q=0.005;if(K.inputState.pinching&&G>F+q)K.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!K.inputState.pinching&&G<=F-q)K.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(X!==null&&J.gripSpace){if(W=$.getPose(J.gripSpace,H),W!==null){if(X.matrix.fromArray(W.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,W.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(W.linearVelocity);else X.hasLinearVelocity=!1;if(W.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(W.angularVelocity);else X.hasAngularVelocity=!1}}if(Y!==null){if(Z=$.getPose(J.targetRaySpace,H),Z===null&&W!==null)Z=W;if(Z!==null){if(Y.matrix.fromArray(Z.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,Z.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(Z.linearVelocity);else Y.hasLinearVelocity=!1;if(Z.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(Z.angularVelocity);else Y.hasAngularVelocity=!1;this.dispatchEvent(U1)}}}if(Y!==null)Y.visible=Z!==null;if(X!==null)X.visible=W!==null;if(K!==null)K.visible=Q!==null;return this}_getHandJoint(J,$){if(J.joints[$.jointName]===void 0){let H=new $6;H.matrixAutoUpdate=!1,H.visible=!1,J.joints[$.jointName]=H,J.add(H)}return J.joints[$.jointName]}}var G1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E1=`
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

}`;class LQ{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,$,H){if(this.texture===null){let Z=new V8,W=J.properties.get(Z);if(W.__webglTexture=$.texture,$.depthNear!==H.depthNear||$.depthFar!==H.depthFar)this.depthNear=$.depthNear,this.depthFar=$.depthFar;this.texture=Z}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let $=J.cameras[0].viewport,H=new J6({vertexShader:G1,fragmentShader:E1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:$.z},depthHeight:{value:$.w}}});this.mesh=new E8(new W7(20,20),H)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zQ extends E6{constructor(J,$){super();let H=this,Z=null,W=1,Q=null,Y="local-floor",X=1,K=null,U=null,E=null,G=null,F=null,q=null,R=new LQ,M=$.getContextAttributes(),N=null,O=null,w=[],L=[],A=new S0,_=null,V=new C8;V.viewport=new $8;let P=new C8;P.viewport=new $8;let u=[V,P],z=new kH,C=null,f=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(n){let H0=w[n];if(H0===void 0)H0=new BJ,w[n]=H0;return H0.getTargetRaySpace()},this.getControllerGrip=function(n){let H0=w[n];if(H0===void 0)H0=new BJ,w[n]=H0;return H0.getGripSpace()},this.getHand=function(n){let H0=w[n];if(H0===void 0)H0=new BJ,w[n]=H0;return H0.getHandSpace()};function g(n){let H0=L.indexOf(n.inputSource);if(H0===-1)return;let D0=w[H0];if(D0!==void 0)D0.update(n.inputSource,n.frame,K||Q),D0.dispatchEvent({type:n.type,data:n.inputSource})}function c(){Z.removeEventListener("select",g),Z.removeEventListener("selectstart",g),Z.removeEventListener("selectend",g),Z.removeEventListener("squeeze",g),Z.removeEventListener("squeezestart",g),Z.removeEventListener("squeezeend",g),Z.removeEventListener("end",c),Z.removeEventListener("inputsourceschange",m);for(let n=0;n<w.length;n++){let H0=L[n];if(H0===null)continue;L[n]=null,w[n].disconnect(H0)}C=null,f=null,R.reset(),J.setRenderTarget(N),F=null,G=null,E=null,Z=null,O=null,g0.stop(),H.isPresenting=!1,J.setPixelRatio(_),J.setSize(A.width,A.height,!1),H.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(n){if(W=n,H.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(n){if(Y=n,H.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return K||Q},this.setReferenceSpace=function(n){K=n},this.getBaseLayer=function(){return G!==null?G:F},this.getBinding=function(){return E},this.getFrame=function(){return q},this.getSession=function(){return Z},this.setSession=async function(n){if(Z=n,Z!==null){if(N=J.getRenderTarget(),Z.addEventListener("select",g),Z.addEventListener("selectstart",g),Z.addEventListener("selectend",g),Z.addEventListener("squeeze",g),Z.addEventListener("squeezestart",g),Z.addEventListener("squeezeend",g),Z.addEventListener("end",c),Z.addEventListener("inputsourceschange",m),M.xrCompatible!==!0)await $.makeXRCompatible();if(_=J.getPixelRatio(),J.getSize(A),!(Z.enabledFeatures!==void 0&&Z.enabledFeatures.includes("layers"))){let D0={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:W};F=new XRWebGLLayer(Z,$,D0),Z.updateRenderState({baseLayer:F}),J.setPixelRatio(1),J.setSize(F.framebufferWidth,F.framebufferHeight,!1),O=new F6(F.framebufferWidth,F.framebufferHeight,{format:e8,type:A6,colorSpace:J.outputColorSpace,stencilBuffer:M.stencil})}else{let D0=null,k0=null,W0=null;if(M.depth)W0=M.stencil?$.DEPTH24_STENCIL8:$.DEPTH_COMPONENT24,D0=M.stencil?e9:e7,k0=M.stencil?I9:V9;let z0={colorFormat:$.RGBA8,depthFormat:W0,scaleFactor:W};E=new XRWebGLBinding(Z,$),G=E.createProjectionLayer(z0),Z.updateRenderState({layers:[G]}),J.setPixelRatio(1),J.setSize(G.textureWidth,G.textureHeight,!1),O=new F6(G.textureWidth,G.textureHeight,{format:e8,type:A6,depthTexture:new qJ(G.textureWidth,G.textureHeight,k0,void 0,void 0,void 0,void 0,void 0,void 0,D0),stencilBuffer:M.stencil,colorSpace:J.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:G.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(X),K=null,Q=await Z.requestReferenceSpace(Y),g0.setContext(Z),g0.start(),H.isPresenting=!0,H.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function m(n){for(let H0=0;H0<n.removed.length;H0++){let D0=n.removed[H0],k0=L.indexOf(D0);if(k0>=0)L[k0]=null,w[k0].disconnect(D0)}for(let H0=0;H0<n.added.length;H0++){let D0=n.added[H0],k0=L.indexOf(D0);if(k0===-1){for(let z0=0;z0<w.length;z0++)if(z0>=L.length){L.push(D0),k0=z0;break}else if(L[z0]===null){L[z0]=D0,k0=z0;break}if(k0===-1)break}let W0=w[k0];if(W0)W0.connect(D0)}}let r=new T,l=new T;function t(n,H0,D0){r.setFromMatrixPosition(H0.matrixWorld),l.setFromMatrixPosition(D0.matrixWorld);let k0=r.distanceTo(l),W0=H0.projectionMatrix.elements,z0=D0.projectionMatrix.elements,b=W0[14]/(W0[10]-1),A0=W0[14]/(W0[10]+1),n0=(W0[9]+1)/W0[5],V0=(W0[9]-1)/W0[5],B=(W0[8]-1)/W0[0],l0=(z0[8]+1)/z0[0],P0=b*B,T0=b*l0,Y0=k0/(-B+l0),o0=Y0*-B;if(H0.matrixWorld.decompose(n.position,n.quaternion,n.scale),n.translateX(o0),n.translateZ(Y0),n.matrixWorld.compose(n.position,n.quaternion,n.scale),n.matrixWorldInverse.copy(n.matrixWorld).invert(),W0[10]===-1)n.projectionMatrix.copy(H0.projectionMatrix),n.projectionMatrixInverse.copy(H0.projectionMatrixInverse);else{let M0=b+Y0,B0=A0+Y0,I=P0-o0,D=T0+(k0-o0),h=n0*A0/B0*M0,o=V0*A0/B0*M0;n.projectionMatrix.makePerspective(I,D,h,o,M0,B0),n.projectionMatrixInverse.copy(n.projectionMatrix).invert()}}function p(n,H0){if(H0===null)n.matrixWorld.copy(n.matrix);else n.matrixWorld.multiplyMatrices(H0.matrixWorld,n.matrix);n.matrixWorldInverse.copy(n.matrixWorld).invert()}this.updateCamera=function(n){if(Z===null)return;let{near:H0,far:D0}=n;if(R.texture!==null){if(R.depthNear>0)H0=R.depthNear;if(R.depthFar>0)D0=R.depthFar}if(z.near=P.near=V.near=H0,z.far=P.far=V.far=D0,C!==z.near||f!==z.far)Z.updateRenderState({depthNear:z.near,depthFar:z.far}),C=z.near,f=z.far;V.layers.mask=n.layers.mask|2,P.layers.mask=n.layers.mask|4,z.layers.mask=V.layers.mask|P.layers.mask;let k0=n.parent,W0=z.cameras;p(z,k0);for(let z0=0;z0<W0.length;z0++)p(W0[z0],k0);if(W0.length===2)t(z,V,P);else z.projectionMatrix.copy(V.projectionMatrix);X0(n,z,k0)};function X0(n,H0,D0){if(D0===null)n.matrix.copy(H0.matrixWorld);else n.matrix.copy(D0.matrixWorld),n.matrix.invert(),n.matrix.multiply(H0.matrixWorld);if(n.matrix.decompose(n.position,n.quaternion,n.scale),n.updateMatrixWorld(!0),n.projectionMatrix.copy(H0.projectionMatrix),n.projectionMatrixInverse.copy(H0.projectionMatrixInverse),n.isPerspectiveCamera)n.fov=R9*2*Math.atan(1/n.projectionMatrix.elements[5]),n.zoom=1}this.getCamera=function(){return z},this.getFoveation=function(){if(G===null&&F===null)return;return X},this.setFoveation=function(n){if(X=n,G!==null)G.fixedFoveation=n;if(F!==null&&F.fixedFoveation!==void 0)F.fixedFoveation=n},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(z)};let J0=null;function w0(n,H0){if(U=H0.getViewerPose(K||Q),q=H0,U!==null){let D0=U.views;if(F!==null)J.setRenderTargetFramebuffer(O,F.framebuffer),J.setRenderTarget(O);let k0=!1;if(D0.length!==z.cameras.length)z.cameras.length=0,k0=!0;for(let z0=0;z0<D0.length;z0++){let b=D0[z0],A0=null;if(F!==null)A0=F.getViewport(b);else{let V0=E.getViewSubImage(G,b);if(A0=V0.viewport,z0===0)J.setRenderTargetTextures(O,V0.colorTexture,G.ignoreDepthValues?void 0:V0.depthStencilTexture),J.setRenderTarget(O)}let n0=u[z0];if(n0===void 0)n0=new C8,n0.layers.enable(z0),n0.viewport=new $8,u[z0]=n0;if(n0.matrix.fromArray(b.transform.matrix),n0.matrix.decompose(n0.position,n0.quaternion,n0.scale),n0.projectionMatrix.fromArray(b.projectionMatrix),n0.projectionMatrixInverse.copy(n0.projectionMatrix).invert(),n0.viewport.set(A0.x,A0.y,A0.width,A0.height),z0===0)z.matrix.copy(n0.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale);if(k0===!0)z.cameras.push(n0)}let W0=Z.enabledFeatures;if(W0&&W0.includes("depth-sensing")){let z0=E.getDepthInformation(D0[0]);if(z0&&z0.isValid&&z0.texture)R.init(J,z0,Z.renderState)}}for(let D0=0;D0<w.length;D0++){let k0=L[D0],W0=w[D0];if(k0!==null&&W0!==void 0)W0.update(k0,H0,K||Q)}if(J0)J0(n,H0);if(H0.detectedPlanes)H.dispatchEvent({type:"planesdetected",data:H0});q=null}let g0=new GQ;g0.setAnimationLoop(w0),this.setAnimationLoop=function(n){J0=n},this.dispose=function(){}}}var a6=new s8,F1=new Z8;function N1(J,$){function H(N,O){if(N.matrixAutoUpdate===!0)N.updateMatrix();O.value.copy(N.matrix)}function Z(N,O){if(O.color.getRGB(N.fogColor.value,WH(J)),O.isFog)N.fogNear.value=O.near,N.fogFar.value=O.far;else if(O.isFogExp2)N.fogDensity.value=O.density}function W(N,O,w,L,A){if(O.isMeshBasicMaterial)Q(N,O);else if(O.isMeshLambertMaterial)Q(N,O);else if(O.isMeshToonMaterial)Q(N,O),G(N,O);else if(O.isMeshPhongMaterial)Q(N,O),E(N,O);else if(O.isMeshStandardMaterial){if(Q(N,O),F(N,O),O.isMeshPhysicalMaterial)q(N,O,A)}else if(O.isMeshMatcapMaterial)Q(N,O),R(N,O);else if(O.isMeshDepthMaterial)Q(N,O);else if(O.isMeshDistanceMaterial)Q(N,O),M(N,O);else if(O.isMeshNormalMaterial)Q(N,O);else if(O.isLineBasicMaterial){if(Y(N,O),O.isLineDashedMaterial)X(N,O)}else if(O.isPointsMaterial)K(N,O,w,L);else if(O.isSpriteMaterial)U(N,O);else if(O.isShadowMaterial)N.color.value.copy(O.color),N.opacity.value=O.opacity;else if(O.isShaderMaterial)O.uniformsNeedUpdate=!1}function Q(N,O){if(N.opacity.value=O.opacity,O.color)N.diffuse.value.copy(O.color);if(O.emissive)N.emissive.value.copy(O.emissive).multiplyScalar(O.emissiveIntensity);if(O.map)N.map.value=O.map,H(O.map,N.mapTransform);if(O.alphaMap)N.alphaMap.value=O.alphaMap,H(O.alphaMap,N.alphaMapTransform);if(O.bumpMap){if(N.bumpMap.value=O.bumpMap,H(O.bumpMap,N.bumpMapTransform),N.bumpScale.value=O.bumpScale,O.side===A8)N.bumpScale.value*=-1}if(O.normalMap){if(N.normalMap.value=O.normalMap,H(O.normalMap,N.normalMapTransform),N.normalScale.value.copy(O.normalScale),O.side===A8)N.normalScale.value.negate()}if(O.displacementMap)N.displacementMap.value=O.displacementMap,H(O.displacementMap,N.displacementMapTransform),N.displacementScale.value=O.displacementScale,N.displacementBias.value=O.displacementBias;if(O.emissiveMap)N.emissiveMap.value=O.emissiveMap,H(O.emissiveMap,N.emissiveMapTransform);if(O.specularMap)N.specularMap.value=O.specularMap,H(O.specularMap,N.specularMapTransform);if(O.alphaTest>0)N.alphaTest.value=O.alphaTest;let w=$.get(O),L=w.envMap,A=w.envMapRotation;if(L){if(N.envMap.value=L,a6.copy(A),a6.x*=-1,a6.y*=-1,a6.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1)a6.y*=-1,a6.z*=-1;N.envMapRotation.value.setFromMatrix4(F1.makeRotationFromEuler(a6)),N.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,N.reflectivity.value=O.reflectivity,N.ior.value=O.ior,N.refractionRatio.value=O.refractionRatio}if(O.lightMap)N.lightMap.value=O.lightMap,N.lightMapIntensity.value=O.lightMapIntensity,H(O.lightMap,N.lightMapTransform);if(O.aoMap)N.aoMap.value=O.aoMap,N.aoMapIntensity.value=O.aoMapIntensity,H(O.aoMap,N.aoMapTransform)}function Y(N,O){if(N.diffuse.value.copy(O.color),N.opacity.value=O.opacity,O.map)N.map.value=O.map,H(O.map,N.mapTransform)}function X(N,O){N.dashSize.value=O.dashSize,N.totalSize.value=O.dashSize+O.gapSize,N.scale.value=O.scale}function K(N,O,w,L){if(N.diffuse.value.copy(O.color),N.opacity.value=O.opacity,N.size.value=O.size*w,N.scale.value=L*0.5,O.map)N.map.value=O.map,H(O.map,N.uvTransform);if(O.alphaMap)N.alphaMap.value=O.alphaMap,H(O.alphaMap,N.alphaMapTransform);if(O.alphaTest>0)N.alphaTest.value=O.alphaTest}function U(N,O){if(N.diffuse.value.copy(O.color),N.opacity.value=O.opacity,N.rotation.value=O.rotation,O.map)N.map.value=O.map,H(O.map,N.mapTransform);if(O.alphaMap)N.alphaMap.value=O.alphaMap,H(O.alphaMap,N.alphaMapTransform);if(O.alphaTest>0)N.alphaTest.value=O.alphaTest}function E(N,O){N.specular.value.copy(O.specular),N.shininess.value=Math.max(O.shininess,0.0001)}function G(N,O){if(O.gradientMap)N.gradientMap.value=O.gradientMap}function F(N,O){if(N.metalness.value=O.metalness,O.metalnessMap)N.metalnessMap.value=O.metalnessMap,H(O.metalnessMap,N.metalnessMapTransform);if(N.roughness.value=O.roughness,O.roughnessMap)N.roughnessMap.value=O.roughnessMap,H(O.roughnessMap,N.roughnessMapTransform);if(O.envMap)N.envMapIntensity.value=O.envMapIntensity}function q(N,O,w){if(N.ior.value=O.ior,O.sheen>0){if(N.sheenColor.value.copy(O.sheenColor).multiplyScalar(O.sheen),N.sheenRoughness.value=O.sheenRoughness,O.sheenColorMap)N.sheenColorMap.value=O.sheenColorMap,H(O.sheenColorMap,N.sheenColorMapTransform);if(O.sheenRoughnessMap)N.sheenRoughnessMap.value=O.sheenRoughnessMap,H(O.sheenRoughnessMap,N.sheenRoughnessMapTransform)}if(O.clearcoat>0){if(N.clearcoat.value=O.clearcoat,N.clearcoatRoughness.value=O.clearcoatRoughness,O.clearcoatMap)N.clearcoatMap.value=O.clearcoatMap,H(O.clearcoatMap,N.clearcoatMapTransform);if(O.clearcoatRoughnessMap)N.clearcoatRoughnessMap.value=O.clearcoatRoughnessMap,H(O.clearcoatRoughnessMap,N.clearcoatRoughnessMapTransform);if(O.clearcoatNormalMap){if(N.clearcoatNormalMap.value=O.clearcoatNormalMap,H(O.clearcoatNormalMap,N.clearcoatNormalMapTransform),N.clearcoatNormalScale.value.copy(O.clearcoatNormalScale),O.side===A8)N.clearcoatNormalScale.value.negate()}}if(O.dispersion>0)N.dispersion.value=O.dispersion;if(O.iridescence>0){if(N.iridescence.value=O.iridescence,N.iridescenceIOR.value=O.iridescenceIOR,N.iridescenceThicknessMinimum.value=O.iridescenceThicknessRange[0],N.iridescenceThicknessMaximum.value=O.iridescenceThicknessRange[1],O.iridescenceMap)N.iridescenceMap.value=O.iridescenceMap,H(O.iridescenceMap,N.iridescenceMapTransform);if(O.iridescenceThicknessMap)N.iridescenceThicknessMap.value=O.iridescenceThicknessMap,H(O.iridescenceThicknessMap,N.iridescenceThicknessMapTransform)}if(O.transmission>0){if(N.transmission.value=O.transmission,N.transmissionSamplerMap.value=w.texture,N.transmissionSamplerSize.value.set(w.width,w.height),O.transmissionMap)N.transmissionMap.value=O.transmissionMap,H(O.transmissionMap,N.transmissionMapTransform);if(N.thickness.value=O.thickness,O.thicknessMap)N.thicknessMap.value=O.thicknessMap,H(O.thicknessMap,N.thicknessMapTransform);N.attenuationDistance.value=O.attenuationDistance,N.attenuationColor.value.copy(O.attenuationColor)}if(O.anisotropy>0){if(N.anisotropyVector.value.set(O.anisotropy*Math.cos(O.anisotropyRotation),O.anisotropy*Math.sin(O.anisotropyRotation)),O.anisotropyMap)N.anisotropyMap.value=O.anisotropyMap,H(O.anisotropyMap,N.anisotropyMapTransform)}if(N.specularIntensity.value=O.specularIntensity,N.specularColor.value.copy(O.specularColor),O.specularColorMap)N.specularColorMap.value=O.specularColorMap,H(O.specularColorMap,N.specularColorMapTransform);if(O.specularIntensityMap)N.specularIntensityMap.value=O.specularIntensityMap,H(O.specularIntensityMap,N.specularIntensityMapTransform)}function R(N,O){if(O.matcap)N.matcap.value=O.matcap}function M(N,O){let w=$.get(O).light;N.referencePosition.value.setFromMatrixPosition(w.matrixWorld),N.nearDistance.value=w.shadow.camera.near,N.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:W}}function O1(J,$,H,Z){let W={},Q={},Y=[],X=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function K(w,L){let A=L.program;Z.uniformBlockBinding(w,A)}function U(w,L){let A=W[w.id];if(A===void 0)R(w),A=E(w),W[w.id]=A,w.addEventListener("dispose",N);let _=L.program;Z.updateUBOMapping(w,_);let V=$.render.frame;if(Q[w.id]!==V)F(w),Q[w.id]=V}function E(w){let L=G();w.__bindingPointIndex=L;let A=J.createBuffer(),_=w.__size,V=w.usage;return J.bindBuffer(J.UNIFORM_BUFFER,A),J.bufferData(J.UNIFORM_BUFFER,_,V),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,L,A),A}function G(){for(let w=0;w<X;w++)if(Y.indexOf(w)===-1)return Y.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function F(w){let L=W[w.id],A=w.uniforms,_=w.__cache;J.bindBuffer(J.UNIFORM_BUFFER,L);for(let V=0,P=A.length;V<P;V++){let u=Array.isArray(A[V])?A[V]:[A[V]];for(let z=0,C=u.length;z<C;z++){let f=u[z];if(q(f,V,z,_)===!0){let g=f.__offset,c=Array.isArray(f.value)?f.value:[f.value],m=0;for(let r=0;r<c.length;r++){let l=c[r],t=M(l);if(typeof l==="number"||typeof l==="boolean")f.__data[0]=l,J.bufferSubData(J.UNIFORM_BUFFER,g+m,f.__data);else if(l.isMatrix3)f.__data[0]=l.elements[0],f.__data[1]=l.elements[1],f.__data[2]=l.elements[2],f.__data[3]=0,f.__data[4]=l.elements[3],f.__data[5]=l.elements[4],f.__data[6]=l.elements[5],f.__data[7]=0,f.__data[8]=l.elements[6],f.__data[9]=l.elements[7],f.__data[10]=l.elements[8],f.__data[11]=0;else l.toArray(f.__data,m),m+=t.storage/Float32Array.BYTES_PER_ELEMENT}J.bufferSubData(J.UNIFORM_BUFFER,g,f.__data)}}}J.bindBuffer(J.UNIFORM_BUFFER,null)}function q(w,L,A,_){let V=w.value,P=L+"_"+A;if(_[P]===void 0){if(typeof V==="number"||typeof V==="boolean")_[P]=V;else _[P]=V.clone();return!0}else{let u=_[P];if(typeof V==="number"||typeof V==="boolean"){if(u!==V)return _[P]=V,!0}else if(u.equals(V)===!1)return u.copy(V),!0}return!1}function R(w){let L=w.uniforms,A=0,_=16;for(let P=0,u=L.length;P<u;P++){let z=Array.isArray(L[P])?L[P]:[L[P]];for(let C=0,f=z.length;C<f;C++){let g=z[C],c=Array.isArray(g.value)?g.value:[g.value];for(let m=0,r=c.length;m<r;m++){let l=c[m],t=M(l),p=A%_,X0=p%t.boundary,J0=p+X0;if(A+=X0,J0!==0&&_-J0<t.storage)A+=_-J0;g.__data=new Float32Array(t.storage/Float32Array.BYTES_PER_ELEMENT),g.__offset=A,A+=t.storage}}}let V=A%_;if(V>0)A+=_-V;return w.__size=A,w.__cache={},this}function M(w){let L={boundary:0,storage:0};if(typeof w==="number"||typeof w==="boolean")L.boundary=4,L.storage=4;else if(w.isVector2)L.boundary=8,L.storage=8;else if(w.isVector3||w.isColor)L.boundary=16,L.storage=12;else if(w.isVector4)L.boundary=16,L.storage=16;else if(w.isMatrix3)L.boundary=48,L.storage=48;else if(w.isMatrix4)L.boundary=64,L.storage=64;else if(w.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w);return L}function N(w){let L=w.target;L.removeEventListener("dispose",N);let A=Y.indexOf(L.__bindingPointIndex);Y.splice(A,1),J.deleteBuffer(W[L.id]),delete W[L.id],delete Q[L.id]}function O(){for(let w in W)J.deleteBuffer(W[w]);Y=[],W={},Q={}}return{bind:K,update:U,dispose:O}}class jH{constructor(J={}){let{canvas:$=_W(),context:H=null,depth:Z=!0,stencil:W=!1,alpha:Q=!1,antialias:Y=!1,premultipliedAlpha:X=!0,preserveDrawingBuffer:K=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:E=!1,reverseDepthBuffer:G=!1}=J;this.isWebGLRenderer=!0;let F;if(H!==null){if(typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");F=H.getContextAttributes().alpha}else F=Q;let q=new Uint32Array(4),R=new Int32Array(4),M=null,N=null,O=[],w=[];this.domElement=$,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=w9,this.toneMapping=G6,this.toneMappingExposure=1;let L=this,A=!1,_=0,V=0,P=null,u=-1,z=null,C=new $8,f=new $8,g=null,c=new x0(0),m=0,r=$.width,l=$.height,t=1,p=null,X0=null,J0=new $8(0,0,r,l),w0=new $8(0,0,r,l),g0=!1,n=new $7,H0=!1,D0=!1;this.transmissionResolutionScale=1;let k0=new Z8,W0=new Z8,z0=new T,b=new $8,A0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},n0=!1;function V0(){return P===null?t:1}let B=H;function l0(k,j){return $.getContext(k,j)}try{let k={alpha:!0,depth:Z,stencil:W,antialias:Y,premultipliedAlpha:X,preserveDrawingBuffer:K,powerPreference:U,failIfMajorPerformanceCaveat:E};if("setAttribute"in $)$.setAttribute("data-engine",`three.js r${PZ}`);if($.addEventListener("webglcontextlost",s,!1),$.addEventListener("webglcontextrestored",i,!1),$.addEventListener("webglcontextcreationerror",E0,!1),B===null){if(B=l0("webgl2",k),B===null)if(l0("webgl2"))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}}catch(k){throw console.error("THREE.WebGLRenderer: "+k.message),k}let P0,T0,Y0,o0,M0,B0,I,D,h,o,a,d,I0,K0,O0,v0,Z0,F0,c0,_0,q0,b0,m0,Y8;function S(){if(P0=new _U(B),P0.init(),b0=new K1(B,P0),T0=new wU(B,P0,J,b0),Y0=new Y1(B,P0),T0.reverseDepthBuffer&&G)Y0.buffers.depth.setReversed(!0);o0=new xU(B),M0=new sG,B0=new X1(B,P0,Y0,M0,T0,b0,o0),I=new PU(L),D=new SU(L),h=new uY(B),m0=new VU(B,h),o=new jU(B,h,o0,m0),a=new yU(B,o,h,o0),c0=new hU(B,T0,B0),v0=new BU(M0),d=new nG(L,I,D,P0,T0,m0,v0),I0=new N1(L,M0),K0=new oG,O0=new $1(P0),F0=new CU(L,I,D,Y0,a,F,X),Z0=new W1(L,a,T0),Y8=new O1(B,o0,T0,Y0),_0=new IU(B,P0,o0),q0=new fU(B,P0,o0),o0.programs=d.programs,L.capabilities=T0,L.extensions=P0,L.properties=M0,L.renderLists=K0,L.shadowMap=Z0,L.state=Y0,L.info=o0}S();let $0=new zQ(L,B);this.xr=$0,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let k=P0.get("WEBGL_lose_context");if(k)k.loseContext()},this.forceContextRestore=function(){let k=P0.get("WEBGL_lose_context");if(k)k.restoreContext()},this.getPixelRatio=function(){return t},this.setPixelRatio=function(k){if(k===void 0)return;t=k,this.setSize(r,l,!1)},this.getSize=function(k){return k.set(r,l)},this.setSize=function(k,j,y=!0){if($0.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(r=k,l=j,$.width=Math.floor(k*t),$.height=Math.floor(j*t),y===!0)$.style.width=k+"px",$.style.height=j+"px";this.setViewport(0,0,k,j)},this.getDrawingBufferSize=function(k){return k.set(r*t,l*t).floor()},this.setDrawingBufferSize=function(k,j,y){r=k,l=j,t=y,$.width=Math.floor(k*y),$.height=Math.floor(j*y),this.setViewport(0,0,k,j)},this.getCurrentViewport=function(k){return k.copy(C)},this.getViewport=function(k){return k.copy(J0)},this.setViewport=function(k,j,y,v){if(k.isVector4)J0.set(k.x,k.y,k.z,k.w);else J0.set(k,j,y,v);Y0.viewport(C.copy(J0).multiplyScalar(t).round())},this.getScissor=function(k){return k.copy(w0)},this.setScissor=function(k,j,y,v){if(k.isVector4)w0.set(k.x,k.y,k.z,k.w);else w0.set(k,j,y,v);Y0.scissor(f.copy(w0).multiplyScalar(t).round())},this.getScissorTest=function(){return g0},this.setScissorTest=function(k){Y0.setScissorTest(g0=k)},this.setOpaqueSort=function(k){p=k},this.setTransparentSort=function(k){X0=k},this.getClearColor=function(k){return k.copy(F0.getClearColor())},this.setClearColor=function(){F0.setClearColor.apply(F0,arguments)},this.getClearAlpha=function(){return F0.getClearAlpha()},this.setClearAlpha=function(){F0.setClearAlpha.apply(F0,arguments)},this.clear=function(k=!0,j=!0,y=!0){let v=0;if(k){let x=!1;if(P!==null){let e=P.texture.format;x=e===C$||e===z$||e===L$}if(x){let e=P.texture.type,U0=e===A6||e===V9||e===r9||e===I9||e===M$||e===k$,N0=F0.getClearColor(),R0=F0.getClearAlpha(),j0=N0.r,f0=N0.g,L0=N0.b;if(U0)q[0]=j0,q[1]=f0,q[2]=L0,q[3]=R0,B.clearBufferuiv(B.COLOR,0,q);else R[0]=j0,R[1]=f0,R[2]=L0,R[3]=R0,B.clearBufferiv(B.COLOR,0,R)}else v|=B.COLOR_BUFFER_BIT}if(j)v|=B.DEPTH_BUFFER_BIT;if(y)v|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);B.clear(v)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){$.removeEventListener("webglcontextlost",s,!1),$.removeEventListener("webglcontextrestored",i,!1),$.removeEventListener("webglcontextcreationerror",E0,!1),F0.dispose(),K0.dispose(),O0.dispose(),M0.dispose(),I.dispose(),D.dispose(),a.dispose(),m0.dispose(),Y8.dispose(),d.dispose(),$0.dispose(),$0.removeEventListener("sessionstart",a8),$0.removeEventListener("sessionend",oH),f6.stop()};function s(k){k.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function i(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let k=o0.autoReset,j=Z0.enabled,y=Z0.autoUpdate,v=Z0.needsUpdate,x=Z0.type;S(),o0.autoReset=k,Z0.enabled=j,Z0.autoUpdate=y,Z0.needsUpdate=v,Z0.type=x}function E0(k){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",k.statusMessage)}function G0(k){let j=k.target;j.removeEventListener("dispose",G0),p0(j)}function p0(k){X8(k),M0.remove(k)}function X8(k){let j=M0.get(k).programs;if(j!==void 0){if(j.forEach(function(y){d.releaseProgram(y)}),k.isShaderMaterial)d.releaseShaderCache(k)}}this.renderBufferDirect=function(k,j,y,v,x,e){if(j===null)j=A0;let U0=x.isMesh&&x.matrixWorld.determinant()<0,N0=cQ(k,j,y,v,x);Y0.setMaterial(v,U0);let R0=y.index,j0=1;if(v.wireframe===!0){if(R0=o.getWireframeAttribute(y),R0===void 0)return;j0=2}let f0=y.drawRange,L0=y.attributes.position,s0=f0.start*j0,t0=(f0.start+f0.count)*j0;if(e!==null)s0=Math.max(s0,e.start*j0),t0=Math.min(t0,(e.start+e.count)*j0);if(R0!==null)s0=Math.max(s0,0),t0=Math.min(t0,R0.count);else if(L0!==void 0&&L0!==null)s0=Math.max(s0,0),t0=Math.min(t0,L0.count);let U8=t0-s0;if(U8<0||U8===1/0)return;m0.setup(x,v,N0,y,R0);let K8,a0=_0;if(R0!==null)K8=h.get(R0),a0=q0,a0.setIndex(K8);if(x.isMesh)if(v.wireframe===!0)Y0.setLineWidth(v.wireframeLinewidth*V0()),a0.setMode(B.LINES);else a0.setMode(B.TRIANGLES);else if(x.isLine){let C0=v.linewidth;if(C0===void 0)C0=1;if(Y0.setLineWidth(C0*V0()),x.isLineSegments)a0.setMode(B.LINES);else if(x.isLineLoop)a0.setMode(B.LINE_LOOP);else a0.setMode(B.LINE_STRIP)}else if(x.isPoints)a0.setMode(B.POINTS);else if(x.isSprite)a0.setMode(B.TRIANGLES);if(x.isBatchedMesh)if(x._multiDrawInstances!==null)a0.renderMultiDrawInstances(x._multiDrawStarts,x._multiDrawCounts,x._multiDrawCount,x._multiDrawInstances);else if(!P0.get("WEBGL_multi_draw")){let{_multiDrawStarts:C0,_multiDrawCounts:k8,_multiDrawCount:e0}=x,l8=R0?h.get(R0).bytesPerElement:1,$9=M0.get(v).currentProgram.getUniforms();for(let f8=0;f8<e0;f8++)$9.setValue(B,"_gl_DrawID",f8),a0.render(C0[f8]/l8,k8[f8])}else a0.renderMultiDraw(x._multiDrawStarts,x._multiDrawCounts,x._multiDrawCount);else if(x.isInstancedMesh)a0.renderInstances(s0,U8,x.count);else if(y.isInstancedBufferGeometry){let C0=y._maxInstanceCount!==void 0?y._maxInstanceCount:1/0,k8=Math.min(y.instanceCount,C0);a0.renderInstances(s0,U8,k8)}else a0.render(s0,U8)};function M8(k,j,y){if(k.transparent===!0&&k.side===t8&&k.forceSinglePass===!1)k.side=A8,k.needsUpdate=!0,D7(k,j,y),k.side=M9,k.needsUpdate=!0,D7(k,j,y),k.side=t8;else D7(k,j,y)}this.compile=function(k,j,y=null){if(y===null)y=k;if(N=O0.get(y),N.init(j),w.push(N),y.traverseVisible(function(x){if(x.isLight&&x.layers.test(j.layers)){if(N.pushLight(x),x.castShadow)N.pushShadow(x)}}),k!==y)k.traverseVisible(function(x){if(x.isLight&&x.layers.test(j.layers)){if(N.pushLight(x),x.castShadow)N.pushShadow(x)}});N.setupLights();let v=new Set;return k.traverse(function(x){if(!(x.isMesh||x.isPoints||x.isLine||x.isSprite))return;let e=x.material;if(e)if(Array.isArray(e))for(let U0=0;U0<e.length;U0++){let N0=e[U0];M8(N0,y,x),v.add(N0)}else M8(e,y,x),v.add(e)}),w.pop(),N=null,v},this.compileAsync=function(k,j,y=null){let v=this.compile(k,j,y);return new Promise((x)=>{function e(){if(v.forEach(function(U0){if(M0.get(U0).currentProgram.isReady())v.delete(U0)}),v.size===0){x(k);return}setTimeout(e,10)}if(P0.get("KHR_parallel_shader_compile")!==null)e();else setTimeout(e,10)})};let r0=null;function Z6(k){if(r0)r0(k)}function a8(){f6.stop()}function oH(){f6.start()}let f6=new GQ;if(f6.setAnimationLoop(Z6),typeof self<"u")f6.setContext(self);this.setAnimationLoop=function(k){r0=k,$0.setAnimationLoop(k),k===null?f6.stop():f6.start()},$0.addEventListener("sessionstart",a8),$0.addEventListener("sessionend",oH),this.render=function(k,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(k.matrixWorldAutoUpdate===!0)k.updateMatrixWorld();if(j.parent===null&&j.matrixWorldAutoUpdate===!0)j.updateMatrixWorld();if($0.enabled===!0&&$0.isPresenting===!0){if($0.cameraAutoUpdate===!0)$0.updateCamera(j);j=$0.getCamera()}if(k.isScene===!0)k.onBeforeRender(L,k,j,P);if(N=O0.get(k,w.length),N.init(j),w.push(N),W0.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),n.setFromProjectionMatrix(W0),D0=this.localClippingEnabled,H0=v0.init(this.clippingPlanes,D0),M=K0.get(k,O.length),M.init(),O.push(M),$0.enabled===!0&&$0.isPresenting===!0){let e=L.xr.getDepthSensingMesh();if(e!==null)gJ(e,j,-1/0,L.sortObjects)}if(gJ(k,j,0,L.sortObjects),M.finish(),L.sortObjects===!0)M.sort(p,X0);if(n0=$0.enabled===!1||$0.isPresenting===!1||$0.hasDepthSensing()===!1,n0)F0.addToRenderList(M,k);if(this.info.render.frame++,H0===!0)v0.beginShadows();let y=N.state.shadowsArray;if(Z0.render(y,k,j),H0===!0)v0.endShadows();if(this.info.autoReset===!0)this.info.reset();let{opaque:v,transmissive:x}=M;if(N.setupLights(),j.isArrayCamera){let e=j.cameras;if(x.length>0)for(let U0=0,N0=e.length;U0<N0;U0++){let R0=e[U0];rH(v,x,k,R0)}if(n0)F0.render(k);for(let U0=0,N0=e.length;U0<N0;U0++){let R0=e[U0];aH(M,k,R0,R0.viewport)}}else{if(x.length>0)rH(v,x,k,j);if(n0)F0.render(k);aH(M,k,j)}if(P!==null&&V===0)B0.updateMultisampleRenderTarget(P),B0.updateRenderTargetMipmap(P);if(k.isScene===!0)k.onAfterRender(L,k,j);if(m0.resetDefaultState(),u=-1,z=null,w.pop(),w.length>0){if(N=w[w.length-1],H0===!0)v0.setGlobalState(L.clippingPlanes,N.state.camera)}else N=null;if(O.pop(),O.length>0)M=O[O.length-1];else M=null};function gJ(k,j,y,v){if(k.visible===!1)return;if(k.layers.test(j.layers)){if(k.isGroup)y=k.renderOrder;else if(k.isLOD){if(k.autoUpdate===!0)k.update(j)}else if(k.isLight){if(N.pushLight(k),k.castShadow)N.pushShadow(k)}else if(k.isSprite){if(!k.frustumCulled||n.intersectsSprite(k)){if(v)b.setFromMatrixPosition(k.matrixWorld).applyMatrix4(W0);let U0=a.update(k),N0=k.material;if(N0.visible)M.push(k,U0,N0,y,b.z,null)}}else if(k.isMesh||k.isLine||k.isPoints){if(!k.frustumCulled||n.intersectsObject(k)){let U0=a.update(k),N0=k.material;if(v){if(k.boundingSphere!==void 0){if(k.boundingSphere===null)k.computeBoundingSphere();b.copy(k.boundingSphere.center)}else{if(U0.boundingSphere===null)U0.computeBoundingSphere();b.copy(U0.boundingSphere.center)}b.applyMatrix4(k.matrixWorld).applyMatrix4(W0)}if(Array.isArray(N0)){let R0=U0.groups;for(let j0=0,f0=R0.length;j0<f0;j0++){let L0=R0[j0],s0=N0[L0.materialIndex];if(s0&&s0.visible)M.push(k,U0,s0,y,b.z,L0)}}else if(N0.visible)M.push(k,U0,N0,y,b.z,null)}}}let e=k.children;for(let U0=0,N0=e.length;U0<N0;U0++)gJ(e[U0],j,y,v)}function aH(k,j,y,v){let{opaque:x,transmissive:e,transparent:U0}=k;if(N.setupLightsView(y),H0===!0)v0.setGlobalState(L.clippingPlanes,y);if(v)Y0.viewport(C.copy(v));if(x.length>0)R7(x,j,y);if(e.length>0)R7(e,j,y);if(U0.length>0)R7(U0,j,y);Y0.buffers.depth.setTest(!0),Y0.buffers.depth.setMask(!0),Y0.buffers.color.setMask(!0),Y0.setPolygonOffset(!1)}function rH(k,j,y,v){if((y.isScene===!0?y.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[v.id]===void 0)N.state.transmissionRenderTarget[v.id]=new F6(1,1,{generateMipmaps:!0,type:P0.has("EXT_color_buffer_half_float")||P0.has("EXT_color_buffer_float")?t9:A6,minFilter:C9,samples:4,stencilBuffer:W,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:i0.workingColorSpace});let e=N.state.transmissionRenderTarget[v.id],U0=v.viewport||C;e.setSize(U0.z*L.transmissionResolutionScale,U0.w*L.transmissionResolutionScale);let N0=L.getRenderTarget();if(L.setRenderTarget(e),L.getClearColor(c),m=L.getClearAlpha(),m<1)L.setClearColor(16777215,0.5);if(L.clear(),n0)F0.render(y);let R0=L.toneMapping;L.toneMapping=G6;let j0=v.viewport;if(v.viewport!==void 0)v.viewport=void 0;if(N.setupLightsView(v),H0===!0)v0.setGlobalState(L.clippingPlanes,v);if(R7(k,y,v),B0.updateMultisampleRenderTarget(e),B0.updateRenderTargetMipmap(e),P0.has("WEBGL_multisampled_render_to_texture")===!1){let f0=!1;for(let L0=0,s0=j.length;L0<s0;L0++){let t0=j[L0],U8=t0.object,K8=t0.geometry,a0=t0.material,C0=t0.group;if(a0.side===t8&&U8.layers.test(v.layers)){let k8=a0.side;a0.side=A8,a0.needsUpdate=!0,tH(U8,y,v,K8,a0,C0),a0.side=k8,a0.needsUpdate=!0,f0=!0}}if(f0===!0)B0.updateMultisampleRenderTarget(e),B0.updateRenderTargetMipmap(e)}if(L.setRenderTarget(N0),L.setClearColor(c,m),j0!==void 0)v.viewport=j0;L.toneMapping=R0}function R7(k,j,y){let v=j.isScene===!0?j.overrideMaterial:null;for(let x=0,e=k.length;x<e;x++){let U0=k[x],N0=U0.object,R0=U0.geometry,j0=v===null?U0.material:v,f0=U0.group;if(N0.layers.test(y.layers))tH(N0,j,y,R0,j0,f0)}}function tH(k,j,y,v,x,e){if(k.onBeforeRender(L,j,y,v,x,e),k.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,k.matrixWorld),k.normalMatrix.getNormalMatrix(k.modelViewMatrix),x.onBeforeRender(L,j,y,v,k,e),x.transparent===!0&&x.side===t8&&x.forceSinglePass===!1)x.side=A8,x.needsUpdate=!0,L.renderBufferDirect(y,j,v,x,k,e),x.side=M9,x.needsUpdate=!0,L.renderBufferDirect(y,j,v,x,k,e),x.side=t8;else L.renderBufferDirect(y,j,v,x,k,e);k.onAfterRender(L,j,y,v,x,e)}function D7(k,j,y){if(j.isScene!==!0)j=A0;let v=M0.get(k),x=N.state.lights,e=N.state.shadowsArray,U0=x.state.version,N0=d.getParameters(k,x.state,e,j,y),R0=d.getProgramCacheKey(N0),j0=v.programs;if(v.environment=k.isMeshStandardMaterial?j.environment:null,v.fog=j.fog,v.envMap=(k.isMeshStandardMaterial?D:I).get(k.envMap||v.environment),v.envMapRotation=v.environment!==null&&k.envMap===null?j.environmentRotation:k.envMapRotation,j0===void 0)k.addEventListener("dispose",G0),j0=new Map,v.programs=j0;let f0=j0.get(R0);if(f0!==void 0){if(v.currentProgram===f0&&v.lightsStateVersion===U0)return JZ(k,N0),f0}else N0.uniforms=d.getUniforms(k),k.onBeforeCompile(N0,L),f0=d.acquireProgram(N0,R0),j0.set(R0,f0),v.uniforms=N0.uniforms;let L0=v.uniforms;if(!k.isShaderMaterial&&!k.isRawShaderMaterial||k.clipping===!0)L0.clippingPlanes=v0.uniform;if(JZ(k,N0),v.needsLights=sQ(k),v.lightsStateVersion=U0,v.needsLights)L0.ambientLightColor.value=x.state.ambient,L0.lightProbe.value=x.state.probe,L0.directionalLights.value=x.state.directional,L0.directionalLightShadows.value=x.state.directionalShadow,L0.spotLights.value=x.state.spot,L0.spotLightShadows.value=x.state.spotShadow,L0.rectAreaLights.value=x.state.rectArea,L0.ltc_1.value=x.state.rectAreaLTC1,L0.ltc_2.value=x.state.rectAreaLTC2,L0.pointLights.value=x.state.point,L0.pointLightShadows.value=x.state.pointShadow,L0.hemisphereLights.value=x.state.hemi,L0.directionalShadowMap.value=x.state.directionalShadowMap,L0.directionalShadowMatrix.value=x.state.directionalShadowMatrix,L0.spotShadowMap.value=x.state.spotShadowMap,L0.spotLightMatrix.value=x.state.spotLightMatrix,L0.spotLightMap.value=x.state.spotLightMap,L0.pointShadowMap.value=x.state.pointShadowMap,L0.pointShadowMatrix.value=x.state.pointShadowMatrix;return v.currentProgram=f0,v.uniformsList=null,f0}function eH(k){if(k.uniformsList===null){let j=k.currentProgram.getUniforms();k.uniformsList=G7.seqWithValue(j.seq,k.uniforms)}return k.uniformsList}function JZ(k,j){let y=M0.get(k);y.outputColorSpace=j.outputColorSpace,y.batching=j.batching,y.batchingColor=j.batchingColor,y.instancing=j.instancing,y.instancingColor=j.instancingColor,y.instancingMorph=j.instancingMorph,y.skinning=j.skinning,y.morphTargets=j.morphTargets,y.morphNormals=j.morphNormals,y.morphColors=j.morphColors,y.morphTargetsCount=j.morphTargetsCount,y.numClippingPlanes=j.numClippingPlanes,y.numIntersection=j.numClipIntersection,y.vertexAlphas=j.vertexAlphas,y.vertexTangents=j.vertexTangents,y.toneMapping=j.toneMapping}function cQ(k,j,y,v,x){if(j.isScene!==!0)j=A0;B0.resetTextureUnits();let e=j.fog,U0=v.isMeshStandardMaterial?j.environment:null,N0=P===null?L.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:J7,R0=(v.isMeshStandardMaterial?D:I).get(v.envMap||U0),j0=v.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,f0=!!y.attributes.tangent&&(!!v.normalMap||v.anisotropy>0),L0=!!y.morphAttributes.position,s0=!!y.morphAttributes.normal,t0=!!y.morphAttributes.color,U8=G6;if(v.toneMapped){if(P===null||P.isXRRenderTarget===!0)U8=L.toneMapping}let K8=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,a0=K8!==void 0?K8.length:0,C0=M0.get(v),k8=N.state.lights;if(H0===!0){if(D0===!0||k!==z){let B8=k===z&&v.id===u;v0.setState(v,k,B8)}}let e0=!1;if(v.version===C0.__version){if(C0.needsLights&&C0.lightsStateVersion!==k8.state.version)e0=!0;else if(C0.outputColorSpace!==N0)e0=!0;else if(x.isBatchedMesh&&C0.batching===!1)e0=!0;else if(!x.isBatchedMesh&&C0.batching===!0)e0=!0;else if(x.isBatchedMesh&&C0.batchingColor===!0&&x.colorTexture===null)e0=!0;else if(x.isBatchedMesh&&C0.batchingColor===!1&&x.colorTexture!==null)e0=!0;else if(x.isInstancedMesh&&C0.instancing===!1)e0=!0;else if(!x.isInstancedMesh&&C0.instancing===!0)e0=!0;else if(x.isSkinnedMesh&&C0.skinning===!1)e0=!0;else if(!x.isSkinnedMesh&&C0.skinning===!0)e0=!0;else if(x.isInstancedMesh&&C0.instancingColor===!0&&x.instanceColor===null)e0=!0;else if(x.isInstancedMesh&&C0.instancingColor===!1&&x.instanceColor!==null)e0=!0;else if(x.isInstancedMesh&&C0.instancingMorph===!0&&x.morphTexture===null)e0=!0;else if(x.isInstancedMesh&&C0.instancingMorph===!1&&x.morphTexture!==null)e0=!0;else if(C0.envMap!==R0)e0=!0;else if(v.fog===!0&&C0.fog!==e)e0=!0;else if(C0.numClippingPlanes!==void 0&&(C0.numClippingPlanes!==v0.numPlanes||C0.numIntersection!==v0.numIntersection))e0=!0;else if(C0.vertexAlphas!==j0)e0=!0;else if(C0.vertexTangents!==f0)e0=!0;else if(C0.morphTargets!==L0)e0=!0;else if(C0.morphNormals!==s0)e0=!0;else if(C0.morphColors!==t0)e0=!0;else if(C0.toneMapping!==U8)e0=!0;else if(C0.morphTargetsCount!==a0)e0=!0}else e0=!0,C0.__version=v.version;let l8=C0.currentProgram;if(e0===!0)l8=D7(v,j,x);let $9=!1,f8=!1,b9=!1,Q8=l8.getUniforms(),y8=C0.uniforms;if(Y0.useProgram(l8.program))$9=!0,f8=!0,b9=!0;if(v.id!==u)u=v.id,f8=!0;if($9||z!==k){if(Y0.buffers.depth.getReversed())k0.copy(k.projectionMatrix),fW(k0),xW(k0),Q8.setValue(B,"projectionMatrix",k0);else Q8.setValue(B,"projectionMatrix",k.projectionMatrix);Q8.setValue(B,"viewMatrix",k.matrixWorldInverse);let _8=Q8.map.cameraPosition;if(_8!==void 0)_8.setValue(B,z0.setFromMatrixPosition(k.matrixWorld));if(T0.logarithmicDepthBuffer)Q8.setValue(B,"logDepthBufFC",2/(Math.log(k.far+1)/Math.LN2));if(v.isMeshPhongMaterial||v.isMeshToonMaterial||v.isMeshLambertMaterial||v.isMeshBasicMaterial||v.isMeshStandardMaterial||v.isShaderMaterial)Q8.setValue(B,"isOrthographic",k.isOrthographicCamera===!0);if(z!==k)z=k,f8=!0,b9=!0}if(x.isSkinnedMesh){Q8.setOptional(B,x,"bindMatrix"),Q8.setOptional(B,x,"bindMatrixInverse");let B8=x.skeleton;if(B8){if(B8.boneTexture===null)B8.computeBoneTexture();Q8.setValue(B,"boneTexture",B8.boneTexture,B0)}}if(x.isBatchedMesh){if(Q8.setOptional(B,x,"batchingTexture"),Q8.setValue(B,"batchingTexture",x._matricesTexture,B0),Q8.setOptional(B,x,"batchingIdTexture"),Q8.setValue(B,"batchingIdTexture",x._indirectTexture,B0),Q8.setOptional(B,x,"batchingColorTexture"),x._colorsTexture!==null)Q8.setValue(B,"batchingColorTexture",x._colorsTexture,B0)}let v8=y.morphAttributes;if(v8.position!==void 0||v8.normal!==void 0||v8.color!==void 0)c0.update(x,y,l8);if(f8||C0.receiveShadow!==x.receiveShadow)C0.receiveShadow=x.receiveShadow,Q8.setValue(B,"receiveShadow",x.receiveShadow);if(v.isMeshGouraudMaterial&&v.envMap!==null)y8.envMap.value=R0,y8.flipEnvMap.value=R0.isCubeTexture&&R0.isRenderTargetTexture===!1?-1:1;if(v.isMeshStandardMaterial&&v.envMap===null&&j.environment!==null)y8.envMapIntensity.value=j.environmentIntensity;if(f8){if(Q8.setValue(B,"toneMappingExposure",L.toneMappingExposure),C0.needsLights)nQ(y8,b9);if(e&&v.fog===!0)I0.refreshFogUniforms(y8,e);I0.refreshMaterialUniforms(y8,v,t,l,N.state.transmissionRenderTarget[k.id]),G7.upload(B,eH(C0),y8,B0)}if(v.isShaderMaterial&&v.uniformsNeedUpdate===!0)G7.upload(B,eH(C0),y8,B0),v.uniformsNeedUpdate=!1;if(v.isSpriteMaterial)Q8.setValue(B,"center",x.center);if(Q8.setValue(B,"modelViewMatrix",x.modelViewMatrix),Q8.setValue(B,"normalMatrix",x.normalMatrix),Q8.setValue(B,"modelMatrix",x.matrixWorld),v.isShaderMaterial||v.isRawShaderMaterial){let B8=v.uniformsGroups;for(let _8=0,pJ=B8.length;_8<pJ;_8++){let x6=B8[_8];Y8.update(x6,l8),Y8.bind(x6,l8)}}return l8}function nQ(k,j){k.ambientLightColor.needsUpdate=j,k.lightProbe.needsUpdate=j,k.directionalLights.needsUpdate=j,k.directionalLightShadows.needsUpdate=j,k.pointLights.needsUpdate=j,k.pointLightShadows.needsUpdate=j,k.spotLights.needsUpdate=j,k.spotLightShadows.needsUpdate=j,k.rectAreaLights.needsUpdate=j,k.hemisphereLights.needsUpdate=j}function sQ(k){return k.isMeshLambertMaterial||k.isMeshToonMaterial||k.isMeshPhongMaterial||k.isMeshStandardMaterial||k.isShadowMaterial||k.isShaderMaterial&&k.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(k,j,y){M0.get(k.texture).__webglTexture=j,M0.get(k.depthTexture).__webglTexture=y;let v=M0.get(k);if(v.__hasExternalTextures=!0,v.__autoAllocateDepthBuffer=y===void 0,!v.__autoAllocateDepthBuffer){if(P0.has("WEBGL_multisampled_render_to_texture")===!0)console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),v.__useRenderToTexture=!1}},this.setRenderTargetFramebuffer=function(k,j){let y=M0.get(k);y.__webglFramebuffer=j,y.__useDefaultFramebuffer=j===void 0};let iQ=B.createFramebuffer();this.setRenderTarget=function(k,j=0,y=0){P=k,_=j,V=y;let v=!0,x=null,e=!1,U0=!1;if(k){let R0=M0.get(k);if(R0.__useDefaultFramebuffer!==void 0)Y0.bindFramebuffer(B.FRAMEBUFFER,null),v=!1;else if(R0.__webglFramebuffer===void 0)B0.setupRenderTarget(k);else if(R0.__hasExternalTextures)B0.rebindTextures(k,M0.get(k.texture).__webglTexture,M0.get(k.depthTexture).__webglTexture);else if(k.depthBuffer){let L0=k.depthTexture;if(R0.__boundDepthTexture!==L0){if(L0!==null&&M0.has(L0)&&(k.width!==L0.image.width||k.height!==L0.image.height))throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B0.setupDepthRenderbuffer(k)}}let j0=k.texture;if(j0.isData3DTexture||j0.isDataArrayTexture||j0.isCompressedArrayTexture)U0=!0;let f0=M0.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget){if(Array.isArray(f0[j]))x=f0[j][y];else x=f0[j];e=!0}else if(k.samples>0&&B0.useMultisampledRTT(k)===!1)x=M0.get(k).__webglMultisampledFramebuffer;else if(Array.isArray(f0))x=f0[y];else x=f0;C.copy(k.viewport),f.copy(k.scissor),g=k.scissorTest}else C.copy(J0).multiplyScalar(t).floor(),f.copy(w0).multiplyScalar(t).floor(),g=g0;if(y!==0)x=iQ;if(Y0.bindFramebuffer(B.FRAMEBUFFER,x)&&v)Y0.drawBuffers(k,x);if(Y0.viewport(C),Y0.scissor(f),Y0.setScissorTest(g),e){let R0=M0.get(k.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+j,R0.__webglTexture,y)}else if(U0){let R0=M0.get(k.texture),j0=j;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,R0.__webglTexture,y,j0)}else if(k!==null&&y!==0){let R0=M0.get(k.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,R0.__webglTexture,y)}u=-1},this.readRenderTargetPixels=function(k,j,y,v,x,e,U0){if(!(k&&k.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let N0=M0.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&U0!==void 0)N0=N0[U0];if(N0){Y0.bindFramebuffer(B.FRAMEBUFFER,N0);try{let R0=k.texture,j0=R0.format,f0=R0.type;if(!T0.textureFormatReadable(j0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!T0.textureTypeReadable(f0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(j>=0&&j<=k.width-v&&(y>=0&&y<=k.height-x))B.readPixels(j,y,v,x,b0.convert(j0),b0.convert(f0),e)}finally{let R0=P!==null?M0.get(P).__webglFramebuffer:null;Y0.bindFramebuffer(B.FRAMEBUFFER,R0)}}},this.readRenderTargetPixelsAsync=async function(k,j,y,v,x,e,U0){if(!(k&&k.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let N0=M0.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&U0!==void 0)N0=N0[U0];if(N0){let R0=k.texture,j0=R0.format,f0=R0.type;if(!T0.textureFormatReadable(j0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!T0.textureTypeReadable(f0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=k.width-v&&(y>=0&&y<=k.height-x)){Y0.bindFramebuffer(B.FRAMEBUFFER,N0);let L0=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,L0),B.bufferData(B.PIXEL_PACK_BUFFER,e.byteLength,B.STREAM_READ),B.readPixels(j,y,v,x,b0.convert(j0),b0.convert(f0),0);let s0=P!==null?M0.get(P).__webglFramebuffer:null;Y0.bindFramebuffer(B.FRAMEBUFFER,s0);let t0=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await jW(B,t0,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,L0),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,e),B.deleteBuffer(L0),B.deleteSync(t0),e}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(k,j=null,y=0){if(k.isTexture!==!0)l6("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,k=arguments[1];let v=Math.pow(2,-y),x=Math.floor(k.image.width*v),e=Math.floor(k.image.height*v),U0=j!==null?j.x:0,N0=j!==null?j.y:0;B0.setTexture2D(k,0),B.copyTexSubImage2D(B.TEXTURE_2D,y,0,0,U0,N0,x,e),Y0.unbindTexture()};let oQ=B.createFramebuffer(),aQ=B.createFramebuffer();if(this.copyTextureToTexture=function(k,j,y=null,v=null,x=0,e=null){if(k.isTexture!==!0)l6("WebGLRenderer: copyTextureToTexture function signature has changed."),v=arguments[0]||null,k=arguments[1],j=arguments[2],e=arguments[3]||0,y=null;if(e===null)if(x!==0)l6("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),e=x,x=0;else e=0;let U0,N0,R0,j0,f0,L0,s0,t0,U8,K8=k.isCompressedTexture?k.mipmaps[e]:k.image;if(y!==null)U0=y.max.x-y.min.x,N0=y.max.y-y.min.y,R0=y.isBox3?y.max.z-y.min.z:1,j0=y.min.x,f0=y.min.y,L0=y.isBox3?y.min.z:0;else{let v8=Math.pow(2,-x);if(U0=Math.floor(K8.width*v8),N0=Math.floor(K8.height*v8),k.isDataArrayTexture)R0=K8.depth;else if(k.isData3DTexture)R0=Math.floor(K8.depth*v8);else R0=1;j0=0,f0=0,L0=0}if(v!==null)s0=v.x,t0=v.y,U8=v.z;else s0=0,t0=0,U8=0;let a0=b0.convert(j.format),C0=b0.convert(j.type),k8;if(j.isData3DTexture)B0.setTexture3D(j,0),k8=B.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)B0.setTexture2DArray(j,0),k8=B.TEXTURE_2D_ARRAY;else B0.setTexture2D(j,0),k8=B.TEXTURE_2D;B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,j.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,j.unpackAlignment);let e0=B.getParameter(B.UNPACK_ROW_LENGTH),l8=B.getParameter(B.UNPACK_IMAGE_HEIGHT),$9=B.getParameter(B.UNPACK_SKIP_PIXELS),f8=B.getParameter(B.UNPACK_SKIP_ROWS),b9=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,K8.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,K8.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,j0),B.pixelStorei(B.UNPACK_SKIP_ROWS,f0),B.pixelStorei(B.UNPACK_SKIP_IMAGES,L0);let Q8=k.isDataArrayTexture||k.isData3DTexture,y8=j.isDataArrayTexture||j.isData3DTexture;if(k.isDepthTexture){let v8=M0.get(k),B8=M0.get(j),_8=M0.get(v8.__renderTarget),pJ=M0.get(B8.__renderTarget);Y0.bindFramebuffer(B.READ_FRAMEBUFFER,_8.__webglFramebuffer),Y0.bindFramebuffer(B.DRAW_FRAMEBUFFER,pJ.__webglFramebuffer);for(let x6=0;x6<R0;x6++){if(Q8)B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,M0.get(k).__webglTexture,x,L0+x6),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,M0.get(j).__webglTexture,e,U8+x6);B.blitFramebuffer(j0,f0,U0,N0,s0,t0,U0,N0,B.DEPTH_BUFFER_BIT,B.NEAREST)}Y0.bindFramebuffer(B.READ_FRAMEBUFFER,null),Y0.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(x!==0||k.isRenderTargetTexture||M0.has(k)){let v8=M0.get(k),B8=M0.get(j);Y0.bindFramebuffer(B.READ_FRAMEBUFFER,oQ),Y0.bindFramebuffer(B.DRAW_FRAMEBUFFER,aQ);for(let _8=0;_8<R0;_8++){if(Q8)B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,v8.__webglTexture,x,L0+_8);else B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,v8.__webglTexture,x);if(y8)B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B8.__webglTexture,e,U8+_8);else B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,B8.__webglTexture,e);if(x!==0)B.blitFramebuffer(j0,f0,U0,N0,s0,t0,U0,N0,B.COLOR_BUFFER_BIT,B.NEAREST);else if(y8)B.copyTexSubImage3D(k8,e,s0,t0,U8+_8,j0,f0,U0,N0);else B.copyTexSubImage2D(k8,e,s0,t0,j0,f0,U0,N0)}Y0.bindFramebuffer(B.READ_FRAMEBUFFER,null),Y0.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(y8)if(k.isDataTexture||k.isData3DTexture)B.texSubImage3D(k8,e,s0,t0,U8,U0,N0,R0,a0,C0,K8.data);else if(j.isCompressedArrayTexture)B.compressedTexSubImage3D(k8,e,s0,t0,U8,U0,N0,R0,a0,K8.data);else B.texSubImage3D(k8,e,s0,t0,U8,U0,N0,R0,a0,C0,K8);else if(k.isDataTexture)B.texSubImage2D(B.TEXTURE_2D,e,s0,t0,U0,N0,a0,C0,K8.data);else if(k.isCompressedTexture)B.compressedTexSubImage2D(B.TEXTURE_2D,e,s0,t0,K8.width,K8.height,a0,K8.data);else B.texSubImage2D(B.TEXTURE_2D,e,s0,t0,U0,N0,a0,C0,K8);if(B.pixelStorei(B.UNPACK_ROW_LENGTH,e0),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,l8),B.pixelStorei(B.UNPACK_SKIP_PIXELS,$9),B.pixelStorei(B.UNPACK_SKIP_ROWS,f8),B.pixelStorei(B.UNPACK_SKIP_IMAGES,b9),e===0&&j.generateMipmaps)B.generateMipmap(k8);Y0.unbindTexture()},this.copyTextureToTexture3D=function(k,j,y=null,v=null,x=0){if(k.isTexture!==!0)l6("WebGLRenderer: copyTextureToTexture3D function signature has changed."),y=arguments[0]||null,v=arguments[1]||null,k=arguments[2],j=arguments[3],x=arguments[4]||0;return l6('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(k,j,y,v,x)},this.initRenderTarget=function(k){if(M0.get(k).__webglFramebuffer===void 0)B0.setupRenderTarget(k)},this.initTexture=function(k){if(k.isCubeTexture)B0.setTextureCube(k,0);else if(k.isData3DTexture)B0.setTexture3D(k,0);else if(k.isDataArrayTexture||k.isCompressedArrayTexture)B0.setTexture2DArray(k,0);else B0.setTexture2D(k,0);Y0.unbindTexture()},this.resetState=function(){_=0,V=0,P=null,Y0.reset(),m0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return SW}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let $=this.getContext();$.drawingBufferColorspace=i0._getDrawingBufferColorSpace(J),$.unpackColorSpace=i0._getUnpackColorSpace()}}var CQ={type:"change"},xH={type:"start"},IQ={type:"end"},TJ=new d6,VQ=new n8,q1=Math.cos(70*e$.DEG2RAD),R8=new T,j8=2*Math.PI,H8={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},fH=0.000001;class hH extends CJ{constructor(J,$=null){super(J,$);if(this.state=H8.NONE,this.enabled=!0,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:w6.ROTATE,MIDDLE:w6.DOLLY,RIGHT:w6.PAN},this.touches={ONE:B6.ROTATE,TWO:B6.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new T,this._lastQuaternion=new i8,this._lastTargetPosition=new T,this._quat=new i8().setFromUnitVectors(J.up,new T(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new K7,this._sphericalDelta=new K7,this._scale=1,this._panOffset=new T,this._rotateStart=new S0,this._rotateEnd=new S0,this._rotateDelta=new S0,this._panStart=new S0,this._panEnd=new S0,this._panDelta=new S0,this._dollyStart=new S0,this._dollyEnd=new S0,this._dollyDelta=new S0,this._dollyDirection=new T,this._mouse=new S0,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=D1.bind(this),this._onPointerDown=R1.bind(this),this._onPointerUp=M1.bind(this),this._onContextMenu=w1.bind(this),this._onMouseWheel=z1.bind(this),this._onKeyDown=C1.bind(this),this._onTouchStart=V1.bind(this),this._onTouchMove=I1.bind(this),this._onMouseDown=k1.bind(this),this._onMouseMove=L1.bind(this),this._interceptControlDown=B1.bind(this),this._interceptControlUp=P1.bind(this),this.domElement!==null)this.connect();this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(J){J.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=J}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(CQ),this.update(),this.state=H8.NONE}update(J=null){let $=this.object.position;if(R8.copy($).sub(this.target),R8.applyQuaternion(this._quat),this._spherical.setFromVector3(R8),this.autoRotate&&this.state===H8.NONE)this._rotateLeft(this._getAutoRotationAngle(J));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let H=this.minAzimuthAngle,Z=this.maxAzimuthAngle;if(isFinite(H)&&isFinite(Z)){if(H<-Math.PI)H+=j8;else if(H>Math.PI)H-=j8;if(Z<-Math.PI)Z+=j8;else if(Z>Math.PI)Z-=j8;if(H<=Z)this._spherical.theta=Math.max(H,Math.min(Z,this._spherical.theta));else this._spherical.theta=this._spherical.theta>(H+Z)/2?Math.max(H,this._spherical.theta):Math.min(Z,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let W=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let Q=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),W=Q!=this._spherical.radius}if(R8.setFromSpherical(this._spherical),R8.applyQuaternion(this._quatInverse),$.copy(this.target).add(R8),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let Q=null;if(this.object.isPerspectiveCamera){let Y=R8.length();Q=this._clampDistance(Y*this._scale);let X=Y-Q;this.object.position.addScaledVector(this._dollyDirection,X),this.object.updateMatrixWorld(),W=!!X}else if(this.object.isOrthographicCamera){let Y=new T(this._mouse.x,this._mouse.y,0);Y.unproject(this.object);let X=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),W=X!==this.object.zoom;let K=new T(this._mouse.x,this._mouse.y,0);K.unproject(this.object),this.object.position.sub(K).add(Y),this.object.updateMatrixWorld(),Q=R8.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(Q!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(Q).add(this.object.position);else if(TJ.origin.copy(this.object.position),TJ.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(TJ.direction))<q1)this.object.lookAt(this.target);else VQ.setFromNormalAndCoplanarPoint(this.object.up,this.target),TJ.intersectPlane(VQ,this.target)}else if(this.object.isOrthographicCamera){let Q=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),Q!==this.object.zoom)this.object.updateProjectionMatrix(),W=!0}if(this._scale=1,this._performCursorZoom=!1,W||this._lastPosition.distanceToSquared(this.object.position)>fH||8*(1-this._lastQuaternion.dot(this.object.quaternion))>fH||this._lastTargetPosition.distanceToSquared(this.target)>fH)return this.dispatchEvent(CQ),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(J){if(J!==null)return j8/60*this.autoRotateSpeed*J;else return j8/60/60*this.autoRotateSpeed}_getZoomScale(J){let $=Math.abs(J*0.01);return Math.pow(0.95,this.zoomSpeed*$)}_rotateLeft(J){this._sphericalDelta.theta-=J}_rotateUp(J){this._sphericalDelta.phi-=J}_panLeft(J,$){R8.setFromMatrixColumn($,0),R8.multiplyScalar(-J),this._panOffset.add(R8)}_panUp(J,$){if(this.screenSpacePanning===!0)R8.setFromMatrixColumn($,1);else R8.setFromMatrixColumn($,0),R8.crossVectors(this.object.up,R8);R8.multiplyScalar(J),this._panOffset.add(R8)}_pan(J,$){let H=this.domElement;if(this.object.isPerspectiveCamera){let Z=this.object.position;R8.copy(Z).sub(this.target);let W=R8.length();W*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*J*W/H.clientHeight,this.object.matrix),this._panUp(2*$*W/H.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(J*(this.object.right-this.object.left)/this.object.zoom/H.clientWidth,this.object.matrix),this._panUp($*(this.object.top-this.object.bottom)/this.object.zoom/H.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(J,$){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let H=this.domElement.getBoundingClientRect(),Z=J-H.left,W=$-H.top,Q=H.width,Y=H.height;this._mouse.x=Z/Q*2-1,this._mouse.y=-(W/Y)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(J){return Math.max(this.minDistance,Math.min(this.maxDistance,J))}_handleMouseDownRotate(J){this._rotateStart.set(J.clientX,J.clientY)}_handleMouseDownDolly(J){this._updateZoomParameters(J.clientX,J.clientX),this._dollyStart.set(J.clientX,J.clientY)}_handleMouseDownPan(J){this._panStart.set(J.clientX,J.clientY)}_handleMouseMoveRotate(J){this._rotateEnd.set(J.clientX,J.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let $=this.domElement;this._rotateLeft(j8*this._rotateDelta.x/$.clientHeight),this._rotateUp(j8*this._rotateDelta.y/$.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(J){if(this._dollyEnd.set(J.clientX,J.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(J){this._panEnd.set(J.clientX,J.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(J){if(this._updateZoomParameters(J.clientX,J.clientY),J.deltaY<0)this._dollyIn(this._getZoomScale(J.deltaY));else if(J.deltaY>0)this._dollyOut(this._getZoomScale(J.deltaY));this.update()}_handleKeyDown(J){let $=!1;switch(J.code){case this.keys.UP:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(j8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);$=!0;break;case this.keys.BOTTOM:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(-j8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);$=!0;break;case this.keys.LEFT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(j8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);$=!0;break;case this.keys.RIGHT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(-j8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);$=!0;break}if($)J.preventDefault(),this.update()}_handleTouchStartRotate(J){if(this._pointers.length===1)this._rotateStart.set(J.pageX,J.pageY);else{let $=this._getSecondPointerPosition(J),H=0.5*(J.pageX+$.x),Z=0.5*(J.pageY+$.y);this._rotateStart.set(H,Z)}}_handleTouchStartPan(J){if(this._pointers.length===1)this._panStart.set(J.pageX,J.pageY);else{let $=this._getSecondPointerPosition(J),H=0.5*(J.pageX+$.x),Z=0.5*(J.pageY+$.y);this._panStart.set(H,Z)}}_handleTouchStartDolly(J){let $=this._getSecondPointerPosition(J),H=J.pageX-$.x,Z=J.pageY-$.y,W=Math.sqrt(H*H+Z*Z);this._dollyStart.set(0,W)}_handleTouchStartDollyPan(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enablePan)this._handleTouchStartPan(J)}_handleTouchStartDollyRotate(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enableRotate)this._handleTouchStartRotate(J)}_handleTouchMoveRotate(J){if(this._pointers.length==1)this._rotateEnd.set(J.pageX,J.pageY);else{let H=this._getSecondPointerPosition(J),Z=0.5*(J.pageX+H.x),W=0.5*(J.pageY+H.y);this._rotateEnd.set(Z,W)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let $=this.domElement;this._rotateLeft(j8*this._rotateDelta.x/$.clientHeight),this._rotateUp(j8*this._rotateDelta.y/$.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(J){if(this._pointers.length===1)this._panEnd.set(J.pageX,J.pageY);else{let $=this._getSecondPointerPosition(J),H=0.5*(J.pageX+$.x),Z=0.5*(J.pageY+$.y);this._panEnd.set(H,Z)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(J){let $=this._getSecondPointerPosition(J),H=J.pageX-$.x,Z=J.pageY-$.y,W=Math.sqrt(H*H+Z*Z);this._dollyEnd.set(0,W),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let Q=(J.pageX+$.x)*0.5,Y=(J.pageY+$.y)*0.5;this._updateZoomParameters(Q,Y)}_handleTouchMoveDollyPan(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enablePan)this._handleTouchMovePan(J)}_handleTouchMoveDollyRotate(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enableRotate)this._handleTouchMoveRotate(J)}_addPointer(J){this._pointers.push(J.pointerId)}_removePointer(J){delete this._pointerPositions[J.pointerId];for(let $=0;$<this._pointers.length;$++)if(this._pointers[$]==J.pointerId){this._pointers.splice($,1);return}}_isTrackingPointer(J){for(let $=0;$<this._pointers.length;$++)if(this._pointers[$]==J.pointerId)return!0;return!1}_trackPointer(J){let $=this._pointerPositions[J.pointerId];if($===void 0)$=new S0,this._pointerPositions[J.pointerId]=$;$.set(J.pageX,J.pageY)}_getSecondPointerPosition(J){let $=J.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[$]}_customWheelEvent(J){let $=J.deltaMode,H={clientX:J.clientX,clientY:J.clientY,deltaY:J.deltaY};switch($){case 1:H.deltaY*=16;break;case 2:H.deltaY*=100;break}if(J.ctrlKey&&!this._controlActive)H.deltaY*=10;return H}}function R1(J){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(J.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(J))return;if(this._addPointer(J),J.pointerType==="touch")this._onTouchStart(J);else this._onMouseDown(J)}function D1(J){if(this.enabled===!1)return;if(J.pointerType==="touch")this._onTouchMove(J);else this._onMouseMove(J)}function M1(J){switch(this._removePointer(J),this._pointers.length){case 0:this.domElement.releasePointerCapture(J.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(IQ),this.state=H8.NONE;break;case 1:let $=this._pointers[0],H=this._pointerPositions[$];this._onTouchStart({pointerId:$,pageX:H.x,pageY:H.y});break}}function k1(J){let $;switch(J.button){case 0:$=this.mouseButtons.LEFT;break;case 1:$=this.mouseButtons.MIDDLE;break;case 2:$=this.mouseButtons.RIGHT;break;default:$=-1}switch($){case w6.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(J),this.state=H8.DOLLY;break;case w6.ROTATE:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=H8.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=H8.ROTATE}break;case w6.PAN:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=H8.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=H8.PAN}break;default:this.state=H8.NONE}if(this.state!==H8.NONE)this.dispatchEvent(xH)}function L1(J){switch(this.state){case H8.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(J);break;case H8.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(J);break;case H8.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(J);break}}function z1(J){if(this.enabled===!1||this.enableZoom===!1||this.state!==H8.NONE)return;J.preventDefault(),this.dispatchEvent(xH),this._handleMouseWheel(this._customWheelEvent(J)),this.dispatchEvent(IQ)}function C1(J){if(this.enabled===!1)return;this._handleKeyDown(J)}function V1(J){switch(this._trackPointer(J),this._pointers.length){case 1:switch(this.touches.ONE){case B6.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(J),this.state=H8.TOUCH_ROTATE;break;case B6.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(J),this.state=H8.TOUCH_PAN;break;default:this.state=H8.NONE}break;case 2:switch(this.touches.TWO){case B6.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(J),this.state=H8.TOUCH_DOLLY_PAN;break;case B6.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(J),this.state=H8.TOUCH_DOLLY_ROTATE;break;default:this.state=H8.NONE}break;default:this.state=H8.NONE}if(this.state!==H8.NONE)this.dispatchEvent(xH)}function I1(J){switch(this._trackPointer(J),this.state){case H8.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(J),this.update();break;case H8.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(J),this.update();break;case H8.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(J),this.update();break;case H8.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(J),this.update();break;default:this.state=H8.NONE}}function w1(J){if(this.enabled===!1)return;J.preventDefault()}function B1(J){if(J.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function P1(J){if(J.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function wQ(J){let $=new FJ;$.background=new x0(5);let H=new C8(45,J.clientWidth/J.clientHeight,50,2000000);H.position.set(0,300000,600000);let Z=new jH({canvas:J,antialias:!0,logarithmicDepthBuffer:!0});Z.setSize(J.clientWidth,J.clientHeight),Z.setPixelRatio(Math.min(window.devicePixelRatio,2)),Z.toneMapping=o7,Z.toneMappingExposure=1.2;let W=new hH(H,J);W.enableDamping=!0,W.dampingFactor=0.08,W.minDistance=8000,W.maxDistance=1200000,W.target.set(0,0,0);let Q=new kJ(16777215,3);Q.position.set(-500000,1e5,300000),$.add(Q);let Y=new LJ(1118498,0.5);return $.add(Y),A1($),window.addEventListener("resize",()=>{let{clientWidth:X,clientHeight:K}=J;H.aspect=X/K,H.updateProjectionMatrix(),Z.setSize(X,K)}),{scene:$,camera:H,renderer:Z,controls:W,sunLight:Q}}function A1(J){let H=new Float32Array(24000),Z=new Float32Array(24000);for(let Y=0;Y<8000;Y++){let X=Math.random()*Math.PI*2,K=Math.acos(2*Math.random()-1),U=1500000+Math.random()*400000;H[Y*3]=U*Math.sin(K)*Math.cos(X),H[Y*3+1]=U*Math.sin(K)*Math.sin(X),H[Y*3+2]=U*Math.cos(K);let E=0.4+Math.random()*0.6,G=Math.random();Z[Y*3]=E*(G>0.8?1:0.9),Z[Y*3+1]=E*0.95,Z[Y*3+2]=E*(G<0.2?1:0.9)}let W=new T8;W.setAttribute("position",new N8(H,3)),W.setAttribute("color",new N8(Z,3));let Q=new Z7({size:1.5,vertexColors:!0,sizeAttenuation:!1});J.add(new OJ(W,Q))}var BQ=new Date("2000-01-01T12:00:00Z"),R6=2*Math.PI,S6=3600*(180/Math.PI);var T1=648000/Math.PI,pN=-0.17-5*Math.log10(T1);function fQ(J){if(J!==!0&&J!==!1)throw console.trace(),`Value is not boolean: ${J}`;return J}function yH(J){if(!Number.isFinite(J))throw console.trace(),`Value is not a finite number: ${J}`;return J}function j9(J){return J-Math.floor(J)}var h0;(function(J){J.Sun="Sun",J.Moon="Moon",J.Mercury="Mercury",J.Venus="Venus",J.Earth="Earth",J.Mars="Mars",J.Jupiter="Jupiter",J.Saturn="Saturn",J.Uranus="Uranus",J.Neptune="Neptune",J.Pluto="Pluto",J.SSB="SSB",J.EMB="EMB",J.Star1="Star1",J.Star2="Star2",J.Star3="Star3",J.Star4="Star4",J.Star5="Star5",J.Star6="Star6",J.Star7="Star7",J.Star8="Star8"})(h0||(h0={}));var S1=[h0.Star1,h0.Star2,h0.Star3,h0.Star4,h0.Star5,h0.Star6,h0.Star7,h0.Star8],_1=[{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0}];function j1(J){let $=S1.indexOf(J);return $>=0?_1[$]:null}function nH(J){let $=j1(J);return $&&$.dist>0?$:null}var N7;(function(J){J[J.From2000=0]="From2000",J[J.Into2000=1]="Into2000"})(N7||(N7={}));var _6={Mercury:[[[[4.40250710144,0,0],[0.40989414977,1.48302034195,26087.9031415742],[0.050462942,4.47785489551,52175.8062831484],[0.00855346844,1.16520322459,78263.70942472259],[0.00165590362,4.11969163423,104351.61256629678],[0.00034561897,0.77930768443,130439.51570787099],[0.00007583476,3.71348404924,156527.41884944518]],[[26087.90313685529,0,0],[0.01131199811,6.21874197797,26087.9031415742],[0.00292242298,3.04449355541,52175.8062831484],[0.00075775081,6.08568821653,78263.70942472259],[0.00019676525,2.80965111777,104351.61256629678]]],[[[0.11737528961,1.98357498767,26087.9031415742],[0.02388076996,5.03738959686,52175.8062831484],[0.01222839532,3.14159265359,0],[0.0054325181,1.79644363964,78263.70942472259],[0.0012977877,4.83232503958,104351.61256629678],[0.00031866927,1.58088495658,130439.51570787099],[0.00007963301,4.60972126127,156527.41884944518]],[[0.00274646065,3.95008450011,26087.9031415742],[0.00099737713,3.14159265359,0]]],[[[0.39528271651,0,0],[0.07834131818,6.19233722598,26087.9031415742],[0.00795525558,2.95989690104,52175.8062831484],[0.00121281764,6.01064153797,78263.70942472259],[0.00021921969,2.77820093972,104351.61256629678],[0.00004354065,5.82894543774,130439.51570787099]],[[0.0021734774,4.65617158665,26087.9031415742],[0.00044141826,1.42385544001,52175.8062831484]]]],Venus:[[[[3.17614666774,0,0],[0.01353968419,5.59313319619,10213.285546211],[0.00089891645,5.30650047764,20426.571092422],[0.00005477194,4.41630661466,7860.4193924392],[0.00003455741,2.6996444782,11790.6290886588],[0.00002372061,2.99377542079,3930.2096962196],[0.00001317168,5.18668228402,26.2983197998],[0.00001664146,4.25018630147,1577.3435424478],[0.00001438387,4.15745084182,9683.5945811164],[0.00001200521,6.15357116043,30639.856638633]],[[10213.28554621638,0,0],[0.00095617813,2.4640651111,10213.285546211],[0.00007787201,0.6247848222,20426.571092422]]],[[[0.05923638472,0.26702775812,10213.285546211],[0.00040107978,1.14737178112,20426.571092422],[0.00032814918,3.14159265359,0]],[[0.00287821243,1.88964962838,10213.285546211]]],[[[0.72334820891,0,0],[0.00489824182,4.02151831717,10213.285546211],[0.00001658058,4.90206728031,20426.571092422],[0.00001378043,1.12846591367,11790.6290886588],[0.00001632096,2.84548795207,7860.4193924392],[0.00000498395,2.58682193892,9683.5945811164],[0.00000221985,2.01346696541,19367.1891622328],[0.00000237454,2.55136053886,15720.8387848784]],[[0.00034551041,0.89198706276,10213.285546211]]]],Earth:[[[[1.75347045673,0,0],[0.03341656453,4.66925680415,6283.0758499914],[0.00034894275,4.62610242189,12566.1516999828],[0.00003417572,2.82886579754,3.523118349],[0.00003497056,2.74411783405,5753.3848848968],[0.00003135899,3.62767041756,77713.7714681205],[0.00002676218,4.41808345438,7860.4193924392],[0.00002342691,6.13516214446,3930.2096962196],[0.00001273165,2.03709657878,529.6909650946],[0.00001324294,0.74246341673,11506.7697697936],[0.00000901854,2.04505446477,26.2983197998],[0.00001199167,1.10962946234,1577.3435424478],[0.00000857223,3.50849152283,398.1490034082],[0.00000779786,1.17882681962,5223.6939198022],[0.0000099025,5.23268072088,5884.9268465832],[0.00000753141,2.53339052847,5507.5532386674],[0.00000505267,4.58292599973,18849.2275499742],[0.00000492392,4.20505711826,775.522611324],[0.00000356672,2.91954114478,0.0673103028],[0.00000284125,1.89869240932,796.2980068164],[0.00000242879,0.34481445893,5486.777843175],[0.00000317087,5.84901948512,11790.6290886588],[0.00000271112,0.31486255375,10977.078804699],[0.00000206217,4.80646631478,2544.3144198834],[0.00000205478,1.86953770281,5573.1428014331],[0.00000202318,2.45767790232,6069.7767545534],[0.00000126225,1.08295459501,20.7753954924],[0.00000155516,0.83306084617,213.299095438]],[[6283.0758499914,0,0],[0.00206058863,2.67823455808,6283.0758499914],[0.00004303419,2.63512233481,12566.1516999828]],[[0.00008721859,1.07253635559,6283.0758499914]]],[[],[[0.00227777722,3.4137662053,6283.0758499914],[0.00003805678,3.37063423795,12566.1516999828]]],[[[1.00013988784,0,0],[0.01670699632,3.09846350258,6283.0758499914],[0.00013956024,3.05524609456,12566.1516999828],[0.0000308372,5.19846674381,77713.7714681205],[0.00001628463,1.17387558054,5753.3848848968],[0.00001575572,2.84685214877,7860.4193924392],[0.00000924799,5.45292236722,11506.7697697936],[0.00000542439,4.56409151453,3930.2096962196],[0.0000047211,3.66100022149,5884.9268465832],[0.00000085831,1.27079125277,161000.6857376741],[0.00000057056,2.01374292245,83996.84731811189],[0.00000055736,5.2415979917,71430.69561812909],[0.00000174844,3.01193636733,18849.2275499742],[0.00000243181,4.2734953079,11790.6290886588]],[[0.00103018607,1.10748968172,6283.0758499914],[0.00001721238,1.06442300386,12566.1516999828]],[[0.00004359385,5.78455133808,6283.0758499914]]]],Mars:[[[[6.20347711581,0,0],[0.18656368093,5.0503710027,3340.6124266998],[0.01108216816,5.40099836344,6681.2248533996],[0.00091798406,5.75478744667,10021.8372800994],[0.00027744987,5.97049513147,3.523118349],[0.00010610235,2.93958560338,2281.2304965106],[0.00012315897,0.84956094002,2810.9214616052],[0.00008926784,4.15697846427,0.0172536522],[0.00008715691,6.11005153139,13362.4497067992],[0.00006797556,0.36462229657,398.1490034082],[0.00007774872,3.33968761376,5621.8429232104],[0.00003575078,1.6618650571,2544.3144198834],[0.00004161108,0.22814971327,2942.4634232916],[0.00003075252,0.85696614132,191.4482661116],[0.00002628117,0.64806124465,3337.0893083508],[0.00002937546,6.07893711402,0.0673103028],[0.00002389414,5.03896442664,796.2980068164],[0.00002579844,0.02996736156,3344.1355450488],[0.00001528141,1.14979301996,6151.533888305],[0.00001798806,0.65634057445,529.6909650946],[0.00001264357,3.62275122593,5092.1519581158],[0.00001286228,3.06796065034,2146.1654164752],[0.00001546404,2.91579701718,1751.539531416],[0.00001024902,3.69334099279,8962.4553499102],[0.00000891566,0.18293837498,16703.062133499],[0.00000858759,2.4009381194,2914.0142358238],[0.00000832715,2.46418619474,3340.5951730476],[0.0000083272,4.49495782139,3340.629680352],[0.00000712902,3.66335473479,1059.3819301892],[0.00000748723,3.82248614017,155.4203994342],[0.00000723861,0.67497311481,3738.761430108],[0.00000635548,2.92182225127,8432.7643848156],[0.00000655162,0.48864064125,3127.3133312618],[0.00000550474,3.81001042328,0.9803210682],[0.0000055275,4.47479317037,1748.016413067],[0.00000425966,0.55364317304,6283.0758499914],[0.00000415131,0.49662285038,213.299095438],[0.00000472167,3.62547124025,1194.4470102246],[0.00000306551,0.38052848348,6684.7479717486],[0.00000312141,0.99853944405,6677.7017350506],[0.00000293198,4.22131299634,20.7753954924],[0.00000302375,4.48618007156,3532.0606928114],[0.00000274027,0.54222167059,3340.545116397],[0.00000281079,5.88163521788,1349.8674096588],[0.00000231183,1.28242156993,3870.3033917944],[0.00000283602,5.7688543494,3149.1641605882],[0.00000236117,5.75503217933,3333.498879699],[0.00000274033,0.13372524985,3340.6797370026],[0.00000299395,2.78323740866,6254.6266625236]],[[3340.61242700512,0,0],[0.01457554523,3.60433733236,3340.6124266998],[0.00168414711,3.92318567804,6681.2248533996],[0.00020622975,4.26108844583,10021.8372800994],[0.00003452392,4.7321039319,3.523118349],[0.00002586332,4.60670058555,13362.4497067992],[0.00000841535,4.45864030426,2281.2304965106]],[[0.00058152577,2.04961712429,3340.6124266998],[0.00013459579,2.45738706163,6681.2248533996]]],[[[0.03197134986,3.76832042431,3340.6124266998],[0.00298033234,4.10616996305,6681.2248533996],[0.00289104742,0,0],[0.00031365539,4.4465105309,10021.8372800994],[0.000034841,4.7881254926,13362.4497067992]],[[0.00217310991,6.04472194776,3340.6124266998],[0.00020976948,3.14159265359,0],[0.00012834709,1.60810667915,6681.2248533996]]],[[[1.53033488271,0,0],[0.1418495316,3.47971283528,3340.6124266998],[0.00660776362,3.81783443019,6681.2248533996],[0.00046179117,4.15595316782,10021.8372800994],[0.00008109733,5.55958416318,2810.9214616052],[0.00007485318,1.77239078402,5621.8429232104],[0.00005523191,1.3643630377,2281.2304965106],[0.0000382516,4.49407183687,13362.4497067992],[0.00002306537,0.09081579001,2544.3144198834],[0.00001999396,5.36059617709,3337.0893083508],[0.00002484394,4.9254563992,2942.4634232916],[0.00001960195,4.74249437639,3344.1355450488],[0.00001167119,2.11260868341,5092.1519581158],[0.00001102816,5.00908403998,398.1490034082],[0.00000899066,4.40791133207,529.6909650946],[0.00000992252,5.83861961952,6151.533888305],[0.00000807354,2.10217065501,1059.3819301892],[0.00000797915,3.44839203899,796.2980068164],[0.00000740975,1.49906336885,2146.1654164752]],[[0.01107433345,2.03250524857,3340.6124266998],[0.00103175887,2.37071847807,6681.2248533996],[0.000128772,0,0],[0.0001081588,2.70888095665,10021.8372800994]],[[0.00044242249,0.47930604954,3340.6124266998],[0.00008138042,0.86998389204,6681.2248533996]]]],Jupiter:[[[[0.59954691494,0,0],[0.09695898719,5.06191793158,529.6909650946],[0.00573610142,1.44406205629,7.1135470008],[0.00306389205,5.41734730184,1059.3819301892],[0.00097178296,4.14264726552,632.7837393132],[0.00072903078,3.64042916389,522.5774180938],[0.00064263975,3.41145165351,103.0927742186],[0.00039806064,2.29376740788,419.4846438752],[0.00038857767,1.27231755835,316.3918696566],[0.00027964629,1.7845459182,536.8045120954],[0.0001358973,5.7748104079,1589.0728952838],[0.00008246349,3.5822792584,206.1855484372],[0.00008768704,3.63000308199,949.1756089698],[0.00007368042,5.0810119427,735.8765135318],[0.0000626315,0.02497628807,213.299095438],[0.00006114062,4.51319998626,1162.4747044078],[0.00004905396,1.32084470588,110.2063212194],[0.00005305285,1.30671216791,14.2270940016],[0.00005305441,4.18625634012,1052.2683831884],[0.00004647248,4.69958103684,3.9321532631],[0.00003045023,4.31676431084,426.598190876],[0.00002609999,1.56667394063,846.0828347512],[0.00002028191,1.06376530715,3.1813937377],[0.00001764763,2.14148655117,1066.49547719],[0.00001722972,3.88036268267,1265.5674786264],[0.00001920945,0.97168196472,639.897286314],[0.00001633223,3.58201833555,515.463871093],[0.00001431999,4.29685556046,625.6701923124],[0.00000973272,4.09764549134,95.9792272178]],[[529.69096508814,0,0],[0.00489503243,4.2208293947,529.6909650946],[0.00228917222,6.02646855621,7.1135470008],[0.00030099479,4.54540782858,1059.3819301892],[0.0002072092,5.45943156902,522.5774180938],[0.00012103653,0.16994816098,536.8045120954],[0.00006067987,4.42422292017,103.0927742186],[0.00005433968,3.98480737746,419.4846438752],[0.00004237744,5.89008707199,14.2270940016]],[[0.00047233601,4.32148536482,7.1135470008],[0.00030649436,2.929777887,529.6909650946],[0.00014837605,3.14159265359,0]]],[[[0.02268615702,3.55852606721,529.6909650946],[0.00109971634,3.90809347197,1059.3819301892],[0.00110090358,0,0],[0.00008101428,3.60509572885,522.5774180938],[0.00006043996,4.25883108339,1589.0728952838],[0.00006437782,0.30627119215,536.8045120954]],[[0.00078203446,1.52377859742,529.6909650946]]],[[[5.20887429326,0,0],[0.25209327119,3.49108639871,529.6909650946],[0.00610599976,3.84115365948,1059.3819301892],[0.00282029458,2.57419881293,632.7837393132],[0.00187647346,2.07590383214,522.5774180938],[0.00086792905,0.71001145545,419.4846438752],[0.00072062974,0.21465724607,536.8045120954],[0.00065517248,5.9799588479,316.3918696566],[0.00029134542,1.67759379655,103.0927742186],[0.00030135335,2.16132003734,949.1756089698],[0.00023453271,3.54023522184,735.8765135318],[0.00022283743,4.19362594399,1589.0728952838],[0.00023947298,0.2745803748,7.1135470008],[0.00013032614,2.96042965363,1162.4747044078],[0.0000970336,1.90669633585,206.1855484372],[0.00012749023,2.71550286592,1052.2683831884],[0.00007057931,2.18184839926,1265.5674786264],[0.00006137703,6.26418240033,846.0828347512],[0.00002616976,2.00994012876,1581.959348283]],[[0.0127180152,2.64937512894,529.6909650946],[0.00061661816,3.00076460387,1059.3819301892],[0.00053443713,3.89717383175,522.5774180938],[0.00031185171,4.88276958012,536.8045120954],[0.00041390269,0,0]]]],Saturn:[[[[0.87401354025,0,0],[0.11107659762,3.96205090159,213.299095438],[0.01414150957,4.58581516874,7.1135470008],[0.00398379389,0.52112032699,206.1855484372],[0.00350769243,3.30329907896,426.598190876],[0.00206816305,0.24658372002,103.0927742186],[0.000792713,3.84007056878,220.4126424388],[0.00023990355,4.66976924553,110.2063212194],[0.00016573588,0.43719228296,419.4846438752],[0.00014906995,5.76903183869,316.3918696566],[0.0001582029,0.93809155235,632.7837393132],[0.00014609559,1.56518472,3.9321532631],[0.00013160301,4.44891291899,14.2270940016],[0.00015053543,2.71669915667,639.897286314],[0.00013005299,5.98119023644,11.0457002639],[0.00010725067,3.12939523827,202.2533951741],[0.00005863206,0.23656938524,529.6909650946],[0.00005227757,4.20783365759,3.1813937377],[0.00006126317,1.76328667907,277.0349937414],[0.00005019687,3.17787728405,433.7117378768],[0.0000459255,0.61977744975,199.0720014364],[0.00004005867,2.24479718502,63.7358983034],[0.00002953796,0.98280366998,95.9792272178],[0.0000387367,3.22283226966,138.5174968707],[0.00002461186,2.03163875071,735.8765135318],[0.00003269484,0.77492638211,949.1756089698],[0.00001758145,3.2658010994,522.5774180938],[0.00001640172,5.5050445305,846.0828347512],[0.00001391327,4.02333150505,323.5054166574],[0.00001580648,4.37265307169,309.2783226558],[0.00001123498,2.83726798446,415.5524906121],[0.00001017275,3.71700135395,227.5261894396],[0.00000848642,3.1915017083,209.3669421749]],[[213.2990952169,0,0],[0.01297370862,1.82834923978,213.299095438],[0.00564345393,2.88499717272,7.1135470008],[0.00093734369,1.06311793502,426.598190876],[0.00107674962,2.27769131009,206.1855484372],[0.00040244455,2.04108104671,220.4126424388],[0.00019941774,1.2795439047,103.0927742186],[0.00010511678,2.7488034213,14.2270940016],[0.00006416106,0.38238295041,639.897286314],[0.00004848994,2.43037610229,419.4846438752],[0.00004056892,2.92133209468,110.2063212194],[0.00003768635,3.6496533078,3.9321532631]],[[0.0011644133,1.17988132879,7.1135470008],[0.00091841837,0.0732519584,213.299095438],[0.00036661728,0,0],[0.00015274496,4.06493179167,206.1855484372]]],[[[0.04330678039,3.60284428399,213.299095438],[0.00240348302,2.85238489373,426.598190876],[0.00084745939,0,0],[0.00030863357,3.48441504555,220.4126424388],[0.00034116062,0.57297307557,206.1855484372],[0.0001473407,2.11846596715,639.897286314],[0.00009916667,5.79003188904,419.4846438752],[0.00006993564,4.7360468972,7.1135470008],[0.00004807588,5.43305312061,316.3918696566]],[[0.00198927992,4.93901017903,213.299095438],[0.00036947916,3.14159265359,0],[0.00017966989,0.5197943111,426.598190876]]],[[[9.55758135486,0,0],[0.52921382865,2.39226219573,213.299095438],[0.01873679867,5.2354960466,206.1855484372],[0.01464663929,1.64763042902,426.598190876],[0.00821891141,5.93520042303,316.3918696566],[0.00547506923,5.0153261898,103.0927742186],[0.0037168465,2.27114821115,220.4126424388],[0.00361778765,3.13904301847,7.1135470008],[0.00140617506,5.70406606781,632.7837393132],[0.00108974848,3.29313390175,110.2063212194],[0.00069006962,5.94099540992,419.4846438752],[0.00061053367,0.94037691801,639.897286314],[0.00048913294,1.55733638681,202.2533951741],[0.00034143772,0.19519102597,277.0349937414],[0.00032401773,5.47084567016,949.1756089698],[0.00020936596,0.46349251129,735.8765135318],[0.00009796004,5.20477537945,1265.5674786264],[0.00011993338,5.98050967385,846.0828347512],[0.000208393,1.52102476129,433.7117378768],[0.00015298404,3.0594381494,529.6909650946],[0.00006465823,0.17732249942,1052.2683831884],[0.00011380257,1.7310542704,522.5774180938],[0.00003419618,4.94550542171,1581.959348283]],[[0.0618298134,0.2584351148,213.299095438],[0.00506577242,0.71114625261,206.1855484372],[0.00341394029,5.79635741658,426.598190876],[0.00188491195,0.47215589652,220.4126424388],[0.00186261486,3.14159265359,0],[0.00143891146,1.40744822888,7.1135470008]],[[0.00436902572,4.78671677509,213.299095438]]]],Uranus:[[[[5.48129294297,0,0],[0.09260408234,0.89106421507,74.7815985673],[0.01504247898,3.6271926092,1.4844727083],[0.00365981674,1.89962179044,73.297125859],[0.00272328168,3.35823706307,149.5631971346],[0.00070328461,5.39254450063,63.7358983034],[0.00068892678,6.09292483287,76.2660712756],[0.00061998615,2.26952066061,2.9689454166],[0.00061950719,2.85098872691,11.0457002639],[0.0002646877,3.14152083966,71.8126531507],[0.00025710476,6.11379840493,454.9093665273],[0.0002107885,4.36059339067,148.0787244263],[0.00017818647,1.74436930289,36.6485629295],[0.00014613507,4.73732166022,3.9321532631],[0.00011162509,5.8268179635,224.3447957019],[0.0001099791,0.48865004018,138.5174968707],[0.00009527478,2.95516862826,35.1640902212],[0.00007545601,5.236265824,109.9456887885],[0.00004220241,3.23328220918,70.8494453042],[0.000040519,2.277550173,151.0476698429],[0.00003354596,1.0654900738,4.4534181249],[0.00002926718,4.62903718891,9.5612275556],[0.0000349034,5.48306144511,146.594251718],[0.00003144069,4.75199570434,77.7505439839],[0.00002922333,5.35235361027,85.8272988312],[0.00002272788,4.36600400036,70.3281804424],[0.00002051219,1.51773566586,0.1118745846],[0.00002148602,0.60745949945,38.1330356378],[0.00001991643,4.92437588682,277.0349937414],[0.00001376226,2.04283539351,65.2203710117],[0.00001666902,3.62744066769,380.12776796],[0.00001284107,3.11347961505,202.2533951741],[0.00001150429,0.93343589092,3.1813937377],[0.00001533221,2.58594681212,52.6901980395],[0.00001281604,0.54271272721,222.8603229936],[0.00001372139,4.19641530878,111.4301614968],[0.00001221029,0.1990065003,108.4612160802],[0.00000946181,1.19253165736,127.4717966068],[0.00001150989,4.17898916639,33.6796175129]],[[74.7815986091,0,0],[0.00154332863,5.24158770553,74.7815985673],[0.00024456474,1.71260334156,1.4844727083],[0.00009258442,0.4282973235,11.0457002639],[0.00008265977,1.50218091379,63.7358983034],[0.0000915016,1.41213765216,149.5631971346]]],[[[0.01346277648,2.61877810547,74.7815985673],[0.000623414,5.08111189648,149.5631971346],[0.00061601196,3.14159265359,0],[0.00009963722,1.61603805646,76.2660712756],[0.0000992616,0.57630380333,73.297125859]],[[0.00034101978,0.01321929936,74.7815985673]]],[[[19.21264847206,0,0],[0.88784984413,5.60377527014,74.7815985673],[0.03440836062,0.32836099706,73.297125859],[0.0205565386,1.7829515933,149.5631971346],[0.0064932241,4.52247285911,76.2660712756],[0.00602247865,3.86003823674,63.7358983034],[0.00496404167,1.40139935333,454.9093665273],[0.00338525369,1.58002770318,138.5174968707],[0.00243509114,1.57086606044,71.8126531507],[0.00190522303,1.99809394714,1.4844727083],[0.00161858838,2.79137786799,148.0787244263],[0.00143706183,1.38368544947,11.0457002639],[0.00093192405,0.17437220467,36.6485629295],[0.00071424548,4.24509236074,224.3447957019],[0.00089806014,3.66105364565,109.9456887885],[0.00039009723,1.66971401684,70.8494453042],[0.00046677296,1.39976401694,35.1640902212],[0.00039025624,3.36234773834,277.0349937414],[0.00036755274,3.88649278513,146.594251718],[0.00030348723,0.70100838798,151.0476698429],[0.00029156413,3.180563367,77.7505439839],[0.00022637073,0.72518687029,529.6909650946],[0.00011959076,1.7504339214,984.6003316219],[0.00025620756,5.25656086672,380.12776796]],[[0.01479896629,3.67205697578,74.7815985673]]]],Neptune:[[[[5.31188633046,0,0],[0.0179847553,2.9010127389,38.1330356378],[0.01019727652,0.48580922867,1.4844727083],[0.00124531845,4.83008090676,36.6485629295],[0.00042064466,5.41054993053,2.9689454166],[0.00037714584,6.09221808686,35.1640902212],[0.00033784738,1.24488874087,76.2660712756],[0.00016482741,0.00007727998,491.5579294568],[0.00009198584,4.93747051954,39.6175083461],[0.0000899425,0.27462171806,175.1660598002]],[[38.13303563957,0,0],[0.00016604172,4.86323329249,1.4844727083],[0.00015744045,2.27887427527,38.1330356378]]],[[[0.03088622933,1.44104372644,38.1330356378],[0.00027780087,5.91271884599,76.2660712756],[0.00027623609,0,0],[0.00015355489,2.52123799551,36.6485629295],[0.00015448133,3.50877079215,39.6175083461]]],[[[30.07013205828,0,0],[0.27062259632,1.32999459377,38.1330356378],[0.01691764014,3.25186135653,36.6485629295],[0.00807830553,5.18592878704,1.4844727083],[0.0053776051,4.52113935896,35.1640902212],[0.00495725141,1.5710564165,491.5579294568],[0.00274571975,1.84552258866,175.1660598002],[0.0001201232,1.92059384991,1021.2488945514],[0.00121801746,5.79754470298,76.2660712756],[0.00100896068,0.3770272493,73.297125859],[0.00135134092,3.37220609835,39.6175083461],[0.00007571796,1.07149207335,388.4651552382]]]]};function f1(J){var $,H,Z,W,Q,Y,X;let K=2000+(J-14)/365.24217;if(K<-500)return $=(K-1820)/100,-20+32*$*$;if(K<500)return $=K/100,H=$*$,Z=$*H,W=H*H,Q=H*Z,Y=Z*Z,10583.6-1014.41*$+33.78311*H-5.952053*Z-0.1798452*W+0.022174192*Q+0.0090316521*Y;if(K<1600)return $=(K-1000)/100,H=$*$,Z=$*H,W=H*H,Q=H*Z,Y=Z*Z,1574.2-556.01*$+71.23472*H+0.319781*Z-0.8503463*W-0.005050998*Q+0.0083572073*Y;if(K<1700)return $=K-1600,H=$*$,Z=$*H,120-0.9808*$-0.01532*H+Z/7129;if(K<1800)return $=K-1700,H=$*$,Z=$*H,W=H*H,8.83+0.1603*$-0.0059285*H+0.00013336*Z-W/1174000;if(K<1860)return $=K-1800,H=$*$,Z=$*H,W=H*H,Q=H*Z,Y=Z*Z,X=Z*W,13.72-0.332447*$+0.0068612*H+0.0041116*Z-0.00037436*W+0.0000121272*Q-0.0000001699*Y+0.000000000875*X;if(K<1900)return $=K-1860,H=$*$,Z=$*H,W=H*H,Q=H*Z,7.62+0.5737*$-0.251754*H+0.01680668*Z-0.0004473624*W+Q/233174;if(K<1920)return $=K-1900,H=$*$,Z=$*H,W=H*H,-2.79+1.494119*$-0.0598939*H+0.0061966*Z-0.000197*W;if(K<1941)return $=K-1920,H=$*$,Z=$*H,21.2+0.84493*$-0.0761*H+0.0020936*Z;if(K<1961)return $=K-1950,H=$*$,Z=$*H,29.07+0.407*$-H/233+Z/2547;if(K<1986)return $=K-1975,H=$*$,Z=$*H,45.45+1.067*$-H/260-Z/718;if(K<2005)return $=K-2000,H=$*$,Z=$*H,W=H*H,Q=H*Z,63.86+0.3345*$-0.060374*H+0.0017275*Z+0.000651814*W+0.00002373599*Q;if(K<2050)return $=K-2000,62.92+0.32217*$+0.005589*$*$;if(K<2150)return $=(K-1820)/100,-20+32*$*$-0.5628*(2150-K);return $=(K-1820)/100,-20+32*$*$}var x1=f1;function PQ(J){return J+x1(J)/86400}class x9{constructor(J){if(J instanceof x9){this.date=J.date,this.ut=J.ut,this.tt=J.tt;return}let $=86400000;if(J instanceof Date&&Number.isFinite(J.getTime())){this.date=J,this.ut=(J.getTime()-BQ.getTime())/$,this.tt=PQ(this.ut);return}if(Number.isFinite(J)){this.date=new Date(BQ.getTime()+J*$),this.ut=J,this.tt=PQ(this.ut);return}throw"Argument must be a Date object, an AstroTime object, or a numeric UTC Julian date."}static FromTerrestrialTime(J){let $=new x9(J);for(;;){let H=J-$.tt;if(Math.abs(H)<0.000000000001)return $;$=$.AddDays(H)}}toString(){return this.date.toISOString()}AddDays(J){return new x9(this.ut+J)}}function j6(J){if(J instanceof x9)return J;return new x9(J)}function h1(J){var $=J.tt/36525,H=((((-0.0000000434*$-0.000000576)*$+0.0020034)*$-0.0001831)*$-46.836769)*$+84381.406;return H/3600}function y1(J,$){let H=J*0.017453292519943295,Z=Math.cos(H),W=Math.sin(H);return[$[0],$[1]*Z-$[2]*W,$[1]*W+$[2]*Z]}function v1(J,$){return y1(h1(J),$)}var b1=0;function g1(J){++b1;let $=J.tt/36525;function H(V0,B){let l0=[],P0;for(P0=0;P0<=B-V0;++P0)l0.push(0);return{min:V0,array:l0}}function Z(V0,B,l0,P0){let T0=[];for(let Y0=0;Y0<=B-V0;++Y0)T0.push(H(l0,P0));return{min:V0,array:T0}}function W(V0,B,l0){let P0=V0.array[B-V0.min];return P0.array[l0-P0.min]}function Q(V0,B,l0,P0){let T0=V0.array[B-V0.min];T0.array[l0-T0.min]=P0}let Y,X,K,U,E,G,F,q,R,M,N,O,w,L,A,_,V,P,u,z,C,f,g,c=Z(-6,6,1,4),m=Z(-6,6,1,4);function r(V0,B){return W(c,V0,B)}function l(V0,B){return W(m,V0,B)}function t(V0,B,l0){return Q(c,V0,B,l0)}function p(V0,B,l0){return Q(m,V0,B,l0)}function X0(V0,B,l0,P0,T0){T0(V0*l0-B*P0,B*l0+V0*P0)}function J0(V0){return Math.sin(R6*V0)}F=$*$,R=0,g=0,N=0,O=3422.7;var w0=J0(0.19833+0.05611*$),g0=J0(0.27869+0.04508*$),n=J0(0.16827-0.36903*$),H0=J0(0.34734-5.37261*$),D0=J0(0.10498-5.37899*$),k0=J0(0.42681-0.41855*$),W0=J0(0.14943-5.37511*$);P=0.84*w0+0.31*g0+14.27*n+7.26*H0+0.28*D0+0.24*k0,u=2.94*w0+0.31*g0+14.27*n+9.34*H0+1.12*D0+0.83*k0,z=-6.4*w0-1.89*k0,C=0.21*w0+0.31*g0+14.27*n-88.7*H0-15.3*D0+0.24*k0-1.86*W0,f=P-z,q=-0.000003332*J0(0.59734-5.37261*$)-0.000000539*J0(0.35498-5.37899*$)-0.000000064*J0(0.39943-5.37511*$),w=R6*j9(0.60643382+1336.85522467*$-0.00000313*F)+P/S6,L=R6*j9(0.37489701+1325.55240982*$+0.00002565*F)+u/S6,A=R6*j9(0.99312619+99.99735956*$-0.00000044*F)+z/S6,_=R6*j9(0.25909118+1342.2278298*$-0.00000892*F)+C/S6,V=R6*j9(0.82736186+1236.85308708*$-0.00000397*F)+f/S6;for(E=1;E<=4;++E){switch(E){case 1:K=L,X=4,U=1.000002208;break;case 2:K=A,X=3,U=0.997504612-0.002495388*$;break;case 3:K=_,X=4,U=1.000002708+139.978*q;break;case 4:K=V,X=6,U=1;break;default:throw`Internal error: I = ${E}`}t(0,E,1),t(1,E,Math.cos(K)*U),p(0,E,0),p(1,E,Math.sin(K)*U);for(G=2;G<=X;++G)X0(r(G-1,E),l(G-1,E),r(1,E),l(1,E),(V0,B)=>(t(G,E,V0),p(G,E,B)));for(G=1;G<=X;++G)t(-G,E,r(G,E)),p(-G,E,-l(G,E))}function z0(V0,B,l0,P0){var T0={x:1,y:0},Y0=[0,V0,B,l0,P0];for(var o0=1;o0<=4;++o0)if(Y0[o0]!==0)X0(T0.x,T0.y,r(Y0[o0],o0),l(Y0[o0],o0),(M0,B0)=>(T0.x=M0,T0.y=B0));return T0}function b(V0,B,l0,P0,T0,Y0,o0,M0){var B0=z0(T0,Y0,o0,M0);R+=V0*B0.y,g+=B*B0.y,N+=l0*B0.x,O+=P0*B0.x}b(13.902,14.06,-0.001,0.2607,0,0,0,4),b(0.403,-4.01,0.394,0.0023,0,0,0,3),b(2369.912,2373.36,0.601,28.2333,0,0,0,2),b(-125.154,-112.79,-0.725,-0.9781,0,0,0,1),b(1.979,6.98,-0.445,0.0433,1,0,0,4),b(191.953,192.72,0.029,3.0861,1,0,0,2),b(-8.466,-13.51,0.455,-0.1093,1,0,0,1),b(22639.5,22609.07,0.079,186.5398,1,0,0,0),b(18.609,3.59,-0.094,0.0118,1,0,0,-1),b(-4586.465,-4578.13,-0.077,34.3117,1,0,0,-2),b(3.215,5.44,0.192,-0.0386,1,0,0,-3),b(-38.428,-38.64,0.001,0.6008,1,0,0,-4),b(-0.393,-1.43,-0.092,0.0086,1,0,0,-6),b(-0.289,-1.59,0.123,-0.0053,0,1,0,4),b(-24.42,-25.1,0.04,-0.3,0,1,0,2),b(18.023,17.93,0.007,0.1494,0,1,0,1),b(-668.146,-126.98,-1.302,-0.3997,0,1,0,0),b(0.56,0.32,-0.001,-0.0037,0,1,0,-1),b(-165.145,-165.06,0.054,1.9178,0,1,0,-2),b(-1.877,-6.46,-0.416,0.0339,0,1,0,-4),b(0.213,1.02,-0.074,0.0054,2,0,0,4),b(14.387,14.78,-0.017,0.2833,2,0,0,2),b(-0.586,-1.2,0.054,-0.01,2,0,0,1),b(769.016,767.96,0.107,10.1657,2,0,0,0),b(1.75,2.01,-0.018,0.0155,2,0,0,-1),b(-211.656,-152.53,5.679,-0.3039,2,0,0,-2),b(1.225,0.91,-0.03,-0.0088,2,0,0,-3),b(-30.773,-34.07,-0.308,0.3722,2,0,0,-4),b(-0.57,-1.4,-0.074,0.0109,2,0,0,-6),b(-2.921,-11.75,0.787,-0.0484,1,1,0,2),b(1.267,1.52,-0.022,0.0164,1,1,0,1),b(-109.673,-115.18,0.461,-0.949,1,1,0,0),b(-205.962,-182.36,2.056,1.4437,1,1,0,-2),b(0.233,0.36,0.012,-0.0025,1,1,0,-3),b(-4.391,-9.66,-0.471,0.0673,1,1,0,-4),b(0.283,1.53,-0.111,0.006,1,-1,0,4),b(14.577,31.7,-1.54,0.2302,1,-1,0,2),b(147.687,138.76,0.679,1.1528,1,-1,0,0),b(-1.089,0.55,0.021,0,1,-1,0,-1),b(28.475,23.59,-0.443,-0.2257,1,-1,0,-2),b(-0.276,-0.38,-0.006,-0.0036,1,-1,0,-3),b(0.636,2.27,0.146,-0.0102,1,-1,0,-4),b(-0.189,-1.68,0.131,-0.0028,0,2,0,2),b(-7.486,-0.66,-0.037,-0.0086,0,2,0,0),b(-8.096,-16.35,-0.74,0.0918,0,2,0,-2),b(-5.741,-0.04,0,-0.0009,0,0,2,2),b(0.255,0,0,0,0,0,2,1),b(-411.608,-0.2,0,-0.0124,0,0,2,0),b(0.584,0.84,0,0.0071,0,0,2,-1),b(-55.173,-52.14,0,-0.1052,0,0,2,-2),b(0.254,0.25,0,-0.0017,0,0,2,-3),b(0.025,-1.67,0,0.0031,0,0,2,-4),b(1.06,2.96,-0.166,0.0243,3,0,0,2),b(36.124,50.64,-1.3,0.6215,3,0,0,0),b(-13.193,-16.4,0.258,-0.1187,3,0,0,-2),b(-1.187,-0.74,0.042,0.0074,3,0,0,-4),b(-0.293,-0.31,-0.002,0.0046,3,0,0,-6),b(-0.29,-1.45,0.116,-0.0051,2,1,0,2),b(-7.649,-10.56,0.259,-0.1038,2,1,0,0),b(-8.627,-7.59,0.078,-0.0192,2,1,0,-2),b(-2.74,-2.54,0.022,0.0324,2,1,0,-4),b(1.181,3.32,-0.212,0.0213,2,-1,0,2),b(9.703,11.67,-0.151,0.1268,2,-1,0,0),b(-0.352,-0.37,0.001,-0.0028,2,-1,0,-1),b(-2.494,-1.17,-0.003,-0.0017,2,-1,0,-2),b(0.36,0.2,-0.012,-0.0043,2,-1,0,-4),b(-1.167,-1.25,0.008,-0.0106,1,2,0,0),b(-7.412,-6.12,0.117,0.0484,1,2,0,-2),b(-0.311,-0.65,-0.032,0.0044,1,2,0,-4),b(0.757,1.82,-0.105,0.0112,1,-2,0,2),b(2.58,2.32,0.027,0.0196,1,-2,0,0),b(2.533,2.4,-0.014,-0.0212,1,-2,0,-2),b(-0.344,-0.57,-0.025,0.0036,0,3,0,-2),b(-0.992,-0.02,0,0,1,0,2,2),b(-45.099,-0.02,0,-0.001,1,0,2,0),b(-0.179,-9.52,0,-0.0833,1,0,2,-2),b(-0.301,-0.33,0,0.0014,1,0,2,-4),b(-6.382,-3.37,0,-0.0481,1,0,-2,2),b(39.528,85.13,0,-0.7136,1,0,-2,0),b(9.366,0.71,0,-0.0112,1,0,-2,-2),b(0.202,0.02,0,0,1,0,-2,-4),b(0.415,0.1,0,0.0013,0,1,2,0),b(-2.152,-2.26,0,-0.0066,0,1,2,-2),b(-1.44,-1.3,0,0.0014,0,1,-2,2),b(0.384,-0.04,0,0,0,1,-2,-2),b(1.938,3.6,-0.145,0.0401,4,0,0,0),b(-0.952,-1.58,0.052,-0.013,4,0,0,-2),b(-0.551,-0.94,0.032,-0.0097,3,1,0,0),b(-0.482,-0.57,0.005,-0.0045,3,1,0,-2),b(0.681,0.96,-0.026,0.0115,3,-1,0,0),b(-0.297,-0.27,0.002,-0.0009,2,2,0,-2),b(0.254,0.21,-0.003,0,2,-2,0,-2),b(-0.25,-0.22,0.004,0.0014,1,3,0,-2),b(-3.996,0,0,0.0004,2,0,2,0),b(0.557,-0.75,0,-0.009,2,0,2,-2),b(-0.459,-0.38,0,-0.0053,2,0,-2,2),b(-1.298,0.74,0,0.0004,2,0,-2,0),b(0.538,1.14,0,-0.0141,2,0,-2,-2),b(0.263,0.02,0,0,1,1,2,0),b(0.426,0.07,0,-0.0006,1,1,-2,-2),b(-0.304,0.03,0,0.0003,1,-1,2,0),b(-0.372,-0.19,0,-0.0027,1,-1,-2,2),b(0.418,0,0,0,0,0,4,0),b(-0.33,-0.04,0,0,3,0,2,0);function A0(V0,B,l0,P0,T0){return V0*z0(B,l0,P0,T0).y}M=0,M+=A0(-526.069,0,0,1,-2),M+=A0(-3.352,0,0,1,-4),M+=A0(44.297,1,0,1,-2),M+=A0(-6,1,0,1,-4),M+=A0(20.599,-1,0,1,0),M+=A0(-30.598,-1,0,1,-2),M+=A0(-24.649,-2,0,1,0),M+=A0(-2,-2,0,1,-2),M+=A0(-22.571,0,1,1,-2),M+=A0(10.985,0,-1,1,-2),R+=0.82*J0(0.7736-62.5512*$)+0.31*J0(0.0466-125.1025*$)+0.35*J0(0.5785-25.1042*$)+0.66*J0(0.4591+1335.8075*$)+0.64*J0(0.313-91.568*$)+1.14*J0(0.148+1331.2898*$)+0.21*J0(0.5918+1056.5859*$)+0.44*J0(0.5784+1322.8595*$)+0.24*J0(0.2275-5.7374*$)+0.28*J0(0.2965+2.6929*$)+0.33*J0(0.3132+6.3368*$),Y=_+g/S6;let n0=(1.000002708+139.978*q)*(18519.699999999997+N)*Math.sin(Y)-6.24*Math.sin(3*Y)+M;return{geo_eclip_lon:R6*j9((w+R/S6)/R6),geo_eclip_lat:Math.PI/648000*n0,distance_au:S6*0.00004263520978299708/(0.999953253*O)}}function p1(J,$){return[J.rot[0][0]*$[0]+J.rot[1][0]*$[1]+J.rot[2][0]*$[2],J.rot[0][1]*$[0]+J.rot[1][1]*$[1]+J.rot[2][1]*$[2],J.rot[0][2]*$[0]+J.rot[1][2]*$[1]+J.rot[2][2]*$[2]]}function u1(J,$,H){let Z=l1($,H);return p1(Z,J)}function l1(J,$){let H=J.tt/36525,Z=84381.406,W=((((-0.0000000951*H+0.000132851)*H-0.00114045)*H-1.0790069)*H+5038.481507)*H,Q=((((0.0000003337*H-0.000000467)*H-0.00772503)*H+0.0512623)*H-0.025754)*H+Z,Y=((((-0.000000056*H+0.000170663)*H-0.00121197)*H-2.3814292)*H+10.556403)*H;Z*=0.00000484813681109536,W*=0.00000484813681109536,Q*=0.00000484813681109536,Y*=0.00000484813681109536;let X=Math.sin(Z),K=Math.cos(Z),U=Math.sin(-W),E=Math.cos(-W),G=Math.sin(-Q),F=Math.cos(-Q),q=Math.sin(Y),R=Math.cos(Y),M=R*E-U*q*F,N=R*U*K+q*F*E*K-X*q*G,O=R*U*X+q*F*E*X+K*q*G,w=-q*E-U*R*F,L=-q*U*K+R*F*E*K-X*R*G,A=-q*U*X+R*F*E*X+K*R*G,_=U*G,V=-G*E*K-X*F,P=-G*E*X+F*K;if($===N7.Into2000)return new fJ([[M,N,O],[w,L,A],[_,V,P]]);if($===N7.From2000)return new fJ([[M,w,_],[N,L,V],[O,A,P]]);throw"Invalid precess direction"}class S8{constructor(J,$,H,Z){this.x=J,this.y=$,this.z=H,this.t=Z}Length(){return Math.hypot(this.x,this.y,this.z)}}class M6{constructor(J,$,H,Z,W,Q,Y){this.x=J,this.y=$,this.z=H,this.vx=Z,this.vy=W,this.vz=Q,this.t=Y}}class xQ{constructor(J,$,H){this.lat=yH(J),this.lon=yH($),this.dist=yH(H)}}class fJ{constructor(J){this.rot=J}}function O7(J){let $=j6(J),H=g1($),Z=H.distance_au*Math.cos(H.geo_eclip_lat),W=[Z*Math.cos(H.geo_eclip_lon),Z*Math.sin(H.geo_eclip_lon),H.distance_au*Math.sin(H.geo_eclip_lat)],Q=v1($,W),Y=u1(Q,$,N7.Into2000);return new S8(Y[0],Y[1],Y[2],$)}function hQ(J){let $=j6(J),H=0.00001,Z=$.AddDays(-0.00001),W=$.AddDays(0.00001),Q=O7(Z),Y=O7(W);return new M6((Q.x+Y.x)/2,(Q.y+Y.y)/2,(Q.z+Y.z)/2,(Y.x-Q.x)/0.00002,(Y.y-Q.y)/0.00002,(Y.z-Q.z)/0.00002,$)}function m1(J){let $=j6(J),H=hQ($),Z=82.30056;return new M6(H.x/82.30056,H.y/82.30056,H.z/82.30056,H.vx/82.30056,H.vy/82.30056,H.vz/82.30056,$)}function h9(J,$,H){let Z=1,W=0;for(let Q of J){let Y=0;for(let[K,U,E]of Q)Y+=K*Math.cos(U+$*E);let X=Z*Y;if(H)X%=R6;W+=X,Z*=$}return W}function vH(J,$){let H=1,Z=0,W=0,Q=0;for(let Y of J){let X=0,K=0;for(let[U,E,G]of Y){let F=E+$*G;if(X+=U*G*Math.sin(F),Q>0)K+=U*Math.cos(F)}W+=Q*Z*K-H*X,Z=H,H*=$,++Q}return W}var F7=365250,bH=0,gH=1,pH=2;function uH(J){return new w8(J[0]+0.00000044036*J[1]-0.000000190919*J[2],-0.000000479966*J[0]+0.917482137087*J[1]-0.397776982902*J[2],0.397776982902*J[1]+0.917482137087*J[2])}function yQ(J,$,H){let Z=H*Math.cos($),W=Math.cos(J),Q=Math.sin(J);return[Z*W,Z*Q,H*Math.sin($)]}function jJ(J,$){let H=$.tt/F7,Z=h9(J[bH],H,!0),W=h9(J[gH],H,!1),Q=h9(J[pH],H,!1),Y=yQ(Z,W,Q);return uH(Y).ToAstroVector($)}function lH(J,$){let H=$/F7,Z=h9(J[bH],H,!0),W=h9(J[gH],H,!1),Q=h9(J[pH],H,!1),Y=vH(J[bH],H),X=vH(J[gH],H),K=vH(J[pH],H),U=Math.cos(Z),E=Math.sin(Z),G=Math.cos(W),F=Math.sin(W),q=+(K*G*U)-Q*F*U*X-Q*G*E*Y,R=+(K*G*E)-Q*F*E*X+Q*G*U*Y,M=+(K*F)+Q*G*X,N=yQ(Z,W,Q),O=[q/F7,R/F7,M/F7],w=uH(N),L=uH(O);return new J9($,w,L)}function SJ(J,$,H,Z){let W=Z/(Z+0.0002959122082855911),Q=jJ(_6[H],$);J.x+=W*Q.x,J.y+=W*Q.y,J.z+=W*Q.z}function d1(J){let $=new S8(0,0,0,J);return SJ($,J,h0.Jupiter,0.0000002825345909524226),SJ($,J,h0.Saturn,0.00000008459715185680659),SJ($,J,h0.Uranus,0.00000001292024916781969),SJ($,J,h0.Neptune,0.00000001524358900784276),$}var mH=51,c1=29200,f9=146,D6=201,e6=[[-730000,[-26.118207232108,-14.376168177825,3.384402515299],[0.0016339372163656,-0.0027861699588508,-0.0013585880229445]],[-700800,[41.974905202127,-0.448502952929,-12.770351505989],[0.00073458569351457,0.0022785014891658,0.00048619778602049]],[-671600,[14.706930780744,44.269110540027,9.353698474772],[-0.00210001479998,0.00022295915939915,0.00070143443551414]],[-642400,[-29.441003929957,-6.43016153057,6.858481011305],[0.00084495803960544,-0.0030783914758711,-0.0012106305981192]],[-613200,[39.444396946234,-6.557989760571,-13.913760296463],[0.0011480029005873,0.0022400006880665,0.00035168075922288]],[-584000,[20.2303809507,43.266966657189,7.382966091923],[-0.0019754081700585,0.00053457141292226,0.00075929169129793]],[-554800,[-30.65832536462,2.093818874552,9.880531138071],[0.000061010603013347,-0.0031326500935382,-0.00099346125151067]],[-525600,[35.737703251673,-12.587706024764,-14.677847247563],[0.0015802939375649,0.0021347678412429,0.00019074436384343]],[-496400,[25.466295188546,41.367478338417,5.216476873382],[-0.0018054401046468,0.0008328308359951,0.00080260156912107]],[-467200,[-29.847174904071,10.636426313081,12.297904180106],[-0.00063257063052907,-0.0029969577578221,-0.00074476074151596]],[-438000,[30.774692107687,-18.236637015304,-14.945535879896],[0.0020113162005465,0.0019353827024189,-0.0000020937793168297]],[-408800,[30.243153324028,38.656267888503,2.938501750218],[-0.0016052508674468,0.0011183495337525,0.00083333973416824]],[-379600,[-27.288984772533,18.643162147874,14.023633623329],[-0.0011856388898191,-0.0027170609282181,-0.00049015526126399]],[-350400,[24.519605196774,-23.245756064727,-14.626862367368],[0.0024322321483154,0.0016062008146048,-0.00023369181613312]],[-321200,[34.505274805875,35.125338586954,0.557361475637],[-0.0013824391637782,0.0013833397561817,0.00084823598806262]],[-292000,[-23.275363915119,25.818514298769,15.055381588598],[-0.0016062295460975,-0.0023395961498533,-0.00024377362639479]],[-262800,[17.050384798092,-27.180376290126,-13.608963321694],[0.0028175521080578,0.0011358749093955,-0.00049548725258825]],[-233600,[38.093671910285,30.880588383337,-1.843688067413],[-0.0011317697153459,0.0016128814698472,0.00084177586176055]],[-204400,[-18.197852930878,31.932869934309,15.438294826279],[-0.0019117272501813,-0.0019146495909842,-0.000019657304369835]],[-175200,[8.528924039997,-29.618422200048,-11.805400994258],[0.0031034370787005,0.0005139363329243,-0.00077293066202546]],[-146000,[40.94685725864,25.904973592021,-4.256336240499],[-0.00083652705194051,0.0018129497136404,0.0008156422827306]],[-116800,[-12.326958895325,36.881883446292,15.217158258711],[-0.0021166103705038,-0.001481442003599,0.00017401209844705]],[-87600,[-0.633258375909,-30.018759794709,-9.17193287495],[0.0032016994581737,-0.00025279858672148,-0.0010411088271861]],[-58400,[42.936048423883,20.344685584452,-6.588027007912],[-0.00050525450073192,0.0019910074335507,0.00077440196540269]],[-29200,[-5.975910552974,40.61180995846,14.470131723673],[-0.0022184202156107,-0.0010562361130164,0.00033652250216211]],[0,[-9.875369580774,-27.978926224737,-5.753711824704],[0.0030287533248818,-0.0011276087003636,-0.0012651326732361]],[29200,[43.958831986165,14.214147973292,-8.808306227163],[-0.00014717608981871,0.0021404187242141,0.00071486567806614]],[58400,[0.67813676352,43.094461639362,13.243238780721],[-0.0022358226110718,-0.00063233636090933,0.00047664798895648]],[87600,[-18.282602096834,-23.30503958666,-1.766620508028],[0.0025567245263557,-0.0019902940754171,-0.0013943491701082]],[116800,[43.873338744526,7.700705617215,-10.814273666425],[0.00023174803055677,0.0022402163127924,0.00062988756452032]],[146000,[7.392949027906,44.382678951534,11.629500214854],[-0.002193281545383,-0.00021751799585364,0.00059556516201114]],[175200,[-24.981690229261,-16.204012851426,2.466457544298],[0.001819398914958,-0.0026765419531201,-0.0013848283502247]],[204400,[42.530187039511,0.845935508021,-12.554907527683],[0.00065059779150669,0.0022725657282262,0.00051133743202822]],[233600,[13.999526486822,44.462363044894,9.669418486465],[-0.0021079296569252,0.00017533423831993,0.00069128485798076]],[262800,[-29.184024803031,-7.371243995762,6.493275957928],[0.00093581363109681,-0.0030610357109184,-0.0012364201089345]],[292000,[39.831980671753,-6.078405766765,-13.909815358656],[0.0011117769689167,0.0022362097830152,0.00036230548231153]],[321200,[20.294955108476,43.417190420251,7.450091985932],[-0.0019742157451535,0.00053102050468554,0.00075938408813008]],[350400,[-30.66999230216,2.318743558955,9.973480913858],[0.000045605107450676,-0.0031308219926928,-0.00099066533301924]],[379600,[35.626122155983,-12.897647509224,-14.777586508444],[0.0016015684949743,0.0021171931182284,0.00018002516202204]],[408800,[26.133186148561,41.232139187599,5.00640132622],[-0.0017857704419579,0.00086046232702817,0.00080614690298954]],[438000,[-29.57674022923,11.863535943587,12.631323039872],[-0.00072292830060955,-0.0029587820140709,-0.000708242964503]],[467200,[29.910805787391,-19.159019294,-15.013363865194],[0.0020871080437997,0.0018848372554514,-0.000038528655083926]],[496400,[31.375957451819,38.050372720763,2.433138343754],[-0.0015546055556611,0.0011699815465629,0.00083565439266001]],[525600,[-26.360071336928,20.662505904952,14.414696258958],[-0.0013142373118349,-0.0026236647854842,-0.00042542017598193]],[554800,[22.599441488648,-24.508879898306,-14.484045731468],[0.0025454108304806,0.0014917058755191,-0.00030243665086079]],[584000,[35.877864013014,33.894226366071,-0.224524636277],[-0.0012941245730845,0.0014560427668319,0.00084762160640137]],[613200,[-21.538149762417,28.204068269761,15.321973799534],[-0.001731211740901,-0.0021939631314577,-0.0001631691327518]],[642400,[13.971521374415,-28.339941764789,-13.083792871886],[0.0029334630526035,0.00091860931752944,-0.00059939422488627]],[671600,[39.526942044143,28.93989736011,-2.872799527539],[-0.0010068481658095,0.001702113288809,0.00083578230511981]],[700800,[-15.576200701394,34.399412961275,15.466033737854],[-0.0020098814612884,-0.0017191109825989,0.000070414782780416]],[730000,[4.24325283709,-30.118201690825,-10.707441231349],[0.0031725847067411,0.0001609846120227,-0.00090672150593868]]];class w8{constructor(J,$,H){this.x=J,this.y=$,this.z=H}clone(){return new w8(this.x,this.y,this.z)}ToAstroVector(J){return new S8(this.x,this.y,this.z,J)}static zero(){return new w8(0,0,0)}quadrature(){return this.x*this.x+this.y*this.y+this.z*this.z}add(J){return new w8(this.x+J.x,this.y+J.y,this.z+J.z)}sub(J){return new w8(this.x-J.x,this.y-J.y,this.z-J.z)}incr(J){this.x+=J.x,this.y+=J.y,this.z+=J.z}decr(J){this.x-=J.x,this.y-=J.y,this.z-=J.z}mul(J){return new w8(J*this.x,J*this.y,J*this.z)}div(J){return new w8(this.x/J,this.y/J,this.z/J)}mean(J){return new w8((this.x+J.x)/2,(this.y+J.y)/2,(this.z+J.z)/2)}neg(){return new w8(-this.x,-this.y,-this.z)}}class J9{constructor(J,$,H){this.tt=J,this.r=$,this.v=H}clone(){return new J9(this.tt,this.r,this.v)}sub(J){return new J9(this.tt,this.r.sub(J.r),this.v.sub(J.v))}}function n1(J){let[$,[H,Z,W],[Q,Y,X]]=J;return new J9($,new w8(H,Z,W),new w8(Q,Y,X))}function _J(J,$,H,Z){let W=Z/(Z+0.0002959122082855911),Q=lH(_6[H],$);return J.r.incr(Q.r.mul(W)),J.v.incr(Q.v.mul(W)),Q}function E7(J,$,H){let Z=H.sub(J),W=Z.quadrature();return Z.mul($/(W*Math.sqrt(W)))}class q7{constructor(J){let $=new J9(J,new w8(0,0,0),new w8(0,0,0));this.Jupiter=_J($,J,h0.Jupiter,0.0000002825345909524226),this.Saturn=_J($,J,h0.Saturn,0.00000008459715185680659),this.Uranus=_J($,J,h0.Uranus,0.00000001292024916781969),this.Neptune=_J($,J,h0.Neptune,0.00000001524358900784276),this.Jupiter.r.decr($.r),this.Jupiter.v.decr($.v),this.Saturn.r.decr($.r),this.Saturn.v.decr($.v),this.Uranus.r.decr($.r),this.Uranus.v.decr($.v),this.Neptune.r.decr($.r),this.Neptune.v.decr($.v),this.Sun=new J9(J,$.r.mul(-1),$.v.mul(-1))}Acceleration(J){let $=E7(J,0.0002959122082855911,this.Sun.r);return $.incr(E7(J,0.0000002825345909524226,this.Jupiter.r)),$.incr(E7(J,0.00000008459715185680659,this.Saturn.r)),$.incr(E7(J,0.00000001292024916781969,this.Uranus.r)),$.incr(E7(J,0.00000001524358900784276,this.Neptune.r)),$}}class hJ{constructor(J,$,H,Z){this.tt=J,this.r=$,this.v=H,this.a=Z}clone(){return new hJ(this.tt,this.r.clone(),this.v.clone(),this.a.clone())}}class sH{constructor(J,$){this.bary=J,this.grav=$}}function xJ(J,$,H,Z){return new w8($.x+J*(H.x+J*Z.x/2),$.y+J*(H.y+J*Z.y/2),$.z+J*(H.z+J*Z.z/2))}function AQ(J,$,H){return new w8($.x+J*H.x,$.y+J*H.y,$.z+J*H.z)}function dH(J,$){let H=J-$.tt,Z=new q7(J),W=xJ(H,$.r,$.v,$.a),Q=Z.Acceleration(W).mean($.a),Y=xJ(H,$.r,$.v,Q),X=$.v.add(Q.mul(H)),K=Z.Acceleration(Y),U=new hJ(J,Y,X,K);return new sH(Z,U)}var s1=[];function vQ(J,$){let H=Math.floor(J);if(H<0)return 0;if(H>=$)return $-1;return H}function cH(J){let $=n1(J),H=new q7($.tt),Z=$.r.add(H.Sun.r),W=$.v.add(H.Sun.v),Q=H.Acceleration(Z),Y=new hJ($.tt,Z,W,Q);return new sH(H,Y)}function i1(J,$){let H=e6[0][0];if($<H||$>e6[mH-1][0])return null;let Z=vQ(($-H)/c1,mH-1);if(!J[Z]){let Q=J[Z]=[];Q[0]=cH(e6[Z]).grav,Q[D6-1]=cH(e6[Z+1]).grav;let Y,X=Q[0].tt;for(Y=1;Y<D6-1;++Y)Q[Y]=dH(X+=f9,Q[Y-1]).grav;X=Q[D6-1].tt;var W=[];W[D6-1]=Q[D6-1];for(Y=D6-2;Y>0;--Y)W[Y]=dH(X-=f9,W[Y+1]).grav;for(Y=D6-2;Y>0;--Y){let K=Y/(D6-1);Q[Y].r=Q[Y].r.mul(1-K).add(W[Y].r.mul(K)),Q[Y].v=Q[Y].v.mul(1-K).add(W[Y].v.mul(K)),Q[Y].a=Q[Y].a.mul(1-K).add(W[Y].a.mul(K))}}return J[Z]}function TQ(J,$,H){let Z=cH(J),W=Math.ceil(($-Z.grav.tt)/H);for(let Q=0;Q<W;++Q)Z=dH(Q+1===W?$:Z.grav.tt+H,Z.grav);return Z}function bQ(J,$){let H,Z,W,Q=i1(s1,J.tt);if(!Q){let Y;if(J.tt<e6[0][0])Y=TQ(e6[0],J.tt,-f9);else Y=TQ(e6[mH-1],J.tt,+f9);H=Y.grav.r,Z=Y.grav.v,W=Y.bary}else{let Y=vQ((J.tt-Q[0].tt)/f9,D6-1),X=Q[Y],K=Q[Y+1],U=X.a.mean(K.a),E=xJ(J.tt-X.tt,X.r,X.v,U),G=AQ(J.tt-X.tt,X.v,U),F=xJ(J.tt-K.tt,K.r,K.v,U),q=AQ(J.tt-K.tt,K.v,U),R=(J.tt-X.tt)/f9;H=E.mul(1-R).add(F.mul(R)),Z=G.mul(1-R).add(q.mul(R))}if($){if(!W)W=new q7(J.tt);H=H.sub(W.Sun.r),Z=Z.sub(W.Sun.v)}return new M6(H.x,H.y,H.z,Z.x,Z.y,Z.z,J)}var uN=new fJ([[0.999432765338654,-0.0336771074697641,0],[0.0303959428906285,0.902057912352809,0.430543388542295],[-0.0144994559663353,-0.430299169409101,0.902569881273754]]);function y9(J,$){var H=j6($);if(J in _6)return jJ(_6[J],H);if(J===h0.Pluto){let Y=bQ(H,!0);return new S8(Y.x,Y.y,Y.z,H)}if(J===h0.Sun)return new S8(0,0,0,H);if(J===h0.Moon){var Z=jJ(_6.Earth,H),W=O7(H);return new S8(Z.x+W.x,Z.y+W.y,Z.z+W.z,H)}if(J===h0.EMB){let Y=jJ(_6.Earth,H),X=O7(H),K=82.30056;return new S8(Y.x+X.x/82.30056,Y.y+X.y/82.30056,Y.z+X.z/82.30056,H)}if(J===h0.SSB)return d1(H);let Q=nH(J);if(Q){let Y=new xQ(Q.dec,15*Q.ra,Q.dist);return e1(Y,H)}throw`HelioVector: Unknown body "${J}"`}function o1(J,$){let H=$,Z=0;for(let W=0;W<10;++W){let Q=J(H),Y=Q.Length()/173.1446326846693;if(Y>1)throw"Object is too distant for light-travel solver.";let X=$.AddDays(-Y);if(Z=Math.abs(X.tt-H.tt),Z<0.000000001)return Q;H=X}throw`Light-travel time solver did not converge: dt = ${Z}`}class gQ{constructor(J,$,H,Z){this.observerBody=J,this.targetBody=$,this.aberration=H,this.observerPos=Z}Position(J){if(this.aberration)this.observerPos=y9(this.observerBody,J);let $=y9(this.targetBody,J);return new S8($.x-this.observerPos.x,$.y-this.observerPos.y,$.z-this.observerPos.z,J)}}function a1(J,$,H,Z){fQ(Z);let W=j6(J);if(nH(H)){let X=y9(H,W);if(Z){let U=t1($,W),E=new S8(X.x-U.x,X.y-U.y,X.z-U.z,W),G=173.1446326846693/E.Length();return new S8(E.x+U.vx/G,E.y+U.vy/G,E.z+U.vz/G,W)}let K=y9($,W);return new S8(X.x-K.x,X.y-K.y,X.z-K.z,W)}let Q;if(Z)Q=new S8(0,0,0,W);else Q=y9($,W);let Y=new gQ($,H,Z,Q);return o1((X)=>Y.Position(X),W)}function iH(J,$,H){fQ(H);let Z=j6($);switch(J){case h0.Earth:return new S8(0,0,0,Z);case h0.Moon:return O7(Z);default:let W=a1(Z,h0.Earth,J,H);return W.t=Z,W}}function r1(J,$){return new M6(J.r.x,J.r.y,J.r.z,J.v.x,J.v.y,J.v.z,$)}function t1(J,$){let H=j6($);switch(J){case h0.Sun:return new M6(0,0,0,0,0,0,H);case h0.SSB:let Z=new q7(H.tt);return new M6(-Z.Sun.r.x,-Z.Sun.r.y,-Z.Sun.r.z,-Z.Sun.v.x,-Z.Sun.v.y,-Z.Sun.v.z,H);case h0.Mercury:case h0.Venus:case h0.Earth:case h0.Mars:case h0.Jupiter:case h0.Saturn:case h0.Uranus:case h0.Neptune:let W=lH(_6[J],H.tt);return r1(W,H);case h0.Pluto:return bQ(H,!0);case h0.Moon:case h0.EMB:let Q=lH(_6.Earth,H.tt),Y=J==h0.Moon?hQ(H):m1(H);return new M6(Y.x+Q.r.x,Y.y+Q.r.y,Y.z+Q.r.z,Y.vx+Q.v.x,Y.vy+Q.v.y,Y.vz+Q.v.z,H);default:if(nH(J)){let X=y9(J,H);return new M6(X.x,X.y,X.z,0,0,0,H)}throw`HelioState: Unsupported body "${J}"`}}var SQ;(function(J){J[J.Pericenter=0]="Pericenter",J[J.Apocenter=1]="Apocenter"})(SQ||(SQ={}));function e1(J,$){$=j6($);let H=J.lat*0.017453292519943295,Z=J.lon*0.017453292519943295,W=J.dist*Math.cos(H);return new S8(W*Math.cos(Z),W*Math.sin(Z),J.dist*Math.sin(H),$)}var _Q;(function(J){J.Penumbral="penumbral",J.Partial="partial",J.Annular="annular",J.Total="total"})(_Q||(_Q={}));var jQ;(function(J){J[J.Invalid=0]="Invalid",J[J.Ascending=1]="Ascending",J[J.Descending=-1]="Descending"})(jQ||(jQ={}));var v9=6371,yJ=1737.4,vJ=149597870.7,pQ=[{name:"Launch & LEO",startTime:Date.UTC(2026,3,1,22,35),endTime:Date.UTC(2026,3,1,23,30),color:"#ff4444"},{name:"HEO Checkout",startTime:Date.UTC(2026,3,1,23,30),endTime:Date.UTC(2026,3,3,16,0),color:"#ffaa00"},{name:"Trans-Lunar Coast",startTime:Date.UTC(2026,3,3,16,0),endTime:Date.UTC(2026,3,6,21,0),color:"#00aaff"},{name:"Lunar Flyby",startTime:Date.UTC(2026,3,6,21,0),endTime:Date.UTC(2026,3,7,1,0),color:"#ff00ff"},{name:"Return Coast",startTime:Date.UTC(2026,3,7,1,0),endTime:Date.UTC(2026,3,10,23,0),color:"#00ffaa"},{name:"Reentry & Splashdown",startTime:Date.UTC(2026,3,10,23,0),endTime:Date.UTC(2026,3,11,0,7),color:"#ff4444"}];function uQ(J){let $=new DJ,H=new $6,Z=new u8(v9,96,48),W=$.load("/textures/earth_atmos_2048.jpg");W.colorSpace=w9;let Q=new n6({map:W,normalMap:$.load("/textures/earth_normal_2048.jpg"),normalScale:new S0(0.85,-0.85),specularMap:$.load("/textures/earth_specular_2048.jpg"),specular:new x0(3355443),shininess:15}),Y=new E8(Z,Q);Y.rotation.z=0.4101,H.add(Y);let X=new u8(v9*1.003,64,32),K=$.load("/textures/earth_clouds_1024.png");K.colorSpace=w9;let U=new n6({map:K,transparent:!0,opacity:0.35,depthWrite:!1}),E=new E8(X,U);H.add(E);let G=new u8(v9*1.015,64,32),F=new n6({color:4491519,transparent:!0,opacity:0.08,side:A8,depthWrite:!1});H.add(new E8(G,F));let q=new X7(4491519,0.4,80000);q.position.set(0,0,0),H.add(q),J.add(H);let R=new u8(yJ,48,24),M=$.load("/textures/moon_1024.jpg");M.colorSpace=w9;let N=new n6({map:M,shininess:2}),O=new E8(R,N);J.add(O);let w=$5();J.add(w);let L=J5();J.add(L);function A(V){let P=iH(h0.Moon,V,!0);O.position.set(P.x*vJ,P.z*vJ,-P.y*vJ);let u=iH(h0.Sun,V,!0),z=new T(u.x,u.z,-u.y).normalize();L.position.copy(z.multiplyScalar(1200000))}function _(){return w.position.clone()}return{earthGroup:H,moonMesh:O,sunGroup:L,spacecraft:w,updatePositions:A,getSpacecraftWorldPos:_}}function J5(){let J=new $6,$=new X7(16777164,2,400000);J.add($);let H=new u8(4000,16,16),Z=new q6({color:16777198});return J.add(new E8(H,Z)),J}function $5(){let J=new $6,$=new u8(400,16,16),H=new q6({color:16777215});J.add(new E8($,H));let Z=new u8(800,16,16),W=new q6({color:4500223,transparent:!0,opacity:0.3,depthWrite:!1});J.add(new E8(Z,W));let Q=new u8(1500,12,12),Y=new q6({color:2254540,transparent:!0,opacity:0.1,depthWrite:!1});return J.add(new E8(Q,Y)),J}var H5=new x0(0,0.85,1),Z5=new x0(0.15,0.2,0.35),W5=new x0(1,1,1);function lQ(J,$){let H=new Float32Array($.length*3),Z=new Float32Array($.length*3);for(let F=0;F<$.length;F++){let q=$[F];H[F*3]=q.x,H[F*3+1]=q.z,H[F*3+2]=-q.y}let W=new T8;W.setAttribute("position",new N8(H,3)),W.setAttribute("color",new N8(Z,3));let Q=new H7({vertexColors:!0,linewidth:1,transparent:!0,opacity:0.9}),Y=new NJ(W,Q);J.add(Y);let X=0;function K(F){X=Math.max(0,Math.min(F,$.length-1));let q=W.attributes.color,R=q.array;for(let M=0;M<$.length;M++){let N;if(M<X-1)N=H5;else if(M>=X-1&&M<=X+1)N=W5;else N=Z5;R[M*3]=N.r,R[M*3+1]=N.g,R[M*3+2]=N.b}q.needsUpdate=!0}function U(F){let q=Math.max(0,Math.min(F,$.length-1)),R=$[q];return new T(R.x,R.z,-R.y)}function E(F){let q=Math.max(0,Math.min(F,$.length-1)),R=Math.floor(q),M=Math.min(R+1,$.length-1),N=q-R,O=$[R],w=$[M];return new T(O.x+(w.x-O.x)*N,O.z+(w.z-O.z)*N,-(O.y+(w.y-O.y)*N))}function G(F){let q=Math.max(0,Math.min(F,$.length-1)),R=$[q];return{speed:Math.sqrt(R.vx*R.vx+R.vy*R.vy+R.vz*R.vz),vx:R.vx,vy:R.vy,vz:R.vz}}return K(0),{pathLine:Y,setCurrentTimeIndex:K,getPositionAtIndex:U,getInterpolatedPosition:E,getVelocityAtIndex:G,pointCount:$.length}}function dQ(J,$){let H=J[0].timestamp,Z=J[J.length-1].timestamp,W=Z-H,Q=O(Date.now()),Y=!1,X=500,K=$.querySelector("#scrubber"),U=$.querySelector("#play-btn"),E=$.querySelector("#speed-select"),G=$.querySelector("#time-display"),F=$.querySelector("#phase-display"),q=$.querySelector("#dist-earth"),R=$.querySelector("#dist-moon"),M=$.querySelector("#velocity"),N=$.querySelector("#met-display");K.min="0",K.max=String(J.length-1),K.step="0.1";function O(_){return Math.max(H,Math.min(_,Z))}function w(_){let V=O(_);for(let P=0;P<J.length-1;P++)if(V>=J[P].timestamp&&V<=J[P+1].timestamp){let u=(V-J[P].timestamp)/(J[P+1].timestamp-J[P].timestamp);return P+u}return V<=H?0:J.length-1}function L(){let _=w(Q);K.value=String(_),A()}function A(){let _=new Date(Q);G.textContent=Q5(_),N.textContent=Y5(Q-H);let V=X5(Q);if(V)F.textContent=V.name,F.style.color=V.color;else F.textContent="—",F.style.color="#888";let P=(Q-H)/W*100;K.style.setProperty("--progress",`${P}%`)}return K.addEventListener("input",()=>{let _=parseFloat(K.value),V=Math.floor(_),P=Math.min(V+1,J.length-1),u=_-V;Q=J[V].timestamp+(J[P].timestamp-J[V].timestamp)*u,A()}),U.addEventListener("click",()=>{Y=!Y,U.textContent=Y?"⏸":"▶",U.title=Y?"Pause":"Play"}),E.addEventListener("change",()=>{X=parseInt(E.value,10)}),L(),{getCurrentIndex(){return Math.round(w(Q))},getCurrentFractionalIndex(){return w(Q)},getCurrentTimestamp(){return Q},update(_){if(!Y)return;if(Q+=_*X,Q>=Z)Q=Z,Y=!1,U.textContent="▶";if(Q<=H)Q=H;L()},updateInfoPanel(_){let V=Math.max(0,_.distanceFromEarth-v9);q.textContent=mQ(V);let P=Math.max(0,_.distanceFromMoon-yJ);R.textContent=mQ(P),M.textContent=`${_.velocity.toFixed(2)} km/s (${(_.velocity*3600).toFixed(0)} km/h)`},isPlaying(){return Y}}}function Q5(J){return J.toISOString().replace("T"," ").replace(/\.\d+Z$/," UTC")}function Y5(J){let $=Math.floor(J/1000),H=Math.floor($/86400),Z=Math.floor($%86400/3600),W=Math.floor($%3600/60),Q=$%60;return`T+${H}d ${String(Z).padStart(2,"0")}:${String(W).padStart(2,"0")}:${String(Q).padStart(2,"0")}`}function mQ(J){if(J>=1000)return`${J.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g,",")} km`;return`${J.toFixed(1)} km`}function X5(J){return pQ.find(($)=>J>=$.startTime&&J<=$.endTime)??null}function bJ(J,$){let H=document.createElement("div");return H.className=`label-3d ${$}`,H.textContent=J,document.body.appendChild(H),H}function K5(J,$,H){let Z=H.clientWidth/2,W=H.clientHeight/2;for(let Q of J){let Y=Q.getWorldPosition();if(Y.project($),Y.z>1){Q.element.style.display="none";continue}Q.element.style.display="block",Q.element.style.left=`${Y.x*Z+Z}px`,Q.element.style.top=`${-Y.y*W+W}px`}}function U5(J,$,H){let Z=new N6;for(let U of $)Z.expandByPoint(new T(U.x,U.z,-U.y));Z.expandByPoint(H),Z.expandByPoint(new T(0,0,0));let W=new T;Z.getCenter(W);let Q=new T;Z.getSize(Q);let Y=Math.max(Q.x,Q.y,Q.z),X=J.camera.fov*Math.PI/180,K=Y/2/Math.tan(X/2)*1.6;J.camera.position.set(W.x+K*0.05,W.y+K*0.35,W.z+K*0.85),J.controls.target.copy(W),J.controls.update()}async function G5(){let J=await fetch("/data/trajectory.json");if(!J.ok)throw Error(`Failed to fetch trajectory: ${J.status}`);return(await J.json()).map((H)=>({timestamp:H.t,x:H.x,y:H.y,z:H.z,vx:H.vx,vy:H.vy,vz:H.vz}))}async function E5(){let J=document.getElementById("scene-canvas"),$=document.getElementById("controls"),H=document.getElementById("loading"),Z=wQ(J),W=uQ(Z.scene),Q;try{Q=await G5()}catch(G){H.textContent=`Failed to load trajectory data. ${G}`,H.style.color="#ff4444";return}if(Q.length===0){H.textContent="No trajectory data available from JPL Horizons.",H.style.color="#ff4444";return}let Y=lQ(Z.scene,Q),X=dQ(Q,$);W.updatePositions(new Date(X.getCurrentTimestamp())),U5(Z,Q,W.moonMesh.position),H.style.display="none",$.style.display="flex";let K=[{element:bJ("Earth","label-earth"),getWorldPosition:()=>new T(0,0,0)},{element:bJ("Moon","label-moon"),getWorldPosition:()=>W.moonMesh.position.clone()},{element:bJ("Orion","label-spacecraft"),getWorldPosition:()=>W.spacecraft.position.clone()},{element:bJ("Sun","label-sun"),getWorldPosition:()=>W.sunGroup.position.clone()}],U=new zJ;function E(){let G=U.getDelta()*1000;X.update(G);let F=X.getCurrentFractionalIndex(),q=X.getCurrentIndex(),R=Y.getInterpolatedPosition(F);W.spacecraft.position.copy(R),Y.setCurrentTimeIndex(q);let M=new Date(X.getCurrentTimestamp());W.updatePositions(M);let N=R.length(),O=W.moonMesh.position,w=R.distanceTo(O),L=Y.getVelocityAtIndex(q);X.updateInfoPanel({distanceFromEarth:N,distanceFromMoon:w,velocity:L.speed}),W.earthGroup.rotation.y+=G*0.000005,K5(K,Z.camera,J),Z.controls.update(),Z.renderer.render(Z.scene,Z.camera)}Z.renderer.setAnimationLoop(E)}E5().catch((J)=>{console.error("Initialization failed:",J);let $=document.getElementById("loading");if($)$.textContent=`Error: ${J.message}`,$.style.color="#ff4444"});

//# debugId=B6D30797E930E6D364756E2164756E21
//# sourceMappingURL=app.js.map
