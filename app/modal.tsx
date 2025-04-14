import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

const Modal = () => {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const genres = ['All', 'Action', 'Comedy', 'Romance', 'Fantasy'];
  const trendingMovies = [
    {
      image: require('../assets/images2/horror2.png'),
      title: 'Angel Has Fallen',
      tags: ['18+', 'Action', '⭐ 5.0'],
    },
    {
      image: require('../assets/images2/comedi.png'),
      title: 'Another Movie',
      tags: ['16+', 'Action', '⭐ 4.8'],
    },
    {
      image: require('../assets/images2/romance.png'),
      title: 'Final Battle',
      tags: ['18+', 'Action', '⭐ 4.9'],
    },
  ];

  return (
    <View style={styles.container}>

      <View style={styles.tabContainer}>
        <Text style={[styles.tab, styles.inactiveTab]}>Series</Text>
        <Text style={[styles.tab, styles.activeTab]}>Film</Text>
        <Text style={[styles.tab, styles.inactiveTab]}>My List</Text>
      </View>

      <ScrollView>

        <Text style={styles.sectionTitle}>Coming Soon</Text>
        <View style={styles.comingSoon}>
          <Image
            style={styles.banner}
            source={require('../assets/images2/horror1.png' )}
          />
          <TouchableOpacity style={styles.playButton}>
            <Text style={styles.playIcon}>▶</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.genreList}
        >
          {genres.map((genre) => (
            <TouchableOpacity key={genre} onPress={() => setSelectedGenre(genre)}>
              <Text
                style={[
                  styles.genre,
                  selectedGenre === genre && styles.activeGenre,
                ]}
              >
                {genre}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>Trending Now</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.trendingList}
        >
          {trendingMovies.map((movie, index) => (
            <View style={styles.card} key={index}>
              <Image
                source={movie.image}
                style={styles.cardImage}
              />
              <View style={styles.badges}>
                {movie.tags.map((tag, i) => (
                  <Text key={i} style={styles.badge}>{tag}</Text>
                ))}
              </View>
              <Text style={styles.cardTitle}>{movie.title}</Text>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5F66A4',
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  tab: {
    fontSize: 16,
    fontWeight: '600',
  },
  activeTab: {
    color: '#e50914',
  },
  inactiveTab: {
    color: '#fff',
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  comingSoon: {
    position: 'relative',
    marginBottom: 10,
  },
  banner: {
    width: '100%',
    height: 180,
    borderRadius: 10,
  },
  playButton: {
    position: 'absolute',
    top: '40%',
    left: '45%',
    backgroundColor: 'rgba(255,255,255,0.3)',
    padding: 10,
    borderRadius: 30,
  },
  playIcon: {
    fontSize: 18,
    color: '#fff',
  },
  genreList: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  genre: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: '#2a2a2a',
    color: '#fff',
    borderRadius: 15,
    marginRight: 10,
  },
  activeGenre: {
    backgroundColor: '#e50914',
  },
  trendingList: {
    flexDirection: 'row',
  },
  card: {
    width: 150,
    marginRight: 15,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  badges: {
    flexDirection: 'row',
    gap: 5,
    marginTop: 5,
  },
  badge: {
    color: '#fff',
    fontSize: 10,
    backgroundColor: '#333',
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5,
    fontWeight: 'bold',
  },
});

export default Modal;
