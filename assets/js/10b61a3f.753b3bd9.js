"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[4902],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(6010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>N});var n=r(3117),a=r(7294),i=r(6010),o=r(2466),l=r(6775),s=r(1980),u=r(7392),c=r(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,i=d(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[s,u]=h({queryString:r,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:n}),f=(()=>{const e=s??p;return m({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,i]),tabValues:i}}var f=r(2389);const k="tabList__CuJ",y="tabItem_LNqP";function b(e){let{className:t,block:r,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),n=u[r].value;n!==l&&(p(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,i.Z)("tabs__item",y,o?.className,{"tabs__item--active":l===t})}),r??t)})))}function v(e){let{lazy:t,children:r,selectedValue:n}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=g(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",k)},a.createElement(b,(0,n.Z)({},e,t)),a.createElement(v,(0,n.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return a.createElement(w,(0,n.Z)({key:String(t)},e))}},3159:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=r(3117),a=(r(7294),r(3905)),i=r(4866),o=r(5162);const l={title:"Private Registry Configuration",weight:55},s=void 0,u={unversionedId:"installation/private-registry",id:"installation/private-registry",title:"Private Registry Configuration",description:"Containerd can be configured to connect to private registries and use them to pull private images on the node.",source:"@site/docs/installation/private-registry.md",sourceDirName:"installation",slug:"/installation/private-registry",permalink:"/installation/private-registry",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/private-registry.md",tags:[],version:"current",lastUpdatedAt:1686740308,formattedLastUpdatedAt:"Jun 14, 2023",frontMatter:{title:"Private Registry Configuration",weight:55},sidebar:"mySidebar",previous:{title:"Network Options",permalink:"/installation/network-options"},next:{title:"Air-Gap Install",permalink:"/installation/airgap"}},c={},p=[{value:"Registries Configuration File",id:"registries-configuration-file",level:2},{value:"Mirrors",id:"mirrors",level:3},{value:"Redirects",id:"redirects",level:4},{value:"Rewrites",id:"rewrites",level:4},{value:"Configs",id:"configs",level:3},{value:"With TLS",id:"with-tls",level:3},{value:"Without TLS",id:"without-tls",level:3},{value:"Adding Images to the Private Registry",id:"adding-images-to-the-private-registry",level:2}],d={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Containerd can be configured to connect to private registries and use them to pull private images on the node."),(0,a.kt)("p",null,"Upon startup, K3s will check to see if a ",(0,a.kt)("inlineCode",{parentName:"p"},"registries.yaml")," file exists at ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/")," and instruct containerd to use any registries defined in the file. If you wish to use a private registry, then you will need to create this file as root on each node that will be using the registry."),(0,a.kt)("p",null,"Note that server nodes are schedulable by default. If you have not tainted the server nodes and will be running workloads on them, please ensure you also create the ",(0,a.kt)("inlineCode",{parentName:"p"},"registries.yaml")," file on each server as well."),(0,a.kt)("p",null,"Configuration in containerd can be used to connect to a private registry with a TLS connection and with registries that enable authentication as well. The following section will explain the ",(0,a.kt)("inlineCode",{parentName:"p"},"registries.yaml")," file and give different examples of using private registry configuration in K3s."),(0,a.kt)("h2",{id:"registries-configuration-file"},"Registries Configuration File"),(0,a.kt)("p",null,"The file consists of two main sections:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"mirrors"),(0,a.kt)("li",{parentName:"ul"},"configs")),(0,a.kt)("h3",{id:"mirrors"},"Mirrors"),(0,a.kt)("p",null,"Mirrors is a directive that defines the names and endpoints of the private registries, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'mirrors:\n  mycustomreg.com:\n    endpoint:\n      - "https://mycustomreg.com:5000"\n')),(0,a.kt)("p",null,"Each mirror must have a name and set of endpoints. When pulling an image from a registry, containerd will try these endpoint URLs one by one, and use the first working one."),(0,a.kt)("h4",{id:"redirects"},"Redirects"),(0,a.kt)("p",null,"If a public registry is used as a mirror, such as when configuring a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/registry/recipes/mirror/"},"pull through cache"),", images pulls are transparently redirected."),(0,a.kt)("p",null,"For example, if you have a mirror configured for ",(0,a.kt)("inlineCode",{parentName:"p"},"docker.io"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'mirrors:\n  docker.io:\n    endpoint:\n      - "https://mycustomreg.com:5000"\n')),(0,a.kt)("p",null,"Then pulling ",(0,a.kt)("inlineCode",{parentName:"p"},"docker.io/rancher/coredns-coredns:1.6.3")," will transparently pull the image from ",(0,a.kt)("inlineCode",{parentName:"p"},"https://mycustomreg.com:5000/rancher/coredns-coredns:1.6.3"),"."),(0,a.kt)("h4",{id:"rewrites"},"Rewrites"),(0,a.kt)("p",null,"Each mirror can have a set of rewrites. Rewrites can change the tag of an image based on a regular expression. This is useful if the organization/project structure in the mirror registry is different to the upstream one."),(0,a.kt)("p",null,"For example, the following configuration would transparently pull the image ",(0,a.kt)("inlineCode",{parentName:"p"},"docker.io/rancher/coredns-coredns:1.6.3")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"registry.example.com:5000/mirrorproject/rancher-images/coredns-coredns:1.6.3"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'mirrors:\n  docker.io:\n    endpoint:\n      - "https://registry.example.com:5000"\n    rewrite:\n      "^rancher/(.*)": "mirrorproject/rancher-images/$1"\n')),(0,a.kt)("p",null,"The image will still be stored under the original name so that a ",(0,a.kt)("inlineCode",{parentName:"p"},"crictl image ls")," will show ",(0,a.kt)("inlineCode",{parentName:"p"},"docker.io/rancher/coredns-coredns:1.6.3")," as available on the node, even though the image was pulled from the mirrored registry with a different name."),(0,a.kt)("h3",{id:"configs"},"Configs"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"configs")," section defines the TLS and credential configuration for each mirror. For each mirror you can define ",(0,a.kt)("inlineCode",{parentName:"p"},"auth")," and/or ",(0,a.kt)("inlineCode",{parentName:"p"},"tls"),". "),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"tls")," part consists of:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Directive"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"cert_file")),(0,a.kt)("td",{parentName:"tr",align:null},"The client certificate path that will be used to authenticate with the registry")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"key_file")),(0,a.kt)("td",{parentName:"tr",align:null},"The client key path that will be used to authenticate with the registry")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ca_file")),(0,a.kt)("td",{parentName:"tr",align:null},"Defines the CA certificate path to be used to verify the registry's server cert file")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"insecure_skip_verify")),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean that defines if TLS verification should be skipped for the registry")))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"auth")," part consists of either username/password or authentication token:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Directive"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"username")),(0,a.kt)("td",{parentName:"tr",align:null},"user name of the private registry basic auth")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"password")),(0,a.kt)("td",{parentName:"tr",align:null},"user password of the private registry basic auth")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"auth")),(0,a.kt)("td",{parentName:"tr",align:null},"authentication token of the private registry basic auth")))),(0,a.kt)("p",null,"Below are basic examples of using private registries in different modes:"),(0,a.kt)("h3",{id:"with-tls"},"With TLS"),(0,a.kt)("p",null,"Below are examples showing how you may configure ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/registries.yaml")," on each node when using TLS."),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"With Authentication",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'mirrors:\n  docker.io:\n    endpoint:\n      - "https://mycustomreg.com:5000"\nconfigs:\n  "mycustomreg:5000":\n    auth:\n      username: xxxxxx # this is the registry username\n      password: xxxxxx # this is the registry password\n    tls:\n      cert_file: # path to the cert file used in the registry\n      key_file:  # path to the key file used in the registry\n      ca_file:   # path to the ca file used in the registry\n'))),(0,a.kt)(o.Z,{value:"Without Authentication",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'mirrors:\n  docker.io:\n    endpoint:\n      - "https://mycustomreg.com:5000"\nconfigs:\n  "mycustomreg:5000":\n    tls:\n      cert_file: # path to the cert file used in the registry\n      key_file:  # path to the key file used in the registry\n      ca_file:   # path to the ca file used in the registry\n')))),(0,a.kt)("h3",{id:"without-tls"},"Without TLS"),(0,a.kt)("p",null,"Below are examples showing how you may configure ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/registries.yaml")," on each node when ",(0,a.kt)("em",{parentName:"p"},"not")," using TLS."),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"With Authentication",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'mirrors:\n  docker.io:\n    endpoint:\n      - "http://mycustomreg.com:5000"\nconfigs:\n  "mycustomreg:5000":\n    auth:\n      username: xxxxxx # this is the registry username\n      password: xxxxxx # this is the registry password\n'))),(0,a.kt)(o.Z,{value:"Without Authentication",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'mirrors:\n  docker.io:\n    endpoint:\n      - "http://mycustomreg.com:5000"\n')))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"In case of no TLS communication, you need to specify ",(0,a.kt)("inlineCode",{parentName:"p"},"http://")," for the endpoints, otherwise it will default to https.")),(0,a.kt)("p",null,"In order for the registry changes to take effect, you need to restart K3s on each node."),(0,a.kt)("h2",{id:"adding-images-to-the-private-registry"},"Adding Images to the Private Registry"),(0,a.kt)("p",null,"First, obtain the ",(0,a.kt)("inlineCode",{parentName:"p"},"k3s-images.txt")," file from GitHub for the release you are working with.\nPull the K3s images listed on the k3s-images.txt file from docker.io"),(0,a.kt)("p",null,"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"docker pull docker.io/rancher/coredns-coredns:1.6.3")),(0,a.kt)("p",null,"Then, retag the images to the private registry."),(0,a.kt)("p",null,"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"docker tag coredns-coredns:1.6.3 mycustomreg.com:5000/coredns-coredns")),(0,a.kt)("p",null,"Last, push the images to the private registry."),(0,a.kt)("p",null,"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"docker push mycustomreg.com:5000/coredns-coredns")))}m.isMDXComponent=!0}}]);