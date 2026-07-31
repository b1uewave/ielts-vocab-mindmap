# 🗺️ IELTS Vocab Mindmap (雅思視覺化單字心智圖)

`ielts-vocab-mindmap` 是一個互動式、視覺化且資料驅動的雅思/英語場景單字心智圖學習平台。

---

## 🌟 核心特色 (Features)

- 📚 **10 大雅思核心高頻主題單元 (Complete 10-Unit IELTS Scenario Dataset)**：
  - **Unit 1: Accommodation** (住宿與居住環境) - 🏠 手繪溫馨小屋
  - **Unit 2: Campus Life** (校園與學術生活) - 🎓 手繪圖書館與畢業帽
  - **Unit 3: Travel & Tourism** (旅遊交通與觀光) - ✈️ 手繪地球儀與飛機
  - **Unit 4: Health & Medical** (健康醫療與保險) - 🩺 手繪急救箱與心電圖
  - **Unit 5: Work & Career** (職場求職與兼職) - 💼 手繪辦公大樓與公事包
  - **Unit 6: Environment & Nature** (氣候變遷與生態) - 🌿 手繪綠能地球與森林
  - **Unit 7: Banking & Services** (金融開戶與郵務) - 💳 手繪銀行大樓與信用卡
  - **Unit 8: Food & Dining** (飲食餐廳與點餐) - 🍔 手繪主廚餐盤與刀叉
  - **Unit 9: Entertainment & Sports** (娛樂藝術與運動) - 🎨 手繪調色盤與足球
  - **Unit 10: Science & Technology** (科學實驗與 AI 科技) - 🔬 手繪顯微鏡與晶片
- 🎨 **視覺心智圖 (Visual Mind Mapping)**：動態 Bezier 貝茲曲線與專屬手繪風中心插圖。
- 🔊 **TTS 真人語音朗讀 (Audio Speech Synthesis)**：支援單字與例句點擊朗讀，並提供 `1.0x` 正常與 `0.75x` 慢速精聽模式。
- ✏️ **聽音拼寫特訓 (Dictation Quiz)**：提供當前單元或全單元 10 大主題混合抽考拼寫測驗，自動計算得分與連對紀錄。
- 👁️ **遮蔽中文背單字模式 (Flashcards)**：一鍵隱藏中文翻譯，點擊卡片翻牌測試記憶。
- 🔍 **即時雙語搜尋 (Instant Filter)**：支援中英文單字與音標即時高亮過濾。
- 📱 **響應式視圖 (Responsive Views)**：支援「心智圖動態曲線視圖」與「網格卡片視圖」切換。

---

## 📂 專案架構 (Project Structure)

```
ielts-vocab-mindmap/
├── index.html     # 主頁面結構與控制面板 UI
├── unitsData.js   # 10 大單元動態資料庫 (Units 1~10 詞彙、例句、考點與 SVG 圖標)
├── script.js      # 語音朗讀、單元動態渲染、Bezier 動態曲線與搜尋/測驗邏輯
├── style.css      # 設計系統、主題配色、彈窗與響應式樣式
├── README.md      # 專案說明文件
└── .gitignore     # Git 忽略檔案設定
```

---

## 🚀 快速開始 (Quick Start)

無需安裝額外依賴套件，直接使用瀏覽器開啟 `index.html` 即可體驗：

```bash
# 本地預覽
open index.html
```

---

## 📝 授權與貢獻 (License)

MIT License © 2026 ielts-vocab-mindmap
