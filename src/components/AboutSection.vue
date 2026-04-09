<template>
  <section class="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50/80 relative overflow-hidden">
    <!-- Decorative background elements -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-[#003a6a]/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
    <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#ffd200]/[0.05] rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      <!-- Section Title -->
      <div class="text-center mb-20 reveal">
        <h2 class="text-3xl md:text-5xl font-extrabold text-[#003a6a] mb-6">من نحن</h2>
        <div class="w-24 h-1.5 bg-[#ffd200] mx-auto rounded-full"></div>
      </div>

      <!-- Two Column: Text + Logo -->
      <div class="flex flex-col md:flex-row items-center gap-12 md:gap-20 mb-24">
        
        <!-- Text Column -->
        <div class="w-full md:w-3/5 text-justify space-y-6 text-gray-600 text-base md:text-lg leading-loose md:leading-loose reveal-left">
          <div class="bg-white p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative">
            <!-- Accent detail -->
            <div class="absolute top-10 right-0 w-1.5 h-24 bg-gradient-to-b from-[#003a6a] to-[#1c41d8] rounded-l-full"></div>
            
            <p class="mb-6 text-gray-700 leading-relaxed font-medium">
              انطلاقاً من قناعة راسخة بأن قيام الدولة المدنية الديمقراطية لا يمكن أن يكون إلا بوجود قوى سياسية، تنتهج أسلوب العمل الجماعي المنظم، للتعبير عن رؤية شاملة لطبيعة الدولة التي يطمح لتأسيسها وبنائها، وتصورات وبرامج علمية مدروسة لآفاق تطوير الحياة فيها وتنميتها، حتى تبلغ المرجو لها من مستويات حضارية وعلمية واقتصادية وثقافية مأمولة.
            </p>
            <p class="text-gray-600 leading-relaxed">
              وقراءة للمشهد السياسي الذي لا بد أننا واصلون إليه في مستقبل قد لا يكون بعيداً جداً، سوف يواجه فيه الليبيون استحقاقات انتخابية بالغة الأهمية، في مقدمتها استحقاق الاستفتاء الشعبي على الدستور الدائم للبلاد، واستحقاقات الانتخابات العامة، البرلمانية والرئاسية، فإن الحاجة سوف تكون ماسة جداً لمواجهة القوى السياسية في البلاد هذه الاستحقاقات الانتخابية، وهي مجتمعة حول موقف انتخابي واحد، منطلق من رؤية سياسية محددة الملامح.
            </p>
          </div>
        </div>

        <!-- Logo Column -->
        <div class="w-full md:w-2/5 flex justify-center reveal-right relative">
          <!-- Subtle glow effect behind logo -->
          <div class="absolute inset-0 bg-[#ffd200]/10 rounded-full blur-3xl scale-150 -z-10 mix-blend-multiply"></div>
          <div class="absolute inset-0 bg-[#003a6a]/10 rounded-full blur-3xl scale-125 -z-10 translate-y-10 mix-blend-multiply"></div>
          
          <img :src="`${baseUrl}logo.png`" alt="الحزب المدني الديمقراطي" class="w-64 md:w-80 h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out" />
        </div>
      </div>

      <!-- Centered heading -->
      <div class="text-center mb-16 reveal">
        <h2 class="text-2xl md:text-3xl font-extrabold text-gray-900 leading-relaxed md:leading-relaxed px-4 inline-block relative">
          فإننا -نحن مجموعة من المواطنين الليبيين المؤمنين بهذه القناعة ، نعلن الآتي:
          <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </h2>
      </div>

      <!-- 3 Numbered Cards -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 stagger-children">
        
        <div class="reveal group bg-white rounded-3xl border border-gray-100 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,58,106,0.08)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden" style="--i: 0">
          <div class="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-[#ffd200] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#003a6a] to-[#1c41d8] flex items-center justify-center text-white font-black text-2xl mb-8 shadow-lg transform group-hover:rotate-6 transition-transform duration-300">
            1
          </div>
          <p class="text-justify text-gray-600 text-base leading-relaxed">
            إننا نوجه الدعوة لكل من يشاركنا الإيمان بهذه القناعة للانضمام إلى الحزب المدني الديمقراطي، باعتباره منطلقاً لإطار سياسي قوي، يمد فروعه في كل أرجاء الوطن، ويجمع بينهم جميعاً في إطار عملي سياسي تكون له كلمة في تحديد ملامح مستقبل بلادنا النامية المزدهرة إن شاء الله.
          </p>
        </div>

        <div class="reveal group bg-white rounded-3xl border border-gray-100 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,58,106,0.08)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden" style="--i: 1">
          <div class="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-[#ffd200] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#003a6a] to-[#1c41d8] flex items-center justify-center text-white font-black text-2xl mb-8 shadow-lg transform group-hover:rotate-6 transition-transform duration-300">
            2
          </div>
          <p class="text-justify text-gray-600 text-base leading-relaxed">
            أننا ننطلق من القناعة بأهمية أن يكون الجامع بيننا هو رؤيتنا للدولة المدنية التي نحلم ونتعهد بالسعي لبنائها، وعلى كل التفاصيل التي نرى أن تُبنى عليها تلك الدولة، بما يستجيب لتطلعات كل أبناء الوطن نحو دولة تحقق لهم جميعاً، أينما كانوا وحيثما يعيشون، أرقى مستوى من العيش الكريم اللائق، وتحقق للبلاد كلها أرقى مستوى من النهضة العمرانية والثقافية، وأرقى مستويات التنمية البشرية والاقتصادية.
          </p>
        </div>

        <div class="reveal group bg-white rounded-3xl border border-gray-100 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,58,106,0.08)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden" style="--i: 2">
          <div class="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-[#ffd200] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#003a6a] to-[#1c41d8] flex items-center justify-center text-white font-black text-2xl mb-8 shadow-lg transform group-hover:rotate-6 transition-transform duration-300">
            3
          </div>
          <p class="text-justify text-gray-600 text-base leading-relaxed">
            أننا أسسنا (عام 2018م) حزباً سياسياً وطنياً شاملاً، يجمع الليبيين المؤمنين بالدولة المدنية الديمقراطية، من كل أنحاء الوطن؛ من كل مدنه وقراه، ومناطقه وأقاليمه وجهاته.
          </p>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { useReveal } from '../composables/useReveal'
const baseUrl = import.meta.env.BASE_URL
useReveal()
</script>

<style scoped>
</style>
