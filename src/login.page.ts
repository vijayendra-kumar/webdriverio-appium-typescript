class LoginPage {
    get inputEmail(){
        return $("~input-email");
    }
    get inputPassword(){
        return $("~input-password");
    }
    get loginBtn(){
        return $("~button-LOGIN");
    }

    async login(emailid:string,password:string){
        await this.inputEmail.setValue(emailid);
        await this.inputPassword.setValue(password);
        await this.loginBtn.click();
    }
    async successMessageTitle():Promise<string> {
        const element = await $(`//android.widget.TextView[@resource-id="android:id/alertTitle" and @text="Success"]`);
        await element.waitForDisplayed({ timeout: 10000 }); // Wait for up to 10 seconds for the element to be displayed
        return await element.getText();
    return await element.getText();
      //  return ( await $('id=android:id/alertTitle')).getText();
    }
    async successMessage():Promise<string> {
        return ( await $('id=android:id/message')).getText();
    }

}
export default new LoginPage();