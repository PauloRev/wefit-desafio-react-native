import styled from 'styled-components';
import { View, Text } from 'react-native';

export const Container = styled(View)`
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 0 4%;
  margin-top: 11%;
  margin-bottom: 4%;
`;

export const Username = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.7);
`;
