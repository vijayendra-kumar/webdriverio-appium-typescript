// import HomePage from '../home.page';
// import LoginPage from '../login.page';

// describe('Adroid Mobile Automation test', () => {

//     it('Should Click on Login Icon Successfuly.', async () => {
//         HomePage.openLoginScreen();
//     });
//     it('should check the title at home page', async () => {
//         expect (await HomePage.getTitle).toHaveText('WEBDRIVER');
//     });
//     it('should ender username and password ok', async () => {
//         HomePage.openLoginScreen();
//         LoginPage.login('test@email.com','Pass@12345');
//     });

//     it('should login into page successfully', async () => {
//        HomePage.openLoginScreen();
//        LoginPage.login('test@email.com','Pass@12345');

//        expect (await LoginPage.successMessageTitle()).toEqual("Success");
//        expect (await LoginPage.successMessage()).toEqual("You are logged in!");

//     });
// });