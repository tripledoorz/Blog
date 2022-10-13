interface ClockInterface {
    currentTime: number;
    alert(): void
}

interface GameInterface {
    play(): void;
}

class Clock implements ClockInterface {
    currentTime: number = 123;
    alert() {

    }
}
class CellPhone implements ClockInterface, GameInterface {
    currentTime: number = 123;
    alert() {

    }
    play(): void {

    }
}


// 构造函数约束
interface ClockStatic {
    new(x: number, y: number): void;
    time: number
}

const clock: ClockStatic = class Clocks implements ClockInterface {
    constructor(h: number, m: number) {

    }
    static time = 12
    currentTime: number = 123;
    alert() {

    }
}