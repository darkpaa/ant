export type Lang = 'tr' | 'en';

export interface HeroSlide {
  badge: string;
  headline: string;
  highlightedWord: string;
  headlineEnd: string;
  subHeadline: string;
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
        badge: 'Profesyonel Danışmanlık Hizmetleri',
        headline: 'Geleceğinizi ',
        highlightedWord: 'Birlikte',
        headlineEnd: '\nİnşa Ediyoruz',
        subHeadline:
          'OSB, Ar-Ge ve Tasarım Yönetim danışmanlığı, inovasyon ve kurumsal gelişim alanlarında sunduğumuz uzman çözümlerle kuruluşunuzu geleceğe taşıyoruz.',
      },
      {
        badge: 'Sürdürülebilir Başarı',
        headline: 'Stratejik ',
        highlightedWord: 'Büyüme',
        headlineEnd: '\nOrtağınız',
        subHeadline:
          'İşletmenizin potansiyelini keşfediyor, sürdürülebilir büyüme için kanıtlanmış stratejiler geliştiriyoruz. Hedeflerinize birlikte ulaşıyoruz.',
      },
      {
        badge: 'Uçtan Uca Danışmanlık',
        headline: 'Kurumsal ',
        highlightedWord: 'Dönüşüm',
        headlineEnd: '\nYol Haritanız',
        subHeadline:
          'Hibe ve teşvik danışmanlığında, Ar-Ge projelerinde ve stratejik planlamada yanınızdayız.',
      },
    ],
    ctaServices: 'Hizmetlerimizi İnceleyin',
    ctaContact: 'Bize Ulaşın',
    prevSlide: 'Önceki slayt',
    nextSlide: 'Sonraki slayt',
  },
  services: {
    badge: 'Hizmetlerimiz',
    titleStart: 'Kapsamlı Danışmanlık',
    titleAccent: 'Çözümlerimiz',
    description:
      'İşletmenizin her aşamasında ihtiyaç duyduğunuz profesyonel danışmanlık desteğini sunuyor, büyüme yolculuğunuzda stratejik ortağınız oluyoruz.',
    detail: 'Detaylı Bilgi',
    close: 'Kapat',
    contactUs: 'Bize Ulaşın',
    items: [
      {
        title: 'OSB Mevzuat ve Yönetim Danışmanlığı',
        description:
          '4562 sayılı OSB Kanunu ve ilgili uygulama yönetmelikleri çerçevesinde, bölgelerin idari ve teknik süreçlerini yönetiyoruz.',
      },
      {
        title: 'Ar-Ge ve İnovasyon',
        description:
          'Ar-Ge projelerinizi kurguluyor, TÜBİTAK ve KOSGEB başvurularınızı yönetiyoruz. İnovasyon stratejinizi şekillendirip rekabet avantajı yaratıyoruz.',
      },
      {
        title: 'Hibe ve Teşvikler',
        description:
          'Devlet hibe programları, AB fonları ve teşvik mekanizmalarından en yüksek verimi almanız için başvuru süreçlerinizi uçtan uca yönetiyoruz.',
      },
      {
        title: 'Kurumsal Gelişim',
        description:
          'Kurumsallaşma yol haritanızı çiziyor, organizasyonel yapınızı modernize ediyoruz. İnsan kaynakları ve süreç yönetimi alanlarında kapsamlı destek sunuyoruz.',
      },
      {
        title: 'Yönetim Danışmanlığı',
        description:
          'İş süreçlerinizi optimize ediyor, kurumsal yönetim yapınızı güçlendiriyoruz. Stratejik karar alma süreçlerinizde yanınızda olarak sürdürülebilir büyüme sağlıyoruz.',
      },
      {
        title: 'Stratejik Planlama',
        description:
          'Uzun vadeli büyüme hedeflerinizi somut aksiyon planlarına dönüştürüyoruz. Pazar analizi, rekabet stratejisi ve yol haritası oluşturma konularında rehberlik ediyoruz.',
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
            '4562 sayılı OSB Kanunu ve ilgili uygulama yönetmelikleri çerçevesinde, bölgelerin idari ve teknik süreçlerini yönetiyoruz.',
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
              label: 'Çevresel Göstergeler',
              text: 'Karbon ayak izi ölçümü ve kaynak verimliliği analizi.',
            },
            {
              label: 'Yeşil Dönüşüm',
              text: 'Avrupa Yeşil Mutabakatı uyum süreçleri ve performans takibi.',
            },
          ],
        },
        {
          title: '3. Finansal ve Altyapı Yönetimi',
          intro:
            'OSB’lerin finansal sürdürülebilirliğini ve altyapı yatırımlarını, mevzuata ve bütçe disiplinine uygun biçimde yönetiyoruz.',
          points: [
            {
              label: 'Bakanlık Kredileri ve Teşvikler',
              text: 'Altyapı ve genel idare giderleri için kredi kullanımı, borçlanma ve hakediş raporlarının vize edilmesi.',
            },
            {
              label: 'İhale Yönetimi',
              text: 'OSB’lerde ihale süreçlerinin hazırlanması ve yürütülmesi.',
            },
            {
              label: 'Altyapı Tesisleri',
              text: 'Elektrik, su, kanalizasyon, doğalgaz, arıtma tesisi gibi altyapı tesislerinin kurma ve işletme hakkına ilişkin iş ve işlemler; hizmet sözleşmeleri ve bedel tahakkuk esaslarının belirlenmesi.',
            },
          ],
        },
        {
          title: '4. Dijital Dönüşüm ve Veri Odaklı Yönetim',
          intro:
            'Geleneksel sanayi yönetimini modern veri teknolojileriyle birleştirerek, “Akıllı OSB” vizyonunu hayata geçiriyoruz.',
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
            'AR-GE ve inovasyonun sanayi ile buluştuğu ekosistemlerin kurulmasını sağlıyoruz.',
          points: [
            {
              label: 'TEKMER ve TGB Kurulumu',
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
          title: '1. 5746 Sayılı Kanun: Ar-Ge ve Tasarım Merkezleri Yönetimi',
          intro:
            'İşletme bünyesinde kurulan merkezlerin, sürdürülebilir bir teşvik mekanizmasına dönüşmesi için teknik izleme ve denetim hazırlığı süreçlerini yürütüyoruz.',
          points: [
            {
              label: 'Kuruluş ve Yapılandırma',
              text: 'Merkezin fiziksel alan tasarımı ve personel nitelik analizinin mevzuat kriterlerine uygun hazırlanması.',
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
          intro:
            'Teknopark yönetici şirketleri ve bölge içerisinde yer alan girişimci firmalar için mevzuata tam uyumlu ekosistem yönetimi sağlıyoruz.',
          points: [
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
    badge: 'Neden Biz?',
    titleStart: 'Başarınız İçin',
    titleAccent: 'Doğru Partner',
    description:
      "ANT Danışmanlık olarak, yalnızca danışmanlık vermekle kalmıyor; işletmenizin DNA'sını anlayarak sürdürülebilir büyüme stratejileri oluşturuyoruz. Metodolojimiz, kanıtlanmış sonuçlara ve sektörel uzmanlığa dayanır.",
    badgeExperienceValue: '10+',
    badgeExperienceLabel: 'Yıllık',
    badgeExperienceSub: 'Deneyim',
    altImage: 'ANT Danışmanlık Uzman Ekip',
    points: [
      {
        title: 'Sonuç Odaklı Yaklaşım',
        description:
          'Sadece strateji önermekle kalmıyor, sahada uygulamayı takip ederek ölçülebilir sonuçlar elde ediyoruz.',
      },
      {
        title: 'Güvenilir İş Ortağı',
        description:
          '10 yılı aşkın sektör deneyimimizle müşterilerimizin en güvendiği stratejik partneriyiz.',
      },
      {
        title: 'Kişiye Özel Çözümler',
        description:
          'Her işletmenin ihtiyacının farklı olduğunu biliyor, size özel çözüm paketleri sunuyoruz.',
      },
      {
        title: 'Uzman Kadro',
        description:
          'Alanında uzman danışman kadromuzla sektörünüze en uygun çözümleri geliştiriyoruz.',
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
      { label: 'Gizlilik Politikası', href: '#' },
      { label: 'KVKK Aydınlatma Metni', href: '#' },
      { label: 'Çerez Politikası', href: '#' },
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
            'Organize Sanayi Bölgeleri Uygulama Yönetmeliği gereği OSB\'lerin bir İş Sürekliliği Planı (İSP) hazırlaması artık resmi bir yükümlülüktür. Bu kapsamda AFAD\'ın yayımladığı "Organize Sanayi Bölgeleri İçin İş Sürekliliği Planı Hazırlama ve Uygulama Kılavuzu", OSB\'lerin süreci sağlıklı ve sistematik biçimde kurması için temel bir rehber niteliğindedir.',
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
    pageTitleStart: 'Mühendislik Disiplini, Kamu Tecrübesi ve',
    pageTitleAccent: 'Stratejik Yönetim',
    pageDescription:
      'Sanayi, teknoloji ve kamu yönetimi alanlarında edinilmiş çok disiplinli bilgi birikimiyle; stratejik yönetim, denetim ve kurumsal rehberlik hizmetleri sunuyoruz.',
    introTitle: 'Ant Yönetim Danışmanlık ve Mühendislik',
    introParagraphs: [
      'Ant Yönetim Danışmanlık ve Mühendislik; sanayi, teknoloji ve kamu yönetimi alanlarında edinilmiş çok disiplinli bilgi birikimi ile, sanayi ve Ar-Ge ekosisteminin dinamiklerini hem teknik hem de yönetimsel boyutta derinlemesine analiz eden bir vizyonla kurulmuş; stratejik yönetim, denetim ve kurumsal rehberlik hizmetleri sunan uzman bir yapıdır.',
    ],
    founderTitle: 'Kurucumuz',
    founderName: 'İlker Tura',
    founderRole: 'Kurucu ve Yönetici Ortak',
    founderParagraphs: [
      'Kurucumuz İlker Tura; Elektrik-Elektronik Mühendisliği, İşletme ve Kamu Yönetimi alanlarında aldığı lisans ve yüksek lisans eğitimini, kamuda 15 yılı aşkın tecrübesiyle birleştirerek sanayi ve teknoloji ekosistemine değer katmayı amaçlamaktadır.',
      'Sanayi ve Teknoloji Bakanlığı’nda 2012-2026 yılları arasında Müfettiş Yardımcısı, Müfettiş ve Başmüfettiş olarak görev alan İlker Tura, son olarak 2019-2026 yılları arasında yaklaşık 6,5 yıl Rehberlik ve Teftiş Başkan Yardımcılığı görevini yürütmüştür.',
      'Bu süreçte; Organize Sanayi Bölgeleri (OSB), Teknoloji Geliştirme Bölgeleri, Ar-Ge ve Tasarım Merkezleri ve Endüstri Bölgeleri’nin denetim, mevzuat uyumu ve yönetimsel süreçlerinin koordinasyonunda roller üstlenmiştir. Bu süreçlerde edinilen kapsamlı bilgi birikimi; Ant Yönetim’in çözüm üretme kabiliyetine doğrudan yansımaktadır.',
    ],
    highlights: [
      { label: 'Kamu Tecrübesi', value: '15+ Yıl' },
      { label: 'Bakanlık Müfettişliği', value: '2012-2026' },
      { label: 'Rehberlik ve Teftiş Başkan Yardımcılığı', value: '6,5 Yıl' },
    ],
    ctaText: 'Projeleriniz için stratejik çözüm ortağınız olmaya hazırız.',
    ctaLabel: 'Bizimle İletişime Geçin',
  },
};

const en: Dictionary = {
  nav: {
    corporate: 'About',
    services: 'Services',
    references: 'References',
    blog: 'Blog',
    contact: 'Contact',
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
        badge: 'Professional Consulting Services',
        headline: 'Building Your ',
        highlightedWord: 'Future',
        headlineEnd: '\nTogether',
        subHeadline:
          'We move your business forward with expert solutions in management consulting, R&D, innovation and corporate development.',
      },
      {
        badge: 'Sustainable Success',
        headline: 'Your Strategic ',
        highlightedWord: 'Growth',
        headlineEnd: '\nPartner',
        subHeadline:
          'We unlock your business potential and develop proven strategies for sustainable growth. We reach your goals together.',
      },
      {
        badge: 'End-to-End Consulting',
        headline: 'Your Corporate ',
        highlightedWord: 'Transformation',
        headlineEnd: '\nRoadmap',
        subHeadline:
          'From grants and incentives to ISO certification, from R&D projects to strategic planning — we stand by you at every step.',
      },
    ],
    ctaServices: 'Explore Our Services',
    ctaContact: 'Get in Touch',
    prevSlide: 'Previous slide',
    nextSlide: 'Next slide',
  },
  services: {
    badge: 'Services',
    titleStart: 'Comprehensive Consulting',
    titleAccent: 'Solutions',
    description:
      'We deliver the professional consulting support you need at every stage of your business and become your strategic partner in growth.',
    detail: 'Learn More',
    close: 'Close',
    contactUs: 'Contact Us',
    items: [
      {
        title: 'OIZ Regulation & Governance Consulting',
        description:
          'Within the framework of Law No. 4562 on Organized Industrial Zones and related regulations, we manage the administrative and technical processes of the zones.',
      },
      {
        title: 'R&D and Innovation',
        description:
          'We design your R&D projects and manage TÜBİTAK and KOSGEB applications. We shape your innovation strategy to create a competitive edge.',
      },
      {
        title: 'Grants and Incentives',
        description:
          'We manage the full application process for government grants, EU funds and incentive mechanisms to maximize the value you receive.',
      },
      {
        title: 'Corporate Development',
        description:
          'We draw your institutionalization roadmap and modernize your organizational structure. We provide comprehensive support in HR and process management.',
      },
      {
        title: 'Management Consulting',
        description:
          'We optimize your business processes and strengthen corporate governance. As your partner in strategic decision-making, we enable sustainable growth.',
      },
      {
        title: 'Strategic Planning',
        description:
          'We convert your long-term growth goals into concrete action plans. We guide you through market analysis, competitive strategy and roadmap creation.',
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
              label: 'Environmental Indicators',
              text: 'Carbon footprint measurement and resource efficiency analysis.',
            },
            {
              label: 'Green Transition',
              text: 'Compliance with the European Green Deal and performance monitoring.',
            },
          ],
        },
        {
          title: '3. Financial and Infrastructure Management',
          intro:
            'We manage the financial sustainability and infrastructure investments of OIZs in line with regulations and budget discipline.',
          points: [
            {
              label: 'Ministry Loans and Incentives',
              text: 'Use of loans for infrastructure and general administration expenses, borrowing processes, and approval of progress-payment reports.',
            },
            {
              label: 'Tender Management',
              text: 'Preparation and execution of tender processes in OIZs.',
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
            'We enable the creation of ecosystems where R&D and innovation meet industry.',
          points: [
            {
              label: 'TEKMER & TDZ Setup',
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
          title: '1. Law No. 5746: R&D and Design Centre Management',
          intro:
            'We carry out the technical monitoring and audit-readiness processes required to turn in-house centres into a sustainable incentive mechanism.',
          points: [
            {
              label: 'Setup and Structuring',
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
          intro:
            'We provide fully regulation-compliant ecosystem management for technopark management companies and start-ups located within the zones.',
          points: [
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
    badge: 'Why Us?',
    titleStart: 'The Right Partner for',
    titleAccent: 'Your Success',
    description:
      "At ANT Consulting we don't just give advice — we understand the DNA of your business to craft sustainable growth strategies. Our methodology is rooted in proven outcomes and sectoral expertise.",
    badgeExperienceValue: '10+',
    badgeExperienceLabel: 'Years of',
    badgeExperienceSub: 'Experience',
    altImage: 'ANT Consulting Expert Team',
    points: [
      {
        title: 'Results-Oriented Approach',
        description:
          'We don’t just propose strategies — we track field execution to deliver measurable outcomes.',
      },
      {
        title: 'Trusted Business Partner',
        description:
          'With over 10 years of sector experience, we are the strategic partner our clients trust most.',
      },
      {
        title: 'Tailored Solutions',
        description:
          'We know every business is different and offer solution packages tailored to you.',
      },
      {
        title: 'Expert Team',
        description:
          'Our expert consultants craft the most suitable solutions for your sector.',
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
      { label: 'Privacy Policy', href: '#' },
      { label: 'GDPR Notice', href: '#' },
      { label: 'Cookie Policy', href: '#' },
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
            'Under the Organized Industrial Zones Implementing Regulation, preparing a Business Continuity Plan (BCP) is now an official obligation for OIZs. In this context, AFAD\'s published "Business Continuity Plan Preparation and Implementation Guide for Organized Industrial Zones" serves as a fundamental reference for OIZs to establish the process in a sound and systematic manner.',
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
    pageTitleStart: 'Engineering Discipline, Public Service Experience and',
    pageTitleAccent: 'Strategic Management',
    pageDescription:
      'With multi-disciplinary know-how in industry, technology and public administration, we deliver strategic management, audit and corporate advisory services.',
    introTitle: 'Ant Management Consulting and Engineering',
    introParagraphs: [
      'Ant Management Consulting and Engineering is an expert firm founded on a vision that analyses the dynamics of the industrial and R&D ecosystem in depth — technically and managerially — drawing on multi-disciplinary expertise gained across industry, technology and public administration. We deliver strategic management, audit and corporate advisory services.',
    ],
    founderTitle: 'Our Founder',
    founderName: 'İlker Tura',
    founderRole: 'Founder and Managing Partner',
    founderParagraphs: [
      'İlker Tura combines his undergraduate and graduate education in Electrical-Electronics Engineering, Business Administration and Public Administration with more than 15 years of public-sector experience, aiming to add value to the industrial and technology ecosystem.',
      'Between 2012 and 2026 he served at the Ministry of Industry and Technology as Assistant Inspector, Inspector and Chief Inspector, most recently as Deputy Head of the Guidance and Inspection Board for approximately 6.5 years from 2019 to 2026.',
      'During this period he led the audit, regulatory compliance and governance coordination of Organized Industrial Zones (OIZ), Technology Development Zones, R&D and Design Centres and Industrial Zones. The deep experience accumulated in these roles is reflected directly in Ant Management’s ability to deliver solutions.',
    ],
    highlights: [
      { label: 'Public Service', value: '15+ Years' },
      { label: 'Ministry Inspectorate', value: '2012-2026' },
      { label: 'Guidance & Inspection', value: '6.5 Years' },
    ],
    ctaText: 'We are ready to be your strategic solution partner.',
    ctaLabel: 'Get in Touch',
  },
};

export const translations: Record<Lang, Dictionary> = { tr, en };
