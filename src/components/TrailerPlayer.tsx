import { Player } from '@remotion/player'
import {
  AssetTrackerTrailer,
  TRAILER_DURATION,
  TRAILER_FPS,
  TRAILER_HEIGHT,
  TRAILER_WIDTH,
} from '../remotion/AssetTrackerTrailer'

export default function TrailerPlayer() {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-2xl border border-ink/10 bg-[#161616] shadow-[0_24px_60px_rgba(29,29,31,0.12)]">
      <Player
        component={AssetTrackerTrailer}
        durationInFrames={TRAILER_DURATION}
        fps={TRAILER_FPS}
        compositionWidth={TRAILER_WIDTH}
        compositionHeight={TRAILER_HEIGHT}
        style={{ width: '100%' }}
        autoPlay
        loop
        initiallyMuted
        controls
        acknowledgeRemotionLicense
      />
    </div>
  )
}