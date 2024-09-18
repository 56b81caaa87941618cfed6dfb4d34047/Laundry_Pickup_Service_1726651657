<template>
  <div>
    <section class="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8 bg-white">
      <div class="space-y-3 text-center">
        <h1 class="text-4xl text-gray-800 font-semibold pt-10">Frequently Asked Questions</h1>
        <p class="text-gray-600 max-w-lg mx-auto text-lg">Everything you need to know about our laundry pickup and delivery service</p>
      </div>
      <div class="mt-14 max-w-2xl mx-auto">
        <div v-for="(item, index) in faqs" :key="index" class="space-y-5 mt-5 overflow-hidden border-b border-gray-200 hover:bg-gray-50 cursor-pointer" @click="toggleFaq(index)">
          <h4 class="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
            {{ item.q }}
            <!-- SVG adjustment depending on whether faq is selected -->
            <svg v-if="selectedFaq === index" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
          </h4>
          <div v-show="selectedFaq === index" style="overflow: hidden; transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;" :style="{ maxHeight: selectedFaq === index ? '1000px' : '0px', opacity: selectedFaq === index ? 1 : 0 }">
            <div class="px-4 py-6">
              <p class="text-gray-700 pb-4 max-w-full text-lg">{{ item.a }}</p>
            </div>
          </div>
          <br/><br/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'FaqAccordion',
  data() {
    return {
      selectedFaq: null,
      faqs: [
        { q: "How does your laundry pickup and delivery service work?", a: "Our service is simple: schedule a pickup through our app, we collect your laundry, clean it at our partner facilities, and deliver it back to you at your chosen time. It's convenient, fast, and hassle-free!" },
        { q: "What areas do you serve?", a: "We currently operate in major metropolitan areas. Check our app for specific coverage in your location. We're continuously expanding our service area to reach more customers." },
        { q: "How much does the service cost?", a: "Our pricing is based on weight and specific laundry needs. You can get an instant quote through our app by entering your laundry details. We offer competitive rates and various package options to suit different budgets." },
        { q: "What if I'm not home for pickup or delivery?", a: "No problem! You can specify a safe place for pickup and delivery in the app. Alternatively, you can authorize us to collect from or deliver to a neighbor or your building's reception area." },
        { q: "How do you ensure the quality of cleaning?", a: "We partner with top-rated, professional laundry facilities that adhere to strict quality standards. All items are carefully sorted, cleaned, and inspected before delivery. We also offer a satisfaction guarantee on all our services." }
      ]
    }
  },
  methods: {
    toggleFaq(index) {
      this.selectedFaq = this.selectedFaq === index ? null : index;
    }
  }
}
</script>

<style scoped>
/* Add any desired scoped CSS here */
</style>
