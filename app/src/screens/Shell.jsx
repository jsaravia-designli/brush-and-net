// Page shell: prototype controls bar, phone frame and demo links
import TodayScreen from './TodayScreen.jsx';
import RepairJobScreen from './RepairJobScreen.jsx';
import RepairQuoteScreen from './RepairQuoteScreen.jsx';
import RepairSummaryScreen from './RepairSummaryScreen.jsx';
import LogVisitScreen from './LogVisitScreen.jsx';
import VisitSavedScreen from './VisitSavedScreen.jsx';
import ReportScreen from './ReportScreen.jsx';
import VisitSummaryScreen from './VisitSummaryScreen.jsx';
import PoolsScreen from './PoolsScreen.jsx';
import PoolDetailScreen from './PoolDetailScreen.jsx';
import EstimateScreen from './EstimateScreen.jsx';
import ArchivedScreen from './ArchivedScreen.jsx';
import MoneyScreen from './MoneyScreen.jsx';
import ShoppingScreen from './ShoppingScreen.jsx';
import PricesScreen from './PricesScreen.jsx';
import ImportScreen from './ImportScreen.jsx';
import AccountScreen from './AccountScreen.jsx';
import OnboardingScreen from './OnboardingScreen.jsx';
import TabBar from './TabBar.jsx';
import StatusBar from './StatusBar.jsx';
import Sheets from './Sheets.jsx';
import Toast from './Toast.jsx';

export default function Shell({ vm }) {
  const { pvGroups, resetDemo, restartOb, rootRef } = vm;
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "24px", padding: "24px 16px 32px" }}>
      <div aria-label="Prototype controls" style={{ maxWidth: "100%", background: "#ffffff", border: "1px solid #dde2e8", borderRadius: "20px", padding: "14px 20px", display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "center", gap: "12px 24px", color: "#0a1b36" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px", alignSelf: "center" }}>
          <span style={{ fontSize: "15px", fontWeight: "700", letterSpacing: "-.01em" }}>Prototype controls</span>
          <span style={{ fontSize: "12px", color: "#5b6b82" }}>Not part of the app</span>
        </div>
        {pvGroups.map((g, gIdx) => (
          <div key={gIdx} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: ".06em", textTransform: "uppercase", color: "#5b6b82" }}>{g.title}</span>
            <div role="group" aria-label={g.title} style={{ display: "flex", gap: "2px", padding: "3px", borderRadius: "999px", background: "#f2f4f7" }}>
              {g.opts.map((o, oIdx) => (
                <button key={oIdx} onClick={o.onClick} aria-pressed={o.on} style={{ flex: "1 0 auto", minWidth: "0", height: "32px", padding: "0 14px", whiteSpace: "nowrap", border: "0", borderRadius: "999px", background: o.bg, color: o.color, fontFamily: "inherit", fontSize: "13px", fontWeight: "600", cursor: "pointer" }}>{o.label}</button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div ref={rootRef} data-theme-root="1" style={{ position: "relative", width: "390px", height: "844px", flexShrink: "0", borderRadius: "44px", border: "1px solid var(--l-dde2e8,#dde2e8)", overflow: "hidden", background: "var(--b-ffffff,#ffffff)", fontFamily: "'Figtree',sans-serif", color: "var(--t-0a1b36,#0a1b36)", fontVariantNumeric: "tabular-nums" }}>
        <TodayScreen vm={vm} />
        <RepairJobScreen vm={vm} />
        <RepairQuoteScreen vm={vm} />
        <RepairSummaryScreen vm={vm} />
        <LogVisitScreen vm={vm} />
        <VisitSavedScreen vm={vm} />
        <ReportScreen vm={vm} />
        <VisitSummaryScreen vm={vm} />
        <PoolsScreen vm={vm} />
        <PoolDetailScreen vm={vm} />
        <EstimateScreen vm={vm} />
        <ArchivedScreen vm={vm} />
        <MoneyScreen vm={vm} />
        <ShoppingScreen vm={vm} />
        <PricesScreen vm={vm} />
        <ImportScreen vm={vm} />
        <AccountScreen vm={vm} />
        <OnboardingScreen vm={vm} />
        <TabBar vm={vm} />
        <StatusBar vm={vm} />
        <Sheets vm={vm} />
        <Toast vm={vm} />
      </div>
      <div style={{ display: "flex", gap: "18px" }}>
        <button onClick={resetDemo} style={{ background: "none", border: "0", padding: "8px", fontFamily: "inherit", fontSize: "14px", fontWeight: "600", color: "var(--t-0a6f8a,#0a6f8a)", cursor: "pointer" }}>Reset demo</button>
        <button onClick={restartOb} style={{ background: "none", border: "0", padding: "8px", fontFamily: "inherit", fontSize: "14px", fontWeight: "600", color: "var(--t-0a6f8a,#0a6f8a)", cursor: "pointer" }}>Show onboarding</button>
      </div>
    </div>
  );
}
