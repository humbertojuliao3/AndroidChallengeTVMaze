import {useState, useEffect} from 'react'
import {createNavigationContainerRef} from '@react-navigation/native'

export function useDebounceValue(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

export const navigationRef = createNavigationContainerRef()

export function navigate(name, params) {
  console.log(name, navigationRef)
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export const resizeMode = {
  cover: 'cover',
  contain: 'contain',
  stretch: 'stretch',
  center: 'center',
  repeat: 'repeat',
}
