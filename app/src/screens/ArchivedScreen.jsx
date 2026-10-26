// Archived — generated from Prototype v3 (Final).dc.html
export default function ArchivedScreen({ vm }) {
  const { arEmpty, arRows, goAccount, is, t } = vm;
  return (
    <>
      {is.archived ? (
        <div data-screen-label="Archived pools" style={{ position: "absolute", top: "50px", left: "0", right: "0", bottom: "0", overflowY: "auto", scrollbarWidth: "none", paddingBottom: "40px" }}>
          <div style={{ padding: "8px 16px 0" }}>
            <button onClick={goAccount} aria-label={t.back} style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--c-ffffff,#ffffff)", border: "1px solid var(--l-eef0f3,#eef0f3)", boxShadow: "var(--shd,0 2px 8px -2px rgba(10,27,54,.10))", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer" }}><i className="ph-bold ph-arrow-left" style={{ fontSize: "17px" }} /></button>
          </div>
          <div style={{ padding: "16px 24px 0", display: "flex", flexDirection: "column", gap: "4px" }}>
            <span style={{ fontSize: "30px", fontWeight: "700", letterSpacing: "-.03em", lineHeight: "1.1" }}>{t.arList}</span>
            <span style={{ fontSize: "15px", color: "var(--t-5b6b82,#5b6b82)" }}>{t.arListSub}</span>
          </div>
          {arEmpty ? (
            <div style={{ margin: "24px 16px 0", borderRadius: "18px", background: "var(--b-f4f6f8,#f4f6f8)", padding: "24px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", color: "var(--t-5b6b82,#5b6b82)", textAlign: "center" }}>
              <i className="ph ph-archive" style={{ fontSize: "28px" }} />
              <span style={{ fontSize: "15px", fontWeight: "600" }}>{t.arNone}</span>
            </div>
          ) : null}
          <div style={{ padding: "12px 24px 0" }}>
            {arRows.map((a, aIdx) => (
              <div key={aIdx} style={{ display: "flex", alignItems: "center", gap: "14px", minHeight: "68px", borderTop: a.divider }}>
                <span style={{ width: "40px", height: "40px", flexShrink: "0", borderRadius: "50%", background: "var(--b-f2f4f7,#f2f4f7)", color: "var(--t-5b6b82,#5b6b82)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "700" }}>{a.initials}</span>
                <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "16px", fontWeight: "500" }}>{a.name}</span>
                  <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{a.sub}</span>
                </div>
                <button onClick={a.restore} style={{ height: "44px", padding: "0 14px", borderRadius: "999px", border: "1px solid var(--l-d5dbe3,#d5dbe3)", background: "var(--c-ffffff,#ffffff)", color: "var(--t-0a2a5c,#0a2a5c)", fontFamily: "inherit", fontSize: "14px", fontWeight: "700", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px", flexShrink: "0" }}>
                  <i className="ph-bold ph-arrow-u-up-left" style={{ fontSize: "14px" }} />
                  {t.arRestore}
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}
