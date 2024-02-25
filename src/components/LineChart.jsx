import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import accessibility from 'highcharts/modules/accessibility'; // Import the accessibility module

accessibility(Highcharts);

const LineChart = ({ commitActivityData }) => {
  useEffect(() => {
   
    if (!commitActivityData) {
      return; 
    }

    // Extract weeks and changes data from commitActivityData
    const { weeks, changes } = commitActivityData;

    // Ensure the container is available before rendering the chart
    if (weeks && changes) {
      Highcharts.chart('container', {
        title: {
          text: 'Commit Activity Over Time',
          align: 'left'
        },
        subtitle: {
          text: 'Number of Commits Over Time',
          align: 'left'
        },
        yAxis: {
          title: {
            text: 'Number of Commits'
          }
        },
        xAxis: {
          categories: weeks,
          accessibility: {
            rangeDescription: 'Range: Weekly data'
          },
          title: {
            text: 'Weeks'
          }
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
        },
        plotOptions: {
          series: {
            label: {
              connectorAllowed: false
            },
            pointStart: 1 // Assuming week numbers start from 1
          }
        },
        series: [{
          name: 'Commits',
          data: changes
        }],
        responsive: {
          rules: [{
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom'
              }
            }
          }]
        }
      });
    }
  }, [commitActivityData]); // Update chart when commitActivityData changes

  return <div id="container" />;
};

export default LineChart;



