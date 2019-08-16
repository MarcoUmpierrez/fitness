import Component from '@ember/component';

export default class MeasuresFormComponent extends Component {
  didRender() {
    super.didRender();
    let inputs = Array.from(document.getElementsByTagName('input'));
    inputs.forEach(input => input.addEventListener('focus', this.hideNavBar));
    inputs.forEach(input => input.addEventListener('blur', this.showNavBar));
  }

  willDestroy() {
    let inputs = Array.from(document.getElementsByTagName('input'));
    inputs.forEach(input => input.removeEventListener('focus', this.hideNavBar));
    inputs.forEach(input => input.removeEventListener('blur', this.showNavBar));
    super.willDestroy();
  }

  hideNavBar() {
    let footers = document.getElementsByClassName('footer') as HTMLCollectionOf<HTMLElement>;
    if (footers && footers.length > 0) {
      footers[0].style.display = 'none';
    }
  }

  showNavBar() {
    let footers = document.getElementsByClassName('footer')as HTMLCollectionOf<HTMLElement>;
    if (footers && footers.length > 0) {
      footers[0].style.display = 'inherit';
    }
  }
}