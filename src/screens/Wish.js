import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const Wish = () => {
  return (
    <SafeAreaView style={{ marginTop: 60 }}>
      <View>
        <View style={styles.container}>
          <Text style={styles.text}>Wishlist</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Wish;

const styles = StyleSheet.create({
  container: {
    top: 20,
    width: "50%",
    height: "400",
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
    shadowColor:'black',
    shadowOffset:{width:0, height:3},
    shadowOpacity:0.5,
    shadowRadius:3,
    
  },
  text: {
    fontSize: 30,
  },
});
