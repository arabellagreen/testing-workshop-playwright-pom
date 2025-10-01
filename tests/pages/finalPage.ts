import { Page } from 'playwright';
import {expect} from "@playwright/test";
import finalPage_content from "../content/finalPage_content";

class FinalPage {
    private readonly title: string;
    private readonly text: string;


    constructor() {
        this.title = `.govuk-heading-xl`;
        this.text = `.govuk-govspeak`;
    }

    async checkPageLoads(page: Page): Promise<void> {
        // Navigate to the landing page
        await page.goto('https://www.gov.uk/calculate-your-holiday-entitlement/y/irregular-hours-and-part-year/2023-05-03/shift-worker/full-year/8.0/5/7.0');

        // Check all elements of the page
        await Promise.all([
            expect(page.locator(this.title)).toHaveText(finalPage_content.pageTitle),
            expect(page.locator(this.text)).toContainText(finalPage_content.pageText),
            // Continue checking the elements after adding them to the content file!
        ]);
    }


}

export default FinalPage;
