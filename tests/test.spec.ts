import {test} from "@playwright/test";
import LandingPage from "./pages/landingPage";
import IrregularHoursPage from "./pages/irregularHoursPage";
import LeaveYearPage from "./pages/leaveYearPage";
import TimeUnitsPage from "./pages/timeUnitsPage";
import ShiftHoursPage from "./pages/shiftHoursPage";

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
  
    const timeUnitsPage: TimeUnitsPage = new TimeUnitsPage();
    await timeUnitsPage.checkTimeUnitsPageLoads(page);
    await timeUnitsPage.continueOn(page);

    const shiftHoursPage: ShiftHoursPage = new ShiftHoursPage();
    await shiftHoursPage.checkShiftHoursPageLoads(page);
    await shiftHoursPage.continueOn(page);
    
    // Continue here!
});
// #Hello
