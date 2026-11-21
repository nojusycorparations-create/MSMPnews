const copyButton = document.getElementById('copyIp');
const copyMessage = document.getElementById('copyMessage');
copyButton.addEventListener('click', async () => {
  const ip = document.getElementById('serverIp').textContent.trim();
  try {
    await navigator.clipboard.writeText(ip);
    copyMessage.textContent = 'Copied! See you in the mines.';
  } catch {
    copyMessage.textContent = 'Copy unavailable — select the address above.';
  }
});
document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('nav').classList.toggle('open');
});
document.querySelectorAll('#nav a').forEach(link => link.addEventListener('click', () => {
  document.getElementById('nav').classList.remove('open');
}));
