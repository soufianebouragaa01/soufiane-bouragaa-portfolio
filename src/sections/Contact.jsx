import { Briefcase, Code2, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { profile } from '../data/profile'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mljddyez'

const CONTACT_INFO = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  {
    icon: Phone,
    label: 'Téléphone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, '')}`,
  },
  { icon: MapPin, label: 'Localisation', value: profile.location, href: null },
  { icon: Briefcase, label: 'LinkedIn', value: 'soufiane-bouragaa', href: profile.linkedin },
  { icon: Code2, label: 'GitHub', value: 'soufianebouragaa01', href: profile.github },
]

const inputClasses =
  'w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-primary'

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(event.target),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="border-t border-border bg-surface/40">
      <Reveal className="mx-auto max-w-5xl px-6 py-20">
        <SectionTitle
          eyebrow="Contact"
          title="Me contacter"
          description="Une question, une opportunité, un poste à pourvoir ? N'hésite pas à m'écrire."
        />

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <ul className="flex flex-col gap-4">
            {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <div className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3 transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon size={16} />
                  </span>
                  <div className="text-sm">
                    <p className="text-muted-foreground">{label}</p>
                    <p className="font-medium text-foreground">{value}</p>
                  </div>
                </div>
              )

              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block transition-opacity hover:opacity-80"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </li>
              )
            })}
          </ul>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="sr-only">
                  Nom
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Nom"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="sr-only">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-subject" className="sr-only">
                Sujet
              </label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                placeholder="Sujet"
                required
                value={formData.subject}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="sr-only">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Votre message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>

            <Button type="submit" variant="primary" disabled={status === 'sending'}>
              {status === 'sending' ? 'Envoi en cours…' : 'Envoyer le message'}
              {status !== 'sending' && <Send size={16} />}
            </Button>

            {status === 'success' && (
              <p className="text-sm text-secondary">Message envoyé — je te répondrai rapidement.</p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-500">
                Une erreur est survenue. Écris-moi directement à {profile.email}.
              </p>
            )}
          </form>
        </div>
      </Reveal>
    </section>
  )
}
