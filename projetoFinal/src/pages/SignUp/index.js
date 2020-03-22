import React, {useState} from 'react';
import {Platform} from 'react-native';

import {Background, Container, AreaInput, Input,
SubmitButton, SubmitText, SingUpText, SingInButton, SingInText} from './styles'

export default function SignUp({navigation}){
  
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return(
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding': ''} enabled>
        <SingUpText>Quase tudo pronto :)</SingUpText>

        <AreaInput>
          <Input 
            placeholder="Nome"
            autoCorret={false}
            autoCapitalize="none"
            value={nome}
            onChangeText={(nome) => setNome(nome)}
          />        
        </AreaInput>

        <AreaInput>
          <Input 
            placeholder="Email"
            autoCorret={false}
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />        
        </AreaInput>

        <AreaInput>
          <Input 
            placeholder="Senha"
            autoCorret={false}
            autoCapitalize="none"
            secureTextEntry={true}
            value={password}
            onChangeText={(password) => setPassword(password)}
          />        
        </AreaInput>

        <SubmitButton>
          <SubmitText> Cadastrar </SubmitText>
        </SubmitButton>

        <SingInButton onPress={() => navigation.navigate('SignIn')}>
          <SingInText>Já possuo uma conta</SingInText>
        </SingInButton>

      </Container>
    </Background>
  )
}