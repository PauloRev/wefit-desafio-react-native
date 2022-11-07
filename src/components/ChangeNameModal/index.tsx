import React, { useState } from 'react';
import { Modal, TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message';
import { useRepositories } from '../../hooks/repositories';

import {
  BtnArea,
  CancelBtn,
  Container,
  Input,
  InputArea,
  LabelInput,
  LineModal,
  SaveBtn,
  SaveBtnText,
  TextModal,
  Content
} from './styles';

export default function ChangeNameModal() {

  const { toggleModal, isActiveModal, changeUsername, usernameSearch } = useRepositories();
  const [inputUsername, setInputUsername] = useState<string>(usernameSearch ? usernameSearch.trim() : '');

  const handleChangeUsername = () => {
    if (!inputUsername) {
      Toast.show({
        type: 'error',
        text1: 'Ops! Informe um usuário para continuar.',
      });
      return;
    }
    changeUsername(inputUsername);
  }

  return (
    <Container>
      <Modal
        animationType='slide'
        transparent={true}
        visible={isActiveModal}
        onRequestClose={toggleModal}
      >
        <Content>
          <LineModal />
          <TextModal>Alterar usuário selecionado</TextModal>
          <InputArea>
            <LabelInput>Nome do usuário</LabelInput>
            <Input
              value={inputUsername}
              placeholder="Username"
              onChangeText={text => setInputUsername(text)}
            />
          </InputArea>
          <BtnArea>
            <TouchableOpacity onPress={toggleModal}>
              <CancelBtn>Cancelar</CancelBtn>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleChangeUsername}>
              <SaveBtn>
                <SaveBtnText>Salvar</SaveBtnText>
              </SaveBtn>
            </TouchableOpacity>
          </BtnArea>
        </Content>
      </Modal>
    </Container>
  );
}
