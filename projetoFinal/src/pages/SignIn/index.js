import React, {useState} from 'react';
import {Platform} from 'react-native';

import {Background, Container, Logo, AreaInput, Input,
SubmitButton, SubmitText, SignUpLink, SignUpText} from './styles'

export default function SignIn({navigation}){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return(
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding': ''} enabled>
        <Logo source={require('../../assets/logo.png')}/>

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
          <SubmitText> Acessar </SubmitText>
        </SubmitButton>

        <SignUpLink onPress={() => navigation.navigate('SignUp')}>
          <SignUpText> Criar conta gratuita </SignUpText>
        </SignUpLink>
      </Container>
    </Background>
  )
}