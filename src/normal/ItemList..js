import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import { useRoute } from "@react-navigation/native";
import { imageData } from "../components/Itemlist";
import { useNavigation } from "@react-navigation/native";

const Details = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { category, itemId } = route.params;

  const items = imageData.find((data) => data[category])[category];
  const selectedItem = items.find((item) => item.id === itemId);

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
          {category}
        </Text>
      </View>

      <ScrollView style={styles.container}>
      <View style={styles.containerInsideCard}>
        <View style={styles.gridContainer}>
          {items.map((item) => (
            <View style={styles.card} key={item.id}>
              <View style={styles.containerInside}>
                <Image
                  source={item.uri}
                  style={{ width: 100, height: 80, objectFit: "contain" }}
                />
                <Image
                  source={require("../images/icon/love.png")}
                  style={styles.love}
                />
                <Text style={{paddingHorizontal:6}} numberOfLines={1}>{`${item.name} (${item.quantity})`}</Text>
                <View style={styles.cardInsideIcon}>
                  <Text
                    style={{
                      color: "#55AB60",
                      fontWeight: "600",
                      fontSize: 18,
                    }}
                  >
                    {`${item.price}`}
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
          ))}
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
  },

  containerInsideCard:{
    marginTop:20,
    marginBottom:50,
    width: "100%",
    justifyContent:'center',
  },
  gridContainer: {
    width:'88%',
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
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
    elevation:5
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
    gap: 8,
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
    right: 10,
    top: 10,
  },
});
