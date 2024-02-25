import React, { useEffect } from 'react';
import Highcharts from 'highcharts';

const DoubleLineChart = ({ contributorsData }) => {
    useEffect(() => {
        if (contributorsData && contributorsData.length > 0) {
            // Prepare series data for Highcharts
            const seriesData = contributorsData.map(contributor => ({
                name: contributor.contributor,
                data: contributor.weeklyChanges.map(week => week.changes)
            }));
           console.log('seriesData=>',seriesData)
            // Create the chart
            Highcharts.chart('container', {
                title: {
                    text: 'Contributors Weekly Changes',
                    align: 'left'
                },
                yAxis: {
                    title: {
                        text: 'Weekly Changes'
                    }
                },
                xAxis: {
                    accessibility: {
                        rangeDescription: 'Range: Weekly data'
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
                        }
                    }
                },
                series: seriesData,
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
    }, [contributorsData]); 

    return (
        <div id="container"></div>
    );
};

export default DoubleLineChart;




