"use client"

import { useEffect, useRef, useState } from "react"

export default function Hero() {
  // Change this ID to any YouTube video you prefer (should be an HD video)
  const YOUTUBE_VIDEO_ID = "E_Iy34hFITE"
  const containerRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const [localVideoAvailable, setLocalVideoAvailable] = useState<boolean | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width
        const y = (e.clientY - rect.top) / rect.height

        const elements = containerRef.current.querySelectorAll("[data-float]")
        elements.forEach((el) => {
          const moveX = (x - 0.5) * 10
          const moveY = (y - 0.5) * 10
          ;(el as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Check if local MP4 exists; prefer it for background when available.
  useEffect(() => {
    let mounted = true
    ;(async () => {
      try {
        const res = await fetch('/videos/hero.mp4', { method: 'HEAD' })
        if (mounted) setLocalVideoAvailable(res.ok)
      } catch {
        try {
          const res2 = await fetch('/videos/hero.mp4')
          if (mounted) setLocalVideoAvailable(res2.ok)
        } catch {
          if (mounted) setLocalVideoAvailable(false)
        }
      }
    })()
    return () => { mounted = false }
  }, [])

  // Try to programmatically play the local video (some browsers require a play() call even when muted)
  useEffect(() => {
    if (localVideoAvailable && videoRef.current) {
      const v = videoRef.current
      const p = v.play()
      if (p && typeof p.then === 'function') p.catch(() => {})
    }
  }, [localVideoAvailable])

  // Track play/pause state for a manual play button
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const onPlay = () => setIsVideoPlaying(true)
    const onPause = () => setIsVideoPlaying(false)
    v.addEventListener('play', onPlay)
    v.addEventListener('pause', onPause)
    // initialize
    setIsVideoPlaying(!v.paused)
    return () => {
      v.removeEventListener('play', onPlay)
      v.removeEventListener('pause', onPause)
    }
  }, [localVideoAvailable])

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen bg-background overflow-hidden pt-20 flex items-center justify-center"
    >
      {/* Background: prefer local MP4 if available, otherwise use YouTube iframe */}
      <div className="absolute inset-0 overflow-hidden">
        {localVideoAvailable === null ? (
          <div className="absolute inset-0 bg-black/40 -z-10" />
        ) : localVideoAvailable ? (
          <>
            <video
              ref={videoRef}
              className="absolute top-1/2 left-1/2 w-[177.77vh] h-[100vh] min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden
            >
              <source src="/videos/hero.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/30" />
          </>
        ) : (
          <>
            <iframe
              className="absolute top-1/2 left-1/2 w-[177.77vh] h-[100vh] min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={{ opacity: 0.95 }}
              src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${YOUTUBE_VIDEO_ID}&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1`}
              title="Hero background video"
              frameBorder="0"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
            />
            <div className="absolute inset-0 bg-black/40" />
          </>
        )}
      </div>
      {/* Manual play button for local background (if autoplay blocked) */}
      {localVideoAvailable && (
        <button
          onClick={() => {
            const v = videoRef.current
            if (!v) return
            if (v.paused) v.play().catch(() => {})
            else v.pause()
          }}
          className="fixed bottom-6 left-6 z-30 w-12 h-12 rounded-full bg-primary/90 text-background flex items-center justify-center"
          aria-label="Toggle background video"
          title="Toggle background video"
        >
          {isVideoPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-pause">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-play">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          )}
        </button>
      )}
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" data-float />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl" data-float />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tagline */}
        <div className="inline-block mb-6 animate-fadeInDown">
          <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold">
            Premium Electrical Solutions
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="animate-fadeInUp text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          Power Your Vision with
          <span className="block text-primary">Maverick Engineers</span>
        </h1>

        {/* Description */}
        <p className="animate-fadeInUp text-lg sm:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
          Delivering world-class electrical products and services with cutting-edge technology, professional expertise,
          and luxury craftsmanship since day one.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fadeInUp flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="px-8 py-4 bg-primary text-background rounded-lg font-bold text-lg hover:bg-primary/90 transition-all duration-300 hover-glow w-full sm:w-auto">
            Explore Services
          </button>
          <button className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-bold text-lg hover:bg-primary/10 transition-all duration-300 w-full sm:w-auto">
            View Portfolio
          </button>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="animate-fadeInUp grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-primary/10"
        >
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
              500+
            </div>
            <p className="text-sm text-foreground/60">Projects Delivered</p>
          </div>
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
              99%
            </div>
            <p className="text-sm text-foreground/60">Client Satisfaction</p>
          </div>
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
              15+
            </div>
            <p className="text-sm text-foreground/60">Years Experience</p>
          </div>
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
              50+
            </div>
            <p className="text-sm text-foreground/60">Expert Engineers</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
