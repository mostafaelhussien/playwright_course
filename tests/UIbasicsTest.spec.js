const {test,expect}=require("@playwright/test") //Go to Supermarket playwright/test and buy {test} only
test("Browser Context Playwright Test",async({browser})=>{
    //await+Actions will be written here
    //async outside function,await inside
    //it's an arrow function consisting 
    //chrome--plugins//cookies
    const context=await browser.newContext()
    const page = await context.newPage()
    // Instead of repeating locator more and more in code:
    const userName=page.locator("#username")
    const signIn=page.locator('#signInBtn')
    const cardTitles=page.locator(".card-body a")
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    // واللوكيتور هو طيار الديليفري اللي بيوصل على العنوان ده عشان يسلمك الأكل
    await userName.fill("rahulshetty")
    await page.locator('input[name="password"]').fill("Learning@830$3mK2")
    await signIn.click()
    //extract error message
    console.log(await page.locator("[style*='display: block']").textContent())
    //make sure that error msg is correctly displayed with assertion
    await expect (page.locator("[style*='display: block']")).toContainText("Incorrect")
    //wipe existing content
    await userName.fill("")
    await userName.fill("rahulshettyacademy")
    await signIn.click()
    console.log(await cardTitles.nth(0).textContent())
    //or
    //console.log(await page.locator(".card-body a").first().textContent())
    //before nth(0),playwright did not know which element to return,therefore it's failed,we have 4 elements
    //grab all the Titles on Page
    const allTitles=await cardTitles.allTextContents()
    console.log(allTitles) //[ 'iphone X', 'Samsung Note 8', 'Nokia Edge', 'Blackberry' ]
    // put assertion that all Items are present





})

test("UI Controls",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const userName=page.locator("#username")
    const signIn=page.locator('#signInBtn')
    const documentsLink=page.locator("[href*='documents-request']")
    //static dropdown
    const dropDown=page.locator("select.form-control")
    await dropDown.selectOption("consult")
// ⏸️ 'await page.pause()' freezes the browser and opens Inspector so you can check your steps.
    //await page.pause() 
    await page.locator(".radiotextsty").last().click() //last:User
    // 🔘 THE GOLDEN RULE FOR HIDDEN INPUTS & CUSTOM RADIOS:
// 1. WHY THIS CLASS? The real <input> is hidden by CSS for styling, so clicking it directly fails.
// 2. HOW WE KNOW IT'S VISIBLE: The <span> with '.radiotextsty' holds the actual "User" text seen on screen.
// 3. THE PLAYWRIGHT WAY: Always target the visible text/label layer so Playwright can successfully click it.
//Popup appears,click okay
await page.locator("#okayBtn").click()
//assertion:after you click okay in the popup,User Choice is accepted
await expect(page.locator(".radiotextsty").last()).toBeChecked()
//or
console.log(await page.locator(".radiotextsty").last().isChecked())
//then we go to check box:I agree......
await page.locator("#terms").click()
await expect(page.locator("#terms")).toBeChecked()
await page.locator("#terms").uncheck()
expect(await page.locator("#terms").isChecked()).toBeFalsy() 
//check blinking text
//from Playwright documentation
//  await expect(locator).toHaveAttribute('attribute name', 'attribute value');
await expect(documentsLink).toHaveAttribute("class","blinkingText")
// link is opening another tab 
//need to create another test
//In next lecture, make sure to change line-80
//Instead of textContent() use inputValue()
//console.log(await page.locator("#username").inputValue());
})

test("Child Windows Handling",async({browser})=>{
    const context=await browser.newContext()
    const page = await context.newPage()
    // 🌐 Why browser & context? We need a direct reference to the 'context' object
// 🕵️‍♂️ so we can use context.waitForEvent('page') to listen for any newly opened tabs.
    const userName=page.locator("#username")
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const documentsLink=page.locator("[href*='documents-request']")
    const[newPage]=await Promise.all([
    context.waitForEvent("page"), //listening for any new page ,pending-rejected-fulfilled
    documentsLink.click(),])//new page is opening
    //wait for opening of new page
    // 📢 NOTE: 'page' inside quotes is a fixed Playwright event name; it has NO connection to your variable name.
    //The event is emitted when a new Page is created in the BrowserContext. The page may still be loading.
    //There is no point to listen for new page after it's already opened !
    //we should listen before opening
    //now there is another issue:
    // ⚙️ Mechanism WITHOUT Promise.all():
// 1. context.waitForEvent('page') triggers -> returns a PENDING promise (listening in background).
// 2. JavaScript DOES NOT wait; it instantly moves to the next line.
// 3. documentsLink.click() triggers -> returns another PENDING promise (browser starts opening the tab).
// 4. JavaScript reaches the end of the file and closes the test while the listener is STILL PENDING.
// ⚡ Mechanism WITH Promise.all():
// It wraps both PENDING promises (the listener and the click) to run in parallel.
// JavaScript waits here until BOTH promises transition from PENDING to FULFILLED together!

const text=await newPage.locator(".red").textContent()
const arrayText=text.split("@")
const domain=arrayText[1].split(" ")[0] //get only rahulshettyacademy.com
console.log(domain)
await page.locator("#username").type(domain)
//await page.pause()
console.log(await page.locator("#username").inputValue());
})











