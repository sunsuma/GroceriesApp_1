import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Pressable,
  TextInput,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Checkbox from "../components/Checkbox";

const Payment = () => {
  const navigation = useNavigation();

  const image = [
    { id: 1, Img: require("../images/card1.png") },
    { id: 2, Img: require("../images/card2.png") },
  ];
  return (
    <SafeAreaView
      style={{ width: "100%", backgroundColor: "#55AB60", flex: 1 }}
    >
      <StatusBar
        barStyle="light-content" // Use "dark-content" if you want light text on a dark background
        backgroundColor="#55AB60"
      />
      <Pressable style={styles.header} onPress={() => navigation.goBack()}>
        <Icon name="chevron-back-outline" size={30} color={"#fff"} />
        <Text style={styles.headerText}>Payment</Text>
      </Pressable>

      <ScrollView style={styles.container}>
        <View style={{ ...styles.containerInside, marginBottom: 80 }}>
          <Text style={styles.containerText}>Contact Details</Text>
          <View style={{ top: 24 }}>
            <TextInput
              placeholder="First Name"
              type="text"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.textInput}
            />
            <TextInput
              placeholder="Last Name"
              type="text"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.textInput}
            />
            <TextInput
              placeholder="Email"
              type="gmail"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.textInput}
            />
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
            <View styles={styles.optionAddress}>
              <Text style={{ fontSize: 22, fontWeight: "600" }}>
                Choose Delivery Address
              </Text>

              {/* Address */}
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <Checkbox style={{ top: 24 }} />
                <View style={styles.containerAddresInside}>
                  <View style={styles.addressInner}>
                    <View style={styles.addressInnerHeader}>
                      <View style={{ flexDirection: "row", gap: 10 }}>
                        <Icon
                          name="home-outline"
                          size={18}
                          color={"#111"}
                          top={2}
                          style={styles.Icon}
                        />
                        <Text style={styles.addressInnertext}>Home</Text>
                      </View>
                      <View style={{ flexDirection: "row", gap: 10 }}>
                        <Icon
                          name="pencil-outline"
                          size={18}
                          color={"#111"}
                          style={styles.Icon}
                        />
                        <Icon
                          name="trash-outline"
                          size={18}
                          color={"#111"}
                          style={styles.Icon}
                        />
                      </View>
                    </View>
                    <Text
                      style={{
                        width: "90%",
                        height: 400,
                        left: 16,
                        top: 16,
                        fontSize: 16,
                        fontWeight: "600",
                      }}
                    >
                      4517 Washington Ave. {"\n"}Manchester, Kentucky 39495
                    </Text>
                  </View>
                </View>
              </View>

              {/* Office */}
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  alignItems: "center",
                  top: 24,
                  marginBottom: 80,
                }}
              >
                <Checkbox style={{ top: 24 }} />
                <View style={styles.containerAddresInside}>
                  <View style={styles.addressInner}>
                    <View style={styles.addressInnerHeader}>
                      <View style={{ flexDirection: "row", gap: 10 }}>
                        <Icon
                          name="business-outline"
                          size={18}
                          color={"#111"}
                          top={2}
                          style={styles.Icon}
                        />
                        <Text style={styles.addressInnertext}>Office</Text>
                      </View>
                      <View style={{ flexDirection: "row", gap: 10 }}>
                        <Icon
                          name="pencil-outline"
                          size={18}
                          color={"#111"}
                          style={styles.Icon}
                        />
                        <Icon
                          name="trash-outline"
                          size={18}
                          color={"#111"}
                          style={styles.Icon}
                        />
                      </View>
                    </View>
                    <Text
                      style={{
                        width: "90%",
                        height: 400,
                        left: 16,
                        top: 16,
                        fontSize: 16,
                        fontWeight: "600",
                      }}
                    >
                      2118 Thornridge Cir. {"\n"}Syracuse, Connecticut 35624
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={{ flexDirection: "row-reverse", gap: 6 }}>
              <Text
                style={{ color: "#55AB60", fontSize: 18, fontWeight: "600" }}
              >
                Add New Address
              </Text>
              <Icon
                name="add-circle-outline"
                size={24}
                color={"#55AB60"}
                style={styles.Icon}
              />
            </View>
            <Text style={{ fontSize: 18, fontWeight: "600", top: 20 }}>
              Do you have a promo code / Coupon ?
            </Text>

            <View style={styles.couponContainer}>
              <Icon
                name="pricetag-outline"
                size={30}
                style={{ left: 30, color: "#7E7E7E" }}
              />
              <TextInput
                placeholder="Enter your code"
                type="number"
                autoCapitalize="none"
                autoCorrect={false}
                maxLength={10}
                style={styles.couponInput}
              />
            </View>

            <View
              style={{
                width: "50%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#55AB60",
                alignSelf: "center",
                borderRadius: 10,
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  padding: 10,
                  color: "#fff",
                  fontSize: 18,
                  fontWeight: "600",
                }}
              >
                Apply Now
              </Text>
            </View>

            <View>
              <Text style={styles.paymentText}>Choose payment method</Text>
              {/* payment Options */}
              <View style={styles.paymentOptions}>
                <View style={styles.paymentContent}>
                  <View style={styles.radio}></View>
                  <Text style={styles.paymentTextInside}>Cash on Delivery</Text>
                </View>
              </View>

              <View style={styles.paymentOptions}>
                <View style={styles.paymentContent}>
                  <View style={styles.radio}></View>
                  <Text style={styles.paymentTextInside}>UPI</Text>
                </View>
              </View>

              <View style={styles.paymentOptions}>
                <View style={styles.paymentContent}>
                  <View style={styles.radio}></View>
                  <Text style={styles.paymentTextInside}>Wallet</Text>
                </View>
              </View>

              <View style={styles.paymentOptions}>
                <View style={styles.paymentContent}>
                  <View style={styles.radio}></View>
                  <Text style={styles.paymentTextInside}>
                    Credit / Debit Card
                  </Text>
                </View>
              </View>

              <View style={{ flexDirection: "row-reverse", gap: 6, top: 16 }}>
                <Text
                  style={{ color: "#55AB60", fontSize: 18, fontWeight: "600" }}
                >
                  Add New Card
                </Text>
                <Icon
                  name="add-circle-outline"
                  size={24}
                  color={"#55AB60"}
                  style={styles.Icon}
                />
              </View>

              <View style={styles.paymentCard}>
                <FlatList
                  data={image}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item }) => {
                    return (
                      <View style={styles.card}>
                        <Image source={item.Img} style={styles.cardImage} />
                      </View>
                    );
                  }}
                />
              </View>

              <View style={{flexDirection:'row', gap:10, width:'100%', height:42,backgroundColor:'#55AB60',alignItems:'center',borderRadius:10, marginTop:20}}>
                <Text style={{fontSize:20, fontWeight:'400', color:'#fff',marginLeft:16}}>Enter CVV</Text>
                <Text style={{width:201,height:34,fontSize:20, fontWeight:'400', color:'#BCBCBC',marginLeft:16, backgroundColor:'#FFFFFF',borderRadius:8, paddingHorizontal:16}}>e.g. 123</Text>
              </View>

              <View style={{justifyContent:'center', alignItems:'center', marginTop:20}}>
              <Text style={{ width:150,height:50,backgroundColor:'#55AB60', fontSize:18, fontWeight:'600', color:'#fff', textAlign:'center', borderRadius:10,verticalAlign:'middle'}}>Pay $9.97</Text>
              </View> 

              <Text style={{fontSize:14, fontWeight:'400', top:16, marginBottom:98}}>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <Text style={{color:'#55AB60'}}>privacy policy</Text>.</Text>   
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Payment;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#55AB60",
  },
  headerText: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 10,
    color: "#fff",
  },
  container: {
    flex: 1,
    top: 20,
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: 18,
  },
  containerInside: {
    width: "90%",
    top: 20,
  },
  containerText: {
    fontSize: 22,
    fontWeight: "600",
  },
  textInput: {
    width: "100%",
    height: 47,
    borderRadius: 10,
    fontSize: 20,
    padding: 10,
    marginBottom: 16,
    backgroundColor: "#F5F5F5",
  },
  textInput2: {
    fontSize: 20,
    borderLeftWidth: 1,
    color: "D3D3D3",
    paddingLeft: 10,
  },
  phone: {
    width: "100%",
    height: 47,
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 30,
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
  optionAddress: {
    width: "100%",
    height: 100,
    // backgroundColor: "red",
  },
  containerAddresInside: {
    top: 24,
    width: "90%",
    height: 174,
    backgroundColor: "pink",
    alignItems: "center",
    borderRadius: 20,
    elevation: 3,
  },
  addressInner: {
    top: 24,
    width: "90%",
    height: 40,
  },
  addressInnerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addressInnertext: {
    fontSize: 18,
    fontWeight: "600",
  },
  couponContainer: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
  },
  couponInput: {
    width: "100%",
    height: 64,
    fontSize: 18,
    fontWeight: "400",
    paddingHorizontal: 40,
  },
  paymentText: {
    fontSize: 22,
    fontWeight: "600",
    marginTop: 20,
  },
  paymentOptions: {
    marginTop: 16,
    width: "100%",
    height: 57,
    backgroundColor: "#F3FFF5",
    verticalAlign: "center",
    borderRadius: 10,
    justifyContent: "center",
  },
  paymentContent: {
    flexDirection: "row",
    gap: 8,
    left: 16,
  },
  // check box
  radio: {
    width: 24,
    height: 24,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "#A3A3A3",
  },
  paymentTextInside: {
    fontSize: 18,
    fontWeight: "400",
    color: "#7E7E7E",
  },
  paymentCard: {
    width: 400,
    // backgroundColor:'red'
  },
  card: {
    width: "100%",
    height: 151,
    marginBottom: 90,
    // backgroundColor:'red'
  },

  cardImage: {
    width: 350,
    height: 300,
    objectFit: "contain",
  },
});
