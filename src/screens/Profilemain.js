import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  TextInput,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

const Profilemain = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Pressable
          style={styles.headerContent}
          onPress={() => navigation.goBack()}
        >
          <Icon name="chevron-back-outline" size={30} />
          <Text style={styles.headerText}>Profile</Text>
        </Pressable>
      </View>

      <View style={styles.imageContainer}>
        {/* <TextInput
            style={styles.input}
            type='file'
        /> */}
        <Image
          source={{
            uri: "https://img.freepik.com/free-photo/artist-white_1368-3546.jpg",
          }}
          style={styles.Image}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
            style={styles.input}
            textContentType="text"
        />
      </View>
    </SafeAreaView>
  );
};

export default Profilemain;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    // backgroundColor: "red",
  },

  headerContent: {
    marginTop: 20,
    width: 220,
    flexDirection: "row",
    left: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 20,
  },
  imageContainer: {
    top: 50,
    width: 200,
    height: 200,
    backgroundColor: "red",
    borderRadius: 100,
    alignSelf: "center",
    overflow:'hidden',
    alignItems: "center",
    elevation: 5,
  },
  Image: {
    width: 400,
    height:350,
    objectFit: "contain",
  },
  inputContainer:{
    // flex:1,
    width: "90%",
    height:400,
    // backgroundColor:'red',
    alignSelf:'center',
    marginTop:50,
    padding:20
  },
  input:{
    width: "90%",
    height: 40,
    borderWidth:1,
    borderRadius:10
  }
});
