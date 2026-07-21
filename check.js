
const uiIcon=(id,cls="")=>`<svg class="ui-icon ${cls}" aria-hidden="true"><use href="#${id}"></use></svg>`;
const KEY="little-explorer-learning-world-v14-1-stable",LEGACY_KEY="little-explorer-planner-v7",DAYS=["周一","周二","周三","周四","周五","周六","周日"];
const defaults={
settings:{siteTitle:"晞白的学习世界",plannerTitle:"本周学习计划",studentName:"晞白",weeklyReadingGoal:5,schoolEnd:"13:30",lunchStart:"14:00",lunchDuration:30,studyBlock:40,breakMin:20,pianoDuration:40,outdoorStart:"17:30",outdoorEnd:"19:00",dinnerStart:"19:00",dailyMax:180,enableHomeworkCheck:true,homeworkCheckDuration:30,homeworkCheckStart:"13:40",packBagDuration:10},
week:[
{id:1,day:"周一",start:"13:30",end:"14:00",title:"放学回家、整理书包",type:"rest",notes:"",done:false},
{id:2,day:"周一",start:"14:00",end:"14:30",title:"午餐",type:"course",notes:"",done:false},
{id:3,day:"周一",start:"14:30",end:"15:10",title:"Wordly Wise Unit 13",type:"study",notes:"",done:false},
{id:4,day:"周一",start:"15:10",end:"15:30",title:"休息 20 分钟",type:"rest",notes:"",done:false},
{id:5,day:"周一",start:"15:30",end:"16:10",title:"Science Notes: 章节 1",type:"study",notes:"",done:false},
{id:6,day:"周一",start:"16:10",end:"16:30",title:"休息 20 分钟",type:"rest",notes:"",done:false},
{id:7,day:"周一",start:"16:30",end:"17:05",title:"钢琴 30–35 分钟",type:"life",notes:"",done:false},
{id:8,day:"周一",start:"17:30",end:"19:00",title:"户外活动",type:"outdoor",notes:"",done:false},
{id:9,day:"周一",start:"19:00",end:"19:30",title:"晚餐",type:"course",notes:"",done:false},
{id:10,day:"周二",start:"13:30",end:"14:00",title:"放学、前往钢琴课地点",type:"rest",notes:"",done:false},
{id:11,day:"周二",start:"14:00",end:"14:20",title:"午餐",type:"course",notes:"",done:false},
{id:12,day:"周二",start:"14:30",end:"15:30",title:"钢琴课",type:"life",notes:"",done:false},
{id:13,day:"周二",start:"15:30",end:"15:50",title:"休息和点心",type:"rest",notes:"",done:false},
{id:14,day:"周二",start:"15:50",end:"16:30",title:"Workbook Unit 1",type:"study",notes:"",done:false},
{id:15,day:"周二",start:"16:30",end:"16:50",title:"休息 20 分钟",type:"rest",notes:"",done:false},
{id:16,day:"周二",start:"16:50",end:"17:25",title:"Wonderlit Speak Draft 初稿",type:"study",notes:"",done:false},
{id:17,day:"周二",start:"17:30",end:"19:00",title:"户外活动",type:"outdoor",notes:"",done:false},
{id:18,day:"周二",start:"19:00",end:"19:30",title:"晚餐",type:"course",notes:"",done:false},
{id:19,day:"周二",start:"19:30",end:"20:00",title:"Science Notes: 章节 2",type:"study",notes:"",done:false},
{id:20,day:"周三",start:"13:30",end:"14:00",title:"放学回家、整理书包",type:"rest",notes:"",done:false},
{id:21,day:"周三",start:"14:00",end:"14:30",title:"午餐",type:"course",notes:"",done:false},
{id:22,day:"周三",start:"14:30",end:"15:10",title:"Wordly Wise Unit 14",type:"study",notes:"",done:false},
{id:23,day:"周三",start:"15:00",end:"16:30",title:"Wonderlit Speak",type:"course",notes:"",done:false},
{id:24,day:"周三",start:"16:30",end:"17:10",title:"Reading 步步高 Exercise 10",type:"study",notes:"",done:false},
{id:25,day:"周三",start:"17:30",end:"19:00",title:"户外活动",type:"outdoor",notes:"",done:false},
{id:26,day:"周四",start:"14:00",end:"16:00",title:"CCA",type:"life",notes:"",done:false},
{id:27,day:"周四",start:"16:10",end:"16:50",title:"Grammar Workbook",type:"study",notes:"",done:false},
{id:28,day:"周四",start:"16:50",end:"17:10",title:"休息 20 分钟",type:"rest",notes:"",done:false},
{id:29,day:"周四",start:"17:30",end:"19:00",title:"户外活动",type:"outdoor",notes:"",done:false},
{id:30,day:"周五",start:"14:30",end:"15:10",title:"Wordly Wise Unit 15",type:"study",notes:"",done:false},
{id:31,day:"周五",start:"15:30",end:"16:10",title:"Reading 步步高 Exercise 11",type:"study",notes:"",done:false},
{id:32,day:"周五",start:"16:30",end:"17:10",title:"Chinese composition",type:"study",notes:"",done:false},
{id:33,day:"周五",start:"17:30",end:"19:00",title:"户外活动",type:"outdoor",notes:"",done:false},
{id:34,day:"周六",start:"10:00",end:"12:00",title:"Badminton",type:"life",notes:"",done:false},
{id:35,day:"周六",start:"15:00",end:"17:30",title:"Xueersi",type:"life",notes:"",done:false},
{id:36,day:"周六",start:"17:30",end:"19:00",title:"户外活动",type:"outdoor",notes:"",done:false},
{id:37,day:"周日",start:"09:00",end:"10:00",title:"Piano Theory",type:"life",notes:"",done:false},
{id:38,day:"周日",start:"15:50",end:"16:30",title:"Write On Track Unit 3: 编辑",type:"study",notes:"",done:false},
{id:39,day:"周日",start:"17:30",end:"19:00",title:"户外活动",type:"outdoor",notes:"",done:false}
],
tasks:[],curriculum:[
{id:1,name:"Wordly Wise",subject:"English",type:"Vocabulary",current:12,total:20,unitLabel:"Unit"},
{id:2,name:"Wonder",subject:"English",type:"Novel",current:3,total:20,unitLabel:"章节"},
{id:3,name:"Reading理解步步高",subject:"English",type:"Reading Comprehension",current:0,total:24,unitLabel:"Exercise"},
{id:4,name:"学习中+ English Write On Track",subject:"English",type:"Writing",current:0,total:12,unitLabel:"Unit"},
{id:5,name:"Grammar Workbook",subject:"English",type:"Grammar",current:0,total:20,unitLabel:"Unit"},
{id:6,name:"Science Notes",subject:"Science",type:"Practice",current:0,total:3,unitLabel:"章节"}
],reading:[],
wonderParts:[{"part":"Part One — August","count":31},{"part":"Part Two — Via","count":16},{"part":"Part Three — Summer","count":6},{"part":"Part Four — Jack","count":20},{"part":"Part Five — Justin","count":8},{"part":"Part Six — August","count":11},{"part":"Part Seven — Miranda","count":6},{"part":"Part Eight — August","count":23}],wonderTitles:[],novelBooks:[{id:201,title:"Wonder",author:"R. J. Palacio",current:0,total:121,status:"reading"}],chapters:[{id:301,book:"Wonder",name:"Chapter 1",date:"2026-07-20",minutes:40,goal:"认识主要人物和故事背景",predict:"",evidence:"",summary:"",reflection:"",done:false}],rewards:{points:0,ledger:[],activityDates:[]},mistakes:[],
vocab:[{id:401,word:"ordinary",definition:"normal or usual; not different or special",partOfSpeech:"adjective",synonyms:"normal, usual, common",example:"I know I am not an ordinary ten-year-old kid.",ownSentence:"It looked like an ordinary school day.",source:"Wonder Chapter 1",status:"learning"}],exams:[
{id:101,name:"TASMO 2026",subject:"Math",date:"2026-08-10",scope:""},
{id:102,name:"科学 WA3",subject:"Science",date:"2026-08-14",scope:"CHAPTER 1-3"},
{id:103,name:"NAFA MASTER CLASS 1",subject:"Other",date:"2026-08-15",scope:"巴赫 INVENTIO 14，车尔尼 849 -12"},
{id:104,name:"英文 WA3",subject:"English",date:"2026-08-18",scope:""},
{id:105,name:"华文",subject:"Chinese",date:"2026-08-20",scope:"看图作文"},
{id:106,name:"WONDERLIT SPEAK TRINITY",subject:"Other",date:"2026-11-23",scope:""}
]};
let data=load();
function clone(x){return JSON.parse(JSON.stringify(x))}
function load(){try{const raw=localStorage.getItem(KEY)||localStorage.getItem(LEGACY_KEY);const x=JSON.parse(raw||"null");if(!x)return clone(defaults);const merged={...clone(defaults),...x,settings:{...defaults.settings,...(x.settings||{})},rewards:{...defaults.rewards,...(x.rewards||{})}};merged.week=(merged.week||[]).map(s=>({...s,done:!!s.done}));merged.mistakes=merged.mistakes||[];merged.rewards.ledger=merged.rewards.ledger||[];merged.rewards.activityDates=merged.rewards.activityDates||[];return merged}catch(e){return clone(defaults)}}
function saveData(show=false){localStorage.setItem(KEY,JSON.stringify(data));if(show)alert("已保存到当前浏览器。")}
function $(id){return document.getElementById(id)}
function esc(s){return String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m]))}

const PAGE_LABELS={
  home:"首页",week:"周计划",novel:"小说精读",curriculum:"教材架",
  tasks:"任务",exams:"考试",piano:"钢琴练习",science:"科学复习",
  growth:"成长花园",mistakes:"错题实验室",settings:"设置"
};

function localISODate(date=new Date()){const y=date.getFullYear(),m=String(date.getMonth()+1).padStart(2,"0"),d=String(date.getDate()).padStart(2,"0");return `${y}-${m}-${d}`}
function formatJournalDate(value){if(!value)return localISODate();const d=new Date(value+"T12:00:00");return d.toLocaleDateString("en-SG",{day:"numeric",month:"short",year:"numeric"})}
function openAdventureMap(){showPage("novel");activateNovelTab("chapters");setTimeout(()=>{const el=document.getElementById("adventureMapSection");if(!el)return;el.scrollIntoView({behavior:"smooth",block:"center"});el.classList.remove("map-flash");void el.offsetWidth;el.classList.add("map-flash")},180)}
function showPage(id){
  if(id==="dashboard") id="home";
  document.querySelectorAll(".page").forEach(x=>x.classList.toggle("active",x.id===id));
  document.querySelectorAll("[data-page]").forEach(x=>x.classList.toggle("active",x.dataset.page===id));
  document.body.classList.toggle("home-mode",id==="home");
  document.body.classList.toggle("week-mode",id==="week");
  if(id==="home")renderDashboard();
  if(id==="stats")renderStats();
  if(id==="mistakes")renderMistakes();
  if(id==="novel"){let saved="chapters";try{saved=localStorage.getItem("lew_novel_tab")||"chapters"}catch(e){}activateNovelTab(saved)}
  window.scrollTo({top:0,behavior:"smooth"});
}
function activateNovelTab(name,scroll=false){
  const valid=["chapters","vocab","quotes","imitation"];
  if(!valid.includes(name))name="chapters";
  document.querySelectorAll("[data-novel-tab]").forEach(btn=>btn.classList.toggle("active",btn.dataset.novelTab===name));
  document.querySelectorAll("[data-novel-panel]").forEach(panel=>panel.classList.toggle("active",panel.dataset.novelPanel===name));
  try{localStorage.setItem("lew_novel_tab",name)}catch(e){}
  if(scroll){const tabs=document.querySelector(".novel-tabs");if(tabs)tabs.scrollIntoView({behavior:"smooth",block:"start"})}
}
function novelTabForTarget(targetId){return targetId==="vocabBank"?"vocab":targetId==="sentenceBank"?"quotes":targetId==="imitationBank"?"imitation":"chapters"}
function scrollToPageSection(pageId,targetId){
  showPage(pageId);
  if(!targetId)return;
  setTimeout(()=>{
    const target=document.getElementById(targetId);
    if(!target)return;
    if(pageId==="novel")activateNovelTab(novelTabForTarget(targetId));
    target.scrollIntoView({behavior:"smooth",block:"start"});
    target.classList.remove("section-flash");
    void target.offsetWidth;
    target.classList.add("section-flash");
  },220);
}
document.querySelectorAll("[data-page]").forEach(b=>{
  b.addEventListener("click",()=>scrollToPageSection(b.dataset.page,b.dataset.scrollTarget||""));
});
function mins(t){const [h,m]=t.split(":").map(Number);return h*60+m}
function daysUntil(s){const a=new Date();a.setHours(0,0,0,0);const b=new Date(s+"T00:00:00");return Math.ceil((b-a)/86400000)}

function slotIcon(type){
  const id={study:"ico-reading",course:"ico-bag",rest:"ico-cup",outdoor:"ico-tree",life:"ico-music"}[type]||"ico-pencil";
  return `<svg><use href="#${id}"></use></svg>`;
}
function toggleSlotDone(id,value,event){
  const slot=data.week.find(x=>x.id===id);if(!slot)return;
  const was=!!slot.done;slot.done=!!value;
  if(value&&!was&&!["rest","course"].includes(slot.type))awardPoints(5,`week:${id}`,`完成：${slot.title}`);
  saveData();renderAll();if(value)showStarBurst();
}
function showStar(event){
  const star=document.createElement("div");
  star.className="star-pop";
  star.innerHTML='<svg viewBox="0 0 64 64" width="34" height="34"><path d="m32 5 8 17 19 3-14 13 4 19-17-9-17 9 4-19L5 25l19-3Z" fill="#efc24e" stroke="#8b6840" stroke-width="3"/></svg>';
  star.style.left=((event?.clientX)||window.innerWidth/2)+"px";
  star.style.top=((event?.clientY)||window.innerHeight/2)+"px";
  document.body.appendChild(star);
  setTimeout(()=>star.remove(),900);
}

