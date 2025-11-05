// 🔥 SIGMA SLOWED + REVERB | TikTok Viral Edition
// Популярный звук в стиле After Hours / Blinding Lights slowed
// Strudel.cc compatible code

setcpm(68)

stack(
  // 🥁 МОЩНЫЙ 808 БИТ (как в трендовых треках)
  stack(
    s("bd:8").gain(0.8).room(0.35).lpf(200),
    s("~ sd:5 ~ sd:5").gain(0.55).room(0.6),
    s("[hh:8 ~]*4").gain(0.22).room(0.7).lpf(6000),
    s("~ ~ ~ oh:3").gain(0.3).room(0.75).slow(2)
  ).slow(2).orbit(0),

  // 🎹 ПУЛЬСИРУЮЩИЙ СИНТ-БАС (The Weeknd style)
  note("<[d2 d2 d3 d2] [bb1 bb1 bb2 bb1] [c2 c2 c3 c2] [a1 a1 a2 a1]>")
    .s("sawtooth")
    .gain(0.5)
    .lpf(450)
    .lpq(5)
    .room(0.65)
    .rsize(0.8)
    .slow(2)
    .orbit(1),

  // 🌟 ГЛАВНАЯ МЕЛОДИЯ (запоминающийся хук)
  note("<[d5 f5 a5 d6 f6 d6 a5 f5] [bb4 d5 f5 bb5 d6 bb5 f5 d5] [c5 e5 g5 c6 e6 c6 g5 e5] [a4 c5 e5 a5 c6 a5 e5 c5]>")
    .s("triangle")
    .gain(0.52)
    .room(0.95)
    .rsize(1)
    .lpf(5000)
    .dur(0.6)
    .slow(2)
    .every(4, rev)
    .every(8, jux(rev))
    .orbit(2),

  // 🎵 СИНКОПИРОВАННОЕ АРПЕДЖИО (движение)
  note("<[d4 ~ f4 a4 ~ d5 a4 ~] [bb3 ~ d4 f4 ~ bb4 f4 ~] [c4 ~ e4 g4 ~ c5 g4 ~] [a3 ~ c4 e4 ~ a4 e4 ~]>")
    .s("square")
    .gain(0.35)
    .lpf(3500)
    .room(0.85)
    .dur(0.45)
    .slow(2)
    .orbit(3),

  // 🌌 КОНТР-МЕЛОДИЯ (вторая октава)
  note("<[~ ~ a5 ~ d6 ~ ~ f6] [~ ~ f5 ~ bb5 ~ ~ d6] [~ ~ g5 ~ c6 ~ ~ e6] [~ ~ e5 ~ a5 ~ ~ c6]>")
    .s("sine")
    .gain(0.4)
    .room(1)
    .rsize(1)
    .lpf(6500)
    .dur(1)
    .slow(2)
    .orbit(4),

  // 🎧 RICH PAD (насыщенная гармония)
  note("<[d3 f3 a3 d4] [bb2 d3 f3 bb3] [c3 e3 g3 c4] [a2 c3 e3 a3]>")
    .s("square")
    .gain(0.3)
    .lpf(850)
    .lpq(2)
    .room(1)
    .rsize(0.95)
    .slow(8)
    .orbit(5),

  // 🌊 САБВУФЕР БАС (808 sub)
  note("<d1 bb0 c1 a0>")
    .s("sine")
    .gain(0.4)
    .lpf(90)
    .room(0.2)
    .slow(4)
    .orbit(6),

  // 💫 СНЭР ROLLS (buildup эффект)
  s("~ ~ ~ [sd:5 sd:5 sd:5]")
    .gain(0.4)
    .room(0.7)
    .slow(8)
    .orbit(7),

  // 🔮 ВЫСОКИЕ CHIMES (magic sparkle)
  note("<[~ ~ ~ d7] [~ ~ ~ f7] [~ ~ ~ e7] [~ ~ ~ c7]>")
    .s("triangle")
    .gain(0.32)
    .room(1)
    .lpf(8000)
    .dur(0.8)
    .slow(4)
    .orbit(8),

  // ✨ VINYL CRACKLE (lo-fi texture)
  s("~ ~ ~ ~")
    .gain(0)
    .orbit(9),

  // 🎭 SIDE-CHAIN ЭФФЕКТ (pumping синт)
  note("<[~ d4 ~ d4 ~ d4 ~ d4] [~ bb3 ~ bb3 ~ bb3 ~ bb3] [~ c4 ~ c4 ~ c4 ~ c4] [~ a3 ~ a3 ~ a3 ~ a3]>")
    .s("sawtooth")
    .gain(0.28)
    .lpf(2000)
    .room(0.6)
    .dur(0.3)
    .slow(2)
    .orbit(10)
)
