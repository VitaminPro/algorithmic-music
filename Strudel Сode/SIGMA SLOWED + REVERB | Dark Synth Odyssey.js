// 🌑 SIGMA SLOWED + REVERB | Dark Synth Odyssey
// Strudel.cc compatible code

setcpm(62)

stack(
  // 🥁 ГЛУБОКИЙ БИТ (более мощный kick)
  stack(
    s("bd:5").gain(0.75).room(0.5).lpf(150),
    s("~ ~ sd:8 ~").gain(0.5).room(0.7),
    s("[~ hh:3]*3").gain(0.18).room(0.8).lpf(5000).pan(sine.slow(8))
  ).slow(2).orbit(0),

  // 🎹 ПУЛЬСИРУЮЩИЙ БАС (hypnotic)
  note("<[a1 a1 a2 a1] [f1 f1 f2 f1] [g1 g1 g2 g1] [e1 e1 e2 e1]>")
    .s("sawtooth")
    .gain(0.42)
    .lpf(350)
    .lpq(6)
    .room(0.6)
    .rsize(0.85)
    .slow(2)
    .orbit(1),

  // 🌟 ГЛАВНАЯ МЕЛОДИЯ (эмоциональная)
  note("<[a4 c5 e5 a5 c6 a5 e5 c5] [f4 a4 c5 f5 a5 f5 c5 a4] [g4 b4 d5 g5 b5 g5 d5 b4] [e4 g4 b4 e5 g5 e5 b4 g4]>")
    .s("triangle")
    .gain(0.48)
    .room(1)
    .rsize(1)
    .lpf(4500)
    .dur(0.65)
    .slow(2)
    .every(6, rev)
    .orbit(2),

  // 🎵 БЫСТРОЕ АРПЕДЖИО (энергия)
  note("<[a3 c4 e4]*4 [f3 a3 c4]*4 [g3 b3 d4]*4 [e3 g3 b3]*4>")
    .s("square")
    .gain(0.32)
    .lpf(3000)
    .room(0.9)
    .dur(0.4)
    .slow(2)
    .orbit(3),

  // 🌌 ВЫСОКИЕ ПРИЗРАЧНЫЕ НОТЫ
  note("<[~ ~ e6 ~ ~ a6 ~] [~ ~ c6 ~ ~ f6 ~] [~ ~ d6 ~ ~ g6 ~] [~ ~ b5 ~ ~ e6 ~]>")
    .s("sine")
    .gain(0.38)
    .room(1)
    .rsize(1)
    .lpf(6000)
    .dur(1.2)
    .slow(2)
    .orbit(4),

  // 🎧 ТЕМНЫЙ ПАД (плотная атмосфера)
  note("<[a2 c3 e3 a3] [f2 a2 c3 f3] [g2 b2 d3 g3] [e2 g2 b2 e3]>")
    .s("square")
    .gain(0.26)
    .lpf(750)
    .lpq(3)
    .room(1)
    .rsize(1)
    .slow(8)
    .orbit(5),

  // 🌊 ГЛУБОКИЙ СУБ-БАС
  note("<a0 f0 g0 e0>")
    .s("sine")
    .gain(0.36)
    .lpf(100)
    .room(0.25)
    .slow(4)
    .orbit(6),

  // 💫 ПЕРКУССИЯ (дополнительные хлопки)
  s("~ ~ ~ cp:2")
    .gain(0.35)
    .room(0.8)
    .slow(4)
    .orbit(7),

  // ✨ АТМОСФЕРНЫЙ ШУМ
  s("wind").gain(0.025).room(0.85).lpf(1800).slow(16).orbit(8),

  // 🔮 СЛУЧАЙНЫЕ ГЛИТЧИ (редкие акценты)
  note("<~ ~ ~ [e5 a5] ~ ~ ~ [g5 b5]>")
    .s("triangle")
    .gain(0.3)
    .room(1)
    .lpf(5000)
    .dur(0.3)
    .slow(4)
    .orbit(9)
)