function renderWeek(){
  $("weekGrid").innerHTML=DAYS.map(day=>{
    const slots=data.week.filter(x=>x.day===day).sort((a,b)=>mins(a.start)-mins(b.start));
    return `<div class="day-col" data-day="${day}">
      <div class="day-title"><span>${day}</span><button class="icon-btn" onclick="openSlotModal(null,'${day}')">•••</button></div>
      <div class="day-note">固定保护 ${data.settings.outdoorStart}–${data.settings.outdoorEnd} 户外</div>
      <div class="slot-list" data-day="${day}">
      ${slots.map(s=>`<div class="slot ${s.done?'completed':''}" draggable="true" data-id="${s.id}">
        <div class="slot-time">${s.start}–${s.end}</div>
        <div class="slot-body ${s.type}">
          <input class="slot-check" type="checkbox" ${s.done?'checked':''} aria-label="完成 ${esc(s.title)}" onclick="event.stopPropagation()" onchange="toggleSlotDone(${s.id},this.checked)">
          <span>${esc(s.title)}${s.notes?`<br><small>${esc(s.notes)}</small>`:""}</span>
          <span class="slot-tools"><button class="icon-btn" title="编辑" onclick="event.stopPropagation();openSlotModal(${s.id})">Edit</button><button class="icon-btn" title="复制" onclick="event.stopPropagation();duplicateSlot(${s.id})">⧉</button><button class="icon-btn" title="删除" onclick="event.stopPropagation();deleteSlot(${s.id})">⌫</button></span>
        </div>
      </div>`).join("")}
      </div>
      <button class="add-slot" onclick="openSlotModal(null,'${day}')">添加时间项</button>
    </div>`
  }).join("");
  enableDrag();
}
function getSelectedSlotDays(){return [...document.querySelectorAll('#slotDays input:checked')].map(x=>x.value)}
function setSelectedSlotDays(days){document.querySelectorAll('#slotDays input').forEach(x=>x.checked=days.includes(x.value))}
function openSlotModal(id=null,day="周一"){
  const s=id?data.week.find(x=>x.id===id):null;
  $("slotModalTitle").textContent=s?"编辑学习项目":"新增学习项目";
  $("slotId").value=s?.id||"";
  setSelectedSlotDays([s?.day||day]);
  document.querySelectorAll('#slotDays input').forEach(x=>x.disabled=!!s&&x.value!==s.day);
  $("slotDayEditHint").textContent=s?"编辑现有项目时只修改当前星期；需要复制到其他星期，可使用复制功能。":"新增学习项可以同时加入多个星期。";
  $("slotType").value=s?.type||"study";
  $("slotStart").value=s?.start||"14:30";
  $("slotEnd").value=s?.end||"15:10";
  $("slotTitle").value=s?.title||"";
  $("slotNotes").value=s?.notes||"";
  $("slotModal").classList.add("show");
}
function closeSlotModal(){$("slotModal").classList.remove("show")}
function saveSlot(){
  const existingId=Number($("slotId").value)||0;
  const days=getSelectedSlotDays();
  const title=$("slotTitle").value.trim();
  if(!title)return alert("请输入任务内容");
  if(!days.length)return alert("请至少选择一个星期");
  const base={type:$("slotType").value,start:$("slotStart").value,end:$("slotEnd").value,title,notes:$("slotNotes").value.trim()};
  if(existingId){
    const i=data.week.findIndex(x=>x.id===existingId);
    if(i>=0)data.week[i]={...data.week[i],...base,day:days[0]};
  }else{
    const seed=Date.now();
    days.forEach((day,index)=>data.week.push({...base,id:seed+index,day,done:false}));
  }
  saveData();closeSlotModal();renderAll();
}

function showStarBurst(){const el=document.createElement("div");el.textContent=" +1";el.style.cssText="position:fixed;left:50%;top:42%;z-index:999;font-size:34px;font-weight:900;pointer-events:none;animation:starPop .8s ease forwards";document.body.appendChild(el);setTimeout(()=>el.remove(),850)}
function duplicateSlot(id){
  const source=data.week.find(x=>x.id===id);if(!source)return;
  const copy={...source,id:Date.now(),title:source.title,done:false};
  data.week.push(copy);saveData();renderAll();
  setTimeout(()=>openSlotModal(copy.id),0);
}
function deleteSlot(id){if(confirm("删除这个学习项目？")){data.week=data.week.filter(x=>x.id!==id);saveData();renderAll()}}
let selectedPlannerSlotId=null;
function enableDrag(){
  let dragged=null;
  document.querySelectorAll(".slot").forEach(el=>{
    el.onclick=e=>{if(e.target.closest("button,input"))return;selectedPlannerSlotId=Number(el.dataset.id);document.querySelectorAll(".slot").forEach(x=>x.classList.toggle("selected",x===el))};
    el.ondragstart=e=>{dragged=Number(el.dataset.id);selectedPlannerSlotId=dragged;el.classList.add("dragging");e.dataTransfer.effectAllowed="move"};
    el.ondragend=()=>{el.classList.remove("dragging");document.querySelectorAll(".slot").forEach(x=>x.classList.remove("drag-over"))};
    el.ondragover=e=>{e.preventDefault();if(Number(el.dataset.id)!==dragged)el.classList.add("drag-over")};
    el.ondragleave=()=>el.classList.remove("drag-over");
    el.ondrop=e=>{
      e.preventDefault();e.stopPropagation();el.classList.remove("drag-over");
      if(!dragged)return;
      const item=data.week.find(x=>x.id===dragged),target=data.week.find(x=>x.id===Number(el.dataset.id));
      if(!item||!target||item.id===target.id)return;
      if(item.day===target.day){
        [item.start,target.start]=[target.start,item.start];
        [item.end,target.end]=[target.end,item.end];
      }else item.day=target.day;
      saveData();renderAll();
    };
  });
  document.querySelectorAll(".slot-list").forEach(list=>{
    list.ondragover=e=>e.preventDefault();
    list.ondrop=e=>{
      if(e.target.closest(".slot"))return;
      e.preventDefault();if(!dragged)return;
      const item=data.week.find(x=>x.id===dragged);if(item)item.day=list.dataset.day;
      saveData();renderAll();
    };
  });
}
document.addEventListener("keydown",e=>{
  if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="c"&&selectedPlannerSlotId){e.preventDefault();window.__plannerCopiedId=selectedPlannerSlotId}
  if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="v"&&window.__plannerCopiedId){e.preventDefault();duplicateSlot(window.__plannerCopiedId)}
});

function openResetModal(){$("resetModal").classList.add("show")}
function closeResetModal(){$("resetModal").classList.remove("show")}
function buildDefaultWeek(){
  const base=clone(defaults.week);
  if(data.settings.enableHomeworkCheck){
    const days=["周一","周二","周三","周四","周五"];
    days.forEach((day,idx)=>{
      const start=data.settings.homeworkCheckStart||"13:40";
      const end=addMinutes(start,Number(data.settings.homeworkCheckDuration)||30);
      base.push({id:900000+idx,day,start,end,title:"检查学校作业",type:"course",done:false,notes:"检查当天学校作业、签名、明日用品",done:false});
    });
  }
  return base;
}
function addMinutes(t,n){const [h,m]=t.split(":").map(Number);const v=h*60+m+n;return String(Math.floor(v/60)).padStart(2,"0")+":"+String(v%60).padStart(2,"0")}
function applyResetWeek(){
  const mode=document.querySelector('input[name="resetMode"]:checked')?.value||"default";
  if(mode==="default"){
    data.week=buildDefaultWeek();
  }else if(mode==="fixed"){
    const fixedTitles=["放学","午餐","晚餐","钢琴课","Wonderlit Speak","CCA","Badminton","Xueersi","Piano Theory","户外活动","检查学校作业"];
    data.week=buildDefaultWeek().filter(x=>fixedTitles.some(k=>x.title.includes(k))||["course","outdoor","life"].includes(x.type));
  }else{
    data.week=[];
  }
  saveData();closeResetModal();renderAll();
}

function batchEditWeek(){
  $("genericTitle").textContent="批量编辑本周";
  $("genericBody").innerHTML=`<p class="small">可直接修改 JSON。适合一次调整多个项目。</p><textarea id="batchJson" rows="18">${esc(JSON.stringify(data.week,null,2))}</textarea><div class="toolbar"><button class="btn primary" onclick="saveBatchWeek()">保存本周</button><button class="btn" onclick="closeGeneric()">取消</button></div>`;
  $("genericModal").classList.add("show");
}
function saveBatchWeek(){try{const x=JSON.parse($("batchJson").value);if(!Array.isArray(x))throw Error();data.week=x;saveData();closeGeneric();renderAll()}catch(e){alert("JSON 格式不正确")}}
function closeGeneric(){$("genericModal").classList.remove("show")}
function generateWeek(){
  if(data.settings.enableHomeworkCheck){
    const days=["周一","周二","周三","周四","周五"];
    days.forEach((day,idx)=>{
      const exists=data.week.some(x=>x.day===day&&x.title==="检查学校作业");
      if(!exists){
        const start=data.settings.homeworkCheckStart||"13:40";
        data.week.push({id:Date.now()+idx,day,start,end:addMinutes(start,Number(data.settings.homeworkCheckDuration)||30),title:"检查学校作业",type:"course",done:false,notes:"检查当天学校作业、签名、明日用品",done:false});
      }
    });
  }
  const tasks=data.tasks.filter(t=>!t.done).sort((a,b)=>b.priority-a.priority);
  const target=data.week.filter(x=>x.type==="study");
  target.forEach((s,i)=>{if(tasks[i])s.title=tasks[i].name});
  saveData();renderAll();alert("已更新本周学习计划。");
}
function addTask(){const name=$("taskName").value.trim();if(!name)return alert("请输入任务名称");data.tasks.push({id:Date.now(),name,subject:$("taskSubject").value,duration:Number($("taskDuration").value)||40,priority:Number($("taskPriority").value),deadline:$("taskDeadline").value,done:false});$("taskName").value="";saveData();renderAll()}
function renderTasks(){$("taskList").innerHTML=data.tasks.length?data.tasks.map(t=>`<div class="item-row"><div class="item-top"><div><b>${esc(t.name)}</b><div class="small">${esc(t.subject)} · ${t.duration} 分钟 · ${t.deadline}</div></div><input style="width:auto" type="checkbox" ${t.done?"checked":""} onchange="toggleTask(${t.id},this.checked)"></div><div class="toolbar"><button class="btn" onclick="editTask(${t.id})">编辑</button><button class="btn" onclick="deleteTask(${t.id})">删除</button></div></div>`).join(""):'<div class="small">暂无任务</div>'}
function toggleTask(id,v){const t=data.tasks.find(x=>x.id===id);if(!t)return;const was=!!t.done;t.done=v;if(v&&!was)awardPoints(5,`task:${id}`,`完成任务：${t.name}`);saveData();renderAll()}
function editTask(id){const t=data.tasks.find(x=>x.id===id);if(!t)return;const name=prompt("任务名称",t.name);if(name===null)return;const duration=prompt("时长",t.duration);if(duration===null)return;t.name=name;t.duration=Number(duration)||t.duration;saveData();renderAll()}
function deleteTask(id){data.tasks=data.tasks.filter(x=>x.id!==id);saveData();renderAll()}
function openCurriculumBookModal(){
  $("bookName").value="";$("bookSubject").value="English";$("bookType").value="Vocabulary";$("bookUnitLabel").value="Unit";$("bookCurrent").value=0;$("bookTotal").value=20;
  $("curriculumBookModal").classList.add("show");
}
function closeCurriculumBookModal(){$("curriculumBookModal").classList.remove("show")}
function addBook(){const name=$("bookName").value.trim();if(!name)return alert("请输入教材名称");data.curriculum.push({id:Date.now(),name,subject:$("bookSubject").value,type:$("bookType").value,unitLabel:$("bookUnitLabel").value,current:Number($("bookCurrent").value)||0,total:Number($("bookTotal").value)||1});$("bookName").value="";closeCurriculumBookModal();saveData();renderAll()}
function renderCurriculum(){const el=$("curriculumList");if(!el)return;el.innerHTML=data.curriculum.length?data.curriculum.map(b=>{const p=Math.min(100,Math.round((b.current||0)/(b.total||1)*100));return `<article class="curriculum-book"><div><div class="book-meta">${esc(b.subject)} · ${esc(b.type)}</div><h3>${esc(b.name)}</h3><div class="book-meta">${esc(b.unitLabel||"Chapter")} ${b.current}/${b.total}</div></div><div><div class="book-progress progress-with-label"><span style="width:${p}%"></span><b>${p}%</b></div><div class="toolbar"><button class="btn" onclick="advanceBook(${b.id})">下一章节</button><button class="btn" onclick="editBook(${b.id})">编辑</button><button class="btn" onclick="deleteBook(${b.id})">删除</button></div></div></article>`}).join(""):'<div class="small" style="grid-column:1/-1;text-align:center;padding:70px 20px;color:#6f604e">书架还是空的。点击“添加教材”放入第一本书吧。</div>'}
function advanceBook(id){const b=data.curriculum.find(x=>x.id===id);if(b&&b.current<b.total)b.current++;saveData();renderAll()}
function editBook(id){const b=data.curriculum.find(x=>x.id===id);if(!b)return;const name=prompt("教材名称",b.name);if(name===null)return;const current=prompt("当前进度",b.current);if(current===null)return;const total=prompt("总章节",b.total);if(total===null)return;const totalValue=Math.max(1,Number(total)||1);b.name=name.trim()||b.name;b.total=totalValue;b.current=Math.max(0,Math.min(Number(current)||0,totalValue));saveData();renderAll()}
function deleteBook(id){data.curriculum=data.curriculum.filter(x=>x.id!==id);saveData();renderAll()}
function openExamModal(){["examName","examDate","examScope"].forEach(id=>{if($(id))$(id).value=""});if($("examSubject"))$("examSubject").value="Math";$("examModal").classList.add("show")}
function closeExamModal(){$("examModal").classList.remove("show")}
function addExam(){const name=$("examName").value.trim(),date=$("examDate").value;if(!name||!date)return alert("请输入名称和日期");data.exams.push({id:Date.now(),name,subject:$("examSubject").value,date,scope:$("examScope").value.trim()});closeExamModal();saveData();renderAll()}
function renderExams(){const items=[...data.exams].sort((a,b)=>a.date.localeCompare(b.date));const upcoming=items.filter(e=>daysUntil(e.date)>=0);if($("examSummary")){const next=upcoming[0];$("examSummary").innerHTML=`<div><b>${upcoming.length}</b><span>即将到来</span></div><div><b>${next?daysUntil(next.date):0}</b><span>距离最近项目</span></div><div><b>${items.filter(e=>daysUntil(e.date)<0).length}</b><span>已经结束</span></div>`}$("examList").innerHTML=items.length?items.map(e=>{const d=new Date(e.date+"T00:00:00"),days=daysUntil(e.date);return `<article class="challenge-card"><div class="challenge-date"><span>${d.getMonth()+1}月</span><b>${String(d.getDate()).padStart(2,"0")}</b><small>${["周日","周一","周二","周三","周四","周五","周六"][d.getDay()]}</small></div><div class="challenge-main"><div class="challenge-topline"><span class="challenge-subject">${esc(e.subject)}</span><strong class="${days<0?'ended':''}">${days<0?'已结束':days===0?'今天':`还有 ${days} 天`}</strong></div><h4>${esc(e.name)}</h4>${e.scope?`<p>${esc(e.scope)}</p>`:''}<div class="challenge-actions"><button class="btn" onclick="editExam(${e.id})">编辑</button><button class="btn" onclick="deleteExam(${e.id})">删除</button></div></div></article>`}).join(""):'<div class="empty-state">暂时没有挑战项目。点击上方按钮添加。</div>'}
function editExam(id){const e=data.exams.find(x=>x.id===id);if(!e)return;const n=prompt("名称",e.name);if(n===null)return;const d=prompt("日期 YYYY-MM-DD",e.date);if(d===null)return;const s=prompt("范围",e.scope||"");if(s===null)return;e.name=n;e.date=d;e.scope=s;saveData();renderAll()}
function deleteExam(id){data.exams=data.exams.filter(x=>x.id!==id);saveData();renderAll()}
function bar(el,obj,suffix=""){const arr=Object.entries(obj),mx=Math.max(1,...arr.map(x=>x[1]));el.innerHTML=arr.map(([k,v])=>`<div class="bar-row"><div>${esc(k)}</div><div class="bar-track"><div class="bar-fill" style="width:${v/mx*100}%"></div></div><div>${v}${suffix}</div></div>`).join("")}
function renderStats(){const books={};data.curriculum.forEach(b=>books[b.name]=Math.round(b.current/b.total*100));bar($("bookStats"),books,"%");bar($("taskStats"),{"已完成":data.tasks.filter(x=>x.done).length,"未完成":data.tasks.filter(x=>!x.done).length});const eng={Vocabulary:0,Reading:0,Writing:0,Grammar:0};data.curriculum.filter(b=>b.subject==="English").forEach(b=>{const p=Math.round(b.current/b.total*100);if(b.type==="Vocabulary")eng.Vocabulary=p;else if(["Novel","Reading Comprehension"].includes(b.type))eng.Reading=Math.max(eng.Reading,p);else if(b.type==="Writing")eng.Writing=p;else if(b.type==="Grammar")eng.Grammar=p});bar($("englishStats"),eng,"%");bar($("readingStats"),{"Novel":data.reading.filter(x=>x.type==="Novel").length,"Reading Comprehension":data.reading.filter(x=>x.type==="Reading Comprehension").length})}

