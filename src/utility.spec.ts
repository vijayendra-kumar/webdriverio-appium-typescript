// utils.ts

/**
 * Waits for an element to be displayed and then clicks it.
 * @param selector The selector for the element to interact with.
 * @param timeout Optional timeout for waiting (default is 5000 ms).
 */
export async function waitAndClick(selector: string, timeout: number = 5000): Promise<void> {
    const element = await $(selector);
    await element.waitForDisplayed({ timeout });
    await element.click();
}

/**
 * Waits for an element to be displayed and then retrieves its text.
 * @param selector The selector for the element to interact with.
 * @param timeout Optional timeout for waiting (default is 5000 ms).
 * @returns The text of the element.
 */
export async function getElementText(selector: string, timeout: number = 5000): Promise<string> {
    const element = await $(selector);
    await element.waitForDisplayed({ timeout });
    return element.getText();
}


