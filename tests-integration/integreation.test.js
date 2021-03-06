test("should render async chunks for default lang", async done => {
  await page.goto("http://localhost:4444/index.html");
  const content = await page.content();
  expect(content).toContain("<h2>module 1 ready</h2>");
  expect(content).toContain("<h2>module 2 ready</h2>");
  done();
});

test("should render vendor chunks", async done => {
  await page.goto("http://localhost:4444/index.html");
  const content = await page.content();
  expect(content).toContain("<h2>vendor1</h2>");
  expect(content).toContain("<h2>vendor2</h2>");
  done();
});

test("should render localized vendor chunks", async done => {
  await page.goto("http://localhost:4444/uk.html");
  const content = await page.content();
  expect(content).toContain("<h2>вендор1</h2>");
  expect(content).toContain("<h2>вендор2</h2>");
  done();
});

test("should render async chunks for default localized bundle", async done => {
  await page.goto("http://localhost:4444/uk.html");
  const content = await page.content();
  expect(content).toContain("<h2>модуль 1 готовий</h2>");
  expect(content).toContain("<h2>модуль 2 готовий</h2>");
  done();
});
