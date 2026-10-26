// Repair quote — generated from Prototype v3 (Final).dc.html
export default function RepairQuoteScreen({ vm }) {
  const { is, qv, t } = vm;
  return (
    <>
      {is.rjQuote ? (
        <>
        <div data-screen-label="Repair quote" style={{ position: "absolute", top: "50px", left: "0", right: "0", bottom: "100px", overflowY: "auto", scrollbarWidth: "none", paddingBottom: "24px" }}>
          <div style={{ padding: "8px 16px 0" }}>
            <button onClick={qv.back} aria-label={t.back} style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--c-ffffff,#ffffff)", border: "1px solid var(--l-eef0f3,#eef0f3)", boxShadow: "var(--shd,0 2px 8px -2px rgba(10,27,54,.10))", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer" }}><i className="ph-bold ph-arrow-left" style={{ fontSize: "17px" }} /></button>
          </div>
          <div style={{ padding: "16px 24px 0", display: "flex", flexDirection: "column", gap: "4px" }}>
            <span style={{ fontSize: "30px", fontWeight: "700", letterSpacing: "-.03em", lineHeight: "1.1" }}>{t.rjQuote}</span>
            <span style={{ fontSize: "15px", color: "var(--t-5b6b82,#5b6b82)" }}>{qv.sub}</span>
          </div>
          <div style={{ height: "8px", background: "var(--b-f4f6f8,#f4f6f8)", marginTop: "24px" }} />
          <div style={{ padding: "22px 24px 10px" }}>
            <span style={{ fontSize: "17px", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px" }}>
              <i className="ph ph-user" style={{ fontSize: "19px", color: "var(--t-0a6f8a,#0a6f8a)" }} />
              {t.esCustomer}
            </span>
          </div>
          <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ padding: "0 8px", display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "16px", fontWeight: "600" }}>{qv.name}</span>
              <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{qv.addr}</span>
            </div>
            <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--t-5b6b82,#5b6b82)" }}>{t.fEmailS}</span>
              <input type="email" value={qv.email ?? ''} onChange={qv.setEmail} placeholder={t.rpEmailPh} style={{ height: "52px", borderRadius: "14px", border: `1px solid ${qv.emailBorder ?? ''}`, background: "var(--c-ffffff,#ffffff)", padding: "0 14px", fontFamily: "inherit", fontSize: "16px", color: "var(--t-0a1b36,#0a1b36)", outline: "none" }} />
            </label>
            {qv.bad ? (
              <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--t-9a2f17,#9a2f17)", paddingLeft: "4px" }}>{t.rpBadEmail}</span>
            ) : null}
          </div>
          <div style={{ height: "8px", background: "var(--b-f4f6f8,#f4f6f8)", marginTop: "24px" }} />
          <div style={{ padding: "22px 24px 10px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "17px", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px" }}>
              <i className={qv.typeIcon} style={{ fontSize: "19px", color: "var(--t-0a6f8a,#0a6f8a)" }} />
              {qv.type}
            </span>
            {qv.license ? (
              <span style={{ height: "26px", padding: "0 10px", borderRadius: "999px", background: "var(--b-fdf3dd,#fdf3dd)", color: "var(--t-6e4800,#6e4800)", fontSize: "12px", fontWeight: "700", display: "inline-flex", alignItems: "center", gap: "5px", flexShrink: "0" }}>
                <i className="ph-fill ph-seal-check" style={{ fontSize: "13px" }} />
                {t.rjLicReq}
              </span>
            ) : null}
          </div>
          {qv.hasDesc ? (
            <span style={{ display: "block", padding: "0 24px", fontSize: "15px", lineHeight: "1.5", color: "var(--t-34496a,#34496a)", textWrap: "pretty" }}>{qv.desc}</span>
          ) : null}
          <div style={{ margin: "14px 16px 0", borderRadius: "18px", background: "var(--b-f8f9fb,#f8f9fb)", border: "1px solid var(--l-eef0f3,#eef0f3)", padding: "6px 14px" }}>
            {qv.lines.map((l, lIdx) => (
              <div key={lIdx} style={{ display: "flex", alignItems: "center", gap: "10px", minHeight: "48px", borderTop: l.divider }}>
                <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "15px", fontWeight: "500" }}>{l.name}</span>
                  <span style={{ fontSize: "12px", color: "var(--t-5b6b82,#5b6b82)" }}>{l.qty}</span>
                </span>
                <span style={{ fontSize: "15px", fontWeight: "700" }}>{l.amt}</span>
              </div>
            ))}
            {qv.license ? (
              <div style={{ display: "flex", alignItems: "center", gap: "10px", minHeight: "48px", borderTop: "1px dashed var(--l-e3e7ec,#e3e7ec)", color: "var(--t-6e4800,#6e4800)" }}>
                <i className="ph-fill ph-seal-check" style={{ fontSize: "17px" }} />
                <span style={{ flex: "1", fontSize: "14px", fontWeight: "600" }}>{t.rjLicLine}</span>
              </div>
            ) : null}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: "56px", borderTop: "1px solid var(--l-dde2e8,#dde2e8)" }}>
              <span style={{ fontSize: "16px", fontWeight: "700" }}>{t.rjTotal}</span>
              <span style={{ fontSize: "22px", fontWeight: "700", letterSpacing: "-.02em" }}>{qv.total}</span>
            </div>
          </div>
          <div style={{ height: "8px", background: "var(--b-f4f6f8,#f4f6f8)", marginTop: "24px" }} />
          <div style={{ padding: "22px 24px 10px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
            <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "17px", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px" }}>
                <i className="ph ph-scroll" style={{ fontSize: "19px", color: "var(--t-0a6f8a,#0a6f8a)" }} />
                {t.esTerms}
              </span>
              <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{t.rjTplShared}</span>
            </span>
            {qv.viewTerms ? (
              <button onClick={qv.editTerms} style={{ height: "44px", padding: "0 2px", border: "0", background: "none", color: "var(--t-0a6f8a,#0a6f8a)", fontFamily: "inherit", fontSize: "14px", fontWeight: "600", cursor: "pointer", flexShrink: "0" }}>{t.esEditTpl}</button>
            ) : null}
          </div>
          {qv.viewTerms ? (
            <div style={{ margin: "0 16px", borderRadius: "14px", background: "var(--b-f4f6f8,#f4f6f8)", padding: "14px 16px", fontSize: "14px", lineHeight: "1.5", color: "var(--t-34496a,#34496a)", whiteSpace: "pre-wrap" }}>{qv.terms}</div>
          ) : null}
          {qv.editingTerms ? (
            <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <textarea value={qv.draft ?? ''} onChange={qv.setDraft} rows="6" style={{ borderRadius: "14px", border: "1px solid var(--l-e3e7ec,#e3e7ec)", background: "var(--c-ffffff,#ffffff)", padding: "12px 14px", fontFamily: "inherit", fontSize: "15px", lineHeight: "1.5", color: "var(--t-0a1b36,#0a1b36)", outline: "none", resize: "none" }} />
              <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
                <button onClick={qv.cancelTerms} style={{ height: "44px", padding: "0 16px", borderRadius: "999px", border: "0", background: "var(--b-f2f4f7,#f2f4f7)", color: "var(--t-0a1b36,#0a1b36)", fontFamily: "inherit", fontSize: "14px", fontWeight: "700", cursor: "pointer" }}>{t.arCancel}</button>
                <button onClick={qv.saveTerms} style={{ height: "44px", padding: "0 16px", borderRadius: "999px", border: "0", background: "var(--p-0a2a5c,#0a2a5c)", color: "var(--pt-ffffff,#ffffff)", fontFamily: "inherit", fontSize: "14px", fontWeight: "700", cursor: "pointer" }}>{t.esSaveTpl}</button>
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
            <span style={{ fontSize: "14px", fontWeight: "700", paddingBottom: "12px", borderBottom: "1px dashed var(--l-e3e7ec,#e3e7ec)" }}>{qv.subject}</span>
            <span style={{ fontSize: "14px", lineHeight: "1.55", color: "var(--t-34496a,#34496a)", whiteSpace: "pre-wrap" }}>{qv.body}</span>
          </div>
        </div>
        <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", height: "100px", background: "var(--b-ffffff,#ffffff)", boxShadow: "var(--shd,0 -8px 24px -10px rgba(10,27,54,.12))", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", padding: "14px 16px 0 24px", zIndex: "10" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", paddingTop: "4px", minWidth: "0" }}>
            <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{qv.toLabel}</span>
            <span style={{ fontSize: "15px", fontWeight: "700", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{qv.toValue}</span>
          </div>
          <button onClick={qv.send} aria-disabled={qv.cantSend} style={{ height: "52px", padding: "0 22px", borderRadius: "14px", background: qv.sendBg, color: "var(--pt-ffffff,#ffffff)", border: "0", boxShadow: "var(--shd,0 8px 18px -8px rgba(10,42,92,.55))", display: "flex", alignItems: "center", gap: "8px", fontFamily: "inherit", fontSize: "16px", fontWeight: "700", cursor: "pointer", flexShrink: "0" }}>
            <i className="ph-bold ph-paper-plane-tilt" style={{ fontSize: "16px" }} />
            {t.rpSend}
          </button>
        </div>
        </>
      ) : null}
    </>
  );
}
