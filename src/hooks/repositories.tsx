import React, { useState, useContext, createContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import api from '../services/api';

type RepositoriesContextProps = {
  isActiveModal: boolean,
  repositoriesLoading: boolean,
  usernameSearch: string,
  favRepositores: Array<IRepository>,
  toggleModal: () => void;
  changeUsername: (username: string) => void,
  getAllRepositories: () => void,
  getFavRepositories: () => void,
  favoriteRepository: (IRepository) => void,
  removeFavRepository: (IRepository) => void
}

import IRepository from '../types/IRepository';

const RepositoriesContext = createContext<RepositoriesContextProps>({} as RepositoriesContextProps);

const RepositoriesProvider = ({ children }) => {

  const [favRepositores, setFavRepositories] = useState([]);
  const [repositoriesLoading, setRepositoriesLoading] = useState<boolean>(false);
  const [isActiveModal, setIsActiveModal] = useState<boolean>(false);
  const [usernameSearch, setUsernameSearch] = useState<string>('');

  useEffect(() => {
    getFavRepositories();
  }, []);

  const toggleModal = () => {
    setIsActiveModal(!isActiveModal);
  };

  const changeUsername = async (username: string) => {
    await setUsernameSearch(username);
    setIsActiveModal(!isActiveModal);
    getAllRepositories();
  }

  const getAllRepositories = async () => {
    if (!usernameSearch) return;

    setRepositoriesLoading(true);

    try {
      const repos = await api.get(`/${usernameSearch.trim()}/repos`);

      const favRepoStorage = await AsyncStorage.getItem('@wefit:FavoriteRepos');
      const favArray = [JSON.parse(favRepoStorage)];

      if (favRepoStorage) {
        const favIds = await favArray[0].map(fav => fav.id);

        const newArray = await repos.data.filter(repo => {
          return !favIds.includes(repo.id) && repo;
        })

        return newArray;
      }

      return repos.status === 200 ? repos.data : [];
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Ops! Certifique-se que esse seja um usuário válido e tente novamente.'
      });
    } finally {
      setRepositoriesLoading(false);
    }
  };

  const getFavRepositories = async () => {
    const favReposStorage = await AsyncStorage.getItem('@wefit:FavoriteRepos');
    if (favReposStorage) {
      await setFavRepositories(JSON.parse(favReposStorage));
    }
  }

  const favoriteRepository = async (data: IRepository) => {
    setRepositoriesLoading(true);
    let newArray = [];
    const favReposStorage = await AsyncStorage.getItem('@wefit:FavoriteRepos');

    if (favReposStorage.includes(data.id)) {
      Toast.show({
        type: 'error',
        text1: 'Ops! Repositório já favoritado.',
        text2: 'Recarregue a lista para atualizar.'
      })
      return;
    }

    newArray = await !favReposStorage ? [data] : [...JSON.parse(favReposStorage), data];

    await AsyncStorage.setItem('@wefit:FavoriteRepos', JSON.stringify(newArray))
      .then(() => {
        setRepositoriesLoading(false);
        Toast.show({
          type: 'success',
          text1: 'Repositório favoritado!',
          text2: 'Recarregue a lista para atualizar.'
        })
      })
      .catch(error => {
        setRepositoriesLoading(false);
        Toast.show({
          type: 'error',
          text1: 'Ops! Erro ao favoritar repositório, tente novamente.'
        })
      })

  }

  const removeFavRepository = async (data: IRepository) => {
    const favRepoStorage = await AsyncStorage.getItem('@wefit:FavoriteRepos');
    const favReposArray = await JSON.parse(favRepoStorage);

    const newArray = favReposArray.length >= 0 ? favReposArray.filter(repo => {
      return repo.id !== data.id;
    }) : [];

    await AsyncStorage.clear();
    await AsyncStorage.setItem('@wefit:FavoriteRepos', JSON.stringify(newArray))
      .then(() => {
        Toast.show({
          type: 'success',
          text1: 'Repositório desfavoritado!',
          text2: 'Recarregue a lista para atualizar.'
        });
      })
      .catch(error => {
        console.log(error)
      })

  }

  return (
    <RepositoriesContext.Provider value={{
      isActiveModal,
      repositoriesLoading,
      usernameSearch,
      favRepositores,
      toggleModal,
      changeUsername,
      getAllRepositories,
      getFavRepositories,
      favoriteRepository,
      removeFavRepository
    }}>
      {children}
    </RepositoriesContext.Provider>
  )

}

function useRepositories() {
  const context = useContext(RepositoriesContext);
  return context;
}

export { RepositoriesProvider, useRepositories };
