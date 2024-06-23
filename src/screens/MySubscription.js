import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  ScrollView,
  StatusBar,
  Image,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const MySubscription = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "#55AB60", flex: 1 }}>
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
          My Subscription
        </Text>
      </Pressable>

      <View style={styles.select}>
        <Text style={styles.selectText}>Subscription -Weekly</Text>
        <Icon name="chevron-down-outline" size={30} right={20} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.containerInside}>
          <View style={styles.content}>
            <Text style={{ fontSize: 18, fontWeight: "700" }}>Today</Text>
            <Text style={{ fontSize: 18, fontWeight: "400" }}>
              (23 September 2023)
            </Text>
            <Icon name="calendar-outline" size={30} />
          </View>

          {/* Card1 */}
          <View style={styles.card}>
            <View style={styles.img}>
              <Image
                source={require("../images/AmulMilk.png")}
                style={styles.image}
              />
            </View>
            <View style={styles.cardContent}>
              <Text
                style={{ fontSize: 16, fontWeight: "600", color: "#575757" }}
              >
                Amul Gold Milk
              </Text>
              <Text style={{ fontSize: 14, fontWeight: "400" }}>500 ml</Text>
              <Text style={{ fontSize: 18, fontWeight: "700" }}>$2</Text>
            </View>
            <Text
              style={{
                width: 80,
                marginTop: 20,
                textAlign: "right",
                fontSize: 14,
                fontWeight: "600",
              }}
            >
              Qty:2
            </Text>
            <Image
              source={require("../images/week.png")}
              style={styles.weekImage}
            />
          </View>
          {/* Card2 */}
          <View style={styles.card}>
            <View style={styles.img}>
              <Image
                source={require("../images/butterMilk.png")}
                style={styles.image}
              />
            </View>
            <View style={styles.cardContent}>
              <Text
                style={{ fontSize: 16, fontWeight: "600", color: "#575757" }}
              >
                Amul Buttermilk
              </Text>
              <Text style={{ fontSize: 14, fontWeight: "400" }}>500 ml</Text>
              <Text style={{ fontSize: 18, fontWeight: "700" }}>$1</Text>
            </View>
            <Text
              style={{
                width: 80,
                marginTop: 20,
                textAlign: "right",
                fontSize: 14,
                fontWeight: "600",
              }}
            >
              Qty:3
            </Text>
            <Image
              source={require("../images/week.png")}
              style={styles.weekImage}
            />
          </View>
          {/* Card3 */}
          <View style={styles.card}>
            <View style={styles.img}>
              <Image
                source={require("../images/banana.png")}
                style={styles.image}
              />
            </View>
            <View style={styles.cardContent}>
              <Text
                style={{ fontSize: 16, fontWeight: "600", color: "#575757" }}
              >
                Amul Gold Milk
              </Text>
              <Text style={{ fontSize: 14, fontWeight: "400" }}>1 kg</Text>
              <Text style={{ fontSize: 18, fontWeight: "700" }}>$2</Text>
            </View>
            <Text
              style={{
                width: 80,
                marginTop: 20,
                textAlign: "right",
                fontSize: 14,
                fontWeight: "600",
              }}
            >
              Qty:1
            </Text>
            <Image
              source={require("../images/week.png")}
              style={styles.weekImage}
            />
          </View>
          
          <Image source={require('../images/illustration.png')} style={styles.logo}/>
          <Text style={{marginTop:16,alignSelf:'center', fontSize:15, fontWeight:'400'}}>Excited to serve you the best quality</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MySubscription;

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
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
    marginTop: 25,
    width: "90%",
    alignSelf: "center",
    marginBottom:30
  },
  select: {
    top: 15,
    width: "90%",
    height: 57,
    fontSize: 18,
    fontWeight: "400",
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
  },
  selectText: {
    fontSize: 18,
    fontWeight: "400",
    paddingLeft: 16,
    color: "#424242",
  },
  content: {
    width: "90%",
    flexDirection: "row",
    gap: 5,
  },
  card: {
    marginTop: 25,
    height: 119,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    elevation: 5,
    flexDirection: "row",
    gap: 20,
    marginBottom: 10,
  },
  img: {
    width: 89,
    height: 89,
    backgroundColor: "#F9F9F9",
    marginLeft: 16,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    width: 60,
    height: 60,
    objectFit: "contain",
  },
  cardContent: {
    marginTop: 20,
  },
  weekImage: {
    position: "absolute",
    width: 159,
    height: 43,
    alignSelf: "flex-end",
    right: 0,
  },
  logo:{
    marginTop:34,
    width:216,
    height:88,
    objectFit:'contain',
    alignSelf:'center'
  }
});
