import React from 'react';
import { FlatList } from 'react-native';

import { Filter } from '@/components/Filter';
import { styles } from './styles';

function Filters({ filter, filters, onChange }: FiltersProps) {
  return (
    <FlatList
      data={filters}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <Filter
          filter={item}
          selected={item === filter}
          onPress={() => onChange(item)}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.list}
      contentContainerStyle={styles.content}
    />
  );
}

export default Filters;

