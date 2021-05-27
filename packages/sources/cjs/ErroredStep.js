"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var React=require("react"),React__default=_interopDefault(React),Button_js=require("@patternfly/react-core/dist/js/components/Button/Button.js"),PropTypes=_interopDefault(require("prop-types")),reactIntl=require("react-intl"),Bullseye_js=require("@patternfly/react-core/dist/js/layouts/Bullseye/Bullseye.js"),EmptyState_js=require("@patternfly/react-core/dist/js/components/EmptyState/EmptyState.js"),EmptyStateSecondaryActions_js=require("@patternfly/react-core/dist/js/components/EmptyState/EmptyStateSecondaryActions.js"),EmptyStateIcon_js=require("@patternfly/react-core/dist/js/components/EmptyState/EmptyStateIcon.js"),Title_js=require("@patternfly/react-core/dist/js/components/Title/Title.js"),EmptyStateBody_js=require("@patternfly/react-core/dist/js/components/EmptyState/EmptyStateBody.js"),ExclamationCircleIcon=_interopDefault(require("@patternfly/react-icons/dist/js/icons/exclamation-circle-icon")),ErroredStep=function ErroredStep(e){var t=e.onClose,r=e.returnButtonTitle,a=e.message,o=e.title,s=e.customText,n=e.primaryAction,c=e.secondaryActions,l=e.Component;return(React__default.createElement(Bullseye_js.Bullseye,null,React__default.createElement(EmptyState_js.EmptyState,{variant:EmptyState_js.EmptyStateVariant.full,className:"pf-u-mt-4xl"},React__default.createElement(EmptyStateIcon_js.EmptyStateIcon,{icon:ExclamationCircleIcon,color:"var(--pf-global--danger-color--100)",className:"pf-u-mb-0"}),React__default.createElement(Title_js.Title,{headingLevel:"h2",size:"xl",className:"pf-u-mt-xl"},o),React__default.createElement(EmptyStateBody_js.EmptyStateBody,{className:"ins-c-sources__wizard--step-text"},a||s),React__default.createElement(l,{variant:"primary",onClick:n||t},r),c&&React__default.createElement(EmptyStateSecondaryActions_js.EmptyStateSecondaryActions,{className:"pf-u-mt-sm"},c))))};ErroredStep.propTypes={onClose:PropTypes.func.isRequired,returnButtonTitle:PropTypes.node,message:PropTypes.node,title:PropTypes.node,customText:PropTypes.node,primaryAction:PropTypes.func,secondaryActions:PropTypes.node,Component:PropTypes.elementType},ErroredStep.defaultProps={title:React__default.createElement(reactIntl.FormattedMessage,{id:"wizard.unsuccConfiguration",defaultMessage:"Something went wrong"}),customText:React__default.createElement(reactIntl.FormattedMessage,{id:"wizard.errorText",defaultMessage:"There was a problem while trying to add your source. Please try again. If the error persists, open a support case."}),Component:Button_js.Button},exports.default=ErroredStep;
