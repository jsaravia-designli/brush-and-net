// Pools — generated from Prototype v3 (Final).dc.html
export default function PoolsScreen({ vm }) {
  const { canAddPool, goAccount, initials, is, noPools, openPoolFormPools, poolRows, poolsCount, search, setSearch, t } = vm;
  return (
    <>
      {is.pools ? (
        <div data-screen-label="Pools" style={{ position: "absolute", top: "50px", left: "0", right: "0", bottom: "0", overflowY: "auto", scrollbarWidth: "none", paddingBottom: "110px" }}>
          <div style={{ padding: "18px 24px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "32px", fontWeight: "700", letterSpacing: "-.025em", lineHeight: "1.15" }}>{t.pools}</span>
              <span style={{ fontSize: "15px", fontWeight: "400", color: "var(--t-5b6b82,#5b6b82)" }}>{poolsCount}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {canAddPool ? (
                <button onClick={openPoolFormPools} style={{ height: "44px", padding: "0 16px", borderRadius: "999px", background: "var(--p-0a2a5c,#0a2a5c)", color: "var(--pt-ffffff,#ffffff)", border: "0", boxShadow: "var(--shd,0 6px 14px -6px rgba(10,42,92,.5))", display: "flex", alignItems: "center", gap: "6px", fontFamily: "inherit", fontSize: "14px", fontWeight: "700", cursor: "pointer" }}>
                  <i className="ph-bold ph-plus" style={{ fontSize: "14px" }} />
                  {t.addPool}
                </button>
              ) : null}
              <button onClick={goAccount} aria-label={t.aAccount} style={{ width: "44px", height: "44px", borderRadius: "50%", background: "var(--c-ffffff,#ffffff)", border: "1px solid var(--l-eef0f3,#eef0f3)", boxShadow: "var(--shd,0 2px 8px -2px rgba(10,27,54,.10))", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "inherit", fontSize: "14px", fontWeight: "600", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer" }}>{initials}</button>
            </div>
          </div>
          <div style={{ margin: "20px 16px 0", height: "48px", borderRadius: "14px", background: "var(--b-f2f4f7,#f2f4f7)", display: "flex", alignItems: "center", gap: "10px", padding: "0 14px" }}>
            <i className="ph ph-magnifying-glass" style={{ fontSize: "19px", color: "var(--t-5b6b82,#5b6b82)" }} />
            <input value={search ?? ''} onChange={setSearch} placeholder={t.search} aria-label={t.search} style={{ flex: "1", minWidth: "0", height: "100%", border: "0", background: "none", fontFamily: "inherit", fontSize: "16px", color: "var(--t-0a1b36,#0a1b36)", outline: "none" }} />
          </div>
          <div style={{ padding: "8px 24px 0" }}>
            {poolRows.map((p, pIdx) => (
              <div key={pIdx} onClick={p.onClick} style={{ display: "flex", alignItems: "center", gap: "14px", minHeight: "64px", borderTop: p.divider, cursor: "pointer" }}>
                <span style={{ width: "40px", height: "40px", flexShrink: "0", borderRadius: "50%", background: "var(--b-f2f4f7,#f2f4f7)", color: "var(--t-0a1b36,#0a1b36)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "700" }}>{p.initials}</span>
                <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "16px", fontWeight: "500" }}>{p.name}</span>
                  <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{p.addr}</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px" }}>
                  {p.hasFlag ? (
                    <span style={{ height: "22px", padding: "0 8px", borderRadius: "6px", background: p.flagBg, color: p.flagColor, display: "flex", alignItems: "center", fontSize: "12px", fontWeight: "700" }}>{p.flag}</span>
                  ) : null}
                  <span style={{ fontSize: "12px", color: "var(--t-6b7889,#6b7889)" }}>{p.last}</span>
                </div>
              </div>
            ))}
            {noPools ? (
              <div style={{ minHeight: "64px", display: "flex", alignItems: "center", fontSize: "15px", color: "var(--t-5b6b82,#5b6b82)" }}>{t.noPools}</div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
