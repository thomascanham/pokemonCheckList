import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Alert({ type, children }) {
  const classes = type ? `alert alert-${type}` : `alert`;

  return <AlertStyles className={classes}>{children}</AlertStyles>;
}

const AlertStyles = styled.div`
  position: relative;
  padding: 1rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-radius: 0.25rem;

  a {
    text-decoration: underline;
  }

  &.alert-primary {
    color: #084298;
    background-color: #cfe2ff;
    border-color: #b6d4fe;
  }
`;

Alert.propTypes = {
  type: PropTypes.string,
  children: PropTypes.any,
};
