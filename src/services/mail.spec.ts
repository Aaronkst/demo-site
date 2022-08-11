import { defaultMail } from "./mail";

test("mail", async () => {
  const data = await defaultMail(["aaron.kst99@gmail.com"]);
  console.log(data);
  expect(data).toBeDefined();
}, 20000);
