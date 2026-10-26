// Money — generated from Prototype v3 (Final).dc.html
export default function MoneyScreen({ vm }) {
  const { avgCost, byChemSub, chemRows, costGroups, cppRows, cppSub, cppToggleIcon, cppToggleLabel, goAccount, goPrices, goShopping, initials, is, isOwner, m, pricesRowSub, ranges, revGroups, shopRowLabel, showRepairs, stmRows, t, techMo, techMoSub, toggleCpp } = vm;
  return (
    <>
      {is.money ? (
        <div data-screen-label="Money" style={{ position: "absolute", top: "50px", left: "0", right: "0", bottom: "0", overflowY: "auto", scrollbarWidth: "none", paddingBottom: "110px" }}>
          <div style={{ padding: "18px 24px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "32px", fontWeight: "700", letterSpacing: "-.025em", lineHeight: "1.15" }}>{t.money}</span>
            <button onClick={goAccount} aria-label={t.aAccount} style={{ width: "44px", height: "44px", borderRadius: "50%", background: "var(--c-ffffff,#ffffff)", border: "1px solid var(--l-eef0f3,#eef0f3)", boxShadow: "var(--shd,0 2px 8px -2px rgba(10,27,54,.10))", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "inherit", fontSize: "14px", fontWeight: "600", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer" }}>{initials}</button>
          </div>
          <div style={{ margin: "20px 16px 0", height: "44px", borderRadius: "999px", background: "var(--b-f2f4f7,#f2f4f7)", padding: "4px", display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "4px" }}>
            {ranges.map((r, rIdx) => (
              <button key={rIdx} onClick={r.onClick} aria-pressed={r.on} style={{ borderRadius: "999px", border: "0", background: r.bg, color: r.color, fontFamily: "inherit", fontSize: "14px", fontWeight: "700", cursor: "pointer" }}>{r.label}</button>
            ))}
          </div>
          <div style={{ margin: "16px 16px 0", borderRadius: "22px", background: "var(--b-0a2a5c,#0a2a5c)", color: "var(--t-ffffff,#ffffff)", boxShadow: "var(--shd,0 12px 26px -14px rgba(10,42,92,.30),0 2px 6px -2px rgba(10,42,92,.08))", padding: "18px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--t-c9d6e8,#c9d6e8)", display: "flex", alignItems: "center", gap: "6px" }}>
                <i className="ph ph-wallet" style={{ fontSize: "15px" }} />
                {m.netLabel}
              </span>
              <span style={{ fontSize: "40px", fontWeight: "700", letterSpacing: "-.04em" }}>{m.net}</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "8px", borderTop: "1px solid var(--l-ffffff1f,#ffffff1f)", paddingTop: "14px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "12px", fontWeight: "600", color: "var(--t-c9d6e8,#c9d6e8)" }}>{t.revenue}</span>
                <span style={{ fontSize: "16px", fontWeight: "700" }}>{m.rev}</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "12px", fontWeight: "600", color: "var(--t-c9d6e8,#c9d6e8)" }}>{t.chems}</span>
                <span style={{ fontSize: "16px", fontWeight: "700", color: "var(--t-ffc2b3,#ffc2b3)" }}>{m.chem}</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "12px", fontWeight: "600", color: "var(--t-c9d6e8,#c9d6e8)" }}>{t.other}</span>
                <span style={{ fontSize: "16px", fontWeight: "700", color: "var(--t-ffc2b3,#ffc2b3)" }}>{m.other}</span>
              </div>
            </div>
          </div>
          <div style={{ margin: "12px 16px 0", borderRadius: "18px", background: "var(--c-ffffff,#ffffff)", border: "1px solid var(--l-eef0f3,#eef0f3)", boxShadow: "var(--shd,0 2px 8px -2px rgba(10,27,54,.10))", padding: "14px 16px", display: "flex", alignItems: "center", gap: "14px" }}>
            <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--b-e3f1f4,#e3f1f4)", color: "var(--t-0a6f8a,#0a6f8a)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><i className="ph ph-sparkle" style={{ fontSize: "19px" }} /></span>
            <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "15px", fontWeight: "700" }}>{t.moAvg}</span>
              <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{avgCost.sub}</span>
            </span>
            <span style={{ fontSize: "20px", fontWeight: "700", letterSpacing: "-.02em" }}>{avgCost.value}</span>
          </div>
          {showRepairs ? (
            <>
            <div style={{ height: "8px", background: "var(--b-f4f6f8,#f4f6f8)", marginTop: "24px" }} />
            <div style={{ padding: "22px 24px 4px" }}>
              <span style={{ fontSize: "17px", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px" }}>
                <i className="ph ph-trend-up" style={{ fontSize: "19px", color: "var(--t-0a6f8a,#0a6f8a)" }} />
                {t.revenue}
              </span>
            </div>
            <div style={{ padding: "0 24px" }}>
              {revGroups.map((g, gIdx) => (
                <div key={gIdx} style={{ display: "flex", alignItems: "center", gap: "14px", minHeight: "56px", borderTop: g.divider }}>
                  <i className={g.iconCls} style={{ fontSize: "22px", color: "var(--t-a3adbb,#a3adbb)" }} />
                  <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
                    <span style={{ fontSize: "16px", fontWeight: "500" }}>{g.label}</span>
                    <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{g.sub}</span>
                  </div>
                  <span style={{ fontSize: "15px", fontWeight: "700", color: "var(--t-0f5c3b,#0f5c3b)" }}>{g.amount}</span>
                </div>
              ))}
            </div>
            </>
          ) : null}
          <div style={{ height: "8px", background: "var(--b-f4f6f8,#f4f6f8)", marginTop: "24px" }} />
          <div style={{ padding: "22px 24px 4px" }}>
            <span style={{ fontSize: "17px", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px" }}>
              <i className="ph ph-receipt" style={{ fontSize: "19px", color: "var(--t-0a6f8a,#0a6f8a)" }} />
              {t.costs}
            </span>
          </div>
          <div style={{ padding: "0 24px" }}>
            {costGroups.map((g, gIdx) => (
              <div key={gIdx} style={{ display: "flex", alignItems: "center", gap: "14px", minHeight: "56px", borderTop: g.divider }}>
                <i className={g.iconCls} style={{ fontSize: "22px", color: "var(--t-a3adbb,#a3adbb)" }} />
                <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "16px", fontWeight: "500" }}>{g.label}</span>
                  {g.hasSub ? (
                    <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{g.sub}</span>
                  ) : null}
                </div>
                <span style={{ fontSize: "15px", fontWeight: "700", color: g.color }}>{g.amount}</span>
              </div>
            ))}
          </div>
          <button onClick={goShopping} style={{ margin: "12px 16px 0", width: "calc(100% - 32px)", minHeight: "64px", background: "var(--b-fdece8,#fdece8)", border: "0", borderRadius: "18px", padding: "10px 16px", display: "flex", alignItems: "center", gap: "12px", fontFamily: "inherit", color: "var(--t-9a2f17,#9a2f17)", cursor: "pointer", textAlign: "left" }}>
            <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--b-b8391d,#b8391d)", color: "var(--t-ffffff,#ffffff)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><i className="ph ph-shopping-cart-simple" style={{ fontSize: "19px" }} /></span>
            <span style={{ flex: "1", display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "15px", fontWeight: "700" }}>{t.shopping}</span>
              <span style={{ fontSize: "13px", fontWeight: "500" }}>{shopRowLabel}</span>
            </span>
            <i className="ph-bold ph-caret-right" style={{ fontSize: "16px" }} />
          </button>
          <div style={{ height: "8px", background: "var(--b-f4f6f8,#f4f6f8)", marginTop: "24px" }} />
          <div style={{ padding: "22px 24px 4px", display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ fontSize: "17px", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px" }}>
              <i className="ph ph-flask" style={{ fontSize: "19px", color: "var(--t-0a6f8a,#0a6f8a)" }} />
              {t.moByChem}
            </span>
            <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{byChemSub}</span>
          </div>
          <div style={{ padding: "0 24px" }}>
            {chemRows.map((c, cIdx) => (
              <div key={cIdx} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", minHeight: "56px", borderTop: c.divider }}>
                <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "16px", fontWeight: "500" }}>{c.name}</span>
                  <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{c.sub}</span>
                </div>
                <span style={{ fontSize: "15px", fontWeight: "700", color: "var(--t-9a2f17,#9a2f17)" }}>{c.amount}</span>
              </div>
            ))}
          </div>
          <button onClick={goPrices} style={{ margin: "12px 16px 0", width: "calc(100% - 32px)", minHeight: "64px", background: "var(--b-f2f4f7,#f2f4f7)", border: "0", borderRadius: "18px", padding: "10px 16px", display: "flex", alignItems: "center", gap: "12px", fontFamily: "inherit", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer", textAlign: "left" }}>
            <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--b-0a2a5c,#0a2a5c)", color: "var(--t-ffffff,#ffffff)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><i className="ph ph-tag" style={{ fontSize: "19px" }} /></span>
            <span style={{ flex: "1", display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "15px", fontWeight: "700" }}>{t.moPrices}</span>
              <span style={{ fontSize: "13px", fontWeight: "500", color: "var(--t-5b6b82,#5b6b82)" }}>{pricesRowSub}</span>
            </span>
            <i className="ph-bold ph-caret-right" style={{ fontSize: "16px" }} />
          </button>
          <div style={{ height: "8px", background: "var(--b-f4f6f8,#f4f6f8)", marginTop: "24px" }} />
          <div style={{ padding: "22px 24px 4px", display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ fontSize: "17px", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px" }}>
              <i className="ph ph-swimming-pool" style={{ fontSize: "19px", color: "var(--t-0a6f8a,#0a6f8a)" }} />
              {t.moCpp}
            </span>
            <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{cppSub}</span>
          </div>
          <div style={{ padding: "0 24px" }}>
            {cppRows.map((r, rIdx) => (
              <div key={rIdx} onClick={r.onClick} style={{ display: "flex", alignItems: "center", gap: "12px", minHeight: "60px", padding: "8px 0", borderTop: r.divider, cursor: "pointer" }}>
                <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "3px" }}>
                  <span style={{ fontSize: "16px", fontWeight: "500" }}>{r.name}</span>
                  {r.out ? (
                    <span style={{ alignSelf: "flex-start", height: "24px", padding: "0 9px", borderRadius: "999px", background: "var(--b-fdece8,#fdece8)", color: "var(--t-9a2f17,#9a2f17)", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", gap: "5px" }}>
                      <i className="ph-bold ph-warning" style={{ fontSize: "13px" }} />
                      {r.badge}
                    </span>
                  ) : null}
                  <span style={{ fontSize: "13px", color: r.subColor }}>{r.sub}</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "1px" }}>
                  <span style={{ fontSize: "15px", fontWeight: "700", color: r.color }}>{r.cost}</span>
                  <span style={{ fontSize: "12px", color: "var(--t-5b6b82,#5b6b82)" }}>{r.fee}</span>
                </div>
              </div>
            ))}
          </div>
          <button onClick={toggleCpp} style={{ margin: "4px 16px 0", width: "calc(100% - 32px)", height: "44px", borderRadius: "999px", border: "0", background: "var(--b-f2f4f7,#f2f4f7)", color: "var(--t-0a1b36,#0a1b36)", fontFamily: "inherit", fontSize: "14px", fontWeight: "700", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
            {cppToggleLabel}
            <i className={cppToggleIcon} style={{ fontSize: "14px" }} />
          </button>
          {isOwner ? (
            <>
            <div style={{ height: "8px", background: "var(--b-f4f6f8,#f4f6f8)", marginTop: "24px" }} />
            <div style={{ padding: "22px 24px 4px", display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "17px", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px" }}>
                <i className="ph ph-users-three" style={{ fontSize: "19px", color: "var(--t-0a6f8a,#0a6f8a)" }} />
                {t.techTotals}
              </span>
              <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{techMoSub}</span>
            </div>
            <div style={{ padding: "0 24px" }}>
              {techMo.map((r, rIdx) => (
                <div key={rIdx} style={{ display: "flex", alignItems: "center", gap: "12px", minHeight: "64px", padding: "8px 0", borderTop: r.divider }}>
                  <span style={{ width: "40px", height: "40px", flexShrink: "0", borderRadius: "50%", background: "var(--b-e3f1f4,#e3f1f4)", color: "var(--t-0a4f63,#0a4f63)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "700" }}>{r.initials}</span>
                  <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "3px" }}>
                    <span style={{ fontSize: "16px", fontWeight: "500" }}>{r.name}</span>
                    {r.out ? (
                      <span style={{ alignSelf: "flex-start", height: "24px", padding: "0 9px", borderRadius: "999px", background: "var(--b-fdece8,#fdece8)", color: "var(--t-9a2f17,#9a2f17)", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", gap: "5px" }}>
                        <i className="ph-bold ph-warning" style={{ fontSize: "13px" }} />
                        {r.badge}
                      </span>
                    ) : null}
                    <span style={{ fontSize: "13px", color: r.subColor }}>{r.sub}</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "1px" }}>
                    <span style={{ fontSize: "15px", fontWeight: "700", color: r.color }}>{r.cost}</span>
                    <span style={{ fontSize: "12px", color: "var(--t-5b6b82,#5b6b82)" }}>{r.visits}</span>
                  </div>
                </div>
              ))}
            </div>
            </>
          ) : null}
          <div style={{ height: "8px", background: "var(--b-f4f6f8,#f4f6f8)", marginTop: "24px" }} />
          <div style={{ padding: "22px 24px 4px", display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ fontSize: "17px", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px" }}>
              <i className="ph ph-file-text" style={{ fontSize: "19px", color: "var(--t-0a6f8a,#0a6f8a)" }} />
              {t.moStm}
            </span>
            <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{t.moStmSub}</span>
          </div>
          <div style={{ margin: "4px 16px 4px", borderRadius: "14px", background: "var(--b-f4f6f8,#f4f6f8)", padding: "10px 14px", display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "13px", lineHeight: "1.4", color: "var(--t-34496a,#34496a)" }}>
            <i className="ph ph-info" style={{ fontSize: "17px", flexShrink: "0", marginTop: "1px" }} />
            <span style={{ textWrap: "pretty" }}>{t.moStmNote}</span>
          </div>
          <div style={{ padding: "0 24px" }}>
            {stmRows.map((s, sIdx) => (
              <div key={sIdx} style={{ display: "flex", alignItems: "center", gap: "12px", minHeight: "64px", borderTop: s.divider }}>
                <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "16px", fontWeight: "500" }}>{s.name}</span>
                  <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{s.sub}</span>
                </div>
                <div style={{ display: "flex", gap: "6px" }}>
                  <button onClick={s.pdf} aria-label={s.pdfLabel} style={{ height: "44px", padding: "0 12px", borderRadius: "999px", border: "1px solid var(--l-e3e7ec,#e3e7ec)", background: "var(--c-ffffff,#ffffff)", color: "var(--t-0a1b36,#0a1b36)", fontFamily: "inherit", fontSize: "13px", fontWeight: "700", cursor: "pointer", display: "flex", alignItems: "center", gap: "5px" }}>
                    <i className="ph-bold ph-download-simple" style={{ fontSize: "14px" }} />
                    PDF
                  </button>
                  <button onClick={s.csv} aria-label={s.csvLabel} style={{ height: "44px", padding: "0 12px", borderRadius: "999px", border: "1px solid var(--l-e3e7ec,#e3e7ec)", background: "var(--c-ffffff,#ffffff)", color: "var(--t-0a1b36,#0a1b36)", fontFamily: "inherit", fontSize: "13px", fontWeight: "700", cursor: "pointer", display: "flex", alignItems: "center", gap: "5px" }}>
                    <i className="ph-bold ph-download-simple" style={{ fontSize: "14px" }} />
                    CSV
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}
