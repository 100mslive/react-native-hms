enum HMSPeerUpdate {
  PEER_JOINED = 'PEER_JOINED',
  PEER_LEFT = 'PEER_LEFT',
  AUDIO_TOGGLED = 'AUDIO_TOGGLED',
  VIDEO_TOGGLED = 'VIDEO_TOGGLED',
  BECAME_DOMINANT_SPEAKER = 'BECAME_DOMINANT_SPEAKER',
  NO_DOMINANT_SPEAKER = 'NO_DOMINANT_SPEAKER',
  RESIGNED_DOMINANT_SPEAKER = 'RESIGNED_DOMINANT_SPEAKER',
  STARTED_SPEAKING = 'STARTED_SPEAKING',
  STOPPED_SPEAKING = 'STOPPED_SPEAKING',
  ROLE_CHANGED = 'ROLE_CHANGED',
}

export default HMSPeerUpdate;