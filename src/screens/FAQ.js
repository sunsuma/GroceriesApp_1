import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Pressable,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const FAQ = () => {
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
          FAQ
        </Text>
      </Pressable>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.containerInside}>
          <View style={styles.select}>
            <Text style={styles.selectText}>Select Category</Text>
            <Icon name="chevron-down-outline" size={30} right={20} />
          </View>
          <View style={styles.select2}>
            <Text style={styles.selectText2}>Where do you Deliver?</Text>
            <Icon name="chevron-down-outline" size={30} right={20} />
          </View>
          <View style={styles.select2}>
            <Text style={styles.selectText2}>
              How can I order at SG Grocery?
            </Text>
            <Icon name="chevron-down-outline" size={30} right={20} />
          </View>
          <View style={styles.select2}>
            <Text style={styles.selectText2}>
            How do I know at what time I will {'\n'} receive my Delivery? 
            </Text>
            <Icon name="chevron-down-outline" size={30} right={20} />
          </View>
          <View style={styles.select2}>
            <Text style={styles.selectText2}>
            What is minimum order value?
            </Text>
            <Icon name="chevron-down-outline" size={30} right={20} />
          </View>
          <View style={styles.select2}>
            <Text style={styles.selectText2}>
            What if I want to return something?
            </Text>
            <Icon name="chevron-down-outline" size={30} right={20} />
          </View>

          <Text style={styles.text}>Not Listed your question/query?</Text>

          <TextInput
            editable
            multiline
            placeholder="Write your Question/Query here"
            numberOfLines={4}
            // maxLength={40}
            // onChangeText={(text) => onChangeText(text)}
            // value={value}
            style={styles.Input}
          />

          <TouchableOpacity style={styles.btn}>
            <Text style={{fontSize:22,fontWeight:'600', color:'#fff'}}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FAQ;

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
    width: "90%",
    alignSelf: "center",
    marginBottom: 80,
    gap: 24,
  },
  select: {
    top: 24,
    width: "100%",
    height: 57,
    fontSize: 18,
    fontWeight: "400",
    backgroundColor: "#F5F5F5",
    justifyContent: "space-between",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  select2: {
    top: 24,
    width: "100%",
    height: 57,
    fontSize: 18,
    fontWeight: "400",
    backgroundColor: "#F3FFF5",
    justifyContent: "space-between",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  selectText: {
    fontSize: 18,
    fontWeight: "400",
    paddingLeft: 16,
    color: "#9B9B9B",
  },
  selectText2: {
    fontSize: 18,
    fontWeight: "400",
    paddingLeft: 16,
    color: "#707070",
  },
  text: {
    top: 24,
    fontSize: 20,
    fontWeight: "600",
  },
  Input: {
    top:16,
    height: 120,
    backgroundColor: "#F5F5F5",
    borderRadius:10,
    textAlignVertical:'top',
    fontSize:18,
    fontWeight:'400',
    paddingLeft:16,
    paddingTop:10,
  },
  btn:{
    top:30,
    width:'50%',
    height:50,
    backgroundColor:'#55AB60',
    borderRadius:10,
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center'
  }
});
