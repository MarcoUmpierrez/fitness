import Component from '@glimmer/component';
import Chartist from 'chartist';
import { StatisticsBox } from 'efitness/utils/wrappers';
import { dateHelper, comparator } from 'efitness/utils/calendar-helper';
import { Period } from 'efitness/utils/constants';

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
      return ['W1', 'W2', 'W3', 'W4', 'W5', 'W6'];
    } else {
      return ['JAN', 'FEB', 'MAR', 'APR', 'MAI', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
    }
  }

  initChart(_: HTMLElement, [chartId, propertyToRender, data, period, date, axisX]: [string, string, StatisticsBox[], string, Date, string[]]) {
    let points: (undefined | number)[] = [];
    switch (period) {
      case Period.week:
        data.forEach((model: StatisticsBox) => {
          const { first, last } = dateHelper.getWeekDays(date);
          if (comparator.gte(model.date, first) && comparator.lte(model.date, last)) {
            let day = model.date.getDay();
            day = day === 0? 6 : day - 1;
            points[day] = model[propertyToRender];
          }
        });
        break;
      case Period.month:
        data.forEach((model: StatisticsBox) => {
          let month = date.getMonth();
          if (model.date.getFullYear() === date.getFullYear() && model.date.getMonth() === month) {
            let index = dateHelper.belongsToWeek(model.date, month);
            if (index >= 0) {
              points[index] = model[propertyToRender];
            }
          }
        });
        break;
      case Period.year:
        data.forEach((model: StatisticsBox) => {
          if (model.date.getFullYear() === date.getFullYear()) {
            points[model.date.getMonth()] = model[propertyToRender];
          }
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