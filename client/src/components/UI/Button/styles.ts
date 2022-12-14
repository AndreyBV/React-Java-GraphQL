import { colors, shadows } from './../../../core/constants/colors';
import styled from 'styled-components';

export const ButtonIcon = styled.div``;

export const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  color: ${colors.white};
  background-color: ${colors.primary};
  padding: 10px 50px;
  border-radius: 6px;
  transition: box-shadow 0.2s ease-in, background-color 0.2s ease-in,
    color 0.2s ease-in;

  :active {
    background-color: ${colors.primaryLight};
  }

  :hover:not(:disabled) {
    box-shadow: ${shadows.hard};
    background-color: ${colors.white};
    color: ${colors.primary};
  }

  :disabled {
    background-color: ${colors.grey};
  }

  > :not(:first-child) {
    margin-left: 10px;
  }
`;
