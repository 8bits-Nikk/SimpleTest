import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import NextnPrevious, {Stack} from '../components/NextnPrevious';

export const Data = [
  {
    id: 1,
    name: 'Ivy NextShares',
  },
  {
    id: 2,
    name: 'Ottawa Bancorp, Inc.',
  },
  {
    id: 3,
    name: 'Alder BioPharmaceuticals, Inc.',
  },
  {
    id: 4,
    name: 'Principal Healthcare Innovators Index ETF',
  },
  {
    id: 5,
    name: 'Canada Goose Holdings Inc.',
  },
  {
    id: 6,
    name: 'Aralez Pharmaceuticals Inc.',
  },
  {
    id: 7,
    name: 'China Mobile (Hong Kong) Ltd.',
  },
  {
    id: 8,
    name: 'J P Morgan Chase & Co',
  },
  {
    id: 9,
    name: 'Matlin & Partners Acquisition Corporation',
  },
  {
    id: 10,
    name: 'Southern California Edison Company',
  },
  {
    id: 11,
    name: 'Live Nation Entertainment, Inc.',
  },
  {
    id: 12,
    name: 'Wells Fargo & Company',
  },
  {
    id: 13,
    name: 'TransAct Technologies Incorporated',
  },
  {
    id: 14,
    name: 'YY Inc.',
  },
  {
    id: 15,
    name: 'Entertainment Gaming Asia Incorporated',
  },
  {
    id: 16,
    name: 'Two River Bancorp',
  },
  {
    id: 17,
    name: 'MEI Pharma, Inc.',
  },
  {
    id: 18,
    name: 'Cerecor Inc.',
  },
  {
    id: 19,
    name: 'Petrobras Argentina S.A.',
  },
  {
    id: 20,
    name: 'PowerShares DWA Momentum Portfolio',
  },
  {
    id: 21,
    name: 'iShares S&P Global Timber & Forestry Index Fund',
  },
  {
    id: 22,
    name: 'Boot Barn Holdings, Inc.',
  },
  {
    id: 23,
    name: 'Natural Health Trends Corp.',
  },
  {
    id: 24,
    name: 'VictoryShares Emerging Market Volatility Wtd ETF',
  },
  {
    id: 25,
    name: 'Engility Holdings, Inc.',
  },
  {
    id: 26,
    name: 'CECO Environmental Corp.',
  },
  {
    id: 27,
    name: 'Micronet Enertec Technologies, Inc.',
  },
  {
    id: 28,
    name: 'Validea Market Legends ETF',
  },
  {
    id: 29,
    name: 'Alphatec Holdings, Inc.',
  },
  {
    id: 30,
    name: 'Capitala Finance Corp.',
  },
];

const FlatListScreen = () => {
  const ListItems = ({
    value,
    index,
  }: {
    value: {name: string; id: number};
    index: number;
  }) => (
    <TouchableOpacity
      onPress={() => {
        console.log(value.name);
      }}
      key={index.toString()}
      testID={'FlatList-Item'}
      style={{
        paddingVertical: 16,
        padding: 8,
        borderRadius: 12,
        backgroundColor: '#fff',
        marginHorizontal: 16,
        marginBottom: 16,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text testID={'FlatList-ItemName'}>{value.name}</Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.subBody}>
        <FlatList
          testID={'FlatList'}
          data={Data}
          renderItem={({item, index}) => (
            <ListItems value={item} index={index} />
          )}
        />
      </View>
      <NextnPrevious currentScreen={Stack.FlatListScreen} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  subBody: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FlatListScreen;
