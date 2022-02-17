/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-plusplus */
import { useState, useEffect } from 'react';
import pokemon from 'pokemontcgsdk';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CgAdd } from 'react-icons/cg';
import SetCard from '../components/SetCard';
import AddSetSideDrawer from '../components/homepage/AddSetSideDrawer';
import useUserSets from '../lib/userSets';

const GridStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  transition: 0.3s;
  padding-bottom: 60px;
`;

const TopBarStyles = styled.div`
  width: 100%;
  padding: 5px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  button {
    outline: none;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    padding: 10px;
    font-size: 14px;
    &:hover {
      cursor: pointer;
    }
    span {
      display: flex;
      padding-right: 4px;
      font-size: 24px;
    }
  }
`;

// to do
//   The below component is very hacked together and very messy
//   Code NEEDS tidying up

export default function HomePage({ sets }) {
  const { userSets, getUserSets, addSetToUser } = useUserSets();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  // used to check if any sets have been saved to local storage
  useEffect(() => {
    getUserSets();
  });

  return (
    <>
      <TopBarStyles>
        <div className="container">
          <button type="button" onClick={() => toggleDrawer()}>
            <span>
              <CgAdd />
            </span>
            Add Set
          </button>
        </div>
      </TopBarStyles>

      {userSets.length && userSets ? (
        <div className="container">
          <h2>Welcome TomCanham</h2>
          <p>The sets you are collceting are below</p>

          <GridStyles>
            {userSets.map((set) => (
              <SetCard
                key={set.id}
                name={set.name}
                image={set.images.logo}
                id={set.id}
              />
            ))}{' '}
          </GridStyles>
        </div>
      ) : (
        <div className="container">
          <h2>Welcome [username]</h2>
          <p>
            You are currently not collecting any sets. Add sets to your
            collection above.
          </p>
        </div>
      )}

      <AddSetSideDrawer
        sets={sets}
        click={toggleDrawer}
        shown={isDrawerOpen}
        addSet={addSetToUser}
      />
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

HomePage.propTypes = {
  sets: PropTypes.array,
};
