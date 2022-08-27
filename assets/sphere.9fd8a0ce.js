import{fw as A,A as p,fb as x,ff as l,f6 as h,a6 as $,a5 as a,fc as C,s as z,gO as E,fK as L,gP as O,fa as J,t as K,fg as N,fe as _,gQ as Q,fo as V,gN as k,f7 as B,gR as q,C as w,gJ as D}from"./index.333efadd.js";import{s as F,c as f,f as G}from"./vectorStacks.e32f3548.js";var g;(function(t){t[t.X=0]="X",t[t.Y=1]="Y",t[t.Z=2]="Z"})(g||(g={}));function yt(t){return t?{origin:A(t.origin),direction:A(t.direction)}:{origin:p(),direction:p()}}function Pt(t,e){const n=U.get();return n.origin=t,n.direction=e,n}function H(t,e,n){const o=x(t.direction,l(n,e,t.origin));return h(n,t.origin,$(n,t.direction,o)),n}function I(){return{origin:null,direction:null}}const U=new F(I);function W(t,e){const n=x(t,e)/(a(t)*a(e));return-C(n)}const tt=z.getLogger("esri.geometry.support.sphere");function S(){return E()}function Z(t,e=S()){return L(e,t)}function nt(t,e){return O(t[0],t[1],t[2],e)}function et(t){return t}function ot(t){t[0]=t[1]=t[2]=t[3]=0}function rt(t,e){return t[0]=t[1]=t[2]=0,t[3]=e,t}function m(t){return t[3]}function it(t){return t}function st(t,e,n,o){return O(t,e,n,o)}function ct(t,e,n){return t!==n&&J(n,t),n[3]=t[3]+e,n}function ut(t,e,n){return tt.error("sphere.setExtent is not yet supported"),t===n?n:Z(t,n)}function M(t,e,n){if(K(e))return!1;const{origin:o,direction:r}=e,i=at;i[0]=o[0]-t[0],i[1]=o[1]-t[1],i[2]=o[2]-t[2];const s=r[0]*r[0]+r[1]*r[1]+r[2]*r[2],c=2*(r[0]*i[0]+r[1]*i[1]+r[2]*i[2]),d=c*c-4*s*(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]-t[3]*t[3]);if(d<0)return!1;const b=Math.sqrt(d);let u=(-c-b)/(2*s);const y=(-c+b)/(2*s);return(u<0||y<u&&y>0)&&(u=y),!(u<0)&&(n&&(n[0]=o[0]+r[0]*u,n[1]=o[1]+r[1]*u,n[2]=o[2]+r[2]*u),!0)}const at=p();function ft(t,e){return M(t,e,null)}function gt(t,e,n){if(M(t,e,n))return n;const o=j(t,e,f.get());return h(n,e.origin,$(f.get(),e.direction,N(e.origin,o)/a(e.direction))),n}function j(t,e,n){const o=f.get(),r=G.get();_(o,e.origin,e.direction);const i=m(t);_(n,o,e.origin),$(n,n,1/a(n)*i);const s=T(t,e.origin),c=W(e.origin,n);return Q(r,c+s,o),V(n,n,r),n}function lt(t,e,n){return M(t,e,n)?n:(H(e,t,n),v(t,n,n))}function v(t,e,n){const o=l(f.get(),e,t),r=$(f.get(),o,t[3]/a(o));return h(n,r,t)}function dt(t,e){const n=l(f.get(),e,t),o=k(n),r=t[3]*t[3];return Math.sqrt(Math.abs(o-r))}function T(t,e){const n=l(f.get(),e,t),o=a(n),r=m(t),i=r+Math.abs(r-o);return C(r/i)}const P=p();function X(t,e,n,o){const r=l(P,e,t);switch(n){case g.X:{const i=q(r,P)[2];return w(o,-Math.sin(i),Math.cos(i),0)}case g.Y:{const i=q(r,P),s=i[1],c=i[2],d=Math.sin(s);return w(o,-d*Math.cos(c),-d*Math.sin(c),Math.cos(s))}case g.Z:return B(o,r);default:return}}function Y(t,e){const n=l(R,e,t);return a(n)-t[3]}function pt(t,e,n,o){const r=Y(t,e),i=X(t,e,g.Z,R),s=$(R,i,n-r);return h(o,e,s)}function $t(t,e){const n=D(t,e),o=m(t);return n<=o*o}const R=p(),ht=S();Object.freeze(Object.defineProperty({__proto__:null,create:S,copy:Z,fromCenterAndRadius:nt,wrap:et,clear:ot,fromRadius:rt,getRadius:m,getCenter:it,fromValues:st,elevate:ct,setExtent:ut,intersectRay:M,intersectsRay:ft,intersectRayClosestSilhouette:gt,closestPointOnSilhouette:j,closestPoint:lt,projectPoint:v,distanceToSilhouette:dt,angleToSilhouette:T,axisAt:X,altitudeAt:Y,setAltitudeAt:pt,containsPoint:$t,tmpSphere:ht},Symbol.toStringTag,{value:"Module"}));export{it as E,$t as Q,ft as X,S as _,yt as d,Pt as j,m as k,Z as q};
