// Pool detail — generated from Prototype v3 (Final).dc.html
export default function PoolDetailScreen({ vm }) {
  const { back, canAddPool, is, pd, showMoney, t } = vm;
  return (
    <>
      {is.pool ? (
        <div data-screen-label="Pool detail" style={{ position: "absolute", top: "50px", left: "0", right: "0", bottom: "0", overflowY: "auto", scrollbarWidth: "none", paddingBottom: "40px" }}>
          <div style={{ padding: "8px 16px 0" }}>
            <button onClick={back} aria-label={t.back} style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--c-ffffff,#ffffff)", border: "1px solid var(--l-eef0f3,#eef0f3)", boxShadow: "var(--shd,0 2px 8px -2px rgba(10,27,54,.10))", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer" }}><i className="ph-bold ph-arrow-left" style={{ fontSize: "17px" }} /></button>
          </div>
          <div style={{ padding: "16px 24px 0", display: "flex", flexDirection: "column", gap: "4px" }}>
            <span style={{ fontSize: "30px", fontWeight: "700", letterSpacing: "-.03em", lineHeight: "1.1" }}>{pd.name}</span>
            <span style={{ fontSize: "15px", color: "var(--t-5b6b82,#5b6b82)" }}>{pd.addr}</span>
          </div>
          <div style={{ padding: "14px 24px 0", display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {pd.schedEdit ? (
              <button onClick={pd.openSched} aria-label={t.scEditL} style={{ height: "30px", padding: "0 10px 0 12px", borderRadius: "999px", border: "1px solid var(--l-cfe3ea,#cfe3ea)", background: "var(--b-e3f1f4,#e3f1f4)", color: "var(--t-0a3f4f,#0a3f4f)", display: "flex", alignItems: "center", gap: "6px", fontFamily: "inherit", fontSize: "13px", fontWeight: "700", cursor: "pointer" }}>
                <i className="ph ph-calendar-blank" style={{ fontSize: "14px" }} />
                {pd.schedLabel}
                <i className="ph-bold ph-pencil-simple" style={{ fontSize: "12px" }} />
              </button>
            ) : null}
            {pd.schedView ? (
              <span style={{ height: "30px", padding: "0 12px", borderRadius: "999px", background: "var(--b-f2f4f7,#f2f4f7)", color: "var(--t-0a1b36,#0a1b36)", display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: "600" }}>
                <i className="ph ph-calendar-blank" style={{ fontSize: "14px", color: "var(--t-5b6b82,#5b6b82)" }} />
                {pd.schedLabel}
              </span>
            ) : null}
            {pd.chips.map((c, cIdx) => (
              <span key={cIdx} style={{ height: "30px", padding: "0 12px", borderRadius: "999px", background: c.bg, color: c.color, display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: "600" }}>
                <i className={c.iconCls} style={{ fontSize: "14px", color: c.ic }} />
                {c.label}
              </span>
            ))}
          </div>
          <div style={{ padding: "16px 16px 0" }}>
            {pd.canAdd ? (
              <button onClick={pd.addToday} style={{ width: "100%", height: "52px", borderRadius: "14px", background: "var(--p-0a2a5c,#0a2a5c)", color: "var(--pt-ffffff,#ffffff)", border: "0", boxShadow: "var(--shd,0 8px 18px -8px rgba(10,42,92,.55))", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontFamily: "inherit", fontSize: "16px", fontWeight: "700", cursor: "pointer" }}>
                <i className="ph-bold ph-plus" style={{ fontSize: "15px" }} />
                {t.addToToday}
              </button>
            ) : null}
            {pd.onToday ? (
              <div style={{ height: "52px", borderRadius: "14px", background: "var(--b-e8f5ee,#e8f5ee)", color: "var(--t-0f5c3b,#0f5c3b)", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: "15px", fontWeight: "700" }}>
                <i className="ph-fill ph-check-circle" style={{ fontSize: "18px" }} />
                {t.onToday}
              </div>
            ) : null}
            {canAddPool ? (
              <button onClick={pd.openEst} style={{ marginTop: "8px", width: "100%", height: "52px", borderRadius: "14px", background: "var(--c-ffffff,#ffffff)", color: "var(--t-0a2a5c,#0a2a5c)", border: "1.5px solid var(--l-d5dbe3,#d5dbe3)", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontFamily: "inherit", fontSize: "16px", fontWeight: "700", cursor: "pointer" }}>
                <i className="ph ph-file-text" style={{ fontSize: "18px" }} />
                {t.esTitle}
              </button>
            ) : null}
          </div>
          {showMoney ? (
            <div style={{ margin: "20px 16px 0", borderRadius: "22px", background: "var(--b-0a2a5c,#0a2a5c)", color: "var(--t-ffffff,#ffffff)", boxShadow: "var(--shd,0 12px 26px -14px rgba(10,42,92,.30),0 2px 6px -2px rgba(10,42,92,.08))", padding: "18px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--t-c9d6e8,#c9d6e8)", display: "flex", alignItems: "center", gap: "6px" }}>
                  <i className="ph ph-chart-line-up" style={{ fontSize: "15px" }} />
                  {t.marginMonth}
                </span>
                <span style={{ fontSize: "32px", fontWeight: "700", letterSpacing: "-.03em" }}>{pd.marginAmt}</span>
                <span style={{ fontSize: "13px", color: "var(--t-c9d6e8,#c9d6e8)" }}>{pd.visitsLabel}</span>
              </div>
              <span style={{ height: "32px", padding: "0 12px", borderRadius: "999px", background: "var(--b-ffffff1f,#ffffff1f)", display: "flex", alignItems: "center", fontSize: "15px", fontWeight: "700" }}>{pd.marginPct}</span>
            </div>
          ) : null}
          <div style={{ height: "8px", background: "var(--b-f4f6f8,#f4f6f8)", marginTop: "24px" }} />
          <div style={{ padding: "22px 24px 4px" }}>
            <span style={{ fontSize: "17px", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px" }}>
              <i className="ph ph-address-book" style={{ fontSize: "19px", color: "var(--t-0a6f8a,#0a6f8a)" }} />
              {t.contact}
            </span>
          </div>
          <div style={{ padding: "0 24px" }}>
            <div style={{ minHeight: "48px", display: "flex", alignItems: "center", gap: "12px" }}>
              <i className="ph ph-phone" style={{ fontSize: "18px", color: "var(--t-5b6b82,#5b6b82)" }} />
              <span style={{ fontSize: "16px", fontWeight: "500" }}>{pd.phone}</span>
            </div>
            <div style={{ minHeight: "48px", display: "flex", alignItems: "center", gap: "12px", borderTop: "1px dashed var(--l-e3e7ec,#e3e7ec)" }}>
              <i className="ph ph-envelope-simple" style={{ fontSize: "18px", color: "var(--t-5b6b82,#5b6b82)" }} />
              <span style={{ fontSize: "16px", fontWeight: "500", color: pd.emailColor, overflowWrap: "anywhere" }}>{pd.emailLabel}</span>
            </div>
          </div>
          <div style={{ padding: "8px 16px 0", display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "8px" }}>
            <a href={pd.tel} style={{ height: "64px", borderRadius: "16px", background: "var(--c-ffffff,#ffffff)", border: "1px solid var(--l-eef0f3,#eef0f3)", boxShadow: "var(--shd,0 6px 16px -10px rgba(10,27,54,.20))", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "4px", color: "var(--t-0a2a5c,#0a2a5c)", textDecoration: "none", fontSize: "13px", fontWeight: "700" }}>
              <i className="ph ph-phone-call" style={{ fontSize: "20px", color: "var(--t-0a6f8a,#0a6f8a)" }} />
              {t.call}
            </a>
            <a href={pd.sms} style={{ height: "64px", borderRadius: "16px", background: "var(--c-ffffff,#ffffff)", border: "1px solid var(--l-eef0f3,#eef0f3)", boxShadow: "var(--shd,0 6px 16px -10px rgba(10,27,54,.20))", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "4px", color: "var(--t-0a2a5c,#0a2a5c)", textDecoration: "none", fontSize: "13px", fontWeight: "700" }}>
              <i className="ph ph-chat-circle-text" style={{ fontSize: "20px", color: "var(--t-0a6f8a,#0a6f8a)" }} />
              {t.textAct}
            </a>
            <a href={pd.mailto} aria-disabled={pd.noEmail} style={{ height: "64px", borderRadius: "16px", background: pd.mailBg, border: "1px solid var(--l-eef0f3,#eef0f3)", boxShadow: pd.mailShadow, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "4px", color: pd.mailColor, textDecoration: "none", fontSize: "13px", fontWeight: "700" }}>
              <i className="ph ph-envelope-simple" style={{ fontSize: "20px", color: pd.mailIc }} />
              {t.emailAct}
            </a>
          </div>
          {showMoney ? (
            <>
            <div style={{ height: "8px", background: "var(--b-f4f6f8,#f4f6f8)", marginTop: "24px" }} />
            <div style={{ padding: "22px 24px 4px", display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "17px", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px" }}>
                <i className="ph ph-bell-simple" style={{ fontSize: "19px", color: "var(--t-0a6f8a,#0a6f8a)" }} />
                {pd.billingTitle}
              </span>
              <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{t.billingSub}</span>
            </div>
            <div style={{ padding: "0 24px" }}>
              {pd.billing.map((i, iIdx) => (
                <button key={iIdx} onClick={i.toggle} aria-pressed={i.on} style={{ width: "100%", minHeight: "56px", display: "flex", alignItems: "center", gap: "14px", background: "none", border: "0", borderTop: i.divider, padding: "0", fontFamily: "inherit", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer", textAlign: "left" }}>
                  <i className={i.iconCls} style={{ fontSize: "20px", color: "var(--t-5b6b82,#5b6b82)" }} />
                  <span style={{ flex: "1", fontSize: "16px", fontWeight: "500" }}>{i.label}</span>
                  <span style={{ width: "46px", height: "28px", flexShrink: "0", borderRadius: "999px", background: i.track, padding: "3px", display: "flex", transition: "background .15s" }}>
                    <span style={{ width: "22px", height: "22px", borderRadius: "50%", background: "var(--k-ffffff,#ffffff)", boxShadow: "var(--shd,0 1px 3px rgba(10,27,54,.25))", marginLeft: i.knob, transition: "margin .15s" }} />
                  </span>
                </button>
              ))}
            </div>
            </>
          ) : null}
          <div style={{ height: "8px", background: "var(--b-f4f6f8,#f4f6f8)", marginTop: "24px" }} />
          <div style={{ padding: "22px 24px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "17px", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px" }}>
              <i className="ph ph-drop-half" style={{ fontSize: "19px", color: "var(--t-0a6f8a,#0a6f8a)" }} />
              {t.lastReadings}
            </span>
            <span style={{ fontSize: "13px", color: "var(--t-6b7889,#6b7889)" }}>{pd.lastDate}</span>
          </div>
          <div style={{ padding: "0 16px", display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "8px" }}>
            {pd.readings.map((r, rIdx) => (
              <div key={rIdx} style={{ borderRadius: "16px", background: r.tileBg, padding: "12px 14px", display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--t-5b6b82,#5b6b82)" }}>{r.label}</span>
                <span style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                  <span style={{ fontSize: "22px", fontWeight: "700" }}>{r.value}</span>
                  <span style={{ fontSize: "13px", fontWeight: "700", color: r.color }}>{r.state}</span>
                </span>
              </div>
            ))}
          </div>
          <div style={{ height: "8px", background: "var(--b-f4f6f8,#f4f6f8)", marginTop: "24px" }} />
          <div style={{ padding: "22px 24px 4px" }}>
            <span style={{ fontSize: "17px", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px" }}>
              <i className="ph ph-clock-counter-clockwise" style={{ fontSize: "19px", color: "var(--t-0a6f8a,#0a6f8a)" }} />
              {t.history}
            </span>
          </div>
          <div style={{ padding: "0 24px" }}>
            {pd.history.map((h, hIdx) => (
              <button key={hIdx} onClick={h.onClick} style={{ width: "100%", display: "flex", alignItems: "center", gap: "10px", minHeight: "56px", border: "0", borderTop: h.divider, background: "none", padding: "0", fontFamily: "inherit", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer", textAlign: "left" }}>
                <div style={{ flex: "1", display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "16px", fontWeight: "500" }}>{h.date}</span>
                  <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{h.sub}</span>
                </div>
                <span style={{ fontSize: "15px", fontWeight: "700", color: "var(--t-0f5c3b,#0f5c3b)" }}>{h.net}</span>
                <i className="ph ph-caret-right" style={{ fontSize: "15px", color: "var(--t-6b7889,#6b7889)" }} />
              </button>
            ))}
          </div>
          <div style={{ height: "8px", background: "var(--b-f4f6f8,#f4f6f8)", marginTop: "24px" }} />
          <div style={{ padding: "22px 24px 0", display: "flex", flexDirection: "column", gap: "8px" }}>
            <span style={{ fontSize: "17px", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px" }}>
              <i className="ph ph-note" style={{ fontSize: "19px", color: "var(--t-0a6f8a,#0a6f8a)" }} />
              {t.notes}
            </span>
            <span style={{ fontSize: "15px", lineHeight: "1.5", color: "var(--t-34496a,#34496a)" }}>{pd.note}</span>
          </div>
          {pd.canArchive ? (
            <>
            <div style={{ height: "8px", background: "var(--b-f4f6f8,#f4f6f8)", marginTop: "24px" }} />
            <button onClick={pd.askArchive} style={{ margin: "16px 16px 0", width: "calc(100% - 32px)", minHeight: "60px", borderRadius: "14px", border: "0", background: "var(--b-fdece8,#fdece8)", color: "var(--t-9a2f17,#9a2f17)", display: "flex", alignItems: "center", gap: "12px", padding: "10px 16px", fontFamily: "inherit", cursor: "pointer", textAlign: "left" }}>
              <i className="ph ph-archive" style={{ fontSize: "20px" }} />
              <span style={{ flex: "1", display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "15px", fontWeight: "700" }}>{t.arAction}</span>
                <span style={{ fontSize: "13px", fontWeight: "500" }}>{t.arSub}</span>
              </span>
            </button>
            </>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
