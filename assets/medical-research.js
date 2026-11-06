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
  const labels = {
    ar: ['البرنامج','السنة','جميع السنوات','صفحة الناشر','النسخة المتاحة في Zenodo','الانتساب كما نُشر','المجلة','ترخيص الناشر','مقالات الدوريات الموثقة','مشروعات التخرج وسجلات المستودع الجامعي','مجتمع جامعة آزال على Zenodo'],
    en: ['Program','Year','All years','Publisher page','Available copy on Zenodo','Published affiliation','Journal','Publisher licence','Verified journal articles','Graduation projects and university repository records','AUHD Zenodo community'],
    fa: ['رشته','سال','همه سال‌ها','صفحه ناشر','نسخه موجود در Zenodo','وابستگی منتشرشده','مجله','مجوز ناشر','مقالات تأییدشده','پروژه‌های دانشجویی و مدارک مخزن دانشگاه','انجمن دانشگاه آزال در Zenodo']
  }[lang];
  const [programLabel, yearLabel, allYears, publisher, copy, affiliation, journal, licence, publishedTitle, projectsTitle, community] = labels;

  function element(tag, text, className) {
    const node = document.createElement(tag);
    if (text) node.textContent = text;
    if (className) node.className = className;
    return node;
  }

  function link(label, url) {
    const node = element('a', label);
    node.href = url;
    node.target = '_blank';
    node.rel = 'noopener noreferrer';
    return node;
  }

  function searchKey(item) {
    const title = item.titleEn || item.titleAr || '';
    return [title, item.authors || '', item.year].map(value => String(value).normalize('NFKC').trim().replace(/\s+/g, ' ').toLowerCase()).join('|');
  }

  const seenDOIs = new Set();
  const seenWorks = new Map();
  const articles = items.filter(item => item.recordType === 'journal-article').sort((a, b) => Number(Boolean(b.doi)) - Number(Boolean(a.doi))).filter(item => {
    const doi = (item.doi || '').trim().toLowerCase().replace(/^https?:\/\/(?:dx\.)?doi\.org\//, '');
    const key = searchKey(item);
    if ((doi && seenDOIs.has(doi)) || (seenWorks.has(key) && (!doi || !seenWorks.get(key)))) return false;
    if (doi) seenDOIs.add(doi);
    seenWorks.set(key, Boolean(doi));
    return true;
  });
  const projects = items.filter(item => item.recordType !== 'journal-article');

  function createCard(item) {
    const isArticle = item.recordType === 'journal-article';
    const card = element('article', '', 'portal-item');
    const title = element('h4', isArticle ? item.titleEn : lang === 'ar' ? item.titleAr : item.titleEn);
    if (isArticle) { title.lang = 'en'; title.dir = 'auto'; }
    card.append(title, element('small', [tr.programs[item.program], tr.types[item.recordType], item.year].filter(Boolean).join(' · ')));
    const details = [[tr.supervisor,item.supervisorAr], [tr.authors,item.authors], [tr.contributor,item.auhdContributor], [journal,item.journal], [affiliation,item.affiliationEvidence]];
    for (const [label, value] of details) {
      if (value) { const line = element('p', label + ': ' + value); line.dir = 'auto'; card.append(line); }
    }
    const links = element('div', '', 'portal-links');
    if (item.sourceUrl) links.append(link(isArticle ? publisher : tr.source, item.sourceUrl));
    if (item.doi) links.append(link(tr.doi + ': ' + item.doi, 'https://doi.org/' + item.doi));
    if (item.license && item.licenseUrl) links.append(link(licence + ' · ' + item.license, item.licenseUrl));
    if (item.zenodoUrl && /^https:\/\/zenodo\.org\/records\/\d+\/?$/.test(item.zenodoUrl)) links.append(link(copy, item.zenodoUrl));
    card.append(links);
    return card;
  }

  function mount(collection, heading, includeCommunity) {
    const section = element('section');
    const filters = element('div', '', 'portal-grid');
    function addField(label, control, suffix) {
      const field = element('div');
      const caption = element('label', label);
      control.id = 'medical-research-' + suffix;
      caption.htmlFor = control.id;
      field.append(caption, control);
      filters.append(field);
    }
    function select(options) {
      const control = element('select', '', 'portal-search');
      for (const [value, title] of options) {
        const option = element('option', title);
        option.value = value;
        control.append(option);
      }
      return control;
    }
    const suffix = includeCommunity ? 'articles' : 'projects';
    const query = element('input', '', 'portal-search');
    query.type = 'search';
    const program = select([['', tr.allPrograms], ...Object.entries(tr.programs)]);
    const years = [...new Set(collection.map(item => item.year).filter(Boolean))].sort((a, b) => b-a);
    const year = select([['', allYears], ...years.map(value => [String(value), String(value)])]);
    addField(tr.search, query, suffix + '-search');
    addField(programLabel, program, suffix + '-program');
    addField(yearLabel, year, suffix + '-year');
    const count = element('p');
    count.setAttribute('aria-live','polite');
    const results = element('div');
    section.append(element('h3', heading));
    if (includeCommunity) {
      const communityLine = element('p');
      communityLine.append(link(community, 'https://zenodo.org/communities/auhd-research/about'));
      section.append(communityLine);
    }
    section.append(filters, count, results);
    root.append(section);

    function render() {
      const term = query.value.trim().toLocaleLowerCase();
      const filtered = collection.filter(item =>
        (!program.value || item.program === program.value || item.relatedPrograms?.includes(program.value)) &&
        (!year.value || String(item.year) === year.value) &&
        [item.titleAr,item.titleEn,item.authors,item.doi,item.journal,item.auhdContributor,item.supervisorAr].filter(Boolean).join(' ').toLocaleLowerCase().includes(term)
      );
      count.textContent = tr.count + ': ' + filtered.length + ' / ' + collection.length;
      if (filtered.length) results.replaceChildren(...filtered.map(createCard));
      else results.textContent = tr.empty;
    }
    query.addEventListener('input', render);
    program.addEventListener('change', render);
    year.addEventListener('change', render);
    render();
  }

  mount(articles, publishedTitle, true);
  mount(projects, projectsTitle, false);
});
