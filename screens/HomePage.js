import React, {Component} from 'react'
import {View,Text,StyleSheet, Button} from 'react-native'


class HomeScreen extends Component{
    constructor(props){
        super(props)
    }
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

export default HomeScreen;