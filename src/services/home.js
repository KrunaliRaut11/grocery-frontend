import method from '../common/method';
import {fetchRequest} from './common';

export const fetchCategory = () => {
  return fetchRequest(`/category`, method.GET);
};