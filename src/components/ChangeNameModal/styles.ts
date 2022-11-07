import styled from 'styled-components';
import { View, Text, TextInput } from 'react-native';

export const Container = styled(View)`
  flex: 1;
  position: relative;
  background: rgba(0, 0, 0, 0.5);
`;

export const Content = styled(View)`
  width: 100%;
  padding: 15px;
  background: #fff;
  align-self: flex-end;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LineModal = styled(View)`
  width: 30px;
  height: 6px;
  background: #e0e0e0;
  border-radius: 12px;
`;

export const TextModal = styled(Text)`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);
  text-align: left;
  align-self: flex-start;
  margin: 15px 0;
`;

export const InputArea = styled(View)`
  width: 100%;
  padding: 10px;
  background: rgba(0, 0, 0, 0.06);
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.7);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const LabelInput = styled(Text)`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
`;

export const Input = styled(TextInput).attrs({
  placeholderTextColor: 'rgba(0, 0, 0, 0.6)',
})`
  width: 100%;
  color: rgba(0, 0, 0, 0.7);
  font-size: 16px;
`;

export const BtnArea = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 15px;
`;

export const CancelBtn = styled(Text)`
  font-size: 15px;
  font-weight: 500;
  color: #1976d2;
  text-transform: uppercase;
`;

export const SaveBtn = styled(View).attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.75,

  elevation: 7,
})`
  width: 174px;
  height: 42px;
  background: #1976d2;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const SaveBtnText = styled(Text)`
  font-size: 15px;
  font-weight: 500;
  color: #fff;
  text-transform: uppercase;
`;