function ensureWonderData(){
  if(!Array.isArray(data.wonderParts)||!data.wonderParts.length){
    data.wonderParts=[
      {part:"Part One — August",count:31},
      {part:"Part Two — Via",count:16},
      {part:"Part Three — Summer",count:6},
      {part:"Part Four — Jack",count:20},
      {part:"Part Five — Justin",count:8},
      {part:"Part Six — August",count:11},
      {part:"Part Seven — Miranda",count:6},
      {part:"Part Eight — August",count:23}
    ];
  }
  if(!Array.isArray(data.wonderTitles))data.wonderTitles=[];
}
function getWonderFlat(){
  ensureWonderData();
  const rows=[];let global=0;
  data.wonderParts.forEach((p,pi)=>{
    for(let i=1;i<=p.count;i++){
      const title=data.wonderTitles[global]||`Chapter ${i}`;
      rows.push({global,partIndex:pi,part:p.part,local:i,title});
      global++;
    }
  });
  return rows;
}
function renderWonderToc(){
  ensureWonderData();
  if(!$("wonderToc"))return;
  const flat=getWonderFlat();
  let offset=0;
  $("wonderToc").innerHTML=data.wonderParts.map((p,pi)=>{
    const rows=flat.slice(offset,offset+p.count);offset+=p.count;
    return `<details class="wonder-part" ${pi===0?"open":""}>
      <summary><span>${esc(p.part)}</span><span>${p.count} chapters</span></summary>
      <div class="wonder-chapter-list">${rows.map(r=>{
        const rec=(data.chapters||[]).find(c=>c.book==="Wonder"&&Number(c.wonderIndex)===r.global);
        const cls=rec?.done?"done":rec?"current":"";
        return `<div class="wonder-chapter ${cls}">
          <div class="wonder-index">${r.local}</div>
          <button class="title-button" onclick="startWonderChapter(${r.global})">${esc(r.title)}</button>
          <button class="icon-btn" title="Edit title" onclick="editWonderTitle(${r.global})">Edit</button>
        </div>`;
      }).join("")}</div>
    </details>`;
  }).join("");
}
function startWonderChapter(index){
  const row=getWonderFlat().find(x=>x.global===index);if(!row)return;
  const existing=(data.chapters||[]).find(c=>c.book==="Wonder"&&Number(c.wonderIndex)===index);
  if(existing){openChapterModal(existing.id);return}
  openChapterModal();
  $("chapterBook").value="Wonder";
  $("chapterName").value=row.title;
  if($("chapterGoal")) $("chapterGoal").value="Read closely and complete the Reading Workshop.";
  $("chapterModal").dataset.wonderIndex=String(index);
}
function editWonderTitle(index){
  const flat=getWonderFlat(),row=flat.find(x=>x.global===index);if(!row)return;
  const value=prompt("Edit chapter title:",row.title);
  if(value===null)return;
  data.wonderTitles[index]=value.trim()||`Chapter ${row.local}`;
  saveData();renderWonderToc();
}
function openWonderImportModal(){
  ensureWonderData();
  $("wonderTitleImport").value=data.wonderTitles.filter(Boolean).join("\n");
  $("wonderImportModal").classList.add("show");
}
function importWonderTitles(){
  const lines=$("wonderTitleImport").value.split(/\r?\n/).map(x=>x.trim()).filter(Boolean);
  const total=getWonderFlat().length;
  if(!lines.length)return alert("请先粘贴章节标题。");
  data.wonderTitles=lines.slice(0,total);
  saveData();closeNovelModal("wonderImportModal");renderWonderToc();
  if(lines.length<total)alert(`已导入 ${lines.length} 个标题，其余章节继续显示编号。`);
}
function resetWonderStructure(){
  if(!confirm("恢复为 Chapter 1、Chapter 2 等编号？"))return;
  data.wonderTitles=[];
  saveData();renderWonderToc();
}

function chooseProfileAvatar(){const input=$("profileAvatarInput");if(input){input.value="";input.click();}}
function handleProfileAvatar(event){
  const file=event.target.files&&event.target.files[0];if(!file)return;
  if(!file.type.startsWith("image/"))return alert("请选择图片文件");
  const reader=new FileReader();
  reader.onload=()=>{
    const img=new Image();
    img.onload=()=>{
      const size=360,canvas=document.createElement("canvas");canvas.width=size;canvas.height=size;
      const ctx=canvas.getContext("2d"),scale=Math.max(size/img.width,size/img.height);
      const w=img.width*scale,h=img.height*scale;ctx.drawImage(img,(size-w)/2,(size-h)/2,w,h);
      data.settings=data.settings||{};data.settings.profileAvatar=canvas.toDataURL("image/jpeg",.86);
      saveData();renderDashboard();
    };
    img.onerror=()=>alert("图片读取失败，请换一张图片重试");img.src=reader.result;
  };
  reader.readAsDataURL(file);
}

function renderProgress(){const weekTotal=data.week.length,weekDone=data.week.filter(x=>x.done).length,taskTotal=data.tasks.length,taskDone=data.tasks.filter(x=>x.done).length,total=weekTotal+taskTotal,done=weekDone+taskDone,p=total?Math.round(done/total*100):0;$("progressText").textContent=`${done} / ${total} 已完成`;$("progressPct").textContent=p+"%";$("progressFill").style.width=p+"%"}

function applyPageTitles(){
  const site=(data.settings.siteTitle||"晞白的学习世界").trim();
  const planner=(data.settings.plannerTitle||"本周学习计划").trim();
  document.title=site;
  const h=$("weekTitle");
  if(h)h.textContent=planner; const weekHeading=document.querySelector('[data-page-heading="week"]'); if(weekHeading)weekHeading.textContent=planner;
  const brand=document.querySelector(".brand-words b");
  if(brand)brand.innerHTML=esc(site).replace(/\s+/g,"<br>");
}

function renderSettings(){
  Object.keys(data.settings).forEach(k=>{
    if($(k)){
      if($(k).type==="checkbox")$(k).checked=!!data.settings[k];
      else $(k).value=data.settings[k];
    }
  });
  applyPageTitles();
}
function saveSettings(){
  Object.keys(data.settings).forEach(k=>{
    if($(k))data.settings[k]=$(k).type==="checkbox"?$(k).checked:($(k).type==="number"?Number($(k).value):$(k).value);
  });
  applyPageTitles();
  saveData(true);
  renderAll();
}
function exportData(){const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="student_planner_v6_backup.json";a.click();URL.revokeObjectURL(a.href)}
$("importFile").onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{data=JSON.parse(r.result);saveData();renderAll();alert("导入成功")}catch(err){alert("文件格式不正确")}};r.readAsText(f)}
function resetAll(){if(confirm("确定恢复初始数据？")){data=clone(defaults);saveData();renderAll()}}

function toggleThemeDrawer(){
  const drawer=document.getElementById("themeDrawer");
  if(!drawer)return;
  const collapsed=drawer.classList.toggle("collapsed");
  const btn=drawer.querySelector(".theme-toggle");
  if(btn)btn.setAttribute("aria-expanded",String(!collapsed));
}

function setTheme(name){document.body.setAttribute('data-theme',name);localStorage.setItem(KEY+'-theme',name);document.querySelectorAll('[data-theme-choice]').forEach(b=>b.classList.toggle('active',b.dataset.themeChoice===name))}
function loadTheme(){document.body.dataset.theme=localStorage.getItem(KEY+'-theme')||'storybook'}



const GOOGLE_DRIVE_CLIENT_ID='84216591061-jpi10ansq54l8euvj6ibu6ts925bgp96.apps.googleusercontent.com';
const GOOGLE_DRIVE_SCOPE='https://www.googleapis.com/auth/drive.file';
const DRIVE_FOLDER_NAME='Little Explorer';
const DRIVE_DATA_FILE_NAME='app-data.json';
const DRIVE_SYNC_KEY=KEY+'-drive-sync-v1';
let driveTokenClient=null;
let driveAccessToken='';
let driveTokenExpiresAt=0;

function setDriveStatus(message,type=''){
  const box=document.getElementById('driveSyncStatus');
  const text=document.getElementById('driveSyncStatusText');
  if(box)box.className='sync-status'+(type?' '+type:'');
  if(text)text.textContent=message;
}
function setDriveBusy(isBusy,message){
  ['driveConnectBtn','driveSaveBtn','driveLoadBtn'].forEach(id=>{const el=document.getElementById(id);if(el)el.disabled=!!isBusy});
  if(message)setDriveStatus(message);
}
function saveDriveSyncMeta(action){
  const record={action,time:new Date().toISOString()};
  localStorage.setItem(DRIVE_SYNC_KEY,JSON.stringify(record));
  renderDriveSyncMeta();
}
function renderDriveSyncMeta(){
  const el=document.getElementById('driveSyncMeta');
  if(!el)return;
  let text='云端文件：Little Explorer/app-data.json';
  try{
    const meta=JSON.parse(localStorage.getItem(DRIVE_SYNC_KEY)||'null');
    if(meta&&meta.time){
      const when=new Date(meta.time).toLocaleString('zh-SG',{dateStyle:'medium',timeStyle:'short'});
      text+=' · 上次'+(meta.action==='save'?'保存':'载入')+'：'+when;
    }
  }catch(e){}
  el.textContent=text;
}
function waitForGoogleIdentity(timeout=8000){
  return new Promise((resolve,reject)=>{
    const start=Date.now();
    const check=()=>{
      if(window.google&&google.accounts&&google.accounts.oauth2)return resolve();
      if(Date.now()-start>timeout)return reject(new Error('Google 登录组件加载失败，请检查网络后重试。'));
      setTimeout(check,120);
    };
    check();
  });
}
function getDriveOriginCheck(){
  const protocol=window.location.protocol;
  const origin=window.location.origin;
  if(protocol==='file:'){
    return {ok:false,origin:'file:// 本地文件',message:'当前是本地文件。请把网站上传到 GitHub Pages 后，从 HTTPS 网站打开。'};
  }
  if(protocol!=='https:' && !['localhost','127.0.0.1'].includes(window.location.hostname)){
    return {ok:false,origin,message:'Google 登录要求 HTTPS 网站。'};
  }
  return {ok:true,origin,message:'网站来源正常'};
}
function renderDriveOriginInfo(){
  const el=document.getElementById('driveOriginInfo');
  if(!el)return;
  const check=getDriveOriginCheck();
  el.textContent='当前网站来源：'+check.origin+(check.ok?' · 可进行 Google 登录':' · '+check.message);
  el.style.color=check.ok?'':'#a33';
}
function assertDriveOrigin(){
  const check=getDriveOriginCheck();
  if(!check.ok)throw new Error(check.message+'\n\n当前地址：'+window.location.href);
}

