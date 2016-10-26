# Ember-leaflet-marker-cluster

Provides Beautiful Animated Marker Clustering functionality for [Ember-Leaflet](http://ember-leaflet.com), an Ember Addon for [Leaflet](http://leafletjs.com) interactive maps.

This plugin is based on a JS library [Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster) and basically wraps it into ember component for usage in HTMLbars templates.

## Installation

* `ember install ember-leaflet-marker-cluster`

## Using the plugin

Please be advised that for some particular reason Leaflet Marker Cluster breaks if the component loads with some markers inside the marker cluster in place without `maxZoom` property provided on `{{leaflet-map}}` like so: `{{leaflet-map maxZoom=25}}`.

```handlebars
{{#leaflet-map lat=lat lng=lng zoom=zoom}}

  {{tile-layer url="http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"}}
  {{#marker-cluster-layer}}
	  {{#each markers as |marker|}}
	    {{#marker-layer location=marker.location}}
        {{#popup-layer}}
  			  <h3>{{marker.title}}</h3>
  			  {{marker.description}}
        {{/popup-layer}}
			{{/marker-layer}}
	  {{/each}}
  {{/marker-cluster-layer}}
{{/leaflet-map}}
```

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
