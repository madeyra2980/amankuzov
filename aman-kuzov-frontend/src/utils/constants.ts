// Constants for Aman Kuzov React App

export const APP_STRINGS = {
  appName: 'Aman Kuzov',
  appDescription: 'Здоровый кузов',
  welcomeTitle: 'Добро пожаловать в Aman Kuzov!',
  welcomeSubtitle: 'Проверьте состояние вашего автомобиля с помощью ИИ',
  cameraTitle: 'Сфотографируйте автомобиль',
  cameraSubtitle: 'Сделайте четкое фото автомобиля для анализа',
  takePhoto: 'Сделать фото',
  selectFromGallery: 'Выбрать из галереи',
  analyzing: 'Анализируем...',
  analysisComplete: 'Анализ завершен',
  forDriver: 'Для водителя',
  forPassenger: 'Для пассажира',
  retakePhoto: 'Переснять',
  analyzeAgain: 'Анализировать снова',
  shareResult: 'Поделиться',
  saveResult: 'Сохранить',
  errorOccurred: 'Произошла ошибка',
  tryAgain: 'Попробовать снова',
  noCameraPermission: 'Нет разрешения на камеру',
  loading: 'Загрузка...'
};

export const COLORS = {
  primaryGreen: '#00C853',
  darkGreen: '#00A041',
  lightGreen: '#4CAF50',
  black: '#000000',
  darkGrey: '#212121',
  grey: '#757575',
  lightGrey: '#BDBDBD',
  white: '#FFFFFF',
  background: '#F5F5F5',
  success: '#4CAF50',
  warning: '#FF9800',
  error: '#F44336',
  info: '#2196F3'
};

export const API_CONFIG = {
  baseUrl: 'http://127.0.0.1:8000',
  endpoints: {
    detect: '/detect-json',
    health: '/health'
  }
};

export const MESSAGES = {
  driver: {
    cleanIntact: {
      message: 'Вы хороший водитель!',
      details: 'Чистая + целая = все хорошо! Продолжайте в том же духе! 😊',
      emoji: '😊'
    },
    cleanDamaged: {
      message: 'Надо в ремонт!',
      details: 'Чистая + побитая = пора к механику! Но хотя бы мойте машину 👍',
      emoji: '🔧'
    },
    dirtyIntact: {
      message: 'Пора на мойку!',
      details: 'Целая + грязная = отличная машина, но нужна мойка! 💦',
      emoji: '🧽'
    },
    dirtyDamaged: {
      message: 'Лучше сегодня отдохнуть!',
      details: 'Грязная + побитая = лучше не ездить сегодня! Отдохните! 😄',
      emoji: '😴'
    }
  },
  passenger: {
    cleanIntact: {
      message: 'Лучше только этой машины!',
      details: 'Чистая + целая = "бывшая" машина! Садитесь смело! 😉',
      emoji: '👑'
    },
    cleanDamaged: {
      message: 'Без козлов на дороге не обойтись!',
      details: 'Чистая + побитая = осторожно с водителем! 🙃',
      emoji: '🐐'
    },
    dirtyIntact: {
      message: 'Последнее время слишком много дождя!',
      details: 'Целая + грязная = хорошая машина, просто дождь был! 😗',
      emoji: '🌧️'
    },
    dirtyDamaged: {
      message: 'Хочешь жить? Садись к нам!',
      details: 'Грязная + побитая = экстремальная поездка! 😈',
      emoji: '💀'
    }
  }
};
