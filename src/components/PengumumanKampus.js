export default function PengumumanKampus({ Judul, Isi, Tanggal, Kategori }) {
    return (

        <div style={{
            backgroundColor: 'white',
            border: '1px solid #cbd5e1',
            borderRadius: '10px',
            padding: '20px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.04)'
        }}>
            <span style={{
                backgroundColor: '#dbeafe',
                color: '#1e40af',
                padding: '4px 10px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: 'bold'
            }}>
                {Judul}
            </span>

            <p style={{ fontSize: '14px', color: '#475569', marginBottom: 0 }}>
                {Isi}
            </p>

            <h3 style={{ marginTop: '12px', marginBottom: '8px', color: '#0f172a' }}>
                {Tanggal}
            </h3>

            <p style={{ fontSize: '14px', color: '#475569', marginBottom: 0 }}>
                <strong>Kategori: </strong> {Kategori}
            </p>
        </div>
    )
}