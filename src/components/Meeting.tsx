import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Check, Calendar } from 'lucide-react'

export function Meeting({ onBookClick }: { onBookClick: () => void }) {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  const displayFont = isRTL ? 'var(--font-arabic-display)' : 'var(--font-english-display)'
  const bodyFont = isRTL ? 'var(--font-arabic-body)' : 'var(--font-english-body)'

  const items = t('meeting.items', { returnObjects: true }) as string[]

  return (
    <section id="meeting" className="relative bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-border bg-card p-10 sm:p-14 lg:p-20"
        >
          <p
            className="text-sm font-medium uppercase tracking-wider text-accent"
            style={{ fontFamily: bodyFont }}
          >
            {t('meeting.eyebrow')}
          </p>
          <h2
            className="mt-3 text-balance text-4xl tracking-tight text-foreground sm:text-5xl"
            style={{ fontFamily: displayFont, fontWeight: isRTL ? 600 : 400 }}
          >
            {t('meeting.title')}
          </h2>

          <p className="mt-8 text-lg text-muted-foreground" style={{ fontFamily: bodyFont }}>
            {t('meeting.subtitle')}
          </p>

          <ul className="mt-6 space-y-4">
            {items.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </div>
                <span className="text-lg text-foreground" style={{ fontFamily: bodyFont }}>
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-10">
            <button
              onClick={onBookClick}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-medium text-primary-foreground transition-all hover:opacity-90"
            >
              <Calendar className="h-4 w-4" />
              <span>{t('meeting.cta')}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
