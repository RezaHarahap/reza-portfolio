import SectionHeader from '../components/SectionHeader.jsx';
import { usePreferences } from '../hooks/usePreferences.jsx';

const idItems = [
  [
    'Agu 2026 – Sep 2026',
    'Virtual Assistant — Project-Based Internship',
    'Rakamin Academy',
    [
      'Meraih nilai rata-rata 100/100 dengan predikat Excellent Student dalam program Project-Based Internship selama 4 minggu.',
      'Mengolah dan merangkum data operasional menggunakan Microsoft Excel, termasuk fungsi statistik, filter, sorting, dan Pivot Table.',
      'Menganalisis data customer support untuk mengidentifikasi tren, permasalahan berulang, kebutuhan pelanggan, dan menghasilkan insight bisnis yang dapat ditindaklanjuti.',
      'Menerapkan business acumen dan project management untuk mengidentifikasi permasalahan operasional, menyusun rekomendasi, dan mendukung koordinasi pekerjaan.',
      'Menyelesaikan proyek customer support reporting, bookkeeping, analisis biaya, product knowledge, customer engagement, dan digital copywriting.',
    ],
    '/certificates/rakamin-virtual-assistant-certificate.html',
  ],
  [
    'Sep 2024 – Jan 2025 · Feb 2026 – Jul 2026',
    'Asisten Dosen — Jaminan Kualitas Sistem Informasi',
    'STT Terpadu Nurul Fikri',
    [
      'Mendampingi proses pembelajaran 300+ mahasiswa selama dua periode.',
      'Terlibat dalam proses pengecekan dan verifikasi hasil UTS dan UAS sebagai bagian evaluasi akademik.',
      'Mendukung kelancaran proses pembelajaran melalui koordinasi kebutuhan akademik dan pendampingan mahasiswa.',
    ],
    'https://drive.google.com/file/d/1VgQc3_htkyL07CwiQ2u9taF-Im8Dma1n/view?usp=drive_link',
  ],
  [
    'Feb 2026 – Mar 2026',
    'Divisi Partnership — Relawan Ramadhan',
    'LAZ Zakat Sukses',
    [
      'Melakukan canvassing dan pendekatan partnership ke 40+ masjid.',
      'Mencapai sekitar 170% dari target fundraising melalui pendekatan partnership dan koordinasi program.',
      'Membangun kerja sama dengan 5+ sekolah untuk mendukung program fundraising.',
    ],
    'https://drive.google.com/file/d/1HZ6vhYBxulRdVieqTz9x5e916k6Dlosm/view?usp=drive_link',
  ],
  [
    'Feb 2025 – Jul 2025',
    'Machine Learning Engineer',
    'MBKM Coding Camp powered by DBS Foundation',
    [
      'Menyelesaikan sekitar 936 jam pembelajaran intensif yang mencakup Python, SQL, data analysis, machine learning, deep learning, dan pengembangan proyek.',
      'Berkolaborasi dalam tim beranggotakan enam orang untuk mengembangkan Sky-Watch, aplikasi berbasis machine learning untuk monitoring kualitas udara.',
      'Mengembangkan sistem prediksi kualitas udara 15 hari menggunakan model BiLSTM berdasarkan data PM2.5, PM10, SO₂, CO, O₃, dan NO₂.',
      'Mengintegrasikan model machine learning ke aplikasi menggunakan FastAPI agar hasil prediksi dapat digunakan oleh sistem berbasis web.',
    ],
    'https://drive.google.com/file/d/1I6E6izUZZm2QgMx3yVZaFmNCxph_vrxd/view?usp=drive_link',
  ],
  [
    'Sep 2024 – Dec 2024',
    'Machine Learning',
    'MSIB Bangkit Academy 2024 Batch 2',
    [
      'Menyelesaikan sekitar 905 jam pembelajaran intensif yang mencakup machine learning, deep learning, dan pengembangan solusi berbasis AI.',
      'Mengembangkan Cat Ease, aplikasi untuk deteksi dini empat jenis penyakit kulit kucing menggunakan MobileNetV2 dan transfer learning.',
      'Berkontribusi pada preprocessing data, training model, evaluasi, dan konversi TensorFlow Lite untuk mendukung integrasi ke aplikasi Android.',
      'Menyelesaikan 20+ sertifikat Coursera terkait AI dan Machine Learning sebagai bagian dari program Bangkit Academy.',
    ],
    'https://drive.google.com/file/d/1_PGFMafxhtBgRhFkOBYVLnW24097mJ53/view?usp=drive_link',
  ],
  [
    'Jan 2024 – Feb 2024',
    'Surveyor & Team Verifikator',
    'PT Poltracking Indonesia',
    [
      'Menangani hingga 200 kontak responden untuk wawancara survei opini publik terkait pemilu.',
      'Melakukan input data terstruktur dan validasi hasil wawancara untuk menjaga kelengkapan dan akurasi data.',
      'Berkoordinasi dengan 10+ verifikator di Sumatera Utara selama proses pengecekan dan verifikasi data lapangan.',
      'Mendukung quality control data dengan memastikan konsistensi dan kelengkapan informasi sebelum diproses lebih lanjut.',
    ],
    'LINK_SERTIFIKAT_POLTRACKING',
  ],
];

