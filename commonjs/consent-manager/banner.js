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
var react_emotion_1 = __importDefault(require('react-emotion'))
var font_styles_1 = __importDefault(require('./font-styles'))
var Root = react_emotion_1.default('div')(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        '\n  ',
        ';\n  position: relative;\n  padding: 8px;\n  background: ',
        ';\n  color: ',
        ';\n  text-align: center;\n  font-size: 12px;\n  line-height: 1.3;\n'
      ],
      [
        '\n  ',
        ';\n  position: relative;\n  padding: 8px;\n  background: ',
        ';\n  color: ',
        ';\n  text-align: center;\n  font-size: 12px;\n  line-height: 1.3;\n'
      ]
    )),
  font_styles_1.default,
  function(props) {
    return props.backgroundColor
  },
  function(props) {
    return props.textColor
  }
)
var Banner = /** @class */ (function(_super) {
  __extends(Banner, _super)
  function Banner() {
    return (_super !== null && _super.apply(this, arguments)) || this
  }
  Banner.prototype.render = function() {
    var _a = this.props,
      innerRef = _a.innerRef,
      content = _a.content,
      backgroundColor = _a.backgroundColor,
      textColor = _a.textColor
    return react_1.default.createElement(
      Root,
      { innerRef: innerRef, backgroundColor: backgroundColor, textColor: textColor },
      content
    )
  }
  Banner.displayName = 'Banner'
  return Banner
})(react_1.PureComponent)
exports.default = Banner
var templateObject_1
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnNlbnQtbWFuYWdlci9iYW5uZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQTRDO0FBQzVDLGdFQUFrQztBQUNsQyw4REFBc0M7QUFFdEMsSUFBTSxJQUFJLEdBQUcsdUJBQU0sQ0FBd0QsS0FBSyxDQUFDLDZOQUFBLE1BQzdFLEVBQVUsMkRBR0UsRUFBOEIsY0FDbkMsRUFBd0IscUVBSWxDLEtBUkcscUJBQVUsRUFHRSxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxlQUFlLEVBQXJCLENBQXFCLEVBQ25DLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLFNBQVMsRUFBZixDQUFlLENBSWxDLENBQUE7QUFZRDtJQUFvQywwQkFBb0I7SUFBeEQ7O0lBWUEsQ0FBQztJQVRDLHVCQUFNLEdBQU47UUFDUSxJQUFBLGVBQThELEVBQTVELHNCQUFRLEVBQUUsb0JBQU8sRUFBRSxvQ0FBZSxFQUFFLHdCQUF3QixDQUFBO1FBRXBFLE9BQU8sQ0FDTCw4QkFBQyxJQUFJLElBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxTQUFTLElBQzdFLE9BQU8sQ0FDSCxDQUNSLENBQUE7SUFDSCxDQUFDO0lBVk0sa0JBQVcsR0FBRyxRQUFRLENBQUE7SUFXL0IsYUFBQztDQUFBLEFBWkQsQ0FBb0MscUJBQWEsR0FZaEQ7a0JBWm9CLE1BQU0ifQ==
