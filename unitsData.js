/* ==========================================================================
   IELTS Vocab Mindmap - Dynamic Multi-Unit Data Store
   Units 1 to 5: Accommodation, Campus Life, Travel, Health, Work
   ========================================================================== */

window.unitsData = {
  "unit-1": {
    id: "unit-1",
    number: 1,
    titleEn: "Accommodation",
    titleCn: "住 宿",
    badgeText: "Unit 1 Accommodation 住宿單字圖鑑",
    stickyNote: {
      title: "📌 雅思聽力考點提醒",
      content: "聽力 Section 1 常考 Accommodation！特別注意 flat (英) vs apartment (美)、ensuite (獨立衛浴) 與 utility bills (水電費) 的拼寫與單複數！"
    },
    centerSvg: `
      <div class="house-illustration">
        <svg class="house-svg" viewBox="0 0 200 160" width="190" height="152">
          <path d="M 20 75 L 100 15 L 180 75 Z" fill="#e74c3c" stroke="#2c3e50" stroke-width="4" stroke-linejoin="round"/>
          <path d="M 35 62 L 100 16 L 165 62" fill="none" stroke="#f1948a" stroke-width="3"/>
          <rect x="135" y="25" width="18" height="30" fill="#c0392b" stroke="#2c3e50" stroke-width="3"/>
          <circle cx="144" cy="18" r="5" fill="#e5e8e8" opacity="0.8"/>
          <circle cx="150" cy="10" r="7" fill="#e5e8e8" opacity="0.6"/>
          <rect x="32" y="73" width="136" height="75" rx="4" fill="#fbeee6" stroke="#2c3e50" stroke-width="4"/>
          <rect x="48" y="85" width="28" height="28" rx="3" fill="#85c1e9" stroke="#2c3e50" stroke-width="3"/>
          <line x1="62" y1="85" x2="62" y2="113" stroke="#2c3e50" stroke-width="2"/>
          <line x1="48" y1="99" x2="76" y2="99" stroke="#2c3e50" stroke-width="2"/>
          <rect x="124" y="85" width="28" height="28" rx="3" fill="#85c1e9" stroke="#2c3e50" stroke-width="3"/>
          <line x1="138" y1="85" x2="138" y2="113" stroke="#2c3e50" stroke-width="2"/>
          <line x1="124" y1="99" x2="152" y2="99" stroke="#2c3e50" stroke-width="2"/>
          <rect x="86" y="95" width="28" height="53" rx="2" fill="#af601a" stroke="#2c3e50" stroke-width="3"/>
          <circle cx="108" cy="122" r="2.5" fill="#f4d03f"/>
          <path d="M 5 148 Q 50 142 100 148 T 195 148 L 195 158 L 5 158 Z" fill="#2ecc71" stroke="#27ae60" stroke-width="3"/>
          <rect x="165" y="105" width="10" height="40" fill="#784212" stroke="#2c3e50" stroke-width="2.5"/>
          <circle cx="170" cy="92" r="22" fill="#27ae60" stroke="#2c3e50" stroke-width="3"/>
          <circle cx="160" cy="85" r="14" fill="#2ecc71"/>
          <g transform="translate(68, 125)">
            <rect x="0" y="0" width="64" height="20" rx="4" fill="#f5cba7" stroke="#6e2c00" stroke-width="2.5"/>
            <text x="32" y="14" font-family="'Fredoka', sans-serif" font-weight="600" font-size="11" fill="#6e2c00" text-anchor="middle">Welcome</text>
          </g>
        </svg>
      </div>
      <div class="backpack-icon" title="IELTS 聽力常考背包場景">
        <svg viewBox="0 0 60 65" width="46" height="50">
          <path d="M 15 25 C 15 10, 45 10, 45 25 L 48 55 C 48 60, 42 62, 30 62 C 18 62, 12 60, 12 55 Z" fill="#27ae60" stroke="#1e8449" stroke-width="3"/>
          <path d="M 22 25 L 38 25 L 38 42 L 22 42 Z" fill="#2ecc71" stroke="#1e8449" stroke-width="2.5" rx="3"/>
          <circle cx="30" cy="33" r="3" fill="#f4d03f"/>
          <path d="M 20 12 Q 30 4 40 12" fill="none" stroke="#1e8449" stroke-width="3.5" stroke-linecap="round"/>
        </svg>
      </div>
    `,
    quadrants: [
      {
        id: "sectionRoomTypes",
        themeClass: "blue-theme",
        titleCn: "房型 (Room Types)",
        color: "#2563eb",
        words: [
          {
            word: "apartment",
            band: "5.0",
            ipa: "[əˈpɑːrt.mənt]",
            cn: "公寓",
            example: "I'm looking for a two-bedroom apartment near the university.",
            tip: "美式英語常用，英式多用 flat。聽力常考填空！",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="10" y="8" width="28" height="34" rx="3" fill="#60a5fa" stroke="#1e3a8a" stroke-width="2.5"/><rect x="15" y="13" width="6" height="6" rx="1" fill="#ffffff"/><rect x="27" y="13" width="6" height="6" rx="1" fill="#ffffff"/><rect x="15" y="22" width="6" height="6" rx="1" fill="#ffffff"/><rect x="27" y="22" width="6" height="6" rx="1" fill="#ffffff"/><rect x="20" y="31" width="8" height="11" fill="#1e3a8a"/></svg>`
          },
          {
            word: "flat",
            band: "5.0",
            ipa: "[flæt]",
            cn: "公寓 (英式)",
            example: "She rented a small flat in central London.",
            tip: "英式英語高頻詞（等同於美式的 apartment），聽力極常出現！",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><path d="M 8 18 L 24 8 L 40 18 L 40 40 L 8 40 Z" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2.5"/><rect x="16" y="22" width="6" height="7" rx="1" fill="#ffffff"/><rect x="26" y="22" width="6" height="7" rx="1" fill="#ffffff"/><rect x="20" y="31" width="8" height="9" fill="#1d4ed8"/></svg>`
          },
          {
            word: "studio",
            band: "6.5",
            ipa: "[ˈstjuː.di.oʊ]",
            cn: "單間套房",
            example: "A studio apartment includes a bedroom and kitchen in one open room.",
            tip: "指無獨立客廳的套房（單間），適合單人居住。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="6" y="16" width="36" height="24" rx="3" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5"/><path d="M 10 32 L 24 32 L 24 24 L 10 24 Z" fill="#3b82f6"/><circle cx="34" cy="24" r="4" fill="#f59e0b"/></svg>`
          },
          {
            word: "dormitory",
            band: "6.5",
            ipa: "[ˈdɔːr.mə.tɔːr.i]",
            cn: "宿舍",
            example: "On-campus dormitory rooms are usually shared by two students.",
            tip: "常簡稱為 dorm。注意拼寫中 -ory 結尾！",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="8" y="10" width="32" height="12" rx="2" fill="#60a5fa" stroke="#1e3a8a" stroke-width="2.5"/><rect x="8" y="26" width="32" height="12" rx="2" fill="#3b82f6" stroke="#1e3a8a" stroke-width="2.5"/><line x1="14" y1="10" x2="14" y2="38" stroke="#1e3a8a" stroke-width="2.5"/></svg>`
          },
          {
            word: "twin room",
            band: "5.0",
            ipa: "[twɪn ruːm]",
            cn: "雙床房",
            example: "We booked a twin room with two separate single beds.",
            tip: "指放置「兩張單人床」的雙人房。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="6" y="20" width="16" height="16" rx="2" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2"/><rect x="26" y="20" width="16" height="16" rx="2" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2"/><path d="M 8 20 L 8 14 L 20 14 L 20 20" fill="none" stroke="#1e3a8a" stroke-width="2"/><path d="M 28 20 L 28 14 L 40 14 L 40 20" fill="none" stroke="#1e3a8a" stroke-width="2"/></svg>`
          },
          {
            word: "single room",
            band: "5.0",
            ipa: "[ˈsɪŋ.ɡəl ruːm]",
            cn: "單人房",
            example: "The single room includes a single bed and a study desk.",
            tip: "適合一個人入住的單人房。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="12" y="16" width="24" height="20" rx="3" fill="#60a5fa" stroke="#1e3a8a" stroke-width="2.5"/><rect x="16" y="12" width="16" height="8" rx="2" fill="#dbeafe" stroke="#1e3a8a" stroke-width="2"/></svg>`
          },
          {
            word: "double room",
            band: "5.0",
            ipa: "[ˈdʌb.əl ruːm]",
            cn: "雙人房",
            example: "A double room comes with one large double bed.",
            tip: "指放置「一張大雙人床」的房間。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="8" y="18" width="32" height="18" rx="3" fill="#3b82f6" stroke="#1e3a8a" stroke-width="2.5"/><rect x="12" y="12" width="10" height="8" rx="2" fill="#ffffff"/><rect x="26" y="12" width="10" height="8" rx="2" fill="#ffffff"/></svg>`
          },
          {
            word: "shared room",
            band: "5.0",
            ipa: "[ʃerd ruːm]",
            cn: "合住房",
            example: "A shared room helps reduce monthly rent for students.",
            tip: "與室友共享房間。注意 shared 的 -ed 拼寫！",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><circle cx="16" cy="18" r="6" fill="#3b82f6"/><circle cx="32" cy="18" r="6" fill="#60a5fa"/><path d="M 8 36 C 8 28, 24 28, 24 36" fill="#3b82f6"/><path d="M 24 36 C 24 28, 40 28, 40 36" fill="#60a5fa"/></svg>`
          },
          {
            word: "ensuite room",
            band: "6.5",
            ipa: "[ɑːn ˈswiːt ruːm]",
            cn: "獨立衛浴套房",
            example: "The bedroom has an ensuite room with private shower.",
            tip: "★ 雅思聽力大熱考點！表示自帶獨立洗手間的房間。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><path d="M 12 12 L 12 36 L 36 36 L 36 12 Z" fill="#eff6ff" stroke="#1e3a8a" stroke-width="2.5"/><path d="M 18 20 C 18 16, 30 16, 30 20 L 30 26" fill="none" stroke="#2563eb" stroke-width="2.5"/><path d="M 22 26 L 34 26" stroke="#2563eb" stroke-width="3"/></svg>`
          },
          {
            word: "furnished",
            band: "6.5",
            ipa: "[ˈfɜːr.nɪʃt]",
            cn: "配傢俱的",
            example: "The apartment comes fully furnished with a bed, table, and sofa.",
            tip: "常考搭配：fully furnished (傢俱齊全)。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><path d="M 10 20 L 38 20 C 40 20, 40 32, 38 32 L 10 32 Z" fill="#60a5fa" stroke="#1e3a8a" stroke-width="2.5"/><rect x="14" y="32" width="4" height="8" fill="#1e3a8a"/><rect x="30" y="32" width="4" height="8" fill="#1e3a8a"/></svg>`
          },
          {
            word: "unfurnished",
            band: "6.5",
            ipa: "[ʌnˈfɜːr.nɪʃt]",
            cn: "空房 (無傢俱)",
            example: "An unfurnished room gives you the freedom to buy your own furniture.",
            tip: "否定字首 un- + furnished。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="10" y="12" width="28" height="24" rx="2" fill="#eff6ff" stroke="#94a3b8" stroke-width="2.5" stroke-dasharray="4 3"/><line x1="16" y1="20" x2="32" y2="28" stroke="#ef4444" stroke-width="2.5"/></svg>`
          }
        ]
      },
      {
        id: "sectionFacilities",
        themeClass: "green-theme",
        titleCn: "房屋設施 (Facilities)",
        color: "#16a34a",
        words: [
          {
            word: "kitchen",
            band: "5.0",
            ipa: "[ˈkɪtʃ.ən]",
            cn: "廚房",
            example: "The shared kitchen is equipped with a stove and oven.",
            tip: "常與 shared 搭配 (shared kitchen)。注意拼寫中有 t！",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="8" y="16" width="32" height="24" rx="2" fill="#86efac" stroke="#14532d" stroke-width="2.5"/><circle cx="18" cy="24" r="4" fill="#15803d"/><circle cx="30" cy="24" r="4" fill="#15803d"/></svg>`
          },
          {
            word: "bathroom",
            band: "5.0",
            ipa: "[ˈbæθ.ruːm]",
            cn: "浴室",
            example: "The house has two shared bathrooms and one ensuite.",
            tip: "注意區分 private bathroom (私人浴室) 與 shared bathroom。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><path d="M 8 26 C 8 34, 40 34, 40 26 L 8 26 Z" fill="#4ade80" stroke="#14532d" stroke-width="2.5"/><path d="M 12 14 L 12 26" stroke="#15803d" stroke-width="3"/><path d="M 12 14 Q 18 10 20 14" stroke="#15803d" stroke-width="2.5" fill="none"/></svg>`
          },
          {
            word: "balcony",
            band: "5.0",
            ipa: "[ˈbæl.kə.ni]",
            cn: "陽台",
            example: "You can dry your clothes on the sunny balcony.",
            tip: "聽力填空題常考名詞。重音在第一個音節。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="8" y="24" width="32" height="16" rx="1" fill="#bbf7d0" stroke="#14532d" stroke-width="2.5"/><line x1="16" y1="24" x2="16" y2="40" stroke="#14532d" stroke-width="2"/><line x1="24" y1="24" x2="24" y2="40" stroke="#14532d" stroke-width="2"/><line x1="32" y1="24" x2="32" y2="40" stroke="#14532d" stroke-width="2"/></svg>`
          },
          {
            word: "garden",
            band: "5.0",
            ipa: "[ˈɡɑːr.dən]",
            cn: "花園",
            example: "The bungalow includes a small front garden.",
            tip: "住宅周圍的花園/庭院。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><path d="M 12 36 Q 24 16 36 36 Z" fill="#22c55e" stroke="#14532d" stroke-width="2.5"/><circle cx="24" cy="20" r="8" fill="#4ade80"/><rect x="22" y="32" width="4" height="8" fill="#78350f"/></svg>`
          },
          {
            word: "garage",
            band: "5.0",
            ipa: "[ɡəˈrɑːʒ]",
            cn: "車庫",
            example: "There is a garage attached to the house for car parking.",
            tip: "美音 [ɡəˈrɑːʒ] 與英音 [ˈɡær.ɑːʒ] 發音有異。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><path d="M 6 20 L 24 10 L 42 20 L 42 40 L 6 40 Z" fill="#86efac" stroke="#14532d" stroke-width="2.5"/><rect x="14" y="24" width="20" height="16" fill="#15803d"/></svg>`
          },
          {
            word: "washing machine",
            band: "5.0",
            ipa: "[ˈwɑː.ʃɪŋ məˈʃiːn]",
            cn: "洗衣機",
            example: "A coin-operated washing machine is in the laundry room.",
            tip: "填空題常考！注意是兩個單字，中間要空一格。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="10" y="10" width="28" height="32" rx="4" fill="#4ade80" stroke="#14532d" stroke-width="2.5"/><circle cx="24" cy="28" r="9" fill="#ffffff" stroke="#14532d" stroke-width="2"/><circle cx="24" cy="28" r="5" fill="#93c5fd"/></svg>`
          },
          {
            word: "microwave",
            band: "5.0",
            ipa: "[ˈmaɪ.krə.weɪv]",
            cn: "微波爐",
            example: "Heat your frozen dinner in the kitchen microwave.",
            tip: "常出現在廚房設備清單中。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="6" y="14" width="36" height="24" rx="3" fill="#bbf7d0" stroke="#14532d" stroke-width="2.5"/><rect x="10" y="18" width="20" height="16" rx="2" fill="#ffffff"/><rect x="33" y="18" width="5" height="5" fill="#15803d"/></svg>`
          },
          {
            word: "refrigerator",
            band: "5.0",
            ipa: "[rɪˈfrɪdʒ.ə.reɪ.t̬ɚ]",
            cn: "冰箱",
            example: "Keep milk and vegetables fresh inside the refrigerator.",
            tip: "常簡寫為 fridge。聽力寫 fridge 或 refrigerator 皆可。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="12" y="8" width="24" height="34" rx="3" fill="#86efac" stroke="#14532d" stroke-width="2.5"/><line x1="12" y1="22" x2="36" y2="22" stroke="#14532d" stroke-width="2"/><line x1="16" y1="14" x2="16" y2="18" stroke="#14532d" stroke-width="2.5"/><line x1="16" y1="26" x2="16" y2="34" stroke="#14532d" stroke-width="2.5"/></svg>`
          },
          {
            word: "heater",
            band: "5.0",
            ipa: "[ˈhiː.t̬ɚ]",
            cn: "暖氣",
            example: "Turn on the electric heater during cold winter nights.",
            tip: "圖片中央下方畫有暖氣片 (radiator / heater)。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="10" y="16" width="28" height="20" rx="2" fill="#fef08a" stroke="#ca8a04" stroke-width="2.5"/><line x1="16" y1="16" x2="16" y2="36" stroke="#ca8a04" stroke-width="2"/><line x1="24" y1="16" x2="24" y2="36" stroke="#ca8a04" stroke-width="2"/><line x1="32" y1="16" x2="32" y2="36" stroke="#ca8a04" stroke-width="2"/><path d="M 18 10 Q 24 6 30 10" fill="none" stroke="#f97316" stroke-width="2"/></svg>`
          },
          {
            word: "air conditioning",
            band: "5.0",
            ipa: "[er kənˈdɪʃ.ən.ɪŋ]",
            cn: "空調",
            example: "Central air conditioning keeps the house cool.",
            tip: "填空題常考！注意拼寫 -ing 結尾，也可縮寫為 AC。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="6" y="14" width="36" height="18" rx="3" fill="#bae6fd" stroke="#0284c7" stroke-width="2.5"/><path d="M 12 36 Q 16 30 20 36 T 28 36 T 36 36" fill="none" stroke="#0284c7" stroke-width="2"/></svg>`
          }
        ]
      },
      {
        id: "sectionRent",
        themeClass: "purple-theme",
        titleCn: "房租相關 (Rent-related)",
        color: "#7c3aed",
        words: [
          {
            word: "rent",
            band: "5.0",
            ipa: "[rent]",
            cn: "房租",
            example: "How much is the weekly rent for this double room?",
            tip: "雅思聽力核心高頻詞，常考具體金額數字。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="8" y="16" width="32" height="20" rx="3" fill="#c4b5fd" stroke="#5b21b6" stroke-width="2.5"/><circle cx="24" cy="26" r="6" fill="#7c3aed"/><text x="24" y="30" font-size="12" fill="#ffffff" text-anchor="middle" font-weight="bold">$</text></svg>`
          },
          {
            word: "deposit",
            band: "5.0",
            ipa: "[dɪˈpɑː.zɪt]",
            cn: "押金",
            example: "You need to pay one month's rent as a deposit.",
            tip: "★ 聽力高頻考點！常見短語：pay a deposit (付押金)。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><path d="M 14 20 C 14 10, 34 10, 34 20 C 34 24, 40 38, 36 40 C 32 42, 16 42, 12 40 C 8 38, 14 24, 14 20 Z" fill="#ddd6fe" stroke="#5b21b6" stroke-width="2.5"/><text x="24" y="32" font-size="14" fill="#5b21b6" text-anchor="middle" font-weight="bold">$</text></svg>`
          },
          {
            word: "landlord",
            band: "6.5",
            ipa: "[ˈlænd.lɔːrd]",
            cn: "房東",
            example: "The landlord agreed to fix the broken shower today.",
            tip: "房東。女性房東稱為 landlady。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><circle cx="24" cy="18" r="8" fill="#a78bfa" stroke="#5b21b6" stroke-width="2"/><path d="M 12 38 C 12 28, 36 28, 36 38" fill="#7c3aed" stroke="#5b21b6" stroke-width="2"/><rect x="20" y="24" width="8" height="6" fill="#fcd34d"/></svg>`
          },
          {
            word: "tenant",
            band: "6.5",
            ipa: "[ˈten.ənt]",
            cn: "租客",
            example: "The new tenant will move in next Monday.",
            tip: "房客/租客。注意中間是 e 不是 a。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><circle cx="24" cy="18" r="8" fill="#c4b5fd" stroke="#5b21b6" stroke-width="2"/><path d="M 14 38 C 14 28, 34 28, 34 38" fill="#8b5cf6" stroke="#5b21b6" stroke-width="2"/></svg>`
          },
          {
            word: "lease",
            band: "6.5",
            ipa: "[liːs]",
            cn: "租約",
            example: "We signed a 12-month lease for the apartment.",
            tip: "長期租賃契約 (sign a lease)。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="12" y="8" width="24" height="32" rx="2" fill="#f5f3ff" stroke="#5b21b6" stroke-width="2.5"/><line x1="18" y1="16" x2="30" y2="16" stroke="#7c3aed" stroke-width="2"/><line x1="18" y1="22" x2="30" y2="22" stroke="#7c3aed" stroke-width="2"/><line x1="18" y1="28" x2="26" y2="28" stroke="#7c3aed" stroke-width="2"/></svg>`
          },
          {
            word: "contract",
            band: "6.5",
            ipa: "[ˈkɑːn.trækt]",
            cn: "合同",
            example: "Please check all terms before signing the contract.",
            tip: "★ 聽力極高頻單字 (sign a contract 簽合約)。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="10" y="8" width="28" height="32" rx="2" fill="#ddd6fe" stroke="#5b21b6" stroke-width="2.5"/><path d="M 28 32 L 36 24" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/></svg>`
          },
          {
            word: "utility bills",
            band: "6.5",
            ipa: "[juːˈtɪl.ə.t̬i bɪlz]",
            cn: "水電費帳單",
            example: "Are utility bills included in the monthly rent?",
            tip: "★ 常考問句：Are bills included? (包含水電費嗎？)",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="10" y="10" width="28" height="30" rx="2" fill="#f3e8ff" stroke="#5b21b6" stroke-width="2.5"/><path d="M 16 20 Q 20 14 24 20" fill="none" stroke="#0284c7" stroke-width="2"/><polygon points="28,24 32,16 30,22 34,22" fill="#eab308"/></svg>`
          },
          {
            word: "electricity",
            band: "5.0",
            ipa: "[ɪˌlekˈtrɪs.ə.t̬i]",
            cn: "電費",
            example: "Electricity is charged separately every month.",
            tip: "電費/電力。聽力注意拼寫以 -city 結尾。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><polygon points="26,6 12,26 24,26 20,42 36,20 24,20" fill="#facc15" stroke="#ca8a04" stroke-width="2.5"/></svg>`
          },
          {
            word: "gas",
            band: "5.0",
            ipa: "[ɡæs]",
            cn: "燃氣費",
            example: "Gas bill is usually lower during summer.",
            tip: "瓦斯費/天然氣費。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><path d="M 24 8 C 16 22, 12 28, 16 36 C 20 42, 28 42, 32 36 C 36 28, 32 22, 24 8 Z" fill="#60a5fa" stroke="#1d4ed8" stroke-width="2.5"/><path d="M 24 20 Q 20 30 24 36" fill="none" stroke="#ffffff" stroke-width="2"/></svg>`
          },
          {
            word: "internet",
            band: "5.0",
            ipa: "[ˈɪn.t̬ɚ.net]",
            cn: "網絡費",
            example: "Free high-speed wireless internet is available.",
            tip: "常與 wifi 或 broadband 替換出現。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><path d="M 10 18 Q 24 6 38 18" fill="none" stroke="#7c3aed" stroke-width="3" stroke-linecap="round"/><path d="M 16 24 Q 24 14 32 24" fill="none" stroke="#7c3aed" stroke-width="3" stroke-linecap="round"/><path d="M 20 30 Q 24 24 28 30" fill="none" stroke="#7c3aed" stroke-width="3" stroke-linecap="round"/><circle cx="24" cy="36" r="3" fill="#7c3aed"/></svg>`
          }
        ]
      },
      {
        id: "sectionHighFreq",
        themeClass: "orange-theme",
        titleCn: "高頻答案詞 (High-frequency Phrases)",
        color: "#ea580c",
        words: [
          {
            word: "vacancy",
            band: "6.5",
            ipa: "[ˈveɪ.kən.si]",
            cn: "空房; 空缺",
            example: "The student lodge currently has no vacancy.",
            tip: "★ 圖片關鍵牌 [VACANT]！表示有空位或空房。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="6" y="16" width="36" height="20" rx="3" fill="#fdba74" stroke="#c2410c" stroke-width="2.5"/><text x="24" y="29" font-size="9" fill="#9a3412" text-anchor="middle" font-weight="900">VACANT</text></svg>`
          },
          {
            word: "available",
            band: "5.0",
            ipa: "[əˈveɪ.lə.bəl]",
            cn: "可用的; 有空的",
            example: "The double room will be available from September 1st.",
            tip: "★ 聽力極高頻對話答句形容詞！",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><circle cx="24" cy="24" r="16" fill="#22c55e" stroke="#15803d" stroke-width="2.5"/><path d="M 16 24 L 22 30 L 32 18" fill="none" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
          },
          {
            word: "move in",
            band: "5.0",
            ipa: "[muːv ɪn]",
            cn: "入住; 搬入",
            example: "You can move in as soon as the contract is signed.",
            tip: "圖片右下搬行李箱人物！反義詞 move out。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="14" y="18" width="20" height="18" rx="2" fill="#fed7aa" stroke="#ea580c" stroke-width="2.5"/><path d="M 24 10 L 24 18 M 20 14 L 24 10 L 28 14" fill="none" stroke="#ea580c" stroke-width="2.5"/></svg>`
          },
          {
            word: "notice",
            band: "6.5",
            ipa: "[ˈnoʊ.t̬ɪs]",
            cn: "通知; 告知",
            example: "Tenants must give one month's notice before moving out.",
            tip: "常考用法：give notice (發出退租通知)。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="8" y="14" width="32" height="22" rx="2" fill="#ffedd5" stroke="#ea580c" stroke-width="2.5"/><path d="M 8 14 L 24 26 L 40 14" fill="none" stroke="#ea580c" stroke-width="2.5"/></svg>`
          },
          {
            word: "monthly payment",
            band: "5.0",
            ipa: "[ˈmʌn.θli peɪ.mənt]",
            cn: "月付款",
            example: "The monthly payment is due on the first day of each month.",
            tip: "按月支付。圖片日曆+金幣！",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="10" y="12" width="28" height="26" rx="3" fill="#fff7ed" stroke="#ea580c" stroke-width="2.5"/><rect x="10" y="12" width="28" height="8" fill="#f97316"/><circle cx="30" cy="30" r="5" fill="#f59e0b"/></svg>`
          },
          {
            word: "weekly rent",
            band: "5.0",
            ipa: "[ˈwiː.kli rent]",
            cn: "周租金",
            example: "Weekly rent is £120 excluding gas and electricity.",
            tip: "英國/澳洲常按「週」計算租金。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="10" y="12" width="28" height="26" rx="3" fill="#fff7ed" stroke="#ea580c" stroke-width="2.5"/><rect x="10" y="12" width="28" height="8" fill="#ea580c"/><text x="24" y="32" font-size="12" fill="#ea580c" text-anchor="middle" font-weight="bold">7</text></svg>`
          }
        ]
      }
    ]
  },

  "unit-2": {
    id: "unit-2",
    number: 2,
    titleEn: "Campus Life",
    titleCn: "校 園",
    badgeText: "Unit 2 Campus & Academic Life 校園學術單字圖鑑",
    stickyNote: {
      title: "🎓 雅思聽力考點提醒",
      content: "Section 2 & 3 高頻！特別注意 due date (到期日)、assignment (作業拼寫 ss)、plagiarism (抄襲) 與 dissertation (學位論文)！"
    },
    centerSvg: `
      <div class="house-illustration">
        <svg class="house-svg" viewBox="0 0 200 160" width="190" height="152">
          <path d="M 20 70 L 100 20 L 180 70 Z" fill="#1e3a8a" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/>
          <rect x="30" y="68" width="140" height="80" rx="3" fill="#eff6ff" stroke="#1e293b" stroke-width="3.5"/>
          <rect x="42" y="78" width="14" height="70" fill="#93c5fd" stroke="#1e293b" stroke-width="2"/>
          <rect x="74" y="78" width="14" height="70" fill="#93c5fd" stroke="#1e293b" stroke-width="2"/>
          <rect x="112" y="78" width="14" height="70" fill="#93c5fd" stroke="#1e293b" stroke-width="2"/>
          <rect x="144" y="78" width="14" height="70" fill="#93c5fd" stroke="#1e293b" stroke-width="2"/>
          <polygon points="100,5 160,25 100,45 40,25" fill="#1e1b4b" stroke="#3b82f6" stroke-width="3"/>
          <rect x="85" y="40" width="30" height="10" rx="3" fill="#1e1b4b"/>
          <path d="M 150 27 L 155 50" stroke="#f59e0b" stroke-width="3"/>
          <circle cx="155" cy="52" r="4" fill="#f59e0b"/>
          <g transform="translate(62, 125)">
            <rect x="0" y="0" width="76" height="20" rx="4" fill="#dbeafe" stroke="#1e40af" stroke-width="2.5"/>
            <text x="38" y="14" font-family="'Fredoka', sans-serif" font-weight="600" font-size="11" fill="#1e40af" text-anchor="middle">LIBRARY</text>
          </g>
        </svg>
      </div>
      <div class="backpack-icon" title="IELTS 校園書包與圖書館">
        <svg viewBox="0 0 60 65" width="46" height="50">
          <rect x="10" y="15" width="40" height="42" rx="6" fill="#2563eb" stroke="#1e3a8a" stroke-width="3"/>
          <rect x="18" y="25" width="24" height="15" rx="3" fill="#60a5fa" stroke="#1e3a8a" stroke-width="2"/>
          <line x1="20" y1="15" x2="40" y2="15" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>
        </svg>
      </div>
    `,
    quadrants: [
      {
        id: "sectionLibrary",
        themeClass: "blue-theme",
        titleCn: "圖書館 (Library)",
        color: "#2563eb",
        words: [
          {
            word: "due date",
            band: "5.0",
            ipa: "[djuː deɪt]",
            cn: "到期日",
            example: "The book is past its due date, so I must pay a fine.",
            tip: "★ 聽力極高頻！指歸還圖書或繳交作業的截止日。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="10" y="10" width="28" height="30" rx="3" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2.5"/><rect x="10" y="10" width="28" height="8" fill="#1d4ed8"/><circle cx="24" cy="26" r="6" fill="#ffffff"/><path d="M 24 22 L 24 26 L 27 26" stroke="#1d4ed8" stroke-width="2"/></svg>`
          },
          {
            word: "recall",
            band: "6.5",
            ipa: "[rɪˈkɔːl]",
            cn: "召回圖書",
            example: "The library sent an email to recall the borrowed textbook.",
            tip: "聽力常考：指圖書館要求借閱者提前還書給其他人。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><path d="M 12 24 A 12 12 0 1 1 24 36" fill="none" stroke="#2563eb" stroke-width="3.5"/><polygon points="8,24 16,24 12,18" fill="#2563eb"/></svg>`
          },
          {
            word: "journal",
            band: "6.5",
            ipa: "[ˈdʒɜːr.nəl]",
            cn: "學術期刊",
            example: "You can find peer-reviewed articles in academic journals.",
            tip: "常考與 online 搭配：online journal (線上期刊)。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="10" y="8" width="28" height="34" rx="2" fill="#eff6ff" stroke="#1e3a8a" stroke-width="2.5"/><line x1="16" y1="16" x2="32" y2="16" stroke="#2563eb" stroke-width="2"/><line x1="16" y1="22" x2="32" y2="22" stroke="#2563eb" stroke-width="2"/><line x1="16" y1="28" x2="26" y2="28" stroke="#2563eb" stroke-width="2"/></svg>`
          },
          {
            word: "catalogue",
            band: "6.5",
            ipa: "[ˈkæt.əl.ɑːɡ]",
            cn: "圖書目錄",
            example: "Search the online catalogue to locate the shelf number.",
            tip: "美式拼寫 catalog。注意英式結尾 -ue！",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="8" y="12" width="32" height="24" rx="3" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5"/><circle cx="20" cy="24" r="5" fill="#ffffff" stroke="#1e3a8a" stroke-width="2"/><line x1="24" y1="28" x2="32" y2="34" stroke="#1e3a8a" stroke-width="3"/></svg>`
          },
          {
            word: "loan period",
            band: "6.5",
            ipa: "[loʊn ˈpɪr.i.əd]",
            cn: "借閱期限",
            example: "The standard loan period for undergraduates is two weeks.",
            tip: "借閱期。聽力常見延伸短語 extend the loan (延長借期)。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="8" y="14" width="32" height="22" rx="3" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2.5"/><text x="24" y="29" font-size="10" fill="#1e40af" text-anchor="middle" font-weight="bold">14 DAYS</text></svg>`
          },
          {
            word: "reference book",
            band: "5.0",
            ipa: "[ˈref.ɚ.əns bʊk]",
            cn: "參考書 (不外借)",
            example: "Reference books can only be read inside the reading room.",
            tip: "參考書通常只能在館內查閱，不可外借。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="12" y="8" width="24" height="32" rx="2" fill="#60a5fa" stroke="#1e3a8a" stroke-width="2.5"/><rect x="8" y="32" width="32" height="8" rx="2" fill="#1d4ed8"/></svg>`
          }
        ]
      },
      {
        id: "sectionAcademic",
        themeClass: "green-theme",
        titleCn: "課程與學業 (Courses)",
        color: "#16a34a",
        words: [
          {
            word: "assignment",
            band: "5.0",
            ipa: "[əˈsaɪn.mənt]",
            cn: "課堂作業",
            example: "Submit your written assignment before midnight on Friday.",
            tip: "★ 聽力 Section 3 大熱門！注意雙 s 拼寫！",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="10" y="8" width="28" height="32" rx="2" fill="#bbf7d0" stroke="#14532d" stroke-width="2.5"/><path d="M 16 18 L 22 24 L 32 14" fill="none" stroke="#15803d" stroke-width="3" stroke-linecap="round"/></svg>`
          },
          {
            word: "lecture",
            band: "5.0",
            ipa: "[ˈlek.tʃɚ]",
            cn: "大學大課/講座",
            example: "Professor Smith will give a lecture on climate statistics.",
            tip: "講課/講座。講課的階梯教室稱為 lecture theatre。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><path d="M 8 36 L 40 36 M 12 28 L 36 28 M 16 20 L 32 20" stroke="#15803d" stroke-width="2.5"/><circle cx="24" cy="12" r="4" fill="#22c55e"/></svg>`
          },
          {
            word: "seminar",
            band: "6.5",
            ipa: "[ˈsem.ə.nɑːr]",
            cn: "研討會/小組討論",
            example: "We discussed our research findings during today's seminar.",
            tip: "學生互動發言的小組討論課。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><circle cx="24" cy="24" r="16" fill="#86efac" stroke="#14532d" stroke-width="2.5"/><circle cx="16" cy="20" r="3" fill="#15803d"/><circle cx="32" cy="20" r="3" fill="#15803d"/><circle cx="24" cy="30" r="3" fill="#15803d"/></svg>`
          },
          {
            word: "tutorial",
            band: "6.5",
            ipa: "[tuːˈtɔːr.i.əl]",
            cn: "導師輔導課",
            example: "Book an individual tutorial with your personal tutor.",
            tip: "導師 (tutor) 一對一或極小班輔導。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><circle cx="16" cy="18" r="5" fill="#22c55e"/><circle cx="32" cy="18" r="5" fill="#4ade80"/><path d="M 10 34 Q 16 26 22 34 M 26 34 Q 32 26 38 34" fill="none" stroke="#14532d" stroke-width="2.5"/></svg>`
          },
          {
            word: "dissertation",
            band: "7.5+",
            ipa: "[ˌdɪs.ɚˈteɪ.ʃən]",
            cn: "學位論文",
            example: "Master's students must hand in a 10,000-word dissertation.",
            tip: "★ 畢業論文。聽力難詞！注意雙 s 與 -tion 結尾。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="12" y="8" width="24" height="32" rx="2" fill="#dcfce7" stroke="#14532d" stroke-width="2.5"/><line x1="18" y1="16" x2="30" y2="16" stroke="#15803d" stroke-width="2"/><line x1="18" y1="22" x2="30" y2="22" stroke="#15803d" stroke-width="2"/><polygon points="26,28 32,28 29,34" fill="#ea580c"/></svg>`
          },
          {
            word: "prerequisite",
            band: "7.5+",
            ipa: "[ˌpriːˈrek.wə.zɪt]",
            cn: "先修課程/前提",
            example: "Basic algebra is a prerequisite for advanced calculus.",
            tip: "先修科目。聽力常考選課資格討論。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="8" y="16" width="14" height="16" rx="2" fill="#4ade80"/><path d="M 24 24 L 30 24" stroke="#14532d" stroke-width="3"/><rect x="32" y="16" width="10" height="16" rx="2" fill="#22c55e"/></svg>`
          }
        ]
      },
      {
        id: "sectionAssessment",
        themeClass: "purple-theme",
        titleCn: "考核與測驗 (Assessment)",
        color: "#7c3aed",
        words: [
          {
            word: "plagiarism",
            band: "7.5+",
            ipa: "[ˈpleɪ.dʒɚ.ɪ.zəm]",
            cn: "抄襲/剽竊",
            example: "Turnitin software is used to check papers for plagiarism.",
            tip: "★ 學術誠信大考點！嚴禁抄襲他人著作。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="10" y="8" width="28" height="32" rx="2" fill="#f5f3ff" stroke="#5b21b6" stroke-width="2.5"/><line x1="14" y1="12" x2="34" y2="36" stroke="#ef4444" stroke-width="3.5"/></svg>`
          },
          {
            word: "feedback",
            band: "5.0",
            ipa: "[ˈfiːd.bæk]",
            cn: "回饋/批改意見",
            example: "The tutor gave detailed feedback on my draft essay.",
            tip: "導師對論文或簡報給予的反饋建議。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><path d="M 8 12 L 40 12 L 40 32 L 20 32 L 12 38 Z" fill="#ddd6fe" stroke="#5b21b6" stroke-width="2.5"/><text x="24" y="25" font-size="14" fill="#6d28d9" text-anchor="middle" font-weight="bold">A+</text></svg>`
          },
          {
            word: "deadline",
            band: "5.0",
            ipa: "[ˈded.laɪn]",
            cn: "最後截止日期",
            example: "The deadline for scholarship applications is May 1st.",
            tip: "常與 extend (延長) 或 meet (趕上) 搭配。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><circle cx="24" cy="24" r="16" fill="#c4b5fd" stroke="#5b21b6" stroke-width="2.5"/><line x1="24" y1="14" x2="24" y2="24" stroke="#5b21b6" stroke-width="3"/><line x1="24" y1="24" x2="30" y2="24" stroke="#ef4444" stroke-width="3"/></svg>`
          },
          {
            word: "grade",
            band: "5.0",
            ipa: "[ɡreɪd]",
            cn: "成績/等第",
            example: "She achieved an A grade in environmental science.",
            tip: "成績。英式英語也常使用 mark 或 distinction。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><polygon points="24,6 30,18 42,18 32,26 36,38 24,30 12,38 16,26 6,18 18,18" fill="#facc15" stroke="#ca8a04" stroke-width="2"/></svg>`
          },
          {
            word: "transcript",
            band: "6.5",
            ipa: "[ˈtræn.skrɪpt]",
            cn: "成績單",
            example: "Official academic transcripts are required for master's admission.",
            tip: "官方核發的在校成績證明文件。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="10" y="8" width="28" height="32" rx="2" fill="#f5f3ff" stroke="#5b21b6" stroke-width="2.5"/><rect x="14" y="14" width="10" height="4" fill="#a78bfa"/><rect x="14" y="22" width="20" height="3" fill="#c4b5fd"/><rect x="14" y="28" width="16" height="3" fill="#c4b5fd"/></svg>`
          }
        ]
      },
      {
        id: "sectionFacility",
        themeClass: "orange-theme",
        titleCn: "校園設施 (Facilities)",
        color: "#ea580c",
        words: [
          {
            word: "campus",
            band: "5.0",
            ipa: "[ˈkæm.pəs]",
            cn: "大學校區",
            example: "Free shuttle buses run between the north and south campus.",
            tip: "大學校園。常用短語 on campus (在校內)。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><path d="M 6 36 L 24 16 L 42 36 Z" fill="#ffedd5" stroke="#c2410c" stroke-width="2.5"/><rect x="18" y="26" width="12" height="10" fill="#ea580c"/></svg>`
          },
          {
            word: "laboratory",
            band: "6.5",
            ipa: "[ˈlæb.rə.tɔːr.i]",
            cn: "實驗室",
            example: "Safety goggles must be worn in the chemistry laboratory.",
            tip: "常簡稱為 lab。聽力注意英音 [ləˈbɒr.ə.tər.i] 的重音！",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><path d="M 18 12 L 30 12 L 30 20 L 38 34 C 40 38, 36 40, 24 40 C 12 40, 8 38, 10 34 L 18 20 Z" fill="#fed7aa" stroke="#ea580c" stroke-width="2.5"/><path d="M 12 34 Q 24 30 36 34" fill="none" stroke="#f97316" stroke-width="2"/></svg>`
          },
          {
            word: "canteen",
            band: "5.0",
            ipa: "[kænˈtiːn]",
            cn: "學生餐廳",
            example: "The campus canteen serves affordable lunch for students.",
            tip: "學生食堂。美式常稱為 cafeteria。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><circle cx="24" cy="24" r="16" fill="#fff7ed" stroke="#ea580c" stroke-width="2.5"/><path d="M 16 16 L 16 32 M 32 16 L 32 32" stroke="#ea580c" stroke-width="2.5"/></svg>`
          },
          {
            word: "registration",
            band: "6.5",
            ipa: "[ˌredʒ.əˈstreɪ.ʃən]",
            cn: "報到註冊",
            example: "Complete your online registration before attending classes.",
            tip: "開學報到。報到處稱為 registration desk。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="8" y="14" width="32" height="22" rx="3" fill="#ffedd5" stroke="#ea580c" stroke-width="2.5"/><circle cx="18" cy="25" r="5" fill="#f97316"/><line x1="26" y1="22" x2="34" y2="22" stroke="#ea580c" stroke-width="2"/></svg>`
          }
        ]
      }
    ]
  },

  "unit-3": {
    id: "unit-3",
    number: 3,
    titleEn: "Travel & Tourism",
    titleCn: "旅 遊",
    badgeText: "Unit 3 Travel & Tourism 旅遊交通單字圖鑑",
    stickyNote: {
      title: "✈️ 雅思聽力考點提醒",
      content: "Section 1 & 2 經常出現訂票與觀光諮詢！注意 itinerary (行程表)、reservation (預訂) 與 non-refundable (不可退款) 等考點詞！"
    },
    centerSvg: `
      <div class="house-illustration">
        <svg class="house-svg" viewBox="0 0 200 160" width="190" height="152">
          <circle cx="100" cy="80" r="55" fill="#bae6fd" stroke="#0284c7" stroke-width="4"/>
          <path d="M 50 80 Q 100 50 150 80 T 50 80" fill="none" stroke="#0369a1" stroke-width="2.5"/>
          <path d="M 100 25 Q 70 80 100 135" fill="none" stroke="#0369a1" stroke-width="2.5"/>
          <path d="M 60 45 L 140 25 L 115 65 L 135 90 L 110 80 L 85 100 L 90 75 L 60 45 Z" fill="#ffffff" stroke="#1e293b" stroke-width="3"/>
          <path d="M 125 35 L 155 15" stroke="#f59e0b" stroke-width="3.5" stroke-dasharray="4 3"/>
          <g transform="translate(68, 120)">
            <rect x="0" y="0" width="64" height="26" rx="4" fill="#f97316" stroke="#c2410c" stroke-width="3"/>
            <rect x="22" y="-6" width="20" height="6" fill="none" stroke="#c2410c" stroke-width="2.5"/>
            <line x1="20" y1="0" x2="20" y2="26" stroke="#c2410c" stroke-width="2"/>
            <line x1="44" y1="0" x2="44" y2="26" stroke="#c2410c" stroke-width="2"/>
          </g>
        </svg>
      </div>
      <div class="backpack-icon" title="IELTS 旅遊行李箱">
        <svg viewBox="0 0 60 65" width="46" height="50">
          <rect x="12" y="18" width="36" height="40" rx="5" fill="#ea580c" stroke="#9a3412" stroke-width="3"/>
          <path d="M 22 18 L 22 8 L 38 8 L 38 18" fill="none" stroke="#9a3412" stroke-width="3"/>
          <circle cx="20" cy="58" r="3" fill="#1e293b"/>
          <circle cx="40" cy="58" r="3" fill="#1e293b"/>
        </svg>
      </div>
    `,
    quadrants: [
      {
        id: "sectionTransport",
        themeClass: "blue-theme",
        titleCn: "交通與搭乘 (Transport)",
        color: "#2563eb",
        words: [
          {
            word: "itinerary",
            band: "6.5",
            ipa: "[aɪˈtɪn.ə.rer.i]",
            cn: "旅遊行程表",
            example: "The travel agent gave us a detailed daily itinerary.",
            tip: "★ 聽力高頻考點詞！注意重音在第二音節 -ti-。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="10" y="8" width="28" height="34" rx="3" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2.5"/><line x1="16" y1="16" x2="32" y2="16" stroke="#1d4ed8" stroke-width="2"/><line x1="16" y1="22" x2="28" y2="22" stroke="#1d4ed8" stroke-width="2"/><circle cx="16" cy="30" r="2" fill="#ef4444"/><circle cx="24" cy="30" r="2" fill="#ef4444"/><circle cx="32" cy="30" r="2" fill="#ef4444"/></svg>`
          },
          {
            word: "shuttle bus",
            band: "5.0",
            ipa: "[ˈʃʌt̬.əl bʌs]",
            cn: "接駁巴士",
            example: "A free shuttle bus operates between the hotel and airport.",
            tip: "免費穿梭接駁車。常考短語 free airport shuttle。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="6" y="16" width="36" height="20" rx="4" fill="#60a5fa" stroke="#1e3a8a" stroke-width="2.5"/><circle cx="14" cy="36" r="4" fill="#1e293b"/><circle cx="34" cy="36" r="4" fill="#1e293b"/></svg>`
          },
          {
            word: "departure",
            band: "5.0",
            ipa: "[dɪˈpɑːr.tʃɚ]",
            cn: "出發/起飛",
            example: "Please check the departure board for your flight status.",
            tip: "出發大廳稱為 departure lounge。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><path d="M 8 34 L 40 34 M 14 28 L 32 14" stroke="#2563eb" stroke-width="3"/><polygon points="32,14 26,14 32,20" fill="#2563eb"/></svg>`
          },
          {
            word: "destination",
            band: "5.0",
            ipa: "[ˌdes.təˈneɪ.ʃən]",
            cn: "目的地",
            example: "Our final travel destination is Kyoto, Japan.",
            tip: "目的地。聽力填空常考地點回答。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><path d="M 24 8 C 16 8, 12 16, 12 24 C 12 34, 24 42, 24 42 C 24 42, 36 34, 36 24 C 36 16, 32 8, 24 8 Z" fill="#ef4444" stroke="#991b1b" stroke-width="2.5"/><circle cx="24" cy="22" r="5" fill="#ffffff"/></svg>`
          },
          {
            word: "delayed",
            band: "5.0",
            ipa: "[dɪˈleɪd]",
            cn: "誤點/延誤",
            example: "The train was delayed for 30 minutes due to bad weather.",
            tip: "班機或火車延誤。聽力聽力干擾項常考！",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><circle cx="24" cy="24" r="16" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5"/><line x1="24" y1="14" x2="24" y2="24" stroke="#1e3a8a" stroke-width="3"/><line x1="24" y1="24" x2="30" y2="24" stroke="#ef4444" stroke-width="3"/></svg>`
          }
        ]
      },
      {
        id: "sectionAccommodation",
        themeClass: "green-theme",
        titleCn: "住宿預訂 (Booking)",
        color: "#16a34a",
        words: [
          {
            word: "reservation",
            band: "6.5",
            ipa: "[ˌrez.ɚˈveɪ.ʃən]",
            cn: "預訂/訂位",
            example: "I would like to make a reservation for a twin room.",
            tip: "★ 聽力核心考點！動詞為 reserve (make a reservation)。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="8" y="12" width="32" height="24" rx="3" fill="#86efac" stroke="#14532d" stroke-width="2.5"/><path d="M 14 20 L 22 26 L 34 16" fill="none" stroke="#15803d" stroke-width="3"/></svg>`
          },
          {
            word: "confirmation",
            band: "6.5",
            ipa: "[ˌkɑːn.fɚˈmeɪ.ʃən]",
            cn: "確認函/確認碼",
            example: "Please show your confirmation email at the check-in desk.",
            tip: "預訂確認信。常見短語 confirmation number (確認號碼)。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="10" y="8" width="28" height="32" rx="2" fill="#dcfce7" stroke="#14532d" stroke-width="2.5"/><text x="24" y="26" font-size="11" fill="#15803d" text-anchor="middle" font-weight="bold">OK</text></svg>`
          },
          {
            word: "non-refundable",
            band: "6.5",
            ipa: "[nɑːn rɪˈfʌn.də.bəl]",
            cn: "不可退款的",
            example: "Budget flight tickets are usually non-refundable.",
            tip: "不可退款條款。聽力對話常考訂票條款陷阱。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><circle cx="24" cy="24" r="16" fill="#fee2e2" stroke="#991b1b" stroke-width="2.5"/><line x1="14" y1="14" x2="34" y2="34" stroke="#ef4444" stroke-width="3.5"/></svg>`
          },
          {
            word: "check-in",
            band: "5.0",
            ipa: "[tʃek ɪn]",
            cn: "辦理入住/登機",
            example: "Hotel check-in starts at 3:00 PM.",
            tip: "登機或飯店入住。反義詞為 check-out (退房)。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="8" y="16" width="32" height="20" rx="3" fill="#bbf7d0" stroke="#14532d" stroke-width="2.5"/><polygon points="28,26 36,26 32,20" fill="#15803d"/></svg>`
          }
        ]
      },
      {
        id: "sectionSightseeing",
        themeClass: "purple-theme",
        titleCn: "景點觀光 (Sightseeing)",
        color: "#7c3aed",
        words: [
          {
            word: "guided tour",
            band: "6.5",
            ipa: "[ˈɡaɪ.dɪd tʊr]",
            cn: "有導覽的行程",
            example: "Join a guided tour to learn about the ancient castle.",
            tip: "由專業導遊領隊的觀光行程。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><circle cx="24" cy="16" r="6" fill="#a78bfa"/><path d="M 14 36 Q 24 24 34 36" fill="none" stroke="#5b21b6" stroke-width="3"/><polygon points="34,22 42,16 38,28" fill="#f59e0b"/></svg>`
          },
          {
            word: "souvenir",
            band: "5.0",
            ipa: "[ˌsuː.vəˈnɪr]",
            cn: "紀念品",
            example: "I bought a wooden handicraft as a souvenir.",
            tip: "★ 聽力常見填空詞！注意拼寫 -venir 結尾。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><polygon points="24,8 30,20 42,20 32,28 36,40 24,32 12,40 16,28 6,20 18,20" fill="#c4b5fd" stroke="#5b21b6" stroke-width="2"/></svg>`
          },
          {
            word: "attraction",
            band: "5.0",
            ipa: "[əˈtræk.ʃən]",
            cn: "觀光景點",
            example: "The Eiffel Tower is a popular tourist attraction.",
            tip: "熱門景點。常與 tourist 搭配 (tourist attraction)。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><path d="M 24 8 L 36 38 L 12 38 Z" fill="#ddd6fe" stroke="#5b21b6" stroke-width="2.5"/><circle cx="24" cy="20" r="4" fill="#f59e0b"/></svg>`
          },
          {
            word: "admission fee",
            band: "5.0",
            ipa: "[ədˈmɪʃ.ən fiː]",
            cn: "門票費用",
            example: "Students get a 50% discount on the museum admission fee.",
            tip: "入場門票費。常考免費或學生優惠。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="8" y="14" width="32" height="20" rx="3" fill="#f5f3ff" stroke="#5b21b6" stroke-width="2.5"/><text x="24" y="28" font-size="12" fill="#6d28d9" text-anchor="middle" font-weight="bold">TICKET</text></svg>`
          }
        ]
      },
      {
        id: "sectionHighFreqTravel",
        themeClass: "orange-theme",
        titleCn: "旅遊高頻詞 (High-Freq)",
        color: "#ea580c",
        words: [
          {
            word: "insurance",
            band: "6.5",
            ipa: "[ɪnˈʃʊr.əns]",
            cn: "旅遊保險",
            example: "It is strongly recommended to buy travel insurance.",
            tip: "保險。常見短語 travel insurance。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><path d="M 24 8 L 40 14 L 40 26 C 40 36, 24 42, 24 42 C 24 42, 8 36, 8 26 L 8 14 Z" fill="#fdba74" stroke="#ea580c" stroke-width="2.5"/></svg>`
          },
          {
            word: "currency",
            band: "6.5",
            ipa: "[ˈkɝː.ən.si]",
            cn: "貨幣/外幣",
            example: "You can exchange foreign currency at the bank counter.",
            tip: "貨幣。常見短語 foreign currency (外幣)。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><circle cx="24" cy="24" r="16" fill="#fff7ed" stroke="#ea580c" stroke-width="2.5"/><text x="24" y="30" font-size="16" fill="#c2410c" text-anchor="middle" font-weight="bold">€</text></svg>`
          },
          {
            word: "passport",
            band: "5.0",
            ipa: "[ˈpæs.pɔːrt]",
            cn: "護照",
            example: "Ensure your passport is valid for at least 6 months.",
            tip: "護照。聽力聽力 Section 1 個人資料填空常考！",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="10" y="8" width="28" height="32" rx="3" fill="#ea580c" stroke="#9a3412" stroke-width="2.5"/><circle cx="24" cy="22" r="6" fill="none" stroke="#ffffff" stroke-width="2"/></svg>`
          }
        ]
      }
    ]
  },

  "unit-4": {
    id: "unit-4",
    number: 4,
    titleEn: "Health & Medical",
    titleCn: "健 康",
    badgeText: "Unit 4 Health & Medical 健康醫療單字圖鑑",
    stickyNote: {
      title: "🩺 雅思聽力考點提醒",
      content: "Section 1 & 4 診所掛號與健康講座常考！注意 prescription (處方箋)、appointment (預約診號) 與 symptom (症狀)！"
    },
    centerSvg: `
      <div class="house-illustration">
        <svg class="house-svg" viewBox="0 0 200 160" width="190" height="152">
          <circle cx="100" cy="75" r="50" fill="#f0fdf4" stroke="#16a34a" stroke-width="4"/>
          <rect x="88" y="45" width="24" height="60" rx="3" fill="#ef4444"/>
          <rect x="70" y="63" width="60" height="24" rx="3" fill="#ef4444"/>
          <path d="M 30 135 L 70 135 L 80 115 L 90 145 L 105 105 L 120 135 L 170 135" fill="none" stroke="#22c55e" stroke-width="3.5" stroke-linecap="round"/>
        </svg>
      </div>
      <div class="backpack-icon" title="IELTS 醫療急救包">
        <svg viewBox="0 0 60 65" width="46" height="50">
          <rect x="10" y="18" width="40" height="38" rx="6" fill="#dc2626" stroke="#991b1b" stroke-width="3"/>
          <rect x="26" y="26" width="8" height="22" fill="#ffffff"/>
          <rect x="19" y="33" width="22" height="8" fill="#ffffff"/>
        </svg>
      </div>
    `,
    quadrants: [
      {
        id: "sectionClinic",
        themeClass: "blue-theme",
        titleCn: "診所看診 (Clinic)",
        color: "#2563eb",
        words: [
          {
            word: "appointment",
            band: "6.5",
            ipa: "[əˈpɔɪnt.mənt]",
            cn: "看診預約",
            example: "I need to book an appointment with the doctor for tomorrow.",
            tip: "★ 聽力超級高頻詞！常見短語 make an appointment。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="10" y="10" width="28" height="30" rx="3" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2.5"/><line x1="16" y1="20" x2="32" y2="20" stroke="#1d4ed8" stroke-width="2"/></svg>`
          },
          {
            word: "prescription",
            band: "6.5",
            ipa: "[prɪˈskrɪp.ʃən]",
            cn: "處方箋",
            example: "Take this prescription to the pharmacy to pick up your medicine.",
            tip: "★ 醫生開立的處方藥單。注意 pre- 拼寫！",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="12" y="8" width="24" height="32" rx="2" fill="#eff6ff" stroke="#1e3a8a" stroke-width="2.5"/><text x="24" y="28" font-size="16" fill="#2563eb" text-anchor="middle" font-weight="bold">Rx</text></svg>`
          },
          {
            word: "practitioner",
            band: "6.5",
            ipa: "[prækˈtɪʃ.ən.ɚ]",
            cn: "執業醫師 (GP)",
            example: "A General Practitioner (GP) handles everyday health issues.",
            tip: "全科醫生。常縮寫為 GP (General Practitioner)。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><circle cx="24" cy="18" r="7" fill="#60a5fa" stroke="#1e3a8a" stroke-width="2"/><path d="M 12 38 C 12 28, 36 28, 36 38" fill="#2563eb" stroke="#1e3a8a" stroke-width="2"/></svg>`
          },
          {
            word: "pharmacy",
            band: "6.5",
            ipa: "[ˈfɑːr.mə.si]",
            cn: "藥局/藥房",
            example: "The hospital pharmacy is open 24 hours a day.",
            tip: "藥局。英式英語也常稱為 chemist's。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="8" y="14" width="32" height="24" rx="4" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5"/><path d="M 24 18 L 24 34 M 16 26 L 32 26" stroke="#1d4ed8" stroke-width="3.5"/></svg>`
          }
        ]
      },
      {
        id: "sectionSymptoms",
        themeClass: "green-theme",
        titleCn: "症狀描述 (Symptoms)",
        color: "#16a34a",
        words: [
          {
            word: "symptom",
            band: "6.5",
            ipa: "[ˈsɪmp.təm]",
            cn: "病狀/症狀",
            example: "Fever and cough are common symptoms of the flu.",
            tip: "★ 聽力常見詞！注意中間有 p 的發音。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><circle cx="24" cy="24" r="16" fill="#bbf7d0" stroke="#14532d" stroke-width="2.5"/><path d="M 18 20 L 22 24 L 30 16" fill="none" stroke="#15803d" stroke-width="3"/></svg>`
          },
          {
            word: "headache",
            band: "5.0",
            ipa: "[ˈhed.eɪk]",
            cn: "頭痛",
            example: "She took an aspirin to relieve her severe headache.",
            tip: "身體部位 + ache 結尾（如 backache, stomachache）。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><circle cx="24" cy="24" r="14" fill="#86efac" stroke="#14532d" stroke-width="2.5"/><path d="M 16 16 L 32 32 M 32 16 L 16 32" stroke="#ef4444" stroke-width="3"/></svg>`
          },
          {
            word: "allergy",
            band: "6.5",
            ipa: "[ˈæl.ɚ.dʒi]",
            cn: "過敏症",
            example: "He has a severe allergy to peanuts and seafood.",
            tip: "過敏。形容詞為 allergic (allergic to...)。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><circle cx="24" cy="24" r="15" fill="#fef08a" stroke="#ca8a04" stroke-width="2.5"/><circle cx="18" cy="20" r="3" fill="#ef4444"/><circle cx="30" cy="22" r="4" fill="#ef4444"/><circle cx="22" cy="30" r="3.5" fill="#ef4444"/></svg>`
          },
          {
            word: "infection",
            band: "6.5",
            ipa: "[ɪnˈfek.ʃən]",
            cn: "細菌感染",
            example: "Antibiotics are prescribed to treat bacterial infections.",
            tip: "感染。常見搭配 ear infection (耳朵感染)。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><circle cx="24" cy="24" r="16" fill="#dcfce7" stroke="#14532d" stroke-width="2.5"/><circle cx="24" cy="24" r="6" fill="#ef4444"/></svg>`
          }
        ]
      },
      {
        id: "sectionTreatment",
        themeClass: "purple-theme",
        titleCn: "治療與護理 (Treatment)",
        color: "#7c3aed",
        words: [
          {
            word: "vaccination",
            band: "7.5+",
            ipa: "[ˌvæk.səˈneɪ.ʃən]",
            cn: "疫苗接種",
            example: "Students are required to show proof of vaccination.",
            tip: "疫苗接照。動詞為 vaccinate。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><path d="M 12 36 L 28 20 M 24 16 L 32 24" stroke="#7c3aed" stroke-width="3.5"/><polygon points="12,36 8,40 14,40" fill="#7c3aed"/></svg>`
          },
          {
            word: "painkiller",
            band: "6.5",
            ipa: "[ˈpeɪnˌkɪl.ɚ]",
            cn: "止痛藥",
            example: "The dentist gave him painkillers after extracting his tooth.",
            tip: "止痛藥（如 Paracetamol / Ibuprofen）。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="14" y="18" width="20" height="12" rx="6" fill="#c4b5fd" stroke="#5b21b6" stroke-width="2.5"/><line x1="24" y1="18" x2="24" y2="30" stroke="#5b21b6" stroke-width="2"/></svg>`
          },
          {
            word: "treatment",
            band: "6.5",
            ipa: "[ˈtriːt.mənt]",
            cn: "治療方案",
            example: "The hospital offers medical treatment for heart disease.",
            tip: "治療手段。動詞為 treat。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="10" y="10" width="28" height="28" rx="4" fill="#ddd6fe" stroke="#5b21b6" stroke-width="2.5"/><path d="M 18 24 L 23 29 L 30 19" fill="none" stroke="#7c3aed" stroke-width="3"/></svg>`
          }
        ]
      },
      {
        id: "sectionHighFreqHealth",
        themeClass: "orange-theme",
        titleCn: "健康高頻詞 (High-Freq)",
        color: "#ea580c",
        words: [
          {
            word: "insurance claim",
            band: "7.5+",
            ipa: "[ɪnˈʃʊr.əns kleɪm]",
            cn: "保險理賠申報",
            example: "Submit your medical receipts for an insurance claim.",
            tip: "★ 醫療保險索賠申請。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="10" y="8" width="28" height="32" rx="3" fill="#fdba74" stroke="#ea580c" stroke-width="2.5"/><text x="24" y="28" font-size="11" fill="#9a3412" text-anchor="middle" font-weight="bold">CLAIM</text></svg>`
          },
          {
            word: "emergency",
            band: "5.0",
            ipa: "[ɪˈmɝː.dʒən.si]",
            cn: "緊急狀況",
            example: "Call 999 for ambulance service in a life-threatening emergency.",
            tip: "急診室稱為 emergency room (ER) 或 A&E。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><polygon points="24,6 42,38 6,38" fill="#ef4444" stroke="#991b1b" stroke-width="2.5"/><text x="24" y="34" font-size="20" fill="#ffffff" text-anchor="middle" font-weight="bold">!</text></svg>`
          }
        ]
      }
    ]
  },

  "unit-5": {
    id: "unit-5",
    number: 5,
    titleEn: "Work & Career",
    titleCn: "工 作",
    badgeText: "Unit 5 Work & Career 職場求職單字圖鑑",
    stickyNote: {
      title: "💼 雅思聽力考點提醒",
      content: "Section 1 兼職求職 & Section 4 職涯發展高頻！注意 resume (履歷表)、flexible hours (彈性工時) 與 minimum wage (最低時薪)！"
    },
    centerSvg: `
      <div class="house-illustration">
        <svg class="house-svg" viewBox="0 0 200 160" width="190" height="152">
          <rect x="50" y="30" width="100" height="115" rx="4" fill="#f3e8ff" stroke="#6b21a8" stroke-width="4"/>
          <rect x="65" y="45" width="16" height="16" rx="2" fill="#c084fc"/>
          <rect x="92" y="45" width="16" height="16" rx="2" fill="#c084fc"/>
          <rect x="119" y="45" width="16" height="16" rx="2" fill="#c084fc"/>
          <rect x="65" y="75" width="16" height="16" rx="2" fill="#c084fc"/>
          <rect x="92" y="75" width="16" height="16" rx="2" fill="#c084fc"/>
          <rect x="119" y="75" width="16" height="16" rx="2" fill="#c084fc"/>
          <rect x="86" y="105" width="28" height="40" fill="#6b21a8"/>
          <g transform="translate(68, 118)">
            <rect x="0" y="0" width="64" height="28" rx="4" fill="#854d0e" stroke="#451a03" stroke-width="3"/>
            <rect x="24" y="-6" width="16" height="6" fill="none" stroke="#451a03" stroke-width="2.5"/>
            <rect x="28" y="10" width="8" height="8" rx="1" fill="#facc15"/>
          </g>
        </svg>
      </div>
      <div class="backpack-icon" title="IELTS 公事包">
        <svg viewBox="0 0 60 65" width="46" height="50">
          <rect x="10" y="20" width="40" height="34" rx="4" fill="#78350f" stroke="#451a03" stroke-width="3"/>
          <path d="M 22 20 L 22 10 L 38 10 L 38 20" fill="none" stroke="#451a03" stroke-width="3"/>
          <circle cx="30" cy="36" r="3" fill="#f59e0b"/>
        </svg>
      </div>
    `,
    quadrants: [
      {
        id: "sectionRecruitment",
        themeClass: "blue-theme",
        titleCn: "求職面試 (Recruitment)",
        color: "#2563eb",
        words: [
          {
            word: "resume",
            band: "6.5",
            ipa: "[ˈrez.ə.meɪ]",
            cn: "履歷表",
            example: "Send your updated resume and cover letter by email.",
            tip: "★ 履歷表。英式英語常用 CV (Curriculum Vitae)。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="10" y="8" width="28" height="34" rx="3" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2.5"/><circle cx="18" cy="18" r="4" fill="#1d4ed8"/><line x1="26" y1="16" x2="34" y2="16" stroke="#1d4ed8" stroke-width="2"/><line x1="26" y1="22" x2="34" y2="22" stroke="#1d4ed8" stroke-width="2"/></svg>`
          },
          {
            word: "interview",
            band: "5.0",
            ipa: "[ˈɪn.t̬ɚ.vjuː]",
            cn: "求職面試",
            example: "She was invited for a second-round job interview.",
            tip: "面試。常見短語 face-to-face interview。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><circle cx="16" cy="18" r="6" fill="#60a5fa"/><circle cx="32" cy="18" r="6" fill="#2563eb"/><path d="M 10 36 C 10 28, 22 28, 22 36 M 26 36 C 26 28, 38 28, 38 36" fill="none" stroke="#1e3a8a" stroke-width="2.5"/></svg>`
          },
          {
            word: "applicant",
            band: "6.5",
            ipa: "[ˈæp.lɪ.kənt]",
            cn: "求職申請者",
            example: "Over 100 applicants applied for the marketing position.",
            tip: "應徵者。動詞為 apply (apply for a job)。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><circle cx="24" cy="18" r="7" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/><path d="M 12 38 C 12 28, 36 28, 36 38" fill="#3b82f6" stroke="#1e3a8a" stroke-width="2"/></svg>`
          },
          {
            word: "reference",
            band: "6.5",
            ipa: "[ˈref.ɚ.əns]",
            cn: "推薦信/推薦人",
            example: "Please provide two professional references from past employers.",
            tip: "前任雇主或教授開立的推薦證明。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="10" y="8" width="28" height="32" rx="2" fill="#eff6ff" stroke="#1e3a8a" stroke-width="2.5"/><path d="M 18 20 L 23 25 L 30 16" fill="none" stroke="#2563eb" stroke-width="3"/></svg>`
          }
        ]
      },
      {
        id: "sectionEmployment",
        themeClass: "green-theme",
        titleCn: "工作形態 (Employment)",
        color: "#16a34a",
        words: [
          {
            word: "part-time",
            band: "5.0",
            ipa: "[pɑːrt taɪm]",
            cn: "兼職的",
            example: "Many university students work part-time in cafes.",
            tip: "★ 學生兼職。反義詞 full-time (全職)。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="8" y="14" width="32" height="22" rx="3" fill="#bbf7d0" stroke="#14532d" stroke-width="2.5"/><text x="24" y="28" font-size="10" fill="#15803d" text-anchor="middle" font-weight="bold">20 HRS</text></svg>`
          },
          {
            word: "flexible hours",
            band: "6.5",
            ipa: "[ˈfleks.ə.bəl aʊər z]",
            cn: "彈性工作時間",
            example: "The company offers flexible hours for working parents.",
            tip: "彈性工時。聽力常考打工優點。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><circle cx="24" cy="24" r="16" fill="#86efac" stroke="#14532d" stroke-width="2.5"/><path d="M 24 14 L 24 24 L 32 24" stroke="#15803d" stroke-width="3"/></svg>`
          },
          {
            word: "internship",
            band: "6.5",
            ipa: "[ˈɪn.tɝːn.ʃɪp]",
            cn: "企業實習",
            example: "He completed a paid summer internship at an accounting firm.",
            tip: "實習機會。實習生稱為 intern。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="10" y="10" width="28" height="28" rx="4" fill="#dcfce7" stroke="#14532d" stroke-width="2.5"/><text x="24" y="28" font-size="11" fill="#15803d" text-anchor="middle" font-weight="bold">INTERN</text></svg>`
          }
        ]
      },
      {
        id: "sectionSalary",
        themeClass: "purple-theme",
        titleCn: "薪資待遇 (Salary)",
        color: "#7c3aed",
        words: [
          {
            word: "minimum wage",
            band: "6.5",
            ipa: "[ˈmɪn.ə.məm weɪdʒ]",
            cn: "法定最低工資",
            example: "The national minimum wage was raised to £10.42 per hour.",
            tip: "★ 法定最低時薪。聽力打工常考話題！",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="8" y="16" width="32" height="20" rx="3" fill="#c4b5fd" stroke="#5b21b6" stroke-width="2.5"/><text x="24" y="30" font-size="14" fill="#5b21b6" text-anchor="middle" font-weight="bold">£/hr</text></svg>`
          },
          {
            word: "hourly rate",
            band: "5.0",
            ipa: "[ˈaʊər.li reɪt]",
            cn: "時薪標準",
            example: "What is the hourly rate for weekend night shifts?",
            tip: "每小時薪資數字。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><circle cx="24" cy="24" r="16" fill="#ddd6fe" stroke="#5b21b6" stroke-width="2.5"/><text x="24" y="30" font-size="14" fill="#6d28d9" text-anchor="middle" font-weight="bold">$</text></svg>`
          },
          {
            word: "bonus",
            band: "6.5",
            ipa: "[ˈboʊ.nəs]",
            cn: "年終/績效獎金",
            example: "Employees receive an annual performance bonus at Christmas.",
            tip: "獎金福利。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><polygon points="24,6 30,18 42,18 32,26 36,38 24,30 12,38 16,26 6,18 18,18" fill="#facc15" stroke="#ca8a04" stroke-width="2"/></svg>`
          }
        ]
      },
      {
        id: "sectionHighFreqWork",
        themeClass: "orange-theme",
        titleCn: "職場高頻詞 (High-Freq)",
        color: "#ea580c",
        words: [
          {
            word: "qualification",
            band: "6.5",
            ipa: "[ˌkwɑː.lə.fəˈkeɪ.ʃən]",
            cn: "任職資格/學歷",
            example: "Relevant teaching qualifications are required for this role.",
            tip: "★ 聽力高頻填空詞！注意 -tion 結尾與複數。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="10" y="8" width="28" height="32" rx="3" fill="#fdba74" stroke="#ea580c" stroke-width="2.5"/><circle cx="24" cy="22" r="6" fill="#f97316"/></svg>`
          },
          {
            word: "promotion",
            band: "6.5",
            ipa: "[prəˈmoʊ.ʃən]",
            cn: "升遷/晉升",
            example: "She earned a promotion to senior manager after two years.",
            tip: "職務晉升。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><path d="M 12 36 L 24 16 L 36 36" stroke="#ea580c" stroke-width="3.5" stroke-linecap="round"/><polygon points="24,10 18,20 30,20" fill="#ea580c"/></svg>`
          }
        ]
      }
    ]
  },

  "unit-6": {
    id: "unit-6",
    number: 6,
    titleEn: "Environment",
    titleCn: "環 境",
    badgeText: "Unit 6 Environment & Nature 生態環境單字圖鑑",
    stickyNote: {
      title: "🌿 雅思聽力考點提醒",
      content: "Section 4 學術演講大熱門！特別注意 climate change (氣候變遷)、biodiversity (生物多樣性)、renewable energy (可再生能源) 與 habitat (棲息地)！"
    },
    centerSvg: `
      <div class="house-illustration">
        <svg class="house-svg" viewBox="0 0 200 160" width="190" height="152">
          <circle cx="100" cy="75" r="50" fill="#dcfce7" stroke="#16a34a" stroke-width="4"/>
          <path d="M 60 75 Q 100 50 140 75 T 60 75" fill="none" stroke="#22c55e" stroke-width="2.5"/>
          <path d="M 100 25 Q 75 75 100 125" fill="none" stroke="#22c55e" stroke-width="2.5"/>
          <path d="M 100 35 Q 125 55 110 80 Q 90 80 100 35 Z" fill="#15803d" stroke="#14532d" stroke-width="3"/>
          <rect x="96" y="80" width="8" height="25" fill="#78350f"/>
        </svg>
      </div>
      <div class="backpack-icon" title="IELTS 環境保護背包">
        <svg viewBox="0 0 60 65" width="46" height="50">
          <path d="M 15 25 C 15 10, 45 10, 45 25 L 48 55 C 48 60, 42 62, 30 62 C 18 62, 12 60, 12 55 Z" fill="#15803d" stroke="#14532d" stroke-width="3"/>
          <circle cx="30" cy="38" r="8" fill="#4ade80"/>
        </svg>
      </div>
    `,
    quadrants: [
      {
        id: "sectionClimate",
        themeClass: "blue-theme",
        titleCn: "氣候與災害 (Climate)",
        color: "#2563eb",
        words: [
          {
            word: "climate change",
            band: "6.5",
            ipa: "[ˈklaɪ.mət tʃeɪndʒ]",
            cn: "氣候變遷",
            example: "Global efforts are needed to combat severe climate change.",
            tip: "★ Section 4 極高頻詞！注意 climate 雙音節發音。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><circle cx="24" cy="24" r="16" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5"/><path d="M 14 24 Q 24 16 34 24" fill="none" stroke="#ef4444" stroke-width="3"/></svg>`
          },
          {
            word: "global warming",
            band: "6.5",
            ipa: "[ˈɡloʊ.bəl ˈwɔːr.mɪŋ]",
            cn: "全球暖化",
            example: "Rising ocean temperatures are caused by global warming.",
            tip: "全球暖化。注意 warming 中間是 a 不是 o。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><circle cx="24" cy="24" r="14" fill="#fee2e2" stroke="#991b1b" stroke-width="2.5"/><path d="M 12 30 L 36 18" stroke="#ef4444" stroke-width="3"/></svg>`
          },
          {
            word: "drought",
            band: "5.0",
            ipa: "[draʊt]",
            cn: "旱災/乾旱",
            example: "Severe drought destroyed crops across the agricultural region.",
            tip: "乾旱。注意 gh 不發音！",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="10" y="16" width="28" height="20" rx="3" fill="#fef08a" stroke="#ca8a04" stroke-width="2.5"/><path d="M 16 26 L 32 26" stroke="#ca8a04" stroke-width="2" stroke-dasharray="3 2"/></svg>`
          },
          {
            word: "flood",
            band: "5.0",
            ipa: "[flʌd]",
            cn: "水災/洪水",
            example: "Heavy rainfall caused flooding along the river bank.",
            tip: "洪水。注意雙 o 發音為 [ʌ]。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><path d="M 8 28 Q 16 20 24 28 T 40 28 L 40 38 L 8 38 Z" fill="#60a5fa" stroke="#1d4ed8" stroke-width="2.5"/></svg>`
          }
        ]
      },
      {
        id: "sectionEcosystem",
        themeClass: "green-theme",
        titleCn: "生態與生物 (Ecosystem)",
        color: "#16a34a",
        words: [
          {
            word: "biodiversity",
            band: "7.5+",
            ipa: "[ˌbaɪ.oʊ.daɪˈvɝː.sə.t̬i]",
            cn: "生物多樣性",
            example: "Rainforests are famous for their rich biodiversity.",
            tip: "★ Section 4 學術重磅詞！生物多樣性。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><circle cx="16" cy="20" r="6" fill="#86efac"/><circle cx="32" cy="20" r="6" fill="#4ade80"/><circle cx="24" cy="32" r="6" fill="#22c55e"/></svg>`
          },
          {
            word: "habitat",
            band: "6.5",
            ipa: "[ˈhæb.ə.tæt]",
            cn: "野生動植物棲息地",
            example: "Deforestation threatens the natural habitat of wild tigers.",
            tip: "★ 棲息地。常見短語 natural habitat。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><path d="M 10 36 Q 24 16 38 36 Z" fill="#bbf7d0" stroke="#14532d" stroke-width="2.5"/></svg>`
          },
          {
            word: "endangered species",
            band: "6.5",
            ipa: "[ɪnˈdeɪn.dʒɚd ˈspiː.ʃiːz]",
            cn: "瀕危物種",
            example: "The giant panda is one of the world's protected endangered species.",
            tip: "瀕危物種。species 單複數同形！",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><circle cx="24" cy="24" r="15" fill="#fee2e2" stroke="#991b1b" stroke-width="2.5"/><text x="24" y="28" font-size="14" fill="#991b1b" text-anchor="middle" font-weight="bold">SOS</text></svg>`
          },
          {
            word: "ecosystem",
            band: "7.5+",
            ipa: "[ˈiː.koʊˌsɪs.təm]",
            cn: "生態系統",
            example: "Coral reefs provide vital marine ecosystems.",
            tip: "生態系。字首 eco- 表示環境生態。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><circle cx="24" cy="24" r="16" fill="#dcfce7" stroke="#14532d" stroke-width="2.5"/><path d="M 16 24 C 16 18, 32 18, 32 24" fill="none" stroke="#15803d" stroke-width="2.5"/></svg>`
          }
        ]
      },
      {
        id: "sectionConservation",
        themeClass: "purple-theme",
        titleCn: "環保與能源 (Conservation)",
        color: "#7c3aed",
        words: [
          {
            word: "renewable energy",
            band: "6.5",
            ipa: "[rɪˈnuː.ə.bəl ˈen.ɚ.dʒi]",
            cn: "可再生能源",
            example: "Wind and solar power are forms of renewable energy.",
            tip: "★ 可再生能源。如太陽能、風能。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><polygon points="24,6 30,18 42,18 32,26 36,38 24,30 12,38 16,26 6,18 18,18" fill="#facc15" stroke="#ca8a04" stroke-width="2"/></svg>`
          },
          {
            word: "sustainability",
            band: "6.5",
            ipa: "[səˌsteɪ.nəˈbɪl.ə.t̬i]",
            cn: "永續發展/可持續性",
            example: "The university promotes environmental sustainability.",
            tip: "永續性。形容詞為 sustainable。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><circle cx="24" cy="24" r="16" fill="#ddd6fe" stroke="#5b21b6" stroke-width="2.5"/><path d="M 16 24 L 22 30 L 32 18" fill="none" stroke="#6d28d9" stroke-width="3"/></svg>`
          },
          {
            word: "recycling",
            band: "5.0",
            ipa: "[ˌriːˈsaɪ.klɪŋ]",
            cn: "資源回收",
            example: "Place plastic bottles inside the green recycling bin.",
            tip: "資源回收。常見短語 recycling center (回收中心)。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><path d="M 24 10 L 34 26 L 14 26 Z" fill="none" stroke="#7c3aed" stroke-width="3"/></svg>`
          }
        ]
      },
      {
        id: "sectionHighFreqEnv",
        themeClass: "orange-theme",
        titleCn: "環境高頻詞 (High-Freq)",
        color: "#ea580c",
        words: [
          {
            word: "pollution",
            band: "5.0",
            ipa: "[pəˈluː.ʃən]",
            cn: "環境污染",
            example: "Air pollution in major cities poses health risks.",
            tip: "★ 聽力極高頻！常見種類 air / water / noise pollution。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="10" y="14" width="28" height="22" rx="3" fill="#fdba74" stroke="#ea580c" stroke-width="2.5"/><path d="M 16 14 Q 20 6 24 14 T 32 14" fill="none" stroke="#c2410c" stroke-width="2"/></svg>`
          },
          {
            word: "carbon footprint",
            band: "6.5",
            ipa: "[ˈkɑːr.bən ˈfʊt.prɪnt]",
            cn: "碳足跡",
            example: "Taking public transport reduces your personal carbon footprint.",
            tip: "碳排放足跡。高分口語/寫作常考短語。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><ellipse cx="24" cy="26" rx="10" ry="12" fill="#ea580c"/><circle cx="16" cy="12" r="3" fill="#ea580c"/><circle cx="24" cy="10" r="3.5" fill="#ea580c"/><circle cx="32" cy="12" r="3" fill="#ea580c"/></svg>`
          }
        ]
      }
    ]
  },

  "unit-7": {
    id: "unit-7",
    number: 7,
    titleEn: "Banking & Services",
    titleCn: "金 融",
    badgeText: "Unit 7 Banking & Services 金融服務單字圖鑑",
    stickyNote: {
      title: "💳 雅思聽力考點提醒",
      content: "Section 1 銀行開戶與郵局服務！特別注意 bank account (銀行帳戶)、interest rate (利率)、branch (分行) 與 receipt (收據靜音 c)！"
    },
    centerSvg: `
      <div class="house-illustration">
        <svg class="house-svg" viewBox="0 0 200 160" width="190" height="152">
          <path d="M 20 65 L 100 20 L 180 65 Z" fill="#047857" stroke="#064e3b" stroke-width="4" stroke-linejoin="round"/>
          <rect x="30" y="63" width="140" height="85" rx="3" fill="#ecfdf5" stroke="#064e3b" stroke-width="4"/>
          <rect x="44" y="75" width="16" height="73" fill="#34d399" stroke="#064e3b" stroke-width="2"/>
          <rect x="80" y="75" width="16" height="73" fill="#34d399" stroke="#064e3b" stroke-width="2"/>
          <rect x="104" y="75" width="16" height="73" fill="#34d399" stroke="#064e3b" stroke-width="2"/>
          <rect x="140" y="75" width="16" height="73" fill="#34d399" stroke="#064e3b" stroke-width="2"/>
          <g transform="translate(68, 122)">
            <rect x="0" y="0" width="64" height="22" rx="4" fill="#a7f3d0" stroke="#047857" stroke-width="2.5"/>
            <text x="32" y="15" font-family="'Fredoka', sans-serif" font-weight="700" font-size="12" fill="#047857" text-anchor="middle">BANK</text>
          </g>
        </svg>
      </div>
      <div class="backpack-icon" title="IELTS 信用卡金錢包">
        <svg viewBox="0 0 60 65" width="46" height="50">
          <rect x="10" y="18" width="40" height="36" rx="5" fill="#059669" stroke="#064e3b" stroke-width="3"/>
          <rect x="10" y="26" width="40" height="8" fill="#064e3b"/>
          <circle cx="22" cy="42" r="4" fill="#facc15"/>
        </svg>
      </div>
    `,
    quadrants: [
      {
        id: "sectionBanking",
        themeClass: "blue-theme",
        titleCn: "銀行服務 (Banking)",
        color: "#2563eb",
        words: [
          {
            word: "bank account",
            band: "5.0",
            ipa: "[bæŋk əˈkaʊnt]",
            cn: "銀行帳戶",
            example: "International students must open a local bank account.",
            tip: "★ Section 1 開戶考點！常見種類 current account (活期) / savings account (定期)。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="8" y="12" width="32" height="24" rx="4" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2.5"/><text x="24" y="28" font-size="14" fill="#1e3a8a" text-anchor="middle" font-weight="bold">$</text></svg>`
          },
          {
            word: "interest rate",
            band: "6.5",
            ipa: "[ˈɪn.trɪst reɪt]",
            cn: "銀行利率",
            example: "The savings account offers a 4% annual interest rate.",
            tip: "存款或貸款利率。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><circle cx="24" cy="24" r="16" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5"/><text x="24" y="30" font-size="16" fill="#1d4ed8" text-anchor="middle" font-weight="bold">%</text></svg>`
          },
          {
            word: "branch",
            band: "5.0",
            ipa: "[bræntʃ]",
            cn: "銀行分行",
            example: "You can visit the local branch near the train station.",
            tip: "分行。聽力填空常見地點說明。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><path d="M 8 36 L 24 16 L 40 36 Z" fill="#60a5fa" stroke="#1e3a8a" stroke-width="2.5"/></svg>`
          },
          {
            word: "transfer",
            band: "5.0",
            ipa: "[trænsˈfɝː]",
            cn: "轉帳/匯款",
            example: "I will transfer the tuition fee via mobile banking.",
            tip: "轉帳。常見短語 bank transfer。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><path d="M 12 20 L 36 20 M 30 14 L 36 20 L 30 26" stroke="#2563eb" stroke-width="3"/><path d="M 36 30 L 12 30 M 18 24 L 12 30 L 18 36" stroke="#2563eb" stroke-width="3"/></svg>`
          }
        ]
      },
      {
        id: "sectionPostal",
        themeClass: "green-theme",
        titleCn: "郵務物流 (Postal)",
        color: "#16a34a",
        words: [
          {
            word: "parcel",
            band: "5.0",
            ipa: "[ˈpɑːr.səl]",
            cn: "郵寄包裹",
            example: "The postman delivered a large parcel to my doorstep.",
            tip: "★ 郵寄包裹。美式英語也常使用 package。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="10" y="14" width="28" height="22" rx="3" fill="#86efac" stroke="#14532d" stroke-width="2.5"/><line x1="24" y1="14" x2="24" y2="36" stroke="#15803d" stroke-width="2"/><line x1="10" y1="24" x2="38" y2="24" stroke="#15803d" stroke-width="2"/></svg>`
          },
          {
            word: "postage",
            band: "5.0",
            ipa: "[ˈpoʊ.stɪdʒ]",
            cn: "郵資費用",
            example: "How much is the postage for sending a letter to Australia?",
            tip: "郵資。常見短語 postage stamp (郵票)。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="12" y="10" width="24" height="28" rx="2" fill="#bbf7d0" stroke="#14532d" stroke-width="2.5"/><circle cx="24" cy="24" r="6" fill="#22c55e"/></svg>`
          },
          {
            word: "registered mail",
            band: "6.5",
            ipa: "[ˈredʒ.ə.stɚd meɪl]",
            cn: "掛號信件",
            example: "Important documents should be sent by registered mail.",
            tip: "掛號郵件，需簽收。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="8" y="14" width="32" height="22" rx="2" fill="#dcfce7" stroke="#14532d" stroke-width="2.5"/><path d="M 8 14 L 24 26 L 40 14" fill="none" stroke="#15803d" stroke-width="2.5"/></svg>`
          }
        ]
      },
      {
        id: "sectionShoppingFinance",
        themeClass: "purple-theme",
        titleCn: "購物退稅 (Shopping)",
        color: "#7c3aed",
        words: [
          {
            word: "receipt",
            band: "5.0",
            ipa: "[rɪˈsiːt]",
            cn: "收據/發票",
            example: "Keep your receipt in case you want to exchange the item.",
            tip: "★ 聽力高頻陷阱詞！注意字母 p 不發音 (靜音 p)！",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="12" y="8" width="24" height="32" rx="2" fill="#f5f3ff" stroke="#5b21b6" stroke-width="2.5"/><line x1="16" y1="16" x2="32" y2="16" stroke="#7c3aed" stroke-width="2"/><line x1="16" y1="22" x2="32" y2="22" stroke="#7c3aed" stroke-width="2"/></svg>`
          },
          {
            word: "refund",
            band: "5.0",
            ipa: "[ˈriː.fʌnd]",
            cn: "退款",
            example: "The store gave me a full refund for the defective phone.",
            tip: "退款。常見搭配 get a full refund。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><path d="M 12 24 A 12 12 0 1 1 24 36" fill="none" stroke="#7c3aed" stroke-width="3"/><polygon points="8,24 16,24 12,18" fill="#7c3aed"/></svg>`
          },
          {
            word: "discount",
            band: "5.0",
            ipa: "[ˈdɪs.kaʊnt]",
            cn: "折扣優惠",
            example: "Students receive a 10% discount with a valid ID card.",
            tip: "折扣。常見短語 student discount。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="10" y="12" width="28" height="24" rx="3" fill="#ddd6fe" stroke="#5b21b6" stroke-width="2.5"/><text x="24" y="28" font-size="12" fill="#6d28d9" text-anchor="middle" font-weight="bold">OFF</text></svg>`
          }
        ]
      },
      {
        id: "sectionHighFreqBank",
        themeClass: "orange-theme",
        titleCn: "金融高頻詞 (High-Freq)",
        color: "#ea580c",
        words: [
          {
            word: "credit card",
            band: "5.0",
            ipa: "[ˈkred.ɪt kɑːrd]",
            cn: "信用卡",
            example: "You can pay by cash or credit card.",
            tip: "★ Section 1 支付方式極高頻！",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="8" y="14" width="32" height="20" rx="3" fill="#fdba74" stroke="#ea580c" stroke-width="2.5"/><rect x="8" y="20" width="32" height="5" fill="#ea580c"/></svg>`
          },
          {
            word: "identification",
            band: "6.5",
            ipa: "[aɪˌden.t̬ə.fəˈkeɪ.ʃən]",
            cn: "身份證明 (ID)",
            example: "Please bring official identification to open a bank account.",
            tip: "身分證件。常縮寫為 ID。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="8" y="12" width="32" height="24" rx="3" fill="#ffedd5" stroke="#ea580c" stroke-width="2.5"/><circle cx="18" cy="24" r="5" fill="#f97316"/></svg>`
          }
        ]
      }
    ]
  },

  "unit-8": {
    id: "unit-8",
    number: 8,
    titleEn: "Food & Dining",
    titleCn: "飲 食",
    badgeText: "Unit 8 Food & Dining 飲食餐廳單字圖鑑",
    stickyNote: {
      title: "🍔 雅思聽力考點提醒",
      content: "Section 1 & 2 餐廳點餐與飲食喜好！特別注意 vegetarian (素食)、allergy (過敏)、reservation (訂位) 與 main course (主菜)！"
    },
    centerSvg: `
      <div class="house-illustration">
        <svg class="house-svg" viewBox="0 0 200 160" width="190" height="152">
          <circle cx="100" cy="75" r="52" fill="#fff7ed" stroke="#ea580c" stroke-width="4"/>
          <circle cx="100" cy="75" r="40" fill="none" stroke="#fdba74" stroke-width="2.5" stroke-dasharray="4 3"/>
          <path d="M 32 40 L 32 70 L 38 70 L 38 110" fill="none" stroke="#78350f" stroke-width="3"/>
          <path d="M 168 40 C 168 40, 160 70, 160 80 L 160 110" fill="none" stroke="#78350f" stroke-width="3"/>
          <path d="M 85 70 C 70 50, 90 35, 100 45 C 110 35, 130 50, 115 70 Z" fill="#ffffff" stroke="#c2410c" stroke-width="3"/>
          <rect x="85" y="70" width="30" height="12" rx="2" fill="#ffffff" stroke="#c2410c" stroke-width="2.5"/>
        </svg>
      </div>
      <div class="backpack-icon" title="IELTS 美食餐盒">
        <svg viewBox="0 0 60 65" width="46" height="50">
          <rect x="10" y="20" width="40" height="34" rx="6" fill="#f97316" stroke="#c2410c" stroke-width="3"/>
          <path d="M 10 32 L 50 32" stroke="#c2410c" stroke-width="2"/>
        </svg>
      </div>
    `,
    quadrants: [
      {
        id: "sectionOrdering",
        themeClass: "blue-theme",
        titleCn: "餐廳點餐 (Ordering)",
        color: "#2563eb",
        words: [
          {
            word: "menu",
            band: "5.0",
            ipa: "[ˈmen.juː]",
            cn: "菜單",
            example: "May I see the lunch menu and drink list, please?",
            tip: "菜單。常見分開呈現 set menu (定食/套餐)。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="12" y="8" width="24" height="32" rx="2" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2.5"/><line x1="18" y1="16" x2="30" y2="16" stroke="#1d4ed8" stroke-width="2"/><line x1="18" y1="22" x2="30" y2="22" stroke="#1d4ed8" stroke-width="2"/></svg>`
          },
          {
            word: "main course",
            band: "5.0",
            ipa: "[meɪn kɔːrs]",
            cn: "餐點主菜",
            example: "For the main course, I would like the grilled salmon.",
            tip: "★ 主菜。前菜稱為 starter / appetizer。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><circle cx="24" cy="24" r="16" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5"/><circle cx="24" cy="24" r="10" fill="#2563eb"/></svg>`
          },
          {
            word: "dessert",
            band: "5.0",
            ipa: "[dɪˈzɝːt]",
            cn: "餐後甜點",
            example: "Chocolate cake is my favorite dessert.",
            tip: "★ 甜點。注意雙 s 拼寫！desert (單 s) 為沙漠。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><path d="M 12 32 L 36 32 L 30 18 L 18 18 Z" fill="#60a5fa" stroke="#1e3a8a" stroke-width="2.5"/><circle cx="24" cy="14" r="4" fill="#ef4444"/></svg>`
          },
          {
            word: "beverage",
            band: "5.0",
            ipa: "[ˈbev.ɚ.ɪdʒ]",
            cn: "飲料/飲品",
            example: "Hot and cold beverages are served with the meal.",
            tip: "飲品統稱 (drink 的正式表達)。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><path d="M 14 14 L 34 14 L 30 38 L 18 38 Z" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5"/><line x1="28" y1="8" x2="22" y2="24" stroke="#ef4444" stroke-width="2.5"/></svg>`
          }
        ]
      },
      {
        id: "sectionDietary",
        themeClass: "green-theme",
        titleCn: "飲食習慣 (Dietary)",
        color: "#16a34a",
        words: [
          {
            word: "vegetarian",
            band: "5.0",
            ipa: "[ˌvedʒ.əˈter.i.ən]",
            cn: "素食的/素食者",
            example: "The restaurant has a variety of vegetarian options.",
            tip: "★ 聽力大熱考點！不吃肉的素食者。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><path d="M 12 34 Q 24 14 36 34 Z" fill="#86efac" stroke="#14532d" stroke-width="2.5"/><path d="M 24 20 L 24 34" stroke="#15803d" stroke-width="2"/></svg>`
          },
          {
            word: "vegan",
            band: "6.5",
            ipa: "[ˈviː.ɡən]",
            cn: "純素主義者",
            example: "A vegan diet excludes all meat, dairy, and eggs.",
            tip: "純素者（完全不食用任何動物製品）。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><circle cx="24" cy="24" r="16" fill="#bbf7d0" stroke="#14532d" stroke-width="2.5"/><path d="M 16 24 L 22 30 L 32 18" fill="none" stroke="#15803d" stroke-width="3"/></svg>`
          },
          {
            word: "seafood",
            band: "5.0",
            ipa: "[ˈsiː.fuːd]",
            cn: "海鮮食材",
            example: "Fresh seafood is delivered daily from the harbor.",
            tip: "海鮮。聽力常考過敏源 (seafood allergy)。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><path d="M 10 24 C 20 14, 30 34, 38 24 C 30 34, 20 14, 10 24 Z" fill="#4ade80" stroke="#14532d" stroke-width="2.5"/></svg>`
          }
        ]
      },
      {
        id: "sectionIngredients",
        themeClass: "purple-theme",
        titleCn: "食材調理 (Ingredients)",
        color: "#7c3aed",
        words: [
          {
            word: "ingredient",
            band: "6.5",
            ipa: "[ɪnˈɡriː.di.ənt]",
            cn: "烹飪食材",
            example: "All dishes are cooked with fresh organic ingredients.",
            tip: "食材。注意中間有 -grie-。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="10" y="10" width="28" height="28" rx="4" fill="#ddd6fe" stroke="#5b21b6" stroke-width="2.5"/><circle cx="20" cy="20" r="4" fill="#a78bfa"/><circle cx="28" cy="28" r="4" fill="#7c3aed"/></svg>`
          },
          {
            word: "nutrition",
            band: "6.5",
            ipa: "[nuːˈtrɪʃ.ən]",
            cn: "營養價值",
            example: "Proper nutrition is essential for student health.",
            tip: "營養。形容詞為 nutritious (有營養的)。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><circle cx="24" cy="24" r="16" fill="#f5f3ff" stroke="#5b21b6" stroke-width="2.5"/><path d="M 24 12 L 24 36 M 12 24 L 36 24" stroke="#7c3aed" stroke-width="3"/></svg>`
          }
        ]
      },
      {
        id: "sectionHighFreqFood",
        themeClass: "orange-theme",
        titleCn: "餐飲高頻詞 (High-Freq)",
        color: "#ea580c",
        words: [
          {
            word: "takeaway",
            band: "5.0",
            ipa: "[ˈteɪk.ə.weɪ]",
            cn: "外帶餐點",
            example: "We ordered a Chinese takeaway for dinner.",
            tip: "外帶。美式英語常稱為 takeout。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="12" y="16" width="24" height="22" rx="3" fill="#fdba74" stroke="#ea580c" stroke-width="2.5"/><path d="M 18 16 L 24 8 L 30 16" fill="none" stroke="#ea580c" stroke-width="2.5"/></svg>`
          },
          {
            word: "buffet",
            band: "6.5",
            ipa: "[bəˈfeɪ]",
            cn: "自助餐",
            example: "The hotel offers an all-you-can-eat breakfast buffet.",
            tip: "自助餐。注意法語借詞 t 不發音！",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="8" y="20" width="32" height="16" rx="2" fill="#ffedd5" stroke="#ea580c" stroke-width="2.5"/><circle cx="16" cy="20" r="4" fill="#f97316"/><circle cx="32" cy="20" r="4" fill="#f97316"/></svg>`
          }
        ]
      }
    ]
  },

  "unit-9": {
    id: "unit-9",
    number: 9,
    titleEn: "Entertainment & Sports",
    titleCn: "娛 樂",
    badgeText: "Unit 9 Entertainment & Sports 娛樂運動單字圖鑑",
    stickyNote: {
      title: "🎨 雅思聽力考點提醒",
      content: "Section 2 活動與設施簡介！特別注意 exhibition (展覽)、membership (會員資格)、facility (設施) 與 tournament (錦標賽)！"
    },
    centerSvg: `
      <div class="house-illustration">
        <svg class="house-svg" viewBox="0 0 200 160" width="190" height="152">
          <circle cx="85" cy="75" r="45" fill="#fef3c7" stroke="#d97706" stroke-width="4"/>
          <circle cx="70" cy="85" r="6" fill="#ffffff" stroke="#d97706" stroke-width="2"/>
          <circle cx="75" cy="60" r="5" fill="#ef4444"/>
          <circle cx="95" cy="62" r="5" fill="#3b82f6"/>
          <circle cx="105" cy="78" r="5" fill="#22c55e"/>
          <circle cx="135" cy="85" r="30" fill="#ffffff" stroke="#1e293b" stroke-width="3.5"/>
          <polygon points="135,73 143,79 140,89 130,89 127,79" fill="#1e293b"/>
        </svg>
      </div>
      <div class="backpack-icon" title="IELTS 運動休閒背包">
        <svg viewBox="0 0 60 65" width="46" height="50">
          <path d="M 15 25 C 15 10, 45 10, 45 25 L 48 55 C 48 60, 42 62, 30 62 C 18 62, 12 60, 12 55 Z" fill="#d97706" stroke="#b45309" stroke-width="3"/>
          <circle cx="30" cy="38" r="7" fill="#fef3c7"/>
        </svg>
      </div>
    `,
    quadrants: [
      {
        id: "sectionArtsCulture",
        themeClass: "blue-theme",
        titleCn: "藝術與展覽 (Arts)",
        color: "#2563eb",
        words: [
          {
            word: "exhibition",
            band: "6.5",
            ipa: "[ˌek.səˈbɪʃ.ən]",
            cn: "博物館展覽",
            example: "The art gallery is hosting an exhibition of modern photography.",
            tip: "★ 聽力極高頻！注意 h 不發音！",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="10" y="10" width="28" height="28" rx="3" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2.5"/><circle cx="20" cy="20" r="4" fill="#f59e0b"/><path d="M 12 32 L 20 24 L 28 32 Z" fill="#1d4ed8"/></svg>`
          },
          {
            word: "gallery",
            band: "5.0",
            ipa: "[ˈɡæl.ɚ.i]",
            cn: "美術館/畫廊",
            example: "Local artists display their paintings in the national gallery.",
            tip: "畫廊。常見短語 art gallery。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="8" y="12" width="32" height="24" rx="2" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5"/><line x1="16" y1="12" x2="16" y2="36" stroke="#1e3a8a" stroke-width="2"/></svg>`
          },
          {
            word: "performance",
            band: "5.0",
            ipa: "[pɚˈfɔːr.məns]",
            cn: "舞台演出/表演",
            example: "The evening theater performance starts at 7:30 PM.",
            tip: "演出。動詞為 perform。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><path d="M 12 36 L 24 12 L 36 36 Z" fill="#60a5fa" stroke="#1e3a8a" stroke-width="2.5"/></svg>`
          }
        ]
      },
      {
        id: "sectionSportsFitness",
        themeClass: "green-theme",
        titleCn: "運動與健身 (Sports)",
        color: "#16a34a",
        words: [
          {
            word: "gymnasium",
            band: "5.0",
            ipa: "[dʒɪmˈneɪ.zi.əm]",
            cn: "體育館/健身房",
            example: "The campus gymnasium includes a basketball court and swimming pool.",
            tip: "★ 體育館。常簡稱為 gym。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="8" y="20" width="32" height="8" rx="4" fill="#86efac" stroke="#14532d" stroke-width="2.5"/><rect x="14" y="14" width="4" height="20" fill="#14532d"/><rect x="30" y="14" width="4" height="20" fill="#14532d"/></svg>`
          },
          {
            word: "membership",
            band: "5.0",
            ipa: "[ˈmem.bɚ.ʃɪp]",
            cn: "會員資格",
            example: "Annual gym membership includes access to all fitness classes.",
            tip: "★ 會員身分。常見短語 membership fee (會費)。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="8" y="14" width="32" height="20" rx="3" fill="#bbf7d0" stroke="#14532d" stroke-width="2.5"/><text x="24" y="28" font-size="11" fill="#15803d" text-anchor="middle" font-weight="bold">VIP</text></svg>`
          },
          {
            word: "tournament",
            band: "6.5",
            ipa: "[ˈtʊr.nə.mənt]",
            cn: "錦標賽/聯賽",
            example: "Our university tennis team won the national tournament.",
            tip: "錦標賽。聽力體育話題常用詞。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><path d="M 12 12 L 36 12 L 30 28 L 18 28 Z" fill="#facc15" stroke="#ca8a04" stroke-width="2.5"/><rect x="22" y="28" width="4" height="10" fill="#ca8a04"/></svg>`
          }
        ]
      },
      {
        id: "sectionLeisureEvents",
        themeClass: "purple-theme",
        titleCn: "休閒與活動 (Leisure)",
        color: "#7c3aed",
        words: [
          {
            word: "festival",
            band: "5.0",
            ipa: "[ˈfes.tə.vəl]",
            cn: "慶典/音樂節",
            example: "Thousands of visitors attended the summer music festival.",
            tip: "節日/慶典。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><polygon points="24,8 30,20 42,20 32,28 36,40 24,32 12,40 16,28 6,20 18,20" fill="#c4b5fd" stroke="#5b21b6" stroke-width="2"/></svg>`
          },
          {
            word: "recreation",
            band: "6.5",
            ipa: "[ˌrek.riˈeɪ.ʃən]",
            cn: "娛樂休閒活動",
            example: "The park offers various recreation facilities for families.",
            tip: "娛樂。休閒中心稱為 recreation center。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><circle cx="24" cy="24" r="16" fill="#ddd6fe" stroke="#5b21b6" stroke-width="2.5"/></svg>`
          }
        ]
      },
      {
        id: "sectionHighFreqSports",
        themeClass: "orange-theme",
        titleCn: "娛樂高頻詞 (High-Freq)",
        color: "#ea580c",
        words: [
          {
            word: "instructor",
            band: "6.5",
            ipa: "[ɪnˈstrʌk.tɚ]",
            cn: "專業教練/指導員",
            example: "Book a lesson with a certified skiing instructor.",
            tip: "★ 聽力常見人物身分。如 fitness instructor。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><circle cx="24" cy="16" r="7" fill="#fdba74" stroke="#ea580c" stroke-width="2"/><path d="M 12 36 C 12 26, 36 26, 36 36" fill="#ea580c" stroke="#c2410c" stroke-width="2"/></svg>`
          }
        ]
      }
    ]
  },

  "unit-10": {
    id: "unit-10",
    number: 10,
    titleEn: "Science & Technology",
    titleCn: "科 技",
    badgeText: "Unit 10 Science & Technology 科學科技單字圖鑑",
    stickyNote: {
      title: "🔬 雅思聽力考點提醒",
      content: "Section 4 學術科技演講！特別注意 artificial intelligence (AI)、database (資料庫)、innovation (創新) 與 experiment (實驗)！"
    },
    centerSvg: `
      <div class="house-illustration">
        <svg class="house-svg" viewBox="0 0 200 160" width="190" height="152">
          <rect x="50" y="30" width="100" height="115" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="4"/>
          <circle cx="100" cy="75" r="22" fill="#0284c7" stroke="#38bdf8" stroke-width="3"/>
          <line x1="100" y1="30" x2="100" y2="53" stroke="#38bdf8" stroke-width="3"/>
          <line x1="100" y1="97" x2="100" y2="145" stroke="#38bdf8" stroke-width="3"/>
          <line x1="50" y1="75" x2="78" y2="75" stroke="#38bdf8" stroke-width="3"/>
          <line x1="122" y1="75" x2="150" y2="75" stroke="#38bdf8" stroke-width="3"/>
          <circle cx="100" cy="75" r="6" fill="#38bdf8"/>
        </svg>
      </div>
      <div class="backpack-icon" title="IELTS 科技機器人背包">
        <svg viewBox="0 0 60 65" width="46" height="50">
          <rect x="10" y="18" width="40" height="38" rx="6" fill="#0284c7" stroke="#0369a1" stroke-width="3"/>
          <circle cx="22" cy="30" r="4" fill="#38bdf8"/>
          <circle cx="38" cy="30" r="4" fill="#38bdf8"/>
          <line x1="20" y1="44" x2="40" y2="44" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
        </svg>
      </div>
    `,
    quadrants: [
      {
        id: "sectionITDev",
        themeClass: "blue-theme",
        titleCn: "資訊與網路 (IT)",
        color: "#2563eb",
        words: [
          {
            word: "artificial intelligence",
            band: "7.5+",
            ipa: "[ˌɑːr.t̬əˈfɪʃ.əl ɪnˈtel.ə.dʒəns]",
            cn: "人工智慧 (AI)",
            example: "Artificial intelligence is transforming modern healthcare.",
            tip: "★ Section 4 學術大考點！常縮寫為 AI。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="10" y="10" width="28" height="28" rx="6" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2.5"/><circle cx="18" cy="20" r="3" fill="#1d4ed8"/><circle cx="30" cy="20" r="3" fill="#1d4ed8"/><line x1="18" y1="28" x2="30" y2="28" stroke="#1d4ed8" stroke-width="2.5"/></svg>`
          },
          {
            word: "database",
            band: "6.5",
            ipa: "[ˈdeɪ.t̬ə.beɪs]",
            cn: "數據資料庫",
            example: "Researchers store all experimental results in a central database.",
            tip: "資料庫。注意是單一單字，不拆開！",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><ellipse cx="24" cy="14" rx="14" ry="5" fill="#60a5fa" stroke="#1e3a8a" stroke-width="2"/><path d="M 10 14 L 10 34 C 10 39, 38 39, 38 34 L 38 14" fill="none" stroke="#1e3a8a" stroke-width="2"/></svg>`
          },
          {
            word: "cybersecurity",
            band: "7.5+",
            ipa: "[ˌsaɪ.bɚ.səˈkjʊr.ə.t̬i]",
            cn: "資訊網路安全",
            example: "Companies invest heavily in cybersecurity to prevent data breaches.",
            tip: "網路安全。字首 cyber- 表示網路與電腦。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><path d="M 24 8 L 40 14 L 40 26 C 40 36, 24 42, 24 42 C 24 42, 8 36, 8 26 L 8 14 Z" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5"/></svg>`
          }
        ]
      },
      {
        id: "sectionResearchExp",
        themeClass: "green-theme",
        titleCn: "研究與實驗 (Research)",
        color: "#16a34a",
        words: [
          {
            word: "experiment",
            band: "5.0",
            ipa: "[ɪkˈsper.ə.mənt]",
            cn: "科學實驗",
            example: "Scientists conducted a series of laboratory experiments.",
            tip: "★ 聽力極高頻！常見短語 conduct an experiment。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><path d="M 18 12 L 30 12 L 30 20 L 38 34 C 40 38, 36 40, 24 40 C 12 40, 8 38, 10 34 L 18 20 Z" fill="#86efac" stroke="#14532d" stroke-width="2.5"/></svg>`
          },
          {
            word: "hypothesis",
            band: "7.5+",
            ipa: "[haɪˈpɑː.θə.sɪs]",
            cn: "科學假設",
            example: "The research data supported our initial hypothesis.",
            tip: "★ 學術假說。複數形式為 hypotheses [haɪˈpɑː.θə.siːz]！",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><circle cx="24" cy="24" r="16" fill="#bbf7d0" stroke="#14532d" stroke-width="2.5"/><text x="24" y="30" font-size="16" fill="#14532d" text-anchor="middle" font-weight="bold">?</text></svg>`
          },
          {
            word: "innovation",
            band: "6.5",
            ipa: "[ˌɪn.əˈveɪ.ʃən]",
            cn: "科技創新",
            example: "Technological innovation drives economic growth.",
            tip: "創新。形容詞為 innovative。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><circle cx="24" cy="20" r="12" fill="#fef08a" stroke="#ca8a04" stroke-width="2.5"/><rect x="20" y="32" width="8" height="8" fill="#ca8a04"/></svg>`
          }
        ]
      },
      {
        id: "sectionTechFuture",
        themeClass: "purple-theme",
        titleCn: "未來科技 (Future Tech)",
        color: "#7c3aed",
        words: [
          {
            word: "automation",
            band: "6.5",
            ipa: "[ˌɑː.t̬əˈmeɪ.ʃən]",
            cn: "自動化技術",
            example: "Factory automation increases manufacturing efficiency.",
            tip: "自動化。形容詞為 automated。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><circle cx="24" cy="24" r="14" fill="#ddd6fe" stroke="#5b21b6" stroke-width="2.5"/><path d="M 24 14 L 24 24 L 30 24" stroke="#5b21b6" stroke-width="3"/></svg>`
          },
          {
            word: "robotics",
            band: "7.5+",
            ipa: "[roʊˈbɑː.t̬ɪks]",
            cn: "機器人學",
            example: "Robotics engineering is a popular field of study.",
            tip: "機器人工程學。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="12" y="14" width="24" height="20" rx="4" fill="#c4b5fd" stroke="#5b21b6" stroke-width="2.5"/><circle cx="18" cy="22" r="3" fill="#ffffff"/><circle cx="30" cy="22" r="3" fill="#ffffff"/></svg>`
          }
        ]
      },
      {
        id: "sectionHighFreqTech",
        themeClass: "orange-theme",
        titleCn: "科技高頻詞 (High-Freq)",
        color: "#ea580c",
        words: [
          {
            word: "algorithm",
            band: "7.5+",
            ipa: "[ˈæl.ɡə.rɪ.ðəm]",
            cn: "演算法",
            example: "Search engines rely on complex algorithms to rank results.",
            tip: "★ 演算法。聽力 Section 4 常考詞彙。",
            icon: `<svg class="custom-icon" viewBox="0 0 48 48"><rect x="10" y="10" width="28" height="28" rx="4" fill="#fdba74" stroke="#ea580c" stroke-width="2.5"/><path d="M 16 24 L 22 30 L 32 18" fill="none" stroke="#c2410c" stroke-width="3"/></svg>`
          }
        ]
      }
    ]
  }
};
