import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Pressable,
} from "react-native";
import React, { useRef, useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { imageData } from "../components/Itemlist";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";


const Explore = () => {
  const navigation = useNavigation();
  const [showShadow, setShowShadow] = useState(false);
  const scrollViewRef = useRef(null);

  const handleSeeAll = (category, itemId) => {
    navigation.navigate("ItemList", { category, itemId });
  };

  const handlePress = (category, itemId) => {
    navigation.navigate('Details', { category, itemId });
  };

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const threshold = 10; // Adjust this value as needed
    if (offsetY > threshold && !showShadow) {
      setShowShadow(true);
    } else if (offsetY <= threshold && showShadow) {
      setShowShadow(false);
    }
  };

  // const handleScroll = (event) => {
  //   const contentHeight = event.nativeEvent.contentSize.height;
  //   const visibleHeight = event.nativeEvent.layoutMeasurement.height;
  //   const offsetY = event.nativeEvent.contentOffset.y;
  //   const bottomThreshold = 100; // Adjust this value as needed

  //   if (contentHeight - visibleHeight - offsetY < bottomThreshold) {
  //     setShowShadow(true);
  //   } else {
  //     setShowShadow(false);
  //   }
  // };

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="#55AB60" />
      <View style={[styles.header, showShadow && styles.headerShadow]}>
        <View style={styles.headerContent}>
          <Icon
            name="chevron-back-outline"
            size={30}
            onPress={() => navigation.goBack()}
          />
          <Text
            style={{
              ...styles.headerText,
              fontSize: 22,
              fontWeight: "700",
              marginLeft: 40,
              marginBottom: 10,
            }}
          >
            Explore
          </Text>
        </View>
      </View>

      <ScrollView
      ref={scrollViewRef}
        // className="bg-white"
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <View style={styles.container}>
          <View style={styles.containerContent}>
            <Text style={styles.containerText}>Groceries</Text>
            <Text
              style={styles.containerText2}
              onPress={() =>
                handleSeeAll("Groceries", imageData[4]["Groceries"][0].id)
              }
            >
              See All
            </Text>
          </View>

          <FlatList
            data={imageData[4]["Groceries"]}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Pressable
                style={styles.card}
                onPress={() => handlePress("Groceries", item.id)}
              >
                <Image
                  source={item.uri}
                  style={{
                    width: 100,
                    height: 80,
                    margin: 10,
                    objectFit: "contain",
                  }}
                />
                <View>
                  <Text style={styles.cardText1}>{item.name}</Text>
                  <Text style={styles.cardText2}>{item.quantity}</Text>
                  <Text style={styles.cardText3}>{item.price}</Text>
                  <View style={styles.iconContainer}>
                    <Text style={styles.icon}>+</Text>
                  </View>
                </View>
              </Pressable>
            )}
          />

          <View style={styles.containerContent}>
            <Text style={styles.containerText}>Vegetables</Text>
            <Text
              style={styles.containerText2}
              onPress={() =>
                handleSeeAll("Vegetables", imageData[5]["Vegetables"][0].id)
              }
            >
              See All
            </Text>
          </View>

          <FlatList
            data={imageData[5]["Vegetables"]}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Pressable style={styles.card}
              onPress={() => handlePress("Vegetables", item.id)}
              >
                <Image
                  source={item.uri}
                  style={{
                    width: 100,
                    height: 80,
                    margin: 10,
                    objectFit: "contain",
                  }}
                />
                <View style={{ width: "90%", bottom: 2 }}>
                  <Text style={styles.cardText1}>{item.name}</Text>
                  <Text style={styles.cardText1}>{item.quantity}</Text>
                  <Text style={styles.cardText1}>{item.price}</Text>
                  <View style={styles.iconContainer}>
                    <Text style={styles.icon}>+</Text>
                  </View>
                </View>
              </Pressable>
            )}
          />

          <View style={styles.containerContent}>
            <Text style={styles.containerText}>Fruits</Text>
            <Text
              style={styles.containerText2}
              onPress={() =>
                handleSeeAll("Fruits", imageData[6]["Fruits"][0].id)
              }
            >
              See All
            </Text>
          </View>

          <FlatList
            data={imageData[6]["Fruits"].slice(0, 4)}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Pressable style={styles.card}
              onPress={() => handlePress("Fruits", item.id)}
              >
                <Image
                  source={item.uri}
                  style={{
                    width: 100,
                    height: 80,
                    margin: 10,
                    objectFit: "contain",
                  }}
                />
                <View style={{ width: "90%", bottom: 2 }}>
                  <Text style={styles.cardText1}>{item.name}</Text>
                  <Text style={styles.cardText2}>{item.quantity}</Text>
                  <Text style={styles.cardText3}>{item.price}</Text>
                  <View style={styles.iconContainer}>
                    <Text style={styles.icon}>+</Text>
                  </View>
                </View>
              </Pressable>
            )}
          />

          <View style={styles.containerContent}>
            <Text style={styles.containerText}>Dairy Products</Text>
            <Text
              style={styles.containerText2}
              onPress={() => handleSeeAll("Dairy Products", imageData[7]["Dairy Products"][0].id)}
            >
              See All
            </Text>
          </View>

          <FlatList
            data={imageData[7]["Dairy Products"]}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Pressable style={{ ...styles.card, marginBottom: 90 }}
              onPress={() => handlePress("Dairy Products", item.id)}
              >
                <Image
                  source={item.uri}
                  style={{
                    width: 100,
                    height: 80,
                    margin: 10,
                    objectFit: "contain",
                  }}
                />
                <View style={{ width: 100 }}>
                  <Text style={styles.cardText1}>{item.name}</Text>
                  <Text style={styles.cardText2}>{item.quantity}</Text>
                  <Text style={styles.cardText3}>{item.price}</Text>
                  <View style={styles.iconContainer}>
                    <Text style={styles.icon}>+</Text>
                  </View>
                </View>
              </Pressable>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Explore;

const styles = StyleSheet.create({
  header:{
    width:'100%',
    // backgroundColor: "red",
  },

  headerContent: {
    marginTop: 20,
    width: 220,
    flexDirection: "row",
    justifyContent: "space-between",
    left: 16,
    
  },
  headerShadow: {
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },

  headerText: {
    fontSize: 20,
  },
  container: {
    left: 16,
    width: 365,
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
    marginTop: 10,
    width: 120,
    height: 190,
    backgroundColor: "#F2FCF4",
    elevation: 5,
    borderRadius: 10,
    // marginRight: 14,
    // marginBottom:5,
    margin: 8,
    justifyContent: "center",
    alignItems: "center",
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
