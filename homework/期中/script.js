const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');
const themeToggle = document.getElementById('theme-toggle'); // 主題切換按鈕

const GROQ_API_KEY = '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'; // ← 在這裡放你的 Groq 金鑰

// 初始主題
let theme = localStorage.getItem('theme') || 'dark';
applyTheme();

// 主題切換按鈕事件
themeToggle.addEventListener('click', () => {
  theme = (theme === 'dark') ? 'light' : 'dark';
  localStorage.setItem('theme', theme);
  applyTheme();
});

// 套用主題樣式
function applyTheme() {
  if (theme === 'light') {
    document.body.classList.add('light');
    themeToggle.textContent = '🌞';
  } else {
    document.body.classList.remove('light');
    themeToggle.textContent = '🌙';
  }
}

// 發送訊息並取得回應
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const userMessage = input.value.trim();
  if (!userMessage) return;

  addMessage('user', userMessage);
  input.value = '';

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama3-8b-8192',
        messages: [
          { role: 'system', content: '你是一個有幫助的 AI 助手，請永遠使用繁體中文回答使用者的問題。' },
          { role: 'user', content: userMessage }
        ]
      })
    });

    const data = await response.json();

    if (data.choices && data.choices.length > 0) {
      const botMessage = data.choices[0].message.content;
      addMessage('bot', botMessage);
    } else {
      addMessage('bot', '⚠️ 出現錯誤，請稍後再試。');
    }
  } catch (error) {
    console.error('API 錯誤：', error);
    addMessage('bot', '❌ 無法連線至 Groq API。');
  }
});

// 顯示訊息
function addMessage(role, text) {
  const div = document.createElement('div');
  div.className = `message ${role}`;
  div.textContent = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}
