import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  StyleSheet,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const Register = () => {
  const navigation = useNavigation(); // Initialize navigation
  return (
    <ScrollView>
      <StatusBar
        barStyle="light-content" // Use "dark-content" if you want light text on a dark background
        backgroundColor="#00cc00"
      />
      <ScrollView style={{ left: 16 }}>
        <View style={{ alignSelf: "center" }}>
          <Image
            source={require("../../assets/Logo.png")}
            style={{ width: 245, height: 60, top: 50 }}
            alt="logo"
          />
        </View>
        <Text
          style={{
            ...styles.text,
            marginTop: 50,
            fontSize: 24,
            fontWeight: 600,
            color: "#55AB60",
          }}
        >
          Register
        </Text>
        <View style={{ top: 10 }}>
          <Text style={styles.text}>Your Name</Text>
          <TextInput
            placeholder="Enter Your Name"
            type="text"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>

        <View style={styles.containerInput}>
          <Text style={styles.text}>Email Id</Text>
          <TextInput
            placeholder="Enter Your Email Id"
            type="email"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>

        <View style={styles.containerInput}>
          <Text style={styles.text}>Password</Text>
          <TextInput
            placeholder="Enter Your Password"
            type="password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            style={styles.textInput}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.text}>Confirm Password</Text>
          <TextInput
            placeholder="Confirm Your Password"
            type="password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            style={styles.textInput}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.text}>Contact Number</Text>
          <TextInput
            placeholder="Enter Your Contact Number"
            keyboardType="numeric"
            autoCapitalize="none"
            autoCorrect={false}
            maxLength={10}
            style={styles.textInput}
          />
        </View>

        <TouchableOpacity
          style={{
            ...styles.containerInput,
            width: 360,
            height: 47,
            backgroundColor: "#55AB60",
            marginTop: 24,
            justifyContent: "center",
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text
            style={{
              alignSelf: "center",
              fontSize: 20,
              fontWeight: 500,
              color: "#fff",
            }}
          >
            Register
          </Text>
        </TouchableOpacity>

        <View style={{ top: 24,right:16 }}>
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
            width: 360,
            justifyContent: "space-around",
            flexDirection: "row",
            top: 24,
            marginBottom: 20,
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
            marginBottom:40
          }}
        >
          <Text style={{ ...styles.text, color: "#858FAD" }}>
            Don't You Have an Account?
          </Text>
          <Text
            style={{ ...styles.text, fontWeight: "bold" }}
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </Text>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "500",
    top: 20,
    color: "#14171F",
  },
  containerInput: {
    top: 20,
    marginBottom: 10,
  },
  textInput: {
    top: 20,
    width: 360,
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
