import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Phone,
  Mail,
  ArrowRight,
  Send,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';
import { LINKEDIN_URL } from '../i18n/translations';
import LinkedinIcon from '../components/icons/LinkedinIcon';

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/kurumsal@antyonetim.com';

const MIN_SUBMIT_MS = 2500;

const generateChallenge = (): { a: number; b: number } => ({
  a: Math.floor(Math.random() * 8) + 2,
  b: Math.floor(Math.random() * 8) + 1,
});

const Contact: React.FC = () => {
  const { t, lang } = useLang();
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState<string>('');
  const [captchaAnswer, setCaptchaAnswer] = useState<string>('');
  const [challenge, setChallenge] = useState(() => generateChallenge());
  const loadedAtRef = useRef<number>(Date.now());

  useEffect(() => {
    loadedAtRef.current = Date.now();
  }, []);

  const expectedSum = useMemo(
    () => challenge.a + challenge.b,
    [challenge]
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (honeypot.trim() !== '') {
      setSubmitted(true);
      setForm(initialForm);
      return;
    }

    if (Date.now() - loadedAtRef.current < MIN_SUBMIT_MS) {
      setError(t.contact.formCaptchaError);
      return;
    }

    if (parseInt(captchaAnswer, 10) !== expectedSum) {
      setError(t.contact.formCaptchaError);
      setChallenge(generateChallenge());
      setCaptchaAnswer('');
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          _subject: `[ANT Web] ${form.subject}`,
          message: form.message,
          _template: 'table',
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setForm(initialForm);
        setCaptchaAnswer('');
        setChallenge(generateChallenge());
        loadedAtRef.current = Date.now();
      } else {
        setError(
          lang === 'tr'
            ? 'Mesaj gönderilemedi. Lütfen tekrar deneyin.'
            : 'Failed to send message. Please try again.'
        );
      }
    } catch {
      setError(
        lang === 'tr'
          ? 'Bağlantı hatası. Lütfen internet bağlantınızı kontrol edin.'
          : 'Connection error. Please check your internet connection.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="relative bg-gray-50/60 min-h-screen">
      <section className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-5 py-2 mb-6">
            <div className="w-1.5 h-1.5 bg-accent-400 rounded-full" />
            <span className="text-white/80 text-sm font-semibold uppercase tracking-wider">
              {t.contact.pageBadge}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
            {t.contact.pageTitleStart}{' '}
            <span className="bg-gradient-to-r from-accent-400 to-amber-300 bg-clip-text text-transparent">
              {t.contact.pageTitleAccent}
            </span>
          </h1>
          <p className="text-white/60 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            {t.contact.pageDescription}
          </p>
        </div>
      </section>

      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-navy-100">
            <h2 className="text-2xl font-bold text-navy-900 mb-2">
              {t.contact.formTitle}
            </h2>
            <p className="text-navy-500 mb-8 leading-relaxed">
              {t.contact.formDescription}
            </p>

            {submitted && (
              <div className="mb-6 flex items-start gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                <p className="text-sm leading-relaxed">{t.contact.formSuccess}</p>
              </div>
            )}

            {error && (
              <div className="mb-6 flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <p className="text-sm leading-relaxed">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-semibold text-navy-700 uppercase tracking-wider mb-2"
                >
                  {t.contact.formName}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  disabled={submitting}
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 focus:border-accent-400 focus:ring-2 focus:ring-accent-400/20 outline-none transition disabled:opacity-50"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-semibold text-navy-700 uppercase tracking-wider mb-2"
                >
                  {t.contact.formEmail}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  disabled={submitting}
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 focus:border-accent-400 focus:ring-2 focus:ring-accent-400/20 outline-none transition disabled:opacity-50"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-phone"
                  className="block text-xs font-semibold text-navy-700 uppercase tracking-wider mb-2"
                >
                  {t.contact.formPhone}
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  inputMode="tel"
                  autoComplete="tel"
                  disabled={submitting}
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 focus:border-accent-400 focus:ring-2 focus:ring-accent-400/20 outline-none transition disabled:opacity-50"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-semibold text-navy-700 uppercase tracking-wider mb-2"
                >
                  {t.contact.formSubject}
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  required
                  disabled={submitting}
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 focus:border-accent-400 focus:ring-2 focus:ring-accent-400/20 outline-none transition disabled:opacity-50"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold text-navy-700 uppercase tracking-wider mb-2"
                >
                  {t.contact.formMessage}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  disabled={submitting}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 focus:border-accent-400 focus:ring-2 focus:ring-accent-400/20 outline-none transition resize-none disabled:opacity-50"
                />
              </div>

              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: '-10000px',
                  top: 'auto',
                  width: '1px',
                  height: '1px',
                  overflow: 'hidden',
                }}
              >
                <label htmlFor="contact-website">Website</label>
                <input
                  id="contact-website"
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-captcha"
                  className="block text-xs font-semibold text-navy-700 uppercase tracking-wider mb-2"
                >
                  {t.contact.formCaptchaLabel}
                </label>
                <div className="flex items-center gap-3">
                  <div className="shrink-0 px-4 py-3 rounded-xl bg-navy-50 border border-navy-200 text-navy-900 font-semibold tracking-wider select-none">
                    {challenge.a} + {challenge.b} =
                  </div>
                  <input
                    id="contact-captcha"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    name="captcha"
                    required
                    disabled={submitting}
                    value={captchaAnswer}
                    onChange={(e) => setCaptchaAnswer(e.target.value)}
                    autoComplete="off"
                    className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 focus:border-accent-400 focus:ring-2 focus:ring-accent-400/20 outline-none transition disabled:opacity-50"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="group w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent-400 to-accent-500 hover:from-accent-500 hover:to-accent-600 text-white px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg shadow-accent-400/25 hover:shadow-accent-400/40 hover:-translate-y-0.5 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {submitting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
                {submitting
                  ? lang === 'tr'
                    ? 'Gönderiliyor...'
                    : 'Sending...'
                  : t.contact.formSubmit}
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-navy-100">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                {t.contact.infoTitle}
              </h2>

              <ul className="space-y-5">
                <li>
                  <a
                    href="tel:+905069862620"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-accent-400/10 group-hover:bg-accent-400/20 flex items-center justify-center flex-shrink-0 transition-colors">
                      <Phone className="w-5 h-5 text-accent-500" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-navy-500 uppercase tracking-wider mb-1">
                        {t.contact.infoPhoneLabel}
                      </div>
                      <div className="text-navy-900 font-semibold group-hover:text-accent-600 transition-colors">
                        +90 (506) 986 26 20
                      </div>
                      {t.contact.infoPhoneSub && (
                        <div className="text-xs text-navy-500">
                          {t.contact.infoPhoneSub}
                        </div>
                      )}
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:kurumsal@antyonetim.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-accent-400/10 group-hover:bg-accent-400/20 flex items-center justify-center flex-shrink-0 transition-colors">
                      <Mail className="w-5 h-5 text-accent-500" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-navy-500 uppercase tracking-wider mb-1">
                        {t.contact.infoEmailLabel}
                      </div>
                      <div className="text-navy-900 font-semibold group-hover:text-accent-600 transition-colors">
                        kurumsal@antyonetim.com
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative rounded-3xl overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 p-8 lg:p-10 shadow-2xl shadow-navy-900/20 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-400/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />

              <div className="relative">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 border border-white/10 mb-4 group-hover:scale-110 transition-transform">
                  <LinkedinIcon className="w-6 h-6 text-accent-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {t.contact.linkedinTitle}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-5">
                  {t.contact.linkedinDescription}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent-400 group-hover:gap-3 transition-all">
                  {t.contact.linkedinCta}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
