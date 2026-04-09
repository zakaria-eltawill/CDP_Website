<template>
  <section class="contact-page min-h-screen bg-gradient-to-br from-[#f8fbff] via-[#f0f4ff] to-[#eaf0fa] pb-16" dir="rtl">
    <!-- Hero -->
    <div class="relative flex flex-col items-center justify-center text-center py-24 md:py-32 mb-10 overflow-hidden" style="background: linear-gradient(135deg, #003a6a 0%, #0f3c5f 50%, #1c41d8 100%);">
      <!-- Pattern -->
      <div class="absolute inset-0 opacity-[0.07]" style="background-image: url('/pattern-bg.png'); background-repeat: repeat;"></div>
      <!-- Glow -->
      <div class="absolute inset-0" style="background: radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.08), transparent 60%);"></div>
      <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow">لنبقى على تواصل</h1>
        <div class="w-24 h-1.5 bg-[#ffd200] mx-auto mb-6"></div>
        <p class="text-xl text-white/90 font-medium mb-2">طرق التواصل معنا كالتالي</p>
      </div>
    </div>

    <!-- Contact Cards -->
    <div class="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
      <div class="contact-card group">
        <span class="icon-wrapper"><i class="fa fa-phone"></i></span>
        <h5>رقم هاتف التكتّل</h5>
        <p>+218916861959</p>
      </div>
      <div class="contact-card group">
        <span class="icon-wrapper"><i class="fa fa-map-marker"></i></span>
        <h5>وصف الفرع الرئيسي</h5>
        <p>بنغازي, ليبيا</p>
      </div>
      <div class="contact-card group">
        <span class="icon-wrapper"><i class="fa fa-envelope"></i></span>
        <h5>راسلنا على الايميل التالي</h5>
        <p>info@cdp.org.ly</p>
      </div>
    </div>

    <!-- Map -->
    <div class="max-w-4xl mx-auto px-4 mb-14">
      <div class="rounded-3xl overflow-hidden shadow-xl border border-[#e5e7eb]">
        <iframe class="w-full h-96" frameborder="0" style="border:0" allowfullscreen
          src="https://www.google.com/maps?q=بنغازي,ليبيا&output=embed"></iframe>
      </div>
    </div>

    <!-- Contact Form -->
    <div class="max-w-2xl mx-auto px-4">
      <div class="bg-white/90 rounded-3xl p-10 shadow-2xl border border-[#e5e7eb]">
        <h3 class="text-2xl font-bold mb-8 text-[#003a6a]">نموذج التواصل</h3>
        <form class="space-y-7">
          <div class="form-group">
            <input type="text" required maxlength="25" class="form-input peer" placeholder=" "/>
            <label class="form-label">اسمك بالكامل</label>
          </div>
          <div class="form-group">
            <input type="tel" required pattern="^(\+218|09)[0-9]+$" title="يجب أن يبدأ رقم الهاتف بـ +218 أو 09 ويحتوي على أرقام فقط" maxlength="20" class="form-input peer" placeholder=" "/>
            <label class="form-label">رقم هاتفك</label>
          </div>
          <div class="form-group">
            <input type="email" required class="form-input peer" placeholder=" "/>
            <label class="form-label">بريدك الإلكتروني</label>
          </div>
          <div class="form-group">
            <textarea required maxlength="1000" rows="5" class="form-input peer resize-none" placeholder=" "></textarea>
            <label class="form-label">رسالتك</label>
          </div>
          <button type="submit" class="w-full py-3 bg-[#ffd200] text-[#003a6a] font-bold rounded-xl shadow-lg hover:bg-[#ffe033] transition text-lg">ارسال</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
// No logic needed for static contact form
</script>

<style scoped>
.contact-page {
  font-family: 'Tajawal', sans-serif;
}

.contact-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(28,65,216,0.07);
  border: 1px solid #e5e7eb;
  transition: transform 0.3s, box-shadow 0.3s;
}
.contact-card:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 16px 40px rgba(28,65,216,0.13);
}
.contact-card h5 {
  font-weight: bold;
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
  color: #003a6a;
}
.contact-card p {
  font-size: 1rem;
  color: #374151;
}
.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 9999px;
  background: rgba(255,210,0,0.8);
  color: #003a6a;
  font-size: 2rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 16px rgba(244,183,19,0.13);
  transition: background 0.3s, color 0.3s;
}
.contact-card:hover .icon-wrapper {
  background: #003a6a;
  color: #ffd200;
}

.form-group {
  position: relative;
}
.form-input {
  width: 100%;
  border-radius: 0.75rem;
  border: 1px solid #d1d5db;
  background: white;
  padding: 1rem 1rem 1rem 0.75rem;
  padding-top: 1.75rem;
  font-size: 1rem;
  outline: none;
  transition: border 0.2s, box-shadow 0.2s;
}
.form-input:focus {
  border-color: #1c41d8;
  box-shadow: 0 0 0 2px #c7d2fe44;
}
.form-label {
  position: absolute;
  right: 1rem;
  top: 1.1rem;
  color: #6b7280;
  pointer-events: none;
  transition: all 0.2s;
  background: white;
  padding: 0 0.25rem;
  font-size: 1rem;
}
.form-input:focus + .form-label,
.form-input:not(:placeholder-shown) + .form-label {
  top: -0.7rem;
  right: 0.8rem;
  font-size: 0.75rem;
  color: #1c41d8;
  background: white;
}
</style>
