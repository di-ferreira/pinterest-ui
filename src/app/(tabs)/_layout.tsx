import Avatar from '@/components/Avatar';
import Menu from '@/components/Menu';
import { theme } from '@/theme';
import { FontAwesome5, Foundation, Ionicons } from '@expo/vector-icons';
import BottomSheet from '@gorhom/bottom-sheet';
import { Tabs } from 'expo-router';
import { useRef } from 'react';
import { View } from 'react-native';

export default function TabsLayout() {
  const bottomSheet = useRef<BottomSheet>(null);

  const handleBottomSheetOpen = () => {
    bottomSheet.current?.expand();
  };

  const handleBottomSheetClose = () => {
    bottomSheet.current?.snapToIndex(0);
  };

  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: theme.colors.white,
          tabBarInactiveTintColor: theme.colors.gray[700],
          tabBarStyle: {
            backgroundColor: theme.colors.black,
            borderColor: theme.colors.black,
          },
        }}
      >
        <Tabs.Screen
          name='index'
          options={{
            tabBarIcon: ({ size, color }) => (
              <Foundation name='home' size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name='search'
          options={{
            tabBarIcon: ({ size, color }) => (
              <Ionicons name='search' size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name='menu'
          options={{
            tabBarIcon: ({ size, color }) => (
              <FontAwesome5 name='plus' size={size} color={color} />
            ),
          }}
          listeners={() => ({
            tabPress: (e) => {
              // Prevent default action
              e.preventDefault();
              handleBottomSheetOpen();
            },
          })}
        />
        <Tabs.Screen
          name='messages'
          options={{
            tabBarIcon: ({ size, color }) => (
              <Ionicons name='chatbubble-ellipses' size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name='profile'
          options={{
            tabBarIcon: ({ color }) => (
              <Avatar
                selected={color === theme.colors.white}
                source={{ uri: 'https://github.com/di-ferreira.png' }}
              />
            ),
          }}
        />
      </Tabs>
      <Menu ref={bottomSheet} onClose={handleBottomSheetClose} />
    </View>
  );
}

