import Dropdown from './dropdown';
import Icon from './icon';
import { h } from './element';
import { baseFormulas } from '../formula';

export default class DropdownFormula extends Dropdown {
  constructor() {
    const nformulas = baseFormulas.map(it => h('div', 'xss-item')
      .on('click', () => {
        this.hide();
      })
      .child(it.key));
    super(new Icon('formula'), '200px', nformulas);
  }
}