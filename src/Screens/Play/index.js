import React from 'react'
import Video, {TextTrackType} from 'react-native-video';
import { StyleSheet, Button } from 'react-native'

// const videoError = () =>{
//   alert('NAO CARREGOU');
// }
state = {
  paused: false
}
const Play = () => {
  return (
    <Video 
    source={require('./broadchurch.mp4')}
    volume={1.0}
    selectedTextTrack={{
      type: 'index',
      value: 0,
    }}
 
    textTracks={[
      {
        index: 0,
        title: "French 1",
        language: 'en',
        type: TextTrackType.VTT,
        uri: 'https://bitdash-a.akamaihd.net/content/sintel/subtitles/subtitles_en.vtt',
      },
      
      {
        index: 1,
        title: "Spanish Subtitles",
        language: "es",
        type: TextTrackType.SRT, // "application/x-subrip"
        uri: "https://durian.blender.org/wp-content/content/subtitles/sintel_es.srt"
      }
    ]}
   // Can be a URL or a local file.
      //  ref={(ref) => {
      //    this.player = ref
      //  }}                                      // Store reference
      //  onBuffer={this.onBuffer}                // Callback when remote video is buffering
    // onError={videoError}      
    // Callback when video cannot be loaded
    controls={true}
    paused={!state.play}
    style={styles.backgroundVideo} />
    
    
  )
}

var styles = StyleSheet.create({
  backgroundVideo: {
    width: '100%',
    height: 300,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default Play


{/* <Video
source={{uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'}}
style={styles.fullScreen}
rate={this.state.rate}
paused={this.state.paused}
volume={this.state.volume}
muted={this.state.muted}
ignoreSilentSwitch={this.state.ignoreSilentSwitch}
resizeMode={this.state.resizeMode}
onLoad={this.onLoad}



onBuffer={this.onBuffer}
onProgress={this.onProgress}
onEnd={() => { AlertIOS.alert('Done!') }}
repeat={true}
filter={this.state.filter}
filterEnabled={this.state.filterEnabled}
/> */}
