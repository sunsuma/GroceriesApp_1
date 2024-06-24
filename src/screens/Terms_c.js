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

const Terms_c = () => {
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
          Terms of services
        </Text>
      </Pressable>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.containerInside}>
          <Text style={styles.text}>Terms and Conditions</Text>
          <Text style={styles.text1}>
            WELCOME TO ALL SG Grocery, LLC AND THANK YOU FOR REGISTERING WITH
            US! IT IS IMPORTANT THAT YOU REVIEW THIS AGREEMENT BECAUSE, BY
            ACCESSING THIS WEBSITE, BY PLACING AN ORDER WITH US BY TELEPHONE,
            EMAIL, FAX, OR THROUGH THIS WEBSITE, YOU ARE AGREEING TO THE TERMS
            AND CONDITIONS THAT GOVERN THE USE OF THE SITE AND THE TERMS UPON
            WHICH WE AGREE TO DELIVER TO YOU.
          </Text>
          <Text style={styles.text2}>
            By placing an order with us by telephone, fax, email, or online, you
            agree to the terms of this Agreement (the “Agreement”) which shall
            cover the terms of our deliveries to you and your use of our
            website. This Agreement is between you and All Seasons Grocery, LLC
            (the “Company” or “All Seasons Grocery”) that states the terms and
            conditions under which you may use the Site and receive deliveries
            from us. All Seasons Grocery is the owner of the following
            trademarks: All Seasons Grocery, www.allseasonsgrocery.com, and the
            All Seasons Grocery logo. This Agreement is binding on you whether
            you purchase from us via the telephone, email, fax, or our website.
            {"\n"}
            {"\n"}
            <Text style={styles.text3}>OUR DELIVERY SERVICE</Text>
            {"\n"}
            {"\n"}
            When you place an order, we use all reasonable efforts to deliver to
            you at the time of your choosing or by 5:00 pm on the day of your
            arrival. Once you place your order by telephone, fax, email, or
            online, we will act as bailee for the ordered products. You can
            modify an existing order at any time up until the order leaves the
            store by calling our customer service number at 435-655-5071 or
            435-655-1914. Please note that we reserve the right to refuse
            service to anyone. We reserve the right to change the cost of
            deliveries and/or our delivery fees at any time{"\n"}
            {"\n"}
            <Text style={styles.text3}>PRICE AND
            AVAILABILITY</Text>
            {"\n"}
            {"\n"}From time to time, products you order may be
            unavailable. If we are unable to fulfill your entire order, we will
            make every reasonable effort to substitute the closest product. We
            do not set the prices for the items you select on your grocery list.
            We pay the prices that each individual store has already set. {'\n'}{'\n'}To
            receive delivery, you do not need to be present to receive your
            order from our driver. In the case of bad weather or unforeseen
            delivery complications, deliveries may be delayed. We will make
            every effort to get your groceries to you by 5:00 pm on the date of
            your arrival.{"\n"}
            {"\n"}
            <Text style={styles.text3}>PAYMENT</Text>
            {"\n"}
            {"\n"} We accept only credit/debit cards. In the
            event your card is declined, we reserve the right to collect funds
            for any uncollected transactions owed us should a payment made via
            credit card be declined. If you fail to pay any fees or charges when
            due, we may charge such amount directly to the credit card
            identified in your Customer Account Information and we may suspend
            or terminate your access to our Service. You shall be responsible
            and liable for any fees, including but not limited to attorney’s
            fees and collection costs, that we may incur in our efforts to
            collect any unpaid balances from you.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Terms_c;

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
    fontWeight: "600",
    color: "#000000",
    lineHeight: 32,
    textDecorationLine: "underline",
  },
  text2: {
    marginTop: 27,
    fontSize: 14,
    fontWeight: "400",
    color: "#000000",
    lineHeight:30,
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
