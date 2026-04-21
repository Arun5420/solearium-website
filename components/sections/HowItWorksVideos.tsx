'use client'

import { useRef, useState } from 'react'
import { Play } from 'lucide-react'

export default function HowItWorksVideos() {
  const ref1 = useRef<HTMLVideoElement>(null)
  const ref2 = useRef<HTMLVideoElement>(null)
  const [playing1, setPlaying1] = useState(false)
  const [playing2, setPlaying2] = useState(false)

  function handleVideo1() {
    if (playing1) {
      ref1.current?.pause()
      setPlaying1(false)
    } else {
      if (ref2.current && !ref2.current.paused) {
        ref2.current.pause()
        setPlaying2(false)
      }
      void ref1.current?.play()
      setPlaying1(true)
    }
  }

  function handleVideo2() {
    if (playing2) {
      ref2.current?.pause()
      setPlaying2(false)
    } else {
      if (ref1.current && !ref1.current.paused) {
        ref1.current.pause()
        setPlaying1(false)
      }
      void ref2.current?.play()
      setPlaying2(true)
    }
  }

  return (
    <div className="flex flex-col gap-6 flex-1">
      <div
        className="relative rounded-2xl overflow-hidden bg-ink-card border border-ink-border cursor-pointer aspect-[4/3] lg:aspect-auto lg:flex-1 lg:min-h-0"
        onClick={handleVideo1}
      >
        <video
          ref={ref1}
          src="/media/solution-1.mp4"
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          onEnded={() => setPlaying1(false)}
        />
        {!playing1 && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none">
            <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <Play size={20} fill="white" className="text-white ml-1" />
            </div>
          </div>
        )}
      </div>

      <div
        className="relative rounded-2xl overflow-hidden bg-ink-card border border-ink-border cursor-pointer aspect-[4/3] lg:aspect-auto lg:flex-1 lg:min-h-0"
        onClick={handleVideo2}
      >
        <video
          ref={ref2}
          src="/media/solution-2.mp4"
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          onEnded={() => setPlaying2(false)}
        />
        {!playing2 && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none">
            <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <Play size={20} fill="white" className="text-white ml-1" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
