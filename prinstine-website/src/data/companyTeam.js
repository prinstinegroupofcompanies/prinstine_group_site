import ceoPhoto from '../assets/CEO-profile image.webp';
import jamesPhoto from '../assets/james-pgc.webp';
import jamesettaPhoto from '../assets/jamesetta-pgc.webp';
import francesPhoto from '../assets/frances_wallace.webp';
import constantinePhoto from '../assets/constantine_vulue.webp';
import seanPhoto from '../assets/sean_cole.webp';
import williamPhoto from '../assets/william_buku.webp';
import jamesKolliePhoto from '../assets/james_kollie.webp';
import marjoriePhoto from '../assets/marjorie_dyer.webp';
import eshmealPhoto from '../assets/ashmeal_harris.webp';
import princeGarkpahPhoto from '../assets/prince_garkpah.webp';
import maePhoto from '../assets/mae_take.webp';

/** Full company team (About page grid + CEO on Home) */
export const companyTeam = [
  { name: 'Prince S. Cooper', title: 'Chief Executive Officer', image: ceoPhoto },
  { name: 'James S. Tokpa', title: 'Finance & Administrative Manager', image: jamesPhoto },
  { name: 'Jamesetta L. Sieh', title: 'Head of Operations & Marketing', image: jamesettaPhoto },
  { name: 'Frances B. Wallace', title: 'Head — Prinstine Academy', image: francesPhoto },
  { name: 'Constantine J. Vulue', title: 'Head — Prinstine Microfinance', image: constantinePhoto },
  { name: 'Sean J. Cole', title: 'Finance Officer', image: seanPhoto },
  { name: 'William L. Buku, Jr.', title: 'Head of Client Engagements', image: williamPhoto },
  { name: 'James D. Kollie', title: 'Procurement Officer', image: jamesKolliePhoto },
  { name: 'Marjorie P. Dyer', title: 'Administrative Assistant', image: marjoriePhoto },
  { name: 'Eshmeal A. Harris', title: 'Finance Clerk', image: eshmealPhoto },
  { name: 'Prince W. Garkpah', title: 'Graphic Designer', image: princeGarkpahPhoto },
  { name: 'Mae D. Tah', title: 'Brand Ambassador', image: maePhoto },
];

/** Home page carousel — everyone except CEO (shown in spotlight above) */
export const teamCarouselMembers = [
  {
    name: 'James S. Tokpa',
    title: 'Finance & Administrative Manager',
    bio: 'A professional accountant with years of experience in accountancy and finance, driving operational excellence across PGC.',
    image: jamesPhoto,
  },
  {
    name: 'Jamesetta L. Sieh',
    title: 'Head of Operations & Marketing',
    bio: 'Expert in accountancy, taxation, and finance, ensuring clients receive accurate tax consultancy and dedicated service.',
    image: jamesettaPhoto,
  },
  {
    name: 'Frances B. Wallace',
    title: 'Head — Prinstine Academy',
    bio: 'Leading Prinstine Academy’s educational programs and professional training initiatives.',
    image: francesPhoto,
  },
  {
    name: 'Constantine J. Vulue',
    title: 'Head — Prinstine Microfinance',
    bio: 'Overseeing microfinance services that support entrepreneurship and financial inclusion.',
    image: constantinePhoto,
  },
  {
    name: 'Sean J. Cole',
    title: 'Finance Officer',
    bio: 'Supporting financial operations and day-to-day fiscal management for the group.',
    image: seanPhoto,
  },
  {
    name: 'William L. Buku, Jr.',
    title: 'Head of Client Engagements',
    bio: 'Building strong client relationships and ensuring exceptional service delivery.',
    image: williamPhoto,
  },
  {
    name: 'James D. Kollie',
    title: 'Procurement Officer',
    bio: 'Managing procurement and supply coordination to support efficient business operations.',
    image: jamesKolliePhoto,
  },
  {
    name: 'Marjorie P. Dyer',
    title: 'Administrative Assistant',
    bio: 'Providing administrative support that keeps the organization running smoothly.',
    image: marjoriePhoto,
  },
  {
    name: 'Eshmeal A. Harris',
    title: 'Finance Clerk',
    bio: 'Supporting finance and records management with accuracy and dedication.',
    image: eshmealPhoto,
  },
  {
    name: 'Prince W. Garkpah',
    title: 'Graphic Designer',
    bio: 'Creating visual identity and design assets that represent the Prinstine brand.',
    image: princeGarkpahPhoto,
  },
  {
    name: 'Mae D. Tah',
    title: 'Brand Ambassador',
    bio: 'Representing Prinstine Group and promoting our mission in the community.',
    image: maePhoto,
  },
];

export const TEAM_CAROUSEL_COUNT = teamCarouselMembers.length;
