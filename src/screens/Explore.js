import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { imageData } from "../components/Itemlist";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';


const Explore = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <Icon name="chevron-back-outline" size={30} onPress={() => navigation.goBack()}/>
        <Text
          style={{
            ...styles.headerText,
            fontSize: 22,
            fontWeight: "700",
            marginLeft: 40,
            marginBottom:10,
          }}
        >
          Explore
        </Text>
      </View>

      <ScrollView className="bg-white">
        <View style={styles.container}>
          <View style={styles.containerContent}>
            <Text style={styles.containerText}>Groceries</Text>
            <Text style={styles.containerText2}>See All</Text>
          </View>

          <FlatList
            data={imageData[4]["Groceries"]}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image
                  source={item.uri}
                  style={{ width: 100, height: 100, margin: 2 }}
                />

                <View>
                  <Text style={styles.cardText1}>{item.name}</Text>
                  <Text style={styles.cardText2}>{item.quantity}</Text>
                  <Text style={styles.cardText3}>{item.price}</Text>
                  <View style={styles.iconContainer}>
                    <Text style={styles.icon}>+</Text>
                  </View>
                </View>
              </View>
            )}
          />

          <View style={styles.containerContent}>
            <Text style={styles.containerText}>Vegetables</Text>
            <Text style={styles.containerText2}>See All</Text>
          </View>

          <FlatList
            data={imageData[5]["Vegetables"]}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <>
                <View style={styles.card}>
                  <Image
                    source={item.uri}
                    style={{ width: 80, height: 63, margin: 10 }}
                  />

                  <View style={{ width: "90%", bottom: 2 }}>
                    <Text style={styles.cardText1}>{item.name}</Text>
                    <Text style={styles.cardText1}>{item.quantity}</Text>
                    <Text style={styles.cardText1}>{item.price}</Text>
                    <View style={styles.iconContainer}>
                      <Text style={styles.icon}>+</Text>
                    </View>
                  </View>
                </View>
              </>
            )}
          />

          <View style={styles.containerContent}>
            <Text style={styles.containerText}>Fruits</Text>
            <Text style={styles.containerText2} onPress={()=>navigation.navigate('Details')}>See All</Text>
          </View>

          <FlatList
            data={imageData[6]["Fruits"]}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image
                  source={item.uri}
                  style={{ width: 87, height: 61, margin: 10 }}
                />

                <View style={{ width: "90%", bottom: 2 }}>
                  <Text style={styles.cardText1}>{item.name}</Text>
                  <Text style={styles.cardText2}>{item.quantity}</Text>
                  <Text style={styles.cardText3}>{item.price}</Text>
                  <View style={styles.iconContainer}>
                    <Text style={styles.icon}>+</Text>
                  </View>
                </View>
              </View>
            )}
          />

          <View style={styles.containerContent}>
            <Text style={styles.containerText}>Dairy Products</Text>
            <Text style={styles.containerText2}>See All</Text>
          </View>

          <FlatList
            data={imageData[7]["Dairy"]}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={{...styles.card,marginBottom:90}}>
                <Image
                  source={item.uri}
                  style={{ width: 80, height: 96, margin: 10 }}
                />

                <View style={{width:100}}>
                  <Text style={styles.cardText1}>{item.name}</Text>
                  <Text style={styles.cardText2}>{item.quantity}</Text>
                  <Text style={styles.cardText3}>{item.price}</Text>
                  <View style={styles.iconContainer}>
                    <Text style={styles.icon}>+</Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Explore;

const styles = StyleSheet.create({
  header: {
    marginTop:30,
    width: 220,
    // backgroundColor:'#55AB60',
    flexDirection: "row",
    justifyContent: "space-between",
    left: 16,
  },
  headerText: {
    fontSize: 20,
  },
  container: {
    left: 16,
    width: 365,
    // backgroundColor:'red'
  },
  containerContent: {
    marginTop: 20,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  containerText: {
    fontSize: 20,
    fontWeight: "700",
  },
  containerText2: {
    fontSize: 16,
    fontWeight: "700",
    color: "#55AB60",
  },
  card: {
    marginTop:10,
    width: 120,
    height: 190,
    backgroundColor: "#F2FCF4",
    borderRadius: 10,
    marginRight: 14,
    justifyContent: "center",
    alignItems: "center",
    // paddingTop: 12,
  },
  cardText1: {
    fontSize: 14,
    fontWeight: "500",
  },
  cardText2: {
    fontSize: 12,
    fontWeight: "500",
    color: "#838383",
  },
  cardText3: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000000",
  },
  iconContainer: {
    position: "absolute",
    width: 30,
    height: 30,
    backgroundColor: "#55AB60",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    borderRadius: 50,
    bottom: 0,
  },
  icon: {
    fontSize: 20,
    color: "#fff",
  },
});
