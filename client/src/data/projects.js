export const projects = [
  // =========================================================
  // AI & MACHINE LEARNING
  // =========================================================

  {
    id: 'cat-ease',
    title: 'Cat Ease',
    slug: 'cat-ease',
    category: 'ai_ml',
    subtitle: 'Cat Skin Disease Detection',
    description_id:
      'Aplikasi deteksi awal penyakit kulit kucing menggunakan MobileNetV2 dan transfer learning untuk mengklasifikasikan empat jenis penyakit kulit.',
    description_en:
      'An early detection application for cat skin diseases using MobileNetV2 and transfer learning to classify four types of skin conditions.',
    thumbnail_url: '',
    tech_stack: [
      'Python',
      'TensorFlow',
      'Keras',
      'MobileNetV2',
      'Transfer Learning',
      'TensorFlow Lite',
    ],
    highlights: [
      '4-class image classification',
      'MobileNetV2 transfer learning',
      'Model evaluation',
      'TensorFlow Lite conversion',
    ],
    github_url: 'https://github.com/Cat-Ease',
    demo_url:
  'https://www.linkedin.com/posts/reza-harahap_lifeatbangkit-bangkit24h2-bepchallenge-activity-7274360085257039872-J9i7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5yHHoB2Gtj8giApiAbvKxWIAjnqcyJvHY',
    featured: true,
    display_order: 1,
    status: 'published',
  },
  {
    id: 'membangun-sistem-machine-learning',
    title: 'Membangun Sistem Machine Learning',
    slug: 'membangun-sistem-machine-learning',
    category: 'ai_ml',
    subtitle: 'End-to-End Machine Learning & MLOps',
    description_id:
      'Implementasi sistem machine learning end-to-end yang mencakup eksperimen, training, tuning, CI, model serving, inference, serta monitoring menggunakan Prometheus dan Grafana.',
    description_en:
      'An end-to-end machine learning system covering experimentation, training, tuning, CI, model serving, inference, and monitoring using Prometheus and Grafana.',
    thumbnail_url: '',
    tech_stack: [
      'Python',
      'Machine Learning',
      'MLflow',
      'GitHub Actions',
      'Prometheus',
      'Grafana',
    ],
    highlights: [
      'Experiment tracking with MLflow',
      'CI workflow automation',
      'Model serving & inference',
      'Prometheus & Grafana monitoring',
    ],
    github_url:
      'https://github.com/RezaHarahap/Membangun-Sistem-Machine-Learning',
    demo_url: '',
    featured: false,
    display_order: 2,
    status: 'published',
  },

  {
    id: 'bitcoin-multihorizon-forecasting-lstm',
    title: 'Bitcoin Multi-Horizon Forecasting',
    slug: 'bitcoin-multihorizon-forecasting-lstm',
    category: 'ai_ml',
    subtitle: 'Time Series Forecasting with LSTM',
    description_id:
      'Proyek peramalan harga Bitcoin multi-horizon menggunakan pendekatan deep learning berbasis LSTM dan Sequence-to-Sequence.',
    description_en:
      'A multi-horizon Bitcoin price forecasting project using LSTM and Sequence-to-Sequence deep learning approaches.',
    thumbnail_url: '',
    tech_stack: [
      'Python',
      'TensorFlow',
      'LSTM',
      'Seq2Seq',
      'Time Series',
    ],
    highlights: [
      'Multi-horizon forecasting',
      'LSTM modelling',
      'Sequence-to-Sequence modelling',
      'Model comparison',
    ],
    github_url:
      'https://github.com/RezaHarahap/bitcoin-multihorizon-forecasting-lstm',
    demo_url: '',
    featured: false,
    display_order: 3,
    status: 'published',
  },

  {
    id: 'mobile-jkn-sentiment-analysis',
    title: 'Mobile JKN Sentiment Analysis',
    slug: 'mobile-jkn-sentiment-analysis',
    category: 'ai_ml',
    subtitle: 'NLP Sentiment Classification',
    description_id:
      'Analisis sentimen ulasan aplikasi Mobile JKN menggunakan pendekatan machine learning untuk mengklasifikasikan sentimen positif, netral, dan negatif.',
    description_en:
      'Sentiment analysis of Mobile JKN application reviews using machine learning to classify positive, neutral, and negative sentiment.',
    thumbnail_url: '',
    tech_stack: [
      'Python',
      'TF-IDF',
      'SVM',
      'Naive Bayes',
      'Random Forest',
      'NLP',
    ],
    highlights: [
      '10K review dataset',
      'TF-IDF feature extraction',
      'Multiple ML model comparison',
      'Sentiment classification',
    ],
    github_url:
      'https://github.com/RezaHarahap/mobile-jkn-sentiment-analysis',
    demo_url: '',
    featured: false,
    display_order: 4,
    status: 'published',
  },

  {
    id: 'book-recommendation-system',
    title: 'Book Recommendation System',
    slug: 'book-recommendation-system',
    category: 'ai_ml',
    subtitle: 'Neural Collaborative Filtering',
    description_id:
      'Sistem rekomendasi buku menggunakan pendekatan neural embedding untuk mempelajari preferensi pengguna berdasarkan data rating.',
    description_en:
      'A book recommendation system using neural embeddings to learn user preferences from rating data.',
    thumbnail_url: '',
    tech_stack: [
      'Python',
      'TensorFlow',
      'Recommendation System',
      'Neural Embedding',
    ],
    highlights: [
      'Large-scale rating dataset',
      'User-item embeddings',
      'Recommendation modelling',
      'RMSE evaluation',
    ],
    github_url:
      'https://github.com/RezaHarahap/book-recommendation-system',
    demo_url: '',
    featured: false,
    display_order: 5,
    status: 'published',
  },

  {
    id: 'stunting-predictive-analytics',
    title: 'Stunting Predictive Analytics',
    slug: 'stunting-predictive-analytics',
    category: 'ai_ml',
    subtitle: 'Health Data Predictive Modeling',
    description_id:
      'Proyek predictive analytics untuk mengklasifikasikan kondisi stunting menggunakan machine learning dan proses preprocessing data.',
    description_en:
      'A predictive analytics project for stunting classification using machine learning and structured data preprocessing.',
    thumbnail_url: '',
    tech_stack: [
      'Python',
      'Random Forest',
      'scikit-learn',
      'Pandas',
    ],
    highlights: [
      'Data preprocessing',
      'Multi-class classification',
      'Random Forest modelling',
      'Model evaluation',
    ],
    github_url:
      'https://github.com/RezaHarahap/stunting-predictive-analytics',
    demo_url: '',
    featured: false,
    display_order: 6,
    status: 'published',
  },

  {
    id: 'cat-dog-cnn-classification',
    title: 'Cat vs Dog CNN Classification',
    slug: 'cat-dog-cnn-classification',
    category: 'ai_ml',
    subtitle: 'Image Classification with CNN',
    description_id:
      'Klasifikasi gambar kucing dan anjing menggunakan Convolutional Neural Network dengan dukungan model deployment ke beberapa format.',
    description_en:
      'Cat and dog image classification using a Convolutional Neural Network with model export to multiple deployment formats.',
    thumbnail_url: '',
    tech_stack: [
      'Python',
      'TensorFlow',
      'CNN',
      'TensorFlow Lite',
      'TensorFlow.js',
    ],
    highlights: [
      '25K image dataset',
      'CNN image classification',
      'Model evaluation',
      'Multi-format model export',
    ],
    github_url:
      'https://github.com/RezaHarahap/cat-dog-cnn-classification',
    demo_url: '',
    featured: false,
    display_order: 7,
    status: 'published',
  },

  {
    id: 'automated-ml-pipeline-mlops',
    title: 'Automated ML Pipeline & MLOps',
    slug: 'automated-ml-pipeline-mlops',
    category: 'ai_ml',
    subtitle: 'Experiment Tracking & CI Workflow',
    description_id:
      'Eksperimen machine learning dan otomatisasi workflow CI untuk mendukung proses training, tracking eksperimen, dan praktik MLOps.',
    description_en:
      'Machine learning experimentation and CI workflow automation to support training, experiment tracking, and MLOps practices.',
    thumbnail_url: '',
    tech_stack: [
      'Python',
      'MLflow',
      'GitHub Actions',
      'Machine Learning',
    ],
    highlights: [
      'ML experiment tracking',
      'Automated CI workflow',
      'Model training pipeline',
      'MLOps practices',
    ],
    github_url:
      'https://github.com/RezaHarahap/Eksperimen_SML_Reza-Harahap',
    demo_url: '',
    featured: false,
    display_order: 8,
    status: 'published',
  },

  // =========================================================
  // DATA SCIENCE & ANALYTICS
  // =========================================================

  {
    id: 'supermarket-sales-analysis',
    title: 'Supermarket Sales Analytics',
    slug: 'supermarket-sales-analysis',
    category: 'data_science',
    subtitle: 'Sales Analytics & Profit Prediction',
    description_id:
      'Analisis data penjualan supermarket untuk menghasilkan insight bisnis, visualisasi dashboard, dan prediksi keuntungan menggunakan machine learning.',
    description_en:
      'Supermarket sales analysis to generate business insights, dashboards, and profit predictions using machine learning.',
    thumbnail_url: '',
    tech_stack: [
      'Python',
      'Excel',
      'Looker Studio',
      'Random Forest',
      'Linear Regression',
    ],
    highlights: [
      '10K+ transaction analysis',
      'Interactive dashboard',
      'Business insight generation',
      'Profit prediction',
    ],
    github_url:
      'https://github.com/RezaHarahap/supermarket-sales-analysis',
    demo_url:
      'https://datastudio.google.com/reporting/69a5f62f-95ca-44d8-8202-c61b0c4c4f82',

    featured: true,
    display_order: 1,
    status: 'published',
  },

  {
    id: 'hr-attrition-data-science',
    title: 'HR Attrition Analytics',
    slug: 'hr-attrition-data-science',
    category: 'data_science',
    subtitle: 'Employee Attrition Predictive Analytics',
    description_id:
      'Analisis data karyawan untuk memahami faktor attrition dan membangun model prediksi risiko karyawan keluar.',
    description_en:
      'Employee data analysis to understand attrition factors and build a predictive model for employee attrition risk.',
    thumbnail_url: '',
    tech_stack: [
      'Python',
      'Logistic Regression',
      'Metabase',
      'SQLite',
      'Docker',
    ],
    highlights: [
      'EDA and business analysis',
      'Attrition risk prediction',
      'Model calibration',
      'Dashboard visualization',
    ],
    github_url:
      'https://github.com/RezaHarahap/hr-attrition-data-science',
    demo_url: '',
    featured: false,
    display_order: 2,
    status: 'published',
  },

  {
    id: 'customer-transaction-clustering',
    title: 'Customer Transaction Segmentation',
    slug: 'customer-transaction-clustering',
    category: 'data_science',
    subtitle: 'Customer Segmentation with Clustering',
    description_id:
      'Segmentasi pelanggan berdasarkan pola transaksi menggunakan K-Means Clustering, PCA, dan evaluasi silhouette score.',
    description_en:
      'Customer segmentation based on transaction patterns using K-Means Clustering, PCA, and silhouette score evaluation.',
    thumbnail_url: '',
    tech_stack: [
      'Python',
      'K-Means',
      'PCA',
      'scikit-learn',
      'Pandas',
    ],
    highlights: [
      'Customer segmentation',
      'K-Means clustering',
      'PCA visualization',
      'Cluster evaluation',
    ],
    github_url:
      'https://github.com/RezaHarahap/customer-transaction-clustering',
    demo_url: '',
    featured: false,
    display_order: 3,
    status: 'published',
  },

  // =========================================================
  // FULL-STACK DEVELOPMENT
  // =========================================================

  {
    id: 'ruangsuara',
    title: 'RuangSuara',
    slug: 'ruangsuara',
    category: 'full_stack',
    subtitle: 'React Forum with Automation Testing & CI/CD',
    description_id:
      'Aplikasi forum diskusi berbasis React dengan autentikasi, thread, komentar, voting, automation testing, Storybook, dan CI/CD menggunakan GitHub Actions.',
    description_en:
      'A React-based discussion forum featuring authentication, threads, comments, voting, automated testing, Storybook, and GitHub Actions CI/CD.',
    thumbnail_url: '',
    tech_stack: [
      'React',
      'Redux',
      'Cypress',
      'Storybook',
      'GitHub Actions',
    ],
    highlights: [
      'Automated unit & component testing',
      'Cypress End-to-End testing',
      'Storybook component documentation',
      'GitHub Actions CI/CD',
    ],
    github_url:
      'https://github.com/RezaHarahap/RuangSuara-React-Expert-CICD',
    demo_url:
      'https://ruang-suara-automation-cicd.vercel.app',
    featured: true,
    display_order: 1,
    status: 'published',
  },

  {
    id: 'greensorting',
    title: 'GreenSorting',
    slug: 'greensorting',
    category: 'full_stack',
    subtitle: 'Waste Sorting Monitoring System',
    description_id:
      'Aplikasi web monitoring pemilahan sampah berbasis Laravel untuk mendukung pencatatan, monitoring, dan pelaporan pengelolaan sampah.',
    description_en:
      'A Laravel-based waste sorting monitoring application designed to support recording, monitoring, and waste management reporting.',
    thumbnail_url: '',
    tech_stack: [
      'Laravel',
      'PHP',
      'MySQL',
      'JavaScript',
      'HTML',
      'CSS',
    ],
    highlights: [
      'Waste sorting monitoring',
      'Reporting system',
      'PDF report generation',
      'Black Box & UAT testing',
    ],
    github_url:
      'https://github.com/RezaHarahap/GreenSorting-by-GreenMind',
    demo_url: '',
    featured: false,
    display_order: 2,
    status: 'published',
  },

  {
    id: 'cerita-nusantara',
    title: 'Cerita Nusantara',
    slug: 'cerita-nusantara',
    category: 'full_stack',
    subtitle: 'Progressive Web Application',
    description_id:
      'Aplikasi berbasis web untuk berbagi cerita dengan dukungan autentikasi, peta, IndexedDB, push notification, dan fitur offline.',
    description_en:
      'A web application for sharing stories with authentication, maps, IndexedDB, push notifications, and offline support.',
    thumbnail_url: '',
    tech_stack: [
      'JavaScript',
      'PWA',
      'IndexedDB',
      'REST API',
      'Push Notification',
    ],
    highlights: [
      'Single Page Application',
      'Progressive Web App',
      'Offline support',
      'Push notifications',
    ],
    github_url:
      'https://github.com/RezaHarahap/cerita-nusantara',
    demo_url: '',
    featured: false,
    display_order: 3,
    status: 'published',
  },
];

export default projects;