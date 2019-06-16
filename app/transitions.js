export default function () {
  // Add your transitions here, like:
  this.transition(
    this.fromRoute('measures'),
    this.toRoute('statistics'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('measures'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('calendar'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
}
