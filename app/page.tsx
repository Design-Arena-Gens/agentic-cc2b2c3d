'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      {/* Bokeh Lights Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="bokeh-light"
            style={{
              width: `${Math.random() * 80 + 20}px`,
              height: `${Math.random() * 80 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 3 === 0 ? '#60a5fa' : i % 3 === 1 ? '#fbbf24' : '#a78bfa',
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 4 + 4}s`,
            }}
          />
        ))}
      </div>

      {/* Blue Concert Lighting Effect */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-[120px] opacity-30 animate-pulse-slow"></div>
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-cyan-500 rounded-full filter blur-[100px] opacity-20 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-blue-600 rounded-full filter blur-[90px] opacity-25 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className={`text-center mb-12 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent animate-fade-in">
            LIVE IN CONCERT
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        </div>

        {/* Performer Section */}
        <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative">
            {/* Main Stage Card */}
            <div className="bg-gradient-to-br from-slate-900/80 via-blue-900/50 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-16 shadow-2xl border border-blue-500/20">
              {/* Performer Image Placeholder */}
              <div className="relative mb-8 mx-auto max-w-2xl">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  {/* Stage/Performer Illustration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-800 to-purple-900">
                    {/* Silhouette Effect */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-48 h-64 animate-pulse-slow">
                        {/* Performer Silhouette */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-48 bg-gradient-to-t from-slate-950 to-slate-800 rounded-t-full opacity-90"></div>
                        {/* Head */}
                        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-16 h-20 bg-gradient-to-b from-slate-800 to-slate-900 rounded-full opacity-90"></div>
                        {/* Green Scarf */}
                        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-24 h-4 bg-gradient-to-r from-emerald-600 to-emerald-500 rotate-12 opacity-90 shadow-lg"></div>
                        {/* Microphone */}
                        <div className="absolute top-32 left-8 w-2 h-24 bg-gradient-to-b from-gray-400 to-gray-600 rotate-12"></div>
                        <div className="absolute top-32 left-7 w-4 h-6 bg-gradient-to-b from-gray-300 to-gray-500 rounded-full rotate-12"></div>
                      </div>
                    </div>

                    {/* Stage Lights */}
                    <div className="absolute top-4 left-1/4 w-32 h-32 bg-blue-400 rounded-full filter blur-3xl opacity-40 animate-pulse"></div>
                    <div className="absolute top-8 right-1/4 w-40 h-40 bg-cyan-400 rounded-full filter blur-3xl opacity-30 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-purple-400 rounded-full filter blur-3xl opacity-35 animate-pulse" style={{animationDelay: '1s'}}></div>
                  </div>

                  {/* Crowd Bokeh */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="flex justify-around items-end h-full px-4 pb-2">
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={i}
                          className="w-2 bg-yellow-400 rounded-full filter blur-sm opacity-70 animate-bounce-slow"
                          style={{
                            height: `${Math.random() * 30 + 10}px`,
                            animationDelay: `${Math.random() * 2}s`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Details */}
              <div className="text-center space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                  Passionate Performance
                </h2>

                <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
                  Experience the raw emotion and confident energy of a captivating stage presence
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap justify-center gap-4 pt-6">
                  <div className="px-6 py-3 bg-blue-500/20 backdrop-blur border border-blue-400/30 rounded-full text-blue-200 font-semibold flex items-center gap-2">
                    <span className="text-2xl">🎤</span>
                    <span>Vintage Microphone</span>
                  </div>
                  <div className="px-6 py-3 bg-emerald-500/20 backdrop-blur border border-emerald-400/30 rounded-full text-emerald-200 font-semibold flex items-center gap-2">
                    <span className="text-2xl">🧣</span>
                    <span>Green Scarf</span>
                  </div>
                  <div className="px-6 py-3 bg-purple-500/20 backdrop-blur border border-purple-400/30 rounded-full text-purple-200 font-semibold flex items-center gap-2">
                    <span className="text-2xl">✨</span>
                    <span>Cinematic Vibes</span>
                  </div>
                </div>

                {/* Mood Indicators */}
                <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto pt-8">
                  <div className="bg-slate-800/50 backdrop-blur rounded-xl p-4 border border-blue-400/20">
                    <div className="text-3xl mb-2">🔥</div>
                    <div className="text-sm text-blue-300 font-semibold">Energetic</div>
                  </div>
                  <div className="bg-slate-800/50 backdrop-blur rounded-xl p-4 border border-purple-400/20">
                    <div className="text-3xl mb-2">🎬</div>
                    <div className="text-sm text-purple-300 font-semibold">Cinematic</div>
                  </div>
                  <div className="bg-slate-800/50 backdrop-blur rounded-xl p-4 border border-emerald-400/20">
                    <div className="text-3xl mb-2">💫</div>
                    <div className="text-sm text-emerald-300 font-semibold">Confident</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-20 blur-2xl -z-10"></div>
          </div>
        </div>

        {/* Audience Section */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl px-8 py-6 border border-blue-400/30">
            <div className="flex items-center justify-center gap-3 text-2xl mb-2">
              <span className="animate-bounce-slow">👏</span>
              <span className="animate-bounce-slow" style={{animationDelay: '0.2s'}}>👏</span>
              <span className="animate-bounce-slow" style={{animationDelay: '0.4s'}}>👏</span>
            </div>
            <p className="text-blue-200 font-semibold text-lg">The crowd goes wild!</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center text-blue-300/60 text-sm">
          <p>A cinematic concert experience • Live performance showcase</p>
        </div>
      </div>

      {/* Ambient Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>
    </main>
  );
}