const enItems = [
  [
    'Aug 2026 – Sep 2026',
    'Virtual Assistant — Project-Based Internship',
    'Rakamin Academy',
    [
      'Achieved an average score of 100/100 with the Excellent Student distinction in a four-week Project-Based Internship.',
      'Processed and summarized operational data using Microsoft Excel, including statistical functions, filtering, sorting, and Pivot Tables.',
      'Analyzed customer support data to identify trends, recurring issues, customer needs, and actionable business insights.',
      'Applied business acumen and project management to identify operational problems, formulate recommendations, and support work coordination.',
      'Completed projects involving customer support reporting, bookkeeping, cost analysis, product knowledge, customer engagement, and digital copywriting.',
    ],
    '/certificates/rakamin-virtual-assistant-certificate.html',
  ],
  [
    'Sep 2024 – Jan 2025 · Feb 2026 – Jul 2026',
    'Teaching Assistant — Information Systems Quality Assurance',
    'STT Terpadu Nurul Fikri',
    [
      'Supported the learning process for 300+ students across two academic periods.',
      'Participated in checking and verifying midterm and final examination results as part of academic evaluation.',
      'Supported learning activities through academic coordination and student assistance.',
    ],
    'https://drive.google.com/file/d/1VgQc3_htkyL07CwiQ2u9taF-Im8Dma1n/view?usp=drive_link',
  ],
  [
    'Feb 2026 – Mar 2026',
    'Partnership Division — Ramadan Volunteer',
    'LAZ Zakat Sukses',
    [
      'Conducted canvassing and partnership outreach to 40+ mosques.',
      'Achieved approximately 170% of the established fundraising target through partnership outreach and program coordination.',
      'Built partnerships with 5+ schools to support fundraising programs.',
    ],
    'https://drive.google.com/file/d/1HZ6vhYBxulRdVieqTz9x5e916k6Dlosm/view?usp=drive_link',
  ],
  [
    'Feb 2025 – Jul 2025',
    'Machine Learning Engineer',
    'MBKM Coding Camp powered by DBS Foundation',
    [
      'Completed approximately 936 hours of intensive learning covering Python, SQL, data analysis, machine learning, deep learning, and project development.',
      'Collaborated in a six-person team to develop Sky-Watch, a machine learning-based application for air quality monitoring.',
      'Developed a 15-day air quality forecasting system using a BiLSTM model based on PM2.5, PM10, SO₂, CO, O₃, and NO₂ data.',
      'Integrated the machine learning model into the application using FastAPI so the prediction results could be used by a web-based system.',
    ],
    'https://drive.google.com/file/d/1I6E6izUZZm2QgMx3yVZaFmNCxph_vrxd/view?usp=drive_link',
  ],
  [
    'Sep 2024 – Dec 2024',
    'Machine Learning',
    'MSIB Bangkit Academy 2024 Batch 2',
    [
      'Completed approximately 905 hours of intensive learning covering machine learning, deep learning, and AI-based solution development.',
      'Developed Cat Ease, an application for early detection of four types of cat skin diseases using MobileNetV2 and transfer learning.',
      'Contributed to data preprocessing, model training, evaluation, and TensorFlow Lite conversion to support integration into an Android application.',
      'Completed 20+ Coursera certificates related to AI and Machine Learning as part of the Bangkit Academy program.',
    ],
    'https://drive.google.com/file/d/1_PGFMafxhtBgRhFkOBYVLnW24097mJ53/view?usp=drive_link',
  ],
  [
    'Jan 2024 – Feb 2024',
    'Surveyor & Verification Team',
    'PT Poltracking Indonesia',
    [
      'Handled up to 200 respondent contacts for public opinion survey interviews related to elections.',
      'Performed structured data entry and validation of interview results to maintain data completeness and accuracy.',
      'Coordinated with 10+ verifiers across North Sumatra during the field data checking and verification process.',
      'Supported data quality control by ensuring information consistency and completeness before further processing.',
    ],
    'LINK_SERTIFIKAT_POLTRACKING',
  ],
];

export default function Experience() {
  const { language, t } = usePreferences();
  const items = language === 'id' ? idItems : enItems;

  return (
    <section id="experience" className="section">
      <SectionHeader index="03 /" title={t.sections.experience} />

      <div className="timeline">
        {items.map(([period, role, place, bullets, certificateUrl]) => (
          <article key={`${role}-${period}`}>
            <div className="time">{period}</div>

            <div>
              <h3>{role}</h3>
              <p className="muted">{place}</p>

              <ul className="clean-list">
                {bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              {certificateUrl && !certificateUrl.startsWith('LINK_') && (
                <a
                  href={certificateUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="experience-certificate"
                >
                  {language === 'id' ? 'Lihat Sertifikat' : 'View Certificate'}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
