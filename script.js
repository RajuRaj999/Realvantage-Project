  function toggle() {
    const sublist = document.querySelector(".sublist");
    const subnav =document.querySelector("nav");
       subnav.classList.toggle("active");
    sublist.classList.toggle("active");
  }

  
  document.querySelectorAll('.symbol').forEach(icon => {
    icon.addEventListener('click', () => {
      const desc = icon.closest('.service-sublist').querySelector('.description-section');
      const isVisible = desc.style.display === 'block';

      document.querySelectorAll('.description-section').forEach(d => d.style.display = 'none');
      document.querySelectorAll('.symbol').forEach(i => {
        i.classList.remove('fa-minus');
        i.classList.add('fa-plus');
      });

      if (!isVisible) {
        desc.style.display = 'block';
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
      }
    });
  });
