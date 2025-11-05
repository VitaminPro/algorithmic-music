// 🌑 SIGMA SLOWED + REVERB | DARKWAVE | WITCH-HOUSE
// Strudel.cc compatible code
setcpm(65)

stack(
  // 🥁 МЕДЛЕННЫЙ ТЯЖЁЛЫЙ БИТ
  stack(
    s("bd:8").gain(0.75).room(0.7).rsize(0.8).lpf(180).orbit(0),
    s("~ sd:8 ~ sd:8").gain(0.65).room(0.85).rsize(0.9).orbit(0),
    s("[hh:7 ~ hh:7 ~]*2").gain(0.28).room(0.9).lpf(5500).pan(sine.slow(12)).orbit(0)
  ).slow(2),

  // 🎹 ГЛУБОКИЙ СИНТ-БАС (пульсация)
  note("<[a1 ~ a1 a2 ~ a1 a2 a1] [a1 ~ a1 a2 ~ a1 a2 a1] [f1 ~ f1 f2 ~ f1 f2 f1] [g1 ~ g1 g2 ~ g1 g2 g1]>")
    .s("sawtooth")
    .gain(0.55)
    .lpf(320)
    .lpq(8)
    .room(0.8)
    .rsize(0.95)
    .slow(2)
    .orbit(1),

  // 🌟 МРАЧНАЯ LEAD-МЕЛОДИЯ (чистая и выразительная)
  note("<[a4 c5 e5 a5 e5 c5 e5 a5] [a4 c5 e5 a5 e5 c5 e5 a5] [f4 a4 c5 f5 c5 a4 c5 f5] [g4 b4 d5 g5 d5 b4 d5 g5]>")
    .s("triangle")
    .gain(0.6)
    .room(0.95)
    .rsize(1)
    .lpf(4500)
    .dur(0.7)
    .slow(2)
    .every(4, rev)
    .orbit(2),

  // 🎵 АРПЕДЖИО (атмосферное движение)
  note("<[a3 c4 e4 a4]*2 [a3 c4 e4 a4]*2 [f3 a3 c4 f4]*2 [g3 b3 d4 g4]*2>")
    .s("square")
    .gain(0.38)
    .lpf(2800)
    .room(0.9)
    .dur(0.55)
    .slow(2)
    .orbit(3),

  // 🌌 ВЫСОКИЕ ЭФИРНЫЕ НОТЫ
  note("<[~ e6 ~ a6 ~ e6 ~ a6] [~ e6 ~ a6 ~ e6 ~ a6] [~ c6 ~ f6 ~ c6 ~ f6] [~ d6 ~ g6 ~ d6 ~ g6]>")
    .s("sine")
    .gain(0.4)
    .room(1)
    .rsize(1)
    .lpf(8000)
    .dur(1.3)
    .slow(2)
    .orbit(4),

  // 🎧 ТЁМНЫЙ WITCH-HOUSE ПАД
  note("<[a2 c3 e3 a3] [a2 c3 e3 a3] [f2 a2 c3 f3] [g2 b2 d3 g3]>")
    .s("sawtooth")
    .gain(0.4)
    .lpf(650)
    .lpq(3)
    .room(1)
    .rsize(0.95)
    .slow(4)
    .orbit(5),

  // 🌊 ГЛУБОКИЙ СУБ-БАС
  note("<a0 a0 f0 g0>")
    .s("sine")
    .gain(0.45)
    .lpf(85)
    .room(0.4)
    .slow(4)
    .orbit(6),

  // 💫 ВТОРОЙ ПАД (гармония)
  note("<[e4 a4] [e4 a4] [c4 f4] [d4 g4]>")
    .s("square")
    .gain(0.32)
    .lpf(1200)
    .room(0.95)
    .slow(4)
    .orbit(7),

  // ✨ ПЕРКУССИЯ (акценты)
  s("~ ~ ~ rim:3")
    .gain(0.35)
    .room(0.85)
    .slow(4)
    .orbit(8),

  // 🔮 СЛУЧАЙНЫЕ СИНТ-ВСПЫШКИ
  note("<~ [a5 e6] ~ [c6 a6] ~ [e6 a6] ~ [a5 c6]>")
    .s("sine")
    .gain(0.38)
    .room(1)
    .lpf(7000)
    .dur(0.6)
    .slow(4)
    .orbit(9),

  // 🎭 АТМОСФЕРНЫЙ ФОН
  s("wind").gain(0.04).room(0.95).lpf(1800).slow(8).orbit(10),

  // 🌫️ ДОПОЛНИТЕЛЬНЫЙ РЕВЕРБЕРИРУЮЩИЙ ПАД
  note("<a3 a3 f3 g3>")
    .s("triangle")
    .gain(0.28)
    .lpf(900)
    .room(1)
    .rsize(1)
    .slow(8)
    .orbit(11)
)
