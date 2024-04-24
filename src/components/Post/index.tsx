import { colors } from '@/theme/colors';
import { Feather } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';

interface Props {
  post: PostProps;
}

const Post: React.FC<Props> = ({ post }) => {
  const [aspectRatio, setAspectRatio] = useState(1);

  useEffect(() => {
    Image.getSize(post.image, (width, height) => {
      setAspectRatio(width / height);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: post.image }}
        style={[styles.image, { aspectRatio: aspectRatio }]}
      />
      <View style={styles.footer}>
        <Text style={styles.title}>{post.title}</Text>
        <Feather
          name='more-horizontal'
          size={24}
          color={colors.white}
          // style={styles.moreIcon}
        />
      </View>
    </View>
  );
};

export default Post;

