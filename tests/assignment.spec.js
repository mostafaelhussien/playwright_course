const {test,expect}=require("@playwright/test")
test.only("New Assignment",async({page})=>{
const email=page.getByPlaceholder("you@email.com")
const password=page.getByLabel("Password")
const myEmail="mostafaelhussien@gmail.com"
const myPwd="Servicedesk@L9"
const signIn=await page.locator("#login-btn")
// بتعرف المتغير هنا في أول التست
const eventTitle = `Test Event ${Date.now()}`;
await page.goto("https://eventhub.rahulshettyacademy.com/login")
await email.fill(myEmail)
await password.fill(myPwd)
await signIn.click()
await expect(page.getByText("Browse Events")).toBeVisible()
await page.getByRole("button",{name:"Admin"}).click()
// Formula: tag[attribute="value"] -> Select anchor link (a) by its destination path (href)
await page.locator("a[href='/admin/events']").click()
await page.locator("#event-title-input").fill("Automation")
await page.getByPlaceholder("Describe the event…").fill("We are learning Playwright Concepts")
await page.getByLabel("City")
await page.getByLabel("Venue")
await page.getByLabel("Event Date & Time").fill(futureDateValue())
await page.getByLabel("Price ($)").fill(100)
await page.getByLabel("Total Seats").fill(500)
await page.locator("add-event-btn").click()
await expect(page.getByText('Event created!')).toBeVisible();
await page.locator("#nav-events").click()
await expect(page.getByTestId("event-card").first()).toBeVisible()
const myCard=await page.getByTestId("event-card").filter({hasText:eventTitle})
await expect(myCard).toBeVisible({timeout:5000})
const seatsBeforeBookingString=(await myCard.getByText("seat").textContent()).split(" ")[0]
const seatsBeforeBooking=Number(seatsBeforeBookingString)
await page.locator("#book-now-btn").click()
await expect(page.locator("#ticket-count")).toHaveText("1")
await page.getByLabel("Full Name").fill("Mostafa Elhusseiny")
await page.locator("#customer-email").fill(myEmail)
await page.getByPlaceholder("+91 98765 43210").fill("01012345678")
await page.locator(".confirm-booking-btn").click()












})