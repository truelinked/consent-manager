'use strict'
var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, 'raw', { value: raw })
    } else {
      cooked.raw = raw
    }
    return cooked
  }
var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics = function(d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(d, b) {
            d.__proto__ = b
          }) ||
        function(d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]
        }
      return extendStatics(d, b)
    }
    return function(d, b) {
      extendStatics(d, b)
      function __() {
        this.constructor = d
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __())
    }
  })()
var __importStar =
  (this && this.__importStar) ||
  function(mod) {
    if (mod && mod.__esModule) return mod
    var result = {}
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k]
    result['default'] = mod
    return result
  }
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
var react_1 = __importStar(require('react'))
var react_emotion_1 = __importStar(require('react-emotion'))
var dialog_1 = __importDefault(require('./dialog'))
var buttons_1 = require('./buttons')
var hideOnMobile = react_emotion_1.css(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      ['\n  @media (max-width: 600px) {\n    display: none;\n  }\n'],
      ['\n  @media (max-width: 600px) {\n    display: none;\n  }\n']
    ))
)
var TableScroll = react_emotion_1.default('div')(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      ['\n  overflow-x: auto;\n  margin-top: 16px;\n'],
      ['\n  overflow-x: auto;\n  margin-top: 16px;\n']
    ))
)
var Table = react_emotion_1.default('table')(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      ['\n  border-collapse: collapse;\n  font-size: 12px;\n'],
      ['\n  border-collapse: collapse;\n  font-size: 12px;\n']
    ))
)
var ColumnHeading = react_emotion_1.default('th')(
  templateObject_4 ||
    (templateObject_4 = __makeTemplateObject(
      [
        '\n  background: #f7f8fa;\n  color: #1f4160;\n  font-weight: 600;\n  text-align: left;\n  border-width: 2px;\n'
      ],
      [
        '\n  background: #f7f8fa;\n  color: #1f4160;\n  font-weight: 600;\n  text-align: left;\n  border-width: 2px;\n'
      ]
    ))
)
var RowHeading = react_emotion_1.default('th')(
  templateObject_5 ||
    (templateObject_5 = __makeTemplateObject(
      ['\n  font-weight: normal;\n  text-align: left;\n'],
      ['\n  font-weight: normal;\n  text-align: left;\n']
    ))
)
var Row = react_emotion_1.default('tr')(
  templateObject_6 ||
    (templateObject_6 = __makeTemplateObject(
      [
        '\n  th,\n  td {\n    vertical-align: top;\n    padding: 8px 12px;\n    border: 1px solid rgba(67, 90, 111, 0.114);\n  }\n  td {\n    border-top: none;\n  }\n'
      ],
      [
        '\n  th,\n  td {\n    vertical-align: top;\n    padding: 8px 12px;\n    border: 1px solid rgba(67, 90, 111, 0.114);\n  }\n  td {\n    border-top: none;\n  }\n'
      ]
    ))
)
var InputCell = react_emotion_1.default('td')(
  templateObject_7 ||
    (templateObject_7 = __makeTemplateObject(
      [
        '\n  input {\n    vertical-align: middle;\n  }\n  label {\n    display: block;\n    margin-bottom: 4px;\n    white-space: nowrap;\n  }\n'
      ],
      [
        '\n  input {\n    vertical-align: middle;\n  }\n  label {\n    display: block;\n    margin-bottom: 4px;\n    white-space: nowrap;\n  }\n'
      ]
    ))
)
var PreferenceDialog = /** @class */ (function(_super) {
  __extends(PreferenceDialog, _super)
  function PreferenceDialog() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this
    _this.handleChange = function(e) {
      var onChange = _this.props.onChange
      onChange(e.target.name, e.target.value === 'true')
    }
    _this.handleSubmit = function(e) {
      var _a = _this.props,
        onSave = _a.onSave,
        preferences = _a.preferences,
        marketingAndAnalytics = _a.marketingAndAnalytics,
        functional = _a.functional,
        customCategories = _a.customCategories
      e.preventDefault()
      // Safe guard against browsers that don't prevent the
      // submission of invalid forms (Safari < 10.1)
      if (!customCategories && (marketingAndAnalytics === null || functional === null)) {
        return
      }
      // Safe guard against custom categories being null
      if (
        customCategories &&
        Object.keys(customCategories).some(function(category) {
          return preferences[category] === null
        })
      ) {
        return
      }
      onSave()
    }
    return _this
  }
  PreferenceDialog.prototype.render = function() {
    var _this = this
    var _a = this.props,
      innerRef = _a.innerRef,
      onCancel = _a.onCancel,
      marketingDestinations = _a.marketingDestinations,
      functionalDestinations = _a.functionalDestinations,
      marketingAndAnalytics = _a.marketingAndAnalytics,
      functional = _a.functional,
      customCategories = _a.customCategories,
      destinations = _a.destinations,
      title = _a.title,
      content = _a.content,
      preferences = _a.preferences,
      disableChooseNo = _a.disableChooseNo
    var buttons = react_1.default.createElement(
      'div',
      null,
      react_1.default.createElement(
        buttons_1.DefaultButton,
        { type: 'button', onClick: onCancel },
        'Cancel'
      ),
      react_1.default.createElement(buttons_1.GreenButton, { type: 'submit' }, 'Save')
    )
    return react_1.default.createElement(
      dialog_1.default,
      {
        innerRef: innerRef,
        title: title,
        buttons: buttons,
        onCancel: onCancel,
        onSubmit: this.handleSubmit
      },
      content,
      react_1.default.createElement(
        TableScroll,
        null,
        react_1.default.createElement(
          Table,
          null,
          react_1.default.createElement(
            'thead',
            null,
            react_1.default.createElement(
              Row,
              null,
              react_1.default.createElement(ColumnHeading, { scope: 'col' }, 'Allow'),
              react_1.default.createElement(ColumnHeading, { scope: 'col' }, 'Category'),
              react_1.default.createElement(ColumnHeading, { scope: 'col' }, 'Purpose'),
              react_1.default.createElement(
                ColumnHeading,
                { scope: 'col', className: hideOnMobile },
                'Tools'
              )
            )
          ),
          react_1.default.createElement(
            'tbody',
            null,
            !customCategories &&
              react_1.default.createElement(
                react_1.default.Fragment,
                null,
                react_1.default.createElement(
                  Row,
                  null,
                  react_1.default.createElement(
                    InputCell,
                    null,
                    react_1.default.createElement(
                      'label',
                      null,
                      react_1.default.createElement('input', {
                        type: 'radio',
                        name: 'functional',
                        value: 'true',
                        checked: functional !== false,
                        onChange: this.handleChange,
                        'aria-label': 'Allow functional tracking',
                        required: true
                      }),
                      ' ',
                      'Yes'
                    ),
                    react_1.default.createElement(
                      'label',
                      null,
                      react_1.default.createElement('input', {
                        type: 'radio',
                        name: 'functional',
                        value: 'false',
                        checked: functional === false,
                        onChange: this.handleChange,
                        'aria-label': 'Disallow functional tracking',
                        required: true,
                        disabled: disableChooseNo
                      }),
                      ' ',
                      'No'
                    )
                  ),
                  react_1.default.createElement(RowHeading, { scope: 'row' }, 'Functional'),
                  react_1.default.createElement(
                    'td',
                    null,
                    react_1.default.createElement(
                      'p',
                      null,
                      'To monitor the performance of our site and to enhance your browsing experience.'
                    ),
                    react_1.default.createElement(
                      'p',
                      { className: hideOnMobile },
                      'For example, these tools enable you to communicate with us via live chat.'
                    )
                  ),
                  react_1.default.createElement(
                    'td',
                    { className: hideOnMobile },
                    functionalDestinations
                      .map(function(d) {
                        return d.name
                      })
                      .join(', ')
                  )
                ),
                react_1.default.createElement(
                  Row,
                  null,
                  react_1.default.createElement(
                    InputCell,
                    null,
                    react_1.default.createElement(
                      'label',
                      null,
                      react_1.default.createElement('input', {
                        type: 'radio',
                        name: 'marketingAndAnalytics',
                        value: 'true',
                        checked: marketingAndAnalytics !== false,
                        onChange: this.handleChange,
                        'aria-label': 'Allow marketing and analytics tracking',
                        required: true
                      }),
                      ' ',
                      'Yes'
                    ),
                    react_1.default.createElement(
                      'label',
                      null,
                      react_1.default.createElement('input', {
                        type: 'radio',
                        name: 'marketingAndAnalytics',
                        value: 'false',
                        checked: marketingAndAnalytics === false,
                        onChange: this.handleChange,
                        'aria-label': 'Disallow marketing and analytics tracking',
                        required: true,
                        disabled: disableChooseNo
                      }),
                      ' ',
                      'No'
                    )
                  ),
                  react_1.default.createElement(
                    RowHeading,
                    { scope: 'row' },
                    'Marketing and Analytics'
                  ),
                  react_1.default.createElement(
                    'td',
                    null,
                    react_1.default.createElement(
                      'p',
                      null,
                      'To understand user behavior in order to provide you with a more relevant browsing experience or personalize the content on our site.'
                    ),
                    react_1.default.createElement(
                      'p',
                      { className: hideOnMobile },
                      'For example, we collect information about which pages you visit to help us present more relevant information.'
                    )
                  ),
                  react_1.default.createElement(
                    'td',
                    { className: hideOnMobile },
                    marketingDestinations
                      .map(function(d) {
                        return d.name
                      })
                      .join(', ')
                  )
                )
              ),
            customCategories &&
              Object.entries(customCategories).map(function(_a) {
                var categoryName = _a[0],
                  _b = _a[1],
                  integrations = _b.integrations,
                  purpose = _b.purpose
                return react_1.default.createElement(
                  Row,
                  { key: categoryName },
                  react_1.default.createElement(
                    InputCell,
                    null,
                    react_1.default.createElement(
                      'label',
                      null,
                      react_1.default.createElement('input', {
                        type: 'radio',
                        name: categoryName,
                        value: 'true',
                        checked: preferences[categoryName] !== false,
                        onChange: _this.handleChange,
                        'aria-label': 'Allow "' + categoryName + '" tracking',
                        required: true
                      }),
                      ' ',
                      'Yes'
                    ),
                    react_1.default.createElement(
                      'label',
                      null,
                      react_1.default.createElement('input', {
                        type: 'radio',
                        name: categoryName,
                        value: 'false',
                        checked: preferences[categoryName] === false,
                        onChange: _this.handleChange,
                        'aria-label': 'Disallow "' + categoryName + '" tracking',
                        required: true,
                        disabled: disableChooseNo
                      }),
                      ' ',
                      'No'
                    )
                  ),
                  react_1.default.createElement(RowHeading, { scope: 'row' }, categoryName),
                  react_1.default.createElement(
                    'td',
                    null,
                    react_1.default.createElement('p', null, purpose)
                  ),
                  react_1.default.createElement(
                    'td',
                    { className: hideOnMobile },
                    destinations
                      .filter(function(d) {
                        return integrations.includes(d.id)
                      })
                      .map(function(d) {
                        return d.name
                      })
                      .join(', ')
                  )
                )
              }),
            react_1.default.createElement(
              Row,
              null,
              react_1.default.createElement('td', null, 'N/A'),
              react_1.default.createElement(RowHeading, { scope: 'row' }, 'Essential'),
              react_1.default.createElement(
                'td',
                null,
                react_1.default.createElement(
                  'p',
                  null,
                  'We use browser cookies that are necessary for the site to work as intended.'
                ),
                react_1.default.createElement(
                  'p',
                  null,
                  'For example, we store your website data collection preferences so we can honor them if you return to our site. You can disable these cookies in your browser settings but if you do the site may not work as intended.'
                )
              ),
              react_1.default.createElement('td', { className: hideOnMobile })
            )
          )
        )
      )
    )
  }
  PreferenceDialog.displayName = 'PreferenceDialog'
  PreferenceDialog.defaultProps = {
    marketingAndAnalytics: null,
    functional: null
  }
  return PreferenceDialog
})(react_1.PureComponent)
exports.default = PreferenceDialog
var templateObject_1,
  templateObject_2,
  templateObject_3,
  templateObject_4,
  templateObject_5,
  templateObject_6,
  templateObject_7
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZmVyZW5jZS1kaWFsb2cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uc2VudC1tYW5hZ2VyL3ByZWZlcmVuY2UtZGlhbG9nLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUE0QztBQUM1Qyw2REFBMkM7QUFDM0Msb0RBQTZCO0FBQzdCLHFDQUFzRDtBQUd0RCxJQUFNLFlBQVksR0FBRyxtQkFBRywrSEFBQSw0REFJdkIsSUFBQSxDQUFBO0FBRUQsSUFBTSxXQUFXLEdBQUcsdUJBQU0sQ0FBQyxLQUFLLENBQUMsaUhBQUEsOENBR2hDLElBQUEsQ0FBQTtBQUVELElBQU0sS0FBSyxHQUFHLHVCQUFNLENBQUMsT0FBTyxDQUFDLHlIQUFBLHNEQUc1QixJQUFBLENBQUE7QUFFRCxJQUFNLGFBQWEsR0FBRyx1QkFBTSxDQUFDLElBQUksQ0FBQyxrTEFBQSwrR0FNakMsSUFBQSxDQUFBO0FBRUQsSUFBTSxVQUFVLEdBQUcsdUJBQU0sQ0FBQyxJQUFJLENBQUMsb0hBQUEsaURBRzlCLElBQUEsQ0FBQTtBQUVELElBQU0sR0FBRyxHQUFHLHVCQUFNLENBQUMsSUFBSSxDQUFDLGtPQUFBLCtKQVV2QixJQUFBLENBQUE7QUFFRCxJQUFNLFNBQVMsR0FBRyx1QkFBTSxDQUFDLElBQUksQ0FBQyw0TUFBQSx5SUFTN0IsSUFBQSxDQUFBO0FBb0JEO0lBQThDLG9DQUF3QztJQUF0RjtRQUFBLHFFQW1QQztRQWhDQyxrQkFBWSxHQUFHLFVBQUEsQ0FBQztZQUNOLElBQUEsK0JBQVEsQ0FBZTtZQUMvQixRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLENBQUE7UUFDcEQsQ0FBQyxDQUFBO1FBRUQsa0JBQVksR0FBRyxVQUFDLENBQW1DO1lBQzNDLElBQUEsZ0JBTVEsRUFMWixr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
