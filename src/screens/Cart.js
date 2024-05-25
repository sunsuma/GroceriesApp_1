import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";
// import { TouchableHighlight, TouchableOpacity } from "react-native-web";

const Cart = () => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Icon name="chevron-back-outline" size={30} />
        <Text
          style={{
            ...styles.headerText,
            fontSize: 22,
            fontWeight: "700",
            marginLeft: 40,
            marginBottom: 10,
          }}
        >
          My Cart
        </Text>
      </View>
      <ScrollView>
        <Text style={styles.containerText}>Tomorrow, 7 AM - 9 PM</Text>

        {/* Start Card */}
        <View style={styles.cardContainer}>
          <View style={styles.cardImage}>
            {/* Image */}
            <Image
              source={require("../images/basmati.png")}
              style={{ ...styles.Image, height: 80 }}
            />
          </View>

          <View style={styles.cardText}>
            {/* Text */}
            <View>
              <Text style={styles.Imagetext}>Basmati Rice</Text>
              <Text style={{ ...styles.Imagetext, color: "#787878" }}>
                1 kg
              </Text>
              <Text style={styles.Imagetext}>
                $4{" "}
                <Text
                  style={{
                    textDecorationLine: "line-through",
                    color: "#B4B4B4",
                  }}
                >
                  $8
                </Text>
              </Text>
            </View>
            <View
              style={{ ...styles.cardInside, flexDirection: "row-reverse" }}
            >
              <Text style={{ fontSize: 20, fontWeight: "600", left: 20 }}>
                X
              </Text>
              <View style={styles.cardInsideIcon}>
                <Icon
                  name="remove-circle-outline"
                  size={35}
                  style={styles.minus}
                />
                <Text style={styles.increment}>1</Text>

                <Icon name="add-circle" size={35} style={styles.plus} />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.cardContainer}>
          <View style={styles.cardImage}>
            {/* Image */}
            <Image
              source={require("../images/Shimla Apple.png")}
              style={styles.Image}
            />
          </View>

          <View style={styles.cardText}>
            {/* Text */}
            <View>
              <Text style={styles.Imagetext}>Shimla Apple</Text>
              <Text style={{ ...styles.Imagetext, color: "#787878" }}>
                1 kg
              </Text>
              <Text style={styles.Imagetext}>
                $2{" "}
                <Text
                  style={{
                    textDecorationLine: "line-through",
                    color: "#B4B4B4",
                  }}
                >
                  $3.25
                </Text>
              </Text>
            </View>
            <View
              style={{ ...styles.cardInside, flexDirection: "row-reverse" }}
            >
              <Text style={{ fontSize: 20, fontWeight: "600", left: 20 }}>
                X
              </Text>
              <View style={styles.cardInsideIcon}>
                <Icon
                  name="remove-circle-outline"
                  size={35}
                  style={styles.minus}
                />
                <Text style={styles.increment}>1</Text>

                <Icon name="add-circle" size={35} style={styles.plus} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.cardImage}>
            {/* Image */}
            <Image
              source={require("../images/tomato1.png")}
              style={{ ...styles.Image, height: 65 }}
            />
          </View>

          <View style={styles.cardText}>
            {/* Text */}
            <View>
              <Text style={styles.Imagetext}>Organic Tomatoes</Text>
              <Text style={{ ...styles.Imagetext, color: "#787878" }}>
                1 kg
              </Text>
              <Text style={styles.Imagetext}>
                $1{" "}
                <Text
                  style={{
                    textDecorationLine: "line-through",
                    color: "#B4B4B4",
                  }}
                >
                  $2
                </Text>
              </Text>
            </View>
            <View
              style={{
                ...styles.cardInside,
                flexDirection: "row-reverse",
                position: "absolute",
                right: -19,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "600", left: 20 }}>
                X
              </Text>
              <View style={{ ...styles.cardInsideIcon, marginTop: 30 }}>
                <Icon
                  name="remove-circle-outline"
                  size={35}
                  style={styles.minus}
                />
                <Text style={styles.increment}>1</Text>

                <Icon name="add-circle" size={35} style={styles.plus} />
              </View>
            </View>
          </View>
        </View>

        {/* Advertisement logo */}
        <View style={styles.imageContainer}>
          <Image
            source={require("../images/offer_1.png")}
            style={{
              ...styles.containerInsideImage,
              left: 5,
              marginBottom: 10,
            }}
          />
          <Image
            source={require("../images/offer_2.png")}
            style={styles.containerInsideImage}
          />
        </View>

        <Text style={styles.text}>
          Promo code can be applied on {"\n"} {"            "}payment screen
        </Text>
        {/* Regarding payments detail */}
        <View style={styles.payment}>
          <Text style={styles.headerText}>Payment details</Text>
          <View style={styles.paymentContainer}>
            <View style={styles.paymentContainerInside}>
              <Text style={styles.paymentText}>Total MRP</Text>
              <Text style={styles.paymentText}>$9.97</Text>
            </View>
            <View style={styles.paymentContainerInside}>
              <Text style={styles.paymentText}>Discount</Text>
              <Text style={styles.paymentText}>$0.00</Text>
            </View>
            <View style={styles.paymentContainerInside}>
              <Text style={styles.paymentText}>Shipping Charges</Text>
              <Text style={styles.paymentText}>Free</Text>
            </View>

            <View
              style={{
                backgroundColor: "#DCFFE2",
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
              }}
            >
              <View style={styles.paymentContainerInside}>
                <Text
                  style={{
                    ...styles.paymentText,
                    fontWeight: "600",
                    fontSize: 18,
                    color: "#111",
                  }}
                >
                  Total
                </Text>
                <Text
                  style={{
                    ...styles.paymentText,
                    fontWeight: "600",
                    fontSize: 18,
                    color: "#111",
                  }}
                >
                  $9.97
                </Text>
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.checkout}>
          <View style={styles.checkoutInside}>
            <Text style={styles.checkoutText}>Checkout</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    width: 220,
    flexDirection: "row",
    justifyContent: "space-between",
    left: 16,
  },
  headerText: {
    fontSize: 20,
  },
  containerText: {
    marginTop: 10,
    left: 16,
    fontSize: 20,
    fontWeight: "600",
  },
  cardContainer: {
    left: 16,
    marginTop: 10,
    width: 365,
    height: 125,
    backgroundColor: "#fff",
    flexDirection: "row",
    borderRadius: 20,
    gap: 30,
    shadowColor: "#111",
  },
  cardImage: {
    left: 16,
    width: 90,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
    borderRadius: 20,
    alignSelf: "center",
  },
  Image: {
    width: 80,
    height: 50,
  },
  Imagetext: {
    fontSize: 18,
    fontWeight: "400",
  },
  cardText: {
    width: 220,
    marginTop: 14,
    gap: 3,
    justifyContent: "space-between",
    flexDirection: "row",
    // backgroundColor:'red'
  },

  cardInsideIcon: {
    marginLeft: 16,
    top: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
  },
  minus: {
    color: "#55AB60",
  },
  plus: {
    color: "#55AB60",
  },
  increment: {
    color: "#55AB60",
    padding: 10,
    fontSize: 20,
    fontWeight: "600",
  },
  imageContainer: {
    left: 5,
    marginTop: 24,
    width: 375,
    justifyContent: "center",
    alignContent: "center",
  },

  containerInsideImage: {
    width: "100%",
    height: 106,
  },
  text: {
    marginTop: 24,
    fontSize: 18,
    fontWeight: "600",
    alignSelf: "center",
    justifyContent: "center",
    color: "#55AB60",
  },
  payment: {
    width: 360,
    left: 16,
    marginTop: 24,
  },
  paymentContainer: {
    width: "100%",
    backgroundColor: "#fff",
    marginTop: 22,
    borderRadius: 20,
    // marginBottom: 90,
  },
  paymentContainerInside: {
    left: 16,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 2,
    borderColor: "#F4F4F4",
  },
  paymentText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#9B9B9B",
  },

  checkout: {
    width: 360,
    height: 100,
    marginBottom: 70,
    justifyContent: "center",
    alignItems: "center",
    left: 16,
  },

  checkoutInside:{
    width: 200,
    height: 50,
    justifyContent:'center', 
    alignItems:'center', 
    backgroundColor: "#55AB60",
    borderRadius: 10,
  },

  checkoutText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#FFFFFF",
    
  },
});
