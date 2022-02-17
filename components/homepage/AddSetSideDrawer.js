import PropTypes from 'prop-types';
import moment from 'moment';
import Image from 'next/image';
import {
  AddSetButton,
  SideDrawerStyes,
} from '../../styles/AddSetSideDrawerStyles';

export default function AddSetSideDrawer({ sets, click, shown, addSet }) {
  const setList = sets.sort(
    (a, b) => moment(b.releaseDate) - moment(a.releaseDate)
  );

  const classes = shown ? 'open' : '';

  return (
    <SideDrawerStyes className={classes}>
      <span onClick={click} className="close">
        {' '}
        X{' '}
      </span>

      <div className="drawer--heading">
        <h3>All Sets</h3>
        <p>Please choose a set to add to your collection</p>
      </div>

      <div className="drawer--list">
        <ul>
          {setList.map((set) => (
            <li key={`sidedrawer-${set.id}`}>
              <AddSetButton
                type="button"
                onClick={() => {
                  addSet(set);
                  click();
                }}
              >
                <Image
                  width="20"
                  height="20"
                  src={set.images.symbol}
                  alt={set.name}
                />
                {set.name}
              </AddSetButton>
            </li>
          ))}
        </ul>
      </div>
    </SideDrawerStyes>
  );
}

AddSetSideDrawer.propTypes = {
  sets: PropTypes.array.isRequired,
  click: PropTypes.func.isRequired,
  shown: PropTypes.bool.isRequired,
  addSet: PropTypes.func.isRequired,
};
