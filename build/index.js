(()=>{"use strict";const e=window.React,a=window.wp.i18n,n=window.wc.wcBlocksRegistry,t=window.wp.htmlEntities,o=window.wc.wcSettings,m=(window.wc.blocksCheckout,a=>{const[n,t]=(0,e.useState)(""),[m,s]=(0,e.useState)(""),[l,r]=(0,e.useState)(""),[c,i]=(0,e.useState)(""),[p,y]=(0,e.useState)(""),[d,_]=(0,e.useState)(!1),[w,u]=(0,e.useState)(!0),{eventRegistration:b,emitResponse:g}=a,{onPaymentProcessing:h}=b;(0,e.useEffect)((()=>{const e=(0,o.getSetting)("paynow_data",{}),a=e.currency;s(e.plugin_url),t(a);const n=h((async()=>l.length?"paynow"==l&&c.length<1?{type:g.responseTypes.ERROR,message:"Please fill in Paynow Email Address "}:"paynow"!=l&&p.length<1?{type:g.responseTypes.ERROR,message:"Please fill in Paynow Mobile Number "}:{type:g.responseTypes.SUCCESS,meta:{paymentMethodData:{myGatewayCustomData:"12345",PaynowPaymentMethod:l,PaynowAuthEmail:c,PaynowPaymentMobileNumber:p}}}:{type:g.responseTypes.ERROR,message:"Please select a Paynow Payment channel"}));return()=>{n()}}),[l,c,p,g.responseTypes.ERROR,g.responseTypes.SUCCESS,h]);const E=e=>{const a=e.target.value;r(a),"paynow"===a?(u(!0),_(!1)):(u(!1),_(!0))};return(0,e.createElement)("div",{id:"paynow_custom_checkout_field",className:"paynow_express_payment_mobile"},(0,e.createElement)("small",null,"Please select how you want to pay."),(0,e.createElement)("p",{className:"form-row form-row-wide custom-radio-group paynow_payment_method",id:"paynow_payment_method_field","data-priority":""},(0,e.createElement)("span",{className:"woocommerce-input-wrapper"},(0,e.createElement)("div",{className:"paynow-d-flex"},(0,e.createElement)("div",{className:"paynow_ecocash_onemoney_method"},(0,e.createElement)("input",{type:"radio",className:"input-radio woocommerce-form__input woocommerce-form__input-radio inline paynow_payment_methods_radio paynow_inline",value:"ecocash_onemoney",name:"paynow_payment_method",id:"paynow_payment_method_ecocash_onemoney",onChange:E}),(0,e.createElement)("label",{htmlFor:"paynow_payment_method_ecocash_onemoney",className:"radio woocommerce-form__label woocommerce-form__label-for-radio inline paynow_inline"}," Mobile Money Express",(0,e.createElement)("br",null),(0,e.createElement)("img",{className:"paynow-badges paynow-badge",src:`${m}/assets/images/ecocash-badge.svg`,alt:"Ecocash Badge"}),(0,e.createElement)("img",{className:"paynow-badge",src:`${m}/assets/images/onemoney-badge.svg`,alt:"One Money Badge"}))),"USD"===n&&(0,e.createElement)("div",{className:"paynow_innbucks"},(0,e.createElement)("input",{type:"radio",className:"input-radio woocommerce-form__input woocommerce-form__input-radio inline paynow_payment_methods_radio  paynow_inline",value:"innbucks",name:"paynow_payment_method",id:"paynow_payment_method_innbucks",onChange:E}),(0,e.createElement)("label",{htmlFor:"paynow_payment_method_innbucks",className:"radio woocommerce-form__label woocommerce-form__label-for-radio inline paynow_inline"},"Innbucks Express",(0,e.createElement)("br",null),(0,e.createElement)("img",{className:"paynow-badges paynow-badge",src:`${m}/assets/images/Innbucks_Badge.svg`,alt:"Innbucks Badge"}))),(0,e.createElement)("div",{className:"paynow_paynow"},(0,e.createElement)("input",{type:"radio",className:"input-radio woocommerce-form__input woocommerce-form__input-radio inline paynow_payment_methods_radio paynow_inline",value:"paynow",name:"paynow_payment_method",id:"paynow_payment_method_paynow",onChange:E}),(0,e.createElement)("label",{htmlFor:"paynow_payment_method_paynow",className:"radio woocommerce-form__label woocommerce-form__label-for-radio inline paynow_inline"},"Paynow",(0,e.createElement)("span",{style:{fontSize:"13px"}}," (All supported payment channels)"),(0,e.createElement)("br",null),(0,e.createElement)("img",{className:"",style:{marginLeft:"28px",maxWidth:"110px"},src:`${m}/assets/images/paynow-badge.png`,alt:"Paynow Badge"})))))),w&&(0,e.createElement)("p",{className:"validate-required",id:"paynow_email","data-priority":""},(0,e.createElement)("label",{htmlFor:"paynow_auth_email",className:"woocommerce-form__label",style:{display:"block"}},"Paynow Email ",(0,e.createElement)("abbr",{className:"required",title:"required"},"*")),(0,e.createElement)("span",{className:"woocommerce-input-wrapper"},(0,e.createElement)("input",{type:"email",className:"input-text",name:"paynow_auth_email",id:"paynow_auth_email",placeholder:"",required:"required",fdprocessedid:"98usig",onChange:e=>{const a=e.target.value;i(a)}}))),d&&(0,e.createElement)("p",{className:"validate-required",id:"ecocash_mobile_number_field","data-priority":""},(0,e.createElement)("label",{htmlFor:"ecocash_mobile_number",className:"woocommerce-form__label",style:{display:"block"}},"Payment Mobile No ",(0,e.createElement)("abbr",{className:"required",title:"required"},"*")),(0,e.createElement)("span",{className:"woocommerce-input-wrapper"},(0,e.createElement)("input",{type:"tel",className:"input-text",name:"ecocash_mobile_number",onChange:e=>{const a=e.target.value;y(a)},id:"ecocash_mobile_number",placeholder:"",required:"required",fdprocessedid:"98usig"}))))}),s=(0,o.getSetting)("paynow_data",{}),l=(0,a.__)("Paynow","woo-gutenberg-products-block"),r=(0,t.decodeEntities)(s.title)||l,c={name:"paynow",label:(0,e.createElement)("img",{src:s.icon,style:{height:"16px"},alt:r}),content:(0,e.createElement)(m,null),edit:(0,e.createElement)(m,null),canMakePayment:()=>!0,ariaLabel:r,supports:{features:s.supports}};(0,n.registerPaymentMethod)(c)})();