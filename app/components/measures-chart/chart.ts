import Component from '@glimmer/component';
import Chartist from 'chartist';
import { StatisticsBox } from 'efitness/utils/wrappers';
import { dateHelper, comparator } from 'efitness/utils/calendar-helper';
import { Period, days, months } from 'efitness/utils/constants';

interface Args {
  title: string,
  chartId: string,
  propertyToRender: string,
  period: string,
  data: number[],
  axisX: string[]
}

enum MeasureProperties {
  weight = 'weight',
  fat = 'fat',
  muscle = 'muscle',
  water = 'water',
  boneDensity = 'boneDensity'
}

export default class ChartComponent extends Component<Args> {

  constructor(owner: unknown, args: Args) {
    super(owner, args);
  }

  initChart(_: HTMLElement, [chartId, propertyToRender, data, period, date]: [string, MeasureProperties, StatisticsBox[], string, Date]) {
    let axisY: number[] = [];
    let axisX: string[] = [];
    switch (period) {
      case Period.week:
        data.forEach((model: StatisticsBox) => {
          const { first, last } = dateHelper.getWeekDays(date);
          if (comparator.gte(model.date, first) && comparator.lte(model.date, last)) {
            let day = model.date.getDay();
            day = day === 0? 6 : day - 1;
            axisY.push(model[propertyToRender]);
            axisX.push(days[day].substring(0, 3).toUpperCase());
          }
        });
        break;

      case Period.month:
        data.forEach((model: StatisticsBox) => {
          let month = date.getMonth();
          if (model.date.getFullYear() === date.getFullYear() && model.date.getMonth() === month) {
            if (model.date.getMonth() === date.getMonth()) {
              axisY.push(model[propertyToRender]);
              axisX.push(model.date.getDate().toString());
            }
          }
        });
        break;

      case Period.year:
        let usedMonth = -1;
        data.forEach((model: StatisticsBox) => {
          if (model.date.getFullYear() === date.getFullYear()) {
            if (usedMonth === model.date.getMonth()) {
              axisY[axisY.length - 1] = model[propertyToRender];
            } else {
              axisY.push(model[propertyToRender]);
              axisX.push(months[model.date.getMonth()].substring(0, 3).toUpperCase())
              usedMonth = model.date.getMonth();
            }
          }
        });
        break;

    }

    var chart = new Chartist.Line(`#${chartId}`, {
      series: [axisY],
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