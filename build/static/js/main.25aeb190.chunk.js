(this.webpackJsonpgeb=this.webpackJsonpgeb||[]).push([[0],{33:function(e,t,a){},34:function(e,t,a){},50:function(e,t,a){e.exports=a(74)},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(35),i=a.n(l),o=(a(55),a(1)),c=a(2),s=a(4),u=a(3),m=(a(56),a(57),a(7)),h="https://stormy-ridge-13186.herokuapp.com",d="geb-client-auth-token",p=a(36),f=a.n(p),v={saveAuthToken:function(e){window.localStorage.setItem(d,e)},getAuthToken:function(){return window.localStorage.getItem(d)},clearAuthToken:function(){window.localStorage.removeItem(d)},hasAuthToken:function(){return!!v.getAuthToken()},makeBasicAuthToken:function(e,t){return window.btoa("".concat(e,":").concat(t))},getPayload:function(){return f()(window.localStorage.getItem(d))}},g=v,y=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleLogoutClick=function(){g.clearAuthToken(),e.props.history.push("/")},e}return Object(c.a)(a,[{key:"renderLogoutLink",value:function(){return r.a.createElement("div",{className:"Header__logged-in"},r.a.createElement(m.b,{onClick:this.handleLogoutClick,to:"/",className:"log",style:{textDecoration:"none"}},"Logout"))}},{key:"renderLoginLink",value:function(){return r.a.createElement("div",{className:"Header__not-logged-in"},r.a.createElement(m.b,{to:"/login",className:"log",style:{textDecoration:"none"}},"Log in"))}},{key:"render",value:function(){return r.a.createElement("div",{className:"nav"},r.a.createElement("nav",{role:"navigation"},r.a.createElement("div",{className:"navOptions"},r.a.createElement(m.b,{to:"/home",className:"icon",style:{textDecoration:"none"}},r.a.createElement("img",{alt:"logo",src:"https://imgur.com/wB7hyOH.jpg"})),g.hasAuthToken()?this.renderLogoutLink():this.renderLoginLink())))}}]),a}(n.Component),E=(a(65),a(11)),b=a(76);a(66);function x(e){var t=e.date,a=e.format,n=void 0===a?"yyyy-mm-dd":a,r=new Date(t);return Object(b.a)(r,n)}function T(e){var t=e.className,a=Object(E.a)(e,["className"]);return r.a.createElement("button",Object.assign({className:["Button",t].join(" ")},a))}function j(e){var t=e.className,a=Object(E.a)(e,["className"]);return r.a.createElement("input",Object.assign({className:["Input",t].join(" ")},a))}function O(e){var t=e.className,a=Object(E.a)(e,["className"]);return r.a.createElement("span",Object.assign({className:["Required",t].join(" ")},a),"*")}function _(e){var t=e.className,a=e.list,n=Object(E.a)(e,["className","list"]),l=["Section",a&&"Section--list",t].filter(Boolean).join(" ");return r.a.createElement("section",Object.assign({className:l},n))}var I={getUserId:function(e){return fetch("".concat(h,"/auth/").concat(e),{headers:{authorization:"basic ".concat(g.getAuthToken())}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},postLogin:function(e){var t=e.user_name,a=e.password;return fetch("".concat(h,"/auth/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({user_name:t,password:a})}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},postUser:function(e){return fetch("".concat(h,"/auth/users"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))}},N=r.a.createContext({}),k=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={error:null},e.handleSubmit=function(t){t.preventDefault();var a=t.target,n=a.full_name,r=a.user_name,l=a.password;g.saveAuthToken(g.makeBasicAuthToken(r.value,l.value)),e.setState({error:null}),I.postUser({user_name:r.value,password:l.value,full_name:n.value}).then((function(){I.postLogin({user_name:r.value,password:l.value}).then((function(){return e.context.handleUpdateTemplates()})).then((function(){return e.context.handleUpdateGrids()})),e.props.history.replace("/home")})).catch((function(t){e.setState({error:t.error})}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.error;return r.a.createElement("form",{className:"RegistrationForm",onSubmit:this.handleSubmit},r.a.createElement("div",{role:"alert"},e&&r.a.createElement("p",{className:"red"},e)),r.a.createElement("div",{className:"full_name"},r.a.createElement("label",{htmlFor:"RegistrationForm__full_name"},"Full name ",r.a.createElement(O,null)),r.a.createElement(j,{name:"full_name",type:"text",required:!0,id:"RegistrationForm__full_name"})),r.a.createElement("div",{className:"user_name"},r.a.createElement("label",{htmlFor:"RegistrationForm__user_name"},"User name ",r.a.createElement(O,null)),r.a.createElement(j,{name:"user_name",type:"text",required:!0,id:"RegistrationForm__user_name"})),r.a.createElement("div",{className:"password"},r.a.createElement("label",{htmlFor:"RegistrationForm__password"},"Password ",r.a.createElement(O,null)),r.a.createElement(j,{name:"password",type:"password",required:!0,id:"RegistrationForm__password"})),r.a.createElement(T,{type:"submit"},"Register"))}}]),a}(n.Component);k.contextType=N;var w=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",{role:"contentinfo"},"Transect Generator")}}]),a}(n.Component),C=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{id:"outerSection"},r.a.createElement("main",{role:"main"},r.a.createElement("header",{role:"banner"},r.a.createElement("h1",null,"Geb"),r.a.createElement("h2",null,"Grid Randomizer")),r.a.createElement("section",null,r.a.createElement("h3",null,"Truly randomize your sampling"),r.a.createElement("img",{src:"https://imgur.com/dtDXC87.png",alt:"Overlayed grid",className:"grid"}),r.a.createElement("p",null,"Say you wanted to sample the vegetation in the area above, Geb will generate lines(transects) for you to follow and sample the vegetation on!")),r.a.createElement("section",null,r.a.createElement("header",null,r.a.createElement("h3",null,"Generate custom transects on the fly")),r.a.createElement("p",null,"Whether you're a ecologist sampling vegetation, or a biologist sampling mosquito larvae you know the value of transect based sampling. Geb is a tool designed to generate transect lines to survey inside a grid of dimensions of you're choosing."," ")),r.a.createElement("section",null,r.a.createElement("header",null,r.a.createElement("h3",null,"Save Custom Transects")),r.a.createElement("p",null,"No matter how many different sites you visit you may make custom grids for all of them and then simply click that configuration and Geb will generate transects for you to sample on that day. The transects will be completely randomly generated so you will not have to worry about any sort of bias in your sampling!")),r.a.createElement("section",null,r.a.createElement("header",null,r.a.createElement("h3",null,"Keep track of your progress")),r.a.createElement("p",null,"Whenever a site is sampled, Geb will record the transect configuration.")),r.a.createElement("section",null,r.a.createElement("header",null,r.a.createElement("h3",null,"Start Sampling Now")),r.a.createElement(k,{id:"register",history:this.props.history}))),r.a.createElement(w,null))}}]),a}(n.Component),S=(a(67),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{id:"outerSection"},r.a.createElement("main",{role:"main"},r.a.createElement("header",{role:"banner"},r.a.createElement("h1",null,"Geb"),r.a.createElement("h2",null,"Home"),r.a.createElement(m.b,{to:"/myTemplates",style:{textDecoration:"none"},className:"buttons"},"My Templates"),r.a.createElement(m.b,{to:"/newGrid",style:{textDecoration:"none"},className:"buttons"},"New Template")),r.a.createElement("section",null,r.a.createElement("h3",null,"Number of Templates"),r.a.createElement("p",null,this.context.templates.length),r.a.createElement("h3",null,"Number of sites sampled"),r.a.createElement("p",null,this.context.data.length))),r.a.createElement(w,null))}}]),a}(n.Component));S.contextType=N;var A=S,P=(a(68),a(69),a(12)),L=a.n(P),G={getTemplate:function(e){return fetch("".concat(h,"/templates/").concat(e),{headers:{authorization:"basic ".concat(g.getAuthToken())}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},getAllTemplates:function(e){return fetch("".concat(h,"/templates/").concat(e),{headers:{authorization:"basic ".concat(g.getAuthToken())}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},deleteTemplateGrids:function(e){return fetch("".concat(h,"/templates/grids/").concat(e),{method:"DELETE",headers:{authorization:"basic ".concat(g.getAuthToken())}})},deleteTemplate:function(e){return fetch("".concat(h,"/templates/template/").concat(e),{method:"DELETE",headers:{authorization:"basic ".concat(g.getAuthToken())}})},getTemplateGrids:function(e){return fetch("".concat(h,"/templates/").concat(e,"/grids"),{headers:{authorization:"basic ".concat(g.getAuthToken())}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},postTemplate:function(e,t,a,n,r,l,i,o){return fetch("".concat(h,"/templates/"),{method:"POST",headers:{"content-type":"application/json",authorization:"basic ".concat(g.getAuthToken())},body:JSON.stringify({minimum:e,name:t,partial_transect_count:a,partial_transect_length:n,transect_count:r,user_id:l,x:i,y:o})}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))}},D=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleClickDelete=function(t){t.preventDefault(),G.deleteTemplateGrids(e.props.template.id).then((function(){G.deleteTemplate(e.props.template.id)})).then((function(){e.context.handleDeleteTemplate(e.props.id)})).then((function(){return e.context.handleUpdateGrids()}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.template;return r.a.createElement("div",{className:"templateListItem"},r.a.createElement("header",{className:"TemplateListItem__header"},r.a.createElement("input",{type:"image",src:"https://imgur.com/FyZgoKZ.png",alt:"initialzie button",className:"deleteButton",width:"35",height:"35",onClick:this.handleClickDelete}),r.a.createElement(m.b,{to:{pathname:"/template/".concat(this.props.id),state:{template:e}}},r.a.createElement("h2",{className:"TemplateListItem__heading"},e.name)),r.a.createElement(L.a,{trigger:"View template details",className:"collapsible"},r.a.createElement("div",{className:"valueContainer"},r.a.createElement("span",null,"X value: "),r.a.createElement("span",{className:"values"},e.x)),r.a.createElement("div",{className:"valueContainer"},r.a.createElement("span",null,"Y value: "),r.a.createElement("span",{className:"values"},e.y)),r.a.createElement("div",{className:"valueContainer"},r.a.createElement("span",null,"Transect count: "),r.a.createElement("span",{className:"values"},e.transect_count)),r.a.createElement("div",{className:"valueContainer"},r.a.createElement("span",null,"Minimum distance between transects:"," ",r.a.createElement("span",{className:"values"},e.minimum))),r.a.createElement("div",{className:"valueContainer"},r.a.createElement("span",null,"Partial transect count:"," ",r.a.createElement("span",{className:"values"},e.partial_transect_count))),r.a.createElement("div",{className:"valueContainer"},r.a.createElement("span",null,"Partial transect length:"," ",r.a.createElement("span",{className:"values"},e.partial_transect_length))))))}}]),a}(n.Component);D.contextType=N;var M=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"renderOutlines",value:function(){var e=this.context.templates.outlineList;return(void 0===e?[]:e).map((function(e){return r.a.createElement(D,{key:e.id,template:e})}))}},{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement("main",{role:"main"},r.a.createElement("header",{role:"banner"},r.a.createElement("h1",null,"Geb"),r.a.createElement("h2",null,"My Templates")),r.a.createElement(_,{list:!0,className:"OutlineListPage"},this.context.templates.map((function(e,t){return r.a.createElement(D,{template:e,key:t,id:t})})))),r.a.createElement(w,null))}}]),a}(n.Component);M.contextType=N;var U=M;a(70);var F=function(){return r.a.createElement("section",null,r.a.createElement("main",{role:"main"},r.a.createElement("header",{role:"banner"},r.a.createElement("h1",null,"Geb"),r.a.createElement("h2",null,"Transect Generator")),r.a.createElement("h3",null,"Connetquot"),r.a.createElement("p",null,"Load most recent generated transect [Itemize every time this site was sampled]"),r.a.createElement("p",null," Date it was done on here"),r.a.createElement("p",null,"Comments for it here"),r.a.createElement("p",null,"Option to delete it here")),r.a.createElement(w,null))},V=a(38),z=a(20);a(33);function B(e){return e.message?r.a.createElement("div",{className:"error"},e.message):r.a.createElement(r.a.Fragment,null)}var R=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).forceUpdateHandler=function(){n.forceUpdate()},n.state={gridInformation:{name:{value:"no name",touched:!1},x:{value:30,touched:!1},y:{value:30,touched:!1},transectCount:{value:4,touched:!1},partialTransectCount:{value:1,touched:!1},partialTransectLength:{value:1,touched:!1},minimum:{value:3,touched:!1},ready:{value:0,touched:!1},id:"60"},data:{x:[14,21,2],y:[25,1],xPartial:[18],yPartial:[9],direction:[0],partialTransectLength:5}},n.handleChange=n.handleChange.bind(Object(z.a)(n)),n}return Object(c.a)(a,[{key:"handleChange",value:function(e){var t=Object(V.a)({},this.state.gridInformation);t[e.target.name.toString()]={value:e.target.value,touched:!0},this.setState({gridInformation:t},(function(){}))}},{key:"transectLengthValidation",value:function(){if(!1===(!(parseInt(this.state.gridInformation.x.value)<parseInt(this.state.gridInformation.partialTransectLength.value))&&!(parseInt(this.state.gridInformation.y.value)<parseInt(this.state.gridInformation.partialTransectLength.value))))return"Partial transect cannot be longer than x or y"}},{key:"minimumValidation",value:function(){if(parseInt(this.state.gridInformation.minimum.value)*parseInt(this.state.gridInformation.transectCount.value)>(parseInt(this.state.gridInformation.x.value)+parseInt(this.state.gridInformation.y.value))/1.5)return"That minimum distance is too long given your other parameters"}},{key:"xyValidation",value:function(){var e;if(parseInt(this.state.gridInformation.x.value)>300&&(e=!1),parseInt(this.state.gridInformation.y.value)>300&&(e=!1),!1===e)return"Neither x nor y may be larger than 300"}},{key:"fullTransectValidation",value:function(){if(parseInt(this.state.gridInformation.transectCount.value)>10)return"Cannot have more than 10 transects"}},{key:"partialTransectValidation",value:function(){if(parseInt(this.state.gridInformation.partialTransectCount.value)>10)return"Cannot have more than 10 partial transects"}},{key:"validateNumberInputs",value:function(){var e=!0;if(isNaN(this.state.gridInformation.x.value)&&(e=!1),isNaN(this.state.gridInformation.y.value)&&(e=!1),isNaN(this.state.gridInformation.transectCount.value)&&(e=!1),isNaN(this.state.gridInformation.partialTransectCount.value)&&(e=!1),isNaN(this.state.gridInformation.partialTransectLength.value)&&(e=!1),isNaN(this.state.gridInformation.minimum.value)&&(e=!1),!1===e)return"All inputs must be numbers"}},{key:"validatePositiveInputs",value:function(){var e=!0;if(parseInt(this.state.gridInformation.x.value)<0&&(e=!1),parseInt(this.state.gridInformation.y.value)<0&&(e=!1),parseInt(this.state.gridInformation.transectCount.value)<0&&(e=!1),parseInt(this.state.gridInformation.partialTransectCount.value)<0&&(e=!1),parseInt(this.state.gridInformation.partialTransectLength.value)<0&&(e=!1),parseInt(this.state.gridInformation.minimum.value)<0&&(e=!1),!1===e)return"All inputs must be positive"}},{key:"nameValidation",value:function(){if("no name"===this.state.gridInformation.name.value)return"All Templates must be named"}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleUpdateGrid(this.state.gridInformation)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"gridGenerator"},r.a.createElement("form",{className:"Transect Grid Generator",onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("div",{id:"myBarChart"}),r.a.createElement("section",null,r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"Name of grid"},"Name of Grid"),r.a.createElement("input",{placeholder:"Washington Square Park",type:"text",name:"name",id:"name",required:!0,onChange:function(t){return e.handleChange(t)}})),r.a.createElement(B,{message:this.nameValidation()}),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"X length"},"X length"),r.a.createElement("input",{placeholder:"30",type:"number",name:"x",id:"x",onChange:function(t){return e.handleChange(t)}})),r.a.createElement(L.a,{trigger:"+",className:"collapsible"},r.a.createElement("div",null,"The x and y values are for determining the height and width of the grid template. They do not match any specific units, and are meant to be used relatively.")),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"Y length"},"Y length"),r.a.createElement("input",{type:"number",name:"y",id:"y",placeholder:"30",onChange:function(t){return e.handleChange(t)}})),r.a.createElement(L.a,{trigger:"+",className:"collapsible"},r.a.createElement("div",null,"The x and y values are for determining the height and width of the grid template. They do not match any specific units, and are meant to be used relatively.")),r.a.createElement(B,{message:this.xyValidation()}),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"Transect"},"Full Transect count"),r.a.createElement(B,{message:this.fullTransectValidation()}),r.a.createElement("input",{type:"number",name:"transectCount",id:"transectCount",placeholder:"4",onChange:function(t){return e.handleChange(t)}})),r.a.createElement(L.a,{trigger:"+",className:"collapsible"},r.a.createElement("div",null,"Full transcects cover the full distance of either the height or width, wherever they are randomly selected to be.")),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"partial-transect"},"Partial Transect Count"),r.a.createElement(B,{message:this.partialTransectValidation()}),r.a.createElement("input",{type:"number",name:"partialTransectCount",id:"partialTransectCount",placeholder:"1",onChange:function(t){return e.handleChange(t)}})),r.a.createElement(L.a,{trigger:"+",className:"collapsible"},r.a.createElement("div",null,"Partial transects are small transects that do not cover the full distance as full transects do. They only cover the distance you specify. They will be placed randomly inside your grid, with their cardinal direction also randomized.")),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"partial-transect-length"},"Partial Transect Length"),r.a.createElement(B,{message:this.transectLengthValidation()}),r.a.createElement("input",{type:"number",name:"partialTransectLength",id:"partialTransectLength",placeholder:"5",onChange:function(t){return e.handleChange(t)}})),r.a.createElement(L.a,{trigger:"+",className:"collapsible"},r.a.createElement("div",null,"The length of the partial transects.")),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"minimum"},"Minimum distance between transects"),r.a.createElement(B,{message:this.minimumValidation()}),r.a.createElement("input",{type:"number",name:"minimum",id:"minimum",placeholder:"3",onChange:function(t){return e.handleChange(t)}})),r.a.createElement(L.a,{trigger:"+",className:"collapsible"},r.a.createElement("div",null,"Minimum distance between transects only applies to full transects. This will insure that full transects won't be on top of each other. It is important to note excessively high minimum distance can lead to very homogenized transects.")),r.a.createElement(B,{message:this.validateNumberInputs()}),r.a.createElement(B,{message:this.validatePositiveInputs()}),r.a.createElement("button",{type:"submit",onClick:this.forceUpdateHandler,disabled:this.validatePositiveInputs()||this.validateNumberInputs()||this.minimumValidation()||this.transectLengthValidation()||this.partialTransectValidation()||this.fullTransectValidation()||this.xyValidation()||this.nameValidation()},"Generate Custom Transect"))))}}]),a}(n.Component);R.contextType=N;var q=R,J=a(21),H=(a(34),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e,t,a,n=this.props.data,l=280/((e=this.props.info).x.value>e.y.value?e.x.value:e.y.value);if(e.x.value&&e.y.value){t=e.x.value*l,a=e.y.value*l;for(var i=0;i<n.x.length;i++)n.x[i]=n.x[i]*l;for(var o=0;o<n.y.length;o++)n.y[o]=n.y[o]*l;for(var c=0;c<n.xPartial.length;c++)n.xPartial[c]=n.xPartial[c]*l;for(var s=0;s<n.yPartial.length;s++)n.yPartial[s]=n.yPartial[s]*l;n.partialTransectLength=n.partialTransectLength*l,setTimeout((function(){var e=J.a("svg").attr("height",a).attr("width",t);e.selectAll("*").remove(),e.selectAll("svg").data(n.y).enter().append("rect").attr("width",t).attr("height",4).attr("y",(function(e,t){return e})).attr("fill","rgb(1,82,112)"),e.selectAll("svg").data(n.x).enter().append("rect").attr("height",a).attr("width",4).attr("x",(function(e,t){return e})).attr("fill","rgb(197,84,40)"),e.selectAll("svg").data(n.xPartial).enter().append("rect").attr("height",(function(e,t){return n.direction[t]<=1?(0===n.direction[t]||(n.yPartial[t]=n.yPartial[t]-n.partialTransectLength),n.partialTransectLength):4})).attr("width",(function(e,t){return n.direction[t]>1?(2===n.direction[t]||(n.xPartial[t]=n.xPartial[t]-n.partialTransectLength),n.partialTransectLength):4})).attr("x",(function(e,t){return n.xPartial[t]})).attr("y",(function(e,t){return n.yPartial[t]})).attr("fill","rgb(109,88,59)"),e.selectAll("svg").data(n.y).enter().append("text").attr("y",(function(e,t){return e-4})).text((function(e){return Math.round(e/l)})),e.selectAll("svg").data(n.x).enter().append("text").attr("x",(function(e){return e+4})).attr("y",a-10).text((function(e){return Math.round(e/l)})),e.selectAll("svg").data(n.xPartial).enter().append("text").attr("x",(function(e){return e+4})).attr("y",(function(e,t){return n.yPartial[t]-4})).text((function(e,t){return Math.round(e/l)+", "+Math.round(n.yPartial[t]/l)}))}),1)}else console.log("Must wait for both numbers");return r.a.createElement("div",{id:"svgAppender"},r.a.createElement("svg",null))}}]),a}(n.Component));function X(){var e=[],t=0;for(t=0;t<10;t++)e.push(Math.floor(9*Math.random()));return e.join("")}function W(e,t){var a,n=[],r=[],l=new Date,i={x:[],y:[],xPartial:[],yPartial:[],direction:[],partialTransectLength:e.partialTransectLength.value,id:t,dataId:X(),date:l};e.x.value=parseInt(e.x.value),e.y.value=parseInt(e.y.value);var o=e.x.value+e.y.value;n.push(Math.floor(Math.random()*o));var c=0,s=1;for(c=0;c<e.transectCount.value-1;c++){for(a=Math.floor(Math.random()*o),s=0;s<e.minimum.value;s++)r.push(n[c]-s),r.push(n[c]+s);for(var u=0,m=!1,h=0;!1===m;)a===r[u]&&(h+=1),u+1===r.length&&(0===h?(n.push(a),m=!0):(a=Math.floor(Math.random()*o),u=0,h=0)),u+=1}var d=0;for(d=0;d<n.length;d++)n[d]>e.x.value?i.y.push(n[d]-e.x.value):i.x.push(n[d]);if(e.partialTransectCount.value>=1)for(c=0;c<e.partialTransectCount.value;c++)i.xPartial.push(Math.floor(Math.random()*e.x.value)),i.yPartial.push(Math.floor(Math.random()*e.y.value)),i.direction.push(Math.floor(3*Math.random())),i.xPartial[c]<e.partialTransectLength.value&&3===i.direction[c]&&(i.direction[c]=2),i.xPartial[c]>e.x-e.partialTransectLength.value&&2===i.direction[c]&&(i.direction[c]=3),i.yPartial[c]<e.partialTransectLength.value&&1===i.direction[c]&&(i.direction[c]=0),i.yPartial[c]>e.y-e.partialTransectLength.value&&0===i.direction[c]&&(i.direction[c]=1);return i}var Y=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleSubmit=function(t){t.preventDefault();var a=e.props.template;G.postTemplate(a.minimum.value,a.name.value,a.partialTransectCount.value,a.partialTransectLength.value,a.transectCount.value,e.context.id,a.x.value,a.y.value).then((function(){e.context.handleUpdateTemplates()})).then((function(){e.props.history.push("/myTemplates")}))},e}return Object(c.a)(a,[{key:"render",value:function(){return a.contextType=N,r.a.createElement("form",{onSubmit:this.handleSubmit,id:"templateButton"},r.a.createElement("button",{type:"submit"},"Save this template?"))}}]),a}(n.Component);Y.contextType=N;var K=Y,Z=(a(71),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleUpdateGrid=function(e){var t=X(),a=W(e,t);e.id=t,n.setState({gridInformation:e,data:a,ready:!0})},n.state={gridInformation:{name:{value:"no name",touched:!1},x:{value:30,touched:!1},y:{value:30,touched:!1},transectCount:{value:4,touched:!1},partialTransectCount:{value:1,touched:!1},partialTransectLength:{value:5,touched:!1},minimum:{value:3,touched:!1},id:"60"},data:{x:[14,21,2],y:[25,1],xPartial:[18],yPartial:[9],direction:[0],partialTransectLength:5,id:"60"},ready:!1},n}return Object(c.a)(a,[{key:"render",value:function(){var e,t;return!0===this.state.ready&&(e=r.a.createElement("section",{id:"saveOptions"},r.a.createElement(K,{history:this.props.history,template:this.state.gridInformation})," ")),!0===this.state.ready&&(t=r.a.createElement(H,{data:this.state.data,info:this.state.gridInformation,id:"gridTest"})),r.a.createElement("section",null," ",r.a.createElement("header",{role:"banner"},r.a.createElement("h1",null,"Geb"),r.a.createElement("h2",null,"Template Generator")),r.a.createElement(q,{handleUpdateGrid:this.handleUpdateGrid}),t,e)}}]),a}(n.Component));Z.contextType=N;var Q=Z,$={stringifyData:function(e){},getAllGrids:function(e){return fetch("".concat(h,"/grids/user/").concat(e),{headers:{authorization:"basic ".concat(g.getAuthToken())}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},postGrid:function(e,t,a,n,r,l,i,o){return fetch("".concat(h,"/grids"),{method:"POST",headers:{"content-type":"application/json",authorization:"basic ".concat(g.getAuthToken())},body:JSON.stringify({template_id:e,user_id:t,x:a,y:n,partial_transect_length:r,x_partial:l,y_partial:i,direction:o})}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},getGrid:function(e){return fetch("".concat(h,"/grids/").concat(e),{headers:{authorization:"basic ".concat(g.getAuthToken())}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))}},ee=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleSubmit=function(t){t.preventDefault();var a=e.props.data;$.postGrid(a.id,e.context.id,a.x.toString(),a.y.toString(),Math.round(a.partialTransectLength),a.xPartial.toString(),a.yPartial.toString(),a.direction.toString()).then((function(){e.context.handleUpdateGrids()}))},e}return Object(c.a)(a,[{key:"render",value:function(){return a.contextType=N,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("button",{type:"submit"},"Save this sampling event?"))}}]),a}(n.Component);ee.contextType=N;var te=ee,ae=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleUpdateGrid=function(e){var t=W(e,n.props.location.state.template.id);n.setState({gridInformation:e,data:t,ready:!0})},n.props.location.state.template||n.props.history.replace("/home"),n.state={gridInformation:{name:{value:n.props.location.state.template.name,touched:!1},x:{value:n.props.location.state.template.x,touched:!1},y:{value:n.props.location.state.template.y,touched:!1},transectCount:{value:n.props.location.state.template.transect_count,touched:!1},partialTransectCount:{value:n.props.location.state.template.partial_transect_count,touched:!1},partialTransectLength:{value:n.props.location.state.template.partial_transect_length,touched:!1},minimum:{value:n.props.location.state.template.minimum,touched:!1},id:n.props.location.state.template.id},data:{x:[],y:[],xPartial:[],yPartial:[],direction:[],partialTransectLength:0,id:n.props.location.state.template.id},ready:!1},n}return Object(c.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=W(this.state.gridInformation,this.props.location.state.template.id);this.setState({gridInformation:this.state.gridInformation,data:t,ready:!0})}},{key:"render",value:function(){var e,t,a=this;!0===this.state.ready&&(e=r.a.createElement("section",{id:"saveOptions"},r.a.createElement(te,{data:this.state.data})));var n,l=[];for(t=0;t<this.context.data.length;t++)this.context.data[t].template_id===this.state.gridInformation.id&&l.push(this.context.data[t]);return 0!==l.length&&(n=r.a.createElement(m.b,{to:{pathname:"/template/".concat(this.state.gridInformation.id,"/grids"),state:{template:this.state.gridInformation}}},"Previous Sampling Events")),r.a.createElement("section",null,r.a.createElement("main",{role:"main"},r.a.createElement("header",{role:"banner"},r.a.createElement("h1",null,"Geb"),r.a.createElement("h2",null,this.state.gridInformation.name.value)),n,r.a.createElement("form",{onSubmit:function(e){return a.handleSubmit(e)}},r.a.createElement("button",{type:"submit"}," Generate new sampling event?"),r.a.createElement(H,{data:this.state.data,info:this.state.gridInformation}),e)),r.a.createElement(w,null))}}]),a}(n.Component);ae.contextType=N;var ne=ae,re=(a(72),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleClickDelete=function(t){t.preventDefault(),e.context.handleDeleteData(e.props.id)},e}return Object(c.a)(a,[{key:"render",value:function(){var e,t=this,a=[];for(e=0;e<this.context.data.length;e++)this.context.data[e].template_id===this.props.location.state.template.id&&a.push(this.context.data[e]);0===a.length&&this.props.history.push("/myTemplates");var n=a.map((function(e,a){return r.a.createElement("div",{className:"gridDividers"},r.a.createElement(m.b,{to:{pathname:"/template/".concat(e.template_id,"/grids/").concat(e.id),state:{template:t.props.location.state.template,data:e}}},"Sampled on ",r.a.createElement(x,{date:e.date_created})))}));return r.a.createElement("section",null,r.a.createElement("main",{role:"main"},r.a.createElement("header",{role:"banner"},r.a.createElement("h1",null,"Geb"),r.a.createElement("h2",null,this.props.location.state.template.name.value)),n))}}]),a}(n.Component));re.contextType=N;var le=re,ie=(a(73),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={error:null},e.handleSubmitBasicAuth=function(t){t.preventDefault();var a=t.target,n=a.user_name,r=a.password;g.saveAuthToken(g.makeBasicAuthToken(n.value,r.value)),n.value="",r.value="",e.props.history.replace("/home")},e.handleSubmitJwtAuth=function(t){t.preventDefault(),e.setState({error:null});var a=t.target,n=a.user_name,r=a.password;I.postLogin({user_name:n.value,password:r.value}).then((function(t){g.saveAuthToken(t.authToken),I.getUserId(n.value).then((function(t){e.context.updateUserId(t.id)})).then((function(){return e.context.handleUpdateTemplates()})).then((function(){return e.context.handleUpdateGrids()})),n.value="",r.value="",e.props.history.replace("/home")})).catch((function(t){e.setState({error:t.error})}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.error;return r.a.createElement("div",{id:"outerSection"},r.a.createElement("form",{className:"LoginForm",onSubmit:this.handleSubmitJwtAuth},r.a.createElement("div",{role:"alert"},e&&r.a.createElement("p",{className:"red"},e)),r.a.createElement("div",{className:"user_name"},r.a.createElement("label",{htmlFor:"LoginForm__user_name"},"User name"),r.a.createElement(j,{name:"user_name",id:"LoginForm__user_name"})),r.a.createElement("div",{className:"password"},r.a.createElement("label",{htmlFor:"LoginForm__password"},"Password"),r.a.createElement(j,{name:"password",type:"password",id:"LoginForm__password"})),r.a.createElement(T,{type:"submit"},"Login")),r.a.createElement(w,null))}}]),a}(n.Component));ie.contextType=N;var oe=a(5);function ce(e){var t=e.component,a=Object(E.a)(e,["component"]),n=t;return r.a.createElement(oe.b,Object.assign({},a,{render:function(e){return g.hasAuthToken()?r.a.createElement(oe.a,{to:"/home"}):r.a.createElement(n,e)}}))}function se(e){var t=e.component,a=Object(E.a)(e,["component"]),n=t;return r.a.createElement(oe.b,Object.assign({},a,{render:function(e){return g.hasAuthToken()?r.a.createElement(n,e):r.a.createElement(oe.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}var ue=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.data,t=this.props.info,a=300/(t.x.value>t.y.value?t.x.value:t.y.value),n=t.x.value*a,r=t.y.value*a,l=J.a("svg").attr("height",r).attr("width",n).style("fill","red");l.selectAll("svg").data(e.y).enter().append("rect").attr("width",n).attr("height",4).attr("y",(function(e,t){return e})).attr("fill","rgb(1,82,112)"),l.selectAll("svg").data(e.x).enter().append("rect").attr("height",r).attr("width",4).attr("x",(function(e,t){return e})).attr("fill","rgb(197,84,40)"),l.selectAll("svg").data(e.x_partial).enter().append("rect").attr("height",(function(t,a){return e.direction[a]<=1?(0===e.direction[a]||(e.y_partial[a]=e.y_partial[a]-e.partial_transect_length),e.partial_transect_length):4})).attr("width",(function(t,a){return e.direction[a]>1?(2===e.direction[a]||(e.x_partial[a]=e.x_partial[a]-e.partial_transect_length),e.partial_transect_length):4})).attr("x",(function(t,a){return e.x_partial[a]})).attr("y",(function(t,a){return e.y_partial[a]})).attr("fill","rgb(109,88,59)"),l.selectAll("svg").data(e.y).enter().append("text").attr("y",(function(e,t){return e-4})).text((function(e){return Math.round(e)})),l.selectAll("svg").data(e.x).enter().append("text").attr("x",(function(e){return e+4})).attr("y",r-10).text((function(e){return Math.round(e)})),l.selectAll("svg").data(e.x_partial).enter().append("text").attr("x",(function(e){return e+4})).attr("y",(function(t,a){return e.y_partial[a]-4})).text((function(t,a){return Math.round(t)+", "+Math.round(e.y_partial[a])}))}},{key:"render",value:function(){return r.a.createElement("div",{id:"svgAppender"},r.a.createElement("svg",null))}}]),a}(n.Component),me=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={gridInformation:{},data:{}},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement("main",{role:"main"},r.a.createElement("header",{role:"banner"},r.a.createElement("h1",null,"Geb"),r.a.createElement("h2",null,this.props.location.state.template.name.value))),r.a.createElement(ue,{data:this.props.location.state.data,info:this.props.location.state.template}))}}]),a}(n.Component),he=r.a.createContext({templateList:[],error:null,setError:function(){},clearError:function(){},setTemplateList:function(){}}),de=he,pe=(n.Component,function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={templates:[],data:[],userId:0},e.updateUserId=function(t){e.setState({userId:t})},e.handleAddTemplate=function(t){e.state.templates.unshift(t),e.setState({templates:e.state.templates})},e.handleUpdateTemplates=function(){G.getAllTemplates(e.state.userId).then((function(t){e.setState({templates:t})}))},e.handleUpdateGrids=function(){$.getAllGrids(e.state.userId).then((function(t){t.map((function(e){return e.x=e.x.split(",").map(Number),e.y=e.y.split(",").map(Number),e.x_partial=e.x_partial.split(",").map(Number),e.y_partial=e.y_partial.split(",").map(Number),e.direction=e.direction.split(",").map(Number),e})),e.setState({data:t})}))},e.handleDeleteTemplate=function(t){var a=e.state.templates;a.splice(t,1),e.setState({templates:a})},e.handleAddData=function(t){e.state.data.unshift(t),e.setState({data:e.state.data})},e.handleDeleteData=function(t){var a=e.state.data;a.splice(t,1),e.setState({data:a})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;G.getAllTemplates(this.state.userId).then((function(t){e.setState({templates:t})})),$.getAllGrids(this.state.userId).then((function(t){t.map((function(e){return e.x=e.x.split(",").map(Number),e.y=e.y.split(",").map(Number),e.x_partial=e.x_partial.split(",").map(Number),e.y_partial=e.y_partial.split(",").map(Number),e.direction=e.direction.split(",").map(Number),e})),e.setState({data:t})})),this.setState({templates:this.state.templates,data:this.state.data})}},{key:"render",value:function(){var e={templates:this.state.templates,data:this.state.data,id:this.state.userId,handleAddData:this.handleAddData,handleAddTemplate:this.handleAddTemplate,handleDeleteData:this.handleDeleteData,handleDeleteTemplate:this.handleDeleteTemplate,handleUpdateTemplates:this.handleUpdateTemplates,handleUpdateGrids:this.handleUpdateGrids,updateUserId:this.updateUserId};return r.a.createElement(N.Provider,{value:e},r.a.createElement("div",{className:"App"},r.a.createElement(oe.b,{path:"/",component:y}),r.a.createElement(ce,{exact:!0,path:"/",component:C}),r.a.createElement(ce,{path:"/login",component:ie}),r.a.createElement(se,{path:"/newGrid",component:Q}),r.a.createElement(se,{path:"/home",component:A}),r.a.createElement(se,{path:"/myTemplates",component:U}),r.a.createElement(se,{path:"/transectPage",component:F}),r.a.createElement(se,{exact:!0,path:"/template/:templateId",component:ne}),r.a.createElement(se,{exact:!0,path:"/template/:templateId/grids",component:le}),r.a.createElement(se,{exact:!0,path:"/template/:templateId/grids/:gridId",component:me})))}}]),a}(n.Component));pe.contextType=de;var fe=pe;i.a.render(r.a.createElement(m.a,null,r.a.createElement(fe,null)),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.25aeb190.chunk.js.map