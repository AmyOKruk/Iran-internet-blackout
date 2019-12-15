/* global L */
import * as d3 from 'd3'

const map = L.map('mapid').setView([65.59333, -148.3916], 3)

L.tileLayer(
  // 'https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}',
  // {
  //   attribution:
  //     'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  //   subdomains: 'abcd',
  //   minZoom: 1,
  //   maxZoom: 16,
  //   ext: 'png'
  // }

  'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
  {
    maxZoom: 18,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }
).addTo(map)

const markers = L.markerClusterGroup()

d3.csv(require('../data/dams.csv')).then(ready)

function ready(datapoints) {
  console.log('Data read in:', datapoints)

  datapoints.forEach(function(d) {
    // console.log('I need dams', d.dam_name)
    const name = d.dam_name
    const lat = d.longitude
    const long = d.latitude

    const marker = L.marker([long, lat]).bindPopup(name)
    // marker.bindPopup(name) // .openPopup()
    markers.addLayer(marker)
  })

  map.addLayer(markers)
  map.fitBounds(markers.getBounds())

  const nested = d3
    .nest()
    .key(d => d.state)
    .key(d => d.county)
    .entries(datapoints)

  // console.log(nested)

  d3.select('#state-select')
    .on('change', function() {
      const selected = d3.select(this).property('value')
      console.log('selected is', selected)

      const county = nested.find(d => d.key === selected)
      console.log('county is', county.values)

      d3.select('#county-select')
        .selectAll('option')
        .remove()

      d3.select('#county-select')
        .selectAll('option')
        .data(county.values)
        .enter()
        .append('option')
        .attr('value', d => d.key)
        .text(d => d.key)
    })
    .selectAll('option')
    .data(nested)
    .enter()
    .append('option')
    .attr('value', d => d.key)
    .text(d => d.key)

  d3.select('#county-select').on('change', function() {
    const selected = d3.select(this).property('value')
    markers.clearLayers()
    datapoints.forEach(function(d) {
      // console.log('hey, hey', selected)
      const place = d.county

      if (selected === place) {
        console.log('oh ya', place)
        const name = d.dam_name
        const lat = d.longitude
        const long = d.latitude

        const marker = L.marker([long, lat]).bindPopup(name)
        // marker.bindPopup(name) // .openPopup()
        markers.addLayer(marker)
      }
      map.addLayer(markers)
    })
    map.fitBounds(markers.getBounds())
  })
}
