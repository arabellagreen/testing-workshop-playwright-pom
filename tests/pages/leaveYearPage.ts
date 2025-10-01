import { Page } from 'playwright';
import {expect} from "@playwright/test";
import leaveYearPage_content from "../content/leaveYearPage_content";

import userPath from "../user-path";

class LeaveYearPage {
    private readonly title: string;
    private readonly text: string;
    private readonly dateInput: string;
    private readonly continueButton: string;
    
    constructor() {
        this.title = `.govuk-fieldset__legend`;
        this.text = '.govuk-hint';
        this.dateInput = '.govuk-date-input';
        this.continueButton = 'button.govuk-button:has-text("Continue")';
    }

    async checkLeaveYearPageLoads(page: Page): Promise<void> {
        // // Navigate to the landing page
        await page.goto('https://www.gov.uk/calculate-your-holiday-entitlement/y/irregular-hours-and-part-year');
        // await page.goto('');

        // // Check all elements of the page
        await Promise.all([
            expect(page.locator(this.title)).toHaveText(leaveYearPage_content.pageTitle),
            expect(page.locator(this.text)).toContainText(leaveYearPage_content.pageText),
            expect(page.locator(this.dateInput)).toBeVisible(),
            expect(page.locator('input#response-0')).toBeVisible(), // Day entry
            expect(page.locator('input#response-1')).toBeVisible(), // Month entry
            expect(page.locator('input#response-2')).toBeVisible(), // Year entry
            expect(page.locator('label[for="response-0"]')).toHaveText(leaveYearPage_content.dayLabel), // Day entry label
            expect(page.locator('label[for="response-1"]')).toHaveText(leaveYearPage_content.monthLabel), // Month entry label
            expect(page.locator('label[for="response-2"]')).toHaveText(leaveYearPage_content.yearLabel), // Year entry label
            expect(page.locator(this.continueButton)).toBeVisible(),
            expect(page.locator(this.continueButton)).toHaveText(leaveYearPage_content.continueButtonText),
        //     expect(page.locator(this.title)).toHaveText(landingPage_content.pageTitle),
        //     // Continue checking the elements after adding them to the content file!
        ]);
    }

    async continueOn(page: Page): Promise<void> {
        await page.fill('input#response-0', userPath.leaveYear[0]);
        await page.fill('input#response-1', userPath.leaveYear[1]);
        await page.fill('input#response-2', userPath.leaveYear[2]);
        await page.click(this.continueButton);
        // Click the continue button

    }
}

export default LeaveYearPage;