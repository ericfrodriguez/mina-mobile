import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'


const Login = () => {
    const insets = useSafeAreaInsets();

    return (
        <View>
            <Text>Login</Text>
        </View>
    )
}


export default Login