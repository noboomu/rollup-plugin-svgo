const defaults = {
  plugins: [{
    removeViewBox: false
  }, {
    removeDimensions: true
  }]
}

const svgo = require('svgo')(defaults);

module.exports = function svg(options) {
   

  return {
    name: 'svgo',
    transform: (code, id) => {
      if (id.endsWith('.svg')) {
        return svgo.optimize(code, { path: id }).then(result => ({
          map: { mappings: '' },
          code: 'export default ' + JSON.stringify(result.data)
        }))
      }
    }
  }
}
