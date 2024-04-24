import React from 'react';
import { View } from 'react-native';

import Post from '@/components/Post';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from './styles';

const Posts: React.FC<PostsProps> = ({ posts }) => {
  const postByColumn = (columun: 'right' | 'left') => {
    const rest = columun === 'left' ? 0 : 1;

    return posts
      .filter((_, index) => index % 2 === rest)
      .map((post) => <Post key={post.id} post={post} />);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
      <View style={styles.container}>
        <View style={styles.column}>{postByColumn('left')}</View>
        <View style={styles.column}>{postByColumn('right')}</View>
      </View>
    </ScrollView>
  );
};

export default Posts;

