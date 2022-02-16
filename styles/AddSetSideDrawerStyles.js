import styled from 'styled-components';

export const SideDrawerStyes = styled.div`
  padding-top: 50px;
  height: 100vh;
  width: 100vw;
  max-width: 400px;
  background-color: whitesmoke;
  position: fixed;
  top: 0;
  left: -800px;
  opacity: 0;
  pointer-events: none;
  z-index: 100;
  transition: ease-in-out 0.3s;
  overflow: scroll;
  &.open {
    left: 0;
    opacity: 1;
    pointer-events: all;
  }
  .drawer--heading {
    padding: 0 10px;
  }
  .close {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 30px;
    color: red;
    &:hover {
      cursor: pointer;
    }
  }

  ul {
    margin: 0;
    padding: 0;
  }
  li {
    padding: 0;
    margin: 0;
  }
`;

export const AddSetButton = styled.button`
  width: 100%;
  background: none;
  padding: 24px 14px;
  margin: 0;
  outline: none;
  border: none;
  font-size: 1rem;
  text-align: left;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  cursor: pointer;
  span {
    margin-right: 20px;
  }
`;
