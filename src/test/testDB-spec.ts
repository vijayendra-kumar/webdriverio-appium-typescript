import { expect } from 'chai';
import { getUserData } from '../selectData';

describe('Appium Test with DB Data', () => {
    it.only('should login using database data', async () => {
        // Fetch user data from the database
        const userData = await getUserData('Actual User');

        const appOption = await $('~App');
        await appOption.waitForDisplayed({ timeout: 5000 }); // Wait up to 5 seconds for the element to be visible
        // Click on Element.
        await appOption.click();
    
        const alert_dialog = await $('//android.widget.TextView[@content-desc="Alert Dialogs"]');
        await alert_dialog.waitForDisplayed({ timeout: 5000 }); // Wait up to 5 seconds for the element to be visible
          alert_dialog.click();
    
          const textEntrydilog = await $('~Text Entry dialog');
          await textEntrydilog.waitForDisplayed({ timeout: 6000 }); // Wait up to 5 seconds for the element to be visible
          // Click on Element.
          await textEntrydilog.click();
    
        // Use the data in your WebdriverIO test
        const usernameField = await $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/username_edit"]');
        await usernameField.waitForDisplayed({ timeout: 6000 });
        await usernameField.setValue(userData.username);

        const passwordField = await $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/password_edit"]');
        await passwordField.waitForDisplayed({ timeout: 6000 });
        await passwordField.setValue(userData.password);

        // Continue with the test...
        const usernamefield1 = await $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/username_edit"]');
        await usernamefield1.waitForDisplayed({ timeout: 6000 }); // Wait up to 5 seconds for the element to be visible
         const usrtext = await  usernamefield1.getText();
         console.log("usrtext$$$$$$$$$$$$$ "+usrtext);
         await expect(usrtext).equals(userData.username); 
  
    });
});
