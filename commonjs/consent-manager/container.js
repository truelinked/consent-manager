'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
var events_1 = __importDefault(require('events'))
var react_1 = __importDefault(require('react'))
var banner_1 = __importDefault(require('./banner'))
var preference_dialog_1 = __importDefault(require('./preference-dialog'))
var cancel_dialog_1 = __importDefault(require('./cancel-dialog'))
var categories_1 = require('./categories')
var emitter = new events_1.default()
function openDialog() {
  emitter.emit('openDialog')
}
exports.openDialog = openDialog
function normalizeDestinations(destinations) {
  var marketingDestinations = []
  var advertisingDestinations = []
  var functionalDestinations = []
  var _loop_1 = function(destination) {
    if (
      categories_1.ADVERTISING_CATEGORIES.find(function(c) {
        return c === destination.category
      })
    ) {
      advertisingDestinations.push(destination)
    } else if (
      categories_1.FUNCTIONAL_CATEGORIES.find(function(c) {
        return c === destination.category
      })
    ) {
      functionalDestinations.push(destination)
    } else {
      // Fallback to marketing
      marketingDestinations.push(destination)
    }
  }
  for (var _i = 0, destinations_1 = destinations; _i < destinations_1.length; _i++) {
    var destination = destinations_1[_i]
    _loop_1(destination)
  }
  return {
    marketingDestinations: marketingDestinations,
    advertisingDestinations: advertisingDestinations,
    functionalDestinations: functionalDestinations
  }
}
var Container = function(props) {
  var _a = react_1.default.useState(
      false || (props.workspaceAddedNewDestinations && props.defaultDestinationBehavior === 'ask')
    ),
    isDialogOpen = _a[0],
    toggleDialog = _a[1]
  var showBanner = true
  var _b = react_1.default.useState(false),
    isCancelling = _b[0],
    toggleCancel = _b[1]
  var banner = react_1.default.useRef(null)
  var preferenceDialog = react_1.default.useRef(null)
  var cancelDialog = react_1.default.useRef(null)
  var _c = normalizeDestinations(props.destinations),
    marketingDestinations = _c.marketingDestinations,
    advertisingDestinations = _c.advertisingDestinations,
    functionalDestinations = _c.functionalDestinations
  var handleBodyClick = function(e) {
    // Do nothing if no new implicit consent needs to be saved
    if (
      !props.isConsentRequired ||
      !props.implyConsentOnInteraction ||
      props.newDestinations.length === 0
    ) {
      return
    }
    // Ignore propogated clicks from inside the consent manager
    if (
      (banner.current && banner.current.contains(e.target)) ||
      (preferenceDialog.current && preferenceDialog.current.contains(e.target)) ||
      (cancelDialog.current && cancelDialog.current.contains(e.target))
    ) {
      return
    }
    props.saveConsent(undefined, false)
  }
  var showDialog = function() {
    return toggleDialog(true)
  }
  react_1.default.useEffect(
    function() {
      if (props.allowAll) {
        var truePreferences = Object.keys(props.preferences).reduce(function(acc, category) {
          acc[category] = true
          return acc
        }, {})
        props.setPreferences(truePreferences)
        props.saveConsent()
      }
    },
    [props.allowAll]
  )
  react_1.default.useEffect(
    function() {
      if (props.denyAll) {
        var falsePreferences = Object.keys(props.preferences).reduce(function(acc, category) {
          acc[category] = false
          return acc
        }, {})
        props.setPreferences(falsePreferences)
        props.saveConsent()
      }
    },
    [props.denyAll]
  )
  react_1.default.useEffect(function() {
    emitter.on('openDialog', showDialog)
    if (props.isConsentRequired && props.implyConsentOnInteraction) {
      document.body.addEventListener('click', handleBodyClick, false)
    }
    return function() {
      emitter.removeListener('openDialog', showDialog)
      document.body.removeEventListener('click', handleBodyClick, false)
    }
  })
  var handleCategoryChange = function(category, value) {
    var _a
    props.setPreferences(((_a = {}), (_a[category] = value), _a))
  }
  var handleSave = function() {
    toggleDialog(false)
    props.saveConsent()
  }
  var handleCancel = function() {
    toggleDialog(false)
    // Only show the cancel confirmation if there's unconsented destinations
    if (props.newDestinations.length > 0) {
      toggleCancel(true)
    } else {
      props.resetPreferences()
    }
  }
  var handleCancelBack = function() {
    toggleDialog(true)
    toggleCancel(false)
  }
  var handleCancelConfirm = function() {
    toggleCancel(false)
    props.resetPreferences()
  }
  var showBannerContent = showBanner && props.isConsentRequired && props.newDestinations.length > 0
  return react_1.default.createElement(
    'div',
    null,
    (showBannerContent || props.showConsentByChoice) &&
      react_1.default.createElement(banner_1.default, {
        innerRef: function(current) {
          return (banner = { current: current })
        },
        content: props.bannerContent,
        textColor: props.bannerTextColor,
        backgroundColor: props.bannerBackgroundColor
      }),
    isDialogOpen &&
      react_1.default.createElement(preference_dialog_1.default, {
        customCategories: props.customCategories,
        destinations: props.destinations,
        preferences: props.preferences,
        innerRef: function(current) {
          return (preferenceDialog = { current: current })
        },
        onCancel: handleCancel,
        onSave: handleSave,
        onChange: handleCategoryChange,
        marketingDestinations: marketingDestinations,
        advertisingDestinations: advertisingDestinations,
        functionalDestinations: functionalDestinations,
        marketingAndAnalytics: props.preferences.marketingAndAnalytics,
        advertising: props.preferences.advertising,
        functional: props.preferences.functional,
        title: props.preferencesDialogTitle,
        content: props.preferencesDialogContent,
        disableChooseNo: props.disableChooseNo
      }),
    isCancelling &&
      react_1.default.createElement(cancel_dialog_1.default, {
        innerRef: function(current) {
          return (cancelDialog = { current: current })
        },
        onBack: handleCancelBack,
        onConfirm: handleCancelConfirm,
        title: props.cancelDialogTitle,
        content: props.cancelDialogContent
      })
  )
}
exports.default = Container
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnNlbnQtbWFuYWdlci9jb250YWluZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0RBQWlDO0FBQ2pDLGdEQUF5QjtBQUN6QixvREFBNkI7QUFDN0IsMEVBQWtEO0FBQ2xELGtFQUEwQztBQUMxQywyQ0FBNEU7QUFRNUUsSUFBTSxPQUFPLEdBQUcsSUFBSSxnQkFBWSxFQUFFLENBQUE7QUFDbEMsU0FBZ0IsVUFBVTtJQUN4QixPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO0FBQzVCLENBQUM7QUFGRCxnQ0FFQztBQXVDRCxTQUFTLHFCQUFxQixDQUFDLFlBQTJCO0lBQ3hELElBQU0scUJBQXFCLEdBQWtCLEVBQUUsQ0FBQTtJQUMvQyxJQUFNLHVCQUF1QixHQUFrQixFQUFFLENBQUE7SUFDakQsSUFBTSxzQkFBc0IsR0FBa0IsRUFBRSxDQUFBOzRCQUVyQyxXQUFXO1FBQ3BCLElBQUksbUNBQXNCLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxLQUFLLFdBQVcsQ0FBQyxRQUFRLEVBQTFCLENBQTBCLENBQUMsRUFBRTtZQUNoRSx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7U0FDMUM7YUFBTSxJQUFJLGtDQUFxQixDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxXQUFXLENBQUMsUUFBUSxFQUExQixDQUEwQixDQUFDLEVBQUU7WUFDdEUsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1NBQ3pDO2FBQU07WUFDTCx3QkFBd0I7WUFDeEIscUJBQXFCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1NBQ3hDOztJQVJILEtBQTBCLFVBQVksRUFBWiw2QkFBWSxFQUFaLDBCQUFZLEVBQVosSUFBWTtRQUFqQyxJQUFNLFdB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
