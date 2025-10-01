import { Page } from 'playwright';
import {expect} from "@playwright/test";
import timeUnitsPage_content from "../content/timeUnitsPage_content";

class TimeUnitsPage {
    private readonly title: string;
    private readonly text: string;
    private readonly continueButton: string;
    private readonly radioButton: string;
    private readonly radioButtons: string[];
    
    constructor() {
        this.title = `.govuk-fieldset__legend`;
        this.text = '.govuk-hint';
        this.continueButton = 'button.govuk-button:has-text("Continue")';
        this.radioButton = `.govuk-radios`;
        // this.radioButtons = [
        //     'input#response-0',
        //     'input#response-1',
        //     'input#response-2',
        //     'input#response-3',
        //     'input#response-4'
        // ];
    }

    async checkTimeUnitsPageLoads(page: Page): Promise<void> {
        // // Navigate to the landing page
        await page.goto('https://www.gov.uk/calculate-your-holiday-entitlement/y/irregular-hours-and-part-year/2023-05-03');
        // await page.goto('');

        // // Check all elements of the page
        await Promise.all([
            expect(page.locator(this.title)).toHaveText(timeUnitsPage_content.pageTitle),
            expect(page.locator(this.text)).toContainText(timeUnitsPage_content.pageText),
            expect(page.locator(this.continueButton)).toBeVisible(),
            expect(page.locator(this.continueButton)).toHaveText(timeUnitsPage_content.continueButtonText),
            expect(page.locator(this.radioButton)).toBeVisible(),
            
        ]);
        for (const text of timeUnitsPage_content.radioButtonsText) {
            await expect(page.getByLabel(text)).toBeVisible();
        }
    }

    async continueOn(page: Page): Promise<void> {
        await page.click(this.continueButton);
        // Click the continue button

    }
}

export default TimeUnitsPage;