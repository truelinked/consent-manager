import EventEmitter from 'events'
import React from 'react'
import Banner from './banner'
import PreferenceDialog from './preference-dialog'
import CancelDialog from './cancel-dialog'
import { ADVERTISING_CATEGORIES, FUNCTIONAL_CATEGORIES } from './categories'
var emitter = new EventEmitter()
export function openDialog() {
  emitter.emit('openDialog')
}
function normalizeDestinations(destinations) {
  var marketingDestinations = []
  var advertisingDestinations = []
  var functionalDestinations = []
  var _loop_1 = function(destination) {
    if (
      ADVERTISING_CATEGORIES.find(function(c) {
        return c === destination.category
      })
    ) {
      advertisingDestinations.push(destination)
    } else if (
      FUNCTIONAL_CATEGORIES.find(function(c) {
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
  var _a = React.useState(
      false || (props.workspaceAddedNewDestinations && props.defaultDestinationBehavior === 'ask')
    ),
    isDialogOpen = _a[0],
    toggleDialog = _a[1]
  var showBanner = true
  var _b = React.useState(false),
    isCancelling = _b[0],
    toggleCancel = _b[1]
  var banner = React.useRef(null)
  var preferenceDialog = React.useRef(null)
  var cancelDialog = React.useRef(null)
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
  React.useEffect(
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
  React.useEffect(
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
  React.useEffect(function() {
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
  return React.createElement(
    'div',
    null,
    (showBannerContent || props.showConsentByChoice) &&
      React.createElement(Banner, {
        innerRef: function(current) {
          return (banner = { current: current })
        },
        content: props.bannerContent,
        textColor: props.bannerTextColor,
        backgroundColor: props.bannerBackgroundColor
      }),
    isDialogOpen &&
      React.createElement(PreferenceDialog, {
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
        functional: props.preferences.functional,
        title: props.preferencesDialogTitle,
        content: props.preferencesDialogContent,
        disableChooseNo: props.disableChooseNo
      }),
    isCancelling &&
      React.createElement(CancelDialog, {
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
export default Container
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnNlbnQtbWFuYWdlci9jb250YWluZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sWUFBWSxNQUFNLFFBQVEsQ0FBQTtBQUNqQyxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUE7QUFDekIsT0FBTyxNQUFNLE1BQU0sVUFBVSxDQUFBO0FBQzdCLE9BQU8sZ0JBQWdCLE1BQU0scUJBQXFCLENBQUE7QUFDbEQsT0FBTyxZQUFZLE1BQU0saUJBQWlCLENBQUE7QUFDMUMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sY0FBYyxDQUFBO0FBUTVFLElBQU0sT0FBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7QUFDbEMsTUFBTSxVQUFVLFVBQVU7SUFDeEIsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtBQUM1QixDQUFDO0FBdUNELFNBQVMscUJBQXFCLENBQUMsWUFBMkI7SUFDeEQsSUFBTSxxQkFBcUIsR0FBa0IsRUFBRSxDQUFBO0lBQy9DLElBQU0sdUJBQXVCLEdBQWtCLEVBQUUsQ0FBQTtJQUNqRCxJQUFNLHNCQUFzQixHQUFrQixFQUFFLENBQUE7NEJBRXJDLFdBQVc7UUFDcEIsSUFBSSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEtBQUssV0FBVyxDQUFDLFFBQVEsRUFBMUIsQ0FBMEIsQ0FBQyxFQUFFO1lBQ2hFLHVCQUF1QixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtTQUMxQzthQUFNLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxLQUFLLFdBQVcsQ0FBQyxRQUFRLEVBQTFCLENBQTBCLENBQUMsRUFBRTtZQUN0RSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7U0FDekM7YUFB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
