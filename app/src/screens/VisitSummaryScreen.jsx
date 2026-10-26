// Visit summary — generated from Prototype v3 (Final).dc.html
export default function VisitSummaryScreen({ vm }) {
  const { backToPool, editVisit, is, showMoney, t, vs } = vm;
  return (
    <>
      {is.visitSum ? (
        <div data-screen-label="Visit summary" style={{ position: "absolute", top: "50px", left: "0", right: "0", bottom: "0", overflowY: "auto", scrollbarWidth: "none", paddingBottom: "40px" }}>
          <div style={{ padding: "8px 16px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <button onClick={backToPool} aria-label={t.back} style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--c-ffffff,#ffffff)", border: "1px solid var(--l-eef0f3,#eef0f3)", boxShadow: "var(--shd,0 2px 8px -2px rgba(10,27,54,.10))", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer" }}><i className="ph-bold ph-arrow-left" style={{ fontSize: "17px" }} /></button>
            <button onClick={editVisit} style={{ height: "40px", padding: "0 16px", borderRadius: "999px", background: "var(--c-ffffff,#ffffff)", border: "1px solid var(--l-eef0f3,#eef0f3)", boxShadow: "var(--shd,0 2px 8px -2px rgba(10,27,54,.10))", display: "flex", alignItems: "center", gap: "6px", color: "var(--t-0a2a5c,#0a2a5c)", fontFamily: "inherit", fontSize: "14px", fontWeight: "700", cursor: "pointer" }}>
              <i className="ph-bold ph-pencil-simple" style={{ fontSize: "15px" }} />
              {t.vsEdit}
            </button>
          </div>
          <div style={{ padding: "16px 24px 0", display: "flex", flexDirection: "column", gap: "4px" }}>
            <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--t-5b6b82,#5b6b82)" }}>{t.vsTitle}</span>
            <span style={{ fontSize: "30px", fontWeight: "700", letterSpacing: "-.03em", lineHeight: "1.1" }}>{vs.date}</span>
            <span style={{ fontSize: "15px", color: "var(--t-5b6b82,#5b6b82)" }}>{vs.sub}</span>
          </div>
          {vs.sent ? (
            <div style={{ padding: "12px 24px 0", display: "flex" }}>
              <span style={{ height: "28px", padding: "0 10px", borderRadius: "999px", background: "var(--b-e8f5ee,#e8f5ee)", color: "var(--t-0f5c3b,#0f5c3b)", fontSize: "13px", fontWeight: "600", display: "flex", alignItems: "center", gap: "6px" }}>
                <i className="ph-fill ph-paper-plane-tilt" style={{ fontSize: "14px" }} />
                {t.rpSentBtn}
              </span>
            </div>
          ) : null}
          {showMoney ? (
            <div style={{ margin: "20px 16px 0", borderRadius: "22px", background: "var(--b-0a2a5c,#0a2a5c)", color: "var(--t-ffffff,#ffffff)", boxShadow: "var(--shd,0 12px 26px -14px rgba(10,42,92,.30),0 2px 6px -2px rgba(10,42,92,.08))", padding: "18px", display: "flex", flexDirection: "column", gap: "3px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--t-c9d6e8,#c9d6e8)", display: "flex", alignItems: "center", gap: "6px" }}>
                <i className="ph ph-chart-line-up" style={{ fontSize: "15px" }} />
                {t.earnedVisit}
              </span>
              <span style={{ fontSize: "32px", fontWeight: "700", letterSpacing: "-.03em" }}>{vs.net}</span>
              <span style={{ fontSize: "13px", color: "var(--t-c9d6e8,#c9d6e8)" }}>{vs.breakdown}</span>
            </div>
          ) : null}
          <div style={{ height: "8px", background: "var(--b-f4f6f8,#f4f6f8)", marginTop: "24px" }} />
          <div style={{ padding: "22px 24px 12px" }}>
            <span style={{ fontSize: "17px", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px" }}>
              <i className="ph ph-drop-half" style={{ fontSize: "19px", color: "var(--t-0a6f8a,#0a6f8a)" }} />
              {t.readings}
            </span>
          </div>
          <div style={{ padding: "0 16px", display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "8px" }}>
            {vs.readings.map((r, rIdx) => (
              <div key={rIdx} style={{ borderRadius: "16px", background: r.tileBg, padding: "12px 14px", display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--t-5b6b82,#5b6b82)" }}>{r.label}</span>
                <span style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                  <span style={{ fontSize: "22px", fontWeight: "700" }}>{r.value}</span>
                  <span style={{ fontSize: "13px", fontWeight: "700", color: r.color }}>{r.state}</span>
                </span>
              </div>
            ))}
          </div>
          <div style={{ height: "8px", background: "var(--b-f4f6f8,#f4f6f8)", marginTop: "24px" }} />
          <div style={{ padding: "22px 24px 4px" }}>
            <span style={{ fontSize: "17px", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px" }}>
              <i className="ph ph-flask" style={{ fontSize: "19px", color: "var(--t-0a6f8a,#0a6f8a)" }} />
              {t.rpChems}
            </span>
          </div>
          <div style={{ padding: "0 24px" }}>
            {vs.chems.map((c, cIdx) => (
              <div key={cIdx} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: "52px", borderTop: c.divider }}>
                <span style={{ fontSize: "16px", fontWeight: "500" }}>{c.name}</span>
                <span style={{ fontSize: "15px", fontWeight: "700" }}>{c.qty}</span>
              </div>
            ))}
            {vs.noChems ? (
              <span style={{ display: "block", padding: "12px 0", fontSize: "15px", color: "var(--t-5b6b82,#5b6b82)" }}>{t.vsNoChems}</span>
            ) : null}
          </div>
          <div style={{ height: "8px", background: "var(--b-f4f6f8,#f4f6f8)", marginTop: "24px" }} />
          <div style={{ padding: "22px 24px 4px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "17px", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px" }}>
              <i className="ph ph-list-checks" style={{ fontSize: "19px", color: "var(--t-0a6f8a,#0a6f8a)" }} />
              {t.tasks}
            </span>
            <span style={{ fontSize: "13px", color: "var(--t-6b7889,#6b7889)" }}>{vs.tasksDone}</span>
          </div>
          <div style={{ padding: "0 24px" }}>
            {vs.tasks.map((k, kIdx) => (
              <div key={kIdx} style={{ height: "48px", display: "flex", alignItems: "center", gap: "14px", borderTop: k.divider }}>
                {k.on ? (
                  <i className="ph-fill ph-check-circle" style={{ fontSize: "24px", color: "var(--t-0a2a5c,#0a2a5c)" }} />
                ) : null}
                {k.off ? (
                  <span style={{ width: "20px", height: "20px", margin: "0 2px", borderRadius: "50%", border: "1.5px dashed var(--l-a3adbb,#a3adbb)" }} />
                ) : null}
                <span style={{ flex: "1", fontSize: "16px", fontWeight: "500", color: k.color }}>{k.label}</span>
              </div>
            ))}
          </div>
          <div style={{ height: "8px", background: "var(--b-f4f6f8,#f4f6f8)", marginTop: "24px" }} />
          <div style={{ padding: "22px 24px 0", display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ fontSize: "17px", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px" }}>
              <i className="ph ph-user-circle" style={{ fontSize: "19px", color: "var(--t-0a6f8a,#0a6f8a)" }} />
              {t.forCustomer}
            </span>
            <span style={{ fontSize: "15px", color: "var(--t-34496a,#34496a)", display: "flex", alignItems: "center", gap: "8px" }}>
              <i className="ph ph-camera" style={{ fontSize: "18px", color: "var(--t-5b6b82,#5b6b82)" }} />
              {vs.photosLabel}
            </span>
            <span style={{ fontSize: "15px", lineHeight: "1.5", color: "var(--t-34496a,#34496a)", display: "flex", alignItems: "flex-start", gap: "8px" }}>
              <i className="ph ph-chat-text" style={{ fontSize: "18px", color: "var(--t-5b6b82,#5b6b82)", marginTop: "2px" }} />
              {vs.noteLabel}
            </span>
          </div>
        </div>
      ) : null}
    </>
  );
}
