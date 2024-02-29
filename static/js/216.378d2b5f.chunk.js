"use strict";(self.webpackChunkcar_rental=self.webpackChunkcar_rental||[]).push([[216],{43:(A,s,e)=>{e.d(s,{i:()=>S});const l="Car_item__h1q6o",a="Car_carContainer__h1P4M",r="Car_img__ud3qy",n="Car_likeButton__2vCH6",i="Car_like__4JMHg",c="Car_unlike__4KG9f",d="Car_carTitle__Xu+8D",m="Car_model__t-+Br",o="Car_carInfo__AZ2yL",h="Car_learnMore__OriPp";var t=e(492),N=e(992),p=e(340),C=e(60),x=e(292);const Q="Modal_overlay__r63M6",j="Modal_modal__DJDMv",K="Modal_closeModalBtn__O9bxi",u="Modal_carContainer__6FG7k",E="Modal_img__20InI",y="Modal_carTitle__wLvrS",I="Modal_carInfo__mtCXq",B="Modal_model__XGeiH",g="Modal_descr__OIW3t",M="Modal_infoTitle__g7EYc",T="Modal_rentalContainer__C3xFx",f="Modal_rentalItem__BwVAi",v="Modal_number__RCTCc",F="Modal_rentBtn__t7L3z";var q=e(496);const U=document.querySelector("#modal-root"),k=A=>{let{onModalClose:s,car:l}=A;const a=A=>{s(A)};return(0,C.useEffect)((()=>{window.addEventListener("keydown",a)}),[]),(0,C.useEffect)((()=>()=>{window.removeEventListener("keydown",a)}),[]),(0,x.createPortal)((0,q.jsx)("div",{className:Q,close:"close",onClick:s,children:(0,q.jsxs)("div",{className:j,children:[(0,q.jsx)("button",{className:K,close:"close",onClick:s}),(0,q.jsxs)("div",{className:u,children:[(0,q.jsx)("img",{className:E,src:l.img?l.img:e(444),alt:l.model}),(0,q.jsx)("h3",{className:y,children:(0,q.jsxs)("span",{children:[l.make," ",(0,q.jsx)("span",{className:B,children:l.model}),","," ",l.year]})}),(0,q.jsxs)("p",{className:I,children:[(0,q.jsx)("span",{children:l.address.split(",")[1]}),(0,q.jsx)("span",{children:"|"}),(0,q.jsx)("span",{children:l.address.split(",")[2]}),(0,q.jsx)("span",{children:"|"}),(0,q.jsx)("span",{children:l.rentalCompany})]}),(0,q.jsxs)("p",{className:I,children:[(0,q.jsx)("span",{children:l.type}),(0,q.jsx)("span",{children:"|"}),(0,q.jsx)("span",{children:l.model}),(0,q.jsx)("span",{children:"|"}),(0,q.jsx)("span",{children:l.mileage}),(0,q.jsx)("span",{children:"|"}),(0,q.jsx)("span",{children:l.accessories[0]})]}),(0,q.jsx)("p",{className:g,children:l.description}),(0,q.jsx)("h4",{className:M,children:"Accessories and functionalities:"}),(0,q.jsxs)("p",{className:I,children:[(0,q.jsx)("span",{children:l.accessories[0]}),(0,q.jsx)("span",{children:"|"}),(0,q.jsx)("span",{children:l.accessories[1]}),(0,q.jsx)("span",{children:"|"}),(0,q.jsx)("span",{children:l.accessories[2]})]}),(0,q.jsxs)("p",{className:I,children:[(0,q.jsx)("span",{children:l.functionalities[0]}),(0,q.jsx)("span",{children:"|"}),(0,q.jsx)("span",{children:l.functionalities[1]}),(0,q.jsx)("span",{children:"|"}),(0,q.jsx)("span",{children:l.functionalities[2]})]}),(0,q.jsx)("h4",{className:M,children:"Rental Conditions: "}),(0,q.jsxs)("div",{className:T,children:[(0,q.jsxs)("span",{className:f,children:["Minimum age :"," ",(0,q.jsx)("span",{className:v,children:(new Date).getFullYear()-l.year})]}),(0,q.jsx)("span",{className:f,children:l.rentalConditions.split("\n")[1]}),(0,q.jsx)("span",{className:f,children:l.rentalConditions.split("\n")[2]}),(0,q.jsxs)("span",{className:f,children:["Mileage:"," ",(0,q.jsx)("span",{className:v,children:l.mileage.toLocaleString("en-US")})]}),(0,q.jsxs)("span",{className:f,children:["Price: ",(0,q.jsx)("span",{className:v,children:l.rentalPrice})]})]})]}),(0,q.jsx)("button",{className:F,onClick:()=>{window.location.href="tel:+380730000000"},children:"Rental car"})]})}),U)},w=A=>{let{car:s}=A;const x=(0,N.OY)(),Q=(0,N.w1)(p.I),[j,K]=(0,C.useState)(c),[u,E]=(0,C.useState)(!1);(0,C.useEffect)((()=>{Q.find((A=>A===s.id))&&K(i)}),[]);return(0,q.jsx)("li",{className:l,children:(0,q.jsxs)("div",{className:a,children:[(0,q.jsx)("button",{onClick:A=>{A.preventDefault();Q.find((A=>A===s.id))?(x((0,t.od)(s.id)),K(c)):(K(i),x((0,t.Qb)(s.id)))},className:n+" "+j}),(0,q.jsxs)("div",{children:[(0,q.jsx)("img",{className:r,src:s.img?s.img:e(444),alt:s.model}),(0,q.jsxs)("h3",{className:d,children:[(0,q.jsxs)("span",{children:[s.make," ",(0,q.jsx)("span",{className:m,children:s.model}),","," ",s.year]}),(0,q.jsx)("span",{children:s.rentalPrice})]}),(0,q.jsxs)("ul",{className:o,children:[(0,q.jsx)("li",{children:s.address.split(",")[1]}),(0,q.jsx)("li",{children:s.address.split(",")[2]}),(0,q.jsx)("li",{children:s.rentalCompany}),(0,q.jsx)("li",{children:s.type}),(0,q.jsx)("li",{children:s.model}),(0,q.jsx)("li",{children:s.mileage}),(0,q.jsx)("li",{children:s.accessories[0]})]})]}),(0,q.jsx)("button",{className:h,onClick:A=>{u||E(!0)},children:"Learn more"}),u&&(0,q.jsx)(k,{onModalClose:A=>{("Escape"===A.code||A.target.attributes.close)&&E(!1)},car:s})]})})},W="CarsList_carsList__PSLgy",S=A=>{let{cars:s}=A;return(0,q.jsx)(q.Fragment,{children:(0,q.jsx)("ul",{className:W,children:s.length>0&&s.map((A=>(0,q.jsx)(w,{car:A},A.id)))})})}},216:(A,s,e)=>{e.r(s),e.d(s,{default:()=>o});var l=e(43),a=e(60),r=e(992),n=e(660),i=e(340);const c="FavoritePage_stub__cLn9k",d="FavoritePage_favorContainer__mu4uk";var m=e(496);const o=()=>{const A=(0,r.OY)(),s=(0,r.w1)(i.I),e=(0,r.w1)(i.W).filter((A=>{let{id:e}=A;return s.includes(e)}));return(0,a.useEffect)((()=>{A((0,n.Y)({page:0}))}),[]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:c}),(0,m.jsxs)("section",{className:d,children:[(0,m.jsx)(l.i,{cars:e}),0===e.length&&(0,m.jsx)("h4",{children:"There are no car in favorites"})]})]})}},340:(A,s,e)=>{e.d(s,{I:()=>l,W:()=>a});const l=A=>A.persistedReducer.favoriteCars.favorite,a=A=>A.persistedReducer.cars.cars},444:A=>{A.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=216.378d2b5f.chunk.js.map