"use strict";(globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[]).push([[24],{3024:(e,a,l)=>{l.r(a),l.d(a,{default:()=>Y});var t=l(9835),o=l(6970),d=l(499),n=l(662);const r={class:"day-box-frame"},u={key:0,class:"weeknumber"},s={style:{"font-size":"10px",color:"#ccc"}},c=(0,t.aZ)({__name:"HorizontalCalendarDay",props:{calendarDate:{},selectedDate:{},showCalendarWeek:{type:Boolean},calendarWeekPrefix:{},locales:{}},emits:["selected"],setup(e,{emit:a}){const l=e,c=(0,t.Fl)((()=>{var e;return(null===(e=l.selectedDate)||void 0===e?void 0:e.toDateString())===l.calendarDate.toDateString()}));function i(){c.value?a("selected",void 0):a("selected",l.calendarDate)}const m=(0,t.Fl)((()=>{const e=l.calendarDate.getDay();return 6===e||0===e})),v=(0,t.Fl)((()=>{const e=l.calendarDate.getDay();return 1===e})),f=(0,t.Fl)((()=>{const e=l.calendarDate.getDay();return 0===e})),D=(0,t.Fl)((()=>l.calendarDate.toDateString()===(new Date).toDateString())),p=(0,t.Fl)((()=>1===l.calendarDate.getDate())),w=(0,t.Fl)((()=>{if(l.locales){try{l.calendarDate.toLocaleDateString(l.locales)}catch(e){return}return l.locales}}));return(e,a)=>((0,t.wg)(),(0,t.iD)("div",{class:(0,o.C_)("day-box "+(c.value?"selected":"")),onClick:i},[(0,t._)("div",r,[e.showCalendarWeek?((0,t.wg)(),(0,t.iD)("div",u,[v.value||f.value?((0,t.wg)(),(0,t.iD)(t.HY,{key:0},[(0,t.Uk)((0,o.zw)(e.calendarWeekPrefix)+(0,o.zw)((0,d.SU)(n.ZP).formatDate(e.calendarDate,"ww")),1)],64)):((0,t.wg)(),(0,t.iD)(t.HY,{key:1},[(0,t.Uk)(" - ")],64))])):(0,t.kq)("",!0),(0,t._)("div",{class:(0,o.C_)("weekday "+(m.value?"text-red":""))},(0,o.zw)(e.calendarDate.toLocaleDateString(w.value,{weekday:"short"})),3),(0,t._)("div",{class:(0,o.C_)("daynumber "+(D.value?"daynumber-underline":""))},(0,o.zw)((0,d.SU)(n.ZP).formatDate(e.calendarDate,"DD")),3),(0,t._)("div",{class:(0,o.C_)("month-name "+(p.value?"is-first-day-in-month":""))},(0,o.zw)(e.calendarDate.toLocaleDateString(w.value,{month:"short"})),3),(0,t._)("div",s,(0,o.zw)((0,d.SU)(n.ZP).formatDate(e.calendarDate,"YYYY")),1)])],2))}});var i=l(1639);const m=(0,i.Z)(c,[["__scopeId","data-v-b4b76654"]]),v=m,f=(0,t.aZ)({__name:"HorizontalCalendar",props:{modelValue:{},calendarWeekPrefix:{default:"KW "},showCalendarWeek:{type:Boolean,default:!1},dayOffset:{default:7},dayJumpOffset:{default:1},locales:{default:void 0}},emits:["update:modelValue"],setup(e,{emit:a}){const l=e,r=(0,d.iH)(new Date);function u(e){a("update:modelValue",e)}function s(){r.value=n.ZP.addToDate(r.value,{days:l.dayJumpOffset})}function c(){r.value=n.ZP.subtractFromDate(r.value,{days:l.dayJumpOffset})}const i=(0,t.Fl)((()=>{const e=n.ZP.subtractFromDate(r.value,{days:l.dayOffset}),a=n.ZP.addToDate(r.value,{days:l.dayOffset}),t="days",o=n.ZP.getDateDiff(a,e,t),d=[];for(let l=0;l<o;l++){const a=n.ZP.addToDate(e,{days:l,months:0});d.push(a)}return d})),m=(0,t.Fl)((()=>{let e=84;return l.showCalendarWeek&&(e+=20),e}));return(e,a)=>{const l=(0,t.up)("q-icon");return(0,t.wg)(),(0,t.iD)("div",{class:"horizontal-calendar",style:(0,o.j5)(`height:${m.value}px`)},[(0,t._)("div",{class:"button button-previous",onClick:c},[(0,t.Wm)(l,{name:"arrow_back_ios",size:"md",color:"white"})]),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(i.value,(l=>((0,t.wg)(),(0,t.iD)("span",{key:`${(0,d.SU)(n.ZP).formatDate(l,"YYYY-MM-DD")}`},[(0,t.Wm)(v,{"calendar-date":l,"selected-date":e.modelValue,"show-calendar-week":e.showCalendarWeek,"calendar-week-prefix":e.calendarWeekPrefix,locales:e.locales,onSelected:a[0]||(a[0]=e=>u(e))},null,8,["calendar-date","selected-date","show-calendar-week","calendar-week-prefix","locales"])])))),128)),(0,t._)("div",{class:"button button-next",onClick:s},[(0,t.Wm)(l,{name:"arrow_forward_ios",size:"md",color:"white"})])],4)}}});var D=l(2857),p=l(9984),w=l.n(p);const k=(0,i.Z)(f,[["__scopeId","data-v-6b2340da"]]),y=k;w()(f,"components",{QIcon:D.Z});const _={class:"row q-col-gutter-sm"},g={class:"col-8"},h={class:"bg-grey-2"},b={class:"col-4"},W=(0,t.aZ)({__name:"IndexPage",setup(e){const a=(0,d.iH)("KW "),l=(0,d.iH)(!1),r=(0,d.iH)(4),u=(0,d.iH)(1),s=(0,d.iH)(void 0),c=(0,d.iH)(void 0),i=(0,t.Fl)((()=>n.ZP.formatDate(c.value,"YYYY-MM-DD")));return(e,d)=>{const n=(0,t.up)("q-checkbox"),m=(0,t.up)("q-input"),v=(0,t.up)("q-form"),f=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(f,{padding:""},{default:(0,t.w5)((()=>[(0,t._)("div",_,[(0,t._)("div",g,[(0,t.Wm)(y,{modelValue:c.value,"onUpdate:modelValue":d[0]||(d[0]=e=>c.value=e),"calendar-week-prefix":a.value,"show-calendar-week":l.value,"day-offset":r.value,"day-jump-offset":u.value,locales:s.value},null,8,["modelValue","calendar-week-prefix","show-calendar-week","day-offset","day-jump-offset","locales"]),(0,t._)("pre",h,"Date:"+(0,o.zw)(i.value),1)]),(0,t._)("div",b,[(0,t.Wm)(v,{class:"q-gutter-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(n,{modelValue:l.value,"onUpdate:modelValue":d[1]||(d[1]=e=>l.value=e),outlined:"",label:"Show Calendar Week"},null,8,["modelValue"]),(0,t.Wm)(m,{modelValue:a.value,"onUpdate:modelValue":d[2]||(d[2]=e=>a.value=e),outlined:"",label:"Calendar Week Prefix"},null,8,["modelValue"]),(0,t.Wm)(m,{modelValue:r.value,"onUpdate:modelValue":d[3]||(d[3]=e=>r.value=e),modelModifiers:{number:!0},outlined:"",label:"Calendar Day Offset"},null,8,["modelValue"]),(0,t.Wm)(m,{modelValue:u.value,"onUpdate:modelValue":d[4]||(d[4]=e=>u.value=e),modelModifiers:{number:!0},outlined:"",label:"Calendar Day Jump Offset",hint:"Click next or previous"},null,8,["modelValue"]),(0,t.Wm)(m,{modelValue:s.value,"onUpdate:modelValue":d[5]||(d[5]=e=>s.value=e),outlined:"",label:"Locales"},null,8,["modelValue"])])),_:1})])])])),_:1})}}});var C=l(9885),V=l(8326),Z=l(1006),x=l(1169);const P=W,Y=P;w()(W,"components",{QPage:C.Z,QForm:V.Z,QCheckbox:Z.Z,QInput:x.Z})}}]);