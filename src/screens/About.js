import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const About = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "#55AB60" }}>
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
          About
        </Text>
      </Pressable>

      {/* <View></View> */}
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.containerInside}>
          <View style={styles.image}>
            <Image
              source={require("../images/icon/logo1.png")}
              style={{ width: "100%", height: 160, objectFit: "contain" }}
            />
          </View>
          <Text style={styles.text}>
            What began little, with a solitary idea of a store that provides
            rebate and the basic thought of moving more for less, has become in
            the course of the last 10 years into the biggest retailer in this
            whole country. {"\n"} {"\n"}
            Every week, about 265 million clients and individuals visit our in
            excess of 13,200 stores under 55 standards in 27 nations and
            eCommerce sites in 4 nations. With financial year 2018 income of
            $500.3 billion, ‘Organization Name’ utilizes over 2.2 million
            partners around the world.{"\n"} {"\n"}
            SG Grocery keeps on being an innovator in support ability, corporate
            magnanimity and work opportunity. It’s everything part of our
            relentless promise to making openings and conveying an incentive to
            clients and networks the world over.
          </Text>
        </View>

        <View style={styles.container2nd}>
          <View style={styles.container2ndInside}>
            <View className="flex justify-center items-center -my-11">
              <Image
                source={require("../images/icon/logo2.png")}
                style={{
                  width: 250,
                  height: 180,
                  objectFit: "contain",
                  alignSelf: "center",
                  marginTop: -45,
                }}
              />
            </View>
            <Text style={styles.text2}>~ Why Choose us? ~</Text>
            <View style={styles.Content}>
              <Text style={styles.ContentText}>
                We do not buy from the open
              </Text>
              <Text style={{ ...styles.ContentText, alignSelf: "center" }}>
                market & traders.
              </Text>
            </View>

            <Text style={styles.text}>
              We would like to give the best to our valuable customer that’s why
              our experts check quality of every products before we deliver it
              to you and promises to do further to keep faith constant.
            </Text>

            {/* icon start */}
            <View style={styles.image}>
              <View
                style={{
                  flexDirection: "row",
                  gap: 47,
                }}
              >
                <View style={styles.imageContent}>
                  <Image
                    source={require("../images/icon/icon (1).png")}
                    style={{ width: 30, height: 30 }}
                  />
                  <Text>100 % Organic Food</Text>
                </View>
                <View style={styles.imageContent}>
                  <Image
                    source={require("../images/icon/icon (2).png")}
                    style={{ width: 30, height: 30 }}
                  />
                  <Text>Fast Delivery</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 16,
                }}
              >
                <View style={styles.imageContent}>
                  <Image
                    source={require("../images/icon/icon (3).png")}
                    style={{ width: 30, height: 30 }}
                  />
                  <Text>24/7 Service</Text>
                </View>

                <View style={styles.imageContent}>
                  <Image
                    source={require("../images/icon/icon (4).png")}
                    style={{ width: 30, height: 30 }}
                  />
                  <Text>Secure Payment</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.container3rd}>
          <View style={{ marginTop: -30 }}>
            <View style={styles.container3rdInside}>
              <TouchableOpacity style={styles.container3rdInsideContent}
              onPress={()=>navigation.navigate('Privacy_p')}
              >
                <Text
                  style={{ paddingLeft: 16, fontSize: 16, fontWeight: "400" }}
                >
                  Privacy Policy
                </Text>
                <Icon
                  name="chevron-forward-outline"
                  size={25}
                  style={{ marginRight: 20 }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ ...styles.container3rdInside, marginTop: 16 }}>
              <TouchableOpacity style={styles.container3rdInsideContent}
              onPress={()=>navigation.navigate('Terms_c')}
              >
                <Text
                  style={{ paddingLeft: 16, fontSize: 16, fontWeight: "400" }}
                >
                  Terms and services
                </Text>
                <Icon
                  name="chevron-forward-outline"
                  size={25}
                  style={{ marginRight: 20 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default About;

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
    width: "90%",
    alignSelf: "center",
  },
  image: {
    marginTop: 29,
  },
  text: {
    top: 17,
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 25,
  },
  container2nd: {
    marginTop: 80,
    backgroundColor: "#FFF2F0",
    marginBottom: 20,
    paddingBottom: 20,
  },
  container2ndInside: {
    width: "90%",
    alignSelf: "center",
  },
  text2: {
    color: "#55AB60",
    fontSize: 22,
    fontWeight: "600",
    alignSelf: "center",
  },
  Content: {
    alignSelf: "center",
    marginTop: 16,
  },
  ContentText: {
    color: "#434343",
    fontSize: 18,
    fontWeight: "600",
  },
  imageContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  container3rd: {
    // marginTop:30,
    marginBottom: 130,
  },
  container3rdInside: {
    width: "85%",
    height: 58,
    backgroundColor: "#F3FFF5",
    alignSelf: "center",
    borderRadius: 10,
  },
  container3rdInsideContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop:16
  },
});