async function initDriveTokenClient(){
  assertDriveOrigin();
  await waitForGoogleIdentity();
  if(driveTokenClient)return driveTokenClient;
  driveTokenClient=google.accounts.oauth2.initTokenClient({
    client_id:GOOGLE_DRIVE_CLIENT_ID,
    scope:GOOGLE_DRIVE_SCOPE,
    callback:()=>{}
  });
  return driveTokenClient;
}
async function requestDriveToken(forceConsent=false){
  if(driveAccessToken&&Date.now()<driveTokenExpiresAt-60000)return driveAccessToken;
  const client=await initDriveTokenClient();
  return new Promise((resolve,reject)=>{
    client.callback=(response)=>{
      if(response&&response.error)return reject(new Error(response.error_description||response.error));
      driveAccessToken=response.access_token;
      driveTokenExpiresAt=Date.now()+(Number(response.expires_in||3500)*1000);
      setDriveStatus('已连接','connected');
      resolve(driveAccessToken);
    };
    client.error_callback=(err)=>reject(new Error((err&&err.message)||'Google 登录窗口未能完成。'));
    client.requestAccessToken({prompt:forceConsent?'select_account':''});
  });
}
async function connectGoogleDrive(){
  try{
    setDriveBusy(true,'正在连接…');
    await requestDriveToken(true);
    setDriveStatus('已连接','connected');
  }catch(err){
    setDriveStatus('连接失败','error');
    alert('Google Drive 连接失败：'+err.message+'\n\n请检查：\n1. 当前地址必须以 https:// 开头；\n2. OAuth Client 的 JavaScript origin 必须是 https://wangweisunvilla-sudo.github.io；\n3. 登录账号已加入 Test users；\n4. Google Drive API 已启用。');
  }finally{setDriveBusy(false)}
}
async function driveFetch(url,options={}){
  const token=await requestDriveToken(false);
  const headers=new Headers(options.headers||{});
  headers.set('Authorization','Bearer '+token);
  const response=await fetch(url,{...options,headers});
  if(response.status===401){driveAccessToken='';driveTokenExpiresAt=0;throw new Error('授权已过期，请重新连接 Google Drive。')}
  if(!response.ok){
    let detail='';try{detail=(await response.json()).error?.message||''}catch(e){}
    throw new Error(detail||('Google Drive 请求失败（'+response.status+'）'));
  }
  return response;
}
function driveQueryUrl(q,fields='files(id,name,modifiedTime,parents)'){
  const params=new URLSearchParams({q,spaces:'drive',fields});
  return 'https://www.googleapis.com/drive/v3/files?'+params.toString();
}
async function findDriveItem(q){
  const response=await driveFetch(driveQueryUrl(q));
  const result=await response.json();
  return (result.files||[])[0]||null;
}
async function ensureDriveFolder(){
  const safeName=DRIVE_FOLDER_NAME.replace(/'/g,"\\'");
  let folder=await findDriveItem(`name='${safeName}' and mimeType='application/vnd.google-apps.folder' and trashed=false`);
  if(folder)return folder;
  const response=await driveFetch('https://www.googleapis.com/drive/v3/files?fields=id,name',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:DRIVE_FOLDER_NAME,mimeType:'application/vnd.google-apps.folder'})});
  return response.json();
}
async function findDriveDataFile(folderId){
  const safeName=DRIVE_DATA_FILE_NAME.replace(/'/g,"\\'");
  return findDriveItem(`name='${safeName}' and '${folderId}' in parents and trashed=false`);
}
async function createDriveJsonFile(folderId,jsonText){
  const boundary='little_explorer_'+Math.random().toString(36).slice(2);
  const metadata=JSON.stringify({name:DRIVE_DATA_FILE_NAME,parents:[folderId],mimeType:'application/json'});
  const body=`--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${metadata}\r\n--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${jsonText}\r\n--${boundary}--`;
  const response=await driveFetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,name,modifiedTime',{method:'POST',headers:{'Content-Type':'multipart/related; boundary='+boundary},body});
  return response.json();
}
async function updateDriveJsonFile(fileId,jsonText){
  const response=await driveFetch(`https://www.googleapis.com/upload/drive/v3/files/${encodeURIComponent(fileId)}?uploadType=media&fields=id,name,modifiedTime`,{method:'PATCH',headers:{'Content-Type':'application/json; charset=UTF-8'},body:jsonText});
  return response.json();
}
async function saveToGoogleDrive(){
  try{
    setDriveBusy(true,'正在保存…');
    await requestDriveToken(false);
    const folder=await ensureDriveFolder();
    const existing=await findDriveDataFile(folder.id);
    const jsonText=JSON.stringify(data,null,2);
    if(existing)await updateDriveJsonFile(existing.id,jsonText);else await createDriveJsonFile(folder.id,jsonText);
    saveDriveSyncMeta('save');
    setDriveStatus('云端已保存','connected');
    alert('学习数据已保存到 Google Drive。');
  }catch(err){
    setDriveStatus('保存失败','error');
    alert('保存失败：'+err.message);
  }finally{setDriveBusy(false)}
}
async function loadFromGoogleDrive(){
  try{
    setDriveBusy(true,'正在查找云端数据…');
    await requestDriveToken(false);
    const folder=await ensureDriveFolder();
    const file=await findDriveDataFile(folder.id);
    if(!file){setDriveStatus('尚无云端备份');alert('Google Drive 中还没有 app-data.json。请先在有最新数据的设备上点击“保存到云端”。');return}
    if(!confirm('从 Google Drive 载入会覆盖当前浏览器中的学习数据。确定继续吗？')){setDriveStatus('已取消');return}
    const response=await driveFetch(`https://www.googleapis.com/drive/v3/files/${encodeURIComponent(file.id)}?alt=media`);
    const incoming=await response.json();
    if(!incoming||typeof incoming!=='object'||Array.isArray(incoming))throw new Error('云端文件格式不正确。');
    data=incoming;
    normaliseLearningWorldData();
    saveData();
    renderAll();
    saveDriveSyncMeta('load');
    setDriveStatus('已载入最新数据','connected');
    alert('已从 Google Drive 载入最新学习数据。');
  }catch(err){
    setDriveStatus('载入失败','error');
    alert('载入失败：'+err.message);
  }finally{setDriveBusy(false)}
}
renderDriveSyncMeta();

const DICTIONARY_CACHE_KEY=KEY+'-dictionary-cache-v1';
let dictionaryAudioUrl='';
function getDictionaryCache(){try{return JSON.parse(localStorage.getItem(DICTIONARY_CACHE_KEY)||'{}')}catch(e){return {}}}
function setDictionaryCache(cache){try{localStorage.setItem(DICTIONARY_CACHE_KEY,JSON.stringify(cache))}catch(e){}}
function normalizeDictionaryResult(payload){
  const entries=Array.isArray(payload)?payload:[];
  const options=[];let phonetic='';let audio='';
  entries.forEach(entry=>{
    if(!phonetic)phonetic=entry.phonetic||(entry.phonetics||[]).find(p=>p.text)?.text||'';
    if(!audio)audio=(entry.phonetics||[]).find(p=>p.audio)?.audio||'';
    (entry.meanings||[]).forEach(m=>(m.definitions||[]).forEach(d=>{
      if(!d.definition)return;
      options.push({partOfSpeech:m.partOfSpeech||'',definition:d.definition||'',example:d.example||'',synonyms:[...(d.synonyms||[]),...(m.synonyms||[])].filter(Boolean).slice(0,8)});
    }));
  });
  return {phonetic,audio,options};
}
async function fetchDictionaryWord(word){
  const key=word.toLowerCase();const cache=getDictionaryCache();
  if(cache[key])return {...cache[key],cached:true};
  const response=await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+encodeURIComponent(key));
  if(!response.ok)throw new Error(response.status===404?'Word not found':'Dictionary service unavailable');
  const result=normalizeDictionaryResult(await response.json());
  if(!result.options.length)throw new Error('No English definition found');
  cache[key]=result;setDictionaryCache(cache);return result;
}
function setLookupStatus(id,message,state='',phonetic='',audio=''){
  const el=$(id);if(!el)return;el.className='dictionary-status'+(state?' '+state:'');
  const safe=esc(message);const phoneticHtml=phonetic?`<span class="dictionary-phonetic">${esc(phonetic)}${audio?` <button class="dictionary-audio" type="button" onclick="playDictionaryAudio('${encodeURIComponent(audio)}')" title="Play pronunciation"><svg class="ui-icon sm"><use href="#ico-sound"></use></svg></button>`:''}</span>`:'';
  el.innerHTML=safe+(phoneticHtml?'<br>'+phoneticHtml:'');
}
function playDictionaryAudio(encoded){const url=decodeURIComponent(encoded);if(!url)return;try{new Audio(url).play()}catch(e){}}
function fillDictionaryFields(prefix,result){
  const first=result.options[0]||{};
  const map=prefix==='vocab'?{
    definition:'vocabDefinition',partOfSpeech:'vocabPartOfSpeech',synonyms:'vocabSynonyms',example:'vocabExample'
  }:{definition:`chapterWordDefinition${prefix}`,partOfSpeech:`chapterWordPos${prefix}`,synonyms:`chapterWordSynonyms${prefix}`,example:`chapterWordExample${prefix}`};
  if($(map.definition))$(map.definition).value=first.definition||'';
  if($(map.partOfSpeech)){
    const select=$(map.partOfSpeech);const value=first.partOfSpeech||'';
    if(value&&!Array.from(select.options).some(o=>o.value===value)){const opt=document.createElement('option');opt.value=value;opt.textContent=value;select.appendChild(opt)}
    select.value=value;
  }
  if($(map.synonyms))$(map.synonyms).value=(first.synonyms||[]).join(', ');
  if($(map.example)&&first.example)$(map.example).value=first.example;
}
async function runDictionaryLookup(wordId,prefix,statusId,buttonId){
  const word=$(wordId)?.value.trim();if(!word){setLookupStatus(statusId,'请先输入一个英文单词。','error');return}
  const btn=$(buttonId);if(btn){btn.disabled=true;btn.textContent='查询中…'}
  setLookupStatus(statusId,'正在查询英文词典…','loading');
  try{
    const result=await fetchDictionaryWord(word);fillDictionaryFields(prefix,result);
    const count=result.options.length;
    setLookupStatus(statusId,`Done 找到 ${count} 个释义，已填入最常用释义${result.cached?'（本地缓存）':''}。内容可以继续修改。`,'success',result.phonetic,result.audio);
  }catch(error){
    const offline=!navigator.onLine;
    setLookupStatus(statusId,offline?'当前没有网络，请联网后重试，或手动填写。':`没有找到“${word}”。请检查拼写，或手动填写。`,'error');
  }finally{if(btn){btn.disabled=false;btn.innerHTML='<svg class="ui-icon sm"><use href="#ico-search"></use></svg> 自动查询'}}
}
function lookupVocabWord(){return runDictionaryLookup('vocabWord','vocab','vocabLookupStatus','vocabLookupBtn')}
function lookupChapterWord(index){return runDictionaryLookup(`chapterWord${index}`,String(index),`chapterWordLookupStatus${index}`,`chapterWordLookupBtn${index}`)}
function installDictionaryControls(){
  const main=$('vocabWord');if(main&&!main.dataset.dictionaryReady){main.dataset.dictionaryReady='1';main.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();lookupVocabWord()}})}
  for(let i=1;i<=3;i++){
    const input=$(`chapterWord${i}`);if(!input||input.dataset.dictionaryReady)continue;input.dataset.dictionaryReady='1';
    const parent=input.parentElement;const line=document.createElement('div');line.className='dictionary-word-line';parent.insertBefore(line,input);line.appendChild(input);
    const button=document.createElement('button');button.type='button';button.className='btn dictionary-lookup-btn';button.id=`chapterWordLookupBtn${i}`;button.innerHTML='<svg class="ui-icon sm"><use href="#ico-search"></use></svg> 自动查询';button.onclick=()=>lookupChapterWord(i);line.appendChild(button);
    const status=document.createElement('div');status.id=`chapterWordLookupStatus${i}`;status.className='dictionary-status';status.textContent='输入单词后可自动填入英文释义。';parent.appendChild(status);
    input.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();lookupChapterWord(i)}});
  }
}


