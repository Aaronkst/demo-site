import { defaultMail } from "./mail";

test("mail", async () => {
  const data = await defaultMail();
  console.log(data);
  expect(data).toBeDefined();
}, 20000);
