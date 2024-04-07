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
    "karantina": require('@/assets/fonts/karantina/light.ttf'),
    "karantina-bold": require('@/assets/fonts/karantina/regular.ttf'),
    "montserrat-regular": require('@/assets/fonts/montserrat/regular.ttf'),
    "montserrat": require('@/assets/fonts/montserrat/medium.ttf'),
    "montserratItalic": require('@/assets/fonts/montserrat/mediumItalic.ttf'),
    "montserrat-semibold": require('@/assets/fonts/montserrat/semibold.ttf'),
    "montserrat-bold": require('@/assets/fonts/montserrat/bold.ttf'),
    "montserrat-extra-bold": require('@/assets/fonts/montserrat/extrabold.ttf')
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
