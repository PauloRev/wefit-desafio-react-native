import styled from 'styled-components';
import { View, Text } from 'react-native';

export const Container = styled(View)`
  flex: 1;
`;

export const ListResult = styled(View)`
  flex: 1;
`;

export const ErrorArea = styled(View)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextError = styled(Text)`
  font-size: 16px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
`;

export const TextBtn = styled(Text)`
  font-size: 16px;
  font-weight: 500;
  color: #1976d2;
  margin-top: 15px;
`;
