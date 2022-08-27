import{$ as e,a0 as i,a1 as g,co as w,s as S,kg as I,iR as $,jw as x,iS as j,iT as k,ea as T,eb as R,ec as O,ed as F,jx as P,aN as v,f as p,r as N,aO as D,ki as u,ku as E,jI as L,de as _,iW as U,cY as A,U as J,kj as C,cq as G,iX as q,kk as z,cE as V,h0 as c,km as W,k9 as M,kl as Y,jl as B,gE as h,ky as X,kz as Z,iZ as Q,dc as H,ka as K,iY as ee,dL as m,kn as te,eg as ie,kA as re,kB as se,i_ as oe,eh as ae}from"./index.333efadd.js";var y;let n=y=class extends w{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new y({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};e([i({type:Number,json:{write:!0}})],n.prototype,"age",void 0),e([i({type:Number,json:{write:!0}})],n.prototype,"ageReceived",void 0),e([i({type:Number,json:{write:!0}})],n.prototype,"displayCount",void 0),e([i({type:Number,json:{write:!0}})],n.prototype,"maxObservations",void 0),n=y=e([g("esri.layers.support.PurgeOptions")],n);const b=n,ne=S.getLogger("esri.layers.StreamLayer"),f=oe();let t=class extends I($(x(j(k(T(R(O(F(P(ae)))))))))){constructor(...r){super(...r),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new b,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=v.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null}normalizeCtorArgs(r,s){return typeof r=="string"?{url:r,...s}:r}load(r){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new p("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const s=N(r)?r.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},r).catch(D).then(()=>this._fetchService(s))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(r){u(r,this.fieldsIndex),this._set("renderer",r)}readRenderer(r,s,o){const a=(s=s.layerDefinition||s).drawingInfo&&s.drawingInfo.renderer||void 0;if(a){const l=E(a,s,o)||void 0;return l||ne.error("Failed to create renderer",{rendererDefinition:s.drawingInfo.renderer,layer:this,context:o}),l}if(s.defaultSymbol)return s.types&&s.types.length?new L({defaultSymbol:d(s.defaultSymbol,s,o),field:s.typeIdField,uniqueValueInfos:s.types.map(l=>({id:l.id,symbol:d(l.symbol,l,o)}))}):new _({symbol:d(s.defaultSymbol,s,o)})}createPopupTemplate(r){return U(this,r)}createQuery(){const r=new A;return r.returnGeometry=!0,r.outFields=["*"],r.where=this.definitionExpression||"1=1",r}getFieldDomain(r,s){if(!this.fields)return null;let o=null;return this.fields.some(a=>(a.name===r&&(o=a.domain),!!o)),o}getField(r){return this.fieldsIndex.get(r)}serviceSupportsSpatialReference(r){return!0}async _fetchService(r){var s,o;if(this.webSocketUrl){if(!((s=this.timeInfo)!=null&&s.trackIdField))throw new p("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField)throw new p("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");if(!this.fields)throw new p("stream-layer:missing-metadata","The stream layer fields must be specified.");if(!this.geometryType)throw new p("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.url=this.webSocketUrl}else if(!this.sourceJSON){const{data:a}=await J(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:r});this.sourceJSON=a}return this.sourceJSON={...(o=this.sourceJSON)!=null?o:{},objectIdField:"__esri_stream_id__"},this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),u(this.renderer,this.fieldsIndex),C(this.timeInfo,this.fieldsIndex),G(this,{origin:"service"})}};e([i({type:String})],t.prototype,"copyright",void 0),e([i({readOnly:!0})],t.prototype,"defaultPopupTemplate",null),e([i({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],t.prototype,"definitionExpression",void 0),e([i({type:String})],t.prototype,"displayField",void 0),e([i({type:q})],t.prototype,"elevationInfo",void 0),e([i(z)],t.prototype,"featureReduction",void 0),e([i(f.fields)],t.prototype,"fields",void 0),e([i(f.fieldsIndex)],t.prototype,"fieldsIndex",void 0),e([i({type:V})],t.prototype,"geometryDefinition",void 0),e([i({type:c.apiValues,json:{read:{reader:c.read}}})],t.prototype,"geometryType",void 0),e([i(W)],t.prototype,"labelsVisible",void 0),e([i({type:[M],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:Y},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],t.prototype,"labelingInfo",void 0),e([i(B)],t.prototype,"legendEnabled",void 0),e([i({type:["show","hide"]})],t.prototype,"listMode",void 0),e([i({type:h})],t.prototype,"maxReconnectionAttempts",void 0),e([i({type:h})],t.prototype,"maxReconnectionInterval",void 0),e([i(X)],t.prototype,"maxScale",void 0),e([i(Z)],t.prototype,"minScale",void 0),e([i({type:String})],t.prototype,"objectIdField",void 0),e([i({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],t.prototype,"operationalLayerType",void 0),e([i(Q)],t.prototype,"popupEnabled",void 0),e([i({type:H,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],t.prototype,"popupTemplate",void 0),e([i({type:b})],t.prototype,"purgeOptions",void 0),e([i({types:K,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:ee,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],t.prototype,"renderer",null),e([m("service","renderer",["drawingInfo.renderer","defaultSymbol"]),m("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],t.prototype,"readRenderer",null),e([i(te)],t.prototype,"screenSizePerspectiveEnabled",void 0),e([i()],t.prototype,"sourceJSON",void 0),e([i({type:v,json:{origins:{service:{read:{source:"spatialReference"}}}}})],t.prototype,"spatialReference",void 0),e([i({json:{read:!1}})],t.prototype,"type",void 0),e([i(ie)],t.prototype,"url",void 0),e([i({type:Number})],t.prototype,"updateInterval",void 0),e([i({type:String})],t.prototype,"webSocketUrl",void 0),t=e([g("esri.layers.StreamLayer")],t);const d=re({types:se}),pe=t;export{pe as default};
