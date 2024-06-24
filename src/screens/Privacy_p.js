import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Privacy_p = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "#55AB60" }}>
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
          Privacy Policy
        </Text>
      </Pressable>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.containerInside}>
          <Text style={styles.text}>Privacy Policy</Text>
          <Text style={styles.text1}>Last updated on Nov,2023</Text>
          <Text style={styles.text2}>
            SG Grocery is committed to protecting your privacy. This Privacy
            Policy explains our data processing practices and your options
            regarding the ways in which your personal data is used. If you have
            concerning your personal information or any questions please contact
            us to given email at customercare@SGGrocery.us please note that the
            practices of SG grocery with respect to data collected and used by
            Grocery Factory only in connection with this website with links to
            this policy are governed by Grocery Factory privacy policy ("Privacy
            Policy") as amended from time to time and not the privacy policy in
            effect at the time the data was collected. Please regularly review
            our Privacy Policy. If you have objections to the Privacy Policy,
            you can immediately contact us. {'\n'}{'\n'}
            <Text style={styles.text3}>
            Information collected: 
            </Text>{'\n'}{'\n'}
            SG grocery collects the details
            provided by you on registration together with information we learn
            about you from your use of our service and your visits to our
            website. We also collect information about the transactions you
            undertake including details of payment cards used. We may collect
            additional information in connectio n with your participation in any
            promotions or competitions offered by us and information you provide
            when giving us feedback or completing profile forms. We also monitor
            customer traffic patterns and site usage which enables us to improve
            the services we provide.{'\n'}{'\n'} Use of your information and your
            preferences: We will use your information to provide and personalize
            our service. We will also use your contact details to regularly
            communicate with you. We may use your information to send you to
            offer and news from Grocery Factory and services, for this we may
            contact you by post, email, or telephone for these purposes. We like
            to hear your views to help us improve our service. {'\n'}{'\n'}
            <Text style={styles.text3}>
            Use of your
            information and your preferences: 
            </Text>{'\n'}{'\n'}
             We will use your information to
            provide and personalize our service. We will also use your contact
            details to regularly communicate with you. We may use your
            information to send you to offer and news from SG Groecery and
            services, for this we may contact you by post, email, or telephone
            for these purposes. We like to hear your views to help us improve
            our service. {'\n'}{'\n'}
            <Text style={styles.text3}>
            Legal Disclaimer:
            </Text>{'\n'}{'\n'}
             We reserve the right to disclose your
            personally identifiable information as required by law and when
            believe it is necessary to share information in order to
            investigate, prevent, or take action regarding illegal activities,
            suspected fraud, situations involving potential threats to the
            physical safety of any person, violations of SG Grocery in terms of
            use, or as otherwise required by law. {'\n'}{'\n'}
            <Text style={styles.text3}>
            Changes in this Privacy
            Statement:
            </Text>{'\n'}{'\n'} SG Grocery reserve the right to modify this privacy
            statement at any time, so please review it time to time. If we make
            material changes to this policy, we will notify you here.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Privacy_p;

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
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
  },
  text: {
    marginTop: 30,
    fontSize: 22,
    fontWeight: "600",
    color: "#000000",
    textDecorationLine: "underline",
  },
  text1: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "400",
    color: "#838383",
    alignSelf: "center",
  },
  text2: {
    marginTop: 27,
    fontSize: 14,
    fontWeight: "400",
    color: "#000000",
    lineHeight:32,
    marginBottom:130
  },
  text3: {
    padding: 35,
    fontSize: 22,
    fontWeight: "600",
    color: "#000000",
    textDecorationLine: "underline",
  },
});
