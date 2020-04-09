import {createStackNavigator} from 'react-navigation-stack'

import ImageTry from '../components/ImageTry'
import { createAppContainer } from 'react-navigation'
import StartGameScreen from '../screens/StartGameScreen';


const navigator = createStackNavigator({
    Back: StartGameScreen,
    FOGU: {
        screen: ImageTry
    }
})


export default createAppContainer(navigator);


