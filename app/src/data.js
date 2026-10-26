// Seed data, chemical catalog and pure helpers for the Brush & Net prototype
import { S } from './strings.js';

export const CH={
 chlor:{n:['Liquid chlorine','Cloro líquido'],u:['gal','gal'],p:4.25,step:0.5},
 acid:{n:['Muriatic acid','Ácido muriático'],u:['gal','gal'],p:6.20,step:0.5},
 tabs:{n:['Chlorine tabs','Pastillas de cloro'],u:['tabs','past.'],p:1.10,step:1},
 cya:{n:['Stabilizer','Estabilizador'],u:['lb','lb'],p:3.50,step:1},
 soda:{n:['Baking soda','Bicarbonato'],u:['lb','lb'],p:0.90,step:1},
 clean:{n:['Filter cleaner','Limpiador de filtro'],u:['btl','bot.'],p:6.50,step:1}
};
export const MU={gal:{u:['L','L'],f:3.78541},lb:{u:['kg','kg'],f:0.453592},oz:{u:['mL','mL'],f:29.5735}};
export const DAYS=['mon','tue','wed','thu','fri','sat','sun'],DAYL={mon:['Mon','Lun'],tue:['Tue','Mar'],wed:['Wed','Mié'],thu:['Thu','Jue'],fri:['Fri','Vie'],sat:['Sat','Sáb'],sun:['Sun','Dom']};
export const FK={weekly:'scWeekly',twice:'scTwice',biweekly:'scBi'},DEFSCH={freq:'weekly',days:['mon']};
export const SCHED={p3:{freq:'twice',days:['mon','thu']},p9:{freq:'biweekly',days:['mon']},p14:{freq:'weekly',days:['thu']},p15:{freq:'twice',days:['tue','fri']},p16:{freq:'weekly',days:['fri']},p17:{freq:'biweekly',days:['wed']}};
export const schedLabel=(s,L)=>`${S[FK[s.freq]][L]} · ${s.days.map(d=>DAYL[d][L]).join(L?' y ':' & ')}`;
export const needDays=s=>s.freq==='twice'?2:1;
export const srt=a=>[...a].sort((x,y)=>DAYS.indexOf(x)-DAYS.indexOf(y));
export const pickDay=(s,d)=>{if(needDays(s)===1)return {...s,days:[d]};if(s.days.includes(d))return {...s,days:s.days.filter(x=>x!==d)};return {...s,days:srt([...s.days,d].slice(-2))};};
export const setFreq=(s,f)=>{const n={...s,freq:f};if(needDays(n)===1)n.days=s.days.slice(0,1).length?s.days.slice(0,1):['mon'];return n;};
export const DARKV={shd:'0 0 0 1px #2A313C','seg-on':'#3A4454','t-b3bcc9':'#8D99AA',
 'b-ffffff':'#0E1116','c-ffffff':'#171B22','s-ffffff':'#1E232C','k-ffffff':'#F3F5F8','p-ffffff':'#171B22',
 'b-f4f6f8':'#141821','b-f2f4f7':'#232934','b-f8f9fb':'#171B22','b-e3e7ec':'#2C333E','b-d5dbe3':'#46505F','b-dde2e8':'#46505F','b-f6f7f9eb':'#1A1F27f0',
 'b-0a2a5c':'#173A5E','b-0a1b36':'#2E3846','b-0a1b3659':'#000000a8','b-0a6f8a':'#1D8FA3','b-13734a':'#1F8A57','b-b8391d':'#B8391D',
 'b-e3f1f4':'#12343C','b-e3f1f5':'#12343C','b-e3f4ea':'#123826','b-e4ecf7':'#1A2A40','b-e8f5ee':'#12301F','b-fdece8':'#3D1B14','b-fdf3dd':'#3A2C10',
 'b-d6edf2':'#163A42','b-dfe9f5':'#1C2B40','b-d9efe4':'#163726','b-e6e2f3':'#2A2540',
 'p-0a2a5c':'#5FD0DD','p-a3adbb':'#7D8A9C','p-e3e7ec':'#7D8A9C','pt-ffffff':'#06232B','pt-0a2a5c':'#7FD3E0','pt-5b6b82':'#151B23',
 't-ffffff':'#F3F5F8','t-0a1b36':'#F3F5F8','t-0a2a5c':'#7FD3E0','t-0a3f4f':'#A8E3EC','t-0a4f63':'#9BDCE6','t-0a5a70':'#8ED6E2','t-0a6f8a':'#5FC8D8',
 't-0f5c3b':'#7FD6A6','t-0f6b45':'#7FD6A6','t-13734a':'#6FD39C','t-34496a':'#C3CDDA','t-5b6b82':'#A4AFBF','t-6b7889':'#9AA5B5','t-8a96a8':'#8D99AA','t-a3adbb':'#8B97A8',
 't-6e4800':'#F2C46B','t-6f86a8':'#8FA3C2','t-9a2f17':'#FF9C85','t-c98a12':'#E8B04A',
 'l-eef0f3':'#262C36','l-e3e7ec':'#2C333E','l-dde2e8':'#3A4250','l-d5dbe3':'#46505F','l-c9d0da':'#566072','l-cfe3ea':'#24505A','l-a3adbb':'#6B7788','l-8a96a8':'#7C889A',
 'l-f3c9bf':'#6A3426','l-e0a294':'#C4664F','l-f0dca8':'#6A5420','l-0a2a5c':'#5FD0DD','l-ffffff':'#2C333E'};
