// Visit saved — generated from Prototype v3 (Final).dc.html
export default function VisitSavedScreen({ vm }) {
  const { finishSaved, is, isTech, openReport, s, showMoney, stayHere, t } = vm;
  return (
    <>
      {is.saved ? (
        <div data-screen-label="Visit saved" style={{ position: "absolute", inset: "0", background: "var(--b-0a2a5c,#0a2a5c)", color: "var(--t-ffffff,#ffffff)", display: "flex", flexDirection: "column", padding: "96px 24px 36px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", alignItems: "flex-start" }}>
            <i className="ph-fill ph-check-circle" style={{ fontSize: "52px", color: "var(--t-7fd6a6,#7fd6a6)" }} />
            <span style={{ fontSize: "17px", fontWeight: "600", color: "var(--t-c9d6e8,#c9d6e8)" }}>{s.title}</span>
          </div>
          {showMoney ? (
            <div style={{ marginTop: "16px", display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "60px", fontWeight: "700", letterSpacing: "-.04em", lineHeight: "1.05" }}>{s.net}</span>
              <span style={{ fontSize: "17px", fontWeight: "500", color: "var(--t-c9d6e8,#c9d6e8)" }}>{t.earnedVisit}</span>
            </div>
          ) : null}
          {isTech ? (
            <div style={{ marginTop: "16px", display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "60px", fontWeight: "700", letterSpacing: "-.04em", lineHeight: "1.05" }}>{s.tasksBig}</span>
              <span style={{ fontSize: "17px", fontWeight: "500", color: "var(--t-c9d6e8,#c9d6e8)" }}>{s.tasksSub}</span>
            </div>
          ) : null}
          <div style={{ marginTop: "28px", display: "flex", flexDirection: "column" }}>
            {showMoney ? (
              <>
              <div style={{ height: "52px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px dashed var(--l-ffffff2e,#ffffff2e)" }}>
                <span style={{ fontSize: "15px", color: "var(--t-c9d6e8,#c9d6e8)", display: "flex", alignItems: "center", gap: "8px" }}>
                  <i className="ph ph-receipt" style={{ fontSize: "18px" }} />
                  {t.fee}
                </span>
                <span style={{ fontSize: "17px", fontWeight: "700" }}>{s.fee}</span>
              </div>
              <div style={{ height: "52px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px dashed var(--l-ffffff2e,#ffffff2e)" }}>
                <span style={{ fontSize: "15px", color: "var(--t-c9d6e8,#c9d6e8)", display: "flex", alignItems: "center", gap: "8px" }}>
                  <i className="ph ph-flask" style={{ fontSize: "18px" }} />
                  {t.chems}
                </span>
                <span style={{ fontSize: "17px", fontWeight: "700", color: "var(--t-ffc2b3,#ffc2b3)" }}>{s.chem}</span>
              </div>
              </>
            ) : null}
            <div style={{ height: "52px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: "15px", color: "var(--t-c9d6e8,#c9d6e8)", display: "flex", alignItems: "center", gap: "8px" }}>
                <i className="ph ph-timer" style={{ fontSize: "18px" }} />
                {t.timeOnSite}
              </span>
              <span style={{ fontSize: "17px", fontWeight: "700" }}>{s.mins}</span>
            </div>
          </div>
          <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "12px" }}>
            <span style={{ fontSize: "16px", fontWeight: "600", display: "flex", alignItems: "center", gap: "8px" }}>
              <i className="ph ph-navigation-arrow" style={{ fontSize: "17px" }} />
              {s.nextLabel}
            </span>
            <div style={{ height: "6px", borderRadius: "3px", background: "var(--b-ffffff26,#ffffff26)", overflow: "hidden" }}>
              <div style={{ width: s.bar, height: "100%", borderRadius: "3px", background: "var(--c-ffffff,#ffffff)", transition: "width 1s linear" }} />
            </div>
            <span style={{ fontSize: "14px", color: "var(--t-c9d6e8,#c9d6e8)" }}>{s.countText}</span>
            <button onClick={openReport} aria-disabled={s.reportSent} style={{ marginTop: "4px", height: "52px", borderRadius: "14px", background: "transparent", border: "1px solid var(--l-ffffff59,#ffffff59)", color: "var(--t-ffffff,#ffffff)", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontFamily: "inherit", fontSize: "16px", fontWeight: "700", cursor: "pointer" }}>
              <i className={s.reportIcon} style={{ fontSize: "17px" }} />
              {s.reportLabel}
            </button>
            <div style={{ display: "flex", gap: "8px" }}>
              <button onClick={stayHere} style={{ flex: "1", height: "52px", borderRadius: "14px", background: "var(--b-ffffff1f,#ffffff1f)", border: "0", color: "var(--t-ffffff,#ffffff)", fontFamily: "inherit", fontSize: "16px", fontWeight: "700", cursor: "pointer" }}>{t.stay}</button>
              <button onClick={finishSaved} style={{ flex: "1.4", height: "52px", borderRadius: "14px", background: "var(--c-ffffff,#ffffff)", color: "var(--t-0a2a5c,#0a2a5c)", border: "0", fontFamily: "inherit", fontSize: "16px", fontWeight: "700", cursor: "pointer" }}>{t.goNow}</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
