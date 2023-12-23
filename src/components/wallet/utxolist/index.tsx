import { SimpleHeader } from '@/components/global/layouts';
import { Close } from '@/components/global/svg';
import UtxoCard, { UtxoProps } from '@/components/wallet/utxolist/UtxoCard';
import { Colors, GrapeColors } from '@/constants';
import { NAVIGATION } from '@/navigation';
import { EN } from '@/translations';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const data: UtxoProps[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    address: 'tb1q0v43gtmh4tggzunlu3dvjsse0knu8qg2prge8t',
    tag: 'selling shells and eggs',
    index: 0,
    color: GrapeColors.Red,
    balance: 32913
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    address: 'tb1qsyl8rxycs5hw3jf9tfdj579747twdhpu3fd9ht',
    tag: 'Second Item',
    index: 1,
    color: GrapeColors.Orange,
    balance: 54832
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    address: 'tb1qpwwvd2u30ztz46lv6uxekjl5qug2gyznvqg6zg',
    tag: 'Third Item',
    index: 2,
    color: GrapeColors.Blue,
    balance: 1954215
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d43',
    address: 'tb1qe7un5dvqd26yp7mu0h35a0c9d05ylg2h8ealaq',
    tag: 'Forth Item',
    index: 3,
    color: GrapeColors.Beige,
    balance: 648005
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d12',
    address: 'tb1qazzxpq244xprjde46wf86ap3xmjt76fyq2m3jh',
    tag: 'Fith Item',
    index: 4,
    color: GrapeColors.Green,
    balance: 4128889
  },
]




const UTXOList = () => {
  return (
    <>
      <SimpleHeader
        icon={Close}
        headline={EN.wallet.utxos.headline}
        backAction={NAVIGATION.wallet}
        iconColor={Colors.Background}
      />
      <View style={styles.main}>
        <FlatList
          data={data}
          renderItem={({ item }) => {
              return ([
                <UtxoCard
                  key={`utxo-card-${item.id}`}
                  {...item}
                />,
                <UtxoCard
                  key={`utxo-card-${item.id}-b`}
                  {...item}
                />,
                <UtxoCard
                  key={`utxo-card-${item.id}-c`}
                  {...item}
                />
              ])
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.Background,
    marginTop: "auto",
    height: "85%",
    display: "flex",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingTop: 30
  }
});

export default UTXOList;


{/* <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={(element) => {
            console.log(element)
            return (
              <View><Text>{ element.item.title}</Text></View>
            )
          }}
        /> */}