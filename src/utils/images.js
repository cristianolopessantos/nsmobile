 images = {
  PIPOCA: require('../../assets/images/pipoca.png'),
  HIPPIE: require('../../assets/images/hippie.png'),
  ARROW: 'https://artworks.thetvdb.com/banners/posters/257655-19.jpg',
  FEAR : 'https://artworks.thetvdb.com/banners/posters/290853-8.jpg',
  RICK : 'https://artworks.thetvdb.com/banners/posters/275274-2.jpg',
  POSE: 'https://artworks.thetvdb.com/banners/posters/5b0f1a390c3a1_t.jpg',
  NINE : 'https://artworks.thetvdb.com/banners/posters/269586-11.jpg',
  OUTSIDER : 'https://artworks.thetvdb.com/banners/series/365480/posters/62042220_t.jpg',
  GOT : 'https://artworks.thetvdb.com/banners/posters/121361-4.jpg',
  TWD : 'https://artworks.thetvdb.com/banners/posters/153021-6_t.jpg',
  CHERNOBYL : 'https://artworks.thetvdb.com/banners/posters/5cc12861c93e4.jpg',
  CARBON : 'https://artworks.thetvdb.com/banners/posters/332331-8.jpg',
  HUNTER : 'https://artworks.thetvdb.com/banners/series/372081/posters/62039182.jpg',
  BETTER : 'https://artworks.thetvdb.com/banners/posters/273181-1.jpg',
  WEST : 'https://artworks.thetvdb.com/banners/posters/296762-3.jpg',
  GREYS : 'https://artworks.thetvdb.com/banners/posters/73762-9.jpg',
  VIKINGS : 'https://artworks.thetvdb.com/banners/posters/260449-3.jpg',
  SUPERNATURAL : 'https://artworks.thetvdb.com/banners/posters/78901-35.jpg',
  HANDMA : 'https://artworks.thetvdb.com/banners/posters/321239-3.jpg',
  OUTLANDER : 'https://artworks.thetvdb.com/banners/posters/270408-2.jpg',
  HOMELAND :  'https://artworks.thetvdb.com/banners/posters/247897-13.jpg',
  STRANGER :  'https://artworks.thetvdb.com/banners/posters/305288-4.jpg',
  BOJACK_POSTER :  'https://artworks.thetvdb.com/banners/fanart/original/282254-1_t.jpg',
  THE_HUNDRED_POSTER :  'https://artworks.thetvdb.com/banners/fanart/original/268592-5_t.jpg',
  SCANDAL_POSTER :  'https://artworks.thetvdb.com/banners/fanart/original/248841-9_t.jpg',
  HTGWM_POSTER :  'https://artworks.thetvdb.com/banners/fanart/original/281620-1_t.jpg',
  MODERN_FAMILY_POSTER :  'https://artworks.thetvdb.com/banners/fanart/original/95011-23_t.jpg',
}

export function getImages(code){
  return images[code]
}