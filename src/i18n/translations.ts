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
    emailSupport: string;
    addressLine1: string;
    addressLine2: string;
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
    formSubject: string;
    formMessage: string;
    formSubmit: string;
    formSuccess: string;
    infoTitle: string;
    infoPhoneLabel: string;
    infoPhoneSub: string;
    infoEmailLabel: string;
    infoEmailSub: string;
    infoAddressLabel: string;
    infoAddressLine1: string;
    infoAddressLine2: string;
    linkedinTitle: string;
    linkedinDescription: string;
    linkedinCta: string;
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
          'Yönetim danışmanlığı, Ar-Ge, inovasyon ve kurumsal gelişim alanlarında sunduğumuz uzman çözümlerle işletmenizi geleceğe taşıyoruz.',
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
          'Hibe ve teşvik danışmanlığından ISO belgelendirmeye, Ar-Ge projelerinden stratejik planlamaya kadar tüm süreçlerde yanınızdayız.',
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
              label: 'Arsa Tahsis Süreçleri',
              text: 'Yer seçimi, parselasyon ve katılımcı tahsis prosedürlerinin mevzuata uygun yönetimi.',
            },
            {
              label: 'Organ Yönetimi',
              text: 'Müteşebbis Heyet, Yönetim Kurulu ve Denetim Kurulu süreçlerinin yapılandırılması.',
            },
            {
              label: 'Sözleşme Yönetimi',
              text: 'Katılımcı ve üçüncü taraflarla yapılan teknik ve idari sözleşmelerin hazırlanması.',
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
          title: '3. Dijital Dönüşüm ve Veri Odaklı Yönetim',
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
          title: '4. İş Sürekliliği ve Risk Yönetimi',
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
          title: '5. Teknoloji ve İnovasyon Ekosistemleri',
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
      { label: 'Hakkımızda', href: '/#kurumsal' },
      { label: 'Ekibimiz', href: '/#kurumsal' },
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
    workingHours: 'Pzt - Cum, 09:00 - 18:00',
    addressLine1: 'Levent Mah. Büyükdere Cad.',
    addressLine2: 'No: 185, Kat: 12, 34394 Şişli / İstanbul',
    copyright: (year) => `© ${year} ANT Danışmanlık. Tüm hakları saklıdır.`,
    madeIn: 'İstanbul’da hazırlanmıştır',
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
    formSubject: 'Konu',
    formMessage: 'Mesajınız',
    formSubmit: 'Mesajı Gönder',
    formSuccess: 'Mesajınız alındı. Kısa sürede size dönüş yapacağız.',
    infoTitle: 'İletişim Bilgileri',
    infoPhoneLabel: 'Telefon',
    infoPhoneSub: 'Pzt - Cum, 09:00 - 18:00',
    infoEmailLabel: 'E-posta',
    linkedinTitle: 'LinkedIn Üzerinden Bağlantı Kurun',
    linkedinDescription:
      'Güncel içerikler, sektörel analizler ve danışmanlık notları için LinkedIn profilimi takip edebilirsiniz.',
    linkedinCta: 'LinkedIn Profilini Görüntüle',
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
              label: 'Land Allocation Processes',
              text: 'Regulatory-compliant management of site selection, parceling and participant allocation procedures.',
            },
            {
              label: 'Governance Body Management',
              text: 'Structuring the processes of the Entrepreneur Committee, Board of Directors and Audit Board.',
            },
            {
              label: 'Contract Management',
              text: 'Preparation of technical and administrative contracts with participants and third parties.',
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
          title: '3. Digital Transformation and Data-Driven Management',
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
          title: '4. Business Continuity and Risk Management',
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
          title: '5. Technology and Innovation Ecosystems',
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
      { label: 'About Us', href: '/#kurumsal' },
      { label: 'Our Team', href: '/#kurumsal' },
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
    workingHours: 'Mon - Fri, 09:00 - 18:00',
    emailSupport: '24/7 email support',
    addressLine1: 'Levent Mah. Büyükdere Cad.',
    addressLine2: 'No: 185, Floor 12, 34394 Şişli / Istanbul',
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
    formSubject: 'Subject',
    formMessage: 'Your Message',
    formSubmit: 'Send Message',
    formSuccess: 'Your message has been received. We will get back to you soon.',
    infoTitle: 'Contact Information',
    infoPhoneLabel: 'Phone',
    infoPhoneSub: 'Mon - Fri, 09:00 - 18:00',
    infoEmailLabel: 'Email',
    infoEmailSub: '24/7 email support',
    infoAddressLabel: 'Office Address',
    infoAddressLine1: 'Levent Mah. Büyükdere Cad.',
    infoAddressLine2: 'No: 185, Floor 12, 34394 Şişli / Istanbul',
    linkedinTitle: 'Connect on LinkedIn',
    linkedinDescription:
      'Follow my LinkedIn profile for regular content, sector analyses and consulting notes.',
    linkedinCta: 'View LinkedIn Profile',
  },
};

export const translations: Record<Lang, Dictionary> = { tr, en };
