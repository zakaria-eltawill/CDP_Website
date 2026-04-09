<template>
  <div class="pt-20 bg-white">
    <section class="hero-banner relative py-24 md:py-32 overflow-hidden">
      <div class="hero-pattern" :style="{ backgroundImage: `url(${baseUrl}pattern-bg.png)`, backgroundRepeat: 'repeat' }"></div>
      <div class="hero-glow"></div>
      <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow">منشورات</h1>
        <div class="w-24 h-1.5 bg-[#ffd200] mx-auto mb-6"></div>
        <p class="text-xl text-white/90 font-medium mb-2">
          مجموعة الوثائق الرسمية والبرامج السياسية للحزب المدني الديمقراطي.
        </p>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        
        <div class="bg-gray-50 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-gray-100 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
          <div class="w-full h-56 bg-gradient-to-br from-[#003a6a]/5 to-[#1c41d8]/10 flex items-center justify-center relative overflow-hidden">
            <img :src="`${baseUrl}logo.png`" class="w-24 h-auto opacity-30 grayscale mix-blend-multiply transition-transform duration-500 group-hover:scale-110" alt="CDP Placeholder">
            <img
              src="https://web.archive.org/web/20241008002554im_/https://ar.cdp.org.ly/wp-content/uploads/2021/05/WhatsApp-Image-2021-05-18-at-11.04.22-AM-1-180x180.jpeg"
              alt="البرنامج السياسي"
              class="w-full h-full object-cover absolute inset-0 z-10 transition-transform duration-500 group-hover:scale-105"
              @error="$event.target.style.display='none'"
            />
          </div>
          <div class="p-6 text-right flex-1 flex flex-col">
            <h3 class="text-xl font-bold text-[#0f386f] mb-3">البرنامج السياسي</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-6">تحميل الوثيقة الرسمية للبرنامج السياسي للحزب المدني الديمقراطي.</p>
            <div class="mt-auto flex justify-start">
              <a :href="`${baseUrl}publications/program.pdf`" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-full bg-[#ffd200] text-[#003a6a] font-bold px-5 py-2.5 transition hover:bg-[#e6bb00] text-sm">تحميل الوثيقة</a>
            </div>
          </div>
        </div>

        <div class="bg-gray-50 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-gray-100 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
          <div class="w-full h-56 bg-gradient-to-br from-[#003a6a]/5 to-[#1c41d8]/10 flex items-center justify-center relative overflow-hidden">
            <img :src="`${baseUrl}logo.png`" class="w-24 h-auto opacity-30 grayscale mix-blend-multiply transition-transform duration-500 group-hover:scale-110" alt="CDP Placeholder">
            <img
              src="https://web.archive.org/web/20241008002554im_/https://ar.cdp.org.ly/wp-content/uploads/2021/05/WhatsApp-Image-2021-05-24-at-8.38.43-AM-180x180.jpeg"
              alt="النظام الأساسي"
              class="w-full h-full object-cover absolute inset-0 z-10 transition-transform duration-500 group-hover:scale-105"
              @error="$event.target.style.display='none'"
            />
          </div>
          <div class="p-6 text-right flex-1 flex flex-col">
            <h3 class="text-xl font-bold text-[#0f386f] mb-3">النظام الأساسي</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-6">النظام الأساسي المحدث للحزب المدني الديمقراطي، مع تنزيل مباشر من الأرشيف.</p>
             <div class="mt-auto flex justify-start">
              <a :href="`${baseUrl}publications/statute.pdf`" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-full bg-[#ffd200] text-[#003a6a] font-bold px-5 py-2.5 transition hover:bg-[#e6bb00] text-sm">تحميل الوثيقة</a>
            </div>
          </div>
        </div>

        <div class="bg-gray-50 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-gray-100 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
          <div class="w-full h-56 bg-gradient-to-br from-[#003a6a]/5 to-[#1c41d8]/10 flex items-center justify-center relative overflow-hidden">
            <img :src="`${baseUrl}logo.png`" class="w-24 h-auto opacity-30 grayscale mix-blend-multiply transition-transform duration-500 group-hover:scale-110" alt="CDP Placeholder">
            <img
              src="https://web.archive.org/web/20241008002554im_/https://ar.cdp.org.ly/wp-content/uploads/2021/06/%D8%B1%D8%A4%D9%8A%D8%A9-%D9%84%D9%8A%D8%A8%D9%8A%D8%A7-%D8%A7%D9%84%D9%88%D8%A7%D8%B9%D8%AF%D8%A9-2021-1-1-min-180x180.jpg"
              alt="رؤية ليبيا الواعدة"
              class="w-full h-full object-cover absolute inset-0 z-10 transition-transform duration-500 group-hover:scale-105"
              @error="$event.target.style.display='none'"
            />
          </div>
          <div class="p-6 text-right flex-1 flex flex-col">
            <h3 class="text-xl font-bold text-[#0f386f] mb-3">رؤية ليبيا الواعدة</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-6">وثيقة رؤية ليبيا الواعدة كما نشرت في الأرشيف، مع وصف موجز ومباشر.</p>
            <div class="mt-auto flex justify-start">
              <a :href="`${baseUrl}publications/vision.pdf`" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-full bg-[#ffd200] text-[#003a6a] font-bold px-5 py-2.5 transition hover:bg-[#e6bb00] text-sm">تحميل الوثيقة</a>
            </div>
          </div>
        </div>

        <div class="bg-gray-50 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-gray-100 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
          <div class="w-full h-56 bg-gradient-to-br from-[#003a6a]/5 to-[#1c41d8]/10 flex items-center justify-center relative overflow-hidden">
            <img :src="`${baseUrl}logo.png`" class="w-24 h-auto opacity-30 grayscale mix-blend-multiply transition-transform duration-500 group-hover:scale-110" alt="CDP Placeholder">
            <img
              src="https://web.archive.org/web/20241008002554im_/https://ar.cdp.org.ly/wp-content/uploads/2021/05/WhatsApp-Image-2021-05-18-at-11.16.22-AM-180x180.jpeg"
              alt="المواطنة"
              class="w-full h-full object-cover absolute inset-0 z-10 transition-transform duration-500 group-hover:scale-105"
              @error="$event.target.style.display='none'"
            />
          </div>
          <div class="p-6 text-right flex-1 flex flex-col">
            <h3 class="text-xl font-bold text-[#0f386f] mb-3">المواطنة</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-6">وثيقة تتناول مفهوم المواطنة وممارستها كما نشرها الحزب المدني الديمقراطي.</p>
            <div class="mt-auto flex justify-start">
              <a :href="`${baseUrl}publications/citizenship.pdf`" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-full bg-[#ffd200] text-[#003a6a] font-bold px-5 py-2.5 transition hover:bg-[#e6bb00] text-sm">تحميل الوثيقة</a>
            </div>
          </div>
        </div>

        <div class="bg-gray-50 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-gray-100 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
          <div class="w-full h-56 bg-gradient-to-br from-[#003a6a]/5 to-[#1c41d8]/10 flex items-center justify-center relative overflow-hidden">
            <img :src="`${baseUrl}logo.png`" class="w-24 h-auto opacity-30 grayscale mix-blend-multiply transition-transform duration-500 group-hover:scale-110" alt="CDP Placeholder">
            <img
              src="https://web.archive.org/web/20241008002554im_/https://ar.cdp.org.ly/wp-content/uploads/2021/05/WhatsApp-Image-2021-05-23-at-3.47.37-PM-180x180.jpeg"
              alt="مطوية التكتل المدني الديمقراطي"
              class="w-full h-full object-cover absolute inset-0 z-10 transition-transform duration-500 group-hover:scale-105"
              @error="$event.target.style.display='none'"
            />
          </div>
          <div class="p-6 text-right flex-1 flex flex-col">
            <h3 class="text-xl font-bold text-[#0f386f] mb-3">مطوية التكتل المدني الديمقراطي</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-6">مطوية رسمية للتكتل المدني الديمقراطي، متاحة للتحميل مباشرة.</p>
            <div class="mt-auto flex justify-start">
               <a :href="`${baseUrl}publications/brochure.pdf`" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-full bg-[#ffd200] text-[#003a6a] font-bold px-5 py-2.5 transition hover:bg-[#e6bb00] text-sm">تحميل الوثيقة</a>
            </div>
          </div>
        </div>

        <div class="bg-gray-50 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-gray-100 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
          <div class="w-full h-56 bg-gradient-to-br from-[#003a6a]/5 to-[#1c41d8]/10 flex items-center justify-center relative overflow-hidden">
            <img :src="`${baseUrl}logo.png`" class="w-24 h-auto opacity-30 grayscale mix-blend-multiply transition-transform duration-500 group-hover:scale-110" alt="CDP Placeholder">
            <img
              src="https://web.archive.org/web/20241008002554im_/https://ar.cdp.org.ly/wp-content/uploads/2021/08/b652aab9-8135-4001-9700-dfc620b21dcc-180x180.jpg"
              alt="مدونة السلوك"
              class="w-full h-full object-cover absolute inset-0 z-10 transition-transform duration-500 group-hover:scale-105"
              @error="$event.target.style.display='none'"
            />
          </div>
          <div class="p-6 text-right flex-1 flex flex-col">
            <h3 class="text-xl font-bold text-[#0f386f] mb-3">مدونة السلوك</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-6">مدونة سلوك الحزب المدني الديمقراطي مع المبادئ والقواعد التنظيمية.</p>
            <div class="mt-auto flex justify-start">
               <a :href="`${baseUrl}publications/code-of-conduct.pdf`" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-full bg-[#ffd200] text-[#003a6a] font-bold px-5 py-2.5 transition hover:bg-[#e6bb00] text-sm">تحميل الوثيقة</a>
            </div>
          </div>
        </div>

        <div class="bg-gray-50 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-gray-100 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
          <div class="w-full h-56 bg-gradient-to-br from-[#003a6a]/5 to-[#1c41d8]/10 flex items-center justify-center relative overflow-hidden">
            <img :src="`${baseUrl}logo.png`" class="w-24 h-auto opacity-30 grayscale mix-blend-multiply transition-transform duration-500 group-hover:scale-110" alt="CDP Placeholder">
            <img
              src="https://web.archive.org/web/20241008002554im_/https://ar.cdp.org.ly/wp-content/uploads/2021/05/WhatsApp-Image-2021-05-26-at-1.04.11-PM-180x180.jpeg"
              alt="الخطة الاستراتيجية"
              class="w-full h-full object-cover absolute inset-0 z-10 transition-transform duration-500 group-hover:scale-105"
              @error="$event.target.style.display='none'"
            />
          </div>
          <div class="p-6 text-right flex-1 flex flex-col">
            <h3 class="text-xl font-bold text-[#0f386f] mb-3">الخطة الاستراتيجية</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-6">الخطة الاستراتيجية للحزب المدني الديمقراطي مع أهدافه وبرامجه المستقبلية.</p>
            <div class="mt-auto flex justify-start">
              <a :href="`${baseUrl}publications/strategy.pdf`" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-full bg-[#ffd200] text-[#003a6a] font-bold px-5 py-2.5 transition hover:bg-[#e6bb00] text-sm">تحميل الوثيقة</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
const baseUrl = import.meta.env.BASE_URL
</script>

<style scoped>
.hero-banner { position: relative; overflow: hidden; background: linear-gradient(135deg, #003a6a 0%, #0f3c5f 50%, #1c41d8 100%); }
.hero-pattern { position: absolute; inset: 0; opacity: 0.07; }
.hero-glow { position: absolute; inset: 0; background: radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.08), transparent 60%); }
</style>
