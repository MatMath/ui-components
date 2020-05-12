import styled, { css } from 'styled-components';
import { dashGreen04, white } from '@colors';

interface Props {
  maxHeight?: number;
  className?: string;
}

export const DropdownCard = styled.div<Props>`
  display: flex;
  flex-direction: column;
  background-color: ${white};
  border: 1px solid ${dashGreen04};
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 8px 0;
  ${props =>
    props.maxHeight &&
    css`
      max-height: ${props.maxHeight}px;
      overflow-y: scroll;
    `}
`;
