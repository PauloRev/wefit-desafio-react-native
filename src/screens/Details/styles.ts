import styled from 'styled-components';
import { View, Text } from 'react-native';

export const Container = styled(View)`
  flex: 1;
  width: 100%;
  position: relative;
`;

export const Content = styled(View)`
  background: #fff;
  padding: 4%;
`;

export const PathNameArea = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;

export const PathNameUsername = styled(Text)`
  font-size: 20px;
  color: #000;
`;

export const PathNameRepository = styled(Text)`
  font-size: 20px;
  color: #000;
  font-weight: bold;
`;

export const IconTextArea = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
`;

export const TextInfo = styled(Text)`
  font-size: 14px;
  color: #9a9a9a;
`;

export const BtnArea = styled(View)`
  width: 100%;
  background: #fff;
  padding: 4%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const BtnContentArea = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BtnTextRepository = styled(Text)`
  font-size: 14px;
  color: #1976d2;
  margin-right: 5px;
  font-weight: 500;
  text-transform: uppercase;
`;

export const BtnFav = styled(View).attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.75,

  elevation: 7,
})`
  width: 100%;
  height: 50px;
  background: #ffd02c;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-top: 15px;
`;

export const BtnFavText = styled(Text)`
  font-size: 14px;
  color: #000;
  margin-left: 5px;
  font-weight: 500;
  margin-right: 5px;
  text-transform: uppercase;
`;

export const BtnNoFav = styled(View)`
  width: 100%;
  height: 50px;
  background: #fff;
  border-width: 2px;
  border-color: #000;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-top: 15px;
`;

export const BtnNoFavText = styled(Text)`
  font-size: 14px;
  color: #000;
  margin-left: 5px;
  font-weight: 500;
  margin-right: 5px;
  text-transform: uppercase;
`;
