import React, {useRef} from 'react';
import Button from '../../Components/Button';
import ImageLogo from '../../Components/ImageLogo';
import { Container, Background, Form, FormInput } from './styles';


export default function SignUp() {

  function handleSubmit({ email, password }) {
    // dispatch(signInRequest(email, password));
    alert('Cadastro feito, viado')
  }

  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const emailRef = useRef();
  const emailConfirmRef = useRef();
  return (
    <Background>
      <Container>
        <ImageLogo src={'ZOMBIE'} />
        <Form>
          <FormInput             
                keyboardType="default"
                autoCorrect={false}
                autoCapitalize="words"
                placeholder="Digite seu nome completo"
                returnKeyType="next"
                onSubmitEditing={() => emailRef.current.focus()}
          />
          <FormInput             
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                ref={emailRef}
                placeholder="Digite seu e-mail"
                returnKeyType="next"
                onSubmitEditing={() => emailConfirmRef.current.focus()}
          />

          <FormInput             
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                ref={emailConfirmRef}
                placeholder="Digite seu e-mail novamente"
                returnKeyType="next"
                onSubmitEditing={() => passwordRef.current.focus()}
          />

          <FormInput
            secureTextEntry
            placeholder="Digite sua senha"
            returnKeyType="next"
            onSubmitEditing={() => passwordConfirmRef.current.focus()}
          />

          <FormInput
            secureTextEntry
            placeholder="Digite sua senha novamente"
            ref={passwordConfirmRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />
        </Form>
        <Button text={'Cadastrar'}></Button>
      </Container>
    </Background>
  );
}
