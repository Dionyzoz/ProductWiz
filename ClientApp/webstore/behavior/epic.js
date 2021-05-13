import { ofType } from 'redux-observable';
import { ADD_PRODUCT } from './actions';
import { addProductMutation } from './queries';
import { switchMap, map, tap } from 'rxjs/operators';
import { basketChangeCompleted } from 'sana/events';

export const addOrderEpic = (action$, _, { api }) => action$.pipe(
  ofType(ADD_PRODUCT),
  switchMap(action => api.graphApi(addProductMutation, action.payload).pipe(
    map(val=>basketChangeCompleted(val.basket.addProducts.modifiedLines.totalCount)),
  )),
);