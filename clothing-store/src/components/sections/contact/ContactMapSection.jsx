import React from 'react'

const ContactMapSection = ({
  mapSrc =
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d529.0653162765395!2d81.02563223506091!3d26.86814996686261!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be370a35ae057%3A0xfcdb26b5b1764533!2sBarrownz%20Learning%20Academy!5e0!3m2!1sen!2sus!4v1775111642974!5m2!1sen!2sus',
}) => {
  return (
    <section className="w-full">
      <iframe
        src={mapSrc}
        title="Store location map"
        className="w-full h-[500px] border-0 block"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  )
}

export default ContactMapSection
