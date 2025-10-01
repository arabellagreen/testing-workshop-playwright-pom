import { Page } from 'playwright';
import {expect} from "@playwright/test";
import landingPage_content from "../content/landingPage_content";

class LandingPage {
    private readonly title: string;
    private readonly text: string;
    private readonly continueButton: string;


    constructor() {
        this.title = `.govuk-heading-xl`;
        this.text = `.govuk-govspeak`;
        this.continueButton = `.govuk-button--start`;
    }

    async checkPageLoads(page: Page): Promise<void> {
        // Navigate to the landing page
        await page.goto('https://www.gov.uk/calculate-your-holiday-entitlement');

        // Check all elements of the page
        await Promise.all([
            expect(page.locator(this.title)).toHaveText(landingPage_content.pageTitle),
            expect(page.locator(this.text)).toContainText(landingPage_content.pageText),
            expect(page.locator(this.continueButton)).toBeVisible(),
            expect(page.locator(this.continueButton)).toHaveText(landingPage_content.continueButtonText),
            // Continue checking the elements after adding them to the content file!
        ]);
    }

    async continueOn(page: Page): Promise<void> {
        await page.click(this.continueButton);
        // Click the continue button

    }
}

export default LandingPage;
