const initialState = {
  episodes: [
    {id_serie:1, season: 1, num_episodes:89, 
    eps: [
      { aired: 'S01E01', name: 'Pilot', thumb: 'https://artworks.thetvdb.com/banners/series/275274/episodes/62114096.jpg', released: 'September 21, 2015'},
      { aired: 'S01E02', name: 'Lawnmower Dog', thumb: 'https://artworks.thetvdb.com/banners/series/275274/episodes/62114097.jpg', released: 'September 28, 2015'},
      { aired: 'S01E03', name: 'Anatomy Park', thumb: 'https://artworks.thetvdb.com/banners/series/275274/episodes/62114099.jpg', released: 'October 5, 2015'},
      { aired: 'S01E04', name: 'M. Night Shaym-Aliens!', thumb: 'https://artworks.thetvdb.com/banners/series/275274/episodes/62114100.jpg', released: 'January 13, 2014'},
      { aired: 'S01E05', name: 'Meeseeks and Destroy', thumb: 'https://artworks.thetvdb.com/banners/series/275274/episodes/62114101.jpg', released: 'October 5, 2015'},
      { aired: 'S01E06', name: 'Rick Potion #9', thumb: 'https://artworks.thetvdb.com/banners/series/275274/episodes/62114102.jpg', released: 'October 5, 2015'},
      { aired: 'S01E07', name: 'Raising Gazorpazorp', thumb: 'https://artworks.thetvdb.com/banners/series/275274/episodes/62114103.jpg', released: 'October 5, 2015'},
      { aired: 'S01E08', name: 'Rixty Minutes', thumb: 'https://artworks.thetvdb.com/banners/series/275274/episodes/62114104.jpg', released: 'October 5, 2015'},
      { aired: 'S01E09', name: 'Something Ricked This Way Comes', thumb: 'https://artworks.thetvdb.com/banners/series/275274/episodes/62114106.jpg', released: 'October 5, 2015'},
      { aired: 'S01E10', name: 'Close Rick-Counters of the Rick Kind', thumb: 'https://artworks.thetvdb.com/banners/series/275274/episodes/62114107.jpg', released: 'October 5, 2015'},
      { aired: 'S01E11', name: 'Ricksy Business', thumb: 'https://artworks.thetvdb.com/banners/series/275274/episodes/62114108.jpg', released: 'October 5, 2015'},
    ]},

    {id_serie:1, season:2, num_episodes:89, 
      eps: [
        { aired: 'S02E01', name: 'A Rickle in Time', thumb: 'https://artworks.thetvdb.com/banners/series/275274/episodes/62114111.jpg', released: 'September 21, 2015'},
        { aired: 'S02E02', name: 'Mortynight Run', thumb: 'https://artworks.thetvdb.com/banners/series/275274/episodes/62114112.jpg', released: 'September 28, 2015'},
        { aired: 'S02E03', name: 'Auto Erotic Assimilation', thumb: 'https://artworks.thetvdb.com/banners/series/275274/episodes/62114113.jpg', released: 'October 5, 2015'},
        { aired: 'S02E04', name: 'Total Rickall', thumb: 'https://artworks.thetvdb.com/banners/series/275274/episodes/62114114.jpg', released: 'October 5, 2015'},
        { aired: 'S02E05', name: 'Get Schwifty', thumb: 'https://artworks.thetvdb.com/banners/series/275274/episodes/62114115.jpg', released: 'October 5, 2015'},
        { aired: 'S02E06', name: 'The Ricks Must Be Crazy', thumb: 'https://artworks.thetvdb.com/banners/series/275274/episodes/62114116.jpg', released: 'October 5, 2015'},
        { aired: 'S02E07', name: 'Big Trouble in Little Sanchez', thumb: 'https://artworks.thetvdb.com/banners/series/275274/episodes/62114117.jpg', released: 'October 5, 2015'},
        { aired: 'S02E08', name: 'Big Trouble in Little Sanchez', thumb: 'https://artworks.thetvdb.com/banners/series/275274/episodes/62114118.jpg', released: 'October 5, 2015'},
        { aired: 'S02E09', name: 'Look Who`s Purging Now', thumb: 'https://artworks.thetvdb.com/banners/series/275274/episodes/62114119.jpg', released: 'October 5, 2015'},
        { aired: 'S02E10', name: 'The Wedding Squanchers', thumb: 'https://artworks.thetvdb.com/banners/series/275274/episodes/62114120.jpg', released: 'October 5, 2015'},
      ]},

      {id_serie:1, season: 3, num_episodes:89, 
        eps: [
          { aired: 'S03E01', name: 'The Rickshank Rickdemption', thumb: 'https://artworks.thetvdb.com/banners/series/275274/episodes/5e748b20acba6.jpg', released: 'September 21, 2015'},
          { aired: 'S03E02', name: 'Rickmancing the Stone', thumb: 'https://artworks.thetvdb.com/banners/series/275274/episodes/5e748b3d47c68.jpg', released: 'September 28, 2015'},
          { aired: 'S03E03', name: 'Pickle Rick', thumb: 'https://artworks.thetvdb.com/banners/series/275274/episodes/5e748b5f99b46.jpg', released: 'October 5, 2015'},
          { aired: 'S03E04', name: 'Vindicators 3: The Return of Worldender', thumb: 'https://artworks.thetvdb.com/banners/series/275274/episodes/5e748b7ac1c04.jpg', released: 'January 13, 2014'},
          { aired: 'S03E05', name: 'The Whirly Dirly Conspiracy', thumb: 'https://artworks.thetvdb.com/banners/series/275274/episodes/5e748b8fe359c.jpg', released: 'October 5, 2015'},
          { aired: 'S03E06', name: 'Rest and Ricklaxation', thumb: 'https://artworks.thetvdb.com/banners/series/275274/episodes/5e748ba6d469d.jpg', released: 'October 5, 2015'},
          { aired: 'S03E07', name: 'The Ricklantis Mixup', thumb: 'https://artworks.thetvdb.com/banners/series/275274/episodes/5e748bbdeb433.jpg', released: 'October 5, 2015'},
          { aired: 'S03E08', name: 'Morty`s Mind Blowers', thumb: 'https://artworks.thetvdb.com/banners/series/275274/episodes/5e748bd7d7301.jpg', released: 'October 5, 2015'},
          { aired: 'S03E09', name: 'The ABC`s of Beth', thumb: 'https://artworks.thetvdb.com/banners/series/275274/episodes/5e748beed58e9.jpg', released: 'October 5, 2015'},
          { aired: 'S03E10', name: 'The Rickchurian Mortydate', thumb: 'https://artworks.thetvdb.com/banners/series/275274/episodes/5e748c0b47b01.jpg', released: 'October 5, 2015'},
        ]},
  ]
}

const episodesReducer = (state= initialState) => {
  return state;
}

export default episodesReducer;