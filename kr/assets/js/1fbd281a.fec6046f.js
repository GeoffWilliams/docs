"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[3229],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=i,d=m["".concat(s,".").concat(f)]||m[f]||c[f]||r;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8628:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(3117),i=(n(7294),n(3905));const r={title:"Configuration Options",weight:20},o=void 0,l={unversionedId:"installation/configuration",id:"installation/configuration",title:"Configuration Options",description:"This page focuses on the options that are commonly used when setting up K3s for the first time. Refer to the documentation on Advanced Options and Configuration and the server and agent command documentation for more in-depth coverage.",source:"@site/i18n/kr/docusaurus-plugin-content-docs/current/installation/configuration.md",sourceDirName:"installation",slug:"/installation/configuration",permalink:"/kr/installation/configuration",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/configuration.md",tags:[],version:"current",lastUpdatedAt:1686740308,formattedLastUpdatedAt:"Jun 14, 2023",frontMatter:{title:"Configuration Options",weight:20},sidebar:"mySidebar",previous:{title:"Requirements",permalink:"/kr/installation/requirements"},next:{title:"Network Options",permalink:"/kr/installation/network-options"}},s={},p=[{value:"Configuration with install script",id:"configuration-with-install-script",level:2},{value:"Configuration with binary",id:"configuration-with-binary",level:2},{value:"Configuration File",id:"configuration-file",level:2},{value:"Multiple Config Files",id:"multiple-config-files",level:3},{value:"Putting it all together",id:"putting-it-all-together",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page focuses on the options that are commonly used when setting up K3s for the first time. Refer to the documentation on ",(0,i.kt)("a",{parentName:"p",href:"/kr/advanced/"},"Advanced Options and Configuration")," and the ",(0,i.kt)("a",{parentName:"p",href:"/kr/cli/server"},"server")," and ",(0,i.kt)("a",{parentName:"p",href:"/kr/cli/agent"},"agent")," command documentation for more in-depth coverage."),(0,i.kt)("h2",{id:"configuration-with-install-script"},"Configuration with install script"),(0,i.kt)("p",null,"As mentioned in the ",(0,i.kt)("a",{parentName:"p",href:"/kr/quick-start/"},"Quick-Start Guide"),", you can use the installation script available at ",(0,i.kt)("a",{parentName:"p",href:"https://get.k3s.io"},"https://get.k3s.io")," to install K3s as a service on systemd and openrc based systems."),(0,i.kt)("p",null,"You can use a combination of ",(0,i.kt)("inlineCode",{parentName:"p"},"INSTALL_K3S_EXEC"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"K3S_")," environment variables, and command flags to pass configuration to the service configuration. The prefixed environment variables, ",(0,i.kt)("inlineCode",{parentName:"p"},"INSTALL_K3S_EXEC")," value, and trailing shell arguments are all persisted into the service configuration. After installation, configuration may be altered by editing the environment file, editing the service configuration, or simply re-running the installer with new options."),(0,i.kt)("p",null,"To illustrate this, the following commands all result in the same behavior of registering a server without flannel and with a token:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="server" sh -s - --flannel-backend none --token 12345\ncurl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="server --flannel-backend none" K3S_TOKEN=12345 sh -s -\ncurl -sfL https://get.k3s.io | K3S_TOKEN=12345 sh -s - server --flannel-backend none\n# server is assumed below because there is no K3S_URL\ncurl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="--flannel-backend none --token 12345" sh -s - \ncurl -sfL https://get.k3s.io | sh -s - --flannel-backend none --token 12345\n')),(0,i.kt)("p",null,"When registering an agent, the following commands all result in the same behavior:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="agent --server https://k3s.example.com --token mypassword" sh -s -\ncurl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="agent" K3s_TOKEN="mypassword" sh -s - --server https://k3s.example.com\ncurl -sfL https://get.k3s.io | K3S_URL=https://k3s.example.com sh -s - agent --token mypassword\ncurl -sfL https://get.k3s.io | K3S_URL=https://k3s.example.com K3S_TOKEN=mypassword sh -s - # agent is assumed because of K3S_URL\n')),(0,i.kt)("p",null,"For details on all environment variables, see ",(0,i.kt)("a",{parentName:"p",href:"/kr/reference/env-variables"},"Environment Variables.")),(0,i.kt)("h2",{id:"configuration-with-binary"},"Configuration with binary"),(0,i.kt)("p",null,"As stated, the installation script is primarily concerned with configuring K3s to run as a service.",(0,i.kt)("br",{parentName:"p"}),"\n","If you choose to not use the script, you can run K3s simply by downloading the binary from our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/releases/latest"},"release page"),", placing it on your path, and executing it. This is not particularly useful for permanent installations, but may be useful when performing quick tests that do not merit managing K3s as a system service."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sfL https://get.k3s.io | INSTALL_K3S_SKIP_ENABLE=true sh -\n")),(0,i.kt)("p",null,"You can configure K3s in this manner through ",(0,i.kt)("inlineCode",{parentName:"p"},"K3S_")," environment variables:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'K3S_KUBECONFIG_MODE="644" k3s server\n')),(0,i.kt)("p",null,"Or command flags:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"k3s server --write-kubeconfig-mode 644\n")),(0,i.kt)("p",null,"The k3s agent can also be configured this way:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"k3s agent --server https://k3s.example.com --token mypassword\n")),(0,i.kt)("p",null,"For details on configuring the K3s server, see the ",(0,i.kt)("a",{parentName:"p",href:"/kr/cli/server"},(0,i.kt)("inlineCode",{parentName:"a"},"k3s server")," documentation"),".",(0,i.kt)("br",{parentName:"p"}),"\n","For details on configuring the K3s agent, see the ",(0,i.kt)("a",{parentName:"p",href:"/kr/cli/agent"},(0,i.kt)("inlineCode",{parentName:"a"},"k3s agent")," documentation"),".",(0,i.kt)("br",{parentName:"p"}),"\n","You can also use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--help")," flag to see a list of all available options."),(0,i.kt)("admonition",{title:"Matching Flags",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"It is important to match critical flags on your server nodes. For example, if you use the flag\n",(0,i.kt)("inlineCode",{parentName:"p"},"--disable servicelb")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"--cluster-cidr=10.200.0.0/16")," on your master node, but don't set it on other server nodes, the nodes will fail to join. They will print errors such as:\n",(0,i.kt)("inlineCode",{parentName:"p"},"failed to validate server configuration: critical configuration value mismatch."),"\nSee the Server Configuration documentation (linked above) for more information on which flags must be set identically on server nodes.")),(0,i.kt)("h2",{id:"configuration-file"},"Configuration File"),(0,i.kt)("admonition",{title:"Version Gate",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Available as of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/releases/tag/v1.19.1%2Bk3s1"},"v1.19.1+k3s1"))),(0,i.kt)("p",null,"In addition to configuring K3s with environment variables and CLI arguments, K3s can also use a config file."),(0,i.kt)("p",null,"By default, values present in a YAML file located at ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/config.yaml")," will be used on install."),(0,i.kt)("p",null,"An example of a basic ",(0,i.kt)("inlineCode",{parentName:"p"},"server")," config file is below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'write-kubeconfig-mode: "0644"\ntls-san:\n  - "foo.local"\nnode-label:\n  - "foo=bar"\n  - "something=amazing"\ncluster-init: true\n')),(0,i.kt)("p",null,"This is equivalent to the following CLI arguments:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'k3s server \\\n  --write-kubeconfig-mode "0644"    \\\n  --tls-san "foo.local"             \\\n  --node-label "foo=bar"            \\\n  --node-label "something=amazing"  \\\n  --cluster-init\n')),(0,i.kt)("p",null,"In general, CLI arguments map to their respective YAML key, with repeatable CLI arguments being represented as YAML lists. Boolean flags are represented as ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," in the YAML file."),(0,i.kt)("p",null,"It is also possible to use both a configuration file and CLI arguments. In these situations, values will be loaded from both sources, but CLI arguments will take precedence. For repeatable arguments such as ",(0,i.kt)("inlineCode",{parentName:"p"},"--node-label"),", the CLI arguments will overwrite all values in the list."),(0,i.kt)("p",null,"Finally, the location of the config file can be changed either through the CLI argument ",(0,i.kt)("inlineCode",{parentName:"p"},"--config FILE, -c FILE"),", or the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"$K3S_CONFIG_FILE"),"."),(0,i.kt)("h3",{id:"multiple-config-files"},"Multiple Config Files"),(0,i.kt)("admonition",{title:"Version Gate",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Available as of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/releases/tag/v1.21.0%2Bk3s1"},"v1.21.0+k3s1"))),(0,i.kt)("p",null,"Multiple configuration files are supported. By default, configuration files are read from ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/config.yaml")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/config.yaml.d/*.yaml")," in alphabetical order. The last value for a given key will be used. A ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," can be appended to the key to append the value to the existing string or slice, instead of replacing it."),(0,i.kt)("p",null,"An example of multiple config files is below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# config.yaml\ntoken: boop\nnode-label:\n  - foo=bar\n  - bar=baz\n\n\n# config.yaml.d/test1.yaml\nwrite-kubeconfig-mode: 600\n\n\n# config.yaml.d/test2.yaml\nwrite-kubeconfig-mode: 777\nnode-label:\n  - other=what\n  - foo=three\n\n")),(0,i.kt)("p",null,"This results in a final configuration of:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"write-kubeconfig-mode: 777\ntoken: boop\nnode-label:\n  - other=what\n  - foo=three\n")),(0,i.kt)("h2",{id:"putting-it-all-together"},"Putting it all together"),(0,i.kt)("p",null,"All of the above options can be combined into a single example."),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yaml")," file is created at ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/config.yaml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'token: "secret"\ndebug: true\n')),(0,i.kt)("p",null,"Then the installation script is run with a combination of environment variables and flags:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -sfL https://get.k3s.io | K3S_KUBECONFIG_MODE="644" INSTALL_K3S_EXEC="server" sh -s - --flannel-backend none\n')),(0,i.kt)("p",null,"Or if you have already installed the K3s Binary:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'K3S_KUBECONFIG_MODE="644" k3s server --flannel-backend none\n')),(0,i.kt)("p",null,"This results in a server with:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A kubeconfig file with permissions ",(0,i.kt)("inlineCode",{parentName:"li"},"644")),(0,i.kt)("li",{parentName:"ul"},"Flannel backend set to ",(0,i.kt)("inlineCode",{parentName:"li"},"none")),(0,i.kt)("li",{parentName:"ul"},"The token set to ",(0,i.kt)("inlineCode",{parentName:"li"},"secret")),(0,i.kt)("li",{parentName:"ul"},"Debug logging enabled")))}c.isMDXComponent=!0}}]);