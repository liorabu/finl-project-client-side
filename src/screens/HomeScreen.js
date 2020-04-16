import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import Option from '../components/Option';


export default HomeScreen = ({navigation}) => {
  
  
  return (
    <View style={styles.container}>
      <Option text= 'מערכות שהוזנו' onPress={()=>{navigation.navigate('Systems')}}/>
      <Option text= 'הוסף מערכת' onPress={()=>{navigation.navigate('NewSystem')}} />
      <Option text= 'צור קשר' />
   
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
 
  },
 
});