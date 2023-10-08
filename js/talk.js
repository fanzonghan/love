new TypeIt("#fzhdwj", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("范宗涵 ❤ 董文静")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("永远...!")
    .pause(3000)
    .go();

new TypeIt('#talkToDWJ', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();