# AI Engineering Lab

Bilgisayar Bilimleri öğrencileri için rehberli, etkileşimli AI mühendisliği atölyesi. Model seçimi, prompt evaluation, test, mimari kararlar, OpenAI tool calling ve Decision AI deneyleri içerir. RAG yalnızca teorik bilgi kartı olarak anılır; uygulamada RAG hattı yoktur.

## Yerelde çalıştırma

```bash
npm install
npm run dev
```

Vite’ın yazdırdığı yerel adresi (genellikle `http://localhost:5173`) açın. API anahtarı eklemeden demo modu kullanılabilir. Canlı koşum için uygulama içinden kendi **OpenAI Platform API key** anahtarınızı girin. ChatGPT/Codex oturum bilgileri burada kullanılmaz.

## API key ve veri

- API key yalnızca uygulamanın belleğinde durur; `localStorage`/`sessionStorage` veya dosyaya yazılmaz. Sayfa yenilenince silinir.
- Canlı istekler tarayıcıdan doğrudan OpenAI Responses API’ye gider. Yerel eğitim akışında bu tercih bilerek yapılmıştır; tarayıcı geliştirici araçlarıyla key görülebilir. Yalnızca kendi, sınırlandırılmış/iptal edilebilir anahtarınızı kullanın; uygulamayı herkese açık hosted servise bu mimariyle deploy etmeyin.
- Prompt, test girdisi ve tool-call istekleri seçtiğiniz model sağlayıcısına gönderilir. Gerçek kişisel/veri hassas bilgisi eklemeyin.
- Tool demo fonksiyonları uygulamanın içinde, sabit örnek veriyle çalışır; dış sistemlerde işlem yapmaz.
- Anahtar yokken modüller örnek sonuçlarla çalışır.

## Başlangıç modülleri

- **Model seçimi:** İki modeli aynı girdiyle kıyaslama.
- **Prompt evaluation:** Düzenlenebilir template/rubric ve test örnekleri, başarısız örnekleri görme ve evaluator’dan prompt fix önerisi.
- **Test lab:** Promptu, test girdisini, beklenen kategoriyi, önem seviyesini ve insan incelemesi beklentisini düzenleyerek davranış kontrolü.
- **Mimari lab:** Direct call ve sabit workflow’u çalıştır; RAG sadece kavram kartı.
- **Tool calling:** Function registry’ye kendi function adını, açıklamasını, strict JSON parametre şemasını, demo argümanlarını ve yerel JSON çıktı şablonunu ekle/düzenle. Demo modunda hangi function’ın çalışacağını seç; Responses API tool-call argümanları şemaya göre doğrulansın, tanımlı yerel handler şablonu çalışsın ve akış tur tur trace edilsin. Varsayılan iki örnek düzenlenebilir; kullanıcı tanımlı function kodu çalıştırılmaz ve yerel örnekler dış sistemlerde işlem yapmaz.
- **Decision AI:** OpenAI Decisions API (`POST /v1/decisions`) için predicate, choice ve score hazır örneklerini dene. Her örnek model seçicisinin üstünde yer alır; soru adı, talimat, girdi ve choice seçenekleri/score seviyeleri düzenlenebilir. Sonuç kartı seçilen soru türüne göre olasılığı, seçeneği veya ağırlıklı puanı gösterir. Kullanılabilir model `gpt-6-luna` olarak sabitlenmiştir. Predicate örneğinde ayrıca uygulama eşiğini ve 10 sabit sentetik örnek üstündeki confusion matrix/FP-FN dengesini incele.

AI isteği çalıştırıldığında, **Raw API request / response** panelinde ilgili API gövdesi ve ham HTTP yanıtı gösterilir. Authorization başlığı gizlenir; API key hiçbir koşulda log’a yazılmaz. Demo modunda istek gövdesi yalnızca önizlemedir, API’ye gönderilmez; simülasyon çıktısı ayrıca etiketlenir. Demo modundaki Decisions sonucu yerel bir heuristiktir; API çıktısı değildir. Sentetik confusion matrix veri seti, canlı Decisions API çağrısından bağımsızdır.

Her modülde rehberli adımlar, bağlama duyarlı ipuçları, highlight’lar ve serbest deneme modu vardır.
