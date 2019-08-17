import Component from '@ember/component';
import Chartist from 'chartist';

export default class MeasuresChart extends Component {
  chartId!: string;
  title!: string;
  data!: number[];
  axisX!: string[];

  didRender() {
    var chart = new Chartist.Line(`#${this.chartId}`, {
      // labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
      // labels: ['W1', 'W2', 'W3', 'W4'],
      // labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAI', 'JUN', 'JUL', 'AUG','SEP','OCT','NOV','DIC'],
      series: [this.data],
      labels: this.axisX
    }, {
        fullWidth: true,
        chartPadding: {
          right: 40
        }
      });

    // Let's put a sequence number aside so we can use it in the event callbacks
    var seq = 0;

    // Once the chart is fully created we reset the sequence
    chart.on('created', function () {
      seq = 0;
    });

    // On each drawn element by Chartist we use the Chartist.Svg API to trigger SMIL animations
    chart.on('draw', function (data) {
      if (data.type === 'line' || data.type === 'point') {
        // If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
        data.element.animate({
          opacity: {
            // The delay when we like to start the animation
            begin: seq++ * 80,
            // Duration of the animation
            dur: 300,
            // The value where the animation should start
            from: 0,
            // The value where it should end
            to: 1
          }
        });
      }
    });
  }
};
