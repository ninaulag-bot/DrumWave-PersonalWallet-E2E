import DspPlanNotSelected from "@/imports/DspPlanNotSelected-1/index";

/** "Plan not selected" screen, shown when the user closes the Choose Plans page
 *  without selecting a Data Savings Plan. Renders the read-only import as-is. */
export function DspPlanNotSelectedScreen() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <DspPlanNotSelected />
    </div>
  );
}
