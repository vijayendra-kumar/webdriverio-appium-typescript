
// import { expect } from 'chai';
// //import HomePage from '../home.page';
// import ApiDemoPage from '../apidemo.page';
// import { log } from 'console';
// import { waitAndClick, getElementText } from '../utility.spec';
// import test from 'node:test';
// import allureReporter from '@wdio/allure-reporter';

// describe('Adroid Mobile Automation Element test', () => {

  

//   afterEach(async function () {
//     if (this.currentTest?.state === 'failed') {
//       const screenshot = await browser.takeScreenshot();

//       // Attach the screenshot to the Allure report
//       allureReporter.addAttachment(
//         'Screenshot on Failure', // attachment name
//         Buffer.from(screenshot, 'base64'), // convert base64 to buffer
//         'image/png' // mime type
//       );
//     }
//   });

//     it('Find Element By ClassName', async () => {
//         const ClassName = await $('android.widget.TextView');
//         console.log(ClassName.getText());
//         await expect(ClassName).equals('API Demos');
//     })

//     it('Find element by accessibility ID', async () => {
//         // find element by accessiblility id. 
//         const appOption = await $('~App');
//         // Click on Element.
//         await appOption.click();

//         const acctionbar = await $('~Action Bar');
//         // assertion       
//         await expect(acctionbar).to.be.exist;

//     });

// it('Find Elements by xpath',async () => {
// // xpath - (//tagname[@attribute=value])
//  const alert_dialog = await $('//android.widget.TextView[@content-desc="Alert Dialogs"]');
//       alert_dialog.click();
//  //find by resource_id. 
//  const sbutton = await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]');
//   sbutton.click();
//   //find element by text
//   const cmd2 = await $('//android.widget.TextView[@text="Command two"]');
//   cmd2.click();
//   //find by class
//   const texttovalidate = await $('android.widget.TextView');
//   await expect(texttovalidate).equals("You selected: 1 , Command two"); 
// });



// it('Verify after click on View, On next page scroll down by given dimension.', async () => {
//   // Wait for the 'Views' element to be present and visible
//   const appViews = await $('~Views');
//   await appViews.waitForDisplayed({ timeout: 5000 }); // Wait up to 5 seconds for the element to be visible

//   // Click on the 'Views' element
//   await appViews.click();

//   // Wait for the next page to load and be visible
//   await browser.pause(2000); // Wait 2 seconds for the page to load

//   // Perform the scroll action
//   await driver.action('pointer', {
//     parameters: { pointerType: 'touch' }
//   })
//     .move({ x: 500, y: 2500 }) // Start position at the bottom of the screen
//     .pause(1000)               // Pause for 1 second to make the initial touch visible
//     .down()                    // Touch down to start scrolling
//     .pause(1000)               // Hold the touch down for 1 second
//     .move({ origin: 'pointer', x: 0, y: -1778, duration: 2000 }) // Move upwards (scroll up) over 2 seconds
//     .pause(1000)               // Pause after the swipe to observe the scroll effect
//     .up()                      // Lift finger up to complete the scroll action
//     .perform();

//   // Optionally, wait after scrolling to see the result or verify changes
//   await browser.pause(2000); // Wait 2 seconds to observe the result of the scroll

//   // Further assertions or verifications can be added here
// });

// it('Verify that the text entry dilog username & password fields are editable.', async () => {
//     const appOption = await $('~App');
//     await appOption.waitForDisplayed({ timeout: 5000 }); // Wait up to 5 seconds for the element to be visible
//     // Click on Element.
//     await appOption.click();

//     const alert_dialog = await $('//android.widget.TextView[@content-desc="Alert Dialogs"]');
//     await alert_dialog.waitForDisplayed({ timeout: 5000 }); // Wait up to 5 seconds for the element to be visible
//       alert_dialog.click();

//       const textEntrydilog = await $('~Text Entry dialog');
//       await textEntrydilog.waitForDisplayed({ timeout: 5000 }); // Wait up to 5 seconds for the element to be visible
//       // Click on Element.
//       await textEntrydilog.click();

//       const usernamefield = await $('~io.appium.android.apis:id/username_edit');
//       await usernamefield.waitForDisplayed({ timeout: 5000 }); // Wait up to 5 seconds for the element to be visible
//       // Click on Element.
//       await usernamefield.setValue("Test User");
//       await usernamefield.clearValue();
//       await usernamefield.setValue("Actual User");

//       const passwordfield = await $('~io.appium.android.apis:id/username_edit');
//       await passwordfield.waitForDisplayed({ timeout: 5000 }); // Wait up to 5 seconds for the element to be visible
//       await passwordfield.setValue("Test@123");

//       const usrtext = usernamefield.getText();
//        await expect(usrtext).equals("Actual User"); 

//       const okbtn = await $('~io.appium.android.apis:id/username_edit');
//       await okbtn.waitForDisplayed({ timeout: 5000 }); // Wait up to 5 seconds for the element to be visible
//       okbtn.click();


// });

