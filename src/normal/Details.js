import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Pressable,
  StatusBar
} from "react-native";
import React, { useRef } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { imageData } from "../components/Itemlist";
import Icon from "react-native-vector-icons/Ionicons";

const Detail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { category, itemId } = route.params;

  const scrollViewRef = useRef(null);

  const handlePress = (item) => {
    navigation.navigate("Details", { category, itemId: item.id });
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: 0, animated: true });
    }
  };

  const items = imageData.find((data) => data[category])[category];
  const selectedItem = items.find((item) => item.id === itemId);


  return (
    <SafeAreaView>
      <StatusBar
        barStyle="light-content" // Use "dark-content" if you want light text on a dark background
        backgroundColor="#55AB60"
      />
      <ScrollView ref={scrollViewRef} style={{marginTop:20}}>
        <View style={styles.headerContent}>
          <Pressable style={styles.IconContainer}
          onPress={() => navigation.goBack()}
          >
            <Icon
              name="chevron-back-outline"
              size={30}
              // onPress={() => navigation.goBack()}
              color={'#fff'}
              style={styles.Icon}

            />
            <Text style={{...styles.text, marginLeft:5}}>Details</Text>
          </Pressable>
        </View>

        <View style={styles.ImageContainer}>
          <Image source={selectedItem.uri} style={styles.Image} />
        </View>
        <View style={styles.containerContent}>
          <Text style={styles.ContentText}>{selectedItem.name}</Text>
          <View style={styles.IncrementIcon}>
            <Icon name="remove-circle-outline" size={20} style={styles.minus} />
            <Text style={styles.increment}>1</Text>
            <Icon name="add-circle" size={20} style={styles.plus} />
          </View>
        </View>
        <View style={styles.containerInsideContent}>
          <Text style={styles.text2}>Special price</Text>
          <View style={styles.ContentInside}>
            <Text style={styles.ContentText}>{selectedItem.price}</Text>
            <Text style={{ ...styles.ContentText, color: "#55AB60" }}>
              (42% off)
            </Text>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.ContentText}>Description</Text>
            <Text style={styles.descriptionText}>
              Green apples have less sugar and carbs, and more fiber, protein,
              potassium, iron, and vitamin K, taking the lead as a healthier
              variety, although the differences are ever so slight.
            </Text>
          </View>
        </View>

        <View style={styles.btn}>
          <TouchableOpacity>
            <Text
              style={{
                ...styles.btntext,
                backgroundColor: "#55AB60",
                color: "#fff",
              }}
            >
              Subscribe
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text
              style={{
                ...styles.btntext,
                borderWidth: 1,
                borderColor: "#55AB60",
              }}
            >
              Buy Once
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.relatedItems}>
          <Text style={{ ...styles.ContentText, marginBottom: 20 }}>
            Related items
          </Text>
          <FlatList
            data={items}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <Pressable
                  style={styles.card}
                  onPress={() => handlePress(item)}
                >
                  <Image source={item.uri} style={styles.cardImage} />
                  <View style={styles.cardInsidecontent}>
                    <Text style={styles.cardtext}>{item.name}</Text>
                  </View>
                </Pressable>
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  headerContent: {
    // marginTop:5,
    width: "100%",
    height: 229,
    backgroundColor: "#55AB60",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    // alignItems:'center',
    // flexDirection:'row'
  },
  Icon:{
    width: 40,
    height:40,
    borderRadius:100,
    marginLeft:8,
  },
  IconHover:{
    backgroundColor:'red',
  },
  IconContainer: {
    marginTop: 45,
    flexDirection: "row",
  },
  text: {
    fontSize: 22,
    fontWeight: "700",
    color:'#fff'
  },
  ImageContainer: {
    top: 85,
    position: "absolute",
    width: "100%",
    alignItems: "center",
  },
  Image: {
    width: 240,
    height: 219,
    objectFit: "contain",
  },
  containerContent: {
    margin: 16,
    width: "90%",
    marginTop: 110,
    justifyContent: "space-between",
    flexDirection: "row",
    // backgroundColor:'red',
  },
  ContentText: {
    fontSize: 28,
    fontWeight: "700",
  },
  IncrementIcon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    // backgroundColor:'yellow'
  },
  minus: {
    color: "#55AB60",
    fontSize: 40,
  },
  plus: {
    color: "#55AB60",
    fontSize: 40,
  },
  increment: {
    color: "#55AB60",
    fontSize: 24,
    fontWeight: "600",
  },
  containerInsideContent: {
    left: 16,
  },
  text2: {
    fontSize: 22,
    color: "#55AB60",
    letterSpacing: 1,
  },

  ContentInside: {
    width: "90%",
    top: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  descriptionContainer: {
    top: 30,
    width: "95%",
  },
  descriptionText: {
    fontSize: 20,
    color: "#9B9B9B",
  },
  btn: {
    top: 50,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  btntext: {
    fontSize: 20,
    fontWeight: "600",
    padding: 10,
    borderRadius: 10,
  },
  relatedItems: {
    width: "90%",
    left: 16,
    top: 80,
    marginBottom: 90,
  },
  card: {
    top: 10,
    width: 122,
    height: 161,
    backgroundColor: "#F2FCF4",
    borderRadius: 10,
    marginRight: 14,
    elevation: 5,
    marginBottom: 20,
    alignItems: "center",
  },
  cardImage: {
    top: 20,
    width: 85,
    height: 85,
    objectFit: "contain",
  },
  icon: {
    width: 30,
    height: 30,
    objectFit: "contain",
  },
  cardInsidecontent: {
    top: 30,
    width: "100%",
    height: 47,
    backgroundColor: "#FFA83B",
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  cardtext: {
    fontSize: 16,
    color: "#fff",
  },
  itemName: {
    width: "100%",
    height: 40,
    backgroundColor: "red",
  },
});
