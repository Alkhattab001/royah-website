import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { GraduationCap, Award, Languages, MapPin } from 'lucide-react'

const ICONS = [GraduationCap, Award, Languages, MapPin]

type Item = { title: string; desc: string }

export function WhyRoyah() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  const displayFont = isRTL ? 'var(--font-arabic-display)' : 'var(--font-english-display)'
  const bodyFont = isRTL ? 'var(--font-arabic-body)' : 'var(--font-english-body)'

  const items = t('why.items', { returnObjects: true }) as Item[]

  return (
    <section id="why" className="relative bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-accent" style={{ fontFamily: bodyFont }}>
            {t('why.eyebrow')}
          </p>
          <h2
            className="mt-3 text-balance text-4xl tracking-tight text-foreground sm:text-5xl"
            style={{ fontFamily: displayFont, fontWeight: isRTL ? 600 : 400 }}
          >
            {t('why.title')}
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {items.map((item, idx) => {
            const Icon = ICONS[idx] ?? GraduationCap
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="rounded-2xl border border-border bg-card p-7"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3
                  className="text-lg text-foreground"
                  style={{ fontFamily: displayFont, fontWeight: isRTL ? 600 : 500 }}
                >
                  {item.title}
                </h3>
                <p className="mt-2 text-base text-muted-foreground" style={{ fontFamily: bodyFont }}>
                  {item.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
