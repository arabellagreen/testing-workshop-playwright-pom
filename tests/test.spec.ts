import {test} from "@playwright/test";
import LandingPage from "./pages/landingPage";
import IrregularHoursPage from "./pages/irregularHoursPage";
import LeaveYearPage from "./pages/leaveYearPage";

test(`Page object model happy path for second test`, async ({ page }): Promise<void> => {
    const landingPage: LandingPage = new LandingPage();
    await landingPage.checkPageLoads(page);
    await landingPage.continueOn(page);
    const irregularHoursPage: IrregularHoursPage = new IrregularHoursPage();
    await irregularHoursPage.checkIrregularHoursPageLoads(page);
    await irregularHoursPage.continueOn(page);
    const leaveYearPage: LeaveYearPage = new LeaveYearPage();
    await leaveYearPage.checkLeaveYearPageLoads(page);
    // await irregularHoursPage.continueOn(page);
    
    // Continue here!
});
// #Hello