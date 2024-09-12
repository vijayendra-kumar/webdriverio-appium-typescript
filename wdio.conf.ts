import { browser } from '@wdio/globals';
import * as path from 'path';
import type { Capabilities } from '@wdio/types';


// If you need to use 'Config' from '@wdio/types', you can uncomment the following line:
// import type { Config } from '@wdio/types';

const config: WebdriverIO.Config = {

  runner: 'local',

  // Specify Test Files
  specs: [
    './src/test/**/*.ts'
  ],

  // Capabilities
  maxInstances: 1,
  capabilities: [
    {
      platformName: 'Android',
      'appium:deviceName': 'emulator-5554',
      'appium:platformVersion': '8',
      'appium:app': path.join(process.cwd(), './app/andoride/ApiDemos-debug.apk'),
      'appium:automationName': 'UiAutomator2',
      'appium:orientation': 'PORTRAIT' 
    }
  ],

  // Test Configurations
  logLevel: 'info', // Consider using 'debug' for more detailed logs
  bail: 0,
  baseUrl: 'https://www.amazon.in/',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  // Services
  services: [
    ['appium', {
      command: 'appium'
    }],
    ['visual', {
      baselineFolder: path.join(process.cwd(), './screenshots/baseline'),
      formatImageName: '{tag}-Androide-{width}x{height}',
      outputDir: path.join(process.cwd(), './screenshots/output'),
      diffFolder: path.join(process.cwd(), './screenshots/diff'),
      autoSaveBaseline: true,
    }]
  ],
 
   // Framework to Use
  framework: 'mocha',

  // Reporters to use
  reporters: [
    'spec',
    ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }]
  ],

  // Mocha Options
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },
};

export { config };
