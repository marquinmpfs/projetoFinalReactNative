import React, {useState} from 'react';

import {Background, Container, Logo, AreaInput, Input,
SubmitButton, SubmitText, SignUpLink, SignUpText} from './styles'

export default function SignIn(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return(
    <Background>
      <Container>
        <Logo />

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

        <SignUpLink>
          <SignUpText> Criar conta gratuita </SignUpText>
        </SignUpLink>
      </Container>
    </Background>
  )
}