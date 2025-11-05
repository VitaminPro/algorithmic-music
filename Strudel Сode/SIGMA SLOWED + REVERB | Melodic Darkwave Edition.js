// 🌙 SIGMA SLOWED + REVERB | Melodic Darkwave Edition
// Strudel.cc compatible code

setcpm(65)

stack(
  // 🥁 МИНИМАЛИСТИЧНЫЙ БИТ
  stack(
    s("bd:3").gain(0.65).room(0.4),
    s("~ sd:4 ~ sd:4").gain(0.45).room(0.5),
    s("[~ hh]*4").gain(0.2).room(0.6).lpf(4000)
  ).slow(2).orbit(0),

  // 🎹 СИНТ-БАС
  note("<[c2 eb2 g2 c3] [ab1 c2 eb2 ab2] [bb1 d2 f2 bb2] [f1 ab1 c2 f2]>")
    .s("sawtooth")
    .gain(0.4)
    .lpf(500)
    .lpq(4)
    .room(0.7)
    .rsize(0.9)
    .slow(2)
    .orbit(1),

  // 🌟 LEAD-МЕЛОДИЯ
  note("<[c5 d5 eb5 g5 bb5 c6 bb5 g5] [ab4 bb4 c5 eb5 g5 ab5 g5 eb5] [bb4 c5 d5 f5 ab5 bb5 ab5 f5] [f4 ab4 bb4 c5 eb5 f5 eb5 c5]>")
    .s("triangle")
    .gain(0.45)
    .room(0.95)
    .rsize(1)
    .lpf(4000)
    .dur(0.7)
    .slow(2)
    .every(4, rev)
    .every(8, jux(rev))
    .orbit(2),

  // 🎵 АРПЕДЖИО
  note("<[c4 eb4 g4 bb4]*2 [ab3 c4 eb4 g4]*2 [bb3 d4 f4 ab4]*2 [f3 ab3 c4 eb4]*2>")
    .s("square")
    .gain(0.3)
    .lpf(2500)
    .room(0.85)
    .dur(0.5)
    .slow(2)
    .orbit(3),

  // 🌌 КОНТР-МЕЛОДИЯ
  note("<[~ g6 ~ bb6] [~ ab6 ~ c7] [~ f6 ~ ab6] [~ eb6 ~ g6]>")
    .s("sine")
    .gain(0.35)
    .room(1)
    .rsize(1)
    .lpf(5000)
    .dur(0.9)
    .slow(4)
    .orbit(4),

  // 🎧 АТМОСФЕРНЫЙ ПАД
  note("<[c3 eb3 g3 bb3] [ab2 c3 eb3 g3] [bb2 d3 f3 ab3] [f2 ab2 c3 eb3]>")
    .s("square")
    .gain(0.28)
    .lpf(900)
    .lpq(2)
    .room(1)
    .rsize(1)
    .slow(8)
    .orbit(5),

  // 🌊 СУБ-БАС
  note("<c1 ab1 bb1 f1>")
    .s("sine")
    .gain(0.32)
    .lpf(120)
    .room(0.3)
    .slow(4)
    .orbit(6),

  // ✨ AMBIENT TEXTURE
  s("wind").gain(0.03).room(0.8).lpf(2000).slow(8).orbit(7)
)
