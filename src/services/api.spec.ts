import { mockTest } from "./api";

test("api", async () => {
  const data = await mockTest();
  expect(data).toBeTruthy();
});
