import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Login = () => {
  const navigation = useNavigation(); // Initialize navigation
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#fff" />
      <View style={{ alignSelf: "center" }}>
        <Image
          source={require("../../assets/Logo.png")}
          style={{ width: 221, height: 53, top: 50, marginBottom: 80 }}
          alt="logo"
        />
        <Image
          source={require("../../assets/Illustrator.png")}
          style={{ width: 157, height: 152 }}
          alt="illustrator"
        />
      </View>
      <Text
        style={{
          fontSize: 24,
          color: "#55AB60",
          marginLeft: 16,
          fontWeight: 600,
        }}
      >
        Login
      </Text>
      <View style={styles.containerInput}>
        <Text style={styles.text}>Email Id</Text>
        <TextInput
          placeholder="Enter your email Id"
          type="email"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.textInput}
        />
      </View>
      <View style={styles.containerInput}>
        <Text style={styles.text}>Password</Text>
        <TextInput
          placeholder="Enter your email Id"
          type="Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          style={styles.textInput}
        />
      </View>
      <TouchableOpacity
        style={{
          ...styles.containerInput,
          width: 365,
          height: 47,
          backgroundColor: "#55AB60",
          top: 24,
          justifyContent: "center",
          borderRadius: 10,
        }}
        onPress={() => navigation.navigate("Menu")}
      >
        <Text
          style={{
            alignSelf: "center",
            fontSize: 20,
            fontWeight: 500,
            color: "#fff",
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
      <View style={{ top: 24 }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            marginBottom: 20,
          }}
        >
          <View style={styles.line} />
          <Text
            style={{
              fontSize: 18,
              color: "#858FAD",
              paddingLeft: 8,
              paddingRight: 8,
            }}
          >
            Or continue with
          </Text>
          <View style={styles.line} />
        </View>
      </View>

      <View
        style={{
          width: 365,
          justifyContent: "space-around",
          flexDirection: "row",
          top: 24,
          marginBottom: 20,
          left: 16,
          gap: 10,
        }}
      >
        <TouchableOpacity style={styles.socialMedia}>
          <View style={styles.socialMediaIcon}>
            <Image
              source={require("../../assets/google.png")}
              style={{ width: 32, height: 32 }}
            />
            <Text style={{ fontSize: 18 }}>Google</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialMedia}>
          <View style={styles.socialMediaIcon}>
            <Image
              source={require("../../assets/fb.png")}
              style={{ width: 35, height: 32 }}
            />
            <Text style={{ fontSize: 18 }}>Facebook</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap: 5,
        }}
      >
        <Text style={{ ...styles.text, color: "#858FAD" }}>
          Don't You Have an Account?
        </Text>
        <Text
          style={{ ...styles.text, fontWeight: "bold" }}
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
    top: 20,
    color: "#14171F",
  },
  containerInput: {
    marginLeft: 16,
    marginBottom: 20,
  },
  textInput: {
    top: 30,
    width: 365,
    height: 47,
    borderRadius: 10,
    color: "#000",
    borderWidth: 1,
    fontSize: 20,
    padding: 10,
  },
  line: {
    width: 105,
    height: 1,
    backgroundColor: "#858FAD",
  },
  socialMedia: {
    width: 170,
    height: 50,
    borderWidth: 2,
    borderColor: "#55AB60",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  socialMediaIcon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});
