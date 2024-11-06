var e=Object.defineProperty,a=Object.defineProperties,r=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,t=(a,r,l)=>r in a?e(a,r,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[r]=l,n=(e,a)=>{for(var r in a||(a={}))o.call(a,r)&&t(e,r,a[r]);if(l)for(var r of l(a))s.call(a,r)&&t(e,r,a[r]);return e},i=(e,l)=>a(e,r(l)),d=(e,a,r)=>new Promise(((l,o)=>{var s=e=>{try{n(r.next(e))}catch(a){o(a)}},t=e=>{try{n(r.throw(e))}catch(a){o(a)}},n=e=>e.done?l(e.value):Promise.resolve(e.value).then(s,t);n((r=r.apply(e,a)).next())}));import{a1 as g,a2 as p,a3 as u,a4 as c,a5 as m,a6 as f,a7 as v,e as h,a8 as w,a9 as b,aa as k}from"./celerisComponents-wzvf23oQ.js";import{_ as y}from"./AppLogo.vuevuetypescriptsetuptruelang-B8yVeQSt.js";import{d as x,m as _,r as L,R as M,N as C,a2 as P,Q as U,u as I,a5 as j,U as z,f as B,a6 as O,c as S,l as q,S as N,a7 as D,D as T,a8 as K}from"./vue-DfkJQHDQ.js";import{u as R,a as E}from"./index-DJhmYswW.js";import{u as F}from"./useLoading-BmJfxWyG.js";import{_ as $}from"./plugin-vueexport-helper-BCo6x5W8.js";const A=""+new URL("../svg/total-income-indicator-B0DjNU3h.svg",import.meta.url).href,Q=""+new URL("../svg/earnings-indicator-npUcTKLg.svg",import.meta.url).href,W={class:"flex flex-col items-end gap-6"},H={class:"flex justify-between w-full"},V={class:"w-full"},Z=x({__name:"SignIn",emits:["forgot-password"],setup(e,{emit:a}){const r=a,{t:l}=R(),o=g(),s=p(),t=_({username:"admin",password:"123456"}),h=_({username:[{required:!0,message:l("page.login.form.username.error"),trigger:"blur"}],password:[{required:!0,message:l("page.login.form.password.error"),trigger:"blur"}]}),w=L(!1),b=L();function k(e){return d(this,null,(function*(){var a;e.preventDefault();try{yield null==(a=b.value)?void 0:a.validate(),w.value=!0;try{const e=yield E().login(i(n({},I(t)),{remember:!0,errorMessageMode:"none"}));e&&s.success({duration:3e3,title:l("page.login.notification.loginSuccessMessage"),content:l("page.login.notification.welcomeBackMessage",{username:e.fullName})})}catch(r){o.error(String(r))}}finally{w.value=!1}}))}return(e,a)=>{const o=u,s=c,n=m,i=f,d=v;return M(),C(d,{ref_key:"loginFormRef",ref:b,model:I(t),rules:I(h)},{default:P((()=>[U(s,{path:"username",label:I(l)("page.login.form.username.label")},{default:P((()=>[U(o,{value:I(t).username,"onUpdate:value":a[0]||(a[0]=e=>I(t).username=e),placeholder:I(l)("page.login.form.username.placeholder"),size:"large",autocomplete:"on",onKeydown:j(k,["enter"])},null,8,["value","placeholder"])])),_:1},8,["label"]),U(s,{path:"password",label:I(l)("page.login.form.password.label")},{default:P((()=>[U(o,{value:I(t).password,"onUpdate:value":a[1]||(a[1]=e=>I(t).password=e),type:"password",placeholder:I(l)("page.login.form.password.placeholder"),"show-password-on":"click",autocomplete:"on",size:"large",onKeydown:j(k,["enter"])},null,8,["value","placeholder"])])),_:1},8,["label"]),z("div",W,[z("div",H,[U(n,{size:"large"},{default:P((()=>[B(O(I(l)("page.login.form.remember")),1)])),_:1}),U(i,{text:"",type:"primary",onClick:a[2]||(a[2]=e=>r("forgot-password"))},{default:P((()=>[B(O(I(l)("page.login.form.forgetPassword")),1)])),_:1})]),z("div",V,[U(i,{type:"primary",loading:I(w),class:"w-full!",size:"large",onClick:k},{default:P((()=>[B(O(I(l)("page.login.form.loginButton")),1)])),_:1},8,["loading"])])])])),_:1},8,["model","rules"])}}}),G={class:"flex flex-col items-end"},J={class:"w-full"},X=x({__name:"SignUp",setup(e){const{t:a}=R(),r=L(null),l=L({username:"kirklin",password:"123456",confirmPassword:"123456"}),o=g(),s=L(!1),t=p(),m={username:[{required:!0,trigger:["blur"],message:a("page.login.form.username.error")}],password:[{required:!0,trigger:["blur"],message:a("page.login.form.password.error")}],confirmPassword:[{required:!0,trigger:["blur"],message:a("page.login.form.confirmPassword.error")},{validator:(e,a)=>a===l.value.password,message:a("page.login.form.confirmPassword.validator"),trigger:["blur","password-input"]}]};function h(e){var l;e.preventDefault(),s.value=!0,null==(l=r.value)||l.validate((e=>d(this,null,(function*(){if(e)s.value=!1,o.error("Invalid credentials");else{const e=yield E().login(i(n({},{username:"kirklin",password:"123456"}),{remember:!0,errorMessageMode:"none"}));e&&(s.value=!1,t.success({title:a("page.login.notification.loginSuccessMessage"),content:a("page.login.notification.welcomeBackMessage",{username:e.fullName})}))}}))))}return(e,o)=>(M(),C(I(v),{ref_key:"formRef",ref:r,model:l.value,rules:m},{default:P((()=>[U(I(c),{path:"username",label:I(a)("page.login.form.username.label")},{default:P((()=>[U(I(u),{value:l.value.username,"onUpdate:value":o[0]||(o[0]=e=>l.value.username=e),size:"large",placeholder:I(a)("page.login.form.username.placeholder"),onKeydown:j(h,["enter"])},null,8,["value","placeholder"])])),_:1},8,["label"]),U(I(c),{path:"password",label:I(a)("page.login.form.password.label")},{default:P((()=>[U(I(u),{value:l.value.password,"onUpdate:value":o[1]||(o[1]=e=>l.value.password=e),type:"password",size:"large","show-password-on":"click",placeholder:I(a)("page.login.form.password.placeholder"),onKeydown:j(h,["enter"])},null,8,["value","placeholder"])])),_:1},8,["label"]),U(I(c),{path:"confirmPassword",label:I(a)("page.login.form.confirmPassword.label"),first:""},{default:P((()=>[U(I(u),{value:l.value.confirmPassword,"onUpdate:value":o[2]||(o[2]=e=>l.value.confirmPassword=e),type:"password",disabled:!l.value.password,size:"large","show-password-on":"click",placeholder:I(a)("page.login.form.confirmPassword.placeholder"),onKeydown:j(h,["enter"])},null,8,["value","disabled","placeholder"])])),_:1},8,["label"]),z("div",G,[z("div",J,[U(I(f),{type:"primary",loading:s.value,class:"!w-full",size:"large",onClick:h},{default:P((()=>[B(O(I(a)("page.login.form.registerButton")),1)])),_:1},8,["loading"])])])])),_:1},8,["model"]))}}),Y={class:"flex flex-col items-end gap-6"},ee={class:"w-full"},ae=x({__name:"ForgotPassword",setup(e){const{t:a}=R(),r=L(null),l=g(),{loading:o,setLoading:s}=F(!1),t=L({phoneNumber:""}),n={phoneNumber:[{required:!0,trigger:["blur"],message:a("page.login.form.forgotPassword.requiredError")},{pattern:/^1[3456789]\d{9}$/,message:a("page.login.form.forgotPassword.invalidFormatError")}]};function i(e){var o;e.preventDefault(),s(!0),null==(o=r.value)||o.validate((e=>{s(!1),e||l.success(a("page.login.form.resetLinkSentMessage"))}))}return(e,l)=>(M(),C(I(v),{ref_key:"formRef",ref:r,model:t.value,rules:n},{default:P((()=>[U(I(c),{path:"phoneNumber",label:I(a)("page.login.form.forgotPassword.label")},{default:P((()=>[U(I(u),{value:t.value.phoneNumber,"onUpdate:value":l[0]||(l[0]=e=>t.value.phoneNumber=e),placeholder:I(a)("page.login.form.forgotPassword.placeholder"),size:"large",onKeydown:j(i,["enter"])},null,8,["value","placeholder"])])),_:1},8,["label"]),z("div",Y,[z("div",ee,[U(I(f),{type:"primary",loading:I(o),class:"!w-full",size:"large",onClick:i},{default:P((()=>[B(O(I(a)("page.login.form.sendResetLinkButton")),1)])),_:1},8,["loading"])])])])),_:1},8,["model"]))}}),re={class:"auth-form-wrap w-full"},le={class:"title mb-4 text-3xl font-bold"},oe={class:"text mb-12 text-xl"},se={class:"form"},te={class:"social-button-group flex flex-col gap-4 mb-12"},ne={class:"sign-text text-center"},ie={key:0,class:"sign-text"},de={key:1,class:"sign-text"},ge={key:2,class:"sign-text"},pe=$(x({__name:"index",props:{type:{}},setup(e){const a=e,{t:r}=R(),l=L("signIn"),o=S((()=>"signIn"===l.value?r("page.login.form.welcomeBackTitle"):"signUp"===l.value?r("page.login.form.helloTitle"):r("page.login.form.forgotPasswordTitle")));function s(){l.value="signIn"}return q((()=>{a.type&&(l.value=a.type)})),(e,a)=>{const t=y,n=b;return M(),N("div",re,[U(t,{class:"mb-4","display-title":""}),z("div",le,O(o.value),1),z("div",oe,O(I(r)("page.login.form.greetingText")),1),z("div",se,[U(T,{appear:"",name:I(h).FADE_SLIDE,mode:"out-in"},{default:P((()=>["signIn"===l.value?(M(),C(Z,{key:"signin",onForgotPassword:a[0]||(a[0]=e=>{l.value="forgotPassword"})})):"forgotPassword"===l.value?(M(),C(ae,{key:"forgotpassword"})):"signUp"===l.value?(M(),C(X,{key:"signup"})):D("",!0)])),_:1},8,["name"])]),U(I(w),{"title-placement":"center"},{default:P((()=>a[4]||(a[4]=[B(" Or ")]))),_:1}),z("div",te,[U(I(f),{strong:"",secondary:"",size:"large"},{default:P((()=>[U(n,{icon:"tabler:brand-qq",class:"mr-4"}),B(" "+O(I(r)("page.login.form.socialButtons.signInWithQQ")),1)])),_:1}),U(I(f),{strong:"",secondary:""},{default:P((()=>[U(n,{icon:"tabler:brand-wechat",class:"mr-4"}),B(" "+O(I(r)("page.login.form.socialButtons.signInWithWeChat")),1)])),_:1})]),z("div",ne,["signIn"===l.value?(M(),N("div",ie,[B(O(I(r)("page.login.form.signText.signIn"))+" ",1),U(I(f),{text:"",type:"primary",size:"large",onClick:a[1]||(a[1]=e=>{l.value="signUp"})},{default:P((()=>[B(O(I(r)("page.login.form.signUp")),1)])),_:1})])):D("",!0),"forgotPassword"===l.value?(M(),N("div",de,[U(I(f),{text:"",type:"primary",size:"large",onClick:a[2]||(a[2]=e=>s())},{default:P((()=>[B(O(I(r)("page.login.form.signText.forgotPassword")),1)])),_:1})])):D("",!0),"signUp"===l.value?(M(),N("div",ge,[B(O(I(r)("page.login.form.signText.signUp"))+" ",1),U(I(f),{text:"",type:"primary",size:"large",onClick:a[3]||(a[3]=e=>s())},{default:P((()=>[B(O(I(r)("page.login.form.signIn")),1)])),_:1})])):D("",!0)])])}}}),[["__scopeId","data-v-112388bf"]]),ue={class:"flex-[2.5] flex justify-center"},ce={class:"w-[600px] px-[32px] py-[30px] mt-[-5%] rounded-2xl <lg:w-[94%] <lg:mx-auto"},me=$(x(i(n({},{name:"Login"}),{__name:"index",setup:e=>(e,a)=>{const r=k;return M(),C(r,{tag:"main",class:"bg-gray-100 dark:bg-[--base-color] flex justify-center items-center overflow-x-hidden"},{default:P((()=>[U(r,{class:"flex-[2.5] bg-[--body-color] h-[100vh] rounded-l rounded-[3rem] relative <lg:hidden",style:K({backgroundImage:`url(${I("data:image/svg+xml,%3csvg%20width='670'%20height='903'%20viewBox='0%200%20670%20903'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='670'%20height='903'%3e%3cg%20opacity='0.2'%3e%3cpath%20d='M0%200H670V903H0V0Z'%20fill='white'/%3e%3c/g%3e%3c/mask%3e%3cg%20mask='url(%23mask0)'%3e%3cpath%20d='M2030.91%20374.849L426.331%201300.78'%20stroke='%238492C4'/%3e%3cpath%20d='M426.409%20-527.071L2030.72%20399.311'%20stroke='%238492C4'/%3e%3cpath%20d='M1919.22%20310.39L314.731%201236.47'%20stroke='%238492C4'/%3e%3cpath%20d='M314.731%20-462.612L1919.22%20463.467'%20stroke='%238492C4'/%3e%3cpath%20d='M1807.54%20245.932L203.055%201172.01'%20stroke='%238492C4'/%3e%3cpath%20d='M203.052%20-398.154L1807.54%20527.925'%20stroke='%238492C4'/%3e%3cpath%20d='M1695.87%20181.473L91.3788%201107.55'%20stroke='%238492C4'/%3e%3cpath%20d='M91.3744%20-333.695L1695.86%20592.384'%20stroke='%238492C4'/%3e%3cpath%20d='M1584.19%20117.014L-20.3012%201043.09'%20stroke='%238492C4'/%3e%3cpath%20d='M-20.3044%20-269.237L1584.19%20656.843'%20stroke='%238492C4'/%3e%3cpath%20d='M1472.51%2052.5562L-131.98%20978.636'%20stroke='%238492C4'/%3e%3cpath%20d='M-131.983%20-204.778L1472.51%20721.301'%20stroke='%238492C4'/%3e%3cpath%20d='M1360.83%20-11.9023L-243.658%20914.177'%20stroke='%238492C4'/%3e%3cpath%20d='M-243.662%20-140.319L1360.83%20785.76'%20stroke='%238492C4'/%3e%3cpath%20d='M1249.15%20-76.3613L-355.336%20849.718'%20stroke='%238492C4'/%3e%3cpath%20d='M-355.341%20-75.8608L1249.15%20850.219'%20stroke='%238492C4'/%3e%3cpath%20d='M1137.48%20-140.819L-467.014%20785.26'%20stroke='%238492C4'/%3e%3cpath%20d='M-467.017%20-11.4023L1137.47%20914.677'%20stroke='%238492C4'/%3e%3cpath%20d='M1025.8%20-205.278L-578.692%20720.801'%20stroke='%238492C4'/%3e%3cpath%20d='M-578.693%2053.0562L1025.8%20979.136'%20stroke='%238492C4'/%3e%3cpath%20d='M914.119%20-269.736L-690.371%20656.343'%20stroke='%238492C4'/%3e%3cpath%20d='M-690.379%20117.515L914.111%201043.59'%20stroke='%238492C4'/%3e%3cpath%20d='M802.441%20-334.195L-802.052%20591.887'%20stroke='%238492C4'/%3e%3cpath%20d='M-802.055%20181.974L802.435%201108.05'%20stroke='%238492C4'/%3e%3cpath%20d='M690.762%20-398.654L-913.728%20527.426'%20stroke='%238492C4'/%3e%3cpath%20d='M-913.731%20246.432L690.759%201172.51'%20stroke='%238492C4'/%3e%3cpath%20d='M579.084%20-463.112L-1025.41%20462.967'%20stroke='%238492C4'/%3e%3cpath%20d='M-1025.41%20310.891L579.083%201236.97'%20stroke='%238492C4'/%3e%3cpath%20d='M467.406%20-527.571L-1136.91%20398.811'%20stroke='%238492C4'/%3e%3cpath%20d='M-1137.09%20375.35L467.397%201301.43'%20stroke='%238492C4'/%3e%3c/g%3e%3c/svg%3e")})`})},{default:P((()=>[z("div",{class:"total-income-indicator-img w-[243px] h-[210px] bg-center absolute top-[23%] left-[37%] bg-[length:380]",style:K({backgroundImage:`url(${I(A)})`})},null,4),z("div",{class:"earnings-indicator-img w-[313px] h-[280px] bg-center absolute top-[32%] left-[40%] bg-[length:380]",style:K({backgroundImage:`url(${I(Q)})`})},null,4)])),_:1},8,["style"]),z("div",ue,[z("div",ce,[U(pe)])])])),_:1})}})),[["__scopeId","data-v-9751c517"]]);export{me as default};