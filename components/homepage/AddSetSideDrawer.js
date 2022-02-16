import PropTypes from 'prop-types';
import moment from 'moment';
import Image from 'next/image';
import {
  AddSetButton,
  SideDrawerStyes,
} from '../../styles/AddSetSideDrawerStyles';

export default function AddSetSideDrawer({ sets, click, shown }) {
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
            <ul>
              <AddSetButton type="button" onClick={click}>
                <Image
                  width="20"
                  height="20"
                  src={set.images.symbol}
                  alt={set.name}
                />
                {set.name}
              </AddSetButton>
            </ul>
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
};
