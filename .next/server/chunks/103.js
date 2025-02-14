"use strict";exports.id=103,exports.ids=[103],exports.modules={5103:(e,t,r)=>{r.d(t,{default:()=>i.a});var n=r(3864),i=r.n(n)},1902:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return _}});let n=r(5488),i=r(1063),o=r(5512),a=i._(r(8009)),l=n._(r(5740)),s=n._(r(9153)),d=r(2034),u=r(4653),c=r(8156);r(6831);let f=r(4055),p=n._(r(1628)),m=r(3727),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e,t,r,n,i,o,a){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function v(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let y=(0,a.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:l,width:s,decoding:d,className:u,style:c,fetchPriority:f,placeholder:p,loading:g,unoptimized:y,fill:b,onLoadRef:_,onLoadingCompleteRef:x,setBlurComplete:w,setShowAltText:S,sizesInput:j,onLoad:C,onError:P,...O}=e,M=(0,a.useCallback)(e=>{e&&(P&&(e.src=e.src),e.complete&&h(e,p,_,x,w,y,j))},[r,p,_,x,w,P,y,j]),z=(0,m.useMergedRef)(t,M);return(0,o.jsx)("img",{...O,...v(f),loading:g,width:s,height:l,decoding:d,"data-nimg":b?"fill":"1",className:u,style:c,sizes:i,srcSet:n,src:r,ref:z,onLoad:e=>{h(e.currentTarget,p,_,x,w,y,j)},onError:e=>{S(!0),"empty"!==p&&w(!0),P&&P(e)}})});function b(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...v(r.fetchPriority)};return t&&l.default.preload?(l.default.preload(r.src,n),null):(0,o.jsx)(s.default,{children:(0,o.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let _=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(f.RouterContext),n=(0,a.useContext)(c.ImageConfigContext),i=(0,a.useMemo)(()=>{var e;let t=g||n||u.imageConfigDefault,r=[...t.deviceSizes,...t.imageSizes].sort((e,t)=>e-t),i=t.deviceSizes.sort((e,t)=>e-t),o=null==(e=t.qualities)?void 0:e.sort((e,t)=>e-t);return{...t,allSizes:r,deviceSizes:i,qualities:o}},[n]),{onLoad:l,onLoadingComplete:s}=e,m=(0,a.useRef)(l);(0,a.useEffect)(()=>{m.current=l},[l]);let h=(0,a.useRef)(s);(0,a.useEffect)(()=>{h.current=s},[s]);let[v,_]=(0,a.useState)(!1),[x,w]=(0,a.useState)(!1),{props:S,meta:j}=(0,d.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:v,showAltText:x});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(y,{...S,unoptimized:j.unoptimized,placeholder:j.placeholder,fill:j.fill,onLoadRef:m,onLoadingCompleteRef:h,setBlurComplete:_,setShowAltText:w,sizesInput:e.sizes,ref:t}),j.priority?(0,o.jsx)(b,{isAppRouter:!r,imgAttributes:S}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2782:(e,t,r)=>{e.exports=r(8104).vendored.contexts.AmpContext},6302:(e,t,r)=>{e.exports=r(8104).vendored.contexts.HeadManagerContext},8156:(e,t,r)=>{e.exports=r(8104).vendored.contexts.ImageConfigContext},4055:(e,t,r)=>{e.exports=r(8104).vendored.contexts.RouterContext},2677:(e,t)=>{function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},2034:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),r(6831);let n=r(8337),i=r(4653);function o(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var r,l;let s,d,u,{src:c,sizes:f,unoptimized:p=!1,priority:m=!1,loading:g,className:h,quality:v,width:y,height:b,fill:_=!1,style:x,overrideSrc:w,onLoad:S,onLoadingComplete:j,placeholder:C="empty",blurDataURL:P,fetchPriority:O,decoding:M="async",layout:z,objectFit:E,objectPosition:I,lazyBoundary:R,lazyRoot:A,...k}=e,{imgConf:D,showAltText:T,blurComplete:N,defaultLoader:U}=t,F=D||i.imageConfigDefault;if("allSizes"in F)s=F;else{let e=[...F.deviceSizes,...F.imageSizes].sort((e,t)=>e-t),t=F.deviceSizes.sort((e,t)=>e-t),n=null==(r=F.qualities)?void 0:r.sort((e,t)=>e-t);s={...F,allSizes:e,deviceSizes:t,qualities:n}}if(void 0===U)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let L=k.loader||U;delete k.loader,delete k.srcSet;let G="__next_img_default"in L;if(G){if("custom"===s.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=L;L=t=>{let{config:r,...n}=t;return e(n)}}if(z){"fill"===z&&(_=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];e&&(x={...x,...e});let t={responsive:"100vw",fill:"100vw"}[z];t&&!f&&(f=t)}let B="",q=a(y),W=a(b);if((l=c)&&"object"==typeof l&&(o(l)||void 0!==l.src)){let e=o(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(d=e.blurWidth,u=e.blurHeight,P=P||e.blurDataURL,B=e.src,!_){if(q||W){if(q&&!W){let t=q/e.width;W=Math.round(e.height*t)}else if(!q&&W){let t=W/e.height;q=Math.round(e.width*t)}}else q=e.width,W=e.height}}let H=!m&&("lazy"===g||void 0===g);(!(c="string"==typeof c?c:B)||c.startsWith("data:")||c.startsWith("blob:"))&&(p=!0,H=!1),s.unoptimized&&(p=!0),G&&!s.dangerouslyAllowSVG&&c.split("?",1)[0].endsWith(".svg")&&(p=!0);let V=a(v),$=Object.assign(_?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:E,objectPosition:I}:{},T?{}:{color:"transparent"},x),J=N||"empty"===C?null:"blur"===C?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:q,heightInt:W,blurWidth:d,blurHeight:u,blurDataURL:P||"",objectFit:$.objectFit})+'")':'url("'+C+'")',X=J?{backgroundSize:$.objectFit||"cover",backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:J}:{},Y=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:a,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:d}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,a),u=s.length-1;return{sizes:a||"w"!==d?a:"100vw",srcSet:s.map((e,n)=>l({config:t,src:r,quality:o,width:e})+" "+("w"===d?e:n+1)+d).join(", "),src:l({config:t,src:r,quality:o,width:s[u]})}}({config:s,src:c,unoptimized:p,width:q,quality:V,sizes:f,loader:L});return{props:{...k,loading:H?"lazy":g,fetchPriority:O,width:q,height:W,decoding:M,className:h,style:{...$,...X},sizes:Y.sizes,srcSet:Y.srcSet,src:w||Y.src},meta:{unoptimized:p,priority:m,placeholder:C,fill:_}}}},9153:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return g},defaultHead:function(){return c}});let n=r(5488),i=r(1063),o=r(5512),a=i._(r(8009)),l=n._(r(7440)),s=r(2782),d=r(6302),u=r(2677);function c(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(6831);let p=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:r}=t;return e.reduce(f,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return i=>{let o=!0,a=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){a=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=i.props[t],r=n[t]||new Set;("name"!==t||!a)&&r.has(e)?o=!1:(r.add(e),n[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let n=e.key||t;if(process.env.__NEXT_OPTIMIZE_FONTS&&!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:n})})}let g=function(e){let{children:t}=e,r=(0,a.useContext)(s.AmpStateContext),n=(0,a.useContext)(d.HeadManagerContext);return(0,o.jsx)(l.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,u.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8337:(e,t)=>{function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:a}=e,l=n?40*n:t,s=i?40*i:r,d=l&&s?"viewBox='0 0 "+l+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},4653:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:void 0,unoptimized:!1}},3864:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return s},getImageProps:function(){return l}});let n=r(5488),i=r(2034),o=r(1902),a=n._(r(1628));function l(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let s=o.Image},1628:(e,t)=>{function r(e){var t;let{config:r,src:n,width:i,quality:o}=e,a=o||(null==(t=r.qualities)?void 0:t.reduce((e,t)=>Math.abs(t-75)<Math.abs(e-75)?t:e))||75;return r.path+"?url="+encodeURIComponent(n)+"&w="+i+"&q="+a+(n.startsWith("/_next/static/media/"),"")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},7440:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let n=r(8009),i=()=>{},o=()=>{};function a(e){var t;let{headManager:r,reduceComponentsToState:a}=e;function l(){if(r&&r.mountedInstances){let t=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(a(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),l(),i(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),i(()=>(r&&(r._pendingUpdate=l),()=>{r&&(r._pendingUpdate=l)})),o(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}}};