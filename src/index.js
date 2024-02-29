import './styles.css';
import LinkedList from './LinkedList';

function createList() {
  const newList = new LinkedList();
  return newList;
}

window.list = createList();
