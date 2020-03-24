import React, {useRef, useState} from 'react';
import { View,Text,ScrollView } from 'react-native';
import Button from '../../Components/Button';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import {
  Layout,
  Toggle,
  Select,
} from '@ui-kitten/components';
import {MyTopTabsProfile} from '../../routes'

import { Background, Container, ProfileView, ProfileInfos, Form, FormInput } from './styles';

export default function Profile({navigation}) {

  const passwordRef = useRef();
  const [checked, setChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionTwo, setSelectedOptionTwo] = useState(null);
  const [selectedOptionThree, setSelectedOptionThree] = useState(null);

  const resolution = [
    { text: '240' },
    { text: '480' },
    { text: '720' },
  ];

  const onCheckedChange = (isChecked) => {
    setChecked(isChecked);
  };

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
                  ref={passwordRef}
                  returnKeyType="send"
                  onSubmitEditing={handleSubmit}
                />
              </Form>
              <Button onPress={handleSubmit} backColor >Redefinir senha</Button>
              
            </View>
            <View tabLabel='Preferências'>
              <Layout style={{ flexDirection: 'row',flexWrap: 'wrap', marginTop: 20}}>
                <Text></Text>
                <Toggle
                  text={`Mostrar dicas na pagina inicial`}
                  checked={checked}
                  onChange={onCheckedChange}
                />
              </Layout>

              <Layout style={{ flexDirection: 'row',flexWrap: 'wrap', marginTop: 20, alignItems: 'center'}}>
                <Text style={{fontSize:12, marginRight: 5}}>Qualidade do vídeo apresentado no iPad </Text>
                <Select
                    data={resolution}
                    size='small'
                    style={{maxWidth: 150}}
                    selectedOption={selectedOption}
                    placeholder={'Qualidade'}
                    onSelect={setSelectedOption}
                  />
              </Layout>
             
              
              <Layout style={{ flexDirection: 'row',flexWrap: 'wrap', marginTop: 20, alignItems: 'center'}}>
                <Text style={{fontSize:12, marginRight: 5}}>Qualidade do vídeo apresentado no iPhone</Text>
                <Select
                    data={resolution}
                    size='small'
                    style={{maxWidth: 150}}
                    selectedOption={selectedOptionTwo}
                    placeholder={'Qualidade'}
                    value={selectedOptionTwo}
                    onSelect={setSelectedOptionTwo}
                  />
              </Layout>

              <Layout style={{ flexDirection: 'row',flexWrap: 'wrap', marginTop: 20, alignItems: 'center'}}>
                <Text style={{fontSize:12, marginRight: 5}}>Qualidade do vídeo apresentado no Android</Text>
                <Select
                    data={resolution}
                    size='small'
                    style={{maxWidth: 150}}
                    selectedOption={selectedOptionThree}
                    placeholder={'Qualidade'}
                    onSelect={setSelectedOptionThree}
                  />
              </Layout>
            </View>
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


