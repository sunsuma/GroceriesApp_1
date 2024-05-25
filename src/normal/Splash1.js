import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const Splash1 = ({navigation}) => {
  useEffect(()=>{
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  },[])

  return (
    <View style={styles.container}>
      <Image
          source={require("../../assets/Logo.png")}
          style={{ width: 245, height: 60, top: 50, }}
          alt="logo"
        />
        <Text style={styles.text}>Your needs in just one place</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text:{
    marginTop:60,
    fontSize:20
  }

});

export default Splash1;
