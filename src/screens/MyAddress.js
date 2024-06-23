import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Checkbox from "../components/Checkbox";

const MyAddress = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "#55AB60", flex:1 }}>
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
          My Address
        </Text>
      </Pressable>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={{flex:1,}}>
          <View style={styles.containerInside}>
            <View style={styles.content}>
              <Icon name="add-circle-outline" size={30} color={"#55AB60"} />
              <Text style={styles.text}>Add New Address</Text>
            </View>
          </View>

          {/* Address */}
          <View style={styles.addressInside}>
            <View style={{ height: 50, marginVertical: "auto" }}>
              <Checkbox />
            </View>
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
          <View style={{ ...styles.addressInside, margin: 30 }}>
            <View style={{ height: 50, marginVertical: "auto" }}>
              <Checkbox />
            </View>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyAddress;

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
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
  },
  content: {
    marginLeft: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontSize: 22,
    fontWeight: "600",
    color: "#55AB60",
  },
  containerAddresInside: {
    width: "90%",
    height: 174,
    backgroundColor: "#FFFFFF",
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
  addressInside: {
    flexDirection: "row",
    width: "85%",
    alignSelf: "center",
    justifyContent: "space-between",
  },
});
