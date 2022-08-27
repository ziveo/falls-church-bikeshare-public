import{bl as _,bm as g,r as M,bn as Z,bo as t,bp as h,bq as u,bg as l,br as c}from"./index.333efadd.js";import{t as p}from"./json.8bd707cf.js";const a=[0,0];function f(e,n){if(!n)return null;if("x"in n){const s={x:0,y:0};return[s.x,s.y]=e(n.x,n.y,a),n.z!=null&&(s.z=n.z),n.m!=null&&(s.m=n.m),s}if("xmin"in n){const s={xmin:0,ymin:0,xmax:0,ymax:0};return[s.xmin,s.ymin]=e(n.xmin,n.ymin,a),[s.xmax,s.ymax]=e(n.xmax,n.ymax,a),n.hasZ&&(s.zmin=n.zmin,s.zmax=n.zmax,s.hasZ=!0),n.hasM&&(s.mmin=n.mmin,s.mmax=n.mmax,s.hasM=!0),s}return"rings"in n?{rings:m(n.rings,e),hasM:n.hasM,hasZ:n.hasZ}:"paths"in n?{paths:m(n.paths,e),hasM:n.hasM,hasZ:n.hasZ}:"points"in n?{points:x(n.points,e),hasM:n.hasM,hasZ:n.hasZ}:void 0}function m(e,n){const s=[];for(const i of e)s.push(x(i,n));return s}function x(e,n){const s=[];for(const i of e){const r=n(i[0],i[1],[0,0]);s.push(r),i.length>2&&r.push(i[2]),i.length>3&&r.push(i[3])}return s}async function v(e,n){if(!n)return;const s=Array.isArray(e)?e.map(i=>M(i.geometry)&&i.geometry.spatialReference):[e];await Z(s.map(i=>({source:i,dest:n})))}const y=f.bind(null,_),b=f.bind(null,g);function S(e,n,s,i){if(!e||(s||(s=n,n=e.spatialReference),!t(n)||!t(s)||h(n,s)))return e;if(u(n,s)){const r=l(s)?y(e):b(e);return r.spatialReference=s,r}return c(p,[e],n,s,null,i)[0]}class z{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(n,s,i){if(!n||!n.length||!s||!i||h(s,i))return n;const r={geometries:n,inSpatialReference:s,outSpatialReference:i,resolve:null};return this._jobs.push(r),new Promise(o=>{r.resolve=o,this._timer===null&&(this._timer=setTimeout(this._process,10))})}_process(){this._timer=null;const n=this._jobs.shift();if(!n)return;const{geometries:s,inSpatialReference:i,outSpatialReference:r,resolve:o}=n;u(i,r)?l(r)?o(s.map(y)):o(s.map(b)):o(c(p,s,i,r,null,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}}const R=new z;function w(e,n,s){return R.push(e,n,s)}export{w as M,v as f,S as g};
