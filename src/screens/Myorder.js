import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Pressable,
  Image,
  TouchableOpacity
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Myorder = () => {
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
          My Orders
        </Text>
      </Pressable>

      <ScrollView style={styles.container}>
        <View style={styles.containerInside}>
          <Text style={{ fontSize: 22, fontWeight: "600", marginBottom: 24 }}>
            Order History
          </Text>
          <View style={{flexDirection:'row',width:'100%'}}>
            <View style={styles.line}>
                <View style={styles.lineCirlce}></View>
                <View style={styles.lineCirlce}></View>
                <View style={{...styles.lineCirlce,top:-20}}></View>
            </View>

            <View>
              <View style={styles.card}>
                <Image
                  source={require("../images/Appl3.png")}
                  style={styles.img}
                />
                <View style={styles.cardInside}>
                  <Image
                    source={require("../images/rice_B.png")}
                    style={styles.img2}
                  />
                  <Text style={styles.cardNum}>+1</Text>
                </View>
                <View style={{ gap: 10 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "600",
                      color: "#000000",
                    }}
                  >
                    Arrives Tomorrow
                  </Text>
                  <Text
                    style={{ fontSize: 16, fontWeight: "400", lineHeight: 19 }}
                  >
                    7 AM - PM
                  </Text>
                </View>
              </View>
              <View>
                <View style={styles.content}>
                <TouchableOpacity>
                  <Text style={styles.text1}>View order details</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.text2}>Track Order</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.content}>
                  <Text style={styles.text3}>Edit Order</Text>
                  <Text style={styles.text3}>Get Invoice</Text>
                </View>
              </View>

              {/* card2 */}
              <View style={styles.card}>
                <Image
                  source={require("../images/leaves.png")}
                  style={styles.img}
                />
                <View style={styles.cardInside}>
                  <Image
                    source={require("../images/rice_B.png")}
                    style={styles.img2}
                  />
                  <Text style={styles.cardNum}>+1</Text>
                </View>
                <View style={{ gap: 10 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "600",
                      color: "#000000",
                    }}
                  >
                    Delivered on 23 oct
                  </Text>
                </View>
              </View>
              <View>
                <View
                  style={{ ...styles.content, marginTop: 30, marginBottom: 30 }}
                >
                  <TouchableOpacity>
                  <Text style={styles.text1}>View order details</Text>
                </TouchableOpacity>
                  <Text style={{ ...styles.text3, top: 8 }}>Get Invoice</Text>
                </View>
              </View>

              {/* card3 */}
              <View style={styles.card}>
                <Image
                  source={require("../images/M_juice.png")}
                  style={styles.img}
                />
                <View style={styles.cardInside}>
                  <Image
                    source={require("../images/rice_B.png")}
                    style={styles.img2}
                  />
                  <Text style={styles.cardNum}>+1</Text>
                </View>
                <View style={{ gap: 10 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "600",
                      color: "#000000",
                    }}
                  >
                    Delivered on 23 oct
                  </Text>
                </View>
              </View>
              <View>
                <View
                  style={{ ...styles.content, marginTop: 30, marginBottom: 30 }}
                >
                  <TouchableOpacity>
                  <Text style={styles.text1}>View order details</Text>
                </TouchableOpacity>
                  <Text style={{ ...styles.text3, top: 8 }}>Get Invoice</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Myorder;

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
    margin: 30,
    width: "100%",
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
   left:16
  },
  card: {
    width: "90%",
    height: 100,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    paddingLeft: 10,
  },
  img: {
    width: 60,
    height: 76,
    objectFit: "contain",
  },
  img2: {
    width: 50,
    height: 50,
    objectFit: "contain",
    opacity: 0.4,
  },
  cardInside: {
    width: 53,
    height: 55,
    backgroundColor: "#dedcdc",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  cardNum: {
    position: "absolute",
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "400",
    alignSelf: "center",
  },
  content: {
    width: "90%",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 16,
  },
  text1: {
    width: 145,
    height: 36,
    borderColor: "#55AB60",
    borderWidth: 1,
    textAlignVertical: "center",
    borderRadius: 5,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "600",
    color: "#55AB60",
  },
  text2: {
    width: 100,
    height: 36,
    backgroundColor: "#55AB60",
    color: "#FFFFFF",
    textAlignVertical: "center",
    borderRadius: 5,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "600",
  },
  text3: {
    fontSize: 14,
    fontWeight: "600",
    color: "#55AB60",
    textDecorationLine: "underline",
    marginBottom: 20,
  },
  line:{
    flex:1,
    left:10,
    borderLeftWidth:1,
    borderColor:'#55AB60',
    top:10,
    gap:200
  },
  lineCirlce:{
    width:18,
    height:18,
    left:-10,
    borderWidth:2,
    borderColor:'#55AB60',
    backgroundColor:'#fff',
    borderRadius:100
  }
});
