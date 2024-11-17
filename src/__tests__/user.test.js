import { username, city, image } from "../data/user";

test("username, city, and image are all exported", () => {
  console.log({ username, city, image }); 

  expect(username).toEqual("Liza");
  expect(city).toEqual("New York");
  expect(image).toEqual("https://i.imgur.com/mV8PQxj.gif");
});
