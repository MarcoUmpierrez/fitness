import Component from '@glimmer/component';
import Chartist from 'chartist';
import { StatisticsBox } from 'efitness/utils/wrappers';
import { getWeekDays, Period, isGreaterOrEq, isLessOrEq } from 'efitness/utils/calendar-helper';

interface Args {
  title: string,
  chartId: string,
  propertyToRender: string,
  period: string,
  data: number[],
  axisX: string[]
}

export default class ChartComponent extends Component<Args> {

  constructor(owner: unknown, args: Args) {
    super(owner, args);
  }

  get axisX(): string[] {
    const { period } = this.args;
    if (period === Period.week) {
      return ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    } else if (period === Period.month) {
      return ['W1', 'W2', 'W3', 'W4', 'W5'];
    } else {
      return ['2019']
    }
  }

  initChart(element: HTMLElement, [chartId, propertyToRender, data, period, date, axisX]: [string, string, StatisticsBox[], string, Date, string[]]) {
    let points;
    switch (period) {
      case Period.week:
        points = [null, null, null, null, null, null, null];
        data.forEach((model: StatisticsBox) => {
          const { first, last } = getWeekDays(date);
          if (isGreaterOrEq(model.date, first) && isLessOrEq(model.date, last)) {
            let day = model.date.getDay();
            day = day === 0? 6 : day - 1;
            points[day] = model[propertyToRender];
          }
        });
        break;
      case Period.month:
        points = data.map((model: StatisticsBox) => {
          return model[propertyToRender];
        });
        break;
      case Period.year:
        points = data.map((model: StatisticsBox) => {
          return model[propertyToRender];
        });
        break;
    }

    var chart = new Chartist.Line(`#${chartId}`, {
      series: [points],
      labels: axisX
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
}