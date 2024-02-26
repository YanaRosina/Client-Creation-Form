(function(){"use strict";var e={479:function(e,t,s){var r=s(471),a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("h2",[e._v("Форма созания клиента")]),t("form",{attrs:{novalidate:""}},[1===e.currentStep?t("div",{staticClass:"fields-wrap"},[t("h3",[e._v("Личные данные клиента")]),t("div",{staticClass:"form-group"},[e._m(0),t("input",{directives:[{name:"model",rawName:"v-model",value:e.lastName,expression:"lastName"}],attrs:{type:"text",id:"last-name",required:""},domProps:{value:e.lastName},on:{input:function(t){t.target.composing||(e.lastName=t.target.value)}}}),e.isEmpty("lastName")?t("p",{staticClass:"error-message"},[e._v("Введите фамилию")]):e._e()]),t("div",{staticClass:"form-group"},[e._m(1),t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",id:"name",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e.isEmpty("name")?t("p",{staticClass:"error-message"},[e._v("Введите имя")]):e._e()]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"patronymic"}},[e._v("Отчество:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.patronymic,expression:"patronymic"}],attrs:{type:"text",id:"patronymic"},domProps:{value:e.patronymic},on:{input:function(t){t.target.composing||(e.patronymic=t.target.value)}}})]),t("div",{staticClass:"form-group half-size"},[e._m(2),t("input",{directives:[{name:"model",rawName:"v-model",value:e.dob,expression:"dob"}],attrs:{type:"date",id:"dob",required:""},domProps:{value:e.dob},on:{input:function(t){t.target.composing||(e.dob=t.target.value)}}}),e.isEmpty("dob")?t("p",{staticClass:"error-message"},[e._v("Введите дату")]):e._e()]),t("div",{staticClass:"form-group half-size"},[e._m(3),t("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],class:{error:!e.isPhoneNumberValid},attrs:{type:"tel",id:"phone",placeholder:"7ХХХХХХХХХХ"},domProps:{value:e.phone},on:{input:[function(t){t.target.composing||(e.phone=t.target.value)},e.validatePhoneNumber]}}),e.isPhoneNumberValid||!e.isEmpty("phone")&&!e.nextButtonClicked?e._e():t("p",{staticClass:"error-message"},[e._v("Некорректный номер телефона")])]),t("div",{staticClass:"form-group half-size"},[e._m(4),t("select",{directives:[{name:"model",rawName:"v-model",value:e.customerGroup,expression:"customerGroup"}],attrs:{id:"customer-group",multiple:"",required:""},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.customerGroup=t.target.multiple?s:s[0]}}},[t("option",{attrs:{value:"VIP"}},[e._v("VIP")]),t("option",{attrs:{value:"Problematic"}},[e._v("Проблемные")]),t("option",{attrs:{value:"CHI"}},[e._v("ОМС")])]),e.isEmpty("customerGroup")?t("p",{staticClass:"error-message"},[e._v("Выберите группу(группы) клиентов")]):e._e()]),t("div",{staticClass:"form-group half-size"},[t("label",{attrs:{for:"gender"}},[e._v("Пол")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.gender,expression:"gender"}],attrs:{id:"gender"},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.gender=t.target.multiple?s:s[0]}}},[t("option",{attrs:{value:"male"}},[e._v("Мужской")]),t("option",{attrs:{value:"female"}},[e._v("Женский")])])]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"attending-doctor"}},[e._v("Лечащий врач:")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.attendingDoctor,expression:"attendingDoctor"}],attrs:{id:"attending-doctor"},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.attendingDoctor=t.target.multiple?s:s[0]}}},[t("option",{attrs:{value:"Ivanov"}},[e._v("Иванов")]),t("option",{attrs:{value:"Zakharov"}},[e._v("Захаров")]),t("option",{attrs:{value:"Chernysheva"}},[e._v("Чернышова")])])]),t("div",{staticClass:"form-group"},[t("label",{staticClass:"SMS",attrs:{for:"do-not-send-sms"}},[e._v("Не отправлять SMS:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.doNotSendSMS,expression:"doNotSendSMS"}],attrs:{type:"checkbox",id:"do-not-send-sms"},domProps:{checked:Array.isArray(e.doNotSendSMS)?e._i(e.doNotSendSMS,null)>-1:e.doNotSendSMS},on:{change:function(t){var s=e.doNotSendSMS,r=t.target,a=!!r.checked;if(Array.isArray(s)){var o=null,i=e._i(s,o);r.checked?i<0&&(e.doNotSendSMS=s.concat([o])):i>-1&&(e.doNotSendSMS=s.slice(0,i).concat(s.slice(i+1)))}else e.doNotSendSMS=a}}})]),t("p",[e._v("*Поля обязательные для заполнения")])]):e._e(),2===e.currentStep?t("div",{staticClass:"fields-wrap"},[t("h3",[e._v("Адрес:")]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"index"}},[e._v("Страна:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.addressCountry,expression:"addressCountry"}],attrs:{type:"text",id:"country"},domProps:{value:e.addressCountry},on:{input:function(t){t.target.composing||(e.addressCountry=t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"index"}},[e._v("Область:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.addressArea,expression:"addressArea"}],attrs:{type:"text",id:"area"},domProps:{value:e.addressArea},on:{input:function(t){t.target.composing||(e.addressArea=t.target.value)}}})]),t("div",{staticClass:"form-group"},[e._m(5),t("input",{directives:[{name:"model",rawName:"v-model",value:e.addressCity,expression:"addressCity"}],attrs:{type:"text",id:"city"},domProps:{value:e.addressCity},on:{input:function(t){t.target.composing||(e.addressCity=t.target.value)}}}),e.isEmpty("addressCity")?t("p",{staticClass:"error-message"},[e._v("Введите город")]):e._e()]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"index"}},[e._v("Улица:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.addressStreet,expression:"addressStreet"}],attrs:{type:"text",id:"street"},domProps:{value:e.addressStreet},on:{input:function(t){t.target.composing||(e.addressStreet=t.target.value)}}})]),t("div",{staticClass:"form-group half-size"},[t("label",{attrs:{for:"index"}},[e._v("Дом:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.addressBuilding,expression:"addressBuilding"}],attrs:{type:"text",id:"building"},domProps:{value:e.addressBuilding},on:{input:function(t){t.target.composing||(e.addressBuilding=t.target.value)}}})]),t("div",{staticClass:"form-group half-size"},[t("label",{attrs:{for:"index"}},[e._v("Индекс:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.addressIndex,expression:"addressIndex"}],attrs:{type:"text",id:"index"},domProps:{value:e.addressIndex},on:{input:function(t){t.target.composing||(e.addressIndex=t.target.value)}}})]),t("p",[e._v("*Поля обязательные для заполнения")])]):e._e(),3===e.currentStep?t("div",{staticClass:"fields-wrap"},[t("h3",[e._v("Паспортные данные:")]),t("div",{staticClass:"form-group half-size"},[e._m(6),t("select",{directives:[{name:"model",rawName:"v-model",value:e.passportType,expression:"passportType"}],attrs:{id:"document-type",required:""},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.passportType=t.target.multiple?s:s[0]}}},[t("option",{attrs:{value:"Passport"}},[e._v("Паспорт")]),t("option",{attrs:{value:"Birth Certificate"}},[e._v("Свидетельство о рождении")]),t("option",{attrs:{value:"Water ID Card"}},[e._v("Водительское удостоверение")])]),e.isEmpty("passportType")?t("p",{staticClass:"error-message"},[e._v("Выберите тип документа")]):e._e()]),t("div",{staticClass:"form-group half-size"},[e._m(7),t("input",{directives:[{name:"model",rawName:"v-model",value:e.passportIssueDate,expression:"passportIssueDate"}],attrs:{type:"date",id:"issue-date",required:""},domProps:{value:e.passportIssueDate},on:{input:function(t){t.target.composing||(e.passportIssueDate=t.target.value)}}}),e.isEmpty("passportIssueDate")?t("p",{staticClass:"error-message"},[e._v("Введите дату выдачи документа")]):e._e()]),t("div",{staticClass:"form-group half-size"},[t("label",{attrs:{for:"passport-series"}},[e._v("Серия:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.passportSeries,expression:"passportSeries"}],attrs:{type:"text",id:"passport-series"},domProps:{value:e.passportSeries},on:{input:function(t){t.target.composing||(e.passportSeries=t.target.value)}}})]),t("div",{staticClass:"form-group half-size"},[t("label",{attrs:{for:"passport-number"}},[e._v("Номер:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.passportNumber,expression:"passportNumber"}],attrs:{type:"text",id:"passport-number"},domProps:{value:e.passportNumber},on:{input:function(t){t.target.composing||(e.passportNumber=t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"issued-by"}},[e._v("Кем выдан:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.passportIssuedBy,expression:"passportIssuedBy"}],attrs:{type:"text",id:"issued-by"},domProps:{value:e.passportIssuedBy},on:{input:function(t){t.target.composing||(e.passportIssuedBy=t.target.value)}}})]),t("p",[e._v("*Поля обязательные для заполнения")])]):e._e(),t("div",{staticClass:"button-container"},[e.currentStep>1?t("button",{attrs:{type:"button"},on:{click:e.prevStep}},[e._v("Назад")]):e._e(),e.currentStep<3?t("button",{staticStyle:{"margin-left":"auto"},on:{click:e.validateAndProceed}},[e._v("Далее")]):e._e(),3===e.currentStep?t("button",{on:{click:e.validateAndProceed}},[e._v("Регистрация")]):e._e()])]),e.IsModal?t("ModalDialog",{on:{modalClosed:e.handleModalClosed}}):e._e()],1)},o=[function(){var e=this,t=e._self._c;return t("label",{attrs:{for:"last-name"}},[t("span",{staticClass:"required"},[e._v("*")]),e._v("Фамилия:")])},function(){var e=this,t=e._self._c;return t("label",{attrs:{for:"name"}},[t("span",{staticClass:"required"},[e._v("*")]),e._v("Имя:")])},function(){var e=this,t=e._self._c;return t("label",{attrs:{for:"dob"}},[t("span",{staticClass:"required"},[e._v("*")]),e._v("Дата рождения:")])},function(){var e=this,t=e._self._c;return t("label",{attrs:{for:"phone"}},[t("span",{staticClass:"required"},[e._v("*")]),e._v("Номер телефона:")])},function(){var e=this,t=e._self._c;return t("label",{attrs:{for:"customer-group"}},[t("span",{staticClass:"required"},[e._v("*")]),e._v("Группа клиентов:")])},function(){var e=this,t=e._self._c;return t("label",{attrs:{for:"index"}},[t("span",{staticClass:"required"},[e._v("*")]),e._v("Город:")])},function(){var e=this,t=e._self._c;return t("label",{attrs:{for:"document-type"}},[t("span",{staticClass:"required"},[e._v("*")]),e._v("Тип документа:")])},function(){var e=this,t=e._self._c;return t("label",{attrs:{for:"issue-date"}},[t("span",{staticClass:"required"},[e._v("*")]),e._v("Дата выдачи:")])}],i=function(){var e=this,t=e._self._c;return this.IsModal?t("div",{staticClass:"modal"},[t("div",{staticClass:"modal-container"},[t("div",{staticClass:"modal-body"},[t("p",[e._v("Клиент зарегистрирован!")]),t("div",{staticClass:"modal-close",on:{click:e.closeModal}},[e._v("✖")])])])]):e._e()},n=[],l={data(){return{IsModal:!0}},methods:{closeModal(){this.IsModal=!1,this.$emit("modalClosed")}}},d=l,p=s(656),u=(0,p.A)(d,i,n,!1,null,null,null),c=u.exports,m={components:{ModalDialog:c},data(){return{currentStep:1,isPhoneNumberValid:!1,phoneError:!1,showError:!1,IsModal:!1,emptyFields:!1,nextButtonClicked:!1,lastName:"",name:"",patronymic:"",dob:"",phone:"",gender:"male",customerGroup:[],attendingPhysician:"",doNotSendSMS:!1,addressIndex:"",addressCountry:"",addressArea:"",addressCity:"",addressStreet:"",addressBuilding:"",passportType:"",passportSeries:"",passportNumber:"",passportIssuedBy:"",passportIssueDate:"",progress:0}},methods:{nextStep(){this.currentStep<3&&this.currentStep++},prevStep(){this.currentStep>1&&this.currentStep--},submitForm(){this.IsModal=!0,console.log("Form submitted!")},resetForm(){this.currentStep=1,this.isPhoneNumberValid=!1,this.phoneError=!1,this.showError=!1,this.IsModal=!1,this.emptyFields=!1,this.nextButtonClicked=!1,this.lastName="",this.name="",this.patronymic="",this.dob="",this.phone="",this.gender="male",this.customerGroup=[],this.attendingPhysician="",this.doNotSendSMS=!1,this.addressIndex="",this.addressCountry="",this.addressArea="",this.addressCity="",this.addressStreet="",this.addressBuilding="",this.passportType="",this.passportSeries="",this.passportNumber="",this.passportIssuedBy="",this.passportIssueDate="",this.progress=0},handleModalClosed(){this.resetForm()},resetCurrentStep(){this.currentStep=1},clearError(e){this[e]=!1},validatePhoneNumber(){const e=/^[7][0-9]{10}$/;this.isPhoneNumberValid=e.test(this.phone)},validateAndProceed(e){e.preventDefault(),this.nextButtonClicked=!0,this.isRequiredFieldsFilled()&&!this.containsOnlySpaces()&&this.isPhoneNumberValid?(console.log("No empty fields or only spaces detected."),this.emptyFields=!1,3===this.currentStep?this.submitForm():this.nextStep()):this.emptyFields=!0},isRequiredFieldsFilled(){switch(this.currentStep){case 1:return!!this.lastName&&!!this.name&&!!this.dob&&!!this.phone&&this.customerGroup.length>0;case 2:return!!this.addressCity;case 3:return!!this.passportType&&!!this.passportIssueDate;default:console.log("Step error!")}},containsOnlySpaces(){switch(this.currentStep){case 1:return console.log("Customer Group:",this.customerGroup),this.emptyFields&&(this.isEmpty("name")||this.isEmpty("lastName")||this.isEmpty("dob")||this.isEmpty("phone")||0===this.customerGroup.length);case 2:return this.emptyFields&&this.isEmpty("addressCity");case 3:return this.emptyFields&&(this.isEmpty("passportType")||this.isEmpty("passportIssueDate"));default:return console.log("Step error!"),!1}},isEmpty(e){const t=this[e];return"customerGroup"===e?!(!this.emptyFields||0!==t.length):!("string"!==typeof t||!this.emptyFields||t&&t.trim())}}},v=m,h=(0,p.A)(v,a,o,!1,null,"142db5e0",null),f=h.exports;r.Ay.config.productionTip=!1,r.Ay.config.devtools=!0,new r.Ay({render:function(e){return e(f)}}).$mount("#app")}},t={};function s(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,s),o.exports}s.m=e,function(){var e=[];s.O=function(t,r,a,o){if(!r){var i=1/0;for(p=0;p<e.length;p++){r=e[p][0],a=e[p][1],o=e[p][2];for(var n=!0,l=0;l<r.length;l++)(!1&o||i>=o)&&Object.keys(s.O).every((function(e){return s.O[e](r[l])}))?r.splice(l--,1):(n=!1,o<i&&(i=o));if(n){e.splice(p--,1);var d=a();void 0!==d&&(t=d)}}return t}o=o||0;for(var p=e.length;p>0&&e[p-1][2]>o;p--)e[p]=e[p-1];e[p]=[r,a,o]}}(),function(){s.d=function(e,t){for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};s.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,o,i=r[0],n=r[1],l=r[2],d=0;if(i.some((function(t){return 0!==e[t]}))){for(a in n)s.o(n,a)&&(s.m[a]=n[a]);if(l)var p=l(s)}for(t&&t(r);d<i.length;d++)o=i[d],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(p)},r=self["webpackChunkreg_app"]=self["webpackChunkreg_app"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=s.O(void 0,[504],(function(){return s(479)}));r=s.O(r)})();
//# sourceMappingURL=app.a2d3289d.js.map