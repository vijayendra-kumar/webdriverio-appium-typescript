declare module WebdriverIO {
    interface Browser {
        /**
         * Saves an image of an element
         * @param element - The element to capture
         * @param tag - The name for the saved image
         * @param saveElementOptions - Optional parameters for saving the element
         */
        saveElement(element: WebdriverIO.Element, tag: string, saveElementOptions?: {}): Promise<void>;

        /**
         * Saves an image of a viewport
         * @param tag - The name for the saved image
         * @param saveScreenOptions - Optional parameters for saving the viewport
         */
        saveScreen(tag: string, saveScreenOptions?: {}): Promise<void>;

        /**
         * Saves an image of the complete screen
         * @param tag - The name for the saved image
         * @param saveFullPageScreenOptions - Optional parameters for saving the full page
         */
        saveFullPageScreen(tag: string, saveFullPageScreenOptions?: {}): Promise<void>;

        /**
         * Saves an image of the complete screen with the tabbable lines and dots
         * @param tag - The name for the saved image
         * @param saveTabbableOptions - Optional parameters for saving the tabbable page
         */
        saveTabbablePage(tag: string, saveTabbableOptions?: {}): Promise<void>;

        /**
         * Compares an image of an element
         * @param element - The element to compare
         * @param tag - The name for the comparison
         * @param checkElementOptions - Optional parameters for comparison
         */
        checkElement(element: WebdriverIO.Element, tag: string, checkElementOptions?: {}): Promise<CheckResult>;

        /**
         * Compares an image of a viewport
         * @param tag - The name for the comparison
         * @param checkScreenOptions - Optional parameters for comparison
         */
        checkScreen(tag: string, checkScreenOptions?: {}): Promise<CheckResult>;

        /**
         * Compares an image of the complete screen
         * @param tag - The name for the comparison
         * @param checkFullPageOptions - Optional parameters for comparison
         */
        checkFullPageScreen(tag: string, checkFullPageOptions?: {}): Promise<CheckResult>;

        /**
         * Compares an image of the complete screen with the tabbable lines and dots
         * @param tag - The name for the comparison
         * @param checkTabbableOptions - Optional parameters for comparison
         */
        checkTabbablePage(tag: string, checkTabbableOptions?: {}): Promise<CheckResult>;
    }

    interface CheckResult {
        misMatchPercentage: number;
        isWithinMisMatchTolerance: boolean;
        isExactSameImage: boolean;
    }
}
