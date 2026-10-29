document.addEventListener('DOMContentLoaded',async()=>{
  const root=document.querySelector('[data-medical-research]');
  if(!root)return;
  const lang=['ar','en','fa'].includes(document.documentElement.lang)?document.documentElement.lang:'en';
  const tr={
    ar:{search:'البحث في السجل',allPrograms:'جميع البرامج',allTypes:'جميع أنواع السجلات',count:'السجلات المعروضة',source:'المصدر الأصلي',doi:'المعرّف الرقمي',supervisor:'المشرف',authors:'المؤلفون',contributor:'الباحث المرتبط بجامعة آزال',empty:'لا توجد نتائج مطابقة',load:'تعذر تحميل السجل',programs:{anesthesia:'تكنولوجيا التخدير',midwifery:'القبالة',nursing:'التمريض التخصصي'},types:{'repository-record':'سجل بحث في مستودع الجامعة','graduation-research':'بحث تخرج موثق بخبر جامعي','journal-article':'مقال منشور في دورية علمية'}},
    en:{search:'Search medical research',allPrograms:'All programs',allTypes:'All record types',count:'Displayed records',source:'Original source',doi:'DOI',supervisor:'Supervisor',authors:'Authors',contributor:'AUHD-affiliated contributor',empty:'No matching records',load:'Unable to load the research registry',programs:{anesthesia:'Anesthesia Technology',midwifery:'Midwifery',nursing:'Specialized Nursing'},types:{'repository-record':'University repository record','graduation-research':'Graduation research in university news','journal-article':'Published journal article'}},
    fa:{search:'جست‌وجو در پژوهش‌ها',allPrograms:'همه رشته‌ها',allTypes:'همه انواع مدارک',count:'تعداد مدارک نمایشی',source:'منبع اصلی',doi:'شناسه DOI',supervisor:'استاد راهنما',authors:'نویسندگان',contributor:'پژوهشگر وابسته به دانشگاه آزال',empty:'موردی یافت نشد',load:'بارگذاری فهرست پژوهش‌ها ناموفق بود',programs:{anesthesia:'فناوری بیهوشی',midwifery:'مامایی',nursing:'پرستاری تخصصی'},types:{'repository-record':'مدرک مخزن دانشگاه','graduation-research':'پژوهش فارغ‌التحصیلی در خبر دانشگاه','journal-article':'مقاله منتشرشده در مجله علمی'}}
  }[lang];
  let items;
  try{const response=await fetch((lang==='ar'?'./':'../')+'data/medical-research-2026.json');if(!response.ok)throw Error('HTTP '+response.status);items=(await response.json()).items||[]}
  catch(e){root.textContent=tr.load;return}
  const tools=document.createElement('div');tools.className='portal-grid';
  const searchWrap=document.createElement('div'),programWrap=document.createElement('div'),typeWrap=document.createElement('div');
  const searchLabel=document.createElement('label');searchLabel.textContent=tr.search;
  const input=document.createElement('input');input.type='search';input.className='portal-search';input.placeholder=tr.search;input.id='medical-research-search';searchLabel.htmlFor=input.id;searchWrap.append(searchLabel,input);
  const program=document.createElement('select');program.className='portal-search';program.id='medical-research-program';
  const pLabel=document.createElement('label');pLabel.textContent=tr.allPrograms;pLabel.htmlFor=program.id;
  for(const [value,label] of [['',tr.allPrograms],...Object.entries(tr.programs)]){const option=document.createElement('option');option.value=value;option.textContent=label;program.append(option)}
  programWrap.append(pLabel,program);
  const type=document.createElement('select');type.className='portal-search';type.id='medical-research-type';
  const tLabel=document.createElement('label');tLabel.textContent=tr.allTypes;tLabel.htmlFor=type.id;
  for(const [value,label] of [['',tr.allTypes],...Object.entries(tr.types)]){const option=document.createElement('option');option.value=value;option.textContent=label;type.append(option)}
  typeWrap.append(tLabel,type);tools.append(searchWrap,programWrap,typeWrap);
  const count=document.createElement('p');count.setAttribute('aria-live','polite');
  const results=document.createElement('div');results.setAttribute('aria-live','polite');
  root.append(tools,count,results);
  function render(){
    const q=input.value.trim().toLocaleLowerCase();results.replaceChildren();
    const filtered=items.filter(x=>(!program.value||x.program===program.value)&&(!type.value||x.recordType===type.value)&&[x.titleAr,x.titleEn,x.authors,x.supervisorAr,x.auhdContributor,x.journal].filter(Boolean).join(' ').toLocaleLowerCase().includes(q));
    count.textContent=tr.count+': '+filtered.length+' / '+items.length;
    for(const x of filtered){
      const card=document.createElement('article');card.className='portal-item';
      const heading=document.createElement('h3');heading.textContent=lang==='ar'?x.titleAr:x.titleEn;
      const meta=document.createElement('small');meta.textContent=tr.programs[x.program]+' · '+tr.types[x.recordType]+' · '+x.year;
      card.append(heading,meta);
      if(x.supervisorAr){const p=document.createElement('p');p.textContent=tr.supervisor+': '+x.supervisorAr;card.append(p)}
      if(x.auhdContributor){const p=document.createElement('p');p.textContent=tr.contributor+': '+x.auhdContributor;card.append(p)}
      if(x.authors){const p=document.createElement('p');p.textContent=tr.authors+': '+x.authors;card.append(p)}
      const links=document.createElement('p');
      const a=document.createElement('a');a.href=x.sourceUrl;a.target='_blank';a.rel='noopener noreferrer';a.textContent=tr.source;links.append(a);
      if(x.doi){const doi=document.createElement('a');doi.href='https://doi.org/'+encodeURIComponent(x.doi).replace(/%2F/g,'/');doi.target='_blank';doi.rel='noopener noreferrer';doi.textContent=tr.doi+': '+x.doi;doi.style.marginInlineStart='15px';links.append(doi)}
      card.append(links);results.append(card)
    }
    if(!filtered.length)results.textContent=tr.empty;
  }
  for(const control of [input,program,type])control.addEventListener(control===input?'input':'change',render);
  render();
});
