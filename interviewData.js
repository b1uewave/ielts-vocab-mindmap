/* ==========================================================================
   Software Engineer (SWE) Interview Learning Master Dataset
   Option A Architecture: Fixed 4 Core Modules x Role Track Filters
   - Module 1: Core Tech Vocab & IPA (10 Knowledge Pillars - Complete Cumulative Dataset with Concepts & Tools)
   - Module 2: Behavioral STAR Method (行為面試與故事句型)
   - Module 3: Live Coding & Algorithm Speech (白板題與程式口述)
   - Module 4: System Design Architecture (系統設計與高可用)
   ========================================================================== */

window.interviewData = {
  "swe-mod-1": {
    "id": "swe-mod-1",
    "number": 1,
    "moduleName": "Module 1: 核心技術高頻單字與發音",
    "titleEn": "Core Tech Concepts & Tools",
    "titleCn": "10 大知識柱完全學習地圖 (概念 + 熱門工具全收錄)",
    "badgeText": "Module 1 Core Tech 軟體工程高頻名詞、熱門工具與易錯發音圖鑑",
    "stickyNote": {
      "title": "📌 10 大核心技術知識柱導覽",
      "content": "已完整收錄 100+ 核心概念與熱門工具 (標有 🛠️ Tool)！點擊「+More」卡片或過濾 Role Track 即可瀏覽完整單字庫！"
    },
    "type": "quadrants",
    "centerSvg": `
      <div class="house-illustration">
        <svg viewBox="0 0 200 160" width="190" height="152">
          <rect x="20" y="20" width="160" height="120" rx="10" fill="#1e293b" stroke="#3b82f6" stroke-width="4"/>
          <circle cx="35" cy="35" r="5" fill="#ef4444"/>
          <circle cx="50" cy="35" r="5" fill="#eab308"/>
          <circle cx="65" cy="35" r="5" fill="#22c55e"/>
          <text x="30" y="70" font-family="monospace" font-size="13" fill="#38bdf8">const dev = new Engineer();</text>
          <text x="30" y="92" font-family="monospace" font-size="13" fill="#a855f7">dev.interview();</text>
          <text x="30" y="114" font-family="monospace" font-size="13" fill="#4ade80">// Status: Hired! 🚀</text>
        </svg>
      </div>
    `,
    "quadrants": [
      {
        "id": "secCSCore",
        "themeClass": "blue-theme",
        "titleCn": "⚡ 基礎計算與資料結構 (Fundamentals & DS)",
        "color": "#2563eb",
        "words": [
          {
            "word": "Big-O Notation",
            "roleTrack": "general",
            "band": "Core",
            "ipa": "[bɪɡ-oʊ noʊˈteɪʃən]",
            "cn": "大 O 漸近複雜度表示法",
            "example": "We analyze algorithm efficiency using Big-O time and space complexity.",
            "tip": "演算法面試最基礎的名詞！如 O(1), O(N), O(N log N)。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"3\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"2\"/><path d=\"M8 12h8M12 8v8\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-linecap=\"round\"/></svg>"
          },
          {
            "word": "Hash Table",
            "roleTrack": "general",
            "band": "Core",
            "ipa": "[hæʃ ˈteɪbəl]",
            "cn": "哈希表 / 散列表",
            "example": "Hash tables offer average O(1) time complexity for lookup operations.",
            "tip": "解題必備資料結構！注意 Hash collision 碰撞處理。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Recursion",
            "roleTrack": "general",
            "band": "Core",
            "ipa": "[rɪˈkɜːrʒən]",
            "cn": "遞迴 (函式呼叫自身)",
            "example": "Base case condition is essential to stop infinite recursion stack overflow.",
            "tip": "必須設定 Base Case (終止條件) 防止 Stack Overflow。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><path d=\"M4 12a8 8 0 0114-5.3L20 4v6h-6\" stroke=\"#2563eb\" stroke-width=\"2\" fill=\"none\"/></svg>"
          },
          {
            "word": "Pointer",
            "roleTrack": "general",
            "band": "Core",
            "ipa": "[ˈpɔɪntər]",
            "cn": "指標 (儲存記憶體位址的變數)",
            "example": "Pointers directly reference memory locations in C and Go.",
            "tip": "C/C++/Go 語言關鍵字，指引記憶體邊界。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><path d=\"M12 2l9 4v6c0 5.5-3.8 10.7-9 12-5.2-1.3-9-6.5-9-12V6l9-4z\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Dynamic Programming",
            "roleTrack": "general",
            "band": "Advanced",
            "ipa": "[daɪˈnæmɪk ˈproʊɡræmɪŋ]",
            "cn": "動態規劃 (拆解子問題與記憶化)",
            "example": "Dynamic programming solves subproblems once and stores results in a DP table.",
            "tip": "高階白板題必備演算法思維 (Memoization & Tabulation)。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Binary Search",
            "roleTrack": "general",
            "band": "Core",
            "ipa": "[ˈbaɪnəri sɜːrtʃ]",
            "cn": "二分搜尋法 (O(log N) 經典算法)",
            "example": "Binary search efficiently locates elements in a sorted array in logarithmic time.",
            "tip": "前提是資料必須有序 (Sorted Array)。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><circle cx=\"11\" cy=\"11\" r=\"7\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"2\"/><line x1=\"16\" y1=\"16\" x2=\"21\" y2=\"21\" stroke=\"#2563eb\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Space Complexity",
            "roleTrack": "general",
            "band": "Core",
            "ipa": "[speɪs kəmˈpleksəti]",
            "cn": "空間複雜度 (記憶體使用開銷)",
            "example": "We aim to optimize space complexity from O(N) to O(1) auxiliary space.",
            "tip": "面試官問完 Time Complexity 常接著問的第二關鍵！",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Amortized Analysis",
            "roleTrack": "general",
            "band": "Advanced",
            "ipa": "[ˈæmərˌtaɪzd əˈnæləsɪs]",
            "cn": "均攤分析 (動態擴容平攤時間)",
            "example": "ArrayList insertion has an amortized O(1) time complexity despite occasional array copying.",
            "tip": "動態陣列 (Vector / ArrayList) 擴容開銷分析方式。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><path d=\"M4 12h16M12 4v16\" stroke=\"#2563eb\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Bitwise Operation",
            "roleTrack": "general",
            "band": "Advanced",
            "ipa": "[ˈbɪtwaɪz ˌɑːpəˈreɪʃən]",
            "cn": "位元運算 (AND/OR/XOR 二進位處理)",
            "example": "Bitwise operations provide high-performance flag checking at the hardware level.",
            "tip": "利用二進位位元進行超高速運算 (Bitmask)。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Linked List",
            "roleTrack": "general",
            "band": "Core",
            "ipa": "[lɪŋkt lɪst]",
            "cn": "鏈結串列 (單向/雙向串列)",
            "example": "Linked lists allow O(1) insertion and deletion at known node positions.",
            "tip": "白板題指標與節點操作經典題型。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><path d=\"M4 12h16M14 6l6 6-6 6\" stroke=\"#2563eb\" stroke-width=\"2\"/></svg>"
          }
        ]
      },

      {
        "id": "secSystemCore",
        "themeClass": "purple-theme",
        "titleCn": "🔄 系統併發與非同步處理 (Concurrency & Async)",
        "color": "#7c3aed",
        "words": [
          {
            "word": "Idempotent",
            "roleTrack": "general",
            "band": "Core",
            "ipa": "[aɪˈdɛmpətənt]",
            "cn": "冪等的 (多次執行結果相同)",
            "example": "PUT and DELETE HTTP requests should be idempotent in REST API design.",
            "tip": "重音在 dem [dɛm]！表示重複執行結果一致。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"3\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"2\"/><path d=\"M8 12h8M12 8v8\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-linecap=\"round\"/></svg>"
          },
          {
            "word": "Asynchronous",
            "roleTrack": "general",
            "band": "Core",
            "ipa": "[eɪˈsɪŋkrənəs]",
            "cn": "非同步的",
            "example": "We use asynchronous I/O to handle high concurrent HTTP requests.",
            "tip": "常簡稱為 Async。字首 A- 表示「非」，Syn- 發音為 [sɪŋk]。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><circle cx=\"12\" cy=\"12\" r=\"8\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"2\"/><path d=\"M12 7v5l3 3\" stroke=\"#2563eb\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Event Loop",
            "roleTrack": "frontend",
            "band": "Frontend",
            "ipa": "[ɪˈvent luːp]",
            "cn": "事件迴圈 (JS 單線程非同步架構)",
            "example": "The Event Loop monitors the Call Stack and Task Queue continuously.",
            "tip": "前端面試必問！負責調度微任務與巨任務。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><circle cx=\"12\" cy=\"12\" r=\"8\" fill=\"#cff4fc\" stroke=\"#0891b2\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Race Condition",
            "roleTrack": "backend",
            "band": "Backend",
            "ipa": "[reɪs kənˈdɪʃən]",
            "cn": "競態條件 (多個執行緒爭奪資源)",
            "example": "Using Redis distributed locks prevents race conditions during stock deduction.",
            "tip": "後端多執行緒高併發常見 Bug。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><path d=\"M4 12h16M14 6l6 6-6 6\" stroke=\"#7c3aed\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Deadlock",
            "roleTrack": "backend",
            "band": "Backend",
            "ipa": "[ˈdedlɑːk]",
            "cn": "死鎖 (多個進程互相等待資源陷入停滯)",
            "example": "Acquiring locks in a consistent order prevents database deadlocks.",
            "tip": "多執行緒與 DB 鎖定中的經典故障場景。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"5\" y=\"11\" width=\"14\" height=\"10\" rx=\"2\" fill=\"#f3e8ff\" stroke=\"#7c3aed\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Mutex",
            "roleTrack": "backend",
            "band": "Backend",
            "ipa": "[ˈmjuːteks]",
            "cn": "互斥鎖 (Mutual Exclusion)",
            "example": "A mutex guarantees exclusive access to a critical code section.",
            "tip": "防止多執行緒同時改動共享資源的鎖定機制。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"6\" y=\"10\" width=\"12\" height=\"10\" rx=\"2\" fill=\"#f3e8ff\" stroke=\"#7c3aed\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Context Switching",
            "roleTrack": "backend",
            "band": "Backend",
            "ipa": "[ˈkɑːntekst ˈswɪtʃɪŋ]",
            "cn": "上下文切換 (CPU 暫存器狀態切換)",
            "example": "Excessive thread creation leads to high context switching overhead.",
            "tip": "多執行緒頻繁切換導致 CPU 效能損耗的原因。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><path d=\"M4 12h16M14 6l6 6-6 6\" stroke=\"#7c3aed\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Thread Pool",
            "roleTrack": "backend",
            "band": "Backend",
            "ipa": "[θred puːl]",
            "cn": "執行緒池 (預先建立與複用執行緒)",
            "example": "Thread pools reuse existing worker threads to handle incoming tasks efficiently.",
            "tip": "池化技術提升吞吐量。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" fill=\"#f3e8ff\" stroke=\"#7c3aed\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Node.js",
            "isTool": true,
            "roleTrack": "general",
            "band": "Tool",
            "ipa": "[noʊd.dʒeɪ.es]",
            "cn": "Node.js (非同步事件驅動 Runtime)",
            "example": "Node.js excels at non-blocking I/O intensive microservices.",
            "tip": "🛠️ 熱門工具！單線程事件驅動非同步 Runtime。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><polygon points=\"12,2 22,8 22,16 12,22 2,16 2,8\" fill=\"#f3e8ff\" stroke=\"#7c3aed\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Go (Golang)",
            "isTool": true,
            "roleTrack": "backend",
            "band": "Tool",
            "ipa": "[ɡoʊˈlæŋ]",
            "cn": "Go 語言 (具備 Goroutine 原生併發)",
            "example": "Go's lightweight goroutines make concurrency easy and fast.",
            "tip": "🛠️ 熱門工具！Google 推出的高併發雲原生語言。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" fill=\"#f3e8ff\" stroke=\"#7c3aed\" stroke-width=\"2\"/></svg>"
          }
        ]
      },

      {
        "id": "secArchitecture",
        "themeClass": "emerald-theme",
        "titleCn": "🏗️ 軟體架構與 OOP 設計模式 (Architecture & OOP)",
        "color": "#059669",
        "words": [
          {
            "word": "Scalability",
            "roleTrack": "general",
            "band": "Core",
            "ipa": "[ˌskeɪləˈbɪləti]",
            "cn": "可擴充性 / 彈性擴展力",
            "example": "Horizontal scalability allows us to add more server nodes on demand.",
            "tip": "分為 Horizontal (水平擴充) 與 Vertical (垂直擴充)。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"3\" y=\"12\" width=\"5\" height=\"9\" fill=\"#ddd6fe\" stroke=\"#7c3aed\" stroke-width=\"2\"/><rect x=\"10\" y=\"8\" width=\"5\" height=\"13\" fill=\"#ddd6fe\" stroke=\"#7c3aed\" stroke-width=\"2\"/><rect x=\"17\" y=\"4\" width=\"5\" height=\"17\" fill=\"#7c3aed\"/></svg>"
          },
          {
            "word": "Polymorphism",
            "roleTrack": "general",
            "band": "Core",
            "ipa": "[ˌpɑːliˈmɔːrfɪzəm]",
            "cn": "多型 (OOP 三大特性之一)",
            "example": "Polymorphism enables interfaces to represent different underlying data types.",
            "tip": "Poly (多) + Morph (形態)，物件導向核心概念。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><polygon points=\"12,3 2,12 12,21 22,12\" fill=\"#f3e8ff\" stroke=\"#7c3aed\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Dependency Injection",
            "roleTrack": "backend",
            "band": "Backend",
            "ipa": "[dɪˈpendənsi ɪnˈdʒekʃən]",
            "cn": "依賴注入 (DI / 解耦核心技術)",
            "example": "Dependency injection decouples class creation from business logic, aiding unit testing.",
            "tip": "SpringBoot, NestJS 等現代後端框架的核心機制。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><path d=\"M12 2v14M5 12l7 7 7-7\" stroke=\"#059669\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Micro-frontends",
            "roleTrack": "frontend",
            "band": "Frontend",
            "ipa": "[ˈmaɪkroʊ ˈfrʌnt.endz]",
            "cn": "微前端架構",
            "example": "Micro-frontends allow independent deployment of different module apps.",
            "tip": "大型 Web 團隊平行開發架構模式。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"4\" y=\"4\" width=\"7\" height=\"7\" fill=\"#cff4fc\" stroke=\"#0891b2\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "SOLID Principles",
            "roleTrack": "general",
            "band": "Core",
            "ipa": "[ˈsɑːlɪd ˈprɪnsəpəlz]",
            "cn": "SOLID 軟體設計五大原則",
            "example": "Adhering to SOLID principles leads to maintainable and extensible software design.",
            "tip": "Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion.",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" fill=\"#d1fae5\" stroke=\"#059669\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Encapsulation",
            "roleTrack": "general",
            "band": "Core",
            "ipa": "[ɪnˌkæpsuˈleɪʃən]",
            "cn": "封裝 (隱藏內部實作細節)",
            "example": "Encapsulation restricts direct access to an object's internal state.",
            "tip": "物件導向三大柱石。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"5\" y=\"5\" width=\"14\" height=\"14\" rx=\"3\" fill=\"#d1fae5\" stroke=\"#059669\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Monolith vs Microservices",
            "roleTrack": "backend",
            "band": "Backend",
            "ipa": "[ˈmɑːnəlɪθ vɜːrsəs ˈmaɪkroʊˌsɜːrvɪsɪz]",
            "cn": "單體架構對比微服務架構",
            "example": "Migrating from a monolith to microservices enables independent team deployments.",
            "tip": "系統設計面試經常要求比較折衷 (Trade-off)。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" fill=\"#d1fae5\" stroke=\"#059669\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Spring Boot",
            "isTool": true,
            "roleTrack": "backend",
            "band": "Tool",
            "ipa": "[sprɪŋ buːt]",
            "cn": "Spring Boot (Java 企業級 DI 框架)",
            "example": "Spring Boot simplifies microservice setup with auto-configuration and IoC container.",
            "tip": "🛠️ 熱門工具！Java 後端世界最普及的框架。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" fill=\"#d1fae5\" stroke=\"#059669\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "NestJS",
            "isTool": true,
            "roleTrack": "backend",
            "band": "Tool",
            "ipa": "[nest dʒeɪ es]",
            "cn": "NestJS (Node.js 模組化與 DI 框架)",
            "example": "NestJS brings Angular-like enterprise architecture to Node.js backend services.",
            "tip": "🛠️ 熱門工具！TypeScript 後端架構首選。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><polygon points=\"12,3 2,12 12,21 22,12\" fill=\"#d1fae5\" stroke=\"#059669\" stroke-width=\"2\"/></svg>"
          }
        ]
      },

      {
        "id": "secDatabases",
        "themeClass": "orange-theme",
        "titleCn": "💾 資料庫、快取與分散式數據 (Databases & Cache)",
        "color": "#ea580c",
        "words": [
          {
            "word": "ACID Transactions",
            "roleTrack": "backend",
            "band": "Backend",
            "ipa": "[ˈæsɪd trænˈzækʃənz]",
            "cn": "ACID 事務性 (原子/一致/隔離/持久)",
            "example": "Relational databases enforce ACID properties to guarantee data integrity.",
            "tip": "Atomicity, Consistency, Isolation, Durability",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"5\" y=\"5\" width=\"14\" height=\"14\" rx=\"2\" fill=\"#f3e8ff\" stroke=\"#7c3aed\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Database Sharding",
            "roleTrack": "backend",
            "band": "Backend",
            "ipa": "[ˈdeɪtəˌbeɪs ˈʃɑːrdɪŋ]",
            "cn": "資料庫分片 (橫向擴展儲存)",
            "example": "Database sharding distributes write load across database instances.",
            "tip": "基於 Consistent Hashing 進行分片。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"3\" y=\"3\" width=\"7\" height=\"7\" rx=\"1\" fill=\"#7c3aed\"/></svg>"
          },
          {
            "word": "Cache-Aside Pattern",
            "roleTrack": "backend",
            "band": "Backend",
            "ipa": "[kæʃ əˈsaɪd ˈpætərn]",
            "cn": "旁路快取模式 (先查 Cache，Miss 查 DB)",
            "example": "Cache-aside pattern reduces database read load by serving cached hits.",
            "tip": "後端快取常用經典設計模式。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" fill=\"#ffedd5\" stroke=\"#ea580c\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Message Queue",
            "roleTrack": "backend",
            "band": "Backend",
            "ipa": "[ˈmesɪdʒ kjuː]",
            "cn": "訊息佇列 (Kafka / RabbitMQ 解耦機制)",
            "example": "Message queues decouple background jobs from main HTTP request handlers.",
            "tip": "流量削峰與非同步解耦必備基建。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"4\" y=\"8\" width=\"16\" height=\"8\" rx=\"2\" fill=\"#ffedd5\" stroke=\"#ea580c\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "B-Tree Index",
            "roleTrack": "backend",
            "band": "Backend",
            "ipa": "[biː triː ˈɪndeks]",
            "cn": "B 樹 / B+ 樹資料庫索引",
            "example": "MySQL InnoDB utilizes B+ Tree indexes for logarithmic time range searches.",
            "tip": "關聯式 DB 快速檢索核心資料結構。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><polygon points=\"12,3 2,21 22,21\" fill=\"#ffedd5\" stroke=\"#ea580c\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Write-Ahead Logging",
            "roleTrack": "backend",
            "band": "Backend",
            "ipa": "[raɪt əˈhed ˈlɑːɡɪŋ]",
            "cn": "預寫式日誌 (WAL / 故障崩潰復原)",
            "example": "WAL guarantees atomicity and durability by appending changes before modifying data files.",
            "tip": "MySQL Redo Log / PostgreSQL WAL 保障崩潰一致性。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" fill=\"#ffedd5\" stroke=\"#ea580c\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Read Replica",
            "roleTrack": "backend",
            "band": "Backend",
            "ipa": "[riːd ˈreplɪkə]",
            "cn": "唯讀從庫 (讀寫分離分流機制)",
            "example": "Routing queries to read replicas isolates read traffic from primary database writes.",
            "tip": "主從複製 (Master-Slave) 常用架構。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" fill=\"#ffedd5\" stroke=\"#ea580c\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "CAP Theorem",
            "roleTrack": "backend",
            "band": "Backend",
            "ipa": "[kæp ˈθiːərəm]",
            "cn": "CAP 定理 (一致性/可用性/分區容忍)",
            "example": "CAP theorem states a distributed system can only provide two of Consistency, Availability, and Partition tolerance.",
            "tip": "分散式系統架構權衡經典定理。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><polygon points=\"12,3 2,21 22,21\" fill=\"#ffedd5\" stroke=\"#ea580c\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Redis",
            "isTool": true,
            "roleTrack": "backend",
            "band": "Tool",
            "ipa": "[ˈredɪs]",
            "cn": "Redis (記憶體 Key-Value 高速快取)",
            "example": "We leverage Redis as an in-memory data store for caching and pub/sub.",
            "tip": "🛠️ 熱門工具！後端快取與分散式鎖最常用的系統。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" fill=\"#ffedd5\" stroke=\"#ea580c\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Apache Kafka",
            "isTool": true,
            "roleTrack": "backend",
            "band": "Tool",
            "ipa": "[əˈpætʃi ˈkæfkə]",
            "cn": "Apache Kafka (高吞吐分散式訊息隊列)",
            "example": "Kafka handles millions of log events per second across microservices.",
            "tip": "🛠️ 熱門工具！分散式 Message Streaming 標準。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"4\" y=\"8\" width=\"16\" height=\"8\" rx=\"2\" fill=\"#ffedd5\" stroke=\"#ea580c\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "PostgreSQL",
            "isTool": true,
            "roleTrack": "backend",
            "band": "Tool",
            "ipa": "[ˈpoʊstɡres kjuː el]",
            "cn": "PostgreSQL (強大開源關聯式 DB)",
            "example": "PostgreSQL provides advanced JSONB indexing alongside strict ACID compliance.",
            "tip": "🛠️ 熱門工具！現代後端開發最推崇的關聯式 DB。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><circle cx=\"12\" cy=\"12\" r=\"8\" fill=\"#ffedd5\" stroke=\"#ea580c\" stroke-width=\"2\"/></svg>"
          }
        ]
      },

      {
        "id": "secNetworking",
        "themeClass": "amber-theme",
        "titleCn": "🌐 網路協議與 Web 資安 (Networking & Security)",
        "color": "#d97706",
        "words": [
          {
            "word": "Middleware",
            "roleTrack": "general",
            "band": "Core",
            "ipa": "[ˈmɪdəlwer]",
            "cn": "中介軟體 / 邊界層處理機制",
            "example": "Authentication and logging are handled by Express middleware.",
            "tip": "請求達到控制器之前的處理管道 (Pipeline)。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"4\" y=\"9\" width=\"16\" height=\"6\" rx=\"2\" fill=\"#059669\" opacity=\"0.2\" stroke=\"#059669\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "CORS Preflight",
            "roleTrack": "frontend",
            "band": "Frontend",
            "ipa": "[kɔːrz ˈpriːflaɪt]",
            "cn": "CORS 預檢請求 (OPTIONS 請求)",
            "example": "Browsers send CORS preflight before sending complex cross-origin requests.",
            "tip": "前端跨域資安防禦機制。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><path d=\"M12 2l9 4v6c0 5.5-3.8 10.7-9 12-5.2-1.3-9-6.5-9-12V6l9-4z\" fill=\"#cff4fc\" stroke=\"#0891b2\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "gRPC",
            "roleTrack": "backend",
            "band": "Backend",
            "ipa": "[ˌdʒiː.ɑːr.piːˈsiː]",
            "cn": "高效能遠端程序呼叫框架",
            "example": "gRPC uses HTTP/2 and Protocol Buffers for fast microservice communication.",
            "tip": "二進位傳輸比傳統 JSON 更高效。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"4\" y=\"8\" width=\"16\" height=\"8\" rx=\"2\" fill=\"#f3e8ff\" stroke=\"#7c3aed\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "OAuth 2.0",
            "roleTrack": "backend",
            "band": "Backend",
            "ipa": "[ˈoʊˌɑːθ tuː point zoʊ]",
            "cn": "開放授權標準 2.0 (第三方登入)",
            "example": "OAuth 2.0 allows users to log in via Google without sharing passwords.",
            "tip": "現代 AuthN/AuthZ 授權協定標準。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"5\" y=\"11\" width=\"14\" height=\"10\" rx=\"2\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "RESTful API",
            "roleTrack": "general",
            "band": "Core",
            "ipa": "[ˈrestfʊl ˌeɪ.piːˈaɪ]",
            "cn": "表現層狀態轉移 API 規範",
            "example": "RESTful APIs use HTTP verbs like GET, POST, PUT, and DELETE to manage resources.",
            "tip": "最普及的 Web API 設計原則。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Content Security Policy",
            "roleTrack": "frontend",
            "band": "Frontend",
            "ipa": "[ˈkɑːntent sɪˈkjʊrəti ˈpɑːləsi]",
            "cn": "內容安全策略 (CSP 防禦 XSS)",
            "example": "Enforcing a strict Content Security Policy restricts unauthorized script execution.",
            "tip": "防範 Cross-Site Scripting (XSS) 的核心 HTTP Header。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><path d=\"M12 2l9 4v6c0 5.5-3.8 10.7-9 12-5.2-1.3-9-6.5-9-12V6l9-4z\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "JWT Tokens",
            "roleTrack": "backend",
            "band": "Backend",
            "ipa": "[ˌdʒeɪ.dʌbəl.juːˈtiː ˈtoʊkənz]",
            "cn": "JSON Web Token (無狀態身分驗證)",
            "example": "JWT tokens carry signed user claims in stateless authorization headers.",
            "tip": "包含 Header, Payload, Signature 三部分。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "WebSockets",
            "roleTrack": "frontend",
            "band": "Frontend",
            "ipa": "[webˈsɑːkɪts]",
            "cn": "全雙工長連線協定 (即時通訊)",
            "example": "WebSockets enable persistent full-duplex communication for real-time chat applications.",
            "tip": "與 HTTP 輪詢 (Polling) 相比開銷極低。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><path d=\"M4 12h16M12 4v16\" stroke=\"#d97706\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "GraphQL",
            "isTool": true,
            "roleTrack": "frontend",
            "band": "Tool",
            "ipa": "[ɡræf.kjuːˈel]",
            "cn": "GraphQL (聲明式 API 查詢語言)",
            "example": "GraphQL eliminates over-fetching by allowing clients to request exact fields.",
            "tip": "🛠️ 熱門工具！解決 REST Over/Under-fetching 的前沿標準。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><polygon points=\"12,3 2,12 12,21 22,12\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/></svg>"
          }
        ]
      },

      {
        "id": "secClientEng",
        "themeClass": "cyan-theme",
        "titleCn": "📱 客戶端 Web 與 Mobile 工程 (Client-Side)",
        "color": "#0891b2",
        "words": [
          {
            "word": "Virtual DOM",
            "roleTrack": "frontend",
            "band": "Frontend",
            "ipa": "[ˈvɜːrtʃuəl dɑːm]",
            "cn": "虛擬 DOM (前端高效渲染核心)",
            "example": "React uses Virtual DOM reconciliation to minimize direct real DOM operations.",
            "tip": "透過 Diff 演算法比較前後狀態。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" fill=\"#cff4fc\" stroke=\"#0891b2\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Web Vitals",
            "roleTrack": "frontend",
            "band": "Frontend",
            "ipa": "[web ˈvaɪtəlz]",
            "cn": "網頁體驗關鍵指標 (LCP/CLS)",
            "example": "Optimizing Core Web Vitals improves user experience and SEO ranking.",
            "tip": "Google 官方效能體驗指標。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><path d=\"M13 2L3 14h9l-1 8 10-12h-9l1-8z\" fill=\"#cff4fc\" stroke=\"#0891b2\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Code Splitting",
            "roleTrack": "frontend",
            "band": "Frontend",
            "ipa": "[koʊd ˈsplɪtɪŋ]",
            "cn": "程式碼分割 (按需動態載入)",
            "example": "Code splitting reduces initial bundle size by dynamic import calls.",
            "tip": "前端效能優化關鍵手段之一。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><path d=\"M8 4h8M8 20h8\" stroke=\"#0891b2\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Server-Side Rendering",
            "roleTrack": "frontend",
            "band": "Frontend",
            "ipa": "[ˈsɜːrvər saɪd ˈrendərɪŋ]",
            "cn": "伺服器端渲染 (SSR / 提升首屏)",
            "example": "SSR renders complete HTML on the server, significantly improving FCP and SEO.",
            "tip": "Next.js / Nuxt.js 框架的核心價值。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" fill=\"#cff4fc\" stroke=\"#0891b2\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Tree-Shaking",
            "roleTrack": "frontend",
            "band": "Frontend",
            "ipa": "[triː ˈʃeɪkɪŋ]",
            "cn": "樹搖優化 (消除未使用的死碼)",
            "example": "Webpack relies on ES modules for tree-shaking dead code out of production bundles.",
            "tip": "藉由靜態 import/export 分析裁減打包尺寸。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><path d=\"M12 2l9 4v6c0 5.5-3.8 10.7-9 12-5.2-1.3-9-6.5-9-12V6l9-4z\" fill=\"#cff4fc\" stroke=\"#0891b2\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Hydration",
            "roleTrack": "frontend",
            "band": "Frontend",
            "ipa": "[haɪˈdreɪʃən]",
            "cn": "水合作用 (SSR 靜態 HTML 注入 JS)",
            "example": "Hydration attaches event listeners to server-rendered static HTML markup.",
            "tip": "SSR / Next.js 頁面載入關鍵機制。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><circle cx=\"12\" cy=\"12\" r=\"8\" fill=\"#cff4fc\" stroke=\"#0891b2\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Retain Cycle",
            "roleTrack": "mobile",
            "band": "Mobile",
            "ipa": "[rɪˈteɪn ˈsaɪkəl]",
            "cn": "強引用循環 (導致 App 記憶體洩漏)",
            "example": "Using weak self in Swift closures prevents retain cycles.",
            "tip": "Mobile iOS/Android 特化名詞！",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><circle cx=\"12\" cy=\"12\" r=\"7\" fill=\"#ffe4e6\" stroke=\"#f43f5e\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Offline-First",
            "roleTrack": "mobile",
            "band": "Mobile",
            "ipa": "[ˌɔːfˈlaɪn fɜːrst]",
            "cn": "離線優先架構設計",
            "example": "Offline-first apps write data locally before syncing to remote servers.",
            "tip": "Mobile 本地 DB 同步機制。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><path d=\"M12 2l9 4v6c0 5.5-3.8 10.7-9 12-5.2-1.3-9-6.5-9-12V6l9-4z\" fill=\"#ffe4e6\" stroke=\"#f43f5e\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Next.js",
            "isTool": true,
            "roleTrack": "frontend",
            "band": "Tool",
            "ipa": "[nekst dʒeɪ es]",
            "cn": "Next.js (企業級 SSR/SSG React 框架)",
            "example": "Next.js enables server-side rendering and automatic route code splitting.",
            "tip": "🛠️ 熱門工具！全棧 Web 生態目前最火紅的框架。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" fill=\"#cff4fc\" stroke=\"#0891b2\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "React Native",
            "isTool": true,
            "roleTrack": "mobile",
            "band": "Tool",
            "ipa": "[riˈækt ˈneɪtɪv]",
            "cn": "React Native (跨平台 Mobile 框架)",
            "example": "React Native compiles JavaScript UI logic into native iOS and Android components.",
            "tip": "🛠️ 熱門工具！跨平台 App 開發主流首選。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" fill=\"#ffe4e6\" stroke=\"#f43f5e\" stroke-width=\"2\"/></svg>"
          }
        ]
      },

      {
        "id": "secTestingQA",
        "themeClass": "teal-theme",
        "titleCn": "🧪 測試工程與品質自動化 (Testing & QA - SDET)",
        "color": "#0d9488",
        "words": [
          {
            "word": "Test Pyramid",
            "roleTrack": "sdet",
            "band": "SDET",
            "ipa": "[tɛst ˈpɪrəmɪd]",
            "cn": "測試金字塔 (單元 > 整合 > E2E)",
            "example": "Following the test pyramid strategy ensures fast feedback and lower maintenance cost.",
            "tip": "SDET 核心理論！底層單元測試數量最多。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><polygon points=\"12,3 2,21 22,21\" fill=\"#ccfbf1\" stroke=\"#0d9488\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Flaky Tests",
            "roleTrack": "sdet",
            "band": "SDET",
            "ipa": "[ˈfleɪki tɛsts]",
            "cn": "偶發失敗不穩定測試",
            "example": "Quarantining flaky tests keeps the CI/CD pipeline reliable.",
            "tip": "指結果非決定性、偶爾失敗的測試案例。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><path d=\"M12 4v16M6 10l6 6 6-6\" stroke=\"#0d9488\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Regression Testing",
            "roleTrack": "sdet",
            "band": "SDET",
            "ipa": "[rɪˈɡrɛʃən ˈtɛstɪŋ]",
            "cn": "回歸測試 (驗證新功能未破壞舊功能)",
            "example": "Automated regression testing runs before every release build.",
            "tip": "確保程式碼改動沒有退步的關鍵方法。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><path d=\"M4 12a8 8 0 0114-5.3L20 4v6h-6\" stroke=\"#0d9488\" stroke-width=\"2\" fill=\"none\"/></svg>"
          },
          {
            "word": "Mock vs Stub",
            "roleTrack": "sdet",
            "band": "SDET",
            "ipa": "[mɑːk vɜːrsəs stʌb]",
            "cn": "模擬物件與罐頭回應 (測試替身)",
            "example": "Stubs provide canned data, while mocks verify method invocation expectations.",
            "tip": "Stub 給資料，Mock 驗行為。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"4\" y=\"4\" width=\"7\" height=\"7\" fill=\"#ccfbf1\" stroke=\"#0d9488\" stroke-width=\"2\"/><rect x=\"13\" y=\"13\" width=\"7\" height=\"7\" fill=\"#ccfbf1\" stroke=\"#0d9488\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Code Coverage",
            "roleTrack": "sdet",
            "band": "SDET",
            "ipa": "[koʊd ˈkʌvərɪdʒ]",
            "cn": "程式碼測試覆蓋率",
            "example": "We maintain at least 85% branch code coverage for critical financial logic.",
            "tip": "包含 Line, Branch, Function 覆蓋率。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><circle cx=\"12\" cy=\"12\" r=\"8\" fill=\"#ccfbf1\" stroke=\"#0d9488\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Test Driven Development",
            "roleTrack": "sdet",
            "band": "SDET",
            "ipa": "[tɛst ˈdrɪvən dɪˈveləpmənt]",
            "cn": "測試驅動開發 (TDD 紅-綠-重構循環)",
            "example": "TDD encourages writing failing tests before writing production code.",
            "tip": "Red (寫測試失敗) -> Green (實作通過) -> Refactor (重構)。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><circle cx=\"12\" cy=\"12\" r=\"8\" fill=\"#ccfbf1\" stroke=\"#0d9488\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Mutation Testing",
            "roleTrack": "sdet",
            "band": "SDET",
            "ipa": "[mjuːˈteɪʃən ˈtestɪŋ]",
            "cn": "變異測試 (向代碼注入 Bug 檢驗品質)",
            "example": "Mutation testing evaluates test suite quality by introducing small artificial faults.",
            "tip": "比單純程式碼覆蓋率更能反映測試強度。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><path d=\"M12 4v16M6 10l6 6 6-6\" stroke=\"#0d9488\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "End-to-End Test",
            "roleTrack": "sdet",
            "band": "SDET",
            "ipa": "[end tuː end tɛst]",
            "cn": "E2E 完整端到端測試",
            "example": "E2E tests simulate actual user journeys from UI interactions down to DB.",
            "tip": "全流程模擬真實使用者行為的測試。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" fill=\"#ccfbf1\" stroke=\"#0d9488\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Assertion",
            "roleTrack": "sdet",
            "band": "SDET",
            "ipa": "[əˈsɜːrʃən]",
            "cn": "斷言 (測試實際與預期比對)",
            "example": "Assertions check if function output equals expected test criteria.",
            "tip": "測試套件基礎控制。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><circle cx=\"12\" cy=\"12\" r=\"8\" fill=\"#ccfbf1\" stroke=\"#0d9488\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Playwright",
            "isTool": true,
            "roleTrack": "sdet",
            "band": "Tool",
            "ipa": "[ˈpleɪraɪt]",
            "cn": "Playwright (微軟現代 E2E 測試框架)",
            "example": "Playwright automates end-to-end browser testing across Chrome, Firefox, and Safari.",
            "tip": "🛠️ 熱門工具！SDET 前端與 API 自動化測試利器。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" fill=\"#ccfbf1\" stroke=\"#0d9488\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Cypress",
            "isTool": true,
            "roleTrack": "sdet",
            "band": "Tool",
            "ipa": "[ˈsaɪprəs]",
            "cn": "Cypress (前端 E2E 自動化測試套件)",
            "example": "Cypress runs in the same run-loop as your web application for fast execution.",
            "tip": "🛠️ 熱門工具！前端元件與 E2E 測試套件。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><circle cx=\"12\" cy=\"12\" r=\"8\" fill=\"#ccfbf1\" stroke=\"#0d9488\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Jest",
            "isTool": true,
            "roleTrack": "sdet",
            "band": "Tool",
            "ipa": "[dʒest]",
            "cn": "Jest (JavaScript 單元與整合測試框架)",
            "example": "Jest provides zero-config unit testing with snapshot testing features.",
            "tip": "🛠️ 熱門工具！Meta 推出的 JavaScript 測試標配。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" fill=\"#ccfbf1\" stroke=\"#0d9488\" stroke-width=\"2\"/></svg>"
          }
        ]
      },

      {
        "id": "secDevOpsSRE",
        "themeClass": "rose-theme",
        "titleCn": "🛠️ 雲端維運與可觀測性 (DevOps & SRE)",
        "color": "#e11d48",
        "words": [
          {
            "word": "SLA / SLO",
            "roleTrack": "sre",
            "band": "SRE",
            "ipa": "[ˌes.elˈeɪ / ˌes.elˈoʊ]",
            "cn": "服務層級協定與目標",
            "example": "Our SLO guarantees 99.99% availability for critical API endpoints.",
            "tip": "Service Level Agreement / Objective",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><circle cx=\"12\" cy=\"12\" r=\"8\" fill=\"#ffe4e6\" stroke=\"#e11d48\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Observability",
            "roleTrack": "sre",
            "band": "SRE",
            "ipa": "[əbˌzɜːrvəˈbɪləti]",
            "cn": "可觀測性 (Metrics, Logs, Traces)",
            "example": "Observability allows us to infer internal system state from telemetry.",
            "tip": "SRE 核心概念！強調 Metrics, Logs, Traces 三支柱。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><path d=\"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z\" fill=\"#ffe4e6\" stroke=\"#e11d48\" stroke-width=\"2\"/><circle cx=\"12\" cy=\"12\" r=\"3\" fill=\"#e11d48\"/></svg>"
          },
          {
            "word": "Incident RCA",
            "roleTrack": "sre",
            "band": "SRE",
            "ipa": "[ˈɪnsɪdənt ˌɑːr.siːˈeɪ]",
            "cn": "事故復盤與根因分析",
            "example": "Conducting blameless RCA prevents recurring production outages.",
            "tip": "Root Cause Analysis，無指責復盤文化。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><path d=\"M12 2L2 22h20L12 2z\" stroke=\"#e11d48\" stroke-width=\"2\" fill=\"#ffe4e6\"/></svg>"
          },
          {
            "word": "Canary Release",
            "roleTrack": "sre",
            "band": "SRE",
            "ipa": "[kəˈneri rɪˈliːs]",
            "cn": "金絲雀分流發布",
            "example": "Canary release gradually routes traffic to test new features safely.",
            "tip": "SRE 部署特化名詞！",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" fill=\"#ffe4e6\" stroke=\"#e11d48\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Infrastructure as Code",
            "roleTrack": "sre",
            "band": "SRE",
            "ipa": "[ˈɪnfrəˌstrʌktʃər æz koʊd]",
            "cn": "基礎設施即程式碼 (IaC / Terraform)",
            "example": "IaC allows managing cloud infrastructure through version-controlled files.",
            "tip": "使用代碼定義 AWS/GCP 資源發布。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" fill=\"#ffe4e6\" stroke=\"#e11d48\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Containerization",
            "roleTrack": "sre",
            "band": "SRE",
            "ipa": "[kənˈteɪnərəˈzeɪʃən]",
            "cn": "容器化技術 (Docker / 封裝環境)",
            "example": "Containerization ensures application consistency across development and production.",
            "tip": "Docker 容器打包基建技術。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" fill=\"#ffe4e6\" stroke=\"#e11d48\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Chaos Engineering",
            "roleTrack": "sre",
            "band": "SRE",
            "ipa": "[ˈkeɪɑːs ˌendʒɪˈnɪrɪŋ]",
            "cn": "混沌工程 (主動注入故障測試韌性)",
            "example": "Chaos engineering intentionally injects network latency to verify system resilience.",
            "tip": "如 Netflix Chaos Monkey 經典工具。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><path d=\"M13 2L3 14h9l-1 8 10-12h-9l1-8z\" fill=\"#ffe4e6\" stroke=\"#e11d48\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Kubernetes",
            "roleTrack": "sre",
            "band": "SRE",
            "ipa": "[ˌkuːbərˈnetɪs]",
            "cn": "K8s 容器自動化編排平台",
            "example": "Kubernetes automates deployment, scaling, and management of containerized applications.",
            "tip": "現代雲端維運標準基建平台。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><polygon points=\"12,2 22,8 22,16 12,22 2,16 2,8\" fill=\"#ffe4e6\" stroke=\"#e11d48\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Azure",
            "isTool": true,
            "roleTrack": "sre",
            "band": "Tool",
            "ipa": "[ˈæʒər]",
            "cn": "Microsoft Azure (微軟公有雲端平台)",
            "example": "We migrated our infrastructure to Azure Kubernetes Service for automatic scaling.",
            "tip": "🛠️ 熱門工具！注意發音是 [ˈæʒər] (不是 阿蘇爾)！",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" fill=\"#ffe4e6\" stroke=\"#e11d48\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "AWS",
            "isTool": true,
            "roleTrack": "sre",
            "band": "Tool",
            "ipa": "[ˌeɪ.dʌbəl.juːˈes]",
            "cn": "AWS (亞馬遜 Amazon Web Services 雲端)",
            "example": "AWS EC2 and S3 form the cloud foundation of our enterprise backend.",
            "tip": "🛠️ 熱門工具！全球市佔第一的雲端服務。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" fill=\"#ffe4e6\" stroke=\"#e11d48\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Terraform",
            "isTool": true,
            "roleTrack": "sre",
            "band": "Tool",
            "ipa": "[ˈterəfɔːrm]",
            "cn": "Terraform (跨雲 IaC 程式碼化基礎設施)",
            "example": "Terraform automates multi-cloud provisioning through declarative HCL config.",
            "tip": "🛠️ 熱門工具！SRE 常用的 IaC 部署工具。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><polygon points=\"12,2 22,8 22,16 12,22 2,16 2,8\" fill=\"#ffe4e6\" stroke=\"#e11d48\" stroke-width=\"2\"/></svg>"
          }
        ]
      },

      {
        "id": "secAIRAG",
        "themeClass": "indigo-theme",
        "titleCn": "🤖 大模型與 RAG 檢索架構 (AI Models & RAG)",
        "color": "#4f46e5",
        "words": [
          {
            "word": "Vector Database",
            "roleTrack": "ai",
            "band": "AI",
            "ipa": "[ˈvektər ˈdeɪtəˌbeɪs]",
            "cn": "向量資料庫 (RAG 核心高維儲存)",
            "example": "Vector databases store embeddings for fast semantic similarity search.",
            "tip": "🤖 AI 專屬象限！如 Pinecone, Milvus, Qdrant。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><polygon points=\"12,3 2,12 12,21 22,12\" fill=\"#e0e7ff\" stroke=\"#4f46e5\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "RAG Pipeline",
            "roleTrack": "ai",
            "band": "AI",
            "ipa": "[ræɡ ˈpaɪplaɪn]",
            "cn": "檢索增強生成管道",
            "example": "Our RAG pipeline retrieves relevant docs before feeding prompt into LLM.",
            "tip": "🤖 AI 專屬象限！Retrieval-Augmented Generation",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><path d=\"M5 12h14M12 5l7 7-7 7\" stroke=\"#4f46e5\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Embeddings",
            "roleTrack": "ai",
            "band": "AI",
            "ipa": "[emˈbedɪŋz]",
            "cn": "向量嵌入 (文本高維度數值化)",
            "example": "Embeddings convert text into dense vector representations for semantic search.",
            "tip": "🤖 AI 專屬象限！將文字轉為語意空間向量。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><circle cx=\"12\" cy=\"12\" r=\"7\" fill=\"#e0e7ff\" stroke=\"#4f46e5\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Context Window",
            "roleTrack": "ai",
            "band": "AI",
            "ipa": "[ˈkɑːntekst ˈwɪndoʊ]",
            "cn": "模型上下文視窗上限",
            "example": "Managing context window token limits prevents truncating long prompts.",
            "tip": "🤖 AI 專屬象限！LLM 一次處理的最大 Token 量。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" fill=\"#e0e7ff\" stroke=\"#4f46e5\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Streaming Tokens",
            "roleTrack": "ai",
            "band": "AI",
            "ipa": "[ˈstriːmɪŋ ˈtoʊkənz]",
            "cn": "流式 Token 輸出 (即時打字響應)",
            "example": "Streaming tokens via SSE improves perceived response latency in AI UI.",
            "tip": "🤖 AI 專屬象限！降低首字延遲 (TTFT)。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><path d=\"M13 2L3 14h9l-1 8 10-12h-9l1-8z\" fill=\"#4f46e5\" stroke=\"#4f46e5\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Semantic Search",
            "roleTrack": "ai",
            "band": "AI",
            "ipa": "[səˈmæntɪk sɜːrtʃ]",
            "cn": "語意檢索 (理解真實意圖而非字面)",
            "example": "Semantic search retrieves matching document chunks based on intent similarity.",
            "tip": "🤖 AI 專屬象限！超越傳統 BM25 關鍵字匹配。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><circle cx=\"11\" cy=\"11\" r=\"7\" fill=\"#e0e7ff\" stroke=\"#4f46e5\" stroke-width=\"2\"/><line x1=\"16\" y1=\"16\" x2=\"21\" y2=\"21\" stroke=\"#4f46e5\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Hybrid Search",
            "roleTrack": "ai",
            "band": "AI",
            "ipa": "[ˈhaɪbrɪd sɜːrtʃ]",
            "cn": "混合檢索 (向量語意 + 關鍵字)",
            "example": "Hybrid search combines dense vector retrieval with sparse keyword BM25 scoring.",
            "tip": "🤖 AI 專屬象限！提高 RAG 檢索精準度。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" fill=\"#e0e7ff\" stroke=\"#4f46e5\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Tokenization",
            "roleTrack": "ai",
            "band": "AI",
            "ipa": "[ˌtoʊkənəˈzeɪʃən]",
            "cn": "文本 Token 化 (切分為詞元區塊)",
            "example": "Tokenization splits input text into sub-word tokens for LLM processing.",
            "tip": "🤖 AI 專屬象限！NLP 大模型處理文字前置步驟。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" fill=\"#e0e7ff\" stroke=\"#4f46e5\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Cosine Similarity",
            "roleTrack": "ai",
            "band": "AI",
            "ipa": "[ˈkoʊsaɪn ˌsɪməˈlærəti]",
            "cn": "餘弦相似度 (向量語意距離)",
            "example": "Cosine similarity measures vector proximity in high-dimensional embedding space.",
            "tip": "🤖 AI 專屬象限！RAG 最常用的相似度演算法。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><circle cx=\"12\" cy=\"12\" r=\"8\" fill=\"#e0e7ff\" stroke=\"#4f46e5\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "LangChain",
            "isTool": true,
            "roleTrack": "ai",
            "band": "Tool",
            "ipa": "[læŋ tʃeɪn]",
            "cn": "LangChain (LLM 應用與 RAG 編排框架)",
            "example": "LangChain provides abstractions for prompt templates, vector retrievers, and AI agents.",
            "tip": "🛠️ AI 熱門工具！LLM 應用開發熱門基建。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" fill=\"#e0e7ff\" stroke=\"#4f46e5\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Pinecone",
            "isTool": true,
            "roleTrack": "ai",
            "band": "Tool",
            "ipa": "[ˈpaɪnkoʊn]",
            "cn": "Pinecone (託管式商用向量資料庫)",
            "example": "Pinecone handles ultra-low latency ANN vector similarity retrieval at scale.",
            "tip": "🛠️ AI 熱門工具！生產級 Vector DB 代表。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><circle cx=\"12\" cy=\"12\" r=\"7\" fill=\"#e0e7ff\" stroke=\"#4f46e5\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "LlamaIndex",
            "isTool": true,
            "roleTrack": "ai",
            "band": "Tool",
            "ipa": "[ˈlɑːmə ˈɪndeks]",
            "cn": "LlamaIndex (RAG 文件資料處理框架)",
            "example": "LlamaIndex simplifies connecting private data sources to LLM prompts.",
            "tip": "🛠️ AI 熱門工具！RAG 文件解析與索引首選工具。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" fill=\"#e0e7ff\" stroke=\"#4f46e5\" stroke-width=\"2\"/></svg>"
          }
        ]
      },

      {
        "id": "secAIFineTune",
        "themeClass": "violet-theme",
        "titleCn": "🧠 AI 微調、護欄與 Agent (AI Fine-Tuning & Agents)",
        "color": "#9333ea",
        "words": [
          {
            "word": "Quantization",
            "roleTrack": "ai",
            "band": "AI",
            "ipa": "[ˌkwɑːntəˈzeɪʃən]",
            "cn": "模型量化 (權重壓縮至 4-bit/8-bit)",
            "example": "Quantization reduces memory footprint, allowing models to run on edge devices.",
            "tip": "🤖 AI 專屬象限！如 GGUF, AWQ 壓縮技術。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"6\" y=\"4\" width=\"12\" height=\"16\" rx=\"2\" fill=\"#f3e8ff\" stroke=\"#9333ea\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Fine-Tuning",
            "roleTrack": "ai",
            "band": "AI",
            "ipa": "[faɪn ˈtuːnɪŋ]",
            "cn": "模型微調 (LoRA 特化領域訓練)",
            "example": "Fine-tuning Llama on domain datasets adapts model tone to medical context.",
            "tip": "🤖 AI 專屬象限！微調預訓練模型權重。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><circle cx=\"12\" cy=\"12\" r=\"7\" fill=\"#f3e8ff\" stroke=\"#9333ea\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Hallucination",
            "roleTrack": "ai",
            "band": "AI",
            "ipa": "[həˌluːsɪˈneɪʃən]",
            "cn": "大模型幻覺 (生成不實內容)",
            "example": "RAG reduces hallucinations by grounding model responses in factual source docs.",
            "tip": "🤖 AI 專屬象限！大模型生成虛假事實之現象。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><path d=\"M12 2a10 10 0 100 20 10 10 0 000-20z\" fill=\"#f3e8ff\" stroke=\"#9333ea\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "LLM Guardrails",
            "roleTrack": "ai",
            "band": "AI",
            "ipa": "[ˈel.el.em ˈɡɑːrdreɪlz]",
            "cn": "LLM 護欄防護 (輸入輸出控制)",
            "example": "Implementing guardrails prevents malicious prompt injection attacks.",
            "tip": "🤖 AI 專屬象限！控制 Prompt 攻擊與過濾不合規內容。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" fill=\"#f3e8ff\" stroke=\"#9333ea\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "RLHF",
            "roleTrack": "ai",
            "band": "AI",
            "ipa": "[ˌɑːr.el.eɪtʃˈef]",
            "cn": "人類反饋強化學習 (AI 對齊機制)",
            "example": "RLHF aligns LLM responses with human values and safety guidelines.",
            "tip": "🤖 AI 專屬象限！Reinforcement Learning from Human Feedback",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><path d=\"M12 2l9 4v6c0 5.5-3.8 10.7-9 12-5.2-1.3-9-6.5-9-12V6l9-4z\" fill=\"#f3e8ff\" stroke=\"#9333ea\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Prompt Engineering",
            "roleTrack": "ai",
            "band": "AI",
            "ipa": "[prɑːmpt ˌendʒɪˈnɪrɪŋ]",
            "cn": "Prompt 提示工程 (優化 LLM 輸出)",
            "example": "Prompt engineering optimizes instructions using few-shot examples and role framing.",
            "tip": "🤖 AI 專屬象限！如 Few-Shot, CoT。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" fill=\"#f3e8ff\" stroke=\"#9333ea\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Tool Calling",
            "roleTrack": "ai",
            "band": "AI",
            "ipa": "[tuːl ˈkɔːlɪŋ]",
            "cn": "工具調用 (Function Calling 呼叫 API)",
            "example": "Tool calling empowers LLMs to execute external APIs dynamically.",
            "tip": "🤖 AI 專屬象限！Agent 核心功能。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><path d=\"M12 2v14M5 12l7 7 7-7\" stroke=\"#9333ea\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Prompt Injection",
            "roleTrack": "ai",
            "band": "AI",
            "ipa": "[prɑːmpt ɪnˈdʒekʃən]",
            "cn": "Prompt 注入攻擊 (越獄越權指令)",
            "example": "Prompt injection bypasses LLM system instructions to output unauthorized data.",
            "tip": "🤖 AI 專屬象限！AI 資安熱門課題。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><path d=\"M12 2l9 4v6c0 5.5-3.8 10.7-9 12-5.2-1.3-9-6.5-9-12V6l9-4z\" fill=\"#f3e8ff\" stroke=\"#9333ea\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Agentic Workflow",
            "roleTrack": "ai",
            "band": "AI",
            "ipa": "[eɪˈdʒentɪk ˈwɜːrkfloʊ]",
            "cn": "Agent 自主工作流 (思考、規劃與工具)",
            "example": "Agentic workflows decompose complex goals into iterative planning and execution.",
            "tip": "🤖 AI 專屬象限！Agent 系統設計觀念。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" fill=\"#f3e8ff\" stroke=\"#9333ea\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "Ollama",
            "isTool": true,
            "roleTrack": "ai",
            "band": "Tool",
            "ipa": "[oʊˈlɑːmə]",
            "cn": "Ollama (本地開源 LLM 運行與推斷引擎)",
            "example": "Ollama allows developers to run Llama 3 locally with one simple CLI command.",
            "tip": "🛠️ AI 熱門工具！本地運行私有 LLM 首選。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><rect x=\"6\" y=\"4\" width=\"12\" height=\"16\" rx=\"2\" fill=\"#f3e8ff\" stroke=\"#9333ea\" stroke-width=\"2\"/></svg>"
          },
          {
            "word": "vLLM",
            "isTool": true,
            "roleTrack": "ai",
            "band": "Tool",
            "ipa": "[viː el el em]",
            "cn": "vLLM (PagedAttention 高吞吐推理伺服器)",
            "example": "vLLM optimizes KV cache memory with PagedAttention for maximum LLM serving throughput.",
            "tip": "🛠️ AI 熱門工具！企業級高併發 LLM Inference 引擎。",
            "icon": "<svg class=\"custom-icon\" viewBox=\"0 0 24 24\" width=\"38\" height=\"38\"><polygon points=\"12,3 2,12 12,21 22,12\" fill=\"#f3e8ff\" stroke=\"#9333ea\" stroke-width=\"2\"/></svg>"
          }
        ]
      }
    ]
  },

  "swe-mod-2": {
    "id": "swe-mod-2",
    "number": 2,
    "moduleName": "Module 2: 行為面試與 STAR 句型",
    "titleEn": "Behavioral Interview & STAR Method",
    "titleCn": "行為面試與 STAR 故事敘事句型",
    "badgeText": "Module 2 Behavioral Interview STAR 法則展現領導力與溝通句型",
    "stickyNote": {
      "title": "📌 STAR 法則架構提醒",
      "content": "回答情境題時遵循：Situation (背景) -> Task (任務) -> Action (行動細節) -> Result (量化結果/成果)！"
    },
    "type": "qa-cards",
    "items": [
      {
        "id": "beh-qa-1",
        "roleTrack": "general",
        "category": "Overcoming Technical Challenges (通用技術挑戰)",
        "questionEn": "Tell me about a challenging technical problem you solved.",
        "questionCn": "請分享你處理過最棘手的技術問題。",
        "answerEn": "In my previous project, we faced severe latency spikes during peak traffic. I led the profiling investigation, identified database N+1 query bottlenecks, and refactored the caching layer to reduce API latency by 60%.",
        "answerCn": "在我之前的專案中，我們在高流量高峰期遭遇嚴重的延遲飆升。我帶頭進行效能分析，找出資料庫 N+1 查詢瓶頸，並重構快取層，將 API 延遲降低了 60%。",
        "keywords": [
          { "word": "latency spikes", "ipa": "[ˈleɪtənsi spaɪks]", "cn": "延遲飆升" },
          { "word": "bottlenecks", "ipa": "[ˈbɑːtəlˌnɛks]", "cn": "瓶頸" }
        ]
      },
      {
        "id": "beh-ai-1",
        "roleTrack": "ai",
        "category": "Mitigating LLM Hallucinations (解決大模型幻覺故事)",
        "questionEn": "How did you address hallucination and factual accuracy issues in an enterprise AI assistant?",
        "questionCn": "在企業級 AI 助理專案中，你如何處置並降低 LLM 的幻覺與事實不符問題？",
        "answerEn": "To eliminate hallucinations, I architected a hybrid RAG system using vector similarity search paired with BM25 keyword matching, and added strict system prompt guardrails that enforce fallback responses when confidence scores fall below 85%.",
        "answerCn": "為消除幻覺，我架構了結合向量相似度與 BM25 關鍵字混合檢索的 RAG 系統，並加入嚴格的 System Prompt 護欄機制，當可信度分數低於 85% 時強制執行保底回應。",
        "keywords": [
          { "word": "eliminate hallucinations", "ipa": "[ɪˈlɪmɪneɪt həˌluːsɪˈneɪʃənz]", "cn": "消除幻覺" },
          { "word": "hybrid RAG system", "ipa": "[ˈhaɪbrɪd ræɡ ˈsɪstəm]", "cn": "混合 RAG 系統" }
        ]
      },
      {
        "id": "beh-sdet-1",
        "roleTrack": "sdet",
        "category": "Resolving Flaky Tests & Test Automation (SDET 測試自動化)",
        "questionEn": "How did you eliminate flaky automated tests in your team's CI/CD pipeline?",
        "questionCn": "你如何在團隊的 CI/CD 管道中排除偶發失敗的不穩定測試 (Flaky Tests)？",
        "answerEn": "I isolated flaky end-to-end tests into a quarantine suite, replaced hardcoded sleeps with explicit dynamic waits, and set up mock servers for external API dependencies, increasing CI pass rate from 72% to 99%.",
        "answerCn": "我將不穩定的 E2E 測試隔離進觀測套件，以顯式動態等待取代硬編碼 sleep，並為外部 API 建立 Mock 服務，將 CI 通過率從 72% 提升至 99%。",
        "keywords": [
          { "word": "quarantine suite", "ipa": "[ˈkwɔːrəntiːn swiːt]", "cn": "隔離套件" },
          { "word": "explicit dynamic waits", "ipa": "[ɪkˈsplɪsɪt daɪˈnæmɪk weɪts]", "cn": "顯式動態等待" }
        ]
      }
    ]
  },

  "swe-mod-3": {
    "id": "swe-mod-3",
    "number": 3,
    "moduleName": "Module 3: 白板題與解題口述句型",
    "titleEn": "Live Coding & Algorithm Speech",
    "titleCn": "白板題與解題口述句型",
    "badgeText": "Module 3 Live Coding 口述與思維展現表達句型",
    "stickyNote": {
      "title": "💡 Coding 面試口述技巧",
      "content": "解題前切勿立刻寫程式！先用英文確認題目限制 (Constraints & Edge cases)，接著說明高階思路 (High-level approach)，最後進行邊寫邊講 (Think aloud)！"
    },
    "type": "qa-cards",
    "items": [
      {
        "id": "code-qa-1",
        "roleTrack": "general",
        "category": "Clarifying Requirements (確認需求與邊界)",
        "questionEn": "How do you start a live coding task with the interviewer?",
        "questionCn": "如何跟面試官開場並確認題目條件？",
        "answerEn": "Before diving into the code, let me clarify the inputs, edge cases, and expected scale. For instance, can the input array contain negative numbers or duplicate values?",
        "answerCn": "在開始寫程式之前，我想先確認輸入資料、邊界條件與資料規模。例如：輸入的陣列是否可能包含負數或重複值？",
        "keywords": [
          { "word": "dive into the code", "ipa": "[daɪv ˈɪntuː ðə koʊd]", "cn": "投入寫程式" },
          { "word": "edge cases", "ipa": "[ɛdʒ ˈkeɪsɪz]", "cn": "邊界條件/特殊狀況" }
        ]
      }
    ]
  },

  "swe-mod-4": {
    "id": "swe-mod-4",
    "number": 4,
    "moduleName": "Module 4: 系統設計與高可用架構",
    "titleEn": "System Design Architecture",
    "titleCn": "系統設計與高可用架構表達",
    "badgeText": "Module 4 System Design 高併發、快取與分散式架構討論句型",
    "stickyNote": {
      "title": "📌 System Design 討論金句",
      "content": "主動提出考量：Single point of failure (單點故障)、Data consistency (資料一致性) 以及 Trade-offs (技術權衡)！"
    },
    "type": "qa-cards",
    "items": [
      {
        "id": "sd-qa-1",
        "roleTrack": "general",
        "category": "High Availability & Load Balancing (高可用與負載均衡)",
        "questionEn": "How do you design a high availability service with high traffic?",
        "questionCn": "如何設計一個承受高流量的高可用性服務？",
        "answerEn": "To eliminate any single point of failure, we deploy multiple stateless API nodes behind an Nginx load balancer and use auto-scaling based on CPU utilization.",
        "answerCn": "為了消除任何單點故障，我們在 Nginx 負載均衡器後方部署多個無狀態 API 節點，並根據 CPU 使用率進行自動動態擴展。",
        "keywords": [
          { "word": "single point of failure", "ipa": "[ˈsɪŋɡəl pɔɪnt əv ˈfeɪljər]", "cn": "單點故障 (SPOF)" }
        ]
      },
      {
        "id": "sd-ai-1",
        "roleTrack": "ai",
        "category": "Enterprise RAG Architecture (企業級 RAG 系統架構)",
        "questionEn": "How did you design a scalable RAG pipeline for millions of internal documents?",
        "questionCn": "如何為海量企業文件設計可平行擴充的 RAG 檢索增強生成架構？",
        "answerEn": "We chunk documents using parent-document retrievers, store vector embeddings in Milvus vector DB, and use a Redis cache layer for frequent queries alongside a reranking cross-encoder model to maximize retrieval precision.",
        "answerCn": "我們使用父文件檢索器對文章分塊，將向量 Embeddings 存入 Milvus 向量庫，並以 Redis 快取熱門查詢，配合重排序 Cross-Encoder 模型最大化檢索精準度。",
        "keywords": [
          { "word": "vector embeddings", "ipa": "[ˈvektər emˈbedɪŋz]", "cn": "向量嵌入" },
          { "word": "reranking cross-encoder", "ipa": "[riːˈræŋkɪŋ krɔːs enˈkoʊdər]", "cn": "重排序模型" }
        ]
      }
    ]
  }
};
