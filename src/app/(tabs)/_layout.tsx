import { Tabs, usePathname } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { MultipleLayers, ScanAddress, Wallet, Settings } from '@/assets/svg';
import { ACCOUNT_SCREEN, RECEIVE_SCREEN, ROOT, SETTINGS_SCREEN, WALLET_SCREEN } from '@/constants/navigation';
import { Colors } from '@/constants';

export const unstable_settings = {
  // Ensure that reloading on `/` keeps a back button present.
  initialRouteName: WALLET_SCREEN,
};

export default function TabsLayout() {

  const pathname = usePathname();

  // Show the tabBar when we navigate between screens inside the tabBar. We just show the tabBar in the root screens
  const showTabBar = pathname === ROOT || pathname === `/${ACCOUNT_SCREEN}` || pathname === `/${SETTINGS_SCREEN}`;

  return (
    <Tabs
        initialRouteName={WALLET_SCREEN}
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            position: "absolute",
            // Hide the tabBar in a tricky way. Display option (display: 'flex' : 'none'), activates the hot navigation corner
            // Send the tabBar to a position that we cannot see. In that case below the screen
            // #TODO: Check if in the future expo team has a solution or find another way
            bottom: showTabBar ? 25 : -100,
            left:20,
            right: 20,
            //elevation: 0,
            backgroundColor: Colors.Navigation,
            borderColor: Colors.Navigation,
            borderRadius: 15,
            height: 60,
            // 'none' does not avoid the hot corner navigation
            display: 'flex',
          }
        }}
    >
        <Tabs.Screen
            name={ACCOUNT_SCREEN}
            options={{
                tabBarIcon: ({ focused}) => {
                    let color = focused ? "#ffffff" : "#03DFA1";
                    let size = focused ? 45 : 30;
                    let style = focused ? styles.selected : styles.none;
                    return (
                        <View style={style}>
                            <MultipleLayers color={color} fontSize={size}/>
                        </View>
                    )
                }
            }}
        />
        <Tabs.Screen
            name={WALLET_SCREEN}
            options={{
                tabBarIcon: ({ focused}) => {
                    let color = focused ? "#ffffff" : "#03DFA1";
                    let size = focused ? 45 : 30;
                    let style = focused ? styles.selected : styles.none;
                    return (
                        <View style={style}>
                            {
                              focused ?
                                  <ScanAddress color={color} fontSize={size}/> :
                                  <Wallet color={color} fontSize={size}/>   
                            }
                        </View>
                    )
                },    
            }}
            listeners={({ navigation }) => ({
                tabPress: e => {            
                  //Any custom code here
                  if (navigation.isFocused()) {
                    // Prevent default action
                    e.preventDefault();
                    navigation.navigate(WALLET_SCREEN, { screen: RECEIVE_SCREEN })
                  }
                },
              })}
        />
        <Tabs.Screen
            name={SETTINGS_SCREEN}
            options={{
              tabBarIcon: ({focused}) => {
                return (
                  <Settings focused={focused}/>
                )
              }
            }}
            
        />
    </Tabs>
  );
}

const styles = StyleSheet.create({
    selected: {
        backgroundColor: "#03DFA1",
        borderRadius: 40,
        height: 80,
        width: 80,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',       
    },
    none: {}
})
