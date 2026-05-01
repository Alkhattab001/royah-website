import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

type Step = { num: string; title: string; desc: string }

export function Process() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  const displayFont = isRTL ? 'var(--font-arabic-display)' : 'var(--font-english-display)'
  const bodyFont = isRTL ? 'var(--font-arabic-body)' : 'var(--font-english-body)'

  const steps = t('process.steps', { returnObjects: true }) as Step[]

  return (
    <section id="process" className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-accent" style={{ fontFamily: bodyFont }}>
            {t('process.eyebrow')}
          </p>
          <h2
            className="mt-3 text-balance text-4xl tracking-tight text-foreground sm:text-5xl"
            style={{ fontFamily: displayFont, fontWeight: isRTL ? 600 : 400 }}
          >
            {t('process.title')}
          </h2>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-card p-8 lg:p-10"
            >
              <div
                className="text-sm font-medium text-accent"
                style={{ fontFamily: bodyFont }}
              >
                {step.num}
              </div>
              <h3
                className="mt-4 text-xl text-foreground"
                style={{ fontFamily: displayFont, fontWeight: isRTL ? 600 : 500 }}
              >
                {step.title}
              </h3>
              <p className="mt-3 text-base text-muted-foreground" style={{ fontFamily: bodyFont }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
