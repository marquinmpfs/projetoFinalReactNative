import React, {useEffect} from 'react';
import { ActivityIndicator } from 'react-native';

import firebase from '../../services/fibaseConnection';

import {Background, Container} from './styles'

export default function PreLoad({navigation}){

    useEffect(() => {

        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                navigation.navigate('Dashboard');
            }else{
                navigation.navigate({routeName: 'SignIn'});
            }
        });
    }, []);


    return(
        <Background>
            <Container>
                <ActivityIndicator  color="#FFF" size={50}/>
            </Container>         
        </Background>
    )
}