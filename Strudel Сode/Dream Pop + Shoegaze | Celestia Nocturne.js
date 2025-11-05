// Celestia Nocturne
// Dream Pop / Shoegaze 
// Strudel.cc compatible code

setcpm(72)

stack(
  // 🥁 БОЛЕЕ ЧЁТКИЙ БИТ (но все ещё мечтательный)
  stack(
    s("bd:7").gain(0.6).room(0.6).lpf(200),
    s("~ sd:7 ~ sd:7").gain(0.5).room(0.7),
    s("[hh:5 ~ hh:5 ~]*2").gain(0.25).room(0.8).lpf(6000).pan(sine.slow(8))
  ).slow(2).orbit(0),

  // 🎹 ПУЛЬСИРУЮЩИЙ БАС (более активный)
  note("<[e2 ~ e2 e3 ~ e2 e3 e2] [e2 ~ e2 e3 ~ e2 e3 e2] [c2 ~ c2 c3 ~ c2 c3 c2] [d2 ~ d2 d3 ~ d2 d3 d2]>")
    .s("sawtooth")
    .gain(0.45)
    .lpf(380)
    .lpq(6)
    .room(0.75)
    .rsize(0.9)
    .slow(2)
    .orbit(1),

  // 🌟 ГЛАВНАЯ МЕЛОДИЯ (более выразительная)
  note("<[e5 g5 b5 e6 b5 g5 b5 e6] [e5 g5 b5 e6 b5 g5 b5 e6] [c5 e5 g5 c6 g5 e5 g5 c6] [d5 f5 a5 d6 a5 f5 a5 d6]>")
    .s("triangle")
    .gain(0.5)
    .room(0.9)
    .rsize(1)
    .lpf(5000)
    .dur(0.65)
    .slow(2)
    .every(4, rev)
    .orbit(2),

  // 🎵 АКТИВНОЕ АРПЕДЖИО (движение)
  note("<[e4 g4 b4 e5]*2 [e4 g4 b4 e5]*2 [c4 e4 g4 c5]*2 [d4 f4 a4 d5]*2>")
    .s("square")
    .gain(0.32)
    .lpf(3200)
    .room(0.85)
    .dur(0.5)
    .slow(2)
    .orbit(3),

  // 🌌 ВЫСОКИЕ МЕРЦАЮЩИЕ НОТЫ
  note("<[~ b6 ~ e7 ~ b6 ~ e7] [~ b6 ~ e7 ~ b6 ~ e7] [~ g6 ~ c7 ~ g6 ~ c7] [~ a6 ~ d7 ~ a6 ~ d7]>")
    .s("sine")
    .gain(0.35)
    .room(1)
    .rsize(1)
    .lpf(7500)
    .dur(1.2)
    .slow(2)
    .orbit(4),

  // 🎧 ПЛОТНЫЙ SHOEGAZE ПАД
  note("<[e3 g3 b3 e4] [e3 g3 b3 e4] [c3 e3 g3 c4] [d3 f3 a3 d4]>")
    .s("sawtooth")
    .gain(0.32)
    .lpf(700)
    .lpq(2)
    .room(1)
    .rsize(0.95)
    .slow(4)
    .orbit(5),

  // 🌊 СУБ-БАС
  note("<e1 e1 c1 d1>")
    .s("sine")
    .gain(0.35)
    .lpf(95)
    .room(0.3)
    .slow(4)
    .orbit(6),

  // 💫 ВТОРОЙ ПАД (дополнительная гармония)
  note("<[b4 e5] [b4 e5] [g4 c5] [a4 d5]>")
    .s("square")
    .gain(0.26)
    .lpf(1400)
    .room(0.95)
    .slow(4)
    .orbit(7),

  // ✨ ПЕРКУССИЯ (дополнительные акценты)
  s("~ ~ ~ rim:2")
    .gain(0.3)
    .room(0.8)
    .slow(4)
    .orbit(8),

  // 🔮 СЛУЧАЙНЫЕ СИНТ-АКЦЕНТЫ
  note("<~ [e6 b6] ~ [g6 e7] ~ [b6 e7] ~ [e6 g6]>")
    .s("sine")
    .gain(0.3)
    .room(1)
    .lpf(6500)
    .dur(0.5)
    .slow(4)
    .orbit(9),

  // 🎭 AMBIENT ТЕКСТУРА (тонкий фон)
  s("wind").gain(0.03).room(0.9).lpf(2000).slow(8).orbit(10)
)
