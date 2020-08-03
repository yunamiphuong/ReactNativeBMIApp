import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Slider } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function BMI() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.view1}>
        <Text style={styles.titleText}>BMI CALCULATOR</Text>
      </View>

      <View style={styles.view2}>
        <TouchableOpacity style={styles.buttonGender}>
          <FontAwesome5 name="mars" style={styles.iconMa} />
          <Text style={styles.allText}>MALE</Text>
        </TouchableOpacity>
        

   
        <TouchableOpacity style={styles.buttonGender}>
          <FontAwesome5 name="venus" style={styles.iconFe} />
          <Text style={styles.allText}>FEMALE</Text>
        </TouchableOpacity>
     
      </View>

      <View style={styles.view3}>
        <View style={styles.view3Container}>
          <View style={styles.view3text}>
            <Text style={styles.allText}>HEIGHT</Text>
            <Text style={styles.heightNumberText}>181 cm</Text>
          </View>
          <Slider
            minimumTrackTintColor="#7d4e65"
            maximumTrackTintColor="black"
          />
        </View>
      </View>

      <View style={styles.view4}>
        <View style={styles.weightAgeView}>
          <View style={styles.view4Text}>
            <Text style={styles.allText}>WEIGHT</Text>
            <Text style={styles.heightNumberText}>50</Text>
          </View>
          <View style={styles.buttonsViewContainer}>
            <TouchableOpacity style={styles.addMinusButton}>
              <FontAwesome5 name="minus" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.addMinusButton}>
              <FontAwesome5 name="plus" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.weightAgeView}>
          <View style={styles.view4Text}>
            <Text style={styles.allText}>AGE</Text>
            <Text style={styles.heightNumberText}>20</Text>
          </View>
          <View style={styles.buttonsViewContainer}>
            <TouchableOpacity style={styles.addMinusButton}>
              <FontAwesome5 name="minus" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.addMinusButton}>
              <FontAwesome5 name="plus" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.view5}>
        <TouchableOpacity style={styles.calculateButton}>
          <Text style={styles.calculateText}>CALCULATE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const paddingNumber = 12;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d2236",
    // alignItems: "center",
    justifyContent: "center",
  },
  view1: {
    backgroundColor: "#1d2236",
    flex: 1 / 10,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 24,
    borderBottomColor: "#16192e",
    borderBottomWidth: 5
  },
  view2: {
    backgroundColor: "#1d2236",
    flex: 3/10,
    paddingHorizontal: paddingNumber,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  view3: {
    backgroundColor: "#1d2236",
    flex: 3/10,
    padding: paddingNumber,
    justifyContent: "center",
  },
  view4: {
    backgroundColor: "#1d2236",
    flex: 3/10,
    padding: paddingNumber,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  view5: {
    backgroundColor: "#1d2236",
    flex: 1 / 10,
    justifyContent: "center",
    padding: paddingNumber,
  },
  titleText: {
    color: "white",
    fontSize: 23,
  },
  // maleView:{
  //   backgroundColor: "green",
  //   width: "50%",
  //   height: "90%",
  // },
  // femaleView:{
  //   backgroundColor: "gray",
  //   width: "50%",
  //   height: "90%",
  // },

  // VIEW 2
  buttonGender: {
    backgroundColor: "#323344",
    width: "47%",
    height: "90%",
    alignItems: "center",
    borderRadius: 7,
    justifyContent: "center",
  },
  iconMa: {
    // backgroundColor: "green",
    color: "#51cbf0",
    fontSize: 65,
  },
  iconFe: {
    // backgroundColor: "green",
    color: "#ec5024",
    fontSize: 65,
  },
  allText: {
    // color: "#616271",
    color: "#999",
    fontSize: 12,
    marginVertical: 10,
  },

  // VIEW 3
  view3Container: {
    backgroundColor: "#323344",
    borderRadius: 7,
    height: "100%",
    padding: 10,
  },
  view3text: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  heightNumberText: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },

  // view 4
  weightAgeView: {
    backgroundColor: "#323344",
    borderRadius: 7,
    width: "47%",
    height: "100%",
    padding: 10,
    // justifyContent: "center",
    // flexWrap: "wrap",
    // alignContent: "center"
  },
  view4Text: {
    alignItems: "center",
  },
  buttonsViewContainer: {
    // backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 15,
  },
  addMinusButton: {
    backgroundColor: "#5e606e",
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    color: "white",
    fontSize: 20,
  },

  // VIEW 5
  calculateButton: {
    backgroundColor: "#e83d66",
    height: 50,
    width: "100%",
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  calculateText:{
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
});
