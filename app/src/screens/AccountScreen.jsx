// Account — generated from Prototype v3 (Final).dc.html
export default function AccountScreen({ vm }) {
  const { arRowSub, back, biz, canAddPool, feeLabel, goArchived, is, isOwner, langOptions, notTech, openImportAcct, ownerLbl, ownerName, restartOb, showMoney, soonRows, t, techCount, techRows, themeOptions, unitOptions } = vm;
  return (
    <>
      {is.account ? (
        <div data-screen-label="Account" style={{ position: "absolute", top: "50px", left: "0", right: "0", bottom: "0", overflowY: "auto", scrollbarWidth: "none", paddingBottom: "40px" }}>
          <div style={{ padding: "8px 16px 0" }}>
            <button onClick={back} aria-label={t.back} style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--c-ffffff,#ffffff)", border: "1px solid var(--l-eef0f3,#eef0f3)", boxShadow: "var(--shd,0 2px 8px -2px rgba(10,27,54,.10))", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer" }}><i className="ph-bold ph-arrow-left" style={{ fontSize: "17px" }} /></button>
          </div>
          <div style={{ padding: "16px 24px 0" }}>
            <span style={{ fontSize: "30px", fontWeight: "700", letterSpacing: "-.03em", lineHeight: "1.1" }}>{t.account}</span>
          </div>
          <div style={{ padding: "10px 24px 0" }}>
            <div style={{ minHeight: "60px", display: "flex", alignItems: "center", gap: "14px" }}>
              <i className="ph ph-storefront" style={{ fontSize: "22px", color: "var(--t-a3adbb,#a3adbb)" }} />
              <span style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{t.business}</span>
                <span style={{ fontSize: "16px", fontWeight: "500" }}>{biz}</span>
              </span>
            </div>
            <div style={{ minHeight: "60px", display: "flex", alignItems: "center", gap: "14px", borderTop: "1px dashed var(--l-e3e7ec,#e3e7ec)" }}>
              <i className="ph ph-user" style={{ fontSize: "22px", color: "var(--t-a3adbb,#a3adbb)" }} />
              <span style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{ownerLbl}</span>
                <span style={{ fontSize: "16px", fontWeight: "500" }}>{ownerName}</span>
              </span>
            </div>
            {showMoney ? (
              <div style={{ minHeight: "60px", display: "flex", alignItems: "center", gap: "14px", borderTop: "1px dashed var(--l-e3e7ec,#e3e7ec)" }}>
                <i className="ph ph-currency-dollar" style={{ fontSize: "22px", color: "var(--t-a3adbb,#a3adbb)" }} />
                <span style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{t.defaultFee}</span>
                  <span style={{ fontSize: "16px", fontWeight: "500" }}>{feeLabel}</span>
                </span>
              </div>
            ) : null}
          </div>
          <div style={{ height: "8px", background: "var(--b-f4f6f8,#f4f6f8)", marginTop: "20px" }} />
          <div style={{ padding: "22px 24px 12px" }}>
            <span style={{ fontSize: "17px", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px" }}>
              <i className="ph ph-translate" style={{ fontSize: "19px", color: "var(--t-0a6f8a,#0a6f8a)" }} />
              {t.language}
            </span>
          </div>
          <div style={{ margin: "0 16px", height: "48px", borderRadius: "999px", background: "var(--b-f2f4f7,#f2f4f7)", padding: "4px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px" }}>
            {langOptions.map((o, oIdx) => (
              <button key={oIdx} onClick={o.onClick} aria-pressed={o.on} style={{ borderRadius: "999px", border: "0", background: o.bg, color: o.color, fontFamily: "inherit", fontSize: "15px", fontWeight: "700", cursor: "pointer" }}>{o.label}</button>
            ))}
          </div>
          <div style={{ padding: "22px 24px 4px", display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ fontSize: "17px", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px" }}>
              <i className="ph ph-ruler" style={{ fontSize: "19px", color: "var(--t-0a6f8a,#0a6f8a)" }} />
              {t.units}
            </span>
            <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{t.unSub}</span>
          </div>
          <div style={{ margin: "8px 16px 0", height: "48px", borderRadius: "999px", background: "var(--b-f2f4f7,#f2f4f7)", padding: "4px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px" }}>
            {unitOptions.map((o, oIdx) => (
              <button key={oIdx} onClick={o.onClick} aria-pressed={o.on} style={{ borderRadius: "999px", border: "0", background: o.bg, color: o.color, fontFamily: "inherit", fontSize: "15px", fontWeight: "700", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
                {o.label}
                <span style={{ fontSize: "12px", fontWeight: "600", color: o.subColor }}>{o.sub}</span>
              </button>
            ))}
          </div>
          <div style={{ padding: "22px 24px 4px" }}>
            <span style={{ fontSize: "17px", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px" }}>
              <i className="ph ph-circle-half" style={{ fontSize: "19px", color: "var(--t-0a6f8a,#0a6f8a)" }} />
              {t.appearance}
            </span>
          </div>
          <div style={{ margin: "8px 16px 0", height: "48px", borderRadius: "999px", background: "var(--b-f2f4f7,#f2f4f7)", padding: "4px", display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "4px" }}>
            {themeOptions.map((o, oIdx) => (
              <button key={oIdx} onClick={o.onClick} aria-pressed={o.on} style={{ borderRadius: "999px", border: "0", background: o.bg, color: o.color, fontFamily: "inherit", fontSize: "15px", fontWeight: "700", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
                <i className={o.icon} style={{ fontSize: "15px" }} />
                {o.label}
              </button>
            ))}
          </div>
          {canAddPool ? (
            <>
            <button onClick={openImportAcct} style={{ margin: "24px 16px 0", width: "calc(100% - 32px)", minHeight: "64px", background: "var(--b-f2f4f7,#f2f4f7)", border: "0", borderRadius: "18px", padding: "10px 16px", display: "flex", alignItems: "center", gap: "12px", fontFamily: "inherit", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer", textAlign: "left" }}>
              <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--b-0a2a5c,#0a2a5c)", color: "var(--t-ffffff,#ffffff)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><i className="ph ph-download-simple" style={{ fontSize: "19px" }} /></span>
              <span style={{ flex: "1", display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "15px", fontWeight: "700" }}>{t.importApp}</span>
                <span style={{ fontSize: "13px", fontWeight: "500", color: "var(--t-5b6b82,#5b6b82)" }}>{t.imRowSub}</span>
              </span>
              <i className="ph-bold ph-caret-right" style={{ fontSize: "16px" }} />
            </button>
            {" "}
            <button onClick={goArchived} style={{ margin: "8px 16px 0", width: "calc(100% - 32px)", minHeight: "64px", background: "var(--b-f2f4f7,#f2f4f7)", border: "0", borderRadius: "18px", padding: "10px 16px", display: "flex", alignItems: "center", gap: "12px", fontFamily: "inherit", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer", textAlign: "left" }}>
              <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--c-ffffff,#ffffff)", color: "var(--t-5b6b82,#5b6b82)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><i className="ph ph-archive" style={{ fontSize: "19px" }} /></span>
              <span style={{ flex: "1", display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "15px", fontWeight: "700" }}>{t.arList}</span>
                <span style={{ fontSize: "13px", fontWeight: "500", color: "var(--t-5b6b82,#5b6b82)" }}>{arRowSub}</span>
              </span>
              <i className="ph-bold ph-caret-right" style={{ fontSize: "16px" }} />
            </button>
            </>
          ) : null}
          {isOwner ? (
            <>
            <div style={{ height: "8px", background: "var(--b-f4f6f8,#f4f6f8)", marginTop: "24px" }} />
            <div style={{ padding: "22px 24px 4px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "17px", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px" }}>
                <i className="ph ph-users-three" style={{ fontSize: "19px", color: "var(--t-0a6f8a,#0a6f8a)" }} />
                {t.techs}
              </span>
              <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{techCount}</span>
            </div>
            <div style={{ padding: "0 24px" }}>
              {techRows.map((tc, tcIdx) => (
                <div key={tcIdx} style={{ display: "flex", alignItems: "center", gap: "14px", minHeight: "64px", borderTop: tc.divider }}>
                  <span style={{ width: "40px", height: "40px", flexShrink: "0", borderRadius: "50%", background: "var(--b-e3f1f4,#e3f1f4)", color: "var(--t-0a4f63,#0a4f63)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "700" }}>{tc.initials}</span>
                  <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
                    <span style={{ fontSize: "16px", fontWeight: "500" }}>{tc.name}</span>
                    <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{tc.sub}</span>
                  </div>
                  <a href={tc.tel} aria-label={tc.callLabel} style={{ width: "44px", height: "44px", flexShrink: "0", borderRadius: "50%", background: "var(--c-ffffff,#ffffff)", border: "1px solid var(--l-eef0f3,#eef0f3)", boxShadow: "var(--shd,0 2px 8px -2px rgba(10,27,54,.10))", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--t-0a6f8a,#0a6f8a)", textDecoration: "none" }}><i className="ph ph-phone-call" style={{ fontSize: "19px" }} /></a>
                </div>
              ))}
            </div>
            </>
          ) : null}
          {notTech ? (
            <>
            <div style={{ height: "8px", background: "var(--b-f4f6f8,#f4f6f8)", marginTop: "24px" }} />
            <div style={{ padding: "22px 24px 4px" }}>
              <span style={{ fontSize: "17px", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px" }}>
                <i className="ph ph-rocket-launch" style={{ fontSize: "19px", color: "var(--t-0a6f8a,#0a6f8a)" }} />
                {t.comingSoon}
              </span>
            </div>
            <div style={{ padding: "0 24px" }}>
              {soonRows.map((r, rIdx) => (
                <button key={rIdx} onClick={r.onClick} style={{ width: "100%", minHeight: "54px", display: "flex", alignItems: "center", gap: "14px", border: "0", borderTop: r.divider, background: "none", fontFamily: "inherit", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer", padding: "0", textAlign: "left" }}>
                  <i className={r.iconCls} style={{ fontSize: "22px", color: "var(--t-a3adbb,#a3adbb)" }} />
                  <span style={{ flex: "1", fontSize: "16px", fontWeight: "500" }}>{r.label}</span>
                  <i className="ph ph-caret-right" style={{ fontSize: "16px", color: "var(--t-6b7889,#6b7889)" }} />
                </button>
              ))}
            </div>
            </>
          ) : null}
          <div style={{ height: "8px", background: "var(--b-f4f6f8,#f4f6f8)", marginTop: "16px" }} />
          <div style={{ padding: "12px 24px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <button onClick={restartOb} style={{ height: "44px", background: "none", border: "0", padding: "0", fontFamily: "inherit", fontSize: "15px", fontWeight: "600", color: "var(--t-0a6f8a,#0a6f8a)", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" }}>
              <i className="ph ph-arrow-counter-clockwise" style={{ fontSize: "17px" }} />
              {t.restartOb}
            </button>
            <span style={{ fontSize: "15px", fontWeight: "600", color: "var(--t-5b6b82,#5b6b82)", display: "flex", alignItems: "center", gap: "6px" }}>
              <i className="ph ph-sign-out" style={{ fontSize: "17px" }} />
              {t.signOut}
            </span>
          </div>
        </div>
      ) : null}
    </>
  );
}
