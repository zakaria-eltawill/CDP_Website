<template>
  <section class="vision-libya-page">
    <div class="hero-panel relative py-24 md:py-32 overflow-hidden" style="background: linear-gradient(135deg, #003a6a 0%, #0f3c5f 50%, #1c41d8 100%);">
      <div class="hero-pattern" :style="{ backgroundImage: `url(${baseUrl}pattern-bg.png)`, backgroundRepeat: 'repeat' }"></div>
      <div class="hero-glow"></div>
      <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow">خارطة طريق وطنية لبناء دولة مدنية ديمقراطية</h1>
        <div class="w-24 h-1.5 bg-[#ffd200] mx-auto mb-6"></div>
        <p class="text-xl text-white/90 font-medium mb-8">
          رؤية شاملة للانتقال إلى ليبيا مستقرة، آمنة، ومزدهرة. اطلع على الوثيقة الرسمية وشاهد الفيديوهات التعريفية.
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a
            class="primary-button"
            :href="`${baseUrl}publications/vision.pdf`"
            target="_blank"
            rel="noreferrer"
          >
            تحميل الوثيقة
          </a>
          <router-link class="secondary-button" to="/publications">منشورات ذات صلة</router-link>
        </div>
      </div>
    </div>

    <section class="section section-overview">
      <div class="section-content">
        <div class="section-header">
          <span class="section-tag">مكونات الرؤية</span>
          <h2>أربعة محاور أساسية من أجل ليبيا الواعدة</h2>
          <p>التركيز هنا على الإجراءات العملية، العدالة، التنمية، وبناء مؤسسات تستجيب لتطلعات الشعب.</p>
        </div>

        <div class="grid cards-grid">
          <article class="card">
            <h3>دولة مدنية</h3>
            <p>تصميم مؤسسات وطنية شفافة تعبر عن إرادة الشعب وتحدّد واجباتها ومسؤولياتها بوضوح.</p>
          </article>
          <article class="card">
            <h3>أمن واستقرار</h3>
            <p>تعزيز الأمن القومي وإنهاء حالة التشرذم من خلال سيادة القانون وحماية الحقوق.</p>
          </article>
          <article class="card">
            <h3>تنمية اقتصادية</h3>
            <p>مواصلة البناء الاقتصادي الوطني وخلق فرص عمل مستدامة لتحسين مستوى المعيشة.</p>
          </article>
          <article class="card">
            <h3>عدالة اجتماعية</h3>
            <p>ضمان توزيع عادل للخدمات والبنى التحتية في كل المنطقة ودعم الفئات الأكثر حاجة.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section section-videos">
      <div class="section-content">
        <div class="section-header">
          <span class="section-tag">وثائقي</span>
          <h2>فيديوهات توضح الرؤية</h2>
          <p>مجموعة مختارة من التسجيلات السياسية والتوعوية عن مفهوم ليبيا الواعدة.</p>
        </div>

        <div class="grid video-grid">
          <div v-for="id in videos" :key="id" class="video-card">
            <iframe
              :src="`https://www.youtube.com/embed/${id}`"
              :title="`video-${id}`"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-highlight">
      <div class="highlight-panel">
        <div>
          <h2>رؤية واضحة ومستقبل أفضل</h2>
          <p>
            هذا العرض يركّز على أهم رؤى النهج الوطني لبناء ليبيا الحديثة، مع إبراز الفكرة العامة والتحولات المطلوبة وصولاً إلى دولة مستقرة.
          </p>
        </div>
      </div>
    </section>
  </section>

</template>

<script setup>
const baseUrl = import.meta.env.BASE_URL
const videos = [
  'pwBqKpEI5XA','jmzdCGWkM90','4nAgfhgK3LQ','urLXwkbHm5k',
  'CtD35KqU2vc','T8Xqu68N65I','iXPRUNfCfzk','s4uhkJSIpH8',
  'Tl7LkVpQVFU','4Er9g7zhYVw'
]
</script>

<style scoped>
.vision-libya-page {
  direction: rtl;
  background: #f8fbff;
  color: #1a3049;
  font-family: "Tajawal", sans-serif;
}

.hero-panel {
  position: relative;
  min-height: 520px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem;
  overflow: hidden;
  background: linear-gradient(135deg, #003a6a 0%, #0f3c5f 50%, #1c41d8 100%);
}

.hero-pattern {
  position: absolute;
  inset: 0;
  opacity: 0.07;
}

.hero-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.08), transparent 60%);
}

.hero-copy {
  position: relative;
  z-index: 1;
  max-width: 760px;
  text-align: center;
  color: #ffffff;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 1rem;
  color: #ffe187;
  letter-spacing: 0.18em;
  font-weight: 700;
  text-transform: uppercase;
}

.hero-copy h1 {
  font-size: clamp(2.4rem, 4vw, 3.8rem);
  line-height: 1.05;
  margin-bottom: 1rem;
}

.hero-text {
  color: rgba(255, 255, 255, 0.92);
  font-size: 1.05rem;
  line-height: 1.85;
  max-width: 690px;
  margin: 0 auto;
}

.hero-buttons {
  margin-top: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.primary-button,
.secondary-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.8rem;
  border-radius: 999px;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.primary-button {
  background: #f4b713;
  color: #10294b;
  box-shadow: 0 16px 40px rgba(244, 183, 19, 0.2);
}

.secondary-button {
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.28);
  color: #ffffff;
}

.primary-button:hover,
.secondary-button:hover {
  transform: translateY(-2px);
}

.section {
  padding: 4rem 1rem;
}

.section-content {
  max-width: 1180px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  max-width: 730px;
  margin: 0 auto 2.5rem;
}

.section-tag {
  display: inline-block;
  margin-bottom: 0.9rem;
  color: #f4b713;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.section-header h2 {
  font-size: clamp(1.85rem, 2.5vw, 2.6rem);
  margin-bottom: 1rem;
}

.section-header p {
  color: #475569;
  line-height: 1.8;
  font-size: 1rem;
}

.cards-grid,
.video-grid {
  display: grid;
  gap: 1.5rem;
}

.cards-grid {
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 26px;
  padding: 1.8rem;
  box-shadow: 0 18px 40px rgba(15, 62, 131, 0.06);
}

.card h3 {
  color: #0f386f;
  margin-bottom: 0.9rem;
  font-size: 1.18rem;
}

.card p {
  color: #475569;
  line-height: 1.85;
}

.video-grid {
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.video-card {
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 45px rgba(15, 62, 131, 0.08);
  background: #ffffff;
}

.video-card iframe {
  width: 100%;
  min-height: 240px;
}

.section-highlight {
  padding-top: 2rem;
  padding-bottom: 3rem;
}

.highlight-panel {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2.5rem;
  border-radius: 28px;
  background: linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%);
  border: 1px solid rgba(15, 62, 131, 0.08);
  box-shadow: 0 20px 50px rgba(15, 62, 131, 0.08);
}

.highlight-panel h2 {
  font-size: clamp(1.9rem, 2.3vw, 2.4rem);
  margin-bottom: 1rem;
  color: #0f386f;
}

.highlight-panel p {
  color: #475569;
  line-height: 1.9;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .hero-panel {
    min-height: 480px;
    padding: 3rem 1rem;
  }

  .hero-copy h1 {
    font-size: 2.4rem;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .video-card iframe {
    min-height: 220px;
  }
}
</style>
