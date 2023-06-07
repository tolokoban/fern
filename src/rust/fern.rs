use wasm_bindgen::prelude::*;
use tinyrand::{Rand, StdRand, Seeded};

// Bounds of the fern.
const MIN_X: f32 = -2.1820;
const MAX_X: f32 = 2.6568;
const MIN_Y: f32 = -0.0001;
const MAX_Y: f32 = 9.9983;

const FUNC1: FernFunc = FernFunc {
    a: 0.00, b: 0.00, c: 0.00, d: 0.16, e: 0.00, f: 0.00,
    p: rescale_probability(1)
};

const FUNC2: FernFunc = FernFunc {
    a: 0.85, b: 0.04, c: -0.04, d: 0.85, e: 0.00, f: 1.60,
    p: rescale_probability(85)
};

const FUNC3: FernFunc = FernFunc {
    a: 0.20, b: -0.26, c: 0.23, d: 0.22, e: 0.00, f: 1.60,
    p: rescale_probability(7)
};

const FUNC4: FernFunc = FernFunc {
    a: -0.15, b: 0.28, c: 0.26, d: 0.24, e: 0.00, f: 0.44,
    p: rescale_probability(7)
};

#[wasm_bindgen]
/**
 * Call this function several times to refine
 * the resulting image.
 * 
 * @param data Array of pixels (RGBA).
 * @param w Width of the canvas.
 * @param h Height of the canvas.
 * @param seed Seed for the pseudo random numbers generator.
 */
pub fn barnsley_fern_paint(data: &mut [u8], w: usize, h: usize, seed: u32) {
    let mut loops = 100000;
    let mut rand = StdRand::seed(seed as u64);
    let mut point= Point{ x: 0.0, y: 0.0 };
    unsafe {
        while loops > 0 {
            let func = get_func(&mut rand);
            func.compute(&mut point);
            let index = find_index(&point, w, h);
            let red = data.get_unchecked_mut(index + 0);
            if *red < 255 { *red += 1; }
            let green = data.get_unchecked_mut(index + 1);
            if *green < 254 { *green += 2; }
            let blue = data.get_unchecked_mut(index + 2);
            if *blue < 255 { *blue += 1; }
            let index2 = data.len() - index;
            let red = data.get_unchecked_mut(index2 + 0);
            if *red < 254 { *red += 2; }
            let green = data.get_unchecked_mut(index2 + 1);
            if *green < 255 { *green += 1; }
            let blue = data.get_unchecked_mut(index2 + 2);
            if *blue < 255 { *blue += 1; }
            loops -= 1;
        }
    }
}

#[derive(Clone, Copy)]
struct FernFunc {
    a: f32, b: f32, c: f32, d: f32, e: f32, f: f32,
    p: u16,
}

#[derive(Clone, Copy)]
struct Point { x: f32, y: f32, }

impl FernFunc {
    fn compute(&self, point: &mut Point) {
        let x = point.x;
        let y = point.y;
    point.x = self.a * x + self.b * y + self.e;
    point.y = self.c * x + self.d * y + self.f;
    }
}

const fn rescale_probability(value: u16) -> u16 {
    u16::MAX / 100 * value
}

fn clamp(value: f32, min: f32, max: f32) -> f32 {
    if value < min { return min }
    if value > max { return max }
    value
}

fn find_index(point: &Point, w: usize, h: usize) -> usize {
    let x = (clamp(point.x, MIN_X, MAX_X) - MIN_X) / (2.0 * (MAX_X - MIN_X));
    let y = 1.0 - (clamp(point.y, MIN_Y, MAX_Y) - MIN_Y) / (MAX_Y - MIN_Y);
    let col = (w as f32 * x) as usize;
    let row = (h as f32 * y) as usize;
    (row * w + col) * 4
}

fn get_func(rand: &mut StdRand) -> &FernFunc {
    let mut percent: u16 = 0;
    let random = rand.next_u16();
    percent += FUNC2.p;
    if random <= percent { return &FUNC2; }
    percent += FUNC3.p;
    if random <= percent { return &FUNC3; }
    percent += FUNC4.p;
    if random <= percent { return &FUNC4; }
    &FUNC1
}

