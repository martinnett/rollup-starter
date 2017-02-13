import uniqueRandomArray from 'unique-random-array';
import starWarsNames from './starwars-names.json';

var getRandomItem = uniqueRandomArray(starWarsNames);

const random = function() {
  return getRandomItem();
};

export default random;
