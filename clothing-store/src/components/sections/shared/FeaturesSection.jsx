import React from 'react'

const LockIcon = ({ className }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 448 512"
    className={className}
    fill="currentColor"
  >
    <path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z" />
  </svg>
)

const TruckIcon = ({ className }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 640 512"
    className={className}
    fill="currentColor"
  >
    <path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z" />
  </svg>
)

const UndoIcon = ({ className }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 512 512"
    className={className}
    fill="currentColor"
  >
    <path d="M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 39.279 184.26 7.47 258.175 8.007c136.906.994 246.448 111.623 246.157 248.532C504.041 393.258 393.12 504 256.333 504c-64.089 0-122.496-24.313-166.51-64.215-5.099-4.622-5.334-12.554-.467-17.42l33.967-33.967c4.474-4.474 11.662-4.717 16.401-.525C170.76 415.336 211.58 432 256.333 432c97.268 0 176-78.716 176-176 0-97.267-78.716-176-176-176-58.496 0-110.28 28.476-142.274 72.333h98.274c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12z" />
  </svg>
)

const PinIcon = ({ className }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 288 512"
    className={className}
    fill="currentColor"
  >
    <path d="M112 316.94v156.69l22.02 33.02c4.75 7.12 15.22 7.12 19.97 0L176 473.63V316.94c-10.39 1.92-21.06 3.06-32 3.06s-21.61-1.14-32-3.06zM144 0C64.47 0 0 64.47 0 144s64.47 144 144 144 144-64.47 144-144S223.53 0 144 0zm0 76c-37.5 0-68 30.5-68 68 0 6.62-5.38 12-12 12s-12-5.38-12-12c0-50.73 41.28-92 92-92 6.62 0 12 5.38 12 12s-5.38 12-12 12z" />
  </svg>
)

const defaultFeatures = [
  {
    id: 'secure',
    title: 'Secure Payments',
    description: 'Shop with confidence knowing that your transactions are safeguarded.',
    Icon: LockIcon,
  },
  {
    id: 'shipping',
    title: 'Free Shipping',
    description: 'Shopping with no extra charges - savor the liberty of complimentary shipping on every order.',
    Icon: TruckIcon,
  },
  {
    id: 'returns',
    title: 'Easy Returns',
    description: 'With our hassle-free Easy Returns, changing your mind has never been more convenient.',
    Icon: UndoIcon,
  },
  {
    id: 'tracking',
    title: 'Order Tracking',
    description: 'Stay in the loop with our Order Tracking feature - from checkout to your doorstep.',
    Icon: PinIcon,
  },
]

const FeaturesSection = ({ features = defaultFeatures }) => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ id, title, description, Icon }) => (
          <div key={id} className="text-center p-4">
            <div className="flex flex-col items-center gap-3">
              <Icon className="w-10 h-10 text-black" />
              <h3
                style={{
                  fontSize: '31px',
                  color: '#000000',
                  lineHeight: '43.4px',
                  fontWeight: 600,
                  fontStyle: 'italic',
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '14.45px',
                  fontWeight: 600,
                  lineHeight: '23px',
                  color: 'rgba(0,0,0,0.46)',
                }}
              >
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection
