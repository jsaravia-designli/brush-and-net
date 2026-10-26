// App logic and view model, ported from the Prototype v3 (Final) logic class.
// State lives here; renderVals() builds the flat view model the screens render.
import { Component } from 'react';
import { S } from './strings.js';
import { CH, MU, DAYS, DAYL, FK, DEFSCH, SCHED, schedLabel, needDays, srt, pickDay, setFreq, DARKV, RT, SYM, PARTS, PSL, RST, RSTC, TODAYISO, TODAYLBL, rjNew, REPAIRS0, pn, rjCalc, fmtD, cleanMoney, DEFP, SHARE, STM, SHOPBY, TECHS, IMCOLS, IMF, IMROWS, okEmail, RG, RK, TASKS, TICON, PHBG, SICON, DOGS, NOEMAIL, mkEmail, DATES, TODAY, SC, DASH, PLACE, BASE, POOLS, r2, m2, fq, ini, inMonth, dv } from './data.js';
import Shell from './screens/Shell.jsx';

export default class PoolApp extends Component {
  constructor(props){super(props);this.state={...this.fresh(),pvRole:props.role||'single',pvRep:props.repairs!==false,pvStart:props.startScreen==='onboarding'?'onboarding':'today'};}
  fresh(){
    const pr=this.props||{};
    const pools={};
    Object.keys(CH).forEach(k=>CH[k].p=DEFP[k]);
    POOLS.forEach((a,i)=>{const [id,name,addr,gate,kind,fee,drive,r,chems,note]=a;
      pools[id]={id,name,addr,gate,kind,fee,drive,note,sched:SCHED[id]||DEFSCH,dog:DOGS.includes(id),email:NOEMAIL.includes(id)?'':mkEmail(name),phone:`(904) 555-0${110+i*7}`,rate:fee*4,invoiceSent:i%3===0,paid:i%5===0,last:{fc:r[0],ph:r[1],ta:r[2],cya:r[3]},chems:chems.map(c=>({id:c[0],qty:c[1]})),tasks:{skim:true,brush:true,vacuum:false,baskets:true,filter:true,backwash:false},lastDate:DATES[0],lastFilter:DATES[i%3],
        history:DATES.map((d,k)=>{const chem=r2((3.2+((i*1.37+k*2.11)%5.2))*({p10:2.3,p4:1.7}[id]||1));return {id:`h${id}_${k}`,date:d,fee,chem,net:r2(fee-chem),mins:14+((i+k)%3)*4,
          r:{fc:r[0],ph:r[1],ta:r[2],cya:r[3]},chems:chems.map(c=>({id:c[0],qty:c[1]})),tasks:{skim:true,brush:true,vacuum:k%2===0,baskets:true,filter:k===i%3,backwash:false},photos:k===0?1:0,note:'',sent:k>0};})};});
    const SEED={p1:[28.40,18],p2:[31.15,15],p3:[26.90,22],p4:[29.80,17],p5:[26.35,20]};
    const order=['p1','p2','p3','p4','p5','p6','p7','fuel','p8','p9','p10','p11','p12','p13'];
    const stops=order.map((id,i)=>{
      if(id==='fuel')return {id:'s'+i,type:'fuel',place:PLACE.fuel,done:false,cost:0};
      const s={id:'s'+i,type:'pool',poolId:id,done:false};
      if(SEED[id]){const [net,mins]=SEED[id],fee=pools[id].fee,chem=r2(fee-net);Object.assign(s,{done:true,fee,chem,net,mins});{const P=pools[id];P.history.unshift({id:`h${id}_t`,stopId:s.id,date:TODAY,fee,chem,net,mins,r:{...P.last},chems:P.chems.map(c=>({...c})),tasks:{...P.tasks},photos:0,note:'',sent:false});}pools[id].lastDate=TODAY;}
      return s;});
    return {screen:pr.startScreen==='onboarding'?'ob1':'today',prev:'today',lang:pr.language==='es'?'es':'en',appearance:pr.theme==='dark'?'dark':'light',pools,stops,visit:null,saved:null,count:0,counting:false,sheet:null,cost:{mode:'add',type:'fuel',amt:''},soon:null,showDone:false,
      shop:[['chlor',18],['acid',4],['tabs',10],['cya',4],['soda',10],['clean',1]].map(([id,qty])=>({id,qty,checked:false,by:{...SHOPBY[id]}})),restock:0,range:'today',priceEdit:{},repairs:JSON.parse(JSON.stringify(REPAIRS0)),cppAll:false,poolId:'p6',search:'',biz:'Delgado Pool Care',owner:'Mike Delgado',fee:35,toast:null,now:Date.now()};
  }
  componentDidMount(){
    this.mq=window.matchMedia?window.matchMedia('(prefers-color-scheme: dark)'):null;this.mqH=()=>{if(this.state.appearance==='auto'){this._td=null;this.applyTheme();}};if(this.mq&&this.mq.addEventListener)this.mq.addEventListener('change',this.mqH);this.applyTheme();
    this.iv=setInterval(()=>{const st=this.state;
      if(st.screen==='visit')this.setState({now:Date.now()});
      if(st.screen==='saved'&&st.counting&&st.count>0){const c=st.count-1;this.setState({count:c});
        if(c===0)this.ft=setTimeout(()=>{if(this.state.screen==='saved'&&this.state.counting)this.finishSaved();},700);}
    },1000);
  }
  componentWillUnmount(){if(this.mq&&this.mq.removeEventListener)this.mq.removeEventListener('change',this.mqH);clearInterval(this.iv);clearTimeout(this.ft);clearTimeout(this.tt);}
  rootCb=el=>{if(el&&el!==this.rootEl){this.rootEl=el;this.applyTheme();}};
  isDark(){const a=this.state.appearance;return a==='dark'||(a==='auto'&&!!(this.mq&&this.mq.matches));}
  applyTheme(){const el=this.rootEl||document.querySelector('[data-theme-root]');if(!el)return;this.rootEl=el;const d=this.isDark();if(this._td===d&&el._td===d)return;this._td=d;el._td=d;for(const k in DARKV){if(d)el.style.setProperty('--'+k,DARKV[k]);else el.style.removeProperty('--'+k);}el.style.colorScheme=d?'dark':'light';}
  componentDidUpdate(pp,ps){
    if(pp.repairs!==this.props.repairs)this.setPv('pvRep',this.props.repairs!==false);
    if(pp.theme!==this.props.theme&&this.props.theme)this.setState({appearance:this.props.theme});
    this.applyTheme();
    if(pp.role!==this.props.role)this.setPv('pvRole',this.props.role||'single');
    if(pp.language!==this.props.language&&this.props.language)this.setState({lang:this.props.language});
    if(pp.startScreen!==this.props.startScreen)this.setPv('pvStart',this.props.startScreen==='onboarding'?'onboarding':'today');
  }
  setPv(k,v){const sc=this.state.screen,o={[k]:v};
    if(k==='pvRole'&&v==='tech'&&['money','prices','import','estimate','archived','rjQuote','rjSum'].includes(sc))Object.assign(o,{screen:'today',sheet:null});
    if(k==='pvRep'&&!v&&['repair','rjQuote','rjSum'].includes(sc))Object.assign(o,{screen:'today',sheet:null,rj:null});
    if(k==='pvStart'){clearTimeout(this.ft);Object.assign(o,{screen:v==='onboarding'?'ob1':'today',sheet:null,counting:false,saved:null});}
    this.setState(o);}
  L(){return this.state.lang==='es'?1:0;}
  toast(msg){this.setState({toast:msg});clearTimeout(this.tt);this.tt=setTimeout(()=>this.setState({toast:null}),2200);}
  go=(screen)=>this.setState(st=>({screen,sheet:null,prev:['today','pools','money'].includes(st.screen)?st.screen:st.prev}));
  back=()=>this.setState(st=>({screen:st.prev||'today'}));
  openPool=(id)=>this.setState(st=>({poolId:id,screen:'pool',prev:['today','pools','money'].includes(st.screen)?st.screen:st.prev}));
  startVisit=()=>{const st=this.state,s=st.stops.find(x=>!x.done);if(!s||s.type!=='pool')return;const p=st.pools[s.poolId];
    this.setState({screen:'visit',now:Date.now(),visit:{stopId:s.id,poolId:p.id,r:{...p.last},chems:p.chems.map(c=>({id:c.id,qty:c.qty,prev:c.qty})),tasks:{...p.tasks},photos:[],photoSeq:0,note:'',noteOpen:false,start:Date.now()}});};
  upd(fn){this.setState(st=>({visit:fn({...st.visit})}));}
  reading(k,dir){this.upd(v=>{const g=RG[k];let x=Math.round((v.r[k]+dir*g.step)*10)/10;x=Math.min(g.hi,Math.max(g.lo,x));v.r={...v.r,[k]:x};return v;});}
  chem(i,dir){this.upd(v=>{v.chems=v.chems.map((c,j)=>j===i?{...c,qty:Math.max(0,Math.round((c.qty+dir*CH[c.id].step)*10)/10)}:c);return v;});}
  saveVisit=()=>{const st=this.state,v=st.visit,p=st.pools[v.poolId],fee=p.fee;
    const chem=r2(v.chems.reduce((a,c)=>a+c.qty*CH[c.id].p,0)),net=r2(fee-chem);
    const chemsK=v.chems.filter(c=>c.qty>0).map(c=>({id:c.id,qty:c.qty})),det={r:{...v.r},chems:chemsK,tasks:{...v.tasks},photos:v.photos.length,note:v.note};
    if(v.editHist){const h=p.history.find(x=>x.id===v.editHist),nh={...h,...det,chem,net},latest=p.history[0].id===h.id;
      const np={...p,history:p.history.map(x=>x.id===h.id?nh:x),...(latest?{last:{...v.r},chems:chemsK,tasks:{...v.tasks},lastFilter:v.tasks.filter?h.date:p.lastFilter}:{})};
      const stops=h.stopId?st.stops.map(s=>s.id===h.stopId?{...s,chem,net}:s):st.stops;
      this.setState({stops,pools:{...st.pools,[p.id]:np},screen:'visitSum',poolId:p.id,histId:h.id,visit:null});this.toast(S.vsUpdated[this.L()]);return;}
    const mins=Math.max(1,Math.round((Date.now()-v.start)/60000)),hid='h'+Date.now();
    const stops=st.stops.map(s=>s.id===v.stopId?{...s,done:true,fee,chem,net,mins}:s);
    const np={...p,last:{...v.r},chems:chemsK,tasks:{...v.tasks},lastDate:TODAY,lastFilter:v.tasks.filter?TODAY:p.lastFilter,note:v.note||p.note,history:[{id:hid,stopId:v.stopId,date:TODAY,fee,chem,net,mins,...det,sent:false},...p.history]};
    const nx=stops.find(s=>!s.done);
    this.setState({stops,pools:{...st.pools,[p.id]:np},screen:'saved',saved:{name:p.name,poolId:p.id,histId:hid,fee,chem,net,mins,nextId:nx?nx.id:null},count:this.props.countdown??3,counting:true,visit:null});};
  openPoolForm(from){this.setState({sheet:'poolForm',pfFrom:from,pf:{name:'',addr:'',gate:'',phone:'',email:'',fee:this.state.fee||35,sched:DEFSCH,dog:false,err:false}});}
  updPf(o){this.setState(st=>({pf:{...st.pf,...o}}));}
  savePoolForm=()=>{const st=this.state,f=st.pf,L=this.L();if(!f.name.trim()||!f.addr.trim()){this.updPf({err:true});return;}
    const id='n'+Date.now(),T=S.newTag;
    const p={id,name:f.name.trim(),addr:f.addr.trim(),gate:f.gate.trim(),kind:'',fee:f.fee,sched:f.sched||DEFSCH,drive:10,note:'',dog:f.dog,email:f.email.trim(),phone:f.phone.trim(),rate:f.fee*4,invoiceSent:false,paid:false,
      last:{fc:3,ph:7.5,ta:100,cya:40},chems:[],tasks:{skim:true,brush:true,vacuum:false,baskets:true,filter:false,backwash:false},lastDate:T,lastFilter:['—','—'],history:[]};
    const o={pools:{...st.pools,[id]:p},sheet:null};
    if(st.pfFrom==='ob')o.obExtra=[...(st.obExtra||[]),id];else Object.assign(o,{poolId:id,screen:'pool',prev:'pools'});
    this.setState(o);this.toast(`${S.poolAdded[L]} · ${p.name}`);};
  openEst(from){const st=this.state,src=from==='form'?st.pf:st.pools[st.poolId],fee=src.fee||st.fee||35;
    this.setState({est:{from,retScreen:st.screen,name:src.name||'',email:src.email||'',service:'weekly',freq:'weekly',rate:String(fee*4),editing:false,draft:'',tried:false},screen:'estimate',sheet:null});}
  updEst(o){this.setState(st=>({est:{...st.est,...o}}));}
  estBack=()=>{const st=this.state,e=st.est;if(e.from==='form')this.setState({screen:e.retScreen,sheet:'poolForm',pf:{...st.pf,name:e.name,email:e.email},est:null});else this.setState({screen:'pool',est:null});};
  sendEst=()=>{const e=this.state.est,L=this.L();if(e.editing)return;if(!okEmail(e.email.trim())||!(parseFloat(e.rate)>0)){this.updEst({tried:true});return;}
    const em=e.email.trim();this.estBack();this.toast(`${S.esSentTo[L]} ${em}`);};
  confirmArchive=()=>{const st=this.state,id=st.poolId,L=this.L(),p=st.pools[id];
    this.setState({pools:{...st.pools,[id]:{...p,archived:true,archivedOn:['Oct 19','19 oct']}},stops:st.stops.filter(s=>!(s.type==='pool'&&s.poolId===id&&!s.done)),sheet:null,screen:'pools',prev:'pools'});
    this.toast(`${S.arDone[L]} · ${p.name}`);};
  restorePool(id){const st=this.state,L=this.L();this.setState({pools:{...st.pools,[id]:{...st.pools[id],archived:false}}});this.toast(`${S.arRestored[L]} · ${st.pools[id].name}`);}
  openRepair=(id)=>{const st=this.state,r=id!=null?st.repairs.find(x=>x.id===id):null,nid=Math.max(4829,...st.repairs.map(x=>x.id))+1;
    this.setState({screen:'repair',sheet:null,rjPrev:st.screen==='repair'?st.rjPrev:st.screen,rj:r?JSON.parse(JSON.stringify(r)):rjNew(nid),rjErr:'',rjCustom:null});};
  updRj(fn){this.setState(st=>({rj:fn({...st.rj}),rjErr:''}));}
  rjCommit(patch,back){const st=this.state,rj={...st.rj,...patch},ex=st.repairs.some(x=>x.id===rj.id);
    let stops=st.stops;if(rj.status===4)stops=stops.map(s=>s.type==='repair'&&s.repairId===rj.id?{...s,done:true}:s);
    this.setState({repairs:ex?st.repairs.map(x=>x.id===rj.id?rj:x):[rj,...st.repairs],stops,rj:back?null:rj,screen:back?(st.rjPrev||'today'):'repair',sheet:null,rjErr:''});}
  rjValid(){const r=this.state.rj;return (r.poolId||r.newCust)&&r.type;}
  rjPrimary=()=>{const st=this.state,r=st.rj,tech=this.state.pvRole==='tech',L=this.L();
    if(r.status===0||(r.status===1&&!tech&&!r.quoted)){if(!this.rjValid()){this.setState({rjErr:S.rjNeed[L]});return;}
      if(tech){this.rjCommit({status:1,fromTech:'t1',declined:false},true);this.toast(S.rjSentT[L]);return;}
      this.openQuote();return;}
    if(r.status===1&&tech)return;
    if(r.status===1||r.status===2){const n=r.status+1;this.rjCommit({status:n},false);this.toast(`${S.rjStatusT[L]}: ${RST[n][L]}`);return;}
    if(r.status===3){this.setState({sheet:'rjDone',rjDonePhoto:!!r.photos.done});return;}
    if(r.status===4&&!tech)this.openSummary(r);};
  openQuote(){const st=this.state,r=st.rj,p=r.poolId?st.pools[r.poolId]:null;this.setState({screen:'rjQuote',sheet:null,rqs:{email:r.quoteEmail||(p?p.email:''),tried:false,editing:false,draft:''}});}
  updRqs(o){this.setState(st=>({rqs:{...st.rqs,...o}}));}
  rjSendQuote=()=>{const st=this.state,q=st.rqs,L=this.L(),em=q.email.trim();if(q.editing)return;if(!okEmail(em)){this.updRqs({tried:true});return;}
    this.rjCommit({status:1,quoted:true,declined:false,sentOn:TODAYLBL,quoteEmail:em},false);this.toast(`${S.rjQuoteSentTo[L]} ${em}`);};
  rjDecline=()=>{const L=this.L();this.rjCommit({status:0,quoted:false,declined:true,declinedOn:TODAYLBL},false);this.toast(S.rjDeclinedT[L]);};
  rjFinish(send){const st=this.state,r=st.rj,L=this.L(),ph=!!st.rjDonePhoto,photos={...r.photos};if(ph)photos.done=1;else delete photos.done;
    const nr={...r,status:4,completedOn:TODAYLBL,completedISO:TODAYISO,photos};this.rjCommit({status:4,completedOn:TODAYLBL,completedISO:TODAYISO,photos},false);
    if(send)this.openSummary(nr);else this.toast(`#${r.id} · ${S.rjDoneLbl[L]}`);}
  openSummary(r){const st=this.state,p=r.poolId?st.pools[r.poolId]:null;this.setState({screen:'rjSum',sheet:null,rs:{id:r.id,email:r.quoteEmail||(p?p.email:''),tried:false,inc:{work:true,parts:true,labor:true,total:true,photos:true}}});}
  updRs(o){this.setState(st=>({rs:{...st.rs,...o}}));}
  sendSummary=()=>{const st=this.state,R=st.rs,L=this.L(),em=R.email.trim();if(!okEmail(em)){this.updRs({tried:true});return;}
    this.setState(y=>({screen:'repair',rs:null,repairs:y.repairs.map(x=>x.id===R.id?{...x,summarySent:true}:x),rj:y.rj&&y.rj.id===R.id?{...y.rj,summarySent:true}:y.rj}));this.toast(`${S.rjSumSentTo[L]} ${em}`);};
  rjAddRoute=()=>{const st=this.state,r=st.rj,L=this.L();if(!r.date){this.setState({rjErr:S.rjNeedDate[L]});return;}
    const p=r.poolId?st.pools[r.poolId]:null,addr=p?p.addr:(r.newCust?r.newCust.addr:'');
    this.rjCommit({routed:true},false);
    if(r.date===TODAYISO&&!st.stops.some(s=>s.type==='repair'&&s.repairId===r.id))this.setState(y=>({stops:[...y.stops,{id:'r'+r.id,type:'repair',repairId:r.id,place:addr,done:false}]}));
    this.toast(r.date===TODAYISO?S.rjAddedToday[L]:`${S.rjSchedFor[L]} ${fmtD(r.date,L)}`);};
  editVisit=()=>{const st=this.state,p=st.pools[st.poolId],h=p.history.find(x=>x.id===st.histId);if(!h)return;
    this.setState({screen:'visit',now:Date.now(),visit:{editHist:h.id,editMins:h.mins,editDate:h.date,stopId:null,poolId:p.id,r:{...h.r},chems:h.chems.map(c=>({id:c.id,qty:c.qty,prev:c.qty})),
      tasks:{...h.tasks},photos:Array.from({length:h.photos},(_,i)=>({id:i+1,n:i+1})),photoSeq:h.photos,note:h.note||'',noteOpen:!!h.note,start:Date.now()}});};
  openReport=()=>{const st=this.state;if(!st.saved)return;const sv=st.saved,h=st.pools[sv.poolId].history.find(x=>x.id===sv.histId);if(h&&h.sent)return;clearTimeout(this.ft);
    this.setState({counting:false,screen:'report',report:{poolId:sv.poolId,histId:sv.histId,inc:{readings:true,chems:true,tasks:true,photos:true,note:true},editing:false,draft:'',bad:false}});};
  updRep(o){this.setState(st=>({report:{...st.report,...o}}));}
  saveEmail=()=>{const st=this.state,R=st.report,e=(R.draft||'').trim();if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)){this.updRep({bad:true});return;}
    const p=st.pools[R.poolId];this.setState({pools:{...st.pools,[p.id]:{...p,email:e}},report:{...R,editing:false,bad:false}});};
  sendReport=()=>{const st=this.state,R=st.report,p=st.pools[R.poolId];if(!p.email||R.editing)return;
    this.setState({pools:{...st.pools,[p.id]:{...p,history:p.history.map(x=>x.id===R.histId?{...x,sent:true}:x)}},screen:'saved',report:null});this.toast(`${S.rpSentTo[this.L()]} ${p.email}`);};
  finishSaved=()=>{clearTimeout(this.ft);this.setState({screen:'today',counting:false,saved:null});};
  confirmCost=()=>{const st=this.state,amt=r2(parseFloat(st.cost.amt)||0),L=this.L();let stops=[...st.stops];const ni=stops.findIndex(s=>!s.done&&(this.state.pvRep||s.type!=='repair'));
    if(st.cost.mode==='complete'){if(ni<0)return;stops[ni]={...stops[ni],done:true,cost:amt};this.setState({stops,sheet:null});if(amt)this.toast(`${S.boughtToast[L]} · ${m2(amt)}`);}
    else{const ns={id:'x'+Date.now(),type:st.cost.type,label:st.cost.label||'',place:PLACE[st.cost.type]||'',done:amt>0,cost:amt};stops.splice(ni<0?stops.length:ni,0,ns);this.setState({stops,sheet:null});this.toast(S.stopAdded[L]);}};
  addPoolToRoute(id){const st=this.state,L=this.L();this.setState({stops:[...st.stops,{id:'x'+Date.now(),type:'pool',poolId:id,done:false}],sheet:null,poolQ:''});this.toast(`${S.addedToRoute[L]} · ${st.pools[id].name}`);}
  confirmOther=()=>{const n=(this.state.otherName||'').trim();if(!n)return;const c={cost:{mode:'add',type:'other',label:n,amt:''},otherName:''};if(this.state.pvRole==='tech')this.setState(c,()=>this.confirmCost());else this.setState({sheet:'cost',...c});};
  startEdit=()=>this.setState(st=>({editing:true,draft:st.stops.filter(s=>!s.done).map(s=>s.id),dragId:null}));
  saveOrder=()=>{const st=this.state,by={};st.stops.forEach(s=>by[s.id]=s);
    this.setState({stops:[...st.stops.filter(s=>s.done),...st.draft.map(id=>by[id])],editing:false,draft:null,dragId:null});this.toast(S.orderSaved[this.L()]);};
  dragStart(id,e){e.preventDefault();const row=e.currentTarget.closest('[data-row]'),h=row?row.offsetHeight+4:60;let y0=e.clientY;this.setState({dragId:id});
    const mv=ev=>{let dy=ev.clientY-y0;const d=[...this.state.draft];let i=d.indexOf(id),moved=false;
      while(dy>h/2&&i<d.length-1){[d[i],d[i+1]]=[d[i+1],d[i]];i++;y0+=h;dy-=h;moved=true;}
      while(dy<-h/2&&i>0){[d[i],d[i-1]]=[d[i-1],d[i]];i--;y0-=h;dy+=h;moved=true;}
      if(moved)this.setState({draft:d});};
    const up=()=>{window.removeEventListener('pointermove',mv);window.removeEventListener('pointerup',up);window.removeEventListener('pointercancel',up);this.setState({dragId:null});};
    window.addEventListener('pointermove',mv);window.addEventListener('pointerup',up);window.addEventListener('pointercancel',up);}
  key(k){this.setState(st=>{let a=st.cost.amt;
    if(k==='⌫')a=a.slice(0,-1);
    else if(k==='.'){if(a.includes('.'))return null;a=(a||'0')+'.';}
    else{if(a.includes('.')&&a.split('.')[1].length>=2)return null;if(a.replace('.','').length>=5)return null;a=a==='0'?k:a+k;}
    return {cost:{...st.cost,amt:a}};});}
  markBought=()=>{const st=this.state,L=this.L();const sum=r2(st.shop.filter(x=>x.checked).reduce((a,x)=>a+x.qty*CH[x.id].p,0));
    this.setState({shop:st.shop.filter(x=>!x.checked),restock:r2(st.restock+sum)});this.toast(`${S.boughtToast[L]} · ${m2(sum)}`);};
  setPrice(id,v){v=v.replace(/[^0-9.]/g,'');if((v.match(/\./g)||[]).length>1||(v.split('.')[1]||'').length>2||v.length>6)return;const n=parseFloat(v),mu=this.state.units==='metric'&&MU[CH[id].u[0]],f=mu?mu.f:1;if(!isNaN(n))CH[id].p=n*f;this.setState(st=>({priceEdit:{...st.priceEdit,[id]:v}}));}
  resetPrices=()=>{Object.keys(CH).forEach(k=>CH[k].p=DEFP[k]);this.setState({priceEdit:{}});this.toast(S.moResetT[this.L()]);};
  dlCsv(key,rev,cost,vis,name){const L=this.L();try{const rows=[['month','revenue','costs','net','visits'],[key,rev,cost,r2(rev-cost),vis]];const b=new Blob([rows.map(r=>r.join(',')).join('\n')],{type:'text/csv'});const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=`statement-${key}.csv`;document.body.appendChild(a);a.click();a.remove();}catch(e){}this.toast(`${name} · CSV ${S.moDl[L]}`);}
  openImport(from){this.setState({screen:'import',sheet:null,imp:{from,step:1,file:'',tip:false,map:Object.fromEntries(IMF.map(f=>[f[0],f[2]]))}});}
  updImp(o){this.setState(st=>({imp:{...st.imp,...o}}));}
  imBack=()=>{const im=this.state.imp;if(im.step>1)this.updImp({step:im.step-1});else this.setState({screen:im.from==='ob'?'ob3':'account'});};
  imParse(){const mp=this.state.imp.map,g=(r,k)=>mp[k]?(r[mp[k]]||'').trim():'';
    return IMROWS.map((r,i)=>{const o={n:i+2,name:g(r,'name'),addr:g(r,'addr'),gate:g(r,'gate'),phone:g(r,'phone'),email:g(r,'email'),fee:parseFloat(g(r,'fee'))};
      o.err=!o.name?'name':!o.addr?'addr':'';o.warn=!o.err&&o.email&&!okEmail(o.email)?'email':'';return o;});}
  imNext=()=>{const st=this.state,im=st.imp,L=this.L();
    if(im.step===1){if(im.file)this.updImp({step:2});return;}
    if(im.step===2){if(!im.map.name||!im.map.addr)return;this.updImp({step:3});return;}
    const rows=this.imParse().filter(r=>!r.err),pools={...st.pools},ids=[],T=S.newTag;
    rows.forEach((r,j)=>{const id='i'+Date.now()+'_'+j,fee=r.fee>0?r.fee:st.fee;ids.push(id);
      pools[id]={id,name:r.name,addr:r.addr,gate:r.gate,kind:'',fee,sched:DEFSCH,drive:10,note:'',dog:false,email:r.warn?'':r.email,phone:r.phone,rate:fee*4,invoiceSent:false,paid:false,
        last:{fc:3,ph:7.5,ta:100,cya:40},chems:[],tasks:{skim:true,brush:true,vacuum:false,baskets:true,filter:false,backwash:false},lastDate:T,lastFilter:['—','—'],history:[]};});
    const o={pools,imp:null};
    if(im.from==='ob')Object.assign(o,{screen:'ob3',obImported:{n:ids.length,file:im.file}});else Object.assign(o,{screen:'pools',prev:'pools',search:''});
    this.setState(o);this.toast(`${ids.length} ${S.imDone[L]}`);};
  shopAddItem=()=>{const st=this.state,a=st.shopAdd,L=this.L();if(!a||!(a.qty>0))return;
    const ex=st.shop.find(x=>x.id===a.id),who=this.state.pvRole==='tech'?'t1':'me',mb=b=>({...(b||{}),[who]:r2(((b||{})[who]||0)+a.qty)});
    this.setState({sheet:null,shop:ex?st.shop.map(x=>x.id===a.id?{...x,qty:r2(x.qty+a.qty),manual:true,by:mb(x.by)}:x):[...st.shop,{id:a.id,qty:a.qty,checked:false,manual:true,by:mb()}]});
    this.toast(`${S.shAddedT[L]} · ${CH[a.id].n[L]}`);};
  resetDemo=()=>{clearTimeout(this.ft);this.setState({...this.fresh(),screen:'today'});};
  restartOb=()=>this.setState({screen:'ob1',sheet:null});
  obNext=()=>this.setState(st=>({screen:st.screen==='ob1'?'ob2':st.screen==='ob2'?'ob3':'today'}));
  obBack=()=>this.setState(st=>({screen:st.screen==='ob3'?'ob2':'ob1'}));

  renderVals(){
    const st=this.state,L=this.L(),pools=st.pools,repOn=st.pvRep,stops=repOn?st.stops:st.stops.filter(s=>s.type!=='repair');
    const t={};for(const k in S)t[k]=S[k][L];
    const met=st.units==='metric',r1=n=>Math.round(n*10)/10;if(met)t.moPricesSub=S.moPricesSubM[L];
    const UN=id=>{const mu=met&&MU[CH[id].u[0]],u=mu?mu.u[L]:CH[id].u[L];return {u,u1:u.replace(/s$/,''),f:mu?mu.f:1};};
    const qs=(id,q)=>{const x=UN(id);return `${fq(r1(q*x.f))} ${x.u}`;},ps=id=>{const x=UN(id);return `${m2(CH[id].p/x.f)}/${x.u1}`;};
    const mkSched=(s,set)=>{const n=needDays(s);return {freqs:Object.keys(FK).map(k=>({label:t[FK[k]],on:s.freq===k,bg:s.freq===k?'var(--seg-on,#ffffff)':'transparent',color:s.freq===k?'var(--t-0a2a5c,#0a2a5c)':'var(--t-5b6b82,#5b6b82)',onClick:()=>set(setFreq(s,k))})),
      days:DAYS.map(d=>{const on=s.days.includes(d);return {label:DAYL[d][L],on,bg:on?'var(--b-0a2a5c,#0a2a5c)':'var(--b-f2f4f7,#f2f4f7)',color:on?'var(--t-ffffff,#ffffff)':'var(--t-0a1b36,#0a1b36)',onClick:()=>set(pickDay(s,d))};}),hint:n===2?t.scDays2:t.scDays1,valid:s.days.length===n};};
    const total=stops.length,doneCount=stops.filter(s=>s.done).length,nextIdx=stops.findIndex(s=>!s.done);
    const rFind=id=>st.repairs.find(x=>x.id===id)||rjNew(id);
    const rName=r=>r.poolId&&pools[r.poolId]?pools[r.poolId].name:(r.newCust?r.newCust.name:''),rAddr=r=>r.poolId&&pools[r.poolId]?pools[r.poolId].addr:(r.newCust?r.newCust.addr:'');
    const stopName=s=>s.type==='pool'?pools[s.poolId].name:s.type==='repair'?`${t.rjShort} · ${rName(rFind(s.repairId))}`:s.type==='other'?(s.label||t.other):t[s.type];
    const earned=stops.reduce((a,s)=>a+(s.done?(s.type==='pool'?s.net:-(s.cost||0)):0),0);
    const ofTxt=(a,b)=>`${a} ${t.of} ${b}`;
    const rv=(k,v)=>{const g=RG[k],s=v<g.min?'low':v>g.max?'high':'ok',c=SC[s];return {label:g.l,value:v.toFixed(g.d),state:t[s],pillBg:c.pill,tileBg:c.tile,color:c.c,s};};
    const role=st.pvRole||'single',isTech=role==='tech',isOwner=role==='owner';
    const feeTxt=f=>L?`Tarifa $${f}`:`$${f} fee`;

    const hero={isPool:false,isStop:false,isDone:nextIdx<0};
    if(nextIdx>=0){const s=stops[nextIdx];hero.label=`${t.nextStop} · ${ofTxt(nextIdx+1,total)}`;
      if(s.type==='pool'){const p=pools[s.poolId];Object.assign(hero,{isPool:true,name:p.name,addr:p.addr,hasGate:!!p.gate,gate:p.gate,dog:!!p.dog,fee:isTech?'':feeTxt(p.fee),noteDate:p.lastDate[L],note:p.note});}
      else if(s.type==='repair'){const R=rFind(s.repairId);Object.assign(hero,{isStop:true,isRepair:true,notRepair:false,name:rName(R),sub:`${R.type?RT[R.type][0][L]:t.rjRepair}${R.time?' · '+R.time:''} · ${rAddr(R)}`,rjNo:`${t.rjRepair} #${R.id}`,license:!!R.license,openJob:()=>this.openRepair(R.id),iconCls:'ph ph-wrench'});}
      else Object.assign(hero,{isStop:true,notRepair:true,name:stopName(s),sub:s.place||t.otherSub,iconCls:'ph ph-'+SICON[s.type]});}
    const upcoming=stops.map((s,i)=>({s,i})).filter(o=>!o.s.done&&o.i!==nextIdx).map((o,j)=>{const s=o.s,pool=s.type==='pool',rep=s.type==='repair';const p=pool?pools[s.poolId]:null;
      return {isPool:pool,isOther:!pool&&!rep,isRepair:rep,disc:String(o.i+1),iconCls:pool||rep?'':'ph-fill ph-'+SICON[s.type],name:stopName(s),right:pool?`${p.drive} min`:rep?(rFind(s.repairId).time||''):s.place,divider:dv(j),onClick:pool?()=>this.openPool(p.id):rep?()=>this.openRepair(s.repairId):()=>{}};});
    const byId={};stops.forEach(s=>byId[s.id]=s);
    const editRows=st.editing&&st.draft?st.draft.filter(id=>byId[id]).map((id,j)=>{const s=byId[id],pool=s.type==='pool',rep=s.type==='repair',p=pool?pools[s.poolId]:null,drag=st.dragId===id;
      return {isPool:pool,isOther:!pool&&!rep,isRepair:rep,disc:String(doneCount+j+1),iconCls:pool||rep?'':'ph-fill ph-'+SICON[s.type],name:stopName(s),right:pool?`${p.drive} min`:rep?(rFind(s.repairId).time||''):s.place,
        bg:drag?'var(--c-ffffff,#ffffff)':'var(--b-f8f9fb,#f8f9fb)',border:drag?'var(--l-d5dbe3,#d5dbe3)':'var(--l-eef0f3,#eef0f3)',shadow:drag?'var(--shd,0 12px 24px -10px rgba(10,27,54,.25))':'none',onDown:e=>this.dragStart(id,e)};}):[];
    const onRoute=new Set(stops.filter(s=>s.type==='pool').map(s=>s.poolId)),pq=(st.poolQ||'').trim().toLowerCase();
    const act=Object.values(pools).filter(p=>!p.archived);
    const offAll=act.filter(p=>!onRoute.has(p.id));
    const offRoute=offAll.filter(p=>!pq||p.name.toLowerCase().includes(pq)||p.addr.toLowerCase().includes(pq)).sort((a,b)=>a.name.localeCompare(b.name))
      .map((p,j)=>({name:p.name,initials:ini(p.name),sub:isTech?p.addr:`${p.addr} · ${feeTxt(p.fee)}`,divider:dv(j),onClick:()=>this.addPoolToRoute(p.id)}));
    const doneRows=stops.filter(s=>s.done).map((s,j)=>{const pool=s.type==='pool',rep=s.type==='repair';
      return {name:stopName(s),sub:pool?(isTech?`${s.mins} min`:`${s.mins} min · ${t.chems} ${m2(s.chem)}`):rep?`#${s.repairId} · ${t.rjDoneLbl}`:s.place,right:isTech||rep?'':pool?`+${m2(s.net)}`:(s.cost?`−${m2(s.cost)}`:'—'),color:pool?'var(--t-0f5c3b,#0f5c3b)':'var(--t-9a2f17,#9a2f17)',divider:dv(j),onClick:pool?()=>this.openPool(s.poolId):rep?()=>this.openRepair(s.repairId):()=>{}};});

    let v={readings:[],chems:[],tasks:[]};
    if(st.visit){const x=st.visit,p=pools[x.poolId],si=stops.findIndex(s=>s.id===x.stopId);
      const sec=Math.floor(Math.max(0,st.now-x.start)/1000),chemCost=x.chems.reduce((a,c)=>a+c.qty*CH[c.id].p,0),net=p.fee-chemCost;
      const nDone=TASKS.filter(k=>x.tasks[k]).length,hasNote=!!x.note;
      const ed=!!x.editHist;
      v={name:p.name,sub:ed?`${t.editingVisit} · ${x.editDate[L]}`:`${L?'Parada':'Stop'} ${ofTxt(si+1,total)} · ${p.addr}`,timer:ed?`${x.editMins} min ${t.onSite}`:`${String(Math.floor(sec/60)).padStart(2,'0')}:${String(sec%60).padStart(2,'0')} ${t.onSite}`,from:`${t.from} ${ed?x.editDate[L]:p.lastDate[L]}`,saveLabel:ed?t.saveChanges:t.saveVisit,
        readings:RK.map((k,j)=>({...rv(k,x.r[k]),divider:dv(j),minus:()=>this.reading(k,-1),plus:()=>this.reading(k,1)})),
        chems:x.chems.map((c,i)=>{const ch=CH[c.id],cost=isTech?'':' · '+m2(c.qty*ch.p),changed=c.qty!==c.prev;
          return {name:ch.n[L],qty:qs(c.id,c.qty),sub:c.prev===0?`${t.added}${cost}`:changed?`${t.changed} ${qs(c.id,c.prev)}${cost}`:`${t.same}${cost}`,
            subColor:changed?'var(--t-0a6f8a,#0a6f8a)':'var(--t-5b6b82,#5b6b82)',divider:dv(i),minus:()=>this.chem(i,-1),plus:()=>this.chem(i,1)};}),
        tasks:TASKS.map((k,j)=>{const on=!!x.tasks[k];return {label:t[k],on,off:!on,color:on?'var(--t-0a1b36,#0a1b36)':'var(--t-5b6b82,#5b6b82)',iconCls:'ph ph-'+TICON[k],divider:dv(j),toggle:()=>this.upd(y=>{y.tasks={...y.tasks,[k]:!y.tasks[k]};return y;})};}),
        tasksDone:`${ofTxt(nDone,TASKS.length)} ${t.done}`,
        ...(()=>{const n=x.photos.length,full=n>=4;return {hasPhotos:n>0,photoFull:full,photoCursor:full?'default':'pointer',
          photos:x.photos.map(ph=>({label:`${t.photoN} ${ph.n}`,bg:PHBG[(ph.n-1)%4],remove:()=>this.upd(y=>{y.photos=y.photos.filter(z=>z.id!==ph.id);return y;})})),
          photoBg:n?'var(--b-e8f5ee,#e8f5ee)':'var(--c-ffffff,#ffffff)',photoDot:full?'var(--b-13734a,#13734a)':'var(--b-0a6f8a,#0a6f8a)',photoIcon:full?'ph-bold ph-check':(n?'ph-bold ph-plus':'ph ph-camera'),
          photoTitle:n?(L?`${n} ${n===1?'foto':'fotos'}`:`${n} ${n===1?'photo':'photos'}`):t.addPhoto,
          photoSub:full?`${t.maxPhotos} · ${ofTxt(4,4)}`:n?`${t.addAnother} · ${ofTxt(n,4)}`:t.upTo4,photoSubColor:n?'var(--t-0f5c3b,#0f5c3b)':'var(--t-0a5a70,#0a5a70)'};})(),
        noteOn:hasNote,noteBg:hasNote?'var(--b-e8f5ee,#e8f5ee)':'var(--c-ffffff,#ffffff)',noteDot:hasNote?'var(--b-13734a,#13734a)':'var(--b-0a6f8a,#0a6f8a)',noteIcon:hasNote?'ph-bold ph-check':'ph ph-chat-text',noteTitle:hasNote?t.noteAdded:t.writeNote,noteSub:hasNote?t.tapEdit:t.noteSub,noteSubColor:hasNote?'var(--t-0f5c3b,#0f5c3b)':'var(--t-0a5a70,#0a5a70)',
        noteOpen:x.noteOpen,note:x.note,
        earned:isTech?`${ofTxt(nDone,TASKS.length)} ${t.done}`:(L?`${m2(net)} ganado`:`${m2(net)} earned`),breakdown:isTech?`${x.chems.filter(c=>c.qty>0).length} ${t.chems.toLowerCase()} · ${x.photos.length} ${t.rpPhotos.toLowerCase()}`:(L?`Tarifa ${m2(p.fee)} − ${m2(chemCost)} químicos`:`${m2(p.fee)} fee − ${m2(chemCost)} chems`)};}

    let s={};
    if(st.saved){const x=st.saved,nx=x.nextId?stops.find(y=>y.id===x.nextId):null,cd=this.props.countdown??3;
      const sh=pools[x.poolId]&&pools[x.poolId].history.find(y=>y.id===x.histId),sent=!!(sh&&sh.sent);
      s={tasksBig:`${sh?TASKS.filter(k=>sh.tasks[k]).length:0}/${TASKS.length}`,tasksSub:`${t.tasks.toLowerCase()} ${t.done}`,reportSent:sent,reportLabel:sent?t.rpSentBtn:t.rpSendReport,reportIcon:sent?'ph-bold ph-check':'ph ph-paper-plane-tilt',title:`${t.visitSaved} · ${x.name}`,net:m2(x.net),fee:m2(x.fee),chem:`−${m2(x.chem)}`,mins:`${x.mins} min`,nextLabel:nx?`${t.next}: ${stopName(nx)}`:t.routeDone,
        bar:st.counting?`${Math.round((cd-st.count)/cd*100)}%`:'0%',countText:st.counting?(L?`Regresando a Hoy en ${st.count}`:`Back to Today in ${st.count}`):t.paused};}

    const q=st.search.trim().toLowerCase();
    const plist=act.filter(p=>!q||p.name.toLowerCase().includes(q)||p.addr.toLowerCase().includes(q)).sort((a,b)=>a.name.localeCompare(b.name));
    const poolRows=plist.map((p,j)=>{const bad=RK.map(k=>rv(k,p.last[k])).find(r=>r.s!=='ok');
      return {name:p.name,addr:p.addr,initials:ini(p.name),last:`${t.lastVisit}: ${p.lastDate[L]}`,hasFlag:!!bad,flag:bad?`${bad.label} ${bad.state.toLowerCase()}`:'',flagBg:bad?SC[bad.s].pill:'',flagColor:bad?SC[bad.s].c:'',divider:dv(j),onClick:()=>this.openPool(p.id)};});
    const margin=p=>{const e=p.history.filter(inMonth),fee=e.reduce((a,h)=>a+h.fee,0),net=e.reduce((a,h)=>a+h.net,0);return {n:e.length,net,pct:fee?Math.round(net/fee*100):0};};
    const P=pools[st.poolId],pm=margin(P);
    const NC={bg:'var(--b-f2f4f7,#f2f4f7)',color:'var(--t-0a1b36,#0a1b36)',ic:'var(--t-5b6b82,#5b6b82)'},chips=[];
    if(P.kind)chips.push({...NC,iconCls:'ph ph-swimming-pool',label:P.kind});if(P.gate)chips.push({...NC,iconCls:'ph ph-lock-key',label:`${t.gate} ${P.gate}`});
    if(!isTech)chips.push({...NC,iconCls:'ph ph-calendar-check',label:`$${P.rate??P.fee*4}${t.perMo}`},{...NC,iconCls:'ph ph-currency-dollar',label:feeTxt(P.fee)});
    if(P.dog)chips.push({bg:'var(--b-fdf3dd,#fdf3dd)',color:'var(--t-6e4800,#6e4800)',ic:'var(--t-6e4800,#6e4800)',iconCls:'ph-fill ph-dog',label:t.dog});
    chips.push({...NC,iconCls:'ph ph-funnel',label:`${t.lastFilter}: ${P.lastFilter[L]}`});
    const onTodayP=stops.some(s=>s.type==='pool'&&s.poolId===P.id),hasEm=!!P.email;
    const bill=[['invoiceSent','ph ph-file-text'],['paid','ph ph-check-square']].map(([k,ic],j)=>{const on=!!P[k];return {label:k==='paid'?t.paymentReceived:t.invoiceSent,iconCls:ic,on,track:on?'var(--b-0a2a5c,#0a2a5c)':'var(--b-d5dbe3,#d5dbe3)',knob:on?'18px':'0px',divider:dv(j),
      toggle:()=>this.setState(s2=>({pools:{...s2.pools,[P.id]:{...s2.pools[P.id],[k]:!s2.pools[P.id][k]}}}))};});
    const pd={name:P.name,addr:P.addr,chips,canAdd:!onTodayP&&!P.archived,onToday:onTodayP,addToday:()=>this.addPoolToRoute(P.id),
      openEst:()=>this.openEst('pool'),schedLabel:schedLabel(P.sched||DEFSCH,L),schedEdit:!isTech,schedView:isTech,openSched:()=>this.setState({sheet:'sched',schedDraft:{...(P.sched||DEFSCH)}}),canArchive:!isTech&&!P.archived,askArchive:()=>this.setState({sheet:'archive'}),
      phone:P.phone||'—',tel:`tel:${(P.phone||'').replace(/[^0-9+]/g,'')}`,sms:`sms:${(P.phone||'').replace(/[^0-9+]/g,'')}`,
      emailLabel:hasEm?P.email:t.noEmailOnFile,emailColor:hasEm?'var(--t-0a1b36,#0a1b36)':'var(--t-5b6b82,#5b6b82)',noEmail:!hasEm,mailto:hasEm?`mailto:${P.email}`:undefined,
      mailBg:hasEm?'var(--c-ffffff,#ffffff)':'var(--b-f4f6f8,#f4f6f8)',mailShadow:hasEm?'var(--shd,0 6px 16px -10px rgba(10,27,54,.20))':'none',mailColor:hasEm?'var(--t-0a2a5c,#0a2a5c)':'var(--t-6b7889,#6b7889)',mailIc:hasEm?'var(--t-0a6f8a,#0a6f8a)':'var(--t-8a96a8,#6b7889)',
      billingTitle:`${t.billing} · ${t.rMonth}`,billing:bill,marginAmt:m2(pm.net),marginPct:`${pm.pct}%`,visitsLabel:`${pm.n} ${t.visits}`,
      lastDate:P.lastDate[L],readings:RK.map(k=>rv(k,P.last[k])),note:P.note,
      history:(()=>{const MO={Sep:9,Oct:10},dk=d=>d===TODAY?1019:(MO[d[0].slice(0,3)]||0)*100+parseInt(d[0].slice(4),10);
        const vis=P.history.map(h=>({k:dk(h.date),row:{date:h.date[L],sub:isTech?`${h.mins} min`:`${h.mins} min · ${t.chems} ${m2(h.chem)}`,net:isTech?'':`+${m2(h.net)}`,onClick:()=>this.setState({screen:'visitSum',histId:h.id})}}));
        const reps=st.repairs.filter(r=>repOn&&r.poolId===P.id&&r.status===4).map(r=>{const d=r.completedOn||TODAYLBL;return {k:dk(d)+.5,row:{date:`${t.rjShort} · ${r.type?RT[r.type][0][L]:''}${isTech?'':' · '+m2(rjCalc(r).total)}`,sub:`${d[L]} · #${r.id}`,net:'',onClick:()=>this.openRepair(r.id)}};});
        return [...vis,...reps].sort((a,b)=>b.k-a.k).slice(0,5).map((o,j)=>({...o.row,divider:dv(j)}));})()};
    const chemQty=c=>qs(c.id,c.qty);
    let vs={readings:[],chems:[],tasks:[]};
    const VH=st.screen==='visitSum'?P.history.find(h=>h.id===st.histId):null;
    if(VH){const n=TASKS.filter(k=>VH.tasks[k]).length;
      vs={date:VH.date===TODAY?`${t.today} · ${t.monthDay}`:VH.date[L],sub:`${P.name} · ${P.addr}`,sent:!!VH.sent,net:m2(VH.net),
        breakdown:L?`Tarifa ${m2(VH.fee)} − ${m2(VH.chem)} químicos · ${VH.mins} min`:`${m2(VH.fee)} fee − ${m2(VH.chem)} chems · ${VH.mins} min`,
        readings:RK.map(k=>rv(k,VH.r[k])),chems:VH.chems.map((c,j)=>({name:CH[c.id].n[L],qty:chemQty(c),divider:dv(j)})),noChems:VH.chems.length===0,
        tasks:TASKS.map((k,j)=>{const on=!!VH.tasks[k];return {label:t[k],on,off:!on,color:on?'var(--t-0a1b36,#0a1b36)':'var(--t-5b6b82,#5b6b82)',divider:dv(j)};}),tasksDone:`${ofTxt(n,TASKS.length)} ${t.done}`,
        photosLabel:VH.photos?(L?`${VH.photos} ${VH.photos===1?'foto':'fotos'}`:`${VH.photos} ${VH.photos===1?'photo':'photos'}`):t.rpNonePhotos,noteLabel:VH.note||t.vsNoNote};}
    let rp={inc:[]};
    if(st.report&&st.screen==='report'){const R=st.report,p=pools[R.poolId],h=p.history.find(x=>x.id===R.histId);
      const tDone=TASKS.filter(k=>h.tasks[k]),av={readings:true,chems:h.chems.length>0,tasks:tDone.length>0,photos:h.photos>0,note:!!h.note};
      const on=k=>av[k]&&R.inc[k];
      const INC=[['readings',t.readings,'drop-half',RK.map(k=>RG[k].l).join(' · ')],['chems',t.rpChems,'flask',av.chems?h.chems.map(c=>CH[c.id].n[L]).join(', '):t.rpNoneChems],
        ['tasks',t.tasks,'list-checks',av.tasks?`${ofTxt(tDone.length,TASKS.length)} ${t.rpTasksDone}`:t.rpNoneTasks],['photos',t.rpPhotos,'camera',av.photos?`${h.photos} ${h.photos===1?t.rpPhotoOne:t.rpPhotoMany}`:t.rpNonePhotos],
        ['note',t.rpNote,'chat-text',av.note?h.note:t.rpNoneNote]];
      const secs=[`${t.rpHi} ${p.name.split(' ')[0]},`,h.date===TODAY?t.rpIntroToday:`${t.rpIntroOn} ${h.date[L]}.`];
      if(on('readings'))secs.push(`${t.readings}\n`+RK.map(k=>{const x=rv(k,h.r[k]);return `${x.label} ${x.value}${x.s==='ok'?'':` (${x.state})`}`;}).join(' · '));
      if(on('chems'))secs.push(`${t.rpChems}\n`+h.chems.map(c=>`• ${CH[c.id].n[L]}: ${chemQty(c)}`).join('\n'));
      if(on('tasks'))secs.push(`${t.tasks}\n`+tDone.map(k=>`• ${t[k]}`).join('\n'));
      if(on('photos'))secs.push(`${h.photos} ${h.photos===1?t.rpPhotoOne:t.rpPhotoMany}`);
      if(on('note'))secs.push(`${t.rpNoteHead}\n${h.note}`);
      secs.push(`${t.rpThanks}\n${st.biz}`);
      const hasEmail=!!p.email;
      rp={sub:`${p.name} · ${h.date===TODAY?t.today:h.date[L]}`,email:p.email,showEmail:hasEmail&&!R.editing,showEmpty:!hasEmail&&!R.editing,showEdit:!!R.editing,draft:R.draft,badEmail:!!R.bad,
        inc:INC.map(([k,label,ic,sub],j)=>{const dis=!av[k],o=on(k);return {label,sub,iconCls:'ph ph-'+ic,on:o,disabled:dis,cursor:dis?'default':'pointer',color:dis?'var(--t-6b7889,#6b7889)':'var(--t-0a1b36,#0a1b36)',
          track:o?'var(--b-0a2a5c,#0a2a5c)':'var(--b-d5dbe3,#d5dbe3)',knob:o?'18px':'0px',divider:dv(j),toggle:()=>{if(!dis)this.updRep({inc:{...R.inc,[k]:!R.inc[k]}});}};}),
        subject:`${t.rpSubject} · ${p.addr}`,body:secs.join('\n\n'),
        toLabel:hasEmail?t.rpTo:t.rpSendTo,toValue:hasEmail?p.email:t.rpNeedEmail,cantSend:!hasEmail||!!R.editing,sendBg:hasEmail&&!R.editing?'var(--p-0a2a5c,#0a2a5c)':'var(--p-a3adbb,#6b7889)'};}

    const td={rev:0,chem:0,fuel:0,lunch:0,supply:0,other:0,repair:0,visits:0};
    stops.forEach(x=>{if(!x.done)return;if(x.type==='pool'){td.rev+=x.fee;td.chem+=x.chem;td.visits++;}else td[x.type]+=x.cost||0;});
    const b=BASE[st.range],ag={};['rev','chem','fuel','lunch','supply','visits'].forEach(k=>ag[k]=b[k]+td[k]);ag.restock=b.restock+st.restock;ag.other=td.other;
    const chemBase=b.chem+td.chem,byChem=Object.keys(SHARE).map(id=>{const ch=CH[id],q0=chemBase*SHARE[id]/DEFP[id],q=ch.step<1?Math.round(q0*2)/2:Math.round(q0);return {id,q,cost:r2(q*ch.p)};}).filter(o=>o.q>0);
    ag.chem=r2(byChem.reduce((a,o)=>a+o.cost,0));
    const other=ag.fuel+ag.lunch+ag.supply+ag.other,rl={today:t.rToday,week:t.rWeek,month:t.rMonth};
    const inR=iso=>!!iso&&(st.range==='today'?iso===TODAYISO:st.range==='week'?(iso>='2026-10-13'&&iso<=TODAYISO):iso.slice(0,7)==='2026-10');
    const repDone=st.repairs.filter(r=>repOn&&r.status===4&&inR(r.completedISO)),repRev=repDone.reduce((a,r)=>a+rjCalc(r).total,0),repParts=repDone.reduce((a,r)=>a+rjCalc(r).parts,0);
    const jobsTxt=n=>`${n} ${n===1?t.rjJob:t.rjJobs}`;
    const m={netLabel:`${t.net} · ${rl[st.range]}`,net:m2(ag.rev+repRev-ag.chem-other-repParts),rev:m2(ag.rev+repRev),chem:`−${m2(ag.chem)}`,other:`−${m2(other+repParts)}`};
    const revGroups=[{label:t.rjCleanings,sub:`${ag.visits} ${t.visits}`,a:ag.rev,i:'swimming-pool'},{label:t.rjRepairs,sub:jobsTxt(repDone.length),a:repRev,i:'wrench'}].map((g,j)=>({label:g.label,sub:g.sub,iconCls:'ph ph-'+g.i,amount:m2(g.a),divider:dv(j)}));
    const costGroups=[{label:t.chems,sub:`${ag.visits} ${t.visits}`,a:ag.chem,i:'flask'},{label:t.fuel,sub:'',a:ag.fuel,i:'gas-pump'},{label:t.lunch,sub:'',a:ag.lunch,i:'fork-knife'},{label:t.otherStops,sub:'',a:ag.other,i:'map-pin'},{label:t.supply,sub:'',a:ag.supply,i:'storefront'},{label:t.rjPartsCost,sub:jobsTxt(repDone.length),a:repParts,i:'wrench'},{label:t.restockL,sub:t.restock,a:ag.restock,c:'var(--t-5b6b82,#5b6b82)',i:'package'}]
      .filter(g=>g.a>0).map((g,j)=>({label:g.label,sub:g.sub,hasSub:!!g.sub,iconCls:'ph ph-'+g.i,amount:`−${m2(g.a)}`,color:g.c||'var(--t-9a2f17,#9a2f17)',divider:dv(j)}));
    const lowest=act.map(p=>({p,mg:margin(p)})).sort((a,c)=>a.mg.pct-c.mg.pct).slice(0,2)
      .map((o,j)=>({name:o.p.name,sub:`${m2(o.mg.net)} · ${o.mg.n} ${t.visits}`,pct:`${o.mg.pct}%`,divider:dv(j),onClick:()=>this.openPool(o.p.id)}));
    const u1=id=>CH[id].u[L].replace(/s$/,'');
    const chemRows=byChem.map((o,j)=>({name:CH[o.id].n[L],sub:`${qs(o.id,o.q)} · ${ps(o.id)}`,amount:m2(o.cost),divider:dv(j)}));
    const byChemSub=`${rl[st.range]} · ${m2(ag.chem)}`;
    const avgCost=ag.visits?{value:m2((ag.chem+other)/ag.visits),sub:`${t.chems} ${m2(ag.chem/ag.visits)} · ${t.other} ${m2(other/ag.visits)} · ${ag.visits} ${t.visits}`}:{value:'—',sub:t.moNoVisits};
    const pf=p=>{const d=p.chems.reduce((a,c)=>a+c.qty*DEFP[c.id],0),n=p.chems.reduce((a,c)=>a+c.qty*CH[c.id].p,0);return d?n/d:1;};
    const cpp=act.map(p=>{const hs=p.history.filter(inMonth);return {p,n:hs.length,avg:hs.length?hs.reduce((a,h)=>a+h.chem,0)/hs.length*pf(p):0};}).filter(o=>o.n).sort((a,c)=>c.avg-a.avg);
    const fleet=cpp.reduce((a,o)=>a+o.avg,0)/(cpp.length||1);
    const cppRows=(st.cppAll?cpp:cpp.slice(0,6)).map((o,j)=>{const x=o.avg/fleet,out=x>=1.5,pct=Math.round(o.avg/o.p.fee*100),xs=x.toFixed(1).replace(/\.0$/,'');
      return {name:o.p.name,out,badge:`${xs}× ${t.moAvgB}`,sub:out?`${pct}% ${t.moOfFee} · ${m2(o.avg-fleet)} ${t.moAbove}`:`${pct}% ${t.moOfFee}`,subColor:out?'var(--t-9a2f17,#9a2f17)':'var(--t-5b6b82,#5b6b82)',cost:`${m2(o.avg)}${t.moPerVisit}`,fee:`${t.fee} ${m2(o.p.fee)}`,color:out?'var(--t-9a2f17,#9a2f17)':'var(--t-0a1b36,#0a1b36)',divider:dv(j),onClick:()=>this.openPool(o.p.id)};});
    const cppSub=`${t.chems}${t.moPerVisit} vs. ${t.fee.toLowerCase()} · ${t.rMonth} · ${t.moRouteAvg} ${m2(fleet)}`;
    const nEdited=Object.keys(CH).filter(k=>CH[k].p!==DEFP[k]).length;
    const pricesRowSub=nEdited?`${Object.keys(CH).length} · ${nEdited} ${t.moEdited}`:t.moPricesSub;
    const priceRows=Object.keys(CH).map((id,j)=>({name:CH[id].n[L],unit:`/ ${UN(id).u1}`,val:st.priceEdit[id]??(CH[id].p/UN(id).f).toFixed(2),changed:CH[id].p!==DEFP[id],was:`${t.moWas} ${m2(DEFP[id]/UN(id).f)}`,divider:dv(j),onChange:e=>this.setPrice(id,e.target.value)}));
    const stmRows=STM.map(([n,key,rev,cost,vis],j)=>({name:n[L],sub:`${t.net} ${m2(rev-cost)} · ${vis} ${t.visits}`,divider:dv(j),pdfLabel:`${n[L]} PDF`,csvLabel:`${n[L]} CSV`,pdf:()=>this.toast(`${n[L]} · PDF ${t.moDl}`),csv:()=>this.dlCsv(key,rev,cost,vis,n[L])}));
    const TMIX=[['t1',.45,.85],['t2',.35,1.45],['me',.2,.7]],tmW=TMIX.reduce((a,x)=>a+x[1]*x[2],0);
    const tmRaw=TMIX.map(([k,vs,cm])=>{const v=Math.round(ag.visits*vs),c=r2(ag.chem*vs*cm/tmW);return {k,v,c,pv:v?c/v:0};});
    const tmAvg=ag.visits?ag.chem/ag.visits:0;
    const techMo=tmRaw.map((o,j)=>{const nm=o.k==='me'?`${st.owner||t.owner} (${t.youL})`:TECHS.find(x=>x.id===o.k).name,x=tmAvg?o.pv/tmAvg:0,out=o.v>0&&x>=1.3,xs=x.toFixed(1).replace(/\.0$/,'');
      return {name:nm,initials:ini(o.k==='me'?(st.owner||'MD'):nm),cost:m2(o.c),visits:`${o.v} ${t.visits}`,out,badge:`${xs}× ${t.moAvgB}`,sub:o.v?`${m2(o.pv)}${t.moPerVisit}${out?` · ${m2(o.pv-tmAvg)} ${t.moAbove}`:''}`:t.moNoVisits,subColor:out?'var(--t-9a2f17,#9a2f17)':'var(--t-5b6b82,#5b6b82)',color:out?'var(--t-9a2f17,#9a2f17)':'var(--t-0a1b36,#0a1b36)',divider:dv(j)};});
    const techMoSub=`${t.chems} · ${rl[st.range]} · ${t.moRouteAvg} ${m2(tmAvg)}${t.moPerVisit}`;
    const ranges=['today','week','month'].map(r=>({label:rl[r],on:st.range===r,bg:st.range===r?'var(--b-0a2a5c,#0a2a5c)':'transparent',color:st.range===r?'var(--t-ffffff,#ffffff)':'var(--t-5b6b82,#5b6b82)',onClick:()=>this.setState({range:r})}));

    const shopTotal=st.shop.reduce((a,x)=>a+x.qty*CH[x.id].p,0),checked=st.shop.filter(x=>x.checked),checkedSum=checked.reduce((a,x)=>a+x.qty*CH[x.id].p,0);
    const TN={t1:TECHS[0].name.split(' ')[0],t2:TECHS[1].name.split(' ')[0],me:t.youL};
    const byTxt=x=>Object.entries(x.by||{}).filter(([,q])=>q>0).map(([k,q])=>`${TN[k]} ${fq(r1(q*UN(x.id).f))}`).join(' · ');
    const shopItems=st.shop.map((x,j)=>{const ch=CH[x.id];return {name:ch.n[L],hasBy:isOwner&&!!byTxt(x),byTxt:byTxt(x),qty:isTech?`${qs(x.id,x.qty)}${x.manual?` · ${t.shByYou}`:''}`:isOwner?`${qs(x.id,x.qty)} · ${ps(x.id)}`:`${qs(x.id,x.qty)} · ${ps(x.id)}${x.manual?` · ${t.shByYou}`:''}`,cost:isTech?'':m2(x.qty*ch.p),checked:x.checked,checkCls:x.checked?'ph-bold ph-check':'',
      boxBg:x.checked?'var(--b-0a2a5c,#0a2a5c)':'var(--c-ffffff,#ffffff)',boxBorder:x.checked?'var(--l-0a2a5c,#0a2a5c)':'var(--l-a3adbb,#a3adbb)',boxStyle:x.checked?'solid':'dashed',color:x.checked?'var(--t-8a96a8,#6b7889)':'var(--t-0a1b36,#0a1b36)',deco:x.checked?'line-through':'none',divider:dv(j),
      onClick:()=>this.setState(y=>({shop:y.shop.map(z=>z.id===x.id?{...z,checked:!z.checked}:z)}))};});
    const nTechs=new Set(st.shop.flatMap(x=>Object.keys(x.by||{}).filter(k=>k!=='me'))).size;
    const shopSub=isTech?`${st.shop.length} ${t.items}`:(`${st.shop.length} ${t.items} · ~${m2(Math.round(shopTotal))}`.replace('.00','')+(isOwner&&nTechs?` · ${nTechs} ${t.techsL}`:''));
    const shopByTech=['t1','t2','me'].map(k=>{const its=st.shop.filter(x=>(x.by||{})[k]>0);return {k,its,total:its.reduce((a,x)=>a+x.by[k]*CH[x.id].p,0)};}).filter(o=>o.its.length)
      .map(o=>({name:o.k==='me'?t.youL:TECHS.find(x=>x.id===o.k).name,total:m2(o.total),items:`${o.its.length} ${t.items}`}));
    const techRows=TECHS.map((x,j)=>({name:x.name,initials:ini(x.name),sub:`${t.onRouteL} · ${ofTxt(x.done,x.stops)} ${t.stopsL}`,tel:`tel:${x.phone.replace(/[^0-9]/g,'')}`,callLabel:`${t.call} ${x.name}`,divider:dv(j)}));

    let es={services:[],freqs:[]};
    if(st.est){const E=st.est,terms=st.terms??t.esTermsDef,em=E.email.trim(),okE=okEmail(em),rate=parseFloat(E.rate),okR=rate>0,first=(E.name.trim().split(' ')[0])||'',biz=st.biz||'Adam’s Pool Service';
      const SV={weekly:t.esSvWeekly,biweekly:t.esSvBi,chem:t.esSvChem},FQ={weekly:t.esFqW,biweekly:t.esFq2,monthly:t.esFqM};
      const chip=(on)=>({bg:on?'var(--b-0a2a5c,#0a2a5c)':'var(--b-f2f4f7,#f2f4f7)',color:on?'var(--t-ffffff,#ffffff)':'var(--t-0a1b36,#0a1b36)'}),seg=(on)=>({bg:on?'var(--seg-on,#ffffff)':'transparent',color:on?'var(--t-0a2a5c,#0a2a5c)':'var(--t-5b6b82,#5b6b82)'});
      es={sub:E.name.trim()||t.esNewCust,name:E.name,email:E.email,setName:e=>this.updEst({name:e.target.value}),setEmail:e=>this.updEst({email:e.target.value}),
        bad:E.tried&&!okE,emailBorder:E.tried&&!okE?'var(--l-e0a294,#e0a294)':'var(--l-e3e7ec,#e3e7ec)',
        services:Object.keys(SV).map(k=>({label:SV[k],on:E.service===k,...chip(E.service===k),onClick:()=>this.updEst({service:k})})),
        freqs:Object.keys(FQ).map(k=>({label:FQ[k],on:E.freq===k,...seg(E.freq===k),onClick:()=>this.updEst({freq:k})})),
        rate:E.rate,setRate:e=>{const v=e.target.value.replace(/[^0-9.]/g,'');if(v.length<=7)this.updEst({rate:v});},
        terms,viewTerms:!E.editing,editingTerms:!!E.editing,draft:E.draft,setDraft:e=>this.updEst({draft:e.target.value}),
        editTerms:()=>this.updEst({editing:true,draft:terms}),cancelTerms:()=>this.updEst({editing:false}),
        saveTerms:()=>{const d=st.est.draft.trim();this.setState(y=>({terms:d||null,est:{...y.est,editing:false}}));this.toast(t.esTplSaved);},
        subject:`${t.esSubject} · ${biz}`,
        body:[`${t.rpHi}${first?' '+first:''},`,t.esIntro,`${t.esService}: ${SV[E.service]}\n${t.esFreq}: ${FQ[E.freq]}\n${t.esRate}: ${okR?m2(rate).replace('.00',''):'—'}${t.perMo}`,`${t.esTerms}\n${terms}`,`${t.rpThanks}\n${st.owner||''}\n${biz}`].join('\n\n'),
        toLabel:okE?t.rpTo:t.rpSendTo,toValue:okE?em:t.rpNeedEmail,cantSend:!okE||!okR||!!E.editing,sendBg:okE&&okR&&!E.editing?'var(--p-0a2a5c,#0a2a5c)':'var(--p-a3adbb,#6b7889)',send:this.sendEst};}
    const archList=Object.values(pools).filter(p=>p.archived).sort((a,b)=>a.name.localeCompare(b.name));
    const arRows=archList.map((p,j)=>({name:p.name,initials:ini(p.name),sub:`${p.addr} · ${t.arOn} ${(p.archivedOn||['',''])[L]}`,divider:dv(j),restore:()=>this.restorePool(p.id)}));
    const rjSorted=[...st.repairs].sort((a,b)=>(a.status===4)-(b.status===4)||b.id-a.id);
    const rjCards=rjSorted.map(r=>{const c=rjCalc(r);return {no:`#${r.id}`,iconCls:'ph ph-'+(r.type?RT[r.type][1]:'wrench'),status:RST[r.status][L],stBg:RSTC[r.status][0],stColor:RSTC[r.status][1],name:rName(r)||t.rjPickCust,
      sub:`${r.type?RT[r.type][0][L]:t.rjRepair} · ${r.date?fmtD(r.date,L)+(r.time?' '+r.time:''):t.rjNotSched}`,license:!!r.license,hasFrom:!isTech&&!!r.fromTech,from:`${t.rjFrom} ${r.fromTech?TECHS.find(x=>x.id===r.fromTech).name:''}`,routed:!!r.routed&&r.status<4,...(r.status===1&&r.quoted?{hasTag:true,tag:`${t.rjSentOn} ${(r.sentOn||TODAYLBL)[L]}`,tagBg:'var(--b-fdf3dd,#fdf3dd)',tagColor:'var(--t-6e4800,#6e4800)',tagIcon:'ph ph-paper-plane-tilt'}:r.status===0&&r.declined?{hasTag:true,tag:t.rjDeclined,tagBg:'var(--b-fdece8,#fdece8)',tagColor:'var(--t-9a2f17,#9a2f17)',tagIcon:'ph ph-x-circle'}:{hasTag:false}),total:isTech?'':m2(c.total),onClick:()=>this.openRepair(r.id)};});
    const rjCount=`${st.repairs.filter(r=>r.status<4).length} ${t.rjOpenN}`;
    let rj={steps:[],types:[],syms:[],quick:[],parts:[],laborModes:[],photos:[]},rc={rows:[]},qv={lines:[]},sv2={inc:[]},rd={};
    if(st.rj){const R=st.rj,c=rjCalc(R),has=!!(R.poolId||R.newCust),nm=rName(R),err=st.rjErr||'',u=fn=>()=>this.updRj(fn),hrs=isTech||R.labor.mode==='hours';
      const nItems=n=>`${n} ${n===1?t.rjItem:t.rjItems}`,setPart=(i,o)=>this.updRj(x=>{x.parts=x.parts.map((p,j)=>j===i?{...p,...o}:p);return x;});
      const addPart=k=>this.updRj(x=>{const i=x.parts.findIndex(p=>p.k===k);x.parts=i>=0?x.parts.map((p,j)=>j===i?{...p,qty:p.qty+1}:p):[...x.parts,{k,qty:1,price:PARTS[k].p}];return x;});
      const s=R.status,tech=isTech;let pl,pi,poff=false;
      if(s===0||(s===1&&!tech&&!R.quoted)){pl=tech?t.rjSendOwner:t.rjCreateQuote;pi=tech?'ph-bold ph-paper-plane-tilt':'ph-bold ph-file-text';}
      else if(s===1&&tech){pl=t.rjSentOwner;pi='ph-bold ph-check';poff=true;}
      else if(s===1){pl=t.rjMarkApproved;pi='ph-bold ph-check';}else if(s===2){pl=t.rjStart;pi='ph-bold ph-play';}else if(s===3){pl=t.rjCompleteJob;pi='ph-bold ph-check-circle';}else if(!tech){pl=R.summarySent?t.rjResend:t.rjSendSum;pi='ph-bold ph-paper-plane-tilt';}else{pl=t.rjDoneLbl;pi='ph-fill ph-check-circle';poff=true;}
      const awaiting=s===1&&R.quoted&&!tech;
      const cu=st.rjCustom;
      rj={title:`${t.rjRepair} #${R.id}`,license:!!R.license,pickCust:()=>this.setState({sheet:'rjCust',rjCustQ:'',rjNewDraft:null}),
        custBg:has?'var(--c-ffffff,#ffffff)':'var(--b-f8f9fb,#f8f9fb)',custBorder:err&&!has?'var(--l-e0a294,#e0a294)':'var(--l-eef0f3,#eef0f3)',custIcon:has?'':'ph ph-user-plus',custIni:has?ini(nm):'',custName:has?nm:t.rjPickCust,custColor:has?'var(--t-0a1b36,#0a1b36)':'var(--t-34496a,#34496a)',
        custSub:has?(R.poolId?rAddr(R):`${rAddr(R)} · ${t.rjNewCustTag}`):t.rjPickCustSub,custAct:has?t.rpChange:'',
        steps:RST.map((x,i)=>({label:x[L],bar:i<s?'var(--b-0a2a5c,#0a2a5c)':i===s?'var(--b-0a6f8a,#0a6f8a)':'var(--b-e3e7ec,#e3e7ec)',icon:i<s?'ph-fill ph-check-circle':i===s?'ph-fill ph-circle':'ph ph-circle',color:i<=s?'var(--t-0a1b36,#0a1b36)':'var(--t-6b7889,#6b7889)',weight:i===s?'700':'500'})),
        types:Object.keys(RT).map(k=>{const on=R.type===k;return {label:RT[k][0][L],icon:'ph ph-'+RT[k][1],on,span:k==='other'?'span 2':'auto',bg:'var(--c-ffffff,#ffffff)',border:on?'var(--l-0a2a5c,#0a2a5c)':'var(--l-eef0f3,#eef0f3)',shadow:on?'var(--shd,0 8px 18px -10px rgba(10,42,92,.35))':'var(--shd,0 2px 8px -2px rgba(10,27,54,.10))',dot:on?'var(--b-0a2a5c,#0a2a5c)':'var(--b-e3f1f4,#e3f1f4)',dotColor:on?'var(--t-ffffff,#ffffff)':'var(--t-0a6f8a,#0a6f8a)',onClick:u(x=>({...x,type:k}))};}),
        desc:R.desc,setDesc:e=>{const v=e.target.value;this.updRj(x=>({...x,desc:v}));},
        syms:SYM.map(y=>{const on=R.desc.toLowerCase().includes(y[L].toLowerCase());return {label:y[L],bg:on?'var(--b-e3f1f4,#e3f1f4)':'var(--b-f2f4f7,#f2f4f7)',color:on?'var(--t-0a4f63,#0a4f63)':'var(--t-0a1b36,#0a1b36)',icon:on?'ph-bold ph-check':'ph-bold ph-plus',onClick:on?()=>{}:u(x=>{const d=x.desc.trim();return {...x,desc:d?`${d}${/[.!?]$/.test(d)?'':'.'} ${y[L]}.`:`${y[L]}.`};})};}),
        partsCount:nItems(c.n),quick:Object.keys(PARTS).map(k=>({label:PARTS[k].n[L],onClick:()=>addPart(k)})),
        openCustom:()=>this.setState(y=>({rjCustom:y.rjCustom?null:{name:'',price:''}})),customOpen:!!cu,cName:cu?cu.name:'',cPrice:cu?cu.price:'',cBtnBg:cu&&cu.name.trim()?'var(--p-0a2a5c,#0a2a5c)':'var(--p-a3adbb,#6b7889)',
        setCName:e=>{const v=e.target.value;this.setState(y=>({rjCustom:{...y.rjCustom,name:v}}));},setCPrice:e=>{const v=cleanMoney(e.target.value);if(v!==null)this.setState(y=>({rjCustom:{...y.rjCustom,price:v}}));},
        addCustom:()=>{const c2=this.state.rjCustom;if(!c2||!c2.name.trim())return;this.setState(y=>({rj:{...y.rj,parts:[...y.rj.parts,{k:null,name:c2.name.trim(),qty:1,price:c2.price||'0'}]},rjCustom:null}));},
        parts:R.parts.map((p,i)=>({name:p.k?PARTS[p.k].n[L]:p.name,qty:String(p.qty),price:p.price,line:m2(p.qty*pn(p.price)),divider:dv(i),
          setPrice:e=>{const v=cleanMoney(e.target.value);if(v!==null)setPart(i,{price:v});},minus:()=>setPart(i,{qty:Math.max(1,p.qty-1)}),plus:()=>setPart(i,{qty:p.qty+1}),
          remove:u(x=>({...x,parts:x.parts.filter((_,j)=>j!==i)}))})),noParts:R.parts.length===0,
        laborModes:[['hours',t.rjByHours],['flat',t.rjFlat]].map(([k,l])=>{const on=R.labor.mode===k;return {label:l,on,bg:on?'var(--seg-on,#ffffff)':'transparent',color:on?'var(--t-0a2a5c,#0a2a5c)':'var(--t-5b6b82,#5b6b82)',onClick:u(x=>({...x,labor:{...x.labor,mode:k}}))};}),
        isHours:hrs,isFlat:!hrs,hours:`${fq(R.labor.hours)} h`,hMinus:u(x=>({...x,labor:{...x.labor,hours:Math.max(0.5,x.labor.hours-0.5)}})),hPlus:u(x=>({...x,labor:{...x.labor,hours:Math.min(24,x.labor.hours+0.5)}})),
        rate:R.labor.rate,setRate:e=>{const v=cleanMoney(e.target.value);if(v!==null)this.updRj(x=>({...x,labor:{...x.labor,rate:v}}));},flat:R.labor.flat,setFlat:e=>{const v=cleanMoney(e.target.value);if(v!==null)this.updRj(x=>({...x,labor:{...x.labor,flat:v}}));},
        laborAmt:m2(c.labor),partsAmt:m2(c.parts),total:m2(c.total),partsLbl:`${t.rjParts} · ${nItems(c.n)}`,laborLbl:R.labor.mode==='hours'?`${t.rjLabor} · ${fq(R.labor.hours)} h`:`${t.rjLabor} · ${t.rjFlat}`,
        photos:PSL.map(([k,lb],i)=>{const h=!!R.photos[k];return {label:lb[L],has:h,bg:h?PHBG[i]:'var(--b-f8f9fb,#f8f9fb)',borderStyle:h?'solid':'dashed',border:h?'var(--l-eef0f3,#eef0f3)':'var(--l-c9d0da,#c9d0da)',icon:h?'ph-fill ph-image':'ph ph-camera',iconColor:h?'var(--t-0a4f63,#0a4f63)':'var(--t-5b6b82,#5b6b82)',labelColor:h?'var(--t-0a4f63,#0a4f63)':'var(--t-34496a,#34496a)',cursor:h?'default':'pointer',
          add:h?()=>{}:u(x=>({...x,photos:{...x.photos,[k]:1}})),remove:u(x=>{const ph={...x.photos};delete ph[k];return {...x,photos:ph};})};}),
        date:R.date,setDate:e=>{const v=e.target.value;this.updRj(x=>({...x,date:v}));},time:R.time,setTime:e=>{const v=e.target.value;this.updRj(x=>({...x,time:v}));},
        canRoute:s>=2&&s<4&&!R.routed,routeCta:R.date?`${t.rjAddRoute} · ${fmtD(R.date,L)}`:t.rjAddRoute,addRoute:this.rjAddRoute,routed:!!R.routed,routedLbl:R.date===TODAYISO?t.rjOnToday:`${t.rjOnRouteFor} ${fmtD(R.date,L)}`,routeLocked:s<2,
        toggleLic:u(x=>({...x,license:!x.license})),licTrack:R.license?'var(--b-0a2a5c,#0a2a5c)':'var(--b-d5dbe3,#d5dbe3)',licKnob:R.license?'18px':'0px',hasErr:!!err,err,
        showSave:s<4&&!awaiting,showDecline:awaiting,decline:this.rjDecline,hasSent:s===1&&!!R.quoted,sentLine:`${RST[1][L]} · ${t.rjSentOn} ${(R.sentOn||TODAYLBL)[L]}${R.quoteEmail?' · '+R.quoteEmail:''}`,
        declined:s===0&&!!R.declined,declinedLine:`${t.rjDeclinedOn} ${(R.declinedOn||TODAYLBL)[L]} · ${t.rjRequote}`,
        save:()=>{this.rjCommit({},true);this.toast(t.rjSaved);},primary:this.rjPrimary,primaryLbl:pl,primaryIcon:pi,primaryOff:poff,primaryBg:poff?'var(--p-e3e7ec,#e3e7ec)':'var(--p-0a2a5c,#0a2a5c)',primaryColor:poff?'var(--pt-5b6b82,#5b6b82)':'var(--pt-ffffff,#ffffff)'};
      const q=(st.rjCustQ||'').trim().toLowerCase(),nd=st.rjNewDraft;
      const rows=act.filter(p=>!q||p.name.toLowerCase().includes(q)||p.addr.toLowerCase().includes(q)).sort((a,b)=>a.name.localeCompare(b.name));
      rc={listMode:!nd,newMode:!!nd,q:st.rjCustQ||'',setQ:e=>this.setState({rjCustQ:e.target.value}),none:rows.length===0,
        rows:rows.map((p,j)=>({name:p.name,addr:p.addr,initials:ini(p.name),on:R.poolId===p.id,divider:dv(j),onClick:()=>this.setState(y=>({rj:{...y.rj,poolId:p.id,newCust:null},sheet:null,rjErr:''}))})),
        startNew:()=>this.setState({rjNewDraft:{name:'',addr:''}}),cancelNew:()=>this.setState({rjNewDraft:null}),
        nName:nd?nd.name:'',nAddr:nd?nd.addr:'',setNName:e=>{const v=e.target.value;this.setState(y=>({rjNewDraft:{...y.rjNewDraft,name:v}}));},setNAddr:e=>{const v=e.target.value;this.setState(y=>({rjNewDraft:{...y.rjNewDraft,addr:v}}));},
        newOff:!(nd&&nd.name.trim()&&nd.addr.trim()),newBg:nd&&nd.name.trim()&&nd.addr.trim()?'var(--p-0a2a5c,#0a2a5c)':'var(--p-a3adbb,#6b7889)',
        useNew:()=>{const d=this.state.rjNewDraft;if(!d||!d.name.trim()||!d.addr.trim())return;this.setState(y=>({rj:{...y.rj,poolId:null,newCust:{name:d.name.trim(),addr:d.addr.trim()}},sheet:null,rjNewDraft:null,rjErr:''}));}};
      const em=R.poolId&&pools[R.poolId]?pools[R.poolId].email:'',biz=st.biz||'',terms=st.terms??t.esTermsDef,first=nm.split(' ')[0]||'';
      const typeL=R.type?RT[R.type][0][L]:t.rjRepair,laborQ=R.labor.mode==='hours'?`${fq(R.labor.hours)} h × ${m2(pn(R.labor.rate))}`:t.rjFlat;
      const qLines=[...R.parts.map(p=>({name:p.k?PARTS[p.k].n[L]:p.name,qty:`×${p.qty} · ${m2(pn(p.price))} ${t.rjEach}`,amt:m2(p.qty*pn(p.price))})),{name:t.rjLabor,qty:laborQ,amt:m2(c.labor)}];
      if(st.rqs){const Q=st.rqs,qe=Q.email.trim(),okE=okEmail(qe);
        qv={sub:`${t.rjRepair} #${R.id}`,name:nm,addr:rAddr(R),email:Q.email,setEmail:e=>this.updRqs({email:e.target.value}),bad:Q.tried&&!okE,emailBorder:Q.tried&&!okE?'var(--l-e0a294,#e0a294)':'var(--l-e3e7ec,#e3e7ec)',
          type:typeL,typeIcon:'ph ph-'+(R.type?RT[R.type][1]:'wrench'),desc:R.desc,hasDesc:!!R.desc.trim(),license:!!R.license,total:m2(c.total),lines:qLines.map((l,j)=>({...l,divider:dv(j)})),
          terms,viewTerms:!Q.editing,editingTerms:!!Q.editing,draft:Q.draft,setDraft:e=>this.updRqs({draft:e.target.value}),editTerms:()=>this.updRqs({editing:true,draft:terms}),cancelTerms:()=>this.updRqs({editing:false}),
          saveTerms:()=>{const d=this.state.rqs.draft.trim();this.setState(y=>({terms:d||null,rqs:{...y.rqs,editing:false}}));this.toast(t.esTplSaved);},
          subject:`${t.rjQuoteSubj} · ${typeL} · ${biz}`,
          body:[`${t.rpHi}${first?' '+first:''},`,`${t.rjQuoteIntro} ${rAddr(R)}.`,`${t.rjRepair}: ${typeL}${R.desc.trim()?'\n'+R.desc.trim():''}`,
            R.parts.length?`${t.rjParts}:\n${R.parts.map(p=>`- ${p.k?PARTS[p.k].n[L]:p.name} ×${p.qty} · ${m2(p.qty*pn(p.price))}`).join('\n')}`:'',
            `${t.rjLabor}: ${laborQ} = ${m2(c.labor)}`,`${t.rjTotal}: ${m2(c.total)}`,R.license?`${t.rjLicReq}. ${t.rjLicLine}`:'',`${t.esTerms}\n${terms}`,t.rjApproveHow,`${t.rpThanks}\n${st.owner||''}\n${biz}`].filter(Boolean).join('\n\n'),
          toLabel:okE?t.rpTo:t.rpSendTo,toValue:okE?qe:t.rpNeedEmail,cantSend:!okE||!!Q.editing,sendBg:okE&&!Q.editing?'var(--p-0a2a5c,#0a2a5c)':'var(--p-a3adbb,#6b7889)',send:this.rjSendQuote,back:()=>this.setState({screen:'repair',rqs:null})};}
      const dp=!!st.rjDonePhoto;
      rd={sub:`${t.rjRepair} #${R.id} · ${nm}`,has:dp,togglePhoto:()=>this.setState(y=>({rjDonePhoto:!y.rjDonePhoto})),bg:dp?PHBG[3]:'var(--b-f8f9fb,#f8f9fb)',borderStyle:dp?'solid':'dashed',border:dp?'var(--l-eef0f3,#eef0f3)':'var(--l-c9d0da,#c9d0da)',dot:dp?'var(--b-0a2a5c,#0a2a5c)':'var(--b-e3f1f4,#e3f1f4)',dotColor:dp?'var(--t-ffffff,#ffffff)':'var(--t-0a6f8a,#0a6f8a)',
        icon:dp?'ph-bold ph-check':'ph ph-camera',title:dp?t.rjDonePhotoOn:t.rjDonePhotoAdd,hint:dp?t.rjDonePhotoOnSub:PSL[3][1][L],
        finish:()=>this.rjFinish(false),finishSend:()=>this.rjFinish(true),finishLbl:tech?t.rjCompleteJob:t.rjFinishOnly,finishBg:tech?'var(--p-0a2a5c,#0a2a5c)':'var(--p-ffffff,#ffffff)',finishColor:tech?'var(--pt-ffffff,#ffffff)':'var(--pt-0a2a5c,#0a2a5c)',finishBorder:tech?'0':'1.5px solid var(--l-d5dbe3,#d5dbe3)'};}
    if(st.rs){const Rs=st.rs,R=st.repairs.find(x=>x.id===Rs.id);if(R){const c=rjCalc(R),nm=rName(R),first=nm.split(' ')[0]||'',biz=st.biz||'',ee=Rs.email.trim(),okE=okEmail(ee),typeL=R.type?RT[R.type][0][L]:t.rjRepair;
      const nPh=Object.keys(R.photos).length,av={work:true,parts:R.parts.length>0,labor:true,total:true,photos:nPh>0},on=k=>av[k]&&Rs.inc[k];
      const laborQ=R.labor.mode==='hours'?`${fq(R.labor.hours)} h × ${m2(pn(R.labor.rate))}`:t.rjFlat;
      const INC2=[['work',t.rjWorkDone,'wrench',typeL],['parts',t.rjParts,'package',av.parts?`${c.n} ${c.n===1?t.rjItem:t.rjItems}`:t.rjNoPartsS],['labor',t.rjLabor,'clock',`${laborQ} · ${m2(c.labor)}`],['total',t.rjTotal,'calculator',m2(c.total)],['photos',t.rpPhotos,'camera',av.photos?`${nPh} ${nPh===1?t.rpPhotoOne:t.rpPhotoMany}`:t.rjNoPhotos]];
      sv2={sub:`${t.rjRepair} #${R.id} · ${nm}`,email:Rs.email,setEmail:e=>this.updRs({email:e.target.value}),bad:Rs.tried&&!okE,emailBorder:Rs.tried&&!okE?'var(--l-e0a294,#e0a294)':'var(--l-e3e7ec,#e3e7ec)',
        inc:INC2.map(([k,label,ic,sub],j)=>{const dis=!av[k],o=on(k);return {label,sub,iconCls:'ph ph-'+ic,on:o,disabled:dis,cursor:dis?'default':'pointer',color:dis?'var(--t-6b7889,#6b7889)':'var(--t-0a1b36,#0a1b36)',track:o?'var(--b-0a2a5c,#0a2a5c)':'var(--b-d5dbe3,#d5dbe3)',knob:o?'18px':'0px',divider:dv(j),toggle:()=>{if(!dis)this.updRs({inc:{...Rs.inc,[k]:!Rs.inc[k]}});}};}),
        subject:`${t.rjSumSubj} · ${rAddr(R)}`,
        body:[`${t.rpHi}${first?' '+first:''},`,`${t.rjSumIntro} ${rAddr(R)} · ${(R.completedOn||TODAYLBL)[L]}.`,on('work')?`${t.rjWorkDone}: ${typeL}${R.desc.trim()?'\n'+R.desc.trim():''}`:'',
          on('parts')?`${t.rjParts}:\n${R.parts.map(p=>`- ${p.k?PARTS[p.k].n[L]:p.name} ×${p.qty}`).join('\n')}`:'',on('labor')?`${t.rjLabor}: ${laborQ} = ${m2(c.labor)}`:'',on('total')?`${t.rjTotal}: ${m2(c.total)}`:'',
          on('photos')?`${nPh} ${nPh===1?t.rpPhotoOne:t.rpPhotoMany}`:'',`${t.rpThanks}\n${st.owner||''}\n${biz}`].filter(Boolean).join('\n\n'),
        toLabel:okE?t.rpTo:t.rpSendTo,toValue:okE?ee:t.rpNeedEmail,cantSend:!okE,sendBg:okE?'var(--p-0a2a5c,#0a2a5c)':'var(--p-a3adbb,#6b7889)',send:this.sendSummary,back:()=>this.setState({screen:'repair',rs:null})};}}
    const tabScreens=['today','pools','money'],TABI={today:'sun-horizon',pools:'swimming-pool',money:'wallet'};
    const tabs=tabScreens.filter(k=>!(isTech&&k==='money')).map(k=>{const on=st.screen===k;return {label:t[k],current:on?'page':undefined,iconCls:(on?'ph-fill ph-':'ph ph-')+TABI[k],color:on?'var(--t-0a2a5c,#0a2a5c)':'var(--t-5b6b82,#5b6b82)',weight:on?700:600,bg:on?'var(--seg-on,#ffffff)':'transparent',shadow:on?'var(--shd,0 1px 3px rgba(10,27,54,.10),0 0 0 .5px rgba(10,27,54,.04))':'none',onClick:()=>this.go(k)};});
    const sc=st.screen;
    const isOb=sc==='ob1'||sc==='ob2'||sc==='ob3',step=sc==='ob1'?1:sc==='ob2'?2:3;
    const langOptions=[['en','English'],['es','Español']].map(([k,l])=>({label:l,on:st.lang===k,bg:st.lang===k?'var(--b-0a2a5c,#0a2a5c)':'transparent',color:st.lang===k?'var(--t-ffffff,#ffffff)':'var(--t-5b6b82,#5b6b82)',onClick:()=>this.setState({lang:k})}));
    const soonKeys=(isOwner?[['techs','users-three']]:[]).concat([['subscription','credit-card']]);
    let im={bars:[],fields:[],colOpts:[],tips:[],stats:[],preview:[]};
    if(sc==='import'&&st.imp){const I=st.imp,s=I.step,rows=this.imParse(),ok=rows.filter(r=>!r.err),warn=rows.filter(r=>r.warn),bad=rows.filter(r=>r.err),mapErr=!I.map.name||!I.map.addr;
      const off=(s===1&&!I.file)||(s===2&&mapErr);
      im={s1:s===1,s2:s===2,s3:s===3,stepLabel:`${t.step} ${ofTxt(s,3)}`,bars:[1,2,3].map(n=>({bg:n<=s?'var(--b-0a2a5c,#0a2a5c)':'var(--b-e3e7ec,#e3e7ec)'})),title:t['imT'+s],sub:t['imS'+s],
        tipOpen:!!I.tip,tipIcon:I.tip?'ph-bold ph-caret-up':'ph-bold ph-caret-down',tips:[t.imTip1,t.imTip2,t.imTip3].map((x,j)=>({n:String(j+1),text:x})),
        fileLine:`${I.file} · ${IMROWS.length} ${t.imRows}`,mapErr,
        colOpts:[{value:'',label:t.imSkip},...IMCOLS.map(c=>({value:c,label:c}))],
        fields:IMF.map(([k,lb,,req],j)=>{const c=I.map[k]||'',smp=c?IMROWS.find(r=>r[c])?.[c]:'';const miss=req&&!c;
          return {label:t[lb],req:!!req,col:c,sample:c?`${t.imEg} ${smp||'—'}`:(req?t.imMapErr:t.imNotMapped),sampleColor:miss?'var(--t-9a2f17,#9a2f17)':'var(--t-5b6b82,#5b6b82)',border:miss?'var(--l-e0a294,#e0a294)':'var(--l-e3e7ec,#e3e7ec)',divider:dv(j),
            onChange:e=>this.updImp({map:{...I.map,[k]:e.target.value}})};}),
        stats:[[ok.length,t.imReady,'var(--b-e8f5ee,#e8f5ee)','var(--t-0f5c3b,#0f5c3b)'],[warn.length,t.imWarn,'var(--b-fdf3dd,#fdf3dd)','var(--t-6e4800,#6e4800)'],[bad.length,t.imErr,'var(--b-fdece8,#fdece8)','var(--t-9a2f17,#9a2f17)']].map(([n,l,bg,c])=>({n:String(n),label:l,bg,color:c})),
        previewHead:t.imFirst,moreRows:`+ ${rows.length-6} ${t.imMore}`,
        preview:rows.slice(0,6).map(r=>{const e=r.err,w=r.warn;return {n:String(r.n),name:r.name||t.imNoNameV,addr:r.addr||t.imNoAddrV,nameColor:e==='name'?'var(--t-9a2f17,#9a2f17)':'var(--t-0a1b36,#0a1b36)',addrColor:e==='addr'?'var(--t-9a2f17,#9a2f17)':'var(--t-5b6b82,#5b6b82)',
          meta:[r.phone,r.email,r.fee>0?`$${r.fee}`:''].filter(Boolean).join(' · '),bg:e?'var(--b-fdece8,#fdece8)':w?'var(--b-fdf3dd,#fdf3dd)':'var(--c-ffffff,#ffffff)',border:e?'var(--l-f3c9bf,#f3c9bf)':w?'var(--l-f0dca8,#f0dca8)':'var(--l-eef0f3,#eef0f3)',
          hasMsg:!!(e||w),msg:e==='name'?t.imNoName:e==='addr'?t.imNoAddr:t.imBadEmail,msgColor:e?'var(--t-9a2f17,#9a2f17)':'var(--t-6e4800,#6e4800)'};}),
        cta:s===3?`${t.imImport} ${ok.length} ${t.imPools}`:t.continue,ctaIcon:s===3?'ph-bold ph-download-simple':'ph-bold ph-arrow-right',ctaOff:off,ctaBg:off?'var(--p-e3e7ec,#e3e7ec)':'var(--p-0a2a5c,#0a2a5c)',ctaColor:off?'var(--pt-5b6b82,#5b6b82)':'var(--pt-ffffff,#ffffff)'};}
    const SA=st.shopAdd;let sa={opts:[]};
    if(SA){const ch=CH[SA.id],u=ch.u[L];sa={opts:Object.keys(CH).map(id=>({label:CH[id].n[L],on:SA.id===id,bg:SA.id===id?'var(--b-0a2a5c,#0a2a5c)':'var(--b-f2f4f7,#f2f4f7)',color:SA.id===id?'var(--t-ffffff,#ffffff)':'var(--t-0a1b36,#0a1b36)',onClick:()=>this.setState({shopAdd:{id,qty:CH[id].step<1?1:2}})})),
      qty:qs(SA.id,SA.qty),price:isTech?'':ps(SA.id),minus:()=>this.setState(y=>({shopAdd:{...y.shopAdd,qty:Math.max(ch.step,r2(y.shopAdd.qty-ch.step))}})),plus:()=>this.setState(y=>({shopAdd:{...y.shopAdd,qty:r2(y.shopAdd.qty+ch.step)}})),
      add:this.shopAddItem,cta:isTech?t.shAddCta:`${t.shAddCta} · ${m2(SA.qty*ch.p)}`};}
    const openSoon=k=>this.setState({sheet:'soon',soon:k});
    const visitChemIds=st.visit?st.visit.chems.map(c=>c.id):[];
    const chemOptions=Object.keys(CH).filter(id=>!visitChemIds.includes(id)).map((id,j)=>({name:CH[id].n[L],price:isTech?'':ps(id),divider:dv(j),onClick:()=>{this.upd(y=>{y.chems=[...y.chems,{id,qty:CH[id].step,prev:0}];return y;});this.setState({sheet:null});}}));
    const ct=st.cost.type,cStop=st.cost.mode==='complete'&&nextIdx>=0?stops[nextIdx]:null;
    const ctName=ct==='other'?(cStop?stopName(cStop):(st.cost.label||t.other)):t[ct];

    return {
      t,tabs,rootRef:this.rootCb,is:{rjQuote:sc==='rjQuote'&&!!st.rj&&!!st.rqs,rjSum:sc==='rjSum'&&!!st.rs,sheetRjDone:st.sheet==='rjDone'&&!!st.rj,repair:sc==='repair'&&!!st.rj,sheetRjCust:st.sheet==='rjCust'&&!!st.rj,sheetRjQuote:st.sheet==='rjQuote'&&!!st.rj,sheetSched:st.sheet==='sched'&&!!st.schedDraft,est:sc==='estimate'&&!!st.est,archived:sc==='archived',sheetArchive:st.sheet==='archive',imp:sc==='import'&&!!st.imp,sheetShopAdd:st.sheet==='shopAdd'&&!!st.shopAdd,prices:sc==='prices',report:sc==='report'&&!!st.report,visitSum:sc==='visitSum'&&!!VH,today:sc==='today',visit:sc==='visit'&&!!st.visit,saved:sc==='saved'&&!!st.saved,pools:sc==='pools',pool:sc==='pool',money:sc==='money',shopping:sc==='shopping',account:sc==='account',
        ob:isOb,ob1:sc==='ob1',ob2:sc==='ob2',ob3:sc==='ob3',tabbar:tabScreens.includes(sc),sheet:!!st.sheet,sheetAdd:st.sheet==='add',sheetCost:st.sheet==='cost',sheetAddPool:st.sheet==='addPool',sheetPoolForm:st.sheet==='poolForm'&&!!st.pf,sheetOther:st.sheet==='other',sheetChem:st.sheet==='chem',sheetSoon:st.sheet==='soon',toast:!!st.toast},
      statusBg:sc==='saved'?'transparent':'var(--b-ffffff,#ffffff)',statusColor:sc==='saved'?'var(--t-ffffff,#ffffff)':'var(--t-0a1b36,#0a1b36)',
      initials:ini(isTech?TECHS[0].name:(st.owner||'MD')),earnedLabel:m2(earned),showMoney:!isTech,isTech,isOwner,canAddPool:!isTech,ownerLbl:isTech?t.technician:t.owner,ownerName:isTech?TECHS[0].name:st.owner,
      minsToday:`${stops.reduce((a,x)=>a+(x.done&&x.type==='pool'?x.mins||0:0),0)} min`,routeBig:isTech?String(stops.filter(x=>x.done&&x.type==='pool').length):m2(earned),routeSub:isTech?t.routeVisits:t.earnedTodayFull,
      shopByTech,techRows,techCount:String(TECHS.length),stopsDone:String(doneCount),stopsTotal:String(total),toBuyLabel:`${st.shop.length} ${t.toBuy}`,
      hero,upcoming,hasUpcoming:upcoming.length>0,doneRows,hasDone:doneRows.length>0,showDone:st.showDone,doneTitle:`${t.completed} ${ofTxt(doneCount,total)}`,doneCaret:st.showDone?'ph-bold ph-caret-up':'ph-bold ph-caret-down',
      toggleDone:()=>this.setState(y=>({showDone:!y.showDone})),
      editing:!!st.editing,notEditing:!st.editing,canEdit:!st.editing&&stops.filter(s=>!s.done).length>1,showDoneToggle:doneRows.length>0&&!st.editing,
      editRows,startEdit:this.startEdit,saveOrder:this.saveOrder,
      openAddPool:()=>this.setState({sheet:'addPool',poolQ:''}),poolQ:st.poolQ||'',setPoolQ:e=>this.setState({poolQ:e.target.value}),offRoute,noOffRoute:offRoute.length===0,noOffRouteText:offAll.length?t.noMatch:t.noOffRoute,
      otherName:st.otherName||'',setOtherName:e=>this.setState({otherName:e.target.value}),confirmOther:this.confirmOther,otherEmpty:!(st.otherName||'').trim(),otherBtnBg:(st.otherName||'').trim()?'var(--p-0a2a5c,#0a2a5c)':'var(--p-a3adbb,#6b7889)',
      goAccount:()=>this.go('account'),goShopping:()=>this.go('shopping'),goMoney:()=>this.go('money'),back:this.back,
      startVisit:this.startVisit,completeStop:()=>{const x=stops[nextIdx];if(x.type==='repair'){const id=x.repairId;this.setState(y=>({stops:y.stops.map(s=>s.id===x.id?{...s,done:true}:s),repairs:y.repairs.map(r=>r.id===id?{...r,status:4}:r)}));this.toast(`#${id} · ${t.rjDoneLbl}`);return;}const c={cost:{mode:'complete',type:x.type,amt:''}};if(isTech)this.setState(c,()=>this.confirmCost());else this.setState({sheet:'cost',...c});},openAdd:()=>this.setState({sheet:'add'}),
      vs,rp,editVisit:this.editVisit,backToPool:()=>this.setState({screen:'pool'}),
      openReport:this.openReport,closeReport:()=>this.setState({screen:'saved'}),sendReport:this.sendReport,saveEmail:this.saveEmail,
      editEmail:()=>this.updRep({editing:true,draft:st.report?pools[st.report.poolId].email:'',bad:false}),setEmailDraft:e=>this.updRep({draft:e.target.value,bad:false}),
      v,closeVisit:()=>this.setState(st.visit&&st.visit.editHist?{screen:'visitSum',visit:null}:{screen:'today',visit:null}),saveVisit:this.saveVisit,openChem:()=>this.setState({sheet:'chem'}),
      addPhoto:()=>{if(!st.visit||st.visit.photos.length>=4)return;this.upd(y=>{const n=y.photoSeq+1;y.photoSeq=n;y.photos=[...y.photos,{id:n,n:y.photos.length+1}];return y;});},toggleNote:()=>this.upd(y=>{y.noteOpen=!y.noteOpen;return y;}),setNote:e=>{const val=e.target.value;this.upd(y=>{y.note=val;return y;});},
      s,stayHere:()=>{clearTimeout(this.ft);this.setState({counting:false});},finishSaved:this.finishSaved,
      search:st.search,setSearch:e=>this.setState({search:e.target.value}),poolRows,noPools:poolRows.length===0,poolsCount:L?`${act.length} en ruta`:`${act.length} on route`,
      pd,m,costGroups,lowest,ranges,techMo,techMoSub,avgCost,chemRows,byChemSub,cppRows,cppSub,pricesRowSub,priceRows,stmRows,resetPrices:this.resetPrices,goPrices:()=>this.go('prices'),
      toggleCpp:()=>this.setState(y=>({cppAll:!y.cppAll})),cppToggleLabel:st.cppAll?t.moShowLess:`${t.moShowAll} ${cpp.length}`,cppToggleIcon:st.cppAll?'ph-bold ph-caret-up':'ph-bold ph-caret-down',shopRowLabel:shopSub,
      shopItems,shopSub,shopEmpty:st.shop.length===0,shopHasChecked:checked.length>0,markLabel:isTech?`${t.markBought} (${checked.length})`:`${t.markBought} (${checked.length}) · ${m2(checkedSum)}`,markBought:this.markBought,
      biz:st.biz,owner:st.owner,feeLabel:L?`$${st.fee} por visita`:`$${st.fee} per visit`,langOptions,
      soonRows:soonKeys.map(([k,i],j)=>({label:t[k],iconCls:'ph ph-'+i,divider:dv(j),onClick:()=>openSoon(k)})),soonTitle:st.soon?t[st.soon]:'',notTech:!isTech,
      restartOb:this.restartOb,resetDemo:this.resetDemo,
      ob:{stepLabel:`${t.step} ${ofTxt(step,3)}`,bars:[1,2,3].map(n=>({bg:n<=step?'var(--b-0a2a5c,#0a2a5c)':'var(--b-e3e7ec,#e3e7ec)'})),title:t['ob'+step+'Title'],sub:t['ob'+step+'Sub'],cta:step===3?t.startRoute:t.continue,hasBack:step>1},
      obNext:this.obNext,obBack:this.obBack,setBiz:e=>this.setState({biz:e.target.value}),setOwner:e=>this.setState({owner:e.target.value}),
      obFee:`$${st.fee}`,feeDown:()=>this.setState(y=>({fee:Math.max(10,y.fee-5)})),feeUp:()=>this.setState(y=>({fee:Math.min(200,y.fee+5)})),
      feeChips:[30,35,40,45].map(f=>({label:`$${f}`,bg:st.fee===f?'var(--b-0a2a5c,#0a2a5c)':'var(--b-f2f4f7,#f2f4f7)',color:st.fee===f?'var(--t-ffffff,#ffffff)':'var(--t-0a1b36,#0a1b36)',onClick:()=>this.setState({fee:f})})),
      obPools:['p1','p2','p3',...(st.obExtra||[])].filter(id=>pools[id]).map((id,j)=>({name:pools[id].name,addr:pools[id].addr,initials:ini(pools[id].name),fee:isTech?'':`$${id[0]==='n'?pools[id].fee:st.fee}`,divider:dv(j)})),
      openPoolFormOb:()=>this.openPoolForm('ob'),openPoolFormPools:()=>this.openPoolForm('pools'),savePoolForm:this.savePoolForm,
      pf:st.pf?{fields:[['name','fName','user','text','phName'],['addr','fAddr','map-pin','text','phAddr'],['gate','fGate','lock-key','text','phGate'],['phone','fPhone','phone','tel','phPhone'],['email','fEmail','envelope-simple','email','rpEmailPh']]
          .map(([k,lb,ic,ty,ph])=>({label:t[lb],iconCls:'ph ph-'+ic,type:ty,ph:t[ph],value:st.pf[k],onChange:e=>this.updPf({[k]:e.target.value,err:false})})),
        fees:[30,35,40,45].map(f=>({label:`$${f}`,on:st.pf.fee===f,bg:st.pf.fee===f?'var(--b-0a2a5c,#0a2a5c)':'var(--b-f2f4f7,#f2f4f7)',color:st.pf.fee===f?'var(--t-ffffff,#ffffff)':'var(--t-0a1b36,#0a1b36)',onClick:()=>this.updPf({fee:f})})),
        dog:st.pf.dog,dogTrack:st.pf.dog?'var(--b-0a2a5c,#0a2a5c)':'var(--b-d5dbe3,#d5dbe3)',dogKnob:st.pf.dog?'18px':'0px',toggleDog:()=>this.updPf({dog:!st.pf.dog}),sc:mkSched(st.pf.sched||DEFSCH,s=>this.updPf({sched:s})),err:!!st.pf.err}:{fields:[],fees:[],sc:{freqs:[],days:[]}},
      addPoolDemo:()=>this.toast(t.demoPools),openImport:()=>this.openImport('ob'),openImportAcct:()=>this.openImport('account'),
      im,imBack:this.imBack,imNext:this.imNext,imPick:e=>{const f=e.target.files&&e.target.files[0];if(f)this.updImp({file:f.name,step:2});},imSample:()=>this.updImp({file:'skimmer-customers.csv',step:2}),imToggleTip:()=>this.updImp({tip:!st.imp.tip}),
      obImported:st.obImported?{on:true,title:`${st.obImported.n} ${t.imDone}`,sub:st.obImported.file}:{on:false},
      sa,openShopAdd:()=>this.setState({sheet:'shopAdd',shopAdd:{id:'chlor',qty:1}}),
      shopNote:st.shopNote||'',setShopNote:e=>this.setState({shopNote:e.target.value}),shopRepeat:!!st.shopRepeat,toggleRepeat:()=>this.setState(y=>({shopRepeat:!y.shopRepeat})),
      repeatSub:st.shopRepeat?t.shRepeatOn:t.shRepeatOff,repeatTrack:st.shopRepeat?'var(--b-0a2a5c,#0a2a5c)':'var(--b-d5dbe3,#d5dbe3)',repeatKnob:st.shopRepeat?'18px':'0px',
      es,estBack:this.estBack,pfEstimate:()=>this.openEst('form'),confirmArchive:this.confirmArchive,arQ:L?`¿Archivar ${P.name}?`:`Archive ${P.name}?`,
      arRows,arEmpty:arRows.length===0,arRowSub:archList.length?`${archList.length} ${t.arCount}`:t.arNone,goArchived:()=>this.setState({screen:'archived',sheet:null}),
      unitOptions:[['imperial',t.unImp,'gal · lb'],['metric',t.unMet,'L · kg']].map(([k,l,s])=>{const on=(st.units||'imperial')===k;return {label:l,sub:s,on,bg:on?'var(--b-0a2a5c,#0a2a5c)':'transparent',color:on?'var(--t-ffffff,#ffffff)':'var(--t-5b6b82,#5b6b82)',subColor:on?'var(--t-c9d6e8,#c9d6e8)':'var(--t-6b7889,#6b7889)',onClick:()=>this.setState({units:k,priceEdit:{}})};}),
      se:st.schedDraft?(()=>{const m=mkSched(st.schedDraft,s=>this.setState({schedDraft:s}));return {...m,sub:`${P.name} · ${schedLabel(st.schedDraft,L)}`,off:!m.valid,bg:m.valid?'var(--b-0a2a5c,#0a2a5c)':'var(--b-e3e7ec,#e3e7ec)',color:m.valid?'var(--t-ffffff,#ffffff)':'var(--t-5b6b82,#5b6b82)',cta:t.scSave,
        save:()=>{if(!m.valid)return;const id=P.id;this.setState(y=>({pools:{...y.pools,[id]:{...y.pools[id],sched:y.schedDraft}},sheet:null,schedDraft:null}));this.toast(`${t.scSaved} · ${schedLabel(st.schedDraft,L)}`);}};})():{freqs:[],days:[]},
      pvGroups:[['Start screen',[['onboarding','Onboarding'],['today','Today']],st.pvStart,v=>this.setPv('pvStart',v)],
        ['Role',[['single','Solo'],['owner','Owner'],['tech','Tech']],st.pvRole,v=>this.setPv('pvRole',v)],
        ['Language',[['en','English'],['es','Español']],st.lang,v=>this.setState({lang:v})],
        ['Repairs',[[true,'On'],[false,'Off']],st.pvRep,v=>this.setPv('pvRep',v)],
        ['Theme',[['light','Light'],['dark','Dark']],st.appearance||'light',v=>this.setState({appearance:v})]
      ].map(([title,os,cur,fn])=>({title,opts:os.map(([k,l])=>{const on=cur===k;return {label:l,on,onClick:()=>fn(k),bg:on?'#0a2a5c':'transparent',color:on?'#ffffff':'#3b4a60'};})})),
      themeOptions:[['light',t.thLight,'ph ph-sun'],['dark',t.thDark,'ph ph-moon'],['auto',t.thAuto,'ph ph-device-mobile']].map(([k,l,ic])=>{const on=(st.appearance||'light')===k;return {label:l,icon:ic,on,bg:on?'var(--b-0a2a5c,#0a2a5c)':'transparent',color:on?'var(--t-ffffff,#ffffff)':'var(--t-5b6b82,#5b6b82)',onClick:()=>this.setState({appearance:k})};}),
      langChips:[['en','EN','English'],['es','ES','Español']].map(([k,l,f])=>{const on=st.lang===k;return {code:k,label:l,full:f,on,bg:on?'var(--seg-on,#ffffff)':'transparent',shadow:on?'var(--shd,0 1px 3px rgba(10,27,54,.18))':'none',color:on?'var(--t-0a2a5c,#0a2a5c)':'var(--t-5b6b82,#5b6b82)',onClick:()=>this.setState({lang:k})};}),
      showRepairs:repOn,rj,rc,qv,sv2,rd,revGroups,rjCards,rjCount,newRepair:()=>this.openRepair(null),rjBack:()=>this.setState(y=>({screen:y.rjPrev||'today',rj:null,rjErr:''})),
      closeSheet:()=>this.setState({sheet:null}),stopProp:e=>e.stopPropagation(),
      addTypes:['fuel','supply','lunch','other'].map((k,j)=>({label:t[k],sub:t[k+'Sub'],iconCls:'ph ph-'+SICON[k],divider:DASH,onClick:()=>{if(k==='other')this.setState({sheet:'other',otherName:''});else if(isTech)this.setState({cost:{mode:'add',type:k,amt:''}},()=>this.confirmCost());else this.setState({sheet:'cost',cost:{mode:'add',type:k,amt:''}});}})),
      cs:{title:st.cost.mode==='complete'?`${ctName} · ${t.markDone}`:ctName,amount:'$'+(st.cost.amt||'0'),color:st.cost.amt?'var(--t-0a1b36,#0a1b36)':'var(--t-b3bcc9,#6b7889)',confirm:st.cost.mode==='complete'?t.markDone:t.addAStop},
      keys:['1','2','3','4','5','6','7','8','9','.','0','⌫'].map(k=>({k,onClick:()=>this.key(k)})),confirmCost:this.confirmCost,
      chemOptions,noChemOptions:chemOptions.length===0,
      toast:st.toast||''
    };
  }
  render() {
    return <Shell vm={this.renderVals()} />;
  }
}
