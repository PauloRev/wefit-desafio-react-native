import React from 'react';
import { Linking } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';

import {
  PathNameArea,
  PathNameUsername,
  PathNameRepository,
  BtnArea,
  BtnContentArea,
  BtnFav,
  BtnFavText,
  BtnNoFav,
  BtnNoFavText,
  BtnTextRepository,
  Container,
  Content,
  IconTextArea,
  TextInfo
} from './styles';

import RouterHeader from '../../components/RouterHeader';

import IReposiroty from '../../types/IRepository';
import { TouchableOpacity } from 'react-native';
import { useRepositories } from '../../hooks/repositories';
import { useNavigation } from '@react-navigation/native';

export default function Details({ route }) {
  const info = route.params?.repositorieInfo as IReposiroty;

  const navigation = useNavigation();

  const { favoriteRepository, removeFavRepository } = useRepositories();

  const handleChangeFavRepository = () => {
    const data = {
      id: info.id,
      user: info.user,
      name: info.name,
      description: info.description,
      avatarUrl: info.avatarUrl,
      starsCount: info.starsCount,
      language: info.language,
      htmlUrl: info.htmlUrl
    } as IReposiroty;

    !info.isFavorite ? favoriteRepository(data) : removeFavRepository(data);

    navigation.navigate('Repositórios');
  }

  const openRepositoryLink = async () => {
    const supportedUrl = info.htmlUrl;
    await Linking.openURL(supportedUrl);
  }

  return (
    <>
      <RouterHeader />
      <Container>
        <Content>
          <PathNameArea>
            <PathNameUsername>{info.user}/</PathNameUsername>
            <PathNameRepository>
              {
                info.name.length >= 25 ? `${info.name.substr(0, 24)}...` : info.name
              }
            </PathNameRepository>
          </PathNameArea>
          <TextInfo>
            {info.description ? info.description : 'Sem descrição...'}
          </TextInfo>
          <IconTextArea>
            <Icon name="circle" color="#f22828" size={16} style={{ marginRight: 5 }} />
            <TextInfo>
              {!info.language ? 'Não Identificada' : info.language}
            </TextInfo>
          </IconTextArea>
        </Content>
        <BtnArea>
          <TouchableOpacity onPress={openRepositoryLink}>
            <BtnContentArea>
              <BtnTextRepository>Ver Repositório</BtnTextRepository>
              <Icon name="link" color="#1976d2" size={20} />
            </BtnContentArea>
          </TouchableOpacity>
          {
            !info.isFavorite ?
              <TouchableOpacity onPress={handleChangeFavRepository}>
                <BtnFav>
                  <BtnFavText>Favoritar</BtnFavText>
                  <Icon name="star" color="#000" size={20} />
                </BtnFav>
              </TouchableOpacity>
              :
              <TouchableOpacity onPress={handleChangeFavRepository}>
                <BtnNoFav>
                  <BtnNoFavText>Desfavoritar</BtnNoFavText>
                  <Icon name="star" color="#000" size={20} />
                </BtnNoFav>
              </TouchableOpacity>
          }
        </BtnArea>
      </Container>
    </>
  )
}
