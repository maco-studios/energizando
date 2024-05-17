<template>
  <div class="bg-white py-24 sm:py-32" id="team">
    <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
      <div class="max-w-2xl">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Conheça nossa equipe</h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">Nossa equipe é formada por profissionais apaixonados por energia solar e sustentabilidade. Estamos comprometidos em oferecer as melhores soluções para você e sua família.</p>
      </div>
      <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
        <li v-for="person in people" :key="person.name">
          <div class="flex items-center gap-x-6">
            <img class="h-16 w-16 rounded-full" :src="person.imageUrl" alt="" />
            <div>
              <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">{{ person.name }}</h3>
              <p class="text-sm font-semibold leading-6 text-indigo-600">{{ person.role }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>


const people = [
  {
    name: 'Mikael NF Oliveira',
    role: 'Co-Founder / CEO',
    imageUrl: '../assets/img/team/mikael.jpg',
  },
  {
    name: "Taciane Moura",
    role: 'Co-Founder / CFO',
    imageUrl: '../assets/img/team/taciane.jpg',
  }
]
</script>