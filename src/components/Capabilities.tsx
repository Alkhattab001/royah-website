import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Workflow, Sparkles, Database, Zap, Compass } from 'lucide-react'

const ICONS = [Workflow, Sparkles, Database, Zap, Compass]
const ITEM_KEYS = ['digital', 'ai', 'systems', 'automation', 'consulting'] as const

export function Capabilities() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  const displayFont = isRTL ? 'var(--font-arabic-display)' : 'var(--font-english-display)'
  const bodyFont = isRTL ? 'var(--font-arabic-body)' : 'var(--font-english-body)'

  return (
    <section id="capabilities" className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-accent" style={{ fontFamily: bodyFont }}>
            {t('capabilities.eyebrow')}
          </p>
          <h2
            className="mt-3 text-balance text-4xl tracking-tight text-foreground sm:text-5xl"
            style={{ fontFamily: displayFont, fontWeight: isRTL ? 600 : 400 }}
          >
            {t('capabilities.title')}
          </h2>
          <p className="mt-5 text-lg text-muted-foreground" style={{ fontFamily: bodyFont }}>
            {t('capabilities.subtitle')}
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ITEM_KEYS.map((key, idx) => {
            const Icon = ICONS[idx]
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.05, ease: 'easeOut' }}
                className="group relative rounded-2xl border border-border bg-card p-7 transition-all hover:border-accent/40 hover:shadow-sm"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3
                  className="text-xl text-foreground"
                  style={{ fontFamily: displayFont, fontWeight: isRTL ? 600 : 500 }}
                >
                  {t(`capabilities.items.${key}.title`)}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground" style={{ fontFamily: bodyFont }}>
                  {t(`capabilities.items.${key}.desc`)}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
