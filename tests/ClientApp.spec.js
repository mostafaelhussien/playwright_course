const {test,expect}=require("@playwright/test") //Go to Supermarket playwright/test and buy {test} only
test("Client App Testing",async({browser})=>{
    const context=await browser.newContext()
    const page = await context.newPage()
    const email=page.locator("#userEmail")
    const myMail="mostafaelhussien@gmail.com"
    const password=page.locator("#userPassword")
    const login=page.locator("#login")
    const cardTitles=page.locator(".card-body b")
    // 📦 Define the Parent Container: This captures all 8 product boxes on the screen.
    const products=page.locator(".card-body")
    const productName="ZARA COAT 3"
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await email.fill(myMail)
    await password.fill("Servicedesk@L9")
    await login.click()
    //1st Wait Mechanism:wait until network comes to idle state(with no more work left),once all Network Calls are successfully done 
    await page.waitForLoadState("networkidle")
    //However,this step is flaky,that's why we have 2nd Mecahnism:
    await cardTitles.first().waitFor()
    // 🎯 Fix 2 (Best Practice): Wait specifically for the first item to load before grabbing the whole array.
    //console.log(await cardTitles.nth(0).textContent())
    //await expect(cardTitles.nth(0)).toContainText("ADIDAS")
    const allTitles2=await cardTitles.allTextContents()
    console.log(allTitles2)

    // Get how many products are currently displayed on the page
    const count=await products.count()
    for (let i=0;i<count;i++)
    {
    // STEP A: Chain to read the title inside the current box (i)
       if(await products.nth(i).locator("b").textContent()===productName)
       {
        // add to cart
        // STEP B: Chain to click the correct button inside the same matched box (i)
        await products.nth(i).locator("text=Add To Cart").click()
        break
       }
    }
    await page.locator("[routerlink*='cart']").click()
    //Products won't show up immediately in my Cart,it takes some time till they will be visible in Cart page
    //playwright will check my cart very quickly,in the first second it won't find products as they are still loading
    await page.locator("div li").first().waitFor()
    //"div li" translates to: "Find all <li> tags that live inside a <div> tag."
    //first:wait until first item is loaded
    //if this loads,then you are ready to check for visibility of ur item 
    // 🎯 PLAYWRIGHT FORMULA: DYNAMIC TEXT LOCATOR WITH VARIABLES
  //THE GENERAL FORMULA:
  // await page.locator(`tagName:has-text("${variableName}")`)
    const prodAdded= await page.locator(`h3:has-text("${productName}")`).isVisible()
    //isVisible() is not supported for Auto-wait in Playwright 
    //assertion
    expect(prodAdded).toBeTruthy() // فحص فوري للمتغير، لا يحتاج await
    //checkout:
    await page.locator("text=Checkout").click()
    //shipping info , search for Egypt with eg
    await page.locator("[placeholder*='Country']").pressSequentially("eg",{delay:100})
    //Egypt appears as second choice in dynamic dropdown
    const dropDown=page.locator(".ta-results")
    //wait till dropDown appears with search results
    await dropDown.waitFor()
    //locator chaining from class ta-results to tag button,there are 3 buttons
    const optionsCount=await dropDown.locator("button").count()
    for(let i =0;i<optionsCount;i++){
        const searchResults=await dropDown.locator("button").nth(i).textContent()
        if (searchResults.trim()===("Egypt"))
        {
            await dropDown.locator("button").nth(i).click()
            break
        }
    }
    //validate Email Address
    await expect(page.locator(".user__name [type='text']").first()).toHaveText(myMail)
    //place order
    await page.locator(".action__submit").click()
    //verify that u see msg Thank you for your Order
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ")
    //print order id
    const orderId=await page.locator(".em-spacer-1 .ng-star-inserted").textContent()
    console.log(orderId)
    //go to orders 
    await page.locator("button[routerlink*='myorders']").click();
    //wait till orders page is loaded
    await page.locator("tbody").waitFor()
    //check rows 
    const rows=page.locator("tbody tr")
    // count rows
    const rowsCount=await rows.count()
    for(let i =0;i<rowsCount;i++)
    {
        const myOrderId=await rows.nth(i).locator("th").textContent()
        if(orderId.includes(myOrderId))
        {
            console.log("Order Found")
            await rows.nth(i).locator("button").first().click()
            break
        }
    }
    //verify order id correctance in view page
    const orderDetails=await page.locator(".col-text").textContent()
    expect(orderId.includes(orderDetails)).toBeTruthy()

})
