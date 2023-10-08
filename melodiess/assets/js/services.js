const servicesItems = document.querySelectorAll('.services-item');

servicesItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    item.classList.remove('hover');
  });
});
