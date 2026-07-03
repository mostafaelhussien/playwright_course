const {test,expect}=require("@playwright/test");

test("Client App Testing",async({browser})=>{
    const context=await browser.newContext();
    const page = await context.newPage();
    const email=page.getByPlaceholder("email@example.com");
    const myMail="mostafaelhussien@gmail.com";
    const password=page.getByPlaceholder("enter your passsword");
    const login=page.getByRole("button",{name:"Login"});
    const cardTitles=page.locator(".card-body b");
    const products=page.locator(".card-body");
    const productName="ZARA COAT 3";


    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await email.fill(myMail);
    await password.fill("Servicedesk@L9");
    await login.click();
    
    await page.waitForLoadState("networkidle");
    await cardTitles.first().waitFor();
    
    const allTitles2=await cardTitles.allTextContents();
    console.log(allTitles2);

    await products.filter({hasText:"ZARA COAT 3"}).getByRole("button",{name:"Add To Cart"}).click()
    await page.getByRole("listitem").getByRole("button",{name:"Cart"}).click()
    await page.locator("div li").first().waitFor();
    await expect(page.getByText("ZARA COAT 3")).toBeVisible()
    await page.getByRole("button",{name:"Checkout"}).click();
    await page.getByPlaceholder("Select Country").pressSequentially("eg",{delay:100})
    await page.getByRole("button",{name:"Egypt"}).click(); 
    //place order
    await page.getByText("PLACE ORDER").click(); 
    //verify that u see msg Thank you for your Order
    await expect(page.getByText("Thankyou for the order.")).toBeVisible(); 
    const orderIdUnedited=await page.locator(".em-spacer-1 .ng-star-inserted").textContent()
    const orderIdedited=orderIdUnedited.split("|")[1].trim()
    await page.getByRole("button",{name:"ORDERS"}).click()
    await page.locator("tbody").waitFor()
    await page.locator("tbody tr").filter({hasText:orderIdedited}).getByRole("button",{name:"View"}).click()
    







    
    })
    
