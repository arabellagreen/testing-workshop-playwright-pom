import {test} from "@playwright/test";
import LandingPage from "./pages/landingPage";

test(`Page object model happy path for second test`, async ({ page }): Promise<void> => {
    const landingPage: LandingPage = new LandingPage();
    await landingPage.checkPageLoads(page);
    await landingPage.continueOn(page);
    // await irregularHoursPage.checkPageLoads(page);
    // await irregularHoursPage.continueOn(page);
    
    // Continue here!
});
// #Hello