const LEO_MESSAGES=[
  "Every chapter makes you a stronger reader.",
  "Small steps today become big progress tomorrow.",
  "Great readers notice words, patterns and ideas.",
  "Your thinking matters. Explain it clearly!",
  "Use one new word today and make it yours."
];
function wordCount(text){return (String(text||'').trim().match(/[A-Za-z']+/g)||[]).length}
function sentenceCount(text){return (String(text||'').trim().match(/[.!?]+/g)||[]).length || (String(text||'').trim()?1:0)}
function clampScore(n){return Math.max(0,Math.min(100,Math.round(n)))}
function starsFor(score){const full=Math.max(1,Math.round(score/20));return ''.repeat(full)+''.repeat(5-full)}
function calculateCoachReport(c){
  const words=Array.isArray(c.words)?c.words:[];
  const completeWords=words.filter(w=>w.word&&w.definition);
  const ownSentences=words.filter(w=>wordCount(w.ownSentence)>=4).length;
  let vocabulary=35+completeWords.length*15+ownSentences*7;
  if(completeWords.some(w=>String(w.definition).length>=25))vocabulary+=8;
  vocabulary=clampScore(vocabulary);

  let sentence=25;
  if(wordCount(c.favouriteQuote)>=4)sentence+=35;
  if(c.quoteReason)sentence+=18;
  if(wordCount(c.favouriteQuote)>=10)sentence+=12;
  sentence=clampScore(sentence);

  let writing=20;
  if(wordCount(c.imitation)>=5)writing+=35;
  if(wordCount(c.imitation)>=9)writing+=15;
  if(c.imitationPattern)writing+=15;
  if(/[.!?]$/.test(String(c.imitation||'').trim()))writing+=8;
  writing=clampScore(writing);

  const thought=String(c.oneThought||'').trim();
  let thinking=20;
  if(wordCount(thought)>=4)thinking+=28;
  if(/\b(because|so|but|although|when|if|why|therefore)\b/i.test(thought))thinking+=25;
  if(wordCount(thought)>=10)thinking+=17;
  if(sentenceCount(thought)>=2)thinking+=8;
  thinking=clampScore(thinking);
  const overall=clampScore(vocabulary*.28+sentence*.20+writing*.26+thinking*.26);
  const strengths=[];const next=[];
  if(vocabulary>=80)strengths.push('You built strong word cards and explained the meanings clearly.'); else next.push('Complete all three word cards and write your own sentence for each word.');
  if(sentence>=80)strengths.push('You chose a meaningful sentence and noticed why it matters.'); else next.push('Choose a sentence with an important idea or memorable language.');
  if(writing>=80)strengths.push('Your imitation follows the original sentence pattern well.'); else next.push('Keep the original pattern, then add one vivid detail of your own.');
  if(thinking>=80)strengths.push('You supported your thought with a reason or evidence.'); else next.push('Add “because” and explain why you think this.');
  const badges=[];
  if(vocabulary>=85)badges.push('Word Master');
  if(writing>=85)badges.push(' Pattern Writer');
  if(thinking>=85)badges.push('Deep Thinker');
  if(overall>=90)badges.push('Reading Hero');
  if(!badges.length)badges.push('Growing Reader');
  const xp=Math.max(10,Math.round(overall/5));
  return {vocabulary,sentence,writing,thinking,overall,stars:starsFor(overall),strengths,next,badges,xp,createdAt:new Date().toISOString()};
}
function ensureCoachProfile(){
  data.coach=data.coach||{xp:0,badges:[],reports:[]};
  data.coach.badges=Array.isArray(data.coach.badges)?data.coach.badges:[];
  data.coach.reports=Array.isArray(data.coach.reports)?data.coach.reports:[];
  data.coach.xp=Number(data.coach.xp||0);
}
function applyCoachReport(c,report){
  ensureCoachProfile();
  const old=data.coach.reports.find(r=>r.chapterId===c.id);
  if(!old)data.coach.xp+=report.xp; else data.coach.xp+=Math.max(0,report.xp-(old.xp||0));
  report.badges.forEach(b=>{if(!data.coach.badges.includes(b))data.coach.badges.push(b)});
  data.coach.reports=data.coach.reports.filter(r=>r.chapterId!==c.id);
  data.coach.reports.unshift({chapterId:c.id,book:c.book,name:c.name,date:c.date,...report});
  c.coach=report;
}
function metricRow(label,value,icon){
  const level=value>=90?'Excellent':value>=75?'Great':value>=60?'Growing':'Keep Trying';
  return `<div class="coach-metric"><div class="coach-metric-head">${uiIcon(icon,'lg')}<b>${label}</b></div><div class="coach-bar"><span style="width:${value}%"></span></div><div class="coach-metric-foot"><strong>${value}%</strong><span class="coach-level">${level}</span></div></div>`
}
function showCoachReport(chapterId){
  const c=data.chapters.find(x=>x.id===chapterId);if(!c)return;
  const r=c.coach||calculateCoachReport(c);
  const strength=r.strengths[0]||'You completed today’s reading workshop.';
  const suggestion=r.next[0]||'Use one new word in tomorrow’s reflection.';
  $('coachReportBody').innerHTML=`
    <div class="coach-hero"><img src="assets/leo_reading.png" alt="Leo"><div><h2>${esc(c.book)} · ${esc(c.name)}</h2><p><span class="coach-stars">${r.stars}</span> &nbsp; Leo is proud of your effort!</p><p>你获得了 <b>+${r.xp} XP</b></p></div><div class="coach-score-ring" style="--score:${r.overall*3.6}deg"><strong>${r.overall}</strong></div></div>
    <div class="coach-metrics">${metricRow('Vocabulary',r.vocabulary,'ico-books')}${metricRow('Sentence',r.sentence,'ico-reading')}${metricRow('Imitation',r.writing,'ico-pencil')}${metricRow('Thinking',r.thinking,'ico-think')}</div>
    <div class="coach-grid"><div class="coach-card coach-green"><h4>${uiIcon('ico-spark','coach-card-icon')} Excellent</h4><p>${esc(strength)}</p></div><div class="coach-card coach-blue"><h4>${uiIcon('ico-think','coach-card-icon')} Great Thinking</h4><p>${r.thinking>=75?'You explained your idea clearly and showed thoughtful reading.':'You have a good starting idea. Add a reason to make it stronger.'}</p></div><div class="coach-card coach-orange"><h4>${uiIcon('ico-pencil','coach-card-icon')} Try Next Time</h4><p>${esc(suggestion)}</p></div><div class="coach-card coach-purple"><h4>${uiIcon('ico-rocket','coach-card-icon')} Challenge</h4><p>Can you use one of today’s new words in your next imitation sentence?</p></div><div class="coach-card coach-pink"><h4>${uiIcon('ico-heart','coach-card-icon')} Leo Says</h4><p>Keep going, ${esc(data.settings?.studentName||'晞白')}! Every chapter helps your reading voice grow stronger.</p></div></div>
    <div class="coach-badges">${r.badges.map(b=>`<span class="coach-badge">${b}</span>`).join('')}</div>
    <div class="coach-actions"><button class="btn" onclick="closeNovelModal('coachReportModal')">返回小说精读</button><button class="btn primary" onclick="showPage('home');closeNovelModal('coachReportModal')">查看成长看板</button></div>`;
  $('coachReportModal').classList.add('show');
}

function openChapterModal(id=null){
  installDictionaryControls();for(let i=1;i<=3;i++)setLookupStatus(`chapterWordLookupStatus${i}`,"输入单词后可自动填入英文释义。");
  const c=id?data.chapters.find(x=>x.id===id):null;
  const fields={
    chapterId:c?.id||"", chapterBook:c?.book||data.novelBooks?.find(x=>x.status==="reading")?.title||"",
    chapterName:c?.name||"", chapterDate:c?.date||localISODate(), chapterMinutes:c?.minutes||10,
    chapterFavouriteQuote:c?.favouriteQuote||"", chapterQuoteReason:c?.quoteReason||"", chapterImitationPattern:c?.imitationPattern||"", chapterImitation:c?.imitation||"", chapterOneThought:c?.oneThought||c?.reflection||""
  };
  Object.entries(fields).forEach(([id,value])=>{if($(id))$(id).value=value});
  if($("chapterReadDone"))$("chapterReadDone").checked=Boolean(c?.readDone||c?.done);
  const words=Array.isArray(c?.words)?c.words:[];
  for(let i=1;i<=3;i++){
    const w=words[i-1]||{};
    [[`chapterWord${i}`,w.word||""],[`chapterWordPos${i}`,w.partOfSpeech||""],[`chapterWordDefinition${i}`,w.definition||""],[`chapterWordExample${i}`,w.example||""],[`chapterWordSynonyms${i}`,w.synonyms||""],[`chapterWordOwn${i}`,w.ownSentence||""]].forEach(([fid,val])=>{if($(fid))$(fid).value=val});
  }
  $("chapterAddToWeek").checked=!c;
  if(c?.wonderIndex!==undefined&&c?.wonderIndex!==null)$("chapterModal").dataset.wonderIndex=String(c.wonderIndex); else delete $("chapterModal").dataset.wonderIndex;
  $("chapterModal").classList.add("show");
}
function openVocabModal(){
  installDictionaryControls();setLookupStatus("vocabLookupStatus","输入单词后点击“自动查询”，或按 Enter。");
  $("vocabWord").value="";$("vocabDefinition").value="";$("vocabPartOfSpeech").value="";$("vocabSynonyms").value="";$("vocabExample").value="";$("vocabOwnSentence").value="";$("vocabSource").value="";$("vocabStatus").value="learning";$("vocabModal").classList.add("show")
}
function openBookModal(){$("novelBookTitle").value="";$("novelBookAuthor").value="";$("novelBookTotal").value=20;$("novelBookCurrent").value=0;$("novelBookStatus").value="reading";$("bookModal").classList.add("show")}
function closeNovelModal(id){$(id).classList.remove("show")}
function saveChapter(withCoach=false){
  const id=Number($("chapterId").value)||Date.now();
  const old=data.chapters.find(x=>x.id===id);
  const words=[];
  for(let i=1;i<=3;i++){
    const word=$("chapterWord"+i).value.trim();
    const definition=$("chapterWordDefinition"+i).value.trim();
    if(word||definition)words.push({word,definition,partOfSpeech:$("chapterWordPos"+i).value,synonyms:$("chapterWordSynonyms"+i).value.trim(),example:$("chapterWordExample"+i).value.trim(),ownSentence:$("chapterWordOwn"+i).value.trim()});
  }
  const c={
    ...(old||{}), id, book:$("chapterBook").value.trim(), name:$("chapterName").value.trim(), date:$("chapterDate").value,
    minutes:Number($("chapterMinutes").value)||10, readDone:$("chapterReadDone").checked, words,
    favouriteQuote:$("chapterFavouriteQuote").value.trim(), quoteReason:$("chapterQuoteReason").value,
    imitationPattern:$("chapterImitationPattern").value.trim(), imitation:$("chapterImitation").value.trim(),
    oneThought:$("chapterOneThought").value.trim(),
    wonderIndex:old?.wonderIndex ?? ($("chapterModal").dataset.wonderIndex!==undefined?Number($("chapterModal").dataset.wonderIndex):null),
    done:$("chapterReadDone").checked
  };
  if(!c.book||!c.name)return alert("Please enter the book and chapter.");
  const idx=data.chapters.findIndex(x=>x.id===id); if(idx>=0)data.chapters[idx]=c; else data.chapters.push(c);
  data.vocab=data.vocab||[];
  words.forEach(w=>{
    if(!w.word||!w.definition)return;
    const source=`${c.book} — ${c.name}`;
    const existing=data.vocab.find(v=>v.word.toLowerCase()===w.word.toLowerCase()&&v.source===source);
    const entry={id:existing?.id||Date.now()+Math.random(),...w,source,status:existing?.status||"learning"};
    if(existing)Object.assign(existing,entry);else data.vocab.push(entry);
  });
  if($("chapterAddToWeek").checked&&!old){
    const day=DAYS[Math.max(0,Math.min(6,new Date(c.date+"T00:00:00").getDay()-1))]||"周一";
    data.week.push({id:Date.now()+1,day,start:"19:30",end:addMinutes("19:30",c.minutes),title:`${c.book} ${c.name}`,type:"study",notes:"10-minute reading",done:c.done,chapterId:c.id});
  }
  if(withCoach){
    if(!c.readDone)return alert("请先勾选“我已经读完今天这一章”。");
    const report=calculateCoachReport(c);applyCoachReport(c,report);
  }
  delete $("chapterModal").dataset.wonderIndex; saveData(); closeNovelModal("chapterModal"); renderAll();
  if(withCoach)setTimeout(()=>showCoachReport(c.id),80);
}
function toggleChapter(id,v){
  const c=data.chapters.find(x=>x.id===id);if(!c)return;c.done=v;
  const linked=data.week.find(x=>x.chapterId===id);if(linked)linked.done=v;
  if(v){
    const b=data.novelBooks.find(x=>x.title===c.book);if(b&&b.current<b.total)b.current++;
  }
  saveData();renderAll();
}
function deleteChapter(id){if(confirm("删除这个章节记录？")){data.chapters=data.chapters.filter(x=>x.id!==id);data.week=data.week.filter(x=>x.chapterId!==id);saveData();renderAll()}}
function saveVocab(){
  const word=$("vocabWord").value.trim();if(!word)return alert("Please enter a word.");
  const definition=$("vocabDefinition").value.trim();if(!definition)return alert("Please add an English definition.");
  data.vocab.push({id:Date.now(),word,definition,partOfSpeech:$("vocabPartOfSpeech").value,synonyms:$("vocabSynonyms").value.trim(),example:$("vocabExample").value.trim(),ownSentence:$("vocabOwnSentence").value.trim(),source:$("vocabSource").value.trim(),status:$("vocabStatus").value});
  saveData();closeNovelModal("vocabModal");renderAll();
}
function cycleVocab(id){
  const v=data.vocab.find(x=>x.id===id);if(!v)return;
  v.status=v.status==="learning"?"review":v.status==="review"?"mastered":"learning";
  saveData();renderAll();
}
function deleteVocab(id){data.vocab=data.vocab.filter(x=>x.id!==id);saveData();renderAll()}
function saveNovelBook(){
  const title=$("novelBookTitle").value.trim();if(!title)return alert("请输入书名");
  data.novelBooks.push({id:Date.now(),title,author:$("novelBookAuthor").value.trim(),total:Number($("novelBookTotal").value)||1,current:Number($("novelBookCurrent").value)||0,status:$("novelBookStatus").value});
  saveData();closeNovelModal("bookModal");renderAll();
}
function deleteNovelBook(id){data.novelBooks=data.novelBooks.filter(x=>x.id!==id);saveData();renderAll()}
let pendingCoverBookId=null;
function chooseNovelCover(id){
  pendingCoverBookId=id;
  const input=$("novelCoverInput");
  input.value="";
  input.click();
}
function handleNovelCoverFile(event){
  const file=event.target.files&&event.target.files[0];
  if(!file||pendingCoverBookId===null)return;
  if(!/^image\/(jpeg|png|webp)$/.test(file.type))return alert("请选择 JPG、PNG 或 WEBP 图片。");
  if(file.size>12*1024*1024)return alert("图片太大，请选择 12MB 以内的图片。");
  const reader=new FileReader();
  reader.onerror=()=>alert("读取图片失败，请重新选择。");
  reader.onload=()=>compressCoverImage(reader.result).then(url=>{
    const book=data.novelBooks.find(x=>x.id===pendingCoverBookId);
    if(!book)return;
    book.cover=url;
    try{
      saveData();
    }catch(err){
      book.cover="";
      return alert("浏览器储存空间不足。请换一张尺寸较小的图片。");
    }
    pendingCoverBookId=null;
    renderAll();
  }).catch(()=>alert("处理封面失败，请换一张图片重试。"));
  reader.readAsDataURL(file);
}
function compressCoverImage(dataUrl){
  return new Promise((resolve,reject)=>{
    const img=new Image();
    img.onload=()=>{
      const targetRatio=2/3, maxW=600, maxH=900;
      let sw=img.naturalWidth, sh=img.naturalHeight, sx=0, sy=0;
      const ratio=sw/sh;
      if(ratio>targetRatio){const nw=sh*targetRatio;sx=(sw-nw)/2;sw=nw}
      else if(ratio<targetRatio){const nh=sw/targetRatio;sy=(sh-nh)/2;sh=nh}
      const scale=Math.min(1,maxW/sw,maxH/sh);
      const cw=Math.max(240,Math.round(sw*scale));
      const ch=Math.round(cw/targetRatio);
      const canvas=document.createElement("canvas");
      canvas.width=cw;canvas.height=ch;
      const ctx=canvas.getContext("2d");
      ctx.fillStyle="#ffffff";ctx.fillRect(0,0,cw,ch);
      ctx.drawImage(img,sx,sy,sw,sh,0,0,cw,ch);
      resolve(canvas.toDataURL("image/jpeg",0.84));
    };
    img.onerror=reject;
    img.src=dataUrl;
  });
}
function removeNovelCover(id){
  const book=data.novelBooks.find(x=>x.id===id);if(!book)return;
  if(!confirm("确定移除这本书的封面吗？"))return;
  book.cover="";saveData();renderAll();
}

function renderDashboard(){
  const books=data.novelBooks||[], chapters=data.chapters||[], vocab=data.vocab||[], week=data.week||[];
  const active=books.find(b=>b.status==="reading")||books[0];
  const completedChapters=chapters.filter(c=>c.done).length;
  const mastered=vocab.filter(v=>v.status==="mastered").length;
  const savedSentences=chapters.filter(c=>(c.favouriteQuote||"").trim()).length;
  const imitationCount=chapters.filter(c=>(c.imitation||"").trim()).length;
  const thoughts=chapters.filter(c=>(c.reflection||c.oneThought||"").trim()).length;
  const todayIndex=(new Date().getDay()+6)%7, todayName=DAYS[todayIndex];
  const todayTasks=week.filter(t=>t.day===todayName).sort((a,b)=>a.start.localeCompare(b.start));
  const pendingTodayTasks=todayTasks.filter(t=>!t.done);
  const todayDone=todayTasks.length-pendingTodayTasks.length;
  const todayPct=todayTasks.length?Math.round(todayDone/todayTasks.length*100):0;
  const weekDone=week.filter(t=>t.done).length;
  const weekPct=week.length?Math.round(weekDone/week.length*100):0;
  const name=data.settings?.studentName||"晞白";
  if($("dashboardStudentName"))$("dashboardStudentName").textContent=name;
  if($("sidebarStudentName"))$("sidebarStudentName").textContent=name;
  if($("sidebarAvatar"))$("sidebarAvatar").src=data.settings?.profileAvatar||"assets/dashboard_logo_art.jpg";

  if($("dashboardGoals"))$("dashboardGoals").innerHTML=[
    ["ico-reading","阅读章节",completedChapters?1:0,"1 章"],
    ["ico-books","学习词汇",Math.min(3,vocab.length),"3 个"],
    ["ico-heart","收藏好句",savedSentences?1:0,"1 句"],
    ["ico-pencil","仿写练习",imitationCount?1:0,"1 句"],
    ["ico-think","写下感想",thoughts?1:0,"1 句"]
  ].map(x=>`<div class="goal-metric"><span class="goal-icon"><svg aria-hidden="true"><use href="#${x[0]}"></use></svg></span><span>${x[1]}</span><b>${x[2]}</b><small>/ ${x[3]}</small></div>`).join("");
  if($("dashboardComplete"))$("dashboardComplete").innerHTML=`<span class="cup-icon"></span><span>今日已完成</span><b>${todayPct}%</b><small>${todayPct===100?"太棒了！":"继续加油！"}</small>`;

  if($("dashFocus"))$("dashFocus").innerHTML=pendingTodayTasks.length?pendingTodayTasks.slice(0,4).map((t,i)=>`<div class="board-task-row"><span class="color-bar bar-${i%4}"></span><time>${t.start}</time><span class="task-symbol">${taskSymbol(t.title)}</span><div class="task-main"><b>${esc(t.title)}</b></div><span class="task-tag tag-${i%4}">${taskLabel(t.title)}</span></div>`).join(""):(todayTasks.length?'<div class="empty-state">今天的任务已全部完成！</div>':'<div class="empty-state">今天还没有安排任务。</div>');
  if($("dashFocusSummary")){const summary=$("dashFocusSummary");summary.textContent=pendingTodayTasks.length?`未完成 ${pendingTodayTasks.length} 项`:"";summary.style.display=pendingTodayTasks.length?"":"none";}

  if($("dashExams")){
    const upcoming=(data.exams||[]).map(e=>({...e,days:daysUntil(e.date)})).filter(e=>e.days>=0).sort((a,b)=>a.days-b.days).slice(0,3);
    $("dashExams").innerHTML=upcoming.length?upcoming.map(e=>{const d=new Date(e.date+"T00:00:00");return `<div class="challenge-row"><div class="date-box"><b>${d.getMonth()+1}月</b><span>${String(d.getDate()).padStart(2,"0")}</span></div><div><b>${esc(e.name)}</b><small>${e.date} ${esc(e.subject||"")}</small></div><strong>${e.days===0?"今天":"还有 "+e.days+" 天"}</strong></div>`}).join(""):'<div class="empty-state">目前没有即将到来的挑战。</div>';
  }

  ensureCoachProfile();
  const coachReports=data.coach.reports||[];
  const avgCoach=coachReports.length?Math.round(coachReports.reduce((n,r)=>n+(r.overall||0),0)/coachReports.length):0;
  if($("dashStats"))$("dashStats").innerHTML=`
    <div class="leo-dashboard-message"><b>Leo 今日寄语</b><br>${LEO_MESSAGES[new Date().getDate()%LEO_MESSAGES.length]}</div>
    <div class="growth-row"><span class="growth-dot"></span><b>阅读教练评分</b><strong>${avgCoach||"—"}<small>${avgCoach?" 分":""}</small></strong></div>
    <div class="growth-row"><span class="growth-dot"></span><b>Leo XP</b><strong>${data.coach.xp}<small> XP</small></strong></div>
    <div class="growth-row"><span class="growth-dot"></span><b>任务完成</b><strong>${weekDone}<small> / ${week.length} 项</small></strong></div>
    <div class="growth-row"><span class="growth-dot"></span><b>已完成章节</b><strong>${completedChapters}<small> 章</small></strong></div>
    <div class="growth-row"><span class="growth-dot"></span><b>已掌握词汇</b><strong>${mastered}<small> 个</small></strong></div>
    <div class="growth-row"><span class="growth-dot"></span><b>收藏好句</b><strong>${savedSentences}<small> 句</small></strong></div>
    <div class="growth-row"><span class="growth-dot"></span><b>仿写句子</b><strong>${imitationCount}<small> 句</small></strong></div>`;

  if($("dashboardCurrentBook")){
    const p=active?Math.min(100,Math.round((active.current||completedChapters)/(active.total||1)*100)):0;
    $("dashboardCurrentBook").innerHTML=active?`<div class="current-reading"><img class="novel-cover" src="${active.cover||'assets/wonder_cover_original.svg'}" alt="${esc(active.title)} 封面"><div><h3>${esc(active.title)}</h3><p>Chapter ${active.current||completedChapters||1}</p><div class="reading-progress"><span style="width:${p}%"></span></div><small>本书进度：${p}%</small><button onclick="showPage('novel')">继续阅读</button></div></div>`:'<div class="empty-state">还没有正在阅读的书。</div>';
  }
  if($("dashboardWeekCard"))$("dashboardWeekCard").innerHTML=`<p>本周进度 <strong>${weekPct}%</strong></p><div class="reading-progress week-progress"><span style="width:${weekPct}%"></span></div><p>已完成 ${weekDone} / ${week.length} 项任务</p><button onclick="showPage('week')">查看本周计划</button>`;
}
function taskSymbol(title){const t=(title||"").toLowerCase();if(t.includes("钢琴")||t.includes("piano"))return "";if(t.includes("科学")||t.includes("science"))return "";if(t.includes("词")||t.includes("grammar"))return "Aa";return "▣";}
function taskLabel(title){const t=(title||"").toLowerCase();if(t.includes("钢琴")||t.includes("练"))return "练习";if(t.includes("阅读")||t.includes("read"))return "阅读";return "学习";}

function renderNovel(){renderWonderToc();
  if(!$("chapterList")||!$("vocabList")||!$("sentenceList")||!$("readingMap")||!$("novelShelf"))return;
  if(!data.novelBooks)data.novelBooks=[];
  if(!data.chapters)data.chapters=[];
  if(!data.vocab)data.vocab=[];
  data.vocab=data.vocab.map(v=>({
    ...v,
    definition:v.definition||v.meaning||"",
    partOfSpeech:v.partOfSpeech||"",
    synonyms:v.synonyms||"",
    ownSentence:v.ownSentence||""
  }));
  $("chapterList").innerHTML=data.chapters.length?data.chapters.sort((a,b)=>a.date.localeCompare(b.date)).map((c,chapterIndex)=>{
    const words=Array.isArray(c.words)?c.words:[];
    const missions=["Read","3 Words","好句","仿写","感想"];
    return `<article class="journal-book ${c.done?"done":""}">
      <section class="journal-page">
        <div class="journal-kicker"><svg class="ui-icon sm"><use href="#ico-reading"></use></svg> Explorer's Reading Journal</div>
        <h3 class="journal-title">${esc(c.book)}</h3>
        <div class="journal-meta"><span>${esc(c.name)}</span><span>${formatJournalDate(c.date)}</span><span>about ${c.minutes||10} minutes</span></div>
        <div class="journal-section">
          <div class="journal-label"><svg><use href="#ico-compass"></use></svg> Today's Mission</div>
          <div class="mission-list">${missions.map((m,i)=>`<div class="mission-item"><span class="mission-check">${c.done||i===0?'':'·'}</span>${m}</div>`).join("")}</div>
        </div>
        <div class="journal-section">
          <div class="journal-label"><svg><use href="#ico-books"></use></svg> Vocabulary</div>
          <div class="word-chips">${words.length?words.map(w=>`<span class="word-chip">${esc(w.word)}</span>`).join(""):'<span class="small">还没有添加词汇。</span>'}</div>
        </div>
        <div class="journal-actions"><button class="btn primary" onclick="openChapterModal(${c.id})">打开手帐</button><button class="btn" onclick="toggleChapter(${c.id},${!c.done})">${c.done?'标记未完成':'完成本章'}</button><button class="btn" onclick="deleteChapter(${c.id})">删除</button></div>
        <span class="page-number">Page ${chapterIndex*2+1}</span>
      </section>
      <section class="journal-page">
        <div class="journal-section">
          <div class="journal-label"><svg><use href="#ico-pencil"></use></svg> Favourite Quote</div>
          ${c.favouriteQuote?`<div class="journal-note"><span class="journal-reason">${esc(c.quoteReason||'Saved Sentence')}</span><div class="journal-quote">“${esc(c.favouriteQuote)}”</div></div>`:'<div class="journal-note"><span class="small">今天还没有收藏好句。</span></div>'}
        </div>
        <div class="journal-section">
          <div class="journal-label"><svg><use href="#ico-pencil"></use></svg> My Imitation Writing</div>
          ${c.imitation?`<div class="journal-note blue">${c.imitationPattern?`<div class="small"><strong>模仿：</strong>${esc(c.imitationPattern)}</div>`:''}<div>${esc(c.imitation)}</div></div>`:'<div class="journal-note blue"><span class="small">写一句自己的仿写。</span></div>'}
        </div>
        <div class="journal-section">
          <div class="journal-label"><svg><use href="#ico-bulb"></use></svg> One Thought</div>
          <div class="journal-note rose">${c.oneThought?esc(c.oneThought):'<span class="small">写下阅读后的一个想法。</span>'}</div>
        </div>
        ${c.coach?`<div class="journal-section"><div class="journal-label"><svg><use href="#ico-badge"></use></svg> Leo Reading Coach</div><div class="coach-stamp"><div class="coach-score">${c.coach.overall}%</div><div class="coach-copy"><strong>${c.coach.stars}</strong><small>完成本章获得 +${c.coach.xp} XP</small></div><button class="btn" onclick="showCoachReport(${c.id})">查看报告</button></div></div>`:''}
        <span class="page-number">Page ${chapterIndex*2+2}</span>
      </section>
    </article>`;
  }).join(""):`<div class="journal-book"><section class="journal-page"><div class="journal-kicker">Explorer's Reading Journal</div><h3 class="journal-title">今天从一章开始</h3><p>每天读一章，学习三个重点词，收藏一个好句，完成一句仿写，再写一句感想。</p><button class="btn primary" onclick="openChapterModal()">添加今天的章节</button></section><section class="journal-page"><div class="journal-note">Your next adventure begins here.</div></section></div>`;

  const statusName={learning:"Learning",review:"Review",mastered:"Mastered"};
  $("vocabList").innerHTML=data.vocab.length?data.vocab.map(v=>`
    <div class="vocab-card">
      <div style="display:flex;justify-content:space-between;gap:8px;align-items:flex-start">
        <b>${esc(v.word)}</b>
        ${v.partOfSpeech?`<span class="chapter-tag">${esc(v.partOfSpeech)}</span>`:""}
      </div>
      <div class="small" style="margin-top:8px"><strong>Definition</strong></div>
      <div>${esc(v.definition||v.meaning||"")}</div>
      ${v.synonyms?`<div class="small" style="margin-top:7px"><strong>Synonyms:</strong> ${esc(v.synonyms)}</div>`:""}
      ${v.example?`<div class="small" style="margin-top:7px"><strong>Example:</strong> ${esc(v.example)}</div>`:""}
      ${v.ownSentence?`<div class="small" style="margin-top:7px"><strong>My Sentence:</strong> ${esc(v.ownSentence)}</div>`:""}
      ${v.source?`<div class="small" style="margin-top:7px"><strong>Source:</strong> ${esc(v.source)}</div>`:""}
      <div class="toolbar">
        <button class="vocab-status" onclick="cycleVocab(${v.id})">${statusName[v.status]||v.status}</button>
        <button class="icon-btn" onclick="deleteVocab(${v.id})">Delete</button>
      </div>
    </div>`).join(""):'<div class="small">No vocabulary cards yet.</div>';

  const savedQuotes=data.chapters
    .filter(c=>(c.favouriteQuote||"").trim())
    .sort((a,b)=>(b.date||"").localeCompare(a.date||""));
  $("sentenceList").innerHTML=savedQuotes.length?savedQuotes.map(c=>`
    <article class="sentence-bank-card">
      <div class="sentence-bank-meta"><span>${esc(c.book||"Reading Journal")}</span><span>${esc(c.name||"")}</span><span>${formatJournalDate(c.date)}</span></div>
      <blockquote>“${esc(c.favouriteQuote)}”</blockquote>
      <div class="sentence-bank-footer"><span class="journal-reason">${esc(c.quoteReason||"Saved Sentence")}</span><button class="btn" onclick="openChapterModal(${c.id})">打开原章节</button></div>
    </article>`).join(""):'<div class="empty-bank">还没有收藏金句。完成今日章节时，保存一句喜欢的原文吧。</div>';

  const imitationItems=data.chapters
    .filter(c=>(c.imitation||c.imitationPattern||"").trim())
    .sort((a,b)=>(b.date||"").localeCompare(a.date||""));
  const imitationEl=$("imitationList");
  if(imitationEl)imitationEl.innerHTML=imitationItems.length?imitationItems.map(c=>`
    <article class="imitation-card">
      <div class="sentence-bank-meta"><span>${esc(c.book||"Reading Journal")}</span><span>${esc(c.name||"")}</span><span>${formatJournalDate(c.date)}</span></div>
      ${c.favouriteQuote?`<div class="imitation-source" style="margin-top:12px">“${esc(c.favouriteQuote)}”</div>`:""}
      ${c.imitationPattern?`<div class="small" style="margin-top:10px"><strong>句型提示：</strong>${esc(c.imitationPattern)}</div>`:""}
      <div class="imitation-answer">${c.imitation?esc(c.imitation):'<span class="small">还没有填写仿写内容。</span>'}</div>
      <div class="toolbar"><button class="btn" onclick="openChapterModal(${c.id})">查看 / 编辑章节</button></div>
    </article>`).join(""):'<div class="imitation-empty">还没有仿写练习。打开一个章节，收藏好句并完成一句仿写吧。</div>';

  const total=Math.max(6,data.chapters.length||0);
  const completed=data.chapters.filter(x=>x.done).length;
  const places=["Reading Forest","Word Mountain","Writing River","Science Camp","Piano Hall","Achievement Castle"];
  const coords=[[14,72],[28,35],[45,68],[61,30],[76,66],[90,28]];
  const points=Array.from({length:total},(_,i)=>coords[i%coords.length]);
  const path=points.map(p=>p.join(',')).join(' ');
  $("readingMap").innerHTML=`<svg class="map-route" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M ${points.map(p=>p.join(' ')).join(' L ')}"></path></svg>`+Array.from({length:total},(_,i)=>{
    const cls=i<completed?"done":i===completed?"current":"";const [x,y]=points[i];
    return `<div class="map-landmark ${cls}" style="left:${x}%;top:${y}%"><div class="map-node">${i+1}</div><b>${places[i%places.length]}</b><small>${i<completed?'Completed':i===completed?'Current Quest':'Locked'}</small></div>`;
  }).join("")+(()=>{const i=Math.min(completed,total-1),p=points[i];return `<img class="map-leo" src="assets/leo_mochi_logo.png" alt="Leo" style="left:${p[0]}%;top:${p[1]}%">`})() ;

  $("novelShelf").innerHTML=data.novelBooks.length?data.novelBooks.map(b=>{
    const p=Math.min(100,Math.round((b.current||0)/(b.total||1)*100));
    const status={reading:"正在读",want:"想读",done:"已完成"}[b.status]||b.status;
    const cover=b.cover||"";
    return `<div class="shelf-book">
      <div class="shelf-cover-wrap">${cover?`<img class="shelf-cover-image" src="${esc(cover)}" alt="${esc(b.title)} 封面">`:`<div class="shelf-cover-placeholder">${esc(b.title)}</div>`}</div>
      <b>${esc(b.title)}</b>
      <div class="small">${esc(b.author||"")} · ${status}</div>
      <div class="small">章节 ${b.current}/${b.total}</div>
      <div class="book-progress"><span style="width:${p}%"></span></div>
      <button class="cover-upload-btn" onclick="chooseNovelCover(${b.id})">${cover?"更换封面":"上传封面"}</button>
      <div class="cover-note">支持 JPG、PNG、WEBP；首页与书架会同步更新。</div>
      <div class="toolbar">${cover?`<button class="btn" onclick="removeNovelCover(${b.id})">移除封面</button>`:""}<button class="btn" onclick="deleteNovelBook(${b.id})">删除</button></div>
    </div>`;
  }).join(""):'<div class="small">书架还是空的。</div>';
}


function normaliseLearningWorldData(){
  data.settings=data.settings||{};
  if(!data.settings.siteTitle || ["Little Explorer Learning World","Little Explorer Learning World"].includes(data.settings.siteTitle)) data.settings.siteTitle="晞白的学习世界";
  if(!data.settings.plannerTitle || ["Weekly 学习中 Plan","Weekly Study Plan","Weekly Plan"].includes(data.settings.plannerTitle)) data.settings.plannerTitle="本周学习计划";
  if(!data.settings.studentName)data.settings.studentName="Leo";
  if(!data.settings.weeklyReadingGoal)data.settings.weeklyReadingGoal=5;

  ["week","tasks","curriculum","exams","novelBooks","chapters","vocab","wonderParts","wonderTitles"].forEach(k=>{
    if(!Array.isArray(data[k]))data[k]=[];
  });

  data.chapters=data.chapters.map(c=>({
    ...c,
    minutes:Number(c.minutes ?? c["分钟"] ?? 40),
    name:c.name||"Chapter",
    date:c.date||localISODate()
  }));

  data.novelBooks=data.novelBooks.map(b=>({
    ...b,
    current:Number(b.current||0),
    total:Number(b.total||1),
    status:b.status||"reading",
    cover:b.cover||(b.title==="Wonder"?"assets/wonder_cover_original.svg":"")
  }));

  if(!data.novelBooks.length){
    data.novelBooks=[{id:201,title:"Wonder",author:"R. J. Palacio",current:0,total:121,status:"reading"}];
  }
  saveData();
}


let pendingMistakePhoto="";
let mistakeAnalysis={extractedText:"",summary:"",questionType:"",suggestedTopic:"",suggestedReason:""};
function awardPoints(amount,key,label){
  data.rewards=data.rewards||clone(defaults.rewards);data.rewards.ledger=data.rewards.ledger||[];
  if(key&&data.rewards.ledger.some(x=>x.key===key))return false;
  data.rewards.points=(Number(data.rewards.points)||0)+amount;
  data.rewards.ledger.push({id:Date.now()+Math.random(),key:key||`manual:${Date.now()}`,amount,label,date:localISODate()});
  data.rewards.activityDates=[...new Set([...(data.rewards.activityDates||[]),localISODate()])];
  showRewardToast(`+${amount}  ${label||"Explorer Energy"}`);return true;
}
function showRewardToast(text){const old=document.querySelector('.reward-toast');if(old)old.remove();const el=document.createElement('div');el.className='reward-toast';el.textContent=text;document.body.appendChild(el);setTimeout(()=>el.remove(),2500)}
function datePlus(dateStr,days){const d=new Date((dateStr||localISODate())+'T12:00:00');d.setDate(d.getDate()+days);return localISODate(d)}
function streakDays(){const set=new Set(data.rewards?.activityDates||[]);let n=0,d=new Date();while(set.has(localISODate(d))){n++;d.setDate(d.getDate()-1)}return n}
function levelInfo(){const points=Number(data.rewards?.points)||0, size=100, level=Math.floor(points/size)+1, within=points%size;return {points,level,within,pct:within,next:level*size}}
function compressMistakePhoto(file){return new Promise((resolve,reject)=>{if(!file)return resolve('');const r=new FileReader();r.onerror=reject;r.onload=()=>{const img=new Image();img.onerror=reject;img.onload=()=>{const max=1200,scale=Math.min(1,max/Math.max(img.width,img.height));const c=document.createElement('canvas');c.width=Math.round(img.width*scale);c.height=Math.round(img.height*scale);const ctx=c.getContext('2d');ctx.fillStyle='#fff';ctx.fillRect(0,0,c.width,c.height);ctx.drawImage(img,0,0,c.width,c.height);resolve(c.toDataURL('image/jpeg',.82))};img.src=r.result};r.readAsDataURL(file)})}
function loadTesseract(){return new Promise((resolve,reject)=>{if(window.Tesseract)return resolve(window.Tesseract);const existing=document.querySelector('script[data-tesseract]');if(existing){existing.addEventListener('load',()=>resolve(window.Tesseract));existing.addEventListener('error',reject);return}const sc=document.createElement('script');sc.src='https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js';sc.dataset.tesseract='1';sc.onload=()=>resolve(window.Tesseract);sc.onerror=()=>reject(new Error('OCR library unavailable'));document.head.appendChild(sc)})}
function cleanOcrText(text){return String(text||'').replace(/\r/g,'').replace(/[ \t]+/g,' ').replace(/\n{3,}/g,'\n\n').trim()}
function inferMistakeAnalysis(text,subject){
 const t=(text||'').toLowerCase();let questionType='综合题',topic='待确认',reason='不会知识点';
 if(subject==='Math'){
   if(/fraction|numerator|denominator|分数|\d+\s*\/\s*\d+/.test(t)){questionType='分数题';topic='Fractions'}
   else if(/perimeter|周长/.test(t)){questionType='周长题';topic='Perimeter'}
   else if(/area|面积/.test(t)){questionType='面积题';topic='Area'}
   else if(/ratio|比例/.test(t)){questionType='比例题';topic='Ratio'}
   else if(/how many|altogether|left|remaining|一共|剩下|还剩/.test(t)){questionType='应用题';topic='Word Problem'}
   else if(/[+×x*÷\/-]/.test(t)){questionType='计算题';topic='Calculation'}
   reason=/show your working|steps|方法|列式/.test(t)?'方法选择错误':(/[+×x*÷\/-]/.test(t)?'计算错误':'不会知识点');
 } else if(subject==='English'){
   if(/choose|circle|underline|correct answer/.test(t)){questionType='选择／语法题';topic='Grammar'}
   else if(/passage|comprehension|according to/.test(t)){questionType='阅读理解';topic='Comprehension'}
   else if(/write|sentence|composition/.test(t)){questionType='写作／句子表达';topic='Writing'}
   reason=questionType.includes('写作')?'表达不完整':(/not|except|best/.test(t)?'看错题目':'不会知识点');
 } else if(subject==='Science'){
   if(/explain|why|how/.test(t)){questionType='解释题';topic='Science Explanation';reason='表达不完整'}
   else if(/identify|name|state/.test(t)){questionType='识别／知识题';topic='Science Concepts'}
   else if(/diagram|figure|图/.test(t)){questionType='看图题';topic='Diagram Skills';reason='看错题目'}
 } else if(subject==='Chinese'){
   if(/阅读|短文|根据/.test(text)){questionType='阅读理解';topic='阅读理解'}
   else if(/造句|写话|作文/.test(text)){questionType='写作表达';topic='写作';reason='表达不完整'}
   else if(/选择|填空/.test(text)){questionType='选择／填空题';topic='词语与语法'}
 }
 const first=(text||'').split(/\n|[。！？!?]/).map(x=>x.trim()).find(Boolean)||'';
 const summary=first.length>100?first.slice(0,100)+'…':first;
 return {extractedText:text,summary:summary||`${subject} ${questionType}`,questionType,suggestedTopic:topic,suggestedReason:reason};
}
function renderMistakeAnalysis(){
 const a=mistakeAnalysis;$('mistakeExtractedText').value=a.extractedText||'';$('mistakeSummary').value=a.summary||'';
 $('mistakeAnalysisChips').innerHTML=a.questionType?`<span class="tag">题型：${esc(a.questionType)}</span><span class="tag">知识点建议：${esc(a.suggestedTopic)}</span><span class="tag warn">错误类型建议：${esc(a.suggestedReason)}</span>`:'';
 if(a.suggestedTopic&&!$('mistakeTopic').value.trim())$('mistakeTopic').value=a.suggestedTopic;
 if(a.suggestedReason)$('mistakeReason').value=a.suggestedReason;
 if(a.summary&&!$('mistakeQuestion').value.trim())$('mistakeQuestion').value=a.summary;
}
async function analyzeMistakePhoto(){
 const status=$('mistakeOcrStatus');if(!pendingMistakePhoto){status.textContent='请先上传一张错题照片。';return}
 status.innerHTML='<span class="ocr-spinner"></span>正在识别照片文字；首次使用需要联网载入识别组件……';
 try{
   const T=await loadTesseract();
   const result=await T.recognize(pendingMistakePhoto,'eng+chi_sim',{logger:m=>{if(m.status==='recognizing text')status.innerHTML=`<span class="ocr-spinner"></span>正在识别 ${Math.round((m.progress||0)*100)}%`}});
   const text=cleanOcrText(result?.data?.text||'');
   if(!text)throw new Error('No text detected');
   mistakeAnalysis=inferMistakeAnalysis(text,$('mistakeSubject').value);renderMistakeAnalysis();
   status.textContent='识别完成。请核对文字、题型和错误类型建议后再保存。';
 }catch(err){status.textContent='自动识别未成功。可能是网络、照片清晰度或手写文字导致；可以直接手动填写，不影响保存。'}
}
const photoInput=document.getElementById('mistakePhoto');if(photoInput)photoInput.addEventListener('change',async e=>{try{pendingMistakePhoto=await compressMistakePhoto(e.target.files[0]);$('mistakePhotoPreview').innerHTML=pendingMistakePhoto?'<img class="mistake-photo" src="'+pendingMistakePhoto+'"><b>照片已准备好</b>':'';mistakeAnalysis={extractedText:'',summary:'',questionType:'',suggestedTopic:'',suggestedReason:''};renderMistakeAnalysis();setTimeout(analyzeMistakePhoto,100)}catch(err){alert('照片处理失败，请换一张较小或更清晰的图片。')}});
function addMistake(){
 const extracted=$('mistakeExtractedText')?.value.trim()||'',summary=$('mistakeSummary')?.value.trim()||'';
 const q=$('mistakeQuestion').value.trim()||summary,topic=$('mistakeTopic').value.trim(),correction=$('mistakeCorrection').value.trim();if(!q&&!topic&&!pendingMistakePhoto)return alert('请填写题目摘要、知识点，或上传照片。');const now=localISODate(),id=Date.now();data.mistakes.push({id,subject:$('mistakeSubject').value,topic,question:q,reason:$('mistakeReason').value,correction,answerDraft:'',photo:pendingMistakePhoto,created:now,status:correction?'learning':'new',reviewCount:0,successCount:0,nextReview:correction?now:'',history:[],extractedText:extracted,summary:summary,questionType:mistakeAnalysis.questionType||''});awardPoints(1,`mistake-add:${id}`,'发现并收录错题');pendingMistakePhoto='';mistakeAnalysis={extractedText:'',summary:'',questionType:'',suggestedTopic:'',suggestedReason:''};['mistakeTopic','mistakeQuestion','mistakeCorrection','mistakeExtractedText','mistakeSummary'].forEach(id=>{if($(id))$(id).value=''});$('mistakePhoto').value='';$('mistakePhotoPreview').innerHTML='';$('mistakeAnalysisChips').innerHTML='';$('mistakeOcrStatus').textContent='上传照片后会自动尝试提取文字并给出题型、知识点和错误类型建议。';if($('mistakeFilter'))$('mistakeFilter').value='new';saveData();renderAll();setTimeout(()=>openCorrectionWorkspace(id),80)}
function reviewMistake(id,result){const m=data.mistakes.find(x=>x.id===id);if(!m)return;const today=localISODate();m.history=m.history||[];m.history.push({date:today,result});m.reviewCount=(m.reviewCount||0)+1;if(result==='again'){m.successCount=0;m.status='learning';m.nextReview=datePlus(today,1)}else if(result==='close'){m.successCount=Math.max(0,m.successCount||0);m.status='learning';m.nextReview=datePlus(today,3);awardPoints(3,`review:${id}:${today}:close`,'完成错题回顾')}else{m.successCount=(m.successCount||0)+1;awardPoints(m.successCount>=2?10:5,`review:${id}:${today}:mastered`,`错题${m.successCount>=2?'毕业':'独立做对'}`);if(m.successCount>=2){m.status='mastered';m.nextReview=''}else{m.status='learning';m.nextReview=datePlus(today,7)}}saveData();renderAll()}
function markCorrected(id){openCorrectionWorkspace(id)}

let activeCorrectionId=null;
function saveAnswerDraft(id,value){const m=data.mistakes.find(x=>x.id===id);if(!m)return;m.answerDraft=value;saveData()}
function openCorrectionWorkspace(id){const m=data.mistakes.find(x=>x.id===id);if(!m)return;activeCorrectionId=id;const body=$('correctionWorkspaceBody');body.innerHTML=`<div class="pending-banner">这道错题已进入待订正清单。先独立重做，再总结正确方法。</div><div class="correction-grid"><div class="correction-question-pane"><div class="correction-meta"><span class="tag">${esc(m.subject)}</span><span class="tag">${esc(m.topic||'未命名知识点')}</span>${m.questionType?`<span class="tag">${esc(m.questionType)}</span>`:''}<span class="tag warn">${esc(m.reason)}</span></div>${m.photo?`<img src="${m.photo}" alt="错题图片">`:''}${m.question?`<p><b>题目摘要：</b>${esc(m.question)}</p>`:''}${m.extractedText?`<details><summary><b>查看识别文字</b></summary><p style="white-space:pre-wrap">${esc(m.extractedText)}</p></details>`:''}</div><div><label><b>我的重新作答</b><textarea id="workspaceAnswer" class="answer-sheet" placeholder="在这里重新作答，写步骤、算式或完整句子……">${esc(m.answerDraft||'')}</textarea></label><label><b>正确方法 / 错误提醒</b><textarea id="workspaceCorrection" rows="5" placeholder="例如：先圈关键词；统一单位；答案要写完整句……">${esc(m.correction||'')}</textarea></label><div class="correction-actions"><button class="btn" onclick="closeCorrectionWorkspace()">取消 / 关闭</button><button class="btn" onclick="saveCorrectionWorkspace(false)">保存草稿</button><button class="btn primary" onclick="saveCorrectionWorkspace(true)">完成订正 +3 </button></div></div></div>`;$('correctionModal').classList.add('show');document.body.style.overflow='hidden'}
function closeCorrectionWorkspace(){const modal=$('correctionModal');if(modal)modal.classList.remove('show');document.body.style.overflow='';activeCorrectionId=null}
function saveCorrectionWorkspace(complete){const m=data.mistakes.find(x=>x.id===activeCorrectionId);if(!m)return;const answer=$('workspaceAnswer').value.trim(),correction=$('workspaceCorrection').value.trim();m.answerDraft=answer;m.correction=correction;if(complete){if(!answer)return alert('请先完成“我的重新作答”。');if(!correction)return alert('请写一句正确方法或下次提醒。');m.status='learning';m.nextReview=localISODate();m.correctedAt=localISODate();awardPoints(3,`correct:${m.id}`,'完成错题订正')}saveData();renderAll();closeCorrectionWorkspace()}

function deleteMistake(id){if(confirm('删除这道错题？')){data.mistakes=data.mistakes.filter(x=>x.id!==id);saveData();renderAll()}}
function renderRewards(){if(!$('energyTotal'))return;const li=levelInfo(), mastered=data.mistakes.filter(x=>x.status==='mastered').length;$('energyTop').textContent=li.points;$('energyTotal').textContent=li.points;$('energyLevel').textContent=li.level;$('energyStreak').textContent=streakDays();$('energyGraduated').textContent=mastered;$('levelPct').textContent=li.pct+'%';$('energyFill').style.width=li.pct+'%';$('levelHint').textContent=`距离 Level ${li.level+1} 还差 ${100-li.within} 点能量`;
 const badges=[['第一步','获得 10 点能量',li.points>=10],['错题猎人','收录 5 道错题',data.mistakes.length>=5],['复习勇士','完成 10 次复习',data.mistakes.reduce((a,m)=>a+(m.reviewCount||0),0)>=10],['知识守护者','让 10 道错题毕业',mastered>=10]];$('badgeGrid').innerHTML=badges.map(b=>`<div class="badge-card ${b[2]?'':'locked'}"><strong>${b[2]?'':''} ${b[0]}</strong><span class="small">${b[1]}</span></div>`).join('')}
function renderMistakes(){if(!$('mistakeList'))return;renderRewards();const today=localISODate(),all=data.mistakes||[],due=all.filter(m=>m.status!=='new'&&m.status!=='mastered'&&m.nextReview&&m.nextReview<=today);$('mistakeDue').textContent=due.length;$('mistakeNew').textContent=all.filter(m=>m.status==='new').length;$('mistakeLearning').textContent=all.filter(m=>m.status==='learning').length;$('mistakeMastered').textContent=all.filter(m=>m.status==='mastered').length;const f=$('mistakeFilter')?.value||'due';let list=f==='due'?due:f==='all'?all:all.filter(m=>m.status===f);list=[...list].sort((a,b)=>(a.nextReview||a.created||'').localeCompare(b.nextReview||b.created||''));$('mistakeList').innerHTML=list.length?list.map(m=>{const isDue=m.status==='learning'&&m.nextReview<=today;const quick=m.status==='new'?`<div class="correction-quick"><b>快速重新作答</b><textarea placeholder="可以直接在这里写答案，也可以进入完整订正界面" oninput="saveAnswerDraft(${m.id},this.value)">${esc(m.answerDraft||'')}</textarea><div class="correction-actions"><button class="btn primary" onclick="openCorrectionWorkspace(${m.id})">进入订正界面</button><button class="btn" onclick="saveAnswerDraft(${m.id},this.closest('.correction-quick').querySelector('textarea').value)">保存草稿</button></div></div>`:'';return `<div class="mistake-card ${isDue?'due':''}"><div class="mistake-head"><div><b>${esc(m.subject)} · ${esc(m.topic||'未命名知识点')}</b><div class="small">收录 ${esc(m.created)}${m.nextReview?' · 下次复习 '+esc(m.nextReview):''}</div></div><span class="tag ${isDue?'warn':''}">${m.status==='new'?'待订正':m.status==='mastered'?'已掌握':isDue?'今天复习':'复习中'}</span></div><div class="mistake-tags"><span class="tag">${esc(m.reason)}</span><span class="tag">已复习 ${m.reviewCount||0} 次</span></div>${m.photo?`<img class="mistake-photo" src="${m.photo}">`:''}${m.question?`<p><b>题目：</b>${esc(m.question)}</p>`:''}${quick}<p><b>正确方法：</b>${esc(m.correction||'尚未填写')}</p>${m.status==='new'?`<button class="btn primary" onclick="openCorrectionWorkspace(${m.id})">开始订正 +3 </button>`:m.status==='mastered'?`<button class="btn" onclick="reviewMistake(${m.id},'again')">重新加入复习</button>`:`<div class="review-buttons"><button class="btn" onclick="reviewMistake(${m.id},'again')">还不会</button><button class="btn" onclick="reviewMistake(${m.id},'close')">有点会</button><button class="btn primary" onclick="reviewMistake(${m.id},'mastered')">独立做对</button></div>`}<div class="toolbar" style="margin-top:8px"><button class="btn" onclick="openCorrectionWorkspace(${m.id})">${m.status==='new'?'进入订正':'查看 / 编辑订正'}</button><button class="btn" onclick="deleteMistake(${m.id})">删除</button></div></div>`}).join(''):'<div class="empty-lab">这里暂时没有符合条件的错题。上传错题后，会自动进入“待订正”清单。</div>'}

function renderAll(){
  renderDashboard();
  renderNovel();
  renderWeek();
  renderTasks();
  renderCurriculum();
  renderExams();
  if(typeof renderStats==="function")renderStats();
  if(typeof renderProgress==="function")renderProgress();
  renderSettings();
  renderMistakes();
}
normaliseLearningWorldData();loadTheme();installDictionaryControls();
renderAll();document.body.classList.add("home-mode");document.body.classList.remove("week-mode");

window.addEventListener("error",function(e){
  let box=document.getElementById("runtimeNotice");
  if(!box){
    box=document.createElement("div");
    box.id="runtimeNotice";
    box.className="runtime-notice";
    document.body.appendChild(box);
  }
  box.style.display="block";
  box.textContent="页面遇到一个运行问题，请导出数据后重新载入。错误：" + (e.message||"Unknown error");
});


window.addEventListener('DOMContentLoaded',()=>{
  renderDriveOriginInfo();
});

document.addEventListener('keydown',e=>{if(e.key==='Escape'&&$('correctionModal')?.classList.contains('show'))closeCorrectionWorkspace()});


(function(){
  function bindWeekMouseScroll(forceSync=false){
    const grid=document.getElementById('weekGrid');
    const range=document.getElementById('weekScrollRange');
    if(!grid||!range)return;
    const syncRange=()=>{
      const max=Math.max(0,grid.scrollWidth-grid.clientWidth);
      range.max='1000';
      range.value=max?Math.round(grid.scrollLeft/max*1000):0;
      range.disabled=false;
      range.setAttribute('aria-valuetext',max?'拖动查看本周全部计划':'当前内容已全部显示');
    };
    if(!range.dataset.bound){
      range.dataset.bound='1';
      range.addEventListener('input',()=>{
        const max=Math.max(0,grid.scrollWidth-grid.clientWidth);
        grid.scrollLeft=max*(Number(range.value)/1000);
      });
      grid.addEventListener('scroll',syncRange,{passive:true});
      window.addEventListener('resize',()=>setTimeout(syncRange,60));
      new MutationObserver(()=>setTimeout(syncRange,30)).observe(grid,{childList:true,subtree:true});
    }
    if(forceSync){setTimeout(syncRange,60);setTimeout(syncRange,220);}
    else setTimeout(syncRange,100);
  }
  window.refreshWeekMouseScroll=()=>bindWeekMouseScroll(true);
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>bindWeekMouseScroll(false));else bindWeekMouseScroll(false);
  document.addEventListener('click',e=>{if(e.target.closest('[data-page="week"]'))bindWeekMouseScroll(true)});
})();
