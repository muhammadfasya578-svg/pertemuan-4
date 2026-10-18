import Link from 'next/link';

const DataMataKuliah = [
    { kode: 'TI301', nama: 'Pemrograman Web 3', sks: 3, semester: 3, dosen: 'Reza Ilyasa, M.Kom.' },
    { kode: 'TI302', nama: 'Basis Data Lanjut', sks: 3, semester: 3, dosen: 'Rina Marlina, M.T.' },
    { kode: 'TI303', nama: 'Jaringan Komputer', sks: 2, semester: 3, dosen: 'Andi Pratama, M.Kom.' },
];

export default function DaftarMataKuliah() {
    return (
        <div>
            <h1>📚 Daftar Mata Kuliah</h1>
            <p>Klik tombol "Lihat Detail MK" untuk mencoba fitur Dynamic Route:</p>

            <div style={{ display: 'grid', gap: '12px', marginTop: '16px' }}>
                {DataMataKuliah.map((mk) => (
                    <div key={mk.kode} style={{ border: '1px solid #cbd5e1', padding: '16px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <strong style={{ fontSize: '16px' }}>{mk.nama}</strong> ({mk.kode})<br />
                            <span style={{ fontSize: '13px', color: '#64748b' }}>Sks: {mk.sks}</span>
                        </div>
                        {/* Link dinamis menuju /mahasiswa/2025001, dst. */}
                        <Link
                            href={`/matakuliah/${mk.kode}`}
                            style={{ background: '#1e40af', color: 'white', padding: '8px 14px', borderRadius: '6px', textDecoration: 'none', fontSize: '14px' }}
                        >
                            Lihat Detail MK →
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}