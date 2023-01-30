import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
    return (
        <View style={{display: 'flex', justifyContent: 'center', height: 500, paddingHorizontal: 50}}>
            <Text>Home</Text>
            <Button title='Go to login' onPress={() => navigation.navigate('Login')}/>
        </View>
    )
}



export default Home