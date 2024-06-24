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

const Wish = () => {
  const navigation = useNavigation();

  // const [wishlistItems, setWishlistItems] = useState([]);

  // useEffect(() => {
  //   getWishlistItems();
  // }, []);

  // const getWishlistItems = async () => {
  //   try {
  //     const existingItems = await AsyncStorage.getItem("Wishlist");
  //     if (existingItems !== null) {
  //       const items = JSON.parse(existingItems);
  //       setWishlistItems(items);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const deleteItem = async (itemId) => {
  //   try {
  //     const updatedItems = wishlistItems.filter((item) => item.id !== itemId);
  //     await AsyncStorage.setItem("Wishlist", JSON.stringify(updatedItems));
  //     setWishlistItems(updatedItems);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const renderItem = ({ item }) => {
  //   return (
  //     <View style={styles.item}>
  //       <Image source={item.image} style={styles.itemImage} />
  //       <View style={styles.itemDetails}>
  //         <Text style={styles.itemName}>{item.name}</Text>
  //         <Text style={styles.itemPrice}>₹{item.price}</Text>
  //       </View>
  //       <TouchableOpacity onPress={() => deleteItem(item.id)} style={styles.deleteButton}>
  //         <Ionicons name="trash-outline" size={24} color="red" />
  //       </TouchableOpacity>
  //     </View>
  //   );
  // };
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
          WishList
        </Text>
      </Pressable>

      <ScrollView style={styles.container}>
        <View style={styles.containerInside}>
          <Text style={styles.text}>Your wishlist is empty!</Text>
          {/* <View style={styles.container}>
            {wishlistItems.length > 0 ? (
              <FlatList
                data={wishlistItems}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.listContainer}
              />
            ) : (
              <Text style={styles.emptyText}>Your wishlist is empty</Text>
            )}
          </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Wish;

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
    // backgroundColor: "red",
  },
  text: {
    fontSize:22,
    fontWeight:'400',
    alignItems:'center',
    justifyContent:'center'
  },
});
