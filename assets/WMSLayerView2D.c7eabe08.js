import{$ as s,a0 as m,cU as E,a1 as S,f as x,s as F,p as V,R,cE as U}from"./index.333efadd.js";import{t as $}from"./BitmapContainer.16955c1c.js";import{f as b,u as q}from"./LayerView.9e9b7d7f.js";import{S as W}from"./ExportStrategy.c15bbef6.js";import{i as L}from"./RefreshableLayerView.523f621c.js";import{l as j}from"./ExportWMSImageParameters.5c208ab2.js";import"./WGLContainer.91a92d50.js";import"./enums.c60b1dad.js";import"./pixelUtils.f7c7bbd7.js";import"./utils.fa9cc6c4.js";import"./Utils.0c18ff61.js";import"./number.6e30c64a.js";import"./enums.9bd521fc.js";import"./Texture.8d083704.js";import"./VertexElementDescriptor.2400a91d.js";import"./MaterialKey.146e5042.js";import"./alignmentUtils.84250e5d.js";import"./VertexArrayObject.527d5600.js";import"./ProgramTemplate.a02593e7.js";import"./StyleDefinition.d46cb482.js";import"./config.ded6d251.js";import"./GeometryUtils.b4d0dc88.js";import"./earcut.f65e2fcc.js";import"./Bitmap.2a22a6f0.js";const z=t=>{let e=class extends t{initialize(){this.exportImageParameters=new j({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var r;return(r=this.exportImageParameters)==null||r.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(r){const{layer:i}=this;if(!r)return Promise.reject(new x("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:i}));const{popupEnabled:n}=i;if(!n)return Promise.reject(new x("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:n}));const u=this.createFetchPopupFeaturesQuery(r);if(!u)return Promise.resolve([]);const{extent:o,width:a,height:p,x:c,y:l}=u;if(!(o&&a&&p))throw new x("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:o,width:a,height:p});const d=i.fetchFeatureInfo(o,a,p,c,l);return Promise.resolve(d?[d]:[])}};return s([m()],e.prototype,"exportImageParameters",void 0),s([m({readOnly:!0})],e.prototype,"exportImageVersion",null),s([m()],e.prototype,"layer",void 0),s([m(E)],e.prototype,"timeExtent",void 0),e=s([S("esri.layers.mixins.WMSLayerView")],e),e},C=F.getLogger("esri.views.2d.layers.WMSLayerView2D");let h=class extends z(L(b(q))){constructor(){super(...arguments),this.container=new $}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}update(t){this.strategy.update(t).catch(e=>{V(e)||C.error(e)})}attach(){const{layer:t,container:e}=this,{imageMaxHeight:r,imageMaxWidth:i}=t;this.strategy=new W({container:e,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:r,imageMaxWidth:i,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.handles.add(R(()=>this.exportImageVersion,()=>this.requestUpdate()),"exportImageVersion")}detach(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.strategy=null,this.container.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(t){const{view:e,container:r}=this,{x:i,y:n}=t,{spatialReference:u}=e;let o=null,a=0,p=0;if(r.children.some(M=>{const{width:f,height:w,resolution:v,x:y,y:g}=M,P=y+v*f,I=g-v*w;return i>=y&&i<=P&&n<=g&&n>=I&&(o=new U({xmin:y,ymin:I,xmax:P,ymax:g,spatialReference:u}),a=f,p=w,!0)}),!o)return null;const c=o.width/a,l=Math.round((i-o.xmin)/c),d=Math.round((o.ymax-n)/c);return{extent:o,width:a,height:p,x:l,y:d}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,r,i){return this.layer.fetchImage(t,e,r,{timeExtent:this.timeExtent,...i})}};s([m()],h.prototype,"strategy",void 0),s([m()],h.prototype,"updating",void 0),h=s([S("esri.views.2d.layers.WMSLayerView2D")],h);const pe=h;export{pe as default};
