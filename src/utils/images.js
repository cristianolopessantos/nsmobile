const images = {
  LOGO: require('../assets/images/logo.png'),
  ZOMBIE: require('../assets/images/spooky.png')
}

export function getImages(code){
  return images[code]
}