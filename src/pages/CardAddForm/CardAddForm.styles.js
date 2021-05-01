import styled from '@emotion/styled';
import { Flex } from '../../styles/mixins';

const Styled = {
  Container: styled.div`
    padding: 0 28px;
  `,
  Row: styled.div`
    position: relative;
    ${(props) => Flex({ items: 'center', justify: props.right ? 'flex-end' : 'flex-start' })};
  `,
  ExpiryDate: styled.div`
    width: 137px;
  `,
  CVC: styled.div`
    width: 84px;
  `,
  ToolTip: styled.div`
    flex: 1;
    margin-left: 0.5em;
  `,
  CardSelect: styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  `,
};

export default Styled;