
class ApiDemoPage {

    

    async weekDaysCheckBox(index: number): Promise<ChainablePromiseElement> {
        // Use backticks for template literals
        const checkboxdays = await $(`//android.widget.CheckedTextView[@index="${index}"]`);
        await checkboxdays.waitForDisplayed({ timeout: 5000 }); // Wait up to 5 seconds for the element to be visible
        // Return the WebdriverIO element directly
       // return await $(`//android.widget.CheckedTextView[@index="${index}"]`);
       return  checkboxdays.getText();
    }

    async weekDaysCheAttr(index: number): Promise<ChainablePromiseElement>{
        // Use backticks for template literals
        const checkboxattr = await $(`//android.widget.CheckedTextView[@index="${index}"]`);
        await checkboxattr.waitForDisplayed({ timeout: 5000 }); // Wait up to 5 seconds for the element to be visible
        // Return the WebdriverIO element directly
       // return await $(`//android.widget.CheckedTextView[@index="${index}"]`);
       return  checkboxattr.getAttribute('checked');
    }
    
    async  waitForAlertTitle(): Promise<void> {
        // Define the selector for the alert title
        const alertTitleSelector = '~android:id/alertTitle';
    
        // Define a timeout duration (in milliseconds)
        const timeout = 10000;
    
        // Wait until the element is displayed
        await browser.waitUntil(
            async () => {
                const alertTitleElement = await $(alertTitleSelector);
                return alertTitleElement.isDisplayed(); // Condition to check if the element is displayed
            },
            {
                timeout: timeout, // Maximum wait time
                timeoutMsg: `Expected alert title element to be displayed after ${timeout / 1000}s` // Error message if timeout is reached
            }
        );
    }
    
    
    
    
   
   // const weedayschk = await $('//android.widget.CheckedTextView[@index=0]');

}
export default new ApiDemoPage();