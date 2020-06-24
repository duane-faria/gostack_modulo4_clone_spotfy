import styled from "styled-components";

import { Spinner } from "../../components/loading/style";

export const Container = styled.aside`
  height: 100%;

  width: 200px;

  background: #121212;

  display: flex;

  flex-direction: column;

  justify-content: space-between;

  color: #b3b3b3;

  > div {
    padding: 25px;
  }
`;

export const NewPlayList = styled.button`
  background: transparent;
  border: 0;

  border-top: 1px solid #282828;

  font-size: 13px;

  color: #b3b3b3;

  display: flex;

  align-items: center;

  padding: 15px 25px;

  &:hover {
    color: #fff;
    cursor: pointer;
  }

  img {
    margin-right: 10px;
  }
`;

export const Nav = styled.ul`
  list-style: none;
  margin-top: 25px;

  &:first-child {
    margin: 0;
  }

  li {
    display: flex;
    align-items: center;
    a {
      color: inherit;
      text-decoration: none;
      font-size: 13px;
      line-height: 32px;
      font-weight: ${(p) => (p.main ? "bold" : "normal")};
      &:hover {
        color: #fff;
      }
    }

    span {
      font-size: 11px;
      text-transform: uppercase;
      line-height: 22px;
      letter-spacing: 1.11px;
    }

    ${Spinner} {
      height: 15px;
      margin-left: 05px;
    }
  }
`;
