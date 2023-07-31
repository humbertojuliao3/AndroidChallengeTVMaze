import React from 'react'
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native'
import RenderHtml from 'react-native-render-html'
import {resizeMode} from '../Utils'
import Header from './Header'
import {htmlStyle, styles} from './styles/EpisodeDetailScreenStyle'
import { useSelector } from 'react-redux'

export default function EpisodeDetailScreen() {
  const episode = useSelector(state=> state.episode)
  console.log(episode)
  const {width} = useWindowDimensions()
  const htmlSummary = `
    <div style="${htmlStyle}">
      ${episode.summary}
    </div>
  `
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ImageBackground
        style={[styles.posterView]}
        resizeMode={resizeMode.cover}
        source={{uri: episode?.image?.original}}>
        <ScrollView contentContainerStyle={[styles.scrollView, {width}]}>
          <Text style={styles.h1}>{`Season ${episode.season}`}</Text>
          <Text
            style={
              styles.h2
            }>{`Episode ${episode.number} - ${episode.name}`}</Text>
          <RenderHtml
            contentWidth={width}
            source={{html: episode.summary ? htmlSummary : ''}}
          />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  )
}
