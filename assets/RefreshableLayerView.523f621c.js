import{$ as s,a0 as t,a1 as d,cL as h,p as l,s as o}from"./index.333efadd.js";const c=r=>{let e=class extends r{initialize(){this.handles.add(h(()=>this.layer,"refresh",i=>{this.doRefresh(i.dataChanged).catch(a=>{l(a)||o.getLogger(this.declaredClass).error(a)})}),"RefreshableLayerView")}};return s([t()],e.prototype,"layer",void 0),e=s([d("esri.layers.mixins.RefreshableLayerView")],e),e};export{c as i};
