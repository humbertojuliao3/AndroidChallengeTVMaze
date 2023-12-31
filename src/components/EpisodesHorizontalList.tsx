import React from 'react'
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import {IEpisode} from '../services/api/types'
import {resizeMode, navigate} from '../Utils'
import {screens} from '../App'
import {actions} from '../Store'
import {styles} from './styles/EpisodesHorizontalListStyle'
import { useDispatch, useSelector } from 'react-redux'

export default function EpisodesHorizontalList({season}: {season: IEpisode[]}) {
  const dispatch = useDispatch()
  const setEpisodeOfInterest = (ep) => dispatch(actions.setEpisode(ep))
  function handlePress(episode: IEpisode) {
    setEpisodeOfInterest(episode)
    navigate(screens.EpisodeDetails, {})
  }

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        persistentScrollbar
        style={styles.horizontalScroll}
        contentContainerStyle={styles.horizontalScroll}>
        {season.map((episode, i) => (
          <TouchableOpacity
            key={`episode${episode.id}`}
            onPress={() => handlePress(episode)}>
            <ImageBackground
              style={styles.imageBackground}
              resizeMode={resizeMode.cover}
              source={{uri: episode?.image?.medium}}>
              <Text style={styles.text}> {`${i + 1}. ${episode.name}`} </Text>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}
