import { Profile, GalleryItem, Wish } from '../types';
import { DigitalAccount } from '../components/DigitalGiftSection';

export const DIGITAL_ACCOUNTS: DigitalAccount[] = [
  {
    id: 'bca',
    bank: 'BRI',
    accountNumber: '465501014723523',
    accountName: 'Wayan Alya Febriayu',
  },
];

export const PROFILES: Profile[] = [
  {
    id: 'putu',
    name: 'Wayan Alya Febriayu',
    order: 'Anak Pertama',
    image: '/assets/foto-alya-profile.JPG',
    bio: 'Putri Pertama dari Pasangan I Made Suryasa & N. Suressumiati',
  },
  {
    id: 'made',
    name: 'Made Deya Indriyani',
    order: 'Anak Kedua',
    image: '/assets/foto-deya-profile.JPG',
    bio: 'Putri Kedua dari Pasangan I Made Suryasa & N. Suressumiati',
  },
  {
    id: 'nyoman',
    name: 'Komang Resya Juwanita Dewi',
    order: 'Anak Ketiga',
    image: '/assets/foto-resya-profilee.JPG',
    bio: 'Putri Ketiga dari Pasangan I Made Suryasa & N. Suressumiati',
  },
];

/* =========================
   GALLERY - 12 FOTO
========================= */

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    src: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800',
    alt: 'Suasana Bali',
    caption: 'Kenangan Suci',
  },
  {
    id: 'gal-2',
    src: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&q=80&w=800',
    alt: 'Busana Adat Bali',
    caption: 'Momen Bersama',
  },
  {
    id: 'gal-3',
    src: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800',
    alt: 'Pemandangan Bali',
    caption: 'Perjalanan Suci',
  },
  {
    id: 'gal-4',
    src: 'https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&q=80&w=800',
    alt: 'Tradisi Bali',
    caption: 'Momen Berharga',
  },
  {
    id: 'gal-5',
    src: 'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&q=80&w=800',
    alt: 'Suasana Tradisional',
    caption: 'Kebersamaan',
  },
  {
    id: 'gal-6',
    src: 'https://images.unsplash.com/photo-1533050487297-09b450131914?auto=format&fit=crop&q=80&w=800',
    alt: 'Nuansa Bali',
    caption: 'Hari yang Istimewa',
  },
  {
    id: 'gal-7',
    src: 'https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&q=80&w=800',
    alt: 'Upacara Tradisional',
    caption: 'Prosesi Suci',
  },
  {
    id: 'gal-8',
    src: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&q=80&w=800',
    alt: 'Budaya Bali',
    caption: 'Tradisi dan Budaya',
  },
  {
    id: 'gal-9',
    src: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&q=80&w=800',
    alt: 'Momen Perjalanan',
    caption: 'Sebuah Kenangan',
  },
  {
    id: 'gal-10',
    src: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800',
    alt: 'Arsitektur Tradisional',
    caption: 'Keindahan Tradisi',
  },
  {
    id: 'gal-11',
    src: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&q=80&w=800',
    alt: 'Suasana Upacara',
    caption: 'Momen Bahagia',
  },
  {
    id: 'gal-12',
    src: 'https://images.unsplash.com/photo-1555400038-0c9f2e7f1c65?auto=format&fit=crop&q=80&w=800',
    alt: 'Kenangan Bersama',
    caption: 'Kenangan Suci',
  },
];

/* =========================
   INITIAL WISHES
========================= */

export const INITIAL_WISHES: Wish[] = [
  {
    id: '1',
    name: 'I Made Wayan',
    attendance: 'hadir',
    guestCount: 2,
    message:
      'Selamat menjalankan upacara Mepandes. Semoga prosesi berjalan lancar dan menjadi pribadi yang bijaksana.',
    timestamp: '2 jam yang lalu',
  },
  {
    id: '2',
    name: 'Ni Putu Ayu',
    attendance: 'hadir',
    guestCount: 1,
    message:
      'Rahajeng nyanggra upacara Potong Gigi. Dumogi labda karya semeton sami.',
    timestamp: '4 jam yang lalu',
  },
  {
    id: '3',
    name: 'Gede Agus & Keluarga',
    attendance: 'hadir',
    guestCount: 3,
    message:
      'Selamat dan sukses untuk seluruh rangkaian upacara Mepandes. Semoga Ida Sang Hyang Widhi Wasa senantiasa mengasihi.',
    timestamp: '1 hari yang lalu',
  },
];