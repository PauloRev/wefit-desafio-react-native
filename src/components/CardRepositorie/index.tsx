import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from '@expo/vector-icons/FontAwesome';

import {
  Container,
  CardHeader,
  PathNameUsername,
  Photo,
  Description,
  CardFooter,
  BtnFavorite,
  BtnText,
  IconTextArea,
  TextInfo,
  PathNameArea,
  PathNameRepository
} from './styles';

import { useRepositories } from '../../hooks/repositories';

import IRepository from '../../types/IRepository';

export default function CardRepositorie({ id, user, name, description, avatarUrl, starsCount, language, htmlUrl, isFavorite }: IRepository) {

  const { favoriteRepository } = useRepositories();
  const navigation = useNavigation();

  const handleFavoriteRepository = async () => {
    const data = {
      id,
      user,
      name,
      description,
      avatarUrl,
      starsCount,
      language,
      htmlUrl
    }
    await favoriteRepository(data);
  }

  const handleNavDetails = () => {
    const data = {
      id,
      user,
      name,
      description,
      avatarUrl,
      starsCount,
      language,
      htmlUrl,
      isFavorite
    }

    navigation.navigate('Detalhes', {
      repositorieInfo: data
    });
  }

  return (
    <TouchableOpacity onPress={handleNavDetails}>
      <Container>
        <CardHeader>
          <PathNameArea>
            <PathNameUsername>{user}/</PathNameUsername>
            <PathNameRepository>
              {
                name.length >= 25 ? `${name.substr(0, 24)}...` : name
              }
            </PathNameRepository>
          </PathNameArea>
          <Photo source={{ uri: avatarUrl }} />
        </CardHeader>
        <Description>
          {description ? description : 'Sem descrição...'}
        </Description>
        <CardFooter>
          {
            !isFavorite &&
            <TouchableOpacity onPress={handleFavoriteRepository}>
              <BtnFavorite>
                <Icon name="star" color="#ffd02c" size={16} />
                <BtnText>Favoritar</BtnText>
              </BtnFavorite>
            </TouchableOpacity>
          }
          <IconTextArea>
            <Icon name="star" color="#ffd02c" size={16} />
            <TextInfo>{starsCount}</TextInfo>
          </IconTextArea>
          <IconTextArea>
            <Icon name="circle" color="#f22828" size={16} />
            <TextInfo>
              {!language ? 'Não Identificada' : language}
            </TextInfo>
          </IconTextArea>
        </CardFooter>
      </Container>
    </TouchableOpacity>
  )
}
