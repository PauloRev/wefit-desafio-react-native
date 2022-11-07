import React from 'react';
import { Container, Username } from './styles';
import Icon from '@expo/vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';
import { useRepositories } from '../../hooks/repositories';

export default function MainHeader() {

  const { usernameSearch, toggleModal } = useRepositories();

  return (
    <Container>
      <Username>{!usernameSearch ? 'Selecione um usuário' : usernameSearch}</Username>
      <TouchableOpacity onPress={toggleModal}>
        <Icon name="gear" color="#000" size={24} />
      </TouchableOpacity>
    </Container>
  )
}
