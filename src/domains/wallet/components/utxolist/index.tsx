import { Skeleton } from '@/global/components/layouts';
import UtxoCard, { UtxoProps } from '@/domains/wallet/components/utxolist/UtxoCard';
import { GrapeColors } from '@/constants';
import { NAVIGATION } from '@navigation';
import { EN } from '@translations';
import { FlatList, View } from 'react-native';
import { listStyles, singleTxStyle } from '@/domains/wallet/styles';
import { Filter } from '@/assets/svg';

const data = (): UtxoProps[] => ([
  {
    id: `bd7acbea-c1b1-46c2-aed5-3ad53abb28ba-${Math.floor(Math.random() * 50)}`,
    address: 'tb1q0v43gtmh4tggzunlu3dvjsse0knu8qg2prge8t',
    tag: 'selling shells and eggs',
    index: 0,
    color: GrapeColors.Red,
    balance: 32913
  },
  {
    id: `3ac68afc-c605-48d3-a4f8-fbd91aa97f63-${Math.floor(Math.random() * 50)}`,
    address: 'tb1qsyl8rxycs5hw3jf9tfdj579747twdhpu3fd9ht',
    tag: 'Second Item',
    index: 1,
    color: GrapeColors.Orange,
    balance: 54832
  },
  {
    id: `58694a0f-3da1-471f-bd96-145571e29d72-${Math.floor(Math.random() * 50)}`,
    address: 'tb1qpwwvd2u30ztz46lv6uxekjl5qug2gyznvqg6zg',
    tag: 'Third Item',
    index: 2,
    color: GrapeColors.Blue,
    balance: 1954215
  },
  {
    id: `58694a0f-3da1-471f-bd96-145571e29d43-${Math.floor(Math.random() * 50)}`,
    address: 'tb1qe7un5dvqd26yp7mu0h35a0c9d05ylg2h8ealaq',
    tag: 'Forth Item',
    index: 3,
    color: GrapeColors.Beige,
    balance: 648005
  },
  {
    id: `58694a0f-3da1-471f-bd96-145571e29d12-${Math.floor(Math.random() * 50)}`,
    address: 'tb1qazzxpq244xprjde46wf86ap3xmjt76fyq2m3jh',
    tag: 'Fith Item',
    index: 4,
    color: GrapeColors.Green,
    balance: 4128889
  },
])


const UTXOList = () => {
  return (
    <View style={singleTxStyle.container}>
      <Skeleton
        backAction={NAVIGATION.wallet}
        headerLabel={EN.wallet.utxos.headline}
        actionIcon={{ icon: Filter, action: () => console.log("hello")}}
      >
        <View style={listStyles.main}>
          <FlatList
            data={[...data(), ...data(), ...data()]}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <UtxoCard
                  key={`${Math.floor(Math.random() * 100000)}`}
                  {...item}
                />)
            }}
          />
        </View>
      </Skeleton>
    </View>
  );
}

export default UTXOList;