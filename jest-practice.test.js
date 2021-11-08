import capitalize from "./capitalize-first-character";
import reverseString from "./reverse-string";
import calculate from "./calculator";
import caesar from "./caesar-cipher";
import analyzeArray from "./array-analysis";

test("first character capitalized", () => {
    expect(capitalize("lovely")).toBe("Lovely");
});

test("reverse string", () => {
    expect(reverseString("lovely")).toBe("ylevol");
});

test("calculator", () => {
    expect(calculate(20, "*", 9)).toBe(180);
});

test("caesar cipher", () => {
    expect(caesar("lovely", 1)).toBe("mpwfmz");
});

test("array analysis", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toMatchObject({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
})