// it('Verify that the app adjust ,when orientation is switched.', async () => {
// console.log(driver.getOrientation);
// driver.setOrientation("LANDSCAPE");

// driver.saveScreenshot("./screenshots/landscape.png");

// const appOption = await $('~App');
// await appOption.waitForDisplayed({ timeout: 5000 }); // Wait up to 5 seconds for the element to be visible
// // Click on Element.
// await appOption.click();

// driver.setOrientation("PORTRAIT");
// driver.back();
// driver.saveScreenshot("./screenshots/portrait.png");
// });

// it('Verify timeout.', async () => {

// // driver.setTimeouts(10000);
//    driver.pause(10000);

//    const appOption = await $('~App');
// // await appOption.waitForDisplayed({ timeout: 5000 }); // Wait up to 5 seconds for the element to be visible
// // Click on Element.
// await appOption.click();
// });

// it('Verify the repeat alart option has attribute checked set to true ,when selected..', async () => {
//   // const appOption = await $('~App');
//   // await appOption.waitForDisplayed({ timeout: 5000 }); // Wait up to 5 seconds for the element to be visible
//   // // Click on Element.
//   // await appOption.click();
//      await waitAndClick('~App');
  

//   // const alert_dialog = await $('//android.widget.TextView[@content-desc="Alert Dialogs"]');
//   // await alert_dialog.waitForDisplayed({ timeout: 5000 }); // Wait up to 5 seconds for the element to be visible
//   //   alert_dialog.click();
//      await waitAndClick('//android.widget.TextView[@content-desc="Alert Dialogs"]');

//   // const repeatAlart = await $('~Repeat alarm');
//   // await repeatAlart.waitForDisplayed({ timeout: 5000 }); // Wait up to 5 seconds for the element to be visible
//   // // Click on Element.
//   // await repeatAlart.click();

//    await waitAndClick('~Repeat alarm');
  
    



//   // // Click on Element. checked
//   // Example usage
// (async () => {
//   try {
//       await ApiDemoPage.waitForAlertTitle();
//       console.log('Alert title is displayed.');
    
//   } catch (error) {
//       console.error('Error:', error);
//   }
// })();
//   // await weedayschk.click();
//   // await expect(weedayschk.getAttribute('checked')).equals('true');
//   let chkValue:string,chkattr,indx=0;

//       chkValue = await ApiDemoPage.weekDaysCheckBox(indx);
//       console.log("chkValue ....= "+chkValue);
//       await expect(chkValue).equals("Every Monday");
      
//       chkattr = await ApiDemoPage.weekDaysCheAttr(indx);
//        console.log("chkattr......= "+chkattr);
//       await expect(chkattr).equals("false");

//       await waitAndClick(`//android.widget.CheckedTextView[@index="${indx}"]`);

//       await expect(await ApiDemoPage.weekDaysCheAttr(indx)).equals("true");
// });
// it('Verify that whether Tab isenable,isDispalyed & isSelected.', async () => {

//   await waitAndClick('~Views');
//   await browser.pause(2000); // Wait 2 seconds for the page to load

//   // Perform the scroll action
//   await driver.action('pointer', {
//     parameters: { pointerType: 'touch' }
//   })
//     .move({ x: 500, y: 2500 }) // Start position at the bottom of the screen
//     .pause(1000)               // Pause for 1 second to make the initial touch visible
//     .down()                    // Touch down to start scrolling
//     .pause(1000)               // Hold the touch down for 1 second
//     .move({ origin: 'pointer', x: 0, y: -2500, duration: 2000 }) // Move upwards (scroll up) over 2 seconds
//     .pause(1000)               // Pause after the swipe to observe the scroll effect
//     .up()                      // Lift finger up to complete the scroll action
//     .perform();

//   // Optionally, wait after scrolling to see the result or verify changes
//   await browser.pause(2000); // Wait 2 seconds to observe the result of the scroll


//   await waitAndClick('~Tabs');
//   await waitAndClick('~1. Content By Id');
//   const tabs:ChainablePromiseArray = await $$('android.widget.LinearLayout');
//   let isEnabled:boolean,isDisplayed:boolean,isSelected:boolean;

//   for (let i = 0; i < Math.min(3, tabs.length); i++) {
//     const tab = tabs[i];
    
//     // Await promises to get properties
//     const isEnabled: boolean = await tab.isEnabled();
//     const isDisplayed: boolean = await tab.isDisplayed();
//     const isSelected: boolean = await tab.isSelected();

//     // Use the properties as needed
//     console.log(`Tab ${i+1}: Enabled=${isEnabled}, Displayed=${isDisplayed}, Selected=${isSelected}`);
//   } 
//    await waitAndClick('android.widget.TextView[@resource-id="android:id/title" and @text="TAB1"]');
//    await waitAndClick('android.widget.TextView[@resource-id="android:id/title" and @text="TAB2"]');
//    await waitAndClick('android.widget.TextView[@resource-id="android:id/title" and @text="TAB3"]');




// });
// }); //end describe 

