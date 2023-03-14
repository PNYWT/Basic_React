import { fireEvent, render, screen } from '@testing-library/react';
import BoxInput from './BoxInput';

test('Box input first appearance is correct', () => {
    render(<BoxInput />); //ดึง component BoxInput มาใช้ทดสอบ
 
    const weightInput = screen.getByPlaceholderText(/น้ำหนัก/i); //getByPlaceholderText ที่มีคำว่า "น้ำหนัก"
    expect(weightInput).toBeInTheDocument(); //เช็คว่ามีคำว่า "น้ำหนัก" อยู่ที่หน้าจอจริงไหม

    const heightInput = screen.getByPlaceholderText(/ส่วนสูง/i); //getByPlaceholderText ที่มีคำว่า "ส่วนสูง"
    expect(heightInput).toBeInTheDocument(); //เช็คว่ามีคำว่า "ส่วนสูง" อยู่ที่หน้าจอจริงไหม

    const calculateButton = screen.getByText(/คำนวณ BMI/i); //getByText ที่มีคำว่า "คำนวณ BMI"
    expect(calculateButton).toBeInTheDocument(); //เช็คว่ามีคำว่า "คำนวณ BMI" อยู่ที่หน้าจอจริงไหม
});

test('Box input show error if calculate empty values', () => {
    //ดึง component BoxInput มาใช้ทดสอบ พร้อมกำหนด props onCalculateBmi เหมือน onCalculateBmi={setBmi} ที่ App.js
    render(<BoxInput onCalculateBmi={() => {}} />); 

    const calculateButton = screen.getByText(/คำนวณ BMI/i); //getByText ที่มีคำว่า "คำนวณ BMI"
    fireEvent.click(calculateButton); //ทดลอง กดปุ่มที่มีคำว่า "คำนวณ BMI"

    const errorP = screen.getByText(/กรุณาใส่ข้อมูลให้ครบถ้วน/i); //getByText ที่มีคำว่า "กรุณาใส่ข้อมูลให้ครบถ้วน"
    expect(errorP).toBeInTheDocument();  //เช็คว่ามีคำว่า "กรุณาใส่ข้อมูลให้ครบถ้วน" อยู่ที่หน้าจอจริงไหม
});

test('Box input not show error if calculate valid values', () => {
    //ดึง component BoxInput มาใช้ทดสอบ พร้อมกำหนด props onCalculateBmi เหมือน onCalculateBmi={setBmi} ที่ App.js
    render(<BoxInput onCalculateBmi={() => {}} />);

    const weightInput = screen.getByPlaceholderText(/น้ำหนัก/i);
    fireEvent.change(weightInput, { target: { value: '70' } }); //ทดสอบเปลี่ยนค่า weightInput ให้เป็นค่าจำลอง 70
    expect(weightInput.value).toBe('70'); //กำหนดให้มีค่า 70

    const heightInput = screen.getByPlaceholderText(/ส่วนสูง/i);
    fireEvent.change(heightInput, { target: { value: '180' } }); //ทดสอบเปลี่ยนค่า heightInput ให้เป็นค่าจำลอง 180
    expect(heightInput.value).toBe('180'); //กำหนดให้มีค่า 180

    const calculateButton = screen.getByText(/คำนวณ BMI/i); //regex ค้นหาคำ ที่มีคำว่า "คำนวณ BMI"
    fireEvent.click(calculateButton); //ทดลอง กดปุ่มที่มีคำว่า "คำนวณ BMI"

    //queryByText ที่มีคำว่า "กรุณาใส่ข้อมูลให้ครบถ้วน" เจอหรือไม่เจอก็ไม่เป็นไร ต่างกับ getByPlaceholderText ที่จำเป็นต้องเจอค่าบนจอ
    const errorP = screen.queryByText(/กรุณาใส่ข้อมูลให้ครบถ้วน/i); 
    expect(errorP).not.toBeInTheDocument(); //
});