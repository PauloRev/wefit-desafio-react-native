import React from 'react';
import Icon from '@expo/vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';

import { Container, Title } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function RouterHeader() {

  const navigation = useNavigation();

  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" color="#fff" size={24} />
      </TouchableOpacity>
      <Title>Detalhes</Title>
    </Container>
  )
}
