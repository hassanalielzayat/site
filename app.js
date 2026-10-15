const PILLARS_DATA = [
      {
        badge: '01 / اكتشاف السوق',
        title: '01 / اكتشاف (Discover)',
        en: 'Market & Business Discovery',
        desc: 'فهم عميق لطبيعة الشركة، ديناميكيات السوق، سلوك العملاء، والمنافسين، وربطها بأهداف العمل التجارية الحقيقية قبل اتخاذ أي قرار.'
      },
      {
        badge: '02 / تشخيص الفجوات',
        title: '02 / تشخيص (Diagnose)',
        en: 'Strategic Diagnostics & Gap Analysis',
        desc: 'تحديد نقاط القوة، الفجوات التسويقية والبيعية، العوائق التي تمنع التحويل، وأبرز فرص النمو الكامنة في السوق.'
      },
      {
        badge: '03 / تحديد الاتجاه',
        title: '03 / تحديد الاتجاه (Direction)',
        en: 'Positioning & Value Direction',
        desc: 'صياغة التموضع التنافسي، تحديد الجمهور المستهدف بدقة، وصياغة عرض القيمة (Value Proposition) والرسائل الأساسية.'
      },
      {
        badge: '04 / تصميم النظام',
        title: '04 / تصميم النظام (System Design)',
        en: 'Integrated Marketing Architecture',
        desc: 'ربط القنوات التسويقية، محاور المحتوى، هيكلة العروض، مفاهيم الحملات، ورحلة العميل في منظومة واحدة متناغمة.'
      },
      {
        badge: '05 / التنفيذ المتكامل',
        title: '05 / تنفيذ (Execution)',
        en: 'Aligned Strategic Execution',
        desc: 'تحويل التوجه الاستراتيجي إلى خطوات عملية ومهام تنفيذية واضحة بالتعاون مع فريق العمل الداخلي أو عبر شركة Sun Media.'
      },
      {
        badge: '06 / القياس والتحسين',
        title: '06 / قياس وتحسين (Optimize)',
        en: 'Data-Driven Growth Optimization',
        desc: 'قراءة استجابة السوق الفورية، التعلم من البيانات ومؤشرات الأداء (KPIs)، وتعديل المسار لتعظيم العائد على الاستثمار.'
      }
    ];

    const SERVICES_DETAILS = [
      {
        code: '01 / CONSULTING',
        title: 'استشارات التسويق الاستراتيجي',
        subtitle: 'تشخيص شامل وخارطة طريق تنفيذية واضحة',
        problem: 'كثير من الشركات تنفق مبالغ كبيرة على الإعلانات وصناعة المحتوى دون معرفة السبب الحقيقي وراء ضعف المبيعات أو تذبذب النتائج.',
        solution: 'نقوم بفحص شامل لمنظومة العمل والتسويق، تحليل السوق والمنافسين، وتحديد التموضع والفرص الأكثر ربحية لوضع خطة عمل واضحة.',
        deliverables: [
          'تقرير التشخيص الاستراتيجي الشامل (Strategic Audit Report)',
          'تحليل الفجوات التسويقية والبيعية (Gap & Bottleneck Analysis)',
          'تحديد الشرائح الأكثر ربحية والتموضع التنافسي المقترح',
          'خارطة طريق تنفيذية بالأولويات لمدة 90 إلى 180 يوماً'
        ]
      },
      {
        code: '02 / BRAND STRATEGY',
        title: 'استراتيجية العلامة التجارية',
        subtitle: 'بناء علامة راسخة يسهل التعرف عليها والوثوق بها',
        problem: 'عندما تتشابه رسالتك مع جميع المنافسين في السوق، يضطر العميل للمقارنة بالسعر فقط وتفقد العلامة قيمتها ومكانتها.',
        solution: 'نبني تموضعاً فريداً للعلامة التجارية، ونصيغ عرض القيمة والرسائل الأساسية التي تخاطب احتياج العميل المباشر وتبني الثقة.',
        deliverables: [
          'وثيقة تموضع العلامة التجارية (Brand Positioning Statement)',
          'صياغة عرض القيمة الأساسي (Core Value Proposition)',
          'مصفوفة الرسائل التسويقية حسب شرائح العملاء (Messaging Framework)',
          'تحديد شخصية العلامة ونبرة الصوت والاتجاه التواصلي (Brand Tone & Direction)'
        ]
      },
      {
        code: '03 / MARKETING STRATEGY',
        title: 'استراتيجية التسويق الشاملة',
        subtitle: 'منظومة مترابطة تجمع القنوات والمحتوى والحملات',
        problem: 'النشر العشوائي وإطلاق حملات إعلانية منفصلة بدون رحلة عميل واضحة يؤدي إلى استنزاف الميزانية وضعف العائد.',
        solution: 'نضع استراتيجية تسويق متكاملة تربط الأهداف التجارية بالقنوات الأنسب، وتحدد اتجاه المحتوى والحملات ومؤشرات القياس.',
        deliverables: [
          'خطة القنوات التسويقية وتوزيع الميزانية (Channel & Media Strategy)',
          'استراتيجية ومحاور المحتوى الاستراتيجي (Content Pillars & Funnel)',
          'تصميم رحلة العميل من أول ظهور حتى الشراء والتكرار',
          'إطار مؤشرات الأداء الرئيسية (KPIs Dashboard Framework)'
        ]
      },
      {
        code: '04 / GROWTH STRATEGY',
        title: 'استراتيجية النمو وتطوير العروض',
        subtitle: 'تعظيم الاستحواذ والتحويل ومواءمة التسويق مع المبيعات',
        problem: 'وجود زيارات أو استفسارات كثيرة (Leads) دون تحولها إلى مبيعات فعلية بسبب ضعف العرض التجاري أو الفجوة بين التسويق والمبيعات.',
        solution: 'نعيد هندسة العروض التجارية والباقات، ونعالج نقاط التسرب في قمع المبيعات بالتكامل المباشر مع فريق المبيعات.',
        deliverables: [
          'هندسة وتطوير العروض التجارية والباقات (Offer Creation & Pricing Framing)',
          'خطة تحسين معدلات التحويل والاستحواذ (CRO & Acquisition Plan)',
          'بروتوكول مواءمة التسويق مع فريق المبيعات (Marketing-Sales SLA)',
          'خارطة طريق النمو المستدام والتوسع في الأسواق'
        ]
      }
    ];

    const CASE_STUDIES = [
      {
        id: 'salam',
        category: 'realestate',
        categoryLabel: 'التطوير العقاري',
        brand: 'سلام العقارية (SALAM PROPERTIES)',
        challenge: 'صياغة اتجاه تواصل أوضح لشركة عقارية يتوسع حضورها في أسواق متعددة.',
        strategy: 'تنظيم تواصل العلامة والمحتوى ومفاهيم الحملات لدعم حضور متماسك عبر الأسواق.',
        result: 'اتجاه تواصل ومحتوى وحملات أكثر ترابطًا يضمن اتساق تجربة العميل.',
        accent: 'amber'
      },
      {
        id: 'badrana',
        category: 'realestate',
        categoryLabel: 'الهندسة والتصميم والتنفيذ',
        brand: 'بدرانة (BADRANA)',
        challenge: 'بناء حضور متماسك لمكتب هندسي وتوضيح قيمة خدماته المتكاملة للعميل.',
        strategy: 'التموضع حول رحلة (التصميم ← الإشراف ← التنفيذ) مع استراتيجية للعلامة ورسائل ومحتوى متكامل.',
        result: 'اتجاه موحد للعلامة تحت شعار: "Creative Spaces. Trusted Quality. Since 2018."',
        accent: 'cyan'
      },
      {
        id: 'riviera',
        category: 'realestate',
        categoryLabel: 'العقارات',
        brand: 'ريفيرا العقارية (RIVIERA PROPERTIES)',
        challenge: 'تقديم هوية عقارية واضحة وسهلة التعرف ضمن سوق عقاري شديد التنافسية.',
        strategy: 'توحيد حضور العلامة ورسائلها الأساسية بما يبرز الثقة والارتباط بالموقع ونمط الحياة.',
        result: 'اتجاه بصري وتواصلي متماسك يدعم تقديم العلامة عبر كافة نقاط التواصل.',
        accent: 'amber'
      },
      {
        id: 'elkatan',
        category: 'retail',
        categoryLabel: 'المنسوجات والأقمشة',
        brand: 'القطن (ELKATAN)',
        challenge: 'إبراز شخصية العلامة وتسهيل التعرف عليها في سوق يعتمد على المنتج والتنوع.',
        strategy: 'تطوير حضور مميز للعلامة وربط مظهرها ورسائلها بتجربة المنتج الملموسة.',
        result: 'اتجاه هوية واتصال أكثر تماسكًا قابل للتطبيق على كافة مواد ومخرجات العلامة.',
        accent: 'emerald'
      },
      {
        id: 'eltamamy',
        category: 'retail',
        categoryLabel: 'الرعاية الصحية والصيدلة',
        brand: 'صيدليات التمامي (ELTAMAMY PHARMACY)',
        challenge: 'بناء تواصل يسهل التعرف على الصيدلية ويرسخ الثقة والقرب من المجتمع.',
        strategy: 'تنظيم الهوية والرسائل حول سهولة الوصول والخدمة الموثوقة واحتياجات العملاء اليومية.',
        result: 'إطار اتصال واضح ومتسق لدعم حضور العلامة عبر مختلف الفروع ونقاط التواصل.',
        accent: 'cyan'
      },
      {
        id: 'sunmedia',
        category: 'b2b',
        categoryLabel: 'الحلول التسويقية المتكاملة',
        brand: 'صن ميديا (Sun Media)',
        challenge: 'توضيح دور الشركة بما يتجاوز الانطباع التقليدي عن وكالة إعلانات.',
        strategy: 'ربط العلامة التجارية والتسويق وتطوير الأعمال ومواءمة التموضع واكتساب العملاء وهيكل الخدمات.',
        result: 'تموضع أوضح تحت مفهوم "Integrated Marketing Solutions" كشريك يبدأ بفهم احتياج العمل.',
        accent: 'purple'
      }
    ];

    function showToast(title, message) {
      const container = document.getElementById('toast-container');
      const titleEl = document.getElementById('toast-title');
      const msgEl = document.getElementById('toast-msg');
      titleEl.textContent = title;
      msgEl.textContent = message;
      container.classList.remove('hidden');
      setTimeout(() => {
        container.classList.add('hidden');
      }, 4000);
    }

    function openModalWithHTML(htmlContent) {
      const modal = document.getElementById('detail-modal');
      const body = document.getElementById('modal-body');
      body.innerHTML = htmlContent;
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }

    window.closeModal = function() {
      const modal = document.getElementById('detail-modal');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    };

    window.openServiceModal = function(index) {
      const s = SERVICES_DETAILS[index];
      if (!s) return;
      const listHtml = s.deliverables.map(d => `<li class="flex items-start gap-2"><span class="text-amber-400 font-bold">✓</span><span>${d}</span></li>`).join('');
      openModalWithHTML(`
        <div class="space-y-5">
          <span class="inline-block rounded-lg bg-amber-500/20 px-3 py-1 text-xs font-black text-amber-300 font-en">${s.code}</span>
          <div>
            <h3 class="text-2xl font-black text-white">${s.title}</h3>
            <p class="text-sm text-cyan-300 mt-1">${s.subtitle}</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="rounded-2xl bg-slate-950 p-4 border border-rose-500/20">
              <span class="text-xs font-bold text-rose-400 block mb-1">المشكلة الشائعة:</span>
              <p class="text-xs text-slate-300 leading-relaxed">${s.problem}</p>
            </div>
            <div class="rounded-2xl bg-slate-950 p-4 border border-emerald-500/20">
              <span class="text-xs font-bold text-emerald-400 block mb-1">الحل الاستراتيجي:</span>
              <p class="text-xs text-slate-300 leading-relaxed">${s.solution}</p>
            </div>
          </div>
          <div class="rounded-2xl bg-slate-950/90 p-5 border border-white/10 space-y-2.5">
            <h4 class="text-sm font-extrabold text-amber-400">المخرجات التفصيلية التي تتسلمها:</h4>
            <ul class="space-y-2 text-xs sm:text-sm text-slate-200">${listHtml}</ul>
          </div>
          <div class="pt-2 flex justify-end gap-3">
            <button type="button" onclick="selectServiceForContact('${s.title}'); closeModal();" class="rounded-xl bg-amber-500 px-5 py-2.5 text-xs sm:text-sm font-black text-slate-950 hover:brightness-110 transition">
              احجز هذه الخدمة الآن ←
            </button>
          </div>
        </div>
      `);
    };

    window.openCaseModal = function(caseId) {
      const c = CASE_STUDIES.find(item => item.id === caseId);
      if (!c) return;
      openModalWithHTML(`
        <div class="space-y-5">
          <span class="inline-block rounded-lg bg-cyan-500/20 px-3 py-1 text-xs font-bold text-cyan-300">${c.categoryLabel}</span>
          <h3 class="text-2xl font-black text-white">${c.brand}</h3>
          <div class="space-y-3">
            <div class="rounded-2xl bg-slate-950 p-4 border border-white/10">
              <span class="text-xs font-bold text-amber-400 block mb-1">01. التحدي الأساسي (The Challenge):</span>
              <p class="text-sm text-slate-200 leading-relaxed">${c.challenge}</p>
            </div>
            <div class="rounded-2xl bg-slate-950 p-4 border border-white/10">
              <span class="text-xs font-bold text-cyan-400 block mb-1">02. المعالجة الاستراتيجية (Strategic Approach):</span>
              <p class="text-sm text-slate-200 leading-relaxed">${c.strategy}</p>
            </div>
            <div class="rounded-2xl bg-slate-950 p-4 border border-emerald-500/30">
              <span class="text-xs font-bold text-emerald-400 block mb-1">03. النتيجة والأثر (The Outcome):</span>
              <p class="text-sm text-white font-bold leading-relaxed">${c.result}</p>
            </div>
          </div>
          <div class="pt-2 flex justify-end">
            <button type="button" onclick="selectServiceForContact('استشارة مشابهة لدراسة حالة: ${c.brand}'); closeModal();" class="rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 px-5 py-2.5 text-xs sm:text-sm font-black text-slate-950">
              اطلب استراتيجية مشابهة لقطاعك ←
            </button>
          </div>
        </div>
      `);
    };

    window.selectServiceForContact = function(serviceName) {
      const select = document.getElementById('client-service');
      if (select) {
        let found = false;
        for (let i = 0; i < select.options.length; i++) {
          if (select.options[i].value === serviceName) {
            select.selectedIndex = i;
            found = true;
            break;
          }
        }
        if (!found) {
          const opt = document.createElement('option');
          opt.value = serviceName;
          opt.textContent = serviceName;
          select.appendChild(opt);
          select.value = serviceName;
        }
      }
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      showToast('تم اختيار الخدمة', `تم تحديد "${serviceName}" في نموذج طلب الاستشارة.`);
    };

    window.selectPackageForContact = function(pkgName) {
      window.selectServiceForContact(pkgName);
    };

    window.selectModelForContact = function(modelName) {
      const select = document.getElementById('client-model');
      if (select) {
        select.value = modelName;
      }
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      showToast('تم اختيار نموذج التعاون', `تم تحديد "${modelName}" في نموذج التواصل.`);
    };

    function renderCaseStudies(filterKey) {
      const grid = document.getElementById('case-studies-grid');
      if (!grid) return;
      const filtered = filterKey === 'all' ? CASE_STUDIES : CASE_STUDIES.filter(c => c.category === filterKey);
      grid.innerHTML = filtered.map(c => `
        <div class="card-3d rounded-3xl p-6 flex flex-col justify-between">
          <div class="card-3d-content space-y-3.5">
            <div class="flex items-center justify-between">
              <span class="rounded-lg bg-amber-500/15 border border-amber-500/30 px-2.5 py-1 text-[11px] font-bold text-amber-300">${c.categoryLabel}</span>
              <span class="text-xs text-slate-400 font-en">CASE STUDY</span>
            </div>
            <h3 class="text-lg font-black text-white">${c.brand}</h3>
            <div class="space-y-2 text-xs">
              <div class="rounded-xl bg-slate-950/70 p-3 border border-white/5">
                <strong class="text-amber-400 block mb-0.5">التحدي:</strong>
                <span class="text-slate-300">${c.challenge}</span>
              </div>
              <div class="rounded-xl bg-slate-950/70 p-3 border border-white/5">
                <strong class="text-cyan-400 block mb-0.5">الاستراتيجية:</strong>
                <span class="text-slate-300">${c.strategy}</span>
              </div>
              <div class="rounded-xl bg-emerald-950/30 p-3 border border-emerald-500/20">
                <strong class="text-emerald-400 block mb-0.5">النتيجة:</strong>
                <span class="text-slate-100 font-semibold">${c.result}</span>
              </div>
            </div>
          </div>
          <div class="card-3d-content pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
            <button type="button" onclick="openCaseModal('${c.id}')" class="text-xs font-bold text-cyan-400 hover:underline">استعراض دراسة الحالة ←</button>
            <button type="button" onclick="selectServiceForContact('استشارة لقطاع ${c.categoryLabel} (${c.brand})')" class="text-xs font-bold text-amber-300 hover:text-amber-400">اطلب مماثلاً</button>
          </div>
        </div>
      `).join('');
      attach3DTiltListeners();
    }

    function attach3DTiltListeners() {
      const cards = document.querySelectorAll('.card-3d');
      cards.forEach(card => {
        card.onmousemove = function(e) {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          card.style.setProperty('--mouse-x', `${x}px`);
          card.style.setProperty('--mouse-y', `${y}px`);
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -4;
          const rotateY = ((x - centerX) / centerX) * 4;
          card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
        };
        card.onmouseleave = function() {
          card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        };
      });
    }

    let bgVisualMode = 0;
    let heroTargetRotationY = 0;
    let heroCoreMesh = null;
    let animFrameId = null;

    function initThreeJSBackground() {
      if (typeof THREE === 'undefined') return;
      if (animFrameId) cancelAnimationFrame(animFrameId);

      const bgCanvas = document.getElementById('webgl-bg');
      const bgRenderer = new THREE.WebGLRenderer({ canvas: bgCanvas, alpha: true, antialias: true });
      bgRenderer.setSize(window.innerWidth, window.innerHeight);
      bgRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      const bgScene = new THREE.Scene();
      const bgCamera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
      bgCamera.position.z = 26;

      const mainGroup = new THREE.Group();
      bgScene.add(mainGroup);

      const particleCount = 260;
      const positions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 65;
        positions[i + 1] = (Math.random() - 0.5) * 45;
        positions[i + 2] = (Math.random() - 0.5) * 35;
      }
      const particleGeo = new THREE.BufferGeometry();
      particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const particleMat = new THREE.PointsMaterial({
        color: 0xF59E0B,
        size: 0.22,
        transparent: true,
        opacity: 0.65
      });
      const particleSystem = new THREE.Points(particleGeo, particleMat);
      mainGroup.add(particleSystem);

      const bgIcoGeo = new THREE.IcosahedronGeometry(11, 1);
      const bgIcoMat = new THREE.MeshBasicMaterial({
        color: 0x22D3EE,
        wireframe: true,
        transparent: true,
        opacity: 0.07
      });
      const bgIcoMesh = new THREE.Mesh(bgIcoGeo, bgIcoMat);
      mainGroup.add(bgIcoMesh);

      const heroCanvas = document.getElementById('hero-3d-canvas');
      const heroContainer = heroCanvas.parentElement;
      const heroRenderer = new THREE.WebGLRenderer({ canvas: heroCanvas, alpha: true, antialias: true });
      heroRenderer.setSize(heroContainer.clientWidth, heroContainer.clientHeight);
      heroRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      const heroScene = new THREE.Scene();
      const heroCamera = new THREE.PerspectiveCamera(50, heroContainer.clientWidth / heroContainer.clientHeight, 0.1, 100);
      heroCamera.position.z = 8.5;

      const heroGroup = new THREE.Group();
      heroScene.add(heroGroup);

      const outerGeo = new THREE.IcosahedronGeometry(2.3, 1);
      const outerMat = new THREE.MeshBasicMaterial({
        color: 0xF59E0B,
        wireframe: true,
        transparent: true,
        opacity: 0.55
      });
      heroCoreMesh = new THREE.Mesh(outerGeo, outerMat);
      heroGroup.add(heroCoreMesh);

      const innerGeo = new THREE.OctahedronGeometry(1.25, 0);
      const innerMat = new THREE.MeshBasicMaterial({
        color: 0x22D3EE,
        wireframe: true,
        transparent: true,
        opacity: 0.85
      });
      const innerMesh = new THREE.Mesh(innerGeo, innerMat);
      heroGroup.add(innerMesh);

      const ringGeo1 = new THREE.TorusGeometry(3.1, 0.025, 16, 100);
      const ringMat1 = new THREE.MeshBasicMaterial({ color: 0xFBBF24, transparent: true, opacity: 0.5 });
      const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
      ring1.rotation.x = Math.PI / 2.6;
      heroGroup.add(ring1);

      const ringGeo2 = new THREE.TorusGeometry(3.5, 0.02, 16, 100);
      const ringMat2 = new THREE.MeshBasicMaterial({ color: 0x22D3EE, transparent: true, opacity: 0.35 });
      const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
      ring2.rotation.y = Math.PI / 3;
      heroGroup.add(ring2);

      const nodeMeshes = [];
      const nodeGeo = new THREE.SphereGeometry(0.16, 16, 16);
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        const nodeMat = new THREE.MeshBasicMaterial({ color: i === 0 ? 0xF59E0B : 0x38BDF8 });
        const node = new THREE.Mesh(nodeGeo, nodeMat);
        node.position.set(Math.cos(angle) * 3.1, Math.sin(angle) * 1.4, Math.sin(angle) * 2.2);
        heroGroup.add(node);
        nodeMeshes.push(node);
      }

      let mouseX = 0;
      let mouseY = 0;
      window.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
      });

      let isDragging = false;
      let prevX = 0;
      heroCanvas.addEventListener('mousedown', (e) => { isDragging = true; prevX = e.clientX; });
      window.addEventListener('mouseup', () => { isDragging = false; });
      window.addEventListener('mousemove', (e) => {
        if (isDragging) {
          const delta = e.clientX - prevX;
          heroTargetRotationY += delta * 0.015;
          prevX = e.clientX;
        }
      });

      window.highlight3DPillar = function(index) {
        heroTargetRotationY = (index / 6) * Math.PI * 2;
        nodeMeshes.forEach((n, idx) => {
          n.material.color.setHex(idx === index ? 0xF59E0B : 0x22D3EE);
          n.scale.setScalar(idx === index ? 1.6 : 1.0);
        });
      };

      window.cycle3DMode = function() {
        bgVisualMode = (bgVisualMode + 1) % 3;
        const label = document.getElementById('mode-3d-label');
        if (bgVisualMode === 0) {
          bgIcoMat.color.setHex(0x22D3EE);
          particleMat.color.setHex(0xF59E0B);
          outerMat.color.setHex(0xF59E0B);
          label.textContent = 'طور 3D: النواة الاستراتيجية';
        } else if (bgVisualMode === 1) {
          bgIcoMat.color.setHex(0xF59E0B);
          particleMat.color.setHex(0x22D3EE);
          outerMat.color.setHex(0x22D3EE);
          label.textContent = 'طور 3D: شبكة النمو الذكية';
        } else {
          bgIcoMat.color.setHex(0x10B981);
          particleMat.color.setHex(0xA855F7);
          outerMat.color.setHex(0x10B981);
          label.textContent = 'طور 3D: التموضع التنافسي';
        }
      };

      window.addEventListener('resize', () => {
        bgCamera.aspect = window.innerWidth / window.innerHeight;
        bgCamera.updateProjectionMatrix();
        bgRenderer.setSize(window.innerWidth, window.innerHeight);

        if (heroContainer) {
          heroCamera.aspect = heroContainer.clientWidth / heroContainer.clientHeight;
          heroCamera.updateProjectionMatrix();
          heroRenderer.setSize(heroContainer.clientWidth, heroContainer.clientHeight);
        }
      });

      function animate() {
        animFrameId = requestAnimationFrame(animate);

        particleSystem.rotation.y += 0.0009;
        bgIcoMesh.rotation.x += 0.0012;
        bgIcoMesh.rotation.y += 0.0018;
        mainGroup.position.x += (mouseX * 2.2 - mainGroup.position.x) * 0.04;
        mainGroup.position.y += (-mouseY * 1.8 - mainGroup.position.y) * 0.04;
        bgRenderer.render(bgScene, bgCamera);

        heroCoreMesh.rotation.y += 0.006;
        heroCoreMesh.rotation.x += 0.003;
        innerMesh.rotation.y -= 0.01;
        ring1.rotation.z += 0.008;
        ring2.rotation.x -= 0.006;

        heroGroup.rotation.y += (heroTargetRotationY + mouseX * 0.5 - heroGroup.rotation.y) * 0.06;
        heroGroup.rotation.x += (mouseY * 0.3 - heroGroup.rotation.x) * 0.06;

        heroRenderer.render(heroScene, heroCamera);
      }
      animate();
    }

    window.addEventListener('DOMContentLoaded', () => {
      renderCaseStudies('all');
      initThreeJSBackground();
      attach3DTiltListeners();

      const mobileMenuBtn = document.getElementById('mobile-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
        });
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
          link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
        });
      }

      const closeModalBtn = document.getElementById('close-modal-btn');
      if (closeModalBtn) {
        closeModalBtn.addEventListener('click', window.closeModal);
      }

      const toggle3DBtn = document.getElementById('toggle-3d-btn');
      if (toggle3DBtn) {
        toggle3DBtn.addEventListener('click', () => {
          if (typeof window.cycle3DMode === 'function') window.cycle3DMode();
        });
      }

      document.querySelectorAll('.pillar-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.getAttribute('data-pillar'), 10);
          const p = PILLARS_DATA[idx];
          if (!p) return;

          document.querySelectorAll('.pillar-btn').forEach(b => {
            b.className = 'pillar-btn rounded-xl border border-white/10 bg-slate-900/70 px-2.5 py-2 text-xs font-semibold text-slate-300 hover:border-amber-400/50 transition';
          });
          btn.className = 'pillar-btn rounded-xl border border-amber-500 bg-amber-500/20 px-2.5 py-2 text-xs font-bold text-white transition';

          document.getElementById('active-pillar-badge').textContent = p.badge;
          document.getElementById('pillar-title').textContent = p.title;
          document.getElementById('pillar-en').textContent = p.en;
          document.getElementById('pillar-desc').textContent = p.desc;

          if (typeof window.highlight3DPillar === 'function') {
            window.highlight3DPillar(idx);
          }
        });
      });

      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const filter = btn.getAttribute('data-filter');
          document.querySelectorAll('.filter-btn').forEach(b => {
            b.className = 'filter-btn rounded-xl border border-white/15 bg-slate-900/80 px-4 py-2 text-xs font-bold text-slate-300 hover:border-amber-400 transition';
          });
          btn.className = 'filter-btn rounded-xl bg-amber-500 px-4 py-2 text-xs font-extrabold text-slate-950 transition';
          renderCaseStudies(filter);
        });
      });

      const checkboxes = document.querySelectorAll('.custom-mod-cb');
      function updateCustomPackageSummary() {
        const selected = Array.from(checkboxes).filter(cb => cb.checked).map(cb => cb.value);
        const countEl = document.getElementById('selected-mod-count');
        const labelEl = document.getElementById('recommended-pkg-label');
        countEl.textContent = selected.length;
        if (selected.length === 0) {
          labelEl.textContent = 'يرجى اختيار محور واحد على الأقل لتخصيص باقتك';
        } else if (selected.length <= 2) {
          labelEl.textContent = 'باقة التشخيص والتموضع التأسيسي المخصصة (' + selected.length + ' محاور)';
        } else if (selected.length <= 4) {
          labelEl.textContent = 'باقة بناء العلامة ونظام التسويق المتكامل المخصصة (' + selected.length + ' محاور)';
        } else {
          labelEl.textContent = 'باقة منظومة النمو الشامل والشراكة التنفيذية VIP (' + selected.length + ' محاور)';
        }
      }
      checkboxes.forEach(cb => cb.addEventListener('change', updateCustomPackageSummary));

      const applyCustomPkgBtn = document.getElementById('apply-custom-pkg-btn');
      if (applyCustomPkgBtn) {
        applyCustomPkgBtn.addEventListener('click', () => {
          const selected = Array.from(checkboxes).filter(cb => cb.checked).map(cb => cb.value);
          if (selected.length === 0) {
            showToast('تنبيه', 'اختر محوراً واحداً على الأقل لتكوين باقتك المخصصة.');
            return;
          }
          const pkgTitle = document.getElementById('recommended-pkg-label').textContent;
          window.selectServiceForContact(pkgTitle);
          const briefEl = document.getElementById('client-brief');
          if (briefEl) {
            briefEl.value = 'أرغب في باقة مخصصة تشمل المحاور التالية:\n- ' + selected.join('\n- ');
          }
        });
      }

      function evaluateQuiz() {
        let total = 0;
        ['q1', 'q2', 'q3', 'q4'].forEach(qName => {
          const checked = document.querySelector(`input[name="${qName}"]:checked`);
          if (checked) total += parseInt(checked.value, 10);
        });
        const badge = document.getElementById('quiz-score-badge');
        const diag = document.getElementById('quiz-diagnosis-text');
        badge.textContent = `${total} / 100`;
        if (total >= 85) {
          diag.textContent = 'منظومتك التسويقية ناضجة! الخطوة المثالية الآن هي "استراتيجية النمو وتطوير العروض" لتعظيم الحصة السوقية.';
        } else if (total >= 55) {
          diag.textContent = 'لديك أساس جيد، لكنك بحاجة إلى "باقة بناء العلامة ونظام التسويق" لربط التموضع والرسائل بقنوات البيع.';
        } else {
          diag.textContent = 'هناك تشتت يستنزف ميزانيتك. ننصح بالبدء فوراً بـ "باقة التشخيص والتوجيه الاستراتيجي" لبناء أساس واضح.';
        }
      }
      document.querySelectorAll('#quiz-questions input[type="radio"]').forEach(r => {
        r.addEventListener('change', evaluateQuiz);
      });

      const sendDiagnosisBtn = document.getElementById('send-diagnosis-btn');
      if (sendDiagnosisBtn) {
        sendDiagnosisBtn.addEventListener('click', () => {
          const score = document.getElementById('quiz-score-badge').textContent;
          const diag = document.getElementById('quiz-diagnosis-text').textContent;
          const briefEl = document.getElementById('client-brief');
          if (briefEl) {
            briefEl.value = `أجريت اختبار الجاهزية الاستراتيجية وحصلت على (${score}).\nالتشخيص: ${diag}\nأود مناقشة خطة تطوير منظومة التسويق لشركتي.`;
          }
          document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
          showToast('تم إرفاق نتيجة التشخيص', 'تمت إضافة نتيجتك في نموذج الاستشارة بالأسفل.');
        });
      }

      function copyTextToClipboard(text) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
        } else {
          fallbackCopy(text);
        }
      }

      function fallbackCopy(text) {
        const ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); } catch (err) {}
        document.body.removeChild(ta);
      }

      const copyPhoneBtn = document.getElementById('copy-phone-btn');
      if (copyPhoneBtn) {
        copyPhoneBtn.addEventListener('click', (e) => {
          e.preventDefault();
          copyTextToClipboard('01221359590');
          showToast('تم نسخ الرقم', 'تم نسخ رقم الهاتف 01221359590 إلى الحافظة.');
        });
      }

      function buildConsultationMessage() {
        const name = document.getElementById('client-name').value.trim() || 'عميل محتمل';
        const company = document.getElementById('client-company').value.trim() || 'غير محدد';
        const service = document.getElementById('client-service').value;
        const model = document.getElementById('client-model').value;
        const brief = document.getElementById('client-brief').value.trim() || 'أود حجز جلسة استشارية لمناقشة تطوير منظومة التسويق.';
        return `مرحباً أستاذ حسن علي الزيات،\n\nأود طلب استشارة تسويقية:\n• الاسم: ${name}\n• الشركة: ${company}\n• الباقة/الخدمة: ${service}\n• نموذج التعاون: ${model}\n• التفاصيل والتحدي الحالي:\n${brief}`;
      }

      const form = document.getElementById('consultation-form');
      if (form) {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          const msg = buildConsultationMessage();
          const waUrl = `https://wa.me/201221359590?text=${encodeURIComponent(msg)}`;
          window.open(waUrl, '_blank', 'noopener,noreferrer');
          showToast('جاري فتح واتساب', 'تم تجهيز رسالتك الاستشارية لإرسالها إلى حسن علي الزيات.');
        });
      }

      const sendEmailBtn = document.getElementById('send-email-btn');
      if (sendEmailBtn) {
        sendEmailBtn.addEventListener('click', () => {
          const msg = buildConsultationMessage();
          const subject = encodeURIComponent('طلب استشارة تسويقية استراتيجية - حسن علي الزيات');
          const body = encodeURIComponent(msg);
          window.location.href = `mailto:hassan.ali.elzayat@gmail.com?subject=${subject}&body=${body}`;
          showToast('جاري فتح البريد الإلكتروني', 'تم تجهيز مسودة البريد الإلكتروني إلى hassan.ali.elzayat@gmail.com');
        });
      }

      const copyBriefBtn = document.getElementById('copy-brief-btn');
      if (copyBriefBtn) {
        copyBriefBtn.addEventListener('click', () => {
          const msg = buildConsultationMessage();
          copyTextToClipboard(msg);
          showToast('تم نسخ ملخص الطلب', 'يمكنك الآن لصق الملخص وإرساله في أي محادثة.');
        });
      }
    });
