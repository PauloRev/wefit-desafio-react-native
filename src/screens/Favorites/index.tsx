import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, RefreshControl, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';

import CardRepositorie from '../../components/CardRepositorie';
import MainHeader from '../../components/MainHeader';
import ChangeNameModal from '../../components/ChangeNameModal';

import { useRepositories } from '../../hooks/repositories';

import {
  Container,
  ListResult,
  ErrorArea,
  TextError,
  TextBtn
} from './styles';

export default function Favorites() {

  const { getFavRepositories, favRepositores, isActiveModal } = useRepositories();

  const [refreshing, setRefreshing] = useState<boolean>(false);

  useEffect(() => {
    getFavRepos();
  }, []);

  const getFavRepos = async () => {
    await getFavRepositories();
  }

  return (
    isActiveModal ?
      <ChangeNameModal />
      :
      <>
        <MainHeader />

        <Container>
          {refreshing ? <ActivityIndicator /> : null}
          {
            favRepositores.length > 0 ?
              <ListResult>
                <FlatList
                  refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={getFavRepos} />
                  }
                  data={favRepositores}
                  renderItem={repo => (
                    <CardRepositorie
                      id={repo.item.id}
                      user={repo.item.user}
                      name={repo.item.name}
                      description={repo.item.description}
                      avatarUrl={repo.item.avatarUrl}
                      starsCount={repo.item.starsCount}
                      language={repo.item.language}
                      htmlUrl={repo.item.htmlUrl}
                      isFavorite={true}
                    />
                  )}
                  keyExtractor={item => item.id.toString()}
                />
              </ListResult>
              :
              <ErrorArea>
                <LottieView
                  source={require('../../assets/github-animation.json')}
                  autoPlay
                  loop
                  style={{ width: 300 }}
                  resizeMode="cover"
                />
                <TextError>
                  Seus repositórios favoritos apareceram aqui!
                </TextError>
                <TouchableOpacity onPress={getFavRepos}>
                  <TextBtn>Recarregar Lista</TextBtn>
                </TouchableOpacity>
              </ErrorArea>
          }
        </Container>

      </>
  )
}
