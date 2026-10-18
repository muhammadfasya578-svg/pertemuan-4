import Link from 'next/link';

export const instant = false;

const dataMatakuliah = [
    { kode: 'TI301', nama: 'Pemrograman Web 3', sks: 3, semester: 3, dosen: 'Reza Ilyasa, M.Kom.' },
    { kode: 'TI302', nama: 'Basis Data Lanjut', sks: 3, semester: 3, dosen: 'Rina Marlina, M.T.' },
    { kode: 'TI303', nama: 'Jaringan Komputer', sks: 2, semester: 3, dosen: 'Andi Pratama, M.Kom.' },
];

export default async function DetailMatakuliah({ params }) {
    // 1. Tangkap nilai parameter [kode] dari URL
    const { kode } = await params;

    // 2. Cocokkan kode dengan array objek mata kuliah
    const matkul = dataMatakuliah.find((item) => item.kode === kode);

    // 3. Jika kode tidak terdaftar, tampilkan pesan
    if (!matkul) {
        return (
            <div style={{ padding: '20px', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px' }}>
                <h2 style={{ color: '#dc2626' }}>Mata kuliah dengan kode "{kode}" tidak ditemukan!</h2>
                <Link href="/matakuliah">← Kembali ke Daftar Mata Kuliah</Link>
            </div>
        );
    }

    return (
        <div style={{ border: '2px solid #1e3a8a', borderRadius: '12px', padding: '24px', maxWidth: '500px' }}>
            <span style={{ background: '#dbeafe', color: '#1e3a8a', padding: '4px 10px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>
                DETAIL MATA KULIAH
            </span>
            <h2 style={{ marginTop: '12px', marginBottom: '4px' }}>{matkul.nama}</h2>
            <p style={{ color: '#64748b', marginTop: 0 }}>Kode: <strong>{matkul.kode}</strong></p>
            <hr />
            <p><strong>SKS:</strong> {matkul.sks}</p>
            <p><strong>Semester:</strong> {matkul.semester}</p>
            <p><strong>Dosen:</strong> {matkul.dosen}</p>
            <br />
            <Link href="/matakuliah" style={{ color: '#2563eb' }}>← Kembali ke Daftar</Link>
        </div>
    );
}