import { theme } from '@/theme';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Pressable, Text } from 'react-native';
import { MenuButtonProps } from './menuButton';
import { styles } from './styles';

const MenuButton: React.FC<MenuButtonProps> = ({ title, icon }) => {
  return (
    <Pressable style={styles.container}>
      <FontAwesome
        name={icon}
        size={32}
        color={theme.colors.white}
        style={styles.icon}
      />
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default MenuButton;

