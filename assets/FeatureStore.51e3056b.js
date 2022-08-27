import{e as h,eE as u,eB as _,t as a,aD as l,I,r as o,eF as m,s as y,f as g,eG as c,aq as f}from"./index.333efadd.js";import{h as B}from"./PooledRBush.29c66f24.js";import{e as b}from"./centroid.e2572cbc.js";const x=5e4,n={minX:0,minY:0,maxX:0,maxY:0};function v(s){n.minX=s[0],n.minY=s[1],n.maxX=s[2],n.maxY=s[3]}function p(s,e,t){v(e),s.search(n,t)}class M{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new B(9,h("esri-csp-restrictions")?e=>({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const e=new Array(this._idByBounds.size);let t=0;this._idByBounds.forEach((i,d)=>{e[t++]=d}),this._indexInvalid=!1,this._index.clear(),this._index.load(e)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter(e=>this._idByBounds.has(e))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const e=u();for(const t of this._boundsById.values())t&&(e[0]=Math.min(t[0],e[0]),e[1]=Math.min(t[1],e[1]),e[2]=Math.max(t[2],e[2]),e[3]=Math.max(t[3],e[3]));return e}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(e){const t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}forEachInBounds(e,t){this._loadIndex(),p(this._index,e,i=>t(this._idByBounds.get(i)))}get(e){return this._boundsById.get(e)}has(e){return this._boundsById.has(e)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(e,t){if(!this._indexInvalid){const i=this._boundsById.get(e);i&&(this._index.remove(i),this._idByBounds.delete(i))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>x&&this._loadIndex()))}}const S={getObjectId:s=>s.objectId,getAttributes:s=>s.attributes,getAttribute:(s,e)=>s.attributes[e],cloneWithGeometry:(s,e)=>new _(e,s.attributes,null,s.objectId),getGeometry:s=>s.geometry,getCentroid:(s,e)=>(a(s.centroid)&&(s.centroid=b(new l,s.geometry,e.hasZ,e.hasM)),s.centroid)};class T{constructor(e){this.geometryInfo=e,this._boundsStore=new M,this._featuresById=new Map,this._markedIds=new Set,this.events=new I,this.featureAdapter=S}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let e=0;return this._featuresById.forEach(t=>{o(t.geometry)&&t.geometry.coords&&(e+=t.geometry.coords.length)}),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const i=this._featuresById.get(t);i&&this._remove(i)}this._emitChanged()}forEachBounds(e,t,i){for(const d of e){const r=this._boundsStore.get(d.objectId);r&&t(m(i,r))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}toArray(){return Array.from(this._featuresById.values())}forEach(e){this._featuresById.forEach(t=>e(t))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,i=>{t(this._featuresById.get(i))})}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let e=!1;this._featuresById.forEach((t,i)=>{this._markedIds.has(i)||(e=!0,this._remove(t))}),this._markedIds.clear(),e&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(e){if(!e)return;const t=e.objectId;if(t==null)return void y.getLogger("esri.layers.graphics.data.FeatureStore").error(new g("featurestore:invalid-feature","feature id is missing",{feature:e}));const i=this._featuresById.get(t);let d;if(this._markedIds.add(t),i?(e.displayId=i.displayId,d=this._boundsStore.get(t),this._boundsStore.delete(t)):o(this.onFeatureAdd)&&this.onFeatureAdd(e),a(e.geometry)||!e.geometry.coords||!e.geometry.coords.length)return this._boundsStore.set(t,null),void this._featuresById.set(t,e);d=c(o(d)?d:f(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),o(d)&&this._boundsStore.set(t,d),this._featuresById.set(t,e)}_remove(e){return o(this.onFeatureRemove)&&this.onFeatureRemove(e),this._markedIds.delete(e.objectId),this._boundsStore.delete(e.objectId),this._featuresById.delete(e.objectId),e}}export{M as h,T as u};
