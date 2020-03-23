import React, {useRef} from 'react';
import { View,Text,ScrollView } from 'react-native';
import Button from '../../Components/Button';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import {MyTopTabsProfile} from '../../routes'

import { Background, Container, ProfileView, ProfileInfos, Form, FormInput } from './styles';

export default function Profile({navigation}) {

  const passwordRef = useRef();
  function handleSubmit() {
    // dispatch(signInRequest(email, password));
    navigation.navigate('Voltar')
  }


  return (
    <Background>
      <Container>
        <ScrollView style={{marginTop:100}}>
        <ProfileView>
          <ScrollableTabView tabBarActiveTextColor={'#4aa5da'} tabBarInactiveTextColor={'#808080'} tabBarUnderlineStyle={{backgroundColor: '#4aa5da'}}>
            <View tabLabel='Minha conta'>    
              <ProfileInfos>
                <SimpleLineIcons name="user" color={'#4aa5da'} size={25} style={{marginRight:10}}/>
                <Text>Cristiano Lopes </Text>
              </ProfileInfos>
              <ProfileInfos>
                <SimpleLineIcons name="envelope" color={'#4aa5da'} size={25} style={{marginRight:10}}/>
                <Text>cris@b.com</Text>
              </ProfileInfos>
              <ProfileInfos>
                <Octicons name="verified" color={'#4aa5da'} size={25} style={{marginRight:10}}/>
                <Text>Semestral</Text>
              </ProfileInfos>
              <ProfileInfos>
                <SimpleLineIcons name="hourglass" color={'#4aa5da'} size={25} style={{marginRight:10}}/>
                <Text>11/08/2019</Text>
              </ProfileInfos>
            </View>

            <View tabLabel='Segurança' style={{justifyContent: 'center', alignItems: 'center'}}>    
          
              <Form>
                <FormInput
                  secureTextEntry
                  placeholder="Digite sua senha"
                  returnKeyType="next"
                  onSubmitEditing={() => passwordRef.current.focus()}
                />

                <FormInput
                  secureTextEntry
                  placeholder="Digite sua senha novamente"
                  returnKeyType="send"
                  onSubmitEditing={handleSubmit}
                />
              </Form>
              <Button onPress={handleSubmit} backColor >Redefinir senha</Button>
              
            </View>
            <Text tabLabel='Preferências'>project</Text>
          </ScrollableTabView>
         
          
        </ProfileView>
        
        <ProfileView>
          <ScrollableTabView tabBarActiveTextColor={'#4aa5da'} tabBarInactiveTextColor={'#808080'} tabBarUnderlineStyle={{backgroundColor: '#4aa5da'}}>
            <View tabLabel='Dados de pagamento'>    
              <ProfileInfos>
                <MaterialIcons name="payment" color={'#4aa5da'} size={25} style={{marginRight:10}}/>
                <Text>Mercado Pago </Text>
              </ProfileInfos>
              <ProfileInfos>
                <Foundation name="dollar-bill" color={'#4aa5da'} size={25} style={{marginRight:10}}/>
                <Text>R$ 25,00 </Text>
              </ProfileInfos>
              <ProfileInfos>
                <MaterialIcons name="confirmation-number" color={'#4aa5da'} size={25} style={{marginRight:10}}/>
                <Text>c4593810-4ea8-4b9c-8ef3-3</Text>
              </ProfileInfos>
              <Text style={{marginLeft: 35}}>b58c77bcc1a2administrador04/07/2018 18:47:16</Text>
            
            
            </View>

            <View tabLabel='Dúvidas'>    
              <ProfileInfos>
                <MaterialIcons name="chat" color={'#4aa5da'} size={25} style={{marginRight:10}}/>
                <Text style={{fontSize:10}}>Dúvidas, Cancelamentos clique abaixo.</Text>
              </ProfileInfos>

              <ProfileInfos>
              <Entypo name="megaphone" color={'#4aa5da'} size={25} style={{marginRight:10}}/>
              <Text style={{color: 'blue'}}>Ir para o chat.</Text>
              </ProfileInfos>
          

            </View>
           
          </ScrollableTabView>
         
          
        </ProfileView>
        </ScrollView>
       
        <Button onPress={handleSubmit} backColor >Sair da minha conta</Button>
      </Container>
    </Background>
  );
}


