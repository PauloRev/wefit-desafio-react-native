import styled from 'styled-components';
import { View, Text } from 'react-native';

export const Container = styled(View)`
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  background: #000;
  padding: 0 7%;
  margin-top: 11%;
`;

export const Title = styled(Text)`
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  margin-left: 15px;
`;
