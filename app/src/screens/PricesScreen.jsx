// Prices — generated from Prototype v3 (Final).dc.html
export default function PricesScreen({ vm }) {
  const { back, is, priceRows, resetPrices, t } = vm;
  return (
    <>
      {is.prices ? (
        <div data-screen-label="Chemical prices" style={{ position: "absolute", top: "50px", left: "0", right: "0", bottom: "0", overflowY: "auto", scrollbarWidth: "none", paddingBottom: "40px" }}>
          <div style={{ padding: "8px 16px 0" }}>
            <button onClick={back} aria-label={t.back} style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--c-ffffff,#ffffff)", border: "1px solid var(--l-eef0f3,#eef0f3)", boxShadow: "var(--shd,0 2px 8px -2px rgba(10,27,54,.10))", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer" }}><i className="ph-bold ph-arrow-left" style={{ fontSize: "17px" }} /></button>
          </div>
          <div style={{ padding: "16px 24px 0", display: "flex", flexDirection: "column", gap: "4px" }}>
            <span style={{ fontSize: "30px", fontWeight: "700", letterSpacing: "-.03em", lineHeight: "1.1" }}>{t.moPrices}</span>
            <span style={{ fontSize: "15px", color: "var(--t-5b6b82,#5b6b82)" }}>{t.moPricesSub}</span>
          </div>
          <div style={{ margin: "16px 16px 0", borderRadius: "14px", background: "var(--b-f4f6f8,#f4f6f8)", padding: "12px 14px", display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14px", lineHeight: "1.45", color: "var(--t-34496a,#34496a)" }}>
            <i className="ph ph-info" style={{ fontSize: "18px", color: "var(--t-0a6f8a,#0a6f8a)", flexShrink: "0", marginTop: "1px" }} />
            <span style={{ textWrap: "pretty" }}>{t.moPricesNote}</span>
          </div>
          <div style={{ padding: "10px 24px 0" }}>
            {priceRows.map((p, pIdx) => (
              <label key={pIdx} style={{ display: "flex", alignItems: "center", gap: "12px", minHeight: "64px", borderTop: p.divider }}>
                <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "16px", fontWeight: "500" }}>{p.name}</span>
                  {p.changed ? (
                    <span style={{ fontSize: "12px", fontWeight: "600", color: "var(--t-0a6f8a,#0a6f8a)" }}>{p.was}</span>
                  ) : null}
                </span>
                <span style={{ height: "44px", width: "104px", borderRadius: "12px", border: "1.5px solid var(--l-e3e7ec,#e3e7ec)", background: "var(--c-ffffff,#ffffff)", display: "flex", alignItems: "center", padding: "0 10px", gap: "2px" }}>
                  <span style={{ fontSize: "16px", fontWeight: "600", color: "var(--t-5b6b82,#5b6b82)" }}>$</span>
                  <input value={p.val ?? ''} onChange={p.onChange} inputMode="decimal" aria-label={p.name} style={{ flex: "1", minWidth: "0", border: "0", outline: "0", background: "none", fontFamily: "inherit", fontSize: "16px", fontWeight: "700", color: "var(--t-0a1b36,#0a1b36)", textAlign: "right" }} />
                </span>
                <span style={{ width: "40px", fontSize: "14px", color: "var(--t-5b6b82,#5b6b82)" }}>{p.unit}</span>
              </label>
            ))}
          </div>
          <button onClick={resetPrices} style={{ margin: "16px 16px 0", width: "calc(100% - 32px)", height: "48px", borderRadius: "999px", border: "0", background: "var(--b-f2f4f7,#f2f4f7)", color: "var(--t-0a1b36,#0a1b36)", fontFamily: "inherit", fontSize: "14px", fontWeight: "700", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
            <i className="ph-bold ph-arrow-counter-clockwise" style={{ fontSize: "14px" }} />
            {t.moReset}
          </button>
        </div>
      ) : null}
    </>
  );
}
