import moment from 'moment';

export async function newestToOldest({ arr, propertyToSortBy }) {
  return arr.sort(
    (a, b) => moment(b[propertyToSortBy]) - moment(a[propertyToSortBy])
  );
}

export function oldesetToNewest({ arr, propertyToSortBy }) {
  return arr.sort(
    (a, b) => moment(a[propertyToSortBy]) - moment(b[propertyToSortBy])
  );
}
