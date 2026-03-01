// ================================================================
// INTERNACIONALIZACIÓN (i18n) – Portfolio de Pablo Legerén
// Default language: English. Switch with flag toggle button.
// ================================================================

const translations = {
  en: {
    // Navigation
    'nav-home': 'Home',
    'nav-about': 'About',
    'nav-education': 'Education',
    'nav-experience': 'Experience',
    'nav-projects': 'Projects',

    // Home
    'home-download': '<i class="fas fa-download"></i> Download CV',

    // About
    'about-title': 'About Me',
    'about-p1': "I've always been drawn to numbers, patterns, and the stories they can tell. Over time, that interest grew into a passion for <strong>mathematics</strong>, <strong>statistics</strong>, and ultimately <strong>data science</strong>—a space where logic and creativity come together to build smart, impactful solutions to real-world problems.",
    'about-p2': "I build <strong>solutions</strong> that integrate <strong>ML &amp; DL</strong> (especially <strong>NLP</strong> and <strong>LLMs</strong>) algorithms, and <strong>cloud technologies</strong> into scalable and practical tools. I'm especially passionate about understanding each context and designing data-driven solutions that truly fit client needs. I'm also committed to <strong>continuous self-learning</strong>, constantly exploring new tools, frameworks, and ideas to grow as a professional and stay at the forefront of the field.",
    'about-p3': "But beyond the code, what motivates me most is sharing knowledge. I love teaching students—from high school to university—and I regularly take part in volunteer initiatives where I can give back and stay grounded in what truly matters. I believe technology becomes meaningful when it's used to empower others.",
    'about-skills-title': 'Skills',
    'about-honors-title': 'Honors &amp; Programs',
    'about-languages-title': 'Languages',
    'about-certs-title': 'Certifications',
    'about-lang-es': 'Spanish (Native)',
    'about-lang-en': 'English (C1)',
    'about-mckinsey': 'McKinsey Forward Program (ongoing)',

    // Education
    'edu-title': 'Education',
    'edu-mod-label': 'Modules:',
    'edu-unav-honors': 'Graduated with Honors in Python &amp; Machine Learning',
    'edu-unav-project': 'Developed the <strong>top-performing model</strong> in a car price prediction competition by applying <strong>advanced feature engineering</strong> and building an ensemble of <strong>XGBoost</strong> and <strong>LightGBM models</strong>, achieving the highest score in the class.',
    'edu-upm-degree': 'Bachelor in Industrial Engineering',
    'edu-upm-project1': 'Achieved a perfect score (10/10) on a blood donation optimization project using <strong>linear programming</strong> and <strong>heuristic methods</strong> to maximize collected donations while minimizing time and operational costs in mobile ambulance units.',
    'edu-upm-project2': 'Predicted final league standings with 85% accuracy by developing a match-by-match <strong>forecasting model</strong> for the final project (9.2)',

    // Experience
    'exp-title': 'Work Experience',
    'exp-tel-period': 'May 2025 - Present',
    'exp-iep-period': 'Nov 2025 - Present',
    'exp-iep-role': 'Artificial Intelligence Teacher',
    'exp-typ-period': 'Feb 2025 - May 2025',
    'exp-uah-period': 'Sep 2024 - Feb 2025',
    'exp-uah-role': 'AI / NLP Researcher',
    'exp-sdg-period': 'Jan 2024 - Sep 2024',
    'exp-sdg-role': 'Data Analyst',
    'exp-tel-li1': 'Developed and deployed a multi-agent AI system to automate analytical workflows, reducing execution time from hours to seconds across multiple national teams.',
    'exp-tel-li2': 'Designed and implemented a federated learning architecture using the <strong>flwr</strong> framework, enabling privacy-preserving collaboration across distributed data sources.',
    'exp-tel-li3': 'Built an AI agent translating natural language queries into SQL, executing searches, and returning results in natural language.',
    'exp-tel-li4': 'Delivered Deep Learning and AWS training programs to large Data Science teams at <strong>BBVA</strong> and <strong>Banco de España</strong>, achieving an NPS of 80.',
    'exp-iep-li1': 'Delivered lectures and hands-on workshops in the <strong>Master in AI Applied to the Financial Sector</strong> (IEP).',
    'exp-iep-li2': 'Taught forecasting with <strong>Recurrent Neural Networks (RNNs)</strong> and introductory Machine Learning and Deep Learning courses in the Expert Program and <strong>MSc in Data Science &amp; AI</strong> (MBIT School).',
    'exp-typ-li1': 'Reduced internal project search time by over 80% by developing <strong>Proteo</strong>, an AI agent with a FastAPI backend enabling hybrid vector and keyword search over MongoDB.',
    'exp-typ-li2': 'Built <strong>AutoCV</strong>, an NLP-based candidate evaluation system achieving 80% accuracy on real data, automating CV parsing and profile matching across 600+ candidates.',
    'exp-typ-li3': 'Collaborated with multidisciplinary teams to integrate AI solutions into production workflows.',
    'exp-uah-li1': 'Conducted applied research in NLP and Large Language Models, developing chatbots and RAG systems in Python, with a focus on Reinforcement Learning combined with quantization, pruning, and knowledge distillation.',
    'exp-uah-li2': 'Collaborated with multinational companies to develop tailored AI-based solutions adapted to specific company needs.',
    'exp-sdg-li1': 'Designed and executed ELT processes for Data Vault models using <strong>dbt</strong> and <strong>Snowflake</strong>.',
    'exp-sdg-li2': 'Managed repository control and CI/CD deployments with <strong>Bitbucket</strong> and <strong>Jenkins</strong>.',
    'exp-sdg-li3': 'Validated ELT pipelines using SQL queries and contributed to Palantir integrations with <strong>PySpark</strong>.',

    // Projects
    'proj-title': 'Projects',
    'proj-airbnb-title': 'Airbnb Recommender System',
    'proj-airbnb-desc': 'Achieved <strong>real-time recommendations</strong> and <strong>market insights</strong> by developing a <strong>hybrid recommender system</strong> for Airbnb listings, combining <strong>content-based</strong> and <strong>collaborative filtering</strong> with <strong>clustering</strong>, rule-based logic, and <strong>ML models</strong> (CatBoost, TensorFlow embeddings, Keras). Built a full pipeline with <strong>web scraping</strong>, <strong>feature engineering</strong>, and a <strong>Streamlit app</strong>. Deployed the system as <strong>microservices on Azure</strong> to ensure <strong>scalability</strong> and seamless integration for users and property owners.',
    'proj-crypto-title': 'Cryptocurrency Analysis Dashboard',
    'proj-crypto-desc': 'Enabled real-time cryptocurrency <strong>market analysis</strong> by developing a <strong>modular Streamlit web app</strong> using Kraken API data, implementing <strong>stochastic indicators</strong> (%K, %D) and <strong>automated buy/sell signals</strong>. Structured the codebase with <strong>OOP principles</strong> and integrated <strong>CI workflows</strong> with <strong>GitHub Actions</strong>, including <strong>unit and integration tests</strong> with <strong>pytest</strong> for improved <strong>code reliability</strong>.',
    'proj-football-title': "Football Match Prediction (Bachelor's Thesis)",
    'proj-football-desc': "Developed a match-by-match <strong>forecasting model</strong> for my Bachelor's Thesis, graded with honors <strong>(9.2/10)</strong>, to <strong>predict</strong> final league standings with <strong>85% accuracy</strong>. The model was based on a <strong>multivariable Poisson distribution</strong>, incorporating home/away effects and opponent strength via team-specific attack and defense coefficients. Implemented in <strong>RStudio</strong>, it used <strong>statistical inference</strong>, <strong>Monte Carlo simulations</strong>, and <strong>mean relative error</strong> (~14%) analysis across 1000 iterations to generate <strong>robust final ranking probabilities</strong>. Currently migrating the model to <strong>scikit-learn</strong> for improved <strong>scalability</strong> and <strong>performance</strong>.",
    'proj-energy-title': 'Electricity Demand Forecasting',
    'proj-energy-desc': 'Performed advanced time series analysis to <strong>forecast electricity demand</strong> using Python. Employed <strong>feature engineering</strong>, <strong>model selection</strong>, and <strong>hyperparameter tuning</strong> to achieve accurate predictions. Utilized libraries such as <strong>skforecast</strong>, <strong>lightgbm</strong>, and <strong>feature_engine</strong> to build and evaluate the forecasting model.',
    'proj-ongoing-title': 'Ongoing projects...',
    'proj-ongoing-desc': 'New ideas are in motion! Current developments include <strong>image generation models</strong> using <strong>deep learning</strong> and <strong>reinforcement learning pipelines</strong> focused on <strong>optimization</strong> and <strong>automated decision-making</strong>. These <strong>AI-driven projects</strong> will be released soon.',
    'proj-coming-soon': 'Coming soon',

    // Contact
    'contact-title': 'Contact Me',
    'contact-desc': "Have a question or want to get in touch? Fill out the form below and I'll get back to you as soon as possible.",
    'contact-label-name': 'Name',
    'contact-label-email': 'Email',
    'contact-label-message': 'Message',
    'contact-placeholder-name': 'Your name',
    'contact-placeholder-email': 'your.email@example.com',
    'contact-placeholder-msg': 'Your message...',
    'contact-submit': 'Send Message',
  },

  es: {
    // Navigation
    'nav-home': 'Inicio',
    'nav-about': 'Sobre mí',
    'nav-education': 'Formación',
    'nav-experience': 'Experiencia',
    'nav-projects': 'Proyectos',

    // Home
    'home-download': '<i class="fas fa-download"></i> Descargar CV',

    // About
    'about-title': 'Sobre mí',
    'about-p1': 'Siempre me han atraído los números, los patrones y las historias que pueden contar. Con el tiempo, ese interés se convirtió en una pasión por las <strong>matemáticas</strong>, la <strong>estadística</strong> y, en última instancia, la <strong>ciencia de datos</strong>: un espacio donde la lógica y la creatividad se unen para construir soluciones inteligentes e impactantes.',
    'about-p2': 'Construyo <strong>soluciones</strong> que integran algoritmos de <strong>ML y DL</strong> (especialmente <strong>NLP</strong> y <strong>LLMs</strong>) con <strong>tecnologías cloud</strong> en herramientas escalables y prácticas. Me apasiona especialmente comprender cada contexto y diseñar soluciones basadas en datos que realmente se adapten a las necesidades del cliente. También estoy comprometido con el <strong>aprendizaje continuo</strong>, explorando constantemente nuevas herramientas, frameworks e ideas para crecer como profesional y mantenerme a la vanguardia del sector.',
    'about-p3': 'Pero más allá del código, lo que más me motiva es compartir conocimiento. Me encanta enseñar a estudiantes —desde bachillerato hasta universidad— y participo regularmente en iniciativas de voluntariado donde puedo aportar y mantenerme conectado con lo que realmente importa. Creo que la tecnología adquiere significado cuando se usa para empoderar a los demás.',
    'about-skills-title': 'Habilidades',
    'about-honors-title': 'Reconocimientos y Programas',
    'about-languages-title': 'Idiomas',
    'about-certs-title': 'Certificaciones',
    'about-lang-es': 'Español (Nativo)',
    'about-lang-en': 'Inglés (C1)',
    'about-mckinsey': 'McKinsey Forward Program (en curso)',

    // Education
    'edu-title': 'Formación',
    'edu-mod-label': 'Módulos:',
    'edu-unav-honors': 'Matrícula de Honor en Python &amp; Machine Learning',
    'edu-unav-project': 'Desarrollé el <strong>modelo de mejor rendimiento</strong> en una competición de predicción de precios de coches aplicando <strong>ingeniería de características avanzada</strong> y construyendo un ensemble de modelos <strong>XGBoost</strong> y <strong>LightGBM</strong>, obteniendo la puntuación más alta de la clase.',
    'edu-upm-degree': 'Grado en Ingeniería Industrial',
    'edu-upm-project1': 'Obtuve la nota perfecta (10/10) en un proyecto de optimización de donación de sangre usando <strong>programación lineal</strong> y <strong>métodos heurísticos</strong> para maximizar las donaciones recogidas minimizando el tiempo y los costes operativos de unidades ambulantes.',
    'edu-upm-project2': 'Predije la clasificación final de la liga con un 85% de precisión desarrollando un <strong>modelo de predicción</strong> partido a partido para el proyecto final (9.2)',

    // Experience
    'exp-title': 'Experiencia Laboral',
    'exp-tel-period': 'Mayo 2025 - Presente',
    'exp-iep-period': 'Nov 2025 - Presente',
    'exp-iep-role': 'Profesor de Inteligencia Artificial',
    'exp-typ-period': 'Feb 2025 - Mayo 2025',
    'exp-uah-period': 'Sep 2024 - Feb 2025',
    'exp-uah-role': 'Investigador AI / NLP',
    'exp-sdg-period': 'Ene 2024 - Sep 2024',
    'exp-sdg-role': 'Analista de Datos',
    'exp-tel-li1': 'Desarrollé y desplegué un sistema de <strong>IA multi-agente</strong> para automatizar flujos de trabajo analíticos, reduciendo el tiempo de ejecución de horas a segundos en múltiples equipos nacionales.',
    'exp-tel-li2': 'Diseñé e implementé una arquitectura de <strong>federated learning</strong> usando el framework <strong>flwr</strong>, habilitando la colaboración con preservación de privacidad entre fuentes de datos distribuidas.',
    'exp-tel-li3': 'Construí un agente de IA que traduce consultas en lenguaje natural a SQL, ejecuta búsquedas y devuelve resultados en lenguaje natural.',
    'exp-tel-li4': 'Impartí programas de formación en <strong>Deep Learning</strong> y <strong>AWS</strong> a grandes equipos de Data Science en <strong>BBVA</strong> y <strong>Banco de España</strong>, obteniendo un NPS de 80.',
    'exp-iep-li1': 'Impartí conferencias y talleres prácticos en el <strong>Máster en IA Aplicada al Sector Financiero</strong> (IEP).',
    'exp-iep-li2': 'Enseñé forecasting con <strong>Redes Neuronales Recurrentes (RNNs)</strong> y cursos introductorios de ML y Deep Learning en el Programa Experto y el <strong>MSc en Data Science &amp; AI</strong> (MBIT School).',
    'exp-typ-li1': 'Reduje el tiempo de búsqueda interna de proyectos en más del 80% desarrollando <strong>Proteo</strong>, un agente IA con backend en FastAPI que habilita búsqueda híbrida vectorial y por palabras clave sobre MongoDB.',
    'exp-typ-li2': 'Construí <strong>AutoCV</strong>, un sistema de evaluación de candidatos basado en NLP con un 80% de precisión en datos reales, automatizando el parsing de CVs y el matching de perfiles en más de 600 candidatos.',
    'exp-typ-li3': 'Colaboré con equipos multidisciplinares para integrar soluciones de IA en flujos de trabajo de producción.',
    'exp-uah-li1': 'Realicé investigación aplicada en NLP y Modelos de Lenguaje de Gran Escala, desarrollando chatbots y sistemas RAG en Python, con foco en Reinforcement Learning combinado con cuantización, pruning y destilación del conocimiento.',
    'exp-uah-li2': 'Colaboré con empresas multinacionales para desarrollar soluciones basadas en IA adaptadas a las necesidades específicas de cada empresa.',
    'exp-sdg-li1': 'Diseñé y ejecuté procesos ELT para modelos Data Vault usando <strong>dbt</strong> y <strong>Snowflake</strong>.',
    'exp-sdg-li2': 'Gestioné el control de repositorios y despliegues CI/CD con <strong>Bitbucket</strong> y <strong>Jenkins</strong>.',
    'exp-sdg-li3': 'Validé pipelines ELT con consultas SQL y contribuí a integraciones con Palantir usando <strong>PySpark</strong>.',

    // Projects
    'proj-title': 'Proyectos',
    'proj-airbnb-title': 'Sistema de Recomendación Airbnb',
    'proj-airbnb-desc': 'Logré <strong>recomendaciones en tiempo real</strong> e <strong>insights de mercado</strong> desarrollando un <strong>sistema híbrido de recomendación</strong> para alojamientos Airbnb, combinando <strong>filtrado basado en contenido</strong> y <strong>colaborativo</strong> con <strong>clustering</strong>, lógica basada en reglas y <strong>modelos ML</strong> (CatBoost, embeddings TensorFlow, Keras). Construí un pipeline completo con <strong>web scraping</strong>, <strong>ingeniería de características</strong> y una <strong>app en Streamlit</strong>. Desplegué el sistema como <strong>microservicios en Azure</strong> para garantizar <strong>escalabilidad</strong> e integración fluida.',
    'proj-crypto-title': 'Dashboard de Análisis de Criptomonedas',
    'proj-crypto-desc': 'Habilité el <strong>análisis de mercado</strong> de criptomonedas en tiempo real desarrollando una <strong>app web modular en Streamlit</strong> con datos de la API de Kraken, implementando <strong>indicadores estocásticos</strong> (%K, %D) y <strong>señales automáticas de compra/venta</strong>. Estructuré el código con <strong>principios OOP</strong> e integré <strong>flujos CI</strong> con <strong>GitHub Actions</strong>, incluyendo <strong>tests unitarios y de integración</strong> con <strong>pytest</strong> para mayor <strong>fiabilidad del código</strong>.',
    'proj-football-title': 'Predicción de Partidos de Fútbol (TFG)',
    'proj-football-desc': 'Desarrollé un <strong>modelo de predicción</strong> partido a partido para mi Trabajo de Fin de Grado, calificado con matrícula de honor <strong>(9.2/10)</strong>, para <strong>predecir</strong> la clasificación final de la liga con un <strong>85% de precisión</strong>. El modelo se basó en una <strong>distribución de Poisson multivariable</strong>, incorporando efectos de local/visitante y fortaleza del rival vía coeficientes de ataque y defensa por equipo. Implementado en <strong>RStudio</strong>, usó <strong>inferencia estadística</strong>, <strong>simulaciones Monte Carlo</strong> y análisis de <strong>error relativo medio</strong> (~14%) en 1000 iteraciones. Actualmente migrando el modelo a <strong>scikit-learn</strong> para mayor <strong>escalabilidad</strong> y <strong>rendimiento</strong>.',
    'proj-energy-title': 'Predicción de Demanda Eléctrica',
    'proj-energy-desc': 'Realicé análisis avanzado de series temporales para <strong>predecir la demanda eléctrica</strong> usando Python. Apliqué <strong>ingeniería de características</strong>, <strong>selección de modelos</strong> y <strong>ajuste de hiperparámetros</strong> para obtener predicciones precisas. Utilicé librerías como <strong>skforecast</strong>, <strong>lightgbm</strong> y <strong>feature_engine</strong> para construir y evaluar el modelo de predicción.',
    'proj-ongoing-title': 'Proyectos en curso...',
    'proj-ongoing-desc': '¡Nuevas ideas en marcha! Los desarrollos actuales incluyen <strong>modelos de generación de imágenes</strong> usando <strong>deep learning</strong> y <strong>pipelines de reinforcement learning</strong> enfocados en <strong>optimización</strong> y <strong>toma de decisiones automatizada</strong>. Estos <strong>proyectos impulsados por IA</strong> se publicarán próximamente.',
    'proj-coming-soon': 'Próximamente',

    // Contact
    'contact-title': 'Contáctame',
    'contact-desc': '¿Tienes alguna pregunta o quieres ponerte en contacto? Rellena el formulario y te responderé lo antes posible.',
    'contact-label-name': 'Nombre',
    'contact-label-email': 'Correo',
    'contact-label-message': 'Mensaje',
    'contact-placeholder-name': 'Tu nombre',
    'contact-placeholder-email': 'tu.email@ejemplo.com',
    'contact-placeholder-msg': 'Tu mensaje...',
    'contact-submit': 'Enviar mensaje',
  }
};

// ================================================================
// LANGUAGE ENGINE
// ================================================================
let currentLang = localStorage.getItem('portfolioLang') || 'en';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('portfolioLang', lang);
  document.documentElement.lang = lang;

  // Replace innerHTML for all tagged elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = translations[lang][key];
    if (value !== undefined) el.innerHTML = value;
  });

  // Replace placeholder for inputs/textareas
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const value = translations[lang][key];
    if (value !== undefined) el.placeholder = value;
  });

  // Update toggle button active state
  document.querySelectorAll('.lang-option').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(lang === 'en' ? 'btnEn' : 'btnEs');
  if (activeBtn) activeBtn.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
});
