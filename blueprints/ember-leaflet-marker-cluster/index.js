/*jshint node:true*/
module.exports = {
  description: 'pull leaflet.markercluster assets using bower',

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  normalizeEntityName: function() {
   // this prevents an error when the entityName is
   // not specified (since that doesn't actually matter
   // to us
  },

  afterInstall: function(options) {
   return this.addBowerPackageToProject('leaflet.markercluster', '~0.5.0');
  }
};
