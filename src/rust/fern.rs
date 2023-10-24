use wasm_bindgen::prelude::*;
use tinyrand::{Rand, StdRand, Seeded};

#[derive(Clone, Copy)]
pub struct FernFunc {
    a: f32, b: f32, c: f32, d: f32, e: f32, f: f32,
    p: u16,
}

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
pub fn barnsley_fern_paint(
        data: &mut [u8], 
        w: usize, 
        h: usize, 
        seed: u32,
        f1a: f32, f1b: f32, f1c: f32, f1d: f32, f1e: f32, f1f: f32, f1p: u16,
        f2a: f32, f2b: f32, f2c: f32, f2d: f32, f2e: f32, f2f: f32, f2p: u16,
        f3a: f32, f3b: f32, f3c: f32, f3d: f32, f3e: f32, f3f: f32, f3p: u16,
        f4a: f32, f4b: f32, f4c: f32, f4d: f32, f4e: f32, f4f: f32, f4p: u16,
        min_x: f32, min_y: f32, max_x: f32, max_y: f32
    ) 
{
    let factor_x = 1.0 / (max_x - min_x);
    let factor_y = 1.0 / (max_y - min_y);
    let find_index = |point: &Point, w: usize, h: usize| -> usize {
        let x = (point.x - min_x) * factor_x;
        let y = 1.0 - (point.y - min_y) * factor_y;
        let col = (w as f32 * x) as usize;
        let row = (h as f32 * y) as usize;
        (row * w + col) * 4
    };
        
    let total_proba: u16 = f1p + f2p + f3p + f4p;
    let func1: FernFunc = FernFunc {
        a: f1a, b: f1b, c: f1c, d: f1d, e: f1e, f: f1f,
        p: rescale_probability(f1p, total_proba)
    };
    let func2: FernFunc = FernFunc {
        a: f2a, b: f2b, c: f2c, d: f2d, e: f2e, f: f2f,
        p: rescale_probability(f1p + f2p, total_proba)
    };
    let func3: FernFunc = FernFunc {
        a: f3a, b: f3b, c: f3c, d: f3d, e: f3e, f: f3f,
        p: rescale_probability(f1p + f2p + f3p, total_proba)
    };
    let func4: FernFunc = FernFunc {
        a: f4a, b: f4b, c: f4c, d: f4d, e: f4e, f: f4f,
        p: 0
    };   
    let mut loops = 1000000;
    let mut rand = StdRand::seed(seed as u64);
    let mut point= Point{ x: 0.0, y: 0.0 };
    unsafe {
        while loops > 0 {
            loops -= 1;
            let random = rand.next_u16();
            if random < func1.p { func1.compute(&mut point);}
            else if random < func2.p { func2.compute(&mut point);}
            else if random < func3.p { func3.compute(&mut point);}
            else { func4.compute(&mut point);}
            if point.x < min_x || point.x > max_x { continue; }
            if point.y < min_y || point.y > max_y { continue; }
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
            loops -= 9;
        }
    }
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

const fn rescale_probability(value: u16, total: u16) -> u16 {
    u16::MAX / total * value
}

