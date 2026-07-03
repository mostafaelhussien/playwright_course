# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: assignment.spec.js >> New Assignment
- Location: tests\assignment.spec.js:2:6

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Browse Events')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Browse Events')

```

```yaml
- text: RSA Rahul Shetty Academy eventhub.app
- img "EventHub app preview"
- list:
  - listitem: ⚡ Live REST APIs — test real endpoints, not mocks
  - listitem: 🔒 Isolated sandbox — your data, your tests, no conflicts
  - listitem: 🎫 Auth, CRUD, bookings — flows you'll face on the job
  - listitem: 🤖 Built for Selenium, Playwright, RestAssured & more
- paragraph: 50,000+
- paragraph: QA engineers trained worldwide
- 'heading "The #1 QA Practice Hub for Automation Engineers" [level=2]'
- paragraph: EventHub is a production-grade practice app designed so you can sharpen your testing skills on real-world scenarios — before your next interview or project.
- link "API Documentation (Swagger)":
  - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
  - img
  - text: API Documentation (Swagger)
- img
- heading "Sign in to EventHub" [level=1]
- paragraph: Enter your credentials to continue
- text: Email
- textbox "Email":
  - /placeholder: you@email.com
  - text: mostafaelhussien@gmail.com
- text: Password
- textbox "Password":
  - /placeholder: ••••••
  - text: Servicedesk@L9
- button "Sign In"
- paragraph:
  - text: Don't have an account?
  - link "Register":
    - /url: /register
- paragraph:
  - text: A practice environment by
  - link "RahulShettyAcademy.com":
    - /url: https://rahulshettyacademy.com
  - text: — used by QA engineers worldwide to master automation testing.
- alert
```

# Test source

```ts
  1  | const {test,expect}=require("@playwright/test")
  2  | test.only("New Assignment",async({page})=>{
  3  | const email=page.getByPlaceholder("you@email.com")
  4  | const password=page.getByLabel("Password")
  5  | const myEmail="mostafaelhussien@gmail.com"
  6  | const myPwd="Servicedesk@L9"
  7  | const signIn=await page.locator("#login-btn")
  8  | // بتعرف المتغير هنا في أول التست
  9  | const eventTitle = `Test Event ${Date.now()}`;
  10 | await page.goto("https://eventhub.rahulshettyacademy.com/login")
  11 | await email.fill(myEmail)
  12 | await password.fill(myPwd)
  13 | await signIn.click()
> 14 | await expect(page.getByText("Browse Events")).toBeVisible()
     |                                               ^ Error: expect(locator).toBeVisible() failed
  15 | await page.getByRole("button",{name:"Admin"}).click()
  16 | // Formula: tag[attribute="value"] -> Select anchor link (a) by its destination path (href)
  17 | await page.locator("a[href='/admin/events']").click()
  18 | await page.locator("#event-title-input").fill("Automation")
  19 | await page.getByPlaceholder("Describe the event…").fill("We are learning Playwright Concepts")
  20 | await page.getByLabel("City")
  21 | await page.getByLabel("Venue")
  22 | await page.getByLabel("Event Date & Time").fill(futureDateValue())
  23 | await page.getByLabel("Price ($)").fill(100)
  24 | await page.getByLabel("Total Seats").fill(500)
  25 | await page.locator("add-event-btn").click()
  26 | await expect(page.getByText('Event created!')).toBeVisible();
  27 | await page.locator("#nav-events").click()
  28 | await expect(page.getByTestId("event-card").first()).toBeVisible()
  29 | const myCard=await page.getByTestId("event-card").filter({hasText:eventTitle})
  30 | await expect(myCard).toBeVisible({timeout:5000})
  31 | const seatsBeforeBookingString=(await myCard.getByText("seat").textContent()).split(" ")[0]
  32 | const seatsBeforeBooking=Number(seatsBeforeBookingString)
  33 | 
  34 | 
  35 | 
  36 | 
  37 | 
  38 | 
  39 | 
  40 | 
  41 | 
  42 | 
  43 | })
```