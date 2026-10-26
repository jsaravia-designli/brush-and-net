// Onboarding — generated from Prototype v3 (Final).dc.html
export default function OnboardingScreen({ vm }) {
  const { biz, feeChips, feeDown, feeUp, is, langOptions, ob, obBack, obFee, obImported, obNext, obPools, openImport, openPoolFormOb, owner, setBiz, setOwner, t } = vm;
  return (
    <>
      {is.ob ? (
        <>
        <div data-screen-label="Onboarding" style={{ position: "absolute", top: "50px", left: "0", right: "0", bottom: "100px", overflowY: "auto", scrollbarWidth: "none", paddingBottom: "24px" }}>
          <div style={{ padding: "16px 24px 0", display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--t-5b6b82,#5b6b82)" }}>{ob.stepLabel}</span>
            <div style={{ display: "flex", gap: "6px" }}>
              {ob.bars.map((b, bIdx) => (
                <span key={bIdx} style={{ flex: "1", height: "4px", borderRadius: "2px", background: b.bg }} />
              ))}
            </div>
          </div>
          <div style={{ padding: "28px 24px 0", display: "flex", flexDirection: "column", gap: "6px" }}>
            <span style={{ fontSize: "30px", fontWeight: "700", letterSpacing: "-.03em", lineHeight: "1.1", textWrap: "pretty" }}>{ob.title}</span>
            <span style={{ fontSize: "15px", lineHeight: "1.45", color: "var(--t-5b6b82,#5b6b82)" }}>{ob.sub}</span>
          </div>
          {is.ob1 ? (
            <div style={{ padding: "24px 16px 0", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ fontSize: "14px", fontWeight: "600", paddingLeft: "8px" }}>{t.language}</span>
                <div style={{ height: "48px", borderRadius: "999px", background: "var(--b-f2f4f7,#f2f4f7)", padding: "4px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px" }}>
                  {langOptions.map((o, oIdx) => (
                    <button key={oIdx} onClick={o.onClick} aria-pressed={o.on} style={{ borderRadius: "999px", border: "0", background: o.bg, color: o.color, fontFamily: "inherit", fontSize: "15px", fontWeight: "700", cursor: "pointer" }}>{o.label}</button>
                  ))}
                </div>
              </div>
              <label style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ fontSize: "14px", fontWeight: "600", paddingLeft: "8px" }}>{t.bizName}</span>
                <span style={{ height: "54px", borderRadius: "14px", background: "var(--b-f2f4f7,#f2f4f7)", display: "flex", alignItems: "center", gap: "10px", padding: "0 16px" }}>
                  <i className="ph ph-storefront" style={{ fontSize: "20px", color: "var(--t-5b6b82,#5b6b82)" }} />
                  <input value={biz ?? ''} onChange={setBiz} style={{ flex: "1", minWidth: "0", height: "100%", border: "0", background: "none", fontFamily: "inherit", fontSize: "17px", fontWeight: "600", color: "var(--t-0a1b36,#0a1b36)", outline: "none" }} />
                </span>
              </label>
              <label style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ fontSize: "14px", fontWeight: "600", paddingLeft: "8px" }}>{t.yourName}</span>
                <span style={{ height: "54px", borderRadius: "14px", background: "var(--b-f2f4f7,#f2f4f7)", display: "flex", alignItems: "center", gap: "10px", padding: "0 16px" }}>
                  <i className="ph ph-user" style={{ fontSize: "20px", color: "var(--t-5b6b82,#5b6b82)" }} />
                  <input value={owner ?? ''} onChange={setOwner} style={{ flex: "1", minWidth: "0", height: "100%", border: "0", background: "none", fontFamily: "inherit", fontSize: "17px", fontWeight: "600", color: "var(--t-0a1b36,#0a1b36)", outline: "none" }} />
                </span>
              </label>
            </div>
          ) : null}
          {is.ob2 ? (
            <>
            <div style={{ margin: "28px 16px 0", borderRadius: "22px", background: "var(--b-f4f6f8,#f4f6f8)", padding: "28px 18px", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
                <button onClick={feeDown} aria-label="Lower fee" style={{ width: "56px", height: "56px", borderRadius: "50%", background: "var(--c-ffffff,#ffffff)", border: "1px solid var(--l-eef0f3,#eef0f3)", boxShadow: "var(--shd,0 2px 8px -2px rgba(10,27,54,.10))", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer" }}><i className="ph-bold ph-minus" style={{ fontSize: "20px" }} /></button>
                <span style={{ minWidth: "130px", textAlign: "center", fontSize: "48px", fontWeight: "700", letterSpacing: "-.04em" }}>{obFee}</span>
                <button onClick={feeUp} aria-label="Raise fee" style={{ width: "56px", height: "56px", borderRadius: "50%", background: "var(--c-ffffff,#ffffff)", border: "1px solid var(--l-eef0f3,#eef0f3)", boxShadow: "var(--shd,0 2px 8px -2px rgba(10,27,54,.10))", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer" }}><i className="ph-bold ph-plus" style={{ fontSize: "20px" }} /></button>
              </div>
              <span style={{ fontSize: "15px", color: "var(--t-5b6b82,#5b6b82)" }}>{t.perVisit}</span>
            </div>
            <div style={{ margin: "12px 16px 0", display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "6px" }}>
              {feeChips.map((f, fIdx) => (
                <button key={fIdx} onClick={f.onClick} style={{ height: "46px", borderRadius: "999px", border: "0", background: f.bg, color: f.color, fontFamily: "inherit", fontSize: "15px", fontWeight: "700", cursor: "pointer" }}>{f.label}</button>
              ))}
            </div>
            </>
          ) : null}
          {is.ob3 ? (
            <>
            <div style={{ padding: "16px 24px 0" }}>
              {obPools.map((p, pIdx) => (
                <div key={pIdx} style={{ display: "flex", alignItems: "center", gap: "14px", minHeight: "64px", borderTop: p.divider }}>
                  <span style={{ width: "40px", height: "40px", flexShrink: "0", borderRadius: "50%", background: "var(--b-f2f4f7,#f2f4f7)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "700" }}>{p.initials}</span>
                  <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
                    <span style={{ fontSize: "16px", fontWeight: "500" }}>{p.name}</span>
                    <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{p.addr}</span>
                  </div>
                  <span style={{ fontSize: "15px", fontWeight: "700" }}>{p.fee}</span>
                </div>
              ))}
            </div>
            <div style={{ padding: "12px 16px 0", display: "flex", flexDirection: "column", gap: "8px" }}>
              <button onClick={openPoolFormOb} style={{ height: "52px", borderRadius: "14px", border: "1.5px dashed var(--l-c9d0da,#c9d0da)", background: "none", color: "var(--t-34496a,#34496a)", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontFamily: "inherit", fontSize: "15px", fontWeight: "600", cursor: "pointer" }}>
                <i className="ph-bold ph-plus" style={{ fontSize: "15px" }} />
                {t.addPool}
              </button>
              <button onClick={openImport} style={{ minHeight: "56px", borderRadius: "14px", border: "0", background: "var(--b-f4f6f8,#f4f6f8)", display: "flex", alignItems: "center", gap: "12px", padding: "0 16px", fontFamily: "inherit", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer", textAlign: "left" }}>
                <i className="ph ph-download-simple" style={{ fontSize: "20px", color: "var(--t-5b6b82,#5b6b82)" }} />
                <span style={{ flex: "1", display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "15px", fontWeight: "600" }}>{t.importApp}</span>
                  <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{t.imRowSub}</span>
                </span>
                <i className="ph-bold ph-caret-right" style={{ fontSize: "16px", color: "var(--t-5b6b82,#5b6b82)" }} />
              </button>
            </div>
            {obImported.on ? (
              <div style={{ margin: "12px 16px 0", borderRadius: "14px", background: "var(--b-e8f5ee,#e8f5ee)", color: "var(--t-0f5c3b,#0f5c3b)", padding: "12px 14px", display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", fontWeight: "600" }}>
                <i className="ph-fill ph-check-circle" style={{ fontSize: "20px" }} />
                <span style={{ display: "flex", flexDirection: "column" }}>
                  <span>{obImported.title}</span>
                  <span style={{ fontSize: "13px", fontWeight: "500" }}>{obImported.sub}</span>
                </span>
              </div>
            ) : null}
            </>
          ) : null}
        </div>
        <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", height: "100px", background: "var(--b-ffffff,#ffffff)", boxShadow: "var(--shd,0 -8px 24px -10px rgba(10,27,54,.12))", display: "flex", gap: "8px", padding: "14px 16px 0", zIndex: "10" }}>
          {ob.hasBack ? (
            <button onClick={obBack} aria-label={t.back} style={{ width: "52px", height: "52px", flexShrink: "0", borderRadius: "14px", background: "var(--b-f2f4f7,#f2f4f7)", border: "0", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer" }}><i className="ph-bold ph-arrow-left" style={{ fontSize: "18px" }} /></button>
          ) : null}
          <button onClick={obNext} style={{ flex: "1", height: "52px", borderRadius: "14px", border: "0", background: "var(--p-0a2a5c,#0a2a5c)", color: "var(--pt-ffffff,#ffffff)", boxShadow: "var(--shd,0 8px 18px -8px rgba(10,42,92,.55))", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontFamily: "inherit", fontSize: "16px", fontWeight: "700", cursor: "pointer" }}>
            {ob.cta}
            <i className="ph-bold ph-arrow-right" style={{ fontSize: "16px" }} />
          </button>
        </div>
        </>
      ) : null}
    </>
  );
}
