import styled, { css } from 'styled-components';

interface IStyledListComponents {
  layoutDirection?: 'horizontal' | 'vertical';
}

export const ListItemWrapper = styled.div``;

export const StyledListComponents = styled.div<IStyledListComponents>`
  display: flex;
  margin: -5px;

  > ${ListItemWrapper} {
    padding: 5px;
  }

  ${({ layoutDirection }) => {
    switch (layoutDirection) {
      case 'horizontal':
        return css`
          flex-direction: row;

          /* > :not(:first-child) {
            margin-left: 10px;
          } */
        `;

      case 'vertical':
      default:
        return css`
          flex-direction: column;

          /* > :not(:first-child) {
            margin-top: 10px;
          } */
        `;
    }
  }}
`;
