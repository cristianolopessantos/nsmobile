const images = {
  LOGO: require('../assets/images/logo.png'),
  PIPOCA: require('../assets/images/pipoca.png'),
  ZOMBIE: require('../assets/images/spooky.png'),
  HIPPIE: require('../assets/images/hippie.png'),
  DRACULA: require('../assets/images/dracula.png'),
}

export function getImages(code){
  return images[code]
}