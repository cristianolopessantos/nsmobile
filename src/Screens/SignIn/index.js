import React, {useRef} from 'react';
import Button from '../../Components/Button';
import ImageLogo from '../../Components/ImageLogo';

import { Container, Background,TextToutch, TextLink, Form, FormInput} from './styles';

export default function SignIn({navigation}) {
  const passwordRef = useRef();

  function handleSubmit() {
    // dispatch(signInRequest(email, password));
    navigation.navigate('Home')
  }
  return (
    <Background>
      <Container>
        <ImageLogo src={'PIPOCA'}></ImageLogo>
        <Form>
          <FormInput             
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Digite seu e-mail"
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
            />

          <FormInput
            secureTextEntry
            placeholder="Digite sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />
        </Form>
      
        <Button onPress={handleSubmit}>Entrar</Button>
        <TextToutch onPress={()=>{
          navigation.navigate('SignUp')
        }}><TextLink>Criar conta gratuita</TextLink></TextToutch>
      </Container>
    </Background>
  );
}
