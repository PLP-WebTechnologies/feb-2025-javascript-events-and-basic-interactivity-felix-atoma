/* script.js */

document.getElementById('clickBtn').addEventListener('click', () => {
    alert('Button clicked!');
  });
  
  document.getElementById('hoverBtn').addEventListener('mouseover', () => {
    alert('You hovered over me!');
  });
  
  document.getElementById('keypressInput').addEventListener('keypress', (e) => {
    console.log(`Key pressed: ${e.key}`);
  });
  
  document.getElementById('secretBtn').addEventListener('dblclick', () => {
    alert('Double click detected!');
  });
  
  // Interactive button
  const magicBtn = document.getElementById('magicBtn');
  magicBtn.addEventListener('click', () => {
    magicBtn.textContent = 'Magic Happened!';
    magicBtn.style.backgroundColor = '#ff5722';
  });
  
  // Gallery
  const images = [
    'https://via.placeholder.com/300x200/FF5733/FFFFFF?text=Image+1',
    'https://via.placeholder.com/300x200/33C1FF/FFFFFF?text=Image+2',
    'https://via.placeholder.com/300x200/75FF33/FFFFFF?text=Image+3'
  ];
  let currentImage = 0;
  
  document.getElementById('prevBtn').addEventListener('click', () => {
    currentImage = (currentImage - 1 + images.length) % images.length;
    document.getElementById('galleryImage').src = images[currentImage];
  });
  
  document.getElementById('nextBtn').addEventListener('click', () => {
    currentImage = (currentImage + 1) % images.length;
    document.getElementById('galleryImage').src = images[currentImage];
  });
  
  // Tabs
  const tabButtons = document.querySelectorAll('.tab-btn');
  
  function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
    document.getElementById(tabId).style.display = 'block';
  }
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      showTab(button.dataset.tab);
    });
  });
  
  // Form Validation
  const form = document.getElementById('myForm');
  const formMessage = document.getElementById('formMessage');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  
    if (!name || !email || !password) {
      formMessage.textContent = 'Please fill all fields!';
      formMessage.style.color = 'red';
      return;
    }
  
    if (!email.includes('@') || !email.includes('.')) {
      formMessage.textContent = 'Invalid email address!';
      formMessage.style.color = 'red';
      return;
    }
  
    if (password.length < 8) {
      formMessage.textContent = 'Password must be at least 8 characters!';
      formMessage.style.color = 'red';
      return;
    }
  
    formMessage.textContent = 'Form submitted successfully!';
    formMessage.style.color = 'green';
  });
  