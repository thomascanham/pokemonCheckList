/* eslint-disable no-plusplus */
import { useState } from 'react';
import pokemon from 'pokemontcgsdk';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SetCard from '../components/SetCard';

import AddSetSideDrawer from '../components/homepage/AddSetSideDrawer';

const GridStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
`;

const TopBarStyles = styled.div`
  width: 100%;
  padding: 5px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
`;

// TO DO
// allow user to select a set from the side drawer and add it to their set list

export default function HomePage({ sets }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <>
      <TopBarStyles>
        <div className="container">
          <button type="button" onClick={() => toggleDrawer()}>
            + Add Set
          </button>
        </div>
      </TopBarStyles>

      <div className="container">
        <h2>Welcome [username]</h2>
        <p>Below you will find the sets of cards you are collecting</p>
      </div>

      <AddSetSideDrawer sets={sets} click={toggleDrawer} shown={isDrawerOpen} />
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      sets: await pokemon.set.all(),
    },
  };
}

// export default function Home({ sets }) {
//   // order the fetched sets by release date, newest to oldest
//   const orderedSets = sets.sort(
//     (a, b) => moment(b.releaseDate) - moment(a.releaseDate)
//   );

//   // if no sets are found we need to let the user know they havent set any
//   if (!sets.length) {
//     return (
//       <div className="container">
//         <h2>Welcome [username]</h2>
//         <p>You are currently not collecting any sets</p>
//       </div>
//     );
//   }

//   // if sets are found, loop over them and displayer them
//   return (
//     <div className="container">
//       <h1>Welcome [usename]</h1>
//       <p>Below you can add the sets that you are collecting</p>

//       <GridStyles>
//         {orderedSets.map((set) => (
//           <SetCard
//             key={set.id}
//             name={set.name}
//             image={set.images.logo}
//             id={set.id}
//           />
//         ))}
//       </GridStyles>
//     </div>
//   );
// }

// export async function getServerSideProps() {
//   // Sets are currently static entered in the array below
//   // TODO - Fetch saved sets from the logged in user from the backend
//   const sets = ['swsh1', 'swsh7', 'swsh3', 'swsh2'];
//   const setArray = [];

//   // loop over provided set IDs and fetch the required data
//   for (let i = 0; i < sets.length; i++) {
//     const currentSet = await pokemon.set.where({ q: `id:${sets[i]}` });
//     setArray.push(currentSet.data[0]);
//   }

//   return {
//     props: {
//       sets: setArray,
//     },
//   };
// }

HomePage.propTypes = {
  sets: PropTypes.array,
};
