export default function () {
  // Add your transitions here, like:
  this.transition(
    this.fromRoute('measures.index'),
    this.toRoute('measures.show'),
    this.use('toDown', { duration: 300 }),
    this.reverse('toUp', { duration: 300 })
  );
  this.transition(
    this.fromRoute('measures.index'),
    this.toRoute('measures.new'),
    this.use('toDown', { duration: 300 }),
    this.reverse('toUp', { duration: 300 })
  );
  this.transition(
    this.fromRoute('measures'),
    this.toRoute('statistics'),
    this.use('toLeft', { duration: 300 }),
    this.reverse('toRight', { duration: 300 })
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('measures'),
    this.use('toLeft', { duration: 300 }),
    this.reverse('toRight', { duration: 300 })
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('calendar'),
    this.use('toRight', { duration: 300 }),
    this.reverse('toLeft', { duration: 300 })
  );
}
