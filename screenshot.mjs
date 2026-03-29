import puppeteer from 'puppeteer';

const URL = 'http://localhost:5199';
const dir = '/Users/v.nikonov/Documents/GitHub/chipo/screenshots';

async function run() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 2 });

  // 1. Start Screen
  await page.goto(URL, { waitUntil: 'networkidle0' });
  await page.waitForSelector('button');
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: `${dir}/01-start.png` });
  console.log('1. Start screen captured');

  // 2. Click "Start Game!" -> Profile Select
  await page.click('button');
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: `${dir}/02-profile-select.png` });
  console.log('2. Profile select captured');

  // 3. Click "+ New Player" and fill form
  const buttons = await page.$$('button');
  for (const btn of buttons) {
    const text = await btn.evaluate(el => el.textContent);
    if (text?.includes('New Player')) {
      await btn.click();
      break;
    }
  }
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: `${dir}/03-new-player.png` });
  console.log('3. New player form captured');

  // 4. Fill in name and age, select avatar
  const avatarButtons = await page.$$('button');
  for (const btn of avatarButtons) {
    const text = await btn.evaluate(el => el.textContent?.trim());
    if (text === '🦄') {
      await btn.click();
      break;
    }
  }

  const inputs = await page.$$('input');
  await inputs[0].type('Alex');
  await inputs[1].type('7');
  await new Promise(r => setTimeout(r, 300));
  await page.screenshot({ path: `${dir}/04-profile-filled.png` });
  console.log('4. Profile filled captured');

  // 5. Click "Let's Go!" -> World Map
  const goButtons = await page.$$('button');
  for (const btn of goButtons) {
    const text = await btn.evaluate(el => el.textContent);
    if (text?.includes("Let's Go")) {
      await btn.click();
      break;
    }
  }
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: `${dir}/05-world-map.png` });
  console.log('5. World map captured');

  // 6. Click first level -> Keyboard Lesson
  const levelBtns = await page.$$('button');
  for (const btn of levelBtns) {
    const text = await btn.evaluate(el => el.textContent);
    if (text?.includes('Meet the Keyboard') || text?.includes('1')) {
      await btn.click();
      break;
    }
  }
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: `${dir}/06-keyboard-lesson.png` });
  console.log('6. Keyboard lesson captured');

  await browser.close();
  console.log('Done!');
}

run().catch(e => { console.error(e); process.exit(1); });
