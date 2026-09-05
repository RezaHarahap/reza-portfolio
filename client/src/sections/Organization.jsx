import SectionHeader from '../components/SectionHeader.jsx';
import { usePreferences } from '../hooks/usePreferences.jsx';

export default function Organization() {
  const { language, t } = usePreferences();
  const id = language === 'id';

  const items = id
    ? [
        [
          'Maret 2024 – Maret 2025',
          'Kepala Departemen Sosial Masyarakat',
          'LDK Senada — STT Terpadu Nurul Fikri',
          [
            'Memimpin tim 3 staf dalam menjalankan 1 program kerja utama dan 5 program habits.',
            'Menjadi Project Officer program kemanusiaan Palestina dan menghimpun dana kemanusiaan.',
            'Mengatur timeline, distribusi tugas, koordinasi, serta evaluasi kegiatan.',
            'Berpartisipasi aktif dalam 4+ kepanitiaan organisasi.',
          ],
        ],
        [
          'Maret 2023 – Maret 2024',
          'Staf Departemen Sosial Masyarakat',
          'LDK Senada — STT Terpadu Nurul Fikri',
          [
            'Melaksanakan penggalangan dana dan distribusi bantuan sosial rutin setiap pekan.',
            'Berpartisipasi dalam 6+ kepanitiaan program kerja LDK Senada.',
            'Mendukung kebutuhan operasional kegiatan sosial melalui koordinasi dan kolaborasi tim.',
          ],
        ],
      ]
    : [
        [
          'March 2024 – March 2025',
          'Head of Social Community Department',
          'LDK Senada — STT Terpadu Nurul Fikri',
          [
            'Led a three-person staff team to deliver one major program and five recurring programs.',
            'Served as Project Officer for a Palestine humanitarian program and raised approximately IDR 2 million.',
            'Managed timelines, task distribution, coordination, and program evaluation.',
            'Actively participated in 4+ organization committees.',
          ],
        ],
        [
          'March 2023 – March 2024',
          'Social Community Department Staff',
          'LDK Senada — STT Terpadu Nurul Fikri',
          [
            'Conducted weekly fundraising and social-aid distribution activities.',
            'Participated in 6+ LDK Senada program committees.',
            'Supported operational needs through coordination and teamwork.',
          ],
        ],
      ];

  return (
    <section id="organization" className="section">
      <SectionHeader index="05 /" title={t.sections.organization} />
      <div className="org-grid">
        {items.map(([period, title, place, bullets]) => (
          <article key={title}>
            <span className="eyebrow">{period}</span>
            <h3>{title}</h3>
            <p className="muted">{place}</p>
            <ul className="clean-list">
              {bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
