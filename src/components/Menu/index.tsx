import MenuButton from '@/components/MenuButton';
import { FontAwesome } from '@expo/vector-icons';
import BottomSheet from '@gorhom/bottom-sheet';
import React, { forwardRef } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

const Menu = forwardRef<BottomSheet, MenuProps>(({ onClose }, ref) => {
  return (
    <BottomSheet
      ref={ref}
      index={0}
      snapPoints={[0.01, 230]}
      backgroundStyle={styles.container}
      handleComponent={() => null}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <FontAwesome
            name='times'
            size={24}
            onPress={onClose}
            style={styles.closeIcon}
          />
          <Text style={styles.title}>Menu</Text>
        </View>
        <View style={styles.options}>
          <MenuButton title='Pin' icon='map-pin' />
          <MenuButton title='Colagem' icon='paste' />
          <MenuButton title='Pasta' icon='folder' />
        </View>
      </View>
    </BottomSheet>
  );
});

export default Menu;

