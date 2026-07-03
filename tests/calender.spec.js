const {test,expect}=require("@playwright/test")
test ("Calendar Validation",async({page})=>{

    const month="7"
    const day="15"
    const year="2026"
    const expectedValues=[month,day,year]
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers")
    // here the calendar opens up.select anywhere 
    await page.locator(".react-date-picker__inputGroup").click()
    //select top of the calender (July 2026),one click for month and another click for year selection
    //// Click twice to zoom out the calendar view: Days -> Months -> Years
    await page.locator(".react-calendar__navigation__label").click()
    //another click
    await page.locator(".react-calendar__navigation__label").click()
    //select year 2026
    await page.getByText(year).click()
    //select month,get firstly the common class for 12 months then filter your choice
    await page.locator(".react-calendar__year-view__months__month").nth(Number(month-1)).click()
    // choose day 15
    //basic xpath formula //tagname[@attribute='value']
    await page.locator("//abbr[text()='"+day+"']").click()
    //Assertions
    //One Common Locator:react-date-picker__inputGroup +tag:input,4 elements matching,three form date,one is hidden
    const inputs= await page.locator(".react-date-picker__inputGroup__input")
    //Create Array for Expected Values
    //Then,we simply need to assert Actual Values from HTML against our Expected Values
    for (let i=0;i<expectedValues.length;i++)
    {
        const actualValues=await inputs.nth(i).inputValue()
        expect(actualValues).toEqual(expectedValues[i])

    }







})