// Script adds interactivity

// Direct AI search to ChatGPT
function openChatGPT(event) {
  event.preventDefault(); // prevent default form submit

  const query = document.getElementById('chatQuery').value.trim();
  if (!query) return;

  // Open ChatGPT in a new tab with query in URL
  const chatGPTUrl = `https://chat.openai.com/?prompt=${encodeURIComponent(query)}`;
  window.open(chatGPTUrl, '_blank');
}

// Contact form validation
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", (e) => {
            // Simple validation
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !message) {
                e.preventDefault(); // stop submission only when invalid
                document.getElementById("formMessage").innerText =
                    "⚠️ All fields are required!";
            }
        });
    }
});
