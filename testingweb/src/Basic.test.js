//Testing Library 
function rectangleArea(width, height) {
    if (width <= 0 || height <= 0) {
        return 0;
    }
    return width * height;
}

//เคสปกติ
test('Normal rectangle area, width > 0 and height > 0', () => {
    const rect1 = rectangleArea(8, 6); //เรียกใช้ Function
    expect(rect1).toBe(48); //expect(ค่าที่ต้องการเช็ค).tobe(ค่าผลลัพธ์ของค่าที่ต้องการเช็ค)
});

test('Zero rectangle area, width <= 0 or height <= 0', () => {
    const rect1 = rectangleArea(-4, 6); //เคส  width <= 0
    expect(rect1).toBe(0);

    const rect2 = rectangleArea(4, -6); //เคส  height <= 0
    expect(rect2).toBe(0);

    const rect3 = rectangleArea(-4, -6); //เคส width <= 0 and height <= 0'
    expect(rect3).toBe(0);
});