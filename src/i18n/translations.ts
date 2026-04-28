export type Lang = 'tr' | 'en';

export interface HeroSlide {
  badge: string;
  headline: string;
  highlightedWord: string;
  headlineEnd: string;
  subHeadline: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface ServiceItemText {
  title: string;
  description: string;
}

export interface OsbPoint {
  label: string;
  text: string;
}

export interface OsbSection {
  title: string;
  intro: string;
  points: OsbPoint[];
}

export interface BlogPostContent {
  intro: string;
  sections: {
    title: string;
    paragraphs: string[];
  }[];
  summary?: {
    intro: string;
    items: string[];
    outro?: string;
  };
  hashtags?: string[];
  sources?: { label: string; url: string }[];
  disclaimer?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  content: BlogPostContent;
}

export interface Dictionary {
  nav: {
    corporate: string;
    services: string;
    references: string;
    blog: string;
    contact: string;
    faq: string;
    cta: string;
    menuToggle: string;
    home: string;
  };
  languageToggle: {
    ariaLabel: string;
    tr: string;
    en: string;
  };
  hero: {
    slides: HeroSlide[];
    ctaServices: string;
    ctaContact: string;
    prevSlide: string;
    nextSlide: string;
  };
  services: {
    badge: string;
    titleStart: string;
    titleAccent: string;
    description: string;
    detail: string;
    close: string;
    contactUs: string;
    items: ServiceItemText[];
    osbModal: {
      badge: string;
      titleStart: string;
      titleAccent: string;
      titleEnd: string;
      sections: OsbSection[];
      whyUs: {
        title: string;
        items: OsbPoint[];
      };
    };
    argeModal: {
      badge: string;
      titleStart: string;
      titleAccent: string;
      titleEnd: string;
      intro: string;
      sections: OsbSection[];
      hashtags: string[];
    };
  };
  whyUs: {
    badge: string;
    titleStart: string;
    titleAccent: string;
    description: string;
    badgeExperienceValue: string;
    badgeExperienceLabel: string;
    badgeExperienceSub: string;
    altImage: string;
    points: ServiceItemText[];
  };
  cta: {
    headingStart: string;
    headingAccent: string;
    description: string;
    primaryLabel: string;
    phoneLabel: string;
    trustBadges: string[];
  };
  footer: {
    tagline: string;
    columnCompany: string;
    columnServices: string;
    columnContact: string;
    companyLinks: { label: string; href: string }[];
    serviceLinks: { label: string; href: string }[];
    legalLinks: { label: string; href: string }[];
    workingHours: string;
    copyright: (year: number) => string;
    madeIn: string;
  };
  blog: {
    pageBadge: string;
    pageTitleStart: string;
    pageTitleAccent: string;
    pageDescription: string;
    postMeta: (date: string, readTime: string) => string;
    readPost: string;
    backToBlog: string;
    disclaimerTitle: string;
    relatedTitle: string;
    relatedServicesTitle: string;
    relatedServicesDesc: string;
    relatedFaqTitle: string;
    relatedFaqDesc: string;
    otherPostsTitle: string;
    sourcesTitle: string;
    posts: BlogPost[];
  };
  contact: {
    pageBadge: string;
    pageTitleStart: string;
    pageTitleAccent: string;
    pageDescription: string;
    formTitle: string;
    formDescription: string;
    formName: string;
    formEmail: string;
    formPhone: string;
    formSubject: string;
    formMessage: string;
    formSubmit: string;
    formSuccess: string;
    formCaptchaLabel: string;
    formCaptchaError: string;
    infoTitle: string;
    infoPhoneLabel: string;
    infoPhoneSub: string;
    infoEmailLabel: string;

    linkedinTitle: string;
    linkedinDescription: string;
    linkedinCta: string;
  };
  corporate: {
    pageBadge: string;
    pageTitleStart: string;
    pageTitleAccent: string;
    pageDescription: string;
    introTitle: string;
    introParagraphs: string[];
    founderTitle: string;
    founderName: string;
    founderRole: string;
    founderParagraphs: string[];
    highlights: { label: string; value: string }[];
    ctaText: string;
    ctaLabel: string;
  };
  faq: {
    pageBadge: string;
    pageTitleStart: string;
    pageTitleAccent: string;
    pageDescription: string;
    ctaText: string;
    ctaLabel: string;
    categories: {
      title: string;
      description: string;
      items: { question: string; answer: string }[];
    }[];
  };
  legal: {
    lastUpdatedLabel: string;
    lastUpdatedDate: string;
    disclaimer: string;
    privacy: LegalDoc;
    kvkk: LegalDoc;
    cookies: LegalDoc;
  };
  osbPillar: {
    pageBadge: string;
    pageTitleStart: string;
    pageTitleAccent: string;
    pageDescription: string;
    tocTitle: string;
    sections: {
      id: string;
      title: string;
      paragraphs: string[];
      bullets?: string[];
    }[];
    ctaHeading: string;
    ctaText: string;
    ctaLabel: string;
  };
  glossary: {
    pageBadge: string;
    pageTitleStart: string;
    pageTitleAccent: string;
    pageDescription: string;
    searchPlaceholder: string;
    emptyState: string;
    backToTop: string;
    categories: {
      title: string;
      terms: { term: string; definition: string }[];
    }[];
  };
}

export interface LegalDoc {
  pageBadge: string;
  pageTitleStart: string;
  pageTitleAccent: string;
  pageDescription: string;
  sections: { title: string; paragraphs: string[] }[];
}

export const LINKEDIN_URL =
  'https://www.linkedin.com/in/ilker-tura-02354984/?skipRedirect=true';

const tr: Dictionary = {
  nav: {
    corporate: 'Kurumsal',
    services: 'Hizmetlerimiz',
    references: 'Referanslar',
    blog: 'Blog',
    contact: 'İletişim',
    faq: 'SSS',
    cta: 'Danışmanlık Alın',
    menuToggle: 'Menüyü aç/kapat',
    home: 'Anasayfa',
  },
  languageToggle: {
    ariaLabel: 'Dil seçin',
    tr: 'TR',
    en: 'EN',
  },
  hero: {
    slides: [
      {
        badge: '15 Yıl Kamu ve Mevzuat Tecrübesi',
        headline: '',
        highlightedWord: 'OSB',
        headlineEnd: ', Ar-Ge ve Kurumsal Yönetim Danışmanlığında\nStratejik Çözüm Ortağınız',
        subHeadline:
          'OSB mevzuatı, Teknopark muafiyetleri ve yeşil OSB süreçlerinde yasal risk yönetimiyle birleşen mühendislik disipliniyle, sanayi kuruluşlarına uçtan uca danışmanlık sunuyoruz.',
        ctaLabel: 'OSB Danışmanlığı Detayları',
        ctaHref: '/#hizmetlerimiz',
      },
      {
        badge: 'Ar-Ge, Tasarım Merkezi ve Teknopark',
        headline: 'Ar-Ge ve ',
        highlightedWord: 'Teknopark',
        headlineEnd: ' Süreçlerinde Stratejik\nÇözüm Ortağınız',
        subHeadline:
          '5746 sayılı Kanun kapsamında Ar-Ge indirimi, Teknopark muafiyetleri ve 4691 sayılı Kanun uyum süreçlerini sıfır hata prensibiyle yönetiyor; denetim hazırlığınızı veri odaklı raporlarla güvence altına alıyoruz.',
        ctaLabel: 'Ar-Ge Merkezi Kurulum Süreci',
        ctaHref: '/#hizmetlerimiz',
      },
      {
        badge: 'Kurumsal Yönetim ve Kapasite Geliştirme',
        headline: 'Kurumsal Yönetim ve ',
        highlightedWord: 'Kapasite Geliştirmede',
        headlineEnd: '\nOtorite Güvencesi',
        subHeadline:
          'OSB mevzuat uyum süreçleri, yasal risk yönetimi ve stratejik planlama alanlarında kamu tecrübesi ile desteklenmiş; veri odaklı ve yapay zeka destekli danışmanlık sunuyoruz.',
        ctaLabel: 'Kurucu ve Kadromuzu Tanıyın',
        ctaHref: '/kurumsal',
      },
      {
        badge: 'İş Sürekliliği ve Risk Yönetimi',
        headline: 'OSB\'lerde Kesintisiz ',
        highlightedWord: 'İş Sürekliliği',
        headlineEnd: '\nve Dayanıklılık',
        subHeadline:
          'Endüstriyel altyapıların afetlere ve beklenmedik durumlara karşı dayanıklılığını artırıyor; kritik süreçlerin kesintisiz devamı için risk analizleri, İş Sürekliliği Planı (İSP) ve resilience odaklı acil durum yönetimi sunuyoruz.',
        ctaLabel: 'İSP Analizi Alın',
        ctaHref: '/iletisim',
      },
    ],
    ctaServices: 'Hizmetlerimizi İnceleyin',
    ctaContact: 'Bize Ulaşın',
    prevSlide: 'Önceki slayt',
    nextSlide: 'Sonraki slayt',
  },
  services: {
    badge: 'Uzmanlık Alanlarımız',
    titleStart: 'OSB, Ar-Ge ve Kurumsal Yönetim',
    titleAccent: 'Danışmanlığı',
    description:
      'OSB mevzuatından Ar-Ge ve Tasarım Merkezi yönetimine, yeşil OSB dönüşümünden Teknopark muafiyetlerine kadar her süreçte; mühendislik disiplini, kamu tecrübesi ve veri odaklı metodolojiyle çalışan uzman danışman kadromuzla yanınızdayız.',
    detail: 'Detaylı Bilgi',
    close: 'Kapat',
    contactUs: 'Bize Ulaşın',
    items: [
      {
        title: 'OSB Danışmanlığı ve Mevzuat Uyumu',
        description:
          '4562 sayılı OSB Kanunu kapsamında arsa tahsis yönetimi, organ yönetimi ve altyapı proje danışmanlığı süreçlerini; OSB kurumsal kapasite geliştirme ve Akıllı OSB dijital dönüşüm perspektifiyle uçtan uca yönetiyoruz.',
      },
      {
        title: 'Ar-Ge, Tasarım Merkezi ve Teknopark',
        description:
          '5746 sayılı Kanun kapsamında Ar-Ge ve Tasarım Merkezi kurulumu, 4691 sayılı Kanun çerçevesinde Teknopark muafiyetleri ve denetim hazırlığını; veri odaklı süreç yönetimi ve sıfır hata prensibiyle yürütüyoruz.',
      },
      {
        title: 'Hibe, Teşvik ve Proje Danışmanlığı',
        description:
          'TÜBİTAK ve KOSGEB projeleri, AB fonları ile 5746 ve 4691 sayılı kanun teşviklerinde; fizibilite, başvuru, izleme ve mevzuat uyum süreçlerini uçtan uca yönetiyor, kaynak verimliliğini azami seviyeye taşıyoruz.',
      },
      {
        title: 'Kurumsal Yönetim ve Kapasite Geliştirme',
        description:
          'OSB organ yönetimi, yönetim-denetim kurulu sorumluluk analizi ve kurumsallaşma yol haritasında; yasal risk yönetimini merkeze alarak kurumların operasyonel kapasitesini veri odaklı çerçevede yeniden tasarlıyoruz.',
      },
      {
        title: 'TGB Yönetici Şirket Danışmanlığı',
        description:
          '4691 sayılı Kanun kapsamında Teknoloji Geliştirme Bölgeleri yönetici şirket operasyonları, Teknopark muafiyetleri, portal üzerinden proje izleme ve ön denetim süreçlerinde mevzuata tam uyumlu ekosistem yönetimi sağlıyoruz.',
      },
      {
        title: 'Stratejik Planlama ve Yeşil Dönüşüm',
        description:
          'Avrupa Yeşil Mutabakatı ve yeşil OSB hedefleri doğrultusunda; sanayide yeşil dönüşüm ve inovasyon yönetimini stratejik planlamayla birleştirerek, uzun vadeli büyüme hedeflerinizi ölçülebilir aksiyon planlarına dönüştürüyoruz.',
      },
    ],
    osbModal: {
      badge: 'Detaylı Bilgi',
      titleStart: 'OSB Mevzuat, Yeşil Dönüşüm ve',
      titleAccent: 'Akıllı OSB',
      titleEnd: 'Çözümleri',
      sections: [
        {
          title: '1. OSB Mevzuat ve Yönetim Danışmanlığı',
          intro:
            '4562 sayılı OSB Kanunu ve ilgili uygulama yönetmelikleri çerçevesinde; OSB kurumsal kapasite geliştirme yaklaşımıyla bölgelerin idari, hukuki ve teknik süreçlerini uçtan uca yönetiyoruz.',
          points: [
            {
              label: 'Arsa Tahsis ve İptal Yönetimi Danışmanlığı',
              text: 'Yer seçimi, parselasyon ve katılımcı ön tahsis ve tahsis prosedürlerinin mevzuata uygun yönetimi.',
            },
            {
              label: 'Organ Yönetimi',
              text: 'Müteşebbis Heyet, Genel Kurul, Yönetim Kurulu ve Denetim Kurulu süreçlerinin yapılandırılması ve OSB iç işleyiş kurallarının (prensip karar, yönerge, talimatname, rehber vb.) belirlenmesi.',
            },
            {
              label: 'Organ Üyelerinin Sorumluluk Yönetimi',
              text: 'Yönetim ve denetim kurulu üyelerinin hukuki ve cezai sorumlulukları konusunda bilgilendirme ve risk analizi.',
            },
            {
              label: 'Sözleşme Yönetimi',
              text: 'Katılımcı ve üçüncü taraflarla yapılan tahsis, ön tahsis, teknik ve idari sözleşmelerin hazırlanması.',
            },
          ],
        },
        {
          title: '2. Yeşil OSB ve Sürdürülebilirlik Stratejileri',
          intro:
            'Sürdürülebilir kalkınma hedefleri doğrultusunda, OSB’lerin çevresel performansını artırıyor ve “Yeşil OSB” sertifikasyon süreçlerine hazırlıyoruz.',
          points: [
            {
              label: 'Yeşil Dönüşüm',
              text: 'Avrupa Yeşil Mutabakatı uyum süreçleri ve performans takibi.',
            },
          ],
        },
        {
          title: '3. Finansal ve Altyapı Yönetimi',
          intro: '',
          points: [
            {
              label: 'Bakanlık Kredileri ve Teşvikler',
              text: 'Altyapı ve genel idare giderleri için kredi kullanımı, borçlanma ve hakediş raporlarının vize edilmesi.',
            },
            {
              label: 'İhale Yönetimi',
              text: 'OSB’lerde ihale süreçlerine hazırlanması.',
            },
            {
              label: 'Altyapı Tesisleri',
              text: 'Elektrik, su, kanalizasyon, doğalgaz, arıtma tesisi gibi altyapı tesisleri kurma ve işletme hakkına ilişkin iş ve işlemler, hizmet sözleşmeleri ve bedel tahakkuk esaslarının belirlenmesi.',
            },
          ],
        },
        {
          title: '4. Dijital Dönüşüm ve Veri Odaklı Yönetim',
          intro:
            'Geleneksel sanayi yönetimini modern veri teknolojileriyle birleştirerek, Akıllı OSB stratejik planlama çerçevesinde veri odaklı karar mekanizmalarını kuruyor ve “Akıllı OSB” vizyonunu hayata geçiriyoruz.',
          points: [
            {
              label: 'Dijital Strateji Geliştirme',
              text: 'Organizasyonel hafızanın korunması ve dijital arşiv sistemlerinin kurulumu.',
            },
            {
              label: 'Büyük Veri ve Yapay Zeka',
              text: 'OSB yönetim süreçlerinde veri madenciliği ve yapay zeka entegrasyonu ile karar destek mekanizmalarının oluşturulması.',
            },
            {
              label: 'Süreç Otomasyonu',
              text: 'İş akışlarının dijitalleşmesi ve verimlilik artırıcı yazılım çözümleri danışmanlığı.',
            },
          ],
        },
        {
          title: '5. İş Sürekliliği ve Risk Yönetimi',
          intro:
            'Endüstriyel altyapıların afetlere ve beklenmedik durumlara karşı dayanıklılığını artırıyoruz.',
          points: [
            {
              label: 'İş Sürekliliği Planlaması (İSP)',
              text: 'Kritik süreçlerin kesintisiz devamı için risk analizleri ve müdahale planları.',
            },
            {
              label: 'Acil Durum Yönetimi',
              text: 'Geleneksel yöntemlerin ötesinde, dayanıklılık (resilience) odaklı stratejik planlama.',
            },
          ],
        },
        {
          title: '6. Teknoloji ve İnovasyon Ekosistemleri',
          intro:
            'AR-GE ve inovasyonun sanayi ile buluştuğu ekosistemlerin işletilmesini sağlıyoruz.',
          points: [
            {
              label: 'TEKMER ve TGB',
              text: 'Teknoloji Geliştirme Merkezleri ve Bölgelerinin kuruluş ve işletme süreçleri.',
            },
            {
              label: 'Ekosistem Yönetimi',
              text: 'Üniversite-sanayi iş birliği ve teknoloji transfer süreçlerinin kurgulanması.',
            },
          ],
        },
      ],
      whyUs: {
        title: 'Neden Biz?',
        items: [
          {
            label: 'Mühendislik Perspektifi',
            text: 'Mühendislik disipliniyle süreçlerin optimizasyonu ve verimlilik odağı.',
          },
          {
            label: 'Mevzuat Hakimiyeti',
            text: 'Bakanlık düzeyindeki güncel mevzuat ve regülasyonların yakın takibi.',
          },
          {
            label: 'Yüksek Teknoloji Deneyimi',
            text: 'Veri mühendisliği ve yapay zeka tecrübesinin sanayi yönetimine entegrasyonu.',
          },
        ],
      },
    },
    argeModal: {
      badge: 'Detaylı Bilgi',
      titleStart: 'Ar-Ge, Tasarım ve',
      titleAccent: 'İnovasyon',
      titleEnd: 'Ekosistemi Danışmanlığı',
      intro:
        'Türkiye’nin teknoloji odaklı kalkınma hedefleri doğrultusunda, 5746 ve 4691 sayılı kanunlar kapsamında sunulan devlet teşviklerinden en yüksek verimle ve sıfır hata payıyla yararlanmanız için stratejik çözüm ortaklığı sunuyoruz. Denetim standartlarını merkeze alarak, teknik ve idari süreçlerinizi uçtan uca yönetiyoruz.',
      sections: [
        {
          title:
            '1. 5746 Sayılı Kanun: Ar-Ge ve Tasarım Merkezleri Yönetim Danışmanlığı',
          intro:
            'İşletme bünyesinde kurulan merkezlerin sürdürülebilir bir teşvik mekanizmasına dönüşmesi için; Ar-Ge merkezi veri odaklı süreç yönetimi yaklaşımıyla teknik izleme, raporlama ve denetim hazırlığı süreçlerini uçtan uca yürütüyoruz.',
          points: [
            {
              label: 'Merkez Tasarımı ve Yönetimi',
              text: 'Merkezin fiziksel alan tasarımı, personel nitelik analizinin mevzuat kriterlerine uygun hazırlanması.',
            },
            {
              label: 'Sürekli Denetim ve Mevzuat Uyumu',
              text: 'Aylık ve yıllık bazda Ar-Ge indirimleri, gelir vergisi stopaj teşviki ve sigorta primi desteği uygulamalarının takibi.',
            },
            {
              label: 'Teknik Raporlama ve Faaliyet Takibi',
              text: 'Yıllık faaliyet raporlarının, projelerin teknik derinliğini ve yenilikçi yönünü (Ar-Ge/Tasarım niteliği) vurgulayacak şekilde veriye dayalı hazırlanması.',
            },
            {
              label: 'Denetleme Hazırlığı',
              text: '“Ön Denetim” simülasyonları ile risklerin (adam/ay süreleri, harcama kalemleri vb.) analizi.',
            },
          ],
        },
        {
          title:
            '2. 4691 Sayılı Kanun: Teknoloji Geliştirme Bölgeleri (TGB) Danışmanlığı',
          intro: '',
          points: [
            {
              label: 'Yönetici Şirket Operasyonel Yönetimi',
              text: 'Teknopark yönetici şirketleri ve bölge içerisinde yer alan girişimci firmalar için mevzuata tam uyumlu ekosistem yönetimi sağlıyoruz.',
            },
            {
              label: 'Portal ve Muafiyet Yönetimi',
              text: 'Teknopark Portalı üzerinden yürütülen proje girişleri, muafiyet belgeleri ve personel takiplerinin yönetimi.',
            },
            {
              label: 'Proje Kabul ve İzleme',
              text: 'Bölgeye girecek projelerin 4691 sayılı kanun kapsamındaki uygunluk kriterlerinin belirlenmesi.',
            },
            {
              label: 'Yönetici Şirket Denetim Hazırlığı',
              text: 'Yönetici şirketlerin “Ön Denetim” simülasyonları ile risklerin analizi.',
            },
          ],
        },
      ],
      hashtags: [
        '#ArGe',
        '#Tasarım',
        '#İnovasyon',
        '#5746',
        '#4691',
        '#Teknopark',
        '#TeşvikYönetimi',
      ],
    },
  },
  whyUs: {
    badge: 'Neden ANT Yönetim?',
    titleStart: 'Mevzuata Tam Hakim,',
    titleAccent: 'Veri Odaklı Danışmanlık',
    description:
      'ANT Yönetim Danışmanlık olarak; karmaşık OSB mevzuatı ve organ yönetim süreçlerinde sıfır hata prensibiyle çalışıyor, Ar-Ge ve Tasarım Merkezi süreçlerinde veri odaklı ve yapay zeka destekli modern mühendislik yaklaşımıyla ölçülebilir sonuçlar üretiyoruz.',
    badgeExperienceValue: '15',
    badgeExperienceLabel: 'Yıl',
    badgeExperienceSub: 'Kamu Tecrübesi',
    altImage: 'ANT Yönetim Danışmanlık uzman ekibi',
    points: [
      {
        title: 'OSB Mevzuatında Sıfır Hata',
        description:
          '4562 sayılı OSB Kanunu, arsa tahsis ve organ yönetim süreçlerinde denetim odaklı çalışıyor; uyum hatası kaynaklı risklerinizi tasarım aşamasında bertaraf ediyoruz.',
      },
      {
        title: 'Bakanlık Düzeyinde Mevzuat Hakimiyeti',
        description:
          '4562 sayılı OSB Kanunu, 5746 ve 4691 sayılı kanunlar ile Teknopark muafiyetlerine ilişkin güncel regülasyonları Bakanlık müfettişliği tecrübesiyle yorumluyoruz.',
      },
      {
        title: 'Veri Odaklı ve Yapay Zeka Destekli Ar-Ge',
        description:
          'Büyük veri analizleri ve yapay zeka destekli karar mekanizmalarıyla Ar-Ge ve Tasarım Merkezi yönetim süreçlerinizi ölçülebilir ve sürdürülebilir hale getiriyoruz.',
      },
      {
        title: 'Kamu Tecrübesiyle Kurumsal Güvence',
        description:
          '15 yıl Sanayi ve Teknoloji Bakanlığı deneyimiyle; yeşil dönüşüm süreçleri ve kurumsal yönetim danışmanlığında kamu-özel sektör arasında güvenilir köprü kuruyoruz.',
      },
    ],
  },
  cta: {
    headingStart: 'İşletmenizi Dönüştürmeye',
    headingAccent: 'Hazır mısınız?',
    description:
      'Ön değerlendirme görüşmemizle tanışın. İşletmenizin potansiyelini birlikte keşfedelim ve büyüme yol haritanızı oluşturalım.',
    primaryLabel: 'Hemen İletişime Geçin',
    phoneLabel: 'veya bizi arayın: +90 (506) 986 26 20',
    trustBadges: [
      'Ön Görüşme',
      'Gizlilik Garantisi',
      '24 Saat İçinde Dönüş',
    ],
  },
  footer: {
    tagline:
      'ANT Danışmanlık olarak, işletmelerin sürdürülebilir büyümesi için yenilikçi stratejiler ve uzman çözümler sunuyoruz. Güvenilir iş ortağınız olarak yanınızdayız.',
    columnCompany: 'Kurumsal',
    columnServices: 'Hizmetlerimiz',
    columnContact: 'İletişim',
    companyLinks: [
      { label: 'Hakkımızda', href: '/kurumsal' },
      { label: 'Ekibimiz', href: '/kurumsal' },
      { label: 'Blog', href: '/blog' },
      { label: 'SSS', href: '/sss' },
      { label: 'İletişim', href: '/iletisim' },
    ],
    serviceLinks: [
      { label: 'Yönetim Danışmanlığı', href: '/#hizmetlerimiz' },
      { label: 'Ar-Ge ve İnovasyon', href: '/#hizmetlerimiz' },
      { label: 'Hibe ve Teşvikler', href: '/#hizmetlerimiz' },
      { label: 'Kurumsal Gelişim', href: '/#hizmetlerimiz' },
      { label: 'OSB Mevzuat ve Yönetim', href: '/#hizmetlerimiz' },
      { label: 'Stratejik Planlama', href: '/#hizmetlerimiz' },
    ],
    legalLinks: [
      { label: 'Gizlilik Politikası', href: '/gizlilik' },
      { label: 'KVKK Aydınlatma Metni', href: '/kvkk' },
      { label: 'Çerez Politikası', href: '/cerez' },
    ],
    workingHours: '',
    copyright: (year) => `© ${year} ANT Danışmanlık. Tüm hakları saklıdır.`,
    madeIn: '',
  },
  blog: {
    pageBadge: 'Blog',
    pageTitleStart: 'Sektörel',
    pageTitleAccent: 'İçgörüler',
    pageDescription:
      'OSB mevzuatı, sanayi politikaları, yeşil dönüşüm ve dijitalleşme üzerine güncel analizler.',
    postMeta: (date, readTime) => `${date} · ${readTime}`,
    readPost: 'Yazıyı Oku',
    backToBlog: 'Blog listesine dön',
    disclaimerTitle: 'Not',
    relatedTitle: 'İlgili İçerikler',
    relatedServicesTitle: 'Hizmetlerimizi İnceleyin',
    relatedServicesDesc:
      'OSB, Ar-Ge ve Tasarım Merkezi, Teknopark ve Kurumsal Yönetim alanlarında uçtan uca danışmanlık.',
    relatedFaqTitle: 'Sıkça Sorulan Sorular',
    relatedFaqDesc:
      'OSB mevzuatı, Ar-Ge Merkezi kurulumu ve KOSGEB-TÜBİTAK projelerine dair uzman yanıtlar.',
    otherPostsTitle: 'Diğer Blog Yazıları',
    sourcesTitle: 'Kaynaklar ve Resmi Referanslar',
    posts: [
      {
        id: 'osb-on-tahsis',
        title:
          'Organize Sanayi Bölgelerinde Ön Tahsis Süreçleri ve Belirsizliklerin Yönetimi',
        excerpt:
          'OSB’lerde ön tahsis yöntemiyle arsa talebinde bulunan yatırımcılar; tahsis sözleşmesinin imza süresi, arsa bedelinin tespiti ve iade gibi konularda zaman zaman belirsizliklerle karşılaşabilmektedir.',
        publishedAt: '17 Nisan 2026',
        readTime: '5 dk okuma',
        content: {
          intro:
            '📌 Organize Sanayi Bölgelerinde (OSB) ön tahsis yöntemiyle arsa talebinde bulunan yatırımcılar; tahsis sözleşmesinin imza süresi, arsa bedelinin tespiti ve ön tahsisin iadesi gibi konularda zaman zaman belirsizliklerle karşılaşabilmektedir.',
          sections: [
            {
              title: '🔎 Altyapı Planlaması ve Tahsis Sürecinde Öngörülebilirlik',
              paragraphs: [
                '🗓️ Kesin arsa tahsis sözleşmesinin imzalanması, altyapının tamamlanma düzeyi ile doğrudan ilişkilidir. Bu durum OSB’nin imkânları ve çalışma programına bağlı olduğundan, kesin ya da tahmini bir tarihin bizzat OSB yönetimi tarafından paylaşılması kritiktir. Mevzuata göre, altyapı tamamlandıktan sonra 3 ay içinde kesin tahsis sözleşmesi imzalanmalıdır. OSB’lerin altyapıya ilişkin bir termin planı sunması, ön tahsis taleplerini ve yatırımcı iştahını kuşkusuz artıracaktır.',
              ],
            },
            {
              title: '💰 Arsa Bedelinin Belirlenmesi',
              paragraphs: [
                '📖 Uygulama Yönetmeliği uyarınca; ön tahsis yapılan hak sahibinin, kesin tahsis aşamasındaki bedele itiraz etme hakkı bulunmamaktadır. Ancak bu durum yatırımcıyı tamamen korumasız ve tüm inisiyatifi OSB’ye bırakmaz. Yönetmeliğin ilgili maddesinde, kesin tahsis bedelinin belirlenme yönteminin ön tahsis sözleşmesinde belirtilmesi gerektiği hüküm altına alınmıştır.',
                '⚖️ Sonuç olarak; OSB’lerin ön tahsis sözleşmesi hazırlarken tahsis bedelinin nasıl belirleneceğine ilişkin yöntemi sözleşmede açıkça belirtmesi hem bir zorunluluktur hem de yatırımcı bağlılığını pekiştirmesi ve oluşabilecek ihtilafların önüne geçilmesi açısından önemlidir.',
              ],
            },
            {
              title: '⚖️ İade Süreçleri ve Hukuki Zemin',
              paragraphs: [
                '💵 Ön tahsis aşamasındaki bir diğer kritik başlık ise ön tahsisten vazgeçilmesi durumunda ödenen bedelin iadesidir. Yönetmelikte iade edilecek bedele dair doğrudan bir düzenleme bulunmasa da (Yönetmelikte hüküm bulunan durumlar/cezai uygulamalar hariç) arsa tahsis iadesi sürecinin kıyasen uygulanabileceğine veya Borçlar Kanunu hükümleri üzerinden hareket edilebileceğine ilişkin görüşler bulunmaktadır.',
                '📝 Bu noktada; iade sürecinin nasıl yürütüleceği, bedel güncellemesi ve ödeme takvimi gibi hususların sözleşmede netleştirilmesi, hem OSB hem de yatırımcı tarafı için süreci öngörülebilir kılacaktır.',
              ],
            },
          ],
          summary: {
            intro: '📊 Özetle; OSB’lerin ön tahsis sürecine başlamadan önce;',
            items: [
              '🏗️ Altyapı tamamlanma programını,',
              '💰 Arsa bedeli belirleme metodolojisini,',
              '🔄 İade süreçlerini,',
            ],
            outro:
              'şeffaf bir şekilde ortaya koyması; yatırımcı nezdinde istikrar sağlayan ve ekosistemi güçlendiren stratejik adımlardır.',
          },
          hashtags: [
            '#OSB',
            '#Sanayi',
            '#Yatırım',
            '#ÖnTahsis',
            '#SanayiBölgeleri',
            '#SanayiYatırımı',
            '#KurumsalYönetim',
            '#Şeffaflık',
            '#YatırımGüveni',
          ],
          sources: [
            { label: '4562 sayılı Organize Sanayi Bölgeleri Kanunu — Mevzuat Bilgi Sistemi', url: 'https://www.mevzuat.gov.tr/' },
            { label: 'T.C. Sanayi ve Teknoloji Bakanlığı — Sanayi Bölgeleri', url: 'https://www.sanayi.gov.tr/' },
            { label: 'Organize Sanayi Bölgeleri Üst Kuruluşu (OSBÜK)', url: 'https://www.osbuk.org.tr/' },
          ],
        },
      },
      {
        id: 'yesil-osb-yol-haritasi',
        title: 'Sanayide Yeşil Dönüşüm Yol Haritası: Yeşil OSB Nasıl Olunur? 🌍🏭',
        excerpt:
          'Sürdürülebilir kalkınma ve Avrupa Yeşil Mutabakatı\'na uyum sürecinde OSB\'lerin dönüşümü çerçevesinde Yeşil OSB Sertifikasyon Sistemi hakkında bilmeniz gerekenler.',
        publishedAt: '18 Nisan 2026',
        readTime: '7 dk okuma',
        content: {
          intro:
            'Sürdürülebilir kalkınma ve Avrupa Yeşil Mutabakatı\'na uyum sürecinde Organize Sanayi Bölgelerinin dönüşümü çerçevesinde Sanayi ve Teknoloji Bakanlığı ile TSE iş birliğinde yürütülen Yeşil OSB Sertifikasyon Sistemi, OSB\'leri sadece ekonomik değil, çevresel ve sosyal performanslarıyla da değerlendiriyor.',
          sections: [
            {
              title: '✅ 1. Adım: "Ön Kriterleri" Sağlamak',
              paragraphs: [
                'Performans puanlamasına geçebilmek için bir OSB\'nin öncelikle şu 6 temel koşulu yerine getirmesi gerekiyor:',
                '1️⃣ OSB\'de üretimde olan en az 1 firmanın bulunması.',
                '2️⃣ Atık suların tümünün arıtılıyor olması.',
                '3️⃣ Enerji üretim kaynağı olarak kömür kullanımının olmaması.',
                '4️⃣ Yönetimin TS EN ISO 14001 (Çevre) ve TS EN ISO 50001 (Enerji) belgelerine sahip olması.',
                '5️⃣ İklim değişikliği biriminin kurulması ve yetkin personel istihdamı.',
                '6️⃣ En az "Temel Seviye Sıfır Atık Belgesi"ne sahip olunması.',
              ],
            },
            {
              title: '📊 2. Adım: Performans Göstergeleri ile Puanlama',
              paragraphs: [
                'Ön kriterleri geçen OSB\'ler, 4 ana kategoride toplam 38 performans göstergesi üzerinden değerlendirilir.',
                '🌿 Çevresel: 17 Gösterge (Ağırlık: %39)',
                '💰 Ekonomik: 10 Gösterge (Ağırlık: %27)',
                '🤝 Sosyal: 6 Gösterge (Ağırlık: %24)',
                '🏛️ Yönetim: 5 Gösterge (Ağırlık: %10)',
              ],
            },
            {
              title: '🚀 3. Adım: Başvuru ve Belgelendirme Süreci',
              paragraphs: [
                '• Başvuru: OSB yönetimi, MEYDİP sistemi üzerinden Bakanlığa başvurur.',
                '• Ön İnceleme: Bakanlık ön kriterleri kontrol eder, uygunsa başvuruyu TSE\'ye iletir.',
                '• Saha Denetimi: Sahada performans göstergelerini denetlenir ve puanlanır.',
                '• Sertifikasyon: 100 üzerinden alınan puana göre Bronz, Gümüş, Altın veya Platin belge düzenlenir.',
                'Belge geçerlilik süresi 3 yıldır, ancak OSB\'lerin her yıl "İyileştirme Raporu" hazırlaması ve iyileştirme raporlarında her bir kritere ilişkin hedeflerini belirlemesi gerekmektedir.',
                'Geleceğin sanayisi, kaynaklarını verimli kullanan ve çevreye saygılı OSB\'ler üzerinde yükselecek.',
              ],
            },
          ],
          hashtags: [
            '#YeşilOSB',
            '#Sürdürülebilirlik',
            '#SanayiVeTeknoloji',
            '#YeşilDönüşüm',
            '#TSE',
            '#OSB',
            '#CleanTech',
          ],
          sources: [
            { label: 'T.C. Sanayi ve Teknoloji Bakanlığı — Yeşil OSB', url: 'https://www.sanayi.gov.tr/' },
            { label: 'T.C. Ticaret Bakanlığı — Avrupa Yeşil Mutabakatı', url: 'https://www.ticaret.gov.tr/' },
            { label: 'Organize Sanayi Bölgeleri Üst Kuruluşu (OSBÜK)', url: 'https://www.osbuk.org.tr/' },
          ],
        },
      },
      {
        id: 'is-surekliligi-plani',
        title: 'Organize Sanayi Bölgelerinin Ekonomik Kalkanı: İş Sürekliliği Planı (İSP)',
        excerpt:
          'OSB Uygulama Yönetmeliği gereği OSB\'lerin bir İş Sürekliliği Planı hazırlaması artık resmi bir yükümlülüktür. İSP\'nin kapsamı ve temel süreçleri hakkında bilmeniz gerekenler.',
        publishedAt: '18 Nisan 2026',
        readTime: '8 dk okuma',
        content: {
          intro:
            'Organize Sanayi Bölgeleri Uygulama Yönetmeliği gereği OSB\'lerin bir İş Sürekliliği Planı (İSP) hazırlaması artık resmi bir yükümlülüktür. Bu kapsamda AFAD\'ın yayımladığı "Organize Sanayi Bölgeleri İçin İş Sürekliliği Planı Hazırlama ve Uygulama Kılavuzu", OSB\'lerin süreci sağlıklı ve sistematik biçimde kurması için temel bir rehber niteliğindedir. Bu kılavuzdan yararlanarak İSP\'nin kapsamını ve temel süreçlerini özetlemeye çalıştım.',
          sections: [
            {
              title: '💡 İSP\'nin Temel Amacı',
              paragraphs: [
                'İSP\'nin temel amacı, bir kesinti durumunda OSB\'nin değer yaratan faaliyetlerini (ürünler, hizmetler) sürdürebilmesini, kurtarabilmesini ve eski haline getirebilmesini sağlayacak yazılı planlar oluşturmaktır. OSB özelinde birincil amaç, misyonun yerine getirilebilmesi için kritik altyapı hizmetlerinin sürekliliğidir.',
              ],
            },
            {
              title: '🎯 İş Sürekliliği Planının Amaç ve Hedefleri',
              paragraphs: [
                '🔌 Kritik Altyapı Hizmetlerinin Sürdürülebilirliği: OSB\'nin misyonunu yerine getirebilmesini sağlayacak düzeyde kritik altyapı hizmetlerinin sürdürebilirliğini sağlamaktır.',
                '🏭 Katılımcı Şirketlerin Desteklenmesi: İSP, bir kesinti sırasında katılımcı şirketlere sağlanan kritik altyapı hizmetlerinin, şirketin kendini kurtarmasının mümkün olamayacağı "kritik eşik" değerin üzerinde bir seviyede sağlanacağına dair garanti vererek katılımcı şirketlerin sürdürülebilirliğini desteklemeyi amaçlar.',
                '🔄 Hızlı Toparlanma ve Dayanıklılık: İSP, OSB\'lerin afet ve acil durumlardan en az düzeyde etkilenmesini, üretim ve istihdam süreçlerinde hızla toparlanabilmesini sağlayacaktır.',
                '🔒 Değer ve İtibarın Korunması: Plan, işletmelerdeki olası can ve mal kayıplarını azaltacak, ticarî itibarlarını sürdürmede ve arttırmada katkı sağlayacaktır.',
                '🛡️ Proaktif Yaklaşım: İSP, bir afet/acil durum sonrasında, kuruluşun değer yaratan faaliyetlerini sürdürebilmesini veya hızlı şekilde eski haline getirebilmesini amaçlayan proaktif bir yaklaşımdır.',
              ],
            },
            {
              title: '📌 İSP Nasıl Çalışır?',
              paragraphs: [
                'Plan, dört aşamalı metodolojik bir süreçten oluşur:',
                '1️⃣ İş Etki Analizi',
                '2️⃣ İş Kurtarma Stratejileri',
                '3️⃣ Plan Hazırlama',
                '4️⃣ Test ve Tatbikatlar',
              ],
            },
            {
              title: '🔁 İSP\'nin SSP/ADP\'den Farkı',
              paragraphs: [
                'İSP, Sivil Savunma Planı (SSP) ve Acil Durum Planı\'ndan (ADP) farklıdır.',
                '📢 SSP ve ADP, Afet ve Acil Durum Yönetiminin araçlarıdır.',
                '🧠 İSP ise İş Sürekliliği Yönetim Sisteminin temel bileşenidir.',
                '➡️ SSP/ADP can ve mal güvenliğine odaklanırken, İSP\'nin amacı kuruluşun değer yaratan faaliyetlerini korumak ve kayıpları azaltmaktır.',
                '✔️ Bu planlar amaçları bakımından farklı olsalar da, acil durumlarda kabul edilebilir işleyişi sürdürmek için birbirlerini tamamlarlar ve hazırlık aşamasında birlikte kullanılabilirler.',
              ],
            },
          ],
          hashtags: [
            '#İşSürekliliği',
            '#OSB',
            '#AfetDirenci',
            '#İşSürekliliğiPlanı',
            '#İSY',
          ],
          sources: [
            { label: 'OSB Uygulama Yönetmeliği — Mevzuat Bilgi Sistemi', url: 'https://www.mevzuat.gov.tr/' },
            { label: 'T.C. Sanayi ve Teknoloji Bakanlığı — Sanayi Bölgeleri', url: 'https://www.sanayi.gov.tr/' },
            { label: 'T.C. AFAD — İş Sürekliliği Rehberleri', url: 'https://www.afad.gov.tr/' },
          ],
        },
      },
      {
        id: 'parsel-tahsis-iptali',
        title: 'Parsel Tahsisinin İptali ve İadesinde Değerleme',
        excerpt:
          'OSB\'lerde tahsis edilen sanayi parsellerinin iade ve iptal süreçlerinde değerleme yöntemleri ve süre uzatımının geri ödemeye etkisi hakkında kritik bilgiler.',
        publishedAt: '18 Nisan 2026',
        readTime: '5 dk okuma',
        content: {
          intro:
            '📘 Organize Sanayi Bölgelerinde tahsis edilen sanayi parselleri, katılımcı tarafından OSB Uygulama Yönetmeliğinin 60\'ıncı maddesinde belirlenen süreler içerisinde istenildiği zaman iade edilebilir veya yine aynı maddede belirtilen sürelerde gerekli ruhsat ve izinlerini almayan katılımcıların tahsisleri OSB tarafından iptal edilir.',
          sections: [
            {
              title: '📌 Tahsis İptal Koşulları',
              paragraphs: [
                'a) Tahsis tarihinden itibaren 1 yıl içerisinde gerçekleştireceği yapıya ait projeleri OSB\'ye tasdik ettirerek yapı ruhsatının alınmaması,',
                'b) Yapı ruhsatı aldığı tarihten itibaren 2 yıl içinde iş yeri açma ve çalışma ruhsatının alınmaması halinde tahsis iptal edilir, ancak mücbir sebeplerin varlığı halinde yönetim kurulu tarafından bu süreler 1\'er yıl uzatılabilir. Ayrıca Bakanlığın da belli şartlarda süre uzatımı yetkisi bulunmaktadır.',
              ],
            },
            {
              title: '🔁 Süre Uzatımı ve Geri Ödeme Farkı',
              paragraphs: [
                'Süre uzatımı alınması veya alınmaması durumuna göre; katılımcı tarafından ödenen arsa tahsis bedellerinin iadesi değişkenlik göstermektedir.',
                '📌 Süre uzatımı verilmeksizin tahsisin iadesi ve iptali durumunda, parsel tahsisi/satışı için ödenen bedel, 213 sayılı Kanun uyarınca belirlenen yeniden değerleme oranı ile güncellenir.',
                '📌 Süre uzatımı verilmesi sonrasında tahsisin iadesi ve iptali durumunda, parsel tahsisi/satışı için ödenen bedel yasal faiz oranı ve yeniden değerleme oranından düşük olanı üzerinden değerlenerek geri ödeme gerçekleştirilmektedir.',
              ],
            },
            {
              title: '⚠️ Pratik Etki ve Tavsiye',
              paragraphs: [
                '2024 yılı yeniden değerleme oranının %43,93 olduğu, kanuni faizin ise 01.06.2024 günü itibariyle %24 olarak belirlendiği göz önüne alındığında, katılımcılara ödenecek tutarlar arasında ciddi farklar oluşabilecektir.',
                '✅ Bu sebeple, özellikle enflasyonun yüksek olduğu dönemlerde bir katılımcının, yatırımı gerçekleştiremeyeceğini anladığında süre uzatımı talep etmek yerine tahsisin iadesini değerlendirmek, geri alacağı tutarın hesabında ciddi fark yaratacaktır.',
              ],
            },
          ],
          hashtags: [
            '#OSB',
            '#ParselTahsis',
            '#Yatırım',
            '#SanayiBölgeleri',
            '#Değerleme',
          ],
          sources: [
            { label: '4562 sayılı Organize Sanayi Bölgeleri Kanunu — Mevzuat Bilgi Sistemi', url: 'https://www.mevzuat.gov.tr/' },
            { label: 'T.C. Sanayi ve Teknoloji Bakanlığı — Sanayi Bölgeleri', url: 'https://www.sanayi.gov.tr/' },
            { label: 'Organize Sanayi Bölgeleri Üst Kuruluşu (OSBÜK)', url: 'https://www.osbuk.org.tr/' },
          ],
        },
      },
      {
        id: 'girisim-ofisi-kulucka-merkezi',
        title:
          'Teknoloji Geliştirme Bölgeleri Alanı Dışında Kuluçka Merkezi Kurulması (Girişimcilik Ofisleri-GO)',
        excerpt:
          '2022 yılından itibaren teknopark yönetici şirketleri, Sanayi ve Teknoloji Bakanlığı izniyle TGB alanı dışında da Kuluçka Merkezleri (Girişim Ofisleri) kurabilmektedir. Sağlanan destekler ve aranan şartlar.',
        publishedAt: '18 Nisan 2026',
        readTime: '4 dk okuma',
        content: {
          intro:
            '📌 2022 yılından itibaren teknopark yönetici şirketleri, Sanayi ve Teknoloji Bakanlığı izniyle Teknoloji Geliştirme Bölgeleri alanı dışında da Kuluçka Merkezleri kurabilmektedir. Girişim Ofisi (GO) olarak da adlandırılan bu yapılar; inovasyonu ve teknoloji tabanlı girişimciliği yalnızca teknopark sınırlarıyla sınırlı kalmadan, şehrin farklı noktalarına yaymayı hedeflemektedir.',
          sections: [
            {
              title: '🏗️ Kuruluşun Başlangıcı ve Gelişimi',
              paragraphs: [
                'Bu çerçevede ilk olarak;',
                '• Ankara Teknoloji Geliştirme Bölgesi (Bilkent Cyberpark) – Ankara Teknoloji Köprüsü Kuluçka Merkezi',
                '• TÜBİTAK Marmara Araştırma Merkezi Teknopark – Marmara Teknokent TÜGİP Kuluçka Merkezi',
                '2022 yılı Eylül ayında ilan edilmiştir.',
                '📊 Bakanlık verilerine göre, en son Boğaziçi Teknopark Batman Girişim Ofisi ilan edilmiş olup, bölge alanları dışında kurulan Girişim Ofisi sayısı 11\'e ulaşmıştır.',
              ],
            },
            {
              title: '💼 Girişimcilere Sağlanan Destek ve Avantajlar',
              paragraphs: [
                'Bölge alanı dışında kurulan bu merkezlerde yer alan girişimciler; ilgili Kanun kapsamındaki tüm destek, teşvik, muafiyet ve istisnalardan (Gelir/Kurumlar Vergisi, KDV, Damga Vergisi istisnaları ile sigorta primi desteği gibi) aynen yararlanabilmektedir.',
              ],
            },
            {
              title: '🧩 İşletmeler İçin Aranan Şartlar',
              paragraphs: [
                'Bu ofislerde yer alacak işletmeler için;',
                '• Teknoloji tabanlı olması,',
                '• Son 3 yıl içerisinde kurulmuş olması,',
                '• Personel sayısının 10 kişiden az olması',
                'şartları aranmaktadır.',
              ],
            },
            {
              title: '🏢 Teknoparkların Kuluçka Merkezi Kurma Kriterleri',
              paragraphs: [
                'Bir teknoparkın bölge alanı dışında kuluçka merkezi kurabilmesi için;',
                '• Bünyesinde halihazırda bir kuluçka merkezinin bulunması,',
                '• Toplam firma sayısının en az %10\'unun kuluçka firması olması,',
                '• Kiralanabilir alanların %5\'inin bu firmalara ayrılmış olması',
                'gerekmektedir.',
                '⏳ Yönetici şirketler, ön kuluçka programındaki girişimcilere bu merkezlerde 18 aya kadar yer tahsisi yapabilmektedir.',
              ],
            },
          ],
          hashtags: [
            '#Teknopark',
            '#Girişimcilik',
            '#İnovasyon',
            '#KuluçkaMerkezi',
            '#GirişimOfisi',
          ],
          sources: [
            { label: 'T.C. Sanayi ve Teknoloji Bakanlığı — Teknoloji Geliştirme Bölgeleri', url: 'https://www.sanayi.gov.tr/' },
            { label: 'KOSGEB — Girişimcilik Destekleri', url: 'https://www.kosgeb.gov.tr/' },
            { label: 'TÜBİTAK — Girişimcilik ve Yenilik Destekleri', url: 'https://www.tubitak.gov.tr/' },
          ],
        },
      },
      {
        id: 'osb-huzur-hakki',
        title: 'Organize Sanayi Bölgelerine Yapılacak Huzur Hakkı Ödemeleri',
        excerpt:
          'OSB organ üyelerine ödenecek huzur haklarının 2025 yılı üst limiti, Cumhurbaşkanlığı Kararı çerçevesinde hesaplama yöntemi ve farklı organlar için ödeme esasları.',
        publishedAt: '18 Nisan 2026',
        readTime: '6 dk okuma',
        content: {
          intro:
            '📌 OSB Uygulama Yönetmeliğinde OSB organ üyelerine ödenecek huzur hakları ile ilgili olarak; "Müteşebbis heyet ile yönetim ve denetim kurullarının üyelerine, müteşebbis heyet tarafından toplantı başına tespit edilen tutarda huzur hakkı ödenebilir. Ödenecek bu huzur hakkının aylık toplam tutarı, her yıl Cumhurbaşkanlığınca belirlenen kamu iktisadi teşebbüsleri ve bağlı ortaklıklarının yönetim kurulu başkan ve üyelerine ödenen net aylık ücreti aşamaz." denilmektedir.',
          sections: [
            {
              title: '📢 Cumhurbaşkanlığı Kararı ve Hesaplama',
              paragraphs: [
                '29/5/2025 tarihli ve 9904 sayılı Cumhurbaşkanı Kararında ödeme sistemi belirlenmiş ve kararda Posta ve Telgraf Teşkilatı A.Ş. ve İller Bankası A.Ş. yönetim kurulu üyelerine (30.720) gösterge rakamının memur aylık katsayısı ile çarpımı sonucunda bulunacak tutarı, yönetim kurulu başkanına bu ücretin iki katını, denetim kurulu üyelerine ise yönetim kurulu üyeleri için belirlenen ücretin 3/4\'ünü aşmayacak şekilde Genel Kurul tarafından belirlenen miktarda net aylık ücret verilir hükmüne yer verilmiştir. Memur aylık katsayısı ise 2025 yılı Ocak-Temmuz dönemi için 1,012556 olarak belirlenmiştir.',
                'Not: "Net" ifadesi bir önceki kararda yer almamaktadır.',
                '🎯 Buradan yapılacak hesap ile 30.720 × 1,012556 = 31.105,72 TL huzur hakları için belirlenen üst limittir. Yılın başında Sanayi Bölgeleri Genel Müdürlüğünce OSB\'lere yapılan bildirimde de üst limitin 31.106 TL olduğu iletilmiştir.',
              ],
            },
            {
              title:
                '💡 Müteşebbis Heyet ve Yönetim Kurulu Başkanlarına Yapılacak Ödemeler',
              paragraphs: [
                'Müteşebbis heyet ile yönetilen OSB\'lerde yetkili organ tarafından karar alınması halinde, yönetim ve denetim kurulu üyelerine ödenebilecek en yüksek tutarın aylık ❗iki katını❗ geçmemek üzere müteşebbis heyet ve yönetim kurulu başkanına ödeme yapılabilir.',
              ],
            },
            {
              title: '💡 Denetim Kuruluna Yapılacak Ödemeler',
              paragraphs: [
                'OSB Uygulama Yönetmeliğinde OSB denetim kurulu üyelerinin ücretlerinin Cumhurbaşkanlığı kararında geçen denetim kurulu üyelerinin ücretleri (yönetim kurulu üyeleri için belirlenen ücretin 3/4\'ünü aşmayacak şekilde) ile değil, yönetim kurulu ücretleri ile sınırlandırıldığı dikkate alındığında, OSB Denetim Kurulu Üyelerine ödenecek huzur hakkı ödemelerinde aylık üst sınır olarak OSB Yönetim Kurulu Üyelerinde olduğu gibi (31.106 TL) belirlenebilecektir.',
              ],
            },
            {
              title: '⚠️ Diğer Ödemeler',
              paragraphs: [
                'OSB organ üyelerine yetkili organ kararı olsa bile huzur hakkı ödemesi dışında prim, ikramiye, komisyon başkan ve üyesi gibi gerekçelerle her ne ad altında olursa olsun farklı bir ödeme yapılamaz. Özetle; CB kararında bahsedilen Ocak ve Temmuz aylarında yapılabileceği belirtilen ek ödemeler OSB\'lerde ödenemeyecektir.',
              ],
            },
            {
              title: '✅ Genel Kurul ile İdare Edilen OSB\'lerde Huzur Hakkı',
              paragraphs: [
                'Genel kurula geçen ve müteşebbis heyetin görevinin sona erdiği OSB\'lerde yönetim ve denetim kurulu üyelerine, genel kurul tarafından tespit edilecek tutarda huzur hakkı ödenebilir.',
              ],
            },
          ],
          hashtags: [
            '#OSB',
            '#HuzurHakkı',
            '#KurumsalYönetim',
            '#SanayiBölgeleri',
            '#MevzuatUygulama',
          ],
          sources: [
            { label: '4562 sayılı Organize Sanayi Bölgeleri Kanunu — Mevzuat Bilgi Sistemi', url: 'https://www.mevzuat.gov.tr/' },
            { label: 'T.C. Resmî Gazete — Cumhurbaşkanlığı Kararları', url: 'https://www.resmigazete.gov.tr/' },
            { label: 'Organize Sanayi Bölgeleri Üst Kuruluşu (OSBÜK)', url: 'https://www.osbuk.org.tr/' },
          ],
        },
      },
    ],
  },
  contact: {
    pageBadge: 'İletişim',
    pageTitleStart: 'Bize',
    pageTitleAccent: 'Ulaşın',
    pageDescription:
      'Projeleriniz ve danışmanlık ihtiyaçlarınız için bizimle iletişime geçin. 24 saat içinde size dönüş yapıyoruz.',
    formTitle: 'Bize Mesaj Gönderin',
    formDescription:
      'Formu doldurun, ekibimiz en kısa sürede size geri dönüş yapsın.',
    formName: 'Ad Soyad',
    formEmail: 'E-posta',
    formPhone: 'Telefon',
    formSubject: 'Konu',
    formMessage: 'Mesajınız',
    formSubmit: 'Mesajı Gönder',
    formSuccess: 'Mesajınız alındı. Kısa sürede size dönüş yapacağız.',
    formCaptchaLabel: 'Güvenlik doğrulaması',
    formCaptchaError: 'Güvenlik doğrulaması hatalı. Lütfen tekrar deneyin.',
    infoTitle: 'İletişim Bilgileri',
    infoPhoneLabel: 'Telefon',
    infoPhoneSub: '',
    infoEmailLabel: 'E-posta',
    linkedinTitle: 'LinkedIn Üzerinden Bağlantı Kurun',
    linkedinDescription:
      'Güncel içerikler, sektörel analizler ve danışmanlık notları için LinkedIn profilimi takip edebilirsiniz.',
    linkedinCta: 'LinkedIn Profilini Görüntüle',
  },
  corporate: {
    pageBadge: 'Kurumsal',
    pageTitleStart: 'OSB ve Ar-Ge Danışmanlığında',
    pageTitleAccent: 'Kamu Tecrübesi',
    pageDescription:
      '15 yıl Sanayi ve Teknoloji Bakanlığı müfettişlik tecrübesiyle; OSB danışmanlığı, Ar-Ge ve Tasarım Merkezi yönetim danışmanlığı ve kurumsal yönetim danışmanlığı hizmetlerinde stratejik çözüm ortağınız.',
    introTitle: 'ANT Yönetim Danışmanlık ve Mühendislik',
    introParagraphs: [
      'ANT Yönetim Danışmanlık ve Mühendislik; sanayi, teknoloji ve kamu yönetimi alanlarında edinilmiş çok disiplinli bilgi birikimiyle kurulmuş; OSB danışmanlığı, Ar-Ge ve Tasarım Merkezi danışmanlığı ve kurumsal yönetim danışmanlığı hizmetlerini tek çatı altında sunan, denetim standartlarını merkeze alan uzman bir yapıdır.',
      'Mühendislik disipliniyle kurguladığımız danışmanlık metodolojimiz; OSB mevzuat uyum süreçlerini, arsa tahsis yönetimini, Teknopark muafiyetlerini ve yeşil dönüşüm süreçlerini veri odaklı bir çerçevede birleştirir. Yapay zeka destekli karar mekanizmalarıyla, geleneksel sanayi yönetimini modern mühendislik vizyonuyla buluşturuyoruz.',
    ],
    founderTitle: 'Kurucumuz',
    founderName: 'İlker Tura',
    founderRole: 'Kurucu',
    founderParagraphs: [
      'Kurucumuz İlker Tura; Elektrik-Elektronik Mühendisliği, İşletme ve Kamu Yönetimi alanlarında aldığı lisans ve yüksek lisans eğitimini, kamuda 15 yılı aşkın tecrübesiyle birleştirerek sanayi ve teknoloji ekosistemine değer katmayı amaçlamaktadır.',
      'Sanayi ve Teknoloji Bakanlığı’nda 2012-2026 yılları arasında Müfettiş Yardımcısı, Müfettiş ve Başmüfettiş olarak görev alan İlker Tura, son olarak 2019-2026 yılları arasında yaklaşık 6,5 yıl Rehberlik ve Teftiş Başkan Yardımcılığı görevini yürütmüştür.',
      'Bu süreçte; Organize Sanayi Bölgeleri (OSB), Teknoloji Geliştirme Bölgeleri, Ar-Ge ve Tasarım Merkezleri ve Endüstri Bölgeleri’nin denetim, mevzuat uyumu ve yönetimsel süreçlerinin koordinasyonunda roller üstlenmiştir. Bu süreçlerde edinilen kapsamlı bilgi birikimi; Ant Yönetim’in çözüm üretme kabiliyetine doğrudan yansımaktadır.',
    ],
    highlights: [
      { label: 'Kamu Tecrübesi', value: '15 Yıl' },
      { label: 'Bakanlık Müfettişliği', value: '2012-2026' },
      { label: 'Rehberlik ve Teftiş Başkan Yardımcılığı', value: '6,5 Yıl' },
    ],
    ctaText: 'Projeleriniz için stratejik çözüm ortağınız olmaya hazırız.',
    ctaLabel: 'Bizimle İletişime Geçin',
  },
  faq: {
    pageBadge: 'Sıkça Sorulan Sorular',
    pageTitleStart: 'OSB, Ar-Ge ve Teşvik Süreçleri Hakkında',
    pageTitleAccent: 'Merak Edilenler',
    pageDescription:
      'Organize Sanayi Bölgesi (OSB) mevzuatı, Ar-Ge ve Tasarım Merkezi kurulumu, Teknopark muafiyetleri ve KOSGEB-TÜBİTAK proje süreçlerine ilişkin en çok sorulan soruları ve uzman yanıtlarını bir arada sunduk.',
    ctaText: 'Sorunuzun cevabını bulamadıysanız bizimle iletişime geçin.',
    ctaLabel: 'Uzmanımıza Sorun',
    categories: [
      {
        title: 'Organize Sanayi Bölgeleri Danışmanlığı',
        description:
          'Organize Sanayi Bölgesi (OSB) tanımı, kuruluşu, organları, altyapı, arsa tahsis ve Yeşil OSB süreçlerine ilişkin en çok sorulan sorular.',
        items: [
          {
            question: 'Organize Sanayi Bölgesi (OSB) nedir ve amacı nedir?',
            answer:
              'OSB; sanayinin uygun görülen alanlarda yapılanmasını sağlamak, çarpık sanayileşme ve çevre sorunlarını önlemek, kentleşmeyi yönlendirmek ve kaynakları rasyonel kullanmak amacıyla kurulan bölgelerdir. Bu alanlar, sanayi türlerinin belirli bir plan dâhilinde yerleştirilmesi için gerekli ortak kullanım alanları, hizmet ve destek alanları ile donatılarak sanayiye tahsis edilen mal ve hizmet üretim bölgeleridir.',
          },
          {
            question: 'OSB’lerin tüzel kişiliği var mıdır?',
            answer:
              'Evet, OSB kuruluşunda yer alan kurum ve kuruluşların temsilcileri ve vali tarafından imzalanmış kuruluş protokolünün Bakanlıkça onaylanması ve sicile kaydı ile OSB tüzel kişilik kazanır. OSB’ler birer özel hukuk tüzel kişiliğidir.',
          },
          {
            question: 'Bir OSB’nin yönetim yapısı (organları) kimlerden oluşur?',
            answer:
              'OSB’nin organları; Müteşebbis Heyet (işletme aşamasına geçildiğinde Genel Kurul), Yönetim Kurulu, Denetim Kurulu ve Bölge Müdürlüğüdür.',
          },
          {
            question: 'OSB’lerdeki firmaların elektrik, su ve doğalgaz gibi altyapı ihtiyaçları nasıl karşılanır?',
            answer:
              'OSB’lerin ihtiyacı olan elektrik, su, kanalizasyon, doğalgaz, arıtma tesisi ve haberleşme gibi altyapı tesislerini kurma, işletme, satın alma ve dağıtımını yapma hakkı sadece OSB’nin yetki ve sorumluluğundadır. OSB’de yer alan kuruluşlar, altyapı ihtiyaçlarını OSB’nin tesislerinden karşılamak zorundadır ve OSB’nin izni olmaksızın altyapı ihtiyaçları başka bir yerden karşılanamaz.',
          },
          {
            question: 'İşletmeler, OSB’nin sunduğu hizmetleri kullanmıyorsa aidat ödemek zorunda mıdır?',
            answer:
              'OSB’nin alt yapı ve müşterek hizmetlerine ait masraflar katılımcılar tarafından karşılanır ve işletmeler belirtilen hizmetlerden yararlanmadıkları gerekçesi ile yönetim aidatlarının ödenmesinden kaçınamaz.',
          },
          {
            question: 'OSBÜK nedir ve OSB’lerin buraya üye olması mecburi midir?',
            answer:
              'OSBÜK (Organize Sanayi Bölgeleri Üst Kuruluşu), OSB’ler arası uygulama birlikteliğini sağlamak, sorunların çözümüne yönelik kurumlar nezdinde girişimde bulunmak ve Bakanlık ile koordinasyonu sağlamak amacıyla kurulmuştur. Tüzel kişilik kazanan tüm OSB’lerin OSBÜK’e üyeliği ve belirlenen aidatı ödemeleri zorunludur.',
          },
          {
            question: 'OSB’de arsa tahsis başvuruları nasıl yapılır ve süreç nasıl işler?',
            answer:
              'Arsa tahsis başvurularının zorunlu olarak Bakanlığın çevrimiçi sisteminden yapılması gerekmektedir. Tahsis edilecek parseller OSB, OSBÜK ve Bakanlık sisteminde duyurulur ve talepler Bakanlıkça belirlenen değerlendirme formu ağırlıklandırma çarpanlarına göre puanlanır. Tahsis edilecek parsellerin talebi karşılamaması halinde en yüksek puanı alandan başlamak üzere kısa liste oluşturulur ve yatırımcılar noter huzurunda kura veya ihaleye davet edilerek tahsis işlemi gerçekleştirilir.',
          },
          {
            question: 'OSB’de tahsis edilen arsada inşaat ve üretime geçme süreleri nelerdir? Süre aşımında ne olur?',
            answer:
              'Yatırımcıların tahsis tarihinden itibaren 1 yıl içerisinde yapı ruhsatı alması ve yapı ruhsatı aldığı tarihten itibaren 2 yıl içinde iş yeri açma ve çalışma ruhsatını alarak üretime geçmesi zorunludur. Makul sebeplerin varlığı halinde bu süreler belirli sınırlar dâhilinde uzatılabilir; aksi takdirde arsa tahsisi iptal edilir. Ayrıca, yasal süreleri tükenmiş olan yatırımcıların tahsis iptali yaşamaması için 31/12/2025 tarihine kadar başvuruda bulunmaları koşuluyla Bakanlık tarafından 31/3/2028 tarihine kadar ilave süre verilebilmektedir.',
          },
          {
            question: 'OSB’de bulunan sanayi parseli başka bir firmaya kiralanabilir mi?',
            answer:
              'Evet, katılımcılar üretim amaçlı olmak üzere tesislerini bir veya birden fazla kiracıya kiralayabilir. Ancak kiralama yapılabilmesi için tesisin geri alım şerhi bulunmayan tapusunun alınmış olması ve 05.09.2024 tarihinden sonra tahsis edilen parseller için geri alım şerhi bulunmayan tapusunun alınmasının üzerinden en az bir yıl geçmiş olması ile OSB’ye vadesi geçmiş borcun bulunmaması gerekmektedir.',
          },
          {
            question: 'OSB sanayi parselleri ifraz (bölünme) veya tevhit (birleştirme) edilebilir mi?',
            answer:
              'İki veya daha fazla sanayi parseli tevhit edilebilir (birleştirilebilir). İfraz işlemi (bölünme) ise arsa spekülasyonunu önleyici kısıtlamalara uyulması, oluşturulan parsellerin en az 3000 m² büyüklükte olması ve Bakanlık onayı alınması gibi spesifik şartlara bağlı olarak gerçekleştirilebilir. Spekülatif amaçlı işlemlerin önlenmesi için de şirket paylarının Bakanlık onayı olmadan %49’dan fazla devredilmemesi taahhüt edilmelidir.',
          },
          {
            question: 'Yeşil OSB sertifikası nedir ve yatırımcıya/OSB’ye ne gibi avantajlar sağlar?',
            answer:
              'Kaynak ve enerji verimliliği, yalın üretim, endüstriyel atık işbirliği ve çevreye duyarlı uygulamaları ile öne çıkan OSB’ler Türk Standardları Enstitüsü (TSE) tarafından “Yeşil OSB” olarak sertifikalandırılır. Yeşil OSB kriterlerini sağlamak üzere hazırlanan projeler Bakanlık kredilendirme süreçlerinde öncelikle değerlendirilir.',
          },
        ],
      },
      {
        title: 'Ar-Ge ve Tasarım Merkezleri Danışmanlığı',
        description:
          '5746 sayılı Kanun kapsamında Ar-Ge ve Tasarım Merkezi kurulum şartları, vergi-SGK teşvikleri, dış görev süreleri, siparişe dayalı projeler ve girişim sermayesi yükümlülüğüne ilişkin sorular.',
        items: [
          {
            question: 'İşletmem bünyesinde Ar-Ge veya Tasarım Merkezi kurmanın şartları nelerdir?',
            answer:
              'Ar-Ge merkezi kurabilmek için ayrı bir birim şeklinde örgütlenmiş ve münhasıran yurt içinde faaliyet gösteren merkezinizde en az 15 tam zaman eşdeğer Ar-Ge personeli istihdam etmeniz gerekmektedir. Tasarım merkezleri için ise en az 10 tam zaman eşdeğer tasarım personeli istihdamı şarttır. Bu sayıları sektörel bazda düşürmeye veya artırmaya Cumhurbaşkanı yetkilidir.',
          },
          {
            question: 'Ar-Ge ve Tasarım Merkezlerine sağlanan temel vergi ve SGK teşvikleri nelerdir?',
            answer:
              'Merkezlerde gerçekleştirilen Ar-Ge, yenilik ve tasarım harcamalarının %100’ü kurumlar veya gelir vergisi matrahından indirilir. Ayrıca istihdam edilen personelin eğitim durumuna göre (örneğin doktoralılar için %95, yüksek lisanslılar için %90, diğerleri için %80) muhtasar beyanname üzerinden gelir vergisi stopaj teşviki, brüt ücretler üzerinden hesaplanan SGK işveren hissesinin yarısı tutarında prim desteği ve projeler kapsamında düzenlenen belgeler için damga vergisi ile gümrük vergisi istisnası sağlanmaktadır.',
          },
          {
            question: 'Merkez personeli projeler için dışarıda (merkez dışında) çalışabilir mi? Bu süreler teşvik kapsamında mıdır?',
            answer:
              'Evet. Proje kapsamındaki faaliyetlerin zorunlu olarak merkez dışında yürütülmesi gereken kısımları ile yüksek lisans yapanlar için bir buçuk yılı, doktora yapanlar için iki yılı geçmemek üzere eğitim için dışarıda geçirilen süreler teşvik kapsamındadır. Buna ek olarak, Ar-Ge ve Tasarım Merkezlerinde, personelin merkez dışında geçirdiği sürelerin (uzaktan çalışma, saha çalışmaları vb.) gelir vergisi stopaj teşviki kapsamındaki süre oranları 31/12/2026 tarihine kadar uzatılmıştır. Bu kapsamda bilişim personeli için bu oran %100, diğer personel için ise %75 olarak uygulanmaktadır.',
          },
          {
            question: 'Siparişe dayalı yürütülen Ar-Ge ve tasarım projeleri destek kapsamında mıdır?',
            answer:
              'Evet. Siparişe dayalı yürütülen projelerde yapılan harcamaların %50’si Ar-Ge/Tasarım merkezi tarafından, kalan %50’si ise siparişi veren mükellef tarafından indirim konusu yapılabilmektedir.',
          },
          {
            question: 'Girişim Sermayesi yükümlülüğü nedir?',
            answer:
              'Yıllık beyanname üzerinden yararlanılan Ar-Ge indirim tutarı 5.000.000 TL ve üzerinde olan kurumlar vergisi mükellefleri, bu tutarın %3’ünü (yıllık 100.000.000 TL’ye kadar) pasifte geçici bir hesaba aktarmak ve bu fonu yıl sonuna kadar Girişim Sermayesi Yatırım Fonlarına veya girişimcilere yatırım olarak kullanmak zorundadır. Aktarımın yapılmaması durumunda, indirim konusu yapılan tutarın %20’si iptal edilerek vergi cezası kesilir.',
          },
        ],
      },
      {
        title: 'Teknoloji Geliştirme Bölgeleri (TGB / Teknopark) Danışmanlığı',
        description:
          '4691 sayılı Kanun kapsamındaki TGB vergi muafiyetleri, doktora ve temel bilimler istihdam destekleri, girişim sermayesi yükümlülüğü ile kuluçka merkezlerine ilişkin sorular.',
        items: [
          {
            question: 'Teknoloji Geliştirme Bölgelerinde (TGB) faaliyet gösteren firmalar için vergi muafiyetleri nelerdir?',
            answer:
              'TGB’de faaliyet gösteren gelir ve kurumlar vergisi mükelleflerinin, münhasıran bu bölgedeki yazılım, tasarım ve Ar-Ge faaliyetlerinden elde ettikleri kazançlar 31/12/2028 tarihine kadar gelir ve kurumlar vergisinden müstesnadır. Ayrıca, bölgede üretilen sistem yönetimi, veri yönetimi, iş uygulamaları, mobil, internet ve oyun gibi yazılım teslim ve hizmetleri de KDV’den istisnadır.',
          },
          {
            question: 'TGB firmaları, doktora ve temel bilimler mezunlarını istihdam ederken özel bir destek alabiliyor mu?',
            answer:
              'Evet. Matematik, fizik, kimya, biyoloji, biyokimya, biyoteknoloji, endüstriyel tasarım, endüstriyel tasarım mühendisliği, metalurji ve malzeme mühendisliği, moleküler biyoloji ve genetik gibi Bakanlıkça onaylı “Desteklenecek Program” mezunlarını istihdam eden firmalara, personelin o yıl için uygulanan asgari ücretin brüt tutarı kadarlık kısmı 2 yıl süreyle Bakanlıkça karşılanır. Ayrıca TGB firmalarının ilk kez istihdam ettikleri doktora öğrencisi Ar-Ge personeli için de brüt asgari ücret tutarı kadar teşvik, iki yıl süreyle Bakanlıkça desteklenmektedir.',
          },
          {
            question: 'TGB firmaları için Girişim Sermayesi Fonu ayırma zorunluluğu var mıdır?',
            answer:
              'Evet. TGB’de elde edilen istisna kazanç tutarı 5.000.000 TL ve üzerinde olan kurumlar vergisi mükellefleri, bu tutarın %3’ünü (yıllık 100.000.000 TL’ye kadar) pasifte geçici bir hesaba aktarmak ve bu fonu yıl sonuna kadar Girişim Sermayesi Yatırım Fonlarına veya girişimcilere yatırım olarak kullanmak zorundadır. Aktarımın yapılmaması durumunda, indirim konusu yapılan tutarın %20’si iptal edilerek vergi cezası kesilir.',
          },
          {
            question: 'TGB Kuluçka Merkezi (İnkübatör) nedir ve kimler yer alabilir?',
            answer:
              'Kuluçka merkezleri, genç ve yeni işletmeleri geliştirmek amacıyla girişimcilere ofis, donanım, danışmanlık ve teknik destek hizmetlerinin tek elden sağlandığı yapılardır. Kuruluşunun üzerinden en fazla üç yıl geçmiş olan Ar-Ge, yazılım ve tasarım firmaları, kuluçka merkezlerinde yer tahsisi alarak (en fazla 36 ay) kira indirimleri gibi önemli mali avantajlardan faydalanabilmektedir.',
          },
        ],
      },
    ],
  },
  legal: {
    lastUpdatedLabel: 'Son güncelleme',
    lastUpdatedDate: '23 Nisan 2026',
    disclaimer:
      'Bu metin bilgilendirme amaçlı hazırlanmıştır ve hukuki görüş niteliği taşımaz. Kurumsal düzeyde tam metin için lütfen hukuk danışmanınıza başvurunuz.',
    privacy: {
      pageBadge: 'Yasal',
      pageTitleStart: 'Gizlilik',
      pageTitleAccent: 'Politikası',
      pageDescription:
        'ANT Yönetim Danışmanlık olarak ziyaretçi gizliliğini önemsiyoruz. Bu politika; hangi verileri neden topladığımızı, nasıl kullandığımızı ve haklarınızı sade bir dille özetler.',
      sections: [
        {
          title: 'Topladığımız Veriler',
          paragraphs: [
            'İletişim formu üzerinden ilettiğiniz verileri topluyoruz: ad-soyad, e-posta adresi, telefon numarası, konu başlığı ve mesaj içeriği.',
            'Bunlara ek olarak, dil tercihinizi hatırlamak için tarayıcınızın yerel deposunda (localStorage) “tr” veya “en” değeri saklanır. Bu bir çerez değildir; üçüncü taraflarla paylaşılmaz.',
            'Sitemiz analitik veya reklam takibi amacıyla kişisel veri toplamaz; Google Analytics, Facebook Pixel vb. takip araçları kullanmaz.',
          ],
        },
        {
          title: 'Verilerin Kullanım Amacı',
          paragraphs: [
            'İletişim formu verileri yalnızca talebinize dönüş yapmak ve danışmanlık süreçlerimizi yürütmek amacıyla kullanılır.',
            'Pazarlama iletisi gönderimi için e-posta listesi tutmuyoruz; açık rızanız olmadan ticari ileti göndermiyoruz.',
          ],
        },
        {
          title: 'Üçüncü Taraf Hizmet Sağlayıcıları',
          paragraphs: [
            'İletişim formu gönderimi için FormSubmit (formsubmit.co) hizmetini kullanıyoruz. Formdan gelen veriler bu servis üzerinden kurumsal@antyonetim.com adresimize iletilir. FormSubmit Amerika Birleşik Devletleri’nde faaliyet göstermektedir; bu nedenle bir yurt dışı veri aktarımı söz konusudur.',
            'Site font dosyaları Google Fonts üzerinden yüklenmektedir. Google Fonts standart yükleme sürecinde IP adresi gibi teknik bilgileri işleyebilmektedir.',
          ],
        },
        {
          title: 'Veri Saklama Süresi',
          paragraphs: [
            'İletişim formu üzerinden iletilen verileri yalnızca talebin çözümlenmesi ve olası bir sözleşme sürecinin yürütülmesi için gerekli süre boyunca saklıyoruz. Bu süre genellikle son iletişimden itibaren 2 yıldır; mevzuattaki özel saklama yükümlülükleri saklıdır.',
          ],
        },
        {
          title: 'Güvenlik Önlemleri',
          paragraphs: [
            'Site HTTPS şifreleme ile yayınlanır. İletişim formunda otomatik gönderimlere karşı güvenlik doğrulaması (basit matematik sorusu) ve honeypot alanı bulunur.',
          ],
        },
        {
          title: 'Çerezler Hakkında',
          paragraphs: [
            'Sitemiz analitik veya reklam çerezi kullanmaz. Yalnızca dil tercihinin korunması için tarayıcı yerel deposundan faydalanılır. Ayrıntı için Çerez Politikamıza bakabilirsiniz.',
          ],
        },
        {
          title: 'Haklarınız ve İletişim',
          paragraphs: [
            '6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamındaki haklarınız için KVKK Aydınlatma Metni sayfamızı inceleyebilirsiniz.',
            'Gizlilikle ilgili her türlü talep ve sorunuz için kurumsal@antyonetim.com adresinden bize ulaşabilirsiniz.',
          ],
        },
      ],
    },
    kvkk: {
      pageBadge: 'Yasal',
      pageTitleStart: 'KVKK Aydınlatma',
      pageTitleAccent: 'Metni',
      pageDescription:
        '6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca; veri sorumlusu sıfatıyla ANT Yönetim Danışmanlık tarafından işlenen kişisel verilerinize ilişkin aydınlatma metni.',
      sections: [
        {
          title: '1. Veri Sorumlusu',
          paragraphs: [
            'Bu aydınlatma metni; veri sorumlusu sıfatıyla ANT Yönetim Danışmanlık tarafından, 6698 sayılı KVKK’nın 10. maddesi gereğince hazırlanmıştır.',
            'İletişim: kurumsal@antyonetim.com · +90 (506) 986 26 20',
          ],
        },
        {
          title: '2. İşlenen Kişisel Veri Kategorileri',
          paragraphs: [
            'Kimlik verisi: ad-soyad.',
            'İletişim verisi: e-posta adresi, telefon numarası.',
            'Müşteri işlem verisi: iletişim formu konusu ve mesaj içeriği.',
            'İşlem güvenliği verisi: formun doldurulma süresi ve güvenlik doğrulaması yanıtı (bot trafiği tespiti için).',
          ],
        },
        {
          title: '3. Kişisel Verilerin İşlenme Amaçları',
          paragraphs: [
            'Ziyaretçi talep ve sorularının karşılanması, danışmanlık hizmetleri hakkında bilgi verilmesi.',
            'Olası bir danışmanlık sözleşmesinin kurulması ve ifasının gerçekleştirilmesi.',
            'Elektronik ticari iletilerin tâbi olduğu mevzuata uygun iletişim yönetimi.',
            'Bot trafiği ve kötü niyetli form gönderimlerinin önlenmesi amacıyla sınırlı işlem güvenliği süreçleri.',
          ],
        },
        {
          title: '4. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi',
          paragraphs: [
            'Veriler; sitemiz üzerinden ilettiğiniz iletişim formu aracılığıyla elektronik ortamda toplanmaktadır.',
            'Hukuki sebep olarak; KVKK 5/2-c (bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması) ve KVKK 5/2-f (ilgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaati) ile 5/1 (açık rıza) dayanakları kullanılmaktadır.',
          ],
        },
        {
          title: '5. Kişisel Verilerin Aktarılması',
          paragraphs: [
            'İletişim formu teslimi için FormSubmit (formsubmit.co) hizmet sağlayıcısı kullanılmakta ve form verileri bu servise iletilmektedir. FormSubmit ABD merkezlidir; bu nedenle yurt dışı aktarım gerçekleşmektedir. Bu aktarım, hizmetin gerçekleştirilmesi için zorunlu olup sözleşmenin ifasına yöneliktir.',
            'Mevzuat kapsamında yetkili kamu kurum ve kuruluşlarının talebi halinde, yasal yükümlülük gereği aktarım yapılabilir.',
          ],
        },
        {
          title: '6. Saklama Süresi',
          paragraphs: [
            'Kişisel veriler; işleme amaçlarının gerektirdiği süre ile sınırlı olmak kaydıyla, ilgili mevzuatta öngörülen süreler boyunca saklanır. Form verileri için standart saklama süresi iletişimin son bulduğu tarihten itibaren 2 yıldır.',
          ],
        },
        {
          title: '7. KVKK 11. Madde Kapsamındaki Haklarınız',
          paragraphs: [
            'Kişisel verilerinizin işlenip işlenmediğini öğrenme; işlenmişse buna ilişkin bilgi talep etme; işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme; yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme; eksik veya yanlış işlenmişse düzeltilmesini isteme; silinmesini veya yok edilmesini isteme; düzeltme, silme veya yok etme işlemlerinin üçüncü kişilere bildirilmesini isteme; işlenen verilerin münhasıran otomatik sistemlerle analizi neticesinde aleyhinize bir sonuç doğması halinde buna itiraz etme; kanuna aykırı işleme nedeniyle zarara uğramanız halinde zararın giderilmesini talep etme haklarına sahipsiniz.',
          ],
        },
        {
          title: '8. Başvuru Yöntemi',
          paragraphs: [
            'KVKK 11. madde kapsamındaki haklarınıza ilişkin başvurularınızı kurumsal@antyonetim.com e-posta adresimiz üzerinden yazılı olarak iletebilirsiniz. Başvurularınız 6698 sayılı Kanun’un 13. maddesi uyarınca en geç 30 gün içinde sonuçlandırılır.',
          ],
        },
      ],
    },
    cookies: {
      pageBadge: 'Yasal',
      pageTitleStart: 'Çerez',
      pageTitleAccent: 'Politikası',
      pageDescription:
        'Sitemiz reklam veya analitik çerezi kullanmaz. Bu sayfada kullandığımız sınırlı istemci-tarafı depolama yöntemlerini ve üçüncü taraf hizmetlerinden kaynaklı istekleri şeffaf biçimde açıklarız.',
      sections: [
        {
          title: 'Çerez Nedir?',
          paragraphs: [
            'Çerezler; bir web sitesini ziyaret ettiğinizde tarayıcınıza yerleştirilen küçük metin dosyalarıdır. Oturum yönetimi, kullanıcı tercihleri veya ziyaretçi analizi gibi farklı amaçlarla kullanılabilir.',
          ],
        },
        {
          title: 'Sitemizin Çerez Kullanımı',
          paragraphs: [
            'Sitemizde analitik, reklam veya profilleme çerezleri yoktur. Google Analytics, Facebook Pixel, Hotjar vb. üçüncü taraf takip araçları kullanılmamaktadır.',
            'Dil tercihinizi hatırlamak için tarayıcınızın yerel deposunda (localStorage) “ant-lang” adlı bir anahtar saklanır. Bu teknik olarak çerez değildir; ağ üzerinden sunucuya gönderilmez, yalnızca cihazınızda saklanır.',
          ],
        },
        {
          title: 'Üçüncü Taraf Hizmetlerinden Kaynaklı İstekler',
          paragraphs: [
            'Google Fonts: Site tipografisi için fonts.googleapis.com ve fonts.gstatic.com alan adlarından font dosyaları yüklenir. Google Fonts, standart yükleme sürecinde IP adresi gibi teknik bilgileri işleyebilmektedir. Google, bu verilerle reklam hedeflemesi yapmadığını beyan eder.',
            'FormSubmit: Yalnızca iletişim formu gönderimi sırasında formsubmit.co adresine istek yapılır; pasif olarak çerez bırakmaz.',
          ],
        },
        {
          title: 'Çerez Tercihleri ve Silme',
          paragraphs: [
            'Tarayıcınızın ayarlarından yerel depoyu ve çerezleri her zaman silebilir, engelleyebilir veya yönetebilirsiniz. Dil tercihi silindiğinde bir sonraki ziyarette tarayıcınızın dili algılanacak ve uygun dil otomatik seçilecektir.',
            'Chrome: Ayarlar → Gizlilik ve Güvenlik → Çerezler ve diğer site verileri.',
            'Safari: Tercihler → Gizlilik → Tüm Web Sitesi Verilerini Yönet.',
            'Firefox: Seçenekler → Gizlilik ve Güvenlik → Çerezler ve Site Verileri.',
          ],
        },
      ],
    },
  },
  osbPillar: {
    pageBadge: 'Kapsamlı Rehber',
    pageTitleStart: 'OSB Danışmanlığı —',
    pageTitleAccent: 'Tüm Süreçler Tek Rehberde',
    pageDescription:
      'Organize Sanayi Bölgesi (OSB) mevzuatı, arsa tahsis yönetimi, organ yönetimi, altyapı projeleri, Yeşil OSB dönüşümü, Akıllı OSB dijitalleşmesi ve iş sürekliliği süreçlerini tek çatı altında bulabileceğiniz kapsamlı danışmanlık rehberi.',
    tocTitle: 'Bu Rehberde Neler Var?',
    sections: [
      {
        id: 'osb-nedir',
        title: 'OSB Nedir ve Neden Önemlidir?',
        paragraphs: [
          'Organize Sanayi Bölgesi (OSB); sanayinin planlı biçimde yapılanmasını, belirli standartlar altında üretim yapmasını ve çevresel sürdürülebilirlik açısından denetlenebilir olmasını sağlamak amacıyla kurulan mal ve hizmet üretim bölgeleridir. 4562 sayılı Organize Sanayi Bölgeleri Kanunu temel düzenleyici çerçevedir.',
          'Türkiye sanayisinin omurgasını oluşturan 300’ün üzerinde OSB, sanayi üretiminin önemli bir bölümünü gerçekleştirir. Bu bölgelerde faaliyet gösteren katılımcılar; altyapı, enerji, atık yönetimi ve çevre sürdürülebilirliği açısından OSB yönetimiyle sürekli etkileşim içerisindedir.',
          'Bir OSB’nin başarısı yalnızca parsel tahsisi ile sınırlı değildir; kurumsal yönetim kalitesi, mevzuata uyum, mali disiplin, altyapı bakımı ve dijital dönüşüm kapasitesi uzun vadeli performansı belirler. Bu nedenle OSB’ler giderek daha profesyonel bir yönetim anlayışına geçmektedir.',
        ],
      },
      {
        id: 'mevzuat',
        title: 'OSB Mevzuatı ve 4562 sayılı Kanun',
        paragraphs: [
          '4562 sayılı Organize Sanayi Bölgeleri Kanunu; OSB’lerin kuruluşunu, organlarını, altyapı çalışmalarını, katılımcı sözleşmelerini ve denetim süreçlerini düzenler. Kanun, OSB Uygulama Yönetmeliği ile detaylandırılır.',
          'Uygulama Yönetmeliği; Müteşebbis Heyet, Genel Kurul, Yönetim Kurulu ve Denetim Kurulu gibi organların görev-yetki-sorumluluk çerçevesini, arsa tahsis prosedürlerini, altyapı projelerini, ihale süreçlerini, bakanlık kredilerini ve hakediş yönetimini kapsayan operasyonel kuralları içerir.',
          'Mevzuat uyumu, yalnızca bir yasal zorunluluk değil; organ üyelerinin hukuki ve cezai sorumluluklarını da doğrudan etkileyen kritik bir süreçtir. Kararların mevzuata uygun alınması, tutanakların doğru düzenlenmesi ve katılımcı sözleşmelerinin özenle hazırlanması olası ihtilaf risklerini minimize eder.',
        ],
        bullets: [
          'Düzenleyici temel metin: 4562 sayılı OSB Kanunu',
          'İkincil mevzuat: OSB Uygulama Yönetmeliği',
          'Karar organları: Müteşebbis Heyet, Genel Kurul, Yönetim ve Denetim Kurulu',
          'Kamu denetim mekanizması: Sanayi ve Teknoloji Bakanlığı denetimleri',
        ],
      },
      {
        id: 'arsa-tahsis',
        title: 'Arsa Tahsis Süreci: Ön Tahsis, Tahsis ve İptal',
        paragraphs: [
          'OSB’de arsa tahsisi; katılımcının yatırım niteliği, sektör uyumu ve mali yeterliliği değerlendirildikten sonra Yönetim Kurulu kararıyla önce ön tahsis, ardından tahsis şeklinde yapılır. Ön tahsis; belirli süre içinde yatırım ve üretim taahhütlerinin yerine getirilmesi şartıyla tahsise dönüştürülür.',
          'Ön tahsis aşamasında kesin tahsis bedelinin belirleme yöntemi sözleşmede açıkça belirtilmelidir. Aksi halde enflasyon, arsa değerleme farklılıkları ve döviz kurunun değişmesi; taraflar arasında ihtilaf doğurabilir. Nitekim mevzuat, pre-allocation bedelinin hesaplanma yönteminin önceden yazılı olarak belirlenmesini aramaktadır.',
          'Mevzuatta belirtilen sürelerde yatırımın başlamaması, üretime geçilmemesi veya taahhütlere uyulmaması durumunda tahsis iptal edilebilir. İptal süreci; geri ödeme değerlemesi, süre uzatımlarının hukuki etkisi ve olası tazminat talepleri açısından profesyonel olarak yönetilmelidir.',
        ],
      },
      {
        id: 'organ-yonetimi',
        title: 'Organ Yönetimi ve Sorumluluklar',
        paragraphs: [
          'OSB’nin karar organları; kuruluş aşamasında Müteşebbis Heyet, sicil kaydından sonra Genel Kurul, Yönetim Kurulu ve Denetim Kurulu’dur. Her organın görevi, yetki sınırı ve ödeme esasları Uygulama Yönetmeliği ile açıkça tanımlanmıştır.',
          'Organ üyelerinin hukuki ve cezai sorumlulukları büyük önem taşır. Mevzuata aykırı alınmış bir karar; üyelerin şahsi mal varlığını, sonraki dönemlerde kamu ihalelerinden men durumunu ve çeşitli yaptırımları etkileyebilir. Huzur hakkı ödemeleri de Cumhurbaşkanlığı Kararı ile belirlenen üst limitlere tâbidir.',
          'Kurumsal yönetim kalitesini artırmak için prensip kararlar, yönergeler, iç işleyiş kuralları ve denetim raporlarının düzenli güncellenmesi kritik önemdedir.',
        ],
      },
      {
        id: 'altyapi',
        title: 'Altyapı Proje Yönetimi ve İhale Süreçleri',
        paragraphs: [
          'Bir OSB’nin değer önerisi; elektrik, su, kanalizasyon, doğalgaz, arıtma tesisi ve iletişim altyapısının zamanında ve kaliteli biçimde sunulmasıyla doğrudan ilişkilidir. Bu nedenle altyapı proje yönetimi, OSB’nin en görünür ve en maliyetli süreçlerinden biridir.',
          'Sanayi ve Teknoloji Bakanlığı kredi destekleri ve altyapı giderleri için borçlanma süreçleri; hakediş raporlarının vize süreçleri, ihale yönetimi ve hizmet sözleşmelerinin hazırlanması gibi teknik alanlarda uzmanlık gerektirir.',
          'İhale yönetiminde şeffaflık, rekabetçi fiyatlandırma ve mevzuata tam uyum; hem katılımcıların hem denetim mekanizmalarının güvenini korumanın temel şartıdır.',
        ],
      },
      {
        id: 'yesil-osb',
        title: 'Yeşil OSB ve Sürdürülebilirlik',
        paragraphs: [
          'Yeşil OSB; enerji verimliliği, yenilenebilir enerji kullanımı, atık yönetimi, su tasarrufu ve karbon ayak izi gibi sürdürülebilirlik kriterleri çerçevesinde Sanayi ve Teknoloji Bakanlığı tarafından sertifikalandırılan bir performans düzeyidir.',
          'Avrupa Yeşil Mutabakatı ve sınırda karbon düzenlemesi (CBAM) ile uyum; ihracatçı sanayi kuruluşları için artık opsiyonel değil; rekabet gücünün temel belirleyicisidir. Yeşil OSB’ler bu dönüşümü bölgesel düzeyde mümkün kılar.',
          'Sertifikasyon süreci; öz değerlendirme, yerinde denetim ve puanlama aşamalarını içerir. Stratejik bir yol haritasıyla süreç yönetildiğinde Yeşil OSB sertifikası; marka değeri, katılımcı çekiciliği ve kamu destekleri açısından ciddi avantajlar getirir.',
        ],
      },
      {
        id: 'akilli-osb',
        title: 'Akıllı OSB ve Dijital Dönüşüm',
        paragraphs: [
          'Akıllı OSB; büyük veri, yapay zeka, IoT ve süreç otomasyonu teknolojilerinin OSB yönetimine entegre edildiği çağdaş yönetim modelidir. Enerji ölçümü, atık yönetimi, güvenlik, katılımcı iletişimi ve operasyonel raporlama süreçleri dijital altyapıya taşınır.',
          'Dijital arşivleme ve kurumsal hafızanın korunması; organ değişikliklerinde bilgi kaybını önlemek, denetim süreçlerini hızlandırmak ve karar kalitesini artırmak için kritik öneme sahiptir.',
          'Veri odaklı karar destek mekanizmaları; yatırım değerlendirmesi, arsa tahsis önceliklendirmesi ve altyapı planlamasında OSB yöneticilerine somut avantaj sağlar.',
        ],
      },
      {
        id: 'is-surekliligi',
        title: 'İş Sürekliliği ve Risk Yönetimi',
        paragraphs: [
          'Endüstriyel altyapıların afetlere, siber saldırılara ve beklenmedik kesintilere karşı dayanıklılığı artık OSB’ler için bir yükümlülüktür. OSB Uygulama Yönetmeliği çerçevesinde İş Sürekliliği Planı (İSP) hazırlığı resmi bir süreç haline gelmiştir.',
          'İSP; kritik süreçlerin kesintisiz devamı için risk analizi, müdahale planları, yedekleme stratejileri ve kurtarma prosedürlerini içerir. Planın uygulanabilirliği, düzenli tatbikatlar ve güncel risk değerlendirmeleriyle test edilir.',
          'Acil durum yönetimi; geleneksel yöntemlerin ötesinde, dayanıklılık (resilience) odaklı stratejik bir yaklaşım gerektirir. Bu, hem mevzuat uyumu hem de paydaş güveni açısından kritik bir ayırt edici unsurdur.',
        ],
      },
      {
        id: 'ant-ile-calisma',
        title: 'ANT Yönetim Danışmanlık ile Çalışma Süreci',
        paragraphs: [
          'ANT Yönetim Danışmanlık olarak; 15 yıllık Sanayi ve Teknoloji Bakanlığı müfettişlik tecrübesiyle OSB’lerin kuruluşundan işletmesine, mevzuat uyumundan dijital dönüşümüne kadar tüm süreçlerde stratejik çözüm ortağıyız.',
          'Çalışma sürecimiz; ücretsiz ön görüşme, ihtiyaç analizi, kapsam tanımlama, yol haritası oluşturma, uygulama ve izleme aşamalarından oluşur. Her projede; mühendislik disipliniyle hazırlanmış iş planı, ölçülebilir çıktılar, düzenli raporlama ve denetim hazırlığı içeren bir yapı sunarız.',
          'Sıfır hata prensibi, veri odaklı karar destek mekanizmaları ve kamu tecrübesi; bizi sadece bir danışman değil, OSB’nin uzun vadeli başarısının ortağı haline getirir.',
        ],
      },
    ],
    ctaHeading: 'OSB süreçleriniz için stratejik çözüm ortağı arıyorsanız',
    ctaText:
      'Ücretsiz ön görüşme ile ihtiyaçlarınızı bağlayıcı olmayan şekilde birlikte değerlendirelim.',
    ctaLabel: 'Ücretsiz Ön Görüşme Planlayın',
  },
  glossary: {
    pageBadge: 'OSB, Ar-Ge ve Teşvik Sözlüğü',
    pageTitleStart: 'OSB ve Sanayi',
    pageTitleAccent: 'Terimler Sözlüğü',
    pageDescription:
      'Organize Sanayi Bölgesi (OSB), Ar-Ge ve Tasarım Merkezi, Teknopark, KOSGEB-TÜBİTAK ve yeşil dönüşüm süreçlerinde sıkça karşılaşılan 50+ temel kavramın özet açıklamaları.',
    searchPlaceholder: 'Terim ara…',
    emptyState: 'Aradığınız terime ilişkin sonuç bulunamadı.',
    backToTop: 'Yukarı çık',
    categories: [
      {
        title: 'Organize Sanayi Bölgesi (OSB)',
        terms: [
          {
            term: 'Organize Sanayi Bölgesi (OSB)',
            definition:
              'Sanayinin uygun görülen alanlarda yapılanmasını sağlamak amacıyla 4562 sayılı Kanun kapsamında kurulan, altyapısı ortaklaşa sunulan mal ve hizmet üretim bölgesi.',
          },
          {
            term: '4562 sayılı OSB Kanunu',
            definition:
              'Organize Sanayi Bölgelerinin kuruluşunu, organlarını, altyapı ve denetim süreçlerini düzenleyen temel yasal çerçeve.',
          },
          {
            term: 'OSB Uygulama Yönetmeliği',
            definition:
              '4562 sayılı Kanun’un uygulanmasına ilişkin ayrıntılı hükümleri düzenleyen, prosedürel konuları kapsayan ikincil mevzuat.',
          },
          {
            term: 'Müteşebbis Heyet',
            definition:
              'OSB’nin kuruluş aşamasında karar organı olarak görev yapan; il özel idaresi, belediye, ticaret/sanayi odası ve sanayici temsilcilerinden oluşan kurul.',
          },
          {
            term: 'Genel Kurul',
            definition:
              'Müteşebbis Heyetin yerini alan; katılımcıların temsil edildiği en üst karar organı. OSB sicile kaydından sonra göreve gelir.',
          },
          {
            term: 'Yönetim Kurulu',
            definition:
              'OSB’nin icrai organı; arsa tahsisi, ihale, sözleşmeler ve günlük operasyon kararlarını alır.',
          },
          {
            term: 'Denetim Kurulu',
            definition:
              'OSB’nin mali ve idari işlemlerini denetleyen; raporunu Genel Kurul’a sunan bağımsız organ.',
          },
          {
            term: 'Bölge Müdürlüğü',
            definition:
              'OSB’nin günlük idari ve teknik hizmetlerini yürüten profesyonel yönetim birimi.',
          },
          {
            term: 'Katılımcı',
            definition:
              'OSB içinde parsel tahsisi almış ve faaliyet gösteren sanayi kuruluşu.',
          },
          {
            term: 'Ön Tahsis',
            definition:
              'Yatırım ve üretim taahhütlerine bağlı olarak, kesin tahsise dönüşmek üzere verilen geçici arsa tahsisi.',
          },
          {
            term: 'Kesin Tahsis',
            definition:
              'Ön tahsis şartlarının yerine getirilmesinin ardından, katılımcıya arsa üzerinde kalıcı hak veren tahsis işlemi.',
          },
          {
            term: 'Tahsis İptali',
            definition:
              'Katılımcının yatırım veya üretim taahhütlerini süresinde yerine getirmemesi halinde Yönetim Kurulu tarafından tahsisin geri alınması.',
          },
          {
            term: 'Huzur Hakkı',
            definition:
              'OSB organ üyelerine, toplantı başına veya aylık olarak ödenen; Cumhurbaşkanlığı Kararı ile belirlenen üst limite tâbi ücret.',
          },
          {
            term: 'Bakanlık Kredisi',
            definition:
              'Sanayi ve Teknoloji Bakanlığı’nca OSB’lerin altyapı ve genel idare giderleri için sağlanan kredi desteği.',
          },
          {
            term: 'Hakediş Raporu',
            definition:
              'Altyapı projelerinde ilerleme düzeyine göre hak edilen ödeme tutarını ortaya koyan teknik belge.',
          },
          {
            term: 'Yeşil OSB',
            definition:
              'Enerji verimliliği, atık yönetimi ve karbon ayak izi kriterleri çerçevesinde Bakanlıkça sertifikalandırılan sürdürülebilirlik performans düzeyi.',
          },
          {
            term: 'Akıllı OSB',
            definition:
              'Büyük veri, yapay zeka, IoT ve süreç otomasyonu teknolojilerinin OSB yönetimine entegre edildiği dijital dönüşüm modeli.',
          },
          {
            term: 'İş Sürekliliği Planı (İSP)',
            definition:
              'Kritik süreçlerin kesintisiz devamı için risk analizi, müdahale ve kurtarma prosedürlerini tanımlayan belge.',
          },
        ],
      },
      {
        title: 'Ar-Ge ve Tasarım Merkezi',
        terms: [
          {
            term: 'Ar-Ge Merkezi',
            definition:
              '5746 sayılı Kanun kapsamında, asgari Ar-Ge personeli ve fiziksel altyapı şartıyla Bakanlık onayıyla kurulan, Ar-Ge indirimlerinden yararlanan birim.',
          },
          {
            term: 'Tasarım Merkezi',
            definition:
              'Endüstriyel tasarım faaliyetleri yürüten, 5746 sayılı Kanun teşviklerinden yararlanan, Ar-Ge Merkezi ile benzer nitelikte tescilli birim.',
          },
          {
            term: '5746 sayılı Kanun',
            definition:
              'Ar-Ge ve Tasarım Faaliyetlerinin Desteklenmesi Hakkında Kanun; Ar-Ge indirimi, stopaj teşviki ve SGK prim desteği gibi avantajları düzenler.',
          },
          {
            term: 'Ar-Ge İndirimi',
            definition:
              'Ar-Ge harcamalarının %100’ünün kurumlar vergisi matrahından düşülmesine imkân veren vergi avantajı.',
          },
          {
            term: 'Tam Zamanlı Eşdeğer (TZE)',
            definition:
              'Ar-Ge personelinin çalışma süresini tam zamanlı eşdeğer olarak ölçen; Ar-Ge Merkezi eşikleri için kullanılan hesaplama yöntemi.',
          },
          {
            term: 'Adam/Ay',
            definition:
              'Bir projede ortalama bir kişinin bir ayda yaptığı işi temsil eden çalışma süresi birimi.',
          },
          {
            term: 'Faaliyet Raporu',
            definition:
              'Ar-Ge veya Tasarım Merkezi’nin yıllık Ar-Ge faaliyetlerini, çıktılarını ve harcamalarını Bakanlığa sunulmak üzere düzenleyen resmi rapor.',
          },
          {
            term: 'Ön Denetim',
            definition:
              'Bakanlık denetiminden önce danışman tarafından gerçekleştirilen simülasyon niteliğindeki risk analizi incelemesi.',
          },
        ],
      },
      {
        title: 'Teknopark ve TGB',
        terms: [
          {
            term: 'Teknopark / Teknoloji Geliştirme Bölgesi (TGB)',
            definition:
              '4691 sayılı Kanun kapsamında kurulan, Ar-Ge, tasarım ve yazılım faaliyetlerinin vergi istisnalarından yararlandığı özel ekonomik bölge.',
          },
          {
            term: '4691 sayılı Kanun',
            definition:
              'Teknoloji Geliştirme Bölgeleri Kanunu; bölge içindeki firmalara sağlanan teşvikleri ve yönetici şirket operasyonlarını düzenler.',
          },
          {
            term: 'Yönetici Şirket',
            definition:
              'TGB’nin planlama, işletme, kiralama, proje kabulü ve Bakanlıkla koordinasyon süreçlerini yürüten tüzel kişilik.',
          },
          {
            term: 'Teknopark Portalı',
            definition:
              'Bakanlıkça yönetilen; TGB proje girişleri, muafiyet belgeleri, personel kayıtları ve denetim süreçlerinin dijital olarak yürütüldüğü sistem.',
          },
          {
            term: 'Teknopark Muafiyeti',
            definition:
              '4691 sayılı Kanun kapsamında bölge içi firmalara sağlanan gelir-kurumlar vergisi, KDV ve stopaj istisnaları paketi.',
          },
          {
            term: 'Kuluçka Merkezi (Girişim Ofisi - GO)',
            definition:
              '2022 sonrası Bakanlık izniyle TGB alanı dışında da kurulabilen, erken aşama girişimleri barındıran yapılar.',
          },
        ],
      },
      {
        title: 'KOSGEB, TÜBİTAK ve Hibe-Teşvik',
        terms: [
          {
            term: 'KOSGEB',
            definition:
              'Küçük ve Orta Ölçekli İşletmeleri Geliştirme ve Destekleme İdaresi Başkanlığı; KOBİ’lere yönelik hibe ve proje desteklerini yürütür.',
          },
          {
            term: 'KOBİ',
            definition:
              'Çalışan sayısı, yıllık ciro ve bilanço değerlerine göre mevzuatta tanımlanan küçük ve orta ölçekli işletme.',
          },
          {
            term: 'KOBİ Bilgi Beyannamesi',
            definition:
              'Bir işletmenin KOBİ statüsünü ortaya koyan ve KOSGEB desteklerine başvuru için güncel tutulması gereken belge.',
          },
          {
            term: 'TÜBİTAK',
            definition:
              'Türkiye Bilimsel ve Teknolojik Araştırma Kurumu; Ar-Ge ve inovasyon projelerinin değerlendirilmesi ve desteklenmesi süreçlerinden sorumludur.',
          },
          {
            term: 'TÜBİTAK 1501',
            definition:
              'Sanayi Ar-Ge Projeleri Destekleme Programı; orta ve büyük ölçekli firmalara yönelik hibe destek çağrısı.',
          },
          {
            term: 'TÜBİTAK 1507',
            definition:
              'KOBİ Ar-Ge Başlangıç Destek Programı; KOBİ’lerin ilk beş Ar-Ge projesi için hibe desteği sağlar.',
          },
        ],
      },
      {
        title: 'Yeşil Dönüşüm ve Diğer',
        terms: [
          {
            term: 'Avrupa Yeşil Mutabakatı',
            definition:
              'Avrupa Birliği’nin 2050 karbon-nötr hedefi kapsamında yayımladığı yeşil dönüşüm strateji çerçevesi.',
          },
          {
            term: 'Sınırda Karbon Düzenlemesi (CBAM)',
            definition:
              'AB’ye ithal edilen belirli ürünler için karbon ayak izine bağlı olarak uygulanacak sınır vergisi mekanizması.',
          },
          {
            term: 'Sürdürülebilirlik Sertifikası',
            definition:
              'Enerji, su, atık ve karbon ayak izi performansının bağımsız biçimde doğrulandığı belge (ör. Yeşil OSB, LEED, BREEAM).',
          },
          {
            term: 'KVKK',
            definition:
              '6698 sayılı Kişisel Verilerin Korunması Kanunu; kişisel veri işlemenin hukuki çerçevesini düzenler.',
          },
          {
            term: 'Resilience (Dayanıklılık)',
            definition:
              'Kuruluşun beklenmedik kesintilere rağmen faaliyetlerini sürdürebilme ve hızla toparlanma kapasitesi.',
          },
          {
            term: 'Dijital Dönüşüm',
            definition:
              'İş süreçlerinin dijital teknolojiler yardımıyla yeniden tasarlanarak verimlilik, şeffaflık ve kalite kazandırılması.',
          },
        ],
      },
    ],
  },
};

const en: Dictionary = {
  nav: {
    corporate: 'About',
    services: 'Services',
    references: 'References',
    blog: 'Blog',
    contact: 'Contact',
    faq: 'FAQ',
    cta: 'Get Consulting',
    menuToggle: 'Toggle menu',
    home: 'Home',
  },
  languageToggle: {
    ariaLabel: 'Select language',
    tr: 'TR',
    en: 'EN',
  },
  hero: {
    slides: [
      {
        badge: 'OIZ Consulting',
        headline: '',
        highlightedWord: 'OIZ',
        headlineEnd: ' Consulting with Regulatory Mastery\nYour Strategic Partner',
        subHeadline:
          'We deliver end-to-end administrative, technical and financial management for Organized Industrial Zones under Law No. 4562, with a focus on green transition and digital transformation.',
        ctaLabel: 'Explore OIZ Consulting',
        ctaHref: '/#hizmetlerimiz',
      },
      {
        badge: 'R&D and Design Centre Consulting',
        headline: 'R&D, Design Centre and ',
        highlightedWord: 'Technopark',
        headlineEnd: '\nManagement Consulting',
        subHeadline:
          'Under Law No. 5746, we manage R&D tax deductions, Technopark exemptions and Law No. 4691 compliance with a zero-error principle, securing your audit readiness with data-driven reports.',
        ctaLabel: 'R&D Centre Setup Process',
        ctaHref: '/#hizmetlerimiz',
      },
      {
        badge: 'Corporate Governance Consulting',
        headline: 'Authority-Grade ',
        highlightedWord: 'Corporate Governance',
        headlineEnd: '\nConsulting',
        subHeadline:
          'We deliver data-driven, AI-supported consulting in OIZ regulatory compliance, incentive management and strategic planning — backed by deep public-sector experience.',
        ctaLabel: 'Meet Our Founder',
        ctaHref: '/kurumsal',
      },
      {
        badge: 'Business Continuity and Risk Management',
        headline: 'Uninterrupted ',
        highlightedWord: 'Business Continuity',
        headlineEnd: '\nand Resilience in OIZs',
        subHeadline:
          'We strengthen industrial infrastructure resilience against disasters and unforeseen events — delivering risk analysis, Business Continuity Plans (BCP) and resilience-driven emergency management for uninterrupted critical operations.',
        ctaLabel: 'Request a BCP Assessment',
        ctaHref: '/iletisim',
      },
    ],
    ctaServices: 'Explore Our Services',
    ctaContact: 'Get in Touch',
    prevSlide: 'Previous slide',
    nextSlide: 'Next slide',
  },
  services: {
    badge: 'Our Expertise',
    titleStart: 'OIZ, R&D and Corporate Governance',
    titleAccent: 'Consulting',
    description:
      'From OIZ regulation to R&D and Design Centre management, from Green OIZ transformation to Technopark exemptions — we stand by you with engineering discipline, public-sector experience and a data-driven methodology.',
    detail: 'Learn More',
    close: 'Close',
    contactUs: 'Contact Us',
    items: [
      {
        title: 'OIZ Regulation & Governance Consulting',
        description:
          'End-to-end consulting for Organized Industrial Zones on Law No. 4562, land allocation governance, green transition and Smart-OIZ digital transformation.',
      },
      {
        title: 'R&D and Design Centre Consulting',
        description:
          'Under Law No. 5746, we manage centre setup, R&D deductions, incentive management and audit readiness with zero-error principles — powered by AI-supported technical reporting.',
      },
      {
        title: 'Grant and Incentive Management',
        description:
          'We manage the full application, monitoring and compliance cycle for government grants, EU funds and Law 5746/4691 incentives.',
      },
      {
        title: 'Corporate Governance Consulting',
        description:
          'We redesign your governance, OIZ body management and audit processes within a data-driven framework and draw a clear institutionalization roadmap.',
      },
      {
        title: 'Technopark and TDZ Management Consulting',
        description:
          'Under Law No. 4691, we ensure full compliance for Technology Development Zone management companies, Technopark exemptions and portal-based project tracking.',
      },
      {
        title: 'Strategic Planning and Green Transition',
        description:
          'We turn long-term growth goals into concrete action plans and co-create your roadmap for the European Green Deal, sustainability and green transition processes.',
      },
    ],
    osbModal: {
      badge: 'Learn More',
      titleStart: 'OIZ Regulation, Green Transformation and',
      titleAccent: 'Smart OIZ',
      titleEnd: 'Solutions',
      sections: [
        {
          title: '1. OIZ Regulation and Governance Consulting',
          intro:
            'Within the framework of Law No. 4562 on Organized Industrial Zones and related regulations, we manage the administrative and technical processes of the zones.',
          points: [
            {
              label: 'Land Allocation and Cancellation Management',
              text: 'Regulatory-compliant management of site selection, parceling, and participant pre-allocation and allocation procedures.',
            },
            {
              label: 'Governance Body Management',
              text: 'Structuring the processes of the Entrepreneur Committee, General Assembly, Board of Directors and Audit Board, and defining the internal governance rules (principle decisions, directives, guidelines, handbooks, etc.).',
            },
            {
              label: 'Liability Management of Board Members',
              text: 'Briefing on the legal and criminal liabilities of board of directors and audit board members, along with risk analysis.',
            },
            {
              label: 'Contract Management',
              text: 'Preparation of allocation, pre-allocation, technical and administrative contracts with participants and third parties.',
            },
          ],
        },
        {
          title: '2. Green OIZ and Sustainability Strategies',
          intro:
            'In line with sustainable development goals, we improve the environmental performance of OIZs and prepare them for "Green OIZ" certification.',
          points: [
            {
              label: 'Green Transition',
              text: 'Compliance with the European Green Deal and performance monitoring.',
            },
          ],
        },
        {
          title: '3. Financial and Infrastructure Management',
          intro: '',
          points: [
            {
              label: 'Ministry Loans and Incentives',
              text: 'Use of loans for infrastructure and general administration expenses, borrowing, and approval of progress-payment reports.',
            },
            {
              label: 'Tender Management',
              text: 'Preparation for tender processes in OIZs.',
            },
            {
              label: 'Infrastructure Facilities',
              text: 'Operations related to the right to establish and operate infrastructure facilities such as electricity, water, sewage, natural gas, and treatment plants; service agreements and fee accrual principles.',
            },
          ],
        },
        {
          title: '4. Digital Transformation and Data-Driven Management',
          intro:
            'By blending traditional industrial management with modern data technologies, we bring the "Smart OIZ" vision to life.',
          points: [
            {
              label: 'Digital Strategy',
              text: 'Preservation of organizational memory and setup of digital archive systems.',
            },
            {
              label: 'Big Data and AI',
              text: 'Building decision-support mechanisms in OIZ management through data mining and AI integration.',
            },
            {
              label: 'Process Automation',
              text: 'Consulting on digitization of workflows and efficiency-boosting software solutions.',
            },
          ],
        },
        {
          title: '5. Business Continuity and Risk Management',
          intro:
            'We increase the resilience of industrial infrastructures against disasters and unexpected events.',
          points: [
            {
              label: 'Business Continuity Planning (BCP)',
              text: 'Risk analyses and response plans to ensure the uninterrupted continuity of critical processes.',
            },
            {
              label: 'Emergency Management',
              text: 'Strategic planning focused on resilience beyond traditional methods.',
            },
          ],
        },
        {
          title: '6. Technology and Innovation Ecosystems',
          intro:
            'We enable the operation of ecosystems where R&D and innovation meet industry.',
          points: [
            {
              label: 'TEKMER & TDZ',
              text: 'Establishment and operation processes of Technology Development Centers and Zones.',
            },
            {
              label: 'Ecosystem Management',
              text: 'Shaping university-industry collaboration and technology transfer processes.',
            },
          ],
        },
      ],
      whyUs: {
        title: 'Why Us?',
        items: [
          {
            label: 'Engineering Perspective',
            text: 'Process optimization and efficiency focus with engineering discipline.',
          },
          {
            label: 'Regulatory Expertise',
            text: 'Close tracking of current regulations at the ministry level.',
          },
          {
            label: 'Deep-Tech Experience',
            text: 'Integration of data engineering and AI experience into industrial management.',
          },
        ],
      },
    },
    argeModal: {
      badge: 'Learn More',
      titleStart: 'R&D, Design and',
      titleAccent: 'Innovation',
      titleEnd: 'Ecosystem Consulting',
      intro:
        'In line with Türkiye’s technology-driven development goals, we offer strategic partnership to maximise the value of government incentives under Laws No. 5746 and 4691 with zero margin of error. Placing audit standards at the centre, we manage your technical and administrative processes end-to-end.',
      sections: [
        {
          title:
            '1. Law No. 5746: R&D and Design Centre Management Consulting',
          intro:
            'We carry out the technical monitoring and audit-readiness processes required to turn in-house centres into a sustainable incentive mechanism.',
          points: [
            {
              label: 'Centre Design and Management',
              text: 'Preparation of the centre’s physical space design and personnel qualification analysis in line with regulatory criteria.',
            },
            {
              label: 'Continuous Audit and Regulatory Compliance',
              text: 'Monthly and annual tracking of R&D deductions, income tax withholding incentives and social-security premium support.',
            },
            {
              label: 'Technical Reporting and Activity Tracking',
              text: 'Data-driven preparation of annual activity reports that highlight the technical depth and innovative aspects (R&D/Design qualification) of projects.',
            },
            {
              label: 'Audit Preparation',
              text: 'Analysis of risks (man/month durations, expenditure items, etc.) through “Pre-Audit” simulations.',
            },
          ],
        },
        {
          title: '2. Law No. 4691: Technology Development Zone (TDZ) Consulting',
          intro: '',
          points: [
            {
              label: 'Management Company Operational Governance',
              text: 'We provide fully regulation-compliant ecosystem management for technopark management companies and start-ups located within the zones.',
            },
            {
              label: 'Portal and Exemption Management',
              text: 'Management of project entries, exemption certificates and personnel tracking conducted through the Technopark Portal.',
            },
            {
              label: 'Project Acceptance and Monitoring',
              text: 'Determination of eligibility criteria under Law No. 4691 for projects entering the zone.',
            },
            {
              label: 'Management Company Audit Preparation',
              text: 'Risk analysis of management companies through “Pre-Audit” simulations.',
            },
          ],
        },
      ],
      hashtags: [
        '#RnD',
        '#Design',
        '#Innovation',
        '#5746',
        '#4691',
        '#Technopark',
        '#IncentiveManagement',
      ],
    },
  },
  whyUs: {
    badge: 'Why ANT Consulting?',
    titleStart: 'Regulation-First,',
    titleAccent: 'Data-Driven Consulting',
    description:
      'At ANT Management Consulting we operate with a zero-error principle in complex OIZ regulation and governance-body processes, and deliver measurable outcomes in R&D and Design Centres through a data-driven, AI-supported engineering approach.',
    badgeExperienceValue: '15',
    badgeExperienceLabel: 'Years',
    badgeExperienceSub: 'Public-Sector Experience',
    altImage: 'ANT Management Consulting expert team',
    points: [
      {
        title: 'Zero-Error in OIZ Regulation',
        description:
          'Audit-focused delivery on Law No. 4562, land allocation and governance-body processes — we eliminate compliance risk at the design stage.',
      },
      {
        title: 'Ministry-Level Regulatory Mastery',
        description:
          'We interpret Law 4562 (OIZ), 5746 and 4691, and Technopark exemption rules with the depth of Ministry-level inspection experience.',
      },
      {
        title: 'Data-Driven, AI-Supported R&D',
        description:
          'We turn R&D and Design Centre management into a measurable, sustainable process through big-data analyses and AI-supported decision mechanisms.',
      },
      {
        title: 'Public-Sector-Grade Corporate Assurance',
        description:
          'With 15 years of Ministry of Industry and Technology experience, we bridge public and private sectors in green transition and corporate governance consulting.',
      },
    ],
  },
  cta: {
    headingStart: 'Ready to Transform',
    headingAccent: 'Your Business?',
    description:
      'Meet us for an initial assessment call. Let’s discover your potential together and build your growth roadmap.',
    primaryLabel: 'Contact Us Now',
    phoneLabel: 'or call us: +90 (506) 986 26 20',
    trustBadges: [
      'Free Initial Consultation',
      'Confidentiality Guarantee',
      'Response Within 24 Hours',
    ],
  },
  footer: {
    tagline:
      'At ANT Consulting we deliver innovative strategies and expert solutions for the sustainable growth of businesses. We stand by you as your trusted partner.',
    columnCompany: 'Company',
    columnServices: 'Services',
    columnContact: 'Contact',
    companyLinks: [
      { label: 'About Us', href: '/kurumsal' },
      { label: 'Our Team', href: '/kurumsal' },
      { label: 'Blog', href: '/blog' },
      { label: 'FAQ', href: '/sss' },
      { label: 'Contact', href: '/iletisim' },
    ],
    serviceLinks: [
      { label: 'Management Consulting', href: '/#hizmetlerimiz' },
      { label: 'R&D and Innovation', href: '/#hizmetlerimiz' },
      { label: 'Grants and Incentives', href: '/#hizmetlerimiz' },
      { label: 'Corporate Development', href: '/#hizmetlerimiz' },
      { label: 'OIZ Regulation & Governance', href: '/#hizmetlerimiz' },
      { label: 'Strategic Planning', href: '/#hizmetlerimiz' },
    ],
    legalLinks: [
      { label: 'Privacy Policy', href: '/gizlilik' },
      { label: 'KVKK Notice', href: '/kvkk' },
      { label: 'Cookie Policy', href: '/cerez' },
    ],
    workingHours: '',
    copyright: (year) => `© ${year} ANT Consulting. All rights reserved.`,
    madeIn: '',
  },
  blog: {
    pageBadge: 'Blog',
    pageTitleStart: 'Industry',
    pageTitleAccent: 'Insights',
    pageDescription:
      'Current analyses on OIZ regulation, industrial policy, green transformation and digitalization.',
    postMeta: (date, readTime) => `${date} · ${readTime}`,
    readPost: 'Read Article',
    relatedTitle: 'Related Content',
    relatedServicesTitle: 'Explore Our Services',
    relatedServicesDesc:
      'End-to-end consulting in OIZ, R&D and Design Centres, Technopark and Corporate Governance.',
    relatedFaqTitle: 'Frequently Asked Questions',
    relatedFaqDesc:
      'Expert answers on OIZ regulation, R&D Centre setup and KOSGEB-TÜBİTAK projects.',
    otherPostsTitle: 'Other Articles',
    sourcesTitle: 'Sources and Official References',
    backToBlog: 'Back to blog',
    disclaimerTitle: 'Disclaimer',
    posts: [
      {
        id: 'osb-on-tahsis',
        title:
          'Pre-Allocation Processes in Organized Industrial Zones and Managing Uncertainty',
        excerpt:
          'Investors requesting land through the pre-allocation method in OIZs occasionally face uncertainty around signing of the allocation contract, determination of the land price and refund processes.',
        publishedAt: 'April 17, 2026',
        readTime: '5 min read',
        content: {
          intro:
            '📌 Investors requesting land through the pre-allocation method in Organized Industrial Zones (OIZs) occasionally face uncertainty around signing of the allocation contract, determination of the land price and refund of the pre-allocation.',
          sections: [
            {
              title: '🔎 Infrastructure Planning and Predictability in the Allocation Process',
              paragraphs: [
                '🗓️ Signing the definitive land allocation contract is directly tied to the level of infrastructure completion. Since this depends on the OIZ’s resources and work program, it is critical that a firm or estimated date be communicated by the OIZ management itself. Under the regulation, the definitive allocation contract must be signed within 3 months after infrastructure completion. Sharing an infrastructure timeline will undoubtedly increase pre-allocation demand and investor appetite.',
              ],
            },
            {
              title: '💰 Determining the Land Price',
              paragraphs: [
                '📖 Under the Implementing Regulation, a pre-allocation holder does not have the right to object to the price at the definitive allocation stage. However, this does not leave the investor entirely unprotected and at the sole discretion of the OIZ. The relevant article stipulates that the method for determining the definitive allocation price must be specified in the pre-allocation contract.',
                '⚖️ As a result, stating the methodology for determining the allocation price clearly in the pre-allocation contract is both a regulatory obligation and important for strengthening investor commitment and preventing potential disputes.',
              ],
            },
            {
              title: '⚖️ Refund Processes and the Legal Basis',
              paragraphs: [
                '💵 Another critical topic in the pre-allocation phase is the refund of amounts paid if the pre-allocation is abandoned. Although the regulation does not directly address the refund amount (apart from cases with explicit provisions/penalties), there are views that the definitive land allocation refund process may be applied by analogy or that the provisions of the Code of Obligations may be used as a basis.',
                '📝 At this point, clarifying how the refund process will be carried out, the price update and the payment schedule in the contract will make the process predictable for both the OIZ and the investor.',
              ],
            },
          ],
          summary: {
            intro:
              '📊 In short, before launching the pre-allocation process, OIZs should transparently set out:',
            items: [
              '🏗️ The infrastructure completion program,',
              '💰 The land-price determination methodology,',
              '🔄 The refund processes,',
            ],
            outro:
              'These are strategic steps that create stability for investors and strengthen the ecosystem.',
          },
          hashtags: [
            '#OIZ',
            '#Industry',
            '#Investment',
            '#PreAllocation',
            '#IndustrialZones',
            '#IndustrialInvestment',
            '#Governance',
            '#Transparency',
            '#InvestorConfidence',
          ],
          sources: [
            { label: 'Law No. 4562 on Organized Industrial Zones — Turkish Legislation Database', url: 'https://www.mevzuat.gov.tr/' },
            { label: 'Ministry of Industry and Technology (Türkiye) — Industrial Zones', url: 'https://www.sanayi.gov.tr/' },
            { label: 'OSBÜK — OIZ Umbrella Organization of Türkiye', url: 'https://www.osbuk.org.tr/' },
          ],
          disclaimer:
            'The views expressed above reflect purely personal opinions and are not the official position of the Ministry or other relevant authorities. Please note that the practices of the Ministry or other authorities on this topic may differ.',
        },
      },
      {
        id: 'yesil-osb-yol-haritasi',
        title: 'Green Transformation Roadmap for Industry: How to Become a Green OIZ? 🌍🏭',
        excerpt:
          'Everything you need to know about the Green OIZ Certification System in the context of the transformation of OIZs for sustainable development and EU Green Deal compliance.',
        publishedAt: 'April 18, 2026',
        readTime: '7 min read',
        content: {
          intro:
            'In the context of sustainable development and compliance with the European Green Deal, the Green OIZ Certification System — run jointly by the Ministry of Industry and Technology and TSE — evaluates OIZs not only on economic performance but also on environmental and social outcomes.',
          sections: [
            {
              title: '✅ Step 1: Meeting the "Pre-Criteria"',
              paragraphs: [
                'To proceed to performance scoring, an OIZ must first satisfy these 6 fundamental conditions:',
                '1️⃣ At least 1 company actively manufacturing in the OIZ.',
                '2️⃣ All wastewater must be treated.',
                '3️⃣ No coal used as an energy source.',
                '4️⃣ Management must hold TS EN ISO 14001 (Environment) and TS EN ISO 50001 (Energy) certificates.',
                '5️⃣ A climate-change unit must be established with qualified personnel.',
                '6️⃣ At least a "Basic-Level Zero Waste Certificate" must be obtained.',
              ],
            },
            {
              title: '📊 Step 2: Scoring via Performance Indicators',
              paragraphs: [
                'OIZs that pass the pre-criteria are assessed against a total of 38 performance indicators across 4 main categories.',
                '🌿 Environmental: 17 Indicators (Weight: 39%)',
                '💰 Economic: 10 Indicators (Weight: 27%)',
                '🤝 Social: 6 Indicators (Weight: 24%)',
                '🏛️ Governance: 5 Indicators (Weight: 10%)',
              ],
            },
            {
              title: '🚀 Step 3: Application and Certification Process',
              paragraphs: [
                '• Application: OIZ management applies to the Ministry through the MEYDİP system.',
                '• Preliminary Review: The Ministry checks pre-criteria; if met, forwards the application to TSE.',
                '• On-site Audit: Performance indicators are audited and scored on-site.',
                '• Certification: Bronze, Silver, Gold or Platinum certificates are issued based on the score out of 100.',
                'The certificate is valid for 3 years, but OIZs must prepare an annual "Improvement Report" setting targets for each criterion.',
                'The industry of the future will be built on OIZs that use resources efficiently and respect the environment.',
              ],
            },
          ],
          hashtags: [
            '#GreenOIZ',
            '#Sustainability',
            '#IndustryAndTechnology',
            '#GreenTransformation',
            '#TSE',
            '#OIZ',
            '#CleanTech',
          ],
          sources: [
            { label: 'Ministry of Industry and Technology — Green OIZ', url: 'https://www.sanayi.gov.tr/' },
            { label: 'Ministry of Trade — European Green Deal', url: 'https://www.ticaret.gov.tr/' },
            { label: 'OSBÜK — OIZ Umbrella Organization of Türkiye', url: 'https://www.osbuk.org.tr/' },
          ],
        },
      },
      {
        id: 'is-surekliligi-plani',
        title: 'The Economic Shield of Organized Industrial Zones: Business Continuity Plan (BCP)',
        excerpt:
          'Under the OIZ Implementing Regulation, preparing a Business Continuity Plan is now an official obligation for OIZs. Here is what you need to know about the scope and processes.',
        publishedAt: 'April 18, 2026',
        readTime: '8 min read',
        content: {
          intro:
            'Under the Organized Industrial Zones Implementing Regulation, preparing a Business Continuity Plan (BCP) is now an official obligation for OIZs. In this context, AFAD\'s published "Business Continuity Plan Preparation and Implementation Guide for Organized Industrial Zones" serves as a fundamental reference for OIZs to establish the process in a sound and systematic manner. Drawing on this guide, I have tried to summarise the scope and core processes of the BCP.',
          sections: [
            {
              title: '💡 The Core Purpose of BCP',
              paragraphs: [
                'The core purpose of a BCP is to create written plans that enable the OIZ to sustain, recover and restore its value-creating activities (products, services) in the event of a disruption. For OIZs specifically, the primary goal is the continuity of critical infrastructure services so that the mission can be fulfilled.',
              ],
            },
            {
              title: '🎯 Goals and Objectives of the Business Continuity Plan',
              paragraphs: [
                '🔌 Sustainability of Critical Infrastructure Services: Ensuring the continuity of critical infrastructure services at a level that enables the OIZ to fulfil its mission.',
                '🏭 Supporting Participant Companies: The BCP aims to support the sustainability of participant companies by guaranteeing that critical infrastructure services will be maintained above the "critical threshold" — the point beyond which self-recovery becomes impossible.',
                '🔄 Rapid Recovery and Resilience: The BCP will ensure that OIZs are minimally affected by disasters and emergencies and can quickly recover production and employment processes.',
                '🔒 Protecting Value and Reputation: The plan will reduce potential loss of life and property at enterprises and contribute to maintaining and enhancing commercial reputation.',
                '🛡️ Proactive Approach: The BCP is a proactive approach aimed at enabling the organisation to sustain or rapidly restore its value-creating activities following a disaster or emergency.',
              ],
            },
            {
              title: '📌 How Does BCP Work?',
              paragraphs: [
                'The plan consists of a four-stage methodological process:',
                '1️⃣ Business Impact Analysis',
                '2️⃣ Business Recovery Strategies',
                '3️⃣ Plan Preparation',
                '4️⃣ Testing and Exercises',
              ],
            },
            {
              title: '🔁 How BCP Differs from CDP/ERP',
              paragraphs: [
                'BCP is different from the Civil Defence Plan (CDP) and Emergency Response Plan (ERP).',
                '📢 CDP and ERP are tools of Disaster and Emergency Management.',
                '🧠 BCP is a core component of the Business Continuity Management System.',
                '➡️ While CDP/ERP focus on safety of life and property, BCP aims to protect the organisation\'s value-creating activities and minimise losses.',
                '✔️ Although these plans differ in purpose, they complement each other in maintaining acceptable operations during emergencies and can be used together during the preparedness phase.',
              ],
            },
          ],
          hashtags: [
            '#BusinessContinuity',
            '#OIZ',
            '#DisasterResilience',
            '#BCP',
            '#BCMS',
          ],
          sources: [
            { label: 'OIZ Implementing Regulation — Turkish Legislation Database', url: 'https://www.mevzuat.gov.tr/' },
            { label: 'Ministry of Industry and Technology — Industrial Zones', url: 'https://www.sanayi.gov.tr/' },
            { label: 'AFAD — Disaster and Emergency Management Authority', url: 'https://www.afad.gov.tr/' },
          ],
        },
      },
      {
        id: 'parsel-tahsis-iptali',
        title: 'Valuation in Parcel Allocation Cancellation and Refund',
        excerpt:
          'Critical information on valuation methods during the refund and cancellation of allocated industrial parcels in OIZs, and the impact of time extensions on repayments.',
        publishedAt: 'April 18, 2026',
        readTime: '5 min read',
        content: {
          intro:
            '📘 Industrial parcels allocated in Organized Industrial Zones may be returned voluntarily by the participant within the periods set out in Article 60 of the OIZ Implementing Regulation, or the OIZ may cancel allocations for participants who fail to obtain the required permits and licences within the specified timeframes.',
          sections: [
            {
              title: '📌 Allocation Cancellation Conditions',
              paragraphs: [
                'a) Failure to obtain a building permit by having project plans for the intended structure approved by the OIZ within 1 year from the allocation date.',
                'b) Failure to obtain a workplace opening and operation licence within 2 years from the building permit date results in cancellation; however, in the presence of force majeure the board of directors may extend these periods by 1 year each. The Ministry also has extension authority under certain conditions.',
              ],
            },
            {
              title: '🔁 Time Extension and Repayment Difference',
              paragraphs: [
                'The refund of land allocation fees paid by the participant varies depending on whether a time extension has been granted.',
                '📌 If the allocation is returned or cancelled without a time extension, the amount paid is updated using the revaluation rate determined under Law No. 213.',
                '📌 If the allocation is returned or cancelled after a time extension has been granted, the repayment is calculated at the lower of the statutory interest rate and the revaluation rate.',
              ],
            },
            {
              title: '⚠️ Practical Impact and Advice',
              paragraphs: [
                'Considering that the 2024 revaluation rate is 43.93% while the statutory interest rate was set at 24% as of 1 June 2024, significant differences may arise in the amounts paid to participants.',
                '✅ Therefore, especially during periods of high inflation, a participant who realises they cannot carry out the investment would find it significantly more advantageous to return the allocation rather than requesting a time extension, as the difference in the refund calculation can be substantial.',
              ],
            },
          ],
          hashtags: [
            '#OIZ',
            '#ParcelAllocation',
            '#Investment',
            '#IndustrialZones',
            '#Valuation',
          ],
          sources: [
            { label: 'Law No. 4562 on Organized Industrial Zones — Turkish Legislation Database', url: 'https://www.mevzuat.gov.tr/' },
            { label: 'Ministry of Industry and Technology — Industrial Zones', url: 'https://www.sanayi.gov.tr/' },
            { label: 'OSBÜK — OIZ Umbrella Organization of Türkiye', url: 'https://www.osbuk.org.tr/' },
          ],
        },
      },
      {
        id: 'girisim-ofisi-kulucka-merkezi',
        title:
          'Establishing Incubation Centres Outside Technology Development Zones (Entrepreneurship Offices-GO)',
        excerpt:
          'Since 2022, technopark management companies can establish Incubation Centres (Entrepreneurship Offices) outside TDZ areas with Ministry approval. Incentives and eligibility criteria explained.',
        publishedAt: 'April 18, 2026',
        readTime: '4 min read',
        content: {
          intro:
            '📌 Since 2022, technopark management companies have been able to establish Incubation Centres outside Technology Development Zones with authorisation from the Ministry of Industry and Technology. These structures — also referred to as Entrepreneurship Offices (GO) — aim to spread innovation and technology-based entrepreneurship beyond technopark boundaries and into different parts of the city.',
          sections: [
            {
              title: '🏗️ Initial Launch and Progress',
              paragraphs: [
                'In this context, the following were first announced:',
                '• Ankara Technology Development Zone (Bilkent Cyberpark) – Ankara Technology Bridge Incubation Centre',
                '• TÜBİTAK Marmara Research Centre Technopark – Marmara Teknokent TÜGİP Incubation Centre',
                'Both were declared in September 2022.',
                '📊 According to Ministry data, the most recently declared one — Boğaziçi Technopark Batman Entrepreneurship Office — has brought the total number of Entrepreneurship Offices established outside zone areas to 11.',
              ],
            },
            {
              title: '💼 Support and Advantages for Entrepreneurs',
              paragraphs: [
                'Entrepreneurs located in these centres outside zone areas can benefit from all supports, incentives, exemptions and allowances under the relevant Law — including Income/Corporate Tax, VAT and Stamp Duty exemptions, as well as social-security premium support — in exactly the same way as those within the zones.',
              ],
            },
            {
              title: '🧩 Eligibility Criteria for Companies',
              paragraphs: [
                'Companies seeking to operate in these offices must meet the following criteria:',
                '• Be technology-based,',
                '• Have been established within the last 3 years,',
                '• Have fewer than 10 employees.',
              ],
            },
            {
              title: '🏢 Requirements for Technoparks to Establish Incubation Centres',
              paragraphs: [
                'For a technopark to establish an incubation centre outside its zone area:',
                '• It must already host an incubation centre in its own premises,',
                '• At least 10% of total firms must be incubator firms,',
                '• At least 5% of leasable area must be allocated to these firms.',
                '⏳ Management companies may allocate space to entrepreneurs in the pre-incubation programme for up to 18 months in these centres.',
              ],
            },
          ],
          hashtags: [
            '#Technopark',
            '#Entrepreneurship',
            '#Innovation',
            '#IncubationCentre',
            '#EntrepreneurshipOffice',
          ],
          sources: [
            { label: 'Ministry of Industry and Technology — Technology Development Zones', url: 'https://www.sanayi.gov.tr/' },
            { label: 'KOSGEB — SME Entrepreneurship Support', url: 'https://www.kosgeb.gov.tr/' },
            { label: 'TÜBİTAK — Entrepreneurship and Innovation Support', url: 'https://www.tubitak.gov.tr/' },
          ],
        },
      },
      {
        id: 'osb-huzur-hakki',
        title: 'Attendance Fee Payments to Organized Industrial Zone Bodies',
        excerpt:
          'The 2025 upper limit for attendance fees payable to OIZ body members, the calculation methodology under the Presidential Decree, and payment principles for different governing bodies.',
        publishedAt: 'April 18, 2026',
        readTime: '6 min read',
        content: {
          intro:
            '📌 The OIZ Implementing Regulation states the following on attendance fees payable to OIZ body members: "Members of the Entrepreneur Committee and the boards of directors and audit may receive an attendance fee per meeting in an amount determined by the Entrepreneur Committee. The total monthly amount of this attendance fee may not exceed the net monthly remuneration paid to the chairman and members of the boards of directors of public economic enterprises and their affiliates, as determined each year by the Presidency."',
          sections: [
            {
              title: '📢 Presidential Decree and Calculation',
              paragraphs: [
                'Presidential Decree No. 9904 dated 29 May 2025 sets out the payment system. Under the decree, board members of Türkiye Post and Telegraph A.Ş. and İller Bankası A.Ş. receive an amount calculated by multiplying the indicator figure (30,720) by the civil-servant monthly coefficient; the board chairman receives twice this amount; and audit board members receive an amount set by the General Assembly not exceeding 3/4 of the figure set for board members. The civil-servant monthly coefficient for January–July 2025 is 1.012556.',
                'Note: The term "net" did not appear in the previous decree.',
                '🎯 Based on this, the calculation 30,720 × 1.012556 = TRY 31,105.72 is the upper limit for attendance fees. The Directorate General for Industrial Zones\' notification to OIZs at the start of the year also stated the upper limit as TRY 31,106.',
              ],
            },
            {
              title:
                '💡 Payments to the Entrepreneur Committee and Board Chairmen',
              paragraphs: [
                'In OIZs administered by an Entrepreneur Committee, if a decision is taken by the authorised body, the Entrepreneur Committee chairman and the Board of Directors chairman may receive payment not exceeding ❗twice❗ the monthly maximum payable to board of directors and audit board members.',
              ],
            },
            {
              title: '💡 Payments to the Audit Board',
              paragraphs: [
                'Given that the OIZ Implementing Regulation caps the fees of OIZ audit board members not by the audit board member fees defined in the Presidential Decree (not exceeding 3/4 of the amount set for board members) but by the board of directors fees, the upper monthly limit for attendance fees payable to OIZ Audit Board Members may be set at the same level as OIZ Board of Directors members (TRY 31,106).',
              ],
            },
            {
              title: '⚠️ Other Payments',
              paragraphs: [
                'Even with an authorised body decision, OIZ body members cannot receive any other payment besides the attendance fee under any name — such as bonuses, commissions, or committee chairmanship/membership fees. In short, the additional January and July payments mentioned in the Presidential Decree cannot be made in OIZs.',
              ],
            },
            {
              title: '✅ Attendance Fees in OIZs Governed by a General Assembly',
              paragraphs: [
                'In OIZs where governance has passed to the General Assembly and the Entrepreneur Committee\'s duties have ended, attendance fees may be paid to board of directors and audit board members in amounts determined by the General Assembly.',
              ],
            },
          ],
          hashtags: [
            '#OIZ',
            '#AttendanceFee',
            '#CorporateGovernance',
            '#IndustrialZones',
            '#RegulatoryCompliance',
          ],
          sources: [
            { label: 'Law No. 4562 on Organized Industrial Zones — Turkish Legislation Database', url: 'https://www.mevzuat.gov.tr/' },
            { label: 'Official Gazette of Türkiye — Presidential Decrees', url: 'https://www.resmigazete.gov.tr/' },
            { label: 'OSBÜK — OIZ Umbrella Organization of Türkiye', url: 'https://www.osbuk.org.tr/' },
          ],
        },
      },
    ],
  },
  contact: {
    pageBadge: 'Contact',
    pageTitleStart: 'Get in',
    pageTitleAccent: 'Touch',
    pageDescription:
      'Reach out to us for your projects and consulting needs. We respond within 24 hours.',
    formTitle: 'Send Us a Message',
    formDescription:
      'Fill in the form and our team will get back to you as soon as possible.',
    formName: 'Full Name',
    formEmail: 'Email',
    formPhone: 'Phone',
    formSubject: 'Subject',
    formMessage: 'Your Message',
    formSubmit: 'Send Message',
    formSuccess: 'Your message has been received. We will get back to you soon.',
    formCaptchaLabel: 'Security check',
    formCaptchaError: 'Security check failed. Please try again.',
    infoTitle: 'Contact Information',
    infoPhoneLabel: 'Phone',
    infoPhoneSub: '',
    infoEmailLabel: 'Email',
    linkedinTitle: 'Connect on LinkedIn',
    linkedinDescription:
      'Follow my LinkedIn profile for regular content, sector analyses and consulting notes.',
    linkedinCta: 'View LinkedIn Profile',
  },
  corporate: {
    pageBadge: 'About',
    pageTitleStart: 'OIZ and R&D Consulting with',
    pageTitleAccent: 'Public-Sector Experience',
    pageDescription:
      'With 15 years of Ministry-level inspection experience, your strategic partner in OIZ consulting, R&D and Design Centre management consulting, and corporate governance consulting.',
    introTitle: 'ANT Management Consulting and Engineering',
    introParagraphs: [
      'ANT Management Consulting and Engineering is an expert firm founded on multi-disciplinary expertise in industry, technology and public administration — uniting OIZ consulting, R&D and Design Centre consulting and corporate governance consulting under one roof with audit standards at its core.',
      'Our engineering-grounded methodology brings together OIZ regulatory compliance, land allocation management, Technopark exemptions and green-transition processes in a data-driven framework. We fuse traditional industrial management with a modern engineering vision through AI-supported decision mechanisms.',
    ],
    founderTitle: 'Our Founder',
    founderName: 'İlker Tura',
    founderRole: 'Founder',
    founderParagraphs: [
      'İlker Tura combines his undergraduate and graduate education in Electrical-Electronics Engineering, Business Administration and Public Administration with more than 15 years of public-sector experience, aiming to add value to the industrial and technology ecosystem.',
      'Between 2012 and 2026 he served at the Ministry of Industry and Technology as Assistant Inspector, Inspector and Chief Inspector, most recently as Deputy Head of the Guidance and Inspection Board for approximately 6.5 years from 2019 to 2026.',
      'During this period he led the audit, regulatory compliance and governance coordination of Organized Industrial Zones (OIZ), Technology Development Zones, R&D and Design Centres and Industrial Zones. The deep experience accumulated in these roles is reflected directly in Ant Management’s ability to deliver solutions.',
    ],
    highlights: [
      { label: 'Public Service', value: '15 Years' },
      { label: 'Ministry Inspectorate', value: '2012-2026' },
      { label: 'Guidance & Inspection', value: '6.5 Years' },
    ],
    ctaText: 'We are ready to be your strategic solution partner.',
    ctaLabel: 'Get in Touch',
  },
  faq: {
    pageBadge: 'Frequently Asked Questions',
    pageTitleStart: 'OIZ, R&D and Incentive Processes —',
    pageTitleAccent: 'Answers You Need',
    pageDescription:
      'Expert answers to the most frequently asked questions about Organized Industrial Zone (OIZ) regulations, R&D and Design Centre setup, Technopark exemptions and KOSGEB-TÜBİTAK project processes.',
    ctaText: 'Can’t find the answer you’re looking for? Reach out to our experts.',
    ctaLabel: 'Ask an Expert',
    categories: [
      {
        title: 'Organized Industrial Zones (OIZ) Consulting',
        description:
          'Most asked questions on the definition, establishment, governance, infrastructure, land allocation and Green OIZ processes of Organized Industrial Zones.',
        items: [
          {
            question: 'What is an Organized Industrial Zone (OIZ) and what is its purpose?',
            answer:
              'OIZs are designated areas established to ensure that industry is structured in suitable locations, to prevent unplanned industrialization and environmental issues, to guide urbanization and to use resources rationally. These areas are manufacturing and service zones equipped with the common-use, service and support areas needed to position various industry types within a defined plan, and are allocated to industry accordingly.',
          },
          {
            question: 'Do OIZs have legal personality?',
            answer:
              'Yes. An OIZ acquires legal personality once the founding protocol — signed by the representatives of the participating institutions and by the Governor — is approved by the Ministry and entered into the registry. OIZs are private-law legal entities.',
          },
          {
            question: 'What governance bodies make up the management structure of an OIZ?',
            answer:
              'An OIZ’s bodies are: the Founding Committee (replaced by the General Assembly once the operational stage is reached), the Board of Directors, the Supervisory Board and the Zone Directorate.',
          },
          {
            question: 'How are infrastructure needs (electricity, water, natural gas, etc.) of companies in OIZs met?',
            answer:
              'The right to establish, operate, procure and distribute infrastructure facilities required by the OIZ — electricity, water, sewerage, natural gas, treatment plants and communications — belongs solely to the OIZ. Entities located within the OIZ are required to meet their infrastructure needs through the OIZ’s own facilities and may not source them elsewhere without the OIZ’s permission.',
          },
          {
            question: 'Are companies obliged to pay dues even if they don’t use the OIZ’s services?',
            answer:
              'Costs of the OIZ’s infrastructure and shared services are borne by the participants, and companies cannot avoid paying management dues on the grounds that they do not use the listed services.',
          },
          {
            question: 'What is OSBÜK and is OIZ membership mandatory?',
            answer:
              'OSBÜK (Organized Industrial Zones Supreme Organization) was established to ensure consistency of practice across OIZs, to act before public bodies for issue resolution and to coordinate with the Ministry. Membership in OSBÜK and payment of the established dues is mandatory for all OIZs that have acquired legal personality.',
          },
          {
            question: 'How are land allocation applications submitted in an OIZ and how does the process work?',
            answer:
              'Land allocation applications must be submitted via the Ministry’s online system. Available parcels are announced on the OIZ, OSBÜK and Ministry systems, and applications are scored according to weighting coefficients defined in the Ministry’s evaluation form. When demand exceeds supply, a shortlist is drawn starting from the highest-scoring applicant and investors are invited to a notarized lottery or tender for allocation.',
          },
          {
            question: 'What are the timelines for construction and starting production on allocated OIZ land, and what happens if they are exceeded?',
            answer:
              'Investors must obtain a building permit within 1 year from the allocation date and start production by obtaining a workplace opening and operating licence within 2 years from the building permit date. These periods may be extended within defined limits where reasonable grounds exist; otherwise the allocation is revoked. In addition, investors whose statutory periods have expired may be granted an extension by the Ministry until 31/3/2028, provided they apply by 31/12/2025.',
          },
          {
            question: 'Can an industrial parcel located in an OIZ be leased to another company?',
            answer:
              'Yes — participants may lease their facilities to one or more tenants for production purposes. However, leasing requires that the title deed be free of any reclaim annotation, that for parcels allocated after 05.09.2024 at least one year has passed since obtaining such an unencumbered title, and that there be no overdue debt to the OIZ.',
          },
          {
            question: 'Can OIZ industrial parcels be subdivided (ifraz) or merged (tevhit)?',
            answer:
              'Two or more industrial parcels may be merged. Subdivision, however, is subject to specific conditions to prevent land speculation: the resulting parcels must be at least 3,000 m², Ministry approval is required, and to prevent speculative transactions, shareholders must commit not to transfer more than 49% of the company’s shares without Ministry approval.',
          },
          {
            question: 'What is the Green OIZ certificate and what advantages does it offer to the investor / OIZ?',
            answer:
              'OIZs that stand out with resource and energy efficiency, lean production, industrial waste collaboration and environmentally responsible practices are certified as “Green OIZ” by the Turkish Standards Institution (TSE). Projects designed to meet Green OIZ criteria are given priority in the Ministry’s lending processes.',
          },
        ],
      },
      {
        title: 'R&D and Design Centres Consulting',
        description:
          'Questions on Law No. 5746 — establishment requirements for R&D and Design Centres, tax and social-security incentives, off-site work, contracted R&D projects and the venture-capital obligation.',
        items: [
          {
            question: 'What are the requirements to set up an R&D or Design Centre within my company?',
            answer:
              'To establish an R&D Centre, you must employ at least 15 full-time equivalent R&D personnel in a unit organized as a separate department and operating exclusively in Turkey. For Design Centres, at least 10 full-time equivalent design personnel are required. The President is authorized to lower or raise these thresholds on a sectoral basis.',
          },
          {
            question: 'What are the core tax and social-security incentives provided to R&D and Design Centres?',
            answer:
              '100% of R&D, innovation and design expenditures incurred at the centres can be deducted from the corporate or income tax base. In addition, depending on personnel education level (for example 95% for PhD holders, 90% for master’s holders, 80% for others), an income-tax withholding incentive on the withholding tax return, social-security premium support equal to half of the employer’s share calculated on gross wages, and stamp-duty as well as customs-duty exemptions on documents issued under projects are provided.',
          },
          {
            question: 'Can centre personnel work outside the centre for projects? Are those periods covered by the incentive?',
            answer:
              'Yes. Project activities that must necessarily be carried out off-site, plus periods spent off-site for education — up to 1.5 years for those pursuing a master’s and 2 years for those pursuing a PhD — are within the incentive scope. Furthermore, in R&D and Design Centres, the incentive coverage rates for off-site time spent by personnel (remote work, field studies, etc.) under the income-tax withholding incentive have been extended until 31/12/2026: 100% for IT personnel and 75% for other personnel.',
          },
          {
            question: 'Are contracted R&D and design projects within the scope of support?',
            answer:
              'Yes. For contracted projects, 50% of the expenditures may be deducted by the R&D / Design Centre and the remaining 50% by the contracting taxpayer.',
          },
          {
            question: 'What is the venture-capital obligation?',
            answer:
              'Corporate-tax payers whose R&D deduction amount benefited from on the annual tax return is TRY 5,000,000 or more must transfer 3% of this amount (up to TRY 100,000,000 per year) to a temporary account on the liabilities side and use this fund by year-end as an investment in Venture Capital Investment Funds or in entrepreneurs. If the transfer is not made, 20% of the deducted amount is reversed and a tax penalty is imposed.',
          },
        ],
      },
      {
        title: 'Technology Development Zones (TDZ / Technopark) Consulting',
        description:
          'Questions on tax exemptions for TDZ companies under Law No. 4691, employment supports for PhDs and basic-sciences graduates, the venture-capital obligation and incubation centres.',
        items: [
          {
            question: 'What are the tax exemptions for companies operating in Technology Development Zones (TDZ)?',
            answer:
              'For income- and corporate-tax payers operating in a TDZ, the earnings derived exclusively from software, design and R&D activities within the zone are exempt from income and corporate tax until 31/12/2028. Software deliveries and services produced in the zone — such as system management, data management, business applications, mobile, internet and gaming — are also exempt from VAT.',
          },
          {
            question: 'Is there special support for TDZ companies that hire PhD holders or basic-sciences graduates?',
            answer:
              'Yes. For companies that hire graduates of Ministry-approved “Programs Eligible for Support” — such as mathematics, physics, chemistry, biology, biochemistry, biotechnology, industrial design, industrial design engineering, metallurgy and materials engineering, molecular biology and genetics — the portion of the personnel’s salary equal to the gross minimum wage applicable for that year is covered by the Ministry for 2 years. In addition, an incentive equal to the gross minimum wage is provided by the Ministry for 2 years for PhD-student R&D personnel hired by TDZ companies for the first time.',
          },
          {
            question: 'Is there a venture-capital fund obligation for TDZ companies?',
            answer:
              'Yes. Corporate-tax payers whose exempt earnings within a TDZ are TRY 5,000,000 or more must transfer 3% of this amount (up to TRY 100,000,000 per year) to a temporary account on the liabilities side and use this fund by year-end as an investment in Venture Capital Investment Funds or in entrepreneurs. If the transfer is not made, 20% of the deducted amount is reversed and a tax penalty is imposed.',
          },
          {
            question: 'What is a TDZ Incubation Centre and who can be hosted there?',
            answer:
              'Incubation centres are facilities where office space, equipment, consulting and technical support services are provided in a single point to entrepreneurs in order to develop young and new businesses. R&D, software and design companies whose establishment is at most three years old can take space allocations in incubation centres (for up to 36 months) and benefit from significant financial advantages such as rent reductions.',
          },
        ],
      },
    ],
  },
  legal: {
    lastUpdatedLabel: 'Last updated',
    lastUpdatedDate: '23 April 2026',
    disclaimer:
      'This document is provided for informational purposes only and does not constitute legal advice. Please consult qualified counsel for a tailored legal framework.',
    privacy: {
      pageBadge: 'Legal',
      pageTitleStart: 'Privacy',
      pageTitleAccent: 'Policy',
      pageDescription:
        'At ANT Management Consulting we value visitor privacy. This policy summarises, in plain language, what data we collect, how we use it and the rights you have.',
      sections: [
        {
          title: 'Data We Collect',
          paragraphs: [
            'We collect the data you submit through our contact form: full name, email address, phone number, subject and message content.',
            'We also store your language preference (“tr” or “en”) in your browser’s local storage. This is not a cookie; it is not shared with third parties.',
            'Our site does not run analytics or advertising trackers. We do not use Google Analytics, Facebook Pixel or similar tracking tools.',
          ],
        },
        {
          title: 'Purpose of Data Use',
          paragraphs: [
            'Contact form data is used solely to respond to your inquiry and to carry out our consulting processes.',
            'We do not maintain marketing email lists and do not send commercial messages without your explicit consent.',
          ],
        },
        {
          title: 'Third-Party Service Providers',
          paragraphs: [
            'Form submissions are relayed via FormSubmit (formsubmit.co). Data entered into the form is transmitted through this service to our email at kurumsal@antyonetim.com. FormSubmit operates in the United States, so a cross-border data transfer is involved.',
            'Site typography is loaded from Google Fonts. Google Fonts may process technical information such as IP addresses during the standard font delivery process.',
          ],
        },
        {
          title: 'Data Retention',
          paragraphs: [
            'Contact form data is retained only for as long as necessary to resolve your inquiry and manage any potential contractual relationship. This is typically 2 years from the last communication; specific legal retention obligations may extend this period.',
          ],
        },
        {
          title: 'Security Measures',
          paragraphs: [
            'Our site is served over HTTPS. The contact form includes a simple math-based security check and a honeypot field to mitigate automated submissions.',
          ],
        },
        {
          title: 'Cookies',
          paragraphs: [
            'We do not use analytics or advertising cookies. Only browser local storage is used to persist your language preference. See the Cookie Policy page for details.',
          ],
        },
        {
          title: 'Your Rights and Contact',
          paragraphs: [
            'For rights under Turkey’s Law No. 6698 on the Protection of Personal Data (KVKK), please see our KVKK Notice page.',
            'For any privacy-related questions, reach us at kurumsal@antyonetim.com.',
          ],
        },
      ],
    },
    kvkk: {
      pageBadge: 'Legal',
      pageTitleStart: 'KVKK',
      pageTitleAccent: 'Notice',
      pageDescription:
        'Information notice prepared pursuant to Turkey’s Law No. 6698 on the Protection of Personal Data (KVKK), describing the personal data processed by ANT Management Consulting as data controller.',
      sections: [
        {
          title: '1. Data Controller',
          paragraphs: [
            'This notice is prepared by ANT Management Consulting as data controller, pursuant to Article 10 of Law No. 6698.',
            'Contact: kurumsal@antyonetim.com · +90 (506) 986 26 20',
          ],
        },
        {
          title: '2. Categories of Personal Data Processed',
          paragraphs: [
            'Identity data: full name.',
            'Contact data: email address, phone number.',
            'Customer transaction data: contact form subject and message content.',
            'Transaction security data: form completion time and security check response (to detect bot traffic).',
          ],
        },
        {
          title: '3. Purposes of Processing',
          paragraphs: [
            'Responding to visitor inquiries and providing information about our consulting services.',
            'Establishing and performing a potential consulting engagement.',
            'Communication management consistent with applicable commercial-message legislation.',
            'Limited transaction security processing to prevent bot traffic and abusive form submissions.',
          ],
        },
        {
          title: '4. Collection Method and Legal Basis',
          paragraphs: [
            'Data is collected electronically through the contact form on our website.',
            'Legal bases include KVKK Article 5/2-c (directly related to the establishment or performance of a contract) and KVKK Article 5/2-f (legitimate interest of the data controller without harming the fundamental rights and freedoms of the data subject), alongside Article 5/1 (explicit consent).',
          ],
        },
        {
          title: '5. Data Transfers',
          paragraphs: [
            'Form data is processed via FormSubmit (formsubmit.co), a US-based service; an international transfer is therefore involved. This transfer is strictly necessary for the performance of the service.',
            'Transfers may be made to competent public authorities when required by law.',
          ],
        },
        {
          title: '6. Retention Period',
          paragraphs: [
            'Personal data is retained only for the period required by the processing purposes, within the limits of applicable legislation. The standard retention period for form data is 2 years from the last communication.',
          ],
        },
        {
          title: '7. Rights under KVKK Article 11',
          paragraphs: [
            'You have the right to: learn whether your personal data is being processed; request information about processing; learn the purpose of processing and whether the data is used consistent with that purpose; know the third parties to whom data is transferred domestically or abroad; request correction of incomplete or inaccurate data; request deletion or destruction; request notification of such actions to third parties; object to an outcome derived from automated processing that is adverse to you; and seek compensation for damages arising from unlawful processing.',
          ],
        },
        {
          title: '8. How to Apply',
          paragraphs: [
            'You can submit requests under Article 11 in writing to kurumsal@antyonetim.com. Requests are handled within 30 days in accordance with Article 13 of Law No. 6698.',
          ],
        },
      ],
    },
    cookies: {
      pageBadge: 'Legal',
      pageTitleStart: 'Cookie',
      pageTitleAccent: 'Policy',
      pageDescription:
        'Our site uses no advertising or analytics cookies. This page transparently explains the limited client-side storage we rely on and the third-party requests that occur.',
      sections: [
        {
          title: 'What Is a Cookie?',
          paragraphs: [
            'Cookies are small text files placed in your browser when you visit a website. They may be used for session management, user preferences or visitor analytics.',
          ],
        },
        {
          title: 'Our Cookie Usage',
          paragraphs: [
            'There are no analytics, advertising or profiling cookies on our site. We do not use third-party trackers such as Google Analytics, Facebook Pixel or Hotjar.',
            'A key named “ant-lang” is stored in your browser’s local storage to remember your language preference. Technically this is not a cookie — it is kept only on your device and not sent over the network.',
          ],
        },
        {
          title: 'Third-Party Service Requests',
          paragraphs: [
            'Google Fonts: font files are loaded from fonts.googleapis.com and fonts.gstatic.com for site typography. Google Fonts may process technical information such as IP addresses during standard delivery. Google states that this data is not used for ad targeting.',
            'FormSubmit: a request is made to formsubmit.co only when the contact form is submitted; it does not passively set cookies.',
          ],
        },
        {
          title: 'Managing and Deleting Cookies',
          paragraphs: [
            'You can clear, block or manage your browser’s local storage and cookies at any time through browser settings. If the language preference is cleared, your browser’s locale will be auto-detected on the next visit.',
            'Chrome: Settings → Privacy and Security → Cookies and other site data.',
            'Safari: Preferences → Privacy → Manage Website Data.',
            'Firefox: Options → Privacy & Security → Cookies and Site Data.',
          ],
        },
      ],
    },
  },
  osbPillar: {
    pageBadge: 'Comprehensive Guide',
    pageTitleStart: 'OIZ Consulting —',
    pageTitleAccent: 'All Processes in One Guide',
    pageDescription:
      'A comprehensive guide covering Organized Industrial Zone (OIZ) regulation, land allocation, governance bodies, infrastructure projects, Green OIZ transition, Smart OIZ digitalization and business continuity — in one place.',
    tocTitle: 'What You’ll Find in This Guide',
    sections: [
      {
        id: 'osb-nedir',
        title: 'What is an OIZ and Why Does It Matter?',
        paragraphs: [
          'An Organized Industrial Zone (OIZ) is a designated manufacturing area established to enable planned industrial development, ensure production to defined standards and provide environmental accountability. Turkish Law No. 4562 is the primary regulatory framework.',
          'Over 300 OIZs form the backbone of Turkish industry and account for a significant share of manufacturing output. Companies operating in these zones continuously interact with OIZ management on infrastructure, energy, waste and sustainability matters.',
          'Success of an OIZ is not limited to land allocation — it is determined by governance quality, regulatory compliance, financial discipline, infrastructure maintenance and digital transformation capacity. OIZs are therefore moving towards increasingly professional management.',
        ],
      },
      {
        id: 'mevzuat',
        title: 'OIZ Regulation and Law No. 4562',
        paragraphs: [
          'Law No. 4562 governs OIZ establishment, governance bodies, infrastructure, participant contracts and audit processes. It is complemented by the OIZ Implementing Regulation.',
          'The Implementing Regulation details the duties and powers of bodies such as the Founding Committee, General Assembly, Board of Directors and Supervisory Board, together with land allocation procedures, infrastructure projects, tenders, ministry credits and progress-payment management.',
          'Regulatory compliance is not just a legal duty; it directly affects the civil and criminal liability of board members. Lawful decisions, accurate minutes and carefully drafted participant contracts significantly reduce dispute risk.',
        ],
        bullets: [
          'Primary instrument: Law No. 4562',
          'Secondary: OIZ Implementing Regulation',
          'Bodies: Founding Committee, General Assembly, Board of Directors, Supervisory Board',
          'Oversight: Ministry of Industry and Technology audits',
        ],
      },
      {
        id: 'arsa-tahsis',
        title: 'Land Allocation: Pre-Allocation, Allocation and Revocation',
        paragraphs: [
          'In an OIZ, land is allocated based on the participant’s investment profile, sector alignment and financial capacity — first as a pre-allocation and then, upon fulfilment of investment and production commitments, as a definitive allocation by resolution of the Board of Directors.',
          'At the pre-allocation stage, the method for determining the definitive allocation price must be clearly specified in the contract. Otherwise inflation, valuation differences and currency movements can trigger disputes.',
          'Failure to commence investment, reach production or meet commitments within regulatory timelines may lead to revocation. Revocation processes must be managed professionally given their legal, valuation and potential-damages implications.',
        ],
      },
      {
        id: 'organ-yonetimi',
        title: 'Governance Bodies and Liabilities',
        paragraphs: [
          'Decision-making bodies include the Founding Committee at establishment, then the General Assembly, Board of Directors and Supervisory Board. Each body’s duties, limits and compensation rules are defined in the Implementing Regulation.',
          'Civil and criminal liability of board members is significant. Decisions taken in breach of legislation can affect personal assets, create bans from future public tenders and trigger other sanctions. Attendance-fee payments are also subject to upper limits set by Presidential Decree.',
          'Raising governance quality relies on up-to-date principle decisions, directives, internal rules and regularly reviewed audit reports.',
        ],
      },
      {
        id: 'altyapi',
        title: 'Infrastructure Project Management and Tenders',
        paragraphs: [
          'An OIZ’s value proposition depends directly on timely, high-quality delivery of electricity, water, sewage, natural gas, treatment plants and communication infrastructure — making infrastructure project management one of its most visible and capital-intensive processes.',
          'Ministry credits for infrastructure and financing processes for general administrative expenses require domain expertise on progress-payment approvals, tender management and service-contract drafting.',
          'Transparent tender management, competitive pricing and full regulatory compliance are essential to maintain the confidence of participants and oversight bodies alike.',
        ],
      },
      {
        id: 'yesil-osb',
        title: 'Green OIZ and Sustainability',
        paragraphs: [
          'Green OIZ is a performance tier certified by the Ministry of Industry and Technology based on energy efficiency, renewable-energy use, waste management, water conservation and carbon footprint.',
          'Alignment with the European Green Deal and the Carbon Border Adjustment Mechanism (CBAM) is no longer optional for export-oriented industry; it is now a core determinant of competitiveness. Green OIZs make this transition possible at zone scale.',
          'Certification involves self-assessment, on-site audit and scoring. Managed strategically, Green OIZ certification delivers significant advantages in brand equity, participant attractiveness and public support programmes.',
        ],
      },
      {
        id: 'akilli-osb',
        title: 'Smart OIZ and Digital Transformation',
        paragraphs: [
          'Smart OIZ is a modern management model where big data, AI, IoT and process automation are integrated into OIZ management — moving energy metering, waste, security, participant communications and operational reporting onto a digital backbone.',
          'Digital archiving and institutional-memory preservation are critical to avoid knowledge loss during board transitions, to accelerate audits and to raise decision quality.',
          'Data-driven decision-support mechanisms offer tangible advantages in investment evaluation, allocation prioritisation and infrastructure planning.',
        ],
      },
      {
        id: 'is-surekliligi',
        title: 'Business Continuity and Risk Management',
        paragraphs: [
          'Resilience against disasters, cyber incidents and unexpected disruptions is now a responsibility for OIZs. The OIZ Implementing Regulation has formalised Business Continuity Plan (BCP) preparation as an official process.',
          'A BCP sets out risk analysis, response plans, backup strategies and recovery procedures for uninterrupted operation of critical processes. Plan viability is tested through regular drills and refreshed risk assessments.',
          'Emergency management requires a resilience-oriented strategic approach beyond traditional methods — a key differentiator for both compliance and stakeholder trust.',
        ],
      },
      {
        id: 'ant-ile-calisma',
        title: 'Working with ANT Management Consulting',
        paragraphs: [
          'With 15 years of inspection experience at the Ministry of Industry and Technology, we serve as a strategic partner across the full OIZ lifecycle — from establishment and operation to regulatory compliance and digital transformation.',
          'Our engagement follows five stages: free introductory call, needs assessment, scope definition, roadmap, implementation and monitoring. Every project includes an engineering-grade work plan, measurable outputs, regular reporting and audit-ready practices.',
          'The combination of zero-error discipline, data-driven decision support and public-sector experience positions us not just as a consultant but as a partner in long-term OIZ success.',
        ],
      },
    ],
    ctaHeading: 'Looking for a strategic partner across your OIZ lifecycle?',
    ctaText:
      'Let’s evaluate your needs in a non-binding free introductory call.',
    ctaLabel: 'Schedule a Free Introductory Call',
  },
  glossary: {
    pageBadge: 'OIZ, R&D and Incentive Glossary',
    pageTitleStart: 'OIZ and Industrial',
    pageTitleAccent: 'Terminology Glossary',
    pageDescription:
      'Concise definitions of 50+ key concepts around Organized Industrial Zones (OIZ), R&D and Design Centres, Technoparks, KOSGEB-TÜBİTAK and green transformation.',
    searchPlaceholder: 'Search term…',
    emptyState: 'No matching terms found.',
    backToTop: 'Back to top',
    categories: [
      {
        title: 'Organized Industrial Zone (OIZ)',
        terms: [
          {
            term: 'Organized Industrial Zone (OIZ)',
            definition:
              'A designated manufacturing area established under Law No. 4562 where infrastructure is delivered collectively to enable planned industrial development.',
          },
          { term: 'Law No. 4562 (OIZ Law)', definition: 'Primary Turkish law governing OIZ establishment, governance bodies and infrastructure and oversight processes.' },
          { term: 'OIZ Implementing Regulation', definition: 'Secondary legislation detailing application of Law No. 4562 including procedural provisions.' },
          { term: 'Founding Committee', definition: 'Founding governance body composed of representatives from local administrations and chambers of commerce/industry.' },
          { term: 'General Assembly', definition: 'Highest decision-making body, replacing the Founding Committee after OIZ registration.' },
          { term: 'Board of Directors', definition: 'Executive body responsible for allocations, tenders, contracts and day-to-day operations.' },
          { term: 'Supervisory Board', definition: 'Independent body auditing financial and administrative operations and reporting to the General Assembly.' },
          { term: 'Regional Directorate', definition: 'Professional management unit running daily administrative and technical services of the OIZ.' },
          { term: 'Participant', definition: 'A manufacturer that has received a parcel allocation in an OIZ and operates from that parcel.' },
          { term: 'Pre-Allocation', definition: 'Provisional land allocation contingent on fulfilment of investment and production commitments.' },
          { term: 'Definitive Allocation', definition: 'Permanent land grant to a participant after pre-allocation conditions are fulfilled.' },
          { term: 'Allocation Revocation', definition: 'Withdrawal of allocation by the Board where investment or production commitments are not met within regulatory timelines.' },
          { term: 'Attendance Fee', definition: 'Compensation paid to OIZ body members per meeting or per month, capped by Presidential Decree.' },
          { term: 'Ministry Credit', definition: 'Credit support provided by the Ministry of Industry and Technology for OIZ infrastructure and general administration.' },
          { term: 'Progress Payment', definition: 'Payment in infrastructure projects tied to the completion percentage, evidenced by a technical report.' },
          { term: 'Green OIZ', definition: 'Sustainability performance tier certified by the Ministry based on energy, waste, water and carbon criteria.' },
          { term: 'Smart OIZ', definition: 'Digital transformation model integrating big data, AI, IoT and automation into OIZ management.' },
          { term: 'Business Continuity Plan (BCP)', definition: 'Document defining risk analysis, response and recovery procedures for uninterrupted critical operations.' },
        ],
      },
      {
        title: 'R&D and Design Centre',
        terms: [
          { term: 'R&D Centre', definition: 'Certified unit under Law No. 5746 benefiting from R&D deduction, subject to minimum staff and facility requirements.' },
          { term: 'Design Centre', definition: 'Unit focused on industrial design benefiting from incentives similar to R&D Centres under Law No. 5746.' },
          { term: 'Law No. 5746', definition: 'Law on Supporting R&D and Design Activities, defining R&D deduction, withholding incentive and social-security premium support.' },
          { term: 'R&D Deduction', definition: 'Tax advantage allowing 100% of eligible R&D expenses to be deducted from the corporate tax base.' },
          { term: 'Full-Time Equivalent (FTE)', definition: 'Calculation method measuring R&D personnel work time for eligibility thresholds.' },
          { term: 'Person-Month', definition: 'Work-time unit representing one person working for one month on average on a project.' },
          { term: 'Activity Report', definition: 'Annual report documenting R&D or Design Centre activities, outputs and expenses to the Ministry.' },
          { term: 'Pre-Audit', definition: 'Advisor-led simulation of the Ministry audit to detect and remediate risk findings in advance.' },
        ],
      },
      {
        title: 'Technopark and TDZ',
        terms: [
          { term: 'Technopark / Technology Development Zone (TDZ)', definition: 'Special economic zone established under Law No. 4691 where R&D, design and software activities enjoy tax exemptions.' },
          { term: 'Law No. 4691', definition: 'Law on Technology Development Zones defining incentives and managing-company operations.' },
          { term: 'Managing Company', definition: 'Legal entity handling planning, operation, leasing, project admission and Ministry coordination of a TDZ.' },
          { term: 'Technopark Portal', definition: 'Ministry-managed system used for TDZ project submissions, exemption certificates, personnel records and audits.' },
          { term: 'Technopark Exemption', definition: 'Bundle of income/corporate tax, VAT and withholding exemptions granted to zone firms under Law No. 4691.' },
          { term: 'Incubation Centre (GO)', definition: 'Early-stage startup facility that, since 2022, may be opened outside the TDZ boundary with Ministry approval.' },
        ],
      },
      {
        title: 'KOSGEB, TÜBİTAK and Grants',
        terms: [
          { term: 'KOSGEB', definition: 'Small and Medium Enterprises Development Organization of Türkiye; runs SME grant and support programmes.' },
          { term: 'SME', definition: 'Enterprise classified by headcount, annual turnover or balance-sheet thresholds defined by regulation.' },
          { term: 'SME Declaration', definition: 'Document proving SME status, kept up to date for KOSGEB applications.' },
          { term: 'TÜBİTAK', definition: 'Scientific and Technological Research Council of Türkiye; evaluates and funds R&D and innovation projects.' },
          { term: 'TÜBİTAK 1501', definition: 'Industrial R&D Projects Support Programme targeting medium and large enterprises.' },
          { term: 'TÜBİTAK 1507', definition: 'SME R&D Start-up Support Programme for SMEs within their first five R&D projects.' },
        ],
      },
      {
        title: 'Green Transformation and Other',
        terms: [
          { term: 'European Green Deal', definition: 'EU strategic framework for the 2050 carbon-neutral target.' },
          { term: 'Carbon Border Adjustment Mechanism (CBAM)', definition: 'EU border pricing mechanism on certain imports based on their carbon footprint.' },
          { term: 'Sustainability Certification', definition: 'Third-party verification of energy, water, waste and carbon performance (e.g. Green OIZ, LEED, BREEAM).' },
          { term: 'KVKK', definition: 'Turkey’s Law No. 6698 on the Protection of Personal Data, the national data-protection framework.' },
          { term: 'Resilience', definition: 'Capacity of an organisation to sustain operations through disruptions and recover quickly.' },
          { term: 'Digital Transformation', definition: 'Redesign of business processes through digital technologies for efficiency, transparency and quality.' },
        ],
      },
    ],
  },
};

export const translations: Record<Lang, Dictionary> = { tr, en };
