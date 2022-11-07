import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, RefreshControl } from 'react-native';
import LottieView from 'lottie-react-native';

import CardRepositorie from '../../components/CardRepositorie';
import MainHeader from '../../components/MainHeader';
import ChangeNameModal from '../../components/ChangeNameModal';

import { useRepositories } from '../../hooks/repositories';

import {
  Container,
  ListResult,
  ErrorArea,
  TextError
} from './styles';

export default function Home() {

  const { getAllRepositories, usernameSearch, isActiveModal } = useRepositories();

  const [refreshing, setRefreshing] = useState<boolean>(false);

  const [allRepositories, setAllRepositories] = useState([]);

  useEffect(() => {
    getAllRepos();
  }, [usernameSearch]);

  const getAllRepos = async () => {
    const res = await getAllRepositories();
    await setAllRepositories([res])
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
            allRepositories[0] !== undefined ?
              <ListResult>
                <FlatList
                  refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={getAllRepos} />
                  }
                  data={allRepositories[0]}
                  renderItem={repo => (
                    <CardRepositorie
                      id={repo.item.id}
                      user={repo.item.owner.login}
                      name={repo.item.name}
                      description={repo.item.description}
                      avatarUrl={repo.item.owner.avatar_url}
                      starsCount={repo.item.stargazers_count}
                      language={repo.item.language}
                      htmlUrl={repo.item.html_url}
                      isFavorite={false}
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
                  Selecione um usuário para ver seus repositórios!
                </TextError>
              </ErrorArea>
          }
        </Container>

      </>
  )
}
