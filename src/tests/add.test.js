const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}`;

//test case
test("should add two numbers", () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test("should generate greeting", () => {
  expect(generateGreeting("Andrew")).toBe("Hello Andrew");
});