import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
// import {  } from "react-native-gesture-handler";

const Details = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "#55AB60" }}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Icon
          name="chevron-back-outline"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text style={{ fontSize: 22, fontWeight: "700", marginBottom: 10 }}>
          Fruits
        </Text>
      </View>

      <ScrollView style={styles.container}>
        <View style={styles.card}>
          <View style={styles.containerInside}>
            <Image
              source={require("../images/Fruits/berry.png")}
              style={{ width: 95, height: 80 }}
            />
            <Image
              source={require("../images/icon/love.png")}
              style={styles.love}
            />

            <Text>Strawberry (1kg)</Text>
            <View style={styles.cardInsideIcon}>
              <Text
                style={{ color: "#55AB60", fontWeight: "600", fontSize: 18 }}
              >
                $4
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <Icon
                  name="remove-circle-outline"
                  size={20}
                  style={styles.minus}
                />
                <Text style={styles.increment}>1</Text>

                <Icon name="add-circle" size={20} style={styles.plus} />
              </View>
            </View>
            <View style={styles.content}>
              <Text style={styles.text1}>Subscribe</Text>
              <Text style={styles.text2}>Buy Once</Text>
            </View>
          </View>
          <View style={styles.containerInside}>
            <Image
              source={require("../images/Fruits/Banana.png")}
              style={{ width: 95, height: 80 }}
            />
            <Image
              source={require("../images/icon/love.png")}
              style={styles.love}
            />
            <Text>Banana (1kg)</Text>
            <View style={styles.cardInsideIcon}>
              <Text
                style={{ color: "#55AB60", fontWeight: "600", fontSize: 18 }}
              >
                $2
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <Icon
                  name="remove-circle-outline"
                  size={20}
                  style={styles.minus}
                />
                <Text style={styles.increment}>1</Text>

                <Icon name="add-circle" size={20} style={styles.plus} />
              </View>
            </View>
            <View style={styles.content}>
              <Text style={styles.text1}>Subscribe</Text>
              <Text style={styles.text2}>Buy Once</Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.containerInside}>
            <Image
              source={require("../images/Fruits/Kiwi.png")}
              style={{ width: 95, height: 80 }}
            />
            <Image
              source={require("../images/icon/love.png")}
              style={styles.love}
            />
            <Text>Kiwifruits (3units)</Text>
            <View style={styles.cardInsideIcon}>
              <Text
                style={{ color: "#55AB60", fontWeight: "600", fontSize: 18 }}
              >
                $4
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <Icon
                  name="remove-circle-outline"
                  size={20}
                  style={styles.minus}
                />
                <Text style={styles.increment}>1</Text>

                <Icon name="add-circle" size={20} style={styles.plus} />
              </View>
            </View>
            <View style={styles.content}>
              <Text style={styles.text1}>Subscribe</Text>
              <Text style={styles.text2}>Buy Once</Text>
            </View>
          </View>
          <View style={styles.containerInside}>
            <Image
              source={require("../images/Fruits/Grapes.png")}
              style={{ width: 100, height: 80 }}
            />
            <Image
              source={require("../images/icon/love.png")}
              style={styles.love}
            />
            <Text>Grapes (1kg)</Text>
            <View style={styles.cardInsideIcon}>
              <Text
                style={{ color: "#55AB60", fontWeight: "600", fontSize: 18 }}
              >
                $4
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <Icon
                  name="remove-circle-outline"
                  size={20}
                  style={styles.minus}
                />
                <Text style={styles.increment}>1</Text>

                <Icon name="add-circle" size={20} style={styles.plus} />
              </View>
            </View>
            <View style={styles.content}>
              <Text style={styles.text1}>Subscribe</Text>
              <Text style={styles.text2}>Buy Once</Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.containerInside}>
            <Image
              source={require("../images/Fruits/melon.png")}
              style={{ width: 95, height: 85 }}
            />
            <Image
              source={require("../images/icon/love.png")}
              style={styles.love}
            />
            <Text>Watermelon (1kg)</Text>
            <View style={styles.cardInsideIcon}>
              <Text
                style={{ color: "#55AB60", fontWeight: "600", fontSize: 18 }}
              >
                $4
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <Icon
                  name="remove-circle-outline"
                  size={20}
                  style={styles.minus}
                />
                <Text style={styles.increment}>1</Text>

                <Icon name="add-circle" size={20} style={styles.plus} />
              </View>
            </View>
            <View style={styles.content}>
              <Text style={styles.text1}>Subscribe</Text>
              <Text style={styles.text2}>Buy Once</Text>
            </View>
          </View>

          <View style={styles.containerInside}>
            <Image
              source={require("../images/Fruits/orange.png")}
              style={{ width: 95, height: 80 }}
            />
            <Image
              source={require("../images/icon/love.png")}
              style={styles.love}
            />
            <Text>Orange (1kg)</Text>
            <View style={styles.cardInsideIcon}>
              <Text
                style={{ color: "#55AB60", fontWeight: "600", fontSize: 18 }}
              >
                $4
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <Icon
                  name="remove-circle-outline"
                  size={20}
                  style={styles.minus}
                />
                <Text style={styles.increment}>1</Text>

                <Icon name="add-circle" size={20} style={styles.plus} />
              </View>
            </View>
            <View style={styles.content}>
              <Text style={styles.text1}>Subscribe</Text>
              <Text style={styles.text2}>Buy Once</Text>
            </View>
          </View>
        </View>
        <View style={{ ...styles.card, marginBottom: 60 }}>
          <View style={styles.containerInside}>
            <Image
              source={require("../images/Fruits/guava.png")}
              style={{ width: 110, height: 85 }}
            />
            <Image
              source={require("../images/icon/love.png")}
              style={styles.love}
            />
            <Text>Guava (1kg)</Text>
            <View style={styles.cardInsideIcon}>
              <Text
                style={{ color: "#55AB60", fontWeight: "600", fontSize: 18 }}
              >
                $4
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <Icon
                  name="remove-circle-outline"
                  size={20}
                  style={styles.minus}
                />
                <Text style={styles.increment}>1</Text>

                <Icon name="add-circle" size={20} style={styles.plus} />
              </View>
            </View>
            <View style={styles.content}>
              <Text style={styles.text1}>Subscribe</Text>
              <Text style={styles.text2}>Buy Once</Text>
            </View>
          </View>

          <View style={styles.containerInside}>
            <Image
              source={require("../images/Fruits/Avocado.png")}
              style={{ width: 80, height: 85 }}
            />
            <Image
              source={require("../images/icon/love.png")}
              style={styles.love}
            />
            <Text>Avocado (1kg)</Text>
            <View style={styles.cardInsideIcon}>
              <Text
                style={{ color: "#55AB60", fontWeight: "600", fontSize: 18 }}
              >
                $4
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <Icon
                  name="remove-circle-outline"
                  size={20}
                  style={styles.minus}
                />
                <Text style={styles.increment}>1</Text>

                <Icon name="add-circle" size={20} style={styles.plus} />
              </View>
            </View>
            <View style={styles.content}>
              <Text style={styles.text1}>Subscribe</Text>
              <Text style={styles.text2}>Buy Once</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  header: {
    // marginTop: 50,
    width: 220,
    flexDirection: "row",
    left: 16,
  },
  container: {
    width: "100%",
    height: "auto",
    marginTop: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#f2f0f0",
    // backgroundColor: "red",
  },
  card: {
    marginTop: 20,
    width: 160,
    height: 200,
    left: 24,
    flexDirection: "row",
    gap: 25,
  },
  containerInside: {
    width: "100%",
    backgroundColor: "#F2FCF4",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  cardInsideIcon: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor:'red'
  },
  minus: {
    color: "#55AB60",
  },
  plus: {
    color: "#55AB60",
  },
  increment: {
    color: "#55AB60",
    fontSize: 20,
    fontWeight: "600",
  },
  content: {
    top: 10,
    width: "90%",
    flexDirection: "row",
    gap: 14,
  },
  text1: {
    backgroundColor: "#55AB60",
    padding: 2,
    borderRadius: 5,
    color: "#fff",
  },
  text2: {
    backgroundColor: "#fff",
    padding: 2,
    borderRadius: 5,
    color: "#55AB60",
    borderWidth: 1,
    borderColor: "#55AB60",
    paddingLeft: 4,
  },
  love: {
    position: "absolute",
    width: 35,
    height: 35,
    right:10,
    top:10
  },
});
