/** Shopify CDN: Minification failed

Line 19:2 Transforming const to the configured target environment ("es5") is not supported yet
Line 20:2 Transforming const to the configured target environment ("es5") is not supported yet
Line 21:2 Transforming const to the configured target environment ("es5") is not supported yet
Line 25:0 Transforming const to the configured target environment ("es5") is not supported yet
Line 31:0 Transforming const to the configured target environment ("es5") is not supported yet
Line 33:4 Transforming const to the configured target environment ("es5") is not supported yet
Line 56:2 Transforming const to the configured target environment ("es5") is not supported yet

**/
function openChatSupport() {
  if (!window.fcWidget.isOpen()) {
    window.fcWidget.open();
  }
}

function getComparisonCompetitor(competitors) {
  const emmaWithCompetitor = location.pathname.replace('/pages/', '')
  const competitorParam = emmaWithCompetitor.replace('emma-vs-', '')
  const competitor = competitors.find(c => c.brandName.toLowerCase().split(' ').join('-') === competitorParam)
  return competitor ?? competitors.find(c => c.brandName.toLowerCase().split(' ').join('-') === 'casper')
}

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0
});

const Currency = {
  format: (val, options) => {
    const defaultOptions = {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }

    return new Intl.NumberFormat('en-US', {
      ...defaultOptions,
      ...options
    }).format(val)
  }
}


function isFunction(obj) {
  return !!(obj && obj.constructor && obj.call && obj.apply);
}

function isNumber(n) {
  return typeof n === 'number' && isFinite(n);
}

function waitUntil(conditionFunction) {
  const poll = resolve => {
    if (conditionFunction()) resolve();
    else setTimeout(_ => poll(resolve), 400);
  }

  return new Promise(poll);
}
