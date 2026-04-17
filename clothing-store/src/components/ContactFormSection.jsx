import React from 'react'

const defaultSocialLinks = [
  { id: 'facebook', label: 'Facebook', href: '#', abbr: 'F' },
  { id: 'pinterest', label: 'Pinterest', href: '#', abbr: 'P' },
  { id: 'twitter', label: 'Twitter', href: '#', abbr: 'T' },
  { id: 'instagram', label: 'Instagram', href: '#', abbr: 'I' },
]

const ContactFormSection = ({
  eyebrow = 'Get in touch',
  heading =
    'We Value The Connection With Our Community And Are Here To Assist In Any Way We Can. Feel Free To Reach Out Through The Following Channels:',
  phone = '(303) 555-0105',
  email = 'mail@example.com',
  address = '2972 Westheimer Rd. Santa Ana, Illinois 85486',
  socialLinks = defaultSocialLinks,
}) => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p
            className="uppercase text-xs tracking-[2px]"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              color: '#6b7280',
              fontWeight: 600,
            }}
          >
            {eyebrow}
          </p>
          <h2
            className="mt-3 max-w-3xl mx-auto"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontSize: '32px',
              fontWeight: 600,
            }}
          >
            {heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name *"
              className="w-full border border-gray-300 px-4 py-3 text-sm"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            />
            <input
              type="email"
              placeholder="Email *"
              className="w-full border border-gray-300 px-4 py-3 text-sm"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            />
            <textarea
              rows="5"
              placeholder="Message"
              className="w-full border border-gray-300 px-4 py-3 text-sm"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            />
            <button
              type="submit"
              className="w-fit bg-black text-white border border-black px-6 py-3 text-xs tracking-[2px]"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
            >
              SEND
            </button>
          </form>

          <div className="space-y-6">
            <div>
              <p
                className="uppercase text-xs tracking-[2px]"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  color: '#6b7280',
                  fontWeight: 600,
                }}
              >
                Phone
              </p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>{phone}</p>
            </div>
            <div>
              <p
                className="uppercase text-xs tracking-[2px]"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  color: '#6b7280',
                  fontWeight: 600,
                }}
              >
                Email
              </p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>{email}</p>
            </div>
            <hr className="border-gray-200" />
            <div>
              <p
                className="uppercase text-xs tracking-[2px]"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  color: '#6b7280',
                  fontWeight: 600,
                }}
              >
                Address
              </p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>{address}</p>
            </div>
            <hr className="border-gray-200" />
            <div>
              <p
                className="uppercase text-xs tracking-[2px]"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  color: '#6b7280',
                  fontWeight: 600,
                }}
              >
                Follow us
              </p>
              <div className="flex items-center gap-3 mt-2">
                {socialLinks.map(({ id, label, href, abbr }) => (
                  <a
                    key={id}
                    href={href}
                    aria-label={label}
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    <span
                      className="w-9 h-9 border border-gray-300 rounded-full flex items-center justify-center text-xs font-semibold"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {abbr}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactFormSection
