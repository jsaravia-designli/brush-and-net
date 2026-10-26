// Repair job — generated from Prototype v3 (Final).dc.html
export default function RepairJobScreen({ vm }) {
  const { is, isTech, rj, rjBack, showMoney, t } = vm;
  return (
    <>
      {is.repair ? (
        <>
        <div data-screen-label="Repair job" style={{ position: "absolute", top: "50px", left: "0", right: "0", bottom: "100px", overflowY: "auto", scrollbarWidth: "none", paddingBottom: "24px" }}>
          <div style={{ padding: "8px 16px 0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <button onClick={rjBack} aria-label={t.back} style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--c-ffffff,#ffffff)", border: "1px solid var(--l-eef0f3,#eef0f3)", boxShadow: "var(--shd,0 2px 8px -2px rgba(10,27,54,.10))", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer" }}><i className="ph-bold ph-arrow-left" style={{ fontSize: "17px" }} /></button>
            {rj.license ? (
              <span style={{ height: "28px", padding: "0 10px", borderRadius: "999px", background: "var(--b-fdf3dd,#fdf3dd)", color: "var(--t-6e4800,#6e4800)", fontSize: "12px", fontWeight: "700", display: "inline-flex", alignItems: "center", gap: "5px" }}>
                <i className="ph-fill ph-seal-check" style={{ fontSize: "14px" }} />
                {t.rjLicReq}
              </span>
            ) : null}
          </div>
          <div style={{ padding: "16px 24px 0" }}>
            <span style={{ fontSize: "30px", fontWeight: "700", letterSpacing: "-.03em", lineHeight: "1.1" }}>{rj.title}</span>
          </div>
          <button onClick={rj.pickCust} style={{ margin: "14px 16px 0", width: "calc(100% - 32px)", minHeight: "64px", borderRadius: "18px", background: rj.custBg, border: `1px solid ${rj.custBorder ?? ''}`, padding: "10px 14px", display: "flex", alignItems: "center", gap: "12px", fontFamily: "inherit", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer", textAlign: "left" }}>
            <span style={{ width: "40px", height: "40px", flexShrink: "0", borderRadius: "50%", background: "var(--b-e3f1f4,#e3f1f4)", color: "var(--t-0a4f63,#0a4f63)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "700" }}>
              <i className={rj.custIcon} style={{ fontSize: "18px" }} />
              {rj.custIni}
            </span>
            <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "16px", fontWeight: "600", color: rj.custColor }}>{rj.custName}</span>
              <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{rj.custSub}</span>
            </span>
            <span style={{ fontSize: "14px", fontWeight: "600", color: "var(--t-0a6f8a,#0a6f8a)" }}>{rj.custAct}</span>
          </button>
          <div style={{ margin: "16px 16px 0", display: "grid", gridTemplateColumns: "repeat(5,minmax(0,1fr))", gap: "4px" }}>
            {rj.steps.map((s, sIdx) => (
              <div key={sIdx} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ height: "4px", borderRadius: "2px", background: s.bar }} />
                <span style={{ display: "flex", alignItems: "flex-start", gap: "4px", fontSize: "12px", fontWeight: s.weight, lineHeight: "1.2", color: s.color }}>
                  <i className={s.icon} style={{ fontSize: "12px", marginTop: "1px" }} />
                  {s.label}
                </span>
              </div>
            ))}
          </div>
          {rj.hasSent ? (
            <div style={{ margin: "12px 16px 0", borderRadius: "14px", background: "var(--b-fdf3dd,#fdf3dd)", color: "var(--t-6e4800,#6e4800)", padding: "10px 14px", display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", fontWeight: "600" }}>
              <i className="ph ph-paper-plane-tilt" style={{ fontSize: "18px" }} />
              <span style={{ flex: "1" }}>{rj.sentLine}</span>
            </div>
          ) : null}
          {rj.declined ? (
            <div style={{ margin: "12px 16px 0", borderRadius: "14px", background: "var(--b-fdece8,#fdece8)", color: "var(--t-9a2f17,#9a2f17)", padding: "10px 14px", display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", fontWeight: "600" }}>
              <i className="ph ph-x-circle" style={{ fontSize: "18px" }} />
              <span style={{ flex: "1" }}>{rj.declinedLine}</span>
            </div>
          ) : null}
          <div style={{ height: "8px", background: "var(--b-f4f6f8,#f4f6f8)", marginTop: "22px" }} />
          <div style={{ padding: "22px 24px 12px", display: "flex", alignItems: "baseline", gap: "10px" }}>
            <span style={{ fontSize: "13px", fontWeight: "700", color: "var(--t-0a6f8a,#0a6f8a)" }}>01</span>
            <span style={{ fontSize: "17px", fontWeight: "700" }}>{t.rjType}</span>
          </div>
          <div style={{ padding: "0 16px", display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "8px" }}>
            {rj.types.map((x, xIdx) => (
              <button key={xIdx} onClick={x.onClick} aria-pressed={x.on} style={{ gridColumn: x.span, position: "relative", minHeight: "88px", borderRadius: "18px", background: x.bg, border: `1.5px solid ${x.border ?? ''}`, boxShadow: x.shadow, padding: "14px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "10px", fontFamily: "inherit", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer", textAlign: "left" }}>
                <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: x.dot, color: x.dotColor, display: "flex", alignItems: "center", justifyContent: "center" }}><i className={x.icon} style={{ fontSize: "20px" }} /></span>
                <span style={{ fontSize: "15px", fontWeight: "700" }}>{x.label}</span>
                {x.on ? (
                  <span style={{ position: "absolute", top: "12px", right: "12px", width: "24px", height: "24px", borderRadius: "50%", background: "var(--b-0a2a5c,#0a2a5c)", color: "var(--t-ffffff,#ffffff)", display: "flex", alignItems: "center", justifyContent: "center" }}><i className="ph-bold ph-check" style={{ fontSize: "13px" }} /></span>
                ) : null}
              </button>
            ))}
          </div>
          <div style={{ height: "8px", background: "var(--b-f4f6f8,#f4f6f8)", marginTop: "24px" }} />
          <div style={{ padding: "22px 24px 12px", display: "flex", alignItems: "baseline", gap: "10px" }}>
            <span style={{ fontSize: "13px", fontWeight: "700", color: "var(--t-0a6f8a,#0a6f8a)" }}>02</span>
            <span style={{ fontSize: "17px", fontWeight: "700" }}>{t.rjDesc}</span>
          </div>
          <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <textarea value={rj.desc ?? ''} onChange={rj.setDesc} placeholder={t.rjDescPh} rows="4" style={{ borderRadius: "14px", border: "1px solid var(--l-e3e7ec,#e3e7ec)", background: "var(--c-ffffff,#ffffff)", padding: "12px 14px", fontFamily: "inherit", fontSize: "16px", lineHeight: "1.45", color: "var(--t-0a1b36,#0a1b36)", outline: "none", resize: "none" }} />
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {rj.syms.map((y, yIdx) => (
                <button key={yIdx} onClick={y.onClick} style={{ height: "40px", padding: "0 12px", borderRadius: "999px", border: "0", background: y.bg, color: y.color, fontFamily: "inherit", fontSize: "14px", fontWeight: "600", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" }}>
                  <i className={y.icon} style={{ fontSize: "13px" }} />
                  {y.label}
                </button>
              ))}
            </div>
          </div>
          <div style={{ height: "8px", background: "var(--b-f4f6f8,#f4f6f8)", marginTop: "24px" }} />
          <div style={{ padding: "22px 24px 12px", display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "10px" }}>
            <span style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
              <span style={{ fontSize: "13px", fontWeight: "700", color: "var(--t-0a6f8a,#0a6f8a)" }}>03</span>
              <span style={{ fontSize: "17px", fontWeight: "700" }}>{t.rjParts}</span>
            </span>
            <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{rj.partsCount}</span>
          </div>
          <div style={{ padding: "0 16px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {rj.quick.map((q, qIdx) => (
              <button key={qIdx} onClick={q.onClick} style={{ height: "40px", padding: "0 12px", borderRadius: "999px", border: "0", background: "var(--b-f2f4f7,#f2f4f7)", color: "var(--t-0a1b36,#0a1b36)", fontFamily: "inherit", fontSize: "14px", fontWeight: "600", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" }}>
                <i className="ph-bold ph-plus" style={{ fontSize: "12px" }} />
                {q.label}
              </button>
            ))}
            <button onClick={rj.openCustom} style={{ height: "40px", padding: "0 12px", borderRadius: "999px", border: "1.5px dashed var(--l-c9d0da,#c9d0da)", background: "none", color: "var(--t-34496a,#34496a)", fontFamily: "inherit", fontSize: "14px", fontWeight: "600", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" }}>
              <i className="ph-bold ph-plus" style={{ fontSize: "12px" }} />
              {t.rjCustom}
            </button>
          </div>
          {rj.customOpen ? (
            <div style={{ margin: "10px 16px 0", borderRadius: "14px", background: "var(--b-f4f6f8,#f4f6f8)", padding: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <input type="text" value={rj.cName ?? ''} onChange={rj.setCName} placeholder={t.rjPartName} style={{ height: "48px", borderRadius: "12px", border: "1px solid var(--l-e3e7ec,#e3e7ec)", background: "var(--c-ffffff,#ffffff)", padding: "0 12px", fontFamily: "inherit", fontSize: "16px", color: "var(--t-0a1b36,#0a1b36)", outline: "none" }} />
              <div style={{ display: "flex", gap: "8px" }}>
                {showMoney ? (
                  <span style={{ flex: "1", height: "48px", borderRadius: "12px", border: "1px solid var(--l-e3e7ec,#e3e7ec)", background: "var(--c-ffffff,#ffffff)", padding: "0 12px", display: "flex", alignItems: "center", gap: "4px" }}>
                    <span style={{ fontSize: "16px", fontWeight: "600", color: "var(--t-5b6b82,#5b6b82)" }}>$</span>
                    <input type="text" inputMode="decimal" value={rj.cPrice ?? ''} onChange={rj.setCPrice} placeholder={t.rjUnitPrice} style={{ flex: "1", minWidth: "0", height: "44px", border: "0", background: "none", fontFamily: "inherit", fontSize: "16px", color: "var(--t-0a1b36,#0a1b36)", outline: "none" }} />
                  </span>
                ) : null}
                <button onClick={rj.addCustom} style={{ height: "48px", padding: "0 18px", borderRadius: "12px", border: "0", background: rj.cBtnBg, color: "var(--pt-ffffff,#ffffff)", fontFamily: "inherit", fontSize: "15px", fontWeight: "700", cursor: "pointer", flexShrink: "0" }}>{t.shAddCta}</button>
              </div>
            </div>
          ) : null}
          <div style={{ padding: "6px 24px 0" }}>
            {rj.parts.map((p, pIdx) => (
              <div key={pIdx} style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "12px 0", borderTop: p.divider }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ flex: "1", minWidth: "0", fontSize: "16px", fontWeight: "500" }}>{p.name}</span>
                  {showMoney ? (
                    <span style={{ fontSize: "15px", fontWeight: "700" }}>{p.line}</span>
                  ) : null}
                  <button onClick={p.remove} aria-label={t.rjRemove} style={{ width: "36px", height: "36px", borderRadius: "50%", border: "0", background: "var(--b-f2f4f7,#f2f4f7)", color: "var(--t-5b6b82,#5b6b82)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: "0" }}><i className="ph-bold ph-x" style={{ fontSize: "13px" }} /></button>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  {showMoney ? (
                    <span style={{ height: "44px", width: "128px", borderRadius: "12px", border: "1px solid var(--l-e3e7ec,#e3e7ec)", background: "var(--c-ffffff,#ffffff)", padding: "0 10px", display: "flex", alignItems: "center", gap: "3px" }}>
                      <span style={{ fontSize: "15px", fontWeight: "600", color: "var(--t-5b6b82,#5b6b82)" }}>$</span>
                      <input type="text" inputMode="decimal" value={p.price ?? ''} onChange={p.setPrice} aria-label={t.rjUnitPrice} style={{ flex: "1", minWidth: "0", height: "40px", border: "0", background: "none", fontFamily: "inherit", fontSize: "15px", fontWeight: "600", color: "var(--t-0a1b36,#0a1b36)", outline: "none" }} />
                      <span style={{ fontSize: "12px", color: "var(--t-5b6b82,#5b6b82)" }}>{t.rjEach}</span>
                    </span>
                  ) : null}
                  <span style={{ flex: "1" }} />
                  <button onClick={p.minus} aria-label={t.aLess} style={{ width: "44px", height: "44px", borderRadius: "50%", background: "var(--c-ffffff,#ffffff)", border: "1px solid var(--l-e3e7ec,#e3e7ec)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer" }}><i className="ph-bold ph-minus" style={{ fontSize: "15px" }} /></button>
                  <span style={{ minWidth: "28px", textAlign: "center", fontSize: "17px", fontWeight: "700" }}>{p.qty}</span>
                  <button onClick={p.plus} aria-label={t.aMore} style={{ width: "44px", height: "44px", borderRadius: "50%", background: "var(--c-ffffff,#ffffff)", border: "1px solid var(--l-e3e7ec,#e3e7ec)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer" }}><i className="ph-bold ph-plus" style={{ fontSize: "15px" }} /></button>
                </div>
              </div>
            ))}
            {rj.noParts ? (
              <span style={{ display: "block", padding: "12px 0 0", fontSize: "14px", color: "var(--t-5b6b82,#5b6b82)" }}>{t.rjNoParts}</span>
            ) : null}
          </div>
          <div style={{ height: "8px", background: "var(--b-f4f6f8,#f4f6f8)", marginTop: "24px" }} />
          <div style={{ padding: "22px 24px 12px", display: "flex", alignItems: "baseline", gap: "10px" }}>
            <span style={{ fontSize: "13px", fontWeight: "700", color: "var(--t-0a6f8a,#0a6f8a)" }}>04</span>
            <span style={{ fontSize: "17px", fontWeight: "700" }}>{t.rjLabor}</span>
          </div>
          {showMoney ? (
            <div style={{ margin: "0 16px", height: "44px", borderRadius: "999px", background: "var(--b-f2f4f7,#f2f4f7)", padding: "4px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px" }}>
              {rj.laborModes.map((o, oIdx) => (
                <button key={oIdx} onClick={o.onClick} aria-pressed={o.on} style={{ borderRadius: "999px", border: "0", background: o.bg, color: o.color, fontFamily: "inherit", fontSize: "14px", fontWeight: "700", cursor: "pointer" }}>{o.label}</button>
              ))}
            </div>
          ) : null}
          {rj.isHours ? (
            <>
            <div style={{ margin: "12px 16px 0", borderRadius: "18px", background: "var(--b-f4f6f8,#f4f6f8)", padding: "12px 14px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ flex: "1", display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "14px", fontWeight: "600", color: "var(--t-5b6b82,#5b6b82)" }}>{t.rjHours}</span>
                {isTech ? (
                  <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{t.rjHoursTech}</span>
                ) : null}
              </span>
              <button onClick={rj.hMinus} aria-label={t.aLess} style={{ width: "44px", height: "44px", borderRadius: "50%", background: "var(--c-ffffff,#ffffff)", border: "1px solid var(--l-eef0f3,#eef0f3)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer" }}><i className="ph-bold ph-minus" style={{ fontSize: "15px" }} /></button>
              <span style={{ minWidth: "56px", textAlign: "center", fontSize: "18px", fontWeight: "700" }}>{rj.hours}</span>
              <button onClick={rj.hPlus} aria-label={t.aMore} style={{ width: "44px", height: "44px", borderRadius: "50%", background: "var(--c-ffffff,#ffffff)", border: "1px solid var(--l-eef0f3,#eef0f3)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer" }}><i className="ph-bold ph-plus" style={{ fontSize: "15px" }} /></button>
            </div>
            {showMoney ? (
              <div style={{ margin: "8px 16px 0", display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "22px", fontWeight: "600", color: "var(--t-a3adbb,#a3adbb)" }}>×</span>
                <span style={{ flex: "1", height: "52px", borderRadius: "14px", border: "1px solid var(--l-e3e7ec,#e3e7ec)", background: "var(--c-ffffff,#ffffff)", padding: "0 14px", display: "flex", alignItems: "center", gap: "4px" }}>
                  <span style={{ fontSize: "16px", fontWeight: "600", color: "var(--t-5b6b82,#5b6b82)" }}>$</span>
                  <input type="text" inputMode="decimal" value={rj.rate ?? ''} onChange={rj.setRate} aria-label={t.rjRate} style={{ flex: "1", minWidth: "0", height: "48px", border: "0", background: "none", fontFamily: "inherit", fontSize: "16px", fontWeight: "600", color: "var(--t-0a1b36,#0a1b36)", outline: "none" }} />
                  <span style={{ fontSize: "14px", color: "var(--t-5b6b82,#5b6b82)" }}>{t.rjPerHr}</span>
                </span>
                <span style={{ fontSize: "16px", fontWeight: "700", minWidth: "76px", textAlign: "right" }}>{rj.laborAmt}</span>
              </div>
            ) : null}
            </>
          ) : null}
          {rj.isFlat ? (
            <label style={{ margin: "12px 16px 0", display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--t-5b6b82,#5b6b82)", paddingLeft: "8px" }}>{t.rjFlatAmt}</span>
              <span style={{ height: "52px", borderRadius: "14px", border: "1px solid var(--l-e3e7ec,#e3e7ec)", background: "var(--c-ffffff,#ffffff)", padding: "0 14px", display: "flex", alignItems: "center", gap: "4px" }}>
                <span style={{ fontSize: "16px", fontWeight: "600", color: "var(--t-5b6b82,#5b6b82)" }}>$</span>
                <input type="text" inputMode="decimal" value={rj.flat ?? ''} onChange={rj.setFlat} style={{ flex: "1", minWidth: "0", height: "48px", border: "0", background: "none", fontFamily: "inherit", fontSize: "16px", fontWeight: "600", color: "var(--t-0a1b36,#0a1b36)", outline: "none" }} />
              </span>
            </label>
          ) : null}
          {showMoney ? (
            <div style={{ margin: "20px 16px 0", borderRadius: "22px", background: "var(--b-0a2a5c,#0a2a5c)", color: "var(--t-ffffff,#ffffff)", boxShadow: "var(--shd,0 12px 26px -14px rgba(10,42,92,.30),0 2px 6px -2px rgba(10,42,92,.08))", padding: "18px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--t-c9d6e8,#c9d6e8)", display: "flex", alignItems: "center", gap: "6px" }}>
                  <i className="ph ph-calculator" style={{ fontSize: "15px" }} />
                  {t.rjTotal}
                </span>
                <span style={{ fontSize: "40px", fontWeight: "700", letterSpacing: "-.04em" }}>{rj.total}</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "8px", borderTop: "1px solid var(--l-ffffff1f,#ffffff1f)", paddingTop: "14px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "600", color: "var(--t-c9d6e8,#c9d6e8)" }}>{rj.partsLbl}</span>
                  <span style={{ fontSize: "16px", fontWeight: "700" }}>{rj.partsAmt}</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "600", color: "var(--t-c9d6e8,#c9d6e8)" }}>{rj.laborLbl}</span>
                  <span style={{ fontSize: "16px", fontWeight: "700" }}>{rj.laborAmt}</span>
                </div>
              </div>
            </div>
          ) : null}
          <div style={{ height: "8px", background: "var(--b-f4f6f8,#f4f6f8)", marginTop: "24px" }} />
          <div style={{ padding: "22px 24px 12px", display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "10px" }}>
            <span style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
              <span style={{ fontSize: "13px", fontWeight: "700", color: "var(--t-0a6f8a,#0a6f8a)" }}>05</span>
              <span style={{ fontSize: "17px", fontWeight: "700" }}>{t.rjPhotos}</span>
            </span>
            <span style={{ height: "22px", padding: "0 8px", borderRadius: "999px", background: "var(--b-f2f4f7,#f2f4f7)", color: "var(--t-5b6b82,#5b6b82)", fontSize: "11px", fontWeight: "700", display: "inline-flex", alignItems: "center" }}>{t.optional}</span>
          </div>
          <div style={{ padding: "0 16px", display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "10px" }}>
            {rj.photos.map((ph, phIdx) => (
              <div key={phIdx} style={{ position: "relative" }}>
                <button onClick={ph.add} aria-label={ph.label} style={{ width: "100%", aspectRatio: "4 / 3", borderRadius: "16px", background: ph.bg, border: `1.5px ${ph.borderStyle ?? ''} ${ph.border ?? ''}`, display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "space-between", padding: "10px 12px", fontFamily: "inherit", color: "var(--t-0a1b36,#0a1b36)", cursor: ph.cursor, textAlign: "left" }}>
                  <i className={ph.icon} style={{ fontSize: "20px", color: ph.iconColor }} />
                  <span style={{ fontSize: "13px", fontWeight: "700", color: ph.labelColor }}>{ph.label}</span>
                </button>
                {ph.has ? (
                  <button onClick={ph.remove} aria-label={t.removePhoto} style={{ position: "absolute", top: "-8px", right: "-8px", width: "36px", height: "36px", border: "0", background: "none", padding: "0", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                    <span style={{ width: "24px", height: "24px", borderRadius: "50%", background: "var(--b-0a1b36,#0a1b36)", color: "var(--t-ffffff,#ffffff)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--shd,0 2px 6px rgba(10,27,54,.25))" }}><i className="ph-bold ph-x" style={{ fontSize: "12px" }} /></span>
                  </button>
                ) : null}
              </div>
            ))}
          </div>
          <div style={{ height: "8px", background: "var(--b-f4f6f8,#f4f6f8)", marginTop: "24px" }} />
          <div style={{ padding: "22px 24px 12px", display: "flex", alignItems: "baseline", gap: "10px" }}>
            <span style={{ fontSize: "13px", fontWeight: "700", color: "var(--t-0a6f8a,#0a6f8a)" }}>06</span>
            <span style={{ fontSize: "17px", fontWeight: "700" }}>{t.rjSched}</span>
          </div>
          <div style={{ padding: "0 16px", display: "grid", gridTemplateColumns: "minmax(0,1.3fr) minmax(0,1fr)", gap: "8px" }}>
            <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--t-5b6b82,#5b6b82)", paddingLeft: "8px" }}>{t.rjDate}</span>
              <input type="date" value={rj.date ?? ''} onChange={rj.setDate} style={{ height: "52px", borderRadius: "14px", border: "1px solid var(--l-e3e7ec,#e3e7ec)", background: "var(--c-ffffff,#ffffff)", padding: "0 12px", fontFamily: "inherit", fontSize: "16px", color: "var(--t-0a1b36,#0a1b36)", outline: "none", minWidth: "0" }} />
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--t-5b6b82,#5b6b82)", paddingLeft: "8px" }}>{t.rjTime}</span>
              <input type="time" value={rj.time ?? ''} onChange={rj.setTime} style={{ height: "52px", borderRadius: "14px", border: "1px solid var(--l-e3e7ec,#e3e7ec)", background: "var(--c-ffffff,#ffffff)", padding: "0 12px", fontFamily: "inherit", fontSize: "16px", color: "var(--t-0a1b36,#0a1b36)", outline: "none", minWidth: "0" }} />
            </label>
          </div>
          {rj.canRoute ? (
            <button onClick={rj.addRoute} style={{ margin: "10px 16px 0", width: "calc(100% - 32px)", height: "52px", borderRadius: "14px", border: "0", background: "var(--p-0a2a5c,#0a2a5c)", color: "var(--pt-ffffff,#ffffff)", boxShadow: "var(--shd,0 8px 18px -8px rgba(10,42,92,.55))", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontFamily: "inherit", fontSize: "16px", fontWeight: "700", cursor: "pointer" }}>
              <i className="ph-bold ph-map-pin-plus" style={{ fontSize: "17px" }} />
              {rj.routeCta}
            </button>
          ) : null}
          {rj.routed ? (
            <div style={{ margin: "10px 16px 0", minHeight: "52px", borderRadius: "14px", background: "var(--b-e8f5ee,#e8f5ee)", color: "var(--t-0f5c3b,#0f5c3b)", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: "15px", fontWeight: "700", padding: "0 12px", textAlign: "center" }}>
              <i className="ph-fill ph-check-circle" style={{ fontSize: "18px" }} />
              {rj.routedLbl}
            </div>
          ) : null}
          {rj.routeLocked ? (
            <span style={{ display: "flex", alignItems: "center", gap: "6px", padding: "10px 24px 0", fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>
              <i className="ph ph-lock-simple" style={{ fontSize: "14px" }} />
              {t.rjRouteLocked}
            </span>
          ) : null}
          <div style={{ height: "8px", background: "var(--b-f4f6f8,#f4f6f8)", marginTop: "24px" }} />
          <div style={{ padding: "22px 24px 4px", display: "flex", alignItems: "baseline", gap: "10px" }}>
            <span style={{ fontSize: "13px", fontWeight: "700", color: "var(--t-0a6f8a,#0a6f8a)" }}>07</span>
            <span style={{ fontSize: "17px", fontWeight: "700" }}>{t.rjLicense}</span>
          </div>
          <button onClick={rj.toggleLic} aria-pressed={rj.license} style={{ margin: "0 24px", width: "calc(100% - 48px)", minHeight: "64px", display: "flex", alignItems: "center", gap: "14px", background: "none", border: "0", padding: "0", fontFamily: "inherit", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer", textAlign: "left" }}>
            <i className="ph ph-seal-check" style={{ fontSize: "22px", color: "var(--t-5b6b82,#5b6b82)" }} />
            <span style={{ flex: "1", display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "16px", fontWeight: "500" }}>{t.rjNeedsLic}</span>
              <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{t.rjNeedsLicSub}</span>
            </span>
            <span style={{ width: "46px", height: "28px", flexShrink: "0", borderRadius: "999px", background: rj.licTrack, padding: "3px", display: "flex", transition: "background .15s" }}>
              <span style={{ width: "22px", height: "22px", borderRadius: "50%", background: "var(--k-ffffff,#ffffff)", boxShadow: "var(--shd,0 1px 3px rgba(10,27,54,.25))", marginLeft: rj.licKnob, transition: "margin .15s" }} />
            </span>
          </button>
          {rj.hasErr ? (
            <span style={{ display: "flex", alignItems: "center", gap: "6px", padding: "16px 24px 0", fontSize: "14px", fontWeight: "600", color: "var(--t-9a2f17,#9a2f17)" }}>
              <i className="ph-bold ph-warning" style={{ fontSize: "15px" }} />
              {rj.err}
            </span>
          ) : null}
        </div>
        <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", height: "100px", background: "var(--b-ffffff,#ffffff)", boxShadow: "var(--shd,0 -8px 24px -10px rgba(10,27,54,.12))", padding: "14px 16px 0", zIndex: "10", display: "flex", gap: "8px", alignItems: "flex-start" }}>
          {rj.showDecline ? (
            <button onClick={rj.decline} style={{ flex: "1", minWidth: "0", height: "52px", padding: "0 8px", borderRadius: "14px", border: "1.5px solid var(--l-f3c9bf,#f3c9bf)", background: "var(--c-ffffff,#ffffff)", color: "var(--t-9a2f17,#9a2f17)", fontFamily: "inherit", fontSize: "15px", lineHeight: "1.15", fontWeight: "700", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
              <i className="ph-bold ph-x" style={{ fontSize: "15px" }} />
              {t.rjMarkDeclined}
            </button>
          ) : null}
          {rj.showSave ? (
            <button onClick={rj.save} style={{ flex: "1", minWidth: "0", height: "52px", padding: "0 8px", borderRadius: "14px", border: "1.5px solid var(--l-d5dbe3,#d5dbe3)", background: "var(--c-ffffff,#ffffff)", color: "var(--t-0a2a5c,#0a2a5c)", fontFamily: "inherit", fontSize: "15px", lineHeight: "1.15", fontWeight: "700", cursor: "pointer" }}>{t.rjSaveDraft}</button>
          ) : null}
          <button onClick={rj.primary} aria-disabled={rj.primaryOff} style={{ flex: "1.4", minWidth: "0", height: "52px", padding: "0 8px", borderRadius: "14px", border: "0", background: rj.primaryBg, color: rj.primaryColor, boxShadow: "var(--shd,0 8px 18px -8px rgba(10,42,92,.45))", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontFamily: "inherit", fontSize: "15px", lineHeight: "1.15", fontWeight: "700", cursor: "pointer" }}>
            <i className={rj.primaryIcon} style={{ fontSize: "16px", flexShrink: "0" }} />
            {rj.primaryLbl}
          </button>
        </div>
        </>
      ) : null}
    </>
  );
}
