import{$ as c,a0 as p,a1 as F,a2 as X,t as v,cy as U,h as H,dS as K,ar as Z,r as $,R as W,S as D,a9 as ee,Q as te,s as j,f as se,g as T,a4 as re,B as ie,aF as ae,aV as oe,aW as ne,M as le,aX as he,E as de,F as ce,ap as ue,du as me,cs as pe,cL as ye,cG as fe,cH as _e,dT as ve,p as ge,cE as we,dU as Re,aq as Me}from"./index.333efadd.js";import{p as xe}from"./normalizeUtilsSync.d5715e9a.js";import{a as Ce}from"./utils.fa9cc6c4.js";import{c as B,f as Ee}from"./VertexArrayObject.527d5600.js";import{P as Te,G as $e,L as Se,D as Ve,F as G}from"./enums.c60b1dad.js";import{n as Q,u as qe}from"./Texture.8d083704.js";import{r as be}from"./vec3f32.ca7a14c1.js";import{b as Ae,W as De}from"./WGLContainer.91a92d50.js";import{I as Ie}from"./Utils.0c18ff61.js";import{f as Oe,u as Pe}from"./LayerView.9e9b7d7f.js";import"./MaterialKey.146e5042.js";import"./alignmentUtils.84250e5d.js";import"./enums.9bd521fc.js";import"./pixelUtils.f7c7bbd7.js";import"./VertexElementDescriptor.2400a91d.js";import"./ProgramTemplate.a02593e7.js";import"./number.6e30c64a.js";import"./StyleDefinition.d46cb482.js";import"./config.ded6d251.js";import"./GeometryUtils.b4d0dc88.js";import"./earcut.f65e2fcc.js";let m=class extends X{constructor(r){super(r)}get bounds(){const r=this.coords;return v(r)?null:U(r.extent)}get coords(){var e;const r=(e=H(this.element.georeference))==null?void 0:e.coords;return K(r,this.spatialReference).geometry}get normalizedCoords(){return Z.fromJSON(xe(this.coords))}get normalizedBounds(){return $(this.normalizedCoords)?U(this.normalizedCoords.extent):null}};c([p()],m.prototype,"spatialReference",void 0),c([p()],m.prototype,"element",void 0),c([p()],m.prototype,"bounds",null),c([p()],m.prototype,"coords",null),c([p()],m.prototype,"normalizedCoords",null),c([p()],m.prototype,"normalizedBounds",null),m=c([F("esri.layers.support.media.MediaElementView")],m);class ze extends Ce{constructor(e){super(),this.elementView=e,this.isWrapAround=!1,this._vertices=new Float32Array(20),this._handles=[],this._handles.push(W(()=>this.elementView.element.opacity,t=>this.opacity=t,D),W(()=>[this.elementView.coords],()=>{this.requestRender()},D),ee(()=>this.elementView.element.loaded,()=>{const t=this.elementView.element;this.ready(),t.type==="video"&&$(t.content)&&this._handles.push(te(t.content,"play",()=>this.requestRender()))},D)),e.element.load().catch(t=>{j.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new se("element-load-error","Element cannot be displayed",{element:e,error:t}))})}destroy(){var e;this._handles.forEach(t=>t.remove()),(e=this.texture)==null||e.dispose(),this.texture=null}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const{context:t}=e,s=this.elementView.element.content;if($(s)){const i=s instanceof HTMLImageElement,a=s instanceof HTMLVideoElement,o=i?s.naturalWidth:a?s.videoWidth:s.width,h=i?s.naturalHeight:a?s.videoHeight:s.height;this.texture?a&&!s.paused&&(this.texture.setData(s),this.requestRender(),(Q(t.gl)||T(o)&&T(h))&&this.texture.generateMipmap()):(this.texture=new qe(t,{pixelFormat:Te.RGBA,dataType:$e.UNSIGNED_BYTE,samplingMode:Se.LINEAR,wrapMode:Ve.CLAMP_TO_EDGE,width:o,height:h},s),(Q(t.gl)||T(o)&&T(h))&&this.texture.generateMipmap(),a&&!s.paused&&this.requestRender())}super.beforeRender(e)}_createTransforms(){return null}updateDrawCoords(e,t){const s=this.elementView.coords;if(v(s))return;const[i,a,o,h]=s.rings[0],f=this._vertices,{x:n,y:l}=e,u=t!==0;u?f.set([a[0]-n,a[1]-l,i[0]-n,i[1]-l,o[0]-n,o[1]-l,h[0]-n,h[1]-l,h[0]-n,h[1]-l,a[0]+t-n,a[1]-l,a[0]+t-n,a[1]-l,i[0]+t-n,i[1]-l,o[0]+t-n,o[1]-l,h[0]+t-n,h[1]-l]):f.set([a[0]-n,a[1]-l,i[0]-n,i[1]-l,o[0]-n,o[1]-l,h[0]-n,h[1]-l]),this.isWrapAround=u}getVAO(e,t,s){if(v(this.elementView.coords))return null;const i=this._vertices;if(this._vao)this._geometryVbo.setData(i);else{this._geometryVbo=B.createVertex(e,G.DYNAMIC_DRAW,i);const a=B.createVertex(e,G.STATIC_DRAW,new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]));this._vao=new Ee(e,s,t,{geometry:this._geometryVbo,tex:a})}return this._vao}}class Le extends Ae{constructor(){super(...arguments),this._localOrigin=re(0,0),this._viewStateId=-1,this._dvsMat3=ie(),this.requiresDedicatedFBO=!1}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"overlay",brushes:[De.overlay],target:()=>this.children,drawPhase:Ie.MAP});return[...super.prepareRenderPasses(e),t]}_updateMatrices(e){const{state:t}=e,{id:s,size:i,pixelRatio:a,resolution:o,rotation:h,viewpoint:f,displayMat3:n}=t;if(this._viewStateId===s)return;const l=Math.PI/180*h,u=a*i[0],g=a*i[1],{x:M,y:S}=f.targetGeometry,V=ae(M,t.spatialReference);this._localOrigin.x=V,this._localOrigin.y=S;const x=o*u,w=o*g,d=oe(this._dvsMat3);ne(d,d,n),le(d,d,he(u/2,g/2)),de(d,d,be(u/x,-g/w,1)),ce(d,d,-l),this._viewStateId=s}_updateOverlays(e,t){const{state:s}=e,{rotation:i,spatialReference:a,worldScreenWidth:o,size:h,viewpoint:f}=s,n=this._localOrigin;let l=0;if(a.isWrappable){const u=h[0],g=h[1],M=180/Math.PI*i,S=Math.abs(Math.cos(M)),V=Math.abs(Math.sin(M)),x=Math.round(u*S+g*V),[w,d]=ue(a).valid,y=me(a),{x:I,y:N}=f.targetGeometry,k=[I,N],q=[0,0];s.toScreen(q,k);const C=[0,0];let b;b=x>o?.5*o:.5*x;const O=Math.floor((I+.5*y)/y),Y=w+O*y,J=d+O*y,A=[q[0]+b,0];s.toMap(C,A),C[0]>J&&(l=y),A[0]=q[0]-b,s.toMap(C,A),C[0]<Y&&(l=-y);for(const E of t){const P=E.elementView.bounds;if(v(P))continue;const[z,,L]=P;z<w&&L>w?E.updateDrawCoords(n,y):L>d&&z<d?E.updateDrawCoords(n,-y):E.updateDrawCoords(n,l)}}else for(const u of t)u.updateDrawCoords(n,l)}}let _=class extends Oe(Pe){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this.layer=null,this.elements=new pe}attach(){this.handles.add(ye(()=>this.layer.source,"refresh",()=>{for(const r of this._tileStrategy.tiles)this._updateTile(r);this.requestUpdate()})),this._overlayContainer=new Le,this.container.addChild(this._overlayContainer),this._fetchQueue=new fe({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(r,e)=>this._queryElements(r,e)}),this._tileStrategy=new _e({cachePolicy:"purge",resampling:!0,acquireTile:r=>this._acquireTile(r),releaseTile:r=>this._releaseTile(r),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate()}detach(){this.handles.removeAll(),this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear()}supportsSpatialReference(r){return!0}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}update(r){this._tileStrategy.update(r)}async hitTest(r,e){var i;const t=[],s=[r.x,r.y];for(const a of this.elements){const o=(i=H(a.georeference))==null?void 0:i.coords;$(o)&&ve(o.rings,s)&&t.push({type:"media",element:a,layer:this.layer,mapPoint:r})}return t.reverse()}canResume(){return this.layer.source!=null&&super.canResume()}async doRefresh(){}_acquireTile(r){const e=new Ue(r.clone());return this._updateTile(e),e}_updateTile(r){this.updatingHandles.addPromise(this._fetchQueue.push(r.key).then(e=>{const[t,s]=r.setElements(e);this._acquireElements(r,t),this._releaseElements(r,s),this.requestUpdate()},e=>{ge(e)||j.getLogger(this.declaredClass).error(e)}))}_releaseTile(r){this._fetchQueue.abort(r.key.id),r.elements&&this._releaseElements(r,r.elements),this.requestUpdate()}async _queryElements(r,e){const t=this.layer.source;if(v(t))return[];this.view.featuresTilingScheme.getTileBounds(R,r,!0);const s=new we({xmin:R[0],ymin:R[1],xmax:R[2],ymax:R[3],spatialReference:this.view.spatialReference});return t.queryElements(s,e)}_acquireElements(r,e){const t=this.layer.source,s=this.view.spatialReference;if(!v(t))for(const i of e)Re(this._elementReferences,i.uid,()=>{const a=new m({element:i,spatialReference:s}),o=new ze(a);return this._overlayContainer.addChild(o),this.elements.add(i),{tiles:new Set,projectedElement:a,overlay:o}}).tiles.add(r)}_releaseElements(r,e){for(const t of e){const s=this._elementReferences.get(t.uid);s.tiles.delete(r),s.tiles.size||(this._overlayContainer.removeChild(s.overlay),s.overlay.destroy(),s.projectedElement.destroy(),this._elementReferences.delete(t.uid),this.elements.remove(t))}}};c([p()],_.prototype,"_fetchQueue",void 0),c([p()],_.prototype,"layer",void 0),c([p({readOnly:!0})],_.prototype,"elements",void 0),_=c([F("esri.views.2d.layers.MediaLayerView2D")],_);const R=Me();class Ue{constructor(e){this.key=e,this.elements=null,this.isReady=!1,this.visible=!0}setElements(e){const t=[],s=new Set(this.elements);this.elements=e;for(const i of e)s.has(i)?s.delete(i):t.push(i);return this.isReady=!0,[t,Array.from(s)]}}const nt=_;export{nt as default};
