import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/Ionicons";

const Details = () => {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <View style={styles.headerContent}>
        <Icon
          name="chevron-back-outline"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.text}>Details</Text>
      </View>
      <View style={styles.ImageContainer}>
        <Image
          source={require("../images/Fruits/GreenApple.png")}
          style={styles.Image}
        />
      </View>

      <View>
        <Text style={{ fontSize: 28, fontWeight: "700", top: 20 }}>
          Green Apple
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Icon name="remove-circle-outline" size={20} style={styles.minus} />
          <Text style={styles.increment}>1</Text>

          <Icon name="add-circle" size={20} style={styles.plus} />
        </View>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  headerContent: {
    width: "100%",
    height: 229,
    flexDirection: "row",
    backgroundColor: "#55AB60",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  text: {
    fontSize: 22,
    fontWeight: "700",
  },
  ImageContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  Image: {
    position: "absolute",
    width: 240,
    height: 219,
    top: -100,
  },
  minus: {
    color: "#55AB60",
    fontSize: 30,
  },
  plus: {
    color: "#55AB60",
    fontSize: 30,
  },
  increment: {
    color: "#55AB60",
    fontSize: 20,
    fontWeight: "600",
  },
});
