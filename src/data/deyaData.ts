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
    src: '/assets/foto-deya-bertiga.JPG',
    alt: 'Suasana Bali',
    caption: 'Kenangan Suci',
  },
  {
    id: 'gal-2',
    src: '/assets/foto-galeri-kedua.webp',
    alt: 'Busana Adat Bali',
    caption: 'Momen Bersama',
  },
  {
    id: 'gal-3',
    src: '/assets/foto-galeri-ketiga.webp',
    alt: 'Pemandangan Bali',
    caption: 'Perjalanan Suci',
  },
  {
    id: 'gal-4',
    src: '/assets/foto-galeri-keempat.webp',
    alt: 'Tradisi Bali',
    caption: 'Momen Berharga',
  },
  {
    id: 'gal-5',
    src: '/assets/foto-galeri-kelima.webp',
    alt: 'Suasana Tradisional',
    caption: 'Kebersamaan',
  },
  {
    id: 'gal-6',
    src: '/assets/foto-galeri-keenam.webp',
    alt: 'Nuansa Bali',
    caption: 'Hari yang Istimewa',
  },
  {
    id: 'gal-7',
    src: '/assets/foto-galeri-ketujuh.webp',
    alt: 'Upacara Tradisional',
    caption: 'Prosesi Suci',
  },
  {
    id: 'gal-8',
    src: '/assets/foto-galeri-delapan.webp',
    alt: 'Budaya Bali',
    caption: 'Tradisi dan Budaya',
  },
  {
    id: 'gal-9',
    src: '/assets/foto-galeri-sembilan.webp',
    alt: 'Momen Perjalanan',
    caption: 'Sebuah Kenangan',
  },
  {
    id: 'gal-10',
    src: '/assets/foto-galeri-sepuluh.webp',
    alt: 'Arsitektur Tradisional',
    caption: 'Keindahan Tradisi',
  },
  {
    id: 'gal-11',
    src: '/assets/foto-galeri-sebelas.webp',
    alt: 'Suasana Upacara',
    caption: 'Momen Bahagia',
  },
  {
    id: 'gal-12',
    src: '/assets/foto-galeri-duaabelas.webp',
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