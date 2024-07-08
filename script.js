
window.addEventListener('wheel', (event) => {
    if (event.ctrlKey) {
      event.preventDefault(); // Предотвращаем масштабирование с помощью Ctrl + колесо мыши
    }
  }, { passive: false });
  
  window.addEventListener('gesturestart', (event) => {
    event.preventDefault(); // Предотвращаем жесты на сенсорных экранах
  }, { passive: false });
  
  window.addEventListener('gesturechange', (event) => {
    event.preventDefault(); // Предотвращаем изменение жестов на сенсорных экранах
  }, { passive: false });
  
  window.addEventListener('gestureend', (event) => {
    event.preventDefault(); // Предотвращаем окончание жестов на сенсорных экранах
  }, { passive: false });
  