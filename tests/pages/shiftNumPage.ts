import { Page } from 'playwright';
import {expect} from "@playwright/test";
import shiftNumPage_content from "../content/shiftNumPage_content";

class ShiftNumPage {
    private readonly title: string;
    private readonly continueButton: string;
    private readonly inputField: string;
    // private readonly radioButtons: string[];
    
    constructor() {
        this.title = `.govuk-label-wrapper`;
        this.continueButton = 'button.govuk-button:has-text("Continue")';
        this.inputField = `.govuk-input`;
    }

    async checkShiftNumPageLoads(page: Page): Promise<void> {
        // // Navigate to the landing page
        await page.goto('https://www.gov.uk/calculate-your-holiday-entitlement/y/irregular-hours-and-part-year/2023-05-03/shift-worker/full-year/5.0');
        // await page.goto('');

        // // Check all elements of the page
        await Promise.all([
            expect(page.locator(this.title)).toHaveText(shiftNumPage_content.pageTitle),

            expect(page.locator(this.continueButton)).toBeVisible(),
            expect(page.locator(this.continueButton)).toHaveText(shiftNumPage_content.continueButtonText),
            expect(page.locator(this.inputField)).toBeVisible(),
            
        ]);
    }

    async continueOn(page: Page): Promise<void> {
        await page.click(this.continueButton);
        // Click the continue button

    }
}

export default ShiftNumPage;