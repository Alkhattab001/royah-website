import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'

export function FinalCTA({ onBookClick }: { onBookClick: () => void }) {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  const displayFont = isRTL ? 'var(--font-arabic-display)' : 'var(--font-english-display)'
  const bodyFont = isRTL ? 'var(--font-arabic-body)' : 'var(--font-english-body)'

  return (
    <section className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-balance text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            style={{ fontFamily: displayFont, fontWeight: isRTL ? 600 : 400 }}
          >
            {t('finalCta.title')}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground sm:text-xl" style={{ fontFamily: bodyFont }}>
            {t('finalCta.subtitle')}
          </p>
          <div className="mt-10">
            <button
              onClick={onBookClick}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all hover:opacity-90"
            >
              <Calendar className="h-4 w-4" />
              <span>{t('finalCta.cta')}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
