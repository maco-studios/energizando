<template>
  <div class="bg-white  py-24 sm:py-32" id="product">
    <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Benefícios da Energia Solar</p>
        <p class="mt-6 text-lg leading-8 text-gray-600">Nossos sistemas de energia solar são projetados para máximo desempenho, garantindo que sua casa seja abastecida por energia limpa e renovável. Com tecnologia de ponta, oferecemos soluções que se adaptam perfeitamente ao seu consumo e ao perfil do seu telhado.</p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <div v-for="feature in features" :key="feature.name" class="flex flex-col">
            <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
              <component :is="feature.icon" class="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              {{ feature.name }}
            </dt>
            <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
              <p class="flex-auto">{{ feature.description }}</p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { 
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  BanknotesIcon,
  GlobeAmericasIcon,
  ArrowTrendingUpIcon
} from '@heroicons/vue/20/solid'

const features = [
  {
    name: 'Economia',
    description:
      'Reduza sua conta de luz em até 100% e proteja-se contra futuros aumentos tarifários.',
    href: '#',
    icon: BanknotesIcon,
  },
  {
    name: 'Sustentabilidade',
    description:
      'Contribua para um mundo mais limpo, reduzindo a emissão de gases do efeito estufa.',
    href: '#',
    icon: GlobeAmericasIcon,
  },
  {
    name: 'Valorização do Imóvel',
    description:
      'Imóveis com sistemas de energia solar têm uma valorização no mercado, além de serem mais atraentes para compradores e locatários.',
    href: '#',
    icon: ArrowTrendingUpIcon,
  },
]
</script>