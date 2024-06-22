import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Contact = () => {
  const navigation = useNavigation();
  const [value, onChangeText] = React.useState();
  return (
    <SafeAreaView style={{ backgroundColor: "#55AB60", flex:1 }}>
      <StatusBar
        barStyle="light-content" // Use "dark-content" if you want light text on a dark background
        backgroundColor="#55AB60"
      />
      <Pressable style={styles.header} onPress={() => navigation.goBack()}>
        <Icon name="chevron-back-outline" size={30} color={"#fff"} />
        <Text
          style={{
            fontSize: 22,
            fontWeight: "700",
            color: "#fff",
            left: 20,
          }}
        >
          Contact Us
        </Text>
      </Pressable>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.containerInside}>
          <Text style={styles.text}>Get In Touch !</Text>
          <Text style={styles.text1}>
            One of our workspace experts will reach out to you based on your
            communicatoin preferences.
          </Text>
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.text2}>Your Details</Text>
          <TextInput
            type="text"
            placeholder="First name"
            style={styles.Input}
          />
          <TextInput type="text" placeholder="Last name" style={styles.Input} />
          <TextInput type="email" placeholder="Email" style={styles.Input} />
          <View style={styles.phone}>
            <View style={styles.selectFlag}>
              <View style={styles.flag}></View>
              <Icon
                name="chevron-down-outline"
                size={30}
                color={"#000000"}
                //   style={{ left: 50 }}
              />
            </View>
            <TextInput
              placeholder="Phone number"
              type="number"
              autoCapitalize="none"
              autoCorrect={false}
              maxLength={10}
              style={styles.textInput2}
            />
          </View>
          <TextInput
            editable
            multiline
            placeholder="Additional Info"
            numberOfLines={4}
            // maxLength={40}
            onChangeText={(text) => onChangeText(text)}
            value={value}
            style={{ ...styles.Input3, height: 165 }}
          />
        </View>
        <View style={styles.submitBtn}>
          <TouchableOpacity>
            <Text style={styles.text3}>Send Message</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerLast}>
          <View style={styles.containerLastinside}>
            <Icon name="location" size={30} color={"#55AB60"} />
            <Text style={styles.text4}>
              2464 Royal Ln. Mesa, New Jersey 45463
            </Text>
          </View>
          <View style={styles.containerLastinside}>
            <Icon name="call" size={30} color={"#55AB60"} />
            <Text style={styles.text4}>
              +1 (773) 600-4875 , +1 (773) 600-4866
            </Text>
          </View>
          <View style={styles.containerLastinside}>
            <Icon name="mail-outline" size={30} color={"#55AB60"} />
            <Text style={styles.text4}>sggrocery@gmail.com</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    flexDirection: "row",
    left: 16,
    paddingTop: 8,
  },
  container: {
    marginTop: 24,
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  containerInside: {
    margin: 30,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    borderRadius: 20,
  },
  text: {
    padding: 6,
    fontSize: 22,
    fontWeight: "600",
    color: "#000000",
    textDecorationLine: "underline",
    alignSelf: "center",
  },
  text1: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 29,
    color: "#838383",
    marginTop: 24,
  },
  text2: {
    marginTop: 30,
    fontSize: 22,
    fontWeight: "600",
    color: "#000000",
    marginBottom: 11,
  },
  containerInput: {
    width: "90%",
    alignSelf: "center",
    marginBottom: 20,
    gap: 14,
  },
  Input: {
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
    paddingLeft: 20,
    fontSize: 22,
    padding: 10,
    height: 64,
  },
  textInput2: {
    fontSize: 22,
    borderLeftWidth: 1,
    color: "D3D3D3",
    paddingLeft: 10,
  },
  Input3: {
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
    paddingLeft: 20,
    fontSize: 22,
    padding: 10,
    textAlignVertical: "top",
    // marginBottom: 90,
  },
  phone: {
    width: "100%",
    height: 64,
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    alignItems: "center",
  },
  selectFlag: {
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
    marginLeft: 16,
  },
  flag: {
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: "green",
  },
  submitBtn: {
    width: 200,
    height: 50,
    marginTop: 20,
    backgroundColor: "#55AB60",
    alignSelf: "center",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text3: {
    fontSize: 22,
    color: "#FFFFFF",
    alignSelf: "center",
    fontWeight: "600",
  },
  containerLast: {
    width: "90%",
    alignSelf: "center",
    top: 24,
    gap: 14,
    marginBottom: 90,
  },
  containerLastinside: {
    // width:,
    height: 60,
    backgroundColor: "#F3FFF5",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
  },
  text4: {
    fontSize: 14,
    fontWeight: "600",
    color: "#55AB60",
  },
});
