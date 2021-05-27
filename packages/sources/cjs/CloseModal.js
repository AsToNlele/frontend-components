"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var React=require("react"),React__default=_interopDefault(React),Button_js=require("@patternfly/react-core/dist/js/components/Button/Button.js"),PropTypes=_interopDefault(require("prop-types")),reactIntl=require("react-intl"),Title_js=require("@patternfly/react-core/dist/js/components/Title/Title.js"),Modal_js=require("@patternfly/react-core/dist/js/components/Modal/Modal.js"),ExclamationTriangleIcon=_interopDefault(require("@patternfly/react-icons/dist/js/icons/exclamation-triangle-icon")),CloseModal=function CloseModal(e){var t=e.onExit,a=e.onStay,i=e.isOpen,l=e.title,r=e.exitTitle,o=e.stayTitle,s=e.description,n=reactIntl.useIntl();return React__default.createElement(Modal_js.Modal,{variant:"small",title:l,"aria-label":n.formatMessage({id:"wizard.closeAriaLabel",defaultMessage:"Close add source wizard"}),header:React__default.createElement(Title_js.Title,{headingLevel:"h1",size:"2xl"},React__default.createElement(ExclamationTriangleIcon,{size:"sm",className:"ins-c-source__warning-icon"}),l),isOpen:i,onClose:a,actions:[React__default.createElement(Button_js.Button,{key:"confirm",variant:"primary",id:"on-exit-button",onClick:t},r),React__default.createElement(Button_js.Button,{key:"cancel",variant:"link",id:"on-stay-button",onClick:a},o)]},s)};CloseModal.propTypes={onExit:PropTypes.func.isRequired,onStay:PropTypes.func.isRequired,isOpen:PropTypes.bool.isRequired,title:PropTypes.node,exitTitle:PropTypes.node,stayTitle:PropTypes.node,description:PropTypes.node},CloseModal.defaultProps={title:React__default.createElement(reactIntl.FormattedMessage,{id:"wizard.closeTitle",defaultMessage:"Exit source creation?"}),exitTitle:React__default.createElement(reactIntl.FormattedMessage,{id:"wizard.exitText",defaultMessage:"Exit"}),stayTitle:React__default.createElement(reactIntl.FormattedMessage,{id:"wizard.stayText",defaultMessage:"Stay"}),description:React__default.createElement(reactIntl.FormattedMessage,{id:"wizard.closeWarning",defaultMessage:"All inputs will be discarded."})},exports.default=CloseModal;