export const RT={pump:[['Pump / Motor','Bomba / Motor'],'fan'],light:[['Light / Electrical','Luz / Eléctrico'],'lightbulb'],surface:[['Surface / Tile','Superficie / Azulejo'],'squares-four'],filter:[['Filter / Plumbing','Filtro / Plomería'],'pipe'],other:[['Other','Otro'],'dots-three-outline']};
export const SYM=[['Motor overheating','Motor sobrecalentado'],['Capacitor failed','Capacitor dañado'],['Leak at union','Fuga en la unión'],['Light not powering','La luz no enciende']];
export const PARTS={cap:{n:['Run capacitor','Capacitor de marcha'],p:'18.50'},seal:{n:['Shaft seal kit','Kit de sello de eje'],p:'24.00'},cart:{n:['Filter cartridge','Cartucho de filtro'],p:'89.00'},gask:{n:['Light gasket','Empaque de luz'],p:'12.75'},gfci:{n:['GFCI breaker','Interruptor GFCI'],p:'46.00'}};
export const PSL=[['before',['Before / damage','Antes / daño']],['serial',['Serial tag','Placa de serie']],['progress',['In progress','En progreso']],['done',['Completed','Terminado']]];
export const RST=[['Draft','Borrador'],['Pending quote','Cotización pendiente'],['Approved','Aprobado'],['In progress','En progreso'],['Completed','Terminado']];
export const RSTC=[['var(--b-f2f4f7,#f2f4f7)','var(--t-34496a,#34496a)'],['var(--b-fdf3dd,#fdf3dd)','var(--t-6e4800,#6e4800)'],['var(--b-e3f1f4,#e3f1f4)','var(--t-0a4f63,#0a4f63)'],['var(--b-e4ecf7,#e4ecf7)','var(--t-0a2a5c,#0a2a5c)'],['var(--b-e8f5ee,#e8f5ee)','var(--t-0f5c3b,#0f5c3b)']];
export const TODAYISO='2026-10-19',TODAYLBL=['Oct 19','19 oct'];
export const rjNew=id=>({id,poolId:null,newCust:null,status:0,type:null,desc:'',parts:[],labor:{mode:'hours',hours:1,rate:'85',flat:''},photos:{},date:'',time:'',license:false,fromTech:null,quoted:false,routed:false});
export const REPAIRS0=[
 {...rjNew(4827),poolId:'p9',status:1,type:'pump',desc:'Motor overheating. Trips the breaker after about 20 minutes.',parts:[{k:'cap',qty:1,price:'18.50'}],labor:{mode:'hours',hours:1.5,rate:'85',flat:''},photos:{before:1,serial:1},date:'2026-10-21',time:'09:00',fromTech:'t1'},
 {...rjNew(4829),poolId:'p10',status:2,type:'light',desc:'Light not powering. GFCI trips when the light is switched on.',parts:[{k:'gask',qty:1,price:'12.75'},{k:'gfci',qty:1,price:'46.00'}],labor:{mode:'hours',hours:2,rate:'85',flat:''},photos:{before:1},date:'2026-10-19',time:'14:00',license:true,quoted:true},
 {...rjNew(4825),poolId:'p4',status:4,type:'filter',desc:'Leak at union on the filter outlet.',parts:[{k:'cart',qty:1,price:'89.00'}],labor:{mode:'flat',hours:1,rate:'85',flat:'60'},photos:{before:1,done:1},date:'2026-10-14',time:'10:30',quoted:true,sentOn:['Oct 12','12 oct'],completedOn:['Oct 14','14 oct'],completedISO:'2026-10-14'}];
