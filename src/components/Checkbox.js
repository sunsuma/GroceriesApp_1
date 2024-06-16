import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CheckButton = ({ checked, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.checkContainer}>
    <View style={[styles.checkBox, checked && styles.checkedBox]}>
      {checked && <View style={styles.innerCheck} />}
    </View>
  </TouchableOpacity>
);

const CheckButtonGroup = () => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.checkGroup}>
        <CheckButton
          checked={checked}
          onPress={() => setChecked(!checked)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
    backgroundColor: '#fff',
  },
  checkGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkContainer: {
    marginRight: 10,
  },
  checkBox: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderColor: '#55AB60',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:100
  },
  checkedBox: {
    borderColor: '#55AB60',
    
  },
  innerCheck: {
    width: 12,
    height: 12,
    backgroundColor: '#55AB60',
    borderRadius:100
  },
});

export default CheckButtonGroup;
