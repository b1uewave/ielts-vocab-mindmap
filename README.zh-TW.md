# 🗺️ IELTS Vocab Mindmap (雅思視覺化單字心智圖)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Cloudflare%20Pages-F38020?logo=cloudflare&logoColor=white)](https://ielts-vocab-mindmap.pages.dev/)
[![AI Co-Engineered](https://img.shields.io/badge/AI%20Co--Engineered-Google%20Gemini%203.6-8E44AD?logo=google&logoColor=white)](https://deepmind.google/technologies/gemini/)
[![Supabase](https://img.shields.io/badge/Database-Supabase%20PostgreSQL-3ECF8E?logo=supabase&logoColor=white)](https://supabase.com)
[![Web Speech API](https://img.shields.io/badge/Audio-Web%20Speech%20API-4285F4?logo=google&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
[![Vanilla JS](https://img.shields.io/badge/Frontend-Vanilla%20JS%20(ES6+)-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[English](README.md) | 繁體中文

🌐 **線上展示網址**: [https://ielts-vocab-mindmap.pages.dev/](https://ielts-vocab-mindmap.pages.dev/)

`ielts-vocab-mindmap` 是一個互動式、視覺化且資料驅動的雅思/英語場景單字心智圖學習平台。本專案採用 **Google Gemini 3.6 AI 人工智慧協同開發 (Human-in-the-Loop AI Engineering)**，將 AI 生成與校對的 15 大場景考題資料庫與動態 Bezier 貝茲曲線 SVG 心智圖渲染引擎、Web Speech API 真人語音朗讀，以及 Supabase PostgreSQL 雲端/本機快取混合同步架構完美結合。

---

## 🤖 AI 驅動開發流程與未來規劃 (AI-Driven Engineering & Roadmap)

本專案展現現代開發者運用 **AI 工具進行增程開發與資料處理 (Human-in-the-Loop AI Engineering)** 的能力：

- 🧠 **AI 資料處理管線 (AI Data Pipeline)**：使用 **Google Gemini 3.6** 生成、校對並結構化 15 大雅思核心高頻場景詞彙庫 (`unitsData.js`)，確保國際音標 (IPA)、考試常用搭配詞 (Collocations) 與真實擬真考題句型之準確性。
- ⚡ **AI 協同程式碼架構 (AI Co-Engineered Codebase)**：與 Google Antigravity & Gemini 3.6 進行 AI 結對編程 (Pair Programming)，快速產出貝茲曲線數學演算、SVG 節點動態定位與雲端資料庫混合同步邏輯。
- 🔮 **未來 AI 功能擴展路線圖 (Future Roadmap)**：
  - [ ] **AI 自適應學習引擎**：根據使用者聽音拼寫錯題率，動態調整複習頻率與題目難易度。
  - [ ] **LLM 寫作與口說造句批改助教**：運用 AI 即時評估學生使用當前單元單字所撰寫的句子。
  - [ ] **AI 語音對話陪練**：結合 Web Speech API 與 AI Agent 實現口說情境模擬對話。

---

## 🌟 核心特色 (Features)

- 📚 **15 大雅思核心高頻主題單元 (AI 生成與校對 150+ 精選詞彙與考點句型)**：
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
  - **Unit 11: Education & Learning** (教育與學習) - 📚 教學模式與學術體系
  - **Unit 12: Media & Communication** (媒體與傳播) - 📡 大眾傳播與社群網路
  - **Unit 13: Law, Crime & Society** (法律與社會) - ⚖️ 司法體系與社會治安
  - **Unit 14: Culture, Art & History** (文化與歷史) - 🏛️ 考古遺產與美學藝術
  - **Unit 15: Transportation & Planning** (交通與都市規劃) - 🚆 大眾運輸與城市擁堵
- 🎨 **視覺心智圖引擎 (Bezier Canvas Engine)**：即時動態計算貝茲曲線，連接中心主題與四周詞彙卡片。
- 🔊 **Web Speech API 雙語速朗讀**：支援單字與例句點擊發音，並提供 `1.0x` 正常與 `0.75x` 慢速精聽模式。
- ✏️ **聽音拼寫特訓 (Dictation Quiz)**：提供當前單元或全 15 大主題隨機抽考拼寫測驗，即時計算分數與連對紀錄。
- ☁️ **Supabase 雲端與本機混合同步 (Hybrid Storage Sync)**：支援 LocalStorage 秒開離線遊客模式，並自動發送背景請求同步至 Supabase PostgreSQL 資料庫 (`user_learned_words`)。
- 👁️ **遮蔽中文背單字模式 (Flashcards)**：一鍵隱藏中文翻譯與例句，點擊卡片測試記憶。
- 🔍 **即時雙語過濾與 Band 分級**：支援中英文關鍵字、音標高亮過濾，並可篩選 Band 6.0 ~ 8.5+ 難度。

---

## 🏗️ 系統架構圖 (System Architecture)

```mermaid
graph TD
    subgraph Client ["前端客戶端 Browser Client"]
        UI["用戶介面 (Control Panel & Cards)"]
        Engine["Bezier SVG 心智圖渲染引擎"]
        TTS["Web Speech API 語音發音引擎"]
        Quiz["聽音拼寫與複習測驗模組"]
        State["全域狀態管理 (State Controller)"]
        LocalDB[("Web LocalStorage 快取")]
    end

    subgraph AI ["AI 資料處理與開發層"]
        Gemini["Google Gemini 3.6 AI"]
        DataPipeline["AI 詞彙生成與校對資料管線"]
    end

    subgraph Backend ["雲端後端 Supabase Backend"]
        SupaClient["Supabase JS Client SDK v2"]
        PgDB[("PostgreSQL 雲端資料庫")]
        RLS["Row Level Security / 存取控制"]
    end

    Gemini -->|資料生成與驗證| DataPipeline
    DataPipeline -->|結構化 unitsData.js| State

    UI -->|操作/過濾/切換| State
    State -->|更新節點座標| Engine
    State -->|觸發單字/例句朗讀| TTS
    State -->|載入測驗題目| Quiz
    
    State -->|已學單字異動| LocalDB
    State -->|混合同步 (Hybrid Sync)| SupaClient
    SupaClient -->|Upsert / Delete / Select| PgDB
    PgDB --- RLS
```

---

## 🛠️ 技術棧總覽 (Technology Stack)

| 層級 (Layer) | 技術 / 工具 (Technology / Tools) | 說明與職責 (Description) |
| :--- | :--- | :--- |
| **AI 協同開發** | Google Gemini 3.6 AI | 15 大單元資料庫生成校對、音標驗證與 AI Pair Programming 輔助開發。 |
| **前端基底 (Frontend Core)** | HTML5, Vanilla JavaScript (ES6+), CSS3 | 零框架依賴負擔，畫面載入極速 (<50ms)。 |
| **圖形渲染引擎 (Visualization Engine)** | Dynamic SVG & Bezier Curve Math | 即時動態計算二次/三次貝茲曲線與 SVG 節點座標。 |
| **語音合成引擎 (Audio Synthesis)** | Web Speech API (`window.speechSynthesis`) | 瀏覽器原生 TTS 語音朗讀，支援雙語速切換 (`0.75x` / `1.0x`)。 |
| **雲端資料庫 (Cloud Database)** | Supabase (PostgreSQL 15+) | 透過 `@supabase/supabase-js` 客戶端提供雲端資料庫異步同步。 |
| **客戶端快取 (Client Storage)** | Web Storage API (`localStorage`) | 本機快取機制，支援離線遊客模式與秒開零延遲體驗。 |
| **雲端託管 (Deployment)** | Cloudflare Pages | 全球邊緣網路託管，提供超低延遲存取。 |

---

## 🗄️ 資料庫設計 (Database Design)

本專案採用 **Hybrid Dual-Storage Strategy (雙層混合儲存策略)**。使用者的單字學習進度會先寫入本機 `localStorage` 達到零延遲 UI 回應，背景則異步同步至 Supabase 雲端 PostgreSQL 資料庫。

### PostgreSQL 資料表 Schema (`user_learned_words`)

```sql
-- Create Table for tracking user's learned vocabulary progress
CREATE TABLE IF NOT EXISTS public.user_learned_words (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id TEXT NOT NULL,
    word TEXT NOT NULL,
    unit_id TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),

    -- Unique constraint for idempotent upserts per user
    CONSTRAINT unique_user_word UNIQUE (user_id, word)
);

-- Index for fast lookup by user_id
CREATE INDEX IF NOT EXISTS idx_user_learned_words_user_id 
ON public.user_learned_words (user_id);
```

---

## 📂 專案架構 (Project Structure)

```
ielts-vocab-mindmap/
├── index.html         # 主頁面結構、控制面板、彈窗與 UI 組件
├── unitsData.js       # AI 生成與校對之 15 大主題動態資料庫
├── script.js          # 核心控制器: Bezier SVG 引擎, Web Speech TTS, 拼寫測驗與 Supabase 同步
├── style.css          # 設計系統, 毛玻璃樣式, 主題與響應式切點
├── .env.example       # Supabase 密鑰與專案設定樣板
├── README.md          # 全英文主說明文件
├── README.zh-TW.md    # 繁體中文說明文件
└── .gitignore         # Git 忽略設定
```

---

## 🚀 快速開始與線上預覽 (Quick Start & Live Demo)

### 🌐 線上展示 (Live Demo)
專案已部署於 Cloudflare Pages 全球邊緣網路，歡迎直接線上體驗：
👉 **[https://ielts-vocab-mindmap.pages.dev/](https://ielts-vocab-mindmap.pages.dev/)**

### 本地開發 (Local Development)
無需安裝額外依賴套件或 Node.js 環境，直接使用瀏覽器開啟 `index.html` 即可：

```bash
# 複製專案庫
git clone https://github.com/b1uewave/ielts-vocab-mindmap.git

# 進入專案目錄
cd ielts-vocab-mindmap

# 使用瀏覽器開啟 index.html
open index.html
```

---

## 📝 授權 (License)

本專案採用 MIT 授權條款 - 詳情請參閱 [LICENSE](LICENSE) 檔案。

© 2026 ielts-vocab-mindmap
