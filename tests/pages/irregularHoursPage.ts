import { Page } from 'playwright';
import {expect} from "@playwright/test";
import irregularHoursPage_content from "../content/irregularHoursPage_content";

class IrregularHoursPage {
    private readonly title: string;
    private readonly text: string;
    private readonly continueButton: string;
    private readonly radioButton: string;
    
    constructor() {
        this.title = `.govuk-fieldset__legend`;
        this.text = '.govuk-hint';
        this.continueButton = 'button.govuk-button:has-text("Continue")';
        this.radioButton = `.govuk-radios`;
    }

    async checkIrregularHoursPageLoads(page: Page): Promise<void> {
        // // Navigate to the landing page
        await page.goto('https://www.gov.uk/calculate-your-holiday-entitlement/y');
        // await page.goto('');

        // // Check all elements of the page
        await Promise.all([
            expect(page.locator(this.title)).toHaveText(irregularHoursPage_content.pageTitle),
            expect(page.locator(this.text)).toContainText(irregularHoursPage_content.pageText),
            expect(page.locator(this.continueButton)).toBeVisible(),
            expect(page.locator(this.continueButton)).toHaveText(irregularHoursPage_content.continueButtonText),
            expect(page.locator(this.radioButton)).toBeVisible(),
            expect(page.locator('input#response-0')).toBeVisible(), // Yes radio button
            expect(page.locator('input#response-1')).toBeVisible(), // No radio button
        //     expect(page.locator(this.title)).toHaveText(landingPage_content.pageTitle),
        //     // Continue checking the elements after adding them to the content file!
        ]);
    }

    async continueOn(page: Page): Promise<void> {
        await page.click(this.continueButton);
        // Click the continue button

    }
}

export default IrregularHoursPage;