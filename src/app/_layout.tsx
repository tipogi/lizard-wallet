import StoreProvider from '@/store/config/StoreProvider';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { View, useColorScheme } from 'react-native';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loaded, error] = useFonts({
    "karantina-light": require('@/assets/fonts/Karantina/Karantina-Light.ttf'),
    "karantina-regular": require('@/assets/fonts/Karantina/Karantina-Regular.ttf'),
    //"karantina-bold": require('../../assets/fonts/Karantina/Karantina-Bold.ttf'),
    //oxanium: require('../../assets/fonts/oxanium.ttf'),
    coda: require('@/assets/fonts/Coda-Regular.ttf'),
    saira: require('@/assets/fonts/Saira_Condensed/SairaCondensed-Light.ttf'),
    "saira-bold": require('@/assets/fonts/Saira_Condensed/SairaCondensed-SemiBold.ttf'),
    "share-techno-regular": require('@/assets/fonts/ShareTechMono-Regular.ttf'),
    urbanist: require('@/assets/fonts/Urbanist/Urbanist-Regular.ttf'),
    'urbanist-bold':require('@/assets/fonts/Urbanist/Urbanist-SemiBold.ttf'),
    //SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
    //...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {

    console.log(loaded, error)
    if (loaded) {
      console.log('loaded!')
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <StoreProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    </StoreProvider>
  );
}
