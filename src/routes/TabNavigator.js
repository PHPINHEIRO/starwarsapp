import React from 'react';
import { createBottomTabNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation'
import FilmeScreen from '../screens/FilmeScreen';
import PlanetsScreen from '../screens/PlanetsScreen';
import SpeciesScreen from '../screens/SpeciesScreen';
import StarshipsScreen from '../screens/StarshipsScreen';
import LoadingScreen from '../screens/LoadingScreen'
import LoginScreen from '../screens/LoginScreen'
import SignUpScreen from '../screens/SignUpScreen'
import Icon from 'react-native-vector-icons/FontAwesome';



const TabNavigator = createBottomTabNavigator({
    Filmes: {
        screen: FilmeScreen,
        navigationOptions:{
            tabBarIcon: ({tintColor}) => (<Icon name='film' color={tintColor} size={24}></Icon>)
        },
    },
    Planetas: {
        screen: PlanetsScreen,
        navigationOptions:{
            tabBarIcon: ({tintColor}) => (<Icon name='globe' color={tintColor} size={24}></Icon>)
        },
    },
    Especies: {
        screen: SpeciesScreen,
        navigationOptions:{
            tabBarIcon: ({tintColor}) => (<Icon name='user' color={tintColor} size={24}></Icon>)
        },
    },
    Naves: {
        screen: StarshipsScreen,
        navigationOptions:{
            tabBarIcon: ({tintColor}) => (<Icon name='fighter-jet' color={tintColor} size={24}></Icon>)
        },
    },
},{
    initialRouteName:'Filmes',
    tabBarOptions:{
        activeTintColor: '#FFE850',
        inactiveTintColor:'gray',
        style: {
            backgroundColor: '#424242',
        },
        showLabel:false
    },
    
})

const SwitchNavigator = createSwitchNavigator({
    Loading: {screen:LoadingScreen},
    Login: {screen:LoginScreen},
    SignUp: {screen:SignUpScreen},
    Main:{screen:TabNavigator},
},{
    initialRouteName: 'Loading'
})

export default createAppContainer(SwitchNavigator) 