// Repair summary — generated from Prototype v3 (Final).dc.html
export default function RepairSummaryScreen({ vm }) {
  const { is, sv2, t } = vm;
  return (
    <>
      {is.rjSum ? (
        <>
        <div data-screen-label="Repair summary" style={{ position: "absolute", top: "50px", left: "0", right: "0", bottom: "100px", overflowY: "auto", scrollbarWidth: "none", paddingBottom: "24px" }}>
          <div style={{ padding: "8px 16px 0" }}>
            <button onClick={sv2.back} aria-label={t.back} style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--c-ffffff,#ffffff)", border: "1px solid var(--l-eef0f3,#eef0f3)", boxShadow: "var(--shd,0 2px 8px -2px rgba(10,27,54,.10))", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer" }}><i className="ph-bold ph-arrow-left" style={{ fontSize: "17px" }} /></button>
          </div>
          <div style={{ padding: "16px 24px 0", display: "flex", flexDirection: "column", gap: "4px" }}>
            <span style={{ fontSize: "30px", fontWeight: "700", letterSpacing: "-.03em", lineHeight: "1.1" }}>{t.rjSumTitle}</span>
            <span style={{ fontSize: "15px", color: "var(--t-5b6b82,#5b6b82)" }}>{sv2.sub}</span>
          </div>
          <div style={{ height: "8px", background: "var(--b-f4f6f8,#f4f6f8)", marginTop: "24px" }} />
          <div style={{ padding: "22px 24px 10px" }}>
            <span style={{ fontSize: "17px", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px" }}>
              <i className="ph ph-envelope-simple" style={{ fontSize: "19px", color: "var(--t-0a6f8a,#0a6f8a)" }} />
              {t.rpSendTo}
            </span>
          </div>
          <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: "6px" }}>
            <input type="email" value={sv2.email ?? ''} onChange={sv2.setEmail} placeholder={t.rpEmailPh} style={{ height: "52px", borderRadius: "14px", border: `1px solid ${sv2.emailBorder ?? ''}`, background: "var(--c-ffffff,#ffffff)", padding: "0 14px", fontFamily: "inherit", fontSize: "16px", color: "var(--t-0a1b36,#0a1b36)", outline: "none" }} />
            {sv2.bad ? (
              <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--t-9a2f17,#9a2f17)", paddingLeft: "4px" }}>{t.rpBadEmail}</span>
            ) : null}
          </div>
          <div style={{ height: "8px", background: "var(--b-f4f6f8,#f4f6f8)", marginTop: "24px" }} />
          <div style={{ padding: "22px 24px 4px" }}>
            <span style={{ fontSize: "17px", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px" }}>
              <i className="ph ph-list-checks" style={{ fontSize: "19px", color: "var(--t-0a6f8a,#0a6f8a)" }} />
              {t.rpInclude}
            </span>
          </div>
          <div style={{ padding: "0 24px" }}>
            {sv2.inc.map((i, iIdx) => (
              <button key={iIdx} onClick={i.toggle} aria-pressed={i.on} aria-disabled={i.disabled} style={{ width: "100%", minHeight: "60px", display: "flex", alignItems: "center", gap: "14px", background: "none", border: "0", borderTop: i.divider, padding: "0", fontFamily: "inherit", color: "var(--t-0a1b36,#0a1b36)", cursor: i.cursor, textAlign: "left" }}>
                <i className={i.iconCls} style={{ fontSize: "20px", color: "var(--t-5b6b82,#5b6b82)" }} />
                <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "16px", fontWeight: "500", color: i.color }}>{i.label}</span>
                  <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{i.sub}</span>
                </span>
                <span style={{ width: "46px", height: "28px", flexShrink: "0", borderRadius: "999px", background: i.track, padding: "3px", display: "flex", transition: "background .15s" }}>
                  <span style={{ width: "22px", height: "22px", borderRadius: "50%", background: "var(--k-ffffff,#ffffff)", boxShadow: "var(--shd,0 1px 3px rgba(10,27,54,.25))", marginLeft: i.knob, transition: "margin .15s" }} />
                </span>
              </button>
            ))}
          </div>
          <div style={{ height: "8px", background: "var(--b-f4f6f8,#f4f6f8)", marginTop: "24px" }} />
          <div style={{ padding: "22px 24px 12px" }}>
            <span style={{ fontSize: "17px", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px" }}>
              <i className="ph ph-eye" style={{ fontSize: "19px", color: "var(--t-0a6f8a,#0a6f8a)" }} />
              {t.rpPreview}
            </span>
          </div>
          <div style={{ margin: "0 16px", borderRadius: "18px", background: "var(--c-ffffff,#ffffff)", border: "1px solid var(--l-eef0f3,#eef0f3)", boxShadow: "var(--shd,0 10px 24px -14px rgba(10,27,54,.18),0 2px 4px rgba(10,27,54,.04))", padding: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <span style={{ fontSize: "14px", fontWeight: "700", paddingBottom: "12px", borderBottom: "1px dashed var(--l-e3e7ec,#e3e7ec)" }}>{sv2.subject}</span>
            <span style={{ fontSize: "14px", lineHeight: "1.55", color: "var(--t-34496a,#34496a)", whiteSpace: "pre-wrap" }}>{sv2.body}</span>
          </div>
        </div>
        <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", height: "100px", background: "var(--b-ffffff,#ffffff)", boxShadow: "var(--shd,0 -8px 24px -10px rgba(10,27,54,.12))", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", padding: "14px 16px 0 24px", zIndex: "10" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", paddingTop: "4px", minWidth: "0" }}>
            <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{sv2.toLabel}</span>
            <span style={{ fontSize: "15px", fontWeight: "700", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{sv2.toValue}</span>
          </div>
          <button onClick={sv2.send} aria-disabled={sv2.cantSend} style={{ height: "52px", padding: "0 22px", borderRadius: "14px", background: sv2.sendBg, color: "var(--pt-ffffff,#ffffff)", border: "0", boxShadow: "var(--shd,0 8px 18px -8px rgba(10,42,92,.55))", display: "flex", alignItems: "center", gap: "8px", fontFamily: "inherit", fontSize: "16px", fontWeight: "700", cursor: "pointer", flexShrink: "0" }}>
            <i className="ph-bold ph-paper-plane-tilt" style={{ fontSize: "16px" }} />
            {t.rpSend}
          </button>
        </div>
        </>
      ) : null}
    </>
  );
}
