// Today — generated from Prototype v3 (Final).dc.html
export default function TodayScreen({ vm }) {
  const { canEdit, completeStop, doneCaret, doneRows, doneTitle, earnedLabel, editRows, editing, goAccount, goMoney, goShopping, hero, initials, is, isTech, langChips, minsToday, newRepair, notEditing, openAdd, rjCards, rjCount, routeBig, routeSub, saveOrder, showDone, showDoneToggle, showMoney, showRepairs, startEdit, startVisit, stopsDone, stopsTotal, t, toBuyLabel, toggleDone, upcoming } = vm;
  return (
    <>
      {is.today ? (
        <div data-screen-label="Today" style={{ position: "absolute", top: "50px", left: "0", right: "0", bottom: "0", overflowY: "auto", scrollbarWidth: "none", paddingBottom: "110px" }}>
          <div style={{ padding: "18px 24px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "32px", fontWeight: "700", letterSpacing: "-.025em", lineHeight: "1.15" }}>{t.today}</span>
              <span style={{ fontSize: "15px", fontWeight: "400", color: "var(--t-5b6b82,#5b6b82)" }}>{t.dayName}{", "}{t.monthDay}</span>
            </div>
            <div role="group" aria-label={t.language} style={{ display: "flex", alignItems: "center", marginRight: "8px", position: "relative" }}>
              <span style={{ position: "absolute", left: "0", right: "0", top: "50%", height: "30px", marginTop: "-15px", borderRadius: "999px", background: "var(--b-f2f4f7,#f2f4f7)" }} />
              {langChips.map((o, oIdx) => (
                <button key={oIdx} onClick={o.onClick} aria-pressed={o.on} aria-label={o.full} lang={o.code} style={{ position: "relative", height: "44px", minWidth: "40px", padding: "0 3px", border: "0", background: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontFamily: "inherit" }}>
                  <span style={{ height: "24px", minWidth: "32px", padding: "0 6px", borderRadius: "999px", background: o.bg, boxShadow: o.shadow, color: o.color, fontSize: "12px", fontWeight: "700", letterSpacing: ".02em", display: "flex", alignItems: "center", justifyContent: "center" }}>{o.label}</span>
                </button>
              ))}
            </div>
            <button onClick={goAccount} aria-label={t.aAccount} style={{ width: "44px", height: "44px", borderRadius: "50%", background: "var(--c-ffffff,#ffffff)", border: "1px solid var(--l-eef0f3,#eef0f3)", boxShadow: "var(--shd,0 2px 8px -2px rgba(10,27,54,.10))", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "inherit", fontSize: "14px", fontWeight: "600", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer" }}>{initials}</button>
          </div>
          <div style={{ margin: "20px 24px 0", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            {isTech ? (
              <div style={{ padding: "4px 0", display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "13px", fontWeight: "500", color: "var(--t-5b6b82,#5b6b82)", display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "var(--b-e3f4ea,#e3f4ea)", color: "var(--t-0f6b45,#0f6b45)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><i className="ph-bold ph-timer" style={{ fontSize: "12px" }} /></span>
                  {t.timeOnSite}
                </span>
                <span style={{ fontSize: "26px", fontWeight: "600", letterSpacing: "-.02em", color: "var(--t-0a1b36,#0a1b36)" }}>{minsToday}</span>
              </div>
            ) : null}
            {showMoney ? (
              <div style={{ padding: "4px 0", display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "13px", fontWeight: "500", color: "var(--t-5b6b82,#5b6b82)", display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "var(--b-e3f4ea,#e3f4ea)", color: "var(--t-0f6b45,#0f6b45)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><i className="ph-bold ph-currency-dollar" style={{ fontSize: "12px" }} /></span>
                  {t.earned}
                </span>
                <span style={{ fontSize: "26px", fontWeight: "600", letterSpacing: "-.02em", color: "var(--t-0a1b36,#0a1b36)" }}>{earnedLabel}</span>
              </div>
            ) : null}
            <div style={{ padding: "4px 0 4px 18px", borderLeft: "1px solid var(--l-eef0f3,#eef0f3)", display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "13px", fontWeight: "500", color: "var(--t-5b6b82,#5b6b82)", display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "var(--b-e4ecf7,#e4ecf7)", color: "var(--t-0a2a5c,#0a2a5c)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><i className="ph-bold ph-map-pin" style={{ fontSize: "12px" }} /></span>
                {t.stops}
              </span>
              <span style={{ fontSize: "26px", fontWeight: "600", letterSpacing: "-.02em" }}>
                {stopsDone}{" "}
                <span style={{ color: "var(--t-6b7889,#6b7889)", fontWeight: "600" }}>{"/ "}{stopsTotal}</span>
              </span>
            </div>
          </div>
          {hero.isPool ? (
            <div style={{ margin: "20px 16px 0", borderRadius: "22px", background: "var(--b-0a2a5c,#0a2a5c)", color: "var(--t-ffffff,#ffffff)", boxShadow: "var(--shd,0 12px 26px -14px rgba(10,42,92,.30),0 2px 6px -2px rgba(10,42,92,.08))", padding: "18px 18px 16px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--t-c9d6e8,#c9d6e8)", display: "flex", alignItems: "center", gap: "6px" }}>
                  <i className="ph ph-navigation-arrow" style={{ fontSize: "15px" }} />
                  {hero.label}
                </span>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--t-c9d6e8,#c9d6e8)" }}>{hero.fee}</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                <span style={{ fontSize: "22px", fontWeight: "600", letterSpacing: "-.015em" }}>{hero.name}</span>
                <span style={{ fontSize: "15px", color: "var(--t-d6e0ee,#d6e0ee)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px" }}>
                  {hero.addr}
                  {hero.hasGate ? (
                    <>
                    <span style={{ color: "var(--t-6f86a8,#6f86a8)" }}>·</span>
                    <i className="ph ph-lock-key" style={{ fontSize: "15px" }} />
                    {hero.gate}
                    </>
                  ) : null}
                  {hero.dog ? (
                    <span style={{ height: "24px", padding: "0 9px", borderRadius: "999px", background: "var(--b-fdf3dd,#fdf3dd)", color: "var(--t-6e4800,#6e4800)", fontSize: "12px", fontWeight: "700", display: "inline-flex", alignItems: "center", gap: "5px" }}>
                      <i className="ph-fill ph-dog" style={{ fontSize: "14px" }} />
                      {t.dog}
                    </span>
                  ) : null}
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14px", lineHeight: "1.4", color: "var(--t-e4ebf5,#e4ebf5)", paddingTop: "12px", borderTop: "1px solid var(--l-ffffff1f,#ffffff1f)" }}>
                <i className="ph ph-note" style={{ fontSize: "17px", color: "var(--t-ff9b84,#ff9b84)", marginTop: "1px" }} />
                <span>
                  <b style={{ fontWeight: "700" }}>{hero.noteDate}</b>
                  {" · "}{hero.note}
                </span>
              </div>
              <button onClick={startVisit} style={{ height: "52px", borderRadius: "14px", background: "var(--c-ffffff,#ffffff)", color: "var(--t-0a2a5c,#0a2a5c)", border: "0", boxShadow: "var(--shd,0 2px 6px rgba(4,16,38,.25))", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontFamily: "inherit", fontSize: "16px", fontWeight: "700", cursor: "pointer" }}>
                <i className="ph-bold ph-play" style={{ fontSize: "16px" }} />
                {t.startVisit}
              </button>
            </div>
          ) : null}
          {hero.isStop ? (
            <div style={{ margin: "20px 16px 0", borderRadius: "22px", background: "var(--b-0a2a5c,#0a2a5c)", color: "var(--t-ffffff,#ffffff)", boxShadow: "var(--shd,0 12px 26px -14px rgba(10,42,92,.30),0 2px 6px -2px rgba(10,42,92,.08))", padding: "18px 18px 16px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--t-c9d6e8,#c9d6e8)", display: "flex", alignItems: "center", gap: "6px" }}>
                <i className={hero.iconCls} style={{ fontSize: "15px" }} />
                {hero.label}
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                <span style={{ fontSize: "22px", fontWeight: "600", letterSpacing: "-.015em" }}>{hero.name}</span>
                <span style={{ fontSize: "15px", color: "var(--t-d6e0ee,#d6e0ee)" }}>{hero.sub}</span>
              </div>
              {hero.isRepair ? (
                <>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  <span style={{ height: "26px", padding: "0 10px", borderRadius: "999px", background: "var(--b-ffffff1f,#ffffff1f)", color: "var(--t-ffffff,#ffffff)", fontSize: "12px", fontWeight: "700", display: "inline-flex", alignItems: "center", gap: "5px" }}>
                    <i className="ph-bold ph-wrench" style={{ fontSize: "13px" }} />
                    {hero.rjNo}
                  </span>
                  {hero.license ? (
                    <span style={{ height: "26px", padding: "0 10px", borderRadius: "999px", background: "var(--b-fdf3dd,#fdf3dd)", color: "var(--t-6e4800,#6e4800)", fontSize: "12px", fontWeight: "700", display: "inline-flex", alignItems: "center", gap: "5px" }}>
                      <i className="ph-fill ph-seal-check" style={{ fontSize: "13px" }} />
                      {t.rjLicReq}
                    </span>
                  ) : null}
                </div>
                <button onClick={hero.openJob} style={{ height: "44px", borderRadius: "14px", background: "var(--b-ffffff1f,#ffffff1f)", color: "var(--t-ffffff,#ffffff)", border: "0", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontFamily: "inherit", fontSize: "15px", fontWeight: "700", cursor: "pointer" }}>
                  <i className="ph ph-clipboard-text" style={{ fontSize: "17px" }} />
                  {t.rjOpenJob}
                </button>
                </>
              ) : null}
              {hero.notRepair ? (
                <span style={{ fontSize: "14px", color: "var(--t-d6e0ee,#d6e0ee)", paddingTop: "12px", borderTop: "1px solid var(--l-ffffff1f,#ffffff1f)" }}>{t.stopHint}</span>
              ) : null}
              <button onClick={completeStop} style={{ height: "52px", borderRadius: "14px", background: "var(--c-ffffff,#ffffff)", color: "var(--t-0a2a5c,#0a2a5c)", border: "0", boxShadow: "var(--shd,0 2px 6px rgba(4,16,38,.25))", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontFamily: "inherit", fontSize: "16px", fontWeight: "700", cursor: "pointer" }}>
                <i className="ph-bold ph-check" style={{ fontSize: "16px" }} />
                {t.markDone}
              </button>
            </div>
          ) : null}
          {hero.isDone ? (
            <div style={{ margin: "20px 16px 0", borderRadius: "22px", background: "var(--b-0a2a5c,#0a2a5c)", color: "var(--t-ffffff,#ffffff)", boxShadow: "var(--shd,0 12px 26px -14px rgba(10,42,92,.30),0 2px 6px -2px rgba(10,42,92,.08))", padding: "18px 18px 16px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--t-c9d6e8,#c9d6e8)", display: "flex", alignItems: "center", gap: "6px" }}>
                <i className="ph ph-flag-checkered" style={{ fontSize: "15px" }} />
                {t.routeDone}
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                <span style={{ fontSize: "36px", fontWeight: "700", letterSpacing: "-.03em" }}>{routeBig}</span>
                <span style={{ fontSize: "15px", color: "var(--t-d6e0ee,#d6e0ee)" }}>{routeSub}</span>
              </div>
              {showMoney ? (
                <button onClick={goMoney} style={{ height: "52px", borderRadius: "14px", background: "var(--c-ffffff,#ffffff)", color: "var(--t-0a2a5c,#0a2a5c)", border: "0", boxShadow: "var(--shd,0 2px 6px rgba(4,16,38,.25))", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontFamily: "inherit", fontSize: "16px", fontWeight: "700", cursor: "pointer" }}>
                  <i className="ph ph-wallet" style={{ fontSize: "17px" }} />
                  {t.seeMoney}
                </button>
              ) : null}
            </div>
          ) : null}
          <div style={{ height: "8px", background: "var(--b-f4f6f8,#f4f6f8)", marginTop: "24px" }} />
          <div style={{ padding: "22px 24px 6px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-.01em" }}>{t.route}</span>
              {canEdit ? (
                <button onClick={startEdit} style={{ height: "34px", padding: "0 2px", border: "0", background: "none", color: "var(--t-0a6f8a,#0a6f8a)", fontFamily: "inherit", fontSize: "13px", fontWeight: "600", display: "flex", alignItems: "center", gap: "4px", cursor: "pointer" }}>
                  <i className="ph-bold ph-arrows-down-up" style={{ fontSize: "13px" }} />
                  {t.editOrder}
                </button>
              ) : null}
            </div>
            {editing ? (
              <button onClick={saveOrder} style={{ height: "34px", padding: "0 16px", borderRadius: "999px", background: "var(--p-0a2a5c,#0a2a5c)", color: "var(--pt-ffffff,#ffffff)", border: "0", boxShadow: "var(--shd,0 6px 14px -6px rgba(10,42,92,.5))", display: "flex", alignItems: "center", gap: "6px", fontFamily: "inherit", fontSize: "13px", fontWeight: "700", cursor: "pointer" }}>
                <i className="ph-bold ph-check" style={{ fontSize: "13px" }} />
                {t.doneBtn}
              </button>
            ) : null}
            {notEditing ? (
              <div style={{ display: "flex", gap: "8px" }}>
                <button onClick={goShopping} style={{ height: "34px", padding: "0 12px", borderRadius: "999px", background: "var(--b-fdece8,#fdece8)", color: "var(--t-9a2f17,#9a2f17)", border: "0", display: "flex", alignItems: "center", gap: "6px", fontFamily: "inherit", fontSize: "13px", fontWeight: "600", cursor: "pointer" }}>
                  <i className="ph ph-shopping-cart-simple" style={{ fontSize: "15px" }} />
                  {toBuyLabel}
                </button>
                <button onClick={openAdd} style={{ height: "34px", padding: "0 12px", borderRadius: "999px", background: "var(--b-f2f4f7,#f2f4f7)", color: "var(--t-0a1b36,#0a1b36)", border: "0", display: "flex", alignItems: "center", gap: "6px", fontFamily: "inherit", fontSize: "13px", fontWeight: "600", cursor: "pointer" }}>
                  <i className="ph-bold ph-plus" style={{ fontSize: "13px" }} />
                  {t.stopShort}
                </button>
              </div>
            ) : null}
          </div>
          {editing ? (
            <>
            <div style={{ padding: "0 24px 2px", fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{t.dragHint}</div>
            <div style={{ padding: "4px 16px 0", display: "flex", flexDirection: "column", gap: "4px" }}>
              {editRows.map((r, rIdx) => (
                <div key={rIdx} data-row="1" style={{ display: "flex", alignItems: "center", gap: "14px", minHeight: "56px", padding: "0 4px 0 8px", borderRadius: "14px", background: r.bg, border: `1px solid ${r.border ?? ''}`, boxShadow: r.shadow, transition: "box-shadow .15s,background .15s" }}>
                  {r.isPool ? (
                    <span style={{ width: "24px", height: "24px", flexShrink: "0", borderRadius: "50%", border: "1.5px dashed var(--l-8a96a8,#8a96a8)", fontSize: "11px", fontWeight: "700", color: "var(--t-5b6b82,#5b6b82)", display: "flex", alignItems: "center", justifyContent: "center" }}>{r.disc}</span>
                  ) : null}
                  {r.isOther ? (
                    <i className={r.iconCls} style={{ width: "24px", fontSize: "22px", color: "var(--t-c98a12,#c98a12)", textAlign: "center" }} />
                  ) : null}
                  {r.isRepair ? (
                    <span style={{ width: "24px", height: "24px", flexShrink: "0", borderRadius: "7px", background: "var(--b-e3f1f4,#e3f1f4)", color: "var(--t-0a6f8a,#0a6f8a)", display: "flex", alignItems: "center", justifyContent: "center" }}><i className="ph-bold ph-wrench" style={{ fontSize: "14px" }} /></span>
                  ) : null}
                  <span style={{ flex: "1", minWidth: "0", fontSize: "16px", fontWeight: "500" }}>{r.name}</span>
                  <span style={{ fontSize: "13px", color: "var(--t-6b7889,#6b7889)" }}>{r.right}</span>
                  <button onPointerDown={r.onDown} aria-label={t.dragHandle} style={{ width: "44px", height: "44px", flexShrink: "0", border: "0", background: "none", color: "var(--t-5b6b82,#5b6b82)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "grab", touchAction: "none" }}><i className="ph-bold ph-dots-six-vertical" style={{ fontSize: "20px" }} /></button>
                </div>
              ))}
            </div>
            </>
          ) : null}
          {notEditing ? (
            <div style={{ padding: "0 24px" }}>
              {upcoming.map((r, rIdx) => (
                <div key={rIdx} onClick={r.onClick} style={{ display: "flex", alignItems: "center", gap: "14px", minHeight: "54px", borderTop: r.divider, cursor: "pointer" }}>
                  {r.isPool ? (
                    <span style={{ width: "24px", height: "24px", flexShrink: "0", borderRadius: "50%", border: "1.5px dashed var(--l-8a96a8,#8a96a8)", fontSize: "11px", fontWeight: "700", color: "var(--t-5b6b82,#5b6b82)", display: "flex", alignItems: "center", justifyContent: "center" }}>{r.disc}</span>
                  ) : null}
                  {r.isOther ? (
                    <i className={r.iconCls} style={{ width: "24px", fontSize: "22px", color: "var(--t-c98a12,#c98a12)", textAlign: "center" }} />
                  ) : null}
                  {r.isRepair ? (
                    <span style={{ width: "24px", height: "24px", flexShrink: "0", borderRadius: "7px", background: "var(--b-e3f1f4,#e3f1f4)", color: "var(--t-0a6f8a,#0a6f8a)", display: "flex", alignItems: "center", justifyContent: "center" }}><i className="ph-bold ph-wrench" style={{ fontSize: "14px" }} /></span>
                  ) : null}
                  <span style={{ flex: "1", minWidth: "0", fontSize: "16px", fontWeight: "500" }}>{r.name}</span>
                  <span style={{ fontSize: "14px", color: "var(--t-6b7889,#6b7889)" }}>{r.right}</span>
                </div>
              ))}
            </div>
          ) : null}
          {showDoneToggle ? (
            <>
            <div style={{ display: "flex", justifyContent: "center", paddingTop: "10px" }}>
              <button onClick={toggleDone} style={{ height: "34px", padding: "0 14px", borderRadius: "999px", background: "var(--b-f2f4f7,#f2f4f7)", color: "var(--t-5b6b82,#5b6b82)", border: "0", display: "flex", alignItems: "center", gap: "6px", fontFamily: "inherit", fontSize: "13px", fontWeight: "600", cursor: "pointer" }}>
                <i className="ph-fill ph-check-circle" style={{ fontSize: "16px", color: "var(--t-13734a,#13734a)" }} />
                {doneTitle}
                <i className={doneCaret} style={{ fontSize: "13px" }} />
              </button>
            </div>
            {showDone ? (
              <div style={{ padding: "8px 24px 0" }}>
                {doneRows.map((r, rIdx) => (
                  <div key={rIdx} onClick={r.onClick} style={{ display: "flex", alignItems: "center", gap: "14px", minHeight: "56px", borderTop: r.divider, cursor: "pointer" }}>
                    <i className="ph-fill ph-check-circle" style={{ fontSize: "26px", color: "var(--t-13734a,#13734a)" }} />
                    <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
                      <span style={{ fontSize: "16px", fontWeight: "500", color: "var(--t-5b6b82,#5b6b82)" }}>{r.name}</span>
                      <span style={{ fontSize: "13px", color: "var(--t-6b7889,#6b7889)" }}>{r.sub}</span>
                    </div>
                    <span style={{ fontSize: "15px", fontWeight: "700", color: r.color }}>{r.right}</span>
                  </div>
                ))}
              </div>
            ) : null}
            </>
          ) : null}
          {showRepairs ? (
            <>
            <div style={{ height: "8px", background: "var(--b-f4f6f8,#f4f6f8)", marginTop: "24px" }} />
            <div style={{ padding: "22px 24px 10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-.01em", display: "flex", alignItems: "center", gap: "8px" }}>
                {t.rjRepairs}
                <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--t-6b7889,#6b7889)" }}>{rjCount}</span>
              </span>
              <button onClick={newRepair} style={{ height: "34px", padding: "0 12px", borderRadius: "999px", background: "var(--p-0a2a5c,#0a2a5c)", color: "var(--pt-ffffff,#ffffff)", border: "0", display: "flex", alignItems: "center", gap: "6px", fontFamily: "inherit", fontSize: "13px", fontWeight: "700", cursor: "pointer" }}>
                <i className="ph-bold ph-plus" style={{ fontSize: "13px" }} />
                {t.rjNew}
              </button>
            </div>
            <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: "8px" }}>
              {rjCards.map((c, cIdx) => (
                <button key={cIdx} onClick={c.onClick} style={{ width: "100%", borderRadius: "18px", background: "var(--c-ffffff,#ffffff)", border: "1px solid var(--l-eef0f3,#eef0f3)", boxShadow: "var(--shd,0 6px 16px -10px rgba(10,27,54,.20))", padding: "14px 16px", display: "flex", flexDirection: "column", gap: "8px", fontFamily: "inherit", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer", textAlign: "left" }}>
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", width: "100%" }}>
                    <span style={{ fontSize: "13px", fontWeight: "700", color: "var(--t-5b6b82,#5b6b82)", display: "flex", alignItems: "center", gap: "6px" }}>
                      <i className={c.iconCls} style={{ fontSize: "16px", color: "var(--t-0a6f8a,#0a6f8a)" }} />
                      {c.no}
                    </span>
                    <span style={{ height: "24px", padding: "0 9px", borderRadius: "999px", background: c.stBg, color: c.stColor, fontSize: "12px", fontWeight: "700", display: "inline-flex", alignItems: "center" }}>{c.status}</span>
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    <span style={{ fontSize: "16px", fontWeight: "600" }}>{c.name}</span>
                    <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{c.sub}</span>
                  </span>
                  <span style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px", width: "100%" }}>
                    {c.license ? (
                      <span style={{ height: "24px", padding: "0 9px", borderRadius: "999px", background: "var(--b-fdf3dd,#fdf3dd)", color: "var(--t-6e4800,#6e4800)", fontSize: "12px", fontWeight: "700", display: "inline-flex", alignItems: "center", gap: "5px" }}>
                        <i className="ph-fill ph-seal-check" style={{ fontSize: "13px" }} />
                        {t.rjLicReq}
                      </span>
                    ) : null}
                    {c.hasFrom ? (
                      <span style={{ height: "24px", padding: "0 9px", borderRadius: "999px", background: "var(--b-e3f1f4,#e3f1f4)", color: "var(--t-0a4f63,#0a4f63)", fontSize: "12px", fontWeight: "700", display: "inline-flex", alignItems: "center", gap: "5px" }}>
                        <i className="ph ph-user" style={{ fontSize: "13px" }} />
                        {c.from}
                      </span>
                    ) : null}
                    {c.hasTag ? (
                      <span style={{ height: "24px", padding: "0 9px", borderRadius: "999px", background: c.tagBg, color: c.tagColor, fontSize: "12px", fontWeight: "700", display: "inline-flex", alignItems: "center", gap: "5px" }}>
                        <i className={c.tagIcon} style={{ fontSize: "13px" }} />
                        {c.tag}
                      </span>
                    ) : null}
                    {c.routed ? (
                      <span style={{ height: "24px", padding: "0 9px", borderRadius: "999px", background: "var(--b-e8f5ee,#e8f5ee)", color: "var(--t-0f5c3b,#0f5c3b)", fontSize: "12px", fontWeight: "700", display: "inline-flex", alignItems: "center", gap: "5px" }}>
                        <i className="ph-bold ph-map-pin" style={{ fontSize: "12px" }} />
                        {t.rjOnRoute}
                      </span>
                    ) : null}
                    <span style={{ flex: "1" }} />
                    <span style={{ fontSize: "15px", fontWeight: "700" }}>{c.total}</span>
                  </span>
                </button>
              ))}
            </div>
            </>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
