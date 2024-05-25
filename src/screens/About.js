import { View, Text, ScrollView, Image, TextInput } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

const About = () => {
  return (
    <View className="w-full h-screen bg-green-600">
      <View className="mt-12 mx-4 flex flex-row items-center mb-5">
        <Image
          source={require("../images/icon/iconBack.png")}
          style={{ width: 25, height: 25 }}
        />
        <Text className="text-2xl font-semibold text-white ml-3">About</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="bg-slate-50 rounded-t-[40px] w-full">
          <View className="w-full flex justify-center items-center py-5">
            <View className="w-full px-2">
              <Image
                source={require("../images/icon/logo1.png")}
                style={{ width: "100%", height: 160 }}
              />
            </View>
            <Text className="mt-5 mb-16 mx-3">
              What began little, with a solitary idea of a store that provides
              rebate and the basic thought of moving more for less, has become
              in the course of the last 10 years into the biggest retailer in
              this whole country. {"\n"} {"\n"} {"\n"}
              Every week, about 265 million clients and individuals visit our in
              excess of 13,200 stores under 55 standards in 27 nations and
              eCommerce sites in 4 nations. With financial year 2018 income of
              $500.3 billion, ‘Organization Name’ utilizes over 2.2 million
              partners around the world.{"\n"} {"\n"} {"\n"}
              SG Grocery keeps on being an innovator in support ability,
              corporate magnanimity and work opportunity. It’s everything part
              of our relentless promise to making openings and conveying an
              incentive to clients and networks the world over.
            </Text>
            <View className="w-full bg-red-100 h-auto items-center pb-9">
              <View className="flex justify-center items-center -my-11">
                <Image
                  source={require("../images/icon/logo2.png")}
                  style={{ width: 200, height: 180 }}
                />
              </View>
              <Text className="mt-10 text-green-700 text-2xl font-semibold">
                ~ Why Choose us? ~
              </Text>
              <View className="w-60 flex mt-5 justify-center items-center">
                <Text className=" font-semibold text-lg">
                  We do not buy from the open
                </Text>
                <Text className=" font-semibold text-lg">
                  market & traders.
                </Text>
              </View>

              <Text className="w-full px-3 text-sm mt-3 justify-center items-center">
                We would like to give the best to our valuable customer that’s
                why our experts check quality of every products before we
                deliver it to you and promises to do further to keep faith
                constant.
              </Text>

              {/* icon start */}
              <View className="w-full flex flex-row justify-around mt-3">
                <View className="">
                  <View className="flex flex-row items-center">
                    <Image
                      source={require("../images/icon/icon (1).png")}
                      style={{ width: 30, height: 30 }}
                    />
                    <Text className="mx-3">100 % Organic Food</Text>
                  </View>
                  <View className="flex flex-row items-center mt-5">
                    <Image
                      source={require("../images/icon/icon (3).png")}
                      style={{ width: 30, height: 30 }}
                    />
                    <Text className="mx-3">24/7 Service</Text>
                  </View>
                </View>
                <View className="">
                  <View className="flex flex-row items-center">
                    <Image
                      source={require("../images/icon/icon (2).png")}
                      style={{ width: 30, height: 30 }}
                    />
                    <Text className="mx-3">Fast Delivery</Text>
                  </View>
                  <View className="flex flex-row items-center mt-5">
                    <Image
                      source={require("../images/icon/icon (4).png")}
                      style={{ width: 30, height: 30 }}
                    />
                    <Text className="mx-3">Secure Payment</Text>
                  </View>
                </View>
              </View>
            </View>
            <View className="w-full -m-4 pb-10">
              <View className="w-[93%] bg-green-100 ml-3 rounded-2xl flex flex-row justify-between items-center">
                <Text className="py-3 ml-5 text-lg opacity-50">
                  Privacy Policy
                </Text>
                <Icon
                  name="chevron-forward-outline"
                  size={25}
                  style={{ marginRight: 20 }}
                />
              </View>
              <View className="w-[93%] bg-green-1 00 ml-3 mt-3 rounded-2xl flex flex-row justify-between items-center">
                <Text className="py-3 ml-5 text-lg opacity-50">
                  Terms and services
                </Text>
                <Icon
                  name="chevron-forward-outline"
                  size={25}
                  style={{ marginRight: 20 }}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default About;
