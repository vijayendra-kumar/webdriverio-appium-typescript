// import { expect } from 'chai';
// import * as path from 'path';

// describe('Visual Regression Test', () => {
//   it('should navigate to the home screen and capture a screenshot', async () => {
//    // const someButton = await $('~App'); // Replace with the appropriate selector
//     //await someButton.click();

//     // Wait for the home screen to be fully loaded
//     await browser.pause(5000); // Adjust based on your app's load time

//     // Define custom paths for the screenshot
//   //  const customBaselinePath = path.join(process.cwd(), './.tmp/baseline');
//     //const customOutputPath = path.join(process.cwd(), './.tmp/');

//    // console.log('Baseline path:', customBaselinePath);
//    // console.log('Output path:', customOutputPath);

//     // Capture a screenshot of the home screen
//     await browser.saveScreen('home-screen', {
//    //   baselineFolder: customBaselinePath,
//      // formatImageName: '{tag}-android-{width}x{height}',
//      // path:path.join(process.cwd(), './screenshots/baseline')
//     });
//   });

//   it.only('should compare the current screen with the baseline', async () => {
//     //const someButton = await $('~App'); // Replace with the appropriate selector
//   //  await someButton.click();

//     // Wait for the home screen to be fully loaded
//     await browser.pause(5000); 

//    // const customBaselinePath = path.join(process.cwd(), './.tmp/baseline');
//    // const customOutputPath = path.join(process.cwd(), './.tmp/');

//    // console.log('Baseline path:', customBaselinePath);
//     //console.log('Output path:', customOutputPath);

//     // Compare the current screen with the baseline
//     const Compareresult = await browser.checkScreen('home-screen', {
//      // baselineFolder: customBaselinePath,
//      outputDir: path.join(process.cwd(), './screenshots/output'),
//       blockOutStatusBar: true,
//       blockOutToolBar: true,
//     });

//     console.log('Comparison result @@@@@@@@@@@@:', Compareresult); // Log the result to see if it's undefined
//     if (Compareresult) {
//       expect(Compareresult.misMatchPercentage).to.be.lessThan(1); // Adjust the threshold as needed
//     } else {
//       throw new Error('Comparison result is undefined');
//     }
//   });
// });
