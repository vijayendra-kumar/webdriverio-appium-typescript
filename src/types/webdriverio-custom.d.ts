// src/types/webdriverio-custom.d.ts

import { Element as WebdriverIOElement } from 'webdriverio'; // Import the updated type


// Define ImageComparisonOptions if not available
interface ImageComparisonOptions {
    // Define properties based on the documentation or usage
    blockOutStatusBar?: boolean;
    blockOutToolBar?: boolean;
    // Add more options as needed
}

declare module WebdriverIO {
    interface Browser {
        addCommand(name: string, func: (...args: any[]) => any): void;

        // Add your custom command signature
        checkScreen(tag: string, options?: ImageComparisonOptions): Promise<void>;
    }
}
