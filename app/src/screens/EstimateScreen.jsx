// Estimate — generated from Prototype v3 (Final).dc.html
export default function EstimateScreen({ vm }) {
  const { es, estBack, is, t } = vm;
  return (
    <>
      {is.est ? (
        <>
        <div data-screen-label="Send estimate" style={{ position: "absolute", top: "50px", left: "0", right: "0", bottom: "100px", overflowY: "auto", scrollbarWidth: "none", paddingBottom: "24px" }}>
          <div style={{ padding: "8px 16px 0" }}>
            <button onClick={estBack} aria-label={t.back} style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--c-ffffff,#ffffff)", border: "1px solid var(--l-eef0f3,#eef0f3)", boxShadow: "var(--shd,0 2px 8px -2px rgba(10,27,54,.10))", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer" }}><i className="ph-bold ph-arrow-left" style={{ fontSize: "17px" }} /></button>
          </div>
          <div style={{ padding: "16px 24px 0", display: "flex", flexDirection: "column", gap: "4px" }}>
            <span style={{ fontSize: "30px", fontWeight: "700", letterSpacing: "-.03em", lineHeight: "1.1" }}>{t.esTitle}</span>
            <span style={{ fontSize: "15px", color: "var(--t-5b6b82,#5b6b82)" }}>{es.sub}</span>
          </div>
          <div style={{ height: "8px", background: "var(--b-f4f6f8,#f4f6f8)", marginTop: "24px" }} />
          <div style={{ padding: "22px 24px 10px" }}>
            <span style={{ fontSize: "17px", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px" }}>
              <i className="ph ph-user" style={{ fontSize: "19px", color: "var(--t-0a6f8a,#0a6f8a)" }} />
              {t.esCustomer}
            </span>
          </div>
          <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--t-5b6b82,#5b6b82)" }}>{t.fName}</span>
              <input type="text" value={es.name ?? ''} onChange={es.setName} style={{ height: "52px", borderRadius: "14px", border: "1px solid var(--l-e3e7ec,#e3e7ec)", background: "var(--c-ffffff,#ffffff)", padding: "0 14px", fontFamily: "inherit", fontSize: "16px", color: "var(--t-0a1b36,#0a1b36)", outline: "none" }} />
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--t-5b6b82,#5b6b82)" }}>{t.fEmailS}</span>
              <input type="email" value={es.email ?? ''} onChange={es.setEmail} placeholder={t.rpEmailPh} style={{ height: "52px", borderRadius: "14px", border: `1px solid ${es.emailBorder ?? ''}`, background: "var(--c-ffffff,#ffffff)", padding: "0 14px", fontFamily: "inherit", fontSize: "16px", color: "var(--t-0a1b36,#0a1b36)", outline: "none" }} />
            </label>
            {es.bad ? (
              <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--t-9a2f17,#9a2f17)", paddingLeft: "4px" }}>{t.rpBadEmail}</span>
            ) : null}
          </div>
          <div style={{ height: "8px", background: "var(--b-f4f6f8,#f4f6f8)", marginTop: "24px" }} />
          <div style={{ padding: "22px 24px 10px" }}>
            <span style={{ fontSize: "17px", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px" }}>
              <i className="ph ph-swimming-pool" style={{ fontSize: "19px", color: "var(--t-0a6f8a,#0a6f8a)" }} />
              {t.esService}
            </span>
          </div>
          <div style={{ padding: "0 16px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {es.services.map((o, oIdx) => (
              <button key={oIdx} onClick={o.onClick} aria-pressed={o.on} style={{ height: "44px", padding: "0 14px", borderRadius: "999px", border: "0", background: o.bg, color: o.color, fontFamily: "inherit", fontSize: "14px", fontWeight: "700", cursor: "pointer" }}>{o.label}</button>
            ))}
          </div>
          <div style={{ padding: "16px 16px 0", display: "flex", flexDirection: "column", gap: "6px" }}>
            <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--t-5b6b82,#5b6b82)", paddingLeft: "8px" }}>{t.esFreq}</span>
            <div style={{ height: "44px", borderRadius: "999px", background: "var(--b-f2f4f7,#f2f4f7)", padding: "4px", display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "4px" }}>
              {es.freqs.map((o, oIdx) => (
                <button key={oIdx} onClick={o.onClick} aria-pressed={o.on} style={{ borderRadius: "999px", border: "0", background: o.bg, color: o.color, fontFamily: "inherit", fontSize: "13px", fontWeight: "700", cursor: "pointer" }}>{o.label}</button>
              ))}
            </div>
          </div>
          <label style={{ padding: "16px 16px 0", display: "flex", flexDirection: "column", gap: "6px" }}>
            <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--t-5b6b82,#5b6b82)", paddingLeft: "8px" }}>{t.esRate}</span>
            <span style={{ height: "52px", borderRadius: "14px", border: "1px solid var(--l-e3e7ec,#e3e7ec)", background: "var(--c-ffffff,#ffffff)", padding: "0 14px", display: "flex", alignItems: "center", gap: "4px" }}>
              <span style={{ fontSize: "16px", fontWeight: "600", color: "var(--t-5b6b82,#5b6b82)" }}>$</span>
              <input type="text" inputMode="decimal" value={es.rate ?? ''} onChange={es.setRate} style={{ flex: "1", minWidth: "0", height: "48px", border: "0", background: "none", fontFamily: "inherit", fontSize: "16px", fontWeight: "600", color: "var(--t-0a1b36,#0a1b36)", outline: "none" }} />
              <span style={{ fontSize: "14px", color: "var(--t-5b6b82,#5b6b82)" }}>{t.perMo}</span>
            </span>
          </label>
          <div style={{ height: "8px", background: "var(--b-f4f6f8,#f4f6f8)", marginTop: "24px" }} />
          <div style={{ padding: "22px 24px 10px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
            <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "17px", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px" }}>
                <i className="ph ph-scroll" style={{ fontSize: "19px", color: "var(--t-0a6f8a,#0a6f8a)" }} />
                {t.esTerms}
              </span>
              <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{t.esTpl}</span>
            </span>
            {es.viewTerms ? (
              <button onClick={es.editTerms} style={{ height: "44px", padding: "0 2px", border: "0", background: "none", color: "var(--t-0a6f8a,#0a6f8a)", fontFamily: "inherit", fontSize: "14px", fontWeight: "600", cursor: "pointer", flexShrink: "0" }}>{t.esEditTpl}</button>
            ) : null}
          </div>
          {es.viewTerms ? (
            <div style={{ margin: "0 16px", borderRadius: "14px", background: "var(--b-f4f6f8,#f4f6f8)", padding: "14px 16px", fontSize: "14px", lineHeight: "1.5", color: "var(--t-34496a,#34496a)", whiteSpace: "pre-wrap" }}>{es.terms}</div>
          ) : null}
          {es.editingTerms ? (
            <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <textarea value={es.draft ?? ''} onChange={es.setDraft} rows="6" style={{ borderRadius: "14px", border: "1px solid var(--l-e3e7ec,#e3e7ec)", background: "var(--c-ffffff,#ffffff)", padding: "12px 14px", fontFamily: "inherit", fontSize: "15px", lineHeight: "1.5", color: "var(--t-0a1b36,#0a1b36)", outline: "none", resize: "none" }} />
              <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
                <button onClick={es.cancelTerms} style={{ height: "44px", padding: "0 16px", borderRadius: "999px", border: "0", background: "var(--b-f2f4f7,#f2f4f7)", color: "var(--t-0a1b36,#0a1b36)", fontFamily: "inherit", fontSize: "14px", fontWeight: "700", cursor: "pointer" }}>{t.arCancel}</button>
                <button onClick={es.saveTerms} style={{ height: "44px", padding: "0 16px", borderRadius: "999px", border: "0", background: "var(--p-0a2a5c,#0a2a5c)", color: "var(--pt-ffffff,#ffffff)", fontFamily: "inherit", fontSize: "14px", fontWeight: "700", cursor: "pointer" }}>{t.esSaveTpl}</button>
              </div>
            </div>
          ) : null}
          <div style={{ height: "8px", background: "var(--b-f4f6f8,#f4f6f8)", marginTop: "24px" }} />
          <div style={{ padding: "22px 24px 12px" }}>
            <span style={{ fontSize: "17px", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px" }}>
              <i className="ph ph-eye" style={{ fontSize: "19px", color: "var(--t-0a6f8a,#0a6f8a)" }} />
              {t.rpPreview}
            </span>
          </div>
          <div style={{ margin: "0 16px", borderRadius: "18px", background: "var(--c-ffffff,#ffffff)", border: "1px solid var(--l-eef0f3,#eef0f3)", boxShadow: "var(--shd,0 10px 24px -14px rgba(10,27,54,.18),0 2px 4px rgba(10,27,54,.04))", padding: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <span style={{ fontSize: "14px", fontWeight: "700", paddingBottom: "12px", borderBottom: "1px dashed var(--l-e3e7ec,#e3e7ec)" }}>{es.subject}</span>
            <span style={{ fontSize: "14px", lineHeight: "1.55", color: "var(--t-34496a,#34496a)", whiteSpace: "pre-wrap" }}>{es.body}</span>
          </div>
        </div>
        <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", height: "100px", background: "var(--b-ffffff,#ffffff)", boxShadow: "var(--shd,0 -8px 24px -10px rgba(10,27,54,.12))", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", padding: "14px 16px 0 24px", zIndex: "10" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", paddingTop: "4px", minWidth: "0" }}>
            <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{es.toLabel}</span>
            <span style={{ fontSize: "15px", fontWeight: "700", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{es.toValue}</span>
          </div>
          <button onClick={es.send} aria-disabled={es.cantSend} style={{ height: "52px", padding: "0 22px", borderRadius: "14px", background: es.sendBg, color: "var(--pt-ffffff,#ffffff)", border: "0", boxShadow: "var(--shd,0 8px 18px -8px rgba(10,42,92,.55))", display: "flex", alignItems: "center", gap: "8px", fontFamily: "inherit", fontSize: "16px", fontWeight: "700", cursor: "pointer", flexShrink: "0" }}>
            <i className="ph-bold ph-paper-plane-tilt" style={{ fontSize: "16px" }} />
            {t.rpSend}
          </button>
        </div>
        </>
      ) : null}
    </>
  );
}
