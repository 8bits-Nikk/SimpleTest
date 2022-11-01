import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
import NextnPrevious, {Stack} from '../components/NextnPrevious';

const TextInputScreen = () => {
  const [text, setText] = useState('');
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.subBody}>
        <TextInput
          placeholder={'Name'}
          testID={'TextInput'}
          value={text}
          onChangeText={txt => setText(txt)}
          style={{
            borderRadius: 12,
            borderWidth: 2,
            borderColor: '#000',
            padding: 16,
            fontSize: 28,
            marginHorizontal: 8,
          }}
        />
      </View>
      <NextnPrevious currentScreen={Stack.TextInputScreen} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  subBody: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default TextInputScreen;
