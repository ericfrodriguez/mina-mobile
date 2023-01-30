import {  Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  

const Intro = () => {

    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
          {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
      ];
    
      const [counter, setCounter] = useState(0)
    
      function sumar() {
        setCounter(counter + 1)
        console.log()
      }

  return (
    <View>
              <ScrollView>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
        <Text>Holis 40!</Text>
      </ScrollView>
      <Text>{counter}</Text>
      <FlatList 
      data={DATA}
      numColumns={2}
      renderItem={({item}) => <Item title={item.title}/>}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      />
      <Button
        onPress={sumar}
        title="Sumar"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <TextInput style={styles.input} placeholder="useless placeholder" />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

export default Intro