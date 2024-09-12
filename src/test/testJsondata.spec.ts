// import { expect } from 'chai';
// import * as fs from 'fs';
// import * as path from 'path';

// // Load the JSON file
// const dataPath = path.join(process.cwd(), './data/testData.json');
// const testData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

// describe('Appium Test with Test Data Management', () => {
//   it.only('should login using test data', async () => {
//     const username = testData.user.username;
//     const username1: any = testData.user.username1;
//     const password = testData.user.password;

//     // Use the test data in your Appium/WebdriverIO commands
//    // it('Verify that the text entry dilog username & password fields are editable.', async () => {
//         const appOption = await $('~App');
//         await appOption.waitForDisplayed({ timeout: 5000 }); // Wait up to 5 seconds for the element to be visible
//         // Click on Element.
//         await appOption.click();
    
//         const alert_dialog = await $('//android.widget.TextView[@content-desc="Alert Dialogs"]');
//         await alert_dialog.waitForDisplayed({ timeout: 5000 }); // Wait up to 5 seconds for the element to be visible
//           alert_dialog.click();
    
//           const textEntrydilog = await $('~Text Entry dialog');
//           await textEntrydilog.waitForDisplayed({ timeout: 6000 }); // Wait up to 5 seconds for the element to be visible
//           // Click on Element.
//           await textEntrydilog.click();
    
//           const usernamefield = await $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/username_edit"]');
//           await usernamefield.waitForDisplayed({ timeout: 6000 }); // Wait up to 5 seconds for the element to be visible
//           // Click on Element. 
//          // await usernamefield.setValue("Test User");
//           await usernamefield.setValue(username1);
//           await usernamefield.clearValue();
//          // await usernamefield.setValue("Actual User");
//           await usernamefield.setValue(username);
          
//           const passwordfield = await $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/password_edit"]');
//           await passwordfield.waitForDisplayed({ timeout: 5000 }); // Wait up to 5 seconds for the element to be visible
//          // await passwordfield.setValue("Test@123");
//           await passwordfield.setValue(password);

//            const usernamefield1 = await $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/username_edit"]');
//           await usernamefield1.waitForDisplayed({ timeout: 6000 }); // Wait up to 5 seconds for the element to be visible
//            const usrtext = await  usernamefield1.getText();
//            console.log("usrtext$$$$$$$$$$$$$ "+usrtext);
//            await expect(usrtext).equals(username); 
    
//           const okbtn = await $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/username_edit"]');
//           await okbtn.waitForDisplayed({ timeout: 5000 }); // Wait up to 5 seconds for the element to be visible
//           okbtn.click();
    
    
//    // });
//     // Verify login success (assuming a welcome message is shown)
//    // const welcomeMessage = await $('div#welcome');
//     //expect(await welcomeMessage.getText()).to.contain('Welcome');
//   });
// });
