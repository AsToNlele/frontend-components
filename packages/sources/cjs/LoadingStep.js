"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var React=require("react"),React__default=_interopDefault(React),Button_js=require("@patternfly/react-core/dist/js/components/Button/Button.js"),PropTypes=_interopDefault(require("prop-types")),reactIntl=require("react-intl"),Bullseye_js=require("@patternfly/react-core/dist/js/layouts/Bullseye/Bullseye.js"),Spinner_js=require("@patternfly/react-core/dist/js/components/Spinner/Spinner.js"),EmptyState_js=require("@patternfly/react-core/dist/js/components/EmptyState/EmptyState.js"),EmptyStateSecondaryActions_js=require("@patternfly/react-core/dist/js/components/EmptyState/EmptyStateSecondaryActions.js"),EmptyStateIcon_js=require("@patternfly/react-core/dist/js/components/EmptyState/EmptyStateIcon.js"),Title_js=require("@patternfly/react-core/dist/js/components/Title/Title.js"),LoadingStep=function LoadingStep(e){var t=e.onClose,a=e.customText,n=e.cancelTitle;return(React__default.createElement(Bullseye_js.Bullseye,null,React__default.createElement(EmptyState_js.EmptyState,{variant:EmptyState_js.EmptyStateVariant.full,className:"pf-u-mt-4xl"},React__default.createElement(EmptyStateIcon_js.EmptyStateIcon,{icon:Spinner_js.Spinner,className:"pf-u-mb-0"}),React__default.createElement(Title_js.Title,{headingLevel:"h2",size:"xl",className:"pf-u-mt-xl"},a),t&&React__default.createElement(EmptyStateSecondaryActions_js.EmptyStateSecondaryActions,{className:"pf-u-mt-xl"},React__default.createElement(Button_js.Button,{variant:"link",onClick:t},n)))))};LoadingStep.propTypes={onClose:PropTypes.func,customText:PropTypes.node,cancelTitle:PropTypes.node},LoadingStep.defaultProps={customText:React__default.createElement(reactIntl.FormattedMessage,{id:"wizard.loadingText",defaultMessage:"Loading, please wait."}),cancelTitle:React__default.createElement(reactIntl.FormattedMessage,{id:"wizard.cancelText",defaultMessage:"Cancel"})},exports.default=LoadingStep;
