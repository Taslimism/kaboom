kaboom({
    global: true,
    fullscreen: true,
    scale: 2,
    debug: true,

})


loadSprite("dino1", "/assets/dino/sheets/doux.png", {
    sliceX: 24,
    sliceY: 1,
    anims: {
        main: {
            from: 0,
            to: 14,
        },
        running: {
            from: 16,
            to: 23
        }
    }
});
loadSprite("dino2", "/assets/dino/sheets/mort.png", {
    sliceX: 24,
    sliceY: 1,
    anims: {
        main: {
            from: 0,
            to: 14,
        },
        running: {
            from: 16,
            to: 23
        }
    }
});
loadSprite("dino3", "/assets/dino/sheets/tard.png", {
    sliceX: 24,
    sliceY: 1,
    anims: {
        main: {
            from: 0,
            to: 14,
        },
        running: {
            from: 16,
            to: 23
        }
    }
});
loadSprite("dino4", "/assets/dino/sheets/vita.png", {
    sliceX: 24,
    sliceY: 1,
    anims: {
        main: {
            from: 0,
            to: 14,
        },
        running: {
            from: 16,
            to: 23
        }
    }
});

scene("main", () => {
    const dino1 = add([sprite("dino1"), pos(0, 0), scale(4)]);
    const dino2 = add([sprite("dino2"), pos(200, 0), scale(4)]);
    const dino3 = add([sprite("dino3"), pos(400, 0), scale(4)]);
    const dino4 = add([sprite("dino4"), pos(600, 0), scale(4)]);

    dino1.play("main");
    dino2.play("main");
    dino3.play("main");
    dino4.play("main");

    add([
        rect(200, 10),
        color(255, 123, 11),
        origin("center"),
        pos(200, 160),
        scale(3)

    ])
    add([
        text("Hello Taslim", 12),
        pos(200, 115),
        color(1, 55, 22),

    ])

    add([
        text("Here's some smaller text.", 16),
        pos(200, 160),
        color(0, 0, 0),

    ])


})

start("main");