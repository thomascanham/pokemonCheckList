import { useState } from 'react';
import moment from 'moment';

export default function useUserSets() {
  // create the desired state
  const [userSets, setUserSets] = useState([]);

  async function getUserSets() {
    // fetch sets from local storage
    const items = await JSON.parse(localStorage.getItem('userSets'));
    // if there arent any in state but is in local storage
    if (!userSets.length && items) {
      setUserSets(items);
    } else {
      console.log('No items found in local');
    }
  }

  function addSetToUser(set) {
    let match = false;

    // copy current state
    const stateCopy = userSets;

    // check if set is already added
    stateCopy.forEach((item) => {
      if (item.id === set.id) {
        alert('You are already collectin that set');
        match = true;
      }
    });

    // if set is already added, dont add the selected one
    if (match) return null;
    stateCopy.push(set);

    // set tge correct order for the new set list
    const sorted = stateCopy.sort(
      (a, b) => moment(b.releaseDate) - moment(a.releaseDate)
    );

    // set it to lcoal state
    localStorage.setItem('userSets', JSON.stringify(sorted));
  }

  return { userSets, getUserSets, addSetToUser };
}
