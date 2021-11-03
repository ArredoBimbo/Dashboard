(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[19],{602:function(e,t,s){"use strict";var n=s(2),a=s(0),c=s(41),i=s(698),r=s(901),l=s(515),o=s(121),m=s(886),d=s(906),j=s(3),h=s(18),u=s(5),g=s.n(u),b=s(77),x=a.forwardRef((function(e,t){var s=e.className,n=e.component,c=e.viewBox,i=e.spin,r=e.rotate,l=e.tabIndex,o=e.onClick,m=e.children,d=Object(h.a)(e,["className","component","viewBox","spin","rotate","tabIndex","onClick","children"]);Object(b.g)(Boolean(n||m),"Should have `component` prop or `children`."),Object(b.f)();var u=g()("anticon",s),x=g()({"anticon-spin":!!i}),p=r?{msTransform:"rotate(".concat(r,"deg)"),transform:"rotate(".concat(r,"deg)")}:void 0,O=Object(j.a)(Object(j.a)({},b.e),{},{className:x,style:p,viewBox:c});c||delete O.viewBox;var f=l;return void 0===f&&o&&(f=-1),a.createElement("span",Object.assign({role:"img"},d,{ref:t,tabIndex:f,onClick:o,className:u}),n?a.createElement(n,Object.assign({},O),m):m?(Object(b.g)(Boolean(c)||1===a.Children.count(m)&&a.isValidElement(m)&&"use"===a.Children.only(m).type,"Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."),a.createElement("svg",Object.assign({},O,{viewBox:c}),m)):null)}));x.displayName="AntdIcon";var p=s(65),O=s(51),f=s(601),v=function(e){var t=Object(O.g)(),s=e.showForgetPassword,c=e.hideAuthMessage,j=e.onForgetPasswordClick,h=e.showLoading,u=e.extra,g=e.signIn,b=e.token,x=e.loading,p=e.redirect,v=e.showMessage,w=e.message,y=e.allowRedirect;return Object(a.useEffect)((function(){null!==b&&y&&t.push(p),v&&setTimeout((function(){c()}),3e3)})),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(f.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:v?1:0,marginBottom:v?20:0},children:Object(n.jsx)(i.a,{type:"error",showIcon:!0,message:w})}),Object(n.jsxs)(r.a,{id:"email_form_login",layout:"vertical",name:"login-form",initialValues:{email:"",password:""},onFinish:function(e){h(),g(e)},children:[Object(n.jsx)(r.a.Item,{name:"email",label:"Email",rules:[{required:!0,message:"Inserire la mail"},{type:"email",message:"Inserire una mail valida!"}],children:Object(n.jsx)(l.a,{prefix:Object(n.jsx)(m.a,{className:"text-primary"})})}),Object(n.jsx)(r.a.Item,{name:"password",label:Object(n.jsxs)("div",{className:"".concat(s?"d-flex justify-content-between w-100 align-items-center":""),children:[Object(n.jsx)("span",{children:"Password"}),s&&Object(n.jsx)("span",{onClick:function(){return j},className:"cursor-pointer font-size-sm font-weight-normal text-muted",children:"Forget Password?"})]}),rules:[{required:!0,message:"Inserire una password"}],children:Object(n.jsx)(l.a.Password,{prefix:Object(n.jsx)(d.a,{className:"text-primary"})})}),Object(n.jsx)(r.a.Item,{children:Object(n.jsx)(o.a,{type:"primary",htmlType:"submit",block:!0,loading:x,children:"Accedi"})}),u]})]})};v.defaultProps={otherSignIn:!0,showForgetPassword:!1};var w={signIn:p.e,showAuthMessage:p.c,showLoading:p.d,hideAuthMessage:p.b,signInWithGoogle:p.h,signInWithFacebook:p.f};t.a=Object(c.b)((function(e){var t=e.auth;return{loading:t.loading,message:t.message,showMessage:t.showMessage,token:t.token,redirect:t.redirect}}),w)(v)},894:function(e,t,s){"use strict";s.r(t);var n=s(14),a=s(2),c=(s(0),s(602)),i=s(569),r=s(570),l=s(41),o={backgroundImage:"url(".concat("/img/others/img-17.jpg",")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"};t.default=function(e){var t=Object(l.c)((function(e){return e.theme.currentTheme}));return Object(a.jsx)("div",{className:"h-100 ".concat("light"===t?"bg-white":""),children:Object(a.jsxs)(i.a,{justify:"center",className:"align-items-stretch h-100",children:[Object(a.jsx)(r.a,{xs:20,sm:20,md:24,lg:16,children:Object(a.jsx)("div",{className:"container d-flex flex-column justify-content-center h-100",children:Object(a.jsx)(i.a,{justify:"center",children:Object(a.jsxs)(r.a,{xs:24,sm:24,md:20,lg:12,xl:8,children:[Object(a.jsx)("h1",{children:"Sign In"}),Object(a.jsxs)("p",{children:["Don't have an account yet? ",Object(a.jsx)("a",{href:"/auth/register-2",children:"Sign Up"})]}),Object(a.jsx)("div",{className:"mt-4",children:Object(a.jsx)(c.a,Object(n.a)({},e))})]})})})}),Object(a.jsx)(r.a,{xs:0,sm:0,md:0,lg:8,children:Object(a.jsxs)("div",{className:"d-flex flex-column justify-content-between h-100 px-4",style:o,children:[Object(a.jsx)("div",{className:"text-right",children:Object(a.jsx)("img",{src:"/img/logo-white.png",alt:"logo"})}),Object(a.jsx)(i.a,{justify:"center",children:Object(a.jsxs)(r.a,{xs:0,sm:0,md:0,lg:20,children:[Object(a.jsx)("img",{className:"img-fluid mb-5",src:"/img/others/img-18.png",alt:""}),Object(a.jsx)("h1",{className:"text-white",children:"Welcome to emilus"}),Object(a.jsx)("p",{className:"text-white",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat, vel convallis elit fermentum pellentesque."})]})}),Object(a.jsx)("div",{className:"d-flex justify-content-end pb-4",children:Object(a.jsxs)("div",{children:[Object(a.jsx)("a",{className:"text-white",href:"/#",onClick:function(e){return e.preventDefault()},children:"Term & Conditions"}),Object(a.jsx)("span",{className:"mx-2 text-white",children:" | "}),Object(a.jsx)("a",{className:"text-white",href:"/#",onClick:function(e){return e.preventDefault()},children:"Privacy & Policy"})]})})]})})]})})}}}]);
//# sourceMappingURL=19.eafbef16.chunk.js.map