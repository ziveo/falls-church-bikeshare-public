import{s as U,d as x,a as ge,n as K}from"./arcadeUtils.dd2b837b.js";import{E as Y,b as le,e as oe,D as he,q as fe,y as we,h as ce,a as Ee,s as Ie,c as Fe,S as X,A as De,I as $e,g as be,v as C,m as Ne,w as H,C as S,d as Z}from"./featureSetUtils.25fddd6c.js";import{hP as D,hR as N,hL as $,ip as L,hK as M,hO as b,ih as z,hD as O,hS as P,hE as Ae,hW as xe,hX as Se,hY as Le,hV as Te,hJ as k,lq as ve,iP as Q,gi as B,ic as _,lb as V}from"./index.333efadd.js";import{g as Oe,E as ue}from"./SpatialFilter.99f84f25.js";import{WhereClause as E}from"./WhereClause.7fe2a07f.js";import"./MD5.7323a015.js";import"./executeForIds.7c50a8ee.js";import"./geometryEngineAsync.1349b2d7.js";function Re(i,a,d,m){if(m.length===1){if(b(m[0]))return K(i,m[0],-1);if(P(m[0]))return K(i,m[0].toArray(),-1)}return K(i,m,-1)}async function ee(i,a,d){const m=i.getVariables();if(m.length>0){const g=[];for(let n=0;n<m.length;n++){const r={name:m[n]};g.push(await a.evaluateIdentifier(d,r))}const e={};for(let n=0;n<m.length;n++)e[m[n]]=g[n];return i.parameters=e,i}return i}function c(i,a,d=null){for(const m in i)if(m.toLowerCase()===a.toLowerCase())return i[m];return d}function de(i){if(i===null)return null;const a={type:c(i,"type",""),name:c(i,"name","")};if(a.type==="range")a.range=c(i,"range",[]);else{a.codedValues=[];for(const d of c(i,"codedValues",[]))a.codedValues.push({name:c(d,"name",""),code:c(d,"code",null)})}return a}function te(i){if(i===null)return null;const a={},d=c(i,"wkt",null);d!==null&&(a.wkt=d);const m=c(i,"wkid",null);return m!==null&&(a.wkid=m),a}function me(i){if(i===null)return null;const a={hasZ:c(i,"hasz",!1),hasM:c(i,"hasm",!1)},d=c(i,"spatialreference",null);d&&(a.spatialReference=te(d));const m=c(i,"x",null);if(m!==null)return a.x=m,a.y=c(i,"y",null),a;const g=c(i,"rings",null);if(g!==null)return a.rings=g,a;const e=c(i,"paths",null);if(e!==null)return a.paths=e,a;const n=c(i,"points",null);if(n!==null)return a.points=n,a;for(const r of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const o=c(i,r,null);o!==null&&(a[r]=o)}return a}function Ce(i,a){for(const d of a)if(d===i)return!0;return!1}function Pe(i){return!!i.layerDefinition&&!!i.featureSet&&Ce(i.layerDefinition.geometryType,["","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])!==!1&&i.layerDefinition.objectIdField!==null&&i.layerDefinition.objectIdField!==""&&b(i.layerDefinition.fields)!==!1&&b(i.featureSet.features)!==!1}function Je(i){i.mode==="async"&&(i.functions.getuser=function(a,d){return i.standardFunctionAsync(a,d,async(m,g,e)=>{D(e,1,2);let n=N(e[1],""),r=n===!0;if(n=n===!0||n===!1?"":$(n),e[0]instanceof U){let u=null;a.services&&a.services.portal&&(u=a.services.portal),u=Y(e[0],u);const l=await le(u,n,r);if(l){const t=JSON.parse(JSON.stringify(l));for(const s of["lastLogin","created","modified"])t[s]!==void 0&&t[s]!==null&&(t[s]=new Date(t[s]));return x.convertObjectToArcadeDictionary(t)}return null}let o=null;if(L(e[0])&&(o=e[0]),o){if(r=!1,n)return null;await o.load();const u=await o.getOwningSystemUrl();if(!u){if(!n){const s=await o.getIdentityUser();return s?x.convertObjectToArcadeDictionary({username:s}):null}return null}let l=null;a.services&&a.services.portal&&(l=a.services.portal),l=Y(new U(u),l);const t=await le(l,n,r);if(t){const s=JSON.parse(JSON.stringify(t));for(const f of["lastLogin","created","modified"])s[f]!==void 0&&s[f]!==null&&(s[f]=new Date(s[f]));return x.convertObjectToArcadeDictionary(s)}return null}throw new Error("Invalid Parameter")})},i.signatures.push({name:"getuser",min:"1",max:"2"}),i.functions.featuresetbyid=function(a,d){return i.standardFunctionAsync(a,d,(m,g,e)=>{if(D(e,2,4),e[0]instanceof oe){const n=$(e[1]);let r=N(e[2],null);const o=M(N(e[3],!0));if(r===null&&(r=["*"]),b(r)===!1)throw new Error("Invalid Parameter");return e[0].featureSetById(n,o,r)}throw new Error("Invalid Parameter")})},i.signatures.push({name:"featuresetbyid",min:"2",max:"4"}),i.functions.getfeatureset=function(a,d){return i.standardFunctionAsync(a,d,(m,g,e)=>{if(D(e,1,2),z(e[0])){let n=N(e[1],"datasource");return n===null&&(n="datasource"),n=$(n).toLowerCase(),he(e[0].fullSchema(),n,a.lrucache,a.interceptor,a.spatialReference)}throw new Error("Invalid Parameter")})},i.signatures.push({name:"getfeatureset",min:"1",max:"2"}),i.functions.featuresetbyportalitem=function(a,d){return i.standardFunctionAsync(a,d,(m,g,e)=>{if(D(e,2,5),e[0]===null)throw new Error("Portal is required");if(e[0]instanceof U){const l=$(e[1]),t=$(e[2]);let s=N(e[3],null);const f=M(N(e[4],!0));if(s===null&&(s=["*"]),b(s)===!1)throw new Error("Invalid Parameter");let h=null;return a.services&&a.services.portal&&(h=a.services.portal),h=Y(e[0],h),fe(l,t,a.spatialReference,s,f,h,a.lrucache,a.interceptor)}if(O(e[0])===!1)throw new Error("Portal is required");const n=$(e[0]),r=$(e[1]);let o=N(e[2],null);const u=M(N(e[3],!0));if(o===null&&(o=["*"]),b(o)===!1)throw new Error("Invalid Parameter");if(a.services&&a.services.portal)return fe(n,r,a.spatialReference,o,u,a.services.portal,a.lrucache,a.interceptor);throw new Error("Portal is required")})},i.signatures.push({name:"featuresetbyportalitem",min:"2",max:"5"}),i.functions.featuresetbyname=function(a,d){return i.standardFunctionAsync(a,d,(m,g,e)=>{if(D(e,2,4),e[0]instanceof oe){const n=$(e[1]);let r=N(e[2],null);const o=M(N(e[3],!0));if(r===null&&(r=["*"]),b(r)===!1)throw new Error("Invalid Parameter");return e[0].featureSetByName(n,o,r)}throw new Error("Invalid Parameter")})},i.signatures.push({name:"featuresetbyname",min:"2",max:"4"}),i.functions.featureset=function(a,d){return i.standardFunction(a,d,(m,g,e)=>{D(e,1,1);let n=e[0];const r={layerDefinition:{geometryType:"",objectIdField:"",globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if(O(n))n=JSON.parse(n),n.layerDefinition!==void 0?(r.layerDefinition=n.layerDefinition,r.featureSet=n.featureSet,n.layerDefinition.spatialReference&&(r.layerDefinition.spatialReference=n.layerDefinition.spatialReference)):(r.featureSet.features=n.features,r.featureSet.geometryType=n.geometryType,r.layerDefinition.geometryType=r.featureSet.geometryType,r.layerDefinition.objectIdField=n.objectIdFieldName,r.layerDefinition.typeIdField=n.typeIdFieldName,r.layerDefinition.globalIdField=n.globalIdFieldName,r.layerDefinition.fields=n.fields,n.spatialReference&&(r.layerDefinition.spatialReference=n.spatialReference));else{if(!(e[0]instanceof x))throw new Error("Invalid Parameter");{n=JSON.parse(e[0].castToText());const o=c(n,"layerdefinition");if(o!==null){r.layerDefinition.geometryType=c(o,"geometrytype",""),r.featureSet.geometryType=r.layerDefinition.geometryType,r.layerDefinition.globalIdField=c(o,"globalidfield",""),r.layerDefinition.objectIdField=c(o,"objectidfield",""),r.layerDefinition.typeIdField=c(o,"typeidfield","");const u=c(o,"spatialreference",null);u&&(r.layerDefinition.spatialReference=te(u));for(const t of c(o,"fields",[])){const s={name:c(t,"name",""),alias:c(t,"alias",""),type:c(t,"type",""),nullable:c(t,"nullable",!0),editable:c(t,"editable",!0),length:c(t,"length",null),domain:de(c(t,"domain"))};r.layerDefinition.fields.push(s)}const l=c(n,"featureset",null);if(l){const t={};for(const s of r.layerDefinition.fields)t[s.name.toLowerCase()]=s.name;for(const s of c(l,"features",[])){const f={},h=c(s,"attributes",{});for(const F in h)f[t[F.toLowerCase()]]=h[F];r.featureSet.features.push({attributes:f,geometry:me(c(s,"geometry",null))})}}}else{r.layerDefinition.geometryType=c(n,"geometrytype",""),r.featureSet.geometryType=r.layerDefinition.geometryType,r.layerDefinition.objectIdField=c(n,"objectidfieldname",""),r.layerDefinition.typeIdField=c(n,"typeidfieldname","");const u=c(n,"spatialreference",null);u&&(r.layerDefinition.spatialReference=te(u));for(const t of c(n,"fields",[])){const s={name:c(t,"name",""),alias:c(t,"alias",""),type:c(t,"type",""),nullable:c(t,"nullable",!0),editable:c(t,"editable",!0),length:c(t,"length",null),domain:de(c(t,"domain"))};r.layerDefinition.fields.push(s)}const l={};for(const t of r.layerDefinition.fields)l[t.name.toLowerCase()]=t.name;for(const t of c(n,"features",[])){const s={},f=c(t,"attributes",{});for(const h in f)s[l[h.toLowerCase()]]=f[h];r.featureSet.features.push({attributes:s,geometry:me(c(t,"geometry",null))})}}}}if(Pe(r)===!1)throw new Error("Invalid Parameter");return we.create(r,a.spatialReference)})},i.signatures.push({name:"featureset",min:"1",max:"1"}),i.functions.filter=function(a,d){return i.standardFunctionAsync(a,d,async(m,g,e)=>{if(D(e,2,2),b(e[0])||P(e[0])){const n=[];let r=e[0];r instanceof Ae&&(r=r.toArray());let o=null;if(e[1]instanceof xe)o=i.arcadeCustomFunctionHandler(e[1]);else if(e[1]instanceof Se)o=(...u)=>e[1].fn(a,{preparsed:!0,arguments:u});else{if(!(e[1]instanceof Le))throw new Error("Invalid Parameter");o=(...u)=>{if(u.length!==e[1].paramCount)throw new Error("Invalid parameters");return e[1].fn(...u)}}for(const u of r){const l=o(u);Te(l)?await l===!0&&n.push(u):l===!0&&n.push(u)}return n}if(L(e[0])){const n=await e[0].load(),r=E.create(e[1],n.getFieldsIndex()),o=r.getVariables();if(o.length>0){const u=[];for(let t=0;t<o.length;t++){const s={name:o[t]};u.push(await i.evaluateIdentifier(a,s))}const l={};for(let t=0;t<o.length;t++)l[o[t]]=u[t];return r.parameters=l,new ce({parentfeatureset:e[0],whereclause:r})}return new ce({parentfeatureset:e[0],whereclause:r})}throw new Error("Filter cannot accept this parameter type")})},i.signatures.push({name:"filter",min:"2",max:"2"}),i.functions.orderby=function(a,d){return i.standardFunctionAsync(a,d,async(m,g,e)=>{if(D(e,2,2),L(e[0])){const n=new Ee(e[1]);return new Ie({parentfeatureset:e[0],orderbyclause:n})}throw new Error("Order cannot accept this parameter type")})},i.signatures.push({name:"orderby",min:"2",max:"2"}),i.functions.top=function(a,d){return i.standardFunctionAsync(a,d,async(m,g,e)=>{if(D(e,2,2),L(e[0]))return new Fe({parentfeatureset:e[0],topnum:e[1]});if(b(e[0]))return k(e[1])>=e[0].length?e[0].slice(0):e[0].slice(0,k(e[1]));if(P(e[0]))return k(e[1])>=e[0].length()?e[0].slice(0):e[0].slice(0,k(e[1]));throw new Error("Top cannot accept this parameter type")})},i.signatures.push({name:"top",min:"2",max:"2"}),i.functions.first=function(a,d){return i.standardFunctionAsync(a,d,async(m,g,e)=>{if(D(e,1,1),L(e[0])){const n=await e[0].first(m.abortSignal);if(n!==null){const r=ge.createFromGraphicLikeObject(n.geometry,n.attributes,e[0]);return r._underlyingGraphic=n,r}return n}return b(e[0])?e[0].length===0?null:e[0][0]:P(e[0])?e[0].length()===0?null:e[0].get(0):null})},i.signatures.push({name:"first",min:"1",max:"1"}),i.functions.attachments=function(a,d){return i.standardFunctionAsync(a,d,async(m,g,e)=>{D(e,1,2);const n={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(e.length>1){if(e[1]instanceof x){if(e[1].hasField("minsize")&&(n.minsize=k(e[1].field("minsize"))),e[1].hasField("metadata")&&(n.returnMetadata=M(e[1].field("metadata"))),e[1].hasField("maxsize")&&(n.maxsize=k(e[1].field("maxsize"))),e[1].hasField("types")){const r=ve(e[1].field("types"),!1);r.length>0&&(n.types=r)}}else if(e[1]!==null)throw new Error("Invalid Parameter")}if(z(e[0])){let r=e[0]._layer;return r instanceof Q&&(r=X(r,a.spatialReference,["*"],!0,a.lrucache,a.interceptor)),r===null?[]:L(r)===!1?[]:(await r.load(),r.queryAttachments(e[0].field(r.objectIdField),n.minsize,n.maxsize,n.types,n.returnMetadata))}if(e[0]===null)return[];throw new Error("Invalid Parameter")})},i.signatures.push({name:"attachments",min:"1",max:"2"}),i.functions.featuresetbyrelationshipname=function(a,d){return i.standardFunctionAsync(a,d,async(m,g,e)=>{D(e,2,4);const n=e[0],r=$(e[1]);let o=N(e[2],null);const u=M(N(e[3],!0));if(o===null&&(o=["*"]),b(o)===!1)throw new Error("Invalid Parameter");if(e[0]===null)return null;if(!z(e[0]))throw new Error("Invalid Parameter");let l=n._layer;if(l instanceof Q&&(l=X(l,a.spatialReference,["*"],!0,a.lrucache,a.interceptor)),l===null||L(l)===!1)return null;l=await l.load();const t=l.relationshipMetaData().filter(w=>w.name===r);if(t.length===0)return null;if(t[0].relationshipTableId!==void 0&&t[0].relationshipTableId!==null&&t[0].relationshipTableId>-1)return De(l,t[0],n.field(l.objectIdField),l.spatialReference,o,u,a.lrucache,a.interceptor);let s=l.serviceUrl();if(!s)return null;s=s.charAt(s.length-1)==="/"?s+t[0].relatedTableId.toString():s+"/"+t[0].relatedTableId.toString();const f=await $e(s,l.spatialReference,o,u,a.lrucache,a.interceptor);await f.load();let h=f.relationshipMetaData();if(h=h.filter(w=>w.id===t[0].id),n.hasField(t[0].keyField)===!1||n.field(t[0].keyField)===null){const w=await l.getFeatureByObjectId(n.field(l.objectIdField),[t[0].keyField]);if(w){const I=E.create(h[0].keyField+"= @id",f.getFieldsIndex());return I.parameters={id:w.attributes[t[0].keyField]},f.filter(I)}return new Oe({parentfeatureset:f})}const F=E.create(h[0].keyField+"= @id",f.getFieldsIndex());return F.parameters={id:n.field(t[0].keyField)},f.filter(F)})},i.signatures.push({name:"featuresetbyrelationshipname",min:"2",max:"4"}),i.functions.featuresetbyassociation=function(a,d){return i.standardFunctionAsync(a,d,async(m,g,e)=>{D(e,2,3);const n=e[0],r=$(N(e[1],"")).toLowerCase(),o=O(e[2])?$(e[2]):null;if(e[0]===null)return null;if(!z(e[0]))throw new Error("Invalid Parameter");let u=n._layer;if(u instanceof Q&&(u=X(u,a.spatialReference,["*"],!0,a.lrucache,a.interceptor)),u===null||L(u)===!1)return null;await u.load();const l=u.serviceUrl(),t=await be(l,a.spatialReference);let s=null,f=null,h=!1;if(o!==null&&o!==""&&o!==void 0){for(const y of t.terminals)y.terminalName===o&&(f=y.terminalId);f===null&&(h=!0)}const F=t.associations.getFieldsIndex(),w=F.get("TOGLOBALID").name,I=F.get("FROMGLOBALID").name,J=F.get("TOTERMINALID").name,W=F.get("FROMTERMINALID").name,G=F.get("FROMNETWORKSOURCEID").name,j=F.get("TONETWORKSOURCEID").name,R=F.get("ASSOCIATIONTYPE").name,pe=F.get("ISCONTENTVISIBLE").name,ye=F.get("OBJECTID").name;for(const y of u.fields)if(y.type==="global-id"){s=n.field(y.name);break}let T=null,ne=new C(new B({name:"percentalong",alias:"percentalong",type:"double"}),E.create("0",t.associations.getFieldsIndex())),ae=new C(new B({name:"side",alias:"side",type:"string"}),E.create("''",t.associations.getFieldsIndex()));const A="globalid",re="globalId",ie={};for(const y in t.lkp)ie[y]=t.lkp[y].sourceId;const v=new Ne(new B({name:"classname",alias:"classname",type:"string"}),null,ie);let p="";switch(r){case"midspan":{p=`((${w}='${s}') OR ( ${I}='${s}')) AND (${R} IN (5))`,v.codefield=E.create(`CASE WHEN (${w}='${s}') THEN ${G} ELSE ${j} END`,t.associations.getFieldsIndex());const y=V(S.findField(t.associations.fields,I));y.name=A,y.alias=A,T=new C(y,E.create(`CASE WHEN (${I}='${s}') THEN ${w} ELSE ${I} END`,t.associations.getFieldsIndex())),ne=t.unVersion>=4?new Z(S.findField(t.associations.fields,F.get("PERCENTALONG").name)):new C(new B({name:"percentalong",alias:"percentalong",type:"double"}),E.create("0",t.associations.getFieldsIndex()));break}case"junctionedge":{p=`((${w}='${s}') OR ( ${I}='${s}')) AND (${R} IN (4,6))`,v.codefield=E.create(`CASE WHEN (${w}='${s}') THEN ${G} ELSE ${j} END`,t.associations.getFieldsIndex());const y=V(S.findField(t.associations.fields,I));y.name=A,y.alias=A,T=new C(y,E.create(`CASE WHEN (${I}='${s}') THEN ${w} ELSE ${I} END`,t.associations.getFieldsIndex())),ae=new C(new B({name:"side",alias:"side",type:"string"}),E.create(`CASE WHEN (${R}=4) THEN 'from' ELSE 'to' END`,t.associations.getFieldsIndex()));break}case"connected":{let y=`${w}='@T'`,se=`${I}='@T'`;f!==null&&(y+=` AND ${J}=@A`,se+=` AND ${W}=@A`),p="(("+y+") OR ("+se+"))",p=_(p,"@T",s),y=_(y,"@T",s),f!==null&&(y=_(y,"@A",f.toString()),p=_(p,"@A",f.toString())),v.codefield=E.create("CASE WHEN "+y+` THEN ${G} ELSE ${j} END`,t.associations.getFieldsIndex());const q=V(S.findField(t.associations.fields,I));q.name=A,q.alias=A,T=new C(q,E.create("CASE WHEN "+y+` THEN ${I} ELSE ${w} END`,t.associations.getFieldsIndex()));break}case"container":p=`${w}='${s}' AND ${R} = 2`,f!==null&&(p+=` AND ${J} = `+f.toString()),v.codefield=G,p="( "+p+" )",T=new H(S.findField(t.associations.fields,I),A,A);case"content":p=`(${I}='${s}' AND ${R} = 2)`,f!==null&&(p+=` AND ${W} = `+f.toString()),v.codefield=j,p="( "+p+" )",T=new H(S.findField(t.associations.fields,w),A,A);break;case"structure":p=`(${w}='${s}' AND ${R} = 3)`,f!==null&&(p+=` AND ${J} = `+f.toString()),v.codefield=G,p="( "+p+" )",T=new H(S.findField(t.associations.fields,I),A,re);break;case"attached":p=`(${I}='${s}' AND ${R} = 3)`,f!==null&&(p+=` AND ${W} = `+f.toString()),v.codefield=j,p="( "+p+" )",T=new H(S.findField(t.associations.fields,w),A,re);break;default:throw new Error("Invalid Parameter")}return h&&(p="1 <> 1"),new S({parentfeatureset:t.associations,adaptedFields:[new Z(S.findField(t.associations.fields,ye)),new Z(S.findField(t.associations.fields,pe)),T,ae,v,ne],extraFilter:p?E.create(p,t.associations.getFieldsIndex()):null})})},i.signatures.push({name:"featuresetbyassociation",min:"2",max:"6"}),i.functions.groupby=function(a,d){return i.standardFunctionAsync(a,d,async(m,g,e)=>{if(D(e,3,3),!L(e[0]))throw new Error("Illegal Value: GroupBy");const n=await e[0].load(),r=[],o=[];let u=!1,l=[];if(O(e[1]))l.push(e[1]);else if(e[1]instanceof x)l.push(e[1]);else if(b(e[1]))l=e[1];else{if(!P(e[1]))throw new Error("Illegal Value: GroupBy");l=e[1].toArray()}for(const t of l)if(O(t)){const s=E.create($(t),n.getFieldsIndex()),f=ue(s)===!0?$(t):"%%%%FIELDNAME";r.push({name:f,expression:s}),f==="%%%%FIELDNAME"&&(u=!0)}else{if(!(t instanceof x))throw new Error("Illegal Value: GroupBy");{const s=t.hasField("name")?t.field("name"):"%%%%FIELDNAME",f=t.hasField("expression")?t.field("expression"):"";if(s==="%%%%FIELDNAME"&&(u=!0),!s)throw new Error("Illegal Value: GroupBy");r.push({name:s,expression:E.create(f||s,n.getFieldsIndex())})}}if(l=[],O(e[2]))l.push(e[2]);else if(b(e[2]))l=e[2];else if(P(e[2]))l=e[2].toArray();else{if(!(e[2]instanceof x))throw new Error("Illegal Value: GroupBy");l.push(e[2])}for(const t of l){if(!(t instanceof x))throw new Error("Illegal Value: GroupBy");{const s=t.hasField("name")?t.field("name"):"",f=t.hasField("statistic")?t.field("statistic"):"",h=t.hasField("expression")?t.field("expression"):"";if(!s||!f||!h)throw new Error("Illegal Value: GroupBy");o.push({name:s,statistic:f.toLowerCase(),expression:E.create(h,n.getFieldsIndex())})}}if(u){const t={};for(const f of n.fields)t[f.name.toLowerCase()]=1;for(const f of r)f.name!=="%%%%FIELDNAME"&&(t[f.name.toLowerCase()]=1);for(const f of o)f.name!=="%%%%FIELDNAME"&&(t[f.name.toLowerCase()]=1);let s=0;for(const f of r)if(f.name==="%%%%FIELDNAME"){for(;t["field_"+s.toString()]===1;)s++;t["field_"+s.toString()]=1,f.name="FIELD_"+s.toString()}}for(const t of r)await ee(t.expression,i,a);for(const t of o)await ee(t.expression,i,a);return e[0].groupby(r,o)})},i.signatures.push({name:"groupby",min:"3",max:"3"}),i.functions.distinct=function(a,d){return i.standardFunctionAsync(a,d,async(m,g,e)=>{if(L(e[0])){D(e,2,2);const n=await e[0].load(),r=[];let o=[];if(O(e[1]))o.push(e[1]);else if(e[1]instanceof x)o.push(e[1]);else if(b(e[1]))o=e[1];else{if(!P(e[1]))throw new Error("Illegal Value: GroupBy");o=e[1].toArray()}let u=!1;for(const l of o)if(O(l)){const t=E.create($(l),n.getFieldsIndex()),s=ue(t)===!0?$(l):"%%%%FIELDNAME";r.push({name:s,expression:t}),s==="%%%%FIELDNAME"&&(u=!0)}else{if(!(l instanceof x))throw new Error("Illegal Value: GroupBy");{const t=l.hasField("name")?l.field("name"):"%%%%FIELDNAME",s=l.hasField("expression")?l.field("expression"):"";if(t==="%%%%FIELDNAME"&&(u=!0),!t)throw new Error("Illegal Value: GroupBy");r.push({name:t,expression:E.create(s||t,n.getFieldsIndex())})}}if(u){const l={};for(const s of n.fields)l[s.name.toLowerCase()]=1;for(const s of r)s.name!=="%%%%FIELDNAME"&&(l[s.name.toLowerCase()]=1);let t=0;for(const s of r)if(s.name==="%%%%FIELDNAME"){for(;l["field_"+t.toString()]===1;)t++;l["field_"+t.toString()]=1,s.name="FIELD_"+t.toString()}}for(const l of r)await ee(l.expression,i,a);return e[0].groupby(r,[])}return Re("distinct",m,g,e)})})}export{Je as registerFunctions};
