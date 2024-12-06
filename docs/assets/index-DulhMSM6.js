var e=Object.defineProperty,a=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,t=(a,r,o)=>r in a?e(a,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[r]=o,n=(e,a)=>{for(var r in a||(a={}))l.call(a,r)&&t(e,r,a[r]);if(o)for(var r of o(a))s.call(a,r)&&t(e,r,a[r]);return e},i=(e,o)=>a(e,r(o)),d=(e,a,r)=>new Promise(((o,l)=>{var s=e=>{try{n(r.next(e))}catch(a){l(a)}},t=e=>{try{n(r.throw(e))}catch(a){l(a)}},n=e=>e.done?o(e.value):Promise.resolve(e.value).then(s,t);n((r=r.apply(e,a)).next())}));import{i as p,n as g,t as u,d as c,u as m,r as f,a as v,o as h,c as w,w as b,b as k,e as y,f as x,g as _,h as C,j as L,k as M,B as P,l as j,m as I,p as U,q as z,R as B,T as N,_ as O,s as q}from"./index-BvLEaQlu.js";import{_ as S,a as D}from"./AppLogo.vuevuetypescriptsetuptruelang-C7UDwak9.js";import{u as T}from"./use-message-BD8I9g22.js";import{N as F}from"./Input-TRwP2vdU.js";import{N as K,a as R}from"./FormItem-BRCMyjoV.js";import{_ as E}from"./Checkbox-CqxbiB_D.js";import{u as $}from"./useLoading-BwuzA_H2.js";import"./useScreen-0SdjO3aM.js";import{N as A}from"./Divider-Cdx_KeCG.js";import{_ as H}from"./plugin-vueexport-helper-BCo6x5W8.js";import"./use-locale-DzDiokaM.js";import"./use-merged-state-DP1rnzCz.js";function W(){const e=p(g,null);return null===e&&u("use-notification","No outer `n-notification-provider` found."),e}const Q=""+new URL("total-income-indicator-B0DjNU3h.svg",import.meta.url).href,V=""+new URL("earnings-indicator-npUcTKLg.svg",import.meta.url).href,G={class:"flex flex-col items-end gap-6"},Z={class:"flex justify-between w-full"},J={class:"w-full"},X=c({__name:"SignIn",emits:["forgot-password"],setup(e,{emit:a}){const r=a,{t:o}=m(),l=T(),s=W(),t=f({username:"admin",password:"123456"}),p=f({username:[{required:!0,message:o("page.login.form.username.error"),trigger:"blur"}],password:[{required:!0,message:o("page.login.form.password.error"),trigger:"blur"}]}),g=v(!1),u=v();function c(e){return d(this,null,(function*(){var a;e.preventDefault();try{yield null==(a=u.value)?void 0:a.validate(),g.value=!0;try{const e=yield M().login(i(n({},y(t)),{remember:!0,errorMessageMode:"none"}));e&&s.success({duration:3e3,title:o("page.login.notification.loginSuccessMessage"),content:o("page.login.notification.welcomeBackMessage",{username:e.fullName})})}catch(r){l.error(String(r))}}finally{g.value=!1}}))}return(e,a)=>{const l=F,s=K,n=E,i=P,d=R;return h(),w(d,{ref_key:"loginFormRef",ref:u,model:y(t),rules:y(p)},{default:b((()=>[k(s,{path:"username",label:y(o)("page.login.form.username.label")},{default:b((()=>[k(l,{value:y(t).username,"onUpdate:value":a[0]||(a[0]=e=>y(t).username=e),placeholder:y(o)("page.login.form.username.placeholder"),size:"large",autocomplete:"on",onKeydown:x(c,["enter"])},null,8,["value","placeholder"])])),_:1},8,["label"]),k(s,{path:"password",label:y(o)("page.login.form.password.label")},{default:b((()=>[k(l,{value:y(t).password,"onUpdate:value":a[1]||(a[1]=e=>y(t).password=e),type:"password",placeholder:y(o)("page.login.form.password.placeholder"),"show-password-on":"click",autocomplete:"on",size:"large",onKeydown:x(c,["enter"])},null,8,["value","placeholder"])])),_:1},8,["label"]),_("div",G,[_("div",Z,[k(n,{size:"large"},{default:b((()=>[C(L(y(o)("page.login.form.remember")),1)])),_:1}),k(i,{text:"",type:"primary",onClick:a[2]||(a[2]=e=>r("forgot-password"))},{default:b((()=>[C(L(y(o)("page.login.form.forgetPassword")),1)])),_:1})]),_("div",J,[k(i,{type:"primary",loading:y(g),class:"w-full!",size:"large",onClick:c},{default:b((()=>[C(L(y(o)("page.login.form.loginButton")),1)])),_:1},8,["loading"])])])])),_:1},8,["model","rules"])}}}),Y={class:"flex flex-col items-end"},ee={class:"w-full"},ae=c({__name:"SignUp",setup(e){const{t:a}=m(),r=v(null),o=v({username:"kirklin",password:"123456",confirmPassword:"123456"}),l=T(),s=v(!1),t=W(),p={username:[{required:!0,trigger:["blur"],message:a("page.login.form.username.error")}],password:[{required:!0,trigger:["blur"],message:a("page.login.form.password.error")}],confirmPassword:[{required:!0,trigger:["blur"],message:a("page.login.form.confirmPassword.error")},{validator:(e,a)=>a===o.value.password,message:a("page.login.form.confirmPassword.validator"),trigger:["blur","password-input"]}]};function g(e){var o;e.preventDefault(),s.value=!0,null==(o=r.value)||o.validate((e=>d(this,null,(function*(){if(e)s.value=!1,l.error("Invalid credentials");else{const e=yield M().login(i(n({},{username:"kirklin",password:"123456"}),{remember:!0,errorMessageMode:"none"}));e&&(s.value=!1,t.success({title:a("page.login.notification.loginSuccessMessage"),content:a("page.login.notification.welcomeBackMessage",{username:e.fullName})}))}}))))}return(e,l)=>(h(),w(y(R),{ref_key:"formRef",ref:r,model:o.value,rules:p},{default:b((()=>[k(y(K),{path:"username",label:y(a)("page.login.form.username.label")},{default:b((()=>[k(y(F),{value:o.value.username,"onUpdate:value":l[0]||(l[0]=e=>o.value.username=e),size:"large",placeholder:y(a)("page.login.form.username.placeholder"),onKeydown:x(g,["enter"])},null,8,["value","placeholder"])])),_:1},8,["label"]),k(y(K),{path:"password",label:y(a)("page.login.form.password.label")},{default:b((()=>[k(y(F),{value:o.value.password,"onUpdate:value":l[1]||(l[1]=e=>o.value.password=e),type:"password",size:"large","show-password-on":"click",placeholder:y(a)("page.login.form.password.placeholder"),onKeydown:x(g,["enter"])},null,8,["value","placeholder"])])),_:1},8,["label"]),k(y(K),{path:"confirmPassword",label:y(a)("page.login.form.confirmPassword.label"),first:""},{default:b((()=>[k(y(F),{value:o.value.confirmPassword,"onUpdate:value":l[2]||(l[2]=e=>o.value.confirmPassword=e),type:"password",disabled:!o.value.password,size:"large","show-password-on":"click",placeholder:y(a)("page.login.form.confirmPassword.placeholder"),onKeydown:x(g,["enter"])},null,8,["value","disabled","placeholder"])])),_:1},8,["label"]),_("div",Y,[_("div",ee,[k(y(P),{type:"primary",loading:s.value,class:"!w-full",size:"large",onClick:g},{default:b((()=>[C(L(y(a)("page.login.form.registerButton")),1)])),_:1},8,["loading"])])])])),_:1},8,["model"]))}}),re={class:"flex flex-col items-end gap-6"},oe={class:"w-full"},le=c({__name:"ForgotPassword",setup(e){const{t:a}=m(),r=v(null),o=T(),{loading:l,setLoading:s}=$(!1),t=v({phoneNumber:""}),n={phoneNumber:[{required:!0,trigger:["blur"],message:a("page.login.form.forgotPassword.requiredError")},{pattern:/^1[3456789]\d{9}$/,message:a("page.login.form.forgotPassword.invalidFormatError")}]};function i(e){var l;e.preventDefault(),s(!0),null==(l=r.value)||l.validate((e=>{s(!1),e||o.success(a("page.login.form.resetLinkSentMessage"))}))}return(e,o)=>(h(),w(y(R),{ref_key:"formRef",ref:r,model:t.value,rules:n},{default:b((()=>[k(y(K),{path:"phoneNumber",label:y(a)("page.login.form.forgotPassword.label")},{default:b((()=>[k(y(F),{value:t.value.phoneNumber,"onUpdate:value":o[0]||(o[0]=e=>t.value.phoneNumber=e),placeholder:y(a)("page.login.form.forgotPassword.placeholder"),size:"large",onKeydown:x(i,["enter"])},null,8,["value","placeholder"])])),_:1},8,["label"]),_("div",re,[_("div",oe,[k(y(P),{type:"primary",loading:y(l),class:"!w-full",size:"large",onClick:i},{default:b((()=>[C(L(y(a)("page.login.form.sendResetLinkButton")),1)])),_:1},8,["loading"])])])])),_:1},8,["model"]))}}),se={class:"auth-form-wrap w-full"},te={class:"title mb-4 text-3xl font-bold"},ne={class:"text mb-12 text-xl"},ie={class:"form"},de={class:"social-button-group flex flex-col gap-4 mb-12"},pe={class:"sign-text text-center"},ge={key:0,class:"sign-text"},ue={key:1,class:"sign-text"},ce={key:2,class:"sign-text"},me=H(c({__name:"index",props:{type:{}},setup(e){const a=e,{t:r}=m(),o=v("signIn"),l=j((()=>"signIn"===o.value?r("page.login.form.welcomeBackTitle"):"signUp"===o.value?r("page.login.form.helloTitle"):r("page.login.form.forgotPasswordTitle")));function s(){o.value="signIn"}return I((()=>{a.type&&(o.value=a.type)})),(e,a)=>{const t=S,n=O;return h(),U("div",se,[k(t,{class:"mb-4","display-title":""}),_("div",te,L(l.value),1),_("div",ne,L(y(r)("page.login.form.greetingText")),1),_("div",ie,[k(N,{appear:"",name:y(B).FADE_SLIDE,mode:"out-in"},{default:b((()=>["signIn"===o.value?(h(),w(X,{key:"signin",onForgotPassword:a[0]||(a[0]=e=>{o.value="forgotPassword"})})):"forgotPassword"===o.value?(h(),w(le,{key:"forgotpassword"})):"signUp"===o.value?(h(),w(ae,{key:"signup"})):z("",!0)])),_:1},8,["name"])]),k(y(A),{"title-placement":"center"},{default:b((()=>a[4]||(a[4]=[C(" Or ")]))),_:1}),_("div",de,[k(y(P),{strong:"",secondary:"",size:"large"},{default:b((()=>[k(n,{icon:"tabler:brand-qq",class:"mr-4"}),C(" "+L(y(r)("page.login.form.socialButtons.signInWithQQ")),1)])),_:1}),k(y(P),{strong:"",secondary:""},{default:b((()=>[k(n,{icon:"tabler:brand-wechat",class:"mr-4"}),C(" "+L(y(r)("page.login.form.socialButtons.signInWithWeChat")),1)])),_:1})]),_("div",pe,["signIn"===o.value?(h(),U("div",ge,[C(L(y(r)("page.login.form.signText.signIn"))+" ",1),k(y(P),{text:"",type:"primary",size:"large",onClick:a[1]||(a[1]=e=>{o.value="signUp"})},{default:b((()=>[C(L(y(r)("page.login.form.signUp")),1)])),_:1})])):z("",!0),"forgotPassword"===o.value?(h(),U("div",ue,[k(y(P),{text:"",type:"primary",size:"large",onClick:a[2]||(a[2]=e=>s())},{default:b((()=>[C(L(y(r)("page.login.form.signText.forgotPassword")),1)])),_:1})])):z("",!0),"signUp"===o.value?(h(),U("div",ce,[C(L(y(r)("page.login.form.signText.signUp"))+" ",1),k(y(P),{text:"",type:"primary",size:"large",onClick:a[3]||(a[3]=e=>s())},{default:b((()=>[C(L(y(r)("page.login.form.signIn")),1)])),_:1})])):z("",!0)])])}}}),[["__scopeId","data-v-b6551151"]]),fe={class:"flex-[2.5] flex justify-center"},ve={class:"w-[600px] px-[32px] py-[30px] mt-[-5%] rounded-2xl <lg:w-[94%] <lg:mx-auto"},he=H(c(i(n({},{name:"Login"}),{__name:"index",setup:e=>(e,a)=>{const r=D;return h(),w(r,{tag:"main",class:"bg-gray-100 dark:bg-[--base-color] flex justify-center items-center overflow-x-hidden"},{default:b((()=>[k(r,{class:"flex-[2.5] bg-[--body-color] h-[100vh] rounded-l rounded-[3rem] relative <lg:hidden",style:q({backgroundImage:`url(${y("data:image/svg+xml,%3csvg%20width='670'%20height='903'%20viewBox='0%200%20670%20903'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='670'%20height='903'%3e%3cg%20opacity='0.2'%3e%3cpath%20d='M0%200H670V903H0V0Z'%20fill='white'/%3e%3c/g%3e%3c/mask%3e%3cg%20mask='url(%23mask0)'%3e%3cpath%20d='M2030.91%20374.849L426.331%201300.78'%20stroke='%238492C4'/%3e%3cpath%20d='M426.409%20-527.071L2030.72%20399.311'%20stroke='%238492C4'/%3e%3cpath%20d='M1919.22%20310.39L314.731%201236.47'%20stroke='%238492C4'/%3e%3cpath%20d='M314.731%20-462.612L1919.22%20463.467'%20stroke='%238492C4'/%3e%3cpath%20d='M1807.54%20245.932L203.055%201172.01'%20stroke='%238492C4'/%3e%3cpath%20d='M203.052%20-398.154L1807.54%20527.925'%20stroke='%238492C4'/%3e%3cpath%20d='M1695.87%20181.473L91.3788%201107.55'%20stroke='%238492C4'/%3e%3cpath%20d='M91.3744%20-333.695L1695.86%20592.384'%20stroke='%238492C4'/%3e%3cpath%20d='M1584.19%20117.014L-20.3012%201043.09'%20stroke='%238492C4'/%3e%3cpath%20d='M-20.3044%20-269.237L1584.19%20656.843'%20stroke='%238492C4'/%3e%3cpath%20d='M1472.51%2052.5562L-131.98%20978.636'%20stroke='%238492C4'/%3e%3cpath%20d='M-131.983%20-204.778L1472.51%20721.301'%20stroke='%238492C4'/%3e%3cpath%20d='M1360.83%20-11.9023L-243.658%20914.177'%20stroke='%238492C4'/%3e%3cpath%20d='M-243.662%20-140.319L1360.83%20785.76'%20stroke='%238492C4'/%3e%3cpath%20d='M1249.15%20-76.3613L-355.336%20849.718'%20stroke='%238492C4'/%3e%3cpath%20d='M-355.341%20-75.8608L1249.15%20850.219'%20stroke='%238492C4'/%3e%3cpath%20d='M1137.48%20-140.819L-467.014%20785.26'%20stroke='%238492C4'/%3e%3cpath%20d='M-467.017%20-11.4023L1137.47%20914.677'%20stroke='%238492C4'/%3e%3cpath%20d='M1025.8%20-205.278L-578.692%20720.801'%20stroke='%238492C4'/%3e%3cpath%20d='M-578.693%2053.0562L1025.8%20979.136'%20stroke='%238492C4'/%3e%3cpath%20d='M914.119%20-269.736L-690.371%20656.343'%20stroke='%238492C4'/%3e%3cpath%20d='M-690.379%20117.515L914.111%201043.59'%20stroke='%238492C4'/%3e%3cpath%20d='M802.441%20-334.195L-802.052%20591.887'%20stroke='%238492C4'/%3e%3cpath%20d='M-802.055%20181.974L802.435%201108.05'%20stroke='%238492C4'/%3e%3cpath%20d='M690.762%20-398.654L-913.728%20527.426'%20stroke='%238492C4'/%3e%3cpath%20d='M-913.731%20246.432L690.759%201172.51'%20stroke='%238492C4'/%3e%3cpath%20d='M579.084%20-463.112L-1025.41%20462.967'%20stroke='%238492C4'/%3e%3cpath%20d='M-1025.41%20310.891L579.083%201236.97'%20stroke='%238492C4'/%3e%3cpath%20d='M467.406%20-527.571L-1136.91%20398.811'%20stroke='%238492C4'/%3e%3cpath%20d='M-1137.09%20375.35L467.397%201301.43'%20stroke='%238492C4'/%3e%3c/g%3e%3c/svg%3e")})`})},{default:b((()=>[_("div",{class:"total-income-indicator-img w-[243px] h-[210px] bg-center absolute top-[23%] left-[37%] bg-[length:380]",style:q({backgroundImage:`url(${y(Q)})`})},null,4),_("div",{class:"earnings-indicator-img w-[313px] h-[280px] bg-center absolute top-[32%] left-[40%] bg-[length:380]",style:q({backgroundImage:`url(${y(V)})`})},null,4)])),_:1},8,["style"]),_("div",fe,[_("div",ve,[k(me)])])])),_:1})}})),[["__scopeId","data-v-dd156109"]]);export{he as default};