export const pn=x=>parseFloat(x)||0;
export const rjCalc=r=>{const parts=r.parts.reduce((a,p)=>a+p.qty*pn(p.price),0),labor=r.labor.mode==='hours'?r.labor.hours*pn(r.labor.rate):pn(r.labor.flat);return {parts,labor,total:parts+labor,n:r.parts.reduce((a,p)=>a+p.qty,0)};};
export const fmtD=(iso,L)=>{if(!iso)return '';const d=new Date(iso+'T12:00:00');return isNaN(d)?iso:d.toLocaleDateString(L?'es-ES':'en-US',{weekday:'short',month:'short',day:'numeric'});};
export const cleanMoney=v=>{v=v.replace(/[^0-9.]/g,'');if((v.match(/\./g)||[]).length>1||(v.split('.')[1]||'').length>2||v.length>8)return null;return v;};
export const DEFP=Object.fromEntries(Object.entries(CH).map(([k,v])=>[k,v.p]));
export const SHARE={chlor:.46,acid:.18,tabs:.14,cya:.09,soda:.08,clean:.05};
export const STM=[[['September 2026','Septiembre 2026'],'2026-09',5640,1688.45,161],[['August 2026','Agosto 2026'],'2026-08',5915,1802.10,169],[['July 2026','Julio 2026'],'2026-07',5775,1731.60,165]];
export const SHOPBY={chlor:{t1:10,t2:8},acid:{t1:4},tabs:{t2:10},cya:{t1:2,t2:2},soda:{t2:10},clean:{t1:1}};
export const TECHS=[{id:'t1',name:'Luis Ramos',phone:'(904) 555-0142',stops:14,done:6},{id:'t2',name:'Ana Pérez',phone:'(904) 555-0187',stops:12,done:5}];
export const IMCOLS=['Customer Name','Service Address','Gate Code','Mobile Phone','Email','Rate','Pool Type','Notes'];
export const IMF=[['name','fName','Customer Name',1],['addr','fAddr','Service Address',1],['gate','fGateS','Gate Code',0],['phone','fPhone','Mobile Phone',0],['email','fEmailS','Email',0],['fee','fFee','Rate',0]];
export const IMROWS=['Alicia Moreno','Brian Cole','Chloe Park','Derek Wynn','Elena Ruiz','Frank Doyle','Grace Liu','Hank Pruitt','Isabel Cruz','Jack Monroe','','Luis Ortiz','Megan Shaw','Nate Ellis','Olivia Grant','Paul Reyes','Quinn Adler','Rosa Delgado','Steve Hart','Tina Vo','Umar Khan','Vera Lane','Wes Booth','Yara Haddad','Zoe Fischer','Owen Pike']
 .map((n,i)=>({'Customer Name':n,'Service Address':i===3?'':`${104+i*13} ${['Ocean Blvd','Palm Ct','Marsh Ln','Dune Rd','Coquina Way'][i%5]}`,'Gate Code':i%3===0?String(1200+i*37):'','Mobile Phone':`(904) 555-0${210+i*3}`,
  'Email':i===4?'elena.ruiz@':(n?n.toLowerCase().replace(' ','.')+'@gmail.com':''),'Rate':String([35,40,45,35][i%4]),'Pool Type':['Screened','Open','Saltwater'][i%3],'Notes':''}));
