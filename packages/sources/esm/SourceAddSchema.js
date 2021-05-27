import"./_commonjsHelpers-e2cda605.js";import"./objectWithoutProperties-be1375b5.js";import"./slicedToArray-1bde1c63.js";import{_ as e}from"./defineProperty-0a7db1e6.js";import t,{useEffect as r}from"react";import n from"prop-types";import{useIntl as a}from"react-intl";import o from"@data-driven-forms/react-form-renderer/dist/cjs/component-types";import i from"@data-driven-forms/react-form-renderer/dist/cjs/validator-types";import{_ as s}from"./toConsumableArray-6a92248c.js";import{TextContent as c}from"@patternfly/react-core/dist/esm/components/Text/TextContent.js";import"@patternfly/react-core/dist/esm/components/Text/TextListItem.js";import"@patternfly/react-core/dist/esm/components/Text/TextList.js";import"lodash/get";import"@patternfly/react-core/dist/esm/components/Form/FormHelperText.js";import"@patternfly/react-icons/dist/esm/icons/question-circle-icon";import"@patternfly/react-core/dist/esm/components/Popover/Popover.js";import{Text as p,TextVariants as u}from"@patternfly/react-core/dist/esm/components/Text/Text.js";import{W as d,a as m}from"./hardcodedSchemas-1df4e8df.js";import"@patternfly/react-core/dist/esm/components/ClipboardCopy/ClipboardCopy.js";import l from"@data-driven-forms/react-form-renderer/dist/cjs/use-form-api";import"@redhat-cloud-services/frontend-components-utilities/files/cjs/interceptors";import"./constants.js";import{f}from"./index-713c67d9.js";import{t as y}from"./schemaBuilder-f76a5124.js";import{_ as g,a as b}from"./asyncToGenerator-feb014e2.js";import v from"awesome-debounce-promise";import{handleError as _}from"./handleError.js";import"@patternfly/react-core/dist/esm/components/Spinner/Spinner.js";import"@data-driven-forms/react-form-renderer/dist/cjs/form-spy";import j from"./validated.js";var h=function ValidatorReset(e){var t=e.name,n=l();return r((function(){return setTimeout((function(){return n.change(t,"1")})),function(){return n.change(t,"")}}),[]),null};function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(n),!0).forEach((function(r){e(t,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}h.propTypes={name:n.string.isRequired};var w=function(){var e=g(b.mark((function _callee(e){var t,r,n,a=arguments;return b.wrap((function _callee$(o){for(;;)switch(o.prev=o.next){case 0:if(t=a.length>1&&void 0!==a[1]?a[1]:void 0,r=a.length>2?a[2]:void 0,e){o.next=4;break}return o.abrupt("return",void 0);case 4:return o.prev=4,o.next=7,f(e);case 7:n=o.sent,o.next=14;break;case 10:return o.prev=10,o.t0=o.catch(4),console.error(_(o.t0)),o.abrupt("return",void 0);case 14:if(!n.data.sources.find((function(e){return e.id!==t}))){o.next=16;break}throw r.formatMessage({defaultMessage:"That name is taken. Try another.",id:"wizard.nameTaken"});case 16:return o.abrupt("return",void 0);case 17:case"end":return o.stop()}}),_callee,null,[[4,10]])})));return function asyncValidator(t){return e.apply(this,arguments)}}(),M=!0,x=function setFirstValidated(e){return M=e},T=function getFirstValidated(){return M},S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{onlyResolvesLast:!1};return v(e,t,r)}(w),O=function asyncValidatorDebouncedWrapper(e){return T()?(x(!1),function(t,r){return t?w(t,r,e):void 0}):S},z=function compileAllSourcesComboOptions(e){return s(e.sort((function(e,t){return e.product_name.localeCompare(t.product_name)})).map((function(e){return{value:e.name,label:e.product_name}})))},D=function compileAllApplicationComboOptions(e,t){return[{label:t.formatMessage({id:"wizard.none",defaultMessage:"None"}),key:"none"}].concat(s(e.sort((function(e,t){return e.display_name.localeCompare(t.display_name)})).map((function(e){return{value:e.id,label:e.display_name}}))))},k=function appMutator(e){return function(t,r){if(!t.value)return t;var n=r.getState().values.source_type,a=e.find((function(e){return e.display_name===t.label})),o=!n||a.supported_source_types.includes(n);return _objectSpread({},t,{isDisabled:!o})}},A=function sourceTypeMutator(e,t){return function(r,n){var a=n.getState().values.application?n.getState().values.application.application_type_id:void 0,o=e.find((function(e){return e.id===a})),i=!o||o.supported_source_types.includes(t.find((function(e){return e.product_name===r.label})).name);return _objectSpread({},r,{isDisabled:!i})}},C=function iconMapper(e){return function(r){var n=e.find((function(e){return e.name===r}));if(!n||!n.icon_url)return null;return function Icon(){return t.createElement("img",{src:n.icon_url,alt:n.product_name,className:"ins-c-sources__wizard--icon"})}}},E=function nextStep(e){var t=e.values,r=t.application,n=t.source_type,a=r&&r.application_type_id;return a?"".concat(n,"-").concat(a):n},P=function typesStep(e,t,r,n){return{title:n.formatMessage({id:"wizard.chooseAppAndType",defaultMessage:"Application and source type"}),name:"types_step",nextStep:E,fields:[{component:"enhanced-select",name:"application.application_type_id",label:n.formatMessage({id:"wizard.selectYourApplication",defaultMessage:"A. Select application"}),options:D(t,n),mutator:k(t),description:n.formatMessage({id:"wizard.selectAppWarning",defaultMessage:"Selecting an application will limit the available source types. You can attach an application to this source using the dropdown below, or by clicking ‘Manage applications’ after source creation."}),isDisabled:r,placeholder:n.formatMessage({id:"wizard.chooseApp",defaultMessage:"Choose application"})},{component:"card-select",name:"source_type",isRequired:!0,label:n.formatMessage({id:"wizard.selectYourSourceType",defaultMessage:"B. Select source type"}),iconMapper:C(e),validate:[{type:i.REQUIRED}],options:z(e),mutator:A(t,e)},{component:"description",name:"fixasyncvalidation",Content:h}]}},R=function NameDescription(){var e=a();return(t.createElement(c,{key:"step1"},t.createElement(p,{component:u.p},e.formatMessage({id:"wizard.nameDescription",defaultMessage:"To import data for an application, you need to connect to a data source. Enter a name, then proceed to select your application and source type."}))))},I=function nameStep(e){return{title:e.formatMessage({id:"wizard.name",defaultMessage:"Name"}),name:"name_step",nextStep:"types_step",fields:[{component:"description",name:"description-summary",Content:R},{component:o.TEXT_FIELD,name:"source.name",type:"text",label:e.formatMessage({id:"wizard.name",defaultMessage:"Name"}),placeholder:"Source_1",isRequired:!0,validate:[function(t){return O(e)(t,void 0,e)},{type:i.REQUIRED}],resolveProps:j}]}},N=function SummaryDescription(){var e=a();return(t.createElement(c,null,t.createElement(p,{component:u.p},e.formatMessage({id:"wizard.summaryDescription",defaultMessage:"Review the information below and click Add to add your source. Use the Back button to make changes."}))))},F=function summaryStep(e,t,r){return{fields:[{component:"description",name:"description-summary",Content:N},{name:"summary",component:"summary",sourceTypes:e,applicationTypes:t}],name:"summary",title:r.formatMessage({id:"wizard.reviewDetails",defaultMessage:"Review details"})}};export default function(e,t,r,n,a){return x(!0),{fields:[{component:o.WIZARD,name:"wizard",title:d,inModal:!0,description:m,buttonLabels:{submit:a.formatMessage({id:"sources.add",defaultMessage:"Add"}),back:a.formatMessage({id:"wizard.back",defaultMessage:"Back"}),cancel:a.formatMessage({id:"wizard.cancel",defaultMessage:"Cancel"}),next:a.formatMessage({id:"wizard.next",defaultMessage:"Next"})},container:n,showTitles:!0,crossroads:["application.application_type_id","source_type","auth_select"],fields:[I(a),P(e,t,r,a)].concat(s(y(e,t)),[F(e,t,a)])}]}}export{R as NameDescription,N as SummaryDescription,k as appMutator,w as asyncValidator,S as asyncValidatorDebounced,O as asyncValidatorDebouncedWrapper,T as getFirstValidated,C as iconMapper,E as nextStep,x as setFirstValidated,A as sourceTypeMutator};
