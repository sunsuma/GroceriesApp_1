import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useRef, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { imageData } from "../components/Itemlist";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Explore from "./Explore";

const Home = ({ navigation }) => {
  const [showShadow, setShowShadow] = useState(false);
  const scrollViewRef = useRef(null);

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const threshold = 10; // Adjust this value as needed
    if (offsetY > threshold && !showShadow) {
      setShowShadow(true);
    } else if (offsetY <= threshold && showShadow) {
      setShowShadow(false);
    }
  };

  return (
    <>
      {/* <StatusBar barStyle="light" /> */}
      <SafeAreaView style={[showShadow && styles.headerShadow]}>
        <View style={styles.header}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: "https://img.freepik.com/free-photo/artist-white_1368-3546.jpg",
              }}
              style={styles.Image}
            />
          </View>
          <Text style={{ left: 70, position: "absolute", top: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: "600" }}>David </Text>
            {"\n"}@gmail.com
          </Text>
          {/* notification */}
          <Ionicons name="notifications-outline" size={30} />
          <Text
            style={{
              color: "red",
              position: "absolute",
              right: 10,
              top: 5,
              fontWeight: "600",
              alignSelf: "center",
            }}
          >
            3
          </Text>
        </View>

        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={30} style={styles.icon} />
          <TextInput
            placeholder="Search products and brands"
            style={styles.textInput}
          />
        </View>
      </SafeAreaView>

      <ScrollView
        ref={scrollViewRef}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <View style={styles.Imagecontainer}>
          <Image
            source={require("../../assets/advertisement.png")}
            style={styles.image}
          />
        </View>

        {/* card */}
        <View style={styles.cardContainer}>
          <View style={{ ...styles.cardContent, width: 365 }}>
            <Text style={styles.textLeft}>Top Categories</Text>
            <Text
              style={styles.textRight}
              onPress={() => navigation.navigate(Explore)}
            >
              Explore All
            </Text>
          </View>

          <View
            style={{
              // backgroundColor: "red",
              height: 170,
            }}
          >
            <FlatList
              data={imageData[0]["Top_Categories"]}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => {
                return (
                  <View style={styles.card}>
                    <Image source={item.uri} style={styles.cardImage} />
                    <View style={styles.cardInsidecontent}>
                      <Text style={styles.cardtext}>{item.name}</Text>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>

        <View style={{ ...styles.cardContainer, marginTop: 10 }}>
          <View style={{ ...styles.cardContent, width: 365 }}>
            <Text style={styles.textLeft}>Top Products</Text>
            <Text style={styles.textRight}>Explore All</Text>
          </View>

          <View>
            <FlatList
              data={imageData[1]["Top Products"]}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={{ ...styles.card2, marginBottom: 20 }}>
                  <Image source={item.uri} style={styles.cardImage2} />
                  <View>
                    <View style={styles.badge}>
                      <Text style={{ ...styles.cardtext, left: -10 }}>
                        37% {"\n"} off
                      </Text>
                    </View>
                    <Text style={styles.text}>{item.name}</Text>
                    <Text style={{ ...styles.text, fontWeight: "700" }}>
                      {item.price}
                    </Text>
                  </View>
                </View>
              )}
            />
          </View>
        </View>

        {/* get 25% cashback */}
        <View style={{ ...styles.Imagecontainer2, marginTop: 60}}>
          <Image
            source={require("../../assets/advertisement2.png")}
            style={{ ...styles.image, height: 190 }}
          />
        </View>

        <View style={styles.cardContainer}>
          <View style={{ ...styles.cardContent, width: 365 }}>
            <Text style={styles.textLeft}>Deals of the week</Text>
            <Text style={styles.textRight}>Explore All</Text>
          </View>

          <View>
            <FlatList
              data={imageData[2]["Deals of the week"]}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={{ ...styles.card2, marginBottom: 40 }}>
                  <Image source={item.uri} style={styles.cardImage2} />
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      top: 10,
                    }}
                  >
                    <Text style={{ ...styles.text1, fontWeight: "600" }}>
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "600",
                        color: "#55AB60",
                        top: 10,
                      }}
                    >
                      {item.off}
                    </Text>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={{ ...styles.cardContent, width: 365 }}>
            <Text style={styles.textLeft}>Featured Items</Text>
            <Text style={styles.textRight}>Explore All</Text>
          </View>

          <View>
            <FlatList
              data={imageData[3]["Featured Items"]}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={{ ...styles.card2, marginBottom: 100 }}>
                  <Image source={item.uri} style={styles.cardImage3} />
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      top: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: "#5F5F5F",
                        fontSize: 14,
                        fontWeight: "500",
                      }}
                    >
                      {item.name}
                    </Text>
                    <View
                      style={{
                        justifyContent: "space-around",
                        alignItems: "center",
                        flexDirection: "row",
                        width: "100%",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: "600",
                          color: "#55AB60",
                          top: 10,
                        }}
                      >
                        {item.price}
                      </Text>
                      <Text style={{ fontSize: 14, color: "#111", top: 10 }}>
                        {item.quantity}
                      </Text>
                    </View>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },

  // off 25%
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 100,
    overflow: "hidden",
    justifyContent: "flex-start",
    alignItems: "center",
    elevation:5,
    backgroundColor:'red'
  },
  Image: {
    width: 150,
    height: 100,
    objectFit: "contain",
  },
  container: {
    width: 376,
    left: 16,
    top: 53,
  },
  searchContainer: {
    // marginTop: 10,
    backgroundColor: "#fff",
    width: 365,
    marginBottom: 10,
    left: 16,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 20,
    padding: 8,
    // bottom:20
  },
  icon: {
    padding: 5,
    color: "#9B9B9B",
  },
  textInput: {
    backgroundColor: "#fff",
    width: 300,
    fontSize: 20,
    paddingLeft: 5,
  },
  headerShadow: {
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  Imagecontainer:{
    width: 360,
    left: 16,
    top: 10,
    elevation:5,
    borderRadius:20
  },
  // off-25%
  Imagecontainer2: {
    width: 360,
    left: 16,
    top: 10,
    elevation:5,
    borderRadius:20
  },
  image: {
    width: "100%",
    height: 154,
    borderRadius: 20,
  },

  textLeft: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
  },
  textRight: {
    fontSize: 16,
    fontWeight: "600",
    color: "#55AB60",
  },
  cardContainer: {
    width: 365,
    top: 50,
    left: 16,
  },
  cardContent: {
    justifyContent: "space-between",
    flexDirection: "row",
    
  },
  card: {
    top: 57,
    width: 87,
    height: 88,
    backgroundColor: "#F2FCF4",
    borderRadius: 10,
    marginRight: 14,
    elevation:5,
    margin:2
  },

  // nthChild: {
  //   marginRight: 10,
  // },

  cardImage: {
    width: 80,
    height: 70,
    top: -35,
    objectFit:'contain'
  },
  card2: {
    top: 19,
    width: 170,
    height: 212,
    backgroundColor: "#F2FCF4",
    borderRadius: 10,
    marginRight: 14,
    elevation:2,
    margin:2
  },

  cardImage2: {
    width: 85,
    height: 90,
    marginTop: 24,
    alignSelf: "center",
    objectFit:'contain'
  },

  cardImage3: {
    width: 115,
    height: 95,
    marginTop: 24,
    alignSelf: "center",
    objectFit:'contain'
  },

  cardInsidecontent: {
    width: "100%",
    height: 40,
    backgroundColor: "#55AB60",
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },

  cardtext: {
    fontSize: 16,
    color: "#fff",
  },
  text: {
    marginTop: 8,
    fontSize: 20,
    left: 12,
  },
  badge: {
    top: -108,
    position: "absolute",
    width: 70,
    height: 45,
    backgroundColor: "#55AB60",
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  // deals of the week
  text1: {
    fontSize: 18,
  },
});
