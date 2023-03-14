import React from 'react'
import { text, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
return <text style={styles.textStyle}>This is the components screen</text>;
};

const styles = StyleSheet.create({
textStyle: {
  fontSize: 30  
}

});