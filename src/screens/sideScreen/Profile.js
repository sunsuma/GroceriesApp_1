import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from "@react-navigation/native";


const Profile = () => {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView>
        <View style={styles.header}>
          <Icon
            name="chevron-back-outline"
            size={30}
            onPress={() => navigation.goBack()}
          />
          <Text style={{ fontSize: 22, fontWeight: "700", marginBottom: 10 }}>
            Profile
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.imageInside}>
            <Image
              source={{
                uri: "https://img.freepik.com/free-photo/artist-white_1368-3546.jpg",
              }}
              style={styles.Image}
            />
          </View>
          <View style={styles.headerText}>
            <Text style={styles.text1}>George D.</Text>
            <Text>@george31</Text>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.containerInside}>
            <Icon name="reader-outline" style={styles.icon} />
            <Text style={styles.text2}>My orders</Text>
          </View>
          <View style={styles.containerInside}>
            <Icon name="albums-outline" style={styles.icon} />
            <TouchableOpacity onPress={()=>navigation.navigate('MySubscription')}>
            <Text style={styles.text2}>My Subscriptions</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerInside}>
            <Icon name="location-outline" style={styles.icon} />
            <TouchableOpacity onPress={()=>navigation.navigate('MyAddress')}>
            <Text style={styles.text2}>My Addresses</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerInside}>
            <Icon name="chatbubbles-outline" style={styles.icon} />
            <TouchableOpacity onPress={()=>navigation.navigate('FAQ')}>
            <Text style={styles.text2}>FAQ</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerInside}>
            <Image
              source={require("../../images/icon/headset.png")}
              style={{ ...styles.icon, width: 20, height: 20 }}
            />
            <TouchableOpacity onPress={()=>navigation.navigate('Contact')}>
            <Text style={styles.text2}>Contact Us</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.containerInside}>
            <Image
              source={require("../../images/icon/About.png")}
              style={{ ...styles.icon, width: 20, height: 20 }}
            />
            <TouchableOpacity onPress={()=>navigation.navigate('About')}>
            <Text style={styles.text2}>About</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.containerInside}>
            <Image
              source={require("../../images/icon/logout.png")}
              style={{ ...styles.icon, width: 20, height: 20 }}
            />
            <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
            <Text style={styles.text2}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  header: {
    // marginTop: 50,
    width: 220,
    flexDirection: "row",
    left: 16,
  },
  imageContainer: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  imageInside: {
    width: 100,
    height: 100,
    borderRadius: 100,
    overflow: "hidden",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  Image: {
    width: 200,
    height: 200,
    // resizeMode: "cover",
    objectFit: "scale-down",
  },
  headerText: {
    marginTop: 10,
    fontSize: 19,
  },
  text1: {
    fontSize: 20,
    fontWeight: "600",
  },
  text2: {
    fontSize: 20,
    margin: 10,
    color:'#838383'
  },
  icon: {
    fontSize: 20,
    margin: 10,
    color: "#55AB60",
  },
  container: {
    left: 16,
    marginTop: 24,
    width: 365,
    height:440,
    backgroundColor: "#F3FFF5",
    borderRadius: 20,
  },
  containerInside: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
    margin:5,
    gap: 8,
  },
});
