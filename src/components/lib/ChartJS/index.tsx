import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js';
import 'chartjs-plugin-style';

import { dataSets } from './data';

Chart.defaults.global.defaultFontFamily = "'Brown', 'PT Sans', sans-serif";
// Chart.defaults.global.legend.display = false;
// Chart.defaults.global.elements.line.tension = 0;

export const LineChart = () => {
  const chartRef = useRef<any>(null);

  useEffect(() => {
    const myChartRef = chartRef.current.getContext('2d');

    const mychart = new Chart(myChartRef, {
      type: 'line',
      data: {
        //Bring in data
        labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
        datasets: dataSets,
      },
      options: {
        // Customize chart options
        // fill: 'red',
        responsive: true,
        // maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              ticks: { display: true },
              gridLines: {
                display: false,
                drawBorder: true,
              },
            },
          ],
          yAxes: [
            {
              ticks: { display: true },
              gridLines: {
                display: true,
                drawBorder: false,
              },
            },
          ],
        },
        legend: { display: false },
        legendCallback: function (chart: any) {
          const html = `
            <div>
              <ul>
                <li><span style="color:#000;background-color:red">TEST</span></li>
              </ul>
            </div>
          `;
          return html;
          // var text = [];
          // text.push('<ul class="' + chart.id + '-legend">');
          // for (var i = 0; i < chart.data.datasets.length; i++) {
          //   text.push('<li><span style="background-color:red"></span>');
          //   // text.push(
          //   //   '<li><span style="background-color:' +
          //   //     chart.data.datasets[i].borderColor +
          //   //     '"></span>',
          //   // );
          //   if (chart.data.datasets[i].label) {
          //     text.push(chart.data.datasets[i].label);
          //   }
          //   text.push('</li>');
          // }
          // text.push('</ul>');
          // return text.join('');
        },
        tooltips: {
          backgroundColor: '#fff',
          color: '#000',
          // plugin
          shadowOffsetX: 1,
          shadowOffsetY: 1,
          shadowBlur: 5,
          shaodwInset: 10,
          shadowColor: 'rgba(0, 0, 0, 0.2)',
          //
          bodyAlign: 'left',
          bodyFontColor: '#000',
          bodySpacing: 2,
          borderColor: 'rgba(0,0,0,0)',
          borderWidth: 0,
          // callbacks: {
          //   label: (tooltipItem, data) => {
          //     return `$ ${tooltipItem.value}`;
          //   },
          // },
          caretPadding: 2,
          caretSize: 5,
          cornerRadius: 6,
          custom: null,
          displayColors: true,
          enabled: true,
          footerAlign: 'left',
          footerFontColor: '#000',
          footerFontStyle: 'bold',
          footerMarginTop: 6,
          footerSpacing: 2,
          intersect: true,
          mode: 'nearest',
          multiKeyBackground: '#000',
          position: 'average',
          titleAlign: 'left',
          titleFontColor: '#000',
          titleFontStyle: 'bold',
          titleMarginBottom: 6,
          titleSpacing: 2,
          xPadding: 6,
          yPadding: 6,
        },
      },
    });

    console.log({ mychart });
    console.log({ generateLegend: mychart.generateLegend });
    mychart.generateLegend();
  }, []);

  useEffect(() => {
    console.log({ chartRef });
    if (chartRef.current) {
      console.log(chartRef.current);
      // chartRef.current.generateLegend();
      // const graphHeight = chartRef?.current.canvas?.height || 200;

      // let gradientLine = chartRef.createLinearGradient(0, 0, 0, graphHeight);
      // gradientLine.addColorStop(0, 'rgb(255, 0, 110, 0.2)');
      // gradientLine.addColorStop(0.5, 'rgb(255, 0, 110, 0.35)');
      // gradientLine.addColorStop(1, 'rgb(255, 0, 110, 0.7)');
    }
  }, [chartRef.current]);

  return (
    <div>
      <canvas id="myChart" ref={chartRef} />
    </div>
  );
};

export default LineChart;
