import * as d3 from 'd3'

const margin = { top: 30, left: 40, right: 40, bottom: 30 }

const height = 150 - margin.top - margin.bottom

const width = 150 - margin.left - margin.right

const container = d3.select('#chart-02')

// Create our scales
const xPositionScale = d3
  .scaleLinear()
  .domain([2000, 2019])
  .range([0, width])

const yPositionScale = d3
  .scaleLinear()
  .domain([0.0, 1.0])
  .range([height, 0])

// Create a line generator
// This explains how to compute
// the points that make up the line

// const line = d3
//   .area()
//   .x(d => {
//     return xPositionScale(d.year)
//   })
//   .y0(height)
//   .y1(d => {
//     return yPositionScale(d.users)
//   })

const line2 = d3
  .line()
  .x(function(d) {
    return xPositionScale(d.year)
  }) // set the x values for the line generator
  .y(function(d) {
    return yPositionScale(d.users)
  }) // set the y values for the line generator

// Read in files
d3.csv(require('../data/internet_users.csv'))
  .then(ready)
  .catch(err => {
    console.log('Failed with', err)
  })

function ready(datapoints) {
  const nested = d3
    .nest()
    .key(function(d) {
      return d.country
    })
    .entries(datapoints)

  container
    .selectAll('svg')
    .data(nested)
    .enter()
    .append('svg')
    .attr('class', d => d.key.toLowerCase().replace(/[^a-z]*/g, ''))
    .attr('height', height + margin.top + margin.bottom)
    .attr('width', width + margin.left + margin.right)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
    .each(function(d) {
      const datapoints = d.values
      const svg = d3.select(this)
      const name = d.key

      // svg
      //   .append('path')
      //   .datum(datapoints)
      //   .attr('d', function(d) {
      //     console.log(line(datapoints))
      //     return line(datapoints)
      //   })
      //   .attr('fill', 'aqua')
      //   .attr('opacity', 0.5)

      svg
        .append('path')
        .datum(datapoints)
        .attr('d', line2)
        .attr('stroke', 'red')
        .attr('stroke', function(d) {
          if (name === 'Iran') {
            return 'red'
          } else {
            return 'black'
          }
        })
        .attr('fill', 'none')
        .raise()

      svg
        .selectAll('circle')
        .data(datapoints)
        .enter()
        .append('circle')
        .attr('class', name.toLowerCase().replace(/[^a-z]*/g, ''))
        // .attr('cx', line2)
        // .attr('cy', line2)
        .attr('cx', d => xPositionScale(d.year))
        .attr('cy', d => yPositionScale(d.users))
        .attr('r', 3)
        .attr('fill', function(d) {
          if (name === 'Iran') {
            return 'red'
          } else {
            return 'black'
          }
        })
        .raise()
        .on('mouseover', function() {
          d3.selectAll('.' + this.getAttribute('class')).attr('opacity', 1)
        })
        .on('mouseout', function() {
          d3.selectAll('text' + '.' + this.getAttribute('class')).attr(
            'opacity',
            0
          )
        })

      svg
        .append('text')
        .attr('x', width / 2)
        .attr('y', 0 - margin.top / 2)
        .attr('text-anchor', 'middle')
        .style('font-size', '10px')
        .attr('fill', function(d) {
          if (name === 'Iran') {
            return 'red'
          } else {
            return 'black'
          }
        })
        .text(name)
        .attr('font-weight', function(d) {
          if (name === 'Iran') {
            return 700
          } else {
            return 400
          }
        })

      svg
        .append('text')
        .attr('class', d => name.toLowerCase().replace(/[^a-z]*/g, ''))
        .attr('font-size', 12)
        .attr('fill', '#333333')
        .attr('x', xPositionScale('2019'))
        .attr('dx', 5)

        .attr('y', function(d) {
          return yPositionScale(d.values[1].users)
        })
        .text(function(d) {
          const format = d3.format('.0%')
          return format(d.values[1].users)
        })
        .attr('fill', function(d) {
          if (name === 'Iran') {
            return 'red'
          } else {
            return 'black'
          }
        })
        .attr('opacity', 0)

      const xAxis = d3.axisBottom(xPositionScale).tickValues([2000, 2019])
      xAxis.tickFormat(d3.format(''))
      svg
        .append('g')
        .attr('class', 'axis x-axis')
        .attr('transform', 'translate(0,' + height + ')')
        .call(xAxis)
        .lower()

      const yAxis = d3.axisLeft(yPositionScale).tickValues([0.0, 0.5, 1.0])
      yAxis.tickFormat(d3.format('.0%'))
      svg
        .append('g')
        .attr('class', 'axis y-axis')
        .call(yAxis)
        .lower()
    })
}
