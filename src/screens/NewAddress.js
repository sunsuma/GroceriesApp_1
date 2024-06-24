import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Pressable,
  TextInput,
  TouchableOpacity
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const NewAddress = () => {
  const navigation = useNavigation();
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
          Add New Address
        </Text>
      </Pressable>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.form}>
          <View style={styles.containerInput}>
            <TextInput
              placeholder="Country"
              type="text"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.textInput}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              placeholder="State"
              type="text"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.textInput}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              placeholder="City"
              type="text"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.textInput}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              placeholder="Pincode"
              type="text"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.textInput}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              placeholder="Area"
              type="text"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.textInput}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              placeholder="Landmark"
              type="text"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.textInput}
            />
          </View>
          {/* checkBox */}
          <View style={styles.checkBoxContainer}>
            <View style={styles.checkBoxContainerInside}>
              <View style={styles.checkBox}></View>
              <Text style={styles.text}>Home</Text>
            </View>

            <View style={styles.checkBoxContainerInside}>
              <View style={styles.checkBox}></View>
              <Text style={styles.text}>Work/Office</Text>
            </View>
            <View style={styles.checkBoxContainerInside}>
              <View style={styles.checkBox}></View>
              <Text style={styles.text}>Other</Text>
            </View>
          </View>
            {/* button */}
            <TouchableOpacity style={styles.btn}>
                <Text style={{fontSize:22,fontWeight:'600', color:'#fff'}}>Save</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewAddress;

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
    
  form: {
    marginBottom: 20,
  },
  containerInput: {
    marginLeft: 16,
    marginBottom: 20,
  },
  textInput: {
    top: 30,
    width: 365,
    height: 47,
    borderRadius: 10,
    color: "#000",
    // borderWidth: 1,
    fontSize: 20,
    padding: 10,
    backgroundColor:'#F5F5F5'
  },
  checkBoxContainer: {
    width: "90%",
    flexDirection: "row",
    marginTop: 30,
    alignSelf: "center",
    gap: 30,
  },
  checkBoxContainerInside: {
    flexDirection: "row",
    gap: 5,
    left: 16,
  },
  checkBox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#9B9B9B",
  },
  text: {
      fontSize: 14,
      fontWeight: "400",
      color: "#9B9B9B",
    },
    btn:{
        width: 160,
        height:50,
        backgroundColor:"#55AB60",
        justifyContent:'center',
        alignItems:'center',
        marginTop:30,
        alignSelf:'center',
        borderRadius:10
    }
});
