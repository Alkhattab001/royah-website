import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        howWeHelp: 'How We Help',
        meeting: 'The Meeting',
        howWeWork: 'How We Work',
        whyRoyah: 'Why Royah',
        bookCta: 'Book a Meeting',
      },
      hero: {
        headline: 'Your Partner in Digital Transformation',
        subheadline:
          'We help businesses in Oman build smart systems, automate operations, and integrate AI in practical, considered ways.',
        cta: 'Book a Free 30-Min Meeting',
        languageToggle: 'العربية',
      },
      capabilities: {
        eyebrow: 'How We Help',
        title: 'Five capabilities, one partnership',
        subtitle:
          'We adapt to your business — whether you are starting fresh or moving to a new chapter.',
        items: {
          digital: {
            title: 'Digital Transformation',
            desc: 'Transform your business from manual operations into a unified, intelligent platform that supports growth.',
          },
          ai: {
            title: 'AI Solutions',
            desc: 'Smart assistants, conversational automation, and intelligent data analysis.',
          },
          systems: {
            title: 'Business Systems',
            desc: 'Odoo implementations and custom systems built to fit your business.',
          },
          automation: {
            title: 'Process Automation',
            desc: 'Save time by automating repetitive tasks and connecting your tools.',
          },
          consulting: {
            title: 'Technical Consulting',
            desc: 'Strategic guidance on technology and making the right decisions.',
          },
        },
      },
      meeting: {
        eyebrow: 'The Meeting',
        title: 'A 30-minute conversation that changes how you see your business',
        subtitle: 'In 30 minutes, you walk away with:',
        items: [
          'A clear assessment of your current technical state',
          '3 practical next steps you can act on immediately',
          'An honest recommendation — even if we are not the right fit',
        ],
        cta: 'Book the Meeting',
      },
      process: {
        eyebrow: 'How We Work',
        title: 'A process built on clarity',
        steps: [
          { num: '01', title: 'Discovery Meeting', desc: 'Free, 30 minutes — we understand your business.' },
          { num: '02', title: 'Custom Proposal', desc: 'Detailed scope, timeline, and pricing — no obligation.' },
          { num: '03', title: 'Build & Deliver', desc: 'We build, test, and deploy.' },
          { num: '04', title: 'Ongoing Support', desc: 'Maintenance and continuous improvement.' },
        ],
      },
      why: {
        eyebrow: 'Why Royah',
        title: 'Local context, global standards',
        items: [
          { title: 'Deep expertise', desc: "Master's in AI + Bachelor's in Software Engineering" },
          { title: 'Certified partner', desc: 'Official Odoo Learning Partner' },
          { title: 'Truly bilingual', desc: 'Arabic and English, both at the same quality' },
          { title: 'Local context', desc: 'Omani founder serving Omani businesses' },
        ],
      },
      finalCta: {
        title: 'Ready to start?',
        subtitle: 'A free 30-minute meeting. No commitment. No pressure.',
        cta: 'Book Your Meeting Now',
      },
      footer: {
        company: 'Royah Advanced Technologies',
        location: 'Sultanate of Oman • Muscat',
        email: 'info@royah.om',
        phone: '+968 90663136',
        rights: '© 2026 Royah Advanced Technologies. All rights reserved.',
      },
    },
  },
  ar: {
    translation: {
      nav: {
        howWeHelp: 'كيف نساعدك',
        meeting: 'الاجتماع',
        howWeWork: 'كيف نعمل',
        whyRoyah: 'لماذا رؤية',
        bookCta: 'احجز اجتماعاً',
      },
      hero: {
        headline: 'شريكك في التحول الرقمي',
        subheadline:
          'نُساعد الشركات في عُمان على بناء أنظمة ذكية، وأتمتة عملياتها، ودمج الذكاء الاصطناعي بطريقة عملية ومدروسة.',
        cta: 'احجز اجتماعاً مجانياً — ٣٠ دقيقة',
        languageToggle: 'English',
      },
      capabilities: {
        eyebrow: 'كيف نساعدك',
        title: 'خمس قدرات، شراكة واحدة',
        subtitle: 'نتكيّف مع طبيعة شركتك — سواء كنت تبدأ من الصفر أو تنتقل إلى مرحلة جديدة.',
        items: {
          digital: {
            title: 'التحول الرقمي',
            desc: 'تحويل عملك من العمليات اليدوية إلى منصة موحدة وذكية تخدم نمو شركتك.',
          },
          ai: {
            title: 'حلول الذكاء الاصطناعي',
            desc: 'مساعدون أذكياء، وأتمتة المحادثات، وتحليل البيانات بدقة.',
          },
          systems: {
            title: 'أنظمة الأعمال',
            desc: 'تطبيق Odoo وأنظمة مخصصة تتكيف مع طبيعة شركتك.',
          },
          automation: {
            title: 'أتمتة العمليات',
            desc: 'وفّر الوقت بأتمتة المهام المتكررة وربط أدواتك ببعضها.',
          },
          consulting: {
            title: 'الاستشارات التقنية',
            desc: 'إرشاد استراتيجي حول التقنية واتخاذ القرارات الصحيحة.',
          },
        },
      },
      meeting: {
        eyebrow: 'الاجتماع',
        title: 'محادثة لمدة ٣٠ دقيقة تغيّر طريقة رؤيتك لشركتك',
        subtitle: 'في ٣٠ دقيقة، ستحصل على:',
        items: [
          'تقييم واضح لوضع شركتك التقني الحالي',
          '٣ خطوات عملية تستطيع تطبيقها فوراً',
          'توصية صادقة — حتى لو لم نكن نحن الحل المناسب',
        ],
        cta: 'احجز الاجتماع',
      },
      process: {
        eyebrow: 'كيف نعمل',
        title: 'منهجية مبنية على الوضوح',
        steps: [
          { num: '٠١', title: 'الاجتماع الاستكشافي', desc: 'مجاني، ٣٠ دقيقة — نتعرّف على عملك.' },
          { num: '٠٢', title: 'عرض مخصّص', desc: 'نطاق وجدول وتكلفة بالتفصيل — دون التزام.' },
          { num: '٠٣', title: 'التنفيذ والتسليم', desc: 'نبني، نختبر، ونُطلق.' },
          { num: '٠٤', title: 'الدعم والتحسين', desc: 'صيانة مستمرة وتطوير دائم.' },
        ],
      },
      why: {
        eyebrow: 'لماذا رؤية',
        title: 'سياق محلي، معايير عالمية',
        items: [
          { title: 'خبرة عميقة', desc: 'ماجستير في الذكاء الاصطناعي + بكالوريوس في هندسة البرمجيات' },
          { title: 'شريك معتمد', desc: 'شريك تعليمي رسمي في Odoo' },
          { title: 'ثنائي اللغة بالفطرة', desc: 'العربية والإنجليزية بنفس الجودة' },
          { title: 'سياق محلي', desc: 'مؤسس عماني يخدم شركات عُمان' },
        ],
      },
      finalCta: {
        title: 'جاهز للبدء؟',
        subtitle: 'اجتماع ٣٠ دقيقة مجاني. بدون التزام. بدون ضغط.',
        cta: 'احجز اجتماعك الآن',
      },
      footer: {
        company: 'رؤية للتقنيات المتقدمة',
        location: 'سلطنة عُمان • مسقط',
        email: 'info@royah.om',
        phone: '+٩٦٨ ٩٠٦٦٣١٣٦',
        rights: '© ٢٠٢٦ رؤية للتقنيات المتقدمة. جميع الحقوق محفوظة.',
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'ar'],
    nonExplicitSupportedLngs: true,
    load: 'languageOnly',
    detection: {
      order: ['path', 'localStorage', 'navigator', 'htmlTag'],
      lookupFromPathIndex: 0,
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

const base = i18n.language?.split('-')[0];
if (base && ['en', 'ar'].includes(base) && base !== i18n.language) {
  i18n.changeLanguage(base);
}

const updateMeta = (lng: string) => {
  const isAr = lng === 'ar';
  document.documentElement.lang = isAr ? 'ar' : 'en';
  document.documentElement.dir = isAr ? 'rtl' : 'ltr';
  document.title = isAr
    ? 'رؤية للتقنيات المتقدمة — التحول الرقمي والذكاء الاصطناعي'
    : 'Royah Advanced Technologies — Digital Transformation & AI';

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute(
      'content',
      isAr
        ? 'نُساعد الشركات في عُمان على بناء أنظمة ذكية، وأتمتة عملياتها، ودمج الذكاء الاصطناعي.'
        : 'We help businesses in Oman build smart systems, automate operations, and integrate AI.'
    );
  }
};

updateMeta(i18n.language);
i18n.on('languageChanged', updateMeta);

export default i18n;
