"use strict";(self.webpackChunkeSolve_project=self.webpackChunkeSolve_project||[]).push([[757],{54757:(f,a,r)=>{r.r(a),r.d(a,{AssoSessionExpireDialogModule:()=>b});var m=r(69808),s=r(64035),l=r(68264),p=r(42919),n=r(5e3),g=r(80469);const d=[{path:"",component:(()=>{class t{constructor(e,o,c){this._userRoleService=e,this._authService=o,this._prevURL=c,this.applicationHasLicense=!0,this.licenseOnLogin=!1}ngOnInit(){try{let o=this._userRoleService.getGlobalAccountPermissions();this.applicationHasLicense=o.applicationHasLicense}catch(o){this.applicationHasLicense=!0}!localStorage.getItem("isLoggedIn")&&!this.licenseOnLogin&&this._authService.logout(!0),this.generateMessageForUser(this._prevURL.getPreviousUrl())}generateMessageForUser(e){let o;if((""===e||"/"===e)&&(e=" current page"),e.split("/").length>2){let c=e.split("/");e=c[1]+" "+c[2]}o=e.replace(/-/g," "),o=o.replace(/[/]/g," "),this.message=o}redirectToLoginPage(){this._authService.returnToLoginPage()}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(p.J),n.Y36(l.e),n.Y36(g._))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-asso-session-expire-dialog"]],decls:32,vars:0,consts:[[1,"login"],[1,"login__wrapper"],[1,"login__logo"],["viewBox","0 0 7.8052081 7.8052085","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink"],["id","b","x1","16.238","x2","16.238","y1","6.416","y2","31.996","gradientUnits","userSpaceOnUse"],["stop-color","#FFD600","offset","0"],["stop-color","#E74E0F","offset","1"],["id","c"],["width","100%","height","100%",0,"xlink","href","#a"],["id","d","x1","16.34","x2","16.34","y1","6.362","y2","32.042","gradientUnits","userSpaceOnUse"],["id","a","d","M16.2 20l7 12H31L16.2 6.4 1.5 32h7.8l6.9-12"],["id","e","d","M1.5 6.4h29.8v25.7H1.5z"],["transform","translate(-.397 -1.38) scale(.26458)"],["width","100%","height","100%","fill","url(#b)",0,"xlink","href","#a"],["clip-path","url(#c)",1,"st3"],["width","100%","height","100%","fill","url(#d)",0,"xlink","href","#e"],[1,"h4"],[1,"login__form"],["role","alert",1,"mcc-alert","mcc-alert--danger-solid","mcc-alert--compact"],["role","group","aria-label","Error buttons",1,"[","mcc-button-group","mcc-button-group--block","mcc-button-group--spaced","]","[","mu-mt-06","]"],["type","button",1,"mcc-button","mcc-button--primary",3,"click"],[1,"mcc-button__label"],[1,"login__brand"]],template:function(e,o){1&e&&(n.TgZ(0,"main",0)(1,"section",1)(2,"div",2),n.O4$(),n.TgZ(3,"svg",3)(4,"defs")(5,"linearGradient",4),n._UZ(6,"stop",5)(7,"stop",6),n.qZA(),n.TgZ(8,"clipPath",7),n._UZ(9,"use",8),n.qZA(),n.TgZ(10,"linearGradient",9),n._UZ(11,"stop",5)(12,"stop",6),n.qZA(),n._UZ(13,"path",10)(14,"path",11),n.qZA(),n.TgZ(15,"g",12),n._UZ(16,"use",13),n.TgZ(17,"g",14),n._UZ(18,"use",15),n.qZA()()(),n.kcU(),n.TgZ(19,"span",16),n._uU(20,"Advanced"),n.qZA()(),n.TgZ(21,"div",17)(22,"h1"),n._uU(23,"Session Expired"),n.qZA(),n.TgZ(24,"div",18)(25,"span"),n._uU(26,"Your session has expired, please login to pick up where you left off."),n.qZA()(),n.TgZ(27,"div",19)(28,"button",20),n.NdJ("click",function(){return o.redirectToLoginPage()}),n.TgZ(29,"span",21),n._uU(30,"Login"),n.qZA()()()()(),n._UZ(31,"section",22),n.qZA())},styles:['*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:after, [_ngcontent-%COMP%]:before{box-sizing:border-box}.h4[_ngcontent-%COMP%], body[_ngcontent-%COMP%], h1[_ngcontent-%COMP%]{margin:0}html[_ngcontent-%COMP%]:focus-within{scroll-behavior:smooth}body[_ngcontent-%COMP%]{min-height:100vh;background-color:#ededed;font-family:Open Sans,sans-serif;font-size:.875rem;font-weight:400;line-height:1.714;color:#171717;text-align:left;text-rendering:optimizeSpeed}.h4[_ngcontent-%COMP%], h1[_ngcontent-%COMP%]{margin-top:0;margin-bottom:.5rem;font-weight:600;line-height:1.2}h1[_ngcontent-%COMP%]{font-size:2.312625rem}@media (max-width: 1200px){h1[_ngcontent-%COMP%]{font-size:calc(1.1312625rem + 1.57515vw)}}.h4[_ngcontent-%COMP%]{font-size:1.12525rem}@media (max-width: 1200px){.h4[_ngcontent-%COMP%]{font-size:calc(1.012525rem + .1503vw)}}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{font:inherit}@media (prefers-reduced-motion: reduce){html[_ngcontent-%COMP%]:focus-within{scroll-behavior:auto}*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:after, [_ngcontent-%COMP%]:before{animation-duration:0s!important;animation-iteration-count:1!important;transition-duration:0s!important;scroll-behavior:auto!important}}[_ngcontent-%COMP%]:root{--blue: #007bff;--blue-dark: #1d428a;--indigo: #6610f2;--purple: #6f42c1;--pink: #e83e8c;--red: #dc3545;--orange: #e9510e;--yellow: #ffc107;--green: #00823b;--teal: #20c997;--cyan: #007377;--black: #000;--white: #fff;--gray: #767676;--gray-light: #f8f8f8;--gray-dark: #242424;--primary: #1d428a;--secondary: #414141;--success: #00823b;--info: #007377;--warning: #ffc107;--danger: #dc3545;--light: #f3f3f3;--dark: #242424;--advanced: #e9510e;--advanced-sky: #009fdf;--advanced-green: #009a44;--muted: #e3e3e3;--spacing-00: 0;--spacing-01: .125rem;--spacing-02: .25rem;--spacing-03: .5rem;--spacing-04: .75rem;--spacing-05: 1rem;--spacing-06: 1.5rem;--spacing-07: 2rem;--spacing-08: 2.5rem;--spacing-09: 3rem;--layout-spacing-00: 0;--layout-spacing-01: 1rem;--layout-spacing-02: 1.5rem;--layout-spacing-03: 2rem;--layout-spacing-04: 3rem;--layout-spacing-05: 4rem;--layout-spacing-06: 6rem;--layout-spacing-07: 10rem }.mcc-button[_ngcontent-%COMP%]{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;border:1px solid transparent;background-color:transparent;color:#171717;font-family:inherit;font-weight:400;text-decoration:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:background-color .15s ease-in-out,color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;height:2.5rem;padding:0 .9375rem;border-radius:2px;font-size:.875rem;line-height:normal}.mcc-button.mcc-button--primary[_ngcontent-%COMP%]{background:#1d428a;color:#fff;border-color:#1d428a}.mcc-button.mcc-button--primary[_ngcontent-%COMP%]:focus, .mcc-button.mcc-button--primary[_ngcontent-%COMP%]:hover{color:#fff;background-color:#16336a;text-decoration:none}.mcc-button.mcc-button--primary[_ngcontent-%COMP%]:focus{outline:0;box-shadow:0 0 0 .2rem #1d428a80}.mcc-button.mcc-button--primary[_ngcontent-%COMP%]:disabled{border-color:#414141;background-color:#b3b3b3;color:#414141;pointer-events:none}.mcc-button.mcc-button--secondary[_ngcontent-%COMP%]{background:#414141;color:#fff;border-color:#414141}.mcc-button.mcc-button--secondary[_ngcontent-%COMP%]:focus, .mcc-button.mcc-button--secondary[_ngcontent-%COMP%]:hover{color:#fff;background-color:#2e2e2e;text-decoration:none}.mcc-button.mcc-button--secondary[_ngcontent-%COMP%]:focus{outline:0;box-shadow:0 0 0 .2rem #41414180}.mcc-button.mcc-button--secondary[_ngcontent-%COMP%]:disabled{border-color:#414141;background-color:#b3b3b3;color:#414141;pointer-events:none}.mcc-button.mcc-button--block[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;width:100%}.mcc-button-group[_ngcontent-%COMP%]{position:relative;display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}.mcc-button-group[_ngcontent-%COMP%] > .mcc-button[_ngcontent-%COMP%]{position:relative;-ms-flex:1 1 auto;flex:1 1 auto}.mcc-button-group[_ngcontent-%COMP%] > .mcc-button[_ngcontent-%COMP%]:active, .mcc-button-group[_ngcontent-%COMP%] > .mcc-button[_ngcontent-%COMP%]:focus, .mcc-button-group[_ngcontent-%COMP%] > .mcc-button[_ngcontent-%COMP%]:hover{z-index:1}.mcc-button-group--spaced[_ngcontent-%COMP%]:not(.mcc-button-group--vertical) > .mcc-button[_ngcontent-%COMP%]:not(:last-child){margin-right:.25rem}.mcc-button-group--block[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex}.mcc-button-group--block[_ngcontent-%COMP%] > .mcc-button[_ngcontent-%COMP%]{-ms-flex:1 1 0px;flex:1 1 0}.mcc-alert[_ngcontent-%COMP%]{position:relative;padding:1.5rem;margin-bottom:1rem;border:1px solid transparent;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;border-radius:2px}@media (min-width: 720px){.mcc-alert[_ngcontent-%COMP%]{-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center}}.mcc-alert--compact[_ngcontent-%COMP%]{padding:.75rem}.mcc-alert--danger-solid[_ngcontent-%COMP%]{color:#fff;background:#dc3545;border-color:#dc3545}.mfc-label[_ngcontent-%COMP%]{display:inline-block;margin-bottom:.25rem;font-weight:600}@supports (-webkit-appearance: none) or (-moz-appearance: none){.mfc-checkbox-wrapper[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:not(.mfc-switch):not(:disabled):not(:checked):not(:focus):hover{border-color:#171717}}.mfc-input-wrapper[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:start}.mfc-input-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:inline-block;margin-bottom:.25rem;font-weight:600}.mfc-input-wrapper[_ngcontent-%COMP%]   label[for][_ngcontent-%COMP%]{cursor:pointer}.mfc-input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=submit]){border-radius:2px;border:1px solid #e3e3e3;width:100%;height:2.5rem;padding:.4375rem .9375rem;font-size:.875rem}.mfc-input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=submit]):focus{border-color:#1d428a;border-width:2px;outline:0;box-shadow:0 0 0 .2rem #1d428a40}.mfc-input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=submit]):focus{padding:calc(.4375rem - 1px) calc(.9375rem - 1px);outline:0}.mfc-input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=submit]).ms-is-invalid{border-color:#dc3545}.mfc-input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=submit]).ms-is-invalid:focus{border-color:#dc3545;box-shadow:0 0 0 2px #dc354540}.mfc-input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=submit]).ms-is-invalid ~ .mfc-invalid-feedback[_ngcontent-%COMP%]{display:block;margin-top:.25rem;color:#dc3545;font-size:80%;font-weight:400}@supports (-webkit-appearance: none) or (-moz-appearance: none){.mfc-radio-wrapper[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:not(:disabled):not(:checked):not(:focus):hover{border-color:#171717}}.mfc-radio-button-wrapper[_ngcontent-%COMP%]{position:relative}@supports (-webkit-appearance: none) or (-moz-appearance: none){.mfc-radio-button-wrapper[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]{position:relative;vertical-align:top;display:inline-block;width:20px;height:20px;margin:0;border:2px solid #e3e3e3;border-radius:50%;outline:0;background-color:#fff;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;cursor:pointer;-webkit-appearance:none;-moz-appearance:none}.mfc-radio-button-wrapper[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:after{position:absolute;top:calc(50% - 6px);left:calc(50% - 6px);display:block;width:12px;height:12px;border-radius:50%;background:#fff;transition:transform .3s ease,opacity .2s ease-in-out;opacity:0;-ms-transform:scale(.7);transform:scale(.7);content:""}.mfc-radio-button-wrapper[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:focus{outline:0;border-color:#1d428a;box-shadow:0 0 0 .2rem #1d428a40}.mfc-radio-button-wrapper[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked{background-color:#1d428a;border-color:#1d428a}.mfc-radio-button-wrapper[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked:after{-ms-transform:scale(.5);transform:scale(.5);opacity:1}.mfc-radio-button-wrapper[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:disabled{cursor:not-allowed;background:#b3b3b3;border-color:#b3b3b3}.mfc-radio-button-wrapper[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:disabled + label[_ngcontent-%COMP%]{cursor:not-allowed}.mfc-radio-button-wrapper[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:not(:disabled):not(:checked):not(:focus):hover{border-color:#171717}}.mfc-radio-button-wrapper[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]{position:absolute;top:20px;left:16px}.mfc-radio-button-wrapper[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-item-align:center;align-self:center;padding:.5rem 1rem .5rem 44px;margin-left:0;border:1px solid #e3e3e3;border-radius:2px}.mfc-radio-button-wrapper[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] + label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(1){font-weight:600;line-height:1.5}.mfc-radio-button-wrapper[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] + label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(2){font-weight:400;line-height:1.5}.mfc-radio-button-wrapper[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{border-color:#bdbdbd}.mfc-radio-button-wrapper[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:not(:checked):hover + label[_ngcontent-%COMP%]{border-color:#bdbdbd}@supports (-webkit-appearance: none) or (-moz-appearance: none){.mfc-checkbox-wrapper[_ngcontent-%COMP%]   input[type=checkbox].mfc-switch[_ngcontent-%COMP%]:not(:disabled):not(:checked):not(:focus):hover{border-color:#171717}.mfc-checkbox-wrapper[_ngcontent-%COMP%]   input[type=checkbox].mfc-switch[_ngcontent-%COMP%]:not(:disabled):not(:checked):not(:focus):hover:after{background-color:#171717}}.mfc-invalid-feedback[_ngcontent-%COMP%]{display:none;margin-top:.125rem;font-size:80%;font-weight:400}.mfc-invalid-feedback[_ngcontent-%COMP%]{color:#dc3545}.ms-is-invalid[_ngcontent-%COMP%] ~ .mfc-invalid-feedback[_ngcontent-%COMP%]{display:block}body[_ngcontent-%COMP%]{background:#fff}.login[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-height:100vh;height:100%;background-color:#fff}@media (min-width: 1140px){.login[_ngcontent-%COMP%]{-ms-flex-direction:row;flex-direction:row}}@media screen and (-ms-high-contrast: active),(-ms-high-contrast: none){.login[_ngcontent-%COMP%]{height:1px}}.login__logo[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-family:Montserrat,sans-serif;color:#242424;text-decoration:none;z-index:3}.login__logo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:3rem;height:3rem;margin-right:.5rem}.login__logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-bottom:0}@media (min-width: 1140px){.login__logo[_ngcontent-%COMP%]{-ms-flex-item-align:start;align-self:flex-start}}.login__wrapper[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;width:100%;padding:2rem;z-index:2}@media (min-width: 1140px){.login__wrapper[_ngcontent-%COMP%]{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%;-ms-flex-align:center;align-items:center;padding:2rem;box-shadow:0 1rem 3rem #0000002d}}@media (min-width: 1440px){.login__wrapper[_ngcontent-%COMP%]{-ms-flex:0 0 30%;flex:0 0 30%;max-width:30%}}.login__wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:2.5rem;font-family:Montserrat,sans-serif}.login__form[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;margin:4rem auto}@media (min-width: 720px){.login__form[_ngcontent-%COMP%]{max-width:20rem}}.login__brand[_ngcontent-%COMP%]{display:none;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-pack:center;justify-content:center;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%;-ms-flex-align:center;align-items:center;background-color:#ededed;background-image:url(https://cdn.svc.oneadvanced.com/login/img/bg.png);background-repeat:no-repeat;background-position:center right;background-size:cover;z-index:1}@media (min-width: 1140px){.login__brand[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex}}@media (min-width: 1440px){.login__brand[_ngcontent-%COMP%]{-ms-flex:0 0 70%;flex:0 0 70%;max-width:70%}}.mu-mt-00[_ngcontent-%COMP%]{margin-top:0!important}.mu-mt-01[_ngcontent-%COMP%]{margin-top:.125rem!important}.mu-mt-02[_ngcontent-%COMP%]{margin-top:.25rem!important}.mu-mt-03[_ngcontent-%COMP%]{margin-top:.5rem!important}.mu-mt-04[_ngcontent-%COMP%]{margin-top:.75rem!important}.mu-mt-05[_ngcontent-%COMP%]{margin-top:1rem!important}.mu-mt-06[_ngcontent-%COMP%]{margin-top:1.5rem!important}.mu-mt-07[_ngcontent-%COMP%]{margin-top:2rem!important}.mu-mt-08[_ngcontent-%COMP%]{margin-top:2.5rem!important}.mu-mt-09[_ngcontent-%COMP%]{margin-top:3rem!important}.mu-mt-auto[_ngcontent-%COMP%]{margin-top:auto!important}.mu-mb-00[_ngcontent-%COMP%]{margin-bottom:0!important}.mu-mb-01[_ngcontent-%COMP%]{margin-bottom:.125rem!important}.mu-mb-02[_ngcontent-%COMP%]{margin-bottom:.25rem!important}.mu-mb-03[_ngcontent-%COMP%]{margin-bottom:.5rem!important}.mu-mb-04[_ngcontent-%COMP%]{margin-bottom:.75rem!important}.mu-mb-05[_ngcontent-%COMP%]{margin-bottom:1rem!important}.mu-mb-06[_ngcontent-%COMP%]{margin-bottom:1.5rem!important}.mu-mb-07[_ngcontent-%COMP%]{margin-bottom:2rem!important}.mu-mb-08[_ngcontent-%COMP%]{margin-bottom:2.5rem!important}.mu-mb-09[_ngcontent-%COMP%]{margin-bottom:3rem!important}.mu-mb-auto[_ngcontent-%COMP%]{margin-bottom:auto!important}.mu-d-none[_ngcontent-%COMP%]{display:none}']}),t})()}];let u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[s.Bz.forChild(d),s.Bz]}),t})(),b=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[m.ez,u]}),t})()}}]);