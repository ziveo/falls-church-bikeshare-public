import{G as r}from"./geometryEngineBase.0f0d7ecf.js";import{t as u}from"./json.8bd707cf.js";function l(n){return r.extendedSpatialReferenceInfo(n)}function s(n,e,t){return r.clip(u,n,e,t)}function a(n,e,t){return r.cut(u,n,e,t)}function p(n,e,t){return r.contains(u,n,e,t)}function d(n,e,t){return r.crosses(u,n,e,t)}function g(n,e,t,i){return r.distance(u,n,e,t,i)}function m(n,e,t){return r.equals(u,n,e,t)}function h(n,e,t){return r.intersects(u,n,e,t)}function x(n,e,t){return r.touches(u,n,e,t)}function y(n,e,t){return r.within(u,n,e,t)}function w(n,e,t){return r.disjoint(u,n,e,t)}function A(n,e,t){return r.overlaps(u,n,e,t)}function E(n,e,t,i){return r.relate(u,n,e,t,i)}function S(n,e){return r.isSimple(u,n,e)}function V(n,e){return r.simplify(u,n,e)}function b(n,e,t=!1){return r.convexHull(u,n,e,t)}function v(n,e,t){return r.difference(u,n,e,t)}function z(n,e,t){return r.symmetricDifference(u,n,e,t)}function I(n,e,t){return r.intersect(u,n,e,t)}function R(n,e,t=null){return r.union(u,n,e,t)}function j(n,e,t,i,o,c,f){return r.offset(u,n,e,t,i,o,c,f)}function D(n,e,t,i,o=!1){return r.buffer(u,n,e,t,i,o)}function H(n,e,t,i,o,c,f){return r.geodesicBuffer(u,n,e,t,i,o,c,f)}function L(n,e,t,i=!0){return r.nearestCoordinate(u,n,e,t,i)}function _(n,e,t){return r.nearestVertex(u,n,e,t)}function q(n,e,t,i,o){return r.nearestVertices(u,n,e,t,i,o)}function B(n,e,t,i){if(e==null||i==null)throw new Error("Illegal Argument Exception");const o=r.rotate(e,t,i);return o.spatialReference=n,o}function C(n,e,t){if(e==null||t==null)throw new Error("Illegal Argument Exception");const i=r.flipHorizontal(e,t);return i.spatialReference=n,i}function O(n,e,t){if(e==null||t==null)throw new Error("Illegal Argument Exception");const i=r.flipVertical(e,t);return i.spatialReference=n,i}function G(n,e,t,i,o){return r.generalize(u,n,e,t,i,o)}function $(n,e,t,i){return r.densify(u,n,e,t,i)}function M(n,e,t,i,o=0){return r.geodesicDensify(u,n,e,t,i,o)}function P(n,e,t){return r.planarArea(u,n,e,t)}function T(n,e,t){return r.planarLength(u,n,e,t)}function k(n,e,t,i){return r.geodesicArea(u,n,e,t,i)}function F(n,e,t,i){return r.geodesicLength(u,n,e,t,i)}const N=Object.freeze(Object.defineProperty({__proto__:null,extendedSpatialReferenceInfo:l,clip:s,cut:a,contains:p,crosses:d,distance:g,equals:m,intersects:h,touches:x,within:y,disjoint:w,overlaps:A,relate:E,isSimple:S,simplify:V,convexHull:b,difference:v,symmetricDifference:z,intersect:I,union:R,offset:j,buffer:D,geodesicBuffer:H,nearestCoordinate:L,nearestVertex:_,nearestVertices:q,rotate:B,flipHorizontal:C,flipVertical:O,generalize:G,densify:$,geodesicDensify:M,planarArea:P,planarLength:T,geodesicArea:k,geodesicLength:F},Symbol.toStringTag,{value:"Module"}));export{I as A,$ as B,k as C,C as D,j as E,F as G,O as H,_ as I,M as L,N as O,G as R,q as S,B as V,P as _,m as a,D as b,h as c,E as d,x as f,A as g,b as h,a as i,R as j,y as l,S as m,d as o,w as p,T as q,s as r,p as s,l as t,g as u,H as v,z as w,v as x,V as y,L as z};
