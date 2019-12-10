import React, {Component} from 'react'
import {View,Text,StyleSheet,Button} from 'react-native'

class ThirdScreen extends Component{
    render(){
        return(
            <View>
                <Button
        onPress={() => this.props.navigation.toggleDrawer()}
        title=" Click"/>
                <Text>Hello Main Screen!</Text>
            </View>
        )
    }
}

export default ThirdScreen;