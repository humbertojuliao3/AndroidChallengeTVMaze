import React from 'react'
import {Image, Text, TouchableOpacity} from 'react-native'
import {IShow} from '../services/api/types'
import {actions} from '../Store'
import {screens} from '../App'
import { navigate } from "../Utils";
import {styles} from './styles/ShowTileStyle'
import { useDispatch, useSelector } from 'react-redux'

export default function ShowTile({showInfo}: {showInfo: IShow}) {
  const dispatch = useDispatch()
  const setShowOfInterest = (show) => dispatch(actions.setShow(show))

  function handlePress() {
    setShowOfInterest(showInfo)
    navigate(screens.ShowDetails, {})
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <>
        <Image
          style={styles.image}
          source={{uri: showInfo?.image?.medium}}
          resizeMethod={'scale'}
        />
        <Text style={styles.h1}>{showInfo.name}</Text>
      </>
    </TouchableOpacity>
  )
}
