import { Selector } from 'testcafe'

fixture `Open home page`
  .page`http://localhost`

test('Nudjee can signup for updates', async t => {
  await t
  .click(Selector('#signUp'))
  .typeText(Selector('#first_name'), 'Jamie')
  .typeText(Selector('#last_name'), 'Testing')
  .typeText(Selector('#email'), 'jamie+testing@nudj.co')
  .typeText(Selector('#job_title'), 'nudj')
  .click(Selector('input[type=radio]'))
  .click(Selector('input[type=submit]'))

  const location = await t.eval(() => window.location)

  await t.expect(location.pathname).contains('/')
    .takeScreenshot('./signup-sent.png')
})

fixture `Open hire page`
  .page`http://localhost/hiring`

test('Hirer can request access to beta', async t => {
  await t
  .click(Selector('#requestAccess'))
  .typeText(Selector('#first_name'), 'Jamie')
  .typeText(Selector('#last_name'), 'Testing')
  .typeText(Selector('#email'), 'jamie+testing@nudj.co')
  .typeText(Selector('#company_name'), 'Testing')
  .click(Selector('input[type=submit]'))

  const location = await t.eval(() => window.location)

  await t.expect(location.pathname).contains('/request')
    .takeScreenshot('./request-sent.png')
})

fixture `Open job page`
  .page`http://localhost/jobs/fake-company+senior-fake-test-job`

const email = Selector('input[name="email"]')
const password = Selector('input[name="password"]')
const shareButton = Selector('#nudjButton')
const applyButton = Selector('#applyButton')
const loginTab = Selector('a').withText('Log In')
const loginButton = Selector('button[type=submit]')

test('Nudjee can view more info', async t => {
  await t
    .click(Selector('#toggleInformation'))
    .click(Selector('#toggleInformation'))
})

test('Nudjee can nudj', async t => {
  await t
  .click(shareButton)
  // .click(loginTab)
  // .typeText(email, 'jamie+testing@nudj.co')
  // .typeText(password, 'Password')
  // .click(loginButton)

  const location = await t.eval(() => window.location)

  await t.expect(location.pathname).contains('/nudj')
  .takeScreenshot('./nudj-page-desktop.png')

  .resizeWindow(375, 677)
  .expect(Selector('#facebook').exists).ok()
  .expect(Selector('#whatsapp').exists).ok()
  .expect(Selector('#copy').exists).ok()
  .takeScreenshot('./nudj-page-mobile.png')
})

test('Nudjee can apply', async t => {
  await t
  .resizeWindow(1440, 1024)
  .click(applyButton)
  // .click(loginTab)
  // .typeText(email, 'jamie+testing@nudj.co')
  // .typeText(password, 'Password')
  // .click(loginButton)

  const location = await t.eval(() => window.location)

  await t.expect(location.pathname).contains('/apply')
  .takeScreenshot('./apply-page.png')
})
