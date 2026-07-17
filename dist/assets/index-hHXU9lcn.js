(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $c="166",Tf=0,xl=1,bf=2,du=1,Rf=2,qn=3,Qn=0,sn=1,hn=2,mi=0,ys=1,bs=2,yl=3,Ml=4,Cf=5,Ui=100,Pf=101,If=102,Lf=103,Df=104,Uf=200,Nf=201,Of=202,Ff=203,Ja=204,Qa=205,Bf=206,zf=207,kf=208,Hf=209,Vf=210,Gf=211,Wf=212,$f=213,Xf=214,jf=0,qf=1,Kf=2,So=3,Yf=4,Zf=5,Jf=6,Qf=7,Oo=0,ed=1,td=2,gi=0,nd=1,id=2,sd=3,rd=4,od=5,ad=6,cd=7,Sl="attached",ld="detached",pu=300,Rs=301,Cs=302,Eo=303,ec=304,Fo=306,Fn=1e3,On=1001,wo=1002,Vt=1003,mu=1004,ms=1005,un=1006,uo=1007,Zn=1008,ei=1009,gu=1010,_u=1011,cr=1012,Xc=1013,Fi=1014,Cn=1015,vr=1016,jc=1017,qc=1018,Ps=1020,vu=35902,xu=1021,yu=1022,xn=1023,Mu=1024,Su=1025,Ms=1026,Is=1027,Kc=1028,Yc=1029,Eu=1030,Zc=1031,Jc=1033,fo=33776,po=33777,mo=33778,go=33779,tc=35840,nc=35841,ic=35842,sc=35843,rc=36196,oc=37492,ac=37496,lc=37808,hc=37809,uc=37810,fc=37811,dc=37812,pc=37813,mc=37814,gc=37815,_c=37816,vc=37817,xc=37818,yc=37819,Mc=37820,Sc=37821,_o=36492,Ec=36494,wc=36495,wu=36283,Ac=36284,Tc=36285,bc=36286,lr=2300,hr=2301,oa=2302,El=2400,wl=2401,Al=2402,hd=2500,ud=0,Au=1,Rc=2,fd=3200,dd=3201,Bo=0,pd=1,ui="",xt="srgb",$t="srgb-linear",Qc="display-p3",zo="display-p3-linear",Ao="linear",Mt="srgb",To="rec709",bo="p3",Gi=7680,Tl=519,md=512,gd=513,_d=514,Tu=515,vd=516,xd=517,yd=518,Md=519,Cc=35044,bl=35048,Rl="300 es",Jn=2e3,Ro=2001;class Fs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cl=1234567;const rr=Math.PI/180,Ls=180/Math.PI;function Pn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xt[s&255]+Xt[s>>8&255]+Xt[s>>16&255]+Xt[s>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function Ht(s,e,t){return Math.max(e,Math.min(t,s))}function el(s,e){return(s%e+e)%e}function Sd(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Ed(s,e,t){return s!==e?(t-s)/(e-s):0}function or(s,e,t){return(1-t)*s+t*e}function wd(s,e,t,n){return or(s,e,1-Math.exp(-t*n))}function Ad(s,e=1){return e-Math.abs(el(s,e*2)-e)}function Td(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function bd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Rd(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Cd(s,e){return s+Math.random()*(e-s)}function Pd(s){return s*(.5-Math.random())}function Id(s){s!==void 0&&(Cl=s);let e=Cl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ld(s){return s*rr}function Dd(s){return s*Ls}function Ud(s){return(s&s-1)===0&&s!==0}function Nd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Od(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Fd(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":s.set(a*u,c*h,c*f,a*l);break;case"YZY":s.set(c*f,a*u,c*h,a*l);break;case"ZXZ":s.set(c*h,c*f,a*u,a*l);break;case"XZX":s.set(a*u,c*_,c*d,a*l);break;case"YXY":s.set(c*d,a*u,c*_,a*l);break;case"ZYZ":s.set(c*_,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function bn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function _t(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Kt={DEG2RAD:rr,RAD2DEG:Ls,generateUUID:Pn,clamp:Ht,euclideanModulo:el,mapLinear:Sd,inverseLerp:Ed,lerp:or,damp:wd,pingpong:Ad,smoothstep:Td,smootherstep:bd,randInt:Rd,randFloat:Cd,randFloatSpread:Pd,seededRandom:Id,degToRad:Ld,radToDeg:Dd,isPowerOfTwo:Ud,ceilPowerOfTwo:Nd,floorPowerOfTwo:Od,setQuaternionFromProperEuler:Fd,normalize:_t,denormalize:bn};class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(e,t,n,i,r,o,a,c,l){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],v=i[0],g=i[3],m=i[6],A=i[1],S=i[4],w=i[7],U=i[2],I=i[5],P=i[8];return r[0]=o*v+a*A+c*U,r[3]=o*g+a*S+c*I,r[6]=o*m+a*w+c*P,r[1]=l*v+u*A+h*U,r[4]=l*g+u*S+h*I,r[7]=l*m+u*w+h*P,r[2]=f*v+d*A+_*U,r[5]=f*g+d*S+_*I,r[8]=f*m+d*w+_*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*r,d=l*r-o*c,_=t*h+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=h*v,e[1]=(i*l-u*n)*v,e[2]=(a*n-i*o)*v,e[3]=f*v,e[4]=(u*t-i*c)*v,e[5]=(i*r-a*t)*v,e[6]=d*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(aa.makeScale(e,t)),this}rotate(e){return this.premultiply(aa.makeRotation(-e)),this}translate(e,t){return this.premultiply(aa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const aa=new tt;function bu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ur(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Bd(){const s=ur("canvas");return s.style.display="block",s}const Pl={};function tl(s){s in Pl||(Pl[s]=!0,console.warn(s))}function zd(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Il=new tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ll=new tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Tr={[$t]:{transfer:Ao,primaries:To,toReference:s=>s,fromReference:s=>s},[xt]:{transfer:Mt,primaries:To,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[zo]:{transfer:Ao,primaries:bo,toReference:s=>s.applyMatrix3(Ll),fromReference:s=>s.applyMatrix3(Il)},[Qc]:{transfer:Mt,primaries:bo,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Ll),fromReference:s=>s.applyMatrix3(Il).convertLinearToSRGB()}},kd=new Set([$t,zo]),mt={enabled:!0,_workingColorSpace:$t,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!kd.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Tr[e].toReference,i=Tr[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Tr[s].primaries},getTransfer:function(s){return s===ui?Ao:Tr[s].transfer}};function Ss(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ca(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Wi;class Hd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Wi===void 0&&(Wi=ur("canvas")),Wi.width=e.width,Wi.height=e.height;const n=Wi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Wi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ur("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ss(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ss(t[n]/255)*255):t[n]=Ss(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vd=0;class Ru{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=Pn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(la(i[o].image)):r.push(la(i[o]))}else r=la(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function la(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Hd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gd=0;class Ut extends Fs{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,n=On,i=On,r=un,o=Zn,a=xn,c=ei,l=Ut.DEFAULT_ANISOTROPY,u=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=Pn(),this.name="",this.source=new Ru(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fn:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case wo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fn:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case wo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=pu;Ut.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,n=0,i=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],_=c[9],v=c[2],g=c[6],m=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(_+g)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,w=(d+1)/2,U=(m+1)/2,I=(u+f)/4,P=(h+v)/4,k=(_+g)/4;return S>w&&S>U?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=I/n,r=P/n):w>U?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=I/i,r=k/i):U<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(U),n=P/r,i=k/r),this.set(n,i,r,t),this}let A=Math.sqrt((g-_)*(g-_)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(g-_)/A,this.y=(h-v)/A,this.z=(f-u)/A,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wd extends Fs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ut(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ru(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends Wd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Cu extends Ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $d extends Ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const f=r[o+0],d=r[o+1],_=r[o+2],v=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=v;return}if(h!==v||c!==f||l!==d||u!==_){let g=1-a;const m=c*f+l*d+u*_+h*v,A=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){const U=Math.sqrt(S),I=Math.atan2(U,m*A);g=Math.sin(g*I)/U,a=Math.sin(a*I)/U}const w=a*A;if(c=c*g+f*w,l=l*g+d*w,u=u*g+_*w,h=h*g+v*w,g===1-a){const U=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=U,l*=U,u*=U,h*=U}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[o],f=r[o+1],d=r[o+2],_=r[o+3];return e[t]=a*_+u*h+c*d-l*f,e[t+1]=c*_+u*f+l*h-a*d,e[t+2]=l*_+u*d+a*f-c*h,e[t+3]=u*_-a*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(r/2),f=c(n/2),d=c(i/2),_=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*d*_,this._y=l*d*h-f*u*_,this._z=l*u*_+f*d*h,this._w=l*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+l*d*_,this._y=l*d*h-f*u*_,this._z=l*u*_-f*d*h,this._w=l*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-l*d*_,this._y=l*d*h+f*u*_,this._z=l*u*_+f*d*h,this._w=l*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-l*d*_,this._y=l*d*h+f*u*_,this._z=l*u*_-f*d*h,this._w=l*u*h+f*d*_;break;case"YZX":this._x=f*u*h+l*d*_,this._y=l*d*h+f*u*_,this._z=l*u*_-f*d*h,this._w=l*u*h-f*d*_;break;case"XZY":this._x=f*u*h-l*d*_,this._y=l*d*h-f*u*_,this._z=l*u*_+f*d*h,this._w=l*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=i+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ha.copy(this).projectOnVector(e),this.sub(ha)}reflect(e){return this.sub(ha.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ha=new O,Dl=new wt;class on{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Mn):Mn.fromBufferAttribute(r,o),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),br.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),br.copy(n.boundingBox)),br.applyMatrix4(e.matrixWorld),this.union(br)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vs),Rr.subVectors(this.max,Vs),$i.subVectors(e.a,Vs),Xi.subVectors(e.b,Vs),ji.subVectors(e.c,Vs),ni.subVectors(Xi,$i),ii.subVectors(ji,Xi),Ei.subVectors($i,ji);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-Ei.z,Ei.y,ni.z,0,-ni.x,ii.z,0,-ii.x,Ei.z,0,-Ei.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-Ei.y,Ei.x,0];return!ua(t,$i,Xi,ji,Rr)||(t=[1,0,0,0,1,0,0,0,1],!ua(t,$i,Xi,ji,Rr))?!1:(Cr.crossVectors(ni,ii),t=[Cr.x,Cr.y,Cr.z],ua(t,$i,Xi,ji,Rr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Vn=[new O,new O,new O,new O,new O,new O,new O,new O],Mn=new O,br=new on,$i=new O,Xi=new O,ji=new O,ni=new O,ii=new O,Ei=new O,Vs=new O,Rr=new O,Cr=new O,wi=new O;function ua(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){wi.fromArray(s,r);const a=i.x*Math.abs(wi.x)+i.y*Math.abs(wi.y)+i.z*Math.abs(wi.z),c=e.dot(wi),l=t.dot(wi),u=n.dot(wi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Xd=new on,Gs=new O,fa=new O;class zn{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Xd.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gs.subVectors(e,this.center);const t=Gs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Gs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gs.copy(e.center).add(fa)),this.expandByPoint(Gs.copy(e.center).sub(fa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gn=new O,da=new O,Pr=new O,si=new O,pa=new O,Ir=new O,ma=new O;class ko{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gn.copy(this.origin).addScaledVector(this.direction,t),Gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){da.copy(e).add(t).multiplyScalar(.5),Pr.copy(t).sub(e).normalize(),si.copy(this.origin).sub(da);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Pr),a=si.dot(this.direction),c=-si.dot(Pr),l=si.lengthSq(),u=Math.abs(1-o*o);let h,f,d,_;if(u>0)if(h=o*c-a,f=o*a-c,_=r*u,h>=0)if(f>=-_)if(f<=_){const v=1/u;h*=v,f*=v,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-_?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=_?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(da).addScaledVector(Pr,f),d}intersectSphere(e,t){Gn.subVectors(e.center,this.origin);const n=Gn.dot(this.direction),i=Gn.dot(Gn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,t,n,i,r){pa.subVectors(t,e),Ir.subVectors(n,e),ma.crossVectors(pa,Ir);let o=this.direction.dot(ma),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;si.subVectors(this.origin,e);const c=a*this.direction.dot(Ir.crossVectors(si,Ir));if(c<0)return null;const l=a*this.direction.dot(pa.cross(si));if(l<0||c+l>o)return null;const u=-a*si.dot(ma);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class be{constructor(e,t,n,i,r,o,a,c,l,u,h,f,d,_,v,g){be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,u,h,f,d,_,v,g)}set(e,t,n,i,r,o,a,c,l,u,h,f,d,_,v,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=_,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new be().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/qi.setFromMatrixColumn(e,0).length(),r=1/qi.setFromMatrixColumn(e,1).length(),o=1/qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,_=a*u,v=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+_*l,t[5]=f-v*l,t[9]=-a*c,t[2]=v-f*l,t[6]=_+d*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,_=l*u,v=l*h;t[0]=f+v*a,t[4]=_*a-d,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=v+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,_=l*u,v=l*h;t[0]=f-v*a,t[4]=-o*h,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,d=o*h,_=a*u,v=a*h;t[0]=c*u,t[4]=_*l-d,t[8]=f*l+v,t[1]=c*h,t[5]=v*l+f,t[9]=d*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*l,_=a*c,v=a*l;t[0]=c*u,t[4]=v-f*h,t[8]=_*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=d*h+_,t[10]=f-v*h}else if(e.order==="XZY"){const f=o*c,d=o*l,_=a*c,v=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+v,t[5]=o*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=a*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jd,e,qd)}lookAt(e,t,n){const i=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),ri.crossVectors(n,an),ri.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),ri.crossVectors(n,an)),ri.normalize(),Lr.crossVectors(an,ri),i[0]=ri.x,i[4]=Lr.x,i[8]=an.x,i[1]=ri.y,i[5]=Lr.y,i[9]=an.y,i[2]=ri.z,i[6]=Lr.z,i[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],v=n[6],g=n[10],m=n[14],A=n[3],S=n[7],w=n[11],U=n[15],I=i[0],P=i[4],k=i[8],x=i[12],E=i[1],C=i[5],F=i[9],B=i[13],X=i[2],K=i[6],H=i[10],L=i[14],$=i[3],ee=i[7],he=i[11],pe=i[15];return r[0]=o*I+a*E+c*X+l*$,r[4]=o*P+a*C+c*K+l*ee,r[8]=o*k+a*F+c*H+l*he,r[12]=o*x+a*B+c*L+l*pe,r[1]=u*I+h*E+f*X+d*$,r[5]=u*P+h*C+f*K+d*ee,r[9]=u*k+h*F+f*H+d*he,r[13]=u*x+h*B+f*L+d*pe,r[2]=_*I+v*E+g*X+m*$,r[6]=_*P+v*C+g*K+m*ee,r[10]=_*k+v*F+g*H+m*he,r[14]=_*x+v*B+g*L+m*pe,r[3]=A*I+S*E+w*X+U*$,r[7]=A*P+S*C+w*K+U*ee,r[11]=A*k+S*F+w*H+U*he,r[15]=A*x+S*B+w*L+U*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],v=e[7],g=e[11],m=e[15];return _*(+r*c*h-i*l*h-r*a*f+n*l*f+i*a*d-n*c*d)+v*(+t*c*d-t*l*f+r*o*f-i*o*d+i*l*u-r*c*u)+g*(+t*l*h-t*a*d-r*o*h+n*o*d+r*a*u-n*l*u)+m*(-i*a*u-t*c*h+t*a*f+i*o*h-n*o*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],v=e[13],g=e[14],m=e[15],A=h*g*l-v*f*l+v*c*d-a*g*d-h*c*m+a*f*m,S=_*f*l-u*g*l-_*c*d+o*g*d+u*c*m-o*f*m,w=u*v*l-_*h*l+_*a*d-o*v*d-u*a*m+o*h*m,U=_*h*c-u*v*c-_*a*f+o*v*f+u*a*g-o*h*g,I=t*A+n*S+i*w+r*U;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/I;return e[0]=A*P,e[1]=(v*f*r-h*g*r-v*i*d+n*g*d+h*i*m-n*f*m)*P,e[2]=(a*g*r-v*c*r+v*i*l-n*g*l-a*i*m+n*c*m)*P,e[3]=(h*c*r-a*f*r-h*i*l+n*f*l+a*i*d-n*c*d)*P,e[4]=S*P,e[5]=(u*g*r-_*f*r+_*i*d-t*g*d-u*i*m+t*f*m)*P,e[6]=(_*c*r-o*g*r-_*i*l+t*g*l+o*i*m-t*c*m)*P,e[7]=(o*f*r-u*c*r+u*i*l-t*f*l-o*i*d+t*c*d)*P,e[8]=w*P,e[9]=(_*h*r-u*v*r-_*n*d+t*v*d+u*n*m-t*h*m)*P,e[10]=(o*v*r-_*a*r+_*n*l-t*v*l-o*n*m+t*a*m)*P,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*d-t*a*d)*P,e[12]=U*P,e[13]=(u*v*i-_*h*i+_*n*f-t*v*f-u*n*g+t*h*g)*P,e[14]=(_*a*i-o*v*i-_*n*c+t*v*c+o*n*g-t*a*g)*P,e[15]=(o*h*i-u*a*i+u*n*c-t*h*c-o*n*f+t*a*f)*P,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,f=r*l,d=r*u,_=r*h,v=o*u,g=o*h,m=a*h,A=c*l,S=c*u,w=c*h,U=n.x,I=n.y,P=n.z;return i[0]=(1-(v+m))*U,i[1]=(d+w)*U,i[2]=(_-S)*U,i[3]=0,i[4]=(d-w)*I,i[5]=(1-(f+m))*I,i[6]=(g+A)*I,i[7]=0,i[8]=(_+S)*P,i[9]=(g-A)*P,i[10]=(1-(f+v))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=qi.set(i[0],i[1],i[2]).length();const o=qi.set(i[4],i[5],i[6]).length(),a=qi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Sn.copy(this);const l=1/r,u=1/o,h=1/a;return Sn.elements[0]*=l,Sn.elements[1]*=l,Sn.elements[2]*=l,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=h,Sn.elements[9]*=h,Sn.elements[10]*=h,t.setFromRotationMatrix(Sn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Jn){const c=this.elements,l=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,_;if(a===Jn)d=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ro)d=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Jn){const c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(o-r),f=(t+e)*l,d=(n+i)*u;let _,v;if(a===Jn)_=(o+r)*h,v=-2*h;else if(a===Ro)_=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=v,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qi=new O,Sn=new be,jd=new O(0,0,0),qd=new O(1,1,1),ri=new O,Lr=new O,an=new O,Ul=new be,Nl=new wt;class Ct{constructor(e=0,t=0,n=0,i=Ct.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ht(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ul.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ul,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nl.setFromEuler(this),this.setFromQuaternion(Nl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ct.DEFAULT_ORDER="XYZ";class Pu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Kd=0;const Ol=new O,Ki=new wt,Wn=new be,Dr=new O,Ws=new O,Yd=new O,Zd=new wt,Fl=new O(1,0,0),Bl=new O(0,1,0),zl=new O(0,0,1),kl={type:"added"},Jd={type:"removed"},Yi={type:"childadded",child:null},ga={type:"childremoved",child:null};class vt extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new O,t=new Ct,n=new wt,i=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new be},normalMatrix:{value:new tt}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.premultiply(Ki),this}rotateX(e){return this.rotateOnAxis(Fl,e)}rotateY(e){return this.rotateOnAxis(Bl,e)}rotateZ(e){return this.rotateOnAxis(zl,e)}translateOnAxis(e,t){return Ol.copy(e).applyQuaternion(this.quaternion),this.position.add(Ol.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fl,e)}translateY(e){return this.translateOnAxis(Bl,e)}translateZ(e){return this.translateOnAxis(zl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Dr.copy(e):Dr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Ws,Dr,this.up):Wn.lookAt(Dr,Ws,this.up),this.quaternion.setFromRotationMatrix(Wn),i&&(Wn.extractRotation(i.matrixWorld),Ki.setFromRotationMatrix(Wn),this.quaternion.premultiply(Ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kl),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jd),ga.child=e,this.dispatchEvent(ga),ga.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kl),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,e,Yd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,Zd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}vt.DEFAULT_UP=new O(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new O,$n=new O,_a=new O,Xn=new O,Zi=new O,Ji=new O,Hl=new O,va=new O,xa=new O,ya=new O;class Rn{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),En.subVectors(e,t),i.cross(En);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){En.subVectors(i,t),$n.subVectors(n,t),_a.subVectors(e,t);const o=En.dot(En),a=En.dot($n),c=En.dot(_a),l=$n.dot($n),u=$n.dot(_a),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(l*c-a*u)*f,_=(o*u-a*c)*f;return r.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Xn.x),c.addScaledVector(o,Xn.y),c.addScaledVector(a,Xn.z),c)}static isFrontFacing(e,t,n,i){return En.subVectors(n,t),$n.subVectors(e,t),En.cross($n).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),En.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Rn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Zi.subVectors(i,n),Ji.subVectors(r,n),va.subVectors(e,n);const c=Zi.dot(va),l=Ji.dot(va);if(c<=0&&l<=0)return t.copy(n);xa.subVectors(e,i);const u=Zi.dot(xa),h=Ji.dot(xa);if(u>=0&&h<=u)return t.copy(i);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Zi,o);ya.subVectors(e,r);const d=Zi.dot(ya),_=Ji.dot(ya);if(_>=0&&d<=_)return t.copy(r);const v=d*l-c*_;if(v<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(Ji,a);const g=u*_-d*h;if(g<=0&&h-u>=0&&d-_>=0)return Hl.subVectors(r,i),a=(h-u)/(h-u+(d-_)),t.copy(i).addScaledVector(Hl,a);const m=1/(g+v+f);return o=v*m,a=f*m,t.copy(n).addScaledVector(Zi,o).addScaledVector(Ji,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Iu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function Ma(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=mt.workingColorSpace){if(e=el(e,1),t=Ht(t,0,1),n=Ht(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ma(o,r,e+1/3),this.g=Ma(o,r,e),this.b=Ma(o,r,e-1/3)}return mt.toWorkingColorSpace(this,i),this}setStyle(e,t=xt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){const n=Iu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}copyLinearToSRGB(e){return this.r=ca(e.r),this.g=ca(e.g),this.b=ca(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return mt.fromWorkingColorSpace(jt.copy(this),e),Math.round(Ht(jt.r*255,0,255))*65536+Math.round(Ht(jt.g*255,0,255))*256+Math.round(Ht(jt.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.fromWorkingColorSpace(jt.copy(this),t);const n=jt.r,i=jt.g,r=jt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=mt.workingColorSpace){return mt.fromWorkingColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=xt){mt.fromWorkingColorSpace(jt.copy(this),e);const t=jt.r,n=jt.g,i=jt.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(oi),this.setHSL(oi.h+e,oi.s+t,oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(oi),e.getHSL(Ur);const n=or(oi.h,Ur.h,t),i=or(oi.s,Ur.s,t),r=or(oi.l,Ur.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new xe;xe.NAMES=Iu;let Qd=0;class rn extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=ys,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ja,this.blendDst=Qa,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(n.blending=this.blending),this.side!==Qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ja&&(n.blendSrc=this.blendSrc),this.blendDst!==Qa&&(n.blendDst=this.blendDst),this.blendEquation!==Ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==So&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Zt extends rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ct,this.combine=Oo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new O,Nr=new Xe;class Nt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Cc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return tl("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Nr.fromBufferAttribute(this,t),Nr.applyMatrix3(e),this.setXY(t,Nr.x,Nr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cc&&(e.usage=this.usage),e}}class nl extends Nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Lu extends Nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gt extends Nt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ep=0;const pn=new be,Sa=new vt,Qi=new O,cn=new on,$s=new on,kt=new O;class Pt extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bu(e)?Lu:nl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return Sa.lookAt(e),Sa.updateMatrix(),this.applyMatrix4(Sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new gt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new on);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];$s.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(cn.min,$s.min),cn.expandByPoint(kt),kt.addVectors(cn.max,$s.max),cn.expandByPoint(kt)):(cn.expandByPoint($s.min),cn.expandByPoint($s.max))}cn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)kt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(kt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)kt.fromBufferAttribute(a,l),c&&(Qi.fromBufferAttribute(e,l),kt.add(Qi)),i=Math.max(i,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let k=0;k<n.count;k++)a[k]=new O,c[k]=new O;const l=new O,u=new O,h=new O,f=new Xe,d=new Xe,_=new Xe,v=new O,g=new O;function m(k,x,E){l.fromBufferAttribute(n,k),u.fromBufferAttribute(n,x),h.fromBufferAttribute(n,E),f.fromBufferAttribute(r,k),d.fromBufferAttribute(r,x),_.fromBufferAttribute(r,E),u.sub(l),h.sub(l),d.sub(f),_.sub(f);const C=1/(d.x*_.y-_.x*d.y);isFinite(C)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(C),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(C),a[k].add(v),a[x].add(v),a[E].add(v),c[k].add(g),c[x].add(g),c[E].add(g))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let k=0,x=A.length;k<x;++k){const E=A[k],C=E.start,F=E.count;for(let B=C,X=C+F;B<X;B+=3)m(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const S=new O,w=new O,U=new O,I=new O;function P(k){U.fromBufferAttribute(i,k),I.copy(U);const x=a[k];S.copy(x),S.sub(U.multiplyScalar(U.dot(x))).normalize(),w.crossVectors(I,x);const C=w.dot(c[k])<0?-1:1;o.setXYZW(k,S.x,S.y,S.z,C)}for(let k=0,x=A.length;k<x;++k){const E=A[k],C=E.start,F=E.count;for(let B=C,X=C+F;B<X;B+=3)P(e.getX(B+0)),P(e.getX(B+1)),P(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new O,r=new O,o=new O,a=new O,c=new O,l=new O,u=new O,h=new O;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),a.add(u),c.add(u),l.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let d=0,_=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?d=c[v]*a.data.stride+a.offset:d=c[v]*u;for(let m=0;m<u;m++)f[_++]=l[d++]}return new Nt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vl=new be,Ai=new ko,Or=new zn,Gl=new O,es=new O,ts=new O,ns=new O,Ea=new O,Fr=new O,Br=new Xe,zr=new Xe,kr=new Xe,Wl=new O,$l=new O,Xl=new O,Hr=new O,Vr=new O;class Et extends vt{constructor(e=new Pt,t=new Zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Fr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Ea.fromBufferAttribute(h,e),o?Fr.addScaledVector(Ea,u):Fr.addScaledVector(Ea.sub(t),u))}t.add(Fr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(r),Ai.copy(e.ray).recast(e.near),!(Or.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Or,Gl)===null||Ai.origin.distanceToSquared(Gl)>(e.far-e.near)**2))&&(Vl.copy(r).invert(),Ai.copy(e.ray).applyMatrix4(Vl),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ai)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const g=f[_],m=o[g.materialIndex],A=Math.max(g.start,d.start),S=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let w=A,U=S;w<U;w+=3){const I=a.getX(w),P=a.getX(w+1),k=a.getX(w+2);i=Gr(this,m,e,n,l,u,h,I,P,k),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let g=_,m=v;g<m;g+=3){const A=a.getX(g),S=a.getX(g+1),w=a.getX(g+2);i=Gr(this,o,e,n,l,u,h,A,S,w),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const g=f[_],m=o[g.materialIndex],A=Math.max(g.start,d.start),S=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let w=A,U=S;w<U;w+=3){const I=w,P=w+1,k=w+2;i=Gr(this,m,e,n,l,u,h,I,P,k),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let g=_,m=v;g<m;g+=3){const A=g,S=g+1,w=g+2;i=Gr(this,o,e,n,l,u,h,A,S,w),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function tp(s,e,t,n,i,r,o,a){let c;if(e.side===sn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Qn,a),c===null)return null;Vr.copy(a),Vr.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Vr);return l<t.near||l>t.far?null:{distance:l,point:Vr.clone(),object:s}}function Gr(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,es),s.getVertexPosition(c,ts),s.getVertexPosition(l,ns);const u=tp(s,e,t,n,es,ts,ns,Hr);if(u){i&&(Br.fromBufferAttribute(i,a),zr.fromBufferAttribute(i,c),kr.fromBufferAttribute(i,l),u.uv=Rn.getInterpolation(Hr,es,ts,ns,Br,zr,kr,new Xe)),r&&(Br.fromBufferAttribute(r,a),zr.fromBufferAttribute(r,c),kr.fromBufferAttribute(r,l),u.uv1=Rn.getInterpolation(Hr,es,ts,ns,Br,zr,kr,new Xe)),o&&(Wl.fromBufferAttribute(o,a),$l.fromBufferAttribute(o,c),Xl.fromBufferAttribute(o,l),u.normal=Rn.getInterpolation(Hr,es,ts,ns,Wl,$l,Xl,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new O,materialIndex:0};Rn.getNormal(es,ts,ns,h.normal),u.face=h}return u}class Bi extends Pt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(h,2));function _(v,g,m,A,S,w,U,I,P,k,x){const E=w/P,C=U/k,F=w/2,B=U/2,X=I/2,K=P+1,H=k+1;let L=0,$=0;const ee=new O;for(let he=0;he<H;he++){const pe=he*C-B;for(let Be=0;Be<K;Be++){const Ke=Be*E-F;ee[v]=Ke*A,ee[g]=pe*S,ee[m]=X,l.push(ee.x,ee.y,ee.z),ee[v]=0,ee[g]=0,ee[m]=I>0?1:-1,u.push(ee.x,ee.y,ee.z),h.push(Be/P),h.push(1-he/k),L+=1}}for(let he=0;he<k;he++)for(let pe=0;pe<P;pe++){const Be=f+pe+K*he,Ke=f+pe+K*(he+1),J=f+(pe+1)+K*(he+1),le=f+(pe+1)+K*he;c.push(Be,Ke,le),c.push(Ke,J,le),$+=6}a.addGroup(d,$,x),d+=$,f+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ds(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function tn(s){const e={};for(let t=0;t<s.length;t++){const n=Ds(s[t]);for(const i in n)e[i]=n[i]}return e}function np(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Du(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const ip={clone:Ds,merge:tn};var sp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sp,this.fragmentShader=rp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=np(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Uu extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=Jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ai=new O,jl=new Xe,ql=new Xe;class Yt extends Uu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ls*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ls*2*Math.atan(Math.tan(rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ai.x,ai.y).multiplyScalar(-e/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-e/ai.z)}getViewSize(e,t){return this.getViewBounds(e,jl,ql),t.subVectors(ql,jl)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(rr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const is=-90,ss=1;class op extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Yt(is,ss,e,t);i.layers=this.layers,this.add(i);const r=new Yt(is,ss,e,t);r.layers=this.layers,this.add(r);const o=new Yt(is,ss,e,t);o.layers=this.layers,this.add(o);const a=new Yt(is,ss,e,t);a.layers=this.layers,this.add(a);const c=new Yt(is,ss,e,t);c.layers=this.layers,this.add(c);const l=new Yt(is,ss,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ro)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Nu extends Ut{constructor(e,t,n,i,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Rs,super(e,t,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ap extends xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Nu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Bi(5,5,5),r=new In({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:mi});r.uniforms.tEquirect.value=t;const o=new Et(i,r),a=t.minFilter;return t.minFilter===Zn&&(t.minFilter=un),new op(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const wa=new O,cp=new O,lp=new tt;class Li{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=wa.subVectors(n,t).cross(cp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(wa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||lp.getNormalMatrix(e),i=this.coplanarPoint(wa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new zn,Wr=new O;class il{constructor(e=new Li,t=new Li,n=new Li,i=new Li,r=new Li,o=new Li){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Jn){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],u=i[5],h=i[6],f=i[7],d=i[8],_=i[9],v=i[10],g=i[11],m=i[12],A=i[13],S=i[14],w=i[15];if(n[0].setComponents(c-r,f-l,g-d,w-m).normalize(),n[1].setComponents(c+r,f+l,g+d,w+m).normalize(),n[2].setComponents(c+o,f+u,g+_,w+A).normalize(),n[3].setComponents(c-o,f-u,g-_,w-A).normalize(),n[4].setComponents(c-a,f-h,g-v,w-S).normalize(),t===Jn)n[5].setComponents(c+a,f+h,g+v,w+S).normalize();else if(t===Ro)n[5].setComponents(a,h,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Wr.x=i.normal.x>0?e.max.x:e.min.x,Wr.y=i.normal.y>0?e.max.y:e.min.y,Wr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ou(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function hp(s){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c._updateRange,f=c.updateRanges;if(s.bindBuffer(l,a),h.count===-1&&f.length===0&&s.bufferSubData(l,0,u),f.length!==0){for(let d=0,_=f.length;d<_;d++){const v=f[d];s.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}h.count!==-1&&(s.bufferSubData(l,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}class Mi extends Pt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,f=t/c,d=[],_=[],v=[],g=[];for(let m=0;m<u;m++){const A=m*f-o;for(let S=0;S<l;S++){const w=S*h-r;_.push(w,-A,0),v.push(0,0,1),g.push(S/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let A=0;A<a;A++){const S=A+l*m,w=A+l*(m+1),U=A+1+l*(m+1),I=A+1+l*m;d.push(S,w,I),d.push(w,U,I)}this.setIndex(d),this.setAttribute("position",new gt(_,3)),this.setAttribute("normal",new gt(v,3)),this.setAttribute("uv",new gt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mi(e.width,e.height,e.widthSegments,e.heightSegments)}}var up=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fp=`#ifdef USE_ALPHAHASH
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
#endif`,dp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_p=`#ifdef USE_AOMAP
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
#endif`,vp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xp=`#ifdef USE_BATCHING
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
#endif`,yp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ep=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wp=`#ifdef USE_IRIDESCENCE
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
#endif`,Ap=`#ifdef USE_BUMPMAP
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
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ip=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Up=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Np=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Op=`vec3 transformedNormal = objectNormal;
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
#endif`,Fp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Gp=`#ifdef USE_ENVMAP
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
#endif`,Wp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$p=`#ifdef USE_ENVMAP
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
#endif`,Xp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jp=`#ifdef USE_ENVMAP
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
#endif`,qp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jp=`#ifdef USE_GRADIENTMAP
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
}`,Qp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,em=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nm=`uniform bool receiveShadow;
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
#endif`,im=`#ifdef USE_ENVMAP
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
#endif`,sm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,om=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cm=`PhysicalMaterial material;
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
#endif`,lm=`struct PhysicalMaterial {
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
}`,hm=`
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
#endif`,um=`#if defined( RE_IndirectDiffuse )
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
#endif`,fm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_m=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ym=`#if defined( USE_POINTS_UV )
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
#endif`,Mm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Em=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Am=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tm=`#ifdef USE_MORPHTARGETS
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
#endif`,bm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dm=`#ifdef USE_NORMALMAP
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
#endif`,Um=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Om=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,km=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$m=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Km=`float getShadowMask() {
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
}`,Ym=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zm=`#ifdef USE_SKINNING
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
#endif`,Jm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qm=`#ifdef USE_SKINNING
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
#endif`,eg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ng=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ig=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sg=`#ifdef USE_TRANSMISSION
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
#endif`,rg=`#ifdef USE_TRANSMISSION
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
#endif`,og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ug=`uniform sampler2D t2D;
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
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gg=`#include <common>
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
}`,_g=`#if DEPTH_PACKING == 3200
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
	#endif
}`,vg=`#define DISTANCE
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
}`,xg=`#define DISTANCE
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
}`,yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sg=`uniform float scale;
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
}`,Eg=`uniform vec3 diffuse;
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
}`,wg=`#include <common>
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
}`,Ag=`uniform vec3 diffuse;
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
}`,Tg=`#define LAMBERT
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
}`,bg=`#define LAMBERT
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
}`,Rg=`#define MATCAP
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
}`,Cg=`#define MATCAP
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
}`,Pg=`#define NORMAL
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
}`,Ig=`#define NORMAL
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
}`,Lg=`#define PHONG
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
}`,Dg=`#define PHONG
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
}`,Ug=`#define STANDARD
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
}`,Ng=`#define STANDARD
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
}`,Og=`#define TOON
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
}`,Fg=`#define TOON
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
}`,Bg=`uniform float size;
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
}`,zg=`uniform vec3 diffuse;
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
}`,kg=`#include <common>
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
}`,Hg=`uniform vec3 color;
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
}`,Vg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Gg=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:up,alphahash_pars_fragment:fp,alphamap_fragment:dp,alphamap_pars_fragment:pp,alphatest_fragment:mp,alphatest_pars_fragment:gp,aomap_fragment:_p,aomap_pars_fragment:vp,batching_pars_vertex:xp,batching_vertex:yp,begin_vertex:Mp,beginnormal_vertex:Sp,bsdfs:Ep,iridescence_fragment:wp,bumpmap_pars_fragment:Ap,clipping_planes_fragment:Tp,clipping_planes_pars_fragment:bp,clipping_planes_pars_vertex:Rp,clipping_planes_vertex:Cp,color_fragment:Pp,color_pars_fragment:Ip,color_pars_vertex:Lp,color_vertex:Dp,common:Up,cube_uv_reflection_fragment:Np,defaultnormal_vertex:Op,displacementmap_pars_vertex:Fp,displacementmap_vertex:Bp,emissivemap_fragment:zp,emissivemap_pars_fragment:kp,colorspace_fragment:Hp,colorspace_pars_fragment:Vp,envmap_fragment:Gp,envmap_common_pars_fragment:Wp,envmap_pars_fragment:$p,envmap_pars_vertex:Xp,envmap_physical_pars_fragment:im,envmap_vertex:jp,fog_vertex:qp,fog_pars_vertex:Kp,fog_fragment:Yp,fog_pars_fragment:Zp,gradientmap_pars_fragment:Jp,lightmap_pars_fragment:Qp,lights_lambert_fragment:em,lights_lambert_pars_fragment:tm,lights_pars_begin:nm,lights_toon_fragment:sm,lights_toon_pars_fragment:rm,lights_phong_fragment:om,lights_phong_pars_fragment:am,lights_physical_fragment:cm,lights_physical_pars_fragment:lm,lights_fragment_begin:hm,lights_fragment_maps:um,lights_fragment_end:fm,logdepthbuf_fragment:dm,logdepthbuf_pars_fragment:pm,logdepthbuf_pars_vertex:mm,logdepthbuf_vertex:gm,map_fragment:_m,map_pars_fragment:vm,map_particle_fragment:xm,map_particle_pars_fragment:ym,metalnessmap_fragment:Mm,metalnessmap_pars_fragment:Sm,morphinstance_vertex:Em,morphcolor_vertex:wm,morphnormal_vertex:Am,morphtarget_pars_vertex:Tm,morphtarget_vertex:bm,normal_fragment_begin:Rm,normal_fragment_maps:Cm,normal_pars_fragment:Pm,normal_pars_vertex:Im,normal_vertex:Lm,normalmap_pars_fragment:Dm,clearcoat_normal_fragment_begin:Um,clearcoat_normal_fragment_maps:Nm,clearcoat_pars_fragment:Om,iridescence_pars_fragment:Fm,opaque_fragment:Bm,packing:zm,premultiplied_alpha_fragment:km,project_vertex:Hm,dithering_fragment:Vm,dithering_pars_fragment:Gm,roughnessmap_fragment:Wm,roughnessmap_pars_fragment:$m,shadowmap_pars_fragment:Xm,shadowmap_pars_vertex:jm,shadowmap_vertex:qm,shadowmask_pars_fragment:Km,skinbase_vertex:Ym,skinning_pars_vertex:Zm,skinning_vertex:Jm,skinnormal_vertex:Qm,specularmap_fragment:eg,specularmap_pars_fragment:tg,tonemapping_fragment:ng,tonemapping_pars_fragment:ig,transmission_fragment:sg,transmission_pars_fragment:rg,uv_pars_fragment:og,uv_pars_vertex:ag,uv_vertex:cg,worldpos_vertex:lg,background_vert:hg,background_frag:ug,backgroundCube_vert:fg,backgroundCube_frag:dg,cube_vert:pg,cube_frag:mg,depth_vert:gg,depth_frag:_g,distanceRGBA_vert:vg,distanceRGBA_frag:xg,equirect_vert:yg,equirect_frag:Mg,linedashed_vert:Sg,linedashed_frag:Eg,meshbasic_vert:wg,meshbasic_frag:Ag,meshlambert_vert:Tg,meshlambert_frag:bg,meshmatcap_vert:Rg,meshmatcap_frag:Cg,meshnormal_vert:Pg,meshnormal_frag:Ig,meshphong_vert:Lg,meshphong_frag:Dg,meshphysical_vert:Ug,meshphysical_frag:Ng,meshtoon_vert:Og,meshtoon_frag:Fg,points_vert:Bg,points_frag:zg,shadow_vert:kg,shadow_frag:Hg,sprite_vert:Vg,sprite_frag:Gg},Te={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Nn={basic:{uniforms:tn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:tn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new xe(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:tn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:tn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:tn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new xe(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:tn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:tn([Te.points,Te.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:tn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:tn([Te.common,Te.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:tn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:tn([Te.sprite,Te.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:tn([Te.common,Te.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:tn([Te.lights,Te.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Nn.physical={uniforms:tn([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const $r={r:0,b:0,g:0},bi=new Ct,Wg=new be;function $g(s,e,t,n,i,r,o){const a=new xe(0);let c=r===!0?0:1,l,u,h=null,f=0,d=null;function _(A){let S=A.isScene===!0?A.background:null;return S&&S.isTexture&&(S=(A.backgroundBlurriness>0?t:e).get(S)),S}function v(A){let S=!1;const w=_(A);w===null?m(a,c):w&&w.isColor&&(m(w,1),S=!0);const U=s.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(A,S){const w=_(S);w&&(w.isCubeTexture||w.mapping===Fo)?(u===void 0&&(u=new Et(new Bi(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:Ds(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,I,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),bi.copy(S.backgroundRotation),bi.x*=-1,bi.y*=-1,bi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Wg.makeRotationFromEuler(bi)),u.material.toneMapped=mt.getTransfer(w.colorSpace)!==Mt,(h!==w||f!==w.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=w,f=w.version,d=s.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new Et(new Mi(2,2),new In({name:"BackgroundMaterial",uniforms:Ds(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=mt.getTransfer(w.colorSpace)!==Mt,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||f!==w.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=w,f=w.version,d=s.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))}function m(A,S){A.getRGB($r,Du(s)),n.buffers.color.setClear($r.r,$r.g,$r.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(A,S=1){a.set(A),c=S,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(A){c=A,m(a,c)},render:v,addToRenderList:g}}function Xg(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(E,C,F,B,X){let K=!1;const H=h(B,F,C);r!==H&&(r=H,l(r.object)),K=d(E,B,F,X),K&&_(E,B,F,X),X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,w(E,C,F,B),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return s.createVertexArray()}function l(E){return s.bindVertexArray(E)}function u(E){return s.deleteVertexArray(E)}function h(E,C,F){const B=F.wireframe===!0;let X=n[E.id];X===void 0&&(X={},n[E.id]=X);let K=X[C.id];K===void 0&&(K={},X[C.id]=K);let H=K[B];return H===void 0&&(H=f(c()),K[B]=H),H}function f(E){const C=[],F=[],B=[];for(let X=0;X<t;X++)C[X]=0,F[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:F,attributeDivisors:B,object:E,attributes:{},index:null}}function d(E,C,F,B){const X=r.attributes,K=C.attributes;let H=0;const L=F.getAttributes();for(const $ in L)if(L[$].location>=0){const he=X[$];let pe=K[$];if(pe===void 0&&($==="instanceMatrix"&&E.instanceMatrix&&(pe=E.instanceMatrix),$==="instanceColor"&&E.instanceColor&&(pe=E.instanceColor)),he===void 0||he.attribute!==pe||pe&&he.data!==pe.data)return!0;H++}return r.attributesNum!==H||r.index!==B}function _(E,C,F,B){const X={},K=C.attributes;let H=0;const L=F.getAttributes();for(const $ in L)if(L[$].location>=0){let he=K[$];he===void 0&&($==="instanceMatrix"&&E.instanceMatrix&&(he=E.instanceMatrix),$==="instanceColor"&&E.instanceColor&&(he=E.instanceColor));const pe={};pe.attribute=he,he&&he.data&&(pe.data=he.data),X[$]=pe,H++}r.attributes=X,r.attributesNum=H,r.index=B}function v(){const E=r.newAttributes;for(let C=0,F=E.length;C<F;C++)E[C]=0}function g(E){m(E,0)}function m(E,C){const F=r.newAttributes,B=r.enabledAttributes,X=r.attributeDivisors;F[E]=1,B[E]===0&&(s.enableVertexAttribArray(E),B[E]=1),X[E]!==C&&(s.vertexAttribDivisor(E,C),X[E]=C)}function A(){const E=r.newAttributes,C=r.enabledAttributes;for(let F=0,B=C.length;F<B;F++)C[F]!==E[F]&&(s.disableVertexAttribArray(F),C[F]=0)}function S(E,C,F,B,X,K,H){H===!0?s.vertexAttribIPointer(E,C,F,X,K):s.vertexAttribPointer(E,C,F,B,X,K)}function w(E,C,F,B){v();const X=B.attributes,K=F.getAttributes(),H=C.defaultAttributeValues;for(const L in K){const $=K[L];if($.location>=0){let ee=X[L];if(ee===void 0&&(L==="instanceMatrix"&&E.instanceMatrix&&(ee=E.instanceMatrix),L==="instanceColor"&&E.instanceColor&&(ee=E.instanceColor)),ee!==void 0){const he=ee.normalized,pe=ee.itemSize,Be=e.get(ee);if(Be===void 0)continue;const Ke=Be.buffer,J=Be.type,le=Be.bytesPerElement,we=J===s.INT||J===s.UNSIGNED_INT||ee.gpuType===Xc;if(ee.isInterleavedBufferAttribute){const ye=ee.data,We=ye.stride,Ye=ee.offset;if(ye.isInstancedInterleavedBuffer){for(let je=0;je<$.locationSize;je++)m($.location+je,ye.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let je=0;je<$.locationSize;je++)g($.location+je);s.bindBuffer(s.ARRAY_BUFFER,Ke);for(let je=0;je<$.locationSize;je++)S($.location+je,pe/$.locationSize,J,he,We*le,(Ye+pe/$.locationSize*je)*le,we)}else{if(ee.isInstancedBufferAttribute){for(let ye=0;ye<$.locationSize;ye++)m($.location+ye,ee.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ye=0;ye<$.locationSize;ye++)g($.location+ye);s.bindBuffer(s.ARRAY_BUFFER,Ke);for(let ye=0;ye<$.locationSize;ye++)S($.location+ye,pe/$.locationSize,J,he,pe*le,pe/$.locationSize*ye*le,we)}}else if(H!==void 0){const he=H[L];if(he!==void 0)switch(he.length){case 2:s.vertexAttrib2fv($.location,he);break;case 3:s.vertexAttrib3fv($.location,he);break;case 4:s.vertexAttrib4fv($.location,he);break;default:s.vertexAttrib1fv($.location,he)}}}}A()}function U(){k();for(const E in n){const C=n[E];for(const F in C){const B=C[F];for(const X in B)u(B[X].object),delete B[X];delete C[F]}delete n[E]}}function I(E){if(n[E.id]===void 0)return;const C=n[E.id];for(const F in C){const B=C[F];for(const X in B)u(B[X].object),delete B[X];delete C[F]}delete n[E.id]}function P(E){for(const C in n){const F=n[C];if(F[E.id]===void 0)continue;const B=F[E.id];for(const X in B)u(B[X].object),delete B[X];delete F[E.id]}}function k(){x(),o=!0,r!==i&&(r=i,l(r.object))}function x(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:k,resetDefaultState:x,dispose:U,releaseStatesOfGeometry:I,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:g,disableUnusedAttributes:A}}function jg(s,e,t){let n;function i(l){n=l}function r(l,u){s.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(s.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];t.update(d,n,1)}function c(l,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<l.length;_++)o(l[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let _=0;for(let v=0;v<h;v++)_+=u[v];for(let v=0;v<f.length;v++)t.update(_,n,f[v])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function qg(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(I){return!(I!==xn&&n.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const P=I===vr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==ei&&n.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Cn&&!P)}function c(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),A=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=d>0,U=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:_,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:m,maxVaryings:A,maxFragmentUniforms:S,vertexTextures:w,maxSamples:U}}function Kg(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Li,a=new tt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,m=s.get(h);if(!i||_===null||_.length===0||r&&!g)r?u(null):l();else{const A=r?0:n,S=A*4;let w=m.clippingState||null;c.value=w,w=u(_,f,S,d);for(let U=0;U!==S;++U)w[U]=t[U];m.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,_){const v=h!==null?h.length:0;let g=null;if(v!==0){if(g=c.value,_!==!0||g===null){const m=d+v*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(g===null||g.length<m)&&(g=new Float32Array(m));for(let S=0,w=d;S!==v;++S,w+=4)o.copy(h[S]).applyMatrix4(A,a),o.normal.toArray(g,w),g[w+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function Yg(s){let e=new WeakMap;function t(o,a){return a===Eo?o.mapping=Rs:a===ec&&(o.mapping=Cs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Eo||a===ec)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new ap(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class xr extends Uu{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const gs=4,Kl=[.125,.215,.35,.446,.526,.582],Ni=20,Aa=new xr,Yl=new xe;let Ta=null,ba=0,Ra=0,Ca=!1;const Di=(1+Math.sqrt(5))/2,rs=1/Di,Zl=[new O(-Di,rs,0),new O(Di,rs,0),new O(-rs,0,Di),new O(rs,0,Di),new O(0,Di,-rs),new O(0,Di,rs),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class Jl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ta=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=th(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ta,ba,Ra),this._renderer.xr.enabled=Ca,e.scissorTest=!1,Xr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rs||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ta=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:vr,format:xn,colorSpace:$t,depthBuffer:!1},i=Ql(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ql(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zg(r)),this._blurMaterial=Jg(r,e,t)}return i}_compileMaterial(e){const t=new Et(this._lodPlanes[0],e);this._renderer.compile(t,Aa)}_sceneToCubeUV(e,t,n,i){const a=new Yt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Yl),u.toneMapping=gi,u.autoClear=!1;const d=new Zt({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),_=new Et(new Bi,d);let v=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,v=!0):(d.color.copy(Yl),v=!0);for(let m=0;m<6;m++){const A=m%3;A===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):A===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const S=this._cubeSize;Xr(i,A*S,m>2?S:0,S,S),u.setRenderTarget(i),v&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Rs||e.mapping===Cs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=th()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eh());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Et(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Xr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Aa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Zl[(i-r-1)%Zl.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Et(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ni-1),v=r/_,g=isFinite(r)?1+Math.floor(u*v):Ni;g>Ni&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ni}`);const m=[];let A=0;for(let P=0;P<Ni;++P){const k=P/v,x=Math.exp(-k*k/2);m.push(x),P===0?A+=x:P<g&&(A+=2*x)}for(let P=0;P<m.length;P++)m[P]=m[P]/A;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=_,f.mipInt.value=S-n;const w=this._sizeLods[i],U=3*w*(i>S-gs?i-S+gs:0),I=4*(this._cubeSize-w);Xr(t,U,I,3*w,2*w),c.setRenderTarget(t),c.render(h,Aa)}}function Zg(s){const e=[],t=[],n=[];let i=s;const r=s-gs+1+Kl.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-gs?c=Kl[o-s+gs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,v=3,g=2,m=1,A=new Float32Array(v*_*d),S=new Float32Array(g*_*d),w=new Float32Array(m*_*d);for(let I=0;I<d;I++){const P=I%3*2/3-1,k=I>2?0:-1,x=[P,k,0,P+2/3,k,0,P+2/3,k+1,0,P,k,0,P+2/3,k+1,0,P,k+1,0];A.set(x,v*_*I),S.set(f,g*_*I);const E=[I,I,I,I,I,I];w.set(E,m*_*I)}const U=new Pt;U.setAttribute("position",new Nt(A,v)),U.setAttribute("uv",new Nt(S,g)),U.setAttribute("faceIndex",new Nt(w,m)),e.push(U),i>gs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ql(s,e,t){const n=new xi(s,e,t);return n.texture.mapping=Fo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Jg(s,e,t){const n=new Float32Array(Ni),i=new O(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:sl(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function eh(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sl(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function th(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function sl(){return`

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
	`}function Qg(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Eo||c===ec,u=c===Rs||c===Cs;if(l||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Jl(s)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return l&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new Jl(s)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function e0(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&tl("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function t0(s,e,t,n){const i={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const v=f.morphAttributes[_];for(let g=0,m=v.length;g<m;g++)e.remove(v[g])}f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const _ in f)e.update(f[_],s.ARRAY_BUFFER);const d=h.morphAttributes;for(const _ in d){const v=d[_];for(let g=0,m=v.length;g<m;g++)e.update(v[g],s.ARRAY_BUFFER)}}function l(h){const f=[],d=h.index,_=h.attributes.position;let v=0;if(d!==null){const A=d.array;v=d.version;for(let S=0,w=A.length;S<w;S+=3){const U=A[S+0],I=A[S+1],P=A[S+2];f.push(U,I,I,P,P,U)}}else if(_!==void 0){const A=_.array;v=_.version;for(let S=0,w=A.length/3-1;S<w;S+=3){const U=S+0,I=S+1,P=S+2;f.push(U,I,I,P,P,U)}}else return;const g=new(bu(f)?Lu:nl)(f,1);g.version=v;const m=r.get(h);m&&e.remove(m),r.set(h,g)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function n0(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){s.drawElements(n,d,r,f*o),t.update(d,n,1)}function l(f,d,_){_!==0&&(s.drawElementsInstanced(n,d,r,f*o,_),t.update(d,n,_))}function u(f,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,_);let g=0;for(let m=0;m<_;m++)g+=d[m];t.update(g,n,1)}function h(f,d,_,v){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)l(f[m]/o,d[m],v[m]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,v,0,_);let m=0;for(let A=0;A<_;A++)m+=d[A];for(let A=0;A<v.length;A++)t.update(m,n,v[A])}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function i0(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function s0(s,e,t){const n=new WeakMap,i=new ut;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let E=function(){k.dispose(),n.delete(a),a.removeEventListener("dispose",E)};var d=E;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let w=0;_===!0&&(w=1),v===!0&&(w=2),g===!0&&(w=3);let U=a.attributes.position.count*w,I=1;U>e.maxTextureSize&&(I=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const P=new Float32Array(U*I*4*h),k=new Cu(P,U,I,h);k.type=Cn,k.needsUpdate=!0;const x=w*4;for(let C=0;C<h;C++){const F=m[C],B=A[C],X=S[C],K=U*I*4*C;for(let H=0;H<F.count;H++){const L=H*x;_===!0&&(i.fromBufferAttribute(F,H),P[K+L+0]=i.x,P[K+L+1]=i.y,P[K+L+2]=i.z,P[K+L+3]=0),v===!0&&(i.fromBufferAttribute(B,H),P[K+L+4]=i.x,P[K+L+5]=i.y,P[K+L+6]=i.z,P[K+L+7]=0),g===!0&&(i.fromBufferAttribute(X,H),P[K+L+8]=i.x,P[K+L+9]=i.y,P[K+L+10]=i.z,P[K+L+11]=X.itemSize===4?i.w:1)}}f={count:h,texture:k,size:new Xe(U,I)},n.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let _=0;for(let g=0;g<l.length;g++)_+=l[g];const v=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(s,"morphTargetBaseInfluence",v),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function r0(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class Fu extends Ut{constructor(e,t,n,i,r,o,a,c,l,u=Ms){if(u!==Ms&&u!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ms&&(n=Fi),n===void 0&&u===Is&&(n=Ps),super(null,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Vt,this.minFilter=c!==void 0?c:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Bu=new Ut,nh=new Fu(1,1),zu=new Cu,ku=new $d,Hu=new Nu,ih=[],sh=[],rh=new Float32Array(16),oh=new Float32Array(9),ah=new Float32Array(4);function Bs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=ih[i];if(r===void 0&&(r=new Float32Array(i),ih[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Ft(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Bt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ho(s,e){let t=sh[e];t===void 0&&(t=new Int32Array(e),sh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function o0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function a0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2fv(this.addr,e),Bt(t,e)}}function c0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;s.uniform3fv(this.addr,e),Bt(t,e)}}function l0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4fv(this.addr,e),Bt(t,e)}}function h0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,n))return;ah.set(n),s.uniformMatrix2fv(this.addr,!1,ah),Bt(t,n)}}function u0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,n))return;oh.set(n),s.uniformMatrix3fv(this.addr,!1,oh),Bt(t,n)}}function f0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,n))return;rh.set(n),s.uniformMatrix4fv(this.addr,!1,rh),Bt(t,n)}}function d0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function p0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2iv(this.addr,e),Bt(t,e)}}function m0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;s.uniform3iv(this.addr,e),Bt(t,e)}}function g0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4iv(this.addr,e),Bt(t,e)}}function _0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function v0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2uiv(this.addr,e),Bt(t,e)}}function x0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;s.uniform3uiv(this.addr,e),Bt(t,e)}}function y0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4uiv(this.addr,e),Bt(t,e)}}function M0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(nh.compareFunction=Tu,r=nh):r=Bu,t.setTexture2D(e||r,i)}function S0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ku,i)}function E0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Hu,i)}function w0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||zu,i)}function A0(s){switch(s){case 5126:return o0;case 35664:return a0;case 35665:return c0;case 35666:return l0;case 35674:return h0;case 35675:return u0;case 35676:return f0;case 5124:case 35670:return d0;case 35667:case 35671:return p0;case 35668:case 35672:return m0;case 35669:case 35673:return g0;case 5125:return _0;case 36294:return v0;case 36295:return x0;case 36296:return y0;case 35678:case 36198:case 36298:case 36306:case 35682:return M0;case 35679:case 36299:case 36307:return S0;case 35680:case 36300:case 36308:case 36293:return E0;case 36289:case 36303:case 36311:case 36292:return w0}}function T0(s,e){s.uniform1fv(this.addr,e)}function b0(s,e){const t=Bs(e,this.size,2);s.uniform2fv(this.addr,t)}function R0(s,e){const t=Bs(e,this.size,3);s.uniform3fv(this.addr,t)}function C0(s,e){const t=Bs(e,this.size,4);s.uniform4fv(this.addr,t)}function P0(s,e){const t=Bs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function I0(s,e){const t=Bs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function L0(s,e){const t=Bs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function D0(s,e){s.uniform1iv(this.addr,e)}function U0(s,e){s.uniform2iv(this.addr,e)}function N0(s,e){s.uniform3iv(this.addr,e)}function O0(s,e){s.uniform4iv(this.addr,e)}function F0(s,e){s.uniform1uiv(this.addr,e)}function B0(s,e){s.uniform2uiv(this.addr,e)}function z0(s,e){s.uniform3uiv(this.addr,e)}function k0(s,e){s.uniform4uiv(this.addr,e)}function H0(s,e,t){const n=this.cache,i=e.length,r=Ho(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Bu,r[o])}function V0(s,e,t){const n=this.cache,i=e.length,r=Ho(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||ku,r[o])}function G0(s,e,t){const n=this.cache,i=e.length,r=Ho(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Hu,r[o])}function W0(s,e,t){const n=this.cache,i=e.length,r=Ho(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||zu,r[o])}function $0(s){switch(s){case 5126:return T0;case 35664:return b0;case 35665:return R0;case 35666:return C0;case 35674:return P0;case 35675:return I0;case 35676:return L0;case 5124:case 35670:return D0;case 35667:case 35671:return U0;case 35668:case 35672:return N0;case 35669:case 35673:return O0;case 5125:return F0;case 36294:return B0;case 36295:return z0;case 36296:return k0;case 35678:case 36198:case 36298:case 36306:case 35682:return H0;case 35679:case 36299:case 36307:return V0;case 35680:case 36300:case 36308:case 36293:return G0;case 36289:case 36303:case 36311:case 36292:return W0}}class X0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=A0(t.type)}}class j0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$0(t.type)}}class q0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Pa=/(\w+)(\])?(\[|\.)?/g;function ch(s,e){s.seq.push(e),s.map[e.id]=e}function K0(s,e,t){const n=s.name,i=n.length;for(Pa.lastIndex=0;;){const r=Pa.exec(n),o=Pa.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){ch(t,l===void 0?new X0(a,s,e):new j0(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new q0(a),ch(t,h)),t=h}}}class vo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);K0(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function lh(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Y0=37297;let Z0=0;function J0(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Q0(s){const e=mt.getPrimaries(mt.workingColorSpace),t=mt.getPrimaries(s);let n;switch(e===t?n="":e===bo&&t===To?n="LinearDisplayP3ToLinearSRGB":e===To&&t===bo&&(n="LinearSRGBToLinearDisplayP3"),s){case $t:case zo:return[n,"LinearTransferOETF"];case xt:case Qc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function hh(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+J0(s.getShaderSource(e),o)}else return i}function e_(s,e){const t=Q0(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function t_(s,e){let t;switch(e){case nd:t="Linear";break;case id:t="Reinhard";break;case sd:t="OptimizedCineon";break;case rd:t="ACESFilmic";break;case ad:t="AgX";break;case cd:t="Neutral";break;case od:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function n_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nr).join(`
`)}function i_(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function s_(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function nr(s){return s!==""}function uh(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const r_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pc(s){return s.replace(r_,a_)}const o_=new Map;function a_(s,e){let t=it[e];if(t===void 0){const n=o_.get(e);if(n!==void 0)t=it[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Pc(t)}const c_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dh(s){return s.replace(c_,l_)}function l_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ph(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function h_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===du?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Rf?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===qn&&(e="SHADOWMAP_TYPE_VSM"),e}function u_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Rs:case Cs:e="ENVMAP_TYPE_CUBE";break;case Fo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function f_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Cs:e="ENVMAP_MODE_REFRACTION";break}return e}function d_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Oo:e="ENVMAP_BLENDING_MULTIPLY";break;case ed:e="ENVMAP_BLENDING_MIX";break;case td:e="ENVMAP_BLENDING_ADD";break}return e}function p_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function m_(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=h_(t),l=u_(t),u=f_(t),h=d_(t),f=p_(t),d=n_(t),_=i_(r),v=i.createProgram();let g,m,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(nr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(nr).join(`
`),m.length>0&&(m+=`
`)):(g=[ph(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nr).join(`
`),m=[ph(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?it.tonemapping_pars_fragment:"",t.toneMapping!==gi?t_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,e_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(nr).join(`
`)),o=Pc(o),o=uh(o,t),o=fh(o,t),a=Pc(a),a=uh(a,t),a=fh(a,t),o=dh(o),a=dh(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=A+g+o,w=A+m+a,U=lh(i,i.VERTEX_SHADER,S),I=lh(i,i.FRAGMENT_SHADER,w);i.attachShader(v,U),i.attachShader(v,I),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function P(C){if(s.debug.checkShaderErrors){const F=i.getProgramInfoLog(v).trim(),B=i.getShaderInfoLog(U).trim(),X=i.getShaderInfoLog(I).trim();let K=!0,H=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,U,I);else{const L=hh(i,U,"vertex"),$=hh(i,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+F+`
`+L+`
`+$)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(B===""||X==="")&&(H=!1);H&&(C.diagnostics={runnable:K,programLog:F,vertexShader:{log:B,prefix:g},fragmentShader:{log:X,prefix:m}})}i.deleteShader(U),i.deleteShader(I),k=new vo(i,v),x=s_(i,v)}let k;this.getUniforms=function(){return k===void 0&&P(this),k};let x;this.getAttributes=function(){return x===void 0&&P(this),x};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(v,Y0)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Z0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=U,this.fragmentShader=I,this}let g_=0;class __{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new v_(e),t.set(e,n)),n}}class v_{constructor(e){this.id=g_++,this.code=e,this.usedTimes=0}}function x_(s,e,t,n,i,r,o){const a=new Pu,c=new __,l=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,E,C,F,B){const X=F.fog,K=B.geometry,H=x.isMeshStandardMaterial?F.environment:null,L=(x.isMeshStandardMaterial?t:e).get(x.envMap||H),$=L&&L.mapping===Fo?L.image.height:null,ee=_[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const he=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,pe=he!==void 0?he.length:0;let Be=0;K.morphAttributes.position!==void 0&&(Be=1),K.morphAttributes.normal!==void 0&&(Be=2),K.morphAttributes.color!==void 0&&(Be=3);let Ke,J,le,we;if(ee){const ht=Nn[ee];Ke=ht.vertexShader,J=ht.fragmentShader}else Ke=x.vertexShader,J=x.fragmentShader,c.update(x),le=c.getVertexShaderID(x),we=c.getFragmentShaderID(x);const ye=s.getRenderTarget(),We=B.isInstancedMesh===!0,Ye=B.isBatchedMesh===!0,je=!!x.map,ct=!!x.matcap,D=!!L,ve=!!x.aoMap,De=!!x.lightMap,$e=!!x.bumpMap,Se=!!x.normalMap,at=!!x.displacementMap,Pe=!!x.emissiveMap,ke=!!x.metalnessMap,N=!!x.roughnessMap,b=x.anisotropy>0,Y=x.clearcoat>0,ae=x.dispersion>0,ce=x.iridescence>0,re=x.sheen>0,Re=x.transmission>0,me=b&&!!x.anisotropyMap,oe=Y&&!!x.clearcoatMap,Ie=Y&&!!x.clearcoatNormalMap,ue=Y&&!!x.clearcoatRoughnessMap,Ee=ce&&!!x.iridescenceMap,et=ce&&!!x.iridescenceThicknessMap,He=re&&!!x.sheenColorMap,Me=re&&!!x.sheenRoughnessMap,Ve=!!x.specularMap,qe=!!x.specularColorMap,Qe=!!x.specularIntensityMap,G=Re&&!!x.transmissionMap,de=Re&&!!x.thicknessMap,te=!!x.gradientMap,ie=!!x.alphaMap,ge=x.alphaTest>0,Ne=!!x.alphaHash,Ze=!!x.extensions;let ft=gi;x.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(ft=s.toneMapping);const Ot={shaderID:ee,shaderType:x.type,shaderName:x.name,vertexShader:Ke,fragmentShader:J,defines:x.defines,customVertexShaderID:le,customFragmentShaderID:we,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Ye,batchingColor:Ye&&B._colorsTexture!==null,instancing:We,instancingColor:We&&B.instanceColor!==null,instancingMorph:We&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ye===null?s.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:$t,alphaToCoverage:!!x.alphaToCoverage,map:je,matcap:ct,envMap:D,envMapMode:D&&L.mapping,envMapCubeUVHeight:$,aoMap:ve,lightMap:De,bumpMap:$e,normalMap:Se,displacementMap:f&&at,emissiveMap:Pe,normalMapObjectSpace:Se&&x.normalMapType===pd,normalMapTangentSpace:Se&&x.normalMapType===Bo,metalnessMap:ke,roughnessMap:N,anisotropy:b,anisotropyMap:me,clearcoat:Y,clearcoatMap:oe,clearcoatNormalMap:Ie,clearcoatRoughnessMap:ue,dispersion:ae,iridescence:ce,iridescenceMap:Ee,iridescenceThicknessMap:et,sheen:re,sheenColorMap:He,sheenRoughnessMap:Me,specularMap:Ve,specularColorMap:qe,specularIntensityMap:Qe,transmission:Re,transmissionMap:G,thicknessMap:de,gradientMap:te,opaque:x.transparent===!1&&x.blending===ys&&x.alphaToCoverage===!1,alphaMap:ie,alphaTest:ge,alphaHash:Ne,combine:x.combine,mapUv:je&&v(x.map.channel),aoMapUv:ve&&v(x.aoMap.channel),lightMapUv:De&&v(x.lightMap.channel),bumpMapUv:$e&&v(x.bumpMap.channel),normalMapUv:Se&&v(x.normalMap.channel),displacementMapUv:at&&v(x.displacementMap.channel),emissiveMapUv:Pe&&v(x.emissiveMap.channel),metalnessMapUv:ke&&v(x.metalnessMap.channel),roughnessMapUv:N&&v(x.roughnessMap.channel),anisotropyMapUv:me&&v(x.anisotropyMap.channel),clearcoatMapUv:oe&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:et&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:He&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Me&&v(x.sheenRoughnessMap.channel),specularMapUv:Ve&&v(x.specularMap.channel),specularColorMapUv:qe&&v(x.specularColorMap.channel),specularIntensityMapUv:Qe&&v(x.specularIntensityMap.channel),transmissionMapUv:G&&v(x.transmissionMap.channel),thicknessMapUv:de&&v(x.thicknessMap.channel),alphaMapUv:ie&&v(x.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Se||b),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!K.attributes.uv&&(je||ie),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:B.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Be,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:ft,decodeVideoTexture:je&&x.map.isVideoTexture===!0&&mt.getTransfer(x.map.colorSpace)===Mt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===hn,flipSided:x.side===sn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ze&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&x.extensions.multiDraw===!0||Ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ot.vertexUv1s=l.has(1),Ot.vertexUv2s=l.has(2),Ot.vertexUv3s=l.has(3),l.clear(),Ot}function m(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const C in x.defines)E.push(C),E.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(A(E,x),S(E,x),E.push(s.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function A(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function S(x,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.doubleSided&&a.enable(10),E.flipSided&&a.enable(11),E.useDepthPacking&&a.enable(12),E.dithering&&a.enable(13),E.transmission&&a.enable(14),E.sheen&&a.enable(15),E.opaque&&a.enable(16),E.pointsUvs&&a.enable(17),E.decodeVideoTexture&&a.enable(18),E.alphaToCoverage&&a.enable(19),x.push(a.mask)}function w(x){const E=_[x.type];let C;if(E){const F=Nn[E];C=ip.clone(F.uniforms)}else C=x.uniforms;return C}function U(x,E){let C;for(let F=0,B=u.length;F<B;F++){const X=u[F];if(X.cacheKey===E){C=X,++C.usedTimes;break}}return C===void 0&&(C=new m_(s,E,x,r),u.push(C)),C}function I(x){if(--x.usedTimes===0){const E=u.indexOf(x);u[E]=u[u.length-1],u.pop(),x.destroy()}}function P(x){c.remove(x)}function k(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:w,acquireProgram:U,releaseProgram:I,releaseShaderCache:P,programs:u,dispose:k}}function y_(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function M_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function mh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function gh(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,_,v,g){let m=s[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:v,group:g},s[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=v,m.group=g),e++,m}function a(h,f,d,_,v,g){const m=o(h,f,d,_,v,g);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function c(h,f,d,_,v,g){const m=o(h,f,d,_,v,g);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function l(h,f){t.length>1&&t.sort(h||M_),n.length>1&&n.sort(f||mh),i.length>1&&i.sort(f||mh)}function u(){for(let h=e,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function S_(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new gh,s.set(n,[o])):i>=r.length?(o=new gh,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function E_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new xe};break;case"SpotLight":t={position:new O,direction:new O,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new O,halfWidth:new O,halfHeight:new O};break}return s[e.id]=t,t}}}function w_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let A_=0;function T_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function b_(s){const e=new E_,t=w_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new O);const i=new O,r=new be,o=new be;function a(l){let u=0,h=0,f=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let d=0,_=0,v=0,g=0,m=0,A=0,S=0,w=0,U=0,I=0,P=0;l.sort(T_);for(let x=0,E=l.length;x<E;x++){const C=l[x],F=C.color,B=C.intensity,X=C.distance,K=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=F.r*B,h+=F.g*B,f+=F.b*B;else if(C.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(C.sh.coefficients[H],B);P++}else if(C.isDirectionalLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const L=C.shadow,$=t.get(C);$.shadowIntensity=L.intensity,$.shadowBias=L.bias,$.shadowNormalBias=L.normalBias,$.shadowRadius=L.radius,$.shadowMapSize=L.mapSize,n.directionalShadow[d]=$,n.directionalShadowMap[d]=K,n.directionalShadowMatrix[d]=C.shadow.matrix,A++}n.directional[d]=H,d++}else if(C.isSpotLight){const H=e.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(F).multiplyScalar(B),H.distance=X,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,n.spot[v]=H;const L=C.shadow;if(C.map&&(n.spotLightMap[U]=C.map,U++,L.updateMatrices(C),C.castShadow&&I++),n.spotLightMatrix[v]=L.matrix,C.castShadow){const $=t.get(C);$.shadowIntensity=L.intensity,$.shadowBias=L.bias,$.shadowNormalBias=L.normalBias,$.shadowRadius=L.radius,$.shadowMapSize=L.mapSize,n.spotShadow[v]=$,n.spotShadowMap[v]=K,w++}v++}else if(C.isRectAreaLight){const H=e.get(C);H.color.copy(F).multiplyScalar(B),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),n.rectArea[g]=H,g++}else if(C.isPointLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){const L=C.shadow,$=t.get(C);$.shadowIntensity=L.intensity,$.shadowBias=L.bias,$.shadowNormalBias=L.normalBias,$.shadowRadius=L.radius,$.shadowMapSize=L.mapSize,$.shadowCameraNear=L.camera.near,$.shadowCameraFar=L.camera.far,n.pointShadow[_]=$,n.pointShadowMap[_]=K,n.pointShadowMatrix[_]=C.shadow.matrix,S++}n.point[_]=H,_++}else if(C.isHemisphereLight){const H=e.get(C);H.skyColor.copy(C.color).multiplyScalar(B),H.groundColor.copy(C.groundColor).multiplyScalar(B),n.hemi[m]=H,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const k=n.hash;(k.directionalLength!==d||k.pointLength!==_||k.spotLength!==v||k.rectAreaLength!==g||k.hemiLength!==m||k.numDirectionalShadows!==A||k.numPointShadows!==S||k.numSpotShadows!==w||k.numSpotMaps!==U||k.numLightProbes!==P)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=g,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=w+U-I,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=P,k.directionalLength=d,k.pointLength=_,k.spotLength=v,k.rectAreaLength=g,k.hemiLength=m,k.numDirectionalShadows=A,k.numPointShadows=S,k.numSpotShadows=w,k.numSpotMaps=U,k.numLightProbes=P,n.version=A_++)}function c(l,u){let h=0,f=0,d=0,_=0,v=0;const g=u.matrixWorldInverse;for(let m=0,A=l.length;m<A;m++){const S=l[m];if(S.isDirectionalLight){const w=n.directional[h];w.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(g),h++}else if(S.isSpotLight){const w=n.spot[d];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(g),d++}else if(S.isRectAreaLight){const w=n.rectArea[_];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(g),o.identity(),r.copy(S.matrixWorld),r.premultiply(g),o.extractRotation(r),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const w=n.point[f];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(g),f++}else if(S.isHemisphereLight){const w=n.hemi[v];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(g),v++}}}return{setup:a,setupView:c,state:n}}function _h(s){const e=new b_(s),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function R_(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new _h(s),e.set(i,[a])):r>=o.length?(a=new _h(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class C_ extends rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class P_ extends rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const I_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,L_=`uniform sampler2D shadow_pass;
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
}`;function D_(s,e,t){let n=new il;const i=new Xe,r=new Xe,o=new ut,a=new C_({depthPacking:dd}),c=new P_,l={},u=t.maxTextureSize,h={[Qn]:sn,[sn]:Qn,[hn]:hn},f=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:I_,fragmentShader:L_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new Pt;_.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Et(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=du;let m=this.type;this.render=function(I,P,k){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||I.length===0)return;const x=s.getRenderTarget(),E=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),F=s.state;F.setBlending(mi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=m!==qn&&this.type===qn,X=m===qn&&this.type!==qn;for(let K=0,H=I.length;K<H;K++){const L=I[K],$=L.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",L,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;i.copy($.mapSize);const ee=$.getFrameExtents();if(i.multiply(ee),r.copy($.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/ee.x),i.x=r.x*ee.x,$.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/ee.y),i.y=r.y*ee.y,$.mapSize.y=r.y)),$.map===null||B===!0||X===!0){const pe=this.type!==qn?{minFilter:Vt,magFilter:Vt}:{};$.map!==null&&$.map.dispose(),$.map=new xi(i.x,i.y,pe),$.map.texture.name=L.name+".shadowMap",$.camera.updateProjectionMatrix()}s.setRenderTarget($.map),s.clear();const he=$.getViewportCount();for(let pe=0;pe<he;pe++){const Be=$.getViewport(pe);o.set(r.x*Be.x,r.y*Be.y,r.x*Be.z,r.y*Be.w),F.viewport(o),$.updateMatrices(L,pe),n=$.getFrustum(),w(P,k,$.camera,L,this.type)}$.isPointLightShadow!==!0&&this.type===qn&&A($,k),$.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(x,E,C)};function A(I,P){const k=e.update(v);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,d.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new xi(i.x,i.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(P,null,k,f,v,null),d.uniforms.shadow_pass.value=I.mapPass.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(P,null,k,d,v,null)}function S(I,P,k,x){let E=null;const C=k.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(C!==void 0)E=C;else if(E=k.isPointLight===!0?c:a,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const F=E.uuid,B=P.uuid;let X=l[F];X===void 0&&(X={},l[F]=X);let K=X[B];K===void 0&&(K=E.clone(),X[B]=K,P.addEventListener("dispose",U)),E=K}if(E.visible=P.visible,E.wireframe=P.wireframe,x===qn?E.side=P.shadowSide!==null?P.shadowSide:P.side:E.side=P.shadowSide!==null?P.shadowSide:h[P.side],E.alphaMap=P.alphaMap,E.alphaTest=P.alphaTest,E.map=P.map,E.clipShadows=P.clipShadows,E.clippingPlanes=P.clippingPlanes,E.clipIntersection=P.clipIntersection,E.displacementMap=P.displacementMap,E.displacementScale=P.displacementScale,E.displacementBias=P.displacementBias,E.wireframeLinewidth=P.wireframeLinewidth,E.linewidth=P.linewidth,k.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const F=s.properties.get(E);F.light=k}return E}function w(I,P,k,x,E){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&E===qn)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,I.matrixWorld);const B=e.update(I),X=I.material;if(Array.isArray(X)){const K=B.groups;for(let H=0,L=K.length;H<L;H++){const $=K[H],ee=X[$.materialIndex];if(ee&&ee.visible){const he=S(I,ee,x,E);I.onBeforeShadow(s,I,P,k,B,he,$),s.renderBufferDirect(k,null,B,he,I,$),I.onAfterShadow(s,I,P,k,B,he,$)}}}else if(X.visible){const K=S(I,X,x,E);I.onBeforeShadow(s,I,P,k,B,K,null),s.renderBufferDirect(k,null,B,K,I,null),I.onAfterShadow(s,I,P,k,B,K,null)}}const F=I.children;for(let B=0,X=F.length;B<X;B++)w(F[B],P,k,x,E)}function U(I){I.target.removeEventListener("dispose",U);for(const k in l){const x=l[k],E=I.target.uuid;E in x&&(x[E].dispose(),delete x[E])}}}function U_(s){function e(){let G=!1;const de=new ut;let te=null;const ie=new ut(0,0,0,0);return{setMask:function(ge){te!==ge&&!G&&(s.colorMask(ge,ge,ge,ge),te=ge)},setLocked:function(ge){G=ge},setClear:function(ge,Ne,Ze,ft,Ot){Ot===!0&&(ge*=ft,Ne*=ft,Ze*=ft),de.set(ge,Ne,Ze,ft),ie.equals(de)===!1&&(s.clearColor(ge,Ne,Ze,ft),ie.copy(de))},reset:function(){G=!1,te=null,ie.set(-1,0,0,0)}}}function t(){let G=!1,de=null,te=null,ie=null;return{setTest:function(ge){ge?we(s.DEPTH_TEST):ye(s.DEPTH_TEST)},setMask:function(ge){de!==ge&&!G&&(s.depthMask(ge),de=ge)},setFunc:function(ge){if(te!==ge){switch(ge){case jf:s.depthFunc(s.NEVER);break;case qf:s.depthFunc(s.ALWAYS);break;case Kf:s.depthFunc(s.LESS);break;case So:s.depthFunc(s.LEQUAL);break;case Yf:s.depthFunc(s.EQUAL);break;case Zf:s.depthFunc(s.GEQUAL);break;case Jf:s.depthFunc(s.GREATER);break;case Qf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}te=ge}},setLocked:function(ge){G=ge},setClear:function(ge){ie!==ge&&(s.clearDepth(ge),ie=ge)},reset:function(){G=!1,de=null,te=null,ie=null}}}function n(){let G=!1,de=null,te=null,ie=null,ge=null,Ne=null,Ze=null,ft=null,Ot=null;return{setTest:function(ht){G||(ht?we(s.STENCIL_TEST):ye(s.STENCIL_TEST))},setMask:function(ht){de!==ht&&!G&&(s.stencilMask(ht),de=ht)},setFunc:function(ht,bt,fn){(te!==ht||ie!==bt||ge!==fn)&&(s.stencilFunc(ht,bt,fn),te=ht,ie=bt,ge=fn)},setOp:function(ht,bt,fn){(Ne!==ht||Ze!==bt||ft!==fn)&&(s.stencilOp(ht,bt,fn),Ne=ht,Ze=bt,ft=fn)},setLocked:function(ht){G=ht},setClear:function(ht){Ot!==ht&&(s.clearStencil(ht),Ot=ht)},reset:function(){G=!1,de=null,te=null,ie=null,ge=null,Ne=null,Ze=null,ft=null,Ot=null}}}const i=new e,r=new t,o=new n,a=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,f=[],d=null,_=!1,v=null,g=null,m=null,A=null,S=null,w=null,U=null,I=new xe(0,0,0),P=0,k=!1,x=null,E=null,C=null,F=null,B=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,H=0;const L=s.getParameter(s.VERSION);L.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(L)[1]),K=H>=1):L.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),K=H>=2);let $=null,ee={};const he=s.getParameter(s.SCISSOR_BOX),pe=s.getParameter(s.VIEWPORT),Be=new ut().fromArray(he),Ke=new ut().fromArray(pe);function J(G,de,te,ie){const ge=new Uint8Array(4),Ne=s.createTexture();s.bindTexture(G,Ne),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ze=0;Ze<te;Ze++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(de,0,s.RGBA,1,1,ie,0,s.RGBA,s.UNSIGNED_BYTE,ge):s.texImage2D(de+Ze,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ge);return Ne}const le={};le[s.TEXTURE_2D]=J(s.TEXTURE_2D,s.TEXTURE_2D,1),le[s.TEXTURE_CUBE_MAP]=J(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[s.TEXTURE_2D_ARRAY]=J(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),le[s.TEXTURE_3D]=J(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),we(s.DEPTH_TEST),r.setFunc(So),$e(!1),Se(xl),we(s.CULL_FACE),ve(mi);function we(G){l[G]!==!0&&(s.enable(G),l[G]=!0)}function ye(G){l[G]!==!1&&(s.disable(G),l[G]=!1)}function We(G,de){return u[G]!==de?(s.bindFramebuffer(G,de),u[G]=de,G===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=de),G===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=de),!0):!1}function Ye(G,de){let te=f,ie=!1;if(G){te=h.get(de),te===void 0&&(te=[],h.set(de,te));const ge=G.textures;if(te.length!==ge.length||te[0]!==s.COLOR_ATTACHMENT0){for(let Ne=0,Ze=ge.length;Ne<Ze;Ne++)te[Ne]=s.COLOR_ATTACHMENT0+Ne;te.length=ge.length,ie=!0}}else te[0]!==s.BACK&&(te[0]=s.BACK,ie=!0);ie&&s.drawBuffers(te)}function je(G){return d!==G?(s.useProgram(G),d=G,!0):!1}const ct={[Ui]:s.FUNC_ADD,[Pf]:s.FUNC_SUBTRACT,[If]:s.FUNC_REVERSE_SUBTRACT};ct[Lf]=s.MIN,ct[Df]=s.MAX;const D={[Uf]:s.ZERO,[Nf]:s.ONE,[Of]:s.SRC_COLOR,[Ja]:s.SRC_ALPHA,[Vf]:s.SRC_ALPHA_SATURATE,[kf]:s.DST_COLOR,[Bf]:s.DST_ALPHA,[Ff]:s.ONE_MINUS_SRC_COLOR,[Qa]:s.ONE_MINUS_SRC_ALPHA,[Hf]:s.ONE_MINUS_DST_COLOR,[zf]:s.ONE_MINUS_DST_ALPHA,[Gf]:s.CONSTANT_COLOR,[Wf]:s.ONE_MINUS_CONSTANT_COLOR,[$f]:s.CONSTANT_ALPHA,[Xf]:s.ONE_MINUS_CONSTANT_ALPHA};function ve(G,de,te,ie,ge,Ne,Ze,ft,Ot,ht){if(G===mi){_===!0&&(ye(s.BLEND),_=!1);return}if(_===!1&&(we(s.BLEND),_=!0),G!==Cf){if(G!==v||ht!==k){if((g!==Ui||S!==Ui)&&(s.blendEquation(s.FUNC_ADD),g=Ui,S=Ui),ht)switch(G){case ys:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case bs:s.blendFunc(s.ONE,s.ONE);break;case yl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ml:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case ys:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case bs:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case yl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ml:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}m=null,A=null,w=null,U=null,I.set(0,0,0),P=0,v=G,k=ht}return}ge=ge||de,Ne=Ne||te,Ze=Ze||ie,(de!==g||ge!==S)&&(s.blendEquationSeparate(ct[de],ct[ge]),g=de,S=ge),(te!==m||ie!==A||Ne!==w||Ze!==U)&&(s.blendFuncSeparate(D[te],D[ie],D[Ne],D[Ze]),m=te,A=ie,w=Ne,U=Ze),(ft.equals(I)===!1||Ot!==P)&&(s.blendColor(ft.r,ft.g,ft.b,Ot),I.copy(ft),P=Ot),v=G,k=!1}function De(G,de){G.side===hn?ye(s.CULL_FACE):we(s.CULL_FACE);let te=G.side===sn;de&&(te=!te),$e(te),G.blending===ys&&G.transparent===!1?ve(mi):ve(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),r.setFunc(G.depthFunc),r.setTest(G.depthTest),r.setMask(G.depthWrite),i.setMask(G.colorWrite);const ie=G.stencilWrite;o.setTest(ie),ie&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Pe(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?we(s.SAMPLE_ALPHA_TO_COVERAGE):ye(s.SAMPLE_ALPHA_TO_COVERAGE)}function $e(G){x!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),x=G)}function Se(G){G!==Tf?(we(s.CULL_FACE),G!==E&&(G===xl?s.cullFace(s.BACK):G===bf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ye(s.CULL_FACE),E=G}function at(G){G!==C&&(K&&s.lineWidth(G),C=G)}function Pe(G,de,te){G?(we(s.POLYGON_OFFSET_FILL),(F!==de||B!==te)&&(s.polygonOffset(de,te),F=de,B=te)):ye(s.POLYGON_OFFSET_FILL)}function ke(G){G?we(s.SCISSOR_TEST):ye(s.SCISSOR_TEST)}function N(G){G===void 0&&(G=s.TEXTURE0+X-1),$!==G&&(s.activeTexture(G),$=G)}function b(G,de,te){te===void 0&&($===null?te=s.TEXTURE0+X-1:te=$);let ie=ee[te];ie===void 0&&(ie={type:void 0,texture:void 0},ee[te]=ie),(ie.type!==G||ie.texture!==de)&&($!==te&&(s.activeTexture(te),$=te),s.bindTexture(G,de||le[G]),ie.type=G,ie.texture=de)}function Y(){const G=ee[$];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ae(){try{s.compressedTexImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ce(){try{s.compressedTexImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function re(){try{s.texSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Re(){try{s.texSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function me(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function oe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ie(){try{s.texStorage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ue(){try{s.texStorage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(){try{s.texImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function et(){try{s.texImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function He(G){Be.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Be.copy(G))}function Me(G){Ke.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),Ke.copy(G))}function Ve(G,de){let te=c.get(de);te===void 0&&(te=new WeakMap,c.set(de,te));let ie=te.get(G);ie===void 0&&(ie=s.getUniformBlockIndex(de,G.name),te.set(G,ie))}function qe(G,de){const ie=c.get(de).get(G);a.get(de)!==ie&&(s.uniformBlockBinding(de,ie,G.__bindingPointIndex),a.set(de,ie))}function Qe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},$=null,ee={},u={},h=new WeakMap,f=[],d=null,_=!1,v=null,g=null,m=null,A=null,S=null,w=null,U=null,I=new xe(0,0,0),P=0,k=!1,x=null,E=null,C=null,F=null,B=null,Be.set(0,0,s.canvas.width,s.canvas.height),Ke.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:we,disable:ye,bindFramebuffer:We,drawBuffers:Ye,useProgram:je,setBlending:ve,setMaterial:De,setFlipSided:$e,setCullFace:Se,setLineWidth:at,setPolygonOffset:Pe,setScissorTest:ke,activeTexture:N,bindTexture:b,unbindTexture:Y,compressedTexImage2D:ae,compressedTexImage3D:ce,texImage2D:Ee,texImage3D:et,updateUBOMapping:Ve,uniformBlockBinding:qe,texStorage2D:Ie,texStorage3D:ue,texSubImage2D:re,texSubImage3D:Re,compressedTexSubImage2D:me,compressedTexSubImage3D:oe,scissor:He,viewport:Me,reset:Qe}}function vh(s,e,t,n){const i=N_(n);switch(t){case xu:return s*e;case Mu:return s*e;case Su:return s*e*2;case Kc:return s*e/i.components*i.byteLength;case Yc:return s*e/i.components*i.byteLength;case Eu:return s*e*2/i.components*i.byteLength;case Zc:return s*e*2/i.components*i.byteLength;case yu:return s*e*3/i.components*i.byteLength;case xn:return s*e*4/i.components*i.byteLength;case Jc:return s*e*4/i.components*i.byteLength;case fo:case po:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case mo:case go:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case nc:case sc:return Math.max(s,16)*Math.max(e,8)/4;case tc:case ic:return Math.max(s,8)*Math.max(e,8)/2;case rc:case oc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ac:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case lc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case hc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case uc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case fc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case dc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case pc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case mc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case gc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case _c:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case vc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case xc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case yc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Mc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Sc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case _o:case Ec:case wc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case wu:case Ac:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Tc:case bc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function N_(s){switch(s){case ei:case gu:return{byteLength:1,components:1};case cr:case _u:case vr:return{byteLength:2,components:1};case jc:case qc:return{byteLength:2,components:4};case Fi:case Xc:case Cn:return{byteLength:4,components:1};case vu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function O_(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Xe,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(N,b){return d?new OffscreenCanvas(N,b):ur("canvas")}function v(N,b,Y){let ae=1;const ce=ke(N);if((ce.width>Y||ce.height>Y)&&(ae=Y/Math.max(ce.width,ce.height)),ae<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const re=Math.floor(ae*ce.width),Re=Math.floor(ae*ce.height);h===void 0&&(h=_(re,Re));const me=b?_(re,Re):h;return me.width=re,me.height=Re,me.getContext("2d").drawImage(N,0,0,re,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+re+"x"+Re+")."),me}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),N;return N}function g(N){return N.generateMipmaps&&N.minFilter!==Vt&&N.minFilter!==un}function m(N){s.generateMipmap(N)}function A(N,b,Y,ae,ce=!1){if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let re=b;if(b===s.RED&&(Y===s.FLOAT&&(re=s.R32F),Y===s.HALF_FLOAT&&(re=s.R16F),Y===s.UNSIGNED_BYTE&&(re=s.R8)),b===s.RED_INTEGER&&(Y===s.UNSIGNED_BYTE&&(re=s.R8UI),Y===s.UNSIGNED_SHORT&&(re=s.R16UI),Y===s.UNSIGNED_INT&&(re=s.R32UI),Y===s.BYTE&&(re=s.R8I),Y===s.SHORT&&(re=s.R16I),Y===s.INT&&(re=s.R32I)),b===s.RG&&(Y===s.FLOAT&&(re=s.RG32F),Y===s.HALF_FLOAT&&(re=s.RG16F),Y===s.UNSIGNED_BYTE&&(re=s.RG8)),b===s.RG_INTEGER&&(Y===s.UNSIGNED_BYTE&&(re=s.RG8UI),Y===s.UNSIGNED_SHORT&&(re=s.RG16UI),Y===s.UNSIGNED_INT&&(re=s.RG32UI),Y===s.BYTE&&(re=s.RG8I),Y===s.SHORT&&(re=s.RG16I),Y===s.INT&&(re=s.RG32I)),b===s.RGB&&Y===s.UNSIGNED_INT_5_9_9_9_REV&&(re=s.RGB9_E5),b===s.RGBA){const Re=ce?Ao:mt.getTransfer(ae);Y===s.FLOAT&&(re=s.RGBA32F),Y===s.HALF_FLOAT&&(re=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(re=Re===Mt?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT_4_4_4_4&&(re=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(re=s.RGB5_A1)}return(re===s.R16F||re===s.R32F||re===s.RG16F||re===s.RG32F||re===s.RGBA16F||re===s.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function S(N,b){let Y;return N?b===null||b===Fi||b===Ps?Y=s.DEPTH24_STENCIL8:b===Cn?Y=s.DEPTH32F_STENCIL8:b===cr&&(Y=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Fi||b===Ps?Y=s.DEPTH_COMPONENT24:b===Cn?Y=s.DEPTH_COMPONENT32F:b===cr&&(Y=s.DEPTH_COMPONENT16),Y}function w(N,b){return g(N)===!0||N.isFramebufferTexture&&N.minFilter!==Vt&&N.minFilter!==un?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function U(N){const b=N.target;b.removeEventListener("dispose",U),P(b),b.isVideoTexture&&u.delete(b)}function I(N){const b=N.target;b.removeEventListener("dispose",I),x(b)}function P(N){const b=n.get(N);if(b.__webglInit===void 0)return;const Y=N.source,ae=f.get(Y);if(ae){const ce=ae[b.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&k(N),Object.keys(ae).length===0&&f.delete(Y)}n.remove(N)}function k(N){const b=n.get(N);s.deleteTexture(b.__webglTexture);const Y=N.source,ae=f.get(Y);delete ae[b.__cacheKey],o.memory.textures--}function x(N){const b=n.get(N);if(N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(b.__webglFramebuffer[ae]))for(let ce=0;ce<b.__webglFramebuffer[ae].length;ce++)s.deleteFramebuffer(b.__webglFramebuffer[ae][ce]);else s.deleteFramebuffer(b.__webglFramebuffer[ae]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[ae])}else{if(Array.isArray(b.__webglFramebuffer))for(let ae=0;ae<b.__webglFramebuffer.length;ae++)s.deleteFramebuffer(b.__webglFramebuffer[ae]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ae=0;ae<b.__webglColorRenderbuffer.length;ae++)b.__webglColorRenderbuffer[ae]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[ae]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Y=N.textures;for(let ae=0,ce=Y.length;ae<ce;ae++){const re=n.get(Y[ae]);re.__webglTexture&&(s.deleteTexture(re.__webglTexture),o.memory.textures--),n.remove(Y[ae])}n.remove(N)}let E=0;function C(){E=0}function F(){const N=E;return N>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+i.maxTextures),E+=1,N}function B(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function X(N,b){const Y=n.get(N);if(N.isVideoTexture&&at(N),N.isRenderTargetTexture===!1&&N.version>0&&Y.__version!==N.version){const ae=N.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ke(Y,N,b);return}}t.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+b)}function K(N,b){const Y=n.get(N);if(N.version>0&&Y.__version!==N.version){Ke(Y,N,b);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+b)}function H(N,b){const Y=n.get(N);if(N.version>0&&Y.__version!==N.version){Ke(Y,N,b);return}t.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+b)}function L(N,b){const Y=n.get(N);if(N.version>0&&Y.__version!==N.version){J(Y,N,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+b)}const $={[Fn]:s.REPEAT,[On]:s.CLAMP_TO_EDGE,[wo]:s.MIRRORED_REPEAT},ee={[Vt]:s.NEAREST,[mu]:s.NEAREST_MIPMAP_NEAREST,[ms]:s.NEAREST_MIPMAP_LINEAR,[un]:s.LINEAR,[uo]:s.LINEAR_MIPMAP_NEAREST,[Zn]:s.LINEAR_MIPMAP_LINEAR},he={[md]:s.NEVER,[Md]:s.ALWAYS,[gd]:s.LESS,[Tu]:s.LEQUAL,[_d]:s.EQUAL,[yd]:s.GEQUAL,[vd]:s.GREATER,[xd]:s.NOTEQUAL};function pe(N,b){if(b.type===Cn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===un||b.magFilter===uo||b.magFilter===ms||b.magFilter===Zn||b.minFilter===un||b.minFilter===uo||b.minFilter===ms||b.minFilter===Zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,$[b.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,$[b.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,$[b.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,ee[b.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,ee[b.minFilter]),b.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,he[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Vt||b.minFilter!==ms&&b.minFilter!==Zn||b.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Be(N,b){let Y=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",U));const ae=b.source;let ce=f.get(ae);ce===void 0&&(ce={},f.set(ae,ce));const re=B(b);if(re!==N.__cacheKey){ce[re]===void 0&&(ce[re]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ce[re].usedTimes++;const Re=ce[N.__cacheKey];Re!==void 0&&(ce[N.__cacheKey].usedTimes--,Re.usedTimes===0&&k(b)),N.__cacheKey=re,N.__webglTexture=ce[re].texture}return Y}function Ke(N,b,Y){let ae=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ae=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ae=s.TEXTURE_3D);const ce=Be(N,b),re=b.source;t.bindTexture(ae,N.__webglTexture,s.TEXTURE0+Y);const Re=n.get(re);if(re.version!==Re.__version||ce===!0){t.activeTexture(s.TEXTURE0+Y);const me=mt.getPrimaries(mt.workingColorSpace),oe=b.colorSpace===ui?null:mt.getPrimaries(b.colorSpace),Ie=b.colorSpace===ui||me===oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let ue=v(b.image,!1,i.maxTextureSize);ue=Pe(b,ue);const Ee=r.convert(b.format,b.colorSpace),et=r.convert(b.type);let He=A(b.internalFormat,Ee,et,b.colorSpace,b.isVideoTexture);pe(ae,b);let Me;const Ve=b.mipmaps,qe=b.isVideoTexture!==!0,Qe=Re.__version===void 0||ce===!0,G=re.dataReady,de=w(b,ue);if(b.isDepthTexture)He=S(b.format===Is,b.type),Qe&&(qe?t.texStorage2D(s.TEXTURE_2D,1,He,ue.width,ue.height):t.texImage2D(s.TEXTURE_2D,0,He,ue.width,ue.height,0,Ee,et,null));else if(b.isDataTexture)if(Ve.length>0){qe&&Qe&&t.texStorage2D(s.TEXTURE_2D,de,He,Ve[0].width,Ve[0].height);for(let te=0,ie=Ve.length;te<ie;te++)Me=Ve[te],qe?G&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,Me.width,Me.height,Ee,et,Me.data):t.texImage2D(s.TEXTURE_2D,te,He,Me.width,Me.height,0,Ee,et,Me.data);b.generateMipmaps=!1}else qe?(Qe&&t.texStorage2D(s.TEXTURE_2D,de,He,ue.width,ue.height),G&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ue.width,ue.height,Ee,et,ue.data)):t.texImage2D(s.TEXTURE_2D,0,He,ue.width,ue.height,0,Ee,et,ue.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){qe&&Qe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,de,He,Ve[0].width,Ve[0].height,ue.depth);for(let te=0,ie=Ve.length;te<ie;te++)if(Me=Ve[te],b.format!==xn)if(Ee!==null)if(qe){if(G)if(b.layerUpdates.size>0){const ge=vh(Me.width,Me.height,b.format,b.type);for(const Ne of b.layerUpdates){const Ze=Me.data.subarray(Ne*ge/Me.data.BYTES_PER_ELEMENT,(Ne+1)*ge/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,Ne,Me.width,Me.height,1,Ee,Ze,0,0)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,Me.width,Me.height,ue.depth,Ee,Me.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,te,He,Me.width,Me.height,ue.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?G&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,Me.width,Me.height,ue.depth,Ee,et,Me.data):t.texImage3D(s.TEXTURE_2D_ARRAY,te,He,Me.width,Me.height,ue.depth,0,Ee,et,Me.data)}else{qe&&Qe&&t.texStorage2D(s.TEXTURE_2D,de,He,Ve[0].width,Ve[0].height);for(let te=0,ie=Ve.length;te<ie;te++)Me=Ve[te],b.format!==xn?Ee!==null?qe?G&&t.compressedTexSubImage2D(s.TEXTURE_2D,te,0,0,Me.width,Me.height,Ee,Me.data):t.compressedTexImage2D(s.TEXTURE_2D,te,He,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?G&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,Me.width,Me.height,Ee,et,Me.data):t.texImage2D(s.TEXTURE_2D,te,He,Me.width,Me.height,0,Ee,et,Me.data)}else if(b.isDataArrayTexture)if(qe){if(Qe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,de,He,ue.width,ue.height,ue.depth),G)if(b.layerUpdates.size>0){const te=vh(ue.width,ue.height,b.format,b.type);for(const ie of b.layerUpdates){const ge=ue.data.subarray(ie*te/ue.data.BYTES_PER_ELEMENT,(ie+1)*te/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ie,ue.width,ue.height,1,Ee,et,ge)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Ee,et,ue.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,He,ue.width,ue.height,ue.depth,0,Ee,et,ue.data);else if(b.isData3DTexture)qe?(Qe&&t.texStorage3D(s.TEXTURE_3D,de,He,ue.width,ue.height,ue.depth),G&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Ee,et,ue.data)):t.texImage3D(s.TEXTURE_3D,0,He,ue.width,ue.height,ue.depth,0,Ee,et,ue.data);else if(b.isFramebufferTexture){if(Qe)if(qe)t.texStorage2D(s.TEXTURE_2D,de,He,ue.width,ue.height);else{let te=ue.width,ie=ue.height;for(let ge=0;ge<de;ge++)t.texImage2D(s.TEXTURE_2D,ge,He,te,ie,0,Ee,et,null),te>>=1,ie>>=1}}else if(Ve.length>0){if(qe&&Qe){const te=ke(Ve[0]);t.texStorage2D(s.TEXTURE_2D,de,He,te.width,te.height)}for(let te=0,ie=Ve.length;te<ie;te++)Me=Ve[te],qe?G&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,Ee,et,Me):t.texImage2D(s.TEXTURE_2D,te,He,Ee,et,Me);b.generateMipmaps=!1}else if(qe){if(Qe){const te=ke(ue);t.texStorage2D(s.TEXTURE_2D,de,He,te.width,te.height)}G&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee,et,ue)}else t.texImage2D(s.TEXTURE_2D,0,He,Ee,et,ue);g(b)&&m(ae),Re.__version=re.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function J(N,b,Y){if(b.image.length!==6)return;const ae=Be(N,b),ce=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+Y);const re=n.get(ce);if(ce.version!==re.__version||ae===!0){t.activeTexture(s.TEXTURE0+Y);const Re=mt.getPrimaries(mt.workingColorSpace),me=b.colorSpace===ui?null:mt.getPrimaries(b.colorSpace),oe=b.colorSpace===ui||Re===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const Ie=b.isCompressedTexture||b.image[0].isCompressedTexture,ue=b.image[0]&&b.image[0].isDataTexture,Ee=[];for(let ie=0;ie<6;ie++)!Ie&&!ue?Ee[ie]=v(b.image[ie],!0,i.maxCubemapSize):Ee[ie]=ue?b.image[ie].image:b.image[ie],Ee[ie]=Pe(b,Ee[ie]);const et=Ee[0],He=r.convert(b.format,b.colorSpace),Me=r.convert(b.type),Ve=A(b.internalFormat,He,Me,b.colorSpace),qe=b.isVideoTexture!==!0,Qe=re.__version===void 0||ae===!0,G=ce.dataReady;let de=w(b,et);pe(s.TEXTURE_CUBE_MAP,b);let te;if(Ie){qe&&Qe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,de,Ve,et.width,et.height);for(let ie=0;ie<6;ie++){te=Ee[ie].mipmaps;for(let ge=0;ge<te.length;ge++){const Ne=te[ge];b.format!==xn?He!==null?qe?G&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge,0,0,Ne.width,Ne.height,He,Ne.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge,Ve,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge,0,0,Ne.width,Ne.height,He,Me,Ne.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge,Ve,Ne.width,Ne.height,0,He,Me,Ne.data)}}}else{if(te=b.mipmaps,qe&&Qe){te.length>0&&de++;const ie=ke(Ee[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,de,Ve,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(ue){qe?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ee[ie].width,Ee[ie].height,He,Me,Ee[ie].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ve,Ee[ie].width,Ee[ie].height,0,He,Me,Ee[ie].data);for(let ge=0;ge<te.length;ge++){const Ze=te[ge].image[ie].image;qe?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge+1,0,0,Ze.width,Ze.height,He,Me,Ze.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge+1,Ve,Ze.width,Ze.height,0,He,Me,Ze.data)}}else{qe?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,He,Me,Ee[ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ve,He,Me,Ee[ie]);for(let ge=0;ge<te.length;ge++){const Ne=te[ge];qe?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge+1,0,0,He,Me,Ne.image[ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge+1,Ve,He,Me,Ne.image[ie])}}}g(b)&&m(s.TEXTURE_CUBE_MAP),re.__version=ce.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function le(N,b,Y,ae,ce,re){const Re=r.convert(Y.format,Y.colorSpace),me=r.convert(Y.type),oe=A(Y.internalFormat,Re,me,Y.colorSpace);if(!n.get(b).__hasExternalTextures){const ue=Math.max(1,b.width>>re),Ee=Math.max(1,b.height>>re);ce===s.TEXTURE_3D||ce===s.TEXTURE_2D_ARRAY?t.texImage3D(ce,re,oe,ue,Ee,b.depth,0,Re,me,null):t.texImage2D(ce,re,oe,ue,Ee,0,Re,me,null)}t.bindFramebuffer(s.FRAMEBUFFER,N),Se(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ae,ce,n.get(Y).__webglTexture,0,$e(b)):(ce===s.TEXTURE_2D||ce>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ae,ce,n.get(Y).__webglTexture,re),t.bindFramebuffer(s.FRAMEBUFFER,null)}function we(N,b,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,N),b.depthBuffer){const ae=b.depthTexture,ce=ae&&ae.isDepthTexture?ae.type:null,re=S(b.stencilBuffer,ce),Re=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=$e(b);Se(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,me,re,b.width,b.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,me,re,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,re,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Re,s.RENDERBUFFER,N)}else{const ae=b.textures;for(let ce=0;ce<ae.length;ce++){const re=ae[ce],Re=r.convert(re.format,re.colorSpace),me=r.convert(re.type),oe=A(re.internalFormat,Re,me,re.colorSpace),Ie=$e(b);Y&&Se(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ie,oe,b.width,b.height):Se(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ie,oe,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,oe,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ye(N,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),X(b.depthTexture,0);const ae=n.get(b.depthTexture).__webglTexture,ce=$e(b);if(b.depthTexture.format===Ms)Se(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ae,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ae,0);else if(b.depthTexture.format===Is)Se(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ae,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function We(N){const b=n.get(N),Y=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!b.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");ye(b.__webglFramebuffer,N)}else if(Y){b.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[ae]),b.__webglDepthbuffer[ae]=s.createRenderbuffer(),we(b.__webglDepthbuffer[ae],N,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=s.createRenderbuffer(),we(b.__webglDepthbuffer,N,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ye(N,b,Y){const ae=n.get(N);b!==void 0&&le(ae.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Y!==void 0&&We(N)}function je(N){const b=N.texture,Y=n.get(N),ae=n.get(b);N.addEventListener("dispose",I);const ce=N.textures,re=N.isWebGLCubeRenderTarget===!0,Re=ce.length>1;if(Re||(ae.__webglTexture===void 0&&(ae.__webglTexture=s.createTexture()),ae.__version=b.version,o.memory.textures++),re){Y.__webglFramebuffer=[];for(let me=0;me<6;me++)if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer[me]=[];for(let oe=0;oe<b.mipmaps.length;oe++)Y.__webglFramebuffer[me][oe]=s.createFramebuffer()}else Y.__webglFramebuffer[me]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer=[];for(let me=0;me<b.mipmaps.length;me++)Y.__webglFramebuffer[me]=s.createFramebuffer()}else Y.__webglFramebuffer=s.createFramebuffer();if(Re)for(let me=0,oe=ce.length;me<oe;me++){const Ie=n.get(ce[me]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=s.createTexture(),o.memory.textures++)}if(N.samples>0&&Se(N)===!1){Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let me=0;me<ce.length;me++){const oe=ce[me];Y.__webglColorRenderbuffer[me]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[me]);const Ie=r.convert(oe.format,oe.colorSpace),ue=r.convert(oe.type),Ee=A(oe.internalFormat,Ie,ue,oe.colorSpace,N.isXRRenderTarget===!0),et=$e(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,et,Ee,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,Y.__webglColorRenderbuffer[me])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),we(Y.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(re){t.bindTexture(s.TEXTURE_CUBE_MAP,ae.__webglTexture),pe(s.TEXTURE_CUBE_MAP,b);for(let me=0;me<6;me++)if(b.mipmaps&&b.mipmaps.length>0)for(let oe=0;oe<b.mipmaps.length;oe++)le(Y.__webglFramebuffer[me][oe],N,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me,oe);else le(Y.__webglFramebuffer[me],N,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);g(b)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let me=0,oe=ce.length;me<oe;me++){const Ie=ce[me],ue=n.get(Ie);t.bindTexture(s.TEXTURE_2D,ue.__webglTexture),pe(s.TEXTURE_2D,Ie),le(Y.__webglFramebuffer,N,Ie,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,0),g(Ie)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let me=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(me=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(me,ae.__webglTexture),pe(me,b),b.mipmaps&&b.mipmaps.length>0)for(let oe=0;oe<b.mipmaps.length;oe++)le(Y.__webglFramebuffer[oe],N,b,s.COLOR_ATTACHMENT0,me,oe);else le(Y.__webglFramebuffer,N,b,s.COLOR_ATTACHMENT0,me,0);g(b)&&m(me),t.unbindTexture()}N.depthBuffer&&We(N)}function ct(N){const b=N.textures;for(let Y=0,ae=b.length;Y<ae;Y++){const ce=b[Y];if(g(ce)){const re=N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Re=n.get(ce).__webglTexture;t.bindTexture(re,Re),m(re),t.unbindTexture()}}}const D=[],ve=[];function De(N){if(N.samples>0){if(Se(N)===!1){const b=N.textures,Y=N.width,ae=N.height;let ce=s.COLOR_BUFFER_BIT;const re=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=n.get(N),me=b.length>1;if(me)for(let oe=0;oe<b.length;oe++)t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let oe=0;oe<b.length;oe++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ce|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ce|=s.STENCIL_BUFFER_BIT)),me){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Re.__webglColorRenderbuffer[oe]);const Ie=n.get(b[oe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ie,0)}s.blitFramebuffer(0,0,Y,ae,0,0,Y,ae,ce,s.NEAREST),c===!0&&(D.length=0,ve.length=0,D.push(s.COLOR_ATTACHMENT0+oe),N.depthBuffer&&N.resolveDepthBuffer===!1&&(D.push(re),ve.push(re),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ve)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,D))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),me)for(let oe=0;oe<b.length;oe++){t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,Re.__webglColorRenderbuffer[oe]);const Ie=n.get(b[oe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.TEXTURE_2D,Ie,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&c){const b=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function $e(N){return Math.min(i.maxSamples,N.samples)}function Se(N){const b=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function at(N){const b=o.render.frame;u.get(N)!==b&&(u.set(N,b),N.update())}function Pe(N,b){const Y=N.colorSpace,ae=N.format,ce=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Y!==$t&&Y!==ui&&(mt.getTransfer(Y)===Mt?(ae!==xn||ce!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),b}function ke(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(l.width=N.naturalWidth||N.width,l.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(l.width=N.displayWidth,l.height=N.displayHeight):(l.width=N.width,l.height=N.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=C,this.setTexture2D=X,this.setTexture2DArray=K,this.setTexture3D=H,this.setTextureCube=L,this.rebindTextures=Ye,this.setupRenderTarget=je,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Se}function F_(s,e){function t(n,i=ui){let r;const o=mt.getTransfer(i);if(n===ei)return s.UNSIGNED_BYTE;if(n===jc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===qc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===vu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===gu)return s.BYTE;if(n===_u)return s.SHORT;if(n===cr)return s.UNSIGNED_SHORT;if(n===Xc)return s.INT;if(n===Fi)return s.UNSIGNED_INT;if(n===Cn)return s.FLOAT;if(n===vr)return s.HALF_FLOAT;if(n===xu)return s.ALPHA;if(n===yu)return s.RGB;if(n===xn)return s.RGBA;if(n===Mu)return s.LUMINANCE;if(n===Su)return s.LUMINANCE_ALPHA;if(n===Ms)return s.DEPTH_COMPONENT;if(n===Is)return s.DEPTH_STENCIL;if(n===Kc)return s.RED;if(n===Yc)return s.RED_INTEGER;if(n===Eu)return s.RG;if(n===Zc)return s.RG_INTEGER;if(n===Jc)return s.RGBA_INTEGER;if(n===fo||n===po||n===mo||n===go)if(o===Mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===go)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===tc||n===nc||n===ic||n===sc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===tc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ic)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rc||n===oc||n===ac)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===rc||n===oc)return o===Mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ac)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===lc||n===hc||n===uc||n===fc||n===dc||n===pc||n===mc||n===gc||n===_c||n===vc||n===xc||n===yc||n===Mc||n===Sc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===lc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===uc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===dc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_c)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_o||n===Ec||n===wc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===_o)return o===Mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ec)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wu||n===Ac||n===Tc||n===bc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===_o)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ac)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Tc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ps?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class B_ extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Wt extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const z_={type:"move"};class Ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),m=this._getHandJoint(l,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;l.inputState.pinching&&f>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(z_)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const k_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,H_=`
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

}`;class V_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Ut,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new In({vertexShader:k_,fragmentShader:H_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Et(new Mi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class G_ extends Fs{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,_=null;const v=new V_,g=t.getContextAttributes();let m=null,A=null;const S=[],w=[],U=new Xe;let I=null;const P=new Yt;P.layers.enable(1),P.viewport=new ut;const k=new Yt;k.layers.enable(2),k.viewport=new ut;const x=[P,k],E=new B_;E.layers.enable(1),E.layers.enable(2);let C=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let le=S[J];return le===void 0&&(le=new Ia,S[J]=le),le.getTargetRaySpace()},this.getControllerGrip=function(J){let le=S[J];return le===void 0&&(le=new Ia,S[J]=le),le.getGripSpace()},this.getHand=function(J){let le=S[J];return le===void 0&&(le=new Ia,S[J]=le),le.getHandSpace()};function B(J){const le=w.indexOf(J.inputSource);if(le===-1)return;const we=S[le];we!==void 0&&(we.update(J.inputSource,J.frame,l||o),we.dispatchEvent({type:J.type,data:J.inputSource}))}function X(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",K);for(let J=0;J<S.length;J++){const le=w[J];le!==null&&(w[J]=null,S[J].disconnect(le))}C=null,F=null,v.reset(),e.setRenderTarget(m),d=null,f=null,h=null,i=null,A=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",X),i.addEventListener("inputsourceschange",K),g.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(U),i.renderState.layers===void 0){const le={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,le),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),A=new xi(d.framebufferWidth,d.framebufferHeight,{format:xn,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let le=null,we=null,ye=null;g.depth&&(ye=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=g.stencil?Is:Ms,we=g.stencil?Ps:Fi);const We={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(We),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new xi(f.textureWidth,f.textureHeight,{format:xn,type:ei,depthTexture:new Fu(f.textureWidth,f.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Ke.setContext(i),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function K(J){for(let le=0;le<J.removed.length;le++){const we=J.removed[le],ye=w.indexOf(we);ye>=0&&(w[ye]=null,S[ye].disconnect(we))}for(let le=0;le<J.added.length;le++){const we=J.added[le];let ye=w.indexOf(we);if(ye===-1){for(let Ye=0;Ye<S.length;Ye++)if(Ye>=w.length){w.push(we),ye=Ye;break}else if(w[Ye]===null){w[Ye]=we,ye=Ye;break}if(ye===-1)break}const We=S[ye];We&&We.connect(we)}}const H=new O,L=new O;function $(J,le,we){H.setFromMatrixPosition(le.matrixWorld),L.setFromMatrixPosition(we.matrixWorld);const ye=H.distanceTo(L),We=le.projectionMatrix.elements,Ye=we.projectionMatrix.elements,je=We[14]/(We[10]-1),ct=We[14]/(We[10]+1),D=(We[9]+1)/We[5],ve=(We[9]-1)/We[5],De=(We[8]-1)/We[0],$e=(Ye[8]+1)/Ye[0],Se=je*De,at=je*$e,Pe=ye/(-De+$e),ke=Pe*-De;le.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ke),J.translateZ(Pe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const N=je+Pe,b=ct+Pe,Y=Se-ke,ae=at+(ye-ke),ce=D*ct/b*N,re=ve*ct/b*N;J.projectionMatrix.makePerspective(Y,ae,ce,re,N,b),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function ee(J,le){le===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(le.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;v.texture!==null&&(J.near=v.depthNear,J.far=v.depthFar),E.near=k.near=P.near=J.near,E.far=k.far=P.far=J.far,(C!==E.near||F!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),C=E.near,F=E.far,P.near=C,P.far=F,k.near=C,k.far=F,P.updateProjectionMatrix(),k.updateProjectionMatrix(),J.updateProjectionMatrix());const le=J.parent,we=E.cameras;ee(E,le);for(let ye=0;ye<we.length;ye++)ee(we[ye],le);we.length===2?$(E,P,k):E.projectionMatrix.copy(P.projectionMatrix),he(J,E,le)};function he(J,le,we){we===null?J.matrix.copy(le.matrixWorld):(J.matrix.copy(we.matrixWorld),J.matrix.invert(),J.matrix.multiply(le.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(le.projectionMatrix),J.projectionMatrixInverse.copy(le.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ls*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(J){c=J,f!==null&&(f.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(E)};let pe=null;function Be(J,le){if(u=le.getViewerPose(l||o),_=le,u!==null){const we=u.views;d!==null&&(e.setRenderTargetFramebuffer(A,d.framebuffer),e.setRenderTarget(A));let ye=!1;we.length!==E.cameras.length&&(E.cameras.length=0,ye=!0);for(let Ye=0;Ye<we.length;Ye++){const je=we[Ye];let ct=null;if(d!==null)ct=d.getViewport(je);else{const ve=h.getViewSubImage(f,je);ct=ve.viewport,Ye===0&&(e.setRenderTargetTextures(A,ve.colorTexture,f.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(A))}let D=x[Ye];D===void 0&&(D=new Yt,D.layers.enable(Ye),D.viewport=new ut,x[Ye]=D),D.matrix.fromArray(je.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(je.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(ct.x,ct.y,ct.width,ct.height),Ye===0&&(E.matrix.copy(D.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ye===!0&&E.cameras.push(D)}const We=i.enabledFeatures;if(We&&We.includes("depth-sensing")){const Ye=h.getDepthInformation(we[0]);Ye&&Ye.isValid&&Ye.texture&&v.init(e,Ye,i.renderState)}}for(let we=0;we<S.length;we++){const ye=w[we],We=S[we];ye!==null&&We!==void 0&&We.update(ye,le,l||o)}pe&&pe(J,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),_=null}const Ke=new Ou;Ke.setAnimationLoop(Be),this.setAnimationLoop=function(J){pe=J},this.dispose=function(){}}}const Ri=new Ct,W_=new be;function $_(s,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Du(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,A,S,w){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),h(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,w)):m.isMeshMatcapMaterial?(r(g,m),_(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,A,S):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===sn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===sn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const A=e.get(m),S=A.envMap,w=A.envMapRotation;S&&(g.envMap.value=S,Ri.copy(w),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),g.envMapRotation.value.setFromMatrix4(W_.makeRotationFromEuler(Ri)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,A,S){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*A,g.scale.value=S*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,A){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===sn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=A.texture,g.transmissionSamplerSize.value.set(A.width,A.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){const A=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(A.matrixWorld),g.nearDistance.value=A.shadow.camera.near,g.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function X_(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,S){const w=S.program;n.uniformBlockBinding(A,w)}function l(A,S){let w=i[A.id];w===void 0&&(_(A),w=u(A),i[A.id]=w,A.addEventListener("dispose",g));const U=S.program;n.updateUBOMapping(A,U);const I=e.render.frame;r[A.id]!==I&&(f(A),r[A.id]=I)}function u(A){const S=h();A.__bindingPointIndex=S;const w=s.createBuffer(),U=A.__size,I=A.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,U,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,w),w}function h(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const S=i[A.id],w=A.uniforms,U=A.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let I=0,P=w.length;I<P;I++){const k=Array.isArray(w[I])?w[I]:[w[I]];for(let x=0,E=k.length;x<E;x++){const C=k[x];if(d(C,I,x,U)===!0){const F=C.__offset,B=Array.isArray(C.value)?C.value:[C.value];let X=0;for(let K=0;K<B.length;K++){const H=B[K],L=v(H);typeof H=="number"||typeof H=="boolean"?(C.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,F+X,C.__data)):H.isMatrix3?(C.__data[0]=H.elements[0],C.__data[1]=H.elements[1],C.__data[2]=H.elements[2],C.__data[3]=0,C.__data[4]=H.elements[3],C.__data[5]=H.elements[4],C.__data[6]=H.elements[5],C.__data[7]=0,C.__data[8]=H.elements[6],C.__data[9]=H.elements[7],C.__data[10]=H.elements[8],C.__data[11]=0):(H.toArray(C.__data,X),X+=L.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(A,S,w,U){const I=A.value,P=S+"_"+w;if(U[P]===void 0)return typeof I=="number"||typeof I=="boolean"?U[P]=I:U[P]=I.clone(),!0;{const k=U[P];if(typeof I=="number"||typeof I=="boolean"){if(k!==I)return U[P]=I,!0}else if(k.equals(I)===!1)return k.copy(I),!0}return!1}function _(A){const S=A.uniforms;let w=0;const U=16;for(let P=0,k=S.length;P<k;P++){const x=Array.isArray(S[P])?S[P]:[S[P]];for(let E=0,C=x.length;E<C;E++){const F=x[E],B=Array.isArray(F.value)?F.value:[F.value];for(let X=0,K=B.length;X<K;X++){const H=B[X],L=v(H),$=w%U;$!==0&&U-$<L.boundary&&(w+=U-$),F.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=w,w+=L.storage}}}const I=w%U;return I>0&&(w+=U-I),A.__size=w,A.__cache={},this}function v(A){const S={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(S.boundary=4,S.storage=4):A.isVector2?(S.boundary=8,S.storage=8):A.isVector3||A.isColor?(S.boundary=16,S.storage=12):A.isVector4?(S.boundary=16,S.storage=16):A.isMatrix3?(S.boundary=48,S.storage=48):A.isMatrix4?(S.boundary=64,S.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),S}function g(A){const S=A.target;S.removeEventListener("dispose",g);const w=o.indexOf(S.__bindingPointIndex);o.splice(w,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function m(){for(const A in i)s.deleteBuffer(i[A]);o=[],i={},r={}}return{bind:c,update:l,dispose:m}}class j_{constructor(e={}){const{canvas:t=Bd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),_=new Int32Array(4);let v=null,g=null;const m=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xt,this.toneMapping=gi,this.toneMappingExposure=1;const S=this;let w=!1,U=0,I=0,P=null,k=-1,x=null;const E=new ut,C=new ut;let F=null;const B=new xe(0);let X=0,K=t.width,H=t.height,L=1,$=null,ee=null;const he=new ut(0,0,K,H),pe=new ut(0,0,K,H);let Be=!1;const Ke=new il;let J=!1,le=!1;const we=new be,ye=new O,We=new ut,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function ct(){return P===null?L:1}let D=n;function ve(T,z){return t.getContext(T,z)}try{const T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$c}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",ie,!1),t.addEventListener("webglcontextcreationerror",ge,!1),D===null){const z="webgl2";if(D=ve(z,T),D===null)throw ve(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let De,$e,Se,at,Pe,ke,N,b,Y,ae,ce,re,Re,me,oe,Ie,ue,Ee,et,He,Me,Ve,qe,Qe;function G(){De=new e0(D),De.init(),Ve=new F_(D,De),$e=new qg(D,De,e,Ve),Se=new U_(D),at=new i0(D),Pe=new y_,ke=new O_(D,De,Se,Pe,$e,Ve,at),N=new Yg(S),b=new Qg(S),Y=new hp(D),qe=new Xg(D,Y),ae=new t0(D,Y,at,qe),ce=new r0(D,ae,Y,at),et=new s0(D,$e,ke),Ie=new Kg(Pe),re=new x_(S,N,b,De,$e,qe,Ie),Re=new $_(S,Pe),me=new S_,oe=new R_(De),Ee=new $g(S,N,b,Se,ce,f,c),ue=new D_(S,ce,$e),Qe=new X_(D,at,$e,Se),He=new jg(D,De,at),Me=new n0(D,De,at),at.programs=re.programs,S.capabilities=$e,S.extensions=De,S.properties=Pe,S.renderLists=me,S.shadowMap=ue,S.state=Se,S.info=at}G();const de=new G_(S,D);this.xr=de,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=De.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=De.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(T){T!==void 0&&(L=T,this.setSize(K,H,!1))},this.getSize=function(T){return T.set(K,H)},this.setSize=function(T,z,q=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=T,H=z,t.width=Math.floor(T*L),t.height=Math.floor(z*L),q===!0&&(t.style.width=T+"px",t.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(K*L,H*L).floor()},this.setDrawingBufferSize=function(T,z,q){K=T,H=z,L=q,t.width=Math.floor(T*q),t.height=Math.floor(z*q),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(he)},this.setViewport=function(T,z,q,W){T.isVector4?he.set(T.x,T.y,T.z,T.w):he.set(T,z,q,W),Se.viewport(E.copy(he).multiplyScalar(L).round())},this.getScissor=function(T){return T.copy(pe)},this.setScissor=function(T,z,q,W){T.isVector4?pe.set(T.x,T.y,T.z,T.w):pe.set(T,z,q,W),Se.scissor(C.copy(pe).multiplyScalar(L).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(T){Se.setScissorTest(Be=T)},this.setOpaqueSort=function(T){$=T},this.setTransparentSort=function(T){ee=T},this.getClearColor=function(T){return T.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(T=!0,z=!0,q=!0){let W=0;if(T){let V=!1;if(P!==null){const Q=P.texture.format;V=Q===Jc||Q===Zc||Q===Yc}if(V){const Q=P.texture.type,se=Q===ei||Q===Fi||Q===cr||Q===Ps||Q===jc||Q===qc,Z=Ee.getClearColor(),fe=Ee.getClearAlpha(),Oe=Z.r,Ce=Z.g,_e=Z.b;se?(d[0]=Oe,d[1]=Ce,d[2]=_e,d[3]=fe,D.clearBufferuiv(D.COLOR,0,d)):(_[0]=Oe,_[1]=Ce,_[2]=_e,_[3]=fe,D.clearBufferiv(D.COLOR,0,_))}else W|=D.COLOR_BUFFER_BIT}z&&(W|=D.DEPTH_BUFFER_BIT),q&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",ie,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),me.dispose(),oe.dispose(),Pe.dispose(),N.dispose(),b.dispose(),ce.dispose(),qe.dispose(),Qe.dispose(),re.dispose(),de.dispose(),de.removeEventListener("sessionstart",fn),de.removeEventListener("sessionend",Dn),yn.stop()};function te(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ie(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const T=at.autoReset,z=ue.enabled,q=ue.autoUpdate,W=ue.needsUpdate,V=ue.type;G(),at.autoReset=T,ue.enabled=z,ue.autoUpdate=q,ue.needsUpdate=W,ue.type=V}function ge(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ne(T){const z=T.target;z.removeEventListener("dispose",Ne),Ze(z)}function Ze(T){ft(T),Pe.remove(T)}function ft(T){const z=Pe.get(T).programs;z!==void 0&&(z.forEach(function(q){re.releaseProgram(q)}),T.isShaderMaterial&&re.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,q,W,V,Q){z===null&&(z=Ye);const se=V.isMesh&&V.matrixWorld.determinant()<0,Z=ze(T,z,q,W,V);Se.setMaterial(W,se);let fe=q.index,Oe=1;if(W.wireframe===!0){if(fe=ae.getWireframeAttribute(q),fe===void 0)return;Oe=2}const Ce=q.drawRange,_e=q.attributes.position;let Le=Ce.start*Oe,dt=(Ce.start+Ce.count)*Oe;Q!==null&&(Le=Math.max(Le,Q.start*Oe),dt=Math.min(dt,(Q.start+Q.count)*Oe)),fe!==null?(Le=Math.max(Le,0),dt=Math.min(dt,fe.count)):_e!=null&&(Le=Math.max(Le,0),dt=Math.min(dt,_e.count));const pt=dt-Le;if(pt<0||pt===1/0)return;qe.setup(V,W,Z,q,fe);let yt,Je=He;if(fe!==null&&(yt=Y.get(fe),Je=Me,Je.setIndex(yt)),V.isMesh)W.wireframe===!0?(Se.setLineWidth(W.wireframeLinewidth*ct()),Je.setMode(D.LINES)):Je.setMode(D.TRIANGLES);else if(V.isLine){let Ae=W.linewidth;Ae===void 0&&(Ae=1),Se.setLineWidth(Ae*ct()),V.isLineSegments?Je.setMode(D.LINES):V.isLineLoop?Je.setMode(D.LINE_LOOP):Je.setMode(D.LINE_STRIP)}else V.isPoints?Je.setMode(D.POINTS):V.isSprite&&Je.setMode(D.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Je.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(De.get("WEBGL_multi_draw"))Je.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ae=V._multiDrawStarts,Rt=V._multiDrawCounts,nt=V._multiDrawCount,Jt=fe?Y.get(fe).bytesPerElement:1,Qt=Pe.get(W).currentProgram.getUniforms();for(let zt=0;zt<nt;zt++)Qt.setValue(D,"_gl_DrawID",zt),Je.render(Ae[zt]/Jt,Rt[zt])}else if(V.isInstancedMesh)Je.renderInstances(Le,pt,V.count);else if(q.isInstancedBufferGeometry){const Ae=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Rt=Math.min(q.instanceCount,Ae);Je.renderInstances(Le,pt,Rt)}else Je.render(Le,pt)};function Ot(T,z,q){T.transparent===!0&&T.side===hn&&T.forceSinglePass===!1?(T.side=sn,T.needsUpdate=!0,R(T,z,q),T.side=Qn,T.needsUpdate=!0,R(T,z,q),T.side=hn):R(T,z,q)}this.compile=function(T,z,q=null){q===null&&(q=T),g=oe.get(q),g.init(z),A.push(g),q.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(g.pushLight(V),V.castShadow&&g.pushShadow(V))}),T!==q&&T.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(g.pushLight(V),V.castShadow&&g.pushShadow(V))}),g.setupLights();const W=new Set;return T.traverse(function(V){const Q=V.material;if(Q)if(Array.isArray(Q))for(let se=0;se<Q.length;se++){const Z=Q[se];Ot(Z,q,V),W.add(Z)}else Ot(Q,q,V),W.add(Q)}),A.pop(),g=null,W},this.compileAsync=function(T,z,q=null){const W=this.compile(T,z,q);return new Promise(V=>{function Q(){if(W.forEach(function(se){Pe.get(se).currentProgram.isReady()&&W.delete(se)}),W.size===0){V(T);return}setTimeout(Q,10)}De.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let ht=null;function bt(T){ht&&ht(T)}function fn(){yn.stop()}function Dn(){yn.start()}const yn=new Ou;yn.setAnimationLoop(bt),typeof self<"u"&&yn.setContext(self),this.setAnimationLoop=function(T){ht=T,de.setAnimationLoop(T),T===null?yn.stop():yn.start()},de.addEventListener("sessionstart",fn),de.addEventListener("sessionend",Dn),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(z),z=de.getCamera()),T.isScene===!0&&T.onBeforeRender(S,T,z,P),g=oe.get(T,A.length),g.init(z),A.push(g),we.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Ke.setFromProjectionMatrix(we),le=this.localClippingEnabled,J=Ie.init(this.clippingPlanes,le),v=me.get(T,m.length),v.init(),m.push(v),de.enabled===!0&&de.isPresenting===!0){const Q=S.xr.getDepthSensingMesh();Q!==null&&Si(Q,z,-1/0,S.sortObjects)}Si(T,z,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort($,ee),je=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,je&&Ee.addToRenderList(v,T),this.info.render.frame++,J===!0&&Ie.beginShadows();const q=g.state.shadowsArray;ue.render(q,T,z),J===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=v.opaque,V=v.transmissive;if(g.setupLights(),z.isArrayCamera){const Q=z.cameras;if(V.length>0)for(let se=0,Z=Q.length;se<Z;se++){const fe=Q[se];y(W,V,T,fe)}je&&Ee.render(T);for(let se=0,Z=Q.length;se<Z;se++){const fe=Q[se];Ar(v,T,fe,fe.viewport)}}else V.length>0&&y(W,V,T,z),je&&Ee.render(T),Ar(v,T,z);P!==null&&(ke.updateMultisampleRenderTarget(P),ke.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(S,T,z),qe.resetDefaultState(),k=-1,x=null,A.pop(),A.length>0?(g=A[A.length-1],J===!0&&Ie.setGlobalState(S.clippingPlanes,g.state.camera)):g=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function Si(T,z,q,W){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ke.intersectsSprite(T)){W&&We.setFromMatrixPosition(T.matrixWorld).applyMatrix4(we);const se=ce.update(T),Z=T.material;Z.visible&&v.push(T,se,Z,q,We.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ke.intersectsObject(T))){const se=ce.update(T),Z=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),We.copy(T.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),We.copy(se.boundingSphere.center)),We.applyMatrix4(T.matrixWorld).applyMatrix4(we)),Array.isArray(Z)){const fe=se.groups;for(let Oe=0,Ce=fe.length;Oe<Ce;Oe++){const _e=fe[Oe],Le=Z[_e.materialIndex];Le&&Le.visible&&v.push(T,se,Le,q,We.z,_e)}}else Z.visible&&v.push(T,se,Z,q,We.z,null)}}const Q=T.children;for(let se=0,Z=Q.length;se<Z;se++)Si(Q[se],z,q,W)}function Ar(T,z,q,W){const V=T.opaque,Q=T.transmissive,se=T.transparent;g.setupLightsView(q),J===!0&&Ie.setGlobalState(S.clippingPlanes,q),W&&Se.viewport(E.copy(W)),V.length>0&&p(V,z,q),Q.length>0&&p(Q,z,q),se.length>0&&p(se,z,q),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function y(T,z,q,W){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[W.id]===void 0&&(g.state.transmissionRenderTarget[W.id]=new xi(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float")?vr:ei,minFilter:Zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace}));const Q=g.state.transmissionRenderTarget[W.id],se=W.viewport||E;Q.setSize(se.z,se.w);const Z=S.getRenderTarget();S.setRenderTarget(Q),S.getClearColor(B),X=S.getClearAlpha(),X<1&&S.setClearColor(16777215,.5),je?Ee.render(q):S.clear();const fe=S.toneMapping;S.toneMapping=gi;const Oe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),g.setupLightsView(W),J===!0&&Ie.setGlobalState(S.clippingPlanes,W),p(T,q,W),ke.updateMultisampleRenderTarget(Q),ke.updateRenderTargetMipmap(Q),De.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let _e=0,Le=z.length;_e<Le;_e++){const dt=z[_e],pt=dt.object,yt=dt.geometry,Je=dt.material,Ae=dt.group;if(Je.side===hn&&pt.layers.test(W.layers)){const Rt=Je.side;Je.side=sn,Je.needsUpdate=!0,M(pt,q,W,yt,Je,Ae),Je.side=Rt,Je.needsUpdate=!0,Ce=!0}}Ce===!0&&(ke.updateMultisampleRenderTarget(Q),ke.updateRenderTargetMipmap(Q))}S.setRenderTarget(Z),S.setClearColor(B,X),Oe!==void 0&&(W.viewport=Oe),S.toneMapping=fe}function p(T,z,q){const W=z.isScene===!0?z.overrideMaterial:null;for(let V=0,Q=T.length;V<Q;V++){const se=T[V],Z=se.object,fe=se.geometry,Oe=W===null?se.material:W,Ce=se.group;Z.layers.test(q.layers)&&M(Z,z,q,fe,Oe,Ce)}}function M(T,z,q,W,V,Q){T.onBeforeRender(S,z,q,W,V,Q),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.transparent===!0&&V.side===hn&&V.forceSinglePass===!1?(V.side=sn,V.needsUpdate=!0,S.renderBufferDirect(q,z,W,V,T,Q),V.side=Qn,V.needsUpdate=!0,S.renderBufferDirect(q,z,W,V,T,Q),V.side=hn):S.renderBufferDirect(q,z,W,V,T,Q),T.onAfterRender(S,z,q,W,V,Q)}function R(T,z,q){z.isScene!==!0&&(z=Ye);const W=Pe.get(T),V=g.state.lights,Q=g.state.shadowsArray,se=V.state.version,Z=re.getParameters(T,V.state,Q,z,q),fe=re.getProgramCacheKey(Z);let Oe=W.programs;W.environment=T.isMeshStandardMaterial?z.environment:null,W.fog=z.fog,W.envMap=(T.isMeshStandardMaterial?b:N).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,Oe===void 0&&(T.addEventListener("dispose",Ne),Oe=new Map,W.programs=Oe);let Ce=Oe.get(fe);if(Ce!==void 0){if(W.currentProgram===Ce&&W.lightsStateVersion===se)return ne(T,Z),Ce}else Z.uniforms=re.getUniforms(T),T.onBeforeCompile(Z,S),Ce=re.acquireProgram(Z,fe),Oe.set(fe,Ce),W.uniforms=Z.uniforms;const _e=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(_e.clippingPlanes=Ie.uniform),ne(T,Z),W.needsLights=rt(T),W.lightsStateVersion=se,W.needsLights&&(_e.ambientLightColor.value=V.state.ambient,_e.lightProbe.value=V.state.probe,_e.directionalLights.value=V.state.directional,_e.directionalLightShadows.value=V.state.directionalShadow,_e.spotLights.value=V.state.spot,_e.spotLightShadows.value=V.state.spotShadow,_e.rectAreaLights.value=V.state.rectArea,_e.ltc_1.value=V.state.rectAreaLTC1,_e.ltc_2.value=V.state.rectAreaLTC2,_e.pointLights.value=V.state.point,_e.pointLightShadows.value=V.state.pointShadow,_e.hemisphereLights.value=V.state.hemi,_e.directionalShadowMap.value=V.state.directionalShadowMap,_e.directionalShadowMatrix.value=V.state.directionalShadowMatrix,_e.spotShadowMap.value=V.state.spotShadowMap,_e.spotLightMatrix.value=V.state.spotLightMatrix,_e.spotLightMap.value=V.state.spotLightMap,_e.pointShadowMap.value=V.state.pointShadowMap,_e.pointShadowMatrix.value=V.state.pointShadowMatrix),W.currentProgram=Ce,W.uniformsList=null,Ce}function j(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=vo.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function ne(T,z){const q=Pe.get(T);q.outputColorSpace=z.outputColorSpace,q.batching=z.batching,q.batchingColor=z.batchingColor,q.instancing=z.instancing,q.instancingColor=z.instancingColor,q.instancingMorph=z.instancingMorph,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}function ze(T,z,q,W,V){z.isScene!==!0&&(z=Ye),ke.resetTextureUnits();const Q=z.fog,se=W.isMeshStandardMaterial?z.environment:null,Z=P===null?S.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:$t,fe=(W.isMeshStandardMaterial?b:N).get(W.envMap||se),Oe=W.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ce=!!q.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),_e=!!q.morphAttributes.position,Le=!!q.morphAttributes.normal,dt=!!q.morphAttributes.color;let pt=gi;W.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(pt=S.toneMapping);const yt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Je=yt!==void 0?yt.length:0,Ae=Pe.get(W),Rt=g.state.lights;if(J===!0&&(le===!0||T!==x)){const dn=T===x&&W.id===k;Ie.setState(W,T,dn)}let nt=!1;W.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Rt.state.version||Ae.outputColorSpace!==Z||V.isBatchedMesh&&Ae.batching===!1||!V.isBatchedMesh&&Ae.batching===!0||V.isBatchedMesh&&Ae.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ae.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ae.instancing===!1||!V.isInstancedMesh&&Ae.instancing===!0||V.isSkinnedMesh&&Ae.skinning===!1||!V.isSkinnedMesh&&Ae.skinning===!0||V.isInstancedMesh&&Ae.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ae.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ae.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ae.instancingMorph===!1&&V.morphTexture!==null||Ae.envMap!==fe||W.fog===!0&&Ae.fog!==Q||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==Ie.numPlanes||Ae.numIntersection!==Ie.numIntersection)||Ae.vertexAlphas!==Oe||Ae.vertexTangents!==Ce||Ae.morphTargets!==_e||Ae.morphNormals!==Le||Ae.morphColors!==dt||Ae.toneMapping!==pt||Ae.morphTargetsCount!==Je)&&(nt=!0):(nt=!0,Ae.__version=W.version);let Jt=Ae.currentProgram;nt===!0&&(Jt=R(W,z,V));let Qt=!1,zt=!1,ia=!1;const Lt=Jt.getUniforms(),ti=Ae.uniforms;if(Se.useProgram(Jt.program)&&(Qt=!0,zt=!0,ia=!0),W.id!==k&&(k=W.id,zt=!0),Qt||x!==T){Lt.setValue(D,"projectionMatrix",T.projectionMatrix),Lt.setValue(D,"viewMatrix",T.matrixWorldInverse);const dn=Lt.map.cameraPosition;dn!==void 0&&dn.setValue(D,ye.setFromMatrixPosition(T.matrixWorld)),$e.logarithmicDepthBuffer&&Lt.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Lt.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),x!==T&&(x=T,zt=!0,ia=!0)}if(V.isSkinnedMesh){Lt.setOptional(D,V,"bindMatrix"),Lt.setOptional(D,V,"bindMatrixInverse");const dn=V.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Lt.setValue(D,"boneTexture",dn.boneTexture,ke))}V.isBatchedMesh&&(Lt.setOptional(D,V,"batchingTexture"),Lt.setValue(D,"batchingTexture",V._matricesTexture,ke),Lt.setOptional(D,V,"batchingIdTexture"),Lt.setValue(D,"batchingIdTexture",V._indirectTexture,ke),Lt.setOptional(D,V,"batchingColorTexture"),V._colorsTexture!==null&&Lt.setValue(D,"batchingColorTexture",V._colorsTexture,ke));const sa=q.morphAttributes;if((sa.position!==void 0||sa.normal!==void 0||sa.color!==void 0)&&et.update(V,q,Jt),(zt||Ae.receiveShadow!==V.receiveShadow)&&(Ae.receiveShadow=V.receiveShadow,Lt.setValue(D,"receiveShadow",V.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ti.envMap.value=fe,ti.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&z.environment!==null&&(ti.envMapIntensity.value=z.environmentIntensity),zt&&(Lt.setValue(D,"toneMappingExposure",S.toneMappingExposure),Ae.needsLights&&Ue(ti,ia),Q&&W.fog===!0&&Re.refreshFogUniforms(ti,Q),Re.refreshMaterialUniforms(ti,W,L,H,g.state.transmissionRenderTarget[T.id]),vo.upload(D,j(Ae),ti,ke)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(vo.upload(D,j(Ae),ti,ke),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Lt.setValue(D,"center",V.center),Lt.setValue(D,"modelViewMatrix",V.modelViewMatrix),Lt.setValue(D,"normalMatrix",V.normalMatrix),Lt.setValue(D,"modelMatrix",V.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const dn=W.uniformsGroups;for(let ra=0,Af=dn.length;ra<Af;ra++){const vl=dn[ra];Qe.update(vl,Jt),Qe.bind(vl,Jt)}}return Jt}function Ue(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function rt(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,z,q){Pe.get(T.texture).__webglTexture=z,Pe.get(T.depthTexture).__webglTexture=q;const W=Pe.get(T);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=q===void 0,W.__autoAllocateDepthBuffer||De.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,z){const q=Pe.get(T);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,q=0){P=T,U=z,I=q;let W=!0,V=null,Q=!1,se=!1;if(T){const fe=Pe.get(T);fe.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(D.FRAMEBUFFER,null),W=!1):fe.__webglFramebuffer===void 0?ke.setupRenderTarget(T):fe.__hasExternalTextures&&ke.rebindTextures(T,Pe.get(T.texture).__webglTexture,Pe.get(T.depthTexture).__webglTexture);const Oe=T.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(se=!0);const Ce=Pe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ce[z])?V=Ce[z][q]:V=Ce[z],Q=!0):T.samples>0&&ke.useMultisampledRTT(T)===!1?V=Pe.get(T).__webglMultisampledFramebuffer:Array.isArray(Ce)?V=Ce[q]:V=Ce,E.copy(T.viewport),C.copy(T.scissor),F=T.scissorTest}else E.copy(he).multiplyScalar(L).floor(),C.copy(pe).multiplyScalar(L).floor(),F=Be;if(Se.bindFramebuffer(D.FRAMEBUFFER,V)&&W&&Se.drawBuffers(T,V),Se.viewport(E),Se.scissor(C),Se.setScissorTest(F),Q){const fe=Pe.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,fe.__webglTexture,q)}else if(se){const fe=Pe.get(T.texture),Oe=z||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,fe.__webglTexture,q||0,Oe)}k=-1},this.readRenderTargetPixels=function(T,z,q,W,V,Q,se){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Z=Pe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&se!==void 0&&(Z=Z[se]),Z){Se.bindFramebuffer(D.FRAMEBUFFER,Z);try{const fe=T.texture,Oe=fe.format,Ce=fe.type;if(!$e.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-W&&q>=0&&q<=T.height-V&&D.readPixels(z,q,W,V,Ve.convert(Oe),Ve.convert(Ce),Q)}finally{const fe=P!==null?Pe.get(P).__webglFramebuffer:null;Se.bindFramebuffer(D.FRAMEBUFFER,fe)}}},this.readRenderTargetPixelsAsync=async function(T,z,q,W,V,Q,se){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Z=Pe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&se!==void 0&&(Z=Z[se]),Z){Se.bindFramebuffer(D.FRAMEBUFFER,Z);try{const fe=T.texture,Oe=fe.format,Ce=fe.type;if(!$e.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=T.width-W&&q>=0&&q<=T.height-V){const _e=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,_e),D.bufferData(D.PIXEL_PACK_BUFFER,Q.byteLength,D.STREAM_READ),D.readPixels(z,q,W,V,Ve.convert(Oe),Ve.convert(Ce),0),D.flush();const Le=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await zd(D,Le,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,_e),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Q)}finally{D.deleteBuffer(_e),D.deleteSync(Le)}return Q}}finally{const fe=P!==null?Pe.get(P).__webglFramebuffer:null;Se.bindFramebuffer(D.FRAMEBUFFER,fe)}}},this.copyFramebufferToTexture=function(T,z=null,q=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,T=arguments[1]);const W=Math.pow(2,-q),V=Math.floor(T.image.width*W),Q=Math.floor(T.image.height*W),se=z!==null?z.x:0,Z=z!==null?z.y:0;ke.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,se,Z,V,Q),Se.unbindTexture()},this.copyTextureToTexture=function(T,z,q=null,W=null,V=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,T=arguments[1],z=arguments[2],V=arguments[3]||0,q=null);let Q,se,Z,fe,Oe,Ce;q!==null?(Q=q.max.x-q.min.x,se=q.max.y-q.min.y,Z=q.min.x,fe=q.min.y):(Q=T.image.width,se=T.image.height,Z=0,fe=0),W!==null?(Oe=W.x,Ce=W.y):(Oe=0,Ce=0);const _e=Ve.convert(z.format),Le=Ve.convert(z.type);ke.setTexture2D(z,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);const dt=D.getParameter(D.UNPACK_ROW_LENGTH),pt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),yt=D.getParameter(D.UNPACK_SKIP_PIXELS),Je=D.getParameter(D.UNPACK_SKIP_ROWS),Ae=D.getParameter(D.UNPACK_SKIP_IMAGES),Rt=T.isCompressedTexture?T.mipmaps[V]:T.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Rt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Rt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Z),D.pixelStorei(D.UNPACK_SKIP_ROWS,fe),T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,V,Oe,Ce,Q,se,_e,Le,Rt.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,V,Oe,Ce,Rt.width,Rt.height,_e,Rt.data):D.texSubImage2D(D.TEXTURE_2D,V,Oe,Ce,Q,se,_e,Le,Rt),D.pixelStorei(D.UNPACK_ROW_LENGTH,dt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,yt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Je),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ae),V===0&&z.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(T,z,q=null,W=null,V=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,W=arguments[1]||null,T=arguments[2],z=arguments[3],V=arguments[4]||0);let Q,se,Z,fe,Oe,Ce,_e,Le,dt;const pt=T.isCompressedTexture?T.mipmaps[V]:T.image;q!==null?(Q=q.max.x-q.min.x,se=q.max.y-q.min.y,Z=q.max.z-q.min.z,fe=q.min.x,Oe=q.min.y,Ce=q.min.z):(Q=pt.width,se=pt.height,Z=pt.depth,fe=0,Oe=0,Ce=0),W!==null?(_e=W.x,Le=W.y,dt=W.z):(_e=0,Le=0,dt=0);const yt=Ve.convert(z.format),Je=Ve.convert(z.type);let Ae;if(z.isData3DTexture)ke.setTexture3D(z,0),Ae=D.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)ke.setTexture2DArray(z,0),Ae=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);const Rt=D.getParameter(D.UNPACK_ROW_LENGTH),nt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Jt=D.getParameter(D.UNPACK_SKIP_PIXELS),Qt=D.getParameter(D.UNPACK_SKIP_ROWS),zt=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,pt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,fe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Oe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ce),T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Ae,V,_e,Le,dt,Q,se,Z,yt,Je,pt.data):z.isCompressedArrayTexture?D.compressedTexSubImage3D(Ae,V,_e,Le,dt,Q,se,Z,yt,pt.data):D.texSubImage3D(Ae,V,_e,Le,dt,Q,se,Z,yt,Je,pt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Rt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,nt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Jt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Qt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,zt),V===0&&z.generateMipmaps&&D.generateMipmap(Ae),Se.unbindTexture()},this.initRenderTarget=function(T){Pe.get(T).__webglFramebuffer===void 0&&ke.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ke.setTextureCube(T,0):T.isData3DTexture?ke.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ke.setTexture2DArray(T,0):ke.setTexture2D(T,0),Se.unbindTexture()},this.resetState=function(){U=0,I=0,P=null,Se.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Qc?"display-p3":"srgb",t.unpackColorSpace=mt.workingColorSpace===zo?"display-p3":"srgb"}}class rl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new xe(e),this.near=t,this.far=n}clone(){return new rl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Vu extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ct,this.environmentIntensity=1,this.environmentRotation=new Ct,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Gu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Cc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return tl("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const en=new O;class fr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=bn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new fr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class dr extends rn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let os;const Xs=new O,as=new O,cs=new O,ls=new Xe,js=new Xe,Wu=new be,jr=new O,qs=new O,qr=new O,xh=new Xe,La=new Xe,yh=new Xe;class Co extends vt{constructor(e=new dr){if(super(),this.isSprite=!0,this.type="Sprite",os===void 0){os=new Pt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Gu(t,5);os.setIndex([0,1,2,0,2,3]),os.setAttribute("position",new fr(n,3,0,!1)),os.setAttribute("uv",new fr(n,2,3,!1))}this.geometry=os,this.material=e,this.center=new Xe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),as.setFromMatrixScale(this.matrixWorld),Wu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),cs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&as.multiplyScalar(-cs.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Kr(jr.set(-.5,-.5,0),cs,o,as,i,r),Kr(qs.set(.5,-.5,0),cs,o,as,i,r),Kr(qr.set(.5,.5,0),cs,o,as,i,r),xh.set(0,0),La.set(1,0),yh.set(1,1);let a=e.ray.intersectTriangle(jr,qs,qr,!1,Xs);if(a===null&&(Kr(qs.set(-.5,.5,0),cs,o,as,i,r),La.set(0,1),a=e.ray.intersectTriangle(jr,qr,qs,!1,Xs),a===null))return;const c=e.ray.origin.distanceTo(Xs);c<e.near||c>e.far||t.push({distance:c,point:Xs.clone(),uv:Rn.getInterpolation(Xs,jr,qs,qr,xh,La,yh,new Xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Kr(s,e,t,n,i,r){ls.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(js.x=r*ls.x-i*ls.y,js.y=i*ls.x+r*ls.y):js.copy(ls),s.copy(e),s.x+=js.x,s.y+=js.y,s.applyMatrix4(Wu)}const Mh=new O,Sh=new ut,Eh=new ut,q_=new O,wh=new be,Yr=new O,Da=new zn,Ah=new be,Ua=new ko;class $u extends Et{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Sl,this.bindMatrix=new be,this.bindMatrixInverse=new be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new on),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Yr),this.boundingBox.expandByPoint(Yr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new zn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Yr),this.boundingSphere.expandByPoint(Yr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Da.copy(this.boundingSphere),Da.applyMatrix4(i),e.ray.intersectsSphere(Da)!==!1&&(Ah.copy(i).invert(),Ua.copy(e.ray).applyMatrix4(Ah),!(this.boundingBox!==null&&Ua.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ua)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ut,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Sl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ld?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Sh.fromBufferAttribute(i.attributes.skinIndex,e),Eh.fromBufferAttribute(i.attributes.skinWeight,e),Mh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Eh.getComponent(r);if(o!==0){const a=Sh.getComponent(r);wh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(q_.copy(Mh).applyMatrix4(wh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Po extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Xu extends Ut{constructor(e=null,t=1,n=1,i,r,o,a,c,l=Vt,u=Vt,h,f){super(null,o,a,c,l,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Th=new be,K_=new be;class Vo{constructor(e=[],t=[]){this.uuid=Pn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new be;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:K_;Th.multiplyMatrices(a,t[r]),Th.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Vo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Xu(t,e,e,xn,Cn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Po),this.bones.push(o),this.boneInverses.push(new be().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Ic extends Nt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const hs=new be,bh=new be,Zr=[],Rh=new on,Y_=new be,Ks=new Et,Ys=new zn;class ir extends Et{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ic(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Y_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new on),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hs),Rh.copy(e.boundingBox).applyMatrix4(hs),this.boundingBox.union(Rh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hs),Ys.copy(e.boundingSphere).applyMatrix4(hs),this.boundingSphere.union(Ys)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ks.geometry=this.geometry,Ks.material=this.material,Ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ys.copy(this.boundingSphere),Ys.applyMatrix4(n),e.ray.intersectsSphere(Ys)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,hs),bh.multiplyMatrices(n,hs),Ks.matrixWorld=bh,Ks.raycast(e,Zr);for(let o=0,a=Zr.length;o<a;o++){const c=Zr[o];c.instanceId=r,c.object=this,t.push(c)}Zr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ic(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Xu(new Float32Array(i*this.count),i,this.count,Kc,Cn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Es extends rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Io=new O,Lo=new O,Ch=new be,Zs=new ko,Jr=new zn,Na=new O,Ph=new O;class Go extends vt{constructor(e=new Pt,t=new Es){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Io.fromBufferAttribute(t,i-1),Lo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Io.distanceTo(Lo);e.setAttribute("lineDistance",new gt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(i),Jr.radius+=r,e.ray.intersectsSphere(Jr)===!1)return;Ch.copy(i).invert(),Zs.copy(e.ray).applyMatrix4(Ch);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let v=d,g=_-1;v<g;v+=l){const m=u.getX(v),A=u.getX(v+1),S=Qr(this,e,Zs,c,m,A);S&&t.push(S)}if(this.isLineLoop){const v=u.getX(_-1),g=u.getX(d),m=Qr(this,e,Zs,c,v,g);m&&t.push(m)}}else{const d=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let v=d,g=_-1;v<g;v+=l){const m=Qr(this,e,Zs,c,v,v+1);m&&t.push(m)}if(this.isLineLoop){const v=Qr(this,e,Zs,c,_-1,d);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Qr(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(Io.fromBufferAttribute(o,i),Lo.fromBufferAttribute(o,r),t.distanceSqToSegment(Io,Lo,Na,Ph)>n)return;Na.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Na);if(!(c<e.near||c>e.far))return{distance:c,point:Ph.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,object:s}}const Ih=new O,Lh=new O;class Lc extends Go{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Ih.fromBufferAttribute(t,i),Lh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ih.distanceTo(Lh);e.setAttribute("lineDistance",new gt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Z_ extends Go{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class di extends rn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Dh=new be,Dc=new ko,eo=new zn,to=new O;class ws extends vt{constructor(e=new Pt,t=new di){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(i),eo.radius+=r,e.ray.intersectsSphere(eo)===!1)return;Dh.copy(i).invert(),Dc.copy(e.ray).applyMatrix4(Dh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let _=f,v=d;_<v;_++){const g=l.getX(_);to.fromBufferAttribute(h,g),Uh(to,g,c,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let _=f,v=d;_<v;_++)to.fromBufferAttribute(h,_),Uh(to,_,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Uh(s,e,t,n,i,r,o){const a=Dc.distanceSqToPoint(s);if(a<t){const c=new O;Dc.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class pr extends Ut{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class J_{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new Xe:new O);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new O,i=[],r=[],o=[],a=new O,c=new be;for(let d=0;d<=e;d++){const _=d/e;i[d]=this.getTangentAt(_,new O)}r[0]=new O,o[0]=new O;let l=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Ht(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,_))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(Ht(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let _=1;_<=e;_++)r[_].applyMatrix4(c.makeRotationAxis(i[_],d*_)),o[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Wo extends Pt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],f=[],d=[];let _=0;const v=[],g=n/2;let m=0;A(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new gt(h,3)),this.setAttribute("normal",new gt(f,3)),this.setAttribute("uv",new gt(d,2));function A(){const w=new O,U=new O;let I=0;const P=(t-e)/n;for(let k=0;k<=r;k++){const x=[],E=k/r,C=E*(t-e)+e;for(let F=0;F<=i;F++){const B=F/i,X=B*c+a,K=Math.sin(X),H=Math.cos(X);U.x=C*K,U.y=-E*n+g,U.z=C*H,h.push(U.x,U.y,U.z),w.set(K,P,H).normalize(),f.push(w.x,w.y,w.z),d.push(B,1-E),x.push(_++)}v.push(x)}for(let k=0;k<i;k++)for(let x=0;x<r;x++){const E=v[x][k],C=v[x+1][k],F=v[x+1][k+1],B=v[x][k+1];u.push(E,C,B),u.push(C,F,B),I+=6}l.addGroup(m,I,0),m+=I}function S(w){const U=_,I=new Xe,P=new O;let k=0;const x=w===!0?e:t,E=w===!0?1:-1;for(let F=1;F<=i;F++)h.push(0,g*E,0),f.push(0,E,0),d.push(.5,.5),_++;const C=_;for(let F=0;F<=i;F++){const X=F/i*c+a,K=Math.cos(X),H=Math.sin(X);P.x=x*H,P.y=g*E,P.z=x*K,h.push(P.x,P.y,P.z),f.push(0,E,0),I.x=K*.5+.5,I.y=H*.5*E+.5,d.push(I.x,I.y),_++}for(let F=0;F<i;F++){const B=U+F,X=C+F;w===!0?u.push(X,X+1,B):u.push(X+1,X,B),k+=3}l.addGroup(m,k,w===!0?1:2),m+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ol extends Wo{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ol(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Q_={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=ju(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,f,d;if(n&&(r=sv(s,e,r,t)),s.length>80*t){a=l=s[0],c=u=s[1];for(let _=t;_<i;_+=t)h=s[_],f=s[_+1],h<a&&(a=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);d=Math.max(l-a,u-c),d=d!==0?32767/d:0}return mr(r,o,t,a,c,d,0),o}};function ju(s,e,t,n,i){let r,o;if(i===mv(s,e,t,n)>0)for(r=e;r<t;r+=n)o=Nh(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=Nh(r,s[r],s[r+1],o);return o&&$o(o,o.next)&&(_r(o),o=o.next),o}function zi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&($o(t,t.next)||At(t.prev,t,t.next)===0)){if(_r(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function mr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&lv(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?tv(s,n,i,r):ev(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),_r(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=nv(zi(s),e,t),mr(s,e,t,n,i,r,2)):o===2&&iv(s,e,t,n,i,r):mr(zi(s),e,t,n,i,r,1);break}}}function ev(s){const e=s.prev,t=s,n=s.next;if(At(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=i<r?i<o?i:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,f=i>r?i>o?i:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l;let _=n.next;for(;_!==e;){if(_.x>=u&&_.x<=f&&_.y>=h&&_.y<=d&&_s(i,a,r,c,o,l,_.x,_.y)&&At(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function tv(s,e,t,n){const i=s.prev,r=s,o=s.next;if(At(i,r,o)>=0)return!1;const a=i.x,c=r.x,l=o.x,u=i.y,h=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,_=u<h?u<f?u:f:h<f?h:f,v=a>c?a>l?a:l:c>l?c:l,g=u>h?u>f?u:f:h>f?h:f,m=Uc(d,_,e,t,n),A=Uc(v,g,e,t,n);let S=s.prevZ,w=s.nextZ;for(;S&&S.z>=m&&w&&w.z<=A;){if(S.x>=d&&S.x<=v&&S.y>=_&&S.y<=g&&S!==i&&S!==o&&_s(a,u,c,h,l,f,S.x,S.y)&&At(S.prev,S,S.next)>=0||(S=S.prevZ,w.x>=d&&w.x<=v&&w.y>=_&&w.y<=g&&w!==i&&w!==o&&_s(a,u,c,h,l,f,w.x,w.y)&&At(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;S&&S.z>=m;){if(S.x>=d&&S.x<=v&&S.y>=_&&S.y<=g&&S!==i&&S!==o&&_s(a,u,c,h,l,f,S.x,S.y)&&At(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;w&&w.z<=A;){if(w.x>=d&&w.x<=v&&w.y>=_&&w.y<=g&&w!==i&&w!==o&&_s(a,u,c,h,l,f,w.x,w.y)&&At(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function nv(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!$o(i,r)&&qu(i,n,n.next,r)&&gr(i,r)&&gr(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),_r(n),_r(n.next),n=s=r),n=n.next}while(n!==s);return zi(n)}function iv(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&fv(o,a)){let c=Ku(o,a);o=zi(o,o.next),c=zi(c,c.next),mr(o,e,t,n,i,r,0),mr(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function sv(s,e,t,n){const i=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=ju(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(uv(l));for(i.sort(rv),r=0;r<i.length;r++)t=ov(i[r],t);return t}function rv(s,e){return s.x-e.x}function ov(s,e){const t=av(s,e);if(!t)return e;const n=Ku(t,s);return zi(n,n.next),zi(t,t.next)}function av(s,e){let t=e,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,c=i.x,l=i.y;let u=1/0,h;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&_s(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),gr(t,s)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&cv(i,t)))&&(i=t,u=h)),t=t.next;while(t!==a);return i}function cv(s,e){return At(s.prev,s,e.prev)<0&&At(e.next,s,s.next)<0}function lv(s,e,t,n){let i=s;do i.z===0&&(i.z=Uc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,hv(i)}function hv(s){let e,t,n,i,r,o,a,c,l=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(o>1);return s}function Uc(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function uv(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function _s(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function fv(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!dv(s,e)&&(gr(s,e)&&gr(e,s)&&pv(s,e)&&(At(s.prev,s,e.prev)||At(s,e.prev,e))||$o(s,e)&&At(s.prev,s,s.next)>0&&At(e.prev,e,e.next)>0)}function At(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function $o(s,e){return s.x===e.x&&s.y===e.y}function qu(s,e,t,n){const i=io(At(s,e,t)),r=io(At(s,e,n)),o=io(At(t,n,s)),a=io(At(t,n,e));return!!(i!==r&&o!==a||i===0&&no(s,t,e)||r===0&&no(s,n,e)||o===0&&no(t,s,n)||a===0&&no(t,e,n))}function no(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function io(s){return s>0?1:s<0?-1:0}function dv(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&qu(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function gr(s,e){return At(s.prev,s,s.next)<0?At(s,e,s.next)>=0&&At(s,s.prev,e)>=0:At(s,e,s.prev)<0||At(s,s.next,e)<0}function pv(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Ku(s,e){const t=new Nc(s.i,s.x,s.y),n=new Nc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Nh(s,e,t,n){const i=new Nc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function _r(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Nc(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function mv(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class al{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return al.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Oh(e),Fh(n,e);let o=e.length;t.forEach(Oh);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,Fh(n,t[c]);const a=Q_.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Oh(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Fh(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class cl extends Pt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new O,f=new O,d=[],_=[],v=[],g=[];for(let m=0;m<=n;m++){const A=[],S=m/n;let w=0;m===0&&o===0?w=.5/t:m===n&&c===Math.PI&&(w=-.5/t);for(let U=0;U<=t;U++){const I=U/t;h.x=-e*Math.cos(i+I*r)*Math.sin(o+S*a),h.y=e*Math.cos(o+S*a),h.z=e*Math.sin(i+I*r)*Math.sin(o+S*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),g.push(I+w,1-S),A.push(l++)}u.push(A)}for(let m=0;m<n;m++)for(let A=0;A<t;A++){const S=u[m][A+1],w=u[m][A],U=u[m+1][A],I=u[m+1][A+1];(m!==0||o>0)&&d.push(S,w,I),(m!==n-1||c<Math.PI)&&d.push(w,U,I)}this.setIndex(d),this.setAttribute("position",new gt(_,3)),this.setAttribute("normal",new gt(v,3)),this.setAttribute("uv",new gt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ll extends rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bo,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ct,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kn extends ll{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class xo extends rn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new xe(16777215),this.specular=new xe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bo,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ct,this.combine=Oo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hl extends rn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bo,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ct,this.combine=Oo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function so(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function gv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function _v(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Bh(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function Yu(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class yr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class vv extends yr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:El,endingEnd:El}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case wl:r=e,a=2*t-n;break;case Al:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case wl:o=e,c=2*n-t;break;case Al:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(n-t)/(i-t),v=_*_,g=v*_,m=-f*g+2*f*v-f*_,A=(1+f)*g+(-1.5-2*f)*v+(-.5+f)*_+1,S=(-1-d)*g+(1.5+d)*v+.5*_,w=d*g-d*v;for(let U=0;U!==a;++U)r[U]=m*o[u+U]+A*o[l+U]+S*o[c+U]+w*o[h+U];return r}}class xv extends yr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[l+f]*h+o[c+f]*u;return r}}class yv extends yr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Hn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=so(t,this.TimeBufferType),this.values=so(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:so(e.times,Array),values:so(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new yv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new xv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case lr:t=this.InterpolantFactoryMethodDiscrete;break;case hr:t=this.InterpolantFactoryMethodLinear;break;case oa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lr;case this.InterpolantFactoryMethodLinear:return hr;case this.InterpolantFactoryMethodSmooth:return oa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&gv(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===oa,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{const h=a*n,f=h-n,d=h+n;for(let _=0;_!==n;++_){const v=t[h+_];if(v!==t[f+_]||v!==t[d+_]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=hr;class zs extends Hn{constructor(e,t,n){super(e,t,n)}}zs.prototype.ValueTypeName="bool";zs.prototype.ValueBufferType=Array;zs.prototype.DefaultInterpolation=lr;zs.prototype.InterpolantFactoryMethodLinear=void 0;zs.prototype.InterpolantFactoryMethodSmooth=void 0;class Zu extends Hn{}Zu.prototype.ValueTypeName="color";class ki extends Hn{}ki.prototype.ValueTypeName="number";class Mv extends yr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let u=l+a;l!==u;l+=4)wt.slerpFlat(r,0,o,l-a,o,l,c);return r}}class yi extends Hn{InterpolantFactoryMethodLinear(e){return new Mv(this.times,this.values,this.getValueSize(),e)}}yi.prototype.ValueTypeName="quaternion";yi.prototype.InterpolantFactoryMethodSmooth=void 0;class ks extends Hn{constructor(e,t,n){super(e,t,n)}}ks.prototype.ValueTypeName="string";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=lr;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;class Hi extends Hn{}Hi.prototype.ValueTypeName="vector";class Ju{constructor(e="",t=-1,n=[],i=hd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Pn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Ev(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Hn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=_v(c);c=Bh(c,1,u),l=Bh(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new ki(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,_,v){if(d.length!==0){const g=[],m=[];Yu(d,g,m,_),g.length!==0&&v.push(new h(f,g,m))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let v=0;v<f[_].morphTargets.length;v++)d[f[_].morphTargets[v]]=-1;for(const v in d){const g=[],m=[];for(let A=0;A!==f[_].morphTargets.length;++A){const S=f[_];g.push(S.time),m.push(S.morphTarget===v?1:0)}i.push(new ki(".morphTargetInfluence["+v+"]",g,m))}c=d.length*o}else{const d=".bones["+t[h].name+"]";n(Hi,d+".position",f,"pos",i),n(yi,d+".quaternion",f,"rot",i),n(Hi,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Sv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ki;case"vector":case"vector2":case"vector3":case"vector4":return Hi;case"color":return Zu;case"quaternion":return yi;case"bool":case"boolean":return zs;case"string":return ks}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Ev(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Sv(s.type);if(s.times===void 0){const t=[],n=[];Yu(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const pi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class wv{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const d=l[h],_=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const Av=new wv;class Bn{constructor(e){this.manager=e!==void 0?e:Av,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Bn.DEFAULT_MATERIAL_NAME="__DEFAULT";const jn={};class Tv extends Error{constructor(e,t){super(e),this.response=t}}class Xo extends Bn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=pi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(jn[e]!==void 0){jn[e].push({onLoad:t,onProgress:n,onError:i});return}jn[e]=[],jn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=jn[e],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,_=d!==0;let v=0;const g=new ReadableStream({start(m){A();function A(){h.read().then(({done:S,value:w})=>{if(S)m.close();else{v+=w.byteLength;const U=new ProgressEvent("progress",{lengthComputable:_,loaded:v,total:d});for(let I=0,P=u.length;I<P;I++){const k=u[I];k.onProgress&&k.onProgress(U)}m.enqueue(w),A()}},S=>{m.error(S)})}}});return new Response(g)}else throw new Tv(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(_=>d.decode(_))}}}).then(l=>{pi.add(e,l);const u=jn[e];delete jn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=jn[e];if(u===void 0)throw this.manager.itemError(e),l;delete jn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class bv extends Bn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=pi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=ur("img");function c(){u(),pi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class jo extends Bn{constructor(e){super(e)}load(e,t,n,i){const r=new Ut,o=new bv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class qo extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Oa=new be,zh=new O,kh=new O;class ul{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new il,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;zh.setFromMatrixPosition(e.matrixWorld),t.position.copy(zh),kh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kh),t.updateMatrixWorld(),Oa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Oa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Rv extends ul{constructor(){super(new Yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ls*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Qu extends qo{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Rv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Hh=new be,Js=new O,Fa=new O;class Cv extends ul{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Js.setFromMatrixPosition(e.matrixWorld),n.position.copy(Js),Fa.copy(n.position),Fa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Fa),n.updateMatrixWorld(),i.makeTranslation(-Js.x,-Js.y,-Js.z),Hh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hh)}}class Oc extends qo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Cv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Pv extends ul{constructor(){super(new xr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fl extends qo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Pv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ef extends qo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class As{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Iv extends Bn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=pi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return pi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),pi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});pi.add(e,c),r.manager.itemStart(e)}}const dl="\\[\\]\\.:\\/",Lv=new RegExp("["+dl+"]","g"),pl="[^"+dl+"]",Dv="[^"+dl.replace("\\.","")+"]",Uv=/((?:WC+[\/:])*)/.source.replace("WC",pl),Nv=/(WCOD+)?/.source.replace("WCOD",Dv),Ov=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pl),Fv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pl),Bv=new RegExp("^"+Uv+Nv+Ov+Fv+"$"),zv=["material","materials","bones","map"];class kv{constructor(e,t,n){const i=n||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class lt{constructor(e,t,n){this.path=t,this.parsedPath=n||lt.parseTrackName(t),this.node=lt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new lt.Composite(e,t,n):new lt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Lv,"")}static parseTrackName(e){const t=Bv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);zv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=lt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}lt.Composite=kv;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$c}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$c);const Hv=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`,Vv=`
uniform sampler2D tScene;
uniform vec2 uResolution;   // render target size
uniform float uDither;      // 0/1 toggle
uniform float uVignette;    // strength
uniform float uCrush;       // shadow crush amount
varying vec2 vUv;

float bayer(vec2 p) {
  const mat4 B = mat4(
     0.0,  8.0,  2.0, 10.0,
    12.0,  4.0, 14.0,  6.0,
     3.0, 11.0,  1.0,  9.0,
    15.0,  7.0, 13.0,  5.0
  );
  ivec2 i = ivec2(mod(p, 4.0));
  return B[i.y][i.x] / 16.0;
}

void main() {
  vec3 c = texture2D(tScene, vUv).rgb;

  // night grading: crush shadows, keep light sources punchy
  vec3 crushed = c * c * (3.0 - 2.0 * c);
  c = mix(c, crushed, uCrush);

  // vignette
  float d = distance(vUv, vec2(0.5));
  c *= 1.0 - uVignette * smoothstep(0.35, 0.75, d);

  // 15-bit quantize with ordered dither (in render-target pixel space, so the
  // dither pattern is chunky after the nearest upscale)
  vec2 px = floor(vUv * uResolution);
  float t = (bayer(px) - 0.5) / 31.0 * uDither;
  c = floor((c + t) * 31.0 + 0.5) / 31.0;

  gl_FragColor = vec4(c, 1.0);
}`;class Gv{constructor(e,t=240){this.renderer=new j_({canvas:e,antialias:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(1),this.renderer.outputColorSpace=xt;const n=window.innerWidth/window.innerHeight;this.height=t,this.width=Math.round(t*n),this.target=new xi(this.width,this.height,{magFilter:Vt,minFilter:Vt,depthBuffer:!0}),this.blitScene=new Vu,this.blitCam=new xr(-1,1,1,-1,0,1),this.blitMat=new In({vertexShader:Hv,fragmentShader:Vv,uniforms:{tScene:{value:this.target.texture},uResolution:{value:new Xe(this.width,this.height)},uDither:{value:1},uVignette:{value:.03},uCrush:{value:.12}},depthTest:!1,depthWrite:!1}),this.blitScene.add(new Et(new Mi(2,2),this.blitMat)),this.resize(),window.addEventListener("resize",()=>this.resize())}resize(){const e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t);const n=e/t;this.width=Math.round(this.height*n),this.target.setSize(this.width,this.height),this.blitMat.uniforms.uResolution.value.set(this.width,this.height)}render(e,t){this.renderer.setRenderTarget(this.target),this.renderer.render(e,t),this.renderer.setRenderTarget(null),this.renderer.render(this.blitScene,this.blitCam)}}const Oi={uSnapRes:{value:new Xe(1100,620)},uAffine:{value:0},uMist:{value:.95},uMistColor:{value:new xe("#252b4a")}};function vs(s,e={}){const{affine:t=!0,snap:n=!0}=e;s.onBeforeCompile=i=>{i.uniforms.uSnapRes=Oi.uSnapRes,i.uniforms.uAffine=Oi.uAffine,i.uniforms.uMist=Oi.uMist,i.uniforms.uMistColor={value:Oi.uMistColor.value},i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
        uniform vec2 uSnapRes;
        uniform float uAffine;
        varying float vAffineW;
        varying float vWorldY;
        varying float vMistDepth;`).replace("#include <project_vertex>",`#include <project_vertex>
        ${n?`
        // PS1 GTE: no sub-pixel precision — snap to a virtual low-res grid
        gl_Position.xyz /= gl_Position.w;
        gl_Position.xy = floor(gl_Position.xy * uSnapRes + 0.5) / uSnapRes;
        gl_Position.xyz *= gl_Position.w;`:""}
        vAffineW = mix(1.0, gl_Position.w, uAffine);
        // affine UV trick, part 1: multiply the UV by w here (project_vertex runs
        // AFTER uv_vertex, so vMapUv is already populated and vAffineW is valid —
        // doing this inside uv_vertex read vAffineW before assignment)
        ${t?`
        #ifdef USE_MAP
          vMapUv *= vAffineW;
        #endif`:""}
        {
          #ifdef USE_INSTANCING
            vec4 psxWorld = modelMatrix * instanceMatrix * vec4(transformed, 1.0);
          #else
            vec4 psxWorld = modelMatrix * vec4(transformed, 1.0);
          #endif
          vWorldY = psxWorld.y;
          vMistDepth = -mvPosition.z;
        }
        `),t&&(i.fragmentShader=i.fragmentShader.replace("#include <map_fragment>",`#ifdef USE_MAP
          vec4 sampledDiffuseColor = texture2D( map, vMapUv / vAffineW );
          diffuseColor *= sampledDiffuseColor;
        #endif`)),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
        varying float vAffineW;
        varying float vWorldY;
        varying float vMistDepth;
        uniform float uMist;
        uniform vec3 uMistColor;`).replace("#include <fog_fragment>",`#include <fog_fragment>
        // ground mist: pools near y=0, fades out by ~2.5 m up, needs some depth to build
        {
          float mistH = smoothstep(2.5, 0.0, vWorldY);
          float mistD = smoothstep(6.0, 55.0, vMistDepth);
          gl_FragColor.rgb = mix(gl_FragColor.rgb, uMistColor, mistH * mistD * uMist * 0.55);
        }`)},s.customProgramCacheKey=()=>`psx-${t}-${n}`}function _i(s){return s.magFilter=Vt,s.minFilter=ms,s.generateMipmaps=!0,s.anisotropy=8,s}const Ge=15.5665,Wv=60,An=1/Wv,Do=4.5,Vh=1.9,fi={mass:1200,inertia:1700,cgToFront:1.12,cgToRear:1.38,cgHeight:.58,engineForce:8200,brakeForce:8600,reverseForce:4200,maxSpeed:52,gripFront:1.3,gripRear:1.18,peakSlipFront:.14,peakSlipRear:.17,gripFalloff:.52,driveTraction:1.25,brakeBias:.65,handbrakeGrip:.22,handbrakeDriveCut:1,handbrakeKick:2,driftRecoverDamping:2.2,dragCoeff:.62,rollingResist:5.5,steerMaxLow:.66,steerMaxHigh:.28,steerAttack:4.2,steerRelease:6,assistGain:.65,assistMax:.5,throttleAttack:3.2,throttleRelease:6,yawDamping:.55,kinematicBlendSpeed:3.5,restitution:.25,wallFriction:.6,gearRatios:[3.2,2.1,1.55,1.2,.98],finalDrive:3.6,shiftUpRpm:6600,shiftDownRpm:3e3,idleRpm:900,maxRpm:7200,shiftCutTime:.15},Uo={asphalt:{lateral:1,longitudinal:1,drag:1,peakScale:1,falloffScale:1},curb:{lateral:.85,longitudinal:.9,drag:1.2,peakScale:1.1,falloffScale:.85},dirt:{lateral:.62,longitudinal:.68,drag:2.2,peakScale:1.5,falloffScale:.35},offroad:{lateral:.42,longitudinal:.45,drag:6,peakScale:1.8,falloffScale:.25}},$v=`
........................
........................
...vvvvvvvvv............
...v.......v............
...v.......v............
...v.......eeee.........
...v..........e.........
...w..........e.........
...w..........eeeee.....
...w..............e.....
...w..............e.....
...w..............e.....
...ww.............e.....
....w.........ppppe.....
....w.........p.........
....wwwwwwwwwwp.........
........................
`.trim();function Fe(s,e,t=0){let n=s*374761393+e*668265263+t*2246822519|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}const ro=5,Xv=0;function Ba(s,e){const t=[];if(s.dirs.n&&t.push([0,-1]),s.dirs.w&&t.push([-1,0]),s.dirs.s&&t.push([0,1]),s.dirs.e&&t.push([1,0]),s.piece==="straight"){const[A,S]=t[0],w=-S,U=A,I=(e-.5)*Ge,P=Xv*Math.sin(2*Math.PI*e);return[s.x+A*I+w*P,s.z+S*I+U*P]}const[n,i]=t[0],[r,o]=t[1],a=s.x+(n+r)*(Ge/2),c=s.z+(i+o)*(Ge/2),l=s.x+n*(Ge/2)-a,u=s.z+i*(Ge/2)-c,h=s.x+r*(Ge/2)-a,f=s.z+o*(Ge/2)-c,d=Math.atan2(u,l);let v=Math.atan2(f,h)-d;for(;v>Math.PI;)v-=Math.PI*2;for(;v<-Math.PI;)v+=Math.PI*2;const g=d+v*e,m=Ge/2;return[a+Math.cos(g)*m,c+Math.sin(g)*m]}const mn=7.4,Gh=[1,.64,.28],jv=[.75,.85,1];function qv(){const s=$v.split(`
`),e=s.length,t=Math.max(...s.map(x=>x.length)),n=(x,E)=>E>=0&&E<e&&x>=0&&x<(s[E]?.length??0)?s[E][x]:".",i=x=>x==="v"||x==="e"||x==="p"||x==="w",r=[],o=new Map;for(let x=0;x<e;x++)for(let E=0;E<t;E++){const C=n(E,x);if(!i(C))continue;const F=i(n(E,x-1)),B=i(n(E,x+1)),X=i(n(E+1,x)),K=i(n(E-1,x)),H=+F+ +B+ +X+ +K;let L,$=0;H===4?L="cross":H===3?(L="t",F?X?B?$=-Math.PI/2:$=Math.PI:$=Math.PI/2:$=0):H===2&&(F&&B||X&&K)?(L="straight",$=F&&B?0:Math.PI/2):H===2?(L="corner",F&&X?$=0:X&&B?$=-Math.PI/2:B&&K?$=Math.PI:$=Math.PI/2):(L="end",$=F?0:X?Math.PI/2:B?Math.PI:-Math.PI/2);const ee={gx:E,gz:x,x:E*Ge,z:x*Ge,zone:C,piece:L,rot:$,dirs:{n:F,e:X,s:B,w:K},elev:{n:0,e:0,s:0,w:0,c:0},dirt:!1};r.push(ee),o.set(E+","+x,ee)}for(const x of r)x.piece==="end"&&console.warn(`map: dangling road at ${x.gx},${x.gz}`);const a=(x,E)=>{const C=Math.round(x/Ge),F=Math.round(E/Ge),B=o.get(C+","+F);if(!B)return"offroad";const X=x-B.x,K=E-B.z;let H=1/0;const L=[];B.dirs.n&&L.push([0,-1]),B.dirs.s&&L.push([0,1]),B.dirs.e&&L.push([1,0]),B.dirs.w&&L.push([-1,0]);for(const[$,ee]of L){const he=Math.max(0,Math.min(1,(X*$+K*ee)/(Ge/2))),pe=$*(Ge/2)*he,Be=ee*(Ge/2)*he;H=Math.min(H,Math.hypot(X-pe,K-Be))}if(B.dirt){if(B.piece==="straight"){const[$]=B.dirs.n||B.dirs.s?[0,1]:[1,0];Math.max(0,Math.min(1,($?x-B.x:E-B.z)/Ge+.5));const ee=0,he=$?E-B.z:x-B.x;return Math.abs(he-ee)<ro?"dirt":"offroad"}if(B.piece==="corner"){const $=[];B.dirs.n&&$.push([0,-1]),B.dirs.w&&$.push([-1,0]),B.dirs.s&&$.push([0,1]),B.dirs.e&&$.push([1,0]);const ee=B.x+($[0][0]+$[1][0])*(Ge/2),he=B.z+($[0][1]+$[1][1])*(Ge/2);return Math.abs(Math.hypot(x-ee,E-he)-Ge/2)<ro?"dirt":"offroad"}return H<ro?"dirt":"offroad"}return H<ro?"asphalt":H<mn?"curb":"offroad"},c=[];{const x=r.find(H=>H.zone==="v"&&H.piece==="straight")??r[0];let E=null,C=x;for(let H=0;H<r.length+1&&C;H++){c.push(C);const L=[];C.dirs.n&&L.push(o.get(C.gx+","+(C.gz-1))),C.dirs.s&&L.push(o.get(C.gx+","+(C.gz+1))),C.dirs.e&&L.push(o.get(C.gx+1+","+C.gz)),C.dirs.w&&L.push(o.get(C.gx-1+","+C.gz));const $=L.filter(Boolean).find(ee=>ee!==E);E=C,C=$===x?void 0:$}const F=c.length,B=5.5,X=[];for(let H=0;H<F;H++){const $=((H+.5)/F-.35)/.5;X.push($>0&&$<1?B*.5*(1-Math.cos(2*Math.PI*$)):0)}for(let H=0;H<3;H++)for(let L=0;L<F;L++){if(c[L].piece==="straight")continue;const $=(L-1+F)%F,ee=(X[$]+X[L])/2;X[$]=ee,X[L]=ee}const K=(H,L)=>L.gz<H.gz?"n":L.gz>H.gz?"s":L.gx>H.gx?"e":"w";for(let H=0;H<F;H++){const L=c[H],$=c[(H+1)%F],ee=c[(H-1+F)%F],he=X[(H-1+F)%F],pe=X[H];L.elev.c=(he+pe)/2,L.elev.n=L.elev.e=L.elev.s=L.elev.w=L.elev.c,L.elev[K(L,ee)]=he,L.elev[K(L,$)]=pe}for(const H of c){const L=[H.elev.n,H.elev.e,H.elev.s,H.elev.w],$=Math.max(...L)-Math.min(...L);H.dirt=H.elev.c>.25||$>.05}}const l=(x,E)=>{const C=Math.round(x/Ge),F=Math.round(E/Ge),B=o.get(C+","+F);if(B){if(B.piece==="straight"){if(B.dirs.n||B.dirs.s){const L=Math.max(0,Math.min(1,(E-B.z)/Ge+.5));return B.elev.n+(B.elev.s-B.elev.n)*L}const H=Math.max(0,Math.min(1,(x-B.x)/Ge+.5));return B.elev.w+(B.elev.e-B.elev.w)*H}return B.elev.c}let X=0,K=1/2400;for(const H of r){const L=x-H.x,$=E-H.z,ee=L*L+$*$;if(ee>3600)continue;let he=H.elev.c;if(H.piece==="straight")if(H.dirs.n||H.dirs.s){const Be=Math.max(-.15,Math.min(1.15,(E-H.z)/Ge+.5));he=H.elev.n+(H.elev.s-H.elev.n)*Be}else{const Be=Math.max(-.15,Math.min(1.15,(x-H.x)/Ge+.5));he=H.elev.w+(H.elev.e-H.elev.w)*Be}const pe=1/(ee+30);X+=pe*he,K+=pe}return X/K},u=[],h=[],f=[],d=(x,E,C,F,B=!1)=>({minX:x-C,maxX:x+C,minZ:E-F,maxZ:E+F,soft:B}),_=(x,E)=>{for(const[C,F]of[[0,0],[3,0],[-3,0],[0,3],[0,-3]])if(a(x+C,E+F)!=="offroad")return!1;return!0},v=(x,E,C,F)=>Math.atan2(C-x,F-E);let g=0;for(const x of r){const E=x.dirs.n||x.dirs.s?"ns":"ew",C=mn+.6;if(x.zone==="v"){if((x.gx+x.gz)%2===0){const F=g++%2===0?1:-1,B=E==="ns"?x.x+F*(mn-.8):x.x,X=E==="ns"?x.z:x.z+F*(mn-.8);u.push({x:B,z:X,color:Gh,radius:13,intensity:1,height:5.2}),h.push({kind:"lampProp",x:B,z:X,rot:v(B,X,x.x,x.z),variant:0})}if(x.piece==="straight")for(const F of[-1,1]){if(Fe(x.gx,x.gz,F+10)>.75)continue;const B=E==="ns"?x.x+F*(C+8.5):x.x+(Fe(x.gx,x.gz,3)-.5)*4,X=E==="ns"?x.z+(Fe(x.gx,x.gz,4)-.5)*4:x.z+F*(C+8.5),K=E==="ns"?F>0?-Math.PI/2:Math.PI/2:F>0?Math.PI:0;h.push({kind:"house",x:B,z:X,rot:K,variant:Math.floor(Fe(x.gx,x.gz,5)*15)}),f.push(d(B,X,E==="ns"?5:4.5,E==="ns"?4.5:5));for(let H=0;H<2;H++){if(Fe(x.gx*3+H,x.gz,F+60)>.8)continue;const L=Fe(x.gx+H,x.gz,F+61)*Math.PI*2,$=7+Fe(x.gx,x.gz+H,F+62)*5,ee=B+Math.cos(L)*$,he=X+Math.sin(L)*$+(F>0?4:-4);let pe=!0;for(const[Be,Ke]of[[0,0],[3,0],[-3,0],[0,3],[0,-3]])if(a(ee+Be,he+Ke)!=="offroad"){pe=!1;break}pe&&h.push({kind:Fe(x.gx,x.gz+H,63)<.6?"tree_small":"bush",x:ee,z:he,rot:Fe(x.gx,x.gz,64+H)*Math.PI*2,variant:Math.floor(Fe(x.gx+H,x.gz,65)*8)})}if(Fe(x.gx,x.gz,F+20)<.3){const H=E==="ns"?x.x+F*(mn+1.6):B+3,L=E==="ns"?X+3:x.z+F*(mn+1.6);h.push({kind:"parked",x:H,z:L,rot:E==="ns"?0:Math.PI/2,variant:Math.floor(Fe(x.gx,x.gz,6)*4)}),f.push(d(H,L,E==="ns"?1:2.3,E==="ns"?2.3:1))}}}if(x.zone==="e"){for(const F of[-1,1]){if(Fe(x.gx,x.gz,F+50)>.55)continue;const B=mn+4+Fe(x.gx,x.gz,F+51)*7,X=E==="ns"?x.x+F*B:x.x+(Fe(x.gx,x.gz,52)-.5)*Ge*.8,K=E==="ns"?x.z+(Fe(x.gx,x.gz,53)-.5)*Ge*.8:x.z+F*B;_(X,K)&&h.push({kind:"bush",x:X,z:K,rot:Fe(x.gx,x.gz,55)*Math.PI*2,variant:Math.floor(Fe(x.gx,x.gz,56)*8)})}x.piece==="corner"&&h.push({kind:"cone",x:x.x+(Fe(x.gx,x.gz,7)-.5)*3,z:x.z+(Fe(x.gx,x.gz,8)-.5)*3,rot:Fe(x.gx,x.gz,9)*Math.PI,variant:0})}if(x.zone==="p"&&(x.gx+x.gz)%3===0){const F=x.x+(E==="ns"?8.6:0),B=x.z+(E==="ns"?0:8.6);u.push({x:F,z:B,color:jv,radius:15,intensity:.9,height:6}),h.push({kind:"lampProp",x:F,z:B,rot:v(F,B,x.x,x.z),variant:1})}if(x.zone==="w")for(const F of[-1,1]){for(let X=0;X<5;X++){const K=(X+.5)/5-.5,H=(Fe(x.gx*7+X,x.gz,F+30)-.5)*3,L=C+4.5+Fe(x.gx+X,x.gz,F+31)*9,$=E==="ns"?x.x+F*L:x.x+K*Ge+H,ee=E==="ns"?x.z+K*Ge+H:x.z+F*L,he=Fe(x.gx+X*3,x.gz,F+32)<.6;let pe=!0;for(const[Be,Ke]of[[0,0],[3,0],[-3,0],[0,3],[0,-3]])if(a($+Be,ee+Ke)!=="offroad"){pe=!1;break}pe&&(h.push({kind:he?"tree_big":"tree_small",x:$,z:ee,rot:Fe(x.gx,x.gz+X,33)*Math.PI*2,variant:Math.floor(Fe(x.gx,x.gz+X,34)*8)}),he&&f.push(d($,ee,.7,.7)))}if(Fe(x.gx,x.gz,F+40)<.5){const X=E==="ns"?x.x+F*(mn+3.2):x.x+(Fe(x.gx,x.gz,41)-.5)*Ge*.8,K=E==="ns"?x.z+(Fe(x.gx,x.gz,42)-.5)*Ge*.8:x.z+F*(mn+3.2);h.push({kind:"bush",x:X,z:K,rot:Fe(x.gx,x.gz,43)*Math.PI*2,variant:Math.floor(Fe(x.gx,x.gz,44)*5)})}}}const m=r.filter(x=>x.zone==="w"&&x.piece==="straight");if(m.length){const x=m[Math.floor(m.length/2)];u.push({x:x.x+mn-.8,z:x.z,color:Gh,radius:12,intensity:1.1,height:5.2}),h.push({kind:"lampProp",x:x.x+mn-.8,z:x.z,rot:v(x.x+mn-.8,x.z,x.x,x.z),variant:0})}const A=r.filter(x=>x.zone==="v"&&x.piece==="corner");if(A.length){const x=A[A.length-1];h.push({kind:"tower",x:x.x+Ge*.9,z:x.z-Ge*.9,rot:0,variant:0}),f.push(d(x.x+Ge*.9,x.z-Ge*.9,2.5,2.5))}const S=r.filter(x=>x.dirt),w=(x,E)=>{for(const C of S)if((x-C.x)**2+(E-C.z)**2<32*32)return!0;return!1};for(let x=0;x<7400;x++){const E=Fe(x,91)*t*Ge,C=Fe(x,92)*e*Ge,F=Fe(Math.floor(E/40),Math.floor(C/40),96);if(Fe(x,97)>F*F*1.9||!_(E,C))continue;const B=w(E,C),X=Fe(x,93),K=B?"bush":X<.2?"tree_big":X<.38?"tree_small":"bush";h.push({kind:K,x:E,z:C,rot:Fe(x,94)*Math.PI*2,variant:Math.floor(Fe(x,95)*12)}),K==="tree_big"&&f.push(d(E,C,.7,.7))}{const x=-Ge,E=t*Ge,C=-Ge,F=e*Ge,B=2*(E-x+F-C);for(let X=0;X<1500;X++){const K=Fe(X,201)*B,H=3+Fe(X,202)*52;let L,$;const ee=E-x,he=F-C;K<ee?(L=x+K,$=C-H):K<ee+he?(L=E+H,$=C+(K-ee)):K<ee*2+he?(L=E-(K-ee-he),$=F+H):(L=x-H,$=F-(K-ee*2-he)),L+=(Fe(X,203)-.5)*8,$+=(Fe(X,204)-.5)*8;const pe=Fe(X,205)<.7;h.push({kind:pe?"tree_big":"tree_small",x:L,z:$,rot:Fe(X,206)*Math.PI*2,variant:Math.floor(Fe(X,207)*12)}),pe&&H<14&&f.push(d(L,$,.8,.8))}}for(let x=0;x<160;x++){const E=Fe(x,77)*t*Ge,C=Fe(x,78)*e*Ge;_(E,C)&&h.push({kind:"rock",x:E,z:C,rot:Fe(x,81)*Math.PI*2,variant:x%2})}const U=r.filter(x=>x.zone==="v"&&x.piece==="straight"&&(x.dirs.e||x.dirs.w)),I=U[Math.floor(U.length/2)]??r[0],P={x:I.x,z:I.z,yaw:Math.PI/2};return{tiles:r,lamps:u,props:h,colliders:f,spawn:P,surfaceAt:a,heightAt:l,mistAt:(x,E)=>{const C=Math.round(x/Ge),F=Math.round(E/Ge),B=o.get(C+","+F);return B?B.zone==="p"?1:B.zone==="w"?.8:B.zone==="e"?.4:.25:.6},loopOrder:c,bounds:{minX:-5*Ge,minZ:-5*Ge,maxX:(t+4)*Ge,maxZ:(e+4)*Ge},grid:s}}const Kv=new xe("#20244a"),Yv=new xe("#4f4a78");function Zv(){const t=document.createElement("canvas");t.width=1024,t.height=512;const n=t.getContext("2d"),i=n.createImageData(1024,512),r=new xe("#1a2044"),o=new xe("#2c3468"),a=new xe("#434b8a"),c=(m,A,S,w)=>{const U=Math.floor(m/S),I=Math.floor(A/S),P=m%S/S,k=A%S/S,x=(F,B)=>Fe(F,B,w),E=P*P*(3-2*P),C=k*k*(3-2*k);return x(U,I)*(1-E)*(1-C)+x(U+1,I)*E*(1-C)+x(U,I+1)*(1-E)*C+x(U+1,I+1)*E*C};for(let m=0;m<512;m++){const A=m/511,S=new xe;A<.55?S.lerpColors(r,o,A/.55):A<.82?S.lerpColors(o,a,(A-.55)/.27):S.lerpColors(a,Yv,(A-.82)/.18);for(let w=0;w<1024;w++){const U={r:S.r,g:S.g,b:S.b},I=c(w,m*3.2,90,7)*c(w+500,m*2,41,8),P=c(w,m,55,9),k=Math.max(0,(A-.45)/.55),x=Math.max(0,I-.32)*.8*k+Math.max(0,P-.55)*.5*k*k;x>.02&&(U.r+=x*.16,U.g+=x*.17,U.b+=x*.24);const E=(w%4*4+m%4)/16-.5,C=(m*1024+w)*4;i.data[C]=Math.max(0,Math.round((U.r+E/40)*31))*8,i.data[C+1]=Math.max(0,Math.round((U.g+E/40)*31))*8,i.data[C+2]=Math.max(0,Math.round((U.b+E/40)*31))*8,i.data[C+3]=255}}for(let m=0;m<1200;m++){const A=Math.floor(Fe(m,1)*1024),S=Math.floor(Fe(m,2)*512*.6),w=160+Math.floor(Fe(m,3)*95),U=(S*1024+A)*4;if(i.data[U]=w,i.data[U+1]=w,i.data[U+2]=Math.min(255,w+20),Fe(m,4)>.85&&A<1023&&S<511)for(const[I,P]of[[1,0],[0,1],[1,1]]){const k=((S+P)*1024+(A+I))*4;i.data[k]=w*.7,i.data[k+1]=w*.7,i.data[k+2]=w*.7}}n.putImageData(i,0,0);const l=1024*.68,u=512*.52,h=22;for(let m=-52;m<=52;m++)for(let A=-52;A<=52;A++){const S=Math.hypot(A,m),w=Math.round(l+A),U=Math.round(u+m);if(!(w<0||w>=1024||U<0||U>=512)){if(S<=h){const P=232-(Fe(w>>2,U>>2,9)<.24?40:0)-S*1.2;n.fillStyle=`rgb(${P|0},${P|0},${Math.min(255,P+10)|0})`,n.fillRect(w,U,1,1)}else if(S<52){const I=1-(S-h)/(52-h);Fe(w,U,10)<I*I*.45&&(n.fillStyle="rgba(185,190,220,0.5)",n.fillRect(w,U,1,1))}}}const f=_i(new pr(t));f.colorSpace=xt;const d=new cl(900,24,12,0,Math.PI*2,0,Math.PI*.55),_=new Zt({map:f,side:sn,fog:!1,depthWrite:!1}),v=new Et(d,_);v.renderOrder=-10,v.frustumCulled=!1;const g=new Wt;g.add(v);{const A=new Float32Array(2250);for(let E=0;E<750;E++){const C=Fe(E,21)*Math.PI*2,F=.06+Fe(E,22)*1.35,B=870;A[E*3]=Math.cos(F)*Math.cos(C)*B,A[E*3+1]=Math.sin(F)*B,A[E*3+2]=Math.cos(F)*Math.sin(C)*B}const S=new Pt;S.setAttribute("position",new Nt(A,3));const w=new di({color:14212607,size:2.2,sizeAttenuation:!1,transparent:!0,opacity:.9,fog:!1,depthWrite:!1}),U=new ws(S,w);U.renderOrder=-9,U.frustumCulled=!1,g.add(U),S.clone();const I=[];for(let E=0;E<750;E++)Fe(E,23)<.12&&I.push(E);const P=new Float32Array(I.length*3);I.forEach((E,C)=>{P[C*3]=A[E*3]*.999,P[C*3+1]=A[E*3+1]*.999,P[C*3+2]=A[E*3+2]*.999});const k=new Pt;k.setAttribute("position",new Nt(P,3));const x=new ws(k,new di({color:16777215,size:3.5,sizeAttenuation:!1,transparent:!0,opacity:.95,fog:!1,depthWrite:!1}));x.renderOrder=-9,x.frustumCulled=!1,g.add(x)}{const m=document.createElement("canvas");m.width=m.height=64;const A=m.getContext("2d");for(let k=0;k<64;k++)for(let x=0;x<64;x++){const E=Math.hypot(x-32,k-32);if(E<26){const F=235-(Fe(x>>2,k>>2,31)<.22?42:0)-E*1.1;A.fillStyle=`rgb(${F|0},${F|0},${Math.min(255,F+12)|0})`,A.fillRect(x,k,1,1)}else E<32&&Fe(x,k,32)<(1-(E-26)/6)*.5&&(A.fillStyle="rgba(200,205,235,0.6)",A.fillRect(x,k,1,1))}const S=_i(new pr(m));S.colorSpace=xt;const w=new dr({map:S,fog:!1,depthWrite:!1,transparent:!0}),U=new Co(w),I=new O(.62,.5,.55).normalize();U.position.copy(I.multiplyScalar(840)),U.scale.setScalar(85),U.renderOrder=-8,g.add(U);const P=new Co(new dr({map:S,fog:!1,depthWrite:!1,transparent:!0,opacity:.12,blending:bs}));P.position.copy(U.position),P.scale.setScalar(170),P.renderOrder=-9,g.add(P)}return fetch("/assets/skybox.png",{method:"HEAD"}).then(m=>{!m.ok||!m.headers.get("content-type")?.startsWith("image")||new jo().load("/assets/skybox.png",A=>{_i(A),A.colorSpace=xt,_.map=A,_.needsUpdate=!0,console.log("[sky] using assets/skybox.png override")})}).catch(()=>{}),g}function Wh(s,e){if(e===ud)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Rc||e===Au){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Rc)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Jv extends Bn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ix(t)}),this.register(function(t){return new sx(t)}),this.register(function(t){return new dx(t)}),this.register(function(t){return new px(t)}),this.register(function(t){return new mx(t)}),this.register(function(t){return new ox(t)}),this.register(function(t){return new ax(t)}),this.register(function(t){return new cx(t)}),this.register(function(t){return new lx(t)}),this.register(function(t){return new nx(t)}),this.register(function(t){return new hx(t)}),this.register(function(t){return new rx(t)}),this.register(function(t){return new fx(t)}),this.register(function(t){return new ux(t)}),this.register(function(t){return new ex(t)}),this.register(function(t){return new gx(t)}),this.register(function(t){return new _x(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=As.extractUrlBase(e);o=As.resolveURL(l,this.path)}else o=As.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Xo(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===tf){try{o[ot.KHR_BINARY_GLTF]=new vx(e)}catch(h){i&&i(h);return}r=JSON.parse(o[ot.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Ix(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case ot.KHR_MATERIALS_UNLIT:o[h]=new tx;break;case ot.KHR_DRACO_MESH_COMPRESSION:o[h]=new xx(r,this.dracoLoader);break;case ot.KHR_TEXTURE_TRANSFORM:o[h]=new yx;break;case ot.KHR_MESH_QUANTIZATION:o[h]=new Mx;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function Qv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class ex{constructor(e){this.parser=e,this.name=ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new xe(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],$t);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new fl(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Oc(u),l.distance=h;break;case"spot":l=new Qu(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Kn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class tx{constructor(){this.name=ot.KHR_MATERIALS_UNLIT}getMaterialType(){return Zt}extendParams(e,t,n){const i=[];e.color=new xe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],$t),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,xt))}return Promise.all(i)}}class nx{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class ix{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Xe(a,a)}return Promise.all(r)}}class sx{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class rx{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class ox{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new xe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],$t)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,xt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class ax{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class cx{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new xe().setRGB(a[0],a[1],a[2],$t),Promise.all(r)}}class lx{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class hx{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new xe().setRGB(a[0],a[1],a[2],$t),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,xt)),Promise.all(r)}}class ux{constructor(e){this.parser=e,this.name=ot.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class fx{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class dx{constructor(e){this.parser=e,this.name=ot.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class px{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class mx{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class gx{constructor(e){this.name=ot.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class _x{constructor(e){this.name=ot.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==_n.TRIANGLES&&l.mode!==_n.TRIANGLE_STRIP&&l.mode!==_n.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,d=[];for(const _ of h){const v=new be,g=new O,m=new wt,A=new O(1,1,1),S=new ir(_.geometry,_.material,f);for(let w=0;w<f;w++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,w),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,w),c.SCALE&&A.fromBufferAttribute(c.SCALE,w),S.setMatrixAt(w,v.compose(g,m,A));for(const w in c)if(w==="_COLOR_0"){const U=c[w];S.instanceColor=new Ic(U.array,U.itemSize,U.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&_.geometry.setAttribute(w,c[w]);vt.prototype.copy.call(S,_),this.parser.assignFinalMaterial(S),d.push(S)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const tf="glTF",Qs=12,$h={JSON:1313821514,BIN:5130562};class vx{constructor(e){this.name=ot.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Qs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==tf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Qs,r=new DataView(e,Qs);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===$h.JSON){const l=new Uint8Array(e,Qs+o,a);this.content=n.decode(l)}else if(c===$h.BIN){const l=Qs+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class xx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ot.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=Fc[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Fc[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=Ts[f.componentType];l[h]=d.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(const _ in d.attributes){const v=d.attributes[_],g=c[_];g!==void 0&&(v.normalized=g)}h(d)},a,l,$t,f)})})}}class yx{constructor(){this.name=ot.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Mx{constructor(){this.name=ot.KHR_MESH_QUANTIZATION}}class nf extends yr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,_=e*l,v=_-l,g=-2*d+3*f,m=d-f,A=1-g,S=m-f+h;for(let w=0;w!==a;w++){const U=o[v+w+a],I=o[v+w+c]*u,P=o[_+w+a],k=o[_+w]*u;r[w]=A*U+S*I+g*P+m*k}return r}}const Sx=new wt;class Ex extends nf{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Sx.fromArray(r).normalize().toArray(r),r}}const _n={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ts={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Xh={9728:Vt,9729:un,9984:mu,9985:uo,9986:ms,9987:Zn},jh={33071:On,33648:wo,10497:Fn},za={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Fc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ci={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},wx={CUBICSPLINE:void 0,LINEAR:hr,STEP:lr},ka={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ax(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ll({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Qn})),s.DefaultMaterial}function Ci(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Kn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Tx(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],f=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function bx(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Rx(s){let e;const t=s.extensions&&s.extensions[ot.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ha(t.attributes):e=s.indices+":"+Ha(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Ha(s.targets[n]);return e}function Ha(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Bc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Cx(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Px=new be;class Ix{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Qv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new jo(this.options.manager):this.textureLoader=new Iv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Xo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ci(r,a,i),Kn(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())r(u,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ot.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(As.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=za[i.type],a=Ts[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Nt(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=za[i.type],l=Ts[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let v,g;if(d&&d!==h){const m=Math.floor(f/d),A="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let S=t.cache.get(A);S||(v=new l(a,m*d,i.count*d/u),S=new Gu(v,d/u),t.cache.add(A,S)),g=new fr(S,c,f%d/u,_)}else a===null?v=new l(i.count*c):v=new l(a,f,i.count*c),g=new Nt(v,c,_);if(i.sparse!==void 0){const m=za.SCALAR,A=Ts[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,w=i.sparse.values.byteOffset||0,U=new A(o[1],S,i.sparse.count*m),I=new l(o[2],w,i.sparse.count*c);a!==null&&(g=new Nt(g.array.slice(),g.itemSize,g.normalized));for(let P=0,k=U.length;P<k;P++){const x=U[P];if(g.setX(x,I[P*c]),c>=2&&g.setY(x,I[P*c+1]),c>=3&&g.setZ(x,I[P*c+2]),c>=4&&g.setW(x,I[P*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=Xh[f.magFilter]||un,u.minFilter=Xh[f.minFilter]||Zn,u.wrapS=jh[f.wrapS]||Fn,u.wrapT=jh[f.wrapT]||Fn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const f=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(f,d){let _=f;t.isImageBitmapLoader===!0&&(_=function(v){const g=new Ut(v);g.needsUpdate=!0,f(g)}),t.load(As.resolveURL(h,r.path),_,void 0,d)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),Kn(h,o),h.userData.mimeType=o.mimeType||Cx(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ot.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ot.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[ot.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new di,rn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Es,rn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ll}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[ot.KHR_MATERIALS_UNLIT]){const h=i[ot.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new xe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],$t),a.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,xt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=hn);const u=r.alphaMode||ka.OPAQUE;if(u===ka.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===ka.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Zt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Xe(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Zt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Zt){const h=r.emissiveFactor;a.emissive=new xe().setRGB(h[0],h[1],h[2],$t)}return r.emissiveTexture!==void 0&&o!==Zt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,xt)),Promise.all(l).then(function(){const h=new o(a);return r.name&&(h.name=r.name),Kn(h,r),t.associations.set(h,{materials:e}),r.extensions&&Ci(i,h,r),h})}createUniqueName(e){const t=lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return qh(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=Rx(l),h=i[u];if(h)o.push(h.promise);else{let f;l.extensions&&l.extensions[ot.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=qh(new Pt,l,t),i[u]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?Ax(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let d=0,_=u.length;d<_;d++){const v=u[d],g=o[d];let m;const A=l[d];if(g.mode===_n.TRIANGLES||g.mode===_n.TRIANGLE_STRIP||g.mode===_n.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new $u(v,A):new Et(v,A),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===_n.TRIANGLE_STRIP?m.geometry=Wh(m.geometry,Au):g.mode===_n.TRIANGLE_FAN&&(m.geometry=Wh(m.geometry,Rc));else if(g.mode===_n.LINES)m=new Lc(v,A);else if(g.mode===_n.LINE_STRIP)m=new Go(v,A);else if(g.mode===_n.LINE_LOOP)m=new Z_(v,A);else if(g.mode===_n.POINTS)m=new ws(v,A);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&bx(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Kn(m,r),g.extensions&&Ci(i,m,g),t.assignFinalMaterial(m),h.push(m)}for(let d=0,_=h.length;d<_;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&Ci(i,h[0],r),h[0];const f=new Wt;r.extensions&&Ci(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,_=h.length;d<_;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Yt(Kt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new xr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Kn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const f=new be;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Vo(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],_=i.samplers[d.sampler],v=d.target,g=v.node,m=i.parameters!==void 0?i.parameters[_.input]:_.input,A=i.parameters!==void 0?i.parameters[_.output]:_.output;v.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",A)),l.push(_),u.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],_=h[2],v=h[3],g=h[4],m=[];for(let A=0,S=f.length;A<S;A++){const w=f[A],U=d[A],I=_[A],P=v[A],k=g[A];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const x=n._createAnimationTracks(w,U,I,P,k);if(x)for(let E=0;E<x.length;E++)m.push(x[E])}return new Ju(r,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],f=l[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Px)});for(let d=0,_=h.length;d<_;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new Po:l.length>1?u=new Wt:l.length===1?u=l[0]:u=new vt,u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Kn(u,r),r.extensions&&Ci(n,u,r),r.matrix!==void 0){const h=new be;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Wt;n.name&&(r.name=i.createUniqueName(n.name)),Kn(r,n),n.extensions&&Ci(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof rn||f instanceof Ut)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];ci[r.path]===ci.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(ci[r.path]){case ci.weights:l=ki;break;case ci.rotation:l=yi;break;case ci.position:case ci.scale:l=Hi;break;default:switch(n.itemSize){case 1:l=ki;break;case 2:case 3:default:l=Hi;break}break}const u=i.interpolation!==void 0?wx[i.interpolation]:hr,h=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){const _=new l(c[f]+"."+ci[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Bc(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof yi?Ex:nf;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Lx(s,e,t){const n=e.attributes,i=new on;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new O(c[0],c[1],c[2]),new O(l[0],l[1],l[2])),a.normalized){const u=Bc(Ts[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new O,c=new O;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,_=f.max;if(d!==void 0&&_!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(_[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(_[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(_[2]))),f.normalized){const v=Bc(Ts[f.componentType]);c.multiplyScalar(v)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new zn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function qh(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=Fc[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return mt.workingColorSpace!==$t&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${mt.workingColorSpace}" not supported.`),Kn(s,e),Lx(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Tx(s,e.targets,t):s})}const Dx=/^[og]\s*(.+)?/,Ux=/^mtllib /,Nx=/^usemtl /,Ox=/^usemap /,Kh=/\s+/,Yh=new O,Va=new O,Zh=new O,Jh=new O,gn=new O,oo=new xe;function Fx(){const s={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,r){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:i||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){const l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),i&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){const i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const i=this.vertices,r=this.object.geometry.vertices;r.push(i[e+0],i[e+1],i[e+2]),r.push(i[t+0],i[t+1],i[t+2]),r.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const i=this.normals,r=this.object.geometry.normals;r.push(i[e+0],i[e+1],i[e+2]),r.push(i[t+0],i[t+1],i[t+2]),r.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(e,t,n){const i=this.vertices,r=this.object.geometry.normals;Yh.fromArray(i,e),Va.fromArray(i,t),Zh.fromArray(i,n),gn.subVectors(Zh,Va),Jh.subVectors(Yh,Va),gn.cross(Jh),gn.normalize(),r.push(gn.x,gn.y,gn.z),r.push(gn.x,gn.y,gn.z),r.push(gn.x,gn.y,gn.z)},addColor:function(e,t,n){const i=this.colors,r=this.object.geometry.colors;i[e]!==void 0&&r.push(i[e+0],i[e+1],i[e+2]),i[t]!==void 0&&r.push(i[t+0],i[t+1],i[t+2]),i[n]!==void 0&&r.push(i[n+0],i[n+1],i[n+2])},addUV:function(e,t,n){const i=this.uvs,r=this.object.geometry.uvs;r.push(i[e+0],i[e+1]),r.push(i[t+0],i[t+1]),r.push(i[n+0],i[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,i,r,o,a,c,l){const u=this.vertices.length;let h=this.parseVertexIndex(e,u),f=this.parseVertexIndex(t,u),d=this.parseVertexIndex(n,u);if(this.addVertex(h,f,d),this.addColor(h,f,d),a!==void 0&&a!==""){const _=this.normals.length;h=this.parseNormalIndex(a,_),f=this.parseNormalIndex(c,_),d=this.parseNormalIndex(l,_),this.addNormal(h,f,d)}else this.addFaceNormal(h,f,d);if(i!==void 0&&i!==""){const _=this.uvs.length;h=this.parseUVIndex(i,_),f=this.parseUVIndex(r,_),d=this.parseUVIndex(o,_),this.addUV(h,f,d),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,i=e.length;n<i;n++){const r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,i=this.uvs.length;for(let r=0,o=e.length;r<o;r++)this.addVertexLine(this.parseVertexIndex(e[r],n));for(let r=0,o=t.length;r<o;r++)this.addUVLine(this.parseUVIndex(t[r],i))}};return s.startObject("",!1),s}class Bx extends Bn{constructor(e){super(e),this.materials=null}load(e,t,n,i){const r=this,o=new Xo(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}setMaterials(e){return this.materials=e,this}parse(e){const t=new Fx;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let i=[];for(let a=0,c=n.length;a<c;a++){const l=n[a].trimStart();if(l.length===0)continue;const u=l.charAt(0);if(u!=="#")if(u==="v"){const h=l.split(Kh);switch(h[0]){case"v":t.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),h.length>=7?(oo.setRGB(parseFloat(h[4]),parseFloat(h[5]),parseFloat(h[6])).convertSRGBToLinear(),t.colors.push(oo.r,oo.g,oo.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));break;case"vt":t.uvs.push(parseFloat(h[1]),parseFloat(h[2]));break}}else if(u==="f"){const f=l.slice(1).trim().split(Kh),d=[];for(let v=0,g=f.length;v<g;v++){const m=f[v];if(m.length>0){const A=m.split("/");d.push(A)}}const _=d[0];for(let v=1,g=d.length-1;v<g;v++){const m=d[v],A=d[v+1];t.addFace(_[0],m[0],A[0],_[1],m[1],A[1],_[2],m[2],A[2])}}else if(u==="l"){const h=l.substring(1).trim().split(" ");let f=[];const d=[];if(l.indexOf("/")===-1)f=h;else for(let _=0,v=h.length;_<v;_++){const g=h[_].split("/");g[0]!==""&&f.push(g[0]),g[1]!==""&&d.push(g[1])}t.addLineGeometry(f,d)}else if(u==="p"){const f=l.slice(1).trim().split(" ");t.addPointGeometry(f)}else if((i=Dx.exec(l))!==null){const h=(" "+i[0].slice(1).trim()).slice(1);t.startObject(h)}else if(Nx.test(l))t.object.startMaterial(l.substring(7).trim(),t.materialLibraries);else if(Ux.test(l))t.materialLibraries.push(l.substring(7).trim());else if(Ox.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(i=l.split(" "),i.length>1){const f=i[1].trim().toLowerCase();t.object.smooth=f!=="0"&&f!=="off"}else t.object.smooth=!0;const h=t.object.currentMaterial();h&&(h.smooth=t.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}t.finalize();const r=new Wt;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,c=t.objects.length;a<c;a++){const l=t.objects[a],u=l.geometry,h=l.materials,f=u.type==="Line",d=u.type==="Points";let _=!1;if(u.vertices.length===0)continue;const v=new Pt;v.setAttribute("position",new gt(u.vertices,3)),u.normals.length>0&&v.setAttribute("normal",new gt(u.normals,3)),u.colors.length>0&&(_=!0,v.setAttribute("color",new gt(u.colors,3))),u.hasUVIndices===!0&&v.setAttribute("uv",new gt(u.uvs,2));const g=[];for(let A=0,S=h.length;A<S;A++){const w=h[A],U=w.name+"_"+w.smooth+"_"+_;let I=t.materials[U];if(this.materials!==null){if(I=this.materials.create(w.name),f&&I&&!(I instanceof Es)){const P=new Es;rn.prototype.copy.call(P,I),P.color.copy(I.color),I=P}else if(d&&I&&!(I instanceof di)){const P=new di({size:10,sizeAttenuation:!1});rn.prototype.copy.call(P,I),P.color.copy(I.color),P.map=I.map,I=P}}I===void 0&&(f?I=new Es:d?I=new di({size:1,sizeAttenuation:!1}):I=new xo,I.name=w.name,I.flatShading=!w.smooth,I.vertexColors=_,t.materials[U]=I),g.push(I)}let m;if(g.length>1){for(let A=0,S=h.length;A<S;A++){const w=h[A];v.addGroup(w.groupStart,w.groupCount,A)}f?m=new Lc(v,g):d?m=new ws(v,g):m=new Et(v,g)}else f?m=new Lc(v,g[0]):d?m=new ws(v,g[0]):m=new Et(v,g[0]);m.name=l.name,r.add(m)}else if(t.vertices.length>0){const a=new di({size:1,sizeAttenuation:!1}),c=new Pt;c.setAttribute("position",new gt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(c.setAttribute("color",new gt(t.colors,3)),a.vertexColors=!0);const l=new ws(c,a);r.add(l)}return r}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var vn=Uint8Array,xs=Uint16Array,zx=Int32Array,sf=new vn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),rf=new vn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),kx=new vn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),of=function(s,e){for(var t=new xs(31),n=0;n<31;++n)t[n]=e+=1<<s[n-1];for(var i=new zx(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)i[r]=r-t[n]<<5|n;return{b:t,r:i}},af=of(sf,2),cf=af.b,Hx=af.r;cf[28]=258,Hx[258]=28;var Vx=of(rf,0),Gx=Vx.b,zc=new xs(32768);for(var St=0;St<32768;++St){var li=(St&43690)>>1|(St&21845)<<1;li=(li&52428)>>2|(li&13107)<<2,li=(li&61680)>>4|(li&3855)<<4,zc[St]=((li&65280)>>8|(li&255)<<8)>>1}var ar=function(s,e,t){for(var n=s.length,i=0,r=new xs(e);i<n;++i)s[i]&&++r[s[i]-1];var o=new xs(e);for(i=1;i<e;++i)o[i]=o[i-1]+r[i-1]<<1;var a;if(t){a=new xs(1<<e);var c=15-e;for(i=0;i<n;++i)if(s[i])for(var l=i<<4|s[i],u=e-s[i],h=o[s[i]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)a[zc[h]>>c]=l}else for(a=new xs(n),i=0;i<n;++i)s[i]&&(a[i]=zc[o[s[i]-1]++]>>15-s[i]);return a},Mr=new vn(288);for(var St=0;St<144;++St)Mr[St]=8;for(var St=144;St<256;++St)Mr[St]=9;for(var St=256;St<280;++St)Mr[St]=7;for(var St=280;St<288;++St)Mr[St]=8;var lf=new vn(32);for(var St=0;St<32;++St)lf[St]=5;var Wx=ar(Mr,9,1),$x=ar(lf,5,1),Ga=function(s){for(var e=s[0],t=1;t<s.length;++t)s[t]>e&&(e=s[t]);return e},wn=function(s,e,t){var n=e/8|0;return(s[n]|s[n+1]<<8)>>(e&7)&t},Wa=function(s,e){var t=e/8|0;return(s[t]|s[t+1]<<8|s[t+2]<<16)>>(e&7)},Xx=function(s){return(s+7)/8|0},jx=function(s,e,t){return(t==null||t>s.length)&&(t=s.length),new vn(s.subarray(e,t))},qx=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Tn=function(s,e,t){var n=new Error(e||qx[s]);if(n.code=s,Error.captureStackTrace&&Error.captureStackTrace(n,Tn),!t)throw n;return n},Kx=function(s,e,t,n){var i=s.length,r=0;if(!i||e.f&&!e.l)return t||new vn(0);var o=!t,a=o||e.i!=2,c=e.i;o&&(t=new vn(i*3));var l=function(ct){var D=t.length;if(ct>D){var ve=new vn(Math.max(D*2,ct));ve.set(t),t=ve}},u=e.f||0,h=e.p||0,f=e.b||0,d=e.l,_=e.d,v=e.m,g=e.n,m=i*8;do{if(!d){u=wn(s,h,1);var A=wn(s,h+1,3);if(h+=3,A)if(A==1)d=Wx,_=$x,v=9,g=5;else if(A==2){var I=wn(s,h,31)+257,P=wn(s,h+10,15)+4,k=I+wn(s,h+5,31)+1;h+=14;for(var x=new vn(k),E=new vn(19),C=0;C<P;++C)E[kx[C]]=wn(s,h+C*3,7);h+=P*3;for(var F=Ga(E),B=(1<<F)-1,X=ar(E,F,1),C=0;C<k;){var K=X[wn(s,h,B)];h+=K&15;var S=K>>4;if(S<16)x[C++]=S;else{var H=0,L=0;for(S==16?(L=3+wn(s,h,3),h+=2,H=x[C-1]):S==17?(L=3+wn(s,h,7),h+=3):S==18&&(L=11+wn(s,h,127),h+=7);L--;)x[C++]=H}}var $=x.subarray(0,I),ee=x.subarray(I);v=Ga($),g=Ga(ee),d=ar($,v,1),_=ar(ee,g,1)}else Tn(1);else{var S=Xx(h)+4,w=s[S-4]|s[S-3]<<8,U=S+w;if(U>i){c&&Tn(0);break}a&&l(f+w),t.set(s.subarray(S,U),f),e.b=f+=w,e.p=h=U*8,e.f=u;continue}if(h>m){c&&Tn(0);break}}a&&l(f+131072);for(var he=(1<<v)-1,pe=(1<<g)-1,Be=h;;Be=h){var H=d[Wa(s,h)&he],Ke=H>>4;if(h+=H&15,h>m){c&&Tn(0);break}if(H||Tn(2),Ke<256)t[f++]=Ke;else if(Ke==256){Be=h,d=null;break}else{var J=Ke-254;if(Ke>264){var C=Ke-257,le=sf[C];J=wn(s,h,(1<<le)-1)+cf[C],h+=le}var we=_[Wa(s,h)&pe],ye=we>>4;we||Tn(3),h+=we&15;var ee=Gx[ye];if(ye>3){var le=rf[ye];ee+=Wa(s,h)&(1<<le)-1,h+=le}if(h>m){c&&Tn(0);break}a&&l(f+131072);var We=f+J;if(f<ee){var Ye=r-ee,je=Math.min(ee,We);for(Ye+f<0&&Tn(3);f<je;++f)t[f]=n[Ye+f]}for(;f<We;++f)t[f]=t[f-ee]}}e.l=d,e.p=Be,e.b=f,e.f=u,d&&(u=1,e.m=v,e.d=_,e.n=g)}while(!u);return f!=t.length&&o?jx(t,0,f):t.subarray(0,f)},Yx=new vn(0),Zx=function(s,e){return((s[0]&15)!=8||s[0]>>4>7||(s[0]<<8|s[1])%31)&&Tn(6,"invalid zlib data"),(s[1]>>5&1)==1&&Tn(6,"invalid zlib data: "+(s[1]&32?"need":"unexpected")+" dictionary"),(s[1]>>3&4)+2};function Jx(s,e){return Kx(s.subarray(Zx(s),-4),{i:2},e,e)}var Qx=typeof TextDecoder<"u"&&new TextDecoder,ey=0;try{Qx.decode(Yx,{stream:!0}),ey=1}catch{}function hf(s,e,t){const n=t.length-s-1;if(e>=t[n])return n-1;if(e<=t[s])return s;let i=s,r=n,o=Math.floor((i+r)/2);for(;e<t[o]||e>=t[o+1];)e<t[o]?r=o:i=o,o=Math.floor((i+r)/2);return o}function ty(s,e,t,n){const i=[],r=[],o=[];i[0]=1;for(let a=1;a<=t;++a){r[a]=e-n[s+1-a],o[a]=n[s+a]-e;let c=0;for(let l=0;l<a;++l){const u=o[l+1],h=r[a-l],f=i[l]/(u+h);i[l]=c+u*f,c=h*f}i[a]=c}return i}function ny(s,e,t,n){const i=hf(s,n,e),r=ty(i,n,s,e),o=new ut(0,0,0,0);for(let a=0;a<=s;++a){const c=t[i-s+a],l=r[a],u=c.w*l;o.x+=c.x*u,o.y+=c.y*u,o.z+=c.z*u,o.w+=c.w*l}return o}function iy(s,e,t,n,i){const r=[];for(let h=0;h<=t;++h)r[h]=0;const o=[];for(let h=0;h<=n;++h)o[h]=r.slice(0);const a=[];for(let h=0;h<=t;++h)a[h]=r.slice(0);a[0][0]=1;const c=r.slice(0),l=r.slice(0);for(let h=1;h<=t;++h){c[h]=e-i[s+1-h],l[h]=i[s+h]-e;let f=0;for(let d=0;d<h;++d){const _=l[d+1],v=c[h-d];a[h][d]=_+v;const g=a[d][h-1]/a[h][d];a[d][h]=f+_*g,f=v*g}a[h][h]=f}for(let h=0;h<=t;++h)o[0][h]=a[h][t];for(let h=0;h<=t;++h){let f=0,d=1;const _=[];for(let v=0;v<=t;++v)_[v]=r.slice(0);_[0][0]=1;for(let v=1;v<=n;++v){let g=0;const m=h-v,A=t-v;h>=v&&(_[d][0]=_[f][0]/a[A+1][m],g=_[d][0]*a[m][A]);const S=m>=-1?1:-m,w=h-1<=A?v-1:t-h;for(let I=S;I<=w;++I)_[d][I]=(_[f][I]-_[f][I-1])/a[A+1][m+I],g+=_[d][I]*a[m+I][A];h<=A&&(_[d][v]=-_[f][v-1]/a[A+1][h],g+=_[d][v]*a[h][A]),o[v][h]=g;const U=f;f=d,d=U}}let u=t;for(let h=1;h<=n;++h){for(let f=0;f<=t;++f)o[h][f]*=u;u*=t-h}return o}function sy(s,e,t,n,i){const r=i<s?i:s,o=[],a=hf(s,n,e),c=iy(a,n,s,r,e),l=[];for(let u=0;u<t.length;++u){const h=t[u].clone(),f=h.w;h.x*=f,h.y*=f,h.z*=f,l[u]=h}for(let u=0;u<=r;++u){const h=l[a-s].clone().multiplyScalar(c[u][0]);for(let f=1;f<=s;++f)h.add(l[a-s+f].clone().multiplyScalar(c[u][f]));o[u]=h}for(let u=r+1;u<=i+1;++u)o[u]=new ut(0,0,0);return o}function ry(s,e){let t=1;for(let i=2;i<=s;++i)t*=i;let n=1;for(let i=2;i<=e;++i)n*=i;for(let i=2;i<=s-e;++i)n*=i;return t/n}function oy(s){const e=s.length,t=[],n=[];for(let r=0;r<e;++r){const o=s[r];t[r]=new O(o.x,o.y,o.z),n[r]=o.w}const i=[];for(let r=0;r<e;++r){const o=t[r].clone();for(let a=1;a<=r;++a)o.sub(i[r-a].clone().multiplyScalar(ry(r,a)*n[a]));i[r]=o.divideScalar(n[0])}return i}function ay(s,e,t,n,i){const r=sy(s,e,t,n,i);return oy(r)}class cy extends J_{constructor(e,t,n,i,r){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=i||0,this.endKnot=r||this.knots.length-1;for(let o=0;o<n.length;++o){const a=n[o];this.controlPoints[o]=new ut(a.x,a.y,a.z,a.w)}}getPoint(e,t=new O){const n=t,i=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),r=ny(this.degree,this.knots,this.controlPoints,i);return r.w!==1&&r.divideScalar(r.w),n.set(r.x,r.y,r.z)}getTangent(e,t=new O){const n=t,i=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),r=ay(this.degree,this.knots,this.controlPoints,i,1);return n.copy(r[1]).normalize(),n}}let st,It,nn;class ly extends Bn{constructor(e){super(e)}load(e,t,n,i){const r=this,o=r.path===""?As.extractUrlBase(e):r.path,a=new Xo(this.manager);a.setPath(r.path),a.setResponseType("arraybuffer"),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(c){try{t(r.parse(c,o))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e,t){if(my(e))st=new py().parse(e);else{const i=pf(e);if(!gy(i))throw new Error("THREE.FBXLoader: Unknown format.");if(eu(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+eu(i));st=new dy().parse(i)}const n=new jo(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new hy(n,this.manager).parse(st)}}class hy{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){It=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),i=this.parseDeformers(),r=new uy().parse(i);return this.parseScene(i,r,n),nn}parseConnections(){const e=new Map;return"Connections"in st&&st.Connections.connections.forEach(function(n){const i=n[0],r=n[1],o=n[2];e.has(i)||e.set(i,{parents:[],children:[]});const a={ID:r,relationship:o};e.get(i).parents.push(a),e.has(r)||e.set(r,{parents:[],children:[]});const c={ID:i,relationship:o};e.get(r).children.push(c)}),e}parseImages(){const e={},t={};if("Video"in st.Objects){const n=st.Objects.Video;for(const i in n){const r=n[i],o=parseInt(i);if(e[o]=r.RelativeFilename||r.Filename,"Content"in r){const a=r.Content instanceof ArrayBuffer&&r.Content.byteLength>0,c=typeof r.Content=="string"&&r.Content!=="";if(a||c){const l=this.parseImage(n[i]);t[r.RelativeFilename||r.Filename]=l}}}}for(const n in e){const i=e[n];t[i]!==void 0?e[n]=t[i]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,i=n.slice(n.lastIndexOf(".")+1).toLowerCase();let r;switch(i){case"bmp":r="image/bmp";break;case"jpg":case"jpeg":r="image/jpeg";break;case"png":r="image/png";break;case"tif":r="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),r="image/tga";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof t=="string")return"data:"+r+";base64,"+t;{const o=new Uint8Array(t);return window.URL.createObjectURL(new Blob([o],{type:r}))}}parseTextures(e){const t=new Map;if("Texture"in st.Objects){const n=st.Objects.Texture;for(const i in n){const r=this.parseTexture(n[i],e);t.set(parseInt(i),r)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const i=e.WrapModeU,r=e.WrapModeV,o=i!==void 0?i.value:0,a=r!==void 0?r.value:0;if(n.wrapS=o===0?Fn:On,n.wrapT=a===0?Fn:On,"Scaling"in e){const c=e.Scaling.value;n.repeat.x=c[0],n.repeat.y=c[1]}if("Translation"in e){const c=e.Translation.value;n.offset.x=c[0],n.offset.y=c[1]}return n}loadTexture(e,t){const n=new Set(["tga","tif","tiff","exr","dds","hdr","ktx2"]),i=e.FileName.split(".").pop().toLowerCase(),r=n.has(i)?this.manager.getHandler(`.${i}`):this.textureLoader;if(!r)return console.warn(`FBXLoader: ${i.toUpperCase()} loader not found, creating placeholder texture for`,e.RelativeFilename),new Ut;const o=r.path;o||r.setPath(this.textureLoader.path);const a=It.get(e.id).children;let c;a!==void 0&&a.length>0&&t[a[0].ID]!==void 0&&(c=t[a[0].ID],(c.indexOf("blob:")===0||c.indexOf("data:")===0)&&r.setPath(void 0));const l=r.load(c);return r.setPath(o),l}parseMaterials(e){const t=new Map;if("Material"in st.Objects){const n=st.Objects.Material;for(const i in n){const r=this.parseMaterial(n[i],e);r!==null&&t.set(parseInt(i),r)}}return t}parseMaterial(e,t){const n=e.id,i=e.attrName;let r=e.ShadingModel;if(typeof r=="object"&&(r=r.value),!It.has(n))return null;const o=this.parseParameters(e,t,n);let a;switch(r.toLowerCase()){case"phong":a=new xo;break;case"lambert":a=new hl;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',r),a=new xo;break}return a.setValues(o),a.name=i,a}parseParameters(e,t,n){const i={};e.BumpFactor&&(i.bumpScale=e.BumpFactor.value),e.Diffuse?i.color=new xe().fromArray(e.Diffuse.value).convertSRGBToLinear():e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(i.color=new xe().fromArray(e.DiffuseColor.value).convertSRGBToLinear()),e.DisplacementFactor&&(i.displacementScale=e.DisplacementFactor.value),e.Emissive?i.emissive=new xe().fromArray(e.Emissive.value).convertSRGBToLinear():e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(i.emissive=new xe().fromArray(e.EmissiveColor.value).convertSRGBToLinear()),e.EmissiveFactor&&(i.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(i.opacity=parseFloat(e.Opacity.value)),i.opacity<1&&(i.transparent=!0),e.ReflectionFactor&&(i.reflectivity=e.ReflectionFactor.value),e.Shininess&&(i.shininess=e.Shininess.value),e.Specular?i.specular=new xe().fromArray(e.Specular.value).convertSRGBToLinear():e.SpecularColor&&e.SpecularColor.type==="Color"&&(i.specular=new xe().fromArray(e.SpecularColor.value).convertSRGBToLinear());const r=this;return It.get(n).children.forEach(function(o){const a=o.relationship;switch(a){case"Bump":i.bumpMap=r.getTexture(t,o.ID);break;case"Maya|TEX_ao_map":i.aoMap=r.getTexture(t,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=r.getTexture(t,o.ID),i.map!==void 0&&(i.map.colorSpace=xt);break;case"DisplacementColor":i.displacementMap=r.getTexture(t,o.ID);break;case"EmissiveColor":i.emissiveMap=r.getTexture(t,o.ID),i.emissiveMap!==void 0&&(i.emissiveMap.colorSpace=xt);break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=r.getTexture(t,o.ID);break;case"ReflectionColor":i.envMap=r.getTexture(t,o.ID),i.envMap!==void 0&&(i.envMap.mapping=Eo,i.envMap.colorSpace=xt);break;case"SpecularColor":i.specularMap=r.getTexture(t,o.ID),i.specularMap!==void 0&&(i.specularMap.colorSpace=xt);break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=r.getTexture(t,o.ID),i.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),i}getTexture(e,t){return"LayeredTexture"in st.Objects&&t in st.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=It.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in st.Objects){const n=st.Objects.Deformer;for(const i in n){const r=n[i],o=It.get(parseInt(i));if(r.attrType==="Skin"){const a=this.parseSkeleton(o,n);a.ID=i,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,e[i]=a}else if(r.attrType==="BlendShape"){const a={id:i};a.rawTargets=this.parseMorphTargets(o,n),a.id=i,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[i]=a}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(i){const r=t[i.ID];if(r.attrType!=="Cluster")return;const o={ID:i.ID,indices:[],weights:[],transformLink:new be().fromArray(r.TransformLink.a)};"Indexes"in r&&(o.indices=r.Indexes.a,o.weights=r.Weights.a),n.push(o)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let i=0;i<e.children.length;i++){const r=e.children[i],o=t[r.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=It.get(parseInt(r.ID)).children.filter(function(c){return c.relationship===void 0})[0].ID,n.push(a)}return n}parseScene(e,t,n){nn=new Wt;const i=this.parseModels(e.skeletons,t,n),r=st.Objects.Model,o=this;i.forEach(function(c){const l=r[c.ID];o.setLookAtProperties(c,l),It.get(c.ID).parents.forEach(function(h){const f=i.get(h.ID);f!==void 0&&f.add(c)}),c.parent===null&&nn.add(c)}),this.bindSkeleton(e.skeletons,t,i),this.addGlobalSceneSettings(),nn.traverse(function(c){if(c.userData.transformData){c.parent&&(c.userData.transformData.parentMatrix=c.parent.matrix,c.userData.transformData.parentMatrixWorld=c.parent.matrixWorld);const l=ff(c.userData.transformData);c.applyMatrix4(l),c.updateWorldMatrix()}});const a=new fy().parse();nn.children.length===1&&nn.children[0].isGroup&&(nn.children[0].animations=a,nn=nn.children[0]),nn.animations=a}parseModels(e,t,n){const i=new Map,r=st.Objects.Model;for(const o in r){const a=parseInt(o),c=r[o],l=It.get(a);let u=this.buildSkeleton(l,e,a,c.attrName);if(!u){switch(c.attrType){case"Camera":u=this.createCamera(l);break;case"Light":u=this.createLight(l);break;case"Mesh":u=this.createMesh(l,t,n);break;case"NurbsCurve":u=this.createCurve(l,t);break;case"LimbNode":case"Root":u=new Po;break;case"Null":default:u=new Wt;break}u.name=c.attrName?lt.sanitizeNodeName(c.attrName):"",u.userData.originalName=c.attrName,u.ID=a}this.getTransformData(u,c),i.set(a,u)}return i}buildSkeleton(e,t,n,i){let r=null;return e.parents.forEach(function(o){for(const a in t){const c=t[a];c.rawBones.forEach(function(l,u){if(l.ID===o.ID){const h=r;r=new Po,r.matrixWorld.copy(l.transformLink),r.name=i?lt.sanitizeNodeName(i):"",r.userData.originalName=i,r.ID=n,c.bones[u]=r,h!==null&&r.add(h)}})}}),r}createCamera(e){let t,n;if(e.children.forEach(function(i){const r=st.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new vt;else{let i=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(i=1);let r=1;n.NearPlane!==void 0&&(r=n.NearPlane.value/1e3);let o=1e3;n.FarPlane!==void 0&&(o=n.FarPlane.value/1e3);let a=window.innerWidth,c=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(a=n.AspectWidth.value,c=n.AspectHeight.value);const l=a/c;let u=45;n.FieldOfView!==void 0&&(u=n.FieldOfView.value);const h=n.FocalLength?n.FocalLength.value:null;switch(i){case 0:t=new Yt(u,l,r,o),h!==null&&t.setFocalLength(h);break;case 1:t=new xr(-a/2,a/2,c/2,-c/2,r,o);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),t=new vt;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(i){const r=st.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new vt;else{let i;n.LightType===void 0?i=0:i=n.LightType.value;let r=16777215;n.Color!==void 0&&(r=new xe().fromArray(n.Color.value).convertSRGBToLinear());let o=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(o=0);let a=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?a=0:a=n.FarAttenuationEnd.value);const c=1;switch(i){case 0:t=new Oc(r,o,a,c);break;case 1:t=new fl(r,o);break;case 2:let l=Math.PI/3;n.InnerAngle!==void 0&&(l=Kt.degToRad(n.InnerAngle.value));let u=0;n.OuterAngle!==void 0&&(u=Kt.degToRad(n.OuterAngle.value),u=Math.max(u,1)),t=new Qu(r,o,a,l,u,c);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new Oc(r,o);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let i,r=null,o=null;const a=[];return e.children.forEach(function(c){t.has(c.ID)&&(r=t.get(c.ID)),n.has(c.ID)&&a.push(n.get(c.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new xo({name:Bn.DEFAULT_MATERIAL_NAME,color:13421772}),a.push(o)),"color"in r.attributes&&a.forEach(function(c){c.vertexColors=!0}),r.FBX_Deformer?(i=new $u(r,o),i.normalizeSkinWeights()):i=new Et(r,o),i}createCurve(e,t){const n=e.children.reduce(function(r,o){return t.has(o.ID)&&(r=t.get(o.ID)),r},null),i=new Es({name:Bn.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new Go(n,i)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=df(t.RotationOrder.value):n.eulerOrder="ZYX","Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&It.get(e.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const r=st.Objects.Model[i.ID];if("Lcl_Translation"in r){const o=r.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(o),nn.add(e.target)):e.lookAt(new O().fromArray(o))}}})}bindSkeleton(e,t,n){const i=this.parsePoseNodes();for(const r in e){const o=e[r];It.get(parseInt(o.ID)).parents.forEach(function(c){if(t.has(c.ID)){const l=c.ID;It.get(l).parents.forEach(function(h){n.has(h.ID)&&n.get(h.ID).bind(new Vo(o.bones),i[h.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in st.Objects){const t=st.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const i=t[n].PoseNode;Array.isArray(i)?i.forEach(function(r){e[r.Node]=new be().fromArray(r.Matrix.a)}):e[i.Node]=new be().fromArray(i.Matrix.a)}}return e}addGlobalSceneSettings(){if("GlobalSettings"in st){if("AmbientColor"in st.GlobalSettings){const e=st.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],i=e[2];if(t!==0||n!==0||i!==0){const r=new xe(t,n,i).convertSRGBToLinear();nn.add(new ef(r,1))}}"UnitScaleFactor"in st.GlobalSettings&&(nn.userData.unitScaleFactor=st.GlobalSettings.UnitScaleFactor.value)}}}class uy{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in st.Objects){const n=st.Objects.Geometry;for(const i in n){const r=It.get(parseInt(i)),o=this.parseGeometry(r,n[i],e);t.set(parseInt(i),o)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const i=n.skeletons,r=[],o=e.parents.map(function(h){return st.Objects.Model[h.ID]});if(o.length===0)return;const a=e.children.reduce(function(h,f){return i[f.ID]!==void 0&&(h=i[f.ID]),h},null);e.children.forEach(function(h){n.morphTargets[h.ID]!==void 0&&r.push(n.morphTargets[h.ID])});const c=o[0],l={};"RotationOrder"in c&&(l.eulerOrder=df(c.RotationOrder.value)),"InheritType"in c&&(l.inheritType=parseInt(c.InheritType.value)),"GeometricTranslation"in c&&(l.translation=c.GeometricTranslation.value),"GeometricRotation"in c&&(l.rotation=c.GeometricRotation.value),"GeometricScaling"in c&&(l.scale=c.GeometricScaling.value);const u=ff(l);return this.genGeometry(t,a,r,u)}genGeometry(e,t,n,i){const r=new Pt;e.attrName&&(r.name=e.attrName);const o=this.parseGeoNode(e,t),a=this.genBuffers(o),c=new gt(a.vertex,3);if(c.applyMatrix4(i),r.setAttribute("position",c),a.colors.length>0&&r.setAttribute("color",new gt(a.colors,3)),t&&(r.setAttribute("skinIndex",new nl(a.weightsIndices,4)),r.setAttribute("skinWeight",new gt(a.vertexWeights,4)),r.FBX_Deformer=t),a.normal.length>0){const l=new tt().getNormalMatrix(i),u=new gt(a.normal,3);u.applyNormalMatrix(l),r.setAttribute("normal",u)}if(a.uvs.forEach(function(l,u){const h=u===0?"uv":`uv${u}`;r.setAttribute(h,new gt(a.uvs[u],2))}),o.material&&o.material.mappingType!=="AllSame"){let l=a.materialIndex[0],u=0;if(a.materialIndex.forEach(function(h,f){h!==l&&(r.addGroup(u,f-u,l),l=h,u=f)}),r.groups.length>0){const h=r.groups[r.groups.length-1],f=h.start+h.count;f!==a.materialIndex.length&&r.addGroup(f,a.materialIndex.length-f,l)}r.groups.length===0&&r.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(r,e,n,i),r}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let i=0;for(;e.LayerElementUV[i];)e.LayerElementUV[i].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[i])),i++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(i,r){i.indices.forEach(function(o,a){n.weightTable[o]===void 0&&(n.weightTable[o]=[]),n.weightTable[o].push({id:r,weight:i.weights[a]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,i=0,r=!1,o=[],a=[],c=[],l=[],u=[],h=[];const f=this;return e.vertexIndices.forEach(function(d,_){let v,g=!1;d<0&&(d=d^-1,g=!0);let m=[],A=[];if(o.push(d*3,d*3+1,d*3+2),e.color){const S=ao(_,n,d,e.color);c.push(S[0],S[1],S[2])}if(e.skeleton){if(e.weightTable[d]!==void 0&&e.weightTable[d].forEach(function(S){A.push(S.weight),m.push(S.id)}),A.length>4){r||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),r=!0);const S=[0,0,0,0],w=[0,0,0,0];A.forEach(function(U,I){let P=U,k=m[I];w.forEach(function(x,E,C){if(P>x){C[E]=P,P=x;const F=S[E];S[E]=k,k=F}})}),m=S,A=w}for(;A.length<4;)A.push(0),m.push(0);for(let S=0;S<4;++S)u.push(A[S]),h.push(m[S])}if(e.normal){const S=ao(_,n,d,e.normal);a.push(S[0],S[1],S[2])}e.material&&e.material.mappingType!=="AllSame"&&(v=ao(_,n,d,e.material)[0],v<0&&(f.negativeMaterialIndices=!0,v=0)),e.uv&&e.uv.forEach(function(S,w){const U=ao(_,n,d,S);l[w]===void 0&&(l[w]=[]),l[w].push(U[0]),l[w].push(U[1])}),i++,g&&(f.genFace(t,e,o,v,a,c,l,u,h,i),n++,i=0,o=[],a=[],c=[],l=[],u=[],h=[])}),t}getNormalNewell(e){const t=new O(0,0,0);for(let n=0;n<e.length;n++){const i=e[n],r=e[(n+1)%e.length];t.x+=(i.y-r.y)*(i.z+r.z),t.y+=(i.z-r.z)*(i.x+r.x),t.z+=(i.x-r.x)*(i.y+r.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){const t=this.getNormalNewell(e),i=(Math.abs(t.z)>.5?new O(0,1,0):new O(0,0,1)).cross(t).normalize(),r=t.clone().cross(i).normalize();return{normal:t,tangent:i,bitangent:r}}flattenVertex(e,t,n){return new Xe(e.dot(t),e.dot(n))}genFace(e,t,n,i,r,o,a,c,l,u){let h;if(u>3){const f=[],d=t.baseVertexPositions||t.vertexPositions;for(let m=0;m<n.length;m+=3)f.push(new O(d[n[m]],d[n[m+1]],d[n[m+2]]));const{tangent:_,bitangent:v}=this.getNormalTangentAndBitangent(f),g=[];for(const m of f)g.push(this.flattenVertex(m,_,v));h=al.triangulateShape(g,[])}else h=[[0,1,2]];for(const[f,d,_]of h)e.vertex.push(t.vertexPositions[n[f*3]]),e.vertex.push(t.vertexPositions[n[f*3+1]]),e.vertex.push(t.vertexPositions[n[f*3+2]]),e.vertex.push(t.vertexPositions[n[d*3]]),e.vertex.push(t.vertexPositions[n[d*3+1]]),e.vertex.push(t.vertexPositions[n[d*3+2]]),e.vertex.push(t.vertexPositions[n[_*3]]),e.vertex.push(t.vertexPositions[n[_*3+1]]),e.vertex.push(t.vertexPositions[n[_*3+2]]),t.skeleton&&(e.vertexWeights.push(c[f*4]),e.vertexWeights.push(c[f*4+1]),e.vertexWeights.push(c[f*4+2]),e.vertexWeights.push(c[f*4+3]),e.vertexWeights.push(c[d*4]),e.vertexWeights.push(c[d*4+1]),e.vertexWeights.push(c[d*4+2]),e.vertexWeights.push(c[d*4+3]),e.vertexWeights.push(c[_*4]),e.vertexWeights.push(c[_*4+1]),e.vertexWeights.push(c[_*4+2]),e.vertexWeights.push(c[_*4+3]),e.weightsIndices.push(l[f*4]),e.weightsIndices.push(l[f*4+1]),e.weightsIndices.push(l[f*4+2]),e.weightsIndices.push(l[f*4+3]),e.weightsIndices.push(l[d*4]),e.weightsIndices.push(l[d*4+1]),e.weightsIndices.push(l[d*4+2]),e.weightsIndices.push(l[d*4+3]),e.weightsIndices.push(l[_*4]),e.weightsIndices.push(l[_*4+1]),e.weightsIndices.push(l[_*4+2]),e.weightsIndices.push(l[_*4+3])),t.color&&(e.colors.push(o[f*3]),e.colors.push(o[f*3+1]),e.colors.push(o[f*3+2]),e.colors.push(o[d*3]),e.colors.push(o[d*3+1]),e.colors.push(o[d*3+2]),e.colors.push(o[_*3]),e.colors.push(o[_*3+1]),e.colors.push(o[_*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(i),e.materialIndex.push(i),e.materialIndex.push(i)),t.normal&&(e.normal.push(r[f*3]),e.normal.push(r[f*3+1]),e.normal.push(r[f*3+2]),e.normal.push(r[d*3]),e.normal.push(r[d*3+1]),e.normal.push(r[d*3+2]),e.normal.push(r[_*3]),e.normal.push(r[_*3+1]),e.normal.push(r[_*3+2])),t.uv&&t.uv.forEach(function(v,g){e.uvs[g]===void 0&&(e.uvs[g]=[]),e.uvs[g].push(a[g][f*2]),e.uvs[g].push(a[g][f*2+1]),e.uvs[g].push(a[g][d*2]),e.uvs[g].push(a[g][d*2+1]),e.uvs[g].push(a[g][_*2]),e.uvs[g].push(a[g][_*2+1])})}addMorphTargets(e,t,n,i){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const r=this;n.forEach(function(o){o.rawTargets.forEach(function(a){const c=st.Objects.Geometry[a.geoID];c!==void 0&&r.genMorphGeometry(e,t,c,i,a.name)})})}genMorphGeometry(e,t,n,i,r){const o=t.Vertices!==void 0?t.Vertices.a:[],a=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],c=n.Vertices!==void 0?n.Vertices.a:[],l=n.Indexes!==void 0?n.Indexes.a:[],u=e.attributes.position.count*3,h=new Float32Array(u);for(let v=0;v<l.length;v++){const g=l[v]*3;h[g]=c[v*3],h[g+1]=c[v*3+1],h[g+2]=c[v*3+2]}const f={vertexIndices:a,vertexPositions:h,baseVertexPositions:o},d=this.genBuffers(f),_=new gt(d.vertex,3);_.name=r||n.attrName,_.applyMatrix4(i),e.morphAttributes.position.push(_)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Normals.a;let r=[];return n==="IndexToDirect"&&("NormalIndex"in e?r=e.NormalIndex.a:"NormalsIndex"in e&&(r=e.NormalsIndex.a)),{dataSize:3,buffer:i,indices:r,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.UV.a;let r=[];return n==="IndexToDirect"&&(r=e.UVIndex.a),{dataSize:2,buffer:i,indices:r,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Colors.a;let r=[];n==="IndexToDirect"&&(r=e.ColorIndex.a);for(let o=0,a=new xe;o<i.length;o+=4)a.fromArray(i,o).convertSRGBToLinear().toArray(i,o);return{dataSize:4,buffer:i,indices:r,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const i=e.Materials.a,r=[];for(let o=0;o<i.length;++o)r.push(o);return{dataSize:1,buffer:i,indices:r,mappingType:t,referenceType:n}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new Pt;const n=t-1,i=e.KnotVector.a,r=[],o=e.Points.a;for(let h=0,f=o.length;h<f;h+=4)r.push(new ut().fromArray(o,h));let a,c;if(e.Form==="Closed")r.push(r[0]);else if(e.Form==="Periodic"){a=n,c=i.length-1-a;for(let h=0;h<n;++h)r.push(r[h])}const u=new cy(n,i,r,a,c).getPoints(r.length*12);return new Pt().setFromPoints(u)}}class fy{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const i=t[n],r=this.addClip(i);e.push(r)}return e}parseClips(){if(st.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=st.Objects.AnimationCurveNode,t=new Map;for(const n in e){const i=e[n];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){const r={id:i.id,attr:i.attrName,curves:{}};t.set(r.id,r)}}return t}parseAnimationCurves(e){const t=st.Objects.AnimationCurve;for(const n in t){const i={id:t[n].id,times:t[n].KeyTime.a.map(_y),values:t[n].KeyValueFloat.a},r=It.get(i.id);if(r!==void 0){const o=r.parents[0].ID,a=r.parents[0].relationship;a.match(/X/)?e.get(o).curves.x=i:a.match(/Y/)?e.get(o).curves.y=i:a.match(/Z/)?e.get(o).curves.z=i:a.match(/DeformPercent/)&&e.has(o)&&(e.get(o).curves.morph=i)}}}parseAnimationLayers(e){const t=st.Objects.AnimationLayer,n=new Map;for(const i in t){const r=[],o=It.get(parseInt(i));o!==void 0&&(o.children.forEach(function(c,l){if(e.has(c.ID)){const u=e.get(c.ID);if(u.curves.x!==void 0||u.curves.y!==void 0||u.curves.z!==void 0){if(r[l]===void 0){const h=It.get(c.ID).parents.filter(function(f){return f.relationship!==void 0})[0].ID;if(h!==void 0){const f=st.Objects.Model[h.toString()];if(f===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",c);return}const d={modelName:f.attrName?lt.sanitizeNodeName(f.attrName):"",ID:f.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};nn.traverse(function(_){_.ID===f.id&&(d.transform=_.matrix,_.userData.transformData&&(d.eulerOrder=_.userData.transformData.eulerOrder))}),d.transform||(d.transform=new be),"PreRotation"in f&&(d.preRotation=f.PreRotation.value),"PostRotation"in f&&(d.postRotation=f.PostRotation.value),r[l]=d}}r[l]&&(r[l][u.attr]=u)}else if(u.curves.morph!==void 0){if(r[l]===void 0){const h=It.get(c.ID).parents.filter(function(m){return m.relationship!==void 0})[0].ID,f=It.get(h).parents[0].ID,d=It.get(f).parents[0].ID,_=It.get(d).parents[0].ID,v=st.Objects.Model[_],g={modelName:v.attrName?lt.sanitizeNodeName(v.attrName):"",morphName:st.Objects.Deformer[h].attrName};r[l]=g}r[l][u.attr]=u}}}),n.set(parseInt(i),r))}return n}parseAnimStacks(e){const t=st.Objects.AnimationStack,n={};for(const i in t){const r=It.get(parseInt(i)).children;r.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const o=e.get(r[0].ID);n[i]={name:t[i].attrName,layer:o}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(i){t=t.concat(n.generateTracks(i))}),new Ju(e.name,-1,t)}generateTracks(e){const t=[];let n=new O,i=new O;if(e.transform&&e.transform.decompose(n,new wt,i),n=n.toArray(),i=i.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const r=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");r!==void 0&&t.push(r)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const r=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder);r!==void 0&&t.push(r)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const r=this.generateVectorTrack(e.modelName,e.S.curves,i,"scale");r!==void 0&&t.push(r)}if(e.DeformPercent!==void 0){const r=this.generateMorphTrack(e);r!==void 0&&t.push(r)}return t}generateVectorTrack(e,t,n,i){const r=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(r,t,n);return new Hi(e+"."+i,r,o)}generateRotationTrack(e,t,n,i,r){let o,a;if(t.x!==void 0&&t.y!==void 0&&t.z!==void 0){const h=this.interpolateRotations(t.x,t.y,t.z,r);o=h[0],a=h[1]}n!==void 0&&(n=n.map(Kt.degToRad),n.push(r),n=new Ct().fromArray(n),n=new wt().setFromEuler(n)),i!==void 0&&(i=i.map(Kt.degToRad),i.push(r),i=new Ct().fromArray(i),i=new wt().setFromEuler(i).invert());const c=new wt,l=new Ct,u=[];if(!a||!o)return new yi(e+".quaternion",[0],[0]);for(let h=0;h<a.length;h+=3)l.set(a[h],a[h+1],a[h+2],r),c.setFromEuler(l),n!==void 0&&c.premultiply(n),i!==void 0&&c.multiply(i),h>2&&new wt().fromArray(u,(h-3)/3*4).dot(c)<0&&c.set(-c.x,-c.y,-c.z,-c.w),c.toArray(u,h/3*4);return new yi(e+".quaternion",o,u)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(r){return r/100}),i=nn.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new ki(e.modelName+".morphTargetInfluences["+i+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,i){return n-i}),t.length>1){let n=1,i=t[0];for(let r=1;r<t.length;r++){const o=t[r];o!==i&&(t[n]=o,i=o,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const i=n,r=[];let o=-1,a=-1,c=-1;return e.forEach(function(l){if(t.x&&(o=t.x.times.indexOf(l)),t.y&&(a=t.y.times.indexOf(l)),t.z&&(c=t.z.times.indexOf(l)),o!==-1){const u=t.x.values[o];r.push(u),i[0]=u}else r.push(i[0]);if(a!==-1){const u=t.y.values[a];r.push(u),i[1]=u}else r.push(i[1]);if(c!==-1){const u=t.z.values[c];r.push(u),i[2]=u}else r.push(i[2])}),r}interpolateRotations(e,t,n,i){const r=[],o=[];r.push(e.times[0]),o.push(Kt.degToRad(e.values[0])),o.push(Kt.degToRad(t.values[0])),o.push(Kt.degToRad(n.values[0]));for(let a=1;a<e.values.length;a++){const c=[e.values[a-1],t.values[a-1],n.values[a-1]];if(isNaN(c[0])||isNaN(c[1])||isNaN(c[2]))continue;const l=c.map(Kt.degToRad),u=[e.values[a],t.values[a],n.values[a]];if(isNaN(u[0])||isNaN(u[1])||isNaN(u[2]))continue;const h=u.map(Kt.degToRad),f=[u[0]-c[0],u[1]-c[1],u[2]-c[2]],d=[Math.abs(f[0]),Math.abs(f[1]),Math.abs(f[2])];if(d[0]>=180||d[1]>=180||d[2]>=180){const v=Math.max(...d)/180,g=new Ct(...l,i),m=new Ct(...h,i),A=new wt().setFromEuler(g),S=new wt().setFromEuler(m);A.dot(S)&&S.set(-S.x,-S.y,-S.z,-S.w);const w=e.times[a-1],U=e.times[a]-w,I=new wt,P=new Ct;for(let k=0;k<1;k+=1/v)I.copy(A.clone().slerp(S.clone(),k)),r.push(w+k*U),P.setFromQuaternion(I,i),o.push(P.x),o.push(P.y),o.push(P.z)}else r.push(e.times[a]),o.push(Kt.degToRad(e.values[a])),o.push(Kt.degToRad(t.values[a])),o.push(Kt.degToRad(n.values[a]))}return[r,o]}}class dy{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new uf,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(i,r){const o=i.match(/^[\s\t]*;/),a=i.match(/^[\s\t]*$/);if(o||a)return;const c=i.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),l=i.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),u=i.match("^\\t{"+(t.currentIndent-1)+"}}");c?t.parseNodeBegin(i,c):l?t.parseNodeProperty(i,l,n[++r]):u?t.popStack():i.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),i=t[2].split(",").map(function(c){return c.trim().replace(/^"/,"").replace(/"$/,"")}),r={name:n},o=this.parseNodeAttr(i),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,r):n in a?(n==="PoseNode"?a.PoseNode.push(r):a[n].id!==void 0&&(a[n]={},a[n][a[n].id]=a[n]),o.id!==""&&(a[n][o.id]=r)):typeof o.id=="number"?(a[n]={},a[n][o.id]=r):n!=="Properties70"&&(n==="PoseNode"?a[n]=[r]:a[n]=r),typeof o.id=="number"&&(r.id=o.id),o.name!==""&&(r.attrName=o.name),o.type!==""&&(r.attrType=o.type),this.pushStack(r)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",i="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),i=e[2]),{id:t,name:n,type:i}}parseNodeProperty(e,t,n){let i=t[1].replace(/^"/,"").replace(/"$/,"").trim(),r=t[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&r===","&&(r=n.replace(/"/g,"").replace(/,$/,"").trim());const o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(e,i,r);return}if(i==="C"){const c=r.split(",").slice(1),l=parseInt(c[0]),u=parseInt(c[1]);let h=r.split(",").slice(3);h=h.map(function(f){return f.trim().replace(/^"/,"")}),i="connections",r=[l,u],xy(r,h),o[i]===void 0&&(o[i]=[])}i==="Node"&&(o.id=r),i in o&&Array.isArray(o[i])?o[i].push(r):i!=="a"?o[i]=r:o.a=r,this.setCurrentProp(o,i),i==="a"&&r.slice(-1)!==","&&(o.a=Xa(r))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=Xa(t.a))}parseNodeSpecialProperty(e,t,n){const i=n.split('",').map(function(u){return u.trim().replace(/^\"/,"").replace(/\s/,"_")}),r=i[0],o=i[1],a=i[2],c=i[3];let l=i[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":l=parseFloat(l);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":l=Xa(l);break}this.getPrevNode()[r]={type:o,type2:a,flag:c,value:l},this.setCurrentProp(this.getPrevNode(),r)}}class py{parse(e){const t=new Qh(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const i=new uf;for(;!this.endOfContent(t);){const r=this.parseNode(t,n);r!==null&&i.add(r.name,r)}return i}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},i=t>=7500?e.getUint64():e.getUint32(),r=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const o=e.getUint8(),a=e.getString(o);if(i===0)return null;const c=[];for(let f=0;f<r;f++)c.push(this.parseProperty(e));const l=c.length>0?c[0]:"",u=c.length>1?c[1]:"",h=c.length>2?c[2]:"";for(n.singleProperty=r===1&&e.getOffset()===i;i>e.getOffset();){const f=this.parseNode(e,t);f!==null&&this.parseSubNode(a,n,f)}return n.propertyList=c,typeof l=="number"&&(n.id=l),u!==""&&(n.attrName=u),h!==""&&(n.attrType=h),a!==""&&(n.name=a),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const i=n.propertyList[0];Array.isArray(i)?(t[n.name]=n,n.a=i):t[n.name]=i}else if(e==="Connections"&&n.name==="C"){const i=[];n.propertyList.forEach(function(r,o){o!==0&&i.push(r)}),t.connections===void 0&&(t.connections=[]),t.connections.push(i)}else if(n.name==="Properties70")Object.keys(n).forEach(function(r){t[r]=n[r]});else if(e==="Properties70"&&n.name==="P"){let i=n.propertyList[0],r=n.propertyList[1];const o=n.propertyList[2],a=n.propertyList[3];let c;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),r==="Color"||r==="ColorRGB"||r==="Vector"||r==="Vector3D"||r.indexOf("Lcl_")===0?c=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:c=n.propertyList[4],t[i]={type:r,type2:o,flag:a,value:c}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const i=e.getUint32(),r=e.getUint32(),o=e.getUint32();if(r===0)switch(t){case"b":case"c":return e.getBooleanArray(i);case"d":return e.getFloat64Array(i);case"f":return e.getFloat32Array(i);case"i":return e.getInt32Array(i);case"l":return e.getInt64Array(i)}const a=Jx(new Uint8Array(e.getArrayBuffer(o))),c=new Qh(a.buffer);switch(t){case"b":case"c":return c.getBooleanArray(i);case"d":return c.getFloat64Array(i);case"f":return c.getFloat32Array(i);case"i":return c.getInt32Array(i);case"l":return c.getInt64Array(i)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class Qh{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const i=n.indexOf(0);return i>=0&&(n=new Uint8Array(this.dv.buffer,t,i)),this._textDecoder.decode(n)}}class uf{add(e,t){this[e]=t}}function my(s){const e="Kaydara FBX Binary  \0";return s.byteLength>=e.length&&e===pf(s,0,e.length)}function gy(s){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(i){const r=s[i-1];return s=s.slice(t+i),t++,r}for(let i=0;i<e.length;++i)if(n(1)===e[i])return!1;return!0}function eu(s){const e=/FBXVersion: (\d+)/,t=s.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function _y(s){return s/46186158e3}const vy=[];function ao(s,e,t,n){let i;switch(n.mappingType){case"ByPolygonVertex":i=s;break;case"ByPolygon":i=e;break;case"ByVertice":i=t;break;case"AllSame":i=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(i=n.indices[i]);const r=i*n.dataSize,o=r+n.dataSize;return yy(vy,n.buffer,r,o)}const $a=new Ct,us=new O;function ff(s){const e=new be,t=new be,n=new be,i=new be,r=new be,o=new be,a=new be,c=new be,l=new be,u=new be,h=new be,f=new be,d=s.inheritType?s.inheritType:0;if(s.translation&&e.setPosition(us.fromArray(s.translation)),s.preRotation){const E=s.preRotation.map(Kt.degToRad);E.push(s.eulerOrder||Ct.DEFAULT_ORDER),t.makeRotationFromEuler($a.fromArray(E))}if(s.rotation){const E=s.rotation.map(Kt.degToRad);E.push(s.eulerOrder||Ct.DEFAULT_ORDER),n.makeRotationFromEuler($a.fromArray(E))}if(s.postRotation){const E=s.postRotation.map(Kt.degToRad);E.push(s.eulerOrder||Ct.DEFAULT_ORDER),i.makeRotationFromEuler($a.fromArray(E)),i.invert()}s.scale&&r.scale(us.fromArray(s.scale)),s.scalingOffset&&a.setPosition(us.fromArray(s.scalingOffset)),s.scalingPivot&&o.setPosition(us.fromArray(s.scalingPivot)),s.rotationOffset&&c.setPosition(us.fromArray(s.rotationOffset)),s.rotationPivot&&l.setPosition(us.fromArray(s.rotationPivot)),s.parentMatrixWorld&&(h.copy(s.parentMatrix),u.copy(s.parentMatrixWorld));const _=t.clone().multiply(n).multiply(i),v=new be;v.extractRotation(u);const g=new be;g.copyPosition(u);const m=g.clone().invert().multiply(u),A=v.clone().invert().multiply(m),S=r,w=new be;if(d===0)w.copy(v).multiply(_).multiply(A).multiply(S);else if(d===1)w.copy(v).multiply(A).multiply(_).multiply(S);else{const C=new be().scale(new O().setFromMatrixScale(h)).clone().invert(),F=A.clone().multiply(C);w.copy(v).multiply(_).multiply(F).multiply(S)}const U=l.clone().invert(),I=o.clone().invert();let P=e.clone().multiply(c).multiply(l).multiply(t).multiply(n).multiply(i).multiply(U).multiply(a).multiply(o).multiply(r).multiply(I);const k=new be().copyPosition(P),x=u.clone().multiply(k);return f.copyPosition(x),P=f.clone().multiply(w),P.premultiply(u.invert()),P}function df(s){s=s||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return s===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[s]}function Xa(s){return s.split(",").map(function(t){return parseFloat(t)})}function pf(s,e,t){return e===void 0&&(e=0),t===void 0&&(t=s.byteLength),new TextDecoder().decode(new Uint8Array(s,e,t))}function xy(s,e){for(let t=0,n=s.length,i=e.length;t<i;t++,n++)s[n]=e[t]}function yy(s,e,t,n){for(let i=t,r=0;i<n;i++,r++)s[r]=e[i];return s}const My=new Jv,Sy=new Bx,Ey=new ly,wy=new jo;async function Yn(s){try{const e=await wy.loadAsync(s);return e.colorSpace=xt,e.name=s,_i(e)}catch{throw new Error("texture load failed: "+s)}}function Ay(s,e,t=!1,n=!1){const i=s,r=e??i.map??null;r&&_i(r);const o=t?new hl({map:r}):new Zt({map:r}),a=i.transparent||(i.alphaTest??0)>0;return(n||a||r&&/bush|tree|hedge|leaf|foliage|plant/i.test(r.name??""))&&(o.alphaTest=.5,o.transparent=!1,o.side=hn),vs(o),o}function mf(s,e,t=!1,n=!1){s.updateMatrixWorld(!0);const i=[],r=new Map;return s.traverse(o=>{const a=o;if(!a.isMesh)return;const c=u=>{let h=r.get(u);return h||(h=Ay(u,e,t,n),r.set(u,h)),h};a.material=Array.isArray(a.material)?a.material.map(c):c(a.material);const l=Array.isArray(a.material)?a.material:[a.material];i.push({geometry:a.geometry,material:l[0],matrix:a.matrixWorld.clone()})}),{object:s,meshes:i}}async function Pi(s,e,t=!1){try{const n=await My.loadAsync(s);return mf(n.scene,e,!1,t)}catch(n){throw new Error("glb load failed: "+s+" — "+n)}}async function co(s,e,t=!1){try{const n=await Ey.loadAsync(s);return mf(n,e,!1,t)}catch(n){throw new Error("fbx load failed: "+s+" — "+n)}}const tu=["","_gray","_blue","_red"],nu=[["/assets/cars/car01/Car.obj","/assets/cars/car01/car_gray.png"],["/assets/cars/car02/Car2.obj","/assets/cars/car02/car2.png"],["/assets/cars/car02/Car2.obj","/assets/cars/car02/car2_black.png"],["/assets/cars/car02/Car2.obj","/assets/cars/car02/car2_red.png"]];async function ja(s=0,e=-1){const t=tu[s%tu.length];let n="/assets/cars/car01/Car.obj",i=`/assets/cars/car01/car${t}.png`;e>=0&&([n,i]=nu[e%nu.length]);const[r,o,a]=await Promise.all([Sy.loadAsync(n),Yn(i),Yn("/assets/cars/shadow/car_shadow_alpha.png")]),c=new Wt,l=[],u=new on().setFromObject(r),h=u.getSize(new O),f=Do/Math.max(h.x,h.z),d=typeof location<"u"&&location.search.includes("cartest");r.traverse(v=>{const g=v;if(!g.isMesh)return;const m=d?new Zt({map:o}):new hl({map:o});vs(m),g.material=m,l.push(m)}),r.scale.setScalar(f),r.position.y=-u.min.y*f,c.add(r);const _=new Et(new Mi(h.x*f*1.15,h.z*f*1.05),new Zt({map:a,transparent:!0,opacity:.55,depthWrite:!1,color:0}));return _.rotation.x=-Math.PI/2,_.position.y=.02,_.renderOrder=1,c.add(_),{group:c,tintables:l,length:Do}}const Ty=new xe(.64,.68,.86);class No{constructor(e){this.group=new Wt,this.map=e}lampTintAt(e,t,n,i=1){n.copy(Ty).multiplyScalar(i);for(const r of this.map.lamps){const o=e-r.x,a=t-r.z,c=o*o+a*a;if(c>r.radius*r.radius)continue;const l=1-Math.sqrt(c)/r.radius,u=l*l*r.intensity*2.6;n.r+=r.color[0]*u,n.g+=r.color[1]*u,n.b+=r.color[2]*u}return n}async build(){await Promise.all([this.buildGround(),this.buildRoads(),this.buildLampPosts(),this.buildProps()])}async buildGround(){const e=document.createElement("canvas");e.width=e.height=64;const t=e.getContext("2d");for(let S=0;S<64;S++)for(let w=0;w<64;w++){const U=Math.sin(w*12.9898+S*78.233)*43758.5453,P=80+(U-Math.floor(U))*34;t.fillStyle=`rgb(${P*.55|0},${P|0},${P*.62|0})`,t.fillRect(w,S,1,1)}const n=_i(new pr(e));n.wrapS=n.wrapT=Fn,n.colorSpace=xt;const i=this.map.bounds,r=i.maxX-i.minX,o=i.maxZ-i.minZ,a=Math.round(r/4),c=Math.round(o/4),l=new Mi(r,o,a,c);l.rotateX(-Math.PI/2),l.translate(i.minX+r/2,-.06,i.minZ+o/2);const u=l.attributes.uv;for(let S=0;S<u.count;S++)u.setXY(S,u.getX(S)*(r/4),u.getY(S)*(o/4));const h=l.attributes.position,f=new Float32Array(h.count*3),d=new xe,_=.42,v=.78,g=-.46;for(let S=0;S<h.count;S++){const w=h.getX(S),U=h.getZ(S),I=this.map.heightAt(w,U);h.setY(S,I-.06),this.lampTintAt(w,U,d);const P=(this.map.heightAt(w+2,U)-this.map.heightAt(w-2,U))/4,k=(this.map.heightAt(w,U+2)-this.map.heightAt(w,U-2))/4,x=1/Math.sqrt(P*P+1+k*k),E=(-P*_+v-k*g)*x,C=(.62+.55*Math.max(0,E))*(1+I*.035);f[S*3]=d.r*C,f[S*3+1]=d.g*C,f[S*3+2]=d.b*C}l.setAttribute("color",new Nt(f,3));const m=new Zt({map:n,vertexColors:!0});vs(m);const A=new Et(l,m);this.group.add(A)}pieceFile(e){switch(e){case"straight":return"Road_Straight.glb";case"corner":return"Road_Corner.glb";case"t":return"Road_T.glb";case"cross":return"Road_Cross.glb";case"end":return"Road_End.glb"}}static{this.ROT_FIX={straight:Math.PI/2,corner:-Math.PI/2,t:0,cross:0,end:0}}static{this.PIECE_SCALE={straight:[Ge/13,1,1]}}async buildRoads(){this.buildDirtRoad();const e=new Map;for(const n of this.map.tiles){if(n.dirt)continue;const i=e.get(n.piece)??[];i.push(n),e.set(n.piece,i)}const t=new xe;for(const[n,i]of e){const r=await Pi("/assets/roads/"+this.pieceFile(n)),o=new on().setFromObject(r.object),a=o.getCenter(new O),c=new be().makeTranslation(-a.x,-o.min.y-.04,-a.z);for(const l of r.meshes){const u=new ir(l.geometry,l.material,i.length),h=new be,f=new wt,d=new O(0,1,0),_=No.PIECE_SCALE[n]??[1,1,1],v=new wt;i.forEach((g,m)=>{f.setFromAxisAngle(d,g.rot+No.ROT_FIX[n]),g.piece==="straight"&&(g.dirs.n||g.dirs.s?v.setFromAxisAngle(new O(1,0,0),Math.atan2(g.elev.s-g.elev.n,Ge)):v.setFromAxisAngle(new O(0,0,1),Math.atan2(g.elev.e-g.elev.w,Ge)),f.premultiply(v)),h.compose(new O(g.x,g.elev.c,g.z),f,new O(_[0],_[1],_[2])),h.multiply(c),h.multiply(l.matrix),u.setMatrixAt(m,h),this.lampTintAt(g.x,g.z,t),u.setColorAt(m,t)}),u.instanceMatrix.needsUpdate=!0,u.instanceColor&&(u.instanceColor.needsUpdate=!0),u.frustumCulled=!1,this.group.add(u)}}}async buildLampPosts(){const e=new Wo(.09,.13,5.2,5);e.translate(0,2.6,0);const t=new Bi(.14,.12,1.4);t.translate(0,5.15,.6);const n=new Bi(.3,.16,.55);n.translate(0,5.05,1.15);const i=this.map.props.filter(u=>u.kind==="lampProp"),r=new Zt({color:new xe(.05,.055,.075)});vs(r);const o=new Zt({color:new xe(1,.75,.42)});vs(o);const a=new wt,c=new O(0,1,0),l=new be;for(const[u,h]of[[e,r],[t,r],[n,o]]){const f=new ir(u,h,i.length);i.forEach((d,_)=>{a.setFromAxisAngle(c,d.rot),l.compose(new O(d.x,this.map.heightAt(d.x,d.z),d.z),a,new O(1,1,1)),f.setMatrixAt(_,l)}),f.instanceMatrix.needsUpdate=!0,f.frustumCulled=!1,this.group.add(f)}}placeClones(e,t,n={}){if(!t.length)return;const i=new on().setFromObject(e.object),r=i.getSize(new O),o=i.getCenter(new O);let a=1,c=1,l=1;n.targetSize?(c=n.targetSize.y?n.targetSize.y/r.y:1,a=n.targetSize.x?n.targetSize.x/r.x:c,l=n.targetSize.z?n.targetSize.z/r.z:c):n.targetHeight?a=c=l=n.targetHeight/r.y:n.targetWidth&&(a=c=l=n.targetWidth/Math.max(r.x,r.z));const u=new xe;for(const h of t){const f=new Wt;f.position.set(h.x,this.map.heightAt(h.x,h.z),h.z),f.rotation.y=h.rot;const d=e.object.clone();d.scale.set(a,c,l),d.position.set(-o.x*a,-i.min.y*c,-o.z*l),f.add(d),n.tint!==!1&&(this.lampTintAt(h.x,h.z,u,n.tintAmbient??1),d.traverse(_=>{const v=_;if(!v.isMesh)return;const g=Array.isArray(v.material)?v.material:[v.material];v.material=g.length===1?g[0].clone():g.map(A=>A.clone());const m=Array.isArray(v.material)?v.material:[v.material];for(const A of m)A.color?.copy(u)})),this.group.add(f)}}placeInstanced(e,t,n={}){if(!t.length)return;const i=new on().setFromObject(e.object),r=i.getSize(new O),o=i.getCenter(new O);let a=1;n.targetHeight?a=n.targetHeight/r.y:n.targetWidth&&(a=n.targetWidth/Math.max(r.x,r.z));const c=new xe,l=new be,u=new wt,h=new O(0,1,0),f=new be,d=new be;for(const _ of e.meshes){const v=new ir(_.geometry,_.material,t.length);t.forEach((g,m)=>{const A=a*(.75+Fe(Math.round(g.x*7),Math.round(g.z*7),5)*.55);u.setFromAxisAngle(h,g.rot),l.compose(new O(g.x,this.map.heightAt(g.x,g.z),g.z),u,new O(1,1,1)),f.makeTranslation(-o.x*A,-i.min.y*A,-o.z*A),d.makeScale(A,A,A),l.multiply(f),l.multiply(d),l.multiply(_.matrix),v.setMatrixAt(m,l),this.lampTintAt(g.x,g.z,c,n.tintAmbient??1),v.setColorAt(m,c)}),v.instanceMatrix.needsUpdate=!0,v.instanceColor&&(v.instanceColor.needsUpdate=!0),v.frustumCulled=!1,this.group.add(v)}}buildDirtRoad(){if(!this.map.tiles.filter(v=>v.dirt).length)return;const t=document.createElement("canvas");t.width=t.height=64;const n=t.getContext("2d");for(let v=0;v<64;v++)for(let g=0;g<64;g++){const m=Math.sin(g*91.7+v*47.3)*43758.5453;let S=105+(m-Math.floor(m))*32;const w=g/64;(Math.abs(w-.28)<.09||Math.abs(w-.72)<.09)&&(S-=14),n.fillStyle=`rgb(${S*1|0},${S*.82|0},${S*.6|0})`,n.fillRect(g,v,1,1)}const i=_i(new pr(t));i.wrapS=i.wrapT=Fn,i.colorSpace=xt;const r=[],o=[],a=[],c=[],l=new xe,u=5.2,h=(v,g,m,A)=>{const S=this.map.heightAt(v,g)+.06;return this.lampTintAt(v,g,l),r.push(v,S,g),o.push(m,A),a.push(l.r,l.g,l.b),r.length/3-1};for(const v of this.map.tiles.filter(g=>g.dirt)){const g=v.piece==="corner"?12:8;let m=-1,A=-1;for(let S=0;S<=g;S++){const w=S/g,[U,I]=Ba(v,w),[P,k]=Ba(v,Math.min(1,w+.01)),[x,E]=Ba(v,Math.max(0,w-.01));let C=P-x,F=k-E;const B=Math.hypot(C,F)||1;C/=B,F/=B;const X=-F,K=C,H=h(U-X*u,I-K*u,0,w*Ge/4),L=h(U+X*u,I+K*u,2.6,w*Ge/4);m>=0&&c.push(m,H,A,A,H,L),m=H,A=L}}const f=new Pt;f.setAttribute("position",new gt(r,3)),f.setAttribute("uv",new gt(o,2)),f.setAttribute("color",new gt(a,3)),f.setIndex(c);const d=new Zt({map:i,vertexColors:!0,side:hn});vs(d);const _=new Et(f,d);_.frustumCulled=!1,this.group.add(_)}async buildProps(){const e=this.map.props,t=[];t.push((async()=>{const n=e.filter(r=>r.kind==="house");if(!n.length)return;const i=[];for(let r=1;r<=5;r++)for(let o=1;o<=3;o++){const a=await Yn(`/assets/houses/tex/house${r}_tex${o}.png`);i.push(await Pi(`/assets/houses/house${r}.glb`,a))}for(const r of n)this.placeClones(i[r.variant%i.length],[r])})()),t.push((async()=>{const n=e.filter(o=>o.kind==="hedge");if(!n.length)return;const i=await Yn("/assets/hedges/tex/hedge_open_bottom_summer.png"),r=await co("/assets/hedges/basic_1x1.fbx",i);this.placeClones(r,n,{targetSize:{x:2,y:2.2,z:Ge+.5}})})()),t.push((async()=>{const n=e.filter(v=>v.kind==="tree_big");if(!n.length)return;const i=await Pi("/assets/nature/trees/pine_tree.glb",void 0,!0),r=i.meshes[0],o=new on().setFromObject(i.object),a=o.getSize(new O),c=o.getCenter(new O),l=new be().makeTranslation(-c.x,-o.min.y,-c.z),u=9.5/a.y,h=new ir(r.geometry,r.material,n.length),f=new be,d=new wt,_=new O(0,1,0);n.forEach((v,g)=>{const m=u*(.85+v.variant*37%10/30);d.setFromAxisAngle(_,v.rot),f.compose(new O(v.x,this.map.heightAt(v.x,v.z),v.z),d,new O(m,m,m)),f.multiply(l),f.multiply(r.matrix),h.setMatrixAt(g,f)}),h.instanceMatrix.needsUpdate=!0,h.frustumCulled=!1,this.group.add(h)})()),t.push((async()=>{const n=e.filter(a=>a.kind==="tree_small"),i=e.filter(a=>a.kind==="bush"),r=[];for(const a of[1,2,3,4,5,7,9,11]){const c=String(a).padStart(2,"0"),l=await Yn(`/assets/trees/tex/tree${c}.png`);r.push(await co(`/assets/trees/tree${c}.fbx`,l,!0))}for(const a of[1,2,3,4,5,6,7,8]){const c=String(a).padStart(2,"0");try{const l=await Yn(`/assets/nature2/tex/trees/tree${c}_summer.png`);r.push(await Pi(`/assets/nature2/trees/tree${c}.glb`,l,!0))}catch{}}for(let a=0;a<r.length;a++)this.placeInstanced(r[a],n.filter(c=>c.variant%r.length===a),{targetHeight:5.5});const o=[];for(const a of[1,2,3,4,5,6,7,8]){const c=String(a).padStart(2,"0");try{const l=await Yn(`/assets/trees/tex/bush${c}.png`);o.push(await co(`/assets/trees/bush${c}.fbx`,l,!0))}catch{}}for(const a of[1,2,3,4,5]){const c=String(a).padStart(2,"0");try{const l=await Yn(`/assets/nature2/tex/bushes/bush${a}_summer.png`);o.push(await Pi(`/assets/nature2/bushes/bush${c}.glb`,l,!0))}catch{}}for(let a=0;a<o.length;a++)this.placeInstanced(o[a],i.filter(c=>c.variant%o.length===a),{targetHeight:1.1})})()),t.push((async()=>{const n=e.filter(o=>o.kind==="rock");if(!n.length)return;const i=await Pi("/assets/nature/rocks/rock.glb"),r=await Pi("/assets/nature/rocks/rock_grassy.glb");this.placeInstanced(i,n.filter(o=>o.variant===0),{targetWidth:2.2}),this.placeInstanced(r,n.filter(o=>o.variant===1),{targetWidth:2.2})})()),t.push((async()=>{const n=e.filter(i=>i.kind==="tower");if(n.length)try{const i=await Yn("/assets/landmarks/tex/textures.png"),r=await co("/assets/landmarks/tower.fbx",i);this.placeClones(r,n,{targetHeight:16,tintAmbient:.8})}catch(i){console.warn("tower load failed",i)}})()),await Promise.all(t)}}function gf(s=1){const t=document.createElement("canvas");t.width=t.height=32;const n=t.getContext("2d"),i=n.createImageData(32,32);for(let r=0;r<32;r++)for(let o=0;o<32;o++){const a=(o-16+.5)/16,c=(r-32/2+.5)/(32/2)*s,l=Math.sqrt(a*a+c*c);let u=Math.max(0,1-l);u=u*u;const h=((o%4*4+r%4)/16-.5)/10;u=Math.max(0,Math.min(1,u+h));const f=(r*32+o)*4;i.data[f]=i.data[f+1]=i.data[f+2]=255,i.data[f+3]=Math.round(u*255)}return n.putImageData(i,0,0),_i(new pr(t))}const qa={value:null};function _f(){return qa.value||(qa.value=gf()),qa.value}function sr(s,e,t=1){const n=new dr({map:_f(),color:s,blending:bs,depthWrite:!1,transparent:!0,opacity:t,fog:!1}),i=new Co(n);return i.scale.setScalar(e),i}function vf(s,e,t,n){const i=new Zt({map:_f(),color:s,blending:bs,depthWrite:!1,transparent:!0,opacity:n,fog:!1}),r=new Et(new Mi(e,t),i);return r.rotation.x=-Math.PI/2,r.position.y=.03,r.renderOrder=2,r}function by(s,e,t=()=>0){const n=new Wt;for(const i of s){const r=new xe(i.color[0],i.color[1],i.color[2]),o=e(i.x,i.z),a=t(i.x,i.z),c=sr(r,4.4+o*1.8,.85);c.position.set(i.x,a+i.height,i.z),n.add(c);const l=vf(r,i.radius*1.3,i.radius*1.3,.55);l.position.set(i.x,a+.05,i.z),n.add(l)}return n}const Ry=`
uniform float uLength;
varying float vT; // 0 at root (headlight), 1 at far end
void main() {
  vT = clamp(position.z / uLength, 0.0, 1.0);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Cy=`
uniform vec3 uColor;
uniform float uAlpha;
varying float vT;
void main() {
  float a = (1.0 - vT) * uAlpha;
  a *= a;
  gl_FragColor = vec4(uColor * a, a);
}`;function Py(s=15,e=2.6){const t=new ol(e,s,8,4,!0);t.rotateX(-Math.PI/2),t.translate(0,0,s/2);const n=new In({vertexShader:Ry,fragmentShader:Cy,uniforms:{uColor:{value:new xe(1,.93,.72)},uAlpha:{value:.5},uLength:{value:s}},blending:bs,transparent:!0,depthWrite:!1,side:hn}),i=new Et(t,n);return i.renderOrder=3,i}class iu{constructor(e=1.7,t=4.5){this.group=new Wt,this.cones=[],this.headGlows=[],this.tailGlows=[],this.brakeGlows=[];const n=e*.36,i=t*.46,r=-t*.47,o=.62;for(const a of[-1,1]){const c=Py();c.position.set(a*n,o,i),c.rotation.x=.045,this.cones.push(c),this.group.add(c);const l=sr(16773836,1.3,1);l.position.set(a*n,o,i+.1),this.headGlows.push(l),this.group.add(l);const u=sr(16720401,.5,.7);u.position.set(a*n,o,r),this.tailGlows.push(u),this.group.add(u);const h=sr(16722456,1.5,0);h.position.set(a*n,o,r-.05),this.brakeGlows.push(h),this.group.add(h)}this.reverseGlow=sr(16777215,.8,0),this.reverseGlow.position.set(0,o,r),this.group.add(this.reverseGlow),this.pool=vf(16773314,9,16,.6),this.pool.position.set(0,.04,i+6.5),this.group.add(this.pool)}update(e,t,n,i){for(const r of this.cones)r.visible=e,r.material.uniforms.uAlpha.value=.42+i*.22;for(const r of this.headGlows)r.material.opacity=e?.9:0;this.pool.visible=e,this.pool.material.opacity=.5+i*.15;for(const r of this.tailGlows)r.material.opacity=e?.7:.35;for(const r of this.brakeGlows)r.material.opacity=t?.85:0;this.reverseGlow.material.opacity=n?.6:0}}class Iy{constructor(e=140){this.group=new Wt,this.pool=[],this.next=0;const t=gf();for(let n=0;n<e;n++){const i=new dr({map:t,transparent:!0,opacity:0,depthWrite:!1,fog:!0}),r=new Co(i);r.visible=!1,this.group.add(r),this.pool.push({sprite:r,vx:0,vy:0,vz:0,life:0,maxLife:1,grow:1})}}spawn(e,t,n,i,r=!1){const o=this.pool[this.next];this.next=(this.next+1)%this.pool.length,o.sprite.visible=!0,o.sprite.position.set(e,t,n),o.sprite.scale.setScalar(r?.7:.55);const a=o.sprite.material;r?a.color.setRGB(.32*i.r+.12,.26*i.g+.09,.2*i.b+.06):a.color.copy(i).multiplyScalar(.85),a.opacity=r?.4:.5;const c=Math.random;o.vx=(c()-.5)*1.6,o.vy=.8+c()*1.2,o.vz=(c()-.5)*1.6,o.maxLife=o.life=r?.7:1.1,o.grow=r?2.4:3.2}update(e){for(const t of this.pool){if(!t.sprite.visible)continue;if(t.life-=e,t.life<=0){t.sprite.visible=!1;continue}t.sprite.position.x+=t.vx*e,t.sprite.position.y+=t.vy*e,t.sprite.position.z+=t.vz*e;const n=t.life/t.maxLife;t.sprite.scale.addScalar(t.grow*e),t.sprite.material.opacity=n*.5}}}const lo=2400;class Ly{constructor(){this.head=0,this.lastL=null,this.lastR=null,this.geo=new Pt,this.positions=new Float32Array(lo*6*3),this.alphas=new Float32Array(lo*6),this.geo.setAttribute("position",new Nt(this.positions,3).setUsage(bl)),this.geo.setAttribute("aAlpha",new Nt(this.alphas,1).setUsage(bl)),this.geo.drawRange.count=0;const e=new In({vertexShader:`
        attribute float aAlpha;
        varying float vA;
        void main() {
          vA = aAlpha;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,fragmentShader:`
        varying float vA;
        void main() {
          gl_FragColor = vec4(0.02, 0.02, 0.03, vA);
        }`,transparent:!0,depthWrite:!1});this.mesh=new Et(this.geo,e),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1}addSegment(e,t,n){this.lastL&&this.lastR&&(this.pushQuad(this.lastL,e,n),this.pushQuad(this.lastR,t,n)),this.lastL=e.clone(),this.lastR=t.clone()}breakSegment(){this.lastL=this.lastR=null}pushQuad(e,t,n){const i=t.x-e.x,r=t.z-e.z,o=Math.hypot(i,r);if(o<.05||o>3)return;const a=.14,c=-r/o*a,l=i/o*a,u=.025,h=this.head*18,f=this.positions,d=[e.x-c,u,e.z-l,e.x+c,u,e.z+l,t.x+c,u,t.z+l,e.x-c,u,e.z-l,t.x+c,u,t.z+l,t.x-c,u,t.z-l];f.set(d,h);const _=Math.min(.55,n);this.alphas.fill(_,this.head*6,this.head*6+6),this.head=(this.head+1)%lo,this.geo.drawRange.count=Math.min(this.geo.drawRange.count+6,lo*6),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aAlpha.needsUpdate=!0}}class Dy{constructor(){this.toastTimer=0;const e=document.createElement("div");e.id="hud",e.innerHTML=`
      <div id="hud-score">
        <div id="hud-total">0</div>
        <div id="hud-chain-row"><span id="hud-chain"></span><span id="hud-mult"></span></div>
      </div>
      <div id="hud-toast"></div>
      <div id="hud-speed-box">
        <span id="hud-speed">0</span><span class="unit">km/h</span>
        <span id="hud-gear">1</span>
      </div>
      <div id="hud-help">WASD/arrows drive · SPACE handbrake · L lights · C camera · R reset · H horn · \` tuning</div>
    `,document.body.appendChild(e),this.speedEl=document.getElementById("hud-speed"),this.gearEl=document.getElementById("hud-gear"),this.scoreEl=document.getElementById("hud-total"),this.chainEl=document.getElementById("hud-chain"),this.multEl=document.getElementById("hud-mult"),this.toastEl=document.getElementById("hud-toast")}toast(e,t=""){this.toastEl.textContent=e,this.toastEl.className="show "+t,this.toastTimer=1.6}update(e,t,n){this.speedEl.textContent=String(Math.round(Math.abs(e.speed)*3.6)),this.gearEl.textContent=e.speed<-.5?"R":String(e.gear+1),this.scoreEl.textContent=String(Math.floor(t.total)),t.chain>1?(this.chainEl.textContent="+"+Math.floor(t.chain),this.multEl.textContent=" ×"+t.multiplier.toFixed(1),this.chainEl.parentElement.style.opacity="1"):this.chainEl.parentElement.style.opacity="0",t.event==="banked"&&this.toast("+"+t.banked+" BANKED","good"),t.event==="crashed"&&this.toast("CRASH — CHAIN LOST","bad"),this.toastTimer>0&&(this.toastTimer-=n,this.toastTimer<=0&&(this.toastEl.className=""))}}class Uy{constructor(){this.extras={fogNear:18,fogFar:85,vignette:.03,crush:.12,dither:1,affine:0,mist:.95,assist:1},this.onExtra=()=>{},this.el=document.createElement("div"),this.el.id="debug-panel",this.el.style.display="none",document.body.appendChild(this.el);const e=fi,t=[{key:"engineForce",obj:e,min:2e3,max:16e3},{key:"brakeForce",obj:e,min:2e3,max:2e4},{key:"maxSpeed",obj:e,min:20,max:80},{key:"gripFront",obj:e,min:.4,max:3,step:.05},{key:"gripRear",obj:e,min:.4,max:3,step:.05},{key:"peakSlipFront",obj:e,min:.05,max:.4,step:.005},{key:"peakSlipRear",obj:e,min:.05,max:.4,step:.005},{key:"gripFalloff",obj:e,min:0,max:.8,step:.02},{key:"driveTraction",obj:e,min:.5,max:3,step:.05},{key:"brakeBias",obj:e,min:.3,max:.9,step:.02},{key:"yawDamping",obj:e,min:0,max:3,step:.05},{key:"handbrakeGrip",obj:e,min:.05,max:.8,step:.01},{key:"steerMaxLow",obj:e,min:.2,max:1,step:.01},{key:"steerMaxHigh",obj:e,min:.05,max:.5,step:.01},{key:"steerAttack",obj:e,min:1,max:12,step:.1},{key:"steerRelease",obj:e,min:1,max:15,step:.1},{key:"assistGain",obj:e,min:0,max:1.5,step:.02},{key:"cgHeight",obj:e,min:0,max:1,step:.02},{key:"dragCoeff",obj:e,min:0,max:2,step:.02},{key:"inertia",obj:e,min:800,max:4e3},{key:"fogNear",obj:this.extras,min:5,max:80},{key:"fogFar",obj:this.extras,min:40,max:300},{key:"vignette",obj:this.extras,min:0,max:.6,step:.02},{key:"crush",obj:this.extras,min:0,max:1,step:.02},{key:"dither",obj:this.extras,min:0,max:1,step:1},{key:"affine",obj:this.extras,min:0,max:1,step:.05},{key:"mist",obj:this.extras,min:0,max:1.5,step:.05}],n=document.createElement("div");n.className="dbg-title",n.textContent="TUNING (` to close)",this.el.appendChild(n);for(const i of t){const r=document.createElement("div");r.className="dbg-row";const o=document.createElement("label");o.textContent=i.key;const a=document.createElement("input");a.type="range",a.min=String(i.min),a.max=String(i.max),a.step=String(i.step??(i.max-i.min)/200),a.value=String(i.obj[i.key]);const c=document.createElement("span");c.textContent=this.fmt(i.obj[i.key]),a.addEventListener("input",()=>{const l=parseFloat(a.value);i.obj[i.key]=l,c.textContent=this.fmt(l),i.obj===this.extras&&(i.key==="affine"&&(Oi.uAffine.value=l),i.key==="mist"&&(Oi.uMist.value=l),this.onExtra(i.key,l))}),r.append(o,a,c),this.el.appendChild(r)}window.addEventListener("keydown",i=>{i.key==="`"&&(this.el.style.display=this.el.style.display==="none"?"block":"none")})}fmt(e){return Math.abs(e)>=100?String(Math.round(e)):e.toFixed(2)}}async function fs(s,e){const n=await(await fetch(e)).arrayBuffer();return s.decodeAudioData(n)}class Ny{constructor(){this.loops=[],this.hornBuf=null,this.brakeBuf=null,this.throttleSmooth=0,this.ready=!1,this.ctx=new AudioContext,this.master=this.ctx.createGain(),this.master.gain.value=.8;const e=this.ctx.createDynamicsCompressor();e.threshold.value=-12,e.ratio.value=6,this.master.connect(e),e.connect(this.ctx.destination),this.vehicleBus=this.ctx.createGain(),this.vehicleBus.gain.value=.9,this.vehicleBus.connect(this.master),this.musicBus=this.ctx.createGain(),this.musicBus.gain.value=.16,this.musicBus.connect(this.master)}async init(){const e=this.ctx;await e.resume(),fs(e,"/assets/audio/background-loop.mp3").then(v=>{const g=e.createBufferSource();g.buffer=v,g.loop=!0,g.connect(this.musicBus),g.start()});const[t,n,i]=await Promise.all([fs(e,"/assets/audio/car/Car_Engine_Loop.ogg"),fs(e,"/assets/audio/car/Car_Engine_Loop_2.ogg"),fs(e,"/assets/audio/car/Car2_Engine_Loop.ogg")]),r=e.createWaveShaper(),o=new Float32Array(256);for(let v=0;v<256;v++){const g=v/255*2-1;o[v]=Math.tanh(g*1.8)}r.curve=o,this.onGain=e.createGain(),this.onGain.gain.value=0,this.onGain.connect(r),r.connect(this.vehicleBus);const a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=900,this.offGain=e.createGain(),this.offGain.gain.value=1,this.offGain.connect(a),a.connect(this.vehicleBus);const c=[[t,1700],[n,3300],[i,5600]];for(const[v,g]of c){const m=e.createBufferSource();m.buffer=v,m.loop=!0;const A=e.createGain();A.gain.value=0,m.connect(A),A.connect(this.onGain),A.connect(this.offGain),m.start(),this.loops.push({src:m,gain:A,nativeRpm:g})}this.sub=e.createOscillator(),this.sub.type="triangle";const l=e.createBiquadFilter();l.type="lowpass",l.frequency.value=220,this.subGain=e.createGain(),this.subGain.gain.value=.12,this.sub.connect(l),l.connect(this.subGain),this.subGain.connect(this.vehicleBus),this.sub.start();const u=e.createBuffer(1,e.sampleRate*1.5,e.sampleRate),h=u.getChannelData(0);let f=0;for(let v=0;v<h.length;v++){const g=Math.random()*2-1;f+=(g-f)*.25,h[v]=f*2.2}const d=e.createBufferSource();d.buffer=u,d.loop=!0,this.screechFilter=e.createBiquadFilter(),this.screechFilter.type="bandpass",this.screechFilter.frequency.value=2300,this.screechFilter.Q.value=5,this.screech=e.createGain(),this.screech.gain.value=0,d.connect(this.screechFilter),this.screechFilter.connect(this.screech),this.screech.connect(this.vehicleBus),d.start();const _=e.createBiquadFilter();_.type="lowpass",_.frequency.value=260,this.rumble=e.createGain(),this.rumble.gain.value=0,d.connect(_),_.connect(this.rumble),this.rumble.connect(this.vehicleBus),fs(e,"/assets/audio/car/Car_Horn.ogg").then(v=>this.hornBuf=v),fs(e,"/assets/audio/car/Car_Parking_Brake.ogg").then(v=>this.brakeBuf=v),this.ready=!0}playOneShot(e,t=1,n=1){if(!e)return;const i=this.ctx.createBufferSource();i.buffer=e,i.playbackRate.value=n;const r=this.ctx.createGain();r.gain.value=t,i.connect(r),r.connect(this.vehicleBus),i.start()}horn(){this.playOneShot(this.hornBuf,.8)}handbrakePull(){this.playOneShot(this.brakeBuf,.5)}crash(e){const t=this.ctx,i=t.createBuffer(1,t.sampleRate*.25,t.sampleRate),r=i.getChannelData(0);for(let l=0;l<r.length;l++)r[l]=(Math.random()*2-1)*Math.pow(1-l/r.length,2);const o=t.createBufferSource();o.buffer=i;const a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=700+e*300;const c=t.createGain();c.gain.value=Math.min(.9,.25+e*.1),o.connect(a),a.connect(c),c.connect(this.vehicleBus),o.start()}update(e,t,n,i){if(!this.ready)return;const r=this.ctx.currentTime,o=e.rpm;for(const d of this.loops)d.src.playbackRate.setTargetAtTime(o/d.nativeRpm,r,.03);if(this.loops.length===3){const[d,_,v]=this.loops,g=Math.max(0,Math.min(1,(o-d.nativeRpm)/(_.nativeRpm-d.nativeRpm))),m=Math.max(0,Math.min(1,(o-_.nativeRpm)/(v.nativeRpm-_.nativeRpm)));d.gain.gain.setTargetAtTime(Math.cos(g*Math.PI*.5)*.5,r,.05),_.gain.gain.setTargetAtTime(Math.sin(g*Math.PI*.5)*Math.cos(m*Math.PI*.5)*.55,r,.05),v.gain.gain.setTargetAtTime(Math.sin(m*Math.PI*.5)*.55,r,.05)}this.throttleSmooth+=(t-this.throttleSmooth)*Math.min(1,i/.12),this.onGain.gain.setTargetAtTime(this.throttleSmooth,r,.05),this.offGain.gain.setTargetAtTime(1-this.throttleSmooth*.8,r,.05),this.sub.frequency.setTargetAtTime(o/60*2,r,.03),this.subGain.gain.setTargetAtTime(.1+this.throttleSmooth*.08,r,.05);const a=[e.surfFL,e.surfFR,e.surfRL,e.surfRR],c=a.filter(d=>d==="asphalt"||d==="curb").length>=2,l=Math.max(Math.abs(e.slipRear)-fi.peakSlipRear,0),u=Math.abs(e.speed),h=c&&u>4?Math.min(.5,l*2.2)*Math.min(1,u/12):0;this.screech.gain.setTargetAtTime(h*(n?1:.7),r,.04),this.screechFilter.frequency.setTargetAtTime(2100+Math.abs(e.slipAngle)*900,r,.05);const f=a.filter(d=>d==="offroad").length+a.filter(d=>d==="dirt").length*.6;this.rumble.gain.setTargetAtTime(f>0?Math.min(.4,u/25*(f/4)):0,r,.06),this.musicBus.gain.setTargetAtTime(n?.11:.16,r,.6)}}function kc(s=0,e=0,t=0){return{x:s,z:e,yaw:t,vx:0,vz:0,yawRate:0,gear:0,rpm:900,shiftCut:0,slipAngle:0,slipFront:0,slipRear:0,wheelspin:0,speed:0,aLongSmooth:0,surfFL:"asphalt",surfFR:"asphalt",surfRL:"asphalt",surfRR:"asphalt",wallHit:0}}const Gt=(s,e,t)=>s<e?e:s>t?t:s;function su(s,e,t){const n=s/e,i=Math.abs(n);if(i<=1)return n*(1.5-.5*i*i);const r=1-t*Gt((i-1)/1.6,0,1);return Math.sign(n)*r}function ru(s,e){const t=Uo[s],n=Uo[e];return{lateral:(t.lateral+n.lateral)/2,longitudinal:(t.longitudinal+n.longitudinal)/2,drag:(t.drag+n.drag)/2,peakScale:(t.peakScale+n.peakScale)/2}}function ou(s,e,t,n,i,r,o){const a=Uo[r],c=Uo[o],l=su(s,e*a.peakScale,Gt(t*a.falloffScale,0,.92))*n*(i/2)*a.lateral,u=su(s,e*c.peakScale,Gt(t*c.falloffScale,0,.92))*n*(i/2)*c.lateral;return-(l+u)}function xf(s,e,t,n,i,r,o){const a=Math.sin(s.yaw),c=Math.cos(s.yaw);let l=s.vx*a+s.vz*c,u=s.vx*c-s.vz*a;const h=Math.max(Math.abs(l),.5),f=t.cgToFront,d=t.cgToRear,_=.8,v=a,g=c,m=c,A=-a;s.surfFL=i(s.x+v*f-m*_,s.z+g*f-A*_),s.surfFR=i(s.x+v*f+m*_,s.z+g*f+A*_),s.surfRL=i(s.x-v*d-m*_,s.z-g*d-A*_),s.surfRR=i(s.x-v*d+m*_,s.z-g*d+A*_);const S=ru(s.surfFL,s.surfFR),w=ru(s.surfRL,s.surfRR),U=Gt(Math.abs(l)/t.maxSpeed,0,1),I=t.steerMaxLow+(t.steerMaxHigh-t.steerMaxLow)*U,P=e.steer*I,k=f+d,x=9.81,E=t.mass*s.aLongSmooth*t.cgHeight/k,C=Math.max(t.mass*x*d/k-E,t.mass*x*.08),F=Math.max(t.mass*x*f/k+E,t.mass*x*.08),B=Math.atan2(u+s.yawRate*f,h)-P*Math.sign(l>=0?1:-1),X=Math.atan2(u-s.yawRate*d,h);s.slipFront=B,s.slipRear=X,s.slipAngle=Math.atan2(u,h);const K=t.gearRatios[s.gear]*t.finalDrive,H=t.gearRatios[t.gearRatios.length-1]*t.finalDrive,L=Gt(K/H,1,2.2)*.62;let ee=(s.shiftCut>0?0:e.throttle)*t.engineForce*L*w.longitudinal;e.handbrake&&(ee*=1-t.handbrakeDriveCut);const he=l/t.maxSpeed;ee*=Gt(1-he*he*he,0,1)*1.05;let pe=0;e.brake>0&&(l>.5?pe=-e.brake*t.brakeForce:pe=-e.brake*t.reverseForce);const Be=Math.max(F*t.driveTraction*w.longitudinal,1),Ke=Math.abs(ee);s.wheelspin=Gt(Ke/Be-1,0,1),Ke>Be&&(ee=Math.sign(ee)*Be);const J=-t.dragCoeff*l*Math.abs(l)-t.rollingResist*l*((S.drag+w.drag)/2);let le=0;if(o){const me=o(s.x+v*f,s.z+g*f),oe=o(s.x-v*d,s.z-g*d);le=-(me-oe)/(f+d)*t.mass*x}const we=ee+pe*((S.longitudinal+w.longitudinal)/2)+J+le,ye=e.handbrake?t.handbrakeGrip:1,We=Gt((Ke+Math.abs(pe)*(1-t.brakeBias))/Be,0,1),Ye=Math.max(Math.sqrt(1-We*We),.22),je=Math.max(C*t.driveTraction*S.longitudinal,1),ct=Gt(Math.abs(pe)*t.brakeBias/je,0,1),D=Math.max(Math.sqrt(1-ct*ct),.35),ve=ou(B,t.peakSlipFront,t.gripFalloff,t.gripFront,C,s.surfFL,s.surfFR)*D,De=ou(X,t.peakSlipRear,t.gripFalloff,t.gripRear,F,s.surfRL,s.surfRR)*ye*Ye,$e=(we-ve*Math.sin(P))/t.mass+u*s.yawRate,Se=(ve*Math.cos(P)+De)/t.mass-l*s.yawRate;s.aLongSmooth+=(we/t.mass-s.aLongSmooth)*Gt(n*9,0,1),l+=$e*n,u+=Se*n;const at=ve*Math.cos(P)*f-De*d;s.yawRate+=at/t.inertia*n;const Pe=Gt(1-Math.abs(l)/t.kinematicBlendSpeed,0,1);if(Pe>0){const me=l/k*Math.tan(P);s.yawRate=s.yawRate*(1-Pe)+me*Pe,u*=1-Pe*Gt(n*20,0,1)}e.handbrake&&Math.abs(l)>6&&(s.yawRate+=e.steer*t.handbrakeKick*Math.min(1,Math.abs(l)/15)*n*Math.sign(l)),s.yawRate*=1-Gt(n*t.yawDamping,0,1);const ke=Math.atan2(u,Math.max(Math.abs(l),.5));Math.abs(ke)<Math.abs(s.slipAngle)&&Math.abs(s.slipAngle)>.08&&(s.yawRate*=1-Gt(n*t.driftRecoverDamping,0,1)),s.yaw+=s.yawRate*n;const N=Math.sin(s.yaw),b=Math.cos(s.yaw);s.vx=l*N+u*b,s.vz=l*b-u*N,s.x+=s.vx*n,s.z+=s.vz*n,s.speed=l,s.shiftCut>0&&(s.shiftCut-=n);const Y=Math.abs(l)/(2*Math.PI*.31)*60,ae=Math.max(t.idleRpm,Y*K);let ce=ae;e.throttle>.4&&(e.handbrake||s.wheelspin>.05||Math.abs(X)>t.peakSlipRear*2.2)&&(ce=Math.max(ce,t.maxRpm*(.65+.3*e.throttle))),s.rpm+=(Math.min(ce,t.maxRpm)-s.rpm)*Gt(n*8,0,1),s.gear<t.gearRatios.length-1&&ae>t.shiftUpRpm&&e.throttle>.2&&!e.handbrake?(s.gear++,s.shiftCut=t.shiftCutTime):s.gear>0&&ae<t.shiftDownRpm&&s.gear--,s.wallHit=0;const Re=1;for(const me of[{px:s.x+v*(f*.8),pz:s.z+g*(f*.8)},{px:s.x-v*(d*.8),pz:s.z-g*(d*.8)}])for(const oe of r){const Ie=Gt(me.px,oe.minX,oe.maxX),ue=Gt(me.pz,oe.minZ,oe.maxZ),Ee=me.px-Ie,et=me.pz-ue,He=Ee*Ee+et*et;if(He>=Re*Re)continue;const Me=Math.sqrt(Math.max(He,1e-6));let Ve=Ee/Me,qe=et/Me;He<1e-6&&(Ve=-v,qe=-g);const Qe=Re-Me;s.x+=Ve*Qe,s.z+=qe*Qe;const G=s.vx*Ve+s.vz*qe;if(G<0){const de=oe.soft?.45:1,te=-(1+(oe.soft?.05:Math.min(.6,.25+Math.abs(G)*.01)))*G*de;s.vx+=Ve*te,s.vz+=qe*te;const ie=-qe,ge=Ve,Ne=s.vx*ie+s.vz*ge;s.vx-=ie*Ne*(oe.soft?.12:.25),s.vz-=ge*Ne*(oe.soft?.12:.25),s.yawRate*=oe.soft?.9:.7,s.wallHit=Math.max(s.wallHit,Math.abs(G)*(oe.soft?.3:1))}}}function Hc(s,e){e.x=s.x,e.z=s.z,e.yaw=s.yaw,e.vx=s.vx,e.vz=s.vz,e.yawRate=s.yawRate,e.gear=s.gear,e.rpm=s.rpm,e.shiftCut=s.shiftCut,e.slipAngle=s.slipAngle,e.slipFront=s.slipFront,e.slipRear=s.slipRear,e.wheelspin=s.wheelspin,e.speed=s.speed,e.aLongSmooth=s.aLongSmooth,e.surfFL=s.surfFL,e.surfFR=s.surfFR,e.surfRL=s.surfRL,e.surfRR=s.surfRR,e.wallHit=s.wallHit}class Oy{constructor(){this.steer=0,this.throttle=0,this.assist="full"}shapeThrottle(e,t,n){const i=e?1:0,r=(e?t.throttleAttack:t.throttleRelease)*n;return this.throttle+=Math.sign(i-this.throttle)*Math.min(r,Math.abs(i-this.throttle)),this.throttle}update(e,t,n,i){const r=(e.left?1:0)-(e.right?1:0);if(r!==0){const a=n.steerAttack*i;this.steer+=Math.sign(r-this.steer)*Math.min(a,Math.abs(r-this.steer))}else{const a=n.steerRelease*i;this.steer+=Math.sign(-this.steer)*Math.min(a,Math.abs(this.steer))}let o=this.steer;if(this.assist!=="off"){const a=(this.assist==="full"?1:.5)*n.assistGain;if(Math.abs(t.slipAngle)>.12&&Math.abs(t.speed)>5){const l=n.steerMaxLow,u=-t.slipAngle*a,h=Math.max(-1,Math.min(1,u/l));o=Math.max(-1,Math.min(1,this.steer+h))}}return o}}function Fy(){return{total:0,chain:0,multiplier:1,drifting:!1,offroadTime:0,graceTime:0,banked:0,event:"none"}}const By=.22,zy=7,ky=1.2,Hy=3;function Vy(s,e,t){s.event="none";const n=Math.abs(e.slipAngle),i=Math.abs(e.speed),r=n>By&&i>zy,o=[e.surfFL,e.surfFR,e.surfRL,e.surfRR].filter(l=>l==="offroad").length,a=o>0;if(o===4?s.offroadTime+=t:s.offroadTime=0,e.wallHit>Hy&&s.chain>0){s.chain=0,s.multiplier=1,s.drifting=!1,s.event="crashed";return}r?(s.drifting=!0,s.graceTime=0,a||(s.chain+=n*i*t*14*s.multiplier,s.multiplier=Math.min(s.multiplier+t*.12,4)),s.offroadTime>1.5&&(s.banked=Math.floor(s.chain*.5),s.total+=s.banked,s.chain=0,s.multiplier=1,s.drifting=!1,s.event="banked")):(s.drifting||s.chain>0)&&(s.graceTime+=t,s.graceTime>ky&&(s.chain>1&&(s.banked=Math.floor(s.chain),s.total+=s.banked,s.event="banked"),s.chain=0,s.multiplier=1,s.drifting=!1))}var Tt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Gy(s){if(s.__esModule)return s;var e=s.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(s).forEach(function(n){var i=Object.getOwnPropertyDescriptor(s,n);Object.defineProperty(t,n,i.get?i:{enumerable:!0,get:function(){return s[n]}})}),t}var yf={};ArrayBuffer.isView||(ArrayBuffer.isView=s=>s!==null&&typeof s=="object"&&s.buffer instanceof ArrayBuffer);typeof globalThis>"u"&&typeof window<"u"&&(window.globalThis=window);var Us={},Ko={};(function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.ServerError=s.CloseCode=void 0,function(t){t[t.CONSENTED=4e3]="CONSENTED",t[t.DEVMODE_RESTART=4010]="DEVMODE_RESTART"}(s.CloseCode||(s.CloseCode={}));class e extends Error{constructor(n,i){super(i),this.name="ServerError",this.code=n}}s.ServerError=e})(Ko);var Sr={},Ns={};Object.defineProperty(Ns,"__esModule",{value:!0});Ns.decode=Ns.encode=void 0;function Hs(s,e){if(this._offset=e,s instanceof ArrayBuffer)this._buffer=s,this._view=new DataView(this._buffer);else if(ArrayBuffer.isView(s))this._buffer=s.buffer,this._view=new DataView(this._buffer,s.byteOffset,s.byteLength);else throw new Error("Invalid argument")}function Wy(s,e,t){for(var n="",i=0,r=e,o=e+t;r<o;r++){var a=s.getUint8(r);if(!(a&128)){n+=String.fromCharCode(a);continue}if((a&224)===192){n+=String.fromCharCode((a&31)<<6|s.getUint8(++r)&63);continue}if((a&240)===224){n+=String.fromCharCode((a&15)<<12|(s.getUint8(++r)&63)<<6|(s.getUint8(++r)&63)<<0);continue}if((a&248)===240){i=(a&7)<<18|(s.getUint8(++r)&63)<<12|(s.getUint8(++r)&63)<<6|(s.getUint8(++r)&63)<<0,i>=65536?(i-=65536,n+=String.fromCharCode((i>>>10)+55296,(i&1023)+56320)):n+=String.fromCharCode(i);continue}throw new Error("Invalid byte "+a.toString(16))}return n}Hs.prototype._array=function(s){for(var e=new Array(s),t=0;t<s;t++)e[t]=this._parse();return e};Hs.prototype._map=function(s){for(var e="",t={},n=0;n<s;n++)e=this._parse(),t[e]=this._parse();return t};Hs.prototype._str=function(s){var e=Wy(this._view,this._offset,s);return this._offset+=s,e};Hs.prototype._bin=function(s){var e=this._buffer.slice(this._offset,this._offset+s);return this._offset+=s,e};Hs.prototype._parse=function(){var s=this._view.getUint8(this._offset++),e,t=0,n=0,i=0,r=0;if(s<192)return s<128?s:s<144?this._map(s&15):s<160?this._array(s&15):this._str(s&31);if(s>223)return(255-s+1)*-1;switch(s){case 192:return null;case 194:return!1;case 195:return!0;case 196:return t=this._view.getUint8(this._offset),this._offset+=1,this._bin(t);case 197:return t=this._view.getUint16(this._offset),this._offset+=2,this._bin(t);case 198:return t=this._view.getUint32(this._offset),this._offset+=4,this._bin(t);case 199:if(t=this._view.getUint8(this._offset),n=this._view.getInt8(this._offset+1),this._offset+=2,n===-1){var o=this._view.getUint32(this._offset);return i=this._view.getInt32(this._offset+4),r=this._view.getUint32(this._offset+8),this._offset+=12,new Date((i*4294967296+r)*1e3+o/1e6)}return[n,this._bin(t)];case 200:return t=this._view.getUint16(this._offset),n=this._view.getInt8(this._offset+2),this._offset+=3,[n,this._bin(t)];case 201:return t=this._view.getUint32(this._offset),n=this._view.getInt8(this._offset+4),this._offset+=5,[n,this._bin(t)];case 202:return e=this._view.getFloat32(this._offset),this._offset+=4,e;case 203:return e=this._view.getFloat64(this._offset),this._offset+=8,e;case 204:return e=this._view.getUint8(this._offset),this._offset+=1,e;case 205:return e=this._view.getUint16(this._offset),this._offset+=2,e;case 206:return e=this._view.getUint32(this._offset),this._offset+=4,e;case 207:return i=this._view.getUint32(this._offset)*Math.pow(2,32),r=this._view.getUint32(this._offset+4),this._offset+=8,i+r;case 208:return e=this._view.getInt8(this._offset),this._offset+=1,e;case 209:return e=this._view.getInt16(this._offset),this._offset+=2,e;case 210:return e=this._view.getInt32(this._offset),this._offset+=4,e;case 211:return i=this._view.getInt32(this._offset)*Math.pow(2,32),r=this._view.getUint32(this._offset+4),this._offset+=8,i+r;case 212:if(n=this._view.getInt8(this._offset),this._offset+=1,n===0){this._offset+=1;return}return[n,this._bin(1)];case 213:return n=this._view.getInt8(this._offset),this._offset+=1,[n,this._bin(2)];case 214:return n=this._view.getInt8(this._offset),this._offset+=1,n===-1?(e=this._view.getUint32(this._offset),this._offset+=4,new Date(e*1e3)):[n,this._bin(4)];case 215:if(n=this._view.getInt8(this._offset),this._offset+=1,n===0)return i=this._view.getInt32(this._offset)*Math.pow(2,32),r=this._view.getUint32(this._offset+4),this._offset+=8,new Date(i+r);if(n===-1){i=this._view.getUint32(this._offset),r=this._view.getUint32(this._offset+4),this._offset+=8;var a=(i&3)*4294967296+r;return new Date(a*1e3+(i>>>2)/1e6)}return[n,this._bin(8)];case 216:return n=this._view.getInt8(this._offset),this._offset+=1,[n,this._bin(16)];case 217:return t=this._view.getUint8(this._offset),this._offset+=1,this._str(t);case 218:return t=this._view.getUint16(this._offset),this._offset+=2,this._str(t);case 219:return t=this._view.getUint32(this._offset),this._offset+=4,this._str(t);case 220:return t=this._view.getUint16(this._offset),this._offset+=2,this._array(t);case 221:return t=this._view.getUint32(this._offset),this._offset+=4,this._array(t);case 222:return t=this._view.getUint16(this._offset),this._offset+=2,this._map(t);case 223:return t=this._view.getUint32(this._offset),this._offset+=4,this._map(t)}throw new Error("Could not parse")};function $y(s,e=0){var t=new Hs(s,e),n=t._parse();if(t._offset!==s.byteLength)throw new Error(s.byteLength-t._offset+" trailing bytes");return n}Ns.decode=$y;var Xy=4294967296-1,jy=17179869184-1;function qy(s,e,t){for(var n=0,i=0,r=t.length;i<r;i++)n=t.charCodeAt(i),n<128?s.setUint8(e++,n):n<2048?(s.setUint8(e++,192|n>>6),s.setUint8(e++,128|n&63)):n<55296||n>=57344?(s.setUint8(e++,224|n>>12),s.setUint8(e++,128|n>>6&63),s.setUint8(e++,128|n&63)):(i++,n=65536+((n&1023)<<10|t.charCodeAt(i)&1023),s.setUint8(e++,240|n>>18),s.setUint8(e++,128|n>>12&63),s.setUint8(e++,128|n>>6&63),s.setUint8(e++,128|n&63))}function Ky(s){for(var e=0,t=0,n=0,i=s.length;n<i;n++)e=s.charCodeAt(n),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(n++,t+=4);return t}function ps(s,e,t){var n=typeof t,i=0,r=0,o=0,a=0,c=0,l=0;if(n==="string"){if(c=Ky(t),c<32)s.push(c|160),l=1;else if(c<256)s.push(217,c),l=2;else if(c<65536)s.push(218,c>>8,c),l=3;else if(c<4294967296)s.push(219,c>>24,c>>16,c>>8,c),l=5;else throw new Error("String too long");return e.push({_str:t,_length:c,_offset:s.length}),l+c}if(n==="number")return Math.floor(t)!==t||!isFinite(t)?(s.push(203),e.push({_float:t,_length:8,_offset:s.length}),9):t>=0?t<128?(s.push(t),1):t<256?(s.push(204,t),2):t<65536?(s.push(205,t>>8,t),3):t<4294967296?(s.push(206,t>>24,t>>16,t>>8,t),5):(o=t/Math.pow(2,32)>>0,a=t>>>0,s.push(207,o>>24,o>>16,o>>8,o,a>>24,a>>16,a>>8,a),9):t>=-32?(s.push(t),1):t>=-128?(s.push(208,t),2):t>=-32768?(s.push(209,t>>8,t),3):t>=-2147483648?(s.push(210,t>>24,t>>16,t>>8,t),5):(o=Math.floor(t/Math.pow(2,32)),a=t>>>0,s.push(211,o>>24,o>>16,o>>8,o,a>>24,a>>16,a>>8,a),9);if(n==="object"){if(t===null)return s.push(192),1;if(Array.isArray(t)){if(c=t.length,c<16)s.push(c|144),l=1;else if(c<65536)s.push(220,c>>8,c),l=3;else if(c<4294967296)s.push(221,c>>24,c>>16,c>>8,c),l=5;else throw new Error("Array too large");for(i=0;i<c;i++)l+=ps(s,e,t[i]);return l}if(t instanceof Date){var u=t.getTime(),h=Math.floor(u/1e3),f=(u-h*1e3)*1e6;return h>=0&&f>=0&&h<=jy?f===0&&h<=Xy?(s.push(214,255,h>>24,h>>16,h>>8,h),6):(o=h/4294967296,a=h&4294967295,s.push(215,255,f>>22,f>>14,f>>6,o,a>>24,a>>16,a>>8,a),10):(o=Math.floor(h/4294967296),a=h>>>0,s.push(199,12,255,f>>24,f>>16,f>>8,f,o>>24,o>>16,o>>8,o,a>>24,a>>16,a>>8,a),15)}if(t instanceof ArrayBuffer){if(c=t.byteLength,c<256)s.push(196,c),l=2;else if(c<65536)s.push(197,c>>8,c),l=3;else if(c<4294967296)s.push(198,c>>24,c>>16,c>>8,c),l=5;else throw new Error("Buffer too large");return e.push({_bin:t,_length:c,_offset:s.length}),l+c}if(typeof t.toJSON=="function")return ps(s,e,t.toJSON());var d=[],_="",v=Object.keys(t);for(i=0,r=v.length;i<r;i++)_=v[i],t[_]!==void 0&&typeof t[_]!="function"&&d.push(_);if(c=d.length,c<16)s.push(c|128),l=1;else if(c<65536)s.push(222,c>>8,c),l=3;else if(c<4294967296)s.push(223,c>>24,c>>16,c>>8,c),l=5;else throw new Error("Object too large");for(i=0;i<c;i++)_=d[i],l+=ps(s,e,_),l+=ps(s,e,t[_]);return l}if(n==="boolean")return s.push(t?195:194),1;if(n==="undefined")return s.push(192),1;if(typeof t.toJSON=="function")return ps(s,e,t.toJSON());throw new Error("Could not encode")}function Yy(s){var e=[],t=[],n=ps(e,t,s),i=new ArrayBuffer(n),r=new DataView(i),o=0,a=0,c=-1;t.length>0&&(c=t[0]._offset);for(var l,u=0,h=0,f=0,d=e.length;f<d;f++)if(r.setUint8(a+f,e[f]),f+1===c){if(l=t[o],u=l._length,h=a+c,l._bin)for(var _=new Uint8Array(l._bin),v=0;v<u;v++)r.setUint8(h+v,_[v]);else l._str?qy(r,h,l._str):l._float!==void 0&&r.setFloat64(h,l._float);o++,a+=u,t[o]&&(c=t[o]._offset)}return i}Ns.encode=Yy;var Yo={},Zo={},Zy=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")},Jy=Tt&&Tt.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Zo,"__esModule",{value:!0});Zo.WebSocketTransport=void 0;const Qy=Jy(Zy),Ka=globalThis.WebSocket||Qy.default;class eM{constructor(e){this.events=e}send(e){e instanceof ArrayBuffer?this.ws.send(e):Array.isArray(e)&&this.ws.send(new Uint8Array(e).buffer)}connect(e,t){try{this.ws=new Ka(e,{headers:t,protocols:this.protocols})}catch{this.ws=new Ka(e,this.protocols)}this.ws.binaryType="arraybuffer",this.ws.onopen=this.events.onopen,this.ws.onmessage=this.events.onmessage,this.ws.onclose=this.events.onclose,this.ws.onerror=this.events.onerror}close(e,t){this.ws.close(e,t)}get isOpen(){return this.ws.readyState===Ka.OPEN}}Zo.WebSocketTransport=eM;Object.defineProperty(Yo,"__esModule",{value:!0});Yo.Connection=void 0;const tM=Zo;class nM{constructor(){this.events={},this.transport=new tM.WebSocketTransport(this.events)}send(e){this.transport.send(e)}connect(e,t){this.transport.connect(e,t)}close(e,t){this.transport.close(e,t)}get isOpen(){return this.transport.isOpen}}Yo.Connection=nM;var ml={};(function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.utf8Length=s.utf8Read=s.ErrorCode=s.Protocol=void 0,function(n){n[n.HANDSHAKE=9]="HANDSHAKE",n[n.JOIN_ROOM=10]="JOIN_ROOM",n[n.ERROR=11]="ERROR",n[n.LEAVE_ROOM=12]="LEAVE_ROOM",n[n.ROOM_DATA=13]="ROOM_DATA",n[n.ROOM_STATE=14]="ROOM_STATE",n[n.ROOM_STATE_PATCH=15]="ROOM_STATE_PATCH",n[n.ROOM_DATA_SCHEMA=16]="ROOM_DATA_SCHEMA",n[n.ROOM_DATA_BYTES=17]="ROOM_DATA_BYTES"}(s.Protocol||(s.Protocol={})),function(n){n[n.MATCHMAKE_NO_HANDLER=4210]="MATCHMAKE_NO_HANDLER",n[n.MATCHMAKE_INVALID_CRITERIA=4211]="MATCHMAKE_INVALID_CRITERIA",n[n.MATCHMAKE_INVALID_ROOM_ID=4212]="MATCHMAKE_INVALID_ROOM_ID",n[n.MATCHMAKE_UNHANDLED=4213]="MATCHMAKE_UNHANDLED",n[n.MATCHMAKE_EXPIRED=4214]="MATCHMAKE_EXPIRED",n[n.AUTH_FAILED=4215]="AUTH_FAILED",n[n.APPLICATION_ERROR=4216]="APPLICATION_ERROR"}(s.ErrorCode||(s.ErrorCode={}));function e(n,i){const r=n[i++];for(var o="",a=0,c=i,l=i+r;c<l;c++){var u=n[c];if(!(u&128)){o+=String.fromCharCode(u);continue}if((u&224)===192){o+=String.fromCharCode((u&31)<<6|n[++c]&63);continue}if((u&240)===224){o+=String.fromCharCode((u&15)<<12|(n[++c]&63)<<6|(n[++c]&63)<<0);continue}if((u&248)===240){a=(u&7)<<18|(n[++c]&63)<<12|(n[++c]&63)<<6|(n[++c]&63)<<0,a>=65536?(a-=65536,o+=String.fromCharCode((a>>>10)+55296,(a&1023)+56320)):o+=String.fromCharCode(a);continue}throw new Error("Invalid byte "+u.toString(16))}return o}s.utf8Read=e;function t(n=""){let i=0,r=0;for(let o=0,a=n.length;o<a;o++)i=n.charCodeAt(o),i<128?r+=1:i<2048?r+=2:i<55296||i>=57344?r+=3:(o++,r+=4);return r+1}s.utf8Length=t})(ml);var Vi={};Object.defineProperty(Vi,"__esModule",{value:!0});Vi.getSerializer=Vi.registerSerializer=void 0;const Mf={};function iM(s,e){Mf[s]=e}Vi.registerSerializer=iM;function sM(s){const e=Mf[s];if(!e)throw new Error("missing serializer: "+s);return e}Vi.getSerializer=sM;var Er={};Object.defineProperty(Er,"__esModule",{value:!0});Er.createNanoEvents=void 0;const rM=()=>({emit(s,...e){let t=this.events[s]||[];for(let n=0,i=t.length;n<i;n++)t[n](...e)},events:{},on(s,e){var t;return!((t=this.events[s])===null||t===void 0)&&t.push(e)||(this.events[s]=[e]),()=>{var n;this.events[s]=(n=this.events[s])===null||n===void 0?void 0:n.filter(i=>e!==i)}}});Er.createNanoEvents=rM;var Os={};Object.defineProperty(Os,"__esModule",{value:!0});Os.createSignal=Os.EventEmitter=void 0;class Sf{constructor(){this.handlers=[]}register(e,t=!1){return this.handlers.push(e),this}invoke(...e){this.handlers.forEach(t=>t.apply(this,e))}invokeAsync(...e){return Promise.all(this.handlers.map(t=>t.apply(this,e)))}remove(e){const t=this.handlers.indexOf(e);this.handlers[t]=this.handlers[this.handlers.length-1],this.handlers.pop()}clear(){this.handlers=[]}}Os.EventEmitter=Sf;function oM(){const s=new Sf;function e(t){return s.register(t,this===null)}return e.once=t=>{const n=function(...i){t.apply(this,i),s.remove(n)};s.register(n)},e.remove=t=>s.remove(t),e.invoke=(...t)=>s.invoke(...t),e.invokeAsync=(...t)=>s.invokeAsync(...t),e.clear=()=>s.clear(),e}Os.createSignal=oM;var Vc={exports:{}};(function(s,e){(function(t,n){n(e)})(Tt,function(t){var n=function(y,p){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(M,R){M.__proto__=R}||function(M,R){for(var j in R)Object.prototype.hasOwnProperty.call(R,j)&&(M[j]=R[j])},n(y,p)};function i(y,p){if(typeof p!="function"&&p!==null)throw new TypeError("Class extends value "+String(p)+" is not a constructor or null");n(y,p);function M(){this.constructor=y}y.prototype=p===null?Object.create(p):(M.prototype=p.prototype,new M)}function r(y,p,M,R){var j=arguments.length,ne=j<3?p:R,ze;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")ne=Reflect.decorate(y,p,M,R);else for(var Ue=y.length-1;Ue>=0;Ue--)(ze=y[Ue])&&(ne=(j<3?ze(ne):j>3?ze(p,M,ne):ze(p,M))||ne);return j>3&&ne&&Object.defineProperty(p,M,ne),ne}function o(y,p,M){if(arguments.length===2)for(var R=0,j=p.length,ne;R<j;R++)(ne||!(R in p))&&(ne||(ne=Array.prototype.slice.call(p,0,R)),ne[R]=p[R]);return y.concat(ne||Array.prototype.slice.call(p))}typeof SuppressedError=="function"&&SuppressedError;var a=255,c=213;t.OPERATION=void 0,function(y){y[y.ADD=128]="ADD",y[y.REPLACE=0]="REPLACE",y[y.DELETE=64]="DELETE",y[y.DELETE_AND_ADD=192]="DELETE_AND_ADD",y[y.TOUCH=1]="TOUCH",y[y.CLEAR=10]="CLEAR"}(t.OPERATION||(t.OPERATION={}));var l=function(){function y(p,M,R){this.changed=!1,this.changes=new Map,this.allChanges=new Set,this.caches={},this.currentCustomOperation=0,this.ref=p,this.setParent(M,R)}return y.prototype.setParent=function(p,M,R){var j=this;if(this.indexes||(this.indexes=this.ref instanceof bt?this.ref._definition.indexes:{}),this.parent=p,this.parentIndex=R,!!M)if(this.root=M,this.ref instanceof bt){var ne=this.ref._definition;for(var ze in ne.schema){var Ue=this.ref[ze];if(Ue&&Ue.$changes){var rt=ne.indexes[ze];Ue.$changes.setParent(this.ref,M,rt)}}}else typeof this.ref=="object"&&this.ref.forEach(function(T,z){if(T instanceof bt){var q=T.$changes,W=j.ref.$changes.indexes[z];q.setParent(j.ref,j.root,W)}})},y.prototype.operation=function(p){this.changes.set(--this.currentCustomOperation,p)},y.prototype.change=function(p,M){M===void 0&&(M=t.OPERATION.ADD);var R=typeof p=="number"?p:this.indexes[p];this.assertValidIndex(R,p);var j=this.changes.get(R);(!j||j.op===t.OPERATION.DELETE||j.op===t.OPERATION.TOUCH)&&this.changes.set(R,{op:j&&j.op===t.OPERATION.DELETE?t.OPERATION.DELETE_AND_ADD:M,index:R}),this.allChanges.add(R),this.changed=!0,this.touchParents()},y.prototype.touch=function(p){var M=typeof p=="number"?p:this.indexes[p];this.assertValidIndex(M,p),this.changes.has(M)||this.changes.set(M,{op:t.OPERATION.TOUCH,index:M}),this.allChanges.add(M),this.touchParents()},y.prototype.touchParents=function(){this.parent&&this.parent.$changes.touch(this.parentIndex)},y.prototype.getType=function(p){if(this.ref._definition){var M=this.ref._definition;return M.schema[M.fieldsByIndex[p]]}else{var M=this.parent._definition,R=M.schema[M.fieldsByIndex[this.parentIndex]];return Object.values(R)[0]}},y.prototype.getChildrenFilter=function(){var p=this.parent._definition.childFilters;return p&&p[this.parentIndex]},y.prototype.getValue=function(p){return this.ref.getByIndex(p)},y.prototype.delete=function(p){var M=typeof p=="number"?p:this.indexes[p];if(M===void 0){console.warn("@colyseus/schema ".concat(this.ref.constructor.name,": trying to delete non-existing index: ").concat(p," (").concat(M,")"));return}var R=this.getValue(M);this.changes.set(M,{op:t.OPERATION.DELETE,index:M}),this.allChanges.delete(M),delete this.caches[M],R&&R.$changes&&(R.$changes.parent=void 0),this.changed=!0,this.touchParents()},y.prototype.discard=function(p,M){var R=this;p===void 0&&(p=!1),M===void 0&&(M=!1),this.ref instanceof bt||this.changes.forEach(function(j){if(j.op===t.OPERATION.DELETE){var ne=R.ref.getIndex(j.index);delete R.indexes[ne]}}),this.changes.clear(),this.changed=p,M&&this.allChanges.clear(),this.currentCustomOperation=0},y.prototype.discardAll=function(){var p=this;this.changes.forEach(function(M){var R=p.getValue(M.index);R&&R.$changes&&R.$changes.discardAll()}),this.discard()},y.prototype.cache=function(p,M){this.caches[p]=M},y.prototype.clone=function(){return new y(this.ref,this.parent,this.root)},y.prototype.ensureRefId=function(){this.refId===void 0&&(this.refId=this.root.getNextUniqueId())},y.prototype.assertValidIndex=function(p,M){if(p===void 0)throw new Error('ChangeTree: missing index for field "'.concat(M,'"'))},y}();function u(y,p,M,R){return y[p]||(y[p]=[]),y[p].push(M),R?.forEach(function(j,ne){return M(j,ne)}),function(){return f(y[p],y[p].indexOf(M))}}function h(y){var p=this,M=typeof this.$changes.getType()!="string";this.$items.forEach(function(R,j){y.push({refId:p.$changes.refId,op:t.OPERATION.DELETE,field:j,value:void 0,previousValue:R}),M&&p.$changes.root.removeRef(R.$changes.refId)})}function f(y,p){if(p===-1||p>=y.length)return!1;for(var M=y.length-1,R=p;R<M;R++)y[R]=y[R+1];return y.length=M,!0}var d=function(y,p){var M=y.toString(),R=p.toString();return M<R?-1:M>R?1:0};function _(y){return y.$proxy=!0,y=new Proxy(y,{get:function(p,M){return typeof M!="symbol"&&!isNaN(M)?p.at(M):p[M]},set:function(p,M,R){if(typeof M!="symbol"&&!isNaN(M)){var j=Array.from(p.$items.keys()),ne=parseInt(j[M]||M);R==null?p.deleteAt(ne):p.setAt(ne,R)}else p[M]=R;return!0},deleteProperty:function(p,M){return typeof M=="number"?p.deleteAt(M):delete p[M],!0},has:function(p,M){return typeof M!="symbol"&&!isNaN(Number(M))?p.$items.has(Number(M)):Reflect.has(p,M)}}),y}var v=function(){function y(){for(var p=[],M=0;M<arguments.length;M++)p[M]=arguments[M];this.$changes=new l(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,this.push.apply(this,p)}return y.prototype.onAdd=function(p,M){return M===void 0&&(M=!0),u(this.$callbacks||(this.$callbacks={}),t.OPERATION.ADD,p,M?this.$items:void 0)},y.prototype.onRemove=function(p){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.DELETE,p)},y.prototype.onChange=function(p){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.REPLACE,p)},y.is=function(p){return Array.isArray(p)||p.array!==void 0},Object.defineProperty(y.prototype,"length",{get:function(){return this.$items.size},set:function(p){p===0?this.clear():this.splice(p,this.length-p)},enumerable:!1,configurable:!0}),y.prototype.push=function(){for(var p=this,M=[],R=0;R<arguments.length;R++)M[R]=arguments[R];var j;return M.forEach(function(ne){j=p.$refId++,p.setAt(j,ne)}),j},y.prototype.pop=function(){var p=Array.from(this.$indexes.values()).pop();if(p!==void 0){this.$changes.delete(p),this.$indexes.delete(p);var M=this.$items.get(p);return this.$items.delete(p),M}},y.prototype.at=function(p){if(p=Math.trunc(p)||0,p<0&&(p+=this.length),!(p<0||p>=this.length)){var M=Array.from(this.$items.keys())[p];return this.$items.get(M)}},y.prototype.setAt=function(p,M){var R,j;if(M==null){console.error("ArraySchema items cannot be null nor undefined; Use `deleteAt(index)` instead.");return}if(this.$items.get(p)!==M){M.$changes!==void 0&&M.$changes.setParent(this,this.$changes.root,p);var ne=(j=(R=this.$changes.indexes[p])===null||R===void 0?void 0:R.op)!==null&&j!==void 0?j:t.OPERATION.ADD;this.$changes.indexes[p]=p,this.$indexes.set(p,p),this.$items.set(p,M),this.$changes.change(p,ne)}},y.prototype.deleteAt=function(p){var M=Array.from(this.$items.keys())[p];return M===void 0?!1:this.$deleteAt(M)},y.prototype.$deleteAt=function(p){return this.$changes.delete(p),this.$indexes.delete(p),this.$items.delete(p)},y.prototype.clear=function(p){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),p&&h.call(this,p),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},y.prototype.concat=function(){for(var p,M=[],R=0;R<arguments.length;R++)M[R]=arguments[R];return new(y.bind.apply(y,o([void 0],(p=Array.from(this.$items.values())).concat.apply(p,M),!1)))},y.prototype.join=function(p){return Array.from(this.$items.values()).join(p)},y.prototype.reverse=function(){var p=this,M=Array.from(this.$items.keys()),R=Array.from(this.$items.values()).reverse();return R.forEach(function(j,ne){p.setAt(M[ne],j)}),this},y.prototype.shift=function(){var p=Array.from(this.$items.keys()),M=p.shift();if(M!==void 0){var R=this.$items.get(M);return this.$deleteAt(M),R}},y.prototype.slice=function(p,M){var R=new y;return R.push.apply(R,Array.from(this.$items.values()).slice(p,M)),R},y.prototype.sort=function(p){var M=this;p===void 0&&(p=d);var R=Array.from(this.$items.keys()),j=Array.from(this.$items.values()).sort(p);return j.forEach(function(ne,ze){M.setAt(R[ze],ne)}),this},y.prototype.splice=function(p,M){M===void 0&&(M=this.length-p);for(var R=[],j=2;j<arguments.length;j++)R[j-2]=arguments[j];for(var ne=Array.from(this.$items.keys()),ze=[],Ue=p;Ue<p+M;Ue++)ze.push(this.$items.get(ne[Ue])),this.$deleteAt(ne[Ue]);for(var Ue=0;Ue<R.length;Ue++)this.setAt(p+Ue,R[Ue]);return ze},y.prototype.unshift=function(){for(var p=this,M=[],R=0;R<arguments.length;R++)M[R]=arguments[R];var j=this.length,ne=M.length,ze=Array.from(this.$items.values());return M.forEach(function(Ue,rt){p.setAt(rt,Ue)}),ze.forEach(function(Ue,rt){p.setAt(ne+rt,Ue)}),j+ne},y.prototype.indexOf=function(p,M){return Array.from(this.$items.values()).indexOf(p,M)},y.prototype.lastIndexOf=function(p,M){return M===void 0&&(M=this.length-1),Array.from(this.$items.values()).lastIndexOf(p,M)},y.prototype.every=function(p,M){return Array.from(this.$items.values()).every(p,M)},y.prototype.some=function(p,M){return Array.from(this.$items.values()).some(p,M)},y.prototype.forEach=function(p,M){Array.from(this.$items.values()).forEach(p,M)},y.prototype.map=function(p,M){return Array.from(this.$items.values()).map(p,M)},y.prototype.filter=function(p,M){return Array.from(this.$items.values()).filter(p,M)},y.prototype.reduce=function(p,M){return Array.prototype.reduce.apply(Array.from(this.$items.values()),arguments)},y.prototype.reduceRight=function(p,M){return Array.prototype.reduceRight.apply(Array.from(this.$items.values()),arguments)},y.prototype.find=function(p,M){return Array.from(this.$items.values()).find(p,M)},y.prototype.findIndex=function(p,M){return Array.from(this.$items.values()).findIndex(p,M)},y.prototype.fill=function(p,M,R){throw new Error("ArraySchema#fill() not implemented")},y.prototype.copyWithin=function(p,M,R){throw new Error("ArraySchema#copyWithin() not implemented")},y.prototype.toString=function(){return this.$items.toString()},y.prototype.toLocaleString=function(){return this.$items.toLocaleString()},y.prototype[Symbol.iterator]=function(){return Array.from(this.$items.values())[Symbol.iterator]()},Object.defineProperty(y,Symbol.species,{get:function(){return y},enumerable:!1,configurable:!0}),y.prototype.entries=function(){return this.$items.entries()},y.prototype.keys=function(){return this.$items.keys()},y.prototype.values=function(){return this.$items.values()},y.prototype.includes=function(p,M){return Array.from(this.$items.values()).includes(p,M)},y.prototype.flatMap=function(p,M){throw new Error("ArraySchema#flatMap() is not supported.")},y.prototype.flat=function(p){throw new Error("ArraySchema#flat() is not supported.")},y.prototype.findLast=function(){var p=Array.from(this.$items.values());return p.findLast.apply(p,arguments)},y.prototype.findLastIndex=function(){var p=Array.from(this.$items.values());return p.findLastIndex.apply(p,arguments)},y.prototype.with=function(p,M){var R=Array.from(this.$items.values());return R[p]=M,new(y.bind.apply(y,o([void 0],R,!1)))},y.prototype.toReversed=function(){return Array.from(this.$items.values()).reverse()},y.prototype.toSorted=function(p){return Array.from(this.$items.values()).sort(p)},y.prototype.toSpliced=function(p,M){var R=Array.from(this.$items.values());return R.toSpliced.apply(R,arguments)},y.prototype.setIndex=function(p,M){this.$indexes.set(p,M)},y.prototype.getIndex=function(p){return this.$indexes.get(p)},y.prototype.getByIndex=function(p){return this.$items.get(this.$indexes.get(p))},y.prototype.deleteByIndex=function(p){var M=this.$indexes.get(p);this.$items.delete(M),this.$indexes.delete(p)},y.prototype.toArray=function(){return Array.from(this.$items.values())},y.prototype.toJSON=function(){return this.toArray().map(function(p){return typeof p.toJSON=="function"?p.toJSON():p})},y.prototype.clone=function(p){var M;return p?M=new(y.bind.apply(y,o([void 0],Array.from(this.$items.values()),!1))):M=new(y.bind.apply(y,o([void 0],this.map(function(R){return R.$changes?R.clone():R}),!1))),M},y}();function g(y){return y.$proxy=!0,y=new Proxy(y,{get:function(p,M){return typeof M!="symbol"&&typeof p[M]>"u"?p.get(M):p[M]},set:function(p,M,R){return typeof M!="symbol"&&M.indexOf("$")===-1&&M!=="onAdd"&&M!=="onRemove"&&M!=="onChange"?p.set(M,R):p[M]=R,!0},deleteProperty:function(p,M){return p.delete(M),!0}}),y}var m=function(){function y(p){var M=this;if(this.$changes=new l(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,p)if(p instanceof Map||p instanceof y)p.forEach(function(j,ne){return M.set(ne,j)});else for(var R in p)this.set(R,p[R])}return y.prototype.onAdd=function(p,M){return M===void 0&&(M=!0),u(this.$callbacks||(this.$callbacks={}),t.OPERATION.ADD,p,M?this.$items:void 0)},y.prototype.onRemove=function(p){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.DELETE,p)},y.prototype.onChange=function(p){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.REPLACE,p)},y.is=function(p){return p.map!==void 0},y.prototype[Symbol.iterator]=function(){return this.$items[Symbol.iterator]()},Object.defineProperty(y.prototype,Symbol.toStringTag,{get:function(){return this.$items[Symbol.toStringTag]},enumerable:!1,configurable:!0}),Object.defineProperty(y,Symbol.species,{get:function(){return y},enumerable:!1,configurable:!0}),y.prototype.set=function(p,M){if(M==null)throw new Error("MapSchema#set('".concat(p,"', ").concat(M,"): trying to set ").concat(M," value on '").concat(p,"'."));p=p.toString();var R=typeof this.$changes.indexes[p]<"u",j=R?this.$changes.indexes[p]:this.$refId++,ne=R?t.OPERATION.REPLACE:t.OPERATION.ADD,ze=M.$changes!==void 0;if(ze&&M.$changes.setParent(this,this.$changes.root,j),!R)this.$changes.indexes[p]=j,this.$indexes.set(j,p);else{if(!ze&&this.$items.get(p)===M)return;ze&&this.$items.get(p)!==M&&(ne=t.OPERATION.ADD)}return this.$items.set(p,M),this.$changes.change(p,ne),this},y.prototype.get=function(p){return this.$items.get(p)},y.prototype.delete=function(p){return this.$changes.delete(p.toString()),this.$items.delete(p)},y.prototype.clear=function(p){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),p&&h.call(this,p),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},y.prototype.has=function(p){return this.$items.has(p)},y.prototype.forEach=function(p){this.$items.forEach(p)},y.prototype.entries=function(){return this.$items.entries()},y.prototype.keys=function(){return this.$items.keys()},y.prototype.values=function(){return this.$items.values()},Object.defineProperty(y.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),y.prototype.setIndex=function(p,M){this.$indexes.set(p,M)},y.prototype.getIndex=function(p){return this.$indexes.get(p)},y.prototype.getByIndex=function(p){return this.$items.get(this.$indexes.get(p))},y.prototype.deleteByIndex=function(p){var M=this.$indexes.get(p);this.$items.delete(M),this.$indexes.delete(p)},y.prototype.toJSON=function(){var p={};return this.forEach(function(M,R){p[R]=typeof M.toJSON=="function"?M.toJSON():M}),p},y.prototype.clone=function(p){var M;return p?M=Object.assign(new y,this):(M=new y,this.forEach(function(R,j){R.$changes?M.set(j,R.clone()):M.set(j,R)})),M},y}(),A={};function S(y,p){A[y]=p}function w(y){return A[y]}var U=function(){function y(){this.indexes={},this.fieldsByIndex={},this.deprecated={},this.descriptors={}}return y.create=function(p){var M=new y;return M.schema=Object.assign({},p&&p.schema||{}),M.indexes=Object.assign({},p&&p.indexes||{}),M.fieldsByIndex=Object.assign({},p&&p.fieldsByIndex||{}),M.descriptors=Object.assign({},p&&p.descriptors||{}),M.deprecated=Object.assign({},p&&p.deprecated||{}),M},y.prototype.addField=function(p,M){var R=this.getNextFieldIndex();this.fieldsByIndex[R]=p,this.indexes[p]=R,this.schema[p]=Array.isArray(M)?{array:M[0]}:M},y.prototype.hasField=function(p){return this.indexes[p]!==void 0},y.prototype.addFilter=function(p,M){return this.filters||(this.filters={},this.indexesWithFilters=[]),this.filters[this.indexes[p]]=M,this.indexesWithFilters.push(this.indexes[p]),!0},y.prototype.addChildrenFilter=function(p,M){var R=this.indexes[p],j=this.schema[p];if(w(Object.keys(j)[0]))return this.childFilters||(this.childFilters={}),this.childFilters[R]=M,!0;console.warn("@filterChildren: field '".concat(p,"' can't have children. Ignoring filter."))},y.prototype.getChildrenFilter=function(p){return this.childFilters&&this.childFilters[this.indexes[p]]},y.prototype.getNextFieldIndex=function(){return Object.keys(this.schema||{}).length},y}();function I(y){return y._context&&y._context.useFilters}var P=function(){function y(){this.types={},this.schemas=new Map,this.useFilters=!1}return y.prototype.has=function(p){return this.schemas.has(p)},y.prototype.get=function(p){return this.types[p]},y.prototype.add=function(p,M){M===void 0&&(M=this.schemas.size),p._definition=U.create(p._definition),p._typeid=M,this.types[M]=p,this.schemas.set(p,M)},y.create=function(p){return p===void 0&&(p={}),function(M){return p.context||(p.context=new y),x(M,p)}},y}(),k=new P;function x(y,p){return p===void 0&&(p={}),function(M,R){var j=p.context||k,ne=M.constructor;if(ne._context=j,!y)throw new Error("".concat(ne.name,': @type() reference provided for "').concat(R,`" is undefined. Make sure you don't have any circular dependencies.`));j.has(ne)||j.add(ne);var ze=ne._definition;if(ze.addField(R,y),ze.descriptors[R]){if(ze.deprecated[R])return;try{throw new Error("@colyseus/schema: Duplicate '".concat(R,"' definition on '").concat(ne.name,`'.
Check @type() annotation`))}catch(W){var Ue=W.stack.split(`
`)[4].trim();throw new Error("".concat(W.message," ").concat(Ue))}}var rt=v.is(y),T=!rt&&m.is(y);if(typeof y!="string"&&!bt.is(y)){var z=Object.values(y)[0];typeof z!="string"&&!j.has(z)&&j.add(z)}if(p.manual){ze.descriptors[R]={enumerable:!0,configurable:!0,writable:!0};return}var q="_".concat(R);ze.descriptors[q]={enumerable:!1,configurable:!1,writable:!0},ze.descriptors[R]={get:function(){return this[q]},set:function(W){W!==this[q]&&(W!=null?(rt&&!(W instanceof v)&&(W=new(v.bind.apply(v,o([void 0],W,!1)))),T&&!(W instanceof m)&&(W=new m(W)),W.$proxy===void 0&&(T?W=g(W):rt&&(W=_(W))),this.$changes.change(R),W.$changes&&W.$changes.setParent(this,this.$changes.root,this._definition.indexes[R])):this[q]!==void 0&&this.$changes.delete(R),this[q]=W)},enumerable:!0,configurable:!0}}}function E(y){return function(p,M){var R=p.constructor,j=R._definition;j.addFilter(M,y)&&(R._context.useFilters=!0)}}function C(y){return function(p,M){var R=p.constructor,j=R._definition;j.addChildrenFilter(M,y)&&(R._context.useFilters=!0)}}function F(y){return y===void 0&&(y=!0),function(p,M){var R=p.constructor,j=R._definition;j.deprecated[M]=!0,y&&(j.descriptors[M]={get:function(){throw new Error("".concat(M," is deprecated."))},set:function(ne){},enumerable:!1,configurable:!0})}}function B(y,p,M){M===void 0&&(M={}),M.context||(M.context=y._context||M.context||k);for(var R in p)x(p[R],M)(y.prototype,R);return y}function X(y){for(var p=0,M=0,R=0,j=y.length;R<j;R++)p=y.charCodeAt(R),p<128?M+=1:p<2048?M+=2:p<55296||p>=57344?M+=3:(R++,M+=4);return M}function K(y,p,M){for(var R=0,j=0,ne=M.length;j<ne;j++)R=M.charCodeAt(j),R<128?y[p++]=R:R<2048?(y[p++]=192|R>>6,y[p++]=128|R&63):R<55296||R>=57344?(y[p++]=224|R>>12,y[p++]=128|R>>6&63,y[p++]=128|R&63):(j++,R=65536+((R&1023)<<10|M.charCodeAt(j)&1023),y[p++]=240|R>>18,y[p++]=128|R>>12&63,y[p++]=128|R>>6&63,y[p++]=128|R&63)}function H(y,p){y.push(p&255)}function L(y,p){y.push(p&255)}function $(y,p){y.push(p&255),y.push(p>>8&255)}function ee(y,p){y.push(p&255),y.push(p>>8&255)}function he(y,p){y.push(p&255),y.push(p>>8&255),y.push(p>>16&255),y.push(p>>24&255)}function pe(y,p){var M=p>>24,R=p>>16,j=p>>8,ne=p;y.push(ne&255),y.push(j&255),y.push(R&255),y.push(M&255)}function Be(y,p){var M=Math.floor(p/Math.pow(2,32)),R=p>>>0;pe(y,R),pe(y,M)}function Ke(y,p){var M=p/Math.pow(2,32)>>0,R=p>>>0;pe(y,R),pe(y,M)}function J(y,p){Ye(y,p)}function le(y,p){je(y,p)}var we=new Int32Array(2),ye=new Float32Array(we.buffer),We=new Float64Array(we.buffer);function Ye(y,p){ye[0]=p,he(y,we[0])}function je(y,p){We[0]=p,he(y,we[0]),he(y,we[1])}function ct(y,p){return L(y,p?1:0)}function D(y,p){p||(p="");var M=X(p),R=0;if(M<32)y.push(M|160),R=1;else if(M<256)y.push(217),L(y,M),R=2;else if(M<65536)y.push(218),ee(y,M),R=3;else if(M<4294967296)y.push(219),pe(y,M),R=5;else throw new Error("String too long");return K(y,y.length,p),R+M}function ve(y,p){if(isNaN(p))return ve(y,0);if(isFinite(p)){if(p!==(p|0))return y.push(203),je(y,p),9}else return ve(y,p>0?Number.MAX_SAFE_INTEGER:-Number.MAX_SAFE_INTEGER);return p>=0?p<128?(L(y,p),1):p<256?(y.push(204),L(y,p),2):p<65536?(y.push(205),ee(y,p),3):p<4294967296?(y.push(206),pe(y,p),5):(y.push(207),Ke(y,p),9):p>=-32?(y.push(224|p+32),1):p>=-128?(y.push(208),H(y,p),2):p>=-32768?(y.push(209),$(y,p),3):p>=-2147483648?(y.push(210),he(y,p),5):(y.push(211),Be(y,p),9)}var De=Object.freeze({__proto__:null,boolean:ct,float32:J,float64:le,int16:$,int32:he,int64:Be,int8:H,number:ve,string:D,uint16:ee,uint32:pe,uint64:Ke,uint8:L,utf8Write:K,writeFloat32:Ye,writeFloat64:je});function $e(y,p,M){for(var R="",j=0,ne=p,ze=p+M;ne<ze;ne++){var Ue=y[ne];if(!(Ue&128)){R+=String.fromCharCode(Ue);continue}if((Ue&224)===192){R+=String.fromCharCode((Ue&31)<<6|y[++ne]&63);continue}if((Ue&240)===224){R+=String.fromCharCode((Ue&15)<<12|(y[++ne]&63)<<6|(y[++ne]&63)<<0);continue}if((Ue&248)===240){j=(Ue&7)<<18|(y[++ne]&63)<<12|(y[++ne]&63)<<6|(y[++ne]&63)<<0,j>=65536?(j-=65536,R+=String.fromCharCode((j>>>10)+55296,(j&1023)+56320)):R+=String.fromCharCode(j);continue}console.error("Invalid byte "+Ue.toString(16))}return R}function Se(y,p){return at(y,p)<<24>>24}function at(y,p){return y[p.offset++]}function Pe(y,p){return ke(y,p)<<16>>16}function ke(y,p){return y[p.offset++]|y[p.offset++]<<8}function N(y,p){return y[p.offset++]|y[p.offset++]<<8|y[p.offset++]<<16|y[p.offset++]<<24}function b(y,p){return N(y,p)>>>0}function Y(y,p){return Ie(y,p)}function ae(y,p){return ue(y,p)}function ce(y,p){var M=b(y,p),R=N(y,p)*Math.pow(2,32);return R+M}function re(y,p){var M=b(y,p),R=b(y,p)*Math.pow(2,32);return R+M}var Re=new Int32Array(2),me=new Float32Array(Re.buffer),oe=new Float64Array(Re.buffer);function Ie(y,p){return Re[0]=N(y,p),me[0]}function ue(y,p){return Re[0]=N(y,p),Re[1]=N(y,p),oe[0]}function Ee(y,p){return at(y,p)>0}function et(y,p){var M=y[p.offset++],R;M<192?R=M&31:M===217?R=at(y,p):M===218?R=ke(y,p):M===219&&(R=b(y,p));var j=$e(y,p.offset,R);return p.offset+=R,j}function He(y,p){var M=y[p.offset];return M<192&&M>160||M===217||M===218||M===219}function Me(y,p){var M=y[p.offset++];if(M<128)return M;if(M===202)return Ie(y,p);if(M===203)return ue(y,p);if(M===204)return at(y,p);if(M===205)return ke(y,p);if(M===206)return b(y,p);if(M===207)return re(y,p);if(M===208)return Se(y,p);if(M===209)return Pe(y,p);if(M===210)return N(y,p);if(M===211)return ce(y,p);if(M>223)return(255-M+1)*-1}function Ve(y,p){var M=y[p.offset];return M<128||M>=202&&M<=211}function qe(y,p){return y[p.offset]<160}function Qe(y,p){return y[p.offset-1]===a&&(y[p.offset]<128||y[p.offset]>=202&&y[p.offset]<=211)}var G=Object.freeze({__proto__:null,arrayCheck:qe,boolean:Ee,float32:Y,float64:ae,int16:Pe,int32:N,int64:ce,int8:Se,number:Me,numberCheck:Ve,readFloat32:Ie,readFloat64:ue,string:et,stringCheck:He,switchStructureCheck:Qe,uint16:ke,uint32:b,uint64:re,uint8:at}),de=function(){function y(p){var M=this;this.$changes=new l(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,p&&p.forEach(function(R){return M.add(R)})}return y.prototype.onAdd=function(p,M){return M===void 0&&(M=!0),u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.ADD,p,M?this.$items:void 0)},y.prototype.onRemove=function(p){return u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.DELETE,p)},y.prototype.onChange=function(p){return u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.REPLACE,p)},y.is=function(p){return p.collection!==void 0},y.prototype.add=function(p){var M=this.$refId++,R=p.$changes!==void 0;return R&&p.$changes.setParent(this,this.$changes.root,M),this.$changes.indexes[M]=M,this.$indexes.set(M,M),this.$items.set(M,p),this.$changes.change(M),M},y.prototype.at=function(p){var M=Array.from(this.$items.keys())[p];return this.$items.get(M)},y.prototype.entries=function(){return this.$items.entries()},y.prototype.delete=function(p){for(var M=this.$items.entries(),R,j;(j=M.next())&&!j.done;)if(p===j.value[1]){R=j.value[0];break}return R===void 0?!1:(this.$changes.delete(R),this.$indexes.delete(R),this.$items.delete(R))},y.prototype.clear=function(p){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),p&&h.call(this,p),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},y.prototype.has=function(p){return Array.from(this.$items.values()).some(function(M){return M===p})},y.prototype.forEach=function(p){var M=this;this.$items.forEach(function(R,j,ne){return p(R,j,M)})},y.prototype.values=function(){return this.$items.values()},Object.defineProperty(y.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),y.prototype.setIndex=function(p,M){this.$indexes.set(p,M)},y.prototype.getIndex=function(p){return this.$indexes.get(p)},y.prototype.getByIndex=function(p){return this.$items.get(this.$indexes.get(p))},y.prototype.deleteByIndex=function(p){var M=this.$indexes.get(p);this.$items.delete(M),this.$indexes.delete(p)},y.prototype.toArray=function(){return Array.from(this.$items.values())},y.prototype.toJSON=function(){var p=[];return this.forEach(function(M,R){p.push(typeof M.toJSON=="function"?M.toJSON():M)}),p},y.prototype.clone=function(p){var M;return p?M=Object.assign(new y,this):(M=new y,this.forEach(function(R){R.$changes?M.add(R.clone()):M.add(R)})),M},y}(),te=function(){function y(p){var M=this;this.$changes=new l(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,p&&p.forEach(function(R){return M.add(R)})}return y.prototype.onAdd=function(p,M){return M===void 0&&(M=!0),u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.ADD,p,M?this.$items:void 0)},y.prototype.onRemove=function(p){return u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.DELETE,p)},y.prototype.onChange=function(p){return u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.REPLACE,p)},y.is=function(p){return p.set!==void 0},y.prototype.add=function(p){var M,R;if(this.has(p))return!1;var j=this.$refId++;p.$changes!==void 0&&p.$changes.setParent(this,this.$changes.root,j);var ne=(R=(M=this.$changes.indexes[j])===null||M===void 0?void 0:M.op)!==null&&R!==void 0?R:t.OPERATION.ADD;return this.$changes.indexes[j]=j,this.$indexes.set(j,j),this.$items.set(j,p),this.$changes.change(j,ne),j},y.prototype.entries=function(){return this.$items.entries()},y.prototype.delete=function(p){for(var M=this.$items.entries(),R,j;(j=M.next())&&!j.done;)if(p===j.value[1]){R=j.value[0];break}return R===void 0?!1:(this.$changes.delete(R),this.$indexes.delete(R),this.$items.delete(R))},y.prototype.clear=function(p){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),p&&h.call(this,p),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},y.prototype.has=function(p){for(var M=this.$items.values(),R=!1,j;(j=M.next())&&!j.done;)if(p===j.value){R=!0;break}return R},y.prototype.forEach=function(p){var M=this;this.$items.forEach(function(R,j,ne){return p(R,j,M)})},y.prototype.values=function(){return this.$items.values()},Object.defineProperty(y.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),y.prototype.setIndex=function(p,M){this.$indexes.set(p,M)},y.prototype.getIndex=function(p){return this.$indexes.get(p)},y.prototype.getByIndex=function(p){return this.$items.get(this.$indexes.get(p))},y.prototype.deleteByIndex=function(p){var M=this.$indexes.get(p);this.$items.delete(M),this.$indexes.delete(p)},y.prototype.toArray=function(){return Array.from(this.$items.values())},y.prototype.toJSON=function(){var p=[];return this.forEach(function(M,R){p.push(typeof M.toJSON=="function"?M.toJSON():M)}),p},y.prototype.clone=function(p){var M;return p?M=Object.assign(new y,this):(M=new y,this.forEach(function(R){R.$changes?M.add(R.clone()):M.add(R)})),M},y}(),ie=function(){function y(){this.refIds=new WeakSet,this.containerIndexes=new WeakMap}return y.prototype.addRefId=function(p){this.refIds.has(p)||(this.refIds.add(p),this.containerIndexes.set(p,new Set))},y.get=function(p){return p.$filterState===void 0&&(p.$filterState=new y),p.$filterState},y}(),ge=function(){function y(){this.refs=new Map,this.refCounts={},this.deletedRefs=new Set,this.nextUniqueId=0}return y.prototype.getNextUniqueId=function(){return this.nextUniqueId++},y.prototype.addRef=function(p,M,R){R===void 0&&(R=!0),this.refs.set(p,M),R&&(this.refCounts[p]=(this.refCounts[p]||0)+1)},y.prototype.removeRef=function(p){var M=this.refCounts[p];if(M===void 0){console.warn("trying to remove reference ".concat(p," that doesn't exist"));return}if(M===0){console.warn("trying to remove reference ".concat(p," with 0 refCount"));return}this.refCounts[p]=M-1,this.deletedRefs.add(p)},y.prototype.clearRefs=function(){this.refs.clear(),this.deletedRefs.clear(),this.refCounts={}},y.prototype.garbageCollectDeletedRefs=function(){var p=this;this.deletedRefs.forEach(function(M){if(!(p.refCounts[M]>0)){var R=p.refs.get(M);if(R instanceof bt)for(var j in R._definition.schema)typeof R._definition.schema[j]!="string"&&R[j]&&R[j].$changes&&p.removeRef(R[j].$changes.refId);else{var ne=R.$changes.parent._definition,ze=ne.schema[ne.fieldsByIndex[R.$changes.parentIndex]];typeof Object.values(ze)[0]=="function"&&Array.from(R.values()).forEach(function(Ue){return p.removeRef(Ue.$changes.refId)})}p.refs.delete(M),delete p.refCounts[M]}}),this.deletedRefs.clear()},y}(),Ne=function(y){i(p,y);function p(){return y!==null&&y.apply(this,arguments)||this}return p}(Error);function Ze(y,p,M,R){var j,ne=!1;switch(p){case"number":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":case"int64":case"uint64":case"float32":case"float64":j="number",isNaN(y)&&console.log('trying to encode "NaN" in '.concat(M.constructor.name,"#").concat(R));break;case"string":j="string",ne=!0;break;case"boolean":return}if(typeof y!==j&&(!ne||ne&&y!==null)){var ze="'".concat(JSON.stringify(y),"'").concat(y&&y.constructor&&" (".concat(y.constructor.name,")")||"");throw new Ne("a '".concat(j,"' was expected, but ").concat(ze," was provided in ").concat(M.constructor.name,"#").concat(R))}}function ft(y,p,M,R){if(!(y instanceof p))throw new Ne("a '".concat(p.name,"' was expected, but '").concat(y.constructor.name,"' was provided in ").concat(M.constructor.name,"#").concat(R))}function Ot(y,p,M,R,j){Ze(M,y,R,j);var ne=De[y];if(ne)ne(p,M);else throw new Ne("a '".concat(y,"' was expected, but ").concat(M," was provided in ").concat(R.constructor.name,"#").concat(j))}function ht(y,p,M){return G[y](p,M)}var bt=function(){function y(){for(var p=[],M=0;M<arguments.length;M++)p[M]=arguments[M];Object.defineProperties(this,{$changes:{value:new l(this,void 0,new ge),enumerable:!1,writable:!0},$callbacks:{value:void 0,enumerable:!1,writable:!0}});var R=this._definition.descriptors;R&&Object.defineProperties(this,R),p[0]&&this.assign(p[0])}return y.onError=function(p){console.error(p)},y.is=function(p){return p._definition&&p._definition.schema!==void 0},y.prototype.onChange=function(p){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.REPLACE,p)},y.prototype.onRemove=function(p){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.DELETE,p)},y.prototype.assign=function(p){return Object.assign(this,p),this},Object.defineProperty(y.prototype,"_definition",{get:function(){return this.constructor._definition},enumerable:!1,configurable:!0}),y.prototype.setDirty=function(p,M){this.$changes.change(p,M)},y.prototype.listen=function(p,M,R){var j=this;return R===void 0&&(R=!0),this.$callbacks||(this.$callbacks={}),this.$callbacks[p]||(this.$callbacks[p]=[]),this.$callbacks[p].push(M),R&&this[p]!==void 0&&M(this[p],void 0),function(){return f(j.$callbacks[p],j.$callbacks[p].indexOf(M))}},y.prototype.decode=function(p,M,R){M===void 0&&(M={offset:0}),R===void 0&&(R=this);var j=[],ne=this.$changes.root,ze=p.length,Ue=0;for(ne.refs.set(Ue,this);M.offset<ze;){var rt=p[M.offset++];if(rt==a){Ue=Me(p,M);var T=ne.refs.get(Ue);if(!T)throw new Error('"refId" not found: '.concat(Ue));R=T;continue}var z=R.$changes,q=R._definition!==void 0,W=q?rt>>6<<6:rt;if(W===t.OPERATION.CLEAR){R.clear(j);continue}var V=q?rt%(W||255):Me(p,M),Q=q?R._definition.fieldsByIndex[V]:"",se=z.getType(V),Z=void 0,fe=void 0,Oe=void 0;if(q?fe=R["_".concat(Q)]:(fe=R.getByIndex(V),(W&t.OPERATION.ADD)===t.OPERATION.ADD?(Oe=R instanceof m?et(p,M):V,R.setIndex(V,Oe)):Oe=R.getIndex(V)),(W&t.OPERATION.DELETE)===t.OPERATION.DELETE&&(W!==t.OPERATION.DELETE_AND_ADD&&R.deleteByIndex(V),fe&&fe.$changes&&ne.removeRef(fe.$changes.refId),Z=null),Q===void 0){console.warn("@colyseus/schema: definition mismatch");for(var Ce={offset:M.offset};M.offset<ze&&!(Qe(p,M)&&(Ce.offset=M.offset+1,ne.refs.has(Me(p,Ce))));)M.offset++;continue}else if(W!==t.OPERATION.DELETE)if(y.is(se)){var _e=Me(p,M);if(Z=ne.refs.get(_e),W!==t.OPERATION.REPLACE){var Le=this.getSchemaType(p,M,se);Z||(Z=this.createTypeInstance(Le),Z.$changes.refId=_e,fe&&(Z.$callbacks=fe.$callbacks,fe.$changes.refId&&_e!==fe.$changes.refId&&ne.removeRef(fe.$changes.refId))),ne.addRef(_e,Z,Z!==fe)}}else if(typeof se=="string")Z=ht(se,p,M);else{var dt=w(Object.keys(se)[0]),pt=Me(p,M),yt=ne.refs.has(pt)?fe||ne.refs.get(pt):new dt.constructor;if(Z=yt.clone(!0),Z.$changes.refId=pt,fe&&(Z.$callbacks=fe.$callbacks,fe.$changes.refId&&pt!==fe.$changes.refId)){ne.removeRef(fe.$changes.refId);for(var Je=fe.entries(),Ae=void 0;(Ae=Je.next())&&!Ae.done;){var Rt=Ae.value,nt=Rt[0],Jt=Rt[1];j.push({refId:pt,op:t.OPERATION.DELETE,field:nt,value:void 0,previousValue:Jt})}}ne.addRef(pt,Z,yt!==fe)}if(Z!=null){if(Z.$changes&&Z.$changes.setParent(z.ref,z.root,V),R instanceof y)R[Q]=Z;else if(R instanceof m){var nt=Oe;R.$items.set(nt,Z),R.$changes.allChanges.add(V)}else if(R instanceof v)R.setAt(V,Z);else if(R instanceof de){var Qt=R.add(Z);R.setIndex(V,Qt)}else if(R instanceof te){var Qt=R.add(Z);Qt!==!1&&R.setIndex(V,Qt)}}fe!==Z&&j.push({refId:Ue,op:W,field:Q,dynamicIndex:Oe,value:Z,previousValue:fe})}return this._triggerChanges(j),ne.garbageCollectDeletedRefs(),j},y.prototype.encode=function(p,M,R){p===void 0&&(p=!1),M===void 0&&(M=[]),R===void 0&&(R=!1);for(var j=this.$changes,ne=new WeakSet,ze=[j],Ue=1,rt=0;rt<Ue;rt++){var T=ze[rt],z=T.ref,q=z instanceof y;T.ensureRefId(),ne.add(T),T!==j&&(T.changed||p)&&(L(M,a),ve(M,T.refId));for(var W=p?Array.from(T.allChanges):Array.from(T.changes.values()),V=0,Q=W.length;V<Q;V++){var se=p?{op:t.OPERATION.ADD,index:W[V]}:W[V],Z=se.index,fe=q?z._definition.fieldsByIndex&&z._definition.fieldsByIndex[Z]:Z,Oe=M.length;if(se.op!==t.OPERATION.TOUCH)if(q)L(M,Z|se.op);else{if(L(M,se.op),se.op===t.OPERATION.CLEAR)continue;ve(M,Z)}if(!q&&(se.op&t.OPERATION.ADD)==t.OPERATION.ADD&&z instanceof m){var Ce=T.ref.$indexes.get(Z);D(M,Ce)}if(se.op!==t.OPERATION.DELETE){var _e=T.getType(Z),Le=T.getValue(Z);if(Le&&Le.$changes&&!ne.has(Le.$changes)&&(ze.push(Le.$changes),Le.$changes.ensureRefId(),Ue++),se.op!==t.OPERATION.TOUCH){if(y.is(_e))ft(Le,_e,z,fe),ve(M,Le.$changes.refId),(se.op&t.OPERATION.ADD)===t.OPERATION.ADD&&this.tryEncodeTypeId(M,_e,Le.constructor);else if(typeof _e=="string")Ot(_e,M,Le,z,fe);else{var dt=w(Object.keys(_e)[0]);ft(z["_".concat(fe)],dt.constructor,z,fe),ve(M,Le.$changes.refId)}R&&T.cache(Z,M.slice(Oe))}}}!p&&!R&&T.discard()}return M},y.prototype.encodeAll=function(p){return this.encode(!0,[],p)},y.prototype.applyFilters=function(p,M){var R,j;M===void 0&&(M=!1);for(var ne=this,ze=new Set,Ue=ie.get(p),rt=[this.$changes],T=1,z=[],q=function(V){var Q=rt[V];if(ze.has(Q.refId))return"continue";var se=Q.ref,Z=se instanceof y;L(z,a),ve(z,Q.refId);var fe=Ue.refIds.has(Q),Oe=M||!fe;Ue.addRefId(Q);var Ce=Ue.containerIndexes.get(Q),_e=Oe?Array.from(Q.allChanges):Array.from(Q.changes.values());if(!M&&Z&&se._definition.indexesWithFilters){var Le=se._definition.indexesWithFilters;Le.forEach(function(zt){!Ce.has(zt)&&Q.allChanges.has(zt)&&(Oe?_e.push(zt):_e.push({op:t.OPERATION.ADD,index:zt}))})}for(var dt=0,pt=_e.length;dt<pt;dt++){var yt=Oe?{op:t.OPERATION.ADD,index:_e[dt]}:_e[dt];if(yt.op===t.OPERATION.CLEAR){L(z,yt.op);continue}var Je=yt.index;if(yt.op===t.OPERATION.DELETE){Z?L(z,yt.op|Je):(L(z,yt.op),ve(z,Je));continue}var Ae=Q.getValue(Je),Rt=Q.getType(Je);if(Z){var nt=se._definition.filters&&se._definition.filters[Je];if(nt&&!nt.call(se,p,Ae,ne)){Ae&&Ae.$changes&&ze.add(Ae.$changes.refId);continue}}else{var Jt=Q.parent,nt=Q.getChildrenFilter();if(nt&&!nt.call(Jt,p,se.$indexes.get(Je),Ae,ne)){Ae&&Ae.$changes&&ze.add(Ae.$changes.refId);continue}}if(Ae.$changes&&(rt.push(Ae.$changes),T++),yt.op!==t.OPERATION.TOUCH)if(yt.op===t.OPERATION.ADD||Z)z.push.apply(z,(R=Q.caches[Je])!==null&&R!==void 0?R:[]),Ce.add(Je);else if(Ce.has(Je))z.push.apply(z,(j=Q.caches[Je])!==null&&j!==void 0?j:[]);else{if(Ce.add(Je),L(z,t.OPERATION.ADD),ve(z,Je),se instanceof m){var Qt=Q.ref.$indexes.get(Je);D(z,Qt)}Ae.$changes?ve(z,Ae.$changes.refId):De[Rt](z,Ae)}else if(Ae.$changes&&!Z){if(L(z,t.OPERATION.ADD),ve(z,Je),se instanceof m){var Qt=Q.ref.$indexes.get(Je);D(z,Qt)}ve(z,Ae.$changes.refId)}}},W=0;W<T;W++)q(W);return z},y.prototype.clone=function(){var p,M=new this.constructor,R=this._definition.schema;for(var j in R)typeof this[j]=="object"&&typeof((p=this[j])===null||p===void 0?void 0:p.clone)=="function"?M[j]=this[j].clone():M[j]=this[j];return M},y.prototype.toJSON=function(){var p=this._definition.schema,M=this._definition.deprecated,R={};for(var j in p)!M[j]&&this[j]!==null&&typeof this[j]<"u"&&(R[j]=typeof this[j].toJSON=="function"?this[j].toJSON():this["_".concat(j)]);return R},y.prototype.discardAllChanges=function(){this.$changes.discardAll()},y.prototype.getByIndex=function(p){return this[this._definition.fieldsByIndex[p]]},y.prototype.deleteByIndex=function(p){this[this._definition.fieldsByIndex[p]]=void 0},y.prototype.tryEncodeTypeId=function(p,M,R){M._typeid!==R._typeid&&(L(p,c),ve(p,R._typeid))},y.prototype.getSchemaType=function(p,M,R){var j;return p[M.offset]===c&&(M.offset++,j=this.constructor._context.get(Me(p,M))),j||R},y.prototype.createTypeInstance=function(p){var M=new p;return M.$changes.root=this.$changes.root,M},y.prototype._triggerChanges=function(p){for(var M,R,j,ne,ze,Ue,rt,T,z,q=new Set,W=this.$changes.root.refs,V=function(se){var Z=p[se],fe=Z.refId,Oe=W.get(fe),Ce=Oe.$callbacks;if((Z.op&t.OPERATION.DELETE)===t.OPERATION.DELETE&&Z.previousValue instanceof y&&((R=(M=Z.previousValue.$callbacks)===null||M===void 0?void 0:M[t.OPERATION.DELETE])===null||R===void 0||R.forEach(function(_e){return _e()})),!Ce)return"continue";if(Oe instanceof y){if(!q.has(fe))try{(j=Ce?.[t.OPERATION.REPLACE])===null||j===void 0||j.forEach(function(_e){return _e()})}catch(_e){y.onError(_e)}try{Ce.hasOwnProperty(Z.field)&&((ne=Ce[Z.field])===null||ne===void 0||ne.forEach(function(_e){return _e(Z.value,Z.previousValue)}))}catch(_e){y.onError(_e)}}else Z.op===t.OPERATION.ADD&&Z.previousValue===void 0?(ze=Ce[t.OPERATION.ADD])===null||ze===void 0||ze.forEach(function(_e){var Le;return _e(Z.value,(Le=Z.dynamicIndex)!==null&&Le!==void 0?Le:Z.field)}):Z.op===t.OPERATION.DELETE?Z.previousValue!==void 0&&((Ue=Ce[t.OPERATION.DELETE])===null||Ue===void 0||Ue.forEach(function(_e){var Le;return _e(Z.previousValue,(Le=Z.dynamicIndex)!==null&&Le!==void 0?Le:Z.field)})):Z.op===t.OPERATION.DELETE_AND_ADD&&(Z.previousValue!==void 0&&((rt=Ce[t.OPERATION.DELETE])===null||rt===void 0||rt.forEach(function(_e){var Le;return _e(Z.previousValue,(Le=Z.dynamicIndex)!==null&&Le!==void 0?Le:Z.field)})),(T=Ce[t.OPERATION.ADD])===null||T===void 0||T.forEach(function(_e){var Le;return _e(Z.value,(Le=Z.dynamicIndex)!==null&&Le!==void 0?Le:Z.field)})),Z.value!==Z.previousValue&&((z=Ce[t.OPERATION.REPLACE])===null||z===void 0||z.forEach(function(_e){var Le;return _e(Z.value,(Le=Z.dynamicIndex)!==null&&Le!==void 0?Le:Z.field)}));q.add(fe)},Q=0;Q<p.length;Q++)V(Q)},y._definition=U.create(),y}();function fn(y){for(var p=[y.$changes],M=1,R={},j=R,ne=function(Ue){var rt=p[Ue];rt.changes.forEach(function(T){var z=rt.ref,q=T.index,W=z._definition?z._definition.fieldsByIndex[q]:z.$indexes.get(q);j[W]=rt.getValue(q)})},ze=0;ze<M;ze++)ne(ze);return R}var Dn={context:new P},yn=function(y){i(p,y);function p(){return y!==null&&y.apply(this,arguments)||this}return r([x("string",Dn)],p.prototype,"name",void 0),r([x("string",Dn)],p.prototype,"type",void 0),r([x("number",Dn)],p.prototype,"referencedType",void 0),p}(bt),Si=function(y){i(p,y);function p(){var M=y!==null&&y.apply(this,arguments)||this;return M.fields=new v,M}return r([x("number",Dn)],p.prototype,"id",void 0),r([x([yn],Dn)],p.prototype,"fields",void 0),p}(bt),Ar=function(y){i(p,y);function p(){var M=y!==null&&y.apply(this,arguments)||this;return M.types=new v,M}return p.encode=function(M){var R,j=M.constructor,ne=new p;ne.rootType=j._typeid;var ze=function(z,q){for(var W in q){var V=new yn;V.name=W;var Q=void 0;if(typeof q[W]=="string")Q=q[W];else{var se=q[W],Z=void 0;bt.is(se)?(Q="ref",Z=q[W]):(Q=Object.keys(se)[0],typeof se[Q]=="string"?Q+=":"+se[Q]:Z=se[Q]),V.referencedType=Z?Z._typeid:-1}V.type=Q,z.fields.push(V)}ne.types.push(z)},Ue=(R=j._context)===null||R===void 0?void 0:R.types;for(var rt in Ue){var T=new Si;T.id=Number(rt),ze(T,Ue[rt]._definition.schema)}return ne.encodeAll()},p.decode=function(M,R){var j=new P,ne=new p;ne.decode(M,R);var ze=ne.types.reduce(function(q,W){var V=function(se){i(Z,se);function Z(){return se!==null&&se.apply(this,arguments)||this}return Z}(bt),Q=W.id;return q[Q]=V,j.add(V,Q),q},{});ne.types.forEach(function(q){var W=ze[q.id];q.fields.forEach(function(V){var Q;if(V.referencedType!==void 0){var se=V.type,Z=ze[V.referencedType];if(!Z){var fe=V.type.split(":");se=fe[0],Z=fe[1]}se==="ref"?x(Z,{context:j})(W.prototype,V.name):x((Q={},Q[se]=Z,Q),{context:j})(W.prototype,V.name)}else x(V.type,{context:j})(W.prototype,V.name)})});var Ue=ze[ne.rootType],rt=new Ue;for(var T in Ue._definition.schema){var z=Ue._definition.schema[T];typeof z!="string"&&(rt[T]=typeof z=="function"?new z:new(w(Object.keys(z)[0])).constructor)}return rt},r([x([Si],Dn)],p.prototype,"types",void 0),r([x("number",Dn)],p.prototype,"rootType",void 0),p}(bt);S("map",{constructor:m}),S("array",{constructor:v}),S("set",{constructor:te}),S("collection",{constructor:de}),t.ArraySchema=v,t.CollectionSchema=de,t.Context=P,t.MapSchema=m,t.Reflection=Ar,t.ReflectionField=yn,t.ReflectionType=Si,t.Schema=bt,t.SchemaDefinition=U,t.SetSchema=te,t.decode=G,t.defineTypes=B,t.deprecated=F,t.dumpChanges=fn,t.encode=De,t.filter=E,t.filterChildren=C,t.hasFilter=I,t.registerType=S,t.type=x})})(Vc,Vc.exports);var Ef=Vc.exports,aM=Tt&&Tt.__createBinding||(Object.create?function(s,e,t,n){n===void 0&&(n=t);var i=Object.getOwnPropertyDescriptor(e,t);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(s,n,i)}:function(s,e,t,n){n===void 0&&(n=t),s[n]=e[t]}),cM=Tt&&Tt.__setModuleDefault||(Object.create?function(s,e){Object.defineProperty(s,"default",{enumerable:!0,value:e})}:function(s,e){s.default=e}),lM=Tt&&Tt.__importStar||function(s){if(s&&s.__esModule)return s;var e={};if(s!=null)for(var t in s)t!=="default"&&Object.prototype.hasOwnProperty.call(s,t)&&aM(e,s,t);return cM(e,s),e};Object.defineProperty(Sr,"__esModule",{value:!0});Sr.Room=void 0;const au=lM(Ns),hM=Yo,qt=ml,cu=Vi,uM=Er,ho=Os,ln=Ef,lu=Ko;class gl{constructor(e,t){this.onStateChange=(0,ho.createSignal)(),this.onError=(0,ho.createSignal)(),this.onLeave=(0,ho.createSignal)(),this.onJoin=(0,ho.createSignal)(),this.hasJoined=!1,this.onMessageHandlers=(0,uM.createNanoEvents)(),this.roomId=null,this.name=e,t&&(this.serializer=new((0,cu.getSerializer)("schema")),this.rootSchema=t,this.serializer.state=new t),this.onError((n,i)=>{var r;return(r=console.warn)===null||r===void 0?void 0:r.call(console,`colyseus.js - onError => (${n}) ${i}`)}),this.onLeave(()=>this.removeAllListeners())}get id(){return this.roomId}connect(e,t,n=this,i){const r=new hM.Connection;n.connection=r,r.events.onmessage=gl.prototype.onMessageCallback.bind(n),r.events.onclose=function(o){var a;if(!n.hasJoined){(a=console.warn)===null||a===void 0||a.call(console,`Room connection was closed unexpectedly (${o.code}): ${o.reason}`),n.onError.invoke(o.code,o.reason);return}o.code===lu.CloseCode.DEVMODE_RESTART&&t?t():(n.onLeave.invoke(o.code,o.reason),n.destroy())},r.events.onerror=function(o){var a;(a=console.warn)===null||a===void 0||a.call(console,`Room, onError (${o.code}): ${o.reason}`),n.onError.invoke(o.code,o.reason)},r.connect(e,i)}leave(e=!0){return new Promise(t=>{this.onLeave(n=>t(n)),this.connection?e?this.connection.send([qt.Protocol.LEAVE_ROOM]):this.connection.close():this.onLeave.invoke(lu.CloseCode.CONSENTED)})}onMessage(e,t){return this.onMessageHandlers.on(this.getMessageHandlerKey(e),t)}send(e,t){const n=[qt.Protocol.ROOM_DATA];typeof e=="string"?ln.encode.string(n,e):ln.encode.number(n,e);let i;if(t!==void 0){const r=au.encode(t);i=new Uint8Array(n.length+r.byteLength),i.set(new Uint8Array(n),0),i.set(new Uint8Array(r),n.length)}else i=new Uint8Array(n);this.connection.send(i.buffer)}sendBytes(e,t){const n=[qt.Protocol.ROOM_DATA_BYTES];typeof e=="string"?ln.encode.string(n,e):ln.encode.number(n,e);let i;i=new Uint8Array(n.length+(t.byteLength||t.length)),i.set(new Uint8Array(n),0),i.set(new Uint8Array(t),n.length),this.connection.send(i.buffer)}get state(){return this.serializer.getState()}removeAllListeners(){this.onJoin.clear(),this.onStateChange.clear(),this.onError.clear(),this.onLeave.clear(),this.onMessageHandlers.events={}}onMessageCallback(e){const t=Array.from(new Uint8Array(e.data)),n=t[0];if(n===qt.Protocol.JOIN_ROOM){let i=1;const r=(0,qt.utf8Read)(t,i);if(i+=(0,qt.utf8Length)(r),this.serializerId=(0,qt.utf8Read)(t,i),i+=(0,qt.utf8Length)(this.serializerId),!this.serializer){const o=(0,cu.getSerializer)(this.serializerId);this.serializer=new o}t.length>i&&this.serializer.handshake&&this.serializer.handshake(t,{offset:i}),this.reconnectionToken=`${this.roomId}:${r}`,this.hasJoined=!0,this.onJoin.invoke(),this.connection.send([qt.Protocol.JOIN_ROOM])}else if(n===qt.Protocol.ERROR){const i={offset:1},r=ln.decode.number(t,i),o=ln.decode.string(t,i);this.onError.invoke(r,o)}else if(n===qt.Protocol.LEAVE_ROOM)this.leave();else if(n===qt.Protocol.ROOM_DATA_SCHEMA){const i={offset:1},o=this.serializer.getState().constructor._context.get(ln.decode.number(t,i)),a=new o;a.decode(t,i),this.dispatchMessage(o,a)}else if(n===qt.Protocol.ROOM_STATE)t.shift(),this.setState(t);else if(n===qt.Protocol.ROOM_STATE_PATCH)t.shift(),this.patch(t);else if(n===qt.Protocol.ROOM_DATA){const i={offset:1},r=ln.decode.stringCheck(t,i)?ln.decode.string(t,i):ln.decode.number(t,i),o=t.length>i.offset?au.decode(e.data,i.offset):void 0;this.dispatchMessage(r,o)}else if(n===qt.Protocol.ROOM_DATA_BYTES){const i={offset:1},r=ln.decode.stringCheck(t,i)?ln.decode.string(t,i):ln.decode.number(t,i);this.dispatchMessage(r,new Uint8Array(t.slice(i.offset)))}}setState(e){this.serializer.setState(e),this.onStateChange.invoke(this.serializer.getState())}patch(e){this.serializer.patch(e),this.onStateChange.invoke(this.serializer.getState())}dispatchMessage(e,t){var n;const i=this.getMessageHandlerKey(e);this.onMessageHandlers.events[i]?this.onMessageHandlers.emit(i,t):this.onMessageHandlers.events["*"]?this.onMessageHandlers.emit("*",e,t):(n=console.warn)===null||n===void 0||n.call(console,`colyseus.js: onMessage() not registered for type '${e}'.`)}destroy(){this.serializer&&this.serializer.teardown()}getMessageHandlerKey(e){switch(typeof e){case"function":return`$${e._typeid}`;case"string":return e;case"number":return`i${e}`;default:throw new Error("invalid message type.")}}}Sr.Room=gl;var Jo={};function hu(s,e){e.headers=s.headers||{},e.statusMessage=s.statusText,e.statusCode=s.status,e.data=s.response}function Ln(s,e,t){return new Promise(function(n,i){t=t||{};var r=new XMLHttpRequest,o,a,c,l=t.body,u=t.headers||{};t.timeout&&(r.timeout=t.timeout),r.ontimeout=r.onerror=function(h){h.timeout=h.type=="timeout",i(h)},r.open(s,e.href||e),r.onload=function(){for(c=r.getAllResponseHeaders().trim().split(/[\r\n]+/),hu(r,r);a=c.shift();)a=a.split(": "),r.headers[a.shift().toLowerCase()]=a.join(": ");if(a=r.headers["content-type"],a&&~a.indexOf("application/json"))try{r.data=JSON.parse(r.data,t.reviver)}catch(h){return hu(r,h),i(h)}(r.status>=400?i:n)(r)},typeof FormData<"u"&&l instanceof FormData||l&&typeof l=="object"&&(u["content-type"]="application/json",l=JSON.stringify(l)),r.withCredentials=!!t.withCredentials;for(o in u)r.setRequestHeader(o,u[o]);r.send(l)})}var fM=Ln.bind(Ln,"GET"),dM=Ln.bind(Ln,"POST"),pM=Ln.bind(Ln,"PATCH"),mM=Ln.bind(Ln,"DELETE"),gM=Ln.bind(Ln,"PUT");const _M=Object.freeze(Object.defineProperty({__proto__:null,del:mM,get:fM,patch:pM,post:dM,put:gM,send:Ln},Symbol.toStringTag,{value:"Module"})),vM=Gy(_M);var xM=Tt&&Tt.__createBinding||(Object.create?function(s,e,t,n){n===void 0&&(n=t);var i=Object.getOwnPropertyDescriptor(e,t);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(s,n,i)}:function(s,e,t,n){n===void 0&&(n=t),s[n]=e[t]}),yM=Tt&&Tt.__setModuleDefault||(Object.create?function(s,e){Object.defineProperty(s,"default",{enumerable:!0,value:e})}:function(s,e){s.default=e}),MM=Tt&&Tt.__importStar||function(s){if(s&&s.__esModule)return s;var e={};if(s!=null)for(var t in s)t!=="default"&&Object.prototype.hasOwnProperty.call(s,t)&&xM(e,s,t);return yM(e,s),e};Object.defineProperty(Jo,"__esModule",{value:!0});Jo.HTTP=void 0;const SM=Ko,EM=MM(vM);class wM{constructor(e,t={}){this.client=e,this.headers=t}get(e,t={}){return this.request("get",e,t)}post(e,t={}){return this.request("post",e,t)}del(e,t={}){return this.request("del",e,t)}put(e,t={}){return this.request("put",e,t)}request(e,t,n={}){return EM[e](this.client.getHttpEndpoint(t),this.getOptions(n)).catch(i=>{var r;const o=i.statusCode,a=((r=i.data)===null||r===void 0?void 0:r.error)||i.statusMessage||i.message;throw!o&&!a?i:new SM.ServerError(o,a)})}getOptions(e){return e.headers=Object.assign({},this.headers,e.headers),this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),typeof cc<"u"&&cc.sys&&cc.sys.isNative||(e.withCredentials=!0),e}}Jo.HTTP=wM;var wr={},vi={};Object.defineProperty(vi,"__esModule",{value:!0});vi.getItem=vi.removeItem=vi.setItem=void 0;let er;function _l(){if(!er)try{er=typeof cc<"u"&&cc.sys&&cc.sys.localStorage?cc.sys.localStorage:window.localStorage}catch{}return er||(er={cache:{},setItem:function(s,e){this.cache[s]=e},getItem:function(s){this.cache[s]},removeItem:function(s){delete this.cache[s]}}),er}function AM(s,e){_l().setItem(s,e)}vi.setItem=AM;function TM(s){_l().removeItem(s)}vi.removeItem=TM;function bM(s,e){const t=_l().getItem(s);typeof Promise>"u"||!(t instanceof Promise)?e(t):t.then(n=>e(n))}vi.getItem=bM;var Ii=Tt&&Tt.__awaiter||function(s,e,t,n){function i(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function a(u){try{l(n.next(u))}catch(h){o(h)}}function c(u){try{l(n.throw(u))}catch(h){o(h)}}function l(u){u.done?r(u.value):i(u.value).then(a,c)}l((n=n.apply(s,e||[])).next())})},ds=Tt&&Tt.__classPrivateFieldGet||function(s,e,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?s!==e||!n:!e.has(s))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(s):n?n.value:e.get(s)},tr=Tt&&Tt.__classPrivateFieldSet||function(s,e,t,n,i){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?s!==e||!i:!e.has(s))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?i.call(s,t):i?i.value=t:e.set(s,t),t},yo,Gc,hi,Mo;Object.defineProperty(wr,"__esModule",{value:!0});wr.Auth=void 0;const Ya=vi,RM=Er;class CM{constructor(e){this.http=e,this.settings={path:"/auth",key:"colyseus-auth-token"},yo.set(this,!1),Gc.set(this,void 0),hi.set(this,void 0),Mo.set(this,(0,RM.createNanoEvents)()),(0,Ya.getItem)(this.settings.key,t=>this.token=t)}set token(e){this.http.authToken=e}get token(){return this.http.authToken}onChange(e){const t=ds(this,Mo,"f").on("change",e);return ds(this,yo,"f")||tr(this,Gc,new Promise((n,i)=>{this.getUserData().then(r=>{this.emitChange(Object.assign(Object.assign({},r),{token:this.token}))}).catch(r=>{this.emitChange({user:null,token:void 0})}).finally(()=>{n()})}),"f"),tr(this,yo,!0,"f"),t}getUserData(){return Ii(this,void 0,void 0,function*(){if(this.token)return(yield this.http.get(`${this.settings.path}/userdata`)).data;throw new Error("missing auth.token")})}registerWithEmailAndPassword(e,t,n){return Ii(this,void 0,void 0,function*(){const i=(yield this.http.post(`${this.settings.path}/register`,{body:{email:e,password:t,options:n}})).data;return this.emitChange(i),i})}signInWithEmailAndPassword(e,t){return Ii(this,void 0,void 0,function*(){const n=(yield this.http.post(`${this.settings.path}/login`,{body:{email:e,password:t}})).data;return this.emitChange(n),n})}signInAnonymously(e){return Ii(this,void 0,void 0,function*(){const t=(yield this.http.post(`${this.settings.path}/anonymous`,{body:{options:e}})).data;return this.emitChange(t),t})}sendPasswordResetEmail(e){return Ii(this,void 0,void 0,function*(){return(yield this.http.post(`${this.settings.path}/forgot-password`,{body:{email:e}})).data})}signInWithProvider(e,t={}){return Ii(this,void 0,void 0,function*(){return new Promise((n,i)=>{const r=t.width||480,o=t.height||768,a=this.token?`?token=${this.token}`:"",c=`Login with ${e[0].toUpperCase()+e.substring(1)}`,l=this.http.client.getHttpEndpoint(`${t.prefix||`${this.settings.path}/provider`}/${e}${a}`),u=screen.width/2-r/2,h=screen.height/2-o/2;tr(this,hi,window.open(l,c,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+r+", height="+o+", top="+h+", left="+u),"f");const f=_=>{_.data.user===void 0&&_.data.token===void 0||(clearInterval(d),ds(this,hi,"f").close(),tr(this,hi,void 0,"f"),window.removeEventListener("message",f),_.data.error!==void 0?i(_.data.error):(n(_.data),this.emitChange(_.data)))},d=setInterval(()=>{(!ds(this,hi,"f")||ds(this,hi,"f").closed)&&(tr(this,hi,void 0,"f"),i("cancelled"),window.removeEventListener("message",f))},200);window.addEventListener("message",f)})})}signOut(){return Ii(this,void 0,void 0,function*(){this.emitChange({user:null,token:null})})}emitChange(e){e.token!==void 0&&(this.token=e.token,e.token===null?(0,Ya.removeItem)(this.settings.key):(0,Ya.setItem)(this.settings.key,e.token)),ds(this,Mo,"f").emit("change",e)}}wr.Auth=CM;yo=new WeakMap,Gc=new WeakMap,hi=new WeakMap,Mo=new WeakMap;var Qo={};Object.defineProperty(Qo,"__esModule",{value:!0});Qo.discordURLBuilder=void 0;function PM(s){var e;const t=((e=window?.location)===null||e===void 0?void 0:e.hostname)||"localhost",n=s.hostname.split("."),i=!s.hostname.includes("trycloudflare.com")&&!s.hostname.includes("discordsays.com")&&n.length>2?`/${n[0]}`:"";return s.pathname.startsWith("/.proxy")?`${s.protocol}//${t}${i}${s.pathname}${s.search}`:`${s.protocol}//${t}/.proxy/colyseus${i}${s.pathname}${s.search}`}Qo.discordURLBuilder=PM;var Un=Tt&&Tt.__awaiter||function(s,e,t,n){function i(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function a(u){try{l(n.next(u))}catch(h){o(h)}}function c(u){try{l(n.throw(u))}catch(h){o(h)}}function l(u){u.done?r(u.value):i(u.value).then(a,c)}l((n=n.apply(s,e||[])).next())})},Za;Object.defineProperty(Us,"__esModule",{value:!0});Us.Client=Us.MatchMakeError=void 0;const IM=Ko,LM=Sr,DM=Jo,UM=wr,NM=Qo;class ea extends Error{constructor(e,t){super(e),this.code=t,Object.setPrototypeOf(this,ea.prototype)}}Us.MatchMakeError=ea;const uu=typeof window<"u"&&typeof((Za=window?.location)===null||Za===void 0?void 0:Za.hostname)<"u"?`${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}`:"ws://127.0.0.1:2567";class OM{constructor(e=uu,t){var n,i;if(typeof e=="string"){const r=e.startsWith("/")?new URL(e,uu):new URL(e),o=r.protocol==="https:"||r.protocol==="wss:",a=Number(r.port||(o?443:80));this.settings={hostname:r.hostname,pathname:r.pathname,port:a,secure:o}}else e.port===void 0&&(e.port=e.secure?443:80),e.pathname===void 0&&(e.pathname=""),this.settings=e;this.settings.pathname.endsWith("/")&&(this.settings.pathname=this.settings.pathname.slice(0,-1)),this.http=new DM.HTTP(this,t?.headers||{}),this.auth=new UM.Auth(this.http),this.urlBuilder=t?.urlBuilder,!this.urlBuilder&&typeof window<"u"&&(!((i=(n=window?.location)===null||n===void 0?void 0:n.hostname)===null||i===void 0)&&i.includes("discordsays.com"))&&(this.urlBuilder=NM.discordURLBuilder,console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))}joinOrCreate(e,t={},n){return Un(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("joinOrCreate",e,t,n)})}create(e,t={},n){return Un(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("create",e,t,n)})}join(e,t={},n){return Un(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("join",e,t,n)})}joinById(e,t={},n){return Un(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("joinById",e,t,n)})}reconnect(e,t){return Un(this,void 0,void 0,function*(){if(typeof e=="string"&&typeof t=="string")throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");const[n,i]=e.split(":");if(!n||!i)throw new Error(`Invalid reconnection token format.
The format should be roomId:reconnectionToken`);return yield this.createMatchMakeRequest("reconnect",n,{reconnectionToken:i},t)})}getAvailableRooms(e=""){return Un(this,void 0,void 0,function*(){return(yield this.http.get(`matchmake/${e}`,{headers:{Accept:"application/json"}})).data})}consumeSeatReservation(e,t,n){return Un(this,void 0,void 0,function*(){const i=this.createRoom(e.room.name,t);i.roomId=e.room.roomId,i.sessionId=e.sessionId;const r={sessionId:i.sessionId};e.reconnectionToken&&(r.reconnectionToken=e.reconnectionToken);const o=n||i;return i.connect(this.buildEndpoint(e.room,r),e.devMode&&(()=>Un(this,void 0,void 0,function*(){console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${i.roomId}'...`);let a=0,c=8;const l=()=>Un(this,void 0,void 0,function*(){a++;try{yield this.consumeSeatReservation(e,t,o),console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${i.roomId}'`)}catch{a<c?(console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${a} out of ${c})`),setTimeout(l,2e3)):console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)}});setTimeout(l,2e3)})),o,this.http.headers),new Promise((a,c)=>{const l=(u,h)=>c(new IM.ServerError(u,h));o.onError.once(l),o.onJoin.once(()=>{o.onError.remove(l),a(o)})})})}createMatchMakeRequest(e,t,n={},i,r){return Un(this,void 0,void 0,function*(){const o=(yield this.http.post(`matchmake/${e}/${t}`,{headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)})).data;if(o.error)throw new ea(o.error,o.code);return e==="reconnect"&&(o.reconnectionToken=n.reconnectionToken),yield this.consumeSeatReservation(o,i,r)})}createRoom(e,t){return new LM.Room(e,t)}buildEndpoint(e,t={}){const n=[];for(const o in t)t.hasOwnProperty(o)&&n.push(`${o}=${t[o]}`);let i=this.settings.secure?"wss://":"ws://";e.publicAddress?i+=`${e.publicAddress}`:i+=`${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;const r=`${i}/${e.processId}/${e.roomId}?${n.join("&")}`;return this.urlBuilder?this.urlBuilder(new URL(r)):r}getHttpEndpoint(e=""){const t=e.startsWith("/")?e:`/${e}`,n=`${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${t}`;return this.urlBuilder?this.urlBuilder(new URL(n)):n}getEndpointPort(){return this.settings.port!==80&&this.settings.port!==443?`:${this.settings.port}`:""}}Us.Client=OM;var ta={};Object.defineProperty(ta,"__esModule",{value:!0});ta.SchemaSerializer=void 0;const fu=Ef;class FM{setState(e){return this.state.decode(e)}getState(){return this.state}patch(e){return this.state.decode(e)}teardown(){var e,t;(t=(e=this.state)===null||e===void 0?void 0:e.$changes)===null||t===void 0||t.root.clearRefs()}handshake(e,t){this.state?new fu.Reflection().decode(e,t):this.state=fu.Reflection.decode(e,t)}}ta.SchemaSerializer=FM;var na={};Object.defineProperty(na,"__esModule",{value:!0});na.NoneSerializer=void 0;class BM{setState(e){}getState(){return null}patch(e){}teardown(){}handshake(e){}}na.NoneSerializer=BM;(function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.SchemaSerializer=s.registerSerializer=s.Auth=s.Room=s.ErrorCode=s.Protocol=s.MatchMakeError=s.Client=void 0;var e=Us;Object.defineProperty(s,"Client",{enumerable:!0,get:function(){return e.Client}}),Object.defineProperty(s,"MatchMakeError",{enumerable:!0,get:function(){return e.MatchMakeError}});var t=ml;Object.defineProperty(s,"Protocol",{enumerable:!0,get:function(){return t.Protocol}}),Object.defineProperty(s,"ErrorCode",{enumerable:!0,get:function(){return t.ErrorCode}});var n=Sr;Object.defineProperty(s,"Room",{enumerable:!0,get:function(){return n.Room}});var i=wr;Object.defineProperty(s,"Auth",{enumerable:!0,get:function(){return i.Auth}});const r=ta;Object.defineProperty(s,"SchemaSerializer",{enumerable:!0,get:function(){return r.SchemaSerializer}});const o=na,a=Vi;Object.defineProperty(s,"registerSerializer",{enumerable:!0,get:function(){return a.registerSerializer}}),(0,a.registerSerializer)("schema",r.SchemaSerializer),(0,a.registerSerializer)("none",o.NoneSerializer)})(yf);const zM=.12;class kM{constructor(e){this.room=null,this.remotes=new Map,this.connected=!1,this.myId="",this.serverScore=0,this.onHorn=()=>{},this.getSpawn=null,this.pending=[],this.unacked=[],this.scratch=kc(),this.lastName="",this.lastColor=0,this.reconnectTimer=0,this.map=e}async connect(e,t,n,i){this.lastName=e,this.lastColor=t;try{const r=location.protocol==="https:"?"wss":"ws",a=location.port==="5173"||location.port==="5174"?`${r}://${location.hostname||"localhost"}:2567`:`${r}://${location.host}`,c=new yf.Client(a);return this.room=await c.joinOrCreate("drift",{name:e,color:t,sx:n,sz:i}),this.myId=this.room.sessionId,this.connected=!0,this.room.onMessage("horn",l=>this.onHorn(l.id)),this.room.onLeave(()=>{this.connected=!1,this.room=null,this.remotes.clear(),this.unacked=[],this.pending=[],this.scheduleReconnect()}),!0}catch(r){return console.warn("[net] offline mode:",r),!1}}scheduleReconnect(){this.reconnectTimer||(this.reconnectTimer=window.setTimeout(async()=>{this.reconnectTimer=0;const e=this.getSpawn?.();await this.connect(this.lastName,this.lastColor,e?.x,e?.z)||this.scheduleReconnect()},2e3))}sendInput(e){!this.room||!this.connected||(this.unacked.push({...e}),this.unacked.length>240&&this.unacked.splice(0,this.unacked.length-240),this.pending.push(e),this.pending.length>=2&&(this.room.send("input",this.pending),this.pending=[]))}horn(){this.room?.send("horn")}reconcile(e){if(!this.room||!this.connected)return;const t=this.room.state?.players?.get?.(this.myId);if(!t)return;const n=t.lastSeq;for(;this.unacked.length&&this.unacked[0].seq<=n;)this.unacked.shift();const i=this.scratch;i.x=t.x,i.z=t.z,i.yaw=t.yaw,i.vx=t.vx,i.vz=t.vz,i.yawRate=t.yawRate,i.gear=t.gear,i.rpm=t.rpm,i.shiftCut=0,i.aLongSmooth=e.aLongSmooth,i.slipAngle=t.slip,i.speed=t.speed,i.slipFront=e.slipFront,i.slipRear=e.slipRear,i.surfFL=e.surfFL,i.surfFR=e.surfFR,i.surfRL=e.surfRL,i.surfRR=e.surfRR,i.wallHit=0;for(const o of this.unacked)xf(i,o,fi,An,this.map.surfaceAt,this.map.colliders,this.map.heightAt);const r=Math.hypot(i.x-e.x,i.z-e.z);if(r>4)Hc(i,e);else if(r>.05){e.x+=(i.x-e.x)*.15,e.z+=(i.z-e.z)*.15;let a=i.yaw-e.yaw;for(;a>Math.PI;)a-=Math.PI*2;for(;a<-Math.PI;)a+=Math.PI*2;e.yaw+=a*.15,e.vx+=(i.vx-e.vx)*.15,e.vz+=(i.vz-e.vz)*.15,e.yawRate+=(i.yawRate-e.yawRate)*.15}this.serverScore=t.score}sample(e){if(!this.room)return;const t=this.room.state?.players;if(!t?.forEach)return;const n=new Set;t.forEach((i,r)=>{if(n.add(r),r===this.myId)return;let o=this.remotes.get(r);o||(o={id:r,name:i.name,color:i.color,snapshots:[],brake:!1,handbrake:!1,headlights:!0,drifting:!1,score:0,rpm:900,x:i.x,z:i.z,yaw:i.yaw,speed:0,slip:0},this.remotes.set(r,o));const a=o.snapshots[o.snapshots.length-1];(!a||a.x!==i.x||a.z!==i.z||a.yaw!==i.yaw)&&(o.snapshots.push({t:e,x:i.x,z:i.z,yaw:i.yaw,speed:i.speed,slip:i.slip}),o.snapshots.length>20&&o.snapshots.shift()),o.brake=i.brake,o.handbrake=i.handbrake,o.headlights=i.headlights,o.drifting=i.drifting,o.score=i.score,o.rpm=i.rpm});for(const i of[...this.remotes.keys()])n.has(i)||this.remotes.delete(i)}interpolate(e){const t=e-zM;for(const n of this.remotes.values()){const i=n.snapshots;if(!i.length)continue;let r=i[0],o=i[i.length-1];for(let a=0;a<i.length-1;a++)if(i[a].t<=t&&i[a+1].t>=t){r=i[a],o=i[a+1];break}if(o.t<=t||r===o)n.x=o.x,n.z=o.z,n.yaw=o.yaw;else{const a=(t-r.t)/Math.max(o.t-r.t,1e-4);n.x=r.x+(o.x-r.x)*a,n.z=r.z+(o.z-r.z)*a;let c=o.yaw-r.yaw;for(;c>Math.PI;)c-=Math.PI*2;for(;c<-Math.PI;)c+=Math.PI*2;n.yaw=r.yaw+c*a}n.speed=o.speed,n.slip=o.slip}}}const HM=["#4a7a3a","#8a8f98","#4a6fa5","#a53a3a"];let Wc=3,wf="driver";function VM(){return new URLSearchParams(location.search).has("auto")?Promise.resolve():new Promise(s=>{const e=document.createElement("div");e.id="join",e.innerHTML=`
      <h1>NIGHT DRIFT</h1>
      <div class="sub">A PSX MIDNIGHT TOUGE</div>
      <div class="row"><span>NAME</span><input id="name" maxlength="16" placeholder="driver" /></div>
      <div class="row"><span>CAR</span><div class="colors">${HM.map((i,r)=>`<button data-i="${r}" style="background:${i}" class="${r===3?"sel":""}"></button>`).join("")}</div></div>
      <button id="start">DRIVE</button>
      <div class="status" id="join-status"></div>
    `,document.body.appendChild(e),e.querySelectorAll(".colors button").forEach(i=>{i.addEventListener("click",()=>{e.querySelectorAll(".colors button").forEach(r=>r.classList.remove("sel")),i.classList.add("sel"),Wc=parseInt(i.dataset.i)})});const t=()=>{wf=document.getElementById("name").value.trim()||"driver",e.remove(),window.removeEventListener("keydown",n),s()},n=i=>{i.code==="Enter"&&t()};document.getElementById("start").addEventListener("click",t),window.addEventListener("keydown",n)})}async function GM(){await VM();const s=document.getElementById("game"),e=new Gv(s,560),t=new Vu;t.fog=new rl(Kv,18,85);const n=new Yt(62,window.innerWidth/window.innerHeight,.3,950);window.addEventListener("resize",()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix()}),t.add(Zv()),t.add(new ef(new xe(.66,.7,.9),3.4));const i=new fl(new xe(.6,.65,.95),2.4);i.position.set(30,60,-40),t.add(i);const r=qv(),o=new No(r);await o.build(),t.add(o.group),t.add(by(r.lamps,r.mistAt,r.heightAt));const a=r.props.filter(D=>D.kind==="parked");for(const D of a){const ve=await ja(0,D.variant);ve.group.position.set(D.x,r.heightAt(D.x,D.z),D.z),ve.group.rotation.y=D.rot;const De=new xe;o.lampTintAt(D.x,D.z,De);for(const $e of ve.tintables)$e.color.copy(De);t.add(ve.group)}const c=await ja(Wc);t.add(c.group);const l=new iu(Vh,Do);t.add(l.group);const u=new Iy;t.add(u.group);const h=new Ly;t.add(h.mesh);const f=new Dy,d=new Uy;d.onExtra=(D,ve)=>{const De=t.fog;D==="fogNear"&&(De.near=ve),D==="fogFar"&&(De.far=ve),D==="vignette"&&(e.blitMat.uniforms.uVignette.value=ve),D==="crush"&&(e.blitMat.uniforms.uCrush.value=ve),D==="dither"&&(e.blitMat.uniforms.uDither.value=ve)};const _=new Ny;_.init().catch(D=>console.warn("audio init failed",D));const v=new kM(r),g=new URLSearchParams(location.search).get("spawn")?.split(",").map(Number),m=await v.connect(wf,Wc,g?.[0],g?.[1]);console.log("[net]",m?"connected to room":"offline single-player"),v.onHorn=()=>_.horn();const A=new Map,S=document.createElement("div");S.style.cssText="position:fixed;inset:0;pointer-events:none;font-family:var(--pix);font-size:11px;color:#cfd2e8;text-shadow:1px 1px 0 #000",document.body.appendChild(S);async function w(D){let ve=A.get(D.id);if(!ve){const De=await ja(D.color),$e=new iu(Vh,Do);t.add(De.group),t.add($e.group);const Se=document.createElement("div");Se.style.position="absolute",Se.textContent=D.name,S.appendChild(Se),ve={model:De,rig:$e,tag:Se},A.set(D.id,ve)}return ve}const U={left:!1,right:!1,throttle:!1,brake:!1,handbrake:!1};let I=!0,P=new URLSearchParams(location.search).has("pilot"),k=-1,x=0,E=0,C=0;const F=new Oy,B={KeyW:"throttle",ArrowUp:"throttle",KeyS:"brake",ArrowDown:"brake",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",Space:"handbrake"};window.addEventListener("keydown",D=>{const ve=B[D.code];ve&&(ve==="handbrake"&&!U.handbrake&&_.handbrakePull(),U[ve]=!0,D.preventDefault()),D.code==="KeyL"&&(I=!I),D.code==="KeyC"&&(C=(C+1)%3),D.code==="KeyM"&&(C=C===3?0:3),D.code==="KeyP"&&(P=!P),D.code==="KeyH"&&(_.horn(),v.horn()),D.code==="KeyR"&&Be()}),window.addEventListener("keyup",D=>{const ve=B[D.code];ve&&(U[ve]=!1)});const X=new URLSearchParams(location.search).get("spawn")?.split(",").map(Number),K=X?.[0]??r.spawn.x,H=X?.[1]??r.spawn.z,L=kc(K,H,r.spawn.yaw);v.getSpawn=()=>({x:L.x,z:L.z}),setInterval(()=>{document.body.dataset.dbg=JSON.stringify({speed:+L.speed.toFixed(2),rpm:Math.round(L.rpm),gear:L.gear,raw:{...U},surf:[L.surfFL,L.surfRL],wallHit:+L.wallHit.toFixed(2),x:+L.x.toFixed(1),z:+L.z.toFixed(1),yaw:+L.yaw.toFixed(2),slip:+L.slipAngle.toFixed(3),draws:e.renderer.info.render.calls,tris:e.renderer.info.render.triangles})},500);const $=kc();Hc(L,$);const ee=Fy();let he=0,pe=-10;function Be(){if(Ke()-pe<3)return;pe=Ke();let D=r.tiles[0],ve=1/0;for(const De of r.tiles){const $e=(De.x-L.x)**2+(De.z-L.z)**2;$e<ve&&(ve=$e,D=De)}L.x=D.x,L.z=D.z,L.yaw=D.dirs.n||D.dirs.s?0:Math.PI/2,L.vx=L.vz=L.yawRate=0,ee.chain=0,ee.multiplier=1}function Ke(){return performance.now()/1e3}const J=new O(L.x,4,L.z-10);let le=L.yaw;function we(D,ve,De,$e,Se){let Pe=De+$e*.55-le;for(;Pe>Math.PI;)Pe-=Math.PI*2;for(;Pe<-Math.PI;)Pe+=Math.PI*2;le+=Pe*Math.min(1,Se*4.2);const ke=t.fog;if(C===3){ke.near=900,ke.far=2e3,n.position.set(D,220,ve),n.up.set(0,0,-1),n.lookAt(D,0,ve),n.up.set(0,1,0);return}ke.near=d.extras.fogNear,ke.far=d.extras.fogFar;const N=C===1?6.2:8.6,b=C===1?2.2:3.1;if(C===2){const re=r.heightAt(D,ve);n.position.set(D+Math.sin(De)*.8,re+1.25,ve+Math.cos(De)*.8),n.lookAt(D+Math.sin(De)*20,r.heightAt(D+Math.sin(De)*20,ve+Math.cos(De)*20)+1,ve+Math.cos(De)*20);return}const Y=D-Math.sin(le)*N,ae=ve-Math.cos(le)*N,ce=r.heightAt(D,ve)+b;J.x+=(Y-J.x)*Math.min(1,Se*7),J.z+=(ae-J.z)*Math.min(1,Se*7),J.y+=(ce-J.y)*Math.min(1,Se*5),n.position.copy(J),n.lookAt(D+Math.sin(De)*3.5,r.heightAt(D,ve)+1.1,ve+Math.cos(De)*3.5)}const ye=new xe;let We=0,Ye=performance.now(),je={seq:0,steer:0,throttle:0,brake:0,handbrake:!1,headlights:!0};function ct(){requestAnimationFrame(ct);const D=performance.now();let ve=(D-Ye)/1e3;for(Ye=D,ve>.25&&(ve=.25),We+=ve;We>=An;){We-=An,Hc(L,$);let Re=F.update(U,L,fi,An),me=F.shapeThrottle(U.throttle,fi,An),oe=U.brake?1:0;if(P&&(U.left||U.right||U.throttle||U.brake||U.handbrake)&&(P=!1),P){const Qe=r.loopOrder;if(k<0){let Ne=1/0;for(let Ze=0;Ze<Qe.length;Ze++){const ft=(Qe[Ze].x-L.x)**2+(Qe[Ze].z-L.z)**2;ft<Ne&&(Ne=ft,k=Ze)}}let G=k,de=1/0;for(let Ne=0;Ne<=3;Ne++){const Ze=(k+Ne)%Qe.length,ft=(Qe[Ze].x-L.x)**2+(Qe[Ze].z-L.z)**2;ft<de&&(de=ft,G=Ze)}k=G,Math.abs(L.speed)<1&&E<=0?x+=An:x=Math.max(0,x-An),x>1.5&&(E=1.4,x=0);const te=Qe[(G+2)%Qe.length];let ge=Math.atan2(te.x-L.x,te.z-L.z)-L.yaw;for(;ge>Math.PI;)ge-=Math.PI*2;for(;ge<-Math.PI;)ge+=Math.PI*2;if(E>0)E-=An,me=0,oe=1,Re=-Math.sign(ge);else{Re=Math.max(-1,Math.min(1,ge*1.6));const Ze=[1,2,3].some(ft=>Qe[(G+ft)%Qe.length].piece!=="straight")?11:26;me=Math.abs(L.speed)<Ze?1:0,oe=Math.abs(L.speed)>Ze+4||Math.abs(ge)>.9&&Math.abs(L.speed)>10?.8:0}}je={seq:he++,steer:Re,throttle:me,brake:oe,handbrake:U.handbrake,headlights:I},xf(L,je,fi,An,r.surfaceAt,r.colliders,r.heightAt),Vy(ee,L,An),v.sendInput(je),L.wallHit>2.5&&_.crash(L.wallHit);const Ie=Math.abs(L.slipAngle)>.18&&Math.abs(L.speed)>5,ue=L.wheelspin>.12&&je.throttle>.3,Ee=L.surfRL!=="asphalt"&&L.surfRL!=="curb",et=L.surfRL!=="offroad"&&L.surfRR!=="offroad",He=Math.sin(L.yaw),Me=Math.cos(L.yaw),Ve=Math.cos(L.yaw),qe=-Math.sin(L.yaw);if((Ie||ue)&&et){const Qe=fi.cgToRear*.9,G=r.heightAt(L.x,L.z);h.addSegment(new O(L.x-He*Qe-Ve*.8,G,L.z-Me*Qe-qe*.8),new O(L.x-He*Qe+Ve*.8,G,L.z-Me*Qe+qe*.8),Math.max(Math.abs(L.slipAngle),.25+L.wheelspin*.4))}else h.breakSegment();if((Ie||ue)&&he%2===0){o.lampTintAt(L.x,L.z,ye,.8);const Qe=Ee,G=fi.cgToRear,de=r.heightAt(L.x,L.z);for(const te of[-1,1])u.spawn(L.x-He*G+Ve*te*.8+(Math.random()-.5)*.4,de+.25,L.z-Me*G+qe*te*.8+(Math.random()-.5)*.4,ye,Qe)}else L.surfRL==="offroad"&&Math.abs(L.speed)>8&&he%4===0&&(o.lampTintAt(L.x,L.z,ye,.8),u.spawn(L.x-He*1.6,r.heightAt(L.x,L.z)+.25,L.z-Me*1.6,ye,!0))}const De=We/An,$e=$.x+(L.x-$.x)*De,Se=$.z+(L.z-$.z)*De;let at=L.yaw-$.yaw;for(;at>Math.PI;)at-=Math.PI*2;for(;at<-Math.PI;)at+=Math.PI*2;const Pe=$.yaw+at*De,ke=r.heightAt($e,Se),N=r.heightAt($e+Math.sin(Pe)*1.6,Se+Math.cos(Pe)*1.6),b=r.heightAt($e-Math.sin(Pe)*1.6,Se-Math.cos(Pe)*1.6),Y=Math.atan2(N-b,3.2),ae=new O(Math.cos(Pe),0,-Math.sin(Pe)),ce=new wt().setFromAxisAngle(ae,-Y);ce.multiply(new wt().setFromAxisAngle(new O(0,1,0),Pe)),c.group.position.set($e,ke,Se),c.group.quaternion.copy(ce),l.group.position.set($e,ke,Se),l.group.quaternion.copy(ce),o.lampTintAt($e,Se,ye,0);for(const Re of c.tintables)Re.color.setRGB(1.8+ye.r*2.6,1.8+ye.g*2.6,1.8+ye.b*2.6);const re=r.mistAt($e,Se);if(l.update(I,U.brake&&L.speed>1,L.speed<-.5,re),Oi.uMist.value=d.extras.mist*(.4+re*.8),u.update(ve),we($e,Se,Pe,L.slipAngle,ve),f.update(L,ee,ve),_.update(L,je.throttle,ee.drifting,ve),v.connected){v.reconcile(L);const Re=performance.now()/1e3;v.sample(Re),v.interpolate(Re);const me=new xe;for(const oe of v.remotes.values()){const Ie=A.get(oe.id);if(!Ie){w(oe);continue}const ue=r.heightAt(oe.x,oe.z);Ie.model.group.position.set(oe.x,ue,oe.z),Ie.model.group.rotation.y=oe.yaw,Ie.rig.group.position.set(oe.x,ue,oe.z),Ie.rig.group.rotation.y=oe.yaw,o.lampTintAt(oe.x,oe.z,me,0);for(const et of Ie.model.tintables)et.color.setRGB(1.8+me.r*2.6,1.8+me.g*2.6,1.8+me.b*2.6);Ie.rig.update(oe.headlights,oe.brake,!1,r.mistAt(oe.x,oe.z));const Ee=new O(oe.x,r.heightAt(oe.x,oe.z)+2.2,oe.z).project(n);Ee.z<1?(Ie.tag.style.display="block",Ie.tag.style.left=(Ee.x*.5+.5)*window.innerWidth-20+"px",Ie.tag.style.top=(-Ee.y*.5+.5)*window.innerHeight+"px"):Ie.tag.style.display="none"}for(const[oe,Ie]of A)v.remotes.has(oe)||(t.remove(Ie.model.group),t.remove(Ie.rig.group),Ie.tag.remove(),A.delete(oe))}e.render(t,n)}requestAnimationFrame(ct)}GM().catch(s=>{console.error("BOOT FAILED:",s),document.body.insertAdjacentHTML("beforeend",`<div style="position:fixed;top:8px;left:8px;color:#ff7a6b;font-family:monospace;z-index:99">${String(s)}</div>`)});
