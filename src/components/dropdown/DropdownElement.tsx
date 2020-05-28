import * as React from 'react';
import styled from 'styled-components';
import { StyledText } from '@ions/text/StyledText';
import { dashGreen00, midGreen05, white } from '@colors';

interface Props {
  onClick: (e: React.MouseEvent) => void;
  elementClassName?: string;
}

const Wrapper = styled.button`
  color: ${dashGreen00};
  line-height: 20px;
  font-size: 16px;
  cursor: pointer;
  border: transparent 0px;
  outline: none;
  display: flex;
  box-sizing: border-box;
  height: 40px;
  flex-shrink: 0;
  padding: 8px 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  background-color: ${white};

  &:hover {
    background-color: ${midGreen05};
  }
`;

export const DropdownElement: React.FC<Props> = props => {
  return (
    <Wrapper
      type='button'
      onClick={props.onClick}
      className={props.elementClassName}
    >
      <StyledText>{props.children}</StyledText>
    </Wrapper>
  );
};
