import styled from 'styled-components';
import { View, Text, Image } from 'react-native';

export const Container = styled(View).attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.75,

  elevation: 7,
})`
  width: 360px;
  background: #fff;
  margin: 8px auto;
  padding: 20px;
  border-radius: 4px;
`;

export const CardHeader = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom-width: 1px;
  border-color: #dadada;
  padding-bottom: 15px;
`;

export const PathNameArea = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const PathNameUsername = styled(Text)`
  font-size: 14px;
`;

export const PathNameRepository = styled(Text)`
  font-size: 14px;
  font-weight: bold;
`;

export const Photo = styled(Image)`
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;

export const Description = styled(Text)`
  font-size: 14px;
  color: #9a9a9a;
  margin: 15px 0;
`;

export const CardFooter = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BtnFavorite = styled(View)`
  padding: 10px;
  flex-direction: row;
  align-items: center;
  background: #faf3dc;
  border-radius: 4px;
`;

export const BtnText = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  color: #ffd02c;
  margin-left: 5px;
`;

export const IconTextArea = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const TextInfo = styled(Text)`
  font-size: 14px;
  color: #9a9a9a;
  margin-left: 5px;
`;
