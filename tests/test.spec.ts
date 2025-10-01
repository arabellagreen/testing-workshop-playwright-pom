import {test} from "@playwright/test";
import LandingPage from "./pages/landingPage";
import IrregularHoursPage from "./pages/irregularHoursPage";
import LeaveYearPage from "./pages/leaveYearPage";
import TimeUnitsPage from "./pages/timeUnitsPage";
import ShiftHoursPage from "./pages/shiftHoursPage";
import ShiftNumPage from "./pages/shiftNumPage";
import ShiftDaysPage from "./pages/shiftDaysPage";
import FinalPage from "./pages/finalPage";

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

    const shiftNumPage: ShiftNumPage = new ShiftNumPage();
    await shiftNumPage.checkShiftNumPageLoads(page);
    await shiftNumPage.continueOn(page);

    const shiftDaysPage: ShiftDaysPage = new ShiftDaysPage();
    await shiftDaysPage.checkShiftDaysPageLoads(page);
    await shiftDaysPage.continueOn(page);

    const finalPage: FinalPage = new FinalPage();
    await finalPage.checkPageLoads(page);

    // Continue here!
});
// #Hello