export const okEmail=e=>/^\S+@\S+\.\S+$/.test(e);
export const RG={fc:{l:'FC',min:2,max:4,step:0.5,d:1,lo:0,hi:10},ph:{l:'pH',min:7.2,max:7.6,step:0.1,d:1,lo:6.8,hi:8.4},ta:{l:'TA',min:80,max:120,step:10,d:0,lo:0,hi:240},cya:{l:'CYA',min:30,max:50,step:10,d:0,lo:0,hi:150}};
export const RK=['fc','ph','ta','cya'];
export const TASKS=['skim','brush','vacuum','baskets','filter','backwash'];
export const TICON={skim:'waves',brush:'paint-brush-broad',vacuum:'broom',baskets:'basket',filter:'funnel',backwash:'arrows-counter-clockwise'};
export const PHBG=['var(--b-d6edf2,#d6edf2)','var(--b-dfe9f5,#dfe9f5)','var(--b-d9efe4,#d9efe4)','var(--b-e6e2f3,#e6e2f3)'];
export const SICON={fuel:'gas-pump',supply:'storefront',lunch:'fork-knife',other:'map-pin'};
export const DOGS=['p6','p8','p12'];
export const NOEMAIL=['p7','p11','p15'];
export const mkEmail=n=>{const w=n.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z ]/g,' ').split(' ').filter(Boolean);return `${w[0]}.${w[w.length-1]}@gmail.com`;};
export const DATES=[['Oct 12','12 oct'],['Oct 5','5 oct'],['Sep 28','28 sep'],['Sep 21','21 sep']];
export const TODAY=['Today','Hoy'];
export const SC={low:{pill:'var(--b-fdf3dd,#fdf3dd)',tile:'var(--b-fdf3dd,#fdf3dd)',c:'var(--t-6e4800,#6e4800)'},high:{pill:'var(--b-fdece8,#fdece8)',tile:'var(--b-fdece8,#fdece8)',c:'var(--t-9a2f17,#9a2f17)'},ok:{pill:'transparent',tile:'var(--b-e8f5ee,#e8f5ee)',c:'var(--t-13734a,#13734a)'}};
export const DASH='1px dashed var(--l-e3e7ec,#e3e7ec)';
export const PLACE={fuel:'Shell · SR-312',supply:'Pool supply · US-1',lunch:'Anastasia Blvd'};
export const BASE={today:{rev:0,chem:0,fuel:0,lunch:0,supply:0,visits:0,restock:0},week:{rev:1540,chem:331.85,fuel:96.40,lunch:45.90,supply:0,visits:44,restock:132.40},month:{rev:5810,chem:1263.40,fuel:372.15,lunch:140.60,supply:38.75,visits:166,restock:486.20}};
export const POOLS=[
 ['p1','Carla Nuñez','14 Ocean Trace Rd','','Open · 12k gal',35,0,[3,7.4,100,40],[['chlor',1]],'Skimmer lid is cracked, replacement ordered.'],
 ['p2','Dave Whitfield','221 Magnolia Ave','1290','Screened · 18k gal',35,0,[3.5,7.5,110,40],[['chlor',0.5]],'Robot cleaner in the garage if needed.'],
 ['p3','Priya Shah','9 Lighthouse Ave','','Open · 10k gal',35,0,[2.5,7.4,90,30],[['chlor',1],['acid',0.5]],'Kids swim lessons Tue, keep chlorine steady.'],
 ['p4','Mark & Jen Ross','305 Arricola Ave','7731','Screened · 20k gal',35,0,[3,7.8,120,40],[['chlor',1],['soda',2]],'pH keeps drifting up, new plaster.'],
 ['p5','Gloria Bennett','58 Bridge St','','Spa + pool · 14k gal',35,0,[3,7.4,100,40],[['chlor',1.5]],'Check spa jets, one was weak.'],
 ['p6','Linda Ortega','88 Coquina Ave','4417','Screened · 15k gal',35,0,[1,7.8,90,40],[['chlor',0.5],['acid',0.5]],'Filter pressure high, cleaned cartridge.'],
 ['p7','Tom Becker','412 Anastasia Blvd','','Open · 16k gal',40,6,[3,7.5,100,40],[['chlor',1]],'Leaves heavy, oak tree by the deep end.'],
 ['p14','Hector Ruiz','33 Matanzas Blvd','5520','Screened · 14k gal',35,9,[3,7.5,100,40],[['chlor',1]],'Prefers Thursday visits, home after 3.'],
 ['p15','Ann Whitaker','710 A1A Beach Blvd','','Open · 20k gal',45,12,[2.5,7.6,90,50],[['chlor',1],['acid',0.5]],'Vacation rental, guests check out Friday mornings.'],
 ['p16','Joe Tanaka','19 Cordova St','3301','Spa + pool · 11k gal',40,7,[3,7.4,110,40],[['chlor',1]],'Spa heater on a timer, leave it.'],
 ['p17','Maria Lopes','2 Vilano Rd','','Saltwater · 16k gal',40,14,[3.5,7.5,100,70],[['acid',0.5]],'New cell installed in September.'],
 ['p8','Rachel Kim','27 Marsh Point Rd','0815','Screened · 12k gal',35,11,[2.5,7.4,110,50],[['chlor',0.5],['tabs',2]],'Dog in the yard, close the gate.'],
 ['p9','Sam Alvarez','140 Old Beach Rd','','Saltwater · 18k gal',45,8,[3.5,7.6,90,60],[['acid',0.5]],'Salt cell due for cleaning.'],
 ['p10','Beth Carver','6 Sea Grove Ln','2024','Screened · 22k gal',35,5,[1.5,7.3,70,30],[['chlor',1.5],['soda',4]],'Algae spots on the steps last week.'],
 ['p11','Jorge Medina','77 Coastal Hwy','','Open · 14k gal',40,9,[3,7.4,100,40],[['chlor',1]],'Wants a text after each visit.'],
 ['p12','Nora Fitz','19 Palm Row','5521','Screened · 11k gal',35,4,[2.5,7.5,90,40],[['chlor',0.5]],'Pump is loud, mention it to the owner.'],
 ['p13','Ken Ito','3 Vilano Rd','','Open · 25k gal',45,12,[2,7.2,100,40],[['chlor',1.5],['acid',0.5]],'Gate sticks, lift to open.']
];
export const r2=n=>Math.round(n*100)/100;
export const m2=n=>'$'+r2(n).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
export const fq=q=>Number.isInteger(q)?String(q):q.toFixed(1);
export const ini=n=>n.replace('&','').split(' ').filter(Boolean).map(w=>w[0]).join('').slice(0,2).toUpperCase();
export const inMonth=h=>h.date===TODAY||h.date[0].indexOf('Oct')===0;
export const dv=j=>j?DASH:'0';
