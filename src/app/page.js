import KartuProdi from "nyokot-ti/components/KartuProdi"
import PengumumanKampus from "nyokot-ti/components/PengumumanKampus";

export default function HalamanEksperimen() {
  // 1. Kita cetak pesan rahasia menggunakan console.log
  console.log("🚀 HALO DARI SERVER! Pesan ini muncul di mana ya?");

  // 2. Kita ambil informasi waktu dan sistem operasi tempat kode ini berjalan
  // const waktuRender = new Date().toLocaleTimeString('id-ID');
  const versiNodeServer = process.version; // Mengambil versi Node.js di komputer server

  const daftarProdi = [
    {
      id: 1,
      namaProdi: 'Teknologi Informasi (TI)',
      jenjang: 'D3 / Vokasi',
      akreditasi: 'Baik Sekali',
      prospekKarir: 'Full-Stack Web Developer, Cloud Engineer, Mobile App Developer'
    },
    {
      id: 2,
      namaProdi: 'Mekatronika & Robotika',
      jenjang: 'D3 / Vokasi',
      akreditasi: 'Baik Sekali',
      prospekKarir: 'Automation Engineer, IoT Specialist, Robotics Programmer'
    },
    {
      id: 3,
      namaProdi: 'Bisnis Digital & Bahasa Jepang',
      jenjang: 'D3 / Vokasi',
      akreditasi: 'Baik Sekali',
      prospekKarir: 'Digital Marketer, IT Bridge Engineer (BrSE) Jepang, Business Analyst'
    }
  ];

  const DaftarPengumumanKampus = [
    {
      id: 1,
      Judul: 'Pendaftaran Mahasiswa Baru 2024',
      Isi: 'Pendaftaran mahasiswa baru jalur reguler dibuka mulai tanggal ini. Calon mahasiswa dapat mendaftar melalui portal PMB kampus dengan melengkapi berkas yang dipersyaratkan.',
      Tanggal: '15 Januari 2024',
      Kategori: 'Pendaftaran'
    },
    {
      id: 2,
      Judul: 'Workshop Teknologi Cloud',
      Isi: 'Kampus akan mengadakan workshop tentang teknologi cloud computing yang akan diadakan pada tanggal 20 Februari 2024. Peserta akan mendapatkan sertifikat resmi dari penyelenggara.',
      Tanggal: '20 Februari 2024',
      Kategori: 'Workshop'
    },
    {
      id: 3,
      Judul: 'Pengumuman Hasil Seleksi Beasiswa',
      Isi: 'Hasil seleksi beasiswa untuk mahasiswa baru telah diumumkan. Silakan cek portal kampus untuk melihat daftar penerima beasiswa dan informasi lebih lanjut.',
      Tanggal: '5 Maret 2024',
      Kategori: 'Beasiswa'
    }
  ];

  return (
    <main style={{ maxWidth: '960px', margin: '0 auto', padding: '32px 20px' }}>
      {/* Bagian Hero Banner */}
      <section style={{
        backgroundColor: '#1e3a8a',
        color: 'white',
        padding: '36px',
        borderRadius: '12px',
        marginBottom: '32px'
      }}>
        <h1 style={{ margin: '0 0 12px 0', fontSize: '28px' }}>
          Selamat Datang di Portal Akademik Politeknik Takumi
        </h1>
        <p style={{ margin: 0, fontSize: '16px', color: '#dbeafe' }}>
          Mencetak talenta teknologi siap kerja dengan kurikulum berbasis industri dan arsitektur web modern.
        </p>
      </section>

      {/* Bagian Daftar Program Studi */}
      <h2 style={{ color: '#0f172a', marginBottom: '16px' }}>
        Pilihan Program Studi Unggulan
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px'
      }}>
        {daftarProdi.map((item) => (
          <KartuProdi
            key={item.id}
            namaProdi={item.namaProdi}
            jenjang={item.jenjang}
            akreditasi={item.akreditasi}
            prospekKarir={item.prospekKarir}
          />
        ))}
      </div>

      {/* Bagian Daftar Program Studi */}
      <h2 style={{ color: '#0f172a', marginBottom: '16px' }}>
        Pilihan Program Studi Unggulan
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px'
      }}>
        {DaftarPengumumanKampus.map((item) => (
          <PengumumanKampus
            key={item.id}
            Judul={item.Judul}
            Isi={item.Isi}
            Tanggal={item.Tanggal}
            Kategori={item.Kategori}
          />
        ))}
      </div>
    </main>

  );
}