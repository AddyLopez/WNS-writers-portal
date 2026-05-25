# WNS-writers-portal (May 2026)

**_View this project:_** [https://wns-writers-portal.netlify.app/](https://wns-writers-portal.netlify.app/)

## Description

Coded in HTML, JavaScript, and CSS, this website constitutes the Writers' Portal for Workers for a New Southwest (WNS). The Writers' Portal is where prospective writers from the WNS general community can learn more, browse prompts, and view published articles embedded from WNS's Substack. WNS is a grassroots organization based in Albuquerque, New Mexico. To find out more, visit WNS's Instagram account here: [https://www.instagram.com/workersforanewsouthwest/?hl=en](https://www.instagram.com/workersforanewsouthwest/?hl=en). This website was coded _pro bono_ from scratch to support a strong culture of writing, critical reflection, and human development.

**_Accessibility:_** This website was designed conscientiously with digital accessibility in mind for those with visual, auditory, motor, and/or cognitive disabilities or sensory impairments. While I made every effort to employ best practices, there are nevertheless two areas that are not ideal which were flagged by Lighthouse accessibility audits for mobile and desktop formats.

- First, _iframes_ in embedded content do not have _title_ attributes, which is due to how Substack writes their embed code. Any and all links I directly coded, however, do contain _title_ attributes.
- Second, the unordered list in the navigation menu of the site contains a _div_ with nested list items. (It is usually best practice to include only list items as direct descendants of a _ul_ for those who use screen readers.) This was a design consideration I made in order to assign a visual hierarchy to the navigation links, a decision which was based on the rules governing Flexbox visual and spatial styling in CSS.

**_Permissions:_** I am offering my code and original design as an open-source resource for the community. However, the textual content, image(s) in the _assets_ directory, and data in the _data_ directory belong to the organization Workers for a New Southwest. Therefore, if you reuse my code, be sure not to appropriate their content, images, logo, or data. Thank you.

## License

MIT License

Copyright (c) 2026 Addy López
