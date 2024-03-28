

let btns = document.querySelectorAll('.see_more');
btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let container = e.target.closest('.container_accordian');
    let accordionElement = container.querySelector(
      '.container_accordian_element'
    );
     e.target.innerHTML=e.target.innerHTML=="see more"?"see less":"see more"

    // Toggle the display style between 'none' and 'flex'

    accordionElement.style.display = accordionElement.style.display === 'flex' ? 'none' : 'flex';

  });
